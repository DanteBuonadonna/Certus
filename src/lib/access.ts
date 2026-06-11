// ============================================================
// Certus — Freemium access (client-side, MVP)
// Free users get ONE exam fully (reading/practice/flashcards/skill
// tree) as a taste. Everything else — other exams and ALL boss
// battles — requires Pro.
//
// NOTE: This is client-side gating for the MVP. When real accounts
// are turned back on, enforce this server-side against the Stripe
// subscription so it can't be bypassed.
//
// Owner testing: visit /unlock to flip on full access for free,
// /lock to turn it back off and see the real free experience.
// ============================================================

export const FREE_EXAM = "cfa"; // the one exam free users can study
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
  } catch {}
}

// Free users may study only the FREE_EXAM; Pro unlocks all exams.
export function canAccessExam(slug: string): boolean {
  return isPro() || slug === FREE_EXAM;
}

// Boss battles are a Pro feature for everyone (no free boss).
export function canAccessBoss(): boolean {
  return isPro();
}
