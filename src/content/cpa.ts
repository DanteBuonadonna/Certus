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
      {
        heading: "How the statements articulate, with an entry",
        blocks: [
          { kind: "p", text: "The exam loves to test whether you can trace one number across statements. Net income is the linchpin: it is the bottom line of the income statement, it increases retained earnings on the balance sheet, and it is the starting point of the operating section of the cash flow statement under the indirect method. Change net income and all three move together." },
          { kind: "figure", figure: { caption: "Figure 1 — Statement articulation. Net income flows into retained earnings (and thus equity on the balance sheet) and seeds the operating section of the cash flow statement. The statements are one connected system, not four separate reports.", alt: "Income statement net income flowing to retained earnings, balance sheet, and the cash flow statement", svg: `<svg viewBox="0 0 460 175" width="100%" style="max-width:460px"><defs><marker id="cpaah" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6z" fill="var(--primary)"/></marker></defs><g stroke="var(--border)" stroke-width="0.5"><rect x="16" y="26" width="120" height="44" rx="6" fill="var(--bg-card)"/><rect x="170" y="26" width="120" height="44" rx="6" fill="var(--bg-card)"/><rect x="324" y="26" width="120" height="44" rx="6" fill="var(--primary-light)"/><rect x="170" y="112" width="120" height="44" rx="6" fill="var(--bg-card)"/></g><g text-anchor="middle"><text x="76" y="44" font-size="9.5" font-weight="600" fill="var(--text-primary)">Income Stmt</text><text x="76" y="58" font-size="8.5" fill="var(--ats-green)">→ Net income</text><text x="230" y="44" font-size="9.5" font-weight="600" fill="var(--text-primary)">Retained</text><text x="230" y="57" font-size="9.5" font-weight="600" fill="var(--text-primary)">Earnings</text><text x="384" y="44" font-size="9.5" font-weight="600" fill="var(--primary)">Balance Sheet</text><text x="384" y="58" font-size="8.5" fill="var(--text-secondary)">(Equity)</text><text x="230" y="130" font-size="9.5" font-weight="600" fill="var(--text-primary)">Cash Flow</text><text x="230" y="144" font-size="8.5" fill="var(--text-secondary)">(operating, indirect)</text></g><line x1="136" y1="48" x2="170" y2="48" stroke="var(--primary)" stroke-width="1" marker-end="url(#cpaah)"/><line x1="290" y1="48" x2="324" y2="48" stroke="var(--primary)" stroke-width="1" marker-end="url(#cpaah)"/><path d="M76 70 L76 134 L170 134" fill="none" stroke="var(--primary)" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#cpaah)"/></svg>` } },
          { kind: "table", table: { caption: "Table 1 — The five-step revenue recognition model.", headers: ["Step", "Action"], rows: [["1", "Identify the contract with the customer"], ["2", "Identify the performance obligations"], ["3", "Determine the transaction price"], ["4", "Allocate the price to the obligations"], ["5", "Recognize revenue as each obligation is satisfied (control transfers)"]] } },
          { kind: "example", example: { title: "an accrual adjusting entry", prompt: "On Dec 31, a firm has earned $4,000 of interest revenue that won't be collected in cash until January. What adjusting entry is required?", steps: ["The revenue is earned in December, so accrual accounting recognizes it now — not when cash arrives.", "Debit Interest Receivable $4,000 (a new asset: cash owed to the firm).", "Credit Interest Revenue $4,000 (recognized in December's income).", "The equation stays balanced: assets +$4,000 and equity (via revenue) +$4,000."], answer: "Dr Interest Receivable 4,000 / Cr Interest Revenue 4,000 — earned revenue recognized before cash is received." } },
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
      {
        heading: "Choosing the opinion — a decision tree",
        blocks: [
          { kind: "p", text: "The choice of opinion turns on two questions about any problem the auditor finds: is it material, and is it pervasive? Materiality asks whether the issue could change a user's decision; pervasiveness asks whether it contaminates the statements as a whole. Walk the tree the same way every time and the right opinion falls out." },
          { kind: "figure", figure: { caption: "Figure 2 — The opinion decision tree. Materiality and pervasiveness drive the choice; a scope limitation severe enough to be pervasive leads to a disclaimer rather than an adverse opinion.", alt: "Decision tree from material and pervasive questions to unqualified, qualified, adverse, and disclaimer", svg: `<svg viewBox="0 0 460 210" width="100%" style="max-width:460px"><defs><marker id="audah" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6z" fill="var(--text-muted)"/></marker></defs><g stroke="var(--border)" stroke-width="0.5"><rect x="150" y="12" width="150" height="34" rx="6" fill="var(--bg-card)"/><rect x="330" y="12" width="120" height="34" rx="6" fill="var(--ats-green-bg)"/><rect x="150" y="82" width="150" height="34" rx="6" fill="var(--bg-card)"/><rect x="330" y="82" width="120" height="34" rx="6" fill="var(--ats-amber-bg)"/><rect x="150" y="152" width="150" height="34" rx="6" fill="var(--ats-red-bg)"/><rect x="10" y="152" width="120" height="34" rx="6" fill="var(--bg)"/></g><g text-anchor="middle" font-size="9.5"><text x="225" y="33" font-weight="600" fill="var(--text-primary)">Material?</text><text x="390" y="28" font-weight="600" fill="var(--ats-green)">Unqualified</text><text x="390" y="40" font-size="8" fill="var(--text-secondary)">(clean)</text><text x="225" y="103" font-weight="600" fill="var(--text-primary)">Pervasive?</text><text x="390" y="98" font-weight="600" fill="var(--ats-amber)">Qualified</text><text x="390" y="110" font-size="8" fill="var(--text-secondary)">("except for")</text><text x="225" y="173" font-weight="600" fill="var(--ats-red)">Adverse</text><text x="70" y="167" font-weight="600" font-size="8.5" fill="var(--text-secondary)">Disclaimer</text><text x="70" y="179" font-size="7.5" fill="var(--text-muted)">no evidence</text></g><g font-size="8" fill="var(--text-muted)"><line x1="300" y1="29" x2="330" y2="29" stroke="var(--text-muted)" stroke-width="1" marker-end="url(#audah)"/><text x="315" y="24">No</text><line x1="225" y1="46" x2="225" y2="82" stroke="var(--text-muted)" stroke-width="1" marker-end="url(#audah)"/><text x="234" y="66">Yes</text><line x1="300" y1="99" x2="330" y2="99" stroke="var(--text-muted)" stroke-width="1" marker-end="url(#audah)"/><text x="315" y="94">No</text><line x1="225" y1="116" x2="225" y2="152" stroke="var(--text-muted)" stroke-width="1" marker-end="url(#audah)"/><text x="234" y="136">Yes</text></g></svg>` } },
          { kind: "table", table: { caption: "Table 1 — Matching the situation to the opinion.", headers: ["Situation", "Opinion"], rows: [["Statements fairly presented", "Unqualified (clean)"], ["Issue material but NOT pervasive", "Qualified ('except for')"], ["Misstatement material AND pervasive", "Adverse"], ["Can't obtain sufficient evidence (pervasive)", "Disclaimer"]] } },
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
      {
        heading: "The individual tax waterfall, and the cost of double taxation",
        blocks: [
          { kind: "figure", figure: { caption: "Figure 1 — The individual income-tax computation. Each stage subtracts something specific; AGI is the pivotal subtotal because so many deductions and credits phase out against it.", alt: "Flow from gross income to AGI to taxable income to tax to tax due", svg: `<svg viewBox="0 0 460 130" width="100%" style="max-width:460px"><defs><marker id="regah" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6z" fill="var(--primary)"/></marker></defs><g stroke="var(--border)" stroke-width="0.5"><rect x="6" y="48" width="74" height="40" rx="6" fill="var(--bg-card)"/><rect x="98" y="48" width="74" height="40" rx="6" fill="var(--primary-light)"/><rect x="190" y="48" width="74" height="40" rx="6" fill="var(--bg-card)"/><rect x="282" y="48" width="74" height="40" rx="6" fill="var(--bg-card)"/><rect x="374" y="48" width="74" height="40" rx="6" fill="var(--ats-green-bg)"/></g><g text-anchor="middle" font-size="9"><text x="43" y="66" fill="var(--text-primary)">Gross</text><text x="43" y="78" fill="var(--text-primary)">income</text><text x="135" y="72" font-weight="600" fill="var(--primary)">AGI</text><text x="227" y="66" fill="var(--text-primary)">Taxable</text><text x="227" y="78" fill="var(--text-primary)">income</text><text x="319" y="72" fill="var(--text-primary)">Tax</text><text x="411" y="66" font-weight="600" fill="var(--ats-green)">Tax</text><text x="411" y="78" font-weight="600" fill="var(--ats-green)">due</text></g><g font-size="7.5" text-anchor="middle" fill="var(--text-muted)"><line x1="80" y1="68" x2="98" y2="68" stroke="var(--primary)" stroke-width="1" marker-end="url(#regah)"/><text x="89" y="42">− adj</text><line x1="172" y1="68" x2="190" y2="68" stroke="var(--primary)" stroke-width="1" marker-end="url(#regah)"/><text x="181" y="42">− ded</text><line x1="264" y1="68" x2="282" y2="68" stroke="var(--primary)" stroke-width="1" marker-end="url(#regah)"/><text x="273" y="42">× rates</text><line x1="356" y1="68" x2="374" y2="68" stroke="var(--primary)" stroke-width="1" marker-end="url(#regah)"/><text x="365" y="42">− credits</text></g></svg>` } },
          { kind: "table", table: { caption: "Table 1 — Entity choice drives how income is taxed.", headers: ["", "C corporation", "Pass-through (S corp / partnership / LLC)"], rows: [["Entity-level tax", "Yes", "Generally none"], ["Layers of tax", "Two (entity + dividends)", "One (owner level)"], ["Loss pass-through", "No", "Yes, to owners"]] } },
          { kind: "example", example: { title: "the cost of double taxation", prompt: "A C corp earns $100 of pre-tax profit, pays 21% corporate tax, then distributes the rest as a dividend taxed at 15%. What's the total tax and combined effective rate?", steps: ["Corporate tax = 21% × $100 = $21; after-tax profit = $79.", "Dividend tax = 15% × $79 = $11.85.", "Total tax = 21 + 11.85 = $32.85 on the original $100."], answer: "≈32.85% combined — well above the single layer a pass-through owner would pay, which is double taxation's drag." } },
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
      {
        heading: "Cost-volume-profit, drawn and worked",
        blocks: [
          { kind: "p", text: "Breakeven is best seen on a cost-volume-profit (CVP) graph. Total cost starts above zero at the level of fixed costs and rises gently with volume; total revenue starts at the origin and rises faster. Where the two lines cross, profit is zero — the breakeven point. Everything to the left is a loss; everything to the right is profit, widening with each additional unit." },
          { kind: "figure", figure: { caption: "Figure 1 — A cost-volume-profit graph. Below breakeven the firm loses money; above it, every unit's contribution margin drops to profit. The gap between the revenue and cost lines is profit (or loss).", alt: "CVP chart with total revenue and total cost lines crossing at the breakeven point", svg: `<svg viewBox="0 0 460 220" width="100%" style="max-width:460px"><g stroke="var(--border-strong)" stroke-width="1"><line x1="54" y1="184" x2="436" y2="184"/><line x1="54" y1="184" x2="54" y2="20"/></g><text x="245" y="208" text-anchor="middle" font-size="9" fill="var(--text-muted)">Units sold →</text><text transform="rotate(-90 18 105)" x="18" y="105" text-anchor="middle" font-size="9" fill="var(--text-muted)">Dollars →</text><line x1="54" y1="120" x2="430" y2="78" stroke="var(--ats-red)" stroke-width="2"/><line x1="54" y1="184" x2="430" y2="40" stroke="var(--ats-green)" stroke-width="2"/><line x1="54" y1="120" x2="120" y2="120" stroke="var(--text-muted)" stroke-width="0.75" stroke-dasharray="3 3"/><text x="58" y="116" font-size="8" fill="var(--text-secondary)">fixed cost</text><g><line x1="298" y1="95" x2="298" y2="184" stroke="var(--primary)" stroke-width="0.75" stroke-dasharray="3 3"/><circle cx="298" cy="95" r="3.5" fill="var(--primary)"/><text x="298" y="200" text-anchor="middle" font-size="8.5" font-weight="600" fill="var(--primary)">Breakeven</text></g><text x="404" y="36" text-anchor="end" font-size="8.5" fill="var(--ats-green)">Total revenue</text><text x="404" y="74" text-anchor="end" font-size="8.5" fill="var(--ats-red)">Total cost</text><text x="160" y="150" font-size="8.5" fill="var(--ats-red)">Loss</text><text x="360" y="110" font-size="8.5" fill="var(--ats-green)">Profit</text></svg>` } },
          { kind: "example", example: { title: "units for a target profit", prompt: "Price $50, variable cost $30, fixed costs $100,000. How many units must sell to earn a $40,000 target profit?", steps: ["Contribution margin per unit = 50 − 30 = $20.", "Required contribution = fixed costs + target profit = 100,000 + 40,000 = $140,000.", "Units = 140,000 ÷ 20 = 7,000."], answer: "7,000 units — that's the 5,000-unit breakeven plus 2,000 more units to generate the $40,000 profit." } },
          { kind: "callout", label: "COSO in five parts", body: "Internal control under COSO = Control environment, Risk assessment, Control activities, Information & communication, Monitoring. The control environment — the 'tone at the top' — is the foundation the other four rest on." },
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

  // ---- Financial Reporting (FAR) ----
  {
    id: "cpa-far-q4", examSlug: "cpa", topicId: "far", topicName: "Financial Reporting", difficulty: 2,
    stem: "Financial statements are normally prepared on the assumption that the entity will continue operating for the foreseeable future. This is the:",
    choices: ["Going concern assumption", "Matching principle", "Conservatism constraint"],
    answerIndex: 0,
    explanation: "The going concern assumption presumes the entity will continue long enough to meet its obligations and use its assets as planned, which justifies historical cost and the deferral of certain costs. Choice B (matching) is about recognizing expenses with related revenues. Choice C (conservatism) biases toward not overstating assets/income — a different concept.",
  },
  {
    id: "cpa-far-q5", examSlug: "cpa", topicId: "far", topicName: "Financial Reporting", difficulty: 3,
    stem: "During a period of rising prices, using FIFO instead of LIFO generally results in:",
    choices: ["Lower net income and lower taxes", "Higher net income and higher ending inventory", "No effect on the financial statements"],
    answerIndex: 1,
    explanation: "With rising prices, FIFO expenses the oldest (cheaper) costs to COGS, leaving the newest (higher) costs in ending inventory — so net income and ending inventory are higher than under LIFO. Choice A describes LIFO, which expenses newer higher costs (lower income, lower taxes). Choice C is wrong; the cost-flow choice materially affects COGS, income, and inventory.",
  },
  {
    id: "cpa-far-q6", examSlug: "cpa", topicId: "far", topicName: "Financial Reporting", difficulty: 2,
    stem: "Equipment costs $50,000, has a $5,000 salvage value, and a 9-year life. Annual straight-line depreciation is:",
    choices: ["$5,556", "$5,000", "$45,000"],
    answerIndex: 1,
    explanation: "Straight-line depreciation = (cost − salvage) ÷ useful life = ($50,000 − $5,000) ÷ 9 = $45,000 ÷ 9 = $5,000 per year. Choice A wrongly divides the full $50,000 by 9 (ignoring salvage). Choice C ($45,000) is the total depreciable base, not the annual amount.",
  },
  {
    id: "cpa-far-q7", examSlug: "cpa", topicId: "far", topicName: "Financial Reporting", difficulty: 3,
    stem: "A bond with a 4% coupon is issued when the market interest rate is 6%. The bond will be issued at:",
    choices: ["A premium (above par)", "A discount (below par)", "Par value"],
    answerIndex: 1,
    explanation: "When a bond's coupon (4%) is below the market rate (6%), investors will only buy it for less than face value, so it is issued at a discount. Choice A (premium) happens when the coupon exceeds the market rate. Choice C (par) occurs only when the coupon equals the market rate.",
  },

  // ---- Auditing (AUD) ----
  {
    id: "cpa-aud-q4", examSlug: "cpa", topicId: "aud", topicName: "Auditing", difficulty: 3,
    stem: "In the audit risk model (AR = IR × CR × DR), if inherent risk and control risk are both assessed as high, the auditor should:",
    choices: ["Reduce substantive testing", "Lower detection risk by performing more substantive testing", "Issue a disclaimer automatically"],
    answerIndex: 1,
    explanation: "To hold overall audit risk at an acceptably low level when inherent and control risk are high, the auditor must drive detection risk down — by expanding substantive testing (more extensive procedures, larger samples, timing near year-end). Choice A increases risk, the wrong direction. Choice C is unrelated; high RMM calls for more work, not an automatic disclaimer.",
  },
  {
    id: "cpa-aud-q5", examSlug: "cpa", topicId: "aud", topicName: "Auditing", difficulty: 2,
    stem: "Preparing the financial statements and maintaining effective internal control is the responsibility of:",
    choices: ["The external auditor", "Management", "The PCAOB"],
    answerIndex: 1,
    explanation: "Management is responsible for preparing the financial statements and for designing and maintaining internal control; the auditor's role is to express an independent opinion on those statements. Choice A confuses the two roles. Choice C (PCAOB) oversees the audits of public companies — it doesn't prepare any company's statements.",
  },
  {
    id: "cpa-aud-q6", examSlug: "cpa", topicId: "aud", topicName: "Auditing", difficulty: 2,
    stem: "Which audit evidence is generally considered the MOST reliable?",
    choices: ["A photocopy provided by management", "An external confirmation received directly from an independent third party", "Inquiry of client employees"],
    answerIndex: 1,
    explanation: "Evidence obtained directly from a knowledgeable, independent external source (such as a bank or customer confirmation sent straight to the auditor) is among the most reliable. Choice A is internal and easily altered. Choice C (inquiry) is useful but weak on its own and must be corroborated, since it comes from the client.",
  },
  {
    id: "cpa-aud-q7", examSlug: "cpa", topicId: "aud", topicName: "Auditing", difficulty: 2,
    stem: "A misstatement is 'material' if:",
    choices: ["It exceeds $1 million in every audit", "It could reasonably influence the decisions of financial-statement users", "It involves cash rather than accruals"],
    answerIndex: 1,
    explanation: "Materiality is judged by whether a misstatement (individually or combined) could reasonably be expected to influence users' economic decisions — a matter of professional judgment, not a fixed dollar figure. Choice A invents a universal threshold; materiality is relative to the entity. Choice C wrongly ties materiality to the type of account rather than to user impact.",
  },

  // ---- Taxation & Regulation (REG) ----
  {
    id: "cpa-reg-q4", examSlug: "cpa", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "For an asset to qualify for preferential long-term capital gain rates, it must generally be held for:",
    choices: ["More than one year", "More than 30 days", "More than five years"],
    answerIndex: 0,
    explanation: "A capital asset held for more than one year produces a long-term capital gain, taxed at preferential rates; a holding of one year or less is short-term, taxed at ordinary rates. Choice B (30 days) relates to wash sales, not the holding period. Choice C overstates the requirement for the general long-term rate.",
  },
  {
    id: "cpa-reg-q5", examSlug: "cpa", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 3,
    stem: "Which requirement must a corporation meet to qualify for S corporation status?",
    choices: ["Have no more than 100 eligible shareholders and only one class of stock", "Be publicly traded on a major exchange", "Have at least one corporate shareholder"],
    answerIndex: 0,
    explanation: "An S corporation may have no more than 100 shareholders, only one class of stock, and generally only eligible U.S. individual (and certain trust/estate) shareholders. Choice B is wrong — S corps are closely held, not public. Choice C is disqualifying: corporations and partnerships generally cannot be S corp shareholders.",
  },
  {
    id: "cpa-reg-q6", examSlug: "cpa", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 3,
    stem: "An heir inherits stock the decedent bought for $10,000 that is worth $60,000 at the date of death. The heir's basis is:",
    choices: ["$10,000 (carryover basis)", "$60,000 (stepped up to fair value at death)", "$0"],
    answerIndex: 1,
    explanation: "Inherited property generally receives a basis 'stepped up' to its fair market value at the date of death — $60,000 here — so the $50,000 of pre-death appreciation escapes income tax. Choice A (carryover) applies to gifts during life, not bequests. Choice C is incorrect; basis steps up to fair value, not to zero.",
  },
  {
    id: "cpa-reg-q7", examSlug: "cpa", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 3,
    stem: "The general statute of limitations for the IRS to assess additional tax on a filed return is:",
    choices: ["3 years from filing", "10 years from filing", "There is no limit"],
    answerIndex: 0,
    explanation: "The general assessment statute of limitations is three years from the later of the due date or the filing date. It extends to six years if gross income is understated by more than 25%, and is unlimited for a fraudulent return or no return. Choice B (10 years) is the collection period for assessed tax, not the assessment window; choice C applies only to fraud or non-filing.",
  },

  // ---- Business Environment (BEC) ----
  {
    id: "cpa-bec-q4", examSlug: "cpa", topicId: "bec", topicName: "Business Environment", difficulty: 3,
    stem: "A company's weighted average cost of capital (WACC) is:",
    choices: ["The interest rate on its newest loan", "The blended, weighted cost of its debt and equity financing", "Always equal to its cost of equity"],
    answerIndex: 1,
    explanation: "WACC blends the after-tax cost of debt and the cost of equity, each weighted by its proportion in the capital structure; it's the minimum return new projects must earn. Choice A looks at one debt instrument, not the whole structure. Choice C ignores debt, which (being cheaper and tax-deductible) usually pulls WACC below the cost of equity.",
  },
  {
    id: "cpa-bec-q5", examSlug: "cpa", topicId: "bec", topicName: "Business Environment", difficulty: 2,
    stem: "Under the net present value (NPV) rule, a capital project should be accepted when:",
    choices: ["Its NPV is greater than zero", "Its payback period exceeds five years", "Its accounting net income is positive in year one"],
    answerIndex: 0,
    explanation: "A positive NPV means the present value of the project's cash inflows exceeds its cost at the required discount rate, so it adds value and should be accepted. Choice B describes a long payback, which argues against a project. Choice C uses accrual income, ignoring the time value of money that NPV is built on.",
  },
  {
    id: "cpa-bec-q6", examSlug: "cpa", topicId: "bec", topicName: "Business Environment", difficulty: 2,
    stem: "A company has current assets of $300,000 and current liabilities of $150,000. Its current ratio is:",
    choices: ["0.5", "2.0", "$150,000"],
    answerIndex: 1,
    explanation: "Current ratio = current assets ÷ current liabilities = $300,000 ÷ $150,000 = 2.0, a common liquidity measure (≥ 1.0 means current assets cover current liabilities). Choice A inverts the ratio. Choice C reports working capital (assets − liabilities = $150,000), which is a dollar amount, not the ratio.",
  },
  {
    id: "cpa-bec-q7", examSlug: "cpa", topicId: "bec", topicName: "Business Environment", difficulty: 3,
    stem: "Sarbanes-Oxley Section 404 requires that:",
    choices: ["Auditors set their clients' accounting policies", "Management assess and report on the effectiveness of internal control over financial reporting", "Companies eliminate all internal controls to cut costs"],
    answerIndex: 1,
    explanation: "SOX Section 404 requires management to assess and report on the effectiveness of internal control over financial reporting, and for larger public companies the external auditor attests to it; SOX also created the PCAOB. Choice A would violate auditor independence. Choice C is the opposite of SOX's purpose, which was to strengthen controls after major accounting scandals.",
  },

  // ---- Financial Reporting (more) ----
  {
    id: "cpa-far-q8", examSlug: "cpa", topicId: "far", topicName: "Financial Reporting", difficulty: 2,
    stem: "The matching principle requires that:",
    choices: ["Expenses be recognized when cash is paid", "Expenses be recognized in the same period as the revenues they help generate", "Revenue be deferred until year-end"],
    answerIndex: 1,
    explanation: "Under accrual accounting, the matching principle recognizes expenses in the period of the related revenues, not when cash moves. Choice A describes cash-basis accounting. Choice C is unrelated; revenue is recognized when earned, not arbitrarily deferred.",
  },
  {
    id: "cpa-far-q9", examSlug: "cpa", topicId: "far", topicName: "Financial Reporting", difficulty: 2,
    stem: "On a classified balance sheet, an asset is 'current' if it is expected to be converted to cash or used within:",
    choices: ["One month", "One year or the operating cycle, whichever is longer", "Five years"],
    answerIndex: 1,
    explanation: "Current assets are those expected to be realized in cash or consumed within one year or the operating cycle, whichever is longer (cash, receivables, inventory). Choices A and C use the wrong time frame for the current/noncurrent classification.",
  },
  {
    id: "cpa-far-q10", examSlug: "cpa", topicId: "far", topicName: "Financial Reporting", difficulty: 3,
    stem: "Under U.S. GAAP, interest paid on debt is classified on the statement of cash flows as a(n):",
    choices: ["Financing activity", "Operating activity", "Investing activity"],
    answerIndex: 1,
    explanation: "U.S. GAAP classifies interest paid (and interest and dividends received) as operating activities, while dividends PAID are financing. Choice A is a common trap — the principal portion of debt is financing, but the interest is operating. Choice C (investing) covers buying/selling long-term assets, not interest.",
  },

  // ---- Auditing (more) ----
  {
    id: "cpa-aud-q8", examSlug: "cpa", topicId: "aud", topicName: "Auditing", difficulty: 2,
    stem: "Sending a letter to a customer to verify an account receivable balance is an example of:",
    choices: ["External confirmation", "Observation", "Recalculation"],
    answerIndex: 0,
    explanation: "Obtaining a direct response from a third party (the customer) about a balance is an external confirmation — strong evidence for existence and accuracy of receivables. Choice B (observation) is watching a process. Choice C (recalculation) is checking the mathematical accuracy of documents.",
  },
  {
    id: "cpa-aud-q9", examSlug: "cpa", topicId: "aud", topicName: "Auditing", difficulty: 3,
    stem: "Which engagement provides the HIGHEST level of assurance?",
    choices: ["A compilation", "A review", "An audit"],
    answerIndex: 2,
    explanation: "An audit provides reasonable (high) assurance; a review provides limited (moderate) assurance; a compilation provides no assurance. So the audit is the highest. Choices A and B are lower-assurance services, with compilation the lowest.",
  },
  {
    id: "cpa-aud-q10", examSlug: "cpa", topicId: "aud", topicName: "Auditing", difficulty: 2,
    stem: "An auditor must be independent:",
    choices: ["In fact only", "In appearance only", "In both fact and appearance"],
    answerIndex: 2,
    explanation: "Independence must exist both in fact (genuine objectivity) and in appearance (no relationships that would cause a reasonable observer to doubt objectivity). Choices A and B are each only half the requirement; a financial or close personal tie impairs independence even if the auditor is honest.",
  },

  // ---- Taxation & Regulation (more) ----
  {
    id: "cpa-reg-q8", examSlug: "cpa", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "A partnership reports its income to the IRS but:",
    choices: ["Pays entity-level federal income tax like a C corp", "Passes income through to partners, who report it on their own returns (via Schedule K-1)", "Is exempt from all reporting"],
    answerIndex: 1,
    explanation: "A partnership is a pass-through entity: it files an information return but pays no entity-level federal income tax; income, deductions, and credits flow to partners on Schedule K-1 and are taxed once on their returns. Choice A describes a C corporation's double taxation. Choice C is false — partnerships must file information returns.",
  },
  {
    id: "cpa-reg-q9", examSlug: "cpa", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 1,
    stem: "A taxpayer should generally claim:",
    choices: ["The standard deduction always", "The greater of the standard deduction or total itemized deductions", "Both the standard deduction and itemized deductions together"],
    answerIndex: 1,
    explanation: "Taxpayers take whichever is larger — the standard deduction or itemized deductions — to minimize taxable income. Choice A ignores cases where itemizing saves more. Choice C is not allowed; you cannot claim both.",
  },
  {
    id: "cpa-reg-q10", examSlug: "cpa", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "Under the rules of practice (Circular 230) and professional standards, a CPA preparing a tax return must:",
    choices: ["Take any position that lowers tax, regardless of support", "Have a reasonable basis for positions and exercise due care", "Sign returns without review to save time"],
    answerIndex: 1,
    explanation: "A CPA must have adequate support (a reasonable basis or higher, depending on disclosure) for return positions and exercise due professional care and competence. Choice A invites preparer penalties and ethics violations. Choice C breaches due care and the duty to review.",
  },

  // ---- Business Environment (more) ----
  {
    id: "cpa-bec-q8", examSlug: "cpa", topicId: "bec", topicName: "Business Environment", difficulty: 2,
    stem: "Contribution margin per unit equals:",
    choices: ["Selling price − variable cost per unit", "Selling price − fixed cost per unit", "Total revenue − total assets"],
    answerIndex: 0,
    explanation: "Contribution margin per unit = selling price − variable cost per unit; it's what each unit contributes toward covering fixed costs and then profit. Choice B wrongly subtracts fixed cost (fixed costs are covered in aggregate at breakeven, not per unit in the CM). Choice C mixes unrelated totals.",
  },
  {
    id: "cpa-bec-q9", examSlug: "cpa", topicId: "bec", topicName: "Business Environment", difficulty: 2,
    stem: "The time value of money concept holds that:",
    choices: ["A dollar today is worth more than a dollar in the future", "A dollar in the future is worth more than a dollar today", "Money has no time dimension"],
    answerIndex: 0,
    explanation: "Because money can be invested to earn a return, a dollar received today is worth more than the same dollar received later — the basis for discounting future cash flows to present value. Choices B and C contradict the core principle underlying NPV and capital budgeting.",
  },
  {
    id: "cpa-bec-q10", examSlug: "cpa", topicId: "bec", topicName: "Business Environment", difficulty: 2,
    stem: "A key role of a corporation's audit committee is to:",
    choices: ["Manage day-to-day operations", "Provide independent oversight of financial reporting and the external auditors", "Set product prices"],
    answerIndex: 1,
    explanation: "The audit committee — composed of independent directors — oversees financial reporting integrity and the relationship with the external auditor, strengthening governance. Choice A is management's job, not the board committee's. Choice C is an operating decision unrelated to the audit committee.",
  },
];

export const cpaContent: ExamContent = {
  examSlug: "cpa",
  chapters,
  questions,
};
