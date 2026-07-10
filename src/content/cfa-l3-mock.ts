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
export const L3_SESSION_SETS_1: ItemSet[] = [
  {
    id: "l3s1-cme",
    title: "Meridian Capital Markets Expectations Case Scenario",
    vignette: [
      "Lena Ortiz, CFA, sets long-term equity return expectations for Meridian's multi-asset portfolios using the Grinold–Kroner framework: E(Rₑ) ≈ dividend yield − Δshares outstanding + expected inflation + real earnings growth + Δ(P/E).",
      "For the domestic equity market, Ortiz's inputs are: dividend yield 2.5%; net share REPURCHASES of 0.5% per year (shares outstanding shrinking); expected inflation 2.0%; real earnings growth 3.5%; and an expected annual repricing gain of 0.5% as valuations recover toward historical norms over her forecast horizon.",
      "A colleague questions whether the repricing term belongs in a very long-horizon forecast, and separately asks Ortiz which components of the model represent the income return versus growth in earnings.",
    ],
    questions: [
      q(
        "l3s1-cme-1",
        "pm",
        "Portfolio Management",
        2,
        "Using Ortiz's inputs, the Grinold–Kroner expected equity return is closest to:",
        ["8.0%", "9.0%", "9.5%"],
        1,
        "Correct: B. E(Rₑ) = 2.5 (yield) + 0.5 (buybacks shrink share count, ADDING to per-share growth) + 2.0 (inflation) + 3.5 (real growth) + 0.5 (repricing) = 9.0%. A (8.0%) subtracts the buyback term — the sign trap: the model subtracts Δshares, and NEGATIVE share growth therefore adds return. C (9.5%) double-counts the repricing term."
      ),
      q(
        "l3s1-cme-2",
        "pm",
        "Portfolio Management",
        2,
        "Within the framework, the INCOME return component of Ortiz's forecast is closest to:",
        ["2.5%", "3.0%", "5.5%"],
        1,
        "Correct: B. Income return = dividend yield + net buyback yield = 2.5% + 0.5% = 3.0% — buybacks are a second channel of cash distribution to shareholders, economically kin to dividends. A counts dividends only, ignoring that repurchases return cash too. C (5.5%) sweeps inflation into income, but inflation belongs to the nominal EARNINGS GROWTH component, not distributions."
      ),
      q(
        "l3s1-cme-3",
        "pm",
        "Portfolio Management",
        3,
        "The colleague's challenge to the 0.5% repricing term is most justified because, over very long horizons:",
        [
          "valuation multiples cannot expand indefinitely, so the Δ(P/E) term is best set near zero.",
          "P/E ratios always revert to exactly their historical average.",
          "repricing gains are impossible in efficient markets.",
        ],
        0,
        "Correct: A. Repricing is a bounded, one-time adjustment: a P/E drifting upward forever implies prices permanently outgrowing earnings — economically unsustainable. Long-horizon (equilibrium) forecasts therefore set Δ(P/E) ≈ 0, reserving nonzero repricing for medium-term views like Ortiz's recovery thesis. B overclaims mean reversion as an exact law; C conflates the question of sustainability with market efficiency, which permits valuation changes as discount rates and growth expectations move."
      ),
      q(
        "l3s1-cme-4",
        "pm",
        "Portfolio Management",
        2,
        "If companies in the market shifted from net repurchases to net share ISSUANCE of 1.0% annually, all other inputs unchanged, Ortiz's expected return would:",
        ["fall to 7.5%.", "rise to 10.0%.", "be unchanged, since issuance is not a return component."],
        0,
        "Correct: A. The Δshares term flips from +0.5 (repurchases) to −1.0 (dilution): 2.5 − 1.0 + 2.0 + 3.5 + 0.5 = 7.5%. Issuance dilutes existing holders' claim on earnings — a 1.5-point swing versus the buyback regime. B adds the dilution instead of subtracting; C ignores the model's explicit share-change term, which exists precisely because per-share outcomes are what investors eat."
      ),
    ],
  },
  {
    id: "l3s1-ldi",
    title: "Pemberton Pension Advisory Case Scenario",
    vignette: [
      "Rafael Pemberton, CFA, advises the Cordova Corporation defined-benefit pension plan on liability-driven investing. The plan's liabilities have a money duration (BPV) of $45,000 per basis point; its current fixed income portfolio has a BPV of $30,000 per basis point. Treasury futures available for the overlay have a BPV of $90 per contract.",
      "Pemberton recommends closing the duration gap with a futures overlay. The plan CIO asks two questions: what happens to the plan's funded status if interest rates FALL and the gap is left open, and why Pemberton matches money duration (BPV) rather than simply matching the duration statistics of assets and liabilities.",
      "Pemberton also cautions that even a BPV-matched hedge leaves the plan exposed to one important risk.",
    ],
    questions: [
      q(
        "l3s1-ldi-1",
        "pm",
        "Portfolio Management",
        2,
        "To close the duration gap, Pemberton should:",
        ["buy approximately 167 futures contracts.", "sell approximately 167 futures contracts.", "buy approximately 500 futures contracts."],
        0,
        "Correct: A. Gap = liability BPV − asset BPV = 45,000 − 30,000 = $15,000 per bp; contracts = 15,000 / 90 = 166.7 ≈ 167, and the plan must ADD duration (assets under-respond to rates versus liabilities), so it BUYS futures. B sells — subtracting duration and doubling the gap. C (500 = 45,000/90) hedges the entire liability BPV, ignoring the $30,000 the portfolio already provides."
      ),
      q(
        "l3s1-ldi-2",
        "pm",
        "Portfolio Management",
        2,
        "If rates fall with the gap left open, the plan's funded status most likely:",
        [
          "deteriorates, because liabilities gain more than assets.",
          "improves, because bond assets gain value.",
          "is unchanged, because both sides move in the same direction.",
        ],
        0,
        "Correct: A. Both sides gain when rates fall — but the side with the larger BPV gains MORE: liabilities (45,000/bp) outrun assets (30,000/bp) by $15,000 per basis point of decline, and the surplus erodes. This is exactly the scenario that crushed underhedged pensions in falling-rate decades. B sees only the asset side; C requires matched BPVs, which is the point of the recommended overlay."
      ),
      q(
        "l3s1-ldi-3",
        "pm",
        "Portfolio Management",
        3,
        "Pemberton matches BPV rather than duration statistics because:",
        [
          "duration is a percentage sensitivity, and with assets smaller than liabilities, equal durations would still leave unequal dollar responses.",
          "duration cannot be computed for pension liabilities.",
          "BPV matching eliminates all interest rate risk, while duration matching does not.",
        ],
        0,
        "Correct: A. Duration measures percent change; DOLLAR change = duration × market value × Δy. An underfunded plan holding assets with the same duration as its liabilities still loses ground when rates fall, because the same percentage applies to a smaller base. Money duration (BPV) works in dollars — the currency funded status is measured in. B is false (liability BPVs are computed routinely from projected cash flows); C overpromises, as the next question shows."
      ),
      q(
        "l3s1-ldi-4",
        "pm",
        "Portfolio Management",
        3,
        "The important residual risk in a BPV-matched hedge that Pemberton cautions about is most likely:",
        [
          "nonparallel yield curve shifts — a twist can move assets and liabilities differently even with matched BPVs.",
          "equity market drawdowns in the return-seeking portfolio.",
          "counterparty default on exchange-traded futures.",
        ],
        0,
        "Correct: A. BPV matching immunizes against PARALLEL shifts only. Liabilities are typically longer and differently distributed than the hedge assets, so a steepening or flattening (twist) hits the two sides unevenly — structural risk that full immunization addresses by also matching convexity/cash-flow dispersion. B is a real plan risk but not a risk OF the hedge; C is largely neutralized by central clearing and daily margining — the wrong worry for exchange-traded futures."
      ),
    ],
  },
  {
    id: "l3s1-active",
    title: "Sable Ridge Manager Research Case Scenario",
    vignette: [
      "Yuki Ahn, CFA, evaluates three active equity managers for a client's core allocation. Exhibit 1 summarizes each manager's active share (holdings-based differentiation from the benchmark) and active risk (tracking error).",
      "Manager A charges fees comparable to the other active managers. Ahn notes that active share and tracking error capture different dimensions of activity: one is holdings-based, the other returns-based, and combinations of the two suggest distinct management styles.",
    ],
    exhibits: [
      {
        caption: "Exhibit 1 — Candidate managers",
        headers: ["Manager", "Active share", "Tracking error", "Fee"],
        rows: [
          ["A", "0.20", "1.0%", "0.75%"],
          ["B", "0.85", "3.5%", "0.80%"],
          ["C", "0.55", "7.0%", "0.85%"],
        ],
      },
    ],
    questions: [
      q(
        "l3s1-act-1",
        "pm",
        "Portfolio Management",
        2,
        "Manager A is best characterized as:",
        [
          "a closet indexer — active fees for a portfolio that barely deviates from the benchmark.",
          "a concentrated stock picker.",
          "a diversified factor investor with large systematic bets.",
        ],
        0,
        "Correct: A. Active share of 0.20 with 1.0% tracking error means the portfolio substantially replicates the index while charging 0.75% — the closet indexing profile, where the fee is nearly certain to exceed any achievable value added. B requires HIGH active share; C requires meaningful tracking error from factor tilts. Manager A exhibits neither form of activity."
      ),
      q(
        "l3s1-act-2",
        "pm",
        "Portfolio Management",
        2,
        "Manager B — high active share (0.85) with moderate tracking error (3.5%) — most likely runs:",
        [
          "a diversified stock-picking portfolio whose many idiosyncratic bets partially offset at the portfolio level.",
          "an index fund with securities lending.",
          "a portfolio dominated by large sector and factor rotations.",
        ],
        0,
        "Correct: A. Holding very different NAMES from the benchmark (high active share) while keeping factor exposures near-neutral produces exactly this signature: individual stock bets whose idiosyncratic risks diversify away, leaving moderate tracking error. This is the classic 'diversified stock picker' quadrant. B is ruled out by 0.85 active share; C describes the opposite quadrant — factor bettors generate high TRACKING ERROR with comparatively lower active share, which is Manager C's profile."
      ),
      q(
        "l3s1-act-3",
        "pm",
        "Portfolio Management",
        2,
        "Manager C's combination — moderate active share (0.55) with high tracking error (7.0%) — most likely indicates:",
        [
          "concentrated factor or sector bets driving returns away from the benchmark despite holding many benchmark names.",
          "closet indexing with higher fees.",
          "a data error, since the combination is impossible.",
        ],
        0,
        "Correct: A. Systematic tilts — loading up on value, momentum, a sector, or a region — move the RETURN stream sharply away from the benchmark (high TE) even when many individual holdings overlap it (moderate active share). Factor bets are cheap to express through benchmark names. B contradicts a 7% tracking error; C is wrong because the two measures capture different dimensions and this combination is not just possible but a recognized style."
      ),
      q(
        "l3s1-act-4",
        "pm",
        "Portfolio Management",
        3,
        "For the client paying active fees, the most defensible immediate action based on Exhibit 1 is to:",
        [
          "replace Manager A with an index fund and reassess whether B's or C's style of activity matches the mandate.",
          "replace Manager B, since moderate tracking error signals insufficient skill.",
          "retain all three for diversification of management styles.",
        ],
        0,
        "Correct: A. The clearest inefficiency is paying 0.75% for near-index exposure available for a few basis points — the closet indexer is dominated by an index fund regardless of one's view on active management. Choosing between B and C is then a question of WHICH activity (stock selection vs. factor timing) the client actually wants to pay for. B misreads moderate TE as absence of skill; C spends fees 'diversifying' into a manager who adds nothing an index doesn't."
      ),
    ],
  },
  {
    id: "l3s1-alts",
    title: "Tallgrass Endowment Case Scenario",
    vignette: [
      "The Tallgrass University endowment is raising its allocation to private markets — buyout funds and private credit — from 10% to 25% over three years. CIO Dana Whitcomb, CFA, briefs the board on implementation realities.",
      "Whitcomb explains that reported private-market volatilities and correlations cannot be taken at face value in the endowment's asset allocation model, that commitments must be sized above the target because of how drawdown funds deploy and return capital, and that the endowment's spending rule and liquidity needs constrain how fast the program can scale.",
    ],
    questions: [
      q(
        "l3s1-alt-1",
        "alts",
        "Alternative Investments",
        3,
        "Before using reported private-market risk statistics in the allocation model, Whitcomb should most appropriately:",
        [
          "unsmooth the return series, which will typically raise measured volatility and correlation with public markets.",
          "use the reported statistics, since audited NAVs are reliable.",
          "assume private markets have zero correlation with public equities.",
        ],
        0,
        "Correct: A. Appraisal-based NAVs lag and smooth true value changes, biasing measured volatility and public-market correlation downward; feeding them raw into an optimizer makes private assets look like a free lunch and produces corner-solution overallocations. Unsmoothing (or public-proxy substitution) restores realistic risk. B mistakes audit reliability for statistical fitness; C replaces one distortion with a worse one — true economic correlation with equities is substantially positive."
      ),
      q(
        "l3s1-alt-2",
        "alts",
        "Alternative Investments",
        2,
        "Whitcomb's point that commitments must EXCEED the target allocation primarily reflects:",
        [
          "the pacing problem — capital is called over years while distributions flow back, so net invested exposure persistently trails commitments.",
          "regulatory limits on endowment ownership of funds.",
          "managers' preference for larger checks.",
        ],
        0,
        "Correct: A. A drawdown fund calls capital over several years and starts returning it mid-life; at any moment, invested NAV is well below the commitment. Reaching and HOLDING a 25% NAV allocation therefore requires committing more than 25% and re-committing on a schedule — the commitment-pacing models every serious LP runs. B and C are not the operative constraints; the mathematics of fund cash flows is."
      ),
      q(
        "l3s1-alt-3",
        "alts",
        "Alternative Investments",
        2,
        "The endowment's chief liquidity concern in scaling to 25% private markets is most likely that:",
        [
          "capital calls, spending distributions, and rebalancing needs must all be met from the shrinking liquid portion — especially during market stress.",
          "private funds offer daily redemption that may be suspended.",
          "custodians charge higher fees on illiquid assets.",
        ],
        0,
        "Correct: A. The liquid sleeve must simultaneously fund contractually binding capital calls (which don't pause in crises), the university's spending draw, and any rebalancing — while bearing the whole burden of market declines, since private NAVs lag. Stress scenarios (2008's endowment liquidity crunches are the canonical case) are the binding test. B misdescribes drawdown funds, which offer NO redemption; C is a real but trivial cost, not the chief concern."
      ),
      q(
        "l3s1-alt-4",
        "alts",
        "Alternative Investments",
        3,
        "In evaluating whether private credit plays a RETURN-ENHANCING or DIVERSIFYING role, the most accurate framing is that private credit primarily offers:",
        [
          "an income premium for illiquidity and complexity, with credit risk that correlates with equities in downturns — more return enhancement than true diversification.",
          "pure diversification, since loans are uncorrelated with all markets.",
          "neither, since yields simply match public bonds.",
        ],
        0,
        "Correct: A. Private credit's excess yield compensates illiquidity, origination complexity, and borrower credit risk — and that credit risk is economically equity-like in recessions (defaults cluster exactly when equities fall). Honest allocators class it closer to return enhancement with modest diversification, not a hedge. B relies on smoothed-NAV correlation illusions; C ignores the persistent, well-documented spread over comparable public credit."
      ),
    ],
  },
  {
    id: "l3s1-exec",
    title: "Kirby Trading Desk Case Scenario",
    vignette: [
      "Portfolio manager Simone Kirby decides to buy 1,500 shares of Vantor Industries when the stock trades at $50.00 (the decision price). She releases the order to the desk; 1,000 shares are filled at an average price of $50.20, with $100 of commissions. The remaining 500 shares go unfilled, and the order is cancelled with the stock at $50.50.",
      "Kirby's desk measures execution quality with implementation shortfall (IS), comparing the actual portfolio result against the 'paper portfolio' that transacts the full order instantly at the decision price with no costs.",
      "The desk head also asks Kirby to consider how the components of shortfall would shift if she had demanded faster, more aggressive execution.",
    ],
    questions: [
      q(
        "l3s1-ex-1",
        "pm",
        "Portfolio Management",
        3,
        "The total implementation shortfall on Kirby's order, in basis points of the paper investment, is closest to:",
        ["27 bps", "73 bps", "47 bps"],
        1,
        "Correct: B. Paper investment = 1,500 × 50.00 = $75,000. Costs: execution (price impact) = 1,000 × (50.20 − 50.00) = $200; opportunity (unfilled) = 500 × (50.50 − 50.00) = $250; commissions = $100. Total = $550; IS = 550 / 75,000 = 0.733% ≈ 73 bps. A counts only the filled-share impact plus fees (300/75,000 = 40 bps miscounted variants); C omits the commission and part of the missed-trade cost. The unfilled shares are the biggest single cost — the part naive measures ignore."
      ),
      q(
        "l3s1-ex-2",
        "pm",
        "Portfolio Management",
        2,
        "The LARGEST single component of Kirby's shortfall is:",
        [
          "the opportunity cost of the 500 unfilled shares.",
          "the market impact on the 1,000 filled shares.",
          "explicit commissions.",
        ],
        0,
        "Correct: A. Opportunity cost = $250 versus $200 of market impact and $100 of commissions. The stock ran away while the order sat unfilled — the cost of trading too passively, invisible to any metric that grades only executed shares. That visibility is IS's core advantage: it prices what you FAILED to trade, not just what you traded."
      ),
      q(
        "l3s1-ex-3",
        "pm",
        "Portfolio Management",
        3,
        "Compared with implementation shortfall, evaluating the desk against VWAP alone is most vulnerable to the criticism that VWAP:",
        [
          "can be gamed by trading passively along with volume, and ignores the cost of unfilled shares and the gap from the decision price.",
          "requires more data than any desk maintains.",
          "penalizes large orders more heavily than IS does.",
        ],
        0,
        "Correct: A. A trader graded on VWAP can simply participate proportionally with volume and 'match VWAP' while the price trends away from the decision price — earning a good grade on a bad outcome. VWAP also says nothing about the 500 shares never bought. IS anchors to the DECISION price and charges for omissions, aligning the metric with the portfolio's actual experience. B is false (VWAP is trivially available); C reverses the bias — IS is the harsher, more complete measure."
      ),
      q(
        "l3s1-ex-4",
        "pm",
        "Portfolio Management",
        2,
        "Had Kirby demanded faster, more aggressive execution, the most likely shift in her shortfall components would be:",
        [
          "higher market impact, lower opportunity cost.",
          "lower market impact, higher opportunity cost.",
          "both components lower — speed is free.",
        ],
        0,
        "Correct: A. This is the trader's dilemma: urgency buys certainty of execution at the cost of pushing the price (impact); patience economizes impact but risks the market escaping (opportunity cost). Aggressive execution would likely have filled all 1,500 shares — eliminating the $250 miss — while paying more than 20 cents of impact per share. B describes MORE patience; C denies the trade-off that defines execution strategy."
      ),
    ],
  },
];
export const L3_SESSION_ESSAYS_1: Essay[] = [
  {
    id: "l3s1-essay-beh",
    topicId: "behavioral",
    topicName: "Behavioral Finance",
    title: "Calloway Client Review — Constructed Response",
    scenario: [
      "During an annual review, adviser Marc Osei records three statements from client Jordan Calloway:",
      "Statement 1: 'I'm not selling the airline position below $80 — that's what I paid for it, and it will get back there eventually.'",
      "Statement 2: 'I read three articles this week about a coming real estate crash, so I want to cut our REIT allocation immediately.'",
      "Statement 3: 'Keep my dividend stocks in the income account and don't touch them — that money pays for vacations. The bonus account is where we can take real risks.'",
    ],
    parts: [
      {
        label: "A",
        prompt: "For EACH of the three statements, identify the behavioral bias most directly exhibited. (1 point each)",
        points: 3,
        guideline:
          "Statement 1: ANCHORING (to the $80 purchase price) — loss aversion / disposition effect also acceptable if tied to refusing to realize a loss relative to the reference price. Statement 2: AVAILABILITY bias — recently encountered, vivid information (three articles this week) is overweighted in probability judgments. Statement 3: MENTAL ACCOUNTING — treating dollars differently based on the account/purpose labels rather than viewing the portfolio as a whole. GRADING: 1 point per correctly identified bias; no penalty for naming a defensible closely related bias with correct reasoning (e.g., disposition effect for Statement 1).",
      },
      {
        label: "B",
        prompt: "Classify EACH identified bias as cognitive or emotional, and state one word on why the classification matters for advising Calloway. (3 points)",
        points: 3,
        guideline:
          "Anchoring — COGNITIVE (faulty information processing). Availability — COGNITIVE. Mental accounting — COGNITIVE. Classification matters because cognitive errors respond to education, data, and framing corrections (MODERATE them), whereas emotional biases usually must be accommodated (ADAPT). Since all three of Calloway's biases are cognitive, Osei should lead with education and evidence. GRADING: 1 point for correctly classifying at least two of three; 1 point for all three correct; 1 point for linking cognitive → moderate/educate.",
      },
      {
        label: "C",
        prompt: "For Statement 1 ONLY, describe one specific portfolio consequence if the bias goes unaddressed. (3 points)",
        points: 3,
        guideline:
          "Strongest answers: the client holds a deteriorating, possibly overweight position indefinitely (the disposition effect — riding losers), forgoing tax-loss harvesting value and better uses of the capital; the arbitrary $80 anchor — not fundamentals — dictates the sell decision, so risk stays concentrated in a stock precisely when its prospects may have worsened. GRADING: 2 points for a concrete consequence (concentration, forgone tax losses, holding losers); 1 point for connecting it to the anchor overriding fundamental analysis.",
      },
    ],
  },
  {
    id: "l3s1-essay-aa",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Reyes Foundation Allocation — Constructed Response",
    scenario: [
      "The Reyes Family Foundation requires a 6.0% nominal annual return to sustain its grant-making and administrative budget. The board's stated risk posture is conservative: 'We will accept the risk necessary to fund the mission — and no more.' The foundation's minimum acceptable return (threshold) for shortfall purposes is 3.0%.",
      "The investment consultant presents three candidate allocations:",
      "Portfolio A — expected return 5.2%, standard deviation 8%. Portfolio B — expected return 6.3%, standard deviation 11%. Portfolio C — expected return 7.4%, standard deviation 16%.",
    ],
    parts: [
      {
        label: "A",
        prompt: "Select the most appropriate portfolio for the foundation and justify your choice with reference to BOTH the return requirement and the board's risk posture. (3 points)",
        points: 3,
        guideline:
          "Portfolio B. It is the only portfolio that MEETS the 6.0% requirement (A's 5.2% fails the mission before risk is even considered) while taking meaningfully less risk than C (11% vs. 16% standard deviation). C's extra 1.1% of expected return is return the foundation does not NEED, purchased with 5 points of additional volatility — inconsistent with 'the risk necessary, and no more.' GRADING: 1 point for selecting B; 1 point for eliminating A on the return requirement; 1 point for eliminating C on unneeded risk given the stated posture.",
      },
      {
        label: "B",
        prompt: "Using Roy's safety-first criterion with the 3.0% threshold, calculate the safety-first ratio for each portfolio, and state which portfolio it selects. Show your work. (3 points)",
        points: 3,
        guideline:
          "SFRatio = (E(R) − threshold) / σ. A: (5.2 − 3.0)/8 = 0.275. B: (6.3 − 3.0)/11 = 0.30. C: (7.4 − 3.0)/16 = 0.275. Roy's criterion selects the HIGHEST ratio → Portfolio B (0.30), the allocation with the lowest implied probability of returning less than 3.0%. GRADING: 1 point for the correct formula/setup; 1 point for at least two correct ratios; 1 point for selecting B with the 'highest ratio' rationale. Note the reinforcement: the shortfall criterion and the qualitative analysis in Part A agree.",
      },
      {
        label: "C",
        prompt: "The consultant also ran a Monte Carlo simulation of Portfolio B over the foundation's 20-year horizon. State TWO insights the simulation provides that the single-period expected return and standard deviation figures cannot. (3 points)",
        points: 3,
        guideline:
          "Any two (1.5 points each): (1) probability of shortfall over the FULL horizon — e.g., the likelihood the foundation fails to sustain grants in any year or depletes corpus, incorporating the interaction of annual spending withdrawals with return SEQUENCES (sequence-of-returns risk); (2) the distribution of terminal portfolio values (percentile ranges), not just a point estimate; (3) effects of path-dependent policies — spending rules, rebalancing — which single-period statistics cannot represent. GRADING: full credit requires horizon/path-dependence flavor, not merely restating mean and standard deviation.",
      },
    ],
  },
  {
    id: "l3s1-essay-ldi",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Vantage Pension Hedging — Constructed Response",
    scenario: [
      "The Vantage Corporation pension plan is 92% funded. Its liabilities have an effective duration of 12; its asset portfolio — 60% return-seeking equities and 40% bonds — has an overall effective duration of 5. The committee fears further declines in interest rates.",
      "The plan's consultant proposes a derivatives overlay to narrow the duration gap without selling the return-seeking assets, and mentions both interest rate swaps and Treasury futures as candidate instruments.",
    ],
    parts: [
      {
        label: "A",
        prompt: "Explain, with direction, what happens to Vantage's funded status if rates fall 100 basis points and no hedge is added. (3 points)",
        points: 3,
        guideline:
          "Liabilities (duration 12) rise roughly 12% while assets (duration 5) rise only about 5% — and assets start from a SMALLER base (92% funded), so the dollar gap widens on both counts. Funded status deteriorates materially; a rough illustration: liabilities 100 → 112, assets 92 → 96.6, funding ratio falls from 92% to about 86%. GRADING: 1 point for direction (deteriorates); 1 point for the duration mismatch logic (12 vs 5); 1 point for a quantified or clearly reasoned magnitude, including the smaller asset base point or an illustrative calculation.",
      },
      {
        label: "B",
        prompt: "Recommend the swap position that hedges this exposure, and explain briefly why it works. (3 points)",
        points: 3,
        guideline:
          "Enter a RECEIVE-FIXED / pay-floating interest rate swap. A receive-fixed swap gains value when rates fall (the fixed leg's value rises like a long bond position), adding synthetic duration to the asset side and offsetting the liability gains — narrowing the duration gap without liquidating equities. GRADING: 2 points for receive-fixed (0 for pay-fixed, which worsens the gap); 1 point for the mechanism (swap behaves like a leveraged long-duration bond, adding asset duration).",
      },
      {
        label: "C",
        prompt: "State TWO reasons the committee might deliberately stop short of a full (100%) liability hedge. (3 points)",
        points: 3,
        guideline:
          "Any two (1.5 points each): (1) An underfunded plan needs asset growth to close the deficit — full immunization locks in the shortfall unless sponsor contributions fill it; return-seeking assets remain necessary. (2) Cost/carry and collateral: hedging at potentially cyclical-low rates has negative expected carry, and derivative overlays create collateral/liquidity demands in rate sell-offs. (3) A view that rates will RISE — hedging fully forfeits the funded-status gains a rate rise would deliver. (4) Basis/curve risk means even a 'full' hedge is imperfect, arguing for staged hedge ratios (a glide path). GRADING: 1.5 points per distinct, correctly reasoned rationale.",
      },
    ],
  },
  {
    id: "l3s1-essay-perf",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Grayline Fund Evaluation — Constructed Response",
    scenario: [
      "A consultant evaluates the Grayline Fund for two prospective investors. Over the evaluation period: Grayline returned 11.0% with standard deviation 18% and beta 1.2 (versus the market index). The market index returned 9.0% with standard deviation 14%. The risk-free rate was 2.0%.",
      "Investor X would place her ENTIRE portfolio in Grayline. Investor Y would add a SMALL Grayline position to an already well-diversified portfolio.",
    ],
    parts: [
      {
        label: "A",
        prompt: "Calculate Grayline's Sharpe ratio and Treynor ratio, and the same measures for the market index. Show your work. (3 points)",
        points: 3,
        guideline:
          "Grayline: Sharpe = (11 − 2) / 18 = 0.50; Treynor = (11 − 2) / 1.2 = 7.5. Market: Sharpe = (9 − 2) / 14 = 0.50; Treynor = (9 − 2) / 1.0 = 7.0. GRADING: 1 point for both Grayline measures correct; 1 point for both market measures (market beta = 1.0 must be used); 1 point for clean setup/work shown. Note the interesting result: identical Sharpe ratios, but Grayline's higher Treynor.",
      },
      {
        label: "B",
        prompt: "State which measure is appropriate for EACH investor, and what each investor should conclude about Grayline. (3 points)",
        points: 3,
        guideline:
          "Investor X (sole holding): the SHARPE ratio, because she bears TOTAL risk — Grayline's 0.50 merely matches the market's 0.50, so Grayline offers no improvement over holding the index. Investor Y (small addition to a diversified portfolio): the TREYNOR ratio, because only systematic risk matters at the margin — Grayline's 7.5 exceeds the market's 7.0, so it adds value in her context. GRADING: 1 point per correct measure-to-investor mapping with reasoning; 1 point for the paired conclusions (X indifferent/decline; Y favorable). The divergence is the lesson: the right measure depends on what the investor already holds.",
      },
      {
        label: "C",
        prompt: "Calculate Grayline's Jensen's alpha and interpret it in one sentence. (3 points)",
        points: 3,
        guideline:
          "CAPM required return = 2 + 1.2 × (9 − 2) = 2 + 8.4 = 10.4%. Alpha = 11.0 − 10.4 = +0.6%. Interpretation: Grayline earned 0.6 percentage points per year above the return its systematic (beta) risk required — consistent with its superior Treynor ratio, and attributable to selection skill if the beta estimate is trusted. GRADING: 1 point for the required return (10.4%); 1 point for alpha (+0.6%); 1 point for a correct one-sentence interpretation referencing beta-adjusted outperformance.",
      },
    ],
  },
];
export const L3_SESSION_SETS_2: ItemSet[] = [];
export const L3_SESSION_ESSAYS_2: Essay[] = [];

export const L3_FULL_READY =
  L3_SESSION_SETS_1.length >= 5 &&
  L3_SESSION_ESSAYS_1.length >= 4 &&
  L3_SESSION_SETS_2.length >= 5 &&
  L3_SESSION_ESSAYS_2.length >= 4;
