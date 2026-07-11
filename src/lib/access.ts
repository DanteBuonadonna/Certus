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

// The first N chapters of every exam are free to read.
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

// A chapter is free if it falls inside the preview window.
export function chapterIsFree(index: number): boolean {
  return index < FREE_PREVIEW_CHAPTERS;
}

// Pro unlocks every chapter; free users get the preview window.
export function canAccessChapter(index: number): boolean {
  return isPro() || chapterIsFree(index);
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
