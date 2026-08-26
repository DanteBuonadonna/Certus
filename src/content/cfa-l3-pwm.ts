// ============================================================
// Certus — CFA Level III Private Wealth Management supplement
//
// WHY THIS FILE EXISTS: the existing L3 private wealth chapter covers
// human capital and the individual IPS well (47 mentions of human
// capital). A concept audit found substantial gaps: tax drag, accrual
// equivalent returns, tax wrappers, domicile, residence versus source
// taxation, double taxation relief, family offices, philanthropy,
// business succession, capital sufficiency analysis, monetisation
// strategies and mortality risk ALL returned ZERO matches. Concentrated
// positions had three mentions and exchange funds two.
//
// Two chapters follow: one on taxation and wealth transfer, one on the
// client and family dimension.
//
// Every number in every worked example was computed in Python first.
// The tax drag comparison is the check that matters: deferred capital
// gains cost exactly 30.00% of the gain — the statutory rate — while
// annual accrual taxation at the same rate costs 46.09%. The gap is the
// entire argument for deferral.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const pwmChaptersL3: Chapter[] = [
  // ----------------------------------------------------------
  {
    id: "cfa-l3-pwm-tax-transfer",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth Management",
    title: "Taxation of Investments and Wealth Transfer",
    readingMinutes: 22,
    summary:
      "How tax regimes erode compounding, the arithmetic of deferral, cross-border residence and source rules, and the gift-versus-bequest decision.",
    intro:
      "Tax is the largest cost most private clients bear, and unlike fees it compounds asymmetrically depending on how returns are taxed. This reading builds the arithmetic of tax drag, shows why deferral is worth so much, covers the cross-border rules that apply to internationally mobile clients, and then works through wealth transfer.",
    sections: [
      {
        heading: "How returns are taxed changes everything",
        blocks: [
          {
            kind: "p",
            text: "The same statutory rate produces very different outcomes depending on when the tax is levied. Interest taxed annually as it accrues erodes the compounding base every year. Capital gains taxed only on realisation leave the full amount compounding until the position is sold.",
          },
          {
            kind: "example",
            example: {
              title: "The cost of annual taxation versus deferral",
              prompt:
                "An investment earns 8% annually for 20 years at a 30% tax rate. Compare a tax-exempt outcome, annual accrual taxation, and deferred capital gains taxation.",
              steps: [
                "Tax exempt: 1.08²⁰ = 4.6610 per unit invested.",
                "Annual accrual: the return becomes 8% × 0.70 = 5.6%, so 1.056²⁰ = 2.9736.",
                "Deferred gain: 4.6610 less 30% of the 3.6610 gain = 4.6610 − 1.0983 = 3.5627.",
              ],
              answer:
                "Tax drag under annual accrual is 1.6874, which is 46.09% of the pre-tax gain — well above the 30% statutory rate. Deferral costs exactly 1.0983, precisely 30.00% of the gain. That gap is the entire argument for deferral.",
            },
          },
          {
            kind: "p",
            text: "The reason annual taxation costs more than the statutory rate is compounding: each year's tax removes capital that would otherwise have earned returns in every subsequent year. The longer the horizon, the wider the gap grows. Over short horizons the two converge.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "Tax drag widens with horizon under annual taxation, while deferred taxation costs only the statutory rate on the gain.",
              alt: "Three diverging growth curves for tax-exempt, deferred and annually taxed investments.",
              svg: `<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="45" y1="150" x2="425" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="45" y1="16" x2="45" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <path d="M45 150 C 160 128, 280 84, 420 26" fill="none" stroke="var(--ats-green)" stroke-width="2.5"/>
  <path d="M45 150 C 160 134, 280 100, 420 56" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
  <path d="M45 150 C 160 140, 280 118, 420 90" fill="none" stroke="var(--ats-red)" stroke-width="2.5"/>
  <text x="300" y="22" font-size="10" fill="var(--ats-green)">tax exempt</text>
  <text x="316" y="52" font-size="10" fill="var(--primary)">deferred gain</text>
  <text x="300" y="86" font-size="10" fill="var(--ats-red)">taxed annually</text>
  <text x="330" y="168" font-size="10" fill="var(--text-muted)">years</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Accrual equivalent measures",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Accrual equivalent return and tax rate",
              expr: "R_AE = ( FV ÷ PV )^(1/n) − 1     and     T_AE = 1 − ( R_AE ÷ pre-tax return )",
              note: "The deferred case above ends at 3.5627 over 20 years, giving R_AE = 6.5587% and T_AE = 18.02% — far below the 30% statutory rate.",
            },
          },
          {
            kind: "p",
            text: "The accrual equivalent tax rate expresses what an annually levied rate would have to be to produce the same outcome. At 18.02% against a 30% statutory rate, it quantifies exactly what the deferral was worth. It falls as the horizon lengthens and as the proportion of return taxed on realisation rises.",
          },
          {
            kind: "p",
            text: "Where returns are taxed at different rates by component, a blended rate applies. With 30% of return as interest taxed at 35%, 20% as dividends at 15% and 50% as capital gains at 20%, the weighted rate is 23.5%, so an 8% pre-tax return becomes 6.12% after tax. That blended figure is what belongs in an after-tax optimisation.",
          },
        ],
      },
      {
        heading: "Tax regimes and wrappers",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "How jurisdictions tax investment income",
              headers: ["Regime", "Treatment"],
              rows: [
                ["Common progressive", "Progressive rates on ordinary income; favourable treatment for some capital income"],
                ["Heavy dividend tax", "Progressive on ordinary and dividends; some relief on gains or interest"],
                ["Heavy capital gain tax", "Progressive on ordinary and gains; relief on dividends or interest"],
                ["Heavy interest tax", "Progressive on ordinary and interest; relief on dividends or gains"],
                ["Light capital tax", "Progressive on ordinary income; little or no tax on investment income"],
                ["Flat and light", "Flat rate on ordinary income; little or no tax on investment income"],
                ["Flat and heavy", "Flat rate on ordinary income, with investment income also taxed"],
              ],
            },
          },
          {
            kind: "p",
            text: "Tax-advantaged wrappers come in two broad forms and the distinction determines where assets should sit. A tax-deferred account gives relief on contribution and taxes withdrawals — the investor and the tax authority effectively share the account in proportion to the future rate. A tax-exempt account takes after-tax contributions and levies nothing on withdrawal, so the investor owns the whole of it.",
          },
          {
            kind: "p",
            text: "That difference drives asset location. Because a tax-exempt account's growth is entirely the investor's, the highest-expected-return assets belong there. Assets generating heavily taxed income belong in tax-deferred accounts, and assets generating deferred capital gains are relatively efficient even in a taxable account, since they already benefit from deferral and from step-up rules where those exist.",
          },
          {
            kind: "callout",
            label: "The implementation levers",
            body: "Beyond location: harvest losses to shelter gains, select high-cost tax lots when selling, hold positions long enough to qualify for lower long-term rates where the distinction exists, and prefer low-turnover vehicles. Each is small in isolation and material in combination over a long horizon.",
          },
        ],
      },
      {
        heading: "Cross-border taxation",
        blocks: [
          {
            kind: "p",
            text: "Two principles determine who may tax what. Source jurisdiction taxes income arising within its borders regardless of who earns it. Residence jurisdiction taxes its residents on worldwide income regardless of where it arises. Most countries apply both, which is what creates the potential for double taxation.",
          },
          {
            kind: "p",
            text: "Residence is generally determined by physical presence or by the location of a permanent home, and the tests differ by country. Domicile is a distinct and stickier concept, often based on origin or long-term intention, and some jurisdictions levy estate tax on the basis of domicile rather than residence. A client can be resident in one country and domiciled in another, which is precisely the situation that generates complexity.",
          },
          {
            kind: "table",
            table: {
              caption: "Relief from double taxation",
              headers: ["Method", "Mechanism", "Effective rate"],
              rows: [
                ["Credit", "Residence country credits foreign tax paid", "The higher of the two rates"],
                ["Exemption", "Residence country exempts foreign income", "The source country rate"],
                ["Deduction", "Foreign tax deducted from taxable income", "Higher than either rate alone"],
              ],
            },
          },
          {
            kind: "p",
            text: "The credit method is the most common and produces an effective rate equal to the higher of the two jurisdictions' rates. The deduction method is the least favourable — it relieves only a fraction of the foreign tax, leaving the investor worse off than under either of the other two. Tax treaties between countries typically specify which method applies and frequently reduce withholding rates on cross-border dividends and interest.",
          },
        ],
      },
      {
        heading: "Wealth transfer: gift versus bequest",
        blocks: [
          {
            kind: "p",
            text: "The core wealth transfer question is whether to transfer assets during life or at death. The answer turns on relative tax rates, who bears the transfer tax, the expected growth of the asset, and the time until death.",
          },
          {
            kind: "p",
            text: "Gifting during life generally wins when the asset is expected to appreciate substantially, because all growth after the gift accrues outside the donor's estate. It also wins where the recipient faces a lower tax rate on the income the asset generates, and where the gift tax is paid by the donor — since the tax payment itself removes further value from the taxable estate.",
          },
          {
            kind: "example",
            example: {
              title: "Comparing the two routes",
              prompt:
                "An asset worth 1.0 grows 7% for 15 years. Gifting costs a 25% gift tax paid by the donor; a bequest attracts 40% estate tax. Compare what the heir receives per unit of donor cost.",
              steps: [
                "Gift: the heir receives 1.0 growing to 1.07¹⁵ = 2.7590, at a total donor cost of 1.25.",
                "That is 2.7590 ÷ 1.25 = 2.2072 per unit of donor cost.",
                "Bequest: the donor retains 1.25, which grows to 1.25 × 2.7590 = 3.4488, then loses 40%: 2.0693.",
              ],
              answer:
                "The gift delivers 2.2072 per unit of donor cost against 2.0693 for the bequest. The gift wins here because removing future appreciation from the estate outweighs the rate difference — and paying the gift tax during life further reduces the taxable estate.",
            },
          },
          {
            kind: "p",
            text: "The comparison reverses where the asset is not expected to appreciate, where the recipient faces a higher tax rate, or where a step-up in cost basis at death would eliminate a large embedded capital gain. Jurisdictions offering a basis step-up create a genuine argument for holding highly appreciated assets until death.",
          },
        ],
      },
      {
        heading: "Transfer structures",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Revocable trust: the settlor retains control and can amend it; assets generally remain in the taxable estate but avoid probate.",
              "Irrevocable trust: control is surrendered, and assets are generally removed from the estate — the trade-off is irreversibility.",
              "Spendthrift provisions: restrict a beneficiary's ability to assign or pledge their interest, protecting against creditors and imprudence.",
              "Life insurance: provides liquidity to pay estate taxes and can transfer value outside the estate if properly structured.",
              "Family limited partnership: consolidates family assets and may support valuation discounts for minority and marketability.",
              "Charitable vehicles: a remainder trust pays income to individuals with the remainder to charity; a lead trust reverses that order.",
            ],
          },
          {
            kind: "p",
            text: "Generation-skipping transfers move assets to grandchildren, bypassing one round of estate tax at the child's death. Most jurisdictions that permit this impose a separate generation-skipping tax to close the gap, though exemption amounts often make partial use worthwhile.",
          },
          {
            kind: "p",
            text: "Estate planning fundamentals apply regardless of structure: a valid will controls distribution and avoids intestacy; probate is a public and sometimes slow process that trusts can bypass; and forced heirship rules in civil law jurisdictions constrain how much of an estate can be freely disposed of, which is a genuine trap for internationally mobile clients.",
          },
          {
            kind: "callout",
            label: "The adviser's boundary",
            body: "An investment adviser is not a tax lawyer. Standard V(A) requires a reasonable basis for any recommendation, and cross-border estate planning is an area where specialist counsel is generally necessary. Recommending a structure the adviser does not fully understand — or presenting a tax outcome as certain when it depends on unsettled law — falls short of the diligence and communication standards alike.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Tax drag", def: "The cumulative reduction in terminal wealth caused by taxation, which exceeds the statutory rate under annual accrual." },
      { term: "Accrual equivalent return", def: "The annual after-tax return that reproduces a given terminal value." },
      { term: "Accrual equivalent tax rate", def: "The annually levied rate that would produce the same outcome as the actual regime." },
      { term: "Tax-deferred account", def: "Relief on contribution, tax on withdrawal — effectively shared with the tax authority." },
      { term: "Tax-exempt account", def: "After-tax contributions with no tax on withdrawal; growth belongs entirely to the investor." },
      { term: "Source jurisdiction", def: "A country taxing income arising within its borders." },
      { term: "Residence jurisdiction", def: "A country taxing residents on worldwide income." },
      { term: "Domicile", def: "A stickier status than residence, often determining estate tax exposure." },
      { term: "Credit method", def: "Double-tax relief producing an effective rate equal to the higher of the two rates." },
      { term: "Deduction method", def: "The least favourable relief, leaving an effective rate above either jurisdiction's." },
      { term: "Basis step-up", def: "Resetting an asset's cost basis at death, eliminating embedded capital gains." },
      { term: "Generation-skipping transfer", def: "Transferring to grandchildren to bypass one round of estate tax." },
    ],
    takeaways: [
      "Annual taxation costs more than the statutory rate because each year's tax removes compounding capital.",
      "Deferred capital gains cost exactly the statutory rate on the gain — 30% versus 46% in the worked example.",
      "The accrual equivalent tax rate quantifies what deferral is worth: 18.02% against a 30% statutory rate.",
      "Highest-expected-return assets belong in tax-exempt wrappers, since all growth is the investor's.",
      "Source taxes where income arises; residence taxes worldwide income; domicile often governs estate tax.",
      "The credit method gives the higher of two rates; the deduction method is worse than either.",
      "Gifting wins where the asset will appreciate and the donor pays the gift tax, removing it from the estate.",
      "A basis step-up at death is the strongest argument for holding highly appreciated assets.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l3-pwm-client-family",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth Management",
    title: "Capital Sufficiency, Concentrated Positions, and the Family Dimension",
    readingMinutes: 21,
    summary:
      "Establishing whether the client has enough, managing a single dominant holding, and the governance and philanthropy questions that arise once they do.",
    intro:
      "Before recommending an allocation, an adviser needs to know whether the client's capital is sufficient for their goals — because the answer changes everything downstream. This reading covers capital sufficiency analysis, the concentrated position problem that dominates many wealthy clients' balance sheets, and the family governance and philanthropic questions that follow.",
    sections: [
      {
        heading: "Capital sufficiency",
        blocks: [
          {
            kind: "p",
            text: "Capital sufficiency analysis asks whether the client's assets can support their spending goals over their horizon. Two approaches are standard. Deterministic forecasting projects a single path using assumed returns; Monte Carlo simulation produces a distribution of outcomes and a probability of success.",
          },
          {
            kind: "p",
            text: "Monte Carlo is generally preferred because it captures sequence-of-returns risk and path dependency, both of which matter enormously when withdrawals occur during the horizon. A deterministic projection using an average return can show success while a substantial fraction of simulated paths run out of money — the average path is not the typical outcome.",
          },
          {
            kind: "example",
            example: {
              title: "Core capital and excess",
              prompt:
                "A client spends $250,000 a year in real terms and expects a 30-year horizon. The real discount rate is 3%. They hold $8.0 million. How much is core capital and how much excess?",
              steps: [
                "Present value of 30 annual payments of $250,000 at 3% real: $4,900,110.",
                "Excess capital: $8,000,000 − $4,900,110 = $3,099,890.",
              ],
              answer:
                "Core capital is about $4.90 million and excess capital about $3.10 million. Only the excess is genuinely available for gifting, philanthropy or higher-risk pursuits — and prudence usually calls for a safety margin above the computed core.",
            },
          },
          {
            kind: "p",
            text: "A mortality-weighted calculation refines this by weighting each year's spending by the probability of surviving to that year, which lowers the core capital estimate. It is more precise for a single life but understates the requirement for a couple, where the relevant horizon is the survival of the second life. Adding a safety reserve is the practical response to the estimate's sensitivity.",
          },
          {
            kind: "p",
            text: "Where capital is insufficient, the adviser has four levers and they must be discussed explicitly: spend less, work longer, take more risk, or reduce the goals. Taking more risk is the one clients reach for first and the one most likely to make the shortfall worse, because it raises the probability of the bad outcome alongside the good.",
          },
        ],
      },
      {
        heading: "Concentrated positions",
        blocks: [
          {
            kind: "p",
            text: "Many wealthy clients hold a single position representing most of their net worth — founder stock, inherited shares, an operating business, or a large property. The position carries company-specific risk that is uncompensated, and frequently correlates with the client's human capital as well.",
          },
          {
            kind: "p",
            text: "The obstacles to diversifying are rarely analytical. An embedded capital gain makes selling expensive; the endowment effect and familiarity make it emotionally difficult; the client may have control or governance reasons to retain the stake; and there may be contractual or regulatory restrictions on sale.",
          },
          {
            kind: "table",
            table: {
              caption: "Approaches to a concentrated public equity position",
              headers: ["Strategy", "Mechanism", "Principal cost"],
              rows: [
                ["Outright sale", "Sell and diversify", "Immediate tax on the gain"],
                ["Staged sale", "Sell over several years", "Continued concentration meanwhile"],
                ["Exchange fund", "Contribute to a pooled vehicle", "Long lock-up; limited control"],
                ["Collar", "Buy a put, write a call", "Forgone upside; possible constructive sale"],
                ["Prepaid variable forward", "Advance against a future delivery", "Complexity and counterparty risk"],
                ["Borrowing against the stake", "Retain and monetise", "Margin risk if the price falls"],
                ["Charitable remainder trust", "Contribute; receive income", "Irrevocable; remainder to charity"],
              ],
            },
          },
          {
            kind: "p",
            text: "The strategies differ in whether they diversify economically, defer tax, or merely provide liquidity. Borrowing against a position provides cash without diversifying the risk at all, and adds margin risk on top — a client who borrows against a concentrated stake has increased their exposure, not reduced it. That distinction is worth stating plainly to a client attracted by the absence of a tax bill.",
          },
          {
            kind: "callout",
            label: "The constructive sale trap",
            body: "Several jurisdictions treat a sufficiently tight hedge as an economic disposal and tax it accordingly. A collar with strikes close together, or a forward that eliminates substantially all risk of loss and opportunity for gain, can trigger the tax the structure was designed to defer. The strikes must leave meaningful economic exposure for the deferral to survive.",
          },
          {
            kind: "p",
            text: "A privately held business adds further difficulty: no market price, no partial liquidity, and often the client's identity bound up in the enterprise. Options include a sale to a strategic or financial buyer, a management buyout, an employee ownership structure, a recapitalisation that extracts some value while retaining control, or an eventual public offering. Succession planning belongs alongside this — most family businesses fail to transfer successfully across generations, and the reason is usually governance rather than tax.",
          },
        ],
      },
      {
        heading: "Risk management for the individual",
        blocks: [
          {
            kind: "p",
            text: "An individual's balance sheet extends beyond financial assets. Human capital — the present value of future earnings — is frequently the largest asset for a younger client, and its risk profile shapes the appropriate financial allocation. Bond-like human capital, as with tenured employment, supports a more equity-heavy financial portfolio; equity-like human capital, as with commission income or founder equity, argues for the reverse.",
          },
          {
            kind: "bullets",
            items: [
              "Earnings risk: the possibility that human capital is impaired by unemployment or disability.",
              "Premature death risk: the loss of future earnings the family depended on — addressed by life insurance.",
              "Longevity risk: outliving the portfolio — addressed by annuitisation.",
              "Property and liability risk: addressed by insurance rather than by the portfolio.",
              "Health risk: potentially the largest single unfunded liability in some jurisdictions.",
            ],
          },
          {
            kind: "p",
            text: "Annuities transfer longevity risk to an insurer. An immediate annuity begins payments at once; a deferred annuity begins later and is more efficient per dollar for pure longevity protection. Fixed annuities provide certainty at the cost of inflation exposure; variable annuities link payments to investment performance. The trade-off in every case is between guaranteed income and retained flexibility, and the insurer's own credit quality is part of the analysis.",
          },
          {
            kind: "p",
            text: "The decision to annuitise depends on the size of the guaranteed shortfall, the client's health and family longevity, their bequest motive, and their preference between certainty and control. A client with a strong bequest motive and ample capital has little reason to annuitise; a client whose essential spending is not otherwise covered has a strong one.",
          },
        ],
      },
      {
        heading: "Family governance and philanthropy",
        blocks: [
          {
            kind: "p",
            text: "Wealth that survives across generations is usually accompanied by explicit governance. A family constitution or charter records shared values, decision-making processes and conflict resolution mechanisms. A family council provides a forum separate from the operating business. Regular family meetings and deliberate education of the next generation address the most common cause of failure, which is unprepared heirs rather than poor investment returns.",
          },
          {
            kind: "p",
            text: "A single family office serves one family and provides investment management, tax and estate coordination, philanthropy administration, and often concierge services. It is expensive and generally viable only above substantial asset levels. A multi-family office spreads that cost across several families at the cost of some customisation. The decision between them is one of scale and of how much bespoke service the family genuinely requires.",
          },
          {
            kind: "p",
            text: "Philanthropy raises its own structural choices. A private foundation gives the family maximum control and perpetuity at the cost of administrative burden and, in many jurisdictions, a minimum annual distribution requirement. A donor-advised fund is simpler, cheaper and offers an immediate deduction while allowing the grant timing to be spread, but the sponsoring organisation retains legal control. Direct giving is simplest of all and suits clients without an ongoing programme.",
          },
          {
            kind: "p",
            text: "Donating appreciated securities rather than cash is frequently the most efficient route where the jurisdiction permits a deduction at fair value without taxing the embedded gain — the donor avoids the capital gains tax entirely and the charity receives the full value. It is one of the few genuinely uncontested optimisations in private wealth.",
          },
          {
            kind: "callout",
            label: "The adviser's role across the family",
            body: "Advising several members of one family creates conflicts that disclosure alone may not resolve — a trust's beneficiaries and its settlor can want opposite things, and spouses in a dispute have directly opposed interests. Identifying who the client is, in each specific engagement, remains the first question. Where interests genuinely conflict, withdrawal from one relationship may be the only adequate response.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Capital sufficiency analysis", def: "Assessing whether assets can support spending goals over the client's horizon." },
      { term: "Core capital", def: "The amount required to fund essential spending; only the excess is genuinely available." },
      { term: "Mortality weighting", def: "Weighting each year's spending by survival probability, lowering the core capital estimate." },
      { term: "Exchange fund", def: "A pooled vehicle diversifying a concentrated position in return for a long lock-up." },
      { term: "Prepaid variable forward", def: "An advance against future share delivery, providing liquidity with deferred disposal." },
      { term: "Constructive sale", def: "A hedge tight enough that tax authorities treat it as an economic disposal." },
      { term: "Charitable remainder trust", def: "A structure paying income to individuals with the remainder passing to charity." },
      { term: "Human capital", def: "The present value of future earnings, whose risk profile shapes the financial allocation." },
      { term: "Deferred annuity", def: "Payments beginning later, more efficient per dollar for pure longevity protection." },
      { term: "Single family office", def: "A dedicated organisation serving one family, viable only at substantial scale." },
      { term: "Donor-advised fund", def: "A simpler philanthropic vehicle offering an immediate deduction with flexible grant timing." },
    ],
    takeaways: [
      "Monte Carlo is preferred for capital sufficiency because it captures sequence risk a deterministic path hides.",
      "Only excess capital above core is genuinely available for gifting or higher-risk pursuits.",
      "Where capital is insufficient, the four levers are spend less, work longer, take more risk, or reduce goals — and the third usually makes it worse.",
      "Borrowing against a concentrated position monetises without diversifying and adds margin risk.",
      "A hedge tight enough to eliminate economic exposure can trigger constructive sale treatment.",
      "Bond-like human capital supports equity-heavy financial assets; equity-like human capital argues the reverse.",
      "Donating appreciated securities avoids the embedded gain entirely where the jurisdiction permits it.",
      "Family wealth usually fails through unprepared heirs and weak governance rather than poor returns.",
    ],
  },
];

// Questions live in cfa-l3-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const pwmQuestionsL3: Question[] = [];
