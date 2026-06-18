// ============================================================
// Certus — CPA content (wave 1, original)
// The Certified Public Accountant exam. Core sections:
// Financial Reporting (FAR), Auditing (AUD), Taxation &
// Regulation (REG), and Business Environment (BEC).
// ============================================================

import { Chapter, Question, ExamContent } from "./types";
import { farDeepChapters, farDeepQuestions } from "./cpa-far-deep";
import { audDeepChapters, audDeepQuestions } from "./cpa-aud-deep";
import { regDeepChapters, regDeepQuestions } from "./cpa-reg-deep";
import { discDeepChapters, discDeepQuestions } from "./cpa-disc-deep";

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

  {
    id: "cpa-tax-individual",
    examSlug: "cpa",
    topicId: "tax-individual",
    topicName: "Individual Taxation",
    title: "Individual Taxation: The 1040 from Gross Income to Tax Due",
    readingMinutes: 18,
    summary: "The full individual computation — gross income to AGI to taxable income to tax, then credits — plus capital gains, the AMT, and the deduction-vs-credit distinction.",
    intro:
      "Individual taxation is the heart of REG. The exam expects you to march income through the 1040: from gross income to adjusted gross income to taxable income to the tax, then apply credits. Master the sequence and the key distinctions — adjustments vs deductions, deductions vs credits, ordinary vs capital — and the rest is plugging in numbers.",
    sections: [
      {
        heading: "The computation sequence",
        blocks: [
          { kind: "p", text: "Every individual return follows the same waterfall. Start with gross income (wages, interest, dividends, business income, capital gains). Subtract above-the-line 'adjustments' to reach adjusted gross income (AGI) — the pivotal subtotal that many deductions and credits phase out against. From AGI subtract the greater of the standard deduction or itemized deductions (and the qualified business income deduction) to get taxable income. Apply the progressive rate schedule to compute the tax, then subtract credits to reach tax due." },
          { kind: "table", table: { caption: "Table 1 — Deduction vs credit: a $1,000 example at a 24% rate.", headers: ["", "$1,000 deduction", "$1,000 credit"], rows: [["Reduces", "Taxable income", "Tax owed"], ["Dollar value", "$240 (24% × 1,000)", "$1,000"], ["Verdict", "Worth your marginal rate", "Worth full face value"]] } },
        ],
      },
      {
        heading: "Income, deductions, and credits",
        blocks: [
          { kind: "p", text: "Deductions reduce taxable income (worth your marginal rate per dollar); credits reduce the tax dollar-for-dollar and are generally more valuable. Credits split into nonrefundable (can reduce tax only to zero) and refundable (can generate a refund beyond the tax owed, like the Earned Income Credit). Above-the-line adjustments (e.g., HSA contributions, certain retirement contributions, student-loan interest) are valuable because they lower AGI itself, easing phase-outs." },
          { kind: "example", example: { title: "marginal vs effective rate", prompt: "Simplified brackets: 10% on the first $20,000, 22% above. What does a $70,000 taxable income owe, and the two rates?", steps: ["First $20,000 × 10% = $2,000.", "Remaining $50,000 × 22% = $11,000.", "Total tax = $13,000. Marginal = 22%; effective = 13,000 ÷ 70,000 = 18.6%."], answer: "Tax $13,000; marginal 22%, effective ~18.6% — the effective rate is always below the marginal." } },
        ],
      },
      {
        heading: "Capital gains and the AMT",
        blocks: [
          { kind: "p", text: "Investment gains get special treatment: a long-term capital gain (asset held more than one year) is taxed at preferential rates well below ordinary income, while a short-term gain is taxed as ordinary income. Capital losses offset capital gains, with a limited amount usable against ordinary income and the rest carried forward. The Alternative Minimum Tax (AMT) is a parallel system that adds back certain preference items to ensure high-income taxpayers pay a minimum; you pay the higher of regular tax or AMT." },
        ],
      },
    ],
    keyTerms: [
      { term: "Gross income", def: "All income from whatever source derived, before adjustments and deductions." },
      { term: "Adjusted gross income (AGI)", def: "Gross income minus above-the-line adjustments; the base for many phase-outs." },
      { term: "Above-the-line adjustment", def: "A deduction that lowers AGI directly (e.g., HSA, student-loan interest)." },
      { term: "Standard vs itemized deduction", def: "Taxpayers deduct the greater of a fixed standard amount or their itemized expenses." },
      { term: "Taxable income", def: "AGI minus the greater of standard or itemized deductions (and QBI)." },
      { term: "Marginal tax rate", def: "The rate on the next dollar of income; higher than the effective rate." },
      { term: "Effective tax rate", def: "Total tax divided by total income; always below the marginal rate." },
      { term: "Nonrefundable credit", def: "A credit that can reduce tax only to zero, with no refund." },
      { term: "Refundable credit", def: "A credit that can generate a refund beyond the tax owed (e.g., EIC)." },
      { term: "Long-term capital gain", def: "Gain on an asset held more than a year, taxed at preferential rates." },
      { term: "Short-term capital gain", def: "Gain on an asset held a year or less, taxed as ordinary income." },
      { term: "Capital loss limitation", def: "Net capital losses offset a limited amount of ordinary income; the rest carry forward." },
      { term: "Alternative Minimum Tax (AMT)", def: "A parallel tax adding back preference items to ensure a minimum tax." },
      { term: "Qualified business income (QBI) deduction", def: "A deduction for certain pass-through business income, taken after AGI." },
    ],
    takeaways: [
      "Sequence: gross income → (− adjustments) AGI → (− deductions) taxable income → tax → (− credits) tax due.",
      "Deductions are worth your marginal rate; credits are worth full face value (refundable ones can exceed tax).",
      "Above-the-line adjustments lower AGI itself, easing phase-outs.",
      "Long-term gains (held > 1 year) get preferential rates; the AMT ensures a minimum tax via add-backs.",
    ],
  },

  {
    id: "cpa-managerial",
    examSlug: "cpa",
    topicId: "managerial",
    topicName: "Cost & Managerial Accounting",
    title: "Cost & Managerial Accounting: CVP, Costing, and Variances",
    readingMinutes: 17,
    summary: "Cost behavior and the contribution-margin engine, the major costing methods, and standard-cost variance analysis — the decision tools BEC drills.",
    intro:
      "Managerial accounting supports internal decisions, and the CPA exam tests it quantitatively. The core is cost behavior and the contribution-margin framework (breakeven and target profit), the difference between costing methods, and standard-cost variance analysis. These tools drive pricing, production, and make-or-buy decisions.",
    sections: [
      {
        heading: "Cost behavior and CVP",
        blocks: [
          { kind: "p", text: "Costs are fixed (unchanged with volume, like rent), variable (changing with volume, like materials), or mixed. The contribution margin — sales price minus variable cost per unit — is what each unit contributes toward covering fixed costs and then profit. Breakeven (in units) = fixed costs ÷ contribution margin per unit. To hit a target profit, units = (fixed costs + target profit) ÷ contribution margin. The margin of safety is how far sales can fall before reaching breakeven." },
          { kind: "example", example: { title: "breakeven and target profit", prompt: "Price $40, variable cost $25, fixed costs $90,000. Breakeven units, and units for a $30,000 profit?", steps: ["Contribution margin = 40 − 25 = $15.", "Breakeven = 90,000 ÷ 15 = 6,000 units.", "Target profit = (90,000 + 30,000) ÷ 15 = 8,000 units."], answer: "Breakeven 6,000 units; 8,000 units for a $30,000 profit (2,000 units of profit beyond breakeven)." } },
        ],
      },
      {
        heading: "Costing methods",
        blocks: [
          { kind: "p", text: "How costs attach to products varies. Absorption costing (required for external GAAP reporting) assigns ALL manufacturing costs — including fixed overhead — to units, so some fixed cost sits in inventory. Variable costing (for internal decisions) expenses fixed overhead as a period cost, so it isn't deferred in inventory; this changes reported income when production differs from sales. Job-order costing tracks costs by individual job; process costing averages costs over mass-produced units; activity-based costing assigns overhead using multiple cost drivers for more accuracy." },
          { kind: "callout", label: "Absorption vs variable income", body: "When production EXCEEDS sales, absorption costing reports HIGHER income than variable costing (fixed overhead is deferred in ending inventory). When sales exceed production, the reverse. This timing difference is a classic exam point." },
        ],
      },
      {
        heading: "Standard costs and variances",
        blocks: [
          { kind: "p", text: "Standard costing sets expected costs and then analyzes variances — the gap between standard and actual. Each input splits into a price (rate) variance and a quantity (efficiency) variance. For materials: a price variance from paying more/less per unit, and a usage variance from using more/less material. For labor: a rate variance and an efficiency variance. A flexible budget adjusts the budget to the actual activity level so the comparison is fair. Variances are flagged favorable or unfavorable and point managers to where to investigate." },
        ],
      },
    ],
    keyTerms: [
      { term: "Fixed cost", def: "A cost that doesn't change with volume in the relevant range (e.g., rent)." },
      { term: "Variable cost", def: "A cost that changes proportionally with volume (e.g., materials)." },
      { term: "Contribution margin", def: "Sales price minus variable cost per unit; covers fixed costs then profit." },
      { term: "Breakeven point", def: "Fixed costs ÷ contribution margin per unit; the zero-profit volume." },
      { term: "Target-profit units", def: "(Fixed costs + target profit) ÷ contribution margin per unit." },
      { term: "Margin of safety", def: "How far sales can fall before hitting breakeven." },
      { term: "Absorption costing", def: "Assigns all manufacturing costs (incl. fixed overhead) to units; required for GAAP." },
      { term: "Variable costing", def: "Expenses fixed overhead as a period cost; used for internal decisions." },
      { term: "Job-order costing", def: "Tracks costs by individual job or batch." },
      { term: "Process costing", def: "Averages costs across mass-produced, homogeneous units." },
      { term: "Activity-based costing (ABC)", def: "Allocates overhead using multiple cost drivers for accuracy." },
      { term: "Standard cost", def: "A predetermined expected cost used to measure variances." },
      { term: "Price vs quantity variance", def: "The split of a cost variance into a rate component and a usage/efficiency component." },
      { term: "Flexible budget", def: "A budget adjusted to the actual activity level for fair comparison." },
    ],
    takeaways: [
      "Contribution margin = price − variable cost; breakeven = fixed ÷ CM; target units add the profit to fixed.",
      "Absorption costing (GAAP) defers fixed overhead in inventory; variable costing expenses it — incomes differ when production ≠ sales.",
      "Know the costing methods: job-order, process, and activity-based.",
      "Variances split into price (rate) and quantity (efficiency); flexible budgets make the comparison fair.",
    ],
  },

  {
    id: "cpa-liabilities",
    examSlug: "cpa",
    topicId: "liabilities",
    topicName: "Liabilities, Bonds & Leases",
    title: "Liabilities: Bonds, Leases, Contingencies, and Deferred Taxes",
    readingMinutes: 17,
    summary: "How bonds are issued and amortized, lease accounting under modern rules, when to accrue a contingency, and what creates a deferred tax liability.",
    intro:
      "FAR's liability questions reward precision. You need bond issuance and effective-interest amortization, the modern lease rules, the probable/possible/remote test for contingencies, and the timing differences that create deferred taxes. Each has a clean rule the exam tests directly.",
    sections: [
      {
        heading: "Bonds payable",
        blocks: [
          { kind: "p", text: "A bond's issue price depends on the stated (coupon) rate versus the market (effective) rate. If the stated rate is below the market rate, the bond sells at a DISCOUNT (below face); if above, at a PREMIUM. Under the effective-interest method, interest expense each period equals the carrying value times the market rate, while the cash paid is the face times the stated rate — the difference amortizes the discount or premium, moving the carrying value toward face by maturity." },
          { kind: "callout", label: "Stated vs market rate", body: "Stated < market → DISCOUNT (carrying value rises to par over time). Stated > market → PREMIUM (carrying value falls to par). Stated = market → issued at par." },
        ],
      },
      {
        heading: "Leases",
        blocks: [
          { kind: "p", text: "Under modern lease accounting (ASC 842), a lessee records a right-of-use (ROU) asset and a lease liability on the balance sheet for essentially ALL leases beyond short-term ones. Classification still matters for the income statement: a finance lease (which transfers control-like benefits — e.g., ownership transfers, a bargain purchase option, the term covers most of the asset's life, or the present value of payments is substantially all of fair value) records separate amortization and interest expense; an operating lease records a single straight-line lease expense." },
          { kind: "table", table: { caption: "Table 1 — Finance vs operating lease (lessee).", headers: ["", "Finance lease", "Operating lease"], rows: [["On balance sheet?", "Yes (ROU asset + liability)", "Yes (ROU asset + liability)"], ["Income statement", "Amortization + interest (front-loaded)", "Single straight-line lease expense"], ["Triggered when", "Meets a finance criterion (e.g., ownership transfer)", "Does not meet any finance criterion"]] } },
        ],
      },
      {
        heading: "Contingencies and deferred taxes",
        blocks: [
          { kind: "p", text: "A loss contingency (like a lawsuit or warranty) is ACCRUED as a liability only when the loss is both probable AND reasonably estimable; if only reasonably possible, it is DISCLOSED in the notes; if remote, generally ignored. Deferred taxes arise from temporary differences between book and tax accounting: when book income is recognized before taxable income (or an expense is deducted for tax before book), a deferred tax LIABILITY arises — taxes to be paid later; the reverse creates a deferred tax asset." },
        ],
      },
    ],
    keyTerms: [
      { term: "Bond payable", def: "A long-term debt obligation repaying face value at maturity with periodic interest." },
      { term: "Stated (coupon) rate", def: "The fixed rate printed on the bond, applied to face for the cash interest." },
      { term: "Market (effective) rate", def: "The yield investors demand; sets the issue price relative to face." },
      { term: "Bond discount", def: "Issued below face because the stated rate is below the market rate." },
      { term: "Bond premium", def: "Issued above face because the stated rate is above the market rate." },
      { term: "Effective-interest method", def: "Interest expense = carrying value × market rate; amortizes premium/discount." },
      { term: "Carrying value", def: "The bond's book value (face ± unamortized premium/discount)." },
      { term: "Right-of-use (ROU) asset", def: "The lessee's recorded asset representing the right to use a leased item." },
      { term: "Finance lease", def: "A lease meeting an ownership-like criterion; records amortization plus interest." },
      { term: "Operating lease", def: "A lease not meeting finance criteria; records a single straight-line expense (still on balance sheet)." },
      { term: "Loss contingency", def: "Accrued when probable and estimable; disclosed if reasonably possible; ignored if remote." },
      { term: "Deferred tax liability", def: "Taxes payable in the future from a temporary book-vs-tax difference." },
      { term: "Temporary difference", def: "A book-vs-tax timing difference that reverses over time, creating deferred taxes." },
    ],
    takeaways: [
      "Stated < market → discount; stated > market → premium; effective interest = carrying value × market rate.",
      "Under ASC 842 nearly all leases hit the balance sheet (ROU asset + liability); finance vs operating changes the expense pattern.",
      "Accrue a contingency only if probable AND estimable; disclose if reasonably possible; ignore if remote.",
      "Temporary book-vs-tax differences create deferred tax liabilities (or assets).",
    ],
  },

  {
    id: "cpa-gov-nfp",
    examSlug: "cpa",
    topicId: "gov-nfp",
    topicName: "Governmental & Nonprofit",
    title: "Governmental and Not-for-Profit Accounting",
    readingMinutes: 17,
    summary: "How government and nonprofit accounting differs from for-profit GAAP — fund accounting, the two measurement focuses, and net asset classifications.",
    intro:
      "Governments and nonprofits don't exist to earn profit, so their accounting answers a different question: are resources being used as intended? The CPA exam tests fund accounting, the dual government reporting model, and the nonprofit net-asset classes. The measurement-focus distinction is the concept that ties it together.",
    sections: [
      {
        heading: "Fund accounting and measurement focus",
        blocks: [
          { kind: "p", text: "Governments use FUND accounting — segregating resources into funds, each a self-balancing set of accounts, to demonstrate compliance with legal and budgetary restrictions. The three fund categories are governmental funds (the core public services, like the general fund), proprietary funds (business-type activities such as utilities), and fiduciary funds (resources held for others). The key concept is measurement focus: governmental funds use the CURRENT FINANCIAL RESOURCES focus and MODIFIED ACCRUAL basis (revenue recognized when measurable and available), while proprietary funds use the ECONOMIC RESOURCES focus and FULL ACCRUAL basis, like a business." },
          { kind: "table", table: { caption: "Table 1 — Government fund types.", headers: ["Fund category", "Purpose", "Basis"], rows: [["Governmental", "Core public services", "Modified accrual"], ["Proprietary", "Business-type (utilities)", "Full accrual"], ["Fiduciary", "Resources held for others", "Full accrual"]] } },
        ],
      },
      {
        heading: "The government reporting model",
        blocks: [
          { kind: "p", text: "Government financial reports present TWO perspectives. Fund financial statements show the detail by fund using each fund's basis. Government-wide statements consolidate everything onto the full-accrual, economic-resources basis to show the long-term picture, separating governmental from business-type activities. Because the two use different bases, a reconciliation bridges fund-level modified accrual to government-wide full accrual. The comprehensive annual report (ACFR) packages these statements with management's discussion and analysis (MD&A) and required supplementary information." },
          { kind: "callout", label: "Modified accrual's tell", body: "Under modified accrual, revenue is recognized when it is both MEASURABLE and AVAILABLE (collectible within the period or soon enough after to pay current liabilities). 'Available' is the word that distinguishes it from full accrual." },
        ],
      },
      {
        heading: "Not-for-profit net assets",
        blocks: [
          { kind: "p", text: "Nonprofits use full accrual but classify net assets by donor restriction into just two buckets: net assets WITHOUT donor restrictions and net assets WITH donor restrictions (which may be temporarily restricted by purpose or time, or permanently restricted as an endowment). Contributions are recognized as revenue when received or unconditionally promised, classified by any restriction. Conditional promises aren't recognized until the condition is met. Nonprofits present a statement of financial position, a statement of activities, and a statement of cash flows, plus functional-expense reporting that splits costs into program services versus supporting (management and fundraising)." },
        ],
      },
    ],
    keyTerms: [
      { term: "Fund accounting", def: "Segregating resources into self-balancing funds to show compliance with restrictions." },
      { term: "Governmental funds", def: "Funds for core public services, using modified accrual." },
      { term: "Proprietary funds", def: "Funds for business-type activities, using full accrual." },
      { term: "Fiduciary funds", def: "Funds holding resources for parties outside the government." },
      { term: "Modified accrual", def: "Revenue recognized when measurable and available; used by governmental funds." },
      { term: "Current financial resources focus", def: "The measurement focus of governmental funds (near-term inflows/outflows)." },
      { term: "Economic resources focus", def: "The full-accrual focus of proprietary funds and government-wide statements." },
      { term: "Government-wide statements", def: "Full-accrual statements consolidating all activities for the long-term view." },
      { term: "ACFR", def: "The annual comprehensive financial report, with MD&A and supplementary information." },
      { term: "Net assets without restrictions", def: "Nonprofit resources free of donor-imposed limits." },
      { term: "Net assets with restrictions", def: "Nonprofit resources limited by donor purpose, time, or permanence." },
      { term: "Conditional promise to give", def: "A pledge not recognized as revenue until its condition is met." },
      { term: "Functional expenses", def: "Nonprofit costs split into program services versus supporting activities." },
    ],
    takeaways: [
      "Governments use fund accounting; governmental funds use modified accrual (measurable and available), proprietary funds full accrual.",
      "Reports show two views: fund statements (by basis) and full-accrual government-wide statements, bridged by a reconciliation.",
      "Nonprofits classify net assets as with or without donor restrictions and recognize contributions when received or unconditionally promised.",
      "Nonprofit expenses are reported by function: program services vs management and fundraising.",
    ],
  },

  {
    id: "cpa-revenue-leases",
    examSlug: "cpa",
    topicId: "revenue-leases",
    topicName: "Revenue Recognition & Leases",
    title: "Revenue Recognition and Leases (ASC 606 and ASC 842)",
    readingMinutes: 18,
    summary: "The five-step revenue model and the lessee/lessor lease classification rules — two of the most heavily tested FAR standards.",
    intro:
      "Two standards reshaped financial reporting and now anchor the FAR section: ASC 606's five-step revenue model and ASC 842's lease rules that put almost every lease on the balance sheet. The CPA exam tests the steps and the classification criteria precisely, so this chapter walks each in order.",
    sections: [
      {
        heading: "The five-step revenue model",
        blocks: [
          { kind: "p", text: "ASC 606 recognizes revenue to depict the transfer of goods or services in the amount the entity expects to be entitled to, through five steps: (1) identify the contract with a customer; (2) identify the performance obligations (the distinct promises); (3) determine the transaction price; (4) allocate the transaction price to the performance obligations based on their standalone selling prices; and (5) recognize revenue WHEN (or as) each performance obligation is satisfied — that is, when control transfers to the customer. Control can transfer at a point in time or over time (e.g., a long construction project recognized by progress)." },
          { kind: "table", table: { caption: "Table 1 — The five revenue steps.", headers: ["Step", "Action"], rows: [["1", "Identify the contract"], ["2", "Identify performance obligations"], ["3", "Determine the transaction price"], ["4", "Allocate price to obligations"], ["5", "Recognize revenue as obligations are satisfied"]] } },
        ],
      },
      {
        heading: "Variable consideration and contract balances",
        blocks: [
          { kind: "p", text: "When the price is variable (discounts, rebates, refunds, performance bonuses), the entity estimates it using the expected-value or most-likely-amount method, but only to the extent it's PROBABLE that a significant reversal won't occur (the constraint). Two contract balances commonly appear: a contract liability (deferred revenue) when the customer pays before the entity performs, and a contract asset when the entity performs before it has an unconditional right to payment. Recognizing revenue before delivering — or ignoring the constraint on variable consideration — are classic errors the exam probes." },
          { kind: "example", example: { title: "allocating to obligations", prompt: "A company sells a product for $1,000 bundled with two years of support. Standalone prices are $900 (product) and $300 (support). How much of the $1,000 is allocated to the product?", steps: ["Total standalone value = $900 + $300 = $1,200.", "Product proportion = $900 ÷ $1,200 = 75%.", "Allocation = 75% × $1,000 = $750."], answer: "$750 to the product (recognized when delivered) and $250 to support (recognized over the two years), based on relative standalone selling prices." } },
        ],
      },
      {
        heading: "Lease classification under ASC 842",
        blocks: [
          { kind: "p", text: "ASC 842 requires a LESSEE to record nearly every lease on the balance sheet as a right-of-use (ROU) asset and a lease liability (the present value of lease payments). Classification then drives the income statement. A lease is a FINANCE lease if it meets any of five criteria (transfer of ownership, a purchase option reasonably certain to be exercised, the term is a major part of the asset's economic life, the present value of payments is substantially all of the asset's fair value, or the asset is so specialized it has no alternative use). Otherwise it's an OPERATING lease. Finance leases report separate interest and amortization (front-loaded expense); operating leases report a single straight-line lease expense. For LESSORS, the parallel classifications are sales-type, direct financing, and operating leases." },
          { kind: "callout", label: "The five finance-lease criteria", body: "Ownership transfer, bargain Purchase option, major part of economic Life, present value ≈ Fair value, Specialized asset. Meet ANY one → finance lease. None → operating lease. (Mnemonic: O-P-L-F-S.)" },
        ],
      },
    ],
    keyTerms: [
      { term: "ASC 606", def: "The five-step revenue recognition standard based on transfer of control." },
      { term: "Performance obligation", def: "A distinct promise to transfer a good or service to a customer." },
      { term: "Transaction price", def: "The consideration an entity expects to be entitled to for performing." },
      { term: "Standalone selling price", def: "The price of a good/service sold separately, used to allocate the transaction price." },
      { term: "Transfer of control", def: "The trigger for revenue recognition, at a point in time or over time." },
      { term: "Variable consideration", def: "Uncertain amounts (rebates, bonuses) estimated subject to the reversal constraint." },
      { term: "Contract liability", def: "Deferred revenue when a customer pays before the entity performs." },
      { term: "Contract asset", def: "A right to payment earned before it is unconditional." },
      { term: "ASC 842", def: "The lease standard putting nearly all leases on the lessee's balance sheet." },
      { term: "Right-of-use (ROU) asset", def: "The lessee's recorded right to use a leased asset." },
      { term: "Lease liability", def: "The present value of lease payments recorded by the lessee." },
      { term: "Finance lease", def: "A lease meeting any of five criteria; reports interest plus amortization." },
      { term: "Operating lease", def: "A lease not meeting the finance criteria; single straight-line expense." },
      { term: "Sales-type lease", def: "A lessor classification recognizing a sale and profit at commencement." },
    ],
    takeaways: [
      "ASC 606's five steps: identify contract, identify obligations, set price, allocate, recognize as control transfers.",
      "Allocate the transaction price by relative standalone selling prices; constrain variable consideration.",
      "ASC 842 puts an ROU asset and lease liability on the lessee's books for nearly all leases.",
      "Meet any one of the five criteria (O-P-L-F-S) → finance lease (interest + amortization); otherwise operating (straight-line).",
    ],
  },

  {
    id: "cpa-audit-reports",
    examSlug: "cpa",
    topicId: "audit-reports",
    topicName: "Audit Reports & Opinions",
    title: "Audit Reports, Opinions, and Modifications",
    readingMinutes: 16,
    summary: "The auditor's product — the four opinion types, what triggers each, and the report elements and paragraphs the AUD section tests.",
    intro:
      "The audit opinion is the auditor's bottom line, and the AUD section tests exactly which opinion fits which situation. The two drivers are whether the financial statements are materially misstated and whether the auditor could gather enough evidence. Map those to the four opinions and you've mastered the most testable AUD cluster.",
    sections: [
      {
        heading: "The four opinions",
        blocks: [
          { kind: "p", text: "An auditor issues one of four opinions. An UNMODIFIED (unqualified) opinion — a 'clean' opinion — states the statements are presented fairly in all material respects in accordance with the framework. A QUALIFIED opinion ('except for') is issued when a misstatement or scope limitation is material but NOT pervasive. An ADVERSE opinion is issued when misstatements are both material AND pervasive — the statements as a whole are not fairly presented. A DISCLAIMER of opinion is issued when the auditor cannot obtain sufficient evidence and the possible effects are material and pervasive, so the auditor expresses NO opinion." },
          { kind: "table", table: { caption: "Table 1 — Matching the opinion to the situation.", headers: ["Situation", "Material but not pervasive", "Material AND pervasive"], rows: [["Statements misstated (GAAP departure)", "Qualified", "Adverse"], ["Cannot get evidence (scope limit)", "Qualified", "Disclaimer"]] } },
        ],
      },
      {
        heading: "Report structure and key paragraphs",
        blocks: [
          { kind: "p", text: "The standard report (for issuers under PCAOB and nonissuers under AICPA standards, with some wording differences) opens with the OPINION section, followed by the BASIS FOR OPINION. Other elements address the responsibilities of management and of the auditor. Two paragraphs are heavily tested. An emphasis-of-matter paragraph highlights something properly presented and disclosed in the statements that is fundamental to users' understanding (it does NOT modify the opinion). An other-matter paragraph addresses something not presented in the statements but relevant to the audit. A going-concern uncertainty, when substantial doubt exists, is communicated through such emphasis." },
          { kind: "callout", label: "Emphasis-of-matter ≠ modification", body: "An emphasis-of-matter paragraph draws attention to a properly handled item; it does NOT change a clean opinion to a qualified one. Only a misstatement or a scope limitation modifies the opinion itself." },
        ],
      },
      {
        heading: "Going concern and key audit matters",
        blocks: [
          { kind: "p", text: "Auditors evaluate whether substantial doubt exists about the entity's ability to continue as a going concern for a reasonable period (generally one year). If doubt is substantial but disclosure is adequate, the auditor typically adds an emphasis/going-concern paragraph while keeping the opinion unmodified; inadequate disclosure can force a qualified or adverse opinion. For issuers, the auditor's report also communicates critical audit matters (CAMs) — matters involving especially challenging or subjective auditor judgment — which inform users without altering the opinion." },
        ],
      },
    ],
    keyTerms: [
      { term: "Unmodified (unqualified) opinion", def: "A clean opinion: statements are fairly presented in all material respects." },
      { term: "Qualified opinion", def: "An 'except for' opinion for a material but not pervasive issue." },
      { term: "Adverse opinion", def: "Issued when misstatements are material AND pervasive." },
      { term: "Disclaimer of opinion", def: "No opinion, when the auditor lacks sufficient evidence (material and pervasive)." },
      { term: "Material misstatement", def: "An error or omission large enough to influence users' decisions." },
      { term: "Pervasive", def: "Affecting the statements as a whole, not confined to specific elements." },
      { term: "Scope limitation", def: "An inability to obtain sufficient appropriate audit evidence." },
      { term: "Basis for opinion", def: "The report section supporting the opinion and stating independence." },
      { term: "Emphasis-of-matter paragraph", def: "Highlights a properly disclosed item without modifying the opinion." },
      { term: "Other-matter paragraph", def: "Addresses a matter not in the statements but relevant to the audit." },
      { term: "Going concern", def: "Whether substantial doubt exists about the entity continuing for a reasonable period." },
      { term: "Critical audit matters (CAMs)", def: "Issuer-report matters involving especially challenging auditor judgment." },
    ],
    takeaways: [
      "Four opinions: unmodified (clean), qualified (material not pervasive), adverse (misstated and pervasive), disclaimer (no evidence and pervasive).",
      "Two drivers: is there a misstatement, and could the auditor get evidence — map each to the opinion.",
      "Emphasis-of-matter and other-matter paragraphs add information WITHOUT modifying the opinion.",
      "Substantial going-concern doubt with adequate disclosure usually keeps a clean opinion plus a going-concern paragraph.",
    ],
  },

  {
    id: "cpa-business-law",
    examSlug: "cpa",
    topicId: "business-law",
    topicName: "Business Law",
    title: "Business Law: Contracts, Agency, and the UCC",
    readingMinutes: 16,
    summary: "The legal foundations on the REG section — contract formation and defenses, agency relationships, and the UCC rules for the sale of goods.",
    intro:
      "The REG section isn't all taxes; a meaningful slice is business law. The CPA exam tests how contracts form and fail, the duties inside an agency relationship, and the special rules the Uniform Commercial Code applies to sales of goods. Learn the elements and the common defenses and you can reason through most questions.",
    sections: [
      {
        heading: "Contract formation",
        blocks: [
          { kind: "p", text: "A valid contract requires an OFFER, ACCEPTANCE, and CONSIDERATION (a bargained-for exchange of value), plus capacity and a legal purpose. The offer must be communicated with definite terms; acceptance must generally mirror the offer (the mirror-image rule for common-law contracts). Consideration means each side gives up something — a promise to do something one is already legally bound to do is not valid consideration. Without these elements there is no enforceable agreement." },
          { kind: "callout", label: "Statute of Frauds", body: "Certain contracts MUST be in writing to be enforceable: those for the sale of land, agreements that can't be performed within one year, sale of goods of $500 or more, suretyship (guaranteeing another's debt), and contracts in consideration of marriage. Mnemonic: MY LEGS (Marriage, Year, Land, Executor, Goods $500+, Surety)." },
        ],
      },
      {
        heading: "Defenses and discharge",
        blocks: [
          { kind: "p", text: "Even a formed contract may be unenforceable due to a defense. Common defenses include fraud or misrepresentation, duress, undue influence, mutual mistake of a material fact, lack of capacity (minors, mental incapacity), illegality, and failure to satisfy the Statute of Frauds. Contracts are discharged most often by PERFORMANCE (both sides do what they promised), but also by agreement (mutual rescission, novation), or by operation of law (impossibility, bankruptcy). A material breach by one party generally discharges the other's duty to perform and gives rise to remedies." },
        ],
      },
      {
        heading: "Agency and the UCC",
        blocks: [
          { kind: "p", text: "An AGENCY relationship lets an agent act on behalf of a principal. The agent owes fiduciary duties — loyalty, obedience, care, and to account — while the principal owes compensation and reimbursement. A principal is bound by an agent's acts within actual or APPARENT authority (authority a third party reasonably believes the agent has). For SALES OF GOODS, Article 2 of the Uniform Commercial Code (UCC) relaxes some common-law rules: between merchants, an acceptance with additional terms can still form a contract, and the UCC implies warranties — the warranty of merchantability (goods are fit for ordinary use, given automatically by a merchant seller) and, when the seller knows the buyer's particular purpose, fitness for a particular purpose." },
        ],
      },
    ],
    keyTerms: [
      { term: "Offer", def: "A communicated, definite proposal to enter a contract." },
      { term: "Acceptance", def: "Agreement to an offer's terms, generally mirroring the offer at common law." },
      { term: "Consideration", def: "A bargained-for exchange of value required for an enforceable contract." },
      { term: "Capacity", def: "The legal ability to contract; minors and the incapacitated may lack it." },
      { term: "Statute of Frauds", def: "Rule that certain contracts must be in writing (MY LEGS)." },
      { term: "Fraud / misrepresentation", def: "A defense based on a false statement of material fact inducing the contract." },
      { term: "Mutual mistake", def: "A shared error about a material fact that can void a contract." },
      { term: "Discharge by performance", def: "Ending contractual duties by doing what was promised." },
      { term: "Material breach", def: "A significant failure to perform that discharges the other party and allows remedies." },
      { term: "Agency", def: "A relationship where an agent acts on behalf of a principal." },
      { term: "Apparent authority", def: "Authority a third party reasonably believes an agent has, binding the principal." },
      { term: "UCC Article 2", def: "The code governing sales of goods, relaxing some common-law contract rules." },
      { term: "Warranty of merchantability", def: "An implied warranty that goods are fit for ordinary use, given by merchant sellers." },
      { term: "Fitness for a particular purpose", def: "An implied warranty when the seller knows the buyer's special purpose and the buyer relies on the seller." },
    ],
    takeaways: [
      "A contract needs offer, acceptance, and consideration, plus capacity and legal purpose.",
      "The Statute of Frauds (MY LEGS) requires certain contracts to be in writing.",
      "Defenses (fraud, duress, mistake, incapacity, illegality) can make a formed contract unenforceable; performance is the usual discharge.",
      "Agents owe fiduciary duties and bind principals within apparent authority; UCC Article 2 governs goods and implies merchantability/fitness warranties.",
    ],
  },

  {
    id: "cpa-tax-entities",
    examSlug: "cpa",
    topicId: "tax-entities",
    topicName: "Entity Taxation",
    title: "Taxation of Corporations, Partnerships, and S Corporations",
    readingMinutes: 17,
    summary: "How business entities are taxed — C corporation double taxation, partnership and S corporation pass-through, and the basis rules that govern owner gains.",
    intro:
      "Beyond individual taxation, the REG section tests how business entities are taxed, and the differences drive real planning. The dividing line is whether income is taxed at the entity level (C corporations) or passed through to owners (partnerships and S corporations). Master the pass-through mechanics and basis tracking and the entity questions become manageable.",
    sections: [
      {
        heading: "C corporations and double taxation",
        blocks: [
          { kind: "p", text: "A C corporation is a separate taxpayer: it computes taxable income and pays corporate income tax. When it distributes after-tax profits as dividends, shareholders pay tax AGAIN on those dividends — the classic DOUBLE TAXATION. C corporations can deduct ordinary business expenses and benefit from special provisions like the dividends-received deduction (reducing tax on dividends from other corporations). Corporate capital losses can offset only capital gains (not ordinary income) and carry back/forward to specific years. The entity-level tax is the defining feature distinguishing C corps from pass-throughs." },
          { kind: "callout", label: "The double-tax bite", body: "C corp earnings are taxed once at the corporate level and again when distributed as dividends to shareholders. Pass-through entities avoid this by taxing income only ONCE, on the owners' returns, whether or not cash is distributed." },
        ],
      },
      {
        heading: "Partnerships: pass-through and basis",
        blocks: [
          { kind: "p", text: "A partnership is not a taxpayer; it files an information return (Form 1065) and passes income, deductions, and credits through to partners on Schedule K-1, who report their share whether or not it's distributed. Each partner tracks OUTSIDE BASIS — starting with contributions, INCREASED by their share of income and additional contributions, and DECREASED by distributions and their share of losses. Basis matters because a partner can deduct losses only to the extent of basis, and distributions in excess of basis create taxable gain. A partner's share of partnership liabilities also increases basis, a frequently tested wrinkle." },
          { kind: "example", example: { title: "partner's ending basis", prompt: "A partner contributes $50,000, is allocated $20,000 of income, and receives a $15,000 cash distribution. What is the partner's ending basis?", steps: ["Start: $50,000 contribution.", "Add allocated income: +$20,000 → $70,000.", "Subtract distribution: −$15,000."], answer: "$55,000. Income increases basis; distributions reduce it. The partner is taxed on the $20,000 income regardless of the smaller cash distribution." } },
        ],
      },
      {
        heading: "S corporations",
        blocks: [
          { kind: "p", text: "An S corporation is a corporation that ELECTS pass-through taxation, combining liability protection with a single layer of tax. Eligibility is restricted: generally no more than 100 shareholders, only one class of stock, and shareholders must be U.S. individuals, certain trusts, or estates (no corporate or partnership shareholders). Income passes through pro rata by ownership on Schedule K-1, and shareholders track stock basis much like partners, though — unlike partnerships — S corporation shareholders generally do NOT get basis for the entity's debt (only for direct loans they make to the corporation). Reasonable compensation must be paid to shareholder-employees before distributions, a common audit focus." },
        ],
      },
    ],
    keyTerms: [
      { term: "C corporation", def: "A separate taxpayer subject to entity-level tax and double taxation on dividends." },
      { term: "Double taxation", def: "Corporate income taxed once at the entity and again as shareholder dividends." },
      { term: "Dividends-received deduction", def: "A deduction reducing tax on dividends a corporation receives from another corporation." },
      { term: "Pass-through entity", def: "An entity whose income is taxed only on the owners' returns." },
      { term: "Form 1065 / Schedule K-1", def: "The partnership information return and the partner's share statement." },
      { term: "Outside basis", def: "A partner's basis in the partnership interest, adjusted for income, contributions, and distributions." },
      { term: "Basis limitation on losses", def: "A partner deducts losses only up to basis; excess is suspended." },
      { term: "Distribution in excess of basis", def: "A distribution above basis that triggers taxable gain." },
      { term: "Partnership liability basis", def: "A partner's share of partnership debt that increases outside basis." },
      { term: "S corporation", def: "A corporation electing pass-through taxation with eligibility limits." },
      { term: "One class of stock", def: "An S corporation requirement limiting it to a single class of equity." },
      { term: "Reasonable compensation", def: "Salary that S corp shareholder-employees must receive before distributions." },
      { term: "Stock basis (S corp)", def: "A shareholder's basis, generally excluding entity-level debt." },
    ],
    takeaways: [
      "C corporations pay entity-level tax and create double taxation when distributing dividends.",
      "Partnerships pass through income on K-1s; partners track outside basis (up for income/contributions/debt share, down for distributions/losses).",
      "Losses are deductible only to basis; distributions above basis are taxable gain.",
      "S corporations elect single-layer pass-through with strict eligibility; shareholders get no basis for entity debt and must take reasonable compensation.",
    ],
  },

  {
    id: "cpa-internal-controls",
    examSlug: "cpa",
    topicId: "internal-controls",
    topicName: "Internal Controls & IT",
    title: "Internal Controls and Information Systems",
    readingMinutes: 15,
    summary: "The control frameworks and IT general controls the AUD and ISC areas test — the COSO components, control types, and segregation of duties.",
    intro:
      "Strong internal control is what lets management and auditors trust the numbers. The CPA exam tests the COSO framework that defines control, the distinction between control types, and the IT general controls that protect financial systems. Segregation of duties is the single most tested control concept.",
    sections: [
      {
        heading: "The COSO framework",
        blocks: [
          { kind: "p", text: "Internal control is a process designed to provide reasonable assurance about the reliability of financial reporting, effectiveness of operations, and compliance with laws. The COSO framework organizes it into FIVE components: the control environment (the 'tone at the top' and ethical culture), risk assessment (identifying what could go wrong), control activities (the actual policies and procedures), information and communication, and monitoring. Control provides only REASONABLE, not absolute, assurance because of inherent limitations — human error, management override, and collusion can defeat even well-designed controls." },
          { kind: "table", table: { caption: "Table 1 — The five COSO components.", headers: ["Component", "Role"], rows: [["Control environment", "Tone at the top; ethics and competence"], ["Risk assessment", "Identifying and analyzing risks"], ["Control activities", "The policies and procedures themselves"], ["Information & communication", "Capturing and sharing relevant information"], ["Monitoring", "Evaluating control performance over time"]] } },
        ],
      },
      {
        heading: "Control activities and segregation of duties",
        blocks: [
          { kind: "p", text: "Control activities come in types: preventive controls stop errors before they happen (authorization requirements, segregation of duties), detective controls find errors after the fact (reconciliations, reviews), and corrective controls fix identified problems. The cornerstone is SEGREGATION OF DUTIES: no single person should control a transaction from start to finish. The incompatible functions are Authorization, Recordkeeping, and Custody of assets (sometimes a fourth, reconciliation). When one person both records cash and has custody of it, they can steal and conceal it — which is why these duties are split." },
          { kind: "callout", label: "ARC of duties", body: "Keep Authorization, Recordkeeping, and Custody in separate hands. If one person has two or more, the risk of undetected fraud rises sharply — the classic exam scenario." },
        ],
      },
      {
        heading: "IT general controls",
        blocks: [
          { kind: "p", text: "As financial systems run on technology, IT general controls (ITGCs) protect the environment those applications run in. They cover ACCESS controls (passwords, user provisioning, least privilege to enforce segregation electronically), CHANGE management (testing and approving program changes before deployment), and operations including backup and disaster recovery. Application controls then operate within a specific system — input validation, edit checks, and processing controls that ensure data is complete and accurate. Weak general controls undermine the reliability of every application that depends on them, so auditors test ITGCs before relying on automated application controls." },
        ],
      },
    ],
    keyTerms: [
      { term: "Internal control", def: "A process giving reasonable assurance over reporting, operations, and compliance." },
      { term: "COSO framework", def: "The five-component model defining internal control." },
      { term: "Control environment", def: "The tone at the top — ethics, competence, and governance." },
      { term: "Risk assessment", def: "Identifying and analyzing risks to objectives." },
      { term: "Control activities", def: "The policies and procedures that address risks." },
      { term: "Monitoring", def: "Ongoing evaluation of whether controls are operating effectively." },
      { term: "Reasonable assurance", def: "Control's realistic ceiling, limited by error, override, and collusion." },
      { term: "Preventive control", def: "A control that stops errors before they occur." },
      { term: "Detective control", def: "A control that identifies errors after they occur (e.g., reconciliations)." },
      { term: "Segregation of duties", def: "Splitting authorization, recordkeeping, and custody among different people." },
      { term: "Management override", def: "An inherent limitation where management circumvents controls." },
      { term: "IT general controls (ITGCs)", def: "Controls over access, change management, and operations of IT systems." },
      { term: "Application controls", def: "Controls within a system (input validation, edit checks) ensuring data integrity." },
    ],
    takeaways: [
      "COSO has five components: control environment, risk assessment, control activities, information/communication, monitoring.",
      "Control provides reasonable, not absolute, assurance — limited by human error, override, and collusion.",
      "Segregation of duties splits Authorization, Recordkeeping, and Custody to prevent fraud (the ARC).",
      "IT general controls (access, change management, operations) underpin reliable application controls; auditors test ITGCs first.",
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

  // ---- Individual Taxation ----
  {
    id: "cpa-ti-q1", examSlug: "cpa", topicId: "tax-individual", topicName: "Individual Taxation", difficulty: 2,
    stem: "Adjusted gross income (AGI) is computed as:",
    choices: ["Gross income minus above-the-line adjustments", "Taxable income minus credits", "Gross income minus the standard deduction"],
    answerIndex: 0,
    explanation: "AGI = gross income minus above-the-line adjustments (e.g., HSA, certain retirement, student-loan interest); it's the base for many phase-outs. Choice B applies credits, which come later. Choice C subtracts the standard deduction, which happens AFTER AGI to get taxable income.",
  },
  {
    id: "cpa-ti-q2", examSlug: "cpa", topicId: "tax-individual", topicName: "Individual Taxation", difficulty: 2,
    stem: "Compared with a $1,000 deduction for a taxpayer in the 24% bracket, a $1,000 tax credit is:",
    choices: ["Worth less", "Worth more ($1,000 vs $240)", "Equal in value"],
    answerIndex: 1,
    explanation: "A credit cuts tax dollar-for-dollar ($1,000), while a $1,000 deduction saves only the marginal rate (24% × $1,000 = $240). So the credit is far more valuable. Choices A and C misjudge the relationship.",
  },
  {
    id: "cpa-ti-q3", examSlug: "cpa", topicId: "tax-individual", topicName: "Individual Taxation", difficulty: 2,
    stem: "For a gain to be a long-term capital gain, the asset must be held for:",
    choices: ["More than one year", "More than 30 days", "More than three years"],
    answerIndex: 0,
    explanation: "A holding period of more than one year yields a long-term capital gain taxed at preferential rates; one year or less is short-term, taxed as ordinary income. Choices B and C use the wrong threshold.",
  },
  {
    id: "cpa-ti-q4", examSlug: "cpa", topicId: "tax-individual", topicName: "Individual Taxation", difficulty: 3,
    stem: "A refundable tax credit differs from a nonrefundable one because it:",
    choices: ["Can only reduce tax to zero", "Can generate a refund beyond the tax owed", "Reduces taxable income, not tax"],
    answerIndex: 1,
    explanation: "A refundable credit (e.g., the Earned Income Credit) can produce a refund even after tax is reduced to zero. Choice A describes a NONrefundable credit. Choice C describes a deduction, not a credit.",
  },
  {
    id: "cpa-ti-q5", examSlug: "cpa", topicId: "tax-individual", topicName: "Individual Taxation", difficulty: 3,
    stem: "The Alternative Minimum Tax (AMT) ensures that taxpayers:",
    choices: ["Never pay more than the regular tax", "Pay at least a minimum amount by adding back certain preference items", "Are exempt if they itemize"],
    answerIndex: 1,
    explanation: "The AMT is a parallel computation that adds back certain preferences/deductions; the taxpayer pays the HIGHER of regular tax or AMT, guaranteeing a minimum. Choice A is backwards. Choice C is false; itemizing doesn't exempt one from AMT.",
  },

  // ---- Cost & Managerial Accounting ----
  {
    id: "cpa-mg-q1", examSlug: "cpa", topicId: "managerial", topicName: "Cost & Managerial Accounting", difficulty: 2,
    stem: "Contribution margin per unit equals:",
    choices: ["Selling price − fixed cost per unit", "Selling price − variable cost per unit", "Selling price − total cost"],
    answerIndex: 1,
    explanation: "Contribution margin per unit = selling price − variable cost per unit; it covers fixed costs and then profit. Choice A wrongly subtracts fixed cost per unit. Choice C subtracts total cost, which isn't the contribution-margin definition.",
  },
  {
    id: "cpa-mg-q2", examSlug: "cpa", topicId: "managerial", topicName: "Cost & Managerial Accounting", difficulty: 2,
    stem: "Price $50, variable cost $30, fixed costs $100,000. Breakeven in units is:",
    choices: ["2,000", "5,000", "3,333"],
    answerIndex: 1,
    explanation: "Contribution margin = 50 − 30 = $20; breakeven = fixed ÷ CM = 100,000 ÷ 20 = 5,000 units. Choice A divides by price; choice C divides by variable cost — both use the wrong denominator.",
  },
  {
    id: "cpa-mg-q3", examSlug: "cpa", topicId: "managerial", topicName: "Cost & Managerial Accounting", difficulty: 3,
    stem: "When production EXCEEDS sales, absorption costing reports income that is:",
    choices: ["Lower than variable costing", "Higher than variable costing (fixed overhead is deferred in inventory)", "Identical to variable costing"],
    answerIndex: 1,
    explanation: "Under absorption costing, fixed overhead attaches to units, so producing more than you sell defers some fixed cost in ending inventory, raising income versus variable costing. Choice A reverses it. Choice C ignores the timing difference that only disappears when production equals sales.",
  },
  {
    id: "cpa-mg-q4", examSlug: "cpa", topicId: "managerial", topicName: "Cost & Managerial Accounting", difficulty: 2,
    stem: "The margin of safety measures:",
    choices: ["How far sales can fall before reaching breakeven", "The total fixed costs", "The contribution margin ratio"],
    answerIndex: 0,
    explanation: "The margin of safety is the cushion between current (or budgeted) sales and the breakeven point — how far sales can drop before losses begin. Choices B and C are different concepts (cost level and a ratio), not the safety cushion.",
  },
  {
    id: "cpa-mg-q5", examSlug: "cpa", topicId: "managerial", topicName: "Cost & Managerial Accounting", difficulty: 2,
    stem: "A company making unique custom machines would most appropriately use:",
    choices: ["Process costing", "Job-order costing", "No costing system"],
    answerIndex: 1,
    explanation: "Job-order costing tracks costs by individual job, fitting unique, custom products. Choice A (process costing) averages costs over mass-produced homogeneous units — wrong for custom work. Choice C is not an option for a real business.",
  },

  // ---- Liabilities, Bonds & Leases ----
  {
    id: "cpa-li-q1", examSlug: "cpa", topicId: "liabilities", topicName: "Liabilities, Bonds & Leases", difficulty: 3,
    stem: "A bond with a 5% stated rate is issued when the market rate is 7%. It is issued at:",
    choices: ["A premium", "A discount", "Par"],
    answerIndex: 1,
    explanation: "When the stated rate (5%) is below the market rate (7%), investors pay less than face, so the bond is issued at a discount. Choice A (premium) occurs when stated exceeds market. Choice C (par) only when the rates are equal.",
  },
  {
    id: "cpa-li-q2", examSlug: "cpa", topicId: "liabilities", topicName: "Liabilities, Bonds & Leases", difficulty: 3,
    stem: "Under the effective-interest method, periodic interest expense equals:",
    choices: ["Face value × stated rate", "Carrying value × market (effective) rate", "Carrying value × stated rate"],
    answerIndex: 1,
    explanation: "Effective-interest expense = carrying value × market rate; the cash paid is face × stated rate, and the difference amortizes the premium or discount. Choice A is the cash interest paid, not the expense. Choice C mixes the wrong rate with carrying value.",
  },
  {
    id: "cpa-li-q3", examSlug: "cpa", topicId: "liabilities", topicName: "Liabilities, Bonds & Leases", difficulty: 2,
    stem: "Under modern lease accounting (ASC 842), a lessee's operating lease is:",
    choices: ["Kept entirely off the balance sheet", "Recorded on the balance sheet as a right-of-use asset and lease liability", "Treated as an immediate expense of the full lease"],
    answerIndex: 1,
    explanation: "ASC 842 puts essentially all leases on the balance sheet as a right-of-use asset and lease liability; classification (finance vs operating) changes the income-statement expense pattern, not whether it's recognized. Choice A reflects the old rules. Choice C misstates lease accounting.",
  },
  {
    id: "cpa-li-q4", examSlug: "cpa", topicId: "liabilities", topicName: "Liabilities, Bonds & Leases", difficulty: 3,
    stem: "A loss contingency should be ACCRUED as a liability when it is:",
    choices: ["Remote", "Reasonably possible", "Probable AND reasonably estimable"],
    answerIndex: 2,
    explanation: "A loss contingency is accrued only when the loss is both probable and reasonably estimable; if only reasonably possible, it is disclosed in the notes; if remote, it is generally ignored. Choices A and B describe disclose-or-ignore situations, not accrual.",
  },
  {
    id: "cpa-li-q5", examSlug: "cpa", topicId: "liabilities", topicName: "Liabilities, Bonds & Leases", difficulty: 3,
    stem: "A deferred tax liability arises from a temporary difference where:",
    choices: ["Book income is recognized before taxable income (tax paid later)", "There is a permanent difference", "Book and tax are always identical"],
    answerIndex: 0,
    explanation: "A deferred tax liability reflects taxes to be paid in the future — typically when book income is recognized before taxable income (or an expense is deducted for tax first), a temporary difference that reverses later. Choice B (permanent differences) creates no deferred tax. Choice C would create no timing difference at all.",
  },

  // Governmental & Nonprofit
  {
    id: "cpa-gov-q1", examSlug: "cpa", topicId: "gov-nfp", topicName: "Governmental & Nonprofit", difficulty: 2,
    stem: "Governmental funds use which basis of accounting?",
    choices: ["Full accrual", "Modified accrual", "Cash basis only"],
    answerIndex: 1,
    explanation: "Governmental funds use the modified accrual basis with a current financial resources focus, recognizing revenue when measurable and available. Full accrual (A) is used by proprietary funds and government-wide statements. Pure cash basis (C) is not GAAP for governmental fund reporting.",
  },
  {
    id: "cpa-gov-q2", examSlug: "cpa", topicId: "gov-nfp", topicName: "Governmental & Nonprofit", difficulty: 2,
    stem: "Under modified accrual, revenue is recognized when it is measurable and:",
    choices: ["Earned", "Available", "Collected in cash"],
    answerIndex: 1,
    explanation: "Modified accrual recognizes revenue when it is both measurable and AVAILABLE — collectible within the period or soon enough afterward to pay current liabilities. 'Earned' (A) is the full-accrual trigger, and strict cash collection (C) describes the cash basis. 'Available' is the defining word for governmental funds.",
  },
  {
    id: "cpa-gov-q3", examSlug: "cpa", topicId: "gov-nfp", topicName: "Governmental & Nonprofit", difficulty: 1,
    stem: "A nonprofit classifies its net assets into how many categories under current standards?",
    choices: ["Two (with and without donor restrictions)", "Three (unrestricted, temporarily, permanently)", "Five"],
    answerIndex: 0,
    explanation: "Current nonprofit standards use two net-asset classes: with donor restrictions and without donor restrictions. The older three-category model (unrestricted, temporarily restricted, permanently restricted) was collapsed into two (B). Five (C) refers to the COSO components, not net-asset classes.",
  },
  {
    id: "cpa-gov-q4", examSlug: "cpa", topicId: "gov-nfp", topicName: "Governmental & Nonprofit", difficulty: 2,
    stem: "A water utility operated by a city is most appropriately reported in which fund type?",
    choices: ["A governmental fund", "A proprietary fund", "A fiduciary fund"],
    answerIndex: 1,
    explanation: "A utility is a business-type activity that charges user fees, so it belongs in a proprietary fund using full accrual, like a business. Governmental funds (A) account for tax-supported core services. Fiduciary funds (C) hold resources for parties outside the government, such as pension trusts.",
  },
  {
    id: "cpa-gov-q5", examSlug: "cpa", topicId: "gov-nfp", topicName: "Governmental & Nonprofit", difficulty: 2,
    stem: "A donor makes a conditional promise to give that depends on the nonprofit raising matching funds. The nonprofit recognizes contribution revenue:",
    choices: ["Immediately when the promise is made", "When the condition is substantially met", "Only when cash is received"],
    answerIndex: 1,
    explanation: "A conditional promise to give is not recognized as revenue until the condition (here, raising matching funds) is substantially met. Recognizing it immediately (A) ignores the condition. Waiting strictly for cash (C) is incorrect because an UNconditional promise is recognized when made, before cash arrives.",
  },

  // Revenue Recognition & Leases
  {
    id: "cpa-rev-q1", examSlug: "cpa", topicId: "revenue-leases", topicName: "Revenue Recognition & Leases", difficulty: 1,
    stem: "Under ASC 606, revenue is recognized when:",
    choices: ["Cash is collected", "Control of the good or service transfers to the customer", "The contract is signed"],
    answerIndex: 1,
    explanation: "ASC 606 recognizes revenue when (or as) a performance obligation is satisfied — that is, when control transfers to the customer, at a point in time or over time. Cash collection (A) and contract signing (C) don't by themselves trigger revenue; control transfer is the principle.",
  },
  {
    id: "cpa-rev-q2", examSlug: "cpa", topicId: "revenue-leases", topicName: "Revenue Recognition & Leases", difficulty: 2,
    stem: "A product ($900 standalone) and a service ($300 standalone) are bundled and sold for $1,000. How much is allocated to the service?",
    choices: ["$250", "$300", "$333"],
    answerIndex: 0,
    explanation: "Allocate by relative standalone selling price: total standalone = $1,200; service proportion = $300 ÷ $1,200 = 25%; 25% × $1,000 = $250. Using the full $300 (B) ignores the bundle discount, and $333 (C) misapplies the ratio. The $250 is recognized as the service is performed.",
  },
  {
    id: "cpa-rev-q3", examSlug: "cpa", topicId: "revenue-leases", topicName: "Revenue Recognition & Leases", difficulty: 2,
    stem: "A customer pays in advance for goods to be delivered next quarter. Before delivery, the seller records a:",
    choices: ["Contract asset", "Contract liability (deferred revenue)", "Revenue"],
    answerIndex: 1,
    explanation: "When a customer pays before the entity performs, the seller has an obligation to deliver, recorded as a contract liability (deferred revenue). A contract asset (A) is the reverse — performance before an unconditional right to payment. Revenue (C) isn't recognized until control transfers at delivery.",
  },
  {
    id: "cpa-rev-q4", examSlug: "cpa", topicId: "revenue-leases", topicName: "Revenue Recognition & Leases", difficulty: 2,
    stem: "Under ASC 842, a lessee that signs a multi-year equipment lease must generally record:",
    choices: ["Nothing until payments are made", "A right-of-use asset and a lease liability", "Only a footnote disclosure"],
    answerIndex: 1,
    explanation: "ASC 842 requires lessees to put nearly all leases on the balance sheet as a right-of-use asset and a corresponding lease liability (the present value of payments). Off-balance-sheet treatment (A, C) was the old operating-lease approach that ASC 842 eliminated for the lessee's balance sheet.",
  },
  {
    id: "cpa-rev-q5", examSlug: "cpa", topicId: "revenue-leases", topicName: "Revenue Recognition & Leases", difficulty: 3,
    stem: "Which fact pattern requires a lessee to classify a lease as a FINANCE lease?",
    choices: ["The lease term is a small fraction of the asset's life", "Ownership transfers to the lessee at the end of the lease", "The asset has many alternative uses"],
    answerIndex: 1,
    explanation: "Transfer of ownership at the end of the lease is one of the five finance-lease criteria — meeting ANY one mandates finance classification. A short term relative to the asset's life (A) and an asset with alternative uses (C) point AWAY from finance treatment, suggesting an operating lease.",
  },

  // Audit Reports & Opinions
  {
    id: "cpa-arep-q1", examSlug: "cpa", topicId: "audit-reports", topicName: "Audit Reports & Opinions", difficulty: 2,
    stem: "An auditor finds a material misstatement that is NOT pervasive and management won't correct it. The appropriate opinion is:",
    choices: ["Unmodified", "Qualified", "Disclaimer"],
    answerIndex: 1,
    explanation: "A material but not pervasive misstatement (a GAAP departure) calls for a qualified ('except for') opinion. An unmodified opinion (A) would be wrong given the misstatement. A disclaimer (C) is for a scope limitation so severe the auditor can't form an opinion, not for a known misstatement.",
  },
  {
    id: "cpa-arep-q2", examSlug: "cpa", topicId: "audit-reports", topicName: "Audit Reports & Opinions", difficulty: 2,
    stem: "When misstatements are both material AND pervasive, the auditor issues a(n):",
    choices: ["Qualified opinion", "Adverse opinion", "Emphasis-of-matter paragraph"],
    answerIndex: 1,
    explanation: "Material and pervasive misstatements mean the statements as a whole are not fairly presented, requiring an adverse opinion. A qualified opinion (A) is only for material-but-not-pervasive issues. An emphasis-of-matter paragraph (C) adds information without modifying the opinion, so it doesn't address pervasive misstatement.",
  },
  {
    id: "cpa-arep-q3", examSlug: "cpa", topicId: "audit-reports", topicName: "Audit Reports & Opinions", difficulty: 2,
    stem: "An auditor cannot obtain sufficient evidence, and the possible effects are material and pervasive. The auditor should issue a(n):",
    choices: ["Adverse opinion", "Disclaimer of opinion", "Qualified opinion"],
    answerIndex: 1,
    explanation: "A scope limitation whose possible effects are material and pervasive prevents the auditor from forming an opinion, so a disclaimer of opinion is issued. An adverse opinion (A) is for known pervasive MISSTATEMENT, not lack of evidence. A qualified opinion (C) would fit only a material-but-not-pervasive scope limitation.",
  },
  {
    id: "cpa-arep-q4", examSlug: "cpa", topicId: "audit-reports", topicName: "Audit Reports & Opinions", difficulty: 1,
    stem: "An emphasis-of-matter paragraph in the auditor's report:",
    choices: ["Modifies the opinion to qualified", "Draws attention to a properly disclosed matter without modifying the opinion", "Is only used for fraud"],
    answerIndex: 1,
    explanation: "An emphasis-of-matter paragraph highlights a matter that is appropriately presented and disclosed and fundamental to users' understanding — it does NOT change the opinion. It does not qualify the opinion (A), and it isn't limited to fraud (C); a common use is a going-concern uncertainty with adequate disclosure.",
  },
  {
    id: "cpa-arep-q5", examSlug: "cpa", topicId: "audit-reports", topicName: "Audit Reports & Opinions", difficulty: 2,
    stem: "Substantial doubt exists about an entity's ability to continue as a going concern, but the disclosure is adequate. The auditor typically issues:",
    choices: ["An adverse opinion", "An unmodified opinion with a going-concern paragraph", "A disclaimer"],
    answerIndex: 1,
    explanation: "When going-concern doubt is substantial but the entity discloses it adequately, the auditor generally keeps an unmodified opinion and adds a going-concern (emphasis) paragraph. An adverse opinion (A) would require a misstatement; inadequate disclosure — not present here — could force qualification. A disclaimer (C) addresses lack of evidence, not going concern with good disclosure.",
  },

  // Business Law
  {
    id: "cpa-bl-q1", examSlug: "cpa", topicId: "business-law", topicName: "Business Law", difficulty: 1,
    stem: "Which three elements are required to form a valid contract?",
    choices: ["Offer, acceptance, and consideration", "Offer, delivery, and notarization", "Writing, witness, and seal"],
    answerIndex: 0,
    explanation: "A valid contract requires an offer, acceptance, and consideration (plus capacity and legal purpose). Delivery and notarization (B) aren't general formation elements, and a writing/witness/seal (C) isn't required for most contracts — only those covered by the Statute of Frauds must be in writing.",
  },
  {
    id: "cpa-bl-q2", examSlug: "cpa", topicId: "business-law", topicName: "Business Law", difficulty: 2,
    stem: "Under the Statute of Frauds, which contract generally must be in writing to be enforceable?",
    choices: ["A $200 sale of goods", "A contract for the sale of land", "A one-week service agreement"],
    answerIndex: 1,
    explanation: "Contracts for the sale of land must be in writing under the Statute of Frauds (the 'L' in MY LEGS). A $200 goods sale (A) is below the $500 UCC threshold, and a one-week service agreement (C) can be performed within a year, so neither requires a writing.",
  },
  {
    id: "cpa-bl-q3", examSlug: "cpa", topicId: "business-law", topicName: "Business Law", difficulty: 2,
    stem: "A principal is bound by an agent's actions that fall within the agent's apparent authority because:",
    choices: ["Apparent authority is irrelevant to the principal", "A third party reasonably believed the agent had authority", "Agents can never bind principals"],
    answerIndex: 1,
    explanation: "Apparent authority binds the principal when a third party reasonably believes, based on the principal's conduct, that the agent is authorized — even absent actual authority. Choice A is false (apparent authority binds the principal), and choice C is false (agents routinely bind principals within actual or apparent authority).",
  },
  {
    id: "cpa-bl-q4", examSlug: "cpa", topicId: "business-law", topicName: "Business Law", difficulty: 2,
    stem: "Under UCC Article 2, a merchant who sells goods automatically gives which implied warranty?",
    choices: ["Warranty of merchantability", "Warranty of title only", "No warranties at all"],
    answerIndex: 0,
    explanation: "A merchant seller of goods automatically gives the implied warranty of merchantability — that the goods are fit for their ordinary purpose. While a warranty of title also generally applies, 'title only' (B) understates the merchant's obligations, and 'no warranties' (C) is wrong because merchantability arises by operation of law unless properly disclaimed.",
  },
  {
    id: "cpa-bl-q5", examSlug: "cpa", topicId: "business-law", topicName: "Business Law", difficulty: 1,
    stem: "Which is a valid defense that can make an otherwise-formed contract unenforceable?",
    choices: ["Fraud in the inducement", "A good bargain for one side", "Performance by both parties"],
    answerIndex: 0,
    explanation: "Fraud in the inducement — a false statement of material fact that induced the agreement — is a recognized defense rendering a contract voidable. A good bargain for one side (B) is not a defense; courts don't police fairness of consideration. Performance by both parties (C) discharges the contract, it doesn't void it.",
  },

  // Entity Taxation
  {
    id: "cpa-ent-q1", examSlug: "cpa", topicId: "tax-entities", topicName: "Entity Taxation", difficulty: 1,
    stem: "The 'double taxation' of a C corporation refers to tax on:",
    choices: ["Corporate income, then again on dividends to shareholders", "Two states taxing the same income", "Income and payroll both"],
    answerIndex: 0,
    explanation: "Double taxation means a C corporation pays entity-level tax on its income, and shareholders then pay tax again on dividends distributed from that already-taxed income. It's not about two states (B) or income-plus-payroll (C); it's the two layers of income tax that pass-through entities avoid.",
  },
  {
    id: "cpa-ent-q2", examSlug: "cpa", topicId: "tax-entities", topicName: "Entity Taxation", difficulty: 2,
    stem: "A partner contributes $40,000, is allocated $25,000 of income, and receives a $10,000 distribution. The partner's ending basis is:",
    choices: ["$45,000", "$55,000", "$65,000"],
    answerIndex: 1,
    explanation: "Outside basis = $40,000 + $25,000 income − $10,000 distribution = $55,000. Allocated income increases basis (and is taxed regardless of distribution); distributions reduce it. Choice C forgets the distribution; choice A mis-nets the figures.",
  },
  {
    id: "cpa-ent-q3", examSlug: "cpa", topicId: "tax-entities", topicName: "Entity Taxation", difficulty: 2,
    stem: "How is partnership income reported to the partners?",
    choices: ["The partnership pays the tax itself", "It passes through on Schedule K-1 to each partner", "It is tax-free to everyone"],
    answerIndex: 1,
    explanation: "A partnership is a pass-through entity: it files an information return (Form 1065) but pays no income tax itself, passing income, deductions, and credits to partners on Schedule K-1, who report their share. The partnership doesn't pay the tax (A), and the income is taxed to partners, not tax-free (C).",
  },
  {
    id: "cpa-ent-q4", examSlug: "cpa", topicId: "tax-entities", topicName: "Entity Taxation", difficulty: 2,
    stem: "Which is a requirement to qualify as an S corporation?",
    choices: ["No more than 100 eligible shareholders and one class of stock", "At least one corporate shareholder", "Multiple classes of stock"],
    answerIndex: 0,
    explanation: "An S corporation generally may have no more than 100 shareholders and only one class of stock, with shareholders limited to U.S. individuals and certain trusts/estates. A corporate shareholder (B) is NOT allowed, and multiple classes of stock (C) disqualify the election.",
  },
  {
    id: "cpa-ent-q5", examSlug: "cpa", topicId: "tax-entities", topicName: "Entity Taxation", difficulty: 3,
    stem: "A key basis difference between partnerships and S corporations is that S corporation shareholders generally do NOT receive basis for:",
    choices: ["Their direct cash contributions", "The entity's general (third-party) debt", "Pass-through income"],
    answerIndex: 1,
    explanation: "Unlike partners, S corporation shareholders generally get no basis for the corporation's third-party debt — only for direct loans they personally make to the corporation. They do get basis for cash contributions (A) and for pass-through income (C). This debt-basis distinction is a frequently tested contrast.",
  },

  // Internal Controls & IT
  {
    id: "cpa-ic-q1", examSlug: "cpa", topicId: "internal-controls", topicName: "Internal Controls & IT", difficulty: 1,
    stem: "How many components make up the COSO internal control framework?",
    choices: ["Three", "Five", "Seven"],
    answerIndex: 1,
    explanation: "COSO defines five components: control environment, risk assessment, control activities, information and communication, and monitoring. Three (A) and seven (C) are incorrect counts. Knowing the five components and their roles is a core AUD/ISC point.",
  },
  {
    id: "cpa-ic-q2", examSlug: "cpa", topicId: "internal-controls", topicName: "Internal Controls & IT", difficulty: 2,
    stem: "Segregation of duties separates which incompatible functions?",
    choices: ["Authorization, recordkeeping, and custody", "Sales, marketing, and shipping", "Hiring, training, and payroll"],
    answerIndex: 0,
    explanation: "Segregation of duties keeps authorization, recordkeeping, and custody of assets (the ARC) in different hands so no one can both perpetrate and conceal fraud. The other groupings (B, C) are ordinary business functions, not the control-critical incompatible duties.",
  },
  {
    id: "cpa-ic-q3", examSlug: "cpa", topicId: "internal-controls", topicName: "Internal Controls & IT", difficulty: 2,
    stem: "A monthly bank reconciliation is best described as which type of control?",
    choices: ["Preventive", "Detective", "Corrective"],
    answerIndex: 1,
    explanation: "A reconciliation finds discrepancies after transactions have occurred, making it a detective control. Preventive controls (A) stop errors before they happen, like requiring authorization. Corrective controls (C) fix problems once detected. Reconciliations detect; they don't prevent the error in the first place.",
  },
  {
    id: "cpa-ic-q4", examSlug: "cpa", topicId: "internal-controls", topicName: "Internal Controls & IT", difficulty: 2,
    stem: "Internal control can provide only 'reasonable assurance' primarily because of:",
    choices: ["Excessive documentation", "Inherent limitations like human error and management override", "Too many employees"],
    answerIndex: 1,
    explanation: "Even well-designed controls can be defeated by inherent limitations — human error, collusion, and management override — so they offer reasonable, not absolute, assurance. Documentation (A) and staffing levels (C) aren't the conceptual reason; the limitations are built into any control system.",
  },
  {
    id: "cpa-ic-q5", examSlug: "cpa", topicId: "internal-controls", topicName: "Internal Controls & IT", difficulty: 2,
    stem: "Controls over system access, program changes, and IT operations are known as:",
    choices: ["Application controls", "IT general controls (ITGCs)", "Substantive procedures"],
    answerIndex: 1,
    explanation: "IT general controls (ITGCs) govern the overall IT environment — access, change management, and operations — that applications rely on. Application controls (A) operate within a specific system (input edits, validations). Substantive procedures (C) are audit tests of balances and transactions, not controls. Weak ITGCs undermine all dependent application controls.",
  },
];

// ============================================================
// CPA is split into four exam tracks, mirroring the CFA L1/L2/L3 split:
//   cpa-aud  — AUD (Auditing & Attestation)            [Core]
//   cpa-far  — FAR (Financial Accounting & Reporting)  [Core]
//   cpa-reg  — REG (Taxation & Regulation)             [Core]
//   cpa-disc — Discipline (BAR / ISC / TCP, combined)  [pick one]
// The 2024 "CPA Evolution" retired BEC; its content now seeds the
// Discipline track (mostly BAR — Business Analysis & Reporting).
// Chapters/questions are grouped by topicId into each section.
// ============================================================
const CPA_SECTION_TOPICS: Record<string, string[]> = {
  "cpa-aud": ["aud", "audit-reports", "internal-controls"],
  "cpa-far": ["far", "liabilities", "gov-nfp", "revenue-leases"],
  "cpa-reg": ["reg", "tax-individual", "tax-entities", "business-law"],
  "cpa-disc": ["bec", "managerial"],
};

function cpaSection(slug: string): ExamContent {
  const topics = CPA_SECTION_TOPICS[slug];
  return {
    examSlug: slug,
    chapters: chapters
      .filter((c) => topics.includes(c.topicId))
      .map((c) => ({ ...c, examSlug: slug })),
    questions: questions
      .filter((q) => topics.includes(q.topicId))
      .map((q) => ({ ...q, examSlug: slug })),
  };
}

// Each core section leads with textbook-depth chapters, then the existing lighter chapters.
const audBase = cpaSection("cpa-aud");
export const cpaAudContent: ExamContent = {
  examSlug: "cpa-aud",
  chapters: [...audDeepChapters, ...audBase.chapters],
  questions: [...audDeepQuestions, ...audBase.questions],
};
const farBase = cpaSection("cpa-far");
export const cpaFarContent: ExamContent = {
  examSlug: "cpa-far",
  chapters: [...farDeepChapters, ...farBase.chapters],
  questions: [...farDeepQuestions, ...farBase.questions],
};
const regBase = cpaSection("cpa-reg");
export const cpaRegContent: ExamContent = {
  examSlug: "cpa-reg",
  chapters: [...regDeepChapters, ...regBase.chapters],
  questions: [...regDeepQuestions, ...regBase.questions],
};
const discBase = cpaSection("cpa-disc");
export const cpaDiscContent: ExamContent = {
  examSlug: "cpa-disc",
  chapters: [...discDeepChapters, ...discBase.chapters],
  questions: [...discDeepQuestions, ...discBase.questions],
};
