"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { EXAMS, getExam } from "@/lib/exams";
import { examsWithContent, getQuestions } from "@/content";
import { Question } from "@/content/types";
import { recordStudy } from "@/lib/gameStore";
import { useAccess } from "@/lib/useAccess";
import { UpgradeCard } from "@/components/UpgradeGate";
import Tutor from "@/components/Tutor";

type Phase = "setup" | "quiz" | "results";

export default function PracticeClient() {
  const params = useSearchParams();
  const available = examsWithContent();
  const access = useAccess();
  const paramExam = params.get("exam");
  const initialExam = paramExam && available.includes(paramExam) ? paramExam : available[0] ?? "cfa";

  const [exam, setExam] = useState(initialExam);
  const [topic, setTopic] = useState(params.get("topic") ?? "all");
  const [phase, setPhase] = useState<Phase>("setup");

  // The frozen question set + answers for the active run.
  const [session, setSession] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const topics = useMemo(() => {
    const qs = getQuestions(exam);
    const map = new Map<string, string>();
    qs.forEach((q) => map.set(q.topicId, q.topicName));
    return Array.from(map.entries());
  }, [exam]);

  const poolCount = getQuestions(exam, topic === "all" ? undefined : topic).length;

  function start() {
    const qs = shuffle(getQuestions(exam, topic === "all" ? undefined : topic));
    setSession(qs);
    setAnswers([]);
    setPhase("quiz");
  }

  function finish(finalAnswers: (number | null)[]) {
    recordStudy(exam, Math.max(5, Math.round(session.length * 1.5)), topic === "all" ? undefined : topic);
    setAnswers(finalAnswers);
    setPhase("results");
  }

  if (phase === "quiz") {
    return <Quiz questions={session} onFinish={finish} />;
  }

  if (phase === "results") {
    return <Results questions={session} answers={answers} runMinutes={Math.max(5, Math.round(session.length * 1.5))} onRetry={() => setPhase("setup")} />;
  }

  // ---- setup ----
  const examName = getExam(exam)?.name ?? exam;
  return (
    <div className="px-8 py-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>Practice</h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        Every question comes with a full explanation — including why the wrong answers are wrong. That&apos;s where the learning happens.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {EXAMS.map((e) => {
          const has = available.includes(e.slug);
          const active = e.slug === exam;
          return (
            <button
              key={e.slug}
              disabled={!has}
              onClick={() => { setExam(e.slug); setTopic("all"); }}
              className="text-xs px-3 py-1.5 rounded-lg"
              style={{
                background: active ? "var(--primary)" : "var(--bg-card)",
                color: active ? "#fff" : has ? "var(--text-secondary)" : "var(--text-muted)",
                border: "0.5px solid var(--border)",
                opacity: has ? 1 : 0.5,
                cursor: has ? "pointer" : "not-allowed",
              }}
            >
              {e.name}{!has ? " · soon" : access.ready && !access.canExam(e.slug) ? " 🔒" : ""}
            </button>
          );
        })}
      </div>

      {access.ready && !access.canExam(exam) ? (
        <UpgradeCard title="This exam is Pro" reason="Free includes the full CFA question bank. Upgrade to practice every other exam." />
      ) : (
        <>
          <p className="text-xs font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Topic</p>
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <TopicChip label="All topics" active={topic === "all"} onClick={() => setTopic("all")} />
            {topics.map(([id, name]) => (
              <TopicChip key={id} label={name} active={topic === id} onClick={() => setTopic(id)} />
            ))}
          </div>

          <div className="card p-4 mb-5">
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {poolCount} question{poolCount !== 1 ? "s" : ""} · {examName} · {topic === "all" ? "all topics" : topics.find((t) => t[0] === topic)?.[1] ?? topic}
            </span>
          </div>

          <button className="btn-primary w-full" disabled={poolCount === 0} onClick={start}>
            {poolCount === 0 ? "No questions yet for this topic" : "Start practice →"}
          </button>
        </>
      )}
    </div>
  );
}

function Quiz({ questions, onFinish }: { questions: Question[]; onFinish: (answers: (number | null)[]) => void }) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const q = questions[idx];
  const isLast = idx === questions.length - 1;
  const answered = picked !== null;
  const correct = picked === q.answerIndex;

  function next() {
    const updated = [...answers, picked];
    setAnswers(updated);
    if (isLast) onFinish(updated);
    else { setIdx(idx + 1); setPicked(null); }
  }

  return (
    <div className="px-8 py-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>Question {idx + 1} of {questions.length}</span>
        <span className="text-xs font-medium" style={{ color: "var(--primary)" }}>{q.topicName}</span>
      </div>
      <div style={{ height: 6, borderRadius: 100, background: "var(--bg-card)", overflow: "hidden", marginBottom: 24 }}>
        <div style={{ width: `${(idx / questions.length) * 100}%`, height: "100%", background: "var(--primary)", transition: "width 0.3s" }} />
      </div>

      <h2 className="text-lg mb-5" style={{ color: "var(--text-primary)", lineHeight: 1.5 }}>{q.stem}</h2>

      <div className="space-y-2.5 mb-5">
        {q.choices.map((choice, i) => {
          const isAnswer = i === q.answerIndex;
          const isPicked = i === picked;
          let bg = "var(--bg-card)";
          let border = "0.5px solid var(--border-strong)";
          let color = "var(--text-primary)";
          if (answered) {
            if (isAnswer) { bg = "var(--ats-green-bg)"; border = "0.5px solid var(--ats-green)"; color = "var(--ats-green)"; }
            else if (isPicked) { bg = "var(--ats-red-bg)"; border = "0.5px solid var(--ats-red)"; color = "var(--ats-red)"; }
          }
          return (
            <button
              key={i}
              disabled={answered}
              onClick={() => setPicked(i)}
              className="w-full text-left px-4 py-3 rounded-lg text-sm flex items-start gap-3 transition-colors"
              style={{ background: bg, border, color, cursor: answered ? "default" : "pointer" }}
            >
              <span className="font-semibold flex-shrink-0">{String.fromCharCode(65 + i)}</span>
              <span>{choice}</span>
              {answered && isAnswer && <span className="ml-auto">✓</span>}
              {answered && isPicked && !isAnswer && <span className="ml-auto">✕</span>}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="rounded-lg p-4 mb-5 animate-in" style={{ background: "var(--bg-card)", border: `0.5px solid ${correct ? "var(--ats-green)" : "var(--ats-red)"}` }}>
          <div className="text-sm font-semibold mb-1.5" style={{ color: correct ? "var(--ats-green)" : "var(--ats-red)" }}>
            {correct ? "Correct" : "Not quite"}
          </div>
          <p className="text-sm" style={{ color: "var(--text-primary)", lineHeight: 1.6, opacity: 0.92 }}>{q.explanation}</p>
        </div>
      )}

      <button className="btn-primary w-full" disabled={!answered} onClick={next}>
        {isLast ? "See results" : "Next question →"}
      </button>

      {/* The Associate — sees the current question (and the explanation once answered) */}
      <Tutor
        context={`The student is doing practice questions (${q.topicName}).\nCurrent question: ${q.stem}\nChoices: ${q.choices.map((c, ci) => `${String.fromCharCode(65 + ci)}. ${c}`).join(" ")}${answered ? `\nCorrect answer: ${String.fromCharCode(65 + q.answerIndex)}. Explanation: ${q.explanation}\nThe student answered ${picked !== null ? String.fromCharCode(65 + picked) : "nothing"} (${correct ? "correct" : "incorrect"}).` : "\nThe student has NOT answered yet — do NOT reveal the answer; teach the underlying concept or how to approach it instead."}`}
        suggestions={
          answered
            ? ["Why is my answer wrong?", "Explain this concept from scratch", "Give me a similar question"]
            : ["Teach me the concept behind this", "How do I approach this question?", "Define the terms in this question"]
        }
      />
    </div>
  );
}

function Results({ questions, answers, runMinutes, onRetry }: { questions: Question[]; answers: (number | null)[]; runMinutes: number; onRetry: () => void }) {
  const correctCount = answers.filter((a, i) => a === questions[i]?.answerIndex).length;
  const pct = questions.length ? Math.round((correctCount / questions.length) * 100) : 0;
  const wrong = questions.map((q, i) => ({ q, a: answers[i] })).filter((x) => x.a !== x.q.answerIndex);

  return (
    <div className="px-8 py-8 max-w-2xl mx-auto">
      <div className="card p-6 text-center mb-6">
        <div className="text-4xl font-semibold mb-1" style={{ color: pct >= 70 ? "var(--ats-green)" : pct >= 50 ? "var(--ats-amber)" : "var(--ats-red)" }}>
          {pct}%
        </div>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {correctCount} of {questions.length} correct · +{runMinutes * 2} XP earned
        </p>
        <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
          {pct >= 70 ? "Strong — keep the streak going." : "Review the misses below, then run it again."}
        </p>
      </div>

      {wrong.length > 0 && (
        <>
          <h2 className="text-sm font-medium mb-3" style={{ color: "var(--text-primary)" }}>
            Review your misses ({wrong.length})
          </h2>
          <div className="space-y-3 mb-6">
            {wrong.map(({ q, a }) => (
              <div key={q.id} className="card p-4">
                <p className="text-sm font-medium mb-2" style={{ color: "var(--text-primary)" }}>{q.stem}</p>
                <p className="text-xs mb-1" style={{ color: "var(--ats-red)" }}>
                  Your answer: {a !== null && a !== undefined ? `${String.fromCharCode(65 + a)}. ${q.choices[a]}` : "skipped"}
                </p>
                <p className="text-xs mb-2" style={{ color: "var(--ats-green)" }}>
                  Correct: {String.fromCharCode(65 + q.answerIndex)}. {q.choices[q.answerIndex]}
                </p>
                <p className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{q.explanation}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="flex items-center gap-3">
        <button className="btn-primary flex-1" onClick={onRetry}>Practice again</button>
        <Link href="/learn" className="btn-secondary flex-1 text-center">Back to reading</Link>
      </div>
    </div>
  );
}

function TopicChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-xs px-3 py-1.5 rounded-lg"
      style={{
        background: active ? "var(--primary-light)" : "var(--bg-card)",
        color: active ? "var(--primary)" : "var(--text-secondary)",
        border: `0.5px solid ${active ? "rgba(83,74,183,0.3)" : "var(--border)"}`,
        fontWeight: active ? 500 : 400,
      }}
    >
      {label}
    </button>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
