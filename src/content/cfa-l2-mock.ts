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
export const L2_SESSION_1: ItemSet[] = [];
export const L2_SESSION_2: ItemSet[] = [];

export const L2_FULL_READY =
  L2_SESSION_1.length >= 11 && L2_SESSION_2.length >= 11;
