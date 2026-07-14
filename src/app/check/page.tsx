"use client";

// ============================================================
// /check — THE FRONT DOOR.
//
// This is where every ad lands. No sidebar, no tab bar, no nav — nothing to
// click except the next question. A cold stranger will not sit a 4.5-hour mock,
// but they will answer 10 questions in five minutes to find out if they'd pass.
//
// The RESULT is the product. We've just told someone "you're at 40% — you'd
// fail today." That's the highest-intent moment in the entire funnel, so we
// don't show them a feature list. We show them exactly where they bled points,
// hand them a plan, and drop them into their first lesson.
// ============================================================

import { useEffect, useMemo, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import posthog from "posthog-js";
import { LogoMark } from "@/components/Logo";
import { getExam } from "@/lib/exams";
import { getQuestions } from "@/content";
import { Question } from "@/content/types";
import {
  saveDiagnostic,
  verdict,
  MPS_LOW,
  MPS_HIGH,
  WeakTopic,
  DiagnosticResult,
} from "@/lib/diagnostic";
import { loadState, saveState } from "@/lib/gameStore";
import type { StudyPlan } from "@/lib/studyPlan";

const N_QUESTIONS = 10;

export default function CheckPage() {
  return (
    <Suspense fallback={null}>
      <Check />
    </Suspense>
  );
}

function Check() {
  const params = useSearchParams();
  const router = useRouter();
  const examSlug = params.get("exam") || "cfa";
  const exam = getExam(examSlug);

  const [started, setStarted] = useState(false);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  // A spread of real questions across topics — not 10 from one chapter.
  const questions = useMemo<Question[]>(() => {
    const all = getQuestions(examSlug);
    const byTopic = new Map<string, Question[]>();
    all.forEach((q) => {
      const list = byTopic.get(q.topicId) ?? [];
      list.push(q);
      byTopic.set(q.topicId, list);
    });
    const topics = [...byTopic.keys()];
    const out: Question[] = [];
    let i = 0;
    while (out.length < N_QUESTIONS && topics.length > 0) {
      const t = topics[i % topics.length];
      const pool = byTopic.get(t)!;
      const q = pool[Math.floor(Math.random() * pool.length)];
      if (q && !out.find((x) => x.id === q.id)) out.push(q);
      i++;
      if (i > 400) break;
    }
    return out.slice(0, N_QUESTIONS);
  }, [examSlug]);

  useEffect(() => {
    posthog.capture("check_viewed", { exam: examSlug });
  }, [examSlug]);

  const q = questions[idx];

  function submit(all: (number | null)[]) {
    let correct = 0;
    const topics = new Map<string, WeakTopic>();
    questions.forEach((qq, i) => {
      const right = all[i] === qq.answerIndex;
      if (right) correct++;
      const t = topics.get(qq.topicId) ?? {
        topicId: qq.topicId,
        topicName: qq.topicName,
        correct: 0,
        total: 0,
        pct: 0,
      };
      t.total++;
      if (right) t.correct++;
      t.pct = Math.round((t.correct / t.total) * 100);
      topics.set(qq.topicId, t);
    });

    const r: DiagnosticResult = {
      examSlug,
      correct,
      total: questions.length,
      pct: Math.round((correct / questions.length) * 100),
      weakTopics: [...topics.values()].sort((a, b) => a.pct - b.pct),
      date: new Date().toISOString().slice(0, 10),
    };
    saveDiagnostic(r);
    setResult(r);
    posthog.capture("check_completed", { exam: examSlug, pct: r.pct });
  }

  function next() {
    const all = [...answers, picked];
    setAnswers(all);
    setPicked(null);
    if (idx + 1 >= questions.length) submit(all);
    else setIdx(idx + 1);
  }

  // Build the plan from their result and drop them straight into the app.
  function buildPlan() {
    if (!exam || !result) return;
    const level = exam.levels[0];
    const d = new Date();
    d.setDate(d.getDate() + 90);
    const plan: StudyPlan = {
      examSlug: exam.slug,
      examName: exam.name,
      levelId: level.id,
      levelName: level.name,
      examDate: d.toISOString().slice(0, 10),
      targetHours: level.recommendedHours,
      startDate: new Date().toISOString().slice(0, 10),
      accent: exam.accent,
    };
    try {
      const state = loadState();
      saveState({ ...state, plans: [plan, ...(state.plans ?? []).filter((p) => p.examSlug !== plan.examSlug)] });
      localStorage.setItem("certus_onboarded", "1");
    } catch {}
    posthog.capture("check_plan_built", { exam: examSlug, pct: result.pct });
    router.push("/dashboard");
  }

  const shell = (children: React.ReactNode) => (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <div className="flex items-center gap-2 px-5 py-4">
        <LogoMark size={22} />
        <span className="font-display text-sm" style={{ color: "var(--text-primary)" }}>certus</span>
      </div>
      <div className="px-5 pb-16 mx-auto" style={{ maxWidth: 560 }}>{children}</div>
    </div>
  );

  if (!exam || questions.length === 0) {
    return shell(<p style={{ color: "var(--text-secondary)" }}>That exam isn&apos;t available yet.</p>);
  }

  // ---------- RESULT ----------
  if (result) {
    const v = verdict(result.pct);
    const worst = result.weakTopics.filter((t) => t.pct < 100).slice(0, 3);
    const tone =
      v.tone === "good" ? "var(--ats-green)" : v.tone === "close" ? "var(--ats-amber)" : "var(--ats-red)";

    return shell(
      <div className="rise-in">
        <div className="card p-6 mb-4 text-center">
          <div className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
            If you sat {exam.name} today
          </div>
          <div className="font-display" style={{ fontSize: 58, lineHeight: 1, color: tone }}>{result.pct}%</div>
          <div className="text-sm mt-2 font-semibold" style={{ color: "var(--text-primary)" }}>{v.label}</div>
          <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            You got {result.correct} of {result.total}. The pass mark isn&apos;t published, but it sits
            around {MPS_LOW}–{MPS_HIGH}%.
          </div>
        </div>

        {worst.length > 0 && (
          <div className="card p-5 mb-4">
            <div className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
              This is where you bled points
            </div>
            {worst.map((t) => (
              <div key={t.topicId} className="flex items-center justify-between py-1.5">
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{t.topicName}</span>
                <span className="text-sm font-mono font-semibold" style={{ color: t.pct === 0 ? "var(--ats-red)" : "var(--text-primary)" }}>
                  {t.correct}/{t.total}
                </span>
              </div>
            ))}
            <p className="text-xs mt-3" style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>
              Ten questions is a rough read, not a verdict — but weak topics show up fast, and this is
              where your next hours are worth the most.
            </p>
          </div>
        )}

        <button onClick={buildPlan} className="btn-duo w-full" style={{ padding: "0.95rem" }}>
          Build my plan and start →
        </button>
        <p className="text-xs text-center mt-3" style={{ color: "var(--text-muted)" }}>
          Free. No card. Half the readings, a full timed mock, and 25 questions a day.
        </p>
      </div>
    );
  }

  // ---------- INTRO ----------
  if (!started) {
    return shell(
      <div className="rise-in text-center pt-6">
        <h1 className="font-display mb-3" style={{ fontSize: 30, lineHeight: 1.2, color: "var(--text-primary)" }}>
          Would you pass {exam.name} today?
        </h1>
        <p className="mb-6 mx-auto" style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: 420 }}>
          Ten real questions. About five minutes. At the end you get your score, the topics you&apos;re
          bleeding points on, and an honest read on where you stand.
        </p>
        <button
          onClick={() => { setStarted(true); posthog.capture("check_started", { exam: examSlug }); }}
          className="btn-duo"
          style={{ padding: "0.9rem 2.2rem", fontSize: 16 }}
        >
          Start
        </button>
        <div className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>
          No card. No signup. No email.
        </div>
      </div>
    );
  }

  // ---------- QUESTIONS ----------
  return shell(
    <div>
      <div className="flex items-center justify-between mb-2 pt-2">
        <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
          {idx + 1} of {questions.length}
        </span>
        <Link href="/dashboard" className="text-xs" style={{ color: "var(--text-muted)" }}>Skip</Link>
      </div>
      <div style={{ height: 6, borderRadius: 99, background: "var(--primary-light)", marginBottom: 22 }}>
        <div
          style={{
            height: "100%",
            width: `${(idx / questions.length) * 100}%`,
            background: "var(--primary)",
            borderRadius: 99,
            transition: "width .3s ease",
          }}
        />
      </div>

      <h2 className="font-display mb-5" style={{ fontSize: 19, lineHeight: 1.45, color: "var(--text-primary)" }}>
        {q.stem}
      </h2>

      <div className="flex flex-col gap-2.5 mb-6">
        {q.choices.map((c, i) => (
          <button
            key={i}
            onClick={() => setPicked(i)}
            className="ob-opt"
            style={{
              borderColor: picked === i ? "var(--primary)" : "var(--border)",
              background: picked === i ? "var(--primary-light)" : "var(--bg-card)",
            }}
          >
            <span className="ob-num">{String.fromCharCode(65 + i)}</span>
            <span>{c}</span>
          </button>
        ))}
      </div>

      <button onClick={next} disabled={picked === null} className="btn-duo w-full" style={{ padding: "0.9rem", opacity: picked === null ? 0.5 : 1 }}>
        {idx + 1 >= questions.length ? "See my result" : "Next"}
      </button>
      <p className="text-xs text-center mt-3" style={{ color: "var(--text-muted)" }}>
        We don&apos;t show you the answers as you go — that&apos;s what makes the score mean something.
      </p>
    </div>
  );
}
