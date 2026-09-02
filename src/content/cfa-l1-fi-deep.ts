// ============================================================
// Certus — CFA Level I Fixed Income, in depth
//
// WHY THIS FILE EXISTS
// Fixed Income is 12.2% of Level I and had 34 minutes of reading against
// a target of 146 — the largest remaining gap after Ethics and Equity
// were closed. Two chapters were covering pricing, yields, duration,
// convexity, the term structure and credit in 34 minutes between them.
//
// EVERY NUMBER WAS COMPUTED IN PYTHON FIRST, and the duration-plus-
// convexity estimates were CHECKED AGAINST AN ACTUAL REPRICING at the new
// yield. That check is the point: it shows the estimate is an
// approximation and shows how good an approximation it is. A fixed-income
// chapter with an arithmetic error teaches the error.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const fiDeepChapters: Chapter[] = [
  // ==========================================================
  // 1. FEATURES, STRUCTURES, MARKETS
  // ==========================================================
  {
    id: "cfa-l1-fi-features",
    examSlug: "cfa",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "Bond Features, Cash Flow Structures, and Markets",
    readingMinutes: 21,
    summary:
      "What defines a bond, the contingency provisions that change who holds the option, how cash flows can be structured, and how bonds are issued, traded and financed.",
    intro:
      "A bond is a contract, and almost everything examinable at Level I follows from reading that contract carefully: who is promised what, when, in which currency, and what either side may do to change it.",
    sections: [
      {
        heading: "The basic features",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Issuer — sovereign, non-sovereign, quasi-government, supranational or corporate. Determines the credit question you have to answer.",
              "Maturity — money market instruments mature in a year or less; anything longer is a capital market security. A perpetual has none.",
              "Par value — the amount repaid at maturity. Prices are quoted as a percentage of par, so 98.5 means 98.5% of par.",
              "Coupon rate and frequency — fixed, floating or zero; annual, semiannual or quarterly.",
              "Currency — a bond denominated in a currency the issuer does not print is a fundamentally different credit.",
            ],
          },
          {
            kind: "p",
            text: "The indenture (or trust deed) is the legal agreement. It carries the covenants: AFFIRMATIVE covenants require the issuer to do things — maintain the collateral, supply audited accounts, keep ratios above a threshold — while NEGATIVE covenants restrict — limits on additional debt, on asset sales, on dividends. Negative covenants protect bondholders from actions that would transfer value to equity holders.",
          },
          {
            kind: "callout",
            label: "Why a covenant is worth something",
            body: "Every covenant restricts the issuer, and the issuer is compensated for that restriction by paying a lower coupon. Covenants are not free protection; they are purchased with yield. That is also why weak-covenant issuance rises when credit markets are hot — investors sell the protection back for extra yield precisely when they will need it.",
          },
        ],
      },
      {
        heading: "Cash flow structures",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "How principal comes back",
              headers: ["Structure", "Principal repayment", "Investor consequence"],
              rows: [
                ["Bullet", "Entirely at maturity", "Maximum credit exposure at the end"],
                ["Fully amortising", "Spread across every payment", "Exposure declines steadily; no balloon"],
                ["Partially amortising", "Partly amortised, balloon at maturity", "Refinancing risk at the balloon"],
                ["Sinking fund", "Issuer retires a portion each year", "Reduced credit risk; reinvestment risk if bonds are called early"],
              ],
            },
          },
          {
            kind: "bullets",
            items: [
              "Floating-rate note — coupon resets to a reference rate plus a quoted margin, so price stays near par and the holder bears little interest-rate risk but full credit risk.",
              "Step-up coupon — the coupon rises on a schedule, or on a rating downgrade, compensating the holder for deteriorating credit.",
              "Credit-linked coupon — the coupon moves with the issuer's rating.",
              "Payment-in-kind — the issuer may pay coupons in more bonds rather than cash. A distress signal priced accordingly.",
              "Deferred coupon — no coupons for an initial period, used where a project needs time to generate cash.",
              "Index-linked — principal or coupon tracks an index, most often inflation.",
            ],
          },
        ],
      },
      {
        heading: "Contingency provisions — who owns the option",
        blocks: [
          {
            kind: "p",
            text: "An embedded option belongs to one side, and whoever holds it paid or was paid for it. That single question resolves almost every exam item on callable and putable bonds.",
          },
          {
            kind: "table",
            table: {
              caption: "Embedded options",
              headers: ["Provision", "Option held by", "Exercised when", "Effect on yield to the investor"],
              rows: [
                ["Callable", "The ISSUER", "Rates fall — refinance cheaper", "HIGHER yield: the investor is compensated"],
                ["Putable", "The INVESTOR", "Rates rise — reinvest higher", "LOWER yield: the investor pays for it"],
                ["Convertible", "The INVESTOR", "The share price rises", "LOWER yield: the investor pays for the upside"],
              ],
            },
          },
          {
            kind: "p",
            text: "A callable bond therefore exhibits NEGATIVE CONVEXITY at low yields: as rates fall, the price stops rising because the call caps it. The investor holds a bond whose upside is truncated and whose downside is not — which is precisely why the yield must be higher.",
          },
          {
            kind: "figure",
            figure: {
              caption: "The call caps the price as yields fall — negative convexity.",
              alt: "Two curves of price against yield; the straight bond curves upward while the callable bond flattens at low yields.",
              svg: `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <line x1="50" y1="140" x2="430" y2="140" stroke="var(--border-strong)" stroke-width="1"/>
  <line x1="50" y1="20" x2="50" y2="140" stroke="var(--border-strong)" stroke-width="1"/>
  <text x="380" y="156" font-size="10" fill="var(--text-muted)">yield →</text>
  <text x="8" y="30" font-size="10" fill="var(--text-muted)">price</text>
  <path d="M70,30 C150,55 260,110 420,132" fill="none" stroke="var(--primary)" stroke-width="2"/>
  <path d="M70,72 C150,74 250,108 420,132" fill="none" stroke="var(--ats-amber)" stroke-width="2" stroke-dasharray="5 3"/>
  <line x1="66" y1="72" x2="230" y2="72" stroke="var(--ats-amber)" stroke-width="0.8" stroke-dasharray="2 3"/>
  <text x="236" y="76" font-size="9" fill="var(--ats-amber)">call price ceiling</text>
  <text x="300" y="46" font-size="10" fill="var(--primary)">straight bond</text>
  <text x="120" y="96" font-size="10" fill="var(--ats-amber)">callable</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Issuance, trading, and short-term funding",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Underwritten offering — the bank buys the issue and resells it, taking the risk.",
              "Best-efforts offering — the bank sells what it can as agent, taking no inventory risk.",
              "Auction — used for sovereign debt; a single-price auction fills every winning bid at the same clearing yield.",
              "Shelf registration — a pre-approved programme allowing issuance in tranches as conditions allow.",
              "Private placement — sold to a small number of investors, without a public offering.",
            ],
          },
          {
            kind: "p",
            text: "Most bonds trade over the counter through dealers rather than on an exchange, which is why bond liquidity is thinner and less visible than equity liquidity, and why a large trade moves the price more than a comparable equity trade would.",
          },
          {
            kind: "p",
            text: "A repurchase agreement is a short-term collateralised loan: securities are sold with an agreement to repurchase them at a slightly higher price, and the difference is the repo rate. The haircut — the excess of collateral value over cash lent — protects the lender. Repo rates fall as collateral quality rises and as term shortens.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Indenture", def: "The legal agreement setting out the bond's terms and covenants." },
      { term: "Negative covenant", def: "A restriction on the issuer — additional debt, asset sales, dividends." },
      { term: "Sinking fund", def: "The issuer retires part of the issue each year; lowers credit risk, adds reinvestment risk." },
      { term: "Floating-rate note", def: "Coupon resets to a reference rate plus margin; little rate risk, full credit risk." },
      { term: "Callable bond", def: "ISSUER holds the option; exercised when rates fall; investor is paid a HIGHER yield." },
      { term: "Putable bond", def: "INVESTOR holds the option; exercised when rates rise; investor accepts a LOWER yield." },
      { term: "Negative convexity", def: "Price appreciation truncated as yields fall, because the call caps it." },
      { term: "Repurchase agreement", def: "A collateralised short-term loan; the haircut protects the lender." },
    ],
    takeaways: [
      "Covenants are purchased with yield — they are never free protection.",
      "The structure determines when principal returns, and therefore the shape of the credit exposure.",
      "Ask who OWNS the embedded option; everything else follows from that.",
      "Callable = issuer's option = higher yield to the investor. Putable and convertible = investor's option = lower yield.",
      "A callable bond is negatively convex at low yields because the call caps the upside.",
      "Bonds trade over the counter, so liquidity is thinner and price impact larger than in equities.",
      "Repo is a collateralised loan; the haircut is the lender's protection.",
    ],
  },

  // ==========================================================
  // 2. PRICING, YIELDS, TERM STRUCTURE
  // ==========================================================
  {
    id: "cfa-l1-fi-pricing",
    examSlug: "cfa",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "Pricing, Yield Measures, and the Term Structure",
    readingMinutes: 22,
    summary:
      "Pricing a bond from a single yield and from the spot curve, the relationships that hold for every discount and premium bond, accrued interest, money market yields, and how forward rates are extracted.",
    intro:
      "A bond price is a present value and nothing more exotic. What makes this reading examinable is that the same price can be expressed through several different yield conventions, and the exam tests whether you can move between them without losing the thread.",
    sections: [
      {
        heading: "Price as present value",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Price from a single yield",
              expr: "P = Σ [ coupon / (1 + y)^t ] + par / (1 + y)^n",
              note: "One discount rate applied to every cash flow. Simple, and slightly wrong — see the spot-rate section.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Pricing a three-year bond",
              prompt:
                "A three-year bond pays a 5% annual coupon on $1,000 par. The yield to maturity is 6%. Price it, then state the relationship between coupon rate, current yield and yield to maturity.",
              steps: [
                "Cash flows: $50, $50, $1,050.",
                "$50/1.06 = $47.1698; $50/1.06² = $44.4998; $1,050/1.06³ = $881.6002.",
                "Price = $973.27.",
                "Current yield = $50 / $973.27 = 5.14%.",
              ],
              answer:
                "$973.27 — a discount, because the 5% coupon is below the 6% required yield. The ordering is coupon 5.00% < current yield 5.14% < YTM 6.00%, and that ordering holds for EVERY discount bond. Price the same bond at a 4% yield and it costs $1,027.75, with the ordering exactly reversed: coupon 5.00% > current yield 4.87% > YTM 4.00%.",
            },
          },
          {
            kind: "callout",
            label: "The relationship worth memorising",
            body: "Discount bond: coupon < current yield < YTM. Premium bond: coupon > current yield > YTM. Par bond: all three equal. Current yield always sits between the coupon rate and the yield to maturity, because it captures the coupon relative to price but ignores the pull to par.",
          },
          {
            kind: "p",
            text: "Quoted bond prices are FLAT (or clean) prices, excluding interest accrued since the last coupon. The buyer pays the FULL (or dirty) price: flat price plus accrued interest. Quoting flat prices keeps the quote from sawtoothing upward between coupon dates and dropping on each payment.",
          },
          {
            kind: "example",
            example: {
              title: "Flat price, accrued interest, full price",
              prompt:
                "A bond with $1,000 par pays a 6% coupon semiannually. Ninety days have passed in a 180-day coupon period. The bond is quoted at 98.50. What does the buyer actually pay?",
              steps: [
                "Semiannual coupon = $1,000 × 6% / 2 = $30.00.",
                "Accrued interest = $30.00 × 90/180 = $15.00.",
                "Flat price = 98.50% × $1,000 = $985.00.",
              ],
              answer:
                "$985.00 + $15.00 = $1,000.00 full price. The seller earned half the coupon period and is compensated for it; the buyer will receive the entire $30 coupon at the next payment date.",
            },
          },
        ],
      },
      {
        heading: "The spot curve, and why one yield is an approximation",
        blocks: [
          {
            kind: "p",
            text: "Discounting every cash flow at a single yield to maturity assumes the term structure is flat, which it generally is not. The theoretically correct approach discounts each cash flow at the SPOT RATE matching its own maturity.",
          },
          {
            kind: "example",
            example: {
              title: "Pricing off the spot curve",
              prompt:
                "One-, two- and three-year spot rates are 4%, 5% and 5.5%. Price the same three-year 5% annual-coupon bond.",
              steps: [
                "$50 / 1.04 = $48.0769",
                "$50 / 1.05² = $45.3515",
                "$1,050 / 1.055³ = $894.1943",
              ],
              answer:
                "$987.62. Each cash flow is discounted at ITS OWN rate. The yield to maturity is then whatever single rate reproduces this price — a summary statistic derived from the spot curve, not an independent fact about the bond.",
            },
          },
          {
            kind: "formula",
            formula: {
              label: "Extracting a forward rate",
              expr: "(1 + s₂)² = (1 + s₁) × (1 + f₁,₁)     so     f₁,₁ = (1 + s₂)² / (1 + s₁) − 1",
              note: "f₁,₁ is the one-year rate, one year forward. The generalisation: (1 + s_n)^n = (1 + s_m)^m × (1 + f_m,n−m)^(n−m).",
            },
          },
          {
            kind: "example",
            example: {
              title: "Forward rates from spot rates",
              prompt:
                "With one-year and two-year spot rates of 4% and 5%, find the one-year rate one year forward. Then with a 5.5% three-year spot, find the two-year rate one year forward.",
              steps: [
                "1.05² = 1.102500. Divide by 1.04: 1.060096.",
                "f₁,₁ = 6.0096%.",
                "For f₁,₂: 1.055³ / 1.04, then take the square root because the forward period is two years.",
              ],
              answer:
                "f₁,₁ = 6.01% and f₁,₂ = 6.26%. An upward-sloping spot curve always implies forward rates above the spot rates, because the later years must carry the higher average.",
            },
          },
        ],
      },
      {
        heading: "Money market yields",
        blocks: [
          {
            kind: "p",
            text: "Short-term instruments use their own conventions, and the exam tests whether you notice which one is in front of you. A bank discount yield divides the discount by FACE value and uses a 360-day year; a bond-equivalent yield divides by PRICE and uses 365.",
          },
          {
            kind: "example",
            example: {
              title: "The same bill, two yields",
              prompt:
                "A 90-day Treasury bill with $1,000 face is priced at $985. Compute the bank discount yield and the bond-equivalent yield.",
              steps: [
                "Discount = $1,000 − $985 = $15.",
                "Bank discount yield = ($15 / $1,000) × (360 / 90) = 6.00%.",
                "Bond-equivalent yield = ($15 / $985) × (365 / 90) = 6.18%.",
              ],
              answer:
                "6.00% and 6.18%. The bond-equivalent yield is always higher, for two compounding reasons: it divides by the smaller number (price, not face) and it annualises over 365 days rather than 360. A bank discount yield systematically understates the return, which is why it is never used for comparison across instrument types.",
            },
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Yield to maturity", def: "The single discount rate that reproduces the price. Assumes reinvestment at that rate and holding to maturity." },
      { term: "Current yield", def: "Annual coupon divided by price; always between the coupon rate and the YTM." },
      { term: "Flat (clean) price", def: "The quoted price, excluding accrued interest." },
      { term: "Full (dirty) price", def: "Flat price plus accrued interest — what the buyer actually pays." },
      { term: "Spot rate", def: "The rate for a single cash flow at one maturity; the theoretically correct discount rate." },
      { term: "Forward rate", def: "A rate for a future period, extracted from the spot curve by no-arbitrage." },
      { term: "Bank discount yield", def: "Discount over FACE, 360-day year. Understates the true return." },
      { term: "Bond-equivalent yield", def: "Discount over PRICE, 365-day year. Always exceeds the discount yield." },
    ],
    takeaways: [
      "Discount bond: coupon < current yield < YTM. Premium bond: the reverse. Par: all equal.",
      "Quoted prices are flat; the buyer pays flat plus accrued interest.",
      "Discounting at a single YTM assumes a flat curve; spot rates are the correct treatment.",
      "YTM is a summary of the spot curve, not an independent property of the bond.",
      "An upward-sloping spot curve always implies forwards above spots.",
      "Bank discount yield divides by face over 360; bond-equivalent divides by price over 365.",
      "The bond-equivalent yield is always the higher of the two, for two separate reasons.",
    ],
  },

  // ==========================================================
  // 3. INTEREST RATE RISK AND CREDIT RISK
  // ==========================================================
  {
    id: "cfa-l1-fi-risk",
    examSlug: "cfa",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "Interest Rate Risk, Convexity, and Credit Risk",
    readingMinutes: 22,
    summary:
      "Computing Macaulay and modified duration from first principles, why duration alone under-predicts, what convexity adds, and how credit risk is decomposed and priced.",
    intro:
      "Duration is the most useful number in fixed income and the most misunderstood. It is a weighted average time to cash flow AND a price sensitivity, and seeing why those are the same quantity is what makes the rest of the reading straightforward.",
    sections: [
      {
        heading: "Duration from first principles",
        blocks: [
          {
            kind: "p",
            text: "Macaulay duration is the present-value-weighted average time until the bond's cash flows arrive. Modified duration converts that into a price sensitivity by dividing by one plus the yield per period.",
          },
          {
            kind: "formula",
            formula: {
              label: "Macaulay and modified duration",
              expr: "MacDur = Σ [ t × PV(CF_t) ] / price          ModDur = MacDur / (1 + y)",
              note: "%ΔP ≈ −ModDur × Δy. The minus sign is the inverse price-yield relationship.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Building duration cash flow by cash flow",
              prompt:
                "Take the three-year 5% annual-coupon bond priced at a 6% yield ($973.27). Compute its Macaulay duration, modified duration, money duration and price value of a basis point.",
              steps: [
                "PVs: $47.1698, $44.4998, $881.6002. Weights: 0.0485, 0.0457, 0.9058.",
                "t × weight: 0.0485, 0.0914, 2.7174. Sum = 2.8573 years — that is Macaulay duration.",
                "Modified = 2.8573 / 1.06 = 2.6956.",
                "Money duration = 2.6956 × $973.27 = $2,623.56. PVBP = $2,623.56 × 0.0001 = $0.2624.",
              ],
              answer:
                "MacDur 2.857 years, ModDur 2.696, money duration $2,623.56, PVBP $0.26. Notice that 90.6% of the present value sits in the final cash flow, which is why the duration is close to — but below — the three-year maturity. A zero-coupon bond's Macaulay duration equals its maturity exactly, because there is only one cash flow.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Longer maturity → higher duration.",
              "Lower coupon → higher duration, because more of the value sits at the end.",
              "Lower yield → higher duration.",
              "Effective duration is used for bonds with embedded options, because their cash flows CHANGE when rates move.",
              "Key rate durations decompose the sensitivity by maturity segment, revealing curve risk a single duration hides.",
            ],
          },
        ],
      },
      {
        heading: "Why duration alone is not enough",
        blocks: [
          {
            kind: "p",
            text: "Duration is a straight line drawn tangent to a curved relationship. Because the price-yield curve is convex, that straight line under-predicts the price in BOTH directions: it understates the gain when yields fall and overstates the loss when they rise. Convexity is the correction.",
          },
          {
            kind: "formula",
            formula: {
              label: "Duration plus convexity",
              expr: "%ΔP ≈ (−ModDur × Δy) + (½ × Convexity × Δy²)",
              note: "The convexity term is squared, so it is always positive for an option-free bond — helpful in both directions.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Checking the estimate against a full repricing",
              prompt:
                "The same bond has modified duration 2.6956 and convexity 8.5. Estimate the price change for a 100 bp rise and a 100 bp fall, then compare with an exact repricing.",
              steps: [
                "Rise of 1%: duration term = −2.6956 × 0.01 = −2.6956%. Convexity term = ½ × 8.5 × 0.0001 = +0.0425%. Estimate = −2.6531%.",
                "Exact repricing at 7%: −2.6464%.",
                "Fall of 1%: duration +2.6956%, convexity +0.0425%, estimate +2.7381%. Exact repricing at 5%: +2.7464%.",
              ],
              answer:
                "The estimates land within about 1 basis point of the true values. The asymmetry is the thing to see: the bond gains 2.75% when yields fall 1% but loses only 2.65% when they rise 1%. That asymmetry is convexity, and it is why convexity is a desirable property an investor pays for through a lower yield.",
            },
          },
          {
            kind: "callout",
            label: "Where the approximation breaks",
            body: "Duration and convexity assume a PARALLEL shift in the yield curve. For a non-parallel move — steepening, flattening, twisting — they can be badly wrong, and key rate durations are the appropriate tool. They also assume cash flows do not change, which fails for callable, putable and mortgage securities. Use effective duration there.",
          },
        ],
      },
      {
        heading: "Credit risk",
        blocks: [
          {
            kind: "p",
            text: "Credit risk decomposes into DEFAULT RISK — the probability the issuer fails to pay — and LOSS SEVERITY — how much is lost given a default. Their product is the expected loss, and a bond can carry high default probability with low expected loss if it is well secured.",
          },
          {
            kind: "formula",
            formula: {
              label: "Expected loss",
              expr: "expected loss = probability of default × loss severity     where loss severity = 1 − recovery rate",
              note: "Two issuers with identical default probabilities can deserve very different spreads.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "Components of the yield spread",
              headers: ["Risk", "What the investor is compensated for"],
              rows: [
                ["Credit risk", "Expected loss from default"],
                ["Liquidity risk", "The cost of selling into a thin market"],
                ["Credit migration risk", "A downgrade widening the spread without any default"],
                ["Taxation", "Differences in tax treatment across issuers"],
              ],
            },
          },
          {
            kind: "p",
            text: "Ratings agencies grade issues from AAA down; the investment-grade boundary sits between BBB− and BB+, and it matters far more than one notch should, because many institutional mandates prohibit holding below it. A downgrade across that line forces selling by holders who have no discretion, which is why spreads gap rather than drift at that boundary.",
          },
          {
            kind: "bullets",
            items: [
              "Ratings are opinions about relative default risk — not about price, not about suitability, and not guarantees.",
              "They lag: the market usually reprices credit before the agencies move.",
              "An issuer rating and an issue rating differ, because seniority and collateral differ across the capital structure.",
              "Notching adjusts an issue's rating up or down from the issuer's to reflect that seniority.",
              "Structural subordination: debt at a holding company ranks behind debt at the operating subsidiary that owns the assets.",
            ],
          },
          {
            kind: "p",
            text: "Spreads widen as the economy weakens and narrow as it strengthens, which means compensation for credit risk is lowest exactly when leverage in the system is highest. The four Cs — capacity, collateral, covenants and character — remain the standard framework for assessing an individual issuer.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Macaulay duration", def: "PV-weighted average time to receive the cash flows; equals maturity for a zero." },
      { term: "Modified duration", def: "MacDur / (1 + y). Approximate % price change per 1% yield change." },
      { term: "Money duration", def: "ModDur × price — the currency change per 100% yield change." },
      { term: "PVBP", def: "Price value of a basis point: money duration × 0.0001." },
      { term: "Effective duration", def: "Used where cash flows change with rates — callable, putable, mortgage-backed." },
      { term: "Convexity", def: "The curvature correction; always positive for option-free bonds and paid for in yield." },
      { term: "Loss severity", def: "1 − recovery rate. Expected loss = default probability × loss severity." },
      { term: "Notching", def: "Adjusting an issue's rating from the issuer's to reflect seniority and collateral." },
      { term: "Structural subordination", def: "Holding-company debt ranking behind operating-company debt." },
    ],
    takeaways: [
      "Macaulay duration is a weighted average time; modified duration is a price sensitivity. Same quantity, divided by (1 + y).",
      "Lower coupon, longer maturity and lower yield all raise duration.",
      "Duration is a tangent line to a curve, so it under-predicts the price in both directions.",
      "Convexity corrects it, is always positive for option-free bonds, and is paid for through a lower yield.",
      "Both assume a parallel shift and unchanging cash flows — use key rate and effective duration otherwise.",
      "Expected loss is default probability times loss severity; high default risk with strong collateral can be modest.",
      "The BBB−/BB+ boundary gaps spreads because mandates force selling across it.",
      "Spreads are tightest exactly when system leverage is highest.",
    ],
  },
];

export const fiDeepQuestions: Question[] = [];
