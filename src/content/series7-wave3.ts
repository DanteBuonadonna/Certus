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
    readingMinutes: 18,
    summary: "The regulatory framework, settlement, communications rules, and the practices that get reps barred.",
    intro:
      "A registered representative operates inside a dense regulatory framework designed to protect investors and keep markets fair. The Series 7 tests who regulates what, the rules governing communications and settlement, and — most importantly — the prohibited practices that lead to fines, suspension, or being barred from the industry. Knowing what you may not do is as important as knowing what you may.",
    sections: [
      {
        heading: "Who regulates the markets",
        paragraphs: [
          "The Securities and Exchange Commission (SEC) is the federal government agency with ultimate authority over the securities markets, created by the Securities Exchange Act of 1934. FINRA (the Financial Industry Regulatory Authority) is the self-regulatory organization that oversees broker-dealers and their representatives, writes conduct rules, administers exams like the Series 7, and enforces compliance. The Securities Act of 1933 governs the issuance of new securities (the 'paper act' — registration and prospectus delivery), while the 1934 Act governs the secondary trading markets and created the SEC.",
        ],
      },
      {
        heading: "Communications with the public",
        paragraphs: [
          "FINRA classifies communications into categories with different supervisory requirements. Retail communications (distributed to more than 25 retail investors in 30 days — advertisements, websites, sales literature) generally require principal approval and may need to be filed with FINRA. Correspondence (to 25 or fewer retail investors) is subject to supervision and review but lighter pre-approval. Institutional communications go only to institutional investors. Across all categories, communications must be fair and balanced, may not be misleading, may not promise specific results, and may not omit material facts.",
        ],
        callout: {
          label: "Communication categories",
          body: "Retail communication = to >25 retail investors in 30 days (often needs principal approval/filing). Correspondence = to ≤25 retail investors. All must be fair, balanced, and not misleading.",
        },
      },
      {
        heading: "Settlement and key dates",
        paragraphs: [
          "Most securities transactions settle on a 'T+1' basis — one business day after the trade date — meaning that is when ownership and payment are exchanged. The trade date is when the order is executed; the settlement date is when it must be paid for. Understanding the timeline matters for dividends too: the ex-dividend date is the cutoff determining who receives a declared dividend, and an investor must own shares before that date to be entitled to the payment.",
        ],
      },
      {
        heading: "Prohibited practices",
        paragraphs: [
          "Several practices are strictly prohibited and heavily tested. Front-running is trading ahead of a known large customer order to profit from the price move it will cause. Market manipulation includes painting the tape (creating fake trading activity) and matched orders to give a false impression of volume. Trading on material nonpublic information (insider trading) is illegal under the 1934 Act. Churning — excessive trading to generate commissions — and unauthorized trading are violations of duties to the customer. Selling away (private securities transactions outside the firm without approval) and guaranteeing customers against loss are likewise prohibited.",
          "The common thread is that these practices put the representative's or firm's interest ahead of the customer's, or distort the integrity of the market. The exam frequently presents a scenario and asks you to identify which prohibited practice it describes — so learn to recognize the pattern, not just the term.",
        ],
      },
      {
        heading: "Communications and settlement at a glance",
        blocks: [
          { kind: "table", table: { caption: "Table 1 — FINRA communication categories and their supervision.", headers: ["Category", "Audience", "Supervision"], rows: [["Retail communication", ">25 retail investors in 30 days", "Principal approval; may need FINRA filing"], ["Correspondence", "≤25 retail investors in 30 days", "Supervised/reviewed, lighter pre-approval"], ["Institutional communication", "Institutional investors only", "Internal procedures"]] } },
          { kind: "callout", label: "Settlement & key dates", body: "Most securities settle T+1 (one business day after the trade). To receive a declared dividend, an investor must own the shares before the ex-dividend date." },
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
    readingMinutes: 16,
    summary: "Treasury bills, notes, bonds, TIPS, and the agency/mortgage-backed market.",
    intro:
      "U.S. government securities are the bedrock of the fixed-income market — considered free of credit risk because they're backed by the federal government — and they set the benchmark against which all other bonds are priced. The Series 7 tests the different Treasury instruments, their tax treatment, and the distinction between true government backing and the agency securities that only look as safe.",
    sections: [
      {
        heading: "Treasury securities",
        paragraphs: [
          "The Treasury issues several instruments by maturity. Treasury bills (T-bills) are short-term (one year or less), pay no coupon, and are sold at a discount — the investor's return is the difference between the discounted purchase price and the face value at maturity. Treasury notes (T-notes) have maturities of 2 to 10 years and pay semiannual interest. Treasury bonds (T-bonds) run beyond 10 years (up to 30) and also pay semiannual interest. All are backed by the full faith and credit of the U.S. government, making them the definition of a risk-free credit.",
          "Two specialized forms matter. Treasury Inflation-Protected Securities (TIPS) adjust their principal with inflation (measured by CPI), protecting purchasing power — when inflation rises, the principal and thus the interest payments increase. STRIPS are zero-coupon Treasuries created by separating a bond's coupons and principal into individually traded pieces.",
        ],
        callout: {
          label: "Treasury tax treatment",
          body: "Interest on U.S. Treasury securities is subject to FEDERAL income tax but EXEMPT from state and local tax — the mirror image of municipals (federal-exempt, sometimes state-taxable).",
        },
      },
      {
        heading: "Agency and mortgage-backed securities",
        paragraphs: [
          "Agency securities are issued by government agencies and government-sponsored enterprises (GSEs) to support areas like housing. The crucial distinction is the backing. GNMA (Ginnie Mae) is a true government agency, and its securities carry the full faith and credit of the U.S. government — as safe as Treasuries. FNMA (Fannie Mae) and FHLMC (Freddie Mac) are GSEs whose securities are NOT explicitly backed by the government's full faith and credit, so they carry slightly more credit risk and a modestly higher yield.",
          "Many agency securities are mortgage-backed: pools of home loans whose payments pass through to investors. These carry prepayment risk — when interest rates fall, homeowners refinance and pay off their mortgages early, returning principal to investors at exactly the time it must be reinvested at lower rates. That prepayment behavior makes mortgage-backed securities behave differently from a standard bond, a nuance the exam likes to probe.",
        ],
      },
      {
        heading: "Treasuries and agencies at a glance",
        blocks: [
          { kind: "table", table: { caption: "Table 1 — The Treasury instruments by maturity, plus the inflation-protected and agency variants.", headers: ["Instrument", "Maturity", "Pays"], rows: [["Treasury bill", "≤ 1 year", "Sold at a discount; no coupon"], ["Treasury note", "2–10 years", "Semiannual coupon"], ["Treasury bond", "10–30 years", "Semiannual coupon"], ["TIPS", "Various", "Coupon on inflation-adjusted principal"]] } },
          { kind: "callout", label: "Full faith and credit vs GSE", body: "GNMA (Ginnie Mae) is a true federal agency — its securities carry the full faith and credit of the U.S. government. Fannie Mae and Freddie Mac are GSEs whose securities are NOT explicitly government-backed, so they yield slightly more. Mortgage-backed agency securities also carry prepayment risk when rates fall." },
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
    readingMinutes: 17,
    summary: "How buying on credit works — Regulation T's 50% initial requirement, FINRA maintenance minimums, and the special risks of short margin.",
    intro:
      "A margin account lets a customer borrow from the broker-dealer to buy securities, amplifying both gains and losses. The Series 7 tests the rules tightly: the Federal Reserve's Regulation T initial requirement, FINRA's maintenance minimums, and how short selling is margined. Get the two thresholds straight and the calculations follow.",
    sections: [
      {
        heading: "How margin works and Regulation T",
        blocks: [
          { kind: "p", text: "In a long margin purchase, the investor puts up part of the price and borrows the rest from the firm, creating a debit balance (the loan). The investor's equity is the market value minus the debit. The Federal Reserve's Regulation T sets the INITIAL margin requirement at 50% — the customer must deposit at least half the purchase price of marginable securities. The securities are held as collateral (hypothecation)." },
          { kind: "example", example: { title: "the Reg T deposit", prompt: "A customer buys $20,000 of marginable stock in a margin account. What is the minimum Reg T deposit?", steps: ["Regulation T initial margin = 50%.", "Deposit = 50% × $20,000 = $10,000.", "The remaining $10,000 is the debit balance (the loan)."], answer: "$10,000 — half the purchase price, with the other half borrowed from the firm." } },
        ],
      },
      {
        heading: "Maintenance margin",
        blocks: [
          { kind: "p", text: "After the purchase, FINRA requires a minimum MAINTENANCE level of equity. For a long account, equity must stay at least 25% of the market value; if it falls below, the customer gets a maintenance (margin) call to deposit more. For a short account, the minimum is 30% of the market value. Firms often set stricter 'house' requirements above the FINRA minimums." },
          { kind: "table", table: { caption: "Table 1 — The two margin thresholds the exam tests.", headers: ["Requirement", "Long", "Short"], rows: [["Initial (Regulation T)", "50%", "50%"], ["Maintenance (FINRA minimum)", "25% of market value", "30% of market value"]] } },
        ],
      },
      {
        heading: "Short selling on margin",
        blocks: [
          { kind: "p", text: "Short selling — selling borrowed shares hoping to buy them back cheaper — must occur in a margin account. The short seller profits if the price falls but faces theoretically UNLIMITED loss if the price rises, since a stock can climb without limit. That open-ended risk is why short positions carry the higher 30% maintenance requirement and why suitability scrutiny is high. Excess equity in a margin account is tracked in the Special Memorandum Account (SMA), which represents buying power the customer can draw on." },
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
    readingMinutes: 18,
    summary: "Beyond single options — protective puts and covered calls, debit and credit spreads, and straddles, with the max-gain/loss/breakeven logic the exam drills.",
    intro:
      "The Series 7 leans hard on multi-leg option strategies. The key is to recognize the strategy from the position, match it to a market outlook, and compute max gain, max loss, and breakeven. This chapter organizes the core strategies so the vignette patterns become automatic.",
    sections: [
      {
        heading: "Hedging strategies",
        blocks: [
          { kind: "p", text: "Options shape risk. A protective put (long stock + long put) insures the downside: losses are capped below the strike while upside is retained, for the cost of the premium. A covered call (long stock + short call) sells away the upside above the strike to earn premium income — best when neutral-to-mildly-bullish. A collar combines both (own stock, buy a put, sell a call) to bracket the outcome cheaply." },
          { kind: "example", example: { title: "covered call max gain", prompt: "An investor buys stock at $50 and sells a 55 call for a $2 premium. What is the maximum gain?", steps: ["Max gain occurs if the stock is called away at the $55 strike.", "Gain on stock = 55 − 50 = $5; plus the $2 premium kept.", "Max gain = $5 + $2 = $7 per share."], answer: "$7 per share — the $5 of stock appreciation to the strike plus the $2 premium. Upside above $55 is forfeited." } },
        ],
      },
      {
        heading: "Spreads",
        blocks: [
          { kind: "p", text: "A spread combines a long and a short option of the same type (both calls or both puts) with different strikes or expirations, to bet on direction with limited risk and cost. A debit spread (you pay net premium) profits if the market moves your way — a bull call spread (buy lower-strike call, sell higher) profits as the stock rises. A credit spread (you receive net premium) profits if the market stays put or moves against the long option's favor — a bear call spread or bull put spread. Max gain and loss are both capped by the difference in strikes net of the premium." },
          { kind: "callout", label: "Debit vs credit, fast", body: "Debit spread → you PAID a premium → you want the spread to WIDEN (the market to move in your favor). Credit spread → you RECEIVED a premium → you want the spread to NARROW/expire worthless (the market to stay put)." },
        ],
      },
      {
        heading: "Straddles",
        blocks: [
          { kind: "p", text: "A long straddle (buy a call AND a put at the same strike) profits from a BIG move in either direction — it's a bet on volatility, with loss limited to the two premiums if the stock sits still. A short straddle (sell both) profits if the stock barely moves, collecting both premiums, but carries large risk if it moves sharply. Breakeven on a long straddle is the strike plus or minus the total premium paid." },
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
    readingMinutes: 15,
    summary: "Pass-through real-asset investments — how limited partnerships flow income and losses to investors, the partner roles, and how REITs differ.",
    intro:
      "Direct participation programs and REITs let investors access real assets like real estate and energy. The Series 7 tests how DPPs pass income and losses through to investors, the roles and liabilities of partners, and how REITs — which look similar — actually differ in structure, taxation, and liquidity.",
    sections: [
      {
        heading: "Direct participation programs",
        blocks: [
          { kind: "p", text: "A direct participation program (DPP), usually a limited partnership, passes income, gains, losses, and deductions directly through to investors — it is NOT taxed at the entity level (flow-through taxation), avoiding the double taxation of a corporation. The general partner (GP) manages the venture and has unlimited liability; limited partners (LPs) are passive investors whose liability is limited to their investment. Common DPP types include real estate, oil & gas, and equipment leasing." },
          { kind: "callout", label: "Passive income and losses", body: "DPP income and losses are 'passive.' Passive losses can generally offset only passive income, not ordinary wages — a key suitability and tax point. DPPs are also illiquid, with no active secondary market." },
        ],
      },
      {
        heading: "REITs",
        blocks: [
          { kind: "p", text: "A real estate investment trust (REIT) pools money to own (equity REIT) or finance (mortgage REIT) real estate. Crucially, a REIT is NOT a DPP and does not pass through losses. To keep its favorable tax status, a REIT must distribute at least 90% of its taxable income to shareholders as dividends. Most REITs are publicly traded on exchanges, making them far more liquid than DPPs — you can buy and sell them like stock." },
          { kind: "table", table: { caption: "Table 1 — DPP vs REIT.", headers: ["Feature", "DPP (limited partnership)", "REIT"], rows: [["Passes losses to investors?", "Yes (flow-through)", "No"], ["Liquidity", "Illiquid, no active market", "Usually exchange-traded, liquid"], ["Tax requirement", "Flow-through; passive income/loss", "Distribute ≥90% of income as dividends"]] } },
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
    readingMinutes: 16,
    summary: "The heart of the rep's job — gathering a customer profile, the three prongs of suitability, Reg BI's best-interest standard, and matching products to objectives.",
    intro:
      "The Series 7 is, at its core, an exam about making suitable recommendations. Every product chapter ultimately serves this one: can you match the right investment to the right customer? This chapter builds the customer-profile framework, the suitability obligations, and the higher best-interest standard that now governs retail recommendations.",
    sections: [
      {
        heading: "The customer profile",
        blocks: [
          { kind: "p", text: "Before recommending anything, the rep must understand the customer through the know-your-customer rule. The profile captures financial information (income, net worth, liquid assets, existing holdings), investment objectives (growth, income, preservation of capital, speculation), risk tolerance, time horizon, tax status, and liquidity needs, plus non-financial facts like age, marital status, and dependents. A recommendation must fit the WHOLE picture — recommending an illiquid, speculative product to a 70-year-old who needs income and stability is the textbook violation." },
          { kind: "callout", label: "Objective → product", body: "Growth → common stock and growth funds. Income → bonds, dividend stocks, income funds. Preservation → government securities, money market. Speculation → options, low-grade bonds, volatile equities. Liquidity need → avoid DPPs and other illiquid products." },
        ],
      },
      {
        heading: "The three prongs of suitability",
        blocks: [
          { kind: "p", text: "FINRA's suitability framework has three components. Reasonable-basis suitability requires the rep to understand the product and believe it is suitable for at least SOME investors. Customer-specific suitability requires that the recommendation fit THIS particular customer's profile. Quantitative suitability requires that a series of recommendations, even if each is individually suitable, not be excessive in light of the customer's profile — the guard against churning. All three must hold." },
          { kind: "table", table: { caption: "Table 1 — The three prongs of suitability.", headers: ["Prong", "Question it answers"], rows: [["Reasonable-basis", "Is it suitable for anyone, and do I understand it?"], ["Customer-specific", "Is it suitable for THIS customer?"], ["Quantitative", "Is the overall trading pattern excessive (churning)?"]] } },
        ],
      },
      {
        heading: "Regulation Best Interest",
        blocks: [
          { kind: "p", text: "The SEC's Regulation Best Interest (Reg BI) raised the standard for recommendations to RETAIL customers above mere suitability: a broker-dealer must act in the customer's BEST INTEREST and may not place its own interests ahead of the customer's. Reg BI imposes four obligations — disclosure (of the relationship and conflicts), care (a reasonable basis grounded in the customer's profile), conflict-of-interest (identify and mitigate or eliminate conflicts), and compliance. Firms must also deliver Form CRS, a brief customer relationship summary describing services, fees, and conflicts. When willingness to take risk conflicts with financial ability to bear it, the more conservative ability generally governs." },
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
    readingMinutes: 16,
    summary: "How securities come to market — the 1933 Act registration timeline, underwriting commitments and the syndicate, and the rules around prospectuses and offerings.",
    intro:
      "The primary market is where capital is raised, and the Series 7 tests the mechanics of bringing a new issue to market: the registration process under the Securities Act of 1933, the underwriting commitments that allocate risk, and the documents and prohibitions that govern the offering period. Know the timeline cold.",
    sections: [
      {
        heading: "Registration and the timeline",
        blocks: [
          { kind: "p", text: "The Securities Act of 1933 governs new issues and centers on disclosure. The issuer files a registration statement with the SEC, beginning a process with three phases. In the PRE-FILING period, no offers or sales are allowed. The COOLING-OFF period (a minimum of 20 days) follows filing, during which the SEC reviews; the firm may distribute a preliminary prospectus (the red herring) and collect non-binding indications of interest, but may not take orders or money. Once the registration is EFFECTIVE, sales proceed with a final prospectus that must be delivered to buyers." },
          { kind: "callout", label: "The SEC does not approve", body: "SEC clearance confirms adequate DISCLOSURE — it never approves the merits or guarantees a security. Telling a customer the SEC 'approved' an issue is a prohibited misrepresentation." },
        ],
      },
      {
        heading: "Underwriting commitments and the syndicate",
        blocks: [
          { kind: "p", text: "Underwriters bring the issue to market, and the commitment type allocates the risk of unsold shares. In a FIRM COMMITMENT, the underwriter buys the entire issue and resells it, bearing the risk — the most common arrangement. In a BEST EFFORTS deal, the underwriter only agrees to use its best efforts and returns unsold shares to the issuer, bearing no inventory risk; variations include all-or-none and mini-max. Large deals use a SYNDICATE of firms led by a managing underwriter, with a selling group helping distribute. The underwriting SPREAD — the difference between the public offering price and the proceeds to the issuer — is the underwriters' compensation, divided into the manager's fee, the underwriting fee, and the selling concession." },
          { kind: "table", table: { caption: "Table 1 — Underwriting commitments.", headers: ["Type", "Who bears unsold-share risk"], rows: [["Firm commitment", "Underwriter (buys the whole issue)"], ["Best efforts", "Issuer (underwriter only tries)"], ["All-or-none", "Deal cancelled unless fully sold"]] } },
        ],
      },
      {
        heading: "Offering types and prohibitions",
        blocks: [
          { kind: "p", text: "Offerings come in forms. An IPO is a company's first public sale; a follow-on (secondary) offering sells additional shares later. Securities and transactions can be exempt: government and municipal securities are exempt securities, and private placements under Regulation D (to accredited or a limited number of investors) are exempt transactions. During the offering, several practices are prohibited or restricted: free-riding and withholding (an underwriter holding back a hot issue for its own benefit) and selling a new issue to restricted persons. Reps may not guarantee a gain, and the prospectus-delivery requirements must be met for the applicable aftermarket period." },
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
    readingMinutes: 15,
    summary: "The macro and analytical backdrop — the business cycle, monetary and fiscal policy, fundamental vs technical analysis, and key market measures.",
    intro:
      "A registered rep must read the economic weather. The Series 7 tests the business cycle, the policy levers that steer it, the difference between fundamental and technical analysis, and the measures that describe markets and securities. This chapter connects the macro picture to the analysis reps use to frame recommendations.",
    sections: [
      {
        heading: "The business cycle and policy",
        blocks: [
          { kind: "p", text: "Economies cycle through expansion, peak, contraction, and trough; two consecutive quarters of declining real GDP is the common definition of a recession. Two policy levers respond. MONETARY policy is run by the Federal Reserve, which adjusts the money supply and short-term rates mainly through open market operations (buying Treasuries eases and lowers rates; selling tightens and raises them), plus the discount rate and reserve requirements. FISCAL policy is run by Congress and the President through spending and taxation. Interest-rate moves ripple straight into securities: when rates rise, bond prices fall and rate-sensitive stocks often weaken." },
          { kind: "table", table: { caption: "Table 1 — Policy levers.", headers: ["Policy", "Run by", "Main tools"], rows: [["Monetary", "Federal Reserve", "Open market operations, discount rate, reserves"], ["Fiscal", "Congress / President", "Spending and taxation"]] } },
        ],
      },
      {
        heading: "Fundamental vs technical analysis",
        blocks: [
          { kind: "p", text: "Two schools analyze securities. FUNDAMENTAL analysis studies the underlying business and economy — financial statements, earnings, ratios (like the P/E ratio and earnings per share), management, and industry conditions — to estimate intrinsic value and decide WHAT to buy. TECHNICAL analysis ignores fundamentals and studies market data — price charts, trends, support and resistance levels, trading volume, and momentum — to decide WHEN to buy or sell. A fundamental analyst asks whether a company is sound; a technical analyst asks what the price action is signaling." },
          { kind: "callout", label: "What vs when", body: "Fundamental analysis (earnings, ratios, the economy) helps decide WHAT to buy. Technical analysis (charts, trends, volume) helps decide WHEN to buy or sell. The exam loves to test which tool a given input belongs to." },
        ],
      },
      {
        heading: "Market measures and theory",
        blocks: [
          { kind: "p", text: "Several measures appear on the exam. The yield curve plots yields against maturities — normally upward-sloping; an INVERTED curve (short rates above long rates) often precedes a recession. Indexes and averages (the Dow, S&P 500) gauge the broad market. For individual stocks, the price-to-earnings (P/E) ratio compares price to earnings per share, and dividend yield compares the dividend to price. Underlying it all, the efficient market hypothesis argues prices already reflect available information, which is the intellectual case for low-cost, passive index investing over trying to beat the market." },
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
];

export const s7Wave3Questions: Question[] = [
  // Regulations
  {
    id: "s7-reg-q1", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 2,
    stem: "The federal law that governs the issuance of NEW securities, requiring registration and prospectus delivery, is the:",
    choices: ["Securities Exchange Act of 1934", "Securities Act of 1933", "Investment Company Act of 1940"],
    answerIndex: 1,
    explanation: "The Securities Act of 1933 — the 'paper act' — governs new issues, requiring registration and delivery of a prospectus to buyers. Choice A (1934 Act) governs the SECONDARY trading markets and created the SEC. Choice C (1940 Act) regulates investment companies like mutual funds, not the general issuance of new securities.",
  },
  {
    id: "s7-reg-q2", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 3,
    stem: "A representative learns a large institutional client is about to place a huge buy order, and quickly buys the stock for their own account first. This is:",
    choices: ["Permissible, since the rep took the risk", "Front-running, a prohibited practice", "Simply good market timing"],
    answerIndex: 1,
    explanation: "Trading ahead of a known large customer order to profit from the price impact it will cause is front-running — a prohibited practice that puts the rep's interest ahead of the customer's and abuses confidential order information. Choices A and C try to rationalize it, but no framing makes front-running acceptable; it's a serious violation regardless of outcome.",
  },
  {
    id: "s7-reg-q3", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 2,
    stem: "A piece of sales literature is distributed to 200 retail investors within a 30-day period. Under FINRA rules this is classified as:",
    choices: ["Correspondence", "A retail communication", "An institutional communication"],
    answerIndex: 1,
    explanation: "A communication distributed to more than 25 retail investors within 30 days is a retail communication, which generally requires principal approval and may need filing with FINRA. Choice A (correspondence) applies to 25 or FEWER retail investors. Choice C (institutional) applies only to institutional investors, not the 200 retail investors here.",
  },
  // Government securities
  {
    id: "s7-gov-q1", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 2,
    stem: "Interest earned on U.S. Treasury securities is:",
    choices: ["Exempt from federal tax but subject to state tax", "Subject to federal tax but exempt from state and local tax", "Completely tax-free"],
    answerIndex: 1,
    explanation: "Treasury interest is taxable at the FEDERAL level but exempt from STATE and local taxes — the mirror image of municipal bonds (which are federally exempt). Choice A reverses the treatment. Choice C is wrong because Treasuries are not fully tax-free; only the state/local portion is exempt.",
  },
  {
    id: "s7-gov-q2", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 3,
    stem: "Which security carries the full faith and credit of the U.S. government?",
    choices: ["FNMA (Fannie Mae)", "FHLMC (Freddie Mac)", "GNMA (Ginnie Mae)"],
    answerIndex: 2,
    explanation: "Ginnie Mae (GNMA) is a true federal agency, and its securities carry the full faith and credit of the U.S. government — as safe as Treasuries. Fannie Mae and Freddie Mac are government-sponsored enterprises (GSEs) whose securities are NOT explicitly backed by the government's full faith and credit, so they carry slightly more credit risk and a marginally higher yield.",
  },
  {
    id: "s7-gov-q3", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 2,
    stem: "An investor worried about inflation eroding their fixed-income returns would most appropriately buy:",
    choices: ["Treasury bills", "TIPS (Treasury Inflation-Protected Securities)", "Zero-coupon STRIPS"],
    answerIndex: 1,
    explanation: "TIPS adjust their principal with inflation (via CPI), so as prices rise, both principal and interest payments increase — directly protecting purchasing power. Choice A (T-bills) offers safety and liquidity but no inflation protection. Choice C (STRIPS) are zero-coupon bonds whose fixed payout is actually MORE exposed to inflation erosion, not less.",
  },

  // ---- Equity Securities ----
  {
    id: "s7-eq-x1", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "With CUMULATIVE preferred stock, if a dividend is skipped, the company must:",
    choices: ["Never pay the missed dividend", "Pay all missed (accrued) dividends before paying common dividends", "Convert the shares to common"],
    answerIndex: 1,
    explanation: "Cumulative preferred accumulates any skipped dividends 'in arrears,' and all of them must be paid before common shareholders receive anything. Choice A describes non-cumulative preferred. Choice C describes convertible preferred, a different feature.",
  },
  {
    id: "s7-eq-x2", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "A preemptive right allows existing shareholders to:",
    choices: ["Vote for the board of directors", "Maintain their proportional ownership by buying new shares before the public", "Receive a guaranteed dividend"],
    answerIndex: 1,
    explanation: "Preemptive rights let current shareholders buy newly issued shares first, preventing dilution of their ownership percentage. Choice A is a separate voting right. Choice C is incorrect — common dividends are never guaranteed.",
  },

  // ---- Debt Securities ----
  {
    id: "s7-debt-x1", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 2,
    stem: "A bond is considered 'investment grade' if it is rated at least:",
    choices: ["BBB- / Baa3", "BB / Ba", "C"],
    answerIndex: 0,
    explanation: "Investment grade begins at BBB- (S&P/Fitch) or Baa3 (Moody's); anything below is 'high yield' or 'junk.' Choice B is the top of the speculative (junk) tier. Choice C is deep junk, near default.",
  },
  {
    id: "s7-debt-x2", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 3,
    stem: "When a bond is bought between coupon dates, the buyer typically pays the seller:",
    choices: ["No interest at all", "Accrued interest since the last coupon date, on top of the price", "Double the next coupon"],
    answerIndex: 1,
    explanation: "The buyer compensates the seller for interest earned but not yet paid — the accrued interest from the last coupon date to settlement — added to the purchase price. Choice A ignores the seller's earned interest. Choice C has no basis.",
  },

  // ---- Customer Accounts ----
  {
    id: "s7-acct-x1", examSlug: "series-7", topicId: "accounts", topicName: "Customer Accounts", difficulty: 2,
    stem: "For a registered rep to exercise discretion (choosing securities/amounts) in a customer's account, the firm must first have:",
    choices: ["A verbal okay from the customer", "Prior WRITTEN authorization from the customer", "Approval from FINRA"],
    answerIndex: 1,
    explanation: "Discretionary trading requires prior written authorization (a signed discretionary agreement) and principal approval of the account. Choice A is insufficient — discretion can't rest on a verbal okay. Choice C misplaces the approval; it's the customer and firm principal, not FINRA, who authorize.",
  },
  {
    id: "s7-acct-x2", examSlug: "series-7", topicId: "accounts", topicName: "Customer Accounts", difficulty: 2,
    stem: "Under Regulation T, an investor buying $10,000 of marginable stock must deposit at least:",
    choices: ["$1,000", "$5,000 (50%)", "$10,000"],
    answerIndex: 1,
    explanation: "Regulation T sets initial margin at 50%, so the investor deposits at least $5,000 and borrows the rest from the broker. Choice A is too little. Choice C would be a full cash purchase, not margin.",
  },

  // ---- Options ----
  {
    id: "s7-opt-x1", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 3,
    stem: "An investor who owns 100 shares and sells one call against them has established a:",
    choices: ["Protective put", "Covered call (income, capped upside)", "Long straddle"],
    answerIndex: 1,
    explanation: "Owning the stock and writing a call on it is a covered call: it generates premium income but caps the upside at the strike. Choice A (protective put) involves BUYING a put for downside insurance. Choice C is an unrelated volatility strategy.",
  },
  {
    id: "s7-opt-x2", examSlug: "series-7", topicId: "options", topicName: "Options", difficulty: 2,
    stem: "The breakeven on a long call is:",
    choices: ["Strike price − premium", "Strike price + premium paid", "The premium alone"],
    answerIndex: 1,
    explanation: "A long call breaks even when the stock rises enough to recover the premium, so breakeven = strike + premium paid. Choice A is the breakeven for a long PUT (strike − premium). Choice C ignores the strike entirely.",
  },

  // ---- Municipal Securities ----
  {
    id: "s7-mun-x1", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 2,
    stem: "A revenue bond is repaid from:",
    choices: ["The issuer's general taxing power", "The income generated by the specific project it financed", "Federal appropriations"],
    answerIndex: 1,
    explanation: "Revenue bonds are serviced only by the revenues of the facility they financed (a toll road, water system, airport), making them generally riskier than GO bonds. Choice A describes a general obligation bond. Choice C is incorrect; municipal bonds aren't repaid by the federal government.",
  },
  {
    id: "s7-mun-x2", examSlug: "series-7", topicId: "munis", topicName: "Municipal Securities", difficulty: 3,
    stem: "A municipal bond can be 'triple tax-exempt' for an investor when:",
    choices: ["It is a corporate bond", "The investor lives in the issuing state (exempt from federal, state, and local tax)", "It is a Treasury bond"],
    answerIndex: 1,
    explanation: "Municipal bond interest is federally tax-exempt, and for an in-state resident it is often also exempt from state and local tax — 'triple tax-exempt.' Choice A is taxable. Choice C (Treasuries) is exempt from state/local tax but taxable federally, not triple-exempt.",
  },

  // ---- Packaged Products ----
  {
    id: "s7-pkg-x1", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 2,
    stem: "'Breakpoints' on Class A mutual fund shares are:",
    choices: ["Penalties for early redemption", "Reduced sales charges for investing larger dollar amounts", "Annual 12b-1 fees"],
    answerIndex: 1,
    explanation: "Breakpoints are volume discounts: the larger the investment, the lower the front-end sales charge on A shares. 'Breakpoint selling' (keeping a purchase just under a breakpoint to earn a higher commission) is a violation. Choice A describes a back-end load. Choice C is an ongoing distribution fee, not a breakpoint.",
  },
  {
    id: "s7-pkg-x2", examSlug: "series-7", topicId: "packaged", topicName: "Packaged Products", difficulty: 2,
    stem: "Unlike a mutual fund, an ETF:",
    choices: ["Can only be bought once per day at NAV", "Trades throughout the day on an exchange at market prices", "Has no expense ratio"],
    answerIndex: 1,
    explanation: "ETFs trade intraday on an exchange at market prices and can be bought, sold, or shorted like stocks; open-end mutual funds transact once daily at NAV. Choice A describes the mutual fund, not the ETF. Choice C is false — ETFs have expense ratios (usually low).",
  },

  // ---- Regulations ----
  {
    id: "s7-reg-x1", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 2,
    stem: "FINRA's 5% policy is a guideline for:",
    choices: ["The maximum margin allowed", "Fair markups, markdowns, and commissions on transactions", "The minimum account balance"],
    answerIndex: 1,
    explanation: "The 5% policy is a guideline (not a hard rule) for assessing whether markups, markdowns, and commissions are fair and reasonable given the circumstances. Choice A relates to Regulation T. Choice C is unrelated to pricing fairness.",
  },
  {
    id: "s7-reg-x2", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 2,
    stem: "Before recommending a security, a rep must have a reasonable basis to believe it is suitable based on the customer's:",
    choices: ["Favorite color", "Financial situation, objectives, risk tolerance, and other profile factors", "Zodiac sign"],
    answerIndex: 1,
    explanation: "Suitability (and Reg BI's care obligation) requires understanding the customer's financial situation, investment objectives, risk tolerance, time horizon, and needs before recommending. Choices A and C are obviously irrelevant distractors highlighting that recommendations must rest on real profile information.",
  },

  // ---- US Government Securities ----
  {
    id: "s7-gov-x1", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 2,
    stem: "Treasury bills are issued:",
    choices: ["At a discount, maturing at face value (no coupon)", "With a fixed semiannual coupon", "At a premium to face"],
    answerIndex: 0,
    explanation: "T-bills are short-term, sold at a discount and redeemed at face value, with the gain serving as the interest — they carry no periodic coupon. Choice B describes T-notes/bonds. Choice C is incorrect; bills are sold at a discount, not a premium.",
  },
  {
    id: "s7-gov-x2", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 3,
    stem: "GNMA (Ginnie Mae) pass-through securities:",
    choices: ["Are backed by the full faith and credit of the U.S. government and pay monthly principal and interest", "Are common stock in a mortgage company", "Are tax-free municipal bonds"],
    answerIndex: 0,
    explanation: "GNMA pass-throughs are backed by the full faith and credit of the U.S. government and distribute monthly payments of both principal and interest from a pool of mortgages. Choice B mischaracterizes them as equity. Choice C is wrong; they are taxable federal securities, not municipal bonds.",
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
    choices: ["25% of market value", "50% of market value", "30% of market value"],
    answerIndex: 0,
    explanation: "FINRA requires long-account equity to stay at least 25% of market value; below that triggers a maintenance call. Choice B is the Reg T INITIAL requirement, not maintenance. Choice C (30%) is the SHORT-account maintenance minimum.",
  },
  {
    id: "s7-mgn-q3", examSlug: "series-7", topicId: "margin", topicName: "Margin Accounts", difficulty: 2,
    stem: "The minimum maintenance requirement for a SHORT margin account is:",
    choices: ["25% of market value", "30% of market value", "10% of market value"],
    answerIndex: 1,
    explanation: "Short positions carry a higher 30% maintenance requirement because their potential loss is unlimited. Choice A (25%) is the long-account minimum. Choice C understates the requirement.",
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
    choices: ["Because the loss potential is theoretically unlimited if the price rises", "Because short sales are tax-free", "Because cash accounts cannot hold any securities"],
    answerIndex: 0,
    explanation: "Short selling carries theoretically unlimited loss (a stock can rise without limit), so it requires the collateral and oversight of a margin account. Choice B is false — short sales are not tax-advantaged. Choice C is wrong; cash accounts hold securities, they just can't be used for short selling.",
  },

  // ---- Options Strategies ----
  {
    id: "s7-oadv-q1", examSlug: "series-7", topicId: "options-adv", topicName: "Options Strategies", difficulty: 3,
    stem: "An investor buys stock at $40 and writes a 45 call for $3. The maximum gain is:",
    choices: ["$3", "$5", "$8"],
    answerIndex: 2,
    explanation: "Max gain on a covered call = (strike − cost) + premium = (45 − 40) + 3 = $8 per share, achieved if the stock is called away at $45. Choice A counts only the premium. Choice B counts only the stock appreciation, omitting the premium.",
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
    choices: ["The spread widens", "The options expire worthless / the spread narrows", "Volatility spikes sharply"],
    answerIndex: 1,
    explanation: "In a credit spread you collect a net premium and want the options to expire worthless (the spread to narrow), keeping the premium. Choice A describes a debit spread's goal. Choice C is the goal of a long straddle, not a credit spread.",
  },
  {
    id: "s7-oadv-q4", examSlug: "series-7", topicId: "options-adv", topicName: "Options Strategies", difficulty: 2,
    stem: "A long straddle (long call + long put at the same strike) profits most when the underlying:",
    choices: ["Stays exactly at the strike", "Makes a large move in EITHER direction", "Drifts slightly higher"],
    answerIndex: 1,
    explanation: "A long straddle is a volatility bet: it profits from a big move up OR down, with loss limited to the two premiums if the stock sits still. Choice A produces the maximum loss. Choice C's small move likely won't cover both premiums.",
  },
  {
    id: "s7-oadv-q5", examSlug: "series-7", topicId: "options-adv", topicName: "Options Strategies", difficulty: 3,
    stem: "A bull call spread is created by:",
    choices: ["Buying a lower-strike call and selling a higher-strike call", "Selling a call and selling a put", "Buying a put and buying a call"],
    answerIndex: 0,
    explanation: "A bull call spread buys a lower-strike call and sells a higher-strike call (a debit spread), profiting as the stock rises, with both gain and loss capped. Choice B is a short straddle/strangle. Choice C is a long straddle.",
  },

  // ---- DPPs & REITs ----
  {
    id: "s7-dpp-q1", examSlug: "series-7", topicId: "dpp", topicName: "DPPs & REITs", difficulty: 2,
    stem: "A key tax feature of a direct participation program (DPP) is that it:",
    choices: ["Pays corporate tax, then taxes investors again", "Passes income and losses through to investors (flow-through), avoiding entity-level tax", "Is exempt from all taxation"],
    answerIndex: 1,
    explanation: "A DPP (limited partnership) is a flow-through entity: income, gains, and losses pass directly to investors and are taxed once on their returns, avoiding corporate double taxation. Choice A describes a C corporation. Choice C is false; the income is taxed at the investor level.",
  },
  {
    id: "s7-dpp-q2", examSlug: "series-7", topicId: "dpp", topicName: "DPPs & REITs", difficulty: 2,
    stem: "In a limited partnership, the general partner (GP):",
    choices: ["Is a passive investor with limited liability", "Manages the venture and has unlimited liability", "Has no role once the partnership is formed"],
    answerIndex: 1,
    explanation: "The GP runs the partnership and bears unlimited liability for its obligations, while limited partners are passive with liability capped at their investment. Choice A describes a limited partner. Choice C is wrong; the GP has ongoing management responsibility.",
  },
  {
    id: "s7-dpp-q3", examSlug: "series-7", topicId: "dpp", topicName: "DPPs & REITs", difficulty: 3,
    stem: "Passive losses generated by a DPP can generally be used to offset:",
    choices: ["Ordinary wage income", "Passive income from other passive activities", "Capital gains on stocks"],
    answerIndex: 1,
    explanation: "Passive losses can generally offset only passive income, not ordinary wages or (directly) portfolio income — a central suitability and tax point for DPPs. Choices A and C describe income types that passive losses generally cannot offset.",
  },
  {
    id: "s7-dpp-q4", examSlug: "series-7", topicId: "dpp", topicName: "DPPs & REITs", difficulty: 2,
    stem: "To maintain its favorable tax status, a REIT must distribute at least:",
    choices: ["50% of its taxable income", "90% of its taxable income", "100% of its assets"],
    answerIndex: 1,
    explanation: "A REIT must distribute at least 90% of its taxable income to shareholders as dividends to keep its special tax treatment. Choice A understates the threshold. Choice C confuses income distribution with asset liquidation.",
  },
  {
    id: "s7-dpp-q5", examSlug: "series-7", topicId: "dpp", topicName: "DPPs & REITs", difficulty: 2,
    stem: "Compared with a DPP, a publicly traded REIT is:",
    choices: ["Less liquid and passes through losses", "More liquid (exchange-traded) and does NOT pass through losses", "Identical in every respect"],
    answerIndex: 1,
    explanation: "A traded REIT can be bought and sold on an exchange like stock (liquid) and, unlike a DPP, does not pass losses through to investors. Choice A reverses both features. Choice C is false; their structure, liquidity, and tax treatment differ.",
  },

  // Suitability & Recommendations
  {
    id: "s7-sui-q1", examSlug: "series-7", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 1,
    stem: "Which product best matches a customer whose primary objective is current income?",
    choices: ["Growth stocks", "Investment-grade bonds and dividend-paying stocks", "Out-of-the-money call options"],
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
    choices: ["Merely ensure the product is suitable", "Act in the customer's best interest, not placing its own interests first", "Guarantee the customer a profit"],
    answerIndex: 1,
    explanation: "Reg BI raised the bar above suitability: the firm must act in the retail customer's best interest and may not put its own interests ahead of the customer's, with disclosure, care, conflict, and compliance obligations. Mere suitability (A) is the older standard, and guaranteeing a profit (C) is always prohibited.",
  },
  {
    id: "s7-sui-q4", examSlug: "series-7", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 2,
    stem: "A customer says they want maximum risk, but they have minimal income, no savings, and need the funds within a year. The rep should:",
    choices: ["Honor the stated willingness and recommend aggressive products", "Let the limited financial ability to take risk govern the recommendation", "Decline to serve the customer"],
    answerIndex: 1,
    explanation: "When willingness conflicts with financial ability to bear risk, the more conservative ability generally governs a suitable recommendation — limited income and a one-year need argue strongly against aggressive products. Following stated willingness alone (A) ignores ability; declining to serve (C) is unwarranted.",
  },
  {
    id: "s7-sui-q5", examSlug: "series-7", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 1,
    stem: "The brief disclosure document summarizing a firm's services, fees, and conflicts for retail customers is:",
    choices: ["Form CRS", "The official statement", "Form U4"],
    answerIndex: 0,
    explanation: "Form CRS (customer relationship summary) is the short Reg BI disclosure of services, fees, conflicts, and standards delivered to retail customers. The official statement (B) is a municipal disclosure document. Form U4 (C) registers individual representatives, not a customer disclosure.",
  },

  // Primary Market & Underwriting
  {
    id: "s7-uw-q1", examSlug: "series-7", topicId: "underwriting", topicName: "Primary Market & Underwriting", difficulty: 2,
    stem: "During the cooling-off period, an underwriter may:",
    choices: ["Accept orders and payment", "Distribute a preliminary prospectus and gather indications of interest", "Sell the security with a final prospectus"],
    answerIndex: 1,
    explanation: "In the cooling-off period the firm may circulate the preliminary prospectus (red herring) and collect non-binding indications of interest, but may not take orders or money. Accepting orders (A) and selling with a final prospectus (C) are only permitted once the registration is effective.",
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
    choices: ["Approved the security as a sound investment", "Confirmed that required disclosures appear adequate", "Guaranteed the offering price"],
    answerIndex: 1,
    explanation: "SEC effectiveness means the disclosure appears complete; the SEC never approves the merits of a security or guarantees price or value. Claiming SEC approval (A) or any guarantee (C) is a prohibited misrepresentation. The investor still bears all investment risk.",
  },
  {
    id: "s7-uw-q4", examSlug: "series-7", topicId: "underwriting", topicName: "Primary Market & Underwriting", difficulty: 2,
    stem: "The underwriting spread is best described as:",
    choices: ["The difference between the public offering price and the proceeds to the issuer", "The commission a customer pays", "The bid-ask spread in the secondary market"],
    answerIndex: 0,
    explanation: "The underwriting spread is the difference between the price the public pays and the amount the issuer receives — the underwriters' compensation, split into the manager's fee, underwriting fee, and selling concession. A customer commission (B) and a secondary-market bid-ask spread (C) are different concepts.",
  },
  {
    id: "s7-uw-q5", examSlug: "series-7", topicId: "underwriting", topicName: "Primary Market & Underwriting", difficulty: 2,
    stem: "An underwriter improperly withholding part of a hot new issue for its own benefit commits:",
    choices: ["Free-riding and withholding", "Backing away", "Front running"],
    answerIndex: 0,
    explanation: "Free-riding and withholding is the prohibited practice of an underwriter failing to make a bona fide public offering of a hot issue, retaining shares for itself or insiders. Backing away (B) is a market maker failing to honor a quote; front running (C) is trading ahead of a customer order. The withheld hot issue defines free-riding and withholding.",
  },

  // Economic Factors & Analysis
  {
    id: "s7-eco-q1", examSlug: "series-7", topicId: "economics", topicName: "Economic Factors & Analysis", difficulty: 2,
    stem: "To stimulate a slowing economy, the Federal Reserve would most likely:",
    choices: ["Sell Treasuries to raise rates", "Buy Treasuries to lower rates", "Increase the reserve requirement"],
    answerIndex: 1,
    explanation: "Buying Treasuries through open market operations injects money into the banking system and lowers interest rates, encouraging borrowing and spending — an easing move to stimulate. Selling Treasuries (A) and raising reserve requirements (C) are tightening actions that restrain the economy.",
  },
  {
    id: "s7-eco-q2", examSlug: "series-7", topicId: "economics", topicName: "Economic Factors & Analysis", difficulty: 1,
    stem: "Studying a company's earnings, P/E ratio, and financial statements to estimate value is:",
    choices: ["Technical analysis", "Fundamental analysis", "Dollar-cost averaging"],
    answerIndex: 1,
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
    choices: ["An imminent recession", "Strong economic expansion", "Rising inflation only"],
    answerIndex: 0,
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
