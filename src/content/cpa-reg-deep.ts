// ============================================================
// Certus — CPA REG (Taxation & Regulation) textbook-depth content
// Four deep, exam-focused readings + aligned questions for the REG core
// section. Wired into cpaRegContent (cpa-reg track) ahead of the lighter
// chapters, at the same depth as the FAR/AUD deep sets.
// ============================================================

import { Chapter, Question } from "./types";

export const regDeepChapters: Chapter[] = [
  {
    id: "cpa-reg-individual-deep",
    examSlug: "cpa-reg",
    topicId: "tax-individual",
    topicName: "Taxation & Regulation",
    title: "Individual Taxation: The 1040 from Gross Income to Tax Due",
    readingMinutes: 60,
    summary:
      "How an individual return is built — the flow from gross income through adjustments to AGI, the standard-versus-itemized deduction choice, taxable income and the tax, and how credits differ from deductions, plus the marginal-versus-effective rate distinction.",
    intro:
      "Individual taxation is the largest slice of REG, and it follows a strict SEQUENCE on Form 1040: gross income, minus adjustments to reach ADJUSTED GROSS INCOME (AGI), minus the greater of the standard or itemized deductions to reach TAXABLE INCOME, times the rates to get the tax, minus CREDITS to get tax due. Master that flow and the difference between a deduction and a credit, and most individual-tax questions resolve cleanly.",
    sections: [
      {
        heading: "1. Gross income and exclusions",
        blocks: [
          { kind: "p", text: "GROSS INCOME is all income from whatever source derived unless specifically excluded — wages, interest, dividends, business income, rents, and capital gains. Certain items are EXCLUDED by statute: MUNICIPAL bond interest, GIFTS and inheritances (to the recipient), LIFE INSURANCE proceeds paid on death, and qualifying scholarships. Some income is taxed at PREFERENTIAL rates: qualified dividends and LONG-TERM capital gains (assets held more than one year) get lower rates, while SHORT-TERM gains are taxed as ordinary income." },
        ],
      },
      {
        heading: "2. From gross income to taxable income",
        blocks: [
          { kind: "p", text: "ADJUSTMENTS (above-the-line deductions) reduce gross income to AGI and include items like deductible IRA and HSA contributions, student loan interest, and the deductible portion of self-employment tax. AGI is a pivotal number because many limits key off it. From AGI, the taxpayer subtracts the GREATER of the STANDARD DEDUCTION (a fixed amount by filing status) or ITEMIZED DEDUCTIONS — state and local taxes (capped at $10,000), home mortgage interest, charitable contributions, and medical expenses exceeding 7.5% of AGI. The result is TAXABLE INCOME, to which the bracketed rates apply." },
          { kind: "formula", formula: { label: "The 1040 flow", expr: "Gross income − Adjustments = AGI − (Standard or Itemized) = Taxable income → Tax − Credits = Tax due", note: "AGI drives many phaseouts and limits; the taxpayer takes the LARGER of the standard or itemized deductions." } },
        ],
      },
      {
        heading: "3. Deductions vs credits and the rate distinction",
        blocks: [
          { kind: "p", text: "A DEDUCTION reduces TAXABLE INCOME, so its value equals the deduction times the taxpayer's marginal rate. A CREDIT reduces the TAX itself dollar-for-dollar, so it is generally more valuable. Credits may be NONREFUNDABLE (can reduce tax only to zero) or REFUNDABLE (can generate a refund beyond tax owed). The MARGINAL rate is the rate on the next dollar of income (the top bracket reached); the EFFECTIVE rate is total tax divided by taxable income and is always LOWER than the marginal rate in a progressive system, because lower brackets tax earlier dollars at lower rates." },
          { kind: "example", example: { title: "Marginal vs effective rate", prompt: "Using simplified brackets — 10% on the first $20,000 and 22% above — what tax does $70,000 of taxable income owe, and what are the marginal and effective rates?", steps: ["First $20,000 × 10% = $2,000.", "Remaining $50,000 × 22% = $11,000.", "Total tax = $13,000. Marginal rate = 22% (the top bracket reached).", "Effective rate = $13,000 ÷ $70,000 = 18.6%."], answer: "Tax $13,000; marginal rate 22%, effective rate ≈ 18.6%. The effective rate is always below the marginal rate because earlier dollars are taxed in lower brackets." } },
        ],
      },
      {
        heading: "4. Synthesis",
        blocks: [
          { kind: "p", text: "Individual tax reduces to a disciplined sequence: identify gross income (and exclude muni interest, gifts, life insurance, and scholarships), subtract adjustments to reach AGI, subtract the greater of the standard or itemized deductions to reach taxable income, apply the bracketed rates, and subtract credits. Remember that a credit beats a deduction of the same size (dollar-for-dollar vs marginal-rate value), and that long-term capital gains and qualified dividends enjoy preferential rates. Over-learn the 1040 flow and the deduction-versus-credit distinction." },
        ],
      },
    ],
    keyTerms: [
      { term: "Gross income", def: "All income from any source unless specifically excluded." },
      { term: "Exclusions", def: "Muni interest, gifts/inheritances, life insurance proceeds, qualifying scholarships." },
      { term: "Adjustments (above-the-line)", def: "IRA/HSA, student loan interest, self-employment tax deduction; reduce gross income to AGI." },
      { term: "Adjusted gross income (AGI)", def: "Pivotal subtotal that drives many phaseouts and limits." },
      { term: "Standard vs itemized", def: "Take the greater; itemized includes SALT (capped $10k), mortgage interest, charity, medical >7.5% AGI." },
      { term: "Taxable income", def: "AGI minus the greater of standard or itemized deductions." },
      { term: "Deduction", def: "Reduces taxable income; worth the deduction × marginal rate." },
      { term: "Credit", def: "Reduces tax dollar-for-dollar; refundable or nonrefundable." },
      { term: "Marginal rate", def: "Rate on the next dollar of income (top bracket reached)." },
      { term: "Effective rate", def: "Total tax ÷ taxable income; always below the marginal rate in a progressive system." },
      { term: "Long-term capital gain", def: "Asset held over one year; preferential rate (short-term is ordinary)." },
    ],
    takeaways: [
      "The 1040 flows: gross income − adjustments = AGI − (greater of standard or itemized) = taxable income → tax − credits = tax due.",
      "Gross income includes nearly everything; key exclusions are municipal interest, gifts/inheritances, life insurance proceeds, and qualifying scholarships.",
      "Itemized deductions include SALT (capped at $10,000), mortgage interest, charity, and medical above 7.5% of AGI; take the greater of standard or itemized.",
      "A credit reduces tax dollar-for-dollar and generally beats a deduction (worth only the deduction × marginal rate); credits may be refundable or nonrefundable.",
      "The marginal rate is on the next dollar; the effective rate (total tax ÷ taxable income) is always lower in a progressive system.",
      "Long-term capital gains and qualified dividends are taxed at preferential rates; short-term gains are ordinary income.",
    ],
  },

  {
    id: "cpa-reg-entities-deep",
    examSlug: "cpa-reg",
    topicId: "tax-entities",
    topicName: "Taxation & Regulation",
    title: "Taxation of Corporations, Partnerships, and S Corporations",
    readingMinutes: 58,
    summary:
      "How business entities are taxed — the double taxation of C corporations, the pass-through treatment of partnerships and S corporations, the basis rules that track an owner's investment, and the eligibility limits that distinguish the forms.",
    intro:
      "Entity taxation turns on one question: is the entity a SEPARATE taxpayer or a PASS-THROUGH? C CORPORATIONS pay their own tax and create double taxation; PARTNERSHIPS and S CORPORATIONS pass income through to owners, who pay tax on their share. The exam tests the double-tax arithmetic, the pass-through basis rules, and the S-corporation eligibility requirements.",
    sections: [
      {
        heading: "1. C corporations and double taxation",
        blocks: [
          { kind: "p", text: "A C CORPORATION is a separate taxable entity that pays a FLAT 21% federal tax on its taxable income. When it distributes after-tax profits as DIVIDENDS, shareholders are taxed AGAIN on those dividends — the classic DOUBLE TAXATION. This contrasts with pass-through entities, where income is taxed only once at the owner level. C-corp losses stay at the entity (they don't pass to shareholders), and the corporation files Form 1120." },
          { kind: "example", example: { title: "The cost of double taxation", prompt: "A C corporation earns $100 of pre-tax profit, pays 21% corporate tax, then distributes the rest as a dividend taxed at 15%. What is the total tax and combined effective rate?", steps: ["Corporate tax = 21% × $100 = $21; after-tax profit = $79.", "Dividend tax = 15% × $79 = $11.85.", "Total tax = $21 + $11.85 = $32.85 on the original $100."], answer: "≈ 32.85% combined — well above the single layer of tax a pass-through owner would pay. That drag is the core disadvantage of the C-corp form." } },
        ],
      },
      {
        heading: "2. Partnerships",
        blocks: [
          { kind: "p", text: "A PARTNERSHIP is a PASS-THROUGH: it pays no entity-level tax but files an information return (Form 1065) and issues each partner a Schedule K-1 reporting their DISTRIBUTIVE SHARE of income, deductions, and credits, which the partner reports regardless of whether cash is distributed. A partner's BASIS tracks their investment and limits the losses they can deduct: basis starts with contributions, INCREASES by the partner's share of income (and additional contributions and the share of partnership liabilities), and DECREASES by distributions and the share of losses. GUARANTEED PAYMENTS (for services or capital, regardless of income) are deductible by the partnership and ordinary income to the partner." },
          { kind: "example", example: { title: "A partner's ending basis", prompt: "A partner contributes $50,000, is allocated $20,000 of income, and receives a $15,000 cash distribution. What is the partner's ending basis?", steps: ["Start with the $50,000 contribution.", "Add the allocated income: +$20,000 → $70,000.", "Subtract the distribution: −$15,000."], answer: "$55,000. Income increases basis; distributions reduce it. The partner is taxed on the full $20,000 of allocated income even though only $15,000 of cash was distributed." } },
        ],
      },
      {
        heading: "3. S corporations",
        blocks: [
          { kind: "p", text: "An S CORPORATION is a corporation that ELECTS pass-through taxation, combining a corporation's liability shield with single-level taxation. To qualify, it must meet strict ELIGIBILITY limits: no more than 100 shareholders, only ONE CLASS OF STOCK, and shareholders limited to US individuals, certain trusts, and estates (no corporate or partnership shareholders, and no nonresident aliens). Income passes through to shareholders pro rata by ownership (unlike partnerships, special allocations aren't allowed), and shareholder BASIS works like a partner's — increased by income, decreased by distributions and losses — but, importantly, S-corp shareholders generally do NOT include entity-level debt in their stock basis the way partners include partnership liabilities." },
        ],
      },
      {
        heading: "4. Synthesis",
        blocks: [
          { kind: "p", text: "The dividing line is entity-level taxation. A C corporation pays 21% and its dividends are taxed again (double taxation), with losses trapped at the entity. Partnerships and S corporations pass income through to owners — taxed once, whether or not distributed — with owner BASIS tracking the investment and limiting deductible losses (basis up for income, down for distributions and losses). S corporations add eligibility limits (≤100 shareholders, one class of stock, eligible US owners) and pro-rata allocations. Over-learn the double-tax computation, the basis formula, and the S-corp eligibility rules." },
        ],
      },
    ],
    keyTerms: [
      { term: "C corporation", def: "Separate taxpayer at a flat 21%; dividends taxed again (double taxation)." },
      { term: "Double taxation", def: "Corporate profit taxed at the entity, then dividends taxed to shareholders." },
      { term: "Pass-through entity", def: "Partnership or S corp; no entity tax, income taxed at the owner level." },
      { term: "Distributive share", def: "A partner's allocated income, taxed whether or not cash is distributed." },
      { term: "Partner basis", def: "Contributions + income (+ liabilities share) − distributions − losses; limits deductible losses." },
      { term: "Guaranteed payments", def: "Payments to a partner regardless of income; deductible to the partnership, ordinary income to the partner." },
      { term: "S corporation election", def: "Corporation electing pass-through taxation with a liability shield." },
      { term: "S-corp eligibility", def: "≤100 shareholders, one class of stock, eligible US individual/trust/estate owners." },
      { term: "Pro-rata allocation", def: "S-corp income passes by ownership percentage; no special allocations." },
      { term: "S-corp basis and debt", def: "Like a partner's, but shareholders generally don't add entity debt to stock basis." },
    ],
    takeaways: [
      "A C corporation pays a flat 21% and its dividends are taxed again to shareholders — double taxation — while losses remain trapped at the entity.",
      "Partnerships and S corporations are pass-throughs: income is taxed once at the owner level, whether or not it is distributed.",
      "A partner's basis = contributions + share of income (+ liabilities) − distributions − losses, and it limits deductible losses.",
      "Partners are taxed on their full distributive share even if less cash is distributed; guaranteed payments are deductible to the partnership and ordinary income to the partner.",
      "An S corporation must have no more than 100 shareholders, one class of stock, and only eligible US individual/trust/estate owners, with pro-rata allocations.",
      "S-corp shareholder basis works like a partner's but generally excludes entity-level debt from stock basis.",
    ],
  },

  {
    id: "cpa-reg-buslaw-deep",
    examSlug: "cpa-reg",
    topicId: "business-law",
    topicName: "Taxation & Regulation",
    title: "Business Law: Contracts, Agency, and the UCC",
    readingMinutes: 56,
    summary:
      "The legal framework underlying commerce — contract formation and the statute of frauds, the UCC's special rules for the sale of goods, agency relationships and authority, and the duties that bind agents and principals.",
    intro:
      "REG includes business law, and the most-tested areas are CONTRACTS (formation and enforceability), the UNIFORM COMMERCIAL CODE (UCC) rules for sales of goods, and AGENCY. These are rule-driven topics where the exam rewards knowing the elements and the bright-line thresholds — especially what must be in writing under the statute of frauds.",
    sections: [
      {
        heading: "1. Contract formation",
        blocks: [
          { kind: "p", text: "A valid contract requires several ELEMENTS: a valid OFFER, ACCEPTANCE of that offer, CONSIDERATION (a bargained-for exchange of value on both sides), CAPACITY of the parties (not minors or mentally incapacitated), and a LEGAL purpose. If any element is missing, the agreement may be void, voidable, or unenforceable. Acceptance generally must mirror the offer (the 'mirror image' rule under common law), and consideration distinguishes an enforceable contract from a mere promise of a gift." },
        ],
      },
      {
        heading: "2. The statute of frauds",
        blocks: [
          { kind: "p", text: "The STATUTE OF FRAUDS requires certain contracts to be IN WRITING (signed by the party to be charged) to be enforceable. The classic categories are remembered by the mnemonic 'MY LEGS': MARRIAGE (contracts in consideration of marriage), YEAR (contracts that cannot be performed within one year), LAND (interests in real estate), EXECUTOR (a personal promise to pay a decedent's debts), GOODS of $500 or more (under the UCC), and SURETY (a promise to answer for another's debt). A contract within the statute but not in writing is generally unenforceable, though exceptions exist (e.g., part performance, specially manufactured goods)." },
          { kind: "example", example: { title: "Does the statute of frauds apply?", prompt: "A company orally agrees to buy machinery for $20,000. Is the contract enforceable under the statute of frauds?", steps: ["Machinery is GOODS, governed by UCC Article 2.", "The price ($20,000) is $500 or more, so the UCC statute of frauds applies.", "An oral contract for goods of $500 or more is generally unenforceable; it should be in writing."], answer: "Generally NOT enforceable as an oral contract — goods of $500 or more fall under the statute of frauds and must be evidenced in writing (subject to exceptions like part performance or specially manufactured goods)." } },
        ],
      },
      {
        heading: "3. The UCC and sale of goods",
        blocks: [
          { kind: "p", text: "ARTICLE 2 of the UCC governs the SALE OF GOODS (movable, tangible personal property) and relaxes some common-law rules to facilitate commerce. It applies special rules for MERCHANTS (those who regularly deal in the goods), allows a contract to form even with some open terms, and softens the mirror-image rule (an acceptance with additional terms can still form a contract). It addresses RISK OF LOSS (which depends on the shipping terms and who breached), and WARRANTIES — the implied warranty of MERCHANTABILITY (goods are fit for ordinary purposes, given automatically by a merchant) and the implied warranty of FITNESS for a particular purpose (when the seller knows the buyer's special purpose and the buyer relies on the seller's expertise)." },
        ],
      },
      {
        heading: "4. Agency",
        blocks: [
          { kind: "p", text: "AGENCY is a relationship where an AGENT acts on behalf of a PRINCIPAL. The agent can bind the principal through AUTHORITY: ACTUAL authority (express or implied, granted by the principal) or APPARENT authority (created when the principal's conduct leads a third party to reasonably believe the agent is authorized, even without actual authority). Agents owe the principal FIDUCIARY duties — loyalty, obedience, and due care — and a duty to account; principals owe agents compensation, reimbursement, and indemnification. The chapter's core: contracts need offer, acceptance, consideration, capacity, and legality; the statute of frauds ('MY LEGS') requires writings for land, year-plus contracts, goods of $500+, and others; UCC Article 2 governs goods with merchant rules and merchantability/fitness warranties; and agency lets an agent bind a principal via actual or apparent authority subject to fiduciary duties. Over-learn the contract elements and the statute-of-frauds categories." },
        ],
      },
    ],
    keyTerms: [
      { term: "Contract elements", def: "Offer, acceptance, consideration, capacity, and legal purpose." },
      { term: "Consideration", def: "Bargained-for exchange of value distinguishing a contract from a gift promise." },
      { term: "Mirror-image rule", def: "Common-law acceptance must match the offer (relaxed under the UCC)." },
      { term: "Statute of frauds", def: "Certain contracts must be in writing to be enforceable ('MY LEGS')." },
      { term: "Goods $500+ rule", def: "A UCC sale of goods for $500 or more must be in writing." },
      { term: "UCC Article 2", def: "Governs sales of goods (movable tangible property); special merchant rules." },
      { term: "Implied warranty of merchantability", def: "Goods are fit for ordinary purposes; given automatically by a merchant." },
      { term: "Implied warranty of fitness", def: "Arises when the seller knows the buyer's purpose and the buyer relies on the seller." },
      { term: "Actual authority", def: "Express or implied authority the principal grants the agent." },
      { term: "Apparent authority", def: "Authority a third party reasonably believes exists from the principal's conduct." },
      { term: "Fiduciary duties (agent)", def: "Loyalty, obedience, due care, and a duty to account to the principal." },
    ],
    takeaways: [
      "A valid contract requires offer, acceptance, consideration, capacity, and a legal purpose.",
      "The statute of frauds ('MY LEGS') requires writings for marriage, year-plus, land, executor, goods of $500+, and surety contracts.",
      "An oral contract for goods of $500 or more is generally unenforceable under the UCC statute of frauds.",
      "UCC Article 2 governs the sale of goods with relaxed rules, special merchant provisions, and implied warranties of merchantability and fitness.",
      "Agency lets an agent bind a principal through actual (express/implied) or apparent authority.",
      "Agents owe fiduciary duties of loyalty, obedience, and due care to the principal.",
    ],
  },

  {
    id: "cpa-reg-ethics-deep",
    examSlug: "cpa-reg",
    topicId: "reg",
    topicName: "Taxation & Regulation",
    title: "Ethics, Professional Responsibilities, and Federal Tax Procedures",
    readingMinutes: 54,
    summary:
      "The rules governing tax practice — Circular 230 and practice before the IRS, the standards for taking and disclosing tax positions, preparer and taxpayer penalties, and the statute of limitations on assessment.",
    intro:
      "REG tests the ethics and procedure that govern tax practitioners. CIRCULAR 230 sets the rules for practice before the IRS; a hierarchy of POSITION STANDARDS dictates when a position can be taken or must be disclosed; and PENALTIES and the STATUTE OF LIMITATIONS structure the consequences and time limits. These are precise, threshold-driven rules.",
    sections: [
      {
        heading: "1. Circular 230 and practice before the IRS",
        blocks: [
          { kind: "p", text: "CIRCULAR 230 (Treasury rules) governs who may PRACTICE BEFORE THE IRS — CPAs, attorneys, enrolled agents, and others — and how they must conduct themselves: with due diligence, without conflicts of interest, charging no unconscionable fees, and (generally) no contingent fees for preparing original returns. Practitioners must exercise due diligence as to the accuracy of representations, promptly submit records, and not unreasonably delay IRS matters. Violations can lead to censure, suspension, or disbarment from practice before the IRS. The AICPA's STATEMENTS ON STANDARDS FOR TAX SERVICES (SSTS) add professional standards for CPAs in tax practice." },
        ],
      },
      {
        heading: "2. Standards for tax positions",
        blocks: [
          { kind: "p", text: "Whether a tax position may be taken — and whether it must be DISCLOSED — depends on its level of support. From lowest to highest confidence: a position with a REASONABLE BASIS (roughly a 20%+ chance, the minimum to avoid some penalties if disclosed); SUBSTANTIAL AUTHORITY (around a 40% chance, sufficient to take an undisclosed position on most items); and MORE LIKELY THAN NOT (greater than 50%, required for tax-shelter and reportable-transaction items). If a position lacks substantial authority, it generally must be DISCLOSED (e.g., on Form 8275) to avoid preparer and taxpayer penalties. These thresholds drive both the practitioner's duty and the exposure to penalties." },
          { kind: "table", table: { caption: "Tax-position confidence standards", headers: ["Standard", "Approx. likelihood", "Use"], rows: [["Reasonable basis", "~20%+", "Minimum if disclosed"], ["Substantial authority", "~40%", "Undisclosed position (most items)"], ["More likely than not", ">50%", "Tax shelters / reportable transactions"]] } },
        ],
      },
      {
        heading: "3. Penalties",
        blocks: [
          { kind: "p", text: "Both PREPARERS and TAXPAYERS face penalties. PREPARER penalties apply for unreasonable positions (lacking substantial authority or, if disclosed, reasonable basis), willful or reckless conduct, failure to sign or furnish a copy, and failure to exercise due diligence (e.g., on the earned income credit). TAXPAYER penalties include the ACCURACY-RELATED penalty (commonly 20%) for negligence or a substantial understatement, and the much larger CIVIL FRAUD penalty (75% of the underpayment attributable to fraud). Reasonable cause and good faith can abate some penalties, but not fraud." },
        ],
      },
      {
        heading: "4. Statute of limitations and procedure",
        blocks: [
          { kind: "p", text: "The STATUTE OF LIMITATIONS limits how long the IRS has to ASSESS additional tax. The GENERAL period is THREE YEARS from the later of the due date or the filing date. It extends to SIX YEARS if the taxpayer omits more than 25% of gross income. There is NO limit (the statute stays open indefinitely) for a FRAUDULENT return or a failure to file at all. Procedurally, a taxpayer who disagrees with an audit can pursue IRS APPEALS and ultimately the courts (Tax Court, which allows litigation without first paying the tax). The chapter's core: Circular 230 governs practice before the IRS; tax positions require reasonable basis, substantial authority, or more-likely-than-not support (with disclosure filling the gap); preparer and taxpayer penalties (20% accuracy, 75% fraud) enforce accuracy; and the assessment statute of limitations runs three years generally, six for a >25% income omission, and unlimited for fraud or non-filing. Over-learn the position standards and the statute-of-limitations periods." },
        ],
      },
    ],
    keyTerms: [
      { term: "Circular 230", def: "Treasury rules governing practice before the IRS and practitioner conduct." },
      { term: "Practice before the IRS", def: "Representing taxpayers; open to CPAs, attorneys, and enrolled agents." },
      { term: "SSTS", def: "AICPA Statements on Standards for Tax Services for CPAs in tax practice." },
      { term: "Reasonable basis", def: "~20%+ support; minimum standard if the position is disclosed." },
      { term: "Substantial authority", def: "~40% support; enough to take an undisclosed position on most items." },
      { term: "More likely than not", def: ">50% support; required for tax-shelter/reportable transactions." },
      { term: "Disclosure (Form 8275)", def: "Discloses a position lacking substantial authority to avoid penalties." },
      { term: "Preparer penalties", def: "For unreasonable positions, willful/reckless conduct, failure to sign, due-diligence lapses." },
      { term: "Accuracy-related penalty", def: "Commonly 20% for negligence or substantial understatement." },
      { term: "Civil fraud penalty", def: "75% of the underpayment attributable to fraud." },
      { term: "Statute of limitations", def: "3 years generally; 6 years if >25% income omitted; unlimited for fraud or non-filing." },
    ],
    takeaways: [
      "Circular 230 governs practice before the IRS; violations can lead to censure, suspension, or disbarment, and the AICPA SSTS add CPA tax standards.",
      "Tax-position confidence rises from reasonable basis (~20%, if disclosed) to substantial authority (~40%, undisclosed on most items) to more likely than not (>50%, for shelters).",
      "A position lacking substantial authority generally must be disclosed (Form 8275) to avoid preparer and taxpayer penalties.",
      "Preparer penalties target unreasonable positions and conduct; taxpayer penalties include a 20% accuracy-related penalty and a 75% civil fraud penalty.",
      "The assessment statute of limitations is three years generally, six years if more than 25% of gross income is omitted, and unlimited for fraud or failure to file.",
      "A disputing taxpayer can pursue IRS Appeals and the Tax Court (which permits litigation before paying the tax).",
    ],
  },
];

export const regDeepQuestions: Question[] = [
  {
    id: "cpa-reg-in-d1", examSlug: "cpa-reg", topicId: "tax-individual", topicName: "Taxation & Regulation", difficulty: 1,
    stem: "Which item is EXCLUDED from gross income?",
    choices: ["Wages", "Municipal bond interest", "Business income", "Short-term capital gains"],
    answerIndex: 1,
    explanation: "Municipal bond interest is excluded from federal gross income. Wages, business income, and capital gains are all included (short-term gains are taxed as ordinary income).",
  },
  {
    id: "cpa-reg-in-d2", examSlug: "cpa-reg", topicId: "tax-individual", topicName: "Taxation & Regulation", difficulty: 3,
    stem: "Using simplified brackets (10% on the first $20,000, 22% above), the tax on $70,000 of taxable income is:",
    choices: ["$13,000", "$15,400", "$7,000", "$11,000"],
    answerIndex: 0,
    explanation: "First $20,000 × 10% = $2,000; remaining $50,000 × 22% = $11,000; total = $13,000. The marginal rate is 22% but the effective rate is $13,000 ÷ $70,000 ≈ 18.6%.",
  },
  {
    id: "cpa-reg-in-d3", examSlug: "cpa-reg", topicId: "tax-individual", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "Compared with a $1,000 deduction, a $1,000 tax CREDIT for a taxpayer in the 22% bracket is worth:",
    choices: ["Less", "The same", "More — it reduces tax dollar-for-dollar ($1,000 vs $220)", "Nothing"],
    answerIndex: 2,
    explanation: "A credit reduces tax dollar-for-dollar ($1,000), while a $1,000 deduction reduces taxable income, saving only $1,000 × 22% = $220. Credits are generally more valuable than deductions of the same size.",
  },
  {
    id: "cpa-reg-in-d4", examSlug: "cpa-reg", topicId: "tax-individual", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "The itemized deduction for state and local taxes (SALT) is capped at:",
    choices: ["$5,000", "$10,000", "$25,000", "Unlimited"],
    answerIndex: 1,
    explanation: "The SALT itemized deduction is capped at $10,000. Other itemized deductions include mortgage interest, charitable contributions, and medical expenses above 7.5% of AGI; a taxpayer takes the greater of itemized or the standard deduction.",
  },
  {
    id: "cpa-reg-en-d1", examSlug: "cpa-reg", topicId: "tax-entities", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "A C corporation earns $100, pays 21% corporate tax, and distributes the rest as a dividend taxed at 15%. The total tax is closest to:",
    choices: ["$21.00", "$32.85", "$15.00", "$36.00"],
    answerIndex: 1,
    explanation: "Corporate tax = $21; after-tax = $79; dividend tax = 15% × $79 = $11.85; total = $32.85 (≈32.85% combined). This double taxation is the C-corp's core disadvantage versus a pass-through.",
  },
  {
    id: "cpa-reg-en-d2", examSlug: "cpa-reg", topicId: "tax-entities", topicName: "Taxation & Regulation", difficulty: 3,
    stem: "A partner contributes $50,000, is allocated $20,000 of income, and receives a $15,000 distribution. Ending basis is:",
    choices: ["$50,000", "$55,000", "$70,000", "$35,000"],
    answerIndex: 1,
    explanation: "Basis = $50,000 contribution + $20,000 income − $15,000 distribution = $55,000. Income increases basis; distributions decrease it. The partner is taxed on the full $20,000 even though only $15,000 of cash was distributed.",
  },
  {
    id: "cpa-reg-en-d3", examSlug: "cpa-reg", topicId: "tax-entities", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "Which is an eligibility requirement for S corporation status?",
    choices: ["At least 500 shareholders", "More than one class of stock", "No more than 100 shareholders and one class of stock", "Corporate shareholders allowed"],
    answerIndex: 2,
    explanation: "An S corp may have no more than 100 shareholders and only one class of stock, with owners limited to eligible US individuals, certain trusts, and estates — no corporate or partnership shareholders and no nonresident aliens.",
  },
  {
    id: "cpa-reg-en-d4", examSlug: "cpa-reg", topicId: "tax-entities", topicName: "Taxation & Regulation", difficulty: 1,
    stem: "A partnership pays federal income tax at the entity level of:",
    choices: ["21%", "37%", "Zero — it is a pass-through", "15%"],
    answerIndex: 2,
    explanation: "A partnership pays no entity-level federal income tax; it is a pass-through that files an information return (Form 1065) and passes income through to partners via Schedule K-1, who are taxed on their distributive shares.",
  },
  {
    id: "cpa-reg-bl-d1", examSlug: "cpa-reg", topicId: "business-law", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "Which element is REQUIRED to form a valid contract?",
    choices: ["A notarized signature", "Consideration (a bargained-for exchange)", "A written document in all cases", "Government approval"],
    answerIndex: 1,
    explanation: "Consideration — a bargained-for exchange of value — is a required element, along with offer, acceptance, capacity, and legal purpose. Most contracts need not be in writing (the statute of frauds covers only specific categories).",
  },
  {
    id: "cpa-reg-bl-d2", examSlug: "cpa-reg", topicId: "business-law", topicName: "Taxation & Regulation", difficulty: 3,
    stem: "Under the UCC statute of frauds, a contract for the sale of goods must be in writing when the price is at least:",
    choices: ["$100", "$500", "$5,000", "Any amount"],
    answerIndex: 1,
    explanation: "Under UCC Article 2, a sale of goods for $500 or more must be evidenced by a writing to be enforceable (subject to exceptions like part performance or specially manufactured goods).",
  },
  {
    id: "cpa-reg-bl-d3", examSlug: "cpa-reg", topicId: "business-law", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "Authority that arises when a principal's conduct leads a third party to reasonably believe an agent is authorized is:",
    choices: ["Express actual authority", "Implied actual authority", "Apparent authority", "Ratified authority"],
    answerIndex: 2,
    explanation: "Apparent authority is created by the principal's conduct toward third parties, even without actual authority granted to the agent. Actual authority (express or implied) is granted directly by the principal to the agent.",
  },
  {
    id: "cpa-reg-bl-d4", examSlug: "cpa-reg", topicId: "business-law", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "The implied warranty that goods are fit for their ordinary purpose, given automatically by a merchant seller, is the warranty of:",
    choices: ["Fitness for a particular purpose", "Merchantability", "Title", "Express warranty"],
    answerIndex: 1,
    explanation: "The implied warranty of merchantability arises automatically when a merchant sells goods — they must be fit for ordinary purposes. The warranty of fitness for a particular purpose arises only when the seller knows the buyer's special purpose and the buyer relies on the seller's expertise.",
  },
  {
    id: "cpa-reg-et-d1", examSlug: "cpa-reg", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 2,
    stem: "The Treasury rules governing who may practice before the IRS and how they must conduct themselves are found in:",
    choices: ["The Sarbanes-Oxley Act", "Circular 230", "ASC 606", "The UCC"],
    answerIndex: 1,
    explanation: "Circular 230 governs practice before the IRS by CPAs, attorneys, enrolled agents, and others, addressing due diligence, conflicts, fees, and discipline (censure, suspension, disbarment).",
  },
  {
    id: "cpa-reg-et-d2", examSlug: "cpa-reg", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 3,
    stem: "The standard generally required to take an UNDISCLOSED tax position on most items is:",
    choices: ["Reasonable basis (~20%)", "Substantial authority (~40%)", "More likely than not (>50%)", "Beyond a reasonable doubt"],
    answerIndex: 1,
    explanation: "Substantial authority (roughly a 40% likelihood) is generally required to take an undisclosed position on most items. Reasonable basis (~20%) suffices only if the position is disclosed; more likely than not (>50%) is required for tax shelters and reportable transactions.",
  },
  {
    id: "cpa-reg-et-d3", examSlug: "cpa-reg", topicId: "reg", topicName: "Taxation & Regulation", difficulty: 3,
    stem: "The general statute of limitations for the IRS to assess additional tax is three years, but it extends to SIX years when:",
    choices: ["The taxpayer files late", "The taxpayer omits more than 25% of gross income", "The return shows a refund", "The taxpayer is audited"],
    answerIndex: 1,
    explanation: "Omitting more than 25% of gross income extends the assessment period to six years. The statute is unlimited for a fraudulent return or a failure to file; otherwise the general period is three years.",
  },
];
