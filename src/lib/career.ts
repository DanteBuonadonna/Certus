// ============================================================
// The Ladder — career-path quest map.
// Rank tiers (Intern → Partner) gated by level; each tier holds
// quests checked against real study state. Claiming pays Comp.
// ============================================================

import { GameState, levelFromXp, totalMinutes, today, daysBetween } from "./studyPlan";
import { getChapters } from "@/content";
import { buildDeck, loadStore, masteredCount } from "./flashcards";
import { loadTrophies } from "./bossExam";
import { loadReading, readCount } from "./readingProgress";
import { computeReadiness } from "./readiness";
import { grantBonus } from "./economy";

const KEY = "certus_career_v1";

export interface CareerStore {
  claimed: string[]; // quest ids
}

export function loadCareer(): CareerStore {
  if (typeof window === "undefined") return { claimed: [] };
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { claimed: [], ...JSON.parse(raw) };
  } catch {}
  return { claimed: [] };
}

function saveCareer(c: CareerStore): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(c));
  } catch {}
}

// ---- Quest context ---------------------------------------------------------
export interface QuestCtx {
  state: GameState;
  examSlug: string;
  chaptersRead: number;
  chaptersTotal: number;
  cardsMastered: number;
  cardsTotal: number;
  bossBestPct: number; // 0 if never attempted
  bossAttempted: boolean;
  readinessScore: number;
  hoursLogged: number;
  weekMinutes: number;
}

export function buildQuestCtx(examSlug: string, state: GameState): QuestCtx {
  const chapters = getChapters(examSlug);
  const reading = loadReading();
  const flash = loadStore();
  const deck = buildDeck(examSlug);
  const trophies = loadTrophies();
  const t = today();
  return {
    state,
    examSlug,
    chaptersRead: readCount(examSlug, chapters.map((c) => c.id), reading),
    chaptersTotal: chapters.length,
    cardsMastered: masteredCount(deck, flash),
    cardsTotal: deck.length,
    bossBestPct: trophies[examSlug]?.bestPct ?? 0,
    bossAttempted: Boolean(trophies[examSlug]),
    readinessScore: computeReadiness(examSlug, state).score,
    hoursLogged: Math.floor(totalMinutes(state) / 60),
    weekMinutes: state.sessions
      .filter((s) => daysBetween(s.date, t) < 7)
      .reduce((sum, s) => sum + s.minutes, 0),
  };
}

// ---- Quests ----------------------------------------------------------------
export interface Quest {
  id: string;
  title: string;
  desc: string;
  reward: number; // Comp payout
  progress: (ctx: QuestCtx) => { current: number; goal: number };
}

export interface RankTier {
  rank: string;       // matches studyPlan.rankTitle names
  minLevel: number;   // level gate (matches rankTitle thresholds)
  brief: string;
  quests: Quest[];
}

export const LADDER: RankTier[] = [
  {
    rank: "Intern",
    minLevel: 0,
    brief: "Show up. Learn the building. Nobody remembers a quiet intern — they remember a consistent one.",
    quests: [
      {
        id: "int-plan",
        title: "Sign your offer",
        desc: "Set an exam track with a test date.",
        reward: 100,
        progress: (c) => ({ current: c.state.plans.length > 0 ? 1 : 0, goal: 1 }),
      },
      {
        id: "int-first-session",
        title: "First day on the desk",
        desc: "Log your first study session.",
        reward: 100,
        progress: (c) => ({ current: Math.min(1, c.state.sessions.length), goal: 1 }),
      },
      {
        id: "int-first-read",
        title: "Read the onboarding packet",
        desc: "Complete your first chapter.",
        reward: 150,
        progress: (c) => ({ current: Math.min(1, c.chaptersRead), goal: 1 }),
      },
      {
        id: "int-streak3",
        title: "Three days running",
        desc: "Reach a 3-day streak.",
        reward: 200,
        progress: (c) => ({ current: Math.min(3, c.state.longestStreak), goal: 3 }),
      },
    ],
  },
  {
    rank: "Analyst",
    minLevel: 3,
    brief: "You have a seat now. Build the base: coverage first, then accuracy.",
    quests: [
      {
        id: "ana-read3",
        title: "Cover the fundamentals",
        desc: "Complete 3 chapters.",
        reward: 300,
        progress: (c) => ({ current: Math.min(3, c.chaptersRead), goal: 3 }),
      },
      {
        id: "ana-cards25",
        title: "Build the mental models",
        desc: "Master 25 flashcards.",
        reward: 300,
        progress: (c) => ({ current: Math.min(25, c.cardsMastered), goal: 25 }),
      },
      {
        id: "ana-hours5",
        title: "Put in the hours",
        desc: "Log 5 total hours.",
        reward: 250,
        progress: (c) => ({ current: Math.min(5, c.hoursLogged), goal: 5 }),
      },
      {
        id: "ana-streak7",
        title: "A full week, no gaps",
        desc: "Reach a 7-day streak.",
        reward: 400,
        progress: (c) => ({ current: Math.min(7, c.state.longestStreak), goal: 7 }),
      },
    ],
  },
  {
    rank: "Associate",
    minLevel: 7,
    brief: "Coverage is table stakes now. Start testing yourself against the board.",
    quests: [
      {
        id: "aso-read6",
        title: "Own half the book",
        desc: "Complete 6 chapters.",
        reward: 500,
        progress: (c) => ({ current: Math.min(6, c.chaptersRead), goal: 6 }),
      },
      {
        id: "aso-cards75",
        title: "Deep recall",
        desc: "Master 75 flashcards.",
        reward: 500,
        progress: (c) => ({ current: Math.min(75, c.cardsMastered), goal: 75 }),
      },
      {
        id: "aso-final-attempt",
        title: "Face the board",
        desc: "Attempt The Final at least once.",
        reward: 400,
        progress: (c) => ({ current: c.bossAttempted ? 1 : 0, goal: 1 }),
      },
      {
        id: "aso-hours20",
        title: "Twenty in the book",
        desc: "Log 20 total hours.",
        reward: 500,
        progress: (c) => ({ current: Math.min(20, c.hoursLogged), goal: 20 }),
      },
    ],
  },
  {
    rank: "Vice President",
    minLevel: 12,
    brief: "VPs deliver. Clear the board and make consistency look effortless.",
    quests: [
      {
        id: "vp-clear-final",
        title: "Clear The Final",
        desc: "Pass the comprehensive mock exam.",
        reward: 1000,
        progress: (c) => ({ current: c.bossBestPct >= 70 ? 1 : 0, goal: 1 }),
      },
      {
        id: "vp-read-all",
        title: "Read the whole book",
        desc: "Complete every chapter in your track.",
        reward: 800,
        progress: (c) => ({ current: c.chaptersRead, goal: Math.max(1, c.chaptersTotal) }),
      },
      {
        id: "vp-streak14",
        title: "Two weeks unbroken",
        desc: "Reach a 14-day streak.",
        reward: 800,
        progress: (c) => ({ current: Math.min(14, c.state.longestStreak), goal: 14 }),
      },
      {
        id: "vp-cards150",
        title: "Total recall",
        desc: "Master 150 flashcards.",
        reward: 800,
        progress: (c) => ({ current: Math.min(150, c.cardsMastered), goal: 150 }),
      },
    ],
  },
  {
    rank: "Managing Director",
    minLevel: 18,
    brief: "MDs don't pass — they outperform. Push the rating into investment grade and beyond.",
    quests: [
      {
        id: "md-readiness80",
        title: "Rated AA",
        desc: "Reach a readiness score of 80.",
        reward: 1500,
        progress: (c) => ({ current: Math.min(80, c.readinessScore), goal: 80 }),
      },
      {
        id: "md-final85",
        title: "Embarrass the board",
        desc: "Score 85%+ on The Final.",
        reward: 1500,
        progress: (c) => ({ current: c.bossBestPct >= 85 ? 1 : 0, goal: 1 }),
      },
      {
        id: "md-hours50",
        title: "Fifty hours deep",
        desc: "Log 50 total hours.",
        reward: 1200,
        progress: (c) => ({ current: Math.min(50, c.hoursLogged), goal: 50 }),
      },
    ],
  },
  {
    rank: "Partner",
    minLevel: 25,
    brief: "Your name on the door. Nothing left to prove — except to the actual exam.",
    quests: [
      {
        id: "ptr-readiness90",
        title: "Rated AAA",
        desc: "Reach a readiness score of 90 — exam-ready.",
        reward: 2500,
        progress: (c) => ({ current: Math.min(90, c.readinessScore), goal: 90 }),
      },
      {
        id: "ptr-streak30",
        title: "The thirty-day institution",
        desc: "Reach a 30-day streak.",
        reward: 2000,
        progress: (c) => ({ current: Math.min(30, c.state.longestStreak), goal: 30 }),
      },
      {
        id: "ptr-hours100",
        title: "Centurion",
        desc: "Log 100 total hours.",
        reward: 2000,
        progress: (c) => ({ current: Math.min(100, c.hoursLogged), goal: 100 }),
      },
    ],
  },
];

// ---- Claiming --------------------------------------------------------------
export function isClaimed(questId: string, store?: CareerStore): boolean {
  return (store ?? loadCareer()).claimed.includes(questId);
}

export function questComplete(q: Quest, ctx: QuestCtx): boolean {
  const p = q.progress(ctx);
  return p.current >= p.goal;
}

/** Claims a completed quest; pays Comp. Returns new store or null if invalid. */
export function claimQuest(q: Quest, ctx: QuestCtx): CareerStore | null {
  const store = loadCareer();
  if (store.claimed.includes(q.id)) return null;
  if (!questComplete(q, ctx)) return null;
  store.claimed = [...store.claimed, q.id];
  saveCareer(store);
  grantBonus(q.reward);
  return store;
}

export function tierUnlocked(tier: RankTier, state: GameState): boolean {
  return levelFromXp(state.xp) >= tier.minLevel;
}

/** Count of completed-but-unclaimed quests (for nav badges). */
export function unclaimedCount(examSlug: string, state: GameState): number {
  const ctx = buildQuestCtx(examSlug, state);
  const store = loadCareer();
  let n = 0;
  for (const tier of LADDER) {
    if (!tierUnlocked(tier, state)) continue;
    for (const q of tier.quests) {
      if (!store.claimed.includes(q.id) && questComplete(q, ctx)) n++;
    }
  }
  return n;
}
