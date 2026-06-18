// ============================================================
// Certus — onboarding drip cron
// Runs daily (Vercel Cron). Finds users who signed up but haven't
// subscribed, and sends the next email in their sequence based on how
// long ago they signed up. Idempotent: drip_step advances per send.
//
// Security: Vercel Cron includes `Authorization: Bearer <CRON_SECRET>`
// when CRON_SECRET is set in env — we require it.
// ============================================================

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendEmail } from "@/lib/email";
import { dripEmail, DRIP_STEPS, STEP_DUE_HOURS } from "@/lib/dripEmails";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

interface DripUser {
  id: string;
  email: string;
  created_at: string;
  drip_step: number | null;
}

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Candidates: free users, not unsubscribed, signed up within the last 10
  // days, who still have drip steps remaining.
  const since = new Date(Date.now() - 10 * 24 * 3600 * 1000).toISOString();
  const { data, error } = await supabase
    .from("users")
    .select("id,email,created_at,drip_step")
    .eq("is_pro", false)
    .or("email_unsubscribed.is.null,email_unsubscribed.eq.false")
    .gte("created_at", since)
    .lt("drip_step", DRIP_STEPS)
    .limit(500);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const users = (data ?? []) as DripUser[];
  let sent = 0;

  for (const u of users) {
    const nextStep = u.drip_step ?? 0;
    if (nextStep >= DRIP_STEPS) continue;
    const ageHours = (Date.now() - new Date(u.created_at).getTime()) / 3_600_000;
    if (ageHours < STEP_DUE_HOURS[nextStep]) continue; // not due yet
    if (!u.email) continue;

    const mail = dripEmail(nextStep, u.id);
    const ok = await sendEmail({ to: u.email, subject: mail.subject, html: mail.html });
    if (ok) {
      await supabase
        .from("users")
        .update({ drip_step: nextStep + 1, drip_last_sent_at: new Date().toISOString() })
        .eq("id", u.id);
      sent++;
    }
  }

  return NextResponse.json({ ok: true, candidates: users.length, sent });
}
