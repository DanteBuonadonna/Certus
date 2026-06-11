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
    readingMinutes: 19,
    summary: "Supply and demand and elasticity, the spectrum of market structures, the business cycle, and how monetary and fiscal policy steer the economy — diagrammed throughout.",
    intro:
      "Economics is the backdrop against which every security is valued: it explains the forces that move prices, output, interest rates, and currencies. The Level I curriculum divides into microeconomics — how individual firms and markets set prices and quantities — and macroeconomics — how whole economies grow, contract, and respond to policy. You will not derive theory from first principles; you will reason about how a change in one variable ripples through to prices, quantities, and rates. The graphs below are the language in which that reasoning is conducted, so learn to read them fluently.",
    sections: [
      {
        heading: "Supply, demand, and market equilibrium",
        blocks: [
          { kind: "p", text: "A market clears at the price where the quantity buyers wish to purchase exactly equals the quantity sellers wish to provide. The demand curve slopes downward — buyers purchase more as the price falls — while the supply curve slopes upward, since higher prices coax out more production. Their intersection is the equilibrium: the only price-and-quantity combination at which there is neither a shortage nor a glut. Above it, surplus pushes prices down; below it, shortage pushes them up." },
          { kind: "p", text: "The real analytical work is predicting how equilibrium moves when a curve shifts. A change in income, tastes, or expectations shifts demand; a change in input costs or technology shifts supply. The exam rewards the ability to trace the consequence: an increase in demand (the curve shifts right) raises both the equilibrium price and quantity, as the figure shows. Working through each case — supply up, demand down, and so on — is how you build the reflex to predict directional effects instantly." },
          { kind: "figure", figure: { caption: "Figure 1 — Market equilibrium and a rightward shift in demand. The market clears where supply meets demand (E₁). When demand rises (D₁ → D₂), the new equilibrium E₂ sits higher up the supply curve: both the price and the quantity rise.", alt: "Supply and demand curves crossing, with demand shifting right to a new higher equilibrium", svg: `<svg viewBox="0 0 460 250" width="100%" style="max-width:460px"><line x1="60" y1="25" x2="60" y2="215" stroke="var(--border-strong)" stroke-width="1"/><line x1="60" y1="215" x2="435" y2="215" stroke="var(--border-strong)" stroke-width="1"/><line x1="70" y1="205" x2="405" y2="55" stroke="var(--text-primary)" stroke-width="2"/><text x="408" y="52" font-size="10" fill="var(--text-primary)" font-weight="600">S</text><line x1="70" y1="70" x2="400" y2="210" stroke="var(--ats-green)" stroke-width="2"/><text x="404" y="212" font-size="10" fill="var(--ats-green)" font-weight="600">D₁</text><line x1="150" y1="72" x2="432" y2="196" stroke="var(--primary)" stroke-width="2" stroke-dasharray="5 3"/><text x="436" y="198" font-size="10" fill="var(--primary)" font-weight="600">D₂</text><circle cx="230" cy="133" r="4" fill="var(--text-primary)"/><text x="214" y="128" text-anchor="end" font-size="10" fill="var(--text-muted)">E₁</text><circle cx="277" cy="112" r="4" fill="var(--primary)"/><text x="286" y="108" font-size="10" fill="var(--primary)" font-weight="600">E₂</text><text x="245" y="238" text-anchor="middle" font-size="10" fill="var(--text-muted)">Quantity →</text><text x="20" y="120" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 20 120)">Price →</text></svg>` } },
        ],
      },
      {
        heading: "Elasticity: how sharply quantity responds",
        blocks: [
          { kind: "p", text: "Price elasticity of demand measures how strongly quantity demanded responds to a change in price. Demand is elastic when buyers are highly price-sensitive — a small price rise triggers a large drop in quantity (think of a good with close substitutes). It is inelastic when quantity barely budges as price moves — the profile of necessities, addictive products, and goods with no substitutes. Geometrically, an inelastic demand curve is steep and an elastic one is flat, as the figure contrasts." },
          { kind: "figure", figure: { caption: "Figure 2 — Elastic vs inelastic demand. For the same rise in price, quantity falls only slightly along the steep (inelastic) curve but sharply along the flat (elastic) curve. This difference determines whether a price increase raises or lowers total revenue.", alt: "A steep inelastic demand curve and a flat elastic demand curve through a common point", svg: `<svg viewBox="0 0 460 240" width="100%" style="max-width:460px"><line x1="60" y1="20" x2="60" y2="205" stroke="var(--border-strong)" stroke-width="1"/><line x1="60" y1="205" x2="435" y2="205" stroke="var(--border-strong)" stroke-width="1"/><line x1="205" y1="35" x2="275" y2="195" stroke="var(--ats-red)" stroke-width="2.5"/><text x="282" y="190" font-size="10" fill="var(--ats-red)" font-weight="600">Inelastic (steep)</text><line x1="90" y1="180" x2="410" y2="80" stroke="var(--primary)" stroke-width="2.5"/><text x="320" y="86" font-size="10" fill="var(--primary)" font-weight="600">Elastic (flat)</text><text x="245" y="230" text-anchor="middle" font-size="10" fill="var(--text-muted)">Quantity →</text><text x="20" y="112" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 20 112)">Price →</text></svg>` } },
          { kind: "callout", label: "Elasticity and revenue", body: "Raising the price of an INELASTIC good increases total revenue (the small quantity loss is outweighed by the higher price). Raising the price of an ELASTIC good can REDUCE revenue, because the quantity loss dominates. This is why pricing strategy hinges on elasticity." },
        ],
      },
      {
        heading: "Market structures: the spectrum of pricing power",
        blocks: [
          { kind: "p", text: "Firms behave very differently depending on how much competition they face, and the structures form a spectrum of pricing power. At one extreme, perfect competition has many firms selling identical products; no firm can influence price, so each is a price taker earning only normal (zero economic) profit in the long run as entry competes away any excess. At the other extreme, a monopoly is a single seller that restricts output to push price above marginal cost. Between them lie monopolistic competition — many firms with differentiated products, like restaurants, retaining a little pricing power through branding — and oligopoly, a few large interdependent firms, like airlines, whose strategic moves depend on rivals' reactions." },
          { kind: "figure", figure: { caption: "Figure 3 — The market-structure spectrum. Pricing power rises from left to right as the number of firms falls and products become more differentiated. Analysts use this lens to judge whether a company's high margins can persist or will be competed away.", alt: "Horizontal spectrum from perfect competition to monopoly with monopolistic competition and oligopoly in between", svg: `<svg viewBox="0 0 460 150" width="100%" style="max-width:460px"><defs><linearGradient id="pwgrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="var(--bg-card)"/><stop offset="1" stop-color="var(--primary)"/></linearGradient></defs><rect x="40" y="40" width="380" height="26" rx="13" fill="url(#pwgrad)" stroke="var(--border)" stroke-width="0.5"/><text x="40" y="92" font-size="9.5" fill="var(--text-secondary)">Perfect</text><text x="40" y="104" font-size="9.5" fill="var(--text-secondary)">competition</text><text x="165" y="92" text-anchor="middle" font-size="9.5" fill="var(--text-secondary)">Monopolistic</text><text x="165" y="104" text-anchor="middle" font-size="9.5" fill="var(--text-secondary)">competition</text><text x="290" y="92" text-anchor="middle" font-size="9.5" fill="var(--text-secondary)">Oligopoly</text><text x="418" y="92" text-anchor="end" font-size="9.5" fill="var(--text-secondary)">Monopoly</text><text x="40" y="32" font-size="9" fill="var(--text-muted)">no pricing power →</text><text x="418" y="32" text-anchor="end" font-size="9" fill="var(--primary)" font-weight="600">maximum pricing power</text><text x="230" y="128" text-anchor="middle" font-size="9" fill="var(--text-muted)">fewer firms, more differentiation →</text></svg>` } },
        ],
      },
      {
        heading: "The business cycle, output, and inflation",
        blocks: [
          { kind: "p", text: "Zooming out from a single market, whole economies expand and contract in a recurring business cycle: expansion, peak, contraction (recession), and trough. Gross domestic product (GDP) — the total market value of final goods and services produced — is the headline measure of output. Just as supply and demand set a single market's price and quantity, aggregate demand and aggregate supply together determine the economy's overall price level and output." },
          { kind: "p", text: "Inflation, a sustained rise in the general price level, is the variable policymakers watch most closely. Moderate inflation is a normal feature of a growing economy; rapid inflation erodes purchasing power and savings, while deflation can be even more dangerous because falling prices encourage households to delay purchases, starving the economy of demand. The cause matters for the cure: demand-pull inflation (too much spending chasing too few goods) calls for cooling demand, whereas cost-push inflation (rising input costs) is harder to address without choking growth." },
        ],
      },
      {
        heading: "Monetary and fiscal policy",
        blocks: [
          { kind: "p", text: "Governments steer the macroeconomy with two distinct levers. Monetary policy, conducted by the central bank, adjusts interest rates and the money supply: cutting rates stimulates borrowing, investment, and spending, while raising rates cools an overheating economy and fights inflation. Fiscal policy, conducted through the government's budget, uses taxes and spending: tax cuts or spending increases stimulate aggregate demand, while tax hikes or spending cuts restrain it." },
          { kind: "p", text: "The two can reinforce or fight each other — a central bank raising rates to fight inflation while the government cuts taxes to spur growth are pulling in opposite directions. The policy mix also drives currencies: higher domestic interest rates tend to attract foreign capital and strengthen the currency, while persistent inflation tends to erode it. This interplay between rates, inflation, and exchange rates is the core intuition behind how currencies move in response to policy." },
          { kind: "callout", label: "Monetary vs fiscal", body: "Monetary policy = the central bank moving interest rates and the money supply. Fiscal policy = the government changing taxes and spending. Both shift aggregate demand, but through different channels — and they can conflict." },
        ],
      },
    ],
    keyTerms: [
      { term: "Market equilibrium", def: "The price-quantity point where demand meets supply, with no shortage or surplus; shifts in either curve move it predictably." },
      { term: "Price elasticity of demand", def: "How much quantity demanded changes when price changes; elastic = sensitive (flat curve), inelastic = insensitive (steep curve)." },
      { term: "Perfect competition vs monopoly", def: "The ends of the pricing-power spectrum: many price-taking firms with zero long-run economic profit versus a single price-setting seller." },
      { term: "GDP", def: "The total market value of final goods and services produced in an economy over a period; the headline measure of output." },
      { term: "Monetary policy", def: "Central-bank actions on interest rates and the money supply to influence growth and inflation." },
      { term: "Fiscal policy", def: "Government use of taxation and spending to influence aggregate demand." },
    ],
    takeaways: [
      "Equilibrium is where supply meets demand; a rightward demand shift raises both price and quantity — learn to trace every case.",
      "Raising price on an inelastic (steep) good lifts revenue; on an elastic (flat) good it can cut revenue.",
      "Pricing power rises along the spectrum from perfect competition to monopoly as firms grow fewer and more differentiated.",
      "Monetary policy works through rates and money supply; fiscal policy through taxes and spending — and they can conflict.",
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
    summary: "How firms choose which projects to fund (NPV vs IRR), what their capital costs (WACC and the optimal structure), and how leverage shapes risk — with the NPV profile and WACC curves drawn out.",
    intro:
      "Corporate Issuers examines the company from the inside: how it is governed, how it decides which investments to make, what its financing costs, and how its mix of debt and equity shapes risk and return. These are the decisions that create or destroy shareholder value, and the tools introduced here — net present value, the weighted average cost of capital, and leverage analysis — recur throughout equity and credit analysis. Master them and you can judge not just whether a company is profitable, but whether its decisions are actually adding value.",
    sections: [
      {
        heading: "Governance and the stakeholder balance",
        blocks: [
          { kind: "p", text: "A corporation must balance the competing interests of many stakeholders — shareholders, debtholders, managers, employees, customers, suppliers, and regulators. Corporate governance is the system of controls that aligns managers' incentives with the long-term interests of owners and guards against conflicts. The classic agency problem is the manager who pursues an empire-building acquisition that inflates their status and pay while destroying shareholder value. Weak governance is not an abstraction; it is a real, priceable risk factor, and lapses in it have erased fortunes." },
        ],
      },
      {
        heading: "Capital budgeting: the NPV rule",
        blocks: [
          { kind: "p", text: "Capital budgeting is the process by which a firm selects long-term investment projects. The dominant and theoretically correct tool is net present value (NPV): discount a project's expected future cash flows back to today at the firm's cost of capital, then subtract the initial investment. A positive NPV means the project earns more than the cost of the money funding it and therefore creates value; a negative NPV means it destroys value and should be rejected. NPV is expressed in dollars of value created, which is exactly what shareholders care about." },
          { kind: "formula", formula: { label: "Net present value", expr: "NPV = Σ [ CFₜ ÷ (1 + r)ᵗ ] − Initial Investment", note: "CFₜ = cash flow in period t, r = the firm's cost of capital (WACC). Accept the project when NPV > 0." } },
          { kind: "example", example: { title: "a capital-budgeting decision", prompt: "A project costs $1,000 today and returns $500 at the end of each of the next 3 years. The firm's cost of capital is 10%. Should it invest?", steps: ["Discount each $500: 500/1.10 + 500/1.21 + 500/1.331 = 454.5 + 413.2 + 375.7 = 1,243.4.", "Subtract the initial outlay: NPV = 1,243.4 − 1,000.", "= +243.4."], answer: "NPV ≈ +$243, so accept — the project creates about $243 of value above the cost of its funding." } },
          { kind: "p", text: "The internal rate of return (IRR) — the discount rate that makes NPV exactly zero — is a popular companion measure, and the relationship between them is best seen graphically. The NPV profile plots a project's NPV against the discount rate: it slopes downward (higher discount rates shrink the present value of future cash flows) and crosses zero precisely at the IRR. A project is acceptable as long as the firm's cost of capital lies to the left of the IRR, where NPV is still positive." },
          { kind: "figure", figure: { caption: "Figure 1 — The NPV profile. NPV falls as the discount rate rises and crosses zero at the IRR. A project adds value whenever the firm's cost of capital is below the IRR (the green region); above it, NPV turns negative and the project destroys value.", alt: "Downward-sloping NPV profile curve crossing zero at the IRR, with accept and reject regions", svg: `<svg viewBox="0 0 460 240" width="100%" style="max-width:460px"><line x1="70" y1="25" x2="70" y2="210" stroke="var(--border-strong)" stroke-width="1"/><line x1="70" y1="130" x2="435" y2="130" stroke="var(--border-strong)" stroke-width="1"/><path d="M80,55 C180,92 250,120 430,182" fill="none" stroke="var(--primary)" stroke-width="2.5"/><circle cx="305" cy="130" r="4.5" fill="var(--ats-red)"/><line x1="305" y1="130" x2="305" y2="210" stroke="var(--border)" stroke-dasharray="3 3"/><text x="305" y="224" text-anchor="middle" font-size="10" fill="var(--ats-red)" font-weight="600">IRR</text><line x1="180" y1="40" x2="180" y2="210" stroke="var(--ats-green)" stroke-dasharray="3 3"/><text x="180" y="224" text-anchor="middle" font-size="9" fill="var(--ats-green)">WACC</text><text x="150" y="60" font-size="9.5" fill="var(--ats-green)" font-weight="600">NPV &gt; 0: accept</text><text x="345" y="170" font-size="9.5" fill="var(--ats-red)" font-weight="600">NPV &lt; 0</text><text x="255" y="237" text-anchor="middle" font-size="10" fill="var(--text-muted)">discount rate →</text><text x="22" y="118" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 22 118)">NPV →</text></svg>` } },
          { kind: "callout", label: "The decision rule", body: "Accept any project with NPV > 0. When choosing among mutually exclusive projects, take the highest NPV — not necessarily the highest IRR, since IRR can mislead for projects of different size or with unconventional cash flows. When NPV and IRR conflict, NPV wins." },
        ],
      },
      {
        heading: "The cost of capital and the optimal structure",
        blocks: [
          { kind: "p", text: "The discount rate used to evaluate projects is the weighted average cost of capital (WACC) — the blended, after-tax cost of the firm's debt and equity, weighted by the proportion of each in the capital structure. Debt is typically cheaper than equity for two reasons: interest is tax-deductible (lowering its after-tax cost) and debtholders, ranking ahead of shareholders, bear less risk and so demand a lower return. That cheapness tempts firms to borrow — but only up to a point." },
          { kind: "formula", formula: { label: "Weighted average cost of capital", expr: "WACC = (E/V)·Rₑ + (D/V)·R_d·(1 − Tax)", note: "E/V and D/V = equity and debt weights, Rₑ and R_d = costs of equity and debt, Tax = corporate tax rate. The (1 − Tax) term captures the deductibility of interest." } },
          { kind: "example", example: { title: "computing WACC", prompt: "A firm is 60% equity and 40% debt. Its cost of equity is 12%, its pre-tax cost of debt is 6%, and the tax rate is 25%. What is its WACC?", steps: ["Equity component: 0.60 × 12% = 7.2%.", "Debt component (after tax): 0.40 × 6% × (1 − 0.25) = 0.40 × 4.5% = 1.8%.", "Add them: 7.2% + 1.8% = 9.0%."], answer: "WACC = 9.0%. This is the hurdle rate every new project must clear to create value." } },
          { kind: "p", text: "As a firm adds debt, the cheaper financing initially pulls WACC down. But beyond some point the rising probability of financial distress makes both debtholders and shareholders demand higher returns, and WACC turns back up. The result is a U-shaped WACC curve with a minimum at the optimal capital structure — the debt ratio that minimizes the cost of capital and therefore maximizes firm value. Because WACC is the hurdle rate, the same project returning 9% creates value for a firm with a 7% WACC and destroys it for a firm with an 11% WACC — which is why two companies can rationally make opposite decisions about the identical opportunity." },
          { kind: "figure", figure: { caption: "Figure 2 — The cost of capital as leverage rises. Cheap after-tax debt initially lowers WACC, but mounting financial-distress risk eventually lifts the cost of both debt and equity, so WACC is U-shaped. Its minimum marks the optimal capital structure.", alt: "Cost of equity and after-tax cost of debt rising with leverage and a U-shaped WACC curve with a minimum", svg: `<svg viewBox="0 0 460 240" width="100%" style="max-width:460px"><line x1="62" y1="25" x2="62" y2="200" stroke="var(--border-strong)" stroke-width="1"/><line x1="62" y1="200" x2="435" y2="200" stroke="var(--border-strong)" stroke-width="1"/><path d="M70,92 C200,82 300,66 425,40" fill="none" stroke="var(--ats-red)" stroke-width="2"/><path d="M70,172 C200,166 320,156 425,116" fill="none" stroke="var(--ats-green)" stroke-width="2"/><path d="M70,104 C170,134 240,140 290,138 C350,135 405,104 425,86" fill="none" stroke="var(--primary)" stroke-width="2.5"/><line x1="285" y1="138" x2="285" y2="200" stroke="var(--border)" stroke-dasharray="3 3"/><circle cx="285" cy="138" r="4" fill="var(--primary)"/><text x="285" y="216" text-anchor="middle" font-size="9" fill="var(--primary)" font-weight="600">optimal</text><text x="320" y="36" font-size="9.5" fill="var(--ats-red)" font-weight="600">Cost of equity</text><text x="300" y="150" font-size="9.5" fill="var(--ats-green)" font-weight="600">After-tax debt</text><text x="120" y="120" font-size="9.5" fill="var(--primary)" font-weight="600">WACC</text><text x="248" y="232" text-anchor="middle" font-size="10" fill="var(--text-muted)">debt ratio (D/V) →</text><text x="20" y="112" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 20 112)">cost →</text></svg>` } },
        ],
      },
      {
        heading: "Leverage: operating and financial",
        blocks: [
          { kind: "p", text: "Leverage, in both its forms, amplifies outcomes. Operating leverage arises from fixed operating costs: a firm with high fixed costs (a factory, an airline) sees profit swing sharply with sales, because once fixed costs are covered, each additional sale drops heavily to the bottom line — and each lost sale is just as painful. Financial leverage arises from fixed financing costs (debt): borrowing magnifies the return on shareholders' equity when results are good and magnifies the losses when they are not." },
          { kind: "p", text: "Both forms raise the variability of earnings and therefore risk. A firm carrying high operating AND high financial leverage is a high-beta proposition — spectacular in a boom, fragile in a downturn — because a small dip in sales is amplified twice on its way to the bottom line. Reading a company's combined leverage tells you how violently its earnings will react as the economy turns, which is central to both equity valuation and credit risk assessment." },
          { kind: "callout", label: "Two amplifiers in series", body: "Operating leverage magnifies how sales swings hit operating profit; financial leverage then magnifies how operating profit swings hit net income. High levels of both make earnings extremely sensitive to the business cycle." },
        ],
      },
    ],
    keyTerms: [
      { term: "Net present value (NPV)", def: "Present value of a project's cash flows minus its cost; accept when positive. Measures value created in dollars." },
      { term: "Internal rate of return (IRR)", def: "The discount rate that sets NPV to zero; a project adds value when the cost of capital is below it. Can mislead for mutually exclusive or unconventional projects." },
      { term: "WACC", def: "The blended after-tax cost of a firm's debt and equity; the hurdle rate for new projects. (E/V)·Rₑ + (D/V)·R_d·(1−Tax)." },
      { term: "Optimal capital structure", def: "The debt ratio that minimizes WACC (and maximizes firm value), at the bottom of the U-shaped WACC curve." },
      { term: "Operating leverage", def: "Sensitivity of operating profit to sales, driven by fixed operating costs." },
      { term: "Financial leverage", def: "Use of fixed-cost debt that magnifies returns and losses to shareholders." },
    ],
    takeaways: [
      "Accept projects with positive NPV; the NPV profile crosses zero at the IRR, so a project adds value whenever WACC is below the IRR. When NPV and IRR conflict, trust NPV.",
      "WACC = (E/V)·Rₑ + (D/V)·R_d·(1−Tax) is the hurdle rate — the same project can be good for one firm and bad for another.",
      "Cheap after-tax debt lowers WACC at first, but distress risk makes it U-shaped; its minimum is the optimal capital structure.",
      "High operating + financial leverage means earnings amplified twice — high volatility and high risk through the cycle.",
    ],
  },

  // 7. EQUITY
  {
    id: "cfa-equity",
    examSlug: "cfa",
    topicId: "equity",
    topicName: "Equity Investments",
    title: "Equity Investments: Market Efficiency and Valuation",
    readingMinutes: 19,
    summary: "How markets and indexes are built, what the three forms of market efficiency imply for analysis, and the dividend-discount and multiples approaches to valuing a share — diagrammed and worked through.",
    intro:
      "Equity is the asset class most investors picture first — stocks, indexes, and the daily drama of prices. The Level I material builds in a deliberate arc: from how markets and benchmarks are constructed, to the deep and contested question of how fully prices already reflect information, to the foundational models for estimating what a share is genuinely worth. The valuation tools introduced here are intentionally simple, but the reasoning behind them — discount the cash flows, respect the assumptions — carries all the way through the rest of the curriculum.",
    sections: [
      {
        heading: "Markets and the construction of indexes",
        blocks: [
          { kind: "p", text: "Securities are issued in the primary market (a company raising capital, as in an IPO) and thereafter change hands in the secondary market (investors trading with one another, which provides the liquidity and price discovery the primary market depends on). Indexes such as the S&P 500 track baskets of securities and serve as the benchmarks against which portfolios and managers are judged." },
          { kind: "p", text: "How an index is weighted is not a technicality — it changes what the index actually measures. The dominant method, market-capitalization weighting, gives each company influence proportional to its total market value, so mega-caps dominate and the index reflects where the market's money actually sits. Price weighting (used by the Dow) instead weights by share price, an accident of how many shares a company has issued rather than its economic size. Equal weighting gives every constituent the same stake and must be periodically rebalanced. The same constituents under different schemes can produce materially different returns, so an analyst must know exactly what a benchmark measures before comparing anything to it." },
          { kind: "table", table: { caption: "Table 1 — Index weighting schemes. The choice determines which companies drive the index's behaviour.", headers: ["Scheme", "Influence driven by", "Example"], rows: [["Market-cap weighted", "Total company market value", "S&P 500"], ["Price weighted", "Share price (not size)", "Dow Jones Industrial Average"], ["Equal weighted", "Equal stake in each, rebalanced", "S&P 500 Equal Weight"]] } },
        ],
      },
      {
        heading: "Market efficiency: how much is already in the price?",
        blocks: [
          { kind: "p", text: "The efficient market hypothesis (EMH) asks how fully security prices already reflect available information, and it is best understood as three nested levels, each encompassing the one before. Weak-form efficiency holds that prices reflect all past price and volume data — which, if true, means technical analysis (chart patterns, momentum signals) cannot consistently generate excess returns. Semi-strong-form efficiency holds that prices reflect all publicly available information — financial statements, news, analyst reports — so fundamental analysis of public data cannot consistently beat the market, and prices adjust almost instantly to new public information. Strong-form efficiency holds that prices reflect all information, public and private, implying that not even insiders could profit — a claim almost no one accepts, since insider trading is demonstrably profitable, which is precisely why it is illegal." },
          { kind: "figure", figure: { caption: "Figure 1 — The three forms of market efficiency are nested: each stronger form contains the information of the weaker ones and adds more. Weak reflects past prices; semi-strong adds all public information; strong adds private information.", alt: "Three nested circles labelled weak, semi-strong, and strong form efficiency, each containing the previous", svg: `<svg viewBox="0 0 460 240" width="100%" style="max-width:460px"><circle cx="148" cy="120" r="98" fill="rgba(83,74,183,0.06)" stroke="var(--primary)" stroke-width="1.5"/><circle cx="148" cy="120" r="66" fill="rgba(83,74,183,0.10)" stroke="var(--primary)" stroke-width="1.5"/><circle cx="148" cy="120" r="34" fill="rgba(83,74,183,0.18)" stroke="var(--primary)" stroke-width="1.5"/><text x="148" y="123" text-anchor="middle" font-size="10" font-weight="700" fill="var(--primary)">Weak</text><text x="148" y="68" text-anchor="middle" font-size="10" font-weight="600" fill="var(--primary)">Semi-strong</text><text x="148" y="34" text-anchor="middle" font-size="10" font-weight="600" fill="var(--primary)">Strong</text><text x="270" y="40" font-size="10" font-weight="600" fill="var(--text-primary)">Strong: + private info</text><text x="270" y="56" font-size="9" fill="var(--text-muted)">(beats even insiders — rejected)</text><text x="270" y="112" font-size="10" font-weight="600" fill="var(--text-primary)">Semi-strong: all public info</text><text x="270" y="128" font-size="9" fill="var(--text-muted)">(beats fundamental analysis)</text><text x="270" y="184" font-size="10" font-weight="600" fill="var(--text-primary)">Weak: past prices &amp; volume</text><text x="270" y="200" font-size="9" fill="var(--text-muted)">(beats technical analysis)</text></svg>` } },
          { kind: "p", text: "In practice, efficiency is a spectrum rather than a switch. Developed, liquid markets are efficient enough that beating them consistently after fees is genuinely difficult, yet documented anomalies and behavioural biases leave pockets of opportunity. The operational takeaway is a default and a burden of proof: assume prices are roughly fair, and place the burden on the active manager to demonstrate they can add value net of costs. This single idea is the intellectual foundation of the entire low-cost index-fund industry." },
          { kind: "callout", label: "Which analysis each form defeats", body: "Weak form defeats technical analysis (past prices). Semi-strong defeats fundamental analysis of public data (and is the level most debated for real markets). Strong form would defeat even insider information — and is rejected by the evidence." },
        ],
      },
      {
        heading: "Valuing a share: the dividend discount model",
        blocks: [
          { kind: "p", text: "If a share is a claim on a future stream of cash returned to owners, its intrinsic value is the present value of that stream. The dividend discount model (DDM) makes this concrete by valuing a stock as the present value of all its expected future dividends. Its most-used closed form, the Gordon growth model, assumes dividends grow at a constant rate forever and collapses the infinite sum into a single elegant expression: value equals next year's dividend divided by the required return minus the growth rate." },
          { kind: "formula", formula: { label: "Gordon growth (constant-growth DDM)", expr: "V₀ = D₁ ÷ (r − g)", note: "D₁ = next year's dividend, r = required return, g = constant dividend growth rate. Valid only when g < r." } },
          { kind: "example", example: { title: "Gordon growth valuation", prompt: "A stock will pay a $2.00 dividend next year, dividends are expected to grow 3% per year forever, and investors require an 8% return. What is the stock worth today?", steps: ["Apply V₀ = D₁ ÷ (r − g).", "= 2.00 ÷ (0.08 − 0.03).", "= 2.00 ÷ 0.05."], answer: "$40.00 per share. Notice that if growth were instead 5%, value would jump to 2 ÷ 0.03 = $66.67 — a 3-point change in g moved value by two-thirds." } },
          { kind: "p", text: "That last observation is the model's great danger as well as its insight. Because growth sits in the denominator, the valuation is hypersensitive to the assumed growth rate and required return: as g creeps toward r, the denominator shrinks toward zero and the value explodes toward infinity. And if g is assumed to equal or exceed r, the model breaks down entirely, returning a negative or infinite value — a mathematical signal that no company can grow its dividends faster than its cost of capital forever. The Gordon model is therefore best reserved for stable, mature, dividend-paying firms whose growth is genuinely modest and durable." },
          { kind: "figure", figure: { caption: "Figure 2 — Gordon-model value as a function of the growth rate g, holding the required return r fixed. Value rises gently at first, then explodes as g approaches r — which is why small changes in the growth assumption swing the valuation so violently, and why the model is unusable once g ≥ r.", alt: "Curve of intrinsic value rising steeply toward a vertical asymptote as the growth rate approaches the required return", svg: `<svg viewBox="0 0 460 250" width="100%" style="max-width:460px"><line x1="60" y1="25" x2="60" y2="220" stroke="var(--border-strong)" stroke-width="1"/><line x1="60" y1="220" x2="435" y2="220" stroke="var(--border-strong)" stroke-width="1"/><line x1="410" y1="30" x2="410" y2="220" stroke="var(--ats-red)" stroke-dasharray="4 3" stroke-width="1.3"/><path d="M62,206 C200,198 320,178 390,90 C400,76 406,55 408,34" fill="none" stroke="var(--primary)" stroke-width="2.5"/><text x="410" y="232" text-anchor="middle" font-size="10" fill="var(--ats-red)" font-weight="600">g = r</text><text x="300" y="70" font-size="10" fill="var(--primary)" font-weight="600">value → ∞ as g → r</text><text x="245" y="246" text-anchor="middle" font-size="10" fill="var(--text-muted)">growth rate g →</text><text x="20" y="125" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 20 125)">intrinsic value →</text></svg>` } },
          { kind: "p", text: "Because many firms pay no dividends and because long-run forecasts are fragile, analysts lean heavily on relative valuation — multiples, above all the price-to-earnings (P/E) ratio. A P/E states how many dollars investors will pay per dollar of earnings; comparing a company's multiple to its peers and to its own history is a fast read on whether the market views it as cheap or expensive. Multiples are intuitive and quick, but they are only as trustworthy as the comparability of the companies and the quality of the earnings beneath them — a low P/E on inflated or unsustainable earnings is a value trap, not a bargain." },
        ],
      },
    ],
    keyTerms: [
      { term: "Primary vs secondary market", def: "Where securities are first issued (primary) versus where investors subsequently trade them (secondary), which provides liquidity and price discovery." },
      { term: "Efficient market hypothesis", def: "The theory that prices reflect available information, in nested weak, semi-strong, and strong forms." },
      { term: "Dividend discount model", def: "Values a stock as the present value of its expected future dividends." },
      { term: "Gordon growth model", def: "Constant-growth DDM: V₀ = D₁ / (r − g); hypersensitive to r and g and invalid when g ≥ r." },
      { term: "Price-to-earnings (P/E)", def: "Price per share ÷ earnings per share; a relative-valuation multiple, only as good as earnings quality and comparability." },
      { term: "Market-cap weighting", def: "Index weighting by total company value; the most common scheme, dominated by the largest firms." },
    ],
    takeaways: [
      "Weak / semi-strong / strong efficiency are nested and defeat technical / public-fundamental / all analysis respectively; the default is that prices are roughly fair.",
      "Gordon growth value = D₁ ÷ (r − g); it is hypersensitive to the inputs and breaks down when g ≥ r, so reserve it for stable dividend payers.",
      "P/E and other multiples are fast but depend entirely on comparability and earnings quality — beware the low-multiple value trap.",
      "Always know how a benchmark index is weighted (cap, price, or equal) before judging performance against it.",
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
    summary: "What derivatives are, how no-arbitrage pins down forward prices, and how option payoffs work — with payoff diagrams and a worked example.",
    intro:
      "A derivative is a contract whose value is derived from an underlying asset — a stock, bond, commodity, interest rate, or index. Derivatives let investors hedge a risk they don't want, take a leveraged view they do want, or exploit a mispricing. What makes the whole field tractable is a single, powerful organizing principle: no-arbitrage. If two combinations of instruments deliver exactly the same future payoff, they must cost the same today — otherwise a trader could buy the cheap one, sell the dear one, and pocket a riskless profit. Level I emphasizes this intuition and the geometry of payoffs rather than heavy mathematics, and the payoff diagrams below are the fastest way to internalize it.",
    sections: [
      {
        heading: "Forwards, futures, and swaps",
        blocks: [
          { kind: "p", text: "A forward contract locks in today a price for a transaction that will occur in the future. It is privately negotiated and fully customizable, traded over the counter — which means it carries counterparty risk, the danger that the other side fails to perform. A futures contract is the standardized, exchange-traded cousin of the forward: a clearinghouse stands between the two parties and daily mark-to-market settlement (gains and losses exchanged each day) largely eliminates counterparty risk. A swap is, in effect, a bundle of forwards — an agreement to exchange a series of cash flows over time, the most common being a trade of a floating interest rate for a fixed one." },
          { kind: "p", text: "All of these are priced by the cost-of-carry principle. The fair forward price is simply today's spot price carried forward at the risk-free rate, adjusted for any cash flows the asset throws off or costs to hold it: subtract income such as dividends (which the forward holder forgoes) and add storage or carrying costs. If the quoted forward price departed from this level, an arbitrageur could trade the spot and the forward against each other for a riskless gain — and that very arbitrage is what forces the forward price back into line." },
          { kind: "formula", formula: { label: "No-arbitrage forward price", expr: "F₀ = S₀ × (1 + r)ᵀ − (income) + (carrying costs)", note: "S₀ = spot price, r = risk-free rate, T = time to delivery. Deviations are competed away by arbitrage." } },
          { kind: "callout", label: "Forwards vs futures", body: "Forwards: customizable, OTC, counterparty risk, settle at expiry. Futures: standardized, exchange-traded, daily mark-to-market through a clearinghouse, counterparty risk largely removed. Both obey the same cost-of-carry pricing." },
        ],
      },
      {
        heading: "Options and the geometry of payoffs",
        blocks: [
          { kind: "p", text: "An option gives its holder the right, but not the obligation, to buy (a call) or to sell (a put) the underlying at a fixed strike price. The buyer pays a premium up front for that right; the seller, or writer, collects the premium and takes on the corresponding obligation if the buyer exercises. A call gains value as the underlying rises above the strike; a put gains value as the underlying falls below it. The defining feature of a long option is asymmetry: the buyer's loss is capped at the premium paid, while the potential gain can be large. That asymmetry — limited downside, open-ended upside — is exactly what makes options so useful for both hedging and speculation." },
          { kind: "figure", figure: { caption: "Figure 1 — Profit at expiration for a long call and a long put, against the underlying price. Each is flat at minus the premium where the option finishes worthless, then moves one-for-one once in the money. The call profits as the price rises above the strike K; the put profits as it falls below K. Breakeven is K plus the premium (call) or K minus the premium (put).", alt: "Two hockey-stick profit lines: a long call rising to the right of the strike and a long put rising to the left", svg: `<svg viewBox="0 0 460 250" width="100%" style="max-width:460px"><line x1="50" y1="140" x2="430" y2="140" stroke="var(--border-strong)" stroke-width="1"/><line x1="240" y1="40" x2="240" y2="210" stroke="var(--border)" stroke-dasharray="4 3"/><polyline fill="none" stroke="var(--ats-green)" stroke-width="2.5" points="60,176 240,176 430,62"/><polyline fill="none" stroke="var(--ats-red)" stroke-width="2.5" points="60,72 240,176 430,176"/><text x="240" y="226" text-anchor="middle" font-size="10" fill="var(--text-muted)">strike K</text><text x="60" y="135" font-size="9" fill="var(--text-muted)">profit 0</text><text x="408" y="56" text-anchor="end" font-size="10" fill="var(--ats-green)" font-weight="600">Long call</text><text x="78" y="66" font-size="10" fill="var(--ats-red)" font-weight="600">Long put</text><text x="245" y="190" font-size="9" fill="var(--text-muted)">−premium</text><text x="248" y="247" text-anchor="middle" font-size="10" fill="var(--text-muted)">underlying price at expiration →</text></svg>` } },
          { kind: "p", text: "An option's premium splits into two parts. Intrinsic value is how far in-the-money the option is right now — the immediate exercise value, never negative. Time value is everything beyond that: the market's price for the chance the option moves further into the money before expiration. Time value erodes as expiration approaches (time decay) and is larger when the underlying is more volatile. Higher volatility helps the option holder precisely because the downside is already capped at the premium: a wider range of possible outcomes adds valuable upside scenarios without adding to the loss." },
          { kind: "example", example: { title: "long call payoff and breakeven", prompt: "An investor buys a call with a $50 strike for a $4 premium. What is the breakeven price, and the profit if the stock finishes at $60?", steps: ["Breakeven = strike + premium = 50 + 4 = $54 (the stock must clear the strike by the premium).", "At $60, intrinsic value = 60 − 50 = $10 per share.", "Profit = intrinsic value − premium = 10 − 4 = $6 per share (×100 = $600 per contract)."], answer: "Breakeven $54; profit at $60 is $6 per share. Maximum loss remains the $4 premium, no matter how far the stock falls." } },
          { kind: "figure", figure: { caption: "Figure 2 — The buyer–writer mirror for a call. The long call's loss is capped at the premium while its gain is open-ended; the short call (writer) is the exact reflection — gain capped at the premium received, loss potentially unlimited. Every option is a zero-sum transfer between these two payoff lines.", alt: "Long call and short call profit lines mirrored about the horizontal axis showing capped loss versus unlimited loss", svg: `<svg viewBox="0 0 460 240" width="100%" style="max-width:460px"><line x1="50" y1="130" x2="430" y2="130" stroke="var(--border-strong)" stroke-width="1"/><line x1="230" y1="35" x2="230" y2="205" stroke="var(--border)" stroke-dasharray="4 3"/><polyline fill="none" stroke="var(--ats-green)" stroke-width="2.5" points="60,162 230,162 425,58"/><polyline fill="none" stroke="var(--ats-red)" stroke-width="2.5" points="60,98 230,98 425,202"/><text x="230" y="222" text-anchor="middle" font-size="10" fill="var(--text-muted)">strike K</text><text x="404" y="52" text-anchor="end" font-size="10" fill="var(--ats-green)" font-weight="600">Long call (buyer)</text><text x="404" y="198" text-anchor="end" font-size="10" fill="var(--ats-red)" font-weight="600">Short call (writer)</text><text x="70" y="156" font-size="9" fill="var(--ats-green)">loss capped at premium</text><text x="70" y="112" font-size="9" fill="var(--ats-red)">gain capped; loss unlimited</text></svg>` } },
        ],
      },
      {
        heading: "Put-call parity: the toolkit ties together",
        blocks: [
          { kind: "p", text: "Put-call parity is the elegant no-arbitrage identity that links calls, puts, the underlying, and a risk-free bond. It states that holding a call plus a bond that pays the strike at expiration produces exactly the same payoff as holding a put plus the underlying share. Because the two combinations deliver identical payoffs in every future state of the world, no-arbitrage forces them to cost the same today. Parity is a favourite exam topic because it means any one of the four instruments can be synthesized from the other three — you can build a synthetic call, a synthetic share, or a synthetic bond — and because it reveals that calls and puts are two faces of the same underlying economics." },
          { kind: "formula", formula: { label: "Put-call parity", expr: "Call + PV(strike bond)  =  Put + Underlying", note: "Identical payoffs at expiration force identical prices today. Rearranging it manufactures synthetic positions in any single instrument." } },
        ],
      },
    ],
    keyTerms: [
      { term: "Forward contract", def: "A customizable OTC agreement to transact at a set price on a future date; carries counterparty risk and settles at expiry." },
      { term: "Futures contract", def: "A standardized, exchange-traded forward with daily mark-to-market through a clearinghouse, largely removing counterparty risk." },
      { term: "Cost of carry", def: "The pricing rule for forwards: spot carried at the risk-free rate, less income, plus carrying costs." },
      { term: "Call / Put option", def: "The right (not obligation) to buy (call) or sell (put) the underlying at the strike; the buyer's loss is capped at the premium." },
      { term: "Intrinsic vs time value", def: "Intrinsic value = immediate exercise value; time value = the rest of the premium, larger with volatility and decaying toward expiration." },
      { term: "Put-call parity", def: "Call + PV(strike) bond = Put + underlying; equal payoffs force equal prices and allow synthetic positions." },
    ],
    takeaways: [
      "Forwards are customizable OTC contracts with counterparty risk; futures standardize and clear it away via daily mark-to-market.",
      "Forward prices follow cost-of-carry: spot carried at the risk-free rate, minus income, plus carrying costs — enforced by arbitrage.",
      "A long option's loss is capped at the premium with open-ended upside; long-call breakeven = strike + premium, long-put = strike − premium.",
      "Premium = intrinsic value + time value; higher volatility raises time value because the holder's downside is already capped.",
      "Put-call parity (call + bond = put + underlying) ties the toolkit together and lets you build synthetic positions.",
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
    summary: "Why diversification splits risk into the rewarded and the unrewarded, how the efficient frontier and CAPM price it, and how an IPS turns goals into a plan — fully diagrammed.",
    intro:
      "Portfolio management is where the whole curriculum converges: the question is no longer what a single security is worth, but how securities combine into a portfolio that genuinely fits an investor. Three ideas in this topic are among the most consequential in all of finance — that diversification separates risk into a part you are paid to bear and a part you are not, that an efficient frontier defines the best possible trade-offs, and that the Capital Asset Pricing Model prices risk with a single number. The topic closes with the investment policy statement, the document that translates a real person's situation into an executable plan. The figures below carry most of the argument.",
    sections: [
      {
        heading: "Diversification splits risk in two",
        blocks: [
          { kind: "p", text: "Modern portfolio theory begins with a near-magical observation: combining assets that do not move in perfect lockstep reduces a portfolio's risk without necessarily reducing its expected return. The lower the correlation between holdings, the larger this benefit, because a bad outcome in one position is partly offset by an unrelated outcome in another. As you add more imperfectly correlated securities, the portfolio's total risk falls — but it does not fall to zero. It approaches a floor." },
          { kind: "p", text: "That floor is what makes the idea so important, because it divides total risk into two fundamentally different kinds. Unsystematic risk (also called specific or diversifiable risk) is unique to a single company or industry — a product recall, a lawsuit, a failed drug trial — and it can be diversified away almost entirely by holding enough names. Systematic risk (market risk) is the part that moves all assets together — recessions, interest-rate shocks, wars — and no amount of diversification can remove it, because it is the risk of being in the market at all." },
          { kind: "figure", figure: { caption: "Figure 1 — As the number of securities rises, portfolio risk falls toward a floor. The portion eliminated is unsystematic (diversifiable) risk; the irreducible floor is systematic (market) risk. Most of the benefit is captured within the first 20–30 well-chosen names.", alt: "Curve of portfolio risk decreasing as the number of securities increases, flattening at a systematic-risk floor", svg: `<svg viewBox="0 0 460 240" width="100%" style="max-width:460px"><line x1="55" y1="25" x2="55" y2="200" stroke="var(--border-strong)" stroke-width="1"/><line x1="55" y1="200" x2="435" y2="200" stroke="var(--border-strong)" stroke-width="1"/><line x1="55" y1="158" x2="435" y2="158" stroke="var(--ats-red)" stroke-dasharray="4 3" stroke-width="1.2"/><path d="M62,52 C120,120 200,150 435,160" fill="none" stroke="var(--primary)" stroke-width="2.5"/><text x="250" y="100" text-anchor="middle" font-size="10" fill="var(--text-secondary)">unsystematic risk</text><text x="250" y="114" text-anchor="middle" font-size="9" fill="var(--text-muted)">(diversifiable)</text><text x="250" y="184" text-anchor="middle" font-size="10" fill="var(--ats-red)" font-weight="600">systematic (market) risk</text><text x="245" y="226" text-anchor="middle" font-size="10" fill="var(--text-muted)">number of securities →</text><text x="18" y="112" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 18 112)">portfolio risk →</text></svg>` } },
          { kind: "callout", label: "Why only one kind is rewarded", body: "Because unsystematic risk can be eliminated for free through diversification, the market refuses to pay a premium for bearing it. Only systematic risk — which no one can escape — earns an expected return premium. This single principle drives the entire CAPM that follows." },
        ],
      },
      {
        heading: "The efficient frontier and the capital allocation line",
        blocks: [
          { kind: "p", text: "If we plot every possible portfolio of risky assets on a graph of expected return against risk (standard deviation), the best of them trace out the efficient frontier — the upper edge of the achievable region, offering the highest expected return for each level of risk. No rational investor would ever hold a portfolio below this frontier, because a better one with the same risk exists directly above it. Where on the frontier an investor sits is purely a matter of their risk tolerance." },
          { kind: "p", text: "Introducing a risk-free asset transforms the picture. An investor can now split money between the risk-free asset and one particular risky portfolio — the tangency portfolio where a straight line from the risk-free rate just touches the frontier. That straight line, the capital allocation line, dominates the curved frontier itself: every point on it offers a better risk-return trade-off than the frontier below it. The remarkable conclusion is that all investors, regardless of risk appetite, should hold the same optimal risky portfolio and simply vary how much they pair it with the risk-free asset — aggressive investors tilt toward the risky portfolio, cautious ones toward the risk-free asset." },
          { kind: "figure", figure: { caption: "Figure 2 — The efficient frontier (curved) and the capital allocation line (straight). Combining the risk-free asset with the tangency 'market' portfolio produces the straight line, which offers superior trade-offs to the curved frontier. Investors choose a point along it according to risk tolerance.", alt: "Efficient frontier curve with a capital allocation line drawn from the risk-free rate tangent to the market portfolio", svg: `<svg viewBox="0 0 460 250" width="100%" style="max-width:460px"><line x1="55" y1="25" x2="55" y2="210" stroke="var(--border-strong)" stroke-width="1"/><line x1="55" y1="210" x2="435" y2="210" stroke="var(--border-strong)" stroke-width="1"/><path d="M120,196 C140,150 175,118 250,96 C320,76 380,66 410,60" fill="none" stroke="var(--text-muted)" stroke-width="2"/><line x1="55" y1="178" x2="400" y2="50" stroke="var(--primary)" stroke-width="2.5"/><circle cx="55" cy="178" r="4" fill="var(--ats-green)"/><circle cx="250" cy="105" r="4.5" fill="var(--primary)"/><text x="50" y="174" text-anchor="end" font-size="10" fill="var(--ats-green)" font-weight="600">Rf</text><text x="258" y="100" font-size="10" fill="var(--primary)" font-weight="600">Market portfolio</text><text x="300" y="150" font-size="10" fill="var(--text-muted)">Efficient frontier</text><text x="120" y="120" font-size="10" fill="var(--primary)" font-weight="600">Capital allocation line</text><text x="245" y="236" text-anchor="middle" font-size="10" fill="var(--text-muted)">risk (standard deviation) →</text><text x="18" y="118" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 18 118)">expected return →</text></svg>` } },
        ],
      },
      {
        heading: "The CAPM and the security market line",
        blocks: [
          { kind: "p", text: "If only systematic risk is rewarded, we need a way to measure how much systematic risk a single asset carries. That measure is beta: the sensitivity of an asset's returns to the market's returns. A beta of 1 means the asset moves one-for-one with the market; above 1 amplifies market swings (a high-beta cyclical), below 1 dampens them (a defensive utility); the market itself has a beta of exactly 1. Beta, not total volatility, is what matters, because the firm-specific part of an asset's volatility washes out in a diversified portfolio." },
          { kind: "p", text: "The Capital Asset Pricing Model assembles these pieces into a single pricing equation: an asset's expected return equals the risk-free rate plus its beta times the market risk premium (the market's expected return above the risk-free rate). Plotted with beta on the horizontal axis and expected return on the vertical, this traces the security market line — a straight line starting at the risk-free rate and sloping upward at the market risk premium. Every fairly priced asset lies on this line; an asset plotting above it is offering more return than its systematic risk warrants (undervalued), and one below it offers too little (overvalued)." },
          { kind: "figure", figure: { caption: "Figure 3 — The security market line (CAPM). Expected return rises linearly with beta, starting from the risk-free rate Rf and sloping upward by the market risk premium. The market portfolio sits at beta = 1; assets above the line are underpriced, below it overpriced.", alt: "Security market line rising linearly from the risk-free rate, with the market portfolio at beta one", svg: `<svg viewBox="0 0 460 235" width="100%" style="max-width:460px"><line x1="58" y1="25" x2="58" y2="195" stroke="var(--border-strong)" stroke-width="1"/><line x1="58" y1="195" x2="435" y2="195" stroke="var(--border-strong)" stroke-width="1"/><line x1="58" y1="168" x2="420" y2="52" stroke="var(--primary)" stroke-width="2.5"/><circle cx="58" cy="168" r="4" fill="var(--ats-green)"/><circle cx="240" cy="110" r="4.5" fill="var(--primary)"/><line x1="240" y1="110" x2="240" y2="195" stroke="var(--border)" stroke-dasharray="3 3"/><text x="52" y="164" text-anchor="end" font-size="10" fill="var(--ats-green)" font-weight="600">Rf</text><text x="240" y="210" text-anchor="middle" font-size="10" fill="var(--text-muted)">β = 1</text><text x="420" y="212" text-anchor="middle" font-size="10" fill="var(--text-muted)">β = 2</text><text x="248" y="104" font-size="10" fill="var(--primary)" font-weight="600">Market</text><text x="150" y="96" font-size="9" fill="var(--text-secondary)">slope = market risk premium</text><text x="245" y="228" text-anchor="middle" font-size="10" fill="var(--text-muted)">beta (β) →</text></svg>` } },
          { kind: "formula", formula: { label: "Capital Asset Pricing Model", expr: "E(R) = Rf + β × [ E(Rₘ) − Rf ]", note: "Rf = risk-free rate, β = systematic-risk sensitivity, E(Rₘ) − Rf = market risk premium." } },
          { kind: "example", example: { title: "CAPM expected return", prompt: "The risk-free rate is 3%, the market risk premium is 6%, and a stock has a beta of 1.5. What return should investors require?", steps: ["Apply E(R) = Rf + β × (market risk premium).", "= 3% + 1.5 × 6%.", "= 3% + 9% = 12%."], answer: "12%. A common error is forgetting to add Rf (giving 9%) or multiplying beta by the whole market return rather than the premium." } },
        ],
      },
      {
        heading: "The investment policy statement",
        blocks: [
          { kind: "p", text: "Theory becomes practice through the investment policy statement (IPS) — the foundational document of professional portfolio management. It records the investor's objectives (their return requirement and their risk tolerance) and their constraints, conventionally remembered as liquidity needs, time horizon, tax considerations, legal and regulatory factors, and any unique circumstances. The IPS converts a vague aspiration — 'I want to retire comfortably' — into an explicit, agreed-upon plan, and it serves as a behavioural anchor that protects both investor and manager from panicked, ad-hoc decisions when markets turn violent." },
          { kind: "p", text: "From the IPS flows asset allocation — the split among stocks, bonds, cash, and other asset classes — and this is where most of the value in portfolio management is actually created. Decades of research find that asset allocation, far more than individual security selection or market timing, drives the overwhelming majority of a portfolio's long-run variation in returns. Getting the allocation right, in genuine alignment with the investor's objectives and constraints, matters more than any single clever stock pick." },
          { kind: "callout", label: "Objectives vs constraints", body: "Objectives = return requirement + risk tolerance. Constraints = Liquidity, Time horizon, Taxes, Legal/regulatory, Unique circumstances. Keeping the two categories straight is a recurring Level I test point." },
        ],
      },
    ],
    keyTerms: [
      { term: "Systematic risk", def: "Market-wide, undiversifiable risk; the only risk that earns an expected return premium." },
      { term: "Unsystematic risk", def: "Firm- or industry-specific risk that diversification can eliminate, and which therefore earns no premium." },
      { term: "Efficient frontier", def: "The set of portfolios offering the highest expected return for each level of risk; the upper edge of the achievable region." },
      { term: "Capital allocation line", def: "The straight line from the risk-free rate through the tangency portfolio; it dominates the curved frontier." },
      { term: "Beta", def: "An asset's sensitivity to market movements — its measure of systematic risk in the CAPM (market beta = 1)." },
      { term: "Security market line / CAPM", def: "E(R) = Rf + β × market risk premium; the line on which fairly priced assets lie." },
      { term: "Investment policy statement (IPS)", def: "The document setting objectives (return, risk) and constraints (liquidity, horizon, taxes, legal, unique), guiding asset allocation." },
    ],
    takeaways: [
      "Diversification removes unsystematic risk but not systematic risk; only systematic risk earns a premium.",
      "The efficient frontier holds the best risk-return portfolios; adding a risk-free asset creates the capital allocation line, which dominates the frontier.",
      "Beta measures systematic risk; CAPM: E(R) = Rf + β × market risk premium, traced by the upward-sloping security market line.",
      "The IPS (objectives + constraints) drives asset allocation — the single biggest driver of long-run results.",
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
