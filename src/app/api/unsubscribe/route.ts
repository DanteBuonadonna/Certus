// ============================================================
// Certus — one-click email unsubscribe (CAN-SPAM compliance)
// Sets users.email_unsubscribed = true; the drip cron skips them.
// ============================================================

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

function page(message: string): NextResponse {
  return new NextResponse(
    `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#f4f4f7;margin:0;">
      <div style="max-width:480px;margin:80px auto;background:#fff;border:1px solid #e6e6ef;border-radius:14px;padding:36px;text-align:center;">
        <div style="font-size:18px;font-weight:700;color:#534AB7;margin-bottom:12px;">Certus</div>
        <p style="color:#33333d;font-size:15px;line-height:1.6;">${message}</p>
      </div>
    </body></html>`,
    { headers: { "Content-Type": "text/html" } }
  );
}

export async function GET(req: Request) {
  const u = new URL(req.url).searchParams.get("u");
  if (!u) return page("Invalid unsubscribe link.");
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    await supabase.from("users").update({ email_unsubscribed: true }).eq("id", u);
    return page("You've been unsubscribed from Certus emails. You can close this tab. You'll still have full access to your account.");
  } catch {
    return page("Something went wrong unsubscribing — email support@certus.website and we'll remove you right away.");
  }
}
