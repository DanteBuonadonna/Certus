// ============================================================
// Certus — SIE (Securities Industry Essentials) textbook-depth content
// Four deep, exam-focused readings + aligned questions for FINRA's
// entry-level exam. Wired into sieContent ahead of the lighter chapters.
// ============================================================

import { Chapter, Question } from "./types";

export const sieDeepChapters: Chapter[] = [
  {
    id: "sie-markets-deep",
    examSlug: "sie",
    topicId: "markets",
    topicName: "Capital Markets",
    title: "Capital Markets: Participants and Regulators",
    readingMinutes: 52,
    summary:
      "How the securities industry is organized — the primary versus secondary markets, the roles of issuers, broker-dealers, market makers, and investors, and the regulatory web of the SEC, FINRA, the MSRB, and SIPC.",
    intro:
      "The SIE begins with the structure of the capital markets: where securities are first issued, where they trade afterward, who the participants are, and who regulates them. This reading lays out the PRIMARY and SECONDARY markets, the key players from issuers to broker-dealers to market makers, and the regulatory hierarchy — the SEC at the top, self-regulatory organizations like FINRA and the MSRB, and SIPC's protection of customer accounts.",
    sections: [
      {
        heading: "1. Primary and secondary markets",
        blocks: [
          { kind: "p", text: "Securities markets have two layers. The PRIMARY market is where securities are FIRST issued and sold by the issuer to raise capital — an initial public offering (IPO) or a new bond issue, with proceeds going to the issuing company or government. The SECONDARY market is where those securities then TRADE among investors, with money changing hands between buyers and sellers (not the issuer). The secondary market is what provides LIQUIDITY — the ability to convert an investment to cash — and includes exchanges and the over-the-counter (OTC) market." },
        ],
      },
      {
        heading: "2. Market participants",
        blocks: [
          { kind: "p", text: "Several players make the markets work. ISSUERS (corporations, governments) raise capital by selling securities. BROKER-DEALERS act in two capacities: as a BROKER (agent), arranging trades for customers and charging a commission, or as a DEALER (principal), buying and selling from their own inventory and earning the markup/spread. MARKET MAKERS are dealers that stand ready to buy and sell a particular security, quoting a BID (price they'll pay) and an ASK/OFFER (price they'll sell at); the difference is the SPREAD. Other participants include INVESTORS (retail and institutional), TRANSFER AGENTS (recording ownership), and CUSTODIANS (holding assets)." },
          { kind: "callout", label: "Broker vs dealer", body: "A BROKER acts as AGENT for a customer and charges a COMMISSION. A DEALER acts as PRINCIPAL, trading from its own account and earning a MARKUP or spread. A single firm (a broker-dealer) can do both, but not on the same trade." },
        ],
      },
      {
        heading: "3. The regulatory hierarchy",
        blocks: [
          { kind: "p", text: "Regulation is layered. The SECURITIES AND EXCHANGE COMMISSION (SEC), created by the Securities Exchange Act of 1934, is the top federal regulator overseeing the securities industry. Below it are SELF-REGULATORY ORGANIZATIONS (SROs) that regulate their members under SEC oversight: FINRA (the Financial Industry Regulatory Authority) regulates broker-dealers and their registered representatives, administers the qualification exams, and enforces conduct rules; the MSRB (Municipal Securities Rulemaking Board) writes rules for municipal securities dealers (but does not enforce them — FINRA and the SEC do); and the exchanges set their own member rules. Registered persons must meet qualification and continuing-education requirements." },
        ],
      },
      {
        heading: "4. SIPC and investor protection",
        blocks: [
          { kind: "p", text: "The SECURITIES INVESTOR PROTECTION CORPORATION (SIPC) protects customers if a broker-dealer FAILS (becomes insolvent), covering up to $500,000 per customer (including a $250,000 limit for cash). SIPC protects against the broker-dealer's failure — NOT against market losses; it does not insure investors against a stock simply going down. The chapter's core: the primary market issues new securities (proceeds to the issuer) while the secondary market trades them among investors (providing liquidity); broker-dealers act as agent (broker, commission) or principal (dealer, markup), and market makers quote bid and ask; the SEC oversees SROs like FINRA and the MSRB; and SIPC protects customers against broker-dealer failure, not market losses. Over-learn the broker-vs-dealer distinction and the SEC/FINRA/MSRB roles." },
        ],
      },
    ],
    keyTerms: [
      { term: "Primary market", def: "Where securities are first issued; proceeds go to the issuer (e.g., an IPO)." },
      { term: "Secondary market", def: "Where issued securities trade among investors; provides liquidity." },
      { term: "Issuer", def: "A corporation or government that sells securities to raise capital." },
      { term: "Broker (agent)", def: "Arranges trades for customers and charges a commission." },
      { term: "Dealer (principal)", def: "Trades from its own inventory and earns a markup/spread." },
      { term: "Market maker", def: "A dealer that quotes a bid and ask in a security; the difference is the spread." },
      { term: "SEC", def: "Top federal securities regulator, created by the 1934 Act." },
      { term: "FINRA", def: "SRO regulating broker-dealers and registered reps; administers exams." },
      { term: "MSRB", def: "Writes rules for municipal securities dealers (enforced by FINRA/SEC)." },
      { term: "SIPC", def: "Protects customers if a broker-dealer fails: up to $500,000 ($250,000 cash); not market losses." },
    ],
    takeaways: [
      "The primary market issues new securities with proceeds to the issuer; the secondary market trades them among investors and provides liquidity.",
      "A broker acts as agent for a customer (commission); a dealer acts as principal from its own account (markup/spread).",
      "Market makers quote a bid (buy) and ask (sell) price; the spread is the difference.",
      "The SEC is the top federal regulator; FINRA and the MSRB are SROs operating under SEC oversight.",
      "FINRA regulates broker-dealers and registered reps; the MSRB writes municipal-dealer rules but does not enforce them.",
      "SIPC protects customers against broker-dealer failure (up to $500,000, including $250,000 cash) — not against market losses.",
    ],
  },

  {
    id: "sie-products-deep",
    examSlug: "sie",
    topicId: "products",
    topicName: "Products & Risks",
    title: "Securities Products: Equity, Debt, and Pooled Investments",
    readingMinutes: 56,
    summary:
      "The building blocks of the markets — common and preferred stock, the features and yields of bonds, money-market instruments, and pooled vehicles like mutual funds and ETFs, plus the main investment risks.",
    intro:
      "The SIE tests a broad survey of investment PRODUCTS and their RISKS. This reading covers the two great asset classes — EQUITY (stock) and DEBT (bonds) — at a fundamentals level, the short-term money market, the pooled vehicles most retail investors use, and the categories of risk every product carries. It's a wide-but-shallow tour designed to make you fluent in the vocabulary.",
    sections: [
      {
        heading: "1. Equity securities",
        blocks: [
          { kind: "p", text: "EQUITY securities represent ownership. COMMON STOCK carries voting rights and a residual claim on assets and earnings, with returns from dividends (discretionary) and capital appreciation, and limited liability. PREFERRED STOCK pays a fixed dividend and ranks ahead of common for dividends and in liquidation, but is generally nonvoting and doesn't share in growth — making it a hybrid with bond-like income. Investors may also gain equity exposure through rights, warrants, and American Depositary Receipts (ADRs) for foreign companies." },
        ],
      },
      {
        heading: "2. Debt securities",
        blocks: [
          { kind: "p", text: "DEBT securities (bonds) are loans: the investor lends to an issuer in exchange for periodic INTEREST and return of PRINCIPAL at maturity. Key issuers are corporations (corporate bonds), the U.S. Treasury (bills, notes, bonds — the safest), and state/local governments (municipal bonds, often tax-exempt). Bond prices move INVERSELY to interest rates. Yield measures include the nominal (coupon) yield, current yield (annual coupon ÷ price), and yield to maturity. Credit quality is graded by rating agencies, splitting bonds into INVESTMENT GRADE and lower-quality HIGH-YIELD ('junk')." },
          { kind: "formula", formula: { label: "Current yield", expr: "Current yield = Annual coupon ÷ Current market price", note: "Bond prices and yields move inversely: when rates rise, prices fall (a discount), and vice versa." } },
        ],
      },
      {
        heading: "3. Money market and pooled investments",
        blocks: [
          { kind: "p", text: "The MONEY MARKET holds short-term (one year or less), low-risk debt — Treasury bills, commercial paper, banker's acceptances, negotiable CDs, and repurchase agreements — used for cash management. POOLED investment vehicles let investors diversify in a single purchase. A MUTUAL FUND (open-end) continuously issues and redeems shares priced at net asset value (NAV). A CLOSED-END FUND has fixed shares trading on an exchange at a market price. An EXCHANGE-TRADED FUND (ETF) typically tracks an index and trades intraday like a stock. REITs pool real-estate investments and must distribute most of their income." },
        ],
      },
      {
        heading: "4. Investment risks",
        blocks: [
          { kind: "p", text: "Every product carries RISK, and the SIE expects fluency in the categories. MARKET (systematic) risk affects the whole market and can't be diversified away. BUSINESS/credit risk is specific to an issuer (and is diversifiable). INTEREST-RATE risk is the threat that rising rates lower bond prices. INFLATION (purchasing-power) risk erodes fixed returns. LIQUIDITY risk is difficulty selling without a price concession. Other types include reinvestment, call, currency, political, and legislative risk. Diversification reduces unsystematic (issuer-specific) risk but not systematic market risk. The chapter's core: equities (common = voting/growth, preferred = fixed-income priority) and debt (interest + principal, prices inverse to rates, graded by credit quality) are the core asset classes; the money market holds short-term safe debt; pooled vehicles (mutual funds at NAV, closed-end and ETFs on exchanges, REITs) provide diversification; and risks split into systematic (market, undiversifiable) and unsystematic (issuer-specific, diversifiable). Over-learn the common/preferred distinction and the systematic-vs-unsystematic risk split." },
        ],
      },
    ],
    keyTerms: [
      { term: "Common stock", def: "Voting ownership with a residual claim; dividends and appreciation; limited liability." },
      { term: "Preferred stock", def: "Fixed-dividend equity with priority over common; generally nonvoting." },
      { term: "Bond (debt security)", def: "A loan paying periodic interest and returning principal at maturity." },
      { term: "Price/yield inverse", def: "Bond prices fall when rates rise (discount) and rise when rates fall (premium)." },
      { term: "Investment grade vs high yield", def: "Higher-rated safer bonds vs lower-rated 'junk' with higher yield and risk." },
      { term: "Money market", def: "Short-term (≤1 year), low-risk debt for cash management." },
      { term: "Mutual fund (open-end)", def: "Continuously issued/redeemed shares priced at NAV." },
      { term: "Closed-end fund / ETF", def: "Exchange-traded pooled funds (ETFs typically track an index intraday)." },
      { term: "Systematic (market) risk", def: "Affects the whole market; cannot be diversified away." },
      { term: "Unsystematic risk", def: "Issuer- or industry-specific; reduced by diversification." },
      { term: "Interest-rate risk", def: "Rising rates lower bond prices." },
      { term: "Inflation (purchasing-power) risk", def: "Inflation erodes the real value of fixed returns." },
    ],
    takeaways: [
      "Common stock offers voting and growth with a residual claim; preferred stock offers a fixed dividend with priority but generally no vote or growth.",
      "Bonds pay interest and return principal; their prices move inversely to interest rates, and credit ratings split investment grade from high yield.",
      "Current yield = annual coupon ÷ price; the money market holds short-term, low-risk debt.",
      "Pooled vehicles include mutual funds (priced at NAV), closed-end funds and ETFs (exchange-traded), and REITs.",
      "Systematic (market) risk cannot be diversified away; unsystematic (issuer-specific) risk can.",
      "Other risks include interest-rate, inflation, liquidity, reinvestment, call, and currency risk.",
    ],
  },

  {
    id: "sie-regulation-deep",
    examSlug: "sie",
    topicId: "regulation",
    topicName: "Regulatory Framework",
    title: "The Regulatory Framework: The 1933 and 1934 Acts and Registration",
    readingMinutes: 54,
    summary:
      "The legal foundation of the securities industry — the Securities Act of 1933 governing new issues, the Securities Exchange Act of 1934 governing the secondary market and creating the SEC, the registration of securities and persons, and the major exemptions.",
    intro:
      "The SIE devotes a whole content area to the REGULATORY FRAMEWORK. Two landmark laws anchor it: the SECURITIES ACT OF 1933 (new issues) and the SECURITIES EXCHANGE ACT OF 1934 (the secondary market and the SEC). This reading covers both, the registration of securities and of industry persons, and the categories of securities and transactions that are EXEMPT from registration.",
    sections: [
      {
        heading: "1. The Securities Act of 1933",
        blocks: [
          { kind: "p", text: "The SECURITIES ACT OF 1933 regulates the PRIMARY market — the issuance of new securities — with the goal of full and fair DISCLOSURE. Issuers must file a REGISTRATION STATEMENT with the SEC and provide buyers a PROSPECTUS. A COOLING-OFF PERIOD (at least 20 days) follows filing, during which sales are prohibited but indications of interest can be collected using a preliminary prospectus (the 'red herring'). Crucially, SEC registration is NOT an endorsement or guarantee — it only certifies that required disclosures were made. The Act's antifraud rules prohibit misrepresentation in selling new securities." },
        ],
      },
      {
        heading: "2. The Securities Exchange Act of 1934",
        blocks: [
          { kind: "p", text: "The SECURITIES EXCHANGE ACT OF 1934 regulates the SECONDARY market and CREATED THE SEC as the industry's federal regulator. It governs the registration and conduct of EXCHANGES, BROKER-DEALERS, and associated persons; requires ongoing ISSUER REPORTING (10-K annual, 10-Q quarterly, 8-K current); prohibits INSIDER TRADING and market manipulation; and authorizes the regulation of credit (margin) and short sales. The 1933 Act gets securities issued with disclosure; the 1934 Act polices the markets and participants thereafter." },
          { kind: "table", table: { caption: "The two foundational acts", headers: ["Act", "Regulates", "Key feature"], rows: [["Securities Act of 1933", "Primary market (new issues)", "Registration & prospectus"], ["Securities Exchange Act of 1934", "Secondary market & participants", "Created the SEC; reporting; insider-trading rules"]] } },
        ],
      },
      {
        heading: "3. Registration of persons",
        blocks: [
          { kind: "p", text: "Industry PERSONS must be registered and qualified. The SIE exam is a co-requisite knowledge exam that, paired with a 'top-off' qualification exam (like the Series 7), licenses a representative. Associated persons register through FINRA (via Form U4), must pass the appropriate exams, satisfy CONTINUING EDUCATION, and disclose disciplinary and financial history; certain events can result in STATUTORY DISQUALIFICATION. Firms themselves register as broker-dealers. Investment advisers and their representatives register separately (state or SEC, depending on assets) under the advisory laws." },
        ],
      },
      {
        heading: "4. Exemptions and synthesis",
        blocks: [
          { kind: "p", text: "Not everything must be registered under the 1933 Act. EXEMPT SECURITIES include U.S. government and agency securities, municipal securities, and bank issues. EXEMPT TRANSACTIONS include private placements under REGULATION D (sold to ACCREDITED INVESTORS without a public offering), Regulation A (smaller offerings), and intrastate offerings; RULE 144 then limits the resale of restricted and control stock. The chapter's core: the 1933 Act regulates new issues (registration, prospectus, 20-day cooling-off, disclosure-not-endorsement); the 1934 Act created the SEC and regulates the secondary market, participants, reporting, and insider trading; industry persons register and qualify through FINRA; and exemptions cover government/municipal securities and private placements (Reg D to accredited investors). Over-learn the 1933-vs-1934 split and the registration-is-not-approval point." },
        ],
      },
    ],
    keyTerms: [
      { term: "Securities Act of 1933", def: "Regulates new issues (primary market): registration, prospectus, disclosure." },
      { term: "Cooling-off period", def: "At least 20 days after filing; no sales, but indications of interest allowed." },
      { term: "Red herring", def: "Preliminary prospectus used during the cooling-off period." },
      { term: "Registration ≠ approval", def: "SEC registration confirms disclosure, not endorsement or a guarantee." },
      { term: "Securities Exchange Act of 1934", def: "Regulates the secondary market; created the SEC; reporting and insider-trading rules." },
      { term: "Issuer reporting", def: "10-K (annual), 10-Q (quarterly), 8-K (current events)." },
      { term: "Form U4", def: "Registration form for associated persons through FINRA." },
      { term: "Statutory disqualification", def: "Events barring a person from association with a member firm." },
      { term: "Exempt securities", def: "Government, agency, municipal, and bank securities." },
      { term: "Regulation D", def: "Private placements to accredited investors without a public offering." },
      { term: "Rule 144", def: "Limits resale of restricted and control stock." },
    ],
    takeaways: [
      "The Securities Act of 1933 regulates new issues with registration, a prospectus, and a minimum 20-day cooling-off period.",
      "SEC registration confirms required disclosures were made — it is not approval, endorsement, or a guarantee.",
      "The Securities Exchange Act of 1934 created the SEC and regulates the secondary market, broker-dealers, issuer reporting, and insider trading.",
      "Industry persons register and qualify through FINRA (Form U4), pass exams, meet continuing education, and disclose history.",
      "Exempt securities include government, agency, and municipal issues; exempt transactions include Regulation D private placements to accredited investors.",
      "Rule 144 limits the resale of restricted and control stock.",
    ],
  },

  {
    id: "sie-accounts-deep",
    examSlug: "sie",
    topicId: "suitability",
    topicName: "Accounts & Prohibited Activities",
    title: "Customer Accounts, Suitability, and Prohibited Activities",
    readingMinutes: 52,
    summary:
      "The conduct rules that protect investors — account types and registration, the know-your-customer and Regulation Best Interest obligations, anti-money-laundering requirements, and the prohibited practices every registered person must avoid.",
    intro:
      "The SIE's conduct content covers how customer accounts are opened and serviced and the practices that are forbidden. This reading covers account REGISTRATIONS, the KNOW-YOUR-CUSTOMER and REGULATION BEST INTEREST standards, the ANTI-MONEY-LAUNDERING regime, and the PROHIBITED ACTIVITIES — insider trading, manipulation, churning, and the like — that lead to discipline.",
    sections: [
      {
        heading: "1. Opening and registering accounts",
        blocks: [
          { kind: "p", text: "Opening an account requires gathering customer information and verifying identity under the CUSTOMER IDENTIFICATION PROGRAM (CIP). The REGISTRATION determines ownership and control: INDIVIDUAL (one owner); JOINT accounts — joint tenants with right of survivorship (JTWROS), where a deceased owner's share passes to survivors, versus tenants in common (TIC), where it passes to the estate; CUSTODIAL (UGMA/UTMA) accounts an adult manages for a minor who owns the assets; and TRUST, CORPORATE, and PARTNERSHIP accounts requiring governing documents. Discretionary accounts (where the rep trades without per-trade approval) require prior WRITTEN authorization." },
        ],
      },
      {
        heading: "2. Know your customer and Regulation Best Interest",
        blocks: [
          { kind: "p", text: "Two linked duties govern recommendations. The KNOW-YOUR-CUSTOMER (KYC) rule requires reasonable diligence to learn the essential facts about each customer. REGULATION BEST INTEREST (Reg BI) requires a broker-dealer recommending securities to a RETAIL customer to act in the customer's BEST INTEREST, not placing the firm's interests first, through four obligations: DISCLOSURE (via Form CRS, the client relationship summary), CARE, CONFLICT OF INTEREST, and COMPLIANCE. Recommendations must fit the customer's profile — objectives, risk tolerance, time horizon, and financial situation." },
        ],
      },
      {
        heading: "3. Anti-money laundering",
        blocks: [
          { kind: "p", text: "Firms must guard against MONEY LAUNDERING — disguising illicit funds as legitimate, classically through placement, layering, and integration. The BANK SECRECY ACT and USA PATRIOT Act require a written AML program, a Customer Identification Program, and ongoing monitoring. Firms file a SUSPICIOUS ACTIVITY REPORT (SAR) for questionable transactions and a CURRENCY TRANSACTION REPORT (CTR) for cash transactions over $10,000. Registered persons must be alert to red flags such as structuring deposits to avoid the reporting threshold." },
          { kind: "callout", label: "AML report thresholds", body: "SAR: filed for suspicious activity regardless of dollar amount. CTR: filed for cash transactions over $10,000. 'Structuring' deposits just under $10,000 to avoid a CTR is itself a red flag and illegal." },
        ],
      },
      {
        heading: "4. Prohibited activities",
        blocks: [
          { kind: "p", text: "Many practices are forbidden. INSIDER TRADING — trading on, or tipping, material nonpublic information — is illegal and heavily penalized. MARKET MANIPULATION includes spreading false information, painting the tape, and matched orders. CHURNING is excessive trading to generate commissions. FRONT-RUNNING is trading ahead of a known large customer order. Other prohibitions include unauthorized trading, commingling customer funds with the firm's, selling away (private securities transactions without firm approval), guaranteeing against loss, and sharing in a customer account without authorization. The chapter's core: accounts are opened with verified identity (CIP) and the correct registration (JTWROS vs TIC, UGMA/UTMA, etc.); KYC and Reg BI require recommendations in the customer's best interest with disclosure via Form CRS; AML rules require SARs (any amount) and CTRs (cash over $10,000); and prohibited activities include insider trading, manipulation, churning, and front-running. Over-learn Reg BI's best-interest standard and the prohibited-practice list." },
        ],
      },
    ],
    keyTerms: [
      { term: "Customer Identification Program (CIP)", def: "Required identity verification when opening an account." },
      { term: "JTWROS vs TIC", def: "Survivorship (to survivors) vs estate (to the deceased's estate)." },
      { term: "UGMA/UTMA custodial account", def: "An adult manages assets owned by a minor." },
      { term: "Discretionary account", def: "Rep trades without per-trade approval; requires prior written authorization." },
      { term: "Know-your-customer (KYC)", def: "Duty to learn essential facts about each customer." },
      { term: "Regulation Best Interest", def: "Best-interest standard for retail recommendations; disclosure, care, conflict, compliance." },
      { term: "Form CRS", def: "Client relationship summary disclosing services, fees, and conflicts." },
      { term: "AML program", def: "Required anti-money-laundering policies, CIP, and monitoring (BSA/Patriot Act)." },
      { term: "SAR / CTR", def: "Suspicious Activity Report (any amount) / Currency Transaction Report (cash over $10,000)." },
      { term: "Insider trading", def: "Trading on or tipping material nonpublic information; illegal." },
      { term: "Churning", def: "Excessive trading to generate commissions." },
      { term: "Front-running", def: "Trading ahead of a known large customer order." },
    ],
    takeaways: [
      "Accounts are opened with verified identity (CIP) and the correct registration (individual, JTWROS vs TIC, UGMA/UTMA custodial, trust, corporate).",
      "Discretionary trading requires prior written authorization.",
      "KYC and Regulation Best Interest require recommendations in the retail customer's best interest, with disclosure via Form CRS (obligations: disclosure, care, conflict, compliance).",
      "Anti-money-laundering rules require an AML program, a CIP, a SAR for suspicious activity (any amount), and a CTR for cash over $10,000.",
      "'Structuring' deposits to avoid the $10,000 reporting threshold is itself a red flag and illegal.",
      "Prohibited activities include insider trading, market manipulation, churning, front-running, unauthorized trading, commingling, and selling away.",
    ],
  },
];

export const sieDeepQuestions: Question[] = [
  {
    id: "sie-mk-d1", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 1,
    stem: "In the PRIMARY market, the proceeds from a securities sale go to:",
    choices: ["Another investor", "The issuing company or government", "The stock exchange", "FINRA"],
    answerIndex: 1,
    explanation: "In the primary market, securities are sold by the issuer (e.g., in an IPO) and proceeds go to the issuer to raise capital. In the secondary market, money instead flows between investors.",
  },
  {
    id: "sie-mk-d2", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 2,
    stem: "A broker-dealer acting as AGENT for a customer and charging a commission is operating as a:",
    choices: ["Dealer (principal)", "Broker (agent)", "Market maker", "Transfer agent"],
    answerIndex: 1,
    explanation: "Acting as agent and charging a commission is the broker capacity. As a dealer (principal), the firm trades from its own inventory and earns a markup or spread.",
  },
  {
    id: "sie-mk-d3", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 2,
    stem: "SIPC protects customers against:",
    choices: ["Market losses on their investments", "The failure (insolvency) of their broker-dealer", "Issuer bankruptcy", "Inflation"],
    answerIndex: 1,
    explanation: "SIPC protects customers if their broker-dealer fails, up to $500,000 per customer (including $250,000 for cash). It does NOT protect against market losses — a stock simply declining is not covered.",
  },
  {
    id: "sie-mk-d4", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 2,
    stem: "Which self-regulatory organization writes rules for municipal securities dealers?",
    choices: ["FINRA", "The MSRB", "The SEC", "SIPC"],
    answerIndex: 1,
    explanation: "The MSRB writes rules for municipal securities dealers, though enforcement is carried out by FINRA and the SEC. FINRA regulates broker-dealers generally and administers the qualification exams.",
  },
  {
    id: "sie-mk-d5", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 1,
    stem: "A market maker's quoted 'bid' is the price at which it will:",
    choices: ["Sell the security", "Buy the security", "Lend the security", "Register the security"],
    answerIndex: 1,
    explanation: "The bid is the price a market maker will pay to BUY the security; the ask (offer) is the price it will sell at. The difference between them is the spread.",
  },
  {
    id: "sie-pr-d1", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 2,
    stem: "Which risk CANNOT be eliminated through diversification?",
    choices: ["Business (issuer-specific) risk", "Systematic (market) risk", "Industry risk", "Credit risk of one company"],
    answerIndex: 1,
    explanation: "Systematic (market) risk affects the entire market and cannot be diversified away. Unsystematic risks — business, industry, and single-issuer credit risk — can be reduced through diversification.",
  },
  {
    id: "sie-pr-d2", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 1,
    stem: "When market interest rates rise, the prices of existing bonds generally:",
    choices: ["Rise", "Fall", "Stay the same", "Become tax-free"],
    answerIndex: 1,
    explanation: "Bond prices move inversely to interest rates: when rates rise, existing lower-coupon bonds fall in price (trading at a discount). This is interest-rate risk.",
  },
  {
    id: "sie-pr-d3", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 2,
    stem: "An open-end mutual fund's shares are priced at:",
    choices: ["A market price set by supply and demand", "Net asset value (NAV)", "Par value", "The IPO price"],
    answerIndex: 1,
    explanation: "Open-end mutual fund shares are continuously issued and redeemed at net asset value (NAV). Closed-end funds and ETFs instead trade on exchanges at market prices.",
  },
  {
    id: "sie-pr-d4", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 1,
    stem: "Compared with common stock, preferred stock generally:",
    choices: ["Has greater voting rights", "Pays a fixed dividend with priority over common", "Shares more in company growth", "Is always convertible"],
    answerIndex: 1,
    explanation: "Preferred stock pays a fixed dividend and has priority over common for dividends and liquidation, but it is generally nonvoting and does not participate in growth.",
  },
  {
    id: "sie-pr-d5", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 2,
    stem: "Inflation (purchasing-power) risk is the danger that:",
    choices: ["The issuer defaults", "Rising prices erode the real value of fixed returns", "The market as a whole declines", "A bond is called early"],
    answerIndex: 1,
    explanation: "Inflation risk is that rising prices reduce the purchasing power of fixed future cash flows — a particular concern for fixed-income investments. It differs from default, market, and call risk.",
  },
  {
    id: "sie-rg-d1", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 1,
    stem: "The Securities Act of 1933 primarily regulates:",
    choices: ["The secondary trading market", "New securities issues (the primary market)", "Investment advisers", "Stock exchanges"],
    answerIndex: 1,
    explanation: "The Securities Act of 1933 regulates the issuance of new securities in the primary market through registration and disclosure. The 1934 Act regulates the secondary market.",
  },
  {
    id: "sie-rg-d2", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 2,
    stem: "SEC registration of a securities offering means that the SEC has:",
    choices: ["Approved and endorsed the security", "Guaranteed the investment's safety", "Confirmed required disclosures were made, without endorsing the security", "Set the price"],
    answerIndex: 2,
    explanation: "Registration only certifies that required disclosures were made; it is expressly not approval, endorsement, or a guarantee of the security's merit.",
  },
  {
    id: "sie-rg-d3", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 1,
    stem: "The Securities Exchange Act of 1934 created which regulator?",
    choices: ["FINRA", "The SEC", "The MSRB", "SIPC"],
    answerIndex: 1,
    explanation: "The Securities Exchange Act of 1934 created the Securities and Exchange Commission (SEC), the top federal regulator, and governs the secondary market, broker-dealers, reporting, and insider trading.",
  },
  {
    id: "sie-rg-d4", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 2,
    stem: "Which is an EXEMPT security under the Securities Act of 1933?",
    choices: ["A corporate IPO", "A U.S. government (Treasury) security", "A technology company's new shares", "A high-yield corporate bond"],
    answerIndex: 1,
    explanation: "U.S. government, agency, municipal, and bank securities are exempt securities. Corporate stock and bond offerings to the public generally must be registered.",
  },
  {
    id: "sie-ac-d1", examSlug: "sie", topicId: "suitability", topicName: "Accounts & Prohibited Activities", difficulty: 2,
    stem: "Regulation Best Interest requires a broker-dealer recommending securities to a retail customer to:",
    choices: ["Guarantee a profit", "Act in the customer's best interest, not placing the firm's interests first", "Recommend only proprietary products", "Avoid disclosing fees"],
    answerIndex: 1,
    explanation: "Reg BI requires recommendations to be in the retail customer's best interest, with disclosure (Form CRS), care, conflict-of-interest, and compliance obligations.",
  },
  {
    id: "sie-ac-d2", examSlug: "sie", topicId: "suitability", topicName: "Accounts & Prohibited Activities", difficulty: 2,
    stem: "A Currency Transaction Report (CTR) is filed for cash transactions exceeding:",
    choices: ["$3,000", "$5,000", "$10,000", "$25,000"],
    answerIndex: 2,
    explanation: "A CTR is required for cash transactions over $10,000. A Suspicious Activity Report (SAR) is filed for questionable activity regardless of amount; structuring to avoid the CTR threshold is illegal.",
  },
  {
    id: "sie-ac-d3", examSlug: "sie", topicId: "suitability", topicName: "Accounts & Prohibited Activities", difficulty: 2,
    stem: "Excessive trading in a customer's account primarily to generate commissions is:",
    choices: ["Front-running", "Churning", "Selling away", "Painting the tape"],
    answerIndex: 1,
    explanation: "Churning is excessive trading to generate commissions, a prohibited practice. Front-running is trading ahead of a known large order; selling away is unapproved private securities transactions; painting the tape is a form of manipulation.",
  },
  {
    id: "sie-ac-d4", examSlug: "sie", topicId: "suitability", topicName: "Accounts & Prohibited Activities", difficulty: 1,
    stem: "In a joint tenants with right of survivorship (JTWROS) account, a deceased owner's share passes to:",
    choices: ["The estate", "The surviving owner(s)", "The broker-dealer", "FINRA"],
    answerIndex: 1,
    explanation: "JTWROS passes a deceased owner's share to the surviving owner(s). Tenants in common (TIC) instead passes the share to the deceased owner's estate.",
  },
];
