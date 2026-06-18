"use client";

import Link from "next/link";
import { useSignedIn } from "@/lib/AccessContext";
import { statHeadline } from "@/lib/contentStats";
import posthog from "posthog-js";

export function UpgradeCard({
  title = "Unlock the full curriculum",
  reason = "You're at the edge of the free preview. Pro opens every chapter, every exam, and unlimited Finals.",
}: {
  title?: string;
  reason?: string;
}) {
  const signedIn = useSignedIn();
  const s = statHeadline();
  // Guests must create an account before subscribing — Pro attaches to the
  // Supabase user via Stripe, so send them to signup first, then billing.
  const ctaHref = signedIn ? "/billing" : "/signup?next=/billing";
  const ctaLabel = signedIn ? "Go Pro →" : "Create account to go Pro →";
  return (
    <div
      className="text-center max-w-md mx-auto mt-6 p-7"
      style={{ borderRadius: 20, border: "2px solid var(--primary)", borderBottom: "6px solid var(--primary-hover)", background: "linear-gradient(180deg, var(--primary-light), var(--bg-card) 70%)" }}
    >
      <div className="text-4xl mb-3">🔓</div>
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

      {/* What Pro gets you */}
      <div className="text-left text-sm mx-auto mb-5" style={{ maxWidth: 320, color: "var(--text-secondary)" }}>
        {[
          "Every chapter of every exam — textbook-depth, not thin summaries",
          "Unlimited Finals (full timed mock exams)",
          "The whole question bank with trap-aware explanations",
          "Your streak, Division rank, and progress — kept",
        ].map((f) => (
          <div key={f} className="flex items-start gap-2 mb-1.5">
            <span style={{ color: "var(--ats-green)", fontWeight: 800 }}>✓</span>
            <span>{f}</span>
          </div>
        ))}
      </div>

      <Link
        href={ctaHref}
        className="btn-duo inline-flex"
        onClick={() => posthog.capture("upgrade_cta_clicked", { signed_in: signedIn, title })}
      >{ctaLabel}</Link>
      <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
        From $115/year — less than a tenth of a typical prep course. Cancel anytime · 100% of it written to rival the $1,000 textbooks.
      </p>
    </div>
  );
}

// Small lock chip to append to locked exam buttons.
export function LockChip() {
  return <span style={{ marginLeft: 4 }}>🔒</span>;
}
