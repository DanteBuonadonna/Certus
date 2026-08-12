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
    readingMinutes: 18,
    summary: "Why markets exist, the primary vs secondary market, the players, and the regulatory hierarchy that governs them.",
    intro:
      "The SIE begins where the securities industry itself begins: with the markets that move capital from people who have it to enterprises that need it, and the web of regulators that keep those markets honest. This area is foundational — it gives you the vocabulary and the mental map for everything that follows. Master who issues securities, who trades them, and who watches over the whole system, and the rest of the exam has somewhere to attach.",
    sections: [
      {
        heading: "What a capital market actually does",
        blocks: [
          { kind: "p", text: "Strip away the jargon and a capital market solves one problem: the people who have money are almost never the same people who have a use for it. A retiree in Ohio has savings but no factory to build. A manufacturer in Ohio has a factory to build but no savings. Without a mechanism to connect them, the retiree's capital sits idle and the factory never gets built. The capital market is that mechanism, and every institution you will study on this exam — exchanges, broker-dealers, regulators, clearing corporations — exists to make that connection cheaper, faster, or safer." },
          { kind: "p", text: "Two properties make the connection work. The first is LIQUIDITY: the ability to convert a holding back into cash quickly and at a predictable price. The second is PRICE DISCOVERY: the continuous process by which many buyers and sellers, each acting on their own information, produce a price that reflects what the asset is collectively believed to be worth. Neither property is automatic. Both are produced by market structure, and both are what regulation is ultimately protecting. When you encounter a rule on this exam and cannot see why it exists, ask which of these two properties it defends." },
          { kind: "p", text: "A useful habit: think of a security as a contract that packages a claim on future cash flows into something transferable. A bond packages a claim on interest and principal. A share packages a residual claim on profits and, usually, a vote. An option packages a claim on the right to transact at a set price. The whole industry is built on making those packages standard enough to trade and honest enough to trust." },
        ],
      },
      {
        heading: "Primary and secondary: follow the money",
        blocks: [
          { kind: "p", text: "The single most reliable way to tell the two markets apart is to ask where the cash goes. In the PRIMARY market, a security is sold for the first time and the proceeds go to the ISSUER. A company doing an initial public offering, a corporation issuing new bonds, a city selling a new municipal deal — in each case the entity that created the security receives the money and uses it to build something. In the SECONDARY market, one investor sells to another and the issuer receives nothing at all. Apple gets no money when you buy Apple shares from another investor on Nasdaq." },
          { kind: "p", text: "This raises an obvious question: if the issuer gets nothing from secondary trading, why does the issuer care about it? Because no rational investor would fund a primary offering if there were no way out. The secondary market is what makes the primary market possible. An investor buys a thirty-year bond willingly only because they know they can sell it in year four if circumstances change. Liquidity in the secondary market lowers the return investors demand in the primary market, which directly lowers the issuer's cost of capital. The two markets are not competitors; one subsidizes the other." },
          { kind: "table", table: { caption: "The two markets, side by side.", headers: ["", "Primary market", "Secondary market"], rows: [["Who receives the proceeds", "The issuer", "The selling investor"], ["What is being sold", "A newly created security", "An already-issued security"], ["Typical example", "IPO, new bond issue", "Buying stock on an exchange"], ["Governing statute", "Securities Act of 1933", "Securities Exchange Act of 1934"], ["Required disclosure", "Prospectus delivery", "Ongoing periodic reporting"]] } },
          { kind: "example", example: { title: "which market is this?", prompt: "A pension fund buys 40,000 newly issued shares directly from a corporation at a negotiated price, and separately buys 10,000 existing shares from another institution without using an exchange. Classify each transaction.", steps: ["Transaction 1: the shares are newly created and the corporation receives the cash. Proceeds flow to the issuer, so this is a PRIMARY market transaction — specifically a private placement.", "Transaction 2: the shares already exist and the money goes to the selling institution, not the company. This is a SECONDARY market transaction.", "The second one is further classified by VENUE: an institution-to-institution trade that bypasses an exchange entirely is the FOURTH market. (The THIRD market is exchange-listed stock traded over the counter.)"], answer: "The first is primary; the second is secondary, and within the secondary market it is a fourth-market trade. Note that 'primary vs secondary' and 'first through fourth market' are two different classifications — the exam tests both, and confusing them is a common error." } },
        ],
      },
      {
        heading: "Who's who, and the distinctions that get tested",
        blocks: [
          { kind: "p", text: "The exam repeatedly tests whether you can separate roles that sound similar. The most important is BROKER versus DEALER. A broker acts as an AGENT: it stands between a buyer and a seller, never owns the security, and is paid a COMMISSION. A dealer acts as a PRINCIPAL: it buys into and sells from its own inventory, takes real ownership risk, and is compensated by the MARKUP or MARKDOWN embedded in the price. The same firm usually does both — hence 'broker-dealer' — but it must disclose on the confirmation which capacity it acted in for each trade, because the conflict of interest is entirely different in each case." },
          { kind: "p", text: "Behind the visible participants sits a layer of infrastructure that the SIE expects you to recognize by name. The TRANSFER AGENT maintains the record of who owns what, issues and cancels certificates, and handles the mechanics of lost or stolen ones. The REGISTRAR audits the transfer agent to make sure the company has not over-issued shares — the two roles are deliberately separated so that no single party can both create records and verify them. The CLEARING CORPORATION nets the day's obligations so that firms settle differences rather than gross amounts, and the DEPOSITORY holds securities in book-entry form so ownership can change without paper moving anywhere." },
          { kind: "table", table: { caption: "Participants and what compensates them.", headers: ["Participant", "Role", "Compensation"], rows: [["Broker", "Agent matching buyer and seller", "Commission"], ["Dealer", "Principal trading own inventory", "Markup / markdown (the spread)"], ["Market maker", "Quotes a continuous two-sided market", "The bid-ask spread"], ["Investment adviser", "Manages assets, gives advice", "Fee (typically % of assets)"], ["Municipal advisor", "Advises municipal issuers", "Fee; owes a fiduciary duty to the issuer"], ["Transfer agent", "Maintains ownership records", "Fee paid by the issuer"]] } },
          { kind: "callout", label: "The distinction the exam loves", body: "A broker-dealer acting as AGENT charges a commission and must disclose it. Acting as PRINCIPAL, it earns a markup and must disclose that capacity too. The firm may not act in both capacities on the same side of the same trade — and 'riskless principal' transactions, where the dealer buys only after receiving the customer order, still require principal-capacity disclosure." },
        ],
      },
      {
        heading: "The plumbing: what happens after you press buy",
        blocks: [
          { kind: "p", text: "An order does not end at execution. Once a trade is agreed, it must be CLEARED — the two sides confirm they agree on what happened — and then SETTLED, meaning securities and cash actually change hands. In the United States this happens through the National Securities Clearing Corporation and the Depository Trust Company, both subsidiaries of DTCC, and almost entirely in book-entry form: no certificates move, only ledger entries change." },
          { kind: "p", text: "The interval between trade date and settlement date matters enough to be tested directly. As of May 28, 2024, regular-way settlement for stocks, corporate bonds, and municipal securities is T+1 — one business day after the trade. This replaced the T+2 standard that had been in place since 2017, and older study materials still carry the wrong number, so be careful about which figure you memorize. Government securities and options settle the NEXT business day as well, while cash-settled trades occur the same day by agreement." },
          { kind: "callout", label: "Settlement, current as of 2024", body: "Regular-way for corporate stock, corporate bonds, and munis: T+1. U.S. government securities and listed options: T+1. Cash settlement: same day. Shortening the cycle reduces the counterparty risk carried between trade and settlement, which is the entire reason regulators pushed for it." },
        ],
      },
      {
        heading: "The regulatory hierarchy",
        blocks: [
          { kind: "p", text: "Regulation of this industry is layered rather than centralized, and knowing which body does what is worth several questions. At the top is the SECURITIES AND EXCHANGE COMMISSION, a federal agency created by the Securities Exchange Act of 1934, with statutory authority over the securities markets and the power to bring civil enforcement actions. The SEC does not directly supervise the day-to-day conduct of every registered representative in the country — it delegates that to SELF-REGULATORY ORGANIZATIONS, which write and enforce detailed conduct rules subject to SEC approval." },
          { kind: "p", text: "FINRA is the SRO that matters most for this exam: formed in 2007 when NASD consolidated with the member-regulation arm of the NYSE, it licenses representatives, administers the SIE itself, writes conduct rules, examines member firms, and disciplines them. The MUNICIPAL SECURITIES RULEMAKING BOARD writes the rules for municipal securities dealers and municipal advisors — but note the trap: the MSRB has NO enforcement authority of its own. Its rules are enforced by FINRA for broker-dealers, by bank regulators for bank dealers, and by the SEC." },
          { kind: "figure", figure: { caption: "Figure 1 — The regulatory hierarchy. The SEC (federal) oversees the self-regulatory organizations like FINRA, which in turn write conduct rules for, and discipline, the broker-dealers and registered representatives at the base.", alt: "Pyramid diagram: SEC at top, FINRA and SROs in the middle, broker-dealers and representatives at the base", svg: `<svg viewBox="0 0 460 220" width="100%" style="max-width:460px"><rect x="160" y="22" width="140" height="44" rx="8" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="1.5"/><text x="230" y="42" text-anchor="middle" font-size="12" font-weight="600" fill="var(--text-primary)">SEC</text><text x="230" y="58" text-anchor="middle" font-size="9" fill="var(--text-secondary)">federal regulator</text><rect x="110" y="92" width="240" height="44" rx="8" fill="var(--ats-green-bg)" stroke="var(--ats-green)" stroke-width="1.5"/><text x="230" y="112" text-anchor="middle" font-size="12" font-weight="600" fill="var(--text-primary)">FINRA &amp; other SROs</text><text x="230" y="128" text-anchor="middle" font-size="9" fill="var(--text-secondary)">conduct rules, licensing, enforcement</text><rect x="60" y="162" width="340" height="44" rx="8" fill="var(--bg-card)" stroke="var(--border-strong)" stroke-width="1.5"/><text x="230" y="182" text-anchor="middle" font-size="12" font-weight="600" fill="var(--text-primary)">Broker-dealers &amp; representatives</text><text x="230" y="198" text-anchor="middle" font-size="9" fill="var(--text-secondary)">the firms and people who serve clients</text><line x1="230" y1="66" x2="230" y2="92" stroke="var(--border-strong)" stroke-width="1.5"/><line x1="230" y1="136" x2="230" y2="162" stroke="var(--border-strong)" stroke-width="1.5"/></svg>` } },
        ],
      },
      {
        heading: "The statutes that built the system",
        blocks: [
          { kind: "p", text: "Securities regulation in the United States is a response to the 1929 crash and the abuses that preceded it, and the two foundational statutes divide the territory cleanly. The SECURITIES ACT OF 1933 governs NEW issues: it requires a registration statement filed with the SEC and delivery of a prospectus to buyers, on the theory that investors can protect themselves if forced disclosure gives them the facts. The SECURITIES EXCHANGE ACT OF 1934 governs everything after the sale — exchanges, broker-dealers, ongoing corporate reporting, manipulation and insider trading — and it created the SEC to administer both." },
          { kind: "p", text: "A memory device that survives exam pressure: the 1933 Act is the PAPER act (the prospectus) and the 1934 Act is the PEOPLE act (registering the firms and individuals, and policing their conduct). Almost every regulatory question on the SIE resolves to one of these two, with the later statutes filling in specific gaps." },
          { kind: "table", table: { caption: "The statutes an SIE candidate is expected to recognize.", headers: ["Statute", "What it did"], rows: [["Securities Act of 1933", "Registration and prospectus delivery for NEW issues"], ["Securities Exchange Act of 1934", "Created the SEC; governs secondary trading, BDs, exchanges"], ["Trust Indenture Act of 1939", "Requires an indenture and trustee for larger corporate bond issues"], ["Investment Company Act of 1940", "Classifies and regulates funds (face-amount, UIT, management company)"], ["Investment Advisers Act of 1940", "Registration and conduct standards for investment advisers"], ["Securities Investor Protection Act of 1970", "Created SIPC to protect customers of failed broker-dealers"], ["Insider Trading and Securities Fraud Enforcement Act of 1988", "Raised penalties; up to three times the profit gained or loss avoided"], ["Sarbanes-Oxley Act of 2002", "Corporate governance, officer certification, internal control reporting"], ["Dodd-Frank Act of 2010", "Post-crisis reform; systemic risk oversight, derivatives regulation"]] } },
        ],
      },
      {
        heading: "What SIPC covers — and what it does not",
        blocks: [
          { kind: "p", text: "The Securities Investor Protection Corporation is one of the most misunderstood items on the exam, and the misunderstanding is always in the same direction. SIPC protects customers when a BROKER-DEALER FAILS and customer assets are missing. It restores securities and cash up to $500,000 per separate customer, of which no more than $250,000 may be cash. It is not a government agency and it is not an insurer of investment performance." },
          { kind: "p", text: "What SIPC emphatically does NOT do is protect you from losing money. If you buy a stock at $80 and it falls to $3, that is market risk, you accepted it knowingly, and no coverage applies. The distinction being tested is between the FAILURE OF THE INTERMEDIARY holding your assets and the FAILURE OF THE INVESTMENT itself. Only the first is covered. Commodities futures and fixed annuities generally fall outside SIPC coverage as well." },
          { kind: "example", example: { title: "applying the SIPC limits", prompt: "A customer's account at a failed broker-dealer holds $380,000 in securities and $270,000 in cash. What is covered?", steps: ["The overall per-customer ceiling is $500,000 combined.", "Within that ceiling, cash is separately capped at $250,000 — so $250,000 of the $270,000 cash is protected and $20,000 is not.", "Securities of $380,000 plus covered cash of $250,000 = $630,000, which exceeds the $500,000 ceiling.", "Coverage is therefore capped at $500,000 total; the remaining $150,000 becomes a general claim against the estate of the failed firm."], answer: "$500,000 is protected. The customer is a general creditor for the excess — which is why the cash sub-limit and the overall limit must both be applied, in that order." } },
          { kind: "callout", label: "Do not confuse SIPC with FDIC", body: "FDIC insures BANK DEPOSITS against bank failure. SIPC protects BROKERAGE CUSTOMERS against broker-dealer failure. Neither one protects against investment losses, and a security purchased at a bank is not an FDIC-insured deposit — a disclosure requirement that exists precisely because customers assume otherwise." },
        ],
      },
      {
        heading: "The economic backdrop every security sits in",
        blocks: [
          { kind: "p", text: "No security is priced in a vacuum. The business cycle — expansion, peak, contraction, trough — moves corporate earnings and therefore equity values, while interest rates move bond prices directly and in the opposite direction. When prevailing rates rise, an existing bond paying a fixed coupon becomes less attractive relative to newly issued bonds, so its price must fall until its yield is competitive. That inverse relationship between rates and bond prices is the single most heavily tested economic fact on the SIE." },
          { kind: "p", text: "Policy acts on the cycle through two levers you must keep separate. MONETARY policy is the Federal Reserve's: the discount rate, open market operations, and reserve requirements, aimed at the money supply and the cost of credit. FISCAL policy is Congress's: taxation and government spending. Both can be expansionary or contractionary, and the exam frequently pairs one of each in a single question to see whether you can identify which authority is acting and in which direction." },
          { kind: "bullets", items: ["LEADING indicators turn before the economy does — building permits, new orders, stock prices, initial jobless claims.", "COINCIDENT indicators turn with it — industrial production, personal income, nonfarm payrolls.", "LAGGING indicators turn after — the unemployment rate, the average duration of unemployment, corporate profits.", "Two consecutive quarters of declining real GDP is the conventional shorthand for a recession.", "Inflation erodes real returns; it is the reason a nominal yield and a real yield are different numbers."] },
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
    readingMinutes: 18,
    summary: "The major product types from stocks to options, and the distinct kinds of risk every investor faces.",
    intro:
      "This is the largest content area on the SIE, and for good reason: a representative must understand what they're selling. The exam surveys the full product shelf — equity, debt, pooled vehicles, options, and more — and pairs it with a clear taxonomy of risk. The organizing idea is the trade-off between risk and return: products line up along a spectrum, and the job is to match a product's risk profile to an investor's needs.",
    sections: [
      {
        heading: "How to hold the product universe in your head",
        blocks: [
          { kind: "p", text: "Products and Risks is the largest section of the SIE, and candidates who try to memorize each product as an isolated flashcard drown in it. The efficient approach is to see that almost every security answers the same three questions differently: what claim does the holder have, who is obligated to pay, and what happens if things go badly. Debt gives you a contractual claim on interest and principal, with the issuer legally obligated and the holder ranking ahead of owners in bankruptcy. Equity gives you a residual claim with nobody obligated to pay anything, in exchange for unlimited upside. Everything else is a variation, a package, or a derivative of those two." },
          { kind: "p", text: "Keep one hierarchy permanently loaded: in a liquidation, secured creditors are paid first, then unsecured creditors including bondholders, then preferred stockholders, then common stockholders last. That single ordering answers a surprising share of questions about relative risk and why a given security yields what it does. If a product sits lower in the waterfall, it must offer more expected return, or nobody would hold it." },
        ],
      },
      {
        heading: "Equity: common, preferred, and the instruments around them",
        blocks: [
          { kind: "p", text: "COMMON STOCK is ownership. It carries voting rights, the right to receive dividends if and only if the board declares them, a preemptive right in some cases to maintain proportional ownership in a new issue, and a residual claim on assets in liquidation. Nothing about a dividend is promised; a company may pay one for forty years and stop without breaching any obligation. That is precisely the risk common shareholders accept in exchange for participating without limit in the company's growth." },
          { kind: "p", text: "PREFERRED STOCK is equity that behaves like debt. It pays a fixed stated dividend, ranks ahead of common for both dividends and liquidation proceeds, and normally carries no vote. Because its payment is fixed, its price moves inversely with interest rates much like a bond's. The variants are heavily tested: CUMULATIVE preferred accumulates any skipped dividends, and all arrears must be paid before common receives anything. PARTICIPATING preferred may receive more than its stated rate when the company does well. CONVERTIBLE preferred can be exchanged for common at a set ratio. CALLABLE preferred can be redeemed by the issuer, which caps the holder's upside." },
          { kind: "example", example: { title: "cumulative preferred in arrears", prompt: "A 6% cumulative preferred ($100 par) skipped its dividend for two years. Before common shareholders get anything, how much must be paid per share?", steps: ["Annual dividend = 6% x $100 par = $6 per share.", "Two years were skipped, so arrears = 2 x $6 = $12.", "The current year's $6 is also owed before common is paid.", "Total = $12 arrears + $6 current = $18."], answer: "$18 per share. If the preferred had been NON-cumulative, the two skipped years would simply be gone and only the current $6 would be owed — that contrast is the whole point of the question." } },
          { kind: "bullets", items: ["RIGHTS are short-term, issued to existing shareholders, and priced BELOW the current market so they have immediate value.", "WARRANTS are long-term, often attached to a bond offering as a sweetener, and priced ABOVE the current market so they have no immediate intrinsic value.", "ADRs let U.S. investors hold foreign shares through a domestic bank; the holder still bears currency risk and often has no voting rights.", "A stock SPLIT changes share count and price proportionally, leaving total value unchanged."] },
        ],
      },
      {
        heading: "Debt: the price-yield relationship that everything rests on",
        blocks: [
          { kind: "p", text: "A bond is a loan. The issuer owes a stated coupon and the return of par at maturity, and that obligation is contractual — failure to pay is default. The single fact you must internalize is that bond prices and prevailing interest rates move in OPPOSITE directions. If a bond pays a fixed $50 a year and new bonds start paying $70, nobody will buy the old bond at par; its price must fall until the $50 represents a competitive return on the reduced price." },
          { kind: "p", text: "That mechanism produces the discount and premium relationships the exam tests relentlessly. When a bond trades at a DISCOUNT (below par), its current yield and yield to maturity are both ABOVE its nominal coupon rate, because the buyer collects the coupon and also gains the pull to par at maturity. When it trades at a PREMIUM, the ordering reverses: nominal is highest, then current yield, then yield to maturity, because the buyer will lose the premium as the bond pulls down to par." },
          { kind: "formula", formula: { label: "Current yield", expr: "Current yield = annual coupon ÷ current market price", note: "Uses only the coupon and price — it ignores any gain or loss at maturity, which is why yield to maturity is the more complete measure." } },
          { kind: "example", example: { title: "discount bond yields", prompt: "A bond with a 5% coupon ($1,000 par) trades at $950. Find the current yield and state how YTM compares.", steps: ["Annual coupon = 5% x $1,000 = $50.", "Current yield = $50 ÷ $950 = 5.26%.", "The bond is at a DISCOUNT, so the holder also gains $50 by holding to par at maturity.", "Yield to maturity therefore exceeds the 5.26% current yield, which itself exceeds the 5% nominal."], answer: "Current yield ≈ 5.26%; the ordering is nominal 5% < current 5.26% < YTM. For a PREMIUM bond the entire ordering flips — memorize the direction, not the numbers." } },
          { kind: "table", table: { caption: "Government and agency issues — who actually guarantees them.", headers: ["Security", "Maturity / form", "Backing"], rows: [["Treasury bill", "1 year or less, issued at a discount, no coupon", "Full faith and credit of the U.S."], ["Treasury note", "2-10 years, semiannual coupon", "Full faith and credit"], ["Treasury bond", "Over 10 years, semiannual coupon", "Full faith and credit"], ["TIPS", "Principal adjusts with CPI", "Full faith and credit"], ["STRIPS", "Zero coupon; no reinvestment risk", "Full faith and credit"], ["Ginnie Mae", "Mortgage pass-through", "EXPLICIT full faith and credit"], ["Fannie Mae / Freddie Mac", "Mortgage-backed", "GSE — implied only, NOT explicit"]] } },
          { kind: "callout", label: "The agency trap", body: "Ginnie Mae is a government corporation and its securities carry the EXPLICIT guarantee of the United States. Fannie Mae and Freddie Mac are government-sponsored ENTERPRISES; despite universal assumptions of support, their obligations carry no explicit federal guarantee. The exam tests this distinction directly." },
        ],
      },
      {
        heading: "Packaged products: who prices them, and when",
        blocks: [
          { kind: "p", text: "Investment companies pool money so that a small investor can own a diversified portfolio. The three legal types under the Investment Company Act of 1940 are face-amount certificate companies, unit investment trusts, and management companies — and management companies split into OPEN-END (mutual funds) and CLOSED-END. The distinction that generates questions is pricing. An open-end fund continuously issues and redeems shares at NET ASSET VALUE, computed once per day, and orders receive the NEXT computed NAV under forward pricing. A closed-end fund issues a fixed number of shares that then trade on an exchange at whatever price supply and demand set, which may be above or below NAV." },
          { kind: "p", text: "ETFs sit alongside these: they trade intraday on an exchange like a closed-end fund, but a creation-and-redemption mechanism with authorized participants keeps their market price closely tied to NAV. UNIT INVESTMENT TRUSTS hold a fixed, unmanaged portfolio and terminate on a set date; they have no board and no investment adviser making ongoing decisions. That absence of management is what distinguishes a UIT from a fund." },
          { kind: "formula", formula: { label: "Public offering price from NAV", expr: "POP = NAV ÷ (1 − sales charge %)", note: "Divide, don't multiply. The sales charge is a percentage OF THE POP, not of the NAV — the most common arithmetic error on this topic." } },
          { kind: "example", example: { title: "POP from NAV and load", prompt: "A Class A fund has a NAV of $19.05 and a 5% sales charge. What is the public offering price?", steps: ["The load is 5% of the POP, not 5% of the NAV, so the NAV represents the other 95%.", "POP = NAV ÷ (1 − 0.05) = $19.05 ÷ 0.95.", "POP = $20.05.", "Check: the charge is $20.05 − $19.05 = $1.00, and $1.00 ÷ $20.05 = 5% of the POP. Correct."], answer: "$20.05. Multiplying $19.05 by 1.05 gives $20.00 — close enough to look right and wrong for the reason the question exists." } },
          { kind: "bullets", items: ["BREAKPOINTS reduce the sales charge at stated investment levels; failing to inform a customer who is just below one is the prohibited practice of breakpoint selling.", "A LETTER OF INTENT lets an investor claim a breakpoint now by committing to invest the total within 13 months.", "RIGHTS OF ACCUMULATION count existing holdings toward the next breakpoint.", "A REIT passes through income but is NOT an investment company; it must distribute at least 90% of taxable income.", "A DPP passes through both income AND losses to investors; the general partner bears unlimited liability."] },
        ],
      },
      {
        heading: "Options: the four positions and what each one wants",
        blocks: [
          { kind: "p", text: "An option is a contract, normally covering 100 shares, granting a right to the buyer and imposing an obligation on the seller. A CALL gives its owner the right to BUY at the strike price; a PUT gives its owner the right to SELL at the strike. Because there are two contract types and two sides to each, there are exactly four positions, and each has a distinct market opinion. Long call: bullish. Short call: bearish or neutral. Long put: bearish. Short put: bullish or neutral." },
          { kind: "p", text: "The asymmetry between buyer and seller is the heart of options risk. A buyer's maximum loss is the premium paid — nothing more, ever. A seller receives the premium and takes on obligation: a naked call writer faces theoretically unlimited loss, because there is no ceiling on how high a stock can rise. That asymmetry is why writing uncovered calls carries the strictest suitability and margin requirements in the retail business." },
          { kind: "formula", formula: { label: "Breakeven at expiration", expr: "Long call BE = strike + premium     |     Long put BE = strike − premium", note: "Call up, put down. The same figures are the breakevens for the corresponding short positions, since options are a zero-sum contract between the two sides." } },
          { kind: "example", example: { title: "intrinsic value versus profit", prompt: "An investor owns a call with a $50 strike while the stock trades at $58. The call cost a $5 premium. Find intrinsic value and the profit at expiration.", steps: ["Intrinsic value for a call = stock − strike = $58 − $50 = $8. The option is in-the-money.", "Intrinsic value ignores what was paid; profit does not.", "Profit per share = intrinsic value − premium = $8 − $5 = $3.", "Per contract = $3 x 100 shares = $300.", "Breakeven check: strike $50 + premium $5 = $55, and the stock at $58 is $3 above it. Consistent."], answer: "Intrinsic value is $8; the position nets $3 per share, or $300 per contract. An option can be in-the-money and still lose money — that gap between intrinsic value and profit is exactly what the question is testing." } },
        ],
      },
      {
        heading: "Risk: the division that organizes the whole topic",
        blocks: [
          { kind: "p", text: "Every risk on this exam sorts into one of two buckets, and the sorting matters because only one bucket can be diversified away. SYSTEMATIC risk affects the entire market and cannot be eliminated by holding more securities — market risk, interest rate risk, inflation or purchasing power risk, currency risk, and political risk all belong here. UNSYSTEMATIC risk is specific to one company or industry and CAN be diversified away: business risk, credit or default risk, liquidity risk, regulatory risk, and call risk." },
          { kind: "p", text: "The practical consequence is the one to remember: because unsystematic risk can be eliminated for free simply by diversifying, the market does not compensate investors for bearing it. Expected return is compensation for systematic risk only. That principle explains why a concentrated position in a single stock is considered imprudent — the holder is accepting extra risk for which no additional return is expected." },
          { kind: "table", table: { caption: "Which risks diversification can and cannot solve.", headers: ["Risk", "Type", "What it is"], rows: [["Market", "Systematic", "The whole market declines"], ["Interest rate", "Systematic", "Rates rise, fixed-income prices fall"], ["Inflation / purchasing power", "Systematic", "Real value of fixed payments erodes"], ["Currency", "Systematic", "Exchange rate moves against the holder"], ["Business", "Unsystematic", "This company executes badly"], ["Credit / default", "Unsystematic", "This issuer fails to pay"], ["Liquidity", "Unsystematic", "Cannot sell without a price concession"], ["Call", "Unsystematic", "Issuer redeems early, usually when rates fall"]] } },
          { kind: "callout", label: "Why call risk bites when it does", body: "Issuers call bonds when rates have FALLEN, because they can refinance more cheaply. That is the worst moment for the holder, who must now reinvest the returned principal at the new lower rates. Call risk and reinvestment risk are therefore two faces of the same event." },
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
    readingMinutes: 11,
    summary: "How orders work, when trades settle, the main account types, and the conduct that gets people barred.",
    intro:
      "This area moves from the abstract market to the concrete mechanics a representative handles daily: placing orders, opening accounts, and — crucially — knowing the bright lines you must never cross. It is heavily tested because it is where investor harm actually happens, so the exam cares as much about what you may not do as what you may.",
    sections: [
      {
        heading: "Orders: choosing between certainty of execution and certainty of price",
        blocks: [
          { kind: "p", text: "Every order type is a position on a single tradeoff. You can be certain your order EXECUTES, or you can be certain of the PRICE you get, but not both. A MARKET order guarantees execution and says nothing about price: it fills immediately at the best available price, which in a fast-moving or thin market may be materially worse than the quote you saw. A LIMIT order guarantees price and says nothing about execution: it fills at your limit or better, and if the market never reaches your price it simply does not fill." },
          { kind: "p", text: "STOP orders exist for a different purpose — they are dormant until triggered. A sell stop placed below the market becomes a MARKET order once the stock trades at or through the stop price, which is why a stop does not protect you from a gap: it guarantees you will be sold, not the price at which. A STOP-LIMIT order becomes a LIMIT order when triggered, which protects your price but reintroduces the risk of no fill at all — the very scenario the stop was meant to escape." },
          { kind: "figure", figure: { caption: "Figure 1 — The two core order types. A market order buys certainty of execution; a limit order buys certainty of price. Every other order type is built from these.", alt: "Two panels comparing market orders and limit orders", svg: `<svg viewBox="0 0 460 170" width="100%" style="max-width:460px"><rect x="30" y="30" width="190" height="110" rx="10" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="1.5"/><text x="125" y="56" text-anchor="middle" font-size="12" font-weight="600" fill="var(--text-primary)">Market order</text><text x="125" y="80" text-anchor="middle" font-size="10" fill="var(--text-secondary)">executes immediately</text><text x="125" y="98" text-anchor="middle" font-size="10" fill="var(--text-secondary)">at best available price</text><text x="125" y="120" text-anchor="middle" font-size="9" fill="var(--text-secondary)">speed, not price control</text><rect x="240" y="30" width="190" height="110" rx="10" fill="var(--ats-green-bg)" stroke="var(--ats-green)" stroke-width="1.5"/><text x="335" y="56" text-anchor="middle" font-size="12" font-weight="600" fill="var(--text-primary)">Limit order</text><text x="335" y="80" text-anchor="middle" font-size="10" fill="var(--text-secondary)">fills only at your price</text><text x="335" y="98" text-anchor="middle" font-size="10" fill="var(--text-secondary)">or better — or not at all</text><text x="335" y="120" text-anchor="middle" font-size="9" fill="var(--text-secondary)">price control, not speed</text></svg>` } },
          { kind: "example", example: { title: "why a stop is not a guarantee", prompt: "An investor owns stock at $60 and places a sell stop at $52 to limit losses. Bad news breaks overnight and the stock opens at $41. What happens?", steps: ["The stop is triggered because the stock traded at or through $52.", "Once triggered, a plain stop becomes a MARKET order.", "A market order fills at the best available price, which after the gap is around $41.", "The investor is sold at roughly $41, not $52."], answer: "The order executes near $41. The stop guaranteed that a sale would occur, not the price — which is why stops do not protect against overnight gaps. A stop-LIMIT at $52 would have avoided the bad fill but likely would not have executed at all, leaving the position intact and still falling." } },
        ],
      },
      {
        heading: "Account types and who may actually act",
        blocks: [
          { kind: "p", text: "Opening an account establishes who owns the assets and who is authorized to act, and the exam tests the second question harder than the first. In a JOINT TENANTS WITH RIGHT OF SURVIVORSHIP account, a deceased owner's interest passes automatically to the survivor outside probate. In TENANTS IN COMMON, the deceased's share passes to their estate according to their will — the same two people, a completely different outcome on death." },
          { kind: "p", text: "CUSTODIAL accounts under UTMA or UGMA hold assets for a minor, with one custodian and one minor per account. The gift is IRREVOCABLE, the assets legally belong to the minor from the moment of transfer, and control passes to them outright at the age of majority. The custodian may not trade on margin or engage in speculative strategies, because the standard is prudent management of someone else's property. Discretion in any account — the authority to trade without approving each transaction — requires WRITTEN authorization from the customer before it may be exercised." },
          { kind: "table", table: { caption: "Registration types and what happens on death.", headers: ["Registration", "Who controls", "On death of an owner"], rows: [["Individual", "The owner", "Passes through the estate"], ["JTWROS", "Either owner", "Passes automatically to the survivor"], ["Tenants in common", "Either owner", "Deceased's share goes to their estate"], ["UTMA / UGMA custodial", "The custodian", "Assets belong to the minor throughout"], ["Trust", "The trustee", "Governed by the trust document"]] } },
          { kind: "bullets", items: ["A TRADITIONAL IRA may offer a deductible contribution now; withdrawals are taxed as ordinary income.", "A ROTH IRA is funded with after-tax dollars; qualified withdrawals are entirely tax-free.", "A 401(k) is an employer plan; a 403(b) serves schools and certain nonprofits.", "Early withdrawals before age 59½ generally incur a 10% penalty plus ordinary income tax.", "Under Regulation T, the initial margin requirement for a new equity purchase is 50%."] },
        ],
      },
      {
        heading: "Prohibited activities: the conduct that ends careers",
        blocks: [
          { kind: "p", text: "This material rewards understanding the underlying wrong rather than memorizing labels, because the exam describes conduct and asks you to name it. Almost every prohibited practice is one of three wrongs: trading on information you should not have, putting your compensation ahead of the customer's interest, or creating a false impression of market activity." },
          { kind: "p", text: "INSIDER TRADING is trading on material nonpublic information, and liability extends to anyone who receives and trades on a tip, not merely the original source. CHURNING is excessive trading to generate commissions, judged against the customer's objectives and resources rather than any fixed number of trades. FRONT-RUNNING is trading ahead of a known customer block order. SELLING AWAY is executing securities business outside your firm without its knowledge and approval. COMMINGLING is mixing customer securities with firm assets." },
          { kind: "table", table: { caption: "Manipulation: creating a false picture of the market.", headers: ["Practice", "What it looks like"], rows: [["Painting the tape", "Trading among parties to create the appearance of activity"], ["Matched orders", "Prearranged buy and sell orders that offset each other"], ["Wash trade", "Buying and selling the same security with no change in ownership"], ["Marking the close", "Trading late in the session to influence the closing price"], ["Spreading rumors", "Circulating false information to move a price"]] } },
          { kind: "callout", label: "The penalty that gets tested", body: "Under the Insider Trading and Securities Fraud Enforcement Act of 1988, civil penalties can reach THREE TIMES the profit gained or the loss avoided, and they apply to controlling persons — the firm — as well as the individual. Criminal penalties are separate and additional." },
        ],
      },
      {
        heading: "Anti-money laundering: the numbers to know cold",
        blocks: [
          { kind: "p", text: "The Bank Secrecy Act and the USA PATRIOT Act require every firm to maintain an AML program with a designated compliance officer, ongoing training, independent testing, and a CUSTOMER IDENTIFICATION PROGRAM that verifies identity at account opening. Money laundering itself is conventionally described in three stages: PLACEMENT of illicit cash into the financial system, LAYERING through complex transactions to obscure its origin, and INTEGRATION back into the economy as apparently legitimate funds." },
          { kind: "p", text: "Two reporting thresholds appear constantly and are easily reversed under pressure. A CURRENCY TRANSACTION REPORT is required for cash transactions exceeding $10,000 in a day — a mechanical filing with no judgment involved. A SUSPICIOUS ACTIVITY REPORT is required for suspicious transactions of at least $5,000, and it is a judgment call. Critically, the firm may NOT tell the customer that a SAR has been filed; doing so is itself a violation, called tipping off. STRUCTURING — breaking a large cash transaction into smaller pieces to stay under the CTR threshold — is a federal crime by the customer and a red flag the firm must report." },
          { kind: "bullets", items: ["CTR: cash over $10,000 in a day. Mechanical, no discretion.", "SAR: suspicious activity of $5,000 or more. Requires judgment, and the customer is never told.", "OFAC maintains the Specially Designated Nationals list; firms must screen against it and block prohibited transactions.", "CIP requires name, date of birth, address, and an identification number before the account may trade."] },
        ],
      },
      {
        heading: "Settlement and the mechanics after the trade",
        blocks: [
          { kind: "p", text: "Regular-way settlement is T+1 — one business day after the trade date — for corporate stock, corporate bonds, municipal securities, government securities, and listed options. This standard took effect on May 28, 2024, replacing T+2. Shortening the cycle reduces the counterparty and market risk carried in the window between agreeing to a trade and actually exchanging value, which is why regulators pushed for it after episodes of extreme volatility strained the system." },
          { kind: "p", text: "Two dates depend on settlement and are frequently confused. The RECORD DATE is set by the issuer: whoever is on the books that day receives the dividend. The EX-DIVIDEND DATE is set by the exchange or FINRA and is the first day the stock trades WITHOUT the right to the upcoming dividend. A buyer on or after the ex-date does not receive it, and the stock price typically opens lower by roughly the dividend amount to reflect exactly that." },
          { kind: "callout", label: "Regulation T versus settlement", body: "Do not conflate the two. SETTLEMENT (T+1) is when securities and money change hands. REGULATION T payment is when the customer must pay the firm — two business days after settlement. They are different deadlines serving different purposes, and the exam pairs them to see whether you know that." },
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
    readingMinutes: 8,
    summary: "How people and firms get registered, the conduct rules that bind them, and how communications are governed.",
    intro:
      "The final SIE area ties the system together: who must register, what standards bind them once they do, and how the industry polices communications with the public. It is the smallest area by weight but the connective tissue of the whole exam — the rules that turn the markets and products of the earlier sections into a regulated profession.",
    sections: [
      {
        heading: "Becoming registered, and staying that way",
        blocks: [
          { kind: "p", text: "An individual enters the securities business through a FIRM, not on their own. The SIE is the exception that proves the rule: it can be taken without any employer sponsorship, which is why it functions as an entry credential for students and career changers. Every subsequent qualification — the Series 7, the Series 66 — requires a member firm to sponsor and file for you. The filing itself is FORM U4, which collects employment and residential history, and discloses criminal charges, regulatory actions, customer complaints, bankruptcies, and unsatisfied judgments or liens." },
          { kind: "p", text: "The U4 is not a one-time document. It must be kept current, with material changes reported promptly — typically within 30 days, and within 10 business days for certain disclosure events. When a representative leaves a firm, the firm files FORM U5 within 30 days and provides a copy to the individual. Both forms feed the public CRD system and BrokerCheck, which is why an inaccurate disclosure is treated so seriously: the entire investor-protection value of the system depends on it being truthful." },
          { kind: "callout", label: "Statutory disqualification", body: "Certain events bar a person from associating with a member firm: a felony conviction or a securities-related misdemeanor within the past ten years, an SEC or SRO expulsion or bar, or making a false statement on a membership or registration application. Note the last one — lying on the U4 is itself a disqualifying act, independent of whatever was being concealed." },
        ],
      },
      {
        heading: "Continuing education, and the two elements",
        blocks: [
          { kind: "p", text: "Registration is maintained through a two-part continuing education requirement, and the split is a reliable exam question. The REGULATORY ELEMENT is administered by FINRA, is computer-based, and is now completed ANNUALLY by December 31 for each registration category held. The FIRM ELEMENT is designed and delivered by the member firm itself: the firm conducts an annual needs analysis, writes a training plan, and delivers training to covered registered persons — those who deal with customers and their immediate supervisors." },
          { kind: "p", text: "The logic of the division is worth holding onto because it makes the details easy to reconstruct. The regulator sets a floor that applies to everyone in a category; the firm addresses the specific products, strategies, and risks its own people actually handle. A firm selling complex structured products has training obligations that a firm selling only money market funds does not, and no centralized curriculum could anticipate that." },
        ],
      },
      {
        heading: "Communications with the public: the three categories",
        blocks: [
          { kind: "p", text: "FINRA sorts every communication into one of three buckets, and the bucket determines the approval and filing requirements. The dividing line for the first two is purely a headcount over a rolling window." },
          { kind: "table", table: { caption: "How a communication is classified — count the recipients.", headers: ["Category", "Definition", "Principal approval"], rows: [["Correspondence", "25 or fewer RETAIL investors within 30 calendar days", "Review per firm procedures; no pre-approval required"], ["Retail communication", "MORE than 25 retail investors within 30 calendar days", "Principal approval BEFORE first use"], ["Institutional communication", "Distributed only to institutional investors", "No pre-approval; firm must have review procedures"]] } },
          { kind: "p", text: "Across all three categories the substantive standard is identical: communications must be fair, balanced, and not misleading. Predicting future performance is prohibited. Past performance may be shown but requires disclosure that it does not guarantee future results. Any claim about a security's benefits must be balanced against its risks — an advertisement that lists only upside fails regardless of whether every individual statement in it is literally true." },
          { kind: "bullets", items: ["Testimonials require disclosure of any compensation paid and whether the experience is typical.", "Retail communications concerning options require prior delivery of the options disclosure document.", "Internal firm communications and most institutional material do not require pre-approval, but must still be retained.", "Records of communications are generally retained for three years, the first two in an easily accessible place."] },
        ],
      },
      {
        heading: "Regulation Best Interest and the standard of care",
        blocks: [
          { kind: "p", text: "Regulation Best Interest, effective June 30, 2020, raised the standard governing recommendations to retail customers. A broker-dealer must act in the RETAIL CUSTOMER'S BEST INTEREST at the time a recommendation is made, and may not place its own financial interest ahead of the customer's. This replaced the older suitability standard, under which a recommendation merely had to be suitable — a bar that permitted recommending the suitable product that happened to pay the representative most." },
          { kind: "p", text: "Reg BI is built from four obligations, and the exam expects you to recognize all four by name: DISCLOSURE of material facts and conflicts, CARE in understanding the product and its costs and evaluating reasonable alternatives, CONFLICT OF INTEREST policies to identify and address conflicts, and COMPLIANCE policies reasonably designed to achieve compliance overall. Alongside it, FORM CRS is a brief relationship summary given to retail investors describing services, fees, conflicts, and disciplinary history." },
          { kind: "p", text: "Supporting all of it is KNOW YOUR CUSTOMER — the obligation to use reasonable diligence to learn the essential facts about every customer. Financial situation, tax status, investment objectives, time horizon, liquidity needs, and risk tolerance are the inputs without which no recommendation can be evaluated. A representative who does not gather them cannot make a recommendation that is in the customer's best interest, because they have no basis on which to judge." },
          { kind: "callout", label: "Reg BI versus suitability", body: "Under the old standard, a recommendation had to be SUITABLE. Under Reg BI it must be in the customer's BEST INTEREST — meaning that among suitable options, cost and conflicts must be weighed, and the firm may not simply select the one paying it most. Questions describing two suitable products with different compensation are testing exactly this." },
        ],
      },
      {
        heading: "Conflicts, complaints, and the rules that police them",
        blocks: [
          { kind: "p", text: "Several conduct rules exist to prevent a representative's private interests from quietly displacing the firm's supervision. OUTSIDE BUSINESS ACTIVITIES must be disclosed to the firm in writing before engaging in them. PRIVATE SECURITIES TRANSACTIONS — securities business conducted away from the firm — require written notice and, where the representative will be compensated, the firm's written approval; doing this without permission is SELLING AWAY. GIFTS to another firm's personnel in connection with business are capped at $100 per person per year, a limit low enough that it exists to prevent influence rather than to price it." },
          { kind: "p", text: "Customer COMPLAINTS — any written grievance concerning the firm's securities business — must be recorded and reported to FINRA quarterly, and a written record maintained. Disputes between customers and firms are typically resolved through FINRA's Dispute Resolution Services by ARBITRATION, which is binding with essentially no right of appeal, or by MEDIATION, which is voluntary and non-binding and can be abandoned by either party at any point. The binding-versus-voluntary contrast is the tested distinction." },
          { kind: "bullets", items: ["Most books and records are retained for three years; some, like customer account records and articles of incorporation, run six years or the life of the firm.", "Every account requires principal approval, and options accounts require approval by a registered options principal.", "A firm must send account statements at least quarterly, and monthly when there is activity.", "Trade confirmations must be sent at or before completion of the transaction and must disclose the firm's capacity — agent or principal."] },
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
    readingMinutes: 10,
    summary: "Ownership in depth — common vs preferred stock, the flavors of preferred, and equity-linked instruments like rights, warrants, and ADRs.",
    intro:
      "Equity means ownership. The SIE expects you to know what a shareholder actually owns, how common and preferred stock differ in risk and priority, the named varieties of preferred, and the equity-linked instruments — rights, warrants, and ADRs — that orbit common stock. This chapter goes deeper than the overview so the distinctions stick.",
    sections: [
      {
        heading: "What a share actually entitles you to",
        blocks: [
          { kind: "p", text: "Common stock confers four things, and it is worth being precise about each because the exam probes the limits of all of them. You get a VOTE on matters put to shareholders, most importantly the election of directors. You get DIVIDENDS if and only if the board declares them. You may get a PREEMPTIVE RIGHT to maintain your proportional stake when new shares are issued. And you get a RESIDUAL CLAIM in liquidation — residual meaning last, after every creditor and every preferred shareholder." },
          { kind: "p", text: "Two voting systems appear on the exam and they favour different shareholders. Under STATUTORY voting, you may cast up to your share count for each open seat separately, which lets a majority holder sweep every seat. Under CUMULATIVE voting, you multiply your shares by the number of seats and may concentrate the entire total on a single candidate — a system that exists specifically to give minority shareholders a realistic path to board representation. If a question asks which method helps the small shareholder, the answer is always cumulative." },
          { kind: "bullets", items: ["AUTHORIZED shares are the maximum in the corporate charter; ISSUED shares have actually been sold.", "OUTSTANDING = issued minus TREASURY shares the company has repurchased.", "Treasury stock has no vote and receives no dividend — it is not owned by anyone outside the company.", "Only OUTSTANDING shares matter for EPS, voting, and dividends."] },
        ],
      },
      {
        heading: "The four dividend dates, and the one that moves the price",
        blocks: [
          { kind: "p", text: "A dividend passes through four dates and candidates routinely confuse two of them. The DECLARATION DATE is when the board announces it. The EX-DIVIDEND DATE is the first day the stock trades WITHOUT the right to that dividend — set by the exchange, and under T+1 settlement it now falls on the same day as the record date. The RECORD DATE is when the issuer checks its books to see who owns the stock. The PAYABLE DATE is when the cash actually arrives, typically weeks later." },
          { kind: "p", text: "The ex-date is the one with a visible market consequence: on that morning the stock typically opens LOWER by roughly the dividend amount, because a buyer is now purchasing the same company without the imminent cash payment. This is not a loss to the existing holder — they are receiving that value as cash instead of share price. Understanding this prevents the common misreading that a stock 'dropped' on the ex-date for some adverse reason." },
          { kind: "callout", label: "Buy before the ex-date", body: "To receive the dividend you must purchase BEFORE the ex-dividend date. Buying ON the ex-date means the seller keeps the dividend. Note that the move to T+1 settlement in May 2024 collapsed the old one-day gap, so ex-date and record date now coincide — older prep material still shows them a day apart." },
        ],
      },
      {
        heading: "Rights and warrants: the arithmetic",
        blocks: [
          { kind: "p", text: "A RIGHTS OFFERING lets existing shareholders buy new shares at a SUBSCRIPTION PRICE below the current market, preserving their proportional ownership. Because the subscription price is below market, each right has real, computable value, and the exam asks you to compute it. Rights are short-lived — typically 30 to 45 days — and may be exercised, sold, or allowed to expire." },
          { kind: "formula", formula: { label: "Value of one right", expr: "Cum-rights:  (Market − Subscription) ÷ (N + 1)          Ex-rights:  (Market − Subscription) ÷ N", note: "N = rights needed per new share. The '+1' appears only while the stock still trades WITH the right attached, because the buyer receives both the share and the right." } },
          { kind: "example", example: { title: "valuing a right, both ways", prompt: "A stock trades at $50 cum-rights. The subscription price is $45 and 4 rights are needed for one new share. Find the value of a right before and after the stock goes ex-rights.", steps: ["Cum-rights: ($50 − $45) ÷ (4 + 1) = $5 ÷ 5 = $1.00.", "When the stock goes ex-rights it falls by the value of the right that has detached: $50 − $1.00 = $49.", "Ex-rights: ($49 − $45) ÷ 4 = $4 ÷ 4 = $1.00.", "The two answers agree, which is the check that the formulas are consistent rather than arbitrary."], answer: "$1.00 either way. The formulas differ only because the market price itself changes when the right detaches — no value is created or destroyed at the ex-rights moment." } },
          { kind: "table", table: { caption: "Rights versus warrants — opposite on every dimension.", headers: ["", "Rights", "Warrants"], rows: [["Term", "Short (30-45 days)", "Long (often years)"], ["Subscription price vs market", "BELOW market", "ABOVE market"], ["Intrinsic value at issue", "Immediate", "None yet"], ["Who receives them", "Existing shareholders", "Often attached to a bond as a sweetener"], ["Purpose", "Prevent dilution", "Make the attached issue more attractive"]] } },
        ],
      },
      {
        heading: "Preferred stock and the hybrid securities",
        blocks: [
          { kind: "p", text: "Preferred stock is legally equity but economically closer to a perpetual bond: a fixed stated dividend, priority over common for dividends and liquidation, and normally no vote. Because the payment is fixed, its price responds to interest rates the way a bond's does — rates up, preferred price down. The stated rate is a percentage of PAR, conventionally $100, so a 6% preferred pays $6 a year regardless of what the shares trade for." },
          { kind: "p", text: "CONVERTIBLE securities deserve separate attention because they generate arithmetic questions. A convertible bond or preferred can be exchanged for common at a stated CONVERSION PRICE, and the number of shares received is par divided by that price. PARITY is the point at which the convertible and the underlying common are worth the same — comparing the convertible's market price against parity tells you whether converting is currently profitable." },
          { kind: "example", example: { title: "conversion ratio and parity", prompt: "A $1,000 par convertible bond has a conversion price of $40. The common stock trades at $52. How many shares, and what is parity?", steps: ["Conversion ratio = par ÷ conversion price = $1,000 ÷ $40 = 25 shares.", "Parity value of the bond = 25 shares x $52 = $1,300.", "So the bond is worth at least $1,300 on conversion grounds alone.", "If the bond trades below $1,300 an arbitrage exists; in practice it trades at or above parity, the excess being the value of holding a bond rather than stock."], answer: "25 shares; parity is $1,300. A bond trading at $1,250 would be below parity and worth converting immediately — that gap is what conversion questions test." } },
          { kind: "bullets", items: ["ADRs let U.S. investors hold foreign shares via a domestic bank; the holder bears CURRENCY risk and usually has no vote.", "A 2-for-1 SPLIT doubles shares and halves price — total value unchanged, and the cost basis per share halves too.", "A REVERSE split reduces share count and raises price, often to maintain an exchange listing standard.", "A stock DIVIDEND is paid in shares rather than cash and is not taxable at receipt; it reduces cost basis per share."] },
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
    readingMinutes: 10,
    summary: "Loans in depth — bond mechanics, the four yield measures, the price/yield seesaw, and the full menu of corporate, government, and municipal debt.",
    intro:
      "A bond is a loan: the investor lends, and the issuer pays interest and returns principal at maturity. The SIE tests the mechanics (par, coupon, maturity), the yield measures, the inverse price/yield relationship, and the full lineup of issuers from corporations to the U.S. Treasury to municipalities. This chapter builds the whole map.",
    sections: [
      {
        heading: "Reading a bond quote",
        blocks: [
          { kind: "p", text: "Bonds are quoted as a percentage of par, not in dollars, and the conventions differ by issuer type in ways the exam tests directly. A CORPORATE bond quoted at 98 means 98% of $1,000 par, or $980. A GOVERNMENT note or bond is quoted in 32nds using a hyphen: 98-16 means 98 and 16/32, which is 98.5% of par, or $985. Municipal bonds are frequently quoted not as a price at all but on a YIELD basis — a 'basis price' — because serial maturities make yield the more meaningful comparison." },
          { kind: "example", example: { title: "converting a government quote", prompt: "A Treasury note is quoted 101-08. What is the dollar price on $10,000 face value?", steps: ["The digits after the hyphen are 32nds: 08/32 = 0.25.", "So the quote is 101.25% of par.", "On $1,000 par that is $1,012.50.", "On $10,000 face: $10,000 x 1.0125 = $10,125."], answer: "$10,125. Reading 101-08 as $101.08 is the error the convention is designed to catch — government quotes are never decimal dollars." } },
          { kind: "p", text: "Treasury BILLS are the exception to all of this. They pay no coupon, are issued at a discount to face value, and are quoted on a discount-yield basis. The investor's entire return is the difference between the discounted purchase price and the face value received at maturity — which is also why bills carry no reinvestment risk during their life." },
        ],
      },
      {
        heading: "Accrued interest and who owns the coupon",
        blocks: [
          { kind: "p", text: "Bonds pay interest semiannually, but they trade every day. When a bond changes hands between coupon dates, the seller has earned interest they will never receive, because the next full coupon goes to whoever holds the bond on the payment date. ACCRUED INTEREST corrects this: the buyer pays the seller the interest earned from the last coupon date up to — but not including — the settlement date, on top of the bond's price." },
          { kind: "p", text: "The day-count convention differs by issuer and is a reliable exam question. CORPORATE and MUNICIPAL bonds use 30/360: every month counts as 30 days and the year as 360. GOVERNMENT bonds use ACTUAL/ACTUAL: real calendar days over the real year. Bonds trading with accrued interest are said to trade 'and interest'; zero-coupon bonds and bonds in default trade FLAT, with no accrued interest at all." },
          { kind: "formula", formula: { label: "Accrued interest", expr: "Accrued = par × coupon rate × (days accrued ÷ days in year)", note: "Corporate and municipal: 30/360. Government: actual/actual. Count from the last coupon date up to, but NOT including, settlement." } },
          { kind: "example", example: { title: "accrued interest on a corporate bond", prompt: "A 6% corporate bond ($1,000 par) last paid interest on January 1 and settles on February 15. How much accrued interest does the buyer owe?", steps: ["Corporate bonds use 30/360.", "January counts as a full 30 days; February 1 through 14 adds 14 days (settlement day itself is excluded).", "Days accrued = 30 + 14 = 44.", "Annual interest = 6% x $1,000 = $60.", "Accrued = $60 x (44 ÷ 360) = $7.33."], answer: "$7.33, added to the purchase price. Including February 15 itself would give 45 days and $7.50 — the off-by-one the convention exists to prevent." } },
        ],
      },
      {
        heading: "The yield ladder, and why the order flips",
        blocks: [
          { kind: "p", text: "Four yields describe the same bond and their ORDER tells you instantly whether it trades at a discount or a premium. NOMINAL yield is the coupon rate, fixed forever at issuance. CURRENT yield is coupon divided by market price. YIELD TO MATURITY accounts for the coupon plus the gain or loss as the price pulls to par at maturity. YIELD TO CALL does the same but to the earlier call date and price." },
          { kind: "p", text: "For a DISCOUNT bond the ladder runs upward: nominal < current < YTM < YTC. The buyer collects the coupon AND gains as the price rises toward par, so every forward-looking measure exceeds the coupon. For a PREMIUM bond every relationship inverts: nominal > current > YTM > YTC, because the buyer will lose the premium as the price falls to par. Memorize the direction rather than the numbers — the exam changes the numbers and keeps the logic." },
          { kind: "table", table: { caption: "The yield ladder by price.", headers: ["Bond trades at", "Order of yields", "Why"], rows: [["Discount (below par)", "Nominal < Current < YTM < YTC", "Buyer gains as price pulls up to par"], ["Par", "All four are equal", "No gain or loss at maturity"], ["Premium (above par)", "Nominal > Current > YTM > YTC", "Buyer loses the premium as price falls to par"]] } },
          { kind: "callout", label: "Why YTC is the outlier", body: "For a premium bond, yield to call is the LOWEST of the four because the loss of premium is compressed into fewer years. This is why a callable premium bond is quoted at 'yield to worst' — the lower of YTM and YTC — so the investor is shown the least favourable realistic outcome rather than the most flattering one." },
        ],
      },
      {
        heading: "Credit quality and the investment-grade line",
        blocks: [
          { kind: "p", text: "Rating agencies assess the likelihood that an issuer pays. The line that matters most is the boundary between INVESTMENT GRADE and speculative grade, because many institutional mandates prohibit holding below it: BBB− at Standard & Poor's and Fitch, Baa3 at Moody's. Anything beneath is speculative — high yield in marketing language, junk in plain language. A downgrade across that line can force selling by institutions that are contractually barred from holding the bond, which is why the boundary produces price moves out of proportion to the change in default probability." },
          { kind: "table", table: { caption: "Where the line sits.", headers: ["Grade", "Moody's", "S&P / Fitch"], rows: [["Highest quality", "Aaa", "AAA"], ["High quality", "Aa", "AA"], ["Upper medium", "A", "A"], ["Lowest investment grade", "Baa3", "BBB−"], ["Speculative (below the line)", "Ba and lower", "BB+ and lower"], ["In default", "C / D range", "D"]] } },
          { kind: "bullets", items: ["A DEBENTURE is backed only by the issuer's general credit — no specific collateral pledged.", "A SECURED bond pledges specific assets; equipment trust certificates pledge rolling stock.", "An INCOME (adjustment) bond pays interest only if the issuer earns enough — it trades flat, since payment is not promised.", "A ZERO-COUPON bond is bought at a discount and matures at par; holders owe annual tax on phantom accreted interest.", "TIPS adjust PRINCIPAL with the CPI, so both the coupon payment and the final principal rise with inflation."] },
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
    readingMinutes: 9,
    summary: "Pooled products in depth — how open-end funds price and charge, the A/B/C share classes and breakpoints, and how closed-end funds, ETFs, and UITs differ.",
    intro:
      "Most retail money flows through pooled funds, so the SIE tests them closely. You need to know how an open-end mutual fund prices and charges fees, the difference between the share classes, how breakpoints work, and how closed-end funds, ETFs, and UITs differ from one another. This chapter lays out the whole landscape.",
    sections: [
      {
        heading: "How a fund is priced",
        blocks: [
          { kind: "p", text: "An open-end fund does not have a market price in the ordinary sense. Once per day, after the close, the fund values everything it owns, subtracts what it owes, and divides by shares outstanding to get NET ASSET VALUE per share. That single number is the basis for every purchase and every redemption that day. There is no bidding, no spread, and no intraday price — a structural difference from every exchange-traded product." },
          { kind: "formula", formula: { label: "Net asset value per share", expr: "NAV = (total assets − total liabilities) ÷ shares outstanding", note: "Computed once daily, normally as of the 4:00 p.m. Eastern close." } },
          { kind: "p", text: "FORWARD PRICING is the rule that follows from this and it is heavily tested. An order received at 11:00 a.m. is not filled at this morning's NAV or yesterday's close — it is filled at the NEXT NAV computed, that afternoon. The rule exists to stop traders from exploiting stale prices with information that arrived during the day, an abuse called late trading when the timestamps are falsified." },
          { kind: "example", example: { title: "NAV and the sales charge percentage", prompt: "A fund holds $226.2 million in assets against $3.0 million of liabilities, with 24.0 million shares outstanding. Shares are offered at a POP of $10.00. Find NAV and the sales charge percentage.", steps: ["NAV = (total assets − total liabilities) ÷ shares outstanding.", "Net assets = $226.2m − $3.0m = $223.2m.", "NAV = $223.2m ÷ 24.0m shares = $9.30.", "Sales charge in dollars = POP − NAV = $10.00 − $9.30 = $0.70.", "The charge is expressed as a percentage OF THE POP: $0.70 ÷ $10.00 = 7.0%."], answer: "NAV is $9.30 and the sales charge is 7.0%. Dividing the $0.70 by the $9.30 NAV instead gives 7.53% — the standard distractor, and the reason POP = NAV ÷ (1 − load) uses division rather than multiplication." } },
          { kind: "callout", label: "The 8.5% ceiling", body: "FINRA caps the sales charge on a mutual fund at 8.5% of the POP, and a fund may only charge the maximum if it offers breakpoints, rights of accumulation, and reinvestment of dividends at NAV. A fund omitting those features must charge less." },
        ],
      },
      {
        heading: "Share classes and the cost of each",
        blocks: [
          { kind: "p", text: "The same portfolio is commonly sold in several share classes that differ only in how the investor pays for distribution. CLASS A carries a FRONT-END load deducted at purchase, but lower ongoing 12b-1 fees, which makes it cheapest for large investments held a long time — and only Class A shares get breakpoints. CLASS B carries a CONTINGENT DEFERRED SALES CHARGE that declines each year and disappears after roughly six to eight years, at which point the shares typically convert to Class A. CLASS C carries a level load: little or no charge to enter, a small charge if sold within a year, and permanently higher annual expenses, which makes it the most expensive class for a long holding period." },
          { kind: "p", text: "The recommendation question follows directly from that structure. A large investment held for decades belongs in Class A, where the breakpoint reduces the front load and ongoing expenses stay low. A small investment held a few years may suit Class C. Steering a large, long-horizon investor into Class C to avoid a visible front-end charge raises exactly the conflict Regulation Best Interest addresses, because the representative's compensation continues indefinitely while the customer's costs compound." },
          { kind: "bullets", items: ["A 12b-1 FEE covers distribution and marketing and is charged annually against assets; over 1.00% a fund may not call itself no-load.", "BREAKPOINTS reduce the sales charge at stated dollar levels — placing an investor just below one is the violation called breakpoint selling.", "A LETTER OF INTENT claims a breakpoint now against a commitment to invest the total within 13 months; it may be backdated up to 90 days.", "RIGHTS OF ACCUMULATION count existing holdings toward the next breakpoint, and unlike an LOI they never expire."] },
        ],
      },
      {
        heading: "The other pooled vehicles, and how they differ",
        blocks: [
          { kind: "p", text: "A CLOSED-END fund issues a fixed number of shares once and then trades on an exchange. Its market price is set by supply and demand and may sit at a PREMIUM or a DISCOUNT to NAV — sometimes a wide and persistent discount. An ETF also trades intraday, but a creation-and-redemption process run by authorized participants arbitrages away meaningful gaps, keeping price near NAV. A UNIT INVESTMENT TRUST holds a fixed, unmanaged portfolio, has no board and no investment adviser, and terminates on a preset date." },
          { kind: "table", table: { caption: "Pooled products at a glance.", headers: ["Vehicle", "How you buy it", "Priced at", "Managed?"], rows: [["Open-end fund", "From the fund, continuously", "Next computed NAV (+ any load)", "Yes"], ["Closed-end fund", "On an exchange", "Market price; may differ from NAV", "Yes"], ["ETF", "On an exchange, intraday", "Market price, kept near NAV", "Usually indexed"], ["UIT", "From the sponsor", "NAV", "NO — fixed portfolio"], ["REIT", "Usually on an exchange", "Market price", "Yes"]] } },
          { kind: "p", text: "REITs sit slightly apart: a REIT is not an investment company, it owns or finances real estate, and it must distribute at least 90% of taxable income to shareholders to retain its tax treatment. That distribution requirement is why REITs are held for income. Equity REITs own properties, mortgage REITs hold real-estate debt, and hybrid REITs do both. Importantly, a REIT passes through income but NOT losses — the feature that distinguishes it from a direct participation program." },
          { kind: "bullets", items: ["A FIXED annuity pays a guaranteed rate from the insurer's general account; the INSURER bears investment risk.", "A VARIABLE annuity invests in separate-account subaccounts; the CONTRACT HOLDER bears investment risk and it is a security.", "During accumulation the holder buys ACCUMULATION UNITS; at annuitization these convert to ANNUITY UNITS, whose number is then fixed.", "Hedge funds and DPPs are illiquid, sold to accredited investors, and DPPs pass through both income AND losses."] },
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
    readingMinutes: 11,
    summary: "The vocabulary and payoff logic of options — calls vs puts, the four buyer/seller positions, intrinsic value, and why options expire.",
    intro:
      "Options give the SIE candidate trouble because the language is unfamiliar, not because the math is hard. An option is a contract: the right, but not the obligation, to buy or sell a stock at a set price before expiration. Master the four basic positions and what each one wants the stock to do, and the rest falls into place.",
    sections: [
      {
        heading: "Rights, obligations, and why the risk is asymmetric",
        blocks: [
          { kind: "p", text: "An option contract normally covers 100 shares. The BUYER pays a premium and receives a RIGHT; the SELLER (writer) receives that premium and takes on an OBLIGATION. This asymmetry drives everything else. A buyer can walk away — the worst case is that the option expires worthless and the premium is lost, and no additional demand can ever be made. A writer cannot walk away: if the buyer exercises, the writer must perform." },
          { kind: "p", text: "A CALL is the right to BUY at the strike price; a PUT is the right to SELL at the strike. Combine two contract types with two sides and you get exactly four positions, each with a distinct market opinion. Long call is bullish. Short call is bearish or neutral. Long put is bearish. Short put is bullish or neutral. Note that the two neutral cases are income strategies — the writer is being paid to accept an obligation they expect never to be called upon." },
          { kind: "table", table: { caption: "The four positions and their extremes.", headers: ["Position", "Opinion", "Max gain", "Max loss"], rows: [["Long call", "Bullish", "Unlimited", "Premium paid"], ["Short (naked) call", "Bearish / neutral", "Premium received", "UNLIMITED"], ["Long put", "Bearish", "Strike − premium", "Premium paid"], ["Short put", "Bullish / neutral", "Premium received", "Strike − premium"]] } },
          { kind: "callout", label: "The only unlimited loss on the exam", body: "A naked call writer faces theoretically unlimited loss, because there is no ceiling on how high a stock can rise. Every other basic position has a defined worst case: a put's loss is bounded because a stock can only fall to zero, and a buyer's loss is bounded by the premium. This is why uncovered call writing carries the strictest approval and margin requirements in the retail business." },
        ],
      },
      {
        heading: "Intrinsic value, premium, and breakeven",
        blocks: [
          { kind: "p", text: "The premium has two components. INTRINSIC VALUE is what the option would be worth if exercised right now, and it can never be negative — an option that is out-of-the-money simply has zero intrinsic value. TIME VALUE is everything else the buyer pays for the chance that the position improves before expiration. Time value erodes as expiration approaches, an effect that accelerates in the final weeks and works against the buyer and for the writer." },
          { kind: "formula", formula: { label: "Intrinsic value and breakeven", expr: "Call intrinsic = stock − strike     Put intrinsic = strike − stock     (never below zero)\nLong call BE = strike + premium      Long put BE = strike − premium", note: "Call up, put down. The breakevens are identical for the corresponding SHORT positions, since options are zero-sum between the two sides." } },
          { kind: "example", example: { title: "in-the-money and still losing", prompt: "An investor owns a call with a $50 strike; the stock trades at $58 and the call cost $5. Find intrinsic value and profit at expiration.", steps: ["Intrinsic value = stock − strike = $58 − $50 = $8. The option is in-the-money.", "Intrinsic value ignores what was paid. Profit does not.", "Profit per share = $8 − $5 premium = $3.", "Per contract = $3 x 100 = $300.", "Breakeven check: $50 strike + $5 premium = $55, and $58 is $3 above it. Consistent."], answer: "Intrinsic value $8; profit $300 per contract. Had the stock been at $52, the option would still be in-the-money by $2 but the position would LOSE $3 per share — being in-the-money and being profitable are different tests, which is the point of the question." } },
        ],
      },
      {
        heading: "The two strategies every candidate must know",
        blocks: [
          { kind: "p", text: "A COVERED CALL is writing a call against stock you already own. The premium provides income and a small cushion against decline, but it caps your upside: above the strike the stock will be called away and you no longer participate. This is an income strategy for a neutral-to-mildly-bullish holder, not a hedge — the protection extends only as far as the premium received." },
          { kind: "example", example: { title: "covered call, fully worked", prompt: "An investor buys stock at $48 and writes a 50 call for a $3 premium. Find maximum gain, breakeven, and maximum loss.", steps: ["Maximum gain occurs at or above the $50 strike, where the stock is called away.", "Gain = ($50 strike − $48 cost) + $3 premium = $5 per share, or $500 per contract.", "Breakeven = stock cost − premium received = $48 − $3 = $45.", "Maximum loss occurs if the stock falls to zero: $45 per share, or $4,500 — the cost reduced by the premium."], answer: "Max gain $500, breakeven $45, max loss $4,500. Writing the call did NOT protect the position; it reduced the loss by exactly the $3 premium and gave away everything above $50." } },
          { kind: "p", text: "A PROTECTIVE PUT is buying a put against stock you own — genuine insurance. It sets a floor under the position at the strike, and like insurance it costs a premium that you lose if the disaster never happens. The holder keeps all upside above the breakeven, which is why it suits a bullish investor who nonetheless wants a defined worst case." },
          { kind: "example", example: { title: "protective put", prompt: "An investor buys stock at $48 and buys a 45 put for $2. Find maximum loss and breakeven.", steps: ["The put lets the investor sell at $45 no matter how far the stock falls.", "Worst case loss on the stock = $48 − $45 = $3 per share.", "Plus the $2 premium paid for the put = $5 per share total, or $500.", "Breakeven = stock cost + premium = $48 + $2 = $50 — the stock must recover the insurance cost before the position profits."], answer: "Max loss $500, breakeven $50, and gains above $50 are unlimited. Contrast with the covered call: the put COSTS money and caps the loss; the call EARNS money and caps the gain." } },
        ],
      },
      {
        heading: "Account approval and the disclosure document",
        blocks: [
          { kind: "p", text: "Options accounts carry procedural requirements the exam tests on timing. The OPTIONS DISCLOSURE DOCUMENT — 'Characteristics and Risks of Standardized Options' — must be delivered at or before the time the account is approved for options trading. A registered options principal must approve the account. The customer must return a signed OPTIONS AGREEMENT within 15 days of approval; if they do not, the account may only be used to CLOSE existing positions, not open new ones." },
          { kind: "bullets", items: ["The OPTIONS CLEARING CORPORATION issues and guarantees every listed option, which removes counterparty risk between buyer and writer.", "Assignment is allocated by the OCC to a member firm, which then assigns a customer randomly or first-in-first-out under disclosed procedures.", "AMERICAN-style options may be exercised any time before expiration; EUROPEAN-style only at expiration. Equity options are American-style.", "Position and exercise LIMITS cap how many contracts one investor may hold or exercise on the same side of the market."] },
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
    readingMinutes: 6,
    summary: "How states and localities borrow — general obligation vs revenue bonds, the federal tax exemption, and the taxable-equivalent yield math.",
    intro:
      "Municipal bonds are debt issued by states, cities, and their agencies, and their defining feature is tax treatment: the interest is generally exempt from federal income tax. That exemption drives who buys them and how their yields compare to taxable bonds. The SIE expects the GO-versus-revenue distinction and the taxable-equivalent yield calculation.",
    sections: [
      {
        heading: "Two kinds of municipal bond, two kinds of credit analysis",
        blocks: [
          { kind: "p", text: "Municipal securities are issued by states, cities, counties, school districts, and authorities, and they split into two families that are analyzed in completely different ways. A GENERAL OBLIGATION bond is backed by the issuer's full faith, credit, and TAXING POWER. Because repayment ultimately rests on taxpayers, GO issues usually require voter approval and are constrained by statutory debt limits. A REVENUE bond is backed solely by the receipts of the facility it financed — a toll road, an airport, a water system — and requires no vote, because no taxing power is being pledged." },
          { kind: "p", text: "That structural difference dictates what an analyst examines. For a GO bond you study the tax base: assessed property values, debt per capita, the trend in collections, and the overall economic health of the community. For a revenue bond you study the PROJECT: the feasibility study, projected usage, and above all the DEBT SERVICE COVERAGE RATIO, which measures whether net revenues comfortably exceed the payments due. If a revenue project underperforms, bondholders have no recourse to the issuer's general taxing power — a limitation the exam tests directly." },
          { kind: "table", table: { caption: "GO versus revenue.", headers: ["", "General obligation", "Revenue"], rows: [["Backed by", "Full faith, credit, and taxing power", "The financed project's receipts only"], ["Voter approval", "Usually required", "Not required"], ["Subject to debt limits", "Yes", "Typically not"], ["Key analytical figure", "Tax base, debt per capita", "Debt service coverage ratio"], ["Relative risk", "Generally lower", "Generally higher"]] } },
        ],
      },
      {
        heading: "The tax treatment that creates the demand",
        blocks: [
          { kind: "p", text: "The entire municipal market exists because of one feature: interest is generally EXEMPT from federal income tax. Interest on bonds issued within the holder's own state is usually exempt from that state's tax as well, producing the double exemption that makes in-state municipals so attractive to high-bracket residents. Two qualifications are heavily tested: CAPITAL GAINS on municipal bonds remain fully taxable, and interest on certain PRIVATE ACTIVITY bonds may be subject to the alternative minimum tax." },
          { kind: "p", text: "Because the yield is tax-free, comparing a municipal directly against a taxable bond is meaningless. The TAXABLE-EQUIVALENT YIELD converts the muni into the taxable yield an investor would need to end up in the same place. Since the benefit rises with the tax bracket, municipals make sense for high-bracket investors and are usually a poor recommendation for someone in a low bracket — or inside an IRA, where the tax exemption is wasted entirely because the account is already tax-deferred." },
          { kind: "formula", formula: { label: "Taxable-equivalent yield", expr: "TEY = municipal yield ÷ (1 − marginal tax rate)", note: "Run it the other way to convert a taxable yield to its after-tax equivalent: taxable yield × (1 − rate)." } },
          { kind: "example", example: { title: "comparing a muni against a corporate", prompt: "An investor in the 32% federal bracket is choosing between a municipal yielding 4% and a corporate yielding 5.5%. Which is better after tax?", steps: ["TEY of the municipal = 4% ÷ (1 − 0.32) = 4% ÷ 0.68 = 5.88%.", "The corporate yields 5.5%, which is below that 5.88% breakeven.", "Cross-check from the other direction: the corporate's after-tax yield = 5.5% × 0.68 = 3.74%, versus the municipal's tax-free 4.00%.", "Both methods agree that the municipal wins."], answer: "The municipal. The investor would need a taxable bond yielding more than 5.88% to beat it. Note how the answer would flip in a 12% bracket, where TEY is only 4.55% — suitability here is entirely a function of the client's bracket." } },
          { kind: "callout", label: "Never put munis in an IRA", body: "A tax-deferred account already shelters the income, so buying a tax-exempt bond inside one surrenders the muni's lower pre-tax yield for a benefit already provided. It is a classic unsuitable recommendation and appears on the exam as such." },
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
    readingMinutes: 6,
    summary: "How brokerage accounts are opened and titled — cash vs margin, ownership forms, discretionary authority, and the main retirement-account types.",
    intro:
      "Before any trade, a customer needs an account, and the SIE tests how accounts are opened, who can act on them, and how they're titled. Layer on the retirement-account menu — IRAs and employer plans — and you have a frequently examined cluster. Know the ownership forms and the IRA distinctions cold.",
    sections: [
      {
        heading: "Opening an account: what must be captured",
        blocks: [
          { kind: "p", text: "A new account record establishes identity, ownership, and authority. The CUSTOMER IDENTIFICATION PROGRAM requires name, date of birth, physical address, and a taxpayer identification number before the account may trade, verified against documentary or non-documentary evidence. Beyond identity, the firm must record the information a suitability analysis depends on: financial situation, tax status, objectives, time horizon, liquidity needs, and risk tolerance. A principal must approve the account, and options accounts additionally require approval by a registered options principal." },
          { kind: "p", text: "Two points on signatures are tested. The CUSTOMER does not have to sign a cash account agreement, but the principal must approve the account. A MARGIN account is different: the customer must sign a margin agreement, which contains the credit agreement, the hypothecation agreement pledging securities as collateral, and — optionally — the loan consent permitting the firm to lend the customer's securities out." },
          { kind: "callout", label: "When a customer dies", body: "On notice of death the firm must immediately CANCEL all open orders and FREEZE the account, then await the required documents — a death certificate, letters testamentary or of administration, and applicable tax waivers. Acting on prior instructions from the deceased, including a standing discretionary authority, is not permitted; discretion dies with the customer." },
        ],
      },
      {
        heading: "Registration types and the consequences of each",
        blocks: [
          { kind: "p", text: "How an account is registered determines who may act and what happens on death, and the exam probes the second question harder. In JOINT TENANTS WITH RIGHT OF SURVIVORSHIP, a deceased owner's interest passes automatically to the survivor, outside probate. In TENANTS IN COMMON, the deceased's share passes to their ESTATE under their will, so the survivor does not simply inherit it. Identical people, identical assets, entirely different outcome — which is why the registration choice is a substantive decision rather than paperwork." },
          { kind: "p", text: "CUSTODIAL accounts under UTMA or UGMA hold assets for a minor. The gift is IRREVOCABLE, the assets belong to the minor from the moment of transfer, and there is exactly one custodian and one minor per account. The custodian may not trade on margin or pursue speculative strategies, because the standard is prudent management of property belonging to someone else. Control transfers to the minor outright at the age of majority — a feature that surprises donors who assumed they retained influence." },
          { kind: "bullets", items: ["A FIDUCIARY (trust, estate, guardianship) account is governed by the controlling document and the prudent investor standard.", "A PARTNERSHIP account requires the partnership agreement, which specifies who is authorized to trade.", "A CORPORATE account requires a corporate resolution naming the authorized individuals.", "DISCRETION — trading without approving each order — always requires WRITTEN authorization before it is exercised.", "A limited exception: discretion as to TIME and PRICE only, on a specified trade, may be accepted verbally for that day."] },
        ],
      },
      {
        heading: "Retirement accounts and the rules that distinguish them",
        blocks: [
          { kind: "p", text: "The central distinction is WHEN the tax is paid. A TRADITIONAL IRA may allow a deductible contribution now, grows tax-deferred, and is taxed as ordinary income on withdrawal. A ROTH IRA is funded with after-tax dollars and produces entirely TAX-FREE qualified withdrawals. The choice therefore turns on whether the saver expects a higher or lower tax rate in retirement — which is why a young saver early in their career is the classic Roth candidate." },
          { kind: "p", text: "Distribution rules follow from that structure. Withdrawals before age 59½ generally incur a 10% penalty on top of ordinary income tax, with narrow exceptions including death, disability, first-time home purchase, and certain education and medical expenses. REQUIRED MINIMUM DISTRIBUTIONS force money out of tax-deferred accounts beginning at age 73 under current law, rising to 75 later in the next decade. A Roth IRA has NO required minimum distributions during the original owner's lifetime — a significant planning advantage and a reliable exam point." },
          { kind: "table", table: { caption: "Plan types.", headers: ["Plan", "Who offers it", "Note"], rows: [["Traditional IRA", "Individual", "Possible deduction now; taxed on withdrawal"], ["Roth IRA", "Individual", "After-tax in; qualified withdrawals tax-free; no lifetime RMD"], ["401(k)", "Corporate employer", "Salary deferral, often with an employer match"], ["403(b)", "Schools, certain nonprofits", "Also called a tax-sheltered annuity"], ["457", "Government and some nonprofits", "No 10% early-withdrawal penalty on separation"], ["SEP / SIMPLE", "Small employers", "Simplified administration, lower cost"]] } },
          { kind: "callout", label: "ERISA's reach", body: "ERISA sets fiduciary, vesting, and reporting standards for PRIVATE-SECTOR employer plans. Government and most church plans are EXEMPT, and IRAs are individual arrangements rather than ERISA plans. Questions that place a municipal employer's plan under ERISA are testing this boundary." },
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
    readingMinutes: 5,
    summary: "The macro backdrop the SIE tests — the business cycle, fiscal vs monetary policy, the Fed's tools, and how interest rates ripple through markets.",
    intro:
      "Securities don't trade in a vacuum; they respond to the economy. The SIE expects a working grasp of the business cycle, the difference between fiscal and monetary policy, the Federal Reserve's toolkit, and the way interest rates and inflation move asset prices. This chapter ties the macro picture to the markets.",
    sections: [
      {
        heading: "The cycle, and where indicators sit relative to it",
        blocks: [
          { kind: "p", text: "Economic activity moves through four phases — EXPANSION, PEAK, CONTRACTION, TROUGH — and the exam expects you to place events within them. The conventional shorthand for a recession is two consecutive quarters of declining real GDP; a depression is the far rarer and more severe case, commonly described as a decline lasting six quarters or more. The cycle matters because it drives corporate earnings, which drive equity prices, and because policymakers act on it in ways that move interest rates and therefore bond prices." },
          { kind: "p", text: "Indicators are classified by their timing relative to that cycle, and the classification is the tested part. LEADING indicators turn BEFORE the economy does — building permits, new orders for durable goods, stock prices, initial jobless claims, and the money supply. COINCIDENT indicators turn WITH it — industrial production, personal income, nonfarm payrolls. LAGGING indicators turn AFTER — the unemployment rate, the average duration of unemployment, and corporate profits. Unemployment is the one candidates most often misclassify: firms cut and hire only once conditions have clearly changed, which makes it lagging, not leading." },
          { kind: "table", table: { caption: "Indicator timing.", headers: ["Leading", "Coincident", "Lagging"], rows: [["Building permits", "Industrial production", "Unemployment rate"], ["New durable-goods orders", "Personal income", "Duration of unemployment"], ["Stock prices", "Nonfarm payrolls", "Corporate profits"], ["Initial jobless claims", "Manufacturing sales", "Prime rate"]] } },
        ],
      },
      {
        heading: "Two policy levers, two different authorities",
        blocks: [
          { kind: "p", text: "Keeping the levers straight is worth several questions. MONETARY policy belongs to the FEDERAL RESERVE and works on the money supply and the cost of credit. FISCAL policy belongs to CONGRESS and works through taxation and government spending. A question describing a tax increase alongside a rate cut is testing whether you can identify two different authorities pulling in opposite directions — contractionary fiscal policy against expansionary monetary policy." },
          { kind: "p", text: "The Fed's tools have very different weights in practice. OPEN MARKET OPERATIONS — buying and selling government securities — are the tool used continuously and the most important by far; buying securities injects reserves and is expansionary. The DISCOUNT RATE is what the Fed charges banks borrowing directly from it, and changes are largely signalling. RESERVE REQUIREMENTS set how much banks must hold against deposits; this is the bluntest tool and is changed rarely." },
          { kind: "bullets", items: ["EXPANSIONARY monetary policy: buy securities, cut the discount rate, lower reserve requirements. Money supply up, rates down.", "CONTRACTIONARY monetary policy: sell securities, raise the discount rate, raise reserve requirements. Money supply down, rates up.", "EXPANSIONARY fiscal policy: cut taxes or increase government spending.", "CONTRACTIONARY fiscal policy: raise taxes or cut government spending.", "The FEDERAL FUNDS RATE is what banks charge EACH OTHER overnight — not a rate the Fed sets directly, though it is the Fed's target."] },
        ],
      },
      {
        heading: "Rates, the yield curve, and inflation",
        blocks: [
          { kind: "p", text: "Interest rates and bond prices move in OPPOSITE directions, and this single relationship generates more SIE questions than any other economic fact. When prevailing rates rise, an existing bond paying a fixed coupon becomes less competitive, so its price must fall until its yield matches what new bonds offer. Longer maturities and lower coupons move MORE for a given change in rates, because more of their value sits further in the future." },
          { kind: "p", text: "The YIELD CURVE plots yield against maturity. A NORMAL curve slopes upward, because lenders demand more to commit money for longer. A FLAT curve shows little difference across maturities. An INVERTED curve, where short rates exceed long rates, is unusual and has historically preceded recessions — which is why financial news treats an inversion as significant. INFLATION erodes the purchasing power of fixed payments, which is why it hurts long-term bondholders most and why a nominal yield and a real yield are different numbers." },
          { kind: "callout", label: "Purchasing power risk", body: "Inflation risk (purchasing power risk) is SYSTEMATIC — it cannot be diversified away, because it affects all fixed payments simultaneously. It is the specific risk that makes long-dated fixed-rate bonds unsuitable as an inflation hedge, and the reason TIPS exist." },
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
    readingMinutes: 5,
    summary: "The customer-profile rules that govern recommendations — KYC, the suitability standard, Regulation BI, and how risk tolerance and objectives map to products.",
    intro:
      "A recommendation must fit the customer, not just the salesperson's incentives. The SIE tests the framework for gathering a customer profile, the suitability obligations a recommendation must meet, and the higher best-interest standard introduced by Regulation BI. This is the conduct heart of the exam.",
    sections: [
      {
        heading: "Know your customer before you recommend anything",
        blocks: [
          { kind: "p", text: "A recommendation cannot be evaluated without facts about the person receiving it, which is why KNOW YOUR CUSTOMER precedes everything else. FINRA requires reasonable diligence to learn the essential facts about every customer and every account. The inputs are financial situation and net worth, tax status, investment objectives, TIME HORIZON, LIQUIDITY NEEDS, RISK TOLERANCE, and investment experience. A representative who has not gathered these has no basis on which to judge anything, and the failure is the recommendation itself rather than merely a paperwork lapse." },
          { kind: "p", text: "Two of these inputs do the most work in exam questions. TIME HORIZON determines how much volatility is survivable: money needed in eighteen months cannot sit in equities regardless of the client's stated appetite for risk. LIQUIDITY NEEDS rule out entire product categories — a client who may need capital on short notice should not be in a DPP, a private placement, or anything with a lock-up, no matter how attractive the expected return." },
          { kind: "table", table: { caption: "Matching objective to product.", headers: ["Stated objective", "Generally suitable", "Generally unsuitable"], rows: [["Preservation of capital", "Money market, T-bills, CDs", "Small-cap equity, options"], ["Current income", "Bonds, preferred, income funds", "Zero-coupon bonds, growth stocks"], ["Growth", "Equities, equity funds", "Money market, short-term debt"], ["Speculation", "Options, high-yield debt", "Anything for a low-risk client"], ["Tax-advantaged income", "Municipal bonds (high bracket)", "Municipals inside an IRA"]] } },
        ],
      },
      {
        heading: "Regulation Best Interest and what changed",
        blocks: [
          { kind: "p", text: "Regulation Best Interest, effective June 30, 2020, raised the standard for recommendations to retail customers. A broker-dealer must act in the customer's BEST INTEREST at the time the recommendation is made and may not place its own financial interest ahead of the customer's. Under the older SUITABILITY standard, a recommendation merely had to be appropriate — a bar that permitted recommending the suitable product paying the representative most. Reg BI closes that gap by requiring that cost and reasonably available alternatives be considered among suitable options." },
          { kind: "bullets", items: ["DISCLOSURE obligation — material facts about the relationship, and all conflicts of interest.", "CARE obligation — understand the product's risks and costs, and evaluate reasonable alternatives.", "CONFLICT OF INTEREST obligation — identify and address conflicts, eliminating some outright.", "COMPLIANCE obligation — written policies reasonably designed to achieve compliance overall.", "FORM CRS — a short relationship summary given to retail investors covering services, fees, conflicts, and discipline."] },
          { kind: "callout", label: "The scenario to recognize", body: "Two products are both suitable; one pays the representative substantially more. Under the old suitability standard, recommending the higher-paying one was defensible. Under Reg BI it is not, unless the representative can show the choice served the customer's interest. Questions built on this pattern are testing precisely the change." },
        ],
      },
      {
        heading: "Where the duty stops, and where it does not",
        blocks: [
          { kind: "p", text: "Suitability obligations attach to RECOMMENDATIONS. An unsolicited order — one the customer initiates entirely on their own — carries no recommendation and is generally permitted even if the representative considers it unwise, though the firm must mark the order unsolicited. That marking matters: mislabeling a solicited trade as unsolicited to escape the suitability analysis is a serious violation and a common fact pattern." },
          { kind: "p", text: "Beyond the individual trade, several practices breach the duty regardless of whether any single recommendation was suitable. CHURNING is excessive trading to generate commissions, judged against the customer's objectives and resources rather than any fixed number of trades. Recommending a strategy the customer cannot afford to hold to its horizon fails the care obligation. And unsuitable CONCENTRATION — loading a portfolio into a single security or sector — accepts unsystematic risk for which no additional return is expected." },
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
    readingMinutes: 6,
    summary: "How new securities reach the market — the registration process under the Securities Act of 1933, underwriting commitments, the prospectus, and exempt offerings.",
    intro:
      "The primary market is where capital is actually raised: a company sells new securities to investors for the first time. The SIE tests the registration process created by the Securities Act of 1933, the roles underwriters play, the documents involved, and the exemptions that let some offerings skip full registration. Know the timeline and the commitment types.",
    sections: [
      {
        heading: "The 1933 Act timeline, phase by phase",
        blocks: [
          { kind: "p", text: "The Securities Act of 1933 governs new issues through forced disclosure rather than merit review: the SEC does not judge whether an offering is a good investment, only whether the required facts have been disclosed. The process begins when the issuer files a REGISTRATION STATEMENT. From filing to the effective date runs the COOLING-OFF PERIOD, a minimum of 20 days and in practice usually longer, during which what may and may not be done is tested constantly." },
          { kind: "p", text: "During the cooling-off period the underwriter may distribute the PRELIMINARY PROSPECTUS — the red herring, named for the red legend on its cover — and may collect INDICATIONS OF INTEREST, which bind neither party. A TOMBSTONE advertisement, strictly limited in content, is permitted. What may NOT happen is any sale: no orders may be accepted, no money may be received, and no allocations may be confirmed. The red herring contains no final price, because the price is not set until pricing on the eve of effectiveness." },
          { kind: "table", table: { caption: "What is permitted, and when.", headers: ["Activity", "Cooling-off period", "After effective date"], rows: [["Distribute the preliminary prospectus", "Permitted", "Superseded by the final prospectus"], ["Accept indications of interest", "Permitted (non-binding)", "Converted to actual orders"], ["Accept orders or money", "PROHIBITED", "Permitted"], ["Publish a tombstone ad", "Permitted", "Permitted"], ["Deliver the final prospectus", "Does not yet exist", "Required at or before confirmation"], ["Hold the due diligence meeting", "Permitted (near the end)", "—"]] } },
          { kind: "callout", label: "The most common trap", body: "A customer says during the cooling-off period: 'I'll take 500 shares — here's my check.' The representative may record a non-binding indication of interest and must return the check. Accepting funds, confirming an allocation, or promising a price all constitute selling before effectiveness." },
        ],
      },
      {
        heading: "Who bears the risk: the commitment types",
        blocks: [
          { kind: "p", text: "The underwriting agreement determines where the risk of an unsold issue lands. In a FIRM COMMITMENT the underwriter BUYS the entire issue from the issuer and resells it, acting as PRINCIPAL — if the deal goes badly, the underwriter is left holding inventory, and the issuer is paid regardless. In a BEST EFFORTS underwriting the underwriter acts as AGENT, selling what it can and returning the rest; the issuer bears the risk of an undersubscribed deal. That single distinction — principal versus agent — is what every commitment question turns on." },
          { kind: "bullets", items: ["FIRM COMMITMENT: underwriter buys the issue as principal and bears the full risk.", "BEST EFFORTS: underwriter acts as agent; unsold shares simply return to the issuer.", "ALL-OR-NONE: the entire issue must be sold or the offering is cancelled and funds returned.", "MINI-MAX: a stated minimum must be sold for the deal to close, up to a stated maximum.", "STANDBY: the underwriter agrees to buy shares left unsubscribed in a rights offering."] },
          { kind: "p", text: "Large deals are distributed by a SYNDICATE of underwriters led by a SYNDICATE MANAGER, which reduces any single firm's exposure. A SELLING GROUP may assist in distribution but takes NO underwriting commitment and bears no risk of unsold shares — it earns only the selling concession. The total UNDERWRITING SPREAD is the difference between the public offering price and the proceeds to the issuer, and it divides into the manager's fee, the underwriting fee, and the selling concession, which is the largest piece because it goes to whoever actually places the shares." },
        ],
      },
      {
        heading: "Exemptions, and who may not buy an IPO",
        blocks: [
          { kind: "p", text: "Registration is expensive, so several exemptions permit capital raising without it. REGULATION D covers private placements sold principally to ACCREDITED INVESTORS, who qualify on income or net worth thresholds or by professional certification. RULE 147 exempts genuinely INTRASTATE offerings. REGULATION A+ permits smaller offerings under a lighter disclosure regime. RULE 144 governs the resale of restricted and control stock, imposing holding periods and volume limits so that insiders cannot quietly liquidate into the public market." },
          { kind: "p", text: "One rule reliably appears and is easy to overlook. Under FINRA Rule 5130, RESTRICTED PERSONS may not purchase shares in a new EQUITY issue at the public offering price. Restricted persons include member firms, their employees and associated persons, and their immediate family members who are materially supported by them. The purpose is to stop industry insiders from capturing the first-day gains on hot IPOs that should be allocated to public customers. Note the boundary: the restriction applies to new EQUITY issues, not to new debt offerings." },
          { kind: "bullets", items: ["The SEC never approves or endorses a security — claiming otherwise is a violation.", "The final prospectus must be delivered at or before confirmation of the sale.", "An accredited investor qualifies by income, net worth excluding primary residence, or certain professional credentials.", "Municipal securities and U.S. government securities are EXEMPT from 1933 Act registration."] },
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
  // ============================================================
  // CAPITAL MARKETS
  // ============================================================
  {
    id: "sie-mkt-q1", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 2,
    stem: "A pension fund buys 40,000 shares of a listed company directly from another institution, negotiating price privately and bypassing the exchange floor entirely. Where did this trade occur?",
    choices: ["The fourth market, where institutions trade directly with each other", "The primary market, because the size is comparable to an offering", "The third market, because listed shares traded off-exchange", "The secondary market's auction segment, since the shares are listed"],
    answerIndex: 0,
    explanation: "Institution-to-institution trading that bypasses both the exchange and a broker-dealer intermediary is the fourth market. The third market also involves exchange-listed securities traded over the counter, but it runs through broker-dealers rather than directly between institutions — that intermediary is the dividing line. Nothing here reaches the issuer, so no primary-market activity occurred, and the auction segment refers to exchange-floor trading, which was specifically bypassed.",
  },
  {
    id: "sie-mkt-q2", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 3,
    stem: "The MSRB adopts a new rule governing municipal dealer conduct. A bank dealer violates it. Which statement about enforcement is accurate?",
    choices: ["The MSRB will enforce the rule directly against the bank dealer itself", "Enforcement falls to bank regulators, because the MSRB writes rules but cannot enforce", "The MSRB will refer the matter to the municipal issuer for resolution", "The rule cannot apply at all, because the MSRB lacks authority over bank dealers"],
    answerIndex: 1,
    explanation: "The MSRB is a rulemaking body with no enforcement arm of its own. Its rules bind municipal securities dealers, including bank dealers, but enforcement is carried out by others — FINRA for broker-dealers and the federal bank regulators for bank dealers. The MSRB does have authority to write rules covering bank dealers, so the idea that the rule cannot apply is wrong, and issuers are outside MSRB jurisdiction entirely.",
  },
  {
    id: "sie-mkt-q3", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 3,
    stem: "The Federal Reserve begins selling Treasury securities on the open market. Holding all else constant, the most likely immediate effect is that:",
    choices: ["Bank reserves rise and short-term interest rates fall", "The federal deficit narrows as the Treasury retires debt", "Bank reserves fall and short-term interest rates rise", "Long-term bond prices rise as investors seek safety"],
    answerIndex: 2,
    explanation: "When the Fed sells securities, buyers pay with reserves, draining money from the banking system; less supply of lendable reserves pushes short-term rates up. This is contractionary, the mirror image of the Fed buying securities to inject reserves and lower rates. Open market operations are monetary policy conducted by the Fed, not fiscal operations by the Treasury, so the deficit is unaffected. Rising rates would pressure bond prices down, not up.",
  },
  {
    id: "sie-mkt-q4", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 2,
    stem: "An analyst notes that building permits and new manufacturing orders have both turned down sharply this quarter, while unemployment remains low. What does this combination most likely indicate?",
    choices: ["The economy has already entered a contraction that unemployment confirms", "The data is internally contradictory and cannot be interpreted", "Coincident indicators have decoupled from the business cycle", "Leading indicators are signaling a possible slowdown ahead of the labor market"],
    answerIndex: 3,
    explanation: "Building permits and new orders are leading indicators — they turn before the broader economy does. Unemployment is a lagging indicator that turns after the cycle has already moved, so low unemployment alongside falling leading indicators is exactly the pattern expected before a slowdown, not a contradiction. Because unemployment lags, it cannot confirm a contraction that has just begun.",
  },
  {
    id: "sie-mkt-q5", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 3,
    stem: "During a period of rising inflation, the Fed raises the discount rate. An investor holding long-term fixed-rate bonds is most exposed to which combination of risks?",
    choices: ["Interest-rate risk and purchasing-power risk, which compound each other", "Reinvestment risk and call risk, because issuers will refinance", "Credit risk and liquidity risk, because defaults rise with rates", "Legislative risk and currency risk, which dominate in tightening cycles"],
    answerIndex: 0,
    explanation: "Rising rates push existing bond prices down, which is interest-rate risk, while inflation erodes the real value of the fixed coupon stream, which is purchasing-power risk. Long-term fixed-rate debt is uniquely vulnerable to both at once, and the two reinforce each other. Reinvestment and call risk are dangers when rates FALL and issuers refinance. Rising rates do not automatically trigger defaults or currency exposure.",
  },
  {
    id: "sie-mkt-q6", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 3,
    stem: "An underwriter agrees to purchase an entire new issue from the issuer and resell it to the public, keeping any unsold shares. This arrangement means that:",
    choices: ["The issuer bears the risk that shares go unsold", "The underwriter acts as principal and bears the unsold-share risk", "The underwriter acts as agent and earns a commission per share sold", "The offering is automatically voided if the issue is not fully sold"],
    answerIndex: 1,
    explanation: "This describes a firm-commitment underwriting: the underwriter buys the issue as principal, so the capital risk of unsold shares shifts to the underwriter. In a best-efforts arrangement the underwriter would act only as agent and the issuer would keep that risk. An all-or-none arrangement is what voids a deal that is not fully subscribed, which is a different structure entirely.",
  },
  {
    id: "sie-mkt-q7", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 2,
    stem: "During the cooling-off period of a registered offering, a registered representative may lawfully:",
    choices: ["Accept a binding purchase order and hold the customer funds in escrow", "Distribute research reports recommending the issue to selected clients", "Send prospective buyers a preliminary prospectus and record indications of interest", "Confirm an allocation size and price to an interested institutional buyer"],
    answerIndex: 2,
    explanation: "During the cooling-off period no sales may occur and no money may change hands. What is permitted is distributing the preliminary prospectus, the red herring, and recording non-binding indications of interest. Binding orders, confirmed allocations, and promotional research recommending the issue all constitute selling efforts that must wait until the registration is effective.",
  },
  {
    id: "sie-mkt-q8", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 3,
    stem: "A yield curve inverts, with two-year Treasury yields exceeding ten-year yields. The most common interpretation is that market participants expect:",
    choices: ["Accelerating growth that will force the Fed to tighten", "A sustained rise in long-term inflation expectations", "An imminent default on short-dated government obligations", "Economic weakness ahead, with lower rates in the future"],
    answerIndex: 3,
    explanation: "Long yields sitting below short yields implies the market expects rates to fall, which typically accompanies expectations of economic weakness or recession. Expectations of acceleration or rising long-run inflation would steepen the curve upward instead, since investors would demand more yield to lend long. Treasury default expectations are not what curve inversion measures.",
  },
  {
    id: "sie-mkt-q9", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 2,
    stem: "Which statement most accurately distinguishes the SEC from FINRA?",
    choices: ["The SEC is a federal agency; FINRA is an SRO operating under SEC oversight", "Both are federal agencies, but the SEC handles only criminal matters", "FINRA is a federal agency; the SEC is an industry-funded membership body", "They are coequal regulators with independent statutory authority"],
    answerIndex: 0,
    explanation: "The SEC is a federal government agency created by the Securities Exchange Act of 1934. FINRA is a self-regulatory organization — an industry body that writes and enforces conduct rules for broker-dealers, but does so subject to SEC oversight and approval. They are not coequal, and neither characterization reversing their roles is correct. The SEC pursues civil enforcement; criminal cases are referred to the Department of Justice.",
  },
  {
    id: "sie-mkt-q10", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 3,
    stem: "Congress passes a large tax cut while the Federal Reserve simultaneously raises interest rates. These two actions are best characterized as:",
    choices: ["Contractionary fiscal policy paired with expansionary monetary policy", "Expansionary fiscal policy paired with contractionary monetary policy", "Two forms of monetary policy pursued by different bodies", "Two forms of fiscal policy, since both affect aggregate demand"],
    answerIndex: 1,
    explanation: "Taxing and spending decisions made by Congress are fiscal policy, and cutting taxes is expansionary because it leaves more money in private hands. Interest rate decisions made by the Federal Reserve are monetary policy, and raising rates is contractionary. The defining distinction is who acts and with which tool, not merely whether aggregate demand is affected.",
  },
  {
    id: "sie-mkt-q11", examSlug: "sie", topicId: "markets", topicName: "Capital Markets", difficulty: 2,
    stem: "A market maker quotes a bid of 24.10 and an ask of 24.25 for a security. A customer who places a market order to sell will most likely receive:",
    choices: ["24.25, the ask, because the dealer must fill at the better price", "24.175, the midpoint, under best-execution requirements", "24.10, the bid, because that is where the dealer buys", "A price set by the exchange rather than the quoting dealer"],
    answerIndex: 2,
    explanation: "A dealer buys at the bid and sells at the ask; the spread between them is the dealer's compensation. A customer selling into that quote therefore receives the bid of 24.10. The ask is what a customer would pay to buy. Best execution requires reasonable diligence to obtain a favorable price but does not entitle a customer to midpoint pricing.",
  },

  // ============================================================
  // PRODUCTS & RISKS
  // ============================================================
  {
    id: "sie-prod-q1", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 3,
    stem: "A company is liquidated. It has secured bondholders, general creditors, preferred shareholders with dividends two years in arrears on cumulative stock, and common shareholders. Which claim is satisfied last?",
    choices: ["The arrearages owed to cumulative preferred holders", "The claims of general unsecured creditors", "The claims of secured bondholders", "The claims of common shareholders"],
    answerIndex: 3,
    explanation: "Liquidation priority runs from secured creditors, to general unsecured creditors, to preferred shareholders, and finally to common shareholders, who hold the residual claim. Cumulative arrearages sit with the preferred class and are therefore satisfied before common, which is exactly the protection cumulative status provides. Common shareholders accept last position in exchange for unlimited upside participation.",
  },
  {
    id: "sie-prod-q2", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 3,
    stem: "An investor owns $6 cumulative preferred stock. The company skips dividends in years one and two, then wishes to pay common shareholders in year three. Before it may do so, preferred holders must receive:",
    choices: ["$18 per share, the arrearages plus the current year", "$6 per share, the current year's dividend only", "$12 per share, covering the two years missed", "Nothing, since preferred dividends are never guaranteed"],
    answerIndex: 0,
    explanation: "Cumulative preferred accrues every skipped dividend, and the full amount in arrears plus the current period must be paid before any common distribution. Two missed years at $6 is $12 in arrears, plus $6 for the current year, totaling $18. Paying only the current year would apply to noncumulative preferred, where skipped dividends are simply forfeited.",
  },
  {
    id: "sie-prod-q3", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 3,
    stem: "A convertible bond has a $1,000 par value and a conversion price of $25. The underlying stock trades at $32. The bond's parity price is:",
    choices: ["$1,250, reflecting the conversion price relationship", "$1,280, reflecting 40 shares at the market price", "$800, reflecting the discount to conversion value", "$1,000, since par governs the conversion"],
    answerIndex: 1,
    explanation: "The conversion ratio is par divided by conversion price, or $1,000 divided by $25, which equals 40 shares. Parity is the value of those shares at the current market price: 40 multiplied by $32 equals $1,280. Parity measures what the bond is worth in stock terms, so if the bond traded below $1,280 an arbitrage opportunity would exist.",
  },
  {
    id: "sie-prod-q4", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 3,
    stem: "An investor buys a call with a $40 strike for a premium of 5, and holds it to expiration when the stock closes at $43. The result is:",
    choices: ["A $300 profit, since the option finished in the money", "A $500 loss, the full premium, since the option expired", "A $200 loss, because the gain did not cover the premium", "Breakeven, because the stock exceeded the strike price"],
    answerIndex: 2,
    explanation: "The option finished in the money by $3 per share, which is $300 of intrinsic value recovered against a $500 premium paid, producing a net loss of $200. Being in the money and being profitable are different conditions: breakeven requires the stock to exceed the strike by the full premium, or $45 here. Exercising to recover $300 is still better than letting it expire worthless and losing the entire $500.",
  },
  {
    id: "sie-prod-q5", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 3,
    stem: "Which risk does diversification across many unrelated issuers most effectively reduce?",
    choices: ["Systematic risk, which affects the market as a whole", "Purchasing-power risk arising from inflation", "Interest-rate risk affecting all fixed-income holdings", "Unsystematic risk, which is specific to individual companies"],
    answerIndex: 3,
    explanation: "Unsystematic risk is company- or industry-specific and can be substantially eliminated by holding many unrelated securities, since one firm's misfortune is offset by others. Systematic risk is market-wide and cannot be diversified away, which is precisely why it is the risk investors are compensated for bearing. Inflation and interest-rate risk are broad market forces that diversification across equities does not remove.",
  },
  {
    id: "sie-prod-q6", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 3,
    stem: "An investor is comparing a municipal bond yielding 3.4% with a corporate bond yielding 4.9%. The investor is in the 32% federal bracket. Which is more attractive on an after-tax basis?",
    choices: ["The municipal bond, whose taxable-equivalent yield is roughly 5.0%", "The corporate bond, because its stated yield is higher", "They are precisely equivalent once the federal tax treatment is applied", "The comparison cannot be made without the state tax rate"],
    answerIndex: 0,
    explanation: "Taxable-equivalent yield is the municipal yield divided by one minus the marginal rate: 3.4% divided by 0.68 equals approximately 5.0%, which exceeds the corporate bond's 4.9%. Equivalently, the corporate's after-tax yield is 4.9% multiplied by 0.68, or about 3.33%, below the muni's tax-free 3.4%. State rates would strengthen the municipal case further but are not required to reach a conclusion federally.",
  },
  {
    id: "sie-prod-q7", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 2,
    stem: "Which security represents ownership of a foreign corporation's shares, trades in U.S. dollars on U.S. markets, and still exposes the holder to exchange-rate movements?",
    choices: ["A Eurodollar bond issued by the foreign corporation", "An American Depositary Receipt", "A closed-end country fund trading at a discount", "A Yankee bond registered with the SEC"],
    answerIndex: 1,
    explanation: "An American Depositary Receipt is a negotiable certificate representing foreign shares, priced and traded in dollars on U.S. markets, while the holder still bears currency risk because the underlying value remains denominated abroad. Eurodollar and Yankee bonds are debt instruments, not ownership. A country fund provides exposure but is a pooled investment vehicle rather than a direct receipt for specific shares.",
  },
  {
    id: "sie-prod-q8", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 3,
    stem: "An investor seeks the security with the greatest protection against unexpected inflation over a twenty-year horizon. Which is most suitable?",
    choices: ["A twenty-year zero-coupon Treasury STRIP", "A twenty-year Treasury bond with a fixed coupon", "Treasury Inflation-Protected Securities", "A ladder of six-month Treasury bills"],
    answerIndex: 2,
    explanation: "TIPS adjust principal with the Consumer Price Index and apply the fixed coupon rate to that adjusted principal, so both the interest payments and the final principal keep pace with inflation. A fixed-coupon long bond and especially a zero-coupon STRIP lock in nominal amounts and are therefore maximally exposed to inflation. A bill ladder reprices frequently, offering partial protection, but does not index principal to inflation directly.",
  },
  {
    id: "sie-prod-q9", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 3,
    stem: "Interest on Treasury securities and interest on municipal securities differ in tax treatment. Which statement is correct?",
    choices: ["Both are exempt from federal taxation but are fully taxable at the state level", "Treasury interest is exempt at every level; municipal interest is fully taxable", "Both are fully taxable, though each qualifies for preferential capital-gains rates", "Treasury interest is exempt from state tax; municipal interest is exempt from federal tax"],
    answerIndex: 3,
    explanation: "Treasury interest is subject to federal income tax but exempt from state and local taxation, while municipal bond interest is generally exempt from federal tax and often from state tax for residents of the issuing state. The two exemptions run in opposite directions, which is the distinction the exam tests. Interest income is not taxed at capital-gains rates in either case.",
  },
  {
    id: "sie-prod-q10", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 3,
    stem: "A bond is purchased at a discount to par. Ranking its yields from lowest to highest produces:",
    choices: ["Nominal yield, then current yield, then yield to maturity", "Yield to maturity, then current yield, then nominal yield", "Current yield, then nominal yield, then yield to maturity", "All three are identical because the coupon is fixed"],
    answerIndex: 0,
    explanation: "For a discount bond the ordering runs nominal, then current, then yield to maturity, because each measure captures more of the discount. Current yield divides the fixed coupon by a price below par, exceeding the nominal rate, and yield to maturity adds the pull toward par at maturity on top of that. For a premium bond the ordering reverses exactly.",
  },
  {
    id: "sie-prod-q11", examSlug: "sie", topicId: "products", topicName: "Products & Risks", difficulty: 3,
    stem: "An investor holding a callable bond faces which risk when prevailing interest rates fall significantly?",
    choices: ["Interest-rate risk, since the bond's price will decline", "Call risk, forcing reinvestment of proceeds at lower rates", "Credit risk, since the issuer's finances have deteriorated", "Liquidity risk, since callable bonds cannot be resold"],
    answerIndex: 1,
    explanation: "Falling rates give the issuer an incentive to redeem the bond early and refinance more cheaply, which caps the investor's upside and returns principal precisely when attractive reinvestment options have disappeared. That combination is call risk and its companion reinvestment risk. Falling rates push bond prices up rather than down, and a call reflects opportunistic refinancing rather than deteriorating credit.",
  },

  // ============================================================
  // EQUITY SECURITIES
  // ============================================================
  {
    id: "sie-eq-q1", examSlug: "sie", topicId: "equity", topicName: "Equity Securities", difficulty: 3,
    stem: "A shareholder wants to preserve proportional ownership when a company issues new shares. Which feature provides this protection?",
    choices: ["Cumulative voting rights in director elections", "A conversion privilege attached to the shares", "A preemptive right to subscribe to the new issue", "Statutory voting applied on a one-share-one-vote basis"],
    answerIndex: 2,
    explanation: "A preemptive right lets existing shareholders buy a proportional share of a new issue before it reaches the public, preventing dilution of their ownership percentage. Cumulative voting concentrates votes to help minority holders elect directors, which addresses board representation rather than dilution. Conversion privileges apply to convertible securities, and statutory voting is a voting method, not a subscription protection.",
  },
  {
    id: "sie-eq-q2", examSlug: "sie", topicId: "equity", topicName: "Equity Securities", difficulty: 3,
    stem: "Rights and warrants both permit the purchase of stock. Which pairing correctly describes each at issuance?",
    choices: ["Rights: long-term, struck above market. Warrants: short-term, struck below market", "Both are short-term and struck below the prevailing market price", "Both are long-term sweeteners attached to debt offerings", "Rights: short-term, struck below market. Warrants: long-term, struck above market"],
    answerIndex: 3,
    explanation: "Rights arise from a rights offering, last weeks, and carry a subscription price below the current market as compensation to existing holders for the dilution a new issue causes. Warrants typically last years, are attached to bonds or preferred stock as a sweetener to help place the offering, and carry an exercise price above the market when issued. Reversing the two is the most common exam trap.",
  },
  {
    id: "sie-eq-q3", examSlug: "sie", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "Preferred stock generally trades more like a fixed-income security than common stock because:",
    choices: ["Its fixed stated dividend makes its price sensitive to interest rates", "It carries expanded voting rights that help stabilize its market value", "It is guaranteed by the issuer's assets in all circumstances", "Its dividend increases automatically with corporate earnings"],
    answerIndex: 0,
    explanation: "The fixed stated dividend gives preferred stock a bond-like cash flow profile, so its price moves inversely with interest rates. Preferred is generally non-voting, is not guaranteed, and its dividend does not rise with earnings — that participation feature exists only in participating preferred, which is the exception rather than the rule.",
  },
  {
    id: "sie-eq-q4", examSlug: "sie", topicId: "equity", topicName: "Equity Securities", difficulty: 3,
    stem: "A corporation declares a 2-for-1 stock split. An investor holding 300 shares purchased at $60 will afterward hold:",
    choices: ["600 shares with an unchanged cost basis of $60 per share", "600 shares with an adjusted cost basis of $30 per share", "300 shares with an adjusted cost basis of $30 per share", "150 shares with an adjusted cost basis of $120 per share"],
    answerIndex: 1,
    explanation: "A forward split multiplies share count and divides per-share cost basis proportionally, leaving total position value and total basis unchanged. Three hundred shares become 600, and a $60 basis becomes $30. Total basis remains $18,000 either way, which is why a split is not itself a taxable event.",
  },
  {
    id: "sie-eq-q5", examSlug: "sie", topicId: "equity", topicName: "Equity Securities", difficulty: 3,
    stem: "Which statement about cumulative voting is accurate?",
    choices: ["It grants each share one vote per director position, cast separately", "It applies only to preferred shareholders in contested elections", "It permits votes to be concentrated, generally aiding minority shareholders", "It doubles the voting power of shares held longer than one year"],
    answerIndex: 2,
    explanation: "Cumulative voting lets a shareholder pool all available votes behind one or a few candidates, which improves the odds that a minority holder can elect at least one director. Statutory voting is the method that allocates votes separately to each position and structurally favors majority holders. Preferred stock is typically non-voting, and holding period does not affect voting power.",
  },
  {
    id: "sie-eq-q6", examSlug: "sie", topicId: "equity", topicName: "Equity Securities", difficulty: 3,
    stem: "An investor must own a stock by which date to receive a declared dividend?",
    choices: ["The payable date, when the company distributes the funds", "The declaration date, when the board authorizes the dividend", "The ex-dividend date itself, buying at the opening price", "The record date, having purchased before the ex-dividend date"],
    answerIndex: 3,
    explanation: "The investor must be an owner of record on the record date, which requires purchasing before the ex-dividend date so that settlement occurs in time. Buying on or after the ex-dividend date means the seller retains the dividend, which is why the stock price typically drops by roughly the dividend amount that morning. Declaration and payable dates bracket the process but do not determine entitlement.",
  },

  // ============================================================
  // DEBT SECURITIES
  // ============================================================
  {
    id: "sie-debt-q1", examSlug: "sie", topicId: "debt", topicName: "Debt Securities", difficulty: 3,
    stem: "A 5% bond with $1,000 par trades at $920. Its current yield is closest to:",
    choices: ["5.43%, reflecting the coupon against the discounted price", "5.00%, because the coupon rate is fixed", "4.60%, reflecting the price relative to par", "8.70%, reflecting the discount recovered at maturity"],
    answerIndex: 0,
    explanation: "Current yield divides the annual coupon by the current market price: $50 divided by $920 is approximately 5.43%. It exceeds the 5% nominal rate precisely because the bond trades at a discount, so each dollar invested buys more coupon income. The figure that additionally captures the pull to par at maturity is yield to maturity, which would be higher still.",
  },
  {
    id: "sie-debt-q2", examSlug: "sie", topicId: "debt", topicName: "Debt Securities", difficulty: 3,
    stem: "Which corporate debt instrument is backed solely by the issuer's general creditworthiness, with no specific asset pledged?",
    choices: ["An equipment trust certificate", "A debenture", "A first mortgage bond", "A collateral trust bond"],
    answerIndex: 1,
    explanation: "A debenture is unsecured, resting entirely on the issuer's general credit and standing behind secured claims in liquidation. Equipment trust certificates are secured by specific equipment such as rolling stock, mortgage bonds by real property, and collateral trust bonds by securities of other companies held in trust. Each of the alternatives names a specific pledged asset.",
  },
  {
    id: "sie-debt-q3", examSlug: "sie", topicId: "debt", topicName: "Debt Securities", difficulty: 2,
    stem: "A Treasury bill differs from a Treasury note principally in that a bill:",
    choices: ["Pays semiannual interest over a two-to-ten-year term", "Adjusts its principal with the Consumer Price Index", "Is issued at a discount and pays no periodic interest", "Is issued by federal agencies rather than the Treasury"],
    answerIndex: 2,
    explanation: "T-bills mature in one year or less, are sold at a discount to face value, and pay no coupon; the return is the difference between purchase price and the face amount received at maturity. Notes carry semiannual coupons over two to ten years. Principal indexing describes TIPS, and agency issuance is a separate category from direct Treasury obligations.",
  },
  {
    id: "sie-debt-q4", examSlug: "sie", topicId: "debt", topicName: "Debt Securities", difficulty: 3,
    stem: "Which agency security carries the explicit full faith and credit backing of the U.S. government?",
    choices: ["Fannie Mae mortgage-backed securities", "Freddie Mac participation certificates", "Federal Home Loan Bank consolidated obligations", "Ginnie Mae mortgage-backed securities"],
    answerIndex: 3,
    explanation: "Ginnie Mae is a government corporation within HUD, and its securities carry the explicit full faith and credit guarantee of the United States. Fannie Mae and Freddie Mac are government-sponsored enterprises whose obligations are not explicitly guaranteed, and Federal Home Loan Bank obligations are likewise GSE debt. The distinction between explicit backing and implied support is the tested point.",
  },
  {
    id: "sie-debt-q5", examSlug: "sie", topicId: "debt", topicName: "Debt Securities", difficulty: 3,
    stem: "A general obligation bond differs from a revenue bond primarily because the general obligation bond:",
    choices: ["Is backed by the issuer's taxing power and typically requires voter approval", "Is backed by revenues generated from a specific financed project", "Carries no debt limit and requires no voter authorization", "Carries a federal guarantee protecting holders against issuer default"],
    answerIndex: 0,
    explanation: "General obligation bonds are secured by the issuer's full faith, credit, and taxing power, which is why they usually require voter approval and count against statutory debt limits. Revenue bonds are backed only by the receipts of the specific facility financed, generally escape debt limits, and typically need no referendum. Neither type carries a federal guarantee.",
  },
  {
    id: "sie-debt-q6", examSlug: "sie", topicId: "debt", topicName: "Debt Securities", difficulty: 3,
    stem: "Commercial paper is best described as:",
    choices: ["Long-term secured corporate debt sold through underwriters", "Short-term unsecured corporate debt issued at a discount", "A negotiable time deposit issued by a commercial bank", "A short-term municipal note anticipating tax receipts"],
    answerIndex: 1,
    explanation: "Commercial paper is unsecured short-term corporate debt, issued at a discount, with maturities of 270 days or less — a limit that keeps it exempt from Securities Act registration. Negotiable certificates of deposit are bank instruments, and tax anticipation notes are municipal. Its short maturity and lack of collateral are the defining features.",
  },

  // ============================================================
  // INVESTMENT FUNDS
  // ============================================================
  {
    id: "sie-funds-q1", examSlug: "sie", topicId: "funds", topicName: "Investment Funds", difficulty: 3,
    stem: "A mutual fund has a net asset value of $18.60 and a maximum sales charge of 7%. Its public offering price is closest to:",
    choices: ["$19.90, computed as NAV plus 7% of NAV", "$17.30, computed as NAV less the sales charge", "$19.90, computed as NAV plus 7% of the offering price", "$18.60, since the charge is deducted at redemption"],
    answerIndex: 2,
    explanation: "The sales charge is expressed as a percentage of the public offering price, not of NAV, so the correct computation is NAV divided by one minus the charge: $18.60 divided by 0.93 equals approximately $20.00. Applying 7% to NAV instead understates the offering price, which is the most common error. Front-end charges are added at purchase rather than deducted at redemption.",
  },
  {
    id: "sie-funds-q2", examSlug: "sie", topicId: "funds", topicName: "Investment Funds", difficulty: 3,
    stem: "Which characteristic distinguishes a closed-end fund from an open-end fund?",
    choices: ["It continuously issues redeemable shares priced at the next computed NAV", "It holds a fixed, unmanaged portfolio of securities until a stated termination date", "It may only be sold to accredited investors under a private placement", "Its fixed share count trades on an exchange, potentially at a premium or discount"],
    answerIndex: 3,
    explanation: "A closed-end fund issues a fixed number of shares in an initial offering, after which those shares trade among investors on an exchange at market-determined prices that may sit above or below net asset value. Continuous issuance and redemption at the next computed NAV describes open-end mutual funds, while a fixed unmanaged portfolio with a termination date describes a unit investment trust.",
  },
  {
    id: "sie-funds-q3", examSlug: "sie", topicId: "funds", topicName: "Investment Funds", difficulty: 3,
    stem: "An investor plans to invest a large lump sum in a single fund family and wants to reduce the sales charge. Which provision most directly helps?",
    choices: ["A breakpoint schedule reducing the charge at higher investment levels", "A contingent deferred sales charge declining over the holding period", "A twelve-b-one fee paid annually from fund assets", "A conversion privilege exchanging Class B shares for Class A"],
    answerIndex: 0,
    explanation: "Breakpoints reduce the percentage sales charge once an investment reaches stated dollar thresholds, which is exactly the benefit a large lump-sum investor should receive. Failing to inform a customer of an available breakpoint is a prohibited practice known as breakpoint selling. Deferred charges and annual distribution fees are different fee structures that do not lower a front-end charge on a large purchase.",
  },
  {
    id: "sie-funds-q4", examSlug: "sie", topicId: "funds", topicName: "Investment Funds", difficulty: 3,
    stem: "Which statement about a real estate investment trust is accurate?",
    choices: ["It passes both operating income and losses through directly to its shareholders", "It must distribute at least 90% of taxable income to retain favorable treatment", "It is structured as a limited partnership managed by a general partner", "Its shares are redeemable with the trust at the next computed net asset value"],
    answerIndex: 1,
    explanation: "A REIT must distribute at least 90% of its taxable income to shareholders to avoid taxation at the entity level. Unlike a direct participation program, a REIT does not pass losses through to investors — that pass-through of both income and loss is the defining feature of a limited partnership. Listed REIT shares trade on exchanges rather than being redeemed at NAV.",
  },
  {
    id: "sie-funds-q5", examSlug: "sie", topicId: "funds", topicName: "Investment Funds", difficulty: 2,
    stem: "An exchange-traded fund differs from a traditional mutual fund principally because the ETF:",
    choices: ["Prices only once daily after the market closes", "Guarantees performance matching its benchmark index", "Trades intraday at market prices and may be purchased on margin", "Cannot be sold short or purchased on margin under any circumstances"],
    answerIndex: 2,
    explanation: "ETFs trade throughout the session at market-determined prices, and because they trade like stock they may be bought on margin and sold short. Mutual funds transact once daily at the next computed net asset value. No fund guarantees index performance, since tracking error and expenses always create some divergence.",
  },
  {
    id: "sie-funds-q6", examSlug: "sie", topicId: "funds", topicName: "Investment Funds", difficulty: 3,
    stem: "A variable annuity differs from a fixed annuity because in the variable contract:",
    choices: ["The insurer guarantees a minimum rate of return on contributions", "Assets are held in the insurer's general account", "Payments are exempt from ordinary income taxation upon distribution", "Assets are held in a separate account and the owner bears investment risk"],
    answerIndex: 3,
    explanation: "Variable annuity premiums are invested in a separate account of sub-accounts, so investment performance and therefore investment risk belong to the contract owner, which is why the product is a security requiring prospectus delivery. A fixed annuity keeps assets in the insurer's general account with a guaranteed rate, placing the risk on the insurer. Annuity distributions of earnings are taxed as ordinary income.",
  },

  // ============================================================
  // OPTIONS
  // ============================================================
  {
    id: "sie-opt-q1", examSlug: "sie", topicId: "options", topicName: "Options", difficulty: 3,
    stem: "An investor writes an uncovered call. The maximum potential loss on this position is:",
    choices: ["Theoretically unlimited as the stock rises", "Limited to the premium received", "Limited to the strike price less the premium", "Limited to the difference between strike and current market price"],
    answerIndex: 0,
    explanation: "An uncovered call writer is obligated to deliver shares at the strike price no matter how high the stock climbs, and because there is no ceiling on a stock's price the potential loss is theoretically unlimited. The premium received merely offsets the first portion of that loss. A loss limited to strike minus premium describes the short put, whose downside stops when the stock reaches zero.",
  },
  {
    id: "sie-opt-q2", examSlug: "sie", topicId: "options", topicName: "Options", difficulty: 3,
    stem: "An investor buys a put with a $70 strike for a premium of 4. The breakeven price at expiration is:",
    choices: ["$74, the strike plus the premium", "$66, the strike minus the premium", "$70, the strike price itself", "$4, the premium paid"],
    answerIndex: 1,
    explanation: "A put buyer profits as the stock falls, so the position breaks even when the stock has declined below the strike by the amount of the premium: $70 minus $4 equals $66. The mnemonic call up, put down captures the direction — a call's breakeven adds the premium to the strike, and a put's subtracts it.",
  },
  {
    id: "sie-opt-q3", examSlug: "sie", topicId: "options", topicName: "Options", difficulty: 3,
    stem: "An investor owns 100 shares purchased at $52 and writes a covered call with a $55 strike for a premium of 3. The maximum gain is:",
    choices: ["$300, the premium received", "$300, the appreciation to the strike only", "$600, the strike appreciation plus the premium", "Unlimited, since the shares may continue rising"],
    answerIndex: 2,
    explanation: "If the stock rises above the strike the call is exercised and the shares are sold at $55, producing $3 per share of appreciation plus the $3 premium retained, or $600 total on 100 shares. Writing the call caps participation above $55, which is the trade-off for the income received, so unlimited upside no longer applies.",
  },
  {
    id: "sie-opt-q4", examSlug: "sie", topicId: "options", topicName: "Options", difficulty: 3,
    stem: "A stock trades at $46. A call with a $50 strike carries a premium of 1.50. The option's intrinsic and time value are:",
    choices: ["Intrinsic 4.00, time value negative 2.50", "Intrinsic 1.50, time value 0", "Intrinsic 0, time value 4.00", "Intrinsic 0, time value 1.50"],
    answerIndex: 3,
    explanation: "A call is in the money only when the stock exceeds the strike; at $46 against a $50 strike this call is out of the money, so intrinsic value is zero and the entire $1.50 premium is time value. Intrinsic value can never be negative, because an option holder would simply decline to exercise.",
  },
  {
    id: "sie-opt-q5", examSlug: "sie", topicId: "options", topicName: "Options", difficulty: 3,
    stem: "An investor holding a large unrealized gain in a stock wants downside protection while retaining upside participation. Which strategy fits best?",
    choices: ["Purchasing a protective put on the position", "Writing a covered call against the position", "Selling the stock short against the box", "Writing an uncovered put on the same stock"],
    answerIndex: 0,
    explanation: "A protective put establishes a floor at the strike price while leaving upside participation intact, functioning as insurance for the cost of the premium. A covered call generates income but caps the upside, which conflicts with the stated goal. Shorting against the box neutralizes both directions, and writing an uncovered put adds downside exposure rather than removing it.",
  },
  {
    id: "sie-opt-q6", examSlug: "sie", topicId: "options", topicName: "Options", difficulty: 3,
    stem: "Which position profits most directly from a large price move in either direction?",
    choices: ["A short straddle, selling a call and a put at the same strike", "A long straddle, buying a call and a put at the same strike", "A covered call combined with a protective put", "A long call financed by writing a second call at a higher strike"],
    answerIndex: 1,
    explanation: "A long straddle pairs a purchased call and put at the same strike, profiting if the stock moves far enough in either direction to cover both premiums — a bet on volatility rather than direction. The short straddle is the opposite wager, profiting when the stock stays near the strike. The remaining structures cap gains and are directional or neutral rather than volatility-driven.",
  },

  // ============================================================
  // MUNICIPAL SECURITIES
  // ============================================================
  {
    id: "sie-muni-q1", examSlug: "sie", topicId: "munis", topicName: "Municipal Securities", difficulty: 3,
    stem: "An analyst evaluating a revenue bond would focus primarily on:",
    choices: ["The debt-per-capita ratio and assessed property values", "The issuer's statutory debt limit and referendum results", "The debt service coverage ratio and a feasibility study", "The full faith and credit pledge of the issuing municipality"],
    answerIndex: 2,
    explanation: "Revenue bonds are repaid solely from the receipts of the financed facility, so the analysis centers on whether projected revenues cover debt service, evidenced by the coverage ratio and the feasibility study. Debt per capita, assessed valuation, debt limits, and referendum outcomes are the analytical tools for general obligation bonds, which depend on taxing power.",
  },
  {
    id: "sie-muni-q2", examSlug: "sie", topicId: "munis", topicName: "Municipal Securities", difficulty: 3,
    stem: "An investor in the 24% federal bracket compares a 3.0% municipal bond with a taxable corporate bond. What corporate yield is required to match the municipal on an after-tax basis?",
    choices: ["2.28%, the municipal yield multiplied by one minus the tax rate", "3.24%, the municipal yield increased by the tax rate", "3.00%, since municipal interest is taxable at the same rate", "3.72%, the municipal yield divided by one minus the tax rate"],
    answerIndex: 3,
    explanation: "Taxable-equivalent yield equals the tax-free yield divided by one minus the marginal rate: 3.0% divided by 0.76 equals approximately 3.95%. Multiplying instead of dividing produces the after-tax yield of a taxable bond, which is the reverse computation. The higher the investor's bracket, the greater the advantage municipal interest provides.",
  },
  {
    id: "sie-muni-q3", examSlug: "sie", topicId: "munis", topicName: "Municipal Securities", difficulty: 2,
    stem: "Municipal bond interest received by a resident of the issuing state is generally:",
    choices: ["Exempt from federal tax and often from that state's income tax", "Subject to federal tax but exempt from state tax", "Fully taxable at both the federal and state levels", "Exempt from federal tax only if the bond is a revenue bond"],
    answerIndex: 0,
    explanation: "Municipal interest is generally exempt from federal income tax, and residents of the issuing state typically receive a state exemption as well, producing the double exemption that drives demand from high-bracket investors in high-tax states. The pattern of federal taxation with state exemption applies to Treasury securities instead. The exemption does not turn on whether the bond is a general obligation or revenue issue.",
  },
  {
    id: "sie-muni-q4", examSlug: "sie", topicId: "munis", topicName: "Municipal Securities", difficulty: 3,
    stem: "A municipality issues short-term notes to bridge a timing gap until property tax collections arrive. These are best described as:",
    choices: ["Revenue anticipation notes secured by project receipts", "Tax anticipation notes secured by expected tax revenue", "Bond anticipation notes retired by a future bond sale", "General obligation bonds with a serial maturity structure"],
    answerIndex: 1,
    explanation: "Tax anticipation notes are short-term municipal borrowings repaid from expected tax collections, smoothing the mismatch between when a municipality spends and when taxes arrive. Revenue anticipation notes look to non-tax receipts, and bond anticipation notes are retired from the proceeds of a permanent bond issue. Each note type is named for the source that will repay it.",
  },
  {
    id: "sie-muni-q5", examSlug: "sie", topicId: "munis", topicName: "Municipal Securities", difficulty: 3,
    stem: "Where would an investor find official disclosure documents for a municipal issuer?",
    choices: ["The SEC's EDGAR database", "FINRA BrokerCheck", "The MSRB's EMMA system", "The issuer's state banking commission"],
    answerIndex: 2,
    explanation: "EMMA, the Electronic Municipal Market Access system operated by the MSRB, is the official repository for municipal disclosure documents and trade data. EDGAR holds corporate registration and periodic filings, and BrokerCheck reports the licensing and disciplinary history of firms and representatives. Matching the repository to the security type is the tested skill.",
  },
  {
    id: "sie-muni-q6", examSlug: "sie", topicId: "munis", topicName: "Municipal Securities", difficulty: 3,
    stem: "Which factor would make a municipal bond LESS attractive to a particular investor?",
    choices: ["The investor is in the highest marginal federal tax bracket", "The investor resides in the state where the bond was issued", "The investor seeks to reduce federally taxable interest income", "The investor holds the bond in a tax-deferred retirement account"],
    answerIndex: 3,
    explanation: "Holding a municipal bond inside a tax-deferred account wastes its defining advantage, since the account already shelters income from current taxation while the investor accepts the lower yield municipals pay. High brackets, in-state residency, and a desire to reduce taxable interest all strengthen the case for municipal ownership in a taxable account.",
  },

  // ============================================================
  // CUSTOMER ACCOUNTS
  // ============================================================
  {
    id: "sie-acct-q1", examSlug: "sie", topicId: "accounts", topicName: "Customer Accounts", difficulty: 3,
    stem: "Two siblings own an account as tenants in common with unequal interests. Upon one sibling's death, that interest passes to:",
    choices: ["The deceased sibling's estate", "The surviving sibling automatically by operation of law", "The broker-dealer, pending court instruction", "The account's designated beneficiary on file"],
    answerIndex: 0,
    explanation: "Tenants in common permits unequal fractional ownership, and a decedent's share passes to that person's estate for distribution under the will or intestacy law. Automatic transfer to the survivor is the defining feature of joint tenants with right of survivorship, which is the structure the question deliberately contrasts. A transfer-on-death designation would be a separate registration choice.",
  },
  {
    id: "sie-acct-q2", examSlug: "sie", topicId: "accounts", topicName: "Customer Accounts", difficulty: 3,
    stem: "Which statement about an UTMA custodial account is accurate?",
    choices: ["Multiple minors may be named so siblings can share the assets", "One custodian holds assets for one minor, and gifts are irrevocable", "Gifts are revocable and may be reclaimed by the donor", "The custodian retains ownership after the minor reaches majority"],
    answerIndex: 1,
    explanation: "An UTMA or UGMA account pairs exactly one custodian with one minor, and every gift into it is an irrevocable transfer belonging to the minor. Control passes to the beneficiary at the age of majority, which is precisely why the custodian cannot retain ownership afterward. Separate accounts are required for separate minors.",
  },
  {
    id: "sie-acct-q3", examSlug: "sie", topicId: "accounts", topicName: "Customer Accounts", difficulty: 3,
    stem: "A representative wishes to decide which securities to buy in a customer's account without contacting the customer for each trade. This requires:",
    choices: ["A verbal authorization documented in the customer file", "Approval from a principal after the first three transactions", "Prior written authorization from the customer and firm approval", "Nothing further, provided the trades are suitable"],
    answerIndex: 2,
    explanation: "Choosing the security, the amount, and whether to buy or sell constitutes discretion, which requires prior written authorization from the customer and acceptance of the account by the firm. Deciding only the price or timing of an order the customer has already specified is not discretion and needs no written authority. Suitability is a separate and additional obligation.",
  },
  {
    id: "sie-acct-q4", examSlug: "sie", topicId: "accounts", topicName: "Customer Accounts", difficulty: 3,
    stem: "A representative learns that an individual account holder has died. The first appropriate action is to:",
    choices: ["Liquidate the positions to protect the estate from market risk", "Transfer the assets to the surviving spouse immediately", "Continue executing the customer's most recent standing instructions", "Cancel open orders and freeze the account pending documentation"],
    answerIndex: 3,
    explanation: "On notice of death the representative cancels all open orders and freezes the account, then awaits required documents such as a death certificate and letters of appointment before acting further. Liquidating, transferring, or continuing to trade all constitute unauthorized activity, since the deceased customer's authority ended and no one else has yet been legally empowered to act.",
  },
  {
    id: "sie-acct-q5", examSlug: "sie", topicId: "accounts", topicName: "Customer Accounts", difficulty: 3,
    stem: "Under Regulation T, an investor purchasing $30,000 of marginable stock must deposit:",
    choices: ["$15,000, the initial requirement of 50%", "$7,500, the maintenance requirement of 25%", "$9,000, the short maintenance requirement of 30%", "$30,000, since margin is unavailable for new purchases"],
    answerIndex: 0,
    explanation: "Regulation T sets the initial margin requirement at 50% of the purchase amount, so a $30,000 position requires a $15,000 deposit, with the broker lending the balance. The 25% figure is FINRA's minimum maintenance requirement for long positions after the trade, and 30% applies to short positions — both govern what must be maintained, not what must be deposited initially.",
  },
  {
    id: "sie-acct-q6", examSlug: "sie", topicId: "accounts", topicName: "Customer Accounts", difficulty: 3,
    stem: "SIPC coverage protects a customer against which of the following?",
    choices: ["A decline in the market value of securities held in the account", "The failure of the broker-dealer holding the customer's assets", "Losses resulting from unsuitable recommendations by a representative", "The bankruptcy of a corporation whose shares the customer owns"],
    answerIndex: 1,
    explanation: "SIPC protects customers when a member broker-dealer fails, covering up to $500,000 per customer including a $250,000 limit on cash. It is custodial protection, not investment protection, so ordinary market losses, poor advice, and the failure of an issuer whose stock the customer chose all fall outside its scope.",
  },

  // ============================================================
  // TRADING
  // ============================================================
  {
    id: "sie-trd-q1", examSlug: "sie", topicId: "trading", topicName: "Trading & Prohibited Acts", difficulty: 3,
    stem: "A customer wants to buy a stock currently trading at $52 but will pay no more than $50. The appropriate order is a:",
    choices: ["Market order, ensuring immediate execution", "Buy stop order at $50, triggered if the price declines", "Buy limit order at $50, which fills at $50 or better", "Sell stop order at $50, protecting against further decline"],
    answerIndex: 2,
    explanation: "A buy limit sets a ceiling on the price paid and executes only at the limit or lower, which is exactly the customer's instruction, accepting that it may not fill while the stock trades above $50. A market order would execute immediately at $52 with no price protection. Buy stops are placed above the market and activate on a rise, and a sell stop is the wrong side of the trade entirely.",
  },
  {
    id: "sie-trd-q2", examSlug: "sie", topicId: "trading", topicName: "Trading & Prohibited Acts", difficulty: 3,
    stem: "Regular-way settlement for a common stock trade executed on Monday occurs on:",
    choices: ["Monday, the same business day as the trade", "Wednesday, two business days after the trade", "Thursday, three business days after the trade", "Tuesday, one business day after the trade"],
    answerIndex: 3,
    explanation: "Regular-way settlement for equities, corporate bonds, and municipal securities is one business day after the trade date, a standard that shortened from two days in May 2024. A Monday trade therefore settles Tuesday, assuming no intervening holiday. Materials still citing a two-day cycle are outdated.",
  },
  {
    id: "sie-trd-q3", examSlug: "sie", topicId: "trading", topicName: "Trading & Prohibited Acts", difficulty: 3,
    stem: "A representative repeatedly trades a retirement account, generating substantial commissions while the account's allocation remains essentially unchanged. This conduct is best described as:",
    choices: ["Churning, or excessive trading for commission purposes", "Front-running the customer's own orders", "Painting the tape to simulate market activity", "Selling away by transacting privately outside the employing firm"],
    answerIndex: 0,
    explanation: "Trading whose frequency serves the representative's compensation rather than the customer's objectives is churning, and an unchanged allocation despite heavy activity is the classic evidence. Front-running involves trading ahead of a known customer order, painting the tape is manipulation through matched trades, and selling away means transacting outside the firm without approval.",
  },
  {
    id: "sie-trd-q4", examSlug: "sie", topicId: "trading", topicName: "Trading & Prohibited Acts", difficulty: 3,
    stem: "Two representatives at different firms agree to trade a thinly traded security back and forth to create the appearance of active volume. This is:",
    choices: ["Permissible, since both sides are bona fide transactions", "Market manipulation through matched orders, which is prohibited", "Acceptable if disclosed to both firms' compliance departments", "Front-running, since it precedes customer interest"],
    answerIndex: 1,
    explanation: "Coordinated buying and selling designed to create a misleading impression of trading activity constitutes matched orders, a form of manipulation prohibited under the Securities Exchange Act of 1934. The trades are not bona fide because neither party intends a genuine change in beneficial ownership, and disclosure to compliance cannot cure conduct that is unlawful in itself.",
  },
  {
    id: "sie-trd-q5", examSlug: "sie", topicId: "trading", topicName: "Trading & Prohibited Acts", difficulty: 3,
    stem: "An analyst learns from a friend at a target company that a merger will be announced next week and buys shares. The analyst has most likely:",
    choices: ["Acted properly, since the information arrived through a personal social contact", "Committed churning by trading repeatedly ahead of a pending corporate action", "Violated insider trading prohibitions by trading on material nonpublic information", "Engaged in selling away by transacting outside approved firm channels entirely"],
    answerIndex: 2,
    explanation: "Merger news is material, and information not yet disclosed to the public is nonpublic, so trading on it violates insider trading prohibitions regardless of how casually the tip arrived. Both the tipper and the tippee face liability. The personal nature of the source is precisely what creates the breach of duty rather than excusing it.",
  },
  {
    id: "sie-trd-q6", examSlug: "sie", topicId: "trading", topicName: "Trading & Prohibited Acts", difficulty: 3,
    stem: "A customer deposits $12,000 in cash in a single day. The firm is required to file:",
    choices: ["A Suspicious Activity Report, regardless of the amount", "Form U4, amending the customer's registration record", "No report, since the deposit is below the $25,000 threshold", "A Currency Transaction Report, because the amount exceeds $10,000"],
    answerIndex: 3,
    explanation: "Cash transactions exceeding $10,000 in a single day trigger a Currency Transaction Report under Bank Secrecy Act requirements. A Suspicious Activity Report is filed when activity appears suspicious, which is a separate trigger not automatically met by size alone. Form U4 registers representatives, not customers.",
  },
  {
    id: "sie-trd-q7", examSlug: "sie", topicId: "trading", topicName: "Trading & Prohibited Acts", difficulty: 3,
    stem: "A representative accepts an order from the spouse of an account owner. The spouse is not named on the account and has no written authorization. The representative should:",
    choices: ["Decline the order absent proper third-party written authorization", "Enter the order, since spouses share a legal interest in assets", "Enter the order but mark it unsolicited to limit liability", "Enter the order only if it is a sale rather than a purchase"],
    answerIndex: 0,
    explanation: "Only the account owner or a properly authorized third party with written authority on file may direct activity in an account, and marital status confers no such authority by itself. Marking the ticket unsolicited addresses how an order originated, not whether the person placing it was entitled to do so, and the buy-versus-sell distinction is irrelevant to authorization.",
  },
  {
    id: "sie-trd-q8", examSlug: "sie", topicId: "trading", topicName: "Trading & Prohibited Acts", difficulty: 3,
    stem: "A trade confirmation must be delivered to the customer:",
    choices: ["Within thirty days following the end of the month", "At or before completion of the transaction", "Only upon the customer's written request", "At the close of the calendar quarter with the account statement"],
    answerIndex: 1,
    explanation: "A confirmation disclosing the essential trade terms must reach the customer at or before completion of the transaction, meaning by settlement. Account statements follow a separate schedule, generally quarterly at minimum and monthly when there is activity, so confusing the two documents' timing is the tested trap.",
  },
  {
    id: "sie-trd-q9", examSlug: "sie", topicId: "trading", topicName: "Trading & Prohibited Acts", difficulty: 3,
    stem: "A representative sells a private real estate investment to a customer without notifying the employing firm. This violation is known as:",
    choices: ["Churning the customer's account for additional compensation", "Breakpoint selling, structuring a purchase to avoid a reduced sales charge", "Selling away, a private securities transaction without firm approval", "Freeriding by trading without sufficient funds on deposit"],
    answerIndex: 2,
    explanation: "Participating in a private securities transaction outside the scope of employment without prior written notice to and approval from the firm is selling away, prohibited because it removes the transaction from the firm's supervision. Breakpoint selling involves mutual fund sales charges, churning involves excessive trading, and freeriding involves paying for securities with the proceeds of their own sale.",
  },
  {
    id: "sie-trd-q10", examSlug: "sie", topicId: "trading", topicName: "Trading & Prohibited Acts", difficulty: 3,
    stem: "A buy stop order placed above the current market price becomes a market order when the stock:",
    choices: ["Declines to or below the stop price", "Trades at the prior session's closing price", "Reaches the specified limit price or better", "Rises to or through the stop price"],
    answerIndex: 3,
    explanation: "A buy stop rests above the market and activates when the price rises to or through the stop, commonly used to protect a short position or to participate in upside momentum. Stop orders triggered by declines are sell stops placed below the market. Once triggered, a stop becomes a market order and carries no price guarantee, unlike a stop-limit.",
  },
  {
    id: "sie-trd-q11", examSlug: "sie", topicId: "trading", topicName: "Trading & Prohibited Acts", difficulty: 3,
    stem: "A dealer charges a customer a markup substantially above the prevailing market price on a principal transaction. This most directly implicates:",
    choices: ["FINRA's fair pricing rules and the 5% policy", "Regulation T margin requirements", "The prospectus delivery requirement", "Anti-money-laundering transaction reporting"],
    answerIndex: 0,
    explanation: "FINRA's 5% policy is a guideline requiring that markups, markdowns, and commissions be fair and reasonable in light of all relevant circumstances, and excessive markups on principal trades violate that fair-pricing obligation. It is expressly a guideline rather than a hard ceiling, so context matters. Margin rules, prospectus delivery, and AML reporting address unrelated obligations.",
  },

  // ============================================================
  // SUITABILITY
  // ============================================================
  {
    id: "sie-suit-q1", examSlug: "sie", topicId: "suitability", topicName: "Suitability", difficulty: 3,
    stem: "Under Regulation Best Interest, when a broker-dealer recommends a security to a retail customer, it must:",
    choices: ["Recommend the lowest-cost product available in every single instance", "Act in the customer's best interest without placing its own interests first", "Obtain signed written customer consent before making each recommendation", "Guarantee that the recommendation will not produce a loss of principal"],
    answerIndex: 1,
    explanation: "Regulation Best Interest requires a broker-dealer to act in the retail customer's best interest at the time a recommendation is made and not to place its own financial interests ahead of the customer's, satisfying disclosure, care, conflict-of-interest, and compliance obligations. Cost is one factor among many rather than a mandate to always choose the cheapest product, and no rule requires per-recommendation consent or guarantees outcomes.",
  },
  {
    id: "sie-suit-q2", examSlug: "sie", topicId: "suitability", topicName: "Suitability", difficulty: 3,
    stem: "A 68-year-old retiree with modest savings needs current income and cannot tolerate loss of principal. Which recommendation is most suitable?",
    choices: ["A leveraged sector exchange-traded fund", "A direct participation program investing in raw land", "High-quality short-term bonds and money market instruments", "Uncovered call writing to generate premium income"],
    answerIndex: 2,
    explanation: "High-quality short-term debt and money market instruments provide current income with limited principal volatility and ready liquidity, matching the stated objectives and constraints. Leveraged funds magnify volatility, raw-land programs are illiquid and speculative, and uncovered call writing exposes the investor to theoretically unlimited loss — each conflicts directly with a requirement to preserve principal.",
  },
  {
    id: "sie-suit-q3", examSlug: "sie", topicId: "suitability", topicName: "Suitability", difficulty: 3,
    stem: "FINRA's Know Your Customer rule requires a member firm to use reasonable diligence to know the essential facts concerning:",
    choices: ["Only customers whose accounts exceed a specified asset threshold", "Only customers who trade on margin or in options", "Only institutional customers subject to heightened standards", "Every customer and the authority of each person acting on the account"],
    answerIndex: 3,
    explanation: "The Know Your Customer rule applies to every customer, requiring reasonable diligence to know and retain the essential facts about the account and the authority of anyone acting on the customer's behalf. There is no asset threshold, product trigger, or institutional limitation — the obligation attaches at account opening and continues throughout the relationship.",
  },
  {
    id: "sie-suit-q4", examSlug: "sie", topicId: "suitability", topicName: "Suitability", difficulty: 3,
    stem: "A customer declines to provide financial information when opening an account. The representative may:",
    choices: ["Open the account but must exercise care in making recommendations", "Refuse to open the account under any circumstances", "Open the account and recommend freely, since disclosure was refused", "Open the account only if a principal provides written approval of each trade"],
    answerIndex: 0,
    explanation: "An account may be opened when a customer declines to supply financial details, but the absence of that information constrains what the firm can reasonably recommend, since a suitability determination requires a reasonable basis. Recommending freely on the theory that the customer waived protection is precisely what the rules forbid, and no rule imposes a blanket refusal or per-trade principal approval in this situation.",
  },
  {
    id: "sie-suit-q5", examSlug: "sie", topicId: "suitability", topicName: "Suitability", difficulty: 3,
    stem: "An investor's stated objective is capital appreciation with a twenty-year horizon and high risk tolerance. Which allocation aligns best?",
    choices: ["Predominantly Treasury bills held to maturity and rolled", "Predominantly growth equities with a modest fixed-income component", "An equal split between money market funds and certificates of deposit", "Entirely municipal bonds selected for their tax exemption"],
    answerIndex: 1,
    explanation: "A long horizon paired with high risk tolerance and an appreciation objective points to equities, where growth potential is greatest and time allows recovery from volatility. Bills, money market funds, and certificates of deposit prioritize preservation and produce little appreciation. Municipal bonds serve tax-sensitive income needs, which the stated objective does not include.",
  },
  {
    id: "sie-suit-q6", examSlug: "sie", topicId: "suitability", topicName: "Suitability", difficulty: 3,
    stem: "A representative recommends that a customer purchase mutual fund shares in an amount just below a breakpoint, foregoing a reduced sales charge. This practice is:",
    choices: ["Acceptable, since the customer chose the investment amount", "Required when the customer's horizon is short", "Breakpoint selling, a prohibited practice", "Permissible if the fund family approves the transaction"],
    answerIndex: 2,
    explanation: "Recommending an amount just below a breakpoint deprives the customer of a lower sales charge while preserving the representative's compensation, which is the prohibited practice known as breakpoint selling. The representative has an affirmative duty to inform customers of available breakpoints, so neither customer choice nor fund family approval legitimizes the recommendation.",
  },

  // ============================================================
  // UNDERWRITING
  // ============================================================
  {
    id: "sie-uw-q1", examSlug: "sie", topicId: "underwriting", topicName: "Underwriting", difficulty: 3,
    stem: "The Securities Act of 1933 and the Securities Exchange Act of 1934 differ in that the 1933 Act principally governs:",
    choices: ["Secondary market trading and exchange registration", "Investment adviser conduct and fiduciary standards", "The organization and taxation of investment companies", "The issuance of new securities and required disclosure"],
    answerIndex: 3,
    explanation: "The Securities Act of 1933 addresses the primary market, requiring registration and prospectus delivery so buyers of new issues receive full disclosure. The Securities Exchange Act of 1934 governs the secondary market, created the SEC, and regulates exchanges and broker-dealers. Adviser conduct falls under the Investment Advisers Act of 1940 and investment company structure under the Investment Company Act of 1940.",
  },
  {
    id: "sie-uw-q2", examSlug: "sie", topicId: "underwriting", topicName: "Underwriting", difficulty: 3,
    stem: "In a best-efforts underwriting, unsold shares are:",
    choices: ["Returned to the issuer, which bears the shortfall risk", "Purchased by the underwriter at the offering price", "Allocated to the syndicate members proportionally", "Sold at a discount to institutional investors automatically"],
    answerIndex: 0,
    explanation: "In a best-efforts arrangement the underwriter acts as the issuer's agent rather than as principal, selling what it can and returning whatever remains unsold, so the issuer carries the risk of a shortfall. The underwriter purchases the entire issue and absorbs that risk only in a firm-commitment structure, which is the arrangement being contrasted here.",
  },
  {
    id: "sie-uw-q3", examSlug: "sie", topicId: "underwriting", topicName: "Underwriting", difficulty: 3,
    stem: "Which security is exempt from registration under the Securities Act of 1933?",
    choices: ["A corporate initial public offering of common stock", "A general obligation bond issued by a municipality", "A newly offered convertible corporate debenture", "A private company's first public offering of preferred stock"],
    answerIndex: 1,
    explanation: "Municipal and U.S. government securities are exempt securities that do not require full registration under the 1933 Act, reflecting the disclosure and oversight already applicable to government issuers. Corporate offerings of common stock, preferred stock, and convertible debentures are precisely the new issues the Act was written to cover.",
  },
  {
    id: "sie-uw-q4", examSlug: "sie", topicId: "underwriting", topicName: "Underwriting", difficulty: 3,
    stem: "The largest component of the underwriting spread in a typical corporate offering is the:",
    choices: ["Manager's fee retained by the lead underwriter", "Underwriting fee compensating for capital risk", "Selling concession paid to those who place the shares", "Registration fee the issuer remits to the SEC at filing"],
    answerIndex: 2,
    explanation: "The selling concession is the largest slice of the spread because it compensates the firms and representatives who actually distribute the shares to investors, which is where the work of an offering concentrates. The manager's fee and underwriting fee are smaller components covering syndicate management and capital risk respectively. SEC registration fees are an issuer expense, not part of the spread.",
  },
  {
    id: "sie-uw-q5", examSlug: "sie", topicId: "underwriting", topicName: "Underwriting", difficulty: 3,
    stem: "A final prospectus must be delivered to a purchaser of a registered new issue:",
    choices: ["Only if the purchaser requests it in writing", "Within thirty days after the settlement date", "Only when the offering exceeds a stated dollar threshold", "No later than confirmation of the sale"],
    answerIndex: 3,
    explanation: "The final prospectus must reach the purchaser no later than the confirmation of sale, ensuring full disclosure accompanies the transaction rather than following it. Delivery is mandatory rather than request-driven, and there is no dollar threshold that excuses it for a registered offering.",
  },
  {
    id: "sie-uw-q6", examSlug: "sie", topicId: "underwriting", topicName: "Underwriting", difficulty: 3,
    stem: "Rule 144 principally governs:",
    choices: ["The resale of restricted and control securities", "The registration of securities exchanges with the SEC", "The maximum sales charge on mutual fund purchases", "The margin requirements applicable to new issues"],
    answerIndex: 0,
    explanation: "Rule 144 sets the conditions under which restricted securities acquired privately and control securities held by affiliates may be resold, imposing holding period and volume limitations. Exchange registration falls under the 1934 Act, mutual fund sales charges under FINRA rules and the Investment Company Act, and margin under Regulation T.",
  },

  // ============================================================
  // REGULATORY FRAMEWORK
  // ============================================================
  {
    id: "sie-reg-q1", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 2,
    stem: "A member firm registers a new representative by filing:",
    choices: ["Form U5 with the representative's prior employer", "Form U4 through the CRD system", "Form BD with the SEC", "Form ADV with the state securities administrator"],
    answerIndex: 1,
    explanation: "Form U4 is the uniform application filed through the Central Registration Depository to register an individual as a representative. Form U5 reports a termination, Form BD registers the broker-dealer entity itself, and Form ADV is the investment adviser registration form. Matching each form to its subject is the tested distinction.",
  },
  {
    id: "sie-reg-q2", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 3,
    stem: "A representative leaves a firm. The firm must file Form U5 within:",
    choices: ["Ten business days of termination", "Sixty days of termination", "Thirty days of termination", "Ninety days of termination"],
    answerIndex: 2,
    explanation: "The employing firm must file Form U5 within thirty days of a representative's termination and provide a copy to the representative. The filing preserves an accurate regulatory record, including the reason for departure, which follows the individual to any future firm.",
  },
  {
    id: "sie-reg-q3", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 3,
    stem: "A written communication distributed to more than twenty-five retail investors within thirty days is classified as:",
    choices: ["Correspondence, requiring only post-use review", "An institutional communication, exempt from approval requirements", "A private placement memorandum subject to Regulation D", "A retail communication, generally requiring prior principal approval"],
    answerIndex: 3,
    explanation: "Communications distributed to more than twenty-five retail investors in a thirty-day period are retail communications, which generally require approval by a registered principal before first use. Correspondence is the category for twenty-five or fewer retail investors, and institutional communications are directed to institutional investors under different standards.",
  },
  {
    id: "sie-reg-q4", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 2,
    stem: "FINRA's continuing education requirement consists of:",
    choices: ["A Regulatory Element and a Firm Element", "An annual examination administered by the SEC", "A state-administered ethics filing", "A biennial recertification through the CRD system"],
    answerIndex: 0,
    explanation: "Continuing education comprises the Regulatory Element, computer-based training on regulatory topics delivered on a set schedule, and the Firm Element, an annual training plan each firm develops for its covered registered persons. The two components address different needs, one industry-wide and one tailored to the firm's business.",
  },
  {
    id: "sie-reg-q5", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 2,
    stem: "A prospective client wants to research a representative's employment history and any disciplinary actions. The appropriate resource is:",
    choices: ["The SEC's EDGAR filing system", "FINRA BrokerCheck", "The MSRB's EMMA system", "The firm's internal compliance records"],
    answerIndex: 1,
    explanation: "BrokerCheck is FINRA's free public database reporting the registration status, employment history, licenses, and disciplinary events of firms and representatives. EDGAR holds corporate filings and EMMA holds municipal disclosures, and a firm's internal records are not publicly accessible.",
  },
  {
    id: "sie-reg-q6", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 3,
    stem: "Which statement about the Customer Identification Program is accurate?",
    choices: ["It requires firms to guarantee the lawful source of all deposited funds", "It applies only to accounts exceeding $10,000 in initial value", "It requires firms to verify the identity of each customer opening an account", "It replaces the need to file Suspicious Activity Reports"],
    answerIndex: 2,
    explanation: "The Customer Identification Program, a required component of a firm's anti-money-laundering program, obligates the firm to collect and verify identifying information such as name, date of birth, address, and taxpayer identification number for each customer opening an account. It carries no dollar threshold, does not make the firm a guarantor of fund sources, and operates alongside rather than instead of suspicious activity reporting.",
  },
  {
    id: "sie-reg-q7", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 3,
    stem: "The Securities Exchange Act of 1934 is responsible for:",
    choices: ["Requiring registration statements for all new corporate issues", "Establishing the fiduciary duty of investment advisers", "Setting the maximum sales charge for mutual funds", "Creating the SEC and regulating the secondary market"],
    answerIndex: 3,
    explanation: "The Securities Exchange Act of 1934 created the Securities and Exchange Commission and governs secondary market activity, including exchanges, broker-dealer registration, insider trading, and manipulation. New issue registration is the province of the 1933 Act, adviser standards belong to the Advisers Act of 1940, and fund sales charges are governed by FINRA rules and the Investment Company Act of 1940.",
  },
  {
    id: "sie-reg-q8", examSlug: "sie", topicId: "regulation", topicName: "Regulatory Framework", difficulty: 3,
    stem: "A customer complaint received in writing must be:",
    choices: ["Recorded and reported in accordance with FINRA requirements", "Resolved within ten business days of receipt", "Forwarded directly to the SEC for investigation", "Settled through mandatory arbitration before any response"],
    answerIndex: 0,
    explanation: "Written customer complaints must be recorded, retained, and reported to FINRA under its reporting requirements, creating a supervisory record the firm and regulators can examine. There is no universal ten-day resolution mandate, complaints are not routed directly to the SEC as a matter of course, and arbitration follows the dispute resolution process rather than preceding any response.",
  },

  // ============================================================
  // ECONOMIC FACTORS
  // ============================================================
  {
    id: "sie-econ-q1", examSlug: "sie", topicId: "economics", topicName: "Economic Factors", difficulty: 3,
    stem: "The business cycle phase characterized by rising unemployment, falling GDP, and declining corporate profits is the:",
    choices: ["Expansion, as inventories are drawn down", "Contraction, which becomes a recession if sustained", "Peak, as growth reaches its maximum rate", "Trough, which marks the cycle's turning point upward"],
    answerIndex: 1,
    explanation: "Falling output, rising unemployment, and shrinking profits define the contraction phase, which is formally labeled a recession when the decline persists across two consecutive quarters of real GDP. The peak marks the cycle's high point before decline begins, the trough is the bottom that precedes recovery, and expansion is the phase of rising activity.",
  },
  {
    id: "sie-econ-q2", examSlug: "sie", topicId: "economics", topicName: "Economic Factors", difficulty: 3,
    stem: "Which action represents expansionary monetary policy?",
    choices: ["Congress raising marginal income tax rates", "The Fed increasing the reserve requirement for banks", "The Fed purchasing Treasury securities on the open market", "The Treasury issuing additional long-term bonds"],
    answerIndex: 2,
    explanation: "When the Fed buys securities it credits reserves to the banking system, expanding the money supply and putting downward pressure on short-term rates, which is expansionary. Raising reserve requirements withdraws lending capacity and is contractionary. Tax changes are fiscal policy set by Congress, and Treasury debt issuance is government financing rather than monetary policy.",
  },
  {
    id: "sie-econ-q3", examSlug: "sie", topicId: "economics", topicName: "Economic Factors", difficulty: 3,
    stem: "During a period of rapidly rising inflation, which investment is likely to suffer the greatest loss of purchasing power?",
    choices: ["Common stock in a company with pricing power", "Treasury Inflation-Protected Securities", "A portfolio of physical commodities", "A thirty-year fixed-rate corporate bond"],
    answerIndex: 3,
    explanation: "A long-dated fixed-rate bond locks in nominal payments for decades, so inflation steadily erodes the real value of both the coupon stream and the principal repaid — the longer the maturity, the greater the damage. Companies with pricing power can raise prices, TIPS index principal to the CPI, and commodities typically rise with inflation, so each of those offers some defense.",
  },
  {
    id: "sie-econ-q4", examSlug: "sie", topicId: "economics", topicName: "Economic Factors", difficulty: 3,
    stem: "The U.S. dollar strengthens materially against the euro. The most likely consequence for a U.S. manufacturer that exports to Europe is that its products become:",
    choices: ["More expensive for European buyers, pressuring export volume", "Less expensive for European buyers, boosting export volume", "Unaffected, since contracts are denominated in dollars", "More profitable, because the currency gain offsets lower sales"],
    answerIndex: 0,
    explanation: "A stronger dollar means European buyers must surrender more euros to obtain the same dollar-denominated goods, raising the effective price abroad and typically reducing export volume. This is why a strengthening home currency generally pressures exporters while benefiting importers, who acquire foreign goods more cheaply.",
  },
  {
    id: "sie-econ-q5", examSlug: "sie", topicId: "economics", topicName: "Economic Factors", difficulty: 3,
    stem: "Which indicator would an economist classify as coincident with the business cycle?",
    choices: ["Building permits issued for new housing", "Industrial production and personal income", "The average duration of unemployment", "Corporate profits reported for the prior quarter"],
    answerIndex: 1,
    explanation: "Coincident indicators such as industrial production, personal income, and nonfarm payrolls move essentially in step with the overall economy, marking where the cycle currently stands. Building permits lead the cycle, while unemployment duration and reported corporate profits lag it. Classifying an indicator by its timing relative to the cycle is the tested skill.",
  },
  {
    id: "sie-econ-q6", examSlug: "sie", topicId: "economics", topicName: "Economic Factors", difficulty: 3,
    stem: "Fiscal policy differs from monetary policy in that fiscal policy is:",
    choices: ["Conducted by the Federal Reserve through interest rate targets", "Limited to adjusting bank reserve requirements", "Conducted by Congress and the President through spending and taxation", "Administered by the SEC to stabilize securities markets"],
    answerIndex: 2,
    explanation: "Fiscal policy is the domain of the elected branches, operating through government spending and taxation decisions. Monetary policy belongs to the Federal Reserve and works through open market operations, the discount rate, and reserve requirements. The SEC regulates securities markets and does not conduct macroeconomic policy at all.",
  },
];

export const sieContent: ExamContent = {
  examSlug: "sie",
  chapters: [...sieDeepChapters, ...chapters],
  questions: [...sieDeepQuestions, ...questions],
};
