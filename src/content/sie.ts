// ============================================================
// Certus — SIE (Securities Industry Essentials) content
// FINRA's entry-level exam; prerequisite for the Series 7 and others.
// Four content areas: Capital Markets, Products & Risks, Trading/
// Accounts/Prohibited Activities, and the Regulatory Framework.
// ============================================================

import { Chapter, Question, ExamContent } from "./types";
import { sieDeepChapters, sieDeepQuestions } from "./sie-deep";

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

  {
    id: "sie-equity",
    examSlug: "sie",
    topicId: "equity",
    topicName: "Equity Securities",
    title: "Equity Securities: Common, Preferred, and Hybrids",
    readingMinutes: 16,
    summary: "Ownership in depth — common vs preferred stock, the flavors of preferred, and equity-linked instruments like rights, warrants, and ADRs.",
    intro:
      "Equity means ownership. The SIE expects you to know what a shareholder actually owns, how common and preferred stock differ in risk and priority, the named varieties of preferred, and the equity-linked instruments — rights, warrants, and ADRs — that orbit common stock. This chapter goes deeper than the overview so the distinctions stick.",
    sections: [
      {
        heading: "Common stock — the residual owner",
        blocks: [
          { kind: "p", text: "Common stockholders are the residual owners of a corporation: they vote (typically one vote per share) to elect the board, may receive dividends when declared, and have the greatest upside if the company grows. The trade-off is priority — in a liquidation, common shareholders are paid LAST, after creditors and preferred shareholders, so they bear the most risk. Dividends are never guaranteed; the board decides whether to pay them." },
          { kind: "p", text: "Two ownership protections appear on the exam. Preemptive rights let existing shareholders buy newly issued shares first, preserving their proportional ownership. Voting can be statutory (one vote per share per director) or cumulative (votes can be concentrated on fewer candidates), the latter giving minority holders more influence." },
          { kind: "callout", label: "Par value is mostly an accounting fiction", body: "The par value of common stock is an arbitrary bookkeeping figure with no relation to market price. Don't confuse it with the bond world, where par ($1,000) is the redemption amount that actually matters." },
        ],
      },
      {
        heading: "Preferred stock and its varieties",
        blocks: [
          { kind: "p", text: "Preferred stock pays a fixed dividend and ranks ahead of common stock for both dividends and liquidation — it behaves like an equity/fixed-income hybrid. Because its dividend is fixed, its price is sensitive to interest rates, much like a bond. Preferred usually carries no voting rights." },
          { kind: "table", table: { caption: "Table 1 — The flavors of preferred stock the SIE tests.", headers: ["Type", "Feature"], rows: [["Cumulative", "Missed (passed) dividends accumulate in arrears and must be paid before common dividends"], ["Non-cumulative", "Missed dividends are gone forever"], ["Participating", "May receive extra dividends above the stated rate"], ["Convertible", "Can be exchanged for a set number of common shares"], ["Callable", "Issuer can redeem it at a set price after a set date"]] } },
          { kind: "example", example: { title: "cumulative preferred in arrears", prompt: "A 6% cumulative preferred ($100 par) skipped its dividend for two years. Before common shareholders get anything, how much must be paid per share?", steps: ["Annual dividend = 6% × $100 = $6.", "Two years skipped = 2 × $6 = $12 in arrears.", "Plus the current year's $6 = $18 total before common is paid."], answer: "$18 per share — all $12 in arrears plus the current $6, because 'cumulative' means missed dividends accumulate." } },
        ],
      },
      {
        heading: "Equity-linked instruments",
        blocks: [
          { kind: "p", text: "Several instruments are tied to common stock. Rights are short-term (a few weeks) and give existing shareholders the chance to buy new shares at a discount, fulfilling preemptive rights. Warrants are long-term (years) and usually attached to bonds or preferred as a 'sweetener,' letting the holder buy stock at a set price. American Depositary Receipts (ADRs) let U.S. investors buy foreign companies in dollars on U.S. exchanges — convenient, but still exposed to currency risk." },
        ],
      },
    ],
    keyTerms: [
      { term: "Common stock", def: "Residual ownership with voting rights and dividends, last in liquidation but greatest upside." },
      { term: "Preferred stock", def: "Fixed-dividend equity that ranks ahead of common for dividends and in liquidation; usually non-voting." },
      { term: "Cumulative preferred", def: "Preferred whose skipped dividends accumulate and must be paid before any common dividend." },
      { term: "Participating preferred", def: "Preferred that can receive extra dividends above its stated rate." },
      { term: "Convertible preferred", def: "Preferred that can be exchanged for a set number of common shares." },
      { term: "Callable preferred", def: "Preferred the issuer can redeem at a set price after a set date." },
      { term: "Par value (stock)", def: "An arbitrary accounting figure for stock, unrelated to market price." },
      { term: "Preemptive right", def: "Existing shareholders' right to buy new shares first to maintain proportional ownership." },
      { term: "Cumulative voting", def: "Voting that lets shareholders concentrate votes, helping minority holders." },
      { term: "Rights", def: "Short-term instruments letting existing holders buy new shares at a discount." },
      { term: "Warrants", def: "Long-term instruments, often attached as sweeteners, to buy stock at a set price." },
      { term: "ADR", def: "A receipt letting U.S. investors hold foreign shares in dollars on U.S. markets; carries currency risk." },
      { term: "Treasury stock", def: "Shares the company has repurchased; they have no voting rights or dividends." },
    ],
    takeaways: [
      "Common = residual owner: votes, variable dividend, last in liquidation, most upside.",
      "Preferred = fixed-dividend hybrid, ahead of common, rate-sensitive, usually non-voting.",
      "Know the preferred flavors: cumulative (arrears accumulate), participating, convertible, callable.",
      "Rights are short-term to existing holders; warrants are long-term sweeteners; ADRs hold foreign stock in USD.",
    ],
  },

  {
    id: "sie-debt",
    examSlug: "sie",
    topicId: "debt",
    topicName: "Debt Securities",
    title: "Debt Securities: Bonds, Yields, and Government Issues",
    readingMinutes: 18,
    summary: "Loans in depth — bond mechanics, the four yield measures, the price/yield seesaw, and the full menu of corporate, government, and municipal debt.",
    intro:
      "A bond is a loan: the investor lends, and the issuer pays interest and returns principal at maturity. The SIE tests the mechanics (par, coupon, maturity), the yield measures, the inverse price/yield relationship, and the full lineup of issuers from corporations to the U.S. Treasury to municipalities. This chapter builds the whole map.",
    sections: [
      {
        heading: "Bond mechanics and the price/yield seesaw",
        blocks: [
          { kind: "p", text: "A standard bond has a par (face) value — usually $1,000 — a coupon (the fixed annual interest rate), and a maturity date when principal is repaid. The single most important relationship in fixed income: bond prices move INVERSELY to interest rates. When rates rise, existing lower-coupon bonds fall in price (trade at a discount); when rates fall, they rise (trade at a premium). Longer maturities swing more for a given rate change." },
          { kind: "callout", label: "Premium, par, discount", body: "Coupon > market rate → bond trades at a PREMIUM (above par). Coupon = market rate → at PAR. Coupon < market rate → at a DISCOUNT (below par)." },
        ],
      },
      {
        heading: "The four yields",
        blocks: [
          { kind: "p", text: "Four yield measures describe a bond, and their order tells you whether a bond trades at a premium or discount. Nominal yield is just the coupon rate. Current yield = annual coupon ÷ current price. Yield to maturity (YTM) accounts for the coupon plus the gain or loss to par at maturity. Yield to call (YTC) does the same to the call date." },
          { kind: "table", table: { caption: "Table 1 — Yield ordering reveals premium vs discount.", headers: ["Bond trades at", "Yield order"], rows: [["Discount (below par)", "Nominal < Current < YTM < YTC"], ["Premium (above par)", "YTC < YTM < Current < Nominal"]] } },
          { kind: "example", example: { title: "current yield", prompt: "A bond with a 5% coupon ($1,000 par) trades at $950. What is its current yield?", steps: ["Annual coupon = 5% × $1,000 = $50.", "Current yield = coupon ÷ price = $50 ÷ $950.", "= 5.26%."], answer: "≈ 5.26% — above the 5% nominal because the bond trades at a discount, so each dollar invested buys more yield." } },
        ],
      },
      {
        heading: "The issuer menu",
        blocks: [
          { kind: "p", text: "Debt is grouped by issuer. Corporate bonds offer higher yields and carry credit risk (a secured bond is backed by collateral; a debenture is backed only by the issuer's general credit). U.S. Treasuries are the credit-risk benchmark: T-bills are short-term and issued at a discount with no coupon; T-notes (2–10 yr) and T-bonds (20–30 yr) pay semiannual coupons; TIPS adjust principal for inflation. Agency securities (e.g., GNMA pass-throughs) add a housing dimension. Municipal bonds — general obligation (backed by taxing power) or revenue (backed by a project's income) — pay interest that is typically exempt from federal tax, prized by high-bracket investors. Money-market instruments (T-bills, commercial paper, CDs) are short-term and highly liquid." },
        ],
      },
    ],
    keyTerms: [
      { term: "Par value (bond)", def: "The face/redemption amount of a bond, typically $1,000." },
      { term: "Coupon", def: "The fixed annual interest rate a bond pays on its par value." },
      { term: "Maturity", def: "The date a bond repays its principal." },
      { term: "Price/yield inverse relationship", def: "Bond prices fall when rates rise and rise when rates fall." },
      { term: "Premium / discount", def: "A bond priced above par (premium) or below par (discount)." },
      { term: "Nominal yield", def: "The bond's coupon rate." },
      { term: "Current yield", def: "Annual coupon divided by the bond's current market price." },
      { term: "Yield to maturity (YTM)", def: "Total return if held to maturity, including coupon and gain/loss to par." },
      { term: "Yield to call (YTC)", def: "Total return if the bond is called at the call date." },
      { term: "Debenture", def: "An unsecured bond backed only by the issuer's general credit." },
      { term: "Treasury bill", def: "A short-term government security issued at a discount with no coupon." },
      { term: "TIPS", def: "Treasury security whose principal adjusts with inflation (CPI)." },
      { term: "General obligation bond", def: "A municipal bond backed by the issuer's full faith, credit, and taxing power." },
      { term: "Revenue bond", def: "A municipal bond repaid only from a specific project's revenues." },
      { term: "Accrued interest", def: "Interest earned since the last coupon, paid by a bond's buyer to the seller." },
    ],
    takeaways: [
      "Bonds are loans: par, coupon, maturity — and price moves inversely to rates.",
      "Coupon vs market rate sets premium/par/discount; longer maturities swing more.",
      "Four yields: nominal, current, YTM, YTC — their order reveals premium vs discount.",
      "Know the issuer menu: corporates (credit risk), Treasuries (benchmark), agencies, munis (tax-exempt), money market.",
    ],
  },

  {
    id: "sie-funds",
    examSlug: "sie",
    topicId: "funds",
    topicName: "Investment Funds",
    title: "Investment Funds: Mutual Funds, ETFs, and UITs",
    readingMinutes: 16,
    summary: "Pooled products in depth — how open-end funds price and charge, the A/B/C share classes and breakpoints, and how closed-end funds, ETFs, and UITs differ.",
    intro:
      "Most retail money flows through pooled funds, so the SIE tests them closely. You need to know how an open-end mutual fund prices and charges fees, the difference between the share classes, how breakpoints work, and how closed-end funds, ETFs, and UITs differ from one another. This chapter lays out the whole landscape.",
    sections: [
      {
        heading: "Open-end mutual funds",
        blocks: [
          { kind: "p", text: "An open-end mutual fund continuously issues and redeems its own shares directly with investors at net asset value (NAV) — total assets minus liabilities, divided by shares outstanding. Orders fill at the NEXT computed NAV (forward pricing), typically once per day after the market closes. The public offering price (POP) on a front-load fund is the NAV plus the sales charge; investors redeem at NAV." },
          { kind: "table", table: { caption: "Table 1 — Mutual fund share classes carry the same portfolio, different fee timing.", headers: ["Class", "Fee structure"], rows: [["Class A", "Front-end load (charged at purchase); lower ongoing fees; breakpoints available"], ["Class B", "Back-end load / contingent deferred sales charge that declines over time"], ["Class C", "Level load (higher ongoing 12b-1 fee); no front load"]] } },
          { kind: "callout", label: "Breakpoints (and the violation)", body: "Class A funds offer breakpoints — reduced sales charges for larger investments. Deliberately keeping a purchase just under a breakpoint to earn a higher commission is 'breakpoint selling,' a prohibited practice." },
        ],
      },
      {
        heading: "Closed-end funds, ETFs, and UITs",
        blocks: [
          { kind: "p", text: "Other pooled vehicles behave differently. A closed-end fund issues a FIXED number of shares in an IPO, after which they trade on an exchange at a market price that can be above (premium) or below (discount) NAV. Exchange-traded funds (ETFs) trade intraday like stocks, usually track an index, and are low-cost and tax-efficient. A unit investment trust (UIT) holds a fixed, unmanaged portfolio for a set term, with units redeemable but no ongoing management." },
          { kind: "example", example: { title: "POP from NAV and load", prompt: "A Class A fund has a NAV of $19.05 and a 5% sales charge. What is the public offering price (POP)?", steps: ["POP = NAV ÷ (1 − sales charge %) for a percentage load.", "POP = 19.05 ÷ (1 − 0.05) = 19.05 ÷ 0.95.", "= $20.05."], answer: "$20.05 — the investor pays $20.05, of which ~$1.00 (5%) is the sales charge and $19.05 is invested at NAV." } },
        ],
      },
    ],
    keyTerms: [
      { term: "Net asset value (NAV)", def: "Fund assets minus liabilities divided by shares; the per-share value at which open-end funds transact." },
      { term: "Forward pricing", def: "Orders fill at the next computed NAV, typically once daily after market close." },
      { term: "Public offering price (POP)", def: "NAV plus the sales charge on a front-load fund." },
      { term: "Open-end fund", def: "A mutual fund that continuously issues/redeems shares at NAV." },
      { term: "Closed-end fund", def: "A fund with a fixed share count that trades on an exchange at a market price (premium/discount to NAV)." },
      { term: "ETF", def: "An exchange-traded, usually index-tracking fund that trades intraday at low cost." },
      { term: "Unit investment trust (UIT)", def: "A fixed, unmanaged portfolio held for a set term, with redeemable units." },
      { term: "Class A shares", def: "Front-end load shares with lower ongoing fees and breakpoint discounts." },
      { term: "Class B shares", def: "Shares with a contingent deferred (back-end) sales charge that declines over time." },
      { term: "Class C shares", def: "Level-load shares with a higher ongoing 12b-1 fee and no front load." },
      { term: "12b-1 fee", def: "An annual fee for distribution/marketing charged against fund assets." },
      { term: "Breakpoint", def: "A reduced sales charge for investing a larger dollar amount in Class A shares." },
      { term: "Breakpoint selling", def: "Prohibited practice of keeping a purchase just below a breakpoint to earn more commission." },
      { term: "Expense ratio", def: "Annual operating costs as a percent of fund assets, paid by shareholders." },
    ],
    takeaways: [
      "Open-end funds transact at the next NAV (forward pricing); POP = NAV + sales charge.",
      "Share classes share the portfolio but differ in fee timing: A (front), B (back), C (level).",
      "Breakpoints reward larger Class A purchases; pushing buys just under one is a violation.",
      "Closed-end funds and ETFs trade at market prices; UITs hold a fixed, unmanaged portfolio.",
    ],
  },

  {
    id: "sie-options",
    examSlug: "sie",
    topicId: "options",
    topicName: "Options Basics",
    title: "Options Basics: Calls, Puts, and the Four Positions",
    readingMinutes: 16,
    summary: "The vocabulary and payoff logic of options — calls vs puts, the four buyer/seller positions, intrinsic value, and why options expire.",
    intro:
      "Options give the SIE candidate trouble because the language is unfamiliar, not because the math is hard. An option is a contract: the right, but not the obligation, to buy or sell a stock at a set price before expiration. Master the four basic positions and what each one wants the stock to do, and the rest falls into place.",
    sections: [
      {
        heading: "Calls, puts, and contract terms",
        blocks: [
          { kind: "p", text: "A CALL gives its owner the right to BUY 100 shares at the strike price; a PUT gives the right to SELL 100 shares at the strike. Every option has a strike (exercise) price, an expiration date, and a premium (its cost). One contract covers 100 shares, so a $2 premium costs $200. Buyers pay the premium and hold the right; sellers (writers) receive the premium and take on the obligation if the buyer exercises." },
          { kind: "callout", label: "Call up, put down", body: "Call buyers are BULLISH — they profit when the stock rises above the strike. Put buyers are BEARISH — they profit when the stock falls below the strike. Sellers take the opposite view and want the option to expire worthless so they keep the premium." },
        ],
      },
      {
        heading: "The four positions and intrinsic value",
        blocks: [
          { kind: "p", text: "There are exactly four basic positions: long call (bullish, limited risk to the premium, large upside), short call (bearish/neutral, premium income, unlimited risk if uncovered), long put (bearish, limited risk, large downside profit), and short put (bullish/neutral, premium income, large risk down to zero). An option's intrinsic value is how much it is in-the-money: a call is in-the-money when the stock is ABOVE the strike, a put when the stock is BELOW the strike. Anything paid above intrinsic value is time value, which decays to zero by expiration." },
          { kind: "table", table: { caption: "Table 1 — The four basic option positions.", headers: ["Position", "Outlook", "Max gain / max loss"], rows: [["Long call", "Bullish", "Unlimited / premium paid"], ["Short call", "Bearish", "Premium / unlimited (if uncovered)"], ["Long put", "Bearish", "Strike − premium / premium paid"], ["Short put", "Bullish", "Premium / strike − premium"]] } },
          { kind: "example", example: { title: "a call's intrinsic value", prompt: "An investor owns a call with a $50 strike while the stock trades at $58. The call cost a $5 premium. What is its intrinsic value, and is the position profitable at expiration?", steps: ["Intrinsic value = stock − strike = $58 − $50 = $8 (it's in-the-money).", "Profit = intrinsic value − premium = $8 − $5 = $3 per share.", "Per contract: $3 × 100 = $300."], answer: "Intrinsic value is $8; the position nets $3 per share ($300 per contract) after the premium." } },
        ],
      },
      {
        heading: "Why investors use options",
        blocks: [
          { kind: "p", text: "Options serve three purposes the SIE tests. SPECULATION: a small premium controls 100 shares, magnifying gains (and the risk of total loss of premium). HEDGING: a long put acts like insurance on a stock you own (a 'protective put'), capping downside. INCOME: writing a call against stock you own (a 'covered call') collects premium in exchange for giving up some upside. The key risk asymmetry: option buyers can only lose the premium, while uncovered call writers face theoretically unlimited loss." },
        ],
      },
    ],
    keyTerms: [
      { term: "Call option", def: "The right to BUY 100 shares at the strike price; bullish for the buyer." },
      { term: "Put option", def: "The right to SELL 100 shares at the strike price; bearish for the buyer." },
      { term: "Strike (exercise) price", def: "The price at which the option can be exercised." },
      { term: "Premium", def: "The price paid for an option; one contract covers 100 shares." },
      { term: "Writer (seller)", def: "The party that receives the premium and takes the obligation to perform if exercised." },
      { term: "In-the-money", def: "A call with stock above the strike, or a put with stock below the strike." },
      { term: "Intrinsic value", def: "How much an option is in-the-money; zero if out-of-the-money." },
      { term: "Time value", def: "Premium above intrinsic value; decays to zero by expiration." },
      { term: "Long call", def: "Bullish position with risk limited to the premium and large upside." },
      { term: "Short (uncovered) call", def: "Bearish/neutral position earning premium but with unlimited risk." },
      { term: "Protective put", def: "A long put on stock you own, acting as downside insurance." },
      { term: "Covered call", def: "Writing a call against owned stock to earn premium, capping upside." },
      { term: "Expiration", def: "The date an option becomes void if not exercised." },
    ],
    takeaways: [
      "A call is the right to buy; a put is the right to sell — each contract is 100 shares.",
      "Call buyers are bullish, put buyers bearish; sellers want the option to expire worthless.",
      "Intrinsic value is the in-the-money amount; the rest is time value that decays to expiration.",
      "Buyers risk only the premium; uncovered call writers face unlimited risk. Protective puts hedge, covered calls earn income.",
    ],
  },

  {
    id: "sie-munis",
    examSlug: "sie",
    topicId: "munis",
    topicName: "Municipal Securities",
    title: "Municipal Securities: GO Bonds, Revenue Bonds, and Tax Treatment",
    readingMinutes: 15,
    summary: "How states and localities borrow — general obligation vs revenue bonds, the federal tax exemption, and the taxable-equivalent yield math.",
    intro:
      "Municipal bonds are debt issued by states, cities, and their agencies, and their defining feature is tax treatment: the interest is generally exempt from federal income tax. That exemption drives who buys them and how their yields compare to taxable bonds. The SIE expects the GO-versus-revenue distinction and the taxable-equivalent yield calculation.",
    sections: [
      {
        heading: "Two families: GO and revenue",
        blocks: [
          { kind: "p", text: "Municipal bonds split into two main types by what backs them. A general obligation (GO) bond is backed by the issuer's full faith, credit, and TAXING power — repaid from taxes — so it usually requires voter approval and is considered very safe. A revenue bond is repaid only from the income of a specific project (a toll road, airport, or utility), so its safety depends on that project's success and it carries more risk. Because revenue bonds rely on one revenue stream, analysts study the project's feasibility and any debt-service coverage." },
          { kind: "table", table: { caption: "Table 1 — GO vs revenue bonds.", headers: ["Feature", "General obligation", "Revenue"], rows: [["Backed by", "Taxing power", "Project income"], ["Voter approval", "Usually required", "Usually not"], ["Relative risk", "Lower", "Higher"]] } },
        ],
      },
      {
        heading: "The tax exemption and who buys",
        blocks: [
          { kind: "p", text: "Municipal interest is generally exempt from FEDERAL income tax, and often from state tax too if the buyer lives in the issuing state ('double exempt'). This makes munis most valuable to investors in HIGH tax brackets, who keep more of a lower stated yield than they would from a fully taxed bond. The flip side: munis are a poor fit for tax-advantaged accounts like IRAs, because the account is already tax-sheltered, so the exemption is wasted." },
          { kind: "example", example: { title: "taxable-equivalent yield", prompt: "A municipal bond yields 4%. An investor is in the 32% federal tax bracket. What taxable yield would be equivalent?", steps: ["Taxable-equivalent yield = muni yield ÷ (1 − tax rate).", "= 4% ÷ (1 − 0.32) = 4% ÷ 0.68.", "= 5.88%."], answer: "≈ 5.88% — the investor would need a taxable bond yielding 5.88% to match the tax-free 4% muni, which is why high-bracket investors favor munis." } },
        ],
      },
      {
        heading: "Trading and oversight",
        blocks: [
          { kind: "p", text: "The municipal market is regulated by the Municipal Securities Rulemaking Board (MSRB), which writes rules for dealers (though it has no enforcement arm of its own — FINRA and the SEC enforce). Key disclosure tool: the official statement, the muni equivalent of a prospectus. Munis trade over-the-counter and are quoted on a yield basis for most maturities. Short-term municipal notes (such as TANs and RANs) help issuers manage cash flow until taxes or revenues arrive." },
        ],
      },
    ],
    keyTerms: [
      { term: "Municipal bond", def: "Debt issued by a state or local government; interest is generally federally tax-exempt." },
      { term: "General obligation (GO) bond", def: "A muni backed by the issuer's full faith, credit, and taxing power." },
      { term: "Revenue bond", def: "A muni repaid only from a specific project's revenues; higher risk than a GO." },
      { term: "Federal tax exemption", def: "Municipal interest is generally exempt from federal income tax." },
      { term: "Double exempt", def: "A muni free of both federal and the buyer's state tax (in-state purchase)." },
      { term: "Taxable-equivalent yield", def: "Muni yield ÷ (1 − tax rate); the taxable yield needed to match a muni." },
      { term: "Official statement", def: "The municipal disclosure document, equivalent to a prospectus." },
      { term: "MSRB", def: "The Municipal Securities Rulemaking Board, which writes muni dealer rules." },
      { term: "Debt-service coverage", def: "A revenue bond's project income relative to its debt payments." },
      { term: "TAN / RAN", def: "Short-term municipal notes issued in anticipation of taxes or revenues." },
      { term: "Voter approval", def: "Typically required to issue GO bonds because they pledge taxing power." },
      { term: "High tax bracket appeal", def: "Munis benefit high-bracket investors most due to the tax exemption." },
    ],
    takeaways: [
      "GO bonds are backed by taxing power (safer); revenue bonds by a single project's income (riskier).",
      "Municipal interest is generally federal-tax-exempt, making munis ideal for high-bracket investors and wasteful in IRAs.",
      "Taxable-equivalent yield = muni yield ÷ (1 − tax rate).",
      "The MSRB writes muni rules; the official statement is the muni disclosure document.",
    ],
  },

  {
    id: "sie-accounts",
    examSlug: "sie",
    topicId: "accounts",
    topicName: "Customer Accounts",
    title: "Customer Accounts: Types, Registration, and Retirement Plans",
    readingMinutes: 16,
    summary: "How brokerage accounts are opened and titled — cash vs margin, ownership forms, discretionary authority, and the main retirement-account types.",
    intro:
      "Before any trade, a customer needs an account, and the SIE tests how accounts are opened, who can act on them, and how they're titled. Layer on the retirement-account menu — IRAs and employer plans — and you have a frequently examined cluster. Know the ownership forms and the IRA distinctions cold.",
    sections: [
      {
        heading: "Opening and operating an account",
        blocks: [
          { kind: "p", text: "Opening an account requires gathering customer information (identity, financial status, objectives) to satisfy know-your-customer and anti-money-laundering rules; a principal must approve the new account. A cash account requires full payment for purchases. A margin account lets the customer borrow part of the purchase price from the firm, requiring a signed margin agreement and a hypothecation agreement (pledging securities as collateral). Discretionary authority — letting the rep choose the security, amount, or action without prior approval — requires WRITTEN authorization from the customer and principal approval; discretionary accounts get extra supervision." },
          { kind: "callout", label: "What counts as discretion", body: "An order is discretionary only if the rep decides the asset, the amount, OR the action (buy/sell). Deciding just the time or price of an order the customer already specified is NOT discretion and needs no written authority." },
        ],
      },
      {
        heading: "Account ownership and registration",
        blocks: [
          { kind: "p", text: "How an account is titled determines who controls it and what happens at death. An individual account has one owner. Joint accounts have two or more: joint tenants with right of survivorship (JTWROS) passes a deceased owner's share to the survivors, while tenants in common (TIC) passes it to the deceased's estate. Other forms include custodial accounts (UGMA/UTMA) for minors, trust accounts, and corporate or partnership accounts requiring documentation of authority." },
          { kind: "table", table: { caption: "Table 1 — Common account registrations.", headers: ["Type", "Key feature"], rows: [["Individual", "One owner"], ["JTWROS", "Deceased's share goes to surviving owner(s)"], ["Tenants in common", "Deceased's share goes to their estate"], ["UGMA/UTMA custodial", "One minor, one custodian; irrevocable gift"]] } },
        ],
      },
      {
        heading: "Retirement accounts",
        blocks: [
          { kind: "p", text: "Retirement accounts are tax-advantaged. A Traditional IRA gives a potential up-front tax DEDUCTION; contributions grow tax-deferred and withdrawals in retirement are taxed as ordinary income, with required minimum distributions starting in the early 70s. A Roth IRA has no deduction, but qualified withdrawals are entirely TAX-FREE and there are no lifetime RMDs. Early withdrawals before 59½ generally face a 10% penalty plus tax. Employer plans include the 401(k) (private employers) and 403(b) (schools and nonprofits), often with matching contributions. Contribution limits are set annually by the IRS." },
        ],
      },
    ],
    keyTerms: [
      { term: "Know-your-customer (KYC)", def: "The rule requiring firms to learn essential facts about each customer." },
      { term: "Cash account", def: "An account requiring full payment for all purchases." },
      { term: "Margin account", def: "An account allowing the customer to borrow part of a purchase from the firm." },
      { term: "Hypothecation agreement", def: "The customer's pledge of securities as collateral in a margin account." },
      { term: "Discretionary authority", def: "Written power letting a rep choose asset, amount, or action without prior approval." },
      { term: "JTWROS", def: "Joint tenants with right of survivorship; a deceased owner's share passes to survivors." },
      { term: "Tenants in common (TIC)", def: "Joint ownership where a deceased owner's share goes to their estate." },
      { term: "UGMA/UTMA account", def: "A custodial account for a minor; the gift is irrevocable." },
      { term: "Traditional IRA", def: "Pre-tax contributions, tax-deferred growth, taxable withdrawals, with RMDs." },
      { term: "Roth IRA", def: "After-tax contributions with tax-free qualified withdrawals and no lifetime RMDs." },
      { term: "Required minimum distribution (RMD)", def: "Mandatory withdrawals beginning in one's early 70s for traditional accounts." },
      { term: "401(k) / 403(b)", def: "Employer-sponsored retirement plans for companies / nonprofits and schools." },
      { term: "Early-withdrawal penalty", def: "A 10% penalty (plus tax) on most withdrawals before age 59½." },
    ],
    takeaways: [
      "Cash accounts require full payment; margin accounts require a signed margin and hypothecation agreement.",
      "Discretion (choosing asset, amount, or action) needs written authority; choosing only time/price does not.",
      "JTWROS passes to survivors; tenants in common passes to the estate; UGMA/UTMA is an irrevocable minor's account.",
      "Traditional IRA: deduct now, taxed later, RMDs. Roth: no deduction, tax-free later, no lifetime RMDs.",
    ],
  },

  {
    id: "sie-economics",
    examSlug: "sie",
    topicId: "economics",
    topicName: "Economic Factors",
    title: "Economic Factors: The Business Cycle, Policy, and Interest Rates",
    readingMinutes: 15,
    summary: "The macro backdrop the SIE tests — the business cycle, fiscal vs monetary policy, the Fed's tools, and how interest rates ripple through markets.",
    intro:
      "Securities don't trade in a vacuum; they respond to the economy. The SIE expects a working grasp of the business cycle, the difference between fiscal and monetary policy, the Federal Reserve's toolkit, and the way interest rates and inflation move asset prices. This chapter ties the macro picture to the markets.",
    sections: [
      {
        heading: "The business cycle",
        blocks: [
          { kind: "p", text: "Economies move through a repeating cycle: expansion (rising output and employment), peak, contraction (falling output — a recession if it lasts two consecutive quarters of declining GDP), and trough, before recovering. Gross domestic product (GDP) is the headline measure of output. Indicators are grouped by timing: leading indicators (stock prices, building permits, new orders) turn BEFORE the economy; coincident indicators move with it; lagging indicators (unemployment, corporate profits) turn after. Knowing which is which is a common exam point." },
          { kind: "callout", label: "Recession rule of thumb", body: "Two consecutive quarters of declining real GDP is the classic shorthand for a recession. Depression is a prolonged, severe version (often cited as six consecutive quarters or more of decline)." },
        ],
      },
      {
        heading: "Fiscal vs monetary policy",
        blocks: [
          { kind: "p", text: "Two levers steer the economy. FISCAL policy is run by Congress and the President through government spending and taxation — cutting taxes or raising spending stimulates; the reverse restrains. MONETARY policy is run by the Federal Reserve, which manages the money supply and short-term interest rates. The Fed's main tools are open market operations (buying or selling Treasuries — the most-used tool), the discount rate (what it charges banks), and reserve requirements. Buying securities injects money and lowers rates (easing/expansionary); selling does the opposite (tightening)." },
          { kind: "table", table: { caption: "Table 1 — Who controls which lever.", headers: ["Policy", "Controlled by", "Main tools"], rows: [["Fiscal", "Congress / President", "Spending and taxation"], ["Monetary", "Federal Reserve", "Open market operations, discount rate, reserve requirement"]] } },
        ],
      },
      {
        heading: "Interest rates and inflation",
        blocks: [
          { kind: "p", text: "Interest rates are the economy's price of money. The federal funds rate is what banks charge each other overnight; the discount rate is what the Fed charges banks; the prime rate is what banks charge their best customers. When the Fed RAISES rates, borrowing slows, bond prices fall, and growth cools; when it LOWERS rates, the reverse. Inflation — a sustained rise in the general price level, measured by the Consumer Price Index (CPI) — erodes purchasing power and the real value of fixed bond payments, which is why bond prices and inflation expectations move inversely. A small, steady amount of inflation is normal; deflation (falling prices) signals economic weakness." },
        ],
      },
    ],
    keyTerms: [
      { term: "Business cycle", def: "The repeating sequence of expansion, peak, contraction, and trough." },
      { term: "Gross domestic product (GDP)", def: "The total output of an economy; the headline growth measure." },
      { term: "Recession", def: "Commonly, two consecutive quarters of declining real GDP." },
      { term: "Leading indicators", def: "Measures (stock prices, permits) that turn before the economy does." },
      { term: "Lagging indicators", def: "Measures (unemployment, profits) that turn after the economy." },
      { term: "Fiscal policy", def: "Government spending and taxation, set by Congress and the President." },
      { term: "Monetary policy", def: "The Fed's management of the money supply and interest rates." },
      { term: "Open market operations", def: "The Fed's buying/selling of Treasuries; its most-used tool." },
      { term: "Discount rate", def: "The rate the Federal Reserve charges banks for loans." },
      { term: "Federal funds rate", def: "The overnight rate banks charge each other." },
      { term: "Reserve requirement", def: "The fraction of deposits banks must hold; a blunt Fed tool." },
      { term: "Inflation / CPI", def: "A sustained rise in prices, measured by the Consumer Price Index." },
      { term: "Deflation", def: "A sustained fall in the general price level, signaling weakness." },
    ],
    takeaways: [
      "The cycle runs expansion → peak → contraction → trough; know leading vs lagging indicators.",
      "Fiscal policy (Congress) uses spending and taxes; monetary policy (the Fed) uses open market operations, the discount rate, and reserves.",
      "The Fed buying securities eases (lower rates); selling tightens (higher rates).",
      "Rising rates and inflation push bond prices down; deflation signals economic weakness.",
    ],
  },

  {
    id: "sie-suitability",
    examSlug: "sie",
    topicId: "suitability",
    topicName: "Suitability & Recommendations",
    title: "Suitability, Know-Your-Customer, and Making Recommendations",
    readingMinutes: 14,
    summary: "The customer-profile rules that govern recommendations — KYC, the suitability standard, Regulation BI, and how risk tolerance and objectives map to products.",
    intro:
      "A recommendation must fit the customer, not just the salesperson's incentives. The SIE tests the framework for gathering a customer profile, the suitability obligations a recommendation must meet, and the higher best-interest standard introduced by Regulation BI. This is the conduct heart of the exam.",
    sections: [
      {
        heading: "Building the customer profile",
        blocks: [
          { kind: "p", text: "Every recommendation rests on a customer profile assembled under the know-your-customer rule: financial situation (income, net worth, liquidity), investment objectives (growth, income, preservation, speculation), risk tolerance, time horizon, tax status, and experience. Non-financial factors matter too — age, family obligations, and employment. A recommendation must be suitable in light of ALL this information; recommending a high-risk, illiquid product to a retiree needing income and safety is a classic violation." },
          { kind: "callout", label: "Objectives shorthand", body: "Match the objective to the product: growth → equities; income → bonds and dividend stocks; preservation/safety → government bonds and money market; speculation → options and volatile securities. Liquidity needs argue against illiquid products like DPPs." },
        ],
      },
      {
        heading: "Suitability and Regulation BI",
        blocks: [
          { kind: "p", text: "FINRA's suitability rule has three prongs: reasonable-basis suitability (the product is suitable for SOME investors and the rep understands it), customer-specific suitability (it fits THIS customer's profile), and quantitative suitability (a series of recommendations isn't excessive — guarding against churning). Layered on top, the SEC's Regulation Best Interest (Reg BI) raises the bar for broker-dealers: recommendations to retail customers must be in the customer's BEST INTEREST, not merely suitable, with care, disclosure, conflict-of-interest, and compliance obligations. The customer relationship summary (Form CRS) discloses the relationship and its costs." },
          { kind: "table", table: { caption: "Table 1 — The three prongs of suitability.", headers: ["Prong", "Question"], rows: [["Reasonable-basis", "Is it suitable for anyone, and do I understand it?"], ["Customer-specific", "Is it suitable for THIS customer?"], ["Quantitative", "Is the pattern of trading excessive (churning)?"]] } },
        ],
      },
      {
        heading: "Risk tolerance to product",
        blocks: [
          { kind: "p", text: "The exam asks you to translate a profile into appropriate products. A young investor with a long horizon and high risk tolerance can hold a growth-tilted, equity-heavy portfolio. A near-retiree needing income and stability belongs in higher-grade bonds, dividend payers, and cash equivalents. Diversification reduces unsystematic (company-specific) risk but cannot eliminate systematic (market) risk. When a customer's stated willingness to take risk conflicts with their financial ability to bear it, the more conservative ABILITY generally governs the recommendation." },
        ],
      },
    ],
    keyTerms: [
      { term: "Know-your-customer (KYC)", def: "The duty to learn a customer's financial and personal profile before recommending." },
      { term: "Customer profile", def: "Income, net worth, objectives, risk tolerance, horizon, tax status, and experience." },
      { term: "Investment objective", def: "The customer's goal: growth, income, preservation, or speculation." },
      { term: "Risk tolerance", def: "A customer's willingness and ability to bear investment loss." },
      { term: "Reasonable-basis suitability", def: "A product is suitable for some investors and the rep understands it." },
      { term: "Customer-specific suitability", def: "A recommendation fits the particular customer's profile." },
      { term: "Quantitative suitability", def: "A series of recommendations isn't excessive; guards against churning." },
      { term: "Churning", def: "Excessive trading to generate commissions, a prohibited practice." },
      { term: "Regulation Best Interest (Reg BI)", def: "SEC rule requiring retail recommendations to be in the customer's best interest." },
      { term: "Form CRS", def: "The customer relationship summary disclosing the relationship and its costs." },
      { term: "Diversification", def: "Spreading investments to reduce unsystematic (company-specific) risk." },
      { term: "Systematic risk", def: "Market-wide risk that diversification cannot remove." },
      { term: "Ability vs willingness", def: "When they conflict, the more conservative ability generally governs." },
    ],
    takeaways: [
      "Recommendations rest on a full KYC profile: finances, objectives, risk tolerance, horizon, and tax status.",
      "Match objective to product: growth→equities, income→bonds, safety→government/cash, speculation→options.",
      "Suitability has three prongs (reasonable-basis, customer-specific, quantitative); Reg BI raises it to a best-interest standard.",
      "Diversification cuts unsystematic but not systematic risk; when ability and willingness conflict, ability usually wins.",
    ],
  },

  {
    id: "sie-underwriting",
    examSlug: "sie",
    topicId: "underwriting",
    topicName: "Issuing & Underwriting",
    title: "Issuing Securities: The Primary Market, Underwriting, and the Prospectus",
    readingMinutes: 15,
    summary: "How new securities reach the market — the registration process under the Securities Act of 1933, underwriting commitments, the prospectus, and exempt offerings.",
    intro:
      "The primary market is where capital is actually raised: a company sells new securities to investors for the first time. The SIE tests the registration process created by the Securities Act of 1933, the roles underwriters play, the documents involved, and the exemptions that let some offerings skip full registration. Know the timeline and the commitment types.",
    sections: [
      {
        heading: "Registration and the 1933 Act",
        blocks: [
          { kind: "p", text: "The Securities Act of 1933 governs the issuance of new securities and is about DISCLOSURE: an issuer must register with the SEC and provide investors a prospectus with material facts so they can make an informed decision. The process runs through three periods. In the pre-filing period the issuer prepares but cannot offer the security. After filing comes the cooling-off period (at least 20 days) when the SEC reviews; during it, the firm may circulate a preliminary prospectus (the 'red herring') and gather indications of interest — but cannot take orders or money. Once the registration is effective, the security can be sold with a final prospectus." },
          { kind: "callout", label: "The SEC does not approve", body: "SEC review confirms adequate DISCLOSURE — it never approves the merits or guarantees a security. Claiming the SEC 'approved' an offering is a prohibited misrepresentation." },
        ],
      },
      {
        heading: "Underwriting commitments",
        blocks: [
          { kind: "p", text: "Underwriters (investment banks) help issuers bring securities to market, and the commitment type sets who bears the risk. In a FIRM COMMITMENT, the underwriter buys the entire issue and resells it, bearing the risk of unsold shares — the most common method. In a BEST EFFORTS deal, the underwriter only agrees to try to sell, returning unsold shares to the issuer (no risk to the underwriter). Variations of best efforts include all-or-none and mini-max. A syndicate of multiple firms often shares a large deal. The spread — the difference between what the public pays and what the issuer receives — is the underwriters' compensation." },
          { kind: "table", table: { caption: "Table 1 — Underwriting commitments.", headers: ["Type", "Who bears unsold-share risk"], rows: [["Firm commitment", "Underwriter (buys the whole issue)"], ["Best efforts", "Issuer (underwriter just tries)"], ["All-or-none", "Deal cancelled unless fully sold"]] } },
        ],
      },
      {
        heading: "Exempt securities and transactions",
        blocks: [
          { kind: "p", text: "Some offerings skip full registration. Exempt SECURITIES include U.S. government and municipal bonds, and securities of banks and certain nonprofits. Exempt TRANSACTIONS include private placements under Regulation D (sales to accredited or a limited number of investors) and Regulation A (smaller offerings with lighter requirements). An accredited investor meets income or net-worth thresholds and is presumed able to bear more risk. These exemptions reduce cost and time but limit who can buy or how the securities can be resold." },
        ],
      },
    ],
    keyTerms: [
      { term: "Primary market", def: "Where issuers sell new securities and raise capital for the first time." },
      { term: "Securities Act of 1933", def: "The disclosure law governing new issues and requiring registration." },
      { term: "Prospectus", def: "The disclosure document delivered to investors in a registered offering." },
      { term: "Cooling-off period", def: "The ≥20-day SEC review period after filing; no sales allowed." },
      { term: "Preliminary prospectus (red herring)", def: "A pre-effective document used to gather indications of interest." },
      { term: "Indication of interest", def: "A non-binding expression of buying interest during the cooling-off period." },
      { term: "Effective date", def: "When registration clears and the security may be sold." },
      { term: "Firm commitment", def: "Underwriter buys the whole issue, bearing unsold-share risk." },
      { term: "Best efforts", def: "Underwriter only tries to sell; the issuer keeps the risk." },
      { term: "Underwriting spread", def: "The difference between the public price and the issuer's proceeds." },
      { term: "Syndicate", def: "A group of underwriters sharing a large offering." },
      { term: "Regulation D", def: "An exemption for private placements to accredited/limited investors." },
      { term: "Accredited investor", def: "An investor meeting income or net-worth thresholds, presumed able to bear risk." },
      { term: "Exempt security", def: "A security (e.g., government, municipal) not requiring registration." },
    ],
    takeaways: [
      "The 1933 Act is about disclosure: register and deliver a prospectus; the SEC reviews disclosure, never approves merits.",
      "Timeline: pre-filing → cooling-off (≥20 days, red herring, indications of interest) → effective → sale with final prospectus.",
      "Firm commitment puts unsold-share risk on the underwriter; best efforts leaves it with the issuer.",
      "Exempt securities (government, muni) and exempt transactions (Reg D private placements) skip full registration.",
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

  // ---- Capital Markets (more) ----
  {
    id: "sie-mkt-q7", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 2,
    stem: "The FDIC and SIPC differ in that:",
    choices: ["Both insure against investment losses", "FDIC insures bank deposits; SIPC protects brokerage customers if the firm fails", "They are the same agency"],
    answerIndex: 1,
    explanation: "The FDIC insures bank deposits (up to limits), while SIPC protects customers of a failed broker-dealer (up to $500,000, including $250,000 cash) — but NOT against market losses. Choice A is wrong because neither insures against market declines. Choice C is false; they are separate and cover different things.",
  },
  {
    id: "sie-mkt-q8", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 2,
    stem: "In a firm-commitment underwriting, the underwriter:",
    choices: ["Acts only as an agent and sells what it can", "Buys the entire issue from the issuer and resells it, bearing the risk", "Guarantees the stock will rise"],
    answerIndex: 1,
    explanation: "In a firm commitment, the underwriter purchases the whole issue and assumes the risk of reselling it to the public. Choice A describes a best-efforts underwriting, where the underwriter is only an agent. Choice C is never true — no one can guarantee a security's price.",
  },
  {
    id: "sie-mkt-q9", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 1,
    stem: "A company selling shares to the public for the very first time is conducting a(n):",
    choices: ["Initial public offering (IPO)", "Secondary market trade", "Private placement"],
    answerIndex: 0,
    explanation: "A first-ever public sale of shares is an IPO, a primary-market transaction in which the issuer raises capital. Choice B is trading among investors after issuance. Choice C is an exempt offering to a limited group, not a public first sale.",
  },
  {
    id: "sie-mkt-q10", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 1,
    stem: "The federal agency that oversees the securities markets and enforces federal securities laws is the:",
    choices: ["FINRA", "SEC", "FDIC"],
    answerIndex: 1,
    explanation: "The Securities and Exchange Commission (SEC) is the federal regulator overseeing the markets and enforcing securities law; FINRA (choice A) is a self-regulatory organization operating under SEC oversight. Choice C (FDIC) insures bank deposits and is unrelated to securities regulation.",
  },

  // ---- Products & Risks (more) ----
  {
    id: "sie-prod-q7", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 2,
    stem: "Which U.S. Treasury security is issued at a discount and pays no periodic interest?",
    choices: ["Treasury bond", "Treasury note", "Treasury bill"],
    answerIndex: 2,
    explanation: "Treasury bills are short-term (one year or less), issued at a discount to face value, with the return being the difference at maturity — no periodic coupon. Treasury notes (2–10 years) and bonds (20–30 years) pay semiannual coupon interest. ",
  },
  {
    id: "sie-prod-q8", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 2,
    stem: "A general obligation (GO) municipal bond is backed by:",
    choices: ["Revenue from a specific project", "The full faith, credit, and taxing power of the issuer", "The federal government"],
    answerIndex: 1,
    explanation: "GO bonds are backed by the issuer's full faith, credit, and taxing power, making them generally safer than revenue bonds. Choice A describes a revenue bond, repaid only from a specific project's income. Choice C is wrong; municipal bonds are not federally guaranteed.",
  },
  {
    id: "sie-prod-q9", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 2,
    stem: "An American Depositary Receipt (ADR) lets a U.S. investor:",
    choices: ["Buy a foreign company's shares more easily, trading in U.S. dollars", "Avoid all currency risk entirely", "Invest only in U.S. companies"],
    answerIndex: 0,
    explanation: "An ADR is a negotiable certificate representing shares of a foreign company, trading in U.S. dollars on U.S. markets for convenience. Choice B is wrong — ADRs still carry currency risk. Choice C is the opposite; ADRs exist specifically to access foreign companies.",
  },
  {
    id: "sie-prod-q10", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 3,
    stem: "The main difference between rights and warrants is that:",
    choices: ["Rights are long-term; warrants are short-term", "Rights are short-term and offered to existing shareholders; warrants are long-term, often attached as sweeteners", "They are identical"],
    answerIndex: 1,
    explanation: "Rights are short-term (weeks) and given to existing shareholders to maintain proportional ownership; warrants are long-term (years) and typically attached to bonds or preferred stock as a sweetener. Choice A reverses the time horizons. Choice C is false; they differ in term and purpose.",
  },

  // ---- Trading & Accounts (more) ----
  {
    id: "sie-trd-q7", examSlug: "sie", topicId: "trading", topicName: "Trading & Accounts", difficulty: 2,
    stem: "Under Regulation T, the initial margin requirement to buy securities on margin is generally:",
    choices: ["10%", "50%", "100%"],
    answerIndex: 1,
    explanation: "Regulation T (set by the Federal Reserve) requires an initial margin of 50% — the investor must deposit at least half the purchase price, borrowing the rest. Choice A is too low for Reg T. Choice C (100%) would mean no margin at all, i.e., a cash purchase.",
  },
  {
    id: "sie-trd-q8", examSlug: "sie", topicId: "trading", topicName: "Trading & Accounts", difficulty: 3,
    stem: "An investor who sells stock short profits when the price:",
    choices: ["Rises, with limited risk", "Falls — but the potential loss is theoretically unlimited if the price rises", "Stays flat"],
    answerIndex: 1,
    explanation: "Short selling means selling borrowed shares hoping to buy them back cheaper, so the short seller profits when the price falls; because a price can rise without limit, the potential loss is theoretically unlimited. Choice A reverses the direction. Choice C produces no profit (and still owes borrow costs).",
  },
  {
    id: "sie-trd-q9", examSlug: "sie", topicId: "trading", topicName: "Trading & Accounts", difficulty: 2,
    stem: "A buy-stop order becomes a market order when the stock:",
    choices: ["Falls to the stop price", "Rises to or through the stop price", "Pays a dividend"],
    answerIndex: 1,
    explanation: "A buy-stop is placed ABOVE the current price and triggers (becoming a market order) when the stock rises to or through the stop — often used to limit a short-sale loss or catch upside momentum. Choice A describes a sell-stop (placed below the market). Choice C is unrelated to order triggering.",
  },
  {
    id: "sie-trd-q10", examSlug: "sie", topicId: "trading", topicName: "Trading & Accounts", difficulty: 2,
    stem: "In a joint account registered as JTWROS, when one owner dies their share:",
    choices: ["Passes to their estate via the will", "Passes automatically to the surviving owner(s)", "Is frozen permanently"],
    answerIndex: 1,
    explanation: "Joint Tenants With Right of Survivorship (JTWROS) means a deceased owner's interest passes automatically to the surviving owner(s), outside probate. Choice A describes tenants-in-common, where a share passes to the estate. Choice C is incorrect; the account continues with the survivor.",
  },

  // ---- Regulatory Framework (more) ----
  {
    id: "sie-reg-q7", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 2,
    stem: "When opening a new account, a firm's Customer Identification Program (CIP) requires it to:",
    choices: ["Verify the customer's identity (name, DOB, address, ID number)", "Guarantee the customer's investments", "Approve every future trade in advance"],
    answerIndex: 0,
    explanation: "Under AML rules, the CIP requires firms to collect and verify identifying information — name, date of birth, address, and a government identification number — to confirm who the customer is. Choice B is impossible and not a CIP function. Choice C is unrelated to identity verification.",
  },
  {
    id: "sie-reg-q8", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 3,
    stem: "Regulation Best Interest (Reg BI) requires a broker-dealer to:",
    choices: ["Act in the retail customer's best interest when making a recommendation", "Always recommend the cheapest product", "Guarantee positive returns"],
    answerIndex: 0,
    explanation: "Reg BI requires broker-dealers to act in the retail customer's best interest at the time of a recommendation, addressing conflicts and disclosure. Choice B is too narrow — best interest considers more than price. Choice C is never permissible; returns can't be guaranteed.",
  },
  {
    id: "sie-reg-q9", examSlug: "sie", topicId: "regulation", topicName: "Prohibited Activities", difficulty: 2,
    stem: "Spreading false positive information to inflate a stock so insiders can sell is:",
    choices: ["Permitted marketing", "Market manipulation (a 'pump and dump') — prohibited", "Best execution"],
    answerIndex: 1,
    explanation: "Artificially inflating a price with false information to dump shares is market manipulation, a prohibited fraud under securities law. Choice A mischaracterizes fraud as marketing. Choice C (best execution) is an unrelated duty to obtain favorable trade terms for customers.",
  },
  {
    id: "sie-reg-q10", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 2,
    stem: "The Municipal Securities Rulemaking Board (MSRB):",
    choices: ["Writes rules for municipal securities but does not enforce them itself", "Insures municipal bonds", "Sets monetary policy"],
    answerIndex: 0,
    explanation: "The MSRB writes rules governing the municipal securities market, but enforcement is carried out by other regulators (such as FINRA and the SEC). Choice B is false; the MSRB doesn't insure bonds. Choice C describes the Federal Reserve, not the MSRB.",
  },

  // ---- Equity Securities ----
  {
    id: "sie-eq-q1", examSlug: "sie", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "A 5% cumulative preferred ($100 par) missed last year's dividend. Before common shareholders are paid this year, the company must pay preferred holders:",
    choices: ["$5", "$10", "$0"],
    answerIndex: 1,
    explanation: "Cumulative preferred accumulates skipped dividends: last year's missed $5 plus this year's $5 = $10 per share must be paid before any common dividend. Choice A pays only the current year, ignoring the arrears. Choice C ignores the cumulative feature entirely.",
  },
  {
    id: "sie-eq-q2", examSlug: "sie", topicId: "equity", topicName: "Equity Securities", difficulty: 1,
    stem: "In a corporate liquidation, common stockholders are paid:",
    choices: ["First, before creditors", "Last, after creditors and preferred shareholders", "At the same time as bondholders"],
    answerIndex: 1,
    explanation: "Common stockholders are residual owners — they're paid last, after secured creditors, general creditors, and preferred shareholders. Choices A and C overstate common's priority; equity always sits behind debt in the capital structure.",
  },
  {
    id: "sie-eq-q3", examSlug: "sie", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "Compared with rights, warrants are:",
    choices: ["Short-term, issued to existing shareholders", "Long-term, often attached to other securities as a sweetener", "Identical to rights"],
    answerIndex: 1,
    explanation: "Warrants are long-term (years) instruments to buy stock at a set price, frequently attached to bonds or preferred as a sweetener. Choice A describes rights, which are short-term and given to existing holders. Choice C is false; they differ in term and purpose.",
  },
  {
    id: "sie-eq-q4", examSlug: "sie", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "An American Depositary Receipt (ADR) exposes a U.S. investor to:",
    choices: ["No risk because it trades in dollars", "Currency (exchange-rate) risk, despite trading in dollars", "Only U.S. tax risk"],
    answerIndex: 1,
    explanation: "Even though an ADR trades in dollars on a U.S. exchange, the underlying foreign shares carry currency risk — exchange-rate moves affect the ADR's value. Choice A wrongly assumes dollar trading removes currency risk. Choice C ignores the foreign-currency exposure.",
  },
  {
    id: "sie-eq-q5", examSlug: "sie", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "Convertible preferred stock gives the holder the right to:",
    choices: ["Force the company to repurchase it", "Exchange it for a set number of common shares", "Receive a guaranteed extra dividend"],
    answerIndex: 1,
    explanation: "Convertible preferred can be exchanged for a fixed number of common shares, letting the holder participate in common-stock upside. Choice A describes a different (put/callable-style) feature. Choice C describes participating preferred, not convertible.",
  },

  // ---- Debt Securities ----
  {
    id: "sie-debt-q1", examSlug: "sie", topicId: "debt", topicName: "Debt Securities", difficulty: 1,
    stem: "If interest rates fall, the price of an existing fixed-coupon bond will:",
    choices: ["Fall", "Rise (trade toward a premium)", "Not change"],
    answerIndex: 1,
    explanation: "Bond prices move inversely to rates, so when rates fall, an existing higher-coupon bond becomes more attractive and rises in price, potentially to a premium. Choice A reverses the relationship. Choice C ignores the inverse price/yield mechanism.",
  },
  {
    id: "sie-debt-q2", examSlug: "sie", topicId: "debt", topicName: "Debt Securities", difficulty: 2,
    stem: "A bond with a 6% coupon ($1,000 par) trades at $1,200. Its current yield is:",
    choices: ["6.0%", "5.0%", "7.2%"],
    answerIndex: 1,
    explanation: "Current yield = annual coupon ÷ price = $60 ÷ $1,200 = 5.0%. The current yield is BELOW the 6% nominal because the bond trades at a premium. Choice A is the nominal yield. Choice C inverts the relationship.",
  },
  {
    id: "sie-debt-q3", examSlug: "sie", topicId: "debt", topicName: "Debt Securities", difficulty: 2,
    stem: "Treasury bills pay interest by:",
    choices: ["A semiannual coupon", "Being issued at a discount and maturing at face value", "Adjusting principal for inflation"],
    answerIndex: 1,
    explanation: "T-bills are short-term, zero-coupon instruments sold at a discount; the gain to face value at maturity is the interest. Choice A describes T-notes/bonds. Choice C describes TIPS, a different Treasury security.",
  },
  {
    id: "sie-debt-q4", examSlug: "sie", topicId: "debt", topicName: "Debt Securities", difficulty: 2,
    stem: "A municipal bond backed by the issuer's full faith, credit, and taxing power is a:",
    choices: ["Revenue bond", "General obligation (GO) bond", "Debenture"],
    answerIndex: 1,
    explanation: "A GO bond is backed by the issuer's taxing power, generally making it safer than a revenue bond, which is repaid only from a specific project's income. Choice A is the project-revenue type. Choice C (debenture) is unsecured corporate debt, not municipal.",
  },
  {
    id: "sie-debt-q5", examSlug: "sie", topicId: "debt", topicName: "Debt Securities", difficulty: 2,
    stem: "A debenture is a bond backed by:",
    choices: ["Specific collateral", "The issuer's general credit only (unsecured)", "The federal government"],
    answerIndex: 1,
    explanation: "A debenture is unsecured — backed only by the issuer's general creditworthiness, not by pledged assets. Choice A describes a secured bond. Choice C is incorrect; corporate debentures are not government-backed.",
  },

  // ---- Investment Funds ----
  {
    id: "sie-fund-q1", examSlug: "sie", topicId: "funds", topicName: "Investment Funds", difficulty: 1,
    stem: "Open-end mutual fund shares are priced using:",
    choices: ["Continuous intraday market prices", "Forward pricing at the next-computed NAV", "A fixed price set at issuance"],
    answerIndex: 1,
    explanation: "Open-end funds use forward pricing: orders fill at the next NAV calculated (typically once daily after close). Choice A describes ETFs/closed-end funds trading on an exchange. Choice C is false; NAV changes daily with the portfolio.",
  },
  {
    id: "sie-fund-q2", examSlug: "sie", topicId: "funds", topicName: "Investment Funds", difficulty: 2,
    stem: "Class C mutual fund shares are characterized by:",
    choices: ["A front-end load and breakpoints", "A level load with a higher ongoing 12b-1 fee and no front load", "No fees of any kind"],
    answerIndex: 1,
    explanation: "Class C shares charge a level load — a higher ongoing 12b-1 fee — with no front-end sales charge, which can make them costly for long holding periods. Choice A describes Class A shares. Choice C is false; all share classes have fees.",
  },
  {
    id: "sie-fund-q3", examSlug: "sie", topicId: "funds", topicName: "Investment Funds", difficulty: 2,
    stem: "Breakpoints on Class A mutual fund shares provide:",
    choices: ["Higher commissions for the rep", "Reduced sales charges for larger investment amounts", "Guaranteed returns"],
    answerIndex: 1,
    explanation: "Breakpoints lower the front-end sales charge as the investment amount rises. Deliberately keeping a purchase just below a breakpoint to earn more commission ('breakpoint selling') is prohibited. Choice A is the abuse, not the purpose. Choice C is never true.",
  },
  {
    id: "sie-fund-q4", examSlug: "sie", topicId: "funds", topicName: "Investment Funds", difficulty: 2,
    stem: "Unlike an open-end fund, a closed-end fund:",
    choices: ["Always trades at NAV", "Issues a fixed number of shares that trade on an exchange at a market price (premium or discount to NAV)", "Can issue unlimited new shares daily"],
    answerIndex: 1,
    explanation: "A closed-end fund issues a fixed share count in an IPO; the shares then trade on an exchange at a market price that can be above (premium) or below (discount) NAV. Choice A describes open-end funds. Choice C also describes open-end funds, which continuously issue/redeem.",
  },
  {
    id: "sie-fund-q5", examSlug: "sie", topicId: "funds", topicName: "Investment Funds", difficulty: 3,
    stem: "A Class A fund has a NAV of $9.50 and a 5% sales charge. Its public offering price (POP) is closest to:",
    choices: ["$9.98", "$10.00", "$9.03"],
    answerIndex: 1,
    explanation: "POP = NAV ÷ (1 − sales charge) = $9.50 ÷ 0.95 = $10.00, of which $0.50 (5%) is the sales charge. Choice A adds 5% of NAV instead of grossing up. Choice C subtracts the charge, which is backwards.",
  },

  // Options Basics
  {
    id: "sie-opt-q1", examSlug: "sie", topicId: "options", topicName: "Options Basics", difficulty: 1,
    stem: "An investor who buys a call option is expressing what market view?",
    choices: ["Bullish", "Bearish", "Neutral"],
    answerIndex: 0,
    explanation: "A long call profits when the stock rises above the strike, so the call buyer is bullish. A put buyer would be bearish. The call seller (writer) takes the opposite, bearish-to-neutral view, hoping the option expires worthless so they keep the premium.",
  },
  {
    id: "sie-opt-q2", examSlug: "sie", topicId: "options", topicName: "Options Basics", difficulty: 1,
    stem: "One standard equity option contract covers how many shares of the underlying stock?",
    choices: ["10", "100", "1,000"],
    answerIndex: 1,
    explanation: "Each standard equity option contract represents 100 shares, so a $3 premium costs $300 total. This multiplier is essential for every options calculation on the exam — premiums and intrinsic values are quoted per share but settle per 100-share contract.",
  },
  {
    id: "sie-opt-q3", examSlug: "sie", topicId: "options", topicName: "Options Basics", difficulty: 2,
    stem: "A call option has a $40 strike while the stock trades at $46. What is the call's intrinsic value?",
    choices: ["$0", "$6", "$46"],
    answerIndex: 1,
    explanation: "A call's intrinsic value is stock price minus strike when in-the-money: $46 − $40 = $6. The call is in-the-money because the stock is above the strike. Any premium above $6 would be time value, which decays to zero by expiration. Choice A would apply only if the option were at- or out-of-the-money.",
  },
  {
    id: "sie-opt-q4", examSlug: "sie", topicId: "options", topicName: "Options Basics", difficulty: 2,
    stem: "Which option position carries theoretically unlimited risk?",
    choices: ["Long call", "Long put", "Uncovered (naked) short call"],
    answerIndex: 2,
    explanation: "An uncovered short call obligates the writer to deliver shares at the strike no matter how high the stock climbs, so the loss is theoretically unlimited. A long call (A) and long put (B) each risk only the premium paid. This asymmetry — buyers risk the premium, naked call writers risk everything — is a core SIE point.",
  },
  {
    id: "sie-opt-q5", examSlug: "sie", topicId: "options", topicName: "Options Basics", difficulty: 2,
    stem: "An investor owns stock and writes a call against it to earn premium income. This strategy is a:",
    choices: ["Protective put", "Covered call", "Naked call"],
    answerIndex: 1,
    explanation: "Writing a call against stock you already own is a covered call: it generates premium income in exchange for capping upside above the strike. A protective put (A) instead buys a put as downside insurance. A naked call (C) is written WITHOUT owning the stock, which is the unlimited-risk version.",
  },

  // Municipal Securities
  {
    id: "sie-mun-q1", examSlug: "sie", topicId: "munis", topicName: "Municipal Securities", difficulty: 1,
    stem: "A municipal bond backed by the issuer's full faith, credit, and taxing power is a:",
    choices: ["Revenue bond", "General obligation bond", "Industrial development bond"],
    answerIndex: 1,
    explanation: "A general obligation (GO) bond is repaid from the issuer's taxing power, making it relatively safe and usually requiring voter approval. A revenue bond (A) is backed only by a specific project's income and carries more risk. Industrial development bonds (C) are a private-activity revenue type, not tax-power-backed.",
  },
  {
    id: "sie-mun-q2", examSlug: "sie", topicId: "munis", topicName: "Municipal Securities", difficulty: 2,
    stem: "A municipal bond yields 3.5%. For an investor in the 30% tax bracket, the taxable-equivalent yield is closest to:",
    choices: ["2.45%", "4.55%", "5.00%"],
    answerIndex: 2,
    explanation: "Taxable-equivalent yield = muni yield ÷ (1 − tax rate) = 3.5% ÷ (1 − 0.30) = 3.5% ÷ 0.70 = 5.0%. The investor would need a 5% taxable yield to match the tax-free 3.5% muni. Choice A mistakenly multiplies by the bracket (lowering the yield); the exemption raises, not lowers, the equivalent yield.",
  },
  {
    id: "sie-mun-q3", examSlug: "sie", topicId: "munis", topicName: "Municipal Securities", difficulty: 1,
    stem: "Interest from a typical municipal bond is generally exempt from which tax?",
    choices: ["Federal income tax", "State sales tax", "Capital gains tax on price appreciation"],
    answerIndex: 0,
    explanation: "Municipal interest is generally exempt from federal income tax (and often state tax for in-state buyers). It is not a sales-tax matter (B). And while the INTEREST is exempt, any capital GAIN from selling a muni above its cost is still taxable (C) — the exemption covers interest, not price appreciation.",
  },
  {
    id: "sie-mun-q4", examSlug: "sie", topicId: "munis", topicName: "Municipal Securities", difficulty: 2,
    stem: "Why are municipal bonds generally a poor choice inside a traditional IRA?",
    choices: ["IRAs cannot hold bonds", "The account is already tax-sheltered, wasting the exemption", "Munis are too risky for retirement"],
    answerIndex: 1,
    explanation: "A traditional IRA is already tax-deferred, so the muni's federal tax exemption provides no extra benefit there — the investor gives up yield for an exemption they can't use. IRAs can hold bonds (A is false), and munis aren't inherently too risky (C). Put higher-yielding taxable bonds in the IRA and munis in taxable accounts.",
  },
  {
    id: "sie-mun-q5", examSlug: "sie", topicId: "munis", topicName: "Municipal Securities", difficulty: 1,
    stem: "The disclosure document for a new municipal bond issue is called the:",
    choices: ["Prospectus", "Official statement", "Red herring"],
    answerIndex: 1,
    explanation: "Municipalities provide an official statement, the muni equivalent of a corporate prospectus. The term 'prospectus' (A) applies to corporate registered offerings, and a 'red herring' (C) is a preliminary corporate prospectus. Munis are largely exempt from the 1933 Act's registration but still disclose via the official statement.",
  },

  // Customer Accounts
  {
    id: "sie-acc-q1", examSlug: "sie", topicId: "accounts", topicName: "Customer Accounts", difficulty: 2,
    stem: "In a joint account titled JTWROS, what happens to a deceased owner's share?",
    choices: ["It passes to the surviving owner(s)", "It passes to the deceased's estate", "The account is frozen permanently"],
    answerIndex: 0,
    explanation: "Joint tenants with right of survivorship (JTWROS) means a deceased owner's share automatically passes to the surviving owner(s), bypassing the estate. Tenants in common (B) is the registration where the share goes to the estate. The account is not permanently frozen (C); it transitions to the survivor.",
  },
  {
    id: "sie-acc-q2", examSlug: "sie", topicId: "accounts", topicName: "Customer Accounts", difficulty: 2,
    stem: "A registered rep wants to choose the security and amount for a customer's trades without prior approval each time. What is required?",
    choices: ["Nothing beyond a verbal okay", "Prior written discretionary authority", "Only principal approval"],
    answerIndex: 1,
    explanation: "Deciding the security, amount, or action makes an order discretionary, which requires PRIOR WRITTEN authorization from the customer (plus principal approval and heightened supervision). A verbal okay (A) is insufficient. Principal approval alone (C) doesn't grant discretion — the written customer authorization is the key requirement.",
  },
  {
    id: "sie-acc-q3", examSlug: "sie", topicId: "accounts", topicName: "Customer Accounts", difficulty: 1,
    stem: "Which account requires the customer to sign a margin agreement and a hypothecation agreement?",
    choices: ["A cash account", "A margin account", "A custodial account"],
    answerIndex: 1,
    explanation: "A margin account lets the customer borrow from the firm, so it requires a margin agreement and a hypothecation agreement (pledging securities as collateral). A cash account (A) requires full payment and no such borrowing documents. A custodial account (C) is about ownership for a minor, not margin borrowing.",
  },
  {
    id: "sie-acc-q4", examSlug: "sie", topicId: "accounts", topicName: "Customer Accounts", difficulty: 2,
    stem: "Which statement about a Roth IRA is correct?",
    choices: ["Contributions are tax-deductible", "Qualified withdrawals are tax-free with no lifetime RMDs", "It requires distributions starting in the early 70s"],
    answerIndex: 1,
    explanation: "A Roth IRA is funded with after-tax dollars, so qualified withdrawals are entirely tax-free and there are no required minimum distributions during the owner's lifetime. Contributions are NOT deductible (A — that's the traditional IRA). Lifetime RMDs (C) apply to traditional IRAs, not Roths.",
  },
  {
    id: "sie-acc-q5", examSlug: "sie", topicId: "accounts", topicName: "Customer Accounts", difficulty: 1,
    stem: "A withdrawal from a traditional IRA before age 59½ is generally subject to:",
    choices: ["No penalty", "A 10% penalty plus ordinary income tax", "Only a 10% penalty, no tax"],
    answerIndex: 1,
    explanation: "Early withdrawals from a traditional IRA before 59½ generally incur a 10% penalty ON TOP of ordinary income tax on the distribution, absent an exception. Choice A ignores the penalty; choice C forgets that traditional IRA withdrawals are also taxed as ordinary income because the contributions were pre-tax.",
  },

  // Economic Factors
  {
    id: "sie-eco-q1", examSlug: "sie", topicId: "economics", topicName: "Economic Factors", difficulty: 1,
    stem: "A recession is commonly defined as:",
    choices: ["One quarter of declining GDP", "Two consecutive quarters of declining real GDP", "Any rise in unemployment"],
    answerIndex: 1,
    explanation: "The classic rule of thumb for a recession is two consecutive quarters of declining real GDP. A single quarter (A) is not enough, and rising unemployment alone (C) — a lagging indicator — doesn't define a recession. A prolonged, severe decline is termed a depression.",
  },
  {
    id: "sie-eco-q2", examSlug: "sie", topicId: "economics", topicName: "Economic Factors", difficulty: 2,
    stem: "Open market operations — the buying and selling of Treasury securities — are a tool of:",
    choices: ["Fiscal policy", "Monetary policy", "Tax policy"],
    answerIndex: 1,
    explanation: "Open market operations are the Federal Reserve's primary monetary-policy tool: buying Treasuries injects money and lowers rates; selling drains money and raises rates. Fiscal policy (A) and tax policy (C) are controlled by Congress and the President through spending and taxation, not the Fed.",
  },
  {
    id: "sie-eco-q3", examSlug: "sie", topicId: "economics", topicName: "Economic Factors", difficulty: 2,
    stem: "Which is classified as a LEADING economic indicator?",
    choices: ["Unemployment rate", "Building permits", "Corporate profits"],
    answerIndex: 1,
    explanation: "Building permits turn before the broader economy, making them a leading indicator. Unemployment (A) and corporate profits (C) are lagging indicators that turn after the economy has moved. The exam frequently asks you to sort indicators into leading, coincident, and lagging.",
  },
  {
    id: "sie-eco-q4", examSlug: "sie", topicId: "economics", topicName: "Economic Factors", difficulty: 2,
    stem: "If the Federal Reserve wants to stimulate a slowing economy, it will most likely:",
    choices: ["Buy securities to lower interest rates", "Sell securities to raise interest rates", "Raise the reserve requirement"],
    answerIndex: 0,
    explanation: "To stimulate, the Fed eases policy: buying securities injects money into the banking system and pushes interest rates down, encouraging borrowing and spending. Selling securities (B) and raising reserve requirements (C) are tightening moves that restrain the economy — the opposite of stimulus.",
  },
  {
    id: "sie-eco-q5", examSlug: "sie", topicId: "economics", topicName: "Economic Factors", difficulty: 1,
    stem: "Inflation is measured most commonly by which index?",
    choices: ["The Dow Jones Industrial Average", "The Consumer Price Index (CPI)", "The federal funds rate"],
    answerIndex: 1,
    explanation: "The Consumer Price Index (CPI) tracks the average change in prices of a basket of consumer goods and is the standard inflation gauge. The Dow (A) measures stock prices, and the federal funds rate (C) is an interest rate set in the money market, not an inflation measure.",
  },

  // Suitability & Recommendations
  {
    id: "sie-sui-q1", examSlug: "sie", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 1,
    stem: "Which investment objective best matches a recommendation of high-grade bonds and dividend-paying stocks?",
    choices: ["Speculation", "Income", "Aggressive growth"],
    answerIndex: 1,
    explanation: "High-grade bonds and dividend payers generate steady cash flow, fitting an income objective. Speculation (A) points to options and volatile securities; aggressive growth (C) points to higher-risk equities. Matching products to the stated objective is the core of suitability.",
  },
  {
    id: "sie-sui-q2", examSlug: "sie", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 2,
    stem: "Excessive trading in a customer's account primarily to generate commissions is called:",
    choices: ["Churning", "Front running", "Breakpoint selling"],
    answerIndex: 0,
    explanation: "Churning is excessive trading driven by the rep's commission interest rather than the customer's benefit, and it violates the quantitative-suitability prong. Front running (B) is trading ahead of a customer's order. Breakpoint selling (C) is steering purchases to avoid mutual-fund discounts — both prohibited, but distinct from churning.",
  },
  {
    id: "sie-sui-q3", examSlug: "sie", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 2,
    stem: "The SEC standard requiring broker-dealers to put retail customers' interests first when making recommendations is:",
    choices: ["The suitability rule", "Regulation Best Interest (Reg BI)", "The prudent investor rule"],
    answerIndex: 1,
    explanation: "Regulation Best Interest (Reg BI) raises the bar above mere suitability, requiring broker-dealers to act in the retail customer's best interest with care, disclosure, conflict, and compliance obligations. The suitability rule (A) is the older, lower FINRA standard. The prudent investor rule (C) governs fiduciaries like trustees, not BD recommendations specifically.",
  },
  {
    id: "sie-sui-q4", examSlug: "sie", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 2,
    stem: "Diversification across many stocks reduces which type of risk?",
    choices: ["Systematic (market) risk", "Unsystematic (company-specific) risk", "Interest-rate risk"],
    answerIndex: 1,
    explanation: "Diversification reduces unsystematic risk — the risk tied to a single company or industry — by spreading exposure. It cannot remove systematic (market-wide) risk (A), which affects all securities. Interest-rate risk (C) is a systematic factor that diversification across stocks does not eliminate.",
  },
  {
    id: "sie-sui-q5", examSlug: "sie", topicId: "suitability", topicName: "Suitability & Recommendations", difficulty: 3,
    stem: "A customer says they want aggressive growth, but their finances show little income, no savings, and an immediate need for the money. The rep should:",
    choices: ["Follow the stated willingness and recommend aggressive growth", "Let the lower financial ability to take risk govern the recommendation", "Refuse to open the account"],
    answerIndex: 1,
    explanation: "When a customer's willingness to take risk conflicts with their financial ability to bear it, the more conservative ability generally governs a suitable recommendation — here, limited income and an immediate need argue against aggressive growth. Simply following stated willingness (A) ignores the ability constraint, and refusing the account (C) is unwarranted.",
  },

  // Issuing & Underwriting
  {
    id: "sie-und-q1", examSlug: "sie", topicId: "underwriting", topicName: "Issuing & Underwriting", difficulty: 1,
    stem: "The Securities Act of 1933 is primarily concerned with:",
    choices: ["Secondary-market trading rules", "Disclosure for new securities issues", "Regulating investment advisers"],
    answerIndex: 1,
    explanation: "The Securities Act of 1933 governs the issuance of NEW securities and centers on disclosure — registration and a prospectus so investors can make informed decisions. Secondary-market trading (A) is the domain of the Securities Exchange Act of 1934. Adviser regulation (C) falls under the Investment Advisers Act of 1940.",
  },
  {
    id: "sie-und-q2", examSlug: "sie", topicId: "underwriting", topicName: "Issuing & Underwriting", difficulty: 2,
    stem: "During the cooling-off period, a preliminary prospectus (red herring) may be used to:",
    choices: ["Accept orders and payment", "Gather non-binding indications of interest", "Confirm final pricing only"],
    answerIndex: 1,
    explanation: "During the cooling-off period the red herring circulates to gather non-binding indications of interest; firms may NOT accept orders or money yet. Choice A is prohibited until the registration is effective. The final price (C) isn't set in the preliminary prospectus, which omits final price and is used precisely to gauge demand.",
  },
  {
    id: "sie-und-q3", examSlug: "sie", topicId: "underwriting", topicName: "Issuing & Underwriting", difficulty: 2,
    stem: "In a firm-commitment underwriting, who bears the risk of unsold shares?",
    choices: ["The issuer", "The underwriter", "The customers"],
    answerIndex: 1,
    explanation: "In a firm commitment the underwriter buys the entire issue and resells it, so the underwriter bears the risk of any shares it cannot sell. In a best-efforts deal the issuer keeps that risk (A) because the underwriter only agrees to try. Customers (C) never bear unsold-inventory risk in an underwriting.",
  },
  {
    id: "sie-und-q4", examSlug: "sie", topicId: "underwriting", topicName: "Issuing & Underwriting", difficulty: 1,
    stem: "When the SEC declares a registration effective, it means the SEC has:",
    choices: ["Approved the security as a good investment", "Confirmed the disclosure appears adequate", "Guaranteed against loss"],
    answerIndex: 1,
    explanation: "SEC review confirms that required disclosures appear complete; it never approves the merits of a security or guarantees against loss. Claiming SEC 'approval' (A) or any guarantee (C) is a prohibited misrepresentation. The investor still bears all investment risk.",
  },
  {
    id: "sie-und-q5", examSlug: "sie", topicId: "underwriting", topicName: "Issuing & Underwriting", difficulty: 2,
    stem: "Which is an example of an exempt security under the Securities Act of 1933?",
    choices: ["A corporate IPO", "A U.S. government or municipal bond", "A new technology stock offering"],
    answerIndex: 1,
    explanation: "U.S. government and municipal securities are exempt securities that don't require full 1933 Act registration. A corporate IPO (A) and a new tech stock offering (C) are exactly the kinds of new corporate issues that DO require registration and a prospectus. Exemptions cut cost and time but limit how some securities are sold.",
  },
];

export const sieContent: ExamContent = {
  examSlug: "sie",
  chapters: [...sieDeepChapters, ...chapters],
  questions: [...sieDeepQuestions, ...questions],
};
