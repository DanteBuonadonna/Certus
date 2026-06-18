// ============================================================
// Certus — onboarding drip sequence (signed up, not yet subscribed)
// 3 emails sent over ~5 days. Content is written here; the cron in
// /api/cron/drip decides WHO gets WHICH step based on signup age.
// ============================================================

import { APP_URL } from "./email";
import { statHeadline } from "./contentStats";

export const DRIP_STEPS = 3;
// Hours after signup at which each step becomes due (step 1, 2, 3).
export const STEP_DUE_HOURS = [20, 72, 120];

const PRIMARY = "#534AB7";

function shell(bodyHtml: string, userId: string): string {
  const unsub = `${APP_URL}/api/unsubscribe?u=${encodeURIComponent(userId)}`;
  return `<!doctype html><html><body style="margin:0;background:#f4f4f7;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e6e6ef;">
        <tr><td style="padding:22px 28px;border-bottom:1px solid #eee;">
          <span style="font-size:18px;font-weight:700;color:${PRIMARY};letter-spacing:-0.3px;">Certus</span>
          <span style="font-size:12px;color:#9a9aa8;"> — the certain path to certified</span>
        </td></tr>
        <tr><td style="padding:28px;color:#33333d;font-size:15px;line-height:1.6;">${bodyHtml}</td></tr>
        <tr><td style="padding:18px 28px;border-top:1px solid #eee;color:#9a9aa8;font-size:12px;line-height:1.5;">
          You're getting this because you created a free Certus account.
          <a href="${unsub}" style="color:#9a9aa8;text-decoration:underline;">Unsubscribe</a>.
        </td></tr>
      </table>
    </td></tr>
  </table></body></html>`;
}

function button(label: string, href: string): string {
  return `<a href="${href}" style="display:inline-block;background:${PRIMARY};color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:13px 26px;border-radius:10px;">${label}</a>`;
}

export interface DripEmail {
  subject: string;
  html: string;
}

// step is 0-indexed (0 = first email).
export function dripEmail(step: number, userId: string): DripEmail {
  const s = statHeadline();
  const dashboard = `${APP_URL}/dashboard`;
  const billing = `${APP_URL}/billing`;

  if (step === 0) {
    return {
      subject: "Your streak is waiting 🔥",
      html: shell(
        `<p style="margin:0 0 14px;">You started something — don't let it cool off.</p>
         <p style="margin:0 0 18px;">A few minutes a day is how this exam actually gets beaten. Your free CFA track is open right now, with practice questions that explain <strong>why</strong> the wrong answer was tempting — the part that makes them stick.</p>
         <p style="margin:0 0 24px;">Pick up where you left off and keep the streak alive.</p>
         <p style="margin:0 0 6px;">${button("Continue studying →", dashboard)}</p>`,
        userId
      ),
    };
  }

  if (step === 1) {
    return {
      subject: "The part most apps skip",
      html: shell(
        `<p style="margin:0 0 14px;">Most exam apps give you thin summaries and a flashcard. Certus gives you the real thing.</p>
         <table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 20px;">
           <tr>
             <td style="padding:0 16px 0 0;"><span style="font-size:22px;font-weight:800;color:${PRIMARY};">${s.hours}</span><br><span style="font-size:12px;color:#7a7a88;">hours of readings</span></td>
             <td style="padding:0 16px;"><span style="font-size:22px;font-weight:800;color:${PRIMARY};">${s.questions}</span><br><span style="font-size:12px;color:#7a7a88;">trap-aware Qs</span></td>
             <td style="padding:0 0 0 16px;"><span style="font-size:22px;font-weight:800;color:${PRIMARY};">${s.exams}</span><br><span style="font-size:12px;color:#7a7a88;">exam tracks</span></td>
           </tr>
         </table>
         <p style="margin:0 0 24px;">Textbook-depth readings that rival the $500+ prep books, on your phone, in 20-minute lessons. Take one today.</p>
         <p style="margin:0 0 6px;">${button("Open a lesson →", dashboard)}</p>`,
        userId
      ),
    };
  }

  // step 2 — the conversion push
  return {
    subject: "Unlock every exam",
    html: shell(
      `<p style="margin:0 0 14px;">You've seen what the free track can do. One subscription opens <strong>all of it</strong>:</p>
       <ul style="margin:0 0 18px;padding-left:20px;color:#33333d;">
         <li style="margin-bottom:6px;">Every chapter of every exam — CFA I/II/III, CPA, Series 7, SIE, Series 66, CFP</li>
         <li style="margin-bottom:6px;">Unlimited Finals (full timed mock exams)</li>
         <li style="margin-bottom:6px;">The whole ${s.questions} question bank with trap-aware explanations</li>
       </ul>
       <p style="margin:0 0 24px;">Still a fraction of one prep course — and you keep your streak, rank, and progress.</p>
       <p style="margin:0 0 6px;">${button("See plans →", billing)}</p>`,
      userId
    ),
  };
}
