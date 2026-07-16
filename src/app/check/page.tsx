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

  // No intro gate. PostHog was brutal on this: 44 sessions viewed /check and 5
  // pressed Start — an 89% bounce on a page someone deliberately clicked. The
  // old intro screen asked for a five-minute commitment before giving anything,
  // so we deleted it. Question 1 is live on arrival; the hook animates OVER it
  // and gets out of the way. It must never block the tap — if they're already
  // reading the question, the hook has done its job.
  const [hook, setHook] = useState(true);
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
    // Arriving IS starting now — there's no button to press. Keeping the event
    // so the check_viewed → check_started → check_completed funnel stays
    // comparable to the old one; the gap between viewed and started should now
    // be ~0, and any remaining drop is real bounce, not a shut door.
    posthog.capture("check_started", { exam: examSlug, variant: "no_intro" });
  }, [examSlug]);

  // Retire the hook on a timer, but let any tap kill it early.
  useEffect(() => {
    if (!hook) return;
    const t = setTimeout(() => setHook(false), 1900);
    return () => clearTimeout(t);
  }, [hook]);

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
    // Drop them straight into a lesson on the topic they JUST bled points on.
    // This is the whole psychology: reciprocity (free value) + investment (they
    // do the work), in the same session, so the upgrade ask at the end of that
    // lesson lands on a warm, moving lead — not a cold dashboard.
    const worst = result.weakTopics.find((t) => t.pct < 100);
    if (worst) {
      router.push(`/practice?exam=${exam.slug}&topic=${encodeURIComponent(worst.topicId)}&start=1`);
    } else {
      router.push("/dashboard");
    }
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
          {worst[0] ? `Start fixing ${worst[0].topicName} →` : "Build my plan and start →"}
        </button>
        <p className="text-xs text-center mt-3" style={{ color: "var(--text-muted)" }}>
          Free. No card. Your first lesson targets exactly where you bled points.
        </p>
      </div>
    );
  }

  // ---------- QUESTIONS (live on arrival) ----------
  return shell(
    <div>
      {/* The hook. pointerEvents:none is load-bearing — it lets the very first
          tap land on the answer underneath instead of being eaten by a curtain. */}
      {hook && (
        <div
          onAnimationEnd={() => setHook(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg)",
            animation: "checkHook 1.9s ease forwards",
          }}
        >
          <div className="text-center px-6">
            <div
              className="font-display"
              style={{ fontSize: 34, lineHeight: 1.15, color: "var(--text-primary)", animation: "checkHookLine 1.9s ease forwards" }}
            >
              Let&apos;s see if you&apos;d pass
              <br />
              <span style={{ color: "var(--primary)" }}>{exam.name}</span> today.
            </div>
            <div
              className="text-sm mt-3"
              style={{ color: "var(--text-muted)", animation: "checkHookSub 1.9s ease forwards" }}
            >
              10 real questions. Starting now.
            </div>
          </div>
        </div>
      )}

      {/* No "Skip" link. This is the front door — every ad click lands here, and
          a Skip was the only competing click on the page, pointing at a dashboard
          a cold stranger has no reason to want. The back button still exists for
          anyone who truly wants out; we just stop advertising the exit. */}
      <div className="flex items-center justify-between mb-2 pt-2">
        <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
          {idx + 1} of {questions.length}
        </span>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>No card · no signup</span>
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
