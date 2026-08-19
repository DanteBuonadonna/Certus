// ============================================================
// Certus — Series 7 content, wave 3
// Regulations & Trading Practices, US Government & Agency Securities.
// Brings Series 7 to 8 core topics.
// ============================================================

import { Chapter, Question } from "./types";

export const s7Wave3Chapters: Chapter[] = [
  // REGULATIONS & TRADING PRACTICES
  {
    id: "s7-regs",
    examSlug: "series-7",
    topicId: "regulations",
    topicName: "Regulations & Trading Practices",
    title: "Regulations & Prohibited Trading Practices",
    readingMinutes: 5,
    summary: "The regulatory framework, settlement, communications rules, and the practices that get reps barred.",
    intro:
      "A registered representative operates inside a dense regulatory framework designed to protect investors and keep markets fair. The Series 7 tests who regulates what, the rules governing communications and settlement, and — most importantly — the prohibited practices that lead to fines, suspension, or being barred from the industry. Knowing what you may not do is as important as knowing what you may.",
    sections: [
      {
        heading: "Wash trades and the Do-Not-Call regime",
        blocks: [
          { kind: "p", text: "A WASH TRADE is buying and selling the same security so that no change in beneficial ownership occurs. The activity is entirely fictitious, manufactured to suggest volume or to generate a tax loss, and it is prohibited as a manipulation. Note the separate TAX concept with a similar name: the wash SALE rule disallows a loss if a substantially identical security is repurchased within 30 days before or after the sale — a 61-day window — which is a tax consequence rather than a securities violation." },
          { kind: "p", text: "On the prospecting side, every firm must maintain a DO NOT CALL list, add anyone who requests removal promptly, and screen against the National Do-Not-Call Registry. The request survives indefinitely and applies regardless of any prior relationship. Calls may only be placed between 8:00 a.m. and 9:00 p.m. in the CALLED PARTY'S time zone." },
        ],
      },
      {
        heading: "Manipulation: creating a false picture of the market",
        blocks: [
          { kind: "p", text: "The Securities Exchange Act of 1934 exists largely to keep prices honest, and the practices it prohibits share a common wrong: making the market appear to be something it is not. Recognizing the underlying deception is more reliable than memorizing labels, because the exam describes conduct and asks you to name it." },
          { kind: "table", table: { caption: "Manipulative practices.", headers: ["Practice", "What it looks like"], rows: [["Painting the tape", "Trading among cooperating parties to fake activity"], ["Matched orders", "Prearranged offsetting buy and sell orders"], ["Wash trade", "Buying and selling the same security with no change in beneficial ownership"], ["Marking the close", "Trading late in the session to influence the closing price"], ["Capping / pegging", "Trading to hold a price down or up, often near an option expiration"], ["Spreading rumors", "Circulating false information to move a price"]] } },
        ],
      },
      {
        heading: "Conflicts between the firm's interest and the customer's",
        blocks: [
          { kind: "p", text: "A second family of violations puts the representative's compensation ahead of the client. CHURNING is excessive trading to generate commissions, judged against the customer's objectives and resources rather than any fixed trade count. FRONT-RUNNING is trading ahead of a known customer block order to profit from its expected price impact. BREAKPOINT SELLING is deliberately placing a mutual fund investment just below a breakpoint so the sales charge — and the representative's compensation — stays high." },
          { kind: "p", text: "Others concern authority and disclosure. UNAUTHORIZED TRADING is entering an order without the customer's consent, and discretion requires WRITTEN authorization before it may be exercised. SELLING AWAY is conducting securities business outside the firm without its knowledge and approval. COMMINGLING mixes customer securities with firm assets. GUARANTEEING a customer against loss, or sharing in an account except under narrowly permitted written arrangements proportional to capital contributed, is prohibited outright." },
          { kind: "callout", label: "Insider trading and the penalty", body: "Trading on material nonpublic information is prohibited, and liability reaches anyone who receives and trades on a tip, not just the original source. Under the Insider Trading and Securities Fraud Enforcement Act of 1988, civil penalties reach THREE TIMES the profit gained or loss avoided, and apply to controlling persons — the firm — as well as the individual. Criminal penalties are separate and additional." },
        ],
      },
      {
        heading: "The everyday rules that carry point value",
        blocks: [
          { kind: "bullets", items: ["GIFTS in connection with business are capped at $100 per person per year.", "OUTSIDE BUSINESS ACTIVITIES must be disclosed to the firm in writing beforehand.", "PRIVATE SECURITIES TRANSACTIONS require written notice, and firm approval where the representative is compensated.", "Customer COMPLAINTS (any written grievance) must be recorded and reported to FINRA quarterly.", "Most books and records are retained three years; some run six years or the life of the firm.", "Disputes are resolved through FINRA arbitration, which is BINDING with essentially no appeal, or mediation, which is voluntary and non-binding."] },
          { kind: "p", text: "One more distinction worth holding: REGULATION BEST INTEREST, effective June 30, 2020, requires that a recommendation to a retail customer be in that customer's best interest, and that the firm not put its own financial interest ahead of theirs. The older SUITABILITY standard merely required the recommendation be appropriate — a bar that permitted recommending the suitable product paying the most. Fact patterns describing two suitable products with different compensation are testing exactly this change." },
        ],
      },
    ],
    keyTerms: [
      { term: "FINRA", def: "The self-regulatory organization overseeing broker-dealers and registered representatives." },
      { term: "Securities Act of 1933", def: "Governs new securities issuance — registration and prospectus delivery (the 'paper act')." },
      { term: "Securities Exchange Act of 1934", def: "Governs secondary-market trading and created the SEC." },
      { term: "Front-running", def: "Trading ahead of a known large customer order to profit from its price impact; prohibited." },
      { term: "Selling away", def: "Engaging in securities transactions outside the firm without its approval; prohibited." },
    ],
    takeaways: [
      "The 1933 Act covers new issues; the 1934 Act covers secondary trading and created the SEC.",
      "Retail communications (>25 retail investors) generally need principal approval; all must be fair and not misleading.",
      "Most trades settle T+1; you must own shares before the ex-dividend date to receive a dividend.",
      "Front-running, churning, market manipulation, insider trading, and selling away are all prohibited.",
    ],
  },

  // US GOVERNMENT & AGENCY SECURITIES
  {
    id: "s7-govt",
    examSlug: "series-7",
    topicId: "govt",
    topicName: "US Government & Agency Securities",
    title: "US Government & Agency Securities",
    readingMinutes: 5,
    summary: "Treasury bills, notes, bonds, TIPS, and the agency/mortgage-backed market.",
    intro:
      "U.S. government securities are the bedrock of the fixed-income market — considered free of credit risk because they're backed by the federal government — and they set the benchmark against which all other bonds are priced. The Series 7 tests the different Treasury instruments, their tax treatment, and the distinction between true government backing and the agency securities that only look as safe.",
    sections: [
      {
        heading: "The Treasury ladder",
        blocks: [
          { kind: "p", text: "Treasury securities are direct obligations of the United States, carry its full faith and credit, and are considered free of credit risk — though emphatically not of INTEREST RATE risk, which is what actually moves their prices. They are distinguished by maturity and by whether they pay a coupon." },
          { kind: "table", table: { caption: "Treasury issues.", headers: ["Security", "Maturity", "Form"], rows: [["Treasury bill", "1 year or less", "Zero coupon, issued at a DISCOUNT"], ["Treasury note", "2 to 10 years", "Semiannual coupon"], ["Treasury bond", "Over 10 years", "Semiannual coupon"], ["TIPS", "Various", "Principal adjusts with the CPI"], ["STRIPS", "Various", "Zero coupon, created by stripping coupons"]] } },
          { kind: "p", text: "T-bills pay no interest: the entire return is the difference between the discounted purchase price and the face value received at maturity, which is why they carry no reinvestment risk. STRIPS are also zero-coupon, making them ideal for a dated funding need since the maturity amount is known at purchase — but holders owe annual tax on PHANTOM accreted interest they have not received in cash. TIPS adjust PRINCIPAL with inflation, so both the coupon payments and the final principal rise with the CPI." },
          { kind: "example", example: { title: "reading a government quote", prompt: "A Treasury note is quoted 101-08. What is the dollar price on $10,000 face value?", steps: ["Government notes and bonds are quoted in 32nds, not decimals.", "The digits after the hyphen are 32nds: 08/32 = 0.25.", "The quote is therefore 101.25% of par.", "$10,000 × 1.0125 = $10,125."], answer: "$10,125. Reading 101-08 as $101.08 is exactly the error the 32nds convention catches — and government accrued interest uses ACTUAL/ACTUAL, not the 30/360 used for corporates and munis." } },
        ],
      },
      {
        heading: "Agencies: the guarantee that is not always there",
        blocks: [
          { kind: "p", text: "Agency securities are the most reliably tested distinction in this chapter, because the market treats them as safer than the law actually guarantees. GINNIE MAE is a government corporation within HUD, and its mortgage pass-through certificates carry the EXPLICIT full faith and credit of the United States. FANNIE MAE and FREDDIE MAC are government-sponsored ENTERPRISES — publicly traded companies whose obligations carry no explicit federal guarantee, only a widely assumed implied one." },
          { kind: "p", text: "Mortgage pass-throughs also introduce a risk pattern that does not exist in plain Treasuries. Homeowners refinance when rates FALL, which returns principal to the certificate holder precisely when reinvestment opportunities are worst — PREPAYMENT risk. When rates RISE, prepayments slow and the holder is locked into a below-market yield for longer — EXTENSION risk. That two-sided exposure is why mortgage securities behave differently from the Treasuries they superficially resemble." },
          { kind: "callout", label: "Taxation of government interest", body: "Interest on Treasury securities is subject to FEDERAL income tax but EXEMPT from state and local tax. Municipal interest runs the other way — exempt federally, usually exempt in the issuer's own state. Agency securities vary: Ginnie Mae pass-through interest is fully taxable at all levels, since it represents mortgage interest passed through." },
        ],
      },
    ],
    keyTerms: [
      { term: "Treasury bill", def: "Short-term (≤1 yr) government debt sold at a discount with no coupon; return is the discount." },
      { term: "TIPS", def: "Treasury securities whose principal adjusts with inflation, protecting purchasing power." },
      { term: "GNMA (Ginnie Mae)", def: "A true federal agency; its securities carry full faith and credit of the U.S. government." },
      { term: "GSE (Fannie/Freddie)", def: "Government-sponsored enterprises whose securities are NOT explicitly government-backed." },
      { term: "Prepayment risk", def: "The risk that falling rates cause mortgages to be paid off early, returning principal at a bad time." },
    ],
    takeaways: [
      "T-bills are discount instruments; notes and bonds pay semiannual coupons; TIPS adjust for inflation.",
      "Treasury interest is federally taxable but state-exempt — the opposite of municipals.",
      "Ginnie Mae carries full faith and credit; Fannie and Freddie (GSEs) do not.",
      "Mortgage-backed securities carry prepayment risk when rates fall.",
    ],
  },

  {
    id: "s7-margin",
    examSlug: "series-7",
    topicId: "margin",
    topicName: "Margin Accounts",
    title: "Margin Accounts: Reg T, Maintenance, and Short Selling",
    readingMinutes: 8,
    summary: "How buying on credit works — Regulation T's 50% initial requirement, FINRA maintenance minimums, and the special risks of short margin.",
    intro:
      "A margin account lets a customer borrow from the broker-dealer to buy securities, amplifying both gains and losses. The Series 7 tests the rules tightly: the Federal Reserve's Regulation T initial requirement, FINRA's maintenance minimums, and how short selling is margined. Get the two thresholds straight and the calculations follow.",
    sections: [
      {
        heading: "The long account: equity, debit, and Regulation T",
        blocks: [
          { kind: "p", text: "A margin account lets a customer buy securities partly with borrowed money. Under REGULATION T, set by the Federal Reserve, the initial deposit for a new equity purchase is 50% of the purchase price; the broker lends the rest, and that loan is the DEBIT BALANCE. The debit does not change as the market moves — only the market value does, which is what makes the equity calculation straightforward once you see it." },
          { kind: "formula", formula: { label: "Long margin account", expr: "Equity = Market Value − Debit Balance\nMaintenance requirement = 25% of market value (FINRA minimum)\nMaintenance call triggers when Market Value = Debit ÷ 0.75", note: "The debit stays FIXED. Every question about a moving market is really a question about market value changing while the debit sits still." } },
          { kind: "example", example: { title: "does a decline trigger a call?", prompt: "A customer buys 1,000 shares at $40 under Reg T. The stock falls to $30. Find equity and determine whether a maintenance call is issued.", steps: ["Purchase = 1,000 × $40 = $40,000. Reg T deposit = 50% = $20,000.", "The broker lends the balance, so the debit = $20,000 and stays there.", "At $30 the market value is $30,000, so equity = $30,000 − $20,000 = $10,000.", "FINRA maintenance = 25% × $30,000 = $7,500. Equity of $10,000 exceeds it — no call.", "The call would come when market value = $20,000 ÷ 0.75 = $26,667, or about $26.67 per share."], answer: "Equity $10,000, no call. The stock must fall to roughly $26.67 before a call is issued — knowing the trigger formula turns a guessing question into arithmetic." } },
        ],
      },
      {
        heading: "The short account, which works in reverse",
        blocks: [
          { kind: "p", text: "Short selling borrows stock, sells it, and hopes to buy it back cheaper. Because the position LOSES as the price RISES, the short account's arithmetic inverts. The sale proceeds plus the Reg T deposit form the CREDIT BALANCE, which stays fixed; equity is the credit balance less the current market value of the stock owed. Minimum maintenance on a short position is 30% of market value, higher than the long side because the potential loss is unbounded." },
          { kind: "formula", formula: { label: "Short margin account", expr: "Credit Balance = sale proceeds + Reg T deposit\nEquity = Credit Balance − Market Value\nMaintenance call when Market Value = Credit ÷ 1.30", note: "Short losses are theoretically UNLIMITED — there is no ceiling on how high a stock can go, which is what the higher requirement is guarding against." } },
          { kind: "example", example: { title: "short account under pressure", prompt: "A customer sells short 100 shares at $50. Find the credit balance and the price at which a maintenance call is triggered.", steps: ["Sale proceeds = 100 × $50 = $5,000.", "Reg T deposit = 50% of $5,000 = $2,500.", "Credit balance = $5,000 + $2,500 = $7,500, and it stays fixed.", "A call triggers when market value = credit ÷ 1.30 = $7,500 ÷ 1.30 = $5,769.23.", "Per share: $5,769.23 ÷ 100 = $57.69."], answer: "Credit balance $7,500; a call is triggered once the stock rises to about $57.69. Note the direction — for a short, the DANGER is the price going UP, the opposite of everything in the long account." } },
        ],
      },
      {
        heading: "Excess equity, and what is not marginable",
        blocks: [
          { kind: "p", text: "When a long position appreciates, equity rises above the Reg T requirement and the surplus is EXCESS EQUITY, which is credited to a line of credit called SMA — special memorandum account. A customer may borrow against SMA or use it to buy more securities, and the buying power it confers is generally twice the SMA amount, since Reg T requires only 50% down. A key feature: once created, SMA does not decrease when the market falls, though using it requires the account to remain above maintenance." },
          { kind: "bullets", items: ["Minimum equity to OPEN a margin account is generally $2,000, but never more than the purchase price in cash.", "New issues and mutual fund shares may not be purchased on margin, and typically must be held 30 days before becoming marginable.", "Options generally may not be purchased on margin — they must be paid for in full.", "The hypothecation agreement pledges the customer's securities as collateral; the loan consent, which is OPTIONAL, lets the firm lend them out.", "A margin call not met permits the firm to sell out enough of the position to satisfy it."] },
        ],
      },
    ],
    keyTerms: [
      { term: "Margin account", def: "An account in which the customer borrows from the broker-dealer to buy securities." },
      { term: "Regulation T", def: "The Federal Reserve rule setting the initial margin requirement at 50%." },
      { term: "Initial margin", def: "The minimum the customer must deposit at purchase — 50% under Reg T." },
      { term: "Maintenance margin", def: "The minimum equity that must be maintained: 25% long, 30% short (FINRA)." },
      { term: "Debit balance", def: "The amount a margin customer owes the firm (the loan)." },
      { term: "Equity (margin)", def: "Market value minus the debit balance — the customer's stake." },
      { term: "Margin call", def: "A demand for more funds when equity falls below the maintenance requirement." },
      { term: "Marginable securities", def: "Securities eligible to be purchased on margin (e.g., listed stocks)." },
      { term: "Hypothecation", def: "Pledging the margin securities to the firm as collateral for the loan." },
      { term: "House maintenance requirement", def: "A firm's stricter maintenance level above the FINRA minimum." },
      { term: "Short sale", def: "Selling borrowed shares to profit from a price decline; potential loss is unlimited." },
      { term: "Special Memorandum Account (SMA)", def: "A line tracking excess equity/buying power in a margin account." },
      { term: "Restricted account", def: "A long margin account whose equity is below the Reg T requirement." },
    ],
    takeaways: [
      "Reg T initial margin is 50% for long and short positions.",
      "FINRA maintenance minimums: 25% long, 30% short; falling below triggers a margin call.",
      "Short selling must be in a margin account and carries theoretically unlimited loss.",
      "Equity = market value − debit balance; excess buying power lives in the SMA.",
    ],
  },

  {
    id: "s7-options-adv",
    examSlug: "series-7",
    topicId: "options-adv",
    topicName: "Options Strategies",
    title: "Options Strategies: Hedging, Spreads, and Straddles",
    readingMinutes: 13,
    summary: "Beyond single options — protective puts and covered calls, debit and credit spreads, and straddles, with the max-gain/loss/breakeven logic the exam drills.",
    intro:
      "The Series 7 leans hard on multi-leg option strategies. The key is to recognize the strategy from the position, match it to a market outlook, and compute max gain, max loss, and breakeven. This chapter organizes the core strategies so the vignette patterns become automatic.",
    sections: [
      {
        heading: "Assignment, limits, and the clearing guarantee",
        blocks: [
          { kind: "p", text: "When an option holder exercises, the OPTIONS CLEARING CORPORATION assigns the obligation to a member firm, which then allocates it to a customer either at random or first-in-first-out under procedures it must disclose. ASSIGNMENT is therefore something a writer cannot predict or refuse — a covered writer simply delivers the shares they hold, while a naked writer must buy in the market at whatever the price has become. Because the OCC issues and guarantees every listed contract, no holder needs to worry about the specific person on the other side performing." },
          { kind: "p", text: "POSITION LIMITS cap how many contracts one investor, or a group acting in concert, may hold on the SAME SIDE of the market in a single underlying. Calls bought and puts written are one side (bullish); puts bought and calls written are the other. EXERCISE LIMITS cap how many may be exercised over a rolling five business days. Both exist to stop a single party cornering an underlying through the options market." },
        ],
      },
      {
        heading: "Hedging: the two positions built on stock you own",
        blocks: [
          { kind: "p", text: "The two most-tested strategies both start from a stock position, and they are mirror images. A COVERED CALL writes a call against stock you own: the premium is income and a small cushion, but the upside is capped because above the strike the stock is called away. A PROTECTIVE PUT buys a put against stock you own: it is genuine insurance, setting a floor at the strike, and like insurance it costs a premium you forfeit if the disaster never comes." },
          { kind: "example", example: { title: "covered call, fully worked", prompt: "An investor buys stock at $48 and writes a 50 call for $3. Find maximum gain, breakeven, and maximum loss.", steps: ["Maximum gain occurs at or above the $50 strike, where the stock is called away.", "Gain = ($50 − $48) + $3 premium = $5 per share, or $500.", "Breakeven = stock cost − premium received = $48 − $3 = $45.", "Maximum loss if the stock goes to zero = $45 per share, or $4,500."], answer: "Max gain $500, breakeven $45, max loss $4,500. The call did NOT protect the position — it reduced the loss by exactly the $3 premium and surrendered everything above $50." } },
          { kind: "example", example: { title: "protective put, the mirror image", prompt: "An investor buys stock at $48 and buys a 45 put for $2. Find maximum loss and breakeven.", steps: ["The put guarantees a sale at $45 however far the stock falls.", "Loss on the stock = $48 − $45 = $3 per share.", "Plus the $2 premium = $5 per share, or $500 total.", "Breakeven = $48 + $2 = $50 — the stock must recover the insurance cost first."], answer: "Max loss $500, breakeven $50, upside unlimited above $50. Compare directly with the covered call: the put COSTS money and caps the LOSS; the call EARNS money and caps the GAIN." } },
        ],
      },
      {
        heading: "Spreads: paying less, capping both ends",
        blocks: [
          { kind: "p", text: "A SPREAD buys one option and sells another of the same class, reducing cost in exchange for capping the gain. The direction is read from the net cash flow. A DEBIT spread costs money to establish and profits when the underlying moves in the direction you paid for. A CREDIT spread brings money in and profits when the underlying does NOT move against you — you keep the premium if both legs expire worthless." },
          { kind: "example", example: { title: "bull call spread", prompt: "Buy a 50 call for $5 and sell a 60 call for $2. Find the net debit, maximum gain, maximum loss, and breakeven.", steps: ["Net debit = $5 paid − $2 received = $3, or $300. Money went out, so it is a DEBIT spread and therefore bullish.", "Maximum gain = strike spread − net debit = ($60 − $50) − $3 = $7, or $700, reached at or above $60.", "Maximum loss = the net debit = $300, if both expire worthless below $50.", "Breakeven = lower strike + net debit = $50 + $3 = $53."], answer: "Debit $300, max gain $700, max loss $300, breakeven $53. Note the max gain and max loss always sum to the strike spread ($1,000) — a fast check on any spread answer." } },
          { kind: "example", example: { title: "bear put spread", prompt: "Buy a 60 put for $6 and sell a 50 put for $2. Find maximum gain, maximum loss, and breakeven.", steps: ["Net debit = $6 − $2 = $4, or $400. A debit spread using puts, so the view is BEARISH.", "Maximum gain = ($60 − $50) − $4 = $6, or $600, reached at or below $50.", "Maximum loss = the $400 debit.", "Breakeven = higher strike − net debit = $60 − $4 = $56."], answer: "Max gain $600, max loss $400, breakeven $56. Check: $600 + $400 = $1,000, the strike spread. The debit tells you the direction — with CALLS a debit is bullish, with PUTS a debit is bearish." } },
          { kind: "table", table: { caption: "Reading a spread in one step.", headers: ["Built with", "Net debit", "Net credit"], rows: [["Calls", "BULLISH (bull call spread)", "BEARISH (bear call spread)"], ["Puts", "BEARISH (bear put spread)", "BULLISH (bull put spread)"]] } },
        ],
      },
      {
        heading: "Straddles and combinations: betting on movement itself",
        blocks: [
          { kind: "p", text: "A STRADDLE buys (or sells) both a call and a put at the SAME strike. The long straddle is a bet on VOLATILITY without a direction — the buyer profits if the stock moves far enough either way, and loses the full premium only if it sits still at the strike. A STRANGLE uses different, typically out-of-the-money strikes: cheaper to establish, but requiring a larger move before either leg pays." },
          { kind: "example", example: { title: "long straddle breakevens", prompt: "An investor buys a 50 call for $3 and a 50 put for $2. Find the maximum loss and both breakevens.", steps: ["Total premium paid = $3 + $2 = $5, or $500.", "Maximum loss = the full $500, occurring only if the stock closes exactly at $50 and both expire worthless.", "Upside breakeven = strike + total premium = $50 + $5 = $55.", "Downside breakeven = strike − total premium = $50 − $5 = $45."], answer: "Max loss $500; profits above $55 or below $45. The stock must move more than 10% in either direction just to break even — which is why straddles are expensive bets that require genuine volatility, not merely uncertainty." } },
          { kind: "callout", label: "Short straddle risk", body: "SELLING a straddle collects both premiums and profits if the stock stays put — but the short call leg carries theoretically UNLIMITED loss. That single fact makes the short straddle unsuitable for all but the most sophisticated, well-capitalized accounts, and it carries the strictest approval requirements." },
        ],
      },
    ],
    keyTerms: [
      { term: "Protective put", def: "Long stock + long put; caps downside while keeping upside, for the premium cost." },
      { term: "Covered call", def: "Long stock + short call; earns premium income by capping upside at the strike." },
      { term: "Collar", def: "Own stock, buy a put, and sell a call to bracket the outcome at low cost." },
      { term: "Debit spread", def: "A spread for which you pay net premium; profits when the market moves your way." },
      { term: "Credit spread", def: "A spread for which you receive net premium; profits when the options expire worthless." },
      { term: "Bull call spread", def: "Buy a lower-strike call and sell a higher-strike call; profits as the stock rises (debit)." },
      { term: "Bear put spread", def: "Buy a higher-strike put and sell a lower-strike put; profits as the stock falls (debit)." },
      { term: "Long straddle", def: "Buy a call and a put at the same strike; profits from a large move in either direction." },
      { term: "Short straddle", def: "Sell a call and a put at the same strike; profits if the stock stays flat, with large risk." },
      { term: "Breakeven (long call)", def: "Strike price plus the premium paid." },
      { term: "Intrinsic value", def: "The in-the-money amount of an option (zero if out of the money)." },
      { term: "Time value", def: "The portion of an option's premium above intrinsic value, eroding toward expiration." },
      { term: "Moneyness", def: "Whether an option is in-, at-, or out-of-the-money relative to the strike." },
    ],
    takeaways: [
      "Protective puts insure downside; covered calls harvest premium; collars bracket the outcome.",
      "Debit spread = paid premium, want it to widen; credit spread = received premium, want it to expire worthless.",
      "Long straddle bets on a big move (volatility); short straddle bets on no move.",
      "Always be ready to compute max gain, max loss, and breakeven for any position.",
    ],
  },

  {
    id: "s7-dpp",
    examSlug: "series-7",
    topicId: "dpp",
    topicName: "DPPs & REITs",
    title: "Direct Participation Programs and REITs",
    readingMinutes: 4,
    summary: "Pass-through real-asset investments — how limited partnerships flow income and losses to investors, the partner roles, and how REITs differ.",
    intro:
      "Direct participation programs and REITs let investors access real assets like real estate and energy. The Series 7 tests how DPPs pass income and losses through to investors, the roles and liabilities of partners, and how REITs — which look similar — actually differ in structure, taxation, and liquidity.",
    sections: [
      {
        heading: "Why a DPP exists at all",
        blocks: [
          { kind: "p", text: "A direct participation program is a business structured so that income, gains, losses, deductions, and credits FLOW THROUGH to investors rather than being taxed at the entity level. That flow-through is the entire reason the structure exists — a corporation would pay tax on its profits and shareholders would pay again on dividends, while a DPP is taxed only once, in the investors' hands. Most DPPs are limited partnerships, though LLCs and S corporations share the flow-through characteristic." },
          { kind: "p", text: "The trade for that tax treatment is control and liquidity. The GENERAL PARTNER manages the program and accepts UNLIMITED personal liability for partnership obligations. LIMITED PARTNERS are passive investors whose liability is capped at their invested capital — but a limited partner who begins participating in management can lose that protection, which is precisely why the passivity is enforced rather than optional. Interests are illiquid, there is generally no secondary market, and the holding period runs years." },
          { kind: "callout", label: "The liability question", body: "General partner: unlimited personal liability, full management control, and a fiduciary duty to the limited partners. Limited partner: liability capped at the investment, no management role. Reversing these two is the most common error on the topic, and questions often bury the distinction in a fact pattern about who made a decision." },
        ],
      },
      {
        heading: "Passive losses and the limit that surprises investors",
        blocks: [
          { kind: "p", text: "DPP losses are PASSIVE losses, and passive losses may generally offset only PASSIVE income — not wages, not portfolio income such as interest and dividends. This is the constraint that makes a DPP far less valuable as a tax shelter than investors often assume, and it is the reason a program should never be recommended primarily for its write-offs. Unused passive losses carry forward and may be released when the investor disposes of the interest." },
          { kind: "p", text: "Suitability therefore turns on three things: the client must be able to bear ILLIQUIDITY for years, must have the net worth and income to absorb a total loss, and should have passive income against which losses are actually usable. A client who may need the capital, or who has only wage income, fails the analysis regardless of how attractive the projected returns look. Note that a program's economic merit must stand on its own — 'it's a good tax shelter' is not a suitable basis for a recommendation." },
          { kind: "bullets", items: ["Dissolution order: secured creditors, then general creditors, then LIMITED partners, then general partners LAST.", "A limited partner may inspect the books, vote on major partnership matters, and sue the GP — none of which forfeits limited status.", "Participating in day-to-day MANAGEMENT does forfeit it.", "Common program types: real estate (income or raw land), oil and gas (exploratory, developmental, income), and equipment leasing."] },
        ],
      },
      {
        heading: "REITs: the liquid alternative",
        blocks: [
          { kind: "p", text: "A REIT is often the right recommendation for a client who wants real estate exposure but fails the DPP suitability analysis. Listed REITs trade on an exchange, so they are LIQUID, and they must distribute at least 90% of taxable income to retain their tax treatment — which is why they are held for income. Equity REITs own properties, mortgage REITs hold real-estate debt, and hybrids do both." },
          { kind: "p", text: "The distinction the exam tests: a REIT passes through INCOME but NOT losses. A DPP passes through both. A client specifically seeking pass-through losses cannot get them from a REIT, and a client who wants liquidity cannot get it from a DPP — the two products sit at opposite ends of the same trade-off, and matching the client to the right one is the whole question." },
        ],
      },
    ],
    keyTerms: [
      { term: "Direct participation program (DPP)", def: "A flow-through investment (usually a limited partnership) that passes income/loss to investors." },
      { term: "Limited partnership", def: "The common DPP structure with a general partner and limited partners." },
      { term: "General partner (GP)", def: "Manages the DPP and bears unlimited liability." },
      { term: "Limited partner (LP)", def: "A passive investor whose liability is limited to the amount invested." },
      { term: "Flow-through taxation", def: "Income, gains, and losses pass to investors, avoiding entity-level tax." },
      { term: "Passive income", def: "Income from a DPP or rental activity, not from active work." },
      { term: "Passive loss", def: "A DPP loss that can generally offset only passive income, not wages." },
      { term: "Recourse vs non-recourse debt", def: "Whether a limited partner is personally liable for partnership debt (affects basis)." },
      { term: "REIT", def: "A trust that owns or finances real estate and must distribute ≥90% of income." },
      { term: "Equity REIT", def: "A REIT that owns income-producing properties." },
      { term: "Mortgage REIT", def: "A REIT that finances real estate by holding mortgages or mortgage securities." },
      { term: "90% distribution rule", def: "A REIT must pay out at least 90% of taxable income as dividends for its tax status." },
    ],
    takeaways: [
      "DPPs (limited partnerships) flow income and losses through to investors and avoid double taxation.",
      "GPs manage with unlimited liability; LPs are passive with liability capped at their investment.",
      "Passive losses generally offset only passive income; DPPs are illiquid.",
      "REITs are NOT DPPs: no loss pass-through, must distribute ≥90% of income, and are usually liquid/traded.",
    ],
  },

  {
    id: "s7-suitability",
    examSlug: "series-7",
    topicId: "suitability",
    topicName: "Suitability & Recommendations",
    title: "Suitability, Customer Profiles, and Regulation Best Interest",
    readingMinutes: 4,
    summary: "The heart of the rep's job — gathering a customer profile, the three prongs of suitability, Reg BI's best-interest standard, and matching products to objectives.",
    intro:
      "The Series 7 is, at its core, an exam about making suitable recommendations. Every product chapter ultimately serves this one: can you match the right investment to the right customer? This chapter builds the customer-profile framework, the suitability obligations, and the higher best-interest standard that now governs retail recommendations.",
    sections: [
      {
        heading: "Building the customer profile",
        blocks: [
          { kind: "p", text: "No recommendation can be evaluated without facts about the person receiving it. FINRA requires reasonable diligence to learn the essential facts about every customer: financial situation and net worth, tax status, investment objectives, TIME HORIZON, LIQUIDITY NEEDS, RISK TOLERANCE, and investment experience. A representative who has not gathered these has no basis on which to judge anything — the failure is the recommendation itself, not a paperwork lapse." },
          { kind: "p", text: "Two inputs do most of the work in exam questions. TIME HORIZON determines survivable volatility: money needed in eighteen months cannot sit in equities regardless of stated appetite for risk. LIQUIDITY NEEDS eliminate whole product categories — a client who may need capital on short notice cannot be placed in a DPP, a private placement, or anything with a lock-up, whatever the expected return. Note also the difference between risk TOLERANCE, a psychological willingness, and risk CAPACITY, the financial ability to absorb loss; the binding constraint is whichever is lower." },
          { kind: "table", table: { caption: "Objective to product.", headers: ["Objective", "Generally suitable", "Generally unsuitable"], rows: [["Preservation of capital", "Money market, T-bills, CDs", "Small-cap equity, naked options"], ["Current income", "Bonds, preferred, income funds", "Zero-coupon bonds, growth stocks"], ["Growth", "Equities, equity funds", "Money market instruments"], ["Speculation", "Options, high-yield debt", "Anything for a conservative client"], ["Tax-free income", "Municipals (high bracket)", "Municipals inside an IRA"]] } },
        ],
      },
      {
        heading: "Regulation Best Interest and its four obligations",
        blocks: [
          { kind: "p", text: "Effective June 30, 2020, Reg BI requires that a recommendation to a retail customer be in that customer's BEST INTEREST and that the firm not place its own financial interest ahead of theirs. The older suitability standard required only that a recommendation be appropriate — permitting the representative to recommend whichever suitable product paid most. Reg BI closes that gap, and questions describing two suitable products with different compensation are testing precisely this change." },
          { kind: "bullets", items: ["DISCLOSURE — material facts about the relationship and all conflicts of interest.", "CARE — understand the product's risks and COSTS, and evaluate reasonably available ALTERNATIVES.", "CONFLICT OF INTEREST — identify and address conflicts, eliminating some outright.", "COMPLIANCE — written policies reasonably designed to achieve compliance overall.", "FORM CRS — a brief relationship summary for retail investors: services, fees, conflicts, discipline."] },
          { kind: "p", text: "Suitability obligations attach to RECOMMENDATIONS. An unsolicited order — one the customer initiates entirely on their own — carries no recommendation and may generally be executed even if the representative thinks it unwise, but must be marked UNSOLICITED. Mismarking a solicited trade as unsolicited to escape the analysis is a serious violation and a recurring fact pattern." },
          { kind: "callout", label: "Beyond the single trade", body: "Some practices breach the duty even when each individual recommendation looks defensible. CHURNING is excessive trading measured against the customer's objectives and resources. Unsuitable CONCENTRATION loads a portfolio into one security or sector, accepting unsystematic risk for which no additional return is expected. And recommending a strategy the client cannot afford to hold to its horizon fails the care obligation on its own." },
        ],
      },
    ],
    keyTerms: [
      { term: "Know-your-customer (KYC)", def: "The duty to learn essential facts about each customer before recommending." },
      { term: "Customer profile", def: "Financial status, objectives, risk tolerance, horizon, and tax status." },
      { term: "Investment objective", def: "The customer's goal: growth, income, preservation, or speculation." },
      { term: "Risk tolerance", def: "A customer's willingness and ability to bear loss." },
      { term: "Time horizon", def: "How long until the customer needs the funds; shapes suitable risk." },
      { term: "Reasonable-basis suitability", def: "The rep understands the product and it suits some investors." },
      { term: "Customer-specific suitability", def: "The recommendation fits the particular customer's profile." },
      { term: "Quantitative suitability", def: "A series of recommendations isn't excessive; prevents churning." },
      { term: "Churning", def: "Excessive trading to generate commissions; prohibited." },
      { term: "Regulation Best Interest (Reg BI)", def: "Requires retail recommendations to be in the customer's best interest." },
      { term: "Form CRS", def: "The customer relationship summary of services, fees, and conflicts." },
      { term: "Ability vs willingness", def: "When they conflict, the more conservative ability generally governs." },
    ],
    takeaways: [
      "Build the full KYC profile before recommending: finances, objectives, risk tolerance, horizon, tax status.",
      "Match objective to product: growth→equities, income→bonds, preservation→government/cash, speculation→options.",
      "Suitability has three prongs: reasonable-basis, customer-specific, and quantitative (anti-churning).",
      "Reg BI requires acting in the retail customer's best interest with disclosure, care, conflict, and compliance obligations.",
    ],
  },

  {
    id: "s7-underwriting",
    examSlug: "series-7",
    topicId: "underwriting",
    topicName: "Primary Market & Underwriting",
    title: "The Primary Market: Underwriting and New Issues",
    readingMinutes: 5,
    summary: "How securities come to market — the 1933 Act registration timeline, underwriting commitments and the syndicate, and the rules around prospectuses and offerings.",
    intro:
      "The primary market is where capital is raised, and the Series 7 tests the mechanics of bringing a new issue to market: the registration process under the Securities Act of 1933, the underwriting commitments that allocate risk, and the documents and prohibitions that govern the offering period. Know the timeline cold.",
    sections: [
      {
        heading: "The 1933 Act timeline",
        blocks: [
          { kind: "p", text: "The Securities Act of 1933 regulates NEW issues through forced disclosure rather than merit review — the SEC never judges whether an offering is a good investment, only whether the required facts have been disclosed, and claiming SEC approval of a security is itself a violation. The process opens with a REGISTRATION STATEMENT. From filing to effectiveness runs the COOLING-OFF PERIOD, a minimum of 20 days and usually longer." },
          { kind: "p", text: "During cooling off the underwriter may distribute the PRELIMINARY PROSPECTUS (the red herring) and collect INDICATIONS OF INTEREST, which bind neither side. A TOMBSTONE advertisement, limited in content, is permitted, and the DUE DILIGENCE meeting is held near the end. What may NOT happen is any sale: no orders accepted, no money received, no allocations confirmed, no price promised — the red herring contains no final price because pricing occurs on the eve of effectiveness." },
          { kind: "table", table: { caption: "Permitted activity by phase.", headers: ["Activity", "Cooling-off", "After effective"], rows: [["Preliminary prospectus (red herring)", "Permitted", "Superseded by the final"], ["Indications of interest", "Permitted, non-binding", "Become actual orders"], ["Accepting orders or money", "PROHIBITED", "Permitted"], ["Tombstone ad", "Permitted", "Permitted"], ["Final prospectus", "Does not exist yet", "Required at or before confirmation"]] } },
          { kind: "callout", label: "The fact pattern to recognize", body: "A customer says during the cooling-off period: 'Put me down for 500 shares, here's my cheque.' The representative may record a non-binding indication of interest and MUST return the cheque. Accepting funds, confirming an allocation, or quoting a firm price all constitute selling before effectiveness." },
        ],
      },
      {
        heading: "Commitment types: where the risk lands",
        blocks: [
          { kind: "p", text: "The underwriting agreement determines who bears the risk of an unsold deal, and every commitment question reduces to whether the underwriter acts as PRINCIPAL or AGENT. In a FIRM COMMITMENT the underwriter BUYS the entire issue and resells it as principal — if the deal fails, the underwriter holds the inventory and the issuer is paid regardless. In a BEST EFFORTS underwriting the underwriter acts as AGENT, selling what it can and returning the rest, so the ISSUER bears the risk." },
          { kind: "bullets", items: ["FIRM COMMITMENT — underwriter as principal, bearing full risk of unsold shares.", "BEST EFFORTS — underwriter as agent; unsold shares return to the issuer.", "ALL-OR-NONE — the whole issue must sell or the offering is cancelled and funds returned.", "MINI-MAX — a stated minimum must sell for the deal to close, up to a stated maximum.", "STANDBY — the underwriter agrees to buy shares left unsubscribed in a rights offering."] },
          { kind: "p", text: "Large deals are distributed by a SYNDICATE under a SYNDICATE MANAGER, spreading exposure. A SELLING GROUP assists in distribution but takes NO underwriting commitment and bears no risk, earning only the selling concession. The UNDERWRITING SPREAD is the difference between the public offering price and the proceeds to the issuer, splitting into the manager's fee, the underwriting fee, and the selling concession — the concession being the largest piece, since it goes to whoever actually places the shares." },
        ],
      },
      {
        heading: "Exemptions and the restricted-persons rule",
        blocks: [
          { kind: "p", text: "Registration is expensive, so exemptions permit capital raising without it. REGULATION D covers private placements sold principally to ACCREDITED INVESTORS. RULE 147 exempts genuinely intrastate offerings. REGULATION A+ permits smaller offerings under lighter disclosure. RULE 144 governs resale of restricted and control stock through holding periods and volume limits, so insiders cannot quietly liquidate into the public market. Municipal and U.S. government securities are exempt securities outright." },
          { kind: "p", text: "FINRA Rule 5130 appears reliably and is easy to miss. RESTRICTED PERSONS may not buy a new EQUITY issue at the public offering price: member firms, their employees and associated persons, and immediate family members materially supported by them. The purpose is to stop industry insiders capturing first-day IPO gains that belong to public customers. Note the boundary — the rule covers new EQUITY issues, not new debt offerings." },
        ],
      },
    ],
    keyTerms: [
      { term: "Primary market", def: "Where issuers raise capital by selling new securities." },
      { term: "Securities Act of 1933", def: "The disclosure law governing new issues and registration." },
      { term: "Cooling-off period", def: "The ≥20-day SEC review after filing; no sales allowed." },
      { term: "Preliminary prospectus (red herring)", def: "A pre-effective document for gathering indications of interest." },
      { term: "Indication of interest", def: "A non-binding expression of buying interest during cooling-off." },
      { term: "Effective date", def: "When registration clears and the security may be sold." },
      { term: "Firm commitment", def: "Underwriter buys the whole issue, bearing unsold-share risk." },
      { term: "Best efforts", def: "Underwriter only tries to sell; the issuer keeps the risk." },
      { term: "Syndicate", def: "A group of underwriters sharing a large offering under a manager." },
      { term: "Underwriting spread", def: "The difference between the public price and the issuer's proceeds." },
      { term: "IPO vs follow-on", def: "A first public sale vs an additional later offering of shares." },
      { term: "Regulation D", def: "An exemption for private placements to accredited/limited investors." },
      { term: "Free-riding and withholding", def: "An underwriter improperly retaining a hot issue; prohibited." },
    ],
    takeaways: [
      "The 1933 Act centers on disclosure; the SEC reviews disclosure but never approves a security's merits.",
      "Timeline: pre-filing → cooling-off (≥20 days, red herring, indications of interest) → effective → sale with final prospectus.",
      "Firm commitment puts unsold-share risk on the underwriter; best efforts leaves it with the issuer.",
      "Government and muni securities are exempt; Reg D private placements are exempt transactions; free-riding and withholding is prohibited.",
    ],
  },

  {
    id: "s7-economics",
    examSlug: "series-7",
    topicId: "economics",
    topicName: "Economic Factors & Analysis",
    title: "Economic Factors, Analysis, and Market Theory",
    readingMinutes: 5,
    summary: "The macro and analytical backdrop — the business cycle, monetary and fiscal policy, fundamental vs technical analysis, and key market measures.",
    intro:
      "A registered rep must read the economic weather. The Series 7 tests the business cycle, the policy levers that steer it, the difference between fundamental and technical analysis, and the measures that describe markets and securities. This chapter connects the macro picture to the analysis reps use to frame recommendations.",
    sections: [
      {
        heading: "The cycle and its indicators",
        blocks: [
          { kind: "p", text: "Economic activity moves through EXPANSION, PEAK, CONTRACTION, and TROUGH. The conventional shorthand for a recession is two consecutive quarters of declining real GDP; a depression is the far rarer and more severe case. The cycle matters because it drives corporate earnings and therefore equity prices, and because policymakers respond in ways that move interest rates and therefore bond prices." },
          { kind: "table", table: { caption: "Indicator timing relative to the cycle.", headers: ["Leading (turns first)", "Coincident (turns with)", "Lagging (turns after)"], rows: [["Building permits", "Industrial production", "Unemployment rate"], ["New durable-goods orders", "Personal income", "Duration of unemployment"], ["Stock prices", "Nonfarm payrolls", "Corporate profits"], ["Initial jobless claims", "Manufacturing sales", "Prime rate"]] } },
          { kind: "p", text: "UNEMPLOYMENT is the one candidates most often misclassify. It is LAGGING: firms cut staff only after conditions have clearly deteriorated and hire only once a recovery is evidently underway, so the unemployment rate confirms a turn rather than predicting it. Stock prices, by contrast, are LEADING — the market prices expectations, which is why equities often bottom while the news is still bad." },
        ],
      },
      {
        heading: "Monetary and fiscal policy",
        blocks: [
          { kind: "p", text: "Two levers, two authorities, and the exam pairs them to see whether you can tell them apart. MONETARY policy belongs to the FEDERAL RESERVE and works on the money supply and the cost of credit. FISCAL policy belongs to CONGRESS and works through taxation and government spending. A question describing a tax increase alongside a discount-rate cut is describing contractionary FISCAL policy running against expansionary MONETARY policy — two authorities pulling opposite ways." },
          { kind: "bullets", items: ["OPEN MARKET OPERATIONS — buying and selling government securities — is the Fed's principal and most-used tool. BUYING injects reserves and is expansionary.", "The DISCOUNT RATE is what the Fed charges banks borrowing directly from it; changes are largely a signal.", "RESERVE REQUIREMENTS are the bluntest tool and are changed rarely.", "The FED FUNDS RATE is what banks charge EACH OTHER overnight — a target, not a rate the Fed sets by decree.", "Expansionary fiscal: cut taxes or raise spending. Contractionary fiscal: raise taxes or cut spending."] },
        ],
      },
      {
        heading: "Rates, the curve, and inflation",
        blocks: [
          { kind: "p", text: "Interest rates and bond prices move in OPPOSITE directions — the single most heavily tested economic fact on this exam. When prevailing rates rise, an existing fixed-coupon bond becomes less competitive and its price must fall until its yield matches new issues. Longer maturities and LOWER coupons move more for a given rate change, because more of their value sits further in the future." },
          { kind: "p", text: "The YIELD CURVE plots yield against maturity. A NORMAL curve slopes upward, since lenders demand more to commit for longer. A FLAT curve shows little difference across maturities. An INVERTED curve, where short rates exceed long, is unusual and has historically preceded recessions. INFLATION erodes the purchasing power of fixed payments, hurting long-dated bondholders most — and because it affects all fixed payments at once, purchasing power risk is SYSTEMATIC and cannot be diversified away." },
          { kind: "callout", label: "Systematic versus unsystematic", body: "SYSTEMATIC risks — market, interest rate, inflation, currency, political — hit everything and cannot be diversified away, which is precisely why they are the only risks investors are compensated for bearing. UNSYSTEMATIC risks — business, credit, liquidity, regulatory, call — are specific and CAN be diversified away, so the market pays nothing extra for accepting them." },
        ],
      },
    ],
    keyTerms: [
      { term: "Business cycle", def: "The sequence of expansion, peak, contraction, and trough." },
      { term: "Recession", def: "Commonly two consecutive quarters of declining real GDP." },
      { term: "Monetary policy", def: "The Fed's management of money supply and interest rates." },
      { term: "Open market operations", def: "The Fed's buying/selling of Treasuries; its main tool." },
      { term: "Fiscal policy", def: "Government spending and taxation by Congress and the President." },
      { term: "Fundamental analysis", def: "Studying business and economic data to estimate intrinsic value (what to buy)." },
      { term: "Technical analysis", def: "Studying price, volume, and trends to time trades (when to buy/sell)." },
      { term: "P/E ratio", def: "Price divided by earnings per share; a valuation measure." },
      { term: "Earnings per share (EPS)", def: "Net income available to common, divided by shares outstanding." },
      { term: "Yield curve", def: "A plot of yields against maturities; inversion often precedes recession." },
      { term: "Support and resistance", def: "Technical price levels where buying or selling tends to emerge." },
      { term: "Efficient market hypothesis", def: "The theory that prices already reflect available information." },
    ],
    takeaways: [
      "The cycle runs expansion→peak→contraction→trough; monetary policy (the Fed) and fiscal policy (Congress) respond.",
      "The Fed eases by buying securities (lower rates) and tightens by selling (higher rates); rising rates push bond prices down.",
      "Fundamental analysis (earnings, ratios) decides WHAT to buy; technical analysis (charts, volume) decides WHEN.",
      "An inverted yield curve often precedes recession; the efficient market hypothesis underpins passive investing.",
    ],
  },
  {
    id: "s7-process-deep",
    examSlug: "series-7",
    topicId: "f4-process",
    topicName: "Processing Transactions",
    title: "Settlement, Clearing, and Good Delivery",
    readingMinutes: 4,
    summary: "What happens after execution: regular-way settlement, the clearing and depository systems, account transfers, confirmations, and what makes a delivery good.",
    intro:
      "Function 4 of the Series 7 outline covers everything between execution and the money actually moving. It is the least glamorous material on the exam and among the most heavily procedural, which makes it reliable points for anyone who learns the names and the deadlines.",
    sections: [
      {
        heading: "Regular way and the settlement cycle",
        blocks: [
          { kind: "p", text: "REGULAR WAY settlement is the default cycle: T+1, one business day after the trade date, for corporate stock, corporate bonds, municipal securities, U.S. government securities and listed options. This standard took effect on 28 May 2024, replacing T+2, and older prep material still carries the wrong figure. CASH settlement occurs the same day by specific agreement, and a WHEN ISSUED trade settles once the security actually exists — common for new municipal issues and Treasury auctions." },
          { kind: "p", text: "Do not conflate settlement with the REGULATION T payment deadline. Settlement is when securities and money change hands between firms; Reg T is when the CUSTOMER must pay their own firm, two business days after settlement. Failing that deadline triggers a sell-out of the position and a 90-day freeze, during which the customer must have cash in the account before any order is entered." },
          { kind: "table", table: { caption: "Settlement conventions.", headers: ["Type", "When", "Typical use"], rows: [["Regular way", "T+1", "The default for nearly everything"], ["Cash", "Same day", "By agreement, when funds are needed immediately"], ["When issued", "On issuance", "New municipal issues, Treasury auctions"], ["Seller's option", "As specified", "Seller chooses a later date, by agreement"]] } },
        ],
      },
      {
        heading: "The plumbing, by name",
        blocks: [
          { kind: "p", text: "Clearing and settlement run through DTCC and its two subsidiaries, and the exam expects the names. The NATIONAL SECURITIES CLEARING CORPORATION (NSCC) nets each day's obligations so firms settle net differences rather than every gross transaction, dramatically reducing what must move. The DEPOSITORY TRUST COMPANY (DTC) immobilises securities in book-entry form, so ownership changes are ledger entries and no certificate travels anywhere." },
          { kind: "p", text: "Moving an entire customer account between firms uses the AUTOMATED CUSTOMER ACCOUNT TRANSFER SERVICE (ACATS), which runs on a standard timetable rather than leaving each firm to negotiate. The TRANSFER AGENT maintains the issuer's record of who owns what, issues and cancels certificates, and handles lost or stolen ones; the REGISTRAR audits the transfer agent to ensure the company never over-issues. Those two roles are deliberately separated so no single party both creates records and verifies them." },
          { kind: "callout", label: "Good delivery", body: "A delivery is GOOD when the securities are in transferable form: correct denomination or units that combine into round lots, properly endorsed with a signature matching the registration, and accompanied by any required documents. Mutilated certificates, missing endorsements, or a signature mismatch make delivery bad and the trade fails to settle." },
        ],
      },
      {
        heading: "Confirmations and the customer record",
        blocks: [
          { kind: "p", text: "A CONFIRMATION must reach the customer at or before completion of the transaction. It states the security, quantity, price, trade and settlement dates, and — critically — the firm's CAPACITY. Acting as AGENT it charges a disclosed commission; acting as PRINCIPAL it earns a markup embedded in the price. Those are different economics and different conflicts, which is why the disclosure is mandatory rather than courteous." },
          { kind: "bullets", items: ["Account statements go out at least quarterly, and monthly in any month with activity.", "Customer securities held by the firm must be SEGREGATED and identifiable, never commingled with firm assets.", "Street name registration puts the position in the firm's name for transfer and margin purposes; the customer remains the BENEFICIAL owner.", "Holding customer mail is permitted only for limited periods, with written instruction and a stated reason.", "Duplicate confirmations may go to a third party on written instruction, but the ORIGINALS must still go to the customer."] },
        ],
      },
    ],
    keyTerms: [
      { term: "Regular way", def: "The default settlement cycle — T+1 since May 2024." },
      { term: "NSCC", def: "Nets each day's obligations so firms settle differences rather than gross amounts." },
      { term: "DTC", def: "Holds securities in book-entry form so ownership transfers without certificates moving." },
      { term: "ACATS", def: "The standard system for transferring a whole customer account between firms." },
      { term: "Good delivery", def: "Securities in properly transferable form, correctly endorsed and documented." },
    ],
    takeaways: [
      "Regular way is T+1; Reg T payment is two business days AFTER settlement — different deadlines.",
      "NSCC nets, DTC holds, ACATS transfers accounts, the transfer agent keeps the issuer's ownership record.",
      "Confirmations must disclose whether the firm acted as agent or principal.",
      "Customer securities are segregated; commingling with firm assets is a serious violation.",
    ],
  },
  {
    id: "s7-prospect-retire-deep",
    examSlug: "series-7",
    topicId: "f1-business",
    topicName: "Seeking Business",
    title: "Prospecting Rules and Retirement Accounts",
    readingMinutes: 4,
    summary: "Cold calling and Do-Not-Call rules, seminars and public appearances, plus the retirement account types a registered representative must be able to distinguish.",
    intro:
      "Function 1 covers how a representative may legitimately seek business, and the rules here are mostly about not intruding on people who have said no. The retirement account material sits alongside it because most prospecting conversations end up there.",
    sections: [
      {
        heading: "Cold calling and Do-Not-Call",
        blocks: [
          { kind: "p", text: "COLD CALLING is permitted but tightly bounded. Calls may only be placed between 8:00 a.m. and 9:00 p.m. in the CALLED PARTY'S local time — the recipient's clock, not the caller's. The caller must state their name, the firm's name, and a telephone number or address at which the firm can be contacted. Every firm must maintain its own DO-NOT-CALL list, honour requests promptly, and check against the National Do-Not-Call Registry." },
          { kind: "p", text: "Certain calls fall outside the restrictions: those to an EXISTING CUSTOMER, those where the person gave prior written consent, and those to someone with an established business relationship. Note that a person who asks to be removed must be added to the firm's list regardless of any relationship, and the request survives indefinitely." },
          { kind: "callout", label: "The time rule catches people out", body: "8:00 a.m. to 9:00 p.m. is measured where the CALLED PARTY is. A representative in New York calling California at 8:30 a.m. Eastern is dialling at 5:30 a.m. Pacific — a violation. The recipient's time zone governs." },
        ],
      },
      {
        heading: "Seminars, public appearances and communications",
        blocks: [
          { kind: "p", text: "A SEMINAR or other public appearance is treated as a communication with the public. Scripts, slides and handouts are retail communications subject to principal approval and the usual content standards: fair, balanced, not misleading, no performance predictions, and no claim that the SEC has approved any security. Extemporaneous remarks are not pre-approved but the representative remains fully responsible for their content." },
          { kind: "p", text: "The classification rules follow the same headcount as elsewhere. CORRESPONDENCE reaches 25 or fewer retail investors within 30 calendar days and is reviewed under firm procedures. A RETAIL COMMUNICATION reaches more than 25 and requires principal approval BEFORE first use. INSTITUTIONAL COMMUNICATIONS go only to institutional investors and need review procedures but no pre-approval. A TOMBSTONE advertisement is limited to identifying facts and may run during the cooling-off period." },
        ],
      },
      {
        heading: "Retirement accounts",
        blocks: [
          { kind: "p", text: "The distinction that organises this material is WHEN tax is paid. A TRADITIONAL IRA may allow a deductible contribution now, grows tax-deferred, and is taxed as ordinary income on withdrawal. A ROTH IRA is funded with after-tax dollars and produces entirely tax-free qualified withdrawals — and uniquely, it has NO required minimum distributions during the original owner's lifetime." },
          { kind: "p", text: "Employer plans follow the same logic at larger scale. A 401(k) is a corporate salary-deferral plan, often with an employer match that should be captured before any other contribution because it is an immediate guaranteed return. A 403(b), also called a tax-sheltered annuity, serves schools and certain non-profits. A SEP IRA is funded by EMPLOYER contributions and suits small businesses for its low administrative cost. ERISA sets fiduciary, vesting and reporting standards for PRIVATE-sector plans — government and most church plans are exempt." },
          { kind: "bullets", items: ["Withdrawals before 59½ generally add a 10% penalty on top of ordinary income tax.", "REQUIRED MINIMUM DISTRIBUTIONS begin at 73 under current law, rising to 75 for those born in 1960 or later.", "A ROLLOVER passes through the account holder's hands and must be redeposited within 60 DAYS; only one is permitted per twelve-month period.", "A direct TRANSFER moves assets custodian to custodian with no 60-day clock and no annual limit — the safer recommendation.", "An IRA may not hold COLLECTIBLES (art, antiques, most precious metals) or life insurance."] },
        ],
      },
    ],
    keyTerms: [
      { term: "Do-Not-Call", def: "Firms keep their own list, honour removal requests, and check the national registry." },
      { term: "Cold calling hours", def: "8:00 a.m. to 9:00 p.m. in the CALLED PARTY'S time zone." },
      { term: "Roth IRA", def: "After-tax contributions, tax-free qualified withdrawals, no lifetime RMD." },
      { term: "Rollover", def: "Distribution passing through the holder's hands; 60-day deadline, one per 12 months." },
      { term: "ERISA", def: "Fiduciary and vesting standards for private-sector employer plans; government plans exempt." },
    ],
    takeaways: [
      "Cold call hours use the RECIPIENT'S time zone, 8am to 9pm.",
      "More than 25 retail investors in 30 days makes it a retail communication needing pre-approval.",
      "Roth: after-tax in, tax-free out, no lifetime RMD. Traditional: deduct now, taxed later.",
      "Rollover = 60 days and one per year; direct transfer has neither limit.",
    ],
  },

];

export const s7Wave3Questions: Question[] = [
  // Regulations
  {
    id: "s7-reg-q1", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 2,
    stem: "The federal law that governs the issuance of NEW securities, requiring registration and prospectus delivery, is the:",
    choices: ["Securities Act of 1933", "Securities Exchange Act of 1934", "Investment Company Act of 1940"],
    answerIndex: 0,
    explanation: "The Securities Act of 1933 — the 'paper act' — governs new issues, requiring registration and delivery of a prospectus to buyers. Choice B (1934 Act) governs the SECONDARY trading markets and created the SEC. Choice C (1940 Act) regulates investment companies like mutual funds, not the general issuance of new securities.",
  },
  {
    id: "s7-reg-q2", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 3,
    stem: "A representative learns a large institutional client is about to place a huge buy order, and quickly buys the stock for their own account first. This is:",
    choices: ["Permissible, since the rep took the risk", "Front-running, a prohibited practice", "Simply good market timing"],
    answerIndex: 1,
    explanation: "Trading ahead of a known large customer order to profit from the price impact it will cause is front-running — a prohibited practice that puts the rep's interest ahead of the customer's and abuses confidential order information. Choices B and C try to rationalize it, but no framing makes front-running acceptable; it's a serious violation regardless of outcome.",
  },
  {
    id: "s7-reg-q3", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 2,
    stem: "A piece of sales literature is distributed to 200 retail investors within a 30-day period. Under FINRA rules this is classified as:",
    choices: ["Correspondence", "An institutional communication", "A retail communication"],
    answerIndex: 2,
    explanation: "A communication distributed to more than 25 retail investors within 30 days is a retail communication, which generally requires principal approval and may need filing with FINRA. Choice A (correspondence) applies to 25 or FEWER retail investors. Choice B (institutional) applies only to institutional investors, not the 200 retail investors here.",
  },
  // Government securities
  {
    id: "s7-gov-q1", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 2,
    stem: "Interest earned on U.S. Treasury securities is:",
    choices: ["Federally taxable but exempt from state and local tax", "Exempt from federal tax but subject to state tax", "Completely free of tax at every level"],
    answerIndex: 0,
    explanation: "Treasury interest is taxable at the FEDERAL level but exempt from STATE and local taxes — the mirror image of municipal bonds (which are federally exempt). Choice B reverses the treatment. Choice C is wrong because Treasuries are not fully tax-free; only the state/local portion is exempt.",
  },
  {
    id: "s7-gov-q2", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 3,
    stem: "Which security carries the full faith and credit of the U.S. government?",
    choices: ["FNMA (Fannie Mae)", "GNMA (Ginnie Mae)", "FHLMC (Freddie Mac)"],
    answerIndex: 1,
    explanation: "Ginnie Mae (GNMA) is a true federal agency, and its securities carry the full faith and credit of the U.S. government — as safe as Treasuries. Fannie Mae and Freddie Mac are government-sponsored enterprises (GSEs) whose securities are NOT explicitly backed by the government's full faith and credit, so they carry slightly more credit risk and a marginally higher yield.",
  },
  {
    id: "s7-gov-q3", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 2,
    stem: "An investor worried about inflation eroding their fixed-income returns would most appropriately buy:",
    choices: ["Treasury bills sold at a discount", "Zero-coupon Treasury STRIPS", "Treasury Inflation-Protected Securities"],
    answerIndex: 2,
    explanation: "TIPS adjust their principal with inflation (via CPI), so as prices rise, both principal and interest payments increase — directly protecting purchasing power. Choice A (T-bills) offers safety and liquidity but no inflation protection. Choice B (STRIPS) are zero-coupon bonds whose fixed payout is actually MORE exposed to inflation erosion, not less.",
  },

  // ---- Equity Securities ----
  {
    id: "s7-eq-x1", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "With CUMULATIVE preferred stock, if a dividend is skipped, the company must:",
    choices: ["Pay all accrued dividends before any common dividend", "Never pay dividends that were previously skipped", "Convert the preferred shares into common stock"],
    answerIndex: 0,
    explanation: "Cumulative preferred accumulates any skipped dividends 'in arrears,' and all of them must be paid before common shareholders receive anything. Choice B describes non-cumulative preferred. Choice C describes convertible preferred, a different feature.",
  },
  {
    id: "s7-eq-x2", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "A corporation announces a new share issuance. An existing shareholder wants to prevent dilution of their ownership percentage. Which right accomplishes this?",
    choices: ["A cumulative voting right in the election of directors", "A conversion right into a different class of security", "A dissenter's right to demand appraisal of the shares", "A preemptive right to subscribe before the public offering"],
    answerIndex: 3,
    explanation: "A preemptive right lets an existing shareholder buy a proportional share of the new issue before it reaches the public, preserving their ownership percentage. Cumulative voting concentrates votes to help minority holders win board seats, which addresses representation rather than dilution. Conversion and appraisal rights arise in entirely different circumstances.",
  },

  // ---- Debt Securities ----
  {
    id: "s7-debt-x1", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 2,
    stem: "A bond is considered 'investment grade' if it is rated at least:",
    choices: ["BB / Ba", "C", "BBB- / Baa3"],
    answerIndex: 2,
    explanation: "Investment grade begins at BBB- (S&P/Fitch) or Baa3 (Moody's); anything below is 'high yield' or 'junk.' Choice A is the top of the speculative (junk) tier. Choice B is deep junk, near default.",
  },
  {
    id: "s7-debt-x2", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 3,
    stem: "When a bond is bought between coupon dates, the buyer typically pays the seller:",
    choices: ["Accrued interest since the last coupon, above the price", "No accrued interest whatsoever at settlement", "Twice the amount of the next scheduled coupon"],
    answerIndex: 0,
    explanation: "The buyer compensates the seller for interest earned but not yet paid — the accrued interest from the last coupon date to settlement — added to the purchase price. Choice B ignores the seller's earned interest. Choice C has no basis.",
  },

  // ---- Customer Accounts ----
  {
    id: "s7-acct-x1", examSlug: "series-7", topicId: "accounts", topicName: "Customer Accounts", difficulty: 2,
    stem: "For a registered rep to exercise discretion (choosing securities/amounts) in a customer's account, the firm must first have:",
    choices: ["A verbal okay from the customer", "Prior written authorization from the customer", "Advance approval obtained from FINRA"],
    answerIndex: 1,
    explanation: "Discretionary trading requires prior written authorization (a signed discretionary agreement) and principal approval of the account. Choice A is insufficient — discretion can't rest on a verbal okay. Choice C misplaces the approval; it's the customer and firm principal, not FINRA, who authorize.",
  },
  {
    id: "s7-acct-x2", examSlug: "series-7", topicId: "accounts", topicName: "Customer Accounts", difficulty: 2,
    stem: "Under Regulation T, an investor buying $10,000 of marginable stock must deposit at least:",
    choices: ["$1,000", "$10,000", "$5,000 (50%)"],
    answerIndex: 2,
    explanation: "Regulation T sets initial margin at 50%, so the investor deposits at least $5,000 and borrows the rest from the broker. Choice A is too little. Choice B would be a full cash purchase, not margin.",
  },

  // ---- Options ----
  {
    id: "s7-opt-x1", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 3,
    stem: "An investor who owns 100 shares and sells one call against them has established a:",
    choices: ["A covered call, earning income with capped upside", "A protective put insuring the downside", "A long straddle betting on volatility"],
    answerIndex: 0,
    explanation: "Owning the stock and writing a call on it is a covered call: it generates premium income but caps the upside at the strike. Choice B (protective put) involves BUYING a put for downside insurance. Choice C is an unrelated volatility strategy.",
  },
  {
    id: "s7-opt-x2", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 2,
    stem: "An investor buys 1 XYZ Oct 60 call and pays a premium of 4. At expiration, the stock must exceed what price before the investor begins to profit?",
    choices: ["$56, the strike reduced by the premium paid", "$64, the strike increased by the premium paid", "$60, the strike price of the contract itself", "$4, the premium recovered from the position"],
    answerIndex: 1,
    explanation: "A long call breaks even when the stock rises above the strike by the premium paid: 60 + 4 = $64. Below $64 the option may still be exercised profitably relative to expiring worthless, but the position has not yet recovered its cost. Subtracting the premium instead of adding it gives the breakeven for a long PUT, which is the direction the mnemonic 'call up, put down' is meant to fix.",
  },

  // ---- Municipal Securities ----
  {
    id: "s7-mun-x1", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 2,
    stem: "A revenue bond financing a municipal parking authority fails to generate projected receipts. Bondholders may look to which source for repayment?",
    choices: ["The municipality's general taxing power as a backstop", "A federal appropriation covering municipal shortfalls", "The parking facility's own revenues, and nothing further", "The state's guarantee fund for local authority debt"],
    answerIndex: 2,
    explanation: "Revenue bonds are secured strictly by the receipts of the financed project, which is why the feasibility study and coverage ratios matter so much at issuance. If revenues disappoint, bondholders have no recourse to the issuer's general taxing power — that backing belongs to general obligation bonds. No federal or state guarantee attaches to ordinary municipal revenue debt.",
  },
  {
    id: "s7-mun-x2", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 3,
    stem: "A municipal bond can be 'triple tax-exempt' for an investor when:",
    choices: ["The investor resides in the issuing state, gaining a double exemption", "The security is a taxable corporate bond", "The security is a U.S. Treasury obligation"],
    answerIndex: 0,
    explanation: "Municipal bond interest is federally tax-exempt, and for an in-state resident it is often also exempt from state and local tax — 'triple tax-exempt.' Choice B is taxable. Choice C (Treasuries) is exempt from state/local tax but taxable federally, not triple-exempt.",
  },

  // ---- Packaged Products ----
  {
    id: "s7-pkg-x1", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 2,
    stem: "A customer plans to invest $95,000 in a fund family whose Class A breakpoint schedule reduces the sales charge at $100,000. The representative should:",
    choices: ["Inform the customer that investing $100,000 would lower the charge", "Place the $95,000 as directed, since the customer named the amount", "Divide the purchase across two funds to keep charges consistent", "Recommend Class B shares to avoid the front-end charge entirely"],
    answerIndex: 0,
    explanation: "A representative has an affirmative duty to inform a customer when a modest increase would reach a breakpoint and reduce the sales charge. Deliberately placing an investment just below a breakpoint is the prohibited practice known as breakpoint selling, and splitting the purchase to defeat the discount compounds it. Steering to another share class to preserve compensation raises the same conflict.",
  },
  {
    id: "s7-pkg-x2", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 2,
    stem: "A customer wants to buy a diversified fund during the trading day at a price known at the moment of execution. Which product satisfies this?",
    choices: ["An open-end mutual fund, priced at the next computed NAV", "An exchange-traded fund, trading intraday at market prices", "A unit investment trust, redeemable at the trust's NAV", "A closed-end fund purchased at its net asset value"],
    answerIndex: 1,
    explanation: "ETFs trade on an exchange throughout the session at market-determined prices, so the execution price is known at the moment of the trade. Open-end mutual funds use forward pricing and fill at the next computed NAV, which is unknown when the order is placed. Closed-end funds do trade intraday but at market prices that may diverge from NAV, so buying at NAV is not what happens.",
  },

  // ---- Regulations ----
  {
    id: "s7-reg-x1", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 2,
    stem: "A dealer sells a customer stock from its own inventory and adds a 9% markup to the prevailing market price. Under FINRA rules this is:",
    choices: ["Automatically permitted, because 5% operates only as a guideline", "Automatically prohibited, because 5% is an absolute regulatory ceiling", "Potentially a violation, since markups must be fair and reasonable", "Outside FINRA's authority, since principal trades are unregulated"],
    answerIndex: 2,
    explanation: "FINRA's 5% policy is a guideline rather than a hard cap, so no percentage is automatically permitted or automatically prohibited. What governs is whether the total charge is fair and reasonable given the security's price, availability, and the work involved, and a 9% markup would face serious scrutiny under that standard. Principal transactions are squarely within FINRA's authority.",
  },
  {
    id: "s7-reg-x2", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 2,
    stem: "Before recommending a security, a rep must have a reasonable basis to believe it is suitable based on the customer's:",
    choices: ["The customer’s stated aesthetic preferences", "Financial situation, objectives, and risk tolerance", "The customer’s birth month and astrological sign"],
    answerIndex: 1,
    explanation: "Suitability (and Reg BI's care obligation) requires understanding the customer's financial situation, investment objectives, risk tolerance, time horizon, and needs before recommending. Choices A and C are obviously irrelevant distractors highlighting that recommendations must rest on real profile information.",
  },

  // ---- US Government Securities ----
  {
    id: "s7-gov-x1", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 2,
    stem: "Treasury bills are issued:",
    choices: ["With a fixed semiannual coupon", "At a premium above the face amount", "At a discount, maturing at face value"],
    answerIndex: 2,
    explanation: "T-bills are short-term, sold at a discount and redeemed at face value, with the gain serving as the interest — they carry no periodic coupon. Choice A describes T-notes/bonds. Choice B is incorrect; bills are sold at a discount, not a premium.",
  },
  {
    id: "s7-gov-x2", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 3,
    stem: "An investor seeks a mortgage-backed security carrying the explicit full faith and credit guarantee of the U.S. government. Which should the representative recommend?",
    choices: ["A Fannie Mae mortgage-backed security", "A Ginnie Mae pass-through certificate", "A Freddie Mac participation certificate", "A privately issued mortgage pass-through"],
    answerIndex: 1,
    explanation: "Ginnie Mae is a government corporation within HUD, and its pass-through securities carry the explicit full faith and credit backing of the United States. Fannie Mae and Freddie Mac are government-sponsored enterprises whose obligations lack that explicit guarantee despite widespread assumptions of implied support, and private-label pass-throughs carry no government backing at all.",
  },

  // ---- Margin Accounts ----
  {
    id: "s7-mgn-q1", examSlug: "series-7", topicId: "margin", topicName: "Margin Accounts", difficulty: 2,
    stem: "A customer buys $30,000 of marginable stock. The minimum Regulation T deposit is:",
    choices: ["$7,500", "$15,000", "$30,000"],
    answerIndex: 1,
    explanation: "Regulation T initial margin is 50%, so the deposit is 50% × $30,000 = $15,000, with $15,000 borrowed as the debit balance. Choice A uses 25% (the maintenance level, not initial). Choice C would be a full cash purchase.",
  },
  {
    id: "s7-mgn-q2", examSlug: "series-7", topicId: "margin", topicName: "Margin Accounts", difficulty: 2,
    stem: "FINRA's minimum maintenance requirement for a LONG margin account is equity of at least:",
    choices: ["50% of market value", "30% of market value", "25% of market value"],
    answerIndex: 2,
    explanation: "FINRA requires long-account equity to stay at least 25% of market value; below that triggers a maintenance call. Choice A is the Reg T INITIAL requirement, not maintenance. Choice B (30%) is the SHORT-account maintenance minimum.",
  },
  {
    id: "s7-mgn-q3", examSlug: "series-7", topicId: "margin", topicName: "Margin Accounts", difficulty: 2,
    stem: "The minimum maintenance requirement for a SHORT margin account is:",
    choices: ["30% of market value", "25% of market value", "10% of market value"],
    answerIndex: 0,
    explanation: "Short positions carry a higher 30% maintenance requirement because their potential loss is unlimited. Choice B (25%) is the long-account minimum. Choice C understates the requirement.",
  },
  {
    id: "s7-mgn-q4", examSlug: "series-7", topicId: "margin", topicName: "Margin Accounts", difficulty: 2,
    stem: "In a long margin account, the customer's equity equals:",
    choices: ["Market value + debit balance", "Market value − debit balance", "The debit balance alone"],
    answerIndex: 1,
    explanation: "Equity = market value − debit balance (the loan owed to the firm). Choice A adds the loan, overstating equity. Choice C reports only the loan, not the customer's stake.",
  },
  {
    id: "s7-mgn-q5", examSlug: "series-7", topicId: "margin", topicName: "Margin Accounts", difficulty: 3,
    stem: "Why must short selling occur in a margin account?",
    choices: ["Because short sale proceeds are received tax-free", "Because cash accounts cannot hold any securities", "Because loss potential is unlimited if the price rises"],
    answerIndex: 2,
    explanation: "Short selling carries theoretically unlimited loss (a stock can rise without limit), so it requires the collateral and oversight of a margin account. Choice A is false — short sales are not tax-advantaged. Choice B is wrong; cash accounts hold securities, they just can't be used for short selling.",
  },

  // ---- Options Strategies ----
  {
    id: "s7-oadv-q1", examSlug: "series-7", topicId: "options-adv", topicName: "Options Strategies", difficulty: 3,
    stem: "An investor buys stock at $40 and writes a 45 call for $3. The maximum gain is:",
    choices: ["$8", "$3", "$5"],
    answerIndex: 0,
    explanation: "Max gain on a covered call = (strike − cost) + premium = (45 − 40) + 3 = $8 per share, achieved if the stock is called away at $45. Choice B counts only the premium. Choice C counts only the stock appreciation, omitting the premium.",
  },
  {
    id: "s7-oadv-q2", examSlug: "series-7", topicId: "options-adv", topicName: "Options Strategies", difficulty: 2,
    stem: "An investor who owns stock and wants to insure against a decline while keeping upside should:",
    choices: ["Write a covered call", "Buy a protective put", "Sell a straddle"],
    answerIndex: 1,
    explanation: "A protective put (long stock + long put) caps the downside at the strike while leaving upside intact, for the premium cost. Choice A (covered call) earns income but caps upside and gives little downside protection. Choice C (short straddle) adds risk, not protection.",
  },
  {
    id: "s7-oadv-q3", examSlug: "series-7", topicId: "options-adv", topicName: "Options Strategies", difficulty: 3,
    stem: "An investor establishes a spread for a NET PREMIUM RECEIVED. This credit spread is profitable when:",
    choices: ["The spread between the options widens", "Volatility spikes sharply", "The options expire worthless as the spread narrows"],
    answerIndex: 2,
    explanation: "In a credit spread you collect a net premium and want the options to expire worthless (the spread to narrow), keeping the premium. Choice A describes a debit spread's goal. Choice B is the goal of a long straddle, not a credit spread.",
  },
  {
    id: "s7-oadv-q4", examSlug: "series-7", topicId: "options-adv", topicName: "Options Strategies", difficulty: 2,
    stem: "A long straddle (long call + long put at the same strike) profits most when the underlying:",
    choices: ["Moves sharply in either direction", "Stays exactly at the strike", "Drifts modestly higher over the period"],
    answerIndex: 0,
    explanation: "A long straddle is a volatility bet: it profits from a big move up OR down, with loss limited to the two premiums if the stock sits still. Choice B produces the maximum loss. Choice C's small move likely won't cover both premiums.",
  },
  {
    id: "s7-oadv-q5", examSlug: "series-7", topicId: "options-adv", topicName: "Options Strategies", difficulty: 3,
    stem: "An investor buys an XYZ 50 call for 5 and sells an XYZ 60 call for 2, both expiring in the same month. What is the maximum gain on this position?",
    choices: ["$300, equal to the net premium the investor paid", "$500, equal to the premium paid on the long call", "$1,000, the full difference between the strikes", "$700, the strike spread less the net debit paid"],
    answerIndex: 3,
    explanation: "This is a bull call spread established at a net debit of 5 − 2 = 3, or $300. Maximum gain is the difference between the strikes less that debit: (60 − 50) − 3 = 7, or $700, achieved once the stock is at or above the upper strike. The $300 net debit is the maximum LOSS rather than the gain, and the full $1,000 strike spread ignores the cost of establishing the position.",
  },

  // ---- DPPs & REITs ----
  {
    id: "s7-dpp-q1", examSlug: "series-7", topicId: "dpp", topicName: "DPPs & REITs", difficulty: 2,
    stem: "A key tax feature of a direct participation program (DPP) is that it:",
    choices: ["Pays corporate tax, then taxes investors again", "Is entirely exempt from federal and state taxation", "Passes income and losses through, avoiding entity-level tax"],
    answerIndex: 2,
    explanation: "A DPP (limited partnership) is a flow-through entity: income, gains, and losses pass directly to investors and are taxed once on their returns, avoiding corporate double taxation. Choice A describes a C corporation. Choice B is false; the income is taxed at the investor level.",
  },
  {
    id: "s7-dpp-q2", examSlug: "series-7", topicId: "dpp", topicName: "DPPs & REITs", difficulty: 2,
    stem: "In a limited partnership, the general partner (GP):",
    choices: ["Manages the venture and has unlimited liability", "Is a passive investor with limited liability", "Has no role once the partnership is formed"],
    answerIndex: 0,
    explanation: "The GP runs the partnership and bears unlimited liability for its obligations, while limited partners are passive with liability capped at their investment. Choice B describes a limited partner. Choice C is wrong; the GP has ongoing management responsibility.",
  },
  {
    id: "s7-dpp-q3", examSlug: "series-7", topicId: "dpp", topicName: "DPPs & REITs", difficulty: 3,
    stem: "Passive losses generated by a DPP can generally be used to offset:",
    choices: ["Ordinary wage and salary income earned", "Passive income earned from other passive activities", "Capital gains realized on stock holdings"],
    answerIndex: 1,
    explanation: "Passive losses can generally offset only passive income, not ordinary wages or (directly) portfolio income — a central suitability and tax point for DPPs. Choices B and C describe income types that passive losses generally cannot offset.",
  },
  {
    id: "s7-dpp-q4", examSlug: "series-7", topicId: "dpp", topicName: "DPPs & REITs", difficulty: 2,
    stem: "To maintain its favorable tax status, a REIT must distribute at least:",
    choices: ["50% of its taxable income", "100% of its assets", "90% of its taxable income"],
    answerIndex: 2,
    explanation: "A REIT must distribute at least 90% of its taxable income to shareholders as dividends to keep its special tax treatment. Choice A understates the threshold. Choice B confuses income distribution with asset liquidation.",
  },
  {
    id: "s7-dpp-q5", examSlug: "series-7", topicId: "dpp", topicName: "DPPs & REITs", difficulty: 2,
    stem: "A customer wants real estate exposure that can be sold quickly and does not want to receive pass-through losses. Which is more suitable?",
    choices: ["A publicly traded REIT, which is liquid and passes through no losses", "A direct participation program, for its tax pass-through features", "A raw-land limited partnership, for long-term appreciation", "A private placement real estate fund with a ten-year lockup"],
    answerIndex: 0,
    explanation: "A listed REIT trades on an exchange, providing the liquidity the customer wants, and passes through income but not losses. DPPs and private real estate partnerships are illiquid by design and pass through both income and losses, which is precisely what this customer said they do not want. Raw-land programs are the least liquid and most speculative of the alternatives.",
  },

  // Suitability & Recommendations
  {
    id: "s7-sui-q1", examSlug: "series-7", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 1,
    stem: "Which product best matches a customer whose primary objective is current income?",
    choices: ["Aggressive growth stocks with no dividend", "Investment-grade bonds and dividend payers", "Out-of-the-money call options"],
    answerIndex: 1,
    explanation: "Income objectives are served by bonds and dividend-paying stocks that produce steady cash flow. Growth stocks (A) suit a growth objective and often pay little or no dividend. Out-of-the-money options (C) are speculative. Matching the product to the stated objective is the essence of suitability.",
  },
  {
    id: "s7-sui-q2", examSlug: "series-7", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 2,
    stem: "Recommending a series of trades that is excessive given the customer's profile violates which prong of suitability?",
    choices: ["Reasonable-basis suitability", "Customer-specific suitability", "Quantitative suitability"],
    answerIndex: 2,
    explanation: "Quantitative suitability addresses whether the overall pattern of recommendations is excessive — the guard against churning — even if each trade is individually suitable. Reasonable-basis (A) concerns understanding the product; customer-specific (B) concerns fit to the individual. Excessive frequency is the quantitative prong.",
  },
  {
    id: "s7-sui-q3", examSlug: "series-7", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 2,
    stem: "Regulation Best Interest requires a broker-dealer making recommendations to retail customers to:",
    choices: ["Act in the customer's best interest ahead of its own", "Merely ensure the product is suitable", "Guarantee the customer a profit on the recommendation"],
    answerIndex: 0,
    explanation: "Reg BI raised the bar above suitability: the firm must act in the retail customer's best interest and may not put its own interests ahead of the customer's, with disclosure, care, conflict, and compliance obligations. Mere suitability (A) is the older standard, and guaranteeing a profit (C) is always prohibited.",
  },
  {
    id: "s7-sui-q4", examSlug: "series-7", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 2,
    stem: "A customer says they want maximum risk, but they have minimal income, no savings, and need the funds within a year. The rep should:",
    choices: ["Honor the stated willingness and recommend aggressive products", "Let the limited ability to take risk govern the advice", "Decline to serve the customer"],
    answerIndex: 1,
    explanation: "When willingness conflicts with financial ability to bear risk, the more conservative ability generally governs a suitable recommendation — limited income and a one-year need argue strongly against aggressive products. Following stated willingness alone (A) ignores ability; declining to serve (C) is unwarranted.",
  },
  {
    id: "s7-sui-q5", examSlug: "series-7", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 1,
    stem: "The brief disclosure document summarizing a firm's services, fees, and conflicts for retail customers is:",
    choices: ["The official statement", "Form U4", "Form CRS"],
    answerIndex: 2,
    explanation: "Form CRS (customer relationship summary) is the short Reg BI disclosure of services, fees, conflicts, and standards delivered to retail customers. The official statement (B) is a municipal disclosure document. Form U4 (C) registers individual representatives, not a customer disclosure.",
  },

  // Primary Market & Underwriting
  {
    id: "s7-uw-q1", examSlug: "series-7", topicId: "underwriting", topicName: "Primary Market & Underwriting", difficulty: 2,
    stem: "A registered representative has a customer who wants to buy shares in an offering still in its cooling-off period. What may the representative do?",
    choices: ["Accept the order and hold the funds until the registration is effective", "Confirm an allocation at a price agreed with the customer today", "Send a red herring and record a non-binding indication of interest", "Deliver the final prospectus and complete the sale immediately"],
    answerIndex: 2,
    explanation: "During the cooling-off period no sales may be made and no money may be accepted. The representative may distribute the preliminary prospectus, the red herring, and record indications of interest, which are non-binding on both sides. Accepting orders, holding funds, or confirming allocations all constitute selling activity that must wait for the effective date, and the final prospectus does not exist until then.",
  },
  {
    id: "s7-uw-q2", examSlug: "series-7", topicId: "underwriting", topicName: "Primary Market & Underwriting", difficulty: 2,
    stem: "In a firm-commitment underwriting, the risk of unsold shares is borne by:",
    choices: ["The issuer", "The underwriter", "The customers"],
    answerIndex: 1,
    explanation: "In a firm commitment the underwriter purchases the entire issue and resells it, so it bears the risk of any shares it cannot sell. Best efforts (not this case) leaves that risk with the issuer (A). Customers (C) never bear unsold-inventory risk in an underwriting.",
  },
  {
    id: "s7-uw-q3", examSlug: "series-7", topicId: "underwriting", topicName: "Primary Market & Underwriting", difficulty: 1,
    stem: "When the SEC declares a registration effective, it has:",
    choices: ["Approved the security as a sound investment", "Guaranteed the price at which shares are offered", "Confirmed the required disclosures appear adequate"],
    answerIndex: 2,
    explanation: "SEC effectiveness means the disclosure appears complete; the SEC never approves the merits of a security or guarantees price or value. Claiming SEC approval (A) or any guarantee (C) is a prohibited misrepresentation. The investor still bears all investment risk.",
  },
  {
    id: "s7-uw-q4", examSlug: "series-7", topicId: "underwriting", topicName: "Primary Market & Underwriting", difficulty: 2,
    stem: "The underwriting spread is best described as:",
    choices: ["The gap between the offering price and issuer proceeds", "The commission charged to the purchasing customer", "The bid-ask spread in the secondary market"],
    answerIndex: 0,
    explanation: "The underwriting spread is the difference between the price the public pays and the amount the issuer receives — the underwriters' compensation, split into the manager's fee, underwriting fee, and selling concession. A customer commission (B) and a secondary-market bid-ask spread (C) are different concepts.",
  },
  {
    id: "s7-uw-q5", examSlug: "series-7", topicId: "underwriting", topicName: "Primary Market & Underwriting", difficulty: 2,
    stem: "An underwriter improperly withholding part of a hot new issue for its own benefit commits:",
    choices: ["Backing away from a firm quotation", "Free-riding and withholding of a hot issue", "Front running a known customer order"],
    answerIndex: 1,
    explanation: "Free-riding and withholding is the prohibited practice of an underwriter failing to make a bona fide public offering of a hot issue, retaining shares for itself or insiders. Backing away (B) is a market maker failing to honor a quote; front running (C) is trading ahead of a customer order. The withheld hot issue defines free-riding and withholding.",
  },

  // Economic Factors & Analysis
  {
    id: "s7-eco-q1", examSlug: "series-7", topicId: "economics", topicName: "Economic Factors & Analysis", difficulty: 2,
    stem: "To stimulate a slowing economy, the Federal Reserve would most likely:",
    choices: ["Sell Treasuries to raise rates", "Increase the reserve requirement", "Buy Treasuries to lower rates"],
    answerIndex: 2,
    explanation: "Buying Treasuries through open market operations injects money into the banking system and lowers interest rates, encouraging borrowing and spending — an easing move to stimulate. Selling Treasuries (A) and raising reserve requirements (C) are tightening actions that restrain the economy.",
  },
  {
    id: "s7-eco-q2", examSlug: "series-7", topicId: "economics", topicName: "Economic Factors & Analysis", difficulty: 1,
    stem: "Studying a company's earnings, P/E ratio, and financial statements to estimate value is:",
    choices: ["Fundamental analysis", "Technical analysis", "Dollar-cost averaging"],
    answerIndex: 0,
    explanation: "Fundamental analysis evaluates the underlying business — earnings, ratios, statements, and the economy — to estimate intrinsic value and decide WHAT to buy. Technical analysis (A) studies price and volume patterns instead. Dollar-cost averaging (C) is an investing technique, not an analytical method.",
  },
  {
    id: "s7-eco-q3", examSlug: "series-7", topicId: "economics", topicName: "Economic Factors & Analysis", difficulty: 2,
    stem: "An analyst who relies on price charts, trends, support and resistance, and volume is using:",
    choices: ["Fundamental analysis", "Technical analysis", "Modern portfolio theory"],
    answerIndex: 1,
    explanation: "Technical analysis studies market data — charts, trends, support/resistance, and volume — to decide WHEN to buy or sell, disregarding fundamentals. Fundamental analysis (A) studies the business itself. Modern portfolio theory (C) is about constructing efficient risk-return portfolios, not chart reading.",
  },
  {
    id: "s7-eco-q4", examSlug: "series-7", topicId: "economics", topicName: "Economic Factors & Analysis", difficulty: 2,
    stem: "An inverted yield curve, where short-term rates exceed long-term rates, is often viewed as a signal of:",
    choices: ["Strong economic expansion", "Rising inflation only", "An imminent recession"],
    answerIndex: 2,
    explanation: "An inverted yield curve has historically often preceded recessions, as it can reflect expectations of slowing growth and future rate cuts. A normal upward-sloping curve (B) is associated with expansion. While inflation expectations affect the curve, inversion is not specifically a 'rising inflation only' signal (C).",
  },
  {
    id: "s7-eco-q5", examSlug: "series-7", topicId: "economics", topicName: "Economic Factors & Analysis", difficulty: 1,
    stem: "Two consecutive quarters of declining real GDP is the common definition of:",
    choices: ["A recession", "An expansion", "Inflation"],
    answerIndex: 0,
    explanation: "Two consecutive quarters of declining real GDP is the classic shorthand for a recession (a contraction phase of the business cycle). An expansion (B) is rising output, the opposite. Inflation (C) is a sustained rise in the general price level, a separate concept measured by indexes like the CPI.",
  },
];
