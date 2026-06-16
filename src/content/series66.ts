// ============================================================
// Certus — Series 66 content (wave 1, original)
// The Uniform Combined State Law exam. Heavily weighted toward
// regulation, fiduciary duty, and ethical practices.
// Topics: Regulation of Investment Advisers, Fiduciary Duty &
// Ethics, Client Recommendations & Strategies.
// ============================================================

import { Chapter, Question, ExamContent } from "./types";

const chapters: Chapter[] = [
  // 1. REGULATION OF INVESTMENT ADVISERS
  {
    id: "s66-ia",
    examSlug: "series-66",
    topicId: "ia-regulation",
    topicName: "Regulation of Investment Advisers",
    title: "Regulation of Investment Advisers",
    readingMinutes: 18,
    summary: "Who counts as an investment adviser, how IAs differ from broker-dealers, and where they register.",
    intro:
      "The Series 66 pairs with the Series 7 to fully license an advisory professional, and its largest theme is the law governing investment advisers. The foundational skill is determining who must register as an investment adviser, how that role differs from a broker-dealer, and whether registration happens at the federal (SEC) or state level. Get the definitions precise — the exam lives in the details.",
    sections: [
      {
        heading: "Who is an investment adviser?",
        paragraphs: [
          "Under the Investment Advisers Act of 1940, an investment adviser is anyone who, for compensation, is in the business of giving advice about securities. The classic memory aid is the 'ABC' test: Advice about securities, in the Business of doing so, for Compensation. If all three are present, the person is an investment adviser and must register unless an exemption applies. Compensation need not be a direct fee — any economic benefit counts.",
          "Certain professionals are excluded when their advice is incidental to their main work and they receive no special compensation for it — the so-called LATE exclusion (Lawyers, Accountants, Teachers, Engineers), plus broker-dealers whose advice is incidental and not separately charged. The moment a broker-dealer charges a separate fee for advice (for example, running fee-based managed accounts), that exclusion can disappear.",
        ],
        callout: {
          label: "The 'ABC' test",
          body: "You're an investment adviser if you give Advice about securities, are in the Business of doing so, and receive Compensation. All three must be present.",
        },
      },
      {
        heading: "Investment adviser vs broker-dealer",
        paragraphs: [
          "The distinction matters because it changes the standard of care. An investment adviser is a fiduciary, owing clients a duty of loyalty and care and charging for ongoing advice (typically a percentage of assets). A broker-dealer historically executes transactions and earns commissions, with advice that is incidental to the trade. The compensation model is the giveaway: ongoing advisory fees point to an IA; transaction-based commissions point to a BD.",
          "Representatives mirror this split. An investment adviser representative (IAR) works for an IA; an agent (registered representative) works for a broker-dealer. Knowing which hat a person wears determines which rules and which standard of conduct apply.",
        ],
      },
      {
        heading: "Federal vs state registration",
        paragraphs: [
          "Investment advisers register either with the SEC or with state securities administrators, generally based on assets under management. Large advisers (typically those managing $100 million or more) register federally with the SEC; smaller advisers register with the states in which they operate. This split avoids dual regulation. Advisers register by filing Form ADV, which has parts disclosing the firm's business, fees, conflicts, and disciplinary history; the client-facing 'brochure' (Part 2) must be delivered to clients so they understand what they're getting and what conflicts exist.",
          "State administrators (under the Uniform Securities Act) retain anti-fraud authority over all advisers operating in their state, even federally registered ones. So an SEC-registered adviser still answers to a state administrator if it commits fraud against that state's residents.",
        ],
      },
      {
        heading: "Adviser vs broker-dealer, and where you register",
        blocks: [
          { kind: "table", table: { caption: "Table 1 — The compensation model is the tell: ongoing fees = adviser; transaction commissions = broker-dealer.", headers: ["Feature", "Investment adviser", "Broker-dealer"], rows: [["Standard of care", "Fiduciary (best interest)", "Suitability / best-interest"], ["Compensation", "Ongoing fees (% of assets)", "Transaction commissions"], ["Regulated by", "SEC or state administrator", "FINRA + SEC"], ["Its representative", "IAR", "Agent / registered rep"]] } },
          { kind: "callout", label: "Federal vs state registration", body: "Larger advisers (generally $100M+ in AUM) register with the SEC; smaller advisers register with the states. State administrators keep anti-fraud authority over ALL advisers in their state, even SEC-registered ones." },
        ],
      },
    ],
    keyTerms: [
      { term: "Investment adviser", def: "One who, for compensation, is in the business of advising on securities (the ABC test)." },
      { term: "IAR", def: "Investment adviser representative — an individual who works for an investment adviser." },
      { term: "Form ADV", def: "The registration form for investment advisers; Part 2 is the client-facing brochure." },
      { term: "Fiduciary", def: "A standard requiring the adviser to act in the client's best interest, with loyalty and care." },
      { term: "LATE exclusion", def: "Lawyers, Accountants, Teachers, Engineers are excluded when advice is incidental and unpaid-for." },
    ],
    takeaways: [
      "Apply the ABC test: Advice on securities + Business + Compensation = investment adviser.",
      "IAs are fiduciaries charging ongoing fees; broker-dealers earn transaction commissions.",
      "Large advisers (~$100M+) register with the SEC; smaller ones register with the states.",
      "Form ADV Part 2 (the brochure) must be delivered to clients; states keep anti-fraud authority over all.",
    ],
  },

  // 2. FIDUCIARY DUTY & ETHICAL PRACTICES
  {
    id: "s66-ethics",
    examSlug: "series-66",
    topicId: "fiduciary",
    topicName: "Fiduciary Duty & Ethics",
    title: "Fiduciary Duty & Unethical Business Practices",
    readingMinutes: 18,
    summary: "The fiduciary standard, disclosure of conflicts, custody rules, and the practices that violate them.",
    intro:
      "Roughly half the Series 66 concerns laws, regulations, and — above all — ethical business practices. The investment adviser's defining obligation is the fiduciary duty: to act in the client's best interest at all times. This chapter covers what that duty demands in practice, and the specific behaviors that regulators treat as unethical or fraudulent.",
    sections: [
      {
        heading: "The fiduciary standard",
        paragraphs: [
          "A fiduciary must place the client's interests ahead of its own, exercising both a duty of loyalty and a duty of care. In practice this means full and fair disclosure of all material conflicts of interest, seeking best execution for client trades, charging only reasonable fees, and giving advice suited to the client. The fiduciary standard is higher than the suitability standard that historically applied to broker-dealers: it's not enough that a recommendation is merely appropriate; it must be in the client's best interest, with conflicts disclosed.",
        ],
      },
      {
        heading: "Disclosure and conflicts of interest",
        paragraphs: [
          "Because conflicts are often unavoidable, the law's primary remedy is disclosure plus client consent. If an adviser will act as a principal (trading from its own account with a client) or in an agency cross (representing both sides of a trade), it must disclose this and obtain the client's consent — often in writing before completion of the transaction. Compensation arrangements, soft-dollar practices, and any financial incentive that could bias advice must be disclosed in the brochure. The governing principle: a conflict that is fully disclosed and consented to can be permissible, while the same conflict hidden is a violation.",
        ],
        callout: {
          label: "Disclose, don't hide",
          body: "Conflicts of interest aren't automatically prohibited — but they must be fully disclosed and, for principal/agency-cross trades, consented to by the client. Concealment is the violation.",
        },
      },
      {
        heading: "Custody and unethical practices",
        paragraphs: [
          "An adviser has custody when it holds client funds or securities, or can withdraw them — and custody triggers strict safeguards: segregation of client assets, regular account statements, and often a surprise annual audit. Notably, an adviser is deemed to have custody if it can deduct fees directly from client accounts beyond certain limits, or if it holds client passwords that allow withdrawals.",
          "Many specific practices are prohibited as unethical: borrowing from or lending to clients (except in narrow cases), commingling client funds with the adviser's own, exercising discretion without written authority, making unsuitable recommendations, misrepresenting qualifications or the nature of services, and guaranteeing performance. The exam routinely describes a scenario and asks whether the adviser acted ethically — the answer turns on whether the client's interest was protected and whether material facts were disclosed.",
        ],
      },
      {
        heading: "What triggers custody, and the rule on conflicts",
        blocks: [
          { kind: "table", table: { caption: "Table 1 — Custody is broader than 'holding cash' — these all trigger it, and its safeguards.", headers: ["This creates custody", "Why"], rows: [["Holding client funds/securities", "Direct possession of assets"], ["Deducting fees beyond set limits", "Ability to withdraw from the account"], ["Holding client passwords", "Ability to move money"], ["(Recommending a third-party custodian)", "Does NOT create custody"]] } },
          { kind: "callout", label: "Disclose, don't hide", body: "Conflicts aren't automatically prohibited — they must be fully disclosed, and for principal or agency-cross trades, consented to (often in writing). The violation is concealment. A disclosed, consented conflict can be permissible." },
        ],
      },
    ],
    keyTerms: [
      { term: "Fiduciary duty", def: "The obligation to act in the client's best interest with loyalty and care — higher than suitability." },
      { term: "Custody", def: "Holding or being able to withdraw client funds/securities; triggers strict safeguards." },
      { term: "Agency cross transaction", def: "Acting for both buyer and seller in a trade; requires disclosure and client consent." },
      { term: "Commingling", def: "Mixing client funds with the adviser's own — a prohibited practice." },
      { term: "Best execution", def: "The duty to seek the most favorable terms reasonably available for client transactions." },
    ],
    takeaways: [
      "The fiduciary standard demands the client's best interest, not merely a suitable recommendation.",
      "Conflicts are managed by full disclosure and consent — concealment is the violation.",
      "Custody triggers safeguards; deducting fees or holding withdrawal passwords can create custody.",
      "Commingling, unauthorized discretion, and guaranteeing performance are prohibited.",
    ],
  },

  // 3. CLIENT RECOMMENDATIONS & STRATEGIES
  {
    id: "s66-strategies",
    examSlug: "series-66",
    topicId: "strategies",
    topicName: "Client Recommendations & Strategies",
    title: "Client Recommendations & Portfolio Strategies",
    readingMinutes: 18,
    summary: "Building suitable portfolios: risk, diversification, allocation, and management styles.",
    intro:
      "Beyond the law, the Series 66 tests whether an adviser can translate a client's situation into a sound portfolio. This means understanding the client's objectives and constraints, the trade-off between risk and return, and the strategies — diversification, asset allocation, and active versus passive management — used to build portfolios that fit. The fiduciary obligation makes getting this right not just good practice but a legal duty.",
    sections: [
      {
        heading: "Risk, return, and the client profile",
        paragraphs: [
          "Every recommendation starts with the client: their financial situation, objectives (return needs and risk tolerance), and constraints (time horizon, liquidity, taxes, and unique circumstances). Risk and return are linked — higher expected returns demand accepting higher risk — so the adviser's job is to find the portfolio that meets the client's return needs without exceeding their capacity and willingness to bear risk. A young investor with a long horizon can tolerate more volatility than a retiree drawing income.",
        ],
      },
      {
        heading: "Diversification and asset allocation",
        paragraphs: [
          "Diversification — spreading investments across assets that don't move together — reduces risk without necessarily reducing expected return, because losses in one area are offset by gains in another. The broader decision is asset allocation: how to divide a portfolio among stocks, bonds, cash, and other assets. Research consistently shows that asset allocation, not individual security selection, drives the large majority of a portfolio's long-run risk and return. Strategic allocation sets long-term targets aligned with the client's profile; tactical allocation makes shorter-term shifts to exploit opportunities.",
        ],
        callout: {
          label: "Allocation drives results",
          body: "The mix of asset classes (stocks/bonds/cash) explains most of a portfolio's long-run risk and return — far more than which specific securities are picked.",
        },
      },
      {
        heading: "Active vs passive and management styles",
        paragraphs: [
          "Advisers choose between active management, which tries to outperform a benchmark through selection and timing (higher fees, the hope of excess return), and passive management, which simply tracks an index at low cost. The efficient-market view argues that beating the market consistently after fees is difficult, favoring low-cost passive approaches for many clients. Style choices — value versus growth, large-cap versus small-cap — further shape a portfolio's behavior.",
          "Two implementation techniques appear often. Dollar-cost averaging invests a fixed amount at regular intervals, buying more shares when prices are low and fewer when high, which smooths the average purchase price and removes the temptation to time the market. Rebalancing periodically restores the portfolio to its target allocation, mechanically selling what has risen and buying what has lagged — enforcing discipline and keeping risk aligned with the client's plan.",
        ],
      },
      {
        heading: "Dollar-cost averaging and rebalancing, in numbers",
        blocks: [
          { kind: "example", example: { title: "why dollar-cost averaging works", prompt: "An investor puts $300 into a fund each month. In month 1 the price is $10; in month 2 it falls to $6. How many shares, and what's the average cost?", steps: ["Month 1: $300 ÷ $10 = 30 shares.", "Month 2: $300 ÷ $6 = 50 shares.", "Total: $600 for 80 shares → average cost = 600 ÷ 80 = $7.50 per share."], answer: "$7.50 average cost — below the $8 simple average of the two prices, because the fixed dollars bought MORE shares when the price was low. That's the mechanical edge of dollar-cost averaging." } },
          { kind: "callout", label: "Rebalancing = sell high, buy low", body: "A 60/40 portfolio that drifts to 75/25 after a rally is rebalanced by SELLING the appreciated stocks and BUYING bonds to return to 60/40 — mechanically selling high and buying low, and keeping risk aligned with the plan." },
        ],
      },
    ],
    keyTerms: [
      { term: "Asset allocation", def: "Dividing a portfolio among asset classes; the main driver of long-run risk and return." },
      { term: "Diversification", def: "Spreading investments across uncorrelated assets to reduce risk without cutting expected return." },
      { term: "Dollar-cost averaging", def: "Investing a fixed amount at regular intervals, smoothing the average purchase price." },
      { term: "Rebalancing", def: "Restoring a portfolio to target weights, selling winners and buying laggards to control risk." },
      { term: "Passive management", def: "Tracking an index at low cost rather than trying to beat the market." },
    ],
    takeaways: [
      "Match the portfolio to the client's objectives (return, risk tolerance) and constraints.",
      "Asset allocation drives most long-run results — more than security selection.",
      "Dollar-cost averaging smooths purchase prices; rebalancing enforces disciplined risk control.",
      "Passive, low-cost strategies are hard to beat consistently after fees.",
    ],
  },

  {
    id: "s66-economics",
    examSlug: "series-66",
    topicId: "economics",
    topicName: "Economic Factors & Business Information",
    title: "Economic Factors & Business Information",
    readingMinutes: 14,
    summary: "The business cycle, monetary and fiscal policy, interest rates, and the indicators an adviser uses to read the economy.",
    intro:
      "The Series 66 expects an adviser to understand the economic backdrop in which they recommend investments. That means the business cycle, how the government and central bank steer the economy, the behavior of interest rates and the yield curve, and the indicators that signal where things are heading. You won't forecast the economy on the exam, but you must reason about how these forces move different investments.",
    sections: [
      {
        heading: "The business cycle and indicators",
        blocks: [
          { kind: "p", text: "Economies move through a repeating cycle: expansion (growing output and employment), a peak, contraction or recession (a sustained decline — commonly two consecutive quarters of falling GDP), and a trough before the next expansion. Gross domestic product is the headline measure of output, and inflation (a sustained rise in the general price level, tracked by the CPI) is the variable policymakers watch most closely." },
          { kind: "p", text: "Advisers classify indicators by timing. Leading indicators (stock prices, building permits, new manufacturing orders, consumer expectations) tend to turn BEFORE the economy and help anticipate change. Coincident indicators (GDP, nonfarm employment, industrial production) move WITH the economy. Lagging indicators (the average duration of unemployment, the CPI, the prime rate) confirm a trend after it has occurred." },
        ],
      },
      {
        heading: "Monetary and fiscal policy",
        blocks: [
          { kind: "p", text: "Two levers steer the macroeconomy. Monetary policy is run by the Federal Reserve, which adjusts the money supply and interest rates through open-market operations (buying securities to ease, selling to tighten), the discount rate, and reserve requirements. Easier money lowers rates to stimulate borrowing and spending; tighter money raises rates to cool inflation. Fiscal policy is run by Congress and the President through taxation and government spending: tax cuts or higher spending stimulate demand, while tax hikes or spending cuts restrain it." },
          { kind: "callout", label: "Rates, the curve, and bond prices", body: "Bond prices move inversely to interest rates. The yield curve usually slopes upward (longer maturities yield more); an inverted curve (short rates above long) has historically preceded recessions and is a closely watched warning sign." },
        ],
      },
      {
        heading: "Analyzing a company",
        blocks: [
          { kind: "p", text: "Advisers also read business information. The time value of money underlies every projection — a dollar today is worth more than a dollar later, so future cash flows are discounted to the present. Basic financial-statement analysis rounds it out: liquidity ratios (current ratio = current assets ÷ current liabilities) gauge short-term solvency, while leverage and profitability measures describe how a company is financed and how well it converts sales into earnings. The point isn't to become an analyst but to connect a security's fundamentals and the economic environment to a suitable recommendation." },
        ],
      },
    ],
    keyTerms: [
      { term: "Business cycle", def: "The recurring sequence of expansion, peak, contraction (recession), and trough." },
      { term: "Leading indicators", def: "Data (stock prices, building permits, new orders) that tend to turn before the overall economy." },
      { term: "Monetary policy", def: "Federal Reserve actions on the money supply and interest rates via open-market operations, the discount rate, and reserve requirements." },
      { term: "Fiscal policy", def: "Government use of taxation and spending to influence aggregate demand." },
      { term: "Inverted yield curve", def: "Short-term yields above long-term yields; historically a recession warning." },
    ],
    takeaways: [
      "Know the cycle (expansion → peak → contraction → trough) and classify indicators as leading, coincident, or lagging.",
      "Monetary policy = the Fed moving money/rates; fiscal policy = Congress moving taxes/spending.",
      "Bond prices move inversely to rates; an inverted yield curve is a classic recession signal.",
      "Time value of money and basic ratios connect fundamentals to a suitable recommendation.",
    ],
  },

  {
    id: "s66-vehicles",
    examSlug: "series-66",
    topicId: "vehicles",
    topicName: "Investment Vehicle Characteristics",
    title: "Investment Vehicle Characteristics",
    readingMinutes: 15,
    summary: "Equities, fixed income, pooled funds, derivatives, and insurance-based products — what each is, and the suitability angle on each.",
    intro:
      "An adviser has to know the tools of the trade. The Series 66 surveys the major investment vehicles — equity, debt, pooled funds, derivatives, and insurance products — and tests whether you understand each one's risk, return, liquidity, and tax features well enough to match it to a client.",
    sections: [
      {
        heading: "Equity and fixed income",
        blocks: [
          { kind: "p", text: "Common stock represents ownership: voting rights, dividends (not guaranteed), and the greatest growth potential but the last claim in liquidation. Preferred stock pays a fixed dividend and ranks ahead of common, behaving more like a fixed-income hybrid. Debt securities are loans: corporate bonds (higher yield, credit risk), U.S. Treasuries (backed by the government, the credit-risk benchmark), municipal bonds (interest typically exempt from federal tax — attractive to high-bracket investors), and agency securities. The core relationships never change: bond prices move inversely to rates, and longer maturity and lower credit quality both raise yield and risk." },
        ],
      },
      {
        heading: "Pooled investments",
        blocks: [
          { kind: "p", text: "Most retail portfolios are built from pooled vehicles. Open-end mutual funds continuously issue and redeem shares at net asset value (NAV), priced once daily (forward pricing); they come in share classes (A: front-end load; B: back-end/deferred; C: level load) with different fee timing. Closed-end funds issue a fixed number of shares that then trade on an exchange at a market price that can be above or below NAV. Exchange-traded funds (ETFs) trade intraday like stocks, usually track an index, and are low-cost and tax-efficient. Unit investment trusts hold a fixed, unmanaged portfolio for a set term." },
          { kind: "callout", label: "NAV vs market price", body: "Open-end mutual fund shares transact at NAV (next computed). Closed-end fund and ETF shares trade at a market price set by supply and demand, which can differ from NAV — a premium or a discount." },
        ],
      },
      {
        heading: "Derivatives and insurance-based products",
        blocks: [
          { kind: "p", text: "Options give the right (not the obligation) to buy (call) or sell (put) an underlying at a set strike; they're used to hedge or to speculate, and the seller (writer) takes on the obligation in exchange for a premium. Insurance-based products blend protection and investment: a fixed annuity guarantees a rate and is an insurance-company obligation, while a variable annuity invests in subaccounts (the separate account) so returns — and risk — pass to the owner, with tax-deferred growth but often high fees and surrender charges. The exam's lens is always suitability: a product's complexity, cost, liquidity, and tax treatment must fit the client's objectives and sophistication." },
        ],
      },
    ],
    keyTerms: [
      { term: "Common vs preferred stock", def: "Common: voting, variable dividend, last in liquidation, most upside. Preferred: fixed dividend, priority over common." },
      { term: "Municipal bond", def: "A government-issued bond whose interest is typically exempt from federal income tax, favoring high-bracket investors." },
      { term: "Open-end vs closed-end fund", def: "Open-end funds transact at NAV; closed-end funds trade on an exchange at a market price that can differ from NAV." },
      { term: "Mutual fund share classes", def: "A (front-end load), B (deferred/back-end), C (level load) — different fee timing for the same portfolio." },
      { term: "Variable annuity", def: "An insurance product investing in separate-account subaccounts; tax-deferred growth with investment risk on the owner." },
    ],
    takeaways: [
      "Equity = ownership/growth (common last in liquidation); preferred is a fixed-dividend hybrid; munis are tax-favored for high brackets.",
      "Open-end funds trade at NAV; closed-end funds and ETFs trade at market prices that can be a premium or discount.",
      "Know the share classes (A/B/C) and that ETFs are low-cost, intraday, and tax-efficient.",
      "Options transfer obligation to the writer for a premium; variable annuities pass investment risk to the owner — judge everything by suitability.",
    ],
  },
];

const questions: Question[] = [
  // IA Regulation
  {
    id: "s66-ia-q1", examSlug: "series-66", topicId: "ia-regulation", topicName: "Regulation of Investment Advisers", difficulty: 2,
    stem: "Under the 'ABC' test, a person is defined as an investment adviser if they provide advice about securities, are in the business of doing so, AND:",
    choices: ["Hold a finance degree", "Receive compensation", "Are registered with FINRA"],
    answerIndex: 1,
    explanation: "The ABC test requires Advice about securities, being in the Business of doing so, and receiving Compensation — all three. Compensation (any economic benefit, not just a direct fee) is the third leg. Choice A is irrelevant; no degree is required to meet the definition. Choice C confuses the matter — FINRA registration relates to broker-dealers/agents, not the statutory definition of an investment adviser.",
  },
  {
    id: "s66-ia-q2", examSlug: "series-66", topicId: "ia-regulation", topicName: "Regulation of Investment Advisers", difficulty: 3,
    stem: "An advisory firm managing $250 million in assets generally registers with:",
    choices: ["The state securities administrator only", "The SEC (federal registration)", "FINRA"],
    answerIndex: 1,
    explanation: "Larger advisers — generally those managing $100 million or more — register federally with the SEC, which avoids duplicative state-by-state registration. At $250 million, this firm registers with the SEC. Choice A (state) applies to smaller advisers below the federal threshold. Choice C is wrong — FINRA regulates broker-dealers and their agents, not investment advisers, who fall under the SEC/state framework.",
  },
  {
    id: "s66-ia-q3", examSlug: "series-66", topicId: "ia-regulation", topicName: "Regulation of Investment Advisers", difficulty: 2,
    stem: "The primary distinction in compensation between an investment adviser and a broker-dealer is that an IA typically earns:",
    choices: ["Commissions on each transaction", "Ongoing fees for advice (e.g., a percentage of assets)", "Nothing — advice is always free"],
    answerIndex: 1,
    explanation: "Investment advisers are compensated for ongoing advice, typically as a percentage of assets under management, which aligns with their fiduciary, advice-centered role. Choice A (transaction commissions) describes the broker-dealer model, where advice is incidental to the trade. Choice C is simply false — advice is the very service the IA charges for.",
  },
  // Fiduciary & Ethics
  {
    id: "s66-eth-q1", examSlug: "series-66", topicId: "fiduciary", topicName: "Fiduciary Duty & Ethics", difficulty: 2,
    stem: "An investment adviser has a conflict of interest because it earns extra compensation for recommending a certain fund. To act properly, the adviser must:",
    choices: ["Avoid all conflicts, which are strictly prohibited", "Fully disclose the conflict to the client", "Say nothing, as long as the fund performs well"],
    answerIndex: 1,
    explanation: "The fiduciary framework manages conflicts through full and fair disclosure (and, for certain transactions, client consent) — a disclosed and consented conflict can be permissible. Choice A overstates the rule; not every conflict is prohibited, but every material one must be disclosed. Choice C is the violation: concealing a conflict breaches the duty of loyalty regardless of how the investment performs.",
  },
  {
    id: "s66-eth-q2", examSlug: "series-66", topicId: "fiduciary", topicName: "Fiduciary Duty & Ethics", difficulty: 3,
    stem: "An investment adviser deposits a client's funds into the adviser's own business checking account. This is:",
    choices: ["Acceptable if repaid promptly", "Commingling, a prohibited practice", "Required for efficient management"],
    answerIndex: 1,
    explanation: "Mixing client funds with the adviser's own money is commingling, a prohibited practice that endangers client assets and violates custody safeguards. Choice A is wrong — intent to repay doesn't cure the violation; client funds must be segregated. Choice C is false; proper management requires keeping client assets separate, not combined with firm funds.",
  },
  {
    id: "s66-eth-q3", examSlug: "series-66", topicId: "fiduciary", topicName: "Fiduciary Duty & Ethics", difficulty: 2,
    stem: "An investment adviser is deemed to have CUSTODY of client assets when it:",
    choices: ["Gives advice about which securities to buy", "Can withdraw funds from the client's account (e.g., direct fee deduction beyond limits)", "Recommends a third-party custodian"],
    answerIndex: 1,
    explanation: "Custody exists when an adviser holds client assets or has the ability to withdraw them — including deducting fees directly beyond permitted limits or holding passwords enabling withdrawals — which triggers strict safeguards. Choice A (giving advice) does not by itself create custody. Choice C is the opposite of custody: recommending an independent third-party custodian is a way to AVOID having custody.",
  },
  // Strategies
  {
    id: "s66-str-q1", examSlug: "series-66", topicId: "strategies", topicName: "Client Recommendations & Strategies", difficulty: 2,
    stem: "Research consistently finds that the largest driver of a portfolio's long-run risk and return is:",
    choices: ["Picking the best individual stocks", "The asset allocation among asset classes", "Market-timing entries and exits"],
    answerIndex: 1,
    explanation: "Asset allocation — the division among stocks, bonds, cash, and other classes — explains the large majority of a portfolio's long-run risk and return, far more than security selection or timing. Choice A (stock picking) and Choice C (market timing) contribute far less and are notoriously difficult to do consistently, which is why allocation, aligned to the client's profile, is the adviser's central decision.",
  },
  {
    id: "s66-str-q2", examSlug: "series-66", topicId: "strategies", topicName: "Client Recommendations & Strategies", difficulty: 2,
    stem: "An investor contributes a fixed $500 every month into a fund regardless of price. This strategy is:",
    choices: ["Dollar-cost averaging", "Rebalancing", "Tactical allocation"],
    answerIndex: 0,
    explanation: "Investing a fixed dollar amount at regular intervals is dollar-cost averaging; it buys more shares when prices are low and fewer when high, smoothing the average cost and removing the temptation to time the market. Choice B (rebalancing) restores a portfolio to target weights, a different action. Choice C (tactical allocation) involves shifting the asset mix to exploit short-term opportunities, not making fixed periodic contributions.",
  },
  {
    id: "s66-str-q3", examSlug: "series-66", topicId: "strategies", topicName: "Client Recommendations & Strategies", difficulty: 3,
    stem: "A portfolio's target is 60% stocks / 40% bonds, but a strong rally pushes it to 75% / 25%. Rebalancing would have the adviser:",
    choices: ["Buy more stocks to chase the rally", "Sell some stocks and buy bonds to restore 60/40", "Do nothing, since stocks are winning"],
    answerIndex: 1,
    explanation: "Rebalancing restores the portfolio to its target weights, which means selling some of the appreciated asset (stocks) and buying the lagging one (bonds) to return to 60/40 — mechanically 'selling high and buying low' and keeping risk aligned with the plan. Choice A increases risk and chases performance, the opposite of rebalancing. Choice C lets the portfolio drift to a riskier 75/25 that no longer matches the client's profile.",
  },

  // ---- Regulation of Investment Advisers ----
  {
    id: "s66-ia-q4", examSlug: "series-66", topicId: "ia-regulation", topicName: "Regulation of Investment Advisers", difficulty: 2,
    stem: "An investment adviser managing $150 million in client assets generally registers with:",
    choices: ["The state securities administrator only", "The SEC (federal registration)", "Neither — it is exempt"],
    answerIndex: 1,
    explanation: "Advisers with $110 million or more in assets under management are required to register with the SEC; those under $100 million generally register with the state(s), with a buffer zone between. At $150M, the adviser is a federal covered adviser and registers with the SEC, then makes notice filings with states. Choice A is for smaller (state-level) advisers; choice C is wrong because the adviser clearly meets the registration trigger.",
  },
  {
    id: "s66-ia-q5", examSlug: "series-66", topicId: "ia-regulation", topicName: "Regulation of Investment Advisers", difficulty: 3,
    stem: "Under the brochure rule, if an adviser does NOT deliver its brochure (Form ADV Part 2) at least 48 hours before entering the advisory contract, it must deliver it at the time of contract and give the client:",
    choices: ["No additional rights", "A five-day right to withdraw without penalty", "A full refund of all future fees"],
    answerIndex: 1,
    explanation: "The brochure must be delivered at least 48 hours before signing (no cancellation right needed), OR at the time of signing with a five-business-day right to terminate the contract without penalty. Choice A ignores the required cancellation window. Choice C overstates it — the remedy is a penalty-free five-day withdrawal, not a blanket refund of future fees.",
  },
  {
    id: "s66-ia-q6", examSlug: "series-66", topicId: "ia-regulation", topicName: "Regulation of Investment Advisers", difficulty: 3,
    stem: "Which professional is generally EXCLUDED from the definition of 'investment adviser' when advice is incidental and no special compensation is charged?",
    choices: ["A lawyer or accountant", "A financial planner charging a fee for investment advice", "A money manager with discretion over client accounts"],
    answerIndex: 0,
    explanation: "Lawyers, Accountants, Teachers, and Engineers (the 'LATE' professionals) are excluded when their investment advice is solely incidental to their profession and they receive no special compensation for it. Choices B and C describe people in the business of giving investment advice for compensation, which is exactly what makes someone an investment adviser who must register.",
  },
  {
    id: "s66-ia-q7", examSlug: "series-66", topicId: "ia-regulation", topicName: "Regulation of Investment Advisers", difficulty: 3,
    stem: "Under the de minimis exemption, a state-level adviser with no place of business in a state need not register there if, during the prior 12 months, it had no more than:",
    choices: ["5 non-institutional clients in that state", "25 clients in that state", "50 clients nationwide"],
    answerIndex: 0,
    explanation: "The de minimis standard lets an adviser with no place of business in a state avoid registration there if it has had five or fewer retail (non-institutional) clients in that state in the prior 12 months. Choice B uses the wrong number, and choice C confuses a nationwide count with the state-by-state de minimis test.",
  },
  {
    id: "s66-ia-q8", examSlug: "series-66", topicId: "ia-regulation", topicName: "Regulation of Investment Advisers", difficulty: 2,
    stem: "An adviser is deemed to have 'custody' of client assets when it:",
    choices: ["Recommends a third-party custodian", "Holds client funds or securities, or can withdraw assets from the client's account", "Has discretionary authority to choose securities only"],
    answerIndex: 1,
    explanation: "Custody means holding client funds/securities or having authority to obtain possession of them (for example, the ability to deduct fees beyond set limits, or direct access to withdraw). Custody triggers safeguards like the surprise exam and qualified custodian rules. Choice A merely recommending a custodian is not custody; choice C, discretion to pick securities, is investment authority but not, by itself, custody.",
  },

  // ---- Fiduciary Duty & Ethics ----
  {
    id: "s66-eth-q4", examSlug: "series-66", topicId: "fiduciary", topicName: "Fiduciary Duty & Ethics", difficulty: 2,
    stem: "Which practice is prohibited for an investment adviser?",
    choices: ["Disclosing a conflict of interest in writing", "Guaranteeing a client against any investment loss", "Charging a flat annual fee"],
    answerIndex: 1,
    explanation: "Guaranteeing a client against loss (or promising a specific gain) is prohibited because investment performance cannot be assured and such promises are inherently misleading. Choice A is exactly what fiduciaries are required to do — disclose conflicts. Choice C is a perfectly acceptable fee arrangement.",
  },
  {
    id: "s66-eth-q5", examSlug: "series-66", topicId: "fiduciary", topicName: "Fiduciary Duty & Ethics", difficulty: 3,
    stem: "An investment adviser representative wants to borrow money from a client. This is:",
    choices: ["Always permitted between consenting adults", "Generally prohibited unless the client is a lending institution or affiliate", "Permitted if repaid within 30 days"],
    answerIndex: 1,
    explanation: "Borrowing from (or lending to) clients is generally prohibited because of the conflict and risk to the client, with narrow exceptions such as when the client is a broker-dealer, an affiliate, or a financial institution in the business of lending. Choice A ignores the rule entirely; choice C invents a repayment window that doesn't cure the prohibition.",
  },
  {
    id: "s66-eth-q6", examSlug: "series-66", topicId: "fiduciary", topicName: "Fiduciary Duty & Ethics", difficulty: 3,
    stem: "Before completing an agency cross transaction (acting for both buyer and seller), an adviser must:",
    choices: ["Do nothing special — it's routine", "Obtain the client's consent and make required disclosures", "Guarantee the client the best price in the market"],
    answerIndex: 1,
    explanation: "Agency cross and principal transactions carry obvious conflicts, so the adviser must disclose its role and obtain client consent (for principal trades, before completion of the transaction). Choice A ignores the conflict; choice C describes a 'best price' guarantee that is neither the rule nor permissible to promise.",
  },
  {
    id: "s66-eth-q7", examSlug: "series-66", topicId: "fiduciary", topicName: "Fiduciary Duty & Ethics", difficulty: 2,
    stem: "An adviser receives research and execution services from a broker in exchange for directing client trades there ('soft dollars'). This is acceptable when:",
    choices: ["It is never acceptable under any circumstances", "The services fall within the safe harbor and benefit clients, and the arrangement is disclosed", "The adviser keeps the benefit secret to avoid confusion"],
    answerIndex: 1,
    explanation: "Soft-dollar arrangements are permitted within a recognized safe harbor when the products/services (such as research) assist the adviser's decision-making and benefit clients, and the arrangement is disclosed. Choice A is too absolute. Choice C is the violation — non-disclosure of the conflict is precisely what's prohibited.",
  },
  {
    id: "s66-eth-q8", examSlug: "series-66", topicId: "fiduciary", topicName: "Fiduciary Duty & Ethics", difficulty: 2,
    stem: "Under the Prudent Investor standard, an investment's appropriateness is judged:",
    choices: ["Security by security, in isolation", "In the context of the overall portfolio and the client's objectives", "Solely by its historical return"],
    answerIndex: 1,
    explanation: "The Prudent Investor rule evaluates each investment as part of the total portfolio and the client's objectives and risk tolerance, recognizing that a risky asset can be prudent within a diversified whole. Choice A reflects the older, stricter 'prudent man' security-by-security view. Choice C ignores risk, diversification, and suitability.",
  },

  // ---- Client Recommendations & Strategies ----
  {
    id: "s66-str-q4", examSlug: "series-66", topicId: "strategies", topicName: "Client Recommendations & Strategies", difficulty: 3,
    stem: "The Sharpe ratio measures:",
    choices: ["Total return only", "Return earned per unit of total risk (above the risk-free rate)", "A fund's sensitivity to the market"],
    answerIndex: 1,
    explanation: "The Sharpe ratio = (portfolio return − risk-free rate) ÷ standard deviation, measuring risk-adjusted return per unit of total risk; higher is better. Choice A ignores risk entirely. Choice C describes beta, which measures systematic (market) risk, not the Sharpe ratio's total-risk-adjusted return.",
  },
  {
    id: "s66-str-q5", examSlug: "series-66", topicId: "strategies", topicName: "Client Recommendations & Strategies", difficulty: 2,
    stem: "A stock with a beta of 1.5 would be expected to:",
    choices: ["Move less than the market", "Move 1.5× as much as the market, up or down", "Be uncorrelated with the market"],
    answerIndex: 1,
    explanation: "Beta measures systematic risk relative to the market (beta 1.0 = moves with the market). A beta of 1.5 implies the stock tends to move 1.5 times as much as the market in either direction — more volatile and higher systematic risk. Choice A describes a beta below 1.0; choice C would imply a beta near zero.",
  },
  {
    id: "s66-str-q6", examSlug: "series-66", topicId: "strategies", topicName: "Client Recommendations & Strategies", difficulty: 2,
    stem: "Investing a fixed dollar amount at regular intervals, regardless of price, is:",
    choices: ["Dollar-cost averaging, which lowers the average cost per share over time", "Market timing", "Tactical asset allocation"],
    answerIndex: 0,
    explanation: "Dollar-cost averaging invests a fixed dollar amount on a schedule, automatically buying more shares when prices are low and fewer when high, which lowers the average cost per share versus buying a fixed number of shares. Choice B (market timing) tries to predict tops and bottoms — the opposite approach. Choice C is shifting allocations to exploit short-term opportunities, unrelated to fixed-interval investing.",
  },
  {
    id: "s66-str-q7", examSlug: "series-66", topicId: "strategies", topicName: "Client Recommendations & Strategies", difficulty: 3,
    stem: "An investor sells a stock at a loss and repurchases the same stock 20 days later. The loss is:",
    choices: ["Fully deductible now", "Disallowed under the wash-sale rule", "Converted into a long-term loss"],
    answerIndex: 1,
    explanation: "The wash-sale rule disallows a loss when a substantially identical security is repurchased within 30 days before or after the sale; 20 days falls inside that window, so the loss is deferred and added to the new shares' basis. Choice A ignores the rule. Choice C is nonsensical — a wash sale defers the loss, it doesn't change its character.",
  },
  {
    id: "s66-str-q8", examSlug: "series-66", topicId: "strategies", topicName: "Client Recommendations & Strategies", difficulty: 2,
    stem: "Setting long-term target weights for asset classes and largely holding them is:",
    choices: ["Tactical asset allocation", "Strategic asset allocation", "Market timing"],
    answerIndex: 1,
    explanation: "Strategic asset allocation sets long-term target weights based on the client's objectives and risk tolerance and maintains them through rebalancing. Choice A (tactical) makes short-term shifts away from targets to exploit perceived opportunities. Choice C (market timing) tries to move in and out of the market based on forecasts — a more aggressive, higher-risk approach.",
  },
  {
    id: "s66-str-q9", examSlug: "series-66", topicId: "strategies", topicName: "Client Recommendations & Strategies", difficulty: 3,
    stem: "Combining assets with low correlation to one another primarily:",
    choices: ["Increases expected return without changing risk", "Reduces portfolio risk for a given level of expected return", "Eliminates systematic (market) risk"],
    answerIndex: 1,
    explanation: "Diversifying across assets that don't move together lowers overall portfolio volatility for a given expected return — the core benefit of diversification. Choice A misstates it; diversification primarily reduces risk rather than boosting return. Choice C is wrong because diversification reduces unsystematic risk but cannot remove systematic (market-wide) risk.",
  },
];

export const series66Content: ExamContent = {
  examSlug: "series-66",
  chapters,
  questions,
};
