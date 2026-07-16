// ============================================================
// Certus — THE ONE PLACE THAT DESCRIBES FREE vs PRO.
//
// Why this file exists: a July 2026 funnel audit found the paywall telling
// three different stories at once. The sidebar sold "every exam + boss
// battles" (already free — canAccessExam returns true for everyone), the boss
// gate promised "one free sitting", useAccess said boss was Pro-only, and the
// reading gate said half the chapters. A user who hits one gate learns a rule,
// then the next gate contradicts it. When people can't predict what's paid,
// they don't trust the upgrade — they leave.
//
// RULE: no component writes its own free/Pro copy. Import from here. If you
// find yourself typing "every exam" into a gate, you're about to reintroduce
// the bug.
// ============================================================

import { FREE_CHAPTERS, FREE_DAILY_QUESTIONS } from "./access";

/** The single sentence. Everything else on this page is a restatement of it. */
export const TIER_SENTENCE =
  `Free: the first ${FREE_CHAPTERS} chapters of any exam, ${FREE_DAILY_QUESTIONS} practice questions a day, and one full timed mock with your real odds of passing. Pro: everything, unlimited.`;

/** Short form — sidebar, tight spaces. */
export const TIER_SHORT = `${FREE_CHAPTERS} chapters · ${FREE_DAILY_QUESTIONS} questions/day · 1 full mock`;

/** What you get, as bullets. Used on /billing and the landing pricing table. */
export const FREE_INCLUDES = [
  `First ${FREE_CHAPTERS} chapters of every exam`,
  `${FREE_DAILY_QUESTIONS} practice questions a day`,
  "One full timed mock + your odds of passing",
  "One free sitting of The Final, per exam",
];

export const PRO_INCLUDES = [
  "Every chapter of every exam",
  "Unlimited practice questions",
  "Unlimited mock + Final retakes",
  "Streaks, divisions, and challenges across all tracks",
];

// ---- Price framing ----
// $115/yr quoted flat reads expensive to someone who hasn't built a habit yet.
// Same money, monthly framing: the yearly plan is what we want them on (4.6x
// the LTV of a monthly that churns in month two), so it gets the badge and the
// smaller-sounding number.
export const ANNUAL_TOTAL = 115;
export const MONTHLY_PRICE = 24.99;
export const ANNUAL_PER_MONTH = "$9.58"; // 115 / 12, rounded down to the cent

/** The headline price we lead with in-app. */
export const PRICE_LEAD = `${ANNUAL_PER_MONTH}/mo billed yearly`;
/** The alternative, always offered — never hide the flexible option. */
export const PRICE_ALT = `$${MONTHLY_PRICE}/mo`;

/** The anchor. True, checkable, and the reason any of this is cheap. */
export const EXAM_COST_ANCHOR = "The exam itself costs $1,140.";

/** Standard gate line. Same words at every gate, every time. */
export const GATE_PRICE_LINE = `${PRICE_LEAD}, or ${PRICE_ALT} month to month. ${EXAM_COST_ANCHOR}`;
