"use client";

// ============================================================
// Certus — Mock Exam (CFA Level I replica)
// The "proper" exam room: a faithful reproduction of the real
// computer-based testing experience. Deliberately formal — no
// XP, streaks, hearts, or bosses anywhere in this flow.
//
// Two modes:
//   quick — 15 blueprint-weighted questions → rough readiness read
//   full  — 2 sessions × 90 questions × 2h15m, optional break
// ============================================================

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { Question } from "@/content/types";
import {
  MOCK_QUICK,
  MOCK_SESSION_1,
  MOCK_SESSION_2,
  FULL_MOCK_READY,
} from "@/content/cfa-mock";
import {
  sessionSeconds,
  scoreMock,
  saveAttempt,
  saveProgress,
  loadProgress,
  clearProgress,
  MockScore,
  MockProgress,
} from "@/lib/mockExam";

type Mode = "quick" | "full";
type Phase =
  | "home"
  | "instructions" // pre-session briefing
  | "exam" // a session in progress
  | "review" // end-of-session review screen
  | "break" // between full-mock sessions
  | "result";

interface SessionState {
  answers: (number | null)[];
  flagged: boolean[];
  strikes: number[][]; // per-question array of struck choice indexes
}

const emptySession = (n: number): SessionState => ({
  answers: Array(n).fill(null),
  flagged: Array(n).fill(false),
  strikes: Array.from({ length: n }, () => []),
});

export default function MockClient() {
  const [mode, setMode] = useState<Mode>("quick");
  const [phase, setPhase] = useState<Phase>("home");
  const [sessionIdx, setSessionIdx] = useState(0); // 0 or 1 (full mock)
  const [sessions, setSessions] = useState<SessionState[]>([]);
  const [score, setScore] = useState<MockScore | null>(null);
  const [showCta, setShowCta] = useState(false); // post-quick popup
  const [finalAnswers, setFinalAnswers] = useState<(number | null)[]>([]);
  // Resume support: restores question position + clock after a refresh.
  const [resumeInit, setResumeInit] = useState<{ idx: number; seconds: number } | null>(null);
  const [saved, setSaved] = useState<MockProgress | null>(null);

  useEffect(() => {
    if (phase === "home") setSaved(loadProgress());
  }, [phase]);

  const sessionQuestions: Question[][] = useMemo(
    () =>
      mode === "quick" ? [MOCK_QUICK] : [MOCK_SESSION_1, MOCK_SESSION_2],
    [mode]
  );
  const questions = sessionQuestions[sessionIdx] ?? [];

  const begin = useCallback((m: Mode) => {
    clearProgress();
    setMode(m);
    setSessionIdx(0);
    setSessions(
      m === "quick"
        ? [emptySession(MOCK_QUICK.length)]
        : [emptySession(MOCK_SESSION_1.length), emptySession(MOCK_SESSION_2.length)]
    );
    setScore(null);
    setShowCta(false);
    setResumeInit(null);
    setPhase("instructions");
    posthog.capture("mock_started", { mode: m });
  }, []);

  const resumeSaved = useCallback(() => {
    const p = loadProgress();
    if (!p) return;
    setMode(p.mode);
    setSessionIdx(p.sessionIdx);
    setSessions(p.sessions);
    setScore(null);
    setShowCta(false);
    setResumeInit({ idx: p.idx, seconds: Math.max(p.timeLeft, 30) });
    setPhase("exam");
    posthog.capture("mock_resumed", { mode: p.mode, session: p.sessionIdx + 1 });
  }, []);

  const submitSession = useCallback(
    (state: SessionState) => {
      const updated = [...sessions];
      updated[sessionIdx] = state;
      setSessions(updated);

      const isLast = sessionIdx >= sessionQuestions.length - 1;
      if (!isLast) {
        // Session 1 locked in — persist so a closed tab resumes at Session 2.
        saveProgress({
          mode,
          sessionIdx: 1,
          sessions: updated,
          idx: 0,
          timeLeft: sessionSeconds(sessionQuestions[1]?.length ?? 0),
          savedAt: new Date().toISOString(),
        });
        setResumeInit(null);
        setPhase("break");
        return;
      }
      // Final scoring across every session.
      clearProgress();
      const allQs = sessionQuestions.flat();
      const allAnswers = updated.flatMap((s) => s.answers);
      const s = scoreMock(allQs, allAnswers);
      setScore(s);
      setFinalAnswers(allAnswers);
      saveAttempt({
        date: new Date().toISOString(),
        mode,
        correct: s.correct,
        total: s.total,
        pct: s.pct,
        oddsMid: s.readiness.oddsMid,
        byTopic: s.byTopic.map((t) => ({ topicId: t.topicId, pct: t.pct })),
      });
      posthog.capture("mock_completed", {
        mode,
        score_pct: s.pct,
        correct: s.correct,
        total: s.total,
        answered: s.answered,
        odds_mid: s.readiness.oddsMid,
        readiness_band: s.readiness.band,
      });
      setPhase("result");
      if (mode === "quick") setTimeout(() => setShowCta(true), 1600);
    },
    [sessions, sessionIdx, sessionQuestions, mode]
  );

  if (phase === "instructions") {
    return (
      <Instructions
        mode={mode}
        sessionIdx={sessionIdx}
        count={questions.length}
        onBegin={() => setPhase("exam")}
        onCancel={() => setPhase("home")}
      />
    );
  }

  if (phase === "exam" && questions.length > 0) {
    return (
      <ExamRoom
        key={`${mode}-${sessionIdx}`}
        mode={mode}
        sessionIdx={sessionIdx}
        sessionCount={sessionQuestions.length}
        questions={questions}
        initial={sessions[sessionIdx]}
        allSessions={sessions}
        initialIdx={resumeInit?.idx ?? 0}
        initialSeconds={resumeInit?.seconds ?? sessionSeconds(questions.length)}
        onSubmit={submitSession}
      />
    );
  }

  if (phase === "break") {
    return (
      <Break
        onContinue={() => {
          setSessionIdx(1);
          setPhase("instructions");
        }}
      />
    );
  }

  if (phase === "result" && score) {
    return (
      <>
        <ResultReport
          mode={mode}
          score={score}
          questions={sessionQuestions.flat()}
          answers={finalAnswers}
          onRetake={() => setPhase("home")}
          onFullMock={() => begin("full")}
        />
        {showCta && mode === "quick" && (
          <QuickCta
            score={score}
            onClose={() => setShowCta(false)}
            onFullMock={() => {
              setShowCta(false);
              begin("full");
            }}
          />
        )}
      </>
    );
  }

  // ---- home ----
  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      <div
        className="text-[10px] font-semibold uppercase tracking-widest mb-1"
        style={{ color: "var(--text-muted)" }}
      >
        Examination center
      </div>
      <h1 className="font-display text-3xl mb-1" style={{ color: "var(--text-primary)" }}>
        CFA Level I Mock Exam
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        A faithful replica of the real exam — same length, timing, pacing, and
        question style. No games in this room: sit it under exam conditions and
        get an honest read on where you stand.
      </p>

      {/* Resume an interrupted sitting */}
      {saved && (
        <div className="card p-5 mb-4" style={{ borderLeft: "3px solid var(--primary)" }}>
          <div className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
            Exam in progress
          </div>
          <p className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
            {saved.mode === "quick" ? "Readiness check" : `Full mock — Session ${saved.sessionIdx + 1} of 2`} ·
            question {saved.idx + 1} · {Math.floor(saved.timeLeft / 60)} min remaining. Your answers
            and clock were saved automatically.
          </p>
          <div className="flex gap-3">
            <button className="btn-primary flex-1" onClick={resumeSaved}>
              Resume where I left off
            </button>
            <button
              className="btn-secondary flex-1"
              onClick={() => {
                clearProgress();
                setSaved(null);
              }}
            >
              Discard attempt
            </button>
          </div>
        </div>
      )}

      {/* Quick assessment */}
      <div className="card p-6 mb-4">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <div className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
              Readiness check
            </div>
            <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              15 questions · 22 min 30 sec · exam pacing
            </div>
          </div>
          <span
            className="text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded"
            style={{ background: "var(--primary-light)", color: "var(--primary)" }}
          >
            Free
          </span>
        </div>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          Fifteen blueprint-weighted questions at the real exam&apos;s 90-seconds-per-question
          pace. You&apos;ll get a first estimate of your odds of passing — rough by design,
          because fifteen questions can only tell you so much.
        </p>
        <button className="btn-primary w-full" onClick={() => begin("quick")}>
          Begin readiness check
        </button>
      </div>

      {/* Full mock */}
      <div className="card p-6 mb-5">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <div className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
              Full mock examination
            </div>
            <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              180 questions · two 2 h 15 m sessions · optional break
            </div>
          </div>
          <span
            className="text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded"
            style={{ background: "var(--primary-light)", color: "var(--primary)" }}
          >
            Free
          </span>
        </div>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          The complete Level I experience: 90 questions per session, three answer
          choices, flag-and-review navigation, and a formal per-topic score report
          with a calibrated readiness estimate at the end.
        </p>
        {FULL_MOCK_READY ? (
          <button className="btn-primary w-full" onClick={() => begin("full")}>
            Begin full mock — Session 1 of 2
          </button>
        ) : (
          <button
            className="w-full text-sm py-2.5 rounded-lg font-medium"
            disabled
            style={{
              background: "var(--bg)",
              color: "var(--text-muted)",
              border: "0.5px solid var(--border)",
              cursor: "not-allowed",
            }}
          >
            Question bank in final review — opening shortly
          </button>
        )}
      </div>

      <div
        className="rounded-lg p-4 text-xs"
        style={{ background: "var(--bg-card)", border: "0.5px solid var(--border)", color: "var(--text-muted)", lineHeight: 1.6 }}
      >
        <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>
          How the estimate works.
        </span>{" "}
        CFA Institute never publishes the minimum passing score; released results
        suggest it has historically fallen around 60–70% of questions. We compare
        your score against that range statistically and report your odds as a
        band, not a promise. Approved calculators (TI BA II Plus, HP 12C) are
        allowed, exactly as on exam day.
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// Pre-session instructions — mirrors the real testing-center brief
// ---------------------------------------------------------------
function Instructions({
  mode,
  sessionIdx,
  count,
  onBegin,
  onCancel,
}: {
  mode: Mode;
  sessionIdx: number;
  count: number;
  onBegin: () => void;
  onCancel: () => void;
}) {
  const mins = Math.round(sessionSeconds(count) / 60);
  return (
    <div className="px-4 py-6 md:px-8 md:py-10 max-w-xl mx-auto">
      <div className="card p-6">
        <div
          className="text-[10px] font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--text-muted)" }}
        >
          {mode === "quick"
            ? "Readiness check · instructions"
            : `Session ${sessionIdx + 1} of 2 · instructions`}
        </div>
        <h2 className="font-display text-xl mb-4" style={{ color: "var(--text-primary)" }}>
          Read before you begin
        </h2>
        <ul className="space-y-2.5 text-sm mb-6" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          <li>• {count} multiple-choice questions, three answer choices each.</li>
          <li>
            • You have <strong style={{ color: "var(--text-primary)" }}>{mins} minutes</strong> —
            an average of 90 seconds per question. The exam submits automatically
            when time expires.
          </li>
          <li>• Navigate freely: move back and forth, flag questions, and change answers any time before submitting.</li>
          <li>• Click a choice to select it. Use the small ✕ to strike through choices you&apos;ve eliminated.</li>
          <li>• Your answers and the clock save automatically — if the tab closes, you can resume where you left off.</li>
          <li>• An approved calculator (TI BA II Plus or HP 12C) is permitted.</li>
          {mode === "full" && sessionIdx === 0 && (
            <li>• After this session you may take an optional break before Session 2.</li>
          )}
        </ul>
        <div className="flex gap-3">
          <button className="btn-secondary flex-1" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn-primary flex-1" onClick={onBegin}>
            Start the clock
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// The exam room — timer, palette, flagging, strikethrough
// ---------------------------------------------------------------
function ExamRoom({
  mode,
  sessionIdx,
  sessionCount,
  questions,
  initial,
  allSessions,
  initialIdx,
  initialSeconds,
  onSubmit,
}: {
  mode: Mode;
  sessionIdx: number;
  sessionCount: number;
  questions: Question[];
  initial: SessionState;
  allSessions: SessionState[];
  initialIdx: number;
  initialSeconds: number;
  onSubmit: (s: SessionState) => void;
}) {
  const n = questions.length;
  const [idx, setIdx] = useState(Math.min(initialIdx, n - 1));
  const [answers, setAnswers] = useState<(number | null)[]>(initial.answers);
  const [flagged, setFlagged] = useState<boolean[]>(initial.flagged);
  const [strikes, setStrikes] = useState<number[][]>(initial.strikes);
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const submittedRef = useRef(false);

  const stateRef = useRef<SessionState>({ answers, flagged, strikes });
  stateRef.current = { answers, flagged, strikes };
  const timeRef = useRef(timeLeft);
  timeRef.current = timeLeft;

  const submit = useCallback(() => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    onSubmit(stateRef.current);
  }, [onSubmit]);

  // Session countdown — one clock for the whole session, like the real exam.
  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          submit();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [submit]);

  // Autosave: every answer/flag/strike/navigation change, and every 15 s of
  // clock, so a refresh or crash costs nothing.
  const timeBucket = Math.floor(timeLeft / 15);
  useEffect(() => {
    if (submittedRef.current) return;
    const merged = allSessions.map((s, i) => (i === sessionIdx ? stateRef.current : s));
    saveProgress({
      mode,
      sessionIdx,
      sessions: merged,
      idx,
      timeLeft: timeRef.current,
      savedAt: new Date().toISOString(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, flagged, strikes, idx, timeBucket]);

  // Warn before closing/leaving the tab mid-exam.
  useEffect(() => {
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, []);

  const q = questions[idx];
  const answeredCount = answers.filter((a) => a !== null).length;
  const urgent = timeLeft <= 300; // final five minutes

  function pick(i: number) {
    const next = [...answers];
    next[idx] = next[idx] === i ? null : i;
    setAnswers(next);
    // Picking a choice clears any strike on it.
    if (strikes[idx]?.includes(i)) toggleStrike(i);
  }

  function toggleStrike(i: number) {
    const next = strikes.map((s) => [...s]);
    const cur = next[idx];
    next[idx] = cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i];
    setStrikes(next);
  }

  function toggleFlag() {
    const next = [...flagged];
    next[idx] = !next[idx];
    setFlagged(next);
  }

  const hhmmss = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return (h > 0 ? `${h}:` : "") + `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className="px-4 py-4 md:px-8 max-w-3xl mx-auto">
      {/* Testing-center header bar */}
      <div
        className="flex items-center justify-between rounded-lg px-4 py-2.5 mb-5"
        style={{ background: "var(--bg-card)", border: "0.5px solid var(--border)" }}
      >
        <div className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
          CFA Level I Mock
          {mode === "full" && (
            <span style={{ color: "var(--text-muted)" }}> · Session {sessionIdx + 1} of {sessionCount}</span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            {answeredCount}/{n} answered
          </span>
          <span
            className="text-sm font-mono font-bold tabular-nums"
            style={{ color: urgent ? "var(--ats-red)" : "var(--text-primary)" }}
            title="Time remaining"
          >
            {hhmmss(timeLeft)}
          </span>
        </div>
      </div>

      {/* Question header row */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
          Question {idx + 1} of {n}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFlag}
            className="text-xs px-2.5 py-1 rounded-md font-medium transition-colors"
            style={{
              background: flagged[idx] ? "var(--gold-bg)" : "transparent",
              border: `0.5px solid ${flagged[idx] ? "var(--gold-border)" : "var(--border)"}`,
              color: flagged[idx] ? "var(--gold)" : "var(--text-muted)",
            }}
          >
            ⚑ {flagged[idx] ? "Flagged" : "Flag for review"}
          </button>
          <button
            onClick={() => setPaletteOpen(true)}
            className="text-xs px-2.5 py-1 rounded-md font-medium"
            style={{ border: "0.5px solid var(--border)", color: "var(--text-muted)" }}
          >
            Navigator
          </button>
        </div>
      </div>

      {/* Stem */}
      <p className="text-base mb-5" style={{ color: "var(--text-primary)", lineHeight: 1.6 }}>
        {q.stem}
      </p>

      {/* Choices — neutral during the exam (no right/wrong feedback) */}
      <div className="space-y-2.5 mb-6">
        {q.choices.map((choice, i) => {
          const selected = answers[idx] === i;
          const struck = strikes[idx]?.includes(i);
          return (
            <div key={i} className="flex items-stretch gap-2">
              <button
                onClick={() => pick(i)}
                className="flex-1 text-left px-4 py-3 rounded-lg text-sm flex items-start gap-3 transition-all"
                style={{
                  background: selected ? "var(--primary-light)" : "var(--bg-card)",
                  border: `0.5px solid ${selected ? "var(--primary)" : "var(--border-strong)"}`,
                  color: struck ? "var(--text-muted)" : "var(--text-primary)",
                  textDecoration: struck ? "line-through" : "none",
                  opacity: struck ? 0.55 : 1,
                }}
              >
                <span className="font-semibold flex-shrink-0" style={{ color: selected ? "var(--primary)" : undefined }}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{choice}</span>
              </button>
              <button
                onClick={() => toggleStrike(i)}
                title={struck ? "Remove strikethrough" : "Strike through this choice"}
                className="px-2.5 rounded-lg text-xs"
                style={{
                  border: "0.5px solid var(--border)",
                  color: struck ? "var(--ats-red)" : "var(--text-muted)",
                  background: "var(--bg-card)",
                }}
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-3">
        <button
          className="btn-secondary flex-1"
          disabled={idx === 0}
          style={{ opacity: idx === 0 ? 0.5 : 1 }}
          onClick={() => setIdx(idx - 1)}
        >
          ← Previous
        </button>
        {idx + 1 < n ? (
          <button className="btn-primary flex-1" onClick={() => setIdx(idx + 1)}>
            Next →
          </button>
        ) : (
          <button className="btn-primary flex-1" onClick={() => setConfirmOpen(true)}>
            End session…
          </button>
        )}
      </div>
      <div className="text-center mt-3">
        <button
          onClick={() => setConfirmOpen(true)}
          className="text-xs hover:underline"
          style={{ color: "var(--text-muted)" }}
        >
          End session and review answers
        </button>
      </div>

      {/* Navigator palette */}
      {paletteOpen && (
        <Overlay onClose={() => setPaletteOpen(false)}>
          <div className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
            Question navigator
          </div>
          <div className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
            {answeredCount} answered · {flagged.filter(Boolean).length} flagged · {n - answeredCount} unanswered
          </div>
          <div className="grid grid-cols-9 sm:grid-cols-10 gap-1.5 mb-4">
            {questions.map((_, i) => {
              const isCur = i === idx;
              const done = answers[i] !== null;
              const flag = flagged[i];
              return (
                <button
                  key={i}
                  onClick={() => {
                    setIdx(i);
                    setPaletteOpen(false);
                  }}
                  className="text-[11px] font-mono rounded py-1.5 relative"
                  style={{
                    background: isCur ? "var(--primary)" : done ? "var(--primary-light)" : "var(--bg)",
                    color: isCur ? "#fff" : done ? "var(--primary)" : "var(--text-muted)",
                    border: `1px solid ${flag ? "var(--gold)" : isCur ? "var(--primary)" : "var(--border)"}`,
                  }}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-4 text-[10px]" style={{ color: "var(--text-muted)" }}>
            <span><span style={{ color: "var(--primary)" }}>■</span> answered</span>
            <span><span style={{ color: "var(--gold)" }}>□</span> flagged</span>
            <span>□ unanswered</span>
          </div>
        </Overlay>
      )}

      {/* Submit confirmation */}
      {confirmOpen && (
        <Overlay onClose={() => setConfirmOpen(false)}>
          <div className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
            Submit this session?
          </div>
          <p className="text-sm mb-1" style={{ color: "var(--text-secondary)" }}>
            You have answered {answeredCount} of {n} questions.
          </p>
          {answeredCount < n && (
            <p className="text-sm mb-1" style={{ color: "var(--ats-red)" }}>
              {n - answeredCount} unanswered — unanswered questions score as incorrect.
            </p>
          )}
          {flagged.filter(Boolean).length > 0 && (
            <p className="text-sm" style={{ color: "var(--gold)" }}>
              {flagged.filter(Boolean).length} still flagged for review.
            </p>
          )}
          <p className="text-xs mt-2 mb-4" style={{ color: "var(--text-muted)" }}>
            There is no going back after submission — exactly like the real thing.
          </p>
          <div className="flex gap-3">
            <button className="btn-secondary flex-1" onClick={() => setConfirmOpen(false)}>
              Keep working
            </button>
            <button className="btn-primary flex-1" onClick={submit}>
              Submit session
            </button>
          </div>
        </Overlay>
      )}
    </div>
  );
}

// ---------------------------------------------------------------
// Between sessions
// ---------------------------------------------------------------
function Break({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="px-4 py-10 md:px-8 max-w-xl mx-auto text-center">
      <div className="card p-8">
        <div className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
          Session 1 complete
        </div>
        <h2 className="font-display text-2xl mb-2" style={{ color: "var(--text-primary)" }}>
          Optional break
        </h2>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          On exam day you get a scheduled break between sessions — stand up,
          stretch, drink some water. Your Session 1 answers are locked in.
          Results are reported only after both sessions are complete.
        </p>
        <button className="btn-primary w-full" onClick={onContinue}>
          Begin Session 2 of 2
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// Result report — formal, modeled on the real score report
// ---------------------------------------------------------------
function ResultReport({
  mode,
  score,
  questions,
  answers,
  onRetake,
  onFullMock,
}: {
  mode: Mode;
  score: MockScore;
  questions: Question[];
  answers: (number | null)[];
  onRetake: () => void;
  onFullMock: () => void;
}) {
  const r = score.readiness;
  const [showAllReview, setShowAllReview] = useState(false);
  const missedCount = questions.filter((q, i) => answers[i] !== q.answerIndex).length;
  const bandColor =
    r.band === "on-track"
      ? "var(--ats-green)"
      : r.band === "borderline"
      ? "var(--gold)"
      : "var(--ats-red)";

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      <div className="card mb-5" style={{ overflow: "hidden" }}>
        <div
          className="px-6 py-4"
          style={{ borderBottom: "0.5px solid var(--border)", background: "var(--bg)" }}
        >
          <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Examination result report
          </div>
          <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            CFA Level I Mock — {mode === "quick" ? "Readiness check (15 questions)" : "Full examination (180 questions)"}
          </div>
        </div>

        <div className="p-6 text-center">
          <div className="font-display" style={{ fontSize: "3.2rem", color: "var(--text-primary)", lineHeight: 1 }}>
            {score.pct}%
          </div>
          <p className="text-sm mt-1.5" style={{ color: "var(--text-secondary)" }}>
            {score.correct} of {score.total} correct · {score.answered} answered
          </p>

          <div
            className="inline-block mt-4 px-4 py-2 rounded-lg"
            style={{ border: `1.5px solid ${bandColor}` }}
          >
            <div className="text-sm font-semibold" style={{ color: bandColor }}>
              {r.bandLabel}
            </div>
            <div className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
              Estimated odds of passing today:{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                {r.oddsLow}–{r.oddsHigh}%
              </strong>
            </div>
          </div>
          <p className="text-xs mt-3 max-w-md mx-auto" style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>
            {r.note}
          </p>
        </div>
      </div>

      {/* Per-topic performance — the real report's signature table */}
      <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
        Performance by topic
      </h3>
      <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
        Weakest first. The dashed line marks 70% — comfortably above the historical passing range.
      </p>
      <div className="card divide-y mb-6" style={{ borderColor: "var(--border)" }}>
        {score.byTopic.map((t) => (
          <div key={t.topicId} className="px-4 py-3" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm" style={{ color: "var(--text-primary)" }}>{t.topicName}</span>
              <span
                className="text-xs font-mono font-semibold"
                style={{ color: t.pct >= 70 ? "var(--ats-green)" : t.pct >= 50 ? "var(--gold)" : "var(--ats-red)" }}
              >
                {t.correct}/{t.total} · {t.pct}%
              </span>
            </div>
            <div style={{ position: "relative", height: 6, borderRadius: 3, background: "var(--bg)" }}>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: `${t.pct}%`,
                  borderRadius: 3,
                  background: t.pct >= 70 ? "var(--ats-green)" : t.pct >= 50 ? "var(--gold)" : "var(--ats-red)",
                  transition: "width 0.6s",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "70%",
                  top: -2,
                  bottom: -2,
                  borderLeft: "1.5px dashed var(--text-muted)",
                  opacity: 0.6,
                }}
              />
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Link href={`/learn?exam=cfa&topic=${t.topicId}`} className="text-xs font-medium hover:underline" style={{ color: "var(--primary)" }}>
                Re-read lesson
              </Link>
              <Link href={`/practice?exam=cfa&topic=${t.topicId}`} className="text-xs font-medium hover:underline" style={{ color: "var(--primary)" }}>
                Drill questions
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Question-by-question review — learn from every miss */}
      {questions.length > 0 && answers.length > 0 && (
        <>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              Answer review
            </h3>
            {missedCount > 0 && (
              <button
                onClick={() => setShowAllReview(!showAllReview)}
                className="text-xs font-medium hover:underline"
                style={{ color: "var(--primary)" }}
              >
                {showAllReview ? `Show missed only (${missedCount})` : `Show all ${questions.length}`}
              </button>
            )}
          </div>
          <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
            {missedCount === 0
              ? "A perfect sitting — every explanation below is a victory lap."
              : "Every question you missed, with the full reasoning. Open each to see why the right answer is right and the tempting ones aren't."}
          </p>
          <div className="space-y-2 mb-6">
            {questions.map((q, i) => {
              const a = answers[i] ?? null;
              const correct = a === q.answerIndex;
              if (correct && !showAllReview) return null;
              return (
                <details key={q.id} className="card-i" style={{ overflow: "hidden" }}>
                  <summary
                    className="px-4 py-3 text-sm flex items-center gap-3"
                    style={{ cursor: "pointer", color: "var(--text-primary)", listStyle: "none" }}
                  >
                    <span
                      className="text-[10px] font-bold flex-shrink-0 rounded px-1.5 py-0.5"
                      style={{
                        background: correct ? "var(--ats-green-bg)" : "var(--ats-red-bg)",
                        color: correct ? "var(--ats-green)" : "var(--ats-red)",
                      }}
                    >
                      {correct ? "✓" : a === null ? "—" : "✕"}
                    </span>
                    <span className="text-xs font-mono flex-shrink-0" style={{ color: "var(--text-muted)" }}>
                      Q{i + 1}
                    </span>
                    <span className="truncate text-xs" style={{ color: "var(--text-secondary)" }}>
                      {q.topicName}
                    </span>
                  </summary>
                  <div className="px-4 pb-4">
                    <p className="text-sm mb-3" style={{ color: "var(--text-primary)", lineHeight: 1.6 }}>
                      {q.stem}
                    </p>
                    <div className="space-y-1.5 mb-3">
                      {q.choices.map((c, ci) => {
                        const isAnswer = ci === q.answerIndex;
                        const isPicked = ci === a;
                        return (
                          <div
                            key={ci}
                            className="px-3 py-2 rounded-md text-xs flex items-start gap-2"
                            style={{
                              background: isAnswer ? "var(--ats-green-bg)" : isPicked ? "var(--ats-red-bg)" : "var(--bg)",
                              color: isAnswer ? "var(--ats-green)" : isPicked ? "var(--ats-red)" : "var(--text-secondary)",
                              border: `0.5px solid ${isAnswer ? "var(--ats-green)" : isPicked ? "var(--ats-red)" : "var(--border)"}`,
                            }}
                          >
                            <span className="font-semibold flex-shrink-0">{String.fromCharCode(65 + ci)}</span>
                            <span>{c}</span>
                            {isAnswer && <span className="ml-auto flex-shrink-0 font-semibold">correct</span>}
                            {isPicked && !isAnswer && <span className="ml-auto flex-shrink-0 font-semibold">your pick</span>}
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {q.explanation}
                    </p>
                    <div className="mt-2.5">
                      <Link
                        href={`/learn?exam=cfa&topic=${q.topicId}`}
                        className="text-xs font-medium hover:underline"
                        style={{ color: "var(--primary)" }}
                      >
                        Re-read this topic →
                      </Link>
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
        </>
      )}

      <div className="flex items-center gap-3">
        <button className="btn-secondary flex-1" onClick={onRetake}>
          Back to exam center
        </button>
        {mode === "quick" && FULL_MOCK_READY && (
          <button className="btn-primary flex-1" onClick={onFullMock}>
            Sit the full mock
          </button>
        )}
        {mode === "full" && (
          <Link href="/practice?exam=cfa" className="btn-primary flex-1 text-center">
            Train weak topics
          </Link>
        )}
      </div>

      <p className="text-[11px] text-center mt-5" style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>
        Certus readiness estimates are statistical projections from your mock
        performance. They are not affiliated with, endorsed by, or a guarantee of
        results on any examination administered by CFA Institute.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------
// Post-quick popup — "now test it for real"
// ---------------------------------------------------------------
function QuickCta({
  score,
  onClose,
  onFullMock,
}: {
  score: MockScore;
  onClose: () => void;
  onFullMock: () => void;
}) {
  return (
    <Overlay onClose={onClose}>
      <div className="text-center">
        <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
          That was 15 questions
        </div>
        <div className="font-display text-xl mb-2" style={{ color: "var(--text-primary)" }}>
          Want to test it for real?
        </div>
        <p className="text-sm mb-5" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          A 15-question sample carries wide error bars. The full mock — 180
          questions across two timed sessions, exactly like exam day — narrows
          your estimate from a rough read to a serious one.
        </p>
        {FULL_MOCK_READY ? (
          <button className="btn-primary w-full mb-2" onClick={onFullMock}>
            Sit the full mock exam
          </button>
        ) : (
          <div
            className="w-full text-sm py-2.5 rounded-lg mb-2 font-medium"
            style={{ background: "var(--bg)", color: "var(--text-muted)", border: "0.5px solid var(--border)" }}
          >
            Full mock opening shortly — check back soon
          </div>
        )}
        <button onClick={onClose} className="text-xs hover:underline" style={{ color: "var(--text-muted)" }}>
          Not yet — back to my report
        </button>
      </div>
    </Overlay>
  );
}

// ---------------------------------------------------------------
// Shared modal overlay
// ---------------------------------------------------------------
function Overlay({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(13,13,20,0.55)" }}
      onClick={onClose}
    >
      <div
        className="card p-6 w-full max-w-md max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
