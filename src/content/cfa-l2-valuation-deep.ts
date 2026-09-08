// ============================================================
// Certus — CFA Level II: free cash flow and residual income valuation
//
// WHY THIS FILE EXISTS
// Level II readings sit at 692 of ~1,200 minutes. Equity valuation is the
// heaviest computational block on the exam, and the two models candidates
// most often get structurally wrong — FCFF/FCFE and residual income —
// deserve worked treatment rather than a summary.
//
// EVERY NUMBER COMPUTED IN PYTHON FIRST. The FCFF and FCFE calculations
// are shown as a single reconciliation so the relationship between them
// is visible rather than memorised as two separate formulas.
// ============================================================

import { Chapter, Question } from "./types";

export const l2ValuationChapters: Chapter[] = [
  {
    id: "cfa-l2-fcf-valuation",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    title: "Free Cash Flow Valuation: FCFF, FCFE, and Which Discount Rate",
    readingMinutes: 24,
    summary:
      "Building both free cash flow measures from net income, the bridge between them, matching each to its discount rate, and the errors that produce a plausible wrong answer.",
    intro:
      "Free cash flow valuation is the most heavily computed topic at Level II. The formulas are short; the marks are lost on two structural choices — which cash flow you built, and which discount rate it must be paired with. Mismatch them and every subsequent number is wrong.",
    sections: [
      {
        heading: "Building both measures",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "FCFF and FCFE from net income",
              expr: "FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv          FCFE = FCFF − Int(1 − t) + net borrowing",
              note: "FCFF is available to ALL capital providers, so interest is added back. FCFE is what remains for equity after servicing debt.",
            },
          },
          {
            kind: "example",
            example: {
              title: "One set of figures, both measures, reconciled",
              prompt:
                "Net income $300M, non-cash charges $120M, interest expense $60M, tax rate 25%, fixed capital investment $180M, working capital investment $40M, net borrowing $50M. Compute FCFF and FCFE.",
              steps: [
                "After-tax interest = $60M × (1 − 0.25) = $45M.",
                "FCFF = 300 + 120 + 45 − 180 − 40 = $245M.",
                "FCFE = FCFF − after-tax interest + net borrowing = 245 − 45 + 50 = $250M.",
              ],
              answer:
                "FCFF $245M and FCFE $250M. FCFE exceeds FCFF here because the company borrowed $50M — more than the $45M of after-tax interest it paid. That is the reconciliation in one line: the debt holders took $45M out and put $50M back in, leaving equity $5M better off than the firm-level figure. Seeing FCFE above FCFF should immediately prompt the question 'did they borrow?' rather than a suspicion of arithmetic error.",
            },
          },
          {
            kind: "callout",
            label: "The pairing that decides everything",
            body: "FCFF is discounted at WACC and produces FIRM value — subtract debt to reach equity. FCFE is discounted at the COST OF EQUITY and produces equity value directly. Discounting FCFF at the cost of equity, or FCFE at WACC, is the single most damaging error in the topic because the answer looks entirely reasonable. Write down which cash flow you have before you reach for a rate.",
          },
        ],
      },
      {
        heading: "Choosing between them",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "When each is preferable",
              headers: ["Situation", "Use", "Why"],
              rows: [
                ["Stable capital structure", "FCFE", "Simpler; goes straight to equity value"],
                ["Changing leverage", "FCFF", "WACC absorbs the structure change more gracefully"],
                ["Negative FCFE", "FCFF", "A negative figure is hard to grow and discount sensibly"],
                ["Highly levered firm", "FCFF", "FCFE is volatile and dominated by financing flows"],
                ["Valuing a division", "FCFF", "No meaningful capital structure exists at that level"],
              ],
            },
          },
          {
            kind: "bullets",
            items: [
              "Non-cash charges are not just depreciation — add back amortisation, impairments, deferred tax increases and losses; SUBTRACT gains and deferred tax decreases.",
              "Working capital investment excludes cash and short-term debt; both belong to financing rather than operations.",
              "Dividends are irrelevant to both measures. FCFE is what COULD be paid, which is precisely why it works where a dividend model does not.",
              "Starting from EBITDA or CFO instead of net income is common — the adjustments differ, so be explicit about the starting point.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "FCFF", def: "Cash to all capital providers; discount at WACC; gives firm value." },
      { term: "FCFE", def: "Cash to equity after debt service; discount at the cost of equity; gives equity value." },
      { term: "The bridge", def: "FCFE = FCFF − after-tax interest + net borrowing." },
      { term: "WCInv", def: "Working capital investment, excluding cash and short-term debt." },
    ],
    takeaways: [
      "FCFE above FCFF means the company borrowed more than it paid in after-tax interest.",
      "FCFF pairs with WACC and gives firm value; FCFE pairs with the cost of equity and gives equity value.",
      "Mismatching cash flow and discount rate produces a plausible, wrong answer.",
      "Use FCFF when leverage is changing, FCFE is negative, or you are valuing a division.",
      "Working capital excludes cash and short-term debt — those are financing.",
      "Dividends do not enter either measure; FCFE is what COULD be paid.",
    ],
  },

  {
    id: "cfa-l2-residual-income",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    title: "Residual Income: Valuing the Premium Over Book",
    readingMinutes: 22,
    summary:
      "Why residual income recognises value earlier than a dividend model, how the clean surplus relation underpins it, and when it is the right tool.",
    intro:
      "Residual income asks a sharper question than other models: not what the company earns, but what it earns ABOVE the cost of the equity capital employed. That framing makes value creation explicit and makes the model useful exactly where dividend and cash flow models struggle.",
    sections: [
      {
        heading: "The model",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Residual income and value",
              expr: "RI = book value × (ROE − r)          V₀ = B₀ + RI₁ / (r − g)",
              note: "Value equals current book value plus the present value of everything earned above the required return.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Where the premium over book comes from",
              prompt:
                "Book value per share is $25.00, ROE is 14%, the required return is 10%, and residual income grows at 4%. Value the share and say where the value sits.",
              steps: [
                "RI per share = $25.00 × (14% − 10%) = $1.00.",
                "V₀ = $25.00 + $1.00 / (0.10 − 0.04) = $25.00 + $16.67.",
              ],
              answer:
                "$41.67, of which $25.00 is book value and $16.67 — 40% of the total — is the premium earned by an ROE above the required return. Note what happens if ROE equals r: residual income is zero and the share is worth exactly book. That is the model's cleanest statement, and it makes explicit what other models leave implicit: a company earning only its cost of capital creates no value however large its profits look.",
            },
          },
          {
            kind: "callout",
            label: "Clean surplus is the assumption to check",
            body: "The model requires the CLEAN SURPLUS RELATION: ending book value = beginning book value + net income − dividends. Anything bypassing the income statement and hitting equity directly — certain currency translation, some pension adjustments, available-for-sale revaluations under some regimes — breaks it. Those items are exactly what other comprehensive income collects, so a company with large OCI needs adjustment before residual income is reliable.",
          },
        ],
      },
      {
        heading: "When to use it",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Residual income against the alternatives",
              headers: ["Situation", "Residual income", "Why"],
              rows: [
                ["No dividends paid", "Strong", "Does not need a distribution to value"],
                ["Negative free cash flow", "Strong", "Recognises value from earnings, not cash timing"],
                ["Uncertain terminal value", "Strong", "Most value sits in book value up front, not in a terminal estimate"],
                ["Accounting quality is poor", "Weak", "The model rests entirely on reported book and earnings"],
                ["Clean surplus violated", "Weak", "Requires adjustment before it can be trusted"],
              ],
            },
          },
          {
            kind: "p",
            text: "The structural advantage is where the value sits. A dividend or free cash flow model typically places most of the value in a terminal estimate many years out; residual income places most of it in TODAY'S BOOK VALUE, which is observable. That makes the answer far less sensitive to the terminal growth assumption — the single most fragile input in the other models.",
          },
          {
            kind: "bullets",
            items: [
              "Residual income tends to decline toward zero over time as competition erodes excess returns, so a persistence factor is often applied.",
              "Economic value added is the same idea applied at firm level: NOPAT minus a capital charge.",
              "The model needs accrual accounting adjustments where book value is materially misstated — off-balance-sheet items, intangibles, LIFO reserves.",
              "It works best where book value is meaningful, which is why it suits financial firms particularly well.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Residual income", def: "Book value × (ROE − r) — earnings above the cost of equity capital." },
      { term: "Clean surplus relation", def: "Ending book = beginning book + NI − dividends. Broken by OCI items." },
      { term: "Persistence factor", def: "Adjustment for residual income decaying toward zero." },
      { term: "Economic value added", def: "The firm-level equivalent: NOPAT less a capital charge." },
    ],
    takeaways: [
      "Value is book value plus the present value of earnings above the required return.",
      "If ROE equals r, the share is worth exactly book — profits alone are not value creation.",
      "Most of the value sits in observable book value, not a fragile terminal estimate.",
      "Clean surplus is the assumption to verify; large OCI breaks it.",
      "Strong where dividends are absent, free cash flow is negative, or terminal value is uncertain.",
      "Weak where accounting quality is poor — the model runs entirely on reported figures.",
    ],
  },
];

export const l2ValuationQuestions: Question[] = [];
