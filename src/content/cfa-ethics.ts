// ============================================================
// Certus — CFA Level I: Ethical & Professional Standards
// Gold-standard deep chapter (~38 min) + aligned question bank.
// Original teaching content written for Certus; structured to the
// current CFA Institute Code & Standards (7 Standards, 22 sub-
// standards) and Level I exam emphasis (15–20% topic weight).
// ============================================================

import { Chapter, Question } from "./types";

export const ethicsChapter: Chapter = {
  id: "cfa-ethics",
  examSlug: "cfa",
  topicId: "ethics",
  topicName: "Ethical & Professional Standards",
  title: "Ethics: The Code, All Seven Standards, and GIPS — In Depth",
  readingMinutes: 38,
  summary:
    "Every sub-standard of the Code & Standards with the exact nuances the exam tests, plus GIPS and a question-answering method.",
  intro:
    "Ethics is 15–20% of Level I — the largest single topic weight alongside FSA — and it is the only topic where CFA Institute openly tips the scale: borderline candidates with strong ethics scores get passed, and borderline candidates with weak ethics scores get failed. That is the 'ethics adjustment,' and it makes this chapter the highest-yield reading in the entire curriculum. The bad news is that ethics questions are deliberately written in gray areas: every choice sounds plausible, and the wrong answers are wrong by one precise word. The fix is not intuition — it is knowing all 22 sub-standards well enough to name which one a vignette is testing, and knowing the dozen or so recurring nuances (mosaic theory, fair-versus-equal dealing, what departing employees may take, when confidentiality breaks) that the exam recycles year after year. This chapter covers every one of them.",
  sections: [
    {
      heading: "The architecture: Code, Standards, and enforcement",
      blocks: [
        {
          kind: "p",
          text: "The CFA Institute ethics framework has two layers. The Code of Ethics is six short aspirational principles — the constitution. The Standards of Professional Conduct are seven enforceable rules with twenty-two sub-standards — the statutes. Exam questions about 'the Code' test whether you know the six principles exist and what they broadly say; nearly everything else tests the Standards, because the Standards are specific enough to be violated.",
        },
        {
          kind: "bullets",
          items: [
            "Code principle 1: Act with integrity, competence, diligence, and respect, in an ethical manner with the public, clients, prospects, employers, employees, and colleagues.",
            "Code principle 2: Place the integrity of the profession and the interests of clients above your own interests.",
            "Code principle 3: Use reasonable care and exercise independent professional judgment in analysis, recommendations, and actions.",
            "Code principle 4: Practice — and encourage others to practice — in a professional and ethical manner that reflects credit on the profession.",
            "Code principle 5: Promote the integrity and viability of the global capital markets for the ultimate benefit of society.",
            "Code principle 6: Maintain and improve your professional competence, and strive to do the same for other investment professionals.",
          ],
        },
        {
          kind: "p",
          text: "Enforcement runs through the Professional Conduct Program (PCP). The PCP investigates complaints — triggered by self-disclosure on the annual Professional Conduct Statement, written complaints, media reports, or exam-room incidents — and a designated officer proposes a sanction. If the member rejects the proposed sanction, the matter goes to a hearing panel of CFA Institute members. Available sanctions escalate from private censure, to public censure, to suspension of membership and use of the designation, to revocation of the charter. Candidates can be suspended or barred from the program. Two boundaries matter on the exam: the PCP cannot fine you or jail you (it is not a regulator), and an industry sanction does not automatically equal a Standards violation — but members under investigation must cooperate, including handing over confidential client information to the PCP.",
        },
        {
          kind: "callout",
          label: "Tested nuance",
          body: "Compliance with the Standards is a personal obligation. Your employer, your supervisor, or local law being 'fine with it' never excuses conduct below the Standards. Conversely, the Standards do not require you to be perfect — they require reasonable care, reasonable basis, and reasonable supervision. The word 'reasonable' is doing legal work in almost every sub-standard.",
        },
      ],
    },
    {
      heading: "Standard I(A): Knowledge of the Law — the strictest rule wins",
      blocks: [
        {
          kind: "p",
          text: "Members must understand and comply with all applicable laws, rules, and regulations — including the Code and Standards — of any government, regulator, licensing agency, or professional association governing their activities. When laws conflict, or when local law differs from the Standards, you comply with the stricter requirement. This produces the single most reliable exam rule in the topic: if local law is stricter than the Code, follow local law; if local law is weaker (or there is no law), follow the Code. An analyst working in a country with no insider-trading statute is still bound by Standard II(A).",
        },
        {
          kind: "figure",
          figure: {
            caption: "When rules conflict, the strictest applicable requirement governs.",
            alt: "Decision flow: compare local law and the Code and Standards, follow the stricter",
            svg: "<svg viewBox=\"0 0 460 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"inherit\"><rect x=\"150\" y=\"10\" width=\"160\" height=\"34\" rx=\"8\" fill=\"var(--bg-card)\" stroke=\"var(--primary)\"/><text x=\"230\" y=\"31\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--primary)\">Conduct in question</text><line x1=\"230\" y1=\"44\" x2=\"230\" y2=\"66\" stroke=\"var(--text-muted)\"/><rect x=\"120\" y=\"66\" width=\"220\" height=\"34\" rx=\"8\" fill=\"var(--bg-card)\" stroke=\"var(--border-strong)\"/><text x=\"230\" y=\"87\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--text-muted)\">Which is stricter — local law or the Code?</text><line x1=\"160\" y1=\"100\" x2=\"90\" y2=\"126\" stroke=\"var(--text-muted)\"/><line x1=\"300\" y1=\"100\" x2=\"370\" y2=\"126\" stroke=\"var(--text-muted)\"/><rect x=\"15\" y=\"126\" width=\"160\" height=\"34\" rx=\"8\" fill=\"var(--ats-green-bg)\" stroke=\"var(--ats-green)\"/><text x=\"95\" y=\"147\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--ats-green)\">Law stricter → follow law</text><rect x=\"285\" y=\"126\" width=\"170\" height=\"34\" rx=\"8\" fill=\"var(--ats-green-bg)\" stroke=\"var(--ats-green)\"/><text x=\"370\" y=\"147\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--ats-green)\">Code stricter → follow Code</text></svg>",
          },
        },
        {
          kind: "p",
          text: "The second half of I(A) is dissociation. If you know or should know a colleague or client is violating laws or the Standards, you must dissociate from the activity: first raise it with a supervisor or compliance, and if the firm does nothing, remove yourself from the engagement — ask off the account, refuse to sign the report, or in persistent cases resign. Two boundaries are tested constantly: you are NOT required to report violations to governmental authorities (unless local law requires it, though reporting may be prudent), and inaction plus continued association equals participation. Staying silently on the team while the misconduct continues is itself a violation.",
        },
        {
          kind: "example",
          example: {
            title: "dissociation in practice",
            prompt: "A junior analyst discovers her team's marketing deck overstates the fund's historical returns. She emails her supervisor, who replies 'legal approved it, let it go.' The deck keeps circulating. What must she do?",
            steps: [
              "Raising it with the supervisor was the correct first step — but the violation is ongoing, so her obligation is not discharged.",
              "She must escalate (compliance, senior management) and dissociate from the activity: stop distributing the deck and ask that her name not be associated with it.",
              "She is not required to report the firm to the regulator under the Standards — but she cannot keep using the deck.",
            ],
            answer: "Escalate and dissociate; continued participation would violate Standard I(A) even though she complained once.",
          },
        },
      ],
    },
    {
      heading: "Standard I(B): Independence and Objectivity — gifts, travel, and pressure",
      blocks: [
        {
          kind: "p",
          text: "Members must use reasonable care and judgment to achieve and maintain independence and objectivity, and must not offer, solicit, or accept any gift, benefit, compensation, or consideration that could reasonably be expected to compromise their own or another's independence. The exam tests this through three recurring fact patterns: gifts, issuer-paid travel, and internal pressure.",
        },
        {
          kind: "table",
          table: {
            caption: "How the gift rules differ by source — the single most-tested I(B) distinction.",
            headers: ["Source of benefit", "Treatment", "Why"],
            rows: [
              ["Client — gift for PAST performance", "Acceptable; disclose to employer", "Client gratitude can't bias work already done, but the employer must be able to monitor for favoritism"],
              ["Client — incentive for FUTURE performance", "Requires employer's written consent BEFORE accepting", "It creates a live incentive to favor that client — this is also a IV(B) issue"],
              ["Covered company / issuer", "Decline anything beyond modest, customary value", "Benefits from subjects of research are presumed to compromise objectivity"],
              ["Issuer-paid travel", "Use commercial transport at firm expense when feasible; accept issuer transport only when commercial isn't practical", "Lavish or chartered travel paid by the issuer compromises (or appears to compromise) the analyst"],
            ],
          },
        },
        {
          kind: "p",
          text: "Internal pressure is the other half. Sell-side analysts pressured by investment-banking colleagues to soften a rating on a banking client, buy-side managers pressured by executives whose company is a large client, performance analysts pressured to massage composite numbers — all are I(B) situations, and the compliant response is to resist the pressure and, where appropriate, for firms to build firewalls between research and banking. Issuing a favorable report you do not believe also violates I(B) (and V(A)). One subtlety: allocating shares of an oversubscribed IPO to your personal account, or accepting allocation of hot IPOs from brokers courting your order flow, compromises objectivity. And note that a sell-side analyst may attend an issuer's analyst day at the issuer's facility — independence does not require avoiding all contact, only avoiding compromising benefits.",
        },
        {
          kind: "callout",
          label: "Tested nuance",
          body: "Gifts from CLIENTS are treated more leniently than gifts from ISSUERS, because a client rewarding past service poses less threat to objectivity than a covered company courting coverage. Past-performance client gifts: accept + disclose. Future-performance arrangements: prior written consent. Issuer benefits: modest or decline.",
        },
      ],
    },
    {
      heading: "Standard I(C) and I(D): Misrepresentation and Misconduct",
      blocks: [
        {
          kind: "p",
          text: "I(C) Misrepresentation: members must not knowingly make any misrepresentation relating to investment analysis, recommendations, actions, or other professional activities. The word 'knowingly' matters — an honest error is not a violation (though failing to correct it once discovered is). The classic forms: guaranteeing investment returns on assets that are not actually guaranteed ('this fund will return 12%'), overstating credentials or what your firm can do, cherry-picked or simulated performance presented as real, and plagiarism.",
        },
        {
          kind: "p",
          text: "Plagiarism deserves its own paragraph because the exceptions are testable. Using someone else's analysis, charts, or language without attribution violates I(C) — including using a research report's conclusions 'in substance' with cosmetic rewording. Two carve-outs: you may use factual information from RECOGNIZED financial and statistical reporting services without attribution (e.g., S&P or Bloomberg data), and your employer owns work product, so a firm may reuse a departed employee's models internally without crediting them. But if you leave a firm, you cannot take and reuse your own old reports without the firm's permission — the work product is theirs — and you cannot republish a colleague's work under your name anywhere.",
        },
        {
          kind: "p",
          text: "I(D) Misconduct: members must not engage in any professional conduct involving dishonesty, fraud, or deceit, or commit any act that reflects adversely on their professional reputation, integrity, or competence. The boundary the exam draws is professional versus personal. Fraud, embezzlement, lying on a résumé, repeatedly arriving at client meetings intoxicated — violations, because they speak to professional integrity or competence. Personal bankruptcy from bad luck, a civil-disobedience arrest at a protest, or private conduct unrelated to honesty generally are NOT violations. Bankruptcy caused by fraudulent personal conduct, however, is. The question to ask: does the act involve dishonesty/deceit, or impugn professional competence? If neither, I(D) likely is not triggered.",
        },
      ],
    },
    {
      heading: "Standard II: Material Nonpublic Information and Market Manipulation",
      blocks: [
        {
          kind: "p",
          text: "II(A) is the most heavily tested sub-standard in the curriculum. Members who possess material nonpublic information that could affect the value of an investment must not act or cause others to act on it. Break the definition into its two tests. MATERIAL: a reasonable investor would want the information before trading, or disclosure would be expected to move the price — earnings surprises, M&A, new products, regulatory actions, key defaults, or knowledge of a forthcoming influential analyst recommendation. Information whose reliability is poor (a vague rumor from an uninformed source) is less likely to be material. NONPUBLIC: not yet disseminated to the marketplace generally. Disclosure to a select group — an earnings call open only to invited analysts — does not make information public. Once it is broadly released (newswire, filing), trading is permitted.",
        },
        {
          kind: "p",
          text: "The mosaic theory is the carve-out that makes analysis possible: an analyst may combine public information with NON-material nonpublic information — supplier order chatter, store traffic, management's tone — and reach a material conclusion, then act and recommend on it. The conclusion being market-moving does not poison the inputs. What the analyst cannot do is receive the material fact itself from an insider. The line: piecing together is skill; being handed the earnings number is a violation. Analysts should document the mosaic (save the public sources and notes) precisely so they can prove the conclusion was assembled, not leaked.",
        },
        {
          kind: "example",
          example: {
            title: "mosaic vs. tip",
            prompt: "An analyst notes a retailer's public hiring freeze, observes half-empty parking lots at twelve stores, and hears from a logistics contact (no inside access) that outbound shipments are 'slow.' She downgrades the stock. Separately, a friend in the retailer's finance department texts her: 'comps will miss badly.' What may she use?",
            steps: [
              "Hiring freeze: public. Parking lots: her own observation — nonpublic but not material individually. Logistics chatter: nonpublic, not material alone.",
              "Combining those three into a downgrade is mosaic theory — permitted, even though the conclusion is material.",
              "The friend's text is material (comps miss) and nonpublic (internal) — possessing it, she cannot trade or change her recommendation BASED on it.",
            ],
            answer: "She may act on the mosaic she built; she must not act on, or pass along, the insider's text — and best practice is to encourage the company to disclose it publicly.",
          },
        },
        {
          kind: "p",
          text: "Firms holding MNPI in one department (investment banking) while trading in another manage II(A) with information barriers — 'firewalls': restricted lists, physical and electronic separation, compliance clearance for inter-departmental communication, and watch lists for monitoring. When a firm acquires MNPI about an issuer, the recommended response is to place the issuer on a restricted list and give clients only factual, unbiased information — pulling coverage abruptly would itself signal the news.",
        },
        {
          kind: "p",
          text: "II(B) Market Manipulation prohibits practices that distort prices or artificially inflate trading volume with the INTENT to mislead market participants. Two species: transaction-based manipulation — wash trades between controlled accounts, painting the tape, ramping a price upward ahead of a sale, or securing a dominant position to squeeze shorts — and information-based manipulation — spreading false or misleading rumors to move a price (pump-and-dump). Intent is the hinge: trading a large block for legitimate tax or rebalancing reasons that happens to move the price is NOT manipulation, and a legitimate trading strategy that exploits a market inefficiency is permitted. Spreading a rumor you know is false, even without trading on it, violates II(B).",
        },
        {
          kind: "callout",
          label: "Tested nuance",
          body: "You can violate II(A) without trading: causing OTHERS to trade (tipping a friend, changing a recommendation because of inside information) is equally prohibited. And overheard information counts — if you overhear material nonpublic facts in an elevator, you possess MNPI and cannot act, even though nobody 'tipped' you.",
        },
      ],
    },
    {
      heading: "Standard III(A) and III(B): Loyalty to clients and Fair Dealing",
      blocks: [
        {
          kind: "p",
          text: "III(A) Loyalty, Prudence, and Care: members have a duty of loyalty to clients, must act with reasonable care and prudent judgment, and must place client interests before their employer's or their own. First exam move: identify who the client actually is. For a pension fund, the client is the plan beneficiaries — not the plan sponsor's management. For an index fund manager, the duty is to manage faithfully to the stated mandate. Following a client's own stated mandate IS loyalty, even if the manager privately thinks another strategy would do better.",
        },
        {
          kind: "p",
          text: "Soft dollars are the canonical III(A) scenario. Client brokerage — the commissions paid on client trades — is an asset of the CLIENT, not the manager. Directing trades to a broker who charges more in exchange for research is permissible only if the commission is reasonable and the research benefits THE CLIENT whose commissions paid for it. Using client A's brokerage to buy research that only helps client B, or to get perks for the manager (office equipment, conference junkets), violates the duty. In client-directed brokerage — where the client itself orders the manager to use a particular broker — the manager should inform the client if that arrangement compromises best execution, and then may follow the instruction. Proxy voting is also covered: proxies have economic value, and a manager should vote them in clients' interest under documented policies (cost-benefit analysis may justify not voting routine proxies, but a blanket 'we never vote' is sloppy).",
        },
        {
          kind: "p",
          text: "III(B) Fair Dealing: deal fairly and objectively with ALL clients when providing analysis, making recommendations, or taking investment action. Fair does not mean EQUAL — premium-service tiers are fine if they are disclosed, offered to everyone willing to pay, and no client is disadvantaged on material recommendations. The mechanics the exam tests: disseminate recommendation changes to all relevant clients in a way that doesn't systematically advantage favorites (don't call your biggest account first and let them trade before the email goes out); execute client trades on the same side as a recommendation before the firm's own; and for oversubscribed IPOs, allocate pro rata to all suitable clients — and exclude the manager's own and immediate-family non-client accounts from hot issues. A crucial counterpoint: FAMILY accounts that are regular fee-paying CLIENT accounts must be treated like any other client — disadvantaging your brother's client account is itself a fair-dealing violation.",
        },
        {
          kind: "example",
          example: {
            title: "the hot IPO",
            prompt: "A manager receives 50,000 shares of an oversubscribed IPO. Suitable client demand totals 200,000 shares across ten accounts, one of which belongs to her sister (a regular fee-paying client). The manager also wants 1,000 shares personally. How is the allocation handled?",
            steps: [
              "Pro-rate the 50,000 shares across all ten suitable client accounts — each gets 25% of its requested amount.",
              "The sister's CLIENT account participates exactly like the other nine. Excluding it would violate III(B).",
              "The manager's personal 1,000 shares: no. Personal participation in an oversubscribed issue takes from clients and compromises objectivity.",
            ],
            answer: "Pro-rata across all suitable clients including the sister's client account; the manager takes nothing.",
          },
        },
      ],
    },
    {
      heading: "Standard III(C), (D), (E): Suitability, Performance, Confidentiality",
      blocks: [
        {
          kind: "p",
          text: "III(C) Suitability: in an advisory relationship, you must make reasonable inquiry into the client's investment experience, risk and return objectives, and financial constraints BEFORE acting, and reassess regularly — in practice, a written Investment Policy Statement (IPS) updated at least annually or upon major life changes. Two judgments dominate the questions. First, suitability is judged in TOTAL PORTFOLIO context: a volatile small-cap or a derivative can be perfectly suitable as 2% of a diversified portfolio even for a conservative client, and a 'safe' concentrated position can be unsuitable. Second, for unsolicited trade requests the client insists on: explain why it is unsuitable; if the trade's impact is minimal, you may execute (some firms document and proceed); if it would materially harm the portfolio and the client insists, update the IPS, have the client acknowledge, or direct them elsewhere — and consider whether the relationship should continue. Managers of funds or indexes owe suitability to the MANDATE, not to each end investor; it is the adviser who picks the fund who owes the investor-level suitability duty.",
        },
        {
          kind: "p",
          text: "III(D) Performance Presentation: when communicating performance, make reasonable efforts to ensure it is fair, accurate, and complete. The classic violations: presenting a composite that quietly drops terminated or losing accounts (survivorship), presenting simulated/back-tested results as actual, claiming a track record from a previous firm as the new firm's own (you may show it with disclosure that it was earned elsewhere), and stating or implying that past results will repeat. Brief presentations are fine if they disclose limitations and offer the detailed data on request. GIPS compliance (covered below) is the institutional-grade way to satisfy III(D), but III(D) applies whether or not a firm claims GIPS.",
        },
        {
          kind: "p",
          text: "III(E) Preservation of Confidentiality: keep information about current, former, and prospective clients confidential — even after they stop being clients — UNLESS one of three exceptions applies: (1) the information concerns ILLEGAL activities by the client, (2) disclosure is required by law, or (3) the client permits it. Add the special fourth door: members must cooperate with a CFA Institute PCP investigation, and providing client information to the PCP is not a breach. The trap pattern: a client's relative, accountant, or new adviser calls asking about the account — without the client's authorization, you say nothing, no matter how benign the request feels. Status as a former client changes nothing.",
        },
        {
          kind: "callout",
          label: "Tested nuance",
          body: "Suitability lives at the portfolio level, not the security level. The answer 'this asset is risky, therefore unsuitable' is almost always a trap — ask what it does to the client's TOTAL portfolio against the IPS.",
        },
      ],
    },
    {
      heading: "Standard IV: Duties to Employers — leaving, moonlighting, supervising",
      blocks: [
        {
          kind: "p",
          text: "IV(A) Loyalty: in matters related to employment, act for the benefit of your employer and do not deprive it of your skills, divulge confidential information, or otherwise cause harm. This is NOT servitude — the standard explicitly does not require putting the employer above your obligation to clients or the law, and whistleblowing that protects clients or market integrity is permitted (whistleblowing for personal gain or vendetta is not). The dominant fact pattern is departure. While still employed, you may PREPARE to compete: register an entity, arrange financing, sign an office lease, tell your employer you are leaving. You may not SOLICIT the firm's clients before you resign, take firm property — client lists, models, reports, presentations, contact files, whether paper or digital — or start competing while on the payroll. After you leave, you may use knowledge carried in your head (you can remember that a client exists and look up their public phone number) and your general skills and experience; you simply cannot use materials you took. Independent practice for compensation while still employed requires notifying your employer of the services and compensation and obtaining CONSENT before you begin.",
        },
        {
          kind: "table",
          table: {
            caption: "Departing employees: the permitted/prohibited line under IV(A).",
            headers: ["Action before resigning", "Permitted?"],
            rows: [
              ["Register a company, lease space, arrange financing for the new firm", "Yes — preparation is allowed"],
              ["Solicit current clients to follow you", "No — wait until you've left"],
              ["Copy the CRM, client list, models, or your own old reports", "No — firm property, regardless of who authored it"],
              ["After leaving, contact clients from memory using public directories", "Yes — if no agreement (e.g., non-compete) says otherwise"],
              ["Take a 'skeleton crew' of colleagues with you by recruiting them at work", "Gray — aggressive pre-departure recruitment harms the employer; tested as a violation"],
            ],
          },
        },
        {
          kind: "p",
          text: "IV(B) Additional Compensation Arrangements: do not accept gifts, benefits, or compensation that compete with — or might create a conflict with — your employer's interest unless you obtain WRITTEN consent from ALL parties involved. A client offering you a bonus for beating a benchmark next year, or a directorship fee at another company: both require the employer's written consent before acceptance (email counts as written). The logic: your employer must know about outside incentives to supervise you effectively.",
        },
        {
          kind: "p",
          text: "IV(C) Responsibilities of Supervisors: anyone with supervisory authority must make reasonable efforts to detect and prevent violations of laws, rules, and the Code by anyone subject to their supervision. 'Reasonable efforts' means an adequate compliance system — written procedures, training, monitoring — not a guarantee that no one ever misbehaves. A violation by a subordinate does not automatically condemn the supervisor IF the system was adequate and the response prompt: investigate, limit the wrongdoer's activity pending the result, and fix the procedure gap. Two tested edges: if you are offered supervisory responsibility at a firm whose compliance system is inadequate, DECLINE the role in writing until the firm fixes it; and merely warning a violator to stop, without investigating or restricting them, is an inadequate response.",
        },
        {
          kind: "example",
          example: {
            title: "the inadequate response",
            prompt: "A supervisor learns a trader may be front-running client orders. She tells him 'knock it off' and takes no other action. The trader does it again a month later. Did the supervisor violate IV(C)?",
            steps: [
              "Knowing of a likely violation triggers a duty to act: investigate the facts, and restrict the trader's activity until the investigation concludes.",
              "A verbal warning with continued full trading authority is not a 'reasonable effort to prevent' recurrence.",
              "When the trader repeated the violation, the supervisor's failure became her own IV(C) violation.",
            ],
            answer: "Yes — respond to red flags with investigation plus restriction, not warnings alone.",
          },
        },
      ],
    },
    {
      heading: "Standard V: Diligence, Communication, and Records",
      blocks: [
        {
          kind: "p",
          text: "V(A) Diligence and Reasonable Basis: have a reasonable and adequate basis, supported by appropriate research, for any analysis, recommendation, or action. You may rely on secondary or third-party research IF you make reasonable efforts to verify it is sound — assess the analysts' assumptions, rigor, and timeliness; blind reliance is a violation. You may rely on quantitative models others built, but you should understand their assumptions and limitations (test behavior in adverse scenarios). Group research is the famous nuance: if a consensus report goes out with a conclusion you personally disagree with, you do NOT have to dissociate or demand your name off it — as long as the conclusion has a reasonable and adequate basis and reflects the team's independent process. Disagreement is not a violation; a baseless report is.",
        },
        {
          kind: "p",
          text: "V(B) Communication with Clients and Prospective Clients: disclose the basic format and general principles of your investment process — and promptly disclose any CHANGES that materially affect it (e.g., the fund will now use leverage or derivatives: tell clients before, not after). Distinguish FACT from OPINION: 'the bond yields 6.2%' is fact; 'rates will fall next year' is opinion and must be framed as such — presenting forecasts as certainties violates V(B). Identify important limitations and risks of the analysis, and use reasonable judgment about what to include versus exclude. Communication can be any form (calls, emails, reports), but brevity raises the bar on what counts as fair presentation.",
        },
        {
          kind: "p",
          text: "V(C) Record Retention: develop and maintain the records that support your analysis, recommendations, and actions. Records belong to the FIRM, not the analyst — when you change employers, you cannot take your old supporting research with you, and you must recreate a basis from public or new sources before reissuing similar recommendations at the new shop. Where no regulation specifies otherwise, CFA Institute recommends retaining records for at least SEVEN years. Records may be hard copy or electronic; personal notes and working papers count.",
        },
      ],
    },
    {
      heading: "Standard VI: Conflicts of Interest — disclose, prioritize, referral fees",
      blocks: [
        {
          kind: "p",
          text: "VI(A) Disclosure of Conflicts: make full and fair disclosure of all matters that could reasonably be expected to impair your independence and objectivity or interfere with your duties to clients, prospects, and your employer — and make the disclosures PROMINENT, in plain language, communicating relevant information effectively. Burying the conflict on page forty of a prospectus fails the prominence test. Classic disclosable conflicts: the analyst owns shares of the company she covers, the firm makes a market in the recommended security or has an investment-banking relationship with the issuer, the manager's bonus is tied to short-term performance, board seats, and fee structures based on performance. The modern framing the curriculum emphasizes: AVOID the conflict where you can; disclose it where you cannot.",
        },
        {
          kind: "p",
          text: "VI(B) Priority of Transactions: investment transactions for clients and employers take priority over transactions in which a member is the BENEFICIAL owner. Clients first, employer second, you last. Beneficial ownership reaches accounts you influence or profit from — your spouse, your kids' custodial accounts, family trusts. The recurring twist mirrors fair dealing: a family member's account that is a regular fee-paying CLIENT account is a client account, full stop — it trades with the clients, not with you. Personal trading rules that satisfy VI(B): wait until clients have had adequate opportunity to act on a recommendation before trading yourself; blackout/restricted periods for access persons; disclose personal holdings to the employer; obtain pre-clearance where required. You are not banned from owning what clients own — you are banned from front-running them or taking their opportunities (hot IPOs again).",
        },
        {
          kind: "p",
          text: "VI(C) Referral Fees: disclose to your employer, clients, and prospects — BEFORE entering the arrangement or accepting the service — any compensation, consideration, or benefit received from or paid to others for the recommendation of products or services. The disclosure must cover the nature and value of the benefit (flat fee, percentage, soft benefit like reciprocal referrals). Timing is the tested element: telling the client about the referral fee after they have signed is too late. The purpose: the client deserves to know a recommendation was paid for, and to evaluate any partiality and the true cost of the service, before relying on it.",
        },
      ],
    },
    {
      heading: "Standard VII: Your duties to the CFA program itself",
      blocks: [
        {
          kind: "p",
          text: "VII(A) Conduct as Participants in CFA Institute Programs: do not engage in conduct that compromises the reputation or integrity of CFA Institute or the integrity, validity, or security of its programs. Cheating in any form; sharing actual exam questions afterward (including 'I remember a question about X' posted to a forum — that discloses confidential exam content); using exam access or volunteer positions (graders, item writers) to benefit yourself or others; violating testing-center rules (writing after time is called is the canonical example) — all violations. Important counterweight: VII(A) does NOT gag your opinions. You may publicly criticize CFA Institute, its policies, or the exam program itself. Expressing opinions is protected; revealing confidential exam CONTENT is not.",
        },
        {
          kind: "p",
          text: "VII(B) Reference to CFA Institute, the Designation, and the Program: do not misrepresent or exaggerate the meaning or implications of membership, candidacy, or the charter. The mechanical rules are free points if you memorize them. The CFA designation is an adjective, never a noun — 'Jane Smith, CFA' or 'a CFA charterholder,' never 'Jane is a CFA.' There is no such credential as 'CFA Level II': you may state factually 'passed Level II of the CFA Program' or 'CFA Level III candidate' (only if registered for the next sitting). 'CFA, expected 2027' and 'charter pending' are prohibited — they imply a partial designation. Stating that charterholders are MORE LIKELY to be ethical or competent as a group is acceptable as opinion about the program's rigor; claiming the charter GUARANTEES better performance is a violation. And membership requires staying active: letting your dues lapse or failing to file the annual Professional Conduct Statement means you must stop using the designation until reinstated.",
        },
        {
          kind: "table",
          table: {
            caption: "Designation usage — right vs. wrong.",
            headers: ["Statement", "OK?"],
            rows: [
              ["\"Maria Ruiz, CFA\"", "Yes — adjective after the name"],
              ["\"Maria is a CFA\"", "No — used as a noun"],
              ["\"Passed all three CFA exams on the first attempt\" (true)", "Yes — factual statement"],
              ["\"CFA Level II\" on a business card", "No — implies a partial designation"],
              ["\"Level III candidate in the CFA Program\" (registered for next exam)", "Yes — factual candidacy"],
              ["\"CFA expected 2027\" / \"charter pending\"", "No — anticipates the designation"],
              ["\"The charter means I'll beat the market\"", "No — overstates what the charter implies"],
            ],
          },
        },
      ],
    },
    {
      heading: "GIPS: the Global Investment Performance Standards",
      blocks: [
        {
          kind: "p",
          text: "GIPS exists because performance marketing has historically been a cherry-picker's paradise: show the surviving funds, the best accounts, the favorable window. GIPS is a VOLUNTARY, ethics-based set of standards — created by CFA Institute, applied identically across countries — for calculating and presenting performance so prospective clients can compare managers on full, fair, comparable track records. Compliance is claimed by a FIRM, firm-wide; there is no such thing as partial compliance ('GIPS-compliant except for...') and no individual, composite, or single product can claim it. Only investment management firms that actually manage assets may claim compliance — consultants and software vendors cannot.",
        },
        {
          kind: "p",
          text: "The composite is the central mechanism. A composite aggregates ALL fee-paying, DISCRETIONARY portfolios managed to a similar mandate, strategy, or objective — every such portfolio must live in at least one composite, so the bad accounts cannot be quietly omitted, and terminated portfolios stay in the composite's history through their final full period (killing survivorship bias). Composites must be defined by criteria set BEFORE the fact, not assembled retroactively around good performers. Non-discretionary portfolios (where client restrictions prevent implementing the strategy) are excluded — discretion is the dividing line. A firm initially presents a minimum of FIVE years of GIPS-compliant history (or since firm/composite inception if younger), then builds year by year to at least TEN years. Verification — an independent third party testing the firm's composite construction and processes — is voluntary and applies to the whole firm, not single composites; if performed, it must be disclosed.",
        },
        {
          kind: "callout",
          label: "Tested nuance",
          body: "GIPS compliance can never be claimed for one product or composite — it is firm-wide or nothing. All actual, fee-paying, discretionary portfolios must be in at least one composite. Five years of history to start (building to ten). Verification is optional and firm-wide.",
        },
      ],
    },
    {
      heading: "How to actually answer ethics questions",
      blocks: [
        {
          kind: "p",
          text: "Ethics items are vignettes engineered with one violation (or one compliant act) and two distractors. Work them with a fixed process. Step one: name the sub-standard — not 'this feels shady' but 'this is III(B) fair dealing.' Most distractors cite the WRONG standard accurately. Step two: find the operative word in the facts — 'material,' 'nonpublic,' 'written consent,' 'before,' 'disclosed,' 'reasonable basis.' Ethics answers turn on single qualifiers: a gift disclosed AFTER acceptance, consent that was verbal not written, dissemination to 'his favorite clients first.' Step three: when asked for the best action, prefer the disclose/decline/document/dissociate family over aggressive options, but beware over-correction distractors that call compliant conduct a violation (mosaic theory, preparing to leave an employer, group research you disagree with, client gifts for past performance — all compliant).",
        },
        {
          kind: "bullets",
          items: [
            "Memorize the compliant list — the things that LOOK like violations but are not: mosaic theory; preparing (not soliciting) to compete; using recognized statistical sources without attribution; staying on a group report you disagree with; modest client gifts for past service (disclosed); trading after information becomes public; criticizing CFA Institute.",
            "Memorize the violation list that LOOKS innocent: overheard MNPI acted upon; warning-only supervision; verbal consent where written is required; referral fees disclosed after engagement; simulated results presented as actual; 'CFA' as a noun; sharing exam topics on a forum.",
            "When two answers both seem right, the one with the stricter/safer conduct usually wins — but only if the conduct in the stem actually requires it.",
            "Budget time: ethics stems are long. Read the QUESTION first ('is this a violation of...?'), then read the vignette hunting for that issue.",
          ],
        },
        {
          kind: "p",
          text: "Finally, respect the ethics adjustment. CFA Institute has confirmed for decades that ethics performance breaks ties at the pass/fail margin. If you are at the border — and on exam day you will not know whether you are — your ethics score is the thumb on the scale. Treat this topic like the free alpha it is: it requires zero math, the nuances are finite and listed above, and the same twenty scenarios have been recycled for a generation.",
        },
      ],
    },
  ],
  keyTerms: [
    { term: "Code of Ethics", def: "Six aspirational principles — integrity, clients first, independent judgment, professional practice, market integrity, competence — that the seven Standards make enforceable." },
    { term: "Professional Conduct Program (PCP)", def: "CFA Institute's enforcement arm; investigates complaints and imposes sanctions from private censure up to revocation of the charter. Cannot fine or imprison." },
    { term: "Ethics adjustment", def: "CFA Institute policy of letting ethics performance decide borderline pass/fail results — strong ethics can push a marginal candidate over the line." },
    { term: "Dissociation", def: "The I(A) duty to separate yourself from known violations — escalate first, then remove yourself from the activity; silent continued participation is itself a violation." },
    { term: "Material nonpublic information", def: "Information a reasonable investor would want before trading that has not been disseminated to the market; acting on it or causing others to act violates II(A)." },
    { term: "Mosaic theory", def: "Permitted analysis that combines public information with non-material nonpublic information into a conclusion — even a market-moving one." },
    { term: "Market manipulation", def: "Transaction-based (wash trades, painting the tape) or information-based (false rumors) conduct intended to mislead market participants — intent is the key element." },
    { term: "Soft dollars", def: "Research or services paid for with client brokerage commissions; permissible only when commissions are reasonable and the research benefits the client whose trades paid." },
    { term: "Fair dealing", def: "III(B): treat all clients fairly (not necessarily equally) in recommendations and trades — simultaneous dissemination, pro-rata IPO allocation, clients before the firm and yourself." },
    { term: "Investment Policy Statement (IPS)", def: "The written record of a client's objectives, constraints, and risk tolerance that suitability is judged against; reviewed at least annually." },
    { term: "Beneficial ownership", def: "Accounts a member influences or profits from (spouse, family trusts); these trade LAST under VI(B) — unless they are regular fee-paying client accounts, which trade as clients." },
    { term: "Composite", def: "A GIPS aggregation of ALL fee-paying discretionary portfolios run to a similar strategy; defined ex ante, keeps terminated accounts in history, prevents cherry-picking." },
    { term: "GIPS verification", def: "Optional independent testing of a firm's GIPS processes; performed firm-wide (never on one composite) and disclosed if done." },
    { term: "Whistleblowing", def: "Permitted under IV(A) when protecting clients or market integrity — not when motivated by personal gain." },
    { term: "Record retention", def: "V(C): keep records supporting analysis and recommendations — firm property, recommended seven years where law is silent." },
    { term: "Referral fee disclosure", def: "VI(C): disclose the nature and value of referral compensation to employer, clients, and prospects BEFORE the engagement, not after." },
  ],
  takeaways: [
    "Ethics is 15–20% of the exam and decides borderline results via the ethics adjustment — it is the highest-yield topic per study hour.",
    "Strictest-rule-wins: follow local law when it is stricter than the Code, and the Code when local law is weaker or absent.",
    "II(A) MNPI is the most-tested idea: material + nonpublic = hands off; mosaic theory (public + non-material nonpublic) is permitted analysis.",
    "Fair means fair, not equal: pro-rata hot IPOs, simultaneous dissemination, family CLIENT accounts treated like any client, you trade last.",
    "Departing employees may prepare but not solicit or take records; what is in your head leaves with you, what is on the server does not.",
    "Supervisors need adequate compliance systems and must respond to red flags with investigation plus restriction — warnings alone fail IV(C).",
    "Disclosure timing matters everywhere: conflicts prominently, referral fees BEFORE engagement, additional compensation with written consent FIRST.",
    "GIPS: firm-wide claims only, all fee-paying discretionary accounts in composites, five years building to ten, verification optional.",
  ],
};

export const ethicsQuestions: Question[] = [
  {
    id: "cfa-eth-q5",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 2,
    stem: "An analyst covering an airline accepts the company's offer of a chartered flight to a remote facility tour, as no commercial flights serve the route. Under Standard I(B), this is:",
    choices: [
      "A violation — analysts may never accept issuer-paid travel.",
      "Acceptable, because commercial transport was not a practical alternative.",
      "Acceptable only if the analyst writes a favorable report afterward.",
    ],
    answerIndex: 1,
    explanation:
      "Standard I(B) guidance: use commercial transportation at the firm's expense when feasible; when it is not feasible — a remote site with no commercial service — accepting issuer-arranged transport is acceptable. Choice A overstates the rule into an absolute ban, which is exactly the kind of over-correction distractor the exam loves. Choice C is backwards: linking the benefit to a favorable conclusion is precisely what would CREATE the violation.",
  },
  {
    id: "cfa-eth-q6",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 2,
    stem: "A client is so pleased with last year's returns that she gives her portfolio manager a weekend resort stay. A different client offers the same manager a bonus if the portfolio beats its benchmark NEXT year. Under the Standards, the manager should:",
    choices: [
      "Decline both — benefits from clients always compromise independence.",
      "Accept the resort stay with disclosure to his employer; obtain written consent from his employer before accepting the future-performance bonus.",
      "Accept both, since they come from clients rather than covered companies.",
    ],
    answerIndex: 1,
    explanation:
      "The gift rules split by timing and source. A client gift for PAST performance may be accepted with disclosure to the employer (it cannot bias work already done, but the employer needs to monitor favoritism). An incentive tied to FUTURE performance is an additional compensation arrangement under IV(B), requiring written consent from all parties — especially the employer — BEFORE acceptance. A is too strict (client gifts are treated leniently); C ignores the future-incentive problem entirely.",
  },
  {
    id: "cfa-eth-q7",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 2,
    stem: "While riding an elevator, an analyst overhears two executives of a public company discussing an unannounced merger. He does not trade, but he moves the stock from 'hold' to 'buy' in that afternoon's research note. He has:",
    choices: [
      "Not violated the Standards, because he neither traded nor was deliberately tipped.",
      "Violated Standard II(A), because changing the recommendation is acting on material nonpublic information.",
      "Violated Standard II(B) by manipulating the market with his note.",
    ],
    answerIndex: 1,
    explanation:
      "Standard II(A) prohibits ACTING or CAUSING OTHERS TO ACT on material nonpublic information — trading is not required. A recommendation change based on the overheard merger causes clients to act on MNPI. How he came by the information is irrelevant: overheard information still counts as possessed. Choice A is the trap for candidates who think II(A) requires a tip or a trade. Choice C misfires — there is no intent to deceive the market, so manipulation is not the issue.",
  },
  {
    id: "cfa-eth-q8",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 3,
    stem: "A pension manager directs client trades to a broker whose commissions are 20% above the lowest available, in exchange for research used to manage that same pension account. Best execution is otherwise comparable. This arrangement:",
    choices: [
      "Violates Standard III(A) because clients must always pay the lowest commission available.",
      "Is permissible soft-dollar use, because the commissions are reasonable and the research benefits the client whose brokerage paid for it.",
      "Violates Standard VI(C) as an undisclosed referral fee.",
    ],
    answerIndex: 1,
    explanation:
      "Client brokerage is a client asset, so soft dollars must satisfy two tests: reasonable commissions, and research that benefits THE CLIENT whose trades generate them. Both hold here. III(A) does not mandate the absolute lowest commission — it mandates prudent use of client assets, and paying somewhat more for research that improves management of that client's account qualifies. Choice A invents a 'lowest commission' rule that does not exist. Choice C mislabels the arrangement: soft dollars are not referral compensation.",
  },
  {
    id: "cfa-eth-q9",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 2,
    stem: "A conservative retiree's adviser receives her insistent, unsolicited order to put 3% of her diversified portfolio into a speculative biotech stock. The adviser believes the position is unsuitable in isolation but immaterial to the total portfolio. Under Standard III(C), the adviser should:",
    choices: [
      "Refuse the trade, because speculative stocks are unsuitable for conservative clients.",
      "Discuss the concerns with the client and may then execute, since the impact on the total portfolio is minimal.",
      "Execute the trade only after removing the stock from all other client portfolios.",
    ],
    answerIndex: 1,
    explanation:
      "Suitability is judged at the TOTAL PORTFOLIO level, and unsolicited client-directed trades follow a specific path: explain why the trade may be unsuitable; if the impact on the overall portfolio is minimal, the adviser may follow the client's instruction (documenting the conversation). Refusal (A) ignores both the portfolio context and the client's right to direct her own account on immaterial positions. Choice C is nonsense designed to sound procedural. Had the trade materially changed the portfolio's risk, the adviser would need an IPS update or to consider whether to continue the relationship.",
  },
  {
    id: "cfa-eth-q10",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 2,
    stem: "A departing manager, the night before resigning, emails herself a spreadsheet of client names and phone numbers that she personally compiled over ten years. After resigning she uses it to invite clients to her new firm. She has:",
    choices: [
      "Complied with the Standards, because she created the spreadsheet herself.",
      "Violated Standard IV(A), because client records are employer property regardless of who compiled them.",
      "Complied with the Standards, because she waited until after resigning to contact the clients.",
    ],
    answerIndex: 1,
    explanation:
      "Authorship does not equal ownership. Work product created in the course of employment — client lists, models, reports — belongs to the employer, and taking it (paper or digital) misappropriates firm property under IV(A). The compliant route: leave the records, then contact clients from memory using public directories (absent a non-compete). Choice A is the classic 'but I built it' trap. Choice C fixes the solicitation timing but not the theft of records — the violation already occurred with the email.",
  },
  {
    id: "cfa-eth-q11",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 3,
    stem: "An analyst on a five-person research team disagrees with the team's final 'buy' conclusion, which she believes is too optimistic, though she concedes the team's process was thorough and its basis reasonable. The report will be issued under the group's name, including hers. She should:",
    choices: [
      "Demand her name be removed and dissociate from the report.",
      "Allow her name to remain, because the report has a reasonable and adequate basis despite her disagreement.",
      "Report the disagreement to compliance under Standard I(A).",
    ],
    answerIndex: 1,
    explanation:
      "Standard V(A) requires a reasonable and adequate basis — not unanimity. When a group's conclusion is built on a sound, independent process, a dissenting member need not dissociate and may remain named on the report. Dissociation (A) is required for violations, and a well-founded conclusion she happens to disagree with is not a violation. Choice C escalates a legitimate difference of opinion into a compliance matter — there is no violation to report. This is one of the exam's favorite 'looks like a violation, isn't' patterns.",
  },
  {
    id: "cfa-eth-q12",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 2,
    stem: "A financial planner receives $500 from a local accountant for every client she refers. She mentions this arrangement to referred clients during their second meeting, after they have signed the advisory agreement. Under Standard VI(C), she has:",
    choices: [
      "Complied, because the fee was disclosed to the clients.",
      "Violated the Standard, because referral compensation must be disclosed before the client engages the service.",
      "Complied, because referral fees under $1,000 are exempt from disclosure.",
    ],
    answerIndex: 1,
    explanation:
      "VI(C) requires disclosing the nature and value of referral compensation to clients and prospects BEFORE entering into the engagement — the point is to let the client weigh the recommendation's partiality and full cost before relying on it. Disclosure after signing defeats that purpose entirely. Choice A tests whether you know that disclosure has a TIMING requirement, not just an existence requirement. Choice C invents a de minimis exemption that does not exist.",
  },
  {
    id: "cfa-eth-q13",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 2,
    stem: "After passing Level III but before receiving his charter, a candidate prints business cards reading 'Alex Kim, CFA (expected 2027).' This:",
    choices: [
      "Is acceptable because the statement is factually accurate.",
      "Violates Standard VII(B) — referencing an expected designation is prohibited.",
      "Is acceptable because he has completed all three exams.",
    ],
    answerIndex: 1,
    explanation:
      "VII(B) prohibits anticipating the designation: 'CFA expected,' 'charter pending,' and similar formulations imply a partial credential that does not exist. What IS permitted is a plain factual statement: 'Passed all three levels of the CFA Program' or 'awaiting award of the charter' in resume prose. Choices A and C both rest on factual accuracy — but VII(B) is about implication, not just accuracy, and the card format implies he holds something he does not yet hold.",
  },
  {
    id: "cfa-eth-q14",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 3,
    stem: "A firm presents a marketing track record that excludes two accounts that terminated after severe losses, and includes simulated results for years before the strategy launched, labeled in a footnote. Which Standard is MOST directly violated?",
    choices: [
      "Standard III(D) Performance Presentation.",
      "Standard II(B) Market Manipulation.",
      "Standard VI(A) Disclosure of Conflicts.",
    ],
    answerIndex: 0,
    explanation:
      "Dropping terminated losing accounts creates survivorship bias, and blending simulated history with actual results (a footnote does not cure a misleading headline presentation) makes the record neither fair, accurate, nor complete — the core of III(D). II(B) targets conduct intended to distort market prices or volume, not marketing materials. VI(A) governs conflicts of interest, which is not the central defect here. Under GIPS, both practices are squarely prohibited: terminated portfolios remain in composite history and simulated performance cannot be linked to actual performance.",
  },
  {
    id: "cfa-eth-q15",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 2,
    stem: "Which statement about GIPS compliance is most accurate?",
    choices: [
      "A firm may claim compliance for its flagship composite while excluding others.",
      "Compliance requires including all fee-paying discretionary portfolios in at least one composite, with a minimum five years of history (or since inception), building to ten.",
      "Verification by an independent third party is required before a firm may claim compliance.",
    ],
    answerIndex: 1,
    explanation:
      "GIPS is firm-wide or nothing: every actual, fee-paying, discretionary portfolio must belong to at least one composite, the firm initially shows at least five years of compliant history (or since inception for younger firms/composites), and extends annually to at least ten. Choice A describes partial compliance, which is prohibited — no cherry-picking the flagship. Choice C overstates verification: it is recommended and must be disclosed if performed, but it is voluntary, and it is performed on the whole firm, never a single composite.",
  },
  {
    id: "cfa-eth-q16",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethics",
    difficulty: 3,
    stem: "A supervisor is offered oversight of a trading desk at a firm she knows has no written compliance procedures. Under Standard IV(C), her best course of action is to:",
    choices: [
      "Accept the role and supervise as well as she personally can.",
      "Decline supervisory responsibility in writing until the firm adopts adequate compliance procedures.",
      "Accept the role but document that she objected to the missing procedures.",
    ],
    answerIndex: 1,
    explanation:
      "IV(C) requires reasonable efforts to detect and prevent violations, which presupposes an adequate compliance system. Accepting supervision where no system exists makes violations by subordinates effectively her violations — personal diligence (A) cannot substitute for procedures, training, and monitoring. The Standards' guidance is explicit: decline supervisory responsibility in writing until reasonable procedures are adopted. Choice C documents the problem while still accepting accountability for an unsupervisable desk — a paper trail to her own violation.",
  },
];
