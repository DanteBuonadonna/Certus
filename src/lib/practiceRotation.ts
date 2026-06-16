// ============================================================
// Certus — practice rotation
//
// Serves a fresh set each run by prioritizing the questions the user has
// seen least recently. With a pool larger than the run size, consecutive
// runs barely overlap; once the whole pool has cycled, it rotates back to
// the oldest. Per-exam, stored in localStorage. Falls back gracefully.
// ============================================================

import { Question } from "@/content/types";

const KEY = "certus_practice_seen_v1";

// How many questions one practice run serves (capped by pool size).
export const RUN_SIZE = 20;

type SeenMap = Record<string, number>; // questionId -> last-seen epoch ms

function load(): SeenMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function save(map: SeenMap) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(map));
  } catch {}
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Build one rotating run from a pool: least-recently-seen first (unseen = 0),
// random tiebreak, capped at `size`, then shuffled for varied order.
export function buildRun(pool: Question[], size = RUN_SIZE): Question[] {
  if (pool.length === 0) return [];
  const seen = load();
  const ranked = pool
    .map((q) => ({ q, last: seen[q.id] ?? 0, r: Math.random() }))
    .sort((a, b) => a.last - b.last || a.r - b.r);

  const chosen = ranked.slice(0, Math.min(size, pool.length)).map((x) => x.q);

  const now = Date.now();
  chosen.forEach((q) => {
    seen[q.id] = now;
  });
  save(seen);

  return shuffle(chosen);
}
