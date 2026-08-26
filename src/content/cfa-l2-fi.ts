// ============================================================
// Certus — CFA Level II Fixed Income readings
//
// WHY THIS FILE EXISTS: a concept audit found the Level II fixed income
// chapters covered spot and forward rates, Z-spread, OAS and effective
// duration competently — but several full readings were absent.
// ZERO matches for: credit default swaps, reduced-form credit models,
// term structure models (Vasicek, Cox-Ingersoll-Ross), and convertible
// bonds. The binomial interest rate tree had ONE mention; key rate
// duration had two; swap rates had seven.
//
// The Level II fixed income target is 236. Two chapters follow: one on
// the term structure and the arbitrage-free valuation of bonds with
// embedded options, one on credit analysis and credit derivatives.
//
// Every number in every worked example was computed in Python first.
// The arbitrage-free price of 1001.0819 and its implied YTM of 3.9610%
// are the internal check: a bond priced off the spot curve must have a
// yield between the two- and three-year spot rates, and it does.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const fiChaptersL2: Chapter[] = [
  // ----------------------------------------------------------
  {
    id: "cfa-l2-fi-term-structure",
    examSlug: "cfa-l2",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "The Term Structure and Bonds with Embedded Options",
    readingMinutes: 22,
    summary:
      "Spot rates, forward rates and arbitrage-free pricing, the binomial interest rate tree, and how option-adjusted spread separates a bond's credit from its optionality.",
    intro:
      "Everything in Level II fixed income rests on one idea: a bond is a portfolio of individual cash flows, each of which must be discounted at the rate appropriate to its own maturity. Pricing off a single yield to maturity is a convenient approximation that breaks the moment the curve is not flat. This reading builds the spot and forward relationships, then extends them to bonds whose cash flows depend on the path rates take.",
    sections: [
      {
        heading: "Spot rates, forward rates, and the relationship between them",
        blocks: [
          {
            kind: "p",
            text: "A spot rate is the yield on a zero-coupon bond of a given maturity. A forward rate is a rate agreed today for a period beginning in the future. The two are locked together by arbitrage: investing for three years must produce the same result as investing for two and rolling into the agreed one-year forward.",
          },
          {
            kind: "formula",
            formula: {
              label: "Extracting a forward rate from spot rates",
              expr: "( 1 + s₂ )² = ( 1 + s₁ ) × ( 1 + f₁,₁ )     so     f₁,₁ = ( 1 + s₂ )² ÷ ( 1 + s₁ ) − 1",
              note: "The notation f₁,₁ means a one-year rate beginning one year from now. The first subscript is when it starts, the second how long it runs.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Three forward rates from one curve",
              prompt:
                "One-, two- and three-year spot rates are 3.20%, 3.65% and 3.98%. Find the one-year rate one year forward, the one-year rate two years forward, and the two-year rate one year forward.",
              steps: [
                "f₁,₁ = (1.0365)² ÷ 1.0320 − 1 = 4.1020%.",
                "f₂,₁ = (1.0398)³ ÷ (1.0365)² − 1 = 4.6432%.",
                "f₁,₂ = [(1.0398)³ ÷ 1.0320]^(1/2) − 1 = 4.3722%.",
              ],
              answer:
                "The forwards are 4.1020%, 4.6432% and 4.3722%. Note that each forward exceeds the spot rate of the same maturity — which is what an upward-sloping curve implies.",
            },
          },
          {
            kind: "p",
            text: "On an upward-sloping curve, forward rates lie above spot rates, and spot rates lie above the par yield. That ordering reverses on an inverted curve. It is worth committing to memory because questions frequently test it directly rather than asking for a calculation.",
          },
          {
            kind: "callout",
            label: "A forward rate is not a forecast",
            body: "Forwards are no-arbitrage prices derived from today's curve. Empirically they are biased predictors of future spot rates, and riding the yield curve is profitable precisely when the forwards do NOT materialise. A question describing forwards as the market's expectation is testing whether you accept the premise.",
          },
        ],
      },
      {
        heading: "Arbitrage-free valuation",
        blocks: [
          {
            kind: "p",
            text: "Pricing a coupon bond at a single yield to maturity implicitly assumes every cash flow is discounted at the same rate. Arbitrage-free valuation instead discounts each cash flow at its own spot rate, which is the only approach consistent with the law of one price.",
          },
          {
            kind: "example",
            example: {
              title: "Pricing off the spot curve",
              prompt:
                "Value a three-year bond with a 4% annual coupon and $1,000 face against spot rates of 3.20%, 3.65% and 3.98%. Then find its yield to maturity.",
              steps: [
                "Year 1: $40 ÷ 1.0320 = $38.76.",
                "Year 2: $40 ÷ (1.0365)² = $37.22.",
                "Year 3: $1,040 ÷ (1.0398)³ = $925.10.",
                "Total: $1,001.08.",
                "Solving for the single rate that reproduces that price gives a YTM of 3.9610%.",
              ],
              answer:
                "The arbitrage-free price is $1,001.08 and the yield to maturity 3.9610%. The YTM sits between the two- and three-year spot rates because it is a complex weighted average of them, weighted by the present value of each cash flow.",
            },
          },
          {
            kind: "p",
            text: "If a dealer quotes a price different from the arbitrage-free value, an arbitrage exists through stripping or reconstitution: buy the bond and sell its cash flows as separate zeros, or buy the zeros and reconstitute the bond. That mechanism is what enforces the relationship in a liquid government market.",
          },
        ],
      },
      {
        heading: "The binomial interest rate tree",
        blocks: [
          {
            kind: "p",
            text: "A bond whose cash flows depend on the path of rates cannot be valued off the spot curve alone, because the issuer's or holder's decision to exercise an option depends on where rates go. The binomial interest rate tree models rates evolving up or down at each step, calibrated so that it reprices the benchmark curve exactly.",
          },
          {
            kind: "p",
            text: "Two properties matter. The tree must be arbitrage-free — it must reproduce the observed government curve — and adjacent rates at each node are related by the assumed volatility. Valuation then proceeds by backward induction: compute values at the final nodes, discount back node by node, and at each node apply any option rule before continuing.",
          },
          {
            kind: "example",
            example: {
              title: "A two-year bond on a rate tree",
              prompt:
                "The one-year rate today is 3.0%. In one year it is either 4.5% or 3.2%, each with probability one half. Value a two-year bond with a 4% annual coupon and $1,000 face.",
              steps: [
                "Value at the up node: $1,040 ÷ 1.045 = $995.22.",
                "Value at the down node: $1,040 ÷ 1.032 = $1,007.75.",
                "Add the year-one coupon at each node and discount: [0.5 × ($995.22 + $40) + 0.5 × ($1,007.75 + $40)] ÷ 1.03.",
                "That gives $1,011.15.",
              ],
              answer:
                "The bond is worth $1,011.15. For a straight bond this matches spot-curve valuation; the tree only becomes necessary once an option is embedded.",
            },
          },
          {
            kind: "figure",
            figure: {
              caption:
                "A binomial rate tree. Rates move up or down at each step, and valuation runs backward from the final nodes.",
              alt: "A two-period binomial tree of interest rates branching upward and downward from a single starting rate.",
              svg: `<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="70" y1="92" x2="190" y2="48" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="70" y1="92" x2="190" y2="136" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="190" y1="48" x2="320" y2="24" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="190" y1="48" x2="320" y2="90" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="190" y1="136" x2="320" y2="90" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="190" y1="136" x2="320" y2="158" stroke="var(--border)" stroke-width="1.5"/>
  <circle cx="70" cy="92" r="4" fill="var(--primary)"/>
  <circle cx="190" cy="48" r="4" fill="var(--primary)"/>
  <circle cx="190" cy="136" r="4" fill="var(--primary)"/>
  <circle cx="320" cy="24" r="4" fill="var(--text-muted)"/>
  <circle cx="320" cy="90" r="4" fill="var(--text-muted)"/>
  <circle cx="320" cy="158" r="4" fill="var(--text-muted)"/>
  <text x="26" y="96" font-size="10" fill="var(--text-muted)">3.0%</text>
  <text x="158" y="40" font-size="10" fill="var(--text-muted)">4.5%</text>
  <text x="158" y="152" font-size="10" fill="var(--text-muted)">3.2%</text>
  <text x="336" y="28" font-size="10" fill="var(--text-muted)">higher</text>
  <text x="336" y="94" font-size="10" fill="var(--text-muted)">middle</text>
  <text x="336" y="162" font-size="10" fill="var(--text-muted)">lower</text>
  <text x="88" y="128" font-size="10" fill="var(--primary)">value backward from the right</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Callable, putable, and convertible bonds",
        blocks: [
          {
            kind: "p",
            text: "An embedded option belongs to one party, and identifying which party holds it answers most questions about the bond's behaviour.",
          },
          {
            kind: "formula",
            formula: {
              label: "Decomposing an embedded option bond",
              expr: "callable = straight bond − call option value     putable = straight bond + put option value",
              note: "A straight bond at 102.40 with a call worth 1.85 gives a callable value of 100.55. A straight bond at 98.60 with a put worth 1.20 gives 99.80.",
            },
          },
          {
            kind: "p",
            text: "The call belongs to the issuer, who exercises when rates fall and refinancing becomes attractive. That caps the bondholder's upside, producing negative convexity: as rates fall, the callable bond's price appreciation slows and can flatten entirely near the call price. The put belongs to the holder, who exercises when rates rise, which supports the price from below.",
          },
          {
            kind: "p",
            text: "Higher interest rate volatility raises the value of any option, so it raises both the call and the put value. The consequence differs by direction: rising volatility LOWERS a callable bond's price, because the option being subtracted is worth more, and RAISES a putable bond's price. This is one of the most reliably tested points in the topic.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "Negative convexity: a callable bond's price compresses toward the call price as rates fall, while the straight bond continues to appreciate.",
              alt: "Two price-yield curves, one convex throughout and one flattening at low yields.",
              svg: `<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="50" y1="150" x2="425" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="50" y1="16" x2="50" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <path d="M60 30 C 130 62, 200 100, 300 124 C 350 134, 390 140, 418 143" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-dasharray="5 4"/>
  <path d="M60 74 C 110 76, 160 84, 220 106 C 280 126, 350 138, 418 143" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
  <line x1="55" y1="72" x2="230" y2="72" stroke="var(--ats-red)" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="236" y="76" font-size="10" fill="var(--ats-red)">call price ceiling</text>
  <text x="66" y="26" font-size="10" fill="var(--text-muted)">straight bond</text>
  <text x="120" y="100" font-size="10" fill="var(--primary)">callable</text>
  <text x="330" y="168" font-size="10" fill="var(--text-muted)">yield</text>
</svg>`,
            },
          },
          {
            kind: "p",
            text: "A convertible bond gives the holder the right to convert into a fixed number of shares. The conversion ratio determines that number, and the conversion price is par divided by the ratio. With a ratio of 25, the conversion price on a $1,000 bond is $40, and at a share price of $38 the conversion value is $950.",
          },
          {
            kind: "p",
            text: "A convertible's value is bounded below by the greater of its straight bond value and its conversion value, and it trades above that floor by the option's time value. With a straight value of $920, a conversion value of $950 and a market price of $1,015, the premium over conversion value is 6.84% and over straight value 10.33%. Deep in the money it behaves like equity; deep out of the money it behaves like a bond — which is the source of its asymmetric payoff.",
          },
        ],
      },
      {
        heading: "Spreads: nominal, Z, and option-adjusted",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Three spread measures and what each answers",
              headers: ["Spread", "Measured against", "Handles options?"],
              rows: [
                ["Nominal (G-spread)", "A single benchmark yield", "No"],
                ["Z-spread", "The entire spot curve", "No"],
                ["Option-adjusted spread", "The spot curve, via a rate tree", "Yes"],
              ],
            },
          },
          {
            kind: "p",
            text: "The Z-spread is the constant amount added to every spot rate that makes the discounted cash flows equal the market price. It improves on a nominal spread by respecting the shape of the curve, but it still assumes the cash flows are certain.",
          },
          {
            kind: "formula",
            formula: {
              label: "OAS and the option cost",
              expr: "OAS = Z-spread − option cost",
              note: "For a CALLABLE bond the option cost is positive, so OAS is below the Z-spread. For a PUTABLE bond the option cost is negative, so OAS EXCEEDS the Z-spread.",
            },
          },
          {
            kind: "p",
            text: "OAS strips out the value of the embedded option, leaving the compensation for credit and liquidity alone. That is what makes it the only spread measure suitable for comparing a callable bond with a straight one — the comparison the other two measures cannot support.",
          },
          {
            kind: "callout",
            label: "OAS depends on the volatility assumption",
            body: "Because OAS is computed on a tree calibrated to an assumed volatility, changing that assumption changes the OAS. Raising the volatility assumption raises the estimated option cost and therefore LOWERS the computed OAS for a callable bond. Two dealers can quote different OAS figures for the same bond simply by using different volatilities.",
          },
        ],
      },
      {
        heading: "Duration when cash flows are uncertain",
        blocks: [
          {
            kind: "p",
            text: "Modified duration assumes cash flows do not change when rates move, which is false for any bond with an embedded option. Effective duration is computed by actually revaluing the bond at higher and lower rates using the tree, so it captures the option's effect.",
          },
          {
            kind: "formula",
            formula: {
              label: "Effective duration and convexity",
              expr: "ED = ( PV₋ − PV₊ ) ÷ ( 2 × PV₀ × Δy )     EC = ( PV₋ + PV₊ − 2PV₀ ) ÷ ( PV₀ × Δy² )",
              note: "With PV₋ = 102.35, PV₊ = 98.20, PV₀ = 100.15 and Δy = 25bp: ED = 8.29 and EC = 399.40.",
            },
          },
          {
            kind: "p",
            text: "A callable bond's effective duration is always below that of an otherwise identical straight bond, because the call truncates the price rise when rates fall. As rates fall far enough that the call becomes near-certain, the callable bond's effective duration approaches the duration to the call date rather than to maturity.",
          },
          {
            kind: "p",
            text: "Key rate durations decompose interest rate sensitivity by maturity segment, measuring the price effect of a shift in one part of the curve while the rest holds still. They matter because a portfolio can have the right total duration and still be badly exposed to a change in curve SHAPE — a barbell and a bullet with identical duration behave very differently when the curve steepens.",
          },
        ],
      },
      {
        heading: "Term structure models",
        blocks: [
          {
            kind: "p",
            text: "Equilibrium models derive the curve from assumptions about the economy and a short-rate process. The Cox-Ingersoll-Ross model makes volatility proportional to the square root of the rate, which prevents negative rates and makes volatility rise with the level of rates. The Vasicek model assumes constant volatility, which is analytically simpler but permits negative rates — once considered a fatal flaw and later observed in several markets.",
          },
          {
            kind: "p",
            text: "Both are mean-reverting: the short rate is pulled toward a long-run level at a speed the model specifies. The practical limitation of equilibrium models is that they do not reprice the observed curve exactly, which makes them unsuitable for valuing derivatives against that curve.",
          },
          {
            kind: "p",
            text: "Arbitrage-free models such as Ho-Lee take the observed curve as an input and fit the model to it exactly. That is why they are used for valuation while equilibrium models are used for economic analysis of curve behaviour. The distinction — derived from theory versus calibrated to the market — is the point questions test.",
          },
          {
            kind: "bullets",
            items: [
              "Pure expectations: forwards equal expected future spot rates, with no premium of any kind.",
              "Local expectations: the expectations result holds only over very short horizons.",
              "Liquidity preference: a term premium rising with maturity, so an upward slope can coexist with flat rate expectations.",
              "Segmented markets: each maturity is a separate market driven by its own supply and demand.",
              "Preferred habitat: investors will leave their maturity preference, but only for sufficient compensation.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Spot rate", def: "The yield on a zero-coupon bond of a given maturity." },
      { term: "Forward rate", def: "A rate agreed today for a period beginning in the future; a no-arbitrage price, not a forecast." },
      { term: "Arbitrage-free valuation", def: "Discounting each cash flow at its own spot rate rather than at a single yield." },
      { term: "Binomial interest rate tree", def: "A calibrated model of rates moving up or down, used for path-dependent cash flows." },
      { term: "Negative convexity", def: "The compression of a callable bond's price appreciation as rates fall toward the call price." },
      { term: "Conversion ratio", def: "The number of shares a convertible bond converts into; conversion price is par divided by it." },
      { term: "Z-spread", def: "The constant addition to every spot rate that equates discounted cash flows to market price." },
      { term: "Option-adjusted spread", def: "Z-spread less the option cost; the only spread comparable across bonds with and without options." },
      { term: "Effective duration", def: "Sensitivity computed by revaluing the bond at shifted rates, capturing the option's effect." },
      { term: "Key rate duration", def: "Sensitivity to a shift in one maturity segment of the curve, holding the rest constant." },
      { term: "Cox-Ingersoll-Ross model", def: "An equilibrium model with volatility proportional to the square root of the rate, preventing negative rates." },
      { term: "Vasicek model", def: "An equilibrium model with constant volatility, which permits negative rates." },
    ],
    takeaways: [
      "On an upward-sloping curve, forwards exceed spots which exceed the par yield — the ordering reverses when inverted.",
      "A forward rate is a no-arbitrage price, and riding the curve pays precisely when forwards do not materialise.",
      "Arbitrage-free valuation discounts each cash flow at its own spot rate; YTM is a weighted average of those rates.",
      "Rising volatility lowers a callable bond's price and raises a putable bond's — the option being subtracted grows.",
      "OAS = Z-spread − option cost; for a putable bond the OAS exceeds the Z-spread.",
      "OAS depends on the assumed volatility, so two dealers can quote different figures for the same bond.",
      "Effective duration is required whenever cash flows can change; a callable bond's is always below the straight bond's.",
      "Equilibrium models are derived from theory; arbitrage-free models are calibrated to the observed curve.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-fi-credit",
    examSlug: "cfa-l2",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "Credit Analysis and Credit Default Swaps",
    readingMinutes: 21,
    summary:
      "Expected loss and the credit spread, structural versus reduced-form models, and how a credit default swap is priced, settled, and used.",
    intro:
      "Credit analysis reduces to two questions: how likely is default, and how much is lost when it happens. Everything else — models, ratings, spreads, derivatives — is machinery for estimating those two numbers or for transferring the resulting risk to somebody else.",
    sections: [
      {
        heading: "Expected loss and the credit spread",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "The core credit relationship",
              expr: "expected loss = probability of default × loss given default,  where LGD = 1 − recovery rate",
              note: "With a 2.5% default probability and a 40% recovery rate, expected loss is 0.025 × 0.60 = 1.50% per year.",
            },
          },
          {
            kind: "p",
            text: "To a first approximation the credit spread compensates for expected loss plus premia for the uncertainty of that loss and for illiquidity. That single line answers a surprising share of exam questions. Doubling the default probability with recovery unchanged roughly doubles the loss-driven component of the spread.",
          },
          {
            kind: "p",
            text: "The distinction that matters most: default is an ISSUER event, but loss severity is an ISSUE property. Senior secured paper and subordinated paper from the same borrower default at the same moment, but the senior instrument recovers more. That is why the two trade at different spreads despite identical default probability — and why questions supplying one probability and two recovery rates are testing exactly this.",
          },
        ],
      },
      {
        heading: "Structural and reduced-form models",
        blocks: [
          {
            kind: "p",
            text: "Structural models treat equity as a call option on the firm's assets, struck at the face value of debt. Default occurs when asset value falls below what is owed, and the option framework then prices both the equity and the credit risk. The insight is genuine: it explains why equity in a distressed firm retains value, and why credit and equity markets move together.",
          },
          {
            kind: "p",
            text: "The limitations are practical. Asset value and asset volatility are not directly observable, the model assumes a simple capital structure that few firms have, and it implies default can be anticipated smoothly — which real defaults, often triggered by a sudden liquidity event, contradict.",
          },
          {
            kind: "p",
            text: "Reduced-form models take the opposite approach. They make no assumption about why default happens and instead model it as a statistical event with an intensity estimated from observable data — spreads, ratings transitions, macroeconomic variables. Default arrives unexpectedly rather than as the endpoint of a declining asset value.",
          },
          {
            kind: "table",
            table: {
              caption: "The two model families",
              headers: ["", "Structural", "Reduced-form"],
              rows: [
                ["Default is", "Asset value falling below debt", "A statistical event with an intensity"],
                ["Inputs", "Asset value and volatility (unobservable)", "Observable market and macro data"],
                ["Default timing", "Predictable as assets decline", "Arrives unexpectedly"],
                ["Main weakness", "Unobservable inputs, simple structure", "No economic explanation of cause"],
              ],
            },
          },
        ],
      },
      {
        heading: "Ratings, transitions, and their limits",
        blocks: [
          {
            kind: "p",
            text: "A credit rating is an opinion on default probability, and for corporate issuers it is broadly ordinal rather than cardinal — it ranks issuers reliably without pinning down a precise probability. Ratings migrate, and a transition matrix gives the probability of moving between rating categories over a period.",
          },
          {
            kind: "p",
            text: "Transition matrices matter for valuation because a downgrade widens spreads and reduces price even without any default. A portfolio manager holding a large BBB position faces meaningful risk from migration alone, particularly at the investment-grade boundary where forced selling by mandate-constrained holders amplifies the move.",
          },
          {
            kind: "p",
            text: "The limitations deserve stating plainly. Ratings lag market prices, they are issuer-paid which creates a conflict, they proved poorly calibrated for structured products in 2008, and they say nothing about liquidity or about the volatility of the spread. An analyst who substitutes a rating for credit analysis has outsourced the judgement they were engaged to provide.",
          },
        ],
      },
      {
        heading: "Credit default swaps",
        blocks: [
          {
            kind: "p",
            text: "A credit default swap transfers credit risk without transferring the bond. The protection buyer pays a periodic premium and receives a payment if a credit event occurs. The buyer is economically short credit risk — the same exposure as being short the bond — and the seller is long, equivalent to owning the bond without funding it.",
          },
          {
            kind: "p",
            text: "Credit events are defined in the contract and typically include bankruptcy, failure to pay, and in some contracts restructuring. A determinations committee rules on whether an event has occurred, which is itself a source of dispute in ambiguous cases.",
          },
          {
            kind: "p",
            text: "Contracts trade with standardised coupons — commonly 100 basis points for investment grade and 500 for high yield — with the difference between the market spread and that fixed coupon settled as an upfront payment. This standardisation is what makes the contracts fungible and centrally clearable.",
          },
          {
            kind: "formula",
            formula: {
              label: "Upfront payment on a CDS",
              expr: "upfront ≈ ( CDS spread − fixed coupon ) × duration",
              note: "With a 300bp market spread, a 100bp coupon and a duration of 4.2, the upfront is 200bp × 4.2 = 8.4% of notional — $840,000 on $10 million.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Pricing and quoting a CDS",
              prompt:
                "A five-year CDS on an issuer trades at a 300 basis point spread with a 100 basis point standard coupon and a duration of 4.2. Compute the upfront payment on $10 million notional and the price per 100.",
              steps: [
                "Spread over coupon: 300 − 100 = 200 basis points, or 2.00%.",
                "Upfront percentage: 2.00% × 4.2 = 8.40%.",
                "On $10 million notional: $840,000, paid BY the protection buyer.",
                "Price per 100: 100 − 8.40 = 91.60.",
              ],
              answer:
                "The buyer pays $840,000 upfront plus the 100bp running coupon, and the contract is quoted at a price of 91.60. The buyer pays upfront because the market spread exceeds the fixed coupon — the protection is worth more than the coupon alone compensates.",
            },
          },
          {
            kind: "callout",
            label: "The direction that gets confused",
            body: "If the market spread EXCEEDS the fixed coupon, the protection buyer pays the upfront. If the spread is BELOW the coupon, the SELLER pays it, because the buyer is committing to a coupon richer than the risk warrants. Work out who is overpaying on the running leg and the direction follows.",
          },
          {
            kind: "p",
            text: "Settlement is usually cash: the payout is notional times (1 − recovery rate), with the recovery rate determined by an auction of the defaulted obligations. Physical settlement, in which the buyer delivers the bond and receives par, was standard historically but created difficulties when outstanding CDS notional exceeded the deliverable bonds.",
          },
        ],
      },
      {
        heading: "Using credit default swaps",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Hedging: a lender buys protection against a borrower it cannot or will not exit.",
              "Expressing a view: buying protection is a way to short credit without locating and borrowing the bond.",
              "Basis trading: exploiting a difference between the CDS spread and the cash bond spread.",
              "Curve trading: taking a view on the shape of an issuer's credit curve rather than its level.",
              "Synthetic exposure: selling protection gives long credit exposure without funding a bond purchase.",
            ],
          },
          {
            kind: "p",
            text: "The CDS basis is the CDS spread less the cash bond spread. A negative basis — CDS trading tighter than the bond — allows buying the bond and buying protection to capture the difference, which should be close to a risk-free position. Negative basis trades widened dramatically in 2008 precisely because the funding required to hold them became unavailable, which is a useful reminder that arbitrage requires balance sheet capacity.",
          },
          {
            kind: "p",
            text: "Counterparty risk is intrinsic to a CDS: protection is only as good as the seller. That exposure is at its worst when correlation between the reference entity and the protection seller is high, since both are likely to fail in the same scenario. Central clearing and collateral requirements were introduced after 2008 to address exactly this.",
          },
        ],
      },
      {
        heading: "Credit strategy and portfolio implications",
        blocks: [
          {
            kind: "p",
            text: "Spread duration measures price sensitivity to a change in credit spread, distinct from interest rate duration. A portfolio can be interest-rate hedged and still carry substantial spread risk, and confusing the two is a genuine portfolio management error rather than a definitional quibble.",
          },
          {
            kind: "p",
            text: "Spreads are widest at the trough of the cycle and tightest late in an expansion, which means credit risk is least well compensated exactly when system leverage is highest. High yield spreads move considerably more than investment grade over the cycle, so the quality decision matters more than the duration decision in credit portfolios.",
          },
          {
            kind: "p",
            text: "Correlation is the property that makes credit portfolios dangerous. Defaults cluster in recessions rather than arriving independently, so a portfolio of many issuers is far less diversified than a naive calculation implies. Structured credit products that assumed low default correlation failed for this reason in 2008, and the assumption rather than the structure was the flaw.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Loss given default", def: "One minus the recovery rate; the severity of loss when default occurs." },
      { term: "Expected loss", def: "Probability of default multiplied by loss given default." },
      { term: "Structural model", def: "A credit model treating equity as a call option on the firm's assets." },
      { term: "Reduced-form model", def: "A credit model treating default as a statistical event with an estimated intensity." },
      { term: "Transition matrix", def: "The probabilities of migrating between rating categories over a period." },
      { term: "Credit default swap", def: "A contract transferring credit risk, with the buyer paying premium for a contingent payout." },
      { term: "Credit event", def: "Bankruptcy, failure to pay, or in some contracts restructuring, as ruled on by a determinations committee." },
      { term: "Upfront payment", def: "(CDS spread − fixed coupon) × duration, paid by the buyer when the spread exceeds the coupon." },
      { term: "CDS basis", def: "The CDS spread less the cash bond spread; a negative basis invites an arbitrage requiring funding." },
      { term: "Spread duration", def: "Price sensitivity to a change in credit spread, distinct from interest rate duration." },
    ],
    takeaways: [
      "Expected loss is PD × LGD, and the spread compensates for that plus uncertainty and illiquidity premia.",
      "Default is an issuer event; loss severity is an issue property — which is why seniority changes the spread but not the default probability.",
      "Structural models explain why default happens but need unobservable inputs; reduced-form models fit data but explain nothing.",
      "Ratings lag prices, are issuer-paid, and say nothing about liquidity or spread volatility.",
      "The protection buyer pays the upfront when the market spread exceeds the fixed coupon, and receives it when it does not.",
      "A CDS payout is notional × (1 − recovery), with recovery set by auction.",
      "Spread duration and interest rate duration are different exposures; hedging one leaves the other intact.",
      "Defaults cluster in recessions, so credit portfolios are less diversified than issuer count suggests.",
    ],
  },
];

// Questions live in cfa-l2-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const fiQuestionsL2: Question[] = [];
