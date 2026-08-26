// ============================================================
// Certus — CFA Level III Equity supplement
//
// WHY THIS FILE EXISTS: the existing L3 chapters cover active share
// well (35 mentions) but a concept audit found shareholder engagement,
// index construction methodologies, sector-neutral construction and
// equity style definitions ALL returned ZERO matches. Long/short
// approaches had five mentions and factor tilts six.
// ============================================================

import { Chapter, Question } from "./types";

export const eqChaptersL3: Chapter[] = [
  {
    id: "cfa-l3-eq-portfolio",
    examSlug: "cfa-l3",
    topicId: "pm-equity",
    topicName: "Equity",
    title: "Equity Portfolio Construction, Index Choice, and Ownership",
    readingMinutes: 21,
    summary:
      "The passive-active spectrum, how index construction shapes the passive result, building portfolios by style and factor, and the ownership responsibilities that come with holding equity.",
    intro:
      "Equity is the largest allocation in most portfolios, and Level III examines how it is built rather than how individual securities are valued. This reading covers the choice of index, the construction approaches available, and the responsibilities that attach to equity ownership itself.",
    sections: [
      {
        heading: "The role of equity and the passive-active spectrum",
        blocks: [
          {
            kind: "p",
            text: "Equity's role in an institutional portfolio is capital appreciation, some inflation protection over long horizons, and diversification against fixed income — though that last benefit weakens sharply in inflation shocks, when both fall together.",
          },
          {
            kind: "table",
            table: {
              caption: "The spectrum of equity approaches",
              headers: ["Approach", "Active risk", "Typical fee"],
              rows: [
                ["Pure indexing", "Minimal", "Very low"],
                ["Enhanced indexing", "Low", "Low"],
                ["Factor or systematic", "Moderate", "Moderate"],
                ["Active fundamental", "High", "High"],
                ["Concentrated active", "Very high", "High"],
              ],
            },
          },
          {
            kind: "p",
            text: "The decision between them should follow from a judgement about where skill is findable net of costs, not from a general belief about market efficiency. An investor can rationally index efficient large-cap markets while allocating actively to less efficient segments, and that combination requires no inconsistency in views.",
          },
        ],
      },
      {
        heading: "Index construction shapes the passive result",
        blocks: [
          {
            kind: "p",
            text: "Choosing an index is an active decision, because different construction methodologies produce materially different exposures from the same universe.",
          },
          {
            kind: "bullets",
            items: [
              "Market-cap weighting rebalances automatically and has low turnover, but concentrates in whatever has already risen.",
              "Float adjustment excludes shares unavailable to public investors, aligning weights with investable supply.",
              "Equal weighting tilts toward smaller companies and requires regular rebalancing, generating turnover.",
              "Fundamental weighting uses accounting measures rather than price, producing a systematic value tilt.",
              "Capping rules limit single-name concentration, which matters in markets dominated by a few issuers.",
            ],
          },
          {
            kind: "p",
            text: "The concentration point deserves emphasis. A market-cap index in a small market can have a third of its weight in two companies, which makes tracking it a concentrated position rather than a diversified one. An investor who assumes indexing means diversification has not examined the index.",
          },
          {
            kind: "p",
            text: "Index reconstitution creates predictable flows. Additions are bought and deletions sold by every tracking fund on the same date, which produces price impact the index itself does not experience. That effect has weakened as it became widely anticipated, but it remains a real cost of transparent index rules.",
          },
        ],
      },
      {
        heading: "Portfolio construction approaches",
        blocks: [
          {
            kind: "p",
            text: "A bottom-up manager builds from individual security analysis; a top-down manager begins with sector, country or style views and selects within them. Most combine the two, and attribution should separate them so the source of any outperformance is identifiable.",
          },
          {
            kind: "p",
            text: "Sector-neutral construction holds benchmark sector weights and expresses views only through security selection within each sector. It isolates stock-picking skill from sector allocation, which suits a manager whose demonstrated skill is selection rather than rotation. The cost is forgoing sector views entirely, including correct ones.",
          },
          {
            kind: "p",
            text: "Style classification divides equities along value-growth and size dimensions. Value stocks trade at low multiples relative to fundamentals; growth stocks are priced for earnings expansion. The two lead in different environments, and a manager's style should be identified from holdings rather than from the name on the fund.",
          },
          {
            kind: "p",
            text: "Factor investing extends style into systematic exposures — value, size, momentum, quality, low volatility — implemented through rules rather than judgement. It occupies the middle ground between indexing and active management, offering exposures once sold at active fees for something much closer to index fees.",
          },
          {
            kind: "callout",
            label: "The active share and tracking error grid",
            body: "High active share with low tracking error indicates stock-specific bets with offsetting factor exposures — usually what an investor hiring for selection actually wants. High tracking error with low active share indicates factor bets rather than selection. Low on both with an active fee is closet indexing.",
          },
        ],
      },
      {
        heading: "Long-short and market-neutral approaches",
        blocks: [
          {
            kind: "p",
            text: "A long-only manager can express a negative view only by underweighting to zero, which caps the expression at the benchmark weight. For a stock at 0.05% of the index, the maximum underweight is 0.05% however negative the view — an asymmetry that wastes half the manager's information.",
          },
          {
            kind: "p",
            text: "Relaxing the constraint through a long-short or 130/30 structure raises the transfer coefficient, allowing negative views to be expressed in proportion to conviction. The costs are shorting expense, borrow availability, margin requirements and the operational complexity of managing a short book.",
          },
          {
            kind: "p",
            text: "A market-neutral portfolio targets zero net market exposure so that returns depend on selection rather than direction. It is not risk-free: sector, factor and stock-specific exposures remain, and a portfolio neutral to the market can be heavily exposed to a factor reversal.",
          },
        ],
      },
      {
        heading: "Ownership and engagement",
        blocks: [
          {
            kind: "p",
            text: "Equity ownership carries voting rights and, for a large holder, genuine influence. Proxy voting is a client asset and must be exercised in the beneficiaries' economic interest — voting with management to preserve access subordinates the client's interest to the manager's, which Standard III(A) prohibits.",
          },
          {
            kind: "p",
            text: "Engagement means dialogue with company management and boards on strategy, capital allocation, governance and material sustainability issues. It is a legitimate exercise of ownership, and for a large index holder unable to sell it is essentially the only available lever.",
          },
          {
            kind: "p",
            text: "Engagement creates one specific hazard: receiving material non-public information. A manager who acquires it during engagement is restricted from trading in the issuer, which is why firms maintain protocols separating engagement from the investment desk. The obligation arises regardless of how innocently the information was obtained.",
          },
          {
            kind: "p",
            text: "Activist investors take the same tools further, building a stake and pressing publicly for change. Their returns depend on identifying a specific remediable cause of undervaluation — a governance discount, a misallocated balance sheet, an underperforming division — rather than on the shares simply being cheap.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Float adjustment", def: "Excluding shares unavailable to public investors from index weights." },
      { term: "Fundamental weighting", def: "Weighting by accounting measures rather than price, producing a value tilt." },
      { term: "Sector-neutral construction", def: "Holding benchmark sector weights and expressing views only within sectors." },
      { term: "Active share", def: "The proportion of holdings differing from the benchmark." },
      { term: "130/30 structure", def: "Shorting 30% and reinvesting the proceeds to raise the transfer coefficient." },
      { term: "Market neutral", def: "Zero net market exposure; returns depend on selection rather than direction." },
      { term: "Engagement", def: "Dialogue with management and boards as an exercise of ownership." },
    ],
    takeaways: [
      "Choosing an index is an active decision — construction methodology drives the resulting exposure.",
      "A market-cap index in a concentrated market is a concentrated position, not a diversified one.",
      "Sector-neutral construction isolates selection skill at the cost of forgoing all sector views.",
      "The long-only constraint caps underweights at the benchmark weight, wasting negative information.",
      "Market neutral removes market exposure but not factor or sector exposure.",
      "Proxy votes are a client asset and must serve the beneficiaries' economic interest.",
      "Engagement can create an MNPI restriction, which is why firms separate it from the trading desk.",
    ],
  },
];

export const eqQuestionsL3: Question[] = [];
