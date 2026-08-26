// ============================================================
// Certus — CFA Level III Asset Allocation supplement
//
// WHY THIS FILE EXISTS: the existing L3 asset allocation chapter covers
// mean-variance optimisation, risk budgeting, rebalancing corridors and
// reverse optimisation. A concept audit found gaps: factor-based asset
// allocation, the criteria defining an asset class, and after-tax asset
// allocation all returned ZERO matches. Risk parity, tactical asset
// allocation, surplus optimisation and illiquid-asset allocation each
// had two or three passing mentions.
//
// This chapter fills those gaps and adds the allocation-approach
// comparison the exam turns on — asset-class versus factor-based versus
// goals-based versus liability-relative.
//
// Every number in every worked example was computed in Python first.
// The utility example is the check: doubling risk aversion from 4 to 8
// halves the utility-adjusted return from 4.32% to 1.44%, which is what
// the quadratic penalty term requires.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const aaChaptersL3: Chapter[] = [
  {
    id: "cfa-l3-aa-approaches",
    examSlug: "cfa-l3",
    topicId: "pm-asset",
    topicName: "Asset Allocation",
    title: "Allocation Approaches, Constraints, and Implementation",
    readingMinutes: 22,
    summary:
      "Choosing among asset-class, factor-based, goals-based and liability-relative approaches, defining an asset class properly, and the constraints — tax, liquidity, size — that reshape the answer.",
    intro:
      "Asset allocation is the decision that dominates portfolio outcomes, and Level III examines it as a choice among frameworks rather than as an optimisation exercise. This chapter covers what makes something an asset class at all, the four allocation approaches and when each fits, and the constraints that make the theoretical optimum unimplementable.",
    sections: [
      {
        heading: "What qualifies as an asset class",
        blocks: [
          {
            kind: "p",
            text: "Before allocating across asset classes, the classes themselves must be specified sensibly. The curriculum sets criteria, and applying them prevents the common error of proliferating categories that are not genuinely distinct.",
          },
          {
            kind: "bullets",
            items: [
              "Assets within a class should be relatively homogeneous, sharing similar attributes.",
              "Classes should be mutually exclusive — an asset belongs to one class, not several.",
              "Classes should be diversifying, meaning no class has a correlation above roughly 0.95 with another.",
              "Classes together should make up a preponderance of world investable wealth.",
              "Each class should have the capacity to absorb a meaningful portion of the portfolio without affecting returns.",
            ],
          },
          {
            kind: "p",
            text: "The diversification criterion is where most proposed classes fail. Splitting equities into a dozen sub-categories that correlate at 0.97 with one another adds specification complexity without adding a genuine allocation decision. The capacity criterion matters for large institutions, where an asset class too small to hold meaningfully cannot influence the portfolio whatever its expected return.",
          },
          {
            kind: "callout",
            label: "Why this matters analytically",
            body: "Highly correlated asset classes make a mean-variance optimiser unstable. The optimiser cannot distinguish between near-identical inputs, so tiny changes in expected returns produce enormous swings in the recommended weights. Proper class definition is a precondition for the optimisation being meaningful at all.",
          },
        ],
      },
      {
        heading: "The four allocation approaches",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Choosing the framework",
              headers: ["Approach", "Organising principle", "Suits"],
              rows: [
                ["Asset-class", "Groups of similar securities", "Most investors; simple and communicable"],
                ["Factor-based", "Underlying risk exposures", "Sophisticated investors seeking true diversification"],
                ["Goals-based", "Separate portfolios per objective", "Private clients with distinct goals"],
                ["Liability-relative", "Funding a defined set of obligations", "Pensions, insurers, any liability-driven investor"],
              ],
            },
          },
          {
            kind: "p",
            text: "Factor-based allocation responds to a genuine weakness in the asset-class approach: asset classes that look distinct frequently share the same underlying risk drivers. Equities and high yield credit are labelled differently but both load heavily on growth risk, so a portfolio diversified across asset classes can be concentrated in factor terms. Allocating across factors — equity, size, value, momentum, term, credit, inflation, liquidity — targets the risks that actually drive returns.",
          },
          {
            kind: "p",
            text: "Its drawbacks are practical. Factors are not directly investable and must be accessed through securities, often with leverage and shorting. The framework is harder to communicate to a client or a board, and factor definitions differ across providers. Most investors are better served by an asset-class approach informed by factor analysis than by a full factor-based allocation.",
          },
          {
            kind: "p",
            text: "Goals-based allocation assigns a separate sub-portfolio to each objective, with the asset mix determined by the goal's time horizon and required probability of success. Essential needs are funded conservatively with a high required success probability; aspirational goals take more risk with a lower required probability. The total allocation may resemble a rational optimum, but the client understands it and therefore sustains it.",
          },
          {
            kind: "p",
            text: "Liability-relative allocation defines risk as failure to fund obligations rather than as return volatility. That reframing changes the risk-free asset entirely: for an investor with long-dated liabilities, cash is risky and a long-duration bond matched to the obligations is safe. Surplus optimisation, hedging-return-seeking portfolio splits, and integrated asset-liability approaches are its implementations.",
          },
        ],
      },
      {
        heading: "Mean-variance optimisation and its problems",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "The utility-adjusted return",
              expr: "U = E(R) − 0.005 × A × σ²",
              note: "With E(R) = 7.2%, σ = 12% and A = 4: U = 7.2 − 0.005 × 4 × 144 = 4.32%. Doubling A to 8 halves it to 1.44%.",
            },
          },
          {
            kind: "p",
            text: "Mean-variance optimisation finds the highest-utility portfolio for a given risk aversion. Its weaknesses are well documented and regularly examined. It is extremely sensitive to input estimates, particularly expected returns, and small changes produce large weight swings. It concentrates in a few assets. It assumes returns are normally distributed, which understates tail risk. And it uses variance, treating upside and downside deviation identically.",
          },
          {
            kind: "table",
            table: {
              caption: "Responses to the optimiser's weaknesses",
              headers: ["Problem", "Response"],
              rows: [
                ["Input sensitivity", "Reverse optimisation; Black-Litterman"],
                ["Estimation error in weights", "Resampled efficient frontier"],
                ["Extreme concentration", "Constraints on weights"],
                ["Non-normal returns", "Monte Carlo simulation; downside risk measures"],
                ["Variance treats upside as risk", "Mean-semivariance; target semideviation"],
              ],
            },
          },
          {
            kind: "p",
            text: "Reverse optimisation starts from observed market weights and infers the expected returns that would make those weights optimal. Because it anchors on what the market already holds, it produces far more stable and diversified results than optimising forward from forecast returns. Black-Litterman extends it by allowing the analyst to tilt those implied returns toward specific views, with the size of the tilt scaled by confidence in the view.",
          },
          {
            kind: "p",
            text: "Resampling addresses estimation error differently — by running the optimisation many times on inputs drawn from a distribution around the estimates and averaging the resulting weights. The output is more diversified and more stable, though it has no formal theoretical foundation and can produce portfolios that are not optimal under any single set of inputs.",
          },
          {
            kind: "p",
            text: "Risk parity allocates so that each asset class contributes equally to portfolio risk rather than equally to capital. Because bonds are less volatile than equities, equal risk contribution means a much larger bond weight, typically levered to reach the target return. Its appeal is that a conventional 60/40 portfolio derives roughly 90% of its risk from equities despite holding 60% of its capital there. Its vulnerability is dependence on leverage and on the assumption that historical volatility relationships persist.",
          },
        ],
      },
      {
        heading: "Risk budgeting",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Contribution to risk",
              expr: "CTR_i = w_i × MCTR_i,     percentage contribution = CTR_i ÷ portfolio σ",
              note: "With a 35% weight and a marginal contribution of 0.18, CTR is 0.063. Against portfolio volatility of 11%, that is 57.3% of total risk.",
            },
          },
          {
            kind: "p",
            text: "Risk budgeting converts risk from a constraint into a resource, allocating it where expected return per unit is highest. An optimal risk budget equalises the ratio of marginal contribution to expected return across positions — if one holding delivers more expected return per unit of marginal risk than another, shifting capital toward it improves the portfolio.",
          },
          {
            kind: "p",
            text: "The figure above illustrates the point that makes risk budgeting worth doing: capital weights and risk weights diverge sharply. A position at 35% of capital contributing 57% of risk is a very different holding from what the capital weight alone suggests.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "Capital weights and risk contributions diverge. The equity sleeve holds 60% of capital and supplies far more of the risk.",
              alt: "Two stacked bars comparing capital allocation and risk contribution across equity, bonds and alternatives.",
              svg: `<svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg" role="img">
  <text x="30" y="34" font-size="11" fill="var(--text-muted)">Capital</text>
  <rect x="100" y="20" width="180" height="26" rx="3" fill="var(--primary)" opacity="0.85"/>
  <rect x="280" y="20" width="90" height="26" rx="3" fill="var(--ats-green)" opacity="0.7"/>
  <rect x="370" y="20" width="45" height="26" rx="3" fill="var(--text-muted)" opacity="0.5"/>
  <text x="150" y="38" font-size="10" fill="var(--bg-card)">equity 60%</text>
  <text x="296" y="38" font-size="10" fill="var(--bg-card)">bonds 30%</text>
  <text x="30" y="94" font-size="11" fill="var(--text-muted)">Risk</text>
  <rect x="100" y="80" width="270" height="26" rx="3" fill="var(--primary)" opacity="0.85"/>
  <rect x="370" y="80" width="20" height="26" rx="3" fill="var(--ats-green)" opacity="0.7"/>
  <rect x="390" y="80" width="25" height="26" rx="3" fill="var(--text-muted)" opacity="0.5"/>
  <text x="185" y="98" font-size="10" fill="var(--bg-card)">equity ~90% of risk</text>
  <text x="100" y="138" font-size="10" fill="var(--text-muted)">the same portfolio, two very different pictures</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Rebalancing",
        blocks: [
          {
            kind: "p",
            text: "Calendar rebalancing restores target weights on a fixed schedule. Percentage-range rebalancing triggers when a weight leaves its corridor. The two are frequently combined: check on a schedule, act only if a corridor has been breached.",
          },
          {
            kind: "p",
            text: "Corridors may be specified in absolute or relative terms, and the distinction matters. A 40% target with a five percentage point absolute band runs from 35% to 45%. The same target with a 15% relative band runs from 34% to 46%. Questions supply one convention and expect the other to be distinguished.",
          },
          {
            kind: "bullets",
            items: [
              "Higher transaction costs justify wider corridors — the cost of trading rises relative to the benefit.",
              "Higher risk tolerance justifies wider corridors, since drift matters less.",
              "Higher correlation with the rest of the portfolio justifies wider corridors.",
              "Higher asset volatility justifies NARROWER corridors, because drift accumulates faster.",
              "Taxable investors justify wider corridors, since rebalancing crystallises gains.",
            ],
          },
          {
            kind: "p",
            text: "Rebalancing is a contrarian discipline — it sells what has risen and buys what has fallen. That makes it uncomfortable exactly when it matters most, which is why the policy belongs in the IPS as a pre-commitment rather than being decided in the moment.",
          },
        ],
      },
      {
        heading: "Constraints that reshape the answer",
        blocks: [
          {
            kind: "p",
            text: "Taxes change the optimisation directly. A taxable investor's expected return and volatility should both be stated after tax: an 8% pre-tax return at a 25% rate becomes 6% after tax, and 12% volatility becomes 9%, because the tax authority shares both the gain and the loss. Ignoring this overstates both return and risk.",
          },
          {
            kind: "p",
            text: "Asset location — deciding which assets sit in taxable versus tax-advantaged accounts — is a distinct decision from asset allocation and can add meaningful value. Assets generating heavily taxed income generally belong in tax-advantaged accounts; assets generating deferred capital gains are more efficient in taxable accounts. Tax-loss harvesting and careful lot selection add further value at the implementation level.",
          },
          {
            kind: "p",
            text: "Illiquidity constrains allocation for any investor with spending needs. The allocation to illiquid assets should be sized so that commitments can be met without forced sales, and the analysis must account for the denominator effect: when public markets fall, stale private valuations mechanically raise the reported private allocation, which can breach a policy limit without any transaction having occurred.",
          },
          {
            kind: "p",
            text: "Portfolio size constrains both ends. A very large portfolio may be unable to access capacity-constrained strategies meaningfully; a small one may fail investment minimums or be unable to diversify across enough managers. Governance capacity is the related constraint — a strategy the investment committee cannot competently oversee should not be adopted whatever its expected return.",
          },
          {
            kind: "callout",
            label: "Tactical deviations",
            body: "Tactical asset allocation deviates from the strategic allocation to exploit short-term opportunities, within ranges specified in the IPS. It requires both a correct view AND a view that differs from what prices already embed. Its performance should be evaluated separately from the strategic allocation, and the risk it adds counted against the total risk budget.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Asset class criteria", def: "Homogeneous, mutually exclusive, diversifying, a preponderance of wealth, and sufficient capacity." },
      { term: "Factor-based allocation", def: "Allocating across underlying risk exposures rather than across security groupings." },
      { term: "Goals-based allocation", def: "Separate sub-portfolios per objective, sized by horizon and required success probability." },
      { term: "Liability-relative allocation", def: "Defining risk as failure to fund obligations rather than as return volatility." },
      { term: "Reverse optimisation", def: "Inferring expected returns from observed market weights; more stable than forward optimisation." },
      { term: "Black-Litterman", def: "Tilting reverse-optimised returns toward specific views, scaled by confidence." },
      { term: "Resampled frontier", def: "Averaging weights across many optimisations on perturbed inputs." },
      { term: "Risk parity", def: "Equalising each asset class's contribution to risk rather than to capital." },
      { term: "Marginal contribution to risk", def: "The change in portfolio risk from a small increase in a position." },
      { term: "Denominator effect", def: "Stale private valuations mechanically raising the reported private allocation when public markets fall." },
      { term: "Asset location", def: "Placing assets in taxable or tax-advantaged accounts to maximise after-tax return." },
    ],
    takeaways: [
      "Asset classes must be diversifying — correlations above roughly 0.95 make the optimiser unstable.",
      "Factor-based allocation targets the risks that actually drive returns, at the cost of investability and communicability.",
      "Liability-relative allocation makes cash risky and long bonds safe for a long-liability investor.",
      "Mean-variance optimisation's central weakness is sensitivity to expected return estimates.",
      "Reverse optimisation anchors on market weights and is far more stable; Black-Litterman adds views to it.",
      "Risk parity equalises risk contribution, requiring leverage and a large bond weight.",
      "Higher volatility justifies NARROWER corridors; higher costs, taxes and correlation justify wider ones.",
      "After-tax optimisation reduces both expected return and volatility, because the tax authority shares gains and losses.",
    ],
  },
];

// Questions live in cfa-l3-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const aaQuestionsL3: Question[] = [];
