import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { getPostHogClient } from "@/lib/posthog-server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

// Service role bypasses RLS so the webhook can write entitlement.
function getServiceClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

async function setProById(userId: string, pro: boolean, customerId?: string | null) {
  const patch: Record<string, unknown> = { is_pro: pro };
  if (customerId) patch.stripe_customer_id = customerId;
  await getServiceClient().from("users").update(patch).eq("id", userId);
}

async function setProByCustomer(customerId: string, pro: boolean) {
  await getServiceClient().from("users").update({ is_pro: pro }).eq("stripe_customer_id", customerId);
}

// ---- Dunning state -------------------------------------------------------
// Separate from is_pro on purpose. During Stripe's retry window a customer
// KEEPS access (see the status map below) — but they have to be told the card
// failed, or they never fix it and the subscription silently cancels three
// weeks later. is_pro answers "can they use it"; this answers "is anything
// wrong". Requires the migration in supabase-migrations/002-payment-state.sql.
async function setPaymentState(
  customerId: string | null,
  state: "ok" | "past_due",
  extra?: { failedAt?: string | null },
) {
  if (!customerId) return;
  await getServiceClient()
    .from("users")
    .update({ payment_state: state, payment_failed_at: extra?.failedAt ?? null })
    .eq("stripe_customer_id", customerId);
}

/**
 * The single place that decides whether a subscription status grants access.
 *
 * past_due DELIBERATELY KEEPS ACCESS. That is the entire point of a retry
 * window: the most common reason a renewal fails is a re-issued or expired
 * card, not a customer who decided to stop paying. Locking someone out
 * mid-chapter over a new Visa loses a customer we already won.
 *
 * unpaid / canceled REVOKE. Those are terminal — Stripe only sets them once
 * every retry has been exhausted.
 *
 * WARNING: this only works if Stripe is configured to CANCEL (or mark unpaid)
 * after retries run out. If the dashboard is set to "leave past_due", nothing
 * here ever fires and the customer keeps access forever on a card that never
 * charged. That was the actual bug. See supabase-migrations/002 header.
 */
function grantsAccess(status: Stripe.Subscription.Status): boolean {
  switch (status) {
    case "active":
    case "trialing":
    case "past_due": // in dunning — still paying customers until proven otherwise
      return true;
    case "canceled":
    case "unpaid":
    case "incomplete":
    case "incomplete_expired":
    case "paused":
      return false;
    default:
      return false;
  }
}

// Two products flow through this webhook:
//  - The Associate credit packs  -> one-time payments (metadata.credits)
//  - The Pro subscription        -> recurring (no credits; subscription events)
export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.user_id;
        const creditsToAdd = parseInt(session.metadata?.credits ?? "0", 10);
        const customerId =
          typeof session.customer === "string" ? session.customer : session.customer?.id ?? null;

        if (creditsToAdd > 0) {
          // Credit-pack purchase (legacy DB credits ledger).
          if (userId && userId !== "guest") {
            const supabase = getServiceClient();
            const { data: current } = await supabase
              .from("credits")
              .select("balance")
              .eq("user_id", userId)
              .single();
            const newBalance = (current?.balance ?? 0) + creditsToAdd;
            await supabase
              .from("credits")
              .update({ balance: newBalance, updated_at: new Date().toISOString() })
              .eq("user_id", userId);
          }
          const ph = getPostHogClient();
          ph.capture({
            distinctId: userId ?? "guest",
            event: "credits_purchased",
            properties: { credits: creditsToAdd },
          });
        } else if (userId && userId !== "guest") {
          // Pro subscription — grant entitlement.
          await setProById(userId, true, customerId);
          const ph = getPostHogClient();
          ph.capture({
            distinctId: userId,
            event: "subscription_activated",
            properties: { plan: session.metadata?.plan },
          });
        }
        break;
      }
      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        const userId = sub.metadata?.user_id;
        const active = grantsAccess(sub.status);
        const customerId = typeof sub.customer === "string" ? sub.customer : sub.customer?.id ?? null;
        if (userId && userId !== "guest") {
          await setProById(userId, active, customerId);
        } else if (customerId) {
          await setProByCustomer(customerId, active);
        }
        // Clear the dunning banner the moment the subscription is healthy
        // again — a recovered card should not keep nagging.
        if (sub.status === "active" || sub.status === "trialing") {
          await setPaymentState(customerId, "ok");
        }
        getPostHogClient().capture({
          distinctId: userId ?? customerId ?? "guest",
          event: "subscription_status_changed",
          properties: { status: sub.status, grants_access: active, plan: sub.metadata?.plan },
        });
        break;
      }

      // NEITHER OF THESE WAS HANDLED. That's why failures were invisible:
      // a trial could end, the card could decline, and nothing anywhere in the
      // app or the analytics would record it.
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId =
          typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id ?? null;
        // Only subscription invoices matter here; a failed credit-pack payment
        // is a one-off with no access to protect.
        if (invoice.billing_reason === "subscription_create" || invoice.billing_reason === "subscription_cycle") {
          await setPaymentState(customerId, "past_due", { failedAt: new Date().toISOString() });
        }
        getPostHogClient().capture({
          distinctId: customerId ?? "guest",
          event: "invoice_payment_failed",
          properties: {
            billing_reason: invoice.billing_reason,
            attempt_count: invoice.attempt_count,
            amount_due: invoice.amount_due,
            // The first failure right after a trial is the one that matters
            // most — it's the conversion, not a renewal.
            is_trial_conversion: invoice.billing_reason === "subscription_create",
          },
        });
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId =
          typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id ?? null;
        await setPaymentState(customerId, "ok");
        // A success after attempt 1 is a RECOVERED payment — the thing the
        // whole retry schedule exists to produce. Tracked separately so the
        // recovery rate is measurable rather than assumed.
        if ((invoice.attempt_count ?? 0) > 1) {
          getPostHogClient().capture({
            distinctId: customerId ?? "guest",
            event: "invoice_payment_recovered",
            properties: { attempt_count: invoice.attempt_count, amount_paid: invoice.amount_paid },
          });
        }
        break;
      }
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        const userId = sub.metadata?.user_id;
        const customerId = typeof sub.customer === "string" ? sub.customer : sub.customer?.id ?? null;
        if (userId && userId !== "guest") {
          await setProById(userId, false);
        } else if (customerId) {
          await setProByCustomer(customerId, false);
        }
        // Access is gone, so the "update your card" banner is pointless now.
        await setPaymentState(customerId, "ok");
        const ph = getPostHogClient();
        ph.capture({
          distinctId: userId ?? customerId ?? "guest",
          event: "subscription_cancelled",
          properties: { plan: sub.metadata?.plan },
        });
        break;
      }
    }
  } catch (err) {
    console.error("Webhook handler error:", err);
    // 200 anyway so Stripe doesn't hammer retries on a transient DB blip;
    // the confirm route and later events reconcile.
  }

  return NextResponse.json({ received: true });
}
