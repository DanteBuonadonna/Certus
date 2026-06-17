// ============================================================
// Certus — CFA Level III textbook-depth content (cfa-l3-deep.ts)
// Genuine ~18–22 min college-level readings scaled to L3 difficulty,
// each with worked examples, formulas, tables, and aligned questions.
// Appended to the lighter cfa-l3.ts set via cfaL3Content.
// ============================================================

import { Chapter, Question } from "./types";

export const deepChaptersL3: Chapter[] = [
  {
    id: "cfa-l3-assetallocation",
    examSlug: "cfa-l3",
    topicId: "pm-asset",
    topicName: "Asset Allocation",
    title: "Asset Allocation: Frameworks, Mean–Variance Optimization, and Risk Budgeting",
    readingMinutes: 88,
    summary:
      "The decision that drives most of a portfolio's risk and return — the economic balance sheet, the three allocation approaches (asset-only, liability-relative, goals-based), mean–variance optimization and its well-known flaws and fixes, risk budgeting, and disciplined rebalancing.",
    intro:
      "Asset allocation — how a portfolio is split across asset classes — explains the large majority of the variation in returns over time and is the single most consequential investment decision. Level III treats it as a structured choice problem: first frame the investor's full ECONOMIC BALANCE SHEET (not just financial assets), then choose among three approaches (asset-only, liability-relative, or goals-based), and finally build the allocation, most classically with MEAN–VARIANCE OPTIMIZATION — whose strengths and notorious weaknesses you must know cold. We finish with risk budgeting and rebalancing. The constructed-response format rewards knowing WHICH framework fits a given investor and WHY mean–variance outputs must be treated with caution.",
    sections: [
      {
        heading: "1. Why asset allocation dominates",
        blocks: [
          { kind: "p", text: "Empirically, the choice of asset-class weights — the STRATEGIC ASSET ALLOCATION (SAA) — accounts for most of the variability of a diversified portfolio's returns through time and is far more important than security selection or market timing for the typical investor. The SAA is the long-run policy mix derived from the investor's objectives and constraints; TACTICAL ASSET ALLOCATION (TAA) makes short-term deviations to exploit perceived mispricings; and DYNAMIC strategies adjust the mix as conditions or the investor's situation evolve. The SAA is the anchor, and the rest of the chapter is about how to set it well." },
        ],
      },
      {
        heading: "2. The economic balance sheet",
        blocks: [
          { kind: "p", text: "Good allocation starts from the ECONOMIC BALANCE SHEET, which extends beyond marketable financial assets to ALL of an investor's economic resources and obligations. On the asset side that includes financial assets PLUS 'extended-portfolio' assets such as HUMAN CAPITAL (the present value of future earnings) and, for institutions, the present value of future contributions or sponsor support. On the liability side it includes explicit debts PLUS implied liabilities like future consumption needs and bequest goals. Framing the problem this way changes the answer: a young investor with large, bond-like human capital can hold more equities in the financial portfolio; an investor with equity-like human capital (a commission salesperson) should hold less." },
          { kind: "callout", label: "Human capital shapes the mix", body: "Human capital that is stable and bond-like (a tenured professor) argues for MORE financial-portfolio equity; human capital that is volatile and equity-like (a stockbroker) argues for LESS. Asset allocation balances the total economic balance sheet, not just the brokerage statement." },
        ],
      },
      {
        heading: "3. Three approaches to allocation",
        blocks: [
          { kind: "p", text: "There are three principal approaches. ASSET-ONLY allocation ignores liabilities and optimizes the asset portfolio in isolation (mean–variance optimization is the classic example) — appropriate when there are no well-defined liabilities. LIABILITY-RELATIVE (liability-driven) allocation explicitly models the liabilities and chooses assets to fund or hedge them, optimizing the SURPLUS (assets minus liabilities) — appropriate for pensions, insurers, and banks. GOALS-BASED allocation, used mostly for individuals, divides wealth into sub-portfolios mapped to distinct goals, each with its own time horizon and required probability of success, then aggregates them. Each approach answers the same question — what mix? — but with a different definition of success." },
          { kind: "table", table: { caption: "Choosing an allocation approach", headers: ["Approach", "Objective", "Best suited to"], rows: [["Asset-only", "Maximize risk-adjusted return of assets", "Investors without defined liabilities"], ["Liability-relative", "Fund/hedge liabilities; optimize surplus", "Pensions, insurers, banks"], ["Goals-based", "Meet each goal at a required success probability", "Individuals with multiple goals"]] } },
        ],
      },
      {
        heading: "4. Mean–variance optimization",
        blocks: [
          { kind: "p", text: "MEAN–VARIANCE OPTIMIZATION (MVO) is the foundational asset-only tool: given expected returns, volatilities, and correlations, it traces the EFFICIENT FRONTIER (portfolios with the highest expected return for each level of risk) and selects the mix that maximizes the investor's utility. The standard utility function penalizes variance according to the investor's risk aversion, so the chosen portfolio trades expected return against risk at the investor's own rate." },
          { kind: "formula", formula: { label: "Mean–variance utility", expr: "U = E(R) − ½ × λ × σ²", note: "λ is the investor's risk-aversion coefficient; σ² is the portfolio variance. Higher λ penalizes risk more, pushing toward a lower-risk efficient portfolio." } },
          { kind: "example", example: { title: "Utility-adjusted return", prompt: "A portfolio has an expected return of 8% and standard deviation of 12%. The investor's risk-aversion coefficient is 4. What is its certainty-equivalent (utility) value?", steps: ["σ² = 0.12² = 0.0144.", "U = E(R) − ½λσ² = 0.08 − 0.5 × 4 × 0.0144.", "= 0.08 − 0.0288 = 0.0512."], answer: "U ≈ 5.12%. The investor is indifferent between this risky portfolio and a certain 5.12% return. A more risk-averse investor (higher λ) would assign it a lower utility and prefer a safer mix." } },
          { kind: "p", text: "MVO's weaknesses are heavily tested. It is an 'ERROR MAXIMIZER': outputs are extremely SENSITIVE to the input estimates (especially expected returns), so small estimation errors produce wildly different, often highly CONCENTRATED allocations. It is SINGLE-PERIOD (ignoring multi-period rebalancing and path dependence), it ignores liabilities, and it assumes returns are adequately described by mean and variance (ignoring skew/fat tails). Practitioners fix these with: REVERSE OPTIMIZATION (back out implied returns from market weights), the BLACK–LITTERMAN model (blend market-implied returns with the investor's views for stable, diversified outputs), RESAMPLING (average frontiers across simulated inputs), adding CONSTRAINTS, and MONTE CARLO simulation for multi-period and non-normal analysis." },
        ],
      },
      {
        heading: "5. Risk budgeting and rebalancing",
        blocks: [
          { kind: "p", text: "RISK BUDGETING allocates the portfolio's total risk across positions or factors, focusing on each holding's MARGINAL CONTRIBUTION TO RISK rather than just its capital weight; an optimal risk budget equalizes the ratio of marginal return to marginal risk across positions. REBALANCING keeps the portfolio near its strategic targets as markets move drift it away. The two common disciplines are CALENDAR rebalancing (fixed dates) and PERCENTAGE-RANGE (corridor) rebalancing, which trades only when a weight breaches a tolerance band. Rebalancing back to target is inherently CONTRARIAN — selling what rose, buying what fell — which is effectively a short-volatility strategy that earns a 'rebalancing return' in mean-reverting markets but can underperform in strong trends." },
          { kind: "p", text: "Corridor width should reflect transaction costs (higher costs → wider bands), volatility, and correlations. The overarching message of the chapter: asset allocation is the dominant decision, so frame the whole economic balance sheet, pick the approach that matches the investor's definition of success, build the mix with MVO but treat its outputs skeptically (use Black–Litterman, constraints, and simulation), and maintain it with a disciplined, cost-aware rebalancing rule." },
        ],
      },
    ],
    keyTerms: [
      { term: "Strategic asset allocation (SAA)", def: "The long-run policy mix of asset classes; the dominant driver of return variability." },
      { term: "Tactical asset allocation (TAA)", def: "Short-term deviations from the SAA to exploit perceived mispricings." },
      { term: "Economic balance sheet", def: "All economic resources (incl. human capital) and obligations (incl. future consumption), not just financial assets." },
      { term: "Human capital", def: "Present value of future earnings; bond-like human capital supports more financial-portfolio equity." },
      { term: "Asset-only allocation", def: "Optimizes the asset portfolio in isolation, ignoring liabilities (e.g., MVO)." },
      { term: "Liability-relative allocation", def: "Models liabilities and optimizes the surplus; for pensions, insurers, banks." },
      { term: "Goals-based allocation", def: "Sub-portfolios mapped to goals, each with a horizon and required success probability; for individuals." },
      { term: "Mean–variance optimization (MVO)", def: "Traces the efficient frontier and maximizes utility U = E(R) − ½λσ²." },
      { term: "Error maximization", def: "MVO's extreme sensitivity to input estimates, producing concentrated, unstable allocations." },
      { term: "Black–Litterman model", def: "Blends market-implied returns with investor views for stable, diversified allocations." },
      { term: "Resampling / reverse optimization", def: "Techniques to stabilize MVO inputs and outputs." },
      { term: "Risk budgeting", def: "Allocating total risk by marginal contribution to risk rather than capital weight." },
      { term: "Calendar vs percentage-range rebalancing", def: "Rebalance on fixed dates vs when a weight breaches a corridor; contrarian/short-volatility." },
    ],
    takeaways: [
      "Strategic asset allocation explains most of a portfolio's return variability — it is the dominant investment decision.",
      "Frame the full economic balance sheet (including human capital and future consumption); bond-like human capital supports more financial-portfolio equity.",
      "Three approaches: asset-only (no liabilities), liability-relative (optimize surplus; pensions/insurers), and goals-based (sub-portfolios per goal; individuals).",
      "MVO maximizes U = E(R) − ½λσ² along the efficient frontier, but is an 'error maximizer' — hypersensitive to inputs, concentrated, single-period, and liability-blind.",
      "Stabilize MVO with reverse optimization, Black–Litterman, resampling, constraints, and Monte Carlo simulation.",
      "Risk budgeting allocates risk by marginal contribution; rebalancing (calendar or corridor) is contrarian and should be calibrated to transaction costs and volatility.",
    ],
  },

  {
    id: "cfa-l3-behavioral",
    examSlug: "cfa-l3",
    topicId: "behavioral",
    topicName: "Behavioral Finance",
    title: "Behavioral Finance: Biases, Decision-Making, and Market Behavior",
    readingMinutes: 84,
    summary:
      "How real investors deviate from the rational ideal — the contrast with traditional finance, the distinction between correctable cognitive errors and stubborn emotional biases, the specific biases and how to manage them, and behavioral explanations for portfolio mistakes and market anomalies.",
    intro:
      "Traditional finance assumes a rational, utility-maximizing investor who updates beliefs correctly and is consistently risk-averse. Behavioral finance documents that real people systematically depart from this ideal, and Level III asks you to identify SPECIFIC biases, classify them as cognitive errors or emotional biases (which determines how to manage them), and apply them to adviser–client relationships, portfolio construction, and market behavior. The practical payoff is large: knowing whether a bias should be MODERATED (corrected) or ADAPTED TO (worked around) is the difference between fighting a client's nature and designing a portfolio they can actually stick with. Exam questions reward precise bias identification and the correct management prescription.",
    sections: [
      {
        heading: "1. Traditional vs behavioral finance",
        blocks: [
          { kind: "p", text: "Traditional finance rests on the RATIONAL ECONOMIC MAN: investors maximize expected utility, update probabilities by Bayes' rule, and are risk-averse with consistent preferences, producing efficient markets. Behavioral finance counters that decision-makers exhibit BOUNDED RATIONALITY (they 'satisfice' rather than optimize given limited cognition) and that their choices are better described by PROSPECT THEORY: people evaluate outcomes as gains and losses relative to a reference point, feel LOSS AVERSION (losses hurt roughly twice as much as equivalent gains please), are risk-averse in gains but risk-SEEKING in losses, and overweight small probabilities. Crucially, FRAMING — how a choice is presented — alters decisions, violating the rational-agent assumption that preferences are independent of presentation." },
        ],
      },
      {
        heading: "2. Cognitive errors vs emotional biases",
        blocks: [
          { kind: "p", text: "The central organizing distinction: COGNITIVE ERRORS stem from faulty reasoning, memory, or information processing, and because they're 'thinking' mistakes they can largely be CORRECTED with education, information, and advice. EMOTIONAL BIASES arise from feelings and impulses; they're harder to correct, so advisers typically ADAPT the portfolio to them rather than try to eliminate them. Getting this classification right drives the management prescription, which is exactly what constructed-response questions test." },
          { kind: "table", table: { caption: "The two families of bias", headers: ["Type", "Source", "Examples", "Management"], rows: [["Cognitive errors", "Faulty reasoning / processing", "Conservatism, confirmation, representativeness, anchoring, mental accounting, availability, hindsight, framing", "Moderate (educate, give data)"], ["Emotional biases", "Feelings / impulses", "Loss aversion, overconfidence, self-control, status quo, endowment, regret aversion", "Adapt (design around them)"]] } },
        ],
      },
      {
        heading: "3. Key cognitive errors",
        blocks: [
          { kind: "p", text: "Cognitive errors split into BELIEF-PERSEVERANCE errors (clinging to prior views) and PROCESSING errors (mishandling information). Belief perseverance includes CONSERVATISM (underweighting new information), CONFIRMATION (seeking only confirming evidence), REPRESENTATIVENESS (judging by stereotypes/recent patterns, e.g., assuming a good company is a good stock), ILLUSION OF CONTROL (overestimating one's influence), and HINDSIGHT (seeing past events as having been predictable). Processing errors include ANCHORING AND ADJUSTMENT (over-relying on an initial figure), MENTAL ACCOUNTING (treating money differently by arbitrary category), AVAILABILITY (overweighting easily recalled events), and FRAMING (being swayed by presentation). All are best managed by disciplined process, data, and structured decision rules." },
        ],
      },
      {
        heading: "4. Key emotional biases",
        blocks: [
          { kind: "p", text: "Emotional biases include LOSS AVERSION (feeling losses more than gains, which drives the DISPOSITION EFFECT — holding losers too long and selling winners too soon), OVERCONFIDENCE (overestimating one's knowledge or precision, leading to excessive trading and under-diversification), SELF-CONTROL bias (favoring short-term gratification over long-term goals, e.g., under-saving), STATUS-QUO bias (inertia, leaving allocations unchanged), ENDOWMENT bias (overvaluing what one already owns, e.g., inherited stock), and REGRET-AVERSION bias (avoiding decisions for fear of a bad outcome, producing excessive conservatism or herding). Because these are rooted in emotion, advisers usually ADAPT — for example, accommodating a self-control-biased client with automatic savings rather than lecturing them." },
        ],
      },
      {
        heading: "5. Effects on portfolios and markets",
        blocks: [
          { kind: "p", text: "At the PORTFOLIO level, these biases produce recognizable mistakes: under-diversification and excessive trading (overconfidence), HOME BIAS (familiarity), holding employer stock (endowment/familiarity), the disposition effect (loss aversion), and inertia (status quo). BEHAVIORAL PORTFOLIO THEORY captures this with a layered 'pyramid' of mental-accounting buckets, each tied to a goal with its own risk attitude — the behavioral cousin of goals-based allocation. In the ADVISER–CLIENT relationship, diagnosing the client's dominant biases improves communication, sets realistic expectations, and yields a policy the client will adhere to through volatility." },
          { kind: "p", text: "At the MARKET level, behavioral effects help explain documented ANOMALIES: MOMENTUM (underreaction then herding), the VALUE premium (overextrapolation of bad news), BUBBLES and CRASHES (overconfidence, herding, and regret), and excess volatility relative to fundamentals. Whether these reflect true inefficiency or rational risk premia is debated, but the behavioral lens is a powerful description of how prices can deviate from fundamental value. The chapter's throughline: classify the bias (cognitive vs emotional), then prescribe — MODERATE cognitive errors with information and discipline; ADAPT to emotional biases by designing portfolios and processes the investor can live with." },
        ],
      },
    ],
    keyTerms: [
      { term: "Rational economic man", def: "Traditional-finance ideal: utility-maximizing, Bayesian-updating, consistently risk-averse." },
      { term: "Bounded rationality", def: "Investors 'satisfice' within cognitive limits rather than fully optimize." },
      { term: "Prospect theory", def: "Outcomes judged as gains/losses vs a reference point; loss aversion; risk-seeking in losses." },
      { term: "Loss aversion", def: "Losses are felt roughly twice as strongly as equivalent gains; drives the disposition effect." },
      { term: "Cognitive errors", def: "Reasoning/processing mistakes; correctable by education and data (moderate)." },
      { term: "Emotional biases", def: "Feeling-driven biases; hard to correct, so adapt the portfolio around them." },
      { term: "Conservatism / confirmation / representativeness", def: "Belief-perseverance cognitive errors (under-update, seek confirming evidence, judge by stereotype)." },
      { term: "Anchoring, mental accounting, availability, framing", def: "Information-processing cognitive errors." },
      { term: "Overconfidence", def: "Overestimating knowledge/precision; causes excessive trading and under-diversification." },
      { term: "Self-control / status-quo / endowment / regret aversion", def: "Emotional biases producing under-saving, inertia, holding owned assets, and herding/conservatism." },
      { term: "Disposition effect", def: "Selling winners too soon and holding losers too long (loss aversion)." },
      { term: "Behavioral portfolio theory", def: "A layered pyramid of mental-accounting buckets, each tied to a goal and risk attitude." },
      { term: "Home bias", def: "Overweighting domestic/familiar securities." },
    ],
    takeaways: [
      "Traditional finance assumes a rational utility-maximizer; behavioral finance documents bounded rationality and prospect-theory behavior (loss aversion, reference dependence, framing).",
      "The key classification: cognitive errors (faulty processing) can be MODERATED with information and discipline; emotional biases (feeling-driven) are usually ADAPTED to.",
      "Cognitive errors include conservatism, confirmation, representativeness, anchoring, mental accounting, availability, hindsight, and framing.",
      "Emotional biases include loss aversion (disposition effect), overconfidence (overtrading), self-control, status-quo, endowment, and regret aversion.",
      "Biases cause under-diversification, overtrading, home bias, and inertia; behavioral portfolio theory layers mental-accounting buckets by goal.",
      "Behavioral effects help explain market anomalies — momentum, value, bubbles, and excess volatility — though the efficiency debate continues.",
    ],
  },

  {
    id: "cfa-l3-cme",
    examSlug: "cfa-l3",
    topicId: "cme",
    topicName: "Capital Market Expectations",
    title: "Capital Market Expectations: Forecasting Returns Across Asset Classes",
    readingMinutes: 86,
    summary:
      "Building the risk and return inputs that drive strategic asset allocation — the pitfalls in the forecasting process, the economic and business-cycle analysis behind expectations, and the core models: the building-block approach for bonds, the Grinold–Kroner model for equities, and Singer–Terhaar for risk premiums.",
    intro:
      "Strategic asset allocation is only as good as its inputs, and CAPITAL MARKET EXPECTATIONS (CME) are those inputs: the forecasted returns, volatilities, and correlations for each asset class. Level III treats CME as a disciplined process that is riddled with traps — bad data, biased estimates, regime changes, and the analyst's own psychology — and then provides concrete forecasting tools. You must know the PITFALLS (because exam questions ask you to spot them), the BUSINESS-CYCLE logic linking the economy to asset returns, and the three workhorse models: the building-block approach for fixed income, the Grinold–Kroner decomposition for equities, and the Singer–Terhaar equilibrium approach for risk premiums.",
    sections: [
      {
        heading: "1. The forecasting process and its pitfalls",
        blocks: [
          { kind: "p", text: "Forecasting capital market returns is error-prone, and the curriculum catalogs the traps. DATA problems include transcription errors, index REBASING, and asynchronous data across markets. MEASUREMENT biases include SURVIVORSHIP bias (failed funds/firms drop out, flattering the record) and APPRAISAL/SMOOTHED data in illiquid assets (private real estate, private equity), which UNDERSTATES true volatility and correlation. HISTORICAL estimates are limited by regime changes and non-stationarity — the past may not represent the future. There's also the gap between EX ANTE (expected) and EX POST (realized) risk, and pervasive MODEL and INPUT uncertainty. Finally, the analyst's own PSYCHOLOGICAL biases — anchoring, status quo, confirmation, overconfidence, prudence, and availability — distort judgment-based forecasts." },
          { kind: "callout", label: "Smoothed data understates risk", body: "Appraisal-based returns on private real estate and private equity are smoothed, so reported volatility and correlations are artificially LOW. Un-smoothing (or using a higher assumed volatility) is needed before these assets enter an optimizer, or the allocation will overweight them." },
        ],
      },
      {
        heading: "2. Economic and business-cycle analysis",
        blocks: [
          { kind: "p", text: "Asset returns are tied to the BUSINESS CYCLE. In INITIAL RECOVERY and EARLY EXPANSION, risky assets (equities, credit) tend to perform well and yields are low or rising modestly; in LATE EXPANSION the economy runs hot, inflation pressure builds, and central banks tighten; in SLOWDOWN and CONTRACTION, defensive assets and high-grade bonds outperform as rates fall. INFLATION matters across assets: rising inflation generally hurts bonds (higher yields) and can pressure equities, while real assets offer some hedge. MONETARY and FISCAL policy set the rate environment — the TAYLOR RULE gives a benchmark policy rate — and the YIELD CURVE is a classic leading indicator: an INVERTED curve has historically signaled recession." },
          { kind: "formula", formula: { label: "Taylor rule (neutral policy rate benchmark)", expr: "Policy rate = r_neutral + π + 0.5(π − π_target) + 0.5(output gap)", note: "r_neutral is the neutral real rate, π current inflation. The rule raises rates when inflation is above target or output above potential." } },
        ],
      },
      {
        heading: "3. Forecasting fixed-income returns",
        blocks: [
          { kind: "p", text: "For a default-free bond held to maturity, the YIELD TO MATURITY is a good estimate of the expected return. More generally, the BUILDING-BLOCK approach assembles a bond's expected return from a real risk-free rate plus an inflation premium plus risk premiums for maturity (term), credit (default), and liquidity. The sum of the real rate and the inflation premium is the nominal risk-free rate; adding the term, credit, and liquidity premiums steps you up the risk ladder to the required return on a given bond." },
          { kind: "formula", formula: { label: "Building-block expected return (fixed income)", expr: "E(R) = Real risk-free rate + Inflation premium + Term premium + Credit premium + Liquidity premium", note: "Real rate + inflation premium = nominal risk-free rate; the remaining premiums compensate for maturity, default, and liquidity risk." } },
        ],
      },
      {
        heading: "4. Forecasting equity returns",
        blocks: [
          { kind: "p", text: "The GRINOLD–KRONER model decomposes the expected equity return into income, earnings growth, and repricing components. Income comes from the dividend yield plus the 'repurchase yield' (a negative change in shares outstanding adds to per-share return). Earnings growth is nominal (inflation plus real growth). Repricing is the expected percentage change in the P/E multiple (zero if valuations are assumed stable)." },
          { kind: "formula", formula: { label: "Grinold–Kroner model", expr: "E(R_e) = [Dividend yield − %ΔShares] + [Inflation + Real earnings growth] + %ΔP/E", note: "Income + repurchase yield, plus nominal earnings growth, plus the repricing (multiple-change) return." } },
          { kind: "example", example: { title: "Grinold–Kroner expected return", prompt: "Dividend yield 2.0%; net share count falling 1.0% per year (buybacks); expected inflation 2.0%; real earnings growth 3.0%; P/E expected to be stable. What is the expected equity return?", steps: ["Income + repurchase yield = 2.0% − (−1.0%) = 2.0% + 1.0% = 3.0%.", "Nominal earnings growth = inflation + real growth = 2.0% + 3.0% = 5.0%.", "Repricing return %ΔP/E = 0%.", "E(R_e) = 3.0% + 5.0% + 0% = 8.0%."], answer: "8.0%. Buybacks (a negative %ΔShares) ADD to the per-share return, and a stable P/E contributes nothing. If the P/E were expected to contract 1% per year, the estimate would fall to 7.0%." } },
          { kind: "p", text: "For RISK PREMIUMS, the SINGER–TERHAAR approach (an international CAPM) estimates an asset's risk premium under full market INTEGRATION and under full SEGMENTATION, then weights the two by the analyst's view of how integrated the market is. A fully integrated market prices risk globally (lower premium for a given asset because risk is shared); a segmented market prices it locally (higher premium). The blended premium, added to the risk-free rate, gives the expected return — a disciplined, equilibrium-based alternative to pure historical extrapolation." },
        ],
      },
      {
        heading: "5. Synthesis",
        blocks: [
          { kind: "p", text: "CME ties macro analysis to portfolio inputs through a few disciplined models, but always under a cloud of estimation error — which is why the pitfalls are tested as heavily as the formulas. The throughline: scrub the data (beware survivorship and smoothing), read the business cycle and policy stance (Taylor rule, yield-curve signal), and build forecasts with the right tool — building blocks or YTM for bonds, Grinold–Kroner for equities, and Singer–Terhaar for risk premiums — while guarding against your own behavioral biases. These expectations then flow directly into the asset-allocation optimizer, where, as we saw, the quality of the inputs dominates the quality of the output." },
        ],
      },
    ],
    keyTerms: [
      { term: "Capital market expectations (CME)", def: "Forecasted returns, volatilities, and correlations used as asset-allocation inputs." },
      { term: "Survivorship bias", def: "Failed funds/firms drop from the data, flattering the historical record." },
      { term: "Appraisal/smoothed data", def: "Illiquid-asset returns that understate true volatility and correlation." },
      { term: "Ex ante vs ex post risk", def: "Expected (forward) risk versus realized (historical) risk." },
      { term: "Business cycle and assets", def: "Risky assets favored in recovery/expansion; defensives and high-grade bonds in slowdown/contraction." },
      { term: "Taylor rule", def: "Benchmark policy rate = r_neutral + π + 0.5(π − target) + 0.5(output gap)." },
      { term: "Yield curve as indicator", def: "An inverted curve has historically signaled recession." },
      { term: "Building-block approach", def: "E(R) = real rate + inflation + term + credit + liquidity premiums." },
      { term: "Grinold–Kroner model", def: "E(R_e) = (DY − %ΔShares) + (inflation + real growth) + %ΔP/E." },
      { term: "Repurchase yield", def: "A negative change in shares outstanding that adds to per-share return." },
      { term: "Singer–Terhaar approach", def: "Blends fully integrated and fully segmented risk premiums by degree of integration." },
      { term: "Market integration vs segmentation", def: "Globally priced risk (lower premium) vs locally priced risk (higher premium)." },
    ],
    takeaways: [
      "CME are the return/risk/correlation inputs to asset allocation; their quality dominates the optimizer's output.",
      "Beware forecasting pitfalls: survivorship bias, smoothed (appraisal) data understating volatility, regime change, and the analyst's own psychological biases.",
      "Read the business cycle and policy: risky assets in recovery/expansion, defensives in slowdown; the Taylor rule benchmarks the policy rate; an inverted yield curve signals recession.",
      "Fixed income: YTM (held to maturity) or the building-block approach (real rate + inflation + term + credit + liquidity premiums).",
      "Equities: Grinold–Kroner — E(R_e) = (dividend yield − %ΔShares) + (inflation + real growth) + %ΔP/E; buybacks add to per-share return.",
      "Risk premiums: Singer–Terhaar blends fully integrated and fully segmented premiums by the market's degree of integration.",
    ],
  },

  {
    id: "cfa-l3-fipm",
    examSlug: "cfa-l3",
    topicId: "fixed",
    topicName: "Fixed-Income Portfolio Management",
    title: "Fixed-Income Portfolio Management: Liability-Driven Investing and Yield-Curve Strategies",
    readingMinutes: 88,
    summary:
      "Managing bond portfolios to fund liabilities or beat a benchmark — immunization of single and multiple liabilities, the role of duration, convexity and dispersion, benchmark/indexing choices, and active yield-curve strategies including bullets, barbells, ladders, and riding the curve.",
    intro:
      "Fixed-income portfolios serve two broad mandates: funding LIABILITIES (a pension's payments, an insurer's claims) or beating a BENCHMARK (a bond index). Level III develops both. The liability side is dominated by IMMUNIZATION — structuring assets so that a change in interest rates leaves the portfolio still able to meet its obligations — which requires precise control of duration, convexity, and cash-flow dispersion. The benchmark side spans passive indexing through active yield-curve and credit strategies. The exam rewards the exact immunization conditions and the ability to choose a yield-curve structure (bullet, barbell, ladder) for an expected curve move.",
    sections: [
      {
        heading: "1. Roles of fixed income and the LDI idea",
        blocks: [
          { kind: "p", text: "Fixed income provides diversification, reliable income, and — crucially for institutions — LIABILITY MATCHING. LIABILITY-DRIVEN INVESTING (LDI) starts from the obligations and builds an asset portfolio to fund them with controlled interest-rate risk. The simplest version is CASH-FLOW MATCHING (dedication): buy bonds whose coupons and principals exactly fund each liability date, eliminating reinvestment and price risk but at a high cost and with limited flexibility. The more flexible and common approach is IMMUNIZATION, which uses duration matching to protect against rate changes." },
        ],
      },
      {
        heading: "2. Immunizing a single liability",
        blocks: [
          { kind: "p", text: "To immunize a SINGLE future liability you balance two offsetting risks: PRICE risk (rates up → bond prices fall) and REINVESTMENT risk (rates up → coupons reinvest at higher rates). Setting the portfolio's MACAULAY DURATION equal to the liability's investment horizon makes these two effects cancel for a small, one-time parallel rate shift, locking in a return equal to the initial yield. The conditions: the present value of assets must at least equal the present value of the liability, the durations must match, and — to minimize STRUCTURAL RISK from non-parallel shifts — the portfolio's CONVEXITY (and cash-flow DISPERSION) should be kept as LOW as possible while still covering the liability." },
          { kind: "callout", label: "Why minimize dispersion?", body: "Duration matching protects against PARALLEL shifts. Against twists and butterflies (non-parallel moves), a portfolio whose cash flows are tightly clustered around the horizon (low dispersion/convexity) is safer. A barbell has high dispersion and more structural risk; a bullet near the horizon is the most robust single-liability immunizer." },
        ],
      },
      {
        heading: "3. Immunizing multiple liabilities",
        blocks: [
          { kind: "p", text: "For a STREAM of liabilities, duration matching generalizes to three conditions: (1) the present value of assets equals (or exceeds) the present value of the liabilities; (2) the BASIS-POINT VALUE (money duration) of the assets equals that of the liabilities — so equal-sized rate moves change both by the same dollar amount; and (3) the asset cash flows have a wider DISPERSION than the liabilities (and thus slightly higher convexity), but no more than necessary, so the asset portfolio 'brackets' the liabilities and stays matched as the curve moves. CONTINGENT IMMUNIZATION blends active and passive management: the manager invests actively as long as the portfolio's value stays above the level needed to lock in a minimum acceptable return, and switches to pure immunization if that safety net is threatened." },
          { kind: "formula", formula: { label: "BPV hedging (money-duration match)", expr: "BPV = Duration × 0.0001 × Market value     Number of hedging futures = (BPV_target − BPV_portfolio) ÷ BPV_futures", note: "Equalizing the basis-point value of assets and liabilities immunizes against equal-sized rate changes; futures or swaps adjust BPV efficiently." } },
        ],
      },
      {
        heading: "4. Managing against a benchmark",
        blocks: [
          { kind: "p", text: "When the mandate is a bond INDEX, the manager chooses along a passive-to-active spectrum. PURE INDEXING via full replication is impractical for broad bond indices (thousands of illiquid issues), so managers use STRATIFIED SAMPLING (matching the index's key risk exposures — duration, sector, quality, key-rate durations — with a manageable subset). ENHANCED INDEXING takes small active bets while keeping tracking error tight, and ACTIVE management takes larger duration, curve, sector, and credit positions. Risk is monitored with effective duration, KEY-RATE DURATIONS (sensitivity to specific points on the curve), SPREAD DURATION (sensitivity to credit-spread changes), and convexity; tracking error measures deviation from the benchmark." },
        ],
      },
      {
        heading: "5. Yield-curve strategies",
        blocks: [
          { kind: "p", text: "Active managers position for expected CURVE moves with three classic structures. A BULLET concentrates maturities near a single point; a BARBELL combines short and long maturities; a LADDER spreads maturities evenly (offering good diversification of reinvestment risk and convexity). For a given duration, a barbell has higher convexity than a bullet, so it outperforms when the curve makes large or non-parallel moves but costs a bit of yield. If you expect the curve to FLATTEN, favor the long end (or a barbell); if you expect it to STEEPEN, favor the short end. When the curve is upward-sloping and expected to stay STABLE, RIDING THE YIELD CURVE (rolldown) adds return: a bond 'rolls down' to lower yields as it ages, generating price appreciation on top of its coupon." },
          { kind: "example", example: { title: "Riding the yield curve", prompt: "The curve is upward-sloping: a 3-year bond yields 3.0% and a 2-year yields 2.5%. An investor with a 1-year horizon buys the 3-year bond. If the curve is unchanged in a year, why might the total return exceed 3.0%?", steps: ["After one year the bond becomes a 2-year bond.", "If the curve is unchanged, it is now priced to yield 2.5% (the 2-year rate) — a lower yield than its 3.0% coupon basis.", "A lower yield means a higher price: the bond 'rolls down' the curve, producing a capital gain.", "Total return = coupon income + rolldown price appreciation."], answer: "The bond captures both its yield AND the price gain from rolling down to the lower 2-year yield, so the holding-period return exceeds the 3.0% starting yield. Rolldown is profitable precisely when the upward-sloping curve stays stable; it reverses if rates rise enough to offset the roll." } },
          { kind: "p", text: "Leverage (via repo, futures, or swaps) can amplify these strategies by increasing duration exposure cheaply, raising both expected return and risk. The chapter's core: for liabilities, immunize — match duration/BPV, ensure PV coverage, and minimize dispersion/convexity to control structural risk (with contingent immunization for flexibility); for benchmarks, choose a point on the indexing-to-active spectrum and manage duration, key-rate, and spread exposures; and express curve views through bullets, barbells, ladders, and rolldown.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Liability-driven investing (LDI)", def: "Building the asset portfolio to fund liabilities with controlled rate risk." },
      { term: "Cash-flow matching (dedication)", def: "Bonds whose cash flows exactly fund each liability date; no reinvestment/price risk, but costly." },
      { term: "Immunization", def: "Matching duration to the liability horizon so price and reinvestment risk offset." },
      { term: "Single-liability immunization conditions", def: "PV assets ≥ PV liability, duration match, minimize convexity/dispersion." },
      { term: "Structural risk", def: "Risk from non-parallel curve shifts; reduced by low cash-flow dispersion." },
      { term: "Multiple-liability immunization", def: "PV match, BPV (money-duration) match, asset dispersion wider than liabilities." },
      { term: "Basis-point value (BPV)", def: "Dollar change in value per 1 bp rate move = duration × 0.0001 × market value." },
      { term: "Contingent immunization", def: "Active management until the value nears the level needed for a minimum return, then immunize." },
      { term: "Stratified sampling / enhanced indexing", def: "Match an index's key risk exposures with a subset; take small active bets." },
      { term: "Key-rate / spread duration", def: "Sensitivity to specific curve points / to credit-spread changes." },
      { term: "Bullet / barbell / ladder", def: "Maturities concentrated / split short-and-long / spread evenly; barbell has higher convexity." },
      { term: "Riding the yield curve (rolldown)", def: "On a stable upward-sloping curve, a bond rolls down to lower yields, adding price gains." },
    ],
    takeaways: [
      "Fixed income funds liabilities (LDI) or tracks a benchmark; cash-flow matching eliminates rate risk exactly but is costly, while immunization is the flexible standard.",
      "Single-liability immunization: set duration = liability horizon (price and reinvestment risk offset), ensure PV assets ≥ PV liability, and minimize convexity/dispersion to limit structural risk.",
      "Multiple liabilities: match PV and basis-point value, with asset cash-flow dispersion wider than the liabilities'; contingent immunization adds an active overlay with a safety net.",
      "For benchmark mandates, use stratified sampling or enhanced/active indexing, monitoring effective, key-rate, and spread durations and tracking error.",
      "Express curve views with bullets, barbells (higher convexity), and ladders; favor the long end if you expect flattening, the short end if steepening.",
      "On a stable, upward-sloping curve, riding the curve (rolldown) adds price appreciation to coupon income.",
    ],
  },

  {
    id: "cfa-l3-equitypm",
    examSlug: "cfa-l3",
    topicId: "pm-equity",
    topicName: "Equity Portfolio Management",
    title: "Equity Portfolio Management: Passive, Active, and the Active Share Framework",
    readingMinutes: 84,
    summary:
      "How equity mandates are built and managed — the role of equities in a portfolio, the passive-to-active spectrum, fundamental versus quantitative active approaches, and the active share / active risk framework that distinguishes genuine active management from closet indexing.",
    intro:
      "Equities are most portfolios' main engine of long-run growth, and Level III asks how to manage an equity allocation along the full spectrum from pure indexing to high-conviction active management. The chapter covers the ROLE of equities, how to implement a PASSIVE mandate efficiently, the two great traditions of ACTIVE management (fundamental/discretionary and quantitative/systematic), and — most importantly for the exam — the ACTIVE SHARE and ACTIVE RISK framework that reveals how a manager is really taking risk and exposes 'closet indexers' who charge active fees for near-benchmark portfolios.",
    sections: [
      {
        heading: "1. The role of equities and the passive–active choice",
        blocks: [
          { kind: "p", text: "Equities contribute CAPITAL APPRECIATION, dividend INCOME, a partial INFLATION hedge (companies can raise prices), and DIVERSIFICATION against other asset classes. The first decision is passive versus active. PASSIVE management seeks to track an index at low cost, justified by market efficiency and the zero-sum nature of active management before fees (and negative-sum after). ACTIVE management seeks to outperform, justified by the belief that skill or factor exposures can add value net of fees. Most large programs blend both — a passive core with active satellites — to control cost and tracking error while pursuing alpha where they have conviction." },
        ],
      },
      {
        heading: "2. Implementing a passive mandate",
        blocks: [
          { kind: "p", text: "Passive investing still involves choices. INDEX SELECTION matters (market coverage, weighting, reconstitution rules). Replication can be FULL (hold every constituent — feasible for liquid, concentrated indices), STRATIFIED SAMPLING (match the index's key dimensions — sector, size, style — with a subset), or OPTIMIZATION (minimize tracking error subject to constraints). Vehicles range from index mutual funds and ETFs (pooled) to separately managed accounts and derivatives. Managers also EQUITIZE CASH — using index futures to gain market exposure on cash balances so the portfolio isn't unintentionally underweight equities (cash drag)." },
        ],
      },
      {
        heading: "3. Active management approaches",
        blocks: [
          { kind: "p", text: "Active equity splits into two traditions. FUNDAMENTAL (discretionary) management relies on human judgment and deep analysis of individual companies — it's typically concentrated, lower-turnover, and capacity-constrained by the analysts' attention. QUANTITATIVE (systematic) management uses rules and models applied across a broad universe — it's diversified across many small bets, factor-driven, and scalable. Both can be BOTTOM-UP (security-by-security) or TOP-DOWN (starting from macro/sector views). STYLES include value, growth, GARP (growth at a reasonable price), income, and quality. Newer factor/SMART-BETA strategies sit between passive and active, systematically harvesting documented premiums (value, momentum, size, low volatility, quality) at lower cost than discretionary management." },
          { kind: "table", table: { caption: "Fundamental vs quantitative active management", headers: ["Dimension", "Fundamental", "Quantitative"], rows: [["Decisions", "Human judgment", "Rules/models"], ["Breadth", "Few concentrated bets", "Many small bets across a universe"], ["Turnover", "Generally lower", "Often higher"], ["Capacity", "Limited by analyst attention", "More scalable"]] } },
        ],
      },
      {
        heading: "4. Active share and active risk",
        blocks: [
          { kind: "p", text: "Two distinct measures describe how active a portfolio is. ACTIVE SHARE measures how much the portfolio's HOLDINGS differ from the benchmark's — the sum of the absolute differences in weights, divided by two — ranging from 0% (identical to the benchmark) to 100% (no overlap). ACTIVE RISK (tracking error) measures the volatility of the portfolio's RETURN difference from the benchmark. They're related but distinct: active share captures the SIZE of the off-benchmark bets, while active risk also depends on the CORRELATIONS and volatilities of those bets." },
          { kind: "formula", formula: { label: "Active share", expr: "Active share = ½ × Σ | w_portfolio,i − w_benchmark,i |", note: "Sum the absolute weight differences across all securities and halve. 0% = index hugger; 100% = entirely different holdings." } },
          { kind: "example", example: { title: "Computing active share", prompt: "A portfolio overweights Stock A by +10% versus the benchmark, underweights Stock B by −6%, and holds Stock C (not in the benchmark) at +4%, with all other positions matching the benchmark. What is its active share?", steps: ["Sum the absolute weight differences: |+10%| + |−6%| + |+4%| = 20%.", "Active share = ½ × 20% = 10%."], answer: "Active share = 10% — a modest deviation. The factor that determines whether this is closet indexing is the combination of active share AND active risk." } },
          { kind: "p", text: "Combining the two reveals the manager's style. LOW active share AND LOW active risk is a CLOSET INDEXER (charging active fees for benchmark-like returns — a red flag). HIGH active share with LOW active risk is a DIVERSIFIED STOCK PICKER (many idiosyncratic bets that wash out at the portfolio level). LOW active share with HIGH active risk indicates a FACTOR BET (concentrated systematic exposure). HIGH active share AND HIGH active risk is a CONCENTRATED stock picker. A manager can have high active share but low active risk if the off-benchmark bets are uncorrelated; concentrated factor tilts produce high active risk even with modest active share." },
        ],
      },
      {
        heading: "5. Long–short and synthesis",
        blocks: [
          { kind: "p", text: "Beyond long-only, equity managers use LONG–SHORT structures to separate the value of their views from market direction. MARKET-NEUTRAL portfolios hold offsetting long and short positions to strip out market beta and isolate stock selection. 130/30 (long-extension) strategies take 130% long funded by 30% short, keeping full market exposure while loosening the long-only constraint to act on negative views. These add flexibility but also leverage, shorting costs, and operational complexity. The chapter's core: decide passive versus active by cost and conviction; implement passive efficiently (replication choice, equitize cash); choose fundamental or quantitative active management; and diagnose any active manager with BOTH active share (size of bets) and active risk (volatility of the bet) — the pairing that exposes closet indexing and clarifies how alpha is being pursued." },
        ],
      },
    ],
    keyTerms: [
      { term: "Role of equities", def: "Capital appreciation, dividend income, partial inflation hedge, diversification." },
      { term: "Passive vs active", def: "Track an index at low cost vs seek outperformance net of fees." },
      { term: "Replication methods", def: "Full replication, stratified sampling, or optimization to track an index." },
      { term: "Equitizing cash", def: "Using index futures to gain market exposure on cash and avoid cash drag." },
      { term: "Fundamental management", def: "Judgment-based, concentrated, lower-turnover, capacity-constrained active management." },
      { term: "Quantitative management", def: "Rules/model-based, diversified across many small bets, scalable." },
      { term: "Smart beta / factor investing", def: "Systematic capture of factor premiums; between passive and active." },
      { term: "Active share", def: "½ Σ|w_p − w_b|; how much holdings differ from the benchmark (0–100%)." },
      { term: "Active risk (tracking error)", def: "Volatility of the portfolio's return difference from the benchmark." },
      { term: "Closet indexer", def: "Low active share AND low active risk while charging active fees — a red flag." },
      { term: "Active-share/active-risk matrix", def: "Classifies managers: closet indexer, diversified stock picker, factor bettor, concentrated picker." },
      { term: "Market-neutral / 130-30", def: "Long–short structures isolating selection or extending shorts while keeping market exposure." },
    ],
    takeaways: [
      "Equities provide growth, income, an inflation hedge, and diversification; the first decision is passive (low-cost tracking) versus active (outperformance net of fees), often blended core-satellite.",
      "Passive mandates still choose an index and a replication method (full, stratified sampling, optimization) and equitize cash to avoid cash drag.",
      "Active management is fundamental (judgment, concentrated, capacity-limited) or quantitative (model-driven, diversified, scalable); both can be bottom-up or top-down.",
      "Active share = ½ Σ|w_p − w_b| measures the SIZE of off-benchmark bets; active risk measures the VOLATILITY of the return difference — they are distinct.",
      "Combining them classifies managers: low/low = closet indexer (red flag), high active share/low active risk = diversified stock picker, low active share/high active risk = factor bettor, high/high = concentrated picker.",
      "Long–short structures (market-neutral, 130/30) isolate selection skill or extend short views, adding flexibility but also leverage and shorting costs.",
    ],
  },

  {
    id: "cfa-l3-derivrisk",
    examSlug: "cfa-l3",
    topicId: "pm-deriv",
    topicName: "Derivatives & Risk Management",
    title: "Managing Portfolio Risk with Derivatives",
    readingMinutes: 86,
    summary:
      "Using futures, swaps, and options to reshape a portfolio's exposures efficiently — adjusting equity beta and bond duration with futures, changing duration with interest-rate swaps, hedging currency, and constructing option strategies like protective puts and collars.",
    intro:
      "Derivatives let a manager change a portfolio's risk exposures quickly and cheaply WITHOUT trading the underlying securities — adjusting equity beta, bond duration, or currency exposure with a few contracts rather than wholesale buying and selling. Level III is intensely practical here: you compute the NUMBER OF CONTRACTS to move beta or duration to a target, use SWAPS to alter duration, and build OPTION strategies to shape the return distribution. The exam rewards the contract-count formulas and clear reasoning about what each instrument does to the exposure.",
    sections: [
      {
        heading: "1. Why use derivatives to manage risk",
        blocks: [
          { kind: "p", text: "Trading the underlying securities to change exposure is slow, costly, and tax-inefficient. Derivatives — futures, forwards, swaps, options — let a manager adjust exposures with low transaction cost, high liquidity, and minimal disruption to the underlying holdings. A pension can hedge equity risk before a known cash outflow; a bond manager can lengthen duration ahead of an expected rate fall; a global investor can strip out currency risk — all with overlays that leave the core portfolio intact. The cost is basis risk, margin/collateral management, and (for options) premium." },
        ],
      },
      {
        heading: "2. Adjusting equity beta with index futures",
        blocks: [
          { kind: "p", text: "To move a stock portfolio's beta toward a target, trade equity index futures. The number of contracts depends on the gap between target and current beta, the portfolio value, and the futures' beta and notional value. A NEGATIVE result means SELLING (shorting) futures to reduce beta; a positive result means buying to increase it. Setting the target beta to zero fully hedges the market exposure." },
          { kind: "formula", formula: { label: "Number of equity index futures", expr: "N_f = [ (β_target − β_portfolio) ÷ β_futures ] × ( Portfolio value ÷ Futures price × multiplier )", note: "Negative N_f = short futures (reduce beta); positive = long futures (raise beta). β_futures is often ≈ 1." } },
          { kind: "example", example: { title: "Hedging equity beta to zero", prompt: "A $50,000,000 equity portfolio has a beta of 1.1. Index futures have a beta of 1.0 and a contract value of $250,000. How many contracts are needed to fully hedge market risk (target beta 0)?", steps: ["N_f = [(0 − 1.1) ÷ 1.0] × ($50,000,000 ÷ $250,000).", "= (−1.1) × 200.", "= −220."], answer: "Short 220 index futures contracts. The negative sign means selling futures; this removes the market exposure (beta → 0), leaving only the portfolio's residual/selection risk. To instead set beta to 0.5, the count would be (0.5 − 1.1) × 200 = −120 contracts." } },
        ],
      },
      {
        heading: "3. Adjusting duration with futures and swaps",
        blocks: [
          { kind: "p", text: "For bonds, the analogous tool is the BASIS-POINT VALUE (BPV) approach: compute how many futures bring the portfolio's BPV to the target. To LENGTHEN duration (raise rate sensitivity ahead of expected rate cuts), BUY bond futures; to SHORTEN it, sell them. INTEREST-RATE SWAPS achieve the same with a longer-horizon overlay: entering a RECEIVE-FIXED, pay-floating swap ADDS duration (you now hold a fixed-rate-bond-like position), while a PAY-FIXED, receive-floating swap REDUCES duration (it behaves like shorting a fixed bond / holding a floater). Swaps are efficient for large, persistent duration changes; futures for shorter-term, liquid adjustments." },
          { kind: "formula", formula: { label: "Number of bond futures (BPV method)", expr: "N_f = (BPV_target − BPV_portfolio) ÷ BPV_futures", note: "BPV_futures ≈ BPV of the cheapest-to-deliver bond ÷ its conversion factor. Buy to lengthen duration, sell to shorten." } },
          { kind: "callout", label: "Swap duration direction", body: "RECEIVE-fixed swap → ADDS duration (acts like buying a fixed-rate bond). PAY-fixed swap → SUBTRACTS duration (acts like shorting a fixed-rate bond / holding a floater). Pick the leg by whether you want more or less rate sensitivity." },
        ],
      },
      {
        heading: "4. Currency and option strategies",
        blocks: [
          { kind: "p", text: "To manage CURRENCY exposure on foreign assets, sell the foreign currency FORWARD (or use futures) to lock in the conversion rate and remove FX risk — the foundation of currency hedging covered in depth in the currency-management reading. For shaping the RETURN DISTRIBUTION, options are the tool. A PROTECTIVE PUT (long asset + long put) buys downside insurance, capping losses while keeping upside, at the cost of the premium. A COVERED CALL (long asset + short call) earns premium income and gives up upside above the strike. A COLLAR combines them — buy a put, sell a call — to bound the outcome in a range, often at zero net premium ('costless collar'). Spreads and straddles express more targeted views on direction and volatility." },
          { kind: "p", text: "Pulling it together: derivatives reshape exposures without disturbing the underlying portfolio. Use index futures to set equity beta (N_f from the beta gap and notional), bond futures or swaps to set duration (BPV method; receive-fixed adds duration, pay-fixed subtracts), currency forwards to hedge FX, and option structures (protective put, covered call, collar) to sculpt the payoff. Master the two contract-count formulas and the swap-duration directions — they're the most computational, most testable part of L3 risk management." },
        ],
      },
    ],
    keyTerms: [
      { term: "Derivatives overlay", def: "Adjusting exposures with futures/swaps/options without trading the underlying holdings." },
      { term: "Equity beta adjustment", def: "N_f = [(β_target − β_p)/β_f] × (portfolio value / futures notional); short to reduce beta." },
      { term: "Full equity hedge", def: "Set target beta to zero by shorting index futures, leaving residual/selection risk." },
      { term: "BPV (basis-point value) method", def: "N_f = (BPV_target − BPV_p)/BPV_futures to set duration; buy to lengthen, sell to shorten." },
      { term: "Receive-fixed swap", def: "Adds duration; behaves like holding a fixed-rate bond." },
      { term: "Pay-fixed swap", def: "Subtracts duration; behaves like shorting a fixed-rate bond / holding a floater." },
      { term: "Currency hedge", def: "Selling the foreign currency forward/futures to lock the conversion rate." },
      { term: "Protective put", def: "Long asset + long put; downside insurance keeping upside, costs the premium." },
      { term: "Covered call", def: "Long asset + short call; premium income, gives up upside above the strike." },
      { term: "Collar", def: "Long put + short call around the asset; bounds outcomes, often near zero net premium." },
      { term: "Basis risk", def: "Risk that the hedge instrument and the exposure don't move together perfectly." },
    ],
    takeaways: [
      "Derivatives reshape exposures quickly and cheaply without trading the underlying portfolio, at the cost of basis risk, collateral management, and option premium.",
      "Adjust equity beta with index futures: N_f = [(β_target − β_p)/β_f] × (portfolio value ÷ futures notional); a negative count means short futures (target beta 0 = full hedge).",
      "Adjust bond duration with the BPV method: N_f = (BPV_target − BPV_p)/BPV_futures; buy futures to lengthen duration, sell to shorten.",
      "Interest-rate swaps change duration over longer horizons: receive-fixed ADDS duration; pay-fixed SUBTRACTS it.",
      "Hedge currency by selling the foreign currency forward to lock the conversion rate.",
      "Shape the payoff with options: protective put (downside insurance), covered call (income, capped upside), collar (bounded range, often zero net premium).",
    ],
  },

  {
    id: "cfa-l3-currency",
    examSlug: "cfa-l3",
    topicId: "currency",
    topicName: "Currency Management",
    title: "Currency Management for Global Portfolios",
    readingMinutes: 84,
    summary:
      "Managing the foreign-exchange exposure embedded in international portfolios — decomposing the domestic-currency return, choosing a strategic hedging policy along the passive-to-active spectrum, the tools and costs of hedging, roll yield, and cost-reducing option structures.",
    intro:
      "Any portfolio holding foreign assets carries two bets: the asset's performance in its local currency AND the movement of that currency against the investor's home currency. Level III currency management is about deciding how much of that FX exposure to keep and how to hedge the rest. You must decompose the DOMESTIC-CURRENCY RETURN, place the portfolio on the HEDGING SPECTRUM (from fully hedged to actively trading currencies), choose the right TOOLS (forwards dominate), and weigh the COSTS — including roll yield. The exam rewards the return decomposition and clear reasoning about when hedging adds or subtracts value.",
    sections: [
      {
        heading: "1. Decomposing the domestic-currency return",
        blocks: [
          { kind: "p", text: "The return an investor actually earns on a foreign asset — the DOMESTIC-CURRENCY RETURN — combines the FOREIGN-CURRENCY (local) asset return and the currency's movement. Because the currency gain applies to the grown asset value, the two compound, producing a small cross-term. This decomposition is the foundation of everything that follows: currency risk is a separate, additive source of both return and volatility on top of the asset itself." },
          { kind: "formula", formula: { label: "Domestic-currency return", expr: "R_DC = (1 + R_FC) × (1 + R_FX) − 1 ≈ R_FC + R_FX + (R_FC × R_FX)", note: "R_FC is the asset's return in its local currency; R_FX is the foreign currency's appreciation against the home currency." } },
          { kind: "example", example: { title: "Computing the domestic-currency return", prompt: "A U.S. investor holds a European stock that returns 5.0% in euros. Over the period the euro appreciates 3.0% against the dollar. What is the dollar (domestic-currency) return?", steps: ["R_DC = (1 + 0.05)(1 + 0.03) − 1.", "= 1.05 × 1.03 − 1 = 1.0815 − 1.", "= 0.0815."], answer: "8.15% in dollars — the 5% asset return plus 3% currency gain plus the 0.15% cross-term. Had the euro DEPRECIATED 3%, the dollar return would fall to (1.05)(0.97) − 1 = 1.85%, showing how currency can dominate the outcome." } },
        ],
      },
      {
        heading: "2. The strategic hedging decision",
        blocks: [
          { kind: "p", text: "How much currency exposure to keep is a STRATEGIC policy decision set in the IPS, along a spectrum. At one end, a PASSIVE full hedge eliminates currency risk and is rebalanced mechanically. Moving along: DISCRETIONARY hedging allows modest deviations from a benchmark hedge ratio; ACTIVE currency management treats currency as a return source in its own right; and an unhedged stance keeps full exposure. The choice depends on the investor's risk tolerance, the asset mix (bond portfolios are hurt more by currency volatility relative to their own low volatility, so they're hedged more than equities), the investment horizon, and views on whether currencies carry a risk premium. A common argument is that over LONG horizons currencies mean-revert toward fair value with little expected return, so hedging mainly reduces volatility — but hedging has costs, so the trade-off must be weighed." },
        ],
      },
      {
        heading: "3. Tools, costs, and roll yield",
        blocks: [
          { kind: "p", text: "FORWARD contracts are the dominant hedging tool — customizable, no upfront premium, and rolled forward as they expire (a 'rolling hedge'). Futures are exchange-traded but less flexible; currency SWAPS suit longer horizons; and OPTIONS provide asymmetric protection at the cost of a premium. The COSTS of hedging include bid–ask spreads, transaction costs, the administrative burden of rolling hedges, option premiums, and — importantly — ROLL YIELD. Roll yield arises because forward rates differ from spot by the interest-rate differential: hedging a currency that trades at a forward PREMIUM (selling it forward above spot) earns POSITIVE roll yield, while hedging one at a forward DISCOUNT costs roll yield. Since high-interest-rate currencies trade at forward discounts, hedging them is expensive — which is the flip side of the carry trade." },
          { kind: "callout", label: "Roll yield and carry", body: "Selling forward a currency that's at a forward PREMIUM adds return (positive roll); selling forward a currency at a DISCOUNT subtracts (negative roll). High-yield currencies sit at forward discounts, so hedging them is costly — the same economics that make the unhedged carry trade attractive." },
        ],
      },
      {
        heading: "4. Reducing hedging cost and emerging-market issues",
        blocks: [
          { kind: "p", text: "To cut the cost of option-based hedges, managers use structures that give up some protection or upside in exchange for lower premium: a RISK REVERSAL (currency collar — buy a protective option, sell another to finance it), a PUT SPREAD (buy a put, sell a further-out-of-the-money put), a SEAGULL (a put spread plus a sold call), or a PARTICIPATING FORWARD (full downside protection while keeping part of the upside). The MINIMUM-VARIANCE HEDGE RATIO — estimated by regressing the asset's domestic-currency return on the exchange-rate change — can hedge currency and asset-price correlation together; CROSS-HEDGING and PROXY hedging use a correlated currency when the exact one is costly or illiquid. EMERGING-MARKET currencies pose special challenges: higher trading costs, lower liquidity, fat-tailed and skewed returns, and contagion risk, so hedges there can be expensive and imperfect, and may break down exactly when needed most." },
          { kind: "p", text: "The chapter's logic: first measure the exposure (R_DC = (1+R_FC)(1+R_FX) − 1), then set a strategic hedging policy on the spectrum from full hedge to active management based on risk tolerance, asset mix, and horizon, then implement with forwards (watching roll yield) and cost-reducing option structures where appropriate, with extra caution in illiquid emerging-market currencies. Carry forward the return decomposition and the roll-yield direction — both are routinely tested." },
        ],
      },
    ],
    keyTerms: [
      { term: "Domestic-currency return", def: "R_DC = (1+R_FC)(1+R_FX) − 1; combines local asset return and currency movement." },
      { term: "Foreign-currency (local) return", def: "The asset's return in its own currency, before FX effects." },
      { term: "Hedging spectrum", def: "From passive full hedge → discretionary → active currency management → unhedged." },
      { term: "Asset-mix effect on hedging", def: "Bonds are hedged more than equities because currency volatility is large relative to bond volatility." },
      { term: "Forward contract (rolling hedge)", def: "The dominant hedging tool; no premium, customizable, rolled at expiry." },
      { term: "Roll yield", def: "Return from the forward-spot gap; positive when hedging a currency at a forward premium, negative at a discount." },
      { term: "Cost of hedging high-yield currencies", def: "They trade at forward discounts, so hedging them costs roll yield (the carry-trade flip side)." },
      { term: "Minimum-variance hedge ratio", def: "Regression-based ratio hedging asset and currency comovement together." },
      { term: "Cross-hedge / proxy hedge", def: "Hedging with a correlated currency when the exact one is costly or illiquid." },
      { term: "Risk reversal / put spread / seagull / participating forward", def: "Option structures that lower hedging premium by giving up some protection or upside." },
      { term: "Emerging-market currency risk", def: "Higher costs, low liquidity, fat tails, contagion; hedges can fail when most needed." },
    ],
    takeaways: [
      "A foreign asset's domestic-currency return combines the local return and the currency move: R_DC = (1+R_FC)(1+R_FX) − 1; currency is a separate source of return and risk.",
      "The hedge ratio is a strategic IPS decision on a spectrum from passive full hedge to active currency management, driven by risk tolerance, asset mix (bonds hedged more than equities), and horizon.",
      "Forwards are the dominant hedging tool (no premium, rolled at expiry); options, futures, and swaps serve specific needs.",
      "Roll yield matters: hedging a currency at a forward premium earns positive roll; hedging one at a discount (high-yield currencies) costs roll yield.",
      "Cost-reducing option structures (risk reversal, put spread, seagull, participating forward) trade some protection/upside for lower premium; minimum-variance, cross-, and proxy hedges handle correlation and illiquidity.",
      "Emerging-market currencies carry higher costs, fat tails, and contagion risk, so hedges there are costlier and less reliable.",
    ],
  },

  {
    id: "cfa-l3-privatewealth",
    examSlug: "cfa-l3",
    topicId: "pm-private",
    topicName: "Private Wealth Management",
    title: "Private Wealth: Risk Tolerance and the Individual IPS",
    readingMinutes: 86,
    summary:
      "The signature Level III skill — building an investment policy statement for an individual: assessing risk tolerance as ability plus willingness, computing a goal-funding required return, and specifying the constraints (time horizon, liquidity, taxes, legal, and unique circumstances).",
    intro:
      "Writing an INVESTMENT POLICY STATEMENT (IPS) for an individual is the most recognizable Level III skill and a perennial exam item. The IPS translates a client's life situation into an investment plan with two halves: OBJECTIVES (the required return and the risk tolerance) and CONSTRAINTS (time horizon, liquidity, taxes, legal/regulatory, and unique circumstances). The hardest judgments are assessing risk tolerance — separating the client's financial ABILITY to take risk from their psychological WILLINGNESS — and computing a required return that actually funds the client's goals. Master these and the IPS writes itself.",
    sections: [
      {
        heading: "1. The purpose and structure of the IPS",
        blocks: [
          { kind: "p", text: "The IPS is the governing document of the client relationship: it records the client's objectives and constraints, guides all investment decisions, sets a benchmark for evaluation, and protects both client and adviser by making the plan explicit and durable through market swings. Its structure is two objectives — RETURN and RISK — and a set of CONSTRAINTS, conventionally remembered as Time horizon, Liquidity, Taxes, Legal/regulatory, and Unique circumstances. The IPS should be reviewed periodically and whenever the client's circumstances change materially." },
        ],
      },
      {
        heading: "2. Risk tolerance: ability versus willingness",
        blocks: [
          { kind: "p", text: "Risk tolerance has two distinct components. ABILITY to take risk is objective and financial: it rises with greater wealth relative to needs, a longer time horizon, low liquidity needs, and goals that are flexible rather than critical. WILLINGNESS to take risk is subjective and psychological: it reflects the client's attitudes, experience, and comfort with volatility. When the two CONFLICT, the prudent default is to base the policy on the LOWER of the two and to EDUCATE the client about the mismatch — though an adviser should never simply override stated willingness. A high-willingness, low-ability client must be guided toward less risk than they want (ability is binding); a low-willingness, high-ability client may be educated but generally accommodated toward their comfort." },
          { kind: "table", table: { caption: "Assessing risk tolerance", headers: ["Component", "Nature", "Raised by"], rows: [["Ability", "Objective / financial", "More wealth vs needs, longer horizon, low liquidity needs, flexible goals"], ["Willingness", "Subjective / psychological", "Comfort with volatility, investing experience, stated attitudes"], ["If they conflict", "—", "Generally use the lower; educate the client about the gap"]] } },
        ],
      },
      {
        heading: "3. The required return",
        blocks: [
          { kind: "p", text: "The RETURN OBJECTIVE is built from what the client needs to fund their goals, not from a generic target. The cash-flow approach computes the return that spending requires: divide net annual spending by investable assets to get the real return needed, then gross up for inflation (and for taxes, if the return is to be stated after-tax or pre-tax). Distinguish the REQUIRED return (what the goals demand) from the DESIRED return (what the client would like); the portfolio must at least meet the required return at a risk level consistent with the client's tolerance." },
          { kind: "formula", formula: { label: "Goal-funding required return", expr: "Real return ≈ Net spending ÷ Investable assets       Nominal ≈ (1 + real)(1 + inflation) − 1", note: "Add inflation to preserve purchasing power; adjust for taxes if expressing a pre-tax or after-tax figure." } },
          { kind: "example", example: { title: "Computing a required return", prompt: "A retiree has $2,000,000 of investable assets and needs $90,000 per year (after tax) for living expenses, growing with inflation of 2.5%. What nominal required return preserves the portfolio's real value?", steps: ["Real return needed = $90,000 ÷ $2,000,000 = 4.5%.", "Add inflation to maintain purchasing power: (1.045)(1.025) − 1.", "= 1.071 − 1 = 0.0713."], answer: "About 7.1% nominal (≈ 4.5% real + 2.5% inflation, compounded). If part of the return is taxable, the figure must be grossed up further. A 4.5% real withdrawal is somewhat aggressive for a long retirement, so the adviser would stress-test it against the client's horizon and ability to take risk." } },
        ],
      },
      {
        heading: "4. The constraints",
        blocks: [
          { kind: "p", text: "TIME HORIZON shapes risk capacity and may be multi-stage (e.g., pre- and post-retirement) — longer horizons support more risk. LIQUIDITY needs are near-term cash requirements (an emergency reserve, a home purchase, education) that must be held in low-risk, accessible assets and removed from the risky pool. TAXES are central for individuals (unlike most institutions): the adviser considers the client's tax bracket, the location of assets across taxable and tax-advantaged accounts ('asset location'), and tax-aware strategies like loss harvesting and deferral. LEGAL/REGULATORY constraints include trust structures, jurisdiction rules, and prudent-investor obligations. UNIQUE CIRCUMSTANCES capture anything else material — concentrated stock positions, illiquid assets, ESG preferences, family obligations, or restrictions the client imposes." },
        ],
      },
      {
        heading: "5. Synthesis",
        blocks: [
          { kind: "p", text: "The individual IPS is where the whole Level III curriculum converges: human capital and the life cycle shape the time horizon and ability to take risk; behavioral biases color willingness (and how the plan should be framed for adherence); the required return links to asset allocation and capital market expectations; and constraints — especially taxes — determine implementation. The discipline that earns marks: assess ABILITY and WILLINGNESS separately and reconcile them (use the lower, educate the client), compute the required return from the client's actual cash needs (real, then grossed up for inflation and taxes), and specify each constraint concretely. Carry forward two habits — separate ability from willingness, and build the return bottom-up from spending — because every individual-IPS question tests them.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Investment policy statement (IPS)", def: "Governing document recording a client's objectives and constraints; guides and benchmarks decisions." },
      { term: "IPS structure", def: "Objectives (return, risk) plus constraints: time horizon, liquidity, taxes, legal/regulatory, unique circumstances." },
      { term: "Ability to take risk", def: "Objective/financial capacity: wealth vs needs, horizon, liquidity needs, goal flexibility." },
      { term: "Willingness to take risk", def: "Subjective/psychological comfort with volatility and loss." },
      { term: "Reconciling ability and willingness", def: "When they conflict, generally use the lower and educate the client; ability is binding." },
      { term: "Required vs desired return", def: "What goals demand vs what the client would like; the portfolio must meet the required return." },
      { term: "Goal-funding return", def: "Real return ≈ net spending ÷ investable assets; gross up for inflation and taxes." },
      { term: "Time horizon", def: "May be multi-stage; longer horizons support more risk." },
      { term: "Liquidity constraint", def: "Near-term cash needs held in low-risk assets, removed from the risky pool." },
      { term: "Tax constraints / asset location", def: "Bracket, taxable vs tax-advantaged account placement, loss harvesting, deferral." },
      { term: "Unique circumstances", def: "Concentrated positions, illiquid assets, ESG/family constraints, client-imposed restrictions." },
    ],
    takeaways: [
      "The individual IPS records two objectives (return, risk) and five constraints (time horizon, liquidity, taxes, legal/regulatory, unique circumstances) and governs the client relationship.",
      "Risk tolerance = ability (objective: wealth vs needs, horizon, liquidity, goal flexibility) plus willingness (subjective comfort); when they conflict, generally use the lower and educate the client.",
      "Build the required return from the client's actual cash needs: real return ≈ net spending ÷ investable assets, then gross up for inflation (and taxes).",
      "Distinguish required from desired return; the portfolio must meet the required return at a risk level consistent with tolerance.",
      "Taxes are central for individuals (unlike institutions): bracket, asset location, loss harvesting, and deferral all matter.",
      "Liquidity needs and unique circumstances (concentrated stock, illiquid assets, ESG, family obligations) must be specified concretely and removed from the risky pool where relevant.",
    ],
  },

  {
    id: "cfa-l3-institutional",
    examSlug: "cfa-l3",
    topicId: "institutional",
    topicName: "Institutional Investors",
    title: "Institutional Investors: Pensions, Endowments, Insurers, and Banks",
    readingMinutes: 86,
    summary:
      "How the major institutions invest — the liabilities, time horizons, and constraints of defined-benefit pensions, endowments and foundations, life and P&C insurers, banks, and sovereign wealth funds, and how those differences drive each one's asset allocation.",
    intro:
      "Institutions invest very differently from individuals and from each other, because their LIABILITIES, time horizons, regulation, and tax status differ so sharply. Level III asks you to characterize each major type — defined-benefit PENSIONS, ENDOWMENTS and FOUNDATIONS, life and property-casualty INSURERS, BANKS, and SOVEREIGN WEALTH FUNDS — and to explain how those features shape its return objective, risk tolerance, and asset allocation. The recurring analytical move is asset–liability management: the nature of the liabilities largely dictates the assets.",
    sections: [
      {
        heading: "1. Common features and defined-benefit pensions",
        blocks: [
          { kind: "p", text: "Institutions generally have a clear governance structure, an asset–liability framework, defined risk tolerance, and (often) tax-exempt status — but the specifics vary widely. A DEFINED-BENEFIT (DB) PENSION promises retirees a formula-based benefit, so the plan bears the investment and longevity risk and must fund a long stream of liabilities. Its risk tolerance depends on the plan's FUNDED STATUS (assets vs the obligation), the SPONSOR's financial strength and the correlation of sponsor fortunes with plan assets, and the WORKFORCE profile (a younger, mostly active workforce has a longer horizon and higher risk capacity than a mature, retiree-heavy plan). DB plans increasingly use LIABILITY-DRIVEN INVESTING to hedge the interest-rate sensitivity of their obligations. (Defined-CONTRIBUTION plans, by contrast, shift all investment risk to the employee.)" },
        ],
      },
      {
        heading: "2. Endowments and foundations",
        blocks: [
          { kind: "p", text: "ENDOWMENTS (supporting a university or similar) and FOUNDATIONS (grant-making) typically have PERPETUAL horizons and aim for INTERGENERATIONAL EQUITY — funding today's spending without eroding the real value available to future beneficiaries. This long horizon and low liquidity need underpin the 'ENDOWMENT MODEL': heavy allocations to equities and illiquid ALTERNATIVES (private equity, real assets, hedge funds) to capture the illiquidity premium. The return objective is built from the SPENDING RATE plus inflation plus costs, so the portfolio preserves purchasing power after distributions. Private foundations in some jurisdictions face a minimum payout requirement (often around 5%), which raises their required return and shapes liquidity needs." },
          { kind: "formula", formula: { label: "Endowment/foundation return objective", expr: "Required return ≈ Spending rate + Expected inflation + Investment & admin costs", note: "Built so distributions can be sustained while the real value of the corpus is preserved for future generations." } },
          { kind: "example", example: { title: "Endowment required return", prompt: "An endowment has a 5.0% spending rate, expects 2.5% inflation, and incurs 0.3% in costs. What approximate return preserves its real value?", steps: ["Additive approximation: 5.0% + 2.5% + 0.3% = 7.8%.", "Multiplicative (more precise): (1.05)(1.025)(1.003) − 1 ≈ 7.96%."], answer: "About 7.8–8.0%. This relatively high required return, combined with a perpetual horizon and minimal liquidity needs, is what justifies the endowment model's large allocation to equities and illiquid alternatives." } },
        ],
      },
      {
        heading: "3. Insurers and banks",
        blocks: [
          { kind: "p", text: "INSURANCE companies invest to fund future claims, and their two main types differ sharply. LIFE insurers have long-dated, relatively PREDICTABLE liabilities, so they emphasize asset–liability matching with long-duration, high-grade FIXED INCOME. PROPERTY & CASUALTY (P&C) insurers face shorter, lumpier, less predictable claims (catastrophes, lawsuits), so they hold shorter-duration, more LIQUID portfolios and need more capital flexibility. Both are heavily regulated and manage to a surplus. BANKS manage a securities portfolio as part of the whole balance sheet, prioritizing LIQUIDITY and controlling the interest-rate risk between assets and deposit/funding liabilities — their investment book is a tool for liquidity and rate management, not a standalone return engine." },
        ],
      },
      {
        heading: "4. Sovereign wealth funds and synthesis",
        blocks: [
          { kind: "p", text: "SOVEREIGN WEALTH FUNDS (SWFs) are state-owned pools with objectives that define their horizon and risk: STABILIZATION funds (buffer the budget against commodity-price swings — short horizon, conservative), SAVINGS funds (preserve wealth for future generations — long horizon, higher risk), RESERVE-investment funds (earn more on FX reserves), DEVELOPMENT funds (fund domestic projects), and PENSION-RESERVE funds (meet future pension outflows). The unifying lesson of the chapter: identify the LIABILITY or objective, the HORIZON, the LIQUIDITY needs, and the REGULATORY/TAX status, and the appropriate asset allocation follows. Pensions match long liabilities (LDI); endowments and savings SWFs exploit long horizons with equities and illiquid alternatives; life insurers match with long high-grade bonds while P&C and banks stay short and liquid. Carry forward the liability-driven logic and the endowment return objective (spending + inflation + costs) — both are heavily tested." },
        ],
      },
    ],
    keyTerms: [
      { term: "Asset–liability management (ALM)", def: "Choosing assets in light of the institution's liabilities; the core institutional move." },
      { term: "Defined-benefit pension", def: "Employer promises a formula benefit and bears investment/longevity risk; funds a long liability." },
      { term: "Funded status", def: "Plan assets minus the pension obligation; a key driver of DB risk tolerance." },
      { term: "Sponsor risk", def: "Sponsor financial strength and the correlation of its fortunes with plan assets." },
      { term: "Endowment / foundation", def: "Perpetual-horizon institutions seeking intergenerational equity; foundations face minimum payouts." },
      { term: "Endowment model", def: "Heavy equity and illiquid-alternative allocation to capture the illiquidity premium over a long horizon." },
      { term: "Endowment return objective", def: "≈ Spending rate + inflation + costs, preserving real value after distributions." },
      { term: "Life insurer", def: "Long, predictable liabilities; long-duration high-grade fixed income, ALM-focused." },
      { term: "P&C insurer", def: "Short, lumpy, unpredictable claims; shorter-duration, liquid portfolio." },
      { term: "Bank investment portfolio", def: "Managed for liquidity and interest-rate risk within the whole balance sheet." },
      { term: "Sovereign wealth fund types", def: "Stabilization, savings, reserve-investment, development, and pension-reserve funds." },
    ],
    takeaways: [
      "Institutions invest by asset–liability logic: the nature of the liabilities and the horizon largely dictate the assets.",
      "DB pensions fund long liabilities; risk tolerance depends on funded status, sponsor strength, and workforce age, and they increasingly use liability-driven investing.",
      "Endowments and foundations have perpetual horizons and seek intergenerational equity, justifying the endowment model (equities + illiquid alternatives); required return ≈ spending + inflation + costs.",
      "Life insurers match long, predictable liabilities with long high-grade bonds; P&C insurers and banks stay shorter and more liquid for unpredictable claims and liquidity needs.",
      "Sovereign wealth funds' horizon and risk follow their purpose (stabilization = short/conservative; savings = long/higher-risk).",
      "Across all types, identify liability/objective, horizon, liquidity, and regulatory/tax status — the allocation follows from those.",
    ],
  },

  {
    id: "cfa-l3-trading",
    examSlug: "cfa-l3",
    topicId: "trading",
    topicName: "Trading & Execution",
    title: "Trading, Execution, and Implementation Shortfall",
    readingMinutes: 78,
    summary:
      "Turning investment decisions into filled orders at low cost — explicit versus implicit trading costs, implementation shortfall and its components, execution benchmarks like VWAP and arrival price, and the trade-off between trading urgency and market impact.",
    intro:
      "A great investment idea can be ruined by poor execution. Level III trading focuses on measuring and minimizing the COST of converting decisions into positions — not just the visible commissions, but the larger hidden costs of bid–ask spreads, market impact, and missed trades. The central concept is IMPLEMENTATION SHORTFALL, the gap between the return on a 'paper' portfolio (executed instantly at the decision price) and the real portfolio. You must know its components, the execution benchmarks used to evaluate trading, and the fundamental trade-off between trading FAST (high market impact) and trading PATIENTLY (high opportunity cost).",
    sections: [
      {
        heading: "1. Trade costs: explicit and implicit",
        blocks: [
          { kind: "p", text: "Trading costs come in two families. EXPLICIT costs are directly observable: commissions, exchange and regulatory fees, and taxes. IMPLICIT costs are larger and hidden: the BID–ASK SPREAD (you buy at the ask, sell at the bid), MARKET IMPACT (your own order pushes the price against you, worse for large orders in illiquid names), DELAY/SLIPPAGE (the price moves while you wait to trade), and OPPORTUNITY COST (the foregone return on the part of the order you never managed to fill). Because implicit costs dominate for institutional-size orders, good execution is about managing market impact and timing, not just shopping for low commissions." },
        ],
      },
      {
        heading: "2. Implementation shortfall",
        blocks: [
          { kind: "p", text: "IMPLEMENTATION SHORTFALL measures total execution cost as the difference between the return on a hypothetical PAPER portfolio (filled instantly and costlessly at the price when the decision was made) and the return on the ACTUAL portfolio. It captures everything that erodes the idea: the price drift before execution, the market impact of trading, the explicit fees, and the opportunity cost of any unfilled shares. Decomposing it tells the manager WHERE cost arises — too much delay, too much impact from trading aggressively, or too much opportunity cost from trading too passively." },
          { kind: "formula", formula: { label: "Implementation shortfall (components)", expr: "Shortfall = Paper return − Actual return = Delay cost + Market-impact (execution) cost + Commissions/fees + Opportunity cost", note: "The opportunity cost is the missed return on shares that were never filled, valued at the decision price." } },
          { kind: "example", example: { title: "Reading implementation shortfall", prompt: "A manager decides to buy a stock at $50.00 (the decision price). The order partially fills at an average $50.30 plus $0.05/share commission, and the unfilled portion later would have profited as the stock rose to $51.00. Where does the shortfall come from?", steps: ["Execution/impact + delay cost: $50.30 − $50.00 = $0.30 per filled share moved against the manager.", "Explicit cost: $0.05 per share commission.", "Opportunity cost: on the UNFILLED shares, the $51.00 − $50.00 = $1.00 of foregone gain (valued at the decision price)."], answer: "Shortfall combines $0.30 of price slippage/impact and $0.05 of commission on filled shares, plus $1.00 of opportunity cost per unfilled share. The large opportunity cost signals the manager traded too passively — a classic trade-off, since trading faster would have raised market impact instead." } },
        ],
      },
      {
        heading: "3. Execution benchmarks and algorithms",
        blocks: [
          { kind: "p", text: "To evaluate execution, trades are compared to BENCHMARKS. The ARRIVAL PRICE (the price when the order reached the desk) underlies implementation-shortfall analysis. VWAP (volume-weighted average price) and TWAP (time-weighted average price) judge execution against the market's average over the trading window. Modern execution uses ALGORITHMS: SCHEDULED algorithms (VWAP, TWAP, percentage-of-volume) work the order steadily over time to minimize impact; LIQUIDITY-SEEKING algorithms hunt for available liquidity, including in DARK POOLS, to fill faster when liquidity appears. The right algorithm depends on order size, the stock's liquidity, and the manager's urgency." },
        ],
      },
      {
        heading: "4. The urgency–cost trade-off and synthesis",
        blocks: [
          { kind: "p", text: "Every trade balances two opposing costs. Demanding liquidity (market orders, aggressive algorithms) fills quickly but incurs high MARKET IMPACT and spread cost. Supplying liquidity (limit orders, patient algorithms) reduces impact but risks DELAY and OPPORTUNITY cost if the price runs away before the order fills. The optimal strategy depends on the TRADE'S MOTIVATION: an information-driven trade (acting on a time-sensitive signal) should be aggressive, because the alpha decays and opportunity cost is high; a liquidity-driven or rebalancing trade (no urgent information) should be patient to minimize impact. The chapter's core: minimize total cost — dominated by implicit costs — by matching execution urgency to the value and decay of the information behind the trade, measuring results against arrival price and implementation shortfall, and selecting the algorithm that fits the order's size, liquidity, and urgency.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Explicit costs", def: "Observable trading costs: commissions, fees, and taxes." },
      { term: "Implicit costs", def: "Hidden costs: bid–ask spread, market impact, delay/slippage, opportunity cost." },
      { term: "Market impact", def: "The adverse price move caused by one's own order; worse for large/illiquid trades." },
      { term: "Implementation shortfall", def: "Paper-portfolio return minus actual-portfolio return; total execution cost." },
      { term: "Opportunity cost", def: "Foregone return on unfilled shares, valued at the decision price." },
      { term: "Arrival price", def: "The price when the order reached the desk; the implementation-shortfall reference." },
      { term: "VWAP / TWAP", def: "Volume- and time-weighted average price benchmarks for execution quality." },
      { term: "Scheduled algorithms", def: "VWAP/TWAP/percentage-of-volume algos that work an order steadily to limit impact." },
      { term: "Liquidity-seeking algorithms", def: "Algos that hunt available liquidity (incl. dark pools) to fill faster." },
      { term: "Urgency–cost trade-off", def: "Trading fast raises market impact; trading slow raises opportunity cost." },
      { term: "Trade motivation", def: "Information-driven trades should be aggressive; liquidity/rebalancing trades patient." },
    ],
    takeaways: [
      "Trading costs are explicit (commissions, fees, taxes) and implicit (bid–ask spread, market impact, delay, opportunity cost); implicit costs dominate for institutional orders.",
      "Implementation shortfall = paper-portfolio return − actual-portfolio return, capturing delay, market impact, fees, and the opportunity cost of unfilled shares.",
      "Decomposing shortfall shows whether cost came from trading too aggressively (impact) or too passively (opportunity cost).",
      "Execution is benchmarked against arrival price, VWAP, and TWAP; algorithms are scheduled (limit impact) or liquidity-seeking (fill faster).",
      "The urgency–cost trade-off: demanding liquidity raises market impact; supplying liquidity raises opportunity cost.",
      "Match urgency to trade motivation — be aggressive on time-sensitive information trades, patient on liquidity/rebalancing trades.",
    ],
  },

  {
    id: "cfa-l3-performance",
    examSlug: "cfa-l3",
    topicId: "pm-perf",
    topicName: "Performance Evaluation",
    title: "Performance Evaluation: Measurement, Attribution, and Appraisal",
    readingMinutes: 84,
    summary:
      "Judging investment results in three steps — measuring return (time-weighted vs money-weighted), attributing it to its sources (the Brinson allocation and selection effects against a valid benchmark), and appraising skill with risk-adjusted ratios (Sharpe, Treynor, Jensen's alpha, and the information ratio).",
    intro:
      "Performance evaluation answers three questions: WHAT was the return, WHY did it happen, and was it SKILL or luck? Level III splits this into performance MEASUREMENT (computing return correctly), ATTRIBUTION (decomposing it into sources like asset allocation and security selection against a valid benchmark), and APPRAISAL (risk-adjusted ratios that separate skill from market exposure). The exam rewards knowing when to use time- versus money-weighted returns, the properties of a valid benchmark, the Brinson attribution effects, and how to compute and interpret the risk-adjusted measures.",
    sections: [
      {
        heading: "1. Measuring return: time- vs money-weighted",
        blocks: [
          { kind: "p", text: "Two return calculations serve different purposes. The TIME-WEIGHTED RATE OF RETURN (TWR) compounds period returns and is INSENSITIVE to the size and timing of client cash flows, so it isolates the MANAGER's decisions — it's the standard for evaluating and comparing managers. The MONEY-WEIGHTED RATE OF RETURN (MWR), an internal rate of return, reflects the actual dollar experience of the INVESTOR because it weights periods by the amount invested — appropriate when the manager controls the cash-flow timing or when measuring the client's realized outcome. When a large cash flow lands just before a strong (or weak) period, TWR and MWR can diverge sharply; use TWR to judge the manager, MWR to judge the investor's experience." },
        ],
      },
      {
        heading: "2. Benchmarks",
        blocks: [
          { kind: "p", text: "Attribution and appraisal are only as valid as the BENCHMARK. A valid benchmark should be specified in advance, appropriate to the manager's style, measurable, unambiguous, reflective of the manager's investment universe and current opinions, accountable (the manager accepts it), and INVESTABLE (one could simply hold it). A poor benchmark makes alpha meaningless. Benchmark choices include broad market indices, style indices, factor-model benchmarks, and custom 'normal portfolios' built from the manager's typical holdings." },
          { kind: "callout", label: "Why benchmark quality matters", body: "If the benchmark doesn't match the manager's style and opportunity set, measured 'alpha' just reflects style drift or a mismatched comparison, not skill. Attribution effects and the information ratio all depend on an appropriate, investable benchmark." },
        ],
      },
      {
        heading: "3. Attribution: the Brinson model",
        blocks: [
          { kind: "p", text: "Micro attribution decomposes a portfolio's active return (versus its benchmark) into the decisions that produced it. The BRINSON model splits it into the ALLOCATION effect (value added by over/underweighting sectors or asset classes relative to the benchmark), the SELECTION effect (value added by picking better-than-benchmark securities WITHIN each sector), and an INTERACTION effect (the combined result of allocation and selection together). A manager who adds value mainly through allocation is making good top-down calls; one who adds value through selection is a good stock picker — a distinction that informs how to use and evaluate them." },
          { kind: "formula", formula: { label: "Brinson attribution effects (per segment)", expr: "Allocation = (w_p − w_b) × (R_b,segment − R_b,total)     Selection = w_b × (R_p,segment − R_b,segment)", note: "Sum across segments; the interaction term (w_p − w_b)(R_p,segment − R_b,segment) captures the joint effect." } },
          { kind: "example", example: { title: "Allocation vs selection", prompt: "A manager overweights a sector that the benchmark shows outperforming the overall benchmark, and within that sector also picks stocks that beat the sector benchmark. Which effects are positive?", steps: ["Overweighting an outperforming sector → positive ALLOCATION effect.", "Holding stocks that beat their sector benchmark → positive SELECTION effect.", "Doing both in the overweighted sector → positive INTERACTION effect."], answer: "All three effects are positive. Attribution would credit the top-down sector call (allocation) and the bottom-up stock picks (selection) separately — exactly the insight a plan sponsor needs to understand the source of outperformance." } },
        ],
      },
      {
        heading: "4. Appraisal: risk-adjusted measures",
        blocks: [
          { kind: "p", text: "Appraisal asks whether the return justified the risk. The SHARPE RATIO divides excess return over the risk-free rate by TOTAL risk (standard deviation) — best for evaluating a whole portfolio. The TREYNOR RATIO divides excess return by SYSTEMATIC risk (beta) — appropriate when the portfolio is one part of a diversified whole. JENSEN'S ALPHA is the return above what the CAPM predicts for the portfolio's beta — a direct measure of value added. The INFORMATION RATIO divides active return by active risk (tracking error) — the key measure of active-management skill relative to a benchmark. Each isolates a different notion of risk-adjusted performance." },
          { kind: "formula", formula: { label: "Risk-adjusted performance measures", expr: "Sharpe = (R_p − R_f)/σ_p     Treynor = (R_p − R_f)/β_p     Jensen's α = R_p − [R_f + β_p(R_m − R_f)]     IR = (R_p − R_b)/Active risk", note: "Sharpe uses total risk; Treynor and Jensen use systematic risk (beta); the information ratio uses benchmark-relative active risk." } },
          { kind: "example", example: { title: "Sharpe and Treynor", prompt: "A portfolio returns 12% with a standard deviation of 18% and a beta of 1.2. The risk-free rate is 3%. Compute its Sharpe and Treynor ratios.", steps: ["Excess return = 12% − 3% = 9%.", "Sharpe = 9% ÷ 18% = 0.50.", "Treynor = 9% ÷ 1.2 = 7.5%."], answer: "Sharpe ratio = 0.50 (per unit of total risk); Treynor ratio = 7.5% (per unit of systematic risk). Use Sharpe to evaluate the portfolio standalone, and Treynor (or Jensen's alpha) when it's a component of a larger diversified portfolio." } },
        ],
      },
      {
        heading: "5. Synthesis",
        blocks: [
          { kind: "p", text: "Performance evaluation is a three-step discipline. MEASURE the return with the right method — time-weighted to judge the manager, money-weighted to judge the investor's experience. ATTRIBUTE it against a valid, investable benchmark, using the Brinson allocation/selection/interaction effects to find the sources of active return. APPRAISE it with the risk-adjusted measure that matches the question: Sharpe for total-risk evaluation, Treynor and Jensen's alpha for systematic-risk contexts, and the information ratio for benchmark-relative skill. Carry forward three facts: TWR removes cash-flow timing (use it for managers), the Brinson model separates allocation from selection, and the information ratio (active return ÷ active risk) is the headline measure of active skill.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Time-weighted return (TWR)", def: "Compounds period returns, insensitive to cash-flow timing; the manager-evaluation standard." },
      { term: "Money-weighted return (MWR)", def: "An IRR weighting periods by amount invested; reflects the investor's actual dollar experience." },
      { term: "Valid benchmark properties", def: "Specified in advance, appropriate, measurable, unambiguous, reflective, accountable, investable." },
      { term: "Normal portfolio", def: "A custom benchmark built from a manager's typical holdings/opportunity set." },
      { term: "Brinson attribution", def: "Decomposes active return into allocation, selection, and interaction effects." },
      { term: "Allocation effect", def: "Value from over/underweighting segments versus the benchmark." },
      { term: "Selection effect", def: "Value from picking better-than-benchmark securities within segments." },
      { term: "Sharpe ratio", def: "(R_p − R_f)/σ_p; excess return per unit of total risk." },
      { term: "Treynor ratio", def: "(R_p − R_f)/β_p; excess return per unit of systematic risk." },
      { term: "Jensen's alpha", def: "Return above the CAPM-predicted return for the portfolio's beta." },
      { term: "Information ratio", def: "Active return ÷ active risk; the headline measure of active-management skill." },
    ],
    takeaways: [
      "Performance evaluation has three steps: measurement (return), attribution (sources), and appraisal (skill vs luck).",
      "Use time-weighted return to judge the manager (it removes cash-flow timing) and money-weighted return to judge the investor's actual experience.",
      "Attribution requires a valid, investable benchmark (specified in advance, appropriate, measurable, unambiguous, reflective, accountable, investable).",
      "The Brinson model splits active return into allocation (segment weighting), selection (security picking), and interaction effects.",
      "Risk-adjusted appraisal: Sharpe uses total risk, Treynor and Jensen's alpha use systematic risk (beta), and the information ratio uses benchmark-relative active risk.",
      "The information ratio (active return ÷ active risk) is the headline measure of active-management skill.",
    ],
  },
];

export const deepQuestionsL3: Question[] = [
  {
    id: "cfa-l3aa-d1", examSlug: "cfa-l3", topicId: "pm-asset", topicName: "Asset Allocation", difficulty: 1,
    stem: "Empirically, the largest share of the variability in a diversified portfolio's returns over time is attributable to:",
    choices: ["Security selection", "Market timing", "Strategic asset allocation", "Trading execution"],
    answerIndex: 2,
    explanation: "Studies consistently find that the strategic asset-allocation policy mix explains most of the variation in a diversified portfolio's returns through time — far more than security selection or timing. That's why asset allocation is treated as the dominant decision.",
  },
  {
    id: "cfa-l3aa-d2", examSlug: "cfa-l3", topicId: "pm-asset", topicName: "Asset Allocation", difficulty: 2,
    stem: "A portfolio has an expected return of 8% and standard deviation of 12%. For an investor with risk-aversion coefficient λ = 4, its utility (certainty-equivalent) is closest to:",
    choices: ["3.12%", "5.12%", "8.00%", "2.88%"],
    answerIndex: 1,
    explanation: "U = E(R) − ½λσ² = 0.08 − 0.5 × 4 × 0.12² = 0.08 − 0.0288 = 0.0512 ≈ 5.12%. The investor is indifferent between this risky portfolio and a certain 5.12%.",
  },
  {
    id: "cfa-l3aa-d3", examSlug: "cfa-l3", topicId: "pm-asset", topicName: "Asset Allocation", difficulty: 2,
    stem: "A defined-benefit pension plan choosing its asset mix to fund and hedge its obligations is using which approach?",
    choices: ["Asset-only allocation", "Liability-relative allocation", "Goals-based allocation", "Tactical asset allocation"],
    answerIndex: 1,
    explanation: "Liability-relative (liability-driven) allocation models the liabilities explicitly and optimizes the surplus (assets − liabilities). It fits pensions, insurers, and banks. Goals-based suits individuals; asset-only ignores liabilities.",
  },
  {
    id: "cfa-l3aa-d4", examSlug: "cfa-l3", topicId: "pm-asset", topicName: "Asset Allocation", difficulty: 3,
    stem: "Mean–variance optimization is often called an 'error maximizer' because it:",
    choices: ["Always produces equally weighted portfolios", "Is highly sensitive to input estimates, producing concentrated, unstable allocations", "Ignores expected returns entirely", "Guarantees the highest Sharpe ratio out of sample"],
    answerIndex: 1,
    explanation: "Small errors in the inputs — especially expected returns — lead to large, often highly concentrated swings in the optimal weights. Remedies include reverse optimization, the Black–Litterman model, resampling, constraints, and Monte Carlo simulation.",
  },
  {
    id: "cfa-l3aa-d5", examSlug: "cfa-l3", topicId: "pm-asset", topicName: "Asset Allocation", difficulty: 3,
    stem: "A young investor whose human capital is stable and bond-like (e.g., tenured employment) should, all else equal, hold a financial portfolio that is:",
    choices: ["More heavily weighted to equities", "More heavily weighted to bonds", "Entirely in cash", "Unaffected by human capital"],
    answerIndex: 0,
    explanation: "On the economic balance sheet, bond-like human capital already provides a large, stable, fixed-income-like asset, so the financial portfolio can tilt MORE toward equities. Equity-like human capital (e.g., a commission broker) argues for less equity in the financial portfolio.",
  },
  {
    id: "cfa-l3aa-d6", examSlug: "cfa-l3", topicId: "pm-asset", topicName: "Asset Allocation", difficulty: 2,
    stem: "Rebalancing a portfolio back to its strategic targets is best described as a strategy that is:",
    choices: ["Trend-following and long-volatility", "Contrarian and short-volatility", "Risk-free", "Equivalent to buy-and-hold"],
    answerIndex: 1,
    explanation: "Rebalancing sells assets that have risen and buys those that have fallen — a contrarian, short-volatility strategy that earns a rebalancing return in mean-reverting markets but can lag in strong, persistent trends. Corridor width should reflect transaction costs and volatility.",
  },

  {
    id: "cfa-l3bf-d1", examSlug: "cfa-l3", topicId: "behavioral", topicName: "Behavioral Finance", difficulty: 2,
    stem: "The most important reason to classify a bias as a cognitive error rather than an emotional bias is that it determines whether the adviser should:",
    choices: ["Report the bias to regulators", "Moderate (correct) it versus adapt the portfolio to it", "Charge a higher fee", "Ignore it entirely"],
    answerIndex: 1,
    explanation: "Cognitive errors stem from faulty reasoning and can be MODERATED with education and data; emotional biases are feeling-driven and are usually ADAPTED to (designed around). The classification drives the management prescription — the heart of L3 behavioral questions.",
  },
  {
    id: "cfa-l3bf-d2", examSlug: "cfa-l3", topicId: "behavioral", topicName: "Behavioral Finance", difficulty: 2,
    stem: "An investor sells winning positions quickly but holds onto losers hoping to break even. This behavior reflects:",
    choices: ["Confirmation bias", "The disposition effect, driven by loss aversion", "Anchoring", "Mental accounting"],
    answerIndex: 1,
    explanation: "The disposition effect — selling winners too soon and holding losers too long — is driven by loss aversion (the pain of realizing a loss). It is an emotional bias, typically managed by adapting rules (e.g., disciplined sell triggers) rather than persuasion alone.",
  },
  {
    id: "cfa-l3bf-d3", examSlug: "cfa-l3", topicId: "behavioral", topicName: "Behavioral Finance", difficulty: 1,
    stem: "Under prospect theory, investors are typically:",
    choices: ["Risk-averse in both gains and losses", "Risk-seeking in gains and risk-averse in losses", "Risk-averse in gains and risk-seeking in losses", "Risk-neutral overall"],
    answerIndex: 2,
    explanation: "Prospect theory's value function makes people risk-averse in the domain of gains but risk-SEEKING in the domain of losses (gambling to avoid a sure loss), with losses weighted more heavily than equivalent gains (loss aversion).",
  },
  {
    id: "cfa-l3bf-d4", examSlug: "cfa-l3", topicId: "behavioral", topicName: "Behavioral Finance", difficulty: 2,
    stem: "An investor who trades excessively and under-diversifies because they overestimate the precision of their forecasts exhibits:",
    choices: ["Conservatism", "Overconfidence", "Status-quo bias", "Regret aversion"],
    answerIndex: 1,
    explanation: "Overconfidence — overestimating one's knowledge or the precision of estimates — leads to excessive trading and under-diversification. It is an emotional bias (with a cognitive component) and is among the most damaging to returns.",
  },
  {
    id: "cfa-l3bf-d5", examSlug: "cfa-l3", topicId: "behavioral", topicName: "Behavioral Finance", difficulty: 2,
    stem: "Treating a year-end bonus as 'fun money' to gamble while carefully protecting salary savings is an example of:",
    choices: ["Mental accounting", "Hindsight bias", "Illusion of control", "Availability bias"],
    answerIndex: 0,
    explanation: "Mental accounting treats money differently depending on its arbitrary source or label, rather than recognizing that money is fungible. It is a cognitive (processing) error and underlies behavioral portfolio theory's layered, goal-based buckets.",
  },
  {
    id: "cfa-l3bf-d6", examSlug: "cfa-l3", topicId: "behavioral", topicName: "Behavioral Finance", difficulty: 3,
    stem: "A client refuses to sell a large position of inherited stock, valuing it far above what they would pay to buy it today. This is best described as:",
    choices: ["Confirmation bias", "Endowment bias", "Anchoring and adjustment", "Self-control bias"],
    answerIndex: 1,
    explanation: "Endowment bias is overvaluing an asset simply because one owns it (here, inherited stock). It is an emotional bias, so the adviser typically adapts — e.g., gradually diversifying — rather than expecting the client to overcome the attachment through information alone.",
  },

  {
    id: "cfa-l3cme-d1", examSlug: "cfa-l3", topicId: "cme", topicName: "Capital Market Expectations", difficulty: 2,
    stem: "Using appraisal-based return data for private real estate without adjustment will most likely cause an optimizer to:",
    choices: ["Underweight real estate, because volatility is overstated", "Overweight real estate, because volatility and correlations are understated", "Correctly weight real estate", "Exclude real estate entirely"],
    answerIndex: 1,
    explanation: "Appraisal/smoothed data understates the true volatility and correlations of illiquid assets, making them look more attractive (higher risk-adjusted return) than they are — so the optimizer overweights them. Un-smoothing or raising the assumed volatility corrects this.",
  },
  {
    id: "cfa-l3cme-d2", examSlug: "cfa-l3", topicId: "cme", topicName: "Capital Market Expectations", difficulty: 3,
    stem: "Dividend yield is 2.0%, shares outstanding are falling 1.0% per year, expected inflation is 2.0%, real earnings growth is 3.0%, and the P/E is expected to be stable. The Grinold–Kroner expected equity return is closest to:",
    choices: ["6.0%", "7.0%", "8.0%", "5.0%"],
    answerIndex: 2,
    explanation: "E(R_e) = (DY − %ΔShares) + (inflation + real growth) + %ΔP/E = (2.0% − (−1.0%)) + (2.0% + 3.0%) + 0% = 3.0% + 5.0% + 0% = 8.0%. Buybacks (negative %ΔShares) add to the per-share return.",
  },
  {
    id: "cfa-l3cme-d3", examSlug: "cfa-l3", topicId: "cme", topicName: "Capital Market Expectations", difficulty: 2,
    stem: "In the building-block approach to a bond's expected return, the nominal risk-free rate is composed of:",
    choices: ["The term premium plus the credit premium", "The real risk-free rate plus an inflation premium", "The liquidity premium plus the credit premium", "The dividend yield plus growth"],
    answerIndex: 1,
    explanation: "Real risk-free rate + inflation premium = nominal risk-free rate. Adding the term (maturity), credit (default), and liquidity premiums then builds up to the required return on a specific bond.",
  },
  {
    id: "cfa-l3cme-d4", examSlug: "cfa-l3", topicId: "cme", topicName: "Capital Market Expectations", difficulty: 2,
    stem: "The Singer–Terhaar approach estimates an asset's risk premium by:",
    choices: ["Using only historical averages", "Blending the premiums under full market integration and full segmentation by the degree of integration", "Assuming all markets are fully segmented", "Applying the Taylor rule"],
    answerIndex: 1,
    explanation: "Singer–Terhaar (an international CAPM) computes the risk premium assuming full integration and full segmentation, then weights them by the analyst's view of the market's degree of integration. Integrated markets price risk globally (lower premium); segmented markets price it locally (higher premium).",
  },
  {
    id: "cfa-l3cme-d5", examSlug: "cfa-l3", topicId: "cme", topicName: "Capital Market Expectations", difficulty: 1,
    stem: "Which yield-curve condition has historically been a leading indicator of recession?",
    choices: ["A steeply upward-sloping curve", "An inverted (downward-sloping) curve", "A flat curve at high rates", "A curve with high convexity"],
    answerIndex: 1,
    explanation: "An inverted yield curve — short rates above long rates — has historically preceded recessions, reflecting tight monetary policy and expectations of future rate cuts as growth slows.",
  },
  {
    id: "cfa-l3cme-d6", examSlug: "cfa-l3", topicId: "cme", topicName: "Capital Market Expectations", difficulty: 3,
    stem: "Per the Taylor rule, if inflation is above target and output is above potential, the prescribed policy rate relative to neutral is:",
    choices: ["Below neutral", "At neutral", "Above neutral", "Unrelated to neutral"],
    answerIndex: 2,
    explanation: "The Taylor rule adds positive terms for a positive inflation gap (π − target) and a positive output gap, so both being positive pushes the prescribed rate ABOVE the neutral rate — i.e., the central bank should tighten.",
  },

  {
    id: "cfa-l3fi-d1", examSlug: "cfa-l3", topicId: "fixed", topicName: "Fixed-Income Portfolio Management", difficulty: 2,
    stem: "To immunize a single future liability, a manager should set the bond portfolio's Macaulay duration equal to:",
    choices: ["Zero", "The liability's investment horizon", "Twice the liability horizon", "The portfolio's convexity"],
    answerIndex: 1,
    explanation: "Setting Macaulay duration equal to the liability horizon makes price risk and reinvestment risk offset for a small parallel rate shift, locking in the initial yield. PV of assets must also cover the liability, and convexity/dispersion should be minimized.",
  },
  {
    id: "cfa-l3fi-d2", examSlug: "cfa-l3", topicId: "fixed", topicName: "Fixed-Income Portfolio Management", difficulty: 3,
    stem: "When immunizing a single liability, minimizing the portfolio's cash-flow dispersion and convexity reduces:",
    choices: ["Credit risk", "Structural risk from non-parallel yield-curve shifts", "Liquidity risk", "Currency risk"],
    answerIndex: 1,
    explanation: "Duration matching protects against parallel shifts; for non-parallel (twist/butterfly) moves, a portfolio with cash flows tightly clustered around the horizon (low dispersion/convexity) is more robust. High-dispersion structures like barbells carry more structural risk.",
  },
  {
    id: "cfa-l3fi-d3", examSlug: "cfa-l3", topicId: "fixed", topicName: "Fixed-Income Portfolio Management", difficulty: 2,
    stem: "Cash-flow matching (dedication) differs from immunization in that it:",
    choices: ["Requires only a duration match", "Funds each liability with matching bond cash flows, eliminating reinvestment and price risk", "Takes large active duration bets", "Cannot fund a stream of liabilities"],
    answerIndex: 1,
    explanation: "Dedication buys bonds whose coupons and principal exactly fund each liability date, eliminating reinvestment and price risk — but it is costly and inflexible. Immunization instead matches duration/BPV and is more flexible.",
  },
  {
    id: "cfa-l3fi-d4", examSlug: "cfa-l3", topicId: "fixed", topicName: "Fixed-Income Portfolio Management", difficulty: 3,
    stem: "For a given duration, a barbell portfolio compared with a bullet portfolio has:",
    choices: ["Lower convexity and outperforms in large/non-parallel curve moves", "Higher convexity and outperforms in large/non-parallel curve moves", "Identical convexity", "Higher yield and lower convexity"],
    answerIndex: 1,
    explanation: "A barbell (short + long maturities) has higher convexity than a duration-matched bullet, so it outperforms when the curve makes large or non-parallel moves — but it typically gives up a little yield for that convexity.",
  },
  {
    id: "cfa-l3fi-d5", examSlug: "cfa-l3", topicId: "fixed", topicName: "Fixed-Income Portfolio Management", difficulty: 2,
    stem: "An upward-sloping yield curve is expected to remain stable. A strategy that profits from a bond 'rolling down' to lower yields as it ages is:",
    choices: ["Cash-flow matching", "Riding the yield curve (rolldown)", "Contingent immunization", "Pure indexing"],
    answerIndex: 1,
    explanation: "Riding the yield curve captures price appreciation as a bond ages into lower-yielding (higher-priced) shorter maturities along a stable upward-sloping curve, adding rolldown return on top of coupon income. It reverses if rates rise enough to offset the roll.",
  },
  {
    id: "cfa-l3fi-d6", examSlug: "cfa-l3", topicId: "fixed", topicName: "Fixed-Income Portfolio Management", difficulty: 2,
    stem: "A manager expecting the yield curve to FLATTEN (long rates falling relative to short) would most likely:",
    choices: ["Shift weight to the short end of the curve", "Shift weight toward longer maturities (or a barbell)", "Move entirely to cash", "Reduce portfolio duration to zero"],
    answerIndex: 1,
    explanation: "If long rates fall relative to short, longer-maturity bonds (with greater duration) gain the most, so the manager favors the long end or a barbell. Expecting a STEEPENING would instead favor the short end.",
  },

  {
    id: "cfa-l3eq-d1", examSlug: "cfa-l3", topicId: "pm-equity", topicName: "Equity Portfolio Management", difficulty: 2,
    stem: "A portfolio overweights Stock A by +10%, underweights Stock B by −6%, and holds non-benchmark Stock C at +4%, with all else matching the benchmark. Its active share is:",
    choices: ["20%", "10%", "4%", "0%"],
    answerIndex: 1,
    explanation: "Active share = ½ × Σ|w_p − w_b| = ½ × (10% + 6% + 4%) = ½ × 20% = 10%. Active share measures the size of off-benchmark bets, ranging from 0% (index) to 100% (no overlap).",
  },
  {
    id: "cfa-l3eq-d2", examSlug: "cfa-l3", topicId: "pm-equity", topicName: "Equity Portfolio Management", difficulty: 3,
    stem: "A fund exhibits LOW active share AND LOW active risk while charging active-management fees. This is best described as:",
    choices: ["A concentrated stock picker", "A closet indexer", "A pure factor bet", "A market-neutral fund"],
    answerIndex: 1,
    explanation: "Low active share (holdings near the benchmark) combined with low active risk (returns near the benchmark) while charging active fees is the classic 'closet indexer' — a red flag, since investors pay for active management they aren't receiving.",
  },
  {
    id: "cfa-l3eq-d3", examSlug: "cfa-l3", topicId: "pm-equity", topicName: "Equity Portfolio Management", difficulty: 2,
    stem: "Compared with fundamental active management, quantitative (systematic) management typically features:",
    choices: ["A few concentrated bets and lower turnover", "Many small bets across a broad universe and greater scalability", "Reliance on individual analyst judgment", "Lower capacity"],
    answerIndex: 1,
    explanation: "Quantitative management applies rules/models across many securities, making many small diversified bets — it is more scalable than fundamental management, which depends on analyst judgment, is concentrated, and is capacity-constrained.",
  },
  {
    id: "cfa-l3eq-d4", examSlug: "cfa-l3", topicId: "pm-equity", topicName: "Equity Portfolio Management", difficulty: 2,
    stem: "A manager who makes many idiosyncratic, off-benchmark stock bets that largely offset at the portfolio level would most likely show:",
    choices: ["High active share and low active risk", "Low active share and high active risk", "Low active share and low active risk", "Zero active share"],
    answerIndex: 0,
    explanation: "High active share (the bets are large relative to the benchmark) but low active risk (because the uncorrelated idiosyncratic bets diversify away, keeping tracking error modest) describes a diversified stock picker.",
  },
  {
    id: "cfa-l3eq-d5", examSlug: "cfa-l3", topicId: "pm-equity", topicName: "Equity Portfolio Management", difficulty: 1,
    stem: "Equitizing cash with index futures is done primarily to:",
    choices: ["Increase leverage for higher returns", "Avoid cash drag by maintaining intended market exposure", "Hedge currency risk", "Reduce the portfolio's beta to zero"],
    answerIndex: 1,
    explanation: "Holding cash in an equity mandate creates 'cash drag' — unintended underexposure to the market. Buying index futures equitizes that cash so the portfolio keeps its intended equity exposure until the cash is invested.",
  },
  {
    id: "cfa-l3eq-d6", examSlug: "cfa-l3", topicId: "pm-equity", topicName: "Equity Portfolio Management", difficulty: 2,
    stem: "A market-neutral long–short equity strategy is designed primarily to:",
    choices: ["Maximize market beta exposure", "Strip out market beta and isolate stock-selection skill", "Eliminate all risk", "Replicate the benchmark index"],
    answerIndex: 1,
    explanation: "Market-neutral strategies hold offsetting long and short positions so the net market beta is roughly zero, isolating the value added by security selection from overall market direction.",
  },

  {
    id: "cfa-l3dr-d1", examSlug: "cfa-l3", topicId: "pm-deriv", topicName: "Derivatives & Risk Management", difficulty: 3,
    stem: "A $50,000,000 equity portfolio has beta 1.1. Index futures have beta 1.0 and a contract value of $250,000. To fully hedge market risk (target beta 0), the manager should:",
    choices: ["Buy 220 contracts", "Short 220 contracts", "Short 200 contracts", "Buy 120 contracts"],
    answerIndex: 1,
    explanation: "N_f = [(0 − 1.1)/1.0] × ($50,000,000/$250,000) = (−1.1)(200) = −220. The negative sign means SHORT 220 contracts, removing the market exposure and leaving residual/selection risk.",
  },
  {
    id: "cfa-l3dr-d2", examSlug: "cfa-l3", topicId: "pm-deriv", topicName: "Derivatives & Risk Management", difficulty: 2,
    stem: "To reduce a bond portfolio's duration using the basis-point-value method, a manager should:",
    choices: ["Buy bond futures", "Sell bond futures", "Enter a receive-fixed swap", "Buy a protective put"],
    answerIndex: 1,
    explanation: "N_f = (BPV_target − BPV_p)/BPV_futures. To shorten duration, BPV_target < BPV_p gives a negative count — SELL bond futures. Buying futures would lengthen duration.",
  },
  {
    id: "cfa-l3dr-d3", examSlug: "cfa-l3", topicId: "pm-deriv", topicName: "Derivatives & Risk Management", difficulty: 2,
    stem: "Entering a RECEIVE-fixed, pay-floating interest-rate swap will, all else equal:",
    choices: ["Reduce the portfolio's duration", "Add to the portfolio's duration", "Have no effect on duration", "Eliminate credit risk"],
    answerIndex: 1,
    explanation: "A receive-fixed swap behaves like holding a fixed-rate bond, so it ADDS duration (more rate sensitivity). A pay-fixed swap behaves like shorting a fixed bond / holding a floater, reducing duration.",
  },
  {
    id: "cfa-l3dr-d4", examSlug: "cfa-l3", topicId: "pm-deriv", topicName: "Derivatives & Risk Management", difficulty: 1,
    stem: "A protective put strategy (long the asset plus a long put) provides:",
    choices: ["Income at the cost of capped upside", "Downside protection while retaining upside, at the cost of the premium", "A bounded range of outcomes at zero cost", "Leveraged market exposure"],
    answerIndex: 1,
    explanation: "A protective put insures against losses below the strike while keeping the asset's upside; the cost is the put premium. A covered call (short call) earns income but caps upside; a collar combines a put and a call to bound outcomes.",
  },
  {
    id: "cfa-l3dr-d5", examSlug: "cfa-l3", topicId: "pm-deriv", topicName: "Derivatives & Risk Management", difficulty: 2,
    stem: "A 'costless collar' on a long equity position is typically constructed by:",
    choices: ["Buying a put and buying a call", "Buying a put and selling a call so premiums roughly offset", "Selling a put and selling a call", "Buying two puts"],
    answerIndex: 1,
    explanation: "A collar buys a protective put (downside) financed by selling a call (giving up upside above its strike). Choosing strikes so the call premium received roughly offsets the put premium paid creates a near-zero-cost ('costless') collar that bounds the outcome in a range.",
  },
  {
    id: "cfa-l3dr-d6", examSlug: "cfa-l3", topicId: "pm-deriv", topicName: "Derivatives & Risk Management", difficulty: 1,
    stem: "The primary advantage of using a derivatives overlay rather than trading the underlying securities to change exposure is:",
    choices: ["It eliminates all risk", "Lower transaction cost and disruption while leaving the core holdings intact", "It guarantees higher returns", "It removes the need for collateral"],
    answerIndex: 1,
    explanation: "Derivatives let a manager adjust beta, duration, or currency exposure quickly, cheaply, and with high liquidity, without disturbing the underlying portfolio. The trade-offs are basis risk, margin/collateral management, and (for options) premium cost.",
  },

  {
    id: "cfa-l3cur-d1", examSlug: "cfa-l3", topicId: "currency", topicName: "Currency Management", difficulty: 2,
    stem: "A U.S. investor's European stock returns 5.0% in euros while the euro appreciates 3.0% versus the dollar. The dollar (domestic-currency) return is closest to:",
    choices: ["2.0%", "8.0%", "8.15%", "5.0%"],
    answerIndex: 2,
    explanation: "R_DC = (1 + R_FC)(1 + R_FX) − 1 = (1.05)(1.03) − 1 = 0.0815 = 8.15% — the 5% asset return, 3% currency gain, and 0.15% cross-term.",
  },
  {
    id: "cfa-l3cur-d2", examSlug: "cfa-l3", topicId: "currency", topicName: "Currency Management", difficulty: 3,
    stem: "Hedging a foreign currency that trades at a forward DISCOUNT (e.g., a high-interest-rate currency) by selling it forward will most likely:",
    choices: ["Earn positive roll yield", "Cost negative roll yield", "Have no effect on return", "Eliminate all basis risk"],
    answerIndex: 1,
    explanation: "Selling forward a currency at a forward discount means selling below spot, producing negative roll yield. High-yield currencies trade at forward discounts, so hedging them is costly — the flip side of the carry trade, where staying unhedged captures the yield.",
  },
  {
    id: "cfa-l3cur-d3", examSlug: "cfa-l3", topicId: "currency", topicName: "Currency Management", difficulty: 2,
    stem: "Within a global portfolio, currency exposure on a foreign BOND allocation is typically hedged more than on a foreign EQUITY allocation because:",
    choices: ["Bonds have higher returns", "Currency volatility is large relative to bond volatility, so it dominates bond risk", "Equities cannot be hedged", "Bond hedging has no cost"],
    answerIndex: 1,
    explanation: "A bond's own volatility is low, so unhedged currency swings can swamp the bond's return and dominate its risk. Equities are more volatile on their own, so currency is a smaller relative contributor — hence bonds are generally hedged more.",
  },
  {
    id: "cfa-l3cur-d4", examSlug: "cfa-l3", topicId: "currency", topicName: "Currency Management", difficulty: 1,
    stem: "The most commonly used instrument for hedging currency exposure in institutional portfolios is the:",
    choices: ["Exchange-traded currency option", "Currency forward (often rolled at expiry)", "Currency swap", "Cross-currency basis swap"],
    answerIndex: 1,
    explanation: "Forward contracts dominate currency hedging: they are customizable, require no upfront premium, and are simply rolled forward as they expire. Options, futures, and swaps are used for specific needs.",
  },
  {
    id: "cfa-l3cur-d5", examSlug: "cfa-l3", topicId: "currency", topicName: "Currency Management", difficulty: 2,
    stem: "A 'participating forward' is used in currency hedging because it:",
    choices: ["Provides downside protection while retaining part of the upside", "Eliminates all transaction costs", "Guarantees a profit", "Removes the need to roll the hedge"],
    answerIndex: 0,
    explanation: "A participating forward gives full downside protection while allowing the hedger to keep a portion of any favorable currency move — one of several option structures (with risk reversals, put spreads, seagulls) that reduce hedging cost by trading away some protection or upside.",
  },
  {
    id: "cfa-l3cur-d6", examSlug: "cfa-l3", topicId: "currency", topicName: "Currency Management", difficulty: 2,
    stem: "Hedging emerging-market currency exposure is often more difficult than developed-market hedging because EM currencies tend to have:",
    choices: ["Lower transaction costs and deep liquidity", "Higher costs, lower liquidity, fat-tailed returns, and contagion risk", "No correlation with global markets", "Permanently fixed exchange rates"],
    answerIndex: 1,
    explanation: "Emerging-market currencies carry higher trading costs, thinner liquidity, fat-tailed and skewed returns, and contagion risk, so hedges are more expensive and imperfect — and may break down exactly when protection is most needed.",
  },

  {
    id: "cfa-l3pw-d1", examSlug: "cfa-l3", topicId: "pm-private", topicName: "Private Wealth Management", difficulty: 2,
    stem: "A client's ABILITY to take risk (as opposed to willingness) is increased by:",
    choices: ["A more aggressive personal attitude toward volatility", "Greater wealth relative to needs and a longer time horizon", "Past success in active trading", "A stated preference for high returns"],
    answerIndex: 1,
    explanation: "Ability is objective and financial — it rises with greater wealth relative to needs, a longer horizon, low liquidity needs, and flexible goals. Attitudes and preferences describe WILLINGNESS, the subjective component.",
  },
  {
    id: "cfa-l3pw-d2", examSlug: "cfa-l3", topicId: "pm-private", topicName: "Private Wealth Management", difficulty: 3,
    stem: "A client has a HIGH willingness but LOW ability to take risk. The most appropriate approach is generally to:",
    choices: ["Follow the high willingness, since the client wants risk", "Base the policy on the lower (ability) and educate the client about the conflict", "Average the two and proceed", "Decline to manage the account"],
    answerIndex: 1,
    explanation: "When ability and willingness conflict, the prudent default is to base the policy on the LOWER of the two — here ability, which is binding — while educating the client about the mismatch. You should not simply indulge a willingness the client's finances cannot support.",
  },
  {
    id: "cfa-l3pw-d3", examSlug: "cfa-l3", topicId: "pm-private", topicName: "Private Wealth Management", difficulty: 3,
    stem: "A retiree has $2,000,000 of investable assets and needs $90,000 per year (after tax), with inflation of 2.5%. The approximate nominal required return that preserves real value is:",
    choices: ["4.5%", "7.1%", "2.5%", "9.0%"],
    answerIndex: 1,
    explanation: "Real return needed = $90,000 ÷ $2,000,000 = 4.5%. Grossing up for inflation: (1.045)(1.025) − 1 ≈ 7.1% nominal. If part of the return were taxable, it would need to be grossed up further.",
  },
  {
    id: "cfa-l3pw-d4", examSlug: "cfa-l3", topicId: "pm-private", topicName: "Private Wealth Management", difficulty: 2,
    stem: "Which constraint is generally far more important for individual investors than for most institutional investors?",
    choices: ["Time horizon", "Taxes", "Liquidity", "Legal/regulatory"],
    answerIndex: 1,
    explanation: "Taxes are central to individual planning — bracket, asset location across taxable and tax-advantaged accounts, loss harvesting, and deferral — whereas many institutions (e.g., pensions, endowments) are tax-exempt. All investors face the other constraints to varying degrees.",
  },
  {
    id: "cfa-l3pw-d5", examSlug: "cfa-l3", topicId: "pm-private", topicName: "Private Wealth Management", difficulty: 1,
    stem: "A near-term cash need such as a planned home purchase or an emergency reserve is addressed in the IPS under the:",
    choices: ["Return objective", "Liquidity constraint", "Risk objective", "Legal constraint"],
    answerIndex: 1,
    explanation: "Known near-term cash requirements are liquidity constraints; the assets needed for them should be held in low-risk, accessible instruments and removed from the risky portfolio pool.",
  },
  {
    id: "cfa-l3pw-d6", examSlug: "cfa-l3", topicId: "pm-private", topicName: "Private Wealth Management", difficulty: 2,
    stem: "The primary purpose of an investment policy statement is to:",
    choices: ["Guarantee a minimum return", "Record the client's objectives and constraints to guide and benchmark all decisions", "Replace the need for asset allocation", "Eliminate the client's taxes"],
    answerIndex: 1,
    explanation: "The IPS is the governing document of the relationship — it captures objectives (return, risk) and constraints, guides investment decisions, provides a benchmark for evaluation, and keeps the plan durable through market swings. It cannot guarantee returns.",
  },

  {
    id: "cfa-l3in-d1", examSlug: "cfa-l3", topicId: "institutional", topicName: "Institutional Investors", difficulty: 2,
    stem: "An endowment has a 5.0% spending rate, 2.5% expected inflation, and 0.3% costs. Its approximate required return to preserve real value is:",
    choices: ["5.0%", "2.5%", "7.8%", "10.0%"],
    answerIndex: 2,
    explanation: "Required return ≈ spending rate + inflation + costs = 5.0% + 2.5% + 0.3% ≈ 7.8% (about 8.0% compounded). This high required return plus a perpetual horizon and low liquidity needs justify the endowment model's tilt to equities and illiquid alternatives.",
  },
  {
    id: "cfa-l3in-d2", examSlug: "cfa-l3", topicId: "institutional", topicName: "Institutional Investors", difficulty: 2,
    stem: "Compared with a property-casualty (P&C) insurer, a LIFE insurer typically holds:",
    choices: ["Shorter-duration, more liquid assets", "Longer-duration, high-grade fixed income matched to predictable liabilities", "Mostly equities", "Only cash"],
    answerIndex: 1,
    explanation: "Life insurers have long, relatively predictable liabilities, so they match with long-duration, high-grade fixed income. P&C insurers face shorter, lumpier, less predictable claims and therefore hold shorter-duration, more liquid portfolios.",
  },
  {
    id: "cfa-l3in-d3", examSlug: "cfa-l3", topicId: "institutional", topicName: "Institutional Investors", difficulty: 2,
    stem: "A defined-benefit pension plan's ability to take risk is MOST increased by:",
    choices: ["A mature, retiree-heavy workforce and underfunding", "A strong sponsor, healthy funded status, and a young active workforce", "A weak sponsor highly correlated with plan assets", "A short time horizon"],
    answerIndex: 1,
    explanation: "A well-funded plan, a financially strong sponsor (whose fortunes are not highly correlated with plan assets), and a young, mostly active workforce (long horizon) all raise risk capacity. The opposite conditions reduce it.",
  },
  {
    id: "cfa-l3in-d4", examSlug: "cfa-l3", topicId: "institutional", topicName: "Institutional Investors", difficulty: 1,
    stem: "The 'endowment model' is characterized by:",
    choices: ["Mostly short-term government bonds", "Large allocations to equities and illiquid alternatives to capture the illiquidity premium", "A 100% cash position", "Matching short liabilities with floating-rate notes"],
    answerIndex: 1,
    explanation: "Endowments' perpetual horizons and minimal liquidity needs let them allocate heavily to equities and illiquid alternatives (private equity, real assets, hedge funds), harvesting the illiquidity premium for higher long-run returns.",
  },
  {
    id: "cfa-l3in-d5", examSlug: "cfa-l3", topicId: "institutional", topicName: "Institutional Investors", difficulty: 2,
    stem: "A bank's securities investment portfolio is managed primarily to:",
    choices: ["Maximize equity returns", "Provide liquidity and manage the interest-rate risk of the balance sheet", "Fund grant-making", "Pay defined pension benefits"],
    answerIndex: 1,
    explanation: "A bank's investment book is a balance-sheet tool: it supplies liquidity and helps manage the interest-rate gap between assets and deposit/funding liabilities, rather than serving as a standalone return engine.",
  },
  {
    id: "cfa-l3in-d6", examSlug: "cfa-l3", topicId: "institutional", topicName: "Institutional Investors", difficulty: 3,
    stem: "A sovereign wealth fund whose purpose is to buffer the government budget against commodity-price swings would most likely have:",
    choices: ["A long horizon and aggressive, illiquid allocation", "A short horizon and a conservative, liquid allocation", "A perpetual horizon like a savings fund", "No defined objective"],
    answerIndex: 1,
    explanation: "A stabilization fund must be ready to support the budget on short notice, so it has a short horizon and a conservative, liquid allocation. Savings funds, by contrast, have long horizons and can take more risk.",
  },

  {
    id: "cfa-l3tr-d1", examSlug: "cfa-l3", topicId: "trading", topicName: "Trading & Execution", difficulty: 2,
    stem: "Which is an IMPLICIT trading cost rather than an explicit one?",
    choices: ["Brokerage commission", "Exchange fee", "Market impact", "Transfer tax"],
    answerIndex: 2,
    explanation: "Market impact — the adverse price move caused by one's own order — is an implicit cost, along with the bid–ask spread, delay/slippage, and opportunity cost. Commissions, fees, and taxes are explicit costs.",
  },
  {
    id: "cfa-l3tr-d2", examSlug: "cfa-l3", topicId: "trading", topicName: "Trading & Execution", difficulty: 2,
    stem: "Implementation shortfall is best defined as:",
    choices: ["The commission paid on a trade", "The difference between the return on a paper (decision-price) portfolio and the actual portfolio", "The bid–ask spread only", "The VWAP of the trading day"],
    answerIndex: 1,
    explanation: "Implementation shortfall is the paper-portfolio return (instant, costless fill at the decision price) minus the actual-portfolio return, capturing delay, market impact, fees, and the opportunity cost of unfilled shares.",
  },
  {
    id: "cfa-l3tr-d3", examSlug: "cfa-l3", topicId: "trading", topicName: "Trading & Execution", difficulty: 3,
    stem: "A large implementation-shortfall component arising from shares that were never filled (while the price ran away) is the:",
    choices: ["Market-impact cost", "Commission cost", "Opportunity cost", "Bid–ask spread"],
    answerIndex: 2,
    explanation: "The opportunity cost is the foregone return on the unfilled portion of the order, valued at the decision price. A large opportunity cost signals trading too passively — the remedy (trading faster) would instead raise market-impact cost.",
  },
  {
    id: "cfa-l3tr-d4", examSlug: "cfa-l3", topicId: "trading", topicName: "Trading & Execution", difficulty: 1,
    stem: "VWAP as an execution benchmark stands for:",
    choices: ["Variance-weighted average price", "Volume-weighted average price", "Value-weighted arrival price", "Volatility-weighted ask price"],
    answerIndex: 1,
    explanation: "VWAP is the volume-weighted average price over the trading window; it (and TWAP, the time-weighted average price) is used to judge whether execution beat or lagged the market's average. Arrival price underlies implementation-shortfall analysis.",
  },
  {
    id: "cfa-l3tr-d5", examSlug: "cfa-l3", topicId: "trading", topicName: "Trading & Execution", difficulty: 3,
    stem: "A trade motivated by time-sensitive private information should generally be executed:",
    choices: ["Patiently with limit orders to minimize market impact", "Aggressively, because the alpha decays and opportunity cost is high", "Only at the close", "Never — such trades are prohibited"],
    answerIndex: 1,
    explanation: "Information-driven trades have high opportunity cost because the alpha decays quickly, so they should be traded aggressively (demanding liquidity) despite higher market impact. Liquidity/rebalancing trades, lacking urgency, should be traded patiently to minimize impact.",
  },
  {
    id: "cfa-l3tr-d6", examSlug: "cfa-l3", topicId: "trading", topicName: "Trading & Execution", difficulty: 2,
    stem: "The fundamental trade-off in choosing trade urgency is between:",
    choices: ["Commissions and taxes", "Market impact (trading fast) and opportunity cost (trading slow)", "Beta and duration", "Sharpe and Treynor ratios"],
    answerIndex: 1,
    explanation: "Demanding liquidity (fast, aggressive) fills quickly but incurs high market impact; supplying liquidity (patient, limit orders) lowers impact but risks delay and opportunity cost if the price moves away. The optimal point depends on the trade's motivation.",
  },

  {
    id: "cfa-l3pf-d1", examSlug: "cfa-l3", topicId: "pm-perf", topicName: "Performance Evaluation", difficulty: 2,
    stem: "To evaluate a MANAGER's performance independent of client cash-flow timing, the appropriate return measure is the:",
    choices: ["Money-weighted return", "Time-weighted return", "Internal rate of return", "Holding-period yield"],
    answerIndex: 1,
    explanation: "The time-weighted return compounds period returns and is insensitive to the size and timing of external cash flows, isolating the manager's decisions. The money-weighted return (an IRR) reflects the investor's actual dollar experience.",
  },
  {
    id: "cfa-l3pf-d2", examSlug: "cfa-l3", topicId: "pm-perf", topicName: "Performance Evaluation", difficulty: 2,
    stem: "In the Brinson attribution model, value added by overweighting a sector that outperforms the overall benchmark is the:",
    choices: ["Selection effect", "Allocation effect", "Interaction effect", "Currency effect"],
    answerIndex: 1,
    explanation: "The allocation effect captures value from over/underweighting segments relative to the benchmark. The selection effect captures picking better-than-benchmark securities within segments; the interaction effect is their joint result.",
  },
  {
    id: "cfa-l3pf-d3", examSlug: "cfa-l3", topicId: "pm-perf", topicName: "Performance Evaluation", difficulty: 2,
    stem: "A portfolio returns 12% with standard deviation 18% and beta 1.2; the risk-free rate is 3%. Its Sharpe ratio is:",
    choices: ["0.50", "0.75", "7.5", "0.67"],
    answerIndex: 0,
    explanation: "Sharpe = (R_p − R_f)/σ_p = (12% − 3%)/18% = 9%/18% = 0.50. (Treynor would be 9%/1.2 = 7.5%, using systematic rather than total risk.)",
  },
  {
    id: "cfa-l3pf-d4", examSlug: "cfa-l3", topicId: "pm-perf", topicName: "Performance Evaluation", difficulty: 3,
    stem: "Which measure is most appropriate for evaluating a sub-portfolio that is one component of a larger, well-diversified portfolio?",
    choices: ["Sharpe ratio (total risk)", "Treynor ratio or Jensen's alpha (systematic risk)", "Standard deviation alone", "The money-weighted return"],
    answerIndex: 1,
    explanation: "When the portfolio is one part of a diversified whole, only systematic risk (beta) is relevant, so Treynor or Jensen's alpha is appropriate. The Sharpe ratio (total risk) is best for evaluating a standalone, fully diversified portfolio.",
  },
  {
    id: "cfa-l3pf-d5", examSlug: "cfa-l3", topicId: "pm-perf", topicName: "Performance Evaluation", difficulty: 2,
    stem: "Which is NOT a property of a valid benchmark?",
    choices: ["Specified in advance", "Investable", "Chosen after the evaluation period to flatter results", "Appropriate to the manager's style"],
    answerIndex: 2,
    explanation: "A valid benchmark must be specified in ADVANCE (along with being appropriate, measurable, unambiguous, reflective of the manager's universe, accountable, and investable). Selecting it after the fact to flatter results defeats the purpose.",
  },
  {
    id: "cfa-l3pf-d6", examSlug: "cfa-l3", topicId: "pm-perf", topicName: "Performance Evaluation", difficulty: 2,
    stem: "The information ratio, the headline measure of active-management skill, equals:",
    choices: ["Excess return over the risk-free rate divided by total risk", "Active return divided by active risk (tracking error)", "Return above the CAPM-predicted return", "Excess return divided by beta"],
    answerIndex: 1,
    explanation: "Information ratio = active return ÷ active risk (tracking error) — the efficiency of benchmark-relative active management. The other choices describe the Sharpe ratio, Jensen's alpha, and the Treynor ratio respectively.",
  },
];
