// ============================================================
// Certus — CFA Level II Equity Valuation readings
//
// WHY THIS FILE EXISTS: a concept audit found the Level II equity
// chapters covered DDM, FCFF/FCFE, residual income and basic multiples
// competently — but PRIVATE COMPANY VALUATION was entirely absent.
// Zero matches for: private company, control premium, marketability,
// excess earnings method, capitalised cash flow method, guideline public
// company method, guideline transaction method, blockage factor.
// Also zero: Molodovsky effect, franchise value, the PRAT growth model,
// country risk premium, unlevering beta, continuing residual income.
//
// The Level II equity target is 236, the largest on the track. Two
// chapters follow: one on the discount rate, growth analysis and the
// multiples material the existing chapters skip, one on private company
// valuation in full.
//
// Every number in every worked example was computed in Python first.
// The Molodovsky example is the one that makes the point: the same
// $31.50 share price is 78.75x trough earnings and 15.0x normalised
// earnings. Same company, same day, two utterly different conclusions.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const equityChaptersL2: Chapter[] = [
  // ----------------------------------------------------------
  {
    id: "cfa-l2-equity-discount-growth",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    title: "The Discount Rate, Growth Analysis, and Multiples in Practice",
    readingMinutes: 21,
    summary:
      "Building a required return three ways, decomposing growth with PRAT, and the multiple adjustments — normalisation, the Molodovsky effect, harmonic means — that separate a usable comparison from a misleading one.",
    intro:
      "Two inputs dominate every equity valuation: the rate at which cash flows are discounted, and the rate at which they are assumed to grow. Small changes in either move the answer more than any refinement elsewhere in the model. This reading builds both carefully, then turns to the practical adjustments that make multiples comparable across companies.",
    sections: [
      {
        heading: "Three routes to a required return",
        blocks: [
          {
            kind: "p",
            text: "CAPM is the default: the risk-free rate plus beta times the equity risk premium. It requires a reliable beta, which requires a traded price history — so it fails for private companies and strains for recently listed ones.",
          },
          {
            kind: "p",
            text: "The build-up method replaces beta with additive premia. Start with the risk-free rate, add an equity risk premium, then add a size premium and a company-specific premium. It is the standard approach for private companies precisely because it needs no regression.",
          },
          {
            kind: "formula",
            formula: {
              label: "The build-up method",
              expr: "r = risk-free rate + equity risk premium + size premium + company-specific premium",
              note: "With 4.2% risk-free, a 5.0% equity risk premium, a 3.5% size premium and a 2.0% specific premium, the required return is 14.7%.",
            },
          },
          {
            kind: "p",
            text: "The bond yield plus risk premium method is cruder still: take the company's own long-term debt yield and add an equity premium of typically three to five percentage points. Its virtue is that it anchors to a market-observed rate for the same issuer, which automatically embeds the market's view of that company's risk.",
          },
          {
            kind: "callout",
            label: "Country risk premium",
            body: "For emerging markets, CAPM is often extended by adding a country risk premium to the equity risk premium. With a 4.2% risk-free rate, a beta of 1.15, a 5.0% equity risk premium and a 2.8% country risk premium, the required return is 4.2 + 1.15 × 7.8 = 13.17%. Note the CRP is inside the bracket, so beta scales it — an alternative convention adds it outside, and a question will specify which.",
          },
        ],
      },
      {
        heading: "Beta for a company that has none",
        blocks: [
          {
            kind: "p",
            text: "A private company or a recently spun-off division has no usable return history. The standard solution is to borrow a comparable public company's beta, strip out that comparable's capital structure, and reapply the subject's own.",
          },
          {
            kind: "formula",
            formula: {
              label: "Unlevering and relevering beta",
              expr: "β_unlevered = β_levered ÷ [ 1 + ( 1 − t ) × D/E ]     then     β_relevered = β_unlevered × [ 1 + ( 1 − t ) × D/E ]",
              note: "Unlever using the COMPARABLE's tax rate and leverage; relever using the SUBJECT's. Mixing them is the classic error.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Transferring a beta between capital structures",
              prompt:
                "A comparable has a levered beta of 1.35, a debt-to-equity ratio of 0.60 and a 25% tax rate. The subject company has a D/E of 0.40 and a 30% tax rate. Find the subject's beta.",
              steps: [
                "Unlever: 1.35 ÷ [1 + (1 − 0.25) × 0.60] = 1.35 ÷ 1.45 = 0.93103.",
                "Relever: 0.93103 × [1 + (1 − 0.30) × 0.40] = 0.93103 × 1.28 = 1.19172.",
              ],
              answer:
                "The subject's beta is approximately 1.19. It is below the comparable's 1.35 because the subject carries less leverage, which is exactly what the procedure is designed to capture.",
            },
          },
          {
            kind: "p",
            text: "The unlevered beta is sometimes called the asset beta, because it reflects business risk stripped of financial risk. Where several comparables exist, the usual practice is to unlever each, take a median or mean of the asset betas, and relever that — which reduces the influence of any single comparable's idiosyncratic estimate.",
          },
        ],
      },
      {
        heading: "Decomposing growth",
        blocks: [
          {
            kind: "p",
            text: "The sustainable growth rate is retention times return on equity. That is correct but uninformative, because it does not say where the ROE comes from. The PRAT model decomposes it into four drivers an analyst can forecast separately.",
          },
          {
            kind: "formula",
            formula: {
              label: "The PRAT model",
              expr: "g = Profit margin × Retention × Asset turnover × Financial leverage",
              note: "The last three terms are the DuPont decomposition of ROE, so PRAT is simply sustainable growth with ROE expanded.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Growth from its components",
              prompt:
                "A company has a net profit margin of 8.2%, a retention ratio of 60%, asset turnover of 0.95 and a financial leverage ratio of 1.8. Compute the sustainable growth rate.",
              steps: [
                "Multiply the four terms: 0.082 × 0.60 × 0.95 × 1.8.",
                "That gives 0.08413, or approximately 8.41%.",
              ],
              answer:
                "Sustainable growth is about 8.41%. The decomposition matters because it exposes the source: growth resting on rising leverage is far more fragile than growth resting on margin or turnover improvement.",
            },
          },
          {
            kind: "callout",
            label: "The analytical payoff",
            body: "A company sustaining 8% growth through a leverage ratio climbing from 1.4 to 1.8 has bought its growth with balance sheet capacity that will eventually run out. PRAT makes that visible where a single ROE figure conceals it.",
          },
        ],
      },
      {
        heading: "Normalising earnings and the Molodovsky effect",
        blocks: [
          {
            kind: "p",
            text: "A P/E computed on cyclical trough earnings is enormous, and one computed on peak earnings is tiny. The Molodovsky effect names this: P/E ratios move inversely to the cycle because earnings are more volatile than prices. It is the single most reliable way to misvalue a cyclical company.",
          },
          {
            kind: "example",
            example: {
              title: "The same price, two conclusions",
              prompt:
                "A cyclical company's shares trade at $31.50. Trough EPS is $0.40; normalised mid-cycle EPS is estimated at $2.10. Compare the two multiples.",
              steps: [
                "On reported trough earnings: $31.50 ÷ $0.40 = 78.75.",
                "On normalised earnings: $31.50 ÷ $2.10 = 15.00.",
              ],
              answer:
                "The stock is either at 78.75 times earnings or 15.0 times, depending on which denominator is used. Same company, same day. Screening on reported P/E would reject it as absurdly expensive at exactly the point in the cycle when it is cheapest.",
            },
          },
          {
            kind: "figure",
            figure: {
              caption:
                "The Molodovsky effect: reported P/E peaks at the earnings trough and bottoms at the earnings peak, because price is smoother than earnings.",
              alt: "Two curves in antiphase — an earnings cycle and a reported P/E ratio moving inversely to it.",
              svg: `<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="45" y1="150" x2="425" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="45" y1="16" x2="45" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <path d="M50 60 C 110 34, 160 40, 210 88 C 260 132, 320 138, 420 96" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
  <path d="M50 110 C 110 130, 160 126, 210 74 C 260 30, 320 26, 420 62" fill="none" stroke="var(--ats-red)" stroke-width="2.5"/>
  <text x="60" y="52" font-size="10" fill="var(--primary)">earnings</text>
  <text x="60" y="126" font-size="10" fill="var(--ats-red)">reported P/E</text>
  <text x="222" y="66" font-size="10" fill="var(--ats-red)">P/E peaks</text>
  <text x="196" y="112" font-size="10" fill="var(--primary)">at the earnings trough</text>
</svg>`,
            },
          },
          {
            kind: "p",
            text: "Two normalisation methods appear in the curriculum. The historical average EPS method averages earnings across a full cycle. The average return on equity method multiplies average historical ROE by current book value per share, which has the advantage of reflecting the company's current size rather than its size several years ago. Where a company has grown substantially, the second method is preferable.",
          },
        ],
      },
      {
        heading: "Making multiples comparable",
        blocks: [
          {
            kind: "p",
            text: "Averaging price-earnings ratios across a peer group requires the harmonic mean, not the arithmetic mean. The arithmetic mean is distorted upward by very high multiples, because a company with a near-zero denominator produces an enormous ratio that dominates the average.",
          },
          {
            kind: "example",
            example: {
              title: "Why the mean matters",
              prompt:
                "Three comparables trade at P/E ratios of 12, 18 and 30. Compare the arithmetic and harmonic means.",
              steps: [
                "Arithmetic mean: (12 + 18 + 30) ÷ 3 = 20.0.",
                "Harmonic mean: 3 ÷ (1/12 + 1/18 + 1/30) = 3 ÷ 0.17222 = 17.42.",
              ],
              answer:
                "The arithmetic mean is 20.0 and the harmonic mean 17.42. The harmonic mean is the correct figure because it corresponds to what an equally weighted portfolio of the three would actually earn per dollar invested.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "Which multiple, and what it requires",
              headers: ["Multiple", "Use when", "Watch for"],
              rows: [
                ["P/E", "Earnings are positive and comparable", "Accounting differences; cyclicality"],
                ["P/B", "Assets are marked near value", "Intangibles absent from book"],
                ["P/S", "Earnings are negative or volatile", "Ignores cost structure and leverage"],
                ["P/CF", "Earnings quality is doubtful", "Definition varies — state which measure"],
                ["EV/EBITDA", "Capital structures differ", "Treat leases and pensions consistently"],
                ["Dividend yield", "Income is the objective", "High yield may signal a coming cut"],
              ],
            },
          },
          {
            kind: "p",
            text: "A justified multiple is derived from fundamentals rather than from peers. The justified leading P/E is the payout ratio divided by (r − g), and the justified P/B is (ROE − g) ÷ (r − g). Comparing a justified multiple with the observed one converts a ratio into an actual valuation conclusion, which a peer comparison alone cannot do — a peer group tells you a company is cheap relative to its peers, not that it is cheap.",
          },
          {
            kind: "p",
            text: "Franchise value decomposes a P/E into a tangible component and a growth component. The tangible value is 1/r, the multiple the company would command with no growth. Anything above that is the franchise value, and it exists only where the company earns a return on new investment above its cost of capital. A company growing at 10% while earning exactly its cost of capital has zero franchise value — its growth creates nothing.",
          },
        ],
      },
      {
        heading: "Residual income: the parts the base chapters skip",
        blocks: [
          {
            kind: "p",
            text: "Residual income valuation is book value plus the present value of future residual income, where residual income is net income less a charge for equity capital. It is most useful when dividends are absent and free cash flow is negative, because it front-loads value into the current book value and puts less weight on a distant terminal figure.",
          },
          {
            kind: "p",
            text: "Continuing residual income is the terminal assumption, and it carries a persistence factor between zero and one. A factor of one means residual income continues indefinitely — appropriate only for a company with a genuinely durable competitive advantage. A factor of zero means it disappears immediately, which is what competitive theory predicts in the absence of a barrier to entry. Most valuations sit between, and the choice materially affects the answer.",
          },
          {
            kind: "p",
            text: "The clean surplus relation must hold for the model to work: all changes in book value must flow through the income statement, apart from transactions with owners. Items taken directly to other comprehensive income — foreign currency translation, some pension adjustments, certain securities gains — violate it. Under IFRS and US GAAP both, these violations are common, and an analyst using a residual income model must adjust for them rather than assume they are immaterial.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Build-up method", def: "A required return from the risk-free rate plus additive equity, size and company-specific premia." },
      { term: "Bond yield plus risk premium", def: "The company's own debt yield plus an equity premium of typically three to five points." },
      { term: "Country risk premium", def: "An addition to the equity risk premium for emerging market exposure." },
      { term: "Asset beta", def: "An unlevered beta reflecting business risk stripped of financial risk." },
      { term: "PRAT model", def: "Growth as profit margin × retention × asset turnover × financial leverage." },
      { term: "Molodovsky effect", def: "P/E moving inversely to the cycle because earnings are more volatile than prices." },
      { term: "Normalised earnings", def: "Earnings adjusted to a mid-cycle level, by historical average or average ROE times current book value." },
      { term: "Harmonic mean", def: "The correct way to average price multiples across a peer group." },
      { term: "Justified multiple", def: "A multiple derived from fundamentals rather than from observed peer pricing." },
      { term: "Franchise value", def: "The portion of a P/E above 1/r, arising only where new investment earns above the cost of capital." },
      { term: "Persistence factor", def: "The rate at which continuing residual income is assumed to decay, between zero and one." },
      { term: "Clean surplus relation", def: "The requirement that all book value changes except owner transactions pass through income." },
    ],
    takeaways: [
      "CAPM needs a beta; the build-up method exists precisely for companies that do not have one.",
      "Unlever using the comparable's leverage and tax rate, relever using the subject's — mixing them is the classic error.",
      "PRAT exposes whether growth rests on margin, turnover or borrowed balance sheet capacity.",
      "The Molodovsky effect makes a cyclical look most expensive at exactly the point it is cheapest.",
      "Average multiples across peers with the harmonic mean, not the arithmetic mean.",
      "A justified multiple values the company; a peer multiple only ranks it against others.",
      "Franchise value is zero unless new investment earns above the cost of capital — growth alone creates nothing.",
      "Residual income requires clean surplus, and OCI items routinely violate it.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-equity-private-company",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    title: "Private Company Valuation",
    readingMinutes: 22,
    summary:
      "Normalising owner-controlled financials, the three valuation approaches, and the discounts and premia that convert a computed value into the value of a specific stake.",
    intro:
      "Valuing a private company differs from valuing a listed one in three ways: the financial statements are shaped by an owner who is also the manager, no market price exists to sanity-check the answer, and the value of a stake depends heavily on whether it carries control and whether it can be sold. Each of those requires an explicit adjustment, and the adjustments are where most of the marks sit.",
    sections: [
      {
        heading: "Why private company financials need normalising",
        blocks: [
          {
            kind: "p",
            text: "In an owner-managed company the line between the owner's personal finances and the company's is often deliberately blurred, usually for tax reasons. Reported earnings therefore describe the owner's arrangements rather than the business's earning power, and a buyer is purchasing the latter.",
          },
          {
            kind: "bullets",
            items: [
              "Owner compensation above or below a market rate for the role — often above, to reduce taxable profit.",
              "Personal expenses run through the company: vehicles, travel, family members on the payroll.",
              "Related-party transactions at non-market prices, such as rent paid to an entity the owner also controls.",
              "Non-recurring items presented as ordinary, or genuinely ordinary items presented as non-recurring.",
              "Assets on the balance sheet that are not required by the business, which are valued separately and added back.",
            ],
          },
          {
            kind: "p",
            text: "The direction of the adjustment depends on what is being valued. For a controlling interest, normalise fully — a buyer acquiring control can change compensation and eliminate personal expenses. For a minority interest, those adjustments may not be available, because a minority holder cannot compel the owner to change anything. That distinction is the recurring theme of the whole reading.",
          },
        ],
      },
      {
        heading: "The income approach",
        blocks: [
          {
            kind: "p",
            text: "Three income methods appear in the curriculum, and the choice among them depends on how predictable the cash flows are.",
          },
          {
            kind: "p",
            text: "The free cash flow method discounts explicitly forecast cash flows and a terminal value, exactly as for a public company. It suits a business with reasonably forecastable prospects.",
          },
          {
            kind: "formula",
            formula: {
              label: "The capitalised cash flow method",
              expr: "firm value = FCFF₁ ÷ ( WACC − g )",
              note: "A single-period model for a stable business, the private-company analogue of the Gordon growth model.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Capitalised cash flow",
              prompt:
                "A stable private business is expected to generate FCFF of $3,400,000 next year, growing at 3.5%. Its WACC is 11.5% and it carries $6,500,000 of debt. What is the equity value?",
              steps: [
                "Firm value: $3,400,000 ÷ (0.115 − 0.035) = $3,400,000 ÷ 0.08 = $42,500,000.",
                "Equity value: $42,500,000 − $6,500,000 = $36,000,000.",
              ],
              answer:
                "Equity is worth $36,000,000 before any discounts for control or marketability. Those adjustments come last, and they can change the figure substantially.",
            },
          },
          {
            kind: "p",
            text: "The excess earnings method values intangible assets as the earnings remaining after providing a fair return on working capital and fixed assets. It is used chiefly for small businesses and in litigation, and the curriculum is explicit that it is rarely appropriate for a substantial operating company.",
          },
          {
            kind: "example",
            example: {
              title: "The excess earnings method",
              prompt:
                "A business earns $850,000. Working capital of $1,200,000 requires an 8% return and fixed assets of $3,400,000 require 12%. Residual earnings grow at 4% and are capitalised at 18%. Find total value.",
              steps: [
                "Return required on working capital: $1,200,000 × 0.08 = $96,000.",
                "Return required on fixed assets: $3,400,000 × 0.12 = $408,000.",
                "Residual attributable to intangibles: $850,000 − $96,000 − $408,000 = $346,000.",
                "Intangible value: $346,000 × 1.04 ÷ (0.18 − 0.04) = $359,840 ÷ 0.14 = $2,570,286.",
                "Total: $1,200,000 + $3,400,000 + $2,570,286 = $7,170,286.",
              ],
              answer:
                "Total value is about $7,170,286, of which roughly $2.57 million is intangible. The method's weakness is that the capitalisation rate applied to residual earnings is largely a matter of judgement.",
            },
          },
        ],
      },
      {
        heading: "The market approach",
        blocks: [
          {
            kind: "p",
            text: "The market approach applies multiples drawn from comparable transactions or companies. Three variants appear, and they differ in what their multiples already embed — which determines what you must still adjust for.",
          },
          {
            kind: "table",
            table: {
              caption: "The three market methods",
              headers: ["Method", "Multiples drawn from", "Already embeds"],
              rows: [
                ["Guideline public company", "Listed comparables", "Minority, marketable pricing"],
                ["Guideline transaction", "Actual acquisitions of whole companies", "Control"],
                ["Prior transaction", "Past transactions in the subject's own stock", "Whatever those deals reflected"],
              ],
            },
          },
          {
            kind: "p",
            text: "This table is the key to the discount questions. A public company multiple reflects a minority stake in a liquid security, so valuing a controlling stake from it requires ADDING a control premium and then deducting a marketability discount. A guideline transaction multiple already reflects control, so no control premium should be added — doing so double-counts.",
          },
          {
            kind: "callout",
            label: "The most-tested trap in the reading",
            body: "Adding a control premium to a value derived from acquisition multiples is double-counting, because those multiples were paid for control. The examiner's favourite version supplies transaction multiples and asks for a controlling interest value — the correct answer applies no control premium at all.",
          },
        ],
      },
      {
        heading: "The asset-based approach",
        blocks: [
          {
            kind: "p",
            text: "The asset-based approach values the company as the fair value of its assets less liabilities. It generally produces the lowest of the three approaches for a going concern, because it captures no going-concern or intangible value.",
          },
          {
            kind: "p",
            text: "It is appropriate for holding companies, investment companies, and businesses being valued for liquidation. It is inappropriate for a service business whose value lies almost entirely in relationships and people, since those do not appear on a balance sheet.",
          },
        ],
      },
      {
        heading: "Discounts and premia",
        blocks: [
          {
            kind: "p",
            text: "A computed value is not automatically the value of a particular stake. Two adjustments convert one into the other, and the relationship between them is arithmetic rather than approximate.",
          },
          {
            kind: "formula",
            formula: {
              label: "Control premium and minority discount",
              expr: "discount for lack of control = 1 − [ 1 ÷ ( 1 + control premium ) ]",
              note: "A 25% control premium implies a 20% minority discount. A 30% premium implies 23.08%. They are two expressions of the same relationship, not independent figures.",
            },
          },
          {
            kind: "p",
            text: "The discount for lack of marketability compensates for the inability to sell readily. It depends on the prospect of an exit event, any restrictions in the shareholders' agreement, the company's size and financial health, and dividend policy — a stake paying meaningful distributions is easier to hold while illiquid.",
          },
          {
            kind: "example",
            example: {
              title: "Applying both discounts",
              prompt:
                "A valuation of $100 per share is derived on a controlling, marketable basis. A minority stake requires a 20% discount for lack of control and a 25% discount for lack of marketability. What is the stake worth per share?",
              steps: [
                "Apply the control discount: $100 × (1 − 0.20) = $80.",
                "Apply the marketability discount to that result: $80 × (1 − 0.25) = $60.",
              ],
              answer:
                "The stake is worth $60 per share. The discounts are applied MULTIPLICATIVELY and in sequence, not added. Adding them would give $55, which is wrong.",
            },
          },
          {
            kind: "figure",
            figure: {
              caption:
                "Discounts apply in sequence and multiplicatively: control first, then marketability.",
              alt: "A bar reducing from 100 to 80 to 60 across two successive discount steps.",
              svg: `<svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="40" y="30" width="300" height="26" rx="4" fill="var(--primary)" opacity="0.85"/>
  <text x="348" y="48" font-size="11" fill="var(--text-muted)">$100 control, marketable</text>
  <rect x="40" y="68" width="240" height="26" rx="4" fill="var(--primary)" opacity="0.60"/>
  <text x="288" y="86" font-size="11" fill="var(--text-muted)">$80 after 20% DLOC</text>
  <rect x="40" y="106" width="180" height="26" rx="4" fill="var(--ats-red)" opacity="0.65"/>
  <text x="228" y="124" font-size="11" fill="var(--ats-red)">$60 after 25% DLOM</text>
</svg>`,
            },
          },
          {
            kind: "p",
            text: "A blockage factor is a further discount applied to a holding in a PUBLIC company so large that selling it would move the price. It is conceptually distinct from a marketability discount, which concerns the absence of a market rather than the size of a position within one.",
          },
        ],
      },
      {
        heading: "Purpose determines method",
        blocks: [
          {
            kind: "p",
            text: "A private company valuation is always performed for a purpose, and the purpose determines the standard of value applied. Fair market value assumes a hypothetical willing buyer and seller. Investment value is the value to a specific buyer, including synergies unavailable to others. Intrinsic value is the analyst's estimate of true worth. Fair value has different meanings in financial reporting and in litigation.",
          },
          {
            kind: "p",
            text: "The same company can carry three different defensible values on the same day under three different standards, and stating which standard is being applied is a basic requirement of the engagement. An analyst who produces a number without specifying the standard has not answered the question that was asked.",
          },
          {
            kind: "p",
            text: "Under Standard V(B) the assumptions and limitations must be disclosed, and for a private company valuation those are unusually consequential: the normalisation adjustments made, the discounts applied and their basis, and the standard of value used all change the conclusion materially. A single-point valuation presented without that context overstates the precision achievable.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Normalised earnings", def: "Reported earnings adjusted for owner compensation, personal expenses and non-market related-party terms." },
      { term: "Capitalised cash flow method", def: "Single-period valuation as FCFF₁ ÷ (WACC − g) for a stable private business." },
      { term: "Excess earnings method", def: "Valuing intangibles as earnings above a fair return on working capital and fixed assets." },
      { term: "Guideline public company method", def: "Multiples from listed comparables, embedding minority and marketable pricing." },
      { term: "Guideline transaction method", def: "Multiples from actual acquisitions, which already embed control." },
      { term: "Discount for lack of control", def: "1 − [1 ÷ (1 + control premium)] — the arithmetic complement of the control premium." },
      { term: "Discount for lack of marketability", def: "Compensation for the inability to sell a private stake readily." },
      { term: "Blockage factor", def: "A discount for a public holding large enough that selling would move the price." },
      { term: "Fair market value", def: "The standard assuming a hypothetical willing buyer and seller." },
      { term: "Investment value", def: "Value to a specific buyer, including synergies unavailable to others." },
    ],
    takeaways: [
      "Normalise owner compensation, personal expenses and related-party terms before valuing anything.",
      "Full normalisation suits a controlling interest; a minority holder cannot compel those changes.",
      "Capitalised cash flow is the private analogue of Gordon growth; excess earnings suits only small businesses.",
      "Public company multiples embed minority and marketable pricing; transaction multiples embed control.",
      "Never add a control premium to a value derived from acquisition multiples — that double-counts.",
      "A 25% control premium implies a 20% minority discount; they are the same relationship stated two ways.",
      "Discounts apply multiplicatively in sequence, not additively.",
      "State the standard of value — fair market, investment or intrinsic — because the same company has different defensible values under each.",
    ],
  },
];

// Questions live in cfa-l2-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const equityQuestionsL2: Question[] = [];
