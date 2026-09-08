// ============================================================
// Certus — CFA Level I Corporate Finance and Economics
//
// WHY THIS FILE EXISTS
// Corporate Finance (7.3%, 26 of 88 min) and Economics (7.3%, 41 of 88).
//
// An Alternative Investments chapter was written here and then REMOVED:
// cfa-l1-alts-deep.ts already covers the same ground across five chapters
// (fee arithmetic, hurdles, high-water marks, appraisal smoothing, real
// assets) and covers it more thoroughly. Two chapters teaching 2-and-20
// twice is worse for a student than one, and it inflates the reading-time
// figure without adding anything. Non-redundant beats a bigger number.
//
// NAMES: CFA Institute's current table calls this Corporate Finance
// (was Corporate Issuers). The topicId key stays "corp" so saved user
// progress carries over.
//
// EVERY NUMBER COMPUTED IN PYTHON FIRST. The IRR was solved by bisection
// and checked by confirming NPV at that rate is zero; the DOL/DFL example
// is verified by tracing a 10% sales change through to net income.
// ============================================================

import { Chapter, Question } from "./types";

export const corpEconAltsChapters: Chapter[] = [
  // ==========================================================
  // CORPORATE FINANCE
  // ==========================================================
  {
    id: "cfa-l1-corp-capital",
    examSlug: "cfa",
    topicId: "corp",
    topicName: "Corporate Issuers",
    title: "Capital Budgeting, Cost of Capital, and Leverage",
    readingMinutes: 22,
    summary:
      "Why NPV beats IRR when they disagree, how to build a weighted average cost of capital, and how operating and financial leverage multiply together.",
    intro:
      "Corporate finance at Level I is three connected questions: which projects to take, what capital costs, and how the choice of fixed costs and debt magnifies whatever happens next. All three are computational, so the arithmetic below is the reading.",
    sections: [
      {
        heading: "NPV and IRR, and why they can disagree",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Net present value and internal rate of return",
              expr: "NPV = Σ CF_t / (1 + r)^t          IRR is the rate at which NPV = 0",
              note: "NPV is measured in currency and assumes reinvestment at the required return. IRR is a rate and implicitly assumes reinvestment at the IRR itself.",
            },
          },
          {
            kind: "example",
            example: {
              title: "A project that fails on both measures, consistently",
              prompt:
                "A project costs $1,000 today and returns $400 at the end of each of three years. The required return is 10%. Compute NPV and IRR.",
              steps: [
                "$400/1.10 = $363.64; $400/1.10² = $330.58; $400/1.10³ = $300.53.",
                "NPV = −$1,000 + $363.64 + $330.58 + $300.53 = −$5.26.",
                "IRR is the rate setting NPV to zero: 9.70%.",
              ],
              answer:
                "NPV is −$5.26 and the IRR is 9.70%, below the 10% required return. Both say reject, and they agree because this is a single conventional project. Note how close it is — the project returns almost exactly what is required, and NPV puts a currency value on the shortfall while IRR expresses it as a rate.",
            },
          },
          {
            kind: "callout",
            label: "When they conflict, NPV wins",
            body: "For mutually exclusive projects that differ in scale or in cash flow timing, NPV and IRR can rank them differently. NPV is correct, for two reasons: it measures value created in currency, which is what shareholders actually receive, and its reinvestment assumption (the required return) is realistic where IRR's (the IRR itself) is not. IRR also misbehaves outright on non-conventional cash flows — a project whose sign changes more than once can have multiple IRRs or none.",
          },
        ],
      },
      {
        heading: "The weighted average cost of capital",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "WACC",
              expr: "WACC = (E/V) × r_e + (D/V) × r_d × (1 − t)",
              note: "Only debt gets the tax shield, because interest is deductible and dividends are not. Weights should be MARKET values, not book.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Building a WACC",
              prompt:
                "Equity is worth $600M and debt $400M. The cost of equity is 12%, the pre-tax cost of debt 6%, and the tax rate 25%. Compute the WACC.",
              steps: [
                "V = $1,000M, so E/V = 0.60 and D/V = 0.40.",
                "After-tax cost of debt = 6% × (1 − 0.25) = 4.50%.",
                "Equity component = 0.60 × 12% = 7.20%. Debt component = 0.40 × 4.50% = 1.80%.",
              ],
              answer:
                "WACC = 9.00%. The tax shield cut the debt cost from 6% to 4.50%, which is why debt looks cheap — but the cheapness is not free. Adding debt raises the cost of EQUITY, because equity holders now stand behind a larger fixed claim, and beyond some point that offsets the shield entirely.",
            },
          },
        ],
      },
      {
        heading: "Leverage: two multipliers that compound",
        blocks: [
          {
            kind: "p",
            text: "Operating leverage comes from FIXED OPERATING costs and magnifies sales changes into EBIT changes. Financial leverage comes from FIXED FINANCING costs and magnifies EBIT changes into net income changes. They multiply.",
          },
          {
            kind: "formula",
            formula: {
              label: "Degree of operating, financial and total leverage",
              expr: "DOL = Q(P − V) / [ Q(P − V) − F ]     DFL = EBIT / (EBIT − interest)     DTL = DOL × DFL",
              note: "Breakeven units = fixed costs / contribution margin per unit.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Tracing a 10% sales rise all the way down",
              prompt:
                "A company sells 10,000 units at $50. Variable cost is $30 per unit, fixed operating costs $120,000 and interest $30,000. Compute DOL, DFL, DTL, breakeven, and the effect of a 10% sales increase.",
              steps: [
                "Contribution margin = $50 − $30 = $20/unit. Total contribution = 10,000 × $20 = $200,000.",
                "EBIT = $500,000 − $300,000 − $120,000 = $80,000.",
                "DOL = $200,000 / ($200,000 − $120,000) = 2.50.",
                "DFL = $80,000 / ($80,000 − $30,000) = 1.60.",
                "DTL = 2.50 × 1.60 = 4.00. Breakeven = $120,000 / $20 = 6,000 units.",
              ],
              answer:
                "A 10% rise in sales lifts EBIT by 25% and net income by 40%. That 4× total leverage is the whole point: the same structure that turns a 10% gain into 40% turns a 10% DECLINE into a 40% fall. High leverage is not a strategy, it is an amplifier, and it amplifies in both directions.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Working capital management balances liquidity against the return on idle cash.",
              "The cash conversion cycle = days inventory + days receivables − days payables; shorter frees cash.",
              "Dividends and buybacks are equivalent in theory; buybacks offer flexibility and are treated differently for tax in many jurisdictions.",
              "A stock dividend or split changes nothing of substance — more shares, proportionally lower price, identical claim.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "NPV", def: "Value created in currency. Correct when it conflicts with IRR." },
      { term: "IRR", def: "The rate at which NPV = 0; assumes reinvestment at itself, and can be multiple or undefined." },
      { term: "WACC", def: "Market-value-weighted cost of capital; only debt carries the tax shield." },
      { term: "Degree of operating leverage", def: "Magnification of sales changes into EBIT, from fixed operating costs." },
      { term: "Degree of financial leverage", def: "Magnification of EBIT changes into net income, from interest." },
      { term: "Cash conversion cycle", def: "Days inventory + days receivables − days payables." },
    ],
    takeaways: [
      "When NPV and IRR disagree on mutually exclusive projects, NPV is correct.",
      "IRR's reinvestment assumption is unrealistic and it breaks on non-conventional cash flows.",
      "Only debt gets the tax shield — use market-value weights in WACC.",
      "Cheap debt is not free: leverage raises the cost of equity behind it.",
      "DOL comes from fixed operating costs, DFL from interest, and they multiply.",
      "Total leverage of 4 turns a 10% sales fall into a 40% net income fall.",
      "A stock split changes nothing of substance.",
    ],
  },

  // ==========================================================
  // ECONOMICS
  // ==========================================================
  {
    id: "cfa-l1-econ-core",
    examSlug: "cfa",
    topicId: "econ",
    topicName: "Economics",
    title: "Elasticity, Output, Policy, and Exchange Rates",
    readingMinutes: 21,
    summary:
      "Why elasticity determines whether a price rise raises revenue, how the multiplier works, what monetary and fiscal policy can and cannot do, and how interest rates set forward exchange rates.",
    intro:
      "Economics at Level I rewards knowing which direction things move and why. The computations are few and the traps are directional — most wrong answers come from reasoning the sign backwards.",
    sections: [
      {
        heading: "Elasticity decides what a price rise does to revenue",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Midpoint price elasticity of demand",
              expr: "E = (ΔQ / average Q) ÷ (ΔP / average P)",
              note: "The midpoint method uses averages so the answer is the same in both directions.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Does raising the price raise revenue?",
              prompt:
                "Price rises from $10 to $12 and quantity demanded falls from 100 to 85. Compute elasticity and the effect on revenue.",
              steps: [
                "ΔQ = −15, average Q = 92.5 → −16.22%.",
                "ΔP = +2, average P = $11 → +18.18%.",
                "E = −16.22% / 18.18% = −0.89.",
                "Revenue: $10 × 100 = $1,000 → $12 × 85 = $1,020.",
              ],
              answer:
                "Elasticity is −0.89. Since |E| < 1 demand is INELASTIC, and revenue rises from $1,000 to $1,020. The rule that follows: raising price raises revenue when demand is inelastic and lowers it when demand is elastic. That is the whole reason elasticity is worth computing.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Demand is more elastic with more substitutes, over longer horizons, and for larger shares of a budget.",
              "Cross elasticity positive means substitutes; negative means complements.",
              "Income elasticity positive means a normal good; negative means an inferior good.",
              "A price ceiling below equilibrium creates shortage; a floor above it creates surplus.",
            ],
          },
        ],
      },
      {
        heading: "Output, the multiplier, and the business cycle",
        blocks: [
          {
            kind: "p",
            text: "GDP can be measured by expenditure (C + I + G + net exports) or by income; the two must agree, because one person's spending is another's income. That identity is the basis of the multiplier.",
          },
          {
            kind: "example",
            example: {
              title: "Why $100 of spending becomes $400",
              prompt:
                "The marginal propensity to consume is 0.75. Compute the spending multiplier and the total effect of $100 million of new government spending.",
              steps: [
                "Multiplier = 1 / (1 − MPC) = 1 / 0.25 = 4.00.",
                "Total effect = $100M × 4 = $400M.",
              ],
              answer:
                "The multiplier is 4 and $100M of spending eventually raises GDP by $400M. The mechanism is that each recipient spends 75% of what they receive, and so on down the chain. Note the assumption: it holds only with spare capacity. At full employment the same spending mostly raises prices instead.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "The two policy levers",
              headers: ["", "Monetary policy", "Fiscal policy"],
              rows: [
                ["Run by", "The central bank", "The government"],
                ["Tools", "Policy rate, reserves, open market operations", "Spending and taxation"],
                ["Speed to decide", "Fast", "Slow — needs legislation"],
                ["Speed to bite", "Slow — long and variable lags", "Faster once enacted"],
                ["Main limit", "Ineffective at very low rates", "Deficits, debt, and crowding out"],
              ],
            },
          },
          {
            kind: "p",
            text: "Business cycles run expansion, peak, contraction, trough. Leading indicators — building permits, new orders, the yield curve slope — turn before the economy; lagging indicators like unemployment turn after. An inverted yield curve is the most-watched leading indicator, and it signals expectations of lower future rates, which usually means expectations of a slowdown.",
          },
        ],
      },
      {
        heading: "Exchange rates",
        blocks: [
          {
            kind: "p",
            text: "Quote the currency pair carefully: in the convention used here, USD/GBP means dollars per pound, so the pound is the base currency and a rise in the quote means the pound strengthened. Getting this backwards is the single largest source of lost marks in the topic.",
          },
          {
            kind: "example",
            example: {
              title: "Interest rates set the forward rate",
              prompt:
                "USD/GBP spot is 1.2500. US rates are 5% and UK rates 3%. What is the one-year forward rate?",
              steps: [
                "Covered interest parity: forward = spot × (1 + r_domestic) / (1 + r_foreign).",
                "1.2500 × 1.05 / 1.03 = 1.2743.",
              ],
              answer:
                "1.2743. The dollar — the higher-rate currency — trades at a forward DISCOUNT of about 1.94%. That is the general rule: the higher-interest-rate currency always trades at a forward discount, because otherwise borrowing cheap and lending dear would be riskless profit. The forward rate is an arbitrage relationship, not a forecast.",
            },
          },
          {
            kind: "bullets",
            items: [
              "A current account deficit means importing more than exporting, financed by a capital account surplus.",
              "Real exchange rates adjust for inflation differentials and drive competitiveness; nominal rates alone do not.",
              "Purchasing power parity says exchange rates should equalise the price of identical goods — a poor short-run predictor and a better long-run anchor.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Price elasticity of demand", def: "Percentage change in quantity over percentage change in price." },
      { term: "Inelastic demand", def: "|E| < 1; raising price RAISES revenue." },
      { term: "Spending multiplier", def: "1 / (1 − MPC); assumes spare capacity." },
      { term: "Leading indicator", def: "Turns before the economy — permits, new orders, yield curve slope." },
      { term: "Covered interest parity", def: "Forward = spot × (1 + r_dom)/(1 + r_for). An arbitrage relation." },
      { term: "Forward discount", def: "What the higher-interest-rate currency always trades at." },
    ],
    takeaways: [
      "Inelastic demand means a price rise raises revenue; elastic means it lowers it.",
      "The multiplier is 1/(1 − MPC) and assumes spare capacity — at full employment it raises prices instead.",
      "Monetary policy decides fast and bites slowly; fiscal policy is the reverse.",
      "An inverted yield curve is the most-watched leading indicator.",
      "Read the currency quote convention before anything else — this is where most marks are lost.",
      "The higher-interest-rate currency trades at a forward discount, by arbitrage rather than forecast.",
    ],
  },

];

export const corpEconAltsQuestions: Question[] = [];
