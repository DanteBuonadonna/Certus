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
  {
    id: "cfa3-asset-allocation",
    examSlug: "cfa-l3",
    topicId: "pm-asset",
    topicName: "Asset Allocation",
    title: "Asset Allocation: MVO, Its Fixes, Liability-Relative Investing, and Rebalancing",
    readingMinutes: 30,
    summary:
      "How allocations actually get built: mean–variance optimization and its famous flaws, the fixes (reverse optimization, Black-Litterman), liability-relative approaches, and corridor rebalancing.",
    intro:
      "Asset allocation is the largest single decision in portfolio management — study after study attributes the bulk of a portfolio's return variability to it — and Level III tests it as a craft, not a formula. The craft begins with mean–variance optimization, immediately confronts MVO's well-documented pathologies, and then deploys the fixes professionals actually use: reverse optimization, Black–Litterman, resampling, and sensible constraints. Institutions with promises to keep get their own machinery — liability-relative allocation — and every allocation, however derived, needs a rebalancing policy that says when drift becomes action. The exam wants you to know each tool, each tool's failure mode, and which client situation calls for which.",
    sections: [
      {
        heading: "MVO: the workhorse and its three famous flaws",
        blocks: [
          {
            kind: "p",
            text: "Mean–variance optimization takes expected returns, volatilities, and correlations and returns the frontier of portfolios with maximum expected return per unit of risk; the chosen point reflects the investor's risk aversion. As an organizing framework it is unimpeachable. As a literal machine it has three failure modes the exam loves. First, GIGO at high gain: the optimizer is hypersensitive to expected-return inputs — small, statistically meaningless changes in one asset's expected return swing allocations violently. Second, concentration: unconstrained MVO routinely puts huge weights in a few assets (often those whose inputs are most overestimated — error maximization). Third, scope blindness: single-period, no liabilities, no skew or fat tails, no rebalancing or tax friction. Diagnosing WHICH flaw a vignette illustrates is half the points.",
          },
          {
            kind: "p",
            text: "The first family of fixes attacks the inputs. REVERSE OPTIMIZATION runs MVO backwards: start from the global market portfolio's observed weights — which embody the market's collective judgment — and solve for the implied expected returns that would make those weights optimal. Those implied returns are internally consistent and well-behaved, a far better starting point than naive historical means. BLACK–LITTERMAN goes one step further: begin with reverse-optimized implied returns, then BLEND IN the investor's own views (with confidence levels) to tilt the result. The output: allocations that reflect your views without the wild concentration of raw MVO. RESAMPLED MVO attacks estimation error statistically — run the optimization across many simulated input draws and average the resulting frontiers — yielding more diversified, more stable allocations. And plain CONSTRAINTS (maximum weights, asset-class bounds, budget rules) remain the humble fix every practitioner uses.",
          },
          {
            kind: "callout",
            label: "Matching fix to flaw",
            body: "Vignette says allocations 'changed drastically when the analyst updated one return estimate' → input sensitivity → reverse optimization / Black–Litterman. Says 'the optimizer put 80% in two asset classes' → concentration → constraints, resampling, or BL. Says 'the fund must pay pensions' → wrong objective → liability-relative methods. The exam grades the pairing.",
          },
          {
            kind: "p",
            text: "Risk budgeting reframes the same decision: instead of asking 'what weights?', ask 'how should total risk be spent?' Each asset's marginal contribution to total risk (MCTR) times its weight gives its absolute risk contribution; a portfolio is optimally risk-budgeted when the ratio of excess return to MCTR is EQUAL across assets — every unit of risk is buying the same expected payoff. Risk parity is the special case that equalizes risk contributions outright, which in practice means leveraging bonds — know that critique.",
          },
        ],
      },
      {
        heading: "Liability-relative allocation: investing against promises",
        blocks: [
          {
            kind: "p",
            text: "A pension fund that 'beat its benchmark' while its funded ratio collapsed has failed. When real liabilities exist, the objective changes from maximizing wealth to funding promises — and the natural risk measure becomes SURPLUS volatility, where surplus = assets − PV(liabilities). SURPLUS OPTIMIZATION re-runs MVO with surplus return as the objective: liabilities enter like a short asset position, so bonds that co-move with liability values (long duration, inflation-linked where promises are indexed) suddenly look 'low risk' even when their standalone volatility is high. That re-ranking of asset riskiness is the central insight tested.",
          },
          {
            kind: "p",
            text: "The TWO-PORTFOLIO (hedging/return-seeking) approach splits the problem: build a hedging portfolio that immunizes the liabilities — duration-matched, currency-matched, inflation-matched bonds — then invest the TRUE surplus in a return-seeking portfolio chasing growth. Clean and intuitive, it works beautifully when assets comfortably exceed liabilities; underfunded plans face an ugly choice (can't fully hedge AND seek returns), and partial or contingent hedging strategies appear. INTEGRATED approaches jointly optimize both decisions. For individuals, goals-based allocation (covered in the Private Wealth chapter) is the household version of the same logic: each goal is a liability; each bucket is its hedging portfolio.",
          },
          {
            kind: "example",
            example: {
              title: "why duration risk flips sign",
              prompt: "A pension plan is exactly fully funded: assets $1.0B, PV of liabilities $1.0B with duration 12. The CIO holds all assets in cash to 'avoid risk.' Rates fall 100 bps. What happens to the surplus?",
              steps: [
                "Liabilities rise ≈ 12 × 1% = 12% → $1.12B.",
                "Cash assets stay ≈ $1.0B.",
                "Surplus goes from $0 to ≈ −$120m — the 'riskless' portfolio just created a deficit.",
              ],
              answer: "Cash is the RISKY asset in liability space. The minimum-surplus-risk portfolio is the one whose duration matches the liabilities — the foundational LDI insight.",
            },
          },
        ],
      },
      {
        heading: "Rebalancing: when drift becomes action",
        blocks: [
          {
            kind: "p",
            text: "Markets move allocations off target daily; the policy question is when to trade back. CALENDAR rebalancing (quarterly, annually) is simple but blind to magnitude. PERCENT-RANGE (corridor) rebalancing sets a band around each target — e.g., 40% ± 4% — and trades when a band breaks, responding to drift the moment it matters. Corridor WIDTH is the tested judgment, set asset by asset:",
          },
          {
            kind: "table",
            table: {
              caption: "What widens an asset's rebalancing corridor.",
              headers: ["Factor", "Effect on corridor", "Logic"],
              rows: [
                ["Higher transaction costs", "Wider", "Trading is expensive — tolerate more drift"],
                ["Lower correlation with the rest of the portfolio", "Narrower", "Drift changes overall risk faster when the asset moves independently"],
                ["Higher own volatility", "Narrower (cost-benefit: often wider in practice — exam follows the curriculum: more vol → narrower to control risk; know the stated direction in the vignette's framing)", "Volatile assets breach risk targets quickly"],
                ["Higher risk tolerance", "Wider", "Deviations matter less to this investor"],
                ["Illiquid asset (private equity, real estate)", "Wider", "Forced trading is costly or impossible"],
                ["Taxable account", "Wider", "Realizing gains has a tax price"],
              ],
            },
          },
          {
            kind: "p",
            text: "Two closing insights. Rebalancing is a SHORT-VOLATILITY, contrarian act — it systematically sells recent winners and buys recent losers, earning a diversification benefit in mean-reverting markets and lagging in long trends. And behaviorally it is the single most valuable pre-commitment in the IPS: the moments rebalancing fires (buying equities after a crash) are precisely the moments clients least want to act, which is why the rule, not the forecast, must do the deciding.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Mean–variance optimization", def: "Maximize expected return per unit of variance given inputs; the framework is sound, the literal output is fragile." },
      { term: "GIGO / input sensitivity", def: "MVO's defining flaw: tiny expected-return changes produce violent allocation swings — the optimizer maximizes estimation error." },
      { term: "Reverse optimization", def: "Run MVO backwards from market-cap weights to extract implied, internally consistent expected returns." },
      { term: "Black–Litterman", def: "Blend reverse-optimized implied returns with the investor's confidence-weighted views; tilted but diversified allocations." },
      { term: "Resampled MVO", def: "Average optimal frontiers across simulated input draws — stability through statistics." },
      { term: "Risk budgeting", def: "Allocate RISK, not capital: optimal when excess return per unit of MCTR is equal across positions." },
      { term: "Surplus optimization", def: "MVO on surplus (assets − PV liabilities): liabilities act as a short position, re-ranking which assets are 'risky.'" },
      { term: "Two-portfolio approach", def: "Hedge the liabilities with a matching portfolio; invest the true surplus for return. Strained when underfunded." },
      { term: "Corridor rebalancing", def: "Trade when an asset breaks its band; width set by costs, correlation, volatility, taxes, liquidity, risk tolerance." },
      { term: "Rebalancing as short volatility", def: "Systematically sells winners and buys losers — gains in mean reversion, lags in trends, and disciplines client behavior." },
    ],
    takeaways: [
      "Know MVO's three flaws cold — input sensitivity, concentration, scope blindness — and which fix answers which flaw.",
      "Reverse optimization extracts implied returns from market weights; Black–Litterman adds your views with confidence weighting.",
      "With liabilities, risk is SURPLUS risk: cash becomes risky, duration-matched bonds become the safe asset.",
      "Fully funded + duration mismatch = a deficit waiting for a rate move — the $120m cash example is the whole LDI argument.",
      "Corridors widen with costs, taxes, illiquidity, and risk tolerance; they narrow when an asset's drift changes portfolio risk quickly.",
      "Rebalancing is pre-committed contrarianism — the IPS rule that buys the crash your client wants to sell.",
    ],
  },
  {
    id: "cfa3-fixed-income-strats",
    examSlug: "cfa-l3",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "Fixed Income Strategies: Immunization, LDI, and Portfolio Construction",
    readingMinutes: 30,
    summary:
      "Funding liabilities with bond math: single- and multiple-liability immunization, derivatives overlays with the BPV hedge formula, and bullet/barbell/ladder trade-offs.",
    intro:
      "Level III fixed income asks a manager's questions: a known payment is due in seven years — construct a portfolio that meets it regardless of rates; a pension's liabilities have a BPV of $225,000 — close the duration gap with futures; a client wants bond exposure — defend ladder versus barbell versus bullet. The mathematics is mostly Level I duration arithmetic, but deployed with intent. The center of gravity is immunization — the conditions under which a bond portfolio funds a liability under any rate path — plus the derivatives overlays that adjust exposure without trading the underlying portfolio.",
    sections: [
      {
        heading: "Immunizing a single liability",
        blocks: [
          {
            kind: "p",
            text: "Immunization balances two opposing rate risks. If rates rise, bond prices fall (price risk) but coupons reinvest at higher rates (reinvestment benefit); if rates fall, prices rise but reinvestment suffers. At one particular structure the two effects offset for any single parallel shift: when the portfolio's MACAULAY DURATION equals the investment horizon. The classic three conditions for immunizing a single liability: (1) initial PV of assets ≥ PV of the liability; (2) portfolio Macaulay duration = liability due date; (3) minimize portfolio convexity/dispersion — concentrate cash flows around the horizon — so that non-parallel twists between the cash flows and the liability date have the least room to hurt. A zero-coupon bond maturing exactly at the horizon is perfect immunization: no reinvestment, no price risk at the date that matters; everything else is an approximation of that zero.",
          },
          {
            kind: "p",
            text: "Immunization is not fire-and-forget: duration drifts with time and rate moves (and not one-for-one), so the portfolio must be REBALANCED back to the target duration periodically. The structural risk that remains — twists and butterflies the duration match can't see — shrinks as cash-flow dispersion around the horizon shrinks; that's why condition (3) exists.",
          },
        ],
      },
      {
        heading: "Multiple liabilities and the derivatives overlay",
        blocks: [
          {
            kind: "p",
            text: "Funding a STREAM of liabilities generalizes the rules. Duration-matching conditions: PV of assets ≥ PV of liabilities; asset BPV (money duration) = liability BPV; and asset cash flows at least as dispersed/convex as the liabilities — in practice asset convexity slightly ABOVE liability convexity (but minimized, to limit structural risk). The blunt alternative, CASH-FLOW MATCHING, buys bonds whose payments land exactly on each liability date — riskless in concept, expensive and constraining in practice. Contingent immunization runs an active portfolio while a surplus cushion exists and snaps to immunization mode if the cushion erodes to zero.",
          },
          {
            kind: "formula",
            formula: {
              label: "Closing a duration gap with futures",
              expr: "N_f = (BPV_Liability − BPV_Portfolio) / BPV_futures",
              note: "Positive N_f → buy futures (add duration); negative → sell. BPV = money duration per 1 bp.",
            },
          },
          {
            kind: "example",
            example: {
              title: "the BPV hedge",
              prompt: "A pension's liabilities have a BPV of $225,000; its asset portfolio has a BPV of $150,000. Treasury futures have a BPV of $90 per contract. What trade closes the gap?",
              steps: [
                "Gap = 225,000 − 150,000 = $75,000 of BPV missing on the asset side.",
                "N_f = 75,000 ÷ 90 = 833.3.",
                "Assets are SHORT duration relative to liabilities → BUY (go long) futures.",
              ],
              answer: "Buy ≈ 833 contracts. If rates fall, liabilities balloon — the long futures gain plugs the hole. The sign logic (under-hedged → buy) is tested as often as the division.",
            },
          },
          {
            kind: "p",
            text: "The same overlay logic powers everyday duration management: a manager bearish on rates sells futures to cut portfolio BPV without disturbing bond holdings (and their embedded gains); receive-fixed swaps ADD duration, pay-fixed swaps REMOVE it. Derivatives change the exposure; the cash portfolio stays put — cheaper, faster, tax-quieter.",
          },
        ],
      },
      {
        heading: "Bullet, barbell, ladder — and how bond portfolios earn",
        blocks: [
          {
            kind: "p",
            text: "Three structures with the same duration behave differently because convexity and cash-flow placement differ. A BULLET concentrates maturities near one point: least convexity, best for an immunization target, outperforms when the curve STEEPENS or flattens around its node less than implied. A BARBELL splits between short and long: maximum convexity and dispersion, outperforms in large parallel moves (convexity pays) and curve FLATTENING (the long end rallies), but yields less in a steep, stable curve (you give up the belly's carry). A LADDER spreads evenly: diversified reinvestment timing, natural liquidity as a rung matures every period, convexity between the two — the pragmatic private-client default. Mnemonic the exam rewards: barbells love flattening and volatility; bullets love steepening and stability.",
          },
          {
            kind: "p",
            text: "Finally, decompose expected fixed income returns the way the curriculum does: E[return] ≈ yield income (coupon ÷ price) + rolldown return (price pull along an unchanged curve) ± expected price change from the manager's rate/spread VIEW − expected credit losses ± currency effects. The first two terms — yield + rolldown = 'rolling yield' — are what the portfolio earns if the curve simply stays put, and separating that passive baseline from view-driven return is exactly how an exam vignette will ask you to attribute a manager's results.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Immunization", def: "Structuring assets so a liability is funded under any (parallel) rate path — price and reinvestment risks offsetting." },
      { term: "Macaulay duration = horizon", def: "The single-liability condition: at that match, rate moves hurt price and help reinvestment in equal measure." },
      { term: "Minimize convexity/dispersion", def: "Third immunization condition: cash flows hugging the horizon leave non-parallel twists the least room to hurt." },
      { term: "BPV / money duration", def: "Dollar value change per 1 bp move; the unit liabilities and hedges are matched in." },
      { term: "Duration matching (multiple liabilities)", def: "PV(A) ≥ PV(L), BPV(A) = BPV(L), asset convexity just above liability convexity." },
      { term: "Cash-flow matching", def: "Bond payments land on liability dates exactly — riskless in concept, costly and rigid in practice." },
      { term: "Contingent immunization", def: "Active management while a surplus cushion lasts; lock into immunization if it erodes." },
      { term: "N_f = (BPV_L − BPV_P)/BPV_f", def: "The futures overlay count: positive buy, negative sell. Know the sign logic as well as the division." },
      { term: "Receive-fixed swap", def: "Adds duration (like buying a bond financed at floating); pay-fixed removes duration." },
      { term: "Barbell vs bullet", def: "Same duration, different convexity: barbell wins big moves and flattening; bullet wins stable, steepening curves." },
      { term: "Laddered portfolio", def: "Even maturities: diversified reinvestment, built-in liquidity, the private-client workhorse." },
      { term: "Rolling yield", def: "Yield income + rolldown — the return if the curve doesn't move; the baseline views are judged against." },
    ],
    takeaways: [
      "Single liability: PV match, Macaulay duration = horizon, minimize dispersion — a maturity-matched zero is the ideal everything imitates.",
      "Multiple liabilities: match BPVs with asset convexity slightly above liability convexity; rebalance as durations drift.",
      "N_f = (BPV_L − BPV_P)/BPV_f: 833 contracts in the worked case — and the SIGN tells you buy or sell.",
      "Swaps and futures move duration without touching the bonds: receive-fixed adds, pay-fixed subtracts.",
      "Barbell = convexity + flattening trades; bullet = carry + immunization targets; ladder = liquidity + reinvestment diversification.",
      "E[return] = yield + rolldown ± view-driven price change − credit losses ± currency: attribute results against the rolling-yield baseline.",
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
  // ---- Asset Allocation ----
  {
    id: "cfa3-aa-q1",
    examSlug: "cfa-l3",
    topicId: "pm-asset",
    topicName: "Asset Allocation",
    difficulty: 2,
    stem: "An analyst nudges one asset class's expected return from 6.0% to 6.3% and the unconstrained MVO allocation to it jumps from 12% to 47%. The MOST appropriate remedy is:",
    choices: [
      "Use longer historical samples to estimate returns.",
      "Use reverse optimization or Black–Litterman to generate the return inputs.",
      "Remove the asset class from the opportunity set.",
    ],
    answerIndex: 1,
    explanation:
      "This is MVO's signature input-sensitivity flaw — the optimizer maximizes estimation error. The curriculum's remedy is better-behaved inputs: reverse optimization extracts implied returns from market weights, and Black–Litterman blends those with the investor's views, producing diversified allocations stable to small input changes. Longer histories (A) barely reduce expected-return estimation error (means converge agonizingly slowly). Choice C amputates the opportunity set instead of fixing the estimator.",
  },
  {
    id: "cfa3-aa-q2",
    examSlug: "cfa-l3",
    topicId: "pm-asset",
    topicName: "Asset Allocation",
    difficulty: 3,
    stem: "A fully funded pension plan (assets $1.0B, liability PV $1.0B, liability duration 12) holds all assets in cash. Rates fall 100 bps. The surplus moves to approximately:",
    choices: ["$0 — cash is riskless", "−$120 million", "+$120 million"],
    answerIndex: 1,
    explanation:
      "Liabilities rise about 12% (duration 12 × 1%) to ≈ $1.12B while cash sits at $1.0B: surplus ≈ −$120m. In liability-relative space, cash is RISKY because it hedges nothing; the minimum-surplus-risk asset is the duration-matched bond portfolio. Choice A measures risk in asset-only terms — the precise mistake liability-relative allocation exists to correct. Choice C reverses the direction liabilities move when rates fall.",
  },
  {
    id: "cfa3-aa-q3",
    examSlug: "cfa-l3",
    topicId: "pm-asset",
    topicName: "Asset Allocation",
    difficulty: 2,
    stem: "Which asset MOST justifies a wider rebalancing corridor?",
    choices: [
      "A liquid large-cap equity fund in a tax-exempt account.",
      "A private real estate holding in a taxable account.",
      "A government bond ETF with low transaction costs.",
    ],
    answerIndex: 1,
    explanation:
      "Corridors widen when trading is costly or painful: illiquidity (forced sales of private assets are expensive or impossible) and taxable status (rebalancing realizes gains) BOTH argue for tolerance, making the private real estate position the clear case. The liquid, cheap, tax-exempt alternatives in A and C have no such frictions — their corridors can stay tight so drift is corrected quickly.",
  },
  {
    id: "cfa3-aa-q4",
    examSlug: "cfa-l3",
    topicId: "pm-asset",
    topicName: "Asset Allocation",
    difficulty: 2,
    stem: "A risk-budgeted portfolio is optimal when:",
    choices: [
      "Every asset contributes equal risk to the portfolio.",
      "The ratio of excess return to marginal contribution to total risk is equal across assets.",
      "No asset's weight exceeds its risk contribution.",
    ],
    answerIndex: 1,
    explanation:
      "Optimality in risk budgeting means every unit of risk is buying the same expected reward: excess return ÷ MCTR equalized across positions — otherwise shifting risk from a low-payoff to a high-payoff use improves the portfolio. Choice A describes RISK PARITY, a special case (and one famously requiring leveraged bonds), not the general optimum. Choice C is a plausible-sounding invention with no analytical content.",
  },
  // ---- Fixed Income Strategies ----
  {
    id: "cfa3-fi-q1",
    examSlug: "cfa-l3",
    topicId: "fixed",
    topicName: "Fixed Income",
    difficulty: 2,
    stem: "To immunize a single liability due in 7 years, a portfolio should have:",
    choices: [
      "Modified duration of 7 and maximum convexity.",
      "Macaulay duration of 7, PV at least equal to the liability, and minimal cash-flow dispersion.",
      "Maturity of exactly 7 years regardless of coupon structure.",
    ],
    answerIndex: 1,
    explanation:
      "The three conditions: sufficient PV, MACAULAY duration equal to the horizon (where price and reinvestment risks offset), and minimized convexity/dispersion so non-parallel twists have the least room to hurt. Choice A names the wrong duration measure and inverts the convexity condition — immunizers MINIMIZE dispersion. Choice C confuses maturity with duration: a 7-year coupon bond has duration well under 7; only a 7-year ZERO satisfies both at once, which is why zeros are perfect immunization.",
  },
  {
    id: "cfa3-fi-q2",
    examSlug: "cfa-l3",
    topicId: "fixed",
    topicName: "Fixed Income",
    difficulty: 2,
    stem: "Liabilities have a BPV of $225,000; the bond portfolio's BPV is $150,000; the chosen futures contract has a BPV of $90. The appropriate overlay is closest to:",
    choices: ["Sell 833 contracts", "Buy 833 contracts", "Buy 2,500 contracts"],
    answerIndex: 1,
    explanation:
      "N_f = (BPV_L − BPV_P)/BPV_f = (225,000 − 150,000)/90 ≈ +833 → positive → BUY futures. The portfolio is short duration relative to its liabilities; if rates fall the liabilities outgrow the assets, and the long futures position fills the gap. Choice A gets the arithmetic right and the SIGN wrong — the most common exam error on this pattern. Choice C divides the full liability BPV instead of the gap.",
  },
  {
    id: "cfa3-fi-q3",
    examSlug: "cfa-l3",
    topicId: "fixed",
    topicName: "Fixed Income",
    difficulty: 3,
    stem: "A manager expects a large parallel rate move (direction uncertain) and curve flattening. With duration held constant, which structure is MOST attractive?",
    choices: ["Bullet", "Barbell", "Ladder"],
    answerIndex: 1,
    explanation:
      "Both forecasts favor the barbell: its higher CONVEXITY profits from large parallel moves in either direction (gains exceed losses for equal-sized shocks), and its long-end weighting wins when the curve flattens (long yields fall relative to short). The bullet is the carry-and-stability structure — it outperforms when the curve is steep and static. The ladder sits between, prized for reinvestment diversification and liquidity rather than curve views. 'Barbells love volatility and flattening' is the mnemonic.",
  },
  {
    id: "cfa3-fi-q4",
    examSlug: "cfa-l3",
    topicId: "fixed",
    topicName: "Fixed Income",
    difficulty: 2,
    stem: "A bond portfolio's expected return assuming an UNCHANGED yield curve is best described as:",
    choices: [
      "Yield income plus rolldown return (the rolling yield).",
      "Coupon income only.",
      "The manager's forecast price appreciation.",
    ],
    answerIndex: 0,
    explanation:
      "If the curve stays put, the portfolio still earns its yield income (coupon ÷ price) PLUS rolldown — bonds re-priced at the lower-yield, shorter-maturity point of an upward-sloping curve gain value as time passes. Together: the rolling yield, the passive baseline against which view-driven returns are attributed. Choice B omits rolldown; choice C is precisely the part of return that an unchanged curve CONTRIBUTES NOTHING to — manager views only pay when something moves.",
  },

  // ---- Asset Allocation ----
  {
    id: "cfa3-aa-q5", examSlug: "cfa-l3", topicId: "pm-asset", topicName: "Asset Allocation", difficulty: 3,
    stem: "A well-known drawback of unconstrained mean-variance optimization (MVO) is that it:",
    choices: ["Always produces well-diversified portfolios", "Is highly sensitive to input estimates ('error maximization'), producing concentrated, unstable weights", "Ignores expected returns entirely"],
    answerIndex: 1,
    explanation: "MVO is an 'error maximizer': small changes in expected-return inputs can swing the optimal weights dramatically, often concentrating in a few assets. That's why practitioners add constraints, use resampling, or apply Black-Litterman. Choice A is the opposite of the problem. Choice C is wrong — MVO depends heavily on expected returns; that's the source of its instability.",
  },
  {
    id: "cfa3-aa-q6", examSlug: "cfa-l3", topicId: "pm-asset", topicName: "Asset Allocation", difficulty: 3,
    stem: "A risk-parity asset allocation sets weights so that:",
    choices: ["Each asset class contributes an equal amount of dollars", "Each asset class contributes an equal amount of risk to the portfolio", "The portfolio holds only the minimum-variance asset"],
    answerIndex: 1,
    explanation: "Risk parity allocates so that each asset (or factor) contributes equally to total portfolio risk, which typically raises the weight of low-volatility assets like bonds (often with leverage) rather than weighting by capital. Choice A describes equal-dollar weighting, not equal-risk. Choice C describes a single-asset minimum-variance corner, not risk parity.",
  },
  {
    id: "cfa3-aa-q7", examSlug: "cfa-l3", topicId: "pm-asset", topicName: "Asset Allocation", difficulty: 3,
    stem: "All else equal, higher transaction costs and less liquidity argue for rebalancing with:",
    choices: ["Narrower (tighter) corridors around target weights", "Wider corridors, tolerating more drift before trading", "No rebalancing policy at all"],
    answerIndex: 1,
    explanation: "When trading is expensive or assets are illiquid, wider rebalancing corridors reduce costly turnover by letting weights drift further before action. Choice A would trigger frequent, costly trades — the wrong response to high costs. Choice C abandons risk control entirely; the goal is to balance the cost of trading against the cost of drift, not to stop rebalancing.",
  },
  {
    id: "cfa3-aa-q8", examSlug: "cfa-l3", topicId: "pm-asset", topicName: "Asset Allocation", difficulty: 3,
    stem: "A liability-relative (surplus) approach to asset allocation focuses on:",
    choices: ["Maximizing absolute return regardless of liabilities", "Managing assets relative to the liabilities they must fund, controlling surplus volatility", "Holding only cash to avoid any risk"],
    answerIndex: 1,
    explanation: "Institutions with defined obligations (pensions, insurers) optimize the surplus — assets minus the present value of liabilities — choosing assets whose behavior tracks the liabilities to limit funding-ratio volatility. Choice A ignores the liabilities that define the problem. Choice C eliminates return-seeking and usually can't fund long-dated liabilities, often increasing real risk.",
  },
  {
    id: "cfa3-aa-q9", examSlug: "cfa-l3", topicId: "pm-asset", topicName: "Asset Allocation", difficulty: 3,
    stem: "The Black-Litterman model improves on basic MVO mainly by:",
    choices: ["Using only the investor's views and ignoring the market", "Blending market-equilibrium (implied) returns with the investor's views to produce more stable, diversified weights", "Removing the need for any expected-return estimates"],
    answerIndex: 1,
    explanation: "Black-Litterman starts from the returns implied by market-cap equilibrium, then tilts toward the investor's specific views in proportion to confidence, yielding more intuitive and stable allocations than raw MVO. Choice A discards the equilibrium anchor that gives the model its stability. Choice C is wrong — it still uses returns, just constructed more robustly.",
  },

  // ---- Fixed Income (portfolio strategies) ----
  {
    id: "cfa3-fi-q5", examSlug: "cfa-l3", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "To immunize a single future liability with a bond portfolio, the manager should:",
    choices: ["Match the portfolio's Macaulay duration to the liability's horizon and minimize convexity/dispersion", "Maximize portfolio convexity", "Hold only the highest-yielding bonds available"],
    answerIndex: 0,
    explanation: "Classical immunization of one liability matches the portfolio's Macaulay duration to the liability horizon (so price and reinvestment effects offset) and minimizes dispersion/convexity so the match is robust to non-parallel shifts, while keeping PV of assets ≥ PV of the liability. Choice B is wrong — excess convexity increases exposure to structural risk in single-liability immunization. Choice C chases yield and ignores the duration match that immunization requires.",
  },
  {
    id: "cfa3-fi-q6", examSlug: "cfa-l3", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "Compared with immunization, cash flow matching:",
    choices: ["Requires ongoing rebalancing as rates change", "Funds each liability with bond cash flows timed to it, needing little or no rebalancing but with tighter constraints", "Takes on more interest-rate risk"],
    answerIndex: 1,
    explanation: "Cash flow matching builds a dedicated portfolio whose coupons and maturities arrive when each liability is due, so once set it needs essentially no rebalancing — but it's more constrained and often costlier than immunization. Choice A describes immunization, which must be rebalanced as durations drift. Choice C is backwards; cash flow matching minimizes interest-rate risk by design.",
  },
  {
    id: "cfa3-fi-q7", examSlug: "cfa-l3", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "Contingent immunization allows a manager to:",
    choices: ["Manage actively as long as the portfolio stays above a required 'safety net' value, switching to immunization if it's breached", "Never deviate from a matched portfolio", "Ignore the liability completely"],
    answerIndex: 0,
    explanation: "Contingent immunization is a hybrid: while the surplus cushion exceeds the minimum needed to immunize, the manager can pursue active strategies; if performance erodes the cushion to the trigger, the portfolio is immunized to lock in the required outcome. Choice B describes pure immunization with no active latitude. Choice C abandons the funding objective that the strategy is built to protect.",
  },
  {
    id: "cfa3-fi-q8", examSlug: "cfa-l3", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "When immunizing MULTIPLE liabilities, the asset portfolio should have a convexity that is:",
    choices: ["As large as possible", "Greater than the liabilities' convexity, but minimized (just enough), with matching duration and PV", "Exactly zero"],
    answerIndex: 1,
    explanation: "For multiple liabilities, set asset duration equal to liability duration and asset convexity slightly greater than the liabilities' (so assets bracket the cash-flow dates), but minimize that convexity to reduce exposure to non-parallel curve shifts; PV of assets must at least equal PV of liabilities. Choice A maximizes structural risk. Choice C (zero convexity) isn't achievable or desirable for a coupon-bond portfolio.",
  },
  {
    id: "cfa3-fi-q9", examSlug: "cfa-l3", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "Relative to a duration-matched bullet, a barbell portfolio generally has:",
    choices: ["Lower convexity, benefiting from a steepening curve", "Higher convexity, benefiting from increased rate volatility and curve flattening", "Identical behavior in all scenarios"],
    answerIndex: 1,
    explanation: "A barbell concentrates in short and long maturities, giving it more convexity than a duration-matched bullet, so it outperforms when rates are volatile or the curve flattens. Choice A reverses the convexity ranking. Choice C is wrong — bullets and barbells with the same duration behave differently once the yield curve moves in a non-parallel way.",
  },

  // ---- Private Wealth ----
  {
    id: "cfa3-pw-q10", examSlug: "cfa-l3", topicId: "pm-private", topicName: "Private Wealth", difficulty: 3,
    stem: "A Monte Carlo simulation is valuable in retirement planning because it:",
    choices: ["Guarantees a single precise outcome", "Models thousands of return paths to estimate the probability a plan succeeds, capturing sequence-of-returns risk", "Assumes the same return every year"],
    answerIndex: 1,
    explanation: "Monte Carlo runs many randomized return sequences to produce a distribution of outcomes and a probability of success, revealing sequence-of-returns risk that a single straight-line projection hides. Choice A overstates it — the output is a probability distribution, not a guarantee. Choice C describes a deterministic projection, the very simplification Monte Carlo is meant to improve upon.",
  },
];

export const cfaL3Content: ExamContent = {
  examSlug: "cfa-l3",
  chapters,
  questions,
};
