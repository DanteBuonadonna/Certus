// ============================================================
// The intake funnel — steps 1–4 of the value-first flow.
//
//   1. ASK about their problems      -> INTAKE_QUESTIONS (4 taps)
//   2. FEEL UNDERSTOOD               -> buildReflection()
//   3. SHOW HOW WE SOLVE IT          -> the plan (built from answers + diagnostic)
//   4. WOW                           -> projection() : their readiness arc to passing
//
// The whole point: by the time the paywall appears, the person has told us their
// fear, been told we understand it, seen a plan aimed at exactly that fear, and
// watched an honest projection of themselves passing. It's the Noom pattern, and
// it converts because it earns the ask.
//
// HONESTY RULE (carried from diagnostic.ts): we never fake precision. The
// projection is a BAND, not a fake exact %, and it's explicitly "projected with
// ~15 min/day", not a promise. A CFA candidate can smell a fake line.
// ============================================================

import { MPS_LOW, MPS_HIGH } from "./diagnostic";

export interface IntakeChoice {
  id: string;
  label: string;
  /** weeks-to-exam, for the exam-date question only */
  weeks?: number;
}
export interface IntakeQuestion {
  id: "exam" | "when" | "prep" | "fear" | "how";
  prompt: string;
  choices: IntakeChoice[];
}

/** Exams offered in the intake — ids ARE content-registry slugs. */
export const EXAM_INTAKE_CHOICES: IntakeChoice[] = [
  { id: "cfa", label: "CFA Level I" },
  { id: "sie", label: "SIE" },
  { id: "series-7", label: "Series 7" },
  { id: "series-66", label: "Series 66" },
  { id: "cpa-far", label: "CPA" },
  { id: "cfp", label: "CFP" },
];

/** Which flavour of "the scary topics" fits this exam's candidates. */
function fearLabels(examSlug: string): { hard: string; grind: string } {
  if (examSlug.startsWith("cfa")) return { hard: "FRA — it's a monster", grind: "Ethics — I can't read it right" };
  if (examSlug === "sie" || examSlug.startsWith("series")) return { hard: "Options & margin math", grind: "The regulations — endless rules" };
  if (examSlug.startsWith("cpa")) return { hard: "FAR-style calculations", grind: "The sheer memorization grind" };
  return { hard: "The calculation-heavy topics", grind: "The memorization-heavy topics" };
}

const WHEN_CHOICES: IntakeChoice[] = [
  { id: "soon", label: "Less than a month", weeks: 3 },
  { id: "1-2m", label: "1–2 months", weeks: 7 },
  { id: "3-4m", label: "3–4 months", weeks: 15 },
  { id: "far", label: "5+ months or not scheduled", weeks: 24 },
];

/**
 * The intake, tuned to the exam. When the visitor arrived from an
 * exam-specific link (?exam=), skip the exam question; otherwise it's asked
 * FIRST so everything after it (fear labels, quiz questions, proof copy)
 * speaks their exam's language.
 */
export function buildIntakeQuestions(examSlug: string, includeExam: boolean): IntakeQuestion[] {
  const f = fearLabels(examSlug);
  const qs: IntakeQuestion[] = [
    {
      id: "when",
      prompt: "When do you take the exam?",
      choices: WHEN_CHOICES,
    },
    {
      id: "prep",
      prompt: "How's prep going, honestly?",
      choices: [
        { id: "notstarted", label: "Haven't really started" },
        { id: "behind", label: "Behind and stressed about it" },
        { id: "ontrack", label: "On track, but anxious" },
        { id: "well", label: "Honestly, going well" },
        { id: "again", label: "Failed before — going again" },
      ],
    },
    {
      id: "fear",
      prompt: "What scares you most?",
      choices: [
        { id: "time", label: "Running out of time on exam day" },
        { id: "fra", label: f.hard },
        { id: "ethics", label: f.grind },
        { id: "fail", label: "Just… failing again" },
        { id: "work", label: "Fitting it around a full-time job" },
      ],
    },
    {
      id: "how",
      prompt: "How are you studying right now?",
      choices: [
        { id: "reading", label: "Mostly reading the material" },
        { id: "questions", label: "Practice questions" },
        { id: "course", label: "A paid course (Schweser etc.)" },
        { id: "winging", label: "Honestly, winging it" },
      ],
    },
  ];
  if (includeExam) {
    qs.unshift({
      id: "exam",
      prompt: "Which exam are you taking?",
      choices: EXAM_INTAKE_CHOICES,
    });
  }
  return qs;
}

/** @deprecated kept for callers that don't need exam adaptation */
export const INTAKE_QUESTIONS: IntakeQuestion[] = buildIntakeQuestions("cfa", false);

export type IntakeAnswers = Partial<Record<IntakeQuestion["id"], string>>;

export function weeksToExam(a: IntakeAnswers): number {
  const c = WHEN_CHOICES.find((x) => x.id === a.when);
  return c?.weeks ?? 12;
}

/**
 * STEP 2 — reflect their situation back, specifically. Validate, then reframe
 * toward the one true lever (reps over reading). The reframe is gentle but it's
 * the hook: it tells them the thing they're doing wrong before we sell the fix.
 */
export function buildReflection(a: IntakeAnswers, examSlug = "cfa"): { headline: string; body: string } {
  const weeks = weeksToExam(a);
  const isCfa = examSlug.startsWith("cfa");
  const isSeries = examSlug === "sie" || examSlug.startsWith("series");
  const fearMap: Record<string, string> = {
    time: "running out of time",
    fra: isCfa ? "FRA" : isSeries ? "the options and margin math" : "the calculation-heavy topics",
    ethics: isCfa ? "Ethics" : isSeries ? "the regulations" : "the memorization grind",
    fail: "failing again",
    work: "fitting this around work",
  };
  const fear = fearMap[a.fear ?? ""] ?? "the exam";

  // The "you're not behind" reframe, tuned to their prep state.
  let standing: string;
  if (a.prep === "notstarted") {
    standing = weeks >= 12
      ? "You haven't really started — and with the time you've got, that's genuinely fine. Most people who pass start about here."
      : "You haven't started and the clock is real. Not panic-real — but we don't waste a day.";
  } else if (a.prep === "behind") {
    standing = "You feel behind. Almost everyone who passes felt exactly this — being behind is a triage problem, not a talent problem.";
  } else if (a.prep === "again") {
    standing = "You've taken this before. That's not a mark against you — it means you already know how hard it is, and this time you get to be surgical about it.";
  } else if (a.prep === "well") {
    standing = "You feel good about it — and confidence is worth a lot. The one risk at this stage is confusing 'I've covered it' with 'I can do it under the clock.' Let's pressure-test that in a few minutes.";
  } else {
    standing = "You're on track but anxious. That anxiety is normal and it's not information — your prep is, and we're about to look at it.";
  }

  // The reframe — depends on how they study.
  let lever: string;
  if (a.how === "reading" || a.how === "winging") {
    lever = "You told me you're mostly reading. Here's the uncomfortable part: reading is the #1 reason smart, hardworking people fail this exam. It teaches you to recognise the material, not use it — and they feel identical until the exam asks you to do something.";
  } else if (a.how === "course") {
    lever = "You've got a course, which is a real head start. What courses under-do is reps on your specific weak spots — and that's exactly what moves a score.";
  } else {
    lever = "You're already doing practice questions — good, that's the thing that actually works. The multiplier is doing them on your weak topics and diagnosing why you miss, not just grinding volume.";
  }

  return {
    headline:
      a.fear === "fail"
        ? "You're most scared of failing again. Let's make sure that doesn't happen."
        : `You're most worried about ${fear}. Fair — and fixable.`,
    body: `${standing} ${lever}`,
  };
}

/**
 * STEP 4 — the wow. An honest readiness arc from today's score to passing.
 *
 * Model: readiness climbs with consistent reps and diminishing returns
 * (r = target - (target - start) * e^(-k * week)). We render it as a BAND
 * (±) so it never claims a fake exact number, and we mark the week it enters
 * the pass band. If their timeline genuinely can't reach it, we say so rather
 * than draw a lie — but for most inputs the arc crosses before exam day, which
 * is the emotional payload: "here is you, passing."
 */
export interface ProjectionPoint { week: number; mid: number; low: number; high: number; }
export interface Projection {
  points: ProjectionPoint[];
  passWeek: number | null;   // week the midpoint reaches MPS_LOW (always set now)
  weeks: number;             // total weeks DRAWN (extended past exam if needed)
  examWeek: number;          // where their actual exam falls on the timeline
  startPct: number;
  reachesByExam: boolean;    // does the crossing happen on or before exam day?
}
/**
 * The chart must ALWAYS show them reaching the pass zone — that's the wow.
 * A low score + short runway used to produce a line that crawled toward
 * nothing and stopped: an honest chart of failure, which is a terrible thing
 * to sell hope with. Now the timeline EXTENDS until the curve crosses, and the
 * exam date is drawn as a milestone. If the crossing lands after the exam,
 * that's said plainly — "this gap is what more-than-15-minutes closes" — which
 * is honest AND a better reason to start today.
 */
export function projection(startPct: number, examWeeks: number): Projection {
  const target = 82;                 // realistic ceiling for consistent daily reps
  const k = 0.22;                    // learning rate
  const midAt = (w: number) => Math.round(target - (target - startPct) * Math.exp(-k * w));

  // How long until the curve clears the pass band? (capped for sanity)
  let weeksNeeded = 0;
  while (midAt(weeksNeeded) < MPS_LOW && weeksNeeded < 26) weeksNeeded++;

  const weeks = Math.max(examWeeks, weeksNeeded);
  const pts: ProjectionPoint[] = [];
  let passWeek: number | null = null;
  for (let w = 0; w <= weeks; w++) {
    const mid = midAt(w);
    const spread = Math.max(3, Math.round(8 * Math.exp(-k * w)) + 3);
    pts.push({ week: w, mid, low: Math.max(0, mid - spread), high: Math.min(100, mid + spread) });
    if (passWeek === null && mid >= MPS_LOW) passWeek = w;
  }
  return {
    points: pts,
    passWeek,
    weeks,
    examWeek: examWeeks,
    startPct,
    reachesByExam: passWeek !== null && passWeek <= examWeeks,
  };
}

export { MPS_LOW, MPS_HIGH };
