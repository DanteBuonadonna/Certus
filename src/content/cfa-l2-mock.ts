// ============================================================
// Certus — CFA Level II Mock bank (vignette item sets)
// ORIGINAL cases written to the Level II format: a case scenario
// with exhibits, followed by 4 questions, 3 choices each,
// ~3 minutes per question (2 × 2h12m sessions, 88 questions).
//
// L2_QUICK        — 3 item sets (12 questions) readiness sample
// L2_SESSION_1/2  — full exam, 11 item sets per session (staged)
// ============================================================

import { Question } from "./types";
import { ItemSet } from "@/lib/mockExam";

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
  examSlug: "cfa-l2",
  topicId,
  topicName,
  difficulty,
  stem,
  choices,
  answerIndex,
  explanation,
});

export const L2_QUICK: ItemSet[] = [
  {
    id: "l2q-equity-fcff",
    title: "Tremont Industrials Case Scenario",
    vignette: [
      "Dana Whitlock, CFA, covers Tremont Industrials, a diversified manufacturer. Tremont pays no dividend and has repurchased shares irregularly, so Whitlock values the company using a free-cash-flow approach. She gathers the operating data shown in Exhibit 1 from Tremont's most recent annual report.",
      "Tremont's capital structure is 70% equity and 30% debt at market values. Whitlock estimates the cost of equity at 11.0% and the company's pre-tax cost of debt at 6.0%. The marginal tax rate is 25%.",
      "Whitlock believes Tremont's free cash flow to the firm will grow at a constant 3.0% annually. Tremont has debt outstanding with a market value of $1,500 million and 300 million shares outstanding. A colleague suggests Whitlock switch to a free-cash-flow-to-equity model, noting that Tremont's management has announced a multi-year plan to substantially increase leverage.",
    ],
    exhibits: [
      {
        caption: "Exhibit 1 — Tremont Industrials, selected data ($ millions)",
        headers: ["Item", "Amount"],
        rows: [
          ["EBIT", "800"],
          ["Depreciation & amortization", "150"],
          ["Capital expenditures", "210"],
          ["Increase in working capital", "60"],
          ["Marginal tax rate", "25%"],
        ],
      },
    ],
    questions: [
      q(
        "l2q-eq-1",
        "equity",
        "Equity Investments",
        2,
        "Using Exhibit 1, Tremont's most recent free cash flow to the firm (FCFF) is closest to:",
        ["$480 million", "$540 million", "$690 million"],
        0,
        "Correct: A. FCFF = EBIT(1 − t) + D&A − capex − ΔWC = 800(0.75) + 150 − 210 − 60 = 600 + 150 − 270 = $480m. B ($540m) forgets the working-capital investment; C ($690m) forgets capital expenditures. Both capex and the working-capital build are cash the firm must reinvest before anything is available to capital providers — leaving either out is the most common FCFF error."
      ),
      q(
        "l2q-eq-2",
        "equity",
        "Equity Investments",
        2,
        "Tremont's weighted average cost of capital is closest to:",
        ["7.13%", "9.05%", "9.50%"],
        1,
        "Correct: B. WACC = 0.70 × 11.0% + 0.30 × 6.0% × (1 − 0.25) = 7.70% + 1.35% = 9.05%. C (9.50%) omits the tax shield on debt; A (7.13%) incorrectly applies the tax adjustment to the equity component as well. Only debt's cost is tax-adjusted, because interest — unlike the return to equity — is tax-deductible."
      ),
      q(
        "l2q-eq-3",
        "equity",
        "Equity Investments",
        3,
        "Using Whitlock's estimates (FCFF growing at 3.0%, WACC of 9.05%), the value per share of Tremont is closest to:",
        ["$21.45", "$22.24", "$27.24"],
        1,
        "Correct: B. Firm value = FCFF₀ × (1 + g) / (WACC − g) = 480 × 1.03 / (0.0905 − 0.03) = 494.4 / 0.0605 = $8,173m. Equity value = 8,173 − 1,500 debt = $6,673m; per share = 6,673 / 300 = $22.24. A ($21.45) forgets to grow FCFF one period before capitalizing. C ($27.24) values the FIRM per share, forgetting to subtract the debt — FCFF belongs to all capital providers, so debt must come out before equity holders' share is computed."
      ),
      q(
        "l2q-eq-4",
        "equity",
        "Equity Investments",
        3,
        "Regarding the colleague's suggestion to switch to an FCFE model, the most appropriate response is that FCFF is:",
        [
          "preferred, because FCFE is difficult to forecast reliably when the capital structure is expected to change materially.",
          "inferior, because FCFF ignores the effects of leverage on shareholder value.",
          "equivalent, because FCFF and FCFE always produce identical equity values.",
        ],
        0,
        "Correct: A. When leverage is changing, FCFE becomes volatile and hard to project — net borrowing flows swing the measure year to year — so the standard guidance is to value the firm with FCFF at the WACC and subtract debt. B is wrong: leverage effects are captured through the WACC and the debt subtraction. C overstates: the two approaches reconcile only under consistent assumptions, and their practical reliability differs exactly when capital structure shifts, as here."
      ),
    ],
  },
  {
    id: "l2q-fra-pension",
    title: "Meridian Foods Case Scenario",
    vignette: [
      "Meridian Foods sponsors a defined-benefit pension plan and reports under IFRS. Priya Raman, CFA, is analyzing the plan's effect on Meridian's financial statements using the data in Exhibit 1.",
      "Raman notes that the discount rate used for the plan is 5.0%, and that under IFRS the net interest cost is computed on the net pension liability. During the year there were no plan amendments, curtailments, or changes in actuarial assumptions other than asset performance.",
      "A colleague reviewing a US-GAAP-reporting competitor remarks that its pension expense looks artificially low, and asks Raman which assumption management most likely adjusted to achieve that result.",
    ],
    exhibits: [
      {
        caption: "Exhibit 1 — Meridian defined-benefit plan, beginning of year ($ millions)",
        headers: ["Item", "Amount"],
        rows: [
          ["Benefit obligation (PBO), beginning", "1,000"],
          ["Fair value of plan assets, beginning", "800"],
          ["Current service cost", "45"],
          ["Discount rate", "5.0%"],
          ["Actual return on plan assets", "70"],
          ["Employer contributions", "50"],
          ["Benefits paid", "40"],
        ],
      },
    ],
    questions: [
      q(
        "l2q-fra-1",
        "fra",
        "Financial Statement Analysis",
        3,
        "Under IFRS, the pension expense recognized in Meridian's profit or loss for the year is closest to:",
        ["$25 million", "$55 million", "$95 million"],
        1,
        "Correct: B. IFRS P&L expense = current service cost + net interest cost = 45 + 5.0% × (1,000 − 800) = 45 + 10 = $55m. Net interest is computed on the NET liability of 200, not gross. C ($95m) charges interest on the full obligation (50) while ignoring the offsetting income accrued on plan assets. A ($25m) improperly nets the ACTUAL asset return of 70 against expense — under IFRS the actual-versus-assumed difference goes to OCI, not P&L."
      ),
      q(
        "l2q-fra-2",
        "fra",
        "Financial Statement Analysis",
        3,
        "The remeasurement effect recognized in Meridian's other comprehensive income for the year is closest to a:",
        ["gain of $10 million", "gain of $30 million", "gain of $70 million"],
        1,
        "Correct: B. Under IFRS, remeasurements include the difference between the actual return on plan assets and the return implied by the discount rate: 70 actual − (5.0% × 800 = 40) = a $30m gain, recognized in OCI and never recycled to P&L. C ($70m) puts the entire actual return in OCI, ignoring that 40 of it is already reflected in net interest. A ($10m) confuses the net interest cost with the remeasurement."
      ),
      q(
        "l2q-fra-3",
        "fra",
        "Financial Statement Analysis",
        2,
        "The fair value of Meridian's plan assets at year-end is closest to:",
        ["$870 million", "$880 million", "$920 million"],
        1,
        "Correct: B. Ending assets = beginning 800 + actual return 70 + contributions 50 − benefits paid 40 = $880m. A ($870m) uses the assumed return (40) plus an arithmetic slip or nets benefits twice; C ($920m) forgets that benefits are paid OUT of plan assets. The asset roll-forward uses the ACTUAL return — assumptions matter for expense, not for the assets themselves."
      ),
      q(
        "l2q-fra-4",
        "fra",
        "Financial Statement Analysis",
        3,
        "Regarding the colleague's question about the US GAAP competitor, the assumption most likely adjusted to reduce reported pension expense is:",
        [
          "a higher expected return on plan assets.",
          "a lower discount rate.",
          "a higher rate of compensation growth.",
        ],
        0,
        "Correct: A. Under US GAAP, the EXPECTED return on plan assets directly reduces periodic pension cost in the income statement — raising that assumption lowers expense with no immediate cash or funded-status effect, making it the classic lever (IFRS removed this lever by tying asset income to the discount rate). B works in the wrong direction for expense (a lower discount rate raises service and interest cost), and C raises future benefits and therefore expense."
      ),
    ],
  },
  {
    id: "l2q-fixed-curve",
    title: "Calloway Advisors Case Scenario",
    vignette: [
      "Marcus Bell, CFA, manages fixed income portfolios at Calloway Advisors. He observes the benchmark government spot curve shown in Exhibit 1 and is evaluating a two-year, 6% annual-pay government bond with a par value of 100.",
      "Bell expects the yield curve to remain unchanged over the coming year and is considering buying bonds with maturities longer than his one-year investment horizon to earn additional return as they 'roll down' the curve.",
      "Separately, a junior analyst asks Bell how the option-adjusted spread (OAS) of a PUTABLE corporate bond compares with its Z-spread, given that the put option has meaningful value.",
    ],
    exhibits: [
      {
        caption: "Exhibit 1 — Benchmark spot rates",
        headers: ["Maturity", "Spot rate"],
        rows: [
          ["1 year", "4.00%"],
          ["2 years", "5.00%"],
        ],
      },
    ],
    questions: [
      q(
        "l2q-fix-1",
        "fixed",
        "Fixed Income",
        2,
        "Using Exhibit 1, the implied one-year forward rate one year from now — f(1,1) — is closest to:",
        ["4.50%", "5.00%", "6.01%"],
        2,
        "Correct: C. (1 + f)  = (1.05)² / (1.04) = 1.1025 / 1.04 = 1.06010, so f(1,1) ≈ 6.01%. The forward is the rate that makes investing for two years at the 2-year spot equivalent to rolling one-year investments. A (4.50%) simply averages the two spots — forwards are geometric, not arithmetic. B (5.00%) mistakes the 2-year spot itself for the forward; with an upward-sloping curve, the forward must sit ABOVE the long spot."
      ),
      q(
        "l2q-fix-2",
        "fixed",
        "Fixed Income",
        2,
        "Using the spot rates in Exhibit 1, the arbitrage-free price of the two-year 6% annual-pay bond is closest to:",
        ["100.00", "101.91", "103.77"],
        1,
        "Correct: B. Each cash flow is discounted at ITS OWN spot rate: 6/1.04 + 106/(1.05)² = 5.769 + 96.145 = 101.91. C (103.77) discounts everything at the 1-year rate; A assumes the bond trades at par, which would require the coupon to equal the (blended) required yield — it doesn't. Discounting each flow at the matching spot is what 'arbitrage-free' means: any other price could be exploited by stripping and reconstituting the bond."
      ),
      q(
        "l2q-fix-3",
        "fixed",
        "Fixed Income",
        3,
        "If Bell's expectation of an unchanged yield curve proves correct, his 'rolling down the curve' strategy will most likely:",
        [
          "outperform a maturity-matched strategy, because the bond is sold at a lower yield (higher price) as it ages down the upward-sloping curve.",
          "underperform, because forward rates will be realized exactly as implied.",
          "produce the same return as any government bond held over the year.",
        ],
        0,
        "Correct: A. Riding the curve works precisely when the curve is upward-sloping AND does NOT move to the forwards: as the 2-year bond becomes a 1-year bond, it is repriced at the lower 1-year yield, generating price appreciation on top of the coupon. B describes the pure-expectations outcome — if forwards WERE realized, rolldown gains vanish and all strategies equalize; Bell's view is explicitly that the curve stays put instead. C is the special case B describes, not the expected result here."
      ),
      q(
        "l2q-fix-4",
        "fixed",
        "Fixed Income",
        3,
        "The most accurate answer to the junior analyst's question is that, for the putable bond, the OAS is:",
        [
          "higher than the Z-spread, because the put option benefits the investor and the OAS removes the option's (negative) cost.",
          "lower than the Z-spread, because option removal always reduces spread.",
          "equal to the Z-spread, because spreads are unaffected by embedded options.",
        ],
        0,
        "Correct: A. The Z-spread of a putable bond is COMPRESSED because investors pay for the put protection through a lower yield. The OAS strips out the option effect: OAS = Z-spread + put option value (in spread terms), so OAS > Z-spread for putables. B states the CALLABLE relationship (OAS < Z-spread) as if universal — the direction depends on who the option favors. C is wrong whenever the embedded option has value, which the vignette states it does."
      ),
    ],
  },
];

// Full exam: 11 item sets per session (44 questions each). Authored in
// waves; the full Level II mock unlocks when both sessions are complete.
export const L2_SESSION_1: ItemSet[] = [
  {
    id: "l2s1-ethics",
    title: "Meridian Securities Case Scenario",
    vignette: [
      "Lucia Rojas, CFA, is a senior equity analyst at Meridian Securities, covering Helios BioWorks. Meridian's investment banking group is competing for Helios's upcoming secondary offering, and the group's head emails Rojas: 'A downgrade right now would be unhelpful. Keep the buy rating through the mandate decision.' Rojas's own analysis increasingly supports a hold rating.",
      "Preparing her update, Rojas arranges a call through an expert-network firm with a former Helios clinical researcher. During the call, the expert says: 'The Phase III interim results aren't public yet, but enrollment sites were told the primary endpoint was missed.' Rojas ends the call immediately.",
      "Rojas holds 2,000 shares of Helios purchased years before initiating coverage, in compliance with firm policy. Separately, Helios's investor relations team invites her to visit the company's remote manufacturing facility, offering a seat on the corporate aircraft; the site is not served by commercial flights.",
    ],
    questions: [
      q(
        "l2s1-eth-1",
        "ethics",
        "Ethical & Professional Standards",
        2,
        "With respect to the investment banking group's email, Rojas's most appropriate action under the Standards is to:",
        [
          "issue the rating her analysis supports, escalating the pressure through compliance if necessary.",
          "maintain the buy rating until the mandate is decided, then downgrade.",
          "drop coverage of Helios quietly to avoid the conflict.",
        ],
        0,
        "Correct: A. Standard I(B) Independence and Objectivity requires the research conclusion to reflect the analyst's own view — banking revenue pressure is the paradigm threat the Standard targets, and firms are expected to have firewalls and escalation channels for exactly this situation. B is capitulation with a delay: timing a rating to protect a mandate IS the violation. C might occasionally be a firm-level outcome, but 'quietly' dropping coverage to accommodate banking pressure misleads existing clients who rely on the rating."
      ),
      q(
        "l2s1-eth-2",
        "ethics",
        "Ethical & Professional Standards",
        2,
        "Regarding the expert-network call, Rojas may most appropriately:",
        [
          "use the endpoint information because it was obtained through a legitimate paid research channel.",
          "not trade or issue research based on the endpoint information, because it is material nonpublic information regardless of the channel.",
          "use the information only after confirming it with a second independent expert.",
        ],
        1,
        "Correct: B. Unreleased Phase III results are material and nonpublic; Standard II(A) prohibits acting on MNPI no matter how it arrives — paying an expert network does not launder it, and ending the call was the right first step (followed by notifying compliance). A confuses a legitimate CHANNEL with legitimate CONTENT; expert networks are permissible only when experts stay within public or nonmaterial territory. C compounds the violation — corroborating MNPI is still using it."
      ),
      q(
        "l2s1-eth-3",
        "ethics",
        "Ethical & Professional Standards",
        1,
        "With respect to her 2,000 Helios shares, Rojas is most clearly required to:",
        [
          "sell the shares before publishing any further research.",
          "disclose the ownership prominently in her research reports on Helios.",
          "transfer the shares to a family member's account.",
        ],
        1,
        "Correct: B. Standard VI(A) requires prominent disclosure of conflicts that could impair objectivity — share ownership in a covered company is the standard example, and disclosure (plus firm trading restrictions) is the prescribed remedy, not forced divestiture (A). C is worse than doing nothing: moving shares to a related account conceals the conflict while retaining beneficial ownership — a disclosure violation with intent."
      ),
      q(
        "l2s1-eth-4",
        "ethics",
        "Ethical & Professional Standards",
        3,
        "Regarding the facility visit, accepting the corporate aircraft seat is most appropriately viewed as:",
        [
          "a violation under all circumstances, since issuer-paid travel is prohibited.",
          "acceptable if commercial transportation is genuinely unavailable and the arrangement is disclosed to her employer.",
          "acceptable without conditions, because site visits benefit investors.",
        ],
        1,
        "Correct: B. The guidance under Standard I(B) is practical, not absolute: analysts should pay their own way and use commercial travel WHEN AVAILABLE — but for a site genuinely unreachable commercially, accepting issuer transport can be acceptable with employer disclosure and consideration of whether objectivity is compromised. A overstates the rule by deleting its exception; C understates it by deleting the conditions — 'benefit to investors' never self-certifies a perk."
      ),
    ],
  },
  {
    id: "l2s1-quant",
    title: "Halden Analytics Case Scenario",
    vignette: [
      "Petra Hale, CFA, evaluates an equity fund using a two-factor regression of the fund's monthly excess returns on the market excess return (MKT) and a size factor (SMB), estimated over 60 months. Regression output appears in Exhibit 1.",
      "Hale notes the F-statistic for the regression is significant at the 1% level, and that the critical t-value at the 5% significance level with 57 degrees of freedom is approximately 2.00.",
      "A colleague asks Hale to forecast the fund's excess return for a month in which she expects the market excess return to be 2.0% and the SMB factor return to be 1.0%.",
    ],
    exhibits: [
      {
        caption: "Exhibit 1 — Regression results (dependent variable: fund excess return, %)",
        headers: ["Variable", "Coefficient", "Standard error"],
        rows: [
          ["Intercept", "0.80", "0.67"],
          ["MKT", "1.05", "0.10"],
          ["SMB", "0.45", "0.30"],
          ["R²", "0.72", "—"],
          ["Observations", "60", "—"],
        ],
      },
    ],
    questions: [
      q(
        "l2s1-qnt-1",
        "quant",
        "Quantitative Methods",
        2,
        "At the 5% significance level, the SMB coefficient is most accurately described as:",
        [
          "statistically significant, because the coefficient is positive.",
          "not statistically significant, because its t-statistic of 1.50 is below the critical value of 2.00.",
          "statistically significant, because the regression's F-statistic is significant.",
        ],
        1,
        "Correct: B. t = coefficient / standard error = 0.45 / 0.30 = 1.50 < 2.00, so we fail to reject the null that the SMB coefficient is zero. A judges significance by sign, which means nothing without the standard error. C commits the classic conflation: a significant F-statistic says the regression as a WHOLE has explanatory power — it cannot certify any individual coefficient, which is exactly why both tests exist."
      ),
      q(
        "l2s1-qnt-2",
        "quant",
        "Quantitative Methods",
        2,
        "The most accurate interpretation of the MKT coefficient of 1.05 is that a one-percentage-point increase in the market excess return is associated with:",
        [
          "a 1.05-percentage-point increase in the fund's excess return, holding SMB constant.",
          "a 1.05-percentage-point increase in the fund's excess return, regardless of the other factor.",
          "a 105% probability the fund outperforms the market.",
        ],
        0,
        "Correct: A. In multiple regression, each slope is a PARTIAL effect — the expected change in the dependent variable per unit change in that regressor with all other regressors held fixed. Omitting the 'holding SMB constant' qualifier (B) turns a partial effect into a total one, which is only valid if the factors are uncorrelated. C is a category error; regression coefficients are not probabilities."
      ),
      q(
        "l2s1-qnt-3",
        "quant",
        "Quantitative Methods",
        1,
        "The R² of 0.72 is best interpreted to mean that:",
        [
          "72% of the variation in the fund's excess returns is jointly explained by the two factors.",
          "the correlation between fund and market returns is 0.72.",
          "the fund outperformed its benchmark in 72% of months.",
        ],
        0,
        "Correct: A. R² is the proportion of the dependent variable's variance explained by the regression's factors together. B holds only in SIMPLE (one-variable) regression, where R² is the squared correlation — with two regressors the link breaks. C invents a hit-rate interpretation that no regression statistic provides."
      ),
      q(
        "l2s1-qnt-4",
        "quant",
        "Quantitative Methods",
        2,
        "Using Exhibit 1, Hale's forecast of the fund's excess return for the colleague's scenario is closest to:",
        ["2.55%", "3.35%", "4.15%"],
        1,
        "Correct: B. Prediction = intercept + b₁(MKT) + b₂(SMB) = 0.80 + 1.05 × 2.0 + 0.45 × 1.0 = 0.80 + 2.10 + 0.45 = 3.35%. A omits the intercept — a common slip since its t-statistic is insignificant, but the point forecast still uses the estimated equation as a whole. C double-counts the SMB term. (Whether to trust the SMB exposure is a separate judgment from computing the model's prediction.)"
      ),
    ],
  },
  {
    id: "l2s1-econ",
    title: "Tanaka Global Macro Case Scenario",
    vignette: [
      "Rin Tanaka, CFA, analyzes currency markets. The spot USD/EUR exchange rate is 1.2000 (dollars per euro). One-year risk-free rates are 4.0% in the United States and 2.0% in the eurozone. Tanaka computes the one-year forward rate implied by covered interest rate parity.",
      "A dealer quotes Tanaka a one-year forward of USD/EUR 1.2400. Tanaka evaluates whether an arbitrage opportunity exists and, if so, how to exploit it.",
      "Separately, Tanaka's team debates longer-run currency drivers. Eurozone inflation is expected to run persistently below US inflation over the coming decade.",
    ],
    questions: [
      q(
        "l2s1-eco-1",
        "econ",
        "Economics",
        2,
        "The one-year forward USD/EUR rate implied by covered interest rate parity is closest to:",
        ["1.1765", "1.2000", "1.2235"],
        2,
        "Correct: C. F = S × (1 + r_USD) / (1 + r_EUR) = 1.2000 × 1.04 / 1.02 = 1.2235. The higher-rate currency (USD) must trade at a forward DISCOUNT — equivalently, the euro at a forward premium — so that hedged returns equalize. A (1.1765) inverts the ratio, putting the euro at a discount, which would let everyone earn the US rate risk-free in euros. B assumes forward = spot, which requires equal interest rates."
      ),
      q(
        "l2s1-eco-2",
        "econ",
        "Economics",
        3,
        "Given the dealer's 1.2400 forward quote, the arbitrage that captures a riskless profit is most accurately to:",
        [
          "borrow US dollars, convert to euros at spot, invest at the euro rate, and sell the euro proceeds forward at 1.2400.",
          "borrow euros, convert to dollars at spot, invest at the dollar rate, and buy euros forward at 1.2400.",
          "do nothing, since 1.2400 is within normal bid–ask bounds of the parity value.",
        ],
        0,
        "Correct: A. The quote overprices forward euros (1.2400 vs. the 1.2235 parity value), so the arbitrage SELLS euros forward at the rich price: borrow USD at 4%, buy euros at 1.2000 spot, earn 2% in euros, and deliver those euros against the 1.2400 forward. Per euro invested: proceeds 1.02 × 1.2400 = $1.2648 versus a repayment of 1.2000 × 1.04 = $1.2480 — a riskless $0.0168. B runs the trade backwards, BUYING what is overpriced. C waves away a 1.3% mispricing far outside plausible transaction costs."
      ),
      q(
        "l2s1-eco-3",
        "econ",
        "Economics",
        2,
        "Based on relative purchasing power parity, the team's inflation forecast implies that over the long run the euro should:",
        [
          "appreciate against the dollar by roughly the inflation differential per year.",
          "depreciate against the dollar as low inflation weakens euro-area demand.",
          "be unaffected, because PPP applies only to fixed exchange rate regimes.",
        ],
        0,
        "Correct: A. Relative PPP ties currency movement to inflation differentials: the LOWER-inflation currency appreciates, preserving relative purchasing power — with US inflation persistently higher, the dollar loses ground to the euro at roughly the differential. B inverts the relationship with a demand story PPP doesn't make. C is backwards: PPP is a theory of how FLOATING rates drift over long horizons; pegs are where it's suppressed."
      ),
      q(
        "l2s1-eco-4",
        "econ",
        "Economics",
        2,
        "That the euro trades at a forward premium against the dollar in Tanaka's parity calculation is most directly explained by:",
        [
          "the eurozone's lower interest rate.",
          "expected euro strength priced in by speculators.",
          "the ECB's currency intervention policy.",
        ],
        0,
        "Correct: A. Under covered parity the forward premium/discount is pure interest rate arithmetic: F/S = (1+r_domestic)/(1+r_foreign), so the LOW-rate currency (EUR at 2%) must stand at a forward premium — otherwise borrowing in it and lending in the high-rate currency hedged would be free money. B describes an expectations story that covered parity specifically does NOT require; the relation holds by arbitrage regardless of forecasts. C is irrelevant to the mechanical parity relationship."
      ),
    ],
  },
  {
    id: "l2s1-fra-intercorp",
    title: "Bishop Holdings Case Scenario",
    vignette: [
      "Bishop Holdings owns 30% of the voting shares of Arden Logistics, acquired at a cost equal to 30% of Arden's book value, and exercises significant influence. Bishop accounts for Arden using the equity method. Data for Arden's most recent year appear in Exhibit 1.",
      "Bishop's CFO is evaluating an increase in the stake to 55%, which would give Bishop control and require full consolidation. An analyst on Bishop's finance team asks how consolidation would change Bishop's reported revenue, net income, and equity compared with the equity method.",
    ],
    exhibits: [
      {
        caption: "Exhibit 1 — Arden Logistics, most recent year ($ millions)",
        headers: ["Item", "Amount"],
        rows: [
          ["Bishop's beginning investment (carrying value)", "1,000"],
          ["Arden net income", "200"],
          ["Arden dividends declared and paid", "60"],
          ["Arden revenue", "3,400"],
        ],
      },
    ],
    questions: [
      q(
        "l2s1-fra-1",
        "fra",
        "Financial Statement Analysis",
        2,
        "Under the equity method, the income Bishop recognizes from Arden for the year is closest to:",
        ["$18 million", "$42 million", "$60 million"],
        2,
        "Correct: C. Equity-method income = ownership share × investee net income = 30% × 200 = $60m — recognized regardless of how much Arden distributes. A ($18m) is Bishop's share of the DIVIDEND, which is a return OF investment, not income. B ($42m) improperly nets the dividend share against the income share; the dividend affects the investment's carrying value, never the income line."
      ),
      q(
        "l2s1-fra-2",
        "fra",
        "Financial Statement Analysis",
        2,
        "Bishop's carrying value of the Arden investment at year-end is closest to:",
        ["$1,042 million", "$1,060 million", "$1,078 million"],
        0,
        "Correct: A. Ending carrying value = 1,000 + share of income (60) − share of dividends (30% × 60 = 18) = $1,042m. The investment account grows with earned income and shrinks as cash is distributed out. B forgets the dividend reduction; C ADDS the dividend share instead of subtracting it — treating a cash distribution as if it grew the investment."
      ),
      q(
        "l2s1-fra-3",
        "fra",
        "Financial Statement Analysis",
        3,
        "Compared with the equity method, full consolidation of Arden would most likely report:",
        [
          "higher revenue and higher net income attributable to Bishop's shareholders.",
          "higher revenue but the same net income attributable to Bishop's shareholders.",
          "identical revenue and net income, since ownership economics are unchanged.",
        ],
        1,
        "Correct: B. Consolidation replaces the one-line equity pickup with 100% of Arden's revenues, expenses, assets, and liabilities — so revenue (and assets and liabilities) balloon. But the income belonging to Bishop's OWNERS is the same share of Arden's earnings either way; the portion not owned is backed out as noncontrolling interest. This is the central analytical trap: consolidation changes SIZE and ratios (margins fall, leverage shifts), not the parent shareholders' bottom line. A misses the NCI subtraction; C misses the gross-up entirely."
      ),
      q(
        "l2s1-fra-4",
        "fra",
        "Financial Statement Analysis",
        2,
        "If Bishop consolidates Arden at 55% ownership, the 45% of Arden that Bishop does not own appears on Bishop's balance sheet as:",
        [
          "noncontrolling interest, presented within equity.",
          "a long-term liability to Arden's other shareholders.",
          "it does not appear; only Bishop's 55% share is consolidated.",
        ],
        0,
        "Correct: A. Consolidation brings in 100% of the subsidiary; the outside owners' claim is shown as noncontrolling (minority) interest, presented as a separate component OF EQUITY under both IFRS and US GAAP. B misclassifies an ownership claim as debt — NCI holders have no creditor rights. C describes proportionate consolidation, which is not permitted for controlled subsidiaries."
      ),
    ],
  },
  {
    id: "l2s1-fra-fx",
    title: "Orion Consumer Group Case Scenario",
    vignette: [
      "Orion Consumer Group, a US parent, owns a wholly owned Nordic subsidiary whose day-to-day operations — sales, costs, and financing — are conducted in Swedish krona (SEK). Orion's controller concludes the subsidiary's functional currency is the krona, and that the local economy is not hyperinflationary.",
      "During the year the krona depreciated steadily against the dollar: the historical rate when the subsidiary's equity was contributed and its inventory acquired was $0.100 per SEK, the average rate for the year was $0.095, and the year-end (current) rate is $0.090. The subsidiary maintains a substantial positive net asset position.",
      "An analyst on Orion's investor relations team is preparing answers on how the subsidiary's inventory is translated and where the year's translation effects will appear in Orion's consolidated statements.",
    ],
    questions: [
      q(
        "l2s1-fx-1",
        "fra",
        "Financial Statement Analysis",
        2,
        "Given the controller's functional-currency conclusion, the subsidiary's financial statements should be translated using the:",
        [
          "current rate method.",
          "temporal method.",
          "temporal method for monetary items and current rate method for the remainder.",
        ],
        0,
        "Correct: A. When the FUNCTIONAL currency is the local currency (and the economy is not hyperinflationary), the current rate (translation) method applies: assets and liabilities at the closing rate, income at the average rate, equity at historical rates. The temporal method (B) applies when the functional currency is the PARENT's currency — typically a sub that's an extension of the parent — or under US GAAP in hyperinflation. C describes no permitted method; the monetary/nonmonetary split is a feature WITHIN the temporal method, not a hybrid."
      ),
      q(
        "l2s1-fx-2",
        "fra",
        "Financial Statement Analysis",
        2,
        "Under the method identified, the subsidiary's inventory is translated at:",
        ["$0.090 per SEK.", "$0.095 per SEK.", "$0.100 per SEK."],
        0,
        "Correct: A. The current rate method translates ALL assets and liabilities — inventory included — at the current (closing) rate of $0.090. C ($0.100, the historical rate) is where inventory would land under the TEMPORAL method, which keeps nonmonetary assets carried at cost at their historical rates; that contrast is the most-tested distinction between the methods. B (the average rate) applies to income statement items, not balance sheet items."
      ),
      q(
        "l2s1-fx-3",
        "fra",
        "Financial Statement Analysis",
        2,
        "The year's translation adjustment will most likely appear in Orion's consolidated:",
        [
          "income statement, within other operating income.",
          "equity, as a cumulative translation adjustment within other comprehensive income.",
          "cash flow statement, as a financing item.",
        ],
        1,
        "Correct: B. Under the current rate method, the translation gain or loss bypasses earnings entirely and accumulates in equity as the cumulative translation adjustment (CTA) within OCI — one reason analysts scan comprehensive income, not just net income. A describes the TEMPORAL method's remeasurement gain/loss, which does flow through the income statement. C confuses a valuation adjustment with a cash flow; no cash moves."
      ),
      q(
        "l2s1-fx-4",
        "fra",
        "Financial Statement Analysis",
        3,
        "Given the krona's depreciation and the subsidiary's positive net asset position, the year's translation adjustment is most likely:",
        ["a loss, reducing the CTA balance.", "a gain, increasing the CTA balance.", "zero, because gains on liabilities offset losses on assets."],
        0,
        "Correct: A. Under the current rate method, the EXPOSURE is the net asset position: net assets translated at an ever-weaker krona ($0.100 → $0.090) are worth fewer dollars, producing a translation LOSS in CTA. The mnemonic: net asset exposure + depreciating local currency = negative CTA. B requires an appreciating krona. C would require net assets of zero — liabilities only shield the PORTION of assets they offset, and this subsidiary is substantially net-positive."
      ),
    ],
  },
  {
    id: "l2s1-corp",
    title: "Vega Industrials Case Scenario",
    vignette: [
      "Vega Industrials is currently all-equity financed with an unlevered value of $2,000 million. The board is evaluating a recapitalization that would add $600 million of permanent debt, using the proceeds to repurchase shares. Vega's marginal tax rate is 25%.",
      "The CFO presents the Modigliani–Miller framework with corporate taxes as the starting point, then reminds the board that the framework ignores costs of financial distress. A director asks how the cost of equity would behave as leverage rises, and another asks what a debt-financed recapitalization typically signals to the market.",
    ],
    questions: [
      q(
        "l2s1-cor-1",
        "corp",
        "Corporate Issuers",
        2,
        "Under MM with corporate taxes (no distress costs), Vega's value after the recapitalization is closest to:",
        ["$2,000 million", "$2,150 million", "$2,600 million"],
        1,
        "Correct: B. V_L = V_U + t × D = 2,000 + 0.25 × 600 = $2,150m. The debt tax shield — the present value of taxes saved on interest, t × D for permanent debt — is the entire source of added value in this framework. A is the no-tax MM result (capital structure irrelevance). C adds the full face of the debt to firm value, as if borrowing itself created $600m of worth rather than merely changing who holds claims."
      ),
      q(
        "l2s1-cor-2",
        "corp",
        "Corporate Issuers",
        3,
        "Under MM Proposition II with corporate taxes, as Vega adds leverage its cost of equity will most likely:",
        [
          "rise linearly with the debt-to-equity ratio, at a slope reduced by the factor (1 − t).",
          "remain constant, since the tax shield absorbs the added risk.",
          "fall, because debt is cheaper than equity.",
        ],
        0,
        "Correct: A. r_E = r₀ + (r₀ − r_d)(1 − t)(D/E): equity holders demand more as leverage concentrates business risk on them, but the tax shield mutes the slope by (1 − t) relative to the no-tax case. B misreads the shield — it lowers the WACC, it does not freeze equity risk. C states the seduction that MM exists to debunk: cheap debt raises the required return on the remaining equity, clawing back most of the apparent saving."
      ),
      q(
        "l2s1-cor-3",
        "corp",
        "Corporate Issuers",
        2,
        "Incorporating costs of financial distress, the static trade-off theory implies Vega's optimal debt level is where:",
        [
          "the marginal tax benefit of additional debt equals the marginal expected cost of financial distress.",
          "debt reaches 100% of capital, maximizing the tax shield.",
          "debt equals zero, since distress costs always dominate.",
        ],
        0,
        "Correct: A. Static trade-off balances the two forces at the margin: each extra dollar of debt adds tax shield but also raises the probability-weighted costs of distress (legal costs, lost customers, underinvestment). The optimum is the crossover point — an interior solution. B is the MM-with-taxes corner solution that distress costs rule out; C is the opposite corner, ignoring that the FIRST dollars of debt carry large tax benefits and negligible distress risk."
      ),
      q(
        "l2s1-cor-4",
        "corp",
        "Corporate Issuers",
        2,
        "According to signaling theory, the market's most likely reading of Vega's debt-financed share repurchase is that management:",
        [
          "is confident future cash flows can comfortably service the new debt.",
          "believes the shares are overvalued.",
          "expects an imminent credit downgrade.",
        ],
        0,
        "Correct: A. Committing to fixed debt service is a costly signal — managements that doubt their cash flows avoid it — so leverage-increasing recapitalizations are typically read as confidence, and announcement returns tend to be positive. B describes the signal attached to issuing EQUITY (selling shares suggests management thinks they're dear), the mirror image. C reverses the causality; the recap may RISK ratings, but it is not read as management expecting deterioration."
      ),
    ],
  },
  {
    id: "l2s1-equity-ri",
    title: "Calder Partners Case Scenario",
    vignette: [
      "Ana Calder, CFA, is valuing Northgate Systems, a profitable software firm that pays no dividends and reports negative free cash flow due to heavy reinvestment. She selects a residual income approach. Northgate's current book value is $20.00 per share, its return on equity is expected to be a constant 15%, and its required return on equity is 10%.",
      "Calder first computes next year's expected residual income, then applies a single-stage residual income model assuming residual income grows at 5% per year indefinitely.",
      "A colleague cautions Calder that residual income models depend on the clean surplus relation, and that Northgate reports sizable currency translation adjustments directly in other comprehensive income.",
    ],
    questions: [
      q(
        "l2s1-ri-1",
        "equity",
        "Equity Investments",
        2,
        "Northgate's expected residual income per share for the coming year is closest to:",
        ["$1.00", "$2.00", "$3.00"],
        0,
        "Correct: A. Residual income = (ROE − r) × beginning book value = (0.15 − 0.10) × 20.00 = $1.00 — the earnings generated ABOVE the shareholders' required charge on their capital. B ($2.00) charges no equity cost at all against a 10% 'spread'; C ($3.00) is total earnings (0.15 × 20) with the equity charge forgotten entirely — the exact confusion the RI framework exists to correct."
      ),
      q(
        "l2s1-ri-2",
        "equity",
        "Equity Investments",
        3,
        "Using the single-stage residual income model, Northgate's intrinsic value per share is closest to:",
        ["$30.00", "$40.00", "$20.00"],
        1,
        "Correct: B. V₀ = B₀ + RI₁ / (r − g) = 20 + 1.00 / (0.10 − 0.05) = 20 + 20 = $40.00. Half the value is today's book; half is the capitalized stream of future value creation above the cost of equity. A ($30) capitalizes RI at r alone (1.00/0.10), ignoring growth. C values the firm at book, which is correct only when ROE equals the required return — a firm earning exactly its cost of capital creates nothing beyond book."
      ),
      q(
        "l2s1-ri-3",
        "equity",
        "Equity Investments",
        2,
        "Residual income valuation is most appropriate for Northgate primarily because the company:",
        [
          "pays no dividends and has negative near-term free cash flow, while value is captured earlier through book value and earnings.",
          "operates in the software industry, where book values are most meaningful.",
          "has a low required return on equity.",
        ],
        0,
        "Correct: A. RI's practical edge: it doesn't need dividends or positive FCF to discount, and because it starts from CURRENT book value, far less of the estimate rides on a distant terminal value than in DDM/FCF models — ideal for reinvestment-heavy firms like Northgate. B is actually backwards: software book values UNDERSTATE economics (expensed intangibles), a known RI caveat requiring adjustments, not a rationale. C is irrelevant — the discount rate's level doesn't select the model."
      ),
      q(
        "l2s1-ri-4",
        "equity",
        "Equity Investments",
        3,
        "The colleague's caution about clean surplus is most relevant because violations — such as translation adjustments recorded directly in OCI — cause the residual income model to:",
        [
          "misstate value when forecasted ROE is built from reported net income that bypasses part of the change in book value.",
          "become unusable under IFRS.",
          "double-count dividends in the terminal value.",
        ],
        0,
        "Correct: A. Clean surplus requires ending book = beginning book + net income − dividends. When items like CTA flow straight to equity through OCI, reported net income no longer explains the change in book value — so an ROE forecast built on that income misstates future residual income unless the analyst forecasts comprehensive income or adjusts book value growth. B overshoots: the model remains usable with adjustments, under IFRS or GAAP. C invents a dividend mechanism unrelated to the issue."
      ),
    ],
  },
  {
    id: "l2s1-equity-pb",
    title: "Sereno Capital Case Scenario",
    vignette: [
      "Diego Sereno, CFA, values regional banks using price-to-book comparisons. For Coastline Bancorp he estimates a sustainable return on equity of 12%, a required return on equity of 10%, and long-run growth of 4%.",
      "Sereno computes Coastline's justified P/B, then compares it with the P/B of 1.10 at which Harbor Federal — a bank he judges to have essentially identical ROE, risk, and growth prospects — currently trades.",
      "A junior analyst proposes extending the framework: screening the peer group with PEG ratios, and asks Sereno about the main accounting concern when comparing book values across banks.",
    ],
    questions: [
      q(
        "l2s1-pb-1",
        "equity",
        "Equity Investments",
        2,
        "Coastline's justified price-to-book ratio is closest to:",
        ["0.80", "1.20", "1.33"],
        2,
        "Correct: C. Justified P/B = (ROE − g) / (r − g) = (0.12 − 0.04) / (0.10 − 0.04) = 0.08 / 0.06 = 1.33. A bank earning 2 points above its cost of equity deserves a premium to book. B (1.20) uses the shortcut ROE/r, which ignores growth's amplification of the value spread. A (0.80) subtracts growth in the numerator but forgets it in the denominator — a formula fragment, not a valuation."
      ),
      q(
        "l2s1-pb-2",
        "equity",
        "Equity Investments",
        2,
        "Given Sereno's judgment that Harbor Federal's fundamentals match Coastline's, Harbor trading at a P/B of 1.10 most likely indicates Harbor is:",
        ["undervalued relative to its justified multiple.", "overvalued relative to its justified multiple.", "fairly valued, since 1.10 exceeds 1.0."],
        0,
        "Correct: A. Identical fundamentals imply the same justified P/B of 1.33; a market multiple of 1.10 sits 17% below what the fundamentals warrant — undervaluation, on Sereno's assumptions. B reads the gap backwards. C applies a naive 'above book is fine' rule; the relevant benchmark is the JUSTIFIED multiple, not 1.0 — a bank earning above its cost of equity should trade well above book."
      ),
      q(
        "l2s1-pb-3",
        "equity",
        "Equity Investments",
        3,
        "The most important accounting concern when comparing book values across the bank peer group is that:",
        [
          "differences in loan-loss provisioning and fair-value elections can make reported book values inconsistent across banks.",
          "banks are prohibited from reporting intangible assets.",
          "book value ignores all financial assets.",
        ],
        0,
        "Correct: A. P/B comparability rests on book values measured the same way — but management discretion in loan-loss allowances, held-to-maturity versus fair-value classification, and fair-value option elections can move reported equity materially between otherwise similar banks. The remedy is adjusting to comparable bases (e.g., tangible book, normalized provisioning). B and C are simply false: banks report intangibles (goodwill especially), and financial assets are the CORE of bank book value."
      ),
      q(
        "l2s1-pb-4",
        "equity",
        "Equity Investments",
        3,
        "Regarding the junior analyst's PEG proposal, the most important caveat is that the PEG ratio:",
        [
          "assumes a linear relationship between P/E and growth, and ignores differences in risk and the duration of growth.",
          "cannot be computed for companies with positive earnings.",
          "already incorporates risk differences through the growth term.",
        ],
        0,
        "Correct: A. PEG (P/E ÷ growth) treats value as if it scaled one-for-one with growth — but valuation theory says the P/E–growth relationship is convex, and two firms with equal growth can deserve very different multiples if their risk or growth DURATION differs. PEG is a screening heuristic, not a valuation. B is backwards (positive earnings are exactly when PEG works); C claims the tool contains what it omits — growth is not a risk adjustment."
      ),
    ],
  },
  {
    id: "l2s1-fixed",
    title: "Whitman Fixed Income Case Scenario",
    vignette: [
      "Grace Whitman, CFA, values a two-year, 5% annual-pay bond (par 100) that is callable at 100 immediately after the coupon payment in one year. She uses a binomial interest rate tree calibrated to her volatility assumption: the one-year rate today is 4.0%, and one year from now the one-year rate is either 6.0% or 3.0%, each with risk-neutral probability 0.50.",
      "Whitman first values the bond at each year-1 node, applying the call rule where the issuer would rationally exercise. She then discounts to today, and also values an otherwise identical option-free bond of 101.44 to isolate the embedded option's value.",
      "Finally, Whitman considers how the callable bond's value would change if she recalibrated the tree to a higher interest rate volatility assumption.",
    ],
    questions: [
      q(
        "l2s1-fix-1",
        "fixed",
        "Fixed Income",
        2,
        "The value of the callable bond at the LOWER year-1 rate node (3.0%), after applying the call rule, is closest to:",
        ["100.00", "101.94", "105.00"],
        0,
        "Correct: A. At the 3.0% node the remaining cash flow of 105 discounts to 105/1.03 = 101.94 — above the 100 call price, so the issuer calls and the investor receives 100. The call rule REPLACES any node value above the call price with the call price. B is the option-free value at that node, i.e., the value BEFORE applying the rule; C is the undiscounted final cash flow."
      ),
      q(
        "l2s1-fix-2",
        "fixed",
        "Fixed Income",
        3,
        "The value of the callable bond today is closest to:",
        ["100.51", "101.44", "104.53"],
        0,
        "Correct: A. At the 6.0% node: 105/1.06 = 99.06 (below 100, not called). Today's value = 0.5 × [(99.06 + 5) + (100 + 5)] / 1.04 = 0.5 × 209.06 / 1.04 = 104.53 / 1.04 = 100.51 — each year-1 node value PLUS the year-1 coupon, probability-weighted, discounted at today's 4.0% rate. B is the option-free bond's value (no call rule applied at the low node). C forgets the final discounting step back to today."
      ),
      q(
        "l2s1-fix-3",
        "fixed",
        "Fixed Income",
        2,
        "The value of the embedded call option is closest to:",
        ["0.00", "0.93", "1.94"],
        1,
        "Correct: B. V(call option) = V(option-free) − V(callable) = 101.44 − 100.51 = 0.93. The issuer's right to redeem at 100 in the low-rate state costs the investor exactly the value difference. C (1.94) is the node-level haircut (101.94 − 100) without probability weighting or discounting; A would require the call to be worthless, impossible when a node exists where exercise is rational."
      ),
      q(
        "l2s1-fix-4",
        "fixed",
        "Fixed Income",
        3,
        "If Whitman recalibrates to HIGHER interest rate volatility, the value of the callable bond will most likely:",
        [
          "decrease, because the embedded call option becomes more valuable to the issuer.",
          "increase, because higher volatility raises all bond values.",
          "stay unchanged, because volatility affects only option-free bonds.",
        ],
        0,
        "Correct: A. Callable = option-free − call option. Option values RISE with volatility (wider rate dispersion means deeper in-the-money call states), so the subtraction grows and the callable bond's value falls. B has no basis — an option-free bond's tree value is essentially volatility-insensitive because node effects offset; it is the OPTION that feeds on volatility. C reverses which instrument is volatility-sensitive. (For a PUTable bond the effect flips: higher volatility raises its value.)"
      ),
    ],
  },
  {
    id: "l2s1-deriv",
    title: "Ito Derivatives Advisory Case Scenario",
    vignette: [
      "Kenta Ito, CFA, advises corporate clients on interest rate risk. A client anticipates borrowing for 90 days starting 90 days from today and asks Ito to price a 3×6 forward rate agreement (FRA). Current market reference rates (annualized, actual/360 with 90- and 180-day periods treated as 90/360 and 180/360) appear in Exhibit 1.",
      "Ito explains that the client, as the FRA's fixed-rate payer (the long), will receive a settlement payment if the market reference rate at expiration exceeds the FRA rate — and that the payment is made AT expiration, even though the underlying borrowing period runs for a further 90 days.",
      "The client, satisfied, then asks Ito how the FRA concept relates to the plain-vanilla interest rate swap the company already holds.",
    ],
    exhibits: [
      {
        caption: "Exhibit 1 — Market reference rates (annualized)",
        headers: ["Term", "Rate"],
        rows: [
          ["90-day", "4.00%"],
          ["180-day", "4.50%"],
        ],
      },
    ],
    questions: [
      q(
        "l2s1-der-1",
        "deriv",
        "Derivatives",
        3,
        "The no-arbitrage rate on the 3×6 FRA is closest to:",
        ["4.25%", "4.50%", "4.95%"],
        2,
        "Correct: C. The FRA rate is the implied forward: [(1 + 0.045 × 180/360) / (1 + 0.04 × 90/360) − 1] × 360/90 = (1.0225 / 1.0100 − 1) × 4 = 0.012376 × 4 ≈ 4.95%. Lending 180 days must equal lending 90 days and rolling at the forward — solving that equality gives the rate. A (4.25%) naively averages the two rates; B assumes the forward equals the 180-day spot. With an upward-sloping curve the forward must sit ABOVE both spots."
      ),
      q(
        "l2s1-der-2",
        "deriv",
        "Derivatives",
        1,
        "At expiration, the client's long FRA position produces a gain when the 90-day market reference rate is:",
        ["above the FRA rate.", "below the FRA rate.", "equal to the FRA rate."],
        0,
        "Correct: A. The long (fixed-rate payer) locked in borrowing at the FRA rate; if the market rate sets higher, the FRA pays the difference — offsetting the client's costlier actual borrowing. That is the hedge working as designed. B describes the SHORT's winning scenario, and C is the break-even where the FRA settles at zero."
      ),
      q(
        "l2s1-der-3",
        "deriv",
        "Derivatives",
        3,
        "Because the FRA settles at expiration while the underlying rate applies to the following 90 days, the settlement payment equals the rate difference times notional times 90/360:",
        [
          "discounted back over 90 days at the prevailing market reference rate.",
          "compounded forward over 90 days at the FRA rate.",
          "with no adjustment, since settlement timing is irrelevant.",
        ],
        0,
        "Correct: A. The interest saving the FRA replicates would naturally be realized at the END of the 90-day borrowing period; paying it at the START (expiration) requires discounting at the just-set market rate: payment = notional × (MRR − FRA rate) × 90/360 ÷ (1 + MRR × 90/360). This 'advanced set, advanced settled' discounting is THE detail exams test on FRAs. B adjusts in the wrong direction; C ignores time value over a full quarter."
      ),
      q(
        "l2s1-der-4",
        "deriv",
        "Derivatives",
        2,
        "The most accurate description of the relationship between FRAs and the client's interest rate swap is that the swap is economically equivalent to:",
        [
          "a series of FRAs expiring at each reset date, all struck at the single swap rate.",
          "one large FRA expiring at the swap's maturity.",
          "a portfolio of interest rate call options.",
        ],
        0,
        "Correct: A. Each swap settlement mirrors an FRA payoff on that period's rate; the swap bundles them with ONE fixed rate chosen so the package prices to zero at inception (individual implied FRAs would each be slightly off-market — the early ones rich, later ones cheap, netting to zero). B collapses many periodic exchanges into one, losing the structure. C describes a cap, whose one-sided payoffs differ fundamentally from a swap's two-sided ones."
      ),
    ],
  },
  {
    id: "l2s1-pm",
    title: "Keller Asset Management Case Scenario",
    vignette: [
      "Sonia Keller, CFA, oversees manager evaluation at a pension consultant. She is reviewing Ridgeline Partners, an active equity manager that produced an average active return of 2.4% per year against its benchmark with active risk (tracking error) of 4.0%.",
      "Ridgeline's process scores stocks monthly across a universe of roughly 100 names; Keller estimates the strategy's information coefficient at 0.05 and treats the stock scores as approximately independent bets for fundamental-law purposes.",
      "Keller also reviews Ridgeline's risk reports, which attribute the fund's active risk between factor tilts (such as persistent value and small-size exposures) and security-specific selection. She notes Ridgeline describes returns using a macroeconomic factor model in which the factors are measured as surprises.",
    ],
    questions: [
      q(
        "l2s1-pm-1",
        "pm",
        "Portfolio Management",
        1,
        "Ridgeline's information ratio is closest to:",
        ["0.24", "0.60", "1.67"],
        1,
        "Correct: B. IR = active return / active risk = 2.4% / 4.0% = 0.60 — the manager's reward per unit of benchmark-relative risk, the core statistic of active management evaluation (0.5+ is generally considered strong). C (1.67) inverts the ratio; A (0.24) multiplies the two numbers' decimals, an arithmetic accident with no meaning."
      ),
      q(
        "l2s1-pm-2",
        "pm",
        "Portfolio Management",
        3,
        "Using the fundamental law of active management, the information ratio Keller should EXPECT from Ridgeline's process is closest to:",
        ["0.05", "0.50", "5.00"],
        1,
        "Correct: B. IR ≈ IC × √BR = 0.05 × √100 = 0.05 × 10 = 0.50: a modest forecasting edge (IC of 0.05) becomes a strong information ratio when applied independently across 100 monthly bets — the law's central insight: breadth multiplies skill. C forgets the square root, using BR directly; A ignores breadth altogether, as if the manager made a single bet."
      ),
      q(
        "l2s1-pm-3",
        "pm",
        "Portfolio Management",
        2,
        "In Ridgeline's macroeconomic factor model, the factors are most appropriately measured as:",
        [
          "surprises — the difference between the realized value and the market's prior expectation.",
          "the raw levels of each macroeconomic series.",
          "the trailing twelve-month averages of each series.",
        ],
        0,
        "Correct: A. In macro factor models only the UNEXPECTED component moves returns: expected inflation, growth, and rates are already embedded in prices, so the factor is the surprise (actual minus consensus). B and C both feed in largely anticipated information — a 'factor' the market already priced explains nothing about period returns, which is the defining difference between macro factor models and fundamental factor models built on attributes."
      ),
      q(
        "l2s1-pm-4",
        "pm",
        "Portfolio Management",
        2,
        "Ridgeline's persistent value and small-size exposures mean a meaningful share of its active risk is most accurately classified as:",
        [
          "factor (systematic) active risk, rather than security-selection risk.",
          "specific risk, since the tilts result from stock picking.",
          "benchmark risk, borne equally by all managers in the peer group.",
        ],
        0,
        "Correct: A. Active risk decomposes into factor risk — deliberate or incidental tilts toward systematic factors like value and size — and specific (idiosyncratic) risk from individual security bets. Persistent style tilts are factor risk by definition, and clients should ask whether they're paying active fees for exposures replicable cheaply. B mislabels a systematic exposure because of its origin; the decomposition classifies by BEHAVIOR, not intent. C is not a component of active risk at all."
      ),
    ],
  },
];
export const L2_SESSION_2: ItemSet[] = [
  {
    id: "l2s2-ethics",
    title: "Copeland Capital Case Scenario",
    vignette: [
      "Rhea Copeland, CFA, founded Copeland Capital three years ago. Marketing materials state: 'Copeland Capital is GIPS compliant. Our flagship strategy returned 14.2% annualized since inception, ranking in the top decile of its peer group.' The 14.2% figure is the return of the strategy's oldest account, which is also its largest; two smaller accounts in the same strategy returned 11.0% and 12.1%.",
      "Copeland directs trades through Fairway Brokers, which charges commissions 15% above the lowest available rate. In exchange, Fairway provides Copeland with research on small-cap industrials used in managing all client accounts, plus two terminals used exclusively by Copeland's marketing team.",
      "A prospective client asks Copeland whether her CFA designation means her recommendations are certified by CFA Institute. Copeland replies: 'The charter is the most rigorous credential in investment management, and passing all three levels on my first attempts reflects the standard I hold myself to.'",
    ],
    questions: [
      q(
        "l2s2-eth-1",
        "ethics",
        "Ethical & Professional Standards",
        2,
        "Copeland's presentation of the 14.2% return most likely violates the Standards because it:",
        [
          "presents a single, best-performing account as the strategy's record rather than a composite of all similar accounts.",
          "uses an annualized figure, which is prohibited for periods under five years.",
          "compares results to a peer group without that group's permission.",
        ],
        0,
        "Correct: A. Standard III(D) requires performance presentations that are fair, accurate, and complete — presenting the oldest/largest (and conveniently best) account as 'the strategy' while omitting accounts returning 11.0% and 12.1% is textbook cherry-picking; a composite of all similar discretionary accounts is the remedy. And since GIPS requires exactly that, claiming GIPS compliance while doing this compounds the violation. B invents a rule — annualization of periods over a year is standard practice; C invents a permission requirement that does not exist."
      ),
      q(
        "l2s2-eth-2",
        "ethics",
        "Ethical & Professional Standards",
        3,
        "Under the soft dollar principles in the Standards, Copeland's arrangement with Fairway is most problematic with respect to:",
        [
          "the small-cap research, because it was not produced by Copeland internally.",
          "the marketing team's terminals, because client commissions paid for a benefit that does not aid the investment decision-making process.",
          "the entire arrangement, because paying above-lowest commissions always violates best execution.",
        ],
        1,
        "Correct: B. Client brokerage may buy research and services that benefit CLIENTS' investment decisions — the small-cap research qualifies (A is wrong). Terminals used exclusively by MARKETING serve the firm, not the clients whose commissions bought them: that is the classic mixed-use failure requiring the firm to pay for that portion itself. C overstates: best execution is a total-value judgment, and paying somewhat higher commissions for genuine client-benefiting research is permissible."
      ),
      q(
        "l2s2-eth-3",
        "ethics",
        "Ethical & Professional Standards",
        2,
        "Copeland's reply to the prospective client most likely:",
        [
          "violates Standard VII(B), because citing first-attempt passes is prohibited.",
          "complies with the Standards, because both statements are factual and no CFA Institute endorsement is implied.",
          "violates Standard VII(B), because describing the charter as rigorous overstates the designation.",
        ],
        1,
        "Correct: B. Standard VII(B) permits factual statements about the designation and one's own program history: passing all levels on first attempts is verifiable fact, and expressing pride in the charter's rigor is acceptable opinion — what is PROHIBITED is implying the charter certifies performance or superior ability, which her answer, notably, avoided claiming (she also implicitly corrected the client's 'certified' premise). A and C both ban statements the Standard explicitly allows."
      ),
      q(
        "l2s2-eth-4",
        "ethics",
        "Ethical & Professional Standards",
        3,
        "For Copeland Capital's GIPS compliance claim to be legitimate, the firm must, at minimum:",
        [
          "include all actual, fee-paying discretionary accounts in appropriate composites and meet all applicable GIPS requirements firm-wide.",
          "have its results verified by an independent third party.",
          "report performance gross of all fees.",
        ],
        0,
        "Correct: A. GIPS compliance is all-or-nothing at the FIRM level: every actual, fee-paying, discretionary portfolio assigned to a composite, all requirements met, with compliant presentations available to prospects. Her single-account marketing makes the current claim false. B is a common misconception — verification is RECOMMENDED, not required, for compliance claims. C is also wrong: GIPS has specific rules about gross and net presentation, but 'gross only' is not among them."
      ),
    ],
  },
  {
    id: "l2s2-quant",
    title: "Aldrich Research Case Scenario",
    vignette: [
      "Noor Aldrich, CFA, models quarterly demand growth for a retailer using an autoregressive model of order one, AR(1): x̂ₜ = b₀ + b₁xₜ₋₁, estimated as x̂ₜ = 2.0 + 0.6xₜ₋₁ (growth in percent). Residual diagnostics show no serial correlation, and Aldrich confirms the series is covariance stationary.",
      "The most recent observed value is x = 4.0%. Aldrich prepares one- and two-step-ahead forecasts and computes the model's mean-reverting level.",
      "A colleague, reviewing a different series, reports an estimated AR(1) coefficient statistically indistinguishable from 1.0 and asks Aldrich how to proceed before using that model for forecasting.",
    ],
    questions: [
      q(
        "l2s2-qnt-1",
        "quant",
        "Quantitative Methods",
        2,
        "The mean-reverting level of Aldrich's AR(1) model is closest to:",
        ["2.0%", "5.0%", "6.0%"],
        1,
        "Correct: B. The mean-reverting level of an AR(1) is b₀ / (1 − b₁) = 2.0 / (1 − 0.6) = 5.0% — the value at which the forecast equals the current value, toward which all forecasts converge. A mistakes the intercept itself for the long-run mean; C computes 2.0/(1 − 0.6667) or similar arithmetic slip. Forecasts above 5.0 drift down, forecasts below drift up — the signature of stationarity."
      ),
      q(
        "l2s2-qnt-2",
        "quant",
        "Quantitative Methods",
        2,
        "Given the most recent value of 4.0%, the two-step-ahead forecast is closest to:",
        ["4.40%", "4.64%", "5.00%"],
        1,
        "Correct: B. Chain the model: one step ahead x̂ = 2.0 + 0.6 × 4.0 = 4.40%; two steps ahead x̂ = 2.0 + 0.6 × 4.40 = 4.64%. A stops at the one-step forecast; C jumps straight to the mean-reverting level, which is where the forecasts converge eventually, not after two quarters. Note the path: 4.00 → 4.40 → 4.64, climbing toward 5.0 exactly as mean reversion predicts."
      ),
      q(
        "l2s2-qnt-3",
        "quant",
        "Quantitative Methods",
        3,
        "The colleague's series, with an AR(1) coefficient statistically indistinguishable from 1.0, most likely:",
        [
          "has a unit root and is not covariance stationary, so it should be first-differenced before modeling.",
          "is strongly mean reverting and ideal for AR forecasting.",
          "should be modeled with more lags to restore stationarity.",
        ],
        0,
        "Correct: A. b₁ = 1 defines a random walk: no finite mean-reverting level exists (b₀/(1−b₁) divides by zero), variance grows with time, and regression statistics become unreliable. The standard remedy is modeling the FIRST DIFFERENCE (the change), which is stationary. B is the opposite of the truth — a unit root means NO mean reversion. C misdiagnoses: adding lags addresses serial correlation in residuals, not a unit root."
      ),
      q(
        "l2s2-qnt-4",
        "quant",
        "Quantitative Methods",
        2,
        "If Aldrich's residuals HAD shown significant serial correlation, the most direct consequence for her model would be that:",
        [
          "the coefficient standard errors would be invalid, making t-tests unreliable.",
          "the model's forecasts would become unbiased.",
          "the intercept would automatically equal zero.",
        ],
        0,
        "Correct: A. Serial correlation in an AR model's residuals means the model has left predictable structure on the table — the estimated standard errors (and thus t-statistics and significance tests) are no longer trustworthy, and the specification needs additional lags. B is backwards — misspecification harms forecasts, it doesn't bless them. C has no connection to serial correlation at all."
      ),
    ],
  },
  {
    id: "l2s2-econ",
    title: "Brennan Macro Advisory Case Scenario",
    vignette: [
      "Callum Brennan, CFA, assesses monetary policy for client portfolios. The central bank he follows communicates policy using a Taylor-type rule: policy rate = neutral real rate + expected inflation + 0.5 × (expected inflation − target inflation) + 0.5 × (output gap).",
      "Brennan's inputs: neutral real rate 1.0%, expected inflation 4.0%, target inflation 2.0%, and output running 1.0% above potential.",
      "The central bank's actual policy rate stands at 5.0%. Brennan considers what the gap between the rule-implied rate and the actual rate suggests about the policy stance, and how bond and equity markets typically react when a central bank is perceived to be 'behind the curve.'",
    ],
    questions: [
      q(
        "l2s2-eco-1",
        "econ",
        "Economics",
        2,
        "The Taylor-rule-implied policy rate is closest to:",
        ["5.5%", "6.5%", "7.0%"],
        1,
        "Correct: B. Rate = 1.0 + 4.0 + 0.5 × (4.0 − 2.0) + 0.5 × (1.0) = 1.0 + 4.0 + 1.0 + 0.5 = 6.5%. The rule stacks the neutral real rate, expected inflation, and half-weighted penalties for the inflation overshoot and the positive output gap. A (5.5%) drops the output gap term and half the inflation gap; C (7.0%) double-counts by applying full rather than half weights to the gaps."
      ),
      q(
        "l2s2-eco-2",
        "econ",
        "Economics",
        2,
        "With the actual policy rate at 5.0% versus the rule-implied rate, the central bank's stance is best described as:",
        [
          "accommodative — the bank is 'behind the curve' relative to the rule.",
          "restrictive — policy is tighter than the rule prescribes.",
          "neutral — the difference is within measurement error.",
        ],
        0,
        "Correct: A. Actual (5.0%) sits 150 bps BELOW the rule-implied 6.5%: with inflation two points over target and the economy above potential, the rule calls for notably tighter policy than the bank is running — the definition of accommodative, or colloquially 'behind the curve.' B reads the gap backwards. C waves off a full 1.5-percentage-point gap, far beyond any plausible input uncertainty here."
      ),
      q(
        "l2s2-eco-3",
        "econ",
        "Economics",
        3,
        "If markets conclude the central bank is behind the curve on inflation, longer-term bond yields would most likely:",
        [
          "rise, as investors demand compensation for higher expected inflation and a steeper future tightening path.",
          "fall, because accommodative policy always lowers all yields.",
          "be unaffected, since long yields depend only on the current policy rate.",
        ],
        0,
        "Correct: A. Long yields embed expected future short rates plus an inflation risk premium: a bank tolerating 4% inflation with the economy above potential raises BOTH — markets price more inflation and a harder eventual tightening. B captures only the mechanical short-end effect while missing the expectations channel that dominates the long end. C contradicts the term-structure logic that connects the entire curve to the expected policy path."
      ),
      q(
        "l2s2-eco-4",
        "econ",
        "Economics",
        3,
        "The equity market's reaction to a central bank perceived as behind the curve is most accurately described as:",
        [
          "ambiguous — near-term earnings benefit from loose policy, but higher discount rates and the risk of harsher future tightening weigh on valuations.",
          "unambiguously positive, since low rates always raise equity values.",
          "unambiguously negative, since inflation always destroys equity value.",
        ],
        0,
        "Correct: A. Two forces fight: accommodative policy stokes nominal demand and near-term earnings (positive), while rising inflation expectations lift discount rates, compress multiples, and raise the odds of a recession-inducing catch-up tightening (negative). Which dominates varies by horizon and starting valuations — the honest answer is tension, not a slogan. B prices only the numerator-friendly half; C only the denominator-hostile half."
      ),
    ],
  },
  {
    id: "l2s2-fra",
    title: "Quarry Point Research Case Scenario",
    vignette: [
      "Ivy Chen, CFA, screens companies for earnings quality at Quarry Point Research. She is examining Dorset Fabrication, whose reported net income has grown 12% annually for three years while cash flow from operations has been roughly flat. Exhibit 1 shows selected data for the most recent year.",
      "Chen notes three items from the filings: (1) days sales outstanding rose from 48 to 71 over two years; (2) in the fourth quarter, Dorset sold receivables to a financial institution and recorded the proceeds within operating cash flow; (3) depreciable lives on machinery were extended from 8 to 12 years, which the footnotes describe as 'aligning with industry practice.'",
      "Chen computes accruals-based measures and prepares questions for management's next earnings call.",
    ],
    exhibits: [
      {
        caption: "Exhibit 1 — Dorset Fabrication, most recent year ($ millions)",
        headers: ["Item", "Amount"],
        rows: [
          ["Net income", "240"],
          ["Cash flow from operations", "150"],
          ["Average total assets", "2,000"],
        ],
      },
    ],
    questions: [
      q(
        "l2s2-fra-1",
        "fra",
        "Financial Statement Analysis",
        2,
        "Using the cash-flow approach, Dorset's accruals ratio (aggregate accruals scaled by average total assets) is closest to:",
        ["4.5%", "7.5%", "12.0%"],
        0,
        "Correct: A. Aggregate accruals (simplified cash-flow method) = net income − CFO = 240 − 150 = 90; scaled by average assets: 90 / 2,000 = 4.5%. A positive and RISING accruals ratio flags earnings outrunning cash — the least persistent kind of earnings. B halves the denominator; C is net income over assets (ROA), a profitability measure that says nothing about accrual intensity."
      ),
      q(
        "l2s2-fra-2",
        "fra",
        "Financial Statement Analysis",
        2,
        "The rise in days sales outstanding from 48 to 71 most likely signals:",
        [
          "revenue being recognized faster than cash is collected — possible channel stuffing or loosened credit terms.",
          "improved collection efficiency.",
          "nothing noteworthy, since DSO varies randomly.",
        ],
        0,
        "Correct: A. DSO jumping ~50% means receivables are growing far faster than sales — the classic footprint of pulling revenue forward (shipping ahead of demand, extending credit to book sales, or recognizing aggressively). It is among the most reliable single red flags in earnings-quality work. B is the opposite reading — falling DSO would signal that. C dismisses a large, sustained, directional move as noise."
      ),
      q(
        "l2s2-fra-3",
        "fra",
        "Financial Statement Analysis",
        3,
        "The fourth-quarter sale of receivables most importantly means that Dorset's reported operating cash flow:",
        [
          "is boosted by a financing-like, non-recurring action — future-period collections were effectively pulled into today's CFO.",
          "is understated, since the receivables were sold at a discount.",
          "is unaffected, because receivables sales are investing activities.",
        ],
        0,
        "Correct: A. Factoring receivables converts future collections into immediate cash — economically it's borrowing against receivables, but it lands in CFO, flattering exactly the metric analysts watch when they distrust earnings (and conveniently in Q4). The boost is non-recurring unless Dorset factors ever-larger amounts — a treadmill worth probing on the call. B is a second-order effect dwarfed by the timing shift; C misstates the classification."
      ),
      q(
        "l2s2-fra-4",
        "fra",
        "Financial Statement Analysis",
        2,
        "Extending machinery lives from 8 to 12 years most directly has the effect of:",
        [
          "reducing annual depreciation expense, increasing current earnings without any cash flow impact.",
          "increasing cash flow from operations through lower expenses.",
          "reducing the carrying value of the machinery.",
        ],
        0,
        "Correct: A. Longer depreciable lives spread the same cost over more years — lower annual expense, higher reported income, zero cash consequence (depreciation is non-cash). Whether justified or cosmetic, the change deserves scrutiny arriving alongside the other flags. B fails because a non-cash expense change doesn't alter CFO (under the indirect method, lower depreciation is offset by higher net income). C is backwards: slower depreciation keeps carrying value HIGHER."
      ),
    ],
  },
  {
    id: "l2s2-corp",
    title: "Halberd & Voss Case Scenario",
    vignette: [
      "Halberd Industries has agreed to acquire Voss Precision in an all-cash deal. Halberd's deal team estimates Voss's standalone intrinsic value at $500 million and expects the combination to generate synergies with a present value of $120 million. Halberd will pay $560 million in cash for all of Voss's shares.",
      "Voss's board obtained the price after soliciting competing bids. A Halberd director asks the deal team to quantify how the transaction's value creation is split between the two companies' shareholders, and why cash was chosen over stock as consideration.",
      "An analyst covering the deal notes that empirical studies of acquisitions offer a caution for Halberd's shareholders.",
    ],
    questions: [
      q(
        "l2s2-cor-1",
        "corp",
        "Corporate Issuers",
        2,
        "The takeover premium Halberd is paying for Voss is closest to:",
        ["12%", "24%", "4%"],
        0,
        "Correct: A. Premium = (price paid − standalone value) / standalone value = (560 − 500) / 500 = 12%. The premium is measured against the target's UNAFFECTED standalone worth. B doubles it by measuring against half the base; C (4%) measures the premium against the synergy-inclusive value (620), which mixes up what the premium is being paid FOR."
      ),
      q(
        "l2s2-cor-2",
        "corp",
        "Corporate Issuers",
        2,
        "The value created for HALBERD's shareholders by the transaction, if the synergy estimate proves accurate, is closest to:",
        ["$60 million", "$120 million", "$0"],
        0,
        "Correct: A. Acquirer's gain = synergies − premium paid = 120 − (560 − 500) = $60m: the deal creates 120 of combined value, of which Voss's shareholders capture 60 up front through the premium, leaving 60 for Halberd — the arithmetic identity of deal-making. B awards Halberd ALL the synergies, forgetting the premium hands over half. C would hold only if the premium exactly exhausted the synergies (a $620m price)."
      ),
      q(
        "l2s2-cor-3",
        "corp",
        "Corporate Issuers",
        3,
        "Compared with a stock-for-stock offer, Halberd's choice of cash consideration most importantly means that:",
        [
          "Halberd's shareholders bear the risk (and keep the reward) if realized synergies differ from the $120 million estimate.",
          "Voss's shareholders share in any synergy shortfall.",
          "the deal's risk allocation is identical either way.",
        ],
        0,
        "Correct: A. Cash fixes the target's take at $560m: Voss's shareholders exit fully paid, so every dollar of synergy surprise — up or down — lands on Halberd. In a STOCK deal, Voss's holders become part-owners of the combined firm and share both risk and upside (which is why confident acquirers lean toward cash, and uncertain ones prefer stock). B describes the stock deal; C denies the entire consideration-choice trade-off."
      ),
      q(
        "l2s2-cor-4",
        "corp",
        "Corporate Issuers",
        2,
        "The empirical caution most relevant to Halberd's shareholders is that, on average, historical evidence shows:",
        [
          "acquirers tend to earn little or no announcement gain, with most deal value captured by target shareholders.",
          "acquirers capture most merger gains through superior bargaining.",
          "both sides reliably lose value, making all M&A irrational.",
        ],
        0,
        "Correct: A. The empirical record is one-sided: target shareholders earn large announcement premiums, while acquirer returns average roughly zero to slightly negative — competitive bidding, overconfident management, and the winner's curse routinely transfer the synergies to the seller. Halberd's positive spread here (60) depends entirely on the synergy estimate surviving integration. B reverses the evidence. C overshoots it — deals aren't reliably value-destroying in AGGREGATE; the split is just lopsided."
      ),
    ],
  },
  {
    id: "l2s2-equity-h",
    title: "Ostrander Equity Research Case Scenario",
    vignette: [
      "Felix Ostrander, CFA, is valuing Brightline Logistics, which just paid an annual dividend of $2.00 per share. Brightline is growing quickly — dividends have recently grown 10% per year — but Ostrander expects growth to decline linearly over the next six years to a sustainable long-run rate of 4%, and he selects the H-model. His required return on equity is 9%.",
      "In the H-model, V₀ = [D₀ × (1 + g_L) + D₀ × H × (g_S − g_L)] / (r − g_L), where H is half the length of the fade period.",
      "A colleague challenges Ostrander: 'If growth is 10% now, why not simply use the Gordon growth model at 10%?' Ostrander also considers under what conditions the H-model's approximation becomes unreliable.",
    ],
    questions: [
      q(
        "l2s2-heq-1",
        "equity",
        "Equity Investments",
        3,
        "Using the H-model, Brightline's intrinsic value per share is closest to:",
        ["$41.60", "$44.00", "$48.80"],
        2,
        "Correct: C. With a six-year fade, H = 3. V₀ = [2.00 × 1.04 + 2.00 × 3 × (0.10 − 0.04)] / (0.09 − 0.04) = [2.08 + 0.36] / 0.05 = 2.44 / 0.05 = $48.80. The first term is the Gordon value at long-run growth; the second adds the premium from the fading high-growth phase. A ($41.60) is the Gordon value alone, ignoring the extra growth entirely; B ($44.00) capitalizes D₀ × 1.10 at the long-run denominator — mixing the two growth rates incorrectly."
      ),
      q(
        "l2s2-heq-2",
        "equity",
        "Equity Investments",
        2,
        "The best response to the colleague's Gordon-at-10% suggestion is that doing so would:",
        [
          "be impossible as stated, because the 10% growth rate exceeds the 9% required return, making the model's denominator negative.",
          "produce a slightly conservative value.",
          "be acceptable for any horizon under five years.",
        ],
        0,
        "Correct: A. The Gordon model requires g < r; at g = 10% and r = 9% the denominator (r − g) turns negative and the formula produces a meaningless negative value — mathematically it assumes the dividend outgrows the discount rate FOREVER, an infinite-value absurdity. That is precisely why multi-stage and H-models exist: temporarily supernormal growth must fade below r. B and C treat an undefined calculation as a usable approximation."
      ),
      q(
        "l2s2-heq-3",
        "equity",
        "Equity Investments",
        3,
        "The H-model's approximation is LEAST reliable when:",
        [
          "the initial growth rate is very high and the fade period is very long.",
          "the initial growth rate is close to the long-run rate.",
          "the fade period is short.",
        ],
        0,
        "Correct: A. The H-model assumes a LINEAR decline in growth and approximates the resulting value in closed form; the approximation error grows with the size of the growth spread (g_S − g_L) and the length of the fade — exactly when the linearization is being asked to carry the most weight (it tends to understate value in those cases, since actual dividends compound above the linear path). B and C describe the friendly cases where the H-model is nearly exact."
      ),
      q(
        "l2s2-heq-4",
        "equity",
        "Equity Investments",
        2,
        "If Ostrander's fade-period assumption lengthened from six years to ten (H from 3 to 5), all else equal, his H-model estimate would:",
        ["increase, because the high-growth premium term scales with H.", "decrease, because distant growth is worth less.", "be unchanged, since H affects only timing, not value."],
        0,
        "Correct: A. The premium term, D₀ × H × (g_S − g_L) / (r − g_L), is linear in H — stretching the fade means more years of above-trend growth. At H = 3 the premium is 2.00 × 3 × 0.06 / 0.05 = $7.20 per share; at H = 5 it becomes 2.00 × 5 × 0.06 / 0.05 = $12.00, lifting the total value from $48.80 to $53.60. B inverts the effect — the model already discounts, and more high growth is unambiguously worth more. C misreads H as a mere timing parameter when it directly scales the excess-growth value."
      ),
    ],
  },
  {
    id: "l2s2-equity-pvt",
    title: "Marrow Valuation Group Case Scenario",
    vignette: [
      "Talia Marrow, CFA, is valuing a 15% equity interest in Kestrel Packaging, a private family-held manufacturer, for a shareholder considering a sale. Using guideline public company multiples, Marrow first estimates a value of $100.00 per share. She notes this estimate reflects a marketable, minority (noncontrolling) basis, since it derives from freely traded minority shares of public comparables.",
      "For the private, minority stake she is valuing, Marrow applies a discount for lack of marketability (DLOM) of 20%. Separately, for a different engagement, she is asked what adjustments would apply when valuing a CONTROLLING stake in a private company starting from the same guideline public multiples, where a discount for lack of control (DLOC) of 10% and the same DLOM are relevant considerations.",
      "Kestrel's CFO argues no marketability discount should apply because 'the family will probably take the company public within a few years.'",
    ],
    questions: [
      q(
        "l2s2-pvt-1",
        "equity",
        "Equity Investments",
        2,
        "The value per share of the private minority interest, after Marrow's DLOM, is closest to:",
        ["$72.00", "$80.00", "$90.00"],
        1,
        "Correct: B. The guideline public multiple value of $100 is already on a MINORITY, marketable basis — the only missing adjustment for a private minority stake is marketability: 100 × (1 − 0.20) = $80.00. A ($72) also strips a control discount that doesn't apply (the basis is already minority); C applies only a 10% discount, conflating DLOC with DLOM."
      ),
      q(
        "l2s2-pvt-2",
        "equity",
        "Equity Investments",
        3,
        "When BOTH a 10% DLOC and a 20% DLOM apply to an interest, the combined discount from the marketable-control basis is closest to:",
        ["28%", "30%", "32%"],
        0,
        "Correct: A. Discounts compound multiplicatively, not additively: combined = 1 − (1 − 0.10)(1 − 0.20) = 1 − 0.90 × 0.80 = 1 − 0.72 = 28%. The DLOM applies to the already-control-discounted value — the sequence matters conceptually even though multiplication commutes. B (simple addition) overstates the discount; it is the single most common error in private valuation exams and practice alike."
      ),
      q(
        "l2s2-pvt-3",
        "equity",
        "Equity Investments",
        2,
        "The most appropriate response to the CFO's 'probably going public' argument is that:",
        [
          "a credible, near-term IPO prospect may REDUCE the DLOM but rarely eliminates it, given execution uncertainty and interim illiquidity.",
          "he is correct — expected IPOs eliminate marketability discounts.",
          "marketability discounts are fixed by convention at 20% regardless of circumstances.",
        ],
        0,
        "Correct: A. DLOM sizing is a judgment scaled to the expected path to liquidity: a genuine IPO trajectory (bankers engaged, timeline, audited statements) compresses the discount, but 'probably, within a few years' still leaves years of lock-up risk, market-window risk, and deal failure — a smaller DLOM, not zero. B converts a probability into a certainty; C denies that the discount responds to facts and circumstances, which is exactly what valuation standards require it to do."
      ),
      q(
        "l2s2-pvt-4",
        "equity",
        "Equity Investments",
        3,
        "Compared with the guideline public company method Marrow used, a guideline TRANSACTIONS method (based on prices paid in acquisitions of comparable companies) would most likely produce a starting value that:",
        [
          "already reflects a control basis, because acquisition prices include control premiums.",
          "is identical in basis, since both methods use market evidence.",
          "reflects a minority basis, because most acquisitions involve minority stakes.",
        ],
        0,
        "Correct: A. The two market methods differ in the BASIS of the evidence: public share prices are minority, marketable trades; M&A transaction prices are typically for WHOLE companies and embed control premiums. Starting from transactions, valuing a minority stake requires SUBTRACTING for lack of control — the reverse of the adjustment path from public multiples. B ignores the premium embedded in takeovers (the Halberd case's 12% premium is exactly this); C misstates deal practice."
      ),
    ],
  },
  {
    id: "l2s2-fixed",
    title: "Ashford Credit Strategies Case Scenario",
    vignette: [
      "Priya Ashford, CFA, manages credit exposure with credit default swaps. She is quoting a five-year CDS on Radley Corp, a BB-rated issuer. The contract carries the standard 1% coupon for investment-grade/crossover conventions in her market, while the credit spread consistent with Radley's default risk is 2.0%. The CDS has an effective spread duration of 4.0.",
      "Ashford's client wishes to BUY protection on a $10 million notional. Ashford explains how the upfront payment settles the difference between the standardized coupon and the fair spread, and what happens to the position's value if Radley's creditworthiness deteriorates after inception.",
      "The client also asks Ashford to explain the difference between physical and cash settlement following a credit event.",
    ],
    questions: [
      q(
        "l2s2-cds-1",
        "fixed",
        "Fixed Income",
        3,
        "The approximate upfront payment on the CDS is closest to:",
        [
          "4% of notional, paid BY the protection buyer.",
          "4% of notional, paid TO the protection buyer.",
          "1% of notional, paid by the protection seller.",
        ],
        0,
        "Correct: A. Upfront ≈ (credit spread − fixed coupon) × effective spread duration = (2.0% − 1.0%) × 4.0 = 4.0% of notional ($400,000). Radley's risk justifies a 2% running premium but the standardized contract pays only 1%, so the protection BUYER compensates the seller upfront for the shortfall. B reverses the direction — the buyer would RECEIVE upfront only if the fair spread were BELOW the coupon; C confuses the coupon itself with the upfront."
      ),
      q(
        "l2s2-cds-2",
        "fixed",
        "Fixed Income",
        2,
        "If Radley's credit spread widens to 3.0% shortly after inception, the mark-to-market effect is most likely a:",
        [
          "gain for the protection buyer of roughly 4% of notional.",
          "gain for the protection seller.",
          "loss for the protection buyer, since spreads and protection values move inversely.",
        ],
        0,
        "Correct: A. The buyer locked in protection priced at a 2% spread; at 3% the same protection is worth more: ΔV ≈ Δspread × duration × notional = 1.0% × 4.0 = 4% of notional (~$400,000 gain). Buying protection is being SHORT credit — deterioration pays. B and C both have the sign backwards; the seller is long credit and loses as spreads widen."
      ),
      q(
        "l2s2-cds-3",
        "fixed",
        "Fixed Income",
        2,
        "Following a credit event, cash settlement of the CDS most accurately involves the protection seller paying:",
        [
          "the difference between par and the auction-determined market value of the cheapest eligible deliverable obligation.",
          "the full notional amount, with the buyer keeping the defaulted bonds.",
          "nothing until the defaulted bonds mature.",
        ],
        0,
        "Correct: A. The payout equals the LOSS: notional × (1 − recovery), where recovery is set by the ISDA-run auction on eligible deliverable obligations (the cheapest-to-deliver among them anchors the price). B describes par payment with no offset — that's physical settlement's ECONOMICS only if the buyer also delivers the bonds; keeping bonds AND full notional would pay out more than the loss. C invents a deferral that exists in no CDS contract."
      ),
      q(
        "l2s2-cds-4",
        "fixed",
        "Fixed Income",
        3,
        "The client holds no Radley bonds. Buying CDS protection anyway creates a position best described as:",
        [
          "a naked short credit position that profits from Radley's deterioration.",
          "a hedge, since CDS positions are hedges by definition.",
          "economically impossible, since CDS requires owning the reference obligation.",
        ],
        0,
        "Correct: A. Without underlying exposure, protection bought is a pure directional bet against Radley's credit — profitable on spread widening or default, losing the premium/upfront otherwise. That's a legitimate (and common) use of the CDS market: expressing credit views without sourcing bonds. B mislabels speculation as hedging — the hedge label requires an offsetting exposure. C confuses CDS with insurance's insurable-interest requirement, which credit derivatives deliberately do not impose."
      ),
    ],
  },
  {
    id: "l2s2-deriv",
    title: "Nakamura Options Desk Case Scenario",
    vignette: [
      "Emi Nakamura, CFA, runs an equity options desk. She has just SOLD 100 call option contracts (each on 100 shares) on Corvid Media. The calls are slightly out of the money with 45 days to expiration; their current delta is 0.60 and the position's gamma is significant.",
      "Nakamura intends to delta-hedge the position with shares of Corvid, and asks a junior trader to compute the initial hedge. She also quizzes the trader: 'Where is gamma largest — and what does that mean for how often we re-hedge?' and 'What is time working for, and against, on this desk?'",
    ],
    questions: [
      q(
        "l2s2-der-1",
        "deriv",
        "Derivatives",
        2,
        "To delta-hedge the short call position initially, Nakamura should:",
        ["buy 6,000 Corvid shares.", "sell 6,000 Corvid shares.", "buy 10,000 Corvid shares."],
        0,
        "Correct: A. Short 100 contracts × 100 shares × delta 0.60 = a position delta of −6,000; neutralizing it requires BUYING 6,000 shares. The short calls lose as the stock rises, and the long shares offset that loss one-for-one — locally. B doubles the short exposure instead of hedging it; C hedges as if delta were 1.0, which is only true for deep in-the-money calls at expiration."
      ),
      q(
        "l2s2-der-2",
        "deriv",
        "Derivatives",
        3,
        "Gamma for these options is largest when the options are:",
        [
          "at the money and close to expiration.",
          "deep in the money with long maturity.",
          "deep out of the money with long maturity.",
        ],
        0,
        "Correct: A. Gamma — the rate at which delta changes — peaks where delta is most unstable: near the strike, near expiry, where a small stock move flips the option between 'probably exercised' (delta → 1) and 'probably worthless' (delta → 0). Deep ITM or OTM options (B, C) have deltas pinned near 1 or 0 that barely move. For Nakamura's desk, high gamma means the 6,000-share hedge decays quickly and needs frequent rebalancing — the practical cost of being short options."
      ),
      q(
        "l2s2-der-3",
        "deriv",
        "Derivatives",
        2,
        "Regarding theta, Nakamura's short call position most likely:",
        [
          "benefits from time decay, all else equal.",
          "suffers from time decay, all else equal.",
          "is unaffected by the passage of time.",
        ],
        0,
        "Correct: A. Long options bleed value as expiration approaches (negative theta); the SHORT side collects that decay — time is the option seller's ally, and 45 days of remaining premium is what Nakamura is harvesting. The desk's trade-off is precise: theta income in exchange for gamma risk — small daily gains punctuated by hedging losses when the stock gaps. B describes the option BUYER's position; C denies the most reliable Greek there is."
      ),
      q(
        "l2s2-der-4",
        "deriv",
        "Derivatives",
        3,
        "If Corvid's stock suddenly jumps sharply higher before Nakamura can re-hedge, her delta-hedged position will most likely show:",
        [
          "a loss, because the short calls' delta rose during the jump and the hedge was sized for the old delta.",
          "a profit, because the long shares gained value.",
          "no effect, because the position was delta-neutral.",
        ],
        0,
        "Correct: A. Delta-neutrality is only LOCAL. In a jump, the short calls' delta climbs (gamma effect) mid-move, so the calls lose value faster than the 6,000 shares gain — a net loss that grows with the square of the move. This is negative gamma's signature: hedged short-option books lose on large moves in EITHER direction. B counts only the hedge's leg; C mistakes a tangent-line hedge for a full replication."
      ),
    ],
  },
  {
    id: "l2s2-alts",
    title: "Beacon Rock Advisors Case Scenario",
    vignette: [
      "Beacon Rock Advisors evaluates private equity funds for institutional clients. Analyst Jonah Wells, CFA, reviews Fund IV, a 2019-vintage buyout fund, using the data in Exhibit 1.",
      "A client trustee asks Wells to interpret the fund's DPI and TVPI multiples, and to explain why the fund's reported since-inception IRR of 19% should be read with caution relative to these multiples.",
      "The trustee also asks why Fund IV's reported returns showed the familiar early-years dip before turning positive.",
    ],
    exhibits: [
      {
        caption: "Exhibit 1 — Fund IV, as of latest quarter ($ millions)",
        headers: ["Item", "Amount"],
        rows: [
          ["Committed capital", "100"],
          ["Capital called (paid-in)", "80"],
          ["Cumulative distributions to LPs", "60"],
          ["Net asset value (residual)", "70"],
        ],
      },
    ],
    questions: [
      q(
        "l2s2-alt-1",
        "alts",
        "Alternative Investments",
        2,
        "Fund IV's DPI (distributed to paid-in) multiple is closest to:",
        ["0.60", "0.75", "0.86"],
        1,
        "Correct: B. DPI = cumulative distributions / paid-in capital = 60 / 80 = 0.75× — LPs have received back 75 cents of realized cash per dollar actually invested. It is the 'money in the bank' multiple, immune to valuation opinions. A (0.60) divides by COMMITTED capital rather than paid-in; C (0.86) divides NAV by distributions plus other confusion — neither matches the definition."
      ),
      q(
        "l2s2-alt-2",
        "alts",
        "Alternative Investments",
        2,
        "Fund IV's TVPI (total value to paid-in) multiple is closest to:",
        ["1.30", "1.63", "0.88"],
        1,
        "Correct: B. TVPI = (distributions + NAV) / paid-in = (60 + 70) / 80 = 130 / 80 = 1.625× — total value created per dollar invested, combining realized (DPI = 0.75) and unrealized (RVPI = 0.875) components. A divides by committed capital (130/100); C inverts a component ratio. The realized/unrealized split matters: more than half of Fund IV's value is still an appraisal, not cash."
      ),
      q(
        "l2s2-alt-3",
        "alts",
        "Alternative Investments",
        3,
        "The most important caution when reading the fund's 19% since-inception IRR is that IRR:",
        [
          "is sensitive to the timing of early cash flows and relies on interim NAVs, so it can be flattered by early exits and subjective valuations.",
          "understates performance because it ignores the time value of money.",
          "is identical to TVPI expressed as a percentage.",
        ],
        0,
        "Correct: A. Since-inception IRR is powerfully shaped by EARLY distributions (a quick profitable exit locks in a high rate that later years dilute slowly) and, until the fund is fully realized, by GP-marked NAVs — 70 of Fund IV's 130 of value is unrealized appraisal. Subscription credit lines further flatter IRR by delaying capital calls. That is why sophisticated LPs read IRR and multiples TOGETHER. B is backwards — IRR is precisely a time-value measure; C confuses a rate with a multiple."
      ),
      q(
        "l2s2-alt-4",
        "alts",
        "Alternative Investments",
        2,
        "The early-years dip in Fund IV's reported returns is best explained by the:",
        [
          "J-curve effect — fees and costs are charged on committed capital while portfolio companies are still carried near cost.",
          "denominator effect from public market declines.",
          "fund's use of leverage at the portfolio company level.",
        ],
        0,
        "Correct: A. The J-curve: in early years the fund pays management fees (on committed capital) and deal costs while investments sit at or near cost — so measured returns start NEGATIVE and turn positive only as value creation and exits emerge. It is a reporting-timing artifact more than an economic loss. B is an LP allocation phenomenon (private weights ballooning when public markets fall), unrelated to the return path; C describes buyout financing generally, not the early dip."
      ),
    ],
  },
  {
    id: "l2s2-pm",
    title: "Corliss Risk Office Case Scenario",
    vignette: [
      "Mara Corliss, CFA, heads the risk office of an endowment. For a $10 million equity portfolio with an expected annual return of 8% and annual return volatility of 20%, she computes annual value at risk (VaR) at the 5% significance level using the parametric (variance–covariance) method, with a z-value of 1.65.",
      "Presenting to the investment committee, Corliss is careful to state precisely what the VaR figure does and does not say. A committee member asks why the risk team supplements VaR with conditional VaR (expected shortfall) and stress tests.",
    ],
    questions: [
      q(
        "l2s2-pm-1",
        "pm",
        "Portfolio Management",
        2,
        "The portfolio's annual 5% parametric VaR is closest to:",
        ["$2.5 million", "$3.3 million", "$0.8 million"],
        0,
        "Correct: A. 5% VaR = −(μ − 1.65σ) × portfolio value = −(0.08 − 1.65 × 0.20) × 10m = −(0.08 − 0.33) × 10m = 0.25 × 10m = $2.5 million. B (3.3m) ignores the expected return, using 1.65σ alone; C (0.8m) uses the expected return alone with no volatility term. The expected return partially offsets the tail distance — a feature (and critique) of parametric VaR at long horizons."
      ),
      q(
        "l2s2-pm-2",
        "pm",
        "Portfolio Management",
        2,
        "The most precise interpretation of Corliss's VaR figure is that:",
        [
          "in 5% of years, the portfolio is expected to lose AT LEAST $2.5 million.",
          "the portfolio's maximum possible annual loss is $2.5 million.",
          "the portfolio will lose exactly $2.5 million once every 20 years.",
        ],
        0,
        "Correct: A. VaR is a threshold, not a ceiling: it says losses should EXCEED $2.5m in about one year in twenty — and says nothing about how bad those exceedance years get. B is the fatal misreading (VaR as 'maximum loss') that risk officers spend careers correcting. C misstates it twice: the loss in a bad year is at least, not exactly, the VaR, and the 1-in-20 is an expectation, not a schedule."
      ),
      q(
        "l2s2-pm-3",
        "pm",
        "Portfolio Management",
        3,
        "The primary reason to supplement VaR with conditional VaR (expected shortfall) is that CVaR:",
        [
          "measures the average loss in the scenarios BEYOND the VaR threshold, describing the tail VaR ignores.",
          "is always smaller than VaR, providing a more optimistic view.",
          "eliminates the need for distributional assumptions.",
        ],
        0,
        "Correct: A. CVaR answers the question VaR leaves hanging: WHEN we breach the threshold, how bad is it on average? It conditions on the worst 5% of outcomes and averages them — so two portfolios with identical VaR but different tail depths are finally distinguished. B is impossible: averaging losses beyond the threshold makes CVaR at least as LARGE as VaR. C overpromises — parametric CVaR inherits the same distributional assumptions."
      ),
      q(
        "l2s2-pm-4",
        "pm",
        "Portfolio Management",
        2,
        "The committee member's implicit concern about parametric VaR during market crises is best summarized as:",
        [
          "normal-distribution assumptions understate fat tails, and correlations tend to rise toward one exactly when diversification is needed most.",
          "VaR becomes too conservative in crises, overstating risk.",
          "stress tests and VaR are redundant, since both assume normality.",
        ],
        0,
        "Correct: A. The two classic failures: real return distributions have fatter tails than the normal curve admits (extreme losses arrive far more often than 1.65σ suggests), and crisis correlations converge — assets that diversified each other in calm markets fall together, so the portfolio's TRUE tail risk exceeds the model's. Stress tests attack both problems by replaying or inventing specific extreme scenarios with no distributional assumptions (which is also why C is wrong). B has the direction of the failure backwards."
      ),
    ],
  },
];

export const L2_FULL_READY =
  L2_SESSION_1.length >= 11 && L2_SESSION_2.length >= 11;
