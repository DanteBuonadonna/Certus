"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getExam } from "@/lib/exams";
import { examsWithContent } from "@/content";
import { Question } from "@/content/types";
import { recordQuiz, loadState } from "@/lib/gameStore";
import { useAccess } from "@/lib/useAccess";
import { UpgradeCard } from "@/components/UpgradeGate";
import {
  LIGHTNING_SECONDS,
  lightningDeck,
  OPEN_SIZE,
  dailyOpenSet,
  openResultToday,
  saveOpenResult,
  WAGER_SIZE,
  WAGER_STAKES,
  WAGER_TARGET_PCT,
} from "@/lib/modes";
import {
  loadWallet,
  compBalance,
  spendComp,
  grantBonus,
  formatComp,
} from "@/lib/economy";
import { Coin, CoinBurst } from "@/components/Coin";
import Confetti from "@/components/Confetti";
import { playCorrect, playWrong, playComplete, playCoin, hapticCorrect, hapticWrong } from "@/lib/sound";
import { TIER_SENTENCE, GATE_PRICE_LINE } from "@/lib/tier";
import { preferredExam } from "@/lib/preferredExam";
import ExamPicker from "@/components/ExamPicker";

type Mode = "lightning" | "open" | "wager";

export default function ChallengesClient() {
  const available = examsWithContent();
  const access = useAccess();
  const [exam, setExam] = useState(() => preferredExam(available));
  const [mode, setMode] = useState<Mode | null>(null);

  if (mode === "lightning") return <Lightning exam={exam} onExit={() => setMode(null)} />;
  if (mode === "open") return <TheOpen exam={exam} onExit={() => setMode(null)} />;
  if (mode === "wager") return <Wager exam={exam} onExit={() => setMode(null)} />;

  // Was: access.ready && !access.canExam(exam) — permanently false, so the
  // "Challenges are Pro" card below was unreachable. Challenges are FREE.
  // See src/lib/tier.ts.
  const locked = false;
  const openRec = typeof window !== "undefined" ? openResultToday(exam) : null;

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      <h1 className="font-display text-3xl mb-1" style={{ color: "var(--text-primary)" }}>Challenges</h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        Fast, high-stakes ways to earn XP. Every correct answer feeds your Division ranking.
      </p>

      {/* Exam selector */}
      <div className="mb-6">
        <ExamPicker
          value={exam}
          available={available}
          onChange={(slug) => setExam(slug)}
          label="Challenges for"
        />
      </div>

      {locked ? (
        <UpgradeCard title="Challenges are Pro" reason={`${TIER_SENTENCE} ${GATE_PRICE_LINE}`} />
      ) : (
        <div className="space-y-4">
          <ModeCard
            color="var(--duo-yellow)"
            emoji="⚡"
            title="Lightning Round"
            desc={`${LIGHTNING_SECONDS} seconds. Answer as many as you can — speed and accuracy both pay.`}
            cta="Start"
            onClick={() => setMode("lightning")}
          />
          <ModeCard
            color="var(--duo-blue)"
            emoji="📊"
            title="The Open"
            desc={openRec
              ? `Today's mock is done — you scored ${openRec.pct}%. Comes back tomorrow.`
              : `${OPEN_SIZE} questions, the same set everyone gets today. One attempt.`}
            cta={openRec ? "Done today" : "Take it"}
            disabled={!!openRec}
            onClick={() => setMode("open")}
          />
          <ModeCard
            color="var(--gold)"
            emoji="🎲"
            title="Wager"
            desc={`Stake Comp, hit ${WAGER_TARGET_PCT}%+ over ${WAGER_SIZE} questions, and double it. Miss and you lose the stake.`}
            cta="Place a wager"
            onClick={() => setMode("wager")}
          />
        </div>
      )}
    </div>
  );
}

function ModeCard({ color, emoji, title, desc, cta, onClick, disabled }: { color: string; emoji: string; title: string; desc: string; cta: string; onClick: () => void; disabled?: boolean }) {
  return (
    <div className="card-i p-4 flex items-center gap-4" style={{ borderLeft: `4px solid ${color}` }}>
      <span style={{ fontSize: 34 }}>{emoji}</span>
      <div className="flex-1 min-w-0">
        <div className="text-base font-extrabold" style={{ color: "var(--text-primary)" }}>{title}</div>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>{desc}</p>
      </div>
      <button className="btn-duo flex-shrink-0" disabled={disabled} onClick={onClick} style={{ padding: "0.6rem 1.1rem", fontSize: "0.8rem" }}>
        {cta}
      </button>
    </div>
  );
}

// ---- Shared quiz runner ----------------------------------------------------
function Runner({
  questions,
  durationSec,
  accent,
  onDone,
}: {
  questions: Question[];
  durationSec: number; // 0 = untimed, run through all
  accent: string;
  onDone: (correct: number, answered: number) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(durationSec);
  const [score, setScore] = useState(0);
  const correctRef = useRef(0);
  const answeredRef = useRef(0);
  const doneRef = useRef(false);

  function finish() {
    if (doneRef.current) return;
    doneRef.current = true;
    onDone(correctRef.current, answeredRef.current);
  }

  useEffect(() => {
    if (!durationSec) return;
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          finish();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const q = questions[idx];
  if (!q) {
    // exhausted the deck (untimed runs)
    if (!doneRef.current) finish();
    return null;
  }

  function pick(i: number) {
    if (locked) return;
    setLocked(true);
    setPicked(i);
    answeredRef.current += 1;
    const right = i === q.answerIndex;
    if (right) { correctRef.current += 1; setScore((s) => s + 1); playCorrect(); hapticCorrect(); }
    else { playWrong(); hapticWrong(); }
    setTimeout(() => {
      if (doneRef.current) return;
      if (idx + 1 >= questions.length) finish();
      else { setIdx(idx + 1); setPicked(null); setLocked(false); }
    }, 520);
  }

  const total = durationSec ? answeredRef.current : questions.length;

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        {durationSec ? (
          <span className="font-display text-2xl" style={{ color: timeLeft <= 10 ? "var(--ats-red)" : accent }}>{timeLeft}s</span>
        ) : (
          <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
            Q{idx + 1} / {questions.length}
          </span>
        )}
        <span className="text-sm font-extrabold" style={{ color: "var(--duo-green)" }}>✓ {score}{durationSec ? "" : ` / ${total}`}</span>
      </div>

      <div className="text-xs font-bold mb-2" style={{ color: accent }}>{q.topicName}</div>
      <h2 className="text-lg font-bold mb-5" style={{ color: "var(--text-primary)", lineHeight: 1.45 }}>{q.stem}</h2>

      <div className="space-y-3">
        {q.choices.map((choice, i) => {
          const isAnswer = i === q.answerIndex;
          const isPicked = i === picked;
          let cls = "duo-option";
          if (locked) {
            cls += " locked";
            if (isAnswer) cls += " correct";
            else if (isPicked) cls += " wrong";
            else cls += " opacity-50";
          }
          return (
            <button key={i} disabled={locked} onClick={() => pick(i)} className={cls}>
              <span className="duo-key">{String.fromCharCode(65 + i)}</span>
              <span className="flex-1">{choice}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---- Lightning Round -------------------------------------------------------
function Lightning({ exam, onExit }: { exam: string; onExit: () => void }) {
  const accent = getExam(exam)?.accent ?? "var(--duo-yellow)";
  const deck = useMemo(() => lightningDeck(exam), [exam]);
  const [phase, setPhase] = useState<"play" | "result">("play");
  const [res, setRes] = useState<{ correct: number; answered: number; xp: number }>({ correct: 0, answered: 0, xp: 0 });

  function done(correct: number, answered: number) {
    const r = recordQuiz(exam, correct, answered, undefined, {});
    setRes({ correct, answered, xp: r.xpEarned });
    setPhase("result");
  }

  if (phase === "play") return <Runner questions={deck} durationSec={LIGHTNING_SECONDS} accent={accent} onDone={done} />;
  return (
    <ResultScreen
      title="Time!"
      emoji="⚡"
      lines={[`${res.correct} correct of ${res.answered}`, `Speed bonus locked in`]}
      xp={res.xp}
      onAgain={() => setPhase("play")}
      onExit={onExit}
    />
  );
}

// ---- The Open --------------------------------------------------------------
function TheOpen({ exam, onExit }: { exam: string; onExit: () => void }) {
  const accent = getExam(exam)?.accent ?? "var(--duo-blue)";
  const set = useMemo(() => dailyOpenSet(exam), [exam]);
  const [phase, setPhase] = useState<"play" | "result">("play");
  const [res, setRes] = useState<{ correct: number; total: number; xp: number }>({ correct: 0, total: 0, xp: 0 });

  function done(correct: number, answered: number) {
    saveOpenResult(exam, correct, set.length);
    const r = recordQuiz(exam, correct, set.length, undefined, {});
    setRes({ correct, total: set.length, xp: r.xpEarned });
    setPhase("result");
  }

  if (phase === "play") return <Runner questions={set} durationSec={0} accent={accent} onDone={done} />;
  const pct = res.total ? Math.round((res.correct / res.total) * 100) : 0;
  return (
    <ResultScreen
      title="The Open — submitted"
      emoji="📊"
      lines={[`${res.correct} of ${res.total} correct (${pct}%)`, `Same set everyone faced today`]}
      xp={res.xp}
      onExit={onExit}
    />
  );
}

// ---- Wager -----------------------------------------------------------------
function Wager({ exam, onExit }: { exam: string; onExit: () => void }) {
  const accent = getExam(exam)?.accent ?? "var(--gold)";
  const [balance, setBalance] = useState(0);
  const [stake, setStake] = useState<number | null>(null);
  const [phase, setPhase] = useState<"setup" | "play" | "result">("setup");
  const [res, setRes] = useState<{ correct: number; total: number; won: boolean; payout: number; xp: number }>({ correct: 0, total: 0, won: false, payout: 0, xp: 0 });
  const set = useMemo(() => dailyOpenSet(exam), [exam]); // reuse a fresh-ish set; shuffle daily

  useEffect(() => { setBalance(compBalance(loadState(), loadWallet())); }, []);

  function begin(s: number) {
    spendComp(s); // lock the stake
    setStake(s);
    setBalance((b) => b - s);
    setPhase("play");
  }

  function done(correct: number, answered: number) {
    const total = set.length;
    const pct = total ? (correct / total) * 100 : 0;
    const won = pct >= WAGER_TARGET_PCT;
    const payout = won && stake ? stake * 2 : 0;
    if (payout) grantBonus(payout);
    const r = recordQuiz(exam, correct, total, undefined, {});
    setRes({ correct, total, won, payout, xp: r.xpEarned });
    setPhase("result");
  }

  if (phase === "setup") {
    return (
      <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
        <button onClick={onExit} className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>← Challenges</button>
        <h1 className="font-display text-2xl mb-1" style={{ color: "var(--text-primary)" }}>Place your wager</h1>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
          Score <strong>{WAGER_TARGET_PCT}%+</strong> over {WAGER_SIZE} questions to double your stake. Miss and you forfeit it.
        </p>
        <div className="card p-3 mb-5 flex items-center gap-2">
          <Coin size={20} /><span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>Balance: {formatComp(balance)}</span>
        </div>
        <div className="space-y-3">
          {WAGER_STAKES.map((s) => {
            const afford = balance >= s;
            return (
              <button key={s} disabled={!afford} onClick={() => begin(s)}
                className="card-i w-full p-4 flex items-center justify-between"
                style={{ borderColor: afford ? "var(--gold-border)" : "var(--border)", opacity: afford ? 1 : 0.5, cursor: afford ? "pointer" : "not-allowed" }}>
                <span className="flex items-center gap-2 text-base font-extrabold" style={{ color: "var(--gold)" }}>
                  <Coin size={20} /> {formatComp(s)}
                </span>
                <span className="text-sm font-bold" style={{ color: "var(--ats-green)" }}>win {formatComp(s * 2)}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (phase === "play") return <Runner questions={set} durationSec={0} accent={accent} onDone={done} />;

  const pct = res.total ? Math.round((res.correct / res.total) * 100) : 0;
  return (
    <ResultScreen
      title={res.won ? "You won the wager!" : "Wager lost"}
      emoji={res.won ? "🤑" : "💸"}
      lines={[`${res.correct} of ${res.total} correct (${pct}%)`, res.won ? `Doubled your stake` : `Needed ${WAGER_TARGET_PCT}% — better luck next time`]}
      xp={res.xp}
      comp={res.won ? res.payout : undefined}
      celebrate={res.won}
      onExit={onExit}
    />
  );
}

// ---- Shared result screen --------------------------------------------------
function ResultScreen({
  title, emoji, lines, xp, comp, celebrate, onAgain, onExit,
}: {
  title: string;
  emoji: string;
  lines: string[];
  xp: number;
  comp?: number;
  celebrate?: boolean;
  onAgain?: () => void;
  onExit: () => void;
}) {
  const [shownXp, setShownXp] = useState(0);
  useEffect(() => {
    playComplete();
    if (comp) playCoin();
    let cur = 0;
    const step = Math.max(1, Math.round(xp / 26));
    const iv = setInterval(() => { cur = Math.min(xp, cur + step); setShownXp(cur); if (cur >= xp) clearInterval(iv); }, 28);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-4 py-10 md:px-8 max-w-md mx-auto text-center" style={{ position: "relative" }}>
      {celebrate && <Confetti count={90} />}
      <div className="anim-pop">
        <div style={{ fontSize: 56 }}>{emoji}</div>
        <div className="font-display text-3xl mt-2 mb-4" style={{ color: "var(--text-primary)" }}>{title}</div>
      </div>
      <div className="space-y-1 mb-5">
        {lines.map((l, i) => (
          <p key={i} className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>{l}</p>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mb-7">
        <div className="card p-3 flex-1" style={{ borderBottom: "4px solid var(--duo-yellow)" }}>
          <div className="text-lg">⚡</div>
          <div className="text-xl font-extrabold" style={{ color: "var(--duo-yellow)" }}>+{shownXp}</div>
          <div className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>XP</div>
        </div>
        {comp !== undefined && (
          <div className="card p-3 flex-1" style={{ borderBottom: "4px solid var(--gold)", position: "relative" }}>
            {comp > 0 && <CoinBurst count={10} size={18} />}
            <div className="text-lg">💰</div>
            <div className="text-xl font-extrabold" style={{ color: "var(--gold)" }}>+{comp.toLocaleString()}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Comp</div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3">
        {onAgain && <button className="btn-duo flex-1" onClick={onAgain}>Go again</button>}
        <button className={`btn-duo ${onAgain ? "duo-ghost" : ""} flex-1`} onClick={onExit}>Done</button>
      </div>
    </div>
  );
}
