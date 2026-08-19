// ============================================================
// Certus — Series 7 content (wave 1, original)
// Core topics to seed the exam: Equity Securities, Debt
// Securities, and Customer Accounts & Suitability.
// More Series 7 topics (options, municipals, packaged products,
// regulations) follow in later waves.
// ============================================================

import { Chapter, Question, ExamContent } from "./types";
import { s7ExtraChapters, s7ExtraQuestions } from "./series7-extra";
import { s7Wave3Chapters, s7Wave3Questions } from "./series7-wave3";
import { s7DeepChapters, s7DeepQuestions } from "./series7-deep";
import { series7Questions } from "./series7-q";

const chapters: Chapter[] = [
  // 1. EQUITY SECURITIES
  {
    id: "s7-equity",
    examSlug: "series-7",
    topicId: "equity",
    topicName: "Equity Securities",
    title: "Equity Securities: Common and Preferred Stock",
    readingMinutes: 6,
    summary: "What stockholders own, how common and preferred differ, and the rights that come with each.",
    intro:
      "Equity securities represent ownership in a corporation, and they're the foundation of the Series 7. A registered representative must understand exactly what a shareholder owns, what rights they hold, and how common and preferred stock differ in risk, income, and priority. These distinctions drive suitability decisions every day on the job.",
    sections: [
      {
        heading: "Common stock: the residual claim",
        blocks: [
          { kind: "p", text: "Common stock is ownership, and everything about it follows from being LAST in line. Common shareholders vote, may receive dividends when the board declares them, and hold a residual claim in liquidation — residual meaning after every creditor, every bondholder, and every preferred shareholder has been satisfied. That position is why common carries the greatest risk and the greatest long-run return potential: there is no ceiling on the upside precisely because there is no floor under the downside." },
          { kind: "p", text: "Two voting systems appear on the Series 7 and they serve different shareholders. STATUTORY voting lets a holder cast up to their share count for each seat separately, which allows a majority holder to sweep the entire board. CUMULATIVE voting lets a holder multiply shares by the number of open seats and concentrate the whole total on one candidate — a system designed to give minority holders a realistic path to representation. Any question asking which method benefits the small shareholder answers cumulative." },
          { kind: "bullets", items: ["AUTHORIZED shares sit in the charter; ISSUED shares have been sold; OUTSTANDING = issued less TREASURY stock.", "Treasury stock carries no vote and receives no dividend — the company cannot pay itself.", "Only OUTSTANDING shares count for EPS, voting, and dividends.", "A PREEMPTIVE RIGHT lets an existing holder maintain proportional ownership when new shares are issued."] },
        ],
      },
      {
        heading: "The dividend dates and the ex-date price effect",
        blocks: [
          { kind: "p", text: "Four dates govern a dividend. DECLARATION is when the board announces it. EX-DIVIDEND is the first day the stock trades WITHOUT the right to that dividend — under T+1 settlement it now coincides with the record date, so older material showing a one-day gap is out of date. RECORD is when the issuer checks its books. PAYABLE is when cash actually arrives, typically weeks later." },
          { kind: "p", text: "The ex-date carries the market consequence: the stock normally opens LOWER by roughly the dividend, because a buyer that morning is acquiring the same company minus an imminent cash payment. Existing holders lose nothing — they receive that value as cash instead of price. To collect the dividend you must buy BEFORE the ex-date; buying on it means the seller keeps it." },
        ],
      },
      {
        heading: "Preferred stock and its variants",
        blocks: [
          { kind: "p", text: "Preferred stock is legally equity that behaves economically like perpetual debt: a fixed stated dividend as a percentage of par (conventionally $100), priority over common for dividends and liquidation, and normally no vote. Because the payment is fixed, preferred prices move INVERSELY with interest rates just as bonds do — which makes interest rate risk the dominant risk in a preferred position, not business risk." },
          { kind: "example", example: { title: "cumulative preferred in arrears", prompt: "A 6% cumulative preferred ($100 par) skipped its dividend for two years. What must be paid per share before common receives anything?", steps: ["Annual dividend = 6% × $100 par = $6.", "Two skipped years accumulate: 2 × $6 = $12 in arrears.", "The current year's $6 is also owed first.", "Total = $12 + $6 = $18."], answer: "$18 per share. Had the preferred been NON-cumulative, the two missed years would simply be gone and only the current $6 would be owed — that contrast is the entire point of the word 'cumulative'." } },
          { kind: "table", table: { caption: "Preferred variants and who benefits.", headers: ["Variant", "Feature", "Favours"], rows: [["Cumulative", "Missed dividends accumulate as arrears", "The holder"], ["Participating", "May receive more than the stated rate", "The holder"], ["Convertible", "Exchangeable for common at a set ratio", "The holder"], ["Callable", "Issuer may redeem, usually when rates fall", "The ISSUER"], ["Straight", "Fixed rate, none of the above", "Neither"]] } },
          { kind: "bullets", items: ["RIGHTS are short-term, go to existing shareholders, and are priced BELOW market — so they have immediate value.", "WARRANTS are long-term, often attached to a bond as a sweetener, and priced ABOVE market — no intrinsic value at issue.", "ADRs give U.S. investors foreign exposure; the holder still bears CURRENCY risk and usually has no vote.", "A 2-for-1 SPLIT doubles shares and halves both price and cost basis per share — total value unchanged."] },
        ],
      },
    ],
    keyTerms: [
      { term: "Common stock", def: "Residual ownership with voting rights, potential dividends, and a last-in-line claim in liquidation." },
      { term: "Preferred stock", def: "Equity with a fixed dividend and priority over common for dividends and liquidation; usually non-voting." },
      { term: "Cumulative preferred", def: "Preferred whose skipped dividends accrue and must be paid before any common dividend." },
      { term: "Preemptive right", def: "The right of existing shareholders to buy new shares first to avoid ownership dilution." },
      { term: "Warrant", def: "A long-term right to buy stock at a set price, usually above market when issued; often a bond sweetener." },
    ],
    takeaways: [
      "Common stock is last in liquidation but captures unlimited upside.",
      "Preferred pays a fixed dividend, has priority over common, and is interest-rate sensitive.",
      "Cumulative preferred's missed dividends must be paid before any common dividend.",
      "Rights are short-term and below market; warrants are long-term and above market.",
    ],
  },

  // 2. DEBT SECURITIES
  {
    id: "s7-debt",
    examSlug: "series-7",
    topicId: "debt",
    topicName: "Debt Securities",
    title: "Debt Securities: Bonds, Yields, and Money Markets",
    readingMinutes: 7,
    summary: "How bonds work, the issuers and their tax profiles, the inverse price-yield relationship, the yield measures, and short-term money-market instruments — diagrammed and worked through.",
    intro:
      "Debt securities are loans made by investors to issuers — corporations, the U.S. Treasury, and municipalities — in exchange for interest and the eventual return of principal. The Series 7 tests debt heavily because bonds are the backbone of income and risk-balancing in client portfolios. If you internalize one thing, make it the inverse relationship between bond prices and yields; nearly every bond question is a consequence of it.",
    sections: [
      {
        heading: "Indenture protections and yield to worst",
        blocks: [
          { kind: "p", text: "A SINKING FUND provision obliges the issuer to set money aside each year to retire part of the issue before maturity. Because the debt is repaid progressively rather than in one lump, default risk falls — a protection that favours the HOLDER, unlike a call provision, which is exercised at the issuer's option when rates have fallen." },
          { kind: "p", text: "When a bond is callable, the investor should be shown the least flattering realistic outcome rather than the most. YIELD TO WORST is the lower of yield to maturity and yield to call. On a PREMIUM bond the call yield is typically lower, because the loss of premium is compressed into fewer years; on a discount bond maturity usually produces the lower figure. Quoting yield to worst prevents a callable premium bond from being marketed on a yield the buyer will probably never receive." },
        ],
      },
      {
        heading: "Bond basics and the issuers' tax profiles",
        blocks: [
          { kind: "p", text: "A bond pays periodic interest (the coupon) and returns its face value — par, usually $1,000 — at maturity. The three main issuers carry distinct risk and, crucially for the exam, distinct tax profiles. U.S. Treasury securities are backed by the federal government and treated as free of credit risk; their interest is taxable at the federal level but exempt from state and local tax. Corporate bonds pay higher yields to compensate for credit risk and are fully taxable. Municipal bonds, issued by states and localities, typically pay interest that is exempt from federal tax (and often state tax for in-state residents) — which is why their lower stated yields are so attractive to investors in high tax brackets." },
          { kind: "callout", label: "The tax mirror", body: "Treasuries: federally TAXABLE, state-EXEMPT. Municipals: federally EXEMPT, often state-exempt in-state. The muni's federal exemption is worth the most to high-bracket investors — compare on a tax-equivalent-yield basis." },
        ],
      },
      {
        heading: "Price, yield, and their inverse relationship",
        blocks: [
          { kind: "p", text: "A bond's coupon is fixed at issuance, but market rates are not — and that mismatch drives the inverse relationship. When market interest rates rise, an existing bond's lower fixed coupon looks unattractive next to newly issued bonds, so its price must fall until its yield matches the market. When rates fall, the bond's now-above-market coupon makes it more valuable and its price rises. A bond trading above par is a premium bond (its coupon exceeds current market rates); below par, a discount bond." },
          { kind: "figure", figure: { caption: "Figure 1 — Price and yield move in opposite directions along a convex curve. Where the coupon equals the market yield, the bond prices at par; above that point it trades at a premium, below it at a discount.", alt: "Downward-sloping convex curve of bond price against yield with premium, par, and discount regions", svg: `<svg viewBox="0 0 460 250" width="100%" style="max-width:460px"><line x1="62" y1="40" x2="62" y2="235" stroke="var(--border-strong)" stroke-width="1"/><line x1="62" y1="235" x2="435" y2="235" stroke="var(--border-strong)" stroke-width="1"/><line x1="62" y1="150" x2="435" y2="150" stroke="var(--border)" stroke-dasharray="4 3"/><path d="M82,58 C150,150 235,195 430,222" fill="none" stroke="var(--primary)" stroke-width="2.5"/><circle cx="206" cy="150" r="4" fill="var(--primary)"/><text x="430" y="146" text-anchor="end" font-size="10" fill="var(--text-muted)">Par</text><text x="120" y="92" font-size="10" fill="var(--ats-green)" font-weight="600">Premium</text><text x="330" y="212" font-size="10" fill="var(--ats-red)" font-weight="600">Discount</text><text x="248" y="262" text-anchor="middle" font-size="10" fill="var(--text-muted)">Yield →</text><text x="20" y="135" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 20 135)">Price →</text></svg>` } },
          { kind: "p", text: "Three yield measures recur, and their ordering is a favorite test point. Nominal yield is simply the coupon rate. Current yield is the annual coupon divided by the current market price. Yield to maturity (YTM) is the truest measure, capturing the coupon plus any capital gain or loss if the bond is held to maturity. For a discount bond the investor also gains the pull toward par, so the yields rank nominal < current < YTM; for a premium bond the bond loses value toward par, so the order reverses to nominal > current > YTM." },
          { kind: "table", table: { caption: "Table 1 — Yield ordering tells you instantly whether a bond is at a discount, par, or premium.", headers: ["Bond trades at", "Coupon vs current yield vs YTM"], rows: [["Discount (price < par)", "Coupon < Current yield < YTM"], ["Par (price = par)", "Coupon = Current yield = YTM"], ["Premium (price > par)", "Coupon > Current yield > YTM"]] } },
          { kind: "example", example: { title: "current yield", prompt: "A bond with a 6% coupon ($60 per year on $1,000 par) is trading at a discount price of $800. What is its current yield, and how does it compare to the coupon?", steps: ["Current yield = annual coupon ÷ price = $60 ÷ $800.", "= 0.075 = 7.5%.", "The 7.5% current yield exceeds the 6% nominal (coupon) — consistent with a discount bond, where coupon < current yield < YTM."], answer: "Current yield ≈ 7.5%, above the 6% coupon — a discount bond, as the ordering predicts." } },
        ],
      },
      {
        heading: "Money market instruments",
        blocks: [
          { kind: "p", text: "The money market is where short-term debt — maturities of one year or less — trades, prized for safety and liquidity rather than yield. Treasury bills are short-term government debt sold at a discount to face value, with the difference serving as the interest. Commercial paper is short-term unsecured corporate debt that funds near-term needs. Certificates of deposit, banker's acceptances, and repurchase agreements round out the category. These are where investors park cash they need to keep safe and accessible, accepting minimal yield in exchange for minimal risk and ready liquidity." },
        ],
      },
    ],
    keyTerms: [
      { term: "Par value", def: "The face amount of a bond (usually $1,000) repaid at maturity; bonds trade at a premium above it or discount below it." },
      { term: "Yield to maturity (YTM)", def: "The total return if a bond is held to maturity, including the coupon plus any gain or loss versus price." },
      { term: "Current yield", def: "Annual coupon ÷ current market price; sits between the coupon and the YTM." },
      { term: "Municipal bond", def: "State/local government debt whose interest is typically exempt from federal tax — most valuable to high-bracket investors." },
      { term: "Treasury bill", def: "Short-term government debt sold at a discount and maturing at face value." },
    ],
    takeaways: [
      "Bond prices and yields move inversely along a convex curve — premium coupons beat market rates, discounts trail them.",
      "Treasury interest is federally taxable but state-exempt; municipal interest is usually federally exempt (the mirror image).",
      "Discount bond: coupon < current yield < YTM; premium bond reverses the order; par bond, all equal.",
      "Money-market instruments (T-bills, commercial paper, CDs) trade yield for safety and liquidity on short maturities.",
    ],
  },

  // 3. CUSTOMER ACCOUNTS & SUITABILITY
  {
    id: "s7-accounts",
    examSlug: "series-7",
    topicId: "accounts",
    topicName: "Customer Accounts & Suitability",
    title: "Customer Accounts & Suitability",
    readingMinutes: 6,
    summary: "Account types, the information you must gather, and the obligation to recommend only suitable investments.",
    intro:
      "Much of a registered representative's daily responsibility is opening accounts correctly and making recommendations that fit the client. The Series 7 tests both the mechanics of account types and the core ethical-regulatory duty of suitability — recommending only what is appropriate for a specific customer's profile. Getting this wrong is both an exam failure and, in real life, a compliance violation.",
    sections: [
      {
        heading: "Account documentation and the events that change it",
        blocks: [
          { kind: "p", text: "The NEW ACCOUNT FORM captures identity, the suitability profile, and who is authorised to act. Entity accounts need more: a CORPORATE RESOLUTION names the individuals empowered to trade on the corporation's behalf, and a partnership account requires the partnership agreement for the same purpose. A NUMBERED ACCOUNT may be identified by a code rather than a name on statements for privacy, but the firm must hold a written statement attesting to the true beneficial owner — an account whose owner the firm did not know would defeat the customer identification program outright." },
          { kind: "p", text: "On notice of the DEATH OF A CUSTOMER the firm must immediately cancel all open orders and freeze the account, then await a death certificate, letters testamentary or of administration, and any applicable tax waivers. Every prior authority ends at death, including standing discretionary authority and any power of attorney, so acting on earlier instructions would be trading without authorisation." },
        ],
      },
      {
        heading: "Registration: who controls, and what happens on death",
        blocks: [
          { kind: "p", text: "How an account is registered determines who may act and where assets go on death, and the exam probes the second question harder than the first. In JOINT TENANTS WITH RIGHT OF SURVIVORSHIP, a deceased owner's interest passes automatically to the survivor, outside probate. In TENANTS IN COMMON, the deceased's share passes to their ESTATE under their will. Identical parties, identical assets, opposite outcomes — which makes the registration choice substantive rather than clerical." },
          { kind: "p", text: "CUSTODIAL accounts under UTMA or UGMA hold assets for a minor: one custodian, one minor, and an IRREVOCABLE gift that legally belongs to the minor from the moment of transfer. The custodian may not trade on margin or pursue speculative strategies, because the standard is prudent management of someone else's property, and control passes to the minor outright at the age of majority." },
          { kind: "table", table: { caption: "Registration types.", headers: ["Type", "Who may trade", "On death"], rows: [["Individual", "The owner", "Through the estate"], ["JTWROS", "Either owner", "Automatically to the survivor"], ["Tenants in common", "Either owner", "Deceased's share to their estate"], ["UTMA / UGMA", "The custodian", "Assets always belonged to the minor"], ["Trust", "The trustee", "Per the trust document"], ["Corporate", "Per corporate resolution", "Entity continues"]] } },
          { kind: "callout", label: "When a customer dies", body: "On notice of death the firm must immediately CANCEL all open orders and FREEZE the account, then await a death certificate, letters testamentary or of administration, and any applicable tax waivers. Prior instructions, including standing discretionary authority, may not be acted upon — discretion dies with the customer." },
        ],
      },
      {
        heading: "Discretion, documentation, and approvals",
        blocks: [
          { kind: "p", text: "DISCRETION — choosing the security, the amount, or whether to trade at all — requires WRITTEN authorization from the customer before it may be exercised, and every discretionary order must be marked as such and reviewed. One narrow exception exists: discretion as to TIME and PRICE only, on a specified security and quantity, may be accepted verbally and is good only for that day. Trading before written authority arrives is unauthorized trading regardless of the customer's later approval." },
          { kind: "bullets", items: ["A CASH account requires no customer signature; a principal must still approve the account.", "A MARGIN account requires the customer to sign a margin agreement containing the credit and hypothecation agreements; the loan consent is optional.", "OPTIONS accounts require approval by a registered options principal, delivery of the ODD at or before approval, and a signed options agreement within 15 days.", "Confirmations must be sent at or before completion of the transaction and must disclose the firm's capacity — agent or principal.", "Statements go out at least quarterly, and monthly when there is activity."] },
        ],
      },
      {
        heading: "Suitability under Regulation Best Interest",
        blocks: [
          { kind: "p", text: "Since June 30, 2020, a recommendation to a retail customer must be in that customer's BEST INTEREST, and the firm may not place its own financial interest ahead of theirs. The older suitability standard required only that a recommendation be appropriate, which permitted recommending the suitable product that paid the most. Reg BI closes that gap through four obligations — disclosure, care, conflict of interest, and compliance — with the CARE obligation requiring that costs and reasonably available alternatives be weighed among suitable options." },
          { kind: "p", text: "Underneath sits KNOW YOUR CUSTOMER: financial situation, tax status, objectives, TIME HORIZON, LIQUIDITY NEEDS, risk tolerance, and experience. Time horizon and liquidity do the most work in exam questions — money needed in eighteen months cannot sit in equities whatever the client says about risk appetite, and a client who may need capital on short notice cannot be placed in a DPP or private placement regardless of expected return. Note that suitability obligations attach to RECOMMENDATIONS; an unsolicited order carries none, but must be marked unsolicited, and mismarking a solicited trade to escape the analysis is a serious violation." },
        ],
      },
    ],
    keyTerms: [
      { term: "Margin account", def: "An account allowing the customer to borrow part of a purchase from the broker-dealer using securities as collateral." },
      { term: "Discretionary account", def: "An account where the rep may trade without prior approval for each trade; requires written authorization." },
      { term: "Suitability", def: "The duty to recommend only investments appropriate for a specific customer's profile." },
      { term: "Churning", def: "Excessive trading in a customer account to generate commissions; a violation of quantitative suitability." },
      { term: "Know your customer (KYC)", def: "Gathering a customer's financial situation, objectives, and risk tolerance before recommending." },
    ],
    takeaways: [
      "Cash accounts require full payment; margin accounts allow borrowing and amplify risk.",
      "Discretionary accounts need written authorization and extra supervision.",
      "Suitability is judged per-customer — a legal product can still be an unsuitable recommendation.",
      "Churning (excessive trading for commissions) violates quantitative suitability.",
    ],
  },
];

const questions: Question[] = [
  // Equity
  {
    id: "s7-eq-q1", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "In a corporate liquidation, which party is paid LAST?",
    choices: ["Common stockholders", "Bondholders", "Preferred stockholders"],
    answerIndex: 0,
    explanation: "Common stockholders hold a residual claim — they're paid only after all creditors (including bondholders) and preferred stockholders are satisfied. That last-in-line position is the trade-off for common stock's unlimited upside potential. Choice B (bondholders) are creditors, paid relatively early. Choice C (preferred) ranks ahead of common but behind creditors.",
  },
  {
    id: "s7-eq-q2", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "A cumulative preferred stock missed two years of dividends. Before common shareholders can receive any dividend, the company must:",
    choices: ["Pay only the current year's preferred dividend", "Pay all accrued preferred dividends plus the current", "Nothing — missed preferred dividends are forfeited"],
    answerIndex: 1,
    explanation: "Cumulative preferred dividends accrue when skipped, and ALL arrears must be paid before common shareholders receive anything. So the company must pay the two missed years plus the current year first. Choice A ignores the accrued arrears. Choice C describes NON-cumulative preferred, where missed dividends are indeed forfeited — the opposite of cumulative.",
  },
  {
    id: "s7-eq-q3", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 3,
    stem: "Which statement correctly distinguishes a right from a warrant?",
    choices: ["Rights are long-term and priced above market; warrants are short-term and below market", "Both are identical except for their names", "Rights are short-term and priced below market; warrants are long-term and above market"],
    answerIndex: 2,
    explanation: "Rights are short-term (weeks) and let existing shareholders buy new shares BELOW the current market price, compensating for dilution. Warrants are long-term (years) and usually have an exercise price ABOVE the market at issuance, often attached to bonds as a sweetener. Choice A reverses both attributes. Choice B is wrong — their term and pricing differ meaningfully, a favorite exam distinction.",
  },
  // Debt
  {
    id: "s7-debt-q1", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 1,
    stem: "Market interest rates fall. The price of an existing fixed-coupon bond will most likely:",
    choices: ["Rise", "Fall", "Stay the same"],
    answerIndex: 0,
    explanation: "Bond prices move inversely to interest rates. When rates fall, an existing bond's higher fixed coupon becomes more attractive than newly issued bonds, so demand pushes its price up (to a premium). Choice B reverses the relationship. Choice C ignores that the bond's fixed coupon is now above market, which makes the bond more valuable.",
  },
  {
    id: "s7-debt-q2", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 3,
    stem: "For a bond trading at a discount, the correct ordering of yields is:",
    choices: ["Nominal yield > current yield > YTM", "Nominal yield < current yield < YTM", "All three yields are equal"],
    answerIndex: 1,
    explanation: "For a discount bond (price below par), the yields rank nominal (coupon) < current yield < YTM, because the investor also gains the difference between the discounted price and par at maturity, which lifts the YTM highest. Choice A is the PREMIUM bond ordering (where the bond loses value toward par). Choice C describes a par bond, where all three yields coincide.",
  },
  {
    id: "s7-debt-q3", examSlug: "series-7", topicId: "debt", topicName: "Debt Securities", difficulty: 2,
    stem: "A high-tax-bracket investor is comparing two similar bonds. The main advantage of a municipal bond over a corporate bond is that municipal interest is generally:",
    choices: ["Higher in stated coupon rate", "Backed by the U.S. Treasury", "Exempt from federal income tax"],
    answerIndex: 2,
    explanation: "Municipal bond interest is generally exempt from federal income tax (and often state tax for in-state residents), which makes their lower stated yields especially attractive to high-bracket investors on an after-tax basis. Choice A is usually false — munis tend to have LOWER coupons precisely because of the tax break. Choice B confuses munis with Treasuries; municipals are backed by state/local issuers, not the federal government.",
  },
  // Accounts & suitability
  {
    id: "s7-acc-q1", examSlug: "series-7", topicId: "accounts", topicName: "Customer Accounts", difficulty: 2,
    stem: "A registered representative wants to place trades in a customer's account without obtaining approval for each transaction. This requires:",
    choices: ["Prior written discretionary authority and added supervision", "Only a verbal okay from the customer", "Nothing, as long as trades are profitable"],
    answerIndex: 0,
    explanation: "Trading without per-transaction approval requires written discretionary authorization from the customer, and such accounts get heightened supervisory review. Choice B is insufficient — verbal consent doesn't establish discretionary authority. Choice C is dangerously wrong: profitability never substitutes for required authorization, and unauthorized trading is a serious violation regardless of outcome.",
  },
  {
    id: "s7-acc-q2", examSlug: "series-7", topicId: "accounts", topicName: "Customer Accounts", difficulty: 3,
    stem: "A complex, high-risk options strategy is a legitimate product, but a representative recommends it to a 70-year-old retiree living on fixed income with low risk tolerance. This most likely violates:",
    choices: ["Nothing, since the product itself is legal", "The suitability obligation", "Only the anti-money-laundering rules"],
    answerIndex: 1,
    explanation: "Suitability is judged per-customer: a product can be perfectly legal and suitable for some investors yet violate the rep's obligation when recommended to a client whose objectives, finances, and risk tolerance don't fit. Recommending a high-risk strategy to a risk-averse retiree breaches customer-specific suitability. Choice A confuses 'legal product' with 'suitable recommendation.' Choice C is unrelated — AML concerns identity and money laundering, not appropriateness.",
  },
  {
    id: "s7-acc-q3", examSlug: "series-7", topicId: "accounts", topicName: "Customer Accounts", difficulty: 2,
    stem: "Excessive trading in a customer's account primarily to generate commissions is known as:",
    choices: ["Hedging", "Rebalancing", "Churning"],
    answerIndex: 2,
    explanation: "Churning is the unethical practice of trading excessively to generate commissions rather than to benefit the customer; it violates the quantitative dimension of suitability. Choice A (hedging) is a legitimate risk-reduction strategy. Choice B (rebalancing) is the legitimate practice of restoring a portfolio's target allocations. Only churning is a violation.",
  },
];

export const series7Content: ExamContent = {
  examSlug: "series-7",
  chapters: [...s7DeepChapters, ...chapters, ...s7ExtraChapters, ...s7Wave3Chapters],
  questions: [...s7DeepQuestions, ...questions, ...s7ExtraQuestions, ...s7Wave3Questions, ...series7Questions],
};
