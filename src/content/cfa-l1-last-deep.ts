// ============================================================
// Certus — CFA Level I: the last four gaps
//
// WHY THIS FILE EXISTS
// Closes CFA Level I. Portfolio Construction (-32), Derivatives (-24),
// Alternative Investments (-21) and Corporate Finance (-19) were the only
// topics still short.
//
// THE DRAWDOWN ASYMMETRY in the risk chapter is the reason to compute
// rather than assert: a 30% drawdown needs a 42.9% gain to recover, not
// 30%. That gap is invisible until you divide, and it is the single most
// useful number in the whole risk reading.
// ============================================================

import { Chapter, Question } from "./types";

export const lastChapters: Chapter[] = [
  // ==========================================================
  // PORTFOLIO CONSTRUCTION — MEASURING RISK
  // ==========================================================
  {
    id: "cfa-l1-pm-risk-measures",
    examSlug: "cfa",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Measuring Risk: Deviation, VaR, Drawdown, and What Each One Misses",
    readingMinutes: 22,
    summary:
      "Why standard deviation is an incomplete risk measure, what value at risk actually claims, why drawdowns are asymmetric, and how a risk framework fits together.",
    intro:
      "Risk is not one quantity. Each measure answers a different question and each is blind to something the others catch, which is why a serious framework uses several and knows what each is missing.",
    sections: [
      {
        heading: "The measures, and their blind spots",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "What each measure sees and misses",
              headers: ["Measure", "Answers", "Blind to"],
              rows: [
                ["Standard deviation", "How much do returns vary?", "Direction — treats upside as risk"],
                ["Downside deviation", "How much do they vary BELOW a target?", "Tail severity"],
                ["Value at risk", "How bad is a bad period?", "How bad the WORST case is"],
                ["Conditional VaR", "How bad is it beyond the VaR?", "Model and estimation error"],
                ["Maximum drawdown", "What was the worst peak-to-trough fall?", "Whether it can recur"],
                ["Beta", "How much market risk?", "Everything non-systematic"],
              ],
            },
          },
          {
            kind: "p",
            text: "Standard deviation's flaw is that it penalises upside variation identically to downside. An investor who is delighted by a 20% gain and distressed by a 20% loss is not experiencing those symmetrically, which is what downside deviation and the Sortino ratio exist to fix.",
          },
          {
            kind: "example",
            example: {
              title: "Value at risk, stated precisely",
              prompt:
                "A $1,000,000 portfolio has an expected annual return of 8% and a standard deviation of 15%. Compute the 95% annual VaR and say exactly what it claims.",
              steps: [
                "The 95% one-tailed z value is 1.645.",
                "VaR = (1.645 × 15% − 8%) × $1,000,000.",
                "= (24.675% − 8%) × $1,000,000 = $166,750.",
              ],
              answer:
                "$166,750. The claim is narrow and precise: there is a 5% probability of losing MORE than $166,750 over a year. What it does not say is how much more — VaR is silent about the tail beyond its own threshold, which is exactly the region that destroys portfolios. That silence is why conditional VaR, which averages the losses beyond the threshold, is the better measure for extremes.",
            },
          },
          {
            kind: "callout",
            label: "The assumption that fails when it matters",
            body: "This VaR calculation assumes normally distributed returns. Financial returns have fatter tails than the normal distribution — extreme moves happen far more often than the model implies. So a VaR figure understates crisis risk precisely when it is most needed. Treat it as a routine-conditions measure, and use stress testing and scenario analysis for the rest.",
          },
        ],
      },
      {
        heading: "Why drawdowns are worse than they look",
        blocks: [
          {
            kind: "example",
            example: {
              title: "The recovery gap",
              prompt:
                "A portfolio peaks at $1,250,000 and falls to $875,000. Compute the drawdown and the gain required to recover.",
              steps: [
                "Drawdown = ($875,000 − $1,250,000) / $1,250,000 = −30.0%.",
                "Recovery = $1,250,000 / $875,000 − 1 = 42.9%.",
              ],
              answer:
                "A 30% drawdown requires a 42.9% gain to get back. The asymmetry is arithmetic, not psychology: the loss is measured against the larger number and the recovery against the smaller one. It worsens sharply — 50% down needs 100% up, and 80% down needs 400%. This single relationship is the strongest argument for limiting drawdown rather than chasing return.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Risk management is choosing which risks to take, not minimising all of them.",
              "A framework needs a stated risk tolerance, measurement, and governance saying who may take what.",
              "Stress testing asks what happens under a specified severe scenario; scenario analysis explores several plausible futures.",
              "Risk budgeting allocates a total risk allowance across strategies rather than allocating capital.",
              "Correlations converging in a crisis means measured diversification overstates realised diversification.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Downside deviation", def: "Variation below a target only; the input to the Sortino ratio." },
      { term: "Value at risk", def: "A loss threshold exceeded with a stated probability — silent beyond it." },
      { term: "Conditional VaR", def: "The average loss GIVEN that the VaR threshold is breached." },
      { term: "Maximum drawdown", def: "Worst peak-to-trough decline." },
      { term: "Recovery asymmetry", def: "A 30% fall needs a 42.9% gain; 50% needs 100%." },
      { term: "Risk budgeting", def: "Allocating a risk allowance rather than capital." },
    ],
    takeaways: [
      "Every risk measure is blind to something — use several and know which.",
      "Standard deviation penalises upside identically to downside.",
      "VaR states a threshold and says nothing about how far beyond it losses go.",
      "VaR assumes normality, and real returns have fatter tails — it understates crisis risk.",
      "A 30% drawdown needs a 42.9% gain; the asymmetry is arithmetic and it accelerates.",
      "Risk management is choosing which risks to take, not minimising them.",
    ],
  },

  // ==========================================================
  // DERIVATIVES — ARBITRAGE AND REPLICATION
  // ==========================================================
  {
    id: "cfa-l1-deriv-arbitrage",
    examSlug: "cfa",
    topicId: "deriv",
    topicName: "Derivatives",
    title: "Arbitrage, Replication, and What Derivatives Are Really For",
    readingMinutes: 22,
    summary:
      "The no-arbitrage principle that prices every derivative, how replication lets one instrument be built from others, and an honest account of the benefits and the criticisms.",
    intro:
      "One idea prices every derivative in the syllabus: two portfolios with identical future payoffs must cost the same today. Everything else — forward pricing, put-call parity, swap valuation — is that principle applied to a particular instrument.",
    sections: [
      {
        heading: "The law of one price",
        blocks: [
          {
            kind: "p",
            text: "If two positions deliver identical cash flows in every future state, they must trade at the same price now. If they do not, buy the cheap one and sell the dear one for a riskless profit — and the act of doing so pushes the prices back together.",
          },
          {
            kind: "bullets",
            items: [
              "Arbitrage requires no capital, carries no risk, and yields a certain profit.",
              "Because it is riskless, it is executed instantly and at scale, which is why real opportunities are tiny and brief.",
              "The pricing models therefore assume arbitrage is ALREADY gone — they describe the equilibrium it enforces.",
              "This is why derivative prices are not forecasts. The forward price is what carry implies, not what anyone expects.",
            ],
          },
          {
            kind: "callout",
            label: "Replication, and why it matters",
            body: "Any derivative can in principle be built from the underlying and cash. A forward is the underlying bought with borrowed money; a call is a leveraged position in the underlying, continuously rebalanced. That is not a curiosity — it is HOW derivatives are priced and how dealers hedge what they sell. If you can replicate it, you can price it, because the replicating portfolio has an observable cost.",
          },
        ],
      },
      {
        heading: "Where the arbitrage argument weakens",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Transaction costs create a band around the theoretical price within which no arbitrage is profitable.",
              "Short-selling constraints can prevent one leg being established at all.",
              "Borrowing and lending rates differ in reality, so the carry calculation has a spread rather than a point.",
              "Collateral and margin requirements consume capital, so the trade is not truly costless.",
              "Counterparty risk means the profit is only certain if the other side pays.",
            ],
          },
          {
            kind: "p",
            text: "The practical consequence is that prices sit within a no-arbitrage BAND rather than on a single point, and the band widens exactly when funding tightens. That is why apparent arbitrages persist in a crisis — the trade is available and nobody has the balance sheet to take it.",
          },
        ],
      },
      {
        heading: "Benefits and criticisms, both stated",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "The honest ledger",
              headers: ["Benefit", "Criticism"],
              rows: [
                ["Risk transfer to those better able to bear it", "Embedded leverage magnifies small moves into large losses"],
                ["Price discovery, often ahead of the cash market", "Speculation can be indistinguishable from hedging"],
                ["Lower transaction costs than trading the underlying", "Over-the-counter contracts carry counterparty risk"],
                ["Exposure where the underlying trades thinly", "Complexity can hide exposure from those governing it"],
                ["Efficient hedging of a specific, identified risk", "Concentration and interconnectedness can propagate stress"],
              ],
            },
          },
          {
            kind: "p",
            text: "Both columns are examinable, and the exam rewards being able to argue either. The defensible summary is that derivatives are tools whose risk lies almost entirely in how they are used and governed — the same instrument hedges a real exposure or creates a speculative one depending only on what else the holder owns.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Law of one price", def: "Identical future payoffs must cost the same today." },
      { term: "Arbitrage", def: "No capital, no risk, certain profit — hence brief and tiny in practice." },
      { term: "Replication", def: "Building a derivative from the underlying and cash; how pricing and hedging work." },
      { term: "No-arbitrage band", def: "The range within which frictions make arbitrage unprofitable." },
    ],
    takeaways: [
      "One principle prices everything: identical payoffs must cost the same today.",
      "Models assume arbitrage is already gone — they describe the equilibrium it enforces.",
      "Derivative prices are implied by carry, not forecasts of the future spot price.",
      "If you can replicate it you can price it; that is also how dealers hedge.",
      "Frictions turn the price into a band, and the band widens when funding tightens.",
      "The risk in derivatives lies in use and governance, not in the instruments.",
    ],
  },

  // ==========================================================
  // ALTERNATIVES — COMMODITIES AND DIGITAL ASSETS
  // ==========================================================
  {
    id: "cfa-l1-alts-commodities-digital",
    examSlug: "cfa",
    topicId: "alts",
    topicName: "Alternative Investments",
    title: "Commodities and Digital Assets",
    readingMinutes: 21,
    summary:
      "Why a commodity return is mostly not the spot price move, how contango and backwardation determine roll yield, and a measured account of digital assets.",
    intro:
      "Commodities are the alternative asset most often misunderstood, because investors assume they are buying the spot price and are in fact buying a futures position whose return is dominated by the shape of the curve.",
    sections: [
      {
        heading: "Where a commodity return actually comes from",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Decomposing a commodity futures return",
              expr: "total return = spot price change + roll yield + collateral yield",
              note: "Roll yield can exceed the spot move in either direction, and does so routinely.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Contango and backwardation, priced",
              prompt:
                "Spot is $100. The one-month future is $101 and the three-month is $103. Later the curve inverts: one-month $99, three-month $97. What is roll yield in each case?",
              steps: [
                "Futures above spot and rising with maturity is CONTANGO.",
                "Rolling means selling the near contract and buying the further one. In contango you sell the cheaper near contract and buy the dearer far one: $101 into $103 loses roughly 1.94%.",
                "The inverted curve is BACKWARDATION. Rolling from $99 into $97 gains roughly 2.06%.",
              ],
              answer:
                "Roughly −1.94% in contango and +2.06% in backwardation, PER ROLL. Repeated monthly that dominates the return: an investor can be right about the spot price rising and still lose money in a persistently contangoed market. This is the single most important commodity fact at Level I and it is why long-only commodity index products have often disappointed.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Contango usually reflects storage and financing costs exceeding any convenience yield.",
              "Backwardation usually reflects a high convenience yield — holders value physical possession, typically when supply is tight.",
              "Commodities produce no income, so the entire return is price and roll plus interest on the collateral.",
              "The inflation-hedging case is strongest for energy and weakest for precious metals over short horizons.",
            ],
          },
        ],
      },
      {
        heading: "Digital assets, stated carefully",
        blocks: [
          {
            kind: "p",
            text: "Digital assets are recorded on a distributed ledger rather than by a central registrar. The categories differ enough that treating them as one asset class is the first error: a payment token, a utility token giving access to a service, a security token representing an ownership claim, and a stablecoin pegged to a reference asset raise different questions.",
          },
          {
            kind: "table",
            table: {
              caption: "The investment case, both sides",
              headers: ["Argued for", "Argued against"],
              rows: [
                ["Low historical correlation with traditional assets", "Correlations rose sharply in the 2022 drawdown"],
                ["Fixed supply schedules for some tokens", "No cash flows, so no intrinsic valuation anchor"],
                ["Settlement without a central intermediary", "Throughput, energy use and finality constraints"],
                ["Growing institutional infrastructure", "Custody, fraud and regulatory uncertainty remain live"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The valuation problem is genuine",
            body: "Every valuation model in the curriculum discounts future cash flows or compares an asset with peers on a fundamental measure. A token with no cash flows supports neither. That does not make the price wrong — a thing is worth what someone pays — but it does mean the analytical tools taught here do not apply, and an adviser should say so plainly rather than reaching for a model that does not fit.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Roll yield", def: "Return from rolling futures forward; negative in contango, positive in backwardation." },
      { term: "Contango", def: "Futures above spot — storage and financing exceed convenience yield." },
      { term: "Backwardation", def: "Futures below spot — high convenience yield, usually tight supply." },
      { term: "Collateral yield", def: "Interest earned on the cash backing a futures position." },
      { term: "Stablecoin", def: "A token pegged to a reference asset; the peg's backing is the question." },
    ],
    takeaways: [
      "A commodity investor buys futures, not spot — the curve shape drives the return.",
      "You can be right about the spot price and lose money in persistent contango.",
      "Backwardation signals tight supply and pays you to roll.",
      "Commodities produce no income; return is price plus roll plus collateral interest.",
      "Digital assets are several different things and should not be analysed as one.",
      "No cash flows means the curriculum's valuation tools do not apply — say so rather than misapply them.",
    ],
  },

  // ==========================================================
  // CORPORATE FINANCE — CAPITAL STRUCTURE
  // ==========================================================
  {
    id: "cfa-l1-corp-capital-structure",
    examSlug: "cfa",
    topicId: "corp",
    topicName: "Corporate Issuers",
    title: "Capital Structure: Modigliani-Miller and the Real-World Limits",
    readingMinutes: 20,
    summary:
      "Why capital structure is irrelevant in a frictionless world, what taxes change, why the tax shield does not imply infinite debt, and how firms actually decide.",
    intro:
      "The Modigliani-Miller propositions are worth learning precisely because their assumptions are false. They isolate what capital structure CANNOT do, which tells you that every real effect must come from a friction they excluded.",
    sections: [
      {
        heading: "The propositions",
        blocks: [
          {
            kind: "bullets",
            items: [
              "MM I, no taxes: firm value is independent of capital structure. The pie does not change size when you cut it differently.",
              "MM II, no taxes: the cost of equity rises linearly with leverage, exactly offsetting the cheaper debt, so WACC is constant.",
              "MM I, with taxes: value rises by the present value of the tax shield, V_levered = V_unlevered + tD.",
              "MM II, with taxes: WACC now FALLS as leverage rises, because the shield is real.",
            ],
          },
          {
            kind: "example",
            example: {
              title: "The tax shield, quantified",
              prompt:
                "An unlevered firm is worth $1,000 with an unlevered cost of capital of 10%. It issues $400 of debt at 6% into a 25% tax environment. Find the levered value, the cost of equity, and the WACC.",
              steps: [
                "V_levered = $1,000 + (0.25 × $400) = $1,100. Equity = $1,100 − $400 = $700.",
                "Cost of equity = 10% + (10% − 6%) × ($400/$700) × (1 − 0.25) = 11.71%.",
                "WACC = (700/1100)(11.71%) + (400/1100)(6%)(0.75) = 9.09%.",
              ],
              answer:
                "The firm gains $100 of value, the cost of equity rises from 10% to 11.71%, and WACC falls from 10% to 9.09%. Both things happen at once: equity holders demand more because they now stand behind a fixed claim, AND the overall cost falls because the government subsidises the interest. The $100 is the tax shield, and it is real money.",
            },
          },
        ],
      },
      {
        heading: "Why firms do not borrow infinitely",
        blocks: [
          {
            kind: "p",
            text: "Taken literally, MM with taxes implies a firm should be financed almost entirely with debt. No firm does this, and the reasons are the frictions the model excluded.",
          },
          {
            kind: "table",
            table: {
              caption: "What stops the shield running forever",
              headers: ["Force", "Effect"],
              rows: [
                ["Financial distress costs", "Direct legal costs, plus lost customers, staff and suppliers"],
                ["Agency costs of debt", "Covenants restrict operations; incentives to take excessive risk"],
                ["Asymmetric information", "Issuing equity signals management thinks it is overvalued"],
                ["Loss of financial flexibility", "No capacity to fund an opportunity or absorb a shock"],
              ],
            },
          },
          {
            kind: "p",
            text: "The static trade-off theory sets the optimum where the marginal tax shield equals the marginal expected cost of distress. The pecking order theory says firms do not target a ratio at all: they prefer internal funds first, then debt, then equity last, because each successive source sends a worse signal.",
          },
          {
            kind: "callout",
            label: "What the theory actually predicts about behaviour",
            body: "Stable, asset-heavy, profitable businesses can carry more debt, because their distress costs are lower and their shields are usable. Volatile, intangible-heavy or loss-making businesses should carry less, because a tax shield is worthless without taxable profit and their assets do not support recovery in distress. When a fact pattern gives you an industry, that is the reasoning it wants.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "MM Proposition I (no taxes)", def: "Firm value is independent of capital structure." },
      { term: "MM Proposition II (no taxes)", def: "Cost of equity rises with leverage, holding WACC constant." },
      { term: "Interest tax shield", def: "tD — the value added because interest is deductible." },
      { term: "Static trade-off theory", def: "Optimum where marginal shield equals marginal distress cost." },
      { term: "Pecking order theory", def: "Internal funds, then debt, then equity — driven by signalling." },
    ],
    takeaways: [
      "MM isolates what capital structure cannot do, so every real effect is a friction they excluded.",
      "Without taxes the cost of equity rises exactly enough to hold WACC constant.",
      "With taxes the shield is real: $400 of debt at 25% added $100 of value here.",
      "Cost of equity rose to 11.71% AND WACC fell to 9.09% — both, simultaneously.",
      "Distress, agency costs, signalling and lost flexibility are what stop infinite debt.",
      "A tax shield is worthless without taxable profit — which is why loss-makers should not lever.",
    ],
  },
];

export const lastQuestions: Question[] = [];
