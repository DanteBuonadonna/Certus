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

// Cards are derived from ALL of a chapter's rich content — key terms, plus
// formulas, worked examples, tables, and callouts — so each chapter yields a
// deep deck (20–40 cards) instead of a handful. Front = prompt, back = answer.
export function buildDeck(examSlug: string, topicId?: string): Flashcard[] {
  const cards: Flashcard[] = [];
  for (const ch of getChapters(examSlug)) {
    if (topicId && ch.topicId !== topicId) continue;
    const base = { examSlug, topicId: ch.topicId, topicName: ch.topicName };
    const push = (suffix: string, front: string, back: string) => {
      if (!front || !back) return;
      cards.push({ id: `${examSlug}:${ch.topicId}:${suffix}`, ...base, front, back });
    };

    // 1) Key terms.
    ch.keyTerms.forEach((t) => push(`term-${slug(t.term)}`, t.term, t.def));

    // 2) Rich blocks within each section.
    ch.sections.forEach((s, si) => {
      // Legacy section-level callout.
      if (s.callout) push(`s${si}-callout`, s.callout.label, s.callout.body);

      (s.blocks ?? []).forEach((b, bi) => {
        if (b.kind === "callout") {
          push(`s${si}-b${bi}-callout`, b.label, b.body);
        } else if (b.kind === "formula") {
          const front = b.formula.label ? `Formula: ${b.formula.label}` : "Recall this formula";
          const back = b.formula.note ? `${b.formula.expr}  ·  ${b.formula.note}` : b.formula.expr;
          push(`s${si}-b${bi}-formula`, front, back);
        } else if (b.kind === "example") {
          push(`s${si}-b${bi}-example`, b.example.prompt, b.example.answer);
        } else if (b.kind === "table") {
          // One card per data row: prompt = first cell, answer = the rest.
          b.table.rows.forEach((row, ri) => {
            if (row.length < 2 || !row[0]) return;
            push(`s${si}-b${bi}-row${ri}`, row[0], row.slice(1).join("  —  "));
          });
        }
      });
    });
  }
  return cards;
}

export function deckTopics(examSlug: string): { topicId: string; topicName: string; count: number }[] {
  const out: { topicId: string; topicName: string; count: number }[] = [];
  const seen = new Set<string>();
  for (const ch of getChapters(examSlug)) {
    if (seen.has(ch.topicId)) continue;
    seen.add(ch.topicId);
    const count = buildDeck(examSlug, ch.topicId).length;
    if (count) out.push({ topicId: ch.topicId, topicName: ch.topicName, count });
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
