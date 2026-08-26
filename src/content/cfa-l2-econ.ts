// ============================================================
// Certus — CFA Level II Economics readings
//
// WHY THIS FILE EXISTS: a concept audit found the Level II economics
// chapter covered covered interest parity and the carry trade, and very
// little else. Cross rates returned ZERO matches. So did currency
// bid-offer quoting, the real exchange rate, the current account, the
// Marshall-Lerner condition, the Taylor rule, growth accounting and
// convergence. Capital deepening had three passing mentions.
//
// The Level II economics question target is 128. Writing questions
// against the old chapter would have tested two readings' worth of
// material the platform never taught.
//
// Every number in every worked example was computed in Python first.
// The bid-offer cross-rate example is the check that matters: the bid
// uses the LOW numerator over the HIGH denominator and the ask the
// reverse, giving 1.1607/1.1619 — a spread wider than either input.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const econChaptersL2: Chapter[] = [
  // ----------------------------------------------------------
  {
    id: "cfa-l2-econ-fx-mechanics",
    examSlug: "cfa-l2",
    topicId: "econ",
    topicName: "Economics",
    title: "Exchange Rate Mechanics: Quotes, Cross Rates, and Forward Points",
    readingMinutes: 19,
    summary:
      "Reading a currency quote without getting the direction backwards, computing cross rates with and without bid-offer spreads, and converting forward points into a forward rate.",
    intro:
      "Most currency questions that candidates get wrong are lost on mechanics rather than economics — an inverted quote, a bid used where an ask belonged, forward points scaled to the wrong decimal place. This reading is deliberately mechanical, because the parity conditions in the next chapter are worthless if the arithmetic underneath them runs the wrong way.",
    sections: [
      {
        heading: "Reading a quote",
        blocks: [
          {
            kind: "p",
            text: "An exchange rate is a price, and like any price it has units. The convention used throughout the curriculum writes the price currency first and the base currency second, so USD/EUR means dollars per euro. The base currency is the one being bought and sold; the price currency is what it costs.",
          },
          {
            kind: "p",
            text: "A quote of USD/EUR 1.0850 says one euro costs 1.0850 dollars. If that number rises to 1.0900, the euro has appreciated and the dollar has depreciated. The rate rising always means the base currency strengthened — that single rule prevents most direction errors.",
          },
          {
            kind: "callout",
            label: "The percentage trap",
            body: "A 10% appreciation of the base currency is NOT a 10% depreciation of the price currency. If USD/EUR moves from 1.00 to 1.10, the euro appreciated 10% but the dollar depreciated by 1 − (1/1.10) = 9.09%. Percentage changes are not symmetric because the denominators differ.",
          },
          {
            kind: "p",
            text: "A dealer quotes two prices: the bid, at which the dealer buys the base currency, and the offer or ask, at which the dealer sells it. The bid is always lower. The client always transacts at the price less favourable to themselves — buying the base at the ask, selling it at the bid. That asymmetry is the dealer's compensation.",
          },
        ],
      },
      {
        heading: "Cross rates",
        blocks: [
          {
            kind: "p",
            text: "A cross rate is computed from two quotes that share a common currency. The mechanical rule is to arrange the two quotes so the common currency cancels, exactly as units cancel in physics.",
          },
          {
            kind: "example",
            example: {
              title: "A cross rate from two dollar quotes",
              prompt:
                "USD/EUR is 1.0850 and USD/GBP is 1.2600. What is EUR/GBP — euros per pound?",
              steps: [
                "EUR/GBP means euros per pound, so pounds must end up in the denominator.",
                "Write it as (USD/GBP) ÷ (USD/EUR) so the dollars cancel: 1.2600 ÷ 1.0850.",
                "That gives 1.16129 euros per pound.",
              ],
              answer:
                "EUR/GBP is 1.1613. Inverting gives GBP/EUR of 0.8611 pounds per euro — the reciprocal, and a different number entirely.",
            },
          },
          {
            kind: "p",
            text: "When the two quotes point the same direction you divide; when they point in opposite directions you multiply. With JPY/USD at 148.50 and USD/EUR at 1.0850, the dollars already cancel by multiplication: 148.50 × 1.0850 = 161.1225 yen per euro.",
          },
        ],
      },
      {
        heading: "Cross rates with bid-offer spreads",
        blocks: [
          {
            kind: "p",
            text: "This is where the marks are, and where the arithmetic must be done carefully. To build a cross rate bid, ask what the client is doing on each leg and apply the dealer-favourable side to each. The reliable shortcut: the cross bid uses the low numerator over the high denominator, and the cross ask uses the high numerator over the low denominator.",
          },
          {
            kind: "example",
            example: {
              title: "A cross rate with spreads",
              prompt:
                "USD/EUR is quoted 1.0848 / 1.0852 and USD/GBP is quoted 1.2596 / 1.2604. Compute the EUR/GBP bid-offer quote.",
              steps: [
                "Cross bid = low USD/GBP ÷ high USD/EUR = 1.2596 ÷ 1.0852 = 1.160708.",
                "Cross ask = high USD/GBP ÷ low USD/EUR = 1.2604 ÷ 1.0848 = 1.161873.",
              ],
              answer:
                "EUR/GBP is 1.1607 / 1.1619. Note the cross spread of about 12 pips is wider than either input spread — the client crosses two spreads, and the costs compound.",
            },
          },
          {
            kind: "figure",
            figure: {
              caption:
                "A cross rate crosses two dealer spreads, so the resulting spread is wider than either component.",
              alt: "Three horizontal bid-ask ranges showing the two input spreads and the wider resulting cross spread.",
              svg: `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img">
  <text x="20" y="34" font-size="11" fill="var(--text-muted)">USD/EUR</text>
  <line x1="110" y1="30" x2="180" y2="30" stroke="var(--primary)" stroke-width="6"/>
  <text x="190" y="34" font-size="10" fill="var(--text-muted)">1.0848 / 1.0852</text>
  <text x="20" y="74" font-size="11" fill="var(--text-muted)">USD/GBP</text>
  <line x1="110" y1="70" x2="190" y2="70" stroke="var(--primary)" stroke-width="6"/>
  <text x="200" y="74" font-size="10" fill="var(--text-muted)">1.2596 / 1.2604</text>
  <line x1="20" y1="96" x2="430" y2="96" stroke="var(--border)" stroke-width="1"/>
  <text x="20" y="126" font-size="11" fill="var(--ats-red)">EUR/GBP</text>
  <line x1="110" y1="122" x2="260" y2="122" stroke="var(--ats-red)" stroke-width="6"/>
  <text x="270" y="126" font-size="10" fill="var(--ats-red)">1.1607 / 1.1619</text>
  <text x="110" y="152" font-size="10" fill="var(--text-muted)">the client pays both spreads</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Forward points",
        blocks: [
          {
            kind: "p",
            text: "Forward rates are quoted as points added to or subtracted from spot, and the scaling depends on the quote's decimal convention. For a rate quoted to four decimals, one point is 0.0001. For a yen rate quoted to two decimals, one point is 0.01. Getting the scale wrong is the single most common error on these questions.",
          },
          {
            kind: "example",
            example: {
              title: "Applying forward points in two conventions",
              prompt:
                "Spot USD/EUR is 1.0850 with forward points of +47.5. Spot JPY/USD is 148.50 with forward points of −215. Find both forward rates.",
              steps: [
                "USD/EUR is quoted to four decimals, so 47.5 points = 0.00475.",
                "Forward USD/EUR = 1.0850 + 0.00475 = 1.08975.",
                "JPY/USD is quoted to two decimals, so −215 points = −2.15.",
                "Forward JPY/USD = 148.50 − 2.15 = 146.35.",
              ],
              answer:
                "The forwards are 1.08975 and 146.35. Positive points mean the base currency trades at a forward premium; negative points mean a forward discount.",
            },
          },
          {
            kind: "formula",
            formula: {
              label: "Forward premium or discount",
              expr: "premium % = ( F − S ) ÷ S",
              note: "With S = 1.0850 and F = 1.0925, the premium is 0.6912%. Annualising a three-month figure multiplies by four, giving 2.765%.",
            },
          },
          {
            kind: "p",
            text: "A mark-to-market on a forward position follows the same logic as any forward: compare the rate you could get today for the remaining term against the rate you locked in, apply it to the notional, and discount back at the price currency's rate.",
          },
        ],
      },
      {
        heading: "Triangular arbitrage",
        blocks: [
          {
            kind: "p",
            text: "If a dealer's direct cross-rate quote sits outside the range implied by the two dollar quotes, an arbitrage exists. Convert around the triangle in whichever direction produces more currency than you started with.",
          },
          {
            kind: "p",
            text: "In the worked example above the no-arbitrage EUR/GBP band is 1.1607 to 1.1619. A dealer quoting EUR/GBP at 1.1650 is offering to buy pounds too cheaply relative to that band, so an arbitrageur sells pounds to that dealer and buys them back through the dollar legs. In practice these opportunities are arbitraged away in milliseconds, and their absence is what makes the cross-rate calculation reliable.",
          },
          {
            kind: "callout",
            label: "The exam version",
            body: "A question showing three quotes and asking whether arbitrage exists is asking you to compute the implied cross and compare it to the quoted one. If the quoted rate lies inside the implied bid-ask band, there is no arbitrage — even if the numbers look different.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Base currency", def: "The currency being bought or sold — the second one named in the USD/EUR convention." },
      { term: "Price currency", def: "The currency in which the base is priced — the first one named." },
      { term: "Bid", def: "The rate at which the dealer buys the base currency; always the lower of the pair." },
      { term: "Offer or ask", def: "The rate at which the dealer sells the base currency; always the higher." },
      { term: "Cross rate", def: "An exchange rate computed from two quotes sharing a common currency." },
      { term: "Forward points", def: "The amount added to or subtracted from spot to give the forward, scaled to the quote's decimals." },
      { term: "Forward premium", def: "A forward rate above spot for the base currency; a discount is the reverse." },
      { term: "Triangular arbitrage", def: "Profiting from a cross rate quoted outside the band implied by two other quotes." },
    ],
    takeaways: [
      "In USD/EUR the euro is the base; the rate rising always means the base currency appreciated.",
      "A 10% appreciation of one currency is never a 10% depreciation of the other — the denominators differ.",
      "Build cross rates by cancelling the common currency, exactly as you would cancel units.",
      "For a cross bid use the low numerator over the high denominator; reverse it for the ask.",
      "A cross spread is always wider than either input spread, because the client pays both.",
      "Forward point scaling follows the quote's decimal convention — 0.0001 for four decimals, 0.01 for a two-decimal yen rate.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-econ-parity-balance",
    examSlug: "cfa-l2",
    topicId: "econ",
    topicName: "Economics",
    title: "Parity Conditions, the Balance of Payments, and Policy",
    readingMinutes: 21,
    summary:
      "The parity conditions and which of them actually holds, the real exchange rate, current account adjustment and the Marshall-Lerner condition, and how monetary and fiscal policy move a currency.",
    intro:
      "There are five parity conditions and exactly one of them reliably holds. Understanding why the other four fail — and what fills the gap — is most of what Level II asks about exchange rate determination. This reading builds the conditions, then turns to the balance of payments and the policy models that explain rates over horizons where parity does not.",
    sections: [
      {
        heading: "The five parity conditions",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "The conditions and how well they survive contact with data",
              headers: ["Condition", "Links", "Holds?"],
              rows: [
                ["Covered interest parity", "Forward rate to interest differential", "Yes — enforced by arbitrage"],
                ["Uncovered interest parity", "Expected spot to interest differential", "No — fails persistently"],
                ["Absolute PPP", "Spot level to price levels", "No"],
                ["Relative PPP", "Spot change to inflation differential", "Only over long horizons"],
                ["International Fisher", "Interest differential to inflation differential", "Weakly"],
              ],
            },
          },
          {
            kind: "p",
            text: "Only covered interest parity is a no-arbitrage relation. The forward contract removes the currency risk entirely, so any deviation is a riskless profit and gets traded away. Every other condition involves an expectation, and expectations are not enforceable.",
          },
          {
            kind: "example",
            example: {
              title: "Covered interest parity",
              prompt:
                "Spot USD/EUR is 1.0850. The six-month US rate is 5.2% and the euro rate is 3.4%, both annualised. Find the six-month forward rate.",
              steps: [
                "Scale both rates to six months: US 0.052 × 0.5 = 0.026; euro 0.034 × 0.5 = 0.017.",
                "F = 1.0850 × (1.026 ÷ 1.017).",
                "That gives 1.094602 dollars per euro.",
              ],
              answer:
                "The forward is 1.0946. The dollar carries the higher interest rate, so it trades at a forward discount — the euro buys more dollars forward than spot.",
            },
          },
          {
            kind: "callout",
            label: "The rule that resolves most parity questions",
            body: "The high-interest-rate currency trades at a forward DISCOUNT. Uncovered interest parity says it should also depreciate by that amount in the spot market. Empirically it does not — on average it depreciates less, or even appreciates. That failure is the entire basis of the carry trade.",
          },
        ],
      },
      {
        heading: "Purchasing power parity and the real exchange rate",
        blocks: [
          {
            kind: "p",
            text: "Absolute PPP claims identical goods cost the same everywhere once converted at the spot rate. It fails immediately in practice: transport costs, tariffs, taxes and above all non-tradeable goods like haircuts and rent break the arbitrage that would enforce it.",
          },
          {
            kind: "p",
            text: "Relative PPP is the more defensible version — the currency of a higher-inflation country should depreciate at approximately the inflation differential. Over multi-decade horizons this has meaningful explanatory power. Over one to five years it has almost none.",
          },
          {
            kind: "formula",
            formula: {
              label: "Relative PPP and the real exchange rate",
              expr: "expected depreciation ≈ ( 1 + i_domestic ) ÷ ( 1 + i_foreign ) − 1     and     RER = S × P_foreign ÷ P_domestic",
              note: "With 6% domestic and 2% foreign inflation, expected depreciation is 3.92%. With S = 1.20, foreign prices 105 and domestic 112, the real rate is 1.125.",
            },
          },
          {
            kind: "p",
            text: "The real exchange rate strips out relative price levels and measures actual competitiveness. A rise means domestic goods have become cheaper relative to foreign ones, improving competitiveness. A nominal rate can be stable while the real rate moves substantially, which is why the nominal rate alone says little about trade performance.",
          },
          {
            kind: "p",
            text: "The Balassa-Samuelson effect explains a systematic deviation from PPP: productivity in tradeable goods grows faster in developing economies, which pushes up wages economy-wide, which raises the price of non-tradeables. Fast-growing economies therefore tend to see their real exchange rates appreciate, and price levels in rich countries are persistently higher than PPP would predict.",
          },
        ],
      },
      {
        heading: "The carry trade",
        blocks: [
          {
            kind: "p",
            text: "The carry trade borrows in a low-interest currency and invests in a high-interest one, unhedged. It is profitable precisely to the extent that uncovered interest parity fails, and historically it has been profitable on average for long stretches.",
          },
          {
            kind: "p",
            text: "The return distribution is the important part. Carry trades produce small, steady gains punctuated by large, sudden losses when high-yield currencies collapse — negative skew and excess kurtosis. Describing the strategy by its average return alone materially misrepresents it, which raises a Standard V(B) issue as much as an economic one.",
          },
          {
            kind: "p",
            text: "The crashes are not random. They cluster in risk-off episodes when leveraged positions unwind together, which means the strategy's worst outcomes coincide with everything else in a portfolio going wrong. That correlation is the reason the excess return may be compensation for risk rather than a free lunch.",
          },
        ],
      },
      {
        heading: "The balance of payments",
        blocks: [
          {
            kind: "p",
            text: "The current account records trade in goods and services, income flows and transfers. The financial account records cross-border purchases of assets. By construction they offset: a country running a current account deficit must be a net seller of assets to foreigners, because the money spent abroad has to return somehow.",
          },
          {
            kind: "formula",
            formula: {
              label: "The saving-investment identity",
              expr: "current account = ( private saving − investment ) + ( government saving − government spending )",
              note: "A current account deficit is arithmetically a shortfall of national saving relative to domestic investment. It is an identity, not a theory.",
            },
          },
          {
            kind: "p",
            text: "This reframing matters. A current account deficit is often discussed as a trade problem, but the identity shows it is equally a saving problem. A country can reduce a deficit by saving more, investing less, or reducing the fiscal deficit — the exchange rate is only one of several adjustment channels.",
          },
        ],
      },
      {
        heading: "The Marshall-Lerner condition and the J-curve",
        blocks: [
          {
            kind: "p",
            text: "A depreciation makes exports cheaper abroad and imports dearer at home, which should improve the trade balance. But it also raises the domestic-currency cost of the imports the country still buys, which worsens it. Which effect dominates depends on how responsive trade volumes are to price.",
          },
          {
            kind: "formula",
            formula: {
              label: "The Marshall-Lerner condition",
              expr: "ε_exports + ε_imports > 1",
              note: "The sum of the absolute demand elasticities must exceed one for a depreciation to improve the trade balance.",
            },
          },
          {
            kind: "p",
            text: "Elasticities are low in the short run because contracts are already signed and supply chains cannot be rearranged quickly. They rise over time as buyers switch suppliers. The result is the J-curve: a depreciation worsens the trade balance initially — the same volume of imports simply costs more — before improving it as volumes adjust.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "The J-curve. A depreciation worsens the trade balance before improving it, because volumes adjust more slowly than prices.",
              alt: "A curve dipping below the starting level after a depreciation, then rising above it over time.",
              svg: `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="50" y1="90" x2="420" y2="90" stroke="var(--border)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="50" y1="20" x2="50" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="110" y1="20" x2="110" y2="150" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M50 90 L110 90 C 140 112, 170 132, 210 130 C 280 126, 350 60, 420 32" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
  <text x="114" y="32" font-size="10" fill="var(--text-muted)">depreciation</text>
  <text x="150" y="152" font-size="10" fill="var(--ats-red)">balance worsens first</text>
  <text x="320" y="52" font-size="10" fill="var(--ats-green)">then improves</text>
  <text x="4" y="86" font-size="10" fill="var(--text-muted)">trade</text>
  <text x="4" y="98" font-size="10" fill="var(--text-muted)">balance</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Policy, the Taylor rule, and the Mundell-Fleming model",
        blocks: [
          {
            kind: "p",
            text: "The Taylor rule describes how a central bank sets its policy rate in response to inflation and the output gap. It is descriptive rather than mandatory, but it gives a benchmark against which actual policy can be judged as loose or tight.",
          },
          {
            kind: "formula",
            formula: {
              label: "The Taylor rule",
              expr: "policy rate = neutral real rate + inflation + 0.5 × (inflation − target) + 0.5 × output gap",
              note: "With a 2% neutral real rate, 4.2% inflation, a 2% target and a 1.2% positive output gap: 2 + 4.2 + 1.1 + 0.6 = 7.9%.",
            },
          },
          {
            kind: "p",
            text: "A policy rate well below the Taylor prescription indicates accommodative policy, which tends to weaken the currency. A rate above it indicates restrictive policy and tends to strengthen it. Exam questions often supply the inputs and ask whether policy is loose or tight relative to the rule.",
          },
          {
            kind: "p",
            text: "The Mundell-Fleming model traces how monetary and fiscal policy affect the exchange rate under high capital mobility. Expansionary monetary policy lowers rates, capital flows out, and the currency depreciates. Expansionary fiscal policy raises rates through increased borrowing, capital flows in, and the currency appreciates. The two policies therefore push the currency in opposite directions, which is why the policy mix matters more than either policy alone.",
          },
          {
            kind: "table",
            table: {
              caption: "Policy mix and the currency under high capital mobility",
              headers: ["Monetary", "Fiscal", "Effect on the currency"],
              rows: [
                ["Expansionary", "Expansionary", "Ambiguous"],
                ["Expansionary", "Restrictive", "Depreciation"],
                ["Restrictive", "Expansionary", "Appreciation"],
                ["Restrictive", "Restrictive", "Ambiguous"],
              ],
            },
          },
          {
            kind: "p",
            text: "Under LOW capital mobility the trade balance dominates instead of capital flows, and the signs change: expansionary fiscal policy raises imports, worsens the trade balance, and depreciates the currency. A question specifying low capital mobility is testing exactly that reversal.",
          },
          {
            kind: "p",
            text: "The portfolio balance approach adds a longer-horizon constraint. Persistent fiscal deficits require foreigners to keep absorbing government debt, and they will only do so at some point in exchange for a lower currency. So fiscal expansion can appreciate a currency in the short run through the rate channel and depreciate it in the long run through the debt channel — which explains how two apparently contradictory analyses can both be right about different horizons.",
          },
        ],
      },
      {
        heading: "Growth: accounting, capital deepening, and convergence",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Growth accounting",
              expr: "growth = TFP growth + α × capital growth + (1 − α) × labour growth",
              note: "With 1.1% TFP growth, α = 0.35, capital growth 4.2% and labour growth 1.4%: 1.1 + 1.47 + 0.91 = 3.48%.",
            },
          },
          {
            kind: "p",
            text: "Total factor productivity is the residual — the growth not explained by more capital or more labour — so it is measured rather than observed. With output growth of 3.8%, α of 0.3, capital growth of 5.0% and labour growth of 1.0%, the Solow residual is 3.8 − 1.5 − 0.7 = 1.6%.",
          },
          {
            kind: "p",
            text: "Capital deepening means more capital per worker, and it raises output per worker with diminishing returns. This is the crucial limitation: an economy can grow for a long time by accumulating capital, but each additional unit adds less, and growth eventually stalls at a steady state. Only technological progress — TFP growth — sustains growth indefinitely.",
          },
          {
            kind: "p",
            text: "Convergence follows from those diminishing returns. Absolute convergence predicts all countries reach the same income level, which the data rejects. Conditional convergence predicts countries converge to their own steady state determined by their saving rate, institutions and technology — poorer countries grow faster only when they share those characteristics, which fits the evidence considerably better. Club convergence adds that countries converge within groups sharing institutional features, with membership possible but not automatic.",
          },
          {
            kind: "p",
            text: "For an investor the practical implication is that rapid catch-up growth driven by capital accumulation is not permanent, and extrapolating it into a terminal growth rate is the same error as assuming a company's returns on capital persist forever without a barrier to entry.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Covered interest parity", def: "The no-arbitrage link between the forward rate and the interest differential; the only condition that reliably holds." },
      { term: "Uncovered interest parity", def: "The claim that the interest differential predicts spot movement; it fails persistently." },
      { term: "Relative PPP", def: "The claim that a currency depreciates at the inflation differential; holds only over long horizons." },
      { term: "Real exchange rate", def: "S × foreign prices ÷ domestic prices — the measure of actual competitiveness." },
      { term: "Balassa-Samuelson effect", def: "Faster tradeable-sector productivity growth raising the real exchange rate in developing economies." },
      { term: "Carry trade", def: "Borrowing low-yield and investing high-yield unhedged; negatively skewed with fat tails." },
      { term: "Saving-investment identity", def: "The current account equals national saving minus domestic investment." },
      { term: "Marshall-Lerner condition", def: "The sum of export and import demand elasticities exceeding one, required for depreciation to help the trade balance." },
      { term: "J-curve", def: "The pattern of a trade balance worsening after depreciation before improving as volumes adjust." },
      { term: "Taylor rule", def: "A benchmark policy rate from the neutral rate, inflation, the inflation gap and the output gap." },
      { term: "Mundell-Fleming model", def: "The framework linking monetary and fiscal policy to the exchange rate under differing capital mobility." },
      { term: "Total factor productivity", def: "The growth residual not explained by capital or labour accumulation." },
      { term: "Capital deepening", def: "Rising capital per worker, subject to diminishing returns and therefore not a permanent growth source." },
      { term: "Conditional convergence", def: "Convergence to a country's own steady state determined by saving, institutions and technology." },
    ],
    takeaways: [
      "Only covered interest parity is enforced by arbitrage; the other four conditions rest on expectations and fail.",
      "The high-interest currency trades at a forward discount — and empirically does not depreciate as much as that implies, which is the carry trade.",
      "Carry returns are negatively skewed with fat tails, and the crashes cluster in risk-off episodes.",
      "The real exchange rate, not the nominal one, measures competitiveness.",
      "A current account deficit is arithmetically a saving shortfall, not only a trade problem.",
      "Marshall-Lerner requires elasticities summing above one; the J-curve is what happens when they start low and rise.",
      "Under high capital mobility, loose money depreciates and loose fiscal policy appreciates — the signs reverse under low mobility.",
      "Capital deepening runs into diminishing returns; only TFP growth sustains growth indefinitely.",
    ],
  },
];

// Questions live in cfa-l2-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const econQuestionsL2: Question[] = [];
