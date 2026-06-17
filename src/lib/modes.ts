// ============================================================
// Challenge modes — Lightning Round, The Open (daily mock),
// and Wager. Question selection + per-day result tracking.
// ============================================================

import { getQuestions } from "@/content";
import { Question } from "@/content/types";

function ymd(d = new Date()): string {
  return d.toISOString().slice(0, 10);
}
function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---- Lightning: a big shuffled deck to burn through against the clock ------
export const LIGHTNING_SECONDS = 60;
export function lightningDeck(exam: string): Question[] {
  return shuffle(getQuestions(exam), Math.random);
}

// ---- The Open: a daily mock, identical for everyone, one attempt a day -----
export const OPEN_SIZE = 10;
export function dailyOpenSet(exam: string): Question[] {
  const rng = mulberry32(hash(`${ymd()}:${exam}`));
  return shuffle(getQuestions(exam), rng).slice(0, OPEN_SIZE);
}

const OPEN_KEY = "certus_open_v1";
interface OpenRecord {
  date: string;
  pct: number;
  correct: number;
  total: number;
}
type OpenStore = Record<string, OpenRecord>; // keyed by exam

function loadOpen(): OpenStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(OPEN_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {};
}
export function openResultToday(exam: string): OpenRecord | null {
  const rec = loadOpen()[exam];
  return rec && rec.date === ymd() ? rec : null;
}
export function saveOpenResult(exam: string, correct: number, total: number): void {
  if (typeof window === "undefined") return;
  const store = loadOpen();
  store[exam] = { date: ymd(), correct, total, pct: total ? Math.round((correct / total) * 100) : 0 };
  try {
    localStorage.setItem(OPEN_KEY, JSON.stringify(store));
  } catch {}
}

// ---- Wager: stake some Comp, hit your target to double it ------------------
export const WAGER_SIZE = 10;
export const WAGER_STAKES = [50, 150, 400];
export const WAGER_TARGET_PCT = 70; // accuracy needed to win
