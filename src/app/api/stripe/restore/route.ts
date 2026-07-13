import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

// ============================================================
// RESTORE ACCESS
//
// Login is currently disabled, so anyone who subscribes does it as a guest —
// there's no account to hang `is_pro` on. That meant a guest could pay and
// never get unlocked. (It happened. Two real customers.)
//
// This lets them get in with the email they paid with: we look that email up
// in Stripe, confirm there's a live subscription on it, and unlock.
//
// NOTE: this trusts an email address, which is a soft check. That's consistent
// with the app's current client-side entitlement (see access.ts) and it goes
// away the moment real accounts come back — at which point restore should be a
// magic link, not a text box.
// ============================================================

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const raw = typeof body?.email === "string" ? body.email.trim() : "";
    if (!raw || !raw.includes("@")) {
      return NextResponse.json({ pro: false, error: "Enter the email you paid with." }, { status: 400 });
    }

    // Stripe's email filter is an exact match, so try what they typed and the
    // lowercased form (people capitalize their own emails constantly).
    const candidates = Array.from(new Set([raw, raw.toLowerCase()]));

    for (const email of candidates) {
      const customers = await stripe.customers.list({ email, limit: 10 });
      for (const customer of customers.data) {
        const subs = await stripe.subscriptions.list({
          customer: customer.id,
          status: "all",
          limit: 20,
        });
        const live = subs.data.some(
          (s) => s.status === "active" || s.status === "trialing" || s.status === "past_due"
        );
        if (live) {
          return NextResponse.json({ pro: true });
        }
      }
    }

    return NextResponse.json({
      pro: false,
      error: "No live subscription found for that email. Use the address on your receipt.",
    });
  } catch (err) {
    console.error("Stripe restore error:", err);
    return NextResponse.json({ pro: false, error: "Couldn't check right now. Try again." }, { status: 500 });
  }
}
