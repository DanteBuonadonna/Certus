// ============================================================
// Certus — CFA Level III Fixed Income supplement
//
// WHY THIS FILE EXISTS: the existing L3 chapters cover liability-driven
// investing and immunisation extensively (113 and 62 mentions). A
// concept audit found gaps: key rate duration, yield curve strategies
// and bond derivative overlays returned ZERO matches; cash flow
// matching had two mentions, credit strategy one, laddered portfolios
// one, and bond indexing two.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const fiChaptersL3: Chapter[] = [
  {
    id: "cfa-l3-fi-strategies",
    examSlug: "cfa-l3",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "Yield Curve Strategies, Credit Positioning, and Index Replication",
    readingMinutes: 22,
    summary:
      "Positioning for curve changes, the structures that express each view, credit strategy across the cycle, and how bond indices are actually tracked.",
    intro:
      "Liability-driven investing answers what a portfolio must fund. This reading covers the other half of Level III fixed income: how a manager positions along the curve, expresses a credit view, and replicates an index that cannot be bought outright.",
    sections: [
      {
        heading: "Positioning for curve changes",
        blocks: [
          {
            kind: "p",
            text: "A yield curve view has two dimensions: the level of rates and the shape of the curve. Duration positioning expresses the level view; the structure of the portfolio along the curve expresses the shape view. The two are independent decisions and should be attributed separately.",
          },
          {
            kind: "table",
            table: {
              caption: "Structures and the view each expresses",
              headers: ["Structure", "Construction", "Performs best when"],
              rows: [
                ["Bullet", "Concentrated at one maturity", "The curve steepens around that point"],
                ["Barbell", "Short and long, little in the middle", "The curve flattens; large parallel moves"],
                ["Ladder", "Evenly spread across maturities", "Reinvestment is regular; view is neutral"],
              ],
            },
          },
          {
            kind: "p",
            text: "A barbell has more convexity than a bullet of the same duration, which means it outperforms on large moves in either direction and underperforms on small ones. That convexity is paid for through a lower starting yield — the market prices it, so it is not free.",
          },
          {
            kind: "p",
            text: "Key rate durations decompose interest rate sensitivity by maturity segment, measuring the price effect of a shift in one part of the curve while the rest holds still. They are what reveal that a bullet and a barbell with identical total duration behave entirely differently when the curve changes shape rather than shifting in parallel.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "Bullet and barbell with identical duration have very different key rate exposures.",
              alt: "Two bar charts showing key rate duration concentrated at one maturity versus split across two.",
              svg: `<svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg" role="img">
  <text x="30" y="24" font-size="11" fill="var(--text-muted)">Bullet</text>
  <rect x="150" y="14" width="26" height="26" rx="3" fill="var(--primary)" opacity="0.3"/>
  <rect x="182" y="6" width="26" height="34" rx="3" fill="var(--primary)"/>
  <rect x="214" y="14" width="26" height="26" rx="3" fill="var(--primary)" opacity="0.3"/>
  <text x="30" y="94" font-size="11" fill="var(--text-muted)">Barbell</text>
  <rect x="100" y="76" width="26" height="34" rx="3" fill="var(--ats-green)"/>
  <rect x="182" y="98" width="26" height="12" rx="3" fill="var(--ats-green)" opacity="0.3"/>
  <rect x="290" y="76" width="26" height="34" rx="3" fill="var(--ats-green)"/>
  <text x="96" y="134" font-size="10" fill="var(--text-muted)">2y</text>
  <text x="186" y="134" font-size="10" fill="var(--text-muted)">10y</text>
  <text x="288" y="134" font-size="10" fill="var(--text-muted)">30y</text>
  <text x="340" y="94" font-size="10" fill="var(--text-muted)">same duration,</text>
  <text x="340" y="108" font-size="10" fill="var(--text-muted)">different curve risk</text>
</svg>`,
            },
          },
          {
            kind: "bullets",
            items: [
              "Expecting a parallel rise: shorten duration, or sell futures / pay fixed in a swap.",
              "Expecting a parallel fall: lengthen duration, or buy futures / receive fixed.",
              "Expecting steepening: overweight the short end relative to the long.",
              "Expecting flattening: overweight the long end, or move toward a barbell.",
              "Expecting greater curvature: a butterfly, long the wings and short the body, or the reverse.",
              "Expecting no change but a stable upward slope: ride the curve, buying longer than the horizon.",
            ],
          },
          {
            kind: "p",
            text: "Riding the yield curve buys a bond longer than the investment horizon and sells it as it rolls down to a lower yield. It outperforms buy-and-hold precisely when the forward rates implied by the curve do NOT materialise — which is to say, when the curve stays where it is rather than evolving as the forwards predict.",
          },
        ],
      },
      {
        heading: "Credit strategy",
        blocks: [
          {
            kind: "p",
            text: "Credit spreads are widest at the trough of the cycle and tightest late in an expansion, which means compensation for credit risk is lowest exactly when system leverage is highest. That relationship shapes when to add and reduce credit risk, and it is the opposite of what recent performance suggests at each point.",
          },
          {
            kind: "p",
            text: "Spread duration measures price sensitivity to a change in credit spread, distinct from interest rate duration. A portfolio can be fully hedged for rate risk while retaining its entire spread exposure — a distinction that is a genuine portfolio management error rather than a definitional quibble.",
          },
          {
            kind: "p",
            text: "Bottom-up credit selection picks issuers on their own fundamentals. Top-down credit positioning adjusts aggregate exposure to quality and sector based on the cycle. Most managers combine the two, and attribution should separate them so the source of any outperformance is visible.",
          },
          {
            kind: "p",
            text: "Credit portfolios are less diversified than issuer count suggests because defaults cluster in recessions rather than arriving independently. Sector and issuer concentration limits address the visible part of that problem; the correlated part cannot be diversified away and must be sized for.",
          },
          {
            kind: "callout",
            label: "The liquidity asymmetry",
            body: "Corporate bonds trade thinly, and liquidity disappears fastest when credit deteriorates. A manager who plans to reduce credit risk after spreads begin widening will find the exit far more expensive than the entry was. Reducing risk requires acting before the deterioration, which is why the cycle framework matters more than the reaction.",
          },
        ],
      },
      {
        heading: "Index replication and enhanced indexing",
        blocks: [
          {
            kind: "p",
            text: "A bond index cannot be bought outright. It contains thousands of issues, many of which never trade, and its composition changes constantly as bonds are issued, mature and are downgraded out. Full replication is impractical for all but the narrowest indices.",
          },
          {
            kind: "p",
            text: "Stratified sampling divides the index into cells by duration, sector, quality and issuer, then holds representative bonds matching each cell's weight. It captures the index's principal risk characteristics with a manageable number of positions. Tracking error arises from the residual differences within cells.",
          },
          {
            kind: "p",
            text: "Enhanced indexing accepts small deliberate deviations to recover the costs of replication — modest sector tilts, security selection within cells, or capturing new-issue concessions. The objective is matching the index's risk profile while adding enough return to cover fees and trading costs.",
          },
          {
            kind: "p",
            text: "Bond index construction has a structural oddity worth understanding: market-value weighting gives the largest weight to the most indebted issuers. An investor tracking such an index is systematically lending most to whoever has borrowed most, which is the opposite of what credit analysis would suggest.",
          },
        ],
      },
      {
        heading: "Liability-relative structures",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Approaches to funding known liabilities",
              headers: ["Approach", "Mechanism", "Residual risk"],
              rows: [
                ["Cash flow matching", "Bonds whose cash flows match each payment", "Minimal — no reinvestment or rate risk"],
                ["Duration matching", "Match duration and present value", "Non-parallel curve shifts"],
                ["Contingent immunisation", "Active until a floor is threatened, then immunise", "Manager must act at the trigger"],
                ["Horizon matching", "Cash flow match near-term, duration match long-term", "Long-end curve risk"],
              ],
            },
          },
          {
            kind: "p",
            text: "Cash flow matching eliminates reinvestment and interest rate risk entirely by construction, at the cost of a more expensive and constrained portfolio. Duration matching is cheaper and more flexible but requires rebalancing as durations drift, and it fails on non-parallel curve shifts — which is why key rate durations matter for an immunised portfolio too.",
          },
          {
            kind: "p",
            text: "Immunisation requires matching present value and duration, and it also requires the portfolio's convexity to exceed the liability's while being minimised subject to that constraint. Higher convexity than the liability protects against parallel shifts; minimising the excess reduces exposure to curve reshaping and to the structural risk that comes with dispersed cash flows.",
          },
          {
            kind: "p",
            text: "Contingent immunisation permits active management while a surplus cushion exists, converting to a fully immunised portfolio if the cushion erodes to the point where the liability is only just fundable. Its practical weakness is that it requires the manager to act decisively at exactly the moment the active strategy is performing worst.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Bullet portfolio", def: "Maturities concentrated at one point on the curve." },
      { term: "Barbell portfolio", def: "Short and long maturities with little in between; higher convexity than a bullet." },
      { term: "Key rate duration", def: "Sensitivity to a shift in one maturity segment while the rest holds still." },
      { term: "Butterfly trade", def: "Long the wings and short the body, or the reverse; a curvature view." },
      { term: "Riding the yield curve", def: "Buying longer than the horizon and selling as the bond rolls down." },
      { term: "Spread duration", def: "Sensitivity to a change in credit spread, distinct from rate duration." },
      { term: "Stratified sampling", def: "Matching index cells by duration, sector and quality with representative bonds." },
      { term: "Enhanced indexing", def: "Small deliberate deviations intended to recover replication costs." },
      { term: "Cash flow matching", def: "Bonds whose cash flows meet each liability payment directly." },
      { term: "Contingent immunisation", def: "Active management until a floor is threatened, then full immunisation." },
    ],
    takeaways: [
      "Duration expresses the level view; portfolio structure along the curve expresses the shape view.",
      "A barbell has more convexity than a bullet of equal duration, paid for through a lower yield.",
      "Key rate durations reveal curve risk that a single duration figure conceals.",
      "Riding the curve pays when forward rates do NOT materialise.",
      "Spread duration and rate duration are different exposures; hedging one leaves the other intact.",
      "Credit spreads are tightest exactly when system leverage is highest.",
      "Bond index market-value weighting lends most to the most indebted issuers.",
      "Immunisation requires convexity above the liability's, minimised subject to that constraint.",
    ],
  },
];

export const fiQuestionsL3: Question[] = [];
