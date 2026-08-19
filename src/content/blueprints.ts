// ============================================================
// Certus — official exam blueprints
//
// WHY THIS EXISTS
// Until now the question banks were written to a per-topic QUOTA, not to
// the exam. Series 7 had exactly 11 questions in 13 of its 14 topics;
// SIE had a flat 6. But the real SIE is 44% Products and 9% Regulatory,
// and the real Series 7 is 73% one function. A bank weighted evenly is
// mis-weighted everywhere, and there was no definition of "finished", so
// content got written until it felt done.
//
// This file is the target. `scripts/coverage.mjs` measures the banks
// against it and reports an honest percentage. "100% complete" means
// every topic hits its question target at the right difficulty spread —
// not that somebody worked on it for a while.
//
// WEIGHTS ARE FROM THE EXAM SPONSORS. Do not adjust them to flatter our
// progress. If a sponsor republishes an outline, update here and let the
// coverage number move.
// ============================================================

export interface TopicTarget {
  topicId: string;
  name: string;
  /** Share of the real exam, as a percentage. Sums to ~100 per exam. */
  weight: number;
}

export interface Blueprint {
  examSlug: string;
  name: string;
  /** Scored questions on the real exam. */
  examQuestions: number;
  /** Bank size target. ~10x exam length: below that candidates recycle
   *  questions and the bank starts training memory instead of reasoning. */
  targetBank: number;
  source: string;
  topics: TopicTarget[];
}

// Difficulty mix every bank should hold. We over-corrected toward "hard"
// during the trap-aware rewrite — SIE ended up 73% difficulty-3 on an
// ENTRY-LEVEL exam, which is a bank a beginner bounces off. A learner
// needs a ramp.
export const DIFFICULTY_MIX = { 1: 0.30, 2: 0.45, 3: 0.25 } as const;
/** Allowed absolute deviation per band before the audit complains. */
export const DIFFICULTY_TOLERANCE = 0.08;

export const BLUEPRINTS: Blueprint[] = [
  {
    examSlug: "sie",
    name: "SIE",
    examQuestions: 75,
    targetBank: 750,
    source: "FINRA SIE content outline (12/33/23/7 of 75 scored)",
    topics: [
      { topicId: "markets", name: "Knowledge of Capital Markets", weight: 16 },
      { topicId: "products", name: "Understanding Products and Their Risks", weight: 44 },
      { topicId: "trading", name: "Trading, Customer Accounts & Prohibited Activities", weight: 31 },
      { topicId: "regulation", name: "Overview of the Regulatory Framework", weight: 9 },
    ],
  },
  {
    examSlug: "series-7",
    name: "Series 7",
    examQuestions: 125,
    targetBank: 1500,
    source: "FINRA Series 7 content outline (9/11/91/14 of 125 scored)",
    topics: [
      { topicId: "f1-business", name: "Seeks Business for the Broker-Dealer", weight: 7 },
      { topicId: "f2-accounts", name: "Opens Accounts / Evaluates Financial Profile", weight: 9 },
      { topicId: "f3-recommend", name: "Provides Information, Makes Recommendations, Records", weight: 73 },
      { topicId: "f4-process", name: "Processes and Confirms Transactions", weight: 11 },
    ],
  },
  {
    examSlug: "series-66",
    name: "Series 66",
    examQuestions: 100,
    targetBank: 1000,
    source: "NASAA Series 66 content outline",
    topics: [
      { topicId: "economics", name: "Economic Factors and Business Information", weight: 5 },
      { topicId: "vehicles", name: "Investment Vehicle Characteristics", weight: 20 },
      { topicId: "recommendations", name: "Client Recommendations and Strategies", weight: 30 },
      { topicId: "laws", name: "Laws, Regulations, and Guidelines", weight: 45 },
    ],
  },
  {
    // Weights are the MIDPOINT of CFA Institute's published ranges,
    // normalised to 100. Ranges (2026 L1): Ethics 15-20, Quant 6-9,
    // Econ 6-9, FSA 11-14, Corp 6-9, Equity 11-14, FI 11-14, Deriv 5-8,
    // Alts 7-10, PM 8-12.
    examSlug: "cfa",
    name: "CFA Level I",
    examQuestions: 180,
    targetBank: 2500,
    source: "CFA Institute 2026 Level I topic weights (range midpoints)",
    topics: [
      { topicId: "ethics", name: "Ethical and Professional Standards", weight: 17.1 },
      { topicId: "quant", name: "Quantitative Methods", weight: 7.3 },
      { topicId: "econ", name: "Economics", weight: 7.3 },
      { topicId: "fra", name: "Financial Statement Analysis", weight: 12.2 },
      { topicId: "corp", name: "Corporate Issuers", weight: 7.3 },
      { topicId: "equity", name: "Equity Investments", weight: 12.2 },
      { topicId: "fixed", name: "Fixed Income", weight: 12.2 },
      { topicId: "deriv", name: "Derivatives", weight: 6.3 },
      { topicId: "alts", name: "Alternative Investments", weight: 8.3 },
      { topicId: "pm", name: "Portfolio Management", weight: 9.8 },
    ],
  },
  {
    examSlug: "cfa-l2",
    name: "CFA Level II",
    examQuestions: 88,
    targetBank: 1800,
    source: "CFA Institute Level II topic weights (range midpoints)",
    topics: [
      { topicId: "ethics", name: "Ethical and Professional Standards", weight: 10.5 },
      { topicId: "quant", name: "Quantitative Methods", weight: 6.3 },
      { topicId: "econ", name: "Economics", weight: 6.3 },
      { topicId: "fra", name: "Financial Statement Analysis", weight: 11.6 },
      { topicId: "corp", name: "Corporate Issuers", weight: 6.3 },
      { topicId: "equity", name: "Equity Valuation", weight: 11.6 },
      { topicId: "fixed", name: "Fixed Income", weight: 11.6 },
      { topicId: "deriv", name: "Derivatives", weight: 6.3 },
      { topicId: "alts", name: "Alternative Investments", weight: 6.3 },
      { topicId: "pm", name: "Portfolio Management", weight: 11.6 },
    ],
  },
  {
    examSlug: "cfa-l3",
    name: "CFA Level III",
    examQuestions: 88,
    targetBank: 1500,
    source: "CFA Institute Level III topic weights (range midpoints)",
    topics: [
      { topicId: "ethics", name: "Ethical and Professional Standards", weight: 10 },
      { topicId: "aa", name: "Asset Allocation", weight: 10 },
      { topicId: "fi", name: "Fixed Income", weight: 10 },
      { topicId: "eq", name: "Equity", weight: 10 },
      { topicId: "alts", name: "Alternative Investments", weight: 10 },
      { topicId: "derivrisk", name: "Derivatives and Risk Management", weight: 10 },
      { topicId: "pwm", name: "Private Wealth Management", weight: 10 },
      { topicId: "institutional", name: "Institutional Portfolio Management", weight: 10 },
      { topicId: "trading", name: "Trading, Performance Evaluation, Manager Selection", weight: 10 },
      { topicId: "behavioral", name: "Behavioral Finance", weight: 10 },
    ],
  },
];

export function blueprintFor(slug: string): Blueprint | undefined {
  return BLUEPRINTS.find((b) => b.examSlug === slug);
}

/** How many questions a topic needs, from its exam weight. */
export function topicTarget(bp: Blueprint, topicId: string): number {
  const t = bp.topics.find((x) => x.topicId === topicId);
  if (!t) return 0;
  const totalWeight = bp.topics.reduce((s, x) => s + x.weight, 0);
  return Math.round((t.weight / totalWeight) * bp.targetBank);
}

// ============================================================
// CHAPTER TOPIC -> BLUEPRINT TOPIC
//
// Our content is organised by CHAPTER topic ("options", "margin"), which
// is what the skill tree and "study Options" need. Exam sponsors organise
// by FUNCTION or topic area. Both are useful, so we keep both and map
// between them rather than retagging and losing the chapter granularity.
//
// Anything unmapped shows up in the coverage report as an orphan, which
// is deliberate: an unmapped question counts toward nothing, and the
// report should say so loudly rather than quietly inflating a percentage.
// ============================================================
export const TOPIC_MAP: Record<string, Record<string, string>> = {
  sie: {
    markets: "markets", underwriting: "markets", economics: "markets",
    products: "products", equity: "products", debt: "products",
    funds: "products", options: "products", munis: "products",
    trading: "trading", accounts: "trading", suitability: "trading",
    regulation: "regulation",
  },
  "series-7": {
    // F1 prospecting / communications with the public
    regulations: "f1-business",
    // F2 account opening and financial profile
    accounts: "f2-accounts",
    // F3 the bulk of the exam: product knowledge and recommendations
    options: "f3-recommend", "options-adv": "f3-recommend", munis: "f3-recommend",
    debt: "f3-recommend", packaged: "f3-recommend", equity: "f3-recommend",
    govt: "f3-recommend", dpp: "f3-recommend", suitability: "f3-recommend",
    economics: "f3-recommend", underwriting: "f3-recommend",
    // F4 execution and settlement
    margin: "f4-process",
  },
  "series-66": {
    economics: "economics",
    vehicles: "vehicles", "portfolio-theory": "vehicles", retirement: "vehicles",
    strategies: "recommendations", profile: "recommendations", recommendations: "recommendations",
    registration: "laws", "ia-regulation": "laws", "business-practices": "laws",
    fiduciary: "laws", "federal-acts": "laws", communications: "laws",
    taxation: "laws", laws: "laws", ethics: "laws",
  },
  "cfa-l2": { "quant-ml": "quant", "fra-combos": "fra", "fi-term": "fixed" },
  "cfa-l3": {
    "pm-asset": "aa", cme: "aa", fixed: "fi", "pm-equity": "eq",
    "pm-deriv": "derivrisk", currency: "derivrisk", "pm-private": "pwm",
    "risk-individuals": "pwm", "pm-perf": "trading", "pm-alts": "alts",
  },
};
