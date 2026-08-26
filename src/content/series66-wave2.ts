// ============================================================
// Certus — Series 66 content, wave 2 (blueprint gap fill)
//
// WHY THIS FILE EXISTS
// A concept audit against NASAA's published Series 66 test specifications
// (effective June 12, 2023) found 67 named, testable concepts that our
// readings never mentioned — IRR and NPV, the financial ratios, yield to
// call and credit spreads, ADRs, SPACs, hedge funds and private equity,
// ETFs and ETNs, leveraged and inverse funds, indexed annuities, digital
// assets, LLC and S-corp taxation, behavioral finance, sector rotation,
// IRMAA, AMT, portability and the unified credit, Solo 401(k), 457 plans,
// QDIA, HSAs, Coverdell, tenancy by the entirety, per stirpes, QDROs,
// donor advised funds, payment for order flow, time- and dollar-weighted
// return, exempt reporting advisers, IAR continuing education, performance
// fees, AML, personal securities reporting, political contributions,
// exploitation of vulnerable adults, cybersecurity and business continuity.
//
// Those readings are written HERE, first. The question bank is then written
// from them, and scripts/reading-alignment.mjs verifies that no question
// depends on something no chapter teaches.
//
// The blueprint itself was corrected at the same time: NASAA weights the
// four sections 8 / 17 / 30 / 45, and we had been carrying 5 / 20 for the
// first two.
// ============================================================

import { Chapter, Question } from "./types";

export const s66Wave2Chapters: Chapter[] = [
  {
    id: "s66-analytics",
    examSlug: "series-66",
    topicId: "economics",
    topicName: "Economic Factors and Business Information",
    title: "Analytical Methods, Statistics and Financial Ratios",
    readingMinutes: 14,
    summary: "Time value of money, the descriptive statistics an adviser is expected to interpret, and the ratios used to read a company's financial health.",
    intro:
      "Section I of the NASAA outline is small — eight of a hundred questions — but it is entirely quantitative, and the questions are calculations rather than definitions. Everything here rests on one idea: a dollar today is worth more than a dollar later, because today's dollar can be put to work. The statistics and ratios that follow are the vocabulary an adviser uses to compare one opportunity against another.",
    sections: [
      {
        heading: "Present value, future value and the discount rate",
        blocks: [
          { kind: "p", text: "FUTURE VALUE asks what a sum today grows into. PRESENT VALUE runs the same arithmetic backwards, asking what a future sum is worth now. The link between them is the discount rate, and the whole of investment analysis is an argument about what that rate should be." },
          { kind: "formula", formula: { label: "Future and present value", expr: "FV = PV × (1 + r)^n        PV = FV ÷ (1 + r)^n", note: "r is the periodic rate and n the number of periods. Compounding more often than annually raises the effective rate above the stated one." } },
          { kind: "example", example: { title: "Compounding forward and discounting back", prompt: "A client invests $10,000 for 3 years at 6% compounded annually. What is the future value? And what is $10,000 received in 3 years worth today at the same 6%?", steps: ["FV = 10,000 × 1.06^3 = 10,000 × 1.191016.", "FV = $11,910.16.", "PV = 10,000 ÷ 1.06^3 = 10,000 ÷ 1.191016.", "PV = $8,396.19."], answer: "$11,910.16 growing forward; $8,396.19 discounting back. The two calculations are the same equation solved for different unknowns — which is why a candidate who understands one understands both." } },
          { kind: "p", text: "The RULE OF 72 gives a fast approximation: dividing 72 by the annual return gives the years to double. At 8% a sum doubles in about nine years; at 6%, about twelve. It is an estimate, not a formula, but it is accurate enough for a client conversation." },
        ],
      },
      {
        heading: "Net present value and internal rate of return",
        blocks: [
          { kind: "p", text: "NET PRESENT VALUE takes every cash flow an investment will produce, discounts each back to today at the required rate of return, and subtracts the cost. A POSITIVE NPV means the investment is expected to return more than the required rate, so it adds value. A negative NPV means it does not clear the hurdle, however attractive the raw dollars look." },
          { kind: "p", text: "INTERNAL RATE OF RETURN approaches the same question from the other side: it is the discount rate at which NPV equals exactly zero. Put plainly, IRR is the rate the investment is expected to earn. The decision rule follows naturally — accept when IRR exceeds the required return, which is the same moment NPV turns positive." },
          { kind: "example", example: { title: "NPV on a two-year cash flow", prompt: "An investment costs $1,000 today and pays $600 at the end of year 1 and $600 at the end of year 2. The required return is 10%. What is the NPV?", steps: ["PV of year 1: 600 ÷ 1.10 = $545.45.", "PV of year 2: 600 ÷ 1.10^2 = 600 ÷ 1.21 = $495.87.", "Total present value of inflows = 545.45 + 495.87 = $1,041.32.", "NPV = 1,041.32 − 1,000 = $41.32."], answer: "NPV is +$41.32, so the investment clears the 10% hurdle and should be accepted. Its IRR is therefore somewhat above 10% — the rate that would drive that $41.32 down to zero." } },
          { kind: "callout", label: "The bond version of the same idea", body: "A bond's YIELD TO MATURITY is simply the IRR of its cash flows. That is why a bond bought below par has a YTM above its coupon: the discount is an extra cash flow at the end, and the rate that makes everything balance must be higher." },
        ],
      },
      {
        heading: "Descriptive statistics an adviser must read",
        blocks: [
          { kind: "p", text: "MEAN is the arithmetic average; MEDIAN is the middle observation; MODE is the most frequent. They diverge when the data is skewed, which is exactly when the distinction matters. A handful of enormous returns pulls the mean above the median, and quoting the mean alone then flatters the record." },
          { kind: "p", text: "RANGE is the distance from lowest to highest. STANDARD DEVIATION measures how widely returns scatter around the mean and is the standard proxy for total risk — both the market-wide part and the company-specific part. About two thirds of observations fall within one standard deviation of the mean in a normal distribution, and about 95% within two." },
          { kind: "table", table: { caption: "The three risk-and-return measures NASAA names.", headers: ["Measure", "What it divides by", "What it tells you"], rows: [["Alpha", "Nothing — it is a residual", "Return beyond what beta predicted"], ["Beta", "Market movement", "Sensitivity to the market; systematic risk only"], ["Sharpe ratio", "Standard deviation", "Excess return per unit of TOTAL risk"]] } },
          { kind: "p", text: "CORRELATION runs from −1.0 to +1.0 and measures how two assets move relative to one another. At +1.0 they move identically and combining them diversifies nothing. At 0 they are unrelated. At −1.0 they move exactly opposite. The diversification benefit of adding an asset comes entirely from its correlation with what is already held, not from its own volatility — which is why a volatile asset can reduce portfolio risk." },
          { kind: "example", example: { title: "Computing a Sharpe ratio", prompt: "A portfolio returned 11% with a standard deviation of 12%. The risk-free rate is 3%. What is its Sharpe ratio, and what does it mean?", steps: ["Excess return = 11% − 3% = 8%.", "Sharpe = excess return ÷ standard deviation.", "Sharpe = 8 ÷ 12 = 0.67."], answer: "0.67 — the portfolio earned two thirds of a percentage point of excess return for each point of total volatility. The number is meaningless alone; it earns its keep when compared with another portfolio measured the same way." } },
        ],
      },
      {
        heading: "Reading a company through its ratios",
        blocks: [
          { kind: "p", text: "Liquidity ratios ask whether a company can pay what is due soon. The CURRENT RATIO divides current assets by current liabilities. The QUICK RATIO, or acid test, does the same but strips out inventory, on the theory that unsold goods may not convert to cash in time. A company can look comfortable on the current ratio and thin on the quick ratio if its balance sheet is full of inventory." },
          { kind: "formula", formula: { label: "The ratios NASAA names", expr: "Current ratio = Current assets ÷ Current liabilities\nQuick ratio = (Current assets − Inventory) ÷ Current liabilities\nDebt-to-equity = Total debt ÷ Shareholder equity", note: "Debt-to-equity measures leverage, which magnifies both good and bad outcomes." } },
          { kind: "example", example: { title: "Current versus quick", prompt: "A company reports current assets of $600,000, of which $250,000 is inventory, against current liabilities of $300,000. Compute both liquidity ratios.", steps: ["Current ratio = 600,000 ÷ 300,000 = 2.0.", "Quick assets = 600,000 − 250,000 = $350,000.", "Quick ratio = 350,000 ÷ 300,000 = 1.17."], answer: "A current ratio of 2.0 and a quick ratio of 1.17. The gap is the inventory, and the quick ratio is the one to watch if that inventory is slow-moving or seasonal." } },
          { kind: "p", text: "Valuation ratios ask what the market is paying. PRICE-TO-EARNINGS divides share price by earnings per share and expresses how many dollars investors will pay for a dollar of current earnings. A high multiple reflects an expectation of growth — an expectation, not a promise. PRICE-TO-BOOK divides share price by book value per share, and it carries more meaning for banks and insurers, whose assets are financial and marked close to value, than for a software company whose value sits in things the balance sheet never recorded." },
          { kind: "example", example: { title: "P/E and P/B together", prompt: "A stock trades at $60. It earned $4.00 per share and its book value is $25 per share. What are its P/E and P/B?", steps: ["P/E = 60 ÷ 4.00 = 15.", "P/B = 60 ÷ 25 = 2.4."], answer: "A P/E of 15 and a P/B of 2.4. Neither number means anything in isolation — they are comparison tools, meaningful only against the company's own history and against its peers." } },
        ],
      },
    ],
    keyTerms: [
      { term: "Net present value", def: "Present value of all cash flows less the cost; positive means the investment clears the required return." },
      { term: "Internal rate of return", def: "The discount rate at which NPV equals zero — effectively the rate the investment earns." },
      { term: "Standard deviation", def: "Dispersion of returns around the mean; a measure of TOTAL risk, systematic and unsystematic together." },
      { term: "Sharpe ratio", def: "Excess return over the risk-free rate divided by standard deviation — return per unit of total risk." },
      { term: "Quick ratio", def: "Current assets less inventory, over current liabilities; the stricter liquidity test." },
    ],
    takeaways: [
      "NPV positive and IRR above the required return are the same signal stated two ways.",
      "Standard deviation measures total risk; beta measures only the market-driven part.",
      "Sharpe divides excess return by standard deviation; Treynor divides it by beta instead.",
      "Correlation below +1.0 is where diversification benefit comes from, not low volatility.",
      "The quick ratio is the current ratio minus inventory — the gap matters when inventory is slow.",
    ],
  },
  {
    id: "s66-cash-fi-eq",
    examSlug: "series-66",
    topicId: "vehicles",
    topicName: "Investment Vehicle Characteristics",
    title: "Cash, Fixed Income and Equity: Valuation and Characteristics",
    readingMinutes: 11,
    summary: "Insured deposits and money market instruments, the factors that price a bond, and the valuation and rights attaching to equity.",
    intro:
      "Section II asks what an instrument is and what makes its price move. The organising question throughout is where the cash flows come from and how certain they are — that single idea separates a demand deposit from a venture capital fund, and everything in between sits on that spectrum.",
    sections: [
      {
        heading: "Cash and cash equivalents",
        blocks: [
          { kind: "p", text: "INSURED DEPOSITS sit at the safe end. A DEMAND DEPOSIT — a checking account — is payable on demand with no maturity at all. A CERTIFICATE OF DEPOSIT commits the money for a stated term at a stated rate, and withdrawing early normally costs a penalty. Both carry FDIC insurance, currently $250,000 per depositor per insured bank per ownership category. That insurance covers the failure of the BANK; it says nothing about market price." },
          { kind: "p", text: "A brokered CD is bought through a broker-dealer and can be SOLD in the secondary market rather than surrendered to the bank. That liquidity comes with a price risk the ordinary CD does not have: if rates have risen since issue, the CD sells below par. A client who believes FDIC insurance means they cannot lose money has misunderstood which risk is covered." },
          { kind: "p", text: "Government-backed paper occupies its own tier. TREASURY securities carry the full faith and credit of the United States, and TIPS adjust principal with the CPI so the payment keeps pace with the price level — though that adjustment is taxable in the year it accrues. Among the housing agencies, GNMA — GINNIE MAE — is a government corporation whose guarantee is explicit, while Fannie Mae and Freddie Mac are government-SPONSORED and are not. A mortgage pass-through pays monthly, mixing return of capital with return on capital, and carries prepayment risk when rates fall and extension risk when they rise." },
          { kind: "p", text: "MONEY MARKET INSTRUMENTS are short-term debt. COMMERCIAL PAPER is unsecured corporate borrowing issued at a discount, with a maximum maturity of 270 days — the ceiling exists because staying under it keeps the paper exempt from Securities Act registration. TREASURY BILLS are direct government obligations of one year or less, also issued at a discount, and quoted on a discount basis rather than as a price. Neither pays a coupon; the return is the difference between what is paid and what comes back." },
        ],
      },
      {
        heading: "What moves a bond's price",
        blocks: [
          { kind: "p", text: "A bond's COUPON is fixed in dollars at issue. Its MATURITY fixes when principal returns. Everything else about the bond — most importantly its price — adjusts as market yields move, and the adjustment is inverse: yields up, prices down." },
          { kind: "p", text: "DURATION measures how much. It rises with maturity and falls with coupon size, because a high coupon returns cash sooner and shortens the average wait. A zero-coupon bond's duration equals its maturity, which makes it the most rate-sensitive instrument of its term. As a first approximation, a duration of 7 implies a 7% price move for a one-point change in yield." },
          { kind: "table", table: { caption: "The yield measures and what each assumes.", headers: ["Measure", "Assumes", "Highest when"], rows: [["Nominal (coupon)", "Nothing — it is fixed", "Always fixed"], ["Current yield", "Held indefinitely at today's price", "Price is low"], ["Yield to maturity", "Held to the stated maturity", "Bond bought at a discount"], ["Yield to call", "Called at the first call date", "Bond bought at a premium"]] } },
          { kind: "p", text: "For a DISCOUNT bond the ordering runs nominal below current below YTM, because the pull to par adds return. For a PREMIUM bond it reverses: nominal above current above YTM above YIELD TO CALL, because the premium is amortised away and a call compresses that loss into a shorter period. A client must be quoted the lower of YTM and YTC — the yield to worst — since the issuer will choose whichever outcome suits itself." },
          { kind: "example", example: { title: "Current yield and the pull to par", prompt: "A 6% bond with 10 years remaining trades at 92. Compute the current yield and explain why YTM is higher.", steps: ["Annual coupon = 6% of $1,000 = $60.", "Price = 92% of $1,000 = $920.", "Current yield = 60 ÷ 920 = 6.52%.", "The bond also returns $1,000 at maturity, an $80 gain over 10 years."], answer: "Current yield is 6.52%, and YTM is higher still because current yield counts only the coupon and ignores the $80 of accretion the holder also collects." } },
          { kind: "p", text: "CONVERSION VALUATION applies to convertible bonds. The conversion ratio is par divided by the conversion price, and parity is that ratio multiplied by the current stock price. A bond convertible at $25 converts into 40 shares; with the stock at $30, parity is $1,200. A convertible trading above parity carries a conversion premium — investors paying for the option value and the downside floor the bond provides." },
          { kind: "p", text: "BOND RATINGS express an agency's opinion of default risk, and BBB or Baa is the lowest investment grade rung. The CREDIT SPREAD is the extra yield a bond offers over a Treasury of the same maturity, and it is the market's own price for that risk. Spreads widen when the economy weakens and compress when it strengthens, which is why they are watched as an economic signal in their own right." },
          { kind: "p", text: "DISCOUNTED CASH FLOW ties it together. A bond's value is the present value of its coupons plus the present value of its principal, discounted at the market yield. Every one of the measures above is a shorthand for some part of that calculation." },
        ],
      },
      {
        heading: "Equity securities and shareholder rights",
        blocks: [
          { kind: "p", text: "COMMON STOCK is a residual claim: last in liquidation, unlimited in upside. Foreign companies reach US investors through an AMERICAN DEPOSITARY RECEIPT, a negotiable certificate representing shares held on deposit abroad. The holder trades and receives dividends in dollars but still bears CURRENCY RISK — a dividend declared in a weakening foreign currency converts into fewer dollars — along with the political and disclosure risks of the home market and a custodial fee." },
          { kind: "p", text: "Valuing equity takes three approaches the outline names. FUNDAMENTAL ANALYSIS works from the financial statements and the business — earnings, cash flow, competitive position — to estimate what a company is worth. TECHNICAL ANALYSIS ignores all of that and works from price and volume history, reading support, resistance and patterns; it is interpretive, and a representative must never present a chart pattern as a prediction of performance. DISCOUNTED CASH FLOW estimates value as the present value of expected future cash flows, and the DIVIDEND DISCOUNT MODEL is its narrowest form, valuing a share as the present value of the dividends it will pay. The dividend discount model's obvious limitation is that it says nothing at all about a company that pays no dividend." },
          { kind: "p", text: "PREFERRED STOCK pays a fixed dividend and normally carries no vote, which makes its price behave like a long bond: interest rate risk dominates business risk. CONVERTIBLE PREFERRED adds the right to exchange into common, giving participation in growth. FLOATING RATE PREFERRED resets its dividend against a benchmark, so its price is far more stable than a fixed-rate preferred when rates move — the payment adjusts instead of the price." },
          { kind: "p", text: "Shareholder rights are tested by name. VOTING RIGHTS may be statutory, one vote per share for each director, or CUMULATIVE, allowing votes to be concentrated on a single candidate — which is why cumulative voting favours minority holders. The PREEMPTIVE RIGHT, or antidilution right, lets an existing holder subscribe to a new issue in proportion to their holding, preserving their percentage ownership. LIQUIDATION PREFERENCE describes the order of claims in a wind-up: secured creditors, then unsecured, then subordinated debt, then preferred, then common." },
          { kind: "p", text: "RESTRICTED STOCK is acquired other than in a registered public offering — typically in a private placement — and cannot simply be resold. Rule 144 imposes a holding period of six months for a reporting company and one year otherwise, and affiliates face continuing volume limits and a Form 144 filing. An adviser looking at a client's concentrated position must establish whether the shares are free to sell before planning around them." },
        ],
      },
      {
        heading: "Employee stock options and public offerings",
        blocks: [
          { kind: "p", text: "An INCENTIVE STOCK OPTION can qualify for capital gain treatment if the holding requirements are met, but exercising one creates an ALTERNATIVE MINIMUM TAX preference item in the year of exercise — a tax bill on a gain the holder has not sold. A NONQUALIFIED stock option is simpler and worse: the spread between exercise price and market value is ordinary income at exercise, taxed and reported through payroll." },
          { kind: "p", text: "An INITIAL PUBLIC OFFERING is a company's first sale of shares to the public, with proceeds going to the issuer. A SECONDARY OFFERING is a sale by existing shareholders, where the proceeds go to those selling shareholders rather than to the company — a distinction that matters when reading who benefits from the transaction." },
          { kind: "p", text: "A SPECIAL PURPOSE ACQUISITION COMPANY — also called a blind pool or blank check company — raises money publicly with no operating business, intending to find and merge with a private company later. Investors are committing capital before knowing what they are buying, and the sponsor's economics differ substantially from the public shareholders'. The structure is legal and disclosed; the suitability question is whether a client understands that they are underwriting a search." },
        ],
      },
    ],
    keyTerms: [
      { term: "Commercial paper", def: "Unsecured short-term corporate debt, maximum 270 days, issued at a discount." },
      { term: "Duration", def: "Price sensitivity to a yield change; rises with maturity, falls with coupon." },
      { term: "Credit spread", def: "Yield over a comparable Treasury; the market's price for default risk." },
      { term: "ADR", def: "A dollar-denominated receipt for foreign shares held on deposit; currency risk remains." },
      { term: "Preemptive right", def: "The right to subscribe to a new issue and preserve percentage ownership." },
      { term: "SPAC", def: "A blank-check company that raises capital publicly before identifying a target." },
    ],
    takeaways: [
      "FDIC insurance covers bank failure, not the market price of a brokered CD.",
      "Discount bond: nominal < current < YTM. Premium bond: the order reverses and YTC is lowest.",
      "Duration rises with maturity and falls with coupon; a zero's duration equals its maturity.",
      "An ADR removes the mechanics of foreign ownership but not the currency risk.",
      "ISOs can reach capital gain rates but create an AMT preference at exercise; NQSOs are ordinary income.",
    ],
  },
  {
    id: "s66-pooled-alts",
    examSlug: "series-66",
    topicId: "vehicles",
    topicName: "Investment Vehicle Characteristics",
    title: "Pooled Investments, Alternatives and Insurance Products",
    readingMinutes: 9,
    summary: "Mutual funds, private funds, UITs, ETFs and REITs; leveraged, inverse and structured products; annuities, life insurance, commodities and digital assets.",
    intro:
      "Most of what a client actually owns is a pooled vehicle rather than an individual security. The exam tests the differences between the wrappers — how they price, how they are taxed, what they cost, and how easily the money comes back out — far more than it tests what is inside them.",
    sections: [
      {
        heading: "Registered pooled vehicles",
        blocks: [
          { kind: "p", text: "An OPEN-END mutual fund continuously issues and redeems shares at net asset value, computed at least daily at the close. FORWARD PRICING means an order receives the NEXT calculated NAV, which is what makes late trading a fraud rather than a clever tactic. A CLOSED-END fund issues a fixed number of shares that then trade on an exchange, so its price is set by supply and demand and can sit at a PREMIUM or DISCOUNT to NAV indefinitely." },
          { kind: "p", text: "A UNIT INVESTMENT TRUST holds a fixed portfolio and terminates on a set date. It has no board, no investment adviser and no ongoing decisions, which is precisely why its costs are low and its flexibility nil. An EXCHANGE TRADED FUND trades intraday like a closed-end fund but adds a creation and redemption mechanism: authorised participants exchange baskets of securities for large blocks of shares, and that arbitrage keeps the market price close to NAV. A persistent large premium in an ETF signals that the mechanism is impaired." },
          { kind: "p", text: "A REAL ESTATE INVESTMENT TRUST holds property or mortgages and must distribute at least 90% of taxable income to keep its conduit status, which is why REIT yields are high and why most REIT distributions are taxed as ORDINARY income rather than as qualified dividends. Listed REITs are liquid; NON-TRADED REITs are not. A non-traded REIT's share repurchase programme is limited and can be suspended, so the exit a client assumes exists may not be there when they want it." },
        ],
      },
      {
        heading: "Private funds",
        blocks: [
          { kind: "p", text: "A HEDGE FUND is a private pool, generally sold only to accredited investors and qualified purchasers, using strategies a registered fund cannot. The defining features for suitability purposes are illiquidity — lockups, gates and infrequent valuation — and limited transparency. Fees usually combine a management fee with a performance fee, and a HIGH-WATER MARK prevents the manager from charging twice for recovering the same losses." },
          { kind: "p", text: "PRIVATE EQUITY buys whole operating companies, often with borrowed money, holds them for years and exits by sale or public offering. VENTURE CAPITAL funds early-stage companies where most investments are expected to fail and the returns come from a small number that do not. Both commit capital for years through capital calls, so a client who may need the money cannot participate regardless of their net worth." },
        ],
      },
      {
        heading: "Comparing pooled investments",
        blocks: [
          { kind: "p", text: "Two documents and one accounting convention are worth naming. A fund's prospectus is accompanied by a STATEMENT OF ADDITIONAL INFORMATION carrying detail beyond it, which must be supplied free on request. Non-qualified annuity withdrawals follow LIFO — last in, first out — so earnings come out first and are fully taxable. And while an adviser deals mostly with state regulators and the SEC, FINRA is the self-regulatory organisation overseeing broker-dealers and their registered persons, and exchanges such as the NYSE provide the listed venue where price discovery happens." },
          { kind: "p", text: "SHARE CLASSES differ in how the sales charge is collected. Class A takes a front-end load with BREAKPOINTS that reduce it at stated investment levels. Class B carries a contingent deferred sales charge declining over time and a higher ongoing 12b-1 fee. Class C has a level ongoing fee, no breakpoints, and typically a small charge on an early exit — cheap for a short holding period and expensive for a long one." },
          { kind: "p", text: "Comparing two funds honestly requires more than a return figure. NASAA names the relevant points: the BENCHMARK must actually match the strategy, since a small-cap value fund measured against a large-cap growth index tells you nothing; MANAGER TENURE says whether the person responsible for the record is still there; a CHANGE IN INVESTMENT POLICY can make the past record irrelevant; and STYLE — growth against value, active against passive — determines which comparisons are fair at all." },
          { kind: "table", table: { caption: "How the wrappers differ.", headers: ["Vehicle", "Pricing", "Liquidity"], rows: [["Open-end fund", "Next computed NAV", "Redeem with the fund, paid within 7 days"], ["Closed-end fund", "Market price, premium or discount", "Sell on the exchange"], ["ETF", "Market price, held near NAV by arbitrage", "Sell on the exchange intraday"], ["UIT", "Based on the fixed portfolio", "Terminates on a set date"], ["Non-traded REIT", "Sponsor-determined valuation", "Limited repurchase, can be suspended"], ["Hedge fund", "Periodic valuation", "Lockups and gates"]] } },
          { kind: "p", text: "Tax treatment follows the wrapper too. A fund distributes realised gains to shareholders each year whether or not they sold anything, so HIGH TURNOVER produces a tax bill in a taxable account. ETFs typically distribute less because redemptions happen in kind, which removes appreciated securities from the fund without a sale. None of this matters inside an IRA — which is the entire argument for asset location." },
        ],
      },
      {
        heading: "Derivatives and alternative structures",
        blocks: [
          { kind: "p", text: "The outline asks only for definitions here. A FUTURES contract is a standardised, exchange-traded obligation to buy or sell an asset at a set price on a set date — an obligation on both sides, which is what separates it from an option. An OPTION gives its buyer a right and imposes on its writer an obligation: a CALL is the right to buy at the strike, a PUT the right to sell." },
          { kind: "p", text: "A LEVERAGED FUND seeks a multiple of an index's DAILY return, and an INVERSE FUND seeks the opposite of it. The word daily is the whole point. Because each day's result compounds on a rebalanced base, holding either over a longer period produces a return that drifts away from the stated multiple — and in a choppy market that drift is reliably negative. They are trading tools, and recommending one as a long-term holding is a suitability problem in itself." },
          { kind: "p", text: "A STRUCTURED PRODUCT is a debt obligation whose return is determined by a formula tied to a reference asset. An EXCHANGE TRADED NOTE is the same idea in listed form: an unsecured obligation of the issuer that tracks an index by contract rather than by holding anything. In both cases the reference asset can perform exactly as hoped and the investor still lose everything if the ISSUER fails. Issuer creditworthiness is the first question, not the last." },
        ],
      },
      {
        heading: "Insurance-based products and other assets",
        blocks: [
          { kind: "p", text: "A FIXED ANNUITY promises a stated rate, so the insurance company carries the investment risk and the contract is not a security. A VARIABLE ANNUITY invests in a separate account, the contract holder carries the investment risk, and the contract is a security requiring a prospectus. An INDEXED ANNUITY sits between them: the credit is tied to an index formula bounded by a CAP on the upside and a floor on the downside, and the participation rate and crediting method determine what the client actually receives. Because the index is normally a price index, dividends are excluded — a substantial share of long-run equity return that never reaches the contract." },
          { kind: "p", text: "Life insurance follows the same logic. TERM is pure insurance for a stated period with no cash value, which is why it costs a fraction of the alternatives. WHOLE LIFE has a fixed premium and a guaranteed cash value. UNIVERSAL LIFE makes both the premium and the death benefit flexible, with policy charges deducted from the cash value — which means underfunding it can quietly cause a lapse. VARIABLE life invests the cash value in separate accounts, so the cash value and often the death benefit vary with performance, and it is a security." },
          { kind: "p", text: "COMMODITIES and PRECIOUS METALS produce no income and no earnings; the entire return is the price change, and storage or futures-roll costs work against the holder. DIGITAL ASSETS are the newest category in the outline, and the distinction it draws is the one that matters: a digital asset may be a SECURITY, a currency, or simply an asset, and the answer determines which body of law applies. Characteristics to explain to a client include extreme volatility, custody and key-loss risk, uneven regulatory treatment, and the fact that holdings at a platform are generally not protected by SIPC or FDIC insurance." },
        ],
      },
    ],
    keyTerms: [
      { term: "Forward pricing", def: "A fund order receives the next computed NAV, never the last one." },
      { term: "High-water mark", def: "Bars a performance fee until prior losses are recovered." },
      { term: "Leveraged/inverse fund", def: "Seeks a multiple or the opposite of an index's DAILY return; drifts over longer periods." },
      { term: "Exchange traded note", def: "Unsecured issuer debt tracking an index by contract; issuer credit risk applies." },
      { term: "Indexed annuity", def: "Index-linked credit bounded by a cap and floor; dividends normally excluded." },
    ],
    takeaways: [
      "Closed-end funds and non-traded REITs can trade away from NAV; ETFs are held near it by arbitrage.",
      "A REIT must distribute 90% of taxable income, and its dividends are mostly ordinary income.",
      "Leveraged and inverse funds deliver their multiple DAILY — that is why they decay over time.",
      "A structured note or ETN carries issuer credit risk on top of the reference asset's risk.",
      "Fixed annuity: insurer bears the risk. Variable: the client does, and it is a security.",
    ],
  },
  {
    id: "s66-clients-theory",
    examSlug: "series-66",
    topicId: "profile",
    topicName: "Client Recommendations and Strategies",
    title: "Client Types, the Profile, and Capital Market Theory",
    readingMinutes: 9,
    summary: "Who the client legally is, what must be gathered about them, and the theories that justify how their money is allocated.",
    intro:
      "Before an adviser can recommend anything they must answer two questions: who exactly is the client, and what do they need. The first is a legal question about entities and authority; the second is the profile. Capital market theory then supplies the reasoning that connects the two to an allocation.",
    sections: [
      {
        heading: "Types of client",
        blocks: [
          { kind: "p", text: "An INDIVIDUAL or SOLE PROPRIETORSHIP is the simplest case: there is no separate legal entity, so the owner's personal assets and the business's are the same pool and the account is opened under the owner's own tax identification number." },
          { kind: "table", table: { caption: "Business entities and what they mean for the account.", headers: ["Entity", "Liability", "Taxation"], rows: [["General partnership", "Partners personally liable", "Pass-through to partners"], ["Limited partnership", "Limited partners liable to their investment", "Pass-through; K-1 issued"], ["Limited liability company", "Members shielded", "Pass-through by default; can elect otherwise"], ["S-corporation", "Shareholders shielded", "Pass-through; limits on number and type of shareholders"], ["C-corporation", "Shareholders shielded", "Taxed at the entity level, then again on dividends"]] } },
          { kind: "p", text: "The distinction between an S-CORPORATION and a C-CORPORATION is the one the outline tests. A C-corp pays tax on its own income and its shareholders pay again on dividends — the double taxation that makes the structure expensive for a closely held business. An S-corp passes income through to shareholders, who pay once at their own rates, but it is limited in how many shareholders it may have and what kind. A LIMITED LIABILITY COMPANY combines the shield of a corporation with pass-through taxation by default, which is why it has become the common choice." },
          { kind: "p", text: "TRUSTS and ESTATES are governed by their controlling document — the trust instrument, or the letters testamentary or letters of administration issued by a court. Whoever opens the account must be identified as trustee, executor or administrator, and their powers come from that document, not from the firm's convenience. FOUNDATIONS and CHARITIES usually carry an investment policy statement that limits permitted holdings, and an adviser should read it before recommending anything." },
        ],
      },
      {
        heading: "Building the client profile",
        blocks: [
          { kind: "p", text: "FINANCIAL GOALS come first, and they should be specific enough to be measured: a sum, a date, and a purpose. The CURRENT AND FUTURE FINANCIAL SITUATION covers cash flow, the balance sheet, existing investments, tax situation, and expected Social Security and pension income. That last item matters more than clients expect — a guaranteed inflation-adjusted income stream changes how much market risk the rest of the portfolio can bear." },
          { kind: "p", text: "RISK TOLERANCE is willingness to accept loss; risk CAPACITY is the ability to absorb it without derailing the plan. A recommendation must respect the LOWER of the two. Where a client's stated tolerance and their demonstrated behaviour disagree, the behaviour is the better guide — a plan abandoned in a drawdown was never a workable plan." },
          { kind: "p", text: "NONFINANCIAL considerations are named explicitly in the outline. ENVIRONMENTAL, SOCIAL and GOVERNANCE criteria, along with religious screens, may exclude whole sectors from a portfolio, and a client who holds those values will judge the outcome against them as well as against a benchmark. Investment EXPERIENCE affects what a client can meaningfully consent to. LIFE EVENTS and LIFE STAGE change everything at once — a birth, a divorce, an inheritance, a diagnosis. And BEHAVIORAL FINANCE recognises that clients act on biases rather than pure logic: LOSS AVERSION makes losses hurt more than equivalent gains please, ANCHORING fixes a client on a purchase price that carries no information, OVERCONFIDENCE produces excessive trading, and HERDING drives buying into strength and selling into weakness." },
          { kind: "p", text: "CLIENT DATA GATHERING happens through identification documents, questionnaires and interviews. The questionnaire captures facts; the interview captures the things a form cannot, including how a client actually responded the last time markets fell. TIME HORIZON then bounds everything: a long horizon lets volatility resolve itself and makes inflation the binding risk, while a short one makes principal stability the priority whatever the client's appetite." },
        ],
      },
      {
        heading: "Capital market theory",
        blocks: [
          { kind: "p", text: "MODERN PORTFOLIO THEORY holds that a security should be judged by its effect on the whole portfolio rather than on its own merits. Because assets that are less than perfectly correlated do not fall together, combining them produces a portfolio whose risk is lower than the weighted average of its parts. The EFFICIENT FRONTIER is the set of portfolios offering the highest expected return for each level of risk; anything below it is inefficient, because some other mix offers more return for the same risk." },
          { kind: "p", text: "The CAPITAL ASSET PRICING MODEL prices only the risk that cannot be diversified away. Unsystematic risk earns no reward, because an investor could have eliminated it for free; systematic risk, measured by beta, is what the market pays for." },
          { kind: "formula", formula: { label: "CAPM", expr: "Expected return = Risk-free rate + Beta × (Market return − Risk-free rate)", note: "The bracketed term is the equity risk premium. A frequent error is multiplying beta by the whole market return, which ignores the risk-free base." } },
          { kind: "example", example: { title: "Required return under CAPM", prompt: "The risk-free rate is 4%, the expected market return is 10%, and a stock's beta is 0.8. What return does CAPM require?", steps: ["Market risk premium = 10% − 4% = 6%.", "Beta × premium = 0.8 × 6% = 4.8%.", "Required return = 4% + 4.8% = 8.8%."], answer: "8.8%. The below-market beta means the stock should be expected to return less than the market — which is the point of a defensive holding, not a defect in it." } },
          { kind: "p", text: "The EFFICIENT MARKET HYPOTHESIS argues that prices already reflect available information, so consistently beating the market on public information is difficult. The WEAK form says past prices carry no predictive information, which would make technical analysis futile. The SEMI-STRONG form adds all public information, which would make fundamental analysis futile as well. The STRONG form adds private information — a form few accept, since insider trading manifestly works, which is why it is illegal." },
        ],
      },
      {
        heading: "Strategies, styles and techniques",
        blocks: [
          { kind: "p", text: "STRATEGIC ASSET ALLOCATION sets a long-term target mix and rebalances back to it. TACTICAL ASSET ALLOCATION permits deliberate shorter-term deviations from that target based on a view. The first is a discipline; the second is an active bet, and it should be described to the client as one." },
          { kind: "p", text: "STYLES divide along two axes. ACTIVE management tries to beat a benchmark and charges for the attempt; PASSIVE management tries to match one at minimal cost. GROWTH favours companies reinvesting earnings at high multiples; VALUE favours companies trading cheaply against fundamentals; INCOME favours current cash flow; CAPITAL APPRECIATION accepts no current income in exchange for growth. The styles lead in different environments, which is the argument for holding more than one." },
          { kind: "p", text: "TECHNIQUES are the specific tools. DIVERSIFICATION spreads unsystematic risk. SECTOR ROTATION shifts weight between industries according to where the business cycle is thought to be — into cyclicals early in an expansion, into staples and utilities as it matures. DOLLAR-COST AVERAGING invests a fixed dollar amount at regular intervals, which buys more shares when prices are low and produces an average cost below the average price; it is a discipline, not a protection, and a sustained decline still loses money." },
          { kind: "p", text: "The remaining techniques all add risk deliberately. PURCHASING OR SELLING OPTIONS can hedge a position or generate income, with defined risk for buyers and, for uncovered writers, risk that is not defined at all. LEVERAGING borrows to increase exposure, magnifying both outcomes. VOLATILITY MANAGEMENT adjusts exposure as measured volatility changes. INVERSE STRATEGIES profit when a market falls and carry the daily-reset decay described earlier. HIGH FREQUENCY TRADING uses automated systems to trade in fractions of a second, capturing tiny spreads at enormous volume — a market-structure phenomenon a retail client participates in only as a price taker." },
        ],
      },
    ],
    keyTerms: [
      { term: "S-corporation", def: "Pass-through taxation with a corporate liability shield, subject to shareholder limits." },
      { term: "Risk capacity", def: "Ability to absorb loss, as distinct from willingness; the lower of the two governs." },
      { term: "Efficient frontier", def: "Portfolios offering the most return for a given level of risk." },
      { term: "Sector rotation", def: "Shifting industry weights according to the stage of the business cycle." },
      { term: "Dollar-cost averaging", def: "Fixed dollar amounts at intervals; average cost falls below average price." },
    ],
    takeaways: [
      "A C-corp is taxed twice; S-corps, LLCs and partnerships pass income through to owners.",
      "Recommendations must respect the lower of risk tolerance and risk capacity.",
      "CAPM prices only systematic risk — diversifiable risk earns no reward.",
      "Strategic allocation is a discipline; tactical allocation is an active bet and should be labelled one.",
      "Dollar-cost averaging lowers average cost; it does not prevent loss in a falling market.",
    ],
  },
  {
    id: "s66-tax-retire-estate",
    examSlug: "series-66",
    topicId: "taxation",
    topicName: "Client Recommendations and Strategies",
    title: "Taxation, Retirement Plans and Estate Techniques",
    readingMinutes: 13,
    summary: "Individual and entity taxation, the full range of retirement and education accounts, ownership forms and the transfer techniques the outline names.",
    intro:
      "Tax is where advice becomes measurable. Two clients with identical portfolios can end up with materially different wealth depending on which account holds what and how it eventually transfers. This chapter covers what NASAA names, and every item here appears somewhere in section III of the outline.",
    sections: [
      {
        heading: "Individual income tax fundamentals",
        blocks: [
          { kind: "p", text: "A MARGINAL BRACKET is the rate applied to the next dollar earned, and it is the rate that matters for every comparison an adviser makes — most obviously the taxable equivalent yield on a municipal bond. The average rate paid across all income is lower and is largely useless for decisions." },
          { kind: "p", text: "CAPITAL GAINS are realised only on sale. Held more than one year they are long-term and taxed at preferential rates; held one year or less they are short-term and taxed as ordinary income. TAX BASIS is what was paid, adjusted for events since: reinvested distributions increase it, return-of-capital distributions and bond premium amortisation reduce it. A client who fails to track reinvested basis pays tax twice on the same dollars." },
          { kind: "p", text: "QUALIFIED DIVIDENDS receive capital gain rates provided a holding period around the ex-dividend date is met. Ordinary dividends, most REIT distributions and all bond interest are taxed at ordinary rates instead." },
          { kind: "p", text: "The ALTERNATIVE MINIMUM TAX is a parallel calculation that adds back certain preference items and applies its own rate. Two matter here: interest on some private activity municipal bonds, which can strip away the exemption a client bought the bond for, and the spread on an incentive stock option at exercise, which produces a tax bill on a gain not yet realised in cash." },
          { kind: "p", text: "PENSION AND RETIREMENT PLAN DISTRIBUTIONS from pre-tax accounts are ordinary income regardless of how the gains were earned inside — capital gain treatment does not survive the wrapper. And the outline names one government-benefit consequence explicitly: IRMAA, the income-related monthly adjustment amount, increases Medicare Part B and Part D premiums for higher-income retirees, on a two-year lookback. A large one-off realisation — a Roth conversion, a business sale — can therefore raise a client's Medicare premiums two years later, which is exactly the kind of second-order effect an adviser is paid to see coming." },
          { kind: "example", example: { title: "Taxable equivalent yield at the margin", prompt: "A client in the 32% federal bracket compares a 3.6% municipal bond against taxable alternatives. What taxable yield would be equivalent?", steps: ["TEY = municipal yield ÷ (1 − marginal rate).", "TEY = 3.6 ÷ (1 − 0.32).", "TEY = 3.6 ÷ 0.68 = 5.29%."], answer: "5.29%. Any taxable bond yielding less than that leaves the client worse off. Multiplying instead of dividing gives 2.45%, which is the after-tax yield of a 3.6% TAXABLE bond — the opposite calculation." } },
        ],
      },
      {
        heading: "Entity and pass-through taxation",
        blocks: [
          { kind: "p", text: "A C-CORPORATION pays tax on its own income; its shareholders pay again on dividends received. An S-CORPORATION avoids the entity-level layer by passing income through to shareholders on a K-1, taxed at their own rates whether or not cash was distributed." },
          { kind: "p", text: "PASSTHROUGH ENTITIES are named specifically. A REIT avoids entity-level tax by distributing at least 90% of taxable income, and the shareholder receives mostly ordinary income as a result. A MASTER LIMITED PARTNERSHIP passes income and deductions through on a K-1 rather than issuing a 1099, which delays the client's tax filing and creates complications when held inside an IRA. An LLC passes through by default but may elect corporate treatment." },
          { kind: "p", text: "TRUSTS are taxed on income they retain, at compressed brackets that reach the top rate at a very low level of income; income distributed to beneficiaries is taxed to those beneficiaries instead. That compression is why distributing trust income is often the tax-efficient choice." },
        ],
      },
      {
        heading: "Wealth transfer",
        blocks: [
          { kind: "p", text: "The ANNUAL EXCLUSION lets a donor give a set amount per recipient each year with no gift tax filing and no use of the lifetime exemption. Gifts above it consume the LIFETIME exemption, tracked through the UNIFIED CREDIT — a single credit applying across both gift and estate tax, which is why the two systems are described as unified." },
          { kind: "p", text: "PORTABILITY allows a surviving spouse to use whatever exemption their deceased spouse did not, provided an estate tax return is filed to elect it. Failing to file that return to preserve an unused exemption is a costly and entirely avoidable error. The unlimited MARITAL DEDUCTION allows transfers between US citizen spouses free of gift and estate tax, which is why planning frequently defers tax to the second death." },
          { kind: "p", text: "Basis treatment differs sharply between the two routes. A GIFT of appreciated property carries the donor's basis to the recipient, so the built-in gain travels with it. Property passing at DEATH generally receives a STEPPED-UP basis to date-of-death value, which erases the unrealised gain entirely. The planning implication follows directly: gift the cash or the low-gain assets, bequeath the highly appreciated ones." },
          { kind: "p", text: "A DONOR ADVISED FUND takes the deduction in the year it is funded while grants to charities are made later. Funding it with APPRECIATED securities is the efficient version: the client deducts fair value and never recognises the gain, which beats selling first and donating the proceeds." },
        ],
      },
      {
        heading: "Retirement plans",
        blocks: [
          { kind: "p", text: "A TRADITIONAL IRA may allow a deductible contribution now, grows tax-deferred, and is taxed as ordinary income on withdrawal. A ROTH IRA takes after-tax money and produces entirely tax-free qualified withdrawals — requiring both age 59½ and a five-year clock — and uniquely has no required minimum distributions during the original owner's lifetime. Contributions to either require EARNED income, with a spousal IRA the exception." },
          { kind: "p", text: "A SOLO 401(k) covers a self-employed person with no employees other than a spouse, and it comes in traditional and Roth versions. Because the owner contributes both as employee and as employer, the total that can go in is considerably higher than an IRA allows — which is the reason to use it." },
          { kind: "table", table: { caption: "Employer plans the outline names.", headers: ["Plan", "Who uses it", "Defining feature"], rows: [["401(k)", "Corporate employers", "Salary deferral, often with a match"], ["403(b)", "Schools, certain non-profits", "Also called a tax-sheltered annuity"], ["457 plan", "State and local government, some non-profits", "No early-withdrawal penalty on separation"], ["SIMPLE IRA", "Small employers", "Employer match or non-elective contribution required"], ["SEP IRA (Simplified Employee Pension)", "Small businesses, self-employed", "Employer-funded only; low administration"], ["Defined benefit", "Employers promising a formula benefit", "Employer carries the investment risk"]] } },
          { kind: "p", text: "The 457 exception is worth holding onto: a governmental 457 plan is not subject to the 10% early distribution penalty on separation from service, which makes it behave differently from every other plan in the table. NONQUALIFIED plans, by contrast, may favour selected executives — but the participant is an UNSECURED CREDITOR of the employer, so an insolvency puts the deferred money behind other creditors." },
          { kind: "p", text: "ERISA sets fiduciary, vesting and reporting standards for private-sector plans; governmental and most church plans are exempt. The fiduciary must act solely in the interest of participants, diversify, and follow the prudent expert standard. A QUALIFIED DEFAULT INVESTMENT ALTERNATIVE is the default into which a participant's contributions go when they make no election — typically a target date fund, a balanced fund or a managed account. Using a QDIA gives the plan fiduciary relief from liability for that default choice, which is why the concept exists at all." },
          { kind: "p", text: "Moving money between plans has two paths. A ROLLOVER passes through the account holder's hands, must be redeposited within 60 days, is limited to one per twelve months for IRAs, and triggers 20% mandatory withholding when it comes from an employer plan — which the client must replace from other funds or be taxed on. A DIRECT TRANSFER moves custodian to custodian with no withholding, no 60-day clock and no annual limit. The direct transfer is almost always the correct recommendation." },
        ],
      },
      {
        heading: "Education and health accounts",
        blocks: [
          { kind: "p", text: "A 529 PLAN grows tax-free for qualified education expenses. The account owner keeps control and may change the beneficiary, and a five-year gift election allows a large contribution to be spread across five annual exclusions. Non-qualified withdrawals are taxed and penalised on the EARNINGS portion only, since the contribution was already after-tax." },
          { kind: "p", text: "A COVERDELL education savings account also grows tax-free for qualified expenses but carries a much lower annual contribution limit and income limits on contributors, which is why 529 plans dominate. A UTMA or UGMA custodial account is not a tax-advantaged vehicle at all: income is taxed to the minor subject to the kiddie tax rules, the gift is irrevocable, and control passes at the age of majority. It also counts as the STUDENT'S asset in financial aid formulas, which are assessed more heavily than parental assets — a real disadvantage against a 529." },
          { kind: "p", text: "A HEALTH SAVINGS ACCOUNT requires enrolment in a high-deductible health plan and is the only account offering three tax benefits at once: contributions are deductible, growth is tax-free, and qualified medical withdrawals are tax-free. Unspent balances roll forward rather than being forfeited, which is what separates an HSA from a flexible spending account and is why some clients use it as a supplemental retirement vehicle." },
        ],
      },
      {
        heading: "Ownership forms and estate techniques",
        blocks: [
          { kind: "table", table: { caption: "How title determines what happens at death.", headers: ["Registration", "At death", "Note"], rows: [["JTWROS", "Passes to the survivor outside probate", "Available to any two or more owners"], ["Tenants in common", "The share passes under the will", "Interests need not be equal"], ["Tenancy by the entirety", "Passes to the surviving spouse", "Spouses only; adds creditor protection in states allowing it"], ["Community property with survivorship", "Passes to the surviving spouse", "Community property states; can allow full basis step-up"]] } },
          { kind: "p", text: "TRANSFER ON DEATH and PAY ON DEATH registrations achieve the JTWROS outcome for a single owner: the named beneficiary receives the account directly, outside probate, while having no rights at all during the owner's lifetime. A BENEFICIARY DESIGNATION on a retirement account or insurance policy overrides the will entirely, which is why stale designations produce so much litigation." },
          { kind: "p", text: "PER STIRPES is the designation term the outline names. It directs that if a beneficiary predeceases the owner, that beneficiary's share passes down to their own descendants rather than being redistributed among the surviving named beneficiaries — the alternative, per capita, does the opposite. For a client with children and grandchildren the choice determines whether a deceased child's family inherits anything at all." },
          { kind: "p", text: "TRUSTS and WILLS carry the rest. A will directs probate assets and names an executor; dying without one means state intestacy law decides. A REVOCABLE trust can be amended and its assets remain in the grantor's estate; an IRREVOCABLE transfer generally removes them from it. A QUALIFIED DOMESTIC RELATIONS ORDER is the court order that allows a retirement plan to be divided in a divorce and paid to a former spouse without triggering the early distribution penalty — without one, splitting a qualified plan is not possible." },
        ],
      },
    ],
    keyTerms: [
      { term: "IRMAA", def: "Income-related increase to Medicare Part B and D premiums, on a two-year lookback." },
      { term: "Unified credit", def: "The single credit applying across gift and estate tax; portability lets a spouse use the unused part." },
      { term: "QDIA", def: "The plan's default investment when a participant makes no election; gives the fiduciary relief." },
      { term: "Per stirpes", def: "A deceased beneficiary's share passes to their descendants rather than to the other beneficiaries." },
      { term: "QDRO", def: "Court order dividing a retirement plan in divorce without triggering the early distribution penalty." },
      { term: "HSA", def: "Deductible in, tax-free growth, tax-free qualified medical withdrawals; balances roll forward." },
    ],
    takeaways: [
      "Gifts carry the donor's basis; bequests generally receive a stepped-up basis. Plan accordingly.",
      "A direct trustee-to-trustee transfer avoids the 60-day clock, the one-per-year limit and 20% withholding.",
      "Governmental 457 plans escape the 10% early-withdrawal penalty on separation; other plans do not.",
      "A UTMA counts as the student's asset in aid formulas; a 529 does not.",
      "A beneficiary designation overrides the will — review it after every major life event.",
    ],
  },
  {
    id: "s66-trading-performance",
    examSlug: "series-66",
    topicId: "trading",
    topicName: "Client Recommendations and Strategies",
    title: "Trading Securities and Measuring Performance",
    readingMinutes: 8,
    summary: "Order types and account types, who does what in the execution chain, what trading actually costs, and the return measures an adviser must be able to distinguish.",
    intro:
      "An adviser who cannot explain how a trade reaches the market, what it costs, and how the resulting performance is measured cannot answer the questions clients actually ask. Section III closes with exactly that material.",
    sections: [
      {
        heading: "Order types and account types",
        blocks: [
          { kind: "p", text: "A BID is the price at which someone will buy; an OFFER, or ask, is the price at which someone will sell. The difference between the best of each is the SPREAD, and it is a real cost paid on every round trip whether or not any commission appears on the confirmation." },
          { kind: "p", text: "A MARKET ORDER guarantees execution but not price. A LIMIT ORDER guarantees price but not execution — a buy limit sits below the market and a sell limit above it, and either may go unfilled. A STOP ORDER is dormant until the stock trades at or through the stop price, at which point it becomes a market order; a sell stop is placed below the market to protect a long position, a buy stop above it to protect a short. A stop guarantees that the order will be triggered, not the price it fills at, which is why a gap through the stop can produce a far worse execution than the client expected." },
          { kind: "p", text: "A SHORT SALE borrows stock and sells it, in the expectation of buying it back lower. The loss potential is unlimited because the price has no ceiling, and Regulation SHO requires a locate before the sale and that the order be marked long or short. A CASH ACCOUNT requires full payment and permits no borrowing. A MARGIN ACCOUNT extends credit against the securities, requires a signed credit agreement, and is what makes both leverage and short selling possible." },
          { kind: "p", text: "A firm acting as AGENT arranges the trade between the customer and someone else and charges a COMMISSION. A firm acting as PRINCIPAL sells from or buys into its own inventory and takes a MARKUP or MARKDOWN instead. The confirmation must state which capacity applied, because the compensation is disclosed differently in each case." },
        ],
      },
      {
        heading: "The execution chain",
        blocks: [
          { kind: "p", text: "An INTRODUCING BROKER-DEALER holds the customer relationship — opening accounts, making recommendations, taking orders — while a CLEARING BROKER-DEALER or CUSTODIAN holds the assets, settles the trades and produces the statements. The clearing agreement allocates responsibility between them, and it is disclosed to the customer. Suitability sits with whoever made the recommendation, not with whoever produced the statement." },
          { kind: "p", text: "A MARKET MAKER quotes a firm two-sided market and stands ready to trade for its own account, earning the spread in exchange for carrying inventory risk. An EXCHANGE provides the centralised venue, listing standards and price discovery. Alongside them, electronic venues match orders directly without a dealer in the middle." },
          { kind: "p", text: "PAYMENT FOR ORDER FLOW is compensation a broker-dealer receives for routing customer orders to a particular market maker. It is permitted but must be disclosed — at account opening, annually, and on the confirmation — and it does NOT relieve the firm of its best execution obligation. That is the conflict the disclosure exists to expose: the firm has an economic reason to prefer one destination, and the client's interest may point elsewhere." },
          { kind: "p", text: "BEST EXECUTION requires reasonable diligence to obtain the most favourable terms reasonably available. It is not a guarantee about any individual trade; it is an obligation to have a process, and to review execution quality regularly and rigorously rather than routing on autopilot." },
        ],
      },
      {
        heading: "What trading costs",
        blocks: [
          { kind: "p", text: "The visible cost is the COMMISSION on an agency trade or the MARKUP on a principal trade, both of which must be fair and reasonable. The invisible costs are usually larger: the SPREAD paid on entry and exit, and market impact when an order is large relative to normal volume. A thinly traded security can cost several percent to enter and leave even where the commission is zero." },
          { kind: "p", text: "For a client, the practical implications are simple to state. Limit orders control the price paid in volatile or thin markets. Frequent trading multiplies every one of these costs and, in a taxable account, converts long-term gains into short-term ones. And a low headline commission tells a client nothing about what the round trip actually cost them." },
        ],
      },
      {
        heading: "Measuring performance",
        blocks: [
          { kind: "p", text: "TOTAL RETURN combines income and price change, and it is the only honest single figure. Quoting yield alone ignores capital movement; quoting appreciation alone ignores the income. HOLDING PERIOD RETURN measures the whole gain over the period held, without annualising, and ANNUALIZED return converts a period result into a yearly rate so that different periods can be compared — a conversion that exaggerates both good and bad results when the underlying period is very short." },
          { kind: "formula", formula: { label: "Holding period return", expr: "HPR = (Ending value − Beginning value + Income) ÷ Beginning value", note: "Total return over the period held, before annualising." } },
          { kind: "p", text: "TIME-WEIGHTED RETURN removes the effect of the client's deposits and withdrawals, so it measures the MANAGER. DOLLAR-WEIGHTED RETURN, which is the internal rate of return of the account's actual cash flows, includes that timing, so it measures the CLIENT'S EXPERIENCE. A manager should be evaluated on the time-weighted figure, because they do not control when money arrives, while a client's own outcome is better described by the dollar-weighted one." },
          { kind: "example", example: { title: "Why the two measures diverge", prompt: "A fund returns +20% in the first half of a year and −10% in the second. A client invests a small sum at the start and a very large sum at the midpoint. Which return figure will look better?", steps: ["Time-weighted links the two periods regardless of size: 1.20 × 0.90 = 1.08, or +8%.", "Dollar-weighted weights the second, losing period far more heavily because most of the money was present for it.", "The client's actual dollar outcome is therefore much worse than +8%."], answer: "Time-weighted shows +8% and the dollar-weighted figure is substantially lower. Both are correct — they answer different questions. Reporting only the flattering one is the problem." } },
          { kind: "p", text: "The remaining measures adjust for something. RISK-ADJUSTED return relates return to risk taken, through the Sharpe ratio or Treynor ratio. INFLATION-ADJUSTED, or real, return subtracts inflation and is what actually grows purchasing power. AFTER-TAX return subtracts the tax actually paid and is the only figure a taxable client can spend. EXPECTED return is a forward-looking probability-weighted estimate, not a record. INDEXED return states performance relative to a benchmark rather than in isolation." },
          { kind: "p", text: "CURRENT YIELD divides annual income by current price, which means it rises as a price falls — so an unusually high yield often signals doubt about the payment rather than a bargain. RELEVANT BENCHMARKS close the section: a benchmark is only meaningful when it matches the strategy in asset class, style and size. Comparing a short-term bond fund to the S&P 500 produces a number that means nothing at all." },
        ],
      },
    ],
    keyTerms: [
      { term: "Payment for order flow", def: "Compensation for routing orders; must be disclosed and never displaces best execution." },
      { term: "Introducing broker-dealer", def: "Holds the client relationship; the clearing firm holds assets and settles." },
      { term: "Time-weighted return", def: "Strips out client cash-flow timing; the correct measure of a manager." },
      { term: "Dollar-weighted return", def: "The IRR of actual cash flows; measures the client's own experience." },
      { term: "Holding period return", def: "Total gain over the period held, before annualising." },
    ],
    takeaways: [
      "A market order guarantees execution; a limit order guarantees price. A stop guarantees neither once elected.",
      "Agency trades carry a commission; principal trades carry a markup. The confirmation states which.",
      "Payment for order flow is disclosed, not prohibited — and best execution still applies.",
      "Evaluate a manager on time-weighted return; describe the client's outcome with dollar-weighted.",
      "A benchmark must match the strategy or the comparison is meaningless.",
    ],
  },
  {
    id: "s66-adviser-reg-deep",
    examSlug: "series-66",
    topicId: "ia-regulation",
    topicName: "Laws, Regulations and Guidelines",
    title: "Registration: Advisers, Representatives, Broker-Dealers and Agents",
    readingMinutes: 7,
    summary: "Who must register with whom, the exclusions and exemptions, notice filing, books and records, continuing education, and the Administrator's powers.",
    intro:
      "Forty-five of the hundred questions come from section IV, and registration is the largest part of it. The whole area reduces to three questions asked repeatedly: does this person meet the definition, is there an exclusion or exemption, and who has jurisdiction — the state or the SEC.",
    sections: [
      {
        heading: "Who is an investment adviser",
        blocks: [
          { kind: "p", text: "The definition rests on three elements together, conventionally the ABC test: a person who provides ADVICE about securities, as part of a BUSINESS, for COMPENSATION. All three must be present. Fail any one and the person is not an investment adviser, however investment-like their activity looks." },
          { kind: "p", text: "The exclusions follow from that. Lawyers, accountants, teachers and engineers are excluded where the advice is solely INCIDENTAL to their profession and no special compensation is received for it. Broker-dealers and their agents are excluded on the same logic — advice incidental to brokerage, with no separate fee. Charging a client for a financial plan is exactly what destroys that exclusion, because the compensation is no longer incidental. Publishers of bona fide general-circulation publications are excluded where the advice is impersonal and not tailored to any client's situation." },
          { kind: "p", text: "Jurisdiction then splits. A FEDERAL COVERED ADVISER registers with the SEC and is generally beyond state registration; states retain antifraud authority and may require a NOTICE FILING with fees and a consent to service of process. Advisers below the federal thresholds register with the STATE. An EXEMPT REPORTING ADVISER — typically an adviser solely to private funds or to venture capital funds — is relieved of full registration but must still file portions of Form ADV and remains subject to antifraud provisions and examination. Relief from registering is not relief from the rules." },
        ],
      },
      {
        heading: "Registration and what follows it",
        blocks: [
          { kind: "p", text: "Registration is made on FORM ADV. Part 1 carries the factual and disciplinary information regulators use; Part 2 is the narrative BROCHURE delivered to clients, describing services, fees, conflicts, disciplinary history and the adviser's business. The brochure must be delivered before or at the time of entering into an advisory agreement, and offered annually thereafter. Material changes require prompt amendment — an ADV that no longer describes the business is itself a violation." },
          { kind: "p", text: "BOOKS AND RECORDS requirements attach immediately. Advisers must keep the records the rules specify, keep them for the periods specified, and produce them on examination. Records of advertising, performance claims, client agreements, custody activity and personal securities transactions are the ones examiners consistently ask for first." },
          { kind: "p", text: "REGISTRATION MAINTENANCE is continuous, not annual paperwork. Uniform forms must be kept current — Form ADV for the firm, Form U4 for individuals, Form U5 on termination, filed within the required time and with a copy to the individual. Registration must be renewed each year. And an IAR's REPORTABLE EVENTS — criminal charges, regulatory actions, certain financial events, customer complaints meeting the thresholds — must be disclosed when they occur rather than at the next renewal." },
          { kind: "p", text: "CONTINUING EDUCATION for investment adviser representatives is now a live requirement in states that have adopted the NASAA model rule: annual credits split between products-and-practice and ethics-and-professional-responsibility, with failure to complete them affecting the representative's ability to renew. The exam expects candidates to know that IAR continuing education exists and is annual, not merely that broker-dealer registered persons have their own regime." },
          { kind: "p", text: "SUPERVISION is the firm's obligation. An investment adviser must supervise its representatives through written procedures reasonably designed to prevent and detect violations, and the standard is reasonableness rather than perfection. A firm with no procedure addressing a known risk in its own business fails that test regardless of whether anything went wrong." },
        ],
      },
      {
        heading: "Investment adviser representatives, broker-dealers and agents",
        blocks: [
          { kind: "p", text: "An INVESTMENT ADVISER REPRESENTATIVE is an individual associated with an adviser who makes recommendations, manages accounts, determines recommendations, solicits advisory services, or supervises those who do. Clerical and purely ministerial personnel are excluded. Note the jurisdictional twist: representatives of a FEDERAL COVERED adviser still register with the STATE in which they have a place of business, even though their firm does not." },
          { kind: "p", text: "A BROKER-DEALER is a person engaged in the business of effecting securities transactions for others or for its own account. Excluded from the state definition are agents, issuers, banks, and — importantly — a person with no place of business in the state who deals only with existing clients temporarily present there, or only with certain institutional buyers." },
          { kind: "p", text: "An AGENT of a broker-dealer is an INDIVIDUAL who represents the firm in effecting securities transactions. The definition catches individuals only; a firm is never an agent. Certain individuals representing an ISSUER in exempt transactions or in specified exempt securities are excluded, and clerical staff who take no orders and make no recommendations are not agents." },
          { kind: "callout", label: "The registration trap", body: "An agent's registration is tied to the firm. When an agent moves, the agent, the OLD firm and the NEW firm must all notify the Administrator. And an agent may not transact business in a state where either the agent or the firm is unregistered — both must be registered, which is the point candidates most often miss." },
        ],
      },
      {
        heading: "Securities, issuers and the Administrator",
        blocks: [
          { kind: "p", text: "A SECURITY is defined broadly and includes investment contracts, which is the catch-all the Howey test fills: an investment of money in a common enterprise with an expectation of profits derived primarily from the efforts of others. What is NOT a security matters just as much — insurance policies with fixed benefits, fixed annuities, commodity futures contracts themselves, collectibles and precious metals held directly." },
          { kind: "p", text: "State registration of securities takes three paths. NOTIFICATION or filing suits seasoned issuers. COORDINATION runs the state filing alongside a federal registration, becoming effective with it. QUALIFICATION is the full state process for issues not registered federally, and it is the most demanding. FEDERAL COVERED SECURITIES — exchange-listed securities, investment company shares, certain private placements — are largely preempted from state registration, though notice filings and fees remain." },
          { kind: "p", text: "EXEMPTIONS come in two kinds and the distinction is tested. An EXEMPT SECURITY is exempt because of what it is: government and municipal issues, bank issues, insurance company issues, non-profit issues. An EXEMPT TRANSACTION is exempt because of how it is sold: isolated non-issuer transactions, private placements to a limited number of buyers, unsolicited brokerage transactions, transactions with institutions and fiduciaries. Neither kind is exempt from the ANTIFRAUD provisions — those apply to every security and every transaction, always." },
          { kind: "p", text: "The state securities ADMINISTRATOR holds the enforcement authority. The Administrator may make rules and orders, require registration, conduct investigations in or outside the state, subpoena witnesses and records, issue cease and desist orders, and DENY, SUSPEND or REVOKE a registration where doing so is in the public interest and a statutory ground exists. What the Administrator may not do is jail anyone — criminal prosecution is a court's function, and civil penalties and criminal referrals run through the courts." },
          { kind: "p", text: "Remedies for the buyer are equally specific. A person who sells in violation may be required to make RESCISSION: buying the security back at the price paid plus interest, less any income received. A rescission offer accepted by the buyer generally ends the claim. Civil liability runs to the seller and can extend to those who materially aid the violation." },
        ],
      },
    ],
    keyTerms: [
      { term: "ABC test", def: "Advice, Business, Compensation — all three needed to be an investment adviser." },
      { term: "Exempt reporting adviser", def: "Relieved of full registration but still files part of Form ADV and remains subject to antifraud rules." },
      { term: "Notice filing", def: "A state filing and fee for a federal covered adviser or security, short of registration." },
      { term: "Exempt security vs exempt transaction", def: "Exempt by WHAT it is versus by HOW it is sold; antifraud applies to both." },
      { term: "Rescission", def: "Buying the security back at cost plus interest less income received." },
    ],
    takeaways: [
      "Advice + business + compensation. Charging a separate planning fee destroys the broker-dealer exclusion.",
      "Representatives of a federal covered adviser still register with the state where they have an office.",
      "An agent is always an individual; a firm is never an agent.",
      "Nothing is ever exempt from the antifraud provisions.",
      "The Administrator can deny, suspend, revoke and subpoena — but cannot imprison.",
    ],
  },
  {
    id: "s66-ethics-custody-firm",
    examSlug: "series-66",
    topicId: "business-practices",
    topicName: "Laws, Regulations and Guidelines",
    title: "Compensation, Custody, Ethics and Firm Obligations",
    readingMinutes: 9,
    summary: "How advisers may be paid, what custody means and requires, the conflicts the rules name individually, and the firm-level obligations around clients' data and the adviser's own continuity.",
    intro:
      "This is the heart of section IV and the reason the Series 66 exists. An adviser is a fiduciary, which means the client's interest comes first as a matter of law rather than of preference. Everything below is that principle applied to a specific temptation.",
    sections: [
      {
        heading: "Compensation and its disclosure",
        blocks: [
          { kind: "p", text: "FEES may be charged as a percentage of assets under management, hourly, by fixed fee, or by subscription. They must be reasonable in relation to services provided, and — more importantly for the exam — they must be DISCLOSED before the client engages, in the brochure and in the advisory contract. An adviser charging materially more than comparable firms for comparable services must say so." },
          { kind: "p", text: "COMMISSIONS are permitted where an adviser or its representative is also acting in a brokerage capacity, but the conflict is obvious and must be disclosed: the adviser has an economic interest in the transaction it is recommending. Where an adviser acts as principal or as agent for another person in a client trade, written disclosure and CLIENT CONSENT are required before completion of the transaction." },
          { kind: "p", text: "PERFORMANCE BASED FEES are generally prohibited, because a fee tied to gains gives the adviser a reason to take risk with the client's money that the client would not take themselves. The exception is narrow and permits such fees only for QUALIFIED CLIENTS meeting assets-under-management or net worth thresholds, or for certain other sophisticated clients. A fee structured as a share of capital gains for an ordinary retail client is a clean violation." },
          { kind: "p", text: "SOFT DOLLARS are research and brokerage services obtained with client commission dollars. The safe harbour permits it only where what is received is genuine research or brokerage services that assist in the investment decision-making process — never the adviser's own overhead. Rent, office equipment, salaries, marketing and travel fall outside it. The test to hold onto is whether the client benefits from the thing purchased or only the adviser does." },
        ],
      },
      {
        heading: "Custody, discretion and authorisation",
        blocks: [
          { kind: "p", text: "CUSTODY means holding client funds or securities, or having any authority to obtain possession of them. It is broader than most candidates expect: it includes physically holding assets, having signatory power over a client's account, acting as general partner of a pooled vehicle, and — critically — having the ability to DEDUCT FEES directly from a client account. Receiving a client's cheque made out to a third party and forwarding it promptly generally does not create custody; holding it does." },
          { kind: "p", text: "Where custody exists, the obligations follow: assets held with a QUALIFIED CUSTODIAN, notice to clients of where and how assets are held, account statements delivered at least quarterly, an annual SURPRISE EXAMINATION by an independent accountant in most cases, and in many states a higher minimum net worth or a bond. Advisers frequently avoid custody deliberately, precisely to avoid this apparatus." },
          { kind: "p", text: "DISCRETION is authority to decide the security, the amount, and whether to buy or sell, without contacting the client first. It requires WRITTEN authorisation, and the exam's favourite trap is the narrow exception: deciding only TIME and PRICE on an order the client has already specified is not discretion, and a verbal instruction covering time and price is good for that day only." },
          { kind: "p", text: "TRADING AUTHORIZATION for a third party — anyone other than the account owner — must equally be in writing before an order is accepted. Marriage, parenthood and adult children create no authority whatsoever over a separately titled account. A LIMITED power permits trading; a FULL power adds the right to withdraw." },
          { kind: "p", text: "The RECOMMENDATION STANDARD OF CARE differs by capacity, and both may apply to the same person. An investment adviser owes a FIDUCIARY duty running throughout the relationship: duties of loyalty and care, best execution, and the elimination or full disclosure of conflicts. A broker-dealer owes REGULATION BEST INTEREST at the time of a recommendation, which requires that the firm not place its own financial interest ahead of the retail customer's. A dually registered person must make clear in which capacity they are acting." },
          { kind: "p", text: "ANTI-MONEY LAUNDERING obligations run alongside. Firms must verify customer identity, screen against the OFAC list, report cash transactions above $10,000, and file a suspicious activity report within 30 days of detection — never telling the customer that one was filed. Structuring transactions to stay below the reporting threshold is itself a federal crime, and the pattern is what a representative should escalate." },
        ],
      },
      {
        heading: "The conflicts named individually",
        blocks: [
          { kind: "p", text: "NASAA lists these one by one, which means each is fair game as its own question." },
          { kind: "bullets", items: ["LOANS to or from clients are prohibited, except in narrow circumstances — an adviser borrowing from a client who is a bank or affiliate in the business of lending, for instance. Borrowing from an ordinary advisory client is never acceptable.", "SHARING IN PROFITS AND LOSSES in a client account is prohibited for advisers. For broker-dealer agents a narrow exception exists with firm approval and proportional contribution, but an adviser's fiduciary status makes the arrangement harder still.", "CLIENT CONFIDENTIALITY must be maintained; information may not be disclosed without consent except where law requires it.", "INSIDER TRADING — trading or tipping on material nonpublic information — is prohibited, and liability reaches the recipient of a tip as well as its source.", "SELLING AWAY, transacting securities business outside the firm without notice and approval, is prohibited regardless of how the investment performs.", "MARKET MANIPULATION — matched orders, painting the tape, wash trades, spreading rumours — creates a false picture of the market and is prohibited in every form.", "PERSONAL SECURITIES TRANSACTIONS must be reported, and access persons must file an INITIAL HOLDINGS report and QUARTERLY transaction reports so the firm can detect trading ahead of clients.", "OUTSIDE SECURITIES ACCOUNTS held away from the firm must be disclosed, with duplicate confirmations and statements supplied on request.", "POLITICAL CONTRIBUTIONS by covered associates can trigger a two-year ban on providing compensated advisory services to a government client, subject to de minimis amounts — $350 per election where the person is entitled to vote for the official and $150 where they are not.", "EXCESSIVE TRADING, judged against the client's objectives and resources rather than any fixed trade count, is prohibited. The reverse case — charging an ongoing advisory fee on an account that is never managed — is equally a problem.", "EXPLOITATION OF VULNERABLE ADULTS must be watched for actively: firms should make reasonable efforts to obtain a TRUSTED CONTACT and may place a temporary hold on a disbursement where exploitation is suspected. The trusted contact has no authority over the account, which is exactly why clients agree to name one."] },
          { kind: "p", text: "Two prohibitions sit alongside these and are absolute. GUARANTEEING a client against loss is never permitted, and no disclosure or signature makes it permissible. UNLAWFUL REPRESENTATIONS ABOUT REGISTRATION are equally absolute: stating or implying that registration means a regulator has approved or endorsed the adviser, the representative, or any security is prohibited. Registration is a filing, not an endorsement." },
        ],
      },
      {
        heading: "Communications, contracts and required disclosures",
        blocks: [
          { kind: "p", text: "ADVISORY CONTRACTS must be in writing under state law and must describe the services, the term, the fee and how it is computed, any prepaid fee and how it is refunded, and whether discretion is granted. Assignment of the contract requires client CONSENT, and a change in a partnership's majority membership must be disclosed to clients. No contract may waive compliance with the law — a hedge clause purporting to limit the adviser's liability is void." },
          { kind: "p", text: "ADVERTISING and CORRESPONDENCE are held to the same standard whatever the medium. SOCIAL MEDIA posts, EMAIL and DIGITAL MESSAGING, and WEBSITE and INTERNET communications about the firm's business are all business records: they must be supervised, retained, and fair and not misleading. The rule follows the CONTENT, not the platform — a business recommendation sent from a personal phone is still a business communication, which is the point on which large enforcement penalties across the industry have turned." },
          { kind: "p", text: "PRODUCT DISCLOSURES must convey material risks, costs and conflicts. Performance presentations must be fair and complete: showing gross returns without disclosing fees, cherry-picking a favourable period, or presenting past results as an indication of future performance are all misleading. And PERFORMANCE GUARANTEES are prohibited outright, which follows from the same principle as the ban on guaranteeing against loss." },
        ],
      },
      {
        heading: "Protecting the client's data and the adviser's continuity",
        blocks: [
          { kind: "p", text: "CYBERSECURITY, PRIVACY and DATA PROTECTION are now explicit obligations. Regulation S-P requires a privacy notice to clients initially and annually, with an opportunity to opt out of certain sharing, and requires safeguards for client records. Regulation S-ID requires an identity theft prevention programme identifying red flags — an address change immediately followed by a wire request is the classic pattern — and stating the firm's response. A firm suffering a breach follows its incident response and notification plan rather than improvising." },
          { kind: "p", text: "A BUSINESS CONTINUITY PLAN addresses what happens when the firm cannot operate normally. DISASTER RECOVERY covers the immediate mechanics: alternate locations, data backup, communications with clients and regulators, and how clients reach their assets while systems are down. SUCCESSION PLANNING covers the longer question of what happens if the principal of a small advisory firm dies or becomes incapacitated — who serves clients, who has authority, and how clients are told. For a solo adviser this is not administrative housekeeping; it is a client protection matter, which is why regulators examine for it." },
        ],
      },
    ],
    keyTerms: [
      { term: "Custody", def: "Holding client assets or having authority to obtain them — including direct fee deduction." },
      { term: "Qualified client", def: "Meets AUM or net worth thresholds, permitting a performance-based fee." },
      { term: "Soft dollars", def: "Research or brokerage services bought with client commissions; overhead is outside the safe harbour." },
      { term: "Access person reporting", def: "Initial holdings and quarterly transaction reports on personal securities activity." },
      { term: "Trusted contact", def: "A person the firm may contact about welfare concerns; holds no authority over the account." },
      { term: "Business continuity plan", def: "Disaster recovery plus succession planning; examined as a client protection." },
    ],
    takeaways: [
      "Deducting fees directly from a client account is custody, and custody brings the whole apparatus with it.",
      "Performance fees are prohibited except for qualified clients meeting the thresholds.",
      "Soft dollars must buy research or brokerage services — never the adviser's overhead.",
      "Discretion needs written authority; time and price alone is not discretion and is good for that day only.",
      "Registration is never an endorsement, and no guarantee against loss is ever permissible.",
      "A business communication is a business record whatever device or platform carried it.",
    ],
  },
];

export const s66Wave2Questions: Question[] = [
];
