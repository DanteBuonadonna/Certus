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

const chapters: Chapter[] = [
  // 1. EQUITY SECURITIES
  {
    id: "s7-equity",
    examSlug: "series-7",
    topicId: "equity",
    topicName: "Equity Securities",
    title: "Equity Securities: Common and Preferred Stock",
    readingMinutes: 16,
    summary: "What stockholders own, how common and preferred differ, and the rights that come with each.",
    intro:
      "Equity securities represent ownership in a corporation, and they're the foundation of the Series 7. A registered representative must understand exactly what a shareholder owns, what rights they hold, and how common and preferred stock differ in risk, income, and priority. These distinctions drive suitability decisions every day on the job.",
    sections: [
      {
        heading: "Common stock and its rights",
        paragraphs: [
          "Common stock represents residual ownership in a company. Common shareholders have the right to vote on major corporate matters (electing directors, approving mergers), the right to receive dividends if and when the board declares them, and a residual claim on assets in liquidation — meaning they're paid last, after creditors and preferred shareholders. In exchange for that last-in-line position, common shareholders capture the upside: when the company thrives, the value of common stock has unlimited growth potential.",
          "Voting can be statutory (one vote per share per candidate) or cumulative (votes can be concentrated on fewer candidates), with cumulative voting favoring minority shareholders. Shareholders may also receive preemptive rights, allowing them to buy new shares before the public to maintain their proportional ownership and avoid dilution.",
        ],
        callout: {
          label: "Liquidation priority",
          body: "In a liquidation the order of claims is: secured creditors → unsecured creditors (including bondholders) → preferred stockholders → common stockholders. Common is always last.",
        },
      },
      {
        heading: "Preferred stock",
        paragraphs: [
          "Preferred stock is an equity security that behaves more like a fixed-income instrument. It pays a fixed, stated dividend and has priority over common stock for both dividends and liquidation proceeds — but preferred shareholders typically give up voting rights and the unlimited upside of common stock. Because its value is driven largely by its fixed dividend, preferred stock is sensitive to interest rates, much like a bond: when rates rise, preferred prices generally fall.",
          "Several features modify preferred stock. Cumulative preferred accrues any skipped dividends, which must be paid in full before common shareholders receive anything. Participating preferred can receive extra dividends beyond the stated rate. Callable preferred can be repurchased by the issuer at a set price. Convertible preferred can be exchanged for a fixed number of common shares, giving the holder a way to participate in the company's growth.",
        ],
      },
      {
        heading: "Rights and warrants",
        paragraphs: [
          "Rights and warrants both let holders buy stock, but they differ. A right (from a rights offering) is short-term, typically lasting weeks, and lets existing shareholders buy new shares at a price below the current market — compensation for the dilution a new issue causes. A warrant is long-term, often lasting years, and is usually issued attached to bonds or preferred stock as a sweetener, with an exercise price set above the market price at issuance. The key contrast tested on the exam: rights are short-term and priced below market; warrants are long-term and priced above market.",
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
    readingMinutes: 18,
    summary: "How bonds work, the main issuers, the relationship between price and yield, and short-term instruments.",
    intro:
      "Debt securities are loans made by investors to issuers — corporations, the U.S. Treasury, and municipalities — in exchange for interest and the return of principal. The Series 7 tests debt heavily because bonds are central to building income and balancing risk in client portfolios. The single most important relationship to internalize is the inverse one between bond prices and yields.",
    sections: [
      {
        heading: "Bond basics and issuers",
        paragraphs: [
          "A bond pays periodic interest (the coupon) and returns its face value (par, usually $1,000) at maturity. The main issuers carry different risk and tax profiles. U.S. Treasury securities are backed by the federal government and considered free of credit risk; their interest is taxable federally but exempt from state and local tax. Corporate bonds pay higher yields to compensate for credit risk and are fully taxable. Municipal bonds, issued by states and localities, typically pay interest that is exempt from federal tax (and often state tax for in-state residents), which makes their lower stated yields attractive to investors in high tax brackets.",
        ],
      },
      {
        heading: "Price, yield, and their inverse relationship",
        paragraphs: [
          "Bond prices and yields move in opposite directions. When market interest rates rise, existing bonds with lower fixed coupons become less attractive, so their prices fall until their yield matches the market; when rates fall, existing bonds with higher coupons become more valuable and their prices rise. A bond trading above par is at a premium (its coupon exceeds current market rates); below par is at a discount.",
          "Several yield measures matter. Nominal yield is just the coupon rate. Current yield is annual coupon divided by current market price. Yield to maturity (YTM) accounts for the coupon plus any gain or loss if held to maturity, and is the truest measure of return. The relationships are testable: for a discount bond, nominal yield < current yield < YTM; for a premium bond, the order reverses (nominal > current > YTM).",
        ],
        callout: {
          label: "Yield ordering",
          body: "Discount bond: coupon < current yield < YTM. Premium bond: coupon > current yield > YTM. Par bond: all three are equal.",
        },
      },
      {
        heading: "Money market instruments",
        paragraphs: [
          "The money market is where short-term debt (maturities of one year or less) trades, providing safety and liquidity. Treasury bills are short-term government debt sold at a discount and maturing at face value, with the difference serving as interest. Commercial paper is short-term unsecured corporate debt used to fund near-term needs. Certificates of deposit, banker's acceptances, and repurchase agreements round out the category. These instruments are where investors park cash they need to keep safe and accessible, accepting low yields in exchange for minimal risk.",
        ],
      },
    ],
    keyTerms: [
      { term: "Par value", def: "The face amount of a bond (usually $1,000) repaid at maturity." },
      { term: "Yield to maturity (YTM)", def: "The total return if a bond is held to maturity, including coupon plus gain or loss versus price." },
      { term: "Municipal bond", def: "State/local government debt whose interest is typically exempt from federal tax." },
      { term: "Premium / Discount bond", def: "A bond trading above par (premium) or below par (discount) as market rates move." },
      { term: "Treasury bill", def: "Short-term government debt sold at a discount and maturing at face value." },
    ],
    takeaways: [
      "Bond prices and yields move inversely — premium coupons exceed market rates, discounts trail them.",
      "Treasury interest is federally taxable but state-exempt; municipal interest is usually federally exempt.",
      "Discount bond: coupon < current yield < YTM; premium bond reverses the order.",
      "Money market instruments trade safety and liquidity for low yields on short maturities.",
    ],
  },

  // 3. CUSTOMER ACCOUNTS & SUITABILITY
  {
    id: "s7-accounts",
    examSlug: "series-7",
    topicId: "accounts",
    topicName: "Customer Accounts & Suitability",
    title: "Customer Accounts & Suitability",
    readingMinutes: 16,
    summary: "Account types, the information you must gather, and the obligation to recommend only suitable investments.",
    intro:
      "Much of a registered representative's daily responsibility is opening accounts correctly and making recommendations that fit the client. The Series 7 tests both the mechanics of account types and the core ethical-regulatory duty of suitability — recommending only what is appropriate for a specific customer's profile. Getting this wrong is both an exam failure and, in real life, a compliance violation.",
    sections: [
      {
        heading: "Account types",
        paragraphs: [
          "A cash account requires the customer to pay in full for purchases. A margin account lets the customer borrow part of the purchase price from the broker-dealer, using securities as collateral — amplifying both gains and losses and requiring a signed margin agreement. Accounts also differ by ownership: individual, joint (tenants in common, where a deceased owner's share passes to their estate, versus joint tenants with right of survivorship, where it passes to the surviving owner), and various entity or fiduciary accounts.",
          "Discretionary accounts, in which the representative can trade without the client's prior approval for each transaction, require written authorization from the customer and heightened supervision. Fiduciary accounts (trusts, custodial accounts for minors, estates) require the responsible party to act prudently and only in the beneficiary's interest.",
        ],
      },
      {
        heading: "Know your customer and suitability",
        paragraphs: [
          "Before recommending anything, a representative must gather essential facts about the customer — financial situation, tax status, investment objectives, time horizon, liquidity needs, and risk tolerance. This 'know your customer' information is the basis for suitability: the obligation to recommend only investments appropriate for that specific client's profile. A speculative options strategy may be suitable for a wealthy, experienced investor seeking growth, and entirely unsuitable for a retiree living on fixed income.",
          "Suitability has three dimensions: reasonable-basis (the product is suitable for at least some investors), customer-specific (it's suitable for this particular customer), and quantitative (a series of transactions isn't excessive — guarding against churning, the unethical practice of trading to generate commissions). A recommendation can be perfectly legal as a product yet still violate suitability if it doesn't fit the customer in front of you.",
        ],
        callout: {
          label: "The suitability principle",
          body: "Recommend only what fits THIS customer's objectives, finances, and risk tolerance. Legal ≠ suitable — appropriateness is judged per-customer.",
        },
      },
      {
        heading: "Opening and maintaining accounts",
        paragraphs: [
          "Opening an account requires verifying the customer's identity (under anti-money-laundering rules), recording the essential financial and objective information, and obtaining the required approvals — including a principal's signature. Certain accounts, like options or margin accounts, require additional agreements and disclosures because of their elevated risk. Throughout the relationship, the representative must keep the customer profile current, since a recommendation suitable last year may be unsuitable after a job loss, retirement, or change in goals.",
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
    choices: ["Bondholders", "Preferred stockholders", "Common stockholders"],
    answerIndex: 2,
    explanation: "Common stockholders hold a residual claim — they're paid only after all creditors (including bondholders) and preferred stockholders are satisfied. That last-in-line position is the trade-off for common stock's unlimited upside potential. Choice A (bondholders) are creditors, paid relatively early. Choice B (preferred) ranks ahead of common but behind creditors.",
  },
  {
    id: "s7-eq-q2", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 2,
    stem: "A cumulative preferred stock missed two years of dividends. Before common shareholders can receive any dividend, the company must:",
    choices: ["Pay only the current year's preferred dividend", "Pay all accrued (skipped) preferred dividends plus the current one", "Nothing — missed preferred dividends are forfeited"],
    answerIndex: 1,
    explanation: "Cumulative preferred dividends accrue when skipped, and ALL arrears must be paid before common shareholders receive anything. So the company must pay the two missed years plus the current year first. Choice A ignores the accrued arrears. Choice C describes NON-cumulative preferred, where missed dividends are indeed forfeited — the opposite of cumulative.",
  },
  {
    id: "s7-eq-q3", examSlug: "series-7", topicId: "equity", topicName: "Equity Securities", difficulty: 3,
    stem: "Which statement correctly distinguishes a right from a warrant?",
    choices: ["Rights are long-term and priced above market; warrants are short-term and below market", "Rights are short-term and priced below market; warrants are long-term and above market", "Both are identical except for their names"],
    answerIndex: 1,
    explanation: "Rights are short-term (weeks) and let existing shareholders buy new shares BELOW the current market price, compensating for dilution. Warrants are long-term (years) and usually have an exercise price ABOVE the market at issuance, often attached to bonds as a sweetener. Choice A reverses both attributes. Choice C is wrong — their term and pricing differ meaningfully, a favorite exam distinction.",
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
    choices: ["Higher in stated coupon rate", "Exempt from federal income tax", "Backed by the U.S. Treasury"],
    answerIndex: 1,
    explanation: "Municipal bond interest is generally exempt from federal income tax (and often state tax for in-state residents), which makes their lower stated yields especially attractive to high-bracket investors on an after-tax basis. Choice A is usually false — munis tend to have LOWER coupons precisely because of the tax break. Choice C confuses munis with Treasuries; municipals are backed by state/local issuers, not the federal government.",
  },
  // Accounts & suitability
  {
    id: "s7-acc-q1", examSlug: "series-7", topicId: "accounts", topicName: "Customer Accounts", difficulty: 2,
    stem: "A registered representative wants to place trades in a customer's account without obtaining approval for each transaction. This requires:",
    choices: ["Only a verbal okay from the customer", "Prior written authorization (discretionary authority) and added supervision", "Nothing, as long as trades are profitable"],
    answerIndex: 1,
    explanation: "Trading without per-transaction approval requires written discretionary authorization from the customer, and such accounts get heightened supervisory review. Choice A is insufficient — verbal consent doesn't establish discretionary authority. Choice C is dangerously wrong: profitability never substitutes for required authorization, and unauthorized trading is a serious violation regardless of outcome.",
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
    choices: ["Churning", "Hedging", "Rebalancing"],
    answerIndex: 0,
    explanation: "Churning is the unethical practice of trading excessively to generate commissions rather than to benefit the customer; it violates the quantitative dimension of suitability. Choice B (hedging) is a legitimate risk-reduction strategy. Choice C (rebalancing) is the legitimate practice of restoring a portfolio's target allocations. Only churning is a violation.",
  },
];

export const series7Content: ExamContent = {
  examSlug: "series-7",
  chapters: [...chapters, ...s7ExtraChapters, ...s7Wave3Chapters],
  questions: [...questions, ...s7ExtraQuestions, ...s7Wave3Questions],
};
