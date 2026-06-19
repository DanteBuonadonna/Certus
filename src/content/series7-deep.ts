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

  {
    id: "s7-equity-deep",
    examSlug: "series-7",
    topicId: "equity",
    topicName: "Equity Securities",
    title: "Equity Securities: Common, Preferred, Rights, and Warrants",
    readingMinutes: 56,
    summary:
      "The ownership side of the capital markets — common stock and its voting and residual claims, preferred stock and its fixed-dividend priority (including cumulative preferred), and the equity-linked instruments rights and warrants, plus dividend mechanics.",
    intro:
      "Equity securities represent OWNERSHIP in a corporation, and the Series 7 tests the rights that come with each type. COMMON stock carries voting and a residual claim; PREFERRED stock trades those for a fixed-dividend priority; and RIGHTS and WARRANTS give the ability to buy stock on set terms. This reading covers each, the key preferred-stock features (especially cumulative), and the dividend dates that determine who gets paid.",
    sections: [
      {
        heading: "1. Common stock",
        blocks: [
          { kind: "p", text: "COMMON STOCK represents residual ownership. Holders get VOTING rights — electing the board and approving major actions, by either statutory voting (one vote per share per issue) or CUMULATIVE voting (votes can be concentrated, helping minority holders). They have a RESIDUAL claim: in liquidation, common shareholders are paid LAST, after creditors and preferred holders. They benefit from DIVIDENDS (declared at the board's discretion — never guaranteed) and CAPITAL APPRECIATION, and enjoy LIMITED LIABILITY (the most they can lose is their investment). Many also have PREEMPTIVE rights to maintain their proportional ownership when new shares are issued." },
        ],
      },
      {
        heading: "2. Preferred stock",
        blocks: [
          { kind: "p", text: "PREFERRED STOCK is equity with bond-like features: it pays a FIXED DIVIDEND (stated as a percentage of par, usually $100 par, or a dollar amount) and has PRIORITY over common stock for both dividends and liquidation proceeds — but it is generally NONVOTING and does not share in the company's growth. Several variations are tested. CUMULATIVE preferred accrues any skipped dividends as dividends 'in arrears' that must be paid in full before common shareholders receive anything. PARTICIPATING preferred can receive extra dividends beyond the stated rate. CONVERTIBLE preferred can be exchanged for common shares. CALLABLE preferred can be redeemed by the issuer. ADJUSTABLE-RATE preferred has a dividend that resets with a benchmark." },
          { kind: "example", example: { title: "Cumulative preferred in arrears", prompt: "A company has $6 cumulative preferred stock and skips dividends for two years, then resumes. How much must preferred holders receive before common shareholders get any dividend in year 3?", steps: ["Cumulative preferred accrues skipped dividends in arrears.", "Two years missed = 2 × $6 = $12 in arrears per share.", "Plus the current year's $6.", "Total = $12 + $6 = $18 per share must be paid to preferred first."], answer: "$18 per share — the $12 in arrears plus the current $6 — must go to cumulative preferred before any common dividend. With noncumulative preferred, only the current $6 would be required." } },
        ],
      },
      {
        heading: "3. Rights and warrants",
        blocks: [
          { kind: "p", text: "RIGHTS and WARRANTS both let the holder buy stock at a set price, but they differ sharply. A RIGHT (preemptive right) is SHORT-TERM (weeks), issued to EXISTING shareholders, with a subscription price BELOW the current market price, letting holders maintain their ownership percentage in a new offering (typically one right per share owned). A WARRANT is LONG-TERM (years), with an exercise price ABOVE the market price when issued, and is often attached to a bond or preferred stock as a 'sweetener' to make the offering more attractive. Rights have immediate intrinsic value (price below market); warrants are a longer-term bet that the stock will rise above the exercise price." },
          { kind: "table", table: { caption: "Rights vs warrants", headers: ["Feature", "Rights", "Warrants"], rows: [["Term", "Short (weeks)", "Long (years)"], ["Exercise price vs market", "Below market", "Above market at issue"], ["Issued to", "Existing shareholders", "Often attached to bonds/preferred"], ["Purpose", "Preserve proportional ownership", "Sweetener to aid an offering"]] } },
        ],
      },
      {
        heading: "4. Dividends, ADRs, and synthesis",
        blocks: [
          { kind: "p", text: "DIVIDENDS follow a calendar: the DECLARATION DATE (the board declares), the EX-DIVIDEND DATE (the cutoff — buyers on or after this date do NOT receive the dividend), the RECORD DATE (holders of record are paid), and the PAYMENT DATE. To receive a dividend, an investor must own the stock BEFORE the ex-dividend date; the stock price typically drops by the dividend amount on the ex-date. Dividends may be cash or additional STOCK; a STOCK SPLIT increases shares and lowers price proportionally without changing total value. AMERICAN DEPOSITARY RECEIPTS (ADRs) let US investors hold foreign companies' shares conveniently, trading in dollars on US markets. The chapter's core: common stock = voting + residual claim + growth; preferred stock = fixed-dividend priority, generally nonvoting, with cumulative preferred accruing arrears; rights are short-term, below-market, for existing holders, while warrants are long-term, above-market sweeteners; and you must buy before the ex-dividend date to receive a dividend. Over-learn the cumulative-preferred arrears rule and the rights-vs-warrants distinction." },
        ],
      },
    ],
    keyTerms: [
      { term: "Common stock", def: "Residual ownership with voting rights, dividends (discretionary), and limited liability." },
      { term: "Cumulative voting", def: "Lets shareholders concentrate votes, helping minority holders elect directors." },
      { term: "Residual claim", def: "Common holders are paid last in liquidation, after creditors and preferred." },
      { term: "Preemptive right", def: "Right to buy new shares to maintain proportional ownership." },
      { term: "Preferred stock", def: "Fixed dividend with priority over common; generally nonvoting; no growth participation." },
      { term: "Cumulative preferred", def: "Skipped dividends accrue 'in arrears' and must be paid before common dividends." },
      { term: "Participating/convertible/callable preferred", def: "Extra dividends / convertible to common / redeemable by issuer." },
      { term: "Right (subscription right)", def: "Short-term; subscription price below market; issued to existing shareholders." },
      { term: "Warrant", def: "Long-term; exercise price above market at issue; often a bond/preferred sweetener." },
      { term: "Ex-dividend date", def: "Cutoff; buyers on or after do not receive the dividend; price drops by the dividend." },
      { term: "American Depositary Receipt (ADR)", def: "A US-traded, dollar-denominated claim on foreign company shares." },
    ],
    takeaways: [
      "Common stock carries voting rights and a residual claim (paid last in liquidation), with discretionary dividends, capital appreciation, and limited liability.",
      "Preferred stock pays a fixed dividend with priority over common for dividends and liquidation but is generally nonvoting and doesn't share in growth.",
      "Cumulative preferred accrues skipped dividends in arrears, which must be paid in full before common shareholders receive any dividend.",
      "Rights are short-term, issued to existing shareholders at a subscription price below market to preserve proportional ownership.",
      "Warrants are long-term, with an exercise price above market at issuance, often attached to bonds as a sweetener.",
      "To receive a dividend, buy before the ex-dividend date; the price typically falls by the dividend amount on the ex-date.",
    ],
  },

  {
    id: "s7-underwriting-deep",
    examSlug: "series-7",
    topicId: "underwriting",
    topicName: "Underwriting & Regulation",
    title: "Securities Regulation: The 1933 and 1934 Acts and Underwriting",
    readingMinutes: 58,
    summary:
      "How securities reach the market and stay regulated — the Securities Act of 1933 governing new issues (registration, the prospectus, the cooling-off period), the underwriting commitments, the Securities Exchange Act of 1934 governing the secondary market and the SEC, and the key exemptions.",
    intro:
      "Two federal laws frame the securities industry. The SECURITIES ACT OF 1933 regulates the PRIMARY market — new issues sold to the public — requiring registration and disclosure. The SECURITIES EXCHANGE ACT OF 1934 regulates the SECONDARY market and created the SEC. Between them sit the UNDERWRITING process that brings issues to market and the EXEMPTIONS that let some securities and transactions skip registration. The Series 7 tests these distinctions precisely.",
    sections: [
      {
        heading: "1. The Securities Act of 1933",
        blocks: [
          { kind: "p", text: "The SECURITIES ACT OF 1933 (the 'Paper Act' or 'Prospectus Act') governs the PRIMARY market — the issuance of NEW securities — to ensure full and fair DISCLOSURE. An issuer must file a REGISTRATION STATEMENT with the SEC and deliver a PROSPECTUS to buyers. After filing, a COOLING-OFF PERIOD (a minimum of 20 days) begins, during which the security can't be sold but indications of interest can be gathered using a PRELIMINARY PROSPECTUS (the 'red herring'); a TOMBSTONE advertisement may announce the upcoming offering. SEC registration is NOT approval or endorsement — it only means the required disclosures were made. The Act's antifraud provisions prohibit misrepresentation in the sale of new securities." },
        ],
      },
      {
        heading: "2. Underwriting commitments",
        blocks: [
          { kind: "p", text: "Issuers sell new securities to the public through UNDERWRITERS (investment banks), usually organized into a SYNDICATE to spread risk. The commitment type defines who bears the risk. In a FIRM COMMITMENT, the underwriter BUYS the entire issue from the issuer and resells it, bearing the risk of any unsold shares — the issuer is guaranteed its proceeds. In a BEST EFFORTS arrangement, the underwriter acts only as an AGENT, selling what it can with NO guarantee, and unsold shares return to the issuer. Variations include ALL-OR-NONE (the deal is canceled unless the entire issue sells) and STANDBY (an underwriter agrees to buy shares not taken up in a rights offering). The underwriter's compensation is the SPREAD between the price paid to the issuer and the public offering price." },
          { kind: "table", table: { caption: "Underwriting commitments", headers: ["Type", "Underwriter's role", "Who bears unsold-share risk"], rows: [["Firm commitment", "Buys the whole issue (principal)", "Underwriter"], ["Best efforts", "Sells as agent", "Issuer"], ["All-or-none", "Agent; deal voided if not fully sold", "Issuer"]] } },
        ],
      },
      {
        heading: "3. The Securities Exchange Act of 1934",
        blocks: [
          { kind: "p", text: "The SECURITIES EXCHANGE ACT OF 1934 (the 'People Act') regulates the SECONDARY market — trading among investors after issuance — and created the SECURITIES AND EXCHANGE COMMISSION (SEC) as the industry's federal regulator. It governs the registration and conduct of EXCHANGES, BROKER-DEALERS, and securities professionals; mandates ongoing ISSUER REPORTING (annual 10-K, quarterly 10-Q, current 8-K); prohibits INSIDER TRADING and market manipulation; and sets rules on margin (via the Federal Reserve's Regulation T), short sales, and proxies. Where the 1933 Act is about getting securities issued with disclosure, the 1934 Act is about policing the markets where they trade." },
        ],
      },
      {
        heading: "4. Exemptions and synthesis",
        blocks: [
          { kind: "p", text: "Some securities and transactions are EXEMPT from 1933 Act registration. EXEMPT SECURITIES include US government and agency securities, municipal securities, and bank issues. EXEMPT TRANSACTIONS include private placements under REGULATION D (sales to ACCREDITED INVESTORS — those meeting income or net-worth thresholds — and a limited number of others, without a public offering), REGULATION A (smaller offerings with lighter requirements), and intrastate offerings. RULE 144 governs the resale of RESTRICTED stock (acquired in a private placement) and CONTROL stock (held by insiders/affiliates), imposing holding-period and volume limits. The chapter's core: the 1933 Act regulates new issues (registration, prospectus, 20-day cooling-off, red herring) and registration is disclosure, not approval; underwriting is firm commitment (underwriter bears risk) or best efforts (issuer bears risk); the 1934 Act regulates the secondary market and created the SEC; and exemptions cover government/muni securities and private placements (Reg D to accredited investors), with Rule 144 limiting restricted/control-stock resales. Over-learn the 1933-vs-1934 split and firm-commitment-vs-best-efforts." },
        ],
      },
    ],
    keyTerms: [
      { term: "Securities Act of 1933", def: "Regulates the primary market (new issues): registration, prospectus, disclosure." },
      { term: "Registration statement / prospectus", def: "SEC filing and the disclosure document delivered to buyers." },
      { term: "Cooling-off period", def: "Minimum 20 days after filing; no sales, but indications of interest allowed." },
      { term: "Red herring", def: "Preliminary prospectus used during the cooling-off period." },
      { term: "Registration is not approval", def: "SEC registration means disclosures were made, not endorsement of the security." },
      { term: "Firm commitment", def: "Underwriter buys the whole issue and bears unsold-share risk." },
      { term: "Best efforts", def: "Underwriter sells as agent with no guarantee; issuer bears the risk." },
      { term: "Spread", def: "Underwriter's compensation: public price minus price paid to the issuer." },
      { term: "Securities Exchange Act of 1934", def: "Regulates the secondary market; created the SEC; governs exchanges, broker-dealers, reporting, insider trading." },
      { term: "Exempt securities", def: "Government, agency, municipal, and bank securities exempt from 1933 registration." },
      { term: "Regulation D / accredited investor", def: "Private placements to accredited investors without a public offering." },
      { term: "Rule 144", def: "Limits resale of restricted and control stock (holding period and volume)." },
    ],
    takeaways: [
      "The Securities Act of 1933 regulates new issues in the primary market — registration, a prospectus, and a minimum 20-day cooling-off period (using a red herring).",
      "SEC registration means required disclosures were made; it is NOT approval or endorsement of the security.",
      "In a firm commitment the underwriter buys the whole issue and bears unsold-share risk; in best efforts it sells as agent and the issuer bears the risk.",
      "The Securities Exchange Act of 1934 regulates the secondary market, created the SEC, and governs exchanges, broker-dealers, issuer reporting, and insider trading.",
      "Exempt securities include government, agency, and municipal issues; exempt transactions include Regulation D private placements to accredited investors.",
      "Rule 144 limits the resale of restricted (privately acquired) and control (insider-held) stock through holding-period and volume restrictions.",
    ],
  },

  {
    id: "s7-govt-deep",
    examSlug: "series-7",
    topicId: "govt",
    topicName: "Government & Agency Securities",
    title: "U.S. Government and Agency Securities",
    readingMinutes: 54,
    summary:
      "The safest corner of the bond market — Treasury bills, notes, bonds, TIPS, and STRIPS, their tax treatment, and the agency and mortgage-backed securities (including Ginnie Mae and CMOs) with their prepayment risk.",
    intro:
      "U.S. government securities are the benchmark for safety, backed by the full faith and credit of the Treasury, and the Series 7 tests their types, quoting, and taxation. Alongside them sit AGENCY and MORTGAGE-BACKED securities, which add yield but introduce PREPAYMENT risk. This reading covers the Treasury lineup, the special inflation and zero-coupon variants, and the agency/MBS world including Ginnie Mae and CMOs.",
    sections: [
      {
        heading: "1. Treasury securities",
        blocks: [
          { kind: "p", text: "The U.S. Treasury issues several instruments differing by maturity and structure. TREASURY BILLS (T-bills) mature in one year or less, pay no coupon, and are issued at a DISCOUNT (the return is the difference between the discounted purchase price and face value). TREASURY NOTES (T-notes) mature in 2 to 10 years and pay semiannual interest. TREASURY BONDS (T-bonds) mature in more than 10 years (up to 30) and also pay semiannual interest. All are backed by the FULL FAITH AND CREDIT of the U.S. government — essentially free of default risk — and are quoted in 32nds of a point." },
        ],
      },
      {
        heading: "2. TIPS and STRIPS",
        blocks: [
          { kind: "p", text: "Two specialized Treasuries are tested. TIPS (Treasury Inflation-Protected Securities) protect against inflation: the PRINCIPAL is adjusted up (or down) with the Consumer Price Index, and the fixed coupon rate is applied to the adjusted principal, so both the interest payment and the final principal keep pace with inflation. STRIPS (Separate Trading of Registered Interest and Principal Securities) are ZERO-COUPON Treasuries created by 'stripping' a bond's coupons and principal into separate zero-coupon pieces, each bought at a discount and maturing at face value — useful for locking in a known future amount with no reinvestment risk (though holders owe tax on the annual 'phantom' accreted interest)." },
          { kind: "example", example: { title: "TIPS principal adjustment", prompt: "An investor holds $10,000 of TIPS with a 2% coupon. Over a year, inflation (CPI) rises 3%. What happens to the principal and the next interest payment?", steps: ["Principal adjusts up by inflation: $10,000 × 1.03 = $10,300.", "The 2% coupon applies to the ADJUSTED principal.", "Annual interest ≈ 2% × $10,300 = $206 (vs $200 before adjustment)."], answer: "Principal rises to $10,300 and the interest payment rises with it (~$206), so the investor's purchasing power is protected. At maturity, the investor receives the inflation-adjusted principal." } },
        ],
      },
      {
        heading: "3. Agency and mortgage-backed securities",
        blocks: [
          { kind: "p", text: "AGENCY securities are issued by government-sponsored enterprises and federal agencies. FANNIE MAE (FNMA) and FREDDIE MAC (FHLMC) are government-sponsored enterprises (GSEs) whose securities are NOT backed by the full faith and credit of the U.S. government. GINNIE MAE (GNMA) is the exception — a government agency whose mortgage-backed securities ARE backed by the full faith and credit of the U.S. government. Many agency securities are MORTGAGE-BACKED SECURITIES (MBS): pools of mortgages whose PASS-THROUGH payments of principal and interest flow to investors. Their distinctive risk is PREPAYMENT — when interest rates fall, homeowners refinance and pay off early, returning principal to investors at exactly the wrong time (to reinvest at lower rates)." },
        ],
      },
      {
        heading: "4. CMOs, taxation, and synthesis",
        blocks: [
          { kind: "p", text: "COLLATERALIZED MORTGAGE OBLIGATIONS (CMOs) repackage mortgage cash flows into TRANCHES with different maturities and prepayment exposures, letting investors choose a risk/return profile; they are complex products with suitability considerations. On TAXATION: interest on Treasury securities is subject to FEDERAL income tax but EXEMPT from state and local tax — the mirror image of municipal bonds (federal-exempt, sometimes state-exempt). Agency and MBS interest is generally fully taxable at all levels (with some exceptions). The chapter's core: Treasuries (bills at a discount, notes/bonds with semiannual coupons, TIPS inflation-adjusted, STRIPS zero-coupon) are full-faith-and-credit and state-tax-exempt; agency/MBS add yield and prepayment risk, with Ginnie Mae alone carrying the government's full faith and credit, and CMOs slicing mortgage cash flows into tranches. Over-learn the Treasury types, the TIPS mechanism, and the Treasury state-tax exemption." },
        ],
      },
    ],
    keyTerms: [
      { term: "Treasury bill (T-bill)", def: "Matures ≤1 year; no coupon; issued at a discount." },
      { term: "Treasury note (T-note)", def: "2–10 year maturity; semiannual interest." },
      { term: "Treasury bond (T-bond)", def: "Over 10 years (up to 30); semiannual interest." },
      { term: "Full faith and credit", def: "Backed by the U.S. government; effectively default-free." },
      { term: "TIPS", def: "Principal adjusts with CPI; the coupon applies to adjusted principal — inflation protection." },
      { term: "STRIPS", def: "Zero-coupon Treasuries; bought at a discount, mature at face; phantom-income tax annually." },
      { term: "Fannie Mae / Freddie Mac", def: "GSEs; securities NOT backed by U.S. full faith and credit." },
      { term: "Ginnie Mae (GNMA)", def: "Government agency; MBS ARE backed by U.S. full faith and credit." },
      { term: "Mortgage-backed security (MBS)", def: "Pass-through of pooled mortgage principal and interest; carries prepayment risk." },
      { term: "Prepayment risk", def: "Falling rates spur refinancing, returning principal early to reinvest at lower rates." },
      { term: "Collateralized mortgage obligation (CMO)", def: "Mortgage cash flows split into tranches with differing maturities/prepayment exposure." },
      { term: "Treasury taxation", def: "Interest is federally taxable but exempt from state and local tax." },
    ],
    takeaways: [
      "Treasury bills mature in a year or less and are issued at a discount; notes (2–10 yr) and bonds (>10 yr) pay semiannual interest; all carry full faith and credit.",
      "TIPS adjust principal with the CPI and apply the coupon to the adjusted principal, protecting purchasing power; STRIPS are zero-coupon Treasuries bought at a discount.",
      "Treasury interest is subject to federal tax but exempt from state and local tax (the mirror image of municipal bonds).",
      "Fannie Mae and Freddie Mac are GSEs NOT backed by U.S. full faith and credit; Ginnie Mae alone carries the government's full faith and credit.",
      "Mortgage-backed securities pass pooled mortgage payments to investors and carry prepayment risk — refinancing returns principal early when rates fall.",
      "CMOs slice mortgage cash flows into tranches with different maturities and prepayment profiles, a complex product with suitability considerations.",
    ],
  },

  {
    id: "s7-dpp-deep",
    examSlug: "series-7",
    topicId: "dpp",
    topicName: "Direct Participation Programs",
    title: "Direct Participation Programs and Limited Partnerships",
    readingMinutes: 52,
    summary:
      "Pass-through investment vehicles — how limited partnerships flow income, gains, losses, and deductions directly to investors, the roles and liability of general versus limited partners, the passive activity rules, and why economic viability must come before tax benefits.",
    intro:
      "DIRECT PARTICIPATION PROGRAMS (DPPs) are limited partnerships that pass their tax items directly through to investors rather than being taxed at the entity level. The Series 7 tests the partnership structure, the sharply different liability of general and limited partners, the PASSIVE activity rules that limit loss deductions, and the principle that a DPP must make economic sense on its own — not merely as a tax shelter.",
    sections: [
      {
        heading: "1. The pass-through structure",
        blocks: [
          { kind: "p", text: "A DPP is organized as a LIMITED PARTNERSHIP that does NOT pay tax at the entity level. Instead, all of its tax items — income, gains, losses, deductions, and credits — FLOW THROUGH to the individual investors (the limited partners), who report them on their own returns. This single layer of taxation (versus a corporation's double taxation) and the ability to pass through deductions historically made DPPs attractive. Common types are REAL ESTATE partnerships, OIL AND GAS programs (exploratory or income), and EQUIPMENT LEASING programs, each with different income and risk profiles." },
        ],
      },
      {
        heading: "2. General vs limited partners",
        blocks: [
          { kind: "p", text: "A limited partnership has two kinds of partner with very different roles. The GENERAL PARTNER (GP) MANAGES the program, makes the decisions, and has UNLIMITED personal liability for the partnership's debts — bearing the operational responsibility and risk. The LIMITED PARTNERS (LPs) are PASSIVE investors who supply capital; their liability is LIMITED to their investment (plus any recourse debt they've agreed to), and they may NOT take an active management role without jeopardizing that limited-liability protection. The partnership agreement and a subscription process (with suitability standards, since DPPs are illiquid and often high-risk) govern admission of limited partners." },
          { kind: "callout", label: "Liability split", body: "GENERAL partner: manages and has UNLIMITED liability. LIMITED partner: passive, liability LIMITED to the investment. A limited partner who starts managing the business can lose the limited-liability shield." },
        ],
      },
      {
        heading: "3. Passive activity rules",
        blocks: [
          { kind: "p", text: "Because DPP interests are passive, their tax losses are PASSIVE LOSSES, and the IRS restricts how they can be used: PASSIVE losses can generally offset only PASSIVE income — NOT salary (earned income) or portfolio income (interest, dividends, capital gains). Unused passive losses are suspended and carried forward to offset future passive income or are released when the investor disposes of the interest. This rule sharply limited the tax-shelter appeal that DPPs once had. An investor's ability to deduct losses is also capped by their BASIS, which includes their capital contribution and their share of certain (recourse) partnership debt." },
        ],
      },
      {
        heading: "4. Evaluating a DPP and synthesis",
        blocks: [
          { kind: "p", text: "A core suitability principle: a DPP must be evaluated FIRST on its ECONOMIC viability — whether the underlying business can generate real returns — and only THEN on its tax benefits. An investment that only 'works' because of tax write-offs is a poor one; the tax tail should not wag the economic dog. DPPs are also ILLIQUID (no active secondary market), long-term, and often high-risk, so they suit only investors who can bear illiquidity and loss. The chapter's core: DPPs are limited partnerships that pass income, gains, losses, and deductions through to investors (single taxation); the general partner manages with unlimited liability while limited partners are passive with liability capped at their investment; passive losses can offset only passive income; and economic viability must precede tax benefits. Over-learn the GP/LP liability split and the passive-loss limitation." },
        ],
      },
    ],
    keyTerms: [
      { term: "Direct participation program (DPP)", def: "A limited partnership that passes tax items through to investors; no entity-level tax." },
      { term: "Flow-through (pass-through)", def: "Income, gains, losses, deductions, and credits reported by the investors directly." },
      { term: "Types of DPP", def: "Real estate, oil and gas, and equipment leasing partnerships." },
      { term: "General partner (GP)", def: "Manages the program; has unlimited personal liability." },
      { term: "Limited partner (LP)", def: "Passive investor; liability limited to the investment (plus recourse debt)." },
      { term: "Loss of limited liability", def: "An LP who actively manages can forfeit the limited-liability shield." },
      { term: "Passive loss", def: "DPP losses that can offset only passive income, not salary or portfolio income." },
      { term: "Suspended passive losses", def: "Carried forward to future passive income or released on disposition." },
      { term: "Basis limitation", def: "Loss deductions capped by capital contributed plus the share of recourse debt." },
      { term: "Economic viability first", def: "Evaluate the underlying business before any tax benefits." },
      { term: "Illiquidity", def: "DPPs have no active secondary market and are long-term, high-risk investments." },
    ],
    takeaways: [
      "A DPP is a limited partnership that passes income, gains, losses, deductions, and credits through to investors, avoiding entity-level (double) taxation.",
      "The general partner manages the program and has unlimited personal liability; limited partners are passive with liability limited to their investment.",
      "A limited partner who takes an active management role can lose the limited-liability protection.",
      "Passive losses from a DPP can offset only passive income — not salary or portfolio income; unused losses are suspended and carried forward.",
      "Loss deductions are also capped by the investor's basis (contribution plus share of recourse debt).",
      "Evaluate a DPP on economic viability FIRST and tax benefits second; DPPs are illiquid, long-term, and suited only to investors who can bear the risk.",
    ],
  },

  {
    id: "s7-optionsadv-deep",
    examSlug: "series-7",
    topicId: "options-adv",
    topicName: "Advanced Options",
    title: "Advanced Options Strategies: Spreads, Straddles, and Hedging",
    readingMinutes: 64,
    summary:
      "The harder options material that decides Series 7 scores — vertical spreads (debit vs credit) and their max gain/loss/breakeven math, straddles and strangles, and how options hedge long and short stock positions.",
    intro:
      "Basic calls and puts get you started, but the Series 7 lives in the COMBINATIONS — spreads and straddles — and the calculations behind them. This reading builds the advanced strategies: vertical SPREADS and the debit-versus-credit distinction, STRADDLES and STRANGLES for volatility, and the HEDGING strategies that protect stock positions. Master the spread math (it's the most-tested options calculation) and you turn the section's hardest questions into points.",
    sections: [
      {
        heading: "1. Vertical spreads",
        blocks: [
          { kind: "p", text: "A VERTICAL SPREAD buys one option and sells another of the same type (both calls or both puts) and same expiration, but at DIFFERENT strikes. Spreads cap both risk and reward. A DEBIT spread costs net premium (you pay more for the option you buy than you receive for the one you sell) and profits when the spread WIDENS; a CREDIT spread brings in net premium and profits when the spread NARROWS (ideally expiring worthless). The maximum gain and loss are bounded, and they always sum (in absolute terms) to the difference between the strike prices times 100." },
          { kind: "formula", formula: { label: "Vertical spread max gain/loss/breakeven", expr: "Difference in strikes − Net premium = the 'other' max     |Max gain| + |Max loss| = (Strike difference × 100)", note: "For a DEBIT spread: max loss = net debit; max gain = strike difference − net debit. For a CREDIT spread: max gain = net credit; max loss = strike difference − net credit." } },
          { kind: "example", example: { title: "Bull call (debit) spread", prompt: "An investor buys a 50 call for 4 and sells a 60 call for 1.50. What is the net cost, max loss, max gain, and breakeven?", steps: ["Net debit = 4 − 1.50 = 2.50 (paid), so this is a debit spread (bullish).", "Max loss = net debit = 2.50 × 100 = $250 (if both expire worthless).", "Max gain = strike difference − net debit = (60 − 50) − 2.50 = 7.50 × 100 = $750.", "Breakeven = lower strike + net debit = 50 + 2.50 = $52.50."], answer: "Net cost $250; max loss $250; max gain $750; breakeven $52.50. A debit call spread is bullish and wants the spread to widen toward the $10 strike difference. Note $250 + $750 = $1,000 = the $10 strike difference × 100." } },
        ],
      },
      {
        heading: "2. Straddles and strangles",
        blocks: [
          { kind: "p", text: "A LONG STRADDLE buys a call and a put at the SAME strike — a bet on a big move in EITHER direction (high volatility). Its two breakevens are the strike plus the total premium and the strike minus the total premium; max loss (both premiums) occurs if the stock finishes exactly at the strike. A SHORT straddle sells both and profits if the stock stays near the strike, with large risk. A STRANGLE is similar but uses DIFFERENT strikes (typically an out-of-the-money call and out-of-the-money put) — cheaper than a straddle, but the stock must move further to profit. Long straddles/strangles are 'long volatility'; short ones are 'short volatility.'" },
          { kind: "example", example: { title: "Long straddle breakevens", prompt: "An investor buys a 50 call for 3 and a 50 put for 2. What are the breakevens and the maximum loss?", steps: ["Total premium = 3 + 2 = 5.", "Upside breakeven = strike + total premium = 50 + 5 = $55.", "Downside breakeven = strike − total premium = 50 − 5 = $45.", "Max loss = total premium = 5 × 100 = $500, at exactly $50."], answer: "Breakevens $45 and $55; max loss $500. The stock must move outside $45–$55 to profit — a pure volatility bet." } },
        ],
      },
      {
        heading: "3. Hedging stock positions",
        blocks: [
          { kind: "p", text: "Options hedge stock. For a LONG stock position: a PROTECTIVE PUT (buy a put) caps the downside while keeping upside (insurance), and a COVERED CALL (sell a call) generates income but caps the upside. A COLLAR combines both (buy a put, sell a call) to bound the outcome cheaply. For a SHORT stock position (where the risk is the stock RISING), the hedge flips: a PROTECTIVE CALL (buy a call) caps the upside loss, and a COVERED PUT (sell a put) earns income against the short. Knowing which option protects which stock position is heavily tested." },
          { kind: "table", table: { caption: "Hedging stock with options", headers: ["Stock position", "Insurance (limit loss)", "Income (cap profit)"], rows: [["Long stock", "Buy a put (protective put)", "Sell a call (covered call)"], ["Short stock", "Buy a call (protective call)", "Sell a put (covered put)"]] } },
          { kind: "p", text: "The chapter's core: vertical spreads cap risk and reward — debit spreads pay net premium and want the spread to widen (max loss = debit, max gain = strike difference − debit), credit spreads collect premium and want it to narrow; straddles/strangles bet on volatility with two breakevens at the strike ± total premium; and options hedge stock — protective put/covered call for long stock, protective call/covered put for short stock. Over-learn the spread max gain/loss/breakeven and the long-vs-short hedging pairs." },
        ],
      },
    ],
    keyTerms: [
      { term: "Vertical spread", def: "Buy and sell same-type options at different strikes; caps risk and reward." },
      { term: "Debit spread", def: "Net premium paid; profits when the spread widens; max loss = the debit." },
      { term: "Credit spread", def: "Net premium received; profits when the spread narrows; max gain = the credit." },
      { term: "Spread max gain/loss", def: "|Max gain| + |Max loss| = strike difference × 100." },
      { term: "Bull call spread", def: "Debit call spread; bullish; buy lower strike, sell higher strike." },
      { term: "Long straddle", def: "Buy call + put at same strike; volatility bet; breakevens = strike ± total premium." },
      { term: "Strangle", def: "Call and put at different (OTM) strikes; cheaper, needs a bigger move." },
      { term: "Long vs short volatility", def: "Long straddle/strangle profit from big moves; short profit from calm." },
      { term: "Protective put / covered call", def: "Hedge a LONG stock position — insurance vs income." },
      { term: "Protective call / covered put", def: "Hedge a SHORT stock position — insurance vs income." },
    ],
    takeaways: [
      "Vertical spreads buy and sell same-type options at different strikes, capping both risk and reward; |max gain| + |max loss| = strike difference × 100.",
      "A debit spread pays net premium and profits as the spread widens (max loss = debit, max gain = strike difference − debit); a credit spread collects premium and profits as it narrows.",
      "A bull call spread's breakeven is the lower strike + net debit.",
      "A long straddle (call + put, same strike) bets on volatility with breakevens at strike ± total premium; a strangle uses different strikes and needs a bigger move.",
      "Hedge LONG stock with a protective put (insurance) or covered call (income).",
      "Hedge SHORT stock with a protective call (insurance) or covered put (income).",
    ],
  },

  {
    id: "s7-economics-deep",
    examSlug: "series-7",
    topicId: "economics",
    topicName: "Economics & Analysis",
    title: "Economic Factors, Interest Rates, and Market Analysis",
    readingMinutes: 56,
    summary:
      "The macro backdrop the Series 7 expects you to know — the business cycle and economic indicators, how the Federal Reserve's monetary policy and fiscal policy work, the inverse rate/bond-price relationship and the yield curve, and fundamental versus technical analysis.",
    intro:
      "The Series 7 tests the ECONOMIC environment because it drives every security's value. This reading covers the business cycle and the indicators that track it, the Federal Reserve's MONETARY policy tools and government FISCAL policy, the all-important relationship between interest rates and bond prices, the yield curve, and the two schools of market analysis. These concepts recur throughout the exam's bond and recommendation questions.",
    sections: [
      {
        heading: "1. The business cycle and indicators",
        blocks: [
          { kind: "p", text: "The economy moves through a BUSINESS CYCLE: EXPANSION (growth), a PEAK, CONTRACTION (a recession is two or more consecutive quarters of declining GDP), and a TROUGH before recovery. Economists track it with INDICATORS classified by timing: LEADING indicators (which change before the economy, e.g., stock prices, building permits, new orders) predict; COINCIDENT indicators (industrial production, personal income) move with the economy; and LAGGING indicators (unemployment duration, corporate profits) confirm a trend after the fact. GROSS DOMESTIC PRODUCT (GDP) measures total output, and the CONSUMER PRICE INDEX (CPI) measures inflation." },
        ],
      },
      {
        heading: "2. Monetary and fiscal policy",
        blocks: [
          { kind: "p", text: "Two levers steer the economy. MONETARY POLICY is run by the FEDERAL RESERVE, which controls the money supply with three tools: OPEN MARKET OPERATIONS (buying/selling Treasuries — the most-used tool; buying adds money and lowers rates), the DISCOUNT RATE (what the Fed charges banks), and RESERVE REQUIREMENTS (how much banks must hold — the most powerful, least-used). 'Easy' (loose) money lowers rates to stimulate; 'tight' money raises rates to fight inflation. The FED FUNDS RATE (banks lending reserves overnight to each other) is the key short-term rate. FISCAL POLICY is run by Congress and the President through TAXING and SPENDING — cutting taxes or raising spending stimulates the economy." },
          { kind: "callout", label: "Tight money → rates up → bond prices down", body: "When the Fed tightens (sells Treasuries, raises the discount rate, or raises reserve requirements), interest rates RISE — and because bond prices move inversely to rates, existing bond prices FALL. This chain is one of the most-tested ideas on the exam." },
        ],
      },
      {
        heading: "3. Interest rates, bonds, and the yield curve",
        blocks: [
          { kind: "p", text: "The single most important relationship for the Series 7: bond prices move INVERSELY to interest rates. When rates rise, existing (lower-coupon) bonds fall in price; when rates fall, they rise. Longer-maturity and lower-coupon bonds are MORE sensitive to rate changes. The YIELD CURVE plots yield against maturity: a NORMAL (ascending) curve has higher yields for longer maturities (the usual state, reflecting term risk); a FLAT curve has similar yields across maturities; and an INVERTED (descending) curve — short rates above long rates — often signals an expected economic slowdown and typically appears when the Fed has tightened aggressively." },
        ],
      },
      {
        heading: "4. Fundamental vs technical analysis",
        blocks: [
          { kind: "p", text: "Two approaches analyze securities. FUNDAMENTAL analysis studies the underlying value — a company's financial statements, earnings, ratios (P/E, current ratio), management, and industry — to decide WHAT to buy. TECHNICAL analysis ignores fundamentals and studies PRICE and VOLUME patterns on charts — trends, support and resistance levels, moving averages, and momentum — to decide WHEN to buy or sell. Fundamental analysts ask whether a stock is a good company at a fair price; technical analysts ask whether the chart shows a good entry point. The chapter's core: the economy cycles through expansion/peak/contraction/trough tracked by leading/coincident/lagging indicators; the Fed runs monetary policy (open market operations, discount rate, reserve requirements) while Congress runs fiscal policy; tight money raises rates and lowers bond prices; the yield curve (normal/flat/inverted) signals conditions; and analysis is fundamental (value) or technical (charts). Over-learn the Fed's tools and the rate/bond-price/yield-curve relationships." },
        ],
      },
    ],
    keyTerms: [
      { term: "Business cycle", def: "Expansion → peak → contraction (recession) → trough." },
      { term: "Recession", def: "Two or more consecutive quarters of declining GDP." },
      { term: "Leading/coincident/lagging indicators", def: "Change before / with / after the economy." },
      { term: "GDP / CPI", def: "Total output / inflation measure." },
      { term: "Monetary policy (the Fed)", def: "Controls money supply via open market operations, discount rate, reserve requirements." },
      { term: "Open market operations", def: "Fed buying/selling Treasuries; the most-used tool (buying lowers rates)." },
      { term: "Fiscal policy", def: "Government taxing and spending, run by Congress/President." },
      { term: "Fed funds rate", def: "Overnight rate banks charge each other for reserves." },
      { term: "Rate/bond-price inverse", def: "Rates up → bond prices down; longer/lower-coupon bonds are more sensitive." },
      { term: "Yield curve", def: "Yield vs maturity: normal (ascending), flat, or inverted (slowdown signal)." },
      { term: "Fundamental analysis", def: "Studies value (financials, ratios) — what to buy." },
      { term: "Technical analysis", def: "Studies price/volume charts (trends, support/resistance) — when to buy." },
    ],
    takeaways: [
      "The business cycle runs expansion → peak → contraction → trough; indicators are leading, coincident, or lagging.",
      "The Federal Reserve runs monetary policy with open market operations (most-used), the discount rate, and reserve requirements (most powerful); Congress runs fiscal policy (taxing/spending).",
      "Tight money raises interest rates, and because bond prices move inversely to rates, existing bond prices fall.",
      "Longer-maturity and lower-coupon bonds are most sensitive to interest-rate changes.",
      "The yield curve is normal (ascending), flat, or inverted (short rates above long — often a slowdown signal).",
      "Fundamental analysis studies value (financials/ratios) to decide what to buy; technical analysis studies price/volume charts to decide when.",
    ],
  },

  {
    id: "s7-regulations-deep",
    examSlug: "series-7",
    topicId: "regulations",
    topicName: "FINRA Rules & Conduct",
    title: "FINRA Rules, Communications, and Prohibited Practices",
    readingMinutes: 58,
    summary:
      "The conduct rules that govern a registered rep — the regulatory hierarchy and registration, the prohibited practices that draw discipline, the rules for communicating with the public, and how customer disputes are resolved through arbitration versus the Code of Procedure.",
    intro:
      "Beyond the securities acts, the Series 7 tests the day-to-day RULES a representative must follow under FINRA. This reading covers the regulatory structure and registration, the PROHIBITED PRACTICES that get reps fined or barred, the standards for COMMUNICATIONS with the public, and the dispute-resolution system. These are bright-line conduct rules — exactly the kind the exam loves.",
    sections: [
      {
        heading: "1. Regulatory structure and registration",
        blocks: [
          { kind: "p", text: "The SECURITIES AND EXCHANGE COMMISSION (SEC) is the top federal regulator. Beneath it, SELF-REGULATORY ORGANIZATIONS (SROs) regulate their members: FINRA oversees broker-dealers and registered representatives, the MSRB writes municipal-securities rules, and the exchanges set member rules. To become a registered rep you pass the SIE plus a 'top-off' exam (the Series 7), register through FINRA via FORM U4, disclose your background, and complete CONTINUING EDUCATION. Certain disqualifying events (felonies, certain misdemeanors, regulatory bars) cause STATUTORY DISQUALIFICATION from association with a member firm." },
        ],
      },
      {
        heading: "2. Prohibited practices",
        blocks: [
          { kind: "p", text: "A long list of practices is forbidden and heavily tested. CHURNING (excessive trading to generate commissions); FRONT-RUNNING (trading ahead of a known large customer order); MARKET MANIPULATION (matched orders, painting the tape, marking the close — creating fake activity); INSIDER TRADING (trading on material nonpublic information); SELLING AWAY (private securities transactions without firm approval); COMMINGLING customer funds with the firm's; GUARANTEEING a customer against loss; SHARING in a customer's account without written authorization and proportional investment; and UNAUTHORIZED trading. Markups must be fair under the 5% POLICY (a guideline, not a hard rule), and customers must receive trade CONFIRMATIONS." },
          { kind: "callout", label: "The classics", body: "Guaranteeing against loss, sharing in customer accounts without authorization, churning, front-running, and selling away are the most-tested prohibited practices. When in doubt on a conduct question, the answer is usually 'disclose and get firm/customer approval' or 'don't do it.'" },
        ],
      },
      {
        heading: "3. Communications with the public",
        blocks: [
          { kind: "p", text: "FINRA classifies COMMUNICATIONS into three types, with different review rules. RETAIL COMMUNICATIONS (distributed to more than 25 retail investors in 30 days — ads, websites, sales literature) generally require PRINCIPAL approval before use and may need FINRA filing. CORRESPONDENCE (to 25 or fewer retail investors in 30 days — most individual emails/letters) is subject to supervision and review but not pre-approval. INSTITUTIONAL COMMUNICATIONS (to institutional investors only) need internal policies but not principal pre-approval. All communications must be FAIR, BALANCED, and NOT MISLEADING — no guarantees, no omission of material risks, and any performance claims must be accurate. Telemarketing follows DO-NOT-CALL rules (calls only 8 a.m.–9 p.m. local time, maintain firm and national do-not-call lists)." },
        ],
      },
      {
        heading: "4. Dispute resolution and synthesis",
        blocks: [
          { kind: "p", text: "FINRA resolves matters through two distinct systems. The CODE OF ARBITRATION handles MONETARY disputes — between a customer and a firm, or between industry members — and arbitration decisions are BINDING with very limited appeal (customer arbitration requires a signed agreement, standard in account paperwork). The CODE OF PROCEDURE handles alleged RULE VIOLATIONS — FINRA's disciplinary process against a member or rep, which can result in fines, suspension, or a bar. (Memory aid: ARBITRATION = money disputes; CODE OF PROCEDURE = rule-violation discipline.) The chapter's core: the SEC sits atop SROs (FINRA, MSRB, exchanges); reps register via Form U4 and can be statutorily disqualified; prohibited practices include churning, front-running, manipulation, selling away, commingling, guaranteeing against loss, and unauthorized sharing/trading; communications are retail (principal approval), correspondence (review), or institutional, and must be fair and not misleading; and disputes go to arbitration (money) or the Code of Procedure (rule violations). Over-learn the prohibited-practices list and the arbitration-vs-Code-of-Procedure distinction." },
        ],
      },
    ],
    keyTerms: [
      { term: "SEC / SROs", def: "Top federal regulator; FINRA, MSRB, and exchanges regulate members under it." },
      { term: "Form U4 / statutory disqualification", def: "Registration form; disqualifying events bar association with a member." },
      { term: "Churning", def: "Excessive trading to generate commissions." },
      { term: "Front-running", def: "Trading ahead of a known large customer order." },
      { term: "Market manipulation", def: "Matched orders, painting the tape, marking the close — faking activity." },
      { term: "Selling away", def: "Private securities transactions without firm approval; prohibited." },
      { term: "Guaranteeing against loss / sharing", def: "Prohibited; sharing needs written authorization and proportional investment." },
      { term: "5% policy", def: "Markup/commission fairness guideline (not a hard limit)." },
      { term: "Retail communication", def: ">25 retail investors/30 days; needs principal approval, maybe FINRA filing." },
      { term: "Correspondence", def: "≤25 retail investors/30 days; supervised/reviewed, not pre-approved." },
      { term: "Code of Arbitration", def: "Resolves binding MONETARY disputes (customer/firm, member/member)." },
      { term: "Code of Procedure", def: "FINRA's disciplinary process for RULE VIOLATIONS." },
    ],
    takeaways: [
      "The SEC oversees SROs (FINRA, MSRB, exchanges); reps register via Form U4, meet continuing education, and can be statutorily disqualified by certain events.",
      "Prohibited practices include churning, front-running, market manipulation, insider trading, selling away, commingling, guaranteeing against loss, unauthorized sharing, and unauthorized trading.",
      "Markups must be fair under the 5% policy (a guideline), and customers must get trade confirmations.",
      "Communications are retail (>25 retail/30 days — principal approval), correspondence (≤25 — reviewed), or institutional; all must be fair, balanced, and not misleading.",
      "Telemarketing follows do-not-call rules (8 a.m.–9 p.m. local; firm and national lists).",
      "Disputes go to arbitration (binding MONETARY disputes) or the Code of Procedure (FINRA discipline for RULE VIOLATIONS).",
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

  {
    id: "s7eq-d1", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 1,
    stem: "In a corporate liquidation, common stockholders are paid:",
    choices: ["First, before all creditors", "After secured creditors but before bondholders", "Last, after creditors and preferred shareholders", "At the same time as preferred shareholders"],
    answerIndex: 2,
    explanation: "Common stockholders have a residual claim — they are paid last, after creditors and preferred shareholders. In exchange, they hold voting rights and benefit most from growth.",
  },
  {
    id: "s7eq-d2", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 3,
    stem: "A company has $6 cumulative preferred and skipped dividends for two years. Before common shareholders receive any dividend in year 3, preferred holders must receive:",
    choices: ["$6", "$12", "$18", "$0"],
    answerIndex: 2,
    explanation: "Cumulative preferred accrues skipped dividends in arrears: 2 years × $6 = $12, plus the current $6 = $18 per share must be paid before any common dividend. Noncumulative preferred would require only the current $6.",
  },
  {
    id: "s7eq-d3", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "Compared with a warrant, a stock right typically has:",
    choices: ["A longer term and an exercise price above market", "A short term and a subscription price below market", "No expiration", "Voting rights"],
    answerIndex: 1,
    explanation: "Rights are short-term (weeks), issued to existing shareholders at a subscription price below the current market price. Warrants are long-term (years) with an exercise price above market at issuance, often attached to bonds as sweeteners.",
  },
  {
    id: "s7eq-d4", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "To be entitled to a declared dividend, an investor must purchase the stock:",
    choices: ["On the ex-dividend date", "Before the ex-dividend date", "On the payment date", "On the record date"],
    answerIndex: 1,
    explanation: "An investor must buy before the ex-dividend date to receive the dividend; buying on or after the ex-date excludes them. The stock price typically drops by the dividend amount on the ex-date.",
  },
  {
    id: "s7eq-d5", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 1,
    stem: "Preferred stock is best described as:",
    choices: ["A debt security with a maturity date", "Equity with a fixed dividend and priority over common, generally nonvoting", "A short-term money-market instrument", "A type of stock right"],
    answerIndex: 1,
    explanation: "Preferred stock is equity that pays a fixed dividend and has priority over common stock for dividends and liquidation, but it is generally nonvoting and does not participate in the company's growth.",
  },
  {
    id: "s7eq-d6", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "An American Depositary Receipt (ADR) allows a US investor to:",
    choices: ["Buy US Treasury bonds at a discount", "Hold shares of a foreign company trading in US dollars on US markets", "Receive guaranteed dividends", "Avoid all currency risk"],
    answerIndex: 1,
    explanation: "An ADR is a US-traded, dollar-denominated receipt representing shares of a foreign company, letting US investors hold foreign equities conveniently. (Currency risk still exists in the underlying foreign shares.)",
  },

  {
    id: "s7uw-d1", examSlug: "series-7", topicId: "underwriting", topicName: "Underwriting & Regulation", difficulty: 1,
    stem: "The Securities Act of 1933 primarily regulates:",
    choices: ["The secondary trading market", "The issuance of new securities (primary market)", "Insider trading", "Stock exchanges"],
    answerIndex: 1,
    explanation: "The Securities Act of 1933 governs the primary market — new issues — requiring registration and a prospectus for full disclosure. The Securities Exchange Act of 1934 regulates the secondary market.",
  },
  {
    id: "s7uw-d2", examSlug: "series-7", topicId: "underwriting", topicName: "Underwriting & Regulation", difficulty: 2,
    stem: "In a FIRM COMMITMENT underwriting, the underwriter:",
    choices: ["Acts only as an agent with no risk", "Buys the entire issue and bears the risk of unsold shares", "Guarantees the stock price will rise", "Is exempt from registration"],
    answerIndex: 1,
    explanation: "In a firm commitment, the underwriter buys the whole issue from the issuer and resells it, bearing the risk of any unsold shares — the issuer is guaranteed its proceeds. In a best-efforts deal, the underwriter is only an agent and the issuer bears the risk.",
  },
  {
    id: "s7uw-d3", examSlug: "series-7", topicId: "underwriting", topicName: "Underwriting & Regulation", difficulty: 2,
    stem: "The preliminary prospectus used to gather indications of interest during the cooling-off period is called the:",
    choices: ["Tombstone", "Red herring", "Final prospectus", "Registration statement"],
    answerIndex: 1,
    explanation: "The red herring is the preliminary prospectus used during the minimum 20-day cooling-off period; securities cannot be sold yet, but indications of interest may be gathered. A tombstone is a brief announcement ad.",
  },
  {
    id: "s7uw-d4", examSlug: "series-7", topicId: "underwriting", topicName: "Underwriting & Regulation", difficulty: 2,
    stem: "SEC registration of a new securities offering means that the SEC:",
    choices: ["Approves and endorses the security", "Guarantees the investment", "Has confirmed required disclosures were made, not that it endorses the security", "Sets the offering price"],
    answerIndex: 2,
    explanation: "SEC registration only confirms that required disclosures were made; it is explicitly NOT approval, endorsement, or a guarantee of the security's merit or accuracy.",
  },
  {
    id: "s7uw-d5", examSlug: "series-7", topicId: "underwriting", topicName: "Underwriting & Regulation", difficulty: 1,
    stem: "The Securities Exchange Act of 1934 created which regulator?",
    choices: ["FINRA", "The Federal Reserve", "The SEC", "The MSRB"],
    answerIndex: 2,
    explanation: "The Securities Exchange Act of 1934 created the Securities and Exchange Commission (SEC) and regulates the secondary market, exchanges, broker-dealers, issuer reporting, and insider trading.",
  },
  {
    id: "s7uw-d6", examSlug: "series-7", topicId: "underwriting", topicName: "Underwriting & Regulation", difficulty: 3,
    stem: "A private placement sold under Regulation D is generally offered to:",
    choices: ["The general public via a prospectus", "Accredited investors without a public offering", "Only foreign investors", "Government agencies only"],
    answerIndex: 1,
    explanation: "Regulation D permits private placements to accredited investors (meeting income/net-worth thresholds) and a limited number of others, without a public offering or full registration. Rule 144 then governs the resale of the resulting restricted stock.",
  },

  {
    id: "s7gov-d1", examSlug: "series-7", topicId: "govt", topicName: "Government & Agency Securities", difficulty: 1,
    stem: "Treasury bills (T-bills) are:",
    choices: ["Long-term bonds paying semiannual interest", "Short-term securities issued at a discount with no coupon", "Inflation-protected with adjusting principal", "Backed only by a GSE"],
    answerIndex: 1,
    explanation: "T-bills mature in one year or less, pay no coupon, and are issued at a discount; the return is the difference between the discounted price and face value. Notes and bonds pay semiannual interest.",
  },
  {
    id: "s7gov-d2", examSlug: "series-7", topicId: "govt", topicName: "Government & Agency Securities", difficulty: 2,
    stem: "Interest on U.S. Treasury securities is:",
    choices: ["Exempt from federal tax but subject to state tax", "Subject to federal tax but exempt from state and local tax", "Exempt from all taxes", "Taxed only at the local level"],
    answerIndex: 1,
    explanation: "Treasury interest is subject to federal income tax but exempt from state and local tax — the mirror image of municipal bonds, which are federally exempt.",
  },
  {
    id: "s7gov-d3", examSlug: "series-7", topicId: "govt", topicName: "Government & Agency Securities", difficulty: 3,
    stem: "An investor holds $10,000 of 2% TIPS; over a year inflation is 3%. The adjusted principal becomes:",
    choices: ["$10,000", "$10,200", "$10,300", "$9,700"],
    answerIndex: 2,
    explanation: "TIPS principal adjusts with inflation: $10,000 × 1.03 = $10,300. The 2% coupon then applies to the adjusted principal (~$206), protecting the investor's purchasing power.",
  },
  {
    id: "s7gov-d4", examSlug: "series-7", topicId: "govt", topicName: "Government & Agency Securities", difficulty: 2,
    stem: "Which agency's mortgage-backed securities ARE backed by the full faith and credit of the U.S. government?",
    choices: ["Fannie Mae (FNMA)", "Freddie Mac (FHLMC)", "Ginnie Mae (GNMA)", "None of them"],
    answerIndex: 2,
    explanation: "Ginnie Mae (GNMA) is a government agency whose MBS carry the full faith and credit of the U.S. government. Fannie Mae and Freddie Mac are GSEs whose securities do not.",
  },
  {
    id: "s7gov-d5", examSlug: "series-7", topicId: "govt", topicName: "Government & Agency Securities", difficulty: 3,
    stem: "The distinctive risk of a mortgage-backed pass-through security is:",
    choices: ["Default risk on Treasuries", "Prepayment risk when rates fall and homeowners refinance", "Currency risk", "That it never returns principal"],
    answerIndex: 1,
    explanation: "Prepayment risk: when interest rates fall, homeowners refinance and repay early, returning principal to investors precisely when it must be reinvested at lower rates. CMOs redistribute this risk across tranches.",
  },
  {
    id: "s7gov-d6", examSlug: "series-7", topicId: "govt", topicName: "Government & Agency Securities", difficulty: 1,
    stem: "STRIPS are best described as:",
    choices: ["Inflation-protected Treasuries", "Zero-coupon Treasury securities bought at a discount", "Short-term agency notes", "Municipal bonds"],
    answerIndex: 1,
    explanation: "STRIPS are zero-coupon Treasuries created by separating a bond's coupon and principal payments; each piece is bought at a discount and matures at face value, with annual phantom-income taxation.",
  },

  {
    id: "s7dpp-d1", examSlug: "series-7", topicId: "dpp", topicName: "Direct Participation Programs", difficulty: 1,
    stem: "A direct participation program (DPP) is taxed:",
    choices: ["At the entity level like a C corporation", "As a pass-through, with items flowing to investors", "Only when the partnership dissolves", "At a flat 21% rate"],
    answerIndex: 1,
    explanation: "A DPP (limited partnership) pays no entity-level tax; income, gains, losses, deductions, and credits pass through to the limited partners, who report them individually — a single layer of taxation.",
  },
  {
    id: "s7dpp-d2", examSlug: "series-7", topicId: "dpp", topicName: "Direct Participation Programs", difficulty: 2,
    stem: "In a limited partnership, the general partner:",
    choices: ["Is a passive investor with limited liability", "Manages the program and has unlimited personal liability", "Cannot make decisions", "Has liability capped at the investment"],
    answerIndex: 1,
    explanation: "The general partner manages the program and bears unlimited personal liability for partnership debts. Limited partners are passive, with liability limited to their investment.",
  },
  {
    id: "s7dpp-d3", examSlug: "series-7", topicId: "dpp", topicName: "Direct Participation Programs", difficulty: 3,
    stem: "Passive losses generated by a DPP may generally be used to offset:",
    choices: ["Salary (earned income)", "Portfolio income such as dividends", "Passive income only", "Any type of income"],
    answerIndex: 2,
    explanation: "Passive losses can offset only passive income — not salary or portfolio income. Unused passive losses are suspended and carried forward to future passive income or released when the interest is disposed of.",
  },
  {
    id: "s7dpp-d4", examSlug: "series-7", topicId: "dpp", topicName: "Direct Participation Programs", difficulty: 2,
    stem: "A limited partner who begins actively managing the partnership's business risks:",
    choices: ["A higher dividend", "Losing limited-liability protection", "Becoming tax-exempt", "Automatic conversion to a C corporation"],
    answerIndex: 1,
    explanation: "Limited partners must remain passive; taking an active management role can cause them to be treated as general partners and lose their limited-liability protection.",
  },
  {
    id: "s7dpp-d5", examSlug: "series-7", topicId: "dpp", topicName: "Direct Participation Programs", difficulty: 2,
    stem: "When evaluating a DPP, a representative should consider FIRST:",
    choices: ["The tax write-offs it generates", "Its economic viability as a business", "The general partner's tax bracket", "The size of the sales commission"],
    answerIndex: 1,
    explanation: "A DPP must make economic sense on its own; economic viability is evaluated first, and tax benefits second. An investment that only works because of tax write-offs is unsuitable.",
  },
  {
    id: "s7dpp-d6", examSlug: "series-7", topicId: "dpp", topicName: "Direct Participation Programs", difficulty: 1,
    stem: "A key liquidity characteristic of DPPs is that they are:",
    choices: ["Traded actively on exchanges", "Illiquid, with no active secondary market", "Redeemable daily at NAV", "Guaranteed by the SEC"],
    answerIndex: 1,
    explanation: "DPPs are illiquid, long-term investments with no active secondary market, so they suit only investors who can bear illiquidity and the associated risk.",
  },

  {
    id: "s7oa-d1", examSlug: "series-7", topicId: "options-adv", topicName: "Advanced Options", difficulty: 2,
    stem: "A vertical spread that costs net premium (you pay more than you receive) is a:",
    choices: ["Credit spread that profits as the spread narrows", "Debit spread that profits as the spread widens", "Straddle", "Covered call"],
    answerIndex: 1,
    explanation: "A debit spread is paid for (net premium out) and profits when the spread widens. A credit spread brings in net premium and profits when the spread narrows toward worthless.",
  },
  {
    id: "s7oa-d2", examSlug: "series-7", topicId: "options-adv", topicName: "Advanced Options", difficulty: 3,
    stem: "An investor buys a 50 call for 4 and sells a 60 call for 1.50. The maximum gain is:",
    choices: ["$250", "$750", "$1,000", "Unlimited"],
    answerIndex: 1,
    explanation: "Net debit = 4 − 1.50 = 2.50. Max gain = strike difference − net debit = (60 − 50) − 2.50 = 7.50 × 100 = $750. (Max loss is the $250 debit; the two sum to the $1,000 strike difference × 100.)",
  },
  {
    id: "s7oa-d3", examSlug: "series-7", topicId: "options-adv", topicName: "Advanced Options", difficulty: 3,
    stem: "For the same 50/60 call spread (net debit 2.50), the breakeven is:",
    choices: ["$50.00", "$52.50", "$57.50", "$60.00"],
    answerIndex: 1,
    explanation: "A debit call spread's breakeven is the lower strike plus the net debit: 50 + 2.50 = $52.50.",
  },
  {
    id: "s7oa-d4", examSlug: "series-7", topicId: "options-adv", topicName: "Advanced Options", difficulty: 2,
    stem: "A long straddle (buy a call and a put at the same strike) is a bet that the stock will:",
    choices: ["Stay near the strike", "Make a big move in either direction", "Rise only", "Pay a dividend"],
    answerIndex: 1,
    explanation: "A long straddle profits from a large move in either direction (long volatility), with breakevens at the strike ± total premium. A short straddle profits if the stock stays near the strike.",
  },
  {
    id: "s7oa-d5", examSlug: "series-7", topicId: "options-adv", topicName: "Advanced Options", difficulty: 2,
    stem: "To hedge a SHORT stock position against the stock rising, an investor would:",
    choices: ["Buy a put", "Buy a call (protective call)", "Sell a call", "Do nothing"],
    answerIndex: 1,
    explanation: "A short seller's risk is the stock rising, so buying a call (a protective call) caps that upside loss. For a LONG stock position, the protective hedge is buying a put instead.",
  },
  {
    id: "s7oa-d6", examSlug: "series-7", topicId: "options-adv", topicName: "Advanced Options", difficulty: 1,
    stem: "A strangle differs from a straddle in that it uses:",
    choices: ["The same strike for both options", "Different strikes (typically out-of-the-money)", "Only calls", "Only puts"],
    answerIndex: 1,
    explanation: "A strangle buys (or sells) a call and a put at DIFFERENT strikes — usually out-of-the-money — making it cheaper than a same-strike straddle but requiring a bigger move to profit.",
  },

  {
    id: "s7ec-d1", examSlug: "series-7", topicId: "economics", topicName: "Economics & Analysis", difficulty: 2,
    stem: "Which is the Federal Reserve's most-used tool for influencing the money supply?",
    choices: ["Changing reserve requirements", "Open market operations (buying/selling Treasuries)", "Fiscal policy", "Setting tax rates"],
    answerIndex: 1,
    explanation: "Open market operations — buying and selling Treasury securities — are the Fed's most-used tool. Buying adds money and lowers rates; selling drains money and raises rates. Reserve requirements are the most powerful but least-used; taxing/spending is fiscal policy (Congress).",
  },
  {
    id: "s7ec-d2", examSlug: "series-7", topicId: "economics", topicName: "Economics & Analysis", difficulty: 2,
    stem: "If the Fed tightens monetary policy, interest rates rise. Existing bond prices will:",
    choices: ["Rise", "Fall", "Stay the same", "Become tax-free"],
    answerIndex: 1,
    explanation: "Bond prices move inversely to interest rates. Tight money raises rates, so existing (lower-coupon) bond prices fall — one of the most-tested chains on the exam.",
  },
  {
    id: "s7ec-d3", examSlug: "series-7", topicId: "economics", topicName: "Economics & Analysis", difficulty: 1,
    stem: "A recession is generally defined as:",
    choices: ["One month of falling stock prices", "Two or more consecutive quarters of declining GDP", "Any rise in unemployment", "A single bad earnings season"],
    answerIndex: 1,
    explanation: "A recession is commonly defined as two or more consecutive quarters of declining real GDP — the contraction phase of the business cycle.",
  },
  {
    id: "s7ec-d4", examSlug: "series-7", topicId: "economics", topicName: "Economics & Analysis", difficulty: 2,
    stem: "An INVERTED yield curve (short-term rates higher than long-term rates) often signals:",
    choices: ["Strong expected growth", "An expected economic slowdown", "Rising inflation", "A stock market rally"],
    answerIndex: 1,
    explanation: "An inverted (descending) yield curve, where short rates exceed long rates, often signals an expected slowdown and typically appears after aggressive Fed tightening. A normal curve ascends with maturity.",
  },
  {
    id: "s7ec-d5", examSlug: "series-7", topicId: "economics", topicName: "Economics & Analysis", difficulty: 2,
    stem: "An analyst who studies a company's financial statements, earnings, and P/E ratio is using:",
    choices: ["Technical analysis", "Fundamental analysis", "Open market operations", "The yield curve"],
    answerIndex: 1,
    explanation: "Fundamental analysis studies underlying value — financial statements, earnings, ratios, management, industry — to decide WHAT to buy. Technical analysis instead studies price and volume charts to decide WHEN to buy.",
  },
  {
    id: "s7ec-d6", examSlug: "series-7", topicId: "economics", topicName: "Economics & Analysis", difficulty: 1,
    stem: "Fiscal policy is controlled by:",
    choices: ["The Federal Reserve", "Congress and the President (taxing and spending)", "FINRA", "The stock exchanges"],
    answerIndex: 1,
    explanation: "Fiscal policy — government taxing and spending — is set by Congress and the President. Monetary policy (the money supply and rates) is run by the Federal Reserve.",
  },

  {
    id: "s7rg-d1", examSlug: "series-7", topicId: "regulations", topicName: "FINRA Rules & Conduct", difficulty: 2,
    stem: "A registered representative who sells a private securities investment without their firm's approval has committed:",
    choices: ["Churning", "Selling away", "Front-running", "Painting the tape"],
    answerIndex: 1,
    explanation: "Selling away — engaging in private securities transactions without firm approval — is prohibited. Churning is excessive trading; front-running is trading ahead of a customer order; painting the tape is market manipulation.",
  },
  {
    id: "s7rg-d2", examSlug: "series-7", topicId: "regulations", topicName: "FINRA Rules & Conduct", difficulty: 2,
    stem: "Which is a PROHIBITED practice?",
    choices: ["Disclosing a conflict of interest", "Guaranteeing a customer against loss", "Recommending a suitable investment", "Delivering a prospectus"],
    answerIndex: 1,
    explanation: "Guaranteeing a customer against loss is prohibited. Sharing in a customer account also requires written authorization and proportional investment. The other choices are proper conduct.",
  },
  {
    id: "s7rg-d3", examSlug: "series-7", topicId: "regulations", topicName: "FINRA Rules & Conduct", difficulty: 3,
    stem: "A firm advertisement distributed to more than 25 retail investors in 30 days is a 'retail communication' that generally requires:",
    choices: ["No review at all", "Principal approval before use", "Only the customer's signature", "SEC pre-clearance"],
    answerIndex: 1,
    explanation: "Retail communications (more than 25 retail investors in 30 days) generally require principal approval before first use and may need FINRA filing. Correspondence (25 or fewer) is reviewed/supervised but not pre-approved.",
  },
  {
    id: "s7rg-d4", examSlug: "series-7", topicId: "regulations", topicName: "FINRA Rules & Conduct", difficulty: 3,
    stem: "A customer's MONETARY dispute with a brokerage firm is resolved through FINRA's:",
    choices: ["Code of Procedure", "Code of Arbitration", "Form U4 process", "Telemarketing rules"],
    answerIndex: 1,
    explanation: "The Code of Arbitration resolves binding monetary disputes (customer/firm or member/member). The Code of Procedure is FINRA's disciplinary process for rule violations (fines, suspension, bar).",
  },
  {
    id: "s7rg-d5", examSlug: "series-7", topicId: "regulations", topicName: "FINRA Rules & Conduct", difficulty: 1,
    stem: "A registered representative registers with FINRA by filing:",
    choices: ["Form U4", "Form 1040", "Form ADV", "A prospectus"],
    answerIndex: 0,
    explanation: "Associated persons register through FINRA via Form U4, disclosing background and disciplinary history. Form ADV is for investment advisers; Form 1040 is a tax return.",
  },
  {
    id: "s7rg-d6", examSlug: "series-7", topicId: "regulations", topicName: "FINRA Rules & Conduct", difficulty: 2,
    stem: "Under telemarketing (do-not-call) rules, cold calls to prospects are generally permitted only:",
    choices: ["Any time, day or night", "Between 8 a.m. and 9 p.m. in the called party's local time", "Only on weekends", "Only after a sale"],
    answerIndex: 1,
    explanation: "Telemarketing rules limit cold calls to 8 a.m.–9 p.m. in the called party's local time, and firms must maintain firm-specific and national do-not-call lists.",
  },
];
