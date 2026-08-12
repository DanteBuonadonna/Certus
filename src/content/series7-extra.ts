// ============================================================
// Certus — Series 7 content, wave 2
// Options, Municipal Securities, and Packaged Products.
// ============================================================

import { Chapter, Question } from "./types";

export const s7ExtraChapters: Chapter[] = [
  // OPTIONS
  {
    id: "s7-options",
    examSlug: "series-7",
    topicId: "options",
    topicName: "Options",
    title: "Options: Calls, Puts, and Basic Strategies",
    readingMinutes: 7,
    summary: "How listed options work, the four basic positions, the max gain/loss/breakeven for each, and the two core stock-plus-option strategies — with payoff diagrams and worked math.",
    intro:
      "Options are the most heavily weighted and most feared part of the Series 7, but they reward a small amount of structure enormously. A listed equity option controls 100 shares of an underlying stock, and the exam tests two things relentlessly: can you identify the rights and obligations of each party, and can you compute maximum gain, maximum loss, and breakeven? Master the four basic positions and the payoff geometry below, and the arithmetic that scares most candidates becomes mechanical.",
    sections: [
      {
        heading: "The four basic positions",
        blocks: [
          { kind: "p", text: "A call gives its buyer the right to BUY 100 shares at the strike price; a put gives its buyer the right to SELL 100 shares at the strike. For every buyer (who is 'long,' pays the premium, and holds the right) there is a seller, or writer (who is 'short,' receives the premium, and takes on the obligation). Combining the two instruments with the two sides yields the four basic positions: long call, short call, long put, short put." },
          { kind: "p", text: "Direction and the premium asymmetry are the keys. A long call profits when the stock rises; a long put profits when it falls. Sellers take the opposite view and simply want the option to expire worthless so they keep the premium. The defining asymmetry, which the exam tests endlessly, is this: an option BUYER's maximum loss is limited to the premium paid, while an option SELLER's gain is limited to the premium but their loss can be large — and for an uncovered (naked) call, theoretically unlimited, since the stock can rise without bound." },
          { kind: "callout", label: "Contract size", body: "One listed equity option = 100 shares. A premium quoted at 3 costs 3 × 100 = $300, and every per-share figure (breakeven, max gain/loss) must be multiplied by 100 to get the dollar amount per contract." },
        ],
      },
      {
        heading: "Moneyness, intrinsic value, and time value",
        blocks: [
          { kind: "p", text: "An option's premium has two components. Intrinsic value is how far in-the-money the option is right now, and it is never negative: a call is in-the-money when the stock is ABOVE the strike, a put when the stock is BELOW the strike. Everything in the premium beyond intrinsic value is time value — the market's price for the chance the option moves further into the money before it expires. Time value decays toward zero as expiration approaches (time decay) and is larger when the underlying is more volatile, because a wider range of outcomes is more valuable to a buyer whose downside is already capped at the premium." },
        ],
      },
      {
        heading: "Computing max gain, loss, and breakeven",
        blocks: [
          { kind: "p", text: "The payoff diagram is the fastest way to lock in the rules. For a long call, the position is flat at minus the premium below the strike, then climbs one-for-one once the stock clears the strike — so maximum loss is the premium, maximum gain is unlimited, and breakeven is the strike PLUS the premium. For a long put, it is the mirror image: flat at minus the premium above the strike, climbing as the stock falls below it — so maximum loss is the premium, maximum gain is the strike MINUS the premium (the stock can only fall to zero), and breakeven is the strike MINUS the premium." },
          { kind: "figure", figure: { caption: "Figure 1 — Profit at expiration for a long call and a long put. Each is flat at minus the premium where it finishes worthless, then moves one-for-one in the money. Breakeven is strike + premium for the call, strike − premium for the put. 'Call up, add; put down, subtract.'", alt: "A long call profit line rising to the right of the strike and a long put profit line rising to the left", svg: `<svg viewBox="0 0 460 250" width="100%" style="max-width:460px"><line x1="50" y1="140" x2="430" y2="140" stroke="var(--border-strong)" stroke-width="1"/><line x1="240" y1="40" x2="240" y2="210" stroke="var(--border)" stroke-dasharray="4 3"/><polyline fill="none" stroke="var(--ats-green)" stroke-width="2.5" points="60,176 240,176 430,62"/><polyline fill="none" stroke="var(--ats-red)" stroke-width="2.5" points="60,72 240,176 430,176"/><text x="240" y="226" text-anchor="middle" font-size="10" fill="var(--text-muted)">strike K</text><text x="60" y="135" font-size="9" fill="var(--text-muted)">profit 0</text><text x="408" y="56" text-anchor="end" font-size="10" fill="var(--ats-green)" font-weight="600">Long call</text><text x="78" y="66" font-size="10" fill="var(--ats-red)" font-weight="600">Long put</text><text x="245" y="190" font-size="9" fill="var(--text-muted)">−premium</text><text x="248" y="247" text-anchor="middle" font-size="10" fill="var(--text-muted)">stock price at expiration →</text></svg>` } },
          { kind: "table", table: { caption: "Table 1 — The four basic positions. Buyers have limited loss; uncovered sellers carry the heavy risk.", headers: ["Position", "Max gain", "Max loss", "Breakeven"], rows: [["Long call", "Unlimited", "Premium", "Strike + premium"], ["Short (naked) call", "Premium", "Unlimited", "Strike + premium"], ["Long put", "Strike − premium", "Premium", "Strike − premium"], ["Short put", "Premium", "Strike − premium", "Strike − premium"]] } },
          { kind: "example", example: { title: "long call max gain, loss, and breakeven", prompt: "An investor buys 1 XYZ Aug 50 call at a premium of 4. Compute the breakeven, maximum loss, and the profit if XYZ is at $60 at expiration.", steps: ["Breakeven = strike + premium = 50 + 4 = $54.", "Maximum loss = the premium = 4 × 100 = $400, no matter how far the stock falls.", "At $60: intrinsic value = 60 − 50 = $10; profit per share = 10 − 4 = $6 → $600 per contract."], answer: "Breakeven $54; max loss $400; profit at $60 is $600. Maximum gain is unlimited as the stock rises." } },
          { kind: "p", text: "Two stock-plus-option strategies appear constantly. A covered call — own 100 shares and sell a call against them — generates premium income and suits a neutral-to-mildly-bullish view; the trade-off is that the upside is capped at the strike. A protective put — own the stock and buy a put — is portfolio insurance, capping the downside at the strike while leaving the upside open, at the cost of the premium. The exam's mantra ties it together: calls up, puts down; for breakevens, 'call up, add the premium; put down, subtract the premium.'" },
        ],
      },
    ],
    keyTerms: [
      { term: "Call vs put option", def: "A call is the right to BUY 100 shares at the strike; a put is the right to SELL 100 shares at the strike." },
      { term: "Intrinsic vs time value", def: "Intrinsic value = how far in-the-money (never negative); time value = the rest of the premium, larger with volatility and decaying toward expiration." },
      { term: "Long-position max loss", def: "An option buyer's maximum loss is the premium paid; an uncovered call writer's loss is unlimited." },
      { term: "Covered call", def: "Owning stock and selling a call against it for income; caps the upside." },
      { term: "Protective put", def: "Owning stock and buying a put as downside insurance; caps the loss at the strike." },
    ],
    takeaways: [
      "One option contract = 100 shares; multiply per-share figures by 100.",
      "An option buyer's max loss is the premium; uncovered call writers face unlimited risk.",
      "Long call breakeven = strike + premium (unlimited gain); long put breakeven = strike − premium (max gain = strike − premium).",
      "Covered call = income with capped upside; protective put = downside insurance for a premium.",
    ],
  },

  // MUNICIPAL SECURITIES
  {
    id: "s7-munis",
    examSlug: "series-7",
    topicId: "munis",
    topicName: "Municipal Securities",
    title: "Municipal Securities: GO and Revenue Bonds",
    readingMinutes: 5,
    summary: "How municipal bonds are backed, their tax advantages, and the GO-versus-revenue distinction.",
    intro:
      "Municipal securities are debt issued by states, cities, and other local governments to fund public projects. Their defining feature is tax-advantaged interest, and the central exam distinction is how a given bond is backed — by taxing power or by a specific project's revenue. That difference drives the bond's risk and the kind of analysis it requires.",
    sections: [
      {
        heading: "GO versus revenue: two different credit questions",
        blocks: [
          { kind: "p", text: "Municipal issues split into two families that are analyzed in entirely different ways. A GENERAL OBLIGATION bond is backed by the issuer's full faith, credit, and TAXING POWER — repayment ultimately rests on taxpayers, which is why GO issues typically require voter approval and are constrained by statutory debt limits. A REVENUE bond is backed solely by the receipts of the facility it financed, requires no vote because no taxing power is pledged, and is generally not subject to debt limits." },
          { kind: "p", text: "The analysis follows the backing. For a GO you examine the TAX BASE: assessed valuations, debt per capita, collection trends, and the community's economic health. For a revenue bond you examine the PROJECT: the feasibility study, projected usage, and above all the DEBT SERVICE COVERAGE RATIO. If a revenue project underperforms, bondholders have no recourse to the issuer's general taxing power — the limitation that makes revenue bonds the riskier family." },
          { kind: "table", table: { caption: "The two families.", headers: ["", "General obligation", "Revenue"], rows: [["Backed by", "Full faith, credit, taxing power", "The project's receipts only"], ["Voter approval", "Usually required", "Not required"], ["Debt limits", "Applies", "Typically exempt"], ["Key figure", "Debt per capita, tax base", "Debt service coverage ratio"], ["Recourse if it fails", "Taxpayers", "None beyond the project"]] } },
        ],
      },
      {
        heading: "Tax treatment and the taxable-equivalent yield",
        blocks: [
          { kind: "p", text: "The municipal market exists because interest is generally EXEMPT from federal income tax, and interest on bonds issued in the holder's own state is usually exempt from that state's tax too. Two qualifications are heavily tested: CAPITAL GAINS on municipals remain fully taxable, and interest on certain PRIVATE ACTIVITY bonds may be subject to the alternative minimum tax." },
          { kind: "formula", formula: { label: "Taxable-equivalent yield", expr: "TEY = municipal yield ÷ (1 − marginal tax rate)", note: "Run it the other way to compare directly: taxable yield × (1 − rate) gives the after-tax yield of the taxable bond." } },
          { kind: "example", example: { title: "does the muni actually win?", prompt: "An investor in the 32% bracket compares a 4% municipal against a 5.5% corporate. Which is better after tax?", steps: ["TEY of the muni = 4% ÷ (1 − 0.32) = 4% ÷ 0.68 = 5.88%.", "The corporate's 5.5% falls short of that 5.88% breakeven.", "Check from the other side: 5.5% × 0.68 = 3.74% after tax, versus the muni's tax-free 4.00%.", "Both methods agree."], answer: "The municipal wins; the investor would need a taxable yield above 5.88% to beat it. In a 12% bracket the TEY is only 4.55% and the answer flips — suitability here is entirely a function of the client's bracket, which is why munis are unsuitable inside an IRA." } },
          { kind: "bullets", items: ["Municipal accrued interest uses 30/360, the same as corporates.", "Serial maturities are often quoted on a YIELD basis (a basis price); term bonds are quoted as a dollar price.", "The MSRB writes municipal rules but has NO enforcement power — FINRA, the SEC, and bank regulators enforce them.", "An OFFICIAL STATEMENT is the municipal analogue of a prospectus; municipals are EXEMPT from 1933 Act registration."] },
        ],
      },
    ],
    keyTerms: [
      { term: "General obligation (GO) bond", def: "Municipal bond backed by the issuer's full faith, credit, and taxing power." },
      { term: "Revenue bond", def: "Municipal bond backed only by the revenue of a specific project; no taxing power." },
      { term: "Double-barreled bond", def: "A municipal bond backed by both project revenues and taxing power." },
      { term: "Tax-equivalent yield", def: "The yield a taxable bond must offer to match a muni's after-tax yield for a given bracket." },
      { term: "Debt service coverage ratio", def: "Net project revenues relative to debt payments; a key revenue-bond safety measure." },
    ],
    takeaways: [
      "GO bonds rely on taxing power and are generally safer; revenue bonds rely on project income.",
      "Revenue bonds don't need voter approval; GO bonds often do.",
      "Most muni interest is federally tax-exempt — most valuable to high-bracket investors.",
      "Use tax-equivalent yield to compare munis against taxable bonds.",
    ],
  },

  // PACKAGED PRODUCTS
  {
    id: "s7-packaged",
    examSlug: "series-7",
    topicId: "packaged",
    topicName: "Packaged Products",
    title: "Packaged Products: Mutual Funds, ETFs, and Share Classes",
    readingMinutes: 6,
    summary: "Open- vs closed-end funds, ETFs, how funds are priced, and the sales charges behind share classes.",
    intro:
      "Packaged products pool investors' money into professionally managed portfolios — and they're a core recommendation for retail clients, so the Series 7 tests their mechanics and costs closely. The key distinctions are how each product is priced and traded, and how the various sales charges and share classes affect what the customer actually pays.",
    sections: [
      {
        heading: "Pricing: the difference that defines each vehicle",
        blocks: [
          { kind: "p", text: "Packaged products are best separated by HOW they are priced, because that single property drives most exam questions. An OPEN-END fund computes net asset value once daily after the close and fills every order at the NEXT computed NAV — forward pricing, which exists to stop traders exploiting stale prices with intraday information. A CLOSED-END fund issues a fixed share count once and then trades on an exchange at whatever price supply and demand set, which may be a persistent premium or discount to NAV." },
          { kind: "formula", formula: { label: "NAV and the public offering price", expr: "NAV = (assets − liabilities) ÷ shares outstanding          POP = NAV ÷ (1 − sales charge %)", note: "Divide, don't multiply — the sales charge is a percentage OF THE POP, not of the NAV." } },
          { kind: "example", example: { title: "POP from NAV", prompt: "A Class A fund has a NAV of $19.05 and a 5% sales charge. Find the POP.", steps: ["The 5% load is a percentage of the POP, so the NAV represents the remaining 95%.", "POP = $19.05 ÷ (1 − 0.05) = $19.05 ÷ 0.95 = $20.05.", "Check: the charge is $20.05 − $19.05 = $1.00, and $1.00 ÷ $20.05 = 5% of the POP."], answer: "$20.05. Multiplying $19.05 by 1.05 gives $20.00 — close enough to look right, wrong for exactly the reason the question exists." } },
          { kind: "table", table: { caption: "Pooled vehicles.", headers: ["Vehicle", "Bought", "Priced at", "Managed?"], rows: [["Open-end fund", "From the fund", "Next computed NAV + any load", "Yes"], ["Closed-end fund", "On an exchange", "Market price; may differ from NAV", "Yes"], ["ETF", "On an exchange, intraday", "Market price, arbitraged near NAV", "Usually indexed"], ["UIT", "From the sponsor", "NAV", "NO — fixed portfolio, terminates"], ["REIT", "Usually an exchange", "Market price", "Yes"]] } },
        ],
      },
      {
        heading: "Share classes, breakpoints, and the sales-charge rules",
        blocks: [
          { kind: "p", text: "The same portfolio is sold in classes that differ only in how distribution is paid for. CLASS A carries a front-end load with lower ongoing 12b-1 fees, and is the ONLY class receiving breakpoints — making it cheapest for large, long-held investments. CLASS B carries a contingent deferred sales charge that declines annually and eventually converts to Class A. CLASS C carries a level load: little to enter, but permanently higher annual expenses, making it the most expensive class over a long horizon." },
          { kind: "bullets", items: ["FINRA caps the mutual fund sales charge at 8.5% of the POP, and only if the fund offers breakpoints, rights of accumulation, and reinvestment at NAV.", "BREAKPOINT SELLING — placing an investment just below a breakpoint — is a violation; the representative must inform the customer.", "A LETTER OF INTENT claims a breakpoint now against a 13-month commitment, and may be backdated up to 90 days.", "RIGHTS OF ACCUMULATION count existing holdings toward the next breakpoint and never expire.", "A 12b-1 fee above 0.25% means the fund may not call itself no-load."] },
          { kind: "p", text: "REITs sit outside the Investment Company Act: a REIT owns or finances real estate and must distribute at least 90% of taxable income to keep its tax treatment, which is why it is held for income. Critically, a REIT passes through income but NOT losses — the feature separating it from a direct participation program, which passes through both." },
          { kind: "callout", label: "Annuities: who bears the risk", body: "A FIXED annuity pays a guaranteed rate from the insurer's general account, so the INSURER bears investment risk. A VARIABLE annuity invests in separate-account subaccounts the holder selects, so the CONTRACT HOLDER bears it — which is why a variable annuity is a security requiring a securities registration to sell. During accumulation the holder buys accumulation units; at annuitization these convert to annuity units, whose NUMBER is then fixed while their value continues to vary." },
        ],
      },
    ],
    keyTerms: [
      { term: "Net asset value (NAV)", def: "A fund's per-share value of holdings, calculated once daily after market close." },
      { term: "Open-end fund", def: "A mutual fund that continuously issues/redeems shares at NAV; bought at POP." },
      { term: "Closed-end fund", def: "A fund with a fixed share count that trades on an exchange at a premium or discount to NAV." },
      { term: "Breakpoint", def: "A volume discount that lowers a fund's front-end sales charge as the investment grows." },
      { term: "Class A / B / C shares", def: "Front-load / back-load / level-load share classes; the right one depends on amount and horizon." },
    ],
    takeaways: [
      "Open-end funds price once daily at NAV (buy at POP); closed-end funds and ETFs trade intraday.",
      "Forward pricing fills orders at the next NAV, not the last.",
      "Breakpoints are volume discounts; withholding them or splitting orders is a prohibited breakpoint sale.",
      "A-shares suit large long-term buys; C-shares' high ongoing fees hurt over long horizons.",
    ],
  },
];

export const s7ExtraQuestions: Question[] = [
  // Options
  {
    id: "s7-opt-q1", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 2,
    stem: "An investor buys 1 XYZ call with a strike of 50 for a premium of 4. The breakeven price at expiration is:",
    choices: ["$54", "$46", "$50"],
    answerIndex: 0,
    explanation: "For a long call, breakeven = strike + premium = 50 + 4 = $54. The stock must rise above the strike by at least the premium paid before the position turns profitable. Choice B ($46) subtracts the premium, which is the LONG PUT formula (strike − premium). Choice C ignores the premium entirely. Remember: 'call up, add the premium.'",
  },
  {
    id: "s7-opt-q2", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 2,
    stem: "What is the maximum loss for an investor who BUYS a put option?",
    choices: ["Unlimited", "The premium paid", "The strike price"],
    answerIndex: 1,
    explanation: "An option buyer's maximum loss is always the premium paid — if the option expires worthless, the buyer simply loses what they paid and nothing more. Choice A (unlimited) describes an uncovered CALL WRITER, not a buyer. Choice C (the strike) overstates it; the buyer never risks the strike amount, only the premium. The capped downside is exactly why buyers pay a premium.",
  },
  {
    id: "s7-opt-q3", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 3,
    stem: "An investor who owns 100 shares of a stock and wants to generate income while remaining neutral-to-mildly-bullish should most appropriately:",
    choices: ["Buy a protective put", "Write an uncovered call", "Write a covered call"],
    answerIndex: 2,
    explanation: "A covered call (own the stock, sell a call against it) generates premium income and fits a neutral-to-mildly-bullish view, with the trade-off of capped upside. Choice A (protective put) is downside insurance and COSTS a premium rather than generating income, fitting a worried investor. Choice B (uncovered/naked call) carries unlimited risk and isn't 'covered' by the shares — far less appropriate and much riskier.",
  },
  // Municipal
  {
    id: "s7-mun-q1", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 2,
    stem: "A municipal bond backed by the full faith, credit, and taxing power of the issuer is a:",
    choices: ["A general obligation bond", "A revenue bond backed by project income", "A double-barreled bond with dual backing"],
    answerIndex: 0,
    explanation: "A general obligation bond is backed by the issuer's taxing power and full faith and credit, generally making it lower-risk. Choice B (revenue bond) is backed ONLY by a specific project's income, with no taxing power. Choice C (double-barreled) is backed by BOTH project revenue and taxing power — a hybrid, not a pure taxing-power bond.",
  },
  {
    id: "s7-mun-q2", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 3,
    stem: "Compared with a general obligation bond, a revenue bond is generally:",
    choices: ["Lower risk and requires voter approval", "Higher risk and does not require voter approval", "Identical in risk and backing"],
    answerIndex: 1,
    explanation: "Revenue bonds depend solely on a specific project's income, so they're generally HIGHER risk than GO bonds, and because they don't pledge taxing power they typically do NOT require voter approval. Choice A reverses both facts (GO bonds are the safer ones that often need voter approval). Choice C is wrong because their backing — project revenue vs taxing power — is fundamentally different.",
  },
  {
    id: "s7-mun-q3", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 2,
    stem: "The federal tax exemption on municipal bond interest is MOST valuable to an investor who is:",
    choices: ["In a low tax bracket", "Tax-exempt already (e.g., a pension fund)", "In a high tax bracket"],
    answerIndex: 2,
    explanation: "The higher an investor's tax bracket, the more a tax exemption is worth, because more tax is avoided per dollar of interest — so high-bracket investors benefit most. Choice A (low bracket) gains little from the exemption and might earn more after-tax in a higher-yielding taxable bond. Choice B is a classic trap: an already tax-exempt entity gains NOTHING from the muni exemption and should buy higher-yielding taxable bonds instead.",
  },
  // Packaged products
  {
    id: "s7-pkg-q1", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 2,
    stem: "An investor redeems open-end mutual fund shares. The investor receives:",
    choices: ["The net asset value (NAV)", "The public offering price (POP)", "NAV plus a sales charge"],
    answerIndex: 0,
    explanation: "Open-end fund shares are redeemed at NAV. The sales charge (load) is added on PURCHASE to create the POP, not on redemption. Choice B (POP) is the BUYING price (NAV + load). Choice C double-counts the load — investors don't pay a front-end charge when selling. Buy at POP, redeem at NAV is the rule.",
  },
  {
    id: "s7-pkg-q2", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 3,
    stem: "A representative deliberately keeps a customer's mutual fund purchase just below the next breakpoint to preserve a higher commission. This is:",
    choices: ["Acceptable, since the customer chose the amount", "A prohibited breakpoint sale", "Required forward pricing"],
    answerIndex: 1,
    explanation: "Encouraging or arranging a purchase just under a breakpoint to keep a higher sales charge is a prohibited 'breakpoint sale' — reps must inform customers of breakpoint discounts and help them qualify. Choice A is wrong because the rep has a duty to disclose breakpoints regardless of the stated amount. Choice C confuses this with forward pricing, an unrelated concept about which NAV an order receives.",
  },
  {
    id: "s7-pkg-q3", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 3,
    stem: "An investor places $600,000 into a fund family for a 20-year horizon. Class A carries a 4% front load with breakpoints; Class C carries no load but a 1% annual 12b-1 fee. Which is generally more cost-effective, and why?",
    choices: ["Class C (level load, higher ongoing fees)", "It never matters — all classes cost the same", "Class A (front-end load, lower ongoing fees)"],
    answerIndex: 2,
    explanation: "Class A shares charge an upfront load but have the lowest ongoing expenses, and breakpoints reduce that load on large purchases — making them most cost-effective for big, long-term investments. Choice A (Class C) carries the highest ongoing fees, which compound painfully over long holding periods. Choice B is false: share classes have materially different cost structures, and matching them to amount and horizon is a suitability obligation.",
  },
];
