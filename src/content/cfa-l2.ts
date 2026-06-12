// ============================================================
// Certus — CFA Level II content (original, written for Certus)
// Wave 1: Equity Valuation — the heart of the Level II exam.
// Remaining L2 topics are added chapter by chapter to the same
// gold standard (deep reading + aligned questions + key terms).
// ============================================================

import { Chapter, Question, ExamContent } from "./types";

const chapters: Chapter[] = [
  {
    id: "cfa2-equity-val",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    title: "Equity Valuation: DDM, Free Cash Flow, Residual Income, and Multiples",
    readingMinutes: 34,
    summary:
      "Every major valuation engine Level II tests — when each one is the right tool, every conversion formula, and the worked math.",
    intro:
      "Level II is where the CFA Program stops asking what things are and starts asking what they're worth. Equity valuation is consistently among the heaviest-weighted topics on the exam, and its item sets are merciless about one thing: you must know not just how to crank each model, but WHICH model the vignette is steering you toward and why. This chapter builds the full toolkit — dividend discount models, free cash flow to the firm and to equity (including every conversion formula the exam loves), residual income, and justified multiples — and, just as important, the selection logic that connects a company's facts to the right engine. Work every example with a calculator in hand. At Level II, reading is not studying; computing is.",
    sections: [
      {
        heading: "The valuation process and required returns",
        blocks: [
          {
            kind: "p",
            text: "All intrinsic valuation is one idea: an asset is worth the present value of its expected future cash flows, discounted at a rate that reflects their risk. Every model in this chapter differs only in WHICH cash flow it discounts (dividends, free cash flow, residual income) and how it handles growth. Before any of them can run, you need the discount rate — the required return on equity.",
          },
          {
            kind: "p",
            text: "Level II expects three routes to the equity required return. First, the CAPM: r = rf + β(ERP), simple and dominant in item sets. Second, multifactor models (Fama-French adds size and value premia to the market factor). Third, build-up methods for private or thinly traded firms: risk-free rate plus equity risk premium plus size premium plus company-specific premium — no beta, because there's no reliable price series. The equity risk premium itself can be estimated historically (average realized excess returns — vulnerable to survivorship bias), or forward-looking: the Gordon growth ERP estimate backs it out as (D1/P0 for the index) + expected long-term growth − long-term government yield.",
          },
          {
            kind: "callout",
            label: "Tested nuance",
            body: "Know the difference between the required return (what the risk justifies), the expected return given the market price (the IRR implied by today's price), and the holding period return (what actually happened). A stock priced below intrinsic value has an expected return ABOVE the required return — that gap is the analyst's alpha thesis, and it converges as price moves to value.",
          },
        ],
      },
      {
        heading: "Dividend discount models: Gordon, multistage, and the H-model",
        blocks: [
          {
            kind: "p",
            text: "The DDM family discounts expected dividends. It fits companies that actually pay meaningful, stable dividends with a policy linked to earnings — mature firms, utilities, large banks — and it values the stock from the perspective of a minority shareholder who cannot redirect the cash.",
          },
          {
            kind: "formula",
            formula: {
              label: "Gordon growth model",
              expr: "V₀ = D₁ / (r − g)   where D₁ = D₀ × (1 + g)",
              note: "Requires r > g, and g constant forever — g must not exceed the economy's long-run growth.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Gordon growth in one line",
              prompt: "A utility just paid (D₀) a $2.88 dividend. Dividends grow 4% forever; the required return is 9%. Value the stock.",
              steps: [
                "D₁ = 2.88 × 1.04 = $3.00 (the model discounts NEXT year's dividend — the most common trap is using D₀).",
                "V₀ = 3.00 ÷ (0.09 − 0.04) = 3.00 ÷ 0.05.",
              ],
              answer: "$60.00. Note the sensitivity: bump g to 5% and V₀ = (2.88 × 1.05)/(0.09 − 0.05) = 3.024/0.04 = $75.60 — a one-point growth change moved value 26%. When r − g is small, growth assumptions dominate everything.",
            },
          },
          {
            kind: "p",
            text: "Real companies rarely grow at one rate forever, so the exam leans on multistage models. The two-stage DDM projects dividends explicitly through a high-growth phase, then caps the projection with a terminal value from the Gordon model at the point growth goes constant. The three-stage adds a linearly declining middle phase. The H-model is the elegant shortcut for growth that declines LINEARLY from a short-run rate gS to the long-run rate gL over 2H years:",
          },
          {
            kind: "formula",
            formula: {
              label: "H-model",
              expr: "V₀ = [D₀(1 + gL) + D₀ × H × (gS − gL)] / (r − gL)",
              note: "H = half-life in years of the high-growth period (a 10-year fade means H = 5).",
            },
          },
          {
            kind: "example",
            example: {
              title: "H-model valuation",
              prompt: "D₀ = $2.00. Growth starts at 20% and fades linearly to 6% over 10 years; r = 10%. Value the stock.",
              steps: [
                "H = 10 ÷ 2 = 5.",
                "Stable component: D₀(1 + gL) ÷ (r − gL) = 2.00 × 1.06 ÷ 0.04 = 2.12 ÷ 0.04 = $53.00.",
                "Extra-growth component: D₀ × H × (gS − gL) ÷ (r − gL) = 2.00 × 5 × 0.14 ÷ 0.04 = 1.40 ÷ 0.04 = $35.00.",
              ],
              answer: "$88.00. The H-model slightly UNDERSTATES value versus an exact two-stage calculation because it assumes the fade starts immediately.",
            },
          },
          {
            kind: "p",
            text: "Two related tools round out the family. The sustainable growth rate g = b × ROE (retention rate times return on equity) supplies the growth input from fundamentals — and via DuPont, ROE decomposes into margin × turnover × leverage, so the exam can make you build g from raw statements. And the present value of growth opportunities splits price into a no-growth value plus what the market pays for growth: V₀ = E₁/r + PVGO. A high PVGO share of price means the market is buying future investments, not current earnings — compare it across peers to see where growth expectations are concentrated.",
          },
        ],
      },
      {
        heading: "Free cash flow: FCFF and FCFE, every conversion the exam tests",
        blocks: [
          {
            kind: "p",
            text: "Free cash flow models take over when dividends are absent, token, or disconnected from earnings power — or when you're valuing from a CONTROL perspective, because an acquirer can redirect free cash flow even if the current board won't pay it out. FCFF is cash available to ALL capital providers (debt and equity) after operating expenses, taxes, and investment; discount it at the WACC to get firm value, then subtract the market value of debt for equity value. FCFE is cash available to equity holders only; discount it at the required return on equity, r, directly. Use FCFE when capital structure is stable; prefer FCFF when leverage is changing or FCFE is negative, because FCFF is less distorted by financing swings.",
          },
          {
            kind: "formula",
            formula: {
              label: "The two master formulas",
              expr: "FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv      FCFE = FCFF − Int(1 − t) + Net borrowing",
              note: "NCC = non-cash charges (D&A etc.); FCInv = fixed capital investment; WCInv = working capital investment.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "Getting to free cash flow from every starting point — memorize all four rows.",
              headers: ["Starting from", "FCFF =", "Key adjustments to remember"],
              rows: [
                ["Net income", "NI + NCC + Int(1−t) − FCInv − WCInv", "Add back AFTER-tax interest — it belongs to debtholders"],
                ["CFO", "CFO + Int(1−t) − FCInv", "CFO already includes NCC and WCInv; don't double-count them"],
                ["EBIT", "EBIT(1−t) + NCC − FCInv − WCInv", "Tax EBIT directly; no interest add-back needed (it's pre-interest)"],
                ["EBITDA", "EBITDA(1−t) + (NCC × t) − FCInv − WCInv", "Depreciation's TAX SHIELD comes back: NCC × t"],
              ],
            },
          },
          {
            kind: "example",
            example: {
              title: "FCFF and FCFE from net income",
              prompt: "NI $250m; D&A $80m; interest expense $60m; tax rate 25%; fixed capital investment $150m; working capital investment $30m; net new borrowing $40m. Compute FCFF and FCFE.",
              steps: [
                "FCFF = 250 + 80 + 60 × (1 − 0.25) − 150 − 30 = 250 + 80 + 45 − 180 = $195m.",
                "FCFE = FCFF − Int(1 − t) + Net borrowing = 195 − 45 + 40 = $190m.",
                "Check directly: FCFE = NI + NCC − FCInv − WCInv + Net borrowing = 250 + 80 − 150 − 30 + 40 = $190m. ✓",
              ],
              answer: "FCFF = $195m, FCFE = $190m. Item sets love asking BOTH and grading the interest add-back: pre-tax interest added to FCFF (wrong) is always a distractor choice.",
            },
          },
          {
            kind: "p",
            text: "Growth models work exactly like the DDM with substitutions: single-stage firm value = FCFF₁/(WACC − g); single-stage equity value = FCFE₁/(r − g); two-stage versions project explicitly then terminal-value the constant phase. Three traps recur. Dividends paid do NOT reduce FCFE (FCFE is what's AVAILABLE for distribution, not what's distributed). Preferred stock works like debt: add back preferred dividends in FCFF and treat preferred issuance like borrowing for common-equity FCFE. And non-cash charges go beyond depreciation: add back impairments and amortization, but deduct gains on asset sales (they're investing, not operating, flows).",
          },
        ],
      },
      {
        heading: "Residual income: value from the balance sheet up",
        blocks: [
          {
            kind: "p",
            text: "Residual income asks a sharper question than accounting profit: did the company earn more than the cost of the equity capital it employed? RI = Net income − (r × beginning book value of equity). A firm earning 12% ROE with a 10% required return creates value; a firm earning 8% ROE destroys it — even though both report positive net income. The valuation anchors on today's book value and adds the present value of all future residual income:",
          },
          {
            kind: "formula",
            formula: {
              label: "Residual income model (single-stage)",
              expr: "V₀ = B₀ + [B₀ × (ROE − r)] / (r − g)",
              note: "B₀ = current book value per share. The second term is the premium (or discount) to book that economic profitability justifies.",
            },
          },
          {
            kind: "example",
            example: {
              title: "what justifies a premium to book",
              prompt: "Book value per share is $20. The firm sustains ROE of 14% with required return 10% and growth of 5%. Value the stock.",
              steps: [
                "Excess spread: ROE − r = 14% − 10% = 4%.",
                "Premium = B₀(ROE − r) ÷ (r − g) = 20 × 0.04 ÷ 0.05 = 0.80 ÷ 0.05 = $16.00.",
                "V₀ = 20 + 16 = $36.00.",
              ],
              answer: "$36.00 — a justified P/B of 1.8×. If ROE equaled r, the premium term would be zero and the stock would be worth exactly book. That symmetry is tested constantly.",
            },
          },
          {
            kind: "p",
            text: "Why use RI? Because most of the value arrives EARLY — in the anchored book value rather than a distant terminal value — it's robust where DCF terminal values dominate, and it works for firms with negative free cash flow or no dividends. The price you pay is accounting hygiene: the model assumes the CLEAN SURPLUS relation (ending book = beginning book + net income − dividends), so anything that bypasses the income statement straight to equity — currency translation adjustments, some pension effects, available-for-sale style remeasurements in OCI — violates it and must be adjusted for, or ROE forecasts will be biased. Multistage versions typically fade the ROE-minus-r spread toward zero with a persistence factor, on the economic logic that competition erodes excess returns.",
          },
        ],
      },
      {
        heading: "Market multiples: justified P/E, P/B, and friends",
        blocks: [
          {
            kind: "p",
            text: "Multiples come in two flavors and the exam tests that you know the difference. Comparables-based multiples ask whether a stock is cheap RELATIVE to peers — fast, market-grounded, but mute if the whole sector is mispriced. JUSTIFIED (fundamentals-based) multiples derive what the multiple SHOULD be from a discounted model, tying relative valuation back to intrinsic logic:",
          },
          {
            kind: "formula",
            formula: {
              label: "Justified P/E (from Gordon)",
              expr: "Leading P₀/E₁ = (1 − b) / (r − g)      Trailing P₀/E₀ = (1 − b)(1 + g) / (r − g)",
              note: "(1 − b) = payout ratio. Higher payout raises the multiple ONLY if growth (g = b × ROE) doesn't fall more — the dividend displacement of earnings.",
            },
          },
          {
            kind: "example",
            example: {
              title: "justified leading P/E",
              prompt: "A firm retains 60% of earnings (b = 0.6) and earns ROE of 15%. Required return is 12%. What leading P/E does this justify?",
              steps: [
                "g = b × ROE = 0.6 × 0.15 = 9%.",
                "Payout = 1 − b = 0.40.",
                "Leading P/E = 0.40 ÷ (0.12 − 0.09) = 0.40 ÷ 0.03.",
              ],
              answer: "13.3×. If the stock trades at 17× leading earnings, it's rich relative to its own fundamentals — or the market expects better ROE than you do. The justified multiple turns 'is 17× a lot?' into an answerable question.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "The multiples toolkit: what each is good for, and its blind spot.",
              headers: ["Multiple", "Best used when", "Blind spot"],
              rows: [
                ["P/E", "Earnings positive and reasonably clean", "Useless with losses; distorted by one-off items and leverage"],
                ["P/B (justified P/B = (ROE − g)/(r − g))", "Financials; asset-heavy firms; when earnings are noisy", "Intangibles and buybacks distort book; accounting differences across peers"],
                ["P/S", "Early-stage or cyclical-trough firms (sales rarely negative)", "Ignores profitability entirely — high sales can mean zero margin"],
                ["EV/EBITDA", "Comparing firms with different leverage and depreciation policies", "Ignores capex needs; EBITDA isn't cash flow"],
                ["PEG = (P/E)/g", "Quick growth-adjusted screen", "Assumes a linear P/E–growth relationship; punishes low-growth quality unfairly"],
                ["Dividend yield", "Income mandates; mature payers", "Says nothing about total return or payout sustainability"],
              ],
            },
          },
          {
            kind: "p",
            text: "Method-of-comparables mechanics matter too: choose peers with similar business mix, size, and leverage; use the harmonic mean for averaging peer multiples (the simple mean is biased upward by high-multiple outliers); and prefer EV-based multiples when capital structures differ, because enterprise value neutralizes financing. When a vignette hands you a stock trading below its peer-median multiple AND below its justified multiple, both relative and intrinsic logic agree — that's the convergent setup exams reward you for recognizing.",
          },
        ],
      },
      {
        heading: "Choosing the right model — the question behind every vignette",
        blocks: [
          {
            kind: "p",
            text: "Most candidates lose points not in the algebra but in model selection, because the vignette's facts ARE the answer key. Read the company description as a set of switches: Does it pay stable, policy-linked dividends? DDM. Dividends absent or token, or are you valuing a takeover (control)? Free cash flow. Capital structure shifting or FCFE negative? FCFF specifically. No dividends AND negative free cash flow, but a solid book value — banks, early-growth industrials? Residual income. Need a market-relative answer or a quick cross-check? Multiples, ideally justified ones.",
          },
          {
            kind: "table",
            table: {
              caption: "Model selection from vignette facts.",
              headers: ["The vignette says…", "Use", "Because"],
              rows: [
                ["Mature utility, 60-year dividend record, minority stake", "DDM (Gordon or two-stage)", "Dividends are the cash flow a minority holder actually receives"],
                ["No dividends; PE firm evaluating a buyout", "FCFF or FCFE", "Control perspective: acquirer can redirect free cash flow"],
                ["Leverage rising from refinancing; FCFE volatile", "FCFF at WACC", "Firm-level flow is insulated from financing noise"],
                ["Bank with no dividends and lumpy cash flow", "Residual income", "Book value is meaningful; value anchors to B₀ + PV of excess ROE"],
                ["Quick screen across 12 sector peers", "Multiples (harmonic mean, EV-based if leverage differs)", "Relative pricing at scale; sanity-check intrinsic estimates"],
              ],
            },
          },
          {
            kind: "callout",
            label: "Exam technique",
            body: "Item sets chain answers: the FCFF you compute in question 2 feeds the valuation in question 3. Write your intermediate results down. And when two answer choices differ by exactly the after-tax interest adjustment or by one year of growth (D₀ vs D₁), the test-writers are showing you the two classic errors — make sure you're on the right side of both.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Intrinsic value", def: "Present value of expected future cash flows at a risk-appropriate required return; the anchor all models estimate." },
      { term: "Equity risk premium", def: "Expected return on equities above the risk-free rate; estimated historically or forward (Gordon: index D1/P0 + g − long bond yield)." },
      { term: "Gordon growth model", def: "V₀ = D₁/(r − g); constant growth forever, requires r > g and g ≤ economy-wide growth." },
      { term: "H-model", def: "Values linearly fading growth: V₀ = [D₀(1+gL) + D₀·H·(gS − gL)]/(r − gL), with H = half the fade period." },
      { term: "Sustainable growth rate", def: "g = retention rate × ROE — the growth a firm funds internally without changing leverage." },
      { term: "PVGO", def: "Present value of growth opportunities: P₀ = E₁/r + PVGO; the slice of price paid for future investments, not current earnings." },
      { term: "FCFF", def: "Cash to all capital providers: NI + NCC + Int(1−t) − FCInv − WCInv. Discount at WACC for firm value." },
      { term: "FCFE", def: "Cash to equity holders: FCFF − Int(1−t) + net borrowing. Discount at r for equity value directly." },
      { term: "Residual income", def: "NI − (r × beginning book equity): profit beyond the equity charge. Positive RI justifies a premium to book." },
      { term: "Clean surplus relation", def: "Ending book = beginning book + NI − dividends. OCI items that bypass earnings violate it and bias RI models." },
      { term: "Justified P/E", def: "The P/E fundamentals deserve: leading = (1−b)/(r−g). Compare to the actual multiple to spot rich/cheap." },
      { term: "Justified P/B", def: "(ROE − g)/(r − g): premium to book is earned by ROE above the required return." },
      { term: "Harmonic mean", def: "The correct average for peer multiples; the arithmetic mean overweights high-multiple outliers." },
      { term: "Enterprise value multiples", def: "EV/EBITDA and kin: capital-structure-neutral comparisons; preferred when peers' leverage differs." },
    ],
    takeaways: [
      "Every model discounts a different cash flow with matched discount rate: dividends and FCFE at r, FCFF at WACC, residual income on top of book value.",
      "Model selection is scored: dividends → DDM; control or no dividends → FCF; shifting leverage → FCFF; strong book + weak cash flow → RI.",
      "Memorize all four FCFF starting points (NI, CFO, EBIT, EBITDA) — the after-tax interest and depreciation-tax-shield adjustments are the exam's favorite traps.",
      "H-model: V₀ = [D₀(1+gL) + D₀·H·(gS−gL)]/(r−gL); H is HALF the fade period.",
      "RI = NI − r·B₀; value = B₀ + PV(RI); requires clean surplus accounting.",
      "Justified multiples convert relative valuation into intrinsic logic: leading P/E = (1−b)/(r−g), P/B = (ROE−g)/(r−g).",
      "Use D₁ not D₀, after-tax interest not pre-tax, harmonic mean not arithmetic — three one-word fixes worth real points.",
    ],
  },
];

const questions: Question[] = [
  {
    id: "cfa2-eq-q1",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    difficulty: 2,
    stem: "A stock just paid a $2.88 dividend (D₀). Dividends are expected to grow 4% indefinitely, and the required return is 9%. The stock's value is closest to:",
    choices: ["$57.60", "$60.00", "$75.00"],
    answerIndex: 1,
    explanation:
      "Gordon growth discounts NEXT year's dividend: D₁ = 2.88 × 1.04 = 3.00, so V₀ = 3.00/(0.09 − 0.04) = $60.00. Choice A ($57.60) uses D₀ instead of D₁ — the single most common DDM error and always a distractor. Choice C results from mixing the growth rate into the denominator incorrectly.",
  },
  {
    id: "cfa2-eq-q2",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    difficulty: 3,
    stem: "D₀ = $2.00; growth fades linearly from 20% to a permanent 6% over 10 years; r = 10%. Using the H-model, the stock's value is closest to:",
    choices: ["$53.00", "$88.00", "$123.00"],
    answerIndex: 1,
    explanation:
      "H = 10/2 = 5. V₀ = [D₀(1+gL) + D₀·H·(gS − gL)]/(r − gL) = [2(1.06) + 2(5)(0.14)]/0.04 = (2.12 + 1.40)/0.04 = $88.00. Choice A is only the stable component — forgetting the extra-growth term. Choice C uses the full 10 years instead of H = 5 in the growth term. Remember: H is HALF the fade period.",
  },
  {
    id: "cfa2-eq-q3",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    difficulty: 2,
    stem: "NI = $250m, D&A = $80m, interest expense = $60m, tax rate = 25%, FCInv = $150m, WCInv = $30m. FCFF is closest to:",
    choices: ["$195m", "$210m", "$150m"],
    answerIndex: 0,
    explanation:
      "FCFF = NI + NCC + Int(1−t) − FCInv − WCInv = 250 + 80 + 60(0.75) − 150 − 30 = 250 + 80 + 45 − 180 = $195m. Choice B adds back the FULL pre-tax interest ($60m instead of $45m) — the classic trap; only after-tax interest is added because the tax shield already benefited net income. Choice C forgets the interest add-back entirely.",
  },
  {
    id: "cfa2-eq-q4",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    difficulty: 2,
    stem: "Using the data in the prior question plus net new borrowing of $40m, FCFE is closest to:",
    choices: ["$235m", "$190m", "$155m"],
    answerIndex: 1,
    explanation:
      "FCFE = FCFF − Int(1−t) + Net borrowing = 195 − 45 + 40 = $190m. (Directly: NI + NCC − FCInv − WCInv + Net borrowing = 250 + 80 − 150 − 30 + 40 = 190. ✓) Choice A forgets to remove the after-tax interest from FCFF — FCFE belongs to equity only, after debtholders are served. Choice C subtracts net borrowing instead of adding it: new debt raises cash AVAILABLE to equity.",
  },
  {
    id: "cfa2-eq-q5",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    difficulty: 3,
    stem: "An analyst valuing a firm whose leverage will change materially over the forecast horizon, and whose FCFE is negative in two of five forecast years, should MOST appropriately use:",
    choices: [
      "FCFE discounted at the required return on equity.",
      "FCFF discounted at the WACC.",
      "The Gordon growth DDM.",
    ],
    answerIndex: 1,
    explanation:
      "Changing capital structure whipsaws FCFE through the net borrowing term, and negative FCFE years make direct equity valuation unstable — both standard signals to move up to the firm level: value the whole enterprise with FCFF at WACC, then subtract the market value of debt. Choice A fights both problems head-on. Choice C requires stable dividends, which nothing here suggests. Model selection IS the tested skill in this pattern.",
  },
  {
    id: "cfa2-eq-q6",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    difficulty: 2,
    stem: "Book value per share is $20. The firm sustains ROE of 14%, the required return is 10%, and growth is 5%. Single-stage residual income value is closest to:",
    choices: ["$20.00", "$36.00", "$56.00"],
    answerIndex: 1,
    explanation:
      "V₀ = B₀ + B₀(ROE − r)/(r − g) = 20 + 20(0.14 − 0.10)/(0.10 − 0.05) = 20 + 0.80/0.05 = 20 + 16 = $36. Choice A is the value if ROE merely equaled the required return (zero residual income — worth exactly book). Choice C misuses ROE itself rather than the EXCESS spread (ROE − r) in the numerator. The model prices the spread, not the level.",
  },
  {
    id: "cfa2-eq-q7",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    difficulty: 3,
    stem: "A firm reports large currency-translation losses directly in other comprehensive income, bypassing net income. For a residual income valuation, the analyst should be MOST concerned that:",
    choices: [
      "The clean surplus relation is violated, biasing forecasted ROE.",
      "The firm's WACC will be understated.",
      "Dividends will exceed free cash flow to equity.",
    ],
    answerIndex: 0,
    explanation:
      "Residual income models assume clean surplus: ending book = beginning book + NI − dividends. Items that hit equity directly through OCI (currency translation, certain pension and securities remeasurements) break that identity — book value moves without flowing through earnings, so ROE computed from reported NI is biased and the RI forecast inherits the bias. The fix is adjusting NI or book for the OCI items. Choices B and C involve inputs residual income doesn't even use directly (WACC) or a dividend-coverage issue irrelevant to clean surplus.",
  },
  {
    id: "cfa2-eq-q8",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    difficulty: 2,
    stem: "A firm retains 60% of earnings at a sustainable ROE of 15%; the required return is 12%. Its justified LEADING P/E is closest to:",
    choices: ["8.9×", "13.3×", "14.5×"],
    answerIndex: 1,
    explanation:
      "g = b × ROE = 0.6 × 0.15 = 9%. Leading P/E = (1 − b)/(r − g) = 0.40/(0.12 − 0.09) = 13.3×. Choice C (14.5×) is the TRAILING multiple — (1−b)(1+g)/(r−g) = 0.4(1.09)/0.03 — the leading/trailing mix-up is a deliberate trap, so check which earnings the question prices. Choice A uses the retention rate instead of the payout in the numerator.",
  },
  {
    id: "cfa2-eq-q9",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    difficulty: 2,
    stem: "When averaging P/E multiples across a peer group that includes two extremely high-multiple stocks, the analyst should use:",
    choices: [
      "The arithmetic mean, to weight all peers equally.",
      "The harmonic mean, which dampens the upward bias of large multiples.",
      "The highest multiple, to be conservative.",
    ],
    answerIndex: 1,
    explanation:
      "The harmonic mean (n divided by the sum of reciprocals) systematically weights smaller values more and large outliers less, correcting the upward bias that high-multiple names impose on a simple average — it's equivalent to averaging E/P yields and inverting. The arithmetic mean (A) is exactly the biased estimator the curriculum warns about. Choice C confuses 'conservative' with 'highest benchmark,' which would make every peer look cheap.",
  },
  {
    id: "cfa2-eq-q10",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    difficulty: 3,
    stem: "A stock trades at $45. Next year's earnings are forecast at $3.60 and the required return is 8%. The fraction of the price attributable to the present value of growth opportunities (PVGO) is closest to:",
    choices: ["0%", "20%", "45%"],
    answerIndex: 0,
    explanation:
      "No-growth value = E₁/r = 3.60/0.08 = $45.00 — exactly the market price, so PVGO = 45 − 45 = $0, or 0% of price. The market is paying nothing for future growth; it prices this firm as a perpetuity of current earnings power. Choices B and C are plausible-feeling numbers with no computational basis — the question tests whether you actually run P₀ = E₁/r + PVGO rather than assuming growth always commands a premium.",
  },
];

export const cfaL2Content: ExamContent = {
  examSlug: "cfa-l2",
  chapters,
  questions,
};
