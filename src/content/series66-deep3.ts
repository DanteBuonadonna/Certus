// ============================================================
// Certus — Series 66: economic factors and investment vehicles
//
// WHY THIS FILE EXISTS
// The previous batch covered Laws (45% of the exam) and Recommendations
// (30%). This covers the remaining two sections — Investment Vehicle
// Characteristics (17%) and Economic Factors (8%) — completing the
// blueprint.
//
// EVERY NUMBER COMPUTED IN PYTHON FIRST. The annuity-due example shows
// the $39,674 difference a single compounding period makes, which is the
// most common time-value error on the exam.
// ============================================================

import { Chapter, Question } from "./types";

export const s66Deep3Chapters: Chapter[] = [
  {
    id: "s66-vehicles-deep",
    examSlug: "series-66",
    topicId: "vehicles",
    topicName: "Investment Vehicle Characteristics",
    title: "Investment Vehicles: Structure, Taxation, and What Each Costs",
    readingMinutes: 22,
    summary:
      "How pooled vehicles differ structurally, the derivatives an adviser must understand, and the tax treatment that decides which account should hold what.",
    intro:
      "Investment Vehicle Characteristics is 17 of the 100 scored questions. The exam asks what a vehicle IS and what it COSTS — structure and taxation — rather than how to value it, which is Series 7 territory.",
    sections: [
      {
        heading: "Pooled vehicles compared",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "The structural differences that matter",
              headers: ["Vehicle", "Pricing", "Tax character", "Watch for"],
              rows: [
                ["Open-end fund", "Once daily at NAV", "Distributions pass through and are taxable", "Embedded gains you did not earn"],
                ["Closed-end fund", "Intraday, premium or discount to NAV", "Same pass-through", "Leverage; discount persistence"],
                ["ETF", "Intraday, near NAV", "Generally more tax-efficient", "Thin ETFs can trade away from NAV"],
                ["UIT", "Fixed portfolio, set termination date", "Pass-through", "No manager; portfolio does not adapt"],
                ["Variable annuity", "Sub-accounts, tax-deferred", "Ordinary income on withdrawal", "M&E fees, surrender periods"],
                ["Separately managed account", "Direct ownership of securities", "Own cost basis per lot", "Higher minimums; genuine tax control"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The embedded gain problem",
            body: "Buying a mutual fund shortly before a distribution means receiving — and being taxed on — a gain you did not participate in. The distribution reduces the NAV by the same amount, so the investor is no better off and is worse off after tax. Advising a client to buy just before a December distribution is a real and testable error, and it is why an SMA's per-lot basis is genuinely valuable to a taxable client.",
          },
          {
            kind: "bullets",
            items: [
              "A closed-end fund's discount to NAV can persist for years — it is not a reliable arbitrage.",
              "An ETF's in-kind creation and redemption is what makes it tax-efficient; that mechanism is the reason, not the wrapper itself.",
              "A variable annuity converts capital gains into ORDINARY income on withdrawal, which can make it worse than a taxable account for a long-horizon equity investor.",
              "Annuity withdrawals before 59½ generally attract a 10% penalty on the taxable portion, on top of ordinary income tax.",
            ],
          },
        ],
      },
      {
        heading: "Derivatives an adviser must understand",
        blocks: [
          {
            kind: "bullets",
            items: [
              "A covered call generates income and caps upside — suitable where a client would sell at the strike anyway.",
              "A protective put is insurance with a known cost; breakeven is the stock cost plus the premium.",
              "A collar finances the put by selling a call, giving protection at little or no cash cost and a capped upside.",
              "Selling naked calls carries unlimited risk and is unsuitable for almost every retail advisory client.",
              "Options on a concentrated position are the standard tool for a client who cannot sell without a large tax bill.",
            ],
          },
          {
            kind: "p",
            text: "The adviser's question is never whether the strategy is clever but whether the client understands the obligation. A covered call writer must be genuinely willing to deliver the shares; a put buyer must accept that the premium is spent whether or not the protection is used. Recommending a strategy whose worst case the client has not accepted is a suitability failure regardless of the expected value.",
          },
        ],
      },
      {
        heading: "Taxation and where to hold what",
        blocks: [
          {
            kind: "example",
            example: {
              title: "The compounding period that costs $39,674",
              prompt:
                "A client saves $6,000 a year for 30 years at 7%. Compare contributing at the END of each year with contributing at the START.",
              steps: [
                "Ordinary annuity (end of period): $6,000 × [(1.07³⁰ − 1) / 0.07] = $566,765.",
                "Annuity due (start of period): multiply by 1.07 → $606,438.",
              ],
              answer:
                "$566,765 against $606,438 — a $39,674 difference from contributing at the start of each year rather than the end. That is one extra compounding period applied to every contribution. Multiplying by (1 + r) is the entire adjustment, and forgetting it is the most common time-value error on the exam.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "Tax character by income type",
              headers: ["Income", "Treatment"],
              rows: [
                ["Qualified dividends", "Preferential long-term rates if holding period met"],
                ["Non-qualified dividends", "Ordinary income"],
                ["Short-term capital gains", "Ordinary income"],
                ["Long-term capital gains", "Preferential rates; over one year"],
                ["Municipal bond interest", "Federally exempt; state-exempt if in-state"],
                ["Annuity withdrawals", "Ordinary income on the gain, LIFO for non-qualified"],
              ],
            },
          },
          {
            kind: "bullets",
            items: [
              "Cost basis matters: FIFO applies by default, but specific identification lets a client choose which lots to sell.",
              "Gifted assets carry over the donor's basis; inherited assets generally receive a step-up.",
              "That difference decides gifting versus bequest for an appreciated holding.",
              "The wash sale rule disallows a loss if a substantially identical security is bought within 30 days either side of the sale.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Embedded gain", def: "Buying before a distribution means being taxed on a gain you did not earn." },
      { term: "In-kind creation/redemption", def: "The mechanism that makes ETFs tax-efficient." },
      { term: "Annuity due", def: "Contributions at the start; multiply the ordinary annuity by (1 + r)." },
      { term: "Specific identification", def: "Choosing which lots to sell; FIFO is the default." },
      { term: "Carryover vs step-up basis", def: "Gifts carry the donor's basis; bequests generally step up." },
    ],
    takeaways: [
      "Buying a fund before a distribution means paying tax on a gain you never earned.",
      "A closed-end discount can persist for years — it is not an arbitrage.",
      "A variable annuity turns capital gains into ordinary income, which can make it worse than taxable.",
      "Contributing at the start of the year rather than the end was worth $39,674 over 30 years.",
      "Specific identification gives a taxable client real control; FIFO is only the default.",
      "Recommending a strategy whose worst case the client has not accepted is a suitability failure.",
    ],
  },

  {
    id: "s66-economics-deep",
    examSlug: "series-66",
    topicId: "economics",
    topicName: "Economic Factors and Business Information",
    title: "Economic Factors: Indicators, Rates, and Reading a Company",
    readingMinutes: 22,
    summary:
      "Which indicators lead and which lag, how interest rates transmit to asset prices, and the financial statement analysis an adviser is expected to perform.",
    intro:
      "Economic Factors is the smallest section at 8 of 100 questions, which makes it worth exactly the effort required to get all eight — the content is finite and the questions are directional.",
    sections: [
      {
        heading: "Indicators and the cycle",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "What turns when",
              headers: ["Type", "Examples", "Use"],
              rows: [
                ["Leading", "Building permits, new orders, stock prices, yield curve slope, initial claims", "Anticipate the turn"],
                ["Coincident", "GDP, industrial production, personal income, payrolls", "Confirm where you are"],
                ["Lagging", "Unemployment rate, CPI, average duration of unemployment, prime rate", "Confirm the turn happened"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The one clients get backwards",
            body: "UNEMPLOYMENT IS A LAGGING INDICATOR. It keeps rising after a recession has technically ended, because firms rehire only once demand is proven. A client watching unemployment to decide when to invest is reading a mirror of the past — and the stock market, a LEADING indicator, will typically have bottomed months before the unemployment rate peaks.",
          },
          {
            kind: "bullets",
            items: [
              "An inverted yield curve is the most-watched leading indicator; it signals expectations of lower future rates, which usually means an expected slowdown.",
              "A recession is conventionally two consecutive quarters of declining real GDP, though the formal US determination is broader than that.",
              "Real GDP is inflation-adjusted; nominal is not. Comparisons across years require the real figure.",
              "CPI measures a consumer basket; core CPI strips food and energy because they are volatile, not because they do not matter.",
            ],
          },
        ],
      },
      {
        heading: "Rates and asset prices",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Rates UP: bond prices fall, longer duration falls further, and equity valuations compress as the discount rate rises.",
              "Rates DOWN: the reverse, with the largest effect on long-duration assets — long bonds and high-growth equities alike.",
              "The Federal Reserve moves the policy rate, sets reserve requirements and conducts open market operations; it does NOT set mortgage or deposit rates directly.",
              "Fiscal policy is Congress and the Treasury — spending and taxation, not rates.",
              "Confusing the two is a reliable exam distractor.",
            ],
          },
          {
            kind: "p",
            text: "The unifying idea is duration in the general sense: any asset whose value depends on cash flows far in the future is more sensitive to the discount rate. That is why a 30-year bond and a high-growth technology stock — which look nothing alike — both fall hardest when rates rise. An adviser who explains it that way gives a client a rule they can apply, rather than a list to memorise.",
          },
        ],
      },
      {
        heading: "Reading a company",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Balance sheet: a moment. Income statement and cash flow statement: a period. Never mix them in a comparison.",
              "Liquidity — current and quick ratios; the quick ratio excludes inventory because it must be sold first.",
              "Solvency — debt-to-equity and interest coverage; coverage below roughly 2 deserves attention.",
              "Profitability — margins, return on assets, return on equity.",
              "Cash from operations should broadly track net income over time; a widening gap is the accrual-quality warning.",
            ],
          },
          {
            kind: "p",
            text: "For an adviser the purpose is not security selection but the ability to answer a client's question about a holding, and to recognise when a concentrated position carries risk the client has not considered. Financial statement analysis at Series 66 depth is a diligence tool rather than a valuation method, and the exam frames it that way.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Leading indicator", def: "Turns before the economy — permits, new orders, yield curve." },
      { term: "Lagging indicator", def: "Turns after — unemployment, CPI, prime rate." },
      { term: "Real vs nominal GDP", def: "Real is inflation-adjusted; only real is comparable across years." },
      { term: "Duration in the general sense", def: "Why long bonds and growth stocks both fall hardest when rates rise." },
      { term: "Interest coverage", def: "EBIT over interest; below roughly 2 deserves attention." },
    ],
    takeaways: [
      "Unemployment LAGS — a client waiting for it to fall is reading the past.",
      "The stock market leads and typically bottoms before unemployment peaks.",
      "An inverted yield curve is the most-watched leading indicator.",
      "Rates up compress every long-duration asset, bonds and growth equities alike.",
      "The Fed sets the policy rate; Congress and Treasury handle fiscal policy.",
      "CFO drifting below net income is the accrual-quality warning.",
    ],
  },
];

export const s66Deep3Questions: Question[] = [];
