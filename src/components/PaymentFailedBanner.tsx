"use client";

// ============================================================
// Certus — "your card failed" banner
//
// WHY THIS EXISTS
// We keep access during Stripe's retry window, which is the right call — the
// commonest reason a renewal fails is a re-issued or expired card, not a
// customer who decided to stop paying. But that policy only works if they
// KNOW. Otherwise the experience is: nothing changes for three weeks, then
// access vanishes with no warning. That's how a recoverable card problem
// turns into a support ticket and a chargeback.
//
// DESIGN
// · Persistent, not dismissible-forever. Dismiss hides it for the session;
//   it returns on the next load until the card is fixed. Something that costs
//   them the subscription shouldn't be permanently dismissible.
// · One button, and it goes straight to the Stripe customer portal — no
//   "contact support", no re-entering card details in our UI (we never touch
//   card data; that's the whole reason the portal exists).
// · Amber, not red. Their account still works. Red implies it's already gone.
// ============================================================

import { useState } from "react";
import posthog from "posthog-js";

export default function PaymentFailedBanner() {
  const [hidden, setHidden] = useState(false);
  const [loading, setLoading] = useState(false);
  if (hidden) return null;

  async function openPortal() {
    setLoading(true);
    posthog.capture("payment_failed_banner_cta_clicked");
    try {
      const res = await fetch("/api/stripe/portal", { method: "POST" });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
        return;
      }
    } catch {}
    // Portal unreachable — send them somewhere useful rather than nowhere.
    window.location.href = "/billing";
  }

  return (
    <div
      role="alert"
      className="fixed top-0 left-0 right-0 z-[70] px-4 py-2.5"
      style={{
        background: "var(--ats-amber-bg)",
        borderBottom: "1px solid var(--ats-amber)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-x-3 gap-y-2">
        <span aria-hidden="true" style={{ color: "var(--ats-amber)" }}>⚠</span>
        <p className="text-xs flex-1 min-w-[220px]" style={{ color: "var(--ats-amber)", lineHeight: 1.45 }}>
          <strong>Your payment didn&apos;t go through.</strong> You still have full access while we
          retry, but update your card to avoid losing it.
        </p>
        <button
          onClick={openPortal}
          disabled={loading}
          className="text-xs font-bold px-3 py-1.5 rounded-lg"
          style={{ background: "var(--ats-amber)", color: "#fff" }}
        >
          {loading ? "Opening…" : "Update card →"}
        </button>
        <button
          onClick={() => setHidden(true)}
          className="text-xs px-2 py-1.5"
          style={{ color: "var(--ats-amber)", opacity: 0.75 }}
          aria-label="Hide this notice for now"
        >
          Later
        </button>
      </div>
    </div>
  );
}
