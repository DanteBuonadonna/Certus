// ============================================================
// Certus — Series 66 content (wave 1, original)
// The Uniform Combined State Law exam. Heavily weighted toward
// regulation, fiduciary duty, and ethical practices.
// Topics: Regulation of Investment Advisers, Fiduciary Duty &
// Ethics, Client Recommendations & Strategies.
// ============================================================

import { Chapter, Question, ExamContent } from "./types";

const chapters: Chapter[] = [
  // 1. REGULATION OF INVESTMENT ADVISERS
  {
    id: "s66-ia",
    examSlug: "series-66",
    topicId: "ia-regulation",
    topicName: "Regulation of Investment Advisers",
    title: "Regulation of Investment Advisers",
    readingMinutes: 18,
    summary: "Who counts as an investment adviser, how IAs differ from broker-dealers, and where they register.",
    intro:
      "The Series 66 pairs with the Series 7 to fully license an advisory professional, and its largest theme is the law governing investment advisers. The foundational skill is determining who must register as an investment adviser, how that role differs from a broker-dealer, and whether registration happens at the federal (SEC) or state level. Get the definitions precise — the exam lives in the details.",
    sections: [
      {
        heading: "Who is an investment adviser?",
        paragraphs: [
          "Under the Investment Advisers Act of 1940, an investment adviser is anyone who, for compensation, is in the business of giving advice about securities. The classic memory aid is the 'ABC' test: Advice about securities, in the Business of doing so, for Compensation. If all three are present, the person is an investment adviser and must register unless an exemption applies. Compensation need not be a direct fee — any economic benefit counts.",
          "Certain professionals are excluded when their advice is incidental to their main work and they receive no special compensation for it — the so-called LATE exclusion (Lawyers, Accountants, Teachers, Engineers), plus broker-dealers whose advice is incidental and not separately charged. The moment a broker-dealer charges a separate fee for advice (for example, running fee-based managed accounts), that exclusion can disappear.",
        ],
        callout: {
          label: "The 'ABC' test",
          body: "You're an investment adviser if you give Advice about securities, are in the Business of doing so, and receive Compensation. All three must be present.",
        },
      },
      {
        heading: "Investment adviser vs broker-dealer",
        paragraphs: [
          "The distinction matters because it changes the standard of care. An investment adviser is a fiduciary, owing clients a duty of loyalty and care and charging for ongoing advice (typically a percentage of assets). A broker-dealer historically executes transactions and earns commissions, with advice that is incidental to the trade. The compensation model is the giveaway: ongoing advisory fees point to an IA; transaction-based commissions point to a BD.",
          "Representatives mirror this split. An investment adviser representative (IAR) works for an IA; an agent (registered representative) works for a broker-dealer. Knowing which hat a person wears determines which rules and which standard of conduct apply.",
        ],
      },
      {
        heading: "Federal vs state registration",
        paragraphs: [
          "Investment advisers register either with the SEC or with state securities administrators, generally based on assets under management. Large advisers (typically those managing $100 million or more) register federally with the SEC; smaller advisers register with the states in which they operate. This split avoids dual regulation. Advisers register by filing Form ADV, which has parts disclosing the firm's business, fees, conflicts, and disciplinary history; the client-facing 'brochure' (Part 2) must be delivered to clients so they understand what they're getting and what conflicts exist.",
          "State administrators (under the Uniform Securities Act) retain anti-fraud authority over all advisers operating in their state, even federally registered ones. So an SEC-registered adviser still answers to a state administrator if it commits fraud against that state's residents.",
        ],
      },
      {
        heading: "Adviser vs broker-dealer, and where you register",
        blocks: [
          { kind: "table", table: { caption: "Table 1 — The compensation model is the tell: ongoing fees = adviser; transaction commissions = broker-dealer.", headers: ["Feature", "Investment adviser", "Broker-dealer"], rows: [["Standard of care", "Fiduciary (best interest)", "Suitability / best-interest"], ["Compensation", "Ongoing fees (% of assets)", "Transaction commissions"], ["Regulated by", "SEC or state administrator", "FINRA + SEC"], ["Its representative", "IAR", "Agent / registered rep"]] } },
          { kind: "callout", label: "Federal vs state registration", body: "Larger advisers (generally $100M+ in AUM) register with the SEC; smaller advisers register with the states. State administrators keep anti-fraud authority over ALL advisers in their state, even SEC-registered ones." },
        ],
      },
    ],
    keyTerms: [
      { term: "Investment adviser", def: "One who, for compensation, is in the business of advising on securities (the ABC test)." },
      { term: "IAR", def: "Investment adviser representative — an individual who works for an investment adviser." },
      { term: "Form ADV", def: "The registration form for investment advisers; Part 2 is the client-facing brochure." },
      { term: "Fiduciary", def: "A standard requiring the adviser to act in the client's best interest, with loyalty and care." },
      { term: "LATE exclusion", def: "Lawyers, Accountants, Teachers, Engineers are excluded when advice is incidental and unpaid-for." },
    ],
    takeaways: [
      "Apply the ABC test: Advice on securities + Business + Compensation = investment adviser.",
      "IAs are fiduciaries charging ongoing fees; broker-dealers earn transaction commissions.",
      "Large advisers (~$100M+) register with the SEC; smaller ones register with the states.",
      "Form ADV Part 2 (the brochure) must be delivered to clients; states keep anti-fraud authority over all.",
    ],
  },

  // 2. FIDUCIARY DUTY & ETHICAL PRACTICES
  {
    id: "s66-ethics",
    examSlug: "series-66",
    topicId: "fiduciary",
    topicName: "Fiduciary Duty & Ethics",
    title: "Fiduciary Duty & Unethical Business Practices",
    readingMinutes: 18,
    summary: "The fiduciary standard, disclosure of conflicts, custody rules, and the practices that violate them.",
    intro:
      "Roughly half the Series 66 concerns laws, regulations, and — above all — ethical business practices. The investment adviser's defining obligation is the fiduciary duty: to act in the client's best interest at all times. This chapter covers what that duty demands in practice, and the specific behaviors that regulators treat as unethical or fraudulent.",
    sections: [
      {
        heading: "The fiduciary standard",
        paragraphs: [
          "A fiduciary must place the client's interests ahead of its own, exercising both a duty of loyalty and a duty of care. In practice this means full and fair disclosure of all material conflicts of interest, seeking best execution for client trades, charging only reasonable fees, and giving advice suited to the client. The fiduciary standard is higher than the suitability standard that historically applied to broker-dealers: it's not enough that a recommendation is merely appropriate; it must be in the client's best interest, with conflicts disclosed.",
        ],
      },
      {
        heading: "Disclosure and conflicts of interest",
        paragraphs: [
          "Because conflicts are often unavoidable, the law's primary remedy is disclosure plus client consent. If an adviser will act as a principal (trading from its own account with a client) or in an agency cross (representing both sides of a trade), it must disclose this and obtain the client's consent — often in writing before completion of the transaction. Compensation arrangements, soft-dollar practices, and any financial incentive that could bias advice must be disclosed in the brochure. The governing principle: a conflict that is fully disclosed and consented to can be permissible, while the same conflict hidden is a violation.",
        ],
        callout: {
          label: "Disclose, don't hide",
          body: "Conflicts of interest aren't automatically prohibited — but they must be fully disclosed and, for principal/agency-cross trades, consented to by the client. Concealment is the violation.",
        },
      },
      {
        heading: "Custody and unethical practices",
        paragraphs: [
          "An adviser has custody when it holds client funds or securities, or can withdraw them — and custody triggers strict safeguards: segregation of client assets, regular account statements, and often a surprise annual audit. Notably, an adviser is deemed to have custody if it can deduct fees directly from client accounts beyond certain limits, or if it holds client passwords that allow withdrawals.",
          "Many specific practices are prohibited as unethical: borrowing from or lending to clients (except in narrow cases), commingling client funds with the adviser's own, exercising discretion without written authority, making unsuitable recommendations, misrepresenting qualifications or the nature of services, and guaranteeing performance. The exam routinely describes a scenario and asks whether the adviser acted ethically — the answer turns on whether the client's interest was protected and whether material facts were disclosed.",
        ],
      },
      {
        heading: "What triggers custody, and the rule on conflicts",
        blocks: [
          { kind: "table", table: { caption: "Table 1 — Custody is broader than 'holding cash' — these all trigger it, and its safeguards.", headers: ["This creates custody", "Why"], rows: [["Holding client funds/securities", "Direct possession of assets"], ["Deducting fees beyond set limits", "Ability to withdraw from the account"], ["Holding client passwords", "Ability to move money"], ["(Recommending a third-party custodian)", "Does NOT create custody"]] } },
          { kind: "callout", label: "Disclose, don't hide", body: "Conflicts aren't automatically prohibited — they must be fully disclosed, and for principal or agency-cross trades, consented to (often in writing). The violation is concealment. A disclosed, consented conflict can be permissible." },
        ],
      },
    ],
    keyTerms: [
      { term: "Fiduciary duty", def: "The obligation to act in the client's best interest with loyalty and care — higher than suitability." },
      { term: "Custody", def: "Holding or being able to withdraw client funds/securities; triggers strict safeguards." },
      { term: "Agency cross transaction", def: "Acting for both buyer and seller in a trade; requires disclosure and client consent." },
      { term: "Commingling", def: "Mixing client funds with the adviser's own — a prohibited practice." },
      { term: "Best execution", def: "The duty to seek the most favorable terms reasonably available for client transactions." },
    ],
    takeaways: [
      "The fiduciary standard demands the client's best interest, not merely a suitable recommendation.",
      "Conflicts are managed by full disclosure and consent — concealment is the violation.",
      "Custody triggers safeguards; deducting fees or holding withdrawal passwords can create custody.",
      "Commingling, unauthorized discretion, and guaranteeing performance are prohibited.",
    ],
  },

  // 3. CLIENT RECOMMENDATIONS & STRATEGIES
  {
    id: "s66-strategies",
    examSlug: "series-66",
    topicId: "strategies",
    topicName: "Client Recommendations & Strategies",
    title: "Client Recommendations & Portfolio Strategies",
    readingMinutes: 18,
    summary: "Building suitable portfolios: risk, diversification, allocation, and management styles.",
    intro:
      "Beyond the law, the Series 66 tests whether an adviser can translate a client's situation into a sound portfolio. This means understanding the client's objectives and constraints, the trade-off between risk and return, and the strategies — diversification, asset allocation, and active versus passive management — used to build portfolios that fit. The fiduciary obligation makes getting this right not just good practice but a legal duty.",
    sections: [
      {
        heading: "Risk, return, and the client profile",
        paragraphs: [
          "Every recommendation starts with the client: their financial situation, objectives (return needs and risk tolerance), and constraints (time horizon, liquidity, taxes, and unique circumstances). Risk and return are linked — higher expected returns demand accepting higher risk — so the adviser's job is to find the portfolio that meets the client's return needs without exceeding their capacity and willingness to bear risk. A young investor with a long horizon can tolerate more volatility than a retiree drawing income.",
        ],
      },
      {
        heading: "Diversification and asset allocation",
        paragraphs: [
          "Diversification — spreading investments across assets that don't move together — reduces risk without necessarily reducing expected return, because losses in one area are offset by gains in another. The broader decision is asset allocation: how to divide a portfolio among stocks, bonds, cash, and other assets. Research consistently shows that asset allocation, not individual security selection, drives the large majority of a portfolio's long-run risk and return. Strategic allocation sets long-term targets aligned with the client's profile; tactical allocation makes shorter-term shifts to exploit opportunities.",
        ],
        callout: {
          label: "Allocation drives results",
          body: "The mix of asset classes (stocks/bonds/cash) explains most of a portfolio's long-run risk and return — far more than which specific securities are picked.",
        },
      },
      {
        heading: "Active vs passive and management styles",
        paragraphs: [
          "Advisers choose between active management, which tries to outperform a benchmark through selection and timing (higher fees, the hope of excess return), and passive management, which simply tracks an index at low cost. The efficient-market view argues that beating the market consistently after fees is difficult, favoring low-cost passive approaches for many clients. Style choices — value versus growth, large-cap versus small-cap — further shape a portfolio's behavior.",
          "Two implementation techniques appear often. Dollar-cost averaging invests a fixed amount at regular intervals, buying more shares when prices are low and fewer when high, which smooths the average purchase price and removes the temptation to time the market. Rebalancing periodically restores the portfolio to its target allocation, mechanically selling what has risen and buying what has lagged — enforcing discipline and keeping risk aligned with the client's plan.",
        ],
      },
      {
        heading: "Dollar-cost averaging and rebalancing, in numbers",
        blocks: [
          { kind: "example", example: { title: "why dollar-cost averaging works", prompt: "An investor puts $300 into a fund each month. In month 1 the price is $10; in month 2 it falls to $6. How many shares, and what's the average cost?", steps: ["Month 1: $300 ÷ $10 = 30 shares.", "Month 2: $300 ÷ $6 = 50 shares.", "Total: $600 for 80 shares → average cost = 600 ÷ 80 = $7.50 per share."], answer: "$7.50 average cost — below the $8 simple average of the two prices, because the fixed dollars bought MORE shares when the price was low. That's the mechanical edge of dollar-cost averaging." } },
          { kind: "callout", label: "Rebalancing = sell high, buy low", body: "A 60/40 portfolio that drifts to 75/25 after a rally is rebalanced by SELLING the appreciated stocks and BUYING bonds to return to 60/40 — mechanically selling high and buying low, and keeping risk aligned with the plan." },
        ],
      },
    ],
    keyTerms: [
      { term: "Asset allocation", def: "Dividing a portfolio among asset classes; the main driver of long-run risk and return." },
      { term: "Diversification", def: "Spreading investments across uncorrelated assets to reduce risk without cutting expected return." },
      { term: "Dollar-cost averaging", def: "Investing a fixed amount at regular intervals, smoothing the average purchase price." },
      { term: "Rebalancing", def: "Restoring a portfolio to target weights, selling winners and buying laggards to control risk." },
      { term: "Passive management", def: "Tracking an index at low cost rather than trying to beat the market." },
    ],
    takeaways: [
      "Match the portfolio to the client's objectives (return, risk tolerance) and constraints.",
      "Asset allocation drives most long-run results — more than security selection.",
      "Dollar-cost averaging smooths purchase prices; rebalancing enforces disciplined risk control.",
      "Passive, low-cost strategies are hard to beat consistently after fees.",
    ],
  },
];

const questions: Question[] = [
  // IA Regulation
  {
    id: "s66-ia-q1", examSlug: "series-66", topicId: "ia-regulation", topicName: "Regulation of Investment Advisers", difficulty: 2,
    stem: "Under the 'ABC' test, a person is defined as an investment adviser if they provide advice about securities, are in the business of doing so, AND:",
    choices: ["Hold a finance degree", "Receive compensation", "Are registered with FINRA"],
    answerIndex: 1,
    explanation: "The ABC test requires Advice about securities, being in the Business of doing so, and receiving Compensation — all three. Compensation (any economic benefit, not just a direct fee) is the third leg. Choice A is irrelevant; no degree is required to meet the definition. Choice C confuses the matter — FINRA registration relates to broker-dealers/agents, not the statutory definition of an investment adviser.",
  },
  {
    id: "s66-ia-q2", examSlug: "series-66", topicId: "ia-regulation", topicName: "Regulation of Investment Advisers", difficulty: 3,
    stem: "An advisory firm managing $250 million in assets generally registers with:",
    choices: ["The state securities administrator only", "The SEC (federal registration)", "FINRA"],
    answerIndex: 1,
    explanation: "Larger advisers — generally those managing $100 million or more — register federally with the SEC, which avoids duplicative state-by-state registration. At $250 million, this firm registers with the SEC. Choice A (state) applies to smaller advisers below the federal threshold. Choice C is wrong — FINRA regulates broker-dealers and their agents, not investment advisers, who fall under the SEC/state framework.",
  },
  {
    id: "s66-ia-q3", examSlug: "series-66", topicId: "ia-regulation", topicName: "Regulation of Investment Advisers", difficulty: 2,
    stem: "The primary distinction in compensation between an investment adviser and a broker-dealer is that an IA typically earns:",
    choices: ["Commissions on each transaction", "Ongoing fees for advice (e.g., a percentage of assets)", "Nothing — advice is always free"],
    answerIndex: 1,
    explanation: "Investment advisers are compensated for ongoing advice, typically as a percentage of assets under management, which aligns with their fiduciary, advice-centered role. Choice A (transaction commissions) describes the broker-dealer model, where advice is incidental to the trade. Choice C is simply false — advice is the very service the IA charges for.",
  },
  // Fiduciary & Ethics
  {
    id: "s66-eth-q1", examSlug: "series-66", topicId: "fiduciary", topicName: "Fiduciary Duty & Ethics", difficulty: 2,
    stem: "An investment adviser has a conflict of interest because it earns extra compensation for recommending a certain fund. To act properly, the adviser must:",
    choices: ["Avoid all conflicts, which are strictly prohibited", "Fully disclose the conflict to the client", "Say nothing, as long as the fund performs well"],
    answerIndex: 1,
    explanation: "The fiduciary framework manages conflicts through full and fair disclosure (and, for certain transactions, client consent) — a disclosed and consented conflict can be permissible. Choice A overstates the rule; not every conflict is prohibited, but every material one must be disclosed. Choice C is the violation: concealing a conflict breaches the duty of loyalty regardless of how the investment performs.",
  },
  {
    id: "s66-eth-q2", examSlug: "series-66", topicId: "fiduciary", topicName: "Fiduciary Duty & Ethics", difficulty: 3,
    stem: "An investment adviser deposits a client's funds into the adviser's own business checking account. This is:",
    choices: ["Acceptable if repaid promptly", "Commingling, a prohibited practice", "Required for efficient management"],
    answerIndex: 1,
    explanation: "Mixing client funds with the adviser's own money is commingling, a prohibited practice that endangers client assets and violates custody safeguards. Choice A is wrong — intent to repay doesn't cure the violation; client funds must be segregated. Choice C is false; proper management requires keeping client assets separate, not combined with firm funds.",
  },
  {
    id: "s66-eth-q3", examSlug: "series-66", topicId: "fiduciary", topicName: "Fiduciary Duty & Ethics", difficulty: 2,
    stem: "An investment adviser is deemed to have CUSTODY of client assets when it:",
    choices: ["Gives advice about which securities to buy", "Can withdraw funds from the client's account (e.g., direct fee deduction beyond limits)", "Recommends a third-party custodian"],
    answerIndex: 1,
    explanation: "Custody exists when an adviser holds client assets or has the ability to withdraw them — including deducting fees directly beyond permitted limits or holding passwords enabling withdrawals — which triggers strict safeguards. Choice A (giving advice) does not by itself create custody. Choice C is the opposite of custody: recommending an independent third-party custodian is a way to AVOID having custody.",
  },
  // Strategies
  {
    id: "s66-str-q1", examSlug: "series-66", topicId: "strategies", topicName: "Client Recommendations & Strategies", difficulty: 2,
    stem: "Research consistently finds that the largest driver of a portfolio's long-run risk and return is:",
    choices: ["Picking the best individual stocks", "The asset allocation among asset classes", "Market-timing entries and exits"],
    answerIndex: 1,
    explanation: "Asset allocation — the division among stocks, bonds, cash, and other classes — explains the large majority of a portfolio's long-run risk and return, far more than security selection or timing. Choice A (stock picking) and Choice C (market timing) contribute far less and are notoriously difficult to do consistently, which is why allocation, aligned to the client's profile, is the adviser's central decision.",
  },
  {
    id: "s66-str-q2", examSlug: "series-66", topicId: "strategies", topicName: "Client Recommendations & Strategies", difficulty: 2,
    stem: "An investor contributes a fixed $500 every month into a fund regardless of price. This strategy is:",
    choices: ["Dollar-cost averaging", "Rebalancing", "Tactical allocation"],
    answerIndex: 0,
    explanation: "Investing a fixed dollar amount at regular intervals is dollar-cost averaging; it buys more shares when prices are low and fewer when high, smoothing the average cost and removing the temptation to time the market. Choice B (rebalancing) restores a portfolio to target weights, a different action. Choice C (tactical allocation) involves shifting the asset mix to exploit short-term opportunities, not making fixed periodic contributions.",
  },
  {
    id: "s66-str-q3", examSlug: "series-66", topicId: "strategies", topicName: "Client Recommendations & Strategies", difficulty: 3,
    stem: "A portfolio's target is 60% stocks / 40% bonds, but a strong rally pushes it to 75% / 25%. Rebalancing would have the adviser:",
    choices: ["Buy more stocks to chase the rally", "Sell some stocks and buy bonds to restore 60/40", "Do nothing, since stocks are winning"],
    answerIndex: 1,
    explanation: "Rebalancing restores the portfolio to its target weights, which means selling some of the appreciated asset (stocks) and buying the lagging one (bonds) to return to 60/40 — mechanically 'selling high and buying low' and keeping risk aligned with the plan. Choice A increases risk and chases performance, the opposite of rebalancing. Choice C lets the portfolio drift to a riskier 75/25 that no longer matches the client's profile.",
  },
];

export const series66Content: ExamContent = {
  examSlug: "series-66",
  chapters,
  questions,
};
