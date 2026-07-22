"use client";

// ============================================================
// /check — THE FUNNEL. Value-first, in five acts:
//
//   1. ASK about their problems   -> intake (4 taps)
//   2. FEEL UNDERSTOOD            -> reflection screen
//   3. SHOW HOW WE SOLVE IT       -> the 6-question diagnostic + their plan
//   4. WOW                        -> the readiness projection: them, passing
//   5. THEN the paywall           -> the 7-day trial, on a warm, seen lead
//
// The old flow dropped a cold stranger straight into questions. This one earns
// the ask: by the paywall, they've named their fear, been told we understand it,
// watched an honest arc of themselves clearing the pass line, and only THEN been
// asked for anything. It's the Noom pattern, applied to the CFA.
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
import {
  INTAKE_QUESTIONS,
  IntakeAnswers,
  buildReflection,
  projection,
  weeksToExam,
  Projection,
} from "@/lib/intake";
import { loadState, saveState } from "@/lib/gameStore";
import type { StudyPlan } from "@/lib/studyPlan";
import { N_QUESTIONS } from "@/lib/check";
import SignupModal from "@/components/SignupModal";
import { createClient } from "@/lib/supabase/client";
import { isPro } from "@/lib/access";

type Phase = "intake" | "reflect" | "quiz" | "result" | "projection";

export default function CheckPage() {
  return (
    <Suspense fallback={null}>
      <Check />
    </Suspense>
  );
}

// ---------- The score ring (unchanged: score vs the pass band, no fake odds) ----------
function ScoreRing({ pct, tone }: { pct: number; tone: string }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setShown(pct); return;
    }
    const DURATION = 1300; const start = performance.now(); let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      setShown(Math.round((1 - Math.pow(1 - t, 3)) * pct));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pct]);
  const SIZE = 190, R = 78, C = 2 * Math.PI * R, SWEEP = 0.75, arcLen = C * SWEEP, rot = 135;
  const passLow = (MPS_LOW / 100) * arcLen, passHigh = (MPS_HIGH / 100) * arcLen;
  return (
    <div className="relative mx-auto" style={{ width: SIZE, height: SIZE }}>
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} style={{ transform: `rotate(${rot}deg)` }}>
        <circle cx={SIZE/2} cy={SIZE/2} r={R} fill="none" stroke="var(--border)" strokeWidth={13} strokeLinecap="round" strokeDasharray={`${arcLen} ${C}`} />
        <circle cx={SIZE/2} cy={SIZE/2} r={R} fill="none" stroke="var(--text-muted)" strokeWidth={13} opacity={0.32} strokeDasharray={`${passHigh - passLow} ${C}`} strokeDashoffset={-passLow} />
        <circle cx={SIZE/2} cy={SIZE/2} r={R} fill="none" stroke={tone} strokeWidth={13} strokeLinecap="round" strokeDasharray={`${(shown/100)*arcLen} ${C}`} style={{ transition: "stroke 0.4s ease" }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-display" style={{ fontSize: 52, lineHeight: 1, color: tone }}>{shown}%</div>
        <div className="text-[10px] font-semibold uppercase tracking-wider mt-1" style={{ color: "var(--text-muted)" }}>your score</div>
      </div>
    </div>
  );
}

// ---------- STEP 4: the projection. Their readiness arc crossing the pass line. ----------
function ProjectionChart({ proj, examName, examDateLabel }: { proj: Projection; examName: string; examDateLabel: string }) {
  const W = 520, H = 280, padL = 44, padR = 24, padT = 20, padB = 42;
  const x = (wk: number) => padL + (wk / Math.max(1, proj.weeks)) * (W - padL - padR);
  const y = (pct: number) => padT + (1 - pct / 100) * (H - padT - padB);
  const midPath = proj.points.map((p, i) => `${i ? "L" : "M"} ${x(p.week).toFixed(1)} ${y(p.mid).toFixed(1)}`).join(" ");
  // band polygon: highs forward, lows back
  const band = [
    ...proj.points.map((p) => `${x(p.week).toFixed(1)},${y(p.high).toFixed(1)}`),
    ...[...proj.points].reverse().map((p) => `${x(p.week).toFixed(1)},${y(p.low).toFixed(1)}`),
  ].join(" ");
  const pathLen = 800; // approx, for the draw-on animation
  const passY = y((MPS_LOW + MPS_HIGH) / 2);
  const passX = proj.passWeek !== null ? x(proj.passWeek) : null;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
      {/* pass band */}
      <rect x={padL} y={y(MPS_HIGH)} width={W - padL - padR} height={y(MPS_LOW) - y(MPS_HIGH)} fill="var(--ats-green-bg)" />
      <text x={W - padR} y={passY - 6} textAnchor="end" fontSize="11" fontWeight="700" fill="var(--ats-green)">PASS ZONE</text>
      {/* readiness band */}
      <polygon points={band} fill="var(--primary)" opacity="0.14" className="proj-fade" style={{ animationDelay: "0.3s" }} />
      {/* the climb */}
      <path d={midPath} fill="none" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round"
        className="proj-line" style={{ strokeDasharray: pathLen, ["--len" as string]: pathLen }} />
      {/* start dot */}
      <circle cx={x(0)} cy={y(proj.startPct)} r="7" fill="var(--ats-red)" stroke="#fff" strokeWidth="2.5" />
      <text x={x(0)} y={y(proj.startPct) + 30} textAnchor="start" fontSize="11" fontWeight="700" fill="var(--text-secondary)">You today · {proj.startPct}%</text>
      {/* pass marker */}
      {passX !== null && (
        <g className="proj-fade" style={{ animationDelay: "1.5s" }}>
          <line x1={passX} y1={passY} x2={passX} y2={H - padB} stroke="var(--ats-green)" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx={passX} cy={passY} r="7" fill="var(--ats-green)" stroke="#fff" strokeWidth="2.5" />
        </g>
      )}
      {/* axis ends */}
      <text x={padL} y={H - 16} textAnchor="start" fontSize="11" fill="var(--text-muted)">Today</text>
      <text x={W - padR} y={H - 16} textAnchor="end" fontSize="11" fill="var(--text-muted)">{examDateLabel}</text>
    </svg>
  );
}

function Check() {
  const params = useSearchParams();
  const router = useRouter();
  const examSlug = params.get("exam") || "cfa";
  const exam = getExam(examSlug);

  const [phase, setPhase] = useState<Phase>("intake");
  const [intakeIdx, setIntakeIdx] = useState(0);
  const [intake, setIntake] = useState<IntakeAnswers>({});

  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [pendingDest, setPendingDest] = useState<string | null>(null);

  // /check is outside (app), so no AccessProvider — read the session directly.
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    let alive = true;
    createClient().auth.getSession().then(({ data }) => { if (alive) setSignedIn(!!data.session); }).catch(() => {});
    return () => { alive = false; };
  }, []);

  const questions = useMemo<Question[]>(() => {
    const all = getQuestions(examSlug);
    const byTopic = new Map<string, Question[]>();
    all.forEach((q) => { const l = byTopic.get(q.topicId) ?? []; l.push(q); byTopic.set(q.topicId, l); });
    const topics = [...byTopic.keys()]; const out: Question[] = []; let i = 0;
    while (out.length < N_QUESTIONS && topics.length > 0) {
      const t = topics[i % topics.length]; const pool = byTopic.get(t)!;
      const q = pool[Math.floor(Math.random() * pool.length)];
      if (q && !out.find((x) => x.id === q.id)) out.push(q);
      i++; if (i > 400) break;
    }
    return out.slice(0, N_QUESTIONS);
  }, [examSlug]);

  useEffect(() => { posthog.capture("check_viewed", { exam: examSlug }); }, [examSlug]);

  const q = questions[idx];

  function pickIntake(choiceId: string) {
    const qid = INTAKE_QUESTIONS[intakeIdx].id;
    const nextAnswers = { ...intake, [qid]: choiceId };
    setIntake(nextAnswers);
    if (intakeIdx + 1 >= INTAKE_QUESTIONS.length) {
      posthog.capture("check_intake_done", { exam: examSlug, ...nextAnswers });
      setPhase("reflect");
    } else {
      setIntakeIdx(intakeIdx + 1);
    }
  }

  function submit(all: (number | null)[]) {
    let correct = 0;
    const topics = new Map<string, WeakTopic>();
    questions.forEach((qq, i) => {
      const right = all[i] === qq.answerIndex; if (right) correct++;
      const t = topics.get(qq.topicId) ?? { topicId: qq.topicId, topicName: qq.topicName, correct: 0, total: 0, pct: 0 };
      t.total++; if (right) t.correct++; t.pct = Math.round((t.correct / t.total) * 100);
      topics.set(qq.topicId, t);
    });
    const r: DiagnosticResult = {
      examSlug, correct, total: questions.length,
      pct: Math.round((correct / questions.length) * 100),
      weakTopics: [...topics.values()].sort((a, b) => a.pct - b.pct),
      date: new Date().toISOString().slice(0, 10),
    };
    saveDiagnostic(r); setResult(r); setPhase("result");
    posthog.capture("check_completed", { exam: examSlug, pct: r.pct });
  }

  function next() {
    const all = [...answers, picked]; setAnswers(all); setPicked(null);
    if (idx + 1 >= questions.length) submit(all); else setIdx(idx + 1);
  }

  function savePlan(dest: string) {
    if (!exam || !result) return;
    const level = exam.levels[0];
    const d = new Date(); d.setDate(d.getDate() + weeksToExam(intake) * 7);
    const plan: StudyPlan = {
      examSlug: exam.slug, examName: exam.name, levelId: level.id, levelName: level.name,
      examDate: d.toISOString().slice(0, 10), targetHours: level.recommendedHours,
      startDate: new Date().toISOString().slice(0, 10), accent: exam.accent,
    };
    try {
      const state = loadState();
      saveState({ ...state, plans: [plan, ...(state.plans ?? []).filter((p) => p.examSlug !== plan.examSlug)] });
      localStorage.setItem("certus_onboarded", "1");
    } catch {}
    posthog.capture("check_plan_built", { exam: examSlug, pct: result.pct, next: dest });
  }

  // Step 5: the trial. Guest → signup (carrying to billing); signed-in/pro → straight there.
  function startTrial() {
    savePlan("/billing");
    if (signedIn || isPro()) { router.push("/billing"); return; }
    setPendingDest("/billing");
    posthog.capture("signup_gate_shown", { exam: examSlug, trigger: "check_to_trial" });
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

  // ================= 1. INTAKE =================
  if (phase === "intake") {
    const iq = INTAKE_QUESTIONS[intakeIdx];
    return shell(
      <div className="rise-in" key={intakeIdx}>
        <div className="flex items-center gap-1.5 mb-6 pt-2">
          {INTAKE_QUESTIONS.map((_, i) => (
            <div key={i} style={{ height: 5, flex: 1, borderRadius: 99, background: i <= intakeIdx ? "var(--primary)" : "var(--primary-light)" }} />
          ))}
        </div>
        <div className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          {intakeIdx === 0 ? "Let's build your plan" : `Question ${intakeIdx + 1} of ${INTAKE_QUESTIONS.length}`}
        </div>
        <h1 className="font-display mb-6" style={{ fontSize: 30, lineHeight: 1.2, color: "var(--text-primary)" }}>{iq.prompt}</h1>
        <div className="flex flex-col gap-2.5">
          {iq.choices.map((c) => (
            <button key={c.id} onClick={() => pickIntake(c.id)} className="ob-opt" style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
              <span>{c.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ================= 2. FEEL UNDERSTOOD =================
  if (phase === "reflect") {
    const r = buildReflection(intake);
    return shell(
      <div className="rise-in pt-6">
        <div className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--primary)" }}>Here&apos;s what I&apos;m seeing</div>
        <h1 className="font-display mb-4" style={{ fontSize: 27, lineHeight: 1.3, color: "var(--text-primary)" }}>{r.headline}</h1>
        <p className="text-base mb-8" style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>{r.body}</p>
        <div className="card p-4 mb-8" style={{ background: "var(--primary-light)", border: "0.5px solid rgba(83,74,183,0.2)" }}>
          <p className="text-sm" style={{ color: "var(--text-primary)", lineHeight: 1.55 }}>
            Let&apos;s find your exact gaps. {N_QUESTIONS} real {exam.name} questions — about 3 minutes. No card, no signup.
          </p>
        </div>
        <button onClick={() => { setPhase("quiz"); posthog.capture("check_started", { exam: examSlug }); }} className="btn-duo w-full" style={{ padding: "0.95rem" }}>
          Show me where I stand →
        </button>
      </div>
    );
  }

  // ================= 3. DIAGNOSTIC =================
  if (phase === "quiz") {
    return shell(
      <div>
        <div className="flex items-center justify-between mb-2 pt-2">
          <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>{idx + 1} of {questions.length}</span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>No card · no signup</span>
        </div>
        <div style={{ height: 6, borderRadius: 99, background: "var(--primary-light)", marginBottom: 22 }}>
          <div style={{ height: "100%", width: `${(idx / questions.length) * 100}%`, background: "var(--primary)", borderRadius: 99, transition: "width .3s ease" }} />
        </div>
        <h2 className="font-display mb-5" style={{ fontSize: 19, lineHeight: 1.45, color: "var(--text-primary)" }}>{q.stem}</h2>
        <div className="flex flex-col gap-2.5 mb-6">
          {q.choices.map((c, i) => (
            <button key={i} onClick={() => setPicked(i)} className="ob-opt"
              style={{ borderColor: picked === i ? "var(--primary)" : "var(--border)", background: picked === i ? "var(--primary-light)" : "var(--bg-card)" }}>
              <span className="ob-num">{String.fromCharCode(65 + i)}</span><span>{c}</span>
            </button>
          ))}
        </div>
        <button onClick={next} disabled={picked === null} className="btn-duo w-full" style={{ padding: "0.9rem", opacity: picked === null ? 0.5 : 1 }}>
          {idx + 1 >= questions.length ? "See my result" : "Next"}
        </button>
        <p className="text-xs text-center mt-3" style={{ color: "var(--text-muted)" }}>
          We don&apos;t show answers as you go — that&apos;s what makes the score mean something.
        </p>
      </div>
    );
  }

  // ================= 4a. RESULT (ring + gaps) =================
  if (phase === "result" && result) {
    const v = verdict(result.pct);
    const worst = result.weakTopics.filter((t) => t.pct < 100).slice(0, 3);
    const tone = v.tone === "good" ? "var(--ats-green)" : v.tone === "close" ? "var(--ats-amber)" : "var(--ats-red)";
    return shell(
      <div className="rise-in">
        <div className="card p-6 mb-4 text-center">
          <div className="text-[11px] font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>If you took {exam.name} today</div>
          <ScoreRing pct={result.pct} tone={tone} />
          <div className="text-base mt-4 font-semibold rise-in" style={{ color: "var(--text-primary)", animationDelay: "1.5s" }}>{v.label}</div>
          <div className="text-xs mt-1.5 rise-in" style={{ color: "var(--text-muted)", animationDelay: "1.65s" }}>
            You got {result.correct} of {result.total}. The pass mark sits around {MPS_LOW}–{MPS_HIGH}% — the band on the dial.
          </div>
        </div>
        {worst.length > 0 && (
          <div className="card p-5 mb-4 rise-in" style={{ animationDelay: "1.9s" }}>
            <div className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>This is where you bled points</div>
            {worst.map((t) => (
              <div key={t.topicId} className="flex items-center justify-between py-1.5">
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{t.topicName}</span>
                <span className="text-sm font-mono font-semibold" style={{ color: t.pct === 0 ? "var(--ats-red)" : "var(--text-primary)" }}>{t.correct}/{t.total}</span>
              </div>
            ))}
          </div>
        )}
        <div className="rise-in" style={{ animationDelay: "2.15s" }}>
          <button onClick={() => { setPhase("projection"); posthog.capture("check_projection_shown", { exam: examSlug, pct: result.pct }); }} className="btn-duo w-full" style={{ padding: "0.95rem" }}>
            See your path to passing →
          </button>
        </div>
      </div>
    );
  }

  // ================= 4b. THE WOW + 5. PAYWALL =================
  if (phase === "projection" && result) {
    const weeks = weeksToExam(intake);
    const proj = projection(result.pct, weeks);
    const d = new Date(); d.setDate(d.getDate() + weeks * 7);
    const examDateLabel = weeks >= 20 ? "Exam" : d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const passDate = proj.passWeek !== null ? (() => { const pd = new Date(); pd.setDate(pd.getDate() + proj.passWeek * 7); return pd.toLocaleDateString("en-US", { month: "long", day: "numeric" }); })() : null;
    const worst = result.weakTopics.filter((t) => t.pct < 100).slice(0, 3);
    return shell(
      <div className="rise-in">
        <h1 className="font-display mb-1" style={{ fontSize: 28, lineHeight: 1.25, color: "var(--text-primary)" }}>Here&apos;s your path to passing.</h1>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
          {proj.reachesPass && passDate
            ? <>At ~15 minutes a day on your weak topics, you clear the pass band around <strong style={{ color: "var(--ats-green)" }}>{passDate}</strong>.</>
            : <>You&apos;re close. A focused daily rep on your weak topics moves this fast.</>}
        </p>
        <div className="card p-4 mb-5">
          <ProjectionChart proj={proj} examName={exam.name} examDateLabel={examDateLabel} />
        </div>

        {worst.length > 0 && (
          <p className="text-sm mb-5" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Your plan drills <strong style={{ color: "var(--text-primary)" }}>{worst.map((t) => t.topicName).join(", ")}</strong> first —
            the exact topics you just bled points on — with questions that explain <em>why</em> you missed.
          </p>
        )}

        {/* Step 5 — THE PAYWALL, on a warm lead. */}
        <div className="card p-5 mb-3" style={{ border: "2px solid var(--primary)" }}>
          <div className="flex items-baseline justify-between mb-1">
            <span className="text-base font-extrabold" style={{ color: "var(--text-primary)" }}>Start your plan</span>
            <span className="font-display text-2xl" style={{ color: "var(--ats-green)" }}>$0 today</span>
          </div>
          <p className="text-xs mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
            7 days free — every reading, unlimited reps, unlimited mocks. Then $9.58/mo billed yearly, or $24.99 month to month. Cancel any time in one click.
          </p>
          <button onClick={startTrial} className="btn-duo w-full" style={{ padding: "0.9rem" }}>Start my 7 free days →</button>
        </div>
        <button
          onClick={() => { savePlan("/dashboard"); router.push("/dashboard"); }}
          className="btn-duo duo-ghost w-full"
          style={{ padding: "0.7rem", fontSize: "0.85rem" }}
        >
          Keep exploring free
        </button>

        <SignupModal
          open={pendingDest !== null}
          trigger="check_to_trial"
          title="One step — save your plan"
          reason={`You scored ${result.pct}%. Make a free account so we keep your plan, your streak, and this projection — then start your trial.`}
          onClose={() => { posthog.capture("signup_gate_dismissed", { exam: examSlug, trigger: "check_to_trial" }); setPendingDest(null); }}
          onSuccess={() => { const dest = pendingDest ?? "/billing"; setPendingDest(null); router.push(dest); }}
        />
      </div>
    );
  }

  return shell(null);
}
