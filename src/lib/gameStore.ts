// ============================================================
// Certus — shared client-side game state persistence.
// The economy is PERFORMANCE-BASED: XP (and the Comp it mints)
// comes from answering questions correctly. Logged minutes and
// reading keep the streak/pacing alive but earn little or nothing,
// so coins can't be farmed by scrolling or spam-clicking.
// ============================================================

import {
  EMPTY_STATE,
  GameState,
  LogResult,
  logSession,
  XP_PER_CORRECT,
  READING_XP,
  FLASHCARD_XP,
  FLASHCARD_DAILY_CARD_CAP,
  BOSS_PASS_BONUS,
  ACCURACY_BONUS,
  today,
} from "./studyPlan";

export const GAME_KEY = "certus_state_v1";

export function loadState(): GameState {
  if (typeof window === "undefined") return EMPTY_STATE;
  try {
    const raw = localStorage.getItem(GAME_KEY);
    if (raw) return migrateState({ ...EMPTY_STATE, ...JSON.parse(raw) });
  } catch {}
  return EMPTY_STATE;
}

// The CPA exam was split into 4 tracks (cpa-aud/far/reg/disc). Any saved
// progress under the retired single "cpa" slug is remapped to the FAR core
// section so existing plans/sessions stay valid instead of dangling.
function migrateState(state: GameState): GameState {
  const plans = (state.plans ?? []).map((p) =>
    p.examSlug === "cpa"
      ? { ...p, examSlug: "cpa-far", examName: "CPA · FAR", levelName: "FAR — Financial Accounting & Reporting" }
      : p
  );
  const sessions = (state.sessions ?? []).map((s) =>
    s.examSlug === "cpa" ? { ...s, examSlug: "cpa-far" } : s
  );
  return { ...state, plans, sessions };
}

export function saveState(state: GameState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(GAME_KEY, JSON.stringify(state));
}

// ---- Time-only logging (streak + pacing, NO coins) ------------------------
// Used for manually logged study minutes and any "showing up" activity.
// Keeps the streak alive and feeds the study plan, but mints ~no XP so the
// economy stays tied to performance.
export function recordStudy(examSlug: string, minutes: number, topicId?: string): number {
  const result = logSession(loadState(), examSlug, minutes, { topicId, xpOverride: 0 });
  saveState(result.state);
  return result.xpEarned;
}

// ---- Performance: correct answers are the main XP source ------------------
export function recordQuiz(
  examSlug: string,
  correct: number,
  total: number,
  topicId?: string,
  opts?: { combo?: number; passed?: boolean; isBoss?: boolean }
): LogResult {
  const pct = total > 0 ? correct / total : 0;
  let xp = correct * XP_PER_CORRECT;
  if (pct >= 0.8 && total >= 5) xp += ACCURACY_BONUS; // reward a strong run
  if (opts?.combo && opts.combo >= 3) xp += opts.combo * 5; // combo streak bonus
  if (opts?.passed) xp += BOSS_PASS_BONUS; // clearing the Final

  const minutes = Math.max(1, Math.round(total * 1.2)); // for plan pacing only
  const result = logSession(loadState(), examSlug, minutes, { topicId, xpOverride: xp });
  saveState(result.state);
  return result;
}

// ---- Reading: a tiny, one-time reward (handled per-chapter by caller) -----
export function recordReadingXp(examSlug: string, readingMinutes: number, topicId?: string): number {
  const result = logSession(loadState(), examSlug, readingMinutes, { topicId, xpOverride: READING_XP });
  saveState(result.state);
  return result.xpEarned;
}

// ---- Flashcards: per correct recall, capped daily to stop spam ------------
const FC_KEY = "certus_fc_xp_v1";
function fcEarnedToday(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(FC_KEY);
    if (raw) {
      const { date, count } = JSON.parse(raw);
      if (date === today()) return count;
    }
  } catch {}
  return 0;
}
function setFcEarnedToday(count: number): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(FC_KEY, JSON.stringify({ date: today(), count }));
  } catch {}
}

export function recordFlashcards(examSlug: string, correctCount: number, reviewedCount: number): number {
  const already = fcEarnedToday();
  const room = Math.max(0, FLASHCARD_DAILY_CARD_CAP - already);
  const payable = Math.min(correctCount, room);
  const xp = payable * FLASHCARD_XP;
  setFcEarnedToday(already + payable);

  const minutes = Math.max(1, Math.round(reviewedCount * 0.4)); // pacing only
  const result = logSession(loadState(), examSlug, minutes, { xpOverride: xp });
  saveState(result.state);
  return result.xpEarned;
}
