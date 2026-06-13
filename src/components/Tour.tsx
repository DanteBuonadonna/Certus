"use client";

// ============================================================
// Tour — spotlight walkthrough for first-time users.
// Dims the app, cuts a window around each target element
// (via [data-tour] selectors), and steps through explanations.
// Steps whose targets aren't on the page are skipped.
// ============================================================

import { useEffect, useMemo, useState } from "react";

export interface TourStep {
  /** CSS selector, e.g. "[data-tour='readiness']". Omit for a centered card. */
  target?: string;
  title: string;
  body: string;
}

const PAD = 10;

export default function Tour({
  steps,
  onDone,
}: {
  steps: TourStep[];
  onDone: () => void;
}) {
  // Keep only steps whose targets exist (or untargeted steps).
  const valid = useMemo(
    () =>
      steps.filter(
        (s) => !s.target || (typeof document !== "undefined" && document.querySelector(s.target))
      ),
    [steps]
  );
  const [i, setI] = useState(0);
  const [rect, setRect] = useState<DOMRect | null>(null);

  const step = valid[i];

  useEffect(() => {
    if (!step) return;
    function measure() {
      if (!step.target) {
        setRect(null);
        return;
      }
      const el = document.querySelector(step.target);
      if (!el) {
        setRect(null);
        return;
      }
      el.scrollIntoView({ block: "center", behavior: "instant" as ScrollBehavior });
      setRect(el.getBoundingClientRect());
    }
    measure();
    // re-measure shortly after scroll settles
    const t = setTimeout(measure, 60);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [i, step]);

  if (!step) {
    onDone();
    return null;
  }

  const last = i === valid.length - 1;

  // Tooltip placement: below the target if there's room, else above; centered if no target.
  const tooltipStyle: React.CSSProperties = rect
    ? (() => {
        const width = Math.min(340, window.innerWidth - 32);
        const below = rect.bottom + PAD + 170 < window.innerHeight;
        const top = below ? rect.bottom + PAD + 8 : Math.max(16, rect.top - PAD - 178);
        const left = Math.min(Math.max(16, rect.left + rect.width / 2 - width / 2), window.innerWidth - width - 16);
        return { position: "fixed", top, left, width };
      })()
    : {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 380,
        maxWidth: "92vw",
      };

  return (
    <div className="fixed inset-0" style={{ zIndex: 70 }}>
      {/* Dimmer with a spotlight cutout */}
      {rect ? (
        <div
          style={{
            position: "fixed",
            top: rect.top - PAD,
            left: rect.left - PAD,
            width: rect.width + PAD * 2,
            height: rect.height + PAD * 2,
            borderRadius: 14,
            boxShadow: "0 0 0 9999px rgba(13,13,20,0.66)",
            border: "2px solid var(--gold-bright)",
            pointerEvents: "none",
            transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      ) : (
        <div style={{ position: "fixed", inset: 0, background: "rgba(13,13,20,0.66)" }} />
      )}

      {/* Step card */}
      <div
        className="pop-in"
        key={i}
        style={{
          ...tooltipStyle,
          background: "var(--bg-card)",
          border: "2px solid var(--border-strong)",
          borderRadius: 16,
          boxShadow: "var(--shadow-lg)",
          padding: "1.1rem 1.25rem",
        }}
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
            Tour · {i + 1}/{valid.length}
          </span>
          <button className="text-[11px] hover:underline" style={{ color: "var(--text-muted)" }} onClick={onDone}>
            Skip tour
          </button>
        </div>
        <div className="font-display text-lg mb-1" style={{ color: "var(--text-primary)" }}>
          {step.title}
        </div>
        <p className="text-xs mb-3.5" style={{ color: "var(--text-secondary)", lineHeight: 1.55 }}>
          {step.body}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {valid.map((_, d) => (
              <span
                key={d}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: d === i ? "var(--gold-bright)" : "var(--border-strong)",
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            {i > 0 && (
              <button
                className="btn-game btn-game-ghost"
                style={{ padding: "0.4rem 0.85rem", fontSize: "0.7rem" }}
                onClick={() => setI(i - 1)}
              >
                BACK
              </button>
            )}
            <button
              className="btn-game btn-game-primary"
              style={{ padding: "0.4rem 1rem", fontSize: "0.7rem" }}
              onClick={() => (last ? onDone() : setI(i + 1))}
            >
              {last ? "LET'S GO" : "NEXT"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
