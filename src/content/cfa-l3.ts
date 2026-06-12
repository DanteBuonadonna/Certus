// ============================================================
// Certus — CFA Level III content (original, written for Certus)
// Wave 1: Private Wealth & the IPS — the signature L3 skill.
// Remaining L3 topics are added chapter by chapter to the same
// gold standard (deep reading + aligned questions + key terms).
// ============================================================

import { Chapter, Question, ExamContent } from "./types";

const chapters: Chapter[] = [
  {
    id: "cfa3-private-wealth",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth & Institutional",
    title: "Private Wealth: The IPS, Risk Tolerance, Required Return, and the Behavioral Client",
    readingMinutes: 33,
    summary:
      "The Level III signature skill: turn a messy human situation into an investment policy — objectives, constraints, the return math, and the biases in the room.",
    intro:
      "Level III changes the question. Levels I and II asked whether you can analyze a security; Level III asks whether you can run money for an actual person — someone with a mortgage, a concentrated stock position, a retirement date, tax bills, heirs, and feelings about losing money that don't match their finances. The instrument for that translation is the Investment Policy Statement, and the constructed-response (essay) section grades you on building one: stating return objectives you can defend with arithmetic, distinguishing a client's ABILITY to take risk from their WILLINGNESS, cataloguing constraints, and recognizing which behavioral biases are distorting the conversation. This chapter teaches that full workflow, including the required-return and tax gross-up calculations that anchor the morning session, because at Level III a beautifully reasoned answer with wrong arithmetic still bleeds points.",
    sections: [
      {
        heading: "Why the IPS is the product",
        blocks: [
          {
            kind: "p",
            text: "An Investment Policy Statement is the governing document between adviser and client: a written statement of objectives (risk and return), constraints (time horizon, taxes, liquidity, legal, unique circumstances), the strategic asset allocation that follows from them, and the rules for monitoring and rebalancing. Its deeper function is discipline — the IPS is written in calm weather precisely so there is something binding to consult in a storm. When markets fall 30% and the client calls in a panic, the IPS is the pre-commitment device that separates a planned response from an emotional one.",
          },
          {
            kind: "p",
            text: "The exam's IPS workflow is mechanical and worth internalizing as a checklist: (1) situational analysis — age, family, career stage, wealth source, balance sheet including human capital; (2) return objective — stated in words, then QUANTIFIED; (3) risk objective — ability and willingness assessed separately, then reconciled; (4) the five constraints; (5) the strategic asset allocation consistent with all of the above. Essay graders award points line by line against exactly this structure, so answering in this order is free organization credit.",
          },
          {
            kind: "p",
            text: "One framing idea threads the whole topic: total wealth = financial capital + human capital. Human capital is the present value of future labor income, and it behaves like an asset class. A tenured professor's human capital is bond-like — large, stable, inflation-linked — so her financial portfolio can carry more equity. An investment banker's income is itself equity-like and correlated with markets, arguing for a more conservative financial portfolio. Early-career investors are mostly human capital (which also argues for life insurance to hedge its loss); retirees are almost entirely financial capital, which is why their portfolios, not their paychecks, must do the work.",
          },
        ],
      },
      {
        heading: "Risk: ability versus willingness, and how to reconcile them",
        blocks: [
          {
            kind: "p",
            text: "Level III splits risk tolerance into two independent assessments. ABILITY to take risk is financial arithmetic: long horizon, large asset base relative to spending needs, flexible goals, secure income, low liquidity demands → high ability. Short horizon, thin cushion, fixed obligations → low ability. WILLINGNESS is psychological: what the client says, how they behaved in past drawdowns, the words they use ('I can't sleep when the market drops'). The exam expects you to grade each one separately and CITE the facts in the vignette that justify each grade.",
          },
          {
            kind: "table",
            table: {
              caption: "The reconciliation matrix — what governs when ability and willingness disagree.",
              headers: ["Ability", "Willingness", "Resolution"],
              rows: [
                ["High", "High", "Above-average risk tolerance; invest accordingly"],
                ["Low", "Low", "Below-average risk tolerance; conservative policy"],
                ["High", "Low", "WILLINGNESS governs near-term: the prudent answer is the LOWER of the two. Educate the client; revisit over time. Do not portfolio them into insomnia."],
                ["Low", "High", "ABILITY governs, full stop: enthusiasm does not pay for losses the balance sheet can't absorb. Counsel the client down."],
              ],
            },
          },
          {
            kind: "callout",
            label: "Essay rule of thumb",
            body: "When ability and willingness conflict, the LOWER one wins in the recommended policy — and the graders want to see the word 'education' when willingness is the binding constraint. Recommending risk above either limit is the one answer that is always wrong.",
          },
          {
            kind: "p",
            text: "Risk objectives then get stated in measurable terms: a maximum acceptable drawdown, a shortfall probability ('no more than 10% chance of spending cuts'), or a willingness to accept volatility consistent with the required return. Be alert to the difference between risk a client MUST take (a required return of 7% cannot be reached in T-bills) and risk they merely PREFER — the gap between the two is where most planning tension lives.",
          },
        ],
      },
      {
        heading: "The return objective: the arithmetic that anchors the essay",
        blocks: [
          {
            kind: "p",
            text: "A return objective has a qualitative statement ('fund retirement spending while preserving the portfolio's real value for heirs') and a number. The number comes from the client's own cash flows, and the computation pattern is the most repeated calculation in Level III private wealth: required spending divided by investable assets gives the real spending rate; add expected inflation (to preserve purchasing power) and any fee drag; mind taxes on the way.",
          },
          {
            kind: "example",
            example: {
              title: "the core required-return computation",
              prompt: "A couple retires with a $2,000,000 portfolio. They need $90,000 (after tax, in today's dollars) for first-year living expenses, inflation is expected at 3%, and advisory fees run 0.5%. What nominal return must the portfolio earn?",
              steps: [
                "Real spending rate = 90,000 ÷ 2,000,000 = 4.5%.",
                "Additive approximation: 4.5% + 3.0% inflation + 0.5% fees = 8.0%.",
                "Multiplicative (more precise, worth stating on essays): (1.045 × 1.03) − 1 = 7.64%, plus 0.5% fees ≈ 8.1%.",
              ],
              answer: "≈ 8.0% nominal (8.1% compounded). State the components explicitly — graders award the pieces: spending rate, inflation adjustment, fees.",
            },
          },
          {
            kind: "example",
            example: {
              title: "the tax gross-up",
              prompt: "A client needs $60,000 AFTER tax from a $2,000,000 portfolio whose withdrawals are taxed at 25%. Inflation is 3%. Required nominal pre-tax return?",
              steps: [
                "Gross up the spending need: pre-tax requirement = 60,000 ÷ (1 − 0.25) = $80,000.",
                "Pre-tax real spending rate = 80,000 ÷ 2,000,000 = 4.0%.",
                "Add inflation: 4.0% + 3.0% = 7.0% nominal pre-tax.",
              ],
              answer: "7.0%. Dividing by (1 − t) — not multiplying — is the step candidates botch under time pressure. $60,000 × 1.25 = $75,000 is WRONG; check: $80,000 × 0.75 = $60,000. ✓",
            },
          },
          {
            kind: "p",
            text: "Watch the moving parts the vignette can add: a one-time cash need (subtract it from the asset base BEFORE computing the spending rate), a mortgage payoff at retirement, income from pensions or part-time work (subtract from spending needs first), and the distinction between preserving NOMINAL capital (easier) and REAL capital (requires the inflation add-on). Each is one sentence in the vignette and one adjustment in your arithmetic.",
          },
        ],
      },
      {
        heading: "The five constraints: TTLLU",
        blocks: [
          {
            kind: "p",
            text: "Constraints are where the client's life enters the policy. The canonical five, memorable as T-T-L-L-U: Time horizon, Taxes, Liquidity, Legal/regulatory, and Unique circumstances. The exam grades specificity — 'long time horizon' scores less than 'long, two-stage horizon: 25 years of accumulation, then retirement.'",
          },
          {
            kind: "bullets",
            items: [
              "TIME HORIZON: length AND stages. Most lives are multistage (career → retirement → legacy). A new child, expected inheritance, or planned business sale adds a stage boundary. Longer horizons raise ability to take risk; approaching boundaries lower it.",
              "TAXES: the dominant private-client constraint. Interest, dividends, and realized gains are taxed differently; deferral is valuable (unrealized gains compound pre-tax); tax-advantaged accounts change asset LOCATION — as a rule, place tax-inefficient assets (taxable bonds, high-turnover strategies) in sheltered accounts and tax-efficient equity in taxable accounts. Loss harvesting accelerates losses to offset gains.",
              "LIQUIDITY: cash needs the portfolio must meet — living expenses not covered by income, an emergency reserve, known one-time outflows (tuition, home purchase, tax bills). High liquidity needs reduce risk ability and argue against lockup assets like private equity.",
              "LEGAL/REGULATORY: trusts and their distribution rules, restricted or control stock, prudent-investor duties when the client is a fiduciary for others.",
              "UNIQUE CIRCUMSTANCES: the catch-all that essays mine — a concentrated employer-stock position, ESG exclusions, supporting a dependent relative, business ownership, desired bequests. If a fact doesn't fit elsewhere, it lives here, and it usually drives a real portfolio decision.",
            ],
          },
          {
            kind: "callout",
            label: "The concentrated position",
            body: "A client with 60% of net worth in one stock is the most common 'unique circumstance.' The policy answer: reduce concentration over time, tax-aware — staged sales, charitable gifting of appreciated shares, exchange funds, or hedging via collars — while acknowledging emotional attachment (endowment bias) and any legal restrictions on insiders.",
          },
        ],
      },
      {
        heading: "The behavioral client: biases that bend the policy",
        blocks: [
          {
            kind: "p",
            text: "Level III treats behavioral finance as applied client management. The taxonomy: COGNITIVE ERRORS are faulty reasoning — and divide into belief perseverance (conservatism: clinging to prior views and underreacting to new information; confirmation: seeking only agreeing evidence; representativeness: classifying from small samples; illusion of control; hindsight) and processing errors (anchoring on purchase prices or index levels; mental accounting: treating money in buckets as non-fungible; framing: answers change with question wording; availability: overweighting vivid, recent events). EMOTIONAL BIASES arise from feeling, not logic: loss aversion (losses hurt roughly twice as much as gains please — produces holding losers too long and selling winners too early); overconfidence; self-control failure; status quo inertia; endowment (owned assets feel worth more); and regret aversion (doing nothing to avoid the pain of a wrong action).",
          },
          {
            kind: "p",
            text: "The practical rule the exam tests: cognitive errors are corrected with information and process — MODERATE them through education, data, and disciplined frameworks. Emotional biases run deeper and often must be ADAPTED to — built into the policy rather than argued away. The richer the client relative to their goals, the more an adviser can afford to adapt (deviations from optimal cost them little); the closer the client is to the edge of meeting their goals, the harder the adviser must moderate, because they cannot afford the bias. High wealth + emotional bias → adapt; lower wealth + cognitive bias → moderate; mixed cases fall in between.",
          },
          {
            kind: "p",
            text: "Behavioral insight also reshaped portfolio construction itself: goals-based investing deliberately harnesses mental accounting by building layered portfolios — a safety bucket that immunizes essential lifestyle spending in low-risk assets, a market bucket for maintaining lifestyle, and an aspirational bucket for legacy and upside. Technically sub-optimal versus one unified mean-variance portfolio, it is behaviorally durable: clients who know the mortgage bucket is safe don't liquidate equities at the bottom. On the essay, recommending a goals-based structure for a loss-averse client who panicked in the last crash is exactly the kind of synthesis Level III rewards.",
          },
          {
            kind: "example",
            example: {
              title: "diagnose, then adapt or moderate",
              prompt: "A 58-year-old founder, wealth far exceeding any spending need, refuses to diversify the 70% of her portfolio in her company's stock: 'I built it, I understand it, it's been good to me.' Identify the biases and the appropriate adviser response.",
              steps: [
                "Endowment bias (owned asset valued above market logic) and overconfidence — emotional; plus illusion of control and familiarity-driven representativeness — cognitive threads.",
                "Wealth massively exceeds goals → high sustainable spending cushion → the adviser can afford to ADAPT in part: full diversification is not required for goal safety.",
                "Policy: ring-fence enough diversified, lower-risk assets to fund all lifestyle goals forever; let a bounded slice of company stock remain; reduce gradually and tax-efficiently (staged sales, gifting appreciated shares).",
              ],
              answer: "Identify emotional biases → adapt within a goals-based structure that secures essentials first — not a lecture about diversification she will ignore.",
            },
          },
        ],
      },
      {
        heading: "From policy to portfolio: allocation, location, and monitoring",
        blocks: [
          {
            kind: "p",
            text: "The strategic asset allocation is the IPS made operational: the mix of asset classes whose expected return meets the requirement at the least risk consistent with the risk objective and constraints. For private clients, after-tax optimization matters — the same asset has different after-tax returns in different account types, so asset LOCATION (which holdings live in taxable versus tax-deferred versus tax-exempt accounts) adds return without adding risk. Monte Carlo simulation has largely displaced single-number deterministic projections for retirement adequacy because it expresses outcomes as a probability of success, captures sequence-of-returns risk (early losses while withdrawing damage sustainability far more than the same losses later), and lets the adviser show the client how spending flexibility changes the odds.",
          },
          {
            kind: "p",
            text: "Finally, the IPS commits to monitoring: review on a stated schedule and upon material life changes (retirement, sale of a business, inheritance, divorce, death of a spouse), and rebalance by rule — calendar-based or corridor-based — rather than by forecast. Rebalancing is the quiet hero of private wealth: it systematically sells what has risen and buys what has fallen, exactly the trade emotional clients resist, which is why pre-committing to it in the IPS matters more than optimizing the corridor width. When the exam asks 'what should the adviser do' after a market shock or windfall: the answer almost always begins with 'revisit the IPS,' not 'change the portfolio.'",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Investment Policy Statement (IPS)", def: "The governing document: objectives (risk, return), constraints (TTLLU), strategic allocation, and monitoring rules — written in calm weather to govern in storms." },
      { term: "Human capital", def: "Present value of future labor income; bond-like or equity-like depending on job stability, and the dominant asset early in life." },
      { term: "Ability to take risk", def: "Financial capacity: horizon, asset base vs needs, goal flexibility, income security. Graded from vignette facts." },
      { term: "Willingness to take risk", def: "Psychological tolerance revealed by statements and past behavior. When it conflicts with ability, the LOWER governs." },
      { term: "Required return computation", def: "Spending ÷ investable base, + inflation + fees; gross up after-tax needs by dividing by (1 − t)." },
      { term: "TTLLU constraints", def: "Time horizon, Taxes, Liquidity, Legal/regulatory, Unique circumstances — the five-part constraint checklist." },
      { term: "Asset location", def: "Placing tax-inefficient assets in sheltered accounts and tax-efficient equity in taxable accounts — after-tax return without added risk." },
      { term: "Cognitive errors", def: "Faulty reasoning (conservatism, confirmation, representativeness, anchoring, mental accounting, framing, availability) — moderated through education and process." },
      { term: "Emotional biases", def: "Feeling-driven (loss aversion, overconfidence, self-control, status quo, endowment, regret aversion) — often adapted to rather than argued away." },
      { term: "Adapt vs moderate", def: "High wealth relative to goals + emotional bias → adapt the portfolio; tighter finances + cognitive bias → moderate the client." },
      { term: "Goals-based investing", def: "Layered buckets (safety, lifestyle, aspirational) that harness mental accounting for behavioral durability." },
      { term: "Sequence-of-returns risk", def: "Early drawdown losses during withdrawals impair sustainability more than later ones — a key reason Monte Carlo displaced straight-line projections." },
      { term: "Concentrated position management", def: "Staged tax-aware sales, charitable gifts of appreciated stock, exchange funds, or collars — reduce risk while respecting taxes, law, and attachment." },
      { term: "Rebalancing discipline", def: "Calendar or corridor rules pre-committed in the IPS; systematically trades against emotion." },
    ],
    takeaways: [
      "The IPS is the deliverable: situation → quantified return objective → risk (ability vs willingness, lower governs) → TTLLU constraints → allocation.",
      "Required return = spending rate + inflation + fees; gross up after-tax needs by DIVIDING by (1 − t).",
      "Ability is arithmetic, willingness is psychology; grade them separately, cite vignette facts, and never recommend risk above either limit.",
      "Human capital is an asset class: bond-like labor income supports equity-heavy portfolios, equity-like income argues the reverse.",
      "Cognitive biases → moderate with education; emotional biases → often adapt, especially for wealthy clients with large goal cushions.",
      "Goals-based buckets sacrifice a little optimality for a lot of behavioral durability — the right call for loss-averse clients.",
      "After a shock or windfall, the first move is revisiting the IPS, not trading the portfolio.",
    ],
  },
];

const questions: Question[] = [
  {
    id: "cfa3-pw-q1",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth",
    difficulty: 2,
    stem: "A retiring couple holds a $2,000,000 portfolio and needs $90,000 after tax (today's dollars) in year one. Inflation is 3%; advisory fees are 0.5%. Their approximate required nominal return is closest to:",
    choices: ["4.5%", "8.0%", "9.5%"],
    answerIndex: 1,
    explanation:
      "Spending rate = 90,000/2,000,000 = 4.5%; add 3.0% inflation to preserve real value and 0.5% fees: ≈ 8.0% (8.1% multiplicatively). Choice A stops at the spending rate, ignoring inflation and fees — the portfolio would lose purchasing power every year. Choice C double-counts by inflating the spending need AND adding inflation to the rate. State components separately on essays; each earns its own point.",
  },
  {
    id: "cfa3-pw-q2",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth",
    difficulty: 3,
    stem: "A client needs $60,000 after tax from a $2,000,000 portfolio; withdrawals are taxed at 25%; inflation is 3%. The required nominal PRE-TAX return is closest to:",
    choices: ["6.0%", "6.75%", "7.0%"],
    answerIndex: 2,
    explanation:
      "Gross up first: 60,000/(1 − 0.25) = $80,000 pre-tax need → 80,000/2,000,000 = 4.0% real → + 3% inflation = 7.0%. Choice B comes from the classic error of multiplying by 1.25 (60,000 × 1.25 = 75,000 → 3.75% + 3%): verify the right way — 80,000 × 0.75 = 60,000 ✓, while 75,000 × 0.75 = 56,250 ✗. Choice A ignores taxes entirely.",
  },
  {
    id: "cfa3-pw-q3",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth",
    difficulty: 2,
    stem: "A 40-year-old surgeon with stable, high income, a 25-year horizon, and savings well above her goals says market losses make her physically ill and she sold everything in the last downturn. Her risk tolerance is best characterized as:",
    choices: [
      "Above average, because her ability to take risk is high.",
      "Below average, because willingness governs when it is lower than ability.",
      "Average, splitting the difference between ability and willingness.",
    ],
    answerIndex: 1,
    explanation:
      "Ability: high (horizon, income stability, asset cushion). Willingness: low (stated distress AND revealed panic-selling). When the two conflict, the prudent recommendation follows the LOWER — here willingness — paired with client education over time. Choice A would build a portfolio she will liquidate at the next bottom, converting paper losses to real ones. Choice C ('split the difference') is never the curriculum's answer; the conflict is resolved toward the binding constraint, not averaged.",
  },
  {
    id: "cfa3-pw-q4",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth",
    difficulty: 2,
    stem: "An investor refuses to sell a losing stock, saying she'll 'wait until it gets back to what I paid for it.' The TWO biases most directly displayed are:",
    choices: [
      "Anchoring and loss aversion.",
      "Availability and framing.",
      "Conservatism and illusion of control.",
    ],
    answerIndex: 0,
    explanation:
      "The purchase price is serving as an anchor (a cognitive processing error — the reference point has no economic relevance to the forward-looking decision), and the refusal to realize the loss is loss aversion (emotional — realizing the loss makes it 'real' and painful). This pairing produces the disposition effect: riding losers, selling winners. The other choices name real biases but not the ones evidenced by a price-based hold rationale.",
  },
  {
    id: "cfa3-pw-q5",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth",
    difficulty: 3,
    stem: "A client's wealth vastly exceeds all lifetime goals. He exhibits strong emotional biases (endowment, status quo) about his concentrated stock. Per the adapt-or-moderate framework, the adviser should MOST appropriately:",
    choices: [
      "Moderate: educate the client until he accepts full diversification.",
      "Adapt: accommodate the biases within a policy that first secures all goals with diversified assets.",
      "Ignore the biases and implement the mean-variance optimal portfolio.",
    ],
    answerIndex: 1,
    explanation:
      "Two switches both point to ADAPT: emotional biases (deeper-seated, resistant to education) and a large wealth cushion (deviations from optimal cost little goal risk). The framework: secure every lifetime goal in diversified, appropriate-risk assets, then tolerate a bounded concentrated remainder. Choice A applies the cognitive-bias remedy to emotional biases and is likely to fail. Choice C maximizes theoretical efficiency and the probability the client fires the adviser or abandons the plan at the worst moment.",
  },
  {
    id: "cfa3-pw-q6",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth",
    difficulty: 2,
    stem: "Which placement BEST reflects sound asset location for a client with taxable, tax-deferred, and Roth-type accounts?",
    choices: [
      "High-turnover taxable-bond strategies in the taxable account; broad equity index funds in tax-deferred accounts.",
      "Taxable bonds and high-turnover strategies in tax-advantaged accounts; low-turnover equity index funds in the taxable account.",
      "All assets split equally across account types for diversification.",
    ],
    answerIndex: 1,
    explanation:
      "Asset location places tax-INEFFICIENT assets (ordinary-income-generating bonds, high-turnover strategies that realize short-term gains) where the shelter does the most good, and tax-EFFICIENT assets (low-turnover index equity, which defers gains and enjoys favorable rates) in taxable accounts. Choice A is exactly backwards. Choice C confuses location with diversification — diversification is about WHAT you hold; location is about WHERE each holding sits, and 'equal split' surrenders the free after-tax return.",
  },
  {
    id: "cfa3-pw-q7",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth",
    difficulty: 2,
    stem: "A goals-based (bucketed) portfolio structure is technically sub-optimal versus a single mean-variance portfolio, yet the curriculum endorses it for many private clients because it:",
    choices: [
      "Generates higher expected returns through concentration.",
      "Harnesses mental accounting to keep loss-averse clients invested through drawdowns.",
      "Eliminates the need for an IPS.",
    ],
    answerIndex: 1,
    explanation:
      "Goals-based layering (safety, lifestyle, aspirational buckets) deliberately exploits the mental-accounting bias for good: a client who KNOWS essential spending is immunized in the safety bucket can watch the market bucket fall without liquidating. The modest mean-variance efficiency loss buys behavioral durability — and a plan clients stick with beats an optimal plan they abandon. Choice A is false (it's an efficiency cost, not a return enhancer). Choice C is backwards: buckets are typically documented WITHIN the IPS.",
  },
  {
    id: "cfa3-pw-q8",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth",
    difficulty: 3,
    stem: "Why has Monte Carlo simulation largely replaced deterministic (straight-line) projections for retirement adequacy analysis?",
    choices: [
      "It guarantees higher projected ending wealth.",
      "It captures sequence-of-returns risk and expresses outcomes as a probability of success.",
      "It removes the need for capital market assumptions.",
    ],
    answerIndex: 1,
    explanation:
      "A deterministic 7%-every-year projection hides the path: two retirees with identical average returns can end in ruin or riches depending on WHEN the bad years land, because withdrawals during early losses permanently impair the base (sequence risk). Monte Carlo runs thousands of paths and reports a success probability, making spending-flexibility trade-offs visible. Choice A is nonsense — simulation changes the lens, not the outcome. Choice C is backwards: Monte Carlo runs ON capital market assumptions; it can't replace them.",
  },
  {
    id: "cfa3-pw-q9",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth",
    difficulty: 2,
    stem: "Following a sudden 25% market decline, a client calls demanding to 'sell everything.' The adviser's MOST appropriate first action is to:",
    choices: [
      "Execute the sale promptly — the client directs the account.",
      "Revisit the IPS with the client: confirm whether goals, horizon, or circumstances have actually changed.",
      "Switch the portfolio to the new optimal allocation given lower asset prices.",
    ],
    answerIndex: 1,
    explanation:
      "The IPS exists precisely for this moment: it was written calmly, and unless the client's goals, horizon, liquidity needs, or circumstances have CHANGED, the policy stands and the conversation is about loss aversion and availability bias, not transactions. Choice A treats a panic instruction as an informed direction — after the discussion, an insistent client may still direct, but execution is not the FIRST action. Choice C responds to emotion with market timing, compounding one behavioral error with another.",
  },
];

export const cfaL3Content: ExamContent = {
  examSlug: "cfa-l3",
  chapters,
  questions,
};
