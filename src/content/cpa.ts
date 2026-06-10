// ============================================================
// Certus — CPA content (wave 1, original)
// The Certified Public Accountant exam. Core sections:
// Financial Reporting (FAR), Auditing (AUD), Taxation &
// Regulation (REG), and Business Environment (BEC).
// ============================================================

import { Chapter, Question, ExamContent } from "./types";

const chapters: Chapter[] = [
  // 1. FINANCIAL REPORTING (FAR)
  {
    id: "cpa-far",
    examSlug: "cpa",
    topicId: "far",
    topicName: "Financial Reporting (FAR)",
    title: "Financial Reporting: Statements, Accrual, and Revenue",
    readingMinutes: 20,
    summary: "The financial statements, accrual accounting, the accounting equation, and revenue recognition.",
    intro:
      "Financial Accounting and Reporting (FAR) is the broadest and, for many, the hardest section of the CPA exam. It tests how transactions are recorded and presented under U.S. GAAP across the four financial statements. The goal is fluency in how economic events flow through the accounting system to produce statements that fairly represent a company's position and performance.",
    sections: [
      {
        heading: "The accounting equation and the four statements",
        paragraphs: [
          "Everything in financial accounting rests on one identity: Assets = Liabilities + Equity. Every transaction keeps this equation in balance through double-entry bookkeeping, where each entry has equal debits and credits. The four financial statements present the results: the balance sheet (financial position at a point in time), the income statement (revenues and expenses over a period), the statement of cash flows (cash movement split into operating, investing, and financing), and the statement of changes in equity.",
          "These statements articulate — they tie together. Net income from the income statement flows into retained earnings on the balance sheet and is the starting point for the operating section of the cash flow statement (under the indirect method). A candidate must be able to trace a transaction through all of them.",
        ],
        callout: {
          label: "The accounting equation",
          body: "Assets = Liabilities + Equity. Double-entry bookkeeping keeps it balanced: every transaction posts equal debits and credits.",
        },
      },
      {
        heading: "Accrual accounting",
        paragraphs: [
          "U.S. GAAP requires accrual accounting: revenue is recognized when earned and expenses when incurred, regardless of when cash changes hands. This is governed by the revenue recognition principle and the matching principle (expenses are matched to the revenues they help generate). Accrual accounting gives a more faithful picture of a period's performance than cash accounting, but it relies on estimates and adjusting entries — accruals, deferrals, depreciation — made at period end to state the accounts correctly.",
        ],
      },
      {
        heading: "Revenue recognition",
        paragraphs: [
          "Modern GAAP recognizes revenue using a five-step model: identify the contract with a customer, identify the performance obligations, determine the transaction price, allocate that price to the obligations, and recognize revenue as each obligation is satisfied. The core principle is that revenue is recognized when control of a good or service transfers to the customer — which may be at a point in time or over time. This framework prevents premature or aggressive revenue recognition, one of the most common sources of financial misstatement.",
        ],
      },
    ],
    keyTerms: [
      { term: "Accounting equation", def: "Assets = Liabilities + Equity; kept in balance by double-entry bookkeeping." },
      { term: "Accrual accounting", def: "Recognizing revenue when earned and expenses when incurred, regardless of cash timing." },
      { term: "Matching principle", def: "Expenses are recognized in the same period as the revenues they help generate." },
      { term: "Revenue recognition (5-step)", def: "Identify contract, obligations, price; allocate; recognize as control transfers." },
      { term: "Adjusting entries", def: "Period-end entries (accruals, deferrals, depreciation) that state accounts correctly under accrual accounting." },
    ],
    takeaways: [
      "Assets = Liabilities + Equity underlies all double-entry accounting.",
      "Accrual accounting recognizes revenue when earned and expenses when incurred.",
      "The four statements articulate — net income flows to retained earnings and into cash flows.",
      "Revenue is recognized as control transfers, via the five-step model.",
    ],
  },

  // 2. AUDITING (AUD)
  {
    id: "cpa-aud",
    examSlug: "cpa",
    topicId: "aud",
    topicName: "Auditing & Attestation (AUD)",
    title: "Auditing: Opinions, Evidence, and Independence",
    readingMinutes: 18,
    summary: "What an audit provides, the types of audit opinion, internal control, and auditor independence.",
    intro:
      "Auditing and Attestation (AUD) tests the work of the independent auditor — the professional who lends credibility to financial statements. The section covers the purpose of an audit, how auditors gather evidence and assess risk, the opinions they issue, and the bedrock requirement of independence. The recurring theme is professional skepticism: the auditor verifies rather than assumes.",
    sections: [
      {
        heading: "The purpose of an audit",
        paragraphs: [
          "An audit provides reasonable assurance — not absolute assurance — that financial statements are free of material misstatement, whether from error or fraud. The auditor expresses an opinion on whether the statements are presented fairly, in all material respects, in accordance with the applicable framework (such as GAAP). 'Reasonable, not absolute' is a crucial nuance: because of sampling, estimates, and the possibility of collusion, an audit cannot guarantee perfection — only a high level of assurance.",
        ],
      },
      {
        heading: "Types of audit opinion",
        paragraphs: [
          "The audit report communicates the auditor's conclusion through the type of opinion issued. An unqualified (or 'unmodified') opinion is the clean, best outcome — the statements are fairly presented. A qualified opinion says the statements are fair 'except for' a specific issue. An adverse opinion states the statements are NOT fairly presented, signaling pervasive material misstatement. A disclaimer of opinion means the auditor could not gather enough evidence to form an opinion at all (for example, due to a severe scope limitation). Matching the situation to the correct opinion is a core exam skill.",
        ],
        callout: {
          label: "The four opinions",
          body: "Unqualified = clean. Qualified = fair 'except for' an issue. Adverse = NOT fairly presented (pervasive). Disclaimer = couldn't obtain enough evidence to opine.",
        },
      },
      {
        heading: "Evidence, internal control, and independence",
        paragraphs: [
          "Auditors gather sufficient appropriate evidence to support their opinion, assessing the risk of material misstatement and designing procedures accordingly. They evaluate the client's internal control — the processes that prevent and detect errors and fraud — because strong controls reduce the substantive testing required. Material weaknesses in internal control must be communicated.",
          "Independence is non-negotiable. An auditor must be independent both in fact and in appearance; financial or close personal ties to the client impair independence and disqualify the auditor, no matter how honest they are. The entire value of an audit rests on the auditor being objective and free of conflicts — which is why independence rules are strict and heavily tested.",
        ],
      },
    ],
    keyTerms: [
      { term: "Reasonable assurance", def: "The high — but not absolute — level of assurance an audit provides about material misstatement." },
      { term: "Unqualified opinion", def: "A clean opinion: the financial statements are fairly presented in all material respects." },
      { term: "Adverse opinion", def: "An opinion that the statements are NOT fairly presented due to pervasive misstatement." },
      { term: "Disclaimer of opinion", def: "Issued when the auditor cannot obtain sufficient evidence to form any opinion." },
      { term: "Independence", def: "The auditor's required objectivity, in both fact and appearance, free of conflicts with the client." },
    ],
    takeaways: [
      "An audit gives reasonable, not absolute, assurance against material misstatement.",
      "Opinions: unqualified (clean), qualified (except-for), adverse (not fair), disclaimer (can't opine).",
      "Strong internal control reduces the substantive testing auditors must perform.",
      "Independence — in fact and appearance — is the foundation of audit value.",
    ],
  },

  // 3. TAXATION & REGULATION (REG)
  {
    id: "cpa-reg",
    examSlug: "cpa",
    topicId: "reg",
    topicName: "Taxation & Regulation (REG)",
    title: "Taxation & Regulation: Individual, Entity, and Ethics",
    readingMinutes: 18,
    summary: "Individual and business taxation basics, entity types, and professional responsibilities.",
    intro:
      "Regulation (REG) covers federal taxation of individuals and entities, business law, and the ethics and professional responsibilities of CPAs. Taxation dominates, so a candidate must understand how taxable income is computed for different taxpayers and how the choice of business entity affects taxation. The ethics portion reinforces the CPA's duties to the public and to clients.",
    sections: [
      {
        heading: "Individual taxation",
        paragraphs: [
          "Individual income tax starts with gross income, subtracts adjustments to reach adjusted gross income (AGI), then subtracts the greater of the standard deduction or itemized deductions to reach taxable income, to which the progressive rate schedule applies. Credits then reduce the tax directly. A key distinction the exam tests is deductions (which reduce taxable income, worth the marginal rate) versus credits (which reduce tax dollar-for-dollar). Capital gains on assets held over a year receive preferential rates, while short-term gains are taxed as ordinary income.",
        ],
      },
      {
        heading: "Business entities and their taxation",
        paragraphs: [
          "The choice of entity drives how business income is taxed. A C corporation is a separate taxable entity — it pays corporate tax, and shareholders are taxed again on dividends, producing 'double taxation.' Pass-through entities — S corporations, partnerships, and most LLCs — generally pay no entity-level federal income tax; instead, income passes through to the owners' personal returns and is taxed once. Liability protection and administrative complexity also differ. Matching a business's goals to the right entity is a classic REG topic.",
        ],
        callout: {
          label: "C corp vs pass-through",
          body: "C corporations face double taxation (entity tax + tax on dividends). Pass-throughs (S corps, partnerships, most LLCs) are taxed once, at the owner level.",
        },
      },
      {
        heading: "Ethics and professional responsibilities",
        paragraphs: [
          "CPAs are bound by codes of professional conduct (the AICPA Code and, for auditors, additional rules) that require integrity, objectivity, independence where applicable, due care, and confidentiality. A CPA must not knowingly misrepresent facts or subordinate their judgment to others. Tax practitioners have specific responsibilities, such as having a reasonable basis for positions taken on returns and not assisting in fraud. The unifying duty is to the public interest — the CPA's credibility, like the auditor's independence, is the source of the profession's value.",
        ],
      },
    ],
    keyTerms: [
      { term: "Adjusted gross income (AGI)", def: "Gross income minus specific adjustments; the base for many deduction and credit limits." },
      { term: "Standard vs itemized deduction", def: "Taxpayers deduct the greater of a fixed standard amount or their itemized expenses." },
      { term: "C corporation", def: "A separately taxed entity; income is taxed at the corporate level and again on dividends (double taxation)." },
      { term: "Pass-through entity", def: "S corp, partnership, or LLC whose income is taxed once, on the owners' returns." },
      { term: "AICPA Code of Conduct", def: "Standards requiring integrity, objectivity, due care, and confidentiality for CPAs." },
    ],
    takeaways: [
      "Individual tax: gross income → AGI → taxable income → tax, then credits reduce tax directly.",
      "Credits beat deductions dollar-for-dollar; long-term capital gains get preferential rates.",
      "C corps face double taxation; pass-throughs are taxed once at the owner level.",
      "CPAs owe duties of integrity, objectivity, due care, and confidentiality to the public.",
    ],
  },

  // 4. BUSINESS ENVIRONMENT (BEC)
  {
    id: "cpa-bec",
    examSlug: "cpa",
    topicId: "bec",
    topicName: "Business Environment (BEC)",
    title: "Business Environment: Controls, Costs, and Governance",
    readingMinutes: 16,
    summary: "Internal control frameworks, cost accounting basics, corporate governance, and financial management.",
    intro:
      "The Business Environment area rounds out the CPA's understanding of how organizations operate and are controlled. It blends internal control concepts, cost and managerial accounting, corporate governance, and financial management. Where FAR is about reporting the past, this material is about controlling operations and making forward-looking decisions.",
    sections: [
      {
        heading: "Internal control and the COSO framework",
        paragraphs: [
          "Internal control is the system of processes designed to provide reasonable assurance about the reliability of financial reporting, the effectiveness of operations, and compliance with laws. The widely used COSO framework defines five components: the control environment (the 'tone at the top'), risk assessment, control activities, information and communication, and monitoring. A foundational control activity is segregation of duties — no single person should control a transaction from start to finish (authorizing, recording, and holding custody), because separating these roles makes fraud and error far harder.",
        ],
        callout: {
          label: "Segregation of duties",
          body: "Split authorization, recordkeeping, and custody of assets among different people. Concentrating them in one person is a major internal-control weakness.",
        },
      },
      {
        heading: "Cost and managerial accounting",
        paragraphs: [
          "Managerial accounting supports internal decisions. Costs split into fixed (unchanged with volume, like rent) and variable (changing with volume, like materials). The contribution margin — sales price minus variable cost per unit — shows how much each unit contributes to covering fixed costs and profit. Breakeven analysis finds the volume where total contribution margin equals fixed costs, so the firm earns zero profit. These tools drive pricing, production, and make-or-buy decisions, and they appear constantly on the exam.",
        ],
      },
      {
        heading: "Governance and financial management",
        paragraphs: [
          "Corporate governance establishes how a company is directed and controlled, balancing the interests of shareholders, management, and other stakeholders, often with board oversight and audit committees. Legislation like the Sarbanes-Oxley Act strengthened governance and internal-control requirements for public companies after major accounting scandals. Financial management adds tools for decisions — time value of money, working-capital management, and capital budgeting (NPV) — overlapping with corporate finance. Together these give the CPA a view of how good controls and sound financial decisions protect and grow the organization.",
        ],
      },
    ],
    keyTerms: [
      { term: "COSO framework", def: "The standard internal-control model with five components, including the control environment." },
      { term: "Segregation of duties", def: "Splitting authorization, recordkeeping, and custody among people to deter fraud and error." },
      { term: "Contribution margin", def: "Sales price minus variable cost per unit; covers fixed costs and contributes to profit." },
      { term: "Breakeven point", def: "The sales volume where total contribution margin equals fixed costs (zero profit)." },
      { term: "Sarbanes-Oxley (SOX)", def: "Legislation that strengthened governance and internal-control requirements for public companies." },
    ],
    takeaways: [
      "COSO defines internal control in five components, anchored by the control environment.",
      "Segregation of duties (authorization, recording, custody) is a core anti-fraud control.",
      "Contribution margin = price − variable cost; breakeven is where it covers fixed costs.",
      "SOX strengthened governance and internal control for public companies.",
    ],
  },
];

const questions: Question[] = [
  // FAR
  {
    id: "cpa-far-q1", examSlug: "cpa", topicId: "far", topicName: "Financial Reporting", difficulty: 1,
    stem: "The fundamental accounting equation is:",
    choices: ["Assets = Liabilities − Equity", "Assets = Liabilities + Equity", "Assets + Liabilities = Equity"],
    answerIndex: 1,
    explanation: "Assets = Liabilities + Equity is the fundamental accounting equation; a company's resources (assets) are financed by either creditors (liabilities) or owners (equity). Double-entry bookkeeping keeps it in balance. Choice A wrongly subtracts equity. Choice C misplaces the terms — liabilities and equity are the two sources of financing on the right side, not assets and liabilities together.",
  },
  {
    id: "cpa-far-q2", examSlug: "cpa", topicId: "far", topicName: "Financial Reporting", difficulty: 2,
    stem: "Under accrual accounting, a company that performs a service in December but receives payment in January should recognize the revenue in:",
    choices: ["December, when the service was performed", "January, when cash was received", "Split evenly across both months"],
    answerIndex: 0,
    explanation: "Accrual accounting recognizes revenue when it is EARNED (the service performed), regardless of when cash arrives — so the revenue belongs in December. Choice B describes cash-basis accounting, which GAAP does not permit for this purpose. Choice C has no basis; the obligation was satisfied in December, so that's when control transferred and revenue is recognized.",
  },
  {
    id: "cpa-far-q3", examSlug: "cpa", topicId: "far", topicName: "Financial Reporting", difficulty: 2,
    stem: "Under the revenue recognition model, revenue is generally recognized when:",
    choices: ["A contract is signed", "Cash is collected", "Control of the good or service transfers to the customer"],
    answerIndex: 2,
    explanation: "The core principle of the five-step revenue model is that revenue is recognized when control of the promised good or service transfers to the customer — at a point in time or over time. Choice A (signing) is too early; a contract alone hasn't satisfied a performance obligation. Choice B (cash collection) reflects cash-basis thinking, not accrual GAAP. Control transfer is the trigger.",
  },
  // AUD
  {
    id: "cpa-aud-q1", examSlug: "cpa", topicId: "aud", topicName: "Auditing", difficulty: 2,
    stem: "An audit provides which level of assurance that the financial statements are free of material misstatement?",
    choices: ["Absolute assurance", "Reasonable assurance", "No assurance"],
    answerIndex: 1,
    explanation: "An audit provides reasonable (high but not absolute) assurance. Because of sampling, the use of estimates, and the possibility of collusion or concealment, no audit can guarantee perfection. Choice A overstates what an audit can deliver — absolute assurance is impossible. Choice C understates it; an audit's entire purpose is to provide a high level of assurance.",
  },
  {
    id: "cpa-aud-q2", examSlug: "cpa", topicId: "aud", topicName: "Auditing", difficulty: 3,
    stem: "An auditor concludes the financial statements are NOT fairly presented because of pervasive material misstatement. The auditor should issue:",
    choices: ["An unqualified opinion", "A qualified opinion", "An adverse opinion"],
    answerIndex: 2,
    explanation: "When misstatements are both material AND pervasive — so significant that the statements as a whole are misleading — the auditor issues an adverse opinion stating the statements are NOT fairly presented. Choice A (unqualified) is the clean opinion, the opposite. Choice B (qualified) applies when an issue is material but NOT pervasive ('fair except for'); here the pervasiveness pushes it to adverse.",
  },
  {
    id: "cpa-aud-q3", examSlug: "cpa", topicId: "aud", topicName: "Auditing", difficulty: 2,
    stem: "An auditor owns a significant amount of stock in the company being audited. This most likely:",
    choices: ["Has no effect, as long as the audit is done well", "Impairs the auditor's independence", "Improves the audit by aligning interests"],
    answerIndex: 1,
    explanation: "A direct financial interest in the client impairs independence — in both fact and appearance — disqualifying the auditor regardless of how carefully the work is performed. Choice A is wrong because independence is a prerequisite, not something good work can cure. Choice C is backwards: a financial stake creates a conflict of interest, undermining the objectivity that gives an audit its value.",
  },
  // REG
  {
    id: "cpa-reg-q1", examSlug: "cpa", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 3,
    stem: "A key tax disadvantage of operating as a C corporation rather than a pass-through entity is:",
    choices: ["Income is never taxed", "Double taxation of corporate profits", "Owners cannot be paid salaries"],
    answerIndex: 1,
    explanation: "A C corporation pays corporate income tax on its profits, and shareholders are taxed again on dividends — 'double taxation.' Pass-through entities (S corps, partnerships, LLCs) avoid this by taxing income once, at the owner level. Choice A is false; C corp income is taxed (twice, in fact). Choice C is incorrect — owners who work in the business can and do receive salaries.",
  },
  {
    id: "cpa-reg-q2", examSlug: "cpa", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "On an individual return, the figure used as the base for many deduction and credit limitations is:",
    choices: ["Gross income", "Adjusted gross income (AGI)", "Taxable income after credits"],
    answerIndex: 1,
    explanation: "Adjusted gross income (AGI) — gross income minus specific 'above-the-line' adjustments — is the key reference figure that many deductions and credits are limited or phased out against. Choice A (gross income) comes before adjustments and isn't the limitation base. Choice C is calculated later in the process; credits are applied after taxable income is determined, so it can't be the base for those limits.",
  },
  {
    id: "cpa-reg-q3", examSlug: "cpa", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "Under the AICPA Code of Professional Conduct, a CPA's overriding responsibility is to:",
    choices: ["Maximize the client's refund by any means", "Act with integrity and serve the public interest", "Follow the client's instructions without question"],
    answerIndex: 1,
    explanation: "The CPA's professional duties — integrity, objectivity, due care, and confidentiality — ultimately serve the public interest, which is the source of the profession's credibility. Choice A invites fraud; a CPA must have a reasonable basis for tax positions and cannot pursue improper refunds. Choice C is wrong because a CPA must not subordinate professional judgment to a client's wishes.",
  },
  // BEC
  {
    id: "cpa-bec-q1", examSlug: "cpa", topicId: "bec", topicName: "Business Environment", difficulty: 2,
    stem: "Having different employees authorize transactions, record them, and hold custody of the related assets is an example of:",
    choices: ["Segregation of duties", "Double taxation", "Revenue recognition"],
    answerIndex: 0,
    explanation: "Splitting authorization, recordkeeping, and custody among different people is segregation of duties — a fundamental internal control that makes it much harder for any one person to commit and conceal fraud. Choices B (a tax concept) and C (an accounting recognition rule) are unrelated to internal-control structure. Concentrating these duties in one person is a classic control weakness.",
  },
  {
    id: "cpa-bec-q2", examSlug: "cpa", topicId: "bec", topicName: "Business Environment", difficulty: 3,
    stem: "A product sells for $50 with variable cost of $30 per unit, and fixed costs are $100,000. The breakeven point in units is:",
    choices: ["2,000 units", "5,000 units", "3,333 units"],
    answerIndex: 1,
    explanation: "Contribution margin per unit = price − variable cost = $50 − $30 = $20. Breakeven units = fixed costs ÷ contribution margin = $100,000 ÷ $20 = 5,000 units. Choice A divides by price ($50) instead of contribution margin. Choice C divides by $30. The correct denominator is the $20 contribution margin, which is what each unit provides toward covering fixed costs.",
  },
  {
    id: "cpa-bec-q3", examSlug: "cpa", topicId: "bec", topicName: "Business Environment", difficulty: 2,
    stem: "The widely used framework defining internal control through five components, including the control environment, is:",
    choices: ["GAAP", "The COSO framework", "The five-step revenue model"],
    answerIndex: 1,
    explanation: "The COSO framework defines internal control via five components — control environment, risk assessment, control activities, information and communication, and monitoring. Choice A (GAAP) governs financial reporting standards, not internal-control structure. Choice C (the revenue model) is a specific accounting standard for recognizing revenue, unrelated to the internal-control framework.",
  },
];

export const cpaContent: ExamContent = {
  examSlug: "cpa",
  chapters,
  questions,
};
