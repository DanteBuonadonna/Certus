// ============================================================
// Certus — Flashcards + spaced repetition (Leitner system)
// Cards are generated from every chapter's key terms, so the
// flashcard decks stay in sync with the reading automatically.
// Review scheduling uses a 5-box Leitner system in localStorage.
// ============================================================

import { getChapters, examsWithContent } from "@/content";

export interface Flashcard {
  id: string;
  examSlug: string;
  topicId: string;
  topicName: string;
  front: string; // the term
  back: string; // the definition
}

// Per-card review state.
export interface CardProgress {
  box: number; // 1..5 (higher = better known, longer interval)
  due: string; // YYYY-MM-DD next review date
}

export type FlashStore = Record<string, CardProgress>;

const KEY = "certus_flashcards_v1";
// Leitner intervals in days for boxes 1..5.
const INTERVALS = [0, 1, 3, 7, 16];

export function buildDeck(examSlug: string, topicId?: string): Flashcard[] {
  const cards: Flashcard[] = [];
  for (const ch of getChapters(examSlug)) {
    if (topicId && ch.topicId !== topicId) continue;
    for (const t of ch.keyTerms) {
      cards.push({
        id: `${examSlug}:${ch.topicId}:${slug(t.term)}`,
        examSlug,
        topicId: ch.topicId,
        topicName: ch.topicName,
        front: t.term,
        back: t.def,
      });
    }
  }
  return cards;
}

export function deckTopics(examSlug: string): { topicId: string; topicName: string; count: number }[] {
  const out: { topicId: string; topicName: string; count: number }[] = [];
  for (const ch of getChapters(examSlug)) {
    if (ch.keyTerms.length) out.push({ topicId: ch.topicId, topicName: ch.topicName, count: ch.keyTerms.length });
  }
  return out;
}

export function examsWithDecks(): string[] {
  return examsWithContent().filter((s) => buildDeck(s).length > 0);
}

// ---- storage ----
export function loadStore(): FlashStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {};
}

export function saveStore(s: FlashStore): void {
  if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(s));
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function addDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

// A card is due if it has no progress yet, or its due date is today/past.
export function isDue(card: Flashcard, store: FlashStore): boolean {
  const p = store[card.id];
  if (!p) return true;
  return p.due <= todayStr();
}

export function dueCount(cards: Flashcard[], store: FlashStore): number {
  return cards.filter((c) => isDue(c, store)).length;
}

// Grade a card: known = advance a box; again = reset to box 1.
export function grade(store: FlashStore, cardId: string, known: boolean): FlashStore {
  const current = store[cardId]?.box ?? 0;
  const box = known ? Math.min(5, current + 1) : 1;
  const interval = INTERVALS[box - 1] ?? 0;
  return { ...store, [cardId]: { box, due: interval === 0 ? todayStr() : addDays(interval) } };
}

export function masteredCount(cards: Flashcard[], store: FlashStore): number {
  return cards.filter((c) => (store[c.id]?.box ?? 0) >= 5).length;
}

function slug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
