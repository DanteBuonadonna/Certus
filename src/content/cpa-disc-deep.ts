// ============================================================
// Certus — CPA Discipline (BAR / ISC / TCP) textbook-depth content
// Four deep, exam-focused readings + aligned questions for the combined
// Discipline track, weighted toward BAR (the most-chosen discipline) with
// ISC governance/IT coverage. Wired into cpaDiscContent (cpa-disc track).
// ============================================================

import { Chapter, Question } from "./types";

export const discDeepChapters: Chapter[] = [
  {
    id: "cpa-disc-fsa-deep",
    examSlug: "cpa-disc",
    topicId: "bec",
    topicName: "Discipline (BAR / ISC / TCP)",
    title: "Financial Statement Analysis and Ratios",
    readingMinutes: 58,
    summary:
      "The analyst's toolkit at the heart of the BAR discipline — liquidity, solvency, profitability, and efficiency ratios, and the DuPont decomposition that breaks return on equity into margin, turnover, and leverage.",
    intro:
      "The Business Analysis and Reporting (BAR) discipline leans heavily on RATIO ANALYSIS — using the financial statements to assess a company's liquidity, solvency, profitability, and efficiency, and to explain WHY returns are what they are. This reading organizes the core ratios into their four families and works through the DuPont model, the framework that decomposes return on equity into its drivers.",
    sections: [
      {
        heading: "1. Liquidity and solvency",
        blocks: [
          { kind: "p", text: "LIQUIDITY ratios measure the ability to meet SHORT-TERM obligations. The CURRENT RATIO is current assets ÷ current liabilities (a value above 1 means current assets cover current liabilities). The QUICK (acid-test) RATIO is stricter — (current assets − inventory) ÷ current liabilities — because inventory is the least liquid current asset. SOLVENCY ratios measure long-term staying power: DEBT-TO-EQUITY (total debt ÷ total equity) gauges leverage, and TIMES INTEREST EARNED (EBIT ÷ interest expense) measures how comfortably operating earnings cover interest." },
          { kind: "formula", formula: { label: "Liquidity and leverage ratios", expr: "Current ratio = Current assets ÷ Current liabilities     Quick ratio = (Current assets − Inventory) ÷ Current liabilities     Debt-to-equity = Total debt ÷ Total equity", note: "The quick ratio strips out inventory; debt-to-equity rises with leverage." } },
          { kind: "example", example: { title: "Current and quick ratios", prompt: "A firm has current assets of $300,000 (including $120,000 of inventory) and current liabilities of $150,000. What are its current and quick ratios?", steps: ["Current ratio = $300,000 ÷ $150,000 = 2.0.", "Quick ratio = ($300,000 − $120,000) ÷ $150,000 = $180,000 ÷ $150,000 = 1.2."], answer: "Current ratio 2.0; quick ratio 1.2. Both exceed 1.0, indicating the firm can cover current liabilities even excluding inventory." } },
        ],
      },
      {
        heading: "2. Profitability and efficiency",
        blocks: [
          { kind: "p", text: "PROFITABILITY ratios relate earnings to sales or capital: GROSS MARGIN (gross profit ÷ sales), NET MARGIN (net income ÷ sales), RETURN ON ASSETS (net income ÷ total assets), and RETURN ON EQUITY (net income ÷ equity). EFFICIENCY (activity) ratios measure how well assets are used: INVENTORY TURNOVER (COGS ÷ average inventory), RECEIVABLES TURNOVER (sales ÷ average receivables), and ASSET TURNOVER (sales ÷ total assets). Higher turnover generally signals more efficient use of the underlying asset, though it must be read in industry context." },
        ],
      },
      {
        heading: "3. The DuPont decomposition",
        blocks: [
          { kind: "p", text: "The DUPONT model explains return on equity by breaking it into three levers, so an analyst can see WHETHER a high ROE comes from fat margins, efficient asset use, or heavy leverage. ROE equals NET PROFIT MARGIN (profitability) times ASSET TURNOVER (efficiency) times the EQUITY MULTIPLIER (leverage = assets ÷ equity). Two firms with the same ROE can have very different risk profiles — one earning it through margin, another through leverage — which is exactly the insight the discipline tests." },
          { kind: "formula", formula: { label: "DuPont ROE", expr: "ROE = Net profit margin × Asset turnover × Equity multiplier = (NI/Sales) × (Sales/Assets) × (Assets/Equity)", note: "Decomposes return on equity into profitability, efficiency, and leverage; the sales and asset terms cancel to leave NI/Equity." } },
          { kind: "example", example: { title: "DuPont analysis", prompt: "A company has a net profit margin of 8%, asset turnover of 1.5, and an equity multiplier of 2.0. What is its ROE?", steps: ["ROE = net margin × asset turnover × equity multiplier.", "= 0.08 × 1.5 × 2.0.", "= 0.24."], answer: "ROE = 24%. The decomposition shows this is driven partly by leverage (the 2.0 equity multiplier); stripping leverage out, return on assets = 8% × 1.5 = 12%." } },
        ],
      },
      {
        heading: "4. Synthesis",
        blocks: [
          { kind: "p", text: "Ratio analysis groups into four families: liquidity (current, quick), solvency (debt-to-equity, times interest earned), profitability (margins, ROA, ROE), and efficiency (inventory, receivables, asset turnover). The DuPont model ties them together by decomposing ROE into margin × turnover × leverage, revealing the source of returns and the role of leverage. Over-learn the current/quick ratio formulas and the DuPont decomposition — they anchor the analysis questions in the BAR discipline." },
        ],
      },
    ],
    keyTerms: [
      { term: "Current ratio", def: "Current assets ÷ current liabilities; short-term liquidity." },
      { term: "Quick (acid-test) ratio", def: "(Current assets − inventory) ÷ current liabilities; stricter liquidity." },
      { term: "Debt-to-equity", def: "Total debt ÷ total equity; leverage/solvency." },
      { term: "Times interest earned", def: "EBIT ÷ interest expense; interest coverage." },
      { term: "Gross / net margin", def: "Gross profit ÷ sales; net income ÷ sales." },
      { term: "Return on assets (ROA)", def: "Net income ÷ total assets." },
      { term: "Return on equity (ROE)", def: "Net income ÷ equity." },
      { term: "Turnover ratios", def: "Inventory (COGS/avg inventory), receivables (sales/avg AR), asset (sales/assets)." },
      { term: "DuPont decomposition", def: "ROE = net margin × asset turnover × equity multiplier." },
      { term: "Equity multiplier", def: "Assets ÷ equity; the leverage component of DuPont." },
    ],
    takeaways: [
      "Liquidity ratios (current, quick) measure short-term coverage; the quick ratio excludes inventory.",
      "Solvency ratios (debt-to-equity, times interest earned) measure leverage and interest coverage.",
      "Profitability ratios include gross and net margin, ROA, and ROE; efficiency ratios measure inventory, receivables, and asset turnover.",
      "DuPont decomposes ROE into net profit margin × asset turnover × equity multiplier (profitability × efficiency × leverage).",
      "The decomposition reveals the SOURCE of returns — two firms with equal ROE can differ sharply in margin, efficiency, and leverage.",
      "Always read ratios in industry context and against trends, not in isolation.",
    ],
  },

  {
    id: "cpa-disc-managerial-deep",
    examSlug: "cpa-disc",
    topicId: "managerial",
    topicName: "Discipline (BAR / ISC / TCP)",
    title: "Cost and Managerial Accounting: CVP, Costing, and Variances",
    readingMinutes: 58,
    summary:
      "The internal-decision toolkit — cost-volume-profit analysis and breakeven, contribution margin, absorption versus variable costing, and standard-cost variance analysis for materials and labor.",
    intro:
      "Managerial accounting supports internal decisions, and three areas dominate the discipline: COST-VOLUME-PROFIT (CVP) analysis (breakeven and target profit), the COSTING methods that determine product cost, and VARIANCE ANALYSIS that compares actual results to standards. Each is formula-driven and quick once the contribution-margin idea is internalized.",
    sections: [
      {
        heading: "1. Cost-volume-profit and breakeven",
        blocks: [
          { kind: "p", text: "CVP analysis rests on the CONTRIBUTION MARGIN — the selling price per unit minus the VARIABLE cost per unit — which is the amount each unit contributes toward covering fixed costs and then profit. The BREAKEVEN point in units is fixed costs ÷ contribution margin per unit. To earn a TARGET PROFIT, treat the target like additional fixed cost: required units = (fixed costs + target profit) ÷ contribution margin per unit. The CONTRIBUTION MARGIN RATIO (contribution margin ÷ price) lets you compute breakeven in sales dollars." },
          { kind: "formula", formula: { label: "Breakeven and target profit", expr: "Contribution margin = Price − Variable cost     Breakeven units = Fixed costs ÷ CM per unit     Target units = (Fixed costs + Target profit) ÷ CM per unit", note: "Each unit's contribution margin first covers fixed costs (breakeven), then builds profit." } },
          { kind: "example", example: { title: "Breakeven and target profit", prompt: "Price $40, variable cost $25, fixed costs $90,000. What are breakeven units, and units needed for a $30,000 profit?", steps: ["Contribution margin = $40 − $25 = $15 per unit.", "Breakeven = $90,000 ÷ $15 = 6,000 units.", "Target profit units = ($90,000 + $30,000) ÷ $15 = 8,000 units."], answer: "Breakeven 6,000 units; 8,000 units for a $30,000 profit — 2,000 units of profit beyond breakeven, each contributing $15." } },
        ],
      },
      {
        heading: "2. Costing methods",
        blocks: [
          { kind: "p", text: "Two distinctions matter. ABSORPTION costing (required for external GAAP reporting) assigns ALL manufacturing costs — direct materials, direct labor, and BOTH variable and FIXED overhead — to product, so fixed overhead sits in inventory until the units sell. VARIABLE (direct) costing assigns only VARIABLE manufacturing costs to product and expenses fixed overhead as a period cost; it is used internally because it makes CVP analysis clean. When production differs from sales, the two methods report different income (absorption income is higher when inventory builds, because fixed overhead is deferred in inventory). Separately, JOB-ORDER costing accumulates cost by distinct job (custom work), while PROCESS costing averages cost across mass-produced identical units." },
        ],
      },
      {
        heading: "3. Variance analysis",
        blocks: [
          { kind: "p", text: "STANDARD COSTING sets expected (standard) costs, and VARIANCE ANALYSIS explains the difference from actual. For both materials and labor, the total variance splits into a PRICE/RATE variance and a QUANTITY/EFFICIENCY variance. The PRICE (materials) or RATE (labor) variance isolates paying more or less per unit/hour than standard: (actual price − standard price) × actual quantity. The QUANTITY (materials) or EFFICIENCY (labor) variance isolates using more or less input than standard: (actual quantity − standard quantity) × standard price. A variance is FAVORABLE when actual cost is below standard and UNFAVORABLE when above. Isolating the two helps management assign responsibility — purchasing for price, production for usage." },
          { kind: "p", text: "The chapter's core: CVP uses the contribution margin (price − variable cost) to find breakeven (fixed costs ÷ CM) and target-profit volume; absorption costing capitalizes fixed overhead in inventory while variable costing expenses it (causing income differences when inventory changes); and variance analysis splits cost differences into price/rate and quantity/efficiency components. Over-learn the breakeven/target-profit formulas and the price-versus-quantity variance split." },
        ],
      },
    ],
    keyTerms: [
      { term: "Contribution margin", def: "Price − variable cost; covers fixed costs then profit." },
      { term: "Breakeven units", def: "Fixed costs ÷ contribution margin per unit." },
      { term: "Target-profit units", def: "(Fixed costs + target profit) ÷ contribution margin per unit." },
      { term: "Contribution margin ratio", def: "Contribution margin ÷ price; gives breakeven in sales dollars." },
      { term: "Absorption costing", def: "All manufacturing costs (incl. fixed overhead) to product; required for GAAP." },
      { term: "Variable (direct) costing", def: "Only variable costs to product; fixed overhead is a period cost; used internally." },
      { term: "Job-order vs process costing", def: "By distinct job (custom) vs averaged across identical mass-produced units." },
      { term: "Price/rate variance", def: "(Actual price − standard price) × actual quantity." },
      { term: "Quantity/efficiency variance", def: "(Actual quantity − standard quantity) × standard price." },
      { term: "Favorable vs unfavorable", def: "Actual cost below standard is favorable; above is unfavorable." },
    ],
    takeaways: [
      "Contribution margin = price − variable cost; breakeven units = fixed costs ÷ contribution margin per unit.",
      "For a target profit, required units = (fixed costs + target profit) ÷ contribution margin per unit.",
      "Absorption costing assigns all manufacturing costs (including fixed overhead) to product; variable costing expenses fixed overhead as a period cost.",
      "Absorption and variable costing report different income when inventory changes (absorption is higher when inventory builds).",
      "Variance analysis splits a cost difference into a price/rate variance and a quantity/efficiency variance.",
      "A variance is favorable when actual cost is below standard and unfavorable when above; the split assigns responsibility (purchasing vs production).",
    ],
  },

  {
    id: "cpa-disc-governance-deep",
    examSlug: "cpa-disc",
    topicId: "bec",
    topicName: "Discipline (BAR / ISC / TCP)",
    title: "Corporate Governance, Enterprise Risk, and IT Controls",
    readingMinutes: 56,
    summary:
      "The control and oversight side of the discipline — corporate governance and the agency problem, COSO's enterprise risk management framework and risk responses, and the information-systems controls (data integrity, security, and SOC reports) emphasized in the ISC discipline.",
    intro:
      "Beyond the numbers, the discipline tests how organizations are GOVERNED, how they manage RISK, and how they control their INFORMATION SYSTEMS. This reading covers corporate governance and the agency problem, the COSO Enterprise Risk Management framework and the four risk responses, and the IT/data controls — including SOC reports — that anchor the Information Systems and Control (ISC) discipline.",
    sections: [
      {
        heading: "1. Corporate governance",
        blocks: [
          { kind: "p", text: "CORPORATE GOVERNANCE is the system of rules and oversight by which a company is directed and controlled. It exists largely to address the AGENCY PROBLEM — the conflict between owners (shareholders) and managers (agents) who may pursue their own interests. Key mechanisms include an independent BOARD OF DIRECTORS that oversees management, an AUDIT COMMITTEE of independent directors that engages and oversees the external auditor and internal controls, executive compensation tied to performance, and shareholder rights. Strong governance aligns management with owners and underpins reliable financial reporting." },
        ],
      },
      {
        heading: "2. Enterprise risk management",
        blocks: [
          { kind: "p", text: "The COSO ENTERPRISE RISK MANAGEMENT (ERM) framework integrates risk management with strategy and performance across five components: GOVERNANCE AND CULTURE; STRATEGY AND OBJECTIVE-SETTING; PERFORMANCE (identifying, assessing, and prioritizing risks); REVIEW AND REVISION; and INFORMATION, COMMUNICATION, AND REPORTING. Once a risk is identified and assessed (by likelihood and impact), management selects a RISK RESPONSE: AVOID the activity, REDUCE (mitigate) the risk with controls, SHARE/TRANSFER it (insurance, hedging, outsourcing), or ACCEPT it when the cost of further action exceeds the benefit. The goal is to keep risk within the organization's risk appetite." },
          { kind: "table", table: { caption: "The four risk responses", headers: ["Response", "Action"], rows: [["Avoid", "Exit or don't undertake the activity"], ["Reduce", "Mitigate with controls"], ["Share / transfer", "Insurance, hedging, outsourcing"], ["Accept", "Retain the risk (within appetite)"]] } },
        ],
      },
      {
        heading: "3. Information systems and IT controls",
        blocks: [
          { kind: "p", text: "The ISC discipline emphasizes controls over INFORMATION SYSTEMS and data. The core security objectives are the 'CIA TRIAD': CONFIDENTIALITY (data accessible only to the authorized), INTEGRITY (data accurate and unaltered), and AVAILABILITY (systems and data accessible when needed). Controls include logical ACCESS controls (passwords, multifactor authentication, least-privilege access), CHANGE MANAGEMENT over program changes, BACKUP and disaster recovery, and segregation of IT duties. As covered earlier, IT GENERAL CONTROLS underpin the APPLICATION controls embedded in specific systems." },
        ],
      },
      {
        heading: "4. SOC reports and synthesis",
        blocks: [
          { kind: "p", text: "When organizations outsource processes to a SERVICE ORGANIZATION (e.g., a payroll or cloud provider), SYSTEM AND ORGANIZATION CONTROLS (SOC) reports provide assurance over that provider's controls. A SOC 1 report addresses controls relevant to a user entity's FINANCIAL REPORTING (internal control over financial reporting); a SOC 2 report addresses controls related to the TRUST SERVICES CRITERIA — security, availability, processing integrity, confidentiality, and privacy — for operational and compliance purposes. (A SOC 3 is a general-use summary of a SOC 2.) The chapter's core: governance (independent board, audit committee) addresses the owner-manager agency problem; COSO ERM frames risk with five components and four responses (avoid, reduce, share, accept); and IT/data controls protect confidentiality, integrity, and availability, with SOC 1 (financial reporting) and SOC 2 (trust services criteria) reports giving assurance over service organizations. Over-learn the four risk responses and the SOC 1 vs SOC 2 distinction." },
        ],
      },
    ],
    keyTerms: [
      { term: "Corporate governance", def: "The system of oversight directing and controlling a company." },
      { term: "Agency problem", def: "Conflict between owners (principals) and managers (agents)." },
      { term: "Audit committee", def: "Independent board committee overseeing the auditor and internal controls." },
      { term: "COSO ERM framework", def: "Governance & culture, strategy & objective-setting, performance, review, information & communication." },
      { term: "Risk responses", def: "Avoid, reduce (mitigate), share/transfer, accept." },
      { term: "Risk appetite", def: "The amount of risk an organization is willing to accept." },
      { term: "CIA triad", def: "Confidentiality, integrity, availability — core information-security objectives." },
      { term: "Access & change controls", def: "Authentication/least-privilege access and program-change management." },
      { term: "SOC 1 report", def: "Assurance over a service organization's controls relevant to financial reporting." },
      { term: "SOC 2 report", def: "Assurance over the trust services criteria (security, availability, processing integrity, confidentiality, privacy)." },
    ],
    takeaways: [
      "Corporate governance — an independent board and audit committee, aligned incentives, shareholder rights — addresses the owner-manager agency problem.",
      "COSO ERM integrates risk with strategy across five components: governance & culture, strategy & objective-setting, performance, review, and information/communication.",
      "The four risk responses are avoid, reduce, share/transfer, and accept, chosen to keep risk within the organization's appetite.",
      "Information security protects the CIA triad — confidentiality, integrity, and availability — through access controls, change management, and backup/recovery.",
      "SOC 1 reports cover a service organization's controls relevant to financial reporting; SOC 2 reports cover the trust services criteria.",
      "IT general controls underpin the application controls within specific systems.",
    ],
  },

  {
    id: "cpa-disc-capital-deep",
    examSlug: "cpa-disc",
    topicId: "managerial",
    topicName: "Discipline (BAR / ISC / TCP)",
    title: "Capital Budgeting and Financial Valuation",
    readingMinutes: 56,
    summary:
      "How firms evaluate long-term investments — the time value of money, net present value and the internal rate of return, the payback period, and the weighted-average cost of capital used to discount projects.",
    intro:
      "Capital budgeting decides which long-term investments a firm should make, and it is a quantitative staple of the BAR discipline. The unifying idea is the TIME VALUE OF MONEY: a dollar today is worth more than a dollar later. This reading builds the core decision tools — NET PRESENT VALUE, the INTERNAL RATE OF RETURN, and the PAYBACK PERIOD — and the cost of capital used to discount future cash flows.",
    sections: [
      {
        heading: "1. The time value of money",
        blocks: [
          { kind: "p", text: "Money has a TIME VALUE because a dollar today can be invested to grow. A future cash flow is therefore worth LESS than its face amount today, and we find its PRESENT VALUE by DISCOUNTING at a required rate. The higher the discount rate or the further in the future, the lower the present value. Capital-budgeting methods apply this idea to a project's expected cash flows to judge whether the investment creates value." },
          { kind: "formula", formula: { label: "Present value of a future cash flow", expr: "PV = Future cash flow ÷ (1 + r)^n", note: "r is the discount rate (often the WACC); n is the number of periods. Discounting converts future dollars to today's value." } },
        ],
      },
      {
        heading: "2. Net present value",
        blocks: [
          { kind: "p", text: "NET PRESENT VALUE (NPV) is the gold-standard rule: discount all of a project's expected future cash flows to present value and subtract the initial investment. If NPV is POSITIVE, the project earns more than the required return and creates value — ACCEPT it; if NEGATIVE, reject it. NPV is preferred because it measures value creation in dollars and handles any cash-flow pattern." },
          { kind: "example", example: { title: "Computing NPV", prompt: "A project costs $10,000 today and returns $6,000 at the end of year 1 and $6,000 at the end of year 2. At a 10% discount rate, what is the NPV?", steps: ["PV of year 1 = $6,000 ÷ 1.10 = $5,454.55.", "PV of year 2 = $6,000 ÷ 1.10² = $6,000 ÷ 1.21 = $4,958.68.", "Total PV of inflows = $5,454.55 + $4,958.68 = $10,413.23.", "NPV = $10,413.23 − $10,000 = $413.23."], answer: "NPV ≈ +$413, so the project is accepted — it returns more than the 10% required rate and adds about $413 of value today." } },
        ],
      },
      {
        heading: "3. IRR, payback, and the cost of capital",
        blocks: [
          { kind: "p", text: "The INTERNAL RATE OF RETURN (IRR) is the discount rate that makes a project's NPV equal to ZERO — its built-in rate of return. The rule: accept if the IRR exceeds the required rate (hurdle rate); reject if below. IRR and NPV usually agree, but NPV is more reliable for mutually exclusive projects or unusual cash-flow patterns. The PAYBACK PERIOD measures how long it takes to recover the initial investment in undiscounted cash; it is simple but ignores the time value of money and cash flows after payback. The discount rate is typically the WEIGHTED-AVERAGE COST OF CAPITAL (WACC) — the blended after-tax cost of the firm's debt and equity weighted by their proportions — representing the minimum return a project must earn." },
          { kind: "p", text: "The chapter's core: the time value of money discounts future cash flows to present value; NPV (discounted inflows − investment) accepts projects with a positive value and is the preferred rule; IRR (the rate where NPV = 0) accepts projects exceeding the hurdle rate; payback is simple but ignores time value and later cash flows; and the WACC is the standard discount rate. Over-learn the NPV computation and the accept rules for NPV and IRR." },
        ],
      },
    ],
    keyTerms: [
      { term: "Time value of money", def: "A dollar today is worth more than a dollar later; future cash flows are discounted." },
      { term: "Present value", def: "PV = future cash flow ÷ (1 + r)^n; today's value of future money." },
      { term: "Net present value (NPV)", def: "Discounted inflows − initial investment; accept if positive." },
      { term: "Internal rate of return (IRR)", def: "The discount rate making NPV = 0; accept if above the hurdle rate." },
      { term: "NPV vs IRR", def: "Usually agree; NPV is more reliable for mutually exclusive or unusual-cash-flow projects." },
      { term: "Payback period", def: "Time to recover the initial investment; ignores time value and later cash flows." },
      { term: "Hurdle rate", def: "The minimum required return a project must beat." },
      { term: "Weighted-average cost of capital (WACC)", def: "Blended after-tax cost of debt and equity; the usual discount rate." },
    ],
    takeaways: [
      "The time value of money means future cash flows are discounted to present value: PV = cash flow ÷ (1 + r)^n.",
      "NPV discounts all project cash flows and subtracts the investment; accept when NPV is positive (it creates value).",
      "IRR is the rate where NPV = 0; accept a project when its IRR exceeds the hurdle rate.",
      "NPV and IRR usually agree, but NPV is more reliable for mutually exclusive projects or unusual cash-flow patterns.",
      "The payback period is simple but ignores the time value of money and cash flows after payback.",
      "The discount rate is typically the WACC — the blended after-tax cost of debt and equity and the minimum return a project must earn.",
    ],
  },
];

export const discDeepQuestions: Question[] = [
  {
    id: "cpa-disc-fsa-d1", examSlug: "cpa-disc", topicId: "bec", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 2,
    stem: "A firm has current assets of $300,000 (including $120,000 inventory) and current liabilities of $150,000. Its quick ratio is:",
    choices: ["2.0", "1.2", "0.8", "1.5"],
    answerIndex: 1,
    explanation: "Quick ratio = (current assets − inventory) ÷ current liabilities = ($300,000 − $120,000) ÷ $150,000 = $180,000 ÷ $150,000 = 1.2. The current ratio (including inventory) would be 2.0.",
  },
  {
    id: "cpa-disc-fsa-d2", examSlug: "cpa-disc", topicId: "bec", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 3,
    stem: "Net profit margin 8%, asset turnover 1.5, equity multiplier 2.0. DuPont ROE is:",
    choices: ["12%", "16%", "24%", "8%"],
    answerIndex: 2,
    explanation: "DuPont ROE = net margin × asset turnover × equity multiplier = 0.08 × 1.5 × 2.0 = 0.24 = 24%. Return on assets (margin × turnover) is 12%; the 2.0 equity multiplier (leverage) doubles it to ROE.",
  },
  {
    id: "cpa-disc-fsa-d3", examSlug: "cpa-disc", topicId: "bec", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 1,
    stem: "The quick (acid-test) ratio differs from the current ratio by excluding:",
    choices: ["Cash", "Accounts receivable", "Inventory", "Current liabilities"],
    answerIndex: 2,
    explanation: "The quick ratio excludes inventory — the least liquid current asset — from the numerator, providing a stricter measure of the ability to meet short-term obligations with more liquid assets.",
  },
  {
    id: "cpa-disc-fsa-d4", examSlug: "cpa-disc", topicId: "bec", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 2,
    stem: "In the DuPont model, the equity multiplier (assets ÷ equity) captures the effect of:",
    choices: ["Profitability", "Efficiency", "Leverage", "Liquidity"],
    answerIndex: 2,
    explanation: "The equity multiplier measures leverage. DuPont decomposes ROE into net profit margin (profitability), asset turnover (efficiency), and the equity multiplier (leverage).",
  },
  {
    id: "cpa-disc-mgr-d1", examSlug: "cpa-disc", topicId: "managerial", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 2,
    stem: "Price $40, variable cost $25, fixed costs $90,000. Breakeven in units is:",
    choices: ["2,250", "3,600", "6,000", "9,000"],
    answerIndex: 2,
    explanation: "Contribution margin = $40 − $25 = $15. Breakeven = fixed costs ÷ CM = $90,000 ÷ $15 = 6,000 units.",
  },
  {
    id: "cpa-disc-mgr-d2", examSlug: "cpa-disc", topicId: "managerial", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 3,
    stem: "Using the same data (CM $15, fixed costs $90,000), units needed for a $30,000 target profit are:",
    choices: ["6,000", "7,000", "8,000", "9,000"],
    answerIndex: 2,
    explanation: "Target units = (fixed costs + target profit) ÷ CM = ($90,000 + $30,000) ÷ $15 = 8,000 units — 2,000 beyond the 6,000-unit breakeven.",
  },
  {
    id: "cpa-disc-mgr-d3", examSlug: "cpa-disc", topicId: "managerial", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 2,
    stem: "Under variable (direct) costing, fixed manufacturing overhead is treated as:",
    choices: ["A product cost capitalized in inventory", "A period cost expensed as incurred", "Part of direct labor", "A selling expense only"],
    answerIndex: 1,
    explanation: "Variable costing expenses fixed manufacturing overhead as a period cost. Absorption costing (required for GAAP) capitalizes it in inventory, causing the two methods to report different income when inventory levels change.",
  },
  {
    id: "cpa-disc-mgr-d4", examSlug: "cpa-disc", topicId: "managerial", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 2,
    stem: "A materials variance caused by paying more per pound than standard (on the quantity actually purchased) is the:",
    choices: ["Quantity (usage) variance", "Price variance", "Efficiency variance", "Volume variance"],
    answerIndex: 1,
    explanation: "The price variance = (actual price − standard price) × actual quantity, isolating the effect of paying a different price than standard. The quantity/usage variance isolates using more or less material than standard.",
  },
  {
    id: "cpa-disc-gov-d1", examSlug: "cpa-disc", topicId: "bec", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 1,
    stem: "Corporate governance primarily exists to address the conflict between:",
    choices: ["Auditors and regulators", "Owners (shareholders) and managers", "Customers and suppliers", "Employees and unions"],
    answerIndex: 1,
    explanation: "Governance addresses the agency problem — the conflict between owners (principals) and managers (agents) who may pursue their own interests. Mechanisms include an independent board, audit committee, and aligned incentives.",
  },
  {
    id: "cpa-disc-gov-d2", examSlug: "cpa-disc", topicId: "bec", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 2,
    stem: "Buying insurance to handle a risk is an example of which risk response?",
    choices: ["Avoid", "Reduce", "Share/transfer", "Accept"],
    answerIndex: 2,
    explanation: "Insurance shares/transfers risk to a third party. The four COSO ERM responses are avoid (exit the activity), reduce (mitigate with controls), share/transfer (insurance, hedging, outsourcing), and accept (retain within risk appetite).",
  },
  {
    id: "cpa-disc-gov-d3", examSlug: "cpa-disc", topicId: "bec", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 3,
    stem: "A report providing assurance over a service organization's controls relevant to its clients' FINANCIAL REPORTING is a:",
    choices: ["SOC 1 report", "SOC 2 report", "SOC 3 report", "Comfort letter"],
    answerIndex: 0,
    explanation: "A SOC 1 report addresses a service organization's controls relevant to user entities' internal control over financial reporting. A SOC 2 addresses the trust services criteria (security, availability, processing integrity, confidentiality, privacy).",
  },
  {
    id: "cpa-disc-gov-d4", examSlug: "cpa-disc", topicId: "bec", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 1,
    stem: "The 'CIA triad' of information security refers to:",
    choices: ["Control, integrity, authorization", "Confidentiality, integrity, availability", "Compliance, internal audit, assurance", "Cost, inventory, accuracy"],
    answerIndex: 1,
    explanation: "The CIA triad is confidentiality (authorized access only), integrity (data accurate and unaltered), and availability (accessible when needed) — the core objectives of information security.",
  },
  {
    id: "cpa-disc-cap-d1", examSlug: "cpa-disc", topicId: "managerial", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 2,
    stem: "A project should be ACCEPTED under the NPV rule when its net present value is:",
    choices: ["Negative", "Zero", "Positive", "Equal to the payback period"],
    answerIndex: 2,
    explanation: "A positive NPV means the project's discounted cash inflows exceed the initial investment — it earns more than the required return and creates value, so it is accepted.",
  },
  {
    id: "cpa-disc-cap-d2", examSlug: "cpa-disc", topicId: "managerial", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 3,
    stem: "A project costs $10,000 and returns $6,000 at the end of years 1 and 2. At a 10% discount rate, the NPV is closest to:",
    choices: ["+$2,000", "+$413", "−$413", "$0"],
    answerIndex: 1,
    explanation: "PV = $6,000/1.10 + $6,000/1.21 = $5,454.55 + $4,958.68 = $10,413.23. NPV = $10,413.23 − $10,000 ≈ +$413, so the project is accepted.",
  },
  {
    id: "cpa-disc-cap-d3", examSlug: "cpa-disc", topicId: "managerial", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 2,
    stem: "The internal rate of return (IRR) is the discount rate at which a project's:",
    choices: ["Payback period equals zero", "NPV equals zero", "Profit is maximized", "WACC is minimized"],
    answerIndex: 1,
    explanation: "The IRR is the discount rate that makes NPV equal zero — the project's built-in rate of return. Accept the project if its IRR exceeds the hurdle (required) rate.",
  },
  {
    id: "cpa-disc-cap-d4", examSlug: "cpa-disc", topicId: "managerial", topicName: "Discipline (BAR / ISC / TCP)", difficulty: 2,
    stem: "A key weakness of the payback period method is that it:",
    choices: ["Is too complex to compute", "Ignores the time value of money and cash flows after payback", "Requires the IRR first", "Always rejects good projects"],
    answerIndex: 1,
    explanation: "The payback period measures only how fast the initial investment is recovered in undiscounted cash; it ignores the time value of money and any cash flows occurring after the payback point. NPV and IRR correct for the time value of money.",
  },
];
