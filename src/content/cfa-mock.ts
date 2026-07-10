// ============================================================
// Certus — CFA Level I Mock Exam bank
// ORIGINAL questions written to the 2026 Level I blueprint.
// These are reserved for the mock exam and never appear in
// practice drills, so a mock sitting is always "unseen."
//
// Authenticity rules (match the real exam):
//   · Exactly 3 answer choices (A/B/C)
//   · Stems use "most likely / least likely / is closest to"
//   · Blueprint topic weights
//   · 90 seconds per question of allotted time
//
// MOCK_QUICK        — 15-question readiness sample
// MOCK_SESSION_1/2  — full exam, 90 questions per session
// ============================================================

import { Question } from "./types";

const q = (
  id: string,
  topicId: string,
  topicName: string,
  difficulty: 1 | 2 | 3,
  stem: string,
  choices: string[],
  answerIndex: number,
  explanation: string
): Question => ({
  id,
  examSlug: "cfa",
  topicId,
  topicName,
  difficulty,
  stem,
  choices,
  answerIndex,
  explanation,
});

// ------------------------------------------------------------------
// QUICK ASSESSMENT — 15 questions, blueprint-spread
// Ethics 3 · Quant 1 · Econ 1 · FRA 2 · Corp 1 · Equity 2 ·
// Fixed 2 · Deriv 1 · Alts 1 · PM 1
// ------------------------------------------------------------------
export const MOCK_QUICK: Question[] = [
  q(
    "mq-eth-1",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "An analyst builds a sell recommendation by combining a company's public filings with her own channel checks of the company's suppliers, none of which are individually material. Under the CFA Institute Standards, issuing the recommendation is:",
    [
      "permitted, because conclusions drawn from public and nonmaterial nonpublic information are allowed under the mosaic theory.",
      "a violation, because the supplier information was nonpublic when she gathered it.",
      "a violation, unless the company confirms her conclusion before publication.",
    ],
    0,
    "Correct: A. The mosaic theory permits analysts to combine public information with nonmaterial nonpublic information to reach a conclusion — even one that would be material if the company had disclosed it directly. B fails because nonpublic information only triggers Standard II(A) when it is also material; individually immaterial channel checks do not. C is wrong because seeking issuer confirmation is not required and could itself create selective-disclosure problems."
  ),
  q(
    "mq-eth-2",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "A portfolio manager directs client brokerage to a broker who charges slightly higher commissions but provides research that benefits the clients whose accounts generate the commissions. This practice is most likely:",
    [
      "a violation of the duty of loyalty, because commissions must always be minimized.",
      "consistent with the Standards, because the research benefits the clients paying the commissions.",
      "a violation unless every client consents in writing to each trade.",
    ],
    1,
    "Correct: B. Client brokerage is an asset of the client, so soft-dollar arrangements are acceptable when the goods or services purchased benefit the clients whose commissions pay for them and the manager still seeks best execution overall. A overstates the duty — best execution is not simply the lowest commission. C invents a per-trade written-consent requirement that the Standards do not impose."
  ),
  q(
    "mq-eth-3",
    "ethics",
    "Ethical & Professional Standards",
    3,
    "An equity analyst covering an airline is offered: (1) a weekend stay at a resort from a client to celebrate strong account performance last year, and (2) round-trip transportation and lodging from the airline to attend its investor day at a remote hub. To comply with the Standards, the analyst's best course of action is to:",
    [
      "decline both offers, because each compromises independence and objectivity.",
      "accept both offers as long as each is disclosed to her employer afterward.",
      "disclose the client's gift to her employer, and pay her own way to the issuer's investor day when reasonable commercial travel is available.",
    ],
    2,
    "Correct: C. Gifts from clients for past performance are distinguished from gifts from covered issuers: the client gift is acceptable with disclosure to the employer (it rewards past work rather than compromising future coverage), while accepting issuer-paid travel threatens independence under Standard I(B) — analysts should use commercial travel when available. A is too restrictive on the client gift; B is too permissive on the issuer travel."
  ),
  q(
    "mq-qnt-1",
    "quant",
    "Quantitative Methods",
    2,
    "An investor deposits $2,000 at the end of each year for five years into an account earning 6% annually. The value of the account immediately after the final deposit is closest to:",
    ["$10,000", "$11,274", "$11,951"],
    1,
    "Correct: B. This is the future value of an ordinary annuity: FV = 2,000 × [(1.06⁵ − 1) / 0.06] = 2,000 × 5.6371 = $11,274. A ($10,000) ignores compounding entirely (5 × 2,000). C ($11,951) is the annuity-due value — it multiplies by an extra 1.06, which applies only if deposits were made at the beginning of each year."
  ),
  q(
    "mq-eco-1",
    "econ",
    "Economics",
    2,
    "A transit authority raises fares by 10%, and ridership falls by 8%. As a result, the authority's total fare revenue will most likely:",
    [
      "increase, because demand is price inelastic.",
      "decrease, because ridership fell after the increase.",
      "remain unchanged, because the percentage changes offset.",
    ],
    0,
    "Correct: A. The price elasticity of demand is 8%/10% = 0.8, which is less than 1 (inelastic). When demand is inelastic, the percentage drop in quantity is smaller than the percentage rise in price, so total revenue rises. B confuses falling quantity with falling revenue. C would require unit elasticity (elasticity exactly 1.0), where the changes offset — they do not here."
  ),
  q(
    "mq-fra-1",
    "fra",
    "Financial Statement Analysis",
    2,
    "During a period of rising input prices and stable inventory quantities, a company using LIFO rather than FIFO will most likely report:",
    [
      "higher cost of goods sold and lower ending inventory.",
      "higher cost of goods sold and higher ending inventory.",
      "lower cost of goods sold and lower ending inventory.",
    ],
    0,
    "Correct: A. LIFO charges the newest — and in a rising-price environment, the most expensive — units to cost of goods sold, raising COGS and lowering gross profit, net income, and taxes. What remains on the balance sheet are the oldest, cheapest layers, so ending inventory is understated relative to current cost. B and C each get one leg wrong: high COGS pairs with LOW inventory under LIFO when prices rise."
  ),
  q(
    "mq-fra-2",
    "fra",
    "Financial Statement Analysis",
    3,
    "A company reporting under IFRS pays interest on its long-term debt. On its statement of cash flows, the interest paid may be classified as:",
    [
      "an operating activity only.",
      "either an operating or a financing activity.",
      "a financing activity only.",
    ],
    1,
    "Correct: B. IFRS permits interest paid to be classified as either operating or financing, provided the choice is applied consistently. The 'operating only' rule in A describes US GAAP, not IFRS — this asymmetry is a classic exam distinction. C is wrong because financing is an option under IFRS, not a requirement."
  ),
  q(
    "mq-cor-1",
    "corp",
    "Corporate Issuers",
    2,
    "Two mutually exclusive projects have conventional cash flows, but Project X's NPV is higher while Project Y's IRR is higher. The conflict most likely arises from differences in cash flow timing, and the company should choose:",
    [
      "Project Y, because IRR measures the return earned on invested capital.",
      "Project X, because NPV measures the addition to shareholder wealth directly.",
      "whichever project has the shorter payback period, to resolve the conflict objectively.",
    ],
    1,
    "Correct: B. When NPV and IRR rank mutually exclusive projects differently — typically because of differences in cash flow timing or scale — NPV is the deciding criterion, because it measures the dollar addition to shareholder wealth at the required rate of return and assumes reinvestment at that (realistic) rate. A relies on IRR's implicit assumption that cash flows are reinvested at the IRR itself, which overstates value when the IRR is high. C substitutes a liquidity heuristic that ignores the time value of all cash flows after payback."
  ),
  q(
    "mq-eqt-1",
    "equity",
    "Equity Investments",
    2,
    "A firm is expected to pay out 40% of earnings indefinitely, its required return on equity is 10%, and dividends are expected to grow at 4% per year. The firm's justified forward P/E ratio is closest to:",
    ["4.0", "6.7", "10.0"],
    1,
    "Correct: B. The justified forward P/E from the Gordon growth model is P₀/E₁ = payout ratio / (r − g) = 0.40 / (0.10 − 0.04) = 6.67. A divides payout by the required return alone (0.40/0.10), forgetting growth. C is 1/r, the P/E of a no-growth firm paying out everything — neither assumption holds here."
  ),
  q(
    "mq-eqt-2",
    "equity",
    "Equity Investments",
    1,
    "If a securities market is semi-strong-form efficient, which of the following is most likely to produce consistent abnormal returns?",
    [
      "Analysis of historical price and volume patterns.",
      "Analysis of published financial statements and news releases.",
      "Trading on material information not yet released to the public.",
    ],
    2,
    "Correct: C. Semi-strong-form efficiency means prices already reflect ALL public information — which subsumes past prices (weak form) and published fundamentals. That leaves only material nonpublic information as a source of abnormal returns (setting aside that trading on it is illegal). A fails even under weak-form efficiency; B is precisely what the semi-strong form rules out."
  ),
  q(
    "mq-fix-1",
    "fixed",
    "Fixed Income",
    2,
    "A bond has a modified duration of 6.5. If its yield to maturity increases by 75 basis points, the bond's price change is closest to:",
    ["−4.9%", "−6.5%", "+4.9%"],
    0,
    "Correct: A. The duration estimate of the price change is −ModDur × Δy = −6.5 × 0.0075 = −4.875% ≈ −4.9%. B applies a full 100 bp move instead of 75 bp. C has the wrong sign — prices fall when yields rise. (Convexity would make the true loss slightly smaller than the linear estimate, but −4.9% is the closest choice.)"
  ),
  q(
    "mq-fix-2",
    "fixed",
    "Fixed Income",
    1,
    "A bond with a 6% annual coupon and a $1,000 par value is trading at $960. The bond's current yield is closest to:",
    ["6.00%", "6.25%", "6.67%"],
    1,
    "Correct: B. Current yield = annual coupon / price = 60 / 960 = 6.25%. A is the coupon rate, which uses par rather than the actual purchase price. C (60/900) miscalculates the denominator. Note that current yield ignores both reinvestment and the pull-to-par capital gain a discount bond earns, which is why yield to maturity here would be higher still."
  ),
  q(
    "mq-der-1",
    "deriv",
    "Derivatives",
    2,
    "A stock trades at $50 and pays no dividends. The annual risk-free rate is 4%. The no-arbitrage price of a 6-month forward contract on the stock is closest to:",
    ["$49.02", "$50.99", "$52.00"],
    1,
    "Correct: B. F₀ = S₀ × (1 + r)^T = 50 × (1.04)^0.5 = 50 × 1.0198 = $50.99. The forward price is the spot compounded at the risk-free rate — it compensates the short for financing the position, not a forecast of the future stock price. A discounts instead of compounding. C compounds for a full year rather than six months."
  ),
  q(
    "mq-alt-1",
    "alts",
    "Alternative Investments",
    3,
    "A hedge fund with $100 million in beginning assets charges a 2% management fee on beginning-of-year assets and a 20% incentive fee on gains net of the management fee. The fund returns 20% gross for the year. Total fees earned by the manager are closest to:",
    ["$4.0 million", "$5.6 million", "$6.0 million"],
    1,
    "Correct: B. Management fee = 2% × 100 = $2.0m. Gross gain = $20m; gain net of the management fee = 20 − 2 = $18m; incentive fee = 20% × 18 = $3.6m. Total = 2.0 + 3.6 = $5.6m. C ($6.0m) charges the incentive fee on the gross gain, ignoring the 'net of management fee' provision. A takes 20% of the gain only, forgetting the management fee entirely."
  ),
  q(
    "mq-pm-1",
    "pm",
    "Portfolio Management & Wealth Planning",
    1,
    "An investor wants to add one new asset to an existing portfolio. Holding expected return and standard deviation constant, the greatest reduction in portfolio risk comes from the asset whose correlation with the portfolio is:",
    ["−0.3", "0.0", "+0.5"],
    0,
    "Correct: A. Diversification benefit increases as correlation falls: portfolio standard deviation drops below the weighted average of the components' risks whenever correlation is below +1, and the effect strengthens all the way down to −1. Of the choices, −0.3 is lowest, so it delivers the greatest risk reduction. Zero correlation (B) helps, but negative correlation helps more; +0.5 (C) provides the least benefit of the three."
  ),
];

// ------------------------------------------------------------------
// FULL MOCK — Session 1 (90 questions) and Session 2 (90 questions)
// Blueprint per session: Ethics 14 · Quant 9 · Econ 9 · FRA 13 ·
// Corp 9 · Equity 10 · Fixed 10 · Deriv 6 · Alts 6 · PM 4  (= 90)
// ------------------------------------------------------------------
export const MOCK_SESSION_1: Question[] = [
  // ---- Ethics (14) ----
  q(
    "m1-eth-1",
    "ethics",
    "Ethical & Professional Standards",
    1,
    "A charterholder works in a country whose securities laws are less strict than the CFA Institute Code and Standards. Local law permits a practice the Standards prohibit. The charterholder must:",
    [
      "follow local law, because law always takes precedence over the Code and Standards.",
      "comply with the Code and Standards, because they are stricter than local law.",
      "follow the regulations of her home country, regardless of where she works.",
    ],
    1,
    "Correct: B. Under Standard I(A), members must comply with the MORE STRICT of applicable law or the Code and Standards. Where local law is less strict, the Standards govern. A inverts the rule — law takes precedence only when it is stricter. C is a distractor: the test is the strictest applicable requirement, not home-country rules by default."
  ),
  q(
    "m1-eth-2",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "An analyst incorporates a valuation framework and several exhibits from another firm's published research report into his own client presentation. He independently verifies the underlying data but does not credit the original source. He also cites GDP statistics from a national statistics agency without attribution. The analyst most likely violated the Standards with respect to:",
    [
      "the valuation framework and exhibits only.",
      "the GDP statistics only.",
      "both the framework and the statistics.",
    ],
    0,
    "Correct: A. Using another analyst's framework and exhibits without acknowledgment is plagiarism under Standard I(C) — verifying the data does not cure the failure to attribute the intellectual work. Factual data from recognized statistical and reporting agencies (government statistics offices, for example) may be used without acknowledgment, so the GDP citation is fine, which eliminates B and C."
  ),
  q(
    "m1-eth-3",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "Which of the following personal events, standing alone, most likely constitutes a violation of Standard I(D) Misconduct?",
    [
      "Declaring personal bankruptcy after uninsured medical expenses.",
      "Submitting inflated expense reimbursements to an employer over several years.",
      "Receiving a citation for a minor traffic offense.",
    ],
    1,
    "Correct: B. Standard I(D) targets conduct involving dishonesty, fraud, or deceit that reflects adversely on professional reputation, integrity, or competence. Repeatedly falsifying expense reports is professional dishonesty. Personal bankruptcy without deceit (A) and minor civil infractions (C) are not, by themselves, violations — the Standard is not a general morality test."
  ),
  q(
    "m1-eth-4",
    "ethics",
    "Ethical & Professional Standards",
    1,
    "In an elevator, a portfolio manager overhears two executives of a public company discussing a merger that has not been announced. The manager's most appropriate action is to:",
    [
      "trade on the information promptly, since she received it passively.",
      "refrain from trading on it and from causing others to trade on it.",
      "trade only in client accounts, since she gains no personal benefit.",
    ],
    1,
    "Correct: B. Information about an unannounced merger is both material and nonpublic; Standard II(A) prohibits acting or causing others to act on it regardless of HOW it was obtained. Passive receipt (A) is no defense, and trading for clients rather than oneself (C) is still 'acting' on the information. The manager should also encourage the company to disclose the information publicly."
  ),
  q(
    "m1-eth-5",
    "ethics",
    "Ethical & Professional Standards",
    3,
    "At quarter-end, a fund manager enters a series of small buy orders at successively higher prices in a thinly traded stock his fund holds, lifting its closing price and the fund's reported NAV. This conduct is best described as:",
    [
      "permissible portfolio rebalancing executed near the close.",
      "transaction-based market manipulation, violating Standard II(B).",
      "acceptable, provided the orders are genuine and fully paid.",
    ],
    1,
    "Correct: B. 'Marking the close' — trading with the intent to distort a security's price or the appearance of activity — is transaction-based manipulation under Standard II(B). The intent (inflating reported NAV) is what condemns it; that the orders were real and paid for (C) is irrelevant when the purpose is distortion. A mislabels manipulative intent as rebalancing. Note the contrast with legitimate strategies like tax-loss selling, where the purpose is not to mislead."
  ),
  q(
    "m1-eth-6",
    "ethics",
    "Ethical & Professional Standards",
    3,
    "Regarding the proxy-voting obligations of an investment manager under Standard III(A) Loyalty, Prudence, and Care, which statement is most accurate?",
    [
      "Proxies must be voted on every issue for every holding, without exception.",
      "Proxies are administrative matters that managers may ignore by default.",
      "Proxies should be voted in clients' interests, though a disclosed cost–benefit policy may justify not voting some routine proxies.",
    ],
    2,
    "Correct: C. Proxies have economic value to clients, so a manager's fiduciary duty generally requires an informed, client-first voting policy — but the Standards recognize that a cost–benefit analysis may show that voting certain routine proxies does not benefit clients, provided the policy is disclosed. A is too absolute; B treats a valuable client asset as worthless, the opposite of the duty of care."
  ),
  q(
    "m1-eth-7",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "A research firm downgrades a stock from buy to sell. Under Standard III(B) Fair Dealing, the firm should communicate the change:",
    [
      "first to its largest fee-paying clients, then to all others.",
      "to all clients holding the stock or known to have acted on the prior recommendation, fairly and as simultaneously as practical.",
      "only to clients who ask for updated research, to avoid selective disclosure.",
    ],
    1,
    "Correct: B. Fair dealing requires that material changes in recommendations reach all affected clients fairly — clients who bought on the earlier 'buy' call are entitled to know it has reversed, and dissemination should be designed so no client class is systematically advantaged. A is classic unfair tiering by revenue. C leaves most clients uninformed of a change the firm knows is material. (Premium service tiers are permissible for depth of service, but not for the timing of material recommendation changes.)"
  ),
  q(
    "m1-eth-8",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "A client with a conservative income mandate instructs her adviser to buy a speculative micro-cap stock. The position would be small relative to her total portfolio. Under Standard III(C) Suitability, the adviser's most appropriate response is to:",
    [
      "refuse the order, because the security is unsuitable in isolation.",
      "evaluate the trade's impact in the context of the client's total portfolio and discuss any concerns before proceeding.",
      "execute the order immediately, because unsolicited orders carry no suitability obligation.",
    ],
    1,
    "Correct: B. Suitability is judged against the client's whole portfolio, not one security in isolation — a small speculative position may not materially change a conservative portfolio's risk profile. For unsolicited trades the adviser should discuss how the trade fits the IPS; refusing outright (A) is premature, while executing with no suitability thought at all (C) understates the adviser's obligation."
  ),
  q(
    "m1-eth-9",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "Under Standard III(E) Preservation of Confidentiality, an adviser may most appropriately disclose confidential client information when:",
    [
      "the information concerns illegal activities by the client and disclosure is required or permitted by law.",
      "a prospective employer requests client records to evaluate the adviser's book of business.",
      "the client's family members ask about the account's performance.",
    ],
    0,
    "Correct: A. Confidentiality yields when the information involves illegal activity, when law requires disclosure, or when the client permits it. B is a double violation — it breaches confidentiality AND the duty to the current employer. C fails because family members have no right to account information without the client's authorization."
  ),
  q(
    "m1-eth-10",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "A portfolio manager planning to start a competing firm may, before resigning, most appropriately:",
    [
      "contact her current clients to inform them of her upcoming departure.",
      "arrange office space and complete regulatory registration filings on her own time.",
      "copy her client contact list, since she developed those relationships herself.",
    ],
    1,
    "Correct: B. Standard IV(A) permits PREPARING to compete — securing premises, filing registrations, arranging financing — provided it is done on personal time and doesn't breach duties to the employer. Soliciting or notifying clients before resignation (A) and taking employer records, including client lists the employee helped build (C), are classic violations: the relationships may feel personal, but the records belong to the firm."
  ),
  q(
    "m1-eth-11",
    "ethics",
    "Ethical & Professional Standards",
    1,
    "A client offers a portfolio manager a performance bonus — two weeks at the client's vacation property if the account beats its benchmark next year. To comply with Standard IV(B), the manager must:",
    [
      "decline, because performance-based gifts from clients are prohibited.",
      "obtain written consent from all parties involved, including her employer, before accepting.",
      "accept and disclose the arrangement to her employer after the year ends.",
    ],
    1,
    "Correct: B. Additional compensation arrangements that compete with or might create a conflict with the employer's interest require WRITTEN consent from all parties involved — and the consent must come BEFORE accepting, so the employer can assess the conflict (future performance incentives can bias the manager toward that account). A overstates the rule (such arrangements are permitted with consent); C gets the timing and form wrong."
  ),
  q(
    "m1-eth-12",
    "ethics",
    "Ethical & Professional Standards",
    3,
    "An analyst on a research team disagrees with the team's consensus buy rating, but she believes the group's analysis is rigorous and has a reasonable basis. Regarding the published report, she:",
    [
      "must insist her name be removed from the report.",
      "may remain associated with the report and is not required to dissociate.",
      "must issue a separate dissenting report to clients.",
    ],
    1,
    "Correct: B. Under Standard V(A) Diligence and Reasonable Basis, an analyst who disagrees with a group conclusion need not dissociate from the report if the consensus has a reasonable and adequate basis reached through sound process — honest differences of opinion are expected. Removal of her name (A) is her option, not an obligation, and a public dissenting report (C) is nowhere required and would likely breach her duty to her employer."
  ),
  q(
    "m1-eth-13",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "An analyst who serves on the board of directors of a company she covers in her research is most accurately required to:",
    [
      "resign from the board, because covering the company is now prohibited.",
      "prominently disclose the board seat as a conflict of interest in her research on the company.",
      "continue coverage without disclosure, provided her compensation from the board is modest.",
    ],
    1,
    "Correct: B. Standard VI(A) requires full and prominent disclosure of matters that could reasonably impair independence and objectivity — a board seat at a covered company is a textbook conflict. Disclosure, in plain language, lets clients weigh the conflict. The Standards demand transparency, not automatic resignation (A); and the size of the compensation (C) does not eliminate the conflict or the disclosure duty."
  ),
  q(
    "m1-eth-14",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "A member who has passed Level II of the CFA Program and is registered for the Level III exam may most appropriately state that she:",
    [
      "is a CFA candidate who has completed Level II of the CFA Program.",
      "expects to earn the right to use the CFA designation next year.",
      "holds a partial CFA charter reflecting her progress in the program.",
    ],
    0,
    "Correct: A. Standard VII(B) permits factual statements about program participation: someone registered for the next exam is a candidate and may say which levels she has completed. B improperly implies the charter is assured — passing Level III and meeting the experience requirement are not guaranteed. C is flatly wrong: there is no such thing as a partial charter, and implying one misrepresents the designation."
  ),
  // ---- Quantitative Methods (first 4 of 9) ----
  q(
    "m1-qnt-1",
    "quant",
    "Quantitative Methods",
    1,
    "An investor buys a stock for $40.00. During the year she receives a $1.00 dividend, and she sells the stock at year-end for $43.00. Her holding period return is closest to:",
    ["7.5%", "10.0%", "10.75%"],
    1,
    "Correct: B. HPR = (ending value − beginning value + income) / beginning value = (43 − 40 + 1) / 40 = 4/40 = 10.0%. A (7.5%) ignores the dividend, counting only the price change. C incorrectly divides the total gain by the sale price rather than the purchase price — returns are always measured against what was invested."
  ),
  q(
    "m1-qnt-2",
    "quant",
    "Quantitative Methods",
    2,
    "For two events, P(A) = 0.40, P(B) = 0.30, and P(A and B) = 0.12. The probability that A or B (or both) occurs is closest to:",
    ["0.58", "0.70", "0.82"],
    0,
    "Correct: A. The addition rule: P(A or B) = P(A) + P(B) − P(A and B) = 0.40 + 0.30 − 0.12 = 0.58. B (0.70) forgets to subtract the joint probability, double-counting the overlap. C adds the joint probability instead of subtracting it. Note that since P(A)×P(B) = 0.12 = P(A and B), these events happen to be independent — but the addition rule applies either way."
  ),
  q(
    "m1-qnt-3",
    "quant",
    "Quantitative Methods",
    2,
    "A portfolio's annual return is normally distributed with a mean of 8% and a standard deviation of 10%. The interval that contains the return in approximately 95% of years is closest to:",
    ["−2.0% to 18.0%", "−8.5% to 24.5%", "−11.6% to 27.6%"],
    2,
    "Correct: C. A 95% interval for a normal distribution spans the mean ± 1.96 standard deviations: 8% ± 1.96 × 10% = 8% ± 19.6%, or −11.6% to +27.6%. A uses ± one standard deviation, which covers only about 68% of outcomes. B uses the 1.65 multiplier that belongs to a 90% interval. Matching the multiplier to the confidence level (1.65/90%, 1.96/95%, 2.58/99%) is a reliable exam point."
  ),
  q(
    "m1-qnt-4",
    "quant",
    "Quantitative Methods",
    3,
    "A client makes a large deposit into her account immediately before a period of unusually strong performance. When evaluating the portfolio manager's skill, the preferred return measure is the:",
    [
      "money-weighted return, because it captures the effect of all cash flows.",
      "time-weighted return, because it is unaffected by the timing of client-directed cash flows.",
      "holding period return, because it is simplest to compute.",
    ],
    1,
    "Correct: B. The time-weighted return chains sub-period returns and therefore neutralizes cash flows the manager doesn't control — the standard for judging manager skill. The money-weighted (IRR-based) return in A would flatter this manager: the client's fortunately timed deposit put more capital in place for the strong period, inflating MWR without any skill involved. C confuses simplicity with appropriateness across multiple periods and flows."
  ),
  q(
    "m1-qnt-5",
    "quant",
    "Quantitative Methods",
    2,
    "Fund A has an expected return of 10% with a standard deviation of 8%. Fund B has an expected return of 5% with a standard deviation of 5%. Based on the coefficient of variation, the fund with more risk per unit of expected return is:",
    [
      "Fund A, because its standard deviation is higher.",
      "Fund B, because its coefficient of variation is higher.",
      "Neither — the funds carry identical relative risk.",
    ],
    1,
    "Correct: B. The coefficient of variation scales risk by return: CV = σ / mean. Fund A: 8/10 = 0.80; Fund B: 5/5 = 1.00. Fund B bears one full unit of risk per unit of expected return versus 0.80 for Fund A, so B is riskier in relative terms even though its absolute volatility is lower — exactly the trap in A, which compares raw standard deviations. C would require equal CVs."
  ),
  q(
    "m1-qnt-6",
    "quant",
    "Quantitative Methods",
    1,
    "A population of returns has a standard deviation of 15%. For samples of 25 observations, the standard error of the sample mean is closest to:",
    ["0.6%", "3.0%", "15.0%"],
    1,
    "Correct: B. The standard error of the mean is σ/√n = 15%/√25 = 15%/5 = 3.0%. A divides by n (25) instead of √n — the most common error. C forgets the adjustment entirely: individual observations vary with σ, but AVERAGES of 25 observations vary far less, which is the whole point of the standard error."
  ),
  q(
    "m1-qnt-7",
    "quant",
    "Quantitative Methods",
    2,
    "A researcher tests whether a strategy's mean excess return equals zero and obtains a p-value of 0.03. Using a 5% significance level, the most appropriate conclusion is to:",
    [
      "reject the null hypothesis, because the p-value is below the significance level.",
      "fail to reject the null hypothesis, because the p-value exceeds 0.01.",
      "accept the null hypothesis as proven true.",
    ],
    0,
    "Correct: A. The decision rule is mechanical: reject the null when p-value < α. Here 0.03 < 0.05, so the data are inconsistent enough with a zero mean to reject at the 5% level. B applies the wrong threshold (0.01 would be a 1% test, at which we would indeed fail to reject). C misstates hypothesis testing itself — we never 'prove' or 'accept' a null; we either reject it or fail to reject it."
  ),
  q(
    "m1-qnt-8",
    "quant",
    "Quantitative Methods",
    2,
    "A bank quotes a stated annual interest rate of 8% with quarterly compounding. The effective annual rate is closest to:",
    ["8.00%", "8.16%", "8.24%"],
    2,
    "Correct: C. EAR = (1 + 0.08/4)⁴ − 1 = (1.02)⁴ − 1 = 8.243%. Each quarter earns 2%, and the quarterly interest itself compounds. A is the stated rate, which ignores compounding within the year. B is the EAR under SEMIANNUAL compounding, (1.04)² − 1 — a subtle trap that punishes reading too quickly."
  ),
  q(
    "m1-qnt-9",
    "quant",
    "Quantitative Methods",
    2,
    "The covariance between two assets' returns is 0.006. Asset 1 has a standard deviation of 10% and Asset 2 of 20%. The correlation between the two assets is closest to:",
    ["0.03", "0.30", "0.60"],
    1,
    "Correct: B. Correlation = covariance / (σ₁ × σ₂) = 0.006 / (0.10 × 0.20) = 0.006 / 0.02 = 0.30. A fails to divide by the product of the standard deviations at all. C divides by only one standard deviation (0.006/0.01). Correlation simply rescales covariance to the interpretable −1 to +1 range — the sign always matches the covariance."
  ),
  // ---- Economics (9) ----
  q(
    "m1-eco-1",
    "econ",
    "Economics",
    1,
    "The price of coffee falls, and the quantity of coffee purchased increases. Holding all else constant, this outcome is best described as:",
    [
      "an increase in demand.",
      "a movement along the demand curve.",
      "a rightward shift of the demand curve.",
    ],
    1,
    "Correct: B. A change in the good's OWN price moves buyers along a fixed demand curve — quantity demanded changes, demand does not. 'An increase in demand' (A) and a rightward shift (C) mean the same thing and are caused by non-price factors: income, tastes, prices of substitutes and complements. Keeping 'change in quantity demanded' distinct from 'change in demand' is a perennial exam point."
  ),
  q(
    "m1-eco-2",
    "econ",
    "Economics",
    2,
    "When consumer incomes rise by 6%, the quantity demanded of a good falls by 3%, other things equal. The good is best classified as:",
    ["a normal good.", "an inferior good.", "a Giffen good, necessarily."],
    1,
    "Correct: B. Income elasticity = −3%/6% = −0.5. A negative income elasticity defines an inferior good — as incomes rise, buyers substitute away toward preferred alternatives. A normal good (A) requires positive income elasticity. C over-reaches: all Giffen goods are inferior, but the reverse is not true; a Giffen good additionally requires quantity demanded to rise when its own price rises, which nothing here establishes."
  ),
  q(
    "m1-eco-3",
    "econ",
    "Economics",
    2,
    "In long-run equilibrium, a firm operating in a perfectly competitive market most likely earns:",
    [
      "zero economic profit, with price equal to marginal cost and minimum average total cost.",
      "positive economic profit, sustained by barriers to entry.",
      "zero accounting profit, since competition eliminates all returns.",
    ],
    0,
    "Correct: A. Free entry and exit drive price to the minimum of average total cost, where P = MC = ATC and economic profit is zero. B describes markets WITH entry barriers — the defining feature perfect competition lacks. C confuses economic with accounting profit: zero economic profit still includes a normal return to capital and the owner's opportunity costs, so accounting profit is typically positive."
  ),
  q(
    "m1-eco-4",
    "econ",
    "Economics",
    2,
    "A profit-maximizing monopolist most likely sets output where:",
    [
      "price equals marginal cost.",
      "marginal revenue equals marginal cost, charging the price on the demand curve at that output.",
      "average total cost is minimized.",
    ],
    1,
    "Correct: B. Every profit maximizer produces where MR = MC; the monopolist then reads the price off the demand curve above that quantity — and because the demand curve slopes down, price exceeds marginal revenue and marginal cost. A (P = MC) is the perfectly competitive outcome, which is exactly why monopoly creates deadweight loss. C describes productive efficiency, which nothing compels a monopolist to achieve."
  ),
  q(
    "m1-eco-5",
    "econ",
    "Economics",
    1,
    "Using the expenditure approach, GDP is the sum of consumption, investment, government spending, and net exports. Which item is most likely EXCLUDED from this calculation?",
    [
      "A government agency's purchase of new office computers.",
      "Unemployment benefits paid to households.",
      "A household's purchase of a newly constructed home.",
    ],
    1,
    "Correct: B. Transfer payments — unemployment benefits, pensions, welfare — are excluded from the government-spending component because nothing is produced in exchange; they merely redistribute income (they enter GDP only later, if recipients spend them on goods and services). A is direct government consumption of current production. C counts as residential investment: new construction is current output, unlike resales of existing homes."
  ),
  q(
    "m1-eco-6",
    "econ",
    "Economics",
    2,
    "Which of the following is most appropriately classified as a LEADING indicator of the business cycle?",
    [
      "The average duration of unemployment.",
      "Building permits for new private housing.",
      "The average prime rate charged by banks.",
    ],
    1,
    "Correct: B. Building permits are commitments to FUTURE construction activity, so they turn before the broad economy does — a classic leading indicator, along with stock prices, new orders, and interest-rate spreads. Unemployment duration (A) and the prime rate (C) are lagging indicators: they keep deteriorating or stay elevated well after activity has already turned."
  ),
  q(
    "m1-eco-7",
    "econ",
    "Economics",
    2,
    "A central bank purchases government securities in the open market. The most likely short-run effects are:",
    [
      "an increase in bank reserves and downward pressure on short-term interest rates.",
      "a decrease in bank reserves and upward pressure on short-term interest rates.",
      "no change in reserves, since the purchase merely swaps one asset for another.",
    ],
    0,
    "Correct: A. When the central bank buys securities, it pays by crediting banks' reserve accounts — reserves rise, the supply of overnight funds expands, and short-term rates are pushed down; with more reserves, banks can also expand lending and deposits. B describes an open-market SALE. C misses that the 'swap' is with newly created central-bank money, which is precisely how the monetary base grows."
  ),
  q(
    "m1-eco-8",
    "econ",
    "Economics",
    2,
    "The USD/EUR exchange rate moves from 1.10 to 1.15 (dollars per euro). It is most accurate to say the:",
    [
      "euro has appreciated against the dollar.",
      "dollar has appreciated against the euro.",
      "euro has depreciated, since each euro buys fewer dollars.",
    ],
    0,
    "Correct: A. The quote is dollars per one euro. One euro previously cost $1.10 and now costs $1.15 — the euro buys MORE dollars, so the euro appreciated and the dollar depreciated (each direction is the mirror of the other, eliminating B). C states the arithmetic backwards. Reading which currency is the base of the quote before judging direction is the entire skill being tested."
  ),
  q(
    "m1-eco-9",
    "econ",
    "Economics",
    2,
    "During a recession, tax revenues fall and unemployment benefit payments rise without any new legislation. These effects are best described as:",
    [
      "discretionary fiscal policy.",
      "automatic stabilizers.",
      "monetary policy accommodation.",
    ],
    1,
    "Correct: B. Automatic stabilizers are fiscal features that respond to the cycle by design: progressive taxes take a smaller bite as incomes fall, and transfer programs expand as more households qualify — both cushioning demand with no legislative action. Discretionary policy (A) requires deliberate new measures such as a stimulus bill. C involves the central bank, which plays no role in tax-and-transfer mechanics."
  ),
  // ---- Financial Statement Analysis (13) ----
  q(
    "m1-fra-1",
    "fra",
    "Financial Statement Analysis",
    1,
    "An independent auditor issues an unqualified (clean) opinion on a company's financial statements. This opinion most likely indicates that the statements:",
    [
      "are free of all error and fraud.",
      "are presented fairly, in all material respects, in accordance with the applicable accounting standards.",
      "guarantee the company's financial health going forward.",
    ],
    1,
    "Correct: B. An unqualified opinion provides reasonable assurance that the statements are fairly presented, in all material respects, under the applicable framework — a standard rooted in materiality and sampling, not certainty. A overstates the assurance: audits are not designed to catch every error or all fraud. C confuses an opinion on PRESENTATION with a judgment about future performance, which auditors never provide."
  ),
  q(
    "m1-fra-2",
    "fra",
    "Financial Statement Analysis",
    1,
    "A software company receives $12,000 cash in December for a one-year subscription beginning the following January. At its December 31 fiscal year-end, the company most likely reports:",
    [
      "revenue of $12,000.",
      "a liability of $12,000 for unearned revenue.",
      "an account receivable of $12,000.",
    ],
    1,
    "Correct: B. Cash collected before the service is delivered creates unearned (deferred) revenue — a LIABILITY representing the obligation to deliver the subscription. Revenue (A) is recognized only as the performance obligation is satisfied over the coming year. A receivable (C) is the mirror-image situation: revenue earned before cash is received. The pairing 'cash first → liability; revenue first → asset' resolves most accrual questions."
  ),
  q(
    "m1-fra-3",
    "fra",
    "Financial Statement Analysis",
    2,
    "A company reports net income of $1,000,000 and paid $100,000 in preferred dividends. Weighted average common shares outstanding were 300,000. Basic earnings per share is closest to:",
    ["$3.00", "$3.33", "$3.67"],
    0,
    "Correct: A. Basic EPS = (net income − preferred dividends) / weighted average common shares = (1,000,000 − 100,000) / 300,000 = $3.00. The numerator is income available to COMMON shareholders, so preferred dividends come out first. B (3.33) skips that subtraction; C (3.67) adds the preferred dividends back instead — both are numerator errors the exam loves."
  ),
  q(
    "m1-fra-4",
    "fra",
    "Financial Statement Analysis",
    3,
    "When computing diluted EPS, a potentially dilutive security whose conversion would INCREASE earnings per share is most appropriately:",
    [
      "included, because diluted EPS must reflect all convertible instruments.",
      "excluded, because diluted EPS reflects only securities that reduce EPS.",
      "included at half weight to balance its effect.",
    ],
    1,
    "Correct: B. Diluted EPS is a worst-case measure: it must show the maximum potential dilution, so any security that is ANTIDILUTIVE — whose assumed conversion would raise EPS — is excluded from the calculation. Including everything mechanically (A) can overstate diluted EPS above basic, which the standard forbids: diluted EPS can never exceed basic EPS. C invents a treatment that exists nowhere in the standards."
  ),
  q(
    "m1-fra-5",
    "fra",
    "Financial Statement Analysis",
    3,
    "A company with a current ratio of 1.5 uses cash to pay down accounts payable. Immediately after the payment, its current ratio will most likely:",
    ["increase.", "decrease.", "remain unchanged."],
    0,
    "Correct: A. Paying payables with cash reduces current assets and current liabilities by the SAME dollar amount. When the ratio starts above 1.0, subtracting equal amounts from numerator and denominator pushes the ratio further above 1 — e.g., 150/100 = 1.5 becomes 130/80 = 1.625 after a 20 payment. Had the ratio been below 1.0, the identical transaction would DECREASE it — the direction depends entirely on the starting point, which is why B and C fail here."
  ),
  q(
    "m1-fra-6",
    "fra",
    "Financial Statement Analysis",
    2,
    "A company reports net income of $100, depreciation expense of $20, an increase in accounts receivable of $10, and an increase in accounts payable of $5. Cash flow from operations under the indirect method is closest to:",
    ["$105", "$115", "$135"],
    1,
    "Correct: B. CFO = 100 + 20 (add back non-cash depreciation) − 10 (rising receivables mean sales not yet collected) + 5 (rising payables mean expenses not yet paid) = $115. A flips the sign on payables — an INCREASE in a liability is a source of cash. C adds the receivables increase instead of subtracting it. The working-capital sign rules (asset up → cash down; liability up → cash up) decide every question of this type."
  ),
  q(
    "m1-fra-7",
    "fra",
    "Financial Statement Analysis",
    3,
    "Under IFRS, inventory previously written down to net realizable value recovers in value. The company most appropriately:",
    [
      "reverses the write-down, limited to the amount of the original write-down.",
      "leaves the carrying amount unchanged, since write-downs are permanent.",
      "revalues the inventory to its full current market value, even above original cost.",
    ],
    0,
    "Correct: A. IFRS requires inventory at the lower of cost and net realizable value and PERMITS reversal of a write-down when NRV recovers — but only up to the original write-down, so carrying value never exceeds original cost. B describes US GAAP, where reversals are prohibited (a favorite IFRS/GAAP contrast). C breaches the ceiling: inventory is never marked above cost under either framework."
  ),
  q(
    "m1-fra-8",
    "fra",
    "Financial Statement Analysis",
    2,
    "Compared with straight-line depreciation, a company using an accelerated method will, in an asset's EARLY years, most likely report:",
    [
      "lower depreciation expense and higher net income.",
      "higher depreciation expense and lower net income.",
      "the same total depreciation but higher early-year income.",
    ],
    1,
    "Correct: B. Accelerated methods (such as double-declining balance) front-load depreciation: early-year expense is higher, so early-year income, equity, and book value are lower — reversing in later years, since TOTAL depreciation over the asset's life is identical under both methods. A describes the straight-line side of the comparison. C states the correct total but the wrong income direction for the early years."
  ),
  q(
    "m1-fra-9",
    "fra",
    "Financial Statement Analysis",
    2,
    "Under the converged revenue recognition standard (IFRS 15 / ASC 606), a company recognizes revenue when:",
    [
      "cash is collected from the customer.",
      "control of the promised good or service transfers to the customer, in an amount reflecting the consideration expected.",
      "the contract is signed and the price is fixed.",
    ],
    1,
    "Correct: B. The five-step model culminates in recognizing revenue as each performance obligation is satisfied — that is, when CONTROL transfers, either at a point in time or over time. Cash collection (A) is neither necessary nor sufficient under accrual accounting. Contract signing (C) is only step one; no revenue exists until the company actually performs."
  ),
  q(
    "m1-fra-10",
    "fra",
    "Financial Statement Analysis",
    2,
    "A company has a net profit margin of 5%, asset turnover of 1.2, and financial leverage (assets/equity) of 2.0. Using DuPont analysis, its return on equity is closest to:",
    ["6.0%", "10.0%", "12.0%"],
    2,
    "Correct: C. ROE = net profit margin × asset turnover × financial leverage = 5% × 1.2 × 2.0 = 12.0%. A (6%) omits the leverage multiplier — that is ROA, the return before financing structure. B multiplies margin by leverage but drops turnover. DuPont's value is exactly this decomposition: it shows whether ROE is driven by profitability, efficiency, or borrowed money."
  ),
  q(
    "m1-fra-11",
    "fra",
    "Financial Statement Analysis",
    3,
    "A company uses accelerated depreciation for tax purposes and straight-line for financial reporting. In an asset's early years, this difference most likely gives rise to:",
    [
      "a deferred tax asset, because taxes paid exceed tax expense.",
      "a deferred tax liability, because the asset's carrying amount exceeds its tax base.",
      "no deferred taxes, because total depreciation is identical over the asset's life.",
    ],
    1,
    "Correct: B. Faster tax depreciation shrinks the tax base below the financial-statement carrying amount; the company pays LESS tax now than its reported income implies and will pay more later — a deferred tax liability. A reverses the direction of the timing benefit. C confuses the eventual reversal with current recognition: the difference is temporary, which is precisely WHY a deferred tax item is recorded in the meantime."
  ),
  q(
    "m1-fra-12",
    "fra",
    "Financial Statement Analysis",
    3,
    "Compared with an operating lease, a lessee reporting a lease as a finance lease will, in the lease's early years, most likely report:",
    [
      "higher total expense on the income statement.",
      "identical expense, since the same cash is paid either way.",
      "lower total expense, because depreciation replaces rent.",
    ],
    0,
    "Correct: A. A finance lease splits expense into straight-line amortization of the right-of-use asset plus interest on the lease liability — and interest is largest early, when the liability balance is highest, so combined early-year expense exceeds the single straight-line lease expense of an operating lease (the pattern reverses later; lifetime totals match). B confuses cash flow with accrual expense. C has the timing backwards."
  ),
  q(
    "m1-fra-13",
    "fra",
    "Financial Statement Analysis",
    3,
    "A company aggressively capitalizes costs that peers expense as incurred. Relative to expensing, the capitalization most likely causes the company's current-period results to show:",
    [
      "higher net income and higher operating cash flow.",
      "higher net income but lower operating cash flow.",
      "lower net income but higher operating cash flow.",
    ],
    0,
    "Correct: A. Capitalizing moves the cost out of current expenses (raising net income now, at the price of future depreciation) AND reclassifies the cash outflow from operating to INVESTING on the cash flow statement — so reported CFO rises too. That double flattering effect is exactly why analysts screen for aggressive capitalization. B misses the cash-flow reclassification; C reverses the income effect."
  ),
  // ---- Corporate Issuers (9) ----
  q(
    "m1-cor-1",
    "corp",
    "Corporate Issuers",
    2,
    "From a corporate governance perspective, combining the roles of CEO and board chair is most likely viewed as:",
    [
      "a strength, because it unifies the company's leadership.",
      "a weakness, because it concentrates power and reduces the board's ability to oversee management independently.",
      "neutral, because the board's committees provide all necessary oversight.",
    ],
    1,
    "Correct: B. The board exists to monitor management on shareholders' behalf; when the chief manager also chairs the body that supervises him, the monitor and the monitored are the same person. Governance codes therefore favor separation or, failing that, a strong lead independent director. A restates the duality argument companies offer, but it is the governance CONCERN, not the mitigant. C overstates what committees can do when the agenda-setter is the CEO."
  ),
  q(
    "m1-cor-2",
    "corp",
    "Corporate Issuers",
    2,
    "A project requires an initial outlay of $100,000 and is expected to generate $40,000 at the end of each year for four years. At a 10% required rate of return, the project's NPV is closest to:",
    ["$26,800", "$60,000", "$126,800"],
    0,
    "Correct: A. NPV = 40,000 × [PV annuity factor, 10%, 4 yrs] − 100,000 = 40,000 × 3.1699 − 100,000 = 126,795 − 100,000 ≈ $26,800. B (60,000) sums the undiscounted cash flows (160,000 − 100,000), ignoring the time value of money entirely. C (126,800) is the present value of the inflows with the initial investment never subtracted — an incomplete calculation, not a value created."
  ),
  q(
    "m1-cor-3",
    "corp",
    "Corporate Issuers",
    2,
    "A company is financed 60% with equity costing 12% and 40% with debt costing 6% pre-tax. With a 25% tax rate, its weighted average cost of capital is closest to:",
    ["8.4%", "9.0%", "9.6%"],
    1,
    "Correct: B. WACC = (0.60 × 12%) + (0.40 × 6% × (1 − 0.25)) = 7.2% + 1.8% = 9.0%. Only DEBT gets the tax adjustment, because interest is tax-deductible while dividends are not. C (9.6%) skips the tax shield on debt; A (8.4%) mistakenly applies the tax adjustment to both components. The after-tax logic of the debt term is the single most-tested feature of WACC."
  ),
  q(
    "m1-cor-4",
    "corp",
    "Corporate Issuers",
    1,
    "The risk-free rate is 3%, the expected equity market risk premium is 5%, and a stock's beta is 1.2. Using the CAPM, the stock's required return is closest to:",
    ["8.0%", "9.0%", "9.6%"],
    1,
    "Correct: B. CAPM: r = rf + β × MRP = 3% + 1.2 × 5% = 3% + 6% = 9.0%. A applies a beta of 1.0 — the market's own required return. C multiplies beta by the SUM of the risk-free rate and premium (1.2 × 8%), a misreading of the formula: beta scales only the risk premium, since the risk-free component is earned without bearing market risk."
  ),
  q(
    "m1-cor-5",
    "corp",
    "Corporate Issuers",
    2,
    "A company with a high proportion of fixed operating costs relative to variable costs most likely exhibits:",
    [
      "high operating leverage, making EBIT highly sensitive to changes in sales.",
      "low operating leverage, since fixed costs do not vary with sales.",
      "high financial leverage, since fixed costs act like debt service.",
    ],
    0,
    "Correct: A. Operating leverage measures how operating income responds to sales: with heavy fixed costs, each incremental sale carries a large contribution margin, so EBIT swings sharply in both directions — amplified profits in expansions, amplified losses in downturns. B draws the wrong conclusion from the right fact. C confuses the categories: financial leverage arises from fixed FINANCING costs (interest), not fixed operating costs."
  ),
  q(
    "m1-cor-6",
    "corp",
    "Corporate Issuers",
    2,
    "A company has days of inventory on hand of 60, days sales outstanding of 45, and days payables outstanding of 30. Its cash conversion cycle is closest to:",
    ["45 days", "75 days", "135 days"],
    1,
    "Correct: B. Cash conversion cycle = DOH + DSO − DPO = 60 + 45 − 30 = 75 days: the company waits 105 days to turn inventory and receivables into cash but gets 30 days of free financing from suppliers. A subtracts both working-capital components incorrectly; C adds all three, missing that payables SHORTEN the cycle — supplier credit is cash the company hasn't paid yet."
  ),
  q(
    "m1-cor-7",
    "corp",
    "Corporate Issuers",
    1,
    "A product sells for $50 per unit with variable costs of $30 per unit. Fixed operating costs are $200,000. The operating breakeven quantity is closest to:",
    ["4,000 units", "6,667 units", "10,000 units"],
    2,
    "Correct: C. Breakeven quantity = fixed costs / contribution margin per unit = 200,000 / (50 − 30) = 200,000 / 20 = 10,000 units. A divides by the price (200,000/50), ignoring variable costs. B divides by the variable cost (200,000/30). Only the CONTRIBUTION margin — what each unit leaves behind after its own variable costs — is available to cover fixed costs."
  ),
  q(
    "m1-cor-8",
    "corp",
    "Corporate Issuers",
    3,
    "A company borrows at an after-tax cost of 4% to repurchase shares trading at an earnings yield of 7% (E/P). The immediate effect on earnings per share is most likely:",
    [
      "an increase, because the earnings yield on retired shares exceeds the after-tax cost of the debt.",
      "a decrease, because interest expense reduces net income.",
      "no change, because the share count and earnings fall proportionally.",
    ],
    0,
    "Correct: A. The buyback retires shares 'yielding' 7% in earnings while the financing costs only 4% after tax — the earnings removed via interest are smaller than the earnings concentration from the lower share count, so EPS rises. B sees only the numerator effect and misses the denominator. C describes the special break-even case where the after-tax borrowing cost EQUALS the earnings yield, which is not the case here. (Higher EPS does not automatically mean higher value — the added leverage raises risk.)"
  ),
  q(
    "m1-cor-9",
    "corp",
    "Corporate Issuers",
    2,
    "A CEO pursues acquisitions that enlarge the firm but consistently earn less than the cost of capital. This behavior best illustrates:",
    [
      "an agency conflict between managers and shareholders.",
      "effective capital allocation, since growth benefits all stakeholders.",
      "a conflict between shareholders and creditors.",
    ],
    0,
    "Correct: A. 'Empire building' — managers capturing the prestige, pay, and power of running a bigger firm while shareholders bear returns below the cost of capital — is the textbook agency problem: the agent's interests diverge from the principal's. B mistakes growth for value creation; growth that earns less than the capital costs DESTROYS value. C involves risk-shifting between capital providers, a different conflict entirely."
  ),
  // ---- Equity Investments (10) ----
  q(
    "m1-eqt-1",
    "equity",
    "Equity Investments",
    1,
    "An investor wants certainty that her order will execute immediately, and she is willing to accept whatever price the market offers. She should most appropriately place a:",
    ["market order.", "limit order.", "stop-loss buy order."],
    0,
    "Correct: A. A market order trades execution certainty for price uncertainty — it fills at the best available price now. A limit order (B) reverses the bargain: it guarantees a price ceiling or floor but may never execute. A stop-loss buy (C) is a conditional order that CONVERTS to a market order only when a trigger price is reached; it provides neither immediate execution nor price certainty."
  ),
  q(
    "m1-eqt-2",
    "equity",
    "Equity Investments",
    2,
    "In a price-weighted equity index, the security with the greatest influence on the index's value is the one with the highest:",
    ["market capitalization.", "share price.", "trading volume."],
    1,
    "Correct: B. A price-weighted index (the Dow Jones Industrial Average is the classic example) sums member prices and divides by a divisor — so a $400 stock moves the index four times as much as a $100 stock regardless of company size. Market capitalization (A) drives value-weighted indexes such as the S&P 500. Volume (C) affects no standard weighting scheme directly."
  ),
  q(
    "m1-eqt-3",
    "equity",
    "Equity Investments",
    3,
    "An investor buys a stock at $40 on 50% initial margin. The maintenance margin is 25%. Ignoring interest and dividends, the price below which she receives a margin call is closest to:",
    ["$20.00", "$26.67", "$30.00"],
    1,
    "Correct: B. Margin call price = P₀ × (1 − initial margin) / (1 − maintenance margin) = 40 × 0.50 / 0.75 = $26.67. At that price the equity in the position — price minus the $20 borrowed — equals exactly 25% of the stock's value. A ($20) is merely the loan amount, where equity would be zero. C applies the maintenance percentage to the purchase price (40 × 0.75), skipping the leverage arithmetic."
  ),
  q(
    "m1-eqt-4",
    "equity",
    "Equity Investments",
    2,
    "The persistence of momentum — stocks with high recent returns continuing to outperform — is most directly a challenge to which form of market efficiency?",
    ["Weak form.", "Semi-strong form only.", "Strong form only."],
    0,
    "Correct: A. Weak-form efficiency asserts that past price and volume data are already impounded in prices, so no trading rule based on price history should earn abnormal returns. Momentum strategies are built ENTIRELY from past prices, so their documented profitability contradicts the weak form directly — and by nesting, the semi-strong and strong forms too. B and C miss that the weak form is the FIRST level breached when price history predicts returns."
  ),
  q(
    "m1-eqt-5",
    "equity",
    "Equity Investments",
    2,
    "A stock is expected to pay a dividend of $2.00 one year from now. Dividends are expected to grow at 5% indefinitely, and the required return is 10%. Using the Gordon growth model, the stock's intrinsic value is closest to:",
    ["$20.00", "$40.00", "$42.00"],
    1,
    "Correct: B. V₀ = D₁ / (r − g) = 2.00 / (0.10 − 0.05) = $40.00. A divides by the required return alone (2/0.10), valuing the dividend as a flat perpetuity and ignoring growth. C grows the $2.00 by another 5% first — but $2.00 is already D₁, the NEXT dividend; growing it again values the stock one period forward. Checking whether the given dividend is D₀ or D₁ prevents the most common error."
  ),
  q(
    "m1-eqt-6",
    "equity",
    "Equity Investments",
    1,
    "A perpetual preferred stock pays a fixed annual dividend of $5.00. If the required return is 8%, the preferred stock's value is closest to:",
    ["$40.00", "$62.50", "$100.00"],
    1,
    "Correct: B. A perpetual preferred is a level perpetuity: V = D / r = 5.00 / 0.08 = $62.50. A multiplies 5 × 8 — an arithmetic slip, not a valuation. C assumes the stock must be worth its (typical) $100 par, but par is only what the ISSUER promised as a base for the dividend; market value is set by discounting the actual cash flows at today's required return."
  ),
  q(
    "m1-eqt-7",
    "equity",
    "Equity Investments",
    2,
    "For valuing a profitable company that pays no dividends and is not expected to for many years, the most appropriate present-value approach uses:",
    ["dividends.", "free cash flow to equity.", "book value only."],
    1,
    "Correct: B. FCFE measures the cash the company COULD distribute after operating needs, reinvestment, and debt service — well-suited to firms that retain everything, and to control perspectives where payout policy could be changed. A dividend discount model (A) has nothing to discount for years and forces speculative assumptions about when payments begin. C abandons cash-flow valuation altogether; book value alone ignores the profitable growth that gives this firm its worth."
  ),
  q(
    "m1-eqt-8",
    "equity",
    "Equity Investments",
    2,
    "A company has a market capitalization of $500 million, debt of $200 million, and cash and equivalents of $50 million. Its enterprise value is closest to:",
    ["$650 million", "$700 million", "$750 million"],
    0,
    "Correct: A. EV = market cap + total debt − cash = 500 + 200 − 50 = $650 million. Enterprise value prices the whole operating business: a buyer assumes the debt (add it) but pockets the cash (subtract it). B forgets to net out the cash; C adds the cash instead of subtracting — treating the acquirer's own future asset as an extra cost."
  ),
  q(
    "m1-eqt-9",
    "equity",
    "Equity Investments",
    2,
    "Within Porter's five forces framework, an industry with many small competitors selling undifferentiated products most likely exhibits:",
    [
      "intense rivalry and weak pricing power.",
      "high barriers to entry and strong pricing power.",
      "low threat of substitutes and stable margins.",
    ],
    0,
    "Correct: A. Fragmentation plus commodity-like products is the recipe for fierce rivalry: no seller can differentiate, so competition collapses onto price, eroding margins for everyone. B describes the opposite structure — concentrated industries protected by entry barriers are where pricing power lives. C addresses a different force entirely; nothing about fragmentation reduces substitute threats or stabilizes margins."
  ),
  q(
    "m1-eqt-10",
    "equity",
    "Equity Investments",
    2,
    "The price-to-book ratio is generally considered most appropriate for valuing:",
    [
      "financial institutions holding largely liquid, marked-to-market assets.",
      "asset-light technology firms whose value lies in internally developed intangibles.",
      "early-stage companies with negative earnings and negative book value.",
    ],
    0,
    "Correct: A. P/B works best when book value approximates economic value — true for banks and insurers whose balance sheets are dominated by financial assets carried near market value. B is P/B's known blind spot: internally generated intangibles (code, brands, R&D) are largely absent from book value, making such firms look misleadingly expensive. C fails outright — a NEGATIVE book value makes the ratio meaningless."
  ),
  // ---- Fixed Income (10) ----
  q(
    "m1-fix-1",
    "fixed",
    "Fixed Income",
    1,
    "A call provision embedded in a bond most likely benefits the:",
    [
      "issuer, who can refinance at lower rates — so investors demand a higher yield in compensation.",
      "bondholder, who receives principal back early when rates fall.",
      "bondholder, through greater price appreciation when rates decline.",
    ],
    0,
    "Correct: A. The call option belongs to the ISSUER: when rates fall, it redeems the expensive bond and refinances cheaply — precisely when the investor least wants the money back, forcing reinvestment at lower rates. Investors price this disadvantage by requiring a higher yield than on an otherwise identical option-free bond. B dresses the harm up as a benefit; C is backwards — the call CAPS price appreciation near the call price ('price compression')."
  ),
  q(
    "m1-fix-2",
    "fixed",
    "Fixed Income",
    1,
    "A bond carries a 5% annual coupon while its yield to maturity is 4%. The bond most likely trades at:",
    ["a discount to par.", "par value.", "a premium to par."],
    2,
    "Correct: C. When the coupon rate exceeds the required yield, the bond pays more than the market demands, and buyers bid its price above par until the yield to maturity falls to 4% — a premium bond that will be 'pulled down to par' as maturity approaches. A describes coupon < yield; B requires coupon = yield exactly. The coupon-versus-yield comparison instantly classifies any bond's price relative to par."
  ),
  q(
    "m1-fix-3",
    "fixed",
    "Fixed Income",
    2,
    "A three-year bond pays a 5% annual coupon on a par value of 100. If the yield to maturity is 6%, the bond's price is closest to:",
    ["97.33", "100.00", "102.67"],
    0,
    "Correct: A. Price = 5 × [PV annuity, 6%, 3] + 100 × [PV factor, 6%, 3] = 5 × 2.6730 + 100 × 0.8396 = 13.37 + 83.96 = 97.33. The bond trades at a discount because its 5% coupon falls short of the 6% the market requires. B would require coupon = yield. C mirrors the discount as a premium — the price you would get by swapping the coupon and yield."
  ),
  q(
    "m1-fix-4",
    "fixed",
    "Fixed Income",
    2,
    "The relationship between Macaulay duration and modified duration is most accurately described as: modified duration equals Macaulay duration:",
    [
      "divided by one plus the yield per period.",
      "multiplied by one plus the yield per period.",
      "minus the bond's convexity adjustment.",
    ],
    0,
    "Correct: A. ModDur = MacDur / (1 + y), where y is the yield per period. Macaulay duration is the weighted-average TIME to receive the bond's cash flows; dividing by (1+y) converts it into modified duration, the direct estimate of price sensitivity (%Δprice ≈ −ModDur × Δy). B moves in the wrong direction — modified duration is always slightly SMALLER. C confuses duration's definition with the second-order convexity refinement of the price estimate."
  ),
  q(
    "m1-fix-5",
    "fixed",
    "Fixed Income",
    3,
    "For an option-free bond exhibiting positive convexity, when yields change by a large amount, the price:",
    [
      "rises more when yields fall than it drops when yields rise by the same amount.",
      "changes by exactly the amount duration predicts in either direction.",
      "falls more when yields rise than duration predicts.",
    ],
    0,
    "Correct: A. Positive convexity curves the price-yield relationship in the investor's favor: for equal-sized yield moves, gains exceed losses, and the duration-only estimate UNDERSTATES the price rise while OVERSTATING the price fall. B describes a hypothetical linear bond — duration alone is only accurate for small moves. C is exactly backwards: convexity cushions the downside, it doesn't worsen it."
  ),
  q(
    "m1-fix-6",
    "fixed",
    "Fixed Income",
    1,
    "In a corporate liquidation, the creditor class most likely to recover the highest percentage of its claim is:",
    ["senior secured debt.", "senior unsecured debt.", "subordinated debt."],
    0,
    "Correct: A. The priority waterfall pays claims in order of seniority, and SECURED creditors stand outside the general queue for the specific collateral pledged to them — they recover from that collateral first. Senior unsecured (B) is paid from what remains, and subordinated holders (C) collect only after senior unsecured claims are satisfied, which is why they demand the highest yields of the three in normal times."
  ),
  q(
    "m1-fix-7",
    "fixed",
    "Fixed Income",
    3,
    "Immediately after a coupon reset, the price of a floating-rate note with an unchanged credit quality most likely trades:",
    ["at a deep discount to par.", "close to par value.", "at a large premium to par."],
    1,
    "Correct: B. An FRN's coupon resets periodically to the reference rate plus a fixed quoted margin, so at each reset the bond effectively re-prices its interest rate to the current market — pulling its value back toward par. That is why FRN interest-rate risk is tiny (duration roughly equals the time to the NEXT reset). Persistent discounts or premiums (A, C) arise only when the issuer's required credit spread has moved away from the note's fixed quoted margin — ruled out here by the unchanged credit quality."
  ),
  q(
    "m1-fix-8",
    "fixed",
    "Fixed Income",
    2,
    "In a securitization, dividing the asset pool's cash flows into senior and subordinated tranches most directly serves to:",
    [
      "eliminate the credit risk of the underlying loans.",
      "redistribute credit risk among investors with different risk appetites.",
      "guarantee equal returns across all classes of investors.",
    ],
    1,
    "Correct: B. Tranching is credit-risk REDISTRIBUTION, not elimination: losses hit the subordinated (equity/junior) tranches first, insulating the senior notes, and investors self-select — yield-seeking buyers take the junior risk, conservative buyers take the protected senior paper. A is the classic pre-2008 misconception; the pool's total default risk is unchanged. C is the opposite of the design: unequal risk and return across tranches is the entire point."
  ),
  q(
    "m1-fix-9",
    "fixed",
    "Fixed Income",
    3,
    "For a callable corporate bond, the option-adjusted spread (OAS) compared with its Z-spread is most likely:",
    [
      "higher, because the option adds extra compensation.",
      "lower, because the Z-spread includes compensation for the call option that the OAS strips out.",
      "identical, since both are measured against the same benchmark curve.",
    ],
    1,
    "Correct: B. The Z-spread over the benchmark curve compensates for BOTH credit/liquidity risk and the investor-unfriendly call feature. The OAS 'removes' the option's cost, isolating the pure credit and liquidity compensation — so for a callable bond, OAS = Z-spread minus option cost, making it lower. (For a PUTable bond the relationship flips.) A has the adjustment backwards; C would hold only for an option-free bond, where the option cost is zero."
  ),
  q(
    "m1-fix-10",
    "fixed",
    "Fixed Income",
    2,
    "An investor most concerned with eliminating reinvestment risk over a known 10-year horizon should most appropriately purchase a:",
    [
      "10-year zero-coupon government bond held to maturity.",
      "10-year high-coupon bond, reinvesting each coupon as received.",
      "series of 1-year bonds rolled over annually.",
    ],
    0,
    "Correct: A. A zero-coupon bond has no interim cash flows to reinvest — the return over its life is locked in at purchase, and holding to maturity removes price risk too. The high-coupon bond (B) MAXIMIZES reinvestment risk: a large share of its total return depends on the unknown future rates earned on reinvested coupons. Rolling short bonds (C) converts the entire strategy into a bet on future rates — reinvestment risk in its purest form."
  ),
  // ---- Derivatives (6) ----
  q(
    "m1-der-1",
    "deriv",
    "Derivatives",
    1,
    "Compared with a forward contract, a futures contract most distinctively features:",
    [
      "customized terms negotiated privately between two parties.",
      "daily settlement of gains and losses through a clearinghouse.",
      "complete freedom from margin or collateral requirements.",
    ],
    1,
    "Correct: B. Futures are standardized, exchange-traded, and marked to market DAILY, with a clearinghouse interposed as counterparty to every trade — this daily settlement plus margin is what nearly eliminates counterparty credit risk. A describes forwards, which are bespoke OTC agreements. C is backwards: margin is required precisely BECAUSE of daily settlement; it is forwards that traditionally trade without margin (bearing credit risk instead)."
  ),
  q(
    "m1-der-2",
    "deriv",
    "Derivatives",
    2,
    "An investor pays a premium of $3 for a call option with a strike price of $50. At expiration the underlying trades at $55. The investor's profit per share is closest to:",
    ["$2", "$3", "$5"],
    0,
    "Correct: A. The call finishes in the money by max(0, S − X) = 55 − 50 = $5; net of the $3 premium, profit = 5 − 3 = $2. C ($5) is the payoff but forgets the option's cost. B ($3) merely restates the premium. Distinguishing PAYOFF (at expiry, gross) from PROFIT (net of premium) is the tested distinction — the breakeven here was $53."
  ),
  q(
    "m1-der-3",
    "deriv",
    "Derivatives",
    3,
    "For European options on a non-dividend-paying asset, put–call parity is most accurately expressed as:",
    [
      "call + PV(strike) = put + underlying price.",
      "call + underlying price = put + PV(strike).",
      "call − put = PV(strike) − underlying price.",
    ],
    0,
    "Correct: A. Parity: c + PV(X) = p + S₀. Both sides are portfolios with identical payoffs at expiration — a 'fiduciary call' (call plus a bond paying X) and a 'protective put' (stock plus put) each deliver max(S_T, X) — so arbitrage forces their prices equal today. B misplaces the underlying and bond. C rearranges to c − p = S₀ − PV(X) with the RIGHT side inverted; sign errors are exactly what this question hunts for."
  ),
  q(
    "m1-der-4",
    "deriv",
    "Derivatives",
    2,
    "In a plain-vanilla interest rate swap, the party paying the fixed rate most likely benefits when interest rates:",
    ["rise above the swap's fixed rate expectations.", "fall.", "remain exactly unchanged."],
    0,
    "Correct: A. The fixed-rate payer pays a locked rate and RECEIVES floating: as reference rates rise, the floating leg received grows while the fixed leg paid stays constant, so the swap gains value to the payer. Falling rates (B) favor the counterparty — the fixed-rate RECEIVER. With rates unchanged (C), a swap priced at market inception simply stays near zero value. Pay-fixed = positioned for rising rates is the essential intuition."
  ),
  q(
    "m1-der-5",
    "deriv",
    "Derivatives",
    2,
    "A call option with a strike of $45 trades for $4.50 while the underlying stock trades at $48. The option's time value is closest to:",
    ["$1.50", "$3.00", "$4.50"],
    0,
    "Correct: A. Option premium = intrinsic value + time value. Intrinsic value = max(0, S − X) = 48 − 45 = $3.00, so time value = 4.50 − 3.00 = $1.50 — the extra buyers pay for the possibility of further gains before expiry. B is the intrinsic value itself; C is the whole premium. Time value erodes toward zero at expiration, when only intrinsic value remains."
  ),
  q(
    "m1-der-6",
    "deriv",
    "Derivatives",
    1,
    "A wheat farmer wants to hedge the risk that prices fall before harvest. Her most appropriate position is to:",
    [
      "buy wheat futures contracts.",
      "sell wheat futures contracts.",
      "buy call options on wheat.",
    ],
    1,
    "Correct: B. The farmer is naturally LONG wheat — she owns the coming harvest — so the hedge is the opposite position: selling futures locks in today's price, and losses on the crop's value are offset by gains on the short futures if prices fall. Buying futures (A) doubles her exposure. Buying calls (C) profits when prices RISE, which is the direction that doesn't hurt her; the option-based hedge for a producer would be buying PUTS."
  ),
  // ---- Alternative Investments (6) ----
  q(
    "m1-alt-1",
    "alts",
    "Alternative Investments",
    2,
    "A commercial property generates annual net operating income of $240,000. Comparable properties trade at a capitalization rate of 6%. The property's implied value is closest to:",
    ["$1,440,000", "$4,000,000", "$14,400,000"],
    1,
    "Correct: B. The direct capitalization approach: value = NOI / cap rate = 240,000 / 0.06 = $4,000,000 — pricing the income stream as a perpetuity at the market-required yield. A multiplies NOI by the cap rate (240,000 × 6), inverting the formula. C slips a decimal in the division. Remember NOI is BEFORE financing costs and income taxes; the cap rate applies to the property, not the equity."
  ),
  q(
    "m1-alt-2",
    "alts",
    "Alternative Investments",
    2,
    "In a private equity fund's distribution waterfall, carried interest most accurately refers to:",
    [
      "the general partner's share of fund profits, typically paid after limited partners receive their capital and any hurdle return.",
      "the annual management fee charged on committed capital.",
      "the limited partners' pro-rata share of distributions.",
    ],
    0,
    "Correct: A. Carried interest ('carry', commonly 20%) is the GP's performance share, distributed per the waterfall — usually after LPs have received back contributed capital and often a preferred (hurdle) return. B is the separate management fee (commonly 1.5–2% on committed capital), earned regardless of performance. C describes ordinary LP distributions, which are returns OF and ON their own capital, not a performance allocation."
  ),
  q(
    "m1-alt-3",
    "alts",
    "Alternative Investments",
    2,
    "Hedge fund lockup periods and redemption gates most directly serve to:",
    [
      "protect the manager from having to sell less-liquid positions at fire-sale prices to meet redemptions.",
      "guarantee investors a minimum annual return.",
      "reduce the management fees investors pay.",
    ],
    0,
    "Correct: A. Lockups (no redemptions for an initial period) and gates (limits on how much can be withdrawn per redemption date) manage the mismatch between investors' demand for liquidity and the fund's less-liquid holdings — forced selling into stressed markets damages REMAINING investors most. B: nothing in a hedge fund guarantees returns. C: these are liquidity terms, unrelated to fee levels (if anything, investors demand fee concessions in EXCHANGE for accepting them)."
  ),
  q(
    "m1-alt-4",
    "alts",
    "Alternative Investments",
    3,
    "A commodity futures market is in contango. For an investor holding a passive long futures position that is rolled forward each expiry, the roll yield is most likely:",
    ["positive.", "negative.", "zero."],
    1,
    "Correct: B. Contango means futures prices exceed the spot price, with longer contracts costlier still. Each roll sells the expiring (cheaper, near-spot) contract and buys a more expensive deferred one; as that new contract converges DOWN toward spot, the long position bleeds value — negative roll yield. A describes backwardation, where deferred contracts are cheaper and convergence works in the long's favor. C would require a flat futures curve."
  ),
  q(
    "m1-alt-5",
    "alts",
    "Alternative Investments",
    1,
    "Core infrastructure investments — such as regulated utilities and toll roads — are most likely characterized by:",
    [
      "stable, often inflation-linked long-term cash flows and low liquidity.",
      "high short-term trading liquidity and volatile cash flows.",
      "returns driven primarily by venture-style capital appreciation.",
    ],
    0,
    "Correct: A. Brownfield core infrastructure sells essential services with regulated or contracted pricing — frequently indexed to inflation — producing bond-like, long-duration cash flows; the trade-off is illiquidity and large ticket sizes. B inverts both attributes. C describes venture capital's return profile; core infrastructure returns come mostly from steady income, with appreciation a secondary component."
  ),
  q(
    "m1-alt-6",
    "alts",
    "Alternative Investments",
    3,
    "The reported volatility of appraisal-based private market indexes, compared with the true volatility of the underlying assets, is most likely:",
    [
      "overstated, because appraisals react too quickly to market moves.",
      "understated, because appraisals lag and smooth actual price changes.",
      "identical, since appraisals are performed by independent experts.",
    ],
    1,
    "Correct: B. Appraisals update infrequently and anchor on prior valuations and stale comparables, so index returns are 'smoothed': measured volatility — and correlation with public markets — is biased DOWNWARD relative to economic reality. That flatters alternatives in naive portfolio optimizations, a key analytical caveat. A reverses the mechanism; C mistakes independence for timeliness — even excellent appraisers can only appraise with a lag."
  ),
  // ---- Portfolio Management (4) ----
  q(
    "m1-pm-1",
    "pm",
    "Portfolio Management & Wealth Planning",
    1,
    "The first step in the portfolio management process for a new client is most appropriately:",
    [
      "selecting securities expected to outperform.",
      "developing an investment policy statement covering objectives and constraints.",
      "choosing a performance benchmark for reporting.",
    ],
    1,
    "Correct: B. The planning step comes first: the IPS documents the client's return objectives and risk tolerance, plus constraints — liquidity, time horizon, taxes, legal/regulatory factors, and unique circumstances — and becomes the governing document for everything after. Security selection (A) belongs to the execution step and is meaningless without knowing what the portfolio must achieve. Benchmark choice (C) flows FROM the policy, not ahead of it."
  ),
  q(
    "m1-pm-2",
    "pm",
    "Portfolio Management & Wealth Planning",
    2,
    "According to capital market theory, the risk for which investors should expect compensation is:",
    [
      "total risk, including company-specific events.",
      "systematic risk only, since unsystematic risk can be diversified away.",
      "unsystematic risk only, since it reflects genuine business uncertainty.",
    ],
    1,
    "Correct: B. Diversification eliminates unsystematic (company-specific) risk essentially for free, so markets do not pay investors for bearing it — expected returns compensate only SYSTEMATIC (market) risk, measured by beta in the CAPM. A would imply poorly diversified investors earn more, which pricing by diversified marginal investors rules out. C names precisely the risk that earns nothing, however 'genuine' it feels at the company level."
  ),
  q(
    "m1-pm-3",
    "pm",
    "Portfolio Management & Wealth Planning",
    3,
    "The security market line (SML) differs from the capital market line (CML) in that the SML most accurately:",
    [
      "applies only to efficiently diversified portfolios, using total risk.",
      "prices any individual security or portfolio as a function of its beta.",
      "plots expected return against standard deviation.",
    ],
    1,
    "Correct: B. The SML is the CAPM drawn as a line: expected return versus BETA (systematic risk), and it applies to EVERY asset and portfolio, efficient or not — any security priced correctly plots on it. The CML, by contrast, uses standard deviation (total risk) on the x-axis and holds only for efficient combinations of the risk-free asset and the market portfolio. A and C each describe the CML's properties, not the SML's."
  ),
  q(
    "m1-pm-4",
    "pm",
    "Portfolio Management & Wealth Planning",
    2,
    "A portfolio returned 10% over a year in which the risk-free rate was 2%. The portfolio's standard deviation of returns was 16%. Its Sharpe ratio is closest to:",
    ["0.50", "0.63", "0.80"],
    0,
    "Correct: A. Sharpe ratio = (portfolio return − risk-free rate) / standard deviation = (10% − 2%) / 16% = 0.50 — half a unit of excess return per unit of total risk. B (0.625) divides the RAW return by volatility, forgetting to subtract the risk-free rate. C would require an excess return of 12.8%. The Sharpe ratio's use of TOTAL risk (not beta) is what distinguishes it from the Treynor ratio."
  ),
];

export const MOCK_SESSION_2: Question[] = [
  // ---- Ethics (14) ----
  q(
    "m2-eth-1",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "A research firm accepts a flat fee from a company to produce a research report on it, with the fee disclosed prominently in the report and not contingent on the report's conclusions. Under the Standards, this arrangement is:",
    [
      "prohibited, because issuer-paid research is inherently biased.",
      "acceptable, because the flat, disclosed fee preserves independence better than a conclusion-contingent fee would.",
      "acceptable only if the report carries a buy recommendation.",
    ],
    1,
    "Correct: B. Issuer-paid research is permitted under Standard I(B) when structured to protect independence: a flat fee agreed in advance (never contingent on conclusions or a favorable rating) with full, prominent disclosure so readers can weigh the conflict. A is too absolute — the Standards regulate the arrangement rather than banning it. C is exactly the corruption the rules exist to prevent: tying payment to a favorable conclusion."
  ),
  q(
    "m2-eth-2",
    "ethics",
    "Ethical & Professional Standards",
    3,
    "A member discovers her employer is engaging in an activity she reasonably believes is illegal. She reports it internally, but the firm refuses to stop. Under Standard I(A), she is required to:",
    [
      "dissociate from the activity, which may require resigning from the firm.",
      "report the violation to regulators immediately.",
      "continue working normally, since she personally is not executing the activity.",
    ],
    0,
    "Correct: A. When internal escalation fails, the Standards REQUIRE dissociation from the illegal or unethical conduct — asking for reassignment, refusing to participate, and, in persistent cases, resignation. B is a common trap: reporting to authorities may be advisable, or required by LOCAL LAW, but the Code and Standards themselves do not mandate whistleblowing. C fails because remaining involved with a group she knows is acting illegally links her to the violation."
  ),
  q(
    "m2-eth-3",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "An analyst sees an unverified social media post claiming a company's CEO is about to resign. The company has made no announcement. If the analyst trades on the rumor, the trade is:",
    [
      "a violation of Standard II(A), because the rumor is material nonpublic information.",
      "not a violation of Standard II(A), because an unverified public rumor is not reliable material nonpublic information.",
      "a violation of Standard II(B), because trading on rumors always manipulates markets.",
    ],
    1,
    "Correct: B. Standard II(A) governs MATERIAL NONPUBLIC information. A rumor circulating publicly on social media is public, and its unverified nature undercuts materiality (reasonable investors need reliable information for it to be material). Trading on it may be unwise, but it is not an MNPI violation — had the analyst confirmed the resignation through an insider, the analysis would flip. C misapplies II(B): TRADING on a rumor is not manipulation; STARTING a false rumor to move the price would be."
  ),
  q(
    "m2-eth-4",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "When marketing its track record, an investment manager includes only its five best-performing accounts in the 'representative' performance figures shown to prospects. This practice most likely violates Standard III(D) because the presentation is:",
    [
      "not fair, accurate, and complete.",
      "based on simulated rather than actual results.",
      "missing the required GIPS compliance statement.",
    ],
    0,
    "Correct: A. Standard III(D) requires performance presentations to be fair, accurate, and complete — cherry-picking the best accounts misrepresents the manager's actual results across ALL similar portfolios. B is inapplicable: these are real accounts, just selectively chosen (simulated results carry their own disclosure duties). C overstates the rule: GIPS compliance is voluntary and III(D) does not require it — though following GIPS is the recognized way to satisfy the standard."
  ),
  q(
    "m2-eth-5",
    "ethics",
    "Ethical & Professional Standards",
    3,
    "A client instructs his portfolio manager to route all trades through a specific broker in exchange for benefits the client receives directly. The commissions are somewhat higher than alternatives. The manager's most appropriate action is to:",
    [
      "refuse the instruction, because it compromises best execution.",
      "follow the instruction after informing the client that directed brokerage may cost him best execution.",
      "follow the instruction only if the broker also provides research to the manager.",
    ],
    1,
    "Correct: B. In client-DIRECTED brokerage, the brokerage belongs to the client, who may spend it as he wishes — the manager's duty is disclosure: tell the client the arrangement may prevent best execution and proceed. Refusing outright (A) substitutes the manager's judgment for the client's right to direct his own asset. C confuses this with soft dollars, where the MANAGER directs brokerage and must ensure client benefit; research to the manager is irrelevant here."
  ),
  q(
    "m2-eth-6",
    "ethics",
    "Ethical & Professional Standards",
    1,
    "Compliance with the GIPS standards may most accurately be claimed by:",
    [
      "any individual charterholder who follows the provisions.",
      "an investment management firm, on a firm-wide basis.",
      "a single top-performing composite within a firm.",
    ],
    1,
    "Correct: B. GIPS compliance is claimed by FIRMS, defined as distinct business entities, and the claim must cover the whole firm — every fee-paying discretionary portfolio assigned to a composite. Individuals (A) cannot claim compliance; neither can a single product or composite (C), which would recreate exactly the selective presentation GIPS exists to prevent."
  ),
  q(
    "m2-eth-7",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "Under the GIPS standards, a firm's composites must include:",
    [
      "all actual, fee-paying, discretionary portfolios managed to a similar strategy or mandate.",
      "only portfolios that outperformed their benchmark.",
      "model portfolios that demonstrate the strategy's intended results.",
    ],
    0,
    "Correct: A. The composite is GIPS's anti-cherry-picking device: every actual, fee-paying, DISCRETIONARY portfolio must be assigned to at least one composite grouped by strategy, so no live account can be quietly dropped from the record. B is precisely the survivorship/selection bias the rule targets. C fails on 'actual' — model or simulated portfolios cannot be commingled with real performance in a composite."
  ),
  q(
    "m2-eth-8",
    "ethics",
    "Ethical & Professional Standards",
    3,
    "A member is offered a supervisory role at a firm whose compliance procedures she believes are inadequate to prevent violations. Her most appropriate response under Standard IV(C) is to:",
    [
      "accept the role and rely on her personal vigilance to catch violations.",
      "decline supervisory responsibility in writing until the firm adopts reasonable compliance procedures.",
      "accept the role, since compliance is the compliance department's responsibility, not hers.",
    ],
    1,
    "Correct: B. Standard IV(C) makes supervisors responsible for reasonable prevention and detection of violations by those they oversee — and where the compliance system is too weak to allow that, the guidance is to DECLINE supervisory responsibility in writing until adequate procedures exist. A substitutes heroics for systems, which the Standard rejects as unreasonable. C tries to delegate away a duty that attaches personally to anyone with supervisory authority."
  ),
  q(
    "m2-eth-9",
    "ethics",
    "Ethical & Professional Standards",
    1,
    "In a research report, an analyst writes: 'Based on the company's contracted backlog, revenue will grow at least 8% next year — and I believe management's expansion strategy will outperform peers.' Under Standard V(B), the sentence is best described as:",
    [
      "compliant, if the backlog statement is factual and the strategy view is identified as opinion.",
      "a violation, because reports may not contain opinions.",
      "a violation, because forward-looking statements are prohibited.",
    ],
    0,
    "Correct: A. Standard V(B) requires analysts to distinguish FACT from OPINION — it does not banish opinions, which are the point of research. Contracted backlog is verifiable fact; 'I believe' properly flags the strategic judgment as opinion. B misreads the standard: opinion is fine when labeled. C is also wrong — projections are permitted (indeed expected), provided their basis and their nature as estimates are clear."
  ),
  q(
    "m2-eth-10",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "An analyst changes employers. Regarding the research records she compiled at her previous firm, she most appropriately:",
    [
      "takes copies of her models and client files, since she created them.",
      "recreates supporting records from public sources at the new firm rather than taking the old firm's records.",
      "relies on memory of her prior analyses when reissuing recommendations.",
    ],
    1,
    "Correct: B. Under Standard V(C), records created on the employer's behalf are the EMPLOYER'S property — taking them (A) violates both record-retention duties and Standard IV(A). At a new firm, the analyst must rebuild the supporting basis using public sources or new research before reissuing recommendations. C fails V(A)'s reasonable-basis requirement: memory is not documentation, and recommendations need records behind them."
  ),
  q(
    "m2-eth-11",
    "ethics",
    "Ethical & Professional Standards",
    2,
    "A portfolio manager's spouse holds a regular, fee-paying account at the manager's firm. When the firm issues a new recommendation, trades for the spouse's account should be executed:",
    [
      "after all other client accounts have traded, because family accounts are always personal.",
      "alongside other client accounts in the normal course, because a fee-paying family account is treated as any other client.",
      "before other clients, to avoid the appearance of front-running family interests.",
    ],
    1,
    "Correct: B. Standard VI(B) requires client trades to take priority over personal trades — but family accounts that are REGULAR FEE-PAYING CLIENT accounts must not be disadvantaged relative to other clients; treating them worse (A) breaches the manager's duty to that client. C inverts priority in the other direction, favoring the family account. 'Beneficial ownership' matters only for accounts in which the member effectively trades for personal benefit outside a normal client relationship."
  ),
  q(
    "m2-eth-12",
    "ethics",
    "Ethical & Professional Standards",
    1,
    "An adviser receives a payment from a fund company for each client she places into its funds. Under Standard VI(C), she must disclose the arrangement:",
    [
      "to clients and prospects before they act on her recommendation, describing the nature and value of the benefit.",
      "only to her employer, since referral fees are an internal matter.",
      "only if a client specifically asks about compensation arrangements.",
    ],
    0,
    "Correct: A. Referral-fee disclosure exists so clients can evaluate the recommendation's objectivity and its full cost BEFORE engaging — after-the-fact or on-request disclosure defeats the purpose. The disclosure runs to the employer AND to affected clients/prospects, covering the nature and value of the consideration. B stops one step short; C converts an affirmative duty into a passive one, which the Standard does not permit."
  ),
  q(
    "m2-eth-13",
    "ethics",
    "Ethical & Professional Standards",
    1,
    "After sitting for the CFA exam, a candidate posts on an online forum which broad topic areas 'felt overweighted' and describes two specific questions she found unfair. This conduct:",
    [
      "is acceptable, because the exam was already administered.",
      "violates Standard VII(A), because revealing exam content compromises the integrity of the CFA Program.",
      "is acceptable, provided she does not reveal the answers she chose.",
    ],
    1,
    "Correct: B. Standard VII(A) protects the integrity and confidentiality of the CFA Program: disclosing SPECIFIC exam questions — and even detailed commentary on tested content beyond the published curriculum topics — violates the candidate pledge, regardless of timing (A) and regardless of whether answers are shared (C). General study discussion is fine; the line is revealing what the exam actually asked."
  ),
  q(
    "m2-eth-14",
    "ethics",
    "Ethical & Professional Standards",
    1,
    "According to the CFA Institute Code of Ethics, members must place the integrity of the investment profession and the interests of clients:",
    [
      "above their own personal interests.",
      "on equal footing with their employer's interests.",
      "above all applicable legal requirements.",
    ],
    0,
    "Correct: A. The Code's ordering is explicit: the integrity of the profession and the interests of clients come BEFORE the member's own interests — the foundational principle from which the detailed Standards flow. B understates the hierarchy: employer duties are real but subordinate to client interests and market integrity. C garbles the relationship with law — members must comply with the stricter of law or the Code, not 'override' the law."
  ),
  // ---- Quantitative Methods (9) ----
  q(
    "m2-qnt-1",
    "quant",
    "Quantitative Methods",
    1,
    "An investment promises to pay $100 at the end of every year, forever. At a discount rate of 8%, the value of this perpetuity today is closest to:",
    ["$800", "$1,080", "$1,250"],
    2,
    "Correct: C. PV of a level perpetuity = payment / rate = 100 / 0.08 = $1,250. A multiplies 100 × 8, inverting the operation. B compounds one payment for one year — a formula that applies to nothing here. The perpetuity formula also underlies preferred stock valuation and the terminal value in dividend models, so the exam re-tests it in several costumes."
  ),
  q(
    "m2-qnt-2",
    "quant",
    "Quantitative Methods",
    2,
    "For a positively skewed unimodal return distribution, the most likely ordering of central-tendency measures, from smallest to largest, is:",
    ["mean, median, mode.", "mode, median, mean.", "median, mode, mean."],
    1,
    "Correct: B. Positive (right) skew means a long tail of large positive outcomes: the handful of extreme values drags the MEAN farthest right, the median sits in the middle, and the mode (the peak) stays left — mode < median < mean. A is the ordering for NEGATIVE skew. A quick mnemonic: the mean chases the tail. This matters practically because for skewed hedge-fund-like returns, the mean overstates the 'typical' outcome."
  ),
  q(
    "m2-qnt-3",
    "quant",
    "Quantitative Methods",
    2,
    "A return distribution is leptokurtic (excess kurtosis greater than zero). An analyst who assumes normality when measuring this portfolio's risk will most likely:",
    [
      "underestimate the probability of extreme outcomes.",
      "overestimate the probability of extreme outcomes.",
      "estimate tail probabilities correctly, since kurtosis affects only the center.",
    ],
    0,
    "Correct: A. Leptokurtic distributions have FATTER TAILS (and a taller center) than the normal: extreme gains and losses occur more often than the normal curve admits. Risk measures built on normality — standard VaR among them — therefore understate the chance of severe outcomes, a failure made famous in every market crisis. B reverses the bias, and C is false: fat tails are precisely where kurtosis bites."
  ),
  q(
    "m2-qnt-4",
    "quant",
    "Quantitative Methods",
    2,
    "An analyst tests a hypothesis about a population mean using a sample of 20 observations from an approximately normal population whose variance is unknown. The most appropriate test statistic follows a:",
    ["z-distribution.", "t-distribution with 19 degrees of freedom.", "chi-square distribution with 20 degrees of freedom."],
    1,
    "Correct: B. With the population variance UNKNOWN and a small sample, the sample standard deviation substitutes for σ, and the resulting statistic follows a t-distribution with n − 1 = 19 degrees of freedom — its fatter tails price in the extra estimation uncertainty. The z-statistic (A) requires a known population variance (or a large sample as an approximation). Chi-square (C) tests hypotheses about a VARIANCE, not a mean."
  ),
  q(
    "m2-qnt-5",
    "quant",
    "Quantitative Methods",
    2,
    "In hypothesis testing, a Type I error is best described as:",
    [
      "rejecting a true null hypothesis, with probability equal to the significance level.",
      "failing to reject a false null hypothesis.",
      "selecting the wrong test statistic for the data.",
    ],
    0,
    "Correct: A. Type I error is the false positive — rejecting a null that is actually true — and its probability is set directly by the chosen significance level α (a 5% test accepts a 5% false-positive rate). B defines the TYPE II error (the false negative, probability β, related to the test's power = 1 − β). C is a methodological mistake, not a defined error type. The two error types trade off: shrinking α raises β, all else equal."
  ),
  q(
    "m2-qnt-6",
    "quant",
    "Quantitative Methods",
    2,
    "A portfolio returns +50% in year one and −50% in year two. Which statement about its mean returns is most accurate?",
    [
      "The arithmetic mean of 0% correctly describes the investor's compound experience.",
      "The geometric mean is about −13.4% per year, and it — not the arithmetic mean — reflects the actual compound loss.",
      "Both means equal zero, since the gains and losses offset.",
    ],
    1,
    "Correct: B. A dollar grows to 1.50, then falls to 0.75 — a 25% total loss. Geometric mean = √(1.50 × 0.50) − 1 = √0.75 − 1 ≈ −13.4% per year, which compounds precisely to that outcome. The arithmetic mean (+50 − 50)/2 = 0% (A, C) describes the average single period but systematically overstates multi-period growth whenever returns vary — the gap widens with volatility. For 'how did the investment actually do over time,' geometric is the honest measure."
  ),
  q(
    "m2-qnt-7",
    "quant",
    "Quantitative Methods",
    2,
    "A contract pays $10,000 at the BEGINNING of each year for three years. At a 5% discount rate, its present value is closest to:",
    ["$27,232", "$28,594", "$30,000"],
    1,
    "Correct: B. This is an annuity due. PV(ordinary) = 10,000 × [(1 − 1.05⁻³)/0.05] = 10,000 × 2.7232 = 27,232; shifting every payment one year earlier multiplies by 1.05: 27,232 × 1.05 = $28,594. A prices the ordinary annuity, missing that payments start immediately. C simply adds the undiscounted payments. On a financial calculator this is the BGN-mode adjustment — forgetting to switch modes is the classic exam-day error."
  ),
  q(
    "m2-qnt-8",
    "quant",
    "Quantitative Methods",
    3,
    "An investor requires a minimum return of 4%. Fund X has an expected return of 10% with standard deviation 12%; Fund Y has an expected return of 8% with standard deviation 10%. Using Roy's safety-first criterion, the investor should choose:",
    [
      "Fund X, because its safety-first ratio of 0.50 is higher.",
      "Fund Y, because its lower standard deviation means less shortfall risk.",
      "either fund, because both exceed the 4% threshold on average.",
    ],
    0,
    "Correct: A. Roy's safety-first ratio = (E(R) − threshold) / σ. Fund X: (10 − 4)/12 = 0.50; Fund Y: (8 − 4)/10 = 0.40. The higher ratio means fewer standard deviations separate the expected return from the disaster threshold — a LOWER probability of falling below 4%. B looks at volatility alone, ignoring X's bigger cushion above the threshold. C ignores that the criterion ranks funds by shortfall probability, not by a pass/fail test of the mean."
  ),
  q(
    "m2-qnt-9",
    "quant",
    "Quantitative Methods",
    2,
    "In the estimated regression 'stock excess return = 0.02 + 1.4 × (market excess return)', the coefficient 1.4 is most appropriately interpreted as:",
    [
      "the stock's expected return when the market return is zero.",
      "the expected change in the stock's excess return for a one-unit change in the market's excess return.",
      "the proportion of the stock's variance explained by the market.",
    ],
    1,
    "Correct: B. The slope coefficient measures sensitivity: each one-percentage-point move in the market's excess return is associated with an expected 1.4-point move in the stock's — in this financial context, the stock's beta estimate. A describes the INTERCEPT (0.02). C describes R², a different output of the regression entirely; a steep slope says nothing by itself about how tightly the points cluster around the line."
  ),
  // ---- Economics (9) ----
  q(
    "m2-eco-1",
    "econ",
    "Economics",
    1,
    "A government imposes a rent ceiling below the market-clearing rent. The most likely result is:",
    [
      "a persistent shortage of rental housing.",
      "a persistent surplus of rental housing.",
      "no change, since price controls only bind above equilibrium.",
    ],
    0,
    "Correct: A. A binding price CEILING (set below equilibrium) raises quantity demanded and lowers quantity supplied — a shortage, with non-price rationing (queues, side payments, quality deterioration) filling the gap, plus deadweight loss. B describes a binding price FLOOR, like a minimum wage above equilibrium. C has the geometry backwards: a ceiling ABOVE equilibrium is the one that doesn't bind."
  ),
  q(
    "m2-eco-2",
    "econ",
    "Economics",
    1,
    "The cross-price elasticity of demand between good A and good B is +2.0. The two goods are best described as:",
    ["substitutes.", "complements.", "unrelated goods."],
    0,
    "Correct: A. A POSITIVE cross-price elasticity means a rise in B's price increases the quantity demanded of A — buyers switch toward A, the mark of substitutes (think two coffee brands). Complements (B) show negative cross-price elasticity: pricier printers reduce ink demand. Unrelated goods (C) show cross-price elasticity near zero. The sign identifies the relationship; the magnitude (2.0) just says it's strong."
  ),
  q(
    "m2-eco-3",
    "econ",
    "Economics",
    2,
    "The defining characteristic of an oligopoly, compared with other market structures, is that firms:",
    [
      "are price takers facing perfectly elastic demand.",
      "make decisions that explicitly account for rivals' expected reactions.",
      "face no barriers to entry in the long run.",
    ],
    1,
    "Correct: B. Oligopoly means FEW, LARGE, INTERDEPENDENT firms: each one's pricing and output choices materially affect rivals, so strategy is set anticipating their responses — the reason game theory and kinked-demand models belong to this structure. A describes perfect competition. C fails because meaningful entry barriers are precisely what keeps the number of firms small in the first place."
  ),
  q(
    "m2-eco-4",
    "econ",
    "Economics",
    2,
    "Because consumers shift purchases toward goods whose relative prices have fallen, a fixed-basket consumer price index most likely:",
    ["overstates the true increase in the cost of living.", "understates the true increase in the cost of living.", "measures the cost of living exactly."],
    0,
    "Correct: A. Substitution bias: a fixed basket keeps pretending consumers buy the old mix even as they rationally shift toward relatively cheaper items, so the index rises faster than the true cost of maintaining living standards. Quality improvements and new goods bias the fixed-basket CPI upward as well. B would require the opposite behavior — consumers doubling down on items that got pricier — and C is unattainable for any fixed-weight index in a changing economy."
  ),
  q(
    "m2-eco-5",
    "econ",
    "Economics",
    2,
    "Country A can produce either 10 units of cloth or 5 units of wine with one unit of labor; Country B can produce either 4 units of cloth or 4 units of wine. Based on comparative advantage, Country A should most appropriately specialize in:",
    ["cloth, because its opportunity cost of cloth is lower than B's.", "wine, because it can produce more wine than B in absolute terms.", "both goods, because it has an absolute advantage in both."],
    0,
    "Correct: A. Opportunity costs decide specialization: for A, one cloth costs 0.5 wine; for B, one cloth costs 1.0 wine — A is the cheaper cloth producer, while B's wine (1 cloth per wine) is cheaper than A's (2 cloth per wine). So A specializes in cloth, B in wine, and both gain from trade. B (the choice) misuses absolute quantities. C repeats the classic error: absolute advantage in everything does not eliminate the gains from specializing along COMPARATIVE lines."
  ),
  q(
    "m2-eco-6",
    "econ",
    "Economics",
    2,
    "According to relative purchasing power parity, a country with persistently higher inflation than its trading partners should expect its currency to:",
    ["depreciate by approximately the inflation differential.", "appreciate, as higher prices signal a stronger economy.", "remain stable, since exchange rates ignore price levels."],
    0,
    "Correct: A. Relative PPP links currency movements to inflation differentials: if domestic prices rise 5% faster than abroad, the currency must fall roughly 5% for the country's goods to stay internationally competitive — otherwise its exports price themselves out of world markets. B reverses the logic (high inflation erodes, not signals, value). C denies the mechanism entirely. PPP holds loosely and slowly in practice, but it anchors long-run exchange-rate expectations."
  ),
  q(
    "m2-eco-7",
    "econ",
    "Economics",
    3,
    "A country runs a persistent current account deficit. As a matter of balance-of-payments accounting, this deficit is most likely matched by:",
    [
      "a surplus in the capital and financial account — net foreign investment into the country.",
      "an equal deficit in the capital and financial account.",
      "an accumulation of official reserves with no other flows.",
    ],
    0,
    "Correct: A. The balance of payments must balance: importing more goods, services, and income payments than you export (current account deficit) is financed by selling assets or borrowing from abroad — net capital INFLOWS, i.e., a capital/financial account surplus. The U.S. pattern for decades. B would violate the accounting identity — both accounts cannot be in deficit together. C reverses the reserve mechanics: financing a deficit tends to DRAW DOWN reserves, not build them."
  ),
  q(
    "m2-eco-8",
    "econ",
    "Economics",
    2,
    "An economy experiences rising price levels and falling real output simultaneously (stagflation). Within the AD–AS framework, this combination is most likely caused by:",
    [
      "a leftward shift of short-run aggregate supply, such as an energy price shock.",
      "a rightward shift of aggregate demand from fiscal stimulus.",
      "a rightward shift of long-run aggregate supply from productivity gains.",
    ],
    0,
    "Correct: A. Only a NEGATIVE SUPPLY shock moves prices and output in opposite directions: costlier inputs shift SRAS left, raising the price level while shrinking output — the 1970s oil-shock signature that also traps policymakers (stimulating demand worsens inflation; fighting inflation deepens the slump). B raises BOTH output and prices. C raises output while easing prices — the happy case, and the opposite of stagflation."
  ),
  q(
    "m2-eco-9",
    "econ",
    "Economics",
    2,
    "According to the quantity theory of money, if velocity and real output are constant, a sustained 8% growth rate of the money supply most likely produces:",
    ["approximately 8% inflation.", "approximately 8% real GDP growth.", "no change in the price level."],
    0,
    "Correct: A. From MV = PY with V and Y fixed, every percentage point of money growth passes directly into the price level — 8% money growth yields roughly 8% inflation. This is the long-run neutrality view: money growth ultimately prices, not production. B would require the new money to conjure real output, contradicting the fixed-Y assumption. C would require velocity to fall exactly in step with money growth, which the question rules out."
  ),
  // ---- Financial Statement Analysis (13) ----
  q(
    "m2-fra-1",
    "fra",
    "Financial Statement Analysis",
    1,
    "Net income for the period, less any dividends declared, most directly increases which balance sheet account?",
    ["Retained earnings.", "Contributed capital.", "Accumulated other comprehensive income."],
    0,
    "Correct: A. The income statement articulates with the balance sheet through retained earnings: ending RE = beginning RE + net income − dividends declared. Contributed capital (B) changes only through share issuance and buybacks, not operating results. AOCI (C) collects items that BYPASS net income — currency translation, certain hedge and pension effects — so routing net income there double-counts by definition."
  ),
  q(
    "m2-fra-2",
    "fra",
    "Financial Statement Analysis",
    3,
    "An online travel platform collects $1,000 from a customer for a flight, remits $920 to the airline, and keeps $80. The platform never controls the ticket. Under the revenue standards, the platform most appropriately reports revenue of:",
    ["$1,000.", "$80.", "$920."],
    1,
    "Correct: B. The control principle decides gross versus net: an AGENT that merely arranges the sale — never controlling the good or service, not bearing inventory risk, not setting the full price — reports only its commission ($80) as revenue. Reporting $1,000 (A) is principal-style gross reporting, a classic revenue-inflation red flag for platforms. C is the airline's revenue, not the platform's. Note net reporting leaves PROFIT identical; it's the top line that shrinks."
  ),
  q(
    "m2-fra-3",
    "fra",
    "Financial Statement Analysis",
    2,
    "A company reports cost of goods sold of $730,000, beginning inventory of $90,000, and ending inventory of $110,000. Its days of inventory on hand is closest to:",
    ["37 days", "50 days", "55 days"],
    1,
    "Correct: B. Average inventory = (90,000 + 110,000)/2 = 100,000. Inventory turnover = COGS / average inventory = 730,000 / 100,000 = 7.3×. Days of inventory = 365 / 7.3 = 50 days. A uses ending inventory with sales rather than COGS; C uses ending inventory (110,000) instead of the average — smaller errors than they look, which is why the exam offers them as answer choices."
  ),
  q(
    "m2-fra-4",
    "fra",
    "Financial Statement Analysis",
    2,
    "Under IFRS, a long-lived asset is impaired when its carrying amount exceeds its recoverable amount, defined as:",
    [
      "the higher of fair value less costs of disposal and value in use.",
      "undiscounted expected future cash flows.",
      "original cost less accumulated depreciation.",
    ],
    0,
    "Correct: A. IFRS's one-step test compares carrying amount against the RECOVERABLE amount — the higher of (i) fair value less costs of disposal and (ii) value in use (discounted future cash flows). B describes the US GAAP FIRST step, whose undiscounted-cash-flow screen makes impairments rarer and later under GAAP. C is just book value — comparing carrying amount to itself would never trigger anything."
  ),
  q(
    "m2-fra-5",
    "fra",
    "Financial Statement Analysis",
    2,
    "Under IFRS, expenditures on the RESEARCH phase of an internal project are most appropriately:",
    [
      "expensed as incurred, while qualifying development-phase costs are capitalized.",
      "capitalized, while development costs are expensed.",
      "capitalized in full once the project is commercially launched.",
    ],
    0,
    "Correct: A. IFRS splits internal projects at the point technical and commercial feasibility is demonstrated: research costs (searching for new knowledge) are expensed as incurred; development costs meeting the strict capitalization criteria are capitalized as an intangible asset. B inverts the treatment. C misstates timing — launch is not the trigger, feasibility is, and costs already expensed stay expensed. (US GAAP expenses both phases, software being the notable exception — a standard IFRS/GAAP contrast.)"
  ),
  q(
    "m2-fra-6",
    "fra",
    "Financial Statement Analysis",
    3,
    "A company issues a bond at a discount to par. Under the effective interest method, over the bond's life the annual interest expense will most likely:",
    ["increase.", "decrease.", "stay constant."],
    0,
    "Correct: A. Interest expense = effective market rate × CARRYING amount. A discount bond's carrying amount accretes upward toward par each period (the amortized discount adds to the balance), so the expense — a fixed rate on a growing base — rises over time. B describes a PREMIUM bond, whose carrying amount amortizes downward. C describes coupon CASH PAID, which is constant; the divergence between cash coupon and accrual expense is the entire point of the method."
  ),
  q(
    "m2-fra-7",
    "fra",
    "Financial Statement Analysis",
    1,
    "In a common-size income statement, each line item is most appropriately expressed as a percentage of:",
    ["total revenue.", "total assets.", "net income."],
    0,
    "Correct: A. Common-size income statements scale every line by REVENUE, turning margins into directly comparable percentages across companies of different sizes and across time. Total assets (B) is the scaling base for the common-size BALANCE SHEET. Scaling by net income (C) would divide by the statement's own bottom line — producing ratios with no standard analytical meaning."
  ),
  q(
    "m2-fra-8",
    "fra",
    "Financial Statement Analysis",
    1,
    "Compared with the current ratio, the quick ratio most notably excludes:",
    ["inventory.", "accounts receivable.", "marketable securities."],
    0,
    "Correct: A. The quick (acid-test) ratio = (cash + short-term marketable securities + receivables) / current liabilities — it strips out INVENTORY, the current asset furthest from cash and the one whose liquidation value is least certain in a pinch (prepaid expenses are excluded too). Receivables (B) and marketable securities (C) stay in the numerator; they are one collection or one sale away from cash."
  ),
  q(
    "m2-fra-9",
    "fra",
    "Financial Statement Analysis",
    3,
    "During a period of FALLING input prices, a company using LIFO rather than FIFO will most likely report:",
    ["lower gross profit and lower taxes.", "higher gross profit and higher taxes.", "identical results under both methods."],
    1,
    "Correct: B. Reverse the usual scenario: when prices FALL, LIFO charges the newest — now CHEAPEST — costs to COGS, so gross profit, income, and taxes are all HIGHER than under FIFO, while inventory carries the older, more expensive layers. A is the rising-price answer, reflexively applied — exactly the trap. C would require stable prices. The principle, not the memorized direction, is what the exam is testing here."
  ),
  q(
    "m2-fra-10",
    "fra",
    "Financial Statement Analysis",
    2,
    "Under US GAAP, dividends PAID to shareholders are classified on the statement of cash flows as:",
    ["an operating activity.", "an investing activity.", "a financing activity."],
    2,
    "Correct: C. US GAAP fixes the classifications: dividends PAID are financing outflows (a return of capital to owners), while interest paid, interest received, and dividends RECEIVED all sit in operating. B confuses returns TO investors with investments the firm makes. Under IFRS, by contrast, dividends paid may be operating or financing — the flexibility contrast between frameworks is a recurring exam angle."
  ),
  q(
    "m2-fra-11",
    "fra",
    "Financial Statement Analysis",
    1,
    "A company reports EBIT of $200 million and interest expense of $40 million. Its interest coverage ratio is closest to:",
    ["0.2×", "5.0×", "6.0×"],
    1,
    "Correct: B. Interest coverage = EBIT / interest expense = 200 / 40 = 5.0× — operating earnings cover the interest bill five times over, a solvency cushion creditors watch closely. A inverts the ratio (40/200). C would require EBIT of 240; adding back items beyond EBIT (like using EBITDA) produces a different, more permissive coverage measure that should be labeled as such."
  ),
  q(
    "m2-fra-12",
    "fra",
    "Financial Statement Analysis",
    3,
    "Under US GAAP, a company concludes it is more likely than not that a portion of its deferred tax asset will not be realized. The company most appropriately:",
    [
      "establishes a valuation allowance, reducing the reported deferred tax asset and increasing tax expense.",
      "derecognizes the entire deferred tax asset permanently.",
      "reclassifies the deferred tax asset as a deferred tax liability.",
    ],
    0,
    "Correct: A. US GAAP keeps the gross DTA on the books but nets it against a VALUATION ALLOWANCE for the portion unlikely to be used (future taxable income being the fuel DTAs need); creating or increasing the allowance flows through tax expense, cutting income. Analysts watch allowance reversals — they can manufacture earnings. B is too absolute: only the doubtful portion is reserved, and allowances can reverse. C invents a reclassification that has no basis — a doubtful asset does not become an obligation."
  ),
  q(
    "m2-fra-13",
    "fra",
    "Financial Statement Analysis",
    3,
    "Two companies report identical net income, but Company X's earnings consist mostly of accruals while Company Y's are backed largely by operating cash flow. Earnings quality analysis most likely concludes that:",
    [
      "X's earnings are more sustainable, since accruals reflect sophisticated accounting.",
      "Y's earnings are higher quality, since cash-backed earnings are more likely to persist.",
      "the companies' earnings quality is identical, since net income is equal.",
    ],
    1,
    "Correct: B. The accruals component of earnings is the less persistent, more manipulable part — large positive accruals (income far above cash flow) statistically predict weaker future earnings and more frequent restatements. Cash-backed earnings persist. A romanticizes exactly the red flag; C stops at the bottom line, which is the one place earnings-quality analysis refuses to stop. Comparing net income to CFO is among the simplest, most effective screens in the toolkit."
  ),
  // ---- Corporate Issuers (9) ----
  q(
    "m2-cor-1",
    "corp",
    "Corporate Issuers",
    2,
    "On the ex-dividend date, the price of a stock paying a $1.00 dividend will most likely, all else equal:",
    ["fall by approximately $1.00.", "rise by approximately $1.00.", "be unaffected by the dividend."],
    0,
    "Correct: A. Buyers on or after the ex-date no longer receive the declared dividend, so the share is worth roughly the dividend less than the day before — the price gaps down by about $1.00 at the open (taxes and market noise blur the exactness). B has the direction backwards. C ignores that the dividend is real value leaving the company; a share cum-dividend and ex-dividend are different claims."
  ),
  q(
    "m2-cor-2",
    "corp",
    "Corporate Issuers",
    1,
    "A project costs $100,000 and produces level cash inflows of $30,000 per year. Its payback period is closest to:",
    ["2.9 years", "3.3 years", "4.0 years"],
    1,
    "Correct: B. Payback = initial investment / annual cash flow = 100,000 / 30,000 = 3.33 years. A and C bracket the number to punish rounding guesses. Remember payback's known defects — it ignores the time value of money and EVERYTHING after the cutoff — which is why it serves as a liquidity screen alongside, never instead of, NPV."
  ),
  q(
    "m2-cor-3",
    "corp",
    "Corporate Issuers",
    2,
    "According to pecking order theory, when financing new investment a company will most likely prefer, in order:",
    [
      "internal funds, then debt, then new equity.",
      "new equity, then debt, then internal funds.",
      "debt, then internal funds, then new equity.",
    ],
    0,
    "Correct: A. Pecking order ranks financing by information sensitivity: internal funds require no market scrutiny; debt sends a modest signal; issuing EQUITY tends to signal managers think shares are overvalued, so it comes last and markets often mark the stock down on announcement. B is exactly reversed. C promotes debt above internal cash, contradicting the theory's core — firms use the funding that reveals the least."
  ),
  q(
    "m2-cor-4",
    "corp",
    "Corporate Issuers",
    2,
    "A bond indenture prohibits the issuer from selling major assets or paying dividends above a stated level. These provisions are best described as:",
    [
      "negative covenants protecting bondholders.",
      "affirmative covenants requiring specific actions.",
      "call protection benefiting the issuer.",
    ],
    0,
    "Correct: A. Covenants that FORBID actions — asset sales, extra debt, outsized dividends — are negative (restrictive) covenants, fencing off the borrower behaviors that would shift value from creditors to shareholders. Affirmative covenants (B) compel actions: pay taxes, maintain insurance, deliver financials. C is unrelated — call protection restricts early REDEMPTION and protects the investor, not the issuer."
  ),
  q(
    "m2-cor-5",
    "corp",
    "Corporate Issuers",
    1,
    "The internal rate of return of a project is most accurately defined as the discount rate at which:",
    [
      "the project's net present value equals zero.",
      "the project's payback period equals its life.",
      "the profitability index equals zero.",
    ],
    0,
    "Correct: A. The IRR is the rate that equates the present value of inflows with the initial outlay — NPV = 0. That definition drives the decision rule (accept when IRR exceeds the required return) and explains IRR's quirks: non-conventional cash flows can produce multiple rates satisfying it. B is unrelated arithmetic. C misstates the profitability index, which equals 1.0 (not zero) at the IRR, since PI = PV of inflows / initial cost."
  ),
  q(
    "m2-cor-6",
    "corp",
    "Corporate Issuers",
    2,
    "A company has EBIT of $100 million and interest expense of $20 million. Its degree of financial leverage is closest to:",
    ["1.11", "1.25", "5.00"],
    1,
    "Correct: B. DFL = EBIT / (EBIT − interest) = 100 / 80 = 1.25: a 10% swing in operating income becomes a 12.5% swing in earnings per share, because the fixed $20m interest bill doesn't flex with EBIT. A inverts numerator and denominator. C is the interest coverage ratio (100/20) wearing the wrong label — related inputs, entirely different measure."
  ),
  q(
    "m2-cor-7",
    "corp",
    "Corporate Issuers",
    2,
    "A founder holds Class B shares carrying ten votes each, while public investors hold Class A shares with one vote each. From a governance standpoint, this dual-class structure most likely:",
    [
      "aligns control with economic ownership.",
      "entrenches insiders by separating voting control from economic interest.",
      "benefits public shareholders by ensuring stable leadership.",
    ],
    1,
    "Correct: B. Dual-class structures let insiders control outcomes far beyond their share of the economics — blunting the market for corporate control and the shareholder vote, the two big external discipline mechanisms. That is entrenchment, and governance-focused investors price it as risk. A describes the one-share-one-vote principle these structures abandon. C repackages entrenchment as 'stability' — sometimes argued, but it is the bull case for the STRUCTURE'S beneficiaries, not a governance strength."
  ),
  q(
    "m2-cor-8",
    "corp",
    "Corporate Issuers",
    2,
    "Which of the following is best classified as a PRIMARY source of corporate liquidity?",
    [
      "Cash flow from operations and existing cash balances.",
      "Selling a division to raise emergency funds.",
      "Renegotiating debt agreements with creditors.",
    ],
    0,
    "Correct: A. Primary liquidity sources are the routine ones a healthy company draws on without disrupting the business: operating cash flow, cash on hand, short-term investments, and established credit lines. Asset sales (B) and debt restructuring (C) are SECONDARY sources — available in stress, but their use signals trouble and typically destroys or transfers value. The primary/secondary distinction is exactly about that difference in cost and signal."
  ),
  q(
    "m2-cor-9",
    "corp",
    "Corporate Issuers",
    2,
    "An analyst incorporating ESG considerations into a bond valuation most appropriately treats material environmental risks as:",
    [
      "factors affecting credit risk and value, analyzed like other business risks.",
      "grounds for automatic exclusion from the portfolio.",
      "irrelevant, since ESG concerns only equity holders.",
    ],
    0,
    "Correct: A. ESG INTEGRATION means folding financially material factors — potential environmental liabilities, transition risk, stranded assets — into the analysis of cash flows and credit quality alongside every other risk driver. B describes negative screening, a different (values-based) approach the question doesn't ask about. C is doubly wrong: creditors often bear ESG-driven losses first — environmental fines and remediation claims rank ahead of shareholders."
  ),
  // ---- Equity Investments (10) ----
  q(
    "m2-eqt-1",
    "equity",
    "Equity Investments",
    2,
    "An investor sells short 100 shares of a stock at $50. The maximum possible loss on the position is:",
    ["$5,000.", "theoretically unlimited.", "limited to the margin posted."],
    1,
    "Correct: B. A short seller profits as the price falls but loses as it rises — and there is no ceiling on how high a stock can go, so the potential loss is unbounded. That asymmetry (maximum gain $5,000 if the stock goes to zero; unlimited downside) is THE defining risk of shorting. A is the maximum GAIN, reversed. C confuses the collateral posted with the loss exposure; margin calls simply demand more collateral as losses mount."
  ),
  q(
    "m2-eqt-2",
    "equity",
    "Equity Investments",
    2,
    "Market-capitalization-weighted indexes commonly adjust weights by free float in order to:",
    [
      "reflect only the shares actually available to public investors.",
      "give smaller companies greater influence in the index.",
      "reduce the index's turnover and rebalancing costs.",
    ],
    0,
    "Correct: A. Free-float adjustment excludes strategic, insider, and government holdings that never trade, so the index weights match the opportunity set investors can actually buy — crucial for index funds that must replicate holdings in real markets. B describes equal weighting's effect, not float adjustment. C is a property of cap-weighting generally (it self-rebalances), not the float adjustment specifically."
  ),
  q(
    "m2-eqt-3",
    "equity",
    "Equity Investments",
    3,
    "An analyst values a young company using a two-stage dividend discount model: five years of rapid growth, then stable growth forever. The largest share of the estimated value most likely comes from:",
    [
      "the present value of the terminal value.",
      "the present value of the first five years' dividends.",
      "the current book value of equity.",
    ],
    0,
    "Correct: A. For growth companies paying modest early dividends, the terminal value — the stable-phase perpetuity captured at the end of stage one — routinely represents well over half, often 70–80%, of total estimated value. That concentration is the model's practical warning: small changes in the terminal growth rate or required return swing the valuation dramatically. B is usually the smaller slice; C isn't a component of a DDM at all."
  ),
  q(
    "m2-eqt-4",
    "equity",
    "Equity Investments",
    2,
    "All else equal, a stock's justified price-to-earnings ratio will most likely be higher when:",
    [
      "its expected dividend growth rate is higher.",
      "its required rate of return is higher.",
      "its retention ratio rises while ROE equals the required return.",
    ],
    0,
    "Correct: A. From P/E = payout / (r − g): faster growth shrinks the denominator and lifts the justified multiple — the fundamental reason growth stocks carry high P/Es. Higher required return (B) does the opposite, expanding (r − g). C is the subtle one: when ROE merely EQUALS r, retaining more earnings adds growth that creates no value — g rises but payout falls proportionately, leaving the multiple unchanged; retention only lifts P/E when reinvestment earns MORE than r."
  ),
  q(
    "m2-eqt-5",
    "equity",
    "Equity Investments",
    1,
    "Active portfolio management is most fundamentally premised on the belief that:",
    [
      "markets misprice securities often enough that mispricings can be identified and exploited.",
      "diversification eliminates all portfolio risk.",
      "securities' prices always equal their intrinsic values.",
    ],
    0,
    "Correct: A. Active management only earns its fees if price and intrinsic value DIVERGE detectably and converge after you trade — the direct rejection of C, which describes perfect efficiency (and implies indexing as the rational strategy). B is a claim about risk, not mispricing, and an overstated one: diversification removes only the unsystematic portion."
  ),
  q(
    "m2-eqt-6",
    "equity",
    "Equity Investments",
    1,
    "Which company's earnings are most likely to be classified as cyclical?",
    [
      "An automobile manufacturer.",
      "A regulated electric utility.",
      "A discount grocery chain.",
    ],
    0,
    "Correct: A. Autos are the textbook cyclical: big-ticket, postponable purchases usually financed with credit, so demand swings violently with income, confidence, and interest rates. Utilities (B) and grocers (C) sell necessities with inelastic demand — the defensive/non-cyclical camp whose earnings hold up in recessions. Classifying industries by economic sensitivity is the first sorting step in top-down analysis."
  ),
  q(
    "m2-eqt-7",
    "equity",
    "Equity Investments",
    2,
    "When valuing a private company by comparison to publicly traded peers, an analyst most appropriately applies:",
    [
      "a discount for the lack of marketability of the private shares.",
      "a premium, since private companies are scarcer than public ones.",
      "no adjustment, since comparable multiples transfer directly.",
    ],
    0,
    "Correct: A. Public-peer multiples embed the value of instant liquidity — a public holder can sell in seconds at a visible price. Private shares cannot, so a discount for lack of marketability (frequently sizable) adjusts the borrowed multiple to the private reality; a discount for lack of CONTROL may also apply to minority stakes. B invents value from scarcity that buyers do not pay for. C ignores the liquidity difference that separates the two markets."
  ),
  q(
    "m2-eqt-8",
    "equity",
    "Equity Investments",
    1,
    "The core premise of technical analysis is most accurately that:",
    [
      "market prices reflect the collective psychology of buyers and sellers, and price patterns tend to repeat.",
      "security prices always converge quickly to intrinsic value.",
      "financial statement analysis identifies undervalued securities.",
    ],
    0,
    "Correct: A. Technical analysis studies price and volume on the theory that supply, demand, and crowd psychology leave recurring, tradable footprints in the data — no appeal to intrinsic value required. B is closer to an efficient-markets premise, which actually undermines technicians (patterns should vanish once exploited). C defines FUNDAMENTAL analysis, the discipline technical analysis explicitly sets aside."
  ),
  q(
    "m2-eqt-9",
    "equity",
    "Equity Investments",
    2,
    "A company earns a return on equity of 15% and retains 60% of its earnings. Its sustainable growth rate is closest to:",
    ["6.0%", "9.0%", "15.0%"],
    1,
    "Correct: B. Sustainable growth g = retention ratio × ROE = 0.60 × 15% = 9.0% — the pace at which equity (and, at stable ratios, dividends and earnings) can compound without issuing new shares. A multiplies ROE by the PAYOUT ratio (0.40), the complementary mistake. C assumes full retention of earnings, which contradicts the 40% being paid out. This g is exactly what feeds the Gordon model's denominator."
  ),
  q(
    "m2-eqt-10",
    "equity",
    "Equity Investments",
    1,
    "A US investor wanting convenient exposure to a foreign company's shares, traded in US dollars on a US exchange, would most appropriately purchase:",
    ["American depositary receipts (ADRs).", "shares directly on the foreign exchange.", "a currency forward on the foreign country's currency."],
    0,
    "Correct: A. ADRs are negotiable certificates, issued by a US depositary bank against foreign shares held in custody, that trade in dollars on US exchanges with US-style settlement and dividend conversion — precisely the convenience described. B achieves the exposure but with foreign brokerage, settlement, and currency logistics the investor wanted to avoid. C buys currency exposure only — no claim whatsoever on the company."
  ),
  // ---- Fixed Income (10) ----
  q(
    "m2-fix-1",
    "fixed",
    "Fixed Income",
    2,
    "An investor buys a bond between coupon dates. The total amount the buyer pays the seller is most accurately the:",
    [
      "flat (clean) price only.",
      "flat price plus accrued interest — the full (dirty) price.",
      "par value plus accrued interest.",
    ],
    1,
    "Correct: B. The seller earned a share of the next coupon by holding the bond since the last payment date; the buyer compensates him through ACCRUED interest added to the quoted flat price — together, the full or 'dirty' price actually paid. A is only the quoted screen price, which excludes accrual precisely so quotes don't saw-tooth around coupon dates. C substitutes par for the market price, which is unrelated to the settlement math."
  ),
  q(
    "m2-fix-2",
    "fixed",
    "Fixed Income",
    2,
    "An investor will actually earn a bond's yield to maturity as computed at purchase only if:",
    [
      "the bond is held to maturity and all coupons are reinvested at the YTM.",
      "the bond is held for at least half its remaining life.",
      "market interest rates fall steadily after purchase.",
    ],
    0,
    "Correct: A. YTM is an internal rate of return whose realization rests on two assumptions: hold to maturity (no interim price risk crystallized) and reinvest every coupon AT the YTM itself. Rates falling (C) would actually cause the realized return to fall short of the original YTM for a coupon bond, since coupons get reinvested at lower rates. B has no basis — a partial holding period exposes the investor to the sale price, breaking the calculation entirely."
  ),
  q(
    "m2-fix-3",
    "fixed",
    "Fixed Income",
    1,
    "A portfolio holds 40% of its value in a bond with duration 3.0 and 60% in a bond with duration 8.0. The portfolio's duration is closest to:",
    ["5.0", "5.5", "6.0"],
    2,
    "Correct: C. Portfolio duration is the market-value-weighted average of component durations: 0.40 × 3.0 + 0.60 × 8.0 = 1.2 + 4.8 = 6.0. A is the simple unweighted average, ignoring the position sizes. B misweights toward the shorter bond. The linearity of duration across a portfolio is what makes it the workhorse of fixed income risk management."
  ),
  q(
    "m2-fix-4",
    "fixed",
    "Fixed Income",
    2,
    "Holding all else constant, the bond with the GREATEST sensitivity to a change in interest rates is the one with the:",
    [
      "longest maturity and lowest coupon.",
      "longest maturity and highest coupon.",
      "shortest maturity and lowest coupon.",
    ],
    0,
    "Correct: A. Duration rises with maturity (cash flows further out are more heavily discounted-rate-sensitive) and FALLS with coupon (big early coupons return money sooner, shortening the effective wait). The maximum-sensitivity combination is therefore long maturity + low coupon — the logic that makes long zero-coupon bonds the most rate-sensitive instruments of all. B and C each get one dimension right and one wrong."
  ),
  q(
    "m2-fix-5",
    "fixed",
    "Fixed Income",
    1,
    "Investors become more worried about a corporate issuer's creditworthiness while government bond yields stay unchanged. The corporate bond's credit spread will most likely:",
    ["widen, and its price will fall.", "narrow, and its price will rise.", "stay constant, since government yields did not move."],
    0,
    "Correct: A. The credit spread is the extra yield demanded for bearing the issuer's default and downgrade risk; rising credit concern widens the spread, lifting the bond's total required yield — and its price falls even with the risk-free curve motionless. B describes IMPROVING credit sentiment. C misses that a corporate yield has two moving parts: benchmark rate plus spread, and either one can reprice the bond alone."
  ),
  q(
    "m2-fix-6",
    "fixed",
    "Fixed Income",
    3,
    "Compared with an ordinary senior unsecured bond from the same bank, a covered bond is generally considered safer because it provides:",
    [
      "dual recourse — a claim on the issuing bank plus a segregated cover pool of assets.",
      "a government guarantee of all payments.",
      "a floating coupon that eliminates interest rate risk.",
    ],
    0,
    "Correct: A. The covered bond's signature is DUAL recourse: if the issuing bank fails, investors have a priority claim on a ring-fenced cover pool (typically high-quality mortgages) that stays ON the bank's balance sheet and must be actively maintained — plus the ordinary claim on the issuer. That structure explains their strong ratings and low spreads. B overstates it: no blanket government guarantee exists. C confuses credit structure with coupon form."
  ),
  q(
    "m2-fix-7",
    "fixed",
    "Fixed Income",
    2,
    "In a repurchase agreement, a dealer sells a security today and agrees to buy it back tomorrow at a slightly higher price. Economically, the transaction is best described as:",
    [
      "a short-term collateralized loan, with the price difference as interest.",
      "an outright sale followed by an unrelated purchase.",
      "an interest rate swap between the two parties.",
    ],
    0,
    "Correct: A. A repo is secured borrowing in sale's clothing: the dealer receives cash today, the security serves as collateral, and the agreed repurchase premium IS the interest (the repo rate). The haircut on collateral value protects the cash lender. B takes the legal form literally and misses the economic substance — the two legs are one financing transaction. C names an unrelated derivative."
  ),
  q(
    "m2-fix-8",
    "fixed",
    "Fixed Income",
    2,
    "An inverted yield curve — short-term yields above long-term yields — has historically been most closely associated with:",
    [
      "expectations of an economic slowdown and future rate cuts.",
      "expectations of accelerating growth and inflation.",
      "a permanent structural change in bond market liquidity.",
    ],
    0,
    "Correct: A. Under the expectations framework, long yields embed the path of expected short rates: when investors anticipate recession and central-bank easing, expected future short rates sit BELOW today's — dragging long yields under short ones. Inversions have preceded most modern recessions, which is why the 2s–10s spread is a watched indicator. B is the steepener story, the opposite configuration. C mistakes a cyclical signal for a structural one."
  ),
  q(
    "m2-fix-9",
    "fixed",
    "Fixed Income",
    2,
    "To estimate the value of an infrequently traded corporate bond, an analyst uses yields on actively traded bonds of similar credit quality, maturity, and coupon. This approach is best described as:",
    ["matrix pricing.", "mark-to-market pricing.", "amortized cost accounting."],
    0,
    "Correct: A. Matrix pricing interpolates a required yield for an illiquid bond from a grid of comparable, liquid issues — matching credit rating, sector, maturity, and coupon — then discounts the bond's cash flows at that yield. It is the standard answer to thin trading in credit markets. B requires observable market prices for the bond ITSELF, which is exactly what's missing. C is a holder's accounting convention, not a market-value estimate."
  ),
  q(
    "m2-fix-10",
    "fixed",
    "Fixed Income",
    3,
    "A bond has a one-year probability of default of 2%. If it defaults, investors expect to recover 40% of exposure. The bond's expected loss for the year is closest to:",
    ["0.8%", "1.2%", "2.0%"],
    1,
    "Correct: B. Expected loss = probability of default × loss given default = 2% × (1 − 0.40) = 2% × 60% = 1.2%. A multiplies PD by the RECOVERY rate rather than the loss severity — the standard trap. C ignores recovery entirely, assuming total loss. This simple product is the foundation of credit spread intuition: the spread must at minimum compensate expected loss."
  ),
  // ---- Derivatives (6) ----
  q(
    "m2-der-1",
    "deriv",
    "Derivatives",
    1,
    "A derivative is most accurately defined as a financial instrument whose value depends on:",
    [
      "the performance of an underlying asset, rate, or index.",
      "the creditworthiness of the exchange where it trades.",
      "the initial premium paid by the buyer.",
    ],
    0,
    "Correct: A. 'Derivative' is literal: the instrument DERIVES its value from something else — a stock, bond, commodity, rate, index, or even another derivative — via a contract defining payoffs in terms of that underlying. B confuses infrastructure with valuation; clearinghouses manage counterparty risk but don't define the instrument. C reverses causality: the premium is a CONSEQUENCE of the contract's value, not its source."
  ),
  q(
    "m2-der-2",
    "deriv",
    "Derivatives",
    2,
    "An investor holds a stock and buys a put option on it. The combined position most closely resembles:",
    [
      "an insured position with a floor on losses — resembling a long call's payoff shape.",
      "a covered call with capped upside.",
      "a naked short put with unlimited downside.",
    ],
    0,
    "Correct: A. The protective put guarantees a minimum exit at the strike: below it, put gains offset stock losses (a floor); above it, upside remains fully open, less the premium — a payoff profile mirroring a long call plus a bond, per put-call parity. It is portfolio insurance in the most literal sense. B describes stock PLUS a SHORT call, which caps gains instead of losses. C is unrelated and has the risk profile backwards."
  ),
  q(
    "m2-der-3",
    "deriv",
    "Derivatives",
    2,
    "An investor who owns a stock writes a call option against it. Relative to holding the stock alone, the covered call most likely:",
    [
      "generates premium income while capping the position's upside above the strike.",
      "eliminates all downside risk in exchange for the premium.",
      "adds leverage, amplifying both gains and losses.",
    ],
    0,
    "Correct: A. The written call sells off the stock's appreciation beyond the strike in exchange for the premium collected today — income now, ceiling later. Downside (B) remains almost fully intact, cushioned only by the premium received; that misunderstanding is the most common covered-call mistake. C describes buying options or trading on margin; writing a covered call REDUCES the position's volatility rather than levering it."
  ),
  q(
    "m2-der-4",
    "deriv",
    "Derivatives",
    2,
    "A futures trader's account balance falls below the maintenance margin level. The trader most likely receives a margin call requiring the account to be restored to:",
    ["the maintenance margin level.", "the initial margin level.", "double the initial margin, as a penalty."],
    1,
    "Correct: B. Futures margin rules are specific: breach the maintenance level and the variation margin call requires topping the account back UP TO THE INITIAL margin — not merely to maintenance. (This differs from securities margin accounts, where restoring to maintenance suffices — a contrast the exam likes.) C invents a penalty that doesn't exist; the system is protective, not punitive."
  ),
  q(
    "m2-der-5",
    "deriv",
    "Derivatives",
    2,
    "Two portfolios are certain to produce identical cash flows in every future state, yet they trade at different prices today. The principle violated, and the expected market response, is most accurately:",
    [
      "the law of one price — arbitrageurs will buy the cheaper portfolio and sell the dearer until prices converge.",
      "market efficiency — regulators must correct the price difference.",
      "put-call parity — only options markets can restore equilibrium.",
    ],
    0,
    "Correct: A. Identical payoffs must command identical prices — otherwise a riskless profit exists: buy cheap, short dear, pocket the difference, owe nothing at settlement. Arbitrage activity itself forces convergence; this mechanism (not regulation, B) is what underpins virtually all derivative pricing. C names one APPLICATION of the law of one price, but the principle is general — it applies to any replicating portfolios, options or not."
  ),
  q(
    "m2-der-6",
    "deriv",
    "Derivatives",
    1,
    "A put option has a strike price of $45 while the underlying stock trades at $40. The option is best described as:",
    ["in the money by $5.", "out of the money by $5.", "at the money."],
    0,
    "Correct: A. A put grants the right to SELL at the strike: selling at $45 a stock worth $40 is $5 of immediate exercise value — in the money. B applies call logic (for a CALL, S below X is indeed out of the money); the moneyness of puts and calls mirror each other around the strike. C requires S = X. Reflexively asking 'would exercising now pay?' resolves every moneyness question."
  ),
  // ---- Alternative Investments (6) ----
  q(
    "m2-alt-1",
    "alts",
    "Alternative Investments",
    2,
    "A private equity fund sells a portfolio company to a strategic corporate acquirer. This exit route is best described as a:",
    ["trade sale.", "initial public offering.", "recapitalization."],
    0,
    "Correct: A. Selling to a corporate (strategic) buyer — one seeking synergies rather than financial returns — is a trade sale, historically the most common PE exit: faster and more certain than an IPO, often at a premium reflecting synergies. B exits via public listing, with market-window risk and typically staged sell-downs. C is not a full exit at all: a recap returns capital (often via new debt) while the fund RETAINS ownership."
  ),
  q(
    "m2-alt-2",
    "alts",
    "Alternative Investments",
    1,
    "Compared with direct ownership of commercial property, publicly traded REITs most notably offer:",
    [
      "greater liquidity and smaller minimum investment sizes.",
      "complete insulation from stock market volatility.",
      "guaranteed income unaffected by property fundamentals.",
    ],
    0,
    "Correct: A. REIT shares trade intraday on exchanges at small denominations — solving direct real estate's two biggest frictions: illiquidity and lumpiness — while distributing most taxable income as dividends. The cost of that liquidity is B's opposite: REIT prices inherit substantial EQUITY-market volatility and correlate more with stocks in the short run than appraised property values do. C is fiction — distributions track rents, occupancy, and rates."
  ),
  q(
    "m2-alt-3",
    "alts",
    "Alternative Investments",
    2,
    "During a typical private equity fund's investment period, management fees are most commonly calculated on:",
    ["committed capital.", "invested capital only.", "the fund's net asset value."],
    0,
    "Correct: A. During the investment period, the standard fee base is COMMITTED capital — the full amount LPs pledged — even though much remains undrawn; this compensates the GP for sourcing and diligence before deployment. Many funds STEP DOWN to invested capital (B) after the investment period ends. NAV-based fees (C) are the hedge fund convention, not the traditional PE drawdown-fund structure — one of the exam's favorite cross-vehicle contrasts."
  ),
  q(
    "m2-alt-4",
    "alts",
    "Alternative Investments",
    2,
    "A hedge fund that takes long positions in target companies after merger announcements while shorting the acquirers is most likely following a strategy classified as:",
    ["event-driven (merger arbitrage).", "global macro.", "equity market neutral based on statistical signals."],
    0,
    "Correct: A. Trading the spread between a target's price and the deal price — long target, short acquirer in share-for-share deals — is merger (risk) arbitrage, the flagship EVENT-DRIVEN strategy; its risk concentrates in deal breaks. B trades top-down macro themes across currencies, rates, and commodities — no corporate events required. C builds balanced long-short books from quantitative signals, indifferent to announced transactions."
  ),
  q(
    "m2-alt-5",
    "alts",
    "Alternative Investments",
    3,
    "For a diversified portfolio, adding a small allocation to cryptocurrencies is most accurately characterized as offering:",
    [
      "potential diversification benefits, accompanied by extreme volatility, evolving regulation, and custody risks.",
      "a reliable inflation hedge comparable to inflation-linked bonds.",
      "risk-free enhancement of returns due to low correlation with equities.",
    ],
    0,
    "Correct: A. The balanced professional view: historical correlations with traditional assets have often been low (a diversification argument), but the asset class carries volatility multiples of equities', regulatory uncertainty, and unique custody/operational risks — and correlations have SPIKED in liquidity crises exactly when diversification matters most. B overstates a hedge whose inflation record is short and mixed. C's 'risk-free' is disqualifying on its face."
  ),
  q(
    "m2-alt-6",
    "alts",
    "Alternative Investments",
    2,
    "Compared with most financial assets, timberland investments offer a distinctive return component in the form of:",
    [
      "biological growth of the standing timber, independent of price movements.",
      "government-guaranteed harvest prices.",
      "complete immunity to weather and natural risks.",
    ],
    0,
    "Correct: A. Trees literally grow: volume increases and trees mature into higher-value product classes regardless of what markets do that year — and harvests can be DELAYED when prices are weak, an embedded timing option financial assets lack. Add land appreciation and its inflation-hedging character, and the return stack is unique. B invents guarantees that don't exist; C ignores fire, disease, and storm risk — real hazards, typically diversified across geographies."
  ),
  // ---- Portfolio Management (4) ----
  q(
    "m2-pm-1",
    "pm",
    "Portfolio Management & Wealth Planning",
    2,
    "A 30-year-old investor with stable income and a 35-year horizon says market losses make her extremely anxious and she wants to avoid them entirely. Her ABILITY and WILLINGNESS to take risk are best described as:",
    [
      "high ability, low willingness — and the adviser should generally default to the more conservative of the two while educating the client.",
      "low ability, high willingness — so an aggressive portfolio is appropriate.",
      "high ability and high willingness, since youth overrides stated anxiety.",
    ],
    0,
    "Correct: A. Ability is objective — long horizon, stable income, time to recover — and here it is high; willingness is psychological, and hers is low. When the two conflict, prudent practice resolves toward the CONSERVATIVE side (a client panicked into selling at the bottom destroys the plan the 'correct' allocation assumed), paired with education that may raise willingness over time. B inverts both dimensions; C simply overrides the client, a suitability failure."
  ),
  q(
    "m2-pm-2",
    "pm",
    "Portfolio Management & Wealth Planning",
    2,
    "The covariance between a stock's returns and the market's returns is 0.0024, and the variance of market returns is 0.0016. The stock's beta is closest to:",
    ["0.67", "1.50", "2.40"],
    1,
    "Correct: B. Beta = covariance(stock, market) / variance(market) = 0.0024 / 0.0016 = 1.50 — the stock amplifies market moves by half again. A inverts the ratio (0.0016/0.0024). C misreads the covariance as beta after a decimal slip. Beta is just a rescaled covariance: the regression slope of stock returns on market returns, and the CAPM's only priced risk input."
  ),
  q(
    "m2-pm-3",
    "pm",
    "Portfolio Management & Wealth Planning",
    1,
    "After a year of strong equity gains, a portfolio's stock allocation has drifted well above its policy target. Rebalancing back to target most directly serves to:",
    [
      "maintain the portfolio's intended risk profile.",
      "maximize returns by letting winners run.",
      "eliminate transaction costs and taxes.",
    ],
    0,
    "Correct: A. The policy allocation was chosen to match the investor's objectives and risk tolerance; drift quietly rewrites that decision — the equity-heavy portfolio now carries MORE risk than the client agreed to. Rebalancing is risk discipline, systematically selling relative winners and buying relative losers. B is the argument AGAINST rebalancing (momentum), not its purpose. C is backwards: rebalancing INCURS costs and taxes, which is why bands and thresholds exist."
  ),
  q(
    "m2-pm-4",
    "pm",
    "Portfolio Management & Wealth Planning",
    1,
    "An investor refuses to sell a losing position, saying he'll 'wait until it gets back to what I paid.' The behavioral bias most directly displayed is:",
    [
      "loss aversion, anchored to the purchase price.",
      "overconfidence in his forecasting ability.",
      "herding with the market consensus.",
    ],
    0,
    "Correct: A. Two intertwined biases drive 'get-even-itis': LOSS AVERSION (losses hurt roughly twice as much as equivalent gains please, so realizing one feels intolerable) and ANCHORING on the arbitrary purchase price — a number the market does not know or care about. The disposition effect (selling winners, riding losers) is its portfolio-level signature. B involves excessive certainty in one's forecasts; C involves copying others — neither is the mechanism here."
  ),
];

export const FULL_MOCK_READY =
  MOCK_SESSION_1.length >= 90 && MOCK_SESSION_2.length >= 90;
