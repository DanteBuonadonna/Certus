// ============================================================
// Ascent — Exam Catalog
// The 10 hardest finance exams + the full Wealth Management track.
// CFA is the flagship and is fully detailed; others are scaffolded
// with enough structure to drive the study planner + skill tree.
// ============================================================

export interface ExamTopic {
  id: string;
  name: string;
  weight: number; // % of the exam (approx, for skill-tree sizing)
}

export interface ExamLevel {
  id: string;
  name: string;
  recommendedHours: number; // industry-standard prep hours
  passRate: number; // approximate %, for "difficulty" framing
  topics: ExamTopic[];
}

export interface Exam {
  slug: string;
  name: string;
  fullName: string;
  category: "Investment" | "Accounting" | "Risk" | "Planning" | "Licensing" | "Actuarial";
  blurb: string;
  difficulty: 1 | 2 | 3 | 4 | 5; // 5 = brutal
  flagship?: boolean;
  wealthTrack?: boolean; // part of the wealth-management sequence
  accent: string; // hex used for the exam's card/skill-tree theme
  levels: ExamLevel[];
}

// ---- CFA: fully detailed (the 10 topic areas, real weights) --------------
const CFA_TOPICS_L1: ExamTopic[] = [
  { id: "ethics", name: "Ethical & Professional Standards", weight: 15 },
  { id: "quant", name: "Quantitative Methods", weight: 10 },
  { id: "econ", name: "Economics", weight: 10 },
  { id: "fra", name: "Financial Statement Analysis", weight: 15 },
  { id: "corp", name: "Corporate Issuers", weight: 10 },
  { id: "equity", name: "Equity Investments", weight: 11 },
  { id: "fixed", name: "Fixed Income", weight: 11 },
  { id: "deriv", name: "Derivatives", weight: 6 },
  { id: "alts", name: "Alternative Investments", weight: 7 },
  { id: "pm", name: "Portfolio Management & Wealth Planning", weight: 5 },
];

export const EXAMS: Exam[] = [
  // CFA is split into three separate tracks — most candidates only need
  // the level in front of them. Level I keeps the original "cfa" slug so
  // existing user progress carries over untouched.
  {
    slug: "cfa",
    name: "CFA I",
    fullName: "Chartered Financial Analyst — Level I",
    category: "Investment",
    blurb:
      "The gold standard's front door: ten disciplines, ~300 hours, a ~37% pass rate. Foundation of the charter.",
    difficulty: 5,
    flagship: true,
    wealthTrack: true,
    accent: "#534AB7",
    levels: [{ id: "l1", name: "Level I", recommendedHours: 300, passRate: 37, topics: CFA_TOPICS_L1 }],
  },
  {
    slug: "cfa-l2",
    name: "CFA II",
    fullName: "Chartered Financial Analyst — Level II",
    category: "Investment",
    blurb:
      "Vignette item sets and serious valuation: where analysts are made. ~320 hours, applied from the first question.",
    difficulty: 5,
    flagship: true,
    wealthTrack: true,
    accent: "#534AB7",
    levels: [
      { id: "l2", name: "Level II", recommendedHours: 320, passRate: 47, topics: CFA_TOPICS_L1.map((t) => ({ ...t })) },
    ],
  },
  {
    slug: "cfa-l3",
    name: "CFA III",
    fullName: "Chartered Financial Analyst — Level III",
    category: "Investment",
    blurb:
      "Portfolio management and essays — the final gate to the charter. ~340 hours of synthesis over recall.",
    difficulty: 5,
    flagship: true,
    wealthTrack: true,
    accent: "#534AB7",
    levels: [
      {
        id: "l3",
        name: "Level III",
        recommendedHours: 340,
        passRate: 48,
        topics: [
          { id: "ethics", name: "Ethical & Professional Standards", weight: 10 },
          { id: "pm-port", name: "Portfolio Construction", weight: 18 },
          { id: "pm-asset", name: "Asset Allocation", weight: 15 },
          { id: "pm-private", name: "Private Wealth & Institutional", weight: 15 },
          { id: "fixed", name: "Fixed Income", weight: 12 },
          { id: "equity", name: "Equity", weight: 12 },
          { id: "deriv-risk", name: "Derivatives & Risk Management", weight: 10 },
          { id: "perf", name: "Performance & Behavioral Finance", weight: 8 },
        ],
      },
    ],
  },
  {
    slug: "cpa",
    name: "CPA",
    fullName: "Certified Public Accountant",
    category: "Accounting",
    blurb: "Four sections, an 18-month window, and a ~50% pass rate per part. The accounting gatekeeper.",
    difficulty: 4,
    accent: "#1D9E75",
    levels: [
      { id: "aud", name: "AUD — Auditing", recommendedHours: 90, passRate: 47, topics: [] },
      { id: "far", name: "FAR — Financial Reporting", recommendedHours: 120, passRate: 43, topics: [] },
      { id: "reg", name: "REG — Regulation", recommendedHours: 90, passRate: 59, topics: [] },
      { id: "disc", name: "Discipline (BAR/ISC/TCP)", recommendedHours: 90, passRate: 50, topics: [] },
    ],
  },
  {
    slug: "actuarial",
    name: "Actuarial (SOA/CAS)",
    fullName: "Society of Actuaries / Casualty Actuarial Society",
    category: "Actuarial",
    blurb: "Exam P, FM, and beyond. Pass rates near 40% and years of exams. Arguably the hardest grind in finance.",
    difficulty: 5,
    accent: "#BA7517",
    levels: [
      { id: "p", name: "Exam P — Probability", recommendedHours: 300, passRate: 43, topics: [] },
      { id: "fm", name: "Exam FM — Financial Math", recommendedHours: 300, passRate: 41, topics: [] },
      { id: "fam", name: "Exam FAM", recommendedHours: 250, passRate: 45, topics: [] },
    ],
  },
  {
    slug: "frm",
    name: "FRM",
    fullName: "Financial Risk Manager",
    category: "Risk",
    blurb: "GARP's two-part risk certification. Quant-heavy, ~45% pass rate. The risk-management standard.",
    difficulty: 4,
    accent: "#E24B4A",
    levels: [
      { id: "p1", name: "Part I", recommendedHours: 240, passRate: 45, topics: [] },
      { id: "p2", name: "Part II", recommendedHours: 240, passRate: 53, topics: [] },
    ],
  },
  {
    slug: "caia",
    name: "CAIA",
    fullName: "Chartered Alternative Investment Analyst",
    category: "Investment",
    blurb: "Private equity, hedge funds, real assets. Two levels for the alternatives world.",
    difficulty: 4,
    accent: "#7C4DC4",
    levels: [
      { id: "l1", name: "Level I", recommendedHours: 200, passRate: 49, topics: [] },
      { id: "l2", name: "Level II", recommendedHours: 200, passRate: 61, topics: [] },
    ],
  },
  {
    slug: "cfp",
    name: "CFP",
    fullName: "Certified Financial Planner",
    category: "Planning",
    blurb: "The financial-planning credential clients look for. Tax, estate, retirement, insurance, investments.",
    difficulty: 3,
    wealthTrack: true,
    accent: "#0E9B94",
    levels: [{ id: "cfp", name: "CFP Exam", recommendedHours: 250, passRate: 67, topics: [] }],
  },
  {
    slug: "sie",
    name: "SIE",
    fullName: "Securities Industry Essentials (FINRA)",
    category: "Licensing",
    blurb: "The entry-level FINRA exam everyone starts with — the prerequisite for the Series 7 and beyond. Broad fundamentals of the securities industry.",
    difficulty: 2,
    wealthTrack: true,
    accent: "#0D9488",
    levels: [{ id: "sie", name: "SIE Exam", recommendedHours: 40, passRate: 74, topics: [] }],
  },
  {
    slug: "series-7",
    name: "Series 7",
    fullName: "General Securities Representative (FINRA)",
    category: "Licensing",
    blurb: "The cornerstone license for selling securities. The anchor of the wealth-management track. Pairs with the SIE.",
    difficulty: 3,
    wealthTrack: true,
    accent: "#2563EB",
    levels: [{ id: "s7", name: "Series 7 (Top-Off)", recommendedHours: 90, passRate: 65, topics: [] }],
  },
  {
    slug: "series-66",
    name: "Series 63/65/66",
    fullName: "Uniform State Law & Investment Adviser",
    category: "Licensing",
    blurb: "State securities law plus the investment-adviser exam. Pairs with Series 7 for full advisory licensing.",
    difficulty: 2,
    wealthTrack: true,
    accent: "#0891B2",
    levels: [
      { id: "s63", name: "Series 63", recommendedHours: 25, passRate: 70, topics: [] },
      { id: "s65", name: "Series 65", recommendedHours: 50, passRate: 68, topics: [] },
      { id: "s66", name: "Series 66", recommendedHours: 60, passRate: 68, topics: [] },
    ],
  },
  {
    slug: "series-79",
    name: "Series 79",
    fullName: "Investment Banking Representative (FINRA)",
    category: "Licensing",
    blurb: "The license for M&A and capital-raising bankers. Debt/equity offerings, mergers, restructuring.",
    difficulty: 3,
    accent: "#9333EA",
    levels: [{ id: "s79", name: "Series 79", recommendedHours: 80, passRate: 60, topics: [] }],
  },
  {
    slug: "series-24",
    name: "Series 24",
    fullName: "General Securities Principal (FINRA)",
    category: "Licensing",
    blurb: "The supervisor/principal license. Broker-dealer management, compliance, and oversight.",
    difficulty: 3,
    accent: "#DB2777",
    levels: [{ id: "s24", name: "Series 24", recommendedHours: 100, passRate: 58, topics: [] }],
  },
];

// The wealth-management sequence, in the order most advisors take them.
export const WEALTH_TRACK = ["series-7", "series-66", "cfp", "cfa"];

export function getExam(slug: string): Exam | undefined {
  return EXAMS.find((e) => e.slug === slug);
}

export function totalHours(exam: Exam): number {
  return exam.levels.reduce((s, l) => s + l.recommendedHours, 0);
}

export function difficultyLabel(d: number): string {
  return ["", "Approachable", "Moderate", "Hard", "Very Hard", "Brutal"][d] ?? "";
}
