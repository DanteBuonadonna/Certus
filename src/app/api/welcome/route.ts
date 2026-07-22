// ============================================================
// Instant welcome email — fired on signup.
//
// Signing up used to send nothing; the first email was the drip, ~20h later,
// via a once-a-day cron. So a new account heard silence for up to two days and
// reasonably concluded it hadn't worked. This sends something in the first few
// seconds, which is table stakes for a product people are meant to trust.
//
// Fire-and-forget from the client, exactly like /api/contacts: it must never
// block or break signup because an email vendor had a bad moment. No-ops
// silently if RESEND_API_KEY isn't set.
// ============================================================

import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { welcomeEmail } from "@/lib/dripEmails";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { email, userId } = await req.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    const mail = welcomeEmail(typeof userId === "string" ? userId : "unknown");
    // Don't await hard-fail — sendEmail already returns false rather than throw
    // when the key is missing, so this is safe either way.
    const ok = await sendEmail({ to: email, subject: mail.subject, html: mail.html });
    return NextResponse.json({ ok });
  } catch {
    // Never surface an error to a just-signed-up user over a welcome email.
    return NextResponse.json({ ok: true, skipped: "error" });
  }
}
