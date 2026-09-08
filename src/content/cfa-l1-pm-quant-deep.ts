// ============================================================
// Certus — CFA Level I Portfolio Construction + Quantitative Methods
//
// WHY THIS FILE EXISTS
// Closing the last two material L1 gaps: Portfolio Construction (9.8%,
// the largest remaining) and Quantitative Methods.
//
// A NOTE ON QUANT, because it caused a real error earlier: Quantitative
// Methods moved UP to a 11-14% band on CFA Institute's current table,
// from the old 6-9%. Working from the stale table made Quant look
// over-served when it was in fact short. Weights now come from
// blueprints.ts, which tracks cfainstitute.org.
//
// EVERY NUMBER COMPUTED IN PYTHON FIRST. The standard-error example is
// run at three sample sizes so the square-root law is demonstrated
// rather than asserted.
// ============================================================

import { Chapter, Question } from "./types";

export const pmQuantChapters: Chapter[] = [
  // ==========================================================
  // PORTFOLIO CONSTRUCTION — THE PROCESS
  // ==========================================================
  {
    id: "cfa-l1-pm-process",
    examSlug: "cfa",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "The Portfolio Process, the IPS, and Behavioural Traps",
    readingMinutes: 22,
    summary:
      "Why the portfolio comes before the securities, how a required return is built from a spending need, the constraints that shape every mandate, and the biases that make investors act against themselves.",
    intro:
      "The portfolio perspective is the organising idea of the whole topic: an investment is judged by what it contributes to the total, never in isolation. Everything in this reading — the IPS, the constraints, even the behavioural material — follows from taking that seriously.",
    sections: [
      {
        heading: "The three-step process",
        blocks: [
          {
            kind: "bullets",
            items: [
              "PLANNING — understand the client, write the investment policy statement, set the strategic asset allocation.",
              "EXECUTION — allocate, select securities, implement efficiently.",
              "FEEDBACK — monitor, rebalance, evaluate performance, and revise the IPS as circumstances change.",
            ],
          },
          {
            kind: "p",
            text: "The order matters and is examinable. Security selection comes LAST, after the allocation has been set, because allocation explains the great majority of the variation in a portfolio's returns over time. A brilliant stock picker inside the wrong asset allocation is solving the smaller problem.",
          },
        ],
      },
      {
        heading: "Building a required return from a spending need",
        blocks: [
          {
            kind: "p",
            text: "The return objective is not a wish. It is derived: what the portfolio must earn to fund what it is for, after inflation and after costs.",
          },
          {
            kind: "example",
            example: {
              title: "From a spending need to a return target",
              prompt:
                "A $2,000,000 portfolio must fund $80,000 of annual spending. Inflation is 2.5% and fees are 0.5%. Compute the required nominal return. Then recompute if the $80,000 is needed AFTER tax at a 25% rate.",
              steps: [
                "Spending rate = $80,000 / $2,000,000 = 4.00%.",
                "Required nominal return = 4.00% + 2.5% + 0.5% = 7.00%.",
                "After tax: the portfolio must generate $80,000 / (1 − 0.25) = $106,667 pre-tax.",
                "That is $106,667 / $2,000,000 = 5.33%, so required return = 5.33% + 2.5% + 0.5% = 8.33%.",
              ],
              answer:
                "7.00% before tax, 8.33% if the spending figure is after-tax. Note the operation: DIVIDE by (1 − t) to gross up a need. Multiplying by (1 − t) is the classic error and it goes the wrong way — it would shrink the requirement rather than raise it.",
            },
          },
          {
            kind: "callout",
            label: "Willingness against ability",
            body: "Risk tolerance has two components and they can conflict. ABILITY comes from the facts — horizon, wealth relative to needs, liquidity requirements. WILLINGNESS comes from temperament. Where they conflict, the LOWER governs, and the adviser's job is to educate rather than override. Recommending risk a client cannot emotionally hold produces the worst outcome of all: selling at the bottom.",
          },
          {
            kind: "table",
            table: {
              caption: "The constraints — remembered as TTLLU",
              headers: ["Constraint", "The question it answers"],
              rows: [
                ["Time horizon", "When is the money needed? Often multi-stage."],
                ["Taxes", "What is taxable, at what rate, and in which account?"],
                ["Liquidity", "What cash is needed soon, and for what?"],
                ["Legal and regulatory", "What rules bind this investor?"],
                ["Unique circumstances", "Concentrated stock, ESG restrictions, family obligations."],
              ],
            },
          },
        ],
      },
      {
        heading: "Behavioural biases",
        blocks: [
          {
            kind: "p",
            text: "Biases split into COGNITIVE errors, which are faults in processing and respond to information and structure, and EMOTIONAL biases, which come from feeling and are better accommodated than corrected. Knowing which type you face determines whether to educate or to adapt the portfolio.",
          },
          {
            kind: "table",
            table: {
              caption: "The most examined biases",
              headers: ["Bias", "Type", "How it shows up"],
              rows: [
                ["Overconfidence", "Cognitive", "Too much trading, too little diversification"],
                ["Confirmation", "Cognitive", "Seeking evidence that supports the existing view"],
                ["Anchoring", "Cognitive", "Fixating on the purchase price or a round number"],
                ["Availability", "Cognitive", "Overweighting recent or vivid events"],
                ["Loss aversion", "Emotional", "Holding losers, selling winners too early"],
                ["Regret aversion", "Emotional", "Doing nothing; herding into consensus"],
                ["Status quo", "Emotional", "Never rebalancing"],
                ["Mental accounting", "Cognitive", "Treating money differently by its label"],
              ],
            },
          },
          {
            kind: "p",
            text: "The disposition effect deserves naming because it combines two of these: investors sell winners to realise a gain and hold losers to avoid realising a loss, which is exactly backwards for both tax purposes and momentum. It is loss aversion plus mental accounting operating together.",
          },
        ],
      },
      {
        heading: "Pooled vehicles and risk governance",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "How pooled vehicles differ",
              headers: ["Vehicle", "Pricing", "Notes"],
              rows: [
                ["Open-end mutual fund", "Once daily at NAV", "Trades with the fund; flows force manager trading"],
                ["Closed-end fund", "Intraday, at a premium or discount to NAV", "Fixed share count; flows do not disturb the manager"],
                ["Exchange-traded fund", "Intraday, close to NAV", "Creation/redemption arbitrage keeps price near NAV"],
                ["Separately managed account", "Direct ownership", "Customisable; tax lots are the investor's own"],
              ],
            },
          },
          {
            kind: "p",
            text: "Risk management is not risk minimisation. It is deciding which risks the investor is PAID to take, taking those deliberately at the right size, and shedding the rest. A framework needs a stated risk tolerance, a measurement approach, and governance that assigns who may take which risk and who monitors it.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Portfolio perspective", def: "Judge an investment by its contribution to the total, never in isolation." },
      { term: "Investment policy statement", def: "The written objectives and constraints; written before advice is given." },
      { term: "Required return", def: "Spending rate + inflation + costs; gross up by dividing by (1 − t) for after-tax needs." },
      { term: "Ability vs willingness", def: "Facts vs temperament. Where they conflict, the LOWER governs." },
      { term: "Cognitive error", def: "A processing fault; responds to education and structure." },
      { term: "Emotional bias", def: "Feeling-driven; usually accommodated rather than corrected." },
      { term: "Disposition effect", def: "Selling winners and holding losers — loss aversion plus mental accounting." },
    ],
    takeaways: [
      "Allocation before selection — allocation explains most of the variation in returns.",
      "Required return is derived from a spending need, not chosen.",
      "Gross up an after-tax need by DIVIDING by (1 − t); multiplying is the classic error.",
      "Where ability and willingness conflict, the lower governs.",
      "Cognitive errors respond to education; emotional biases are usually accommodated.",
      "The disposition effect is backwards for both tax and momentum.",
      "Closed-end funds trade at premiums and discounts; ETF arbitrage keeps price near NAV.",
      "Risk management means taking paid risks deliberately, not minimising risk.",
    ],
  },

  // ==========================================================
  // QUANTITATIVE METHODS
  // ==========================================================
  {
    id: "cfa-l1-quant-inference",
    examSlug: "cfa",
    topicId: "quant",
    topicName: "Quantitative Methods",
    title: "Probability, Sampling, and Hypothesis Testing",
    readingMinutes: 22,
    summary:
      "Probability rules including Bayes, expected value and variance from a distribution, why sample size works through a square root, and how a hypothesis test is actually constructed.",
    intro:
      "Quantitative Methods moved up to a top-weight band on the current curriculum, and inference is the part that carries it. The mechanics are few; the marks are lost on interpretation — what a confidence interval means, and what rejecting a null actually establishes.",
    sections: [
      {
        heading: "Probability and expected value",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "The core rules",
              expr: "P(A and B) = P(A) × P(B|A)     P(A or B) = P(A) + P(B) − P(A and B)     P(A|B) = P(A and B) / P(B)",
              note: "Independence means P(B|A) = P(B). Mutually exclusive means P(A and B) = 0. They are different ideas.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Joint, union, and a Bayesian update",
              prompt:
                "P(A) = 0.30, P(B) = 0.40, and P(B|A) = 0.60. Find the joint probability, the union, and P(A|B).",
              steps: [
                "Joint: P(A and B) = 0.30 × 0.60 = 0.18.",
                "Union: P(A or B) = 0.30 + 0.40 − 0.18 = 0.52.",
                "Bayes: P(A|B) = 0.18 / 0.40 = 0.45.",
              ],
              answer:
                "0.18, 0.52 and 0.45. Note what the update did: knowing B occurred raised the probability of A from 0.30 to 0.45, because A and B are positively related. Bayes is just the conditional probability formula rearranged — there is nothing extra to memorise.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Expected return and risk from a distribution",
              prompt:
                "Returns are +20% with probability 0.25, +8% with probability 0.50, and −10% with probability 0.25. Compute expected return and standard deviation.",
              steps: [
                "E(R) = 0.25(20%) + 0.50(8%) + 0.25(−10%) = 5% + 4% − 2.5% = 6.50%.",
                "Variance = 0.25(0.20 − 0.065)² + 0.50(0.08 − 0.065)² + 0.25(−0.10 − 0.065)² = 0.011475.",
                "Standard deviation = √0.011475 = 10.71%.",
              ],
              answer:
                "6.50% expected return with a 10.71% standard deviation. Note that no single outcome equals 6.50% — the expected value is a probability-weighted average, not a prediction of what will happen.",
            },
          },
        ],
      },
      {
        heading: "Sampling: why n works through a square root",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Standard error and confidence interval",
              expr: "SE = s / √n          CI = x̄ ± (critical value × SE)",
              note: "The central limit theorem lets us use a normal distribution for the sample mean once n is reasonably large, whatever the population's own shape.",
            },
          },
          {
            kind: "example",
            example: {
              title: "The square-root law, demonstrated",
              prompt:
                "A sample of 64 observations has a mean of 8.5 and a standard deviation of 3.2. Build a 95% confidence interval, then show what happens to precision at n = 16 and n = 256.",
              steps: [
                "SE = 3.2 / √64 = 3.2 / 8 = 0.40.",
                "95% CI = 8.5 ± 1.96(0.40) = [7.716, 9.284].",
                "n = 16: SE = 0.80, half-width 1.568. n = 64: SE = 0.40, half-width 0.784. n = 256: SE = 0.20, half-width 0.392.",
              ],
              answer:
                "The interval is [7.72, 9.28]. Quadrupling the sample halves the standard error every time — 16 to 64 to 256 gives 0.80, 0.40, 0.20. That is the practical meaning of the square root: precision is expensive, because each doubling of accuracy costs four times the data.",
            },
          },
          {
            kind: "callout",
            label: "What a confidence interval does NOT mean",
            body: "A 95% confidence interval does not mean there is a 95% probability the true mean lies inside THIS interval — the true mean is fixed, and this interval either contains it or does not. It means the PROCEDURE produces intervals containing the true mean 95% of the time. Examiners test this distinction because it is the one almost everybody gets wrong.",
          },
        ],
      },
      {
        heading: "Hypothesis testing",
        blocks: [
          {
            kind: "bullets",
            items: [
              "State the null and alternative. The null always contains the equality, and it is what you try to REJECT.",
              "Choose the significance level α — the probability of rejecting a true null you are willing to accept.",
              "Compute the test statistic: (sample result − hypothesised value) / standard error.",
              "Compare with the critical value, or compare the p-value with α.",
              "Reject or fail to reject — and note that failing to reject is NOT accepting the null.",
            ],
          },
          {
            kind: "example",
            example: {
              title: "Testing a mean",
              prompt:
                "Using the same sample — mean 8.5, standard deviation 3.2, n = 64 — test at the 5% level whether the population mean differs from 7.0.",
              steps: [
                "H₀: μ = 7.0 against Hₐ: μ ≠ 7.0. Two-tailed, so the critical value is ±1.96.",
                "SE = 0.40, as before.",
                "t = (8.5 − 7.0) / 0.40 = 3.75.",
              ],
              answer:
                "|3.75| > 1.96, so reject the null at the 5% level. What that establishes is narrow but real: the data are inconsistent with a mean of 7.0. It does NOT prove the mean is 8.5, and note the interval [7.72, 9.28] already excluded 7.0 — a confidence interval and a two-tailed test at the same level always agree, because they are the same calculation viewed from either end.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "The two errors",
              headers: ["", "Null is true", "Null is false"],
              rows: [
                ["Reject", "Type I error (probability α)", "Correct"],
                ["Fail to reject", "Correct", "Type II error (probability β)"],
              ],
            },
          },
          {
            kind: "p",
            text: "Lowering α reduces Type I errors and RAISES Type II errors for a given sample size. The only way to reduce both at once is to collect more data. Statistical significance is also not economic significance: a tiny effect can be statistically significant in a large sample and still be worthless after transaction costs.",
          },
        ],
      },
      {
        heading: "Correlation and simple regression",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Correlation and the regression slope",
              expr: "r = cov(x,y) / (s_x × s_y)          b₁ = cov(x,y) / var(x)",
              note: "r² is the fraction of the dependent variable's variation explained by the independent variable.",
            },
          },
          {
            kind: "example",
            example: {
              title: "From covariance to explanatory power",
              prompt:
                "Covariance is 0.0045, with standard deviations of 0.09 and 0.12. Compute the correlation, r², and the regression slope.",
              steps: [
                "r = 0.0045 / (0.09 × 0.12) = 0.0045 / 0.0108 = 0.4167.",
                "r² = 0.4167² = 0.1736.",
                "b₁ = 0.0045 / 0.09² = 0.0045 / 0.0081 = 0.5556.",
              ],
              answer:
                "Correlation 0.42, r² 0.17, slope 0.556. A correlation of 0.42 sounds substantial until it is squared: only 17.4% of the variation is explained, leaving 83% unexplained. Squaring is the honest way to read a correlation, and it is why a 0.4 correlation is a weak relationship rather than a moderate one.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Correlation measures LINEAR association only; a strong non-linear relationship can show r near zero.",
              "It is highly sensitive to outliers — always plot the data.",
              "Correlation is not causation, and spurious correlation is common in financial time series.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Bayes' formula", def: "P(A|B) = P(A and B)/P(B) — the conditional probability rule rearranged." },
      { term: "Standard error", def: "s / √n. Quadrupling n halves it." },
      { term: "Central limit theorem", def: "The sample mean approaches normality as n grows, whatever the population shape." },
      { term: "Confidence interval", def: "A property of the PROCEDURE, not a probability about this one interval." },
      { term: "Type I error", def: "Rejecting a true null; its probability is α." },
      { term: "Type II error", def: "Failing to reject a false null; rises when α is lowered." },
      { term: "Coefficient of determination", def: "r² — the fraction of variation explained." },
    ],
    takeaways: [
      "Independence and mutual exclusivity are different ideas, and Bayes is just the conditional rule rearranged.",
      "Expected value is a weighted average, not a prediction — no single outcome need equal it.",
      "Precision improves with √n, so each doubling of accuracy costs four times the data.",
      "A confidence interval describes the procedure, not the probability of this interval.",
      "The null contains the equality and is what you try to reject; failing to reject is not accepting.",
      "A confidence interval and a two-tailed test at the same level always agree.",
      "Lowering α raises Type II error unless you collect more data.",
      "Square the correlation before believing it — 0.42 explains only 17% of the variation.",
    ],
  },
];

export const pmQuantQuestions: Question[] = [];
