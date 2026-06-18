// ============================================================
// Certus — transactional email via Resend (REST, no SDK dependency)
// Guarded: if RESEND_API_KEY is missing it no-ops safely, so the build
// and cron never break while DNS/keys are still being set up.
// ============================================================

const RESEND_ENDPOINT = "https://api.resend.com/emails";

// Update the local part if you prefer (e.g. hello@ / team@). The domain
// must be the one you verified in Resend (certus.website).
export const EMAIL_FROM = "Certus <team@certus.website>";

// Canonical app URL used in email links. Override with NEXT_PUBLIC_SITE_URL.
export const APP_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://certus.website";

export async function sendEmail(opts: { to: string; subject: string; html: string }): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[email] RESEND_API_KEY not set — skipping send to", opts.to);
    return false;
  }
  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
      }),
    });
    if (!res.ok) {
      console.error("[email] send failed", res.status, await res.text());
      return false;
    }
    return true;
  } catch (e) {
    console.error("[email] send error", e);
    return false;
  }
}
