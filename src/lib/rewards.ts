// ============================================================
// Variable rewards — the surprise layer.
// Loot chests drop after lessons (variable Comp), and a daily
// "Market Open" bonus ladder rewards showing up each day.
// Comp is granted through the existing economy wallet.
// ============================================================

import { grantBonus } from "./economy";

// ---- Loot chests -----------------------------------------------------------
export type ChestTier = "bronze" | "silver" | "gold";

export interface ChestDrop {
  tier: ChestTier;
  comp: number;
}

export const CHEST_META: Record<ChestTier, { label: string; color: string; deep: string; min: number; max: number }> = {
  bronze: { label: "Bronze", color: "#cd7f32", deep: "#9c5e22", min: 30, max: 80 },
  silver: { label: "Silver", color: "#aab4c2", deep: "#7d8895", min: 90, max: 220 },
  gold: { label: "Gold", color: "#d4af37", deep: "#a8842c", min: 280, max: 650 },
};

// Roll for a chest after a lesson. Better accuracy → better odds.
// Returns null when nothing drops (most of the tension is in the maybe).
export function rollChest(accuracyPct: number): ChestDrop | null {
  const dropChance = accuracyPct >= 100 ? 0.9 : accuracyPct >= 70 ? 0.6 : 0.4;
  if (Math.random() > dropChance) return null;
  const t = Math.random();
  let tier: ChestTier = t < 0.64 ? "bronze" : t < 0.92 ? "silver" : "gold";
  // A flawless run nudges the tier up.
  if (accuracyPct >= 100 && tier !== "gold" && Math.random() < 0.5) {
    tier = tier === "bronze" ? "silver" : "gold";
  }
  const meta = CHEST_META[tier];
  const comp = Math.round(meta.min + Math.random() * (meta.max - meta.min));
  return { tier, comp };
}

export function claimChest(drop: ChestDrop): void {
  grantBonus(drop.comp);
}

// ---- Daily "Market Open" bonus --------------------------------------------
const DAILY_KEY = "certus_daily_v1";
// Escalating ladder; day 7 is the big one, then it holds.
export const DAILY_LADDER = [25, 40, 60, 90, 130, 180, 320];

interface DailyState {
  lastClaim: string | null; // YYYY-MM-DD
  streak: number;
}

function ymd(d = new Date()): string {
  return d.toISOString().slice(0, 10);
}
function daysBetween(a: string, b: string): number {
  return Math.round((new Date(b + "T00:00:00").getTime() - new Date(a + "T00:00:00").getTime()) / 86400000);
}

function loadDaily(): DailyState {
  if (typeof window === "undefined") return { lastClaim: null, streak: 0 };
  try {
    const raw = localStorage.getItem(DAILY_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { lastClaim: null, streak: 0 };
}
function saveDaily(s: DailyState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(DAILY_KEY, JSON.stringify(s));
  } catch {}
}

export interface DailyBonusInfo {
  available: boolean;
  day: number; // 1-based position on the ladder for the pending claim
  amount: number;
  streak: number;
}

// What's claimable right now (does not mutate state).
export function dailyBonusInfo(): DailyBonusInfo {
  const s = loadDaily();
  const today = ymd();
  const available = s.lastClaim !== today;
  let prospectiveStreak: number;
  if (!s.lastClaim) prospectiveStreak = 1;
  else if (daysBetween(s.lastClaim, today) === 1) prospectiveStreak = s.streak + 1;
  else if (daysBetween(s.lastClaim, today) === 0) prospectiveStreak = s.streak; // already today
  else prospectiveStreak = 1; // missed a day → reset
  const day = ((prospectiveStreak - 1) % DAILY_LADDER.length) + 1;
  const amount = DAILY_LADDER[day - 1];
  return { available, day, amount, streak: prospectiveStreak };
}

// Claim today's bonus; grants Comp and returns the amount (0 if already claimed).
export function claimDailyBonus(): number {
  const info = dailyBonusInfo();
  if (!info.available) return 0;
  grantBonus(info.amount);
  saveDaily({ lastClaim: ymd(), streak: info.streak });
  return info.amount;
}
