"use client";

// ============================================================
// Cancel save flow.
//
// Sits between "Manage / cancel subscription" and the Stripe portal.
// Screens, in order:
//
//   week      → "take another week on us" (first cancel attempt only)
//   reason    → "why are you leaving?" (once the week has been used)
//   discount  → 50% off, ONLY if they picked "too expensive"
//   done      → confirmation of whatever they accepted
//
// Whatever screen you're on, the secondary button cancels for real: it
// closes this and opens the Stripe portal. That button is never hidden,
// never delayed, and never styled to disappear. If the API errors we go
// straight to the portal rather than leaving anyone stuck — someone who
// can't cancel files a chargeback, which costs far more than the save.
// ============================================================

import { useEffect, useState } from "react";
import posthog from "posthog-js";
import {
  WEEK_OFFER,
  DISCOUNT_OFFER,
  REASON_PROMPT,
  CANCEL_REASONS,
  type CancelReason,
} from "@/lib/retention";

type Screen = "loading" | "week" | "reason" | "discount" | "done";

export default function CancelFlow({
  open,
  onClose,
  onProceedToPortal,
  email,
}: {
  open: boolean;
  onClose: () => void;
  /** Opens the real Stripe portal. Always reachable from every screen. */
  onProceedToPortal: () => void;
  /** Guest payers resolve by receipt email; signed-in users pass "". */
  email: string;
}) {
  const [screen, setScreen] = useState<Screen>("loading");
  const [busy, setBusy] = useState(false);
  const [doneMsg, setDoneMsg] = useState("");
  const [picked, setPicked] = useState<CancelReason | null>(null);
  const [discountAvailable, setDiscountAvailable] = useState(true);

  async function call(action: string, extra: Record<string, unknown> = {}) {
    const res = await fetch("/api/stripe/retention", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, email, ...extra }),
    });
    return { ok: res.ok, data: await res.json().catch(() => ({})) };
  }

  // Decide which screen to open on.
  useEffect(() => {
    if (!open) return;
    setScreen("loading");
    setPicked(null);
    setDoneMsg("");
    (async () => {
      const { ok, data } = await call("status");
      if (!ok || data?.noSubscription) {
        // Nothing to save, or we couldn't look them up. Don't stand in the way.
        onProceedToPortal();
        return;
      }
      setDiscountAvailable(Boolean(data?.discountAvailable));
      posthog.capture("cancel_flow_opened", {
        week_available: data?.weekAvailable,
        discount_available: data?.discountAvailable,
      });
      setScreen(data?.weekAvailable ? "week" : "reason");
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  function bail(from: string) {
    posthog.capture("cancel_flow_declined", { screen: from });
    onProceedToPortal();
  }

  async function takeWeek() {
    setBusy(true);
    const { ok, data } = await call("extend_week");
    setBusy(false);
    if (!ok) return bail("week_error");
    posthog.capture("cancel_flow_saved", { offer: "extra_week" });
    const when = data?.newRenewalDate
      ? new Date(data.newRenewalDate * 1000).toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
        })
      : null;
    setDoneMsg(
      when
        ? `Done — you've got another ${data.days} days. Your card won't be charged until ${when}, and you can still cancel any time before then.`
        : `Done — you've got another ${data?.days ?? 7} days free.`
    );
    setScreen("done");
  }

  async function chooseReason(id: CancelReason) {
    setPicked(id);
    setBusy(true);
    await call("log_reason", { reason: id });
    setBusy(false);
    posthog.capture("cancel_reason_given", { reason: id });
    const opt = CANCEL_REASONS.find((r) => r.id === id);
    // Only price gets a price answer. Offering money to someone who passed
    // their exam is insulting and doesn't work.
    if (opt?.followUp === "discount" && discountAvailable) setScreen("discount");
    else bail("reason_" + id);
  }

  async function takeDiscount() {
    setBusy(true);
    const { ok, data } = await call("apply_discount");
    setBusy(false);
    if (!ok) return bail("discount_error");
    posthog.capture("cancel_flow_saved", { offer: "discount" });
    setDoneMsg(
      `Done — ${data?.percentOff ?? 50}% off is on your account for the next ${
        data?.months ?? 3
      } months. It applies automatically to your next invoice.`
    );
    setScreen("done");
  }

  const backdrop =
    "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm";
  const card =
    "w-full max-w-md rounded-2xl p-6 shadow-xl border";
  const cardStyle = {
    background: "var(--bg-card)",
    borderColor: "var(--border)",
    color: "var(--text-primary)",
  };
  const primaryBtn =
    "w-full rounded-xl px-4 py-3 font-semibold text-white transition disabled:opacity-60";
  const secondaryBtn =
    "w-full rounded-xl px-4 py-3 font-medium transition underline-offset-2 hover:underline";

  return (
    <div className={backdrop} role="dialog" aria-modal="true" aria-label="Cancel subscription">
      <div className={card} style={cardStyle}>
        {screen === "loading" && (
          <p className="py-8 text-center" style={{ color: "var(--text-secondary)" }}>
            One moment…
          </p>
        )}

        {screen === "week" && (
          <>
            <h2 className="text-xl font-bold mb-2">{WEEK_OFFER.title}</h2>
            <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
              {WEEK_OFFER.body}
            </p>
            <button
              onClick={takeWeek}
              disabled={busy}
              className={primaryBtn}
              style={{ background: "var(--primary)" }}
            >
              {busy ? "Applying…" : WEEK_OFFER.accept}
            </button>
            <button
              onClick={() => bail("week")}
              className={secondaryBtn + " mt-2"}
              style={{ color: "var(--text-secondary)" }}
            >
              {WEEK_OFFER.decline}
            </button>
          </>
        )}

        {screen === "reason" && (
          <>
            <h2 className="text-xl font-bold mb-2">{REASON_PROMPT.title}</h2>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
              {REASON_PROMPT.body}
            </p>
            <div className="space-y-2">
              {CANCEL_REASONS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => chooseReason(r.id)}
                  disabled={busy}
                  className="w-full text-left rounded-xl border px-4 py-3 text-sm transition hover:opacity-80 disabled:opacity-60"
                  style={{
                    borderColor: picked === r.id ? "var(--primary)" : "var(--border)",
                    background: picked === r.id ? "var(--primary-light)" : "transparent",
                  }}
                >
                  {r.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => bail("reason_skip")}
              className={secondaryBtn + " mt-3"}
              style={{ color: "var(--text-secondary)" }}
            >
              {REASON_PROMPT.skip}
            </button>
          </>
        )}

        {screen === "discount" && (
          <>
            <h2 className="text-xl font-bold mb-2">{DISCOUNT_OFFER.title}</h2>
            <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
              {DISCOUNT_OFFER.body}
            </p>
            <button
              onClick={takeDiscount}
              disabled={busy}
              className={primaryBtn}
              style={{ background: "var(--primary)" }}
            >
              {busy ? "Applying…" : DISCOUNT_OFFER.accept}
            </button>
            <button
              onClick={() => bail("discount")}
              className={secondaryBtn + " mt-2"}
              style={{ color: "var(--text-secondary)" }}
            >
              {DISCOUNT_OFFER.decline}
            </button>
          </>
        )}

        {screen === "done" && (
          <>
            <h2 className="text-xl font-bold mb-2">You&apos;re all set</h2>
            <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
              {doneMsg}
            </p>
            <button
              onClick={onClose}
              className={primaryBtn}
              style={{ background: "var(--primary)" }}
            >
              Back to studying
            </button>
            <button
              onClick={() => bail("post_save")}
              className={secondaryBtn + " mt-2 text-sm"}
              style={{ color: "var(--text-muted)" }}
            >
              Actually, still cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}
