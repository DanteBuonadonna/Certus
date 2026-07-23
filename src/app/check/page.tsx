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
  buildIntakeQuestions,
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

type Phase = "intake" | "reflect" | "quiz" | "result" | "showcase" | "projection";

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

// ---------- STEP 4: the projection — THE WOW. ----------
// v2, after v1 shipped a solid purple slab crawling toward failure. Rules:
//   - ONE line. The confidence band polygon is gone — it rendered as a blob
//     (a fade-to-opacity-1 animation stomped its 10% opacity) and even fixed
//     it was clutter. Honesty lives in the caption instead.
//   - The line ALWAYS reaches the pass zone. projection() extends the
//     timeline past exam day when needed, and the exam becomes a dashed
//     milestone the line passes through. No more charts of failure.
//   - Three animation beats, not six: area+line draw (2s) → exam milestone →
//     YOU PASS badge. Previewed as rendered PNGs at 17%/3wk and 48%/7wk
//     before porting (case_low.png / case_mid.png).
function ProjectionChart({ proj, examDateLabel, passDateLabel }: { proj: Projection; examDateLabel: string; passDateLabel: string }) {
  const W = 520, H = 300, padL = 26, padR = 20, padT = 44, padB = 52;
  const endPct = proj.points[proj.points.length - 1].mid;
  // Crop the y-domain so the climb reads steep: floor just under today's
  // score, ceiling just above wherever the line ends.
  const YMIN = Math.max(0, proj.startPct - 8);
  const YMAX = Math.max(MPS_HIGH + 8, endPct + 6);
  const x = (wk: number) => padL + (wk / Math.max(1, proj.weeks)) * (W - padL - padR);
  const y = (pct: number) => padT + (1 - (pct - YMIN) / (YMAX - YMIN)) * (H - padT - padB);
  const midPath = proj.points.map((p, i) => `${i ? "L" : "M"} ${x(p.week).toFixed(1)} ${y(p.mid).toFixed(1)}`).join(" ");
  const areaPath = `${midPath} L ${x(proj.weeks).toFixed(1)} ${H - padB} L ${x(0).toFixed(1)} ${H - padB} Z`;
  const pathLen = 900;
  const extended = proj.examWeek < proj.weeks; // crossing lands after exam day
  const passX = proj.passWeek !== null ? x(proj.passWeek) : null;
  const passY = proj.passWeek !== null ? y(proj.points[proj.passWeek].mid) : null;
  const examX = x(proj.examWeek), examY = y(proj.points[proj.examWeek].mid);
  // Chips clamp on-chart; the badge pointer tracks the dot even when clamped.
  const todayChipX = Math.max(padL, x(0) + 2);
  const BW = 132;
  const badgeX = passX !== null ? Math.min(Math.max(passX - BW / 2, padL), W - padR - BW) : 0;
  const ptrX = passX !== null ? Math.min(Math.max(passX - badgeX, 14), BW - 14) : 0;
  const examChipX = Math.min(Math.max(examX - 54, padL), W - padR - 108);
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
      <defs>
        <linearGradient id="pj-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--ats-red)" />
          <stop offset="45%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--ats-green)" />
        </linearGradient>
        <linearGradient id="pj-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.13" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pj-zone" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--ats-green)" stopOpacity="0.09" />
          <stop offset="100%" stopColor="var(--ats-green)" stopOpacity="0.18" />
        </linearGradient>
        <filter id="pj-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* honesty caption */}
      <text x={padL} y={padT - 16} fontSize="11.5" fontWeight="600" fill="var(--text-muted)">
        Projected readiness at ~15 min/day of targeted reps
      </text>

      {/* pass zone */}
      <rect x={padL} y={y(MPS_HIGH)} width={W - padL - padR} height={y(MPS_LOW) - y(MPS_HIGH)} fill="url(#pj-zone)" />
      <line x1={padL} y1={y(MPS_LOW)} x2={W - padR} y2={y(MPS_LOW)} stroke="var(--ats-green)" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />
      <text x={padL + 4} y={y(MPS_HIGH) - 7} fontSize="11" fontWeight="800" letterSpacing="1.5" fill="var(--ats-green)">PASS ZONE</text>

      {/* the climb — area then the single gradient line, red today → green at the pass */}
      <path d={areaPath} fill="url(#pj-area)" className="proj-fade" style={{ animationDelay: "0.2s" }} />
      <path d={midPath} fill="none" stroke="url(#pj-line)" strokeWidth="5" strokeLinecap="round"
        className="proj-line" style={{ strokeDasharray: pathLen, ["--len" as string]: pathLen }} />

      {/* exam milestone — only when the crossing lands after exam day */}
      {extended && (
        <g className="proj-fade" style={{ animationDelay: "1.2s" }}>
          <line x1={examX} y1={padT + 4} x2={examX} y2={H - padB} stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
          <circle cx={examX} cy={examY} r="5.5" fill="var(--bg-card)" stroke="var(--primary)" strokeWidth="2.5" />
          <g transform={`translate(${examChipX},${padT - 4})`}>
            <rect width="108" height="22" rx="11" fill="var(--primary-light)" />
            <text x="54" y="15" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--primary)">EXAM · {examDateLabel}</text>
          </g>
        </g>
      )}

      {/* today */}
      <circle cx={x(0)} cy={y(proj.startPct)} r="8" fill="var(--ats-red)" stroke="var(--bg-card)" strokeWidth="3" />
      <g transform={`translate(${todayChipX},${Math.min(y(proj.startPct) + 16, H - padB - 40)})`}>
        <rect x="0" y="0" width="112" height="34" rx="9" fill="var(--ats-red-bg)" />
        <text x="10" y="15" fontSize="11.5" fontWeight="800" fill="var(--ats-red)">TODAY</text>
        <text x="10" y="29" fontSize="11.5" fontWeight="700" fill="var(--text-secondary)">{proj.startPct}% ready</text>
      </g>

      {/* THE MOMENT — you pass */}
      {passX !== null && passY !== null && (
        <g className="proj-fade" style={{ animationDelay: "1.8s" }}>
          <circle cx={passX} cy={passY} r="9" fill="var(--ats-green)" stroke="var(--bg-card)" strokeWidth="3" filter="url(#pj-glow)" />
          <g transform={`translate(${badgeX},${passY - 54})`}>
            <rect x="0" y="0" width={BW} height="38" rx="19" fill="var(--ats-green)" />
            <path d={`M ${ptrX - 6} 38 l 6 8 l 6 -8 z`} fill="var(--ats-green)" />
            <text x={BW / 2} y="24" textAnchor="middle" fontSize="15" fontWeight="800" fill="#ffffff">YOU PASS</text>
          </g>
        </g>
      )}

      {/* axis */}
      <text x={padL} y={H - 16} fontSize="13" fontWeight="700" fill="var(--text-muted)">Today</text>
      <text x={W - padR} y={H - 16} textAnchor="end" fontSize="13" fontWeight="700"
        fill={extended ? "var(--ats-green)" : "var(--text-muted)"}>
        {extended ? `You pass · ${passDateLabel}` : `Exam · ${examDateLabel}`}
      </text>
    </svg>
  );
}

// ============================================================
// THE PROOF SCREEN — one screen between the score and the projection.
//
// Replaced the 6-card animated story reel: it looked good but sold nothing
// (Dante's call, and he was right — features don't convince, futures do).
// This screen does exactly two things:
//   1. HERE'S HOW WE FIX IT — three concrete steps, aimed at THEIR weak topic.
//   2. HERE'S PROOF IT WORKS — the team that built Certus prepped with
//      nothing but Certus and passed CFA Levels I, II, and III. True story,
//      no invented statistics: we have no aggregate user data to chart, so
//      we don't chart any.
// ============================================================
function ProofScreen({ worstTopic, examName, isCfa, onNext }: { worstTopic: string; examName: string; isCfa: boolean; onNext: () => void }) {
  const steps = [
    {
      title: `Drill ${worstTopic} first`,
      body: "Your plan starts on the exact topics you just bled points on — with questions that explain why the wrong answers were tempting. That's where it sticks.",
    },
    {
      title: "15 focused minutes a day",
      body: "Short daily reps, built like a game — streaks, XP, a weekly league — so showing up stops taking willpower.",
    },
    {
      title: "Mock until you're in the pass zone",
      body: "Full timed mocks track your readiness, so you walk in on exam day already knowing you can pass.",
    },
  ];
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-wider mb-2 sc-rise" style={{ color: "var(--primary)" }}>The fix</div>
      <h2 className="font-display mb-6 sc-rise" style={{ fontSize: 27, lineHeight: 1.25, color: "var(--text-primary)", animationDelay: "0.08s" }}>
        Here&apos;s how we get you there.
      </h2>

      {steps.map((s, i) => (
        <div key={s.title} className="flex gap-3.5 mb-5 sc-rise" style={{ animationDelay: `${0.25 + i * 0.18}s` }}>
          <div className="flex-shrink-0 flex items-center justify-center font-extrabold"
            style={{ width: 34, height: 34, borderRadius: 12, background: "var(--primary-light)", color: "var(--primary)", fontSize: 15 }}>
            {i + 1}
          </div>
          <div>
            <div className="text-[15px] font-extrabold mb-0.5" style={{ color: "var(--text-primary)" }}>{s.title}</div>
            <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.55 }}>{s.body}</p>
          </div>
        </div>
      ))}

      {/* THE PROOF — the hope. A true story, not a fabricated stat. */}
      <div className="card p-5 mt-7 mb-6 sc-rise" style={{ animationDelay: "0.85s", background: "var(--primary-light)", border: "0.5px solid rgba(83,74,183,0.25)" }}>
        <div className="text-[11px] font-extrabold uppercase tracking-wider mb-2" style={{ color: "var(--primary)" }}>Does it work?</div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-display" style={{ fontSize: 40, lineHeight: 1, color: "var(--text-primary)" }}>2 months</span>
          <span className="text-sm font-bold" style={{ color: "var(--ats-green)" }}>to a pass</span>
        </div>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
          People have passed CFA Levels I, II, and III studying with nothing but Certus —
          in about two months per level.
        </p>
        <div className="flex gap-2">
          {["I", "II", "III"].map((lvl, i) => (
            <div key={lvl} className="flex-1 text-center py-2.5 rounded-xl sc-pop"
              style={{ animationDelay: `${1.15 + i * 0.22}s`, background: "var(--bg-card)", border: "1.5px solid var(--ats-green)" }}>
              <div className="text-[10px] font-extrabold tracking-wider" style={{ color: "var(--text-muted)" }}>LEVEL {lvl}</div>
              <div className="text-xs font-extrabold mt-0.5" style={{ color: "var(--ats-green)" }}>PASSED ✓</div>
            </div>
          ))}
        </div>
        {!isCfa && (
          <p className="text-xs mt-3.5" style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>
            Same machine, pointed at the {examName}: find the gaps, drill them, mock until ready.
          </p>
        )}
      </div>

      <button onClick={onNext} className="btn-duo w-full sc-rise" style={{ padding: "0.95rem", animationDelay: "1.1s" }}>
        Show me my path →
      </button>
    </div>
  );
}

function Check() {
  const params = useSearchParams();
  const router = useRouter();
  // ?exam= link pre-selects the exam; otherwise intake asks it as question 1
  // and everything downstream (fear labels, quiz questions, copy) adapts.
  const urlExam = params.get("exam");
  const [examSlug, setExamSlug] = useState(urlExam || "cfa");
  const exam = getExam(examSlug);

  const [phase, setPhase] = useState<Phase>("intake");
  const [intakeIdx, setIntakeIdx] = useState(0);
  const [intake, setIntake] = useState<IntakeAnswers>({});

  const intakeQs = useMemo(() => buildIntakeQuestions(examSlug, !urlExam), [examSlug, urlExam]);

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

  // Fires however they arrive (showcase completion or tap-through), so the
  // funnel step stays measurable now that the result button goes to the
  // showcase instead of straight here.
  useEffect(() => {
    if (phase === "projection" && result) {
      posthog.capture("check_projection_shown", { exam: examSlug, pct: result.pct });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const q = questions[idx];

  function pickIntake(choiceId: string) {
    const qid = intakeQs[intakeIdx].id;
    const nextAnswers = { ...intake, [qid]: choiceId };
    setIntake(nextAnswers);
    // The exam answer swaps the whole funnel onto that exam's track.
    if (qid === "exam") setExamSlug(choiceId);
    if (intakeIdx + 1 >= intakeQs.length) {
      posthog.capture("check_intake_done", { exam: qid === "exam" ? choiceId : examSlug, ...nextAnswers });
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
    const iq = intakeQs[intakeIdx];
    return shell(
      <div className="rise-in" key={intakeIdx}>
        <div className="flex items-center gap-1.5 mb-6 pt-2">
          {intakeQs.map((_, i) => (
            <div key={i} style={{ height: 5, flex: 1, borderRadius: 99, background: i <= intakeIdx ? "var(--primary)" : "var(--primary-light)" }} />
          ))}
        </div>
        <div className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
          {intakeIdx === 0 ? "Let's build your plan" : `Question ${intakeIdx + 1} of ${intakeQs.length}`}
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
    const r = buildReflection(intake, examSlug);
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
          <button
            onClick={() => {
              setPhase("showcase");
              posthog.capture("check_showcase_shown", { exam: examSlug, pct: result.pct });
            }}
            className="btn-duo w-full"
            style={{ padding: "0.95rem" }}
          >
            Here&apos;s how we fix it →
          </button>
        </div>
      </div>
    );
  }

  // ================= 4b. THE PROOF (how we fix it + why to believe us) =================
  if (phase === "showcase" && result) {
    const worstTopic = result.weakTopics.find((t) => t.pct < 100)?.topicName ?? "your weak topics";
    return shell(
      <div className="pt-4">
        <ProofScreen
          worstTopic={worstTopic}
          examName={exam.name}
          isCfa={examSlug.startsWith("cfa")}
          onNext={() => {
            posthog.capture("check_showcase_done", { exam: examSlug });
            setPhase("projection");
          }}
        />
      </div>
    );
  }

  // ================= 4b. THE WOW + 5. PAYWALL =================
  if (phase === "projection" && result) {
    const weeks = weeksToExam(intake);
    const proj = projection(result.pct, weeks);
    const d = new Date(); d.setDate(d.getDate() + weeks * 7);
    const examDateLabel = weeks >= 20 ? "Exam" : d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const passD = proj.passWeek !== null ? (() => { const pd = new Date(); pd.setDate(pd.getDate() + (proj.passWeek as number) * 7); return pd; })() : null;
    const passDate = passD ? passD.toLocaleDateString("en-US", { month: "long", day: "numeric" }) : null;
    const passDateLabel = passD ? `~${passD.toLocaleDateString("en-US", { month: "short", day: "numeric" })}` : "";
    const worst = result.weakTopics.filter((t) => t.pct < 100).slice(0, 3);
    return shell(
      <div className="rise-in">
        <h1 className="font-display mb-1" style={{ fontSize: 28, lineHeight: 1.25, color: "var(--text-primary)" }}>Here&apos;s your path to passing.</h1>
        <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
          {proj.reachesByExam && passDate
            ? <>At ~15 minutes a day on your weak topics, you clear the pass band around <strong style={{ color: "var(--ats-green)" }}>{passDate}</strong> — before your exam.</>
            : passDate
            ? <>At 15 minutes a day you&apos;d clear the pass band around <strong style={{ color: "var(--ats-green)" }}>{passDate}</strong> — after your exam. That gap is the whole game: more daily reps pulls that date left, and your plan is built to do exactly that.</>
            : <>Consistent daily reps on your weak topics move this number fast — here&apos;s the honest trajectory.</>}
        </p>
        <div className="card p-4 mb-5">
          <ProjectionChart proj={proj} examDateLabel={examDateLabel} passDateLabel={passDateLabel} />
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
