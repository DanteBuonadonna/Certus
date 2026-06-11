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
    readingMinutes: 20,
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
    readingMinutes: 16,
    summary: "How municipal bonds are backed, their tax advantages, and the GO-versus-revenue distinction.",
    intro:
      "Municipal securities are debt issued by states, cities, and other local governments to fund public projects. Their defining feature is tax-advantaged interest, and the central exam distinction is how a given bond is backed — by taxing power or by a specific project's revenue. That difference drives the bond's risk and the kind of analysis it requires.",
    sections: [
      {
        heading: "General obligation (GO) bonds",
        paragraphs: [
          "General obligation bonds are backed by the full faith, credit, and taxing power of the issuer. For a municipality, that usually means property (ad valorem) taxes; for a state, income and sales taxes. Because they can compel taxation to pay debt service, GO bonds are generally considered lower risk — but issuing them often requires voter approval and may be limited by statutory debt ceilings. Analyzing a GO bond means examining the issuer's tax base, demographics, and existing debt burden.",
        ],
      },
      {
        heading: "Revenue bonds",
        paragraphs: [
          "Revenue bonds are backed only by the income generated by a specific project or facility — a toll road, airport, water system, or stadium. There is no taxing power behind them; if the project doesn't generate enough revenue, bondholders can be impaired. This makes revenue bonds generally higher risk than GO bonds, and analysis focuses on the project's feasibility and its debt service coverage ratio (net revenues relative to debt payments). A 'double-barreled' bond is a hybrid backed by both project revenues and taxing power.",
        ],
        callout: {
          label: "GO vs revenue",
          body: "GO bonds = backed by taxing power (full faith and credit), generally safer, often need voter approval. Revenue bonds = backed only by a project's income, generally riskier, no voter approval needed.",
        },
      },
      {
        heading: "The tax advantage",
        paragraphs: [
          "Interest on most municipal bonds is exempt from federal income tax, and often from state and local tax for investors who reside in the issuing state ('triple tax-exempt'). This makes the lower stated yields of munis attractive to investors in high tax brackets. To compare a muni with a taxable bond, you calculate the tax-equivalent yield — the yield a taxable bond would need to match the muni after taxes. The higher the investor's tax bracket, the more valuable the exemption, which is why municipals are a staple recommendation for wealthy clients.",
        ],
      },
      {
        heading: "The distinction at a glance, and the tax math",
        blocks: [
          { kind: "figure", figure: { caption: "Figure 1 — The two municipal-bond types differ entirely in what stands behind them: a GO bond is backed by the issuer's taxing power; a revenue bond is backed only by the income of one project.", alt: "Two boxes contrasting a general obligation bond backed by taxing power with a revenue bond backed by project income", svg: `<svg viewBox="0 0 460 160" width="100%" style="max-width:460px"><g class="c-teal"><rect x="24" y="26" width="196" height="112" rx="10"/></g><text x="122" y="52" text-anchor="middle" font-size="12" font-weight="600" fill="#085041">General obligation</text><text x="122" y="76" text-anchor="middle" font-size="10" fill="#0F6E56">backed by taxing power</text><text x="122" y="94" text-anchor="middle" font-size="10" fill="#0F6E56">(full faith &amp; credit)</text><text x="122" y="118" text-anchor="middle" font-size="9" fill="#0F6E56">safer · often needs a vote</text><g class="c-amber"><rect x="240" y="26" width="196" height="112" rx="10"/></g><text x="338" y="52" text-anchor="middle" font-size="12" font-weight="600" fill="#633806">Revenue</text><text x="338" y="76" text-anchor="middle" font-size="10" fill="#854F0B">backed by one project's</text><text x="338" y="94" text-anchor="middle" font-size="10" fill="#854F0B">income only</text><text x="338" y="118" text-anchor="middle" font-size="9" fill="#854F0B">riskier · no vote needed</text></svg>` } },
          { kind: "table", table: { caption: "Table 1 — GO vs revenue bonds at a glance.", headers: ["Feature", "GO bond", "Revenue bond"], rows: [["Backed by", "Taxing power (full faith & credit)", "A specific project's revenue"], ["Relative risk", "Generally lower", "Generally higher"], ["Voter approval", "Often required", "Not required"], ["Key safety metric", "Tax base & debt burden", "Debt service coverage ratio"]] } },
          { kind: "example", example: { title: "tax-equivalent yield", prompt: "A municipal bond yields 4%, federally tax-exempt. An investor is in the 25% federal tax bracket. What taxable yield would be equivalent?", steps: ["Tax-equivalent yield = muni yield ÷ (1 − tax rate).", "= 4% ÷ (1 − 0.25) = 4% ÷ 0.75.", "= 5.33%."], answer: "A taxable bond would need to yield about 5.33% to match the 4% muni after taxes — and the higher the investor's bracket, the larger that gap, which is why munis suit high-bracket clients." } },
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
    readingMinutes: 16,
    summary: "Open- vs closed-end funds, ETFs, how funds are priced, and the sales charges behind share classes.",
    intro:
      "Packaged products pool investors' money into professionally managed portfolios — and they're a core recommendation for retail clients, so the Series 7 tests their mechanics and costs closely. The key distinctions are how each product is priced and traded, and how the various sales charges and share classes affect what the customer actually pays.",
    sections: [
      {
        heading: "Open-end funds, closed-end funds, and ETFs",
        paragraphs: [
          "An open-end fund (the typical mutual fund) continuously issues and redeems shares directly with investors at the net asset value (NAV) — the per-share value of the fund's holdings — calculated once daily after the market closes. A closed-end fund issues a fixed number of shares that then trade on an exchange like a stock, so its market price can sit above (premium) or below (discount) NAV based on supply and demand. An exchange-traded fund (ETF) trades intraday on an exchange like a closed-end fund but uses a creation/redemption mechanism that keeps its price close to NAV, and typically tracks an index at low cost.",
        ],
      },
      {
        heading: "Pricing and sales charges",
        paragraphs: [
          "Open-end mutual fund shares are bought at the public offering price (POP), which equals NAV plus any front-end sales charge (load), and redeemed at NAV. Because of forward pricing, orders are filled at the next NAV calculated, not the last one. Sales charges fund the distribution and compensation chain, and they directly reduce how much of the customer's money is actually invested.",
          "Breakpoints are volume discounts on front-end loads: invest more and the sales charge percentage drops. A representative must inform customers of breakpoints — failing to do so, or splitting purchases to keep a customer just below a breakpoint to preserve commissions, is an abusive practice called a 'breakpoint sale' and is prohibited.",
        ],
        callout: {
          label: "NAV vs POP",
          body: "Open-end funds: buy at POP (NAV + sales charge), redeem at NAV. Forward pricing means you get the NEXT calculated NAV, not the last one.",
        },
      },
      {
        heading: "Share classes",
        paragraphs: [
          "Mutual funds often offer multiple share classes with different fee structures for the same portfolio. Class A shares charge a front-end load paid at purchase but have lower ongoing expenses, making them cost-effective for large, long-term investments (especially with breakpoints). Class B shares have no front-end load but carry a back-end load (a contingent deferred sales charge that declines over time) plus higher annual fees. Class C shares (level-load) have no front-end charge and a small or no back-end charge but the highest ongoing expenses, which makes them costly for long holding periods. Matching the share class to the customer's investment size and time horizon is a suitability issue the exam emphasizes.",
        ],
      },
      {
        heading: "Choosing a share class",
        blocks: [
          { kind: "table", table: { caption: "Table 1 — Matching the share class to the investor is a suitability issue: amount and time horizon decide.", headers: ["Class", "Sales charge", "Ongoing fees", "Best for"], rows: [["A", "Front-end load (breakpoints apply)", "Lowest", "Large, long-term investments"], ["B", "Back-end (declining CDSC)", "Higher", "Smaller, long-term (legacy)"], ["C", "Level load (little/no front or back)", "Highest", "Shorter holding periods"]] } },
          { kind: "callout", label: "Breakpoint sales are prohibited", body: "Reps must inform customers of breakpoint discounts and help them qualify. Deliberately keeping a purchase just under a breakpoint to preserve a higher commission is a prohibited 'breakpoint sale.'" },
          { kind: "example", example: { title: "buy at POP, redeem at NAV", prompt: "A fund's NAV is $19.10 and it carries a 5% sales charge. Roughly what does a new investor pay per share, and what do they receive when they later redeem?", steps: ["Public offering price (POP) = NAV ÷ (1 − sales charge) ≈ 19.10 ÷ 0.95.", "≈ $20.11 per share paid on purchase.", "Redemption is at NAV — no front-end load on the way out."], answer: "Pay ≈ $20.11 (POP) to buy; redeem at NAV ($19.10). The load is charged on entry, not exit — and forward pricing fills the order at the NEXT calculated NAV." } },
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
    choices: ["$46", "$54", "$50"],
    answerIndex: 1,
    explanation: "For a long call, breakeven = strike + premium = 50 + 4 = $54. The stock must rise above the strike by at least the premium paid before the position turns profitable. Choice A ($46) subtracts the premium, which is the LONG PUT formula (strike − premium). Choice C ignores the premium entirely. Remember: 'call up, add the premium.'",
  },
  {
    id: "s7-opt-q2", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 2,
    stem: "What is the maximum loss for an investor who BUYS a put option?",
    choices: ["Unlimited", "The strike price", "The premium paid"],
    answerIndex: 2,
    explanation: "An option buyer's maximum loss is always the premium paid — if the option expires worthless, the buyer simply loses what they paid and nothing more. Choice A (unlimited) describes an uncovered CALL WRITER, not a buyer. Choice B (the strike) overstates it; the buyer never risks the strike amount, only the premium. The capped downside is exactly why buyers pay a premium.",
  },
  {
    id: "s7-opt-q3", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 3,
    stem: "An investor who owns 100 shares of a stock and wants to generate income while remaining neutral-to-mildly-bullish should most appropriately:",
    choices: ["Write a covered call", "Buy a protective put", "Write an uncovered call"],
    answerIndex: 0,
    explanation: "A covered call (own the stock, sell a call against it) generates premium income and fits a neutral-to-mildly-bullish view, with the trade-off of capped upside. Choice B (protective put) is downside insurance and COSTS a premium rather than generating income, fitting a worried investor. Choice C (uncovered/naked call) carries unlimited risk and isn't 'covered' by the shares — far less appropriate and much riskier.",
  },
  // Municipal
  {
    id: "s7-mun-q1", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 2,
    stem: "A municipal bond backed by the full faith, credit, and taxing power of the issuer is a:",
    choices: ["Revenue bond", "General obligation (GO) bond", "Double-barreled bond"],
    answerIndex: 1,
    explanation: "A general obligation bond is backed by the issuer's taxing power and full faith and credit, generally making it lower-risk. Choice A (revenue bond) is backed ONLY by a specific project's income, with no taxing power. Choice C (double-barreled) is backed by BOTH project revenue and taxing power — a hybrid, not a pure taxing-power bond.",
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
    choices: ["In a low tax bracket", "In a high tax bracket", "Tax-exempt already (e.g., a pension fund)"],
    answerIndex: 1,
    explanation: "The higher an investor's tax bracket, the more a tax exemption is worth, because more tax is avoided per dollar of interest — so high-bracket investors benefit most. Choice A (low bracket) gains little from the exemption and might earn more after-tax in a higher-yielding taxable bond. Choice C is a classic trap: an already tax-exempt entity gains NOTHING from the muni exemption and should buy higher-yielding taxable bonds instead.",
  },
  // Packaged products
  {
    id: "s7-pkg-q1", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 2,
    stem: "An investor redeems open-end mutual fund shares. The investor receives:",
    choices: ["The public offering price (POP)", "The net asset value (NAV)", "NAV plus a sales charge"],
    answerIndex: 1,
    explanation: "Open-end fund shares are redeemed at NAV. The sales charge (load) is added on PURCHASE to create the POP, not on redemption. Choice A (POP) is the BUYING price (NAV + load). Choice C double-counts the load — investors don't pay a front-end charge when selling. Buy at POP, redeem at NAV is the rule.",
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
    stem: "For a large, long-term investment, which mutual fund share class is generally most cost-effective?",
    choices: ["Class A (front-end load, lower ongoing fees)", "Class C (level load, higher ongoing fees)", "It never matters — all classes cost the same"],
    answerIndex: 0,
    explanation: "Class A shares charge an upfront load but have the lowest ongoing expenses, and breakpoints reduce that load on large purchases — making them most cost-effective for big, long-term investments. Choice B (Class C) carries the highest ongoing fees, which compound painfully over long holding periods. Choice C is false: share classes have materially different cost structures, and matching them to amount and horizon is a suitability obligation.",
  },
];
