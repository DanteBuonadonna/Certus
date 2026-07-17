"use client";

// ============================================================
// The Associate — floating AI tutor panel.
// Context-aware: pass it whatever the student is looking at
// (chapter section, practice question) and it teaches from that.
// Monetization: every question costs 1 credit. New users get
// 3 free credits; packs are bought in-panel via Stripe.
// ============================================================

import { useEffect, useRef, useState } from "react";
import { creditBalance, spendCredit, CREDIT_PACKS, FREE_STARTER_CREDITS } from "@/lib/credits";
import { useAccess } from "@/lib/useAccess";
import AssociateCharacter from "@/components/Associate";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

function CoinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden>
      <circle cx="10" cy="10" r="9" fill="var(--gold-bright)" stroke="var(--gold-deep)" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="5.8" fill="none" stroke="var(--gold-deep)" strokeWidth="1" opacity="0.55" />
      <text x="10" y="13.6" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#5d4a12">C</text>
    </svg>
  );
}

export default function Tutor({
  context,
  suggestions = ["Explain this simply", "Give me a worked example", "Quiz me on this"],
  intro = false,
  bottomInset = 22,
  hideLauncher = false,
  open: openProp,
  onOpenChange,
}: {
  /** What the student is currently looking at — chapter section, question, etc. */
  context: string;
  suggestions?: string[];
  /** Show a one-time coachmark introducing the tutor (e.g. on the Practice screen). */
  intro?: boolean;
  /** Raise the floating launcher/panel so it clears a bottom action bar (e.g. the Check button). */
  bottomInset?: number;
  /**
   * Suppress the floating launcher — for screens that own the bottom of the
   * viewport and open the tutor from their own UI instead.
   *
   * The quiz is the case: its Check/Continue sheet is a full-width fixed bar
   * whose height changes when you answer, and a floating FAB at bottom-right
   * lands straight on top of it. PracticeClient used to pass bottomInset={92}
   * to dodge it, which is a magic number racing a variable-height element — it
   * lost as soon as anything about the sheet changed.
   */
  hideLauncher?: boolean;
  /** Controlled mode: drive open state from the parent (pair with hideLauncher). */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [openState, setOpenState] = useState(false);
  const controlled = openProp !== undefined;
  const open = controlled ? openProp : openState;
  const setOpen = (o: boolean) => {
    if (!controlled) setOpenState(o);
    onOpenChange?.(o);
  };

  // PRO INCLUDES THE TUTOR. This check did not exist.
  //
  // PLAN_FEATURES on /billing literally lists "Spaced-repetition flashcards &
  // The Associate AI tutor" as something you get for $115 — and then this
  // component charged credits to everyone, Pro included. So a subscriber paid
  // for the tutor, used their 3 free credits, and got hit with "You're out of
  // credits — $4.99". We sold a feature and then billed for it again. That's a
  // refund request with extra steps, and it's a promise we made in writing.
  const { pro } = useAccess();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [credits, setCredits] = useState<number | null>(null);
  const [buying, setBuying] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState(false);
  const [showTopUp, setShowTopUp] = useState(false);
  const [needsAccount, setNeedsAccount] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCredits(creditBalance()); // issues the 3 free starter credits on first run
  }, []);

  useEffect(() => {
    if (!intro) return;
    try {
      if (localStorage.getItem("certus_tutor_intro") !== "1") setShowIntro(true);
    } catch {}
  }, [intro]);

  function dismissIntro() {
    try { localStorage.setItem("certus_tutor_intro", "1"); } catch {}
    setShowIntro(false);
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  // Pro/trialing is never out — they bought the tutor. Only free users meter.
  const out = !pro && credits !== null && credits <= 0;

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
        // Pro pays nothing per question — the subscription already covers it.
        // Burning their credits would also mean that if they ever cancelled,
        // they'd find a balance we quietly ate while they were paying us.
        if (!pro) {
          const remaining = spendCredit(); // only charge for delivered answers
          setCredits(remaining ?? 0);
        }
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
    setNeedsAccount(false);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: packId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      // The checkout route guards guests with a message about SUBSCRIBING —
      // wrong here (this is a one-off credit purchase, not a subscription) and
      // it arrived as a dead red string with nothing to click. Say the true
      // thing and give them the button.
      if (data.needsAccount) {
        setNeedsAccount(true);
        setError("Credits attach to an account so they survive a new device. Make one — it's free and takes a second.");
      } else {
        setError(data.error || "Couldn't start checkout.");
      }
    } catch {
      setError("Network hiccup — try again.");
    } finally {
      setBuying(null);
    }
  }

  return (
    <>
      {/* ---- Top-up modal ----
          Was: a shelf of $4.99/$14.99/$29.99 packs jammed into the message
          scroller, each with the COMP COIN icon next to a real dollar price —
          so a game currency was sitting beside real money, and "Coffee Chat /
          Working Lunch / On Retainer" told you nothing about what you were
          buying. Nobody could tell what this screen was asking.

          PRO IS OFFERED FIRST, and it isn't a trick — it's the better deal and
          it's the honest one. Unlimited tutoring is IN the plan, the trial costs
          $0 today, and $9.58/mo beats spending $14.99 on 100 questions. Selling
          someone a credit pack when a free trial dominates it is how you make a
          customer feel stupid a week later. Packs stay for people who don't want
          a subscription at all. */}
      {showTopUp && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center px-5"
          style={{ background: "rgba(15,15,25,0.6)" }}
          onClick={() => setShowTopUp(false)}
        >
          <div
            className="card p-5 w-full rise-in"
            style={{ maxWidth: 380, maxHeight: "85vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="flex-shrink-0"><AssociateCharacter size={44} /></span>
              <div>
                <h3 className="font-display text-lg leading-tight" style={{ color: "var(--text-primary)" }}>
                  Keep asking The Associate
                </h3>
                <p className="text-xs mt-1" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  You&apos;ve used your {FREE_STARTER_CREDITS} free questions. One credit = one question.
                </p>
              </div>
            </div>

            {/* The better option, stated first. */}
            <div className="rounded-xl p-4 mb-4" style={{ border: "2px solid var(--primary)", background: "var(--primary-light)" }}>
              <div className="text-sm font-extrabold mb-1" style={{ color: "var(--text-primary)" }}>
                Pro includes unlimited questions
              </div>
              <div className="text-xs mb-3" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                Plus every chapter, unlimited practice, and unlimited mocks.
                <strong style={{ color: "var(--ats-green)" }}> $0 today</strong> — 7 free days, cancel any time.
              </div>
              <a href="/billing" className="btn-duo w-full text-center block" style={{ padding: "0.65rem", fontSize: "0.8rem" }}>
                Start your 7 free days →
              </a>
            </div>

            <div className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
              Or just buy questions — one-time, never expire
            </div>
            <div className="space-y-2">
              {CREDIT_PACKS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => buy(p.id)}
                  disabled={buying !== null}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg"
                  style={{
                    background: "var(--bg-card)",
                    border: p.bestValue ? "2px solid var(--gold)" : "1.5px solid var(--border-strong)",
                    cursor: "pointer",
                  }}
                >
                  <span className="text-left">
                    <span className="block text-xs font-extrabold" style={{ color: "var(--text-primary)" }}>
                      {p.credits} questions{p.bestValue ? " · Best value" : ""}
                    </span>
                    <span className="block text-[10px]" style={{ color: "var(--text-muted)" }}>
                      One-time payment
                    </span>
                  </span>
                  {/* No coin icon. This is real money — the gold coin is Comp,
                      and putting it next to $4.99 is exactly what made people
                      unable to tell which currency they were spending. */}
                  <span className="text-sm font-extrabold" style={{ color: "var(--text-primary)" }}>
                    {buying === p.id ? "…" : p.price}
                  </span>
                </button>
              ))}
            </div>

            {error && (
              <div className="text-xs px-3 py-2 rounded-lg mt-3" style={{ background: "var(--ats-red-bg)", color: "var(--ats-red)" }}>
                {error}
                {needsAccount && (
                  <a href="/signup?next=/dashboard" className="btn-duo w-full text-center block mt-2" style={{ padding: "0.5rem", fontSize: "0.75rem" }}>
                    Create a free account →
                  </a>
                )}
              </div>
            )}

            {/* Always a way back to the question they were stuck on. */}
            <button
              onClick={() => setShowTopUp(false)}
              className="w-full text-xs py-3 mt-1"
              style={{ color: "var(--text-muted)" }}
            >
              Not now — back to my question
            </button>
          </div>
        </div>
      )}

      {/* Floating launcher + one-time coachmark */}
      {!open && !hideLauncher && (
        <div className="fixed z-40" style={{ bottom: `calc(${bottomInset}px + var(--tabbar-h))`, right: 22 }}>
          {showIntro && (
            <div
              className="pop-in"
              style={{
                position: "absolute",
                bottom: 70,
                right: 0,
                width: 256,
                background: "var(--bg-card)",
                border: "2px solid var(--primary)",
                borderRadius: 16,
                padding: "13px 14px",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div className="flex items-start gap-2.5 mb-2.5">
                <span className="flex-shrink-0"><AssociateCharacter size={40} /></span>
                <p className="text-xs" style={{ color: "var(--text-primary)", lineHeight: 1.45 }}>
                  Hi, I&apos;m <strong>The Associate</strong> — your tutor. Stuck on a question? Tap me for a hint or a full explanation. Your first 3 are on the house.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="btn-duo" style={{ flex: 1, padding: "0.45rem", fontSize: "0.72rem", borderRadius: 11 }} onClick={() => { dismissIntro(); setOpen(true); }}>
                  Show me
                </button>
                <button className="btn-duo duo-ghost" style={{ flex: 1, padding: "0.45rem", fontSize: "0.72rem", borderRadius: 11 }} onClick={dismissIntro}>
                  Got it
                </button>
              </div>
              <div style={{ position: "absolute", bottom: -9, right: 30, width: 0, height: 0, borderLeft: "9px solid transparent", borderRight: "9px solid transparent", borderTop: "9px solid var(--primary)" }} />
            </div>
          )}

          <button
            onClick={() => { setOpen(true); dismissIntro(); }}
            className={`flex items-center gap-2 pop-in ${showIntro ? "anim-bounce" : ""}`}
            style={{
              background: "var(--primary)",
              color: "#fff",
              border: "none",
              borderRadius: 100,
              padding: "0.55rem 0.95rem 0.55rem 0.6rem",
              fontWeight: 700,
              fontSize: "0.82rem",
              cursor: "pointer",
              boxShadow: "0 4px 0 var(--primary-deep), var(--shadow-lg)",
            }}
            title="Ask The Associate"
          >
            <span style={{ background: "rgba(255,255,255,0.16)", borderRadius: 100, padding: 2, display: "inline-flex" }}>
              <AssociateCharacter size={30} />
            </span>
            Ask The Associate
            {credits !== null && (
              <span className="flex items-center gap-1 text-[11px] font-extrabold" style={{ background: "rgba(255,255,255,0.2)", borderRadius: 100, padding: "2px 7px" }}>
                <CoinIcon size={11} /> {credits}
              </span>
            )}
          </button>
        </div>
      )}

      {/* Panel */}
      {open && (
        <div
          className="fixed z-50 flex flex-col animate-in"
          style={{
            bottom: `calc(${Math.max(18, bottomInset - 4)}px + var(--tabbar-h))`,
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
            <span style={{ background: "rgba(255,255,255,0.16)", borderRadius: 10, padding: 2, display: "inline-flex" }}><AssociateCharacter size={30} animated={false} /></span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold leading-none">The Associate</div>
              <div className="text-[10px] opacity-80 mt-0.5">
                Your in-house tutor · knows what you&apos;re reading
              </div>
            </div>
            {pro ? (
              <span
                className="text-[10px] font-bold px-2 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.18)" }}
                title="Unlimited questions - included in Pro"
              >
                Unlimited
              </span>
            ) : credits !== null ? (
              <span
                className="text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1"
                style={{ background: "rgba(255,255,255,0.18)" }}
                title="1 credit per question"
              >
                <CoinIcon size={11} /> {credits}
              </span>
            ) : null}
            <button onClick={() => setOpen(false)} className="opacity-80 hover:opacity-100 text-lg leading-none" aria-label="Close">
              ×
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.length === 0 && !out && (
              <div className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                <p className="mb-2.5">
                  I can see what you&apos;re working on.{" "}
                  {pro
                    ? "Ask me as much as you like - it's included in your plan."
                    : `Each question uses 1 credit${credits !== null && credits <= FREE_STARTER_CREDITS ? " - your first 3 are free" : ""}.`}{" "}
                  Ask me anything, or tap one of these:
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

            {/* Out of credits → explain it plainly, then offer the top-up. */}
            {out && (
              <div className="rounded-xl p-3.5" style={{ background: "var(--gold-bg)", border: "1px solid var(--gold-border)" }}>
                <div className="text-xs font-bold mb-1" style={{ color: "var(--gold)" }}>
                  You&apos;ve used your {FREE_STARTER_CREDITS} free questions.
                </div>
                <div className="text-[11px] mb-3" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  The Associate is an AI tutor — it reads what you&apos;re working on and explains it.
                  Each question you ask uses one credit.
                </div>
                <button onClick={() => setShowTopUp(true)} className="btn-duo w-full" style={{ padding: "0.6rem", fontSize: "0.78rem" }}>
                  Get more questions →
                </button>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-3 py-3 flex items-center gap-2 flex-shrink-0" style={{ borderTop: "1px solid var(--border)" }}>
            <input
              className="input-field"
              style={{ padding: "0.55rem 0.85rem", fontSize: "0.82rem" }}
              placeholder={out ? "Out of credits - tap Get more questions" : "Ask about what you're studying…"}
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

