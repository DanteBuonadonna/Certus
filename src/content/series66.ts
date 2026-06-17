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

  {
    id: "s66-registration",
    examSlug: "series-66",
    topicId: "registration",
    topicName: "Registration of Securities & Persons",
    title: "Registration of Securities and Persons under the Uniform Act",
    readingMinutes: 16,
    summary: "How securities and the people who sell them register at the state level — the registration methods, the key exemptions, and who counts as an agent.",
    intro:
      "The Uniform Securities Act (the model for state 'blue-sky' law) governs who and what must register in a state. The Series 66 tests the three securities-registration methods, the exemptions that sidestep registration, and the definitions of agent and broker-dealer. Precision on the exemptions is where points are won and lost.",
    sections: [
      {
        heading: "Registering securities",
        blocks: [
          { kind: "p", text: "A security can be registered at the state level three ways. Registration by notification (filing) is the simplest, for established issuers with a track record. Registration by coordination ties the state registration to a simultaneous federal (SEC) registration — common for IPOs, becoming effective with the federal registration. Registration by qualification is the most thorough, used when a security registers only at the state level, requiring the most disclosure." },
          { kind: "callout", label: "Federal covered securities", body: "Exchange-listed securities and investment-company shares are 'federal covered' — states can't require full registration, only a notice filing and fee. Federal law (the National Securities Markets Improvement Act) preempts duplicative state registration." },
        ],
      },
      {
        heading: "Exempt securities and transactions",
        blocks: [
          { kind: "p", text: "Two kinds of exemptions avoid state registration. Exempt SECURITIES are exempt by their nature — U.S. government and municipal securities, securities of banks and insurance companies, and others. Exempt TRANSACTIONS are exempt by how the sale happens regardless of the security — private placements to a limited number of buyers, isolated non-issuer transactions, and sales to institutional investors (banks, insurers, investment companies). The distinction matters because an exemption can come from either the security itself or the way it's sold." },
        ],
      },
      {
        heading: "Agents and broker-dealers",
        blocks: [
          { kind: "p", text: "An agent is an INDIVIDUAL who represents a broker-dealer or issuer in effecting securities transactions; a broker-dealer is the FIRM. Both generally must register in each state where they do business (with a place of business or non-exempt clients). There are narrow exclusions: for example, an individual who represents an issuer only in certain exempt transactions, or in offering exempt securities, may not be defined as an 'agent.' Clerical and administrative employees who don't take orders aren't agents. Registration involves filing, fees, and (for individuals) qualification exams." },
        ],
      },
    ],
    keyTerms: [
      { term: "Uniform Securities Act (USA)", def: "The model 'blue-sky' law states adapt to regulate securities, persons, and fraud." },
      { term: "Registration by notification/filing", def: "The simplest state registration method, for established issuers." },
      { term: "Registration by coordination", def: "State registration tied to a simultaneous federal registration (common for IPOs)." },
      { term: "Registration by qualification", def: "The most thorough method, used for state-only registrations." },
      { term: "Federal covered security", def: "An exchange-listed or investment-company security that states can only require a notice filing for." },
      { term: "Exempt security", def: "A security exempt from registration by its nature (e.g., government, bank, insurance securities)." },
      { term: "Exempt transaction", def: "A sale exempt by how it occurs (private placement, institutional, isolated non-issuer)." },
      { term: "Private placement", def: "An exempt offering to a limited number of (often accredited) investors." },
      { term: "Agent", def: "An individual representing a broker-dealer or issuer in securities transactions; must register." },
      { term: "Broker-dealer", def: "A firm that buys and sells securities for customers or its own account; must register." },
      { term: "Institutional investor", def: "A bank, insurer, or investment company; sales to them are typically exempt transactions." },
      { term: "Notice filing", def: "A limited state filing (and fee) required for federal covered securities/advisers." },
    ],
    takeaways: [
      "Three securities-registration methods: notification (filing), coordination (with federal), qualification (state-only).",
      "Federal covered securities (listed, fund shares) need only a state notice filing, not full registration.",
      "Exemptions come from the SECURITY (government, bank, insurance) or the TRANSACTION (private placement, institutional, isolated).",
      "An agent is the individual; the broker-dealer is the firm — both generally register in each state of business.",
    ],
  },

  {
    id: "s66-retirement",
    examSlug: "series-66",
    topicId: "retirement",
    topicName: "Retirement Plans & ERISA",
    title: "Retirement Plans, IRAs, and ERISA",
    readingMinutes: 16,
    summary: "Qualified vs non-qualified plans, the IRA menu, ERISA's protections, and the tax and distribution rules an adviser must apply.",
    intro:
      "Advisers spend much of their time on retirement accounts, so the Series 66 tests them. You need the qualified-vs-non-qualified distinction, the IRA options and their tax treatment, the basics of ERISA, and the rules for contributions, rollovers, and required distributions.",
    sections: [
      {
        heading: "Qualified vs non-qualified plans",
        blocks: [
          { kind: "p", text: "A qualified plan (401(k), traditional pension, profit-sharing) meets IRS rules and earns big tax advantages: contributions are typically pre-tax (deductible), growth is tax-deferred, and the plan must be nondiscriminatory. Defined-contribution plans (like 401(k)s) put investment risk on the employee; defined-benefit pensions promise a set benefit and put the risk on the employer. A non-qualified plan (e.g., deferred compensation) doesn't meet those rules and loses the upfront deduction but offers flexibility and can favor key executives." },
          { kind: "callout", label: "ERISA in one line", body: "ERISA governs private-sector employer retirement plans — setting fiduciary duties, vesting schedules, participation and nondiscrimination rules, and reporting — to protect employees' benefits. It does NOT cover government or most church plans." },
        ],
      },
      {
        heading: "IRAs and their taxation",
        blocks: [
          { kind: "p", text: "Individual Retirement Accounts supplement workplace plans. A traditional IRA may offer a deductible contribution and tax-deferred growth, with withdrawals taxed as ordinary income. A Roth IRA is funded with after-tax dollars but grows and distributes tax-free in retirement and has no lifetime RMDs. The Roth-vs-traditional decision turns on comparing today's tax rate with the expected rate in retirement. Early withdrawals before 59½ generally incur a 10% penalty plus tax, with limited exceptions." },
          { kind: "example", example: { title: "Roth vs traditional logic", prompt: "A client expects a HIGHER tax bracket in retirement than today. Which IRA is generally better?", steps: ["Traditional gives a deduction now, taxes withdrawals later at the (higher) future rate.", "Roth pays tax now at the lower current rate, then withdraws tax-free later.", "Higher future rate → pay tax now."], answer: "The Roth — paying tax now at the lower rate beats paying later at a higher one." } },
        ],
      },
      {
        heading: "Rollovers and distributions",
        blocks: [
          { kind: "p", text: "Money moves between plans via rollovers. A DIRECT (trustee-to-trustee) rollover avoids withholding and is cleanest; an INDIRECT rollover pays the participant, who must redeposit within 60 days — and 20% is withheld for taxes on plan distributions, which the participant must make up to avoid tax. Traditional accounts require minimum distributions (RMDs) beginning at the statutory age (currently 73), forcing taxable withdrawals; Roth IRAs have no lifetime RMDs. Coordinating contributions, conversions, and withdrawals across accounts is core advisory work." },
        ],
      },
    ],
    keyTerms: [
      { term: "Qualified plan", def: "An IRS-approved plan (401(k), pension) with pre-tax contributions and tax-deferred growth." },
      { term: "Non-qualified plan", def: "A plan outside IRS qualification rules (e.g., deferred comp); no upfront deduction, more flexibility." },
      { term: "Defined-contribution plan", def: "A plan (like a 401(k)) where the employee bears investment risk." },
      { term: "Defined-benefit plan", def: "A pension promising a set benefit, with the employer bearing investment risk." },
      { term: "ERISA", def: "The law governing private employer retirement plans — fiduciary, vesting, and reporting rules." },
      { term: "Traditional IRA", def: "Possibly deductible contributions with tax-deferred growth; withdrawals taxed as ordinary income." },
      { term: "Roth IRA", def: "After-tax contributions; tax-free qualified withdrawals and no lifetime RMDs." },
      { term: "Direct rollover", def: "A trustee-to-trustee transfer that avoids withholding." },
      { term: "Indirect rollover", def: "A distribution to the participant to redeposit within 60 days; 20% withheld on plan distributions." },
      { term: "Required minimum distribution (RMD)", def: "Mandatory taxable withdrawals from traditional accounts starting at the statutory age (73)." },
      { term: "Early-withdrawal penalty", def: "A 10% penalty (plus tax) generally on withdrawals before age 59½." },
      { term: "Vesting", def: "When an employee gains nonforfeitable rights to employer contributions." },
    ],
    takeaways: [
      "Qualified plans get the deduction + deferral; DC plans put risk on employees, DB pensions on employers.",
      "ERISA protects private-sector plans (fiduciary, vesting, nondiscrimination) — not government plans.",
      "Roth (tax-free later, no RMDs) vs traditional (deduct now) turns on today's rate vs the retirement rate.",
      "Direct rollovers avoid the 20% withholding of indirect ones; RMDs begin at 73 on traditional accounts.",
    ],
  },

  {
    id: "s66-profile",
    examSlug: "series-66",
    topicId: "profile",
    topicName: "Client Profile & Suitability",
    title: "The Client Profile, Constraints, and Suitability",
    readingMinutes: 15,
    summary: "Building the investor profile — objectives and the RR-TTLLU constraints — and how it drives suitable, fiduciary recommendations.",
    intro:
      "Every recommendation must fit the client, so the Series 66 tests how to build an investor profile and translate it into suitable advice. That means clarifying objectives, mapping the constraints, gauging risk tolerance honestly, and matching recommendations to all of it — the practical core of the fiduciary duty.",
    sections: [
      {
        heading: "Objectives and risk tolerance",
        blocks: [
          { kind: "p", text: "Start with the client's investment objectives — typically some mix of growth (capital appreciation), income (current cash flow), capital preservation (safety), and sometimes speculation. These often conflict (growth vs preservation), so the planner prioritizes. Risk tolerance has two sides: the ABILITY to take risk (driven by time horizon, wealth, and income stability) and the WILLINGNESS (the client's psychological comfort). When they conflict, the LOWER of the two generally governs, and the planner educates to reconcile the gap." },
          { kind: "callout", label: "Ability vs willingness", body: "A young, wealthy, but anxious client may have high ABILITY but low WILLINGNESS to take risk. Plan to the lower of the two so the client actually stays invested — then coach toward a more appropriate level over time." },
        ],
      },
      {
        heading: "The constraints (RR-TTLLU)",
        blocks: [
          { kind: "p", text: "Objectives are bounded by constraints, commonly remembered as Risk, Return, Time horizon, Taxes, Liquidity, Legal, and Unique circumstances. Time horizon shapes how much risk is appropriate; tax status affects vehicle choice (e.g., municipal bonds for high brackets); liquidity needs limit illiquid investments; legal and regulatory factors (trusts, ERISA) constrain options; and unique circumstances (ethical preferences, concentrated holdings, health) personalize the plan. A recommendation that ignores any constraint can be unsuitable even if the math looks good." },
          { kind: "table", table: { caption: "Table 1 — The investor constraints (RR-TTLLU).", headers: ["Constraint", "What it shapes"], rows: [["Risk / Return", "The acceptable risk for the targeted return"], ["Time horizon", "How much risk and illiquidity are appropriate"], ["Taxes", "Account and security selection (e.g., munis)"], ["Liquidity", "How much must stay readily accessible"], ["Legal", "Trust, ERISA, fiduciary, or regulatory limits"], ["Unique", "Personal values, concentrated stock, health, etc."]] } },
        ],
      },
      {
        heading: "From profile to suitable advice",
        blocks: [
          { kind: "p", text: "Knowing the client (the KYC obligation) is the prerequisite to suitability: a recommendation must have a reasonable basis given the client's full profile, not just one factor. As a fiduciary, the adviser must put the client's interest first, disclose conflicts, and document the rationale. The same product can be suitable for one client and unsuitable for another — which is why the profile, not the product, is the starting point of good advice." },
        ],
      },
    ],
    keyTerms: [
      { term: "Investment objectives", def: "The client's goals — growth, income, capital preservation, or speculation." },
      { term: "Ability to take risk", def: "Capacity for risk based on time horizon, wealth, and income stability." },
      { term: "Willingness to take risk", def: "The client's psychological comfort with risk; the lower of ability/willingness governs." },
      { term: "Time horizon", def: "How long until the money is needed; a key driver of appropriate risk." },
      { term: "Liquidity constraint", def: "The need to keep assets readily accessible, limiting illiquid investments." },
      { term: "Tax constraint", def: "How a client's tax situation shapes account and security choices (e.g., munis)." },
      { term: "Legal constraint", def: "Trust, ERISA, fiduciary, or regulatory limits on what's appropriate." },
      { term: "Unique circumstances", def: "Personal factors (values, concentration, health) that personalize the plan." },
      { term: "Risk tolerance", def: "The combination of ability and willingness to bear investment risk." },
      { term: "Know Your Customer (KYC)", def: "The duty to understand the client's full profile before recommending." },
      { term: "Suitability", def: "A recommendation's fit with the client's objectives, constraints, and risk tolerance." },
      { term: "Fiduciary duty", def: "The obligation to act in the client's best interest, with loyalty, care, and disclosure." },
    ],
    takeaways: [
      "Clarify objectives (growth/income/preservation/speculation) and gauge risk tolerance — ability vs willingness, lower governs.",
      "Map the RR-TTLLU constraints: Risk/Return, Time, Taxes, Liquidity, Legal, Unique.",
      "A recommendation that ignores any constraint can be unsuitable even if the numbers look right.",
      "KYC underpins suitability; the same product fits one client and not another — start with the profile.",
    ],
  },

  {
    id: "s66-federal-acts",
    examSlug: "series-66",
    topicId: "federal-acts",
    topicName: "Federal Securities Acts",
    title: "The Federal Securities Acts and Key Definitions",
    readingMinutes: 16,
    summary: "The five federal laws that frame the exam — the 1933 and 1934 Acts, the 1940 Advisers and Company Acts — plus the all-important definition of a security.",
    intro:
      "The Uniform Securities Act operates alongside a stack of federal laws, and the Series 66 expects you to know what each one does and how state and federal authority divide. Layered on top is the foundational question the whole exam rests on: what counts as a 'security,' and who is an 'investment adviser.' Get the definitions precise and the rules follow.",
    sections: [
      {
        heading: "The five federal acts",
        blocks: [
          { kind: "p", text: "Federal securities regulation is built from a handful of laws. The Securities Act of 1933 governs NEW issues and is about disclosure (registration and prospectus). The Securities Exchange Act of 1934 governs the SECONDARY market and created the SEC, regulating exchanges, broker-dealers, and reporting. The Investment Company Act of 1940 regulates mutual funds and other pooled vehicles. The Investment Advisers Act of 1940 defines and regulates investment advisers at the federal level. The National Securities Markets Improvement Act (NSMIA) of 1996 sorted out the state/federal divide, creating 'federal covered' securities and advisers that states can't double-regulate." },
          { kind: "table", table: { caption: "Table 1 — The federal securities laws.", headers: ["Law", "Governs"], rows: [["Securities Act of 1933", "New issues — disclosure & registration"], ["Securities Exchange Act of 1934", "Secondary market; created the SEC"], ["Investment Company Act of 1940", "Mutual funds & pooled vehicles"], ["Investment Advisers Act of 1940", "Investment advisers (federal)"], ["NSMIA (1996)", "State/federal jurisdiction split"]] } },
        ],
      },
      {
        heading: "What is a security?",
        blocks: [
          { kind: "p", text: "The definition of a security is deliberately broad: stocks, bonds, notes, debentures, options, investment contracts, and more. The Supreme Court's Howey test defines an investment contract as (1) an investment of money, (2) in a common enterprise, (3) with an expectation of profits, (4) derived primarily from the efforts of others. If all four prongs are met, the instrument is a security subject to the law. Notably EXCLUDED from the definition: insurance policies and fixed annuities, retirement plan interests, and commodities/futures themselves — a frequent exam trap." },
          { kind: "callout", label: "The Howey test", body: "Investment of money + common enterprise + expectation of profit + from others' efforts = an investment contract (a security). It's how novel instruments — like certain crypto offerings — get pulled under securities law." },
        ],
      },
      {
        heading: "Who is an investment adviser?",
        blocks: [
          { kind: "p", text: "The Advisers Act defines an investment adviser by the three-part ABC test: a person who, for COMPENSATION, is in the BUSINESS of giving ADVICE about securities. All three must be present. Several professionals are EXCLUDED when their advice is incidental and they receive no special compensation for it — the LATE exclusions: Lawyers, Accountants, Teachers, and Engineers, plus broker-dealers whose advice is incidental and not separately charged. Federal-covered advisers (generally those managing $110 million or more, or advising registered funds) register with the SEC; smaller advisers register with the states." },
        ],
      },
    ],
    keyTerms: [
      { term: "Securities Act of 1933", def: "Governs new issues through disclosure and registration." },
      { term: "Securities Exchange Act of 1934", def: "Governs the secondary market and created the SEC." },
      { term: "Investment Company Act of 1940", def: "Regulates mutual funds and other pooled investment vehicles." },
      { term: "Investment Advisers Act of 1940", def: "Defines and regulates investment advisers federally." },
      { term: "NSMIA (1996)", def: "Split state/federal jurisdiction, creating federal-covered securities and advisers." },
      { term: "Security (definition)", def: "A broad category including stocks, bonds, options, and investment contracts." },
      { term: "Howey test", def: "Investment of money in a common enterprise expecting profit from others' efforts." },
      { term: "Investment contract", def: "An instrument meeting the Howey test, treated as a security." },
      { term: "Excluded instruments", def: "Insurance, fixed annuities, retirement plans, and commodities are not securities." },
      { term: "ABC test (adviser)", def: "Advice about securities + business + compensation = investment adviser." },
      { term: "LATE exclusions", def: "Lawyers, Accountants, Teachers, Engineers giving only incidental advice are excluded." },
      { term: "Federal-covered adviser", def: "An adviser registered with the SEC (generally ≥$110M AUM or advising funds)." },
    ],
    takeaways: [
      "1933 = new issues; 1934 = secondary market + SEC; 1940 Acts = funds and advisers; NSMIA splits state/federal authority.",
      "The Howey test defines an investment contract: money + common enterprise + profit from others' efforts.",
      "Insurance, fixed annuities, and commodities are NOT securities — a common trap.",
      "The ABC test (advice + business + compensation) defines an adviser; LATE professionals giving incidental advice are excluded.",
    ],
  },

  {
    id: "s66-portfolio-theory",
    examSlug: "series-66",
    topicId: "portfolio-theory",
    topicName: "Risk, Return & Portfolio Theory",
    title: "Risk, Return, and Portfolio Theory",
    readingMinutes: 17,
    summary: "The quantitative toolkit — types of risk, return measures, the time value of money, and the modern-portfolio-theory metrics (beta, alpha, Sharpe) the exam tests.",
    intro:
      "An adviser must measure what they manage. The Series 66 tests the vocabulary of risk and return, the basic time-value math, and the modern-portfolio-theory metrics that quantify performance. None of it is heavy computation — the exam rewards knowing which measure means what and when each applies.",
    sections: [
      {
        heading: "Types of risk and return",
        blocks: [
          { kind: "p", text: "Risk splits into two families. SYSTEMATIC risk (market risk) affects all securities and can't be diversified away — it includes market, interest-rate, inflation (purchasing-power), and currency risk. UNSYSTEMATIC risk is specific to a company or industry — business and financial risk — and CAN be reduced through diversification. On the return side, distinguish total return (income plus appreciation), real return (nominal minus inflation), and risk-adjusted return (return per unit of risk). After-tax return matters because two investments with the same gross return can differ sharply once taxes apply." },
          { kind: "table", table: { caption: "Table 1 — Two families of risk.", headers: ["Systematic (undiversifiable)", "Unsystematic (diversifiable)"], rows: [["Market risk", "Business risk"], ["Interest-rate risk", "Financial (credit) risk"], ["Inflation / purchasing-power risk", "Regulatory / industry risk"]] } },
        ],
      },
      {
        heading: "Time value of money",
        blocks: [
          { kind: "p", text: "Money has time value: a dollar today is worth more than a dollar later because it can be invested. Present value discounts a future amount back to today; future value compounds a present amount forward. The exam uses these for retirement-goal and education-funding problems and for understanding bond pricing. Two related ideas: net present value (the value of an investment's cash flows discounted at the required rate, minus its cost) and internal rate of return (the discount rate that makes NPV zero — effectively the investment's compound annual return)." },
          { kind: "example", example: { title: "real (inflation-adjusted) return", prompt: "A portfolio returns 7% in a year when inflation is 3%. What is the approximate real return?", steps: ["Real return ≈ nominal return − inflation.", "= 7% − 3%.", "= 4%."], answer: "About 4%. The real return measures the gain in purchasing power, which is what actually grows a client's wealth." } },
        ],
      },
      {
        heading: "Modern portfolio theory metrics",
        blocks: [
          { kind: "p", text: "Modern portfolio theory frames investing as building an efficient portfolio — the highest expected return for a given level of risk, plotted on the efficient frontier. Several metrics quantify it. BETA measures a security's systematic risk relative to the market (beta 1.0 moves with the market, above 1.0 is more volatile). ALPHA is the return above what beta (the CAPM) would predict — a manager's value added. The SHARPE RATIO measures excess return per unit of total risk (standard deviation), letting you compare risk-adjusted performance. Standard deviation measures total volatility, and correlation between assets drives the diversification benefit — combining low- or negatively-correlated assets reduces portfolio risk." },
          { kind: "callout", label: "Beta vs standard deviation", body: "Beta measures SYSTEMATIC risk relative to the market; standard deviation measures TOTAL volatility (systematic + unsystematic). The Sharpe ratio uses standard deviation; CAPM and alpha use beta." },
        ],
      },
    ],
    keyTerms: [
      { term: "Systematic risk", def: "Market-wide risk (market, interest-rate, inflation) that can't be diversified away." },
      { term: "Unsystematic risk", def: "Company- or industry-specific risk reducible by diversification." },
      { term: "Purchasing-power risk", def: "The risk that inflation erodes real returns; a systematic risk." },
      { term: "Total return", def: "Income plus capital appreciation over a period." },
      { term: "Real return", def: "Nominal return minus inflation; the gain in purchasing power." },
      { term: "Present value / future value", def: "Discounting a future amount to today / compounding a present amount forward." },
      { term: "Net present value (NPV)", def: "Discounted cash flows minus cost at the required rate of return." },
      { term: "Internal rate of return (IRR)", def: "The discount rate that sets NPV to zero; the compound return." },
      { term: "Efficient frontier", def: "Portfolios offering the highest return for each level of risk." },
      { term: "Beta", def: "A measure of systematic risk relative to the market (1.0 = market)." },
      { term: "Alpha", def: "Return above what beta (CAPM) predicts; manager value added." },
      { term: "Sharpe ratio", def: "Excess return per unit of total risk (standard deviation)." },
      { term: "Standard deviation", def: "A measure of total volatility around the average return." },
      { term: "Correlation", def: "How assets move together; low/negative correlation aids diversification." },
    ],
    takeaways: [
      "Systematic risk (market, rate, inflation) is undiversifiable; unsystematic (company/industry) risk is diversifiable.",
      "Know total vs real vs after-tax return; real return = nominal − inflation.",
      "MPT builds efficient portfolios; beta measures systematic risk, alpha measures value added.",
      "The Sharpe ratio uses standard deviation (total risk); CAPM and alpha use beta; correlation drives diversification.",
    ],
  },

  {
    id: "s66-communications",
    examSlug: "series-66",
    topicId: "communications",
    topicName: "Communications & Custody",
    title: "Client Communications, Advertising, and Custody",
    readingMinutes: 14,
    summary: "The rules governing how advisers communicate and hold client assets — advertising restrictions, performance claims, the brochure rule, and what counts as custody.",
    intro:
      "How an adviser markets itself and handles client money is tightly regulated, and the Series 66 tests these conduct rules closely. The themes are honesty in communications and safeguarding of assets. Know what advertising may and may not say, when the brochure must be delivered, and the bright lines that define custody.",
    sections: [
      {
        heading: "Advertising and communications",
        blocks: [
          { kind: "p", text: "Adviser communications must not be false or misleading. Testimonials and endorsements were historically restricted but are now permitted under the SEC's modernized marketing rule WITH required disclosures (whether the promoter is a client, whether they were paid, and conflicts). Performance advertising must be fair and balanced — showing net-of-fee results and avoiding cherry-picked time periods. Specific prohibitions endure: an adviser may not guarantee against loss, may not present past specific recommendations selectively to imply they were all profitable, and may not imply SEC or state 'approval' from the mere fact of registration." },
          { kind: "callout", label: "Registration is not approval", body: "Being registered never means a regulator endorsed the adviser or its abilities. Stating or implying that registration is an approval or endorsement is a prohibited, misleading communication." },
        ],
      },
      {
        heading: "The brochure rule",
        blocks: [
          { kind: "p", text: "The brochure rule requires an adviser to deliver a written disclosure document — Form ADV Part 2 (the 'brochure') — describing its services, fees, conflicts, disciplinary history, and business practices. Delivery must occur at or before entering the advisory contract, and clients must be offered an updated brochure annually (or given a summary of material changes). Form ADV Part 1 is the registration form filed with regulators; Part 2 is the plain-English client-facing brochure. This disclosure regime is how clients learn the conflicts and costs before they hire the adviser." },
        ],
      },
      {
        heading: "Custody of client assets",
        blocks: [
          { kind: "p", text: "Custody means holding or having access to client funds or securities, and it triggers strict safeguards because it raises the risk of misappropriation. An adviser is deemed to have custody if it physically holds assets, can withdraw from client accounts (including via certain fee deductions or a general power of attorney), or acts as trustee. Custody obligations include using a qualified custodian, giving clients account statements, and — in many cases — undergoing a surprise annual examination by an independent accountant. Importantly, simply being authorized to deduct advisory fees, under specified conditions, can constitute custody, so advisers structure billing carefully." },
        ],
      },
    ],
    keyTerms: [
      { term: "Misleading communication", def: "Any false or deceptive advertising or statement, which is prohibited." },
      { term: "Testimonials/endorsements", def: "Now permitted under the marketing rule with required disclosures." },
      { term: "Performance advertising", def: "Must be fair, balanced, net of fees, and not cherry-picked." },
      { term: "Guarantee against loss", def: "A prohibited representation in any adviser communication." },
      { term: "Registration ≠ approval", def: "Implying a regulator endorses the adviser is prohibited." },
      { term: "Brochure rule", def: "Requires delivery of Form ADV Part 2 to clients." },
      { term: "Form ADV Part 1", def: "The registration form filed with regulators." },
      { term: "Form ADV Part 2 (brochure)", def: "The plain-English disclosure of services, fees, and conflicts for clients." },
      { term: "Annual brochure offer", def: "Clients must be offered an updated brochure or a summary of changes yearly." },
      { term: "Custody", def: "Holding or having access to client funds or securities." },
      { term: "Qualified custodian", def: "A bank or broker-dealer that must hold client assets when an adviser has custody." },
      { term: "Surprise examination", def: "An independent annual audit often required when an adviser has custody." },
    ],
    takeaways: [
      "Communications can't be false or misleading; testimonials are allowed only with disclosures, and guarantees against loss are banned.",
      "Registration is never an endorsement — implying approval is prohibited.",
      "The brochure rule requires Form ADV Part 2 at or before contract, with an annual update offer.",
      "Custody (holding assets, fee deduction, POA, trustee) triggers qualified-custodian, statement, and surprise-exam safeguards.",
    ],
  },

  {
    id: "s66-taxation",
    examSlug: "series-66",
    topicId: "taxation",
    topicName: "Taxation & Tax Planning",
    title: "Taxation and Client Tax Planning",
    readingMinutes: 15,
    summary: "The tax concepts an adviser applies — capital gains vs ordinary income, cost basis, tax-advantaged accounts, and gift and estate basics.",
    intro:
      "Taxes shape after-tax returns, and an adviser who ignores them serves clients poorly. The Series 66 tests the core tax concepts: how different income is taxed, how cost basis and holding periods drive capital-gains treatment, and the tax mechanics of the accounts and transfers advisers recommend. The aim is tax-aware planning, not tax-return preparation.",
    sections: [
      {
        heading: "How investment income is taxed",
        blocks: [
          { kind: "p", text: "Different income types face different rates. Ordinary income (wages, interest, short-term gains) is taxed at the highest marginal rates. Long-term capital gains — on assets held MORE than one year — and qualified dividends are taxed at lower preferential rates, which is why holding period matters so much. A capital gain or loss equals sale price minus cost basis; net capital losses can offset gains and a limited amount of ordinary income each year, with the remainder carried forward. Municipal bond interest is generally federally tax-exempt, the standout exception." },
          { kind: "table", table: { caption: "Table 1 — Tax treatment by income type.", headers: ["Income type", "Taxed as"], rows: [["Interest, short-term gains", "Ordinary income (higher rate)"], ["Long-term capital gains", "Preferential lower rate"], ["Qualified dividends", "Preferential lower rate"], ["Municipal bond interest", "Generally federally tax-exempt"]] } },
        ],
      },
      {
        heading: "Cost basis and account taxation",
        blocks: [
          { kind: "p", text: "Cost basis is the starting point for measuring gains. For purchased securities it's the purchase price plus commissions; for reinvested dividends, the reinvested amount adds to basis (and is taxed when received, so it isn't taxed again at sale). Inherited assets receive a STEP-UP in basis to fair value at the date of death, erasing the prior unrealized gain — a powerful estate-planning feature. Account type then drives timing: traditional retirement accounts defer tax until withdrawal (taxed as ordinary income), Roth accounts give tax-free qualified withdrawals, and regular taxable accounts are taxed annually on dividends, interest, and realized gains." },
          { kind: "callout", label: "Step-up in basis", body: "Heirs inherit assets at their date-of-death fair value, not the decedent's original cost. The built-in gain that accrued during the decedent's life escapes income tax — a key reason to hold appreciated assets until death rather than gifting them during life." },
        ],
      },
      {
        heading: "Gift and estate taxes",
        blocks: [
          { kind: "p", text: "Transferring wealth has its own tax rules. Lifetime gifts are subject to gift tax above an annual exclusion amount per recipient, with a large lifetime exemption shared with the estate tax. Gifted assets carry over the donor's cost basis (no step-up), unlike inherited assets — so the gift-versus-bequest decision turns partly on whether the recipient will sell. Estate tax applies to the value of assets transferred at death above the exemption. The exam wants the principles — annual exclusion, carryover basis on gifts, step-up at death — rather than specific dollar thresholds, which change yearly." },
        ],
      },
    ],
    keyTerms: [
      { term: "Ordinary income", def: "Wages, interest, and short-term gains taxed at the highest marginal rates." },
      { term: "Long-term capital gain", def: "Gain on an asset held over one year, taxed at preferential rates." },
      { term: "Qualified dividend", def: "A dividend taxed at the lower long-term capital-gains rate." },
      { term: "Cost basis", def: "The amount used to measure gain: purchase price plus commissions." },
      { term: "Capital loss offset", def: "Losses offset gains plus a limited amount of ordinary income, carried forward." },
      { term: "Municipal interest exemption", def: "Muni bond interest is generally exempt from federal income tax." },
      { term: "Step-up in basis", def: "Inherited assets reset to date-of-death fair value, erasing prior gains." },
      { term: "Carryover basis (gifts)", def: "Gifted assets keep the donor's original cost basis (no step-up)." },
      { term: "Tax-deferred account", def: "A traditional retirement account taxed only at withdrawal." },
      { term: "Tax-free account (Roth)", def: "An account whose qualified withdrawals are not taxed." },
      { term: "Annual gift exclusion", def: "The amount that can be gifted per recipient yearly without gift tax." },
      { term: "Estate tax", def: "A tax on assets transferred at death above the exemption." },
    ],
    takeaways: [
      "Ordinary income (interest, short-term gains) is taxed higher than long-term gains and qualified dividends.",
      "Gain = sale price − cost basis; losses offset gains plus limited ordinary income, then carry forward.",
      "Inherited assets get a step-up in basis; gifted assets keep carryover basis — central to transfer planning.",
      "Traditional accounts defer tax, Roths are tax-free, taxable accounts are taxed yearly; munis are federally exempt.",
    ],
  },

  {
    id: "s66-business-practices",
    examSlug: "series-66",
    topicId: "business-practices",
    topicName: "Ethical Business Practices",
    title: "Ethical Business Practices and Prohibited Conduct",
    readingMinutes: 14,
    summary: "The conduct standards beyond fiduciary duty — prohibited practices, conflicts, agency cross and principal transactions, and the handling of client complaints and accounts.",
    intro:
      "The Series 66 devotes heavy weight to ethics and prohibited conduct because the exam exists to protect the public. Beyond the broad fiduciary duty, there's a catalog of specific don'ts the exam drills. Learn the named prohibited practices and the disclosure-and-consent rules for the transactions that create conflicts.",
    sections: [
      {
        heading: "Prohibited practices",
        blocks: [
          { kind: "p", text: "A set of named practices is prohibited for agents and advisers. CHURNING is excessive trading to generate commissions. FRONT RUNNING is trading ahead of a client's known order. Using INSIDE (material non-public) information is barred. MISREPRESENTATION and omission of material facts, GUARANTEEING performance, COMMINGLING client funds with the firm's, and making UNAUTHORIZED transactions all violate conduct rules. Selling away (private securities transactions without the firm's knowledge) and unsuitable recommendations round out the common list. Many violations share a root: putting the rep's interest ahead of the client's." },
          { kind: "table", table: { caption: "Table 1 — Named prohibited practices.", headers: ["Practice", "What it is"], rows: [["Churning", "Excessive trading for commissions"], ["Front running", "Trading ahead of a client order"], ["Commingling", "Mixing client and firm assets"], ["Selling away", "Private transactions without firm approval"]] } },
        ],
      },
      {
        heading: "Conflicted transactions: agency cross and principal",
        blocks: [
          { kind: "p", text: "Two transaction types create conflicts and carry special rules. In a PRINCIPAL transaction, the adviser trades with the client from its own account (buying from or selling to the client) — this requires disclosure AND client consent before completion of each such trade. In an AGENCY CROSS transaction, the adviser arranges a trade between two of its own clients, acting as agent for both; it requires disclosure and consent and may not recommend the trade to both sides. These rules exist because the adviser's dual role can disadvantage the client, so informed consent is the safeguard." },
          { kind: "callout", label: "Disclosure and consent", body: "Principal transactions need disclosure and consent on a TRADE-BY-TRADE basis before completion. Agency cross transactions need consent and prohibit the adviser from recommending the trade to BOTH parties. Blanket pre-consent does not satisfy the principal-transaction rule." },
        ],
      },
      {
        heading: "Complaints and account handling",
        blocks: [
          { kind: "p", text: "Firms must handle client complaints and accounts with care. Written complaints must be recorded and addressed promptly, and records retained. Discretionary authority requires prior written authorization. Sharing in a customer's account is generally prohibited unless there is joint ownership and proportional contribution, with firm approval. Borrowing from or lending to clients is barred except in narrow circumstances (e.g., the client is a lending institution or an immediate family member). The throughline is documentation and putting the client first — when in doubt, disclose, get consent, and keep records." },
        ],
      },
    ],
    keyTerms: [
      { term: "Churning", def: "Excessive trading to generate commissions; prohibited." },
      { term: "Front running", def: "Trading ahead of a client's known order; prohibited." },
      { term: "Misrepresentation", def: "False or misleading statements or omissions of material fact." },
      { term: "Commingling", def: "Mixing client funds or securities with the firm's own; prohibited." },
      { term: "Selling away", def: "Engaging in private securities transactions without the firm's approval." },
      { term: "Guaranteeing performance", def: "Promising a return or against loss; prohibited." },
      { term: "Principal transaction", def: "An adviser trading from its own account with a client; needs disclosure and consent per trade." },
      { term: "Agency cross transaction", def: "An adviser arranging a trade between two of its clients; needs consent, no dual recommendation." },
      { term: "Unauthorized transaction", def: "A trade made without the client's authority or discretion." },
      { term: "Sharing in accounts", def: "Generally prohibited unless joint and proportional, with firm approval." },
      { term: "Borrowing from clients", def: "Barred except in narrow cases (lending institution or family)." },
      { term: "Complaint handling", def: "Written complaints must be recorded, addressed promptly, and retained." },
    ],
    takeaways: [
      "Know the named prohibited practices: churning, front running, commingling, selling away, guaranteeing, unauthorized trades.",
      "Principal transactions need disclosure and consent per trade before completion.",
      "Agency cross transactions need consent and bar recommending the trade to both clients.",
      "Document complaints, require written discretion, and avoid sharing in or borrowing from client accounts.",
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

  // ---- Economic Factors & Business Information ----
  {
    id: "s66-ec-q1", examSlug: "series-66", topicId: "economics", topicName: "Economic Factors & Business Information", difficulty: 2,
    stem: "Which is a LEADING economic indicator?",
    choices: ["The unemployment rate", "Building permits and new manufacturing orders", "The average duration of unemployment"],
    answerIndex: 1,
    explanation: "Leading indicators — building permits, new orders, stock prices, consumer expectations — tend to turn before the overall economy and help anticipate change. Choice A (unemployment rate) is roughly coincident, and choice C (duration of unemployment) is a lagging indicator that confirms a trend after the fact.",
  },
  {
    id: "s66-ec-q2", examSlug: "series-66", topicId: "economics", topicName: "Economic Factors & Business Information", difficulty: 2,
    stem: "Adjusting the money supply and interest rates through open-market operations is:",
    choices: ["Fiscal policy by Congress", "Monetary policy by the Federal Reserve", "Tax policy by the IRS"],
    answerIndex: 1,
    explanation: "Monetary policy is conducted by the Federal Reserve via open-market operations, the discount rate, and reserve requirements. Choice A (fiscal policy) is Congress and the President using taxes and spending. Choice C is not a category of macroeconomic stabilization policy in this context.",
  },
  {
    id: "s66-ec-q3", examSlug: "series-66", topicId: "economics", topicName: "Economic Factors & Business Information", difficulty: 2,
    stem: "An inverted yield curve (short-term yields above long-term yields) is generally viewed as:",
    choices: ["A sign of strong expansion ahead", "A warning sign that has historically preceded recessions", "Irrelevant to investors"],
    answerIndex: 1,
    explanation: "An inverted curve has historically preceded recessions and is closely watched as a warning. Choice A is the opposite interpretation. Choice C is wrong — the curve's shape signals expectations about growth and rates, which advisers weigh in recommendations.",
  },

  // ---- Investment Vehicle Characteristics ----
  {
    id: "s66-veh-q1", examSlug: "series-66", topicId: "vehicles", topicName: "Investment Vehicle Characteristics", difficulty: 2,
    stem: "Open-end mutual fund shares are bought and redeemed at:",
    choices: ["A market price set on an exchange", "The next-computed net asset value (NAV)", "A fixed price that never changes"],
    answerIndex: 1,
    explanation: "Open-end mutual funds transact directly with the fund at the next-calculated NAV (forward pricing). Choice A describes closed-end funds and ETFs, which trade on an exchange at market prices that can differ from NAV. Choice C is false; NAV changes daily with the portfolio's value.",
  },
  {
    id: "s66-veh-q2", examSlug: "series-66", topicId: "vehicles", topicName: "Investment Vehicle Characteristics", difficulty: 2,
    stem: "Municipal bonds are especially attractive to which investor, and why?",
    choices: ["Low-bracket investors, for the high yield", "High-bracket investors, because the interest is typically federally tax-exempt", "Tax-exempt institutions, for the tax break"],
    answerIndex: 1,
    explanation: "Municipal bond interest is generally exempt from federal income tax, so the after-tax yield is most valuable to investors in high tax brackets. Choice A is backwards. Choice C is wrong — a tax-exempt entity gains nothing from tax-free interest and would prefer higher taxable yields.",
  },
  {
    id: "s66-veh-q3", examSlug: "series-66", topicId: "vehicles", topicName: "Investment Vehicle Characteristics", difficulty: 3,
    stem: "In a variable annuity, the investment risk is borne by:",
    choices: ["The insurance company", "The contract owner (returns depend on the separate-account subaccounts)", "The federal government"],
    answerIndex: 1,
    explanation: "A variable annuity invests in separate-account subaccounts, so investment performance — and risk — passes to the owner, unlike a fixed annuity where the insurer guarantees a rate. Choice A describes a fixed annuity. Choice C is incorrect; annuities are not government-guaranteed investment products.",
  },

  // ---- Registration of Securities & Persons ----
  {
    id: "s66-reg-q1", examSlug: "series-66", topicId: "registration", topicName: "Registration of Securities & Persons", difficulty: 2,
    stem: "Registration by coordination is used when a security:",
    choices: ["Registers only at the state level", "Registers with the SEC at the same time (e.g., an IPO)", "Is exempt from registration"],
    answerIndex: 1,
    explanation: "Coordination ties state registration to a simultaneous federal (SEC) registration and becomes effective with it — common for IPOs. Choice A describes qualification (state-only). Choice C describes an exemption, not a registration method.",
  },
  {
    id: "s66-reg-q2", examSlug: "series-66", topicId: "registration", topicName: "Registration of Securities & Persons", difficulty: 3,
    stem: "For a federal covered security (e.g., an NYSE-listed stock), a state may require:",
    choices: ["Full registration by qualification", "Only a notice filing and fee", "Nothing at all"],
    answerIndex: 1,
    explanation: "Federal law preempts duplicative state registration of federal covered securities, so states may require only a notice filing and fee. Choice A is preempted. Choice C is wrong; a notice filing/fee can still be required.",
  },
  {
    id: "s66-reg-q3", examSlug: "series-66", topicId: "registration", topicName: "Registration of Securities & Persons", difficulty: 2,
    stem: "Which is an example of an EXEMPT SECURITY?",
    choices: ["A private placement", "A U.S. government or municipal security", "A sale to an institutional investor"],
    answerIndex: 1,
    explanation: "Government and municipal securities are exempt by their nature (exempt securities). Choices A and C are exempt TRANSACTIONS — exemptions based on HOW the sale occurs, not the security itself.",
  },
  {
    id: "s66-reg-q4", examSlug: "series-66", topicId: "registration", topicName: "Registration of Securities & Persons", difficulty: 3,
    stem: "A sale of securities to a bank or insurance company is generally:",
    choices: ["An exempt transaction", "Always prohibited", "Subject to full registration"],
    answerIndex: 0,
    explanation: "Sales to institutional investors (banks, insurers, investment companies) are exempt transactions under the Uniform Securities Act. Choice B is false. Choice C is wrong because the exemption avoids full registration for that transaction.",
  },
  {
    id: "s66-reg-q5", examSlug: "series-66", topicId: "registration", topicName: "Registration of Securities & Persons", difficulty: 2,
    stem: "Under the Uniform Securities Act, an 'agent' is:",
    choices: ["The broker-dealer firm itself", "An individual who represents a broker-dealer or issuer in securities transactions", "Any clerical employee"],
    answerIndex: 1,
    explanation: "An agent is the individual representing a BD or issuer in effecting securities transactions; the broker-dealer is the firm. Choice A confuses the two. Choice C is wrong — purely clerical/administrative staff who don't take orders aren't agents.",
  },

  // ---- Retirement Plans & ERISA ----
  {
    id: "s66-ret-q1", examSlug: "series-66", topicId: "retirement", topicName: "Retirement Plans & ERISA", difficulty: 2,
    stem: "ERISA governs:",
    choices: ["Government employee plans", "Private-sector employer retirement plans", "Individual brokerage accounts"],
    answerIndex: 1,
    explanation: "ERISA sets fiduciary, vesting, participation, and reporting rules for private-sector employer retirement plans; it generally does NOT cover government or most church plans. Choices A and C are outside ERISA's scope.",
  },
  {
    id: "s66-ret-q2", examSlug: "series-66", topicId: "retirement", topicName: "Retirement Plans & ERISA", difficulty: 2,
    stem: "In a defined-CONTRIBUTION plan (e.g., a 401(k)), investment risk is borne by:",
    choices: ["The employer", "The employee", "The federal government"],
    answerIndex: 1,
    explanation: "In a defined-contribution plan, the account value depends on contributions and investment results, so the employee bears the investment risk. Choice A describes a defined-benefit pension, where the employer bears the risk. Choice C is incorrect.",
  },
  {
    id: "s66-ret-q3", examSlug: "series-66", topicId: "retirement", topicName: "Retirement Plans & ERISA", difficulty: 2,
    stem: "A distinguishing feature of a Roth IRA during the owner's lifetime is:",
    choices: ["An upfront tax deduction", "No required minimum distributions and tax-free qualified withdrawals", "Mandatory withdrawals at 59½"],
    answerIndex: 1,
    explanation: "A Roth IRA has no lifetime RMDs and qualified withdrawals are tax-free, since it's funded with after-tax dollars. Choice A is the traditional IRA's feature. Choice C is incorrect; 59½ is the early-withdrawal threshold, not an RMD age.",
  },
  {
    id: "s66-ret-q4", examSlug: "series-66", topicId: "retirement", topicName: "Retirement Plans & ERISA", difficulty: 3,
    stem: "Compared with a direct rollover, an INDIRECT rollover of a 401(k) distribution:",
    choices: ["Avoids all withholding", "Triggers 20% mandatory withholding and must be completed within 60 days", "Can never be done"],
    answerIndex: 1,
    explanation: "An indirect rollover pays the participant, who must redeposit within 60 days; 20% is withheld for taxes on plan distributions, which the participant must make up to avoid tax on that portion. A DIRECT (trustee-to-trustee) rollover avoids the withholding. Choice A describes the direct method; choice C is false.",
  },
  {
    id: "s66-ret-q5", examSlug: "series-66", topicId: "retirement", topicName: "Retirement Plans & ERISA", difficulty: 1,
    stem: "A key tax advantage of a qualified plan like a 401(k) is that contributions are typically:",
    choices: ["After-tax with taxable growth", "Pre-tax (deductible) with tax-deferred growth", "Subject to immediate tax"],
    answerIndex: 1,
    explanation: "Qualified-plan contributions are generally pre-tax (reducing current taxable income) and grow tax-deferred until withdrawal. Choice A describes a Roth-style or taxable account. Choice C contradicts the deferral benefit.",
  },

  // ---- Client Profile & Suitability ----
  {
    id: "s66-prof-q1", examSlug: "series-66", topicId: "profile", topicName: "Client Profile & Suitability", difficulty: 3,
    stem: "When a client's ABILITY and WILLINGNESS to take risk conflict, the planner should generally:",
    choices: ["Use the higher of the two", "Plan to the LOWER of the two, then educate", "Ignore willingness"],
    answerIndex: 1,
    explanation: "The lower of ability and willingness generally governs, so the client can actually stay invested; the planner then educates to reconcile the gap over time. Choice A risks a plan the client abandons. Choice C dismisses the client's psychology, a recipe for panic-selling.",
  },
  {
    id: "s66-prof-q2", examSlug: "series-66", topicId: "profile", topicName: "Client Profile & Suitability", difficulty: 2,
    stem: "Which is a CONSTRAINT (not an objective) in an investment policy?",
    choices: ["Capital growth", "Liquidity needs", "Speculation"],
    answerIndex: 1,
    explanation: "Liquidity is a constraint (part of RR-TTLLU) that bounds the plan, while growth and speculation are objectives. Choices A and C describe what the client is trying to achieve, not the limits on how.",
  },
  {
    id: "s66-prof-q3", examSlug: "series-66", topicId: "profile", topicName: "Client Profile & Suitability", difficulty: 2,
    stem: "A client's high tax bracket would most directly steer an adviser toward:",
    choices: ["Corporate bonds for higher yield", "Municipal bonds for tax-exempt interest", "Short-term Treasury bills"],
    answerIndex: 1,
    explanation: "The tax constraint favors municipal bonds for high-bracket clients because their interest is typically federally tax-exempt, raising after-tax yield. Choice A ignores the tax drag. Choice C addresses liquidity/safety, not the tax advantage.",
  },
  {
    id: "s66-prof-q4", examSlug: "series-66", topicId: "profile", topicName: "Client Profile & Suitability", difficulty: 2,
    stem: "The 'Know Your Customer' (KYC) obligation is important because it:",
    choices: ["Replaces the need for suitability analysis", "Provides the profile information a suitable recommendation must be based on", "Guarantees investment returns"],
    answerIndex: 1,
    explanation: "KYC gathers the client's full profile, which is the prerequisite for a suitable, reasonable-basis recommendation. Choice A is backwards — KYC enables suitability, it doesn't replace it. Choice C is never true.",
  },
  {
    id: "s66-prof-q5", examSlug: "series-66", topicId: "profile", topicName: "Client Profile & Suitability", difficulty: 2,
    stem: "Why can the same investment be suitable for one client but unsuitable for another?",
    choices: ["Suitability depends on each client's objectives, constraints, and risk tolerance", "Because product quality changes daily", "It cannot — suitability is the same for everyone"],
    answerIndex: 0,
    explanation: "Suitability is relative to each client's profile — objectives, constraints, and risk tolerance — so the same product fits one and not another. Choice B confuses suitability with market pricing. Choice C contradicts the client-specific nature of suitability.",
  },

  // Federal Securities Acts
  {
    id: "s66-fed-q1", examSlug: "series-66", topicId: "federal-acts", topicName: "Federal Securities Acts", difficulty: 1,
    stem: "Which federal law governs trading in the SECONDARY market and created the SEC?",
    choices: ["The Securities Act of 1933", "The Securities Exchange Act of 1934", "The Investment Company Act of 1940"],
    answerIndex: 1,
    explanation: "The Securities Exchange Act of 1934 regulates the secondary market — exchanges, broker-dealers, and reporting — and created the SEC. The 1933 Act (A) governs NEW issues via disclosure. The Investment Company Act of 1940 (C) regulates pooled vehicles like mutual funds, not the secondary market generally.",
  },
  {
    id: "s66-fed-q2", examSlug: "series-66", topicId: "federal-acts", topicName: "Federal Securities Acts", difficulty: 2,
    stem: "Under the Howey test, an arrangement is an investment contract (a security) when there is an investment of money in a common enterprise with an expectation of profit derived primarily from:",
    choices: ["The investor's own efforts", "The efforts of others", "Government guarantees"],
    answerIndex: 1,
    explanation: "The fourth prong of the Howey test requires that profits be expected primarily from the efforts of OTHERS — not the investor's own work (A). If the investor's own efforts drive returns, it's a business, not a passive investment contract. Government guarantees (C) are not part of the test.",
  },
  {
    id: "s66-fed-q3", examSlug: "series-66", topicId: "federal-acts", topicName: "Federal Securities Acts", difficulty: 2,
    stem: "Which of the following is NOT a security under the Uniform Securities Act?",
    choices: ["A corporate debenture", "A fixed annuity", "A stock option"],
    answerIndex: 1,
    explanation: "A fixed annuity is an insurance product with a guaranteed rate borne by the insurer, and it is excluded from the definition of a security. A corporate debenture (A) and a stock option (C) are both securities. Note the contrast: a VARIABLE annuity, which passes investment risk to the owner, IS a security — a classic exam trap.",
  },
  {
    id: "s66-fed-q4", examSlug: "series-66", topicId: "federal-acts", topicName: "Federal Securities Acts", difficulty: 2,
    stem: "Under the ABC test, all three of which elements must be present for someone to be an investment adviser?",
    choices: ["Advice about securities, in the business, for compensation", "Advice, custody, and registration", "Brokerage, clearing, and custody"],
    answerIndex: 0,
    explanation: "The ABC test defines an investment adviser as one who gives Advice about securities, is in the Business of doing so, and receives Compensation. All three must be present. Custody and registration (B) are consequences, not the definition. Choice C describes broker-dealer functions, not the adviser test.",
  },
  {
    id: "s66-fed-q5", examSlug: "series-66", topicId: "federal-acts", topicName: "Federal Securities Acts", difficulty: 1,
    stem: "A lawyer who gives incidental securities advice while drafting a will, with no separate compensation for the advice, is:",
    choices: ["Required to register as an investment adviser", "Excluded from the adviser definition (a LATE exclusion)", "Automatically a federal-covered adviser"],
    answerIndex: 1,
    explanation: "Lawyers, Accountants, Teachers, and Engineers (the LATE exclusions) are excluded from the investment-adviser definition when their advice is incidental to their profession and not separately compensated. So no registration is required (A). Federal-covered status (C) applies to advisers who must register with the SEC, not to an excluded professional.",
  },

  // Risk, Return & Portfolio Theory
  {
    id: "s66-pt-q1", examSlug: "series-66", topicId: "portfolio-theory", topicName: "Risk, Return & Portfolio Theory", difficulty: 2,
    stem: "Which type of risk can be reduced through diversification?",
    choices: ["Systematic (market) risk", "Unsystematic (company-specific) risk", "Purchasing-power risk"],
    answerIndex: 1,
    explanation: "Unsystematic risk is specific to a company or industry, so spreading investments across many holdings reduces it. Systematic risk (A) and purchasing-power/inflation risk (C) are market-wide and cannot be diversified away. This split is the foundation of modern portfolio theory.",
  },
  {
    id: "s66-pt-q2", examSlug: "series-66", topicId: "portfolio-theory", topicName: "Risk, Return & Portfolio Theory", difficulty: 1,
    stem: "A portfolio earns a nominal return of 8% in a year when inflation is 3%. The approximate real return is:",
    choices: ["11%", "5%", "3%"],
    answerIndex: 1,
    explanation: "Real return ≈ nominal return − inflation = 8% − 3% = 5%. The real return reflects the gain in purchasing power, which is what actually grows a client's wealth. Choice A adds rather than subtracts inflation; choice C simply restates the inflation rate.",
  },
  {
    id: "s66-pt-q3", examSlug: "series-66", topicId: "portfolio-theory", topicName: "Risk, Return & Portfolio Theory", difficulty: 2,
    stem: "A stock with a beta of 1.5 is expected to be:",
    choices: ["Less volatile than the market", "50% more volatile than the market", "Uncorrelated with the market"],
    answerIndex: 1,
    explanation: "Beta measures systematic risk relative to the market, where 1.0 moves with the market. A beta of 1.5 implies the stock tends to move 50% more than the market — rising and falling more sharply. A beta below 1.0 (A) would be less volatile; a beta near 0 (C) would be roughly uncorrelated.",
  },
  {
    id: "s66-pt-q4", examSlug: "series-66", topicId: "portfolio-theory", topicName: "Risk, Return & Portfolio Theory", difficulty: 3,
    stem: "The Sharpe ratio measures:",
    choices: ["Return relative to the market index", "Excess return per unit of total risk (standard deviation)", "A manager's return above CAPM"],
    answerIndex: 1,
    explanation: "The Sharpe ratio divides a portfolio's excess return (over the risk-free rate) by its standard deviation, measuring risk-adjusted return per unit of TOTAL risk. Return relative to the index (A) is closer to alpha or tracking. Return above CAPM (C) is specifically alpha, which uses beta rather than standard deviation.",
  },
  {
    id: "s66-pt-q5", examSlug: "series-66", topicId: "portfolio-theory", topicName: "Risk, Return & Portfolio Theory", difficulty: 2,
    stem: "Combining two assets that have low or negative correlation primarily:",
    choices: ["Increases the portfolio's total risk", "Reduces the portfolio's risk through diversification", "Eliminates systematic risk"],
    answerIndex: 1,
    explanation: "Low or negative correlation means the assets don't move together, so combining them smooths returns and reduces overall portfolio risk — the core diversification benefit. It does not increase risk (A). It cannot eliminate systematic (market) risk (C), which affects all assets regardless of correlation.",
  },

  // Communications & Custody
  {
    id: "s66-com-q1", examSlug: "series-66", topicId: "communications", topicName: "Communications & Custody", difficulty: 1,
    stem: "An adviser's advertisement states that its SEC registration means the SEC has approved its services. This is:",
    choices: ["Acceptable, since the firm is registered", "A prohibited, misleading statement", "Required disclosure"],
    answerIndex: 1,
    explanation: "Registration never implies regulatory approval or endorsement; stating or implying so is a prohibited, misleading communication. Being registered (A) is a legal status, not an approval of quality. Far from being required (C), such a claim is exactly what the rules forbid.",
  },
  {
    id: "s66-com-q2", examSlug: "series-66", topicId: "communications", topicName: "Communications & Custody", difficulty: 2,
    stem: "Under the brochure rule, Form ADV Part 2 must be delivered to a client:",
    choices: ["Only upon request", "At or before entering the advisory contract", "Within 90 days after the contract"],
    answerIndex: 1,
    explanation: "The brochure rule requires delivery of the Form ADV Part 2 brochure at or before entering into the advisory agreement, so the client can evaluate services, fees, and conflicts beforehand. Delivery only on request (A) or after the fact (C) defeats the purpose; clients must also be offered an updated brochure annually.",
  },
  {
    id: "s66-com-q3", examSlug: "series-66", topicId: "communications", topicName: "Communications & Custody", difficulty: 2,
    stem: "An adviser is generally deemed to have custody of client assets when it:",
    choices: ["Provides written recommendations", "Has authority to withdraw funds from a client's account", "Charges a flat annual fee billed by invoice"],
    answerIndex: 1,
    explanation: "Custody arises when an adviser holds client assets or has access to them — including the authority to withdraw funds from client accounts. Merely giving recommendations (A) is not custody. Billing a fee by invoice that the client pays separately (C) generally avoids custody, whereas deducting fees directly from the account can create it.",
  },
  {
    id: "s66-com-q4", examSlug: "series-66", topicId: "communications", topicName: "Communications & Custody", difficulty: 2,
    stem: "Performance advertising by an adviser must be:",
    choices: ["Shown gross of fees to look attractive", "Fair, balanced, and not cherry-picked", "Limited to the firm's best single year"],
    answerIndex: 1,
    explanation: "Performance claims must be fair and balanced, typically net of fees, and must not cherry-pick favorable periods or recommendations. Showing gross-of-fee results to inflate appeal (A) or presenting only the best year (C) would be misleading. The principle is honest, representative disclosure.",
  },
  {
    id: "s66-com-q5", examSlug: "series-66", topicId: "communications", topicName: "Communications & Custody", difficulty: 1,
    stem: "Which document is the plain-English disclosure brochure delivered to advisory clients?",
    choices: ["Form ADV Part 1", "Form ADV Part 2", "Form U4"],
    answerIndex: 1,
    explanation: "Form ADV Part 2 is the client-facing brochure describing services, fees, conflicts, and disciplinary history. Part 1 (A) is the registration form filed with regulators. Form U4 (C) is the registration form for individual agents and adviser representatives, not a client brochure.",
  },

  // Taxation & Tax Planning
  {
    id: "s66-tax-q1", examSlug: "series-66", topicId: "taxation", topicName: "Taxation & Tax Planning", difficulty: 1,
    stem: "A gain on a security held for more than one year is taxed as:",
    choices: ["Ordinary income", "A long-term capital gain at preferential rates", "Tax-exempt income"],
    answerIndex: 1,
    explanation: "Holding an asset more than a year qualifies the gain for long-term capital-gains treatment at preferential rates below ordinary-income rates. A holding of one year or less (A) would be a short-term gain taxed as ordinary income. Only specific items like muni interest are tax-exempt (C), not stock gains.",
  },
  {
    id: "s66-tax-q2", examSlug: "series-66", topicId: "taxation", topicName: "Taxation & Tax Planning", difficulty: 2,
    stem: "When a beneficiary inherits appreciated stock, the cost basis is generally:",
    choices: ["The decedent's original purchase price", "Stepped up to fair value at the date of death", "Zero"],
    answerIndex: 1,
    explanation: "Inherited assets receive a step-up in basis to their fair market value at the date of death, erasing the gain that accrued during the decedent's life. Carrying over the decedent's original cost (A) describes GIFTED assets, not inherited ones. A zero basis (C) is incorrect and would overstate the taxable gain.",
  },
  {
    id: "s66-tax-q3", examSlug: "series-66", topicId: "taxation", topicName: "Taxation & Tax Planning", difficulty: 2,
    stem: "Interest from a municipal bond is generally:",
    choices: ["Taxed as ordinary income", "Exempt from federal income tax", "Subject to a flat 15% rate"],
    answerIndex: 1,
    explanation: "Municipal bond interest is generally exempt from federal income tax (and often state tax for in-state holders), which is why munis appeal to high-bracket investors. It is not taxed as ordinary income (A), and there is no special flat 15% rate on it (C) — the 15% figure relates to certain long-term capital gains.",
  },
  {
    id: "s66-tax-q4", examSlug: "series-66", topicId: "taxation", topicName: "Taxation & Tax Planning", difficulty: 2,
    stem: "A client realizes $10,000 of capital losses and $4,000 of capital gains this year. How are the losses generally used?",
    choices: ["All $10,000 deducts against ordinary income this year", "Offset the $4,000 gain, then up to $3,000 against ordinary income, with the rest carried forward", "Lost entirely if not matched by gains"],
    answerIndex: 1,
    explanation: "Capital losses first offset capital gains ($4,000 here), then up to $3,000 of the remaining net loss can offset ordinary income, with any excess carried forward to future years. The full $10,000 cannot all hit ordinary income at once (A), and unused losses are not forfeited (C) — they carry forward.",
  },
  {
    id: "s66-tax-q5", examSlug: "series-66", topicId: "taxation", topicName: "Taxation & Tax Planning", difficulty: 1,
    stem: "Compared with inherited assets, assets received as a lifetime gift generally take:",
    choices: ["A stepped-up basis", "The donor's carryover cost basis", "A zero basis"],
    answerIndex: 1,
    explanation: "Gifted assets carry over the donor's original cost basis — there is no step-up during life. Only assets passing AT DEATH receive a step-up to fair value (A). A zero basis (C) is incorrect. This basis difference is central to deciding whether to gift now or bequeath later.",
  },

  // Ethical Business Practices
  {
    id: "s66-bp-q1", examSlug: "series-66", topicId: "business-practices", topicName: "Ethical Business Practices", difficulty: 1,
    stem: "An agent executes private securities transactions outside their firm without the firm's knowledge or approval. This prohibited practice is called:",
    choices: ["Churning", "Selling away", "Front running"],
    answerIndex: 1,
    explanation: "Selling away is engaging in private securities transactions without the employing firm's knowledge and approval, depriving the firm of supervision. Churning (A) is excessive trading for commissions; front running (C) is trading ahead of a client's order. All three are prohibited, but the unapproved outside transaction defines selling away.",
  },
  {
    id: "s66-bp-q2", examSlug: "series-66", topicId: "business-practices", topicName: "Ethical Business Practices", difficulty: 2,
    stem: "Before completing a principal transaction with a client, an adviser must:",
    choices: ["Do nothing special; it is routine", "Disclose the capacity and obtain the client's consent for that trade", "Only notify the firm's principal"],
    answerIndex: 1,
    explanation: "In a principal transaction the adviser trades from its own account with the client, a conflict that requires disclosure of the capacity AND client consent before completing each such trade. Treating it as routine (A) ignores the conflict. Notifying only the firm's principal (C) doesn't satisfy the client-consent requirement.",
  },
  {
    id: "s66-bp-q3", examSlug: "series-66", topicId: "business-practices", topicName: "Ethical Business Practices", difficulty: 2,
    stem: "Mixing client funds or securities with the firm's own assets is the prohibited practice of:",
    choices: ["Commingling", "Hypothecation", "Arbitrage"],
    answerIndex: 0,
    explanation: "Commingling client assets with the firm's own is prohibited because it endangers client property and obscures ownership. Hypothecation (B) is the legitimate pledging of a client's margin securities as collateral. Arbitrage (C) is a trading strategy exploiting price differences, not a misuse of client assets.",
  },
  {
    id: "s66-bp-q4", examSlug: "series-66", topicId: "business-practices", topicName: "Ethical Business Practices", difficulty: 2,
    stem: "In an agency cross transaction, the adviser arranges a trade between two clients. A key restriction is that the adviser may not:",
    choices: ["Charge any fee", "Recommend the transaction to BOTH parties", "Disclose its role"],
    answerIndex: 1,
    explanation: "In an agency cross the adviser acts for both clients, so to limit the conflict it may not have recommended the transaction to both sides, and it must obtain consent and disclose its role. It may charge a fee under the rules (A is too absolute), and disclosure (C) is required, not prohibited.",
  },
  {
    id: "s66-bp-q5", examSlug: "series-66", topicId: "business-practices", topicName: "Ethical Business Practices", difficulty: 1,
    stem: "An adviser receives a written complaint from a client. The adviser should:",
    choices: ["Ignore it unless the client sues", "Record it, address it promptly, and retain the records", "Forward it only to the client's family"],
    answerIndex: 1,
    explanation: "Written complaints must be documented, handled promptly, and retained per recordkeeping rules — proper complaint handling protects clients and the firm. Ignoring a complaint (A) violates conduct standards, and forwarding it to the client's family (C) breaches confidentiality and does nothing to resolve the issue.",
  },
];

export const series66Content: ExamContent = {
  examSlug: "series-66",
  chapters,
  questions,
};
