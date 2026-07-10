// ============================================================
// Certus — Mock Exam engine (CFA Level I replica)
// A faithful reproduction of the real exam's structure:
//   · 2 sessions × 90 questions × 135 minutes (90 s/question)
//   · 3 answer choices (A/B/C), blueprint-weighted topics
//   · Formal scoring report with per-topic breakdown
// Plus an honest, statistics-based readiness estimate.
//
// This is deliberately NOT gamified — no XP, hearts, or bosses.
// It is the "proper" wing of the app.
// ============================================================

import { Question } from "@/content/types";

// ---- Exam structure (matches the real CFA CBT exams) -----------
// Level I:  180 standalone MCQs, 2 × 135 min  → 90 s per question
// Level II: 22 item sets × 4 Qs, 2 × 132 min  → 180 s per question
// Level III: item sets + constructed-response essays; essays are
//            budgeted at ~2 minutes per point, per CFA guidance.
export const SECONDS_PER_QUESTION = 90; // Level I
export const SECONDS_PER_VIGNETTE_QUESTION = 180; // Levels II & III
export const SECONDS_PER_ESSAY_POINT = 120;
export const FULL_SESSION_QUESTIONS = 90;
export const QUICK_QUESTIONS = 15;

export function sessionSeconds(questionCount: number): number {
  return questionCount * SECONDS_PER_QUESTION;
}

// ---- Vignette item sets (Level II / III) ------------------------
export interface VignetteExhibit {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface ItemSet {
  id: string;
  title: string; // e.g. "Tremont Industrials Case Scenario"
  vignette: string[]; // paragraphs
  exhibits?: VignetteExhibit[];
  questions: Question[]; // exactly 4 on the real exam
}

// ---- Constructed response (Level III essays) --------------------
export interface EssayPart {
  label: string; // "A", "B", "C"
  prompt: string;
  points: number;
  guideline: string; // model answer the candidate self-grades against
}

export interface Essay {
  id: string;
  topicId: string;
  topicName: string;
  title: string;
  scenario: string[]; // paragraphs
  parts: EssayPart[];
}

export function essayTotalPoints(essays: Essay[]): number {
  return essays.reduce((s, e) => s + e.parts.reduce((p, x) => p + x.points, 0), 0);
}

// ---- Readiness estimation -------------------------------------
// CFA Institute never publishes the Minimum Passing Score; analysis
// of released band data suggests it historically falls somewhere
// around 60–70% of questions. We treat the MPS as uncertain within
// that band rather than pretending to know it exactly:
//   odds = P(true ability > MPS), via a normal approximation of the
//   binomial around the candidate's observed score.
// This produces a RANGE, not a promise — and the copy says so.
const MPS_LOW = 0.60;
const MPS_MID = 0.65;
const MPS_HIGH = 0.70;

// Standard normal CDF (Abramowitz–Stegun approximation).
function phi(z: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  let p =
    d *
    t *
    (0.3193815 +
      t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (z > 0) p = 1 - p;
  return p;
}

export type ReadinessBand = "on-track" | "borderline" | "at-risk" | "not-yet";

export interface Readiness {
  band: ReadinessBand;
  bandLabel: string;
  /** P(pass) using the mid MPS assumption, 0–100. */
  oddsMid: number;
  /** Range across the plausible MPS band, 0–100 each. */
  oddsLow: number;
  oddsHigh: number;
  /** Sampling error is large on short quizzes; results flag it. */
  smallSample: boolean;
  note: string;
}

export function estimateReadiness(correct: number, total: number): Readiness {
  const p = total > 0 ? correct / total : 0;
  // Guard the normal approximation at the extremes.
  const pAdj = Math.min(Math.max(p, 0.02), 0.98);
  const se = Math.sqrt((pAdj * (1 - pAdj)) / Math.max(total, 1));
  const odds = (mps: number) => Math.round(phi((p - mps) / se) * 100);

  const oddsMid = odds(MPS_MID);
  // A higher assumed MPS → lower odds; report the honest span.
  const oddsLow = Math.min(odds(MPS_HIGH), oddsMid);
  const oddsHigh = Math.max(odds(MPS_LOW), oddsMid);
  const smallSample = total < 60;

  let band: ReadinessBand;
  let bandLabel: string;
  if (oddsMid >= 75) {
    band = "on-track";
    bandLabel = "On track";
  } else if (oddsMid >= 50) {
    band = "borderline";
    bandLabel = "Borderline — trending pass";
  } else if (oddsMid >= 25) {
    band = "at-risk";
    bandLabel = "Borderline — at risk";
  } else {
    band = "not-yet";
    bandLabel = "Not yet exam-ready";
  }

  const note = smallSample
    ? "Based on a short sample — treat this as a rough first read. The full-length mock gives a far tighter estimate."
    : "Estimate based on your score relative to the range where the CFA minimum passing score has historically fallen. It is a statistical estimate, not a guarantee.";

  return { band, bandLabel, oddsMid, oddsLow, oddsHigh, smallSample, note };
}

// ---- Scoring ---------------------------------------------------
export interface TopicScore {
  topicId: string;
  topicName: string;
  correct: number;
  total: number;
  pct: number;
}

export interface MockScore {
  correct: number;
  total: number;
  answered: number;
  pct: number;
  byTopic: TopicScore[];
  readiness: Readiness;
}

export function scoreMock(
  questions: Question[],
  answers: (number | null)[]
): MockScore {
  let correct = 0;
  let answered = 0;
  const byTopic = new Map<string, TopicScore>();
  questions.forEach((q, i) => {
    const a = answers[i] ?? null;
    if (a !== null) answered++;
    const hit = a === q.answerIndex;
    if (hit) correct++;
    const t =
      byTopic.get(q.topicId) ??
      ({ topicId: q.topicId, topicName: q.topicName, correct: 0, total: 0, pct: 0 } as TopicScore);
    t.total++;
    if (hit) t.correct++;
    byTopic.set(q.topicId, t);
  });
  const topics = Array.from(byTopic.values()).map((t) => ({
    ...t,
    pct: t.total ? Math.round((t.correct / t.total) * 100) : 0,
  }));
  // Weakest first, matching how the real result report draws the eye.
  topics.sort((a, b) => a.pct - b.pct);
  const total = questions.length;
  return {
    correct,
    total,
    answered,
    pct: total ? Math.round((correct / total) * 100) : 0,
    byTopic: topics,
    readiness: estimateReadiness(correct, total),
  };
}

// ---- Attempt history (the start of the calibration dataset) ----
// Every attempt is stored locally and captured in PostHog. When users
// later report real exam outcomes, this becomes the data that lets us
// calibrate predicted vs. actual pass rates.
export interface MockAttempt {
  date: string; // ISO
  exam?: string; // "cfa" | "cfa-l2" | "cfa-l3" (absent = legacy L1 record)
  mode: "quick" | "full";
  correct: number;
  total: number;
  pct: number;
  oddsMid: number;
  byTopic: { topicId: string; pct: number }[];
}

const STORE_KEY = "certus_mock_v1";

export function loadAttempts(): MockAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) ?? "[]") as MockAttempt[];
  } catch {
    return [];
  }
}

export function saveAttempt(a: MockAttempt) {
  if (typeof window === "undefined") return;
  const all = loadAttempts();
  all.push(a);
  localStorage.setItem(STORE_KEY, JSON.stringify(all.slice(-50)));
}

// ---- In-progress exam autosave ---------------------------------
// A candidate 90 minutes into a session must never lose work to an
// accidental refresh. State autosaves locally and offers to resume.
export interface MockProgress {
  exam?: string; // absent = legacy Level I save
  mode: "quick" | "full";
  sessionIdx: number;
  sessions: {
    answers: (number | null)[];
    flagged: boolean[];
    strikes: number[][];
    essayTexts?: string[][]; // per essay, per part (Level III)
  }[];
  idx: number;
  timeLeft: number;
  savedAt: string; // ISO
}

const PROGRESS_KEY = "certus_mock_progress_v1";

export function saveProgress(p: MockProgress) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  } catch {
    /* storage full/blocked — degrade silently */
  }
}

export function loadProgress(): MockProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw) as MockProgress;
    if (!p || !Array.isArray(p.sessions) || typeof p.timeLeft !== "number") return null;
    return p;
  } catch {
    return null;
  }
}

export function clearProgress() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(PROGRESS_KEY);
}
