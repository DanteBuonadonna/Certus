// ============================================================
// Adds a new signup to the Resend audience, so the marketing list builds
// itself instead of being a CSV you remember to export twice a year.
//
// Deliberately fail-soft: if Resend is misconfigured or down, we swallow it
// and return ok. Nothing about signing up for Certus should ever break
// because a marketing email vendor had a bad day.
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const key = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!key || !audienceId) {
    // Not configured yet — that's fine, this is additive.
    return NextResponse.json({ ok: true, skipped: "not_configured" });
  }

  let email = "";
  try {
    const body = await req.json();
    email = String(body?.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    const resend = new Resend(key);
    await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });
  } catch {
    // Already on the list, rate-limited, whatever. Not the user's problem.
  }

  return NextResponse.json({ ok: true });
}
