"use client";

// ============================================================
// One control for choosing your exam.
//
// WAS: every page rendered a wrapping row of ~12 chips — CFA I, CFA II, CFA III,
// CPA AUD/FAR/REG/Disc, CFP, SIE, Series 7, Series 66, plus greyed-out "· soon"
// ones. On a phone that wraps to four lines of noise above the actual content,
// and it asks a question the user already answered when they set their plan.
// Switching exams is a RARE action; it shouldn't own the top of every screen.
//
// NOW: a single button showing your current track, opening an ordered menu.
// Exams come from examsWithContent(), which sorts by the canonical EXAMS order
// (CFA I → II → III → CPA → CFP → SIE → Series), so it always reads the same
// way instead of registry-insertion order.
// ============================================================

import { useEffect, useRef, useState } from "react";
import { EXAMS, getExam } from "@/lib/exams";

export default function ExamPicker({
  value,
  available,
  onChange,
  label = "Exam",
}: {
  value: string;
  available: string[];
  onChange: (slug: string) => void;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click / Escape — a menu you can't dismiss is a trap.
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = getExam(value);
  const accent = current?.accent ?? "var(--primary)";

  // Only exams that actually have content. "Coming soon" chips were pure noise:
  // you can't pick them, so they're a list of things we don't have.
  const live = EXAMS.filter((e) => available.includes(e.slug));

  return (
    <div ref={ref} className="relative inline-block" style={{ minWidth: 210 }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl"
        style={{
          background: "var(--bg-card)",
          border: `2px solid ${open ? accent : "var(--border-strong)"}`,
          boxShadow: open ? "none" : "0 2px 0 var(--border-strong)",
          transition: "border-color 0.15s",
        }}
      >
        <span className="flex items-center gap-2.5 min-w-0">
          <span
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: 26, height: 26, borderRadius: 7,
              background: accent + "1f", color: accent,
              fontSize: 10, fontWeight: 800,
            }}
          >
            {(current?.name ?? "??").slice(0, 2).toUpperCase()}
          </span>
          <span className="text-left min-w-0">
            <span className="block text-[9.5px] font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
              {label}
            </span>
            <span className="block text-sm font-extrabold truncate" style={{ color: "var(--text-primary)" }}>
              {current?.name ?? value}
            </span>
          </span>
        </span>
        <span
          style={{
            color: "var(--text-muted)",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.18s",
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 mt-1.5 py-1 rise-in"
          style={{
            zIndex: 50,
            background: "var(--bg-card)",
            border: "1px solid var(--border-strong)",
            borderRadius: 14,
            boxShadow: "var(--shadow-lg)",
            maxHeight: 320,
            overflowY: "auto",
          }}
        >
          {live.map((e) => {
            const on = e.slug === value;
            return (
              <button
                key={e.slug}
                role="option"
                aria-selected={on}
                onClick={() => {
                  onChange(e.slug);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 text-left"
                style={{ background: on ? "var(--primary-light)" : "transparent" }}
              >
                <span
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 24, height: 24, borderRadius: 6,
                    background: e.accent + "1f", color: e.accent,
                    fontSize: 9.5, fontWeight: 800,
                  }}
                >
                  {e.name.slice(0, 2).toUpperCase()}
                </span>
                <span
                  className="text-sm flex-1 truncate"
                  style={{ color: on ? "var(--primary)" : "var(--text-primary)", fontWeight: on ? 800 : 500 }}
                >
                  {e.name}
                </span>
                {on && <span style={{ color: "var(--primary)", fontWeight: 800 }}>✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
