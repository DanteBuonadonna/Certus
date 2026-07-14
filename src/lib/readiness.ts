// ============================================================
// Readiness Score — the single number users grind to move.
// Composite of: reading coverage, flashcard mastery, boss
// performance, and consistency. 0–100, graded CCC → AAA.
// Client-side; all inputs come from existing local stores.
// ============================================================

import { GameState, today, daysBetween } from "./studyPlan";
import { getChapters } from "@/content";
import { buildDeck, loadStore, masteredCount } from "./flashcards";
import { loadTrophies } from "./bossExam";
import { loadReading, readCount } from "./readingProgress";
import { loadDiagnostic } from "./diagnostic";

export interface ReadinessComponent {
  id: "coverage" | "mastery" | "boss" | "consistency";
  label: string;
  pct: number; // 0..100 within the component
  weight: number; // contribution weight, sums to 1
  detail: string;
}

export interface Readiness {
  score: number; // 0..100
  components: ReadinessComponent[];
}

export function computeReadiness(examSlug: string, state: GameState): Readiness {
  const chapters = getChapters(examSlug);
  const reading = loadReading();
  const flash = loadStore();
  const trophies = loadTrophies();
  const diag = loadDiagnostic(examSlug);

  // 1) Coverage — chapters completed.
  const read = readCount(examSlug, chapters.map((c) => c.id), reading);
  const coveragePct = chapters.length ? Math.round((read / chapters.length) * 100) : 0;

  // 2) Mastery — flashcards mastered across the exam's full deck.
  const deck = buildDeck(examSlug);
  const mastered = masteredCount(deck, flash);
  const masteryPct = deck.length ? Math.round((mastered / deck.length) * 100) : 0;

  // 3) Boss — best mock-exam score. If they haven't sat a mock but HAVE taken
  //    the diagnostic, use that: it's real evidence, and pretending we know
  //    nothing is how we ended up telling new users they had a 2% chance.
  const bossPct = trophies[examSlug]?.bestPct ?? diag?.pct ?? 0;

  // 4) Consistency — study minutes in the last 7 days vs a 5-hr/wk bar,
  //    blended with streak (capped at 14 days).
  const t = today();
  const last7 = state.sessions
    .filter((s) => daysBetween(s.date, t) < 7)
    .reduce((sum, s) => sum + s.minutes, 0);
  const volumePct = Math.min(100, Math.round((last7 / 300) * 100));
  const streakPct = Math.min(100, Math.round((state.currentStreak / 14) * 100));
  const consistencyPct = Math.round(volumePct * 0.6 + streakPct * 0.4);

  const components: ReadinessComponent[] = [
    {
      id: "coverage",
      label: "Reading coverage",
      pct: coveragePct,
      weight: 0.3,
      detail: `${read}/${chapters.length} chapters completed`,
    },
    {
      id: "mastery",
      label: "Flashcard mastery",
      pct: masteryPct,
      weight: 0.3,
      detail: `${mastered}/${deck.length} cards mastered`,
    },
    {
      id: "boss",
      label: "Mock exam",
      pct: bossPct,
      weight: 0.25,
      detail: trophies[examSlug]
        ? `Best score ${bossPct}%`
        : diag
        ? `Diagnostic: ${diag.correct}/${diag.total}`
        : "Not yet attempted",
    },
    {
      id: "consistency",
      label: "Consistency",
      pct: consistencyPct,
      weight: 0.15,
      detail: `${Math.round(last7 / 60 * 10) / 10} hrs this week · ${state.currentStreak}-day streak`,
    },
  ];

  const score = Math.round(components.reduce((s, c) => s + c.pct * c.weight, 0));

  // A brand-new account has zero coverage, zero mastery and zero consistency, so
  // the weighted blend collapses toward zero — which is how the app ended up
  // telling a first-time visitor they had a "2% chance of passing" before they'd
  // done anything at all. That number was nonsense and it destroyed trust.
  //
  // If they've taken the diagnostic and genuinely haven't studied here yet, the
  // diagnostic IS the honest estimate. Don't dilute real evidence with zeros
  // that only mean "we haven't watched you yet."
  const hasStudied = coveragePct > 0 || masteryPct > 0 || consistencyPct > 0;
  if (diag && !hasStudied) {
    return { score: diag.pct, components };
  }

  return { score, components };
}
