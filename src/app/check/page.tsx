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
import StreakFlame from "@/components/StreakFlame";
import { Coin } from "@/components/Coin";
import AssociateCharacter from "@/components/Associate";
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
// Design was iterated as rendered images before porting (see wow_preview.png):
// cropped y-domain so the climb reads steep, gradient stroke red→purple→green
// (you literally watch your colour change as you improve), glowing YOU PASS
// badge at the crossing, TODAY and end-state chips. Honesty preserved: the
// shaded band is the realistic range, and the caption says "~15 min/day".
function ProjectionChart({ proj, examDateLabel }: { proj: Projection; examDateLabel: string }) {
  const W = 520, H = 330, padL = 20, padR = 20, padT = 46, padB = 56;
  // Crop the y-domain: full 0-100 made a 30-point climb look flat. Keep the
  // start dot comfortably on-chart even for very low scores.
  const YMIN = Math.min(35, Math.max(0, proj.startPct - 10));
  const YMAX = 92;
  const x = (wk: number) => padL + (wk / Math.max(1, proj.weeks)) * (W - padL - padR);
  const y = (pct: number) => padT + (1 - (pct - YMIN) / (YMAX - YMIN)) * (H - padT - padB);
  const midPath = proj.points.map((p, i) => `${i ? "L" : "M"} ${x(p.week).toFixed(1)} ${y(p.mid).toFixed(1)}`).join(" ");
  const areaPath = `${midPath} L ${x(proj.weeks).toFixed(1)} ${H - padB} L ${x(0).toFixed(1)} ${H - padB} Z`;
  const band = [
    ...proj.points.map((p) => `${x(p.week).toFixed(1)},${y(Math.min(YMAX, p.high)).toFixed(1)}`),
    ...[...proj.points].reverse().map((p) => `${x(p.week).toFixed(1)},${y(Math.max(YMIN, p.low)).toFixed(1)}`),
  ].join(" ");
  const pathLen = 900;
  const passX = proj.passWeek !== null ? x(proj.passWeek) : null;
  const passY = proj.passWeek !== null ? y(proj.points[proj.passWeek].mid) : null;
  const endX = x(proj.weeks), endY = y(proj.points[proj.points.length - 1].mid);
  const endPct = proj.points[proj.points.length - 1].mid;
  const weekTicks = Array.from({ length: Math.floor(proj.weeks / 2) + 1 }, (_, i) => i * 2).filter((w) => w <= proj.weeks);
  // Keep the TODAY chip on-chart when the start dot is near the left edge.
  const todayChipX = Math.max(padL, x(0) + 2);
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
      <defs>
        <linearGradient id="pj-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--ats-red)" />
          <stop offset="45%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--ats-green)" />
        </linearGradient>
        <linearGradient id="pj-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pj-zone" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--ats-green)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--ats-green)" stopOpacity="0.20" />
        </linearGradient>
        <filter id="pj-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* honesty caption */}
      <text x={padL} y={padT - 14} fontSize="11.5" fontWeight="600" fill="var(--text-muted)">
        Projected readiness at ~15 min/day · shaded = realistic range
      </text>

      {/* pass zone */}
      <rect x={padL} y={y(MPS_HIGH)} width={W - padL - padR} height={y(MPS_LOW) - y(MPS_HIGH)} fill="url(#pj-zone)" />
      <line x1={padL} y1={y(MPS_LOW)} x2={W - padR} y2={y(MPS_LOW)} stroke="var(--ats-green)" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />
      <text x={padL + 4} y={y(MPS_HIGH) - 7} fontSize="12" fontWeight="800" letterSpacing="1.5" fill="var(--ats-green)">PASS ZONE</text>

      {/* week ticks */}
      {weekTicks.map((w) => (
        <line key={w} x1={x(w)} y1={H - padB} x2={x(w)} y2={H - padB + 5} stroke="var(--border-strong)" strokeWidth="1.5" />
      ))}

      {/* confidence band + area */}
      <polygon points={band} fill="var(--primary)" opacity="0.10" className="proj-fade" style={{ animationDelay: "0.3s" }} />
      <path d={areaPath} fill="url(#pj-area)" className="proj-fade" style={{ animationDelay: "0.3s" }} />

      {/* THE CLIMB — red at today, green by the pass */}
      <path d={midPath} fill="none" stroke="url(#pj-line)" strokeWidth="5" strokeLinecap="round"
        className="proj-line" style={{ strokeDasharray: pathLen, ["--len" as string]: pathLen }} />

      {/* today */}
      <circle cx={x(0)} cy={y(proj.startPct)} r="8" fill="var(--ats-red)" stroke="var(--bg-card)" strokeWidth="3" />
      <g transform={`translate(${todayChipX},${Math.min(y(proj.startPct) + 18, H - padB - 40)})`}>
        <rect x="0" y="0" width="118" height="34" rx="9" fill="var(--ats-red-bg)" />
        <text x="10" y="15" fontSize="12" fontWeight="800" fill="var(--ats-red)">TODAY</text>
        <text x="10" y="29" fontSize="12" fontWeight="700" fill="var(--text-secondary)">{proj.startPct}% ready</text>
      </g>

      {/* THE MOMENT — you pass */}
      {passX !== null && passY !== null && (
        <g className="proj-fade" style={{ animationDelay: "1.6s" }}>
          <line x1={passX} y1={passY} x2={passX} y2={H - padB} stroke="var(--ats-green)" strokeWidth="2" strokeDasharray="4 4" opacity="0.55" />
          <circle cx={passX} cy={passY} r="9" fill="var(--ats-green)" stroke="var(--bg-card)" strokeWidth="3" filter="url(#pj-glow)" />
          <g transform={`translate(${Math.min(Math.max(passX - 66, padL), W - padR - 132)},${passY - 54})`}>
            <rect x="0" y="0" width="132" height="38" rx="19" fill="var(--ats-green)" />
            <path d={`M 60 38 l 6 8 l 6 -8 z`} fill="var(--ats-green)" />
            <text x="66" y="24" textAnchor="middle" fontSize="15" fontWeight="800" fill="#ffffff">YOU PASS</text>
          </g>
          {proj.passWeek !== null && (
            <text x={passX} y={H - 18} textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--ats-green)">Week {proj.passWeek}</text>
          )}
        </g>
      )}

      {/* end of line */}
      <circle cx={endX} cy={endY} r="6.5" fill="var(--primary)" stroke="var(--bg-card)" strokeWidth="2.5" className="proj-fade" style={{ animationDelay: "1.9s" }} />
      <g className="proj-fade" style={{ animationDelay: "1.9s" }} transform={`translate(${endX - 100},${endY - 46})`}>
        <rect x="0" y="0" width="96" height="28" rx="8" fill="var(--primary-light)" />
        <text x="48" y="19" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--primary)">{endPct}% ready</text>
      </g>

      {/* axis */}
      <text x={padL} y={H - 18} fontSize="13" fontWeight="700" fill="var(--text-muted)">Today</text>
      <text x={W - padR} y={H - 18} textAnchor="end" fontSize="13" fontWeight="700" fill="var(--text-muted)">Exam · {examDateLabel}</text>
    </svg>
  );
}

// ============================================================
// THE SHOWCASE — a story-style reel between the score and the projection.
//
// Not a feature tour. Four tap-through cards, Instagram-story chrome
// (progress bars, auto-advance, tap anywhere to skip forward), and every card
// is PERSONALIZED to the result they just got — "here's how we fix Ethics",
// not "here's our challenge mode". The visuals are the app's real UI
// primitives animating (question card, streak flame, league podium, boss HP),
// because the product demoing itself beats any illustration.
// ============================================================
// Per-card pacing, Apple-keynote style: most cards get a full beat, the tutor a
// touch longer (its typing animation needs room), the shop deliberately quick —
// a flash of reward, not a pitch.
const SHOWCASE_DURATIONS = [3600, 4200, 3600, 3600, 2400, 3600];

function ShowcaseCard1({ topic }: { topic: string }) {
  // A question card answers itself: pick → green flash → "why" glows → +XP.
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-wider mb-2 sc-rise" style={{ color: "var(--primary)" }}>Step 1 · Targeted reps</div>
      <h2 className="font-display mb-5 sc-rise" style={{ fontSize: 26, lineHeight: 1.25, color: "var(--text-primary)", animationDelay: "0.1s" }}>
        We drill <span style={{ color: "var(--primary)" }}>{topic}</span> until it pays you back.
      </h2>
      <div className="card p-4 sc-rise" style={{ animationDelay: "0.25s" }}>
        <div className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>Which statement is most accurate?</div>
        {["A", "B", "C"].map((l, i) => (
          <div key={l} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl mb-2"
            style={{
              border: i === 1 ? "2px solid var(--ats-green)" : "1.5px solid var(--border)",
              animation: i === 1 ? "scFlash 0.6s ease 1.1s forwards" : undefined,
              background: "var(--bg-card)",
            }}>
            <span className="text-xs font-extrabold" style={{ color: i === 1 ? "var(--ats-green)" : "var(--text-muted)" }}>{l}</span>
            <span className="flex-1" style={{ height: 10, borderRadius: 99, background: "var(--primary-light)" }} />
            {i === 1 && (
              <span className="sc-pop" style={{ animationDelay: "1.3s", color: "var(--ats-green)", fontWeight: 800 }}>✓</span>
            )}
          </div>
        ))}
        <div className="px-3 py-2.5 rounded-xl sc-rise" style={{ animationDelay: "1.7s", background: "var(--primary-light)" }}>
          <span className="text-xs font-bold" style={{ color: "var(--primary)" }}>WHY: </span>
          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>every question explains why the wrong answers were tempting — that&apos;s where it sticks.</span>
        </div>
      </div>
      <div className="relative h-8">
        <span className="absolute right-2 top-0 text-sm font-extrabold" style={{ color: "var(--gold)", animation: "scXp 1.4s ease 1.4s forwards", opacity: 0 }}>+10 XP</span>
      </div>
    </div>
  );
}

function ShowcaseCardTutor() {
  // The Associate answers a question you'd actually ask, typing dots included.
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-wider mb-2 sc-rise" style={{ color: "var(--primary)" }}>Step 2 · Never stuck</div>
      <h2 className="font-display mb-5 sc-rise" style={{ fontSize: 26, lineHeight: 1.25, color: "var(--text-primary)", animationDelay: "0.1s" }}>
        Stuck? The Associate explains it — from the exact question you&apos;re on.
      </h2>
      <div className="flex justify-end mb-2 sc-rise" style={{ animationDelay: "0.3s" }}>
        <div className="px-3.5 py-2.5 rounded-2xl text-sm" style={{ background: "var(--primary)", color: "#fff", borderBottomRightRadius: 6, maxWidth: "80%" }}>
          Why is my answer wrong?
        </div>
      </div>
      <div className="flex items-end gap-2 sc-rise" style={{ animationDelay: "0.7s" }}>
        <span className="flex-shrink-0"><AssociateCharacter size={38} /></span>
        <div className="px-3.5 py-2.5 rounded-2xl" style={{ background: "var(--bg-card)", border: "0.5px solid var(--border)", borderBottomLeftRadius: 6, maxWidth: "84%" }}>
          {/* typing dots hold the beat, then the answer lands */}
          <span className="sc-rise" style={{ animationDelay: "0.8s", display: "inline-flex", gap: 4 }}>
            <span className="sc-dot" /><span className="sc-dot" style={{ animationDelay: "0.15s" }} /><span className="sc-dot" style={{ animationDelay: "0.3s" }} />
          </span>
          <div className="text-sm sc-rise" style={{ animationDelay: "1.7s", color: "var(--text-primary)", lineHeight: 1.5 }}>
            You picked the <strong>coupon rate</strong> — the question asks for <strong>yield</strong>.
            When price falls, yield rises. Want a similar one to try?
          </div>
        </div>
      </div>
      <p className="text-xs text-center mt-6 sc-rise" style={{ animationDelay: "2.6s", color: "var(--text-muted)" }}>
        It sees what you&apos;re working on. No copy-pasting into ChatGPT.
      </p>
    </div>
  );
}

function ShowcaseCardShop() {
  // Quick beat: earn coins, spend coins. A flash of reward, in and out.
  return (
    <div className="text-center">
      <div className="text-[11px] font-semibold uppercase tracking-wider mb-2 sc-rise" style={{ color: "var(--gold)" }}>Step 5 · Get paid to study</div>
      <h2 className="font-display mb-6 sc-rise" style={{ fontSize: 26, lineHeight: 1.25, color: "var(--text-primary)", animationDelay: "0.08s" }}>
        Every rep earns Comp. Spend it on your character.
      </h2>
      <div className="flex items-center justify-center gap-2 sc-pop" style={{ animationDelay: "0.25s" }}>
        <Coin size={30} spin />
        <span className="font-display text-3xl" style={{ color: "var(--gold)" }}>3,180</span>
      </div>
      <div className="flex justify-center gap-3 mt-6">
        {["🕶️", "👔", "🎩"].map((e, i) => (
          <div key={e} className="card sc-pop flex items-center justify-center" style={{ width: 76, height: 76, fontSize: 34, animationDelay: `${0.45 + i * 0.14}s`, position: "relative", overflow: "hidden" }}>
            {e}
            <span style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)", animation: `scSheen 1.1s ease ${0.8 + i * 0.14}s both` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ShowcaseCard2() {
  return (
    <div className="text-center">
      <div className="text-[11px] font-semibold uppercase tracking-wider mb-2 sc-rise" style={{ color: "var(--ats-amber)" }}>Step 3 · The habit</div>
      <h2 className="font-display mb-6 sc-rise" style={{ fontSize: 26, lineHeight: 1.25, color: "var(--text-primary)", animationDelay: "0.1s" }}>
        15 minutes a day. The streak does the discipline for you.
      </h2>
      <div className="sc-pop" style={{ animationDelay: "0.3s", display: "inline-block" }}>
        <StreakFlame streak={7} size={92} />
      </div>
      <div className="font-display text-3xl mt-1 sc-pop" style={{ color: "var(--ats-amber)", animationDelay: "0.45s" }}>7-day streak</div>
      <div className="flex justify-center gap-2 mt-5">
        {[0,1,2,3,4,5,6].map((d) => (
          <span key={d} className="sc-pop" style={{
            animationDelay: `${0.55 + d * 0.12}s`,
            width: 30, height: 30, borderRadius: 10, display: "inline-flex", alignItems: "center", justifyContent: "center",
            background: "var(--ats-green)", color: "#fff", fontWeight: 800, fontSize: 13,
          }}>✓</span>
        ))}
      </div>
      <p className="text-xs mt-5 sc-rise" style={{ color: "var(--text-muted)", animationDelay: "1.5s" }}>
        Miss a day? Streak freezes have your back.
      </p>
    </div>
  );
}

function ShowcaseCard3() {
  // League podium: bars grow, you take #2 with a nudge that #1 is reachable.
  const bars = [
    { h: 84, label: "3rd", c: "var(--border-strong)", delay: 0.35 },
    { h: 150, label: "YOU", c: "var(--primary)", delay: 0.6 },
    { h: 118, label: "2nd", c: "var(--gold)", delay: 0.45 },
  ];
  return (
    <div className="text-center">
      <div className="text-[11px] font-semibold uppercase tracking-wider mb-2 sc-rise" style={{ color: "var(--primary)" }}>Step 4 · The Division</div>
      <h2 className="font-display mb-6 sc-rise" style={{ fontSize: 26, lineHeight: 1.25, color: "var(--text-primary)", animationDelay: "0.1s" }}>
        A weekly league of people studying the same exam.
      </h2>
      <div className="flex items-end justify-center gap-3" style={{ height: 170 }}>
        {bars.map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-1.5">
            {b.label === "YOU" && (
              <span className="sc-pop text-xs font-extrabold px-2 py-0.5 rounded-full" style={{ animationDelay: "1.3s", background: "var(--primary)", color: "#fff" }}>YOU</span>
            )}
            <div style={{
              width: 74, height: b.h, borderRadius: "10px 10px 0 0", background: b.c,
              transformOrigin: "bottom", animation: `scGrow 0.7s cubic-bezier(0.22,1,0.36,1) ${b.delay}s both`,
            }} />
            <span className="text-[11px] font-bold" style={{ color: "var(--text-muted)" }}>{b.label === "YOU" ? "1st" : b.label}</span>
          </div>
        ))}
      </div>
      <p className="text-xs mt-5 sc-rise" style={{ color: "var(--text-muted)", animationDelay: "1.6s" }}>
        XP you earn all week counts. Somebody has to win — might as well be you.
      </p>
    </div>
  );
}

function ShowcaseCard4() {
  // The Final: boss HP drains as hearts hold.
  return (
    <div className="text-center">
      <div className="text-[11px] font-semibold uppercase tracking-wider mb-2 sc-rise" style={{ color: "var(--ats-red)" }}>Step 6 · Prove it</div>
      <h2 className="font-display mb-6 sc-rise" style={{ fontSize: 26, lineHeight: 1.25, color: "var(--text-primary)", animationDelay: "0.1s" }}>
        Then you take The Final — a timed exam with stakes.
      </h2>
      <div className="card p-5 sc-rise" style={{ animationDelay: "0.25s", textAlign: "left" }}>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-extrabold" style={{ color: "var(--ats-red)" }}>THE FINAL</span>
          <span className="text-sm">{"❤️".repeat(3)}</span>
        </div>
        <div style={{ height: 14, borderRadius: 99, background: "var(--ats-red-bg)", overflow: "hidden" }}>
          <div style={{ height: "100%", borderRadius: 99, background: "var(--ats-red)", animation: "scHpDrain 2.2s cubic-bezier(0.4,0,0.2,1) 0.6s both" }} />
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs font-bold" style={{ color: "var(--text-muted)" }}>Exam integrity</span>
          <span className="text-xs font-extrabold sc-pop" style={{ color: "var(--ats-green)", animationDelay: "2.6s" }}>CLEARED ✓</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-5 sc-pop" style={{ animationDelay: "2.9s" }}>
        <Coin size={18} spin />
        <span className="text-sm font-extrabold" style={{ color: "var(--gold)" }}>+250 Comp · promotion earned</span>
      </div>
    </div>
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
  const [scIdx, setScIdx] = useState(0);

  // Auto-advance the showcase like a story; any tap skips ahead.
  useEffect(() => {
    if (phase !== "showcase") return;
    const t = setTimeout(() => {
      if (scIdx >= SHOWCASE_DURATIONS.length - 1) {
        posthog.capture("check_showcase_done", { exam: examSlug });
        setPhase("projection");
      } else {
        setScIdx((i) => i + 1);
      }
    }, SHOWCASE_DURATIONS[scIdx] ?? 3600);
    return () => clearTimeout(t);
  }, [phase, scIdx, examSlug]);

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
          <button
            onClick={() => {
              setScIdx(0);
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

  // ================= 4b. THE SHOWCASE (story reel) =================
  if (phase === "showcase" && result) {
    const worstTopic = result.weakTopics.find((t) => t.pct < 100)?.topicName ?? "your weak topics";
    const cards = [
      <ShowcaseCard1 key="c1" topic={worstTopic} />,
      <ShowcaseCardTutor key="ct" />,
      <ShowcaseCard2 key="c2" />,
      <ShowcaseCard3 key="c3" />,
      <ShowcaseCardShop key="cs" />,
      <ShowcaseCard4 key="c4" />,
    ];
    const advance = () => {
      if (scIdx >= cards.length - 1) {
        posthog.capture("check_showcase_done", { exam: examSlug });
        setPhase("projection");
      } else {
        setScIdx(scIdx + 1);
      }
    };
    return shell(
      <div onClick={advance} style={{ cursor: "pointer", minHeight: 480 }}>
        {/* story progress bars */}
        <div className="flex items-center gap-1.5 mb-8 pt-2">
          {cards.map((_, i) => (
            <div key={i} style={{ height: 4, flex: 1, borderRadius: 99, background: "var(--primary-light)", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  borderRadius: 99,
                  background: "var(--primary)",
                  width: i < scIdx ? "100%" : "0%",
                  animation: i === scIdx ? `scBarFill ${SHOWCASE_DURATIONS[i] ?? 3600}ms linear forwards` : undefined,
                }}
              />
            </div>
          ))}
        </div>
        {/* key remounts the card so its animations replay */}
        <div key={scIdx}>{cards[scIdx]}</div>
        <p className="text-[11px] text-center mt-8" style={{ color: "var(--text-muted)" }}>
          tap to continue
        </p>
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
          <ProjectionChart proj={proj} examDateLabel={examDateLabel} />
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
