// ============================================================
// Certus — Series 66 (Uniform Combined State Law) textbook-depth content
// Four deep readings + aligned questions covering state securities law,
// investment adviser regulation, portfolio theory, and ethics. Wired into
// series66Content ahead of the lighter chapters.
// ============================================================

import { Chapter, Question } from "./types";

export const s66DeepChapters: Chapter[] = [
  {
    id: "s66-usa-deep",
    examSlug: "series-66",
    topicId: "registration",
    topicName: "State Registration",
    title: "The Uniform Securities Act and State Registration",
    readingMinutes: 56,
    summary:
      "The framework of state securities regulation — the Uniform Securities Act and the role of the Administrator, the key defined persons (broker-dealer, agent, investment adviser, IAR), how each registers, and the difference between an exclusion and an exemption.",
    intro:
      "The Series 66 is built on the UNIFORM SECURITIES ACT (USA) — the model 'blue-sky' law that states adopt to regulate securities at the state level. This reading covers the state ADMINISTRATOR and its powers, the precise definitions of the persons the Act regulates, how broker-dealers, agents, advisers, and their representatives register, and the all-important distinction between being EXCLUDED from a definition and being EXEMPT from registration.",
    sections: [
      {
        heading: "1. The Act and the Administrator",
        blocks: [
          { kind: "p", text: "The UNIFORM SECURITIES ACT is a model law (the basis of state 'BLUE-SKY' laws) regulating securities within each state. It is enforced by the state ADMINISTRATOR — the official or agency overseeing securities in that state. The Administrator has broad authority: to require registration, conduct INVESTIGATIONS (including issuing subpoenas and administering oaths), issue cease-and-desist ORDERS, DENY/SUSPEND/REVOKE registrations, and refer matters for civil or criminal action. The Act's purpose is investor protection at the state level, complementing federal law." },
        ],
      },
      {
        heading: "2. The defined persons",
        blocks: [
          { kind: "p", text: "The Act regulates several PERSONS, and precise definitions matter. A BROKER-DEALER is a firm in the business of effecting securities transactions for others or for its own account. An AGENT is an INDIVIDUAL who represents a broker-dealer (or issuer) in selling securities. An INVESTMENT ADVISER (IA) is a firm that, for compensation, is in the business of advising on securities. An INVESTMENT ADVISER REPRESENTATIVE (IAR) is an individual who represents an IA. Note the firm-versus-individual pattern: broker-dealers and investment advisers are FIRMS; agents and IARs are the INDIVIDUALS who work for them." },
          { kind: "callout", label: "Firm vs individual", body: "BROKER-DEALER and INVESTMENT ADVISER are firms. AGENT (of a BD) and INVESTMENT ADVISER REPRESENTATIVE (of an IA) are the individuals. Registration requirements and exclusions differ by which you are." },
        ],
      },
      {
        heading: "3. Registration of persons",
        blocks: [
          { kind: "p", text: "Persons generally must REGISTER in a state to do business there. Registration involves filing an application (Form BD for broker-dealers, Form U4 for individuals, Form ADV for advisers), paying fees, and meeting any financial requirements (such as minimum net capital or a surety bond for those with custody or discretion). Registration becomes EFFECTIVE at noon on the 30th day after a complete filing, absent action by the Administrator. An agent's registration is tied to their employing broker-dealer — if the agent moves firms, all three (the agent, the old firm, and the new firm) must notify the Administrator." },
        ],
      },
      {
        heading: "4. Exclusions and exemptions",
        blocks: [
          { kind: "p", text: "Two concepts reduce who must register, and the Series 66 tests the difference. An EXCLUSION means a person does NOT meet the definition in the first place — for example, an agent definition excludes certain clerical employees, and the broker-dealer definition excludes a firm with no office in a state that deals only with existing clients passing through or with institutions. An EXEMPTION means a person (or security) meets the definition but is RELIEVED of registration — for example, certain securities (government, municipal) are exempt, and certain transactions are exempt. FEDERAL COVERED advisers (generally those with $100 million or more in assets under management) register with the SEC instead of the states, though states retain antifraud authority and may require notice filings. The chapter's core: the Uniform Securities Act is enforced by the state Administrator with broad investigative and disciplinary powers; broker-dealers and investment advisers are firms while agents and IARs are individuals; persons register via Forms BD/U4/ADV with effectiveness at noon on the 30th day; and an exclusion means you don't meet the definition while an exemption relieves a person who does. Over-learn the firm-vs-individual definitions and exclusion-vs-exemption." },
        ],
      },
    ],
    keyTerms: [
      { term: "Uniform Securities Act (USA)", def: "Model 'blue-sky' law states adopt to regulate securities." },
      { term: "Administrator", def: "State securities regulator enforcing the Act with broad powers." },
      { term: "Broker-dealer", def: "A FIRM effecting securities transactions for others or its own account." },
      { term: "Agent", def: "An INDIVIDUAL representing a broker-dealer (or issuer) in selling securities." },
      { term: "Investment adviser (IA)", def: "A FIRM that, for compensation, advises on securities." },
      { term: "Investment adviser representative (IAR)", def: "An INDIVIDUAL representing an investment adviser." },
      { term: "Registration forms", def: "Form BD (broker-dealers), Form U4 (individuals), Form ADV (advisers)." },
      { term: "Effective date", def: "Noon on the 30th day after a complete filing, absent Administrator action." },
      { term: "Exclusion", def: "The person does not meet the statutory definition at all." },
      { term: "Exemption", def: "The person/security meets the definition but is relieved of registration." },
      { term: "Federal covered adviser", def: "Generally $100M+ AUM; registers with the SEC, not the states." },
    ],
    takeaways: [
      "The Uniform Securities Act is the model state 'blue-sky' law, enforced by the state Administrator with broad investigative and disciplinary powers.",
      "Broker-dealers and investment advisers are firms; agents and investment adviser representatives are the individuals who work for them.",
      "Persons register by filing (Form BD, U4, or ADV), paying fees, and meeting financial requirements; registration is effective at noon on the 30th day.",
      "An exclusion means a person does not meet the definition; an exemption relieves a person who does meet it from registration.",
      "Federal covered advisers (generally $100M+ in AUM) register with the SEC rather than the states, which retain antifraud authority.",
      "An agent's registration is tied to the employing broker-dealer; changing firms requires notice by all parties.",
    ],
  },

  {
    id: "s66-ia-deep",
    examSlug: "series-66",
    topicId: "ia-regulation",
    topicName: "Investment Adviser Regulation",
    title: "Investment Adviser Regulation and Fiduciary Duty",
    readingMinutes: 56,
    summary:
      "How investment advisers are defined and regulated — the ABC test for who is an adviser, the federal-versus-state registration split, the fiduciary duty advisers owe clients, and the brochure, custody, and contract rules.",
    intro:
      "Investment advisers are held to the highest standard in the industry — a FIDUCIARY duty — and the Series 66 tests both who qualifies as an adviser and the rules they must follow. This reading covers the ABC test that defines an adviser, the Dodd-Frank line between SEC and state registration, the fiduciary obligations of care and loyalty, and the brochure, custody, and contract requirements.",
    sections: [
      {
        heading: "1. Who is an investment adviser? The ABC test",
        blocks: [
          { kind: "p", text: "Under the Investment Advisers Act of 1940, a person is an INVESTMENT ADVISER if they meet the 'ABC TEST': they provide ADVICE about securities, as a BUSINESS, for COMPENSATION. All three prongs must be met. This is why a person who gives incidental advice without separate compensation (like an accountant or lawyer whose advice is incidental to their profession) may be EXCLUDED, and why broker-dealers whose advice is 'solely incidental' and who receive no special compensation for it have historically been excluded. Financial planners who hold themselves out as advisers and charge for it generally ARE advisers." },
        ],
      },
      {
        heading: "2. Federal vs state registration",
        blocks: [
          { kind: "p", text: "Since the Dodd-Frank Act, registration depends on ASSETS UNDER MANAGEMENT. Advisers with $100 MILLION OR MORE in AUM (and those advising registered investment companies) are FEDERAL COVERED and register with the SEC. Advisers with LESS than $100 million generally register with the STATE(S) where they do business. A middle band of 'mid-sized' advisers ($25–100 million) registers with the state unless the state doesn't examine advisers, in which case they register with the SEC. State-registered advisers use the SEC's IARD system and file Form ADV; the states retain antifraud authority over all advisers." },
          { kind: "table", table: { caption: "Adviser registration by AUM", headers: ["Assets under management", "Register with"], rows: [["$100 million or more", "SEC (federal covered)"], ["$25–100 million (mid-sized)", "State (or SEC if state doesn't examine)"], ["Under $25 million", "State"]] } },
        ],
      },
      {
        heading: "3. Fiduciary duty",
        blocks: [
          { kind: "p", text: "An investment adviser is a FIDUCIARY and must act in the client's BEST INTEREST at all times — a higher standard than a broker-dealer's. The fiduciary duty has two parts: the DUTY OF CARE (provide suitable advice, seek best execution, and monitor) and the DUTY OF LOYALTY (put the client first, avoid or fully DISCLOSE conflicts of interest, and not favor the adviser's own interests). Material conflicts — compensation arrangements, proprietary products, soft-dollar practices — must be disclosed so the client can give informed consent." },
        ],
      },
      {
        heading: "4. Brochure, custody, and contracts",
        blocks: [
          { kind: "p", text: "Several specific rules implement the fiduciary duty. The BROCHURE RULE requires delivery of FORM ADV PART 2 (the plain-English 'brochure' describing services, fees, conflicts, and disciplinary history) to clients at or before entering an advisory agreement. CUSTODY of client assets triggers heightened safeguards — using a qualified custodian, account statements, and a SURPRISE annual examination — because holding client funds creates risk. Advisory CONTRACTS must be in writing (under state law), describe the services and fees, may not generally charge PERFORMANCE-BASED fees except to qualified clients, and may not be ASSIGNED to another adviser without the client's consent. The chapter's core: an adviser meets the ABC test (advice + business + compensation); registers with the SEC at $100M+ AUM or the state below that; owes a fiduciary duty of care and loyalty with conflicts disclosed; and must deliver Form ADV Part 2, safeguard any custody, and use written contracts that can't be assigned without consent. Over-learn the ABC test and the $100 million registration threshold." },
        ],
      },
    ],
    keyTerms: [
      { term: "ABC test", def: "An adviser provides Advice on securities, as a Business, for Compensation (all three)." },
      { term: "Investment Advisers Act of 1940", def: "Federal law defining and regulating investment advisers." },
      { term: "Incidental advice exclusion", def: "Professionals whose securities advice is incidental and uncompensated may be excluded." },
      { term: "Federal covered adviser", def: "$100M+ AUM (or advises funds); registers with the SEC." },
      { term: "State registration", def: "Advisers under $100M generally register with the state(s)." },
      { term: "Mid-sized adviser", def: "$25–100M; state-registered unless the state doesn't examine advisers." },
      { term: "Fiduciary duty", def: "Act in the client's best interest: duties of care and loyalty." },
      { term: "Conflict disclosure", def: "Material conflicts must be disclosed for informed client consent." },
      { term: "Brochure rule (Form ADV Part 2)", def: "Deliver a plain-English disclosure of services, fees, conflicts before contracting." },
      { term: "Custody safeguards", def: "Qualified custodian, statements, and a surprise annual exam." },
      { term: "Advisory contract rules", def: "Written, describing fees; no assignment without consent; limited performance fees." },
    ],
    takeaways: [
      "A person is an investment adviser under the ABC test: providing advice on securities, as a business, for compensation (all three prongs).",
      "Advisers with $100 million or more in AUM register with the SEC (federal covered); those below generally register with the state.",
      "Mid-sized advisers ($25–100M) register with the state unless the state doesn't examine advisers.",
      "An adviser is a fiduciary owing duties of care and loyalty — acting in the client's best interest and disclosing material conflicts.",
      "The brochure rule requires delivering Form ADV Part 2 (services, fees, conflicts) before entering an advisory agreement.",
      "Custody triggers heightened safeguards (qualified custodian, surprise audit); contracts must be written and can't be assigned without client consent.",
    ],
  },

  {
    id: "s66-portfolio-deep",
    examSlug: "series-66",
    topicId: "portfolio-theory",
    topicName: "Portfolio Management",
    title: "Portfolio Management: Theory, Risk, and Strategies",
    readingMinutes: 56,
    summary:
      "The investment concepts behind advice — modern portfolio theory and diversification, systematic versus unsystematic risk and beta, the CAPM expected-return relationship, and the asset allocation and management strategies advisers apply.",
    intro:
      "The Series 66 expects an adviser to understand the THEORY behind portfolio construction. This reading covers modern portfolio theory and how diversification reduces risk, the split between systematic and unsystematic risk and the role of beta, the Capital Asset Pricing Model that prices risk, and the asset-allocation and active/passive strategies used to build and manage portfolios around a client's profile.",
    sections: [
      {
        heading: "1. Modern portfolio theory and diversification",
        blocks: [
          { kind: "p", text: "MODERN PORTFOLIO THEORY (MPT) holds that investors should evaluate securities not in isolation but by their contribution to the whole PORTFOLIO's risk and return. The key insight is DIVERSIFICATION: combining assets whose returns are not perfectly correlated reduces portfolio risk without necessarily reducing expected return, because their ups and downs partly offset. The lower the CORRELATION between assets, the greater the diversification benefit. The set of portfolios offering the highest expected return for each level of risk forms the EFFICIENT FRONTIER, and rational investors choose a portfolio on it that matches their risk tolerance." },
        ],
      },
      {
        heading: "2. Systematic vs unsystematic risk and beta",
        blocks: [
          { kind: "p", text: "Total risk splits into two parts. UNSYSTEMATIC (diversifiable) risk is specific to a company or industry and can be largely eliminated by diversification. SYSTEMATIC (market) risk affects the whole market — interest rates, inflation, recessions — and CANNOT be diversified away. BETA measures a security's systematic risk relative to the market: a beta of 1.0 moves with the market, above 1.0 is more volatile, and below 1.0 is less volatile. Because only systematic risk can't be diversified, it is the risk for which investors are compensated." },
        ],
      },
      {
        heading: "3. The Capital Asset Pricing Model",
        blocks: [
          { kind: "p", text: "The CAPITAL ASSET PRICING MODEL (CAPM) prices that systematic risk: a security's expected return equals the risk-free rate plus its beta times the market RISK PREMIUM (the market's expected return minus the risk-free rate). The higher the beta, the higher the required return. CAPM underlies the idea that investors must be paid more to bear more non-diversifiable risk." },
          { kind: "formula", formula: { label: "CAPM expected return", expr: "E(R) = R_f + β × (R_market − R_f)", note: "Risk-free rate plus beta times the market risk premium. Higher beta → higher required return." } },
          { kind: "example", example: { title: "CAPM in action", prompt: "The risk-free rate is 3%, the expected market return is 9%, and a stock's beta is 1.5. What is its expected return under CAPM?", steps: ["Market risk premium = 9% − 3% = 6%.", "Beta × risk premium = 1.5 × 6% = 9%.", "E(R) = 3% + 9% = 12%."], answer: "12%. The stock's above-market beta (1.5) demands a return above the 9% market return, compensating investors for its greater systematic risk." } },
        ],
      },
      {
        heading: "4. Strategies and the client profile",
        blocks: [
          { kind: "p", text: "Advisers turn theory into practice through ASSET ALLOCATION — dividing a portfolio among asset classes (stocks, bonds, cash, alternatives) to match the client's objectives and risk tolerance — which drives most of a portfolio's long-run results. STRATEGIC allocation sets long-term targets; TACTICAL allocation makes shorter-term tilts; and REBALANCING restores targets as markets drift. Management can be PASSIVE (indexing to match a benchmark at low cost) or ACTIVE (security selection and timing to beat it). All of this flows from the CLIENT PROFILE — objectives (growth, income, preservation), risk tolerance, time horizon, liquidity needs, and tax situation — captured in an investment policy statement. The chapter's core: MPT and diversification reduce risk through low-correlation assets toward the efficient frontier; only systematic risk (measured by beta) can't be diversified and is what CAPM prices via E(R) = R_f + β(R_m − R_f); and advisers implement this through asset allocation and active/passive strategies matched to the client profile. Over-learn the CAPM formula and the systematic/unsystematic distinction." },
        ],
      },
    ],
    keyTerms: [
      { term: "Modern portfolio theory (MPT)", def: "Evaluate securities by their contribution to portfolio risk and return." },
      { term: "Diversification", def: "Combining low-correlation assets to reduce risk without sacrificing expected return." },
      { term: "Correlation", def: "Lower correlation between assets means greater diversification benefit." },
      { term: "Efficient frontier", def: "Portfolios with the highest expected return for each level of risk." },
      { term: "Unsystematic risk", def: "Company/industry-specific; diversifiable." },
      { term: "Systematic (market) risk", def: "Affects the whole market; cannot be diversified away." },
      { term: "Beta", def: "Measure of systematic risk vs the market (1.0 = market, >1 more volatile)." },
      { term: "CAPM", def: "E(R) = R_f + β(R_market − R_f); prices systematic risk." },
      { term: "Market risk premium", def: "Expected market return minus the risk-free rate." },
      { term: "Asset allocation", def: "Dividing the portfolio among asset classes per the client profile." },
      { term: "Active vs passive", def: "Beating a benchmark via selection/timing vs indexing to match it." },
      { term: "Client profile", def: "Objectives, risk tolerance, time horizon, liquidity, and taxes; basis of the IPS." },
    ],
    takeaways: [
      "Modern portfolio theory evaluates securities by their contribution to the whole portfolio; diversifying with low-correlation assets reduces risk.",
      "The efficient frontier holds the portfolios with the highest expected return for each level of risk.",
      "Unsystematic (company-specific) risk is diversifiable; systematic (market) risk, measured by beta, is not.",
      "CAPM prices systematic risk: E(R) = risk-free rate + beta × the market risk premium; higher beta demands higher return.",
      "Asset allocation across classes (strategic and tactical, with rebalancing) drives most long-run results.",
      "Strategy and allocation flow from the client profile — objectives, risk tolerance, time horizon, liquidity, and taxes — in an investment policy statement.",
    ],
  },

  {
    id: "s66-ethics-deep",
    examSlug: "series-66",
    topicId: "business-practices",
    topicName: "Ethics & Business Practices",
    title: "Ethics, Fiduciary Practices, and Prohibited Conduct",
    readingMinutes: 52,
    summary:
      "The conduct standards for advisers and agents — fraud and misrepresentation, suitability and disclosure, conflicts and custody concerns, and the specific prohibited practices that draw regulatory action.",
    intro:
      "Ethics and prohibited business practices are a heavy part of the Series 66, applying both the fiduciary standard for advisers and the antifraud rules for everyone. This reading covers the broad antifraud prohibition, the disclosure and suitability obligations, and the specific PROHIBITED PRACTICES — from churning to misrepresentation to unauthorized trading — that the Administrator polices.",
    sections: [
      {
        heading: "1. The antifraud standard",
        blocks: [
          { kind: "p", text: "The Uniform Securities Act's antifraud provisions apply to ALL persons in connection with the offer, sale, or purchase of securities — even those exempt from registration. It is unlawful to employ any device or scheme to DEFRAUD, to make UNTRUE statements of material fact (or omit material facts), or to engage in any act that operates as a fraud or deceit. This broad standard underlies most of the specific prohibitions and reaches misleading communications, false performance claims, and material omissions." },
        ],
      },
      {
        heading: "2. Suitability and disclosure",
        blocks: [
          { kind: "p", text: "Recommendations must be SUITABLE for the client based on their financial situation, objectives, and needs — and for advisers, recommendations must meet the higher FIDUCIARY 'best interest' standard. Full DISCLOSURE is essential: advisers must disclose material CONFLICTS of interest, their CAPACITY in a transaction (acting as agent or principal), and all fees and compensation. An adviser acting as a PRINCIPAL or in an AGENCY CROSS transaction (representing both sides) must disclose that and obtain client consent. Failure to disclose, or making unsuitable recommendations, violates the conduct rules." },
        ],
      },
      {
        heading: "3. Prohibited practices",
        blocks: [
          { kind: "p", text: "A long list of practices is prohibited. CHURNING (excessive trading for commissions), UNSUITABLE recommendations, UNAUTHORIZED transactions (trading without authority), and MISREPRESENTATION or omission of material facts. COMMINGLING client funds with the firm's, MARKET MANIPULATION (false trading activity), FRONT-RUNNING (trading ahead of a client order), and INSIDER TRADING are all forbidden. Advisers may not GUARANTEE against loss, BORROW from or LEND to clients (except in limited cases such as lending institutions), or exercise DISCRETION without prior written authority. Misusing the term 'investment counsel' or implying the Administrator has approved one's qualifications is also prohibited." },
          { kind: "callout", label: "Common exam traps", body: "Guaranteeing a client against loss, sharing in account profits/losses without authorization and proportional investment, exercising discretion without WRITTEN authority, and borrowing from a non-institutional client are all classic prohibited practices." },
        ],
      },
      {
        heading: "4. Communications and synthesis",
        blocks: [
          { kind: "p", text: "Communications with the public must be fair and not misleading. Performance ADVERTISING must not cherry-pick or imply guaranteed results; testimonials and past-performance claims are tightly governed. Records must be maintained, and any custody of client assets demands extra safeguards. The chapter's core: the antifraud standard applies to everyone and forbids deception, untrue statements, and material omissions; recommendations must be suitable (and in a client's best interest for advisers) with full disclosure of conflicts, capacity, and fees; and a specific list of practices — churning, unauthorized trading, commingling, manipulation, front-running, guaranteeing against loss, unauthorized discretion — is prohibited. Over-learn the antifraud reach and the prohibited-practices list, the most heavily tested Series 66 area." },
        ],
      },
    ],
    keyTerms: [
      { term: "Antifraud provisions", def: "Apply to all persons; forbid deception, untrue statements, and material omissions in securities transactions." },
      { term: "Suitability", def: "Recommendations must fit the client's situation, objectives, and needs." },
      { term: "Fiduciary best-interest standard", def: "Advisers must put the client first, beyond mere suitability." },
      { term: "Conflict / capacity disclosure", def: "Disclose material conflicts and whether acting as agent or principal." },
      { term: "Agency cross transaction", def: "Adviser represents both sides; requires disclosure and consent." },
      { term: "Churning", def: "Excessive trading to generate commissions." },
      { term: "Unauthorized trading", def: "Effecting transactions without the client's authority." },
      { term: "Commingling", def: "Mixing client funds with the firm's; prohibited." },
      { term: "Front-running / manipulation", def: "Trading ahead of a client order / creating false market activity." },
      { term: "Guaranteeing against loss", def: "Prohibited; no person may guarantee a client against loss." },
      { term: "Unauthorized discretion", def: "Exercising discretion without prior written authority; prohibited." },
    ],
    takeaways: [
      "The antifraud provisions apply to all persons (even exempt ones) and forbid schemes to defraud, untrue statements of material fact, and material omissions.",
      "Recommendations must be suitable — and for advisers, in the client's best interest — with full disclosure of conflicts, capacity, and fees.",
      "Acting as principal or in an agency cross transaction requires disclosure and client consent.",
      "Prohibited practices include churning, unauthorized trading, commingling, market manipulation, front-running, and insider trading.",
      "Advisers may not guarantee against loss, borrow from non-institutional clients, or exercise discretion without prior written authority.",
      "Public communications and performance advertising must be fair and not misleading; custody demands extra safeguards.",
    ],
  },
];

export const s66DeepQuestions: Question[] = [
  {
    id: "s66-usa-d1", examSlug: "series-66", topicId: "registration", topicName: "State Registration", difficulty: 2,
    stem: "Under the Uniform Securities Act, which is a FIRM rather than an individual?",
    choices: ["Agent", "Investment adviser representative", "Broker-dealer", "Solicitor"],
    answerIndex: 2,
    explanation: "Broker-dealers and investment advisers are firms; agents (of a BD) and investment adviser representatives (of an IA) are the individuals who work for them. This firm-vs-individual distinction drives the registration rules.",
  },
  {
    id: "s66-usa-d2", examSlug: "series-66", topicId: "registration", topicName: "State Registration", difficulty: 2,
    stem: "Absent action by the Administrator, a person's state registration becomes effective:",
    choices: ["Immediately upon filing", "At noon on the 30th day after a complete filing", "After one year", "Only after an exam is passed"],
    answerIndex: 1,
    explanation: "Under the Uniform Securities Act, registration becomes effective at noon on the 30th day after a complete application is filed, unless the Administrator takes action or sets a different date.",
  },
  {
    id: "s66-usa-d3", examSlug: "series-66", topicId: "registration", topicName: "State Registration", difficulty: 3,
    stem: "The difference between an EXCLUSION and an EXEMPTION is that an exclusion means:",
    choices: ["The person is relieved of registration despite meeting the definition", "The person does not meet the statutory definition at all", "The security is fraudulent", "Registration is automatic"],
    answerIndex: 1,
    explanation: "An exclusion means a person does not meet the definition in the first place. An exemption means a person (or security) meets the definition but is relieved of the registration requirement.",
  },
  {
    id: "s66-usa-d4", examSlug: "series-66", topicId: "registration", topicName: "State Registration", difficulty: 2,
    stem: "Which power does the state Administrator have under the Uniform Securities Act?",
    choices: ["Setting federal tax rates", "Issuing cease-and-desist orders and conducting investigations", "Approving the merit of every security as a good investment", "Guaranteeing investor returns"],
    answerIndex: 1,
    explanation: "The Administrator can investigate, subpoena, issue cease-and-desist orders, and deny/suspend/revoke registrations. The Administrator does not endorse the investment merit of securities or guarantee returns.",
  },
  {
    id: "s66-ia-d1", examSlug: "series-66", topicId: "ia-regulation", topicName: "Investment Adviser Regulation", difficulty: 2,
    stem: "Under the ABC test, a person is an investment adviser if they provide advice on securities, as a business, AND:",
    choices: ["Hold a license", "Receive compensation", "Work for a bank", "Manage over $1 billion"],
    answerIndex: 1,
    explanation: "The ABC test requires Advice on securities, as a Business, for Compensation — all three. A person giving incidental, uncompensated advice may be excluded from the definition.",
  },
  {
    id: "s66-ia-d2", examSlug: "series-66", topicId: "ia-regulation", topicName: "Investment Adviser Regulation", difficulty: 2,
    stem: "An investment adviser with $150 million in assets under management generally registers with:",
    choices: ["The state only", "The SEC (federal covered)", "FINRA", "The MSRB"],
    answerIndex: 1,
    explanation: "Advisers with $100 million or more in AUM are federal covered and register with the SEC. Advisers below that threshold generally register with the state(s) where they do business.",
  },
  {
    id: "s66-ia-d3", examSlug: "series-66", topicId: "ia-regulation", topicName: "Investment Adviser Regulation", difficulty: 1,
    stem: "An investment adviser's fiduciary duty consists of the duties of:",
    choices: ["Care and loyalty", "Speed and accuracy", "Disclosure and silence", "Profit and growth"],
    answerIndex: 0,
    explanation: "The fiduciary duty comprises the duty of care (suitable advice, best execution, monitoring) and the duty of loyalty (put the client first and disclose conflicts). It is a higher standard than a broker-dealer's.",
  },
  {
    id: "s66-ia-d4", examSlug: "series-66", topicId: "ia-regulation", topicName: "Investment Adviser Regulation", difficulty: 2,
    stem: "The brochure rule requires an adviser to deliver to clients:",
    choices: ["Form U4", "Form ADV Part 2", "A prospectus", "Form BD"],
    answerIndex: 1,
    explanation: "The brochure rule requires delivery of Form ADV Part 2 — a plain-English description of services, fees, conflicts, and disciplinary history — at or before entering into the advisory agreement.",
  },
  {
    id: "s66-pf-d1", examSlug: "series-66", topicId: "portfolio-theory", topicName: "Portfolio Management", difficulty: 2,
    stem: "Beta measures a security's:",
    choices: ["Unsystematic risk", "Systematic (market) risk relative to the market", "Dividend yield", "Credit rating"],
    answerIndex: 1,
    explanation: "Beta measures systematic (market) risk relative to the market: 1.0 moves with the market, above 1.0 is more volatile, below 1.0 less. Only systematic risk can't be diversified away, so it is what investors are compensated for.",
  },
  {
    id: "s66-pf-d2", examSlug: "series-66", topicId: "portfolio-theory", topicName: "Portfolio Management", difficulty: 3,
    stem: "Risk-free rate 3%, expected market return 9%, beta 1.5. The CAPM expected return is:",
    choices: ["9%", "12%", "13.5%", "6%"],
    answerIndex: 1,
    explanation: "E(R) = R_f + β(R_market − R_f) = 3% + 1.5 × (9% − 3%) = 3% + 1.5 × 6% = 3% + 9% = 12%.",
  },
  {
    id: "s66-pf-d3", examSlug: "series-66", topicId: "portfolio-theory", topicName: "Portfolio Management", difficulty: 2,
    stem: "Diversification reduces which type of risk?",
    choices: ["Systematic (market) risk", "Unsystematic (company-specific) risk", "Inflation risk for the whole economy", "Interest-rate risk on all bonds"],
    answerIndex: 1,
    explanation: "Diversification reduces unsystematic, company- or industry-specific risk by combining assets whose returns are not perfectly correlated. Systematic market risk cannot be diversified away.",
  },
  {
    id: "s66-pf-d4", examSlug: "series-66", topicId: "portfolio-theory", topicName: "Portfolio Management", difficulty: 1,
    stem: "The efficient frontier represents portfolios that offer:",
    choices: ["Zero risk", "The highest expected return for each level of risk", "Guaranteed returns", "The lowest possible return"],
    answerIndex: 1,
    explanation: "The efficient frontier is the set of portfolios offering the maximum expected return for each level of risk (or the minimum risk for each return). Rational investors choose a point on it matching their risk tolerance.",
  },
  {
    id: "s66-et-d1", examSlug: "series-66", topicId: "business-practices", topicName: "Ethics & Business Practices", difficulty: 2,
    stem: "The Uniform Securities Act's antifraud provisions apply to:",
    choices: ["Only registered persons", "All persons, even those exempt from registration", "Only investment advisers", "Only broker-dealers"],
    answerIndex: 1,
    explanation: "The antifraud provisions apply to all persons in connection with the offer, sale, or purchase of securities — even those exempt from registration. They forbid deception, untrue statements of material fact, and material omissions.",
  },
  {
    id: "s66-et-d2", examSlug: "series-66", topicId: "business-practices", topicName: "Ethics & Business Practices", difficulty: 2,
    stem: "Which is a prohibited practice?",
    choices: ["Disclosing a conflict of interest", "Guaranteeing a client against loss", "Delivering Form ADV Part 2", "Recommending a suitable investment"],
    answerIndex: 1,
    explanation: "Guaranteeing a client against loss is prohibited. Disclosing conflicts, delivering the brochure, and making suitable recommendations are all required or appropriate conduct.",
  },
  {
    id: "s66-et-d3", examSlug: "series-66", topicId: "business-practices", topicName: "Ethics & Business Practices", difficulty: 3,
    stem: "An adviser may exercise discretion in a client's account only with:",
    choices: ["A verbal request", "Prior written authorization", "The Administrator's approval", "No authorization needed"],
    answerIndex: 1,
    explanation: "Discretionary authority requires prior WRITTEN authorization from the client. Exercising discretion without it is a prohibited practice (a limited 'time and price' exception applies for the day of an otherwise-specified order).",
  },
  {
    id: "s66-et-d4", examSlug: "series-66", topicId: "business-practices", topicName: "Ethics & Business Practices", difficulty: 2,
    stem: "Mixing client funds with the firm's own funds is the prohibited practice of:",
    choices: ["Churning", "Commingling", "Front-running", "Arbitrage"],
    answerIndex: 1,
    explanation: "Commingling client funds with the firm's funds is prohibited; client assets must be kept separate and, where custody exists, safeguarded with a qualified custodian and surprise audits.",
  },
];
