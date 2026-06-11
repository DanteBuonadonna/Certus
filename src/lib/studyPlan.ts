// ============================================================
// Ascent — Study Plan + Gamification Engine
// Pure functions (no deps) so they run on client or server.
// The dashboard persists GameState to localStorage for v1;
// the same shape maps cleanly to the Supabase tables later.
// ============================================================

export interface StudyPlan {
  examSlug: string;
  examName: string;
  levelId: string;
  levelName: string;
  examDate: string; // YYYY-MM-DD
  targetHours: number; // recommended total prep hours
  startDate: string; // YYYY-MM-DD when the plan was created
  accent: string;
}

export interface SessionLog {
  date: string; // YYYY-MM-DD
  minutes: number;
  examSlug: string;
  topicId?: string;
  xp: number;
}

export interface GameState {
  xp: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string | null; // YYYY-MM-DD
  freezes: number; // streak-freeze power-ups
  unlockedBadges: string[];
  sessions: SessionLog[];
  plans: StudyPlan[];
}

export const EMPTY_STATE: GameState = {
  xp: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastStudyDate: null,
  freezes: 1,
  unlockedBadges: [],
  sessions: [],
  plans: [],
};

// ---- Date helpers --------------------------------------------------------
export function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export function daysBetween(a: string, b: string): number {
  const ms = new Date(b + "T00:00:00").getTime() - new Date(a + "T00:00:00").getTime();
  return Math.round(ms / 86400000);
}

// ---- XP & Levels ---------------------------------------------------------
// 1 minute studied = 2 XP. Hitting your daily goal and keeping a streak
// add multipliers (applied in logSession).
export const XP_PER_MINUTE = 2;

// Cumulative XP required to *reach* a given level.
export function xpForLevel(level: number): number {
  // 150 XP for L2, growing quadratically: cumulative = 75 * (L-1) * L
  return 75 * (level - 1) * level;
}

export function levelFromXp(xp: number): number {
  let level = 1;
  while (xpForLevel(level + 1) <= xp) level++;
  return level;
}

export interface LevelProgress {
  level: number;
  xpIntoLevel: number;
  xpForNext: number;
  pct: number; // 0..100 toward next level
}

export function levelProgress(xp: number): LevelProgress {
  const level = levelFromXp(xp);
  const base = xpForLevel(level);
  const next = xpForLevel(level + 1);
  const xpIntoLevel = xp - base;
  const xpForNext = next - base;
  return { level, xpIntoLevel, xpForNext, pct: Math.round((xpIntoLevel / xpForNext) * 100) };
}

// Corporate career-ladder rank titles tied to level.
export function rankTitle(level: number): string {
  if (level >= 25) return "Partner";
  if (level >= 18) return "Managing Director";
  if (level >= 12) return "Vice President";
  if (level >= 7) return "Associate";
  if (level >= 3) return "Analyst";
  return "Intern";
}

// ---- Adaptive plan progress ---------------------------------------------
export type Pace = "ahead" | "on-track" | "behind" | "at-risk";

export interface PlanProgress {
  daysRemaining: number;
  hoursLogged: number;
  hoursRemaining: number;
  percentComplete: number; // of target hours
  dailyTargetHours: number; // re-balanced for remaining days
  expectedHoursByNow: number;
  pace: Pace;
  todayHours: number;
  todayTargetHours: number;
  todayMet: boolean;
}

export function planProgress(plan: StudyPlan, sessions: SessionLog[]): PlanProgress {
  const t = today();
  const planSessions = sessions.filter((s) => s.examSlug === plan.examSlug);
  const minutesLogged = planSessions.reduce((s, x) => s + x.minutes, 0);
  const hoursLogged = minutesLogged / 60;
  const hoursRemaining = Math.max(0, plan.targetHours - hoursLogged);

  const daysRemaining = Math.max(0, daysBetween(t, plan.examDate));
  const totalDays = Math.max(1, daysBetween(plan.startDate, plan.examDate));
  const daysElapsed = Math.max(0, Math.min(totalDays, daysBetween(plan.startDate, t)));

  // Re-balanced daily target: spread the remaining work over remaining days.
  const dailyTargetHours = daysRemaining > 0 ? hoursRemaining / daysRemaining : hoursRemaining;
  const expectedHoursByNow = (daysElapsed / totalDays) * plan.targetHours;

  const todayMinutes = planSessions.filter((s) => s.date === t).reduce((s, x) => s + x.minutes, 0);
  const todayHours = todayMinutes / 60;

  // Pace: compare logged vs expected.
  const delta = hoursLogged - expectedHoursByNow;
  let pace: Pace;
  if (delta >= plan.targetHours * 0.05) pace = "ahead";
  else if (delta >= -plan.targetHours * 0.03) pace = "on-track";
  else if (delta >= -plan.targetHours * 0.12) pace = "behind";
  else pace = "at-risk";

  return {
    daysRemaining,
    hoursLogged: round1(hoursLogged),
    hoursRemaining: round1(hoursRemaining),
    percentComplete: Math.min(100, Math.round((hoursLogged / plan.targetHours) * 100)),
    dailyTargetHours: round1(dailyTargetHours),
    expectedHoursByNow: round1(expectedHoursByNow),
    pace,
    todayHours: round1(todayHours),
    todayTargetHours: round1(dailyTargetHours),
    todayMet: todayHours >= dailyTargetHours && dailyTargetHours > 0,
  };
}

export function paceLabel(p: Pace): { label: string; color: string } {
  switch (p) {
    case "ahead":
      return { label: "Ahead of schedule", color: "#1D9E75" };
    case "on-track":
      return { label: "Right on pace", color: "#2563EB" };
    case "behind":
      return { label: "Slightly behind", color: "#BA7517" };
    case "at-risk":
      return { label: "Falling behind — catch up", color: "#E24B4A" };
  }
}

// ---- Logging a session (updates streak + XP) -----------------------------
export interface LogResult {
  state: GameState;
  xpEarned: number;
  leveledUp: boolean;
  newBadges: Badge[];
  streakChanged: boolean;
}

export function logSession(
  state: GameState,
  examSlug: string,
  minutes: number,
  opts?: { topicId?: string; dailyGoalMet?: boolean }
): LogResult {
  const t = today();
  const prevLevel = levelFromXp(state.xp);

  // Streak: +1 if last study was yesterday, reset to 1 if older, unchanged if today.
  let streak = state.currentStreak;
  let streakChanged = false;
  if (state.lastStudyDate !== t) {
    const gap = state.lastStudyDate ? daysBetween(state.lastStudyDate, t) : 999;
    if (gap === 1) streak = state.currentStreak + 1;
    else if (gap > 1 && state.freezes > 0 && gap === 2) {
      // a streak freeze covers one missed day
      streak = state.currentStreak + 1;
    } else streak = 1;
    streakChanged = true;
  }

  // XP: base + streak bonus + daily-goal bonus.
  const base = Math.round(minutes * XP_PER_MINUTE);
  const streakMult = 1 + Math.min(streak, 30) * 0.02; // up to +60% at a 30-day streak
  const goalBonus = opts?.dailyGoalMet ? 50 : 0;
  const xpEarned = Math.round(base * streakMult) + goalBonus;

  const usedFreeze =
    state.lastStudyDate && daysBetween(state.lastStudyDate, t) === 2 && state.freezes > 0;

  const newState: GameState = {
    ...state,
    xp: state.xp + xpEarned,
    currentStreak: streak,
    longestStreak: Math.max(state.longestStreak, streak),
    lastStudyDate: t,
    freezes: usedFreeze ? state.freezes - 1 : state.freezes,
    sessions: [...state.sessions, { date: t, minutes, examSlug, topicId: opts?.topicId, xp: xpEarned }],
  };

  const newBadges = checkBadges(newState).filter((b) => !state.unlockedBadges.includes(b.id));
  newState.unlockedBadges = [...state.unlockedBadges, ...newBadges.map((b) => b.id)];

  return {
    state: newState,
    xpEarned,
    leveledUp: levelFromXp(newState.xp) > prevLevel,
    newBadges,
    streakChanged,
  };
}

// ---- Badges --------------------------------------------------------------
export interface Badge {
  id: string;
  name: string;
  desc: string;
  icon: string;
  check: (s: GameState) => boolean;
}

export const BADGES: Badge[] = [
  { id: "first-climb", name: "First Day", desc: "Log your first study session", icon: "💼", check: (s) => s.sessions.length >= 1 },
  { id: "streak-3", name: "Warming Up", desc: "Reach a 3-day streak", icon: "🔥", check: (s) => s.longestStreak >= 3 },
  { id: "streak-7", name: "On a Roll", desc: "Reach a 7-day streak", icon: "⚡", check: (s) => s.longestStreak >= 7 },
  { id: "streak-30", name: "Unstoppable", desc: "Reach a 30-day streak", icon: "🏆", check: (s) => s.longestStreak >= 30 },
  { id: "hours-10", name: "Double Digits", desc: "Log 10 total hours", icon: "⏱️", check: (s) => totalMinutes(s) >= 600 },
  { id: "hours-50", name: "Grinder", desc: "Log 50 total hours", icon: "💪", check: (s) => totalMinutes(s) >= 3000 },
  { id: "hours-100", name: "Centurion", desc: "Log 100 total hours", icon: "💯", check: (s) => totalMinutes(s) >= 6000 },
  { id: "early-bird", name: "Early Bird", desc: "Study before 8am", icon: "🌅", check: (s) => s.sessions.some((x) => new Date().getHours() < 8 && x.date === today()) },
  { id: "level-10", name: "Rising Star", desc: "Reach level 10", icon: "🌟", check: (s) => levelFromXp(s.xp) >= 10 },
  { id: "planner", name: "Onboarded", desc: "Set your exam date", icon: "🗓️", check: (s) => s.plans.length >= 1 },
];

export function checkBadges(s: GameState): Badge[] {
  return BADGES.filter((b) => b.check(s));
}

// ---- Daily challenges (the "make it a game" goal layer) ------------------
export interface Challenge {
  id: string;
  title: string;
  goal: number;
  unit: string;
  progress: number;
  xpReward: number;
  done: boolean;
}

export function dailyChallenges(state: GameState, dailyGoalMinutes: number): Challenge[] {
  const t = today();
  const todayMin = state.sessions.filter((s) => s.date === t).reduce((s, x) => s + x.minutes, 0);
  const weekMin = lastNDaysMinutes(state, 7);
  const weekDays = distinctStudyDays(state, 7);

  return [
    {
      id: "daily-goal",
      title: `Hit today's goal (${dailyGoalMinutes} min)`,
      goal: dailyGoalMinutes,
      unit: "min",
      progress: Math.min(todayMin, dailyGoalMinutes),
      xpReward: 50,
      done: todayMin >= dailyGoalMinutes,
    },
    {
      id: "focus-block",
      title: "Complete a 25-min focus block",
      goal: 25,
      unit: "min",
      progress: Math.min(todayMin, 25),
      xpReward: 20,
      done: todayMin >= 25,
    },
    {
      id: "weekly-consistency",
      title: "Study 5 days this week",
      goal: 5,
      unit: "days",
      progress: Math.min(weekDays, 5),
      xpReward: 120,
      done: weekDays >= 5,
    },
    {
      id: "weekly-volume",
      title: "Log 5 hours this week",
      goal: 300,
      unit: "min",
      progress: Math.min(weekMin, 300),
      xpReward: 150,
      done: weekMin >= 300,
    },
  ];
}

// ---- Small utilities -----------------------------------------------------
function round1(n: number): number {
  return Math.round(n * 10) / 10;
}
export function totalMinutes(s: GameState): number {
  return s.sessions.reduce((a, x) => a + x.minutes, 0);
}
function lastNDaysMinutes(s: GameState, n: number): number {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - (n - 1));
  const cut = cutoff.toISOString().slice(0, 10);
  return s.sessions.filter((x) => x.date >= cut).reduce((a, x) => a + x.minutes, 0);
}
function distinctStudyDays(s: GameState, n: number): number {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - (n - 1));
  const cut = cutoff.toISOString().slice(0, 10);
  return new Set(s.sessions.filter((x) => x.date >= cut).map((x) => x.date)).size;
}

// Heatmap data for the last N days (Duolingo-style calendar).
export function heatmap(s: GameState, days: number): { date: string; minutes: number }[] {
  const out: { date: string; minutes: number }[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const minutes = s.sessions.filter((x) => x.date === key).reduce((a, x) => a + x.minutes, 0);
    out.push({ date: key, minutes });
  }
  return out;
}
