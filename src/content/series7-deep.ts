// ============================================================
// Certus — Series 7 textbook-depth content (series7-deep.ts)
// Exam-focused, calculation-rich readings for the hardest SIE/Series 7
// topics, with aligned questions. Appended to series7Content.
// ============================================================

import { Chapter, Question } from "./types";

export const s7DeepChapters: Chapter[] = [
  {
    id: "s7-options-deep",
    examSlug: "series-7",
    topicId: "options",
    topicName: "Options",
    title: "Options: Positions, Strategies, and the Core Calculations",
    readingMinutes: 64,
    summary:
      "The make-or-break Series 7 topic — the four basic option positions, how premium splits into intrinsic and time value, the maximum gain/loss/breakeven math, and the workhorse strategies: covered calls, protective puts, straddles, and spreads.",
    intro:
      "Options are where the Series 7 is won or lost. The material is logical once you internalize a few rules, but the exam tests it relentlessly with maximum-gain, maximum-loss, and breakeven calculations. This reading builds from the ground up: what calls and puts are, the rights and obligations of buyers versus sellers, how premium decomposes, the four basic positions and their P&L formulas, and the strategies that combine options with stock or with each other. Work every calculation by hand — the exam rewards speed and precision, not theory.",
    sections: [
      {
        heading: "1. Calls, puts, and the two sides",
        blocks: [
          { kind: "p", text: "An option contract covers 100 shares of an underlying stock. A CALL gives its owner the right to BUY 100 shares at the strike (exercise) price; a PUT gives the right to SELL 100 shares at the strike. Every contract has two sides. The BUYER (holder, 'long') pays the PREMIUM and acquires the RIGHT — long a call is bullish (wants the stock up), long a put is bearish (wants it down). The SELLER (writer, 'short') receives the premium and takes on the OBLIGATION to perform if exercised — short a call is bearish, short a put is bullish. Premium is quoted per share, so a premium of 3 costs $300 for one contract." },
          { kind: "callout", label: "Rights vs obligations", body: "Buyers have RIGHTS and pay premium; sellers have OBLIGATIONS and receive premium. Long call/short put = bullish; short call/long put = bearish. Fix these four before doing any math." },
        ],
      },
      {
        heading: "2. Intrinsic value and time value",
        blocks: [
          { kind: "p", text: "Premium = INTRINSIC VALUE + TIME VALUE. Intrinsic value is the amount an option is IN THE MONEY (ITM). A CALL is in the money when the stock price is ABOVE the strike (you can buy cheap and sell at market); a PUT is in the money when the stock is BELOW the strike (you can sell high). An option at the strike is AT THE MONEY; on the wrong side it's OUT OF THE MONEY with zero intrinsic value. Whatever premium exceeds intrinsic value is time value, which decays to zero by expiration." },
          { kind: "example", example: { title: "Splitting the premium", prompt: "A stock trades at $52. An investor looks at a call with a $50 strike trading at a premium of 3.50, and a put with a $50 strike at 1.00. What is the intrinsic and time value of each?", steps: ["Call: stock $52 > strike $50, so it's $2 in the money → intrinsic = 2.00; time value = 3.50 − 2.00 = 1.50.", "Put: stock $52 > strike $50, so the put is OUT of the money → intrinsic = 0; time value = the entire 1.00."], answer: "The 50 call has 2.00 intrinsic + 1.50 time value; the 50 put has 0 intrinsic + 1.00 time value. Calls are ITM when the stock is above the strike, puts when below." } },
        ],
      },
      {
        heading: "3. The four basic positions",
        blocks: [
          { kind: "p", text: "Each basic position has a fixed pattern for maximum gain, maximum loss, and breakeven. A useful memory aid: 'CALL UP, PUT DOWN' for breakevens — a call's breakeven is the strike PLUS the premium (the stock must rise above the strike by the premium), and a put's breakeven is the strike MINUS the premium. The buyer's and seller's breakevens are the same; their gains and losses are mirror images (a zero-sum trade)." },
          { kind: "table", table: { caption: "The four basic option positions (per share)", headers: ["Position", "Outlook", "Max gain", "Max loss", "Breakeven"], rows: [["Long call", "Bullish", "Unlimited", "Premium paid", "Strike + premium"], ["Short call", "Bearish", "Premium received", "Unlimited", "Strike + premium"], ["Long put", "Bearish", "Strike − premium", "Premium paid", "Strike − premium"], ["Short put", "Bullish", "Premium received", "Strike − premium", "Strike − premium"]] } },
          { kind: "example", example: { title: "Long call P&L", prompt: "An investor buys 1 XYZ Oct 50 call at a premium of 4. What is the maximum loss, the breakeven, and the gain if the stock rises to $60 at expiration?", steps: ["Max loss = premium paid = 4 × 100 = $400 (if the stock stays at or below 50, the call expires worthless).", "Breakeven = strike + premium = 50 + 4 = $54.", "At $60: intrinsic value = 60 − 50 = 10; profit = 10 − 4 = 6 per share = $600."], answer: "Max loss $400; breakeven $54; profit at $60 is $600. The long call's gain is unlimited as the stock rises, while the loss is capped at the premium." } },
        ],
      },
      {
        heading: "4. Stock-plus-option strategies",
        blocks: [
          { kind: "p", text: "Two strategies combine an option with a stock position. A COVERED CALL (long stock + short call) generates income from the premium and is used by an investor who is neutral-to-mildly-bullish; the premium provides limited downside cushion, but the short call CAPS the upside at the strike. A PROTECTIVE PUT (long stock + long put) is portfolio insurance: it limits the downside to the strike while leaving the upside unlimited, at the cost of the premium. These are the most-tested hedging strategies." },
          { kind: "example", example: { title: "Covered call maximum gain", prompt: "An investor buys stock at $48 and writes a 50 call for a premium of 2. What is the maximum gain, and the breakeven?", steps: ["If the stock rises above 50, the call is exercised: the investor sells at the 50 strike.", "Gain on stock = 50 − 48 = 2; plus premium kept = 2; total max gain = 4 per share = $400.", "Breakeven = stock cost − premium = 48 − 2 = $46 (the premium cushions the first 2 points of loss)."], answer: "Max gain $400 (reached at or above the $50 strike); breakeven $46. The trade-off: income and a small cushion in exchange for giving up gains above $50." } },
        ],
      },
      {
        heading: "5. Straddles and spreads",
        blocks: [
          { kind: "p", text: "A LONG STRADDLE buys a call AND a put at the SAME strike — a bet on a BIG MOVE in either direction (high volatility), profitable if the stock moves far enough to cover both premiums. Its two breakevens are the strike PLUS the total premium and the strike MINUS the total premium; the maximum loss (both premiums) occurs if the stock finishes exactly at the strike. A SHORT straddle is the opposite bet — that the stock stays near the strike — earning both premiums but with large risk. A SPREAD buys one option and sells another of the same class (both calls or both puts) with different strikes or expirations; spreads have BOUNDED maximum gain and loss. A DEBIT spread (pay net premium) is bought expecting the spread to widen; a CREDIT spread (receive net premium) profits if it narrows." },
          { kind: "example", example: { title: "Long straddle breakevens", prompt: "An investor buys an XYZ 50 call for 3 and an XYZ 50 put for 2 (total premium 5). What are the breakevens and the maximum loss?", steps: ["Total premium paid = 3 + 2 = 5.", "Upside breakeven = strike + total premium = 50 + 5 = $55.", "Downside breakeven = strike − total premium = 50 − 5 = $45.", "Max loss = total premium = 5 × 100 = $500, occurring if the stock closes exactly at $50."], answer: "Breakevens at $45 and $55; max loss $500 at $50. The straddle profits only if the stock moves below $45 or above $55 — a bet on volatility, not direction." } },
          { kind: "p", text: "The throughline for the exam: fix the four basic positions and their gain/loss/breakeven formulas first ('call up, put down' for breakevens), then build the strategies from them — covered call (income, capped upside, small cushion), protective put (insurance, unlimited upside), long straddle (volatility bet with two breakevens), and spreads (bounded risk and reward). Compute relentlessly until the patterns are automatic." },
        ],
      },
    ],
    keyTerms: [
      { term: "Call / put", def: "Call = right to buy 100 shares at the strike; put = right to sell 100 shares at the strike." },
      { term: "Buyer (long) vs writer (short)", def: "Buyer pays premium and has the right; writer receives premium and has the obligation." },
      { term: "Bullish vs bearish positions", def: "Long call/short put = bullish; short call/long put = bearish." },
      { term: "Intrinsic value", def: "Amount in the money: call ITM when stock > strike, put ITM when stock < strike." },
      { term: "Time value", def: "Premium minus intrinsic value; decays to zero by expiration." },
      { term: "Breakeven (call up, put down)", def: "Call breakeven = strike + premium; put breakeven = strike − premium." },
      { term: "Long call", def: "Bullish; max gain unlimited, max loss = premium, breakeven = strike + premium." },
      { term: "Long put", def: "Bearish; max gain = strike − premium, max loss = premium, breakeven = strike − premium." },
      { term: "Covered call", def: "Long stock + short call; income and small cushion, but upside capped at the strike." },
      { term: "Protective put", def: "Long stock + long put; insurance limiting downside to the strike, upside unlimited." },
      { term: "Long straddle", def: "Long call + long put, same strike; volatility bet; breakevens = strike ± total premium." },
      { term: "Spread (debit/credit)", def: "Buy one option, sell another of the same class; bounded gain/loss; debit pays, credit receives net premium." },
    ],
    takeaways: [
      "An option covers 100 shares; buyers pay premium for a right, writers receive premium for an obligation. Long call/short put are bullish; short call/long put are bearish.",
      "Premium = intrinsic value + time value; a call is in the money above the strike, a put below it.",
      "Breakevens follow 'call up, put down': call = strike + premium, put = strike − premium; buyer and writer share the breakeven but mirror each other's P&L.",
      "Long call: unlimited gain, loss capped at premium. Long put: gain = strike − premium, loss capped at premium. The short sides mirror these.",
      "Covered call (long stock + short call) earns income and caps upside; protective put (long stock + long put) insures the downside while keeping upside.",
      "A long straddle bets on a big move with breakevens at strike ± total premium; spreads bound both gain and loss.",
    ],
  },

  {
    id: "s7-munis-deep",
    examSlug: "series-7",
    topicId: "munis",
    topicName: "Municipal Securities",
    title: "Municipal Securities: GO vs Revenue Bonds and the Tax Advantage",
    readingMinutes: 56,
    summary:
      "Municipal bonds and their defining federal tax exemption — general obligation versus revenue bonds, the tax-equivalent yield calculation, municipal notes and fund securities, and the analytical factors behind each bond type.",
    intro:
      "Municipal securities are debt issued by states, cities, and their agencies, and their signature feature is that the interest is generally EXEMPT FROM FEDERAL income tax (and from state tax for in-state residents). That tax break is the heart of the topic and the source of its key calculation — the tax-equivalent yield. The Series 7 also tests the distinction between the two great families of munis (general obligation and revenue bonds), the short-term municipal notes, and how each is analyzed. Master the tax-equivalent yield math and the GO-versus-revenue contrast and most muni questions fall into place.",
    sections: [
      {
        heading: "1. The municipal tax advantage",
        blocks: [
          { kind: "p", text: "The interest on most municipal bonds is exempt from FEDERAL income tax. If the investor lives in the issuing state, the interest is often also exempt from STATE and local tax — a 'TRIPLE TAX-EXEMPT' bond. Because the income is tax-free, munis pay LOWER stated yields than comparable taxable bonds, yet can deliver a higher AFTER-TAX return for investors in high tax brackets. To compare a tax-free muni against a taxable bond, convert the muni's yield to its TAX-EQUIVALENT YIELD — the pretax yield a taxable bond would need to match it after tax." },
          { kind: "formula", formula: { label: "Tax-equivalent yield", expr: "Tax-equivalent yield = Municipal yield ÷ (1 − marginal tax rate)", note: "The pretax yield a taxable bond must offer to equal the muni's tax-free yield for an investor in that bracket." } },
          { kind: "example", example: { title: "Comparing a muni to a taxable bond", prompt: "An investor in the 32% federal bracket is choosing between a municipal bond yielding 4.0% and a corporate bond yielding 5.5%. Which has the higher after-tax return?", steps: ["Tax-equivalent yield of the muni = 4.0% ÷ (1 − 0.32) = 4.0% ÷ 0.68 = 5.88%.", "Compare: the muni's 5.88% tax-equivalent yield exceeds the corporate's 5.5% pretax yield.", "(Equivalently, the corporate's after-tax yield = 5.5% × 0.68 = 3.74%, below the muni's 4.0%.)"], answer: "The municipal bond wins: its 5.88% tax-equivalent yield beats the corporate's 5.5%. The higher the investor's tax bracket, the more attractive munis become." } },
        ],
      },
      {
        heading: "2. General obligation bonds",
        blocks: [
          { kind: "p", text: "GENERAL OBLIGATION (GO) bonds are backed by the FULL FAITH AND CREDIT — the taxing power — of the issuer. State GOs are repaid from income, sales, and other state taxes; local GOs are repaid primarily from PROPERTY (ad valorem) taxes. Because they pledge taxpayer funds, GOs usually require VOTER APPROVAL and are subject to statutory DEBT LIMITS. They are analyzed by the issuer's economic and fiscal health: assessed property values, debt per capita and debt as a percentage of assessed value, tax collection rates, the diversity of the tax base, and budget trends." },
        ],
      },
      {
        heading: "3. Revenue bonds",
        blocks: [
          { kind: "p", text: "REVENUE bonds are repaid only from the REVENUE generated by a specific project or facility — a toll road, airport, hospital, water/sewer system, or utility — NOT from general taxes. Because no taxing power is pledged, they typically need no voter approval and are NOT subject to debt limits, but they carry more credit risk and usually higher yields than GOs. Key protective features are spelled out in the bond's TRUST INDENTURE: a FEASIBILITY STUDY supporting projected revenues, the FLOW OF FUNDS (the order in which revenues are applied), a RATE COVENANT (a promise to set user charges high enough to cover debt service), and an ADDITIONAL BONDS TEST limiting new parity debt. The central analytical measure is the DEBT SERVICE COVERAGE RATIO (net revenues ÷ annual debt service)." },
          { kind: "table", table: { caption: "GO vs revenue bonds", headers: ["Feature", "General obligation", "Revenue"], rows: [["Backing", "Full faith & credit (taxes)", "Project revenues only"], ["Voter approval", "Usually required", "Usually not required"], ["Debt limit", "Subject to limit", "Not subject to limit"], ["Key analysis", "Tax base, debt per capita", "Debt service coverage, feasibility"]] } },
        ],
      },
      {
        heading: "4. Notes, fund securities, and synthesis",
        blocks: [
          { kind: "p", text: "Municipalities also issue SHORT-TERM NOTES to manage cash flow in ANTICIPATION of future revenue: TANs (tax anticipation notes), RANs (revenue anticipation notes), BANs (bond anticipation notes), and combinations like TRANs. These mature in about a year or less and are repaid from the anticipated source. MUNICIPAL FUND SECURITIES include 529 college savings plans and LGIPs (local government investment pools); 529 plans grow tax-deferred and are tax-free when used for qualified education expenses. The chapter's core: the federal tax exemption defines munis and drives the tax-equivalent-yield comparison; GO bonds rest on taxing power (analyzed by the tax base) while revenue bonds rest on project income (analyzed by debt service coverage); and short-term needs are met with anticipation notes. Over-learn the tax-equivalent-yield formula and the GO-versus-revenue distinction." },
        ],
      },
    ],
    keyTerms: [
      { term: "Federal tax exemption", def: "Most muni interest is exempt from federal income tax (and in-state tax for residents)." },
      { term: "Triple tax-exempt", def: "A muni exempt from federal, state, and local tax for an in-state resident." },
      { term: "Tax-equivalent yield", def: "Muni yield ÷ (1 − tax rate); the taxable yield needed to match the muni after tax." },
      { term: "General obligation (GO) bond", def: "Backed by the issuer's full faith and credit (taxing power); needs voter approval; subject to debt limits." },
      { term: "Ad valorem tax", def: "Property tax that backs local GO bonds." },
      { term: "Revenue bond", def: "Repaid only from a specific project's revenue; no voter approval or debt limit; higher risk/yield." },
      { term: "Rate covenant", def: "Issuer's promise to set user charges high enough to cover debt service." },
      { term: "Additional bonds test", def: "Limit on issuing new parity debt against the same revenue stream." },
      { term: "Debt service coverage ratio", def: "Net project revenues ÷ annual debt service; the key revenue-bond metric." },
      { term: "Anticipation notes (TAN/RAN/BAN/TRAN)", def: "Short-term munis repaid from anticipated taxes, revenue, or bond proceeds." },
      { term: "Municipal fund securities", def: "529 college savings plans and LGIPs; 529s are tax-free for qualified education expenses." },
    ],
    takeaways: [
      "Municipal bond interest is generally exempt from federal income tax (and in-state tax for residents), so munis carry lower stated yields but can win on an after-tax basis.",
      "Compare a muni to a taxable bond with the tax-equivalent yield = muni yield ÷ (1 − tax rate); higher brackets favor munis.",
      "GO bonds are backed by the issuer's taxing power (full faith and credit), usually need voter approval, and are subject to debt limits; analyze the tax base and debt per capita.",
      "Revenue bonds are repaid only from a project's revenue, need no voter approval and have no debt limit, and carry more risk; analyze the debt service coverage ratio, rate covenant, and feasibility study.",
      "Short-term needs are met with anticipation notes (TAN, RAN, BAN, TRAN) repaid from the anticipated source.",
      "Municipal fund securities include 529 plans (tax-free for qualified education expenses) and LGIPs.",
    ],
  },

  {
    id: "s7-margin-deep",
    examSlug: "series-7",
    topicId: "margin",
    topicName: "Margin Accounts",
    title: "Margin Accounts: Regulation T, Equity, and Maintenance Calls",
    readingMinutes: 58,
    summary:
      "Buying securities with borrowed money — Regulation T initial margin, how equity is computed in long and short accounts, FINRA maintenance requirements, and the price at which a maintenance (margin) call is triggered.",
    intro:
      "A MARGIN account lets a customer borrow from the broker-dealer to buy securities (or to sell short), amplifying both gains and losses. The Series 7 tests the mechanics precisely: the Regulation T initial requirement, how to compute account EQUITY, the FINRA maintenance minimums, and — the classic calculation — the price at which a falling account triggers a maintenance call. The rules differ between LONG accounts (you own securities financed by a debit) and SHORT accounts (you owe securities against a credit), so keep the two straight.",
    sections: [
      {
        heading: "1. Regulation T and opening a margin account",
        blocks: [
          { kind: "p", text: "REGULATION T, set by the Federal Reserve, governs the INITIAL margin a customer must deposit: currently 50% of the purchase price of marginable securities. Marginable securities include exchange-listed and most Nasdaq stocks; the broker lends the remaining 50%, creating a DEBIT balance on which the customer pays interest. FINRA also sets a MINIMUM EQUITY to open: generally $2,000 (but a customer never has to deposit more than 100% of the purchase price, so a purchase under $2,000 requires full payment, not $2,000)." },
          { kind: "formula", formula: { label: "Long account equity", expr: "Equity = Long market value (LMV) − Debit balance (DR)", note: "Reg T initial deposit = 50% of LMV. As the stock rises, equity grows; as it falls, equity shrinks toward the debit." } },
          { kind: "example", example: { title: "Opening a long margin position", prompt: "A customer buys 200 shares at $100 ($20,000) in a margin account under Reg T 50%. What is the deposit, the debit, and the initial equity?", steps: ["Reg T deposit = 50% × $20,000 = $10,000.", "Debit balance (broker's loan) = $20,000 − $10,000 = $10,000.", "Equity = LMV − DR = $20,000 − $10,000 = $10,000 (50%)."], answer: "Deposit $10,000, debit $10,000, equity $10,000. The customer controls $20,000 of stock with $10,000 of their own money — the leverage that magnifies returns and losses." } },
        ],
      },
      {
        heading: "2. Maintenance requirements and the call price (long)",
        blocks: [
          { kind: "p", text: "After purchase, the account must keep EQUITY at or above the FINRA MAINTENANCE minimum, which is 25% of the long market value. If a falling stock pushes equity below 25% of LMV, the customer receives a MAINTENANCE (margin) CALL to deposit more. The price at which this happens has a clean shortcut: a long account hits the 25% maintenance level when the market value falls to the debit balance divided by 0.75 (because at the trigger, equity = 25% of LMV means DR = 75% of LMV)." },
          { kind: "formula", formula: { label: "Long maintenance trigger", expr: "Market value at call = Debit balance ÷ 0.75", note: "At the 25% maintenance level, equity = 0.25 × LMV and DR = 0.75 × LMV, so LMV = DR ÷ 0.75." } },
          { kind: "example", example: { title: "Where does the long account get a margin call?", prompt: "Using the prior account (debit $10,000, 200 shares), at what market value — and per-share price — is a maintenance call triggered?", steps: ["Market value at call = DR ÷ 0.75 = $10,000 ÷ 0.75 = $13,333.", "Per share = $13,333 ÷ 200 shares ≈ $66.67."], answer: "A maintenance call is triggered when the position falls to about $13,333 (≈ $66.67 per share). Above that, equity stays above the 25% minimum; below it, the customer must add funds." } },
        ],
      },
      {
        heading: "3. Short margin accounts",
        blocks: [
          { kind: "p", text: "A SHORT margin account is the mirror image: the customer borrows SHARES, sells them, and owes the stock back. The short sale proceeds plus the Reg T deposit form a CREDIT balance, and equity is the credit balance MINUS the (now-liability) short market value. Because a short seller's loss is theoretically unlimited (the stock can rise without bound), the FINRA maintenance requirement is HIGHER: 30% of the short market value. A RISING stock erodes a short account's equity (the opposite of a long account), and a maintenance call comes when equity falls below 30% of the current short market value." },
          { kind: "formula", formula: { label: "Short account equity and maintenance", expr: "Equity = Credit balance − Short market value (SMV)     Maintenance = 30% of SMV", note: "Short maintenance is 30% (vs 25% long) because short losses are unlimited as the stock rises." } },
        ],
      },
      {
        heading: "4. Synthesis",
        blocks: [
          { kind: "p", text: "Margin mechanics reduce to a few rules. Reg T sets the INITIAL deposit at 50% (Federal Reserve); FINRA sets the MINIMUM equity to open ($2,000, never more than 100% of a small purchase) and the MAINTENANCE minimums (25% long, 30% short). Compute equity as LMV − DR for a long account and credit − SMV for a short account. The signature calculation is the long maintenance trigger: market value = debit ÷ 0.75. Remember that leverage cuts both ways — it magnifies losses as much as gains, and a margin call forces the customer to add funds or have positions sold. These facts, plus the 25%/30% maintenance split, cover the bulk of Series 7 margin questions." },
        ],
      },
    ],
    keyTerms: [
      { term: "Margin account", def: "Account that lets a customer borrow from the broker to buy securities or sell short." },
      { term: "Regulation T", def: "Federal Reserve rule setting initial margin at 50% of marginable securities' price." },
      { term: "Debit balance (DR)", def: "The broker's loan in a long account; interest is charged on it." },
      { term: "Long account equity", def: "Equity = long market value − debit balance." },
      { term: "Minimum equity to open", def: "Generally $2,000 (FINRA), but never more than 100% of a small purchase." },
      { term: "Maintenance margin (long)", def: "FINRA minimum equity of 25% of long market value." },
      { term: "Long maintenance trigger", def: "Market value at call = debit balance ÷ 0.75." },
      { term: "Maintenance (margin) call", def: "Demand to deposit funds when equity falls below the maintenance minimum." },
      { term: "Short account equity", def: "Equity = credit balance − short market value." },
      { term: "Maintenance margin (short)", def: "FINRA minimum of 30% of short market value (higher, because losses are unlimited)." },
    ],
    takeaways: [
      "Regulation T (Fed) sets initial margin at 50% of marginable securities; the broker lends the rest, creating a debit balance.",
      "Long account equity = long market value − debit balance; the FINRA minimum to open is generally $2,000 (never more than 100% of a small purchase).",
      "The long maintenance minimum is 25% of market value; a margin call is triggered when market value falls to debit ÷ 0.75.",
      "A short account's equity = credit balance − short market value, and its maintenance minimum is 30% (higher, because short losses are unlimited).",
      "A rising stock hurts a short account's equity; a falling stock hurts a long account's equity.",
      "Leverage magnifies losses as well as gains, and a margin call forces the customer to add funds or be sold out.",
    ],
  },

  {
    id: "s7-accounts-deep",
    examSlug: "series-7",
    topicId: "suitability",
    topicName: "Customer Accounts & Suitability",
    title: "Customer Accounts, Suitability, and Regulation Best Interest",
    readingMinutes: 60,
    summary:
      "Opening and servicing customer accounts the right way — account registration types, discretionary authority and the 3 A's, the know-your-customer and suitability obligations, Regulation Best Interest, and the anti-money-laundering rules every rep must follow.",
    intro:
      "Before a single trade, a representative must open the account correctly, learn the customer, and recommend only what's appropriate. The Series 7 tests the mechanics of account REGISTRATION, the rules around DISCRETIONARY authority, the KNOW-YOUR-CUSTOMER and SUITABILITY obligations now anchored in REGULATION BEST INTEREST, and the anti-money-laundering regime. These are rules-based, judgment-heavy topics, and the exam favors clear distinctions: what makes an account discretionary, what Reg BI requires, and which reports anti-money-laundering rules trigger.",
    sections: [
      {
        heading: "1. Opening accounts and registration types",
        blocks: [
          { kind: "p", text: "Opening an account requires gathering the customer's identifying and financial information — name, address, Social Security/tax ID, date of birth, employment, financial status, and investment objectives — and verifying identity under the Customer Identification Program. The account's REGISTRATION determines ownership and control. An INDIVIDUAL account has one owner. JOINT accounts have two or more: JOINT TENANTS WITH RIGHT OF SURVIVORSHIP (JTWROS) pass a deceased owner's share to the survivors, while TENANTS IN COMMON (TIC) pass it to the deceased's estate. CUSTODIAL accounts (UGMA/UTMA) are opened by an adult custodian for a minor, who owns the assets. TRUST, CORPORATE, and PARTNERSHIP accounts require the governing documents establishing who may act." },
        ],
      },
      {
        heading: "2. Discretionary accounts and the 3 A's",
        blocks: [
          { kind: "p", text: "An account is DISCRETIONARY when the representative can trade WITHOUT the customer's approval for each transaction. Discretion requires PRIOR WRITTEN authorization (a limited power of attorney) and principal approval, and each order must be marked discretionary. The test for whether discretion is being exercised is the 'THREE A's' — if the rep decides any of the ASSET (which security), the ACTION (buy or sell), or the AMOUNT (how many shares), it is discretionary. Choosing only the TIME or PRICE of an order the customer has already specified is NOT discretion (it's 'time and price' discretion, allowed without written authorization for that day)." },
          { kind: "callout", label: "The 3 A's", body: "Discretion = deciding the Asset, the Action, or the Amount. Time and price alone are NOT discretion. Discretionary trading always needs prior WRITTEN authorization plus principal approval." },
        ],
      },
      {
        heading: "3. Know your customer and suitability",
        blocks: [
          { kind: "p", text: "Two linked duties govern recommendations. The KNOW-YOUR-CUSTOMER rule requires the firm to use reasonable diligence to learn the essential facts about every customer and the authority of anyone acting for them. SUITABILITY requires that recommendations fit the customer's profile — investment objectives (income, growth, preservation of capital, speculation), risk tolerance, time horizon, liquidity needs, tax status, and financial situation. Suitability has three classic components: a REASONABLE-BASIS obligation (the product is suitable for at least some investors), a CUSTOMER-SPECIFIC obligation (it suits THIS customer), and a QUANTITATIVE obligation (a series of transactions isn't excessive/churning)." },
        ],
      },
      {
        heading: "4. Regulation Best Interest and AML",
        blocks: [
          { kind: "p", text: "REGULATION BEST INTEREST (Reg BI) raised the standard for broker-dealer recommendations to retail customers from mere suitability to acting in the customer's BEST INTEREST, without placing the firm's interests ahead of the customer's. Reg BI has four obligations: DISCLOSURE (of the relationship, fees, and conflicts — delivered via Form CRS, the client relationship summary), CARE (a reasonable basis to believe the recommendation is in the customer's best interest), CONFLICT OF INTEREST (identify and mitigate or eliminate conflicts), and COMPLIANCE (written policies to achieve compliance). Separately, ANTI-MONEY-LAUNDERING rules require a Customer Identification Program, monitoring for suspicious activity, filing a SUSPICIOUS ACTIVITY REPORT (SAR) for questionable transactions, and filing a CURRENCY TRANSACTION REPORT (CTR) for cash transactions over $10,000." },
          { kind: "p", text: "The chapter's throughline: open the account with complete information and the correct registration; obtain written authorization before exercising any discretion (the 3 A's); know the customer and recommend only what's suitable and in their best interest under Reg BI's four obligations; and follow the AML regime (CIP, SARs, and the $10,000 CTR threshold). These rules protect the customer and the firm, and the exam tests the bright-line facts — especially the 3 A's, Reg BI's best-interest standard with Form CRS, and the $10,000 CTR trigger." },
        ],
      },
    ],
    keyTerms: [
      { term: "Customer Identification Program (CIP)", def: "Required verification of a customer's identity when opening an account." },
      { term: "JTWROS vs tenants in common", def: "Survivorship (share passes to survivors) vs estate (share passes to the deceased's estate)." },
      { term: "UGMA/UTMA custodial account", def: "Account an adult custodian manages for a minor, who owns the assets." },
      { term: "Discretionary account", def: "Rep can trade without per-trade approval; needs prior WRITTEN authorization and principal approval." },
      { term: "The 3 A's", def: "Discretion = deciding the Asset, Action, or Amount; time/price alone is not discretion." },
      { term: "Know-your-customer (KYC)", def: "Duty to learn essential facts about each customer and those acting for them." },
      { term: "Suitability obligations", def: "Reasonable-basis, customer-specific, and quantitative (anti-churning) components." },
      { term: "Regulation Best Interest (Reg BI)", def: "Best-interest standard for retail recommendations: disclosure, care, conflict, compliance obligations." },
      { term: "Form CRS", def: "Client relationship summary disclosing the relationship, services, fees, and conflicts." },
      { term: "Suspicious Activity Report (SAR)", def: "AML filing for questionable or suspicious transactions." },
      { term: "Currency Transaction Report (CTR)", def: "AML filing for cash transactions over $10,000." },
    ],
    takeaways: [
      "Open accounts with complete customer information and the correct registration (individual, JTWROS vs TIC, UGMA/UTMA custodial, trust, corporate).",
      "An account is discretionary if the rep decides the Asset, Action, or Amount (the 3 A's); it requires prior WRITTEN authorization plus principal approval. Time/price alone is not discretion.",
      "Know-your-customer and suitability require recommendations to fit the customer's objectives, risk tolerance, horizon, and finances, with reasonable-basis, customer-specific, and quantitative components.",
      "Regulation Best Interest sets a best-interest standard for retail recommendations via four obligations — disclosure (Form CRS), care, conflict of interest, and compliance.",
      "Anti-money-laundering rules require a CIP, suspicious-activity monitoring, a SAR for questionable activity, and a CTR for cash over $10,000.",
      "These rules protect both customer and firm; the exam favors the bright-line facts (the 3 A's, Reg BI/Form CRS, the $10,000 CTR threshold).",
    ],
  },

  {
    id: "s7-debt-deep",
    examSlug: "series-7",
    topicId: "debt",
    topicName: "Debt Securities",
    title: "Corporate Debt: Yields, Pricing, and Bond Types",
    readingMinutes: 60,
    summary:
      "How bonds are priced and yielded — the inverse price/yield relationship, the four yield measures and how they rank for discount and premium bonds, secured versus unsecured corporate debt, convertibles, and the money-market instruments.",
    intro:
      "Debt securities are a large, calculation-heavy part of the Series 7. The foundation is the inverse relationship between price and yield and the four yield measures the exam loves to rank. From there you need the corporate debt hierarchy (secured versus unsecured), the special features of convertible, callable, and zero-coupon bonds, and the short-term money-market instruments. Get the yield ranking and the current-yield and conversion math automatic, and most bond questions become quick.",
    sections: [
      {
        heading: "1. Bond basics and the price/yield relationship",
        blocks: [
          { kind: "p", text: "A standard bond has a PAR value of $1,000, a fixed COUPON (stated annual interest), and a MATURITY date. Its price moves INVERSELY to market yields: when rates rise, existing bonds with lower coupons become less attractive and their prices fall (a DISCOUNT, below par); when rates fall, prices rise (a PREMIUM, above par); a bond priced at par yields exactly its coupon. Corporate bonds are quoted as a percentage of par in eighths (a quote of 98 = $980), while government bonds are quoted in 32nds." },
          { kind: "callout", label: "Discount, par, premium", body: "Price below par = discount (market yield above the coupon). Price at par = market yield equals coupon. Price above par = premium (market yield below the coupon). Price and yield always move in opposite directions." },
        ],
      },
      {
        heading: "2. The four yields and their ranking",
        blocks: [
          { kind: "p", text: "There are four yield measures. NOMINAL YIELD is just the coupon rate (fixed). CURRENT YIELD is the annual coupon divided by the current PRICE. YIELD TO MATURITY (YTM) is the total return if held to maturity, accounting for the price gain or loss toward par. YIELD TO CALL (YTC) is the return if the bond is called early. The exam's favorite fact is the RANKING. For a DISCOUNT bond (priced below par), the yields rank: nominal < current < YTM < YTC. For a PREMIUM bond, the order reverses: YTC < YTM < current < nominal. (Discount bonds gain toward par, boosting the longer-term yields; premium bonds lose toward par, reducing them.)" },
          { kind: "formula", formula: { label: "Current yield", expr: "Current yield = Annual coupon ÷ Current market price", note: "A $1,000 par, 6% bond pays $60/year. At a price of $960, current yield = 60 ÷ 960 = 6.25%." } },
          { kind: "example", example: { title: "Current yield and ranking", prompt: "A 6% corporate bond ($60 annual coupon) trades at $960. Compute the current yield and state how the four yields rank.", steps: ["Current yield = $60 ÷ $960 = 6.25%.", "Because $960 < par, this is a DISCOUNT bond.", "Discount-bond ranking: nominal (6.0%) < current (6.25%) < YTM < YTC."], answer: "Current yield = 6.25%; the yields rank nominal < current < YTM < YTC. The bond's pull toward par at maturity adds to YTM and YTC above the current yield." } },
        ],
      },
      {
        heading: "3. Corporate debt types",
        blocks: [
          { kind: "p", text: "Corporate bonds split by COLLATERAL. SECURED debt is backed by specific assets: MORTGAGE BONDS (real property), EQUIPMENT TRUST CERTIFICATES (rolling stock/equipment, common for railroads and airlines), and COLLATERAL TRUST bonds (securities of other companies). UNSECURED debt is backed only by the issuer's general credit: DEBENTURES, and below them SUBORDINATED DEBENTURES, which rank behind other debt in liquidation. CONVERTIBLE bonds can be exchanged for common stock at a set conversion price; the CONVERSION RATIO = par ÷ conversion price, and 'parity' is when the bond and the underlying shares are worth the same. Other features: CALLABLE bonds can be redeemed early by the issuer (bad for the holder, so they carry higher yields and the lowest YTC), and ZERO-COUPON bonds pay no periodic interest, are bought at a deep discount, and accrete to par." },
          { kind: "example", example: { title: "Convertible bond math", prompt: "A convertible bond ($1,000 par) has a conversion price of $40. The stock trades at $45. What is the conversion ratio and the parity price of the bond?", steps: ["Conversion ratio = par ÷ conversion price = $1,000 ÷ $40 = 25 shares.", "Parity (the bond's value in stock terms) = 25 shares × $45 = $1,125."], answer: "Conversion ratio = 25 shares; parity = $1,125. If the bond trades below $1,125, converting (or arbitrage) is attractive; the conversion feature lets the bond participate in the stock's rise." } },
        ],
      },
      {
        heading: "4. Money-market instruments and synthesis",
        blocks: [
          { kind: "p", text: "Short-term debt (one year or less) trades in the MONEY MARKET. Key instruments: TREASURY BILLS (sold at a discount, no coupon), COMMERCIAL PAPER (unsecured short-term corporate notes, issued at a discount, exempt from registration under 270 days), BANKER'S ACCEPTANCES (short-term instruments used in foreign trade), NEGOTIABLE CDs (large bank deposits, $100,000+), and REPURCHASE AGREEMENTS (repos, short-term collateralized loans). These are low-risk, highly liquid, and form the basis of cash management and money-market funds. The chapter's core: price and yield move inversely; the four yields rank nominal < current < YTM < YTC for discounts (reversed for premiums); corporate debt runs from secured (mortgage, equipment trust) down to subordinated debentures; convertibles use ratio = par ÷ conversion price; and the money market holds the short, safe instruments. Over-learn the current-yield formula, the yield ranking, and the conversion ratio." },
        ],
      },
    ],
    keyTerms: [
      { term: "Par / coupon / maturity", def: "$1,000 face value, fixed stated interest, and the date principal is repaid." },
      { term: "Price/yield inverse relationship", def: "Rates up → prices down (discount); rates down → prices up (premium)." },
      { term: "Nominal yield", def: "The coupon rate; fixed." },
      { term: "Current yield", def: "Annual coupon ÷ current market price." },
      { term: "Yield to maturity (YTM)", def: "Total return if held to maturity, including the pull toward par." },
      { term: "Yield to call (YTC)", def: "Return if the bond is called early; lowest yield for a premium callable bond." },
      { term: "Yield ranking (discount)", def: "Nominal < current < YTM < YTC; reversed for a premium bond." },
      { term: "Secured debt", def: "Mortgage bonds, equipment trust certificates, collateral trust bonds — backed by specific assets." },
      { term: "Debenture / subordinated debenture", def: "Unsecured debt backed by general credit; subordinated ranks behind other debt." },
      { term: "Convertible bond / conversion ratio", def: "Exchangeable into stock; ratio = par ÷ conversion price; parity = ratio × stock price." },
      { term: "Zero-coupon bond", def: "Pays no periodic interest; bought at a deep discount and accretes to par." },
      { term: "Money-market instruments", def: "T-bills, commercial paper, banker's acceptances, negotiable CDs, repos (≤ 1 year)." },
    ],
    takeaways: [
      "Bond prices move inversely to yields: below par = discount (yield above coupon), above par = premium (yield below coupon).",
      "Current yield = annual coupon ÷ price; for a discount bond the four yields rank nominal < current < YTM < YTC, and the order reverses for a premium bond.",
      "Corporate debt ranges from secured (mortgage bonds, equipment trust certificates, collateral trust) to unsecured debentures and lower-ranking subordinated debentures.",
      "A convertible bond's conversion ratio = par ÷ conversion price, and parity = ratio × stock price; the feature lets the bond share in the stock's appreciation.",
      "Callable bonds favor the issuer (higher yields, lowest YTC); zero-coupon bonds pay no interest and accrete to par.",
      "Money-market instruments (T-bills, commercial paper, banker's acceptances, negotiable CDs, repos) are short-term, low-risk, and highly liquid.",
    ],
  },

  {
    id: "s7-packaged-deep",
    examSlug: "series-7",
    topicId: "packaged",
    topicName: "Packaged Products",
    title: "Packaged Products: Investment Companies, ETFs, and Annuities",
    readingMinutes: 60,
    summary:
      "Pooled investment vehicles under the Investment Company Act of 1940 — open-end (mutual) versus closed-end funds, NAV and the public offering price, mutual fund share classes and breakpoints, ETFs, REITs, and fixed versus variable annuities.",
    intro:
      "Packaged products pool investors' money into professionally managed portfolios, and the Series 7 tests their structures, pricing, and costs in detail. The Investment Company Act of 1940 defines the main vehicles; the crucial distinctions are open-end (mutual) versus closed-end funds, how each is priced (NAV versus market price), the mutual fund SHARE CLASSES and BREAKPOINTS, and the features of ETFs, REITs, and annuities. Know the pricing math (NAV and the public offering price) and the A/B/C share trade-offs and most packaged-product questions follow.",
    sections: [
      {
        heading: "1. The investment company landscape",
        blocks: [
          { kind: "p", text: "The INVESTMENT COMPANY ACT OF 1940 defines three types: FACE-AMOUNT CERTIFICATE companies (rare), UNIT INVESTMENT TRUSTS (UITs — a fixed, unmanaged portfolio with a termination date), and MANAGEMENT COMPANIES, which include the two the exam cares about: OPEN-END funds (mutual funds) and CLOSED-END funds. An OPEN-END fund continuously offers new shares and stands ready to REDEEM them, so its share count floats; it has no secondary market and is always priced from its net asset value. A CLOSED-END fund issues a FIXED number of shares in an IPO that then TRADE ON AN EXCHANGE at a market price set by supply and demand — which can be at a PREMIUM or DISCOUNT to net asset value." },
          { kind: "formula", formula: { label: "Net asset value (NAV) per share", expr: "NAV = (Total assets − Total liabilities) ÷ Shares outstanding", note: "Computed at least daily. Open-end funds price 'forward' — orders get the next computed NAV." } },
        ],
      },
      {
        heading: "2. Mutual fund pricing and share classes",
        blocks: [
          { kind: "p", text: "An open-end fund's shares are bought at the PUBLIC OFFERING PRICE (POP) = NAV + the sales charge, and redeemed at NAV. The maximum sales charge allowed by FINRA is 8.5% of the POP. The sales charge percentage = (POP − NAV) ÷ POP. SHARE CLASSES package the charge differently: CLASS A shares carry a FRONT-END load but offer BREAKPOINTS (volume discounts) and the lowest ongoing fees — best for large, long-term investments. CLASS B shares have a BACK-END load (a contingent deferred sales charge that declines over time) plus higher 12b-1 fees, and typically CONVERT to Class A after several years. CLASS C ('level load') shares charge a small ongoing 12b-1 fee with little or no front/back load — best for shorter horizons." },
          { kind: "p", text: "BREAKPOINTS reduce the Class A sales charge at investment thresholds; a LETTER OF INTENT (LOI) lets an investor reach a breakpoint over 13 months, and RIGHTS OF ACCUMULATION count existing holdings toward future breakpoints. A BREAKPOINT SALE — letting a customer invest just below a breakpoint to earn a higher commission — is a prohibited violation reps must avoid." },
          { kind: "example", example: { title: "POP and sales charge", prompt: "A mutual fund has a NAV of $9.20 and a public offering price of $10.00. What is the sales charge percentage?", steps: ["Sales charge in dollars = POP − NAV = $10.00 − $9.20 = $0.80.", "Sales charge % = (POP − NAV) ÷ POP = $0.80 ÷ $10.00.", "= 8.0%."], answer: "8.0% — within FINRA's 8.5% maximum. Note the percentage is taken on the POP, not the NAV; a larger investment that reaches a breakpoint would lower this charge." } },
        ],
      },
      {
        heading: "3. ETFs and REITs",
        blocks: [
          { kind: "p", text: "EXCHANGE-TRADED FUNDS (ETFs) typically track an index and TRADE INTRADAY on an exchange like a stock (with bid–ask spreads and the ability to be sold short or bought on margin), generally at low cost and with tax efficiency — combining index investing with stock-like trading. REAL ESTATE INVESTMENT TRUSTS (REITs) pool investments in income-producing real estate (equity REITs own property; mortgage REITs hold real-estate debt; hybrids do both). To qualify for favorable tax treatment, a REIT must distribute at least 90% of its taxable income to shareholders, so REITs are income vehicles; they trade like stocks and are NOT investment companies, but are commonly grouped with packaged products. (REIT dividends are generally not 'qualified,' so they're taxed as ordinary income.)" },
        ],
      },
      {
        heading: "4. Annuities and synthesis",
        blocks: [
          { kind: "p", text: "ANNUITIES are insurance contracts for retirement income with TAX-DEFERRED growth. A FIXED annuity pays a guaranteed rate (an insurance product, not a security) and the insurer bears the investment risk. A VARIABLE annuity invests in a SEPARATE ACCOUNT of subaccounts (mutual-fund-like), so the contract holder bears the investment risk and returns vary — it IS a security (requiring a prospectus and securities registration). Annuities have an ACCUMULATION phase and an ANNUITIZATION (payout) phase, and typically impose SURRENDER CHARGES for early withdrawal; gains withdrawn are taxed as ordinary income (with a 10% penalty before age 59½). The chapter's core: open-end funds price at NAV (POP = NAV + load) while closed-end funds trade at market price; Class A (front load, breakpoints) suits large/long-term investors, Class C (level load) suits short horizons; ETFs trade intraday; REITs distribute 90% of income; and variable annuities are securities while fixed annuities are not. Over-learn the NAV/POP math and the share-class trade-offs." },
        ],
      },
    ],
    keyTerms: [
      { term: "Investment Company Act of 1940", def: "Defines face-amount certificate companies, UITs, and management companies." },
      { term: "Open-end (mutual) fund", def: "Continuously offered and redeemable; floating share count; priced at NAV, no secondary market." },
      { term: "Closed-end fund", def: "Fixed shares trading on an exchange at a market price (premium/discount to NAV)." },
      { term: "Net asset value (NAV)", def: "(Assets − liabilities) ÷ shares outstanding; computed at least daily." },
      { term: "Public offering price (POP)", def: "NAV + sales charge; sales charge % = (POP − NAV) ÷ POP; max 8.5%." },
      { term: "Class A shares", def: "Front-end load with breakpoints and low ongoing fees; best for large, long-term investments." },
      { term: "Class B shares", def: "Back-end load (CDSC) plus higher 12b-1 fees; usually convert to Class A over time." },
      { term: "Class C shares", def: "Level-load (ongoing 12b-1) with little front/back load; best for short horizons." },
      { term: "Breakpoint / LOI / rights of accumulation", def: "Volume discounts on Class A; reachable via a letter of intent or by counting existing holdings." },
      { term: "ETF", def: "Index-tracking fund trading intraday like a stock; low cost, tax-efficient, marginable." },
      { term: "REIT", def: "Pooled real-estate vehicle distributing ≥90% of income; trades like a stock; not an investment company." },
      { term: "Fixed vs variable annuity", def: "Fixed = guaranteed, insurer bears risk (not a security); variable = separate account, holder bears risk (a security)." },
    ],
    takeaways: [
      "The Investment Company Act of 1940 defines face-amount certificates, UITs, and management companies (open-end and closed-end funds).",
      "Open-end funds are redeemable and priced at NAV (POP = NAV + sales charge, max 8.5%); closed-end funds have fixed shares trading on an exchange at a premium or discount to NAV.",
      "Sales charge % = (POP − NAV) ÷ POP; Class A has a front load with breakpoints (large/long-term), Class B a declining back-end load that converts to A, Class C a level load (short horizons).",
      "Breakpoints give volume discounts on Class A (via LOI or rights of accumulation); a breakpoint sale just below a threshold is a prohibited violation.",
      "ETFs track indexes and trade intraday like stocks; REITs distribute at least 90% of income and trade like stocks but are not investment companies.",
      "Fixed annuities are guaranteed insurance products (not securities); variable annuities use a separate account, put investment risk on the holder, and ARE securities.",
    ],
  },
];

export const s7DeepQuestions: Question[] = [
  {
    id: "s7opt-d1", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 1,
    stem: "An investor who buys a call option is best described as:",
    choices: ["Bearish, with an obligation to sell", "Bullish, with the right to buy", "Bearish, with the right to sell", "Bullish, with an obligation to buy"],
    answerIndex: 1,
    explanation: "A call buyer (long call) is bullish and holds the RIGHT to buy 100 shares at the strike. Buyers pay premium and have rights; writers receive premium and have obligations.",
  },
  {
    id: "s7opt-d2", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 2,
    stem: "A stock trades at $52. A 50 call is priced at 3.50. The call's intrinsic value and time value are:",
    choices: ["3.50 intrinsic, 0 time value", "2.00 intrinsic, 1.50 time value", "0 intrinsic, 3.50 time value", "1.50 intrinsic, 2.00 time value"],
    answerIndex: 1,
    explanation: "A call is in the money when the stock is above the strike: 52 − 50 = 2.00 intrinsic value. The remaining premium, 3.50 − 2.00 = 1.50, is time value.",
  },
  {
    id: "s7opt-d3", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 2,
    stem: "An investor buys 1 XYZ Oct 50 call at 4. The maximum loss and breakeven are:",
    choices: ["$400 max loss; breakeven $46", "$400 max loss; breakeven $54", "Unlimited loss; breakeven $54", "$4,000 max loss; breakeven $50"],
    answerIndex: 1,
    explanation: "A long call's maximum loss is the premium paid: 4 × 100 = $400. Breakeven follows 'call up' = strike + premium = 50 + 4 = $54. The gain above $54 is unlimited.",
  },
  {
    id: "s7opt-d4", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 3,
    stem: "An investor buys stock at $48 and writes a 50 call for a premium of 2 (a covered call). The maximum gain is:",
    choices: ["$200", "$400", "Unlimited", "$600"],
    answerIndex: 1,
    explanation: "If the stock rises above 50, the call is exercised and the investor sells at 50. Gain on stock = 50 − 48 = 2, plus the 2 premium = 4 per share = $400. The short call caps the upside at the strike.",
  },
  {
    id: "s7opt-d5", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 3,
    stem: "An investor buys a 50 call for 3 and a 50 put for 2 (a long straddle). The breakevens are:",
    choices: ["$47 and $53", "$45 and $55", "$48 and $52", "$50 only"],
    answerIndex: 1,
    explanation: "Total premium = 3 + 2 = 5. A long straddle's breakevens are strike ± total premium = 50 − 5 = $45 and 50 + 5 = $55. It profits only if the stock moves outside that range (a volatility bet); max loss of $500 occurs exactly at $50.",
  },
  {
    id: "s7opt-d6", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 2,
    stem: "Which strategy provides downside protection (insurance) for a long stock position while keeping unlimited upside?",
    choices: ["Covered call", "Protective put", "Short straddle", "Selling a naked call"],
    answerIndex: 1,
    explanation: "A protective put (long stock + long put) limits the downside to the put's strike while leaving the upside unlimited, at the cost of the premium. A covered call instead earns income but caps the upside.",
  },

  {
    id: "s7mun-d1", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 2,
    stem: "An investor in the 32% federal tax bracket holds a municipal bond yielding 4.0%. Its tax-equivalent yield is closest to:",
    choices: ["2.72%", "4.00%", "5.88%", "12.5%"],
    answerIndex: 2,
    explanation: "Tax-equivalent yield = muni yield ÷ (1 − tax rate) = 4.0% ÷ (1 − 0.32) = 4.0% ÷ 0.68 = 5.88%. A taxable bond would need to yield 5.88% to match the muni after tax.",
  },
  {
    id: "s7mun-d2", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 1,
    stem: "Interest income from a typical municipal bond is:",
    choices: ["Taxable at the federal level", "Generally exempt from federal income tax", "Always exempt from all taxes everywhere", "Subject to a flat 15% federal rate"],
    answerIndex: 1,
    explanation: "Most municipal bond interest is exempt from federal income tax (and from state/local tax for in-state residents). This is why munis carry lower stated yields yet can produce higher after-tax returns for high-bracket investors.",
  },
  {
    id: "s7mun-d3", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 2,
    stem: "A general obligation (GO) bond is backed by:",
    choices: ["Revenue from a specific project", "The full faith and credit (taxing power) of the issuer", "A corporate guarantee", "Federal government insurance"],
    answerIndex: 1,
    explanation: "GO bonds are backed by the issuer's full faith and credit — its taxing power (property taxes for local GOs; income/sales taxes for state GOs). They usually require voter approval and are subject to debt limits.",
  },
  {
    id: "s7mun-d4", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 2,
    stem: "Compared with a general obligation bond, a revenue bond is most likely to:",
    choices: ["Require voter approval and be subject to a debt limit", "Be repaid from a specific project's revenues and not be subject to a debt limit", "Be backed by property taxes", "Carry lower credit risk in all cases"],
    answerIndex: 1,
    explanation: "Revenue bonds are repaid only from a specific facility's revenues, so they generally need no voter approval and are not subject to statutory debt limits — but they carry more credit risk. The key metric is the debt service coverage ratio.",
  },
  {
    id: "s7mun-d5", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 3,
    stem: "A revenue bond's indenture provision promising to set user charges high enough to cover debt service is the:",
    choices: ["Additional bonds test", "Rate covenant", "Flow of funds", "Feasibility study"],
    answerIndex: 1,
    explanation: "The rate covenant is the issuer's promise to maintain user charges (tolls, fees) sufficient to cover operating costs and debt service. The additional bonds test limits new parity debt; the flow of funds orders how revenues are applied; the feasibility study projects revenues.",
  },
  {
    id: "s7mun-d6", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 1,
    stem: "A 529 plan is an example of a:",
    choices: ["General obligation bond", "Revenue bond", "Municipal fund security", "Tax anticipation note"],
    answerIndex: 2,
    explanation: "529 college savings plans are municipal fund securities. They grow tax-deferred and distributions are federal-tax-free when used for qualified education expenses.",
  },

  {
    id: "s7mar-d1", examSlug: "series-7", topicId: "margin", topicName: "Margin Accounts", difficulty: 1,
    stem: "Under Regulation T, the initial margin requirement for marginable securities is currently:",
    choices: ["25%", "30%", "50%", "100%"],
    answerIndex: 2,
    explanation: "Regulation T, set by the Federal Reserve, requires an initial deposit of 50% of the purchase price; the broker lends the remaining 50%, creating the debit balance.",
  },
  {
    id: "s7mar-d2", examSlug: "series-7", topicId: "margin", topicName: "Margin Accounts", difficulty: 2,
    stem: "A customer buys $20,000 of stock in a margin account under Reg T 50%. The debit balance and initial equity are:",
    choices: ["$20,000 debit; $0 equity", "$10,000 debit; $10,000 equity", "$5,000 debit; $15,000 equity", "$0 debit; $20,000 equity"],
    answerIndex: 1,
    explanation: "Reg T deposit = 50% × $20,000 = $10,000, so the debit (broker's loan) is the other $10,000. Equity = LMV − DR = $20,000 − $10,000 = $10,000.",
  },
  {
    id: "s7mar-d3", examSlug: "series-7", topicId: "margin", topicName: "Margin Accounts", difficulty: 2,
    stem: "The FINRA minimum maintenance margin for a LONG account is:",
    choices: ["25% of the long market value", "30% of the long market value", "50% of the long market value", "$2,000"],
    answerIndex: 0,
    explanation: "FINRA requires equity of at least 25% of the long market value. (Short accounts require 30%, because short losses are unlimited.) The $2,000 figure is the minimum equity to OPEN, not the maintenance level.",
  },
  {
    id: "s7mar-d4", examSlug: "series-7", topicId: "margin", topicName: "Margin Accounts", difficulty: 3,
    stem: "A long margin account has a debit balance of $10,000. A maintenance call will be triggered when the market value falls to:",
    choices: ["$10,000", "$12,500", "$13,333", "$7,500"],
    answerIndex: 2,
    explanation: "At the 25% maintenance level, the debit equals 75% of market value, so market value at the call = DR ÷ 0.75 = $10,000 ÷ 0.75 = $13,333.",
  },
  {
    id: "s7mar-d5", examSlug: "series-7", topicId: "margin", topicName: "Margin Accounts", difficulty: 2,
    stem: "The FINRA maintenance requirement for a SHORT account is 30% (versus 25% long) primarily because:",
    choices: ["Short sellers pay higher commissions", "Losses on a short position are theoretically unlimited as the stock rises", "Short sales are tax-advantaged", "The Federal Reserve sets it that way"],
    answerIndex: 1,
    explanation: "A short seller's loss grows without limit as the stock rises, so FINRA imposes a higher 30% maintenance margin to provide a larger cushion. A rising stock erodes a short account's equity.",
  },
  {
    id: "s7mar-d6", examSlug: "series-7", topicId: "margin", topicName: "Margin Accounts", difficulty: 1,
    stem: "Equity in a long margin account is calculated as:",
    choices: ["Long market value + debit balance", "Long market value − debit balance", "Debit balance − long market value", "Credit balance − long market value"],
    answerIndex: 1,
    explanation: "Long account equity = long market value − debit balance. As the stock rises, equity grows; as it falls, equity shrinks toward the debit. (Short account equity = credit balance − short market value.)",
  },

  {
    id: "s7acc-d1", examSlug: "series-7", topicId: "suitability", topicName: "Customer Accounts & Suitability", difficulty: 2,
    stem: "An account is considered discretionary when the representative decides any of the:",
    choices: ["Time or price of an order the customer specified", "Asset, action, or amount of a trade", "Commission charged", "Settlement date"],
    answerIndex: 1,
    explanation: "The 'three A's' — Asset (which security), Action (buy/sell), or Amount (how many) — make an order discretionary, requiring prior WRITTEN authorization and principal approval. Deciding only time or price of an order the customer already specified is not discretion.",
  },
  {
    id: "s7acc-d2", examSlug: "series-7", topicId: "suitability", topicName: "Customer Accounts & Suitability", difficulty: 2,
    stem: "In a joint tenants with right of survivorship (JTWROS) account, when one owner dies their share passes to:",
    choices: ["The deceased owner's estate", "The surviving owner(s)", "The broker-dealer", "A court-appointed trustee"],
    answerIndex: 1,
    explanation: "JTWROS passes a deceased owner's share to the surviving owner(s). Tenants in common (TIC), by contrast, passes the deceased's share to their estate.",
  },
  {
    id: "s7acc-d3", examSlug: "series-7", topicId: "suitability", topicName: "Customer Accounts & Suitability", difficulty: 1,
    stem: "Regulation Best Interest (Reg BI) requires a broker-dealer making a recommendation to a retail customer to:",
    choices: ["Guarantee the customer a profit", "Act in the customer's best interest, not placing the firm's interests ahead of the customer's", "Recommend only the firm's proprietary products", "Avoid all disclosure of fees"],
    answerIndex: 1,
    explanation: "Reg BI raised the standard from suitability to acting in the customer's best interest, with four obligations: disclosure (via Form CRS), care, conflict of interest, and compliance.",
  },
  {
    id: "s7acc-d4", examSlug: "series-7", topicId: "suitability", topicName: "Customer Accounts & Suitability", difficulty: 2,
    stem: "A currency transaction report (CTR) must be filed for cash transactions exceeding:",
    choices: ["$3,000", "$5,000", "$10,000", "$50,000"],
    answerIndex: 2,
    explanation: "Anti-money-laundering rules require a CTR for cash transactions over $10,000. A suspicious activity report (SAR) is filed for questionable activity regardless of amount.",
  },
  {
    id: "s7acc-d5", examSlug: "series-7", topicId: "suitability", topicName: "Customer Accounts & Suitability", difficulty: 1,
    stem: "A UGMA/UTMA custodial account is best described as one in which:",
    choices: ["The custodian owns the assets", "An adult custodian manages assets owned by a minor", "Two adults share survivorship rights", "A corporation holds the securities"],
    answerIndex: 1,
    explanation: "In a UGMA/UTMA account an adult custodian manages the account, but the minor is the beneficial owner of the assets. There is one minor and one custodian per account.",
  },
  {
    id: "s7acc-d6", examSlug: "series-7", topicId: "suitability", topicName: "Customer Accounts & Suitability", difficulty: 3,
    stem: "A representative repeatedly trades a customer's account to generate commissions, with little benefit to the customer. This most directly violates which suitability component?",
    choices: ["Reasonable-basis suitability", "Quantitative suitability (churning)", "Customer identification", "JTWROS rules"],
    answerIndex: 1,
    explanation: "Excessive trading to generate commissions ('churning') violates the quantitative suitability obligation, which addresses whether a series of transactions is excessive given the customer's profile — distinct from reasonable-basis and customer-specific suitability.",
  },

  {
    id: "s7deb-d1", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 1,
    stem: "When market interest rates rise, the price of an existing fixed-coupon bond will:",
    choices: ["Rise", "Fall", "Stay the same", "Rise then fall"],
    answerIndex: 1,
    explanation: "Bond prices move inversely to yields. When rates rise, existing lower-coupon bonds become less attractive, so their prices fall (trading at a discount). When rates fall, prices rise to a premium.",
  },
  {
    id: "s7deb-d2", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 2,
    stem: "A 6% bond ($1,000 par, $60 annual coupon) trades at $960. Its current yield is closest to:",
    choices: ["6.00%", "6.25%", "5.76%", "6.67%"],
    answerIndex: 1,
    explanation: "Current yield = annual coupon ÷ price = $60 ÷ $960 = 6.25%. Because the bond trades below par, the current yield exceeds the nominal (coupon) yield of 6.0%.",
  },
  {
    id: "s7deb-d3", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 3,
    stem: "For a bond trading at a DISCOUNT, the four yields rank (lowest to highest) as:",
    choices: ["YTC < YTM < current < nominal", "Nominal < current < YTM < YTC", "Current < nominal < YTC < YTM", "They are all equal"],
    answerIndex: 1,
    explanation: "For a discount bond, nominal < current < YTM < YTC — the pull up toward par at maturity (or call) adds to the longer-term yields. For a premium bond, the ranking reverses.",
  },
  {
    id: "s7deb-d4", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 2,
    stem: "Which corporate debt security is UNSECURED and ranks behind other debt in liquidation?",
    choices: ["Mortgage bond", "Equipment trust certificate", "Subordinated debenture", "Collateral trust bond"],
    answerIndex: 2,
    explanation: "A subordinated debenture is unsecured (backed only by general credit) and ranks behind other debt in liquidation, so it carries higher yield. Mortgage bonds, equipment trust certificates, and collateral trust bonds are all secured.",
  },
  {
    id: "s7deb-d5", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 2,
    stem: "A convertible bond ($1,000 par) has a conversion price of $40. Its conversion ratio is:",
    choices: ["10 shares", "25 shares", "40 shares", "400 shares"],
    answerIndex: 1,
    explanation: "Conversion ratio = par ÷ conversion price = $1,000 ÷ $40 = 25 shares. If the stock trades at $45, parity = 25 × $45 = $1,125.",
  },
  {
    id: "s7deb-d6", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 1,
    stem: "Which of the following is a money-market instrument?",
    choices: ["A 20-year mortgage bond", "Commercial paper", "A convertible debenture", "A common stock"],
    answerIndex: 1,
    explanation: "Commercial paper is short-term unsecured corporate debt (issued at a discount, under 270 days to stay exempt from registration) — a money-market instrument, along with T-bills, banker's acceptances, negotiable CDs, and repos.",
  },

  {
    id: "s7pkg-d1", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 2,
    stem: "An open-end (mutual) fund differs from a closed-end fund in that the open-end fund:",
    choices: ["Trades on an exchange at a market price", "Continuously offers and redeems shares priced at NAV", "Has a fixed number of shares", "Can trade at a premium or discount to NAV"],
    answerIndex: 1,
    explanation: "An open-end fund continuously issues and redeems shares priced from NAV (forward pricing), with no secondary market. A closed-end fund has fixed shares that trade on an exchange at a market price, which can be above or below NAV.",
  },
  {
    id: "s7pkg-d2", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 2,
    stem: "A fund has a NAV of $9.20 and a public offering price of $10.00. The sales charge percentage is:",
    choices: ["8.0%", "8.7%", "9.2%", "0.8%"],
    answerIndex: 0,
    explanation: "Sales charge % = (POP − NAV) ÷ POP = ($10.00 − $9.20) ÷ $10.00 = $0.80 ÷ $10.00 = 8.0% — within FINRA's 8.5% maximum. The percentage is computed on the POP, not the NAV.",
  },
  {
    id: "s7pkg-d3", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 2,
    stem: "For a large, long-term investment, which mutual fund share class is generally most cost-effective?",
    choices: ["Class A (front-end load with breakpoints, low ongoing fees)", "Class B (back-end load, high 12b-1)", "Class C (level load)", "All classes cost the same"],
    answerIndex: 0,
    explanation: "Class A shares carry a front-end load but offer breakpoint discounts and the lowest ongoing fees, making them most economical for large, long-horizon investments. Class C (level load) suits shorter horizons.",
  },
  {
    id: "s7pkg-d4", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 3,
    stem: "A registered rep recommends a customer invest an amount just below a breakpoint to earn a higher sales charge. This is:",
    choices: ["A permitted practice", "A prohibited breakpoint sale", "Required under Reg BI", "A rights-of-accumulation benefit"],
    answerIndex: 1,
    explanation: "Deliberately keeping an investment just below a breakpoint to generate a higher commission is a prohibited 'breakpoint sale.' Reps must inform customers of breakpoints and the availability of a letter of intent or rights of accumulation.",
  },
  {
    id: "s7pkg-d5", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 2,
    stem: "To maintain favorable tax treatment, a REIT must distribute to shareholders at least:",
    choices: ["50% of taxable income", "75% of taxable income", "90% of taxable income", "100% of capital gains"],
    answerIndex: 2,
    explanation: "A REIT must distribute at least 90% of its taxable income to shareholders to qualify for pass-through tax treatment, which is why REITs are income vehicles. REIT dividends are generally taxed as ordinary income.",
  },
  {
    id: "s7pkg-d6", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 2,
    stem: "A variable annuity differs from a fixed annuity in that the variable annuity:",
    choices: ["Guarantees a fixed rate of return", "Invests in a separate account, placing investment risk on the contract holder, and is a security", "Is not subject to securities regulation", "Has no surrender charges"],
    answerIndex: 1,
    explanation: "A variable annuity invests in a separate account of subaccounts; the contract holder bears the investment risk and returns vary, so it IS a security requiring a prospectus. A fixed annuity guarantees a rate (the insurer bears the risk) and is an insurance product, not a security.",
  },
];
