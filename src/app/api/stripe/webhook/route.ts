import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

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
        } else if (userId && userId !== "guest") {
          // Pro subscription — grant entitlement.
          await setProById(userId, true, customerId);
        }
        break;
      }
      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        const userId = sub.metadata?.user_id;
        const active = sub.status === "active" || sub.status === "trialing";
        const customerId = typeof sub.customer === "string" ? sub.customer : sub.customer?.id ?? null;
        if (userId && userId !== "guest") {
          await setProById(userId, active, customerId);
        } else if (customerId) {
          await setProByCustomer(customerId, active);
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
