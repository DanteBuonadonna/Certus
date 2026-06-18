// ============================================================
// Certus — CPA AUD (Auditing & Attestation) textbook-depth content
// Four deep, exam-focused readings + aligned questions for the AUD core
// section. Wired into cpaAudContent (cpa-aud track) ahead of the lighter
// chapters, at the same depth as the FAR deep set.
// ============================================================

import { Chapter, Question } from "./types";

export const audDeepChapters: Chapter[] = [
  {
    id: "cpa-aud-process-deep",
    examSlug: "cpa-aud",
    topicId: "aud",
    topicName: "Auditing & Attestation",
    title: "The Audit Process: Risk, Materiality, and Evidence",
    readingMinutes: 58,
    summary:
      "The engine of every audit — the objective of reasonable assurance, the audit risk model and how detection risk responds to risk of material misstatement, materiality, the management assertions, and what makes audit evidence sufficient and appropriate.",
    intro:
      "An audit provides REASONABLE (not absolute) assurance that the financial statements are free of material misstatement, expressed through an opinion. To deliver that efficiently, the auditor manages AUDIT RISK with a formal model, sets MATERIALITY, tests management's ASSERTIONS, and gathers EVIDENCE that is both sufficient and appropriate. This reading builds those foundations — the risk model is the single most-tested concept in AUD, so internalize how detection risk moves opposite the risk of material misstatement.",
    sections: [
      {
        heading: "1. The objective and reasonable assurance",
        blocks: [
          { kind: "p", text: "The objective of a financial-statement audit is to obtain REASONABLE ASSURANCE about whether the statements as a whole are free of MATERIAL MISSTATEMENT (whether due to fraud or error) and to express an OPINION on them. Reasonable assurance is a HIGH but not absolute level of assurance — an audit cannot guarantee the statements are perfect, because of sampling, the nature of evidence, and the possibility of concealed fraud. Management is responsible for preparing the statements and maintaining internal control; the auditor is responsible for forming and expressing the opinion with PROFESSIONAL SKEPTICISM and professional judgment." },
        ],
      },
      {
        heading: "2. The audit risk model",
        blocks: [
          { kind: "p", text: "AUDIT RISK is the risk the auditor expresses an unmodified (clean) opinion when the statements are materially misstated. It decomposes into three components. INHERENT RISK (IR) is the susceptibility of an assertion to misstatement before considering controls. CONTROL RISK (CR) is the risk a misstatement won't be prevented or detected by internal control. DETECTION RISK (DR) is the risk the auditor's own procedures fail to catch a misstatement. The first two combine into the RISK OF MATERIAL MISSTATEMENT (RMM = IR × CR), which exists independent of the audit; the auditor controls only detection risk." },
          { kind: "formula", formula: { label: "The audit risk model", expr: "Audit risk = Inherent risk × Control risk × Detection risk     (RMM = IR × CR)", note: "The auditor sets detection risk INVERSELY to the assessed RMM: high RMM → low acceptable DR → more (and more effective) substantive testing." } },
          { kind: "example", example: { title: "Setting detection risk", prompt: "An auditor assesses both inherent risk and control risk as HIGH for a client's revenue. To keep audit risk acceptably low, how should detection risk be set, and what does that mean for testing?", steps: ["RMM = inherent risk × control risk = high × high = high.", "To hold audit risk low, detection risk must be set LOW (it moves inversely to RMM).", "Low detection risk requires MORE persuasive evidence — larger samples, more effective procedures, and testing nearer year-end."], answer: "Detection risk must be set low, so the auditor performs more extensive, more effective substantive procedures. When controls are weak (high CR), the auditor cannot rely on them and shifts toward substantive testing." } },
        ],
      },
      {
        heading: "3. Materiality and assertions",
        blocks: [
          { kind: "p", text: "MATERIALITY is the threshold above which a misstatement could influence users' decisions. The auditor sets OVERALL (planning) materiality for the statements as a whole and PERFORMANCE materiality (lower, to allow for undetected misstatements) at the account/assertion level. Audit work targets management's ASSERTIONS embedded in the statements — for transactions and balances these include EXISTENCE/OCCURRENCE, COMPLETENESS, RIGHTS AND OBLIGATIONS, VALUATION/ALLOCATION (accuracy), CUTOFF, and PRESENTATION AND DISCLOSURE. Each audit procedure is designed to test a specific assertion (e.g., confirming receivables tests existence; tracing shipping documents to the sales journal tests completeness)." },
        ],
      },
      {
        heading: "4. Audit evidence",
        blocks: [
          { kind: "p", text: "To support the opinion, the auditor gathers SUFFICIENT (enough quantity) and APPROPRIATE (quality) audit evidence. Appropriateness combines RELEVANCE (does it address the assertion?) and RELIABILITY (can it be trusted?). Reliability follows a hierarchy: evidence from EXTERNAL independent sources is more reliable than internal; evidence obtained DIRECTLY by the auditor is more reliable than from the entity; evidence under strong internal control is more reliable; WRITTEN beats oral; and ORIGINAL documents beat photocopies. Procedures to gather evidence include inspection, observation, external confirmation, recalculation, reperformance, analytical procedures, and inquiry (inquiry alone is rarely sufficient)." },
          { kind: "p", text: "The chapter's core: an audit gives reasonable assurance via an opinion; audit risk = inherent × control × detection, and the auditor sets detection risk inversely to the risk of material misstatement (the higher the RMM, the more substantive evidence required); materiality scales the work; procedures test specific management assertions; and evidence must be sufficient and appropriate, with external, auditor-obtained, written originals being the most reliable. Over-learn the risk model's inverse relationship and the evidence-reliability hierarchy." },
        ],
      },
    ],
    keyTerms: [
      { term: "Reasonable assurance", def: "A high but not absolute level of assurance an audit provides." },
      { term: "Professional skepticism", def: "A questioning mind and critical assessment of evidence throughout the audit." },
      { term: "Audit risk", def: "Risk of issuing a clean opinion on materially misstated statements." },
      { term: "Inherent risk", def: "Susceptibility to misstatement before considering controls." },
      { term: "Control risk", def: "Risk a misstatement is not prevented/detected by internal control." },
      { term: "Detection risk", def: "Risk the auditor's procedures miss a misstatement; the only component the auditor sets." },
      { term: "Risk of material misstatement (RMM)", def: "Inherent risk × control risk; exists independent of the audit." },
      { term: "Inverse DR relationship", def: "Higher RMM → lower acceptable detection risk → more substantive testing." },
      { term: "Materiality", def: "Threshold above which a misstatement could influence users' decisions." },
      { term: "Management assertions", def: "Existence/occurrence, completeness, rights/obligations, valuation, cutoff, presentation." },
      { term: "Sufficient & appropriate evidence", def: "Enough quantity (sufficient) and relevant + reliable (appropriate)." },
      { term: "Evidence reliability hierarchy", def: "External > internal; auditor-obtained > entity; written > oral; originals > copies." },
    ],
    takeaways: [
      "An audit provides reasonable (not absolute) assurance that statements are free of material misstatement, expressed as an opinion, conducted with professional skepticism.",
      "Audit risk = inherent risk × control risk × detection risk; inherent × control = the risk of material misstatement, which exists independent of the audit.",
      "The auditor controls only detection risk and sets it INVERSELY to the assessed RMM — higher RMM demands more and more effective substantive testing.",
      "Materiality (overall and performance) scales the audit; procedures are designed to test specific management assertions (existence, completeness, valuation, etc.).",
      "Audit evidence must be sufficient (quantity) and appropriate (relevance + reliability).",
      "Reliability hierarchy: external > internal sources, auditor-obtained > entity-provided, written > oral, and originals > copies; inquiry alone is rarely sufficient.",
    ],
  },

  {
    id: "cpa-aud-ethics-deep",
    examSlug: "cpa-aud",
    topicId: "aud",
    topicName: "Auditing & Attestation",
    title: "Professional Ethics, Independence, and Responsibilities",
    readingMinutes: 56,
    summary:
      "The integrity backbone of the profession — the AICPA Code of Professional Conduct, independence in fact and appearance, the conceptual threats-and-safeguards framework, and the Sarbanes-Oxley reforms (the PCAOB, Section 404, and audit committees).",
    intro:
      "An auditor's opinion is worthless without INDEPENDENCE and INTEGRITY, so professional ethics is heavily tested in AUD. This reading covers the AICPA Code of Professional Conduct, the meaning of independence in fact and in appearance, the conceptual framework of THREATS and SAFEGUARDS, the specific prohibitions that destroy independence, and the SARBANES-OXLEY reforms that reshaped public-company auditing after the accounting scandals. These are bright-line, rule-driven topics the exam loves.",
    sections: [
      {
        heading: "1. The Code and independence",
        blocks: [
          { kind: "p", text: "The AICPA CODE OF PROFESSIONAL CONDUCT sets the principles — integrity, objectivity, independence, due care, and serving the public interest. INDEPENDENCE is required for ATTEST engagements (audits, reviews) and has two dimensions: independence IN FACT (an actual unbiased mindset) and independence IN APPEARANCE (avoiding situations a reasonable third party would view as compromising). Both must be maintained; an auditor who is unbiased in fact but appears compromised has still violated independence. (Note: independence is required for attest work but not for many non-attest services like tax preparation or consulting.)" },
        ],
      },
      {
        heading: "2. Threats and safeguards",
        blocks: [
          { kind: "p", text: "The Code uses a CONCEPTUAL FRAMEWORK: identify THREATS to independence/objectivity, evaluate their significance, and apply SAFEGUARDS to reduce them to an acceptable level. The common threats are SELF-REVIEW (auditing one's own non-audit work), ADVOCACY (promoting a client's position), FAMILIARITY (a close relationship dulling skepticism), SELF-INTEREST (a financial or other stake in the client), UNDUE INFLUENCE (pressure from the client), and MANAGEMENT PARTICIPATION (taking on management responsibilities). Safeguards include firm policies, rotation, separate engagement teams, and consultation. Some threats cannot be safeguarded and simply prohibit the engagement." },
          { kind: "callout", label: "Bright-line prohibitions", body: "Independence is impaired by a DIRECT financial interest in an attest client (any amount), a material indirect interest, most loans to/from the client, and contingent fees or commissions for attest clients. For issuers, Sarbanes-Oxley also bans many non-audit services for audit clients." },
        ],
      },
      {
        heading: "3. Sarbanes-Oxley and the PCAOB",
        blocks: [
          { kind: "p", text: "The SARBANES-OXLEY ACT (SOX) of 2002 transformed public-company auditing. It created the PUBLIC COMPANY ACCOUNTING OVERSIGHT BOARD (PCAOB) to set auditing standards for and inspect auditors of ISSUERS (replacing self-regulation for public companies). Key provisions: SECTION 404 requires management to assess, and the auditor to report on, the effectiveness of INTERNAL CONTROL OVER FINANCIAL REPORTING (ICFR); SECTION 302 requires the CEO and CFO to personally CERTIFY the financial statements and disclosure controls; the audit firm reports to and is overseen by an independent AUDIT COMMITTEE of the board (not management); and SOX restricts the non-audit services a firm may provide to its audit clients and requires audit partner ROTATION." },
        ],
      },
      {
        heading: "4. Standards and responsibilities",
        blocks: [
          { kind: "p", text: "Auditors of PRIVATE companies follow GENERALLY ACCEPTED AUDITING STANDARDS (GAAS) issued by the AICPA's Auditing Standards Board (as Statements on Auditing Standards); auditors of PUBLIC companies (issuers) follow PCAOB standards. The auditor must exercise DUE PROFESSIONAL CARE, maintain adequate DOCUMENTATION (the audit file supporting the opinion), and consider FRAUD risk throughout. The chapter's core: independence (in fact and appearance) is mandatory for attest work and protected by a threats-and-safeguards framework with bright-line prohibitions (direct financial interests, most loans, contingent fees); Sarbanes-Oxley created the PCAOB and imposed Section 404 ICFR reporting, Section 302 CEO/CFO certification, and audit-committee oversight for issuers. Over-learn the independence prohibitions and the SOX section numbers." },
        ],
      },
    ],
    keyTerms: [
      { term: "AICPA Code of Professional Conduct", def: "Principles: integrity, objectivity, independence, due care, public interest." },
      { term: "Independence in fact", def: "An actual, unbiased state of mind." },
      { term: "Independence in appearance", def: "Avoiding situations a reasonable third party would see as compromising." },
      { term: "Threats and safeguards framework", def: "Identify threats, evaluate significance, apply safeguards to an acceptable level." },
      { term: "Independence threats", def: "Self-review, advocacy, familiarity, self-interest, undue influence, management participation." },
      { term: "Bright-line prohibitions", def: "Direct financial interest, most loans, contingent fees/commissions for attest clients." },
      { term: "Sarbanes-Oxley (SOX)", def: "2002 act reforming public-company auditing; created the PCAOB." },
      { term: "PCAOB", def: "Sets standards for and inspects auditors of issuers (public companies)." },
      { term: "Section 404", def: "Management assesses and the auditor reports on internal control over financial reporting." },
      { term: "Section 302", def: "CEO and CFO certify the financial statements and disclosure controls." },
      { term: "Audit committee", def: "Independent board committee that oversees and engages the auditor." },
      { term: "GAAS vs PCAOB standards", def: "Private-company audits follow GAAS; issuer audits follow PCAOB standards." },
    ],
    takeaways: [
      "The AICPA Code requires integrity, objectivity, and independence; attest engagements demand independence in fact AND in appearance.",
      "The conceptual framework identifies threats (self-review, advocacy, familiarity, self-interest, undue influence, management participation) and applies safeguards.",
      "Independence is impaired by a direct financial interest (any amount), most loans, and contingent fees/commissions for attest clients.",
      "Sarbanes-Oxley created the PCAOB to set standards for and inspect auditors of public companies (issuers).",
      "SOX Section 404 requires ICFR reporting; Section 302 requires CEO/CFO certification; the independent audit committee oversees the auditor.",
      "Private-company audits follow GAAS (AICPA); issuer audits follow PCAOB standards; both require due care, documentation, and fraud consideration.",
    ],
  },

  {
    id: "cpa-aud-controls-deep",
    examSlug: "cpa-aud",
    topicId: "internal-controls",
    topicName: "Auditing & Attestation",
    title: "Internal Control and the Auditor's Response",
    readingMinutes: 56,
    summary:
      "How the auditor understands and tests a client's controls — the five COSO components, segregation of duties, IT general versus application controls, the deficiency severity scale, and how control reliance shapes the audit approach.",
    intro:
      "INTERNAL CONTROL is central to the audit: the auditor must understand it to assess control risk, and may TEST it to rely on it and reduce substantive work. The universal model is the COSO framework's FIVE COMPONENTS. This reading covers those components, the segregation-of-duties principle, the distinction between IT general and application controls, and how the auditor classifies the severity of control deficiencies — all frequently tested in AUD.",
    sections: [
      {
        heading: "1. The COSO framework",
        blocks: [
          { kind: "p", text: "Internal control is a process designed to provide reasonable assurance about reliable financial reporting, effective operations, and compliance with laws. The COSO framework defines FIVE COMPONENTS (a common mnemonic is 'CRIME'): CONTROL ENVIRONMENT (the tone at the top — integrity, board oversight, the foundation for all other components), RISK ASSESSMENT (identifying and analyzing risks to objectives), CONTROL ACTIVITIES (the policies and procedures — approvals, reconciliations, segregation of duties), INFORMATION AND COMMUNICATION (capturing and sharing relevant information), and MONITORING (ongoing and separate evaluations of whether controls operate effectively)." },
          { kind: "table", table: { caption: "The five COSO components", headers: ["Component", "Purpose"], rows: [["Control environment", "Tone at the top; foundation"], ["Risk assessment", "Identify and analyze risks to objectives"], ["Control activities", "Approvals, reconciliations, segregation of duties"], ["Information & communication", "Capture and share relevant information"], ["Monitoring", "Evaluate whether controls keep working"]] } },
        ],
      },
      {
        heading: "2. Segregation of duties",
        blocks: [
          { kind: "p", text: "A foundational control activity is SEGREGATION OF DUTIES: no single person should control a transaction from start to finish, because that enables both committing and concealing errors or fraud. The three functions to keep separate are AUTHORIZATION (approving the transaction), RECORDKEEPING (recording it in the books), and CUSTODY (handling the related assets) — sometimes with reconciliation as a fourth. When the same employee can authorize a payment, record it, and handle the cash, controls are weak and the auditor raises the assessed control risk." },
        ],
      },
      {
        heading: "3. IT controls and the auditor's response",
        blocks: [
          { kind: "p", text: "In computerized systems, controls split into two layers. IT GENERAL CONTROLS (ITGCs) govern the overall environment — access security, program-change management, and computer operations — and everything else depends on them; weak ITGCs undermine all the application controls that rely on them. APPLICATION CONTROLS operate within a specific system (input edit checks, validations, automated calculations). The auditor first UNDERSTANDS the controls (via inquiry, observation, inspection, and WALKTHROUGHS of a transaction), then decides the approach: if intending to RELY on controls to reduce substantive testing, the auditor must TEST their operating effectiveness (tests of controls); if not relying, the auditor takes a fully SUBSTANTIVE approach." },
        ],
      },
      {
        heading: "4. Deficiency severity",
        blocks: [
          { kind: "p", text: "When controls fail, the auditor classifies the severity on a three-level scale. A CONTROL DEFICIENCY exists when a control doesn't allow management or employees to prevent or detect misstatements on a timely basis. A SIGNIFICANT DEFICIENCY is less severe than a material weakness but important enough to merit attention by those charged with governance. A MATERIAL WEAKNESS is the most severe — a reasonable possibility that a material misstatement will not be prevented or detected — and, for an issuer's integrated audit, leads to an ADVERSE opinion on internal control. The chapter's core: COSO's five components (control environment, risk assessment, control activities, information & communication, monitoring) frame internal control; segregation of duties separates authorization, recordkeeping, and custody; ITGCs underpin application controls; and the auditor tests controls only when intending to rely on them, classifying failures as control deficiencies, significant deficiencies, or material weaknesses. Over-learn the five COSO components and the deficiency scale." },
        ],
      },
    ],
    keyTerms: [
      { term: "Internal control", def: "Process giving reasonable assurance over reporting, operations, and compliance." },
      { term: "COSO five components", def: "Control environment, risk assessment, control activities, information & communication, monitoring." },
      { term: "Control environment", def: "Tone at the top; the foundation for the other components." },
      { term: "Segregation of duties", def: "Separate authorization, recordkeeping, and custody to prevent fraud/error." },
      { term: "IT general controls (ITGCs)", def: "Access, change management, and operations governing the whole IT environment." },
      { term: "Application controls", def: "Controls within a specific system (input edits, validations, calculations)." },
      { term: "Walkthrough", def: "Tracing one transaction through the system to confirm understanding of controls." },
      { term: "Tests of controls", def: "Procedures to confirm controls operate effectively, performed when relying on them." },
      { term: "Control deficiency", def: "A control that fails to prevent or detect misstatements on a timely basis." },
      { term: "Significant deficiency", def: "Less severe than a material weakness but warranting governance attention." },
      { term: "Material weakness", def: "Reasonable possibility a material misstatement won't be prevented/detected; adverse ICFR opinion." },
    ],
    takeaways: [
      "Internal control gives reasonable assurance over reporting, operations, and compliance, framed by COSO's five components (control environment, risk assessment, control activities, information & communication, monitoring).",
      "Segregation of duties separates authorization, recordkeeping, and custody so no one person can both commit and conceal a misstatement.",
      "IT general controls (access, change management, operations) underpin application controls; weak ITGCs undermine the controls that depend on them.",
      "The auditor understands controls (inquiry, observation, walkthroughs), then tests their operating effectiveness only if intending to rely on them to reduce substantive work.",
      "Control failures are classified as control deficiencies, significant deficiencies, or material weaknesses, in increasing severity.",
      "A material weakness means a reasonable possibility a material misstatement won't be prevented or detected, leading to an adverse ICFR opinion for issuers.",
    ],
  },

  {
    id: "cpa-aud-reports-deep",
    examSlug: "cpa-aud",
    topicId: "audit-reports",
    topicName: "Auditing & Attestation",
    title: "Audit Reports and Opinions",
    readingMinutes: 54,
    summary:
      "The product of the audit — the unmodified (clean) opinion and the three modified opinions (qualified, adverse, disclaimer), what triggers each based on misstatement versus scope limitation and pervasiveness, and the emphasis-of-matter and going-concern communications.",
    intro:
      "The audit OPINION is what users actually read, and the exam tests precisely which opinion fits which situation. The choice turns on TWO questions: is the problem a MATERIAL MISSTATEMENT (a GAAP departure) or a SCOPE LIMITATION (couldn't get enough evidence)? And is it MATERIAL but isolated, or so PERVASIVE it affects the statements as a whole? This reading maps those answers to the four opinion types and covers the additional paragraphs auditors use to communicate special matters.",
    sections: [
      {
        heading: "1. The unmodified opinion",
        blocks: [
          { kind: "p", text: "An UNMODIFIED opinion (called UNQUALIFIED for issuers) is the clean, standard report: the auditor concludes the financial statements are presented fairly, in all material respects, in accordance with the applicable framework (e.g., US GAAP). The standard report includes an OPINION section (stated first), a BASIS FOR OPINION section (noting independence and that the audit followed the applicable standards), and sections describing management's and the auditor's RESPONSIBILITIES. This is the outcome when the auditor obtains sufficient appropriate evidence and finds no material misstatement." },
        ],
      },
      {
        heading: "2. The three modified opinions",
        blocks: [
          { kind: "p", text: "When something is wrong, the opinion is MODIFIED, and the type depends on the NATURE of the problem and its PERVASIVENESS. A QUALIFIED opinion ('except for…') is issued when a material misstatement OR a scope limitation is material but NOT pervasive — the statements are otherwise fairly stated. An ADVERSE opinion is issued when a material misstatement is so PERVASIVE that the statements as a whole are not fairly presented. A DISCLAIMER of opinion is issued when a scope limitation is so PERVASIVE that the auditor cannot obtain sufficient evidence and therefore expresses NO opinion at all." },
          { kind: "table", table: { caption: "Choosing the opinion", headers: ["Issue", "Material but not pervasive", "Material and pervasive"], rows: [["Misstatement (GAAP departure)", "Qualified", "Adverse"], ["Scope limitation (lack of evidence)", "Qualified", "Disclaimer"]] } },
          { kind: "example", example: { title: "Picking the opinion", prompt: "An auditor cannot obtain evidence over a client's inventory, which is so significant that the limitation affects the statements as a whole. What opinion is appropriate?", steps: ["The problem is a SCOPE LIMITATION (insufficient evidence), not a known misstatement.", "It is PERVASIVE (affects the statements as a whole).", "Scope limitation + pervasive = disclaimer of opinion."], answer: "A disclaimer of opinion — the auditor cannot form an opinion. Had the limitation been material but isolated, a qualified ('except for') opinion would apply instead." } },
        ],
      },
      {
        heading: "3. Emphasis, going concern, and key audit matters",
        blocks: [
          { kind: "p", text: "Auditors also add paragraphs WITHOUT changing the opinion. An EMPHASIS-OF-MATTER paragraph highlights something properly presented in the statements that is fundamental to users' understanding (e.g., a major catastrophe, a change in accounting principle); an OTHER-MATTER paragraph addresses something not in the statements but relevant to the audit. A GOING-CONCERN issue — substantial doubt about the entity's ability to continue for a reasonable period — is communicated (typically in an emphasis-of-matter-type paragraph) when disclosure is adequate; inadequate disclosure becomes a GAAP departure affecting the opinion. For issuers, the auditor also reports KEY AUDIT MATTERS (called critical audit matters) — the areas of most significance in the audit." },
          { kind: "p", text: "The chapter's core: a clean audit yields an unmodified/unqualified opinion; problems are modified based on nature and pervasiveness — a GAAP departure gives a qualified (if material) or adverse (if pervasive) opinion, while a scope limitation gives a qualified (if material) or disclaimer (if pervasive) opinion; and emphasis-of-matter, going-concern, and key-audit-matter communications add information without changing the opinion. Over-learn the 2×2 opinion matrix (misstatement vs scope, material vs pervasive)." },
        ],
      },
    ],
    keyTerms: [
      { term: "Unmodified/unqualified opinion", def: "Clean opinion: statements presented fairly in all material respects." },
      { term: "Basis for opinion section", def: "States independence and that the audit followed applicable standards." },
      { term: "Qualified opinion", def: "'Except for' — a material but NOT pervasive misstatement or scope limitation." },
      { term: "Adverse opinion", def: "Material misstatement so pervasive the statements are not fairly presented." },
      { term: "Disclaimer of opinion", def: "Scope limitation so pervasive the auditor expresses no opinion." },
      { term: "Pervasiveness", def: "Whether the issue affects the statements as a whole; drives qualified vs adverse/disclaimer." },
      { term: "Emphasis-of-matter paragraph", def: "Highlights a matter properly presented and fundamental to understanding." },
      { term: "Other-matter paragraph", def: "Addresses something relevant to the audit but not in the statements." },
      { term: "Going concern", def: "Substantial doubt about continuing operations; communicated if disclosure is adequate." },
      { term: "Key/critical audit matters", def: "Areas of most significance in the audit, reported for issuers." },
    ],
    takeaways: [
      "A clean audit produces an unmodified (unqualified) opinion: the statements are presented fairly in all material respects under the applicable framework.",
      "Modified opinions depend on the nature of the problem (misstatement vs scope limitation) and its pervasiveness.",
      "A GAAP departure (misstatement) gives a qualified opinion if material, or an adverse opinion if pervasive.",
      "A scope limitation (insufficient evidence) gives a qualified opinion if material, or a disclaimer if pervasive.",
      "Emphasis-of-matter and other-matter paragraphs, and going-concern language (with adequate disclosure), add information without changing the opinion.",
      "For issuers, the auditor also reports key/critical audit matters — the areas of greatest significance in the audit.",
    ],
  },
];

export const audDeepQuestions: Question[] = [
  {
    id: "cpa-aud-pr-d1", examSlug: "cpa-aud", topicId: "aud", topicName: "Auditing & Attestation", difficulty: 1,
    stem: "A financial-statement audit is designed to provide:",
    choices: ["Absolute assurance the statements are correct", "Reasonable assurance the statements are free of material misstatement", "A guarantee against fraud", "Assurance on operations and compliance only"],
    answerIndex: 1,
    explanation: "An audit provides reasonable — high but not absolute — assurance that the statements are free of material misstatement, expressed through an opinion. Absolute assurance is impossible due to sampling, the nature of evidence, and concealed fraud.",
  },
  {
    id: "cpa-aud-pr-d2", examSlug: "cpa-aud", topicId: "aud", topicName: "Auditing & Attestation", difficulty: 2,
    stem: "The audit risk model is expressed as:",
    choices: ["Audit risk = inherent risk + control risk + detection risk", "Audit risk = inherent risk × control risk × detection risk", "Audit risk = control risk ÷ detection risk", "Audit risk = materiality × sample size"],
    answerIndex: 1,
    explanation: "Audit risk = inherent risk × control risk × detection risk. Inherent risk × control risk is the risk of material misstatement (RMM), which exists independent of the audit; the auditor sets only detection risk.",
  },
  {
    id: "cpa-aud-pr-d3", examSlug: "cpa-aud", topicId: "aud", topicName: "Auditing & Attestation", difficulty: 3,
    stem: "If the auditor assesses the risk of material misstatement as HIGH, detection risk should be set:",
    choices: ["High, with less substantive testing", "Low, with more substantive testing", "Unchanged", "Equal to control risk"],
    answerIndex: 1,
    explanation: "Detection risk moves inversely to the risk of material misstatement. A high RMM requires a low detection risk, achieved through more extensive and more effective substantive procedures, larger samples, and testing nearer year-end.",
  },
  {
    id: "cpa-aud-pr-d4", examSlug: "cpa-aud", topicId: "aud", topicName: "Auditing & Attestation", difficulty: 2,
    stem: "Which audit evidence is generally the MOST reliable?",
    choices: ["An oral inquiry of management", "A photocopy provided by the client", "An external confirmation obtained directly by the auditor", "An internally generated spreadsheet"],
    answerIndex: 2,
    explanation: "Evidence from external, independent sources obtained directly by the auditor is the most reliable. Reliability ranks external > internal, auditor-obtained > entity-provided, written > oral, and originals > copies; inquiry alone is rarely sufficient.",
  },
  {
    id: "cpa-aud-pr-d5", examSlug: "cpa-aud", topicId: "aud", topicName: "Auditing & Attestation", difficulty: 2,
    stem: "Confirming accounts receivable with customers primarily tests which assertion?",
    choices: ["Completeness", "Existence", "Presentation and disclosure", "Cutoff"],
    answerIndex: 1,
    explanation: "Confirming receivables tests existence — whether the recorded receivables are real. Completeness (that all receivables are recorded) is better tested by tracing shipping documents and sales into the records.",
  },
  {
    id: "cpa-aud-et-d1", examSlug: "cpa-aud", topicId: "aud", topicName: "Auditing & Attestation", difficulty: 2,
    stem: "An auditor who is actually unbiased but holds a direct financial interest in the client lacks:",
    choices: ["Independence in appearance", "Due care", "Competence", "Materiality"],
    answerIndex: 0,
    explanation: "A direct financial interest impairs independence in appearance (and per the rules, independence outright), even if the auditor is unbiased in fact. Attest engagements require independence in both fact and appearance.",
  },
  {
    id: "cpa-aud-et-d2", examSlug: "cpa-aud", topicId: "aud", topicName: "Auditing & Attestation", difficulty: 1,
    stem: "The Sarbanes-Oxley Act created which body to oversee auditors of public companies?",
    choices: ["The SEC", "The FASB", "The PCAOB", "The AICPA"],
    answerIndex: 2,
    explanation: "SOX created the Public Company Accounting Oversight Board (PCAOB) to set auditing standards for and inspect auditors of issuers, replacing self-regulation for public companies.",
  },
  {
    id: "cpa-aud-et-d3", examSlug: "cpa-aud", topicId: "aud", topicName: "Auditing & Attestation", difficulty: 2,
    stem: "Sarbanes-Oxley Section 404 requires that:",
    choices: ["The CEO and CFO personally certify the financial statements", "Management assess and the auditor report on internal control over financial reporting", "Audit partners rotate every year", "Companies use a single audit firm"],
    answerIndex: 1,
    explanation: "Section 404 requires management to assess, and the auditor to report on, the effectiveness of internal control over financial reporting (ICFR). The CEO/CFO certification requirement is Section 302.",
  },
  {
    id: "cpa-aud-ic-d1", examSlug: "cpa-aud", topicId: "internal-controls", topicName: "Auditing & Attestation", difficulty: 2,
    stem: "Which is NOT one of the five COSO components of internal control?",
    choices: ["Control environment", "Risk assessment", "Detection risk", "Monitoring"],
    answerIndex: 2,
    explanation: "The five COSO components are control environment, risk assessment, control activities, information & communication, and monitoring. Detection risk is part of the audit risk model, not a COSO component.",
  },
  {
    id: "cpa-aud-ic-d2", examSlug: "cpa-aud", topicId: "internal-controls", topicName: "Auditing & Attestation", difficulty: 3,
    stem: "Segregation of duties requires separating which functions?",
    choices: ["Planning, fieldwork, and reporting", "Authorization, recordkeeping, and custody", "Sales, marketing, and shipping", "Hiring, training, and review"],
    answerIndex: 1,
    explanation: "Segregation of duties separates authorization (approving), recordkeeping (recording), and custody (handling assets) so no single person can both perpetrate and conceal a misstatement.",
  },
  {
    id: "cpa-aud-ic-d3", examSlug: "cpa-aud", topicId: "internal-controls", topicName: "Auditing & Attestation", difficulty: 2,
    stem: "The most severe classification of an internal control deficiency is a:",
    choices: ["Control deficiency", "Significant deficiency", "Material weakness", "Reportable condition"],
    answerIndex: 2,
    explanation: "A material weakness is the most severe — a reasonable possibility that a material misstatement will not be prevented or detected on a timely basis. For an issuer's integrated audit, it results in an adverse opinion on internal control.",
  },
  {
    id: "cpa-aud-rp-d1", examSlug: "cpa-aud", topicId: "audit-reports", topicName: "Auditing & Attestation", difficulty: 2,
    stem: "An auditor concludes the statements are fairly presented in all material respects. The appropriate opinion is:",
    choices: ["Qualified", "Adverse", "Unmodified (unqualified)", "Disclaimer"],
    answerIndex: 2,
    explanation: "When the auditor obtains sufficient appropriate evidence and finds no material misstatement, the result is a clean, unmodified (unqualified) opinion.",
  },
  {
    id: "cpa-aud-rp-d2", examSlug: "cpa-aud", topicId: "audit-reports", topicName: "Auditing & Attestation", difficulty: 3,
    stem: "A scope limitation so pervasive that the auditor cannot obtain sufficient evidence results in a(n):",
    choices: ["Qualified opinion", "Adverse opinion", "Disclaimer of opinion", "Unmodified opinion"],
    answerIndex: 2,
    explanation: "A pervasive scope limitation leads to a disclaimer of opinion (no opinion expressed). If the limitation were material but not pervasive, a qualified ('except for') opinion would apply.",
  },
  {
    id: "cpa-aud-rp-d3", examSlug: "cpa-aud", topicId: "audit-reports", topicName: "Auditing & Attestation", difficulty: 3,
    stem: "A material misstatement (GAAP departure) that is so pervasive the statements as a whole are not fairly presented results in a(n):",
    choices: ["Qualified opinion", "Adverse opinion", "Disclaimer of opinion", "Emphasis-of-matter paragraph only"],
    answerIndex: 1,
    explanation: "A pervasive material misstatement leads to an adverse opinion (the statements are not fairly presented). A material but isolated misstatement would instead give a qualified opinion.",
  },
  {
    id: "cpa-aud-rp-d4", examSlug: "cpa-aud", topicId: "audit-reports", topicName: "Auditing & Attestation", difficulty: 2,
    stem: "An auditor wishes to highlight a matter properly presented in the statements that is fundamental to users' understanding, without modifying the opinion. The auditor adds a(n):",
    choices: ["Qualified opinion", "Emphasis-of-matter paragraph", "Adverse opinion", "Scope limitation"],
    answerIndex: 1,
    explanation: "An emphasis-of-matter paragraph highlights a properly presented matter fundamental to understanding (e.g., a significant event or accounting change) without changing the opinion. An other-matter paragraph addresses matters not presented in the statements.",
  },
];
