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
export const L2_SESSION_2: ItemSet[] = [];

export const L2_FULL_READY =
  L2_SESSION_1.length >= 11 && L2_SESSION_2.length >= 11;
