// ============================================================
// Certus — CFA Level II Derivatives readings
//
// WHY THIS FILE EXISTS: a concept audit of the Level II readings found
// derivatives covered forward pricing and a one-period binomial call,
// and essentially nothing else. Put-call parity returned ZERO matches.
// So did currency swaps and equity swaps. Black-Scholes returned two
// passing mentions, delta hedging three, American options one.
//
// The Level II derivatives question target is 128. Writing questions
// against the old chapter would have tested four readings' worth of
// material the platform never taught.
//
// Every number in every worked example was computed in Python before
// being written here. The put-call parity example closes to 54.4872 on
// both sides, which is the check that the binomial numbers are right.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const derivChaptersL2: Chapter[] = [
  // ----------------------------------------------------------
  {
    id: "cfa-l2-deriv-arbitrage",
    examSlug: "cfa-l2",
    topicId: "deriv",
    topicName: "Derivatives",
    title: "Arbitrage, Replication, and the Carry Model",
    readingMinutes: 19,
    summary:
      "Why every derivative price in the curriculum comes from one idea — build the payoff two ways, and the two ways must cost the same.",
    intro:
      "There is really only one pricing argument in derivatives, and everything else is an application of it. If two portfolios produce identical payoffs in every future state, they must cost the same today, or a riskless profit exists. This reading builds that argument, applies it to forwards and futures through the cost-of-carry model, and establishes the replication logic that the binomial and Black-Scholes models both depend on.",
    sections: [
      {
        heading: "The law of one price",
        blocks: [
          {
            kind: "p",
            text: "Two positions with identical payoffs in every state of the world must have identical prices. If they do not, an arbitrageur sells the expensive one, buys the cheap one, and locks in the difference with no net investment and no risk. The trade requires no view about where the market is going — which is precisely what makes the argument so strong.",
          },
          {
            kind: "p",
            text: "The consequence that surprises people is that derivative prices do not depend on the expected return of the underlying. Two investors can disagree completely about whether a stock will rise, and still agree on what an option on it is worth, because the pricing argument routes around the disagreement entirely. Replication uses the current price, not a forecast.",
          },
          {
            kind: "callout",
            label: "The most-tested consequence",
            body: "If a question gives you the probability that a stock rises and asks for the value of a derivative, that probability is almost always a distractor. Risk-neutral pricing uses a synthetic probability derived from no-arbitrage, not the real-world one.",
          },
        ],
      },
      {
        heading: "Forward pricing: the cost of carry",
        blocks: [
          {
            kind: "p",
            text: "A forward contract commits to a purchase at a future date. To price it, compare two ways of owning the asset at expiry: buy it today and hold it, or enter the forward. Buying today costs the spot price and requires financing at the risk-free rate, but it delivers any income the asset pays along the way.",
          },
          {
            kind: "formula",
            formula: {
              label: "Forward price with carry",
              expr: "F₀(T) = S₀ × (1 + r)^T ÷ (1 + income yield)^T",
              note: "Financing cost pushes the forward above spot; income received while holding pushes it back down. Storage costs act like negative income and convenience yield like positive income.",
            },
          },
          {
            kind: "example",
            example: {
              title: "A six-month equity index forward",
              prompt:
                "An index trades at 1,200. The risk-free rate is 5% and the index pays a 2% dividend yield. What is the six-month forward price, and what would it be if the index paid nothing?",
              steps: [
                "With no dividend: 1,200 × 1.05^0.5 = 1,200 × 1.024695 = 1,229.63.",
                "With the 2% yield: 1,229.63 ÷ 1.02^0.5 = 1,229.63 ÷ 1.009950 = 1,217.52.",
                "The dividend reduces the forward by about 12.11 index points.",
              ],
              answer:
                "The forward price is 1,217.52 with the dividend and 1,229.63 without it. The holder of the forward does not receive the dividend, so she should not have to pay for it.",
            },
          },
          {
            kind: "p",
            text: "Every term in that formula has an intuitive job. The financing cost is what you pay to own the asset early. The income is what you give up by not owning it early. The forward price is set so the two routes cost the same, which means the forward is not a forecast of the future spot price — it is today's spot adjusted for carry.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "The two routes to owning the asset at T must cost the same today. That equality is the forward price.",
              alt: "A diagram showing two paths from today to expiry: buy spot and carry, or enter a forward and pay at expiry.",
              svg: `<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" role="img">
  <text x="30" y="26" font-size="11" fill="var(--text-muted)">today</text>
  <text x="370" y="26" font-size="11" fill="var(--text-muted)">expiry</text>
  <line x1="30" y1="36" x2="30" y2="160" stroke="var(--border)" stroke-width="1"/>
  <line x1="410" y1="36" x2="410" y2="160" stroke="var(--border)" stroke-width="1"/>
  <path d="M40 62 L400 62" stroke="var(--primary)" stroke-width="2"/>
  <text x="52" y="54" font-size="10" fill="var(--primary)">buy spot at S₀, finance at r, collect income</text>
  <path d="M40 122 L400 122" stroke="var(--ats-green)" stroke-width="2"/>
  <text x="52" y="114" font-size="10" fill="var(--ats-green)">enter forward, pay F₀ at expiry</text>
  <text x="150" y="152" font-size="11" fill="var(--text-muted)">both end holding the asset — so both must cost the same</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Currency forwards and covered interest parity",
        blocks: [
          {
            kind: "p",
            text: "A currency is an asset that pays its own interest rate, so the carry model applies directly with the foreign interest rate playing the role of the income yield. The result is covered interest rate parity, and it is one of the most reliably enforced relationships in finance because the arbitrage is easy to execute.",
          },
          {
            kind: "formula",
            formula: {
              label: "Covered interest rate parity",
              expr: "F = S × (1 + r_domestic)^T ÷ (1 + r_foreign)^T",
              note: "Quote convention matters: with S as domestic currency per unit of foreign, the domestic rate goes on top.",
            },
          },
          {
            kind: "example",
            example: {
              title: "A one-year EUR/USD forward",
              prompt:
                "Spot is 1.25 USD per EUR. The US rate is 5% and the euro rate is 3%. What is the one-year forward rate?",
              steps: [
                "The dollar is the domestic currency in this quote, so it goes in the numerator.",
                "F = 1.25 × (1.05 ÷ 1.03) = 1.25 × 1.019417 = 1.274272.",
              ],
              answer:
                "The forward is 1.2743 USD per EUR. The higher-interest currency — the dollar — trades at a forward discount, which is the general rule and the opposite of what intuition often suggests.",
            },
          },
          {
            kind: "callout",
            label: "The rule to remember",
            body: "The currency with the HIGHER interest rate trades at a forward DISCOUNT. If it did not, you could borrow in the low-rate currency, invest in the high-rate one, and hedge the return — a riskless profit. The forward discount is exactly what removes it.",
          },
        ],
      },
      {
        heading: "Futures versus forwards",
        blocks: [
          {
            kind: "p",
            text: "Forwards are bilateral, customised, and settle once at expiry, so credit exposure accumulates over the life of the contract. Futures are exchange-traded, standardised, and marked to market daily through a clearinghouse, which resets the credit exposure to roughly one day at a time.",
          },
          {
            kind: "p",
            text: "Daily settlement creates the one economic difference in pricing. A futures holder receives cash gains immediately and can reinvest them, and must fund losses immediately. When interest rates are positively correlated with the futures price, that timing helps the long — gains arrive when reinvestment rates are high — so the futures price exceeds the forward price. Negative correlation reverses it. With rates constant or uncorrelated, the two prices are identical.",
          },
          {
            kind: "table",
            table: {
              caption: "Forwards and futures compared",
              headers: ["", "Forward", "Futures"],
              rows: [
                ["Traded", "Bilateral, over the counter", "Exchange"],
                ["Terms", "Customised", "Standardised"],
                ["Settlement", "Once at expiry", "Daily mark to market"],
                ["Credit exposure", "Accumulates to expiry", "Reset daily by the clearinghouse"],
                ["Liquidity", "Usually low", "Usually high"],
                ["Price vs the other", "Lower when rates correlate positively with price", "Higher in that case"],
              ],
            },
          },
        ],
      },
      {
        heading: "The value of a forward during its life",
        blocks: [
          {
            kind: "p",
            text: "Distinguish price from value. The forward price is the rate agreed at inception, and it does not change. The forward's value is zero at inception — no money changes hands — and then moves as the spot price moves away from that agreed rate.",
          },
          {
            kind: "formula",
            formula: {
              label: "Value of a long forward at time t",
              expr: "V_t = [ F_t(T) − F₀(T) ] ÷ (1 + r)^(T−t)",
              note: "The gain is the difference between the forward price you could get today and the one you locked in, discounted back from expiry.",
            },
          },
          {
            kind: "p",
            text: "The distinction matters because exam questions deliberately mix the two. A contract whose price is unchanged can have a large positive value; a contract with a large price can be worth nothing. Price is the agreed exchange rate; value is what the position is worth to you now.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Law of one price", def: "Two positions with identical payoffs in all states must have identical prices, or arbitrage exists." },
      { term: "Cost of carry", def: "The net cost of holding an asset — financing minus income plus storage — which sets the forward price." },
      { term: "Covered interest parity", def: "The no-arbitrage relation setting the forward exchange rate from spot and the two interest rates." },
      { term: "Forward discount", def: "A forward rate below spot, which the higher-interest currency must trade at." },
      { term: "Mark to market", def: "Daily settlement of futures gains and losses through the clearinghouse." },
      { term: "Convenience yield", def: "The non-monetary benefit of holding a physical commodity, which acts like income in the carry model." },
      { term: "Forward price versus value", def: "The price is the agreed rate and is fixed; the value is zero at inception and moves with spot." },
    ],
    takeaways: [
      "Every derivative price in the curriculum comes from replication and the law of one price.",
      "Derivative values do not depend on the expected return of the underlying — a supplied probability of an up-move is usually a distractor.",
      "The forward price is spot adjusted for carry, not a forecast of the future spot price.",
      "The higher-interest currency trades at a forward discount, which is what kills the carry arbitrage.",
      "Futures exceed forwards in price when rates correlate positively with the futures price; they are equal when rates are constant.",
      "Forward price is fixed at inception; forward value starts at zero and moves with spot.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-deriv-binomial",
    examSlug: "cfa-l2",
    topicId: "deriv",
    topicName: "Derivatives",
    title: "The Binomial Model and Put-Call Parity",
    readingMinutes: 22,
    summary:
      "Risk-neutral probabilities, one- and two-period trees, the hedge ratio, early exercise, and the parity relation that ties calls, puts, the stock and a bond together.",
    intro:
      "The binomial model is the cleanest place to see risk-neutral valuation work, because you can verify it by hand. Build a portfolio of stock and borrowing that reproduces the option's payoff in both future states, and the option must cost what that portfolio costs. Once that is established, the same machinery extends to two periods, to American options, and — in the limit — to Black-Scholes.",
    sections: [
      {
        heading: "The risk-neutral probability",
        blocks: [
          {
            kind: "p",
            text: "In a one-period model the stock either rises by a factor u or falls by a factor d. The risk-neutral probability is the value of π that makes the stock's expected return equal the risk-free rate. It is not a forecast and not anybody's belief about the future; it is the number that makes the no-arbitrage arithmetic work.",
          },
          {
            kind: "formula",
            formula: {
              label: "Risk-neutral probability",
              expr: "π = [ (1 + r) − d ] ÷ ( u − d )",
              note: "The option value is then the π-weighted expected payoff, discounted one period at the risk-free rate.",
            },
          },
          {
            kind: "example",
            example: {
              title: "A one-period call and put",
              prompt:
                "A stock trades at $50. In one period it rises 25% or falls 20%. The risk-free rate is 4%. Value a call and a put, both struck at $50.",
              steps: [
                "π = (1.04 − 0.80) ÷ (1.25 − 0.80) = 0.24 ÷ 0.45 = 0.533333.",
                "Stock ends at $62.50 (up) or $40.00 (down).",
                "Call payoffs: $12.50 up, $0 down. Call = (0.533333 × 12.50) ÷ 1.04 = 6.6667 ÷ 1.04 = $6.4103.",
                "Put payoffs: $0 up, $10.00 down. Put = (0.466667 × 10.00) ÷ 1.04 = 4.6667 ÷ 1.04 = $4.4872.",
              ],
              answer:
                "The call is worth $6.4103 and the put $4.4872. Notice that no probability of the stock actually rising was needed or used.",
            },
          },
        ],
      },
      {
        heading: "Replication and the hedge ratio",
        blocks: [
          {
            kind: "p",
            text: "The hedge ratio is the number of shares needed to replicate one option. It is the spread of option payoffs divided by the spread of stock payoffs — the option's sensitivity to the underlying, which is delta.",
          },
          {
            kind: "formula",
            formula: {
              label: "Hedge ratio",
              expr: "h = ( c⁺ − c⁻ ) ÷ ( S⁺ − S⁻ )",
              note: "For the example above: (12.50 − 0) ÷ (62.50 − 40.00) = 12.50 ÷ 22.50 = 0.5556 shares per call.",
            },
          },
          {
            kind: "p",
            text: "A long call is replicated by buying 0.5556 shares and borrowing the balance. Check it: 0.5556 shares cost $27.78, and the call is worth $6.41, so the borrowing is $21.37. In one period that debt grows to $22.22. In the up state the shares are worth $34.72 and repaying leaves $12.50 — the call payoff. In the down state the shares are worth $22.22 and repaying leaves zero. The replication is exact in both states, which is what forces the price.",
          },
          {
            kind: "callout",
            label: "Delta is not constant",
            body: "The hedge ratio changes as the stock moves and as time passes. A replicating portfolio must be rebalanced continuously to stay exact, and the cost of that rebalancing is precisely what the option premium pays for. This is the intuition behind gamma and behind why delta hedging is not free.",
          },
        ],
      },
      {
        heading: "Two-period trees",
        blocks: [
          {
            kind: "p",
            text: "Extending to two periods requires only that you work backward. Compute the payoffs at the three terminal nodes, discount back to the two intermediate nodes using π, then discount those back to today.",
          },
          {
            kind: "example",
            example: {
              title: "A two-period European call",
              prompt:
                "A stock trades at $100, with u = 1.20 and d = 1/1.20 = 0.8333 per period, and a 3% per-period risk-free rate. Value a two-period European call struck at $100.",
              steps: [
                "π = (1.03 − 0.8333) ÷ (1.20 − 0.8333) = 0.19667 ÷ 0.36667 = 0.536364.",
                "Terminal stock prices: $144.00 (up-up), $100.00 (up-down), $69.44 (down-down).",
                "Terminal call payoffs: $44.00, $0, $0.",
                "Up node: (0.536364 × 44.00) ÷ 1.03 = 23.60 ÷ 1.03 = $22.9126.",
                "Down node: both branches pay zero, so the value is $0.",
                "Today: (0.536364 × 22.9126) ÷ 1.03 = 12.2896 ÷ 1.03 = $11.9316.",
              ],
              answer:
                "The call is worth $11.93. Working backward node by node is the only reliable method — trying to shortcut with an averaged terminal payoff gives the wrong answer.",
            },
          },
          {
            kind: "figure",
            figure: {
              caption:
                "A two-period tree. Values are computed at the terminal nodes and discounted backward using the risk-neutral probability.",
              alt: "A recombining two-period binomial tree with stock prices and call payoffs at each node.",
              svg: `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="60" y1="100" x2="180" y2="52" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="60" y1="100" x2="180" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="180" y1="52" x2="310" y2="26" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="180" y1="52" x2="310" y2="100" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="180" y1="150" x2="310" y2="100" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="180" y1="150" x2="310" y2="176" stroke="var(--border)" stroke-width="1.5"/>
  <circle cx="60" cy="100" r="4" fill="var(--primary)"/>
  <circle cx="180" cy="52" r="4" fill="var(--primary)"/>
  <circle cx="180" cy="150" r="4" fill="var(--primary)"/>
  <circle cx="310" cy="26" r="4" fill="var(--ats-green)"/>
  <circle cx="310" cy="100" r="4" fill="var(--text-muted)"/>
  <circle cx="310" cy="176" r="4" fill="var(--text-muted)"/>
  <text x="18" y="104" font-size="10" fill="var(--text-muted)">100</text>
  <text x="150" y="44" font-size="10" fill="var(--text-muted)">120</text>
  <text x="146" y="166" font-size="10" fill="var(--text-muted)">83.33</text>
  <text x="322" y="30" font-size="10" fill="var(--ats-green)">144 → 44</text>
  <text x="322" y="104" font-size="10" fill="var(--text-muted)">100 → 0</text>
  <text x="322" y="180" font-size="10" fill="var(--text-muted)">69.44 → 0</text>
  <text x="40" y="130" font-size="10" fill="var(--primary)">c = 11.93</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "American options and early exercise",
        blocks: [
          {
            kind: "p",
            text: "An American option may be exercised at any time. Valuing one in a binomial tree adds one step: at every node, compare the value of holding with the value of exercising immediately, and take the larger.",
          },
          {
            kind: "p",
            text: "For a call on a non-dividend-paying stock, early exercise is never optimal. Exercising throws away the remaining time value and pays the strike sooner than necessary, so the American call is worth exactly the European call. Introduce a large dividend and that changes — exercising just before the ex-dividend date to capture the payment can be worth more than the time value forfeited.",
          },
          {
            kind: "p",
            text: "For puts, early exercise can be optimal even without dividends. A deep in-the-money put has limited remaining upside — the stock cannot fall below zero — so receiving the strike now and earning interest on it can beat waiting. An American put therefore trades at a premium to the European put.",
          },
          {
            kind: "bullets",
            items: [
              "American call, no dividend: never exercise early; value equals the European call.",
              "American call, large dividend: exercise just before the ex-dividend date may be optimal.",
              "American put: early exercise can be optimal when deep in the money, so it is worth more than the European put.",
              "In a tree, always test max(hold, exercise) at every node before rolling back.",
            ],
          },
        ],
      },
      {
        heading: "Put-call parity",
        blocks: [
          {
            kind: "p",
            text: "A call plus a bond that matures to the strike gives the same payoff as a put plus the stock. If the stock finishes above the strike, both are worth the stock price. If below, both are worth the strike. Identical payoffs in every state, so identical prices.",
          },
          {
            kind: "formula",
            formula: {
              label: "Put-call parity",
              expr: "c + K ÷ (1 + r)^T  =  p + S₀",
              note: "European options on the same underlying, same strike, same expiry. The fiduciary call on the left, the protective put on the right.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Verifying parity on the one-period example",
              prompt:
                "Using the earlier figures — call $6.4103, put $4.4872, stock $50, strike $50, rate 4% — check that parity holds.",
              steps: [
                "Left side: 6.4103 + 50 ÷ 1.04 = 6.4103 + 48.0769 = 54.4872.",
                "Right side: 4.4872 + 50 = 54.4872.",
              ],
              answer:
                "Both sides equal 54.4872 exactly. Parity is not an approximation — it is an accounting identity enforced by arbitrage.",
            },
          },
          {
            kind: "p",
            text: "Rearranged, parity becomes a construction manual. A synthetic call is a put plus the stock minus a bond. A synthetic stock is a call minus a put plus a bond. A synthetic put is a call plus a bond minus the stock. Exam questions frequently ask you to identify which combination replicates which instrument, and they are all rearrangements of this one line.",
          },
          {
            kind: "callout",
            label: "Put-call-forward parity",
            body: "Replace the stock with a forward and the same logic gives c − p = (F₀ − K) ÷ (1 + r)^T. When the strike equals the forward price the call and put have equal value — which is why at-the-money-forward is the natural definition of at-the-money for options on forwards.",
          },
          {
            kind: "p",
            text: "One caution: parity holds strictly for European options. American options can be exercised early, which breaks the exact equality and turns it into a pair of inequalities. A question that applies parity to American options is testing whether you noticed.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Risk-neutral probability", def: "π = [(1+r) − d] ÷ (u − d); the synthetic probability that makes no-arbitrage pricing work, not a forecast." },
      { term: "Hedge ratio", def: "The number of shares replicating one option; the spread of option payoffs over the spread of stock payoffs." },
      { term: "Backward induction", def: "Valuing a tree by computing terminal payoffs and discounting node by node back to today." },
      { term: "Early exercise premium", def: "The extra value of an American option over its European equivalent." },
      { term: "Put-call parity", def: "c + K/(1+r)^T = p + S₀ for European options on the same underlying, strike and expiry." },
      { term: "Fiduciary call", def: "A long call plus a bond maturing to the strike — the left side of parity." },
      { term: "Protective put", def: "A long put plus the underlying stock — the right side of parity." },
      { term: "Synthetic position", def: "Any of stock, call, put or bond constructed from the other three by rearranging parity." },
    ],
    takeaways: [
      "π = [(1+r) − d] ÷ (u − d), and the real-world probability of an up-move never enters the calculation.",
      "The hedge ratio is delta, and it changes as the stock moves — which is what makes replication costly and options valuable.",
      "Two-period trees must be solved by backward induction, node by node.",
      "Never exercise an American call early on a non-dividend stock; American puts can justify early exercise when deep in the money.",
      "Put-call parity is an identity, not an approximation: c + PV(K) = p + S.",
      "Every synthetic instrument question is a rearrangement of parity.",
      "Parity holds strictly only for European options.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-deriv-bsm-greeks",
    examSlug: "cfa-l2",
    topicId: "deriv",
    topicName: "Derivatives",
    title: "Black-Scholes-Merton, the Greeks, and Delta Hedging",
    readingMinutes: 20,
    summary:
      "What the BSM assumptions buy and what they cost, how each Greek behaves, and why a delta-hedged book still loses money when the market gaps.",
    intro:
      "Black-Scholes-Merton is the binomial model with the time steps shrunk to zero. The formula matters less for the exam than the assumptions behind it, the behaviour of its inputs, and the practical business of hedging with it — including the ways that hedging fails.",
    sections: [
      {
        heading: "The model and its assumptions",
        blocks: [
          {
            kind: "p",
            text: "BSM values a European option as the stock price times a probability-like term, less the present value of the strike times another. What matters at Level II is which assumptions it rests on, because every one of them is violated in some observable way by real markets.",
          },
          {
            kind: "bullets",
            items: [
              "The underlying follows geometric Brownian motion with constant volatility — real volatility clusters and spikes.",
              "Returns are lognormally distributed — real returns have fatter tails.",
              "The risk-free rate is known and constant.",
              "There are no transaction costs and continuous trading is possible.",
              "The option is European and cannot be exercised early.",
              "No taxes, and the underlying's dividend yield is known.",
            ],
          },
          {
            kind: "p",
            text: "The constant-volatility assumption is the one that fails most visibly. If it held, options at every strike would imply the same volatility. They do not: implied volatility plotted against strike traces a smile or a skew, with out-of-the-money puts on equity indices implying the highest volatility. That pattern is the market pricing in crash risk the lognormal assumption does not contain.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "The equity index volatility skew. Constant volatility would produce a flat line; the market prices downside protection dearer.",
              alt: "A downward-sloping curve of implied volatility against strike price, with a flat dashed reference line.",
              svg: `<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="50" y1="150" x2="420" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="50" y1="92" x2="420" y2="92" stroke="var(--text-muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M60 38 C 140 60, 230 88, 420 104" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
  <text x="240" y="84" font-size="10" fill="var(--text-muted)">constant volatility (BSM)</text>
  <text x="66" y="30" font-size="10" fill="var(--primary)">observed skew</text>
  <text x="52" y="168" font-size="10" fill="var(--text-muted)">low strike (OTM puts)</text>
  <text x="330" y="168" font-size="10" fill="var(--text-muted)">high strike</text>
  <text x="6" y="86" font-size="10" fill="var(--text-muted)">IV</text>
</svg>`,
            },
          },
          {
            kind: "callout",
            label: "Implied volatility is a quote, not a forecast",
            body: "Traders quote options in volatility terms and convert to price with BSM. Implied volatility is therefore the number that makes the model reproduce the market price — it is the market's price expressed in the model's units, and it carries the model's misspecification inside it.",
          },
        ],
      },
      {
        heading: "The inputs and how the value responds",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Effect of an increase in each input",
              headers: ["Input rises", "European call", "European put"],
              rows: [
                ["Underlying price", "Rises", "Falls"],
                ["Strike price", "Falls", "Rises"],
                ["Volatility", "Rises", "Rises"],
                ["Time to expiry", "Rises (usually)", "Ambiguous"],
                ["Risk-free rate", "Rises", "Falls"],
                ["Dividend yield", "Falls", "Rises"],
              ],
            },
          },
          {
            kind: "p",
            text: "Volatility is the only input that raises both. Options are one-sided claims: more dispersion increases the chance of a large favourable move while the unfavourable side is already capped at the premium. That asymmetry is why long option positions are long volatility regardless of direction.",
          },
          {
            kind: "p",
            text: "Time is the subtle one. A longer-dated call is normally worth more, but a deep in-the-money European put can be worth less with more time, because exercise and receipt of the strike is delayed. The put's upside is bounded by the strike, so waiting mainly costs interest.",
          },
        ],
      },
      {
        heading: "The Greeks",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Delta — sensitivity to the underlying price. A call's delta runs from 0 to 1, a put's from −1 to 0, and at-the-money sits near 0.5 in absolute value.",
              "Gamma — the rate of change of delta. Highest at the money and near expiry, which is exactly where hedging is hardest.",
              "Vega — sensitivity to volatility. Positive for long calls and long puts alike, greatest at the money and for longer maturities.",
              "Theta — time decay. Negative for long options, and it accelerates as expiry approaches for at-the-money contracts.",
              "Rho — sensitivity to the risk-free rate. Positive for calls, negative for puts, and generally the least important of the five.",
            ],
          },
          {
            kind: "p",
            text: "Gamma and theta are opposite sides of one trade. A long option position has positive gamma — it gains from movement in either direction — and pays for that with negative theta. A short option position collects theta every day and carries negative gamma, which is why writing options feels profitable right up until it is not.",
          },
        ],
      },
      {
        heading: "Delta hedging and why it fails",
        blocks: [
          {
            kind: "p",
            text: "A delta hedge neutralises first-order exposure to the underlying. A dealer short 100 calls with a delta of 0.55 buys 5,500 shares, and the combined position is insensitive to small moves in the stock.",
          },
          {
            kind: "formula",
            formula: {
              label: "Delta-neutral share position",
              expr: "shares required = − delta × number of options × contract multiplier",
              note: "The hedge is exact only for small moves and only for an instant, because delta itself changes.",
            },
          },
          {
            kind: "p",
            text: "The hedge decays for two reasons. Delta changes as the stock moves, at a rate given by gamma, so a large move leaves the book exposed before it can be rebalanced. And delta changes as time passes even with the stock still. Both force continual rebalancing, and each rebalance costs a spread.",
          },
          {
            kind: "p",
            text: "This is the practical reason a short-option book loses money in a gap. The dealer is short gamma, so the delta moves against her: as the stock falls her hedge becomes too small and she must sell more, and as it rises she must buy more. She is systematically trading in the direction the market has already gone. Continuous rebalancing would work; a market that jumps does not permit it.",
          },
          {
            kind: "callout",
            label: "Why the premium exists",
            body: "In a frictionless world with continuous trading, the cost of running the replicating portfolio exactly equals the BSM premium. The premium is the expected cost of hedging. Transaction costs, gaps and stochastic volatility are why the realised cost differs — and why dealers charge more than the model says.",
          },
          {
            kind: "p",
            text: "Gamma hedging adds a second instrument — another option — to neutralise the rate of change of delta, which reduces how often the delta hedge must be adjusted. It cannot be done with the underlying alone, because a share position has zero gamma by construction. That is the key structural point: delta can be hedged with stock, but gamma and vega require options.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Geometric Brownian motion", def: "The continuous price process BSM assumes, implying lognormal prices and constant volatility." },
      { term: "Implied volatility", def: "The volatility input that makes BSM reproduce the observed market price of an option." },
      { term: "Volatility skew", def: "The pattern of implied volatility varying by strike, contradicting the constant-volatility assumption." },
      { term: "Delta", def: "Sensitivity of option value to the underlying price; 0 to 1 for calls, −1 to 0 for puts." },
      { term: "Gamma", def: "The rate of change of delta, greatest at the money and near expiry." },
      { term: "Vega", def: "Sensitivity to volatility, positive for long calls and long puts alike." },
      { term: "Theta", def: "Time decay, negative for long option positions." },
      { term: "Delta-neutral hedge", def: "A stock position offsetting an option book's first-order exposure to the underlying." },
    ],
    takeaways: [
      "BSM is the binomial model in continuous time; its assumptions, not its formula, are what get tested.",
      "The volatility skew is direct evidence that the constant-volatility assumption fails.",
      "Volatility is the only input that raises the value of both calls and puts.",
      "More time normally raises a call's value but can lower a deep in-the-money European put's.",
      "Gamma and theta are the two sides of one trade: long options pay theta to own gamma.",
      "A delta hedge is exact only instantaneously; gamma is what makes it decay and what a gap exploits.",
      "Delta can be hedged with the underlying; gamma and vega require other options.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-deriv-swaps",
    examSlug: "cfa-l2",
    topicId: "deriv",
    topicName: "Derivatives",
    title: "Swaps: Interest Rate, Currency, and Equity",
    readingMinutes: 19,
    summary:
      "Pricing a swap as a portfolio of simpler instruments, why the fixed rate falls out of discount factors, and how currency and equity swaps differ from the plain vanilla case.",
    intro:
      "A swap is an exchange of cash flow streams, and every swap in the curriculum can be decomposed into instruments you already know. An interest rate swap is a bond swapped for a floating note; a currency swap is two bonds in different currencies; an equity swap replaces one leg with an index return. Once you see the decomposition, the pricing follows from the no-arbitrage argument already established.",
    sections: [
      {
        heading: "The plain vanilla interest rate swap",
        blocks: [
          {
            kind: "p",
            text: "The fixed-rate payer pays a fixed rate and receives a floating rate on a notional principal that is never exchanged. The position is economically identical to being short a fixed-rate bond and long a floating-rate note of the same maturity and notional.",
          },
          {
            kind: "p",
            text: "That decomposition does the pricing work immediately. A floating-rate note resets to par at every payment date, so its value at inception is par. The swap has zero value at inception, which means the fixed bond must also be worth par — and the coupon that makes a bond price at par is the swap fixed rate.",
          },
          {
            kind: "formula",
            formula: {
              label: "Swap fixed rate from discount factors",
              expr: "fixed rate = ( 1 − D_n ) ÷ ( D₁ + D₂ + … + D_n )",
              note: "D_i is the discount factor for payment date i. This is the coupon that prices a bond at par against the current curve.",
            },
          },
          {
            kind: "example",
            example: {
              title: "A four-period swap fixed rate",
              prompt:
                "Discount factors for the next four periods are 0.9709, 0.9426, 0.9151 and 0.8885. What is the swap fixed rate?",
              steps: [
                "Sum the discount factors: 0.9709 + 0.9426 + 0.9151 + 0.8885 = 3.7171.",
                "Numerator: 1 − 0.8885 = 0.1115.",
                "Fixed rate = 0.1115 ÷ 3.7171 = 0.029997, about 3.00% per period.",
              ],
              answer:
                "The swap fixed rate is approximately 3.00%. It is a weighted average of the forward rates embedded in the curve, not a forecast of any single future rate.",
            },
          },
          {
            kind: "p",
            text: "During the swap's life its value moves away from zero. If rates rise, the fixed-rate payer gains — she is locked into paying a below-market rate — and the swap becomes an asset to her and a liability to the counterparty. The value at any point is the difference between the present value of the two remaining legs.",
          },
          {
            kind: "callout",
            label: "The intuition worth carrying",
            body: "The fixed-rate payer is short duration. She benefits when rates rise, exactly as a short bond position does. Any question about who gains from a rate move reduces to that one fact.",
          },
        ],
      },
      {
        heading: "Why firms use interest rate swaps",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Converting floating-rate debt to fixed without refinancing, which avoids new issuance costs.",
              "Converting fixed to floating to reduce cost when the curve is upward sloping and the borrower can bear the risk.",
              "Managing duration in a bond portfolio without buying or selling the underlying bonds.",
              "Exploiting a comparative advantage: two borrowers each with better access to one market can swap and both improve.",
              "Hedging a liability whose rate basis differs from the asset funding it.",
            ],
          },
          {
            kind: "p",
            text: "The comparative advantage argument deserves scepticism. Some of the apparent gain is real — it reflects genuine differences in market access — but part of it historically reflected differences in credit risk that the swap did not remove, merely relocated.",
          },
        ],
      },
      {
        heading: "Currency swaps",
        blocks: [
          {
            kind: "p",
            text: "A currency swap exchanges principal and interest in two different currencies. Unlike an interest rate swap, the principal IS exchanged, both at inception and at maturity, because the two notionals are in different currencies and the exchange is the point.",
          },
          {
            kind: "p",
            text: "The structure is equivalent to holding a bond in one currency and being short a bond in another. Each leg may be fixed or floating, giving four combinations: fixed-for-fixed, fixed-for-floating, floating-for-fixed and floating-for-floating.",
          },
          {
            kind: "p",
            text: "The classic use is a firm that can borrow cheaply at home but needs funding abroad. It issues in its home market, swaps the proceeds into the foreign currency, and services the foreign debt with the swap. It obtains foreign currency funding at close to its domestic cost of borrowing, without ever accessing the foreign bond market directly.",
          },
          {
            kind: "table",
            table: {
              caption: "Interest rate versus currency swaps",
              headers: ["", "Interest rate swap", "Currency swap"],
              rows: [
                ["Currencies", "One", "Two"],
                ["Principal exchanged", "No", "Yes, at start and maturity"],
                ["Main risk transferred", "Interest rate", "Interest rate and exchange rate"],
                ["Decomposes into", "Two bonds, one currency", "Two bonds, two currencies"],
              ],
            },
          },
        ],
      },
      {
        heading: "Equity swaps",
        blocks: [
          {
            kind: "p",
            text: "An equity swap exchanges the return on an equity index or single stock for a fixed rate, a floating rate, or the return on another equity. The equity leg is the total return including dividends, and it can be negative — in which case the equity-return receiver pays on both legs.",
          },
          {
            kind: "p",
            text: "That last point is the one exam questions target. In an interest rate swap both parties pay something. In an equity swap, a period of negative equity return means the party receiving the equity return owes the loss plus their own leg. There is no floor at zero.",
          },
          {
            kind: "bullets",
            items: [
              "Gaining index exposure without buying the constituents, useful where direct ownership is restricted.",
              "Diversifying a concentrated holding without selling it and realising a taxable gain.",
              "Obtaining exposure to a foreign market that restricts direct participation.",
              "Converting a fund's exposure between asset classes cheaply and reversibly.",
            ],
          },
          {
            kind: "callout",
            label: "The tax and disclosure caveat",
            body: "Using an equity swap to diversify a concentrated position defers the taxable disposal, but it leaves the client with counterparty exposure and no voting rights, and the arrangement's costs must be disclosed. Presenting it as a cost-free way to diversify would be a misrepresentation.",
          },
        ],
      },
      {
        heading: "Swaps, forwards, and options compared",
        blocks: [
          {
            kind: "p",
            text: "A swap is economically a series of forward contracts with a single agreed rate rather than a separate rate for each date. That is why the swap fixed rate is a weighted average of the forwards rather than equal to any one of them.",
          },
          {
            kind: "p",
            text: "Swaps and forwards are obligations with symmetric payoffs — both parties can lose. Options are rights with asymmetric payoffs, which is why they require a premium and swaps do not. A swap has zero value at inception precisely because neither side has been given anything the other has not.",
          },
          {
            kind: "table",
            table: {
              caption: "Symmetric and asymmetric instruments",
              headers: ["", "Forward / swap", "Option"],
              rows: [
                ["Obligation", "Both parties bound", "Buyer has a right, seller an obligation"],
                ["Premium at inception", "None", "Paid by the buyer"],
                ["Payoff shape", "Symmetric", "Asymmetric"],
                ["Value at inception", "Zero", "Positive to the buyer"],
              ],
            },
          },
          {
            kind: "p",
            text: "Central clearing has been extended to most standardised swaps since the 2008 crisis, which shifts counterparty exposure to a clearinghouse and imposes margin. The economics of the swap are unchanged; what changes is who bears the credit risk and how much collateral is tied up.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Plain vanilla swap", def: "Fixed for floating in one currency, with no exchange of principal." },
      { term: "Notional principal", def: "The amount on which swap payments are computed; not exchanged in an interest rate swap." },
      { term: "Swap fixed rate", def: "(1 − D_n) ÷ ΣD_i — the coupon that prices a bond at par against the current curve." },
      { term: "Currency swap", def: "An exchange of principal and interest in two currencies, with principal exchanged at start and maturity." },
      { term: "Equity swap", def: "An exchange of an equity total return for a fixed or floating rate, where the equity leg can be negative." },
      { term: "Comparative advantage", def: "The argument that two borrowers with different market access can both gain by swapping." },
      { term: "Central clearing", def: "Routing a standardised swap through a clearinghouse that becomes counterparty to both sides." },
    ],
    takeaways: [
      "Every swap decomposes into instruments you already know — that decomposition is the pricing method.",
      "A fixed-rate payer is short a fixed bond and long a floating note, and therefore short duration.",
      "The swap fixed rate is (1 − D_n) ÷ ΣD_i, a weighted average of forwards rather than a forecast.",
      "Interest rate swaps exchange no principal; currency swaps exchange it at both ends.",
      "An equity swap's equity leg can be negative, in which case one party pays both legs.",
      "Swaps and forwards are symmetric obligations with zero value at inception; options are asymmetric rights requiring a premium.",
    ],
  },
];

// Questions live in cfa-l2-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const derivQuestionsL2: Question[] = [];
