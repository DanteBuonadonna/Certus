// ============================================================
// Certus — onboarding drip sequence (signed up, not yet subscribed)
// 5 emails, one per day for 5 days. The welcome (sent by /api/welcome)
// fires instantly on signup as day 0; this sequence then runs days 1–5.
// Content is written here; the cron in /api/cron/drip decides WHO gets
// WHICH step based on signup age.
// ============================================================

import { APP_URL } from "./email";
import { statHeadline } from "./contentStats";

export const DRIP_STEPS = 5;
// Hours after signup at which each step becomes due — one per day, days 1–5.
export const STEP_DUE_HOURS = [24, 48, 72, 96, 120];

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

/**
 * Shell for TRANSACTIONAL mail (billing notices). Deliberately has no
 * unsubscribe link: this is not marketing, it's "we are about to charge your
 * card." It must reach people who opted out of marketing — that's both the
 * CAN-SPAM distinction and the entire point, since the person most likely to
 * dispute is the one least engaged with our emails.
 */
function txShell(bodyHtml: string): string {
  return `<!doctype html><html><body style="margin:0;background:#f4f4f7;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e6e6ef;">
        <tr><td style="padding:22px 28px;border-bottom:1px solid #eee;">
          <span style="font-size:18px;font-weight:700;color:${PRIMARY};letter-spacing:-0.3px;">Certus</span>
          <span style="font-size:12px;color:#9a9aa8;"> — billing notice</span>
        </td></tr>
        <tr><td style="padding:28px;color:#33333d;font-size:15px;line-height:1.6;">${bodyHtml}</td></tr>
        <tr><td style="padding:18px 28px;border-top:1px solid #eee;color:#9a9aa8;font-size:12px;line-height:1.5;">
          This is a billing notice about your Certus trial, not a marketing email.
          Questions? Just reply to this message.
        </td></tr>
      </table>
    </td></tr>
  </table></body></html>`;
}

/**
 * "Your trial ends in 2 days." Sent by /api/cron/trial-reminder.
 *
 * Written to be genuinely easy to cancel from — the cancel link is as prominent
 * as the keep-going one. That feels backwards until you price it: a cancellation
 * costs us $0, and a surprise charge costs $15 plus a mark against a dispute
 * ratio that can close the Stripe account. We WANT the forgetful ones to leave
 * cleanly rather than leave via their bank.
 */
export function trialEndingEmail(plan: "annual" | "monthly", endsAt: Date): DripEmail {
  const amount = plan === "annual" ? "$115 for the year" : "$24.99 for the month";
  const when = endsAt.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  return {
    subject: `Your Certus trial ends ${when} — then it's ${plan === "annual" ? "$115" : "$24.99"}`,
    html: txShell(`
      <p style="margin:0 0 14px;">Quick heads-up so nothing surprises you.</p>
      <p style="margin:0 0 14px;">
        Your free trial ends on <strong>${when}</strong>. On that day we'll charge the card you
        added <strong>${amount}</strong>, and Certus keeps running — every chapter, unlimited
        questions, unlimited mocks.
      </p>
      <p style="margin:0 0 20px;">
        If that's not what you want, cancel now and you won't be charged a cent. It takes one click
        and you keep your trial until ${when} either way.
      </p>
      <p style="margin:0 0 10px;">${button("Keep my access", `${APP_URL}/dashboard`)}</p>
      <p style="margin:0 0 18px;">
        <a href="${APP_URL}/billing" style="color:#9a9aa8;font-size:14px;text-decoration:underline;">Cancel my trial</a>
      </p>
      <p style="margin:0;color:#9a9aa8;font-size:13px;">
        The exam costs $1,140. We're trying to be the cheapest useful thing you buy this year — but
        only if you're actually using it.
      </p>
    `),
  };
}

export interface DripEmail {
  subject: string;
  html: string;
}

/**
 * WELCOME — fires the instant someone signs up. Sent by /api/welcome.
 *
 * Why this exists: signing up used to send NOTHING. The first contact was the
 * drip, 20 hours later, via a once-a-day cron — so a new account got silence
 * for the better part of two days, which reads as "did that even work?".
 *
 * WHAT WAS BROKEN (fixed here): this used to send everyone to /check — the
 * 3-minute diagnostic. But /check is the GATE. You take it, and the signup
 * modal appears at the result. So by definition every recipient had just
 * finished the exact thing the email told them to go do. The single most
 * important email in the funnel pointed backwards.
 *
 * Worse, the data was right there and being thrown away: the check computes
 * their score, their exam, and their weakest topics, and the signup modal
 * literally quotes the score on screen — then /api/welcome was called with
 * nothing but {email, userId}.
 *
 * Now the email leads with THEIR number and sends them to the first lesson
 * that fixes their worst topic. Someone who signed up outside the check
 * (via /signup directly) has no result, so they get the generic version
 * pointed at the dashboard — never back at the check.
 */
export interface CheckContext {
  /** Raw score. We send correct/total rather than only a percentage because
   *  the check is SIX questions — a percentage implies a precision it does
   *  not have, and "17%" from one missed question reads as a verdict. */
  correct?: number;
  total?: number;
  pct?: number;
  examName?: string;
  examSlug?: string;
  weakTopicName?: string;
  weakTopicId?: string;
}

export function welcomeEmail(userId: string, ctx: CheckContext = {}): DripEmail {
  const { pct, examName, examSlug, weakTopicName, weakTopicId } = ctx;

  // Deep-link straight into the weakest topic when we know it; /learn reads
  // ?exam= and ?topic=. Otherwise the dashboard, which is where their plan is.
  const lessonHref =
    examSlug && weakTopicId
      ? `${APP_URL}/learn?exam=${encodeURIComponent(examSlug)}&topic=${encodeURIComponent(weakTopicId)}`
      : examSlug
        ? `${APP_URL}/learn?exam=${encodeURIComponent(examSlug)}`
        : `${APP_URL}/dashboard`;

  // PERSONALISED — we have their check result. Lead with their own number.
  const correct = ctx.correct;
  const total = ctx.total;
  if (typeof correct === "number" && typeof total === "number" && weakTopicName) {
    const exam = examName ?? "your exam";
    return {
      subject:
        correct === total
          ? `Your ${exam} plan — start with ${weakTopicName}`
          : `Your ${exam} plan starts with ${weakTopicName}`,
      html: shell(
        `<p style="margin:0 0 14px;">Your plan's saved — welcome to Certus 👋</p>
         <p style="margin:0 0 16px;">${
           correct === total
             ? `You got <strong>all ${total}</strong> on the check — nice. Six questions is a rough read though, not a verdict, so the real test is whether that holds up over a full topic. <strong>${weakTopicName}</strong> is a solid place to prove it.`
             : `You got <strong>${correct} of ${total}</strong> on the check. Six questions is a rough read, not a verdict — but <strong>${weakTopicName}</strong> was one you missed, so it's the honest place to start.`
         }</p>
         <p style="margin:0 0 22px;">${button(`Fix ${weakTopicName} →`, lessonHref)}</p>
         <p style="margin:0 0 16px;">One lesson, about 20 minutes, with practice questions that explain <strong>why</strong> the wrong answer was tempting — which is the part that makes it stick. Do that one thing today and you've already moved.</p>
         <p style="margin:0;color:#9a9aa8;font-size:13px;">Reply to this email any time — a real person reads it.</p>`,
        userId
      ),
    };
  }

  // GENERIC — signed up without taking the check (e.g. straight from /signup).
  // Still never points at /check; the dashboard has their plan and next action.
  return {
    subject: "You're in. Here's the smartest first move.",
    html: shell(
      `<p style="margin:0 0 14px;">Welcome to Certus 👋</p>
       <p style="margin:0 0 16px;">Most people start studying by <em>reading</em>. That's the trap — you learn to recognise the material without being able to use it, and the two feel identical until the exam asks you to do something.</p>
       <p style="margin:0 0 16px;">So don't start by reading. Start by doing one lesson and answering the questions at the end of it:</p>
       <p style="margin:0 0 22px;">${button("Open your first lesson →", lessonHref)}</p>
       <p style="margin:0 0 16px;">Every practice question explains why the wrong answer was tempting, not just which one was right. That's the part that sticks.</p>
       <p style="margin:0;color:#9a9aa8;font-size:13px;">Reply to this email any time — a real person reads it.</p>`,
      userId
    ),
  };
}

// step is 0-indexed (0 = first email = day 1). Five-day arc:
//   Day 1 — keep the streak alive (habit)
//   Day 2 — the depth most apps skip (value)
//   Day 3 — take the free full mock (find your real gaps)
//   Day 4 — cheap isn't thin (price wedge / objection)
//   Day 5 — unlock every exam (conversion push)
export function dripEmail(step: number, userId: string): DripEmail {
  const s = statHeadline();
  const dashboard = `${APP_URL}/dashboard`;
  const billing = `${APP_URL}/billing`;
  const mock = `${APP_URL}/mock`;

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

  if (step === 2) {
    // Day 3 — the free full mock. Reps beat reading; the mock shows the truth.
    return {
      subject: "The number that actually predicts a pass",
      html: shell(
        `<p style="margin:0 0 14px;">Here's the uncomfortable truth about prep: reading feels productive, but it's practice under a clock that predicts whether you pass.</p>
         <p style="margin:0 0 18px;">So take the real thing — free. A full-length, timed CFA mock at the exam's actual pace, with an instant per-topic score and an honest read on your odds. No card, no catch.</p>
         <p style="margin:0 0 24px;">Most people wait until the last two weeks to take one. Take it now, while there's still time to fix what it finds.</p>
         <p style="margin:0 0 6px;">${button("Take the free mock →", mock)}</p>`,
        userId
      ),
    };
  }

  if (step === 3) {
    // Day 4 — the price wedge / objection handling. Cheap isn't thin.
    return {
      subject: "Why $9.58 a month, not $900",
      html: shell(
        `<p style="margin:0 0 14px;">A quick, fair question you might be having: how is Certus this cheap?</p>
         <p style="margin:0 0 16px;">Because it's software, not a shelf of printed books and a lecture library you'll half-watch. The same core readings, question banks, and full mocks the big providers charge <strong>$350–$1,500</strong> for — for a fraction of the price.</p>
         <p style="margin:0 0 24px;">Cheap isn't thin here. It's just a leaner way to get the same result. See exactly what's included:</p>
         <p style="margin:0 0 6px;">${button("See what you get →", billing)}</p>`,
        userId
      ),
    };
  }

  // step 4 — Day 5 — the conversion push
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
