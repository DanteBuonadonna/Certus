import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";
import {
  EXTRA_WEEK_DAYS,
  SAVE_DISCOUNT_PERCENT,
  SAVE_DISCOUNT_MONTHS,
  META_WEEK_USED,
  META_DISCOUNT_USED,
  META_CANCEL_REASON,
} from "@/lib/retention";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

// ============================================================
// RETENTION / SAVE OFFERS
//
// Backs the cancel-flow modal. Actions:
//   status         → which offers is this subscriber still eligible for?
//   extend_week    → give +7 free days
//   log_reason     → record why they're leaving (works even if they then cancel)
//   apply_discount → 50% off for 3 months
//
// HOW THE FREE WEEK WORKS
// Both trialing and paying subscribers are handled by the SAME operation:
// set `trial_end` further out.
//   - trialing sub  → trial_end moves 7 days later, trial simply runs longer.
//   - active sub    → Stripe moves it back to `trialing` until that date, so
//                     the next invoice is deferred. They already paid for the
//                     current period, so we push from current_period_end and
//                     they get 7 genuinely free days on top of what they own.
// proration_behavior: "none" so nobody is credited or charged for the change.
//
// ELIGIBILITY is stored in Stripe subscription metadata, NOT localStorage.
// localStorage resets on a new browser and would let one person farm
// unlimited free weeks.
// ============================================================

async function customerIdFromEmail(raw: string): Promise<string | null> {
  const candidates = Array.from(new Set([raw.trim(), raw.trim().toLowerCase()]));
  for (const email of candidates) {
    const customers = await stripe.customers.list({ email, limit: 10 });
    for (const customer of customers.data) {
      const subs = await stripe.subscriptions.list({
        customer: customer.id,
        status: "all",
        limit: 20,
      });
      if (subs.data.length > 0) return customer.id;
    }
  }
  return null;
}

async function resolveCustomerId(email: string): Promise<string | null> {
  // 1) Signed-in user → resolve through their account.
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const { data: row } = await supabase
        .from("users")
        .select("stripe_customer_id")
        .eq("id", user.id)
        .single();
      if (row?.stripe_customer_id) return row.stripe_customer_id;
    }
  } catch {
    // Supabase unreachable / guest — fall through.
  }
  // 2) Guest → resolve by the email on their receipt.
  if (email.includes("@")) return customerIdFromEmail(email);
  return null;
}

/** The subscription we can still act on: trialing or active, not already ended. */
async function activeSub(customerId: string): Promise<Stripe.Subscription | null> {
  const subs = await stripe.subscriptions.list({
    customer: customerId,
    status: "all",
    limit: 20,
  });
  const live = subs.data.filter(
    (s) => s.status === "active" || s.status === "trialing" || s.status === "past_due"
  );
  if (!live.length) return null;
  // Most recently created wins if somehow there are several.
  return live.sort((a, b) => b.created - a.created)[0];
}

/** Reuse a configured coupon, else create one matching our config (idempotent by id). */
async function saveCouponId(): Promise<string> {
  const configured = process.env.STRIPE_SAVE_COUPON_ID;
  if (configured) return configured;

  const id = `certus-save-${SAVE_DISCOUNT_PERCENT}off-${SAVE_DISCOUNT_MONTHS}mo`;
  try {
    const existing = await stripe.coupons.retrieve(id);
    if (existing && !existing.deleted) return existing.id;
  } catch {
    // Not found — create it below.
  }
  const created = await stripe.coupons.create({
    id,
    percent_off: SAVE_DISCOUNT_PERCENT,
    duration: "repeating",
    duration_in_months: SAVE_DISCOUNT_MONTHS,
    name: `${SAVE_DISCOUNT_PERCENT}% off for ${SAVE_DISCOUNT_MONTHS} months (cancel save)`,
  });
  return created.id;
}

export async function POST(request: Request) {
  try {
    let action = "status";
    let email = "";
    let reason = "";
    try {
      const body = await request.json();
      if (typeof body?.action === "string") action = body.action;
      if (typeof body?.email === "string") email = body.email;
      if (typeof body?.reason === "string") reason = body.reason;
    } catch {
      // No body — treat as a status check.
    }

    const customerId = await resolveCustomerId(email);
    if (!customerId) {
      return NextResponse.json(
        { error: "Enter the email on your receipt so we can find your subscription." },
        { status: 400 }
      );
    }

    const sub = await activeSub(customerId);
    if (!sub) {
      // Nothing live to save. Don't block them — let the UI send them to the portal.
      return NextResponse.json({ weekAvailable: false, discountAvailable: false, noSubscription: true });
    }

    const weekUsed = sub.metadata?.[META_WEEK_USED] === "1";
    const discountUsed = sub.metadata?.[META_DISCOUNT_USED] === "1";

    if (action === "status") {
      return NextResponse.json({
        weekAvailable: !weekUsed,
        discountAvailable: !discountUsed,
        status: sub.status,
        currentPeriodEnd: sub.current_period_end,
      });
    }

    if (action === "extend_week") {
      if (weekUsed) {
        return NextResponse.json({ error: "already_used", weekAvailable: false }, { status: 409 });
      }
      // Push from whichever boundary is further out. A trialing sub extends its
      // trial; an active sub gets 7 free days after the period they already paid for.
      const base = sub.trial_end ?? sub.current_period_end;
      const newTrialEnd = base + EXTRA_WEEK_DAYS * 24 * 60 * 60;

      const updated = await stripe.subscriptions.update(sub.id, {
        trial_end: newTrialEnd,
        proration_behavior: "none",
        // If they'd already scheduled a cancel, honouring the extra week means
        // clearing it — otherwise we'd "give" them a week and still cancel.
        cancel_at_period_end: false,
        metadata: { ...sub.metadata, [META_WEEK_USED]: "1" },
      });

      return NextResponse.json({
        ok: true,
        newRenewalDate: updated.trial_end ?? newTrialEnd,
        days: EXTRA_WEEK_DAYS,
      });
    }

    if (action === "log_reason") {
      // Recorded regardless of whether they go on to cancel — that's the point.
      await stripe.subscriptions.update(sub.id, {
        metadata: { ...sub.metadata, [META_CANCEL_REASON]: reason.slice(0, 400) },
      });
      return NextResponse.json({ ok: true });
    }

    if (action === "apply_discount") {
      if (discountUsed) {
        return NextResponse.json({ error: "already_used", discountAvailable: false }, { status: 409 });
      }
      const coupon = await saveCouponId();
      const updated = await stripe.subscriptions.update(sub.id, {
        coupon,
        proration_behavior: "none",
        cancel_at_period_end: false,
        metadata: { ...sub.metadata, [META_DISCOUNT_USED]: "1" },
      });
      return NextResponse.json({
        ok: true,
        percentOff: SAVE_DISCOUNT_PERCENT,
        months: SAVE_DISCOUNT_MONTHS,
        nextInvoice: updated.current_period_end,
      });
    }

    return NextResponse.json({ error: "Unknown action." }, { status: 400 });
  } catch (err) {
    console.error("Retention route error:", err);
    // Never trap someone in a broken save flow — the UI falls through to the
    // portal on any error, so a failure here still lets them cancel.
    return NextResponse.json({ error: "Could not load offers." }, { status: 500 });
  }
}
