"use client";

// ============================================================
// The Associate — floating AI tutor panel.
// Context-aware: pass it whatever the student is looking at
// (chapter section, practice question) and it teaches from that.
// Monetization: every question costs 1 credit. New users get
// 3 free credits; packs are bought in-panel via Stripe.
// ============================================================

import { useEffect, useRef, useState } from "react";
import { creditBalance, spendCredit, CREDIT_PACKS } from "@/lib/credits";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

function CoinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden>
      <circle cx="10" cy="10" r="9" fill="var(--gold-bright)" stroke="var(--gold-deep)" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="5.8" fill="none" stroke="var(--gold-deep)" strokeWidth="1" opacity="0.55" />
      <text x="10" y="13.6" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#5d4a12">$</text>
    </svg>
  );
}

export default function Tutor({
  context,
  suggestions = ["Explain this simply", "Give me a worked example", "Quiz me on this"],
}: {
  /** What the student is currently looking at — chapter section, question, etc. */
  context: string;
  suggestions?: string[];
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [credits, setCredits] = useState<number | null>(null);
  const [buying, setBuying] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCredits(creditBalance()); // issues the 3 free starter credits on first run
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  const out = credits !== null && credits <= 0;

  async function ask(text: string) {
    const q = text.trim();
    if (!q || busy || out) return;
    setError(null);
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setBusy(true);
    try {
      const res = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, context, history: messages.slice(-8) }),
      });
      const data = await res.json();
      if (data.answer) {
        setMessages([...next, { role: "assistant", content: data.answer }]);
        const remaining = spendCredit(); // only charge for delivered answers
        setCredits(remaining ?? 0);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Network hiccup — try again.");
    } finally {
      setBusy(false);
    }
  }

  async function buy(packId: string) {
    setBuying(packId);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: packId }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setError(data.error || "Couldn't start checkout.");
    } catch {
      setError("Network hiccup — try again.");
    } finally {
      setBuying(null);
    }
  }

  return (
    <>
      {/* Floating launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed z-40 flex items-center gap-2.5 pop-in"
          style={{
            bottom: 22,
            right: 22,
            background: "var(--primary)",
            color: "#fff",
            border: "none",
            borderRadius: 100,
            padding: "0.7rem 1.15rem",
            fontWeight: 700,
            fontSize: "0.82rem",
            cursor: "pointer",
            boxShadow: "0 4px 0 var(--primary-deep), var(--shadow-lg)",
          }}
          title="Ask The Associate"
        >
          <AssociateMark size={22} />
          Ask The Associate
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          className="fixed z-50 flex flex-col animate-in"
          style={{
            bottom: 18,
            right: 18,
            width: 372,
            maxWidth: "calc(100vw - 36px)",
            height: 540,
            maxHeight: "calc(100vh - 36px)",
            background: "var(--bg-card)",
            border: "2px solid var(--border-strong)",
            borderRadius: 20,
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-2.5 px-4 py-3 flex-shrink-0"
            style={{ background: "var(--primary)", color: "#fff" }}
          >
            <AssociateMark size={26} />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold leading-none">The Associate</div>
              <div className="text-[10px] opacity-80 mt-0.5">
                Your in-house tutor · knows what you&apos;re reading
              </div>
            </div>
            {credits !== null && (
              <span
                className="text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1"
                style={{ background: "rgba(255,255,255,0.18)" }}
                title="1 credit per question"
              >
                <CoinIcon size={11} /> {credits}
              </span>
            )}
            <button onClick={() => setOpen(false)} className="opacity-80 hover:opacity-100 text-lg leading-none" aria-label="Close">
              ×
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.length === 0 && !out && (
              <div className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                <p className="mb-2.5">
                  I can see what you&apos;re working on. Each question costs 1 credit
                  {credits !== null && credits <= 3 ? " — your first 3 are on the house" : ""}. Ask me
                  anything, or tap one of these:
                </p>
                <div className="space-y-1.5">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => ask(s)}
                      disabled={busy}
                      className="block w-full text-left text-xs px-3 py-2 rounded-lg font-semibold transition-colors"
                      style={{
                        background: "var(--primary-light)",
                        color: "var(--primary)",
                        border: "1px solid rgba(83,74,183,0.25)",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className="text-[13px] px-3.5 py-2.5 rounded-2xl"
                style={{
                  background: m.role === "user" ? "var(--primary)" : "var(--bg)",
                  color: m.role === "user" ? "#fff" : "var(--text-primary)",
                  marginLeft: m.role === "user" ? 40 : 0,
                  marginRight: m.role === "user" ? 0 : 40,
                  lineHeight: 1.55,
                  whiteSpace: "pre-wrap",
                  border: m.role === "assistant" ? "1px solid var(--border)" : "none",
                  borderBottomRightRadius: m.role === "user" ? 6 : 16,
                  borderBottomLeftRadius: m.role === "assistant" ? 6 : 16,
                }}
              >
                {m.content}
              </div>
            ))}

            {busy && (
              <div className="flex items-center gap-1.5 px-3.5 py-2.5" style={{ color: "var(--text-muted)" }}>
                <span className="skeleton" style={{ width: 8, height: 8, borderRadius: "50%" }} />
                <span className="skeleton" style={{ width: 8, height: 8, borderRadius: "50%", animationDelay: "0.15s" }} />
                <span className="skeleton" style={{ width: 8, height: 8, borderRadius: "50%", animationDelay: "0.3s" }} />
              </div>
            )}

            {error && (
              <div className="text-xs px-3 py-2 rounded-lg" style={{ background: "var(--ats-red-bg)", color: "var(--ats-red)" }}>
                {error}
              </div>
            )}

            {/* Out of credits → the pack shelf */}
            {out && (
              <div className="rounded-xl p-3.5" style={{ background: "var(--gold-bg)", border: "1px solid var(--gold-border)" }}>
                <div className="text-xs font-bold mb-1" style={{ color: "var(--gold)" }}>
                  You&apos;re out of credits.
                </div>
                <div className="text-[11px] mb-3" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Top up and The Associate keeps teaching — credits never expire.
                </div>
                <div className="space-y-2">
                  {CREDIT_PACKS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => buy(p.id)}
                      disabled={buying !== null}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all"
                      style={{
                        background: "var(--bg-card)",
                        border: p.bestValue ? "2px solid var(--gold)" : "1.5px solid var(--border-strong)",
                        boxShadow: p.bestValue ? "0 2.5px 0 var(--gold-deep)" : "0 2.5px 0 var(--border-strong)",
                        cursor: "pointer",
                      }}
                    >
                      <span className="text-left">
                        <span className="block text-xs font-extrabold" style={{ color: "var(--text-primary)" }}>
                          {p.credits} credits{p.bestValue ? " · Best value" : ""}
                        </span>
                        <span className="block text-[10px]" style={{ color: "var(--text-muted)" }}>{p.label}</span>
                      </span>
                      <span className="text-sm font-extrabold flex items-center gap-1.5" style={{ color: "var(--gold)" }}>
                        <CoinIcon size={13} /> {buying === p.id ? "…" : p.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-3 py-3 flex items-center gap-2 flex-shrink-0" style={{ borderTop: "1px solid var(--border)" }}>
            <input
              className="input-field"
              style={{ padding: "0.55rem 0.85rem", fontSize: "0.82rem" }}
              placeholder={out ? "Top up to keep asking" : "Ask about what you're studying…"}
              value={input}
              disabled={busy || out}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && ask(input)}
            />
            <button
              className="btn-game btn-game-primary flex-shrink-0"
              style={{ padding: "0.5rem 0.95rem", fontSize: "0.72rem" }}
              disabled={busy || out || !input.trim()}
              onClick={() => ask(input)}
            >
              ASK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/** Small suit-and-specs mark for The Associate. */
function AssociateMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="15" fill="rgba(255,255,255,0.16)" />
      <circle cx="16" cy="12.5" r="5.6" fill="#f1c27d" />
      <g stroke="#2b2b33" strokeWidth="1.1" fill="none">
        <rect x="11.4" y="11" width="3.8" height="3" rx="1.2" />
        <rect x="16.8" y="11" width="3.8" height="3" rx="1.2" />
        <path d="M15.2 12.3h1.6" />
      </g>
      <path d="M16 8.2c-3 0-4.6 1.6-4.8 3.6 1-1.4 2.4-1.7 4.8-1.7s3.8.3 4.8 1.7c-.2-2-1.8-3.6-4.8-3.6z" fill="#3b2a1d" />
      <path d="M7.5 27c.7-4.6 4-6.8 8.5-6.8s7.8 2.2 8.5 6.8" fill="#27355c" />
      <path d="M14.2 20.5L16 23l1.8-2.5c-.6-.2-3-.2-3.6 0z" fill="#fff" />
    </svg>
  );
}
