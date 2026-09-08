// ============================================================
// Certus — CFA Level III: Capital Market Expectations, Currency,
// Trading, and Risk Management for Individuals
//
// WHY THIS FILE EXISTS
// CFA Level III readings sit at 387 minutes against a ~1,200 target, and
// four whole topics were near-empty: Capital Market Expectations had 8
// minutes, Trading 9, Risk Management for Individuals 6, and Currency 13.
// Those are not thin chapters — they are placeholders for topics that
// carry real exam weight.
//
// EVERY NUMBER COMPUTED IN PYTHON FIRST. The implementation shortfall
// example is DOUBLE-ENTRY CHECKED: the three cost components must sum to
// the total shortfall computed the other way. If they don't, the
// decomposition is wrong, and a decomposition that doesn't reconcile
// teaches a broken method.
// ============================================================

import { Chapter, Question } from "./types";

export const l3CmeCurrencyChapters: Chapter[] = [
  // ==========================================================
  // CAPITAL MARKET EXPECTATIONS
  // ==========================================================
  {
    id: "cfa-l3-cme-forecasting",
    examSlug: "cfa-l3",
    topicId: "cme",
    topicName: "Capital Market Expectations",
    title: "Capital Market Expectations: Building Forecasts You Can Defend",
    readingMinutes: 24,
    summary:
      "The building block approach to fixed income, the Grinold-Kroner decomposition for equity, the Taylor rule for policy rates, and the forecasting errors that recur.",
    intro:
      "Every allocation decision rests on return expectations, so the quality of the allocation cannot exceed the quality of those inputs. Level III examines whether you can BUILD a forecast from components rather than assert one — because a decomposed forecast can be argued with, and an asserted one cannot.",
    sections: [
      {
        heading: "Fixed income: the building block approach",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Building blocks for a bond return",
              expr: "E(R) = real risk-free rate + inflation premium + term premium + credit premium + liquidity premium",
              note: "Each block is separately estimable and separately arguable — which is the point.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Building a corporate bond expectation",
              prompt:
                "Real risk-free 3.0%, term premium 0.8%, credit premium 1.2%, liquidity premium 0.3%. What is the expected return, and what does the decomposition let you challenge?",
              steps: [
                "Sum the blocks: 3.0% + 0.8% + 1.2% + 0.3%.",
              ],
              answer:
                "5.3%. The value is not the number but the structure: a client or committee can now disagree with the credit premium specifically rather than with the forecast as a whole. That is what makes an expectation defensible — someone can attack one block without rejecting everything, and you can update one block when conditions change.",
            },
          },
        ],
      },
      {
        heading: "Equity: the Grinold-Kroner model",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Grinold-Kroner",
              expr: "E(R) = dividend yield − Δshares outstanding + inflation + real earnings growth + ΔP/E",
              note: "MINUS the change in share count: buybacks REDUCE shares, so a negative Δ ADDS to return.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Decomposing an equity expectation",
              prompt:
                "Dividend yield 2.1%, net share count changing −0.5% (net buybacks), inflation 2.3%, real earnings growth 1.2%, expected P/E repricing +0.4%. Compute the expected return and name its three parts.",
              steps: [
                "E(R) = 2.1% − (−0.5%) + 2.3% + 1.2% + 0.4%.",
                "The share term: buybacks shrink the count, so subtracting a negative ADDS 0.5%.",
                "= 2.1% + 0.5% + 2.3% + 1.2% + 0.4% = 6.50%.",
              ],
              answer:
                "6.50%, made of income 2.60% (yield plus buybacks), earnings growth 3.50% (inflation plus real growth), and repricing 0.40%. That split matters: the first two are cash the business generates and the third is a bet on multiple expansion. A forecast leaning heavily on repricing is a forecast that the market will pay more for the same earnings — which is the least defensible component and should be small.",
            },
          },
        ],
      },
      {
        heading: "Policy rates and the business cycle",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Taylor rule",
              expr: "policy rate = neutral real rate + inflation + 0.5(inflation − target) + 0.5(GDP growth − trend)",
              note: "A benchmark for what a central bank 'should' set, not a prediction of what it will.",
            },
          },
          {
            kind: "example",
            example: {
              title: "What the rule implies",
              prompt:
                "Neutral real rate 2.5%, current inflation 3.4% against a 2.0% target, GDP growth 2.1% against 1.8% trend. What policy rate does the Taylor rule imply?",
              steps: [
                "Inflation gap term = 0.5 × (3.4% − 2.0%) = 0.70%.",
                "Output gap term = 0.5 × (2.1% − 1.8%) = 0.15%.",
                "Rate = 2.5% + 3.4% + 0.70% + 0.15% = 6.75%.",
              ],
              answer:
                "6.75%. If the actual policy rate is materially below that, policy is loose relative to the rule — which is information about the direction of future rate moves and therefore about bond returns. The rule is a benchmark, not a forecast; central banks deviate for reasons the rule cannot see.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "What tends to do well by cycle phase",
              headers: ["Phase", "Bonds", "Equities", "Notes"],
              rows: [
                ["Early expansion", "Weak", "Strong", "Rates rising from lows; cyclicals lead"],
                ["Late expansion", "Weak", "Moderating", "Inflation pressure; policy tightening"],
                ["Slowdown", "Strengthening", "Weak", "Curve flattens or inverts"],
                ["Contraction", "Strong", "Weak then recovering", "Rate cuts; equities bottom before the economy"],
              ],
            },
          },
        ],
      },
      {
        heading: "The errors that recur",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Using historical averages uncritically — the sample period may not represent the future regime.",
              "Ex-post risk mistaken for ex-ante risk: a period that turned out calm was not necessarily low-risk at the time.",
              "Data measurement error, and biases from index construction and survivorship.",
              "Non-stationarity: the relationship you estimated has changed since the data was generated.",
              "Failing to adjust for smoothing in appraisal-valued assets, which understates volatility and correlation.",
              "Psychological traps — anchoring on the current level, confirmation, overconfidence in a point estimate.",
            ],
          },
          {
            kind: "callout",
            label: "The error that does the most damage",
            body: "Feeding an optimiser unadjusted historical inputs. Returns come from a specific past regime, private-asset volatility is smoothed downward, and correlations are estimated in calm periods. All three biases push the same way — toward overallocating to whatever looked good and smooth. The optimiser is not wrong; it is answering the question you asked with the numbers you gave it.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Building block approach", def: "Assemble a return from separately estimable premiums." },
      { term: "Grinold-Kroner", def: "Yield − Δshares + inflation + real growth + ΔP/E." },
      { term: "Repricing component", def: "The ΔP/E term — the least defensible part of an equity forecast." },
      { term: "Taylor rule", def: "A benchmark policy rate from inflation and output gaps." },
      { term: "Ex-post vs ex-ante risk", def: "What happened versus what was risky at the time." },
      { term: "Non-stationarity", def: "The estimated relationship has since changed." },
    ],
    takeaways: [
      "A decomposed forecast can be argued with; an asserted one cannot.",
      "In Grinold-Kroner, buybacks are a NEGATIVE share change and therefore ADD to return.",
      "Split the equity forecast into income, growth and repricing — and keep repricing small.",
      "The Taylor rule benchmarks policy; a large gap signals the direction of future moves.",
      "Historical averages, smoothed private data and calm-period correlations all bias the same way.",
      "An optimiser fed unadjusted inputs will overallocate to whatever looked good and smooth.",
    ],
  },

  // ==========================================================
  // CURRENCY MANAGEMENT
  // ==========================================================
  {
    id: "cfa-l3-currency-management",
    examSlug: "cfa-l3",
    topicId: "currency",
    topicName: "Currency Management",
    title: "Currency Management: Hedging Decisions and the Cost of Carry",
    readingMinutes: 24,
    summary:
      "Why a foreign return and a currency move multiply rather than add, the strategic hedging spectrum, what the forward premium actually pays you, and when hedging is not worth it.",
    intro:
      "Holding a foreign asset is holding two positions: the asset and the currency. Level III asks whether the second one should be kept, and the answer is a policy decision made in advance rather than a market call made under pressure.",
    sections: [
      {
        heading: "The two returns multiply",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Domestic return on a foreign asset",
              expr: "R_domestic = (1 + R_foreign) × (1 + R_currency) − 1",
              note: "MULTIPLICATIVE. Adding the two is an approximation that drifts as the moves get larger.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Where the approximation goes wrong",
              prompt:
                "A foreign equity holding returns 8.2% in local currency while that currency falls 3.1% against the investor's home currency. What is the domestic return?",
              steps: [
                "Multiplicative: (1.082) × (0.969) − 1.",
                "= 1.048458 − 1 = 4.846%.",
                "The additive shortcut would give 8.2% − 3.1% = 5.1%.",
              ],
              answer:
                "4.85%, not 5.1%. The 25 basis point gap is the cross-product term, and it grows with the size of the moves — at a 20% asset gain and a 20% currency loss the shortcut is out by 400 basis points. Use the multiplicative form; the approximation is only safe for small moves.",
            },
          },
        ],
      },
      {
        heading: "The hedging spectrum",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Strategic choices, from passive to active",
              headers: ["Approach", "What it does", "Suits"],
              rows: [
                ["Fully unhedged", "Accept all currency exposure", "Long horizons; a belief currency mean-reverts"],
                ["Fully hedged", "Remove it entirely", "Liability-matched portfolios; short horizons"],
                ["Strategic partial hedge", "A fixed ratio, e.g. 50%", "Minimises regret; the common institutional answer"],
                ["Dynamic hedging", "Ratio varies with rules or signals", "Where a process exists to run it"],
                ["Active currency", "Currency as a return source", "Only with genuine skill and a mandate for it"],
              ],
            },
          },
          {
            kind: "p",
            text: "The 50% strategic hedge is common precisely because it is the minimum-regret choice: whichever way the currency moves, the investor is half right. That is a governance answer rather than an optimisation, and it is defensible on exactly those grounds.",
          },
          {
            kind: "bullets",
            items: [
              "Hedging BONDS matters more than hedging equities, because currency volatility is large relative to bond volatility and small relative to equity volatility.",
              "Over long horizons currency contributes little to return but real volatility, which argues for hedging when the horizon is short and matters less when it is long.",
              "Emerging market currencies carry higher hedging costs and wider spreads, so the calculus differs from developed markets.",
            ],
          },
        ],
      },
      {
        heading: "What the hedge actually costs — or pays",
        blocks: [
          {
            kind: "example",
            example: {
              title: "The forward premium is the hedge's carry",
              prompt:
                "EUR/USD spot is 1.0850 and the one-year forward is 1.0920. Domestic rates are 4.5% and foreign rates 3.8%. What does hedging EUR exposure cost a dollar investor?",
              steps: [
                "Forward premium = 1.0920 / 1.0850 − 1 = 0.645%.",
                "Cross-check with interest rate parity: (1.045 / 1.038) − 1 = 0.674%.",
                "The two agree to within rounding, as covered interest parity requires.",
              ],
              answer:
                "Hedging EARNS about 0.65% a year here, it does not cost. The rule: hedging into the HIGHER-interest-rate currency earns the forward premium, and hedging into the lower-rate one pays it away. Candidates assume hedging always costs money — it depends entirely on which side of the rate differential you sit.",
            },
          },
          {
            kind: "callout",
            label: "Hedging is not free even when the carry is positive",
            body: "Beyond the forward points there are transaction costs, bid-offer spreads, and the operational burden of rolling contracts — typically monthly or quarterly, forever. There is also cash flow risk: a hedge that is losing money requires cash settlement even while the underlying asset has gained on paper. That mismatch has forced institutions to sell assets to fund hedges, which is the practical failure mode.",
          },
          {
            kind: "bullets",
            items: [
              "Forwards are the standard instrument — flexible, but they must be rolled and they create cash flow at each roll.",
              "Options cost premium up front but cannot generate a margin call, which is worth paying for where cash is constrained.",
              "A cross hedge uses a correlated proxy currency where the exposure itself is illiquid; the residual is basis risk.",
              "A minimum-variance hedge ratio uses a regression of asset returns on currency returns rather than assuming 1:1.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Multiplicative return", def: "(1 + R_asset)(1 + R_currency) − 1. Adding is only an approximation." },
      { term: "Strategic hedge ratio", def: "A fixed policy ratio; 50% is the minimum-regret choice." },
      { term: "Forward premium", def: "The hedge's carry — earned when hedging into the higher-rate currency." },
      { term: "Cross hedge", def: "Hedging with a correlated proxy; leaves basis risk." },
      { term: "Minimum-variance hedge ratio", def: "From a regression, rather than assuming 1:1." },
    ],
    takeaways: [
      "Asset return and currency move MULTIPLY; the shortcut drifts badly on large moves.",
      "The 50% strategic hedge is a minimum-regret governance answer, not an optimisation.",
      "Hedge bonds more than equities — currency volatility dwarfs bond volatility.",
      "Hedging into the higher-rate currency EARNS the forward premium.",
      "A winning asset with a losing hedge still demands cash at every roll — that is the real failure mode.",
      "Options avoid margin calls at the cost of premium, which matters when cash is constrained.",
    ],
  },

  // ==========================================================
  // TRADING AND EXECUTION
  // ==========================================================
  {
    id: "cfa-l3-trading-execution",
    examSlug: "cfa-l3",
    topicId: "trading",
    topicName: "Trading and Execution",
    title: "Execution Costs: Implementation Shortfall, Decomposed and Checked",
    readingMinutes: 24,
    summary:
      "Computing implementation shortfall two ways so the decomposition proves itself, matching algorithm to trade motivation, and why VWAP flatters a bad execution.",
    intro:
      "Execution cost is invisible until it is measured, and how it is measured determines what gets managed. Implementation shortfall is the honest measure because it starts from the decision price — the moment the alpha existed — rather than from a benchmark the trade itself helped set.",
    sections: [
      {
        heading: "Implementation shortfall, worked both ways",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Implementation shortfall",
              expr: "IS = paper portfolio return − actual portfolio return",
              note: "Equivalently: delay cost + trading cost + opportunity cost. The two routes must agree.",
            },
          },
          {
            kind: "example",
            example: {
              title: "The decomposition that proves itself",
              prompt:
                "A manager decides to buy 10,000 shares at a decision price of $50.00. The order reaches the desk at $50.10. 8,000 shares execute at an average $50.35. The stock closes at $50.60 and the remaining 2,000 are never bought. Compute implementation shortfall both ways.",
              steps: [
                "Paper portfolio: had all 10,000 been bought at the decision price, the gain would be ($50.60 − $50.00) × 10,000 = $6,000.",
                "Actual: the 8,000 filled at $50.35 gained ($50.60 − $50.35) × 8,000 = $2,000.",
                "IS = $6,000 − $2,000 = $4,000.",
                "Now by components — delay: ($50.10 − $50.00) × 8,000 = $800. Trading: ($50.35 − $50.10) × 8,000 = $2,000. Opportunity: ($50.60 − $50.00) × 2,000 = $1,200.",
              ],
              answer:
                "$4,000 both ways — and $800 + $2,000 + $1,200 = $4,000 exactly, which is the check. Expressed against the decision value of $500,000 that is 80 basis points. Note what the decomposition reveals: the largest single component is the 2,000 shares never bought, and no measure anchored to executed trades alone would have counted it.",
            },
          },
          {
            kind: "callout",
            label: "Why VWAP hides what shortfall catches",
            body: "A trader who spreads a large buy across a rising day can beat VWAP while losing badly against the decision price, because VWAP is computed from prices the order itself pushed up. Worse, VWAP cannot see the unexecuted portion at all — in the example above it would simply not count the $1,200. Shortfall measures against the price that existed before any of this began, which is the only benchmark the trading cannot contaminate.",
          },
        ],
      },
      {
        heading: "Matching strategy to motivation",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Urgency drives everything",
              headers: ["Motivation", "Urgency", "Strategy", "Accepts"],
              rows: [
                ["Information-based", "High", "Aggressive; take liquidity", "Market impact, to avoid alpha decay"],
                ["Value-motivated", "Low", "Patient; provide liquidity with limit orders", "Timing risk, to avoid impact"],
                ["Liquidity-motivated", "Moderate", "Scheduled — VWAP or TWAP", "Neither dominates"],
                ["Index rebalance", "Timed", "Trade near the close", "Impact, to match the benchmark"],
              ],
            },
          },
          {
            kind: "p",
            text: "The trade-off is market impact against timing risk, and urgency is what sets the balance. An information-motivated trade races decaying alpha, so paying impact is rational. A rebalancing trade has no decaying signal, so patience is nearly free. Using the same algorithm for both is the error.",
          },
          {
            kind: "bullets",
            items: [
              "Arrival price algorithms target the price when the order arrived, balancing impact against timing risk.",
              "Participation algorithms trade a set share of volume, adapting to real liquidity.",
              "Liquidity-seeking algorithms hunt size across venues including dark pools.",
              "Dark pools reduce information leakage on large orders at the cost of execution certainty.",
              "Best execution is a PROCESS obligation — the firm must have one and follow it, not achieve the best price on every trade.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Decision price", def: "The price when the manager decided to trade — the shortfall benchmark." },
      { term: "Delay cost", def: "Movement between decision and order arrival." },
      { term: "Opportunity cost", def: "Alpha forgone on the unexecuted portion; invisible to VWAP." },
      { term: "Market impact vs timing risk", def: "The core trade-off; urgency sets the balance." },
      { term: "Best execution", def: "A process obligation, not a per-trade outcome." },
    ],
    takeaways: [
      "Compute shortfall both ways — the components must sum to the total, or the decomposition is wrong.",
      "Here the largest component was shares never bought, which VWAP cannot see at all.",
      "VWAP is contaminated by the order's own impact; the decision price is not.",
      "Urgency decides the impact-versus-timing balance: information trades pay impact, rebalancing trades do not.",
      "Best execution requires a documented process, not the best price on every trade.",
    ],
  },

  // ==========================================================
  // RISK MANAGEMENT FOR INDIVIDUALS
  // ==========================================================
  {
    id: "cfa-l3-risk-individuals",
    examSlug: "cfa-l3",
    topicId: "risk-individuals",
    topicName: "Risk Management for Individuals",
    title: "Human Capital, Insurance, and the Individual Balance Sheet",
    readingMinutes: 22,
    summary:
      "Why a young professional is mostly a bond, how human capital drives asset allocation, and which risks should be insured rather than retained.",
    intro:
      "An individual's largest asset is usually not on any statement. Human capital — the present value of future earnings — dominates the balance sheet early in a career, and treating it as an asset changes both the allocation and the insurance advice.",
    sections: [
      {
        heading: "The economic balance sheet",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Human capital",
              expr: "HC = Σ [ salary_t × (1 + g)^t ] / (1 + r)^t",
              note: "Discount at a rate reflecting how risky the earnings are — a tenured professor's rate differs from a commission salesperson's.",
            },
          },
          {
            kind: "example",
            example: {
              title: "How much of a young professional's wealth is not visible",
              prompt:
                "A 40-year-old earns $120,000, expects 3% growth, plans to work 25 more years, and discounts at 6%. She holds $400,000 of financial assets. What does her economic balance sheet look like?",
              steps: [
                "Human capital = the present value of 25 years of growing salary, discounted at 6%.",
                "= $2,110,069.",
                "Total economic wealth = $2,110,069 + $400,000 = $2,510,069.",
              ],
              answer:
                "Human capital is $2.11 million — 84% of her total wealth, and none of it appears on a brokerage statement. The allocation consequence follows directly: because a stable salary behaves like a BOND, her total wealth is already heavily fixed-income-like, and her financial portfolio can therefore hold more equity than a naive look at the $400,000 would suggest.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "Human capital shapes the portfolio",
              headers: ["Earnings profile", "Behaves like", "Financial portfolio should"],
              rows: [
                ["Tenured, stable salary", "A bond", "Hold MORE equity"],
                ["Commission or bonus-heavy", "An equity", "Hold LESS equity"],
                ["Earnings correlated with own employer's stock", "Concentrated equity", "Avoid employer stock entirely"],
                ["Near retirement", "Small and shrinking", "Shift toward the liability"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The employer stock problem, stated properly",
            body: "An employee whose salary depends on a company and who also holds that company's shares has doubled a single exposure. If the firm fails, the job and the savings go together — precisely when the money is needed. This is the same structural error as a pension fund holding sponsor stock, and it is why concentration in employer shares deserves an explicit plan to reduce it rather than a general observation about diversification.",
          },
        ],
      },
      {
        heading: "Which risks to insure",
        blocks: [
          {
            kind: "p",
            text: "Insurance transfers risk at a cost, so it is worth buying where the loss would be severe and the probability low — and worth retaining where the loss is small or the probability high enough that the premium approaches the expected loss plus the insurer's margin.",
          },
          {
            kind: "table",
            table: {
              caption: "The four responses to a risk",
              headers: ["Loss severity", "Probability", "Response"],
              rows: [
                ["High", "Low", "TRANSFER — insure it"],
                ["High", "High", "AVOID — do not take the risk"],
                ["Low", "Low", "RETAIN — self-insure"],
                ["Low", "High", "REDUCE — mitigate and retain"],
              ],
            },
          },
          {
            kind: "bullets",
            items: [
              "Life insurance protects human capital — the need is largest when human capital is largest and dependants exist, and it falls as both decline.",
              "Term insurance is pure protection; permanent policies bundle protection with a savings vehicle, which should be evaluated as two decisions.",
              "Disability insurance is frequently under-bought relative to life insurance despite disability being the more probable event during working years.",
              "Longevity risk — outliving assets — is the mirror image, and annuities transfer it to an insurer.",
              "Property and liability insurance protects financial capital; the liability limit usually matters more than the property limit.",
            ],
          },
          {
            kind: "p",
            text: "The annuity decision is a genuine trade-off rather than an obvious answer. An annuity removes longevity risk and provides certainty, at the cost of liquidity, bequest potential and exposure to the insurer's credit. A partial annuitisation covering ESSENTIAL spending, with the remainder invested for flexibility and legacy, is the structure that usually survives scrutiny.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Human capital", def: "Present value of future earnings; usually the largest early-career asset." },
      { term: "Economic balance sheet", def: "Financial capital plus human capital, against all future obligations." },
      { term: "Bond-like human capital", def: "Stable earnings, which permits more equity in the financial portfolio." },
      { term: "Longevity risk", def: "Outliving assets; transferable through annuitisation." },
      { term: "Partial annuitisation", def: "Annuitise essential spending, invest the rest." },
    ],
    takeaways: [
      "Human capital was 84% of total wealth here and appears on no statement.",
      "Stable salary is bond-like, so the financial portfolio can hold MORE equity.",
      "Commission-based earnings are equity-like and argue for less portfolio equity.",
      "Employer stock doubles an exposure that fails exactly when the money is needed.",
      "Insure high-severity, low-probability losses; retain the small ones.",
      "Disability is more probable than death during working years and is chronically under-insured.",
      "Partial annuitisation of essential spending is the structure that usually survives scrutiny.",
    ],
  },
];

export const l3CmeCurrencyQuestions: Question[] = [];
