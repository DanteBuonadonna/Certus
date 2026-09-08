// ============================================================
// Certus — CFA Level I Portfolio Construction + Derivatives, in depth
//
// WHY THIS FILE EXISTS
// Two of the largest remaining reading gaps after FRA: Portfolio
// Construction (9.8% weight, 21 of 118 minutes) and Derivatives and Risk
// Management (7.3%, 20 of 88).
//
// NOTE ON NAMES: CFA Institute's current table renames these topics —
// Portfolio Management is now Portfolio Construction, Derivatives is now
// Derivatives and Risk Management. The topicId keys stay "pm" and "deriv"
// so existing user progress carries over.
//
// EVERY NUMBER COMPUTED IN PYTHON FIRST. The diversification example was
// run at three correlations to show the effect is real rather than
// asserted, and put-call parity is demonstrated on a violation.
// ============================================================

import { Chapter, Question } from "./types";

export const pmDerivDeepChapters: Chapter[] = [
  // ==========================================================
  // PORTFOLIO CONSTRUCTION
  // ==========================================================
  {
    id: "cfa-l1-pm-risk-return",
    examSlug: "cfa",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Risk, Return, and Why Diversification Is Not Free Money",
    readingMinutes: 22,
    summary:
      "Portfolio return and risk computed properly, why correlation rather than count drives diversification, the efficient frontier, and what CAPM does and does not claim.",
    intro:
      "The central result of portfolio theory is that a portfolio's risk is not the average of its holdings' risks. Everything else in this reading follows from understanding exactly why — and the only way to see it properly is with the arithmetic in front of you.",
    sections: [
      {
        heading: "Return averages; risk does not",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Two-asset portfolio",
              expr: "E(Rp) = w₁R₁ + w₂R₂          σp² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ",
              note: "Return IS a weighted average. Risk is not, because of that third term — and ρ lives only there.",
            },
          },
          {
            kind: "example",
            example: {
              title: "The same two assets, three correlations",
              prompt:
                "60% in an asset returning 10% with 20% standard deviation, 40% in one returning 6% with 10% standard deviation. Compute portfolio risk at correlations of +1.0, +0.3 and −1.0.",
              steps: [
                "Expected return is 0.6(10%) + 0.4(6%) = 8.40% at EVERY correlation — ρ does not appear in the return equation.",
                "ρ = +1.0: σp² = (0.6×0.20)² + (0.4×0.10)² + 2(0.6)(0.4)(0.20)(0.10)(1.0) → σp = 16.00%.",
                "ρ = +0.3: the third term shrinks → σp = 13.74%.",
                "ρ = −1.0: the third term goes negative → σp = 8.00%.",
              ],
              answer:
                "Return is 8.40% in all three cases; risk falls from 16.00% to 13.74% to 8.00%. Note that 16.00% is exactly the weighted average of the two standard deviations — which shows the key result: a portfolio's risk equals the weighted average ONLY at perfect positive correlation, and is strictly lower at any correlation below +1. That reduction is the diversification benefit, and it is free in the sense that no return was given up to get it.",
            },
          },
          {
            kind: "callout",
            label: "It is correlation, not count",
            body: "Thirty stocks in one industry diversify far less than eight across unrelated industries. Adding holdings helps only to the extent they are imperfectly correlated, which is why diversification largely fails in a crisis: correlations converge toward one exactly when the benefit is most needed. The reduction is real but it is not insurance.",
          },
          {
            kind: "p",
            text: "Diversification removes UNSYSTEMATIC risk — the firm-specific component. It cannot remove SYSTEMATIC (market) risk, which is why the market compensates investors only for systematic risk. Bearing unsystematic risk earns nothing, because it was avoidable at no cost.",
          },
        ],
      },
      {
        heading: "The efficient frontier and the capital allocation line",
        blocks: [
          {
            kind: "p",
            text: "Plot every possible portfolio in risk-return space and the achievable set has an upper-left boundary. The efficient frontier is the set of portfolios offering the highest expected return for each level of risk; anything beneath it is dominated by something offering more return for the same risk.",
          },
          {
            kind: "figure",
            figure: {
              caption: "The efficient frontier, and the CAL that dominates it.",
              alt: "A curved frontier of risky portfolios with a straight line from the risk-free rate touching it at the tangency portfolio.",
              svg: `<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <line x1="55" y1="150" x2="430" y2="150" stroke="var(--border-strong)"/>
  <line x1="55" y1="20" x2="55" y2="150" stroke="var(--border-strong)"/>
  <text x="370" y="166" font-size="10" fill="var(--text-muted)">risk (σ) →</text>
  <text x="10" y="30" font-size="10" fill="var(--text-muted)">E(R)</text>
  <path d="M120,140 C150,70 240,42 400,30" fill="none" stroke="var(--primary)" stroke-width="2"/>
  <path d="M120,140 C140,148 170,152 220,152" fill="none" stroke="var(--text-muted)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="55" y1="128" x2="410" y2="34" stroke="var(--ats-green)" stroke-width="2"/>
  <circle cx="243" cy="55" r="4" fill="var(--ats-green)"/>
  <text x="252" y="52" font-size="10" fill="var(--ats-green)">tangency portfolio</text>
  <circle cx="55" cy="128" r="3.5" fill="var(--text-primary)"/>
  <text x="62" y="124" font-size="10" fill="var(--text-primary)">Rf</text>
  <text x="300" y="92" font-size="10" fill="var(--primary)">efficient frontier</text>
  <text x="120" y="164" font-size="9" fill="var(--text-muted)">dominated</text>
</svg>`,
            },
          },
          {
            kind: "p",
            text: "Introduce a risk-free asset and a straight line from it dominates the curved frontier everywhere except the single point of tangency. Every investor therefore holds the SAME risky portfolio — the tangency portfolio — and expresses risk tolerance purely by how much they hold in it versus the risk-free asset. That is the separation theorem, and it is why index funds exist as a coherent idea.",
          },
        ],
      },
      {
        heading: "CAPM and performance measurement",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "The capital asset pricing model",
              expr: "E(Ri) = Rf + βi × [ E(Rm) − Rf ]",
              note: "Beta measures SYSTEMATIC risk only. The market prices nothing else, because nothing else had to be borne.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Required return and risk-adjusted performance",
              prompt:
                "Risk-free rate 3%, expected market return 9%, beta 1.3. What return does CAPM require? Separately, a portfolio returned 11% with an 18% standard deviation — compute its Sharpe ratio.",
              steps: [
                "Market risk premium = 9% − 3% = 6%.",
                "E(R) = 3% + 1.3 × 6% = 3% + 7.8% = 10.80%.",
                "Sharpe = (11% − 3%) / 18% = 0.4444.",
              ],
              answer:
                "CAPM requires 10.80%. The Sharpe ratio is 0.44 — excess return per unit of TOTAL risk, which is the right measure when the portfolio is the investor's whole wealth. Use Treynor instead (dividing by beta) when it is one component of a larger diversified portfolio, because then only systematic risk should be priced.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Beta of 1 moves with the market; above 1 amplifies it; below 1 dampens it; negative moves against it.",
              "The security market line plots required return against BETA; the capital market line plots it against total risk.",
              "A security plotting above the SML is underpriced — it offers more than its systematic risk requires.",
              "CAPM's assumptions are heroic: homogeneous expectations, frictionless markets, unlimited risk-free borrowing. It remains useful as a benchmark rather than a description.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Correlation (ρ)", def: "Appears only in the risk equation, never the return equation." },
      { term: "Diversification benefit", def: "Portfolio risk below the weighted average; exists at any ρ < +1." },
      { term: "Unsystematic risk", def: "Firm-specific, diversifiable, and therefore uncompensated." },
      { term: "Systematic risk", def: "Market-wide, undiversifiable, and the only risk the market pays for." },
      { term: "Efficient frontier", def: "Highest expected return for each level of risk." },
      { term: "Tangency portfolio", def: "The one risky portfolio every investor holds once a risk-free asset exists." },
      { term: "Beta", def: "Sensitivity to market movements; the input CAPM prices." },
      { term: "Sharpe ratio", def: "Excess return per unit of TOTAL risk. Treynor uses beta instead." },
    ],
    takeaways: [
      "Return is a weighted average; risk is not, because of the correlation term.",
      "Portfolio risk equals the weighted average ONLY at ρ = +1, and is lower at every ρ below it.",
      "Correlation drives diversification, not the number of holdings.",
      "Correlations converge in a crisis, so diversification is a reduction and not insurance.",
      "Only systematic risk is compensated — unsystematic risk was avoidable for free.",
      "With a risk-free asset every investor holds the same risky portfolio and varies only the mix.",
      "Sharpe divides by total risk; Treynor divides by beta. Choose by the portfolio's role.",
    ],
  },

  // ==========================================================
  // DERIVATIVES AND RISK MANAGEMENT
  // ==========================================================
  {
    id: "cfa-l1-deriv-core",
    examSlug: "cfa",
    topicId: "deriv",
    topicName: "Derivatives",
    title: "Forwards, Futures, Options, and the Arbitrage That Prices Them",
    readingMinutes: 22,
    summary:
      "How forward prices are set by carry rather than forecast, the four basic option positions and their payoff profiles, and put-call parity demonstrated on a violation.",
    intro:
      "Derivatives are priced by ARBITRAGE, not by prediction. A forward price is not anyone's forecast of the future spot price — it is whatever rules out a riskless profit today. Once that idea lands, most of the syllabus becomes mechanical.",
    sections: [
      {
        heading: "Forwards and futures",
        blocks: [
          {
            kind: "p",
            text: "A forward commits both parties to trade an asset at a set price on a set date. Neither side pays anything at inception, which means the forward price must be set so the contract is worth zero to both — and that condition alone determines it.",
          },
          {
            kind: "formula",
            formula: {
              label: "Forward price by cost of carry",
              expr: "F₀(T) = S₀ × (1 + r)^T          with income:  F₀(T) = [ S₀ − PV(income) ] × (1 + r)^T",
              note: "Add storage costs; subtract any income or convenience yield the holder receives.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Carry, and what income does to it",
              prompt:
                "A stock trades at $100 and the one-year risk-free rate is 5%. Find the one-year forward price. Then find it again if the stock pays a $3 dividend in one year.",
              steps: [
                "No income: F = $100 × 1.05 = $105.00.",
                "With income, subtract its present value first: PV($3) = 3 / 1.05 = $2.8571.",
                "F = ($100 − $2.8571) × 1.05 = $102.00.",
              ],
              answer:
                "$105.00 and $102.00. The dividend lowers the forward price by exactly its future value — $3 — because the forward holder does NOT receive it while the spot holder does. Notice nobody forecast anything: the price is set purely by what it costs to carry the position, which is why arbitrage rather than opinion determines it.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "Forwards against futures",
              headers: ["Dimension", "Forward", "Future"],
              rows: [
                ["Where it trades", "Over the counter, customised", "Exchange, standardised"],
                ["Counterparty risk", "Borne by each party", "Novated to the clearinghouse"],
                ["Settlement of gains", "At maturity only", "Marked to market DAILY"],
                ["Liquidity", "Low; hard to exit", "High; offset by trading out"],
              ],
            },
          },
          {
            kind: "p",
            text: "Daily settlement is the substantive difference. A futures position generates cash flows before maturity, which introduces reinvestment effects a forward does not have, and requires margin to be maintained throughout. A trader can be right about direction and still be closed out by a margin call.",
          },
        ],
      },
      {
        heading: "Options: rights, not obligations",
        blocks: [
          {
            kind: "p",
            text: "An option buyer holds a RIGHT and pays a premium; the writer holds an OBLIGATION and receives it. That asymmetry produces the asymmetric payoffs, and it is why writing options has bounded gains and unbounded or near-unbounded losses.",
          },
          {
            kind: "example",
            example: {
              title: "Four positions at three prices",
              prompt:
                "A call and a put both have a $100 strike. The call costs $8, the put $5. Compute breakevens and the profit on each long position at expiration prices of $85, $100 and $115.",
              steps: [
                "Long call breakeven = strike + premium = $108. Maximum loss $8; gain unlimited.",
                "Long put breakeven = strike − premium = $95. Maximum loss $5; maximum gain $95 (if the stock goes to zero).",
                "At $85: call payoff $0, profit −$8. Put payoff $15, profit +$10.",
                "At $100: call payoff $0, profit −$8. Put payoff $0, profit −$5.",
                "At $115: call payoff $15, profit +$7. Put payoff $0, profit −$5.",
              ],
              answer:
                "Both options expire worthless at exactly $100, so both buyers lose their full premium — the single most common surprise for candidates, who expect the at-the-money case to break even. The writer's position is the mirror image of each of these: the short call loses $7 at $115 and keeps $8 at $85.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Moneyness: a call is in the money when S > K; a put when S < K.",
              "Option value = intrinsic value + time value, and time value decays to zero at expiration.",
              "Longer time to expiry and higher volatility both raise call AND put values — more time and more movement mean more chance of finishing in the money.",
              "A higher risk-free rate raises call values and lowers put values.",
              "American options may be exercised early; European only at expiry. That flexibility is never worth less than nothing.",
            ],
          },
        ],
      },
      {
        heading: "Put-call parity",
        blocks: [
          {
            kind: "p",
            text: "A call plus a risk-free bond maturing at the strike must be worth exactly the same as a put plus the underlying, because both combinations deliver an identical payoff in every possible state. If they trade at different prices, a riskless profit exists.",
          },
          {
            kind: "formula",
            formula: {
              label: "Put-call parity",
              expr: "c + K/(1 + r)^T = p + S₀",
              note: "Fiduciary call = protective put. Rearranged, it prices any one of the four from the other three.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Spotting the arbitrage",
              prompt:
                "S₀ = $100, K = $100, r = 5%, T = 1 year. The call trades at $8 and the put at $5. Is parity satisfied? If not, what should the put cost?",
              steps: [
                "Left side: c + K/(1+r)^T = $8 + $100/1.05 = $8 + $95.2381 = $103.2381.",
                "Right side: p + S₀ = $5 + $100 = $105.0000.",
                "They differ by $1.76, so parity is violated and the right side is expensive.",
                "Fair put = $103.2381 − $100 = $3.2381.",
              ],
              answer:
                "Parity is violated: the put is overpriced at $5 against a fair value of $3.24. An arbitrageur sells the expensive side — write the put and short the stock — and buys the cheap side — buy the call and lend $95.24 — locking in $1.76 today with no exposure at expiration. Real markets close gaps like this in seconds, which is precisely why parity holds in practice.",
            },
          },
          {
            kind: "callout",
            label: "What derivatives are actually for",
            body: "Derivatives transfer risk between parties who value it differently. They allow hedging, low-cost exposure, and price discovery where the underlying trades thinly. The criticisms are equally real: embedded leverage means small moves produce large losses, over-the-counter contracts carry counterparty risk, and complexity can hide exposure from the people governing it. Both sides are examinable.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Cost of carry", def: "Financing cost plus storage less income — what sets the forward price." },
      { term: "Mark to market", def: "Daily settlement of futures gains and losses; the substantive difference from a forward." },
      { term: "Novation", def: "The clearinghouse becoming counterparty to both sides, removing counterparty risk." },
      { term: "Intrinsic value", def: "What the option is worth if exercised now; never negative." },
      { term: "Time value", def: "The premium above intrinsic value; decays to zero at expiration." },
      { term: "Put-call parity", def: "c + K/(1+r)^T = p + S₀. A no-arbitrage identity." },
      { term: "Fiduciary call", def: "Long call plus a bond maturing at the strike; equivalent to a protective put." },
    ],
    takeaways: [
      "A forward price is set by carry, not by anyone's forecast of the spot price.",
      "Income lowers the forward price by exactly its future value, because the forward holder doesn't receive it.",
      "Daily settlement is the real forward-versus-future difference — and it can close you out even when you're right.",
      "At-the-money at expiration both options expire worthless; the buyer loses the whole premium.",
      "More time and more volatility raise BOTH call and put values.",
      "Put-call parity is an identity; a violation is a riskless profit, which is why it holds in practice.",
      "Derivatives transfer risk — the embedded leverage and counterparty exposure are the real costs.",
    ],
  },
];

export const pmDerivDeepQuestions: Question[] = [];
