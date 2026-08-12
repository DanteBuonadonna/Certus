// ============================================================
// Certus — CFP content (wave 1, original)
// The Certified Financial Planner exam spans the full financial-
// planning curriculum. Topics here: General Principles, Risk
// Management & Insurance, Tax Planning, Retirement Planning,
// and Estate Planning.
// ============================================================

import { Chapter, Question, ExamContent } from "./types";
import { cfpDeepChapters, cfpDeepQuestions } from "./cfp-deep";

const chapters: Chapter[] = [
  // 1. GENERAL PRINCIPLES
  {
    id: "cfp-general",
    examSlug: "cfp",
    topicId: "general",
    topicName: "General Principles of Financial Planning",
    title: "General Principles of Financial Planning",
    readingMinutes: 6,
    summary: "The planning process, financial statements, cash-flow management, and the planner's standard of conduct.",
    intro:
      "The CFP marks someone as a comprehensive financial planner, and the foundation is a disciplined process for understanding a client's whole financial life and building a coordinated plan. This domain covers the steps of that process, the tools used to assess a client's situation, and the ethical standard a CFP professional must uphold. Everything else in the curriculum plugs into this framework.",
    sections: [
      {
        heading: "The seven-step planning process",
        blocks: [
          { kind: "p", text: "CFP Board defines financial planning as a collaborative process that maximizes a client's potential for meeting life goals through advice integrating relevant elements of their personal and financial circumstances. The operative word is INTEGRATING: what distinguishes financial planning from selling a product is that recommendations are made against the whole picture rather than one need in isolation. The process runs in seven steps, and their ORDER is examinable." },
          { kind: "bullets", items: ["1. Understanding the client's personal and financial circumstances — gathering both quantitative data and qualitative goals, values, and attitudes.", "2. Identifying and selecting goals — including helping the client prioritize when goals conflict, which they usually do.", "3. Analyzing the client's current course of action and potential alternative courses.", "4. Developing the financial planning recommendations.", "5. Presenting the recommendations, including the basis for each and its material risks.", "6. Implementing the recommendations, with responsibilities clearly assigned.", "7. Monitoring progress and updating — the step that makes planning ongoing rather than a one-time report."] },
          { kind: "p", text: "Two steps are commonly skipped in practice and tested because of it. Step 3 requires analyzing the client's CURRENT course of action — sometimes the honest recommendation is that the client is already doing the right thing. And step 7 is what makes the engagement a relationship: circumstances, tax law, and markets all change, so a plan never monitored becomes wrong without anyone noticing." },
        ],
      },
      {
        heading: "The fiduciary standard under the Code and Standards",
        blocks: [
          { kind: "p", text: "Since October 2019, a CFP® professional owes a FIDUCIARY DUTY at all times when providing FINANCIAL ADVICE — not merely when delivering a comprehensive plan. That duty has three components: a DUTY OF LOYALTY placing the client's interest above the professional's own, a DUTY OF CARE acting with the care, skill, prudence, and diligence a prudent professional would use, and a DUTY TO FOLLOW CLIENT INSTRUCTIONS that are reasonable and lawful." },
          { kind: "p", text: "Conflicts of interest must be disclosed fully and fairly, and disclosure alone is not always sufficient — the client's informed consent must be obtained, and some conflicts must be avoided outright. The practical test the exam applies: if a recommendation benefits the professional and that benefit was not disclosed, the answer is a breach, regardless of whether the recommendation itself was defensible." },
          { kind: "callout", label: "Advice versus planning", body: "The fiduciary duty attaches to FINANCIAL ADVICE, a broader category than financial planning. A single recommendation about one account still triggers it. This was the substantive change in the 2019 standards and remains a favourite exam distinction." },
        ],
      },
      {
        heading: "Reading a client's financial position",
        blocks: [
          { kind: "p", text: "Two statements describe a household, and confusing them is a reliable error. The STATEMENT OF FINANCIAL POSITION — the personal balance sheet — is a snapshot at a single moment: assets less liabilities equals NET WORTH. The CASH FLOW STATEMENT covers a PERIOD: income less expenses equals surplus or deficit. Net worth measures accumulated wealth; cash flow measures whether the household is currently adding to it." },
          { kind: "p", text: "Ratios turn those statements into diagnosis. An EMERGENCY FUND of three to six months of essential expenses is the standard target, with dual stable incomes justifying the lower end and a single or commission-based income the higher. Housing costs are conventionally kept at or below 28% of gross income, and total debt service at or below 36%. A SAVINGS RATE of 10 to 15% of gross income is the usual benchmark for retirement adequacy when saving begins early." },
          { kind: "example", example: { title: "net worth versus cash flow", prompt: "A client holds $685,000 in assets and $310,000 in liabilities, and this year earned $140,000 while spending $155,000. Assess their position.", steps: ["Net worth = $685,000 − $310,000 = $375,000. Positive and reasonably healthy.", "Cash flow = $140,000 − $155,000 = −$15,000. A deficit.", "The two tell opposite stories: accumulated wealth is solid, but the household is currently consuming it.", "A deficit funded by drawing down assets erodes the net worth figure over time, so the balance sheet is a lagging picture of a deteriorating situation."], answer: "Net worth $375,000; cash flow −$15,000. The planning priority is the deficit, not the balance sheet — which is exactly why both statements are required before any recommendation." } },
        ],
      },
    ],
    keyTerms: [
      { term: "Financial planning process", def: "The CFP Board's multi-step process from understanding circumstances to monitoring the plan." },
      { term: "Statement of financial position", def: "A personal balance sheet of assets minus liabilities, yielding net worth." },
      { term: "Emergency fund", def: "Liquid reserves, commonly 3–6 months of expenses, for unexpected needs." },
      { term: "Fiduciary duty (CFP)", def: "The obligation to act in the client's best interest at all times when giving financial advice." },
      { term: "529 plan", def: "A tax-advantaged savings vehicle that grows tax-free for qualified education expenses." },
    ],
    takeaways: [
      "Follow the process: understand, set goals, analyze, recommend, present, implement, monitor.",
      "CFP professionals are fiduciaries — client's best interest, always, with conflicts disclosed.",
      "Net worth and cash flow statements diagnose the client's financial health.",
      "Keep a 3–6 month emergency fund; 529 plans grow tax-free for qualified education costs.",
    ],
  },

  // 2. RISK MANAGEMENT & INSURANCE
  {
    id: "cfp-insurance",
    examSlug: "cfp",
    topicId: "insurance",
    topicName: "Risk Management & Insurance",
    title: "Risk Management & Insurance Planning",
    readingMinutes: 6,
    summary: "Handling risk, the main types of life, health, disability, and property insurance, and when each fits.",
    intro:
      "Protecting a financial plan from catastrophic loss is as important as growing wealth. This domain teaches how to identify risks a client faces and choose the right tool to manage each — including insurance. A single uninsured disaster can undo decades of saving, so risk management is foundational, not optional.",
    sections: [
      {
        heading: "Deciding which risks to insure at all",
        blocks: [
          { kind: "p", text: "Risk management precedes insurance, because insurance is only one of four responses to a risk. You can AVOID it, REDUCE it, RETAIN it, or TRANSFER it. The choice is governed by two variables: how likely the loss is, and how severe it would be. Insurance is the right tool for LOW-frequency, HIGH-severity risks — the events that are rare enough to be cheap to cover and catastrophic enough that no household could absorb them." },
          { kind: "p", text: "The corollary is that high-frequency, low-severity risks should generally be RETAINED, because paying an insurer to handle predictable small losses means paying their expenses and profit on top of the losses themselves. That principle is exactly why raising a deductible is usually good advice for a client with adequate emergency reserves: it transfers the frequent small losses back to the household, where they are cheapest to bear, and preserves premium dollars for the catastrophic layer." },
          { kind: "table", table: { caption: "Matching the response to the risk.", headers: ["", "Low severity", "High severity"], rows: [["Low frequency", "RETAIN — absorb it", "TRANSFER — insure it"], ["High frequency", "RETAIN and REDUCE", "AVOID the activity entirely"]] } },
        ],
      },
      {
        heading: "Property coverage and the coinsurance trap",
        blocks: [
          { kind: "p", text: "Property policies commonly contain a COINSURANCE clause requiring the owner to carry insurance equal to a stated percentage — usually 80% — of the property's replacement value. If the owner carries less, the insurer pays only a proportion of a PARTIAL loss, even when the loss is far below the policy limit. Clients are routinely surprised by this, because they assume any loss under the face amount is fully covered." },
          { kind: "formula", formula: { label: "Coinsurance payment", expr: "Payment = (insurance carried ÷ insurance required) × loss", note: "Insurance required = replacement value × the coinsurance percentage. The payment is still capped at the policy limit, and the deductible is applied after." } },
          { kind: "example", example: { title: "underinsured, and the cost of it", prompt: "A home has a $400,000 replacement value and an 80% coinsurance clause. The owner carries $240,000 of coverage and suffers a $100,000 loss. How much does the insurer pay?", steps: ["Insurance required = $400,000 × 80% = $320,000.", "Insurance actually carried = $240,000.", "Ratio = $240,000 ÷ $320,000 = 0.75.", "Payment = 0.75 × $100,000 = $75,000."], answer: "$75,000. The owner absorbs $25,000 despite the loss being well under their $240,000 limit — the penalty is for being underinsured, not for exceeding coverage, which is why clients find it counterintuitive." } },
          { kind: "bullets", items: ["REPLACEMENT COST pays to rebuild at today's prices; ACTUAL CASH VALUE deducts depreciation and pays far less.", "An UMBRELLA policy sits above the underlying auto and homeowners limits and pays only the excess.", "Umbrella insurers require stated minimum underlying limits so the umbrella attaches at a known point.", "Flood and earthquake are typically EXCLUDED from standard homeowners policies and require separate coverage."] },
        ],
      },
      {
        heading: "Life and disability: sizing the need",
        blocks: [
          { kind: "p", text: "Life insurance replaces HUMAN CAPITAL — the present value of future earnings that dependents would lose. The need therefore peaks when future earnings are large and unreplaced and dependents rely on them, which describes a young parent, and it declines steadily as financial capital accumulates and dependents become self-supporting. A retiree with a funded pension and no dependents has, in most cases, no remaining need." },
          { kind: "p", text: "TERM insurance provides pure death benefit for a stated period at the lowest cost, and it fits the temporary need described above. PERMANENT insurance — whole life, universal, variable — adds a cash value component and lasts for life at substantially higher cost; it suits estate liquidity needs or a genuinely permanent obligation such as a special-needs dependent. Note that VARIABLE products are securities, requiring a securities registration to sell, because the contract holder bears the investment risk." },
          { kind: "callout", label: "The coverage clients most often lack", body: "DISABILITY insurance is more likely to be needed during working years than life insurance, yet is far more often missing. Check the definition of disability: OWN-OCCUPATION pays if the insured cannot perform their own profession, while ANY-OCCUPATION pays only if they cannot perform any work at all — a much harder standard and a much cheaper policy." },
        ],
      },
    ],
    keyTerms: [
      { term: "Risk transfer", def: "Shifting the financial cost of a loss to an insurer via premiums; the core role of insurance." },
      { term: "Term life insurance", def: "Temporary, low-cost pure protection for a set period; no cash value." },
      { term: "Permanent life insurance", def: "Lifelong coverage that builds cash value at higher cost (whole/universal life)." },
      { term: "Disability income insurance", def: "Replaces income lost to a disabling illness or injury; watch the definition of disability." },
      { term: "Umbrella policy", def: "Excess liability coverage above home/auto limits, protecting wealth from large claims." },
    ],
    takeaways: [
      "Insure large risks you can't absorb; self-insure small ones to avoid wasting premium.",
      "Term life is cost-effective for temporary income replacement; permanent builds cash value.",
      "Disability is more likely than premature death in a career — don't overlook it.",
      "Umbrella liability coverage protects accumulated wealth from lawsuits.",
    ],
  },

  // 3. TAX PLANNING
  {
    id: "cfp-tax",
    examSlug: "cfp",
    topicId: "tax",
    topicName: "Tax Planning",
    title: "Tax Planning Fundamentals",
    readingMinutes: 5,
    summary: "How income is taxed, the difference marginal rates and capital gains make, and core planning moves.",
    intro:
      "Taxes touch every financial decision, and a planner who understands them can meaningfully improve a client's after-tax results. This domain covers how the income tax works, the crucial distinction between ordinary income and capital gains, and the planning techniques used to legally minimize the tax drag on a portfolio and a plan.",
    sections: [
      {
        heading: "Marginal, effective, and why the difference matters",
        blocks: [
          { kind: "p", text: "The United States uses a PROGRESSIVE bracket system, and the most consequential misunderstanding in personal finance is the belief that earning one more dollar can push all your income into a higher bracket. It cannot. Each bracket applies only to the income falling within it. Your MARGINAL rate is what the next dollar is taxed at; your EFFECTIVE rate is total tax divided by total income, and it is always lower than the marginal rate in a progressive system." },
          { kind: "p", text: "Planning uses both numbers for different jobs. The MARGINAL rate drives decisions at the margin: whether an additional deduction is worth pursuing, whether to defer income, whether a municipal bond beats a taxable one. The EFFECTIVE rate describes the overall burden and is the honest figure for projecting cash flow. Clients who confuse them sometimes refuse a raise or a bonus, which is a real planning conversation rather than a hypothetical." },
          { kind: "example", example: { title: "marginal versus effective", prompt: "Assume brackets of 10% on the first $12,000, 12% up to $48,000, and 22% up to $104,000. A client has $100,000 of taxable income. Find total tax, the effective rate, and the marginal rate.", steps: ["First bracket: $12,000 × 10% = $1,200.", "Second bracket: ($48,000 − $12,000) × 12% = $36,000 × 12% = $4,320.", "Third bracket: ($100,000 − $48,000) × 22% = $52,000 × 22% = $11,440.", "Total tax = $1,200 + $4,320 + $11,440 = $16,960.", "Effective rate = $16,960 ÷ $100,000 = 16.96%. Marginal rate = 22%."], answer: "Tax $16,960; effective 16.96%; marginal 22%. Applying 22% to the whole $100,000 gives $22,000 — the error that produces the 'my raise pushed me into a higher bracket' misconception." } },
        ],
      },
      {
        heading: "Income, deductions, and the order of operations",
        blocks: [
          { kind: "p", text: "The tax computation runs in a fixed sequence and each step has planning implications. Gross income less ABOVE-THE-LINE adjustments gives ADJUSTED GROSS INCOME. AGI less either the standard deduction or itemized deductions, whichever is GREATER, gives TAXABLE INCOME. Tax is then computed from taxable income, and CREDITS are applied last." },
          { kind: "p", text: "Two distinctions carry most of the exam weight. First, above-the-line adjustments reduce AGI and are therefore worth more than an equivalent below-the-line deduction, because a long list of phase-outs and thresholds key off AGI. Second, a DEDUCTION reduces taxable income and is worth its amount times your marginal rate, while a CREDIT reduces tax dollar for dollar. A $1,000 credit beats a $1,000 deduction for every taxpayer — and beats a $3,000 deduction for anyone below the 33% bracket." },
          { kind: "table", table: { caption: "Capital gains treatment.", headers: ["Holding period", "Classification", "Taxed at"], rows: [["One year or less", "Short-term", "Ordinary income rates"], ["More than one year", "Long-term", "Preferential 0% / 15% / 20%"], ["Qualified dividends", "—", "Preferential 0% / 15% / 20%"], ["Non-qualified dividends", "—", "Ordinary income rates"]] } },
          { kind: "callout", label: "Capital loss rules", body: "Capital losses offset capital gains without limit. Net losses beyond that may offset up to $3,000 of ordinary income per year, and anything remaining carries forward indefinitely. The WASH SALE rule disallows the loss if a substantially identical security is purchased within 30 days before or after the sale — a 61-day window, not 30." },
        ],
      },
    ],
    keyTerms: [
      { term: "Marginal tax rate", def: "The rate applied to the next dollar of income; higher than the effective (average) rate." },
      { term: "Long-term capital gain", def: "Gain on an asset held over a year, taxed at preferential rates below ordinary income." },
      { term: "Tax credit", def: "A dollar-for-dollar reduction of tax owed; generally more valuable than a deduction." },
      { term: "Tax-loss harvesting", def: "Realizing losses to offset gains; subject to the 30-day wash-sale rule." },
      { term: "Wash-sale rule", def: "Disallows a loss if a substantially identical security is repurchased within 30 days." },
    ],
    takeaways: [
      "Marginal rate drives deduction value; credits cut tax dollar-for-dollar and are usually better.",
      "Hold assets over a year for lower long-term capital-gains rates.",
      "Harvest losses to offset gains — but avoid the 30-day wash-sale trap.",
      "Use tax-deferred and Roth accounts and smart asset location to maximize after-tax wealth.",
    ],
  },

  // 4. RETIREMENT PLANNING
  {
    id: "cfp-retirement",
    examSlug: "cfp",
    topicId: "retirement",
    topicName: "Retirement Planning",
    title: "Retirement Planning & Employee Benefits",
    readingMinutes: 6,
    summary: "Qualified plans, IRAs, the Roth-vs-traditional decision, and Social Security basics.",
    intro:
      "Helping clients accumulate enough to retire — and draw it down sustainably — is one of the most valued services a planner provides. This domain covers the retirement savings vehicles, their tax treatment, the rules that govern contributions and withdrawals, and how Social Security fits into the picture. The decisions here compound over decades, so getting them right matters enormously.",
    sections: [
      {
        heading: "Accumulation: which account, and why",
        blocks: [
          { kind: "p", text: "The central retirement decision is WHEN tax is paid. A TRADITIONAL account may allow a deduction now, grows tax-deferred, and is taxed as ordinary income on withdrawal. A ROTH is funded with after-tax dollars and produces entirely tax-free qualified withdrawals. The choice turns on whether the client expects a higher or lower marginal rate in retirement — which is why a young saver early in their career, or anyone in an unusually low-income year, is the classic Roth candidate." },
          { kind: "p", text: "Ordering matters as much as account type. The conventional sequence is: contribute enough to capture any EMPLOYER MATCH first, because that is an immediate guaranteed return no market can promise; then pay down high-interest debt; then fill tax-advantaged space; then invest in taxable accounts. A client contributing to an IRA while leaving a 50% employer match unclaimed has the sequence backwards, and this is a standard exam fact pattern." },
          { kind: "table", table: { caption: "Plan types.", headers: ["Plan", "Offered by", "Distinguishing feature"], rows: [["Traditional IRA", "Individual", "Possible deduction now; taxed on withdrawal"], ["Roth IRA", "Individual", "Tax-free qualified withdrawals; no lifetime RMD"], ["401(k) / 403(b)", "Employer", "Salary deferral, often matched; 403(b) for schools and nonprofits"], ["457(b)", "Government / some nonprofits", "No 10% early-withdrawal penalty on separation"], ["SEP IRA", "Small employer / self-employed", "Employer contributions only"], ["SIMPLE IRA", "Small employer", "Employee deferral with required employer contribution"], ["Defined benefit", "Employer", "Employer bears investment and longevity risk"]] } },
        ],
      },
      {
        heading: "Distribution: penalties, RMDs, and sequence risk",
        blocks: [
          { kind: "p", text: "Withdrawals before age 59½ generally trigger a 10% penalty on top of ordinary income tax, with narrow exceptions including death, disability, substantially equal periodic payments, certain medical expenses, and a first-time home purchase from an IRA. REQUIRED MINIMUM DISTRIBUTIONS begin at age 73 under current law, rising to 75 for those born in 1960 or later. A Roth IRA has NO required minimum distributions during the original owner's lifetime — a meaningful planning advantage." },
          { kind: "example", example: { title: "computing an RMD", prompt: "A client turning 73 has an IRA worth $800,000 at the prior year end. The Uniform Lifetime Table factor for age 73 is 26.5. What is the required distribution?", steps: ["RMD = prior December 31 account balance ÷ the applicable life expectancy factor.", "RMD = $800,000 ÷ 26.5.", "RMD = $30,188.68.", "The factor declines each year, so the required percentage rises as the client ages."], answer: "About $30,189. Note it is computed on the PRIOR year-end balance, not the current one — and failing to take it historically carried a penalty on the shortfall, reduced under SECURE 2.0 and reduced further if corrected promptly." } },
          { kind: "p", text: "SEQUENCE-OF-RETURNS RISK is the distribution-phase danger that has no accumulation-phase equivalent. Withdrawing from a portfolio during an early market decline sells shares at depressed prices, permanently removing capital that would otherwise have participated in the recovery. Two retirees with identical AVERAGE returns can end in very different places depending purely on when the bad years fall — which is why cash reserves, flexible spending, and a bond ladder covering early years matter more than average return assumptions." },
          { kind: "callout", label: "The 4% guideline, and its limits", body: "The conventional starting point withdraws 4% of the initial portfolio in year one, adjusted for inflation thereafter — so $1,200,000 supports roughly $48,000 in year one. Treat it as a starting estimate, not a rule: it was derived from a particular historical period and asset mix, and a client retiring into a poor sequence may need to reduce spending regardless of what the guideline says." },
        ],
      },
      {
        heading: "Social Security and the claiming decision",
        blocks: [
          { kind: "p", text: "Benefits are based on the highest 35 years of indexed earnings, so a worker with fewer than 35 years has zeros averaged in. FULL RETIREMENT AGE depends on birth year and is 67 for those born in 1960 or later. Claiming EARLY, from age 62, permanently reduces the benefit; DELAYING past full retirement age earns delayed retirement credits up to age 70, after which there is no further increase." },
          { kind: "p", text: "The claiming decision is essentially a longevity and liquidity question rather than a maximization puzzle. Delaying buys a larger inflation-adjusted lifetime income, which is valuable insurance against outliving assets — so a client in good health with other resources to bridge the gap generally benefits from waiting. A client in poor health, or one who would otherwise deplete a portfolio to wait, may reasonably claim earlier. For married couples, the higher earner's decision matters more, because that benefit continues as the survivor benefit." },
        ],
      },
    ],
    keyTerms: [
      { term: "401(k)", def: "Employer plan allowing pre-tax contributions with tax-deferred growth, often with a match." },
      { term: "Traditional vs Roth", def: "Traditional: deduct now, tax later. Roth: pay tax now, withdraw tax-free later." },
      { term: "Required minimum distribution (RMD)", def: "Mandatory taxable withdrawals from traditional accounts starting at the statutory age." },
      { term: "Early-withdrawal penalty", def: "A 10% penalty (plus tax) generally applied to withdrawals before age 59½." },
      { term: "Social Security claiming age", def: "Claiming early reduces benefits permanently; delaying to 70 increases them." },
    ],
    takeaways: [
      "Capture the full employer match first — it's an immediate return.",
      "Roth vs traditional turns on comparing today's tax rate to the expected rate in retirement.",
      "Avoid pre-59½ withdrawals (10% penalty); plan around RMDs on traditional accounts.",
      "Delaying Social Security past full retirement age raises lifetime benefits for long-lived clients.",
    ],
  },

  // 5. ESTATE PLANNING
  {
    id: "cfp-estate",
    examSlug: "cfp",
    topicId: "estate",
    topicName: "Estate Planning",
    title: "Estate Planning Essentials",
    readingMinutes: 4,
    summary: "Wills, probate, trusts, beneficiary designations, and the basics of gift and estate tax.",
    intro:
      "Estate planning ensures a client's assets pass to the people and causes they choose, with minimal cost, delay, and tax. It also addresses incapacity — who decides if the client can't. This domain covers the core documents and structures, the probate process, and the transfer-tax system, all of which a comprehensive planner coordinates.",
    sections: [
      {
        heading: "What passes through probate, and what does not",
        blocks: [
          { kind: "p", text: "Probate is the court-supervised process of validating a will and administering an estate. It is public, can be slow, and carries cost — which is why avoiding it is a common planning objective. The critical insight is that a will only controls PROBATE assets. A great many assets pass outside the will entirely, by contract or by operation of law, and a beneficiary designation on a retirement account will defeat a contrary instruction in the will every time." },
          { kind: "table", table: { caption: "How assets pass.", headers: ["Asset", "Passes by", "Probate?"], rows: [["Life insurance with a named beneficiary", "Contract", "No"], ["Retirement account with a beneficiary", "Contract", "No"], ["Joint tenancy with right of survivorship", "Operation of law", "No"], ["Payable-on-death / transfer-on-death account", "Contract", "No"], ["Assets titled in a revocable living trust", "Trust terms", "No"], ["Property in the decedent's sole name", "The will", "YES"], ["Asset whose named beneficiary predeceased", "Falls to the estate", "YES"]] } },
          { kind: "callout", label: "The review that gets skipped", body: "Beneficiary designations override the will and are frequently decades out of date — an ex-spouse named on a 401(k) will receive it. Reviewing designations after every marriage, divorce, birth, or death is among the highest-value, lowest-effort items in a planning engagement." },
        ],
      },
      {
        heading: "The transfer taxes and the deductions that defer them",
        blocks: [
          { kind: "p", text: "Three federal transfer taxes operate together: the GIFT tax on lifetime transfers, the ESTATE tax at death, and the GENERATION-SKIPPING TRANSFER tax on transfers that skip a generation. The GST exists to prevent a family from avoiding an entire round of estate tax by leaving assets directly to grandchildren, and it applies IN ADDITION to the estate and gift taxes rather than replacing them." },
          { kind: "p", text: "Two provisions do most of the deferral work. The UNLIMITED MARITAL DEDUCTION allows any amount to pass to a U.S.-CITIZEN spouse free of gift or estate tax — but the tax is deferred, not forgiven, because the assets are taxed in the survivor's estate. Transfers to a non-citizen spouse are limited and typically require a QDOT. PORTABILITY then lets a surviving spouse claim the deceased spouse's unused exclusion, but the election is NOT automatic: a timely estate tax return must be filed even when no tax is due, and missing it forfeits the benefit permanently." },
          { kind: "bullets", items: ["The ANNUAL GIFT EXCLUSION lets a donor give a set amount per recipient per year, indexed for inflation, with no gift tax and no return required.", "Gift SPLITTING lets a married couple treat a gift as made half by each, doubling the exclusion.", "Direct payments of TUITION to the school and MEDICAL expenses to the provider are unlimited and excluded entirely.", "Inherited assets generally receive a STEP-UP in basis to fair market value at death; GIFTED assets carry over the donor's basis.", "That basis difference is why appreciated assets are often better held until death and depreciated assets better sold during life."] },
          { kind: "callout", label: "Gift now or bequeath later", body: "A donor giving appreciated stock passes their low basis to the recipient, who owes tax on the full gain when they sell. The same stock inherited at death gets a step-up to date-of-death value, erasing that gain. This single asymmetry drives a large share of real estate planning decisions." },
        ],
      },
    ],
    keyTerms: [
      { term: "Probate", def: "The court process of validating a will and settling an estate; often public, slow, and costly." },
      { term: "Revocable living trust", def: "A trust that avoids probate and keeps control during life, but gives no estate-tax savings alone." },
      { term: "Durable power of attorney", def: "A document naming someone to manage finances if the client becomes incapacitated." },
      { term: "Annual gift tax exclusion", def: "An amount you can give each recipient per year free of gift tax, shrinking a taxable estate." },
      { term: "Step-up in basis", def: "Resetting an inherited asset's basis to date-of-death value, often erasing capital-gains tax." },
    ],
    takeaways: [
      "Wills go through probate; trusts and beneficiary designations can avoid it.",
      "Beneficiary designations override the will — keep them current.",
      "Durable POA and healthcare directives handle incapacity, not just death.",
      "Annual gifting, the marital deduction, and step-up in basis transfer wealth tax-efficiently.",
    ],
  },

  {
    id: "cfp-investment",
    examSlug: "cfp",
    topicId: "investment",
    topicName: "Investment Planning",
    title: "Investment Planning: Risk, Return, and Asset Allocation",
    readingMinutes: 3,
    summary: "The risk-return tradeoff, the types of risk, diversification and correlation, and how asset allocation drives a client's results.",
    intro:
      "Investment planning translates a client's goals into a portfolio. A CFP professional must understand how risk and return relate, the kinds of risk a portfolio faces, why diversification works, and how asset allocation — far more than security selection — drives long-run outcomes. The aim isn't to pick winners; it's to build a portfolio the client can actually stick with.",
    sections: [
      {
        heading: "Risk, return, and the types of risk",
        blocks: [
          { kind: "p", text: "The central tradeoff is simple: higher expected return requires accepting higher risk (variability of outcomes), and no strategy escapes it. Risk comes in two broad families. Systematic (market) risk — recessions, interest-rate moves, inflation — affects everything and cannot be diversified away. Unsystematic risk is specific to a company or sector (a product recall, a default) and CAN be reduced by holding many uncorrelated investments. Within these sit named risks the exam expects: interest-rate risk, inflation (purchasing-power) risk, default/credit risk, liquidity risk, and reinvestment risk." },
          { kind: "callout", label: "Only systematic risk is rewarded", body: "Because unsystematic risk can be diversified away for free, the market doesn't pay you to bear it. Expected return compensates you for systematic (market) risk — the intuition behind beta and the capital asset pricing model." },
        ],
      },
      {
        heading: "Diversification and correlation",
        blocks: [
          { kind: "p", text: "Diversification works because assets don't move in lockstep. Combining investments with low or negative correlation reduces a portfolio's overall volatility for a given expected return — the only true 'free lunch' in investing. The lower the correlation between holdings, the greater the risk reduction. This is why a portfolio is built across asset classes (stocks, bonds, cash, real assets) and within them, rather than concentrated in a few favorites, however attractive." },
          { kind: "p", text: "Returns are measured carefully. The holding-period return captures total gain (income plus price change) over a period. When cash flows are added or withdrawn, the time-weighted return measures the manager's performance (it strips out the timing of the client's deposits), while the dollar-weighted (money-weighted) return reflects the client's actual experience including timing. Always adjust for inflation to judge real purchasing power, and for taxes to judge what the client keeps." },
        ],
      },
      {
        heading: "Asset allocation drives results",
        blocks: [
          { kind: "p", text: "The most consequential decision is asset allocation — the mix among asset classes — which research credits with the large majority of the variability in a portfolio's returns over time, far more than individual security selection or market timing. Strategic asset allocation sets long-term target weights from the client's goals, time horizon, and risk tolerance, then rebalances back to them as markets drift. Rebalancing mechanically sells what has risen and buys what has lagged, controlling risk and enforcing discipline. The planner's job is to set an allocation the client understands and can hold through downturns — because the best portfolio is the one the client won't abandon at the bottom." },
        ],
      },
    ],
    keyTerms: [
      { term: "Systematic vs unsystematic risk", def: "Market-wide risk that can't be diversified away vs company-specific risk that can; only systematic risk is rewarded." },
      { term: "Correlation", def: "How closely two assets move together; combining low-correlation assets reduces portfolio volatility." },
      { term: "Time-weighted vs dollar-weighted return", def: "Time-weighted judges the manager (ignores cash-flow timing); dollar-weighted reflects the client's actual experience." },
      { term: "Strategic asset allocation", def: "Long-term target weights set from goals and risk tolerance, maintained by rebalancing." },
      { term: "Rebalancing", def: "Restoring target weights by selling winners and buying laggards, controlling risk and enforcing discipline." },
    ],
    takeaways: [
      "Higher expected return demands higher risk; only systematic (market) risk is compensated.",
      "Low correlation is the engine of diversification — it cuts volatility for a given return.",
      "Use time-weighted return to judge a manager, dollar-weighted to reflect the client; adjust for inflation and taxes.",
      "Asset allocation drives most of long-run results — set a strategic mix the client can actually stick with, and rebalance.",
    ],
  },

  {
    id: "cfp-education",
    examSlug: "cfp",
    topicId: "education",
    topicName: "Education Planning",
    title: "Education Planning: 529s, ESAs, and Education Tax Breaks",
    readingMinutes: 3,
    summary: "The tax-advantaged ways to save for school, how custodial accounts and financial aid interact, and the education tax credits.",
    intro:
      "Funding education is one of the most common planning goals, and the tools have very different rules. A CFP professional needs to know which savings vehicle fits, how each is treated for taxes and financial aid, and how to capture the education tax credits that reduce the family's bill.",
    sections: [
      {
        heading: "The main savings vehicles",
        blocks: [
          { kind: "p", text: "The 529 plan is the workhorse: contributions grow tax-free and distributions are tax-free when used for qualified education expenses, with high lifetime contribution limits and the account owner (usually a parent) keeping control. A Coverdell Education Savings Account (ESA) also grows tax-free for qualified expenses but is capped at $2,000 per beneficiary per year and phases out at higher incomes — its advantage is broad flexibility for K-12 as well as college. Custodial accounts (UTMA/UGMA) aren't education-specific: the assets become the child's at the age of majority and can be spent on anything, with earnings subject to the 'kiddie tax.'" },
          { kind: "callout", label: "529 gifting trick", body: "A 529 lets a donor 'superfund' by contributing up to five years of annual gift-tax exclusions at once (per beneficiary) without using lifetime exemption — a powerful way to move money and growth out of a taxable estate quickly." },
        ],
      },
      {
        heading: "Financial aid interaction",
        blocks: [
          { kind: "p", text: "How an account is owned affects financial aid. Assets owned by the parent (including a parent-owned 529) are assessed at a relatively low rate in the aid formula, while assets owned by the student (such as a UTMA/UGMA) are assessed much more heavily — so a custodial account can reduce aid eligibility more than a parent-owned 529. This ownership nuance is a frequent planning point: the same dollars can help or hurt depending on whose name they're in." },
        ],
      },
      {
        heading: "Education tax credits",
        blocks: [
          { kind: "p", text: "Two credits cut the tax bill directly. The American Opportunity Tax Credit (AOTC) is worth up to $2,500 per student for the first four years of undergraduate study and is partially refundable. The Lifetime Learning Credit is worth up to $2,000 per tax return (20% of up to $10,000 of expenses), with no year limit, covering graduate and continuing education. Both phase out at higher incomes, you generally can't claim both for the same student in the same year, and you can't double-dip by using tax-free 529 dollars and a credit for the same expense. There's also an above-the-line deduction for student-loan interest. Coordinating these with savings withdrawals is where the planner adds value." },
        ],
      },
    ],
    keyTerms: [
      { term: "529 plan", def: "A high-limit, owner-controlled account that grows tax-free for qualified education expenses." },
      { term: "Coverdell ESA", def: "A $2,000/year, income-limited education account, flexible for K-12 and college, growing tax-free for qualified costs." },
      { term: "UTMA/UGMA (custodial)", def: "Accounts that become the child's at majority; usable for anything, with earnings subject to the kiddie tax." },
      { term: "American Opportunity Tax Credit", def: "Up to $2,500 per student for the first four undergraduate years, partially refundable." },
      { term: "Lifetime Learning Credit", def: "Up to $2,000 per return (20% of $10,000), with no year limit, covering graduate/continuing education." },
    ],
    takeaways: [
      "529s offer tax-free growth, high limits, and owner control; Coverdell ESAs add K-12 flexibility but cap at $2,000/year.",
      "Account ownership matters for aid: parent-owned assets count far less than student-owned custodial accounts.",
      "Capture the AOTC ($2,500) and Lifetime Learning Credit ($2,000) — but don't double-dip with tax-free 529 dollars.",
      "Superfunding a 529 (5 years of gifts at once) moves money and growth out of the estate fast.",
    ],
  },

  {
    id: "cfp-psychology",
    examSlug: "cfp",
    topicId: "psychology",
    topicName: "Psychology of Financial Planning",
    title: "The Psychology of Financial Planning",
    readingMinutes: 3,
    summary: "The behavioral biases that derail good plans, the money beliefs clients carry, and how a planner coaches rather than just calculates.",
    intro:
      "A technically perfect plan fails if the client won't follow it. The newest CFP domain recognizes that financial planning is as much about behavior as math: understanding the biases and beliefs that drive decisions, communicating in a way that builds trust, and helping clients act in their own long-term interest.",
    sections: [
      {
        heading: "Cognitive vs emotional biases",
        blocks: [
          { kind: "p", text: "Behavioral biases split into two types, and the distinction matters for how you address them. Cognitive errors are faulty reasoning — they can be corrected with information and better process. Examples: anchoring (over-relying on a reference number), availability (overweighting vivid recent events), confirmation bias (seeking agreeing evidence), and framing (deciding differently based on how a choice is worded). Emotional biases arise from feelings and are harder to correct — you often must adapt to them rather than argue them away. Examples: loss aversion (feeling losses about twice as intensely as equal gains), overconfidence, regret aversion, and status-quo/inertia bias." },
          { kind: "callout", label: "Adapt or moderate", body: "A practical rule: for cognitive biases, educate and improve the process to MODERATE them; for deep emotional biases, it's often wiser to ADAPT the plan to the client's psychology so they'll actually stick to it. Fighting a strong emotional bias head-on usually loses." },
        ],
      },
      {
        heading: "Money scripts and how biases show up",
        blocks: [
          { kind: "p", text: "Clients carry 'money scripts' — often unconscious beliefs about money formed in childhood (money avoidance, money worship, money status, money vigilance) that quietly drive behavior. Biases surface in predictable, damaging ways: investors hold losers too long (loss aversion) and sell winners too soon, chase recent performance (recency), follow the crowd into bubbles (herding), and freeze on important decisions (status-quo bias). The planner's job is to recognize the pattern behind a client's resistance, not just to repeat the spreadsheet." },
        ],
      },
      {
        heading: "Communication and counseling",
        blocks: [
          { kind: "p", text: "Because behavior drives outcomes, communication is a core skill. Effective planners use active listening, open-ended questions, and empathy to understand a client's goals and fears, and they frame recommendations around the client's own values rather than jargon. Building trust and rapport is what allows a planner to coach a client through a market panic — the moment when behavior, not analysis, determines whether the plan survives. In short: the CFP professional is part analyst, part behavioral coach, and the second role often decides success." },
        ],
      },
    ],
    keyTerms: [
      { term: "Cognitive bias", def: "A faulty-reasoning error (anchoring, availability, confirmation, framing) that can be corrected with information and process." },
      { term: "Emotional bias", def: "A feeling-driven error (loss aversion, overconfidence, regret aversion) that is often better adapted to than argued away." },
      { term: "Loss aversion", def: "Feeling losses roughly twice as intensely as equal gains, leading to holding losers and selling winners too early." },
      { term: "Money scripts", def: "Often-unconscious beliefs about money formed early in life that quietly drive financial behavior." },
      { term: "Adapt vs moderate", def: "Moderate (correct) cognitive biases through education; adapt the plan around strong emotional biases." },
    ],
    takeaways: [
      "Cognitive biases can be corrected with better information; emotional biases usually must be adapted to.",
      "Watch for loss aversion, recency, herding, overconfidence, and status-quo inertia — they wreck good plans.",
      "Money scripts from childhood quietly drive behavior; address the pattern, not just the math.",
      "Communication and trust are what let a planner coach a client through panic — behavior decides whether the plan survives.",
    ],
  },

  {
    id: "cfp-benefits",
    examSlug: "cfp",
    topicId: "benefits",
    topicName: "Employee Benefits & Equity Comp",
    title: "Employee Benefits and Equity Compensation",
    readingMinutes: 4,
    summary: "Group benefits, the tax-advantaged spending accounts, and how stock options and RSUs are taxed — the workplace side of a financial plan.",
    intro:
      "A large share of a client's wealth and protection comes through their employer. The CFP professional must understand group benefits, the alphabet soup of tax-advantaged accounts, and — increasingly — how equity compensation like stock options and RSUs is taxed, since a single grant can dwarf a salary.",
    sections: [
      {
        heading: "Group benefits and spending accounts",
        blocks: [
          { kind: "p", text: "Employers commonly provide group life and disability insurance (cheaper than individual coverage but often not portable), and group health plans (HMO, PPO, high-deductible plans). Tax-advantaged accounts stretch those dollars: a Flexible Spending Account (FSA) lets employees set aside pre-tax money for medical or dependent-care costs but is largely 'use it or lose it'; a Health Savings Account (HSA), paired with a high-deductible plan, offers a triple tax advantage and rolls over year to year. A cafeteria (Section 125) plan lets employees choose among pre-tax benefits." },
          { kind: "callout", label: "COBRA", body: "COBRA lets employees continue group health coverage after leaving a job (typically up to 18 months), but they pay the full premium plus an administrative fee — so it's often expensive." },
        ],
      },
      {
        heading: "Equity compensation",
        blocks: [
          { kind: "p", text: "Stock-based pay is taxed differently depending on type. With a non-qualified stock option (NSO), the bargain element (market price minus exercise price) is taxed as ORDINARY income at exercise. An incentive stock option (ISO) can receive favorable long-term capital gains treatment if holding-period rules are met, but the bargain element is an AMT preference item at exercise. Restricted stock units (RSUs) are taxed as ordinary income when they VEST, based on the share value at vesting." },
          { kind: "table", table: { caption: "Table 1 — How equity comp is taxed.", headers: ["Type", "Tax treatment"], rows: [["NSO", "Bargain element taxed as ordinary income at exercise"], ["ISO", "Possible LTCG if holding rules met; bargain element is an AMT item"], ["RSU", "Ordinary income at vesting, on the vest-date value"]] } },
        ],
      },
      {
        heading: "Concentration risk",
        blocks: [
          { kind: "p", text: "Equity compensation often leaves a client dangerously concentrated in their employer's stock — the same source as their paycheck, so a downturn can hit income and portfolio at once. The planner's job is to diversify prudently over time, mindful of taxes, trading windows, and any company holding requirements. The behavioral pull to hold 'my company's' stock is strong, which is exactly why a disciplined diversification plan matters." },
        ],
      },
    ],
    keyTerms: [
      { term: "Group life/disability insurance", def: "Employer-provided coverage, cheaper but often not portable when you leave." },
      { term: "Flexible Spending Account (FSA)", def: "Pre-tax account for medical/dependent-care costs, largely use-it-or-lose-it." },
      { term: "Health Savings Account (HSA)", def: "Triple-tax-advantaged account paired with a high-deductible health plan; rolls over." },
      { term: "Cafeteria (Section 125) plan", def: "A plan letting employees choose among pre-tax benefit options." },
      { term: "COBRA", def: "Continuation of group health coverage after leaving a job, at the employee's full cost." },
      { term: "Non-qualified stock option (NSO)", def: "Option whose bargain element is taxed as ordinary income at exercise." },
      { term: "Incentive stock option (ISO)", def: "Option eligible for LTCG treatment if held long enough; the bargain element is an AMT preference." },
      { term: "Restricted stock unit (RSU)", def: "Equity taxed as ordinary income at vesting on the vest-date value." },
      { term: "Bargain element", def: "Market price minus exercise price on an option at exercise." },
      { term: "Vesting", def: "When an employee gains nonforfeitable rights to a benefit or grant." },
      { term: "Concentration risk", def: "Excessive exposure to one holding (often employer stock), tying income and portfolio together." },
      { term: "Deferred compensation", def: "Pay earned now but received (and taxed) in a later year." },
    ],
    takeaways: [
      "Group benefits are cheap but often non-portable; HSAs (triple-tax) beat FSAs (use-it-or-lose-it).",
      "NSOs are ordinary income at exercise; ISOs can get LTCG but trigger AMT; RSUs are ordinary income at vesting.",
      "Equity comp often creates dangerous concentration in employer stock — diversify deliberately.",
      "COBRA continues health coverage after a job, but at full cost.",
    ],
  },

  {
    id: "cfp-income",
    examSlug: "cfp",
    topicId: "income",
    topicName: "Retirement Income Planning",
    title: "Retirement Income: Annuities, Withdrawals, and Sequence Risk",
    readingMinutes: 4,
    summary: "Turning a nest egg into income — annuity types and payouts, sustainable withdrawal strategies, and the sequence-of-returns risk that sinks retirees.",
    intro:
      "Accumulating a nest egg is only half the job; converting it into income that lasts is the harder half. The CFP professional must know the annuity menu, sustainable withdrawal strategies, and the sequence-of-returns risk that can sink an otherwise-adequate portfolio if a bad market hits early in retirement.",
    sections: [
      {
        heading: "Annuities",
        blocks: [
          { kind: "p", text: "Annuities convert savings into income. A fixed annuity guarantees a rate and is the insurer's obligation; a variable annuity invests in subaccounts so returns and risk pass to the owner; an indexed annuity ties returns to an index with caps and floors. An immediate annuity starts paying right away (good for longevity risk), while a deferred annuity grows first. Payout options trade income for protection: a life-only option pays the most but stops at death; joint-and-survivor and period-certain options pay less but protect a spouse or beneficiary." },
          { kind: "callout", label: "The longevity-risk tool", body: "An immediate annuity is the cleanest hedge against longevity risk — outliving your money — because it guarantees income for life. The cost is liquidity: once annuitized, the lump sum is gone." },
        ],
      },
      {
        heading: "Sustainable withdrawals",
        blocks: [
          { kind: "p", text: "For a self-managed portfolio, the question is how much can be withdrawn without running out. The classic '4% rule' suggests withdrawing about 4% of the initial portfolio in year one, then adjusting for inflation, as a starting point for a ~30-year horizon — a guideline, not a guarantee. More dynamic approaches adjust spending with market performance. Tax-efficient withdrawal sequencing (which accounts to tap first) and managing required minimum distributions can materially extend a portfolio's life." },
          { kind: "example", example: { title: "the 4% starting withdrawal", prompt: "A retiree has a $1,000,000 portfolio. Using the 4% guideline, what is the first-year withdrawal?", steps: ["First-year withdrawal = 4% × $1,000,000.", "= $40,000.", "In later years, adjust the $40,000 up for inflation, not recalculated off the balance."], answer: "$40,000 in year one, then inflation-adjusted — a starting framework for a ~30-year retirement." } },
        ],
      },
      {
        heading: "Sequence-of-returns risk",
        blocks: [
          { kind: "p", text: "Two retirees with the SAME average return can end up wildly differently depending on the ORDER of returns. Poor returns early in retirement — while withdrawals are being taken — permanently shrink the base that later gains compound on, a danger called sequence-of-returns risk. It's why retirees hold a cushion of cash/bonds to avoid selling stocks into a downturn, and why Monte Carlo simulation (which tests many return orderings) is more honest than a single average-return projection." },
        ],
      },
    ],
    keyTerms: [
      { term: "Fixed annuity", def: "An annuity guaranteeing a rate; the insurer bears the investment risk." },
      { term: "Variable annuity", def: "An annuity investing in subaccounts; returns and risk pass to the owner." },
      { term: "Indexed annuity", def: "An annuity tying returns to an index with caps and floors." },
      { term: "Immediate vs deferred annuity", def: "One that begins paying now vs one that grows before paying." },
      { term: "Life-only payout", def: "The highest annuity income, but payments stop at the annuitant's death." },
      { term: "Joint-and-survivor payout", def: "Lower income that continues to a surviving spouse." },
      { term: "Longevity risk", def: "The risk of outliving your assets, hedged by lifetime income like an annuity." },
      { term: "4% rule", def: "A guideline to withdraw ~4% of the initial portfolio, then adjust for inflation." },
      { term: "Sequence-of-returns risk", def: "The danger that poor early-retirement returns, amid withdrawals, permanently impair a portfolio." },
      { term: "Withdrawal sequencing", def: "Choosing which accounts to draw first for tax efficiency and longevity." },
      { term: "Required minimum distribution (RMD)", def: "Mandatory taxable withdrawals from traditional accounts starting at the statutory age." },
      { term: "Monte Carlo simulation", def: "Testing many return sequences to estimate the probability a plan succeeds." },
    ],
    takeaways: [
      "Annuities convert savings to income: fixed (insurer risk), variable (owner risk), indexed (capped); immediate annuities hedge longevity.",
      "The 4% rule is a starting withdrawal guideline (~30-year horizon), then inflation-adjusted.",
      "Sequence-of-returns risk means the ORDER of returns matters — bad early years amid withdrawals do lasting damage.",
      "Hold a cash/bond cushion and use Monte Carlo, not a single average, to plan income.",
    ],
  },

  {
    id: "cfp-trusts",
    examSlug: "cfp",
    topicId: "trusts",
    topicName: "Trusts & Advanced Estate Strategies",
    title: "Trusts and Advanced Estate Strategies",
    readingMinutes: 3,
    summary: "The major trust types and the estate-tax tools — revocable vs irrevocable, ILITs, bypass and QTIP trusts, portability, and the GST tax.",
    intro:
      "Beyond a basic will, trusts are the workhorses of estate planning. The CFP professional must know the major trust types and what each accomplishes, plus the estate-tax levers — portability, the marital deduction, and generation-skipping — that move wealth efficiently across generations.",
    sections: [
      {
        heading: "Revocable vs irrevocable trusts",
        blocks: [
          { kind: "p", text: "A revocable living trust lets the grantor keep control and amend or revoke it during life; it avoids probate (privacy and speed) but offers NO estate-tax savings or creditor protection, because the grantor still effectively owns the assets. An irrevocable trust gives up that control — the grantor generally can't amend it — and in exchange can remove assets from the taxable estate and shield them from creditors. The trade-off is always control versus tax/protection benefits." },
          { kind: "callout", label: "The core trade-off", body: "Keep control (revocable) → probate avoidance only, no tax savings. Give up control (irrevocable) → potential estate-tax and creditor benefits. You generally can't have both." },
        ],
      },
      {
        heading: "Specialized trusts",
        blocks: [
          { kind: "p", text: "Several irrevocable trusts solve specific problems. An irrevocable life insurance trust (ILIT) owns a life policy so the death benefit passes outside the taxable estate — powerful because life insurance proceeds are otherwise included if the insured owned the policy. A bypass (credit-shelter) trust uses a deceased spouse's exemption to shelter assets from estate tax at the second death. A QTIP trust qualifies for the marital deduction while letting the first spouse control the ultimate beneficiaries (common in blended families). A grantor trust shifts assets but keeps the grantor responsible for income tax, which can be a feature." },
        ],
      },
      {
        heading: "The transfer-tax toolkit",
        blocks: [
          { kind: "p", text: "The estate and gift tax shares a unified lifetime exemption, and the unlimited marital deduction lets spouses transfer any amount to each other tax-free. Portability lets a surviving spouse use a deceased spouse's unused exemption. The annual gift tax exclusion (per recipient, per year) shrinks an estate without using the lifetime exemption. The generation-skipping transfer (GST) tax is a separate tax on transfers that skip a generation (e.g., to grandchildren), preventing families from avoiding a layer of estate tax. And the step-up in basis resets inherited assets to date-of-death value, often erasing capital-gains tax on a lifetime of appreciation." },
        ],
      },
    ],
    keyTerms: [
      { term: "Revocable living trust", def: "A trust the grantor controls and can amend; avoids probate but gives no tax savings." },
      { term: "Irrevocable trust", def: "A trust the grantor can't amend; can remove assets from the estate and shield from creditors." },
      { term: "Irrevocable life insurance trust (ILIT)", def: "Owns a life policy so the death benefit passes outside the taxable estate." },
      { term: "Bypass (credit-shelter) trust", def: "Uses a deceased spouse's exemption to shelter assets from estate tax at the second death." },
      { term: "QTIP trust", def: "Qualifies for the marital deduction while the first spouse controls the ultimate beneficiaries." },
      { term: "Grantor trust", def: "A trust whose income is taxed to the grantor, sometimes used intentionally." },
      { term: "Unlimited marital deduction", def: "Allows spouses to transfer any amount to each other free of gift/estate tax." },
      { term: "Portability", def: "A surviving spouse's ability to use a deceased spouse's unused estate-tax exemption." },
      { term: "Annual gift tax exclusion", def: "An amount giftable per recipient per year without using lifetime exemption." },
      { term: "Lifetime exemption", def: "The cumulative amount sheltered from gift and estate tax." },
      { term: "Generation-skipping transfer (GST) tax", def: "A separate tax on transfers that skip a generation (e.g., to grandchildren)." },
      { term: "Step-up in basis", def: "Resetting an inherited asset's basis to date-of-death value, erasing prior gains." },
    ],
    takeaways: [
      "Revocable trusts avoid probate but save no tax; irrevocable trusts trade control for estate-tax and creditor benefits.",
      "ILITs keep life insurance out of the estate; bypass trusts use a spouse's exemption; QTIPs serve blended families.",
      "Marital deduction, portability, annual exclusion, and lifetime exemption are the transfer-tax levers.",
      "The GST tax stops skipping a generation tax-free; step-up in basis erases a lifetime of capital gains at death.",
    ],
  },

  {
    id: "cfp-tvm",
    examSlug: "cfp",
    topicId: "tvm",
    topicName: "Time Value of Money",
    title: "Time Value of Money and Financial Calculations",
    readingMinutes: 5,
    summary: "The quantitative engine of planning — present and future value, annuities, and the goal-funding calculations behind every retirement and education plan.",
    intro:
      "Almost every CFP recommendation rests on a time-value-of-money calculation: how much to save, whether a goal is on track, what a stream of payments is worth today. This chapter builds the core math — present and future value, annuities, and the inflation-adjusted goal calculations the exam demands — so the numbers behind the plan are sound.",
    sections: [
      {
        heading: "Present and future value",
        blocks: [
          { kind: "p", text: "Money has time value: a dollar today is worth more than a dollar tomorrow because it can earn a return. FUTURE VALUE compounds a present amount forward at a rate; PRESENT VALUE discounts a future amount back to today. The five variables that drive every calculation are present value (PV), future value (FV), the interest rate (i), the number of periods (n), and the payment (PMT). Given any four, you solve for the fifth — the foundation of a financial calculator. Compounding more frequently than annually raises the effective rate, so always match the rate and the number of periods to the compounding frequency." },
          { kind: "formula", formula: { label: "Future value of a lump sum", expr: "FV = PV × (1 + i)ⁿ", note: "Discounting just rearranges this: PV = FV ÷ (1 + i)ⁿ." } },
        ],
      },
      {
        heading: "Annuities and goal funding",
        blocks: [
          { kind: "p", text: "An ANNUITY is a series of equal payments. An ordinary annuity pays at the END of each period (most loans and bonds); an annuity DUE pays at the BEGINNING (most rents and savings deposits), making it worth slightly more because each payment compounds one extra period. Planning problems chain these together: to fund a future goal you compute the future value needed, then solve for the level payment (PMT) that accumulates it. Education and retirement problems add a twist — the goal grows with inflation, and the savings earn a return, so the exam often asks for the INFLATION-ADJUSTED (real) rate of return." },
          { kind: "example", example: { title: "saving for a goal", prompt: "A client needs $50,000 in 10 years and can earn 6% annually. Roughly how much must they invest TODAY as a lump sum?", steps: ["PV = FV ÷ (1 + i)ⁿ = 50,000 ÷ (1.06)¹⁰.", "(1.06)¹⁰ ≈ 1.7908.", "PV = 50,000 ÷ 1.7908 ≈ 27,920."], answer: "About $27,920 invested today grows to $50,000 in 10 years at 6%. If instead they save annually, you'd solve for PMT rather than PV." } },
        ],
      },
      {
        heading: "Real returns and serial payments",
        blocks: [
          { kind: "p", text: "Because goals inflate, planners often work in real terms. The inflation-adjusted (real) rate is found by dividing, not just subtracting: [(1 + nominal) ÷ (1 + inflation)] − 1, which is slightly less than the simple difference. Some goals require SERIAL payments that grow each year with inflation rather than a level payment; these keep the saving constant in purchasing-power terms. The net present value (NPV) and internal rate of return (IRR) extend the same machinery to uneven cash flows, letting a planner compare investments or evaluate whether a stream of costs and benefits is worthwhile." },
        ],
      },
    ],
    keyTerms: [
      { term: "Time value of money", def: "The principle that a dollar today is worth more than a dollar later." },
      { term: "Future value (FV)", def: "What a present amount grows to at a given rate and time." },
      { term: "Present value (PV)", def: "Today's worth of a future amount, found by discounting." },
      { term: "Interest rate (i)", def: "The growth or discount rate per period." },
      { term: "Number of periods (n)", def: "The count of compounding periods in a calculation." },
      { term: "Payment (PMT)", def: "The equal periodic cash flow in an annuity." },
      { term: "Ordinary annuity", def: "Equal payments made at the END of each period." },
      { term: "Annuity due", def: "Equal payments made at the BEGINNING of each period; worth slightly more." },
      { term: "Compounding frequency", def: "How often interest is added; more frequent raises the effective rate." },
      { term: "Inflation-adjusted (real) rate", def: "[(1 + nominal) ÷ (1 + inflation)] − 1; used for inflating goals." },
      { term: "Serial payment", def: "A payment that grows each year with inflation to keep real saving constant." },
      { term: "Net present value (NPV)", def: "The discounted value of uneven cash flows minus cost." },
      { term: "Internal rate of return (IRR)", def: "The discount rate that sets NPV to zero; the compound return." },
    ],
    takeaways: [
      "Five variables — PV, FV, i, n, PMT — drive every TVM calculation; given four, solve the fifth.",
      "Future value compounds forward; present value discounts back: FV = PV × (1 + i)ⁿ.",
      "Annuity due (start-of-period) is worth more than an ordinary annuity (end-of-period).",
      "Inflating goals use the real rate [(1+nominal)/(1+inflation) − 1]; NPV/IRR handle uneven cash flows.",
    ],
  },

  {
    id: "cfp-cashflow",
    examSlug: "cfp",
    topicId: "cashflow",
    topicName: "Cash Flow & Debt Management",
    title: "Cash Flow, Debt, and Personal Financial Statements",
    readingMinutes: 4,
    summary: "The foundation of every plan — personal financial statements, budgeting and emergency reserves, and the debt and credit ratios that gauge financial health.",
    intro:
      "Before investing or insuring, a planner must understand a client's cash flow and balance sheet. The CFP exam tests personal financial statements, budgeting and emergency funds, and the debt-management ratios that signal whether a household is on solid ground. This is the groundwork the rest of the plan stands on.",
    sections: [
      {
        heading: "Personal financial statements",
        blocks: [
          { kind: "p", text: "Two statements describe a household. The STATEMENT OF FINANCIAL POSITION (personal balance sheet) lists assets at fair market value and liabilities at their outstanding balance; assets minus liabilities equals NET WORTH. The CASH FLOW STATEMENT lists income (inflows) and expenses (outflows) over a period; the surplus or deficit is what's available to save or what must be borrowed. These statements are the diagnostic starting point — a planner reads them to find savings capacity, dangerous debt, and assets that aren't working." },
          { kind: "callout", label: "Balance sheet vs cash flow", body: "The statement of financial position is a SNAPSHOT at a point in time (net worth today). The cash flow statement covers a PERIOD (the year's inflows and outflows). Assets are shown at current market value, not what was paid for them." },
        ],
      },
      {
        heading: "Budgeting and emergency reserves",
        blocks: [
          { kind: "p", text: "Budgeting allocates income across needs, wants, and savings, and the planner's first goal is usually an adequate EMERGENCY FUND. The common guideline is three to six months of nondiscretionary living expenses held in liquid, safe accounts — more for those with unstable income or a single earner, less for dual-income households with stable jobs. The emergency fund protects the rest of the plan: without it, a job loss or large expense forces selling investments at a bad time or taking on costly debt. Surplus cash flow then funds goals in priority order, typically after securing the reserve and any employer retirement match." },
        ],
      },
      {
        heading: "Debt and credit ratios",
        blocks: [
          { kind: "p", text: "Planners use ratios to judge debt health. The consumer (non-mortgage) debt ratio — monthly consumer debt payments divided by net (after-tax) monthly income — should generally stay at or below about 20%. The housing ratio — monthly housing costs divided by GROSS monthly income — is generally kept at or below 28%, and the total debt ratio (housing plus all other debt over gross income) at or below 36%, the classic 28/36 lending guideline. Beyond ratios, the planner distinguishes 'good' debt that builds wealth or has low rates from high-cost revolving debt that should be eliminated first, and weighs strategies like refinancing or debt consolidation." },
          { kind: "table", table: { caption: "Table 1 — Common debt-ratio guidelines.", headers: ["Ratio", "Guideline"], rows: [["Consumer debt ÷ net income", "≤ ~20%"], ["Housing ÷ gross income", "≤ 28%"], ["Total debt ÷ gross income", "≤ 36%"]] } },
        ],
      },
    ],
    keyTerms: [
      { term: "Statement of financial position", def: "A personal balance sheet of assets, liabilities, and net worth at a point in time." },
      { term: "Net worth", def: "Assets minus liabilities; the bottom line of the balance sheet." },
      { term: "Cash flow statement", def: "Income and expenses over a period, yielding a surplus or deficit." },
      { term: "Assets at fair market value", def: "Personal assets shown at current value, not original cost." },
      { term: "Budgeting", def: "Allocating income across needs, wants, and savings." },
      { term: "Emergency fund", def: "3–6 months of nondiscretionary expenses held in liquid, safe accounts." },
      { term: "Nondiscretionary expenses", def: "Essential costs (housing, food, utilities) the reserve must cover." },
      { term: "Consumer debt ratio", def: "Monthly non-mortgage debt payments ÷ net income; target ≤ ~20%." },
      { term: "Housing ratio", def: "Monthly housing costs ÷ gross income; target ≤ 28%." },
      { term: "Total debt ratio", def: "All debt payments ÷ gross income; target ≤ 36%." },
      { term: "28/36 guideline", def: "The classic housing/total-debt lending limits." },
      { term: "Debt consolidation", def: "Combining debts, often to lower the rate or simplify payments." },
    ],
    takeaways: [
      "The statement of financial position is a snapshot (net worth); the cash flow statement covers a period (surplus/deficit).",
      "Build an emergency fund of 3–6 months of nondiscretionary expenses before pursuing other goals (after any employer match).",
      "Keep consumer debt ≤ ~20% of net income, housing ≤ 28% and total debt ≤ 36% of gross income.",
      "Eliminate high-cost revolving debt first; consider refinancing or consolidation where it lowers cost.",
    ],
  },

  {
    id: "cfp-pc-health",
    examSlug: "cfp",
    topicId: "pc-health",
    topicName: "Property, Casualty & Health Insurance",
    title: "Property, Casualty, and Health Insurance",
    readingMinutes: 3,
    summary: "Protecting against everyday catastrophes — homeowners and auto coverage, liability and umbrella policies, and the health and long-term-care coverage that guards retirement.",
    intro:
      "Life and disability insurance protect income, but a plan is incomplete without coverage for property loss, liability, and medical costs. The CFP exam tests homeowners and auto policies, the umbrella liability that backs them, and the health and long-term-care coverage that can otherwise devastate a retirement. The unifying idea is transferring catastrophic risk.",
    sections: [
      {
        heading: "Risk management and property coverage",
        blocks: [
          { kind: "p", text: "Insurance is one of four risk-handling methods: avoid, reduce, retain, or TRANSFER. Insurance transfers risk, and the rule is to insure high-severity, low-frequency risks (a house fire) while retaining low-severity ones (a small deductible). Homeowners policies (forms HO-2 through HO-8) cover the dwelling, personal property, loss of use, and personal liability; HO-3, the most common, insures the dwelling on an open-perils basis and contents on named-perils. A crucial feature is the COINSURANCE clause: insure the dwelling to at least 80% of replacement cost or a partial loss is only partially reimbursed. Auto policies similarly bundle liability, collision, and comprehensive coverage." },
          { kind: "callout", label: "The coinsurance penalty", body: "If a homeowner insures below the required percentage (usually 80% of replacement cost), a partial-loss claim is reduced by the ratio of coverage carried to coverage required. Carrying $160,000 on a home requiring $200,000 (80% of a $250,000 replacement cost) pays only 160/200 = 80% of a partial loss." },
        ],
      },
      {
        heading: "Liability and umbrella coverage",
        blocks: [
          { kind: "p", text: "Liability exposure — being sued for injuring someone or damaging their property — can exceed the limits in a homeowners or auto policy. A personal UMBRELLA policy sits on top, providing an extra layer (commonly $1 million or more) above the underlying limits and broadening coverage to some claims the base policies exclude. Umbrellas are inexpensive relative to the protection because they only pay after the underlying coverage is exhausted, so they require the client to carry specified minimum underlying limits. For affluent clients with significant assets to protect, an umbrella is often the highest-value, lowest-cost recommendation a planner makes." },
        ],
      },
      {
        heading: "Health and long-term-care insurance",
        blocks: [
          { kind: "p", text: "Medical costs are a leading financial risk. Working-age clients use health plans defined by cost-sharing — the deductible (paid before coverage starts), copays and coinsurance (shared costs), and the out-of-pocket maximum (the annual cap). A high-deductible health plan paired with a Health Savings Account (HSA) offers a triple tax advantage: deductible contributions, tax-free growth, and tax-free qualified medical withdrawals. At 65, Medicare takes over: Part A (hospital), Part B (medical), Part C (Medicare Advantage), and Part D (drugs), often supplemented by Medigap. Finally, LONG-TERM-CARE insurance covers custodial care (help with activities of daily living) that Medicare largely does NOT — a major, often-overlooked retirement risk, with premiums that rise sharply the longer a client waits to buy." },
        ],
      },
    ],
    keyTerms: [
      { term: "Risk transfer", def: "Shifting risk to an insurer; one of avoid/reduce/retain/transfer." },
      { term: "Insure high-severity, low-frequency", def: "The rule to insure catastrophes and retain small risks." },
      { term: "Homeowners HO-3", def: "The common policy: open-perils on the dwelling, named-perils on contents." },
      { term: "Coinsurance clause", def: "Requires insuring to ~80% of replacement cost or face a partial-loss penalty." },
      { term: "Replacement cost", def: "The cost to rebuild/replace without depreciation, the basis for adequate coverage." },
      { term: "Auto coverage parts", def: "Liability, collision, and comprehensive bundled in an auto policy." },
      { term: "Personal umbrella policy", def: "Excess liability coverage above home/auto limits, broadly protective." },
      { term: "Deductible", def: "The amount paid out of pocket before insurance coverage begins." },
      { term: "Out-of-pocket maximum", def: "The annual cap on a member's cost-sharing in a health plan." },
      { term: "Health Savings Account (HSA)", def: "A triple-tax-advantaged account paired with a high-deductible health plan." },
      { term: "Medicare Parts A–D", def: "Hospital (A), medical (B), Advantage (C), and drug (D) coverage at 65." },
      { term: "Medigap", def: "Supplemental insurance covering Medicare's gaps." },
      { term: "Long-term-care insurance", def: "Covers custodial care for activities of daily living that Medicare largely excludes." },
      { term: "Activities of daily living (ADLs)", def: "Bathing, dressing, eating, etc.; trigger long-term-care benefits." },
    ],
    takeaways: [
      "Insurance transfers risk; insure high-severity, low-frequency losses and retain small ones.",
      "Homeowners HO-3 insures the dwelling on open perils; the coinsurance clause penalizes underinsuring below ~80% of replacement cost.",
      "A personal umbrella adds inexpensive excess liability above home/auto limits — high value for asset-rich clients.",
      "HSAs give triple tax benefits; Medicare (A–D) starts at 65; long-term-care insurance covers custodial care Medicare won't.",
    ],
  },
];

const questions: Question[] = [
  // General
  {
    id: "cfp-gen-q1", examSlug: "cfp", topicId: "general", topicName: "General Principles", difficulty: 1,
    stem: "A client's statement of financial position (personal balance sheet) shows assets of $400,000 and liabilities of $250,000. The client's net worth is:",
    choices: ["$150,000", "$650,000", "$250,000"],
    answerIndex: 0,
    explanation: "Net worth = assets − liabilities = $400,000 − $250,000 = $150,000. The statement of financial position captures a snapshot of what the client owns versus owes. Choice B incorrectly ADDS the two figures. Choice C simply restates liabilities. Net worth is the difference, and tracking its growth over time is a core measure of financial progress.",
  },
  {
    id: "cfp-gen-q2", examSlug: "cfp", topicId: "general", topicName: "General Principles", difficulty: 2,
    stem: "Under the CFP Board's standards, when providing financial advice a CFP professional must act as a:",
    choices: ["Salesperson maximizing commissions", "Fiduciary acting in the client's best interest", "Neutral party with no duty to the client"],
    answerIndex: 1,
    explanation: "CFP professionals must act as fiduciaries at all times when providing financial advice — placing the client's interests above their own, with a duty of loyalty and care and disclosure of conflicts. Choice A is the opposite of fiduciary conduct. Choice C is false; the entire CFP standard is built on owing the client a duty, not neutrality.",
  },
  {
    id: "cfp-gen-q3", examSlug: "cfp", topicId: "general", topicName: "General Principles", difficulty: 2,
    stem: "A general guideline for a client's emergency fund is to hold liquid reserves equal to roughly:",
    choices: ["One week of income", "Two years of expenses", "3–6 months of expenses"],
    answerIndex: 2,
    explanation: "The common guideline is three to six months of living expenses held in liquid, accessible accounts to cover unexpected events like job loss or medical bills. Choice A (one week) is far too little to weather a real disruption. Choice B (two years) ties up excessive cash earning low returns, which usually isn't an efficient use of the client's money.",
  },
  // Insurance
  {
    id: "cfp-ins-q1", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 2,
    stem: "A young couple needs maximum income-replacement life coverage for the lowest cost during their child-rearing years. The most appropriate choice is generally:",
    choices: ["Term life insurance", "Whole life insurance", "No insurance, to save money"],
    answerIndex: 0,
    explanation: "Term life provides pure, temporary protection at low cost — ideal for a large, time-limited need like income replacement during child-rearing years. Choice B (whole life) costs far more for the same death benefit because it builds cash value, reducing the coverage affordable on a budget. Choice C leaves dependents unprotected against the catastrophic risk of a breadwinner's death — exactly the risk that should be insured.",
  },
  {
    id: "cfp-ins-q2", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 2,
    stem: "Insurance is the most appropriate tool for risks that are:",
    choices: ["High-frequency and low-severity", "Low-frequency and high-severity", "Easily affordable out of pocket"],
    answerIndex: 1,
    explanation: "Insurance best transfers low-frequency, high-severity risks — rare events whose cost would be financially devastating (a home fire, premature death, major liability). Choices B and C describe small or frequent losses that are cheaper to retain (self-insure) than to insure, since paying premiums for losses you could absorb wastes money. Insure what you can't afford to lose; retain what you can.",
  },
  {
    id: "cfp-ins-q3", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 3,
    stem: "Which coverage protects a high-net-worth client's accumulated wealth from a large liability judgment exceeding their home and auto policy limits?",
    choices: ["Long-term care insurance", "Term life insurance", "An umbrella liability policy"],
    answerIndex: 2,
    explanation: "An umbrella policy provides excess liability coverage above the limits of underlying home and auto policies, shielding accumulated assets from a large lawsuit or judgment. Choice A (long-term care) covers custodial care costs, not liability. Choice B (term life) provides a death benefit, unrelated to liability protection. For wealthier clients, umbrella liability is an essential safeguard.",
  },
  // Tax
  {
    id: "cfp-tax-q1", examSlug: "cfp", topicId: "tax", topicName: "Tax Planning", difficulty: 2,
    stem: "Compared with a $1,000 tax deduction, a $1,000 tax credit for a taxpayer in the 24% bracket is:",
    choices: ["Worth more", "Worth less", "Exactly equal in value"],
    answerIndex: 0,
    explanation: "A credit reduces tax owed dollar-for-dollar, so a $1,000 credit cuts the tax bill by the full $1,000. A $1,000 deduction only reduces taxable income, saving the marginal rate × $1,000 = 0.24 × $1,000 = $240. So the credit (worth $1,000) is far more valuable than the deduction (worth $240). Choice B reverses the relationship; choice C ignores that deductions are only worth your marginal rate per dollar.",
  },
  {
    id: "cfp-tax-q2", examSlug: "cfp", topicId: "tax", topicName: "Tax Planning", difficulty: 3,
    stem: "An investor sells a stock at a loss and buys the same stock back 10 days later. The loss is:",
    choices: ["Fully deductible immediately", "Disallowed under the wash-sale rule", "Converted into a long-term gain"],
    answerIndex: 1,
    explanation: "The wash-sale rule disallows a capital loss if a substantially identical security is repurchased within 30 days before or after the sale — and 10 days falls inside that window. The disallowed loss is added to the basis of the new shares rather than lost entirely. Choice A ignores the rule. Choice C is nonsensical — a loss isn't converted into a gain; the wash-sale rule simply defers the loss.",
  },
  {
    id: "cfp-tax-q3", examSlug: "cfp", topicId: "tax", topicName: "Tax Planning", difficulty: 2,
    stem: "To receive preferential long-term capital gains tax rates, an investor must generally hold the asset for:",
    choices: ["At least 30 days", "More than five years", "More than one year"],
    answerIndex: 2,
    explanation: "A gain qualifies as long-term — taxed at preferential rates below ordinary income — when the asset is held for more than one year. A holding of a year or less produces a short-term gain taxed as ordinary income. Choice A (30 days) is far too short and relates to wash sales, not capital-gain holding periods. Choice B (five years) overstates the requirement for the general long-term rate.",
  },
  // Retirement
  {
    id: "cfp-ret-q1", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 2,
    stem: "A client expects to be in a HIGHER tax bracket in retirement than today. Between a traditional and a Roth account, which is generally more advantageous?",
    choices: ["Roth (tax-free withdrawals later)", "Traditional (deduct now)", "It never matters"],
    answerIndex: 0,
    explanation: "If the client expects a higher tax rate in retirement, a Roth wins: they pay tax now at the lower current rate and take withdrawals — including all growth — tax-free later when rates are higher. Choice B (traditional) is better when you expect a LOWER rate in retirement, taking the deduction now. Choice C is false; the comparison of current vs future tax rates is exactly what drives the decision.",
  },
  {
    id: "cfp-ret-q2", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 1,
    stem: "Withdrawing funds from a traditional IRA before age 59½ generally results in:",
    choices: ["No tax or penalty, since the funds were already taxed", "A 10% early-withdrawal penalty plus income tax", "A refundable credit applied against the yearâs tax"],
    answerIndex: 1,
    explanation: "Early withdrawals from a traditional IRA (before 59½) generally incur a 10% penalty on top of ordinary income tax, with only limited exceptions. This penalty exists to discourage tapping retirement funds early. Choice A ignores the penalty. Choice C is obviously incorrect — there is no bonus for early withdrawal.",
  },
  {
    id: "cfp-ret-q3", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 2,
    stem: "An employer offers to match 401(k) contributions up to 5% of salary. A planner would most likely advise the client to first:",
    choices: ["Skip the 401(k) and invest elsewhere", "Withdraw from the 401(k) for current spending", "Contribute at least enough to capture the full match"],
    answerIndex: 2,
    explanation: "Capturing the full employer match should be a top priority — it's an immediate, guaranteed return on the contribution (free money) before considering other investments. Choice A leaves that match on the table. Choice B defeats the purpose of a retirement account and could trigger penalties. Contributing enough to get the full match is one of the highest-value moves in a plan.",
  },
  // Estate
  {
    id: "cfp-est-q1", examSlug: "cfp", topicId: "estate", topicName: "Estate Planning", difficulty: 2,
    stem: "A client's will leaves everything to their spouse, but their life insurance names an ex-spouse as beneficiary. At death, the life insurance proceeds go to:",
    choices: ["The ex-spouse, per the beneficiary form", "The current spouse, per the will", "Whoever the probate court chooses"],
    answerIndex: 0,
    explanation: "Beneficiary designations on life insurance and retirement accounts pass assets directly to the named beneficiary and OVERRIDE the will. So the ex-spouse receives the proceeds despite the will's terms — a classic, costly mistake from outdated designations. Choice B wrongly assumes the will controls. Choice C is incorrect because these assets pass outside probate entirely. Keeping beneficiary designations current is essential.",
  },
  {
    id: "cfp-est-q2", examSlug: "cfp", topicId: "estate", topicName: "Estate Planning", difficulty: 2,
    stem: "A primary advantage of a revocable living trust over a will alone is that the trust:",
    choices: ["Eliminates all estate taxes", "Avoids probate, keeping the transfer private and faster", "Lets the grantor avoid managing the assets while alive"],
    answerIndex: 1,
    explanation: "A revocable living trust passes assets to beneficiaries outside of probate, providing privacy and speed compared with a will, which must be probated. Choice A overstates it — a revocable trust does NOT by itself save estate taxes, since the grantor retains control. Choice C is wrong; with a revocable trust the grantor typically remains in control of the assets during life.",
  },
  {
    id: "cfp-est-q3", examSlug: "cfp", topicId: "estate", topicName: "Estate Planning", difficulty: 3,
    stem: "An heir inherits stock that the deceased bought for $10,000 and was worth $50,000 at death. Because of the step-up in basis, the heir's cost basis is:",
    choices: ["$10,000 (the original cost)", "$0", "$50,000 (the date-of-death value)"],
    answerIndex: 2,
    explanation: "The step-up in basis resets an inherited asset's cost basis to its fair market value at the date of death — $50,000 here — so if the heir sells immediately, there's little to no capital-gains tax, erasing the $40,000 of appreciation that built up during the decedent's life. Choice A (original cost) ignores the step-up. Choice B ($0) is incorrect; basis steps up to market value, not to zero.",
  },

  // ---- General Principles ----
  {
    id: "cfp-gen-q4", examSlug: "cfp", topicId: "general", topicName: "General Principles", difficulty: 2,
    stem: "A grandparent funds a 529 plan for a grandchild's tuition. The earnings in the account:",
    choices: ["Grow tax-deferred and are tax-free if used for qualified expenses", "Grow tax-deferred but are fully taxable on any withdrawal", "Are taxed annually to the account owner as they accrue"],
    answerIndex: 0,
    explanation: "529 earnings accumulate tax-deferred and come out entirely tax-free when used for qualified education expenses. Non-qualified withdrawals are taxed on the earnings portion and carry a 10% penalty, which is the incentive holding the structure together. Contributions are made with after-tax dollars and receive no federal deduction, though many states offer one - a distinction that separates the 529 from a traditional retirement account.",
  },
  {
    id: "cfp-gen-q5", examSlug: "cfp", topicId: "general", topicName: "General Principles", difficulty: 2,
    stem: "A common guideline is that a household's total monthly housing costs should not exceed roughly what percent of gross monthly income (the front-end ratio)?",
    choices: ["50%", "28%", "75%"],
    answerIndex: 1,
    explanation: "The conventional front-end (housing) ratio guideline is about 28% of gross monthly income, with total debt (the back-end ratio) around 36%. Choice A (50%) would leave little room for other needs and signals over-extension. Choice C (75%) is far beyond any prudent housing burden.",
  },

  // ---- Risk Management & Insurance ----
  {
    id: "cfp-ins-q4", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 3,
    stem: "A Health Savings Account (HSA) offers a 'triple tax advantage' and must be paired with:",
    choices: ["Any employer-sponsored health plan", "A Medicare Advantage plan", "A qualifying high-deductible health plan"],
    answerIndex: 2,
    explanation: "An HSA — contributions deductible, growth tax-free, and qualified medical withdrawals tax-free — is available only to those covered by a qualifying high-deductible health plan. Choice A is wrong; eligibility is tied specifically to an HDHP. Choice B is incorrect because enrolling in Medicare ends HSA contribution eligibility.",
  },
  {
    id: "cfp-ins-q5", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 2,
    stem: "An immediate annuity is most useful for managing which retirement risk?",
    choices: ["Longevity risk, or outliving your assets", "Inflation risk eroding real purchasing power", "Liquidity risk when assets must be sold quickly"],
    answerIndex: 0,
    explanation: "An immediate annuity converts a lump sum into a guaranteed income stream for life, directly addressing longevity risk — the danger of outliving one's assets. Choice B is wrong; a fixed annuity can actually worsen inflation risk unless inflation-adjusted. Choice C is backwards — annuitizing reduces liquidity, it doesn't solve a liquidity problem.",
  },
  {
    id: "cfp-ins-q6", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 3,
    stem: "A disability policy with an 'own-occupation' definition pays benefits when the insured cannot perform:",
    choices: ["Any occupation whatsoever they could perform", "Duties of their own specific occupation", "Only jobs involving manual physical labor"],
    answerIndex: 1,
    explanation: "An 'own-occupation' policy pays if the insured cannot perform the duties of their own occupation, even if they could work in some other field — the most favorable (and costly) definition. Choice A describes the stricter 'any-occupation' standard, which pays only if you can't do any job. Choice C invents a limitation that isn't how the definitions work.",
  },

  // ---- Tax Planning ----
  {
    id: "cfp-tax-q4", examSlug: "cfp", topicId: "tax", topicName: "Tax Planning", difficulty: 2,
    stem: "A married couple filing jointly with $110,000 of taxable income receives $6,000 of qualified dividends. Those dividends are taxed at:",
    choices: ["The couple's ordinary marginal income tax rate", "A flat 20% rate applied to all qualified dividend income", "A preferential long-term capital gains rate of 0%, 15%, or 20%"],
    answerIndex: 2,
    explanation: "Qualified dividends are taxed at the long-term capital gains rates, which are 0%, 15%, or 20% depending on taxable income - a couple at $110,000 falls in the 15% bracket. To qualify, the payer must be a U.S. or qualified foreign corporation and the holding-period requirement must be met; otherwise the dividend is ordinary income taxed at marginal rates. The 20% rate applies only at the highest income levels, not universally.",
  },
  {
    id: "cfp-tax-q5", examSlug: "cfp", topicId: "tax", topicName: "Tax Planning", difficulty: 3,
    stem: "The Alternative Minimum Tax (AMT) is best described as:",
    choices: ["A parallel system adding back preference items to ensure a minimum tax", "An extra penalty assessed on taxpayers who file late", "A tax applied only to realized capital gains income"],
    answerIndex: 0,
    explanation: "The AMT is a parallel calculation that disallows or adds back certain deductions and preference items; taxpayers pay the higher of regular tax or AMT, ensuring high-income taxpayers with many preferences still pay a minimum. Choice B confuses it with a late-filing penalty. Choice C is wrong; the AMT spans far more than capital gains.",
  },
  {
    id: "cfp-tax-q6", examSlug: "cfp", topicId: "tax", topicName: "Tax Planning", difficulty: 2,
    stem: "On a personal return, taxable income is computed by subtracting from AGI the:",
    choices: ["The sum of all credits claimed on the return", "The greater of the standard or itemized deductions", "The total of all gross income received in the year"],
    answerIndex: 1,
    explanation: "Taxable income = AGI minus the greater of the standard deduction or total itemized deductions (and any qualified business income deduction). Choice A is wrong because credits reduce the tax itself, applied later, not taxable income. Choice C describes a starting point, not a subtraction.",
  },

  // ---- Retirement Planning ----
  {
    id: "cfp-ret-q4", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 2,
    stem: "Required minimum distributions (RMDs) from a traditional IRA now generally must begin at age:",
    choices: ["59½", "85", "73"],
    answerIndex: 2,
    explanation: "Under the SECURE 2.0 Act, RMDs from traditional retirement accounts generally begin at age 73. Choice A (59½) is the age after which withdrawals avoid the 10% early-withdrawal penalty — a different milestone. Choice B (85) is not an RMD age.",
  },
  {
    id: "cfp-ret-q5", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 2,
    stem: "A key advantage of a Roth IRA over a traditional IRA during the owner's lifetime is that the Roth:",
    choices: ["No required minimum distributions for the owner", "Requires minimum distributions starting at 73", "Gives an upfront deduction on contributions"],
    answerIndex: 0,
    explanation: "A Roth IRA has no RMDs during the original owner's lifetime, letting the balance keep compounding tax-free and offering estate-planning flexibility. Choice B describes traditional accounts. Choice C is the traditional IRA's feature; Roth contributions are made with after-tax dollars and are not deductible.",
  },
  {
    id: "cfp-ret-q6", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 1,
    stem: "'Catch-up' contributions to retirement accounts are an additional amount allowed for individuals who are:",
    choices: ["First-time savers", "Age 50 or older", "High earners only"],
    answerIndex: 1,
    explanation: "Catch-up contributions let those age 50 and older contribute above the standard limit to IRAs and workplace plans, helping late savers accelerate. Choice A is incorrect; the rule is about age, not whether you're new to saving. Choice C is wrong — eligibility is based on age, not income (and high earners face other Roth/limit rules).",
  },

  // ---- Estate Planning ----
  {
    id: "cfp-est-q4", examSlug: "cfp", topicId: "estate", topicName: "Estate Planning", difficulty: 2,
    stem: "The annual gift tax exclusion allows a person to give, free of gift tax, up to a set amount per year to:",
    choices: ["One recipient only, total", "Qualified charities exclusively", "Each recipient, per donee per year"],
    answerIndex: 2,
    explanation: "The annual exclusion applies per recipient per year, so a donor can gift the excluded amount to any number of individuals annually without using lifetime exemption or filing — a powerful way to shrink a taxable estate. Choice A wrongly caps it at a single recipient. Choice B is incorrect; the annual exclusion applies to gifts to individuals (charitable gifts have their own unlimited deduction).",
  },
  {
    id: "cfp-est-q5", examSlug: "cfp", topicId: "estate", topicName: "Estate Planning", difficulty: 2,
    stem: "Which document lets someone manage your finances if you become incapacitated (rather than at death)?",
    choices: ["A durable power of attorney", "A will", "A revocable trust's pour-over provision"],
    answerIndex: 0,
    explanation: "A durable power of attorney names an agent to handle financial matters and remains effective if you become incapacitated, avoiding a court-appointed guardianship. Choice B (a will) only operates at death. Choice C addresses asset transfer, not the authority to act on your behalf during incapacity.",
  },

  // ---- Investment Planning ----
  {
    id: "cfp-inv-q1", examSlug: "cfp", topicId: "investment", topicName: "Investment Planning", difficulty: 2,
    stem: "Which type of risk is rewarded with higher expected return because it cannot be diversified away?",
    choices: ["Unsystematic (company-specific) risk", "Systematic (market) risk", "Liquidity risk only"],
    answerIndex: 1,
    explanation: "Only systematic (market) risk is compensated, because unsystematic risk can be diversified away for free, so the market doesn't pay you to bear it. Choice A is diversifiable and therefore not rewarded. Choice C is one specific risk, not the broad category that drives expected return.",
  },
  {
    id: "cfp-inv-q2", examSlug: "cfp", topicId: "investment", topicName: "Investment Planning", difficulty: 2,
    stem: "Diversification reduces portfolio risk most effectively when the combined assets have:",
    choices: ["High positive correlation", "Identical returns", "Low or negative correlation"],
    answerIndex: 2,
    explanation: "The lower the correlation between holdings, the more their movements offset, reducing overall volatility for a given expected return — the core benefit of diversification. Choice A (high correlation) provides little risk reduction. Choice B would mean no diversification benefit at all.",
  },
  {
    id: "cfp-inv-q3", examSlug: "cfp", topicId: "investment", topicName: "Investment Planning", difficulty: 2,
    stem: "Research indicates that the largest driver of the variability in a portfolio's returns over time is:",
    choices: ["Asset allocation across the major classes", "Individual security selection", "Market timing of entries and exits"],
    answerIndex: 0,
    explanation: "Asset allocation — the strategic mix among asset classes — explains the large majority of the variability of returns over time, far more than security selection or timing. Choices B and C contribute less and are harder to do consistently, which is why planners focus first on the allocation a client can hold through downturns.",
  },

  // ---- Education Planning ----
  {
    id: "cfp-edu-q1", examSlug: "cfp", topicId: "education", topicName: "Education Planning", difficulty: 1,
    stem: "Earnings in a 529 plan used for qualified education expenses are:",
    choices: ["Taxed as ordinary income", "Federally tax-free", "Subject to a 10% penalty"],
    answerIndex: 1,
    explanation: "A 529 plan grows tax-free and qualified withdrawals are federally tax-free, the central advantage of the vehicle. Choice A ignores the tax benefit. Choice C (the 10% penalty) applies only to the earnings portion of NON-qualified withdrawals, not qualified ones.",
  },
  {
    id: "cfp-edu-q2", examSlug: "cfp", topicId: "education", topicName: "Education Planning", difficulty: 2,
    stem: "The American Opportunity Tax Credit is worth up to how much per student?",
    choices: ["$500, available for any year of enrollment", "$10,000, covering graduate and undergraduate study", "$2,500, for the first four undergraduate years"],
    answerIndex: 2,
    explanation: "The AOTC is worth up to $2,500 per student for the first four years of undergraduate study and is partially refundable. Choice A understates it. Choice B confuses it with the expense base used for the Lifetime Learning Credit (20% of up to $10,000 = $2,000).",
  },
  {
    id: "cfp-edu-q3", examSlug: "cfp", topicId: "education", topicName: "Education Planning", difficulty: 3,
    stem: "For financial aid purposes, assets generally reduce aid eligibility MOST when they are:",
    choices: ["Owned by the student (e.g., a UTMA/UGMA)", "Owned by the parent (e.g., a parent-owned 529)", "Held in a retirement account"],
    answerIndex: 0,
    explanation: "Student-owned assets are assessed at a much higher rate in the aid formula than parent-owned assets, so a custodial account can hurt aid more than a parent-owned 529. Choice B is assessed more gently. Choice C (retirement accounts) is generally excluded from the aid asset calculation.",
  },

  // ---- Psychology of Financial Planning ----
  {
    id: "cfp-psy-q1", examSlug: "cfp", topicId: "psychology", topicName: "Psychology of Financial Planning", difficulty: 3,
    stem: "The recommended approach is to MODERATE which kind of bias and ADAPT to the other?",
    choices: ["Moderate emotional biases; adapt to cognitive biases", "Moderate cognitive biases; adapt to emotional ones", "Treat both bias types identically"],
    answerIndex: 1,
    explanation: "Cognitive errors are reasoning flaws that can be corrected (moderated) with information and process; emotional biases are feeling-driven and usually better adapted to so the client stays committed to the plan. Choice A reverses the treatment, and choice C ignores the key distinction.",
  },
  {
    id: "cfp-psy-q2", examSlug: "cfp", topicId: "psychology", topicName: "Psychology of Financial Planning", difficulty: 2,
    stem: "A client holds a losing position for years while quickly selling gains. Loss aversion typically leads investors to:",
    choices: ["Trade excessively because of unwarranted confidence in their judgment", "Anchor future estimates to an initial price they happened to observe", "Hold losers too long to avoid crystallizing the loss they feel acutely"],
    answerIndex: 2,
    explanation: "Loss aversion means a loss is felt more intensely than a gain of the same size, so realizing it carries a psychological cost the investor postpones - producing exactly the disposition effect described. Overconfidence drives excessive trading and concentrated positions, a different behavior. Anchoring concerns fixating on an initial reference number when forming estimates, which may accompany the pattern but does not explain the reluctance to sell.",
  },
  {
    id: "cfp-psy-q3", examSlug: "cfp", topicId: "psychology", topicName: "Psychology of Financial Planning", difficulty: 2,
    stem: "A client insists that discussing money is inappropriate and that wealth corrupts, despite ample savings. A planner would identify these as:",
    choices: ["Money scripts, unconscious beliefs formed early that drive behavior", "Risk tolerance measures, quantifying willingness to accept volatility", "Cognitive errors that can be corrected by presenting better data"],
    answerIndex: 0,
    explanation: "Money scripts are unconscious beliefs about money, usually formed in childhood and often contradictory or self-limiting, that shape financial behavior without the client examining them. Surfacing them is a core planning conversation because they explain choices that financial logic cannot. Risk tolerance is a distinct, measurable construct, and money scripts are emotionally rooted rather than informational errors that better data would fix.",
  },

  // ---- Employee Benefits & Equity Comp ----
  {
    id: "cfp-ben-q1", examSlug: "cfp", topicId: "benefits", topicName: "Employee Benefits & Equity Comp", difficulty: 2,
    stem: "At exercise, the bargain element of a non-qualified stock option (NSO) is taxed as:",
    choices: ["A long-term capital gain", "Ordinary income", "Tax-free"],
    answerIndex: 1,
    explanation: "For an NSO, the bargain element (market price minus exercise price) is taxed as ordinary income at exercise. Choice A describes potential ISO treatment if holding rules are met. Choice C is wrong; the spread is taxable.",
  },
  {
    id: "cfp-ben-q2", examSlug: "cfp", topicId: "benefits", topicName: "Employee Benefits & Equity Comp", difficulty: 2,
    stem: "Restricted stock units (RSUs) are generally taxed as ordinary income:",
    choices: ["When granted, valued at the grant-date price", "Only when ultimately sold on the open market", "When they vest, valued at the vest-date price"],
    answerIndex: 2,
    explanation: "RSUs are taxed as ordinary income at vesting, valued at the share price on the vest date; later sales create capital gain or loss from that basis. Choice A is too early (grant isn't taxable). Choice B ignores the vesting event.",
  },
  {
    id: "cfp-ben-q3", examSlug: "cfp", topicId: "benefits", topicName: "Employee Benefits & Equity Comp", difficulty: 3,
    stem: "A distinctive tax wrinkle of incentive stock options (ISOs) is that the bargain element at exercise:",
    choices: ["Is a preference item for the Alternative Minimum Tax", "Is always tax-free regardless of the holding period", "Is deductible by the employee"],
    answerIndex: 0,
    explanation: "ISOs can qualify for favorable long-term capital gains treatment, but the bargain element at exercise is an AMT preference item, which can trigger AMT even though there's no regular-tax event. Choice B overstates the benefit. Choice C is incorrect.",
  },
  {
    id: "cfp-ben-q4", examSlug: "cfp", topicId: "benefits", topicName: "Employee Benefits & Equity Comp", difficulty: 2,
    stem: "A client is choosing between an HSA and an FSA. A key advantage of the HSA is that it:",
    choices: ["Permits a larger annual contribution than any other account type", "Rolls over indefinitely and stays with the client after changing jobs", "Requires no qualifying health plan and is available to all employees"],
    answerIndex: 1,
    explanation: "HSA balances roll over year after year and are owned by the individual, so they travel across job changes and can be invested for long-term growth - many planners treat the HSA as a retirement account given its triple tax advantage. FSAs are employer-owned, largely use-it-or-lose-it, and forfeited on separation. The HSA's tradeoff is the eligibility requirement: enrollment in a qualifying high-deductible health plan.",
  },
  {
    id: "cfp-ben-q5", examSlug: "cfp", topicId: "benefits", topicName: "Employee Benefits & Equity Comp", difficulty: 2,
    stem: "Equity compensation most often creates which planning problem?",
    choices: ["Excessive liquidity in the portfolio", "Excessive diversification", "Concentration risk in employer stock"],
    answerIndex: 2,
    explanation: "Heavy equity comp ties a client's portfolio AND paycheck to one company, creating dangerous concentration risk that a downturn can hit on both fronts. Choices A and C are the opposite of the actual problem.",
  },

  // ---- Retirement Income Planning ----
  {
    id: "cfp-inc-q1", examSlug: "cfp", topicId: "income", topicName: "Retirement Income Planning", difficulty: 2,
    stem: "The cleanest tool to hedge longevity risk (outliving your money) is:",
    choices: ["An immediate annuity paying for life", "A short-term bond ladder", "A money-market fund held for liquidity"],
    answerIndex: 0,
    explanation: "An immediate annuity guarantees income for life, directly addressing longevity risk; the cost is lost liquidity once annuitized. Choices B and C provide safety/liquidity but no lifetime-income guarantee.",
  },
  {
    id: "cfp-inc-q2", examSlug: "cfp", topicId: "income", topicName: "Retirement Income Planning", difficulty: 2,
    stem: "Under the 4% rule, a retiree with a $750,000 portfolio would withdraw in year one about:",
    choices: ["$7,500", "$30,000", "$75,000"],
    answerIndex: 1,
    explanation: "4% × $750,000 = $30,000 for the first year, then adjusted for inflation thereafter. Choice A uses 1%; choice C uses 10% — both far from the guideline.",
  },
  {
    id: "cfp-inc-q3", examSlug: "cfp", topicId: "income", topicName: "Retirement Income Planning", difficulty: 3,
    stem: "A retiree begins withdrawals just as markets fall 25%. Sequence-of-returns risk describes the danger that:",
    choices: ["Average returns over retirement fall short of the assumed rate", "Inflation erodes the purchasing power of a fixed withdrawal amount", "Poor early returns combined with withdrawals permanently deplete capital"],
    answerIndex: 2,
    explanation: "Sequence risk is about the ORDER of returns, not their average. Withdrawing from a portfolio during an early decline sells shares at depressed prices, permanently removing capital that would otherwise have participated in the recovery - two retirees with identical average returns can end in very different places depending on when the bad years arrive. Falling short of an assumed average and inflation erosion are real risks, but they are different ones.",
  },
  {
    id: "cfp-inc-q4", examSlug: "cfp", topicId: "income", topicName: "Retirement Income Planning", difficulty: 2,
    stem: "A 'life-only' annuity payout option, compared with joint-and-survivor, generally provides:",
    choices: ["Higher income but stops at the annuitant's death", "Lower income but continues to a spouse", "The same income with a death benefit"],
    answerIndex: 0,
    explanation: "Life-only pays the most because payments cease at death with nothing to survivors; joint-and-survivor pays less but continues to a spouse. Choice B describes joint-and-survivor. Choice C misstates the trade-off between income and protection.",
  },
  {
    id: "cfp-inc-q5", examSlug: "cfp", topicId: "income", topicName: "Retirement Income Planning", difficulty: 2,
    stem: "A client compares a fixed annuity with a variable annuity. In the variable contract, investment risk is borne by:",
    choices: ["The insurance company, which guarantees the minimum payout", "The contract holder, whose payout varies with subaccount performance", "The subaccount manager, who is accountable for returns"],
    answerIndex: 1,
    explanation: "A variable annuity's assets sit in a separate account whose subaccounts the holder selects, so performance flows through to the holder and the payout varies. The insurer bears the investment risk only in a FIXED annuity, where it guarantees the credited rate from its general account. Optional living-benefit riders can shift some downside back to the insurer, but they cost extra and are not part of the base contract.",
  },

  // ---- Trusts & Advanced Estate Strategies ----
  {
    id: "cfp-tr-q1", examSlug: "cfp", topicId: "trusts", topicName: "Trusts & Advanced Estate Strategies", difficulty: 2,
    stem: "A client's primary goal is keeping their estate settlement private and avoiding court administration. A revocable living trust primarily provides:",
    choices: ["Estate tax reduction by removing assets from the taxable estate", "Creditor protection, since trust assets are shielded from claims", "Probate avoidance and privacy, without reducing the taxable estate"],
    answerIndex: 2,
    explanation: "A revocable trust avoids probate for the assets titled into it, keeping the settlement private and often faster. Because the grantor retains the power to revoke, the assets remain in the taxable estate and remain reachable by the grantor's creditors - revocability is precisely what forfeits those protections. IRREVOCABLE trusts can deliver tax and creditor benefits, at the cost of giving up control.",
  },
  {
    id: "cfp-tr-q2", examSlug: "cfp", topicId: "trusts", topicName: "Trusts & Advanced Estate Strategies", difficulty: 3,
    stem: "An irrevocable life insurance trust (ILIT) is used to:",
    choices: ["Keep insurance proceeds out of the taxable estate", "Guarantee the policy will never lapse", "Convert term insurance to whole life"],
    answerIndex: 0,
    explanation: "An ILIT owns the life policy so the death benefit passes outside the insured's taxable estate (proceeds are otherwise included if the insured owned the policy). Choices B and C are unrelated to the ILIT's estate-tax purpose.",
  },
  {
    id: "cfp-tr-q3", examSlug: "cfp", topicId: "trusts", topicName: "Trusts & Advanced Estate Strategies", difficulty: 3,
    stem: "A QTIP trust is especially useful when a client wants to:",
    choices: ["Give the surviving spouse complete control of where assets ultimately go", "Provide for a spouse while controlling the ultimate beneficiaries", "Avoid making any marital transfer"],
    answerIndex: 1,
    explanation: "A QTIP qualifies for the marital deduction while letting the first spouse dictate who ultimately receives the assets — ideal for blended families. Choice A is the opposite (the point is to limit the survivor's control over the remainder). Choice C contradicts its marital-deduction purpose.",
  },
  {
    id: "cfp-tr-q4", examSlug: "cfp", topicId: "trusts", topicName: "Trusts & Advanced Estate Strategies", difficulty: 2,
    stem: "A husband dies having used only $6 million of his federal estate tax exclusion. Portability allows his surviving spouse to:",
    choices: ["Inherit the estate free of tax under the unlimited marital deduction", "Double her own exclusion automatically without any filing requirement", "Claim his unused exclusion, if a timely estate tax return elects it"],
    answerIndex: 2,
    explanation: "Portability lets a surviving spouse add the deceased spouse's unused exclusion amount to her own, but the election is not automatic - an estate tax return must be filed timely even when no tax is owed, and missing that filing forfeits the benefit permanently. The unlimited marital deduction is a separate provision that defers tax on transfers to a citizen spouse; it does not preserve the exclusion, which is exactly the gap portability fills.",
  },
  {
    id: "cfp-tr-q5", examSlug: "cfp", topicId: "trusts", topicName: "Trusts & Advanced Estate Strategies", difficulty: 3,
    stem: "A grandparent leaves assets directly to a grandchild, skipping their own child's generation. The GST tax exists to:",
    choices: ["Prevent avoidance of a full round of estate tax at the skipped generation", "Encourage transfers to younger generations through favorable treatment", "Replace the estate tax entirely for multigenerational transfers"],
    answerIndex: 0,
    explanation: "Absent the GST tax, a wealthy family could transfer assets directly to grandchildren and avoid the estate tax that would otherwise apply when the middle generation died - the GST tax closes that gap by imposing a separate flat tax at the highest estate rate. It DISCOURAGES rather than encourages skipping, and it operates in addition to the estate and gift taxes rather than replacing them. A separate GST exemption applies.",
  },

  // Time Value of Money
  {
    id: "cfp-tvm-q1", examSlug: "cfp", topicId: "tvm", topicName: "Time Value of Money", difficulty: 2,
    stem: "A client needs $20,000 in 5 years and can earn 6% annually. Approximately how much must be invested today as a lump sum?",
    choices: ["$16,400", "$14,945", "$18,868"],
    answerIndex: 1,
    explanation: "PV = FV ÷ (1 + i)ⁿ = 20,000 ÷ (1.06)⁵ = 20,000 ÷ 1.3382 ≈ $14,945. Compounding at 6% for five years turns roughly $14,945 into $20,000. Choice C uses too short a period; choice B mis-discounts. This single-sum present-value calculation underlies most goal-funding work.",
  },
  {
    id: "cfp-tvm-q2", examSlug: "cfp", topicId: "tvm", topicName: "Time Value of Money", difficulty: 2,
    stem: "Why is an annuity due worth more than an otherwise identical ordinary annuity?",
    choices: ["It contains a greater number of total payments", "It is discounted using a higher assumed interest rate", "Each payment occurs at period start, compounding once more"],
    answerIndex: 2,
    explanation: "An annuity due pays at the BEGINNING of each period, so every payment earns an additional period of compounding compared with an ordinary (end-of-period) annuity, raising its value. The number of payments (A) and the rate (C) are the same; only the timing differs.",
  },
  {
    id: "cfp-tvm-q3", examSlug: "cfp", topicId: "tvm", topicName: "Time Value of Money", difficulty: 3,
    stem: "With a nominal return of 8% and inflation of 3%, the inflation-adjusted (real) rate used to fund an inflating goal is closest to:",
    choices: ["4.85%", "5.00%", "11.00%"],
    answerIndex: 0,
    explanation: "The real rate is computed by dividing, not subtracting: [(1.08 ÷ 1.03) − 1] = 1.0485 − 1 ≈ 4.85%, slightly below the simple 5% difference (A). Adding the rates (C) is incorrect. Planners use this serial/real rate when a goal grows with inflation.",
  },
  {
    id: "cfp-tvm-q4", examSlug: "cfp", topicId: "tvm", topicName: "Time Value of Money", difficulty: 1,
    stem: "Which five variables drive a standard time-value-of-money calculation?",
    choices: ["Assets, liabilities, income, expenses, and net worth", "PV, FV, i, n, and PMT", "Alpha, beta, Sharpe, NPV, and IRR"],
    answerIndex: 1,
    explanation: "Every TVM problem uses present value, future value, the interest rate, the number of periods, and the payment (PV, FV, i, n, PMT); given any four, you solve for the fifth. Choice A lists financial-statement items; choice C lists performance metrics — neither is the TVM variable set.",
  },
  {
    id: "cfp-tvm-q5", examSlug: "cfp", topicId: "tvm", topicName: "Time Value of Money", difficulty: 2,
    stem: "Increasing the compounding frequency from annual to monthly, holding the stated rate constant, will:",
    choices: ["Lower the effective annual rate", "Have no effect", "Raise the effective annual rate"],
    answerIndex: 2,
    explanation: "More frequent compounding means interest earns interest sooner, raising the effective annual rate above the stated nominal rate. Annual compounding (A) would give the lowest effective rate. The effect is real (C is wrong) — always match the rate and period count to the compounding frequency.",
  },

  // Cash Flow & Debt Management
  {
    id: "cfp-cf-q1", examSlug: "cfp", topicId: "cashflow", topicName: "Cash Flow & Debt Management", difficulty: 1,
    stem: "A client lists $685,000 in assets and $310,000 in liabilities. Their net worth is:",
    choices: ["$375,000, assets less liabilities", "$995,000, the total of assets and liabilities", "$685,000, the gross value of assets held"],
    answerIndex: 0,
    explanation: "Net worth is a balance-sheet figure: total assets minus total liabilities, or $685,000 - $310,000 = $375,000. It measures accumulated wealth at a point in time and is distinct from cash flow, which measures income against expenses over a period. Summing assets and liabilities produces a meaningless figure, and reporting gross assets ignores every claim against them - the mortgage on the house being the usual example.",
  },
  {
    id: "cfp-cf-q2", examSlug: "cfp", topicId: "cashflow", topicName: "Cash Flow & Debt Management", difficulty: 2,
    stem: "A common guideline for an emergency fund is to hold liquid reserves covering:",
    choices: ["One week of take-home income", "Three to six months of essential expenses", "2 years of total spending"],
    answerIndex: 1,
    explanation: "The standard recommendation is three to six months of nondiscretionary living expenses in liquid, safe accounts — more for unstable or single income, less for stable dual incomes. One week (A) is far too little, and two years (C) would needlessly tie up capital that could fund goals.",
  },
  {
    id: "cfp-cf-q3", examSlug: "cfp", topicId: "cashflow", topicName: "Cash Flow & Debt Management", difficulty: 2,
    stem: "Under the classic 28/36 guideline, total monthly debt payments should not exceed what percentage of GROSS monthly income?",
    choices: ["20%", "28%", "36%"],
    answerIndex: 2,
    explanation: "The 28/36 rule caps housing costs at 28% and TOTAL debt (housing plus all other debt) at 36% of gross monthly income. The 20% figure (A) is the separate consumer-debt-to-NET-income guideline. 28% (B) is the housing-only limit, not the total-debt limit.",
  },
  {
    id: "cfp-cf-q4", examSlug: "cfp", topicId: "cashflow", topicName: "Cash Flow & Debt Management", difficulty: 1,
    stem: "On a personal statement of financial position, assets are generally reported at:",
    choices: ["Fair market value", "Original purchase cost", "Insured value"],
    answerIndex: 0,
    explanation: "Personal financial statements show assets at their current fair market value so net worth reflects today's reality. Original cost (A) is a historical figure that can be far from current value. Insured value (C) is set for coverage purposes and isn't the basis for the balance sheet.",
  },
  {
    id: "cfp-cf-q5", examSlug: "cfp", topicId: "cashflow", topicName: "Cash Flow & Debt Management", difficulty: 2,
    stem: "When prioritizing the use of monthly surplus cash flow, a planner generally recommends first:",
    choices: ["Speculative investments offering the highest expected return", "Capturing the employer match and building an emergency fund", "Paying extra on a low-rate mortgage"],
    answerIndex: 1,
    explanation: "High-priority uses come first: capturing 'free money' from an employer match and establishing an emergency reserve protect the entire plan. Speculative investments (A) come much later, after foundations are set. Prepaying a low-rate mortgage (C) is low priority versus a match and reserve given its modest, certain return.",
  },

  // Property, Casualty & Health Insurance
  {
    id: "cfp-pc-q1", examSlug: "cfp", topicId: "pc-health", topicName: "Property, Casualty & Health Insurance", difficulty: 1,
    stem: "Insurance is an example of which risk-management technique?",
    choices: ["Risk retention", "Risk avoidance", "Risk transfer"],
    answerIndex: 2,
    explanation: "Buying insurance transfers the financial consequences of a risk to the insurer — risk transfer. Retention (A) means bearing the risk yourself (e.g., a deductible). Avoidance (C) means not engaging in the risky activity at all. The rule is to transfer high-severity, low-frequency risks.",
  },
  {
    id: "cfp-pc-q2", examSlug: "cfp", topicId: "pc-health", topicName: "Property, Casualty & Health Insurance", difficulty: 3,
    stem: "A home has a $250,000 replacement cost and an 80% coinsurance clause, but is insured for only $160,000. A partial loss will be reimbursed at approximately what fraction (before the deductible)?",
    choices: ["80%", "100%", "64%"],
    answerIndex: 0,
    explanation: "Required coverage = 80% × $250,000 = $200,000. Reimbursement ratio = carried ÷ required = $160,000 ÷ $200,000 = 80%. So partial losses are paid at about 80%. Full coverage (A) would require meeting the $200,000 requirement; 64% (C) wrongly divides by the full replacement cost rather than the required amount.",
  },
  {
    id: "cfp-pc-q3", examSlug: "cfp", topicId: "pc-health", topicName: "Property, Casualty & Health Insurance", difficulty: 2,
    stem: "A personal umbrella liability policy primarily provides:",
    choices: ["Coverage for the client's own medical bills", "Excess liability coverage above home and auto limits", "Replacement of damaged personal property"],
    answerIndex: 1,
    explanation: "An umbrella policy adds a layer of liability coverage (often $1 million+) above the limits of the underlying homeowners and auto policies, and is inexpensive because it pays only after those are exhausted. It is not health coverage (A) or property replacement (C); its job is catastrophic liability protection.",
  },
  {
    id: "cfp-pc-q4", examSlug: "cfp", topicId: "pc-health", topicName: "Property, Casualty & Health Insurance", difficulty: 2,
    stem: "A Health Savings Account (HSA) offers which tax advantage?",
    choices: ["Only tax-free withdrawals, with contributions taxed normally", "A deduction available only once retirement distributions begin", "Deductible contributions, tax-free growth, and tax-free withdrawals"],
    answerIndex: 2,
    explanation: "An HSA, paired with a high-deductible health plan, has a triple tax advantage: contributions are deductible, growth is tax-free, and qualified medical withdrawals are tax-free. Choice A captures only one leg, and choice C misstates the timing — the deduction applies when contributions are made.",
  },
  {
    id: "cfp-pc-q5", examSlug: "cfp", topicId: "pc-health", topicName: "Property, Casualty & Health Insurance", difficulty: 2,
    stem: "Which type of care is primarily covered by long-term-care insurance but largely NOT by Medicare?",
    choices: ["Custodial care assisting with daily living activities", "Emergency hospital care following an acute event", "Prescription drug costs incurred on an ongoing basis"],
    answerIndex: 0,
    explanation: "Long-term-care insurance covers custodial care — ongoing help with activities of daily living like bathing and dressing — which Medicare largely does not cover. Hospital care (B) is Medicare Part A, and prescription drugs (C) are Part D. The custodial-care gap is a major, often-overlooked retirement risk.",
  },
];

export const cfpContent: ExamContent = {
  examSlug: "cfp",
  chapters: [...cfpDeepChapters, ...chapters],
  questions: [...cfpDeepQuestions, ...questions],
};
