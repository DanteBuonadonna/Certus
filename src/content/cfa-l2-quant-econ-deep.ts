// ============================================================
// Certus — CFA Level II: multiple regression and currency economics
//
// WHY THIS FILE EXISTS
// Level II quantitative methods and economics are both computational and
// both under-covered. Regression diagnostics in particular are examined as
// "which violation is this and what does it break" — a diagnostic skill
// that needs the violations laid out side by side to be learnable.
//
// EVERY NUMBER COMPUTED IN PYTHON FIRST. The adjusted R-squared example
// shows the figure FALLING below R-squared, which is the entire reason
// the adjusted version exists.
// ============================================================

import { Chapter, Question } from "./types";

export const l2QuantEconChapters: Chapter[] = [
  {
    id: "cfa-l2-multiple-regression",
    examSlug: "cfa-l2",
    topicId: "quant",
    topicName: "Quantitative Methods",
    title: "Multiple Regression: Reading the Output and Diagnosing the Violations",
    readingMinutes: 24,
    summary:
      "What each number in a regression output means, why adjusted R-squared exists, and the three assumption violations with their symptoms, consequences and corrections.",
    intro:
      "Level II gives you regression output and asks what is wrong with it. That is a diagnostic skill rather than a computational one, and it requires knowing what each violation does to the standard errors — because that is what every consequence flows through.",
    sections: [
      {
        heading: "Reading the output",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Adjusted R-squared",
              expr: "adjusted R² = 1 − (1 − R²) × (n − 1) / (n − k − 1)",
              note: "Penalises additional variables. It can FALL when a variable is added, and can even go negative.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Why the adjusted figure is the honest one",
              prompt:
                "A regression has 60 observations, 3 independent variables and an R-squared of 0.42. Compute the adjusted R-squared and the degrees of freedom.",
              steps: [
                "Degrees of freedom: regression = k = 3; error = n − k − 1 = 60 − 3 − 1 = 56.",
                "Adjusted R² = 1 − (1 − 0.42) × (59 / 56).",
                "= 1 − 0.58 × 1.0536 = 0.3889.",
              ],
              answer:
                "Adjusted R² is 0.389 against an R² of 0.420. The adjusted figure is always lower when there is more than one variable, and that is the point: plain R² can only RISE when a variable is added, even a random one, so it cannot tell you whether the variable earned its place. Adjusted R² falls when the added variable explains less than its degrees-of-freedom cost — which makes it the version to compare models with.",
            },
          },
          {
            kind: "bullets",
            items: [
              "The F-test asks whether the slope coefficients are jointly zero — a test of the model as a whole.",
              "A t-test asks whether ONE coefficient differs from zero, with df = n − k − 1.",
              "A coefficient is interpreted holding the other independent variables constant, which is the whole reason for multiple regression.",
              "Statistical significance is not economic significance: a tiny coefficient can be significant in a large sample and worthless after costs.",
            ],
          },
        ],
      },
      {
        heading: "The three violations",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Symptom, consequence, correction",
              headers: ["Violation", "What it is", "What it breaks", "Detect", "Correct"],
              rows: [
                ["Heteroskedasticity", "Error variance not constant", "Standard errors wrong; t-tests unreliable", "Breusch-Pagan", "Robust standard errors"],
                ["Serial correlation", "Errors correlated across observations", "Standard errors understated; t-stats inflated", "Durbin-Watson; Breusch-Godfrey", "Newey-West standard errors"],
                ["Multicollinearity", "Independent variables correlated with each other", "Coefficients unstable; t-stats low despite a high R²", "Variance inflation factor", "Drop or combine variables"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The signature that identifies multicollinearity",
            body: "A high R-squared and a significant F-test, with individually INSIGNIFICANT t-statistics. That combination is the fingerprint: the model as a whole explains the data well, but no single variable can be shown to matter because the variables are explaining the same thing as each other. Nothing else produces that pattern, and the exam relies on it.",
          },
          {
            kind: "p",
            text: "The common thread is that none of these three biases the COEFFICIENTS in an unconditional sense — they corrupt the STANDARD ERRORS, and therefore the inference. That is why the corrections are mostly to the standard errors rather than to the estimates, and why a model can be usable for prediction while being useless for hypothesis testing.",
          },
          {
            kind: "bullets",
            items: [
              "Conditional heteroskedasticity — error variance related to the independent variables — is the damaging kind. Unconditional is largely harmless.",
              "Serial correlation is most common in time series, which is why financial data is the usual offender.",
              "A Durbin-Watson near 2 suggests no serial correlation; near 0 suggests positive, near 4 negative.",
              "Model misspecification — omitting a relevant variable, wrong functional form, using a lagged dependent variable carelessly — biases the coefficients themselves, which is worse than any of the three above.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Adjusted R-squared", def: "Penalises added variables; falls when one does not earn its place." },
      { term: "Degrees of freedom (error)", def: "n − k − 1." },
      { term: "Heteroskedasticity", def: "Non-constant error variance; the conditional kind is what matters." },
      { term: "Serial correlation", def: "Correlated errors; understates standard errors and inflates t-stats." },
      { term: "Multicollinearity signature", def: "High R², significant F, insignificant t-statistics." },
      { term: "Misspecification", def: "Biases the coefficients themselves — worse than the three violations." },
    ],
    takeaways: [
      "Plain R² can only rise; adjusted R² can fall, which is what makes it comparable across models.",
      "All three violations corrupt STANDARD ERRORS rather than the coefficients.",
      "High R², significant F, insignificant t's is the multicollinearity fingerprint.",
      "Conditional heteroskedasticity is the damaging kind; unconditional is largely harmless.",
      "Corrections are mostly to standard errors — robust and Newey-West.",
      "Misspecification biases the estimates and is worse than any of the three.",
    ],
  },

  {
    id: "cfa-l2-currency-economics",
    examSlug: "cfa-l2",
    topicId: "econ",
    topicName: "Economics",
    title: "Exchange Rates: Parity Conditions and the Carry Trade",
    readingMinutes: 22,
    summary:
      "Computing cross rates, the parity conditions and how they connect, why uncovered interest parity fails empirically, and what that failure funds.",
    intro:
      "Level II economics is mostly currency, and currency is mostly a set of parity conditions that should all hold and mostly do not. Knowing which hold by arbitrage and which are merely theory is what the exam is testing.",
    sections: [
      {
        heading: "Cross rates",
        blocks: [
          {
            kind: "example",
            example: {
              title: "Cancelling the common currency",
              prompt:
                "USD/GBP is 1.2600 and USD/EUR is 1.0850. What is EUR/GBP?",
              steps: [
                "Write both as dollars per unit: $1.2600 per pound, $1.0850 per euro.",
                "EUR/GBP = (USD/GBP) / (USD/EUR) = 1.2600 / 1.0850.",
              ],
              answer:
                "1.1613 euros per pound. Set the calculation up so the common currency cancels and the answer's units are self-checking — if the dollars do not cancel, the expression is inverted. That habit matters more than the arithmetic, because the arithmetic is trivial and the inversion is the error.",
            },
          },
          {
            kind: "p",
            text: "With bid-offer quotes the rule is to use the rate that is WORSE for you at each leg. Buying the base currency of a cross means taking the offer on one side and the bid on the other; a dealer never gives you both mid-rates, and the exam prices that in.",
          },
        ],
      },
      {
        heading: "The parity conditions",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Which hold, and why",
              headers: ["Condition", "Says", "Holds?"],
              rows: [
                ["Covered interest parity", "Forward premium equals the interest differential", "YES — enforced by arbitrage"],
                ["Uncovered interest parity", "Expected spot change equals the interest differential", "Poorly, especially short-term"],
                ["Purchasing power parity", "Exchange rates equalise the price of goods", "Poorly short-term, better over decades"],
                ["International Fisher effect", "Nominal rate differences reflect expected inflation differences", "Approximately, over long horizons"],
              ],
            },
          },
          {
            kind: "callout",
            label: "One is arbitrage, the rest are theory",
            body: "COVERED interest parity holds because violating it is a riskless profit — borrow in one currency, convert at spot, invest, and lock the return with a forward. UNCOVERED parity has no such enforcement: it is a statement about EXPECTATIONS, and nothing forces expectations to be right. That distinction is the most useful sentence in the topic.",
          },
          {
            kind: "example",
            example: {
              title: "The carry trade, and the puzzle it rests on",
              prompt:
                "Rates are 4.5% in one currency and 2.1% in another. What does uncovered interest parity predict, and what does the carry trade assume instead?",
              steps: [
                "Gross carry = 4.5% − 2.1% = 2.4%.",
                "Uncovered interest parity predicts the high-rate currency DEPRECIATES about 2.4%, erasing the gain exactly.",
                "The carry trade borrows the low-rate currency and invests in the high-rate one, keeping the 2.4% if the depreciation does not arrive.",
              ],
              answer:
                "Uncovered interest parity says the trade should earn nothing. Empirically the predicted depreciation often fails to appear — the FORWARD PREMIUM PUZZLE — which is precisely why the carry trade has been persistently profitable. The catch is the return profile: small steady gains punctuated by severe losses when positions unwind together, so it is negatively skewed and a Sharpe ratio flatters it badly.",
            },
          },
        ],
      },
      {
        heading: "What moves a currency",
        blocks: [
          {
            kind: "bullets",
            items: [
              "The Mundell-Fleming model: under high capital mobility, expansionary MONETARY policy weakens a currency while expansionary FISCAL policy strengthens it, because the fiscal expansion raises rates.",
              "Under a fixed exchange rate, monetary policy loses independence — the impossible trinity of free capital flows, a fixed rate and independent monetary policy allows any two.",
              "A persistent current account deficit tends to weigh on a currency, though financing flows can dominate for long periods.",
              "The portfolio balance channel: sustained deficits require ever-larger foreign holdings, which eventually demand a risk premium.",
            ],
          },
          {
            kind: "p",
            text: "The Mundell-Fleming result is the one most often reversed under pressure. Loose money means more of a currency and lower rates on it, so it falls. Loose fiscal policy means more borrowing and higher rates, so capital flows in and the currency rises — even though both are described as \"stimulus\". Reason from the rate, not from the word.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Cross rate", def: "Divide so the common currency cancels; units check the setup." },
      { term: "Covered interest parity", def: "Enforced by arbitrage — it holds." },
      { term: "Uncovered interest parity", def: "A statement about expectations. Nothing enforces it." },
      { term: "Forward premium puzzle", def: "The predicted depreciation routinely fails to appear." },
      { term: "Carry trade", def: "Borrow low, invest high; negatively skewed returns." },
      { term: "Impossible trinity", def: "Free capital, fixed rate, independent monetary policy — pick two." },
    ],
    takeaways: [
      "Set cross rates up so the common currency cancels; the units check the work.",
      "Covered parity holds by arbitrage; uncovered parity is only a claim about expectations.",
      "The forward premium puzzle is what makes the carry trade profitable.",
      "Carry returns are negatively skewed, so the Sharpe ratio flatters them.",
      "Loose monetary policy weakens a currency; loose fiscal policy strengthens it.",
      "Reason from the interest rate, not from the word \"stimulus\".",
    ],
  },
];

export const l2QuantEconQuestions: Question[] = [];
