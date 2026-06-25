// ============================================================
// Divisions — weekly XP leagues with promotion/relegation.
// Fully client-side: each week you're placed in a cohort with
// seeded "analyst" bots paced to realistic weekly XP, plus a
// personal rival. When the week rolls over we settle the table
// and promote/relegate you a division. Swappable for real users.
// ============================================================

import { GameState } from "./studyPlan";
import { AvatarConfig, DEFAULT_AVATAR } from "./profile";

const KEY = "certus_league_v1";
const COHORT = 15; // you + 14 bots
const PROMOTE = 5; // top 5 promote
const RELEGATE = 5; // bottom 5 relegate

export interface LeagueTier {
  id: string;
  name: string;
  color: string;
}

// Bottom → top. Carry the Wall-Street career fantasy.
export const TIERS: LeagueTier[] = [
  { id: "bullpen", name: "The Bullpen", color: "#9298a6" },
  { id: "analyst", name: "Analyst Floor", color: "#cd7f32" },
  { id: "associate", name: "Associate Desk", color: "#9aa6b2" },
  { id: "vp", name: "VP Circle", color: "#d4af37" },
  { id: "md", name: "MD Suite", color: "#1cb0f6" },
  { id: "partner", name: "Partner's Table", color: "#a560f0" },
];

export interface Bot {
  name: string;
  target: number; // full-week XP potential
  avatar: AvatarConfig;
  rival?: boolean;
}

interface StoredLeague {
  weekKey: string;
  tierIndex: number;
  bots: Bot[];
  lastResult: LeagueResult | null;
}

export type LeagueResult = "promoted" | "relegated" | "held";

export interface Standing {
  name: string;
  xp: number;
  avatar: AvatarConfig;
  you: boolean;
  rival: boolean;
}

export interface LeagueView {
  tier: LeagueTier;
  nextTier: LeagueTier | null;
  prevTier: LeagueTier | null;
  standings: Standing[];
  youRank: number;
  youXp: number;
  zone: "promote" | "relegate" | "hold";
  rivalName: string;
  rivalXp: number;
  daysLeft: number;
  lastResult: LeagueResult | null;
  promoteCount: number;
  relegateCount: number;
}

// ---- date helpers (ISO week, Monday start) --------------------------------
function weekStart(d: Date): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  const day = (x.getDay() + 6) % 7; // Mon=0
  x.setDate(x.getDate() - day);
  return x;
}
function ymd(d: Date): string {
  return d.toISOString().slice(0, 10);
}
function weekKeyFor(d: Date): string {
  return ymd(weekStart(d));
}
function daysLeftInWeek(d: Date): number {
  const start = weekStart(d);
  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  return Math.max(0, Math.ceil((end.getTime() - d.getTime()) / 86400000));
}
// XP the player earned within a given week.
function weeklyXpForWeek(state: GameState, weekKeyStr: string): number {
  const start = new Date(weekKeyStr + "T00:00:00");
  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  return state.sessions
    .filter((s) => {
      const dt = new Date(s.date + "T00:00:00");
      return dt >= start && dt < end;
    })
    .reduce((a, x) => a + (x.xp || 0), 0);
}

// ---- seeded RNG ------------------------------------------------------------
function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const FIRST = ["Ava", "Marcus", "Priya", "Chen", "Diego", "Sofia", "Noah", "Yuki", "Liam", "Zara", "Omar", "Elena", "Jamal", "Nina", "Kai", "Ruth", "Theo", "Mei", "Owen", "Layla"];
const LAST = ["Okafor", "Vance", "Patel", "Wu", "Russo", "Kim", "Bauer", "Soto", "Frost", "Ahmed", "Cole", "Novak", "Reyes", "Singh", "Hale", "Vega", "Lund", "Park", "Shaw", "Cruz"];

function botAvatar(rng: () => number): AvatarConfig {
  const pick = <T,>(arr: readonly T[]) => arr[Math.floor(rng() * arr.length)];
  return {
    ...DEFAULT_AVATAR,
    suit: pick(["suit-navy", "suit-charcoal", "suit-slate", "suit-pinstripe", "suit-burgundy", "suit-royal", "suit-forest"]),
    hat: pick(["hat-none", "hat-none", "hat-none", "hat-grad", "hat-fedora", "hat-visor", "hat-top"]),
    eyewear: pick(["eye-none", "eye-none", "acc-specs", "acc-shades", "eye-nerd"]),
    neckwear: pick(["neck-gold", "neck-red", "neck-royal", "neck-emerald", "neck-silver"]),
    background: pick(["bg-slate", "bg-dawn"]),
  };
}

function genBots(weekKeyStr: string, tierIndex: number): Bot[] {
  const rng = mulberry32(hash(weekKeyStr + ":" + tierIndex));
  const usedNames = new Set<string>();
  const bots: Bot[] = [];
  // Higher divisions are tougher: targets scale up with tier.
  const floor = 150 + tierIndex * 220;
  const span = 900 + tierIndex * 500;
  for (let i = 0; i < COHORT - 1; i++) {
    let name = "";
    do {
      name = `${FIRST[Math.floor(rng() * FIRST.length)]} ${LAST[Math.floor(rng() * LAST.length)]}`;
    } while (usedNames.has(name));
    usedNames.add(name);
    // Skew the distribution so a few grinders sit at the top.
    const r = rng();
    const target = Math.round(floor + Math.pow(r, 1.5) * span + rng() * 120);
    bots.push({ name, target, avatar: botAvatar(rng) });
  }
  bots.sort((a, b) => b.target - a.target);
  // Rival: someone mid-table you can realistically chase.
  const rivalIdx = Math.min(bots.length - 1, Math.floor(COHORT / 2));
  bots[rivalIdx].rival = true;
  return bots;
}

// Each bot earns a DIFFERENT amount each day (seeded), so the table reshuffles
// daily instead of everyone climbing in lockstep. Averages out to ~target over
// the week, but day-to-day order changes and it even drifts within a day.
function botDailyGain(weekKeyStr: string, tierIndex: number, botIndex: number, target: number, day: number): number {
  const rng = mulberry32(hash(`${weekKeyStr}:${tierIndex}:${botIndex}:d${day}`));
  // ~target/7 per day on average, swinging 0.3x–1.7x: some days a grind, some slack.
  return (target / 7) * (0.3 + rng() * 1.4);
}

// XP a bot has accumulated so far this week (full elapsed days + partial today).
function botXpNow(weekKeyStr: string, tierIndex: number, botIndex: number, target: number, now: Date): number {
  const start = weekStart(now);
  const elapsedMs = now.getTime() - start.getTime();
  const fullDays = Math.min(6, Math.floor(elapsedMs / 86400000));
  const todayFrac = Math.min(1, (elapsedMs % 86400000) / 86400000);
  let xp = 0;
  for (let d = 0; d <= fullDays; d++) {
    const gain = botDailyGain(weekKeyStr, tierIndex, botIndex, target, d);
    xp += d < fullDays ? gain : gain * todayFrac;
  }
  return Math.round(xp);
}

// A bot's final XP for the whole week — used when settling promotion/relegation.
function botWeekTotal(weekKeyStr: string, tierIndex: number, botIndex: number, target: number): number {
  let xp = 0;
  for (let d = 0; d < 7; d++) xp += botDailyGain(weekKeyStr, tierIndex, botIndex, target, d);
  return Math.round(xp);
}

function load(): StoredLeague | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
}
function save(s: StoredLeague): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {}
}

// Settle last week given the player's final weekly XP, returning the new tier.
function settle(prev: StoredLeague, playerFinalXp: number): { tierIndex: number; result: LeagueResult } {
  const finals = [
    ...prev.bots.map((b, idx) => botWeekTotal(prev.weekKey, prev.tierIndex, idx, b.target)),
    playerFinalXp,
  ].sort((a, b) => b - a);
  const rank = finals.indexOf(playerFinalXp) + 1; // 1-based (ties: player gets first matching slot)
  let tierIndex = prev.tierIndex;
  let result: LeagueResult = "held";
  if (rank <= PROMOTE && tierIndex < TIERS.length - 1) {
    tierIndex++;
    result = "promoted";
  } else if (rank > COHORT - RELEGATE && tierIndex > 0) {
    tierIndex--;
    result = "relegated";
  }
  return { tierIndex, result };
}

// The main accessor: rolls the week over if needed, returns the live view.
export function getLeague(state: GameState, profileAvatar?: AvatarConfig, youName = "You"): LeagueView {
  const now = new Date();
  const wk = weekKeyFor(now);
  let stored = load();

  if (!stored) {
    stored = { weekKey: wk, tierIndex: 0, bots: genBots(wk, 0), lastResult: null };
    save(stored);
  } else if (stored.weekKey !== wk) {
    // settle the previous week using the player's final XP for that week
    const playerFinal = weeklyXpForWeek(state, stored.weekKey);
    const { tierIndex, result } = settle(stored, playerFinal);
    stored = { weekKey: wk, tierIndex, bots: genBots(wk, tierIndex), lastResult: result };
    save(stored);
  }

  const tier = TIERS[stored.tierIndex];
  const youXp = weeklyXpForWeek(state, wk);

  const botStandings: Standing[] = stored.bots.map((b, idx) => ({
    name: b.name,
    xp: botXpNow(wk, stored.tierIndex, idx, b.target, now),
    avatar: b.avatar,
    you: false,
    rival: !!b.rival,
  }));

  const youStanding: Standing = {
    name: youName,
    xp: youXp,
    avatar: profileAvatar ?? DEFAULT_AVATAR,
    you: true,
    rival: false,
  };

  const standings = [...botStandings, youStanding].sort((a, b) => b.xp - a.xp);
  const youRank = standings.findIndex((s) => s.you) + 1;
  const rivalStanding = standings.find((s) => s.rival);

  const zone: LeagueView["zone"] =
    youRank <= PROMOTE ? "promote" : youRank > COHORT - RELEGATE ? "relegate" : "hold";

  return {
    tier,
    nextTier: TIERS[stored.tierIndex + 1] ?? null,
    prevTier: TIERS[stored.tierIndex - 1] ?? null,
    standings,
    youRank,
    youXp,
    zone,
    rivalName: rivalStanding?.name ?? "—",
    rivalXp: rivalStanding?.xp ?? 0,
    daysLeft: daysLeftInWeek(now),
    lastResult: stored.lastResult,
    promoteCount: PROMOTE,
    relegateCount: RELEGATE,
  };
}

// Clear the "you were promoted/relegated" banner after it's shown once.
export function ackLeagueResult(): void {
  const s = load();
  if (s && s.lastResult) {
    s.lastResult = null;
    save(s);
  }
}
