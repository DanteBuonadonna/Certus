// ============================================================
// Certus — CFA Level III Mock bank (Portfolio Management pathway)
// Level III mixes vignette item sets with constructed-response
// (essay) questions. Essays are self-graded against guideline
// answers with a point rubric — the prep-industry standard.
//
// L3_QUICK_SETS + L3_QUICK_ESSAYS — readiness sample
// L3_SESSION_1/2                 — full exam (staged)
// ============================================================

import { Question } from "./types";
import { ItemSet, Essay } from "@/lib/mockExam";

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
  examSlug: "cfa-l3",
  topicId,
  topicName,
  difficulty,
  stem,
  choices,
  answerIndex,
  explanation,
});

export const L3_QUICK_SETS: ItemSet[] = [
  {
    id: "l3q-behavioral",
    title: "Whitfield Wealth Management Case Scenario",
    vignette: [
      "Elena Marsh, a 58-year-old client of Whitfield Wealth Management, meets with her adviser, Tomas Reyes, CFA, for an annual review. Marsh's portfolio is dominated by a large holding in Ardent Chemical, inherited from her father, who spent his career at the company. When Reyes proposes trimming the position, Marsh refuses: 'That stock has been in my family for forty years. I couldn't sell it at any price.'",
      "Reviewing her self-directed account, Reyes notes that Marsh trades technology stocks frequently. She tells him: 'My last three tech picks doubled — I clearly have a feel for this sector. The two that lost money were just bad luck with the market.'",
      "Marsh also mentions she checks her portfolio daily and 'feels sick' whenever it dips, even though she does not need to draw on the portfolio for at least a decade. Reyes begins drafting recommendations, considering whether to moderate Marsh's biases or adapt the portfolio to them, noting that Marsh's wealth substantially exceeds what is required to fund her lifetime spending goals.",
    ],
    questions: [
      q(
        "l3q-beh-1",
        "behavioral",
        "Behavioral Finance",
        2,
        "Marsh's refusal to sell the inherited Ardent Chemical position 'at any price' most directly reflects:",
        ["endowment bias.", "representativeness bias.", "availability bias."],
        0,
        "Correct: A. Endowment bias — valuing an owned asset above its market worth simply because one owns it — is the classic diagnosis for inherited-stock attachment, and its emotional character ('my family,' 'at any price') confirms it. Representativeness (B) is a cognitive error of classifying from small samples or stereotypes; availability (C) overweights easily recalled information. Neither captures refusing to transact at ANY price on a possession."
      ),
      q(
        "l3q-beh-2",
        "behavioral",
        "Behavioral Finance",
        2,
        "Marsh's explanation of her technology trading record — skill for the winners, bad luck for the losers — best illustrates:",
        [
          "self-attribution bias reinforcing overconfidence.",
          "hindsight bias reinforcing regret aversion.",
          "framing bias reinforcing mental accounting.",
        ],
        0,
        "Correct: A. Crediting successes to personal skill while blaming failures on external forces is self-attribution bias, and its systematic effect is inflated confidence in one's ability — which then drives excessive trading and concentration, exactly the behavior in the vignette. B and C name real biases, but hindsight concerns rewriting past predictions ('I knew it'), and framing/mental accounting concern how choices are presented and compartmentalized — neither matches the win/loss asymmetry described."
      ),
      q(
        "l3q-beh-3",
        "behavioral",
        "Behavioral Finance",
        3,
        "Of the behaviors Reyes has documented, the one best classified as a COGNITIVE error — rather than an emotional bias — is:",
        [
          "attributing winners to skill and losers to market conditions.",
          "refusing to part with the inherited position.",
          "feeling distress at daily portfolio fluctuations despite a decade-long horizon.",
        ],
        0,
        "Correct: A. Self-attribution is a cognitive error — faulty information processing about cause and effect — and cognitive errors are the biases most amenable to correction through education and feedback. Endowment (B) and the myopic loss-aversion pattern in C are emotional biases, rooted in feeling rather than reasoning, which is precisely why advisers often accommodate rather than argue them away."
      ),
      q(
        "l3q-beh-4",
        "behavioral",
        "Behavioral Finance",
        3,
        "Given Marsh's wealth relative to her lifetime spending needs and the emotional character of her strongest biases, Reyes should most appropriately:",
        [
          "adapt the portfolio to her biases, deviating from the rational-optimal allocation where the deviations do not jeopardize her goals.",
          "moderate all biases through intensive client education until they are eliminated.",
          "ignore the biases, since they are irrelevant when wealth exceeds needs.",
        ],
        0,
        "Correct: A. The standard framework: emotional biases and a HIGH standard of living risk cushion (wealth well above needs) both argue for ADAPTING to the client — building a portfolio she can actually live with, even if modestly suboptimal. B fights emotional biases with education, which works far better against cognitive errors and rarely 'eliminates' anything. C abandons the adviser's role: unmanaged biases (daily panic, concentrated stock) can still damage outcomes and the client relationship."
      ),
    ],
  },
  {
    id: "l3q-assetalloc",
    title: "Ramos Family Case Scenario",
    vignette: [
      "Sofia and Daniel Ramos, both 55, engage adviser Kenji Sato, CFA. Their investable portfolio is $2.5 million. Beginning next year they will need $100,000 after tax annually from the portfolio, an amount they expect to grow with inflation of 2.0% per year. Sato's firm charges 0.4% of assets annually. Daniel will also receive a secure government pension covering their basic housing costs for life.",
      "In conversation, Sofia says market losses 'keep her up at night,' though the couple's horizon exceeds thirty years and their pension secures their essential spending. Sato explains his firm's approach: a long-term strategic asset allocation anchored to capital market expectations, with limited, deliberate short-term deviations when his team's tactical views are strong.",
      "Sato also presents two planning tools: a single-period mean–variance optimization and a Monte Carlo simulation of the couple's full retirement horizon, noting that the two methods answer different questions.",
    ],
    questions: [
      q(
        "l3q-aa-1",
        "pm",
        "Portfolio Management",
        2,
        "The Ramos family's required nominal annual return, before considering any risk preferences, is closest to:",
        ["4.4%", "6.0%", "6.4%"],
        2,
        "Correct: C. Spending requirement = 100,000 / 2,500,000 = 4.0% real; adding expected inflation of 2.0% and the 0.4% fee gives approximately 6.4% nominal (the multiplicative form, 1.04 × 1.02 − 1 + 0.4% ≈ 6.5%, is also acceptable — 6.4% remains closest). A (4.4%) forgets inflation, the error that silently erodes a 30-year plan; B (6.0%) forgets the advisory fee, which is a real claim on return just like spending."
      ),
      q(
        "l3q-aa-2",
        "pm",
        "Portfolio Management",
        2,
        "The Ramos family's risk profile is best characterized as:",
        [
          "high ability to take risk, below-average willingness — a conflict the adviser should resolve conservatively while educating the clients.",
          "low ability and low willingness, requiring a capital-preservation mandate.",
          "high ability and high willingness, given the pension's downside protection.",
        ],
        0,
        "Correct: A. Ability is objective and high: a 30+ year horizon, moderate 4% spending rate, and a pension covering essentials that cushions any portfolio drawdown. Willingness is subjective and low — losses 'keep her up at night.' The standard resolution of an ability/willingness conflict is toward the LOWER of the two (a portfolio the client abandons in a crash is worse than a conservative one), paired with education. B misreads their strong objective position; C overrides the stated psychology, inviting exactly the panicked selling the framework exists to prevent."
      ),
      q(
        "l3q-aa-3",
        "pm",
        "Portfolio Management",
        1,
        "The 'limited, deliberate short-term deviations' from the strategic asset allocation that Sato describes are best labeled:",
        ["tactical asset allocation.", "rebalancing.", "liability-driven investing."],
        0,
        "Correct: A. TAA is intentional short-horizon deviation from policy weights to exploit perceived market opportunities — precisely 'deliberate short-term deviations when tactical views are strong.' Rebalancing (B) moves the portfolio BACK to policy weights after drift; it is discipline, not a view. LDI (C) structures assets against liability characteristics, an entirely different framework not described here."
      ),
      q(
        "l3q-aa-4",
        "pm",
        "Portfolio Management",
        3,
        "Compared with the single-period mean–variance optimization, the Monte Carlo simulation's principal advantage for the Ramos plan is that it:",
        [
          "models the interaction of ongoing withdrawals with return sequences over time, producing an explicit probability that the plan succeeds.",
          "guarantees a higher expected return through repeated sampling.",
          "eliminates the need for capital market assumptions.",
        ],
        0,
        "Correct: A. MVO is single-period and says nothing about PATH: two return sequences with identical averages produce very different outcomes once annual withdrawals begin (sequence risk). Monte Carlo simulates thousands of paths with the actual cash flow schedule, yielding shortfall probabilities — the number a retiree actually needs. B misunderstands simulation, which changes no expected return; C is backwards — Monte Carlo consumes the same capital market assumptions as inputs."
      ),
    ],
  },
];

export const L3_QUICK_ESSAYS: Essay[] = [
  {
    id: "l3q-essay-ips",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Hargrove Investment Policy — Constructed Response",
    scenario: [
      "Miriam and Charles Hargrove, both recently retired at 63, hold an investable portfolio of $3.0 million. Within the next few months they will pay $200,000 from the portfolio for structural repairs to their home. Beginning next year, they require $120,000 after tax annually from the portfolio to fund living expenses, growing with expected inflation of 2.5%. They have no employment income; a modest social benefit covers only incidental costs. They describe their investment knowledge as limited and their attitude toward losses as 'cautious.'",
    ],
    parts: [
      {
        label: "A",
        prompt:
          "Calculate the Hargroves' required annual nominal rate of return for the coming years. Show your calculation.",
        points: 4,
        guideline:
          "The investable base after the near-term outlay is $3,000,000 − $200,000 = $2,800,000. The real spending requirement is 120,000 / 2,800,000 = 4.29%. Adding expected inflation of 2.5%: approximately 6.8% nominal (additive), or (1.0429 × 1.025) − 1 ≈ 6.9% (multiplicative — either is acceptable). GRADING: 1 pt for reducing the asset base by the $200,000 home repair; 1 pt for the 4.29% spending rate calculation; 1 pt for incorporating inflation correctly; 1 pt for a stated nominal requirement of ~6.8–6.9%. No credit for using $3.0m as the base without adjustment.",
      },
      {
        label: "B",
        prompt:
          "Identify TWO factors from the case that reduce the Hargroves' ABILITY (not willingness) to take risk. Explain each briefly.",
        points: 4,
        guideline:
          "Any two of the following, with explanation (2 pts each — 1 for the factor, 1 for the tie to ability): (1) No employment income — the portfolio is effectively their sole support, so losses cannot be replenished with savings; (2) High spending rate relative to assets (~4.3% real and rising with inflation) leaves limited cushion for drawdowns; (3) The imminent $200,000 liquidity requirement shortens the horizon for part of the portfolio and forces asset sales regardless of market conditions. NOTE: 'cautious attitude' and 'limited knowledge' relate to WILLINGNESS, not ability — no credit."
      },
      {
        label: "C",
        prompt:
          "Formulate the liquidity constraint of the Hargroves' investment policy statement.",
        points: 4,
        guideline:
          "The IPS liquidity constraint should state: (1) a near-term need of $200,000 within the coming months for home repairs, which should be held in cash or cash equivalents immediately; (2) ongoing annual distributions of $120,000 after tax, growing at ~2.5% per year, beginning next year — supporting a cash/short-duration reserve of roughly one to two years of spending; (3) as retirees with no employment income, the portfolio should avoid meaningful allocations to illiquid vehicles that could impair either need. GRADING: 1 pt for the $200,000 near-term item, 1 pt for the ongoing $120,000 inflation-growing distribution, 1 pt for a cash-reserve or immediate-funding recommendation, 1 pt for the observation on limiting illiquid holdings.",
      },
    ],
  },
];

// Full exam sessions (item sets + essays per session). Authored in waves;
// the full Level III mock unlocks when both sessions are complete.
export const L3_SESSION_SETS_1: ItemSet[] = [];
export const L3_SESSION_ESSAYS_1: Essay[] = [];
export const L3_SESSION_SETS_2: ItemSet[] = [];
export const L3_SESSION_ESSAYS_2: Essay[] = [];

export const L3_FULL_READY =
  L3_SESSION_SETS_1.length >= 5 &&
  L3_SESSION_ESSAYS_1.length >= 4 &&
  L3_SESSION_SETS_2.length >= 5 &&
  L3_SESSION_ESSAYS_2.length >= 4;
