"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { EXAMS } from "@/lib/exams";
import { examsWithContent } from "@/content";
import {
  LADDER,
  Quest,
  QuestCtx,
  buildQuestCtx,
  loadCareer,
  CareerStore,
  claimQuest,
  tierUnlocked,
} from "@/lib/career";
import { GameState, EMPTY_STATE } from "@/lib/studyPlan";
import { loadState } from "@/lib/gameStore";
import { Wallet, loadWallet, compBalance, formatComp } from "@/lib/economy";
import { AnimatedNumber, GoldBurst } from "@/components/ui";
import { CheckIcon, LockIcon, BriefcaseIcon, TrophyIcon } from "@/components/icons";

// Zig-zag x offsets for path nodes (per-tier cycle).
const OFFSETS = [0, -84, 0, 84];

function CoinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden>
      <circle cx="10" cy="10" r="9" fill="var(--gold-bright)" stroke="var(--gold-deep)" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="5.8" fill="none" stroke="var(--gold-deep)" strokeWidth="1" opacity="0.55" />
      <text x="10" y="13.6" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#5d4a12">$</text>
    </svg>
  );
}

export default function CareerClient() {
  const available = examsWithContent();
  const [exam, setExam] = useState(available[0] ?? "cfa");
  const [state, setState] = useState<GameState>(EMPTY_STATE);
  const [career, setCareer] = useState<CareerStore>({ claimed: [] });
  const [wallet, setWallet] = useState<Wallet>({ bonus: 0, spent: 0, owned: [] });
  const [loaded, setLoaded] = useState(false);
  const [justClaimed, setJustClaimed] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setState(loadState());
    setCareer(loadCareer());
    setWallet(loadWallet());
    setLoaded(true);
  }, []);

  const ctx: QuestCtx | null = useMemo(
    () => (loaded ? buildQuestCtx(exam, state) : null),
    [loaded, exam, state]
  );

  function handleClaim(q: Quest) {
    if (!ctx) return;
    const store = claimQuest(q, ctx);
    if (!store) return;
    setCareer({ ...store });
    setWallet(loadWallet());
    setJustClaimed(q.id);
    setTimeout(() => setJustClaimed(null), 1400);
  }

  if (!loaded || !ctx) {
    return (
      <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
        <div className="skeleton" style={{ height: 80, marginBottom: 16 }} />
        <div className="skeleton" style={{ height: 420 }} />
      </div>
    );
  }

  // The first claimable (or first incomplete) quest gets the YOU ARE HERE marker.
  let hereQuestId: string | null = null;
  outer: for (const tier of LADDER) {
    if (!tierUnlocked(tier, state)) break;
    for (const q of tier.quests) {
      const claimed = career.claimed.includes(q.id);
      if (!claimed) {
        hereQuestId = q.id;
        break outer;
      }
    }
  }

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      {/* Sticky-feel header */}
      <div className="flex items-center justify-between mb-1">
        <h1 className="font-display text-3xl" style={{ color: "var(--text-primary)" }}>The Ladder</h1>
        <div
          className="flex items-center gap-2 px-3.5 py-2 card-game"
          style={{ borderColor: "var(--gold-border)", background: "var(--gold-bg)" }}
        >
          <CoinIcon size={18} />
          <span className="font-display text-lg" style={{ color: "var(--gold)" }}>
            $<AnimatedNumber value={compBalance(state, wallet)} />
          </span>
        </div>
      </div>
      <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
        Intern to Partner. Every rung holds quests tied to real study — claim them for Comp and spend it at the{" "}
        <Link href="/shop" className="hover:underline font-semibold" style={{ color: "var(--primary)" }}>Perks Desk</Link>.
      </p>

      {/* Exam selector */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        {EXAMS.map((e) => {
          const has = available.includes(e.slug);
          const active = e.slug === exam;
          return (
            <button key={e.slug} disabled={!has} onClick={() => { setExam(e.slug); setSelected(null); }}
              className="text-xs px-3.5 py-1.5"
              style={{
                borderRadius: 12, fontWeight: 700,
                background: active ? "var(--primary)" : "var(--bg-card)",
                color: active ? "#fff" : has ? "var(--text-secondary)" : "var(--text-muted)",
                border: active ? "2px solid var(--primary)" : "2px solid var(--border)",
                boxShadow: active ? "0 3px 0 var(--primary-deep)" : "0 3px 0 var(--border)",
                opacity: has ? 1 : 0.5, cursor: has ? "pointer" : "not-allowed",
              }}>
              {e.name}{!has && " · soon"}
            </button>
          );
        })}
      </div>

      {/* The path */}
      {LADDER.map((tier, ti) => {
        const unlocked = tierUnlocked(tier, state);
        const doneCount = tier.quests.filter((q) => career.claimed.includes(q.id)).length;
        const tierCleared = doneCount === tier.quests.length;
        const isCurrentTier = unlocked && !tierCleared;

        return (
          <div key={tier.rank}>
            {/* Rank checkpoint banner */}
            <div
              className={`card-game p-4 mb-6 flex items-center gap-4 ${tierCleared ? "legacy-sheen" : ""}`}
              style={{
                borderColor: tierCleared ? "var(--gold)" : isCurrentTier ? "var(--primary)" : "var(--border-strong)",
                boxShadow: tierCleared
                  ? "0 4px 0 var(--gold-deep)"
                  : isCurrentTier
                  ? "0 4px 0 var(--primary-deep)"
                  : "0 4px 0 var(--border-strong)",
                background: tierCleared ? "var(--gold-bg)" : isCurrentTier ? "var(--primary-light)" : "var(--bg-card)",
                opacity: unlocked ? 1 : 0.6,
              }}
            >
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{
                  width: 48, height: 48,
                  background: tierCleared ? "var(--gold)" : unlocked ? "var(--primary)" : "var(--bg)",
                  color: tierCleared || unlocked ? "#fff" : "var(--text-muted)",
                  border: tierCleared || unlocked ? "none" : "2px solid var(--border-strong)",
                }}
              >
                {tierCleared ? <TrophyIcon size={21} /> : unlocked ? <BriefcaseIcon size={21} /> : <LockIcon size={18} />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-xl" style={{ color: unlocked ? "var(--text-primary)" : "var(--text-muted)" }}>
                    {tier.rank}
                  </span>
                  <span className="text-[11px] font-mono font-bold flex-shrink-0" style={{ color: tierCleared ? "var(--gold)" : "var(--text-muted)" }}>
                    {unlocked ? `${doneCount}/${tier.quests.length}` : `LEVEL ${tier.minLevel}`}
                  </span>
                </div>
                <p className="text-[11px] mt-0.5" style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>
                  {tier.brief}
                </p>
              </div>
            </div>

            {/* Quest nodes — zig-zag path */}
            <div className="mb-8">
              {tier.quests.map((q, qi) => {
                const claimed = career.claimed.includes(q.id);
                const p = q.progress(ctx);
                const pct = Math.min(100, Math.round((p.current / p.goal) * 100));
                const complete = p.current >= p.goal;
                const claimable = unlocked && complete && !claimed;
                const isHere = hereQuestId === q.id;
                const isSelected = selected === q.id;
                const x = OFFSETS[qi % OFFSETS.length];
                const prevX = qi === 0 ? null : OFFSETS[(qi - 1) % OFFSETS.length];

                return (
                  <div key={q.id}>
                    {/* connector from previous node */}
                    {prevX !== null && (
                      <svg width="100%" height="34" style={{ display: "block" }} viewBox="-150 0 300 34" preserveAspectRatio="xMidYMid meet">
                        <path
                          d={`M ${prevX} 0 C ${prevX} 20, ${x} 14, ${x} 34`}
                          fill="none"
                          stroke={claimed ? "var(--gold)" : "var(--border-strong)"}
                          strokeWidth="3.5"
                          strokeDasharray="1 8"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}

                    {/* node */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ transform: `translateX(${x}px)`, position: "relative" }}>
                        {isHere && (
                          <div
                            className="bob"
                            style={{
                              position: "absolute", top: -30, left: "50%", transform: "translateX(-50%)",
                              background: "var(--primary)", color: "#fff", fontSize: 9.5, fontWeight: 800,
                              letterSpacing: "0.08em", padding: "3.5px 9px", borderRadius: 8, whiteSpace: "nowrap",
                              boxShadow: "0 3px 0 var(--primary-deep)", zIndex: 2,
                            }}
                          >
                            {claimable ? "CLAIM!" : "YOU ARE HERE"}
                          </div>
                        )}
                        <button
                          onClick={() => setSelected(isSelected ? null : q.id)}
                          className={claimable ? "node-pulse" : undefined}
                          title={q.title}
                          style={{
                            position: "relative",
                            width: 62, height: 62, borderRadius: "50%",
                            cursor: "pointer",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: claimed
                              ? "linear-gradient(180deg, var(--gold-bright), var(--gold))"
                              : claimable
                              ? "linear-gradient(180deg, var(--gold-bright), var(--gold))"
                              : !unlocked
                              ? "var(--bg-card)"
                              : pct > 0
                              ? "var(--primary)"
                              : "var(--bg-card)",
                            color: claimed || claimable ? "#5d4a12" : pct > 0 && unlocked ? "#fff" : "var(--text-muted)",
                            border: claimed || claimable ? "none" : "2.5px solid var(--border-strong)",
                            boxShadow: claimed || claimable
                              ? "0 5px 0 var(--gold-deep)"
                              : unlocked && pct > 0
                              ? "0 5px 0 var(--primary-deep)"
                              : "0 5px 0 var(--border-strong)",
                            transition: "transform 0.08s",
                          }}
                        >
                          {justClaimed === q.id && <GoldBurst count={16} />}
                          {claimed ? (
                            <CheckIcon size={24} strokeWidth={3} />
                          ) : claimable ? (
                            <CoinIcon size={26} />
                          ) : !unlocked ? (
                            <LockIcon size={20} />
                          ) : (
                            <span className="font-mono text-xs font-extrabold">{pct}%</span>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* detail bubble */}
                    {isSelected && (
                      <div className="flex justify-center" style={{ marginTop: 10 }}>
                        <div className="card-game p-4 pop-in" style={{ width: 360, maxWidth: "100%", borderColor: claimable ? "var(--gold)" : undefined }}>
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-sm font-extrabold" style={{ color: "var(--text-primary)", textDecoration: claimed ? "line-through" : "none" }}>
                              {q.title}
                            </span>
                            <span className="flex items-center gap-1 text-[11px] font-extrabold flex-shrink-0" style={{ color: "var(--gold)" }}>
                              <CoinIcon size={13} /> {formatComp(q.reward)}
                            </span>
                          </div>
                          <p className="text-[11px] mb-2.5" style={{ color: "var(--text-secondary)" }}>{q.desc}</p>
                          <div className="progress-game" style={{ height: 12 }}>
                            <div
                              style={{
                                width: `${pct}%`,
                                background: claimed ? "var(--text-muted)" : complete ? "var(--gold)" : "var(--primary)",
                              }}
                            />
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-[10px] font-mono font-bold" style={{ color: "var(--text-muted)" }}>
                              {p.current}/{p.goal}
                            </span>
                            {claimed ? (
                              <span className="text-[11px] font-extrabold" style={{ color: "var(--gold)" }}>PAID</span>
                            ) : claimable ? (
                              <button
                                className="btn-game btn-game-gold"
                                style={{ padding: "0.45rem 1.1rem", fontSize: "0.74rem" }}
                                onClick={() => handleClaim(q)}
                              >
                                <CoinIcon size={13} /> CLAIM {formatComp(q.reward)}
                              </button>
                            ) : (
                              <span className="text-[10px] font-bold" style={{ color: "var(--text-muted)" }}>
                                {unlocked ? "KEEP GOING" : `UNLOCKS AT LEVEL ${tier.minLevel}`}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Name on the door */}
      <div className="card-game p-5 text-center" style={{ borderStyle: "dashed", borderColor: "var(--gold-border)" }}>
        <div className="flex justify-center mb-1.5" style={{ color: "var(--gold)" }}>
          <TrophyIcon size={26} />
        </div>
        <div className="font-display text-lg" style={{ color: "var(--text-primary)" }}>Name on the door</div>
        <div className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
          Clear every rung, then go pass the real thing. That trophy isn&apos;t in this app.
        </div>
      </div>
    </div>
  );
}
