// ============================================================
// Certus — shared client-side game state persistence.
// Both the dashboard and the practice flow read/write here so
// XP, streaks, and study minutes stay in sync. Maps 1:1 to the
// Supabase tables when cloud sync is turned on.
// ============================================================

import { EMPTY_STATE, GameState, logSession } from "./studyPlan";

export const GAME_KEY = "certus_state_v1";

export function loadState(): GameState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = localStorage.getItem(GAME_KEY);
    if (raw) return { ...EMPTY_STATE, ...JSON.parse(raw) };
  } catch {}
  return EMPTY_STATE;
}

export function saveState(state: GameState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(GAME_KEY, JSON.stringify(state));
}

// Convenience: log study minutes and persist, returning XP earned.
export function recordStudy(examSlug: string, minutes: number, topicId?: string): number {
  const result = logSession(loadState(), examSlug, minutes, { topicId });
  saveState(result.state);
  return result.xpEarned;
}
