// ============================================================
// Certus — CFP (Certified Financial Planner) textbook-depth content
// Four deep readings + aligned questions across the core planning
// domains. Wired into cfpContent ahead of the lighter chapters.
// ============================================================

import { Chapter, Question } from "./types";

export const cfpDeepChapters: Chapter[] = [
  {
    id: "cfp-process-deep",
    examSlug: "cfp",
    topicId: "general",
    topicName: "General Principles",
    title: "The Financial Planning Process and the Time Value of Money",
    readingMinutes: 6,
    summary:
      "The foundation of planning — the CFP Board's seven-step planning process, the fiduciary duty a CFP professional owes clients, and the time-value-of-money mechanics (present and future value, compounding, and the Rule of 72) that underlie every quantitative recommendation.",
    intro:
      "Financial planning is a structured PROCESS conducted under a FIDUCIARY duty, and nearly every recommendation rests on the TIME VALUE OF MONEY. This reading covers the CFP Board's seven-step process, the duties a planner owes the client, and the core TVM mechanics — present and future value, compounding, and the handy Rule of 72 — that recur throughout the exam.",
    sections: [
      {
        heading: "1. The seven-step planning process",
        blocks: [
          { kind: "p", text: "The CFP Board defines a SEVEN-STEP financial planning process: (1) UNDERSTAND the client's personal and financial circumstances; (2) IDENTIFY and select GOALS; (3) ANALYZE the client's current course of action and potential alternatives; (4) DEVELOP the financial planning RECOMMENDATIONS; (5) PRESENT the recommendations; (6) IMPLEMENT the recommendations; and (7) MONITOR progress and UPDATE. The process is iterative — circumstances and goals change — and data gathering and goal-setting come BEFORE any recommendation is developed." },
        ],
      },
      {
        heading: "2. Fiduciary duty and ethics",
        blocks: [
          { kind: "p", text: "A CFP professional must act as a FIDUCIARY whenever providing financial advice, owing the client a DUTY OF LOYALTY (place the client's interests first, avoid or disclose and manage conflicts, obtain informed consent), a DUTY OF CARE (act with the care, skill, and diligence of a prudent professional given the client's goals and circumstances), and a DUTY TO FOLLOW CLIENT INSTRUCTIONS. The CFP Board's Code of Ethics and Standards of Conduct also require integrity, competence, confidentiality, and professionalism. This best-interest standard is central to the credential's value." },
        ],
      },
      {
        heading: "3. Time value of money",
        blocks: [
          { kind: "p", text: "Money has a TIME VALUE: a dollar today can be invested to grow, so it is worth more than a dollar in the future. FUTURE VALUE compounds a present amount forward at a rate of return; PRESENT VALUE discounts a future amount back to today. The power of COMPOUNDING — earning returns on prior returns — means money grows faster the longer it is invested and the higher the rate. These mechanics drive retirement projections, education funding, and loan calculations alike." },
          { kind: "formula", formula: { label: "Future and present value", expr: "FV = PV × (1 + r)^n      PV = FV ÷ (1 + r)^n", note: "r is the periodic rate and n the number of periods. Annuities (level periodic payments) use related formulas." } },
          { kind: "example", example: { title: "Compounding and the Rule of 72", prompt: "An investor puts $10,000 into an account earning 6% annually. Roughly how long until it doubles, and what is its value after 12 years?", steps: ["Rule of 72: years to double ≈ 72 ÷ interest rate = 72 ÷ 6 = 12 years.", "Check with future value: FV = $10,000 × (1.06)^12 = $10,000 × 2.012 ≈ $20,122.", "So the money roughly doubles in 12 years, matching the Rule of 72."], answer: "About 12 years to double (Rule of 72), reaching roughly $20,100 — confirming the rule's quick estimate. The Rule of 72 (72 ÷ rate) is a fast way to gauge doubling time." } },
        ],
      },
      {
        heading: "4. Foundations of a plan and synthesis",
        blocks: [
          { kind: "p", text: "Before projections, a planner builds the foundation: a NET WORTH statement (assets minus liabilities), a CASH-FLOW statement (income minus expenses, revealing savings capacity), and an EMERGENCY FUND (commonly three to six months of expenses in liquid, low-risk assets) to absorb shocks without derailing long-term goals. These basics, combined with the planning process and TVM, support every later recommendation. The chapter's core: planning follows seven steps (understand, identify goals, analyze, develop, present, implement, monitor) under a fiduciary duty of loyalty, care, and following instructions; and the time value of money (FV = PV(1+r)^n, with the Rule of 72 for doubling time) underlies the quantitative work, built on a foundation of net worth, cash flow, and an emergency fund. Over-learn the seven steps and the TVM/Rule-of-72 mechanics." },
        ],
      },
    ],
    keyTerms: [
      { term: "Seven-step process", def: "Understand, identify goals, analyze, develop, present, implement, monitor." },
      { term: "Fiduciary duty", def: "Duty of loyalty, duty of care, and duty to follow client instructions." },
      { term: "Duty of loyalty", def: "Put the client first; avoid or disclose and manage conflicts; informed consent." },
      { term: "Time value of money", def: "A dollar today is worth more than a dollar later due to earning potential." },
      { term: "Future value", def: "FV = PV × (1 + r)^n; compounds a present amount forward." },
      { term: "Present value", def: "PV = FV ÷ (1 + r)^n; discounts a future amount to today." },
      { term: "Compounding", def: "Earning returns on prior returns; accelerates with time and rate." },
      { term: "Rule of 72", def: "Years to double ≈ 72 ÷ interest rate (a quick estimate)." },
      { term: "Net worth statement", def: "Assets minus liabilities at a point in time." },
      { term: "Cash-flow statement", def: "Income minus expenses; reveals savings capacity." },
      { term: "Emergency fund", def: "Commonly 3–6 months of expenses in liquid, low-risk assets." },
    ],
    takeaways: [
      "Financial planning follows seven steps: understand circumstances, identify goals, analyze, develop recommendations, present, implement, and monitor/update.",
      "A CFP professional is a fiduciary owing duties of loyalty, care, and following client instructions, under the CFP Board's Code of Ethics.",
      "The time value of money: future value compounds (FV = PV(1+r)^n) and present value discounts (PV = FV ÷ (1+r)^n).",
      "Compounding accelerates growth with time and rate; the Rule of 72 (72 ÷ rate) estimates doubling time.",
      "Plans rest on a net worth statement, a cash-flow statement, and an emergency fund of roughly 3–6 months of expenses.",
      "Data gathering and goal setting precede any recommendation.",
    ],
  },

  {
    id: "cfp-insurance-deep",
    examSlug: "cfp",
    topicId: "insurance",
    topicName: "Risk Management & Insurance",
    title: "Risk Management and Insurance Planning",
    readingMinutes: 4,
    summary:
      "Protecting the plan from catastrophe — the risk management process and the frequency-severity framework that identifies what to insure, plus the major coverage types: life, health, disability, long-term care, and property-casualty.",
    intro:
      "A financial plan is only as strong as its protection against catastrophic loss, so RISK MANAGEMENT and INSURANCE are core CFP topics. This reading covers the risk management process, the FREQUENCY-SEVERITY framework that pinpoints which risks to insure, and the main insurance products — life, health, disability, long-term care, and property-casualty.",
    sections: [
      {
        heading: "1. The risk management process",
        blocks: [
          { kind: "p", text: "Risk management follows a process: IDENTIFY exposures, ANALYZE their potential frequency and severity, SELECT the appropriate technique, and MONITOR. The four risk-handling techniques are AVOID (don't undertake the risky activity), REDUCE (lower frequency or severity through controls), RETAIN (self-insure — bear the loss, appropriate for small/predictable risks), and TRANSFER (shift the risk to an insurer for a premium). Insurance is the transfer tool, and choosing among techniques is the heart of risk planning." },
        ],
      },
      {
        heading: "2. The frequency-severity framework",
        blocks: [
          { kind: "p", text: "Which technique fits a given risk depends on two questions: how OFTEN does it occur (frequency) and how BADly does it hurt (severity)? Plotting risks on that grid points to the right tool. INSURANCE (transfer) is the answer in exactly one quadrant — LOW frequency, HIGH severity — because that is where a manageable premium buys protection against a loss you could never absorb yourself (a house fire, premature death, disability). High-frequency/low-severity risks are best RETAINED (paying small losses out of pocket is cheaper than insuring them); high-frequency/high-severity risks should be AVOIDED; low-frequency/low-severity risks are simply retained." },
          { kind: "table", table: { caption: "Frequency-severity grid", headers: ["", "Low severity", "High severity"], rows: [["Low frequency", "Retain", "Transfer (insure)"], ["High frequency", "Retain / reduce", "Avoid"]] } },
        ],
      },
      {
        heading: "3. Life, disability, and health coverage",
        blocks: [
          { kind: "p", text: "LIFE INSURANCE replaces income and provides liquidity at death. TERM life provides pure, temporary death-benefit coverage at low cost for a set period (no cash value); PERMANENT life (whole and universal) lasts for life and builds CASH VALUE, at a higher premium. DISABILITY INSURANCE replaces income if the insured can't work — a frequently overlooked but critical coverage, since a disability can be financially worse than death (the person still has expenses). HEALTH INSURANCE covers medical costs, and LONG-TERM CARE (LTC) insurance covers extended custodial care (nursing home, in-home assistance) that health insurance and Medicare largely don't. Needs analysis sizes the coverage to the client's obligations and dependents." },
        ],
      },
      {
        heading: "4. Property-casualty and synthesis",
        blocks: [
          { kind: "p", text: "PROPERTY AND CASUALTY insurance protects assets and guards against liability. HOMEOWNERS policies cover the dwelling, personal property, and personal liability; AUTO policies cover vehicle damage and liability; and an UMBRELLA policy adds an extra layer of LIABILITY coverage above the limits of the underlying home and auto policies — inexpensive protection against catastrophic lawsuits. Key concepts include the DEDUCTIBLE (the insured's out-of-pocket share before coverage applies — a higher deductible lowers the premium) and the principle of INDEMNITY (insurance restores the insured to their pre-loss position, not better). The chapter's core: risk management identifies exposures and chooses to avoid, reduce, retain, or transfer; insurance (transfer) fits low-frequency/high-severity risks; life (term vs permanent), disability, health, and long-term care protect income and health; and property-casualty plus an umbrella protect assets and liability. Over-learn the frequency-severity grid and the term-vs-permanent life distinction." },
        ],
      },
    ],
    keyTerms: [
      { term: "Risk-handling techniques", def: "Avoid, reduce, retain (self-insure), transfer (insure)." },
      { term: "Frequency-severity grid", def: "Insure low-frequency/high-severity; retain low-severity; avoid high-frequency/high-severity." },
      { term: "Term life insurance", def: "Temporary, pure death-benefit coverage; low cost; no cash value." },
      { term: "Permanent life insurance", def: "Whole/universal; lifelong coverage building cash value; higher premium." },
      { term: "Disability insurance", def: "Replaces income when the insured cannot work; often overlooked." },
      { term: "Long-term care insurance", def: "Covers extended custodial care not paid by health insurance/Medicare." },
      { term: "Homeowners / auto insurance", def: "Cover property damage and personal liability for home and vehicle." },
      { term: "Umbrella policy", def: "Extra liability coverage above home/auto limits; inexpensive catastrophe protection." },
      { term: "Deductible", def: "Insured's out-of-pocket share before coverage; higher deductible lowers premium." },
      { term: "Indemnity", def: "Insurance restores the insured to the pre-loss position, not better." },
    ],
    takeaways: [
      "Risk management identifies exposures and selects a technique: avoid, reduce, retain (self-insure), or transfer (insure).",
      "Insurance fits low-frequency, high-severity risks — where a manageable premium covers a loss too large to absorb.",
      "High-frequency/low-severity risks are best retained; high-frequency/high-severity risks should be avoided.",
      "Term life is temporary and low-cost with no cash value; permanent life lasts for life and builds cash value at a higher premium.",
      "Disability insurance (replacing income) and long-term care insurance (custodial care) fill commonly overlooked gaps.",
      "Property-casualty policies and an umbrella protect assets and liability; higher deductibles lower premiums, and indemnity restores but does not enrich.",
    ],
  },

  {
    id: "cfp-retirement-deep",
    examSlug: "cfp",
    topicId: "retirement",
    topicName: "Retirement Planning",
    title: "Retirement Planning and Employee Benefits",
    readingMinutes: 5,
    summary:
      "Funding life after work — qualified retirement plans (defined benefit versus defined contribution), traditional and Roth IRAs and their tax treatment, required minimum distributions, and Social Security.",
    intro:
      "Retirement planning is one of the largest CFP domains, centered on the tax-advantaged accounts that fund retirement and the rules that govern them. This reading covers qualified employer plans, the crucial TRADITIONAL-versus-ROTH distinction, required minimum distributions, and the role of Social Security.",
    sections: [
      {
        heading: "1. Qualified employer plans",
        blocks: [
          { kind: "p", text: "QUALIFIED retirement plans receive favorable tax treatment (pre-tax contributions, tax-deferred growth) and must follow ERISA rules. They come in two structures. DEFINED BENEFIT (DB) plans promise a specific benefit at retirement (often based on salary and years of service); the EMPLOYER bears the investment and longevity risk. DEFINED CONTRIBUTION (DC) plans — like the 401(k), 403(b), and profit-sharing plans — specify the contribution, and the EMPLOYEE bears the investment risk, with the ultimate benefit depending on contributions and investment returns. DC plans have largely displaced DB plans in the private sector; many include employer matching." },
        ],
      },
      {
        heading: "2. Traditional vs Roth IRAs",
        blocks: [
          { kind: "p", text: "Individual Retirement Accounts come in two tax flavors. A TRADITIONAL IRA may allow a tax-DEDUCTIBLE contribution (subject to income limits if covered by a workplace plan); growth is tax-deferred, and WITHDRAWALS in retirement are taxed as ordinary income. A ROTH IRA is funded with AFTER-TAX dollars (no deduction), but qualified WITHDRAWALS — including all the growth — are completely TAX-FREE. The choice hinges on expected future versus current tax rates: a Roth is favorable if you expect to be in a higher bracket later (or value tax-free growth and flexibility), a traditional if you expect a lower bracket in retirement." },
          { kind: "table", table: { caption: "Traditional vs Roth IRA", headers: ["Feature", "Traditional", "Roth"], rows: [["Contributions", "May be deductible (pre-tax)", "After-tax (no deduction)"], ["Growth", "Tax-deferred", "Tax-free"], ["Qualified withdrawals", "Taxed as ordinary income", "Tax-free"], ["RMDs (owner's life)", "Yes (from age 73)", "No"]] } },
        ],
      },
      {
        heading: "3. Required minimum distributions",
        blocks: [
          { kind: "p", text: "To prevent indefinite tax deferral, REQUIRED MINIMUM DISTRIBUTIONS (RMDs) force withdrawals from traditional IRAs and most employer plans beginning at age 73 (under current law). The annual RMD is roughly the account balance divided by an IRS life-expectancy factor, and the amount withdrawn is taxed as ordinary income; missing an RMD triggers a steep penalty. A key planning point: ROTH IRAs have NO required minimum distributions during the original owner's lifetime — a significant advantage for those who don't need the money and want to leave it growing tax-free or pass it on." },
        ],
      },
      {
        heading: "4. Social Security and synthesis",
        blocks: [
          { kind: "p", text: "SOCIAL SECURITY provides a base of inflation-adjusted retirement income based on the worker's lifetime earnings. Benefits can be claimed as early as age 62 at a PERMANENTLY REDUCED amount, at FULL RETIREMENT AGE (66–67 depending on birth year) for the full benefit, or DELAYED up to age 70 for increased ('delayed retirement credit') benefits. The claiming decision — weighing health, longevity, other income, and spousal benefits — is a core planning analysis. The chapter's core: qualified plans are defined benefit (employer bears the risk) or defined contribution (employee bears it, e.g., 401(k)); traditional IRAs give a deduction now and taxable withdrawals later while Roth IRAs are after-tax with tax-free withdrawals and no lifetime RMDs; RMDs from traditional accounts begin at age 73; and Social Security can be claimed early (reduced), at full retirement age, or delayed (increased). Over-learn the traditional-vs-Roth tax treatment and the Roth no-RMD advantage." },
        ],
      },
    ],
    keyTerms: [
      { term: "Qualified plan", def: "Tax-favored, ERISA-governed retirement plan (pre-tax, tax-deferred)." },
      { term: "Defined benefit (DB) plan", def: "Promises a set benefit; the employer bears investment/longevity risk." },
      { term: "Defined contribution (DC) plan", def: "Sets the contribution (401(k), 403(b)); the employee bears investment risk." },
      { term: "Traditional IRA", def: "Possibly deductible contribution; tax-deferred growth; withdrawals taxed as ordinary income." },
      { term: "Roth IRA", def: "After-tax contribution; tax-free qualified withdrawals; no lifetime RMDs." },
      { term: "Traditional vs Roth choice", def: "Roth if you expect a higher future bracket; traditional if lower." },
      { term: "Required minimum distribution (RMD)", def: "Mandatory withdrawals from traditional accounts beginning at age 73." },
      { term: "Roth RMD advantage", def: "No RMDs during the original owner's lifetime." },
      { term: "Full retirement age", def: "66–67 (by birth year); full Social Security benefit." },
      { term: "Early vs delayed claiming", def: "Age 62 (reduced) to age 70 (increased) Social Security benefits." },
    ],
    takeaways: [
      "Qualified plans are tax-favored; defined benefit plans put investment/longevity risk on the employer, defined contribution plans (401(k), 403(b)) on the employee.",
      "Traditional IRAs may give a deduction now with tax-deferred growth and taxable withdrawals; Roth IRAs are after-tax with tax-free qualified withdrawals.",
      "Choose Roth if you expect a higher future tax bracket and traditional if you expect a lower one.",
      "Required minimum distributions from traditional accounts begin at age 73 and are taxed as ordinary income.",
      "Roth IRAs have no required minimum distributions during the original owner's lifetime — a key planning advantage.",
      "Social Security can be claimed early (age 62, reduced), at full retirement age (66–67), or delayed to 70 for increased benefits.",
    ],
  },

  {
    id: "cfp-estate-deep",
    examSlug: "cfp",
    topicId: "estate",
    topicName: "Estate Planning",
    title: "Estate Planning and Wealth Transfer",
    readingMinutes: 4,
    summary:
      "Transferring wealth efficiently — the core estate documents, how assets avoid probate, the gift and estate tax with its exclusions and the unlimited marital deduction, the step-up in basis at death, and the role of trusts.",
    intro:
      "Estate planning ensures a client's wealth passes to the intended people with minimal cost, delay, and tax. This reading covers the essential DOCUMENTS, the difference between PROBATE and non-probate transfers, the GIFT and ESTATE tax framework, the valuable step-up in basis at death, and how TRUSTS fit in.",
    sections: [
      {
        heading: "1. Core documents",
        blocks: [
          { kind: "p", text: "Every estate plan rests on key DOCUMENTS. A WILL directs how probate assets are distributed and names guardians for minor children and an executor; dying without one (INTESTATE) means state law decides. A DURABLE POWER OF ATTORNEY lets someone manage finances if the client is incapacitated. An ADVANCE HEALTHCARE DIRECTIVE (living will) and a healthcare power of attorney govern medical decisions. TRUSTS (below) hold and direct assets under custom terms. Beneficiary DESIGNATIONS on accounts and policies control those assets directly." },
        ],
      },
      {
        heading: "2. Probate vs non-probate transfers",
        blocks: [
          { kind: "p", text: "PROBATE is the court-supervised process of validating a will and distributing assets; it can be slow, public, and costly. Many assets pass OUTSIDE probate by operation of law or contract: jointly held property with right of survivorship (JTWROS) passes to the survivor; accounts and life insurance with BENEFICIARY designations (or payable-on-death/transfer-on-death) pass directly to the named person; and assets in a TRUST pass per the trust terms. A goal of planning is often to minimize probate by using these non-probate transfers — but beneficiary designations OVERRIDE the will, so they must be kept current." },
          { kind: "callout", label: "Beneficiary designations override the will", body: "A retirement account or life insurance policy passes to its named BENEFICIARY regardless of what the will says. Outdated designations (e.g., an ex-spouse) are a classic planning failure — always coordinate them with the overall plan." },
        ],
      },
      {
        heading: "3. Gift and estate tax",
        blocks: [
          { kind: "p", text: "The federal transfer-tax system taxes large gifts and estates, but with generous exclusions. The ANNUAL GIFT TAX EXCLUSION lets a donor give a certain amount per recipient per year (around $18,000, indexed) to any number of people with no gift tax and no use of the lifetime exemption. The LIFETIME EXEMPTION (unified credit) shelters a large amount (in the millions) of cumulative gifts and the estate from tax. The UNLIMITED MARITAL DEDUCTION allows unlimited tax-free transfers to a U.S.-citizen spouse (deferring tax until the second death). Charitable transfers are also fully deductible. Only very large estates owe federal estate tax, though some states impose their own." },
        ],
      },
      {
        heading: "4. Step-up in basis, trusts, and synthesis",
        blocks: [
          { kind: "p", text: "A crucial income-tax feature: assets included in a decedent's estate generally receive a STEP-UP IN BASIS to fair market value at death, so heirs who sell shortly after pay little or no capital gains tax on pre-death appreciation — making it often better to inherit appreciated assets than to receive them as lifetime gifts (which carry over the donor's basis). TRUSTS are central tools: a REVOCABLE living trust avoids probate and allows management during incapacity but provides NO estate-tax savings (the grantor still owns it); an IRREVOCABLE trust removes assets from the estate (potential estate-tax savings) but gives up control. The chapter's core: wills, powers of attorney, and directives form the document base; JTWROS, beneficiary designations, and trusts pass assets outside probate (and override the will); the gift/estate tax offers an annual exclusion, a large lifetime exemption, and an unlimited marital deduction; a step-up in basis at death erases pre-death gains for heirs; and revocable trusts avoid probate while irrevocable trusts can save estate tax. Over-learn the probate-avoidance methods and the step-up-in-basis rule." },
        ],
      },
    ],
    keyTerms: [
      { term: "Will", def: "Directs probate-asset distribution; names guardians and an executor." },
      { term: "Intestate", def: "Dying without a will; state law determines distribution." },
      { term: "Durable power of attorney", def: "Authorizes someone to manage finances during incapacity." },
      { term: "Advance directive", def: "Living will / healthcare power of attorney for medical decisions." },
      { term: "Probate", def: "Court-supervised validation of a will and asset distribution; slow, public, costly." },
      { term: "Non-probate transfers", def: "JTWROS, beneficiary/POD/TOD designations, and trust assets pass outside probate." },
      { term: "Beneficiary designations override the will", def: "Named beneficiaries control accounts/policies regardless of the will." },
      { term: "Annual gift tax exclusion", def: "A set amount (≈$18,000) per recipient per year, gift-tax-free." },
      { term: "Lifetime exemption", def: "Large unified credit sheltering cumulative gifts and the estate." },
      { term: "Unlimited marital deduction", def: "Unlimited tax-free transfers to a U.S.-citizen spouse." },
      { term: "Step-up in basis", def: "Inherited assets are revalued to fair market value at death, erasing pre-death gains." },
      { term: "Revocable vs irrevocable trust", def: "Avoids probate (no estate-tax savings) vs removes assets from the estate (potential savings)." },
    ],
    takeaways: [
      "Core documents are the will (with guardian/executor), a durable power of attorney, and an advance healthcare directive; dying intestate lets the state decide.",
      "Assets pass outside probate via JTWROS, beneficiary/POD/TOD designations, and trusts — and beneficiary designations override the will, so keep them current.",
      "The gift/estate tax offers an annual exclusion (~$18,000/recipient), a large lifetime exemption, and an unlimited marital deduction to a citizen spouse.",
      "Assets receive a step-up in basis to fair market value at death, often making inherited appreciated assets more tax-efficient than lifetime gifts.",
      "A revocable trust avoids probate and aids incapacity planning but gives no estate-tax savings; an irrevocable trust can remove assets from the estate.",
      "Minimizing probate reduces cost, delay, and publicity in transferring wealth.",
    ],
  },
];

export const cfpDeepQuestions: Question[] = [
  {
    id: "cfp-pr-d1", examSlug: "cfp", topicId: "general", topicName: "General Principles", difficulty: 1,
    stem: "In the CFP Board's financial planning process, identifying and selecting goals comes:",
    choices: ["Before developing recommendations", "After developing recommendations", "After implementation", "Only during monitoring"],
    answerIndex: 0,
    explanation: "Understanding the client's circumstances and identifying/selecting goals come early in the seven-step process — before analyzing alternatives and developing recommendations. You can't recommend without knowing the goals.",
  },
  {
    id: "cfp-pr-d2", examSlug: "cfp", topicId: "general", topicName: "General Principles", difficulty: 2,
    stem: "A CFP professional providing financial advice must act as a:",
    choices: ["Salesperson maximizing commissions", "A fiduciary owing loyalty and care", "Neutral order-taker", "Custodian only"],
    answerIndex: 1,
    explanation: "A CFP professional must act as a fiduciary when providing financial advice, owing duties of loyalty (client's interest first), care (prudent diligence), and to follow client instructions.",
  },
  {
    id: "cfp-pr-d3", examSlug: "cfp", topicId: "general", topicName: "General Principles", difficulty: 2,
    stem: "Using the Rule of 72, money earning 6% will roughly double in about:",
    choices: ["6 years", "18 years", "12 years", "24 years"],
    answerIndex: 2,
    explanation: "Rule of 72: years to double ≈ 72 ÷ rate = 72 ÷ 6 = 12 years. (Checking with future value, $1 × 1.06^12 ≈ 2.01.)",
  },
  {
    id: "cfp-pr-d4", examSlug: "cfp", topicId: "general", topicName: "General Principles", difficulty: 1,
    stem: "A dual-income client with stable employment asks how large an emergency fund should be, with monthly expenses of $4,500. A typical recommendation is:",
    choices: ["$54,000, representing a full twelve months of expenses", "$4,500, representing a single month of expenses as a buffer", "$45,000, an amount set independently of monthly expenses", "$13,500 to $27,000, representing three to six months of expenses"],
    answerIndex: 3,
    explanation: "The standard guideline is three to six months of ESSENTIAL expenses: $4,500 x 3 = $13,500 to $4,500 x 6 = $27,000. Dual income and stable employment justify the lower end of that range, while a single earner, commission income, or a specialized field argues for the higher end or beyond. One month leaves no cushion for a job search, and any figure set without reference to the client's actual expenses cannot be right by construction.",
  },
  {
    id: "cfp-in-d1", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 2,
    stem: "Insurance (risk transfer) is most appropriate for risks that are:",
    choices: ["Low frequency, high severity", "High frequency, low severity", "High frequency, high severity", "Low frequency, low severity"],
    answerIndex: 0,
    explanation: "Insurance fits low-frequency, high-severity risks — rare but devastating losses (death, disability, house fire) where a manageable premium covers a loss too large to absorb. High-frequency/high-severity risks should be avoided; low-severity risks are retained.",
  },
  {
    id: "cfp-in-d2", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 1,
    stem: "Compared with permanent life insurance, term life insurance:",
    choices: ["Builds cash value and costs more", "Temporary coverage at lower cost, no cash value", "Lasts the insured's whole life", "Functions as an investment account"],
    answerIndex: 1,
    explanation: "Term life provides pure death-benefit coverage for a set period at low cost and builds no cash value. Permanent (whole/universal) life lasts for life, builds cash value, and costs more.",
  },
  {
    id: "cfp-in-d3", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 2,
    stem: "A client with $300,000 of auto liability coverage and a $1 million umbrella policy is found liable for $850,000. How much does the umbrella pay?",
    choices: ["$850,000, since the umbrella responds to the entire judgment", "$300,000, matching the limit of the underlying auto policy", "$550,000, covering the amount above the underlying policy limit", "Nothing, since the judgment falls below the umbrella's limit"],
    answerIndex: 2,
    explanation: "An umbrella policy sits above the underlying coverage and pays only the excess: the auto policy pays its $300,000 limit and the umbrella covers the remaining $550,000. Insurers require specified minimum underlying limits precisely so the umbrella attaches at a known point. The umbrella does not pay from the first dollar, and it is triggered whenever the loss EXCEEDS the underlying limit rather than only when it exceeds the umbrella's own limit.",
  },
  {
    id: "cfp-in-d4", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 2,
    stem: "A client raises their homeowners deductible from $1,000 to $5,000. The most accurate description of this decision is that it:",
    choices: ["Lowers the premium and reduces the insurer's obligation on large losses", "Raises the premium in exchange for broader coverage of perils", "Has no premium effect, since deductibles apply only to small claims", "Lowers the premium while retaining more small-loss risk personally"],
    answerIndex: 3,
    explanation: "Raising the deductible transfers the first layer of loss back to the insured, so the insurer's expected payout falls and the premium drops. The client is self-insuring frequent small losses while preserving coverage for the catastrophic ones insurance exists to handle - which is why this is often good advice for a client with adequate emergency reserves. The insurer's obligation on LARGE losses is essentially unchanged; only the first $5,000 shifts.",
  },
  {
    id: "cfp-rt-d1", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 2,
    stem: "In a defined CONTRIBUTION plan such as a 401(k), the investment risk is borne by:",
    choices: ["The employee", "The employer", "The government", "The plan trustee"],
    answerIndex: 0,
    explanation: "In a defined contribution plan, the contribution is specified but the ultimate benefit depends on investment results, so the employee bears the investment risk. In a defined benefit plan, the employer bears it.",
  },
  {
    id: "cfp-rt-d2", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 2,
    stem: "Qualified withdrawals from a Roth IRA in retirement are:",
    choices: ["Taxed as ordinary income", "Tax-free", "Taxed at capital gains rates", "Subject to a 50% penalty"],
    answerIndex: 1,
    explanation: "Roth IRAs are funded with after-tax dollars, so qualified withdrawals — including all the growth — are completely tax-free. Traditional IRA withdrawals, by contrast, are taxed as ordinary income.",
  },
  {
    id: "cfp-rt-d3", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 3,
    stem: "A key advantage of a Roth IRA over a traditional IRA is that the Roth:",
    choices: ["Allows a current-year tax deduction", "Has higher contribution limits", "No required minimum distributions in the owner's lifetime", "Guarantees a minimum investment return"],
    answerIndex: 2,
    explanation: "Roth IRAs have no RMDs during the original owner's lifetime, letting the money keep growing tax-free or pass to heirs. Traditional IRAs require minimum distributions beginning at age 73.",
  },
  {
    id: "cfp-rt-d4", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 2,
    stem: "Claiming Social Security at age 62 instead of full retirement age results in:",
    choices: ["A permanently increased benefit", "No change in benefit", "Loss of all benefits", "A permanently reduced benefit"],
    answerIndex: 3,
    explanation: "Claiming as early as age 62 permanently reduces the monthly benefit; waiting until full retirement age (66–67) gives the full benefit, and delaying to 70 increases it through delayed retirement credits.",
  },
  {
    id: "cfp-es-d1", examSlug: "cfp", topicId: "estate", topicName: "Estate Planning", difficulty: 2,
    stem: "A client dies holding several assets. Which passes to the beneficiary OUTSIDE the probate process?",
    choices: ["A life insurance policy with a named living beneficiary", "Property held solely in the decedent's own name", "An asset directed to a beneficiary by the will's residuary clause", "A vehicle titled to the decedent with no named beneficiary"],
    answerIndex: 0,
    explanation: "Assets passing by contract or by operation of law bypass probate: life insurance with a named beneficiary, retirement accounts, joint tenancy with right of survivorship, and payable-on-death accounts. Anything titled solely in the decedent's name with no beneficiary designation goes through probate, and assets directed by a WILL go through probate by definition, since the will is the document probate administers. A named beneficiary who predeceased with no contingent would land the proceeds back in the estate.",
  },
  {
    id: "cfp-es-d2", examSlug: "cfp", topicId: "estate", topicName: "Estate Planning", difficulty: 3,
    stem: "A beneficiary designation on a retirement account, relative to the instructions in the will:",
    choices: ["Is ignored entirely at death", "Overrides the will for that account", "Must match the will exactly", "Requires the account to pass through probate"],
    answerIndex: 1,
    explanation: "A beneficiary designation controls who receives that account regardless of the will — it overrides the will. Outdated designations (e.g., a former spouse) are a common, costly planning error.",
  },
  {
    id: "cfp-es-d3", examSlug: "cfp", topicId: "estate", topicName: "Estate Planning", difficulty: 2,
    stem: "A client transfers $2 million outright to their U.S.-citizen spouse. The transfer qualifies for the:",
    choices: ["Annual gift tax exclusion, applied to the amount above the limit", "Applicable credit amount, consuming part of the lifetime exclusion", "Unlimited marital deduction, deferring tax until the survivor's death", "Charitable deduction, since spousal transfers are treated similarly"],
    answerIndex: 2,
    explanation: "Transfers to a U.S.-citizen spouse qualify for the unlimited marital deduction, so no gift or estate tax applies at the time of transfer regardless of size. The tax is deferred, not forgiven: the assets are taxed in the surviving spouse's estate, which is why over-reliance on the deduction can waste the first spouse's exclusion. Transfers to a NON-citizen spouse are limited and often use a QDOT instead - a distinction the fact pattern turns on.",
  },
  {
    id: "cfp-es-d4", examSlug: "cfp", topicId: "estate", topicName: "Estate Planning", difficulty: 3,
    stem: "Inherited appreciated assets generally receive a step-up in basis, meaning the heir's cost basis becomes:",
    choices: ["The decedent's original purchase price", "Zero", "The annual exclusion amount", "Fair market value at the date of death"],
    answerIndex: 3,
    explanation: "A step-up in basis resets the heir's basis to fair market value at death, eliminating capital gains tax on pre-death appreciation if sold shortly after. This often makes inheriting appreciated assets more tax-efficient than receiving them as lifetime gifts (which carry over the donor's basis).",
  },
];
