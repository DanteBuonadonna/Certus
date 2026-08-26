// ============================================================
// Certus — CFA Level III Derivatives and Risk Management supplement
//
// WHY THIS FILE EXISTS: the existing L3 chapters cover equity beta
// hedging, duration management with futures, and currency hedge ratios.
// A concept audit found substantial gaps: interest rate swaps,
// swaptions, credit default swaps, total return swaps, variance swaps,
// delta/gamma/vega hedging, cash equitisation, cross hedging, minimum
// variance hedge ratios and emerging market currency management ALL
// returned ZERO matches. Spread strategies had one mention, straddles
// two.
//
// Every number in every worked example was computed in Python first.
// The collar example is the internal check: max loss of 4.25 and max
// gain of 5.75 sum to 10.00, the distance between the two strikes —
// which is what a collar's payoff range must equal.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const derivChaptersL3: Chapter[] = [
  {
    id: "cfa-l3-deriv-overlays",
    examSlug: "cfa-l3",
    topicId: "pm-deriv",
    topicName: "Derivatives and Risk Management",
    title: "Derivative Overlays: Exposure Management, Swaps, and Options Strategies",
    readingMinutes: 23,
    summary:
      "Changing exposure without trading the underlying — futures overlays, the swap family, option strategies and their payoff arithmetic, and managing currency in a global portfolio.",
    intro:
      "A portfolio manager frequently wants to change an exposure without disturbing the underlying holdings — because trading them is expensive, tax-inefficient, or simply slower than the decision requires. Derivatives separate the exposure decision from the ownership decision, and Level III examines that separation as a set of practical implementation choices.",
    sections: [
      {
        heading: "Adjusting equity exposure with futures",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Contracts to reach a target beta",
              expr: "N = [ ( β_target − β_portfolio ) ÷ β_futures ] × ( portfolio value ÷ futures contract value )",
              note: "A negative result means sell futures; a positive result means buy. The futures contract value is the price times its multiplier.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Hedging equity beta to zero, then to a target",
              prompt:
                "A $120 million portfolio has a beta of 1.08. Index futures have a contract value of $225,000 and a beta of 0.97. Find the contracts needed to reach a beta of zero, and then to reach 0.60.",
              steps: [
                "To zero: [(0 − 1.08) ÷ 0.97] × ($120m ÷ $225,000) = −1.1134 × 533.33 = −593.81.",
                "To 0.60: [(0.60 − 1.08) ÷ 0.97] × 533.33 = −0.4948 × 533.33 = −263.92.",
              ],
              answer:
                "Sell approximately 594 contracts for a full hedge, or 264 to reduce beta to 0.60. Contracts trade in whole numbers, so a small residual exposure always remains — which is why a hedge is never perfect in practice.",
            },
          },
          {
            kind: "p",
            text: "The same formula run in reverse equitises cash. A manager holding $25 million of cash who wants market exposure buys [(1.0 − 0) ÷ 0.97] × ($25m ÷ $225,000) = 114.5 contracts. Cash equitisation removes the drag of holding cash while a longer-term decision is made, and it is one of the most common uses of an overlay.",
          },
          {
            kind: "p",
            text: "Duration is managed identically with bond futures, substituting duration for beta. A $250 million bond portfolio with duration 4.2 targeting 7.5, using a futures contract priced at $132,000 with a duration of 8.6, requires [(7.5 − 4.2) ÷ 8.6] × ($250m ÷ $132,000) = 726.7 contracts bought. Buying futures lengthens duration; selling shortens it.",
          },
          {
            kind: "callout",
            label: "Why overlays rather than trading the underlying",
            body: "Futures are cheaper, faster and more liquid than the underlying basket. They avoid disturbing carefully constructed security positions, avoid realising taxable gains, and can be reversed quickly if the view changes. The costs are basis risk, margin requirements, and the operational demands of rolling contracts.",
          },
          {
            kind: "p",
            text: "Basis risk is the residual exposure that remains because the hedging instrument does not move exactly with the position being hedged. A cross hedge — using a related but non-identical instrument, such as hedging a corporate bond portfolio with Treasury futures — leaves the spread between them entirely unhedged. The minimum variance hedge ratio addresses this by scaling the hedge: correlation multiplied by the ratio of the position's volatility to the hedging instrument's. With a correlation of 0.88 and volatilities of 14% and 12%, the ratio is 1.0267, meaning slightly more than one unit of hedge per unit of exposure.",
          },
        ],
      },
      {
        heading: "The swap family",
        blocks: [
          {
            kind: "p",
            text: "Swaps let a manager change the character of a cash flow stream without moving the underlying assets. Each type addresses a different exposure.",
          },
          {
            kind: "table",
            table: {
              caption: "Swaps and what each transfers",
              headers: ["Instrument", "Exchanges", "Typical portfolio use"],
              rows: [
                ["Interest rate swap", "Fixed for floating in one currency", "Adjust duration; convert liability character"],
                ["Currency swap", "Principal and interest in two currencies", "Fund abroad; hedge a foreign liability"],
                ["Equity swap", "Equity total return for a rate", "Gain or shed exposure without trading"],
                ["Total return swap", "Full return of an asset for a rate", "Synthetic exposure; balance sheet efficiency"],
                ["Credit default swap", "Premium for default protection", "Hedge or express a credit view"],
                ["Variance swap", "Realised variance for a strike", "Pure volatility exposure without delta"],
              ],
            },
          },
          {
            kind: "p",
            text: "An interest rate swap adjusts portfolio duration directly. Paying fixed and receiving floating is economically short a fixed-rate bond, which shortens duration; receiving fixed lengthens it. For a pension manager needing to extend duration toward a long liability, receiving fixed in a long-dated swap achieves in one transaction what buying long bonds would require in size.",
          },
          {
            kind: "p",
            text: "An equity swap lets an investor shed a concentrated position's economic exposure without selling it — the investor pays the stock's total return and receives a market return or a floating rate. It defers the taxable disposal, but it introduces counterparty risk, forgoes voting rights, and its costs must be disclosed. Presenting it to a client as a cost-free way to diversify would be a misrepresentation.",
          },
          {
            kind: "p",
            text: "A swaption is an option on a swap and is used where the need is contingent. A payer swaption gives the right to pay fixed and gains value when rates rise; a receiver swaption gives the right to receive fixed and gains when rates fall. A pension expecting to receive a large contribution in six months might buy a receiver swaption to lock in today's ability to extend duration, without committing if the contribution does not arrive.",
          },
          {
            kind: "p",
            text: "Credit default swaps transfer default risk without transferring the bond. Buying protection is economically short credit; selling protection is long credit without funding a purchase. A manager who wants to reduce credit exposure quickly across a portfolio can buy index protection far faster than selling individual bonds, and reverse it as cheaply.",
          },
        ],
      },
      {
        heading: "Option strategies and their arithmetic",
        blocks: [
          {
            kind: "p",
            text: "Option strategies at Level III are examined through their payoff profiles and the circumstances that make each appropriate. The arithmetic is straightforward and worth being able to produce quickly.",
          },
          {
            kind: "table",
            table: {
              caption: "The core strategies",
              headers: ["Strategy", "Construction", "View expressed"],
              rows: [
                ["Covered call", "Long stock, short call", "Neutral to modestly bullish; income"],
                ["Protective put", "Long stock, long put", "Bullish but seeking downside protection"],
                ["Collar", "Long stock, long put, short call", "Protection funded by capped upside"],
                ["Bull call spread", "Long low strike, short high strike", "Moderately bullish, cost capped"],
                ["Bear put spread", "Long high strike, short low strike", "Moderately bearish, cost capped"],
                ["Long straddle", "Long call and put at one strike", "Large move expected, direction unknown"],
                ["Short straddle", "Short call and put at one strike", "Range-bound market expected"],
              ],
            },
          },
          {
            kind: "example",
            example: {
              title: "A collar's payoff bounds",
              prompt:
                "A stock trades at $62. A $58 put costs $1.80 and a $68 call is written for $1.55. Find the net cost, maximum loss and maximum gain.",
              steps: [
                "Net cost: $1.80 − $1.55 = $0.25 paid.",
                "Maximum loss: the stock can fall to the $58 put strike, a $4.00 decline, plus the $0.25 net premium = $4.25.",
                "Maximum gain: the stock can rise to the $68 call strike, a $6.00 gain, less the $0.25 net premium = $5.75.",
              ],
              answer:
                "Net cost $0.25, maximum loss $4.25, maximum gain $5.75. The two bounds sum to $10.00, exactly the distance between the strikes — which is the check that the arithmetic is right.",
            },
          },
          {
            kind: "figure",
            figure: {
              caption:
                "A collar's payoff: protected below the put strike, capped above the call strike, unchanged in between.",
              alt: "A payoff line that is flat at the left, rises through a middle region, then flattens at the right.",
              svg: `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="40" y1="100" x2="425" y2="100" stroke="var(--border)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="40" y1="20" x2="40" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <path d="M50 138 L150 138 L300 52 L415 52" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
  <line x1="150" y1="40" x2="150" y2="150" stroke="var(--ats-green)" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="300" y1="40" x2="300" y2="150" stroke="var(--ats-red)" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="112" y="34" font-size="10" fill="var(--ats-green)">put 58</text>
  <text x="278" y="34" font-size="10" fill="var(--ats-red)">call 68</text>
  <text x="52" y="132" font-size="10" fill="var(--text-muted)">max loss 4.25</text>
  <text x="322" y="46" font-size="10" fill="var(--text-muted)">max gain 5.75</text>
  <text x="330" y="162" font-size="10" fill="var(--text-muted)">stock price</text>
</svg>`,
            },
          },
          {
            kind: "p",
            text: "A zero-cost collar sets the strikes so the premiums offset exactly. It is not genuinely costless — the price is the upside surrendered above the call strike. Where the collar is tight enough to remove substantially all economic exposure, several jurisdictions treat it as a constructive sale and tax it accordingly, which defeats the deferral the structure was built to achieve.",
          },
          {
            kind: "p",
            text: "A covered call writer earns premium and caps the upside, which suits a holder who is neutral on the stock and wants income. The risk is asymmetric in an unhelpful direction: the downside remains almost fully intact while the upside is surrendered. Writing calls against a position the manager would not want to sell at the strike is a common and avoidable error.",
          },
        ],
      },
      {
        heading: "The Greeks in portfolio management",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Delta — sensitivity to the underlying. A delta-neutral book is insensitive to small moves in either direction.",
              "Gamma — the rate at which delta changes. Long options are long gamma; short options are short gamma.",
              "Vega — sensitivity to implied volatility. Long options are long vega regardless of direction.",
              "Theta — time decay. Long options pay theta daily; short options collect it.",
              "Rho — sensitivity to interest rates, generally the least significant of the five.",
            ],
          },
          {
            kind: "p",
            text: "The practical relationship worth carrying is that gamma and theta trade against each other. A long option position gains from movement in either direction and pays for that with daily decay. A short option position collects decay and carries negative gamma — which is why selling options generates steady income until a large move produces a loss that exceeds years of premium.",
          },
          {
            kind: "p",
            text: "A delta hedge neutralises first-order exposure but decays as the underlying moves and as time passes, requiring continual rebalancing. Delta can be hedged with the underlying; gamma and vega cannot, because a position in the underlying has zero gamma by construction. Neutralising those requires trading other options.",
          },
          {
            kind: "p",
            text: "A variance swap provides pure volatility exposure without the delta an option position carries, which makes it a cleaner instrument for a manager whose view is genuinely about volatility rather than direction. The dealer bears the rebalancing burden, priced into the strike.",
          },
        ],
      },
      {
        heading: "Currency management",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Domestic-currency return on a foreign asset",
              expr: "R_domestic = ( 1 + R_foreign ) × ( 1 + R_currency ) − 1",
              note: "A 6.5% foreign return with a 2.8% currency appreciation gives 9.482%, not the 9.3% the simple sum suggests. The cross-product matters at larger magnitudes.",
            },
          },
          {
            kind: "p",
            text: "The hedge ratio is a policy decision that belongs in the IPS, and the plausible range runs from fully unhedged to fully hedged with a strategic neutral position frequently set at 50%. Bond portfolios are hedged more commonly than equity portfolios, because currency volatility typically exceeds a bond's own volatility while representing a smaller share of an equity's.",
          },
          {
            kind: "table",
            table: {
              caption: "Approaches to currency exposure",
              headers: ["Approach", "Description"],
              rows: [
                ["Passive full hedge", "Maintain a constant hedge ratio, rebalanced mechanically"],
                ["Discretionary hedging", "Manager may deviate from the neutral ratio within limits"],
                ["Active currency management", "Currency treated as a separate return source"],
                ["Currency overlay", "A specialist manager handles currency across the whole portfolio"],
              ],
            },
          },
          {
            kind: "p",
            text: "Hedging cost is approximately the interest rate differential, which follows directly from covered interest parity rather than from any charge a dealer imposes. Hedging a currency whose interest rate is below the domestic rate therefore earns positive carry; hedging a higher-rate currency costs carry. That relationship, not a forecast, is what determines the cash cost of the hedge.",
          },
          {
            kind: "p",
            text: "Emerging market currencies present specific difficulties. Forward markets may be illiquid or non-existent, non-deliverable forwards may be the only instrument available, and the return distribution is negatively skewed — long periods of stability punctuated by sharp devaluations. A hedging programme calibrated on historical volatility will systematically understate the risk it is meant to address.",
          },
          {
            kind: "callout",
            label: "A hedge is not free of risk",
            body: "A forward hedge must be rolled, and the roll rate is not known in advance. A hedge sized to the position's value becomes mismatched as that value moves, requiring rebalancing. And a hedge that gains when the underlying loses still requires cash to settle — a currency hedge on an illiquid asset can create a genuine liquidity call at exactly the wrong moment.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Beta adjustment formula", def: "N = [(β_target − β_portfolio) ÷ β_futures] × (portfolio value ÷ contract value)." },
      { term: "Cash equitisation", def: "Using futures to give cash market exposure while a longer-term decision is pending." },
      { term: "Basis risk", def: "Residual exposure because the hedging instrument does not move exactly with the position." },
      { term: "Cross hedge", def: "Hedging with a related but non-identical instrument, leaving the spread unhedged." },
      { term: "Minimum variance hedge ratio", def: "Correlation times the ratio of position volatility to hedging instrument volatility." },
      { term: "Payer swaption", def: "The right to pay fixed in a swap; gains value when rates rise." },
      { term: "Receiver swaption", def: "The right to receive fixed; gains value when rates fall." },
      { term: "Zero-cost collar", def: "Strikes chosen so premiums offset; the cost is the surrendered upside." },
      { term: "Constructive sale", def: "A hedge tight enough that tax authorities treat it as a disposal." },
      { term: "Variance swap", def: "Pure volatility exposure without the delta an option carries." },
      { term: "Non-deliverable forward", def: "A cash-settled currency forward used where the currency is not freely deliverable." },
    ],
    takeaways: [
      "The beta and duration overlay formulas are the same structure with the risk measure swapped.",
      "Whole-contract rounding means a futures hedge always leaves a small residual exposure.",
      "Cash equitisation removes cash drag while a longer-term allocation decision is made.",
      "A cross hedge leaves the spread between instruments entirely unhedged.",
      "Paying fixed in a swap shortens duration; receiving fixed lengthens it.",
      "A collar's max loss and max gain sum to the distance between the strikes.",
      "Gamma and theta trade against each other — short options collect decay and carry gap risk.",
      "Hedging cost is the interest rate differential, following from covered interest parity.",
    ],
  },
];

// Questions live in cfa-l3-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const derivQuestionsL3: Question[] = [];
