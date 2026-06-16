// ============================================================
// Certus — SIE (Securities Industry Essentials) content
// FINRA's entry-level exam; prerequisite for the Series 7 and others.
// Four content areas: Capital Markets, Products & Risks, Trading/
// Accounts/Prohibited Activities, and the Regulatory Framework.
// ============================================================

import { Chapter, Question, ExamContent } from "./types";

const chapters: Chapter[] = [
  // 1. CAPITAL MARKETS
  {
    id: "sie-markets",
    examSlug: "sie",
    topicId: "markets",
    topicName: "Capital Markets & Regulators",
    title: "Knowledge of Capital Markets",
    readingMinutes: 17,
    summary: "Why markets exist, the primary vs secondary market, the players, and the regulatory hierarchy that governs them.",
    intro:
      "The SIE begins where the securities industry itself begins: with the markets that move capital from people who have it to enterprises that need it, and the web of regulators that keep those markets honest. This area is foundational — it gives you the vocabulary and the mental map for everything that follows. Master who issues securities, who trades them, and who watches over the whole system, and the rest of the exam has somewhere to attach.",
    sections: [
      {
        heading: "What markets do, and the two that matter",
        blocks: [
          { kind: "p", text: "A capital market exists to connect issuers — companies and governments that need money — with investors who have money to put to work. This connection happens in two distinct venues. In the primary market, a security is sold for the very first time, and the proceeds go to the issuer: an initial public offering (IPO) is the classic example, where a company raises fresh capital. In the secondary market, investors trade already-issued securities among themselves; the issuer receives nothing, but the liquidity and continuous pricing of the secondary market are exactly what make investors willing to buy in the primary market in the first place." },
          { kind: "p", text: "The people in these markets fill defined roles. Broker-dealers act as agents (brokers) matching buyers and sellers for a commission, or as dealers (principals) trading from their own inventory and earning the spread. Investment advisers manage money for a fee. Issuers raise capital; institutional and retail investors supply it; and a network of exchanges and trading systems provides the marketplace. The economy itself is the backdrop — interest rates, inflation, and the business cycle move every security's value, which is why the SIE expects you to connect, say, a rate cut to rising bond prices." },
        ],
      },
      {
        heading: "The regulatory hierarchy",
        blocks: [
          { kind: "p", text: "Investor confidence depends on regulation, and the structure is a clear chain of authority. At the top sits the Securities and Exchange Commission (SEC), the federal agency created by the Securities Exchange Act of 1934 with ultimate authority over the securities markets. Beneath the SEC are the self-regulatory organizations (SROs) — most importantly FINRA (the Financial Industry Regulatory Authority), which writes conduct rules for broker-dealers, licenses representatives (it administers this very exam), and enforces compliance. Firms and their registered people sit at the base, bound by both SEC law and SRO rules." },
          { kind: "figure", figure: { caption: "Figure 1 — The regulatory hierarchy. The SEC (federal) oversees the self-regulatory organizations like FINRA, which in turn write conduct rules for, and discipline, the broker-dealers and registered representatives at the base.", alt: "Pyramid diagram: SEC at top, FINRA and SROs in the middle, broker-dealers and representatives at the base", svg: `<svg viewBox="0 0 460 220" width="100%" style="max-width:460px"><g class="c-blue"><rect x="160" y="22" width="140" height="44" rx="8"/></g><text x="230" y="42" text-anchor="middle" font-size="12" font-weight="600" fill="#0C447C">SEC</text><text x="230" y="58" text-anchor="middle" font-size="9" fill="#185FA5">federal regulator</text><g class="c-teal"><rect x="110" y="92" width="240" height="44" rx="8"/></g><text x="230" y="112" text-anchor="middle" font-size="12" font-weight="600" fill="#085041">FINRA &amp; other SROs</text><text x="230" y="128" text-anchor="middle" font-size="9" fill="#0F6E56">conduct rules, licensing, enforcement</text><g class="c-gray"><rect x="60" y="162" width="340" height="44" rx="8"/></g><text x="230" y="182" text-anchor="middle" font-size="12" font-weight="600" fill="#2C2C2A">Broker-dealers &amp; representatives</text><text x="230" y="198" text-anchor="middle" font-size="9" fill="#5F5E5A">the firms and people who serve clients</text><line x1="230" y1="66" x2="230" y2="92" stroke="var(--border-strong)" stroke-width="1.5"/><line x1="230" y1="136" x2="230" y2="162" stroke="var(--border-strong)" stroke-width="1.5"/></svg>` } },
          { kind: "callout", label: "The two foundational acts", body: "The Securities Act of 1933 governs NEW issues — registration and prospectus delivery (the 'paper act'). The Securities Exchange Act of 1934 governs SECONDARY trading and created the SEC. Nearly every regulatory question traces back to one of these two." },
        ],
      },
    ],
    keyTerms: [
      { term: "Primary market", def: "Where a security is sold for the first time and proceeds go to the issuer (e.g., an IPO)." },
      { term: "Secondary market", def: "Where investors trade already-issued securities among themselves; provides liquidity and pricing." },
      { term: "SEC", def: "The federal agency with ultimate authority over the securities markets, created by the 1934 Act." },
      { term: "FINRA (an SRO)", def: "The self-regulatory organization that writes conduct rules, licenses representatives, and enforces compliance." },
      { term: "Broker vs dealer", def: "A broker acts as agent for a commission; a dealer trades as principal from inventory for the spread." },
    ],
    takeaways: [
      "Primary market = first sale, proceeds to issuer; secondary market = investor-to-investor trading.",
      "Regulatory chain: SEC (federal) → SROs like FINRA → broker-dealers and representatives.",
      "1933 Act governs new issues; 1934 Act governs trading and created the SEC.",
      "Brokers act as agents (commission); dealers act as principals (spread).",
    ],
  },

  // 2. PRODUCTS & RISKS
  {
    id: "sie-products",
    examSlug: "sie",
    topicId: "products",
    topicName: "Products & Their Risks",
    title: "Understanding Products and Their Risks",
    readingMinutes: 20,
    summary: "The major product types from stocks to options, and the distinct kinds of risk every investor faces.",
    intro:
      "This is the largest content area on the SIE, and for good reason: a representative must understand what they're selling. The exam surveys the full product shelf — equity, debt, pooled vehicles, options, and more — and pairs it with a clear taxonomy of risk. The organizing idea is the trade-off between risk and return: products line up along a spectrum, and the job is to match a product's risk profile to an investor's needs.",
    sections: [
      {
        heading: "The product shelf, from safest to riskiest",
        blocks: [
          { kind: "p", text: "Equity securities (common and preferred stock) represent ownership; common stock offers voting rights and unlimited upside but sits last in line at liquidation, while preferred stock pays a fixed dividend and ranks ahead of common. Debt securities are loans to an issuer — Treasuries (backed by the U.S. government, the safest), municipal bonds (often tax-advantaged), and corporate bonds (higher yield for higher credit risk). Pooled (packaged) products — mutual funds, ETFs, and similar — bundle many securities into one diversified holding. Options are contracts whose value derives from an underlying security, used to hedge or speculate with leverage. Direct participation programs and other alternatives round out the riskier end." },
          { kind: "figure", figure: { caption: "Figure 1 — The risk-return spectrum. Products line up from low-risk, low-return cash and Treasuries to high-risk, high-return options and speculative alternatives. Matching a product's place on this line to the investor's objectives is the core suitability task.", alt: "A spectrum line from low-risk Treasuries and cash up to high-risk options and alternatives", svg: `<svg viewBox="0 0 460 170" width="100%" style="max-width:460px"><defs><linearGradient id="rr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1D9E75"/><stop offset="0.5" stop-color="#BA7517"/><stop offset="1" stop-color="#E24B4A"/></linearGradient></defs><line x1="40" y1="110" x2="420" y2="40" stroke="url(#rr)" stroke-width="3"/><circle cx="40" cy="110" r="4" fill="#1D9E75"/><circle cx="150" cy="90" r="4" fill="#1D9E75"/><circle cx="240" cy="73" r="4" fill="#BA7517"/><circle cx="330" cy="56" r="4" fill="#BA7517"/><circle cx="420" cy="40" r="4" fill="#E24B4A"/><text x="40" y="128" font-size="9" fill="var(--text-secondary)">Cash, T-bills</text><text x="150" y="108" text-anchor="middle" font-size="9" fill="var(--text-secondary)">Bonds</text><text x="240" y="65" text-anchor="middle" font-size="9" fill="var(--text-secondary)">Funds</text><text x="330" y="48" text-anchor="middle" font-size="9" fill="var(--text-secondary)">Stocks</text><text x="420" y="32" text-anchor="end" font-size="9" fill="var(--text-secondary)">Options, alts</text><text x="235" y="158" text-anchor="middle" font-size="10" fill="var(--text-muted)">risk →   (return →)</text></svg>` } },
        ],
      },
      {
        heading: "The taxonomy of risk",
        blocks: [
          { kind: "p", text: "The SIE expects you to name and distinguish the kinds of risk. Systematic (market) risk affects all securities and can't be diversified away — recessions, rate shocks. Unsystematic risk is specific to one company or industry and can be diversified away. Within those, several named risks recur: interest-rate risk (bond prices fall when rates rise), credit (default) risk (the issuer fails to pay), inflation (purchasing-power) risk (returns fail to outpace rising prices — the special enemy of fixed-rate bonds), liquidity risk (you can't sell quickly at a fair price), and reinvestment risk (coupons must be reinvested at lower rates)." },
          { kind: "table", table: { caption: "Table 1 — The named risks the SIE tests, and what each one threatens.", headers: ["Risk", "What it is", "Hits hardest"], rows: [["Interest-rate", "Bond prices fall as rates rise", "Long-term bonds"], ["Credit / default", "Issuer fails to pay", "Lower-rated corporate/muni debt"], ["Inflation (purchasing power)", "Returns trail rising prices", "Fixed-rate bonds, cash"], ["Liquidity", "Can't sell quickly at fair value", "Thinly traded / alternative assets"], ["Reinvestment", "Coupons reinvested at lower rates", "Bonds when rates fall"]] } },
          { kind: "callout", label: "The bond-investor's dilemma", body: "Bonds trade interest-rate, credit, and reinvestment risk against inflation risk. A 'safe' long-term bond still loses real value if inflation outpaces its fixed coupon — safety from default is not safety from inflation." },
        ],
      },
    ],
    keyTerms: [
      { term: "Common vs preferred stock", def: "Common = voting + unlimited upside, last in liquidation; preferred = fixed dividend, priority over common, usually non-voting." },
      { term: "Packaged product", def: "A pooled vehicle (mutual fund, ETF) bundling many securities into one diversified holding." },
      { term: "Systematic vs unsystematic risk", def: "Market-wide, undiversifiable risk versus firm-specific, diversifiable risk." },
      { term: "Interest-rate risk", def: "The risk that rising rates push bond prices down; greatest for long-maturity, low-coupon bonds." },
      { term: "Inflation (purchasing-power) risk", def: "The risk that returns fail to outpace inflation; the special danger of fixed-rate bonds and cash." },
    ],
    takeaways: [
      "Products line up on a risk-return spectrum from cash/Treasuries to options/alternatives — match it to the investor.",
      "Common stock is last in liquidation with unlimited upside; preferred pays a fixed dividend and ranks ahead.",
      "Systematic risk is undiversifiable; unsystematic risk diversifies away.",
      "Know the named risks: interest-rate, credit, inflation, liquidity, reinvestment — and which products each threatens.",
    ],
  },

  // 3. TRADING, ACCOUNTS & PROHIBITED ACTIVITIES
  {
    id: "sie-trading",
    examSlug: "sie",
    topicId: "trading",
    topicName: "Trading, Accounts & Prohibited Activities",
    title: "Trading, Customer Accounts & Prohibited Activities",
    readingMinutes: 18,
    summary: "How orders work, when trades settle, the main account types, and the conduct that gets people barred.",
    intro:
      "This area moves from the abstract market to the concrete mechanics a representative handles daily: placing orders, opening accounts, and — crucially — knowing the bright lines you must never cross. It is heavily tested because it is where investor harm actually happens, so the exam cares as much about what you may not do as what you may.",
    sections: [
      {
        heading: "Orders and settlement",
        blocks: [
          { kind: "p", text: "Customers buy and sell using different order types, and the distinctions matter. A market order executes immediately at the best available price — fast, but the price isn't guaranteed. A limit order sets the worst acceptable price (buy at or below, sell at or above) — price is controlled, but execution isn't guaranteed. A stop order is dormant until the stock hits a trigger price, at which point it becomes a market order — used to limit losses or protect gains. Once a trade executes, it settles on a 'T+1' basis: ownership and payment are exchanged one business day after the trade date." },
          { kind: "figure", figure: { caption: "Figure 1 — The two core order types. A market order trades now at whatever the price is; a limit order trades only at the customer's price or better, accepting that it may not fill at all. The trade-off is speed versus price control.", alt: "Comparison of a market order executing immediately versus a limit order waiting for a target price", svg: `<svg viewBox="0 0 460 170" width="100%" style="max-width:460px"><g class="c-blue"><rect x="30" y="30" width="190" height="110" rx="10"/></g><text x="125" y="56" text-anchor="middle" font-size="12" font-weight="600" fill="#0C447C">Market order</text><text x="125" y="80" text-anchor="middle" font-size="10" fill="#185FA5">executes immediately</text><text x="125" y="98" text-anchor="middle" font-size="10" fill="#185FA5">at best available price</text><text x="125" y="120" text-anchor="middle" font-size="9" fill="#185FA5">speed, not price control</text><g class="c-teal"><rect x="240" y="30" width="190" height="110" rx="10"/></g><text x="335" y="56" text-anchor="middle" font-size="12" font-weight="600" fill="#085041">Limit order</text><text x="335" y="80" text-anchor="middle" font-size="10" fill="#0F6E56">fills only at your price</text><text x="335" y="98" text-anchor="middle" font-size="10" fill="#0F6E56">or better — or not at all</text><text x="335" y="120" text-anchor="middle" font-size="9" fill="#0F6E56">price control, not speed</text></svg>` } },
        ],
      },
      {
        heading: "Account types and opening rules",
        blocks: [
          { kind: "p", text: "A cash account requires the customer to pay in full; a margin account lets them borrow part of the purchase from the broker-dealer, amplifying gains and losses and requiring a signed margin agreement. Accounts also differ by ownership — individual, joint (tenants in common vs joint tenants with right of survivorship), and various entity or fiduciary accounts. A discretionary account, where the representative may trade without approval for each transaction, requires prior written authorization. Opening any account requires verifying the customer's identity under anti-money-laundering (AML) rules and gathering the information needed to judge suitability." },
          { kind: "callout", label: "AML and the SAR", body: "Under the Bank Secrecy Act and the USA PATRIOT Act, firms must verify customer identity (the Customer Identification Program) and file a Suspicious Activity Report (SAR) when they detect potential money laundering — without tipping off the customer." },
        ],
      },
      {
        heading: "The bright lines: prohibited activities",
        blocks: [
          { kind: "p", text: "The exam devotes real weight to conduct that is strictly forbidden, because this is where representatives get barred. Insider trading — trading on material nonpublic information — is illegal under the 1934 Act. Market manipulation includes practices like painting the tape (creating fake activity) and front-running (trading ahead of a known large customer order). Churning is excessive trading to generate commissions rather than to benefit the customer. Making unsuitable recommendations, exercising discretion without written authority, guaranteeing customers against loss, and commingling customer funds with the firm's are all prohibited. The common thread is that each puts the representative's interest, or a distortion of the market, ahead of the customer." },
        ],
      },
    ],
    keyTerms: [
      { term: "Market vs limit order", def: "Market = immediate execution at the best price; limit = fills only at the customer's price or better, no guarantee it fills." },
      { term: "Stop order", def: "A dormant order that becomes a market order once a trigger price is reached; used to limit losses or protect gains." },
      { term: "Cash vs margin account", def: "Cash requires full payment; margin allows borrowing from the broker-dealer, amplifying risk." },
      { term: "Discretionary account", def: "One where the rep may trade without per-trade approval; requires prior written authorization." },
      { term: "Churning", def: "Excessive trading to generate commissions rather than benefit the customer; prohibited." },
    ],
    takeaways: [
      "Market orders give speed; limit orders give price control. Most trades settle T+1.",
      "Cash accounts require full payment; margin accounts borrow and amplify risk; discretion needs written authority.",
      "AML rules require identity verification (CIP) and filing a SAR on suspicious activity without tipping off the customer.",
      "Insider trading, market manipulation, front-running, churning, and commingling are all prohibited.",
    ],
  },

  // 4. REGULATORY FRAMEWORK
  {
    id: "sie-regulation",
    examSlug: "sie",
    topicId: "regulation",
    topicName: "The Regulatory Framework",
    title: "Overview of the Regulatory Framework",
    readingMinutes: 15,
    summary: "How people and firms get registered, the conduct rules that bind them, and how communications are governed.",
    intro:
      "The final SIE area ties the system together: who must register, what standards bind them once they do, and how the industry polices communications with the public. It is the smallest area by weight but the connective tissue of the whole exam — the rules that turn the markets and products of the earlier sections into a regulated profession.",
    sections: [
      {
        heading: "Registration and the SIE's place",
        blocks: [
          { kind: "p", text: "To work in the securities industry, individuals must register, and registration now has two parts. The SIE — this exam — is the corequisite that anyone can take to demonstrate basic industry knowledge; it does not by itself qualify you to do anything. Pairing the SIE with a 'top-off' qualification exam (such as the Series 7) is what licenses a person for a specific role. Registered representatives are associated with a member firm and supervised by registered principals. Firms themselves must be FINRA members, and both firms and individuals are subject to background checks, disclosure of disciplinary history, and continuing education." },
          { kind: "callout", label: "SIE + top-off", body: "The SIE proves general knowledge and is open to anyone. A top-off exam (e.g., Series 7) added on top is what actually licenses you for a job function. The SIE alone licenses nothing." },
        ],
      },
      {
        heading: "Conduct standards and communications",
        blocks: [
          { kind: "p", text: "Once registered, a person is bound by FINRA's conduct rules, anchored by the duty to observe high standards of commercial honor and just and equitable principles of trade. Recommendations must be suitable for the customer; misrepresentations are prohibited; and conflicts of interest must be handled properly. Communications with the public are categorized and supervised: retail communications (distributed to more than 25 retail investors in 30 days) generally require principal approval and may need filing with FINRA, while correspondence (25 or fewer retail investors) is subject to lighter review. Across all categories, communications must be fair and balanced, must not be misleading, and may not promise specific results or omit material facts." },
          { kind: "p", text: "Violations carry real consequences — fines, suspension, or a bar from the industry — and FINRA's enforcement process, including arbitration for customer disputes, is part of the framework. The throughline of the entire SIE is that the privilege of handling other people's money comes with a binding duty of honesty and care, enforced by a clear chain of regulators. Keep that principle in mind and the individual rules become easier to remember, because they are all expressions of it." },
        ],
      },
    ],
    keyTerms: [
      { term: "SIE exam", def: "The corequisite proving basic industry knowledge; open to anyone, but licenses nothing on its own." },
      { term: "Top-off exam", def: "A role-specific qualification (e.g., Series 7) added to the SIE to actually license a representative." },
      { term: "Registered principal", def: "A qualified supervisor who approves accounts, communications, and oversees representatives." },
      { term: "Retail communication", def: "A communication to >25 retail investors in 30 days; generally needs principal approval and possibly filing." },
      { term: "Just and equitable principles of trade", def: "FINRA's overarching conduct standard requiring high commercial honor in all dealings." },
    ],
    takeaways: [
      "The SIE proves general knowledge but licenses nothing; a top-off exam (e.g., Series 7) licenses a role.",
      "Registered reps are supervised by principals; firms must be FINRA members with background and disclosure checks.",
      "Recommendations must be suitable; misrepresentation is prohibited; conflicts must be handled properly.",
      "Retail communications (>25 retail investors) need principal approval; all communications must be fair and not misleading.",
    ],
  },
];

const questions: Question[] = [
  // Markets
  {
    id: "sie-mkt-q1", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 1,
    stem: "A company raises new capital by selling shares to the public for the first time. This transaction occurs in the:",
    choices: ["Secondary market", "Primary market", "Third market"],
    answerIndex: 1,
    explanation: "A first-time sale of securities, with proceeds going to the issuer, takes place in the primary market — an IPO is the classic example. Choice A (secondary market) is where investors later trade those shares among themselves, with the issuer receiving nothing. Choice C (third market) refers to exchange-listed securities trading over the counter, not new issuance.",
  },
  {
    id: "sie-mkt-q2", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 2,
    stem: "Which organization is a self-regulatory organization (SRO) that licenses representatives and writes conduct rules, while operating UNDER the SEC's authority?",
    choices: ["The Federal Reserve", "FINRA", "The U.S. Treasury"],
    answerIndex: 1,
    explanation: "FINRA is the SRO that writes broker-dealer conduct rules, licenses representatives (including via the SIE), and enforces compliance — all under the SEC's federal authority. Choice A (the Fed) conducts monetary policy, not securities self-regulation. Choice C (the Treasury) manages government finances and issues Treasury securities; it isn't an SRO.",
  },
  // Products
  {
    id: "sie-prod-q1", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 2,
    stem: "An investor holds long-term fixed-rate bonds. Which risk most directly threatens the purchasing power of their interest payments?",
    choices: ["Liquidity risk", "Inflation (purchasing-power) risk", "Reinvestment risk"],
    answerIndex: 1,
    explanation: "Inflation risk is the danger that a fixed return fails to keep pace with rising prices, eroding the real value of the bond's fixed coupons — the special enemy of long-term fixed-rate debt. Choice A (liquidity) concerns being able to sell quickly, not purchasing power. Choice C (reinvestment) concerns reinvesting coupons at lower rates, a related but distinct danger that bites when rates FALL.",
  },
  {
    id: "sie-prod-q2", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 2,
    stem: "Diversifying a portfolio across many unrelated companies can substantially reduce which type of risk?",
    choices: ["Systematic (market) risk", "Unsystematic (specific) risk", "Interest-rate risk"],
    answerIndex: 1,
    explanation: "Unsystematic risk is specific to individual companies or industries and can be diversified away by holding many unrelated securities. Choice A (systematic/market risk) affects all securities and cannot be diversified away. Choice C (interest-rate risk) is a market-wide, largely systematic force on bond prices that diversification across stocks doesn't remove.",
  },
  // Trading
  {
    id: "sie-trd-q1", examSlug: "sie", topicId: "trading", topicName: "Trading & Accounts", difficulty: 2,
    stem: "A customer wants to buy a stock but will pay no more than $50 per share. The appropriate order is a:",
    choices: ["Market order", "Buy limit order at $50", "Sell stop order at $50"],
    answerIndex: 1,
    explanation: "A buy limit order sets the maximum price the customer will pay — here $50 — and fills only at $50 or below, giving price control at the cost of possibly not executing. Choice A (market order) would execute immediately at whatever the price is, with no price protection. Choice C (sell stop) is the wrong direction and order type entirely — it's a protective sell trigger, not a price-capped buy.",
  },
  {
    id: "sie-trd-q2", examSlug: "sie", topicId: "trading", topicName: "Prohibited Activities", difficulty: 2,
    stem: "A representative places trades in a customer's account far more frequently than the customer's objectives warrant, primarily to generate commissions. This is:",
    choices: ["Churning, a prohibited practice", "Acceptable active management", "Required diversification"],
    answerIndex: 0,
    explanation: "Excessive trading driven by commission generation rather than the customer's interest is churning — a prohibited practice that violates the duty to deal fairly. Choice B mislabels abuse as legitimate management; the test is whether the activity serves the customer. Choice C is unrelated — diversification is a portfolio principle, not a justification for over-trading.",
  },
  // Regulation
  {
    id: "sie-reg-q1", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 2,
    stem: "Passing the SIE exam by itself qualifies a person to:",
    choices: ["Sell securities to the public immediately", "Demonstrate basic industry knowledge, but it licenses nothing on its own", "Supervise a branch office"],
    answerIndex: 1,
    explanation: "The SIE proves general securities-industry knowledge and is open to anyone, but it does not by itself license any activity — a top-off exam such as the Series 7 must be added to license a specific role. Choice A overstates the SIE; selling securities requires the top-off. Choice C describes a principal role, which requires its own separate qualification (e.g., Series 24).",
  },
  {
    id: "sie-reg-q2", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 1,
    stem: "A piece of sales literature is sent to 200 retail investors within 30 days. Under FINRA rules this is a:",
    choices: ["Correspondence", "Retail communication", "Private placement"],
    answerIndex: 1,
    explanation: "A communication distributed to more than 25 retail investors within 30 days is a retail communication, which generally requires principal approval and may need to be filed with FINRA. Choice A (correspondence) applies to 25 or fewer retail investors and gets lighter review. Choice C (private placement) is an unrelated term for a securities offering exempt from full registration.",
  },

  // ---- Capital Markets ----
  {
    id: "sie-mkt-q3", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 1,
    stem: "The Securities Act of 1933 is primarily concerned with:",
    choices: ["The secondary trading of outstanding securities", "New issues — full disclosure when securities are first sold to the public", "Regulating investment advisers"],
    answerIndex: 1,
    explanation: "The Securities Act of 1933 is the 'paper act' governing the PRIMARY market — it requires registration and a prospectus so investors get full disclosure on new issues. Choice A describes the Securities Exchange Act of 1934, which governs secondary trading and created the SEC. Choice C is the Investment Advisers Act of 1940. A reliable memory hook: '33 = new issues, '34 = trading + the SEC.",
  },
  {
    id: "sie-mkt-q4", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 2,
    stem: "SIPC protects a customer of a failed broker-dealer up to:",
    choices: ["$250,000 total, all cash", "$500,000 total, of which up to $250,000 may be cash", "An unlimited amount, including market losses"],
    answerIndex: 1,
    explanation: "SIPC covers up to $500,000 per customer if a brokerage firm fails, including a sub-limit of $250,000 for cash. Crucially, SIPC protects against the firm's failure or missing assets — NOT against investment losses from the market. Choice A understates the limit; choice C is wrong because SIPC never covers market losses and is capped.",
  },
  {
    id: "sie-mkt-q5", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 1,
    stem: "An investor buys 100 shares of an already-public company from another investor on the NYSE. This transaction occurs in the:",
    choices: ["Primary market", "Secondary market", "Private placement market"],
    answerIndex: 1,
    explanation: "Trading of already-issued securities between investors happens in the secondary market; the issuing company receives none of the proceeds. Choice A (primary market) is where the issuer sells new securities and raises capital, such as an IPO. Choice C is an exempt private offering, not an exchange trade.",
  },
  {
    id: "sie-mkt-q6", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 1,
    stem: "The self-regulatory organization (SRO) that registers representatives and writes conduct rules for broker-dealers is:",
    choices: ["The Federal Reserve", "FINRA", "The FDIC"],
    answerIndex: 1,
    explanation: "FINRA is the SRO that licenses representatives, writes conduct rules, and disciplines broker-dealers, all under SEC oversight. Choice A (the Fed) conducts monetary policy and bank regulation, not securities-rep registration. Choice C (FDIC) insures bank deposits — unrelated to brokerage regulation.",
  },

  // ---- Products & Risks ----
  {
    id: "sie-prod-q3", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 2,
    stem: "Compared with common stock, preferred stock generally:",
    choices: ["Has voting rights and more upside", "Has priority for dividends and in liquidation, with a fixed dividend", "Is riskier and ranks last in liquidation"],
    answerIndex: 1,
    explanation: "Preferred stock pays a fixed dividend and ranks ahead of common stock for both dividends and in a liquidation, behaving much like a fixed-income hybrid. Choice A describes common stock, which carries voting rights and the greater growth potential. Choice C is backwards — common, not preferred, sits last in liquidation priority among equity holders.",
  },
  {
    id: "sie-prod-q4", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 1,
    stem: "When market interest rates rise, the price of an existing fixed-rate bond will generally:",
    choices: ["Rise", "Fall", "Stay the same"],
    answerIndex: 1,
    explanation: "Bond prices and interest rates move inversely: when new bonds offer higher coupons, an existing lower-coupon bond must fall in price for its yield to stay competitive. Choice A reverses the relationship. Choice C ignores that a fixed coupon becomes less attractive as rates rise, so the price must adjust downward.",
  },
  {
    id: "sie-prod-q5", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 2,
    stem: "A key difference between an open-end mutual fund and an ETF is that mutual fund shares:",
    choices: ["Trade intraday on an exchange at fluctuating prices", "Are bought and redeemed at the next-computed NAV (forward pricing)", "Can be sold short and bought on margin like stocks"],
    answerIndex: 1,
    explanation: "Open-end mutual fund shares are purchased and redeemed directly with the fund at the next-calculated net asset value (forward pricing), typically once per day. Choices A and C describe ETFs, which trade throughout the day on an exchange at market prices and can be shorted or margined like stocks.",
  },
  {
    id: "sie-prod-q6", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 2,
    stem: "The risk that affects the entire market and cannot be eliminated through diversification is:",
    choices: ["Unsystematic (business-specific) risk", "Systematic (market) risk", "Default risk"],
    answerIndex: 1,
    explanation: "Systematic risk — driven by broad factors like recessions, interest rates, or geopolitics — moves the whole market and cannot be diversified away. Choice A (unsystematic risk) is company- or industry-specific and CAN be reduced by holding a diversified portfolio. Choice C (default risk) is the issuer-specific risk a bond won't pay, a form of unsystematic risk.",
  },

  // ---- Trading & Accounts ----
  {
    id: "sie-trd-q3", examSlug: "sie", topicId: "trading", topicName: "Trading & Accounts", difficulty: 2,
    stem: "Regular-way settlement for a stock trade currently occurs on:",
    choices: ["The same day (T+0)", "One business day after the trade (T+1)", "Three business days after the trade (T+3)"],
    answerIndex: 1,
    explanation: "U.S. regular-way settlement for stocks is T+1 — one business day after the trade date — following the move from T+2 in May 2024. Choice A (T+0) is same-day settlement, not the standard. Choice C (T+3) is the outdated standard from before 2017 and is no longer correct.",
  },
  {
    id: "sie-trd-q4", examSlug: "sie", topicId: "trading", topicName: "Trading & Accounts", difficulty: 1,
    stem: "An investor wants to buy a stock immediately at whatever the current best price is. They should enter a:",
    choices: ["Market order", "Limit order", "Stop order"],
    answerIndex: 0,
    explanation: "A market order executes immediately at the best available price, prioritizing speed of execution over price. Choice B (limit order) sets a maximum buy or minimum sell price and may not fill if the market doesn't reach it. Choice C (stop order) stays dormant until a trigger price is hit, then becomes a market order — not an immediate execution.",
  },
  {
    id: "sie-trd-q5", examSlug: "sie", topicId: "trading", topicName: "Prohibited Activities", difficulty: 2,
    stem: "A registered representative trades a client's account excessively, mainly to generate commissions. This prohibited practice is called:",
    choices: ["Churning", "Front-running", "Backing away"],
    answerIndex: 0,
    explanation: "Churning is excessive trading in a customer's account designed to produce commissions for the rep rather than to serve the client — a violation of suitability and the duty of fair dealing. Choice B (front-running) is trading ahead of a known customer order. Choice C (backing away) is a market maker failing to honor its quoted price. All are prohibited, but commission-driven over-trading is churning.",
  },
  {
    id: "sie-trd-q6", examSlug: "sie", topicId: "trading", topicName: "Prohibited Activities", difficulty: 2,
    stem: "Trading a security based on material, non-public information in breach of a duty is:",
    choices: ["Permitted if you didn't obtain it yourself", "Insider trading — prohibited", "Allowed once the trade is reported"],
    answerIndex: 1,
    explanation: "Trading on material non-public information in breach of a duty is illegal insider trading, exposing the person to civil and criminal penalties. Choice A is wrong — liability can extend to 'tippees' who trade on tips they receive. Choice C is wrong; reporting a trade does not cure the illegality of trading on inside information.",
  },

  // ---- Regulatory Framework ----
  {
    id: "sie-reg-q3", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 2,
    stem: "Under the Bank Secrecy Act / AML rules, a firm must file a Currency Transaction Report (CTR) when a customer's cash transactions exceed:",
    choices: ["$3,000 in a day", "$10,000 in a day", "$50,000 in a day"],
    answerIndex: 1,
    explanation: "A CTR is required for cash transactions totaling more than $10,000 in a single business day. Choice A ($3,000) is the threshold tied to recordkeeping for certain monetary instruments, not the CTR. Separately, a Suspicious Activity Report (SAR) is filed for suspicious conduct regardless of dollar amount — a distinct AML obligation.",
  },
  {
    id: "sie-reg-q4", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 2,
    stem: "A private placement sold only to accredited investors is typically exempt from full SEC registration under:",
    choices: ["Regulation D", "The Securities Act registration requirement for IPOs", "Regulation T"],
    answerIndex: 0,
    explanation: "Regulation D provides exemptions that let issuers raise capital through private placements, primarily to accredited investors, without full registration. Choice B is the opposite — full registration is what a public IPO requires. Choice C (Regulation T) is the Federal Reserve's margin rule governing credit in brokerage accounts, unrelated to offering exemptions.",
  },
  {
    id: "sie-reg-q5", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 1,
    stem: "Before a person can transact securities business with the public as a representative, they must:",
    choices: ["Simply be hired by a broker-dealer", "Pass the required qualification exam(s) and be registered with FINRA", "Only register with the SEC directly"],
    answerIndex: 1,
    explanation: "A representative must pass the required qualification exams (such as the SIE plus a specialized 'top-off' like the Series 7) and be registered through a FINRA-member firm before doing securities business with the public. Choice A skips the licensing and registration requirements. Choice C is wrong because individual reps register through FINRA, not directly with the SEC.",
  },
  {
    id: "sie-reg-q6", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 2,
    stem: "FINRA's continuing education requirement consists of:",
    choices: ["Only a one-time ethics class", "A Regulatory Element and a Firm Element", "Nothing once you pass your exams"],
    answerIndex: 1,
    explanation: "FINRA continuing education has two parts: the Regulatory Element (periodic training on rules and compliance) and the Firm Element (ongoing training the firm designs for its covered registered persons). Choice A understates it, and choice C is false — registration carries an ongoing CE obligation, not a one-and-done exam.",
  },
];

export const sieContent: ExamContent = {
  examSlug: "sie",
  chapters,
  questions,
};
