"use client";

import { useState } from "react";
import { useSignedIn } from "@/lib/AccessContext";
import { statHeadline } from "@/lib/contentStats";
import posthog from "posthog-js";
import { TRIAL_CTA, trialDisclosureShort } from "@/lib/trial";
import { TIER_SENTENCE, GATE_PRICE_LINE, MONTHLY_PRICE, ANNUAL_PER_MONTH } from "@/lib/tier";

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
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  // THE PLAN IS A CHOICE, MADE HERE.
  //
  // This card used to hardcode annual — it quoted "$115/yr" and dumped everyone
  // on /billing to pick again. So the paywall silently decided the biggest
  // variable in the transaction (a $115 charge on day 8 vs $24.99) and then made
  // them re-decide it on another screen.
  //
  // Default is MONTHLY on purpose. The trial converts to whatever plan is
  // chosen, and a forgotten $24.99 is an annoyance while a forgotten $115 is the
  // charge people call their bank about. Each dispute costs $15 and a mark on a
  // ratio that must stay under 0.75% — win or lose. Annual is right there, one
  // tap, badged, for anyone who wants it deliberately.
  const [plan, setPlan] = useState<"monthly" | "annual">("monthly");

  async function go() {
    posthog.capture("upgrade_cta_clicked", { signed_in: signedIn, title, plan });
    if (!signedIn) {
      // Guests: account first (Pro attaches to the Supabase user via Stripe),
      // and carry the plan through so their choice survives signup.
      window.location.href = `/signup?next=/billing&plan=${plan}`;
      return;
    }
    setBusy(true);
    setErr("");
    try {
      const referral =
        typeof window !== "undefined"
          ? (window as unknown as { promotekit_referral?: string }).promotekit_referral
          : undefined;
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, referral }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setErr(data.error || "Couldn't start checkout. Try again.");
    } catch {
      setErr("Network error. Try again.");
    }
    setBusy(false);
  }

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

      {/* Plan choice, on the paywall, before the price. They pick here and go
          straight to Stripe — no "decide again on another screen". */}
      <div
        className="flex mx-auto mb-4 p-1 rounded-xl"
        style={{ background: "var(--bg)", border: "0.5px solid var(--border)", maxWidth: 300 }}
        role="tablist"
        aria-label="Billing period"
      >
        {([
          { id: "monthly" as const, label: "Monthly", sub: `$${MONTHLY_PRICE}/mo` },
          { id: "annual" as const, label: "Annual", sub: `${ANNUAL_PER_MONTH}/mo` },
        ]).map((p) => {
          const on = plan === p.id;
          return (
            <button
              key={p.id}
              role="tab"
              aria-selected={on}
              onClick={() => setPlan(p.id)}
              className="flex-1 py-2 px-2 rounded-lg transition-colors relative"
              style={{
                background: on ? "var(--primary)" : "transparent",
                color: on ? "#fff" : "var(--text-secondary)",
              }}
            >
              <span className="block text-xs font-extrabold">{p.label}</span>
              <span className="block text-[11px]" style={{ opacity: on ? 0.9 : 0.7 }}>{p.sub}</span>
              {p.id === "annual" && (
                <span
                  className="absolute -top-2 right-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap"
                  style={{ background: "var(--ats-green)", color: "#fff" }}
                >
                  SAVE 62%
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* THE PRICE TODAY IS ZERO. Lead with it.
          The decision at this wall isn't "is this worth $115" — it's "do I want
          to keep going". $0 answers the question they're actually asking, and
          it's true: the card isn't charged for 7 days. The what-happens-next is
          directly underneath, because a big $0 with the consequence hidden is
          how you earn chargebacks. */}
      <div
        className="mx-auto mb-2 py-3 px-5 inline-flex flex-col items-center"
        style={{ borderRadius: 16, background: "var(--ats-green-bg)" }}
      >
        <div className="font-display" style={{ fontSize: 46, lineHeight: 1, color: "var(--ats-green)" }}>
          $0
        </div>
        <div className="text-xs font-bold uppercase tracking-wider mt-1" style={{ color: "var(--ats-green)" }}>
          due today
        </div>
      </div>

      {/* Reacts to the toggle — the disclosure must always describe the plan
          they actually have selected, or the $0 becomes a bait. */}
      <p className="text-xs mb-4 mx-auto" style={{ color: "var(--text-muted)", lineHeight: 1.5, maxWidth: 330 }}>
        {trialDisclosureShort(plan)}
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

      <button onClick={go} disabled={busy} className="btn-duo w-full" style={{ padding: "0.9rem" }}>
        {busy ? "Opening…" : signedIn ? `${TRIAL_CTA} →` : `${TRIAL_CTA} — free →`}
      </button>
      {err && (
        <p className="text-xs mt-2" style={{ color: "var(--ats-red)" }}>{err}</p>
      )}
      <p className="text-[11px] mt-2.5" style={{ color: "var(--text-muted)" }}>
        Cancel in one click, any time before day 7.
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
