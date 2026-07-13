// ============================================================
// Certus — Access control (client-side, MVP)
//
// MODEL: "preview everything, pay to go deep."
// Anyone can open ANY exam and read the first FREE_PREVIEW_CHAPTERS
// lessons free — so a Series 66 hopeful can actually try it. Going
// past the preview, and taking The Final (boss exams), requires Pro.
//
// When real accounts return, enforce this server-side against the
// Stripe subscription so it can't be bypassed.
//
// Owner testing: /unlock grants Pro in this browser, /lock revokes it.
// ============================================================

// HALF of every exam's readings are free. Not two chapters — half.
// Two chapters is a teaser; nobody can judge a study app from it. Half is
// enough to actually trust the content, which is the whole job of the free
// tier. The full mock exam and the odds-of-passing score are free too (see
// /mock — no gate). What you pay for is REPS: unlimited practice questions.
//
// Free  → half the readings · a full timed mock · your real pass odds · 25 questions/day
// Pro   → every reading · unlimited questions · unlimited mock retakes
export function freeChapterCount(totalChapters: number): number {
  return Math.max(1, Math.ceil(totalChapters / 2));
}

// Free users get this many practice questions per day. The mock is what hooks
// them; the daily grind is what they pay for.
export const FREE_DAILY_QUESTIONS = 25;

// Legacy export — some copy still references a preview count.
export const FREE_PREVIEW_CHAPTERS = 2;

// Legacy export kept for compatibility (no longer gates exam access).
export const FREE_EXAM = "cfa";

const PRO_KEY = "certus_pro";

export function isPro(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(PRO_KEY) === "1";
  } catch {
    return false;
  }
}

export function setPro(on: boolean): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PRO_KEY, on ? "1" : "0");
    // Let any mounted useAccess() consumers update immediately (same tab).
    window.dispatchEvent(new Event("certus-pro-changed"));
  } catch {}
}

// Creator / comp access codes. Redeeming a valid code flips this browser to
// Pro (client-side, MVP) — the same durability as a purchase in guest mode.
// Compared case-insensitively. When real accounts return, redemptions should
// be recorded server-side against the account.
const REDEEM_CODES = new Set(["CERTUSPREP2026"]);

export function redeemCode(input: string): boolean {
  const code = (input || "").trim().toUpperCase();
  if (!REDEEM_CODES.has(code)) return false;
  setPro(true);
  return true;
}

// Every exam is previewable by everyone — depth is what's gated.
export function canAccessExam(_slug: string): boolean {
  return true;
}

// A chapter is free if it's in the first HALF of the exam.
export function chapterIsFree(index: number, totalChapters: number): boolean {
  return index < freeChapterCount(totalChapters);
}

// Pro unlocks every chapter; free users get the first half.
export function canAccessChapter(index: number, totalChapters: number): boolean {
  return isPro() || chapterIsFree(index, totalChapters);
}

// ---- Daily practice allowance (free tier) ----
// Reps are the product. Free users get a real taste every day; Pro is unlimited.
const DAILY_KEY = "certus_daily_questions_v1";

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export function questionsUsedToday(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(DAILY_KEY);
    if (!raw) return 0;
    const { date, n } = JSON.parse(raw);
    return date === today() ? n ?? 0 : 0;
  } catch {
    return 0;
  }
}

export function recordQuestionAnswered(): number {
  if (typeof window === "undefined") return 0;
  const n = questionsUsedToday() + 1;
  try {
    localStorage.setItem(DAILY_KEY, JSON.stringify({ date: today(), n }));
    window.dispatchEvent(new Event("certus-daily-changed"));
  } catch {}
  return n;
}

/** Free users hit a wall after FREE_DAILY_QUESTIONS. Pro never does. */
export function questionsLeftToday(pro: boolean): number {
  if (pro) return Infinity;
  return Math.max(0, FREE_DAILY_QUESTIONS - questionsUsedToday());
}

// The Final (boss exams): everyone gets ONE free attempt per exam —
// enough to feel the full boss fight — then retakes require Pro.
const BOSS_TRIES_KEY = "certus_boss_tries_v1";

export function bossAttemptsUsed(examSlug: string): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(BOSS_TRIES_KEY);
    if (raw) return JSON.parse(raw)[examSlug] ?? 0;
  } catch {}
  return 0;
}

export function recordBossAttempt(examSlug: string): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(BOSS_TRIES_KEY);
    const tries = raw ? JSON.parse(raw) : {};
    tries[examSlug] = (tries[examSlug] ?? 0) + 1;
    localStorage.setItem(BOSS_TRIES_KEY, JSON.stringify(tries));
  } catch {}
}

// Pro players retake freely; free players get one attempt per exam. `pro`
// is passed in from server-authoritative state (useAccess), never localStorage.
export function canStartBoss(examSlug: string, pro: boolean): boolean {
  return pro || bossAttemptsUsed(examSlug) < 1;
}

// Legacy blanket check (kept for compatibility; prefer canStartBoss).
export function canAccessBoss(): boolean {
  return isPro();
}
