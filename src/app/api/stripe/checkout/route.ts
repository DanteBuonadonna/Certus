import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";
import { getPostHogClient } from "@/lib/posthog-server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

// Subscription plans -> the env var holding their Stripe recurring Price ID.
const PLAN_PRICE_ENV: Record<string, string | undefined> = {
  monthly: process.env.STRIPE_PRICE_MONTHLY,
  annual: process.env.STRIPE_PRICE_ANNUAL,
};

// Tutor credit packs -> one-time Stripe Price IDs + credits granted.
const CREDIT_PACKS: Record<string, { priceId: string | undefined; credits: number }> = {
  "credits-25": { priceId: process.env.STRIPE_PRICE_CREDITS_25, credits: 25 },
  "credits-100": { priceId: process.env.STRIPE_PRICE_CREDITS_100, credits: 100 },
  "credits-300": { priceId: process.env.STRIPE_PRICE_CREDITS_300, credits: 300 },
};

export async function POST(request: Request) {
  try {
    // Login is currently disabled, so checkout works for guests too.
    // If a Supabase session exists we attach the user; otherwise Stripe
    // collects the email at checkout and the webhook records it for
    // when accounts return.
    let userId: string | null = null;
    let userEmail: string | undefined = undefined;
    try {
      const supabase = await createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        userId = user.id;
        userEmail = user.email ?? undefined;
      }
    } catch {
      // No auth configured — proceed as guest.
    }

    const { plan } = await request.json();

    // Derive the app URL from the actual request so success/cancel
    // redirects work on any deployment (preview, prod, localhost).
    const origin =
      request.headers.get("origin") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000";

    // --- One-time credit packs for The Associate ---
    if (plan in CREDIT_PACKS) {
      const pack = CREDIT_PACKS[plan];
      if (!pack.priceId) {
        return NextResponse.json(
          { error: "This credit pack isn't configured yet. Add its Stripe Price ID to your environment." },
          { status: 400 }
        );
      }
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [{ price: pack.priceId, quantity: 1 }],
        metadata: { user_id: userId ?? "guest", plan, credits: String(pack.credits) },
        ...(userEmail ? { customer_email: userEmail } : {}),
        success_url: `${origin}/billing?credits_added=${pack.credits}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/billing?canceled=true`,
      });
      const ph = getPostHogClient();
      ph.capture({
        distinctId: userId ?? "guest",
        event: "checkout_session_created",
        properties: { plan, credits: pack.credits, mode: "payment" },
      });
      return NextResponse.json({ url: session.url });
    }

    // --- Subscriptions ---
    const priceId = PLAN_PRICE_ENV[plan];

    if (!priceId) {
      return NextResponse.json(
        { error: "This plan isn't configured yet. Add the Stripe Price ID to your environment." },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { user_id: userId ?? "guest", plan },
      subscription_data: { metadata: { user_id: userId ?? "guest", plan } },
      ...(userEmail ? { customer_email: userEmail } : {}),
      allow_promotion_codes: true,
      success_url: `${origin}/billing?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/billing?canceled=true`,
    });
    const ph = getPostHogClient();
    ph.capture({
      distinctId: userId ?? "guest",
      event: "checkout_session_created",
      properties: { plan, mode: "subscription" },
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session." },
      { status: 500 }
    );
  }
}
