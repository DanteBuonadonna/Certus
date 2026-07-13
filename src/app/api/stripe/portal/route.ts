import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

// ============================================================
// CUSTOMER PORTAL — update card, cancel subscription.
//
// Login is disabled, so every subscriber is a guest and there's no account to
// hang a stripe_customer_id on. This route used to 401 in that case, which
// meant NOBODY could cancel or manage their subscription from the app.
// A customer who can't cancel doesn't email you — they file a chargeback.
//
// Signed-in users resolve through their account as before. Guests resolve by
// the email on their receipt (same soft check as /api/stripe/restore).
//
// Requires the Customer Portal to be turned on in Stripe:
//   Settings → Billing → Customer portal → Activate
// ============================================================

async function customerIdFromEmail(raw: string): Promise<string | null> {
  const candidates = Array.from(new Set([raw.trim(), raw.trim().toLowerCase()]));
  for (const email of candidates) {
    const customers = await stripe.customers.list({ email, limit: 10 });
    for (const customer of customers.data) {
      const subs = await stripe.subscriptions.list({ customer: customer.id, status: "all", limit: 20 });
      if (subs.data.length > 0) return customer.id;
    }
  }
  return null;
}

export async function POST(request: Request) {
  try {
    let email = "";
    try {
      const body = await request.json();
      if (typeof body?.email === "string") email = body.email;
    } catch {
      // No body sent — fine, try the signed-in path.
    }

    let customerId: string | null = null;

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
        customerId = row?.stripe_customer_id ?? null;
      }
    } catch {
      // Supabase unreachable / guest — fall through to the email path.
    }

    // 2) Guest → resolve by the email they paid with.
    if (!customerId && email.includes("@")) {
      customerId = await customerIdFromEmail(email);
    }

    if (!customerId) {
      return NextResponse.json(
        { error: "Enter the email on your receipt so we can find your subscription." },
        { status: 400 }
      );
    }

    const origin =
      request.headers.get("origin") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000";

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${origin}/billing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe portal error:", err);
    return NextResponse.json({ error: "Could not open the billing portal." }, { status: 500 });
  }
}
