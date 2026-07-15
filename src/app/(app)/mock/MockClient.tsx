"use client";

// ============================================================
// Certus — Mock Exam Center (CFA Levels I, II, III)
// Faithful replicas of the real computer-based exams.
// Deliberately formal — no XP, streaks, hearts, or bosses.
//
//   Level I   — 180 standalone MCQs, 2 × 2h15m (90 s/question)
//   Level II  — vignette item sets, 4 Qs each (3 min/question)
//   Level III — item sets + constructed-response essays,
//               self-graded against guideline answers
//               (Portfolio Management pathway first)
// ============================================================

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { useSignedIn } from "@/lib/AccessContext";
import { useAccess } from "@/lib/useAccess";
import { Question } from "@/content/types";
import {
  MOCK_QUICK,
  MOCK_SESSION_1,
  MOCK_SESSION_2,
  FULL_MOCK_READY,
} from "@/content/cfa-mock";
import { L2_QUICK, L2_SESSION_1, L2_SESSION_2, L2_FULL_READY } from "@/content/cfa-l2-mock";
import {
  L3_QUICK_SETS,
  L3_QUICK_ESSAYS,
  L3_SESSION_SETS_1,
  L3_SESSION_ESSAYS_1,
  L3_SESSION_SETS_2,
  L3_SESSION_ESSAYS_2,
  L3_FULL_READY,
} from "@/content/cfa-l3-mock";
import {
  SECONDS_PER_QUESTION,
  SECONDS_PER_VIGNETTE_QUESTION,
  SECONDS_PER_ESSAY_POINT,
  scoreMock,
  estimateReadiness,
  saveAttempt,
  saveProgress,
  loadProgress,
  clearProgress,
  essayTotalPoints,
  MockScore,
  MockProgress,
  ItemSet,
  Essay,
  TopicScore,
} from "@/lib/mockExam";

type ExamSlug = "cfa" | "cfa-l2" | "cfa-l3";
type Mode = "quick" | "full";
type Phase = "home" | "instructions" | "exam" | "break" | "grade" | "result";

// ---- Exam registry ---------------------------------------------
interface RunSession {
  questions: Question[]; // flattened MCQs
  setForQ: (ItemSet | null)[]; // vignette context per question (null = standalone)
  essays: Essay[];
  seconds: number;
}

function fromSets(sets: ItemSet[], essays: Essay[]): RunSession {
  const questions = sets.flatMap((s) => s.questions);
  const setForQ = sets.flatMap((s) => s.questions.map(() => s));
  return {
    questions,
    setForQ,
    essays,
    seconds:
      questions.length * SECONDS_PER_VIGNETTE_QUESTION +
      essayTotalPoints(essays) * SECONDS_PER_ESSAY_POINT,
  };
}

function fromFlat(questions: Question[]): RunSession {
  return {
    questions,
    setForQ: questions.map(() => null),
    essays: [],
    seconds: questions.length * SECONDS_PER_QUESTION,
  };
}

const EXAM_DEFS: Record<
  ExamSlug,
  {
    name: string;
    quickTitle: string;
    quickSpec: string;
    quickBlurb: string;
    fullTitle: string;
    fullSpec: string;
    fullBlurb: string;
    fullReady: boolean;
    quick: () => RunSession[];
    full: () => RunSession[];
  }
> = {
  cfa: {
    name: "Level I",
    quickTitle: "Readiness check",
    quickSpec: "15 questions · 22 min 30 sec · exam pacing",
    quickBlurb:
      "Fifteen blueprint-weighted questions at the real exam's 90-seconds-per-question pace. A first estimate of your odds — rough by design, because fifteen questions can only tell you so much.",
    fullTitle: "Full mock examination",
    fullSpec: "180 questions · two 2 h 15 m sessions · optional break",
    fullBlurb:
      "The complete Level I experience: 90 questions per session, three answer choices, blueprint topic weights, flag-and-review navigation, and a formal per-topic score report with a readiness estimate.",
    fullReady: FULL_MOCK_READY,
    quick: () => [fromFlat(MOCK_QUICK)],
    full: () => [fromFlat(MOCK_SESSION_1), fromFlat(MOCK_SESSION_2)],
  },
  "cfa-l2": {
    name: "Level II",
    quickTitle: "Readiness check",
    quickSpec: "3 item sets · 12 questions · 36 min",
    quickBlurb:
      "Three full vignette item sets — case scenario, exhibits, then four questions each — at the real exam's 3-minutes-per-question pace. The format shift from Level I is what surprises candidates; feel it here first.",
    fullTitle: "Full mock examination",
    fullSpec: "22 item sets · 88 questions · two 2 h 12 m sessions",
    fullBlurb:
      "The complete Level II experience: 11 item sets per session, every question anchored to a case with exhibits, and a formal per-topic report at the end.",
    fullReady: L2_FULL_READY,
    quick: () => [fromSets(L2_QUICK, [])],
    full: () => [fromSets(L2_SESSION_1, []), fromSets(L2_SESSION_2, [])],
  },
  "cfa-l3": {
    name: "Level III",
    quickTitle: "Readiness check",
    quickSpec: "2 item sets + 1 essay · 48 min · PM pathway",
    quickBlurb:
      "Two vignette item sets plus a constructed-response essay, graded against guideline answers with a point rubric — the Level III format most candidates have never practiced under a clock. Portfolio Management pathway.",
    fullTitle: "Full mock examination",
    fullSpec: "Item sets + essays · two 2 h 12 m sessions",
    fullBlurb:
      "The complete Level III experience: mixed item sets and constructed-response questions in both sessions, with structured self-grading against guideline answers.",
    fullReady: L3_FULL_READY,
    quick: () => [fromSets(L3_QUICK_SETS, L3_QUICK_ESSAYS)],
    full: () => [
      fromSets(L3_SESSION_SETS_1, L3_SESSION_ESSAYS_1),
      fromSets(L3_SESSION_SETS_2, L3_SESSION_ESSAYS_2),
    ],
  },
};

const EXAM_ORDER: ExamSlug[] = ["cfa", "cfa-l2", "cfa-l3"];

// ---- Per-session working state ----------------------------------
interface SessionState {
  answers: (number | null)[];
  flagged: boolean[];
  strikes: number[][];
  essayTexts: string[][]; // per essay, per part
}

const emptySession = (run: RunSession): SessionState => ({
  answers: Array(run.questions.length).fill(null),
  flagged: Array(run.questions.length).fill(false),
  strikes: Array.from({ length: run.questions.length }, () => []),
  essayTexts: run.essays.map((e) => e.parts.map(() => "")),
});

interface GradedEssay {
  essay: Essay;
  texts: string[];
  points: number[];
}

export default function MockClient() {
  const [exam, setExam] = useState<ExamSlug>("cfa");
  const [mode, setMode] = useState<Mode>("quick");
  const [phase, setPhase] = useState<Phase>("home");
  const [sessionIdx, setSessionIdx] = useState(0);
  const [sessions, setSessions] = useState<SessionState[]>([]);
  const [score, setScore] = useState<MockScore | null>(null);
  const [gradedEssays, setGradedEssays] = useState<GradedEssay[]>([]);
  const [finalAnswers, setFinalAnswers] = useState<(number | null)[]>([]);
  const [showCta, setShowCta] = useState(false);
  const [resumeInit, setResumeInit] = useState<{ idx: number; seconds: number } | null>(null);
  const [saved, setSaved] = useState<MockProgress | null>(null);

  useEffect(() => {
    if (phase === "home") setSaved(loadProgress());
  }, [phase]);

  const run = useMemo(
    () => (mode === "quick" ? EXAM_DEFS[exam].quick() : EXAM_DEFS[exam].full()),
    [exam, mode]
  );
  const session = run[sessionIdx];

  const begin = useCallback((ex: ExamSlug, m: Mode) => {
    clearProgress();
    const r = m === "quick" ? EXAM_DEFS[ex].quick() : EXAM_DEFS[ex].full();
    setExam(ex);
    setMode(m);
    setSessionIdx(0);
    setSessions(r.map((s) => emptySession(s)));
    setScore(null);
    setGradedEssays([]);
    setShowCta(false);
    setResumeInit(null);
    setPhase("instructions");
    posthog.capture("mock_started", { exam: ex, mode: m });
  }, []);

  const resumeSaved = useCallback(() => {
    const p = loadProgress();
    if (!p) return;
    const ex = (p.exam as ExamSlug) ?? "cfa";
    const r = p.mode === "quick" ? EXAM_DEFS[ex].quick() : EXAM_DEFS[ex].full();
    setExam(ex);
    setMode(p.mode);
    setSessionIdx(p.sessionIdx);
    setSessions(
      p.sessions.map((s, i) => ({
        answers: s.answers,
        flagged: s.flagged,
        strikes: s.strikes,
        essayTexts: s.essayTexts ?? (r[i] ? r[i].essays.map((e) => e.parts.map(() => "")) : []),
      }))
    );
    setScore(null);
    setGradedEssays([]);
    setShowCta(false);
    setResumeInit({ idx: p.idx, seconds: Math.max(p.timeLeft, 30) });
    setPhase("exam");
    posthog.capture("mock_resumed", { exam: ex, mode: p.mode, session: p.sessionIdx + 1 });
  }, []);

  const finalize = useCallback(
    (allSessions: SessionState[], essayPoints: Map<string, number[]>) => {
      clearProgress();
      const allQs = run.flatMap((s) => s.questions);
      const allAnswers = allSessions.flatMap((s) => s.answers);
      const base = scoreMock(allQs, allAnswers);

      // Fold self-graded essay points into the overall result.
      const graded: GradedEssay[] = [];
      run.forEach((rs, si) => {
        rs.essays.forEach((e, ei) => {
          graded.push({
            essay: e,
            texts: allSessions[si]?.essayTexts[ei] ?? e.parts.map(() => ""),
            points: essayPoints.get(e.id) ?? e.parts.map(() => 0),
          });
        });
      });
      const essayEarned = graded.reduce((s, g) => s + g.points.reduce((a, b) => a + b, 0), 0);
      const essayTotal = graded.reduce(
        (s, g) => s + g.essay.parts.reduce((a, p) => a + p.points, 0),
        0
      );

      const correct = base.correct + essayEarned;
      const total = base.total + essayTotal;
      const byTopic: TopicScore[] = [...base.byTopic];
      if (essayTotal > 0) {
        byTopic.push({
          topicId: "constructed-response",
          topicName: "Constructed Response (self-graded)",
          correct: essayEarned,
          total: essayTotal,
          pct: Math.round((essayEarned / essayTotal) * 100),
        });
        byTopic.sort((a, b) => a.pct - b.pct);
      }
      const s: MockScore = {
        correct,
        total,
        answered: base.answered + graded.filter((g) => g.texts.some((t) => t.trim())).length,
        pct: total ? Math.round((correct / total) * 100) : 0,
        byTopic,
        readiness: estimateReadiness(correct, total),
      };

      setScore(s);
      setGradedEssays(graded);
      setFinalAnswers(allAnswers);
      saveAttempt({
        date: new Date().toISOString(),
        exam,
        mode,
        correct: s.correct,
        total: s.total,
        pct: s.pct,
        oddsMid: s.readiness.oddsMid,
        byTopic: s.byTopic.map((t) => ({ topicId: t.topicId, pct: t.pct })),
      });
      posthog.capture("mock_completed", {
        exam,
        mode,
        score_pct: s.pct,
        correct: s.correct,
        total: s.total,
        odds_mid: s.readiness.oddsMid,
        readiness_band: s.readiness.band,
      });
      setPhase("result");
      if (mode === "quick") setTimeout(() => setShowCta(true), 1600);
    },
    [run, exam, mode]
  );

  const submitSession = useCallback(
    (state: SessionState) => {
      const updated = [...sessions];
      updated[sessionIdx] = state;
      setSessions(updated);

      const isLast = sessionIdx >= run.length - 1;
      if (!isLast) {
        saveProgress({
          exam,
          mode,
          sessionIdx: sessionIdx + 1,
          sessions: updated,
          idx: 0,
          timeLeft: run[sessionIdx + 1].seconds,
          savedAt: new Date().toISOString(),
        });
        setResumeInit(null);
        setPhase("break");
        return;
      }
      const hasEssays = run.some((r) => r.essays.length > 0);
      if (hasEssays) {
        setPhase("grade");
      } else {
        finalize(updated, new Map());
      }
    },
    [sessions, sessionIdx, run, exam, mode, finalize]
  );

  // ---- phases ----
  if (phase === "instructions" && session) {
    return (
      <Instructions
        examName={EXAM_DEFS[exam].name}
        exam={exam}
        mode={mode}
        sessionIdx={sessionIdx}
        sessionCount={run.length}
        session={session}
        onBegin={() => setPhase("exam")}
        onCancel={() => setPhase("home")}
      />
    );
  }

  if (phase === "exam" && session && session.questions.length + session.essays.length > 0) {
    return (
      <ExamRoom
        key={`${exam}-${mode}-${sessionIdx}`}
        exam={exam}
        examName={EXAM_DEFS[exam].name}
        mode={mode}
        sessionIdx={sessionIdx}
        sessionCount={run.length}
        session={session}
        initial={sessions[sessionIdx]}
        allSessions={sessions}
        initialIdx={resumeInit?.idx ?? 0}
        initialSeconds={resumeInit?.seconds ?? session.seconds}
        onSubmit={submitSession}
      />
    );
  }

  if (phase === "break") {
    return (
      <Break
        onContinue={() => {
          setSessionIdx(sessionIdx + 1);
          setResumeInit(null);
          setPhase("instructions");
        }}
      />
    );
  }

  if (phase === "grade") {
    const toGrade: { essay: Essay; texts: string[] }[] = [];
    run.forEach((rs, si) =>
      rs.essays.forEach((e, ei) =>
        toGrade.push({ essay: e, texts: sessions[si]?.essayTexts[ei] ?? e.parts.map(() => "") })
      )
    );
    return (
      <SelfGrade
        items={toGrade}
        onDone={(pointsById) => finalize(sessions, pointsById)}
      />
    );
  }

  if (phase === "result" && score) {
    return (
      <>
        <ResultReport
          examName={EXAM_DEFS[exam].name}
          exam={exam}
          mode={mode}
          score={score}
          questions={run.flatMap((s) => s.questions)}
          setForQ={run.flatMap((s) => s.setForQ)}
          answers={finalAnswers}
          essays={gradedEssays}
          onRetake={() => setPhase("home")}
          onFullMock={() => begin(exam, "full")}
        />
        {showCta && mode === "quick" && (
          <QuickCta
            examName={EXAM_DEFS[exam].name}
            fullReady={EXAM_DEFS[exam].fullReady}
            fullSpec={EXAM_DEFS[exam].fullSpec}
            onClose={() => setShowCta(false)}
            onFullMock={() => {
              setShowCta(false);
              begin(exam, "full");
            }}
          />
        )}
      </>
    );
  }

  // ---- home ----
  const def = EXAM_DEFS[exam];
  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      <div
        className="text-[10px] font-semibold uppercase tracking-widest mb-1"
        style={{ color: "var(--text-muted)" }}
      >
        Examination center
      </div>
      <h1 className="font-display text-3xl mb-1" style={{ color: "var(--text-primary)" }}>
        CFA Mock Exams
      </h1>
      <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
        Faithful replicas of the real exams — same length, timing, pacing, and question
        formats. No games in this room: sit them under exam conditions and get an honest
        read on where you stand.
      </p>

      {/* Level selector */}
      <div className="flex items-center gap-2 mb-6">
        {EXAM_ORDER.map((slug) => {
          const active = slug === exam;
          return (
            <button
              key={slug}
              onClick={() => setExam(slug)}
              className="text-xs px-3.5 py-1.5 rounded-lg font-medium"
              style={{
                background: active ? "var(--primary)" : "var(--bg-card)",
                color: active ? "#fff" : "var(--text-secondary)",
                border: "0.5px solid var(--border)",
              }}
            >
              {EXAM_DEFS[slug].name}
            </button>
          );
        })}
      </div>

      {/* Resume an interrupted sitting */}
      {saved && (
        <div className="card p-5 mb-4" style={{ borderLeft: "3px solid var(--primary)" }}>
          <div className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
            Exam in progress — {EXAM_DEFS[(saved.exam as ExamSlug) ?? "cfa"].name}
          </div>
          <p className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
            {saved.mode === "quick" ? "Readiness check" : `Full mock — Session ${saved.sessionIdx + 1}`} ·
            {" "}question {saved.idx + 1} · {Math.floor(saved.timeLeft / 60)} min remaining. Your
            answers and clock were saved automatically.
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

      {/* Readiness check */}
      <div className="card p-6 mb-4">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <div className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
              {def.quickTitle}
            </div>
            <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              {def.quickSpec}
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
          {def.quickBlurb}
        </p>
        <button className="btn-primary w-full" onClick={() => begin(exam, "quick")}>
          Begin readiness check
        </button>
      </div>

      {/* Full mock */}
      <div className="card p-6 mb-5">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <div className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
              {def.fullTitle}
            </div>
            <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              {def.fullSpec}
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
          {def.fullBlurb}
        </p>
        {def.fullReady ? (
          <button className="btn-primary w-full" onClick={() => begin(exam, "full")}>
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
        style={{
          background: "var(--bg-card)",
          border: "0.5px solid var(--border)",
          color: "var(--text-muted)",
          lineHeight: 1.6,
        }}
      >
        <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>
          How the estimate works.
        </span>{" "}
        CFA Institute never publishes the minimum passing score; released results suggest it
        has historically fallen around 60–70% of available points. We compare your score
        against that range statistically and report your odds as a band, not a promise.
        Approved calculators (TI BA II Plus, HP 12C) are allowed, exactly as on exam day.
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// Pre-session instructions
// ---------------------------------------------------------------
function Instructions({
  examName,
  exam,
  mode,
  sessionIdx,
  sessionCount,
  session,
  onBegin,
  onCancel,
}: {
  examName: string;
  exam: ExamSlug;
  mode: Mode;
  sessionIdx: number;
  sessionCount: number;
  session: RunSession;
  onBegin: () => void;
  onCancel: () => void;
}) {
  const mins = Math.round(session.seconds / 60);
  const nQ = session.questions.length;
  const nE = session.essays.length;
  return (
    <div className="px-4 py-6 md:px-8 md:py-10 max-w-xl mx-auto">
      <div className="card p-6">
        <div
          className="text-[10px] font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--text-muted)" }}
        >
          CFA {examName} ·{" "}
          {mode === "quick" ? "readiness check · instructions" : `Session ${sessionIdx + 1} of ${sessionCount} · instructions`}
        </div>
        <h2 className="font-display text-xl mb-4" style={{ color: "var(--text-primary)" }}>
          Read before you begin
        </h2>
        <ul className="space-y-2.5 text-sm mb-6" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          <li>
            • {nQ} multiple-choice questions, three answer choices each
            {nE > 0 && <> — plus {nE} constructed-response (essay) question{nE > 1 ? "s" : ""}</>}.
          </li>
          {exam !== "cfa" && (
            <li>
              • Questions are grouped into item sets: read the case scenario and exhibits, then
              answer the questions that follow. Every answer must be supportable from the case.
            </li>
          )}
          <li>
            • You have <strong style={{ color: "var(--text-primary)" }}>{mins} minutes</strong>. The
            exam submits automatically when time expires.
          </li>
          <li>• Navigate freely: move back and forth, flag questions, and change answers any time before submitting.</li>
          <li>• Click a choice to select it. Use the small ✕ to strike through choices you&apos;ve eliminated.</li>
          {nE > 0 && (
            <li>
              • Essays are written in the on-screen response box. After the exam you will grade
              your answers against official-style guideline answers with a point rubric.
            </li>
          )}
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
// The exam room — MCQs (with vignette pane) + essay editor
// ---------------------------------------------------------------
function ExamRoom({
  exam,
  examName,
  mode,
  sessionIdx,
  sessionCount,
  session,
  initial,
  allSessions,
  initialIdx,
  initialSeconds,
  onSubmit,
}: {
  exam: ExamSlug;
  examName: string;
  mode: Mode;
  sessionIdx: number;
  sessionCount: number;
  session: RunSession;
  initial: SessionState;
  allSessions: SessionState[];
  initialIdx: number;
  initialSeconds: number;
  onSubmit: (s: SessionState) => void;
}) {
  const nQ = session.questions.length;
  const nSlots = nQ + session.essays.length; // essays occupy nav slots after MCQs
  const [idx, setIdx] = useState(Math.min(initialIdx, nSlots - 1));
  const [answers, setAnswers] = useState<(number | null)[]>(initial.answers);
  const [flagged, setFlagged] = useState<boolean[]>(initial.flagged);
  const [strikes, setStrikes] = useState<number[][]>(initial.strikes);
  const [essayTexts, setEssayTexts] = useState<string[][]>(initial.essayTexts);
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const submittedRef = useRef(false);

  const stateRef = useRef<SessionState>({ answers, flagged, strikes, essayTexts });
  stateRef.current = { answers, flagged, strikes, essayTexts };
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

  // Autosave on every change and every 15 s of clock.
  const timeBucket = Math.floor(timeLeft / 15);
  useEffect(() => {
    if (submittedRef.current) return;
    const merged = allSessions.map((s, i) => (i === sessionIdx ? stateRef.current : s));
    saveProgress({
      exam,
      mode,
      sessionIdx,
      sessions: merged,
      idx,
      timeLeft: timeRef.current,
      savedAt: new Date().toISOString(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, flagged, strikes, essayTexts, idx, timeBucket]);

  // Warn before closing/leaving the tab mid-exam.
  useEffect(() => {
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, []);

  const isEssay = idx >= nQ;
  const q = isEssay ? null : session.questions[idx];
  const activeSet = isEssay ? null : session.setForQ[idx];
  const essay = isEssay ? session.essays[idx - nQ] : null;
  const answeredCount =
    answers.filter((a) => a !== null).length +
    essayTexts.filter((t) => t.some((x) => x.trim().length > 0)).length;
  const urgent = timeLeft <= 300;

  function pick(i: number) {
    const next = [...answers];
    next[idx] = next[idx] === i ? null : i;
    setAnswers(next);
    if (strikes[idx]?.includes(i)) toggleStrike(i);
  }

  function toggleStrike(i: number) {
    const next = strikes.map((s) => [...s]);
    const cur = next[idx];
    next[idx] = cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i];
    setStrikes(next);
  }

  function toggleFlag() {
    if (isEssay) return;
    const next = [...flagged];
    next[idx] = !next[idx];
    setFlagged(next);
  }

  function setEssayText(partIdx: number, text: string) {
    const eIdx = idx - nQ;
    setEssayTexts((prev) =>
      prev.map((parts, i) => (i === eIdx ? parts.map((t, pi) => (pi === partIdx ? text : t)) : parts))
    );
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
          CFA {examName} Mock
          {mode === "full" && (
            <span style={{ color: "var(--text-muted)" }}> · Session {sessionIdx + 1} of {sessionCount}</span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            {answeredCount}/{nSlots} answered
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
          {isEssay ? `Constructed response ${idx - nQ + 1} of ${session.essays.length}` : `Question ${idx + 1} of ${nQ}`}
        </div>
        <div className="flex items-center gap-2">
          {!isEssay && (
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
          )}
          <button
            onClick={() => setPaletteOpen(true)}
            className="text-xs px-2.5 py-1 rounded-md font-medium"
            style={{ border: "0.5px solid var(--border)", color: "var(--text-muted)" }}
          >
            Navigator
          </button>
        </div>
      </div>

      {/* Vignette pane (Levels II & III item sets) */}
      {activeSet && (
        <div
          className="rounded-lg p-4 mb-4 overflow-y-auto"
          style={{ background: "var(--bg-card)", border: "0.5px solid var(--border)", maxHeight: 320 }}
        >
          <div className="text-xs font-semibold mb-2" style={{ color: "var(--primary)" }}>
            {activeSet.title}
          </div>
          {activeSet.vignette.map((p, i) => (
            <p key={i} className="text-sm mb-2.5" style={{ color: "var(--text-primary)", lineHeight: 1.65 }}>
              {p}
            </p>
          ))}
          {activeSet.exhibits?.map((ex, i) => (
            <div key={i} className="mt-3">
              {ex.caption && (
                <div className="text-[11px] font-semibold mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  {ex.caption}
                </div>
              )}
              <table className="w-full text-xs" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {ex.headers.map((h, hi) => (
                      <th
                        key={hi}
                        className="text-left px-2.5 py-1.5 font-semibold"
                        style={{ color: "var(--text-secondary)", borderBottom: "1px solid var(--border-strong)" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ex.rows.map((r, ri) => (
                    <tr key={ri}>
                      {r.map((c, ci) => (
                        <td
                          key={ci}
                          className="px-2.5 py-1.5"
                          style={{ color: "var(--text-primary)", borderBottom: "0.5px solid var(--border)" }}
                        >
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

      {/* MCQ view */}
      {q && (
        <>
          <p className="text-base mb-5" style={{ color: "var(--text-primary)", lineHeight: 1.6 }}>
            {q.stem}
          </p>
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
        </>
      )}

      {/* Essay view */}
      {essay && (
        <div className="mb-6">
          <div
            className="rounded-lg p-4 mb-4"
            style={{ background: "var(--bg-card)", border: "0.5px solid var(--border)" }}
          >
            <div className="text-xs font-semibold mb-2" style={{ color: "var(--primary)" }}>
              {essay.title}
            </div>
            {essay.scenario.map((p, i) => (
              <p key={i} className="text-sm mb-2" style={{ color: "var(--text-primary)", lineHeight: 1.65 }}>
                {p}
              </p>
            ))}
          </div>
          {essay.parts.map((part, pi) => (
            <div key={pi} className="mb-4">
              <div className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                Part {part.label} <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>({part.points} points)</span>
              </div>
              <p className="text-sm mb-2" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {part.prompt}
              </p>
              <textarea
                value={essayTexts[idx - nQ]?.[pi] ?? ""}
                onChange={(e) => setEssayText(pi, e.target.value)}
                rows={5}
                placeholder="Type your response…"
                className="w-full rounded-lg p-3 text-sm"
                style={{
                  background: "var(--bg-card)",
                  border: "0.5px solid var(--border-strong)",
                  color: "var(--text-primary)",
                  resize: "vertical",
                  lineHeight: 1.6,
                }}
              />
            </div>
          ))}
        </div>
      )}

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
        {idx + 1 < nSlots ? (
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
            {answeredCount} answered · {flagged.filter(Boolean).length} flagged · {nSlots - answeredCount} unanswered
          </div>
          <div className="grid grid-cols-9 sm:grid-cols-10 gap-1.5 mb-4">
            {Array.from({ length: nSlots }).map((_, i) => {
              const isCur = i === idx;
              const isEssaySlot = i >= nQ;
              const done = isEssaySlot
                ? (essayTexts[i - nQ] ?? []).some((t) => t.trim().length > 0)
                : answers[i] !== null;
              const flag = !isEssaySlot && flagged[i];
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
                  {isEssaySlot ? `E${i - nQ + 1}` : i + 1}
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
            You have answered {answeredCount} of {nSlots} questions.
          </p>
          {answeredCount < nSlots && (
            <p className="text-sm mb-1" style={{ color: "var(--ats-red)" }}>
              {nSlots - answeredCount} unanswered — unanswered questions score as incorrect.
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
          On exam day you get a scheduled break between sessions — stand up, stretch, drink
          some water. Your Session 1 answers are locked in. Results are reported only after
          both sessions are complete.
        </p>
        <button className="btn-primary w-full" onClick={onContinue}>
          Begin Session 2
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// Essay self-grading against guideline answers
// ---------------------------------------------------------------
function SelfGrade({
  items,
  onDone,
}: {
  items: { essay: Essay; texts: string[] }[];
  onDone: (pointsById: Map<string, number[]>) => void;
}) {
  const [points, setPoints] = useState<Map<string, number[]>>(
    () => new Map(items.map((it) => [it.essay.id, it.essay.parts.map(() => 0)]))
  );

  function setPartPoints(essayId: string, partIdx: number, value: number) {
    setPoints((prev) => {
      const next = new Map(prev);
      const arr = [...(next.get(essayId) ?? [])];
      arr[partIdx] = value;
      next.set(essayId, arr);
      return next;
    });
  }

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>
        Constructed response · grading
      </div>
      <h1 className="font-display text-2xl mb-1" style={{ color: "var(--text-primary)" }}>
        Grade your essays
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
        Compare each response with the guideline answer — the same way graders work from a
        rubric on exam day. Award yourself points honestly: the readiness estimate is only as
        good as your grading.
      </p>

      {items.map(({ essay, texts }) => (
        <div key={essay.id} className="card p-5 mb-5">
          <div className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
            {essay.title}
          </div>
          {essay.parts.map((part, pi) => {
            const earned = points.get(essay.id)?.[pi] ?? 0;
            return (
              <div key={pi} className="mb-5 pb-5" style={{ borderBottom: pi < essay.parts.length - 1 ? "0.5px solid var(--border)" : "none" }}>
                <div className="text-xs font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                  Part {part.label} ({part.points} points)
                </div>
                <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>{part.prompt}</p>
                <div className="text-[10px] font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--text-muted)" }}>
                  Your response
                </div>
                <div
                  className="rounded-md p-3 text-sm mb-3"
                  style={{
                    background: "var(--bg)",
                    border: "0.5px solid var(--border)",
                    color: texts[pi]?.trim() ? "var(--text-primary)" : "var(--text-muted)",
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.6,
                  }}
                >
                  {texts[pi]?.trim() || "(no response)"}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--ats-green)" }}>
                  Guideline answer
                </div>
                <p className="text-sm mb-3" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {part.guideline}
                </p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs mr-1" style={{ color: "var(--text-muted)" }}>Points earned:</span>
                  {Array.from({ length: part.points + 1 }).map((_, v) => (
                    <button
                      key={v}
                      onClick={() => setPartPoints(essay.id, pi, v)}
                      className="text-xs font-mono rounded px-2.5 py-1"
                      style={{
                        background: earned === v ? "var(--primary)" : "var(--bg)",
                        color: earned === v ? "#fff" : "var(--text-secondary)",
                        border: "0.5px solid var(--border)",
                      }}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}

      <button className="btn-primary w-full" onClick={() => onDone(points)}>
        Finalize grading and see my result
      </button>
    </div>
  );
}

// ---------------------------------------------------------------
// Result report
// ---------------------------------------------------------------
function ResultReport({
  examName,
  exam,
  mode,
  score,
  questions,
  setForQ,
  answers,
  essays,
  onRetake,
  onFullMock,
}: {
  examName: string;
  exam: ExamSlug;
  mode: Mode;
  score: MockScore;
  questions: Question[];
  setForQ: (ItemSet | null)[];
  answers: (number | null)[];
  essays: GradedEssay[];
  onRetake: () => void;
  onFullMock: () => void;
}) {
  const r = score.readiness;
  const signedIn = useSignedIn();
  const access = useAccess();
  const [showAllReview, setShowAllReview] = useState(false);
  const missedCount = questions.filter((q, i) => answers[i] !== q.answerIndex).length;

  // The mock result is the single highest-intent moment we have: they just
  // sat a real exam and saw a real score/odds. Everyone lands here, whether or
  // not they came through /check. So the ask has to live here too — a guest
  // offer for cold traffic, an upgrade for signed-in free users.
  const showGuestOffer = access.ready && !signedIn;
  const showUpgrade = access.ready && signedIn && !access.pro;
  useEffect(() => {
    if (showGuestOffer) posthog.capture("paywall_shown", { trigger: "post_mock_guest", accuracy_pct: score.pct, exam });
    if (showUpgrade) posthog.capture("paywall_shown", { trigger: "post_mock", accuracy_pct: score.pct, exam });
  }, [showGuestOffer, showUpgrade, score.pct, exam]);
  const bandColor =
    r.band === "on-track"
      ? "var(--ats-green)"
      : r.band === "borderline"
      ? "var(--gold)"
      : "var(--ats-red)";
  const learnSlug = exam; // /learn?exam=cfa | cfa-l2 | cfa-l3

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
            CFA {examName} Mock — {mode === "quick" ? "Readiness check" : "Full examination"}
          </div>
        </div>

        <div className="p-6 text-center">
          <div className="font-display" style={{ fontSize: "3.2rem", color: "var(--text-primary)", lineHeight: 1 }}>
            {score.pct}%
          </div>
          <p className="text-sm mt-1.5" style={{ color: "var(--text-secondary)" }}>
            {score.correct} of {score.total} points · {score.answered} answered
          </p>

          <div className="inline-block mt-4 px-4 py-2 rounded-lg" style={{ border: `1.5px solid ${bandColor}` }}>
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

      {/* Per-topic performance */}
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
            {t.topicId !== "constructed-response" && (
              <div className="flex items-center gap-3 mt-2">
                <Link href={`/learn?exam=${learnSlug}&topic=${t.topicId}`} className="text-xs font-medium hover:underline" style={{ color: "var(--primary)" }}>
                  Re-read lesson
                </Link>
                <Link href={`/practice?exam=${learnSlug}&topic=${t.topicId}`} className="text-xs font-medium hover:underline" style={{ color: "var(--primary)" }}>
                  Drill questions
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Question-by-question review */}
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
              const set = setForQ[i];
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
                      {set ? `${set.title} · ` : ""}{q.topicName}
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
                        href={`/learn?exam=${learnSlug}&topic=${q.topicId}`}
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

      {/* Essay review */}
      {essays.length > 0 && (
        <>
          <h3 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
            Constructed response review
          </h3>
          <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
            Your responses, the guideline answers, and the points you awarded.
          </p>
          <div className="space-y-2 mb-6">
            {essays.map((g) => {
              const earned = g.points.reduce((a, b) => a + b, 0);
              const total = g.essay.parts.reduce((a, p) => a + p.points, 0);
              return (
                <details key={g.essay.id} className="card-i" style={{ overflow: "hidden" }}>
                  <summary
                    className="px-4 py-3 text-sm flex items-center gap-3"
                    style={{ cursor: "pointer", color: "var(--text-primary)", listStyle: "none" }}
                  >
                    <span
                      className="text-[10px] font-bold flex-shrink-0 rounded px-1.5 py-0.5"
                      style={{
                        background: earned / total >= 0.7 ? "var(--ats-green-bg)" : "var(--ats-red-bg)",
                        color: earned / total >= 0.7 ? "var(--ats-green)" : "var(--ats-red)",
                      }}
                    >
                      {earned}/{total}
                    </span>
                    <span className="truncate text-xs" style={{ color: "var(--text-secondary)" }}>
                      {g.essay.title}
                    </span>
                  </summary>
                  <div className="px-4 pb-4">
                    {g.essay.parts.map((part, pi) => (
                      <div key={pi} className="mb-4">
                        <div className="text-xs font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                          Part {part.label} — {g.points[pi] ?? 0}/{part.points} points
                        </div>
                        <div
                          className="rounded-md p-2.5 text-xs mb-2"
                          style={{
                            background: "var(--bg)",
                            border: "0.5px solid var(--border)",
                            color: g.texts[pi]?.trim() ? "var(--text-primary)" : "var(--text-muted)",
                            whiteSpace: "pre-wrap",
                            lineHeight: 1.6,
                          }}
                        >
                          {g.texts[pi]?.trim() || "(no response)"}
                        </div>
                        <p className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                          <span className="font-semibold" style={{ color: "var(--ats-green)" }}>Guideline: </span>
                          {part.guideline}
                        </p>
                      </div>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </>
      )}

      {(showGuestOffer || showUpgrade) && (
        <div className="card p-5 mb-5" style={{ borderColor: "var(--primary)", borderWidth: 2 }}>
          <div className="text-base font-extrabold mb-1" style={{ color: "var(--text-primary)" }}>
            {r.band === "on-track"
              ? "You're close. Now close it for good."
              : "This is a map of exactly what to fix."}
          </div>
          <div className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
            You scored <span style={{ fontWeight: 700 }}>{score.pct}%</span> — odds of passing today around{" "}
            {r.oddsLow}–{r.oddsHigh}%. Certus turns the weak topics above into targeted lessons and unlimited
            practice, with every reading and every mock unlocked. The exam costs $1,140. This is $24.99/mo, or
            $115 for the year.
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              href={signedIn ? "/billing" : "/signup?next=/billing"}
              className="btn-primary flex-1 text-center"
              onClick={() => posthog.capture("upgrade_cta_clicked", { trigger: signedIn ? "post_mock" : "post_mock_guest", exam })}
            >
              Unlock my full plan →
            </Link>
            <Link href={`/practice?exam=${learnSlug}`} className="btn-secondary flex-1 text-center">
              Train weak topics free
            </Link>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <button className="btn-secondary flex-1" onClick={onRetake}>
          Back to exam center
        </button>
        {mode === "quick" && EXAM_DEFS[exam].fullReady && (
          <button className="btn-primary flex-1" onClick={onFullMock}>
            Sit the full mock
          </button>
        )}
        {mode === "full" && (
          <Link href={`/practice?exam=${learnSlug}`} className="btn-primary flex-1 text-center">
            Train weak topics
          </Link>
        )}
      </div>

      <p className="text-[11px] text-center mt-5" style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>
        Certus readiness estimates are statistical projections from your mock performance.
        They are not affiliated with, endorsed by, or a guarantee of results on any
        examination administered by CFA Institute.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------
// Post-quick popup — "now test it for real"
// ---------------------------------------------------------------
function QuickCta({
  examName,
  fullReady,
  fullSpec,
  onClose,
  onFullMock,
}: {
  examName: string;
  fullReady: boolean;
  fullSpec: string;
  onClose: () => void;
  onFullMock: () => void;
}) {
  return (
    <Overlay onClose={onClose}>
      <div className="text-center">
        <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
          That was a sample
        </div>
        <div className="font-display text-xl mb-2" style={{ color: "var(--text-primary)" }}>
          Want to test it for real?
        </div>
        <p className="text-sm mb-5" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          A short sample carries wide error bars. The full {examName} mock — {fullSpec},
          exactly like exam day — narrows your estimate from a rough read to a serious one.
        </p>
        {fullReady ? (
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
