"use client";

// ============================================================
// Which exam should a page open on?
//
// THE BUG: Reading, Practice, Flashcards, Skill tree, Challenges, The Final and
// Career all did `useState(available[0] ?? "cfa")`. available[0] came from
// Object.keys(REGISTRY), whose first key is `sie` — so a user whose dashboard
// said "CFA Level I · exam in 74 days" clicked Practice and got Series 7 SIE
// questions. Every one of those pages then made them re-select their own exam,
// on every visit.
//
// The user TOLD US their track in their plan. Use it. Order of preference:
//   1. ?exam= in the URL (an explicit link — skill tree, check handoff, etc.)
//   2. their active study plan
//   3. CFA Level I (biggest audience, and the free track)
//   4. whatever has content
// ============================================================

import { loadState } from "./gameStore";

export function preferredExam(available: string[], paramExam?: string | null): string {
  // 1. Explicit link wins — someone clicked "practice THIS topic".
  if (paramExam && available.includes(paramExam)) return paramExam;

  // 2. Their own plan. This is the whole point: they already chose.
  try {
    const planSlug = loadState().plans?.[0]?.examSlug;
    if (planSlug && available.includes(planSlug)) return planSlug;
  } catch {
    // localStorage unavailable (SSR / privacy mode) — fall through.
  }

  // 3. CFA Level I: the largest audience and the free track.
  if (available.includes("cfa")) return "cfa";

  // 4. Anything, in canonical order (examsWithContent sorts by EXAMS).
  return available[0] ?? "cfa";
}
