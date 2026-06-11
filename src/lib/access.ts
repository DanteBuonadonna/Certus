// ============================================================
// Certus — Access control (client-side, MVP)
//
// CURRENT MODE: EVERYTHING UNLOCKED. All exams, all boss battles,
// free for everyone while the product builds its audience.
//
// To re-enable the freemium paywall later: flip UNLOCK_ALL to false
// (free users then get FREE_EXAM only; boss battles go Pro), and
// when real accounts return, enforce server-side against the Stripe
// subscription so it can't be bypassed.
//
// Owner testing (only meaningful when UNLOCK_ALL = false):
// /unlock grants Pro in this browser, /lock revokes it.
// ============================================================

const UNLOCK_ALL = true;

export const FREE_EXAM = "cfa"; // the one exam free users can study (paywalled mode)
const PRO_KEY = "certus_pro";

export function isPro(): boolean {
  if (UNLOCK_ALL) return true;
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

// Which exams can be studied.
export function canAccessExam(slug: string): boolean {
  if (UNLOCK_ALL) return true;
  return isPro() || slug === FREE_EXAM;
}

// Boss battles ("The Final").
export function canAccessBoss(): boolean {
  if (UNLOCK_ALL) return true;
  return isPro();
}
