"use client";

import Link from "next/link";
import { useSignedIn } from "@/lib/AccessContext";
import { statHeadline } from "@/lib/contentStats";
import posthog from "posthog-js";
import { TRIAL_CTA, trialDisclosureShort } from "@/lib/trial";
import { TIER_SENTENCE, GATE_PRICE_LINE } from "@/lib/tier";

// Real icons. An emoji padlock on the screen where someone decides whether to
// trust you with $25 is not a design choice, it's a tell.
function LockIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function CheckIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}

export function UpgradeCard({
  title = "Unlock unlimited practice",
  reason = `${TIER_SENTENCE} ${GATE_PRICE_LINE}`,
}: {
  title?: string;
  reason?: string;
}) {
  const signedIn = useSignedIn();
  const s = statHeadline();
  // Guests must create an account before subscribing — Pro attaches to the
  // Supabase user via Stripe, so send them to signup first, then billing.
  //
  // The ask is now "try it", not "pay me". Same wall, far smaller step: the
  // decision at this moment is whether to keep going, and $115 is the wrong
  // question to put in front of someone answering it.
  const ctaHref = signedIn ? "/billing" : "/signup?next=/billing";
  const ctaLabel = signedIn ? `${TRIAL_CTA} →` : `${TRIAL_CTA} — free →`;

  return (
    <div
      className="text-center max-w-md mx-auto mt-6 p-7"
      style={{
        borderRadius: 20,
        border: "2px solid var(--primary)",
        borderBottom: "6px solid var(--primary-hover)",
        // Flat. Gradients on a paywall read as generated.
        background: "var(--bg-card)",
      }}
    >
      <div
        className="mx-auto mb-3 flex items-center justify-center"
        style={{ width: 48, height: 48, borderRadius: 14, background: "var(--primary-light)", color: "var(--primary)" }}
      >
        <LockIcon />
      </div>

      <h2 className="font-display text-xl mb-1.5" style={{ color: "var(--text-primary)" }}>
        {title}
      </h2>
      <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.55 }}>
        {reason}
      </p>

      {/* Live depth-proof — computed from the real content library */}
      <div className="flex justify-center gap-5 mb-5">
        {[
          { n: s.hours, l: "hours of readings" },
          { n: s.questions, l: "trap-aware Qs" },
          { n: `${s.exams}`, l: "exam tracks" },
        ].map((x) => (
          <div key={x.l}>
            <div className="font-display text-2xl" style={{ color: "var(--primary)" }}>{x.n}</div>
            <div className="text-[11px] leading-tight" style={{ color: "var(--text-muted)" }}>{x.l}</div>
          </div>
        ))}
      </div>

      {/* What Pro actually adds on top of the free tier. */}
      <div className="text-left text-sm mx-auto mb-5" style={{ maxWidth: 320, color: "var(--text-secondary)" }}>
        {[
          "Unlimited practice questions — no daily cap",
          "Every chapter of every exam, not just the first 3",
          "Unlimited full timed mocks and Final retakes",
          "Trap-aware explanations on every question",
        ].map((f) => (
          <div key={f} className="flex items-start gap-2 mb-1.5">
            <span style={{ color: "var(--ats-green)", marginTop: 2 }}><CheckIcon /></span>
            <span>{f}</span>
          </div>
        ))}
      </div>

      <Link
        href={ctaHref}
        className="btn-duo inline-flex"
        onClick={() => posthog.capture("upgrade_cta_clicked", { signed_in: signedIn, title })}
      >{ctaLabel}</Link>
      {/* The disclosure travels WITH the button. A CTA that says "free" over a
          caption that says "$115/year" is the mismatch that becomes a dispute
          on day 8 — and disputes cost $15 and a mark on our ratio even when we
          win. Say the charge date and amount where the click happens. */}
      <p className="text-xs mt-3" style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>
        {trialDisclosureShort("annual")}
      </p>
    </div>
  );
}

// Small lock chip to append to locked exam buttons.
export function LockChip() {
  return (
    <span style={{ marginLeft: 5, display: "inline-flex", color: "var(--text-muted)", verticalAlign: "-2px" }}>
      <LockIcon size={13} />
    </span>
  );
}
