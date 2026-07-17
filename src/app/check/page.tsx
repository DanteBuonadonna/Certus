"use client";

// ============================================================
// /check — THE FRONT DOOR.
//
// This is where every ad lands. No sidebar, no tab bar, no nav — nothing to
// click except the next question. A cold stranger will not sit a 4.5-hour mock,
// but they will answer six questions in three minutes to find out if they'd pass.
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
import { N_QUESTIONS } from "@/lib/check";



export default function CheckPage() {
  return (
    <Suspense fallback={null}>
      <Check />
    </Suspense>
  );
}

// ============================================================
// The score reveal. THIS IS THE PRODUCT.
//
// Everything before it is admin; this is the moment we hand a stranger
// something true about themselves that they didn't have 3 minutes ago. It was a
// static number. Now the arc climbs and they watch whether it clears the line.
//
// NOTE ON WHAT'S IN THE RING: this shows their SCORE against the pass band —
// not a "% chance of passing". Off 6 questions the error bar on any odds figure
// is enormous, and inventing one would reintroduce the exact bug diagnostic.ts
// exists to fix (a brand-new account being told it had "a 2% chance of passing"
// based on nothing). The band is drawn ON the dial, so the drama comes from a
// true number landing above or below a real line. A CFA candidate can smell
// fake precision, and credibility is the only thing we're selling here.
// ============================================================
function ScoreRing({ pct, tone }: { pct: number; tone: string }) {
  const [shown, setShown] = useState(0);

  // Count the number up in step with the arc so they move as one object.
  useEffect(() => {
    // The CSS stagger already collapses under reduced-motion (globals.css), but
    // a requestAnimationFrame loop doesn't respect that setting on its own —
    // it'd keep animating for someone who explicitly asked things to hold still.
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setShown(pct);
      return;
    }
    const DURATION = 1300;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      // easeOutCubic — fast then settling, so it feels like it's landing.
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(eased * pct));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pct]);

  const SIZE = 190;
  const R = 78;
  const C = 2 * Math.PI * R;
  // Leave a gap at the bottom: a 270° dial reads as a gauge, not a pie chart.
  const SWEEP = 0.75;
  const arcLen = C * SWEEP;
  const rot = 135; // start bottom-left

  const passLow = (MPS_LOW / 100) * arcLen;
  const passHigh = (MPS_HIGH / 100) * arcLen;

  return (
    <div className="relative mx-auto" style={{ width: SIZE, height: SIZE }}>
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} style={{ transform: `rotate(${rot}deg)` }}>
        {/* track */}
        <circle
          cx={SIZE / 2} cy={SIZE / 2} r={R} fill="none"
          stroke="var(--border)" strokeWidth={13} strokeLinecap="round"
          strokeDasharray={`${arcLen} ${C}`}
        />
        {/* the pass band, drawn on the dial — the line they're trying to clear */}
        <circle
          cx={SIZE / 2} cy={SIZE / 2} r={R} fill="none"
          stroke="var(--text-muted)" strokeWidth={13} opacity={0.32}
          strokeDasharray={`${passHigh - passLow} ${C}`}
          strokeDashoffset={-passLow}
        />
        {/* their score */}
        <circle
          cx={SIZE / 2} cy={SIZE / 2} r={R} fill="none"
          stroke={tone} strokeWidth={13} strokeLinecap="round"
          strokeDasharray={`${(shown / 100) * arcLen} ${C}`}
          style={{ transition: "stroke 0.4s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-display" style={{ fontSize: 52, lineHeight: 1, color: tone }}>{shown}%</div>
        <div className="text-[10px] font-semibold uppercase tracking-wider mt-1" style={{ color: "var(--text-muted)" }}>
          your score
        </div>
      </div>
    </div>
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
    // Hand off to a SHORT first lesson on the topic they just bled points on.
    //
    // This used to send them into a full 20-question run. Ten check questions
    // followed immediately by twenty more is thirty questions with no payoff in
    // between — the reward for finishing the diagnostic was a longer diagnostic.
    // `first=1` makes it five questions and about two minutes: one clean win,
    // then the ask.
    const worst = result.weakTopics.find((t) => t.pct < 100);
    if (worst) {
      router.push(`/practice?exam=${exam.slug}&topic=${encodeURIComponent(worst.topicId)}&start=1&first=1`);
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
          <div className="text-[11px] font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>
            If you sat {exam.name} today
          </div>
          <ScoreRing pct={result.pct} tone={tone} />
          <div className="text-base mt-4 font-semibold rise-in" style={{ color: "var(--text-primary)", animationDelay: "1.5s" }}>
            {v.label}
          </div>
          <div className="text-xs mt-1.5 rise-in" style={{ color: "var(--text-muted)", animationDelay: "1.65s" }}>
            You got {result.correct} of {result.total}. The pass mark isn&apos;t published, but it sits
            around {MPS_LOW}–{MPS_HIGH}% — that&apos;s the band on the dial.
          </div>
        </div>

        {/* Staggered so the eye goes: dial → verdict → where you bled → what to
            do. All at once and the dial has to fight the CTA for attention;
            the reveal is the thing we made them work for. */}
        {worst.length > 0 && (
          <div className="card p-5 mb-4 rise-in" style={{ animationDelay: "1.9s" }}>
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
              {N_QUESTIONS} questions is a rough read, not a verdict — but weak topics show up fast, and this is
              where your next hours are worth the most.
            </p>
          </div>
        )}

        {/* Say the size before they click. They've just done the check —
            an unlabelled button that turns out to be another 20 is a betrayal
            of a tired person. "5 questions, 2 minutes" is a promise you can
            keep, and it's small enough to say yes to. */}
        <div className="rise-in" style={{ animationDelay: "2.15s" }}>
          <button onClick={buildPlan} className="btn-duo w-full" style={{ padding: "0.95rem" }}>
            {worst[0] ? `Fix ${worst[0].topicName} — 5 questions →` : "Build my plan and start →"}
          </button>
          <p className="text-xs text-center mt-3" style={{ color: "var(--text-muted)" }}>
            About two minutes. Free, no card. Then we&apos;ll leave you alone — 5 minutes a day is the whole idea.
          </p>
        </div>
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
              {N_QUESTIONS} real questions
              <br />
              from the <span style={{ color: "var(--primary)" }}>{exam.name}</span>.
            </div>
            <div
              className="text-sm mt-3"
              style={{ color: "var(--text-muted)", animation: "checkHookSub 1.9s ease forwards" }}
            >
              Let&apos;s see how many you get. Starting now.
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
