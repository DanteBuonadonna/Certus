// ============================================================
// Certus — CFA Level III Alternative Investments supplement
//
// WHY THIS FILE EXISTS: this was the thinnest topic on the entire L3
// track at 3/150 questions. A concept audit found hedge fund strategy
// classification, fund-of-funds structures, co-investment and
// secondaries ALL returned ZERO matches. Infrastructure and vintage
// year had one mention each, commodities three.
// ============================================================

import { Chapter, Question } from "./types";

export const altsChaptersL3: Chapter[] = [
  {
    id: "cfa-l3-alts-portfolio",
    examSlug: "cfa-l3",
    topicId: "pm-alts",
    topicName: "Alternative Investments",
    title: "Alternatives in a Portfolio: Role, Access, and Due Diligence",
    readingMinutes: 22,
    summary:
      "What each alternative asset class contributes, the routes to access them, why reported returns overstate reality, and what due diligence must actually cover.",
    intro:
      "Alternatives are examined at Level III as a portfolio construction problem rather than as a set of asset descriptions. The questions that matter are what role each class plays, how to access it, what the reported numbers conceal, and whether the institution can govern the commitment.",
    sections: [
      {
        heading: "Role in the portfolio",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "What each class is expected to contribute",
              headers: ["Class", "Primary role", "Principal risk"],
              rows: [
                ["Private equity", "Return enhancement", "Illiquidity; manager dispersion"],
                ["Hedge funds", "Diversification; risk reduction", "Strategy and operational risk"],
                ["Real estate", "Income and inflation protection", "Leverage; illiquidity"],
                ["Infrastructure", "Long-duration inflation-linked income", "Regulatory and construction risk"],
                ["Commodities", "Inflation protection", "No income; roll drag"],
                ["Private credit", "Yield above public credit", "Illiquidity; credit cycle"],
              ],
            },
          },
          {
            kind: "p",
            text: "The allocation should be justified by contribution to the total portfolio rather than by standalone return. Narrow framing — judging an alternative in isolation — is the error to avoid, because an asset with high standalone volatility and low correlation can reduce total portfolio risk.",
          },
          {
            kind: "p",
            text: "That said, the diversification case must be assessed honestly. Reported correlations for appraisal-valued assets are understated by smoothing, and correlations that look attractive in normal periods converge in stress. An optimiser fed raw private-asset data will systematically overallocate.",
          },
        ],
      },
      {
        heading: "Hedge fund strategies",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Equity hedge — long/short, market neutral, short bias; risk is selection and residual factor exposure.",
              "Event driven — merger arbitrage, distressed, activist; risk is deal break and legal outcome.",
              "Relative value — convertible and fixed income arbitrage; risk is leverage and funding liquidity.",
              "Macro and managed futures — directional and trend following; risk is trend reversal.",
              "Multi-strategy — capital allocated across the above; risk is opacity and correlation between sleeves.",
            ],
          },
          {
            kind: "p",
            text: "Several of these produce negatively skewed returns: steady gains punctuated by severe losses. Merger arbitrage collects a spread until a deal breaks; relative value earns a carry until funding withdraws; short volatility earns premium until a gap. A Sharpe ratio treats those tails as ordinary volatility and therefore flatters them systematically.",
          },
          {
            kind: "p",
            text: "Hedge fund index returns overstate the industry through survivorship bias, backfill bias and self-selection operating simultaneously — all in the same direction. An allocator benchmarking against such an index is comparing a real portfolio to an inflated construct.",
          },
        ],
      },
      {
        heading: "Access routes",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Routes into private markets",
              headers: ["Route", "Advantage", "Cost"],
              rows: [
                ["Direct fund investment", "Full economics; control of selection", "Requires scale and expertise"],
                ["Fund of funds", "Access, diversification, due diligence", "A second fee layer"],
                ["Co-investment", "Reduced or zero fees on that deal", "Concentration; speed required"],
                ["Secondaries", "Shorter J-curve; visible portfolio", "Priced by a competitive market"],
                ["Listed vehicles", "Daily liquidity", "Equity beta; premium or discount to NAV"],
              ],
            },
          },
          {
            kind: "p",
            text: "A fund of funds adds a fee layer that must be justified by access, diversification and due diligence the investor could not perform alone. For a small institution without a private markets team it can be entirely rational; for a large one it usually is not.",
          },
          {
            kind: "p",
            text: "Co-investment offers reduced fees on a specific deal alongside a sponsor. The trade-offs are real: the investor must decide quickly with limited information, the position is concentrated, and there is adverse selection risk if sponsors syndicate their weaker deals.",
          },
          {
            kind: "p",
            text: "Secondaries purchase existing fund interests, which shortens the J-curve because the capital is already deployed and the portfolio visible. Pricing is competitive, and the discount to net asset value that once characterised the market has largely compressed except in periods of forced selling.",
          },
          {
            kind: "callout",
            label: "Listed alternatives are not private alternatives",
            body: "A listed private equity vehicle or REIT gives exposure to similar assets but with daily pricing, equity market beta and a premium or discount to net asset value. It delivers neither the illiquidity premium nor the smoothed correlation profile that motivated the private allocation.",
          },
        ],
      },
      {
        heading: "Why reported returns overstate",
        blocks: [
          {
            kind: "p",
            text: "Four distinct mechanisms inflate reported alternative returns, and an allocator should be able to name all four.",
          },
          {
            kind: "bullets",
            items: [
              "Appraisal smoothing understates volatility and correlation for anything valued infrequently.",
              "Survivorship, backfill and self-selection inflate hedge fund index returns.",
              "IRR can be flattered by subscription credit lines that defer capital calls without changing the multiple.",
              "Unrealised value rests on the manager's own marks, which is why DPI is more reliable than RVPI.",
            ],
          },
          {
            kind: "p",
            text: "A rising IRR alongside a static TVPI is the specific diagnostic for credit-line-driven timing rather than performance. Public market equivalent analysis addresses the comparison problem directly by replicating the fund's actual cash flow timing in a public index.",
          },
          {
            kind: "p",
            text: "Manager dispersion in private markets is far wider than in public markets, which means the median fund's return is a poor guide to what any particular investor experiences. Access to strong managers is itself the scarce resource, and an allocator who cannot obtain it should question whether the allocation makes sense at all.",
          },
        ],
      },
      {
        heading: "Liquidity and commitment management",
        blocks: [
          {
            kind: "p",
            text: "Capital is committed rather than transferred, and called over years. An investor must hold liquidity against undrawn commitments, and the call frequently arrives during a market drawdown — precisely when liquidity is scarcest and other assets are worth least.",
          },
          {
            kind: "p",
            text: "Commitment pacing addresses the problem of reaching and holding a target allocation when capital is called and returned over years. Committing the target amount in one year produces an allocation that undershoots for years and then overshoots.",
          },
          {
            kind: "p",
            text: "The denominator effect compounds this. When public markets fall, stale private valuations mechanically raise the reported private allocation, which can breach a policy limit without any transaction having occurred. Recognising it as an artefact rather than a genuine exposure change is the appropriate response.",
          },
          {
            kind: "p",
            text: "An investor who must sell private interests in a downturn faces the secondary market at its least favourable. The 2008 secondary market cleared at substantial discounts, and several institutions crystallised permanent losses to meet obligations they had not planned for.",
          },
        ],
      },
      {
        heading: "Due diligence and governance",
        blocks: [
          {
            kind: "p",
            text: "Investment due diligence covers strategy, process, team, track record and capacity. Operational due diligence covers valuation policy, independent administration and audit, compliance, counterparties, business continuity and firm financial stability — and it is where more failures originate.",
          },
          {
            kind: "p",
            text: "Self-administration, an unknown auditor, and returns too smooth for the underlying assets have featured in most major fund frauds. Operational findings should be able to veto an otherwise attractive manager, which requires the operational team to have genuine standing rather than an advisory role.",
          },
          {
            kind: "p",
            text: "Fee structures require specific attention. Management fees on committed rather than invested capital, carried interest calculated deal-by-deal rather than whole-fund, an absent clawback, and the absence of a high water mark all shift economics toward the manager. Total fees including any fund-of-funds layer should be compared with the strategy's plausible value added.",
          },
          {
            kind: "callout",
            label: "Governance capacity is a real constraint",
            body: "An alternatives programme requires expertise to select managers, monitor them, manage commitments and value the portfolio. An institution without that capacity should either build it, buy it through a fund of funds or consultant, or not make the allocation. Adopting a strategy the committee cannot oversee is a governance failure regardless of the expected return.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Commitment pacing", def: "Scheduling commitments so the allocation reaches and holds its target over time." },
      { term: "Denominator effect", def: "Stale private marks mechanically raising the reported allocation when public markets fall." },
      { term: "Co-investment", def: "Investing alongside a sponsor in a specific deal at reduced or zero fees." },
      { term: "Secondaries", def: "Purchasing existing fund interests; shortens the J-curve at a competitively set price." },
      { term: "DPI", def: "Distributions over paid-in capital — realised and not manipulable by marks." },
      { term: "Public market equivalent", def: "Replicating a fund's cash flow timing in a public index for fair comparison." },
      { term: "Backfill bias", def: "A fund adding prior history to an index only after a good run." },
      { term: "Operational due diligence", def: "Review of valuation, administration, audit, compliance and continuity." },
    ],
    takeaways: [
      "Justify an alternatives allocation by its contribution to the total portfolio, not its standalone return.",
      "Appraisal smoothing understates volatility and correlation; an unadjusted optimiser will overallocate.",
      "Several hedge fund strategies are negatively skewed, which the Sharpe ratio systematically flatters.",
      "Hedge fund indices are inflated by survivorship, backfill and self-selection at once.",
      "A rising IRR with a static TVPI signals credit-line timing rather than performance.",
      "Manager dispersion is far wider in private markets, so access to strong managers is the scarce resource.",
      "Capital calls arrive when liquidity is scarcest, which is what makes pacing and buffers essential.",
      "Operational due diligence should be able to veto a manager, and governance capacity is a real constraint.",
    ],
  },
];

export const altsQuestionsL3: Question[] = [];
