// ============================================================
// Certus — trial-ending reminder cron (daily).
//
// THIS IS THE DISPUTE FIREWALL. Almost every trial chargeback is "I forgot I
// signed up", not "I was defrauded" — and a dispute costs a $15 non-refundable
// Stripe fee plus a tick against a ratio that must stay under 0.75%, EVEN IF WE
// WIN. Disclosure protects us from the FTC; this email protects us from Visa.
// They are different problems and only this one can close the account.
//
// Stripe is the source of truth (no DB column to drift): ask it for
// subscriptions that are actually `trialing` and ending soon. Idempotency lives
// in subscription metadata, so a double cron run can't double-send.
// ============================================================

import { NextResponse } from "next/server";
import Stripe from "stripe";
import { sendEmail } from "@/lib/email";
import { trialEndingEmail } from "@/lib/dripEmails";
import { TRIAL_REMINDER_DAYS_BEFORE } from "@/lib/trial";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const SENT_FLAG = "trial_reminder_sent";

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization");
  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ ok: true, skipped: "no stripe key" });
  }

  const now = Math.floor(Date.now() / 1000);
  const windowEnd = now + TRIAL_REMINDER_DAYS_BEFORE * 24 * 3600;

  let sent = 0;
  let checked = 0;

  try {
    const subs = await stripe.subscriptions.list({
      status: "trialing",
      limit: 100,
      expand: ["data.customer"],
    });

    for (const sub of subs.data) {
      checked++;
      if (!sub.trial_end) continue;
      // Only those inside the reminder window, and not already told.
      if (sub.trial_end > windowEnd) continue;
      if (sub.metadata?.[SENT_FLAG] === "1") continue;

      const customer = sub.customer as Stripe.Customer | Stripe.DeletedCustomer;
      const email =
        customer && !("deleted" in customer && customer.deleted)
          ? (customer as Stripe.Customer).email
          : null;
      if (!email) continue;

      const plan = (sub.metadata?.plan as "annual" | "monthly") ?? "annual";
      const mail = trialEndingEmail(plan, new Date(sub.trial_end * 1000));
      const ok = await sendEmail({ to: email, subject: mail.subject, html: mail.html });

      if (ok) {
        // Mark BEFORE counting — an unmarked send would re-fire tomorrow, and
        // nagging someone about a charge is its own way to earn a dispute.
        await stripe.subscriptions.update(sub.id, {
          metadata: { ...sub.metadata, [SENT_FLAG]: "1" },
        });
        sent++;
      }
    }
  } catch (err) {
    console.error("[trial-reminder] failed:", err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, checked, sent });
}
