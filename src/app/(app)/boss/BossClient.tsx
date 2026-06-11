"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { EXAMS, getExam } from "@/lib/exams";
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
import { recordStudy } from "@/lib/gameStore";
import { useAccess } from "@/lib/useAccess";
import { UpgradeCard } from "@/components/UpgradeGate";

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
  const pool = useMemo(() => buildBossExam(exam, 20), [exam]);
  const cfg = bossConfig(pool.length);

  function begin() {
    setQuestions(buildBossExam(exam, 20));
    setResult(null);
    setPhase("battle");
  }

  function finish(answers: (number | null)[], answeredCount: number, defeatedByHearts: boolean) {
    const sliced = questions.slice(0, answeredCount);
    const res = analyzeBoss(sliced, answers, cfg.passPct);
    const passed = res.passed && !defeatedByHearts;
    const finalRes = { ...res, passed };
    // XP for the attempt (boss is worth a solid chunk), bonus on victory
    recordStudy(exam, passed ? 45 : 20);
    if (passed) { recordVictory(exam, res.pct); }
    setResult(finalRes);
    setPhase("result");
  }

  // Boss battles are a Pro feature for everyone.
  if (access.ready && !access.canBoss()) {
    return (
      <div className="px-8 py-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>Boss battle</h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Face a timed, comprehensive exam against the boss of each certification.
        </p>
        <UpgradeCard title="Boss battles are a Pro feature" reason="Defeat the boss of each exam to prove you're ready. Upgrade to take them on." />
      </div>
    );
  }

  if (phase === "battle") {
    return <Battle exam={exam} questions={questions} cfg={cfg} boss={boss} onFinish={finish} onQuit={() => setPhase("setup")} />;
  }

  if (phase === "result" && result) {
    return <Result exam={exam} boss={boss} result={result} onRetry={() => setPhase("setup")} />;
  }

  // setup
  return (
    <div className="px-8 py-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>Boss battle</h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        A timed, comprehensive exam across every topic. Wrong answers cost hearts. Survive and score {Math.round(cfg.passPct * 100)}%+ to win.
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

      <div className="card p-6 text-center mb-5">
        <div className="text-5xl mb-2">{boss.emoji}</div>
        <div className="text-lg font-medium mb-1" style={{ color: "var(--text-primary)" }}>{boss.name}</div>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>&ldquo;{boss.intro}&rdquo;</p>
        <div className="flex items-center justify-center gap-5 mb-4">
          <Spec icon="📋" label={`${pool.length} questions`} />
          <Spec icon="❤️" label={`${cfg.hearts} hearts`} />
          <Spec icon="⏱️" label={`${cfg.secondsPerQuestion}s each`} />
          <Spec icon="🎯" label={`${Math.round(cfg.passPct * 100)}% to win`} />
        </div>
        {trophies[exam] && (
          <div className="text-xs mb-4 inline-flex items-center gap-1 px-3 py-1 rounded-full" style={{ background: "var(--ats-green-bg)", color: "var(--ats-green)" }}>
            🏆 Defeated · best score {trophies[exam].bestPct}%
          </div>
        )}
        <button className="btn-primary w-full" disabled={pool.length === 0} onClick={begin}>
          {pool.length === 0 ? "No questions yet" : `Face ${boss.name} →`}
        </button>
      </div>

      <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
        Lose, and you&apos;ll be sent to train your weakest topics before the rematch.
      </p>
    </div>
  );
}

function Battle({
  exam, questions, cfg, boss, onFinish, onQuit,
}: {
  exam: string;
  questions: Question[];
  cfg: ReturnType<typeof bossConfig>;
  boss: ReturnType<typeof getBoss>;
  onFinish: (answers: (number | null)[], answeredCount: number, defeatedByHearts: boolean) => void;
  onQuit: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [hearts, setHearts] = useState(cfg.hearts);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(cfg.secondsPerQuestion);
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
    if (!isCorrect) setHearts((h) => h - 1);
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

  return (
    <div className="px-8 py-6 max-w-2xl mx-auto">
      {/* Boss header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{boss.emoji}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{boss.name}</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>{bossHpPct}% HP</span>
          </div>
          <div style={{ height: 10, borderRadius: 100, background: "var(--bg-card)", overflow: "hidden", border: "0.5px solid var(--border)" }}>
            <div style={{ width: `${bossHpPct}%`, height: "100%", background: "var(--ats-red)", transition: "width 0.4s" }} />
          </div>
        </div>
      </div>

      {/* Player status: hearts + timer */}
      <div className="flex items-center justify-between mb-5">
        <div className="text-base tracking-wide">
          {Array.from({ length: cfg.hearts }).map((_, i) => (
            <span key={i} style={{ opacity: i < hearts ? 1 : 0.2 }}>❤️</span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>Q{idx + 1}/{questions.length}</span>
          <span className="text-sm font-semibold" style={{ color: timeLeft <= 10 ? "var(--ats-red)" : "var(--text-secondary)" }}>
            ⏱️ {timeLeft}s
          </span>
          <button onClick={onQuit} className="text-xs" style={{ color: "var(--text-muted)" }}>Quit</button>
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
              className="w-full text-left px-4 py-3 rounded-lg text-sm flex items-start gap-3"
              style={{ background: bg, border, color, cursor: answered ? "default" : "pointer" }}>
              <span className="font-semibold flex-shrink-0">{String.fromCharCode(65 + i)}</span>
              <span>{choice}</span>
              {answered && isAnswer && <span className="ml-auto">✓</span>}
              {answered && isPicked && !isAnswer && <span className="ml-auto">✕</span>}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="rounded-lg p-4 mb-4 animate-in" style={{ background: "var(--bg-card)", border: `0.5px solid ${correct ? "var(--ats-green)" : "var(--ats-red)"}` }}>
          <div className="text-sm font-semibold mb-1.5" style={{ color: correct ? "var(--ats-green)" : "var(--ats-red)" }}>
            {correct ? "Hit! The boss takes damage." : picked === null ? "Time's up — the boss strikes!" : "Missed — you lose a heart."}
          </div>
          <p className="text-sm" style={{ color: "var(--text-primary)", lineHeight: 1.6, opacity: 0.92 }}>{q.explanation}</p>
        </div>
      )}

      <button className="btn-primary w-full" disabled={!answered} onClick={next}>
        {hearts <= 0 ? "The boss wins…" : idx + 1 >= questions.length ? "Finish battle" : "Next →"}
      </button>
    </div>
  );
}

function Result({ exam, boss, result, onRetry }: { exam: string; boss: ReturnType<typeof getBoss>; result: BossResult; onRetry: () => void }) {
  return (
    <div className="px-8 py-8 max-w-2xl mx-auto">
      <div className="card p-8 text-center mb-6" style={{ borderColor: result.passed ? "var(--ats-green)" : "var(--ats-red)" }}>
        <div className="text-6xl mb-2">{result.passed ? "🏆" : boss.emoji}</div>
        <h2 className="text-xl font-medium mb-1" style={{ color: result.passed ? "var(--ats-green)" : "var(--text-primary)" }}>
          {result.passed ? `${boss.name} defeated!` : `${boss.name} wins`}
        </h2>
        <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
          You scored {result.pct}% ({result.correct}/{result.total})
        </p>
        {!result.passed && (
          <p className="text-sm" style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>&ldquo;{boss.defeatTaunt}&rdquo;</p>
        )}
        {result.passed && (
          <div className="text-xs inline-flex items-center gap-1 px-3 py-1 rounded-full mt-1" style={{ background: "var(--ats-green-bg)", color: "var(--ats-green)" }}>
            +45 XP · trophy earned · exam-ready
          </div>
        )}
      </div>

      {result.weakTopics.length > 0 && (
        <>
          <h3 className="text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
            {result.passed ? "Still worth shoring up" : "Train these before the rematch"}
          </h3>
          <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>Your weakest topics in this battle, weakest first.</p>
          <div className="space-y-2 mb-6">
            {result.weakTopics.map((t) => (
              <div key={t.topicId} className="card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{t.topicName}</span>
                  <span className="text-xs font-medium" style={{ color: "var(--ats-red)" }}>{t.correct}/{t.total} · {t.pct}%</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link href="/learn" className="text-xs font-medium" style={{ color: "var(--primary)" }}>Re-read lesson</Link>
                  <Link href="/flashcards" className="text-xs font-medium" style={{ color: "var(--primary)" }}>Flashcards</Link>
                  <Link href={`/practice?exam=${exam}&topic=${t.topicId}`} className="text-xs font-medium" style={{ color: "var(--primary)" }}>Drill questions</Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="flex items-center gap-3">
        <button className="btn-primary flex-1" onClick={onRetry}>{result.passed ? "Battle again" : "Rematch"}</button>
        <Link href="/skilltree" className="btn-secondary flex-1 text-center">View skill tree</Link>
      </div>
    </div>
  );
}

function Spec({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-lg">{icon}</div>
      <div className="text-[11px]" style={{ color: "var(--text-secondary)" }}>{label}</div>
    </div>
  );
}
