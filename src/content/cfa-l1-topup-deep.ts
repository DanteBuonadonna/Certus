// ============================================================
// Certus — CFA Level I top-up: FRA, Derivatives, Equity
//
// WHY THIS FILE EXISTS
// Closing the last large L1 gaps with the topics each syllabus area was
// still missing entirely: bond amortisation and deferred tax in FRA,
// swaps and hedging applications in Derivatives, and company/industry
// analysis plus FCFE in Equity.
//
// EVERY NUMBER COMPUTED IN PYTHON FIRST. The bond amortisation schedule
// was run to maturity and CHECKED to confirm the carrying value lands on
// par exactly — if it doesn't, the effective-interest arithmetic is
// wrong, and a schedule that misses par teaches the error.
// ============================================================

import { Chapter, Question } from "./types";

export const topupChapters: Chapter[] = [
  // ==========================================================
  // FRA — LIABILITIES AND TAXES
  // ==========================================================
  {
    id: "cfa-l1-fra-liabilities-tax",
    examSlug: "cfa",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    title: "Long-Term Liabilities, Deferred Tax, and Reporting Quality",
    readingMinutes: 22,
    summary:
      "How a bond issued at a discount unwinds through the income statement, why deferred tax exists and when it reverses, leases, and the spectrum from conservative accounting to fraud.",
    intro:
      "This reading covers the parts of the balance sheet that move on their own. A bond's carrying value changes every period without any transaction, and deferred tax appears purely because two sets of rules disagree about timing — both are examinable precisely because neither involves cash changing hands.",
    sections: [
      {
        heading: "A bond issued at a discount",
        blocks: [
          {
            kind: "p",
            text: "When the coupon rate is below the market rate, investors will only buy at a discount to par. The issuer then reports interest expense at the MARKET rate on the carrying value, not the cash coupon — and the difference accretes the carrying value up toward par.",
          },
          {
            kind: "formula",
            formula: {
              label: "Effective interest method",
              expr: "interest expense = carrying value × market rate at issuance          amortisation = interest expense − cash coupon",
              note: "The market rate is fixed at issuance and never updated, however rates move afterwards.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Amortising to par, and checking it lands",
              prompt:
                "A three-year $100,000 bond pays a 5% annual coupon when the market requires 6%. Find the proceeds and build the amortisation schedule.",
              steps: [
                "Proceeds = $5,000/1.06 + $5,000/1.06² + $105,000/1.06³ = $97,326.99, a discount of $2,673.01.",
                "Year 1: expense = $97,326.99 × 6% = $5,839.62; coupon $5,000; amortisation $839.62; carrying value $98,166.61.",
                "Year 2: expense = $98,166.61 × 6% = $5,890.00; amortisation $890.00; carrying value $99,056.60.",
                "Year 3: expense = $99,056.60 × 6% = $5,943.40; amortisation $943.40; carrying value $100,000.00.",
              ],
              answer:
                "The carrying value lands on par exactly — which is the check that the arithmetic is right. Two things to notice: interest expense EXCEEDS the cash coupon every year, so reported profit is lower than the cash cost suggests; and the expense RISES each year as the carrying value grows. A premium bond behaves as the mirror image: expense below coupon, carrying value amortising down to par.",
            },
          },
          {
            kind: "callout",
            label: "Where the cash flow statement puts it",
            body: "Under US GAAP the entire cash coupon is an operating outflow. Under IFRS the issuer may classify interest paid as operating OR financing. That optionality makes CFO non-comparable across reporting regimes without adjustment — a small detail that changes a headline number.",
          },
          {
            kind: "p",
            text: "Leases now bring almost all obligations onto the balance sheet. Under IFRS a lessee recognises a right-of-use asset and a lease liability for essentially all leases; US GAAP retains a finance/operating distinction that affects the income statement geography but not the balance sheet recognition. The analytical point survives both regimes: off-balance-sheet financing was a real distortion and the standards closed it.",
          },
        ],
      },
      {
        heading: "Deferred tax: two rulebooks, one asset",
        blocks: [
          {
            kind: "p",
            text: "Financial reporting and tax reporting apply different rules to the same transactions. Where the difference is one of TIMING it will reverse, and the reversal is recognised now as a deferred tax liability or asset. Where the difference is PERMANENT — a fine that is never deductible, tax-exempt interest — nothing is deferred, because nothing reverses.",
          },
          {
            kind: "example",
            example: {
              title: "Accelerated tax depreciation creating a liability",
              prompt:
                "A $60,000 asset is depreciated straight-line over six years for reporting and over three years for tax. The tax rate is 25%. Trace the deferred tax.",
              steps: [
                "Book depreciation $10,000/year; tax depreciation $20,000/year.",
                "Year 1 difference = $10,000, so the DTL created = $10,000 × 25% = $2,500.",
                "End of year 1: book basis $50,000, tax basis $40,000, cumulative DTL $2,500.",
                "End of year 2: $40,000 vs $20,000, cumulative DTL $5,000. End of year 3: $30,000 vs $0, cumulative DTL $7,500.",
              ],
              answer:
                "A $7,500 deferred tax liability builds over three years, then reverses across years four to six when tax depreciation is exhausted and book depreciation continues. Nothing has been avoided — the tax was deferred, not saved. A company whose DTL keeps growing is one that keeps investing; a shrinking DTL can signal that capital spending has stopped.",
            },
          },
          {
            kind: "bullets",
            items: [
              "A deferred tax LIABILITY means tax paid now is less than book expense — it will be paid later.",
              "A deferred tax ASSET means the reverse, often from carried-forward losses.",
              "A valuation allowance reduces a DTA when it is not probable that future profits will use it — a real warning signal about management's own forecast.",
              "A change in the tax rate remeasures every deferred balance immediately, which can move net income sharply with no operating cause.",
            ],
          },
        ],
      },
      {
        heading: "Reporting quality as a spectrum",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "From high quality to fraud",
              headers: ["Level", "What it looks like"],
              rows: [
                ["High quality", "Decision-useful, faithful, sustainable earnings"],
                ["Biased but compliant", "Within the rules, consistently optimistic choices"],
                ["Aggressive", "Stretching estimates and recognition timing"],
                ["Earnings management", "Deliberate structuring to hit a number"],
                ["Fraud", "Fictitious transactions; outright misstatement"],
              ],
            },
          },
          {
            kind: "p",
            text: "The useful analytical stance is that these shade into one another rather than being separate categories. The conditions that produce the lower rungs are consistent: OPPORTUNITY (weak controls, complex structures), MOTIVATION (covenants, compensation targets, listing requirements) and RATIONALISATION (everyone does it; it will reverse next quarter). Assessing all three is more informative than checking any single ratio.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Effective interest method", def: "Expense = carrying value × market rate at issuance; the rate never updates." },
      { term: "Discount amortisation", def: "Expense above coupon, accreting carrying value up to par." },
      { term: "Deferred tax liability", def: "A timing difference that will reverse — tax deferred, not saved." },
      { term: "Permanent difference", def: "Never reverses, so nothing is deferred." },
      { term: "Valuation allowance", def: "Reduces a DTA when future profits are not probable. A warning signal." },
      { term: "Right-of-use asset", def: "The lessee's balance sheet asset under the current lease standards." },
    ],
    takeaways: [
      "A discount bond's carrying value must land exactly on par — that's the arithmetic check.",
      "Interest expense exceeds the cash coupon on a discount bond, and rises each year.",
      "IFRS lets interest paid sit in operating OR financing, so CFO is not directly comparable.",
      "Deferred tax comes from timing differences; permanent differences defer nothing.",
      "A growing DTL usually means continued investment; a shrinking one can mean capex stopped.",
      "A valuation allowance is management telling you it doubts its own future profits.",
      "Reporting quality is a spectrum, and opportunity, motivation and rationalisation predict where a company sits.",
    ],
  },

  // ==========================================================
  // DERIVATIVES — SWAPS AND APPLICATIONS
  // ==========================================================
  {
    id: "cfa-l1-deriv-swaps",
    examSlug: "cfa",
    topicId: "deriv",
    topicName: "Derivatives",
    title: "Swaps, Credit Derivatives, and Using Derivatives to Manage Risk",
    readingMinutes: 22,
    summary:
      "How a swap is just a series of forwards, what a credit default swap actually insures, and the arithmetic of adjusting a portfolio's beta with futures.",
    intro:
      "Having priced forwards and options, this reading turns to what derivatives are used FOR. The unifying idea is that every instrument here decomposes into something already understood — a swap into forwards, a CDS into an insurance contract — so nothing new needs memorising.",
    sections: [
      {
        heading: "Swaps as a series of forwards",
        blocks: [
          {
            kind: "p",
            text: "In a plain vanilla interest rate swap one party pays a fixed rate and receives a floating rate on a NOTIONAL amount that never changes hands. Each settlement is economically a forward contract on the rate for that period, which is why a swap is priced as a portfolio of forwards.",
          },
          {
            kind: "example",
            example: {
              title: "One settlement on a vanilla swap",
              prompt:
                "A $50,000,000 notional swap pays fixed at 4.2% against floating at 3.8%, settling semiannually. Who pays whom, and how much?",
              steps: [
                "Rate difference = 4.2% − 3.8% = 0.4%.",
                "Semiannual, so halve it: 0.4% × $50,000,000 / 2 = $100,000.",
              ],
              answer:
                "The fixed payer owes $100,000. Only the NET amount changes hands — neither side pays the full leg, and the $50,000,000 notional is never exchanged. That is why swap credit exposure is far smaller than the notional suggests, a distinction worth holding when a headline quotes derivative notionals as though they were amounts at risk.",
            },
          },
          {
            kind: "bullets",
            items: [
              "A currency swap DOES usually exchange principal, at the start and again at maturity.",
              "An equity swap exchanges a fixed or floating rate for an equity index return — synthetic exposure without owning the shares.",
              "At initiation a swap is worth zero to both sides; the fixed rate is set to make it so.",
              "As rates move the swap acquires value to one side, which is the source of counterparty exposure.",
            ],
          },
        ],
      },
      {
        heading: "Credit default swaps",
        blocks: [
          {
            kind: "p",
            text: "A credit default swap is insurance on a borrower. The protection buyer pays a periodic premium; the protection seller compensates if a defined credit event occurs. The seller has, in substance, taken a long credit position without funding it.",
          },
          {
            kind: "table",
            table: {
              caption: "The two sides",
              headers: ["", "Protection buyer", "Protection seller"],
              rows: [
                ["Pays", "Periodic premium", "Payout on a credit event"],
                ["Credit position", "SHORT credit", "LONG credit"],
                ["Benefits when", "Credit deteriorates", "Credit is stable or improves"],
                ["Analogy", "Buying insurance", "Writing insurance"],
              ],
            },
          },
          {
            kind: "callout",
            label: "Why 2008 turns on this",
            body: "A CDS can be bought by someone who does not own the underlying bond — a naked position, which is speculation rather than hedging. And the seller collects steady premiums while accumulating an unfunded, highly correlated exposure that only materialises in a crisis. Both features amplified 2008: sellers had written far more protection than they could pay on, and the exposures all came due at once.",
          },
        ],
      },
      {
        heading: "Managing risk with derivatives",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Adjusting portfolio beta with equity futures",
              expr: "N = [ (β_target − β_portfolio) / β_futures ] × ( portfolio value / futures contract value )",
              note: "A negative N means SELL contracts. Contract value = index price × multiplier.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Cutting beta without selling a share",
              prompt:
                "A $10,000,000 portfolio has a beta of 1.20 and the manager wants 0.60. Index futures are at 4,500 with a $50 multiplier and a beta of 1.0. How many contracts?",
              steps: [
                "Contract value = 4,500 × $50 = $225,000.",
                "N = ((0.60 − 1.20) / 1.0) × ($10,000,000 / $225,000).",
                "N = (−0.60) × 44.44 = −26.67.",
              ],
              answer:
                "Sell 27 contracts. The negative sign means short, and the position is rounded because contracts are indivisible. The manager has halved market exposure without selling a single holding — no transaction costs on the underlying, no tax event, no signal to the market, and it can be reversed in a day. That combination is the main practical case for derivatives.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Hedging transfers risk; it does not eliminate it, and a hedge costs either premium or forgone upside.",
              "Basis risk arises when the hedging instrument does not track the exposure exactly — the residual after any real-world hedge.",
              "Over-hedging turns a hedge into a speculative position in the opposite direction.",
              "Derivatives improve price discovery and lower transaction costs; the costs are embedded leverage, counterparty risk and opacity.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Notional", def: "The reference amount for calculating swap payments; usually never exchanged." },
      { term: "Net settlement", def: "Only the difference changes hands, which is why exposure is far below notional." },
      { term: "Currency swap", def: "Unlike an interest rate swap, principal IS usually exchanged at both ends." },
      { term: "Credit default swap", def: "Insurance on a borrower; the seller is LONG credit, unfunded." },
      { term: "Naked CDS", def: "Protection bought without owning the underlying — speculation, not hedging." },
      { term: "Basis risk", def: "The residual when the hedge does not track the exposure exactly." },
    ],
    takeaways: [
      "A swap is a series of forwards, so nothing new needs pricing machinery.",
      "Only the net amount settles, and the notional is not the amount at risk.",
      "Currency swaps do exchange principal; interest rate swaps do not.",
      "A CDS seller is long credit without funding it — the 2008 mechanism.",
      "Beta can be halved with futures without selling a holding, incurring tax or signalling.",
      "A hedge transfers risk at a cost, and basis risk is what remains.",
    ],
  },

  // ==========================================================
  // EQUITY — INDUSTRY AND COMPANY ANALYSIS
  // ==========================================================
  {
    id: "cfa-l1-equity-industry",
    examSlug: "cfa",
    topicId: "equity",
    topicName: "Equity Investments",
    title: "Industry and Company Analysis, and Free Cash Flow to Equity",
    readingMinutes: 22,
    summary:
      "Classifying an industry, the five forces that determine whether it earns anything, the life cycle, competitive advantage, and valuing a company on the cash actually available to shareholders.",
    intro:
      "Valuation needs a forecast, and a forecast needs a view of the industry the company competes in. This reading supplies the structure: what determines whether an industry is profitable at all, and then how to value a company on the cash it can actually distribute.",
    sections: [
      {
        heading: "Classification and the five forces",
        blocks: [
          {
            kind: "p",
            text: "Companies are grouped by principal business activity, by the sensitivity of their earnings to the economy — cyclical against defensive — and through commercial classification systems. Grouping by end market is more analytically useful than grouping by geography, because competitors share a market, not a postcode.",
          },
          {
            kind: "table",
            table: {
              caption: "The five forces, and what each one asks",
              headers: ["Force", "The question"],
              rows: [
                ["Rivalry among competitors", "How many, how similar, how fast growing?"],
                ["Threat of new entrants", "How high are the barriers to entry?"],
                ["Threat of substitutes", "What else solves the same problem?"],
                ["Bargaining power of buyers", "Are they concentrated? Can they switch cheaply?"],
                ["Bargaining power of suppliers", "Are inputs concentrated or unique?"],
              ],
            },
          },
          {
            kind: "p",
            text: "The framework's value is that it explains WHY an industry is profitable, which is what makes profitability forecastable. An industry with high barriers, weak substitutes and fragmented buyers sustains returns; one with the opposite features competes them away regardless of how well individual firms are run.",
          },
          {
            kind: "callout",
            label: "Barriers to entry are the load-bearing one",
            body: "High barriers let incumbents earn above their cost of capital for extended periods. Low barriers mean any excess return attracts entrants who compete it away. When forecasting margins far out, the honest question is what stops someone else doing this — and if there is no answer, high margins should be modelled as decaying rather than persisting.",
          },
        ],
      },
      {
        heading: "The industry life cycle",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Stages and their signatures",
              headers: ["Stage", "Growth", "Profitability", "Competitive shape"],
              rows: [
                ["Embryonic", "Slow, from a small base", "Negative", "Few players, high prices, high risk"],
                ["Growth", "Rapid", "Improving", "New entrants; capacity expands"],
                ["Shakeout", "Slowing", "Falling", "Overcapacity; consolidation and exits"],
                ["Mature", "Near GDP", "Stable, competed to a normal level", "Few large players; brand and cost matter"],
                ["Decline", "Negative", "Deteriorating", "Consolidation; capacity leaves"],
              ],
            },
          },
          {
            kind: "p",
            text: "The stage constrains what a valuation may sensibly assume. Applying a mature industry's stable margins to a growth industry ignores the entrants that growth attracts; applying growth-stage expansion to a mature industry assumes something the structure will not supply.",
          },
        ],
      },
      {
        heading: "Free cash flow to equity",
        blocks: [
          {
            kind: "p",
            text: "Dividend models fail where a company pays no dividend or pays one unrelated to what it could afford. Free cash flow to equity measures what COULD be distributed after the business has been funded, which makes it the more general tool.",
          },
          {
            kind: "formula",
            formula: {
              label: "FCFE",
              expr: "FCFE = net income + depreciation − capital expenditure − increase in working capital + net borrowing",
              note: "Net borrowing is added because debt raised is cash available to equity holders now, at the cost of future claims.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Valuing on distributable cash",
              prompt:
                "Net income $250M, depreciation $80M, capital expenditure $140M, working capital increase $35M, net borrowing $60M. There are 50 million shares, the required return is 11% and growth is 4%. Value the equity.",
              steps: [
                "FCFE = 250 + 80 − 140 − 35 + 60 = $215M.",
                "Value = FCFE × (1 + g) / (r − g) = $215M × 1.04 / (0.11 − 0.04).",
                "= $223.6M / 0.07 = $3,194.29M.",
              ],
              answer:
                "$3,194M of equity value, or $63.89 per share. Note how much capital expenditure and working capital consumed: $175M of the $330M generated by earnings and depreciation. A company reporting $250M of net income had only $215M genuinely available to shareholders, and that gap is exactly what a dividend model built on reported earnings would have missed.",
            },
          },
          {
            kind: "bullets",
            items: [
              "A competitive advantage must be identified specifically — a cost position, a network effect, a switching cost, a regulatory licence — not asserted.",
              "Quality of management is assessed through capital allocation history, not through interviews.",
              "Growth that earns below the cost of capital destroys value; growth is not automatically good.",
              "Forecast the drivers — volume, price, margin, capital intensity — rather than extrapolating a single growth rate.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Cyclical industry", def: "Earnings highly sensitive to the economic cycle." },
      { term: "Barriers to entry", def: "What allows incumbents to sustain returns above the cost of capital." },
      { term: "Shakeout", def: "Growth slows into overcapacity; consolidation and exits follow." },
      { term: "FCFE", def: "Cash that COULD be distributed after funding the business, including net borrowing." },
      { term: "Competitive advantage", def: "A specific, nameable mechanism — not an assertion about quality." },
    ],
    takeaways: [
      "Group companies by end market; competitors share a market, not a geography.",
      "The five forces explain WHY an industry is profitable, which is what makes it forecastable.",
      "Barriers to entry are load-bearing — with no answer to \"what stops someone else\", model margins as decaying.",
      "The life-cycle stage constrains what a valuation may assume.",
      "FCFE is more general than a dividend model because it measures what COULD be paid.",
      "Capital expenditure and working capital consumed $175M of $330M here — the gap a dividend model misses.",
      "Growth below the cost of capital destroys value.",
    ],
  },
];

export const topupQuestions: Question[] = [];
