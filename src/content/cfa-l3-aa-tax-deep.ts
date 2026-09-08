// ============================================================
// Certus — CFA Level III: asset allocation and the taxation of wealth
//
// WHY THIS FILE EXISTS
// Level III readings are the largest remaining gap (481 of ~1,200
// minutes). Asset allocation is the heaviest topic on the exam and
// private-client taxation is where the arithmetic marks live.
//
// TWO CALCULATIONS HERE ARE WORTH THE WHOLE FILE:
// (1) The risk-contribution decomposition, which shows a 60/40 portfolio
//     is roughly 95% equity RISK — the fact that makes risk parity make
//     sense rather than sound like jargon.
// (2) The tax-deferral comparison, which puts a number on why location
//     and deferral matter as much as selection.
// Both computed in Python first.
// ============================================================

import { Chapter, Question } from "./types";

export const l3AaTaxChapters: Chapter[] = [
  {
    id: "cfa-l3-aa-approaches",
    examSlug: "cfa-l3",
    topicId: "pm-asset",
    topicName: "Asset Allocation",
    title: "Asset Allocation: Mean-Variance, Its Failures, and the Alternatives",
    readingMinutes: 24,
    summary:
      "Why mean-variance optimisation misbehaves, what risk parity actually equalises, the case for factor-based allocation, and why 60/40 is almost entirely an equity bet.",
    intro:
      "Asset allocation explains most of the variation in a portfolio's returns, which is why Level III spends more time here than anywhere else. The examinable skill is knowing what each method assumes and where that assumption breaks — because every method works until its assumption fails.",
    sections: [
      {
        heading: "Mean-variance optimisation and its problems",
        blocks: [
          {
            kind: "p",
            text: "MVO finds the weights maximising expected return for a given variance. It is the theoretical foundation of everything here and it is famously badly behaved in practice, for reasons that are specific rather than vague.",
          },
          {
            kind: "table",
            table: {
              caption: "Where MVO breaks, and the standard repair",
              headers: ["Problem", "What happens", "Repair"],
              rows: [
                ["Input sensitivity", "Small changes in expected return produce wildly different weights", "Reverse optimisation; Black-Litterman"],
                ["Concentration", "Corner solutions loading on one or two assets", "Constraints; resampling"],
                ["Estimation error", "The optimiser maximises the estimation error, not the return", "Shrinkage estimators; longer samples"],
                ["Normality assumption", "Ignores skew and fat tails", "Add higher moments, or use scenario analysis"],
                ["Single period", "Ignores path, taxes and rebalancing costs", "Monte Carlo across multiple periods"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The phrase worth remembering",
            body: "MVO is an error-maximiser. Any asset whose expected return has been over-estimated looks attractive, so the optimiser loads on it — meaning the largest allocations land on exactly the inputs you got most wrong. That is not a flaw in the mathematics; the mathematics is doing precisely what it was asked to. It is a flaw in feeding point estimates to a procedure that treats them as certain.",
          },
          {
            kind: "p",
            text: "Reverse optimisation inverts the problem: start from observed market weights, assume the market is optimally allocated, and derive the expected returns that would justify those weights. Black-Litterman then blends those market-implied returns with the investor's own views, weighted by how confident the investor is. The result is a portfolio that stays close to the market except where the investor has a genuine, stated view — which is far more stable than raw MVO.",
          },
        ],
      },
      {
        heading: "Why 60/40 is an equity portfolio",
        blocks: [
          {
            kind: "example",
            example: {
              title: "Weights and risk are not the same picture",
              prompt:
                "A portfolio holds 60% equity with 16% volatility and 40% bonds with 5% volatility, correlation 0.10. Compute the portfolio volatility and each asset's contribution to it.",
              steps: [
                "Portfolio variance = (0.6 × 0.16)² + (0.4 × 0.05)² + 2(0.6)(0.4)(0.16)(0.05)(0.10).",
                "Portfolio volatility = 10.00%.",
                "Equity risk contribution = 94.1% of total risk. Bond contribution = 5.9%.",
              ],
              answer:
                "The capital split is 60/40; the RISK split is 94/6. A so-called balanced portfolio is almost entirely an equity bet, and that gap between how it looks and how it behaves is the single most useful fact in the topic. It also explains why 60/40 portfolios fall so hard in equity drawdowns despite the bond allocation — the bonds were never contributing meaningful risk, so they were never going to offset much.",
            },
          },
          {
            kind: "p",
            text: "RISK PARITY equalises the second column rather than the first: weights are set so each asset contributes the same share of total portfolio risk. In practice that means far more in bonds, and typically leverage applied to the whole portfolio to restore the expected return that the lower-volatility mix gives up.",
          },
          {
            kind: "bullets",
            items: [
              "Risk parity's case: better diversification of RISK, and less dependence on a single asset class's performance.",
              "Risk parity's cost: it requires leverage, which introduces financing cost, margin calls, and a dependence on the bond regime that has just been made structurally larger.",
              "It also assumes risk is estimable and stable — and correlations converge in exactly the crises it was meant to survive.",
            ],
          },
        ],
      },
      {
        heading: "Other approaches, and choosing between them",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Allocation frameworks",
              headers: ["Approach", "Organising principle", "Best suited to"],
              rows: [
                ["Asset-class based", "Traditional buckets", "Simple governance; clear reporting"],
                ["Factor based", "Underlying risk drivers", "Where asset classes share hidden factor exposures"],
                ["Risk parity", "Equal risk contribution", "Investors able and willing to use leverage"],
                ["Goals based", "A sub-portfolio per goal", "Private clients with distinct, dated objectives"],
                ["Liability relative", "Fund the liability first", "Pensions, insurers, anyone with a defined obligation"],
              ],
            },
          },
          {
            kind: "p",
            text: "Goals-based allocation builds a separate sub-portfolio for each objective with its own horizon and required probability of success — essential spending funded very conservatively, aspirational goals funded with risk assets. It is less efficient than a single optimised portfolio in mean-variance terms, and clients hold it through drawdowns because they can see which money is doing what. That behavioural advantage is real and is a legitimate reason to prefer it.",
          },
          {
            kind: "bullets",
            items: [
              "Rebalancing bands should widen with transaction costs and with the asset's own volatility, and narrow where correlation with the rest of the portfolio is low.",
              "Rebalancing is contrarian and adds value when markets mean-revert; it detracts in a sustained trend.",
              "Taxes and transaction costs argue for wider bands than a frictionless analysis suggests.",
              "Monte Carlo simulation tests the PATH, not just the endpoint — which matters when withdrawals occur along the way and sequence risk applies.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "MVO as error-maximiser", def: "Loads most heavily on the inputs you estimated worst." },
      { term: "Reverse optimisation", def: "Derive expected returns from observed market weights." },
      { term: "Black-Litterman", def: "Blends market-implied returns with the investor's stated views." },
      { term: "Risk contribution", def: "An asset's share of total portfolio risk — not its weight." },
      { term: "Risk parity", def: "Equalises risk contributions; usually requires leverage." },
      { term: "Goals-based allocation", def: "A sub-portfolio per objective; behaviourally durable." },
      { term: "Sequence risk", def: "Why the PATH matters when withdrawals occur along the way." },
    ],
    takeaways: [
      "MVO maximises estimation error — the biggest weights land on the worst estimates.",
      "Black-Litterman stays near the market except where a real view exists.",
      "A 60/40 portfolio is 94% equity risk; weights and risk are different pictures.",
      "Risk parity equalises risk contributions and buys that with leverage.",
      "Goals-based allocation is less efficient and more durable — clients actually hold it.",
      "Monte Carlo tests the path, which is what sequence risk requires.",
    ],
  },

  {
    id: "cfa-l3-taxation-wealth",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth Management",
    title: "Taxation, Asset Location, and Why Deferral Is Worth So Much",
    readingMinutes: 24,
    summary:
      "How the three tax regimes compound differently over twenty years, what asset location is worth, and the wealth transfer decisions that follow.",
    intro:
      "For a taxable private client, after-tax return is the only return that matters, and the gap between tax treatments compounds into something far larger than most clients expect. This reading puts a number on it.",
    sections: [
      {
        heading: "Three tax regimes over twenty years",
        blocks: [
          {
            kind: "example",
            example: {
              title: "The same 8% return, three tax treatments",
              prompt:
                "$100 earns 8% a year for 20 years at a 30% tax rate. Compare a tax-exempt account, annual taxation of the return, and deferral of all tax until the end.",
              steps: [
                "Tax-exempt: $100 × 1.08²⁰ = $466.10.",
                "Annual accrual: the return becomes 8% × 0.70 = 5.6%, so $100 × 1.056²⁰ = $297.36.",
                "Deferred: grow untaxed then tax the gain once — ($466.10 − $100) × 0.70 + $100 = $356.27.",
              ],
              answer:
                "$466.10, $356.27 and $297.36. Deferral is worth $58.91 on a $100 starting stake — nearly 59% of the original capital, purely from WHEN the tax is paid rather than how much. And annual taxation destroys 36% of the tax-exempt terminal value. This is why asset location and turnover discipline are not housekeeping; they are among the largest levers a private-client adviser has.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "The regimes and what suits them",
              headers: ["Regime", "Taxed", "Best holds"],
              rows: [
                ["Tax-exempt (Roth-style)", "Never, on qualified withdrawal", "Highest expected return assets"],
                ["Tax-deferred", "On withdrawal, at ordinary rates", "Tax-inefficient: bonds, REITs, high turnover"],
                ["Taxable", "Annually on income; on realisation for gains", "Tax-efficient equity; assets held for a step-up"],
              ],
            },
          },
          {
            kind: "callout",
            label: "Turnover is a tax decision",
            body: "A strategy that realises gains every year is taxed on the annual-accrual schedule; one that holds is taxed on the deferred schedule. The example above prices that difference at 59% of starting capital over twenty years. A manager whose gross alpha is 1% a year and whose turnover costs 1.5% in accelerated tax has negative net alpha — which is why after-tax reporting to taxable clients is not optional.",
          },
        ],
      },
      {
        heading: "Wealth transfer",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Lifetime gifting transfers FUTURE appreciation out of the estate — the earlier the gift, the more growth escapes.",
              "A bequest may receive a step-up in cost basis, which can beat gifting for a highly appreciated asset the donor can afford to hold.",
              "That tension is the core decision: gifting removes future growth, a bequest removes the embedded gain. Which wins depends on the asset's basis and the expected holding period.",
              "Generation-skipping transfers can avoid a layer of tax but attract their own regime.",
              "Charitable giving of appreciated securities avoids the gain AND may generate a deduction — usually more efficient than selling and donating cash.",
            ],
          },
          {
            kind: "p",
            text: "Trusts serve control as much as tax. A revocable trust avoids probate but leaves assets in the estate; an irrevocable trust removes them at the cost of surrendering control permanently. The exam consistently tests that distinction, and the answer never turns on the trust's name — it turns on whether the grantor gave up the power to revoke.",
          },
          {
            kind: "bullets",
            items: [
              "Tax jurisdiction rules vary: source-based taxes where income arises, residence-based taxes worldwide income of residents.",
              "Double taxation is relieved by credit, exemption or deduction methods, and treaties determine which applies.",
              "A concentrated low-basis position is the recurring private-client problem: outright sale triggers the whole gain, so staged sales, exchange funds, charitable structures and collars each trade tax efficiency against cost and complexity.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Annual accrual taxation", def: "Return taxed each year; the most destructive regime over long horizons." },
      { term: "Deferred taxation", def: "Grow untaxed, tax once at the end. Worth 59% of starting capital here." },
      { term: "Asset location", def: "Which account holds which asset — distinct from allocation." },
      { term: "Step-up in basis", def: "A bequest may reset cost basis, erasing the embedded gain." },
      { term: "Gifting versus bequest", def: "Gifting removes future growth; a bequest removes the embedded gain." },
      { term: "Exchange fund", def: "Diversifies a concentrated position without an immediate taxable sale." },
    ],
    takeaways: [
      "$100 at 8% for 20 years: $466 tax-exempt, $356 deferred, $297 taxed annually.",
      "Deferral alone was worth 59% of starting capital — timing, not rate.",
      "Annual taxation destroyed 36% of the tax-exempt terminal value.",
      "Turnover is a tax decision, and it can turn positive gross alpha negative.",
      "Gifting removes future growth; a bequest removes the embedded gain. Basis decides.",
      "Donating appreciated securities beats selling and donating the cash.",
      "An irrevocable trust removes assets from the estate only because control was surrendered.",
    ],
  },
];

export const l3AaTaxQuestions: Question[] = [];
