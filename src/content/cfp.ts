// ============================================================
// Certus — CFP content (wave 1, original)
// The Certified Financial Planner exam spans the full financial-
// planning curriculum. Topics here: General Principles, Risk
// Management & Insurance, Tax Planning, Retirement Planning,
// and Estate Planning.
// ============================================================

import { Chapter, Question, ExamContent } from "./types";

const chapters: Chapter[] = [
  // 1. GENERAL PRINCIPLES
  {
    id: "cfp-general",
    examSlug: "cfp",
    topicId: "general",
    topicName: "General Principles of Financial Planning",
    title: "General Principles of Financial Planning",
    readingMinutes: 18,
    summary: "The planning process, financial statements, cash-flow management, and the planner's standard of conduct.",
    intro:
      "The CFP marks someone as a comprehensive financial planner, and the foundation is a disciplined process for understanding a client's whole financial life and building a coordinated plan. This domain covers the steps of that process, the tools used to assess a client's situation, and the ethical standard a CFP professional must uphold. Everything else in the curriculum plugs into this framework.",
    sections: [
      {
        heading: "The financial planning process",
        paragraphs: [
          "The CFP Board defines a structured, multi-step process: understand the client's personal and financial circumstances; identify and select goals; analyze the current course of action and potential alternatives; develop the recommendations; present them; implement them; and monitor progress and update over time. The discipline matters — a good planner doesn't jump to a product, but first gathers data and clarifies goals before recommending anything.",
          "Central to the process is the fiduciary duty. Under the CFP Board's standards, a CFP professional must act as a fiduciary at all times when providing financial advice, placing the client's interests above their own. That elevates planning from selling products to giving advice the client can trust.",
        ],
        callout: {
          label: "The CFP fiduciary standard",
          body: "A CFP professional must act in the client's best interest at all times when giving financial advice — a fiduciary duty of loyalty and care, with disclosure of conflicts.",
        },
      },
      {
        heading: "Financial statements and cash flow",
        paragraphs: [
          "Two personal financial statements anchor the analysis. The statement of financial position (a personal balance sheet) lists assets and liabilities at a point in time, with the difference being net worth. The cash flow statement tracks income and expenses over a period, revealing whether the client runs a surplus to save and invest or a deficit that must be addressed. A planner uses these to diagnose problems — too much debt, too little savings, inadequate emergency reserves.",
          "Sound cash-flow management includes maintaining an emergency fund (commonly three to six months of expenses) and managing debt prudently. Ratios help: a high consumer-debt-to-income ratio signals trouble, while a healthy savings rate signals progress toward goals. The time value of money underlies it all — quantifying how today's savings grow into tomorrow's goals.",
        ],
      },
      {
        heading: "Goals, education planning, and behavior",
        paragraphs: [
          "Plans are built around goals — retirement, a home, a child's education — each with a time horizon and dollar target. Education planning often uses tax-advantaged vehicles like 529 plans, where investments grow tax-free when used for qualified education expenses. A planner also accounts for client psychology and behavioral biases, since even a technically perfect plan fails if the client won't follow it. Understanding a client's risk tolerance and tendencies is as important as the math.",
        ],
      },
      {
        heading: "The process as a loop, and a cash-flow check",
        blocks: [
          { kind: "p", text: "The seven steps are not a one-way checklist — they form a loop. Monitoring feeds back into understanding the client's (now changed) circumstances, so the plan is revisited and updated as life unfolds. Seeing the process as a cycle is what separates ongoing financial planning from a one-time product sale." },
          { kind: "figure", figure: { caption: "Figure 1 — The CFP Board's planning process as a continuous loop. The final step, monitoring, returns to the first as circumstances change — the plan is living, not static.", alt: "Seven connected nodes from Understand to Monitor with a return arrow looping back to the start", svg: `<svg viewBox="0 0 460 140" width="100%" style="max-width:460px"><defs><marker id="cfpah" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6z" fill="var(--primary)"/></marker></defs><path d="M432 40 C 432 14, 24 14, 24 40" fill="none" stroke="var(--primary)" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#cfpah)"/><text x="228" y="11" text-anchor="middle" font-size="8.5" fill="var(--primary)">monitor &amp; update — the plan is a loop</text><g stroke="var(--text-muted)" stroke-width="1"><line x1="37" y1="52" x2="79" y2="52"/><line x1="105" y1="52" x2="147" y2="52"/><line x1="173" y1="52" x2="215" y2="52"/><line x1="241" y1="52" x2="283" y2="52"/><line x1="309" y1="52" x2="351" y2="52"/><line x1="377" y1="52" x2="419" y2="52"/></g><g font-size="8.5" text-anchor="middle"><g><circle cx="24" cy="52" r="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="1.2"/><text x="24" y="55" fill="var(--primary)" font-weight="600">1</text><text x="24" y="78" fill="var(--text-secondary)">Understand</text></g><g><circle cx="92" cy="52" r="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="1.2"/><text x="92" y="55" fill="var(--primary)" font-weight="600">2</text><text x="92" y="78" fill="var(--text-secondary)">Goals</text></g><g><circle cx="160" cy="52" r="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="1.2"/><text x="160" y="55" fill="var(--primary)" font-weight="600">3</text><text x="160" y="78" fill="var(--text-secondary)">Analyze</text></g><g><circle cx="228" cy="52" r="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="1.2"/><text x="228" y="55" fill="var(--primary)" font-weight="600">4</text><text x="228" y="78" fill="var(--text-secondary)">Develop</text></g><g><circle cx="296" cy="52" r="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="1.2"/><text x="296" y="55" fill="var(--primary)" font-weight="600">5</text><text x="296" y="78" fill="var(--text-secondary)">Present</text></g><g><circle cx="364" cy="52" r="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="1.2"/><text x="364" y="55" fill="var(--primary)" font-weight="600">6</text><text x="364" y="78" fill="var(--text-secondary)">Implement</text></g><g><circle cx="432" cy="52" r="12" fill="var(--bg-card)" stroke="var(--gold)" stroke-width="1.4"/><text x="432" y="55" fill="var(--gold)" font-weight="600">7</text><text x="432" y="78" fill="var(--text-secondary)">Monitor</text></g></g></svg>` } },
          { kind: "example", example: { title: "checking a client's cash-flow health", prompt: "A client earns $90,000 gross, pays $20,000 in taxes, and spends $56,000 on living costs. What is the gross savings rate, and how large should the emergency fund be?", steps: ["Annual surplus = income − taxes − spending = 90,000 − 20,000 − 56,000 = $14,000 saved.", "Gross savings rate = 14,000 ÷ 90,000 = 15.6% — above the ~10–15% rule of thumb.", "Monthly living expenses = 56,000 ÷ 12 ≈ $4,667.", "Emergency fund (3–6 months) ≈ $14,000 to $28,000."], answer: "A healthy ~15.6% savings rate, with a $14,000–$28,000 emergency reserve target." } },
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
    readingMinutes: 18,
    summary: "Handling risk, the main types of life, health, disability, and property insurance, and when each fits.",
    intro:
      "Protecting a financial plan from catastrophic loss is as important as growing wealth. This domain teaches how to identify risks a client faces and choose the right tool to manage each — including insurance. A single uninsured disaster can undo decades of saving, so risk management is foundational, not optional.",
    sections: [
      {
        heading: "Managing risk",
        paragraphs: [
          "There are four basic responses to a risk: avoid it, reduce it, retain it, or transfer it. Insurance is the primary tool for transferring risk — paying a manageable premium to shift the cost of a low-probability, high-severity loss to an insurer. The guiding principle is to insure against risks you cannot afford to bear yourself (a house burning down, a breadwinner's death) and to retain (self-insure) small risks where insurance isn't cost-effective. Buying insurance for losses you could easily absorb wastes premium dollars.",
        ],
      },
      {
        heading: "Life and disability insurance",
        paragraphs: [
          "Life insurance replaces income and provides for dependents. Term insurance offers pure, temporary protection at low cost for a set period — ideal for covering needs that disappear over time, like a mortgage or child-rearing years. Permanent insurance (whole and universal life) lasts for life and builds cash value, costing far more but serving estate and lifelong needs. For most families with temporary income-replacement needs, term is the cost-effective choice.",
          "Disability income insurance is frequently overlooked yet vital — the odds of a disabling injury or illness during a career exceed the odds of premature death, and a disability can eliminate income while expenses continue. Key features include the elimination (waiting) period before benefits begin and the definition of disability ('own occupation' versus 'any occupation'), which dramatically affects how easily a claim is paid.",
        ],
        callout: {
          label: "Term vs permanent life",
          body: "Term = temporary, low-cost, pure protection (best for income replacement over a fixed period). Permanent = lifelong coverage that builds cash value, at much higher cost.",
        },
      },
      {
        heading: "Health, long-term care, and property/casualty",
        paragraphs: [
          "Health insurance manages medical-cost risk through premiums, deductibles, copays, and out-of-pocket maximums. Long-term care insurance covers extended custodial care (nursing homes, in-home aides) that health insurance and Medicare largely don't, a growing concern as people live longer. Property and casualty insurance — homeowners and auto — protects against damage to property and liability claims from others. Liability coverage, including an umbrella policy that sits atop home and auto limits, protects accumulated wealth from lawsuits, an essential safeguard for higher-net-worth clients.",
        ],
      },
      {
        heading: "Which risks to insure — a frequency/severity map",
        blocks: [
          { kind: "p", text: "The right response to a risk depends on two questions: how often does it happen (frequency), and how badly does it hurt when it does (severity)? Plotting risks on that grid points to the correct tool. Insurance is the answer in exactly one quadrant — low-frequency, high-severity events — because that is where a manageable premium buys protection against a loss you could never absorb yourself." },
          { kind: "figure", figure: { caption: "Figure 2 — The risk-management matrix. Insurance (risk transfer) is reserved for the low-frequency, high-severity quadrant; small or frequent losses are cheaper to reduce or retain.", alt: "Two-by-two grid of frequency versus severity showing reduce, avoid, retain, and transfer", svg: `<svg viewBox="0 0 460 210" width="100%" style="max-width:460px"><g font-size="9"><text transform="rotate(-90 16 110)" x="16" y="110" text-anchor="middle" fill="var(--text-muted)">Frequency</text><text x="86" y="18" font-size="8.5" fill="var(--text-muted)">High</text><text x="86" y="180" font-size="8.5" fill="var(--text-muted)">Low</text><text x="155" y="200" text-anchor="middle" font-size="8.5" fill="var(--text-muted)">Low severity</text><text x="335" y="200" text-anchor="middle" font-size="8.5" fill="var(--text-muted)">High severity</text></g><g stroke="var(--border)" stroke-width="0.5"><rect x="70" y="24" width="170" height="78" fill="var(--ats-amber-bg)"/><rect x="240" y="24" width="170" height="78" fill="var(--ats-red-bg)"/><rect x="70" y="102" width="170" height="78" fill="var(--bg-card)"/><rect x="240" y="102" width="170" height="78" fill="var(--ats-green-bg)"/></g><g text-anchor="middle"><text x="155" y="60" font-size="11" font-weight="600" fill="var(--ats-amber)">Reduce</text><text x="155" y="76" font-size="8" fill="var(--text-secondary)">cut the odds</text><text x="325" y="60" font-size="11" font-weight="600" fill="var(--ats-red)">Avoid</text><text x="325" y="76" font-size="8" fill="var(--text-secondary)">don't take it on</text><text x="155" y="138" font-size="11" font-weight="600" fill="var(--text-secondary)">Retain</text><text x="155" y="154" font-size="8" fill="var(--text-secondary)">self-insure</text><text x="325" y="138" font-size="11" font-weight="700" fill="var(--ats-green)">Transfer — insure</text><text x="325" y="154" font-size="8" fill="var(--text-secondary)">premium buys protection</text></g></svg>` } },
          { kind: "table", table: { caption: "Table 1 — Matching the life-insurance tool to the need.", headers: ["Feature", "Term life", "Permanent life"], rows: [["Duration", "Set period (10–30 yrs)", "Lifelong"], ["Relative cost", "Low", "High (often 5–10×)"], ["Cash value", "None", "Builds over time"], ["Best for", "Temporary income replacement", "Estate & lifelong needs"]] } },
          { kind: "callout", label: "Disability: watch the definition", body: "An 'own-occupation' policy pays if you can't do YOUR job; an 'any-occupation' policy pays only if you can't do any job — a far harder bar. The definition of disability matters more than the headline benefit." },
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
    readingMinutes: 16,
    summary: "How income is taxed, the difference marginal rates and capital gains make, and core planning moves.",
    intro:
      "Taxes touch every financial decision, and a planner who understands them can meaningfully improve a client's after-tax results. This domain covers how the income tax works, the crucial distinction between ordinary income and capital gains, and the planning techniques used to legally minimize the tax drag on a portfolio and a plan.",
    sections: [
      {
        heading: "How the income tax works",
        paragraphs: [
          "The U.S. uses a progressive income tax: income is taxed in brackets, with higher portions taxed at higher rates. The marginal rate is the rate on the next dollar earned, while the effective (average) rate is total tax divided by total income — always lower than the marginal rate. This distinction matters for planning: the value of a deduction depends on the marginal rate, and decisions like Roth conversions hinge on comparing today's marginal rate to the expected rate in retirement.",
          "Taxable income is gross income minus adjustments, deductions, and exemptions. Deductions reduce taxable income (worth your marginal rate per dollar), while credits reduce tax owed dollar-for-dollar (generally more valuable). Knowing the difference is a frequent test point.",
        ],
        callout: {
          label: "Deduction vs credit",
          body: "A deduction reduces taxable income (worth your marginal rate per dollar). A tax credit reduces the tax bill dollar-for-dollar — generally more valuable than an equal-size deduction.",
        },
      },
      {
        heading: "Capital gains and investment taxation",
        paragraphs: [
          "Investment gains receive special treatment. A gain on an asset held more than a year is a long-term capital gain, taxed at preferential rates well below ordinary income; a gain on an asset held a year or less is short-term, taxed as ordinary income. This single rule drives a lot of planning: holding investments longer than a year before selling can sharply cut the tax on the gain. Qualified dividends similarly receive the lower long-term rate.",
          "Losses are useful too. Capital losses offset capital gains, and excess losses can offset a limited amount of ordinary income, with the remainder carried forward. Tax-loss harvesting — deliberately realizing losses to offset gains — is a common year-end technique, subject to the wash-sale rule, which disallows the loss if you buy back substantially the same security within 30 days.",
        ],
      },
      {
        heading: "Tax-advantaged planning",
        paragraphs: [
          "Much of tax planning is about timing and location. Tax-deferred accounts (traditional IRAs and 401(k)s) postpone tax until withdrawal, while tax-free accounts (Roth) are funded with after-tax dollars but grow and distribute tax-free. 'Asset location' places tax-inefficient investments inside sheltered accounts and tax-efficient ones in taxable accounts. The overarching goal isn't to avoid all tax — it's to maximize after-tax wealth by deferring tax, converting ordinary income into lower-taxed capital gains where possible, and using credits and deductions fully.",
        ],
      },
      {
        heading: "Marginal vs effective — and why credits beat deductions",
        blocks: [
          { kind: "example", example: { title: "computing both tax rates", prompt: "Using simplified brackets — 10% on the first $20,000 and 22% on income above $20,000 — what does a $60,000 earner owe, and what are the marginal and effective rates?", steps: ["First $20,000 taxed at 10% = $2,000.", "Remaining $40,000 ($60,000 − $20,000) taxed at 22% = $8,800.", "Total tax = 2,000 + 8,800 = $10,800.", "Marginal rate = 22% (rate on the next dollar). Effective rate = 10,800 ÷ 60,000 = 18%."], answer: "Tax = $10,800; marginal 22%, effective 18% — the effective rate is always below the marginal rate." } },
          { kind: "table", table: { caption: "Table 1 — A $1,000 deduction vs a $1,000 credit, at a 22% marginal rate.", headers: ["", "$1,000 deduction", "$1,000 credit"], rows: [["Reduces", "Taxable income", "Tax owed"], ["Dollar value", "$220 (22% × 1,000)", "$1,000"], ["Verdict", "Worth your marginal rate", "Worth full face value"]] } },
          { kind: "callout", label: "The planning hook", body: "Because a deduction is only worth your marginal rate, the same deduction helps a high earner more than a low earner. A credit is worth its full face value to everyone — which is why credits are generally the more powerful planning tool." },
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
    readingMinutes: 18,
    summary: "Qualified plans, IRAs, the Roth-vs-traditional decision, and Social Security basics.",
    intro:
      "Helping clients accumulate enough to retire — and draw it down sustainably — is one of the most valued services a planner provides. This domain covers the retirement savings vehicles, their tax treatment, the rules that govern contributions and withdrawals, and how Social Security fits into the picture. The decisions here compound over decades, so getting them right matters enormously.",
    sections: [
      {
        heading: "Qualified plans and IRAs",
        paragraphs: [
          "Employer-sponsored qualified plans like the 401(k) let employees contribute pre-tax dollars that grow tax-deferred, often with an employer match — effectively free money that a planner urges clients to capture fully. Defined contribution plans (like 401(k)s) put the investment risk on the employee, while traditional defined benefit pensions promise a set retirement income and put the risk on the employer; the world has shifted heavily toward defined contribution.",
          "Individual Retirement Accounts (IRAs) supplement workplace plans. A traditional IRA may offer a deductible contribution and tax-deferred growth, with withdrawals taxed as ordinary income. Contributions and deductibility phase out at higher incomes or when covered by a workplace plan. The tax-deferral mechanic is the engine of retirement saving: paying no tax on growth along the way lets the balance compound faster.",
        ],
      },
      {
        heading: "Roth vs traditional",
        paragraphs: [
          "The Roth-versus-traditional choice is central. A traditional account gives a tax break now (deductible contribution) and taxes withdrawals later; a Roth account gives no break now (after-tax contribution) but tax-free withdrawals in retirement, including all the growth. The decision hinges on comparing the client's current marginal tax rate to their expected rate in retirement: if you expect to be in a higher bracket later, the Roth's tax-free withdrawals win; if lower, the traditional deduction now is better. Roth accounts also escape required minimum distributions during the owner's lifetime, adding flexibility.",
        ],
        callout: {
          label: "Roth vs traditional rule of thumb",
          body: "Expect a HIGHER tax rate in retirement → favor Roth (pay tax now, withdraw tax-free). Expect a LOWER rate later → favor traditional (deduct now, pay tax on withdrawals).",
        },
      },
      {
        heading: "Withdrawal rules and Social Security",
        paragraphs: [
          "Retirement accounts come with timing rules. Withdrawals before age 59½ generally trigger a 10% early-withdrawal penalty plus tax, with limited exceptions. Traditional accounts require minimum distributions (RMDs) beginning at the statutory age, forcing taxable withdrawals whether the retiree needs them or not. Planning around these rules — sequencing withdrawals across account types — can materially extend a portfolio's life.",
          "Social Security provides a baseline of inflation-adjusted income. The claiming-age decision is pivotal: claiming early (as soon as age 62) permanently reduces the monthly benefit, while delaying past full retirement age (up to 70) increases it. For clients with longevity and other income, delaying often produces more lifetime income — a key planning lever.",
        ],
      },
      {
        heading: "Roth vs traditional, proven with numbers",
        blocks: [
          { kind: "example", example: { title: "when the future rate is higher", prompt: "A client has $6,000 of pre-tax money. Traditional: invest all $6,000, let it grow 3×, and pay 32% on withdrawal. Roth: pay 24% tax now, invest what's left, grow 3×, withdraw tax-free. Which nets more?", steps: ["Traditional: $6,000 → 3× = $18,000; tax at 32% = $5,760; after-tax = $12,240.", "Roth: pay 24% now ($1,440) → invest $4,560 → 3× = $13,680; withdrawn tax-free = $13,680.", "Roth nets $1,440 more, because the retirement rate (32%) exceeds today's rate (24%)."], answer: "Roth wins, $13,680 vs $12,240 — pay tax now whenever your future rate will be higher." } },
          { kind: "table", table: { caption: "Table 1 — The Roth-vs-traditional decision at a glance.", headers: ["", "Traditional", "Roth"], rows: [["Contribution", "Pre-tax (deductible)", "After-tax"], ["Withdrawals", "Taxed as ordinary income", "Tax-free"], ["Lifetime RMDs", "Required at statutory age", "None for the owner"], ["Favored when", "Lower rate in retirement", "Higher rate in retirement"]] } },
          { kind: "callout", label: "Match first, always", body: "Before the Roth-vs-traditional debate even starts, capture the full employer match — it's an immediate, guaranteed return (often 50–100%) that no account-type choice can beat." },
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
    readingMinutes: 16,
    summary: "Wills, probate, trusts, beneficiary designations, and the basics of gift and estate tax.",
    intro:
      "Estate planning ensures a client's assets pass to the people and causes they choose, with minimal cost, delay, and tax. It also addresses incapacity — who decides if the client can't. This domain covers the core documents and structures, the probate process, and the transfer-tax system, all of which a comprehensive planner coordinates.",
    sections: [
      {
        heading: "Wills, probate, and incapacity documents",
        paragraphs: [
          "A will directs how probate assets are distributed and names guardians for minor children, but it must go through probate — the court-supervised process of validating the will and settling the estate, which can be public, slow, and costly. A key planning goal is often to minimize probate. Beyond the will, clients need incapacity documents: a durable power of attorney (naming someone to manage finances if they can't) and an advance healthcare directive or healthcare proxy (for medical decisions). Without these, families face court intervention during a crisis.",
        ],
      },
      {
        heading: "Trusts and avoiding probate",
        paragraphs: [
          "A trust holds assets for beneficiaries under terms set by the grantor and managed by a trustee. A revocable living trust lets the grantor retain control during life and pass assets to beneficiaries outside of probate at death — providing privacy and speed, though it offers no estate-tax savings by itself. Irrevocable trusts, by giving up control, can remove assets from the taxable estate and provide creditor protection. Importantly, assets with beneficiary designations (life insurance, retirement accounts) and jointly held property with survivorship pass outside probate directly — which is why keeping beneficiary designations current is critical; they override the will.",
        ],
        callout: {
          label: "Beneficiary designations override the will",
          body: "Life insurance and retirement accounts pass to the named beneficiary directly, regardless of what the will says. Outdated designations are a common, costly mistake.",
        },
      },
      {
        heading: "Gift and estate tax",
        paragraphs: [
          "The federal transfer-tax system taxes large gifts and estates, but generous exclusions mean most people owe nothing. An annual gift tax exclusion lets a person give a set amount per recipient each year tax-free, a simple way to shrink a taxable estate over time. A large lifetime exemption shelters cumulative gifts and the estate up to a threshold. The unlimited marital deduction allows spouses to transfer any amount to each other tax-free, and a 'step-up in basis' resets inherited assets to their date-of-death value, often erasing capital-gains tax on appreciation. Coordinating these features is how planners transfer wealth efficiently across generations.",
        ],
      },
      {
        heading: "What avoids probate — and the step-up that saves taxes",
        blocks: [
          { kind: "table", table: { caption: "Table 1 — How assets actually transfer at death. Most well-planned estates move the bulk of assets OUTSIDE probate.", headers: ["Asset / arrangement", "Through probate?"], rows: [["Solely-owned assets passed by will", "Yes — probate"], ["Revocable living trust assets", "No — per trust terms"], ["Life insurance / retirement (beneficiary)", "No — to named beneficiary"], ["Joint tenancy with survivorship", "No — to surviving owner"], ["Payable-on-death (POD) accounts", "No — to named payee"]] } },
          { kind: "example", example: { title: "the step-up in basis", prompt: "A parent bought stock for $10,000; it's worth $50,000 at death. The heir later sells it for $52,000. What gain is taxable?", steps: ["Basis steps up to the date-of-death value = $50,000 (not the original $10,000).", "Gain = sale price − stepped-up basis = 52,000 − 50,000 = $2,000.", "The $40,000 of appreciation during the parent's lifetime escapes income tax entirely."], answer: "Only $2,000 is taxable — the step-up erases the $40,000 of lifetime appreciation." } },
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
    readingMinutes: 16,
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
    readingMinutes: 13,
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
    readingMinutes: 12,
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
    readingMinutes: 15,
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
    readingMinutes: 16,
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
    readingMinutes: 16,
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
    readingMinutes: 17,
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
    readingMinutes: 15,
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
    readingMinutes: 16,
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
    choices: ["$650,000", "$150,000", "$250,000"],
    answerIndex: 1,
    explanation: "Net worth = assets − liabilities = $400,000 − $250,000 = $150,000. The statement of financial position captures a snapshot of what the client owns versus owes. Choice A incorrectly ADDS the two figures. Choice C simply restates liabilities. Net worth is the difference, and tracking its growth over time is a core measure of financial progress.",
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
    choices: ["One week of income", "3–6 months of expenses", "Two years of expenses"],
    answerIndex: 1,
    explanation: "The common guideline is three to six months of living expenses held in liquid, accessible accounts to cover unexpected events like job loss or medical bills. Choice A (one week) is far too little to weather a real disruption. Choice C (two years) ties up excessive cash earning low returns, which usually isn't an efficient use of the client's money.",
  },
  // Insurance
  {
    id: "cfp-ins-q1", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 2,
    stem: "A young couple needs maximum income-replacement life coverage for the lowest cost during their child-rearing years. The most appropriate choice is generally:",
    choices: ["Whole life insurance", "Term life insurance", "No insurance, to save money"],
    answerIndex: 1,
    explanation: "Term life provides pure, temporary protection at low cost — ideal for a large, time-limited need like income replacement during child-rearing years. Choice A (whole life) costs far more for the same death benefit because it builds cash value, reducing the coverage affordable on a budget. Choice C leaves dependents unprotected against the catastrophic risk of a breadwinner's death — exactly the risk that should be insured.",
  },
  {
    id: "cfp-ins-q2", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 2,
    stem: "Insurance is the most appropriate tool for risks that are:",
    choices: ["High-frequency and low-severity", "Low-frequency and high-severity", "Easily affordable out of pocket"],
    answerIndex: 1,
    explanation: "Insurance best transfers low-frequency, high-severity risks — rare events whose cost would be financially devastating (a home fire, premature death, major liability). Choices A and C describe small or frequent losses that are cheaper to retain (self-insure) than to insure, since paying premiums for losses you could absorb wastes money. Insure what you can't afford to lose; retain what you can.",
  },
  {
    id: "cfp-ins-q3", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 3,
    stem: "Which coverage protects a high-net-worth client's accumulated wealth from a large liability judgment exceeding their home and auto policy limits?",
    choices: ["An umbrella liability policy", "Long-term care insurance", "Term life insurance"],
    answerIndex: 0,
    explanation: "An umbrella policy provides excess liability coverage above the limits of underlying home and auto policies, shielding accumulated assets from a large lawsuit or judgment. Choice B (long-term care) covers custodial care costs, not liability. Choice C (term life) provides a death benefit, unrelated to liability protection. For wealthier clients, umbrella liability is an essential safeguard.",
  },
  // Tax
  {
    id: "cfp-tax-q1", examSlug: "cfp", topicId: "tax", topicName: "Tax Planning", difficulty: 2,
    stem: "Compared with a $1,000 tax deduction, a $1,000 tax credit for a taxpayer in the 24% bracket is:",
    choices: ["Worth less", "Worth more", "Exactly equal in value"],
    answerIndex: 1,
    explanation: "A credit reduces tax owed dollar-for-dollar, so a $1,000 credit cuts the tax bill by the full $1,000. A $1,000 deduction only reduces taxable income, saving the marginal rate × $1,000 = 0.24 × $1,000 = $240. So the credit (worth $1,000) is far more valuable than the deduction (worth $240). Choice A reverses the relationship; choice C ignores that deductions are only worth your marginal rate per dollar.",
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
    choices: ["More than one year", "At least 30 days", "More than five years"],
    answerIndex: 0,
    explanation: "A gain qualifies as long-term — taxed at preferential rates below ordinary income — when the asset is held for more than one year. A holding of a year or less produces a short-term gain taxed as ordinary income. Choice B (30 days) is far too short and relates to wash sales, not capital-gain holding periods. Choice C (five years) overstates the requirement for the general long-term rate.",
  },
  // Retirement
  {
    id: "cfp-ret-q1", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 2,
    stem: "A client expects to be in a HIGHER tax bracket in retirement than today. Between a traditional and a Roth account, which is generally more advantageous?",
    choices: ["Traditional (deduct now)", "Roth (tax-free withdrawals later)", "It never matters"],
    answerIndex: 1,
    explanation: "If the client expects a higher tax rate in retirement, a Roth wins: they pay tax now at the lower current rate and take withdrawals — including all growth — tax-free later when rates are higher. Choice A (traditional) is better when you expect a LOWER rate in retirement, taking the deduction now. Choice C is false; the comparison of current vs future tax rates is exactly what drives the decision.",
  },
  {
    id: "cfp-ret-q2", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 1,
    stem: "Withdrawing funds from a traditional IRA before age 59½ generally results in:",
    choices: ["No tax or penalty", "A 10% early-withdrawal penalty plus ordinary income tax", "A bonus from the IRS"],
    answerIndex: 1,
    explanation: "Early withdrawals from a traditional IRA (before 59½) generally incur a 10% penalty on top of ordinary income tax, with only limited exceptions. This penalty exists to discourage tapping retirement funds early. Choice A ignores the penalty. Choice C is obviously incorrect — there is no bonus for early withdrawal.",
  },
  {
    id: "cfp-ret-q3", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 2,
    stem: "An employer offers to match 401(k) contributions up to 5% of salary. A planner would most likely advise the client to first:",
    choices: ["Skip the 401(k) and invest elsewhere", "Contribute at least enough to capture the full match", "Withdraw from the 401(k) for current spending"],
    answerIndex: 1,
    explanation: "Capturing the full employer match should be a top priority — it's an immediate, guaranteed return on the contribution (free money) before considering other investments. Choice A leaves that match on the table. Choice C defeats the purpose of a retirement account and could trigger penalties. Contributing enough to get the full match is one of the highest-value moves in a plan.",
  },
  // Estate
  {
    id: "cfp-est-q1", examSlug: "cfp", topicId: "estate", topicName: "Estate Planning", difficulty: 2,
    stem: "A client's will leaves everything to their spouse, but their life insurance names an ex-spouse as beneficiary. At death, the life insurance proceeds go to:",
    choices: ["The current spouse, per the will", "The ex-spouse, per the beneficiary designation", "Whoever the probate court chooses"],
    answerIndex: 1,
    explanation: "Beneficiary designations on life insurance and retirement accounts pass assets directly to the named beneficiary and OVERRIDE the will. So the ex-spouse receives the proceeds despite the will's terms — a classic, costly mistake from outdated designations. Choice A wrongly assumes the will controls. Choice C is incorrect because these assets pass outside probate entirely. Keeping beneficiary designations current is essential.",
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
    choices: ["$10,000 (the original cost)", "$50,000 (the date-of-death value)", "$0"],
    answerIndex: 1,
    explanation: "The step-up in basis resets an inherited asset's cost basis to its fair market value at the date of death — $50,000 here — so if the heir sells immediately, there's little to no capital-gains tax, erasing the $40,000 of appreciation that built up during the decedent's life. Choice A (original cost) ignores the step-up. Choice C ($0) is incorrect; basis steps up to market value, not to zero.",
  },

  // ---- General Principles ----
  {
    id: "cfp-gen-q4", examSlug: "cfp", topicId: "general", topicName: "General Principles", difficulty: 2,
    stem: "Earnings in a 529 education savings plan grow:",
    choices: ["Tax-deferred, then fully taxable on withdrawal", "Tax-free when used for qualified education expenses", "Subject to annual capital-gains tax"],
    answerIndex: 1,
    explanation: "A 529 plan grows tax-free and distributions are tax-free at the federal level when used for qualified education expenses. Choice A describes a traditional retirement account, not a 529. Choice C is wrong because gains inside a 529 are not taxed annually; the tax advantage is the whole point of the vehicle.",
  },
  {
    id: "cfp-gen-q5", examSlug: "cfp", topicId: "general", topicName: "General Principles", difficulty: 2,
    stem: "A common guideline is that a household's total monthly housing costs should not exceed roughly what percent of gross monthly income (the front-end ratio)?",
    choices: ["28%", "50%", "75%"],
    answerIndex: 0,
    explanation: "The conventional front-end (housing) ratio guideline is about 28% of gross monthly income, with total debt (the back-end ratio) around 36%. Choice B (50%) would leave little room for other needs and signals over-extension. Choice C (75%) is far beyond any prudent housing burden.",
  },

  // ---- Risk Management & Insurance ----
  {
    id: "cfp-ins-q4", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 3,
    stem: "A Health Savings Account (HSA) offers a 'triple tax advantage' and must be paired with:",
    choices: ["Any health plan", "A high-deductible health plan (HDHP)", "A Medicare Advantage plan"],
    answerIndex: 1,
    explanation: "An HSA — contributions deductible, growth tax-free, and qualified medical withdrawals tax-free — is available only to those covered by a qualifying high-deductible health plan. Choice A is wrong; eligibility is tied specifically to an HDHP. Choice C is incorrect because enrolling in Medicare ends HSA contribution eligibility.",
  },
  {
    id: "cfp-ins-q5", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 2,
    stem: "An immediate annuity is most useful for managing which retirement risk?",
    choices: ["Inflation risk", "Longevity risk (outliving your money)", "Liquidity risk"],
    answerIndex: 1,
    explanation: "An immediate annuity converts a lump sum into a guaranteed income stream for life, directly addressing longevity risk — the danger of outliving one's assets. Choice A is wrong; a fixed annuity can actually worsen inflation risk unless inflation-adjusted. Choice C is backwards — annuitizing reduces liquidity, it doesn't solve a liquidity problem.",
  },
  {
    id: "cfp-ins-q6", examSlug: "cfp", topicId: "insurance", topicName: "Risk Management & Insurance", difficulty: 3,
    stem: "A disability policy with an 'own-occupation' definition pays benefits when the insured cannot perform:",
    choices: ["Any job whatsoever", "The duties of their own specific occupation", "Only manual-labor jobs"],
    answerIndex: 1,
    explanation: "An 'own-occupation' policy pays if the insured cannot perform the duties of their own occupation, even if they could work in some other field — the most favorable (and costly) definition. Choice A describes the stricter 'any-occupation' standard, which pays only if you can't do any job. Choice C invents a limitation that isn't how the definitions work.",
  },

  // ---- Tax Planning ----
  {
    id: "cfp-tax-q4", examSlug: "cfp", topicId: "tax", topicName: "Tax Planning", difficulty: 2,
    stem: "Qualified dividends are taxed at:",
    choices: ["Ordinary income tax rates", "The preferential long-term capital gains rates", "A flat 10% rate"],
    answerIndex: 1,
    explanation: "Qualified dividends receive the same preferential rates as long-term capital gains (0%, 15%, or 20% depending on income), rewarding longer-term equity ownership. Choice A applies to non-qualified (ordinary) dividends. Choice C invents a flat rate that doesn't exist in the dividend rules.",
  },
  {
    id: "cfp-tax-q5", examSlug: "cfp", topicId: "tax", topicName: "Tax Planning", difficulty: 3,
    stem: "The Alternative Minimum Tax (AMT) is best described as:",
    choices: ["An extra penalty on late filers", "A parallel tax system that adds back certain preference items to ensure a minimum tax", "A tax only on capital gains"],
    answerIndex: 1,
    explanation: "The AMT is a parallel calculation that disallows or adds back certain deductions and preference items; taxpayers pay the higher of regular tax or AMT, ensuring high-income taxpayers with many preferences still pay a minimum. Choice A confuses it with a late-filing penalty. Choice C is wrong; the AMT spans far more than capital gains.",
  },
  {
    id: "cfp-tax-q6", examSlug: "cfp", topicId: "tax", topicName: "Tax Planning", difficulty: 2,
    stem: "On a personal return, taxable income is computed by subtracting from AGI the:",
    choices: ["Greater of the standard deduction or itemized deductions", "Sum of all credits", "Total of all gross income"],
    answerIndex: 0,
    explanation: "Taxable income = AGI minus the greater of the standard deduction or total itemized deductions (and any qualified business income deduction). Choice B is wrong because credits reduce the tax itself, applied later, not taxable income. Choice C describes a starting point, not a subtraction.",
  },

  // ---- Retirement Planning ----
  {
    id: "cfp-ret-q4", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 2,
    stem: "Required minimum distributions (RMDs) from a traditional IRA now generally must begin at age:",
    choices: ["59½", "73", "85"],
    answerIndex: 1,
    explanation: "Under the SECURE 2.0 Act, RMDs from traditional retirement accounts generally begin at age 73. Choice A (59½) is the age after which withdrawals avoid the 10% early-withdrawal penalty — a different milestone. Choice C (85) is not an RMD age.",
  },
  {
    id: "cfp-ret-q5", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 2,
    stem: "A key advantage of a Roth IRA over a traditional IRA during the owner's lifetime is that the Roth:",
    choices: ["Requires minimum distributions starting at 73", "Has no required minimum distributions for the original owner", "Gives an upfront tax deduction"],
    answerIndex: 1,
    explanation: "A Roth IRA has no RMDs during the original owner's lifetime, letting the balance keep compounding tax-free and offering estate-planning flexibility. Choice A describes traditional accounts. Choice C is the traditional IRA's feature; Roth contributions are made with after-tax dollars and are not deductible.",
  },
  {
    id: "cfp-ret-q6", examSlug: "cfp", topicId: "retirement", topicName: "Retirement Planning", difficulty: 1,
    stem: "'Catch-up' contributions to retirement accounts are an additional amount allowed for individuals who are:",
    choices: ["Age 50 or older", "First-time savers", "High earners only"],
    answerIndex: 0,
    explanation: "Catch-up contributions let those age 50 and older contribute above the standard limit to IRAs and workplace plans, helping late savers accelerate. Choice B is incorrect; the rule is about age, not whether you're new to saving. Choice C is wrong — eligibility is based on age, not income (and high earners face other Roth/limit rules).",
  },

  // ---- Estate Planning ----
  {
    id: "cfp-est-q4", examSlug: "cfp", topicId: "estate", topicName: "Estate Planning", difficulty: 2,
    stem: "The annual gift tax exclusion allows a person to give, free of gift tax, up to a set amount per year to:",
    choices: ["One recipient only, total", "Each recipient (per donee, per year)", "Charities exclusively"],
    answerIndex: 1,
    explanation: "The annual exclusion applies per recipient per year, so a donor can gift the excluded amount to any number of individuals annually without using lifetime exemption or filing — a powerful way to shrink a taxable estate. Choice A wrongly caps it at a single recipient. Choice C is incorrect; the annual exclusion applies to gifts to individuals (charitable gifts have their own unlimited deduction).",
  },
  {
    id: "cfp-est-q5", examSlug: "cfp", topicId: "estate", topicName: "Estate Planning", difficulty: 2,
    stem: "Which document lets someone manage your finances if you become incapacitated (rather than at death)?",
    choices: ["A will", "A durable power of attorney", "A revocable trust's pour-over provision"],
    answerIndex: 1,
    explanation: "A durable power of attorney names an agent to handle financial matters and remains effective if you become incapacitated, avoiding a court-appointed guardianship. Choice A (a will) only operates at death. Choice C addresses asset transfer, not the authority to act on your behalf during incapacity.",
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
    choices: ["High positive correlation", "Low or negative correlation", "Identical returns"],
    answerIndex: 1,
    explanation: "The lower the correlation between holdings, the more their movements offset, reducing overall volatility for a given expected return — the core benefit of diversification. Choice A (high correlation) provides little risk reduction. Choice C would mean no diversification benefit at all.",
  },
  {
    id: "cfp-inv-q3", examSlug: "cfp", topicId: "investment", topicName: "Investment Planning", difficulty: 2,
    stem: "Research indicates that the largest driver of the variability in a portfolio's returns over time is:",
    choices: ["Individual security selection", "Asset allocation (the mix among asset classes)", "Market timing"],
    answerIndex: 1,
    explanation: "Asset allocation — the strategic mix among asset classes — explains the large majority of the variability of returns over time, far more than security selection or timing. Choices A and C contribute less and are harder to do consistently, which is why planners focus first on the allocation a client can hold through downturns.",
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
    choices: ["$500", "$2,500 (first four undergraduate years, partially refundable)", "$10,000"],
    answerIndex: 1,
    explanation: "The AOTC is worth up to $2,500 per student for the first four years of undergraduate study and is partially refundable. Choice A understates it. Choice C confuses it with the expense base used for the Lifetime Learning Credit (20% of up to $10,000 = $2,000).",
  },
  {
    id: "cfp-edu-q3", examSlug: "cfp", topicId: "education", topicName: "Education Planning", difficulty: 3,
    stem: "For financial aid purposes, assets generally reduce aid eligibility MOST when they are:",
    choices: ["Owned by the parent (e.g., a parent-owned 529)", "Owned by the student (e.g., a UTMA/UGMA)", "Held in a retirement account"],
    answerIndex: 1,
    explanation: "Student-owned assets are assessed at a much higher rate in the aid formula than parent-owned assets, so a custodial account can hurt aid more than a parent-owned 529. Choice A is assessed more gently. Choice C (retirement accounts) is generally excluded from the aid asset calculation.",
  },

  // ---- Psychology of Financial Planning ----
  {
    id: "cfp-psy-q1", examSlug: "cfp", topicId: "psychology", topicName: "Psychology of Financial Planning", difficulty: 3,
    stem: "The recommended approach is to MODERATE which kind of bias and ADAPT to the other?",
    choices: ["Moderate emotional biases; adapt to cognitive biases", "Moderate cognitive biases (with education); adapt to emotional biases", "Treat them identically"],
    answerIndex: 1,
    explanation: "Cognitive errors are reasoning flaws that can be corrected (moderated) with information and process; emotional biases are feeling-driven and usually better adapted to so the client stays committed to the plan. Choice A reverses the treatment, and choice C ignores the key distinction.",
  },
  {
    id: "cfp-psy-q2", examSlug: "cfp", topicId: "psychology", topicName: "Psychology of Financial Planning", difficulty: 2,
    stem: "Loss aversion typically leads investors to:",
    choices: ["Hold losing investments too long and sell winners too soon", "Diversify perfectly", "Take excessive risk in every market"],
    answerIndex: 0,
    explanation: "Because losses feel roughly twice as painful as equal gains, investors avoid realizing losses (holding losers) and lock in gains too early (selling winners). Choices B and C describe behaviors loss aversion actually undermines.",
  },
  {
    id: "cfp-psy-q3", examSlug: "cfp", topicId: "psychology", topicName: "Psychology of Financial Planning", difficulty: 2,
    stem: "'Money scripts' refer to:",
    choices: ["A budgeting software feature", "Often-unconscious beliefs about money, formed early in life, that drive financial behavior", "A type of estate document"],
    answerIndex: 1,
    explanation: "Money scripts are largely unconscious beliefs about money (money avoidance, worship, status, vigilance) formed in childhood that quietly shape financial decisions. Recognizing them helps a planner address the pattern behind a client's behavior. Choices A and C are unrelated to the concept.",
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
    choices: ["When granted", "When they vest, based on the vest-date value", "Only when sold"],
    answerIndex: 1,
    explanation: "RSUs are taxed as ordinary income at vesting, valued at the share price on the vest date; later sales create capital gain or loss from that basis. Choice A is too early (grant isn't taxable). Choice C ignores the vesting event.",
  },
  {
    id: "cfp-ben-q3", examSlug: "cfp", topicId: "benefits", topicName: "Employee Benefits & Equity Comp", difficulty: 3,
    stem: "A distinctive tax wrinkle of incentive stock options (ISOs) is that the bargain element at exercise:",
    choices: ["Is always tax-free", "Is a preference item for the Alternative Minimum Tax (AMT)", "Is deductible by the employee"],
    answerIndex: 1,
    explanation: "ISOs can qualify for favorable long-term capital gains treatment, but the bargain element at exercise is an AMT preference item, which can trigger AMT even though there's no regular-tax event. Choice A overstates the benefit. Choice C is incorrect.",
  },
  {
    id: "cfp-ben-q4", examSlug: "cfp", topicId: "benefits", topicName: "Employee Benefits & Equity Comp", difficulty: 2,
    stem: "A key advantage of an HSA over an FSA is that the HSA:",
    choices: ["Is use-it-or-lose-it", "Rolls over year to year and offers a triple tax advantage", "Requires no health plan"],
    answerIndex: 1,
    explanation: "HSA balances roll over and grow (contributions deductible, growth tax-free, qualified withdrawals tax-free). Choice A describes the FSA's main drawback. Choice C is false — an HSA requires a qualifying high-deductible health plan.",
  },
  {
    id: "cfp-ben-q5", examSlug: "cfp", topicId: "benefits", topicName: "Employee Benefits & Equity Comp", difficulty: 2,
    stem: "Equity compensation most often creates which planning problem?",
    choices: ["Too much liquidity", "Concentration risk in the employer's stock", "Excessive diversification"],
    answerIndex: 1,
    explanation: "Heavy equity comp ties a client's portfolio AND paycheck to one company, creating dangerous concentration risk that a downturn can hit on both fronts. Choices A and C are the opposite of the actual problem.",
  },

  // ---- Retirement Income Planning ----
  {
    id: "cfp-inc-q1", examSlug: "cfp", topicId: "income", topicName: "Retirement Income Planning", difficulty: 2,
    stem: "The cleanest tool to hedge longevity risk (outliving your money) is:",
    choices: ["A short-term bond ladder", "An immediate annuity that pays for life", "A money-market fund"],
    answerIndex: 1,
    explanation: "An immediate annuity guarantees income for life, directly addressing longevity risk; the cost is lost liquidity once annuitized. Choices A and C provide safety/liquidity but no lifetime-income guarantee.",
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
    stem: "Sequence-of-returns risk is the danger that:",
    choices: ["Average returns are too low", "Poor returns EARLY in retirement, while withdrawing, permanently impair the portfolio", "Inflation erodes purchasing power"],
    answerIndex: 1,
    explanation: "Two retirees with the same average return can fare very differently based on the ORDER of returns; bad early years combined with withdrawals shrink the base that later gains compound on. Choice A ignores ordering. Choice C describes inflation risk, a different threat.",
  },
  {
    id: "cfp-inc-q4", examSlug: "cfp", topicId: "income", topicName: "Retirement Income Planning", difficulty: 2,
    stem: "A 'life-only' annuity payout option, compared with joint-and-survivor, generally provides:",
    choices: ["Lower income but continues to a spouse", "Higher income but stops at the annuitant's death", "The same income with a death benefit"],
    answerIndex: 1,
    explanation: "Life-only pays the most because payments cease at death with nothing to survivors; joint-and-survivor pays less but continues to a spouse. Choice A describes joint-and-survivor. Choice C misstates the trade-off between income and protection.",
  },
  {
    id: "cfp-inc-q5", examSlug: "cfp", topicId: "income", topicName: "Retirement Income Planning", difficulty: 2,
    stem: "In a variable annuity, investment risk is borne by:",
    choices: ["The insurance company", "The contract owner (subaccount performance drives returns)", "The federal government"],
    answerIndex: 1,
    explanation: "A variable annuity invests in subaccounts, so investment performance and risk pass to the owner — unlike a fixed annuity, where the insurer guarantees a rate. Choice A describes a fixed annuity. Choice C is incorrect; annuities are not government-guaranteed.",
  },

  // ---- Trusts & Advanced Estate Strategies ----
  {
    id: "cfp-tr-q1", examSlug: "cfp", topicId: "trusts", topicName: "Trusts & Advanced Estate Strategies", difficulty: 2,
    stem: "A revocable living trust primarily provides:",
    choices: ["Estate-tax savings and creditor protection", "Probate avoidance, but no estate-tax savings", "A guaranteed investment return"],
    answerIndex: 1,
    explanation: "A revocable trust avoids probate (privacy, speed) but gives no estate-tax savings or creditor protection because the grantor retains control. Choice A describes irrevocable trusts. Choice C is unrelated to trusts.",
  },
  {
    id: "cfp-tr-q2", examSlug: "cfp", topicId: "trusts", topicName: "Trusts & Advanced Estate Strategies", difficulty: 3,
    stem: "An irrevocable life insurance trust (ILIT) is used to:",
    choices: ["Keep life insurance proceeds OUT of the taxable estate", "Guarantee the policy never lapses", "Convert term insurance to whole life"],
    answerIndex: 0,
    explanation: "An ILIT owns the life policy so the death benefit passes outside the insured's taxable estate (proceeds are otherwise included if the insured owned the policy). Choices B and C are unrelated to the ILIT's estate-tax purpose.",
  },
  {
    id: "cfp-tr-q3", examSlug: "cfp", topicId: "trusts", topicName: "Trusts & Advanced Estate Strategies", difficulty: 3,
    stem: "A QTIP trust is especially useful when a client wants to:",
    choices: ["Give the surviving spouse complete control of where assets ultimately go", "Provide for a spouse while controlling the ultimate beneficiaries (e.g., children from a prior marriage)", "Avoid making any marital transfer"],
    answerIndex: 1,
    explanation: "A QTIP qualifies for the marital deduction while letting the first spouse dictate who ultimately receives the assets — ideal for blended families. Choice A is the opposite (the point is to limit the survivor's control over the remainder). Choice C contradicts its marital-deduction purpose.",
  },
  {
    id: "cfp-tr-q4", examSlug: "cfp", topicId: "trusts", topicName: "Trusts & Advanced Estate Strategies", difficulty: 2,
    stem: "Portability allows a surviving spouse to:",
    choices: ["Move a 401(k) between employers", "Use the deceased spouse's unused estate-tax exemption", "Avoid all income tax"],
    answerIndex: 1,
    explanation: "Portability lets a surviving spouse add the deceased spouse's unused estate-tax exemption to their own, increasing the amount shielded from estate tax. Choice A confuses it with a rollover. Choice C overstates it; portability concerns estate, not income, tax.",
  },
  {
    id: "cfp-tr-q5", examSlug: "cfp", topicId: "trusts", topicName: "Trusts & Advanced Estate Strategies", difficulty: 3,
    stem: "The generation-skipping transfer (GST) tax exists to:",
    choices: ["Encourage gifts to grandchildren", "Prevent families from skipping a generation to avoid a layer of estate tax", "Tax all gifts to children"],
    answerIndex: 1,
    explanation: "The GST tax applies to transfers that skip a generation (e.g., directly to grandchildren), stopping families from avoiding the estate tax that would apply at the skipped generation. Choice A is backwards. Choice C misstates its scope.",
  },

  // Time Value of Money
  {
    id: "cfp-tvm-q1", examSlug: "cfp", topicId: "tvm", topicName: "Time Value of Money", difficulty: 2,
    stem: "A client needs $20,000 in 5 years and can earn 6% annually. Approximately how much must be invested today as a lump sum?",
    choices: ["$14,945", "$16,400", "$18,868"],
    answerIndex: 0,
    explanation: "PV = FV ÷ (1 + i)ⁿ = 20,000 ÷ (1.06)⁵ = 20,000 ÷ 1.3382 ≈ $14,945. Compounding at 6% for five years turns roughly $14,945 into $20,000. Choice C uses too short a period; choice B mis-discounts. This single-sum present-value calculation underlies most goal-funding work.",
  },
  {
    id: "cfp-tvm-q2", examSlug: "cfp", topicId: "tvm", topicName: "Time Value of Money", difficulty: 2,
    stem: "Why is an annuity due worth more than an otherwise identical ordinary annuity?",
    choices: ["It has more payments", "Each payment is made at the beginning of the period, compounding one extra period", "It uses a higher interest rate"],
    answerIndex: 1,
    explanation: "An annuity due pays at the BEGINNING of each period, so every payment earns an additional period of compounding compared with an ordinary (end-of-period) annuity, raising its value. The number of payments (A) and the rate (C) are the same; only the timing differs.",
  },
  {
    id: "cfp-tvm-q3", examSlug: "cfp", topicId: "tvm", topicName: "Time Value of Money", difficulty: 3,
    stem: "With a nominal return of 8% and inflation of 3%, the inflation-adjusted (real) rate used to fund an inflating goal is closest to:",
    choices: ["5.00%", "4.85%", "11.00%"],
    answerIndex: 1,
    explanation: "The real rate is computed by dividing, not subtracting: [(1.08 ÷ 1.03) − 1] = 1.0485 − 1 ≈ 4.85%, slightly below the simple 5% difference (A). Adding the rates (C) is incorrect. Planners use this serial/real rate when a goal grows with inflation.",
  },
  {
    id: "cfp-tvm-q4", examSlug: "cfp", topicId: "tvm", topicName: "Time Value of Money", difficulty: 1,
    stem: "Which five variables drive a standard time-value-of-money calculation?",
    choices: ["PV, FV, i, n, and PMT", "Assets, liabilities, income, expenses, and net worth", "Alpha, beta, Sharpe, NPV, and IRR"],
    answerIndex: 0,
    explanation: "Every TVM problem uses present value, future value, the interest rate, the number of periods, and the payment (PV, FV, i, n, PMT); given any four, you solve for the fifth. Choice B lists financial-statement items; choice C lists performance metrics — neither is the TVM variable set.",
  },
  {
    id: "cfp-tvm-q5", examSlug: "cfp", topicId: "tvm", topicName: "Time Value of Money", difficulty: 2,
    stem: "Increasing the compounding frequency from annual to monthly, holding the stated rate constant, will:",
    choices: ["Lower the effective annual rate", "Raise the effective annual rate", "Have no effect"],
    answerIndex: 1,
    explanation: "More frequent compounding means interest earns interest sooner, raising the effective annual rate above the stated nominal rate. Annual compounding (A) would give the lowest effective rate. The effect is real (C is wrong) — always match the rate and period count to the compounding frequency.",
  },

  // Cash Flow & Debt Management
  {
    id: "cfp-cf-q1", examSlug: "cfp", topicId: "cashflow", topicName: "Cash Flow & Debt Management", difficulty: 1,
    stem: "A client's net worth is calculated as:",
    choices: ["Income minus expenses", "Assets minus liabilities", "Gross income times a factor"],
    answerIndex: 1,
    explanation: "Net worth equals total assets (at fair market value) minus total liabilities — the bottom line of the statement of financial position. Income minus expenses (A) is the cash flow statement's surplus/deficit, a different measure over a period. Choice C is not a recognized calculation.",
  },
  {
    id: "cfp-cf-q2", examSlug: "cfp", topicId: "cashflow", topicName: "Cash Flow & Debt Management", difficulty: 2,
    stem: "A common guideline for an emergency fund is to hold liquid reserves covering:",
    choices: ["1 week of income", "3–6 months of nondiscretionary expenses", "2 years of total spending"],
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
    choices: ["Original purchase cost", "Fair market value", "Insured value"],
    answerIndex: 1,
    explanation: "Personal financial statements show assets at their current fair market value so net worth reflects today's reality. Original cost (A) is a historical figure that can be far from current value. Insured value (C) is set for coverage purposes and isn't the basis for the balance sheet.",
  },
  {
    id: "cfp-cf-q5", examSlug: "cfp", topicId: "cashflow", topicName: "Cash Flow & Debt Management", difficulty: 2,
    stem: "When prioritizing the use of monthly surplus cash flow, a planner generally recommends first:",
    choices: ["Speculative investments", "Capturing any employer retirement match and building an emergency fund", "Paying extra on a low-rate mortgage"],
    answerIndex: 1,
    explanation: "High-priority uses come first: capturing 'free money' from an employer match and establishing an emergency reserve protect the entire plan. Speculative investments (A) come much later, after foundations are set. Prepaying a low-rate mortgage (C) is low priority versus a match and reserve given its modest, certain return.",
  },

  // Property, Casualty & Health Insurance
  {
    id: "cfp-pc-q1", examSlug: "cfp", topicId: "pc-health", topicName: "Property, Casualty & Health Insurance", difficulty: 1,
    stem: "Insurance is an example of which risk-management technique?",
    choices: ["Risk retention", "Risk transfer", "Risk avoidance"],
    answerIndex: 1,
    explanation: "Buying insurance transfers the financial consequences of a risk to the insurer — risk transfer. Retention (A) means bearing the risk yourself (e.g., a deductible). Avoidance (C) means not engaging in the risky activity at all. The rule is to transfer high-severity, low-frequency risks.",
  },
  {
    id: "cfp-pc-q2", examSlug: "cfp", topicId: "pc-health", topicName: "Property, Casualty & Health Insurance", difficulty: 3,
    stem: "A home has a $250,000 replacement cost and an 80% coinsurance clause, but is insured for only $160,000. A partial loss will be reimbursed at approximately what fraction (before the deductible)?",
    choices: ["100%", "80%", "64%"],
    answerIndex: 1,
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
    choices: ["Only tax-free withdrawals", "Deductible contributions, tax-free growth, and tax-free qualified withdrawals", "A deduction only at retirement"],
    answerIndex: 1,
    explanation: "An HSA, paired with a high-deductible health plan, has a triple tax advantage: contributions are deductible, growth is tax-free, and qualified medical withdrawals are tax-free. Choice A captures only one leg, and choice C misstates the timing — the deduction applies when contributions are made.",
  },
  {
    id: "cfp-pc-q5", examSlug: "cfp", topicId: "pc-health", topicName: "Property, Casualty & Health Insurance", difficulty: 2,
    stem: "Which type of care is primarily covered by long-term-care insurance but largely NOT by Medicare?",
    choices: ["Custodial care assisting with activities of daily living", "Emergency hospital care", "Prescription drugs"],
    answerIndex: 0,
    explanation: "Long-term-care insurance covers custodial care — ongoing help with activities of daily living like bathing and dressing — which Medicare largely does not cover. Hospital care (B) is Medicare Part A, and prescription drugs (C) are Part D. The custodial-care gap is a major, often-overlooked retirement risk.",
  },
];

export const cfpContent: ExamContent = {
  examSlug: "cfp",
  chapters,
  questions,
};
