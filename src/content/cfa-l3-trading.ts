// ============================================================
// Certus — CFA Level III Trading, Performance Evaluation and
// Manager Selection supplement
//
// WHY THIS FILE EXISTS: the existing L3 chapters cover implementation
// shortfall, VWAP and Brinson attribution. A concept audit found gaps:
// type I and type II errors in manager selection, returns-based and
// holdings-based style analysis, capture ratios, batting average and
// algorithmic trading strategies ALL returned ZERO matches. Manager
// selection and due diligence had four mentions each.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const tradingChaptersL3: Chapter[] = [
  {
    id: "cfa-l3-trading-manager-selection",
    examSlug: "cfa-l3",
    topicId: "pm-perf",
    topicName: "Trading, Performance Evaluation, Manager Selection",
    title: "Execution Strategy, Performance Appraisal, and Manager Selection",
    readingMinutes: 22,
    summary:
      "Matching execution strategy to trade motivation, the appraisal measures beyond the Sharpe ratio, style analysis, and the two errors that dominate manager selection.",
    intro:
      "Three linked activities: getting the trade done efficiently, judging whether the results reflected skill, and deciding whom to hire. Each is examined at Level III as a practical decision with a defensible process rather than as a calculation.",
    sections: [
      {
        heading: "Execution strategy and trade urgency",
        blocks: [
          {
            kind: "p",
            text: "The right execution strategy follows from why the trade is being made. An information-motivated trade — where the manager believes the price will move — is urgent, because delay costs the alpha the idea was meant to capture. A liquidity-motivated trade, such as rebalancing or investing an inflow, is patient, because there is no decaying signal.",
          },
          {
            kind: "table",
            table: {
              caption: "Matching strategy to motivation",
              headers: ["Motivation", "Urgency", "Typical approach"],
              rows: [
                ["Information-based", "High", "Aggressive; take liquidity; accept impact"],
                ["Value-motivated", "Low", "Patient; provide liquidity; use limit orders"],
                ["Liquidity-motivated", "Low to moderate", "Scheduled algorithms; VWAP or TWAP"],
                ["Index rebalance", "Timed", "Trade near the close to match the benchmark"],
                ["Cash flow driven", "Moderate", "Participation algorithms sized to volume"],
              ],
            },
          },
          {
            kind: "p",
            text: "The central trade-off is between market impact and timing risk. Trading quickly concedes impact — the price moves against the order as it consumes liquidity. Trading slowly avoids impact but leaves the position exposed to price movement before completion. Higher urgency means accepting more impact to reduce timing risk; lower urgency reverses that.",
          },
          {
            kind: "bullets",
            items: [
              "Scheduled algorithms — VWAP and TWAP — spread an order across a period to match a benchmark price.",
              "Participation algorithms trade a fixed percentage of market volume, adapting to actual liquidity.",
              "Arrival price algorithms target the price when the order arrived, balancing impact against timing risk.",
              "Liquidity-seeking algorithms hunt for size across venues including dark pools.",
              "Dark pools reduce information leakage on large orders at the cost of uncertain execution.",
            ],
          },
          {
            kind: "p",
            text: "Implementation shortfall measures total execution cost against the decision price — the price when the manager decided to trade. It decomposes into delay cost, the movement between decision and order placement; trading cost, the impact of the execution itself; and opportunity cost, the alpha forgone on any unexecuted portion. Measuring against the decision price rather than an intraday benchmark is what makes it honest, because it captures costs a VWAP comparison hides.",
          },
          {
            kind: "callout",
            label: "Why VWAP can flatter a bad execution",
            body: "A trader who spreads a large sell order across a falling day can beat VWAP while losing substantially against the decision price. VWAP measures execution against the day's own prices, which the order itself helped set. Implementation shortfall measures against the price that existed before the trading began.",
          },
        ],
      },
      {
        heading: "Performance appraisal beyond the Sharpe ratio",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Appraisal measures and what each divides by",
              headers: ["Measure", "Numerator", "Denominator"],
              rows: [
                ["Sharpe ratio", "Return less risk-free", "Total volatility"],
                ["Treynor ratio", "Return less risk-free", "Beta"],
                ["Information ratio", "Return less benchmark", "Tracking error"],
                ["Appraisal ratio", "Alpha", "Residual (unsystematic) risk"],
                ["Sortino ratio", "Return less target", "Downside deviation"],
                ["M-squared", "Risk-adjusted return", "Expressed in return units"],
              ],
            },
          },
          {
            kind: "p",
            text: "The choice among them depends on the portfolio's role. Sharpe suits a portfolio holding the investor's entire wealth, where total risk is what matters. Treynor suits one component of a diversified whole, where only systematic risk should be priced. The information ratio suits a manager judged against a benchmark, and the appraisal ratio isolates the security-selection contribution from the factor exposures.",
          },
          {
            kind: "p",
            text: "M-squared expresses risk-adjusted performance in return units rather than as a ratio, by levering or de-levering the portfolio to the benchmark's volatility and reporting the resulting return. It communicates more naturally to a client than a Sharpe ratio, since the answer is a percentage.",
          },
          {
            kind: "p",
            text: "Capture ratios describe asymmetry. Upside capture is the manager's return in rising markets as a percentage of the benchmark's; downside capture is the same in falling markets. A manager with 95% upside and 80% downside capture has produced a favourable asymmetry even if the raw return trails, and that pattern is far more informative than a single average.",
          },
          {
            kind: "p",
            text: "Batting average — the proportion of periods in which the manager beat the benchmark — measures consistency rather than magnitude. A manager can have a high batting average and poor returns by winning often and small while losing rarely and large. It belongs alongside the magnitude measures rather than instead of them.",
          },
        ],
      },
      {
        heading: "Attribution",
        blocks: [
          {
            kind: "p",
            text: "Brinson attribution decomposes active return into allocation, selection and interaction. Allocation measures the effect of over- or under-weighting sectors; selection measures the effect of picking better securities within sectors; interaction captures the combination of the two.",
          },
          {
            kind: "formula",
            formula: {
              label: "The Brinson components",
              expr: "allocation = (w_p − w_b) × (R_b,sector − R_b,total);  selection = w_b × (R_p,sector − R_b,sector)",
              note: "Interaction is the residual, (w_p − w_b) × (R_p,sector − R_b,sector), and is sometimes folded into selection.",
            },
          },
          {
            kind: "p",
            text: "Factor-based attribution instead decomposes return by exposure to systematic factors, which suits a quantitative manager whose process is explicitly factor-driven. Returns-based attribution uses only the return series and requires no holdings, making it usable for external managers who will not disclose positions — at the cost of precision.",
          },
          {
            kind: "p",
            text: "The essential discipline in any attribution is that the benchmark must be appropriate. A manager attributed against a benchmark that does not reflect the mandate will show allocation effects that are artefacts of benchmark choice rather than decisions the manager made.",
          },
        ],
      },
      {
        heading: "Style analysis",
        blocks: [
          {
            kind: "p",
            text: "Returns-based style analysis regresses a manager's returns against a set of style index returns, inferring the exposures that best explain the pattern. It needs only the return series, is cheap and fast, and can be applied to any manager. Its weaknesses are that it describes average exposure over the estimation window and detects changes only with a lag.",
          },
          {
            kind: "p",
            text: "Holdings-based style analysis examines the actual positions and characterises them directly. It is current rather than lagged and far more precise, but it requires position disclosure, is more expensive to run, and can be gamed by a manager who window-dresses at reporting dates.",
          },
          {
            kind: "p",
            text: "The two together are more informative than either alone. Where returns-based analysis suggests a value manager and holdings-based analysis shows growth names, the divergence is itself the finding — and style drift is a mandate breach regardless of whether performance has suffered.",
          },
        ],
      },
      {
        heading: "Manager selection and the two errors",
        blocks: [
          {
            kind: "p",
            text: "Manager selection is a hypothesis test, and framing it that way clarifies what can go wrong. The null hypothesis is that the manager has no skill.",
          },
          {
            kind: "table",
            table: {
              caption: "The two errors",
              headers: ["Error", "Meaning", "Visibility"],
              rows: [
                ["Type I", "Hiring a manager with no skill", "Visible — poor performance follows"],
                ["Type II", "Rejecting a manager who has skill", "Invisible — the outcome is never observed"],
              ],
            },
          },
          {
            kind: "p",
            text: "The asymmetry matters enormously. A type I error produces a visible failure that invites blame, while a type II error is never observed at all. That asymmetry pushes selection committees toward excessive caution and toward hiring managers who are defensible rather than skilled — the institutional analogue of regret aversion.",
          },
          {
            kind: "p",
            text: "Manager due diligence covers both investment and operational dimensions, and the operational side is where more failures originate. Investment due diligence examines philosophy, process, people, portfolio and performance. Operational due diligence examines valuation policy, independent administration and audit, compliance, counterparties, business continuity and the firm's financial stability.",
          },
          {
            kind: "callout",
            label: "Performance is the weakest input",
            body: "Past performance carries very little information about future performance, and the sample sizes involved cannot separate skill from luck for most managers. A process the selector understands and can monitor is a better predictor than a track record, which is why philosophy and process precede performance in the framework.",
          },
          {
            kind: "p",
            text: "Selecting on recent performance is the most common failure. It buys managers after strong runs, which is systematically buying high, and the investor-return gap in fund data measures the cost of that pattern in aggregate. A selection process that cannot articulate why a manager should outperform in future is selecting on the past.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Implementation shortfall", def: "Total execution cost measured against the decision price, decomposed into delay, trading and opportunity cost." },
      { term: "Market impact", def: "The adverse price movement caused by an order consuming liquidity." },
      { term: "Timing risk", def: "The risk that prices move before a patient order completes." },
      { term: "Arrival price algorithm", def: "An execution strategy targeting the price at order arrival." },
      { term: "Appraisal ratio", def: "Alpha divided by residual risk; isolates security selection from factor exposure." },
      { term: "M-squared", def: "Risk-adjusted performance expressed in return units at benchmark volatility." },
      { term: "Capture ratio", def: "Manager return as a percentage of benchmark return in rising or falling markets." },
      { term: "Batting average", def: "The proportion of periods in which the manager beat the benchmark." },
      { term: "Returns-based style analysis", def: "Inferring style exposures by regressing returns on style indices." },
      { term: "Holdings-based style analysis", def: "Characterising style from the actual positions held." },
      { term: "Type I error", def: "Hiring a manager without skill — visible and blamed." },
      { term: "Type II error", def: "Rejecting a manager with skill — invisible and unpunished." },
    ],
    takeaways: [
      "Execution strategy follows from trade motivation: information-driven trades are urgent, liquidity-driven ones are patient.",
      "The core trade-off is market impact against timing risk.",
      "Implementation shortfall measures against the decision price, which is why it catches what VWAP hides.",
      "Sharpe suits total wealth; Treynor suits a component of a diversified whole; the appraisal ratio isolates selection.",
      "Capture ratios reveal asymmetry that an average return conceals.",
      "Returns-based style analysis is cheap and lagged; holdings-based is precise and gameable.",
      "Type I errors are visible and type II errors are not, which biases committees toward defensible rather than skilled managers.",
      "Past performance is the weakest input to manager selection.",
    ],
  },
];

export const tradingQuestionsL3: Question[] = [];
