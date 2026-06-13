import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";
import { createClient as createServiceClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

// Service-role client bypasses RLS so it can write is_pro (the browser
// cannot — that's the whole point of moving the paywall server-side).
function serviceClient() {
  return createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// Called by the billing page right after Stripe redirects back with
// ?success=true&session_id=... — flips the user to Pro immediately so they
// don't have to wait for the webhook. We verify the session is genuinely
// paid AND belongs to the logged-in user before granting anything.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
  }

  let userId: string | null = null;
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    userId = user?.id ?? null;
  } catch {
    userId = null;
  }
  if (!userId) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const paid = session.payment_status === "paid" || session.status === "complete";
    const sessionUser = session.metadata?.user_id;
    if (!paid || sessionUser !== userId) {
      return NextResponse.json({ pro: false }, { status: 200 });
    }

    const customerId =
      typeof session.customer === "string" ? session.customer : session.customer?.id ?? null;

    await serviceClient()
      .from("users")
      .update({ is_pro: true, stripe_customer_id: customerId })
      .eq("id", userId);

    return NextResponse.json({ pro: true });
  } catch (err) {
    console.error("Stripe confirm error:", err);
    return NextResponse.json({ error: "Could not confirm payment." }, { status: 500 });
  }
}
