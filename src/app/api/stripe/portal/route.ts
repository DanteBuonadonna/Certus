import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

// Opens the Stripe-hosted Customer Portal so a subscriber can update their
// card or cancel. Requires the Customer Portal to be activated in the Stripe
// dashboard (Settings → Billing → Customer portal → Activate).
export async function POST(request: Request) {
  let userId: string | null = null;
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    userId = user?.id ?? null;

    if (!userId) {
      return NextResponse.json({ error: "Not signed in" }, { status: 401 });
    }

    // The user can read their own row (RLS select policy) to get the customer id.
    const { data: row } = await supabase
      .from("users")
      .select("stripe_customer_id")
      .eq("id", userId)
      .single();

    const customerId = row?.stripe_customer_id;
    if (!customerId) {
      return NextResponse.json(
        { error: "No subscription found for this account yet." },
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
