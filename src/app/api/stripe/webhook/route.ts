import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

// Use service role for webhook (bypasses RLS)
function getServiceClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

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

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.user_id;
    const creditsToAdd = parseInt(session.metadata?.credits ?? "0", 10);

    if (userId && creditsToAdd > 0) {
      const supabase = getServiceClient();

      // Fetch current balance
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

      console.log(`✅ Credited ${creditsToAdd} credits to user ${userId}. New balance: ${newBalance}`);
    }
  }

  return NextResponse.json({ received: true });
}
