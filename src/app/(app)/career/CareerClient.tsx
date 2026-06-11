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
import { GameState, EMPTY_STATE, levelFromXp } from "@/lib/studyPlan";
import { loadState } from "@/lib/gameStore";
import { Wallet, loadWallet, compBalance, formatComp } from "@/lib/economy";
import { ProgressBar, AnimatedNumber, GoldBurst } from "@/components/ui";
import { CheckIcon, LockIcon, BriefcaseIcon, TrophyIcon } from "@/components/icons";

export default function CareerClient() {
  const available = examsWithContent();
  const [exam, setExam] = useState(available[0] ?? "cfa");
  const [state, setState] = useState<GameState>(EMPTY_STATE);
  const [career, setCareer] = useState<CareerStore>({ claimed: [] });
  const [wallet, setWallet] = useState<Wallet>({ bonus: 0, spent: 0, owned: [] });
  const [loaded, setLoaded] = useState(false);
  const [justClaimed, setJustClaimed] = useState<string | null>(null);

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

  const level = levelFromXp(state.xp);

  function handleClaim(q: Quest) {
    if (!ctx) return;
    const store = claimQuest(q, ctx);
    if (!store) return;
    setCareer({ ...store });
    setWallet(loadWallet());
    setJustClaimed(q.id);
    setTimeout(() => setJustClaimed(null), 1300);
  }

  if (!loaded || !ctx) {
    return (
      <div className="px-8 py-8 max-w-2xl mx-auto">
        <div className="skeleton" style={{ height: 80, marginBottom: 16 }} />
        <div className="skeleton" style={{ height: 420 }} />
      </div>
    );
  }

  // Find the player's current tier index for the map.
  const currentTierIdx = LADDER.reduce((acc, t, i) => (level >= t.minLevel ? i : acc), 0);

  return (
    <div className="px-8 py-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-1">
        <h1 className="font-display text-3xl" style={{ color: "var(--text-primary)" }}>The Ladder</h1>
        <div className="text-right">
          <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Comp balance</div>
          <div className="font-display text-xl" style={{ color: "var(--gold)" }}>
            $<AnimatedNumber value={compBalance(state, wallet)} />
          </div>
        </div>
      </div>
      <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
        Intern to Partner. Every rung holds quests tied to real study — claim them for Comp and spend it at the{" "}
        <Link href="/shop" className="hover:underline" style={{ color: "var(--primary)" }}>Perks Desk</Link>.
      </p>

      {/* Exam selector */}
      <div className="flex items-center gap-2 mb-7 flex-wrap">
        {EXAMS.map((e) => {
          const has = available.includes(e.slug);
          const active = e.slug === exam;
          return (
            <button key={e.slug} disabled={!has} onClick={() => setExam(e.slug)}
              className="text-xs px-3 py-1.5 rounded-lg"
              style={{
                background: active ? "var(--primary)" : "var(--bg-card)",
                color: active ? "#fff" : has ? "var(--text-secondary)" : "var(--text-muted)",
                border: "0.5px solid var(--border)", opacity: has ? 1 : 0.5, cursor: has ? "pointer" : "not-allowed",
              }}>
              {e.name}{!has && " · soon"}
            </button>
          );
        })}
      </div>

      {/* The map */}
      <div style={{ position: "relative" }}>
        {/* Spine */}
        <div style={{ position: "absolute", left: 21, top: 8, bottom: 8, width: 2, background: "var(--border-strong)" }} />
        <div
          style={{
            position: "absolute", left: 21, top: 8, width: 2,
            height: `${Math.min(100, ((currentTierIdx + 0.5) / LADDER.length) * 100)}%`,
            background: "var(--gold)", boxShadow: "var(--glow-gold)",
            transition: "height 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        />

        {LADDER.map((tier, ti) => {
          const unlocked = tierUnlocked(tier, state);
          const reached = ti <= currentTierIdx;
          const tierQuests = tier.quests;
          const doneCount = tierQuests.filter((q) => career.claimed.includes(q.id)).length;
          const tierCleared = doneCount === tierQuests.length;

          return (
            <div key={tier.rank} className="flex gap-5 mb-7" style={{ position: "relative" }}>
              {/* Rank node */}
              <div
                className="flex-shrink-0 rounded-full flex items-center justify-center"
                style={{
                  width: 44, height: 44, zIndex: 1, marginTop: 2,
                  background: tierCleared ? "var(--gold)" : reached ? "var(--primary)" : "var(--bg-card)",
                  color: tierCleared || reached ? "#fff" : "var(--text-muted)",
                  border: tierCleared || reached ? "none" : "1.5px solid var(--border-strong)",
                  boxShadow: tierCleared ? "var(--glow-gold)" : reached ? "var(--glow-primary)" : "none",
                }}
              >
                {tierCleared ? <TrophyIcon size={18} /> : reached ? <BriefcaseIcon size={18} /> : <LockIcon size={16} />}
              </div>

              <div className="flex-1 min-w-0">
                {/* Tier header */}
                <div className="flex items-baseline justify-between mb-0.5">
                  <h2 className="font-display text-xl" style={{ color: reached ? "var(--text-primary)" : "var(--text-muted)" }}>
                    {tier.rank}
                  </h2>
                  <span className="text-[11px] font-mono" style={{ color: tierCleared ? "var(--gold)" : "var(--text-muted)" }}>
                    {unlocked ? `${doneCount}/${tierQuests.length} claimed` : `Unlocks at level ${tier.minLevel}`}
                  </span>
                </div>
                <p className="text-xs mb-3" style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>
                  {tier.brief}
                </p>

                {/* Quests */}
                <div className="space-y-2">
                  {tierQuests.map((q) => {
                    const claimed = career.claimed.includes(q.id);
                    const p = q.progress(ctx);
                    const complete = p.current >= p.goal;
                    const claimable = unlocked && complete && !claimed;
                    return (
                      <div
                        key={q.id}
                        className="card p-3.5"
                        style={{
                          position: "relative",
                          opacity: unlocked ? 1 : 0.5,
                          borderColor: claimable ? "var(--gold-border)" : claimed ? "var(--border)" : undefined,
                          boxShadow: claimable ? "var(--glow-gold)" : undefined,
                        }}
                      >
                        {justClaimed === q.id && <GoldBurst count={14} />}
                        <div className="flex items-center justify-between gap-3 mb-1.5">
                          <span
                            className="text-sm font-medium flex items-center gap-1.5 min-w-0"
                            style={{
                              color: claimed ? "var(--text-muted)" : "var(--text-primary)",
                              textDecoration: claimed ? "line-through" : "none",
                            }}
                          >
                            {claimed && <span style={{ color: "var(--gold)", flexShrink: 0 }}><CheckIcon size={13} /></span>}
                            <span className="truncate">{q.title}</span>
                          </span>
                          {claimed ? (
                            <span className="text-[11px] font-mono flex-shrink-0" style={{ color: "var(--gold)" }}>paid {formatComp(q.reward)}</span>
                          ) : claimable ? (
                            <button
                              className="text-[11px] font-bold px-3 py-1.5 rounded-md flex-shrink-0"
                              style={{ background: "var(--gold)", color: "#fff", boxShadow: "var(--shadow-sm)" }}
                              onClick={() => handleClaim(q)}
                            >
                              Claim {formatComp(q.reward)}
                            </button>
                          ) : (
                            <span className="text-[11px] font-mono flex-shrink-0" style={{ color: "var(--text-muted)" }}>{formatComp(q.reward)}</span>
                          )}
                        </div>
                        <p className="text-[11px] mb-2" style={{ color: "var(--text-secondary)" }}>{q.desc}</p>
                        <div className="flex items-center gap-2.5">
                          <div className="flex-1">
                            <ProgressBar
                              pct={(p.current / p.goal) * 100}
                              height={5}
                              sheen={claimable}
                              color={claimed ? "var(--text-muted)" : complete ? "var(--gold)" : "var(--primary)"}
                            />
                          </div>
                          <span className="text-[10px] font-mono flex-shrink-0" style={{ color: "var(--text-muted)" }}>
                            {p.current}/{p.goal}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        {/* Name on the door */}
        <div className="flex gap-5">
          <div
            className="flex-shrink-0 rounded-full flex items-center justify-center"
            style={{
              width: 44, height: 44, zIndex: 1,
              background: "var(--bg-card)", border: "1.5px dashed var(--gold-border)", color: "var(--gold)",
            }}
          >
            <TrophyIcon size={18} />
          </div>
          <div className="card flex-1 p-4" style={{ borderStyle: "dashed", borderColor: "var(--gold-border)" }}>
            <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Name on the door</div>
            <div className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
              Clear every rung, then go pass the real thing. That trophy isn&apos;t in this app.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
