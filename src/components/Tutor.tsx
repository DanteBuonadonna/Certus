"use client";

// ============================================================
// The Associate — floating AI tutor panel.
// Context-aware: pass it whatever the student is looking at
// (chapter section, practice question) and it teaches from that.
// Free users get a daily taste; Pro is unlimited (client-side
// quota for the account-less MVP).
// ============================================================

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useAccess } from "@/lib/useAccess";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const QUOTA_KEY = "certus_tutor_quota_v1";
const FREE_PER_DAY = 5;

function quotaLeft(): number {
  try {
    const raw = localStorage.getItem(QUOTA_KEY);
    const today = new Date().toISOString().slice(0, 10);
    if (raw) {
      const q = JSON.parse(raw);
      if (q.date === today) return Math.max(0, FREE_PER_DAY - q.used);
    }
  } catch {}
  return FREE_PER_DAY;
}

function useQuota() {
  const [left, setLeft] = useState(FREE_PER_DAY);
  useEffect(() => setLeft(quotaLeft()), []);
  function consume() {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const raw = localStorage.getItem(QUOTA_KEY);
      let used = 1;
      if (raw) {
        const q = JSON.parse(raw);
        used = q.date === today ? q.used + 1 : 1;
      }
      localStorage.setItem(QUOTA_KEY, JSON.stringify({ date: today, used }));
      setLeft(Math.max(0, FREE_PER_DAY - used));
    } catch {}
  }
  return { left, consume };
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
  const access = useAccess();
  const { left, consume } = useQuota();
  const scrollRef = useRef<HTMLDivElement>(null);

  const outOfQuota = access.ready && !access.pro && left <= 0;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  async function ask(text: string) {
    const q = text.trim();
    if (!q || busy || outOfQuota) return;
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
        if (!access.pro) consume();
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Network hiccup — try again.");
    } finally {
      setBusy(false);
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
            {access.ready && !access.pro && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.18)" }}>
                {left}/{FREE_PER_DAY} today
              </span>
            )}
            <button onClick={() => setOpen(false)} className="opacity-80 hover:opacity-100 text-lg leading-none" aria-label="Close">
              ×
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.length === 0 && (
              <div className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                <p className="mb-2.5">
                  I can see what you&apos;re working on. Ask me anything about it — or tap one of these:
                </p>
                <div className="space-y-1.5">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => ask(s)}
                      disabled={busy || outOfQuota}
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

            {outOfQuota && (
              <div className="text-xs px-3.5 py-3 rounded-xl" style={{ background: "var(--gold-bg)", border: "1px solid var(--gold-border)" }}>
                <div className="font-bold mb-1" style={{ color: "var(--gold)" }}>
                  That&apos;s your {FREE_PER_DAY} free questions today.
                </div>
                <div style={{ color: "var(--text-secondary)" }}>
                  Pro gets unlimited time with The Associate — plus every chapter and every Final.
                </div>
                <Link href="/billing" className="btn-game btn-game-gold mt-2.5" style={{ padding: "0.4rem 0.9rem", fontSize: "0.7rem" }}>
                  GO PRO
                </Link>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-3 py-3 flex items-center gap-2 flex-shrink-0" style={{ borderTop: "1px solid var(--border)" }}>
            <input
              className="input-field"
              style={{ padding: "0.55rem 0.85rem", fontSize: "0.82rem" }}
              placeholder={outOfQuota ? "Come back tomorrow, or go Pro" : "Ask about what you're studying…"}
              value={input}
              disabled={busy || outOfQuota}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && ask(input)}
            />
            <button
              className="btn-game btn-game-primary flex-shrink-0"
              style={{ padding: "0.5rem 0.95rem", fontSize: "0.72rem" }}
              disabled={busy || outOfQuota || !input.trim()}
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
