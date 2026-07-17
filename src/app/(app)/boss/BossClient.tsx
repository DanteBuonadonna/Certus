"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { EXAMS, getExam } from "@/lib/exams";
import posthog from "posthog-js";
import { examsWithContent } from "@/content";
import { Question } from "@/content/types";
import {
  getBoss,
  bossConfig,
  buildBossExam,
  analyzeBoss,
  recordVictory,
  loadTrophies,
  BossResult,
  BossTrophies,
} from "@/lib/bossExam";
import { recordQuiz } from "@/lib/gameStore";
import { hapticCorrect, hapticWrong } from "@/lib/sound";
import { useAccess } from "@/lib/useAccess";
import { useLessonMode } from "@/lib/useLessonMode";
import { canStartBoss, recordBossAttempt } from "@/lib/access";
import { UpgradeCard } from "@/components/UpgradeGate";
import { ProgressBar, GoldBurst } from "@/components/ui";
import BossMonster from "@/components/BossMonster";
import { GATE_PRICE_LINE } from "@/lib/tier";
import {
  BossCrest,
  ShieldCheckIcon,
  ShieldIcon,
  ClipboardIcon,
  ClockIcon,
  TargetIcon,
  TrophyIcon,
  CheckIcon,
} from "@/components/icons";

type Phase = "setup" | "battle" | "result";

export default function BossClient() {
  const available = examsWithContent();
  const access = useAccess();
  const [exam, setExam] = useState(available[0] ?? "cfa");
  const [phase, setPhase] = useState<Phase>("setup");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [result, setResult] = useState<BossResult | null>(null);
  const [trophies, setTrophies] = useState<BossTrophies>({});

  useEffect(() => { setTrophies(loadTrophies()); }, [phase]);

  const boss = getBoss(exam);
  const accent = getExam(exam)?.accent ?? "#534AB7";
  const pool = useMemo(() => buildBossExam(exam, 20), [exam]);
  const cfg = bossConfig(pool.length);

  function begin() {
    if (!canStartBoss(exam, access.pro)) return;
    recordBossAttempt(exam);
    posthog.capture("boss_exam_started", { exam, question_count: pool.length });
    setQuestions(buildBossExam(exam, 20));
    setResult(null);
    setPhase("battle");
  }

  function finish(answers: (number | null)[], answeredCount: number, defeatedByHearts: boolean) {
    const sliced = questions.slice(0, answeredCount);
    const res = analyzeBoss(sliced, answers, cfg.passPct);
    const passed = res.passed && !defeatedByHearts;
    const finalRes = { ...res, passed };
    recordQuiz(exam, res.correct, res.total, undefined, { passed, isBoss: true });
    if (passed) { recordVictory(exam, res.pct); }
    posthog.capture("boss_exam_completed", {
      exam,
      passed,
      score_pct: res.pct,
      correct_count: res.correct,
      total_questions: res.total,
      defeated_by_hearts: defeatedByHearts,
    });
    setResult(finalRes);
    setPhase("result");
  }

  // Everyone gets ONE free attempt per exam; retakes are Pro.
  const attemptLocked = access.ready && !canStartBoss(exam, access.pro);

  if (phase === "battle") {
    return <Battle exam={exam} accent={accent} questions={questions} cfg={cfg} boss={boss} onFinish={finish} onQuit={() => setPhase("setup")} />;
  }

  if (phase === "result" && result) {
    return <Result exam={exam} accent={accent} boss={boss} cfg={cfg} result={result} onRetry={() => setPhase("setup")} />;
  }

  // setup — the briefing room
  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      <h1 className="font-display text-3xl mb-1" style={{ color: "var(--text-primary)" }}>The Final</h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        A timed, comprehensive exam across every topic. Wrong answers cost integrity. Survive and score {Math.round(cfg.passPct * 100)}%+ to clear the board.
      </p>

      <div className="flex items-center gap-2 mb-6 flex-wrap">
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

      {/* Briefing card */}
      <div className="card p-6 text-center mb-5 rise-in" style={{ borderTop: `3px solid ${accent}` }}>
        <div className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
          Examination briefing
        </div>
        <div className="flex justify-center mb-3 scale-in">
          <BossCrest exam={exam} accent={accent} size={84} />
        </div>
        <div className="font-display text-xl mb-1" style={{ color: "var(--text-primary)" }}>{boss.name}</div>
        <p className="text-sm mb-5" style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>&ldquo;{boss.intro}&rdquo;</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
          <Spec icon={<ClipboardIcon size={17} />} label={`${pool.length} questions`} />
          <Spec icon={<ShieldIcon size={17} />} label={`${cfg.hearts} integrity`} />
          <Spec icon={<ClockIcon size={17} />} label={`${cfg.secondsPerQuestion}s each`} />
          <Spec icon={<TargetIcon size={17} />} label={`${Math.round(cfg.passPct * 100)}% to clear`} />
        </div>

        {trophies[exam] && (
          <div className="pill-gold mb-4">
            <TrophyIcon size={12} /> Cleared · best score {trophies[exam].bestPct}%
          </div>
        )}
        {attemptLocked ? (
          <UpgradeCard
            title="You've used your free attempt at this Final"
            reason={`You've used your free sitting for this exam. Pro unlocks unlimited retakes. ${GATE_PRICE_LINE}`}
          />
        ) : (
          <>
            {access.ready && !access.pro && (
              <p className="text-xs mb-3 font-semibold" style={{ color: "var(--ats-green)" }}>
                Free attempt available — make it count.
              </p>
            )}
            <button className="btn-primary w-full" disabled={pool.length === 0} onClick={begin}>
              {pool.length === 0 ? "No questions yet" : "Enter the exam room →"}
            </button>
          </>
        )}
      </div>

      <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
        Fail, and you&apos;ll be sent to train your weakest topics before the retake.
      </p>
    </div>
  );
}

function Battle({
  exam, accent, questions, cfg, boss, onFinish, onQuit,
}: {
  exam: string;
  accent: string;
  questions: Question[];
  cfg: ReturnType<typeof bossConfig>;
  boss: ReturnType<typeof getBoss>;
  onFinish: (answers: (number | null)[], answeredCount: number, defeatedByHearts: boolean) => void;
  onQuit: () => void;
}) {
  // The Final is a timed exam — hide the nav while it's live.
  useLessonMode(true);

  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [hearts, setHearts] = useState(cfg.hearts);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(cfg.secondsPerQuestion);
  const [fx, setFx] = useState<"shake" | "gold-flash" | null>(null);
  const [hitKey, setHitKey] = useState(0);
  const answeredRef = useRef(false);

  const q = questions[idx];
  const correctCount = answers.filter((a, i) => a === questions[i].answerIndex).length;
  const bossHpPct = Math.max(0, Math.round((1 - correctCount / questions.length) * 100));

  // Timer per question
  useEffect(() => {
    setTimeLeft(cfg.secondsPerQuestion);
    answeredRef.current = false;
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          if (!answeredRef.current) lockAnswer(null);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  function lockAnswer(choice: number | null) {
    if (answeredRef.current) return;
    answeredRef.current = true;
    setPicked(choice);
    setAnswered(true);
    const isCorrect = choice === q.answerIndex;
    if (!isCorrect) { setHearts((h) => h - 1); hapticWrong(); }
    else { setHitKey((k) => k + 1); hapticCorrect(); } // land a hit on the monster
    setFx(isCorrect ? "gold-flash" : "shake");
    setTimeout(() => setFx(null), 650);
  }

  function next() {
    const newAnswers = [...answers, picked];
    setAnswers(newAnswers);
    const lostAll = hearts <= 0;
    const isLast = idx + 1 >= questions.length;
    if (lostAll || isLast) {
      onFinish(newAnswers, newAnswers.length, lostAll);
    } else {
      setIdx(idx + 1);
      setPicked(null);
      setAnswered(false);
    }
  }

  const correct = picked === q.answerIndex;
  const timePct = (timeLeft / cfg.secondsPerQuestion) * 100;
  const urgent = timeLeft <= 10;

  return (
    <div className={`px-4 py-6 md:px-8 max-w-2xl mx-auto ${fx ?? ""}`} style={{ borderRadius: 16 }}>
      {/* The boss — an animated creature that flinches as you land hits */}
      <div className="flex flex-col items-center mb-3">
        <BossMonster accent={accent} hpPct={bossHpPct} hitKey={hitKey} defeated={bossHpPct === 0} size={150} />
        <div className="text-sm font-semibold mt-1" style={{ color: "var(--text-primary)" }}>{boss.name}</div>
      </div>

      {/* Boss HP bar — cracks away as you land hits */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Resistance</span>
          <span className="text-xs font-mono font-bold" style={{ color: bossHpPct === 0 ? "var(--ats-green)" : "var(--ats-red)" }}>{bossHpPct === 0 ? "DEFEATED" : `${bossHpPct}%`}</span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: questions.length }).map((_, i) => {
            const filled = i < Math.round((bossHpPct / 100) * questions.length);
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 12,
                  borderRadius: 4,
                  background: filled ? "var(--ats-red)" : "var(--ats-green-bg)",
                  border: "1px solid var(--border)",
                  transition: "background 0.4s",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Player status: integrity + timer */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-1" title="Integrity — wrong answers cost one">
          {Array.from({ length: cfg.hearts }).map((_, i) => (
            <span key={i} style={{ color: i < hearts ? "var(--primary)" : "var(--text-muted)", opacity: i < hearts ? 1 : 0.3, transition: "all 0.3s" }}>
              {i < hearts ? <ShieldCheckIcon size={17} /> : <ShieldIcon size={17} />}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Q{idx + 1}/{questions.length}</span>
          <TimerRing pct={timePct} seconds={timeLeft} urgent={urgent} />
          <button onClick={onQuit} className="text-xs hover:underline" style={{ color: "var(--text-muted)" }}>Withdraw</button>
        </div>
      </div>

      <h2 className="text-base mb-2" style={{ color: "var(--primary)", fontWeight: 500 }}>{q.topicName}</h2>
      <p className="text-lg mb-5" style={{ color: "var(--text-primary)", lineHeight: 1.5 }}>{q.stem}</p>

      <div className="space-y-2.5 mb-4">
        {q.choices.map((choice, i) => {
          const isAnswer = i === q.answerIndex;
          const isPicked = i === picked;
          let bg = "var(--bg-card)", border = "0.5px solid var(--border-strong)", color = "var(--text-primary)";
          if (answered) {
            if (isAnswer) { bg = "var(--ats-green-bg)"; border = "0.5px solid var(--ats-green)"; color = "var(--ats-green)"; }
            else if (isPicked) { bg = "var(--ats-red-bg)"; border = "0.5px solid var(--ats-red)"; color = "var(--ats-red)"; }
          }
          return (
            <button key={i} disabled={answered} onClick={() => lockAnswer(i)}
              className="w-full text-left px-4 py-3 rounded-lg text-sm flex items-start gap-3 transition-all"
              style={{ background: bg, border, color, cursor: answered ? "default" : "pointer" }}>
              <span className="font-semibold flex-shrink-0">{String.fromCharCode(65 + i)}</span>
              <span>{choice}</span>
              {answered && isAnswer && <span className="ml-auto flex-shrink-0"><CheckIcon size={15} /></span>}
              {answered && isPicked && !isAnswer && <span className="ml-auto flex-shrink-0">✕</span>}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="rounded-lg p-4 mb-4 animate-in" style={{ background: "var(--bg-card)", border: `0.5px solid ${correct ? "var(--ats-green)" : "var(--ats-red)"}` }}>
          <div className="text-sm font-semibold mb-1.5" style={{ color: correct ? "var(--ats-green)" : "var(--ats-red)" }}>
            {correct ? "Correct — the board's resistance weakens." : picked === null ? "Time expired — the board scores against you." : "Incorrect — your integrity takes a hit."}
          </div>
          <p className="text-sm" style={{ color: "var(--text-primary)", lineHeight: 1.6, opacity: 0.92 }}>{q.explanation}</p>
        </div>
      )}

      <button className="btn-primary w-full" disabled={!answered} onClick={next}>
        {hearts <= 0 ? "The board prevails…" : idx + 1 >= questions.length ? "Submit exam" : "Next →"}
      </button>
    </div>
  );
}

function TimerRing({ pct, seconds, urgent }: { pct: number; seconds: number; urgent: boolean }) {
  const r = 13;
  const c = 2 * Math.PI * r;
  return (
    <span className="inline-flex items-center justify-center" style={{ position: "relative", width: 34, height: 34 }}>
      <svg width="34" height="34" viewBox="0 0 34 34" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="17" cy="17" r={r} fill="none" stroke="var(--bg)" strokeWidth="3" />
        <circle
          cx="17" cy="17" r={r} fill="none"
          stroke={urgent ? "var(--ats-red)" : "var(--text-secondary)"}
          strokeWidth="3" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c - (pct / 100) * c}
          style={{ transition: "stroke-dashoffset 1s linear, stroke 0.3s" }}
        />
      </svg>
      <span
        className="font-mono"
        style={{
          position: "absolute", fontSize: 9.5, fontWeight: 700,
          color: urgent ? "var(--ats-red)" : "var(--text-secondary)",
        }}
      >
        {seconds}
      </span>
    </span>
  );
}

// ---- Result: a post-exam performance report ------------------------------
function Result({
  exam, accent, boss, cfg, result, onRetry,
}: {
  exam: string;
  accent: string;
  boss: ReturnType<typeof getBoss>;
  cfg: ReturnType<typeof bossConfig>;
  result: BossResult;
  onRetry: () => void;
}) {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      {/* Report header */}
      <div className="card mb-6 rise-in" style={{ overflow: "hidden", position: "relative" }}>
        <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: "0.5px solid var(--border)", background: "var(--bg)" }}>
          <div className="flex items-center gap-2.5">
            <BossCrest exam={exam} accent={accent} size={32} />
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                Post-exam performance report
              </div>
              <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{boss.name}</div>
            </div>
          </div>
          <span
            className="stamp-in font-display"
            style={{
              border: `2.5px solid ${result.passed ? "var(--ats-green)" : "var(--ats-red)"}`,
              color: result.passed ? "var(--ats-green)" : "var(--ats-red)",
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            {result.passed ? "CLEARED" : "NOT CLEARED"}
          </span>
        </div>

        <div className="p-6 text-center" style={{ position: "relative" }}>
          {result.passed && <GoldBurst count={24} />}
          {result.passed && (
            <div className="flex justify-center mb-2">
              <BossMonster accent={accent} hpPct={0} hitKey={0} defeated size={120} />
            </div>
          )}
          <div className="font-display" style={{ fontSize: "3.2rem", color: result.passed ? "var(--ats-green)" : "var(--text-primary)", lineHeight: 1 }}>
            {result.pct}%
          </div>
          <p className="text-sm mt-1.5" style={{ color: "var(--text-secondary)" }}>
            {result.correct} of {result.total} correct · {Math.round(cfg.passPct * 100)}% required
          </p>
          {!result.passed && (
            <p className="text-sm mt-3" style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>&ldquo;{boss.defeatTaunt}&rdquo;</p>
          )}
          {result.passed && (
            <div className="pill-gold mt-3">
              <TrophyIcon size={12} /> +45 XP · cleared · exam-ready
            </div>
          )}
        </div>
      </div>

      {result.weakTopics.length > 0 && (
        <>
          <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
            {result.passed ? "Still worth shoring up" : "Train these before the retake"}
          </h3>
          <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>Your weakest topics in this sitting, weakest first.</p>
          <div className="space-y-2 mb-6 stagger">
            {result.weakTopics.map((t) => (
              <div key={t.topicId} className="card-i p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{t.topicName}</span>
                  <span className="text-xs font-semibold font-mono" style={{ color: "var(--ats-red)" }}>{t.correct}/{t.total} · {t.pct}%</span>
                </div>
                <ProgressBar pct={t.pct} height={5} sheen={false} color="var(--ats-red)" />
                <div className="flex items-center gap-3 mt-2.5">
                  <Link href={`/learn?exam=${exam}&topic=${t.topicId}`} className="text-xs font-medium hover:underline" style={{ color: "var(--primary)" }}>Re-read lesson</Link>
                  <Link href={`/flashcards?exam=${exam}&topic=${t.topicId}`} className="text-xs font-medium hover:underline" style={{ color: "var(--primary)" }}>Flashcards</Link>
                  <Link href={`/practice?exam=${exam}&topic=${t.topicId}`} className="text-xs font-medium hover:underline" style={{ color: "var(--primary)" }}>Drill questions</Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="flex items-center gap-3">
        <button className="btn-primary flex-1" onClick={onRetry}>{result.passed ? "Sit it again" : "Retake"}</button>
        <Link href="/skilltree" className="btn-secondary flex-1 text-center">View skill tree</Link>
      </div>
    </div>
  );
}

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="text-center rounded-lg py-2.5" style={{ background: "var(--bg)" }}>
      <div className="flex justify-center mb-1" style={{ color: "var(--text-secondary)" }}>{icon}</div>
      <div className="text-[11px]" style={{ color: "var(--text-secondary)" }}>{label}</div>
    </div>
  );
}
