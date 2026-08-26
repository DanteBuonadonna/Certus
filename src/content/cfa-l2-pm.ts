// ============================================================
// Certus — CFA Level II Portfolio Management readings
//
// WHY THIS FILE EXISTS: a concept audit against CFA Institute's Level II
// Portfolio Management outline found the existing chapters covered only
// multifactor models. Value at Risk and market-risk measurement, the
// full fundamental law of active management (transfer coefficient),
// exchange-traded fund mechanics, backtesting and simulation, and
// economics and investment markets were entirely absent — a grep for
// "VaR" returned only substring matches inside words like "variable".
//
// The Level II PM question target is 236. Writing questions against the
// old chapters would have tested five readings' worth of material the
// platform never taught. These five chapters come first.
//
// Every number in every worked example was computed in Python before
// being written here, not estimated.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const pmChaptersL2: Chapter[] = [
  // ----------------------------------------------------------
  {
    id: "cfa-l2-pm-market-risk",
    examSlug: "cfa-l2",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Measuring and Managing Market Risk: VaR and Its Alternatives",
    readingMinutes: 21,
    summary:
      "Value at Risk three ways, what each method assumes, where all three fail, and the sensitivity and scenario measures that fill the gap.",
    intro:
      "Value at Risk answers one narrow question: over a given period, at a given confidence level, what is the minimum loss we should expect on the bad days? It is narrow by construction, and most of the trouble people get into with VaR comes from forgetting that. This reading builds the three estimation methods, shows where each one breaks, and then covers the sensitivity and scenario measures that exist precisely because VaR does not tell you what happens in the tail.",
    sections: [
      {
        heading: "What VaR actually says",
        blocks: [
          {
            kind: "p",
            text: "A VaR statement has three components and is meaningless without all three: an amount, a time period, and a probability. \"The 5% one-day VaR is $2.4 million\" means that on 5% of days we expect to lose at least $2.4 million. Read that again — at least. VaR is a minimum loss at a confidence level, not a maximum. The single most common error in practice is to treat VaR as a worst case, which is exactly what it is not.",
          },
          {
            kind: "p",
            text: "The equivalent phrasings you will see: a 5% VaR is the same as a 95% confidence VaR. Both describe the same point on the distribution. CFA Institute expresses VaR as a positive number representing a loss, so a larger VaR means more risk.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "VaR is a cutoff in the left tail. The shaded region holds 5% of outcomes — VaR marks where it begins, and says nothing about how far it extends.",
              alt: "A return distribution with the left 5% tail shaded and a vertical line marking the VaR cutoff.",
              svg: `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img">
  <path d="M30 165 C 90 165, 110 40, 160 40 C 210 40, 230 165, 290 165 L 290 165" fill="none" stroke="var(--primary)" stroke-width="2"/>
  <path d="M30 165 C 60 165, 72 120, 88 96 L 88 165 Z" fill="var(--ats-red)" opacity="0.30" stroke="none"/>
  <line x1="88" y1="30" x2="88" y2="165" stroke="var(--ats-red)" stroke-width="2" stroke-dasharray="4 3"/>
  <line x1="30" y1="165" x2="330" y2="165" stroke="var(--border)" stroke-width="1.5"/>
  <text x="92" y="28" font-size="11" fill="var(--ats-red)">VaR cutoff</text>
  <text x="34" y="186" font-size="10" fill="var(--text-muted)">5% of days lie here — VaR does not say how far</text>
  <text x="150" y="185" font-size="10" fill="var(--text-muted)"> </text>
  <text x="300" y="169" font-size="10" fill="var(--text-muted)">return</text>
</svg>`,
            },
          },
          {
            kind: "callout",
            label: "The distinction that gets tested",
            body: "VaR is the minimum loss on the worst days. Conditional VaR (expected shortfall) is the average loss given that the VaR threshold was breached. If an exam question asks what you expect to lose when things go badly, the answer is CVaR, not VaR.",
          },
        ],
      },
      {
        heading: "Method one: the parametric (variance-covariance) approach",
        blocks: [
          {
            kind: "p",
            text: "The parametric method assumes returns are normally distributed, then reads the VaR straight off the normal curve. You need an expected return, a standard deviation, and the z-score for your confidence level. The two z-scores worth memorising are 1.65 for 5% and 2.33 for 1%.",
          },
          {
            kind: "formula",
            formula: {
              label: "Parametric VaR",
              expr: "VaR = [ (z × σ) − μ ] × portfolio value",
              note: "μ and σ must be expressed over the SAME period as the VaR. Subtracting μ is what makes this a loss relative to zero rather than relative to the mean.",
            },
          },
          {
            kind: "example",
            example: {
              title: "A 5% one-day VaR from annual inputs",
              prompt:
                "A $150 million portfolio has an expected annual return of 8% and annual volatility of 16%. Using 250 trading days, compute the 5% one-day VaR.",
              steps: [
                "Scale the mean linearly: 0.08 ÷ 250 = 0.00032 per day.",
                "Scale the volatility by the square root of time: 0.16 ÷ √250 = 0.16 ÷ 15.811 = 0.010119 per day.",
                "Apply the 5% z-score: 1.645 × 0.010119 = 0.016646.",
                "Subtract the daily mean: 0.016646 − 0.00032 = 0.016326, or 1.6326%.",
                "Multiply by portfolio value: 0.016326 × $150m = $2.449m.",
              ],
              answer:
                "The 5% one-day VaR is about $2.45 million. On 5% of days — roughly one trading day in twenty — the portfolio should lose at least this much.",
            },
          },
          {
            kind: "p",
            text: "Note the asymmetry in the scaling. Means scale with time; standard deviations scale with the square root of time. That is why a ten-day VaR is not ten times the one-day figure but √10 ≈ 3.16 times it, giving $7.74 million in the example above. The square-root rule assumes returns are independent across days, which is itself an assumption worth doubting in a crisis.",
          },
          {
            kind: "p",
            text: "Tightening the confidence level from 5% to 1% raises the z-score from 1.645 to 2.326 and the VaR from $2.45m to $3.48m. Nothing about the portfolio changed. This is why comparing two firms' VaR figures without checking their parameters is meaningless.",
          },
          {
            kind: "bullets",
            items: [
              "Strength: simple, fast, and requires only a mean, a covariance matrix and a z-score.",
              "Weakness: real return distributions have fat tails, so the normal assumption understates the frequency of extreme losses.",
              "Weakness: options and other non-linear payoffs are poorly described by a variance-covariance framework, since their return distributions are skewed by construction.",
              "Weakness: the covariance matrix is estimated from history and is unstable exactly when it matters.",
            ],
          },
        ],
      },
      {
        heading: "Method two: historical simulation",
        blocks: [
          {
            kind: "p",
            text: "Historical simulation abandons the normality assumption entirely. Take the portfolio's current positions, apply the actual returns of the past N days to them, sort the resulting hypothetical outcomes from worst to best, and read off the 5th percentile. If you have 500 days of history, the 5% VaR is the 25th worst outcome.",
          },
          {
            kind: "p",
            text: "The appeal is that it makes no distributional assumption — whatever fat tails and skew existed in the historical window are carried through automatically. The cost is that it assumes the future resembles the sample period. A lookback window that contains no crisis will produce a VaR that has never seen a crisis. Extend the window to include one and you are now assuming a decade-old regime still applies.",
          },
          {
            kind: "callout",
            label: "The window problem",
            body: "Shorten the lookback and VaR becomes responsive but unstable. Lengthen it and VaR becomes stable but stale. There is no setting that solves both, which is why firms run several windows rather than pretending one is correct.",
          },
        ],
      },
      {
        heading: "Method three: Monte Carlo simulation",
        blocks: [
          {
            kind: "p",
            text: "Monte Carlo specifies a distribution for each risk factor, draws thousands of random scenarios from those distributions, revalues the portfolio in each, and reads the percentile off the simulated distribution. Unlike the parametric method it can handle non-linear instruments properly, because each option is revalued in each scenario rather than approximated by a delta. Unlike historical simulation it is not limited to outcomes that happened to occur in the sample.",
          },
          {
            kind: "p",
            text: "The catch is that you must specify the distributions and correlations yourself. Monte Carlo does not discover the return process; it propagates whatever process you assumed. Feed it normal distributions and you have rebuilt the parametric method at far greater computational cost. Its advantage is real only when the assumed distributions are themselves well chosen.",
          },
          {
            kind: "table",
            table: {
              caption: "The three methods compared",
              headers: ["", "Parametric", "Historical", "Monte Carlo"],
              rows: [
                ["Distribution assumed", "Normal", "None — uses the sample", "Whatever you specify"],
                ["Handles options well", "No", "Yes", "Yes"],
                ["Computational cost", "Low", "Low", "High"],
                ["Main vulnerability", "Fat tails", "Unrepresentative window", "Model and input error"],
              ],
            },
          },
        ],
      },
      {
        heading: "What VaR cannot do",
        blocks: [
          {
            kind: "p",
            text: "VaR is silent about the size of losses beyond the cutoff. Two portfolios can report an identical 5% VaR while one loses slightly more than the threshold on bad days and the other occasionally loses ten times it. That is not a subtle limitation; it is the difference between a manageable drawdown and insolvency.",
          },
          {
            kind: "p",
            text: "VaR also treats correlations as inputs, and correlations rise in crises. A portfolio diversified according to normal-period correlations can find its diversification evaporating precisely in the scenario the VaR number was supposed to describe. Add liquidity — VaR assumes positions can be valued and, implicitly, exited at those values — and the picture in a genuine dislocation is worse than the number suggested.",
          },
          {
            kind: "p",
            text: "There is a behavioural failure mode too. Because VaR is a single reportable number, it invites optimisation against the measure: a trader can construct a position that sells deep tail risk for premium income, lowering reported VaR while raising true risk. The measure looks better as the portfolio gets more dangerous.",
          },
          {
            kind: "bullets",
            items: [
              "Conditional VaR (expected shortfall): the average loss conditional on exceeding VaR. It sees into the tail that VaR ignores.",
              "Incremental VaR: how portfolio VaR changes if a position is added or removed.",
              "Marginal VaR: the sensitivity of portfolio VaR to a small change in a position — useful for risk budgeting.",
              "Relative VaR: VaR measured on active return against a benchmark rather than on absolute return.",
            ],
          },
        ],
      },
      {
        heading: "Sensitivity and scenario measures",
        blocks: [
          {
            kind: "p",
            text: "Sensitivity measures ask how value moves for a small change in one risk factor, and they carry no probability at all. For equities that means beta. For fixed income it means duration and convexity. For options it means the Greeks: delta for the underlying price, gamma for delta's own rate of change, vega for volatility, theta for time decay, rho for rates.",
          },
          {
            kind: "p",
            text: "Because these measures ignore probability, they complement VaR rather than compete with it. Duration tells you what a 100 basis point move does; it does not tell you how likely that move is. VaR tells you the probability; it does not decompose the exposure. A risk report needs both.",
          },
          {
            kind: "p",
            text: "Scenario measures go further by shocking many factors together. Historical scenario analysis replays an actual episode — the 2008 credit crisis, the 1987 crash, the 2020 pandemic drawdown — through today's positions. Hypothetical scenario analysis constructs a coherent set of shocks that has not occurred but could. Reverse stress testing inverts the question: rather than asking what a given shock does to us, it asks what shock would break us, then assesses how plausible that shock is.",
          },
          {
            kind: "callout",
            label: "Why stress tests catch what VaR misses",
            body: "VaR is estimated from a distribution fitted to normal times. Stress tests deliberately abandon that distribution and impose correlations of one, liquidity of zero, and moves outside anything in the sample. They are the answer to the objection that VaR only describes the world in which the model was estimated.",
          },
        ],
      },
      {
        heading: "Constraints, budgets, and who uses which measure",
        blocks: [
          {
            kind: "p",
            text: "Risk budgeting allocates a total risk allowance across positions, strategies or asset classes, which turns risk from a constraint into a resource to be spent where expected return per unit of it is highest. Position limits cap exposure to a single security or issuer. Scenario limits cap the loss permitted under a specified stress. Stop-loss limits force an exit once a threshold is breached.",
          },
          {
            kind: "table",
            table: {
              caption: "Market risk measures by user",
              headers: ["User", "Primary concern", "Measures relied on"],
              rows: [
                ["Bank", "Solvency and regulatory capital", "VaR, stress tests, sensitivity by desk"],
                ["Asset manager", "Tracking the mandate", "Relative VaR, active risk, factor exposures"],
                ["Pension fund", "Funding the liabilities", "Surplus at risk, liability-relative scenarios"],
                ["Insurer", "Claims-paying ability", "Scenario analysis, economic capital"],
                ["Hedge fund", "Leverage and margin", "VaR, stress tests, liquidity-adjusted measures"],
              ],
            },
          },
          {
            kind: "p",
            text: "The pattern to notice: institutions with liabilities care about surplus rather than assets alone, and institutions with leverage care about the path to a loss rather than only its size, because a margin call can force liquidation before a position has a chance to recover.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Value at Risk", def: "The minimum loss expected over a given period at a given probability — not the maximum loss." },
      { term: "Conditional VaR", def: "The average loss given that the VaR threshold has been exceeded; also called expected shortfall." },
      { term: "Parametric VaR", def: "VaR computed from an assumed normal distribution using a mean, a standard deviation and a z-score." },
      { term: "Historical simulation", def: "VaR read as a percentile of the portfolio's returns under actual historical factor moves." },
      { term: "Monte Carlo simulation", def: "VaR read from thousands of scenarios drawn from specified distributions, revaluing the portfolio each time." },
      { term: "Marginal VaR", def: "The change in portfolio VaR for a small change in a position; the basis of risk budgeting." },
      { term: "Reverse stress test", def: "An analysis that starts from a failure outcome and works backward to the shocks that would cause it." },
      { term: "Risk budgeting", def: "Allocating a total risk allowance across positions or strategies as a scarce resource." },
    ],
    takeaways: [
      "VaR is a minimum loss at a confidence level, not a worst case — the single most common misreading.",
      "A VaR figure without a period and a probability attached is not a statement about risk.",
      "Means scale with time, volatilities with the square root of time; the ten-day VaR is √10 times the one-day, not ten times.",
      "Parametric assumes normality, historical assumes the past window repeats, Monte Carlo assumes your specified distributions are right.",
      "CVaR, not VaR, answers what you lose when the threshold is breached.",
      "Sensitivity measures carry no probability; VaR carries no decomposition. A risk report needs both, plus scenarios for the regime the model never saw.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-pm-active-management",
    examSlug: "cfa-l2",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "The Analysis of Active Portfolio Management",
    readingMinutes: 20,
    summary:
      "Active return and active risk, the information ratio, and the fundamental law — including the transfer coefficient that separates the theory from what a constrained manager actually achieves.",
    intro:
      "Active management can be reduced, with surprising rigour, to a small number of quantities: how good your forecasts are, how many independent forecasts you make, and how much of each forecast survives your constraints and reaches the portfolio. The fundamental law of active management assembles those into a single equation. It is one of the few results in the curriculum that is simultaneously testable, practical, and genuinely humbling about how hard active management is.",
    sections: [
      {
        heading: "Active return, active risk, and the information ratio",
        blocks: [
          {
            kind: "p",
            text: "Active return is the portfolio return minus the benchmark return. Active risk — used interchangeably with tracking error — is the standard deviation of that active return over time. Neither measures skill on its own: a manager can generate large active return simply by taking large active risk, which requires no skill at all, only nerve.",
          },
          {
            kind: "formula",
            formula: {
              label: "Information ratio",
              expr: "IR = active return ÷ active risk",
              note: "The ratio of what you earned to how much you deviated from the benchmark to earn it. This is the measure of skill per unit of active risk.",
            },
          },
          {
            kind: "p",
            text: "A manager producing 2.4% of active return with 4.0% of active risk has an information ratio of 0.60. A manager producing 4.8% with 8.0% has the same 0.60 — identical skill, twice the risk appetite. The information ratio is what lets you compare them, and it is why an investor should choose the manager on IR and then scale the active risk to their own tolerance, rather than choosing on active return.",
          },
          {
            kind: "callout",
            label: "Sharpe versus information ratio",
            body: "The Sharpe ratio measures excess return over the risk-free rate per unit of total risk and is unaffected by adding cash or leverage. The information ratio measures active return per unit of active risk and IS affected by adding cash, because cash creates a permanent deviation from the benchmark. That asymmetry appears regularly in exam questions.",
          },
        ],
      },
      {
        heading: "The fundamental law, basic form",
        blocks: [
          {
            kind: "p",
            text: "Grinold's insight was that the achievable information ratio depends on two things: the quality of each forecast and the number of independent forecasts. Quality is the information coefficient (IC), the correlation between forecast returns and realised returns. Quantity is breadth (BR), the number of genuinely independent decisions made per year.",
          },
          {
            kind: "formula",
            formula: {
              label: "The basic fundamental law",
              expr: "IR = IC × √BR",
              note: "Skill multiplied by the square root of the number of independent bets. Breadth helps, but with diminishing returns — quadrupling breadth only doubles the IR.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Two routes to the same information ratio",
              prompt:
                "Manager A has an information coefficient of 0.05 and makes 400 independent decisions a year. Manager B has an IC of 0.10 and makes 100. Compare their achievable information ratios.",
              steps: [
                "Manager A: IR = 0.05 × √400 = 0.05 × 20 = 1.00.",
                "Manager B: IR = 0.10 × √100 = 0.10 × 10 = 1.00.",
                "Both reach 1.00 by different routes — A through breadth, B through skill.",
              ],
              answer:
                "Both achieve an information ratio of 1.00. A quantitative manager with weak signals applied very widely and a concentrated manager with strong conviction can be equally good; the law says nothing about which is easier to sustain.",
            },
          },
          {
            kind: "p",
            text: "An information coefficient of 0.05 sounds negligible, and in a sense it is: it means forecasts explain a quarter of one percent of the variation in returns. That such a signal, applied across hundreds of independent positions, produces a respectable information ratio is the entire argument for systematic quantitative management.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "IR = IC × √BR. Because breadth enters under a square root, each additional bet contributes less than the one before.",
              alt: "A concave rising curve showing information ratio against breadth for a fixed information coefficient.",
              svg: `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="45" y1="170" x2="430" y2="170" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="45" y1="20" x2="45" y2="170" stroke="var(--border)" stroke-width="1.5"/>
  <path d="M45 170 C 120 105, 200 75, 290 58 C 350 48, 400 42, 430 38" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
  <line x1="45" y1="110" x2="145" y2="110" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="145" y1="110" x2="145" y2="170" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="45" y1="80" x2="245" y2="80" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="245" y1="80" x2="245" y2="170" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="8" y="114" font-size="10" fill="var(--text-muted)">0.50</text>
  <text x="8" y="84" font-size="10" fill="var(--text-muted)">1.00</text>
  <text x="128" y="185" font-size="10" fill="var(--text-muted)">100</text>
  <text x="228" y="185" font-size="10" fill="var(--text-muted)">400</text>
  <text x="330" y="185" font-size="10" fill="var(--text-muted)">breadth</text>
  <text x="55" y="32" font-size="11" fill="var(--primary)">IC = 0.05</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Breadth is harder to earn than it looks",
        blocks: [
          {
            kind: "p",
            text: "Breadth counts independent decisions, and independence is a demanding requirement. A manager who holds 200 stocks but sizes them all from a single macro view about interest rates has made one decision, not two hundred. A manager who overweights every energy name on one oil forecast has breadth of one in that sector, whatever the position count.",
          },
          {
            kind: "p",
            text: "Rebalancing frequency multiplies breadth only when successive forecasts are genuinely new information rather than the same view restated. Reviewing 100 stocks quarterly gives 400 decisions a year only if each quarter's view is independent of the last. If the signal is slow-moving, the effective breadth is far below the nominal count — and since IR scales with √BR, overstating breadth overstates achievable performance directly.",
          },
        ],
      },
      {
        heading: "The transfer coefficient: theory meeting reality",
        blocks: [
          {
            kind: "p",
            text: "The basic law assumes the manager can build the portfolio her forecasts imply. Real managers cannot. They face long-only constraints that cap how underweight they can go, position limits, sector limits, turnover budgets, liquidity limits and tax considerations. Every one of these prevents some part of the forecast from reaching the portfolio.",
          },
          {
            kind: "p",
            text: "The transfer coefficient measures how much survives. Formally it is the correlation between the active weights the manager actually holds and the active weights an unconstrained optimiser would have chosen given the same forecasts. It runs from zero to one, and it enters the law multiplicatively.",
          },
          {
            kind: "formula",
            formula: {
              label: "The full fundamental law",
              expr: "IR = TC × IC × √BR",
              note: "TC is the fraction of the theoretical information ratio that survives the constraint set. A TC of 0.60 discards 40% of the manager's skill before it reaches the portfolio.",
            },
          },
          {
            kind: "example",
            example: {
              title: "What constraints cost",
              prompt:
                "A manager has an IC of 0.05, breadth of 400, and a transfer coefficient of 0.60. What is the realised information ratio, and what was the constraint set worth?",
              steps: [
                "Unconstrained: IR = 0.05 × √400 = 1.00.",
                "Constrained: IR = 0.60 × 0.05 × 20 = 0.60.",
                "The gap is 1.00 − 0.60 = 0.40 of information ratio, forty percent of the manager's theoretical skill.",
              ],
              answer:
                "The realised information ratio is 0.60. The long-only and position constraints cost 0.40 of IR — a larger effect than most fee debates, and one that rarely appears in a marketing document.",
            },
          },
          {
            kind: "callout",
            label: "Why the long-only constraint bites hardest in small caps",
            body: "A stock with a 0.02% benchmark weight can be underweighted by at most 0.02% in a long-only portfolio, however negative the forecast. The manager can express a strong positive view fully and a strong negative view barely at all. The asymmetry is worst where benchmark weights are smallest, which is precisely where mispricing is most common.",
          },
        ],
      },
      {
        heading: "Optimal active risk and value added",
        blocks: [
          {
            kind: "p",
            text: "Given an information ratio and an investor's aversion to active risk, there is an optimal amount of active risk to take. Taking less leaves value on the table; taking more adds risk faster than it adds return.",
          },
          {
            kind: "formula",
            formula: {
              label: "Optimal active risk and the value it adds",
              expr: "σ*(active) = IR ÷ (2λ)     and     value added = IR² ÷ (4λ)",
              note: "λ is the investor's active-risk aversion coefficient. Note that value added depends on the SQUARE of the information ratio.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Sizing the active bet",
              prompt:
                "An investor with an active-risk aversion coefficient of 10 hires a manager with an information ratio of 0.60. What active risk should the mandate allow, and what value should it add?",
              steps: [
                "Optimal active risk = 0.60 ÷ (2 × 10) = 0.60 ÷ 20 = 0.03, or 3.0%.",
                "Value added = 0.60² ÷ (4 × 10) = 0.36 ÷ 40 = 0.009, or 0.90%.",
              ],
              answer:
                "The mandate should permit about 3.0% tracking error, and should be expected to add roughly 0.90% of value annually. Because value added goes with IR squared, a manager with double the IR adds four times the value at the same aversion.",
            },
          },
          {
            kind: "p",
            text: "That squaring is the strongest argument in the reading for paying up for genuine skill and refusing to pay anything for its absence. It is also the reason closet indexing is such a poor deal: a portfolio with a very low transfer coefficient and minimal active risk charges active fees for an information ratio that rounds to nothing.",
          },
        ],
      },
      {
        heading: "Where the law's assumptions fail",
        blocks: [
          {
            kind: "bullets",
            items: [
              "The IC is assumed constant across decisions and stable over time. In practice signal quality varies by regime and decays as strategies become crowded.",
              "Breadth is assumed to count genuinely independent bets, which overstates almost every real portfolio.",
              "The law is an ex ante expectation, not a promise. Realised results in any single year are dominated by noise.",
              "Transaction costs sit outside the framework entirely and rise with breadth, partly offsetting the benefit of trading more.",
              "The law says nothing about whether the IC will persist once the manager's approach is widely copied.",
            ],
          },
          {
            kind: "p",
            text: "None of this makes the law useless. It makes it a tool for asking the right questions of a manager: how good is your signal, how many independent times a year do you apply it, and how much of it does your constraint set throw away before it reaches the portfolio? A manager who cannot answer those three has not thought carefully about the source of their returns.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Active return", def: "Portfolio return minus benchmark return." },
      { term: "Active risk", def: "The standard deviation of active return; used interchangeably with tracking error." },
      { term: "Information ratio", def: "Active return divided by active risk — skill per unit of deviation from the benchmark." },
      { term: "Information coefficient", def: "The correlation between forecast and realised returns; the quality of a manager's signal." },
      { term: "Breadth", def: "The number of genuinely independent investment decisions made per year." },
      { term: "Transfer coefficient", def: "The correlation between actual active weights and the unconstrained optimal weights; the fraction of skill surviving constraints." },
      { term: "Active-risk aversion", def: "The coefficient λ describing how strongly an investor dislikes deviation from the benchmark." },
      { term: "Closet indexing", def: "Charging active fees for a portfolio whose active risk and transfer coefficient are both near zero." },
    ],
    takeaways: [
      "IR = active return ÷ active risk, and it is the measure that makes managers of different risk appetites comparable.",
      "The basic law is IR = IC × √BR; the full law is IR = TC × IC × √BR.",
      "Breadth enters under a square root, so quadrupling independent bets only doubles the information ratio.",
      "Breadth counts independent decisions — 200 positions sized from one macro view is breadth of one.",
      "The transfer coefficient is where long-only and position constraints quietly consume a large share of skill.",
      "Optimal active risk is IR ÷ 2λ and value added is IR² ÷ 4λ — value added scales with the SQUARE of the information ratio.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-pm-etf",
    examSlug: "cfa-l2",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Exchange-Traded Funds: Mechanics, Costs, and Risks",
    readingMinutes: 19,
    summary:
      "Creation and redemption, why the arbitrage usually holds and when it does not, the full cost stack, and the specific risks that do not appear in an expense ratio.",
    intro:
      "An exchange-traded fund is a fund that trades like a share, and almost everything distinctive about it follows from the mechanism that reconciles those two facts. Understanding creation and redemption explains the tax efficiency, the tight spreads, the persistence of price near net asset value, and — importantly — the conditions under which all of those break down.",
    sections: [
      {
        heading: "The creation and redemption mechanism",
        blocks: [
          {
            kind: "p",
            text: "An ETF has two markets. In the secondary market, ordinary investors buy and sell existing shares from each other on an exchange, exactly as they would trade a stock. No new shares are created and the fund is not involved. In the primary market, a small set of large institutions called authorised participants transact directly with the fund, and this is where share count actually changes.",
          },
          {
            kind: "p",
            text: "An authorised participant creates ETF shares by delivering a specified basket of the underlying securities to the fund and receiving a large block of new ETF shares — a creation unit — in return. Redemption runs the process backward: the AP delivers a creation unit and receives the basket of securities. Both legs are in kind. No cash changes hands and the fund does not trade in the market.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "The in-kind creation and redemption cycle. Arbitrage by the authorised participant is what keeps the ETF price near net asset value.",
              alt: "A diagram showing an authorised participant exchanging a securities basket for ETF shares with the fund, and trading ETF shares on the exchange.",
              svg: `<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="20" y="80" width="110" height="52" rx="6" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1.5"/>
  <text x="34" y="103" font-size="11" fill="var(--text-muted)">Authorised</text>
  <text x="34" y="119" font-size="11" fill="var(--text-muted)">participant</text>
  <rect x="185" y="20" width="110" height="52" rx="6" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="1.5"/>
  <text x="216" y="51" font-size="11" fill="var(--primary)">ETF fund</text>
  <rect x="185" y="140" width="110" height="52" rx="6" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1.5"/>
  <text x="212" y="171" font-size="11" fill="var(--text-muted)">Exchange</text>
  <line x1="130" y1="95" x2="185" y2="55" stroke="var(--ats-green)" stroke-width="2"/>
  <text x="118" y="72" font-size="9" fill="var(--ats-green)">basket in</text>
  <line x1="185" y1="65" x2="130" y2="108" stroke="var(--primary)" stroke-width="2"/>
  <text x="120" y="140" font-size="9" fill="var(--primary)">ETF shares out</text>
  <line x1="130" y1="120" x2="185" y2="160" stroke="var(--border)" stroke-width="2"/>
  <text x="300" y="60" font-size="10" fill="var(--text-muted)">in kind — no cash,</text>
  <text x="300" y="74" font-size="10" fill="var(--text-muted)">no fund trading</text>
  <text x="300" y="168" font-size="10" fill="var(--text-muted)">investors trade</text>
  <text x="300" y="182" font-size="10" fill="var(--text-muted)">shares here</text>
</svg>`,
            },
          },
          {
            kind: "p",
            text: "The arbitrage follows immediately. If the ETF trades above the value of its basket, an AP buys the basket, creates shares, and sells them at the premium. If it trades below, the AP buys ETF shares, redeems them for the basket, and sells the securities. Either trade profits and either trade pushes the price back toward net asset value. The mechanism is self-correcting so long as the AP can execute both legs.",
          },
          {
            kind: "callout",
            label: "Why ETFs are tax-efficient in the US",
            body: "Redemptions are settled in kind, so the fund hands over securities rather than selling them. No sale means no realised capital gain to distribute to remaining holders. A mutual fund facing redemptions must sell, realising gains that are distributed to the investors who stayed. The advantage comes from the mechanism, not from the fund being an index fund.",
          },
          {
            kind: "p",
            text: "Managers can also use redemption baskets to hand out their lowest-basis lots, a process sometimes called heartbeat trading when done aggressively. This is legal and widely practised, and it further reduces embedded gains. It is also a reason the tax advantage varies considerably across funds and does not apply in every jurisdiction.",
          },
        ],
      },
      {
        heading: "The full cost stack",
        blocks: [
          {
            kind: "p",
            text: "The expense ratio is the most visible cost and often not the largest. Total cost of ownership depends on the holding period, because some costs are charged per unit of time and others per transaction.",
          },
          {
            kind: "table",
            table: {
              caption: "ETF costs and when they bite",
              headers: ["Cost", "Charged", "Matters most to"],
              rows: [
                ["Expense ratio", "Continuously, pro rata", "Long-term holders"],
                ["Bid-ask spread", "Per round trip", "Frequent traders"],
                ["Premium or discount at trade", "Per transaction", "Frequent traders"],
                ["Brokerage commission", "Per transaction", "Small, frequent trades"],
                ["Tracking error", "Continuously", "Long-term holders"],
                ["Capital gains tax", "On sale or distribution", "Taxable investors"],
              ],
            },
          },
          {
            kind: "p",
            text: "The implication is that the cheapest fund for a one-week position and the cheapest for a ten-year position are frequently different funds. A large, liquid ETF with a slightly higher expense ratio and a one-basis-point spread can beat a cheaper fund with a fifteen-basis-point spread over short horizons, and lose to it over long ones.",
          },
          {
            kind: "p",
            text: "The bid-ask spread on an ETF is itself determined by the creation-redemption arbitrage. It reflects the cost of hedging the underlying basket, the cost of the creation-redemption process, the market maker's risk over the holding period, and the competitive intensity among market makers. That is why a fund tracking large-cap domestic equities trades on a penny spread while one tracking illiquid frontier debt does not.",
          },
        ],
      },
      {
        heading: "Tracking error and its sources",
        blocks: [
          {
            kind: "p",
            text: "Tracking difference is the actual cumulative return gap between fund and index; tracking error is the annualised standard deviation of the differences. Both are reported, and confusing them is a common error.",
          },
          {
            kind: "bullets",
            items: [
              "Fees drag the fund below the index continuously and predictably.",
              "Sampling — holding a representative subset rather than the full index — introduces deviation in either direction.",
              "Cash drag from dividends held between receipt and reinvestment costs return in rising markets.",
              "Index reconstitution forces trades at a moment when many funds trade the same way, creating price impact.",
              "Currency hedging, securities lending income, and withholding tax treatment all move the fund off the index.",
              "Securities lending is the one source that can make a fund OUTPERFORM its index before fees.",
            ],
          },
        ],
      },
      {
        heading: "The risks that are specific to the structure",
        blocks: [
          {
            kind: "p",
            text: "Counterparty risk arises where the ETF achieves its exposure synthetically. A swap-based ETF owns a collateral basket and a swap contract with a bank, so the investor is exposed to that bank's solvency rather than only to the index. Physically replicating funds avoid this, though securities lending reintroduces a smaller version of it.",
          },
          {
            kind: "p",
            text: "Holdings risk means the fund may not contain what its name implies. Commodity ETFs holding futures rather than physical goods experience roll yield that can diverge dramatically from spot returns over time. Leveraged and inverse ETFs reset daily, so their multi-day returns are path-dependent and reliably diverge from the stated multiple of the index return over any period longer than a day. A 3x fund held for a year does not deliver three times the year's index return, and in a volatile sideways market it can lose money while the index is flat.",
          },
          {
            kind: "callout",
            label: "The exam trap on leveraged ETFs",
            body: "The stated multiple applies to ONE day. Volatility decay from daily rebalancing makes longer-horizon returns path-dependent and typically worse than the naive multiple. These are trading instruments, and recommending one as a long-term holding raises a suitability question under Standard III(C).",
          },
          {
            kind: "p",
            text: "Closure risk is real and under-discussed: funds that fail to gather assets are liquidated, forcing a taxable event on holders at a time not of their choosing. Investors in small, thematic ETFs face this far more often than investors in broad-market funds.",
          },
          {
            kind: "p",
            text: "Finally, the arbitrage that keeps price near value can widen when the underlying market is closed or halted. An ETF holding Japanese equities trades in New York while Tokyo is shut, so its price reflects updated information the stale net asset value does not — a premium or discount that is informative rather than erroneous. In a genuine dislocation, where the underlying bonds cannot be priced at all, the ETF price may be the better estimate of value and the NAV the stale number.",
          },
        ],
      },
      {
        heading: "How ETFs are used in portfolios",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Core exposure: cheap, broad, index-tracking building blocks for a strategic allocation.",
              "Tactical tilts: fast, liquid expression of a sector, country or factor view without picking securities.",
              "Cash equitisation: putting incoming cash to work in market exposure immediately rather than sitting in cash.",
              "Transition management: holding index exposure while a manager change is executed.",
              "Liquidity sleeve: an easily traded holding that can be sold to meet redemptions without touching illiquid positions.",
              "Short and hedge: many ETFs can be borrowed and sold short, giving a simple hedge on a broad exposure.",
            ],
          },
          {
            kind: "p",
            text: "The common thread is that ETFs convert an exposure decision into a single trade. That is their genuine contribution, and also the source of the temptation to trade more than the investment thesis warrants — the cost of which shows up in the transaction column of the stack above rather than in the expense ratio investors actually compare.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Authorised participant", def: "An institution permitted to create and redeem ETF shares directly with the fund in kind." },
      { term: "Creation unit", def: "The large block of ETF shares exchanged for a basket of securities in the primary market." },
      { term: "In-kind redemption", def: "Settling a redemption by delivering securities rather than cash, avoiding a realised capital gain." },
      { term: "Tracking difference", def: "The cumulative return gap between fund and index over a period." },
      { term: "Tracking error", def: "The annualised standard deviation of the fund's return differences from the index." },
      { term: "Roll yield", def: "The return effect of rolling futures contracts forward, which separates a futures-based commodity ETF from spot." },
      { term: "Volatility decay", def: "The path dependence that causes a daily-reset leveraged ETF to diverge from its stated multiple over multi-day periods." },
      { term: "Closure risk", def: "The risk that a fund is liquidated for lack of assets, forcing a taxable disposal on holders." },
    ],
    takeaways: [
      "Creation and redemption in kind is the mechanism behind tight spreads, price-to-NAV discipline and US tax efficiency alike.",
      "Arbitrage by authorised participants — not the fund manager — is what holds price near net asset value.",
      "Total cost of ownership depends on holding period: spreads dominate for traders, expense ratios for long-term holders.",
      "Securities lending is the one source of tracking difference that can push a fund ahead of its index.",
      "Leveraged and inverse ETFs deliver their multiple over ONE day; longer holdings are path-dependent and usually worse.",
      "A premium or discount is not automatically an error — when the underlying market is closed, the ETF price may be the fresher number.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-pm-backtesting",
    examSlug: "cfa-l2",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Backtesting and Simulation",
    readingMinutes: 18,
    summary:
      "How a backtest is properly constructed, the biases that make most published backtests worthless, and the simulation methods that address them.",
    intro:
      "A backtest asks what a strategy would have earned had it been run in the past. It is the standard evidence offered for an investment approach and it is very easy to do dishonestly — often without intending to. This reading covers the mechanics, then spends most of its length on the ways backtests mislead, because recognising a broken backtest is the skill that actually matters.",
    sections: [
      {
        heading: "How a backtest is constructed",
        blocks: [
          {
            kind: "p",
            text: "The standard rolling-window procedure has three repeating steps. Specify the strategy — the investment universe, the signal, the weighting scheme, the rebalancing frequency and the constraints. Then, at each rebalancing date, form the portfolio using only information available at that date. Then compute the return over the following period and roll forward.",
          },
          {
            kind: "p",
            text: "The phrase carrying all the weight is \"only information available at that date.\" Almost every serious backtesting failure is a violation of it, and the violations are usually subtle rather than deliberate.",
          },
          {
            kind: "callout",
            label: "The point-in-time requirement",
            body: "Financial statement data must be used as it was reported at the time, not as later restated, and only after the date it was actually published. A December year-end is not public in December. Using restated figures or assuming instant availability inflates results in a way that will never be reproducible live.",
          },
        ],
      },
      {
        heading: "Look-ahead bias",
        blocks: [
          {
            kind: "p",
            text: "Look-ahead bias is the use of information that was not available at the decision point. It appears in three common forms.",
          },
          {
            kind: "bullets",
            items: [
              "Reporting lag: using annual results on the fiscal year-end date rather than the filing date weeks or months later.",
              "Restatement: using the final corrected figure rather than the number originally reported and acted on.",
              "Index membership: assuming you knew which stocks would be in an index before the change was announced.",
            ],
          },
          {
            kind: "p",
            text: "Each of these is invisible in the output. The backtest runs, the equity curve looks strong, and nothing flags an error. The only defence is a data pipeline built from point-in-time sources and an explicit reporting-lag assumption stated in the methodology.",
          },
        ],
      },
      {
        heading: "Survivorship bias",
        blocks: [
          {
            kind: "p",
            text: "Survivorship bias arises when the universe contains only entities that exist today. A backtest run on the current index constituents implicitly excludes every company that went bankrupt, was delisted, or was acquired at a distressed price during the sample. The strategy is being tested on a universe defined by having survived.",
          },
          {
            kind: "p",
            text: "The effect is strongest exactly where it does the most damage: deep value and distressed strategies buy the kind of company that sometimes fails, so removing failures from the sample flatters precisely the strategies whose risk is failure. The fix is a database including delisted securities with their delisting returns.",
          },
        ],
      },
      {
        heading: "Data snooping and the multiple-testing problem",
        blocks: [
          {
            kind: "p",
            text: "Data snooping is the reuse of the same data set to test many hypotheses until one works. Test twenty independent strategies at a 5% significance level on random data and one will appear significant by construction. Test two thousand parameter combinations and you will find several that look extraordinary.",
          },
          {
            kind: "p",
            text: "What makes this insidious is that the individual researcher may test only a handful of ideas while the profession collectively tests thousands on the same historical series, then publishes the winners. The published record of factor discoveries is a selected sample from an enormous unreported search.",
          },
          {
            kind: "bullets",
            items: [
              "Report how many specifications were tried, not only the one shown.",
              "Raise the significance hurdle when many tests have been run rather than using the conventional threshold.",
              "Hold out data never touched during development and test once on it.",
              "Prefer a strategy with an economic rationale that predicted the result to one discovered by search.",
              "Check that the result survives in other markets, other periods and adjacent parameter values.",
            ],
          },
          {
            kind: "callout",
            label: "The parameter-sensitivity test",
            body: "A genuine effect degrades gracefully as parameters move. If a 63-day lookback produces a Sharpe ratio of 1.4 and a 60-day lookback produces 0.2, the 63-day result is almost certainly noise that has been selected for. Robustness across neighbouring parameters is stronger evidence than the peak value.",
          },
        ],
      },
      {
        heading: "Costs, capacity and implementation",
        blocks: [
          {
            kind: "p",
            text: "A backtest that ignores transaction costs measures a strategy nobody can run. Commissions, bid-ask spreads, market impact, borrowing costs for short positions and taxes all reduce realised returns, and they scale with turnover. A high-turnover signal can be strongly profitable gross and reliably unprofitable net.",
          },
          {
            kind: "p",
            text: "Market impact deserves particular attention because it depends on size. A strategy tested at $10 million of capital may be untradeable at $1 billion: the same trades that filled instantly in the backtest would move the price against the manager. Capacity constraints are a property of the strategy, not a detail, and are routinely omitted from published results.",
          },
          {
            kind: "p",
            text: "Short positions carry their own implementation problem. The backtest assumes borrow is available at a modest fee; in practice the stocks a short signal identifies are frequently the hardest and most expensive to borrow, and borrow can be recalled at the worst moment.",
          },
        ],
      },
      {
        heading: "Simulation as a complement to backtesting",
        blocks: [
          {
            kind: "p",
            text: "A backtest gives one path through history — the one that happened. That is a sample of size one, which is a thin basis for a claim about a distribution of outcomes. Simulation methods generate many paths and produce a distribution instead.",
          },
          {
            kind: "table",
            table: {
              caption: "Simulation approaches",
              headers: ["Method", "How it works", "Key assumption"],
              rows: [
                [
                  "Monte Carlo",
                  "Draw returns from specified distributions",
                  "The assumed distribution is right",
                ],
                [
                  "Historical simulation",
                  "Resample actual historical returns",
                  "The sample period is representative",
                ],
                [
                  "Bootstrap",
                  "Resample observed returns with replacement",
                  "Observations are independent",
                ],
                [
                  "Block bootstrap",
                  "Resample contiguous blocks of returns",
                  "Blocks preserve serial dependence",
                ],
              ],
            },
          },
          {
            kind: "p",
            text: "The plain bootstrap's independence assumption is a real limitation for financial data, because volatility clusters and returns exhibit serial dependence. Block bootstrapping addresses this by resampling contiguous stretches rather than individual observations, preserving the local structure at the cost of fewer effectively independent samples.",
          },
          {
            kind: "p",
            text: "Sensitivity analysis rounds out the toolkit: vary the key inputs across plausible ranges and observe how the conclusion moves. If a strategy's attractiveness depends on a single assumption being exactly right, that dependence is the most important thing to report.",
          },
        ],
      },
      {
        heading: "Reading someone else's backtest",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Are returns net of realistic transaction costs, and is turnover disclosed?",
              "Does the universe include delisted and bankrupt companies?",
              "Is the data point-in-time, with a stated reporting lag?",
              "How many specifications were tested before this one was shown?",
              "Was there a genuine out-of-sample period, and was it used once?",
              "Does the strategy have an economic rationale that preceded the test?",
              "What capacity is claimed, and at what assumed market impact?",
              "How does performance behave across neighbouring parameter values?",
            ],
          },
          {
            kind: "p",
            text: "Under Standard III(D) a simulated or back-tested record presented to clients must be clearly labelled as such. Presenting hypothetical results in a way that suggests they were achieved is a performance presentation violation and a misrepresentation, regardless of how carefully the backtest itself was built.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Rolling-window backtest", def: "Repeatedly forming a portfolio using only information available at each rebalancing date and measuring the following period's return." },
      { term: "Look-ahead bias", def: "Using information in a backtest that was not available at the decision point." },
      { term: "Point-in-time data", def: "Data as it was actually reported and available on a given date, before any restatement." },
      { term: "Survivorship bias", def: "Restricting the test universe to entities that still exist, excluding failures." },
      { term: "Data snooping", def: "Testing many hypotheses on one data set until one appears significant." },
      { term: "Capacity", def: "The amount of capital a strategy can deploy before market impact erodes its returns." },
      { term: "Block bootstrap", def: "Resampling contiguous blocks of returns to preserve serial dependence the plain bootstrap destroys." },
      { term: "Out-of-sample test", def: "Evaluation on data held back and untouched during strategy development." },
    ],
    takeaways: [
      "A backtest is only as honest as its point-in-time discipline — use data as reported, when reported.",
      "Survivorship bias flatters distressed and deep-value strategies most, because failure is their actual risk.",
      "Data snooping is a collective problem: the published factor record is a selected sample from an unreported search.",
      "A strategy that survives neighbouring parameter values is far better evidence than one that peaks at a single setting.",
      "Transaction costs and capacity are part of the strategy, not a footnote — high turnover can be gross-profitable and net-negative.",
      "Simulation converts a sample of one historical path into a distribution; block bootstrapping preserves the serial dependence the plain bootstrap destroys.",
      "Back-tested results shown to clients must be labelled as hypothetical under Standard III(D).",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-pm-econ-markets",
    examSlug: "cfa-l2",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Economics and Investment Markets",
    readingMinutes: 18,
    summary:
      "How the business cycle prices into discount rates, term premia, credit spreads and equity multiples — and why every asset class is a claim on the same underlying cash flows.",
    intro:
      "Every asset is a claim on future cash flows discounted at a rate that reflects their risk. That single sentence is the organising idea here: the business cycle moves both the expected cash flows and the discount rate, and different asset classes are affected in different proportions. Once you can decompose a required return into its parts, the relationships between bonds, credit, equities and real estate over the cycle stop being a list to memorise and become a consequence.",
    sections: [
      {
        heading: "Decomposing a required return",
        blocks: [
          {
            kind: "p",
            text: "The nominal default-free rate for a given maturity has three components: a real risk-free rate compensating for deferred consumption, expected inflation over the horizon, and a risk premium for the uncertainty of that inflation. Add a term premium for interest-rate risk over longer horizons, and a credit premium where default is possible, and an equity premium where the claim is residual rather than contractual.",
          },
          {
            kind: "formula",
            formula: {
              label: "Building up a required return",
              expr: "r = real risk-free rate + expected inflation + inflation risk premium + term premium + credit premium + equity premium",
              note: "Each asset class is a different subset of these terms. A short T-bill has the first two; a long corporate bond adds three more; an equity adds the last.",
            },
          },
          {
            kind: "p",
            text: "This is why asset classes move together more than their labels suggest. A rise in the real rate raises the discount rate for every claim simultaneously, which is the mechanism behind the observation that in a rate shock, diversification across asset classes helps less than expected.",
          },
        ],
      },
      {
        heading: "The intertemporal rate of substitution",
        blocks: [
          {
            kind: "p",
            text: "The theoretical foundation is that investors value a payoff more when it arrives in a state of the world where they are poor. An asset that pays well in bad times is insurance and commands a lower expected return; an asset that pays well only when times are already good adds to the variability of consumption and must offer more.",
          },
          {
            kind: "p",
            text: "That framework explains the sign of the risk premium across asset classes without any additional assumptions. Default-free government bonds tend to rally in recessions, when investors most need money — so they earn a low or even negative risk premium. Equities pay worst in recessions, so they must offer a substantial one. It also explains why the real risk-free rate is high when growth is expected to be strong: strong expected growth makes future consumption abundant, so investors require more to defer consumption today.",
          },
        ],
      },
      {
        heading: "The yield curve and the cycle",
        blocks: [
          {
            kind: "p",
            text: "Short rates are anchored by policy. Long rates embed expected future short rates plus a term premium. The curve's shape therefore reflects both the expected path of policy and the compensation demanded for rate uncertainty.",
          },
          {
            kind: "table",
            table: {
              caption: "Typical curve behaviour through the cycle",
              headers: ["Cycle phase", "Policy stance", "Curve shape", "Term premium"],
              rows: [
                ["Early recovery", "Still accommodative", "Steep", "Elevated"],
                ["Mid expansion", "Neutralising", "Flattening", "Compressing"],
                ["Late expansion", "Restrictive", "Flat or inverted", "Low"],
                ["Recession", "Easing sharply", "Re-steepening", "Rising"],
              ],
            },
          },
          {
            kind: "p",
            text: "An inverted curve has preceded most recessions, and the reading's explanation is mechanical rather than mystical: the market expects policy rates to be cut, and policy is cut when growth is expected to deteriorate. The inversion is a forecast embedded in prices, not a cause.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "Curve shapes across the cycle: steep in early recovery, flat to inverted late, re-steepening as easing begins.",
              alt: "Three yield curves plotted together showing steep, flat and inverted shapes.",
              svg: `<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="45" y1="155" x2="430" y2="155" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="45" y1="18" x2="45" y2="155" stroke="var(--border)" stroke-width="1.5"/>
  <path d="M45 130 C 130 78, 240 52, 420 42" fill="none" stroke="var(--ats-green)" stroke-width="2.5"/>
  <path d="M45 88 C 150 82, 260 78, 420 76" fill="none" stroke="var(--text-muted)" stroke-width="2.5"/>
  <path d="M45 52 C 150 62, 260 84, 420 100" fill="none" stroke="var(--ats-red)" stroke-width="2.5"/>
  <text x="300" y="36" font-size="10" fill="var(--ats-green)">steep — early recovery</text>
  <text x="300" y="70" font-size="10" fill="var(--text-muted)">flat — mid to late</text>
  <text x="300" y="116" font-size="10" fill="var(--ats-red)">inverted — late cycle</text>
  <text x="200" y="176" font-size="10" fill="var(--text-muted)">maturity</text>
  <text x="6" y="90" font-size="10" fill="var(--text-muted)">yield</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Credit spreads",
        blocks: [
          {
            kind: "p",
            text: "A credit spread compensates for expected loss — probability of default times loss given default — plus a premium for the uncertainty of that loss and for illiquidity. Both components are cyclical, and they move together, which is why spreads widen far more in downturns than a pure expected-loss calculation would justify.",
          },
          {
            kind: "p",
            text: "Spreads are widest at the trough of the cycle and tightest late in an expansion, which produces an uncomfortable conclusion: the compensation for credit risk is lowest precisely when leverage in the system is highest and underwriting standards are loosest. Lower-rated credit is more cyclical than higher-rated, so the spread differential between investment grade and high yield itself widens and narrows with the cycle.",
          },
          {
            kind: "callout",
            label: "Why credit behaves like equity in a downturn",
            body: "Both are claims whose value depends on the firm surviving. In a severe recession the correlation between high yield credit and equities rises toward one, which is exactly when a portfolio was relying on them to behave differently.",
          },
        ],
      },
      {
        heading: "Equity: cash flows and the multiple",
        blocks: [
          {
            kind: "p",
            text: "Equity value responds to the cycle through two channels that usually move together. Expected cash flows rise in expansions and fall in recessions. The discount rate does the opposite — the equity risk premium is high in bad times, when risk aversion is high and uncertainty is greatest, and compresses in good times.",
          },
          {
            kind: "p",
            text: "Because both channels move the same direction for prices, equity is more cyclical than the underlying earnings alone would imply. A 20% fall in expected earnings combined with a rise in the required return produces a fall in price considerably larger than 20%. The reverse is true in recoveries, which is why equity markets typically bottom before earnings do.",
          },
          {
            kind: "p",
            text: "Sector sensitivity follows from the same decomposition. Companies with high operating leverage and cyclical demand have the most cyclical cash flows. Companies whose value is concentrated in distant cash flows have the most discount-rate sensitivity — which is why high-growth sectors fall hardest when real rates rise, even when their near-term earnings are unaffected.",
          },
        ],
      },
      {
        heading: "Real estate and the same framework",
        blocks: [
          {
            kind: "p",
            text: "Commercial real estate combines features of bonds and equities, which is unsurprising once you see it as a claim on cash flows: the lease provides contractual, bond-like income for its term, and the residual value at expiry is equity-like and depends on conditions then.",
          },
          {
            kind: "p",
            text: "Cap rates behave like discount rates and are driven by the real rate plus a property risk premium less expected rental growth. Longer leases to stronger tenants make a property more bond-like and more sensitive to rates; shorter leases make it more equity-like and more sensitive to the cycle. Illiquidity and the lag in appraisal-based valuation smooth reported returns, understating true volatility and overstating diversification benefit.",
          },
        ],
      },
      {
        heading: "Putting it together",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Asset class behaviour by cycle phase",
              headers: ["Phase", "Government bonds", "Credit", "Equities"],
              rows: [
                ["Early recovery", "Weak as rates rise", "Spreads tighten sharply", "Strong"],
                ["Mid expansion", "Modest", "Spreads grind tighter", "Strong"],
                ["Late expansion", "Improving as growth slows", "Spreads at their tightest", "Volatile"],
                ["Recession", "Strongest", "Spreads widen sharply", "Weakest"],
              ],
            },
          },
          {
            kind: "p",
            text: "The table is a consequence, not a list to memorise. Government bonds do best when growth disappoints because the expected path of policy rates falls. Credit does worst then because default probability rises and risk premia expand. Equities do worst because both their cash flows and their discount rate move against them at once.",
          },
          {
            kind: "callout",
            label: "The practical caution",
            body: "These relationships are averages across many cycles, and any single cycle can violate them. Acting on cycle positioning requires not only a correct view of where the economy is going, but a view that differs from the one already embedded in prices. The second requirement is what makes it hard.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Intertemporal rate of substitution", def: "The value of a unit of consumption in the future relative to today; assets paying well in bad states command lower expected returns." },
      { term: "Term premium", def: "Compensation for bearing interest rate risk over a longer horizon." },
      { term: "Credit premium", def: "Compensation for expected loss plus the uncertainty of that loss and illiquidity." },
      { term: "Inflation risk premium", def: "Compensation for uncertainty about the inflation rate over the holding period." },
      { term: "Cap rate", def: "Net operating income divided by property value; a real estate discount rate net of expected growth." },
      { term: "Operating leverage", def: "The degree to which fixed operating costs magnify the effect of demand changes on operating income." },
      { term: "Discount-rate sensitivity", def: "The degree to which an asset's value depends on the required return, greatest where cash flows are most distant." },
    ],
    takeaways: [
      "Every asset is a claim on cash flows discounted at a rate; asset classes differ in which premium terms they carry.",
      "Assets that pay well in bad states earn low expected returns — that is the whole logic of the risk premium's sign.",
      "The real risk-free rate rises with expected growth, because abundant future consumption raises the price of deferring today's.",
      "An inverted curve forecasts policy easing, which forecasts weak growth — a price-embedded prediction, not a cause.",
      "Credit spreads are tightest exactly when system leverage is highest, which is the uncomfortable part.",
      "Equity is more cyclical than its earnings because cash flows and the required return move against it simultaneously.",
      "Appraisal-based real estate valuation smooths reported returns, understating volatility and overstating diversification.",
    ],
  },
];

// Questions for these chapters live in cfa-l2-q.ts alongside the rest of
// the Level II bank, so the coverage and audit tooling sees one file per
// track. This export exists to keep the module shape consistent.
export const pmQuestionsL2: Question[] = [];
