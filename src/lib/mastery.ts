// ============================================================
// Certus — question-level mastery: spaced repetition + per-topic trends
//
// WHY THIS EXISTS
// Two gaps that turned out to be the same data problem:
//
//   1. Leitner scheduling lived only in flashcards.ts. The question bank —
//      9,708 questions, the thing people actually pay for — recorded a
//      score and threw the outcome away. Miss a question on Fixed Income
//      and nothing ever brought it back.
//   2. Nothing anywhere kept a time series, so a paying candidate could not
//      answer "am I getting better?" — only "what did I score just now".
//
// Both need the same thing: remember every answer. So one store, one write
// path, two read paths.
//
// DESIGN NOTES
// · localStorage, same as the rest of the client-side state. When real
//   accounts return this should move server-side — the schedule is per
//   person, not per browser, and today it silently resets on a new device.
// · Daily rollups per topic (capped at 30 days) rather than every attempt.
//   Compact, and enough to answer "rising or falling".
// · Trend compares the most recent days WITH DATA, not calendar days.
//   Someone who studies Tue/Thu shouldn't read as "falling" on Wednesday.
// · SSR-safe: every read returns an empty store on the server.
// ============================================================

import type { Question } from "@/content/types";

const KEY = "certus_mastery_v1";

// Leitner intervals in days for boxes 1..5. Box 1 returns same-day, which is
// deliberate: a question you just missed should come back inside the session.
const INTERVALS = [0, 1, 3, 7, 16] as const;

// How many days of per-topic history to keep. 30 covers a typical exam run-up
// without letting localStorage grow unbounded across twelve tracks.
const MAX_DAYS = 30;

// A topic needs this many answers before we'll characterise its trend at all.
// Below it, "falling" is noise and stating it would be dishonest.
const MIN_SAMPLES_FOR_TREND = 12;

// Accuracy must move more than this for us to call it a direction rather
// than steady. 5 points is roughly the noise floor on a 20-question sample.
const TREND_THRESHOLD = 0.05;

/** Per-question review state. */
export interface QuestionProgress {
  b: number; // Leitner box, 1..5
  d: string; // YYYY-MM-DD next due
  w: number; // lifetime wrong count — drives "worst first" ordering
}

/** One day's answers for one topic. */
export interface TopicDay {
  d: string; // YYYY-MM-DD
  c: number; // correct
  t: number; // total
}

export interface TopicHistory {
  name: string;
  days: TopicDay[];
}

export interface MasteryStore {
  q: Record<string, QuestionProgress>;
  t: Record<string, TopicHistory>; // keyed "examSlug:topicId"
}

const EMPTY: MasteryStore = { q: {}, t: {} };

// ---- dates ---------------------------------------------------------------

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function addDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

// ---- storage -------------------------------------------------------------

export function loadMastery(): MasteryStore {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<MasteryStore>;
      return { q: parsed.q ?? {}, t: parsed.t ?? {} };
    }
  } catch {}
  return EMPTY;
}

export function saveMastery(s: MasteryStore): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {}
}

// ---- writing -------------------------------------------------------------

export interface AnswerOutcome {
  question: Question;
  correct: boolean;
}

/**
 * Record a batch of answers. Call once at the end of a practice session or
 * mock rather than per question — one localStorage write instead of twenty.
 */
export function recordAnswers(examSlug: string, outcomes: AnswerOutcome[]): MasteryStore {
  if (!outcomes.length) return loadMastery();
  const store = loadMastery();
  const q = { ...store.q };
  const t = { ...store.t };
  const day = todayStr();

  for (const { question, correct } of outcomes) {
    // --- 1. Leitner schedule for this question ---
    const prev = q[question.id];
    const box = correct ? Math.min(5, (prev?.b ?? 0) + 1) : 1;
    const interval = INTERVALS[box - 1] ?? 0;
    q[question.id] = {
      b: box,
      d: interval === 0 ? day : addDays(interval),
      w: (prev?.w ?? 0) + (correct ? 0 : 1),
    };

    // --- 2. Daily rollup for the topic ---
    const key = `${examSlug}:${question.topicId}`;
    const hist = t[key] ?? { name: question.topicName, days: [] };
    const days = [...hist.days];
    const last = days[days.length - 1];
    if (last && last.d === day) {
      days[days.length - 1] = { d: day, c: last.c + (correct ? 1 : 0), t: last.t + 1 };
    } else {
      days.push({ d: day, c: correct ? 1 : 0, t: 1 });
    }
    t[key] = { name: question.topicName, days: days.slice(-MAX_DAYS) };
  }

  const next = { q, t };
  saveMastery(next);
  return next;
}

// ---- reading: spaced repetition -----------------------------------------

/** A question is due if it's never been seen, or its due date has arrived. */
export function isDue(questionId: string, store: MasteryStore, on = todayStr()): boolean {
  const p = store.q[questionId];
  if (!p) return true;
  return p.d <= on;
}

/**
 * Questions due for review, worst first — most lifetime misses lead, then
 * lowest box. Unseen questions are excluded: this is the REVIEW queue, not
 * the practice queue. Feeding new questions here would hide the review work
 * behind an endless supply of fresh ones.
 */
export function dueForReview(
  examSlug: string,
  all: Question[],
  store: MasteryStore,
  opts?: { topicId?: string; limit?: number },
): Question[] {
  const seen = all.filter((qn) => {
    if (opts?.topicId && qn.topicId !== opts.topicId) return false;
    return !!store.q[qn.id] && isDue(qn.id, store);
  });
  seen.sort((a, b) => {
    const pa = store.q[a.id]!;
    const pb = store.q[b.id]!;
    if (pb.w !== pa.w) return pb.w - pa.w; // most-missed first
    return pa.b - pb.b; // then least-known
  });
  return opts?.limit ? seen.slice(0, opts.limit) : seen;
}

export function dueCount(examSlug: string, all: Question[], store: MasteryStore): number {
  return dueForReview(examSlug, all, store).length;
}

/** Questions answered correctly enough times to count as retained. */
export function masteredCount(all: Question[], store: MasteryStore): number {
  return all.filter((qn) => (store.q[qn.id]?.b ?? 0) >= 5).length;
}

// ---- reading: per-topic trends -------------------------------------------

export type Direction = "rising" | "falling" | "steady" | "unknown";

export interface TopicTrend {
  topicId: string;
  topicName: string;
  accuracy: number; // 0..1 across the recent window
  prior: number; // 0..1 across the window before it
  delta: number; // accuracy - prior
  direction: Direction;
  samples: number; // total answers on record for this topic
}

/**
 * Split a topic's day rollups into a recent half and a prior half, then
 * compare. Uses days WITH DATA rather than calendar days, so an irregular
 * study pattern doesn't read as decline.
 */
function trendFor(topicId: string, hist: TopicHistory): TopicTrend {
  const days = hist.days.filter((d) => d.t > 0);
  const samples = days.reduce((n, d) => n + d.t, 0);
  const base: TopicTrend = {
    topicId,
    topicName: hist.name,
    accuracy: samples ? days.reduce((n, d) => n + d.c, 0) / samples : 0,
    prior: 0,
    delta: 0,
    direction: "unknown",
    samples,
  };
  if (samples < MIN_SAMPLES_FOR_TREND || days.length < 2) return base;

  // Walk back from the most recent day until we've collected about half the
  // samples; that's the "recent" window, the rest is "prior".
  const half = samples / 2;
  let acc = 0;
  let split = days.length;
  for (let i = days.length - 1; i >= 0; i--) {
    acc += days[i].t;
    if (acc >= half) {
      split = i;
      break;
    }
  }
  const recentDays = days.slice(split);
  const priorDays = days.slice(0, split);
  if (!recentDays.length || !priorDays.length) return base;

  const sum = (arr: TopicDay[], f: (d: TopicDay) => number) => arr.reduce((n, d) => n + f(d), 0);
  const rTot = sum(recentDays, (d) => d.t);
  const pTot = sum(priorDays, (d) => d.t);
  if (!rTot || !pTot) return base;

  const accuracy = sum(recentDays, (d) => d.c) / rTot;
  const prior = sum(priorDays, (d) => d.c) / pTot;
  const delta = accuracy - prior;
  const direction: Direction =
    delta > TREND_THRESHOLD ? "rising" : delta < -TREND_THRESHOLD ? "falling" : "steady";

  return { ...base, accuracy, prior, delta, direction };
}

/** Every topic this exam has history for, weakest accuracy first. */
export function topicTrends(examSlug: string, store: MasteryStore): TopicTrend[] {
  const prefix = `${examSlug}:`;
  return Object.entries(store.t)
    .filter(([k]) => k.startsWith(prefix))
    .map(([k, hist]) => trendFor(k.slice(prefix.length), hist))
    .filter((t) => t.samples > 0)
    .sort((a, b) => a.accuracy - b.accuracy);
}

/**
 * The topics worth showing on a dashboard: weakest first, but only those with
 * enough answers to say something honest about. Returns [] rather than
 * guessing when the candidate hasn't done enough work yet.
 */
export function weakestTopics(examSlug: string, store: MasteryStore, limit = 3): TopicTrend[] {
  return topicTrends(examSlug, store)
    .filter((t) => t.samples >= MIN_SAMPLES_FOR_TREND)
    .slice(0, limit);
}

/** Overall accuracy across every topic on this track, or null if no data. */
export function overallAccuracy(examSlug: string, store: MasteryStore): number | null {
  const trends = topicTrends(examSlug, store);
  if (!trends.length) return null;
  const tot = trends.reduce((n, t) => n + t.samples, 0);
  if (!tot) return null;
  return trends.reduce((n, t) => n + t.accuracy * t.samples, 0) / tot;
}

/** Plain-language trend label. Deliberately never says "falling" on thin data. */
export function trendLabel(t: TopicTrend): string {
  const pct = Math.round(t.accuracy * 100);
  if (t.direction === "unknown") return `${pct}% · not enough data yet`;
  if (t.direction === "steady") return `${pct}% · holding steady`;
  const pts = Math.abs(Math.round(t.delta * 100));
  return `${pct}% · ${t.direction} ${pts} pt${pts === 1 ? "" : "s"}`;
}

/** Sparkline points (0..1 per day) for a topic, oldest first. */
export function sparkline(examSlug: string, topicId: string, store: MasteryStore): number[] {
  const hist = store.t[`${examSlug}:${topicId}`];
  if (!hist) return [];
  return hist.days.filter((d) => d.t > 0).map((d) => d.c / d.t);
}
