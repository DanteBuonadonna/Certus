// ============================================================
// Certus — CFA Level II Alternative Investments readings
//
// WHY THIS FILE EXISTS: a concept audit found the Level II alternatives
// chapter covered a cap rate example and the contango/backwardation
// distinction, and little else. Timberland and farmland returned ZERO
// matches. So did infrastructure and real estate indices. Hedge funds
// and venture capital had ONE mention each; convenience yield had three.
//
// The Level II alternatives target is 128. Two chapters follow: one on
// real estate and real assets, one on private equity, hedge funds and
// commodities.
//
// Every number in every worked example was computed in Python first.
// The private equity multiples are the check that matters: DPI of 1.68
// plus RVPI of 1.04 equals TVPI of 2.72, which equals MOIC computed
// independently as 340/125.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const altsChaptersL2: Chapter[] = [
  // ----------------------------------------------------------
  {
    id: "cfa-l2-alts-real-estate",
    examSlug: "cfa-l2",
    topicId: "alts",
    topicName: "Alternative Investments",
    title: "Real Estate and Real Assets",
    readingMinutes: 21,
    summary:
      "Building NOI, the three appraisal approaches, REIT metrics that actually mean something, and why appraisal-based indices understate risk.",
    intro:
      "Real estate is valued three ways and reported a fourth, and most of the difficulty at Level II lies in keeping those apart. This reading builds net operating income from the rent roll up, works through direct capitalisation and discounted cash flow, covers the REIT metrics that replace earnings, and then turns to infrastructure, timberland and farmland — real assets that behave differently from both property and equities.",
    sections: [
      {
        heading: "Net operating income",
        blocks: [
          {
            kind: "p",
            text: "Every property valuation starts with net operating income, and NOI has a precise definition that questions test directly. It is income after operating expenses but BEFORE financing costs, income taxes and depreciation. Deducting interest is the single most common error, and it is deliberate on the examiner's part: NOI describes the property, not the owner's financing decision.",
          },
          {
            kind: "formula",
            formula: {
              label: "Building NOI",
              expr: "potential gross income − vacancy and collection loss = effective gross income − operating expenses = NOI",
              note: "Property taxes and insurance ARE operating expenses. Mortgage interest, depreciation and income tax are NOT.",
            },
          },
          {
            kind: "example",
            example: {
              title: "NOI from the rent roll",
              prompt:
                "A property has potential gross income of $6,000,000, an expected vacancy and collection loss of 7%, and operating expenses of $1,750,000. Compute NOI.",
              steps: [
                "Vacancy loss: $6,000,000 × 0.07 = $420,000.",
                "Effective gross income: $6,000,000 − $420,000 = $5,580,000.",
                "NOI: $5,580,000 − $1,750,000 = $3,830,000.",
              ],
              answer:
                "NOI is $3,830,000. If the question then mentions $900,000 of mortgage interest, ignore it — that belongs below the NOI line.",
            },
          },
        ],
      },
      {
        heading: "Direct capitalisation",
        blocks: [
          {
            kind: "p",
            text: "The direct capitalisation approach divides a single year's NOI by a capitalisation rate drawn from comparable transactions. It is fast and it is the method most often tested numerically.",
          },
          {
            kind: "formula",
            formula: {
              label: "Direct capitalisation",
              expr: "value = NOI ÷ cap rate     and     cap rate = NOI ÷ transaction price",
              note: "A comparable selling for $40m on NOI of $2.8m implies a 7.0% cap rate. Applying a 6.5% cap rate to NOI of $4.2m gives a value of $64,615,385.",
            },
          },
          {
            kind: "p",
            text: "The cap rate is a discount rate net of expected growth, which is why it behaves like one. It rises with the real interest rate and the property risk premium, and falls with expected rental growth. Two properties with identical NOI can justify very different cap rates if one has a long lease to a strong tenant and the other faces imminent re-letting risk.",
          },
          {
            kind: "callout",
            label: "Cap rate and value move inversely",
            body: "Cap rate compression raises values without any improvement in the underlying property. A large share of real estate returns in falling-rate periods comes from exactly this, and it reverses when rates rise. An analyst who attributes compression-driven gains to management skill has misread the source of the return.",
          },
        ],
      },
      {
        heading: "The three appraisal approaches",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "How each approach works and where it fits",
              headers: ["Approach", "Method", "Best suited to"],
              rows: [
                ["Income", "Capitalise NOI or discount cash flows", "Income-producing property"],
                ["Cost", "Replacement cost less depreciation plus land", "New or unusual property with no comparables"],
                ["Sales comparison", "Adjusted prices of recent comparable sales", "Active markets with genuine comparables"],
              ],
            },
          },
          {
            kind: "p",
            text: "The cost approach sets a practical ceiling in a functioning market: nobody rationally pays more for an existing building than the cost of constructing an equivalent one. Its weakness is estimating depreciation, particularly functional and economic obsolescence, which is judgement rather than measurement.",
          },
          {
            kind: "p",
            text: "A discounted cash flow valuation projects NOI for a holding period and adds a terminal value based on a going-out cap rate applied to the NOI of the year AFTER the holding period ends. Using the final year's own NOI rather than the following year's is a frequent and expensive error. With year-five NOI of $4,800,000 growing 3% and a 7.0% terminal cap rate, the terminal value is $4,944,000 ÷ 0.07 = $70,628,571.",
          },
        ],
      },
      {
        heading: "REITs and the metrics that replace earnings",
        blocks: [
          {
            kind: "p",
            text: "Net income is close to meaningless for a REIT because depreciation is a large non-cash charge against buildings that frequently appreciate. Funds from operations was created to remove that distortion.",
          },
          {
            kind: "formula",
            formula: {
              label: "FFO and AFFO",
              expr: "FFO = net income + depreciation − gains on property sales     AFFO = FFO − recurring maintenance capex − straight-line rent adjustments",
              note: "AFFO is the better measure of sustainable distributable cash, because buildings genuinely do require ongoing capital to maintain.",
            },
          },
          {
            kind: "example",
            example: {
              title: "FFO, AFFO and the multiple",
              prompt:
                "A REIT reports net income of $180m, depreciation of $95m, gains on sales of $22m, and recurring capex of $38m, across 60 million shares trading at $52. Compute FFO, AFFO, and the P/FFO multiple.",
              steps: [
                "FFO: $180m + $95m − $22m = $253m, or $4.2167 per share.",
                "AFFO: $253m − $38m = $215m, or $3.5833 per share.",
                "P/FFO: $52 ÷ $4.2167 = 12.33.",
              ],
              answer:
                "FFO is $253m ($4.22/share), AFFO is $215m ($3.58/share), and the P/FFO multiple is 12.33. The gap between FFO and AFFO — here 15% — is the maintenance burden the headline figure conceals.",
            },
          },
          {
            kind: "p",
            text: "Net asset value per share is the other standard REIT approach: capitalise the portfolio's NOI, add other assets, subtract debt, and divide by shares. REITs trade at premiums and discounts to NAV, and the discount widens in periods when public markets reprice faster than appraisers do — which is informative rather than erroneous.",
          },
          {
            kind: "p",
            text: "REITs are required to distribute most of their taxable income, which avoids entity-level tax but leaves little retained capital. Growth therefore requires issuing equity or debt, which makes REITs unusually sensitive to capital market conditions. A REIT unable to raise equity at an acceptable price cannot grow, whatever the quality of its portfolio.",
          },
        ],
      },
      {
        heading: "Debt, leverage, and the risk that gets understated",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "The two ratios lenders use",
              expr: "loan-to-value = loan ÷ property value     debt service coverage = NOI ÷ debt service",
              note: "A DSCR below 1.0 means the property does not generate enough to service its own debt.",
            },
          },
          {
            kind: "p",
            text: "Real estate returns are commonly reported from appraisal-based indices, and appraisals are infrequent, backward-looking and anchored to prior valuations. The consequence is smoothing: reported volatility is well below true volatility, and measured correlation with equities is well below true correlation.",
          },
          {
            kind: "p",
            text: "That understatement matters directly for portfolio construction. An optimiser fed smoothed real estate returns will allocate too much to the asset class, because it appears to offer equity-like returns with bond-like volatility and low correlation. Transaction-based indices and de-smoothing techniques exist precisely to correct this, and an analyst who uses raw appraisal data without adjustment is building on a known distortion.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "Appraisal-based indices smooth returns, understating both volatility and the depth of drawdowns relative to transaction evidence.",
              alt: "A smooth curve overlaid on a more volatile curve, showing the appraisal series lagging and dampening the transaction series.",
              svg: `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="40" y1="140" x2="430" y2="140" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="40" y1="16" x2="40" y2="140" stroke="var(--border)" stroke-width="1.5"/>
  <path d="M45 90 L85 62 L120 104 L160 40 L200 118 L245 54 L290 96 L340 34 L390 82 L425 58" fill="none" stroke="var(--ats-red)" stroke-width="1.8"/>
  <path d="M45 92 C 110 84, 150 80, 200 88 C 260 96, 310 74, 425 70" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
  <text x="230" y="132" font-size="10" fill="var(--ats-red)">transaction-based</text>
  <text x="60" y="112" font-size="10" fill="var(--primary)">appraisal-based (smoothed)</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Infrastructure, timberland, and farmland",
        blocks: [
          {
            kind: "p",
            text: "Infrastructure assets are long-lived physical assets providing essential services — toll roads, airports, utilities, pipelines, communications towers. Their appeal is long-duration, often inflation-linked cash flows from assets with monopoly-like characteristics and high barriers to entry.",
          },
          {
            kind: "bullets",
            items: [
              "Brownfield investment acquires an existing operating asset: lower risk, lower return, immediate cash yield.",
              "Greenfield investment builds a new asset: construction and demand risk, higher expected return, no early cash flow.",
              "Regulatory risk is the dominant risk, since returns on regulated assets are frequently set by a regulator who can change them.",
              "Leverage is typically high, which is viable because cash flows are stable — and dangerous when they are not.",
              "Liquidity is poor and holding periods are long, often measured in decades.",
            ],
          },
          {
            kind: "p",
            text: "Timberland has an unusual property among real assets: it produces a biological return independent of markets. Trees grow whether or not prices are attractive, which gives the owner genuine optionality — harvest can be deferred when prices are poor, and the standing inventory continues to accumulate value in the meantime. Total return decomposes into biological growth, price change, and land value change.",
          },
          {
            kind: "p",
            text: "Farmland generates income from crop yields and land appreciation. Unlike timber, harvest timing is dictated by the growing season rather than by the owner, so the deferral option does not exist. Row crops and permanent crops behave differently: permanent crops such as orchards and vineyards require years of investment before producing and are far less flexible in response to price changes.",
          },
          {
            kind: "p",
            text: "All three share a common analytical profile: illiquidity, appraisal-based valuation with its attendant smoothing, meaningful inflation linkage, and low measured correlation with financial assets that is partly genuine and partly an artefact of how they are valued.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Net operating income", def: "Income after operating expenses but before financing, taxes and depreciation." },
      { term: "Capitalisation rate", def: "NOI divided by value; a discount rate net of expected growth." },
      { term: "Going-out cap rate", def: "The terminal capitalisation rate applied to the NOI of the year after the holding period." },
      { term: "Cost approach", def: "Replacement cost less depreciation plus land; sets a practical ceiling on value." },
      { term: "Funds from operations", def: "Net income plus depreciation less gains on property sales." },
      { term: "Adjusted funds from operations", def: "FFO less recurring maintenance capex and straight-line rent adjustments." },
      { term: "Debt service coverage ratio", def: "NOI divided by debt service; below 1.0 the property cannot service its own debt." },
      { term: "Appraisal smoothing", def: "The understatement of volatility and correlation caused by infrequent, anchored valuations." },
      { term: "Brownfield investment", def: "Acquisition of an existing operating infrastructure asset." },
      { term: "Greenfield investment", def: "Construction of a new infrastructure asset, carrying build and demand risk." },
      { term: "Biological growth return", def: "The component of timberland return arising from trees growing regardless of prices." },
    ],
    takeaways: [
      "NOI is before financing, taxes and depreciation — deducting mortgage interest is the classic trap.",
      "Cap rate and value move inversely; compression raises values with no improvement in the property.",
      "A terminal value uses the going-out cap rate applied to the NOI of the year AFTER the holding period.",
      "FFO removes depreciation; AFFO removes maintenance capex and is the better measure of distributable cash.",
      "REITs must distribute most income, so growth depends on capital market access rather than retained earnings.",
      "Appraisal smoothing understates volatility and correlation, and an unadjusted optimiser will overallocate.",
      "Timberland's harvest-deferral option is what distinguishes it from farmland.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-alts-pe-hedge-commodities",
    examSlug: "cfa-l2",
    topicId: "alts",
    topicName: "Alternative Investments",
    title: "Private Equity, Hedge Funds, and Commodities",
    readingMinutes: 21,
    summary:
      "PE fund mechanics and the multiples that measure them, hedge fund strategies and fee arithmetic, and why a commodity index return is not the spot return.",
    intro:
      "These three asset classes share a fee structure, an illiquidity profile, and a persistent gap between reported and realised performance. This reading covers how each actually works, how returns are measured, and where the reported numbers mislead — which at Level II is examined more often than the strategies themselves.",
    sections: [
      {
        heading: "Private equity fund structure",
        blocks: [
          {
            kind: "p",
            text: "A private equity fund is a limited partnership. The general partner manages it and the limited partners provide capital. Capital is committed rather than transferred: the GP draws it down through capital calls as investments are made, which is why an LP must hold liquidity against undrawn commitments.",
          },
          {
            kind: "p",
            text: "Fees are typically a management fee on committed capital during the investment period and carried interest of around 20% of profits. A hurdle rate or preferred return must usually be cleared before carry accrues, and a catch-up provision then allows the GP to receive a disproportionate share until the intended split is restored.",
          },
          {
            kind: "p",
            text: "A clawback provision requires the GP to return carry received on early winners if later losses mean the fund as a whole did not earn it. Whether carry is calculated deal-by-deal or on the whole fund materially changes the GP's economics and the LP's risk — whole-fund calculation is more favourable to the LP.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "The J-curve: fees and early write-downs push returns negative before realisations arrive.",
              alt: "A curve dipping below zero in early years then rising well above it in later years.",
              svg: `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="45" y1="90" x2="425" y2="90" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="45" y1="16" x2="45" y2="152" stroke="var(--border)" stroke-width="1.5"/>
  <path d="M45 90 C 80 112, 110 132, 150 134 C 200 136, 250 106, 300 74 C 350 44, 390 30, 425 24" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
  <text x="100" y="152" font-size="10" fill="var(--ats-red)">fees and write-downs</text>
  <text x="310" y="52" font-size="10" fill="var(--ats-green)">realisations</text>
  <text x="6" y="86" font-size="10" fill="var(--text-muted)">IRR</text>
  <text x="380" y="104" font-size="10" fill="var(--text-muted)">time</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Measuring private equity performance",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "The standard multiples",
              expr: "DPI = distributions ÷ paid-in     RVPI = residual value ÷ paid-in     TVPI = DPI + RVPI",
              note: "DPI is realised cash and cannot be manipulated. RVPI depends on the GP's own valuation of unrealised holdings.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Reading a fund's multiples",
              prompt:
                "A fund has drawn $125m, distributed $210m, and holds remaining assets valued at $130m. Compute DPI, RVPI, TVPI and MOIC.",
              steps: [
                "DPI = $210m ÷ $125m = 1.68.",
                "RVPI = $130m ÷ $125m = 1.04.",
                "TVPI = 1.68 + 1.04 = 2.72.",
                "MOIC = ($210m + $130m) ÷ $125m = $340m ÷ $125m = 2.72.",
              ],
              answer:
                "DPI 1.68, RVPI 1.04, TVPI 2.72, and MOIC confirms TVPI at 2.72. An LP should weight DPI heavily, because RVPI rests on the GP's marks on assets that have not been sold.",
            },
          },
          {
            kind: "p",
            text: "IRR is the headline measure and it is manipulable. Because IRR is sensitive to timing, a GP can flatter it by using a subscription credit line to defer capital calls — the LP's capital is drawn later, the holding period shortens, and the IRR rises without any improvement in the underlying investments. The multiple does not move. That divergence between a rising IRR and a static TVPI is the diagnostic.",
          },
          {
            kind: "callout",
            label: "Why public market equivalents exist",
            body: "A PE fund's IRR cannot be compared to a public index's time-weighted return, because the GP controls the timing of cash flows and the index manager does not. Public market equivalent methods replicate the fund's actual cash flow timing in an index to produce a comparable figure.",
          },
        ],
      },
      {
        heading: "Private equity strategies and value creation",
        blocks: [
          {
            kind: "p",
            text: "A leveraged buyout acquires a controlling stake in a mature company using substantial debt serviced by the target's own cash flow. Value is created through three channels, and distinguishing them is the analytical task: operational improvement, debt paydown, and multiple expansion. Only the first is unambiguously skill.",
          },
          {
            kind: "p",
            text: "Venture capital funds early-stage companies where most investments fail and returns are driven by a small number of extreme successes. The return distribution is therefore highly skewed, and a median VC fund performs poorly — which means manager selection matters far more than in public equity, and access to top-quartile funds is itself the scarce resource.",
          },
          {
            kind: "p",
            text: "Exit routes are trade sale, secondary sale to another sponsor, initial public offering, and recapitalisation. Exit conditions dominate realised returns and are largely outside the GP's control, which is a form of market timing risk embedded in every fund.",
          },
        ],
      },
      {
        heading: "Hedge funds: strategies and the reporting problem",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "The four strategy groups",
              headers: ["Group", "Examples", "Principal risk"],
              rows: [
                ["Equity hedge", "Long/short, market neutral, short bias", "Selection and factor exposure"],
                ["Event driven", "Merger arbitrage, distressed, activist", "Deal break and legal outcome"],
                ["Relative value", "Convertible arbitrage, fixed income arb", "Leverage and liquidity"],
                ["Macro and CTA", "Global macro, managed futures", "Directional and trend reversal"],
              ],
            },
          },
          {
            kind: "p",
            text: "Merger arbitrage is worth understanding specifically because its payoff shape is instructive: buy the target, short the acquirer, and collect the spread if the deal closes. It produces small steady gains and occasional large losses when deals break — the same negatively skewed profile as a carry trade, and it fails in the same risk-off conditions.",
          },
          {
            kind: "p",
            text: "Hedge fund index returns overstate the industry's actual performance through several biases operating in the same direction. Survivorship bias removes funds that closed, which are disproportionately the poor performers. Backfill bias lets a fund add its history to the index only after a good run. Self-selection means struggling funds simply stop reporting. And illiquid holdings marked infrequently produce smoothed returns that understate volatility, exactly as with real estate.",
          },
          {
            kind: "formula",
            formula: {
              label: "Fee arithmetic",
              expr: "management fee on assets + incentive fee on profits above a hurdle, subject to a high water mark",
              note: "A high water mark means no incentive fee is paid until prior losses are recovered — otherwise an investor pays twice for the same gains.",
            },
          },
          {
            kind: "p",
            text: "Fund-of-funds structures add a second fee layer on top of the underlying funds' fees, which is a substantial hurdle. The justification offered is diversification, manager access and due diligence, and whether that is worth the additional cost is the question an allocator has to answer explicitly rather than assume.",
          },
        ],
      },
      {
        heading: "Commodities and the return decomposition",
        blocks: [
          {
            kind: "p",
            text: "Commodities produce no cash flow, so a futures position's return has no dividend or coupon component. It decomposes into three parts, and the middle one is where most of the misunderstanding sits.",
          },
          {
            kind: "formula",
            formula: {
              label: "Total return on a collateralised futures position",
              expr: "total return = spot return + roll return + collateral return",
              note: "With a 4.0% spot return, a −3.7% roll return and a 2.1% collateral return, the total is 2.4% — well below the spot move.",
            },
          },
          {
            kind: "p",
            text: "Contango describes a futures curve above spot. Rolling a long position forward means selling a cheaper expiring contract and buying a dearer later one, producing a negative roll return that compounds over time. With spot at 78 and the three-month future at 81, the roll return is (78 − 81) ÷ 81 = −3.70%.",
          },
          {
            kind: "p",
            text: "Backwardation is the reverse: the futures price sits below spot, and rolling produces a positive return. With spot at 78 and the future at 75.5, the roll return is (78 − 75.5) ÷ 75.5 = +3.31%. This is why a commodity index can lose money over a period when the underlying commodity's spot price rose — a fact that surprises investors who bought the index expecting spot exposure.",
          },
          {
            kind: "p",
            text: "The theory of storage explains the curve's shape through convenience yield: the benefit of holding the physical commodity rather than a claim on it. When inventories are tight, convenience yield is high and the market is in backwardation. When inventories are ample, storage costs dominate and the market is in contango. The insurance perspective offers a complementary account, in which producers hedging forward push futures below expected spot, and speculators earn that discount as compensation for bearing the price risk.",
          },
          {
            kind: "bullets",
            items: [
              "Commodities have historically offered inflation protection, particularly energy.",
              "Correlation with financial assets is low on average but rises in inflation shocks.",
              "Storage cost, convenience yield and financing cost together determine the carry.",
              "Different sectors behave differently: energy, metals, agriculture and livestock have distinct supply dynamics.",
              "Index construction matters enormously — weighting scheme and roll methodology drive much of the return difference between commodity indices.",
            ],
          },
          {
            kind: "callout",
            label: "The suitability point",
            body: "A client wanting exposure to a rising oil price is not well served by a front-month futures index in persistent contango. Recommending one without explaining the roll drag is a communication failure under Standard V(B), and arguably a suitability problem under Standard III(C).",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Committed capital", def: "The amount an LP has agreed to provide, drawn down over time through capital calls." },
      { term: "Carried interest", def: "The GP's share of profits, typically 20%, usually subject to a hurdle rate." },
      { term: "Clawback", def: "A requirement that the GP return carry if later losses mean it was not earned overall." },
      { term: "J-curve", def: "The early negative returns from fees and write-downs before realisations arrive." },
      { term: "DPI", def: "Distributions over paid-in capital — realised cash, and not manipulable." },
      { term: "TVPI", def: "Total value over paid-in capital; the sum of DPI and RVPI." },
      { term: "Subscription credit line", def: "Borrowing that defers capital calls and flatters IRR without changing the multiple." },
      { term: "Public market equivalent", def: "A method replicating a fund's cash flow timing in an index for fair comparison." },
      { term: "Backfill bias", def: "A fund adding its prior history to an index only after a good run." },
      { term: "High water mark", def: "The requirement that prior losses be recovered before incentive fees resume." },
      { term: "Roll return", def: "The return from rolling futures forward; negative in contango, positive in backwardation." },
      { term: "Convenience yield", def: "The benefit of holding the physical commodity, highest when inventories are tight." },
    ],
    takeaways: [
      "Capital is committed and called over time, so LPs must hold liquidity against undrawn commitments.",
      "DPI is realised and reliable; RVPI depends on the GP's own marks, so weight DPI more heavily.",
      "A rising IRR alongside a static TVPI is the signature of credit-line-driven timing rather than performance.",
      "LBO value comes from operations, debt paydown and multiple expansion — only the first is clearly skill.",
      "VC returns are extremely skewed, so manager access matters more than in any public asset class.",
      "Hedge fund indices are inflated by survivorship, backfill and self-selection bias simultaneously.",
      "A commodity index return is spot plus roll plus collateral — and roll can dominate.",
      "Contango produces negative roll return; backwardation positive. Tight inventories cause backwardation via convenience yield.",
    ],
  },
];

// Questions live in cfa-l2-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const altsQuestionsL2: Question[] = [];
