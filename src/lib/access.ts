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
  } catch {}
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

// The Final (boss exams) is a Pro feature.
export function canAccessBoss(): boolean {
  return isPro();
}
