// ============================================================
// Certus — CFA Level I content (original, written for Certus)
// Wave 1 topics: Ethics, Quantitative Methods,
// Financial Statement Analysis, Fixed Income.
// Remaining CFA topics + other exams are added in later waves.
// ============================================================

import { Chapter, Question, ExamContent } from "./types";

const chapters: Chapter[] = [
  // --------------------------------------------------------------------
  // 1. ETHICS
  // --------------------------------------------------------------------
  {
    id: "cfa-ethics",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethical & Professional Standards",
    title: "Ethics & the CFA Standards of Professional Conduct",
    readingMinutes: 18,
    summary: "The Code of Ethics, the seven Standards, and how to actually answer ethics questions.",
    intro:
      "Ethics is roughly 15% of the Level I exam and, unlike most topics, it carries that weight at every level — the CFA Institute treats ethical conduct as the foundation of the entire designation. It is also the section that decides borderline candidates: when two people sit near the passing line, the one who scored well on ethics is given the benefit of the doubt. The good news is that ethics rewards understanding a framework rather than memorizing formulas. Master the Code, the seven Standards, and the disciplined way of reasoning through a scenario, and this becomes one of your most reliable sources of points.",
    sections: [
      {
        heading: "Why ethics is structured the way it is",
        paragraphs: [
          "Capital markets only function when investors trust the professionals who operate them. That trust is fragile: a single analyst trading on inside information or a manager quietly steering clients into high-fee products can damage confidence in an entire firm or market. The CFA Institute's Code of Ethics and Standards of Professional Conduct exist to make that trust enforceable. Membership is conditional on following them, and violations can cost someone the charter.",
          "The Code of Ethics is the short, aspirational statement — act with integrity, place client interests above your own, use reasonable care. The Standards of Professional Conduct are where the real exam content lives: seven numbered standards, each with sub-parts, that translate those principles into specific, testable rules.",
        ],
      },
      {
        heading: "The seven Standards at a glance",
        paragraphs: [
          "You should be able to recall all seven by number and recognize which one a scenario is testing. Almost every ethics question is really asking: 'which Standard is in play, and was it violated?'",
        ],
        bullets: [
          "I. Professionalism — knowledge of the law, independence and objectivity, no misrepresentation, no misconduct.",
          "II. Integrity of Capital Markets — no acting on material nonpublic information; no market manipulation.",
          "III. Duties to Clients — loyalty/prudence/care, fair dealing among clients, suitability, performance presentation, confidentiality.",
          "IV. Duties to Employers — loyalty, proper handling of additional compensation, responsibilities of supervisors.",
          "V. Investment Analysis, Recommendations, and Actions — diligence and reasonable basis, clear communication, record retention.",
          "VI. Conflicts of Interest — disclose conflicts, prioritize transactions for clients/employer over yourself, no improper referral fees.",
          "VII. Responsibilities as a CFA Member/Candidate — don't compromise the integrity of the CFA program; don't misrepresent the charter.",
        ],
      },
      {
        heading: "The standards candidates trip on most",
        paragraphs: [
          "Material nonpublic information (Standard II-A) is the single most tested idea. Information is 'material' if a reasonable investor would want it before trading, and 'nonpublic' until it has been disseminated to the marketplace. The mosaic theory is the crucial nuance: an analyst may combine public information with non-material nonpublic information to reach a conclusion — even a market-moving one — without violating the Standard. Piecing together public scraps is skill; trading on a leaked earnings number is a violation.",
          "Independence and objectivity (Standard I-B) shows up as gifts, lavish trips paid by companies an analyst covers, or pressure from investment-banking colleagues. Modest, customary business gifts are usually fine; anything that could reasonably be expected to compromise judgment is not. The safest answer almost always involves disclosure and declining benefits tied to a particular conclusion.",
          "Loyalty to employer (Standard IV-A) governs the classic 'leaving to start a competing firm' scenario. Before resignation you may make preparations, but you may not take client lists, records, or solicit clients, and you may not misappropriate the employer's property. Memory of routine client contacts is permitted; copying the CRM is not.",
        ],
        callout: {
          label: "Mosaic theory",
          body: "Combining public + non-material nonpublic information to form a conclusion is permitted, even if the conclusion itself would move the market. Trading on material nonpublic information is not.",
        },
      },
      {
        heading: "A repeatable method for ethics questions",
        paragraphs: [
          "Ethics questions are won by process, not gut feel. Read the scenario and first identify which Standard is implicated — that alone eliminates distractor answers about unrelated rules. Then ask whether the specific conduct meets or breaches that Standard, paying attention to qualifiers like 'reasonable,' 'material,' and 'disclosed.' Finally, choose the least-bad action: the CFA answer is rarely the most aggressive; it favors disclosure, declining, and documentation.",
          "Watch for answer choices that are true statements but don't address the violation, and for choices that over-correct (e.g., claiming something is a violation when disclosure made it permissible). The exam loves the gap between 'technically legal' and 'compliant with the Standards' — when local law is less strict than the Code, the Code governs; when local law is stricter, follow local law.",
        ],
      },
      {
        heading: "GIPS, briefly",
        paragraphs: [
          "The Global Investment Performance Standards (GIPS) are a voluntary set of standards for how firms calculate and present investment performance so that results are fair, comparable, and not cherry-picked. At Level I you need the concepts, not the computation: GIPS compliance is claimed by the firm (not a single composite or product), it requires showing a minimum span of history that grows over time, and it forbids presenting only your best accounts. The point is comparability — a prospective client should be able to trust that the track record is complete and consistently calculated.",
        ],
      },
    ],
    keyTerms: [
      { term: "Fiduciary duty", def: "A legal and ethical obligation to act in the best interest of the client, ahead of your own or your employer's interests." },
      { term: "Material nonpublic information", def: "Information not yet released to the market that a reasonable investor would want before trading; acting on it is prohibited." },
      { term: "Mosaic theory", def: "Reaching a conclusion by combining public and non-material nonpublic information — permitted under the Standards." },
      { term: "Fair dealing", def: "Treating all clients fairly when disseminating recommendations or taking investment action; not favoring some clients over others." },
      { term: "GIPS", def: "Global Investment Performance Standards — voluntary standards for fair, complete, and comparable performance presentation, claimed at the firm level." },
    ],
    takeaways: [
      "Know the seven Standards by number and learn to spot which one a scenario tests.",
      "Material nonpublic information and the mosaic theory are the highest-yield ideas — master the distinction.",
      "When the Code and local law differ, follow the stricter of the two.",
      "The correct action usually involves disclosure, declining, or documentation — not the most aggressive option.",
    ],
  },

  // --------------------------------------------------------------------
  // 2. QUANTITATIVE METHODS
  // --------------------------------------------------------------------
  {
    id: "cfa-quant",
    examSlug: "cfa",
    topicId: "quant",
    topicName: "Quantitative Methods",
    title: "Quantitative Methods: Time Value, Returns, and Inference",
    readingMinutes: 22,
    summary: "Time value of money, return measures, distributions, and the logic of hypothesis testing.",
    intro:
      "Quantitative Methods supplies the mathematical machinery for the rest of the curriculum. Discounting cash flows underlies bond and equity valuation; return measures appear in performance and portfolio management; probability and hypothesis testing reappear whenever the curriculum asks whether a result is real or just noise. You do not need to be a mathematician, but you do need to be fast and precise with a financial calculator and clear about which tool fits which question.",
    sections: [
      {
        heading: "Time value of money",
        paragraphs: [
          "A dollar today is worth more than a dollar tomorrow because today's dollar can be invested to earn a return. Everything in this section flows from that single idea. Present value (PV) discounts future cash flows back to today; future value (FV) compounds today's money forward. The discount rate captures both the time you wait and the risk you bear.",
          "Be deliberate about compounding frequency. A 6% annual rate compounded monthly is not the same as 6% compounded annually — more frequent compounding produces a higher effective annual rate (EAR). As compounding approaches continuous, EAR approaches e^(r) − 1. On the calculator, keep N (number of periods), I/Y (rate per period), PV, PMT, and FV consistent in their period length; mixing annual and monthly inputs is the most common avoidable error.",
        ],
        callout: {
          label: "Effective annual rate",
          body: "EAR = (1 + periodic rate)^(m) − 1, where m is the number of compounding periods per year. With continuous compounding, EAR = e^(stated rate) − 1.",
        },
      },
      {
        heading: "Measuring returns: not all averages are equal",
        paragraphs: [
          "The holding period return is the simplest measure: the total return over a single period, including income and price change. When you string multiple periods together, the choice of average matters. The arithmetic mean return overstates compound growth; the geometric mean return is the true compound rate an investor actually earned over time, and it is always less than or equal to the arithmetic mean (equal only when every period's return is identical).",
          "Two performance measures are easy to confuse. The time-weighted rate of return removes the effect of cash flows into and out of the portfolio and is the standard for evaluating a manager, because the manager doesn't control when clients add or withdraw money. The money-weighted rate of return is an internal rate of return that does reflect the size and timing of those flows — useful for measuring an investor's actual experience. If a client adds money right before a strong period, the money-weighted return will look better than the time-weighted return.",
        ],
      },
      {
        heading: "Describing data and distributions",
        paragraphs: [
          "Measures of central tendency (mean, median, mode) and dispersion (variance, standard deviation) summarize a data set. Standard deviation is the workhorse risk measure in the curriculum. Skewness describes asymmetry: a right- (positive-) skewed distribution has a long right tail and a mean pulled above the median, while left-skew is the mirror image. Kurtosis describes tail fatness; leptokurtic distributions (excess kurtosis > 0) have fatter tails than the normal distribution, which matters enormously for risk because extreme losses are more likely than a normal model implies.",
          "The normal distribution is fully described by its mean and variance and underlies much of finance. A practical fact worth memorizing: roughly 68% of observations fall within one standard deviation of the mean, 95% within about two (1.96 precisely), and 99% within about 2.58. The standard normal distribution (mean 0, standard deviation 1) lets you convert any normal value to a z-score and look up probabilities.",
        ],
      },
      {
        heading: "Sampling and the logic of hypothesis testing",
        paragraphs: [
          "We rarely observe a whole population, so we estimate its parameters from a sample. The central limit theorem is what makes this work: for a large enough sample, the distribution of the sample mean is approximately normal regardless of the underlying population's shape, with a standard error that shrinks as the sample grows. That is why bigger samples give more precise estimates.",
          "Hypothesis testing is a disciplined way to ask whether an observed result is real. You state a null hypothesis (typically 'no effect' or 'no difference') and an alternative, choose a significance level (often 5%), compute a test statistic, and compare it to a critical value. If the statistic is more extreme than the critical value, you reject the null. Two errors are possible: a Type I error rejects a true null (a false positive, whose probability equals the significance level), and a Type II error fails to reject a false null (a false negative). Lowering the chance of one error generally raises the other, which is why choosing the significance level is a real decision, not a formality.",
        ],
        callout: {
          label: "Type I vs Type II",
          body: "Type I error = rejecting a true null (false positive); its probability is the significance level α. Type II error = failing to reject a false null (false negative). The power of a test = 1 − P(Type II).",
        },
      },
      {
        heading: "A first look at regression",
        paragraphs: [
          "Simple linear regression fits a line relating a dependent variable to one independent variable, estimating an intercept and a slope that minimize the sum of squared errors. The slope tells you the expected change in the dependent variable for a one-unit change in the independent variable. R-squared measures the fraction of the dependent variable's variation explained by the model. At Level I, focus on interpreting coefficients and R-squared and on understanding the assumptions (linearity, constant variance of errors, independence) rather than deriving the estimates by hand.",
        ],
      },
    ],
    keyTerms: [
      { term: "Effective annual rate (EAR)", def: "The annual rate that accounts for compounding within the year; rises with compounding frequency." },
      { term: "Geometric mean return", def: "The true compound rate of return over multiple periods; ≤ the arithmetic mean." },
      { term: "Time-weighted return", def: "Return that strips out the effect of cash flow timing; the standard for judging a manager." },
      { term: "Money-weighted return", def: "An IRR that reflects the size and timing of cash flows; reflects the investor's actual experience." },
      { term: "Central limit theorem", def: "The sample mean's distribution approaches normal as sample size grows, regardless of population shape." },
      { term: "Type I error", def: "Rejecting a true null hypothesis (a false positive); its probability equals the chosen significance level." },
    ],
    takeaways: [
      "Keep calculator inputs in consistent period units — the #1 source of avoidable errors.",
      "Geometric mean ≤ arithmetic mean; use geometric for actual compound growth.",
      "Time-weighted return judges the manager; money-weighted return judges the investor's timing.",
      "Hypothesis testing trades off Type I vs Type II error — the significance level sets your false-positive rate.",
    ],
  },

  // --------------------------------------------------------------------
  // 3. FINANCIAL STATEMENT ANALYSIS
  // --------------------------------------------------------------------
  {
    id: "cfa-fra",
    examSlug: "cfa",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    title: "Financial Statement Analysis: Reading the Three Statements",
    readingMinutes: 24,
    summary: "How the income statement, balance sheet, and cash flow statement connect — and where quality hides.",
    intro:
      "Financial statement analysis is the largest single topic area at Level I for a reason: it is the language analysts use to evaluate companies, and it feeds directly into equity and credit analysis. The goal is not bookkeeping. It is learning to read three financial statements as a connected system, to adjust for the choices management makes under accounting rules, and to judge whether reported earnings reflect real economic performance.",
    sections: [
      {
        heading: "The three statements as one system",
        paragraphs: [
          "The income statement reports revenues and expenses over a period and ends in net income — profitability, measured on an accrual basis. The balance sheet is a snapshot at a point in time of what a company owns (assets) and owes (liabilities), with the difference being equity. The cash flow statement reconciles accrual profit back to actual cash, split into operating, investing, and financing activities.",
          "These are not independent documents. Net income flows into retained earnings on the balance sheet and is the starting point of the cash flow statement. Depreciation reduces income on the income statement and accumulates against assets on the balance sheet. Because everything ties together, an analyst can often spot manipulation by following a number across statements — for example, profits that rise while operating cash flow falls.",
        ],
      },
      {
        heading: "Accrual accounting and why cash flow matters",
        paragraphs: [
          "Accrual accounting records revenue when it is earned and expenses when they are incurred, regardless of when cash changes hands. This gives a truer picture of a period's performance than cash accounting, but it also opens the door to judgment — and judgment can be stretched. Revenue can be recognized aggressively, expenses can be deferred, and reserves can be managed to smooth earnings.",
          "That is why seasoned analysts anchor on cash flow. Net income can be shaped by estimates; cash is harder to fake. A persistent gap between net income and operating cash flow — income consistently exceeding cash generated — is a classic warning sign that earnings quality is deteriorating. The accruals (the non-cash portion of earnings) are exactly where the risk lives.",
        ],
        callout: {
          label: "Earnings quality red flag",
          body: "When net income grows but operating cash flow stagnates or falls, the gap is accruals — often a sign that reported profit is outrunning real economic performance.",
        },
      },
      {
        heading: "Inventory and the FIFO/LIFO choice",
        paragraphs: [
          "When costs change over time, the assumption a company uses to flow inventory costs through the income statement materially changes reported results. Under FIFO (first-in, first-out), the oldest costs become cost of goods sold and the newest costs remain in ending inventory — so in a rising-price environment, COGS is lower, profit is higher, and the balance-sheet inventory better reflects current cost. Under LIFO (last-in, first-out, permitted under US GAAP but not IFRS), the newest costs hit COGS, raising expense and lowering reported profit and taxes, while ending inventory is stated at old, understated costs.",
          "The exam expects you to reason about the consequences: in periods of rising prices, LIFO produces lower net income but a more current (higher) COGS and lower taxes, while FIFO produces higher net income and a more realistic balance sheet. To compare a LIFO firm with a FIFO firm, analysts use the LIFO reserve to convert LIFO figures to a FIFO basis.",
        ],
      },
      {
        heading: "Long-lived assets and depreciation choices",
        paragraphs: [
          "Capitalizing an expenditure (recording it as an asset and depreciating it over time) versus expensing it immediately changes the timing of expense recognition, and therefore the path of reported earnings, assets, and cash flow classification. Capitalizing boosts near-term net income and assets and shifts the cash outflow into investing activities; expensing depresses current income but cleans the slate.",
          "Depreciation method matters too. Straight-line spreads cost evenly and produces smoother, higher early earnings; accelerated methods front-load expense, depressing early earnings but better matching assets that lose value quickly. None of these choices changes the total expense over an asset's life or the total cash spent — they change the timing, which is exactly what an analyst must normalize before comparing companies.",
        ],
      },
      {
        heading: "Ratios: turning statements into judgments",
        paragraphs: [
          "Ratios convert raw figures into comparable measures of performance and risk. Liquidity ratios (current ratio, quick ratio) ask whether short-term obligations can be met. Solvency ratios (debt-to-equity, interest coverage) ask whether the firm can bear its long-term debt. Profitability ratios (net margin, return on equity) measure how efficiently the firm turns revenue and capital into profit. Activity ratios (inventory turnover, receivables days) measure operational efficiency.",
          "The most powerful framework here is the DuPont decomposition, which breaks return on equity into net profit margin × asset turnover × financial leverage. It tells you not just that ROE is high or low, but why — whether the firm is winning on margins, on efficient use of assets, or simply on borrowing. A rising ROE driven entirely by leverage is a very different story from one driven by improving margins, and DuPont is how you tell them apart.",
        ],
        callout: {
          label: "DuPont decomposition",
          body: "ROE = Net Profit Margin × Asset Turnover × Financial Leverage. Decomposing ROE shows whether returns come from profitability, efficiency, or borrowing.",
        },
      },
    ],
    keyTerms: [
      { term: "Accrual accounting", def: "Recognizing revenue when earned and expenses when incurred, regardless of cash timing." },
      { term: "Operating cash flow", def: "Cash generated by core business operations; harder to manipulate than net income." },
      { term: "LIFO reserve", def: "The difference between LIFO and FIFO inventory values, used to convert LIFO statements to a FIFO basis." },
      { term: "Capitalizing", def: "Recording an expenditure as an asset and expensing it over time, rather than all at once." },
      { term: "DuPont analysis", def: "Decomposing ROE into margin, asset turnover, and leverage to find the source of returns." },
    ],
    takeaways: [
      "Read the three statements as one connected system — numbers tie across them.",
      "A widening gap between net income and operating cash flow signals weakening earnings quality.",
      "In rising prices, LIFO lowers profit and taxes; FIFO gives a more current balance sheet.",
      "DuPont reveals whether ROE comes from margins, efficiency, or leverage — they aren't equally good.",
    ],
  },

  // --------------------------------------------------------------------
  // 4. FIXED INCOME
  // --------------------------------------------------------------------
  {
    id: "cfa-fixed",
    examSlug: "cfa",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "Fixed Income: Pricing, Yield, and Interest-Rate Risk",
    readingMinutes: 20,
    summary: "How bonds are priced, what 'yield' really means, and how duration and convexity measure risk.",
    intro:
      "Fixed income is where the time-value mathematics from Quantitative Methods becomes a market worth tens of trillions of dollars. A bond is, at heart, a stream of promised cash flows, and almost everything in this topic follows from discounting those cash flows and asking how their present value responds when interest rates or credit conditions change. Get comfortable with the inverse relationship between price and yield and the intuition behind duration, and the rest falls into place.",
    sections: [
      {
        heading: "What a bond is, mechanically",
        paragraphs: [
          "A standard bond promises periodic coupon payments and the return of principal (par or face value) at maturity. Its features — coupon rate, frequency, maturity, embedded options, and seniority — determine its risk and price. The issuer might be a government, a municipality, or a corporation, and the credit quality of that issuer drives the extra yield investors demand over a risk-free benchmark.",
          "Price and yield move inversely, and understanding why is the key conceptual hurdle. A bond's coupon is fixed at issuance. If market interest rates rise after issuance, that fixed coupon looks less attractive than newly issued bonds, so the bond's price must fall until its yield matches the market. If rates fall, the bond's above-market coupon makes it more valuable and its price rises. A bond priced above par trades at a premium (its coupon exceeds the market yield); below par, at a discount.",
        ],
      },
      {
        heading: "Pricing as discounted cash flow",
        paragraphs: [
          "A bond's price is simply the present value of its future coupons and principal, discounted at an appropriate rate. When that single discount rate equals the bond's coupon rate, the bond prices exactly at par. A more precise approach discounts each cash flow at the spot rate matching its maturity, recognizing that the cost of money differs across time horizons.",
          "Between coupon dates a buyer must compensate the seller for interest earned but not yet paid — accrued interest. The quoted 'clean' price excludes accrued interest; the 'dirty' price (what actually changes hands) includes it. Mixing these up is a common error.",
        ],
      },
      {
        heading: "What 'yield' actually means",
        paragraphs: [
          "Yield is one of the most overloaded words in finance. The current yield is just annual coupon divided by price — crude, because it ignores capital gain or loss and the time value of money. The yield to maturity (YTM) is the single discount rate that sets the present value of all the bond's cash flows equal to its price; it is the internal rate of return assuming you hold to maturity and reinvest coupons at that same rate.",
          "Those reinvestment and holding assumptions are why YTM is a promise, not a guarantee: if you sell early, or if you reinvest coupons at a different rate than the YTM, your realized return will differ. For bonds with embedded call options, yield to call and yield to worst become the relevant measures, because the issuer can redeem the bond early when it is advantageous to them — and disadvantageous to you.",
        ],
        callout: {
          label: "Yield to maturity",
          body: "YTM is the discount rate equating a bond's price with the present value of its cash flows. It assumes the bond is held to maturity and all coupons are reinvested at the YTM.",
        },
      },
      {
        heading: "Duration: measuring interest-rate risk",
        paragraphs: [
          "Duration measures how sensitive a bond's price is to changes in interest rates. The intuition: it is roughly the percentage change in price for a 1% change in yield. A bond with a duration of 7 will lose about 7% of its value if yields rise by one percentage point and gain about 7% if yields fall by one. Higher duration means more interest-rate risk.",
          "Three relationships are worth internalizing. Longer maturity increases duration, because more of the bond's value sits far in the future where discounting bites hardest. Lower coupons increase duration, because more of the total return is concentrated in the distant principal repayment rather than near-term coupons. And higher market yields reduce duration, because future cash flows are discounted more heavily and matter less. Modified duration scales this sensitivity to a bond's yield, and is the number most often used to estimate price moves.",
        ],
      },
      {
        heading: "Convexity and credit risk",
        paragraphs: [
          "Duration is a straight-line approximation, but the true price-yield relationship is curved. Convexity captures that curvature. Because of positive convexity, a bond actually gains slightly more when yields fall than duration predicts, and loses slightly less when yields rise — a favorable asymmetry. For small rate changes duration alone is a good estimate; for large moves, you add a convexity adjustment to avoid understating the true price change.",
          "Beyond interest-rate risk, bonds carry credit risk — the chance the issuer fails to pay. Investors are compensated through a credit spread, the extra yield over a risk-free benchmark. Spreads widen when the market perceives more default risk or demands more compensation for it, which pushes the bond's price down independent of any move in risk-free rates. Credit rating agencies grade this risk, but spreads often move before ratings do, so analysts watch them as a real-time signal of perceived risk.",
        ],
      },
    ],
    keyTerms: [
      { term: "Par value", def: "The face amount repaid at maturity; bonds trade at a premium above it or a discount below it." },
      { term: "Yield to maturity (YTM)", def: "The IRR of a bond held to maturity, assuming coupons are reinvested at the YTM." },
      { term: "Modified duration", def: "Approximate percentage price change for a 1% change in yield; the core measure of interest-rate risk." },
      { term: "Convexity", def: "The curvature of the price-yield relationship; refines duration's straight-line estimate for large rate moves." },
      { term: "Credit spread", def: "Extra yield over a risk-free benchmark compensating investors for default risk; widening spreads lower prices." },
    ],
    takeaways: [
      "Bond prices and yields move inversely — premium bonds carry above-market coupons, discount bonds below.",
      "YTM assumes hold-to-maturity and reinvestment at the YTM; realized return can differ.",
      "Duration rises with longer maturity and lower coupons, and falls as yields rise.",
      "Convexity is a favorable asymmetry; credit spreads move prices independently of risk-free rates.",
    ],
  },
];

const questions: Question[] = [
  // ---- Ethics ----
  {
    id: "cfa-eth-q1",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 2,
    stem: "An analyst combines a company's published financial reports with non-material, nonpublic details gathered from conversations with the firm's suppliers, and concludes the stock is undervalued. Acting on this conclusion most likely:",
    choices: [
      "Violates the prohibition on using material nonpublic information.",
      "Is permitted under the mosaic theory.",
      "Violates the Standard on independence and objectivity.",
    ],
    answerIndex: 1,
    explanation:
      "This is the mosaic theory in action. The analyst combined public information with NON-material nonpublic information. Standard II(A) only prohibits acting on information that is BOTH material AND nonpublic. Because none of the nonpublic pieces were individually material, assembling them into a market-moving conclusion is legitimate analysis, not insider trading. Choice A is the classic trap — it assumes any nonpublic input is forbidden, which is wrong. Choice C is irrelevant; nothing here compromises the analyst's independence.",
  },
  {
    id: "cfa-eth-q2",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 2,
    stem: "A portfolio manager is preparing to leave her firm to start a competing business. Before resigning, which action is permitted under the Standards?",
    choices: [
      "Copying the firm's client contact list to use after she leaves.",
      "Soliciting the firm's current clients while still employed.",
      "Making preparations to start the new business, such as registering an entity.",
    ],
    answerIndex: 2,
    explanation:
      "Standard IV(A) Loyalty allows an employee to make logistical preparations to compete (e.g., forming a legal entity, arranging financing) as long as they do not breach their duty during employment. What is prohibited is misappropriating employer property and soliciting clients before leaving. Choice A misappropriates confidential firm property. Choice B solicits clients while still bound by a duty of loyalty to the current employer. Only the preparatory, non-conflicting step in C is allowed.",
  },
  {
    id: "cfa-eth-q3",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 3,
    stem: "Local securities law in an analyst's country is LESS strict than the CFA Institute Code and Standards. To comply, the analyst should follow:",
    choices: [
      "Local law, because members are bound by the laws where they operate.",
      "The Code and Standards, because they are stricter.",
      "Whichever the employer's compliance department designates.",
    ],
    answerIndex: 1,
    explanation:
      "Members must adhere to the more strict of applicable law or the Code and Standards. When local law is less strict, the Code and Standards govern. When local law is MORE strict, the member follows local law. Choice A fails because it ignores the 'most strict' principle. Choice C is wrong because an employer cannot authorize conduct below the Standards — compliance with the Code is the member's personal obligation.",
  },
  {
    id: "cfa-eth-q4",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 1,
    stem: "A firm claims GIPS compliance. GIPS compliance is properly claimed at the level of:",
    choices: ["A single composite", "The firm as a whole", "Each individual client account"],
    answerIndex: 1,
    explanation:
      "GIPS compliance is claimed on a firm-wide basis, not for selected composites or accounts. This prevents firms from cherry-picking only their best-performing products to present as 'GIPS compliant.' Choices A and C describe exactly the selective presentation GIPS is designed to prevent — the entire point is comparability and completeness across the firm.",
  },
  // ---- Quant ----
  {
    id: "cfa-quant-q1",
    examSlug: "cfa",
    topicId: "quant",
    topicName: "Quantitative Methods",
    difficulty: 2,
    stem: "An investor wants to evaluate a fund manager's skill, independent of when clients happened to deposit or withdraw money. The most appropriate return measure is the:",
    choices: ["Money-weighted rate of return", "Time-weighted rate of return", "Arithmetic mean return"],
    answerIndex: 1,
    explanation:
      "The time-weighted return removes the distorting effect of external cash flows, isolating the manager's investment decisions — which is exactly why it is the industry standard for evaluating managers. The money-weighted return (an IRR) is sensitive to the timing and size of cash flows the manager doesn't control, so it measures the investor's experience, not the manager's skill. The arithmetic mean ignores compounding and cash flows entirely and isn't a performance attribution tool here.",
  },
  {
    id: "cfa-quant-q2",
    examSlug: "cfa",
    topicId: "quant",
    topicName: "Quantitative Methods",
    difficulty: 2,
    stem: "A 6% stated annual interest rate compounded monthly has an effective annual rate that is:",
    choices: [
      "Exactly 6%, because the stated rate equals the effective rate.",
      "Greater than 6%, because of intra-year compounding.",
      "Less than 6%, because monthly periods reduce total interest.",
    ],
    answerIndex: 1,
    explanation:
      "EAR = (1 + 0.06/12)^12 − 1 ≈ 6.17%, which exceeds the 6% stated rate. More frequent compounding lets interest earn interest within the year, so the effective rate always exceeds the stated rate when compounding occurs more than once per year. Choice A only holds with annual compounding. Choice C reverses the relationship — more frequent compounding increases, never decreases, the effective rate.",
  },
  {
    id: "cfa-quant-q3",
    examSlug: "cfa",
    topicId: "quant",
    topicName: "Quantitative Methods",
    difficulty: 3,
    stem: "A researcher sets a 5% significance level and rejects the null hypothesis. The probability that this rejection is a Type I error (the null was actually true) is:",
    choices: ["5%", "95%", "Cannot be determined without the sample size"],
    answerIndex: 0,
    explanation:
      "The significance level α IS the probability of a Type I error — rejecting a true null. By choosing 5%, the researcher accepted a 5% chance of a false positive. Choice B (95%) is the confidence level, the complement. Choice C is a distractor: while sample size affects power (the Type II error rate), the Type I error rate is fixed by the chosen significance level, independent of sample size.",
  },
  {
    id: "cfa-quant-q4",
    examSlug: "cfa",
    topicId: "quant",
    topicName: "Quantitative Methods",
    difficulty: 2,
    stem: "For a set of annual returns that are not all identical, the relationship between the arithmetic mean and the geometric mean return is that the geometric mean is:",
    choices: ["Always greater", "Always less", "Sometimes greater, sometimes less"],
    answerIndex: 1,
    explanation:
      "The geometric mean is always less than the arithmetic mean whenever returns vary, and equal only when every period's return is identical. The geometric mean reflects actual compound growth and is dragged down by volatility (a +50% then −50% sequence nets a loss). The arithmetic mean ignores this compounding drag, so it sits above the geometric mean. Choice C is wrong because the inequality is strict and consistent once returns differ.",
  },
  // ---- FRA ----
  {
    id: "cfa-fra-q1",
    examSlug: "cfa",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    difficulty: 2,
    stem: "Over several years a company reports steadily rising net income, but its operating cash flow is flat to declining. This pattern most likely indicates:",
    choices: [
      "Strong earnings quality, since net income is growing.",
      "A potential earnings-quality problem worth investigating.",
      "Nothing meaningful, since the two figures are unrelated.",
    ],
    answerIndex: 1,
    explanation:
      "A persistent divergence — net income rising while operating cash flow stalls — is a classic red flag. The gap is accruals, and growing accruals can reflect aggressive revenue recognition or deferred expenses rather than real economic profit. Choice A mistakes accounting profit for cash generation. Choice C is simply false: net income and operating cash flow are tightly linked, and their divergence is one of the most informative signals in analysis.",
  },
  {
    id: "cfa-fra-q2",
    examSlug: "cfa",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    difficulty: 3,
    stem: "During a period of rising prices, a company using LIFO instead of FIFO will report, relative to FIFO:",
    choices: [
      "Higher net income and higher ending inventory.",
      "Lower net income and lower ending inventory.",
      "Higher net income and lower taxes.",
    ],
    answerIndex: 1,
    explanation:
      "Under LIFO in a rising-price environment, the newest (highest) costs flow to COGS, raising expense and LOWERING net income; the oldest (lowest) costs remain in ending inventory, so balance-sheet inventory is LOWER than under FIFO. That matches choice B. Choice A describes FIFO's effect. Choice C is internally contradictory under LIFO: lower income does mean lower taxes, but LIFO produces LOWER income, not higher — so 'higher net income' makes the option wrong.",
  },
  {
    id: "cfa-fra-q3",
    examSlug: "cfa",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    difficulty: 3,
    stem: "Two firms have identical ROE, but Firm A's comes mainly from high financial leverage while Firm B's comes from high net profit margins. Using DuPont analysis, an analyst should conclude that:",
    choices: [
      "The two ROEs are economically equivalent and equally desirable.",
      "Firm A's ROE carries more financial risk despite the equal headline number.",
      "Firm B must be the more leveraged of the two.",
    ],
    answerIndex: 1,
    explanation:
      "DuPont decomposes ROE into margin × asset turnover × leverage. Equal ROE can mask very different risk profiles. Firm A is manufacturing its return through borrowing, which amplifies both gains and losses and raises solvency risk — a more fragile source of return than Firm B's operating profitability. Choice A ignores the whole purpose of DuPont, which is to show that the SOURCE of ROE matters. Choice C contradicts the premise, which states Firm A is the leveraged one.",
  },
  // ---- Fixed Income ----
  {
    id: "cfa-fi-q1",
    examSlug: "cfa",
    topicId: "fixed",
    topicName: "Fixed Income",
    difficulty: 1,
    stem: "Market interest rates rise after a fixed-coupon bond is issued. The bond's price will most likely:",
    choices: ["Rise", "Fall", "Stay the same, since the coupon is fixed"],
    answerIndex: 1,
    explanation:
      "Bond prices move inversely to yields. When market rates rise, the bond's fixed coupon is now below what new bonds offer, so investors will only buy it at a lower price — one that raises its effective yield to the market level. Choice A reverses the relationship. Choice C confuses the fixed coupon with a fixed price: the coupon is fixed, but the PRICE adjusts precisely because the coupon can't.",
  },
  {
    id: "cfa-fi-q2",
    examSlug: "cfa",
    topicId: "fixed",
    topicName: "Fixed Income",
    difficulty: 2,
    stem: "Of the following bonds, which will have the HIGHEST interest-rate sensitivity (duration), all else equal?",
    choices: [
      "A 30-year bond with a 2% coupon.",
      "A 30-year bond with an 8% coupon.",
      "A 5-year bond with a 2% coupon.",
    ],
    answerIndex: 0,
    explanation:
      "Duration rises with LONGER maturity and LOWER coupons. The 30-year, 2%-coupon bond maximizes both factors: most of its value sits far in the future (long maturity) and is concentrated in the distant principal repayment rather than near-term coupons (low coupon). The 8% coupon in choice B shortens duration by returning more cash sooner. The 5-year bond in choice C is far less sensitive simply because of its short maturity.",
  },
  {
    id: "cfa-fi-q3",
    examSlug: "cfa",
    topicId: "fixed",
    topicName: "Fixed Income",
    difficulty: 2,
    stem: "A bond has a modified duration of 6. If its yield rises by 0.5 percentage points, the duration-based estimate of the price change is approximately:",
    choices: ["−3%", "−6%", "−0.5%"],
    answerIndex: 0,
    explanation:
      "Estimated price change ≈ −modified duration × change in yield = −6 × 0.5% = −3%. Duration scales the price response to the size of the yield move, so half a percentage point produces roughly a 3% loss. Choice B (−6%) would correspond to a full 1% yield change, not 0.5%. Choice C ignores duration entirely and just restates the yield change. (For large yield moves you'd refine this with a convexity adjustment, but 0.5% is small enough that duration alone is a good estimate.)",
  },
  {
    id: "cfa-fi-q4",
    examSlug: "cfa",
    topicId: "fixed",
    topicName: "Fixed Income",
    difficulty: 3,
    stem: "The credit spread on a corporate bond widens sharply while risk-free government yields are unchanged. The corporate bond's price will most likely:",
    choices: [
      "Rise, because government yields didn't move.",
      "Fall, because the higher spread raises the bond's total yield.",
      "Stay flat, because spreads don't affect price.",
    ],
    answerIndex: 1,
    explanation:
      "A bond's yield is the risk-free rate plus a credit spread. If the spread widens while the risk-free rate is flat, the bond's total required yield rises — and since price moves inversely to yield, the price falls. This is how credit deterioration hits a bondholder even when central-bank rates are stable. Choice A ignores the spread component entirely. Choice C is simply false: spreads are a direct input into the discount rate and therefore the price.",
  },
];

export const cfaContent: ExamContent = {
  examSlug: "cfa",
  chapters,
  questions,
};
