// ============================================================
// Certus — CFA Level I content, wave 2
// The remaining six topic areas. Completes CFA Level I.
// ============================================================

import { Chapter, Question } from "./types";

export const extraChapters: Chapter[] = [
  // 5. ECONOMICS
  {
    id: "cfa-econ",
    examSlug: "cfa",
    topicId: "econ",
    topicName: "Economics",
    title: "Economics: Markets, Cycles, and Policy",
    readingMinutes: 20,
    summary: "Supply and demand, market structures, the business cycle, and how monetary and fiscal policy steer the economy.",
    intro:
      "Economics gives you the framework for understanding the forces that move prices, output, and currencies — the backdrop against which every security is valued. The Level I curriculum splits into microeconomics (how individual firms and markets behave) and macroeconomics (how whole economies grow, contract, and respond to policy). You won't be deriving theory from scratch; you'll be reasoning about how a change in one variable ripples through to prices, quantities, and rates.",
    sections: [
      {
        heading: "Supply, demand, and elasticity",
        paragraphs: [
          "Markets clear where the quantity buyers demand equals the quantity sellers supply. Demand curves slope down (people buy more as prices fall); supply curves slope up. Shifts in either curve — from changes in income, input costs, technology, or expectations — move the equilibrium price and quantity. The exam wants you to predict the direction of those moves.",
          "Elasticity measures how strongly quantity responds to a change in price. Demand is elastic when buyers are very price-sensitive (a small price rise cuts quantity sharply) and inelastic when they aren't (necessities, addictive goods). Elasticity drives a key business insight: raising the price of an inelastic good increases total revenue, while raising the price of an elastic good can reduce it.",
        ],
      },
      {
        heading: "Market structures",
        paragraphs: [
          "Firms behave very differently depending on how much competition they face. Under perfect competition, many firms sell identical products and none can set price — they're price takers earning only normal profits in the long run. A monopoly is the opposite: a single seller with pricing power, restricting output to raise price. Between these sit monopolistic competition (many firms with differentiated products, like restaurants) and oligopoly (a few large firms whose decisions are interdependent, like airlines).",
          "The thread connecting them is pricing power. The more concentrated and differentiated the market, the more a firm can charge above marginal cost — and the more sustainable its profits. Analysts use this lens constantly to judge whether a company's high margins can last or will be competed away.",
        ],
      },
      {
        heading: "The business cycle and aggregate output",
        paragraphs: [
          "Economies expand and contract in cycles: expansion, peak, contraction (recession), and trough. GDP — the total value of final goods and services produced — is the headline measure of output. Aggregate demand and aggregate supply determine the economy's price level and output, just as demand and supply set a single market's price and quantity.",
          "Inflation, a sustained rise in the general price level, is the variable policymakers watch most closely. Moderate inflation is normal; rapid inflation erodes purchasing power and savings, while deflation can be even more dangerous because it encourages people to delay spending. Distinguishing demand-pull inflation (too much spending) from cost-push inflation (rising input costs) matters because the policy response differs.",
        ],
      },
      {
        heading: "Monetary and fiscal policy",
        paragraphs: [
          "Governments steer the economy with two levers. Monetary policy, run by the central bank, adjusts interest rates and the money supply: lowering rates stimulates borrowing and spending, raising them cools an overheating economy and fights inflation. Fiscal policy, run by the government's budget, uses taxes and spending: cutting taxes or increasing spending stimulates demand, while the reverse restrains it.",
          "The two interact and sometimes conflict. A central bank raising rates to fight inflation while the government cuts taxes to boost growth are pulling in opposite directions. For exchange rates, higher domestic interest rates tend to attract foreign capital and strengthen the currency, while persistent inflation tends to weaken it — the core intuition behind how currencies move.",
        ],
        callout: {
          label: "Monetary vs fiscal",
          body: "Monetary policy = the central bank moving interest rates / money supply. Fiscal policy = the government changing taxes / spending. Both shift aggregate demand, but through different channels.",
        },
      },
    ],
    keyTerms: [
      { term: "Price elasticity of demand", def: "How much quantity demanded changes when price changes; elastic = sensitive, inelastic = not." },
      { term: "Perfect competition", def: "Many firms, identical products, no pricing power; long-run profits are normal (zero economic profit)." },
      { term: "GDP", def: "The total market value of final goods and services produced in an economy over a period." },
      { term: "Monetary policy", def: "Central-bank actions on interest rates and money supply to influence growth and inflation." },
      { term: "Fiscal policy", def: "Government use of taxation and spending to influence aggregate demand." },
    ],
    takeaways: [
      "Raising price on an inelastic good lifts revenue; on an elastic good it can cut revenue.",
      "Pricing power rises as a market moves from perfect competition toward monopoly.",
      "Monetary policy works through rates; fiscal policy works through taxes and spending.",
      "Higher rates tend to strengthen a currency; persistent inflation tends to weaken it.",
    ],
  },

  // 6. CORPORATE ISSUERS
  {
    id: "cfa-corp",
    examSlug: "cfa",
    topicId: "corp",
    topicName: "Corporate Issuers",
    title: "Corporate Issuers: Capital Budgeting and the Cost of Capital",
    readingMinutes: 20,
    summary: "How companies decide which projects to fund, what their capital costs, and how leverage shapes risk.",
    intro:
      "Corporate Issuers looks at the company from the inside: how it is governed, how it decides which investments to make, what its financing costs, and how its mix of debt and equity affects risk and return. These are the decisions that create or destroy value, and the tools here — net present value, weighted average cost of capital, and leverage analysis — reappear throughout equity and credit analysis.",
    sections: [
      {
        heading: "Governance and stakeholders",
        paragraphs: [
          "A corporation balances the interests of many stakeholders — shareholders, debtholders, managers, employees, customers, suppliers, and regulators. Good corporate governance aligns managers' incentives with shareholders' long-term interests and protects against conflicts, such as managers pursuing empire-building acquisitions that boost their status but reduce shareholder value. Weak governance is a real risk factor analysts price in.",
        ],
      },
      {
        heading: "Capital budgeting: the NPV rule",
        paragraphs: [
          "Capital budgeting is how a firm chooses which long-term projects to pursue. The dominant tool is net present value (NPV): discount a project's expected future cash flows back to today at the firm's cost of capital and subtract the initial investment. If NPV is positive, the project earns more than the cost of the money funding it and should be accepted; if negative, it destroys value.",
          "The internal rate of return (IRR) — the discount rate that makes NPV zero — is a popular companion measure, but it can mislead when projects have unconventional cash flows or when you're choosing between mutually exclusive projects of different sizes. When NPV and IRR disagree, NPV wins, because it measures value created in dollars rather than a percentage.",
        ],
        callout: {
          label: "The decision rule",
          body: "Accept a project if NPV > 0. When ranking mutually exclusive projects, choose the highest NPV — not necessarily the highest IRR.",
        },
      },
      {
        heading: "The cost of capital (WACC)",
        paragraphs: [
          "The discount rate used in capital budgeting is the weighted average cost of capital (WACC) — the blended, after-tax cost of the firm's debt and equity, weighted by how much of each it uses. Debt is usually cheaper than equity (interest is tax-deductible and debtholders bear less risk), but loading up on debt raises the risk of financial distress, which eventually pushes up the cost of both debt and equity.",
          "WACC is the hurdle rate a project must clear. A project returning 9% is value-creating for a firm with an 7% WACC but value-destroying for a firm with an 11% WACC — which is why two companies can rationally make opposite decisions about the same opportunity.",
        ],
      },
      {
        heading: "Leverage: operating and financial",
        paragraphs: [
          "Leverage amplifies outcomes. Operating leverage comes from fixed operating costs: a firm with high fixed costs sees profits swing sharply with sales because each additional sale contributes heavily to the bottom line once fixed costs are covered. Financial leverage comes from fixed financing costs (debt): borrowing magnifies returns to shareholders when things go well and magnifies losses when they don't.",
          "Both raise the variability of earnings — and therefore risk. A company with high operating AND financial leverage is a high-beta bet: spectacular in a boom, fragile in a downturn. Understanding a firm's leverage tells you how its earnings will behave as the economy turns, which is central to both equity and credit judgments.",
        ],
      },
    ],
    keyTerms: [
      { term: "Net present value (NPV)", def: "Present value of a project's cash flows minus its cost; accept if positive." },
      { term: "Internal rate of return (IRR)", def: "The discount rate that sets NPV to zero; can mislead for mutually exclusive or unconventional projects." },
      { term: "WACC", def: "The blended after-tax cost of a firm's debt and equity; the hurdle rate for new projects." },
      { term: "Operating leverage", def: "Sensitivity of operating profit to sales, driven by fixed operating costs." },
      { term: "Financial leverage", def: "Use of debt that magnifies returns and losses to shareholders." },
    ],
    takeaways: [
      "Accept projects with positive NPV; when NPV and IRR conflict, trust NPV.",
      "WACC is the hurdle rate — the same project can be good for one firm and bad for another.",
      "Debt is cheaper than equity but raises distress risk, which eventually lifts both costs.",
      "High operating + financial leverage means high earnings volatility and high risk.",
    ],
  },

  // 7. EQUITY
  {
    id: "cfa-equity",
    examSlug: "cfa",
    topicId: "equity",
    topicName: "Equity Investments",
    title: "Equity Investments: Market Efficiency and Valuation",
    readingMinutes: 20,
    summary: "How markets are organized, what market efficiency implies, and the core ways to value a stock.",
    intro:
      "Equity is where many candidates feel most at home — it's the world of stocks, indexes, and valuation. The Level I material builds from how markets and indexes are constructed, to the contentious question of how efficient prices are, to the foundational models for estimating what a share is actually worth. The valuation tools here are deliberately simple, but the reasoning behind them carries all the way to Levels II and III.",
    sections: [
      {
        heading: "Markets and indexes",
        paragraphs: [
          "Securities trade in primary markets (new issuance) and secondary markets (investors trading with each other). Indexes like the S&P 500 track the performance of a basket of securities and serve as benchmarks. How an index is weighted matters: market-cap-weighted indexes (the most common) give bigger companies more influence, while price-weighted and equal-weighted indexes produce different results from the same constituents. An analyst must know what a benchmark actually measures before comparing a portfolio to it.",
        ],
      },
      {
        heading: "Market efficiency",
        paragraphs: [
          "The efficient market hypothesis (EMH) asks how fully prices reflect available information, and it comes in three forms. Weak-form efficiency says prices already reflect all past price and volume data — so technical analysis can't consistently win. Semi-strong form says prices reflect all publicly available information — so fundamental analysis of public data can't consistently win either, and prices adjust quickly to news. Strong form says prices reflect all information, public and private — implying even insiders can't beat the market (a claim few accept, since insider trading demonstrably is profitable, which is why it's illegal).",
          "Efficiency is a spectrum, not a switch. Markets are efficient enough that beating them consistently is hard, but anomalies and behavioral biases create pockets of opportunity. The practical takeaway: the burden of proof is on the active manager to show they can add value net of fees, because the default assumption is that prices are largely fair.",
        ],
        callout: {
          label: "Three forms of EMH",
          body: "Weak = prices reflect past prices (defeats technical analysis). Semi-strong = prices reflect all public info (defeats fundamental analysis on public data). Strong = prices reflect all info, public and private.",
        },
      },
      {
        heading: "Valuing a share",
        paragraphs: [
          "The dividend discount model (DDM) values a stock as the present value of its expected future dividends. Its most-used form, the Gordon growth model, assumes dividends grow at a constant rate forever: value equals next year's dividend divided by (the required return minus the growth rate). The model is powerful but sensitive — small changes in the assumed growth rate or required return swing the valuation dramatically, and it breaks down when growth is assumed to equal or exceed the required return.",
          "Because not all firms pay dividends and forecasts are uncertain, analysts also use relative valuation — multiples like price-to-earnings (P/E). A P/E tells you how much investors pay per dollar of earnings; comparing a company's multiple to its peers and its own history is a quick read on whether it looks cheap or expensive. Multiples are fast and intuitive but only as good as the comparability of the companies and the quality of the earnings underneath them.",
        ],
      },
    ],
    keyTerms: [
      { term: "Efficient market hypothesis", def: "The theory that prices reflect available information; comes in weak, semi-strong, and strong forms." },
      { term: "Dividend discount model", def: "Values a stock as the present value of expected future dividends." },
      { term: "Gordon growth model", def: "DDM assuming constant dividend growth: value = D1 / (r − g)." },
      { term: "Price-to-earnings (P/E)", def: "Price per share divided by earnings per share; a relative-valuation multiple." },
      { term: "Market-cap weighting", def: "Index weighting that gives larger companies proportionally more influence." },
    ],
    takeaways: [
      "Weak/semi-strong/strong efficiency defeat technical / public-fundamental / all analysis respectively.",
      "Gordon growth value = D1 / (r − g); it's hypersensitive to r and g and fails when g ≥ r.",
      "P/E is a fast relative gauge but depends on comparability and earnings quality.",
      "Always know how a benchmark index is weighted before judging performance against it.",
    ],
  },

  // 8. DERIVATIVES
  {
    id: "cfa-deriv",
    examSlug: "cfa",
    topicId: "deriv",
    topicName: "Derivatives",
    title: "Derivatives: Forwards, Futures, Options, and Swaps",
    readingMinutes: 18,
    summary: "What derivatives are, how no-arbitrage prices them, and how options pay off.",
    intro:
      "A derivative is a contract whose value derives from an underlying asset — a stock, bond, commodity, rate, or index. Derivatives let investors hedge risk, speculate with leverage, or exploit mispricing, and they're priced by a single powerful principle: no-arbitrage. If two positions deliver the same payoff, they must cost the same, or risk-free profit would be available. Level I focuses on the intuition and payoffs rather than heavy math.",
    sections: [
      {
        heading: "Forwards, futures, and swaps",
        paragraphs: [
          "A forward contract locks in a price today for a transaction in the future; it's customizable and traded over the counter, with the risk that the counterparty defaults. A futures contract is the standardized, exchange-traded version, with a clearinghouse and daily mark-to-market that largely removes counterparty risk. A swap is essentially a series of forwards — an agreement to exchange cash flows over time, like trading a floating interest rate for a fixed one.",
          "All three are priced by the cost-of-carry principle: the forward price equals the spot price grown at the risk-free rate, adjusted for any income (like dividends) or cost of holding the asset. If the forward price strayed from this level, an arbitrageur could buy in one market and sell in the other for a riskless profit, which forces prices back into line.",
        ],
        callout: {
          label: "No-arbitrage forward price",
          body: "Forward price ≈ spot price compounded at the risk-free rate, minus any income (dividends) plus any carrying costs. Deviations create arbitrage that pushes the price back.",
        },
      },
      {
        heading: "Options and their payoffs",
        paragraphs: [
          "An option gives the holder the right, but not the obligation, to buy (a call) or sell (a put) the underlying at a set strike price. The buyer pays a premium for that right; the seller (writer) collects the premium and takes on the obligation. A call is valuable when the underlying rises above the strike; a put is valuable when it falls below. The buyer's loss is capped at the premium, while the upside can be large — an asymmetry that makes options powerful for both hedging and speculation.",
          "An option's premium has two parts: intrinsic value (how far in-the-money it is right now) and time value (the chance it becomes more valuable before expiration). Time value decays as expiration approaches and is larger when the underlying is more volatile — higher volatility means a wider range of possible outcomes, which benefits the option holder whose downside is already capped.",
        ],
      },
      {
        heading: "Put-call parity",
        paragraphs: [
          "Put-call parity is the elegant no-arbitrage relationship linking calls, puts, the underlying, and a risk-free bond. It states that a portfolio of a call plus a bond (worth the strike at expiration) has the same payoff as a portfolio of a put plus the underlying stock. Because their payoffs are identical, their prices must be equal — otherwise arbitrage exists. Parity lets you synthesize any one instrument from the others and is a favorite exam topic precisely because it ties the whole toolkit together.",
        ],
      },
    ],
    keyTerms: [
      { term: "Forward contract", def: "A customizable OTC agreement to transact at a set price on a future date; carries counterparty risk." },
      { term: "Futures contract", def: "A standardized, exchange-traded forward with daily mark-to-market and a clearinghouse." },
      { term: "Call / Put option", def: "The right (not obligation) to buy (call) or sell (put) the underlying at the strike price." },
      { term: "Time value", def: "The part of an option premium beyond intrinsic value; decays toward expiration, larger with volatility." },
      { term: "Put-call parity", def: "Call + bond = put + underlying; their equal payoffs force equal prices (no-arbitrage)." },
    ],
    takeaways: [
      "Forwards are customizable but carry counterparty risk; futures standardize and clear it away.",
      "Forward prices follow cost-of-carry: spot compounded at the risk-free rate, adjusted for income/costs.",
      "An option buyer's loss is capped at the premium; higher volatility raises option value.",
      "Put-call parity links calls, puts, the underlying, and a bond — and powers many exam questions.",
    ],
  },

  // 9. ALTERNATIVE INVESTMENTS
  {
    id: "cfa-alts",
    examSlug: "cfa",
    topicId: "alts",
    topicName: "Alternative Investments",
    title: "Alternative Investments: Beyond Stocks and Bonds",
    readingMinutes: 16,
    summary: "Hedge funds, private equity, real estate, and commodities — their roles, fees, and quirks.",
    intro:
      "Alternative investments are everything outside traditional public stocks and bonds: hedge funds, private equity, real estate, commodities, and infrastructure. Investors add them for diversification and the potential for higher returns, but they come with illiquidity, complexity, weaker transparency, and distinctive fee structures. Level I asks you to understand what each category is, why investors use it, and what makes it hard to value.",
    sections: [
      {
        heading: "The main categories",
        paragraphs: [
          "Hedge funds pursue a wide range of strategies — long/short equity, global macro, event-driven — often using leverage and derivatives, aiming for returns less correlated with the broad market. Private equity buys whole companies (buyouts) or funds startups (venture capital), creating value over years before exiting. Real estate offers income and inflation protection through property. Commodities — energy, metals, agriculture — provide diversification and an inflation hedge, typically accessed through futures rather than physical holdings.",
        ],
      },
      {
        heading: "Why investors use them",
        paragraphs: [
          "The central appeal is diversification: alternatives often move differently from stocks and bonds, so adding them can improve a portfolio's risk-adjusted return even if any single alternative is volatile on its own. Some also offer an inflation hedge (real assets and commodities) or access to a return stream — like the illiquidity premium in private equity — that public markets don't provide. The trade-off is that you give up liquidity, transparency, and often pay much higher fees.",
        ],
      },
      {
        heading: "Fees, valuation, and the catch",
        paragraphs: [
          "The classic hedge-fund and private-equity fee structure is '2 and 20': a 2% annual management fee on assets plus 20% of profits (the performance fee or carried interest), often above a hurdle rate and subject to a high-water mark so managers aren't paid twice for recovering past losses. These fees are a major drag and a key reason to scrutinize net-of-fee returns.",
          "Valuation is the other catch. Because many alternatives don't trade on public exchanges, their reported values rely on appraisals and models rather than market prices. This smooths reported returns and understates true volatility — a fund that marks its assets quarterly looks less risky than it is. Sophisticated investors adjust for this 'stale pricing' rather than taking reported volatility at face value.",
        ],
        callout: {
          label: "'2 and 20'",
          body: "A 2% management fee plus 20% of profits, often with a hurdle rate and high-water mark. High fees make net-of-fee returns the number that matters.",
        },
      },
    ],
    keyTerms: [
      { term: "Hedge fund", def: "A pooled fund using flexible strategies, leverage, and derivatives to seek market-uncorrelated returns." },
      { term: "Private equity", def: "Investing in private companies via buyouts or venture capital, realizing value over years." },
      { term: "Carried interest", def: "The share of profits (often 20%) paid to the fund manager as a performance fee." },
      { term: "High-water mark", def: "A threshold ensuring managers earn performance fees only on net new profits, not recovered losses." },
      { term: "Illiquidity premium", def: "Extra expected return for accepting investments that can't be quickly sold." },
    ],
    takeaways: [
      "Alternatives are added mainly for diversification and inflation protection, not standalone safety.",
      "'2 and 20' fees make net-of-fee returns the figure that matters.",
      "Appraisal-based valuation smooths returns and understates true volatility (stale pricing).",
      "The price of higher potential return is illiquidity, complexity, and weaker transparency.",
    ],
  },

  // 10. PORTFOLIO MANAGEMENT
  {
    id: "cfa-pm",
    examSlug: "cfa",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Portfolio Management: Diversification, CAPM, and the IPS",
    readingMinutes: 20,
    summary: "Why diversification works, how the CAPM prices risk, and what an investment policy statement does.",
    intro:
      "Portfolio management ties the whole curriculum together by asking how individual securities combine into a portfolio that fits an investor's goals. The big ideas — diversification, the distinction between risk you're paid to bear and risk you aren't, and the Capital Asset Pricing Model — are among the most important in all of finance. This topic also introduces the investment policy statement, the document that turns an investor's situation into a concrete plan.",
    sections: [
      {
        heading: "Diversification and types of risk",
        paragraphs: [
          "Combining assets that don't move in perfect lockstep reduces portfolio risk without necessarily sacrificing return — the core insight of modern portfolio theory. The lower the correlation between assets, the greater the diversification benefit. This splits total risk into two kinds. Unsystematic (or specific) risk is unique to a company or industry and can be diversified away by holding many securities. Systematic (or market) risk affects all assets — recessions, rate shocks — and cannot be diversified away.",
          "This distinction has a profound consequence: investors are only rewarded for bearing systematic risk, because unsystematic risk can be eliminated for free through diversification. The market won't pay you a premium for taking a risk you could have avoided.",
        ],
        callout: {
          label: "Systematic vs unsystematic",
          body: "Unsystematic (firm-specific) risk is diversifiable and unrewarded. Systematic (market) risk can't be diversified away — and is the only risk that earns an expected return premium.",
        },
      },
      {
        heading: "The efficient frontier and the CAPM",
        paragraphs: [
          "Plotting portfolios by expected return and risk produces the efficient frontier — the set of portfolios offering the highest return for each level of risk. Rational investors choose a portfolio on this frontier matching their risk tolerance. Adding a risk-free asset lets them combine it with the optimal risky portfolio to reach any risk level they want.",
          "The Capital Asset Pricing Model (CAPM) prices systematic risk. It says an asset's expected return equals the risk-free rate plus its beta times the market risk premium. Beta measures how much an asset moves with the market: a beta of 1 moves with it, above 1 amplifies it, below 1 dampens it. The CAPM's elegant claim is that only beta — exposure to undiversifiable market risk — should drive expected return, not a stock's total volatility.",
        ],
      },
      {
        heading: "The investment policy statement",
        paragraphs: [
          "The investment policy statement (IPS) is the foundation of professional portfolio management. It documents the investor's objectives — return requirements and risk tolerance — and constraints, usefully remembered as liquidity needs, time horizon, tax concerns, legal/regulatory factors, and unique circumstances. The IPS turns a vague goal ('I want to retire comfortably') into an actionable, agreed-upon plan that guides asset allocation and protects both investor and manager from emotional, ad-hoc decisions when markets get volatile.",
          "Asset allocation — the split among stocks, bonds, and other assets — flows directly from the IPS and is the single biggest driver of a portfolio's long-run risk and return, far more than individual security selection. Getting the allocation right, in line with the investor's true objectives and constraints, is where most of the value in portfolio management is created.",
        ],
      },
    ],
    keyTerms: [
      { term: "Systematic risk", def: "Market-wide risk that can't be diversified away; the only risk that earns a return premium." },
      { term: "Unsystematic risk", def: "Firm- or industry-specific risk that diversification can eliminate; unrewarded." },
      { term: "Efficient frontier", def: "The set of portfolios offering the highest expected return for each level of risk." },
      { term: "Beta", def: "An asset's sensitivity to market movements; the measure of systematic risk in the CAPM." },
      { term: "Investment policy statement (IPS)", def: "The document setting an investor's objectives and constraints, guiding asset allocation." },
    ],
    takeaways: [
      "Only systematic risk is rewarded; unsystematic risk is diversifiable and earns no premium.",
      "CAPM: expected return = risk-free rate + beta × market risk premium.",
      "The efficient frontier holds the best risk-return portfolios; pick by risk tolerance.",
      "The IPS (objectives + constraints) drives asset allocation — the biggest driver of long-run results.",
    ],
  },
];

export const extraQuestions: Question[] = [
  // Economics
  {
    id: "cfa-econ-q1", examSlug: "cfa", topicId: "econ", topicName: "Economics", difficulty: 2,
    stem: "A company sells a product with highly inelastic demand. If it raises the price, its total revenue will most likely:",
    choices: ["Increase", "Decrease", "Stay unchanged"],
    answerIndex: 0,
    explanation: "With inelastic demand, quantity demanded falls only slightly when price rises, so the higher price more than offsets the small drop in units — total revenue increases. Choice B describes elastic demand, where buyers are price-sensitive and a price rise cuts quantity enough to lower revenue. Choice C would only hold at unit elasticity, the exact knife-edge case, which 'highly inelastic' rules out.",
  },
  {
    id: "cfa-econ-q2", examSlug: "cfa", topicId: "econ", topicName: "Economics", difficulty: 2,
    stem: "A central bank wants to slow an overheating economy and reduce inflation. The most appropriate monetary policy action is to:",
    choices: ["Lower interest rates", "Raise interest rates", "Cut income taxes"],
    answerIndex: 1,
    explanation: "Raising interest rates is contractionary monetary policy: it makes borrowing more expensive, cools spending and investment, and dampens inflation. Choice A (lowering rates) is expansionary — it would add fuel to an overheating economy. Choice C is a fiscal action (taxes), not monetary, and cutting taxes is also expansionary, the opposite of what's needed.",
  },
  {
    id: "cfa-econ-q3", examSlug: "cfa", topicId: "econ", topicName: "Economics", difficulty: 3,
    stem: "In a perfectly competitive market, in the long run a typical firm earns:",
    choices: ["Large economic profits from pricing power", "Normal profits (zero economic profit)", "Persistent economic losses"],
    answerIndex: 1,
    explanation: "Under perfect competition, free entry and exit drive long-run economic profit to zero — firms earn only a 'normal' profit (their cost of capital). If profits were positive, new entrants would compete them away; if negative, firms would exit until the survivors break even. Choice A describes a monopoly or differentiated market with pricing power, which perfect competition lacks. Choice C can't persist because loss-making firms exit, restoring equilibrium.",
  },
  // Corporate Issuers
  {
    id: "cfa-corp-q1", examSlug: "cfa", topicId: "corp", topicName: "Corporate Issuers", difficulty: 2,
    stem: "A project has a positive NPV but an IRR below the IRR of a competing, mutually exclusive project that has a lower NPV. The firm should:",
    choices: ["Choose the higher-IRR project", "Choose the higher-NPV project", "Reject both projects"],
    answerIndex: 1,
    explanation: "When NPV and IRR conflict for mutually exclusive projects, NPV is the better criterion because it measures the actual dollar value created, while IRR (a percentage) can favor a smaller project that adds less total value. So the firm picks the higher-NPV project. Choice A blindly follows IRR and can leave value on the table. Choice C is wrong because a positive NPV project creates value and shouldn't be rejected.",
  },
  {
    id: "cfa-corp-q2", examSlug: "cfa", topicId: "corp", topicName: "Corporate Issuers", difficulty: 2,
    stem: "A firm's WACC is 10%. It is evaluating a project expected to return 8%. Accepting this project would most likely:",
    choices: ["Create value, since the return is positive", "Destroy value, since the return is below WACC", "Have no effect on firm value"],
    answerIndex: 1,
    explanation: "WACC is the minimum return a project must earn to cover the cost of the capital funding it. An 8% return against a 10% cost of capital means the project earns less than it costs — it destroys value (negative NPV). Choice A is the classic trap: a positive return isn't enough; it must beat the hurdle rate. Choice C ignores that earning below WACC actively reduces firm value.",
  },
  {
    id: "cfa-corp-q3", examSlug: "cfa", topicId: "corp", topicName: "Corporate Issuers", difficulty: 3,
    stem: "Two firms have identical sales variability. Firm X has high operating and financial leverage; Firm Y has low leverage of both kinds. Compared with Firm Y, Firm X's net income will be:",
    choices: ["Less volatile across the business cycle", "More volatile across the business cycle", "Equally volatile, since sales variability is the same"],
    answerIndex: 1,
    explanation: "Leverage magnifies how sales changes flow through to net income. High operating leverage amplifies the effect of sales swings on operating profit, and high financial leverage further amplifies the effect on net income through fixed interest costs. So Firm X's net income swings much more than Firm Y's. Choice C is the trap: identical sales variability does NOT mean identical earnings variability, because leverage multiplies it.",
  },
  // Equity
  {
    id: "cfa-eq-q1", examSlug: "cfa", topicId: "equity", topicName: "Equity", difficulty: 2,
    stem: "If a market is semi-strong-form efficient, which approach is LEAST likely to consistently produce excess returns?",
    choices: ["Trading on undisclosed inside information", "Fundamental analysis of publicly available information", "Neither approach can ever work"],
    answerIndex: 1,
    explanation: "Semi-strong-form efficiency means prices already reflect all PUBLIC information, so fundamental analysis of public data can't consistently beat the market — prices have already adjusted. Choice A could still work, because semi-strong efficiency does NOT assume prices reflect private/inside information (that's strong form). Choice C overstates the claim — semi-strong efficiency doesn't say nothing works, just that public-information analysis won't consistently win.",
  },
  {
    id: "cfa-eq-q2", examSlug: "cfa", topicId: "equity", topicName: "Equity", difficulty: 3,
    stem: "Using the Gordon growth model, a stock's value is most sensitive to errors in the growth rate when the growth rate is:",
    choices: ["Far below the required return", "Close to the required return", "Exactly zero"],
    answerIndex: 1,
    explanation: "Gordon growth value = D1 / (r − g). As g approaches r, the denominator (r − g) shrinks toward zero, so tiny changes in g cause enormous swings in value — the model becomes unstable and hypersensitive. When g is far below r (choice A), the denominator is large and the value is relatively stable. Choice C (g = 0) is a perfectly well-behaved, stable case. The danger zone is g near r.",
  },
  {
    id: "cfa-eq-q3", examSlug: "cfa", topicId: "equity", topicName: "Equity", difficulty: 1,
    stem: "A market-capitalization-weighted index is most influenced by:",
    choices: ["The highest-priced stocks", "The largest companies by market value", "All constituents equally"],
    answerIndex: 1,
    explanation: "In a market-cap-weighted index, each constituent's influence is proportional to its total market value, so the largest companies dominate the index's movements. Choice A describes a PRICE-weighted index (like the Dow), where share price, not company size, drives weight. Choice C describes an equal-weighted index. Knowing the weighting scheme is essential before comparing performance to a benchmark.",
  },
  // Derivatives
  {
    id: "cfa-der-q1", examSlug: "cfa", topicId: "deriv", topicName: "Derivatives", difficulty: 2,
    stem: "The key difference between a futures contract and a forward contract is that futures are:",
    choices: ["Customized and carry higher counterparty risk", "Standardized, exchange-traded, and marked to market daily", "Always more expensive than forwards"],
    answerIndex: 1,
    explanation: "Futures are standardized, traded on exchanges, and marked to market daily through a clearinghouse, which largely eliminates counterparty risk. Choice A describes forwards, which are customized OTC contracts with real counterparty (default) risk. Choice C is simply false — there's no general rule that futures cost more; their prices track the same no-arbitrage relationship as forwards.",
  },
  {
    id: "cfa-der-q2", examSlug: "cfa", topicId: "deriv", topicName: "Derivatives", difficulty: 2,
    stem: "All else equal, an increase in the volatility of the underlying asset will cause the value of a call option to:",
    choices: ["Increase", "Decrease", "Remain unchanged"],
    answerIndex: 0,
    explanation: "Higher volatility widens the range of possible future prices for the underlying. Because an option holder's downside is capped at the premium but the upside is open, a wider distribution of outcomes is favorable — so both calls and puts become more valuable as volatility rises. Choice B reverses the relationship. Choice C ignores that time value (and thus the premium) increases with volatility.",
  },
  {
    id: "cfa-der-q3", examSlug: "cfa", topicId: "deriv", topicName: "Derivatives", difficulty: 3,
    stem: "Put-call parity states that a call plus a risk-free bond (face value equal to the strike) has the same payoff as:",
    choices: ["A put plus the underlying asset", "Two puts", "The underlying minus a put"],
    answerIndex: 0,
    explanation: "Put-call parity: call + bond = put + underlying. The left and right sides produce identical payoffs at expiration, so by no-arbitrage they must have equal value. Choice C (underlying − put) equals a different combination and isn't the parity identity. Choice B is unrelated. Parity lets you build any one instrument synthetically from the others — a frequently tested idea.",
  },
  // Alternatives
  {
    id: "cfa-alt-q1", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "The primary reason a diversified investor adds alternative investments to a stock/bond portfolio is to:",
    choices: ["Guarantee higher returns with less risk", "Improve diversification through lower correlation with traditional assets", "Reduce management fees"],
    answerIndex: 1,
    explanation: "Alternatives are added mainly because they tend to be less correlated with stocks and bonds, so they can improve a portfolio's overall risk-adjusted return even when volatile individually. Choice A overpromises — nothing guarantees higher returns with less risk, and alternatives are often riskier standalone. Choice C is backwards: alternatives typically carry HIGHER fees (e.g., '2 and 20'), not lower.",
  },
  {
    id: "cfa-alt-q2", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "A hedge fund charges '2 and 20' with a high-water mark. The high-water mark ensures that the manager:",
    choices: ["Earns the 2% fee only in profitable years", "Earns performance fees only on net new profits above the prior peak", "Never charges a management fee after a loss"],
    answerIndex: 1,
    explanation: "A high-water mark means the 20% performance fee applies only to gains above the fund's previous highest value — so after a loss, the manager must first recover that loss before earning performance fees again, preventing them from being paid twice for the same gains. Choices A and C confuse this with the 2% MANAGEMENT fee, which is charged on assets regardless of performance; the high-water mark applies to the performance fee, not the management fee.",
  },
  {
    id: "cfa-alt-q3", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "Because many alternative investments are valued by periodic appraisal rather than market prices, their reported returns tend to:",
    choices: ["Overstate true volatility", "Understate true volatility", "Perfectly reflect true volatility"],
    answerIndex: 1,
    explanation: "Appraisal-based (infrequent, smoothed) valuations dampen the reported ups and downs, so measured volatility looks LOWER than the asset's true economic volatility — the 'stale pricing' problem. This can make alternatives appear safer and more diversifying than they really are. Choice A reverses the effect; choice C ignores that modeled valuations don't capture real-time market swings.",
  },
  // Portfolio Management
  {
    id: "cfa-pm-q1", examSlug: "cfa", topicId: "pm", topicName: "Portfolio Management", difficulty: 2,
    stem: "According to modern portfolio theory, investors are compensated with higher expected returns for bearing:",
    choices: ["Total risk (systematic + unsystematic)", "Systematic risk only", "Unsystematic risk only"],
    answerIndex: 1,
    explanation: "Only systematic (market) risk is rewarded, because unsystematic (firm-specific) risk can be eliminated through diversification at no cost — the market won't pay a premium for a risk you could have avoided. Choice A is the common error of assuming total volatility earns a premium. Choice C is backwards: unsystematic risk is exactly the part that earns NO premium because it's diversifiable.",
  },
  {
    id: "cfa-pm-q2", examSlug: "cfa", topicId: "pm", topicName: "Portfolio Management", difficulty: 2,
    stem: "Under the CAPM, a stock with a beta of 1.5 when the risk-free rate is 3% and the market risk premium is 6% has an expected return of:",
    choices: ["9%", "12%", "13.5%"],
    answerIndex: 1,
    explanation: "CAPM: expected return = risk-free rate + beta × market risk premium = 3% + 1.5 × 6% = 3% + 9% = 12%. Choice A (9%) forgets to add the risk-free rate. Choice C (13.5%) incorrectly multiplies beta by the total market return rather than the market risk premium. The formula adds the risk-free rate to beta times the PREMIUM.",
  },
  {
    id: "cfa-pm-q3", examSlug: "cfa", topicId: "pm", topicName: "Portfolio Management", difficulty: 1,
    stem: "Which element belongs among the CONSTRAINTS (not objectives) in an investment policy statement?",
    choices: ["Risk tolerance", "Return requirement", "Liquidity needs"],
    answerIndex: 2,
    explanation: "An IPS separates objectives (return requirement and risk tolerance) from constraints (liquidity, time horizon, taxes, legal/regulatory, and unique circumstances). Liquidity needs are a constraint. Choices A and B — risk tolerance and return requirement — are the two OBJECTIVES, not constraints. Keeping this split straight is a common Level I test point.",
  },
];
