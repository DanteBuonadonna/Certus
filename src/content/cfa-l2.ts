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
  {
    id: "cfa2-fra",
    examSlug: "cfa-l2",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    title: "FSA: Intercorporate Investments, Pensions, and Currency Translation",
    readingMinutes: 32,
    summary:
      "The three accounting machines Level II builds its hardest vignettes from — ownership accounting, DB pensions, and multinational translation.",
    intro:
      "Level II FSA abandons ratio recitation for the three areas where accounting choices visibly rewrite the financial statements: how a company accounts for stakes in other companies, how defined-benefit pension promises flow through earnings and equity, and how a multinational translates foreign subsidiaries into its reporting currency. Each one is a machine with inputs, rules, and outputs — and the item sets test whether you can run the machine, compare IFRS against US GAAP, and predict how a different choice would change income, equity, and the ratios built on them. Every section here ends in numbers you should be able to reproduce cold.",
    sections: [
      {
        heading: "Intercorporate investments: the ownership ladder",
        blocks: [
          {
            kind: "p",
            text: "Accounting treatment follows INFLUENCE, with percentage ownership as the default proxy. Below roughly 20%: no significant influence — the stake is a financial asset, carried at fair value through profit or loss (FVPL) or, by irrevocable election for equities under IFRS, fair value through OCI (FVOCI — dividends still hit P&L, price changes never recycle to earnings). From ~20% to 50%: significant influence — the EQUITY METHOD. Above 50% (control): CONSOLIDATION — combine the subsidiary's statements line by line, with a noncontrolling interest (NCI) line for the share you don't own. Joint control → joint ventures, equity method again. Remember that the thresholds yield to facts: board seats, technology dependency, or contractual control can move a 15% stake into equity-method territory or a 45% stake into consolidation.",
          },
          {
            kind: "p",
            text: "The equity method is 'one-line consolidation.' Initial cost goes on one balance-sheet line; each period the carrying amount rises by your share of the investee's net income (reported as equity income, one line on YOUR income statement) and falls by dividends received — dividends are a return OF capital under this method, not income. The exam's favorite wrinkle is the purchase-price allocation: pay more than your share of the investee's book value, and the excess is assigned first to identifiable assets (e.g., undervalued PPE) — whose excess must then be amortized AGAINST equity income — with the remainder as goodwill (not amortized, tested for impairment).",
          },
          {
            kind: "example",
            example: {
              title: "equity method with excess purchase price",
              prompt: "Investor buys 30% of Investee for $300m when Investee's net assets have a book value of $800m. Of the excess paid, $40m relates to undervalued equipment (10-year remaining life); the rest is goodwill. Investee reports $100m net income and pays $40m in dividends. Find year-1 equity income and the ending carrying value.",
              steps: [
                "Share of book value = 30% × 800 = $240m. Excess = 300 − 240 = $60m → $40m equipment + $20m goodwill.",
                "Equity income = share of NI − excess amortization = (30% × 100) − (40 ÷ 10) = 30 − 4 = $26m.",
                "Dividends received = 30% × 40 = $12m — reduces the investment, not income.",
                "Carrying value = 300 + 26 − 12 = $314m.",
              ],
              answer: "Equity income $26m; carrying value $314m. Forgetting the $4m amortization (answering $30m) is the standard distractor.",
            },
          },
          {
            kind: "p",
            text: "Consolidation mechanics worth holding: 100% of the subsidiary's revenues and expenses come in even if you own 60% (NCI takes back its share at the bottom), so consolidated revenue and assets are LARGER than under the equity method while net income attributable to parent is the SAME — which means margins and ROA look WORSE under consolidation and leverage looks higher. That equivalence-of-net-income with different ratio optics is a recurring vignette question. Goodwill: under IFRS you may choose full goodwill (NCI at fair value) or partial goodwill (NCI at share of identifiable net assets); US GAAP requires FULL goodwill. Full goodwill ⇒ larger assets and equity ⇒ lower ROA and ROE.",
          },
        ],
      },
      {
        heading: "Defined-benefit pensions: one liability, two reporting regimes",
        blocks: [
          {
            kind: "p",
            text: "A defined-contribution plan is easy — expense the contribution, done. A defined-benefit plan makes the employer promise a future benefit, creating an obligation whose measurement runs through actuarial assumptions. The balance sheet reports the FUNDED STATUS: fair value of plan assets minus the PV of the defined benefit obligation. Assets short of obligation → net pension liability; the reverse → net pension asset (subject to a ceiling under IFRS). The obligation grows each year with current service cost (benefits earned this year), interest cost (the discount rate unwinding), and past service costs (plan amendments), and moves with actuarial gains/losses when assumptions change; it shrinks as benefits are paid.",
          },
          {
            kind: "table",
            table: {
              caption: "Where DB pension costs land — the IFRS vs US GAAP map the exam tests.",
              headers: ["Component", "IFRS", "US GAAP"],
              rows: [
                ["Current service cost", "P&L", "P&L"],
                ["Past service cost", "P&L immediately", "OCI, amortized into P&L over service life"],
                ["Interest on net liability/(asset)", "NET interest: discount rate × net funded status, in P&L", "Interest cost on PBO in P&L, separately"],
                ["Return on plan assets in P&L", "Implicit at the DISCOUNT rate (inside net interest)", "EXPECTED return on plan assets (company's assumption) reduces expense"],
                ["Remeasurements / actuarial gains & losses", "OCI, NEVER recycled to P&L", "OCI, amortized via the corridor approach"],
              ],
            },
          },
          {
            kind: "example",
            example: {
              title: "funded status and IFRS pension expense",
              prompt: "Plan assets $950m; benefit obligation $1,100m; discount rate 5%; current service cost $40m; no amendments. What does the balance sheet show, and what hits IFRS P&L?",
              steps: [
                "Funded status = 950 − 1,100 = −$150m → net pension liability of $150m on the balance sheet.",
                "IFRS P&L = service cost + net interest = 40 + (5% × 150) = 40 + 7.5 = $47.5m.",
                "Actual-vs-discount-rate differences on plan assets and assumption changes go to OCI as remeasurements (never recycled).",
              ],
              answer: "Liability $150m; pension expense $47.5m. Under US GAAP, a high EXPECTED-return assumption could shrink reported expense — which is why analysts treat that assumption as an earnings-quality lever.",
            },
          },
          {
            kind: "callout",
            label: "Assumption games",
            body: "Raising the discount rate shrinks the obligation (helps funded status); raising expected return on plan assets (GAAP) cuts pension expense; trimming assumed salary growth shrinks service cost. A vignette listing assumption changes is asking you to grade earnings quality, not just recompute.",
          },
        ],
      },
      {
        heading: "Multinational operations: current rate vs temporal",
        blocks: [
          {
            kind: "p",
            text: "Translation method follows the subsidiary's FUNCTIONAL currency — the currency of its primary economic environment. If the functional currency is the LOCAL currency (a self-contained subsidiary), use the CURRENT RATE method: all assets and liabilities at the period-end rate, revenues and expenses at average rates, equity at historical — and the plug, the cumulative translation adjustment (CTA), parks in EQUITY (OCI), bypassing earnings. If the functional currency is the PARENT'S currency (an extension of the parent, e.g., a sales office), use the TEMPORAL method: monetary items at current rates, NON-monetary items (inventory, PPE) and their related expenses (COGS, depreciation) at historical rates — and the remeasurement gain or loss goes straight to NET INCOME, adding volatility.",
          },
          {
            kind: "table",
            table: {
              caption: "Current rate vs temporal at a glance.",
              headers: ["Item", "Current rate method", "Temporal method"],
              rows: [
                ["Monetary assets/liabilities", "Current rate", "Current rate"],
                ["Inventory, PPE (non-monetary)", "Current rate", "Historical rate"],
                ["Revenues / most expenses", "Average rate", "Average rate"],
                ["COGS, depreciation", "Average rate", "HISTORICAL rates (match the asset)"],
                ["Translation adjustment", "Equity (CTA in OCI)", "Net income"],
                ["Balance-sheet exposure", "Net ASSETS", "Net MONETARY assets (often a net liability)"],
              ],
            },
          },
          {
            kind: "p",
            text: "Exposure intuition wins questions: under the current rate method the exposure is the subsidiary's net asset position, so a DEPRECIATING local currency produces a negative CTA in equity. Under the temporal method exposure is net monetary assets — and since most subsidiaries hold net monetary LIABILITIES, a depreciating local currency often produces a remeasurement GAIN in income. Ratio effects follow mechanically: pure balance-sheet ratios (current ratio) are preserved under current-rate translation but distorted by temporal's mixed rates. Hyperinflation (cumulative ~100% over three years): IFRS restates the local statements for inflation, then translates at the current rate; US GAAP simply mandates the temporal method.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Equity method", def: "One-line consolidation for 20–50% influence stakes: carrying value = cost + share of NI − dividends − excess-price amortization." },
      { term: "Excess purchase price", def: "Price above share of book value, allocated to undervalued identifiable assets (amortized against equity income) then goodwill (not amortized)." },
      { term: "Consolidation", def: "Control (>50%): combine statements line by line; NCI captures the unowned share. Same parent net income as equity method, bigger everything else." },
      { term: "Full vs partial goodwill", def: "Full (GAAP required, IFRS optional): NCI at fair value, larger assets/equity. Partial (IFRS option): NCI at share of net identifiable assets." },
      { term: "FVOCI equities (IFRS)", def: "Irrevocable election: dividends to P&L, fair-value changes to OCI permanently — never recycled to earnings." },
      { term: "Funded status", def: "Plan assets minus benefit obligation — the net pension asset/liability the balance sheet reports." },
      { term: "Service cost / interest cost", def: "Benefits earned this period; discount-rate unwind on the obligation — the recurring growth engines of the DB liability." },
      { term: "Net interest (IFRS)", def: "Discount rate × net funded status, one line in P&L; replaces GAAP's separate interest cost and expected asset return." },
      { term: "Expected return on plan assets (GAAP)", def: "A company-chosen assumption that reduces pension expense — a classic earnings-quality lever." },
      { term: "Remeasurements", def: "Actuarial gains/losses and asset-return surprises: IFRS → OCI forever; GAAP → OCI with corridor amortization back to P&L." },
      { term: "Functional currency", def: "Currency of the subsidiary's primary economic environment; decides current-rate vs temporal translation." },
      { term: "Current rate method", def: "Assets/liabilities at closing rate, income at average, CTA to equity. Exposure = net assets." },
      { term: "Temporal method", def: "Monetary at current, non-monetary at historical, remeasurement gain/loss in NET INCOME. Exposure = net monetary position." },
      { term: "Hyperinflation translation", def: "IFRS: inflation-restate then current rate. US GAAP: temporal method." },
    ],
    takeaways: [
      "Influence picks the machine: <20% fair value, 20–50% equity method, >50% consolidation — facts can override percentages.",
      "Equity income = share of NI minus amortization of excess allocated to identifiable assets; dividends reduce the investment, never income.",
      "Consolidation and equity method report the SAME parent net income on different-sized statements — margins and ROA fall under consolidation.",
      "Balance sheet shows funded status; IFRS runs net interest at the discount rate, GAAP credits an assumed expected asset return through P&L.",
      "IFRS remeasurements never recycle; GAAP amortizes through the corridor; past service cost: IFRS immediate, GAAP via OCI.",
      "Functional = local → current rate, CTA in equity, net-asset exposure. Functional = parent's → temporal, gain/loss in income, net-monetary exposure.",
    ],
  },
  {
    id: "cfa2-fixed-income",
    examSlug: "cfa-l2",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "Fixed Income: The Term Structure, Arbitrage-Free Valuation, and Credit",
    readingMinutes: 31,
    summary:
      "Spot and forward arithmetic, valuing bonds the arbitrage-free way, what OAS really isolates, and the credit models behind the spread.",
    intro:
      "Level II fixed income is built on one discipline: a bond is a package of cash flows, and each cash flow must be discounted at ITS OWN rate. From that idea flows everything in this chapter — the spot curve, forward rates and the arithmetic connecting them, binomial trees for bonds with options, the spread family that ends in OAS, and the credit models that explain why risky cash flows trade at spreads at all. The calculations here are exam currency: forward-from-spot conversions and spread interpretations appear in some form on essentially every sitting.",
    sections: [
      {
        heading: "Spot, forward, and par: three views of one curve",
        blocks: [
          {
            kind: "p",
            text: "A SPOT rate z_N is today's rate for a single payment at time N — the yield on a zero-coupon bond. A FORWARD rate f(A,B) is the rate agreed today for a loan starting at A and ending at B. A PAR rate is the coupon that prices a bond exactly at 100 given the spot curve; the par curve is what swap and Treasury curves quote. The three are algebraically locked together: any one curve generates the other two, and the forward pricing model is the lock: (1 + z_B)^B = (1 + z_A)^A × (1 + f(A,B))^(B−A). Forwards are break-even rates — the path of future short rates under which all strategies along the curve earn the same return.",
          },
          {
            kind: "example",
            example: {
              title: "extracting a forward rate",
              prompt: "The 1-year spot rate is 4.0% and the 2-year spot rate is 5.0%. What 1-year rate, one year forward — f(1,1) — is implied?",
              steps: [
                "(1.05)² = (1.04) × (1 + f(1,1)).",
                "1.1025 ÷ 1.04 = 1.06010.",
              ],
              answer: "f(1,1) ≈ 6.01%. An upward-sloping spot curve embeds forwards ABOVE spots — if you believe rates will rise by LESS than 6.01%, the 2-year bond is the better buy (the logic behind riding the yield curve).",
            },
          },
          {
            kind: "example",
            example: {
              title: "arbitrage-free pricing with spots",
              prompt: "Price a 2-year, 5% annual-coupon bond using the spot curve above (z₁ = 4%, z₂ = 5%).",
              steps: [
                "Year-1 cash flow: 5 ÷ 1.04 = 4.808.",
                "Year-2 cash flow: 105 ÷ (1.05)² = 105 ÷ 1.1025 = 95.238.",
                "Sum: 4.808 + 95.238.",
              ],
              answer: "≈ 100.05. Discounting every flow at the single 2-year yield instead of its own spot is exactly the rounding the arbitrage-free framework forbids — dealers can strip and reconstitute any mispricing away.",
            },
          },
          {
            kind: "p",
            text: "Curve-shape theories give the conceptual questions: pure (unbiased) expectations says forwards ARE expected future short rates; LOCAL expectations applies that only over short horizons; liquidity preference adds a premium rising with maturity (so an upward slope can coexist with flat rate expectations); segmented markets says each maturity is its own supply-demand market; preferred habitat allows investors to leave their maturity home — for a price. Riding the yield curve — buying longer than your horizon on an upward-sloping, stable curve and selling as the bond 'rolls down' to lower yields — outperforms precisely when the forwards implied by the curve do NOT materialize.",
          },
        ],
      },
      {
        heading: "Bonds with options: trees, and the spread family ending in OAS",
        blocks: [
          {
            kind: "p",
            text: "Callable and putable bonds can't be priced off the spot curve alone because their cash flows depend on future rates. The tool is the binomial interest rate tree: calibrated to today's curve and an assumed volatility, it lays out up/down rate paths; you value the bond by BACKWARD INDUCTION — start at maturity, discount one period at a time, and AT EACH NODE apply the option rule (a callable is worth min(computed value, call price); a putable, max(computed value, put price)). Volatility matters directionally: more volatility makes options more valuable — raising the value of a putable bond and LOWERING the value of a callable (the issuer's option is worth more, and it's held against you).",
          },
          {
            kind: "p",
            text: "Spreads measure compensation beyond governments, and each member of the family fixes a flaw in the last. The G-spread is yield minus an interpolated government yield — one number over one point. The Z-spread is the constant spread added to EVERY spot rate that reprices the bond — it respects the whole curve. But for bonds with embedded options the Z-spread still bundles two payments together: credit/liquidity compensation AND the option's cost. The OPTION-ADJUSTED SPREAD removes the option by running the spread through the volatility-calibrated tree: OAS = Z-spread − option cost. For a callable bond the option works against the investor, so OAS < Z-spread; for a putable bond OAS > Z-spread.",
          },
          {
            kind: "callout",
            label: "Reading OAS like an analyst",
            body: "Compare bonds on OAS, never on nominal spread, when options differ. Two callable bonds: the one with HIGHER OAS is cheap relative to the other (more compensation after paying for the option). And OAS depends on the volatility assumption — assume higher volatility and the computed option cost rises, pushing the callable's OAS DOWN. A vignette that changes the volatility input is testing exactly this chain.",
          },
          {
            kind: "p",
            text: "Effective duration and convexity — computed by shocking the curve in the tree — replace modified duration for option-embedded bonds. The signature shape: a callable bond exhibits NEGATIVE convexity at low yields (price compression toward the call price as rates fall), while a putable bond's price floors out near the put price when rates rise.",
          },
        ],
      },
      {
        heading: "Credit: where spreads come from",
        blocks: [
          {
            kind: "p",
            text: "Expected loss = probability of default (PD) × loss given default (LGD), with LGD = 1 − recovery rate. To a first approximation, the credit spread compensates for expected loss per year plus a risk premium for its uncertainty and illiquidity: spread ≈ PD × LGD + premia. That one line answers a surprising number of questions: doubling PD with recovery unchanged roughly doubles the loss-driven spread; senior secured paper (higher recovery → lower LGD) deserves a tighter spread than subordinated paper of the same issuer even though PD is identical — default is an ISSUER event, loss severity is an ISSUE property.",
          },
          {
            kind: "example",
            example: {
              title: "expected loss in one line",
              prompt: "A bond has a 2% annual probability of default and an expected recovery of 40%. Expected loss per year on $10m of exposure?",
              steps: [
                "LGD = 1 − 0.40 = 60%.",
                "Expected loss rate = PD × LGD = 0.02 × 0.60 = 1.2%.",
                "On $10m: 0.012 × 10,000,000.",
              ],
              answer: "$120,000 per year — so a fair credit spread starts near 120 bps before any premium for risk aversion and illiquidity.",
            },
          },
          {
            kind: "p",
            text: "Two model families formalize PD. STRUCTURAL models (Merton) treat equity as a call option on the firm's assets struck at the debt's face value: default happens when asset value falls through the liability barrier at maturity. They give economic insight — default risk rises with leverage and asset volatility — but demand asset values you can't observe directly. REDUCED-FORM models skip the balance sheet and model default as a statistical surprise whose intensity is estimated from market prices and macro covariates; they fit observed spreads well but explain less. Spread DYNAMICS: credit spreads widen when expected defaults rise, risk aversion spikes, or liquidity drains — and high-yield spreads move far more than investment-grade in every one of those scenarios. The credit cycle question — spreads tightest late in expansions, blowing out in recessions — is reliable exam material.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Spot rate", def: "Today's rate for one payment at one future date — the zero-coupon yield; every cash flow discounts at its own spot." },
      { term: "Forward rate", def: "Rate agreed today for a future-start loan; locked to spots by (1+z_B)^B = (1+z_A)^A(1+f)^(B−A). Break-even future rates." },
      { term: "Par curve", def: "Coupon rates that price bonds at 100 off the spot curve — what swap/Treasury quotes show; source for bootstrapping spots." },
      { term: "Riding the yield curve", def: "Buy beyond your horizon on a stable upward curve and earn the roll-down — wins when implied forwards don't materialize." },
      { term: "Backward induction", def: "Tree valuation: start at maturity, discount node by node, applying call (min) or put (max) rules at each step." },
      { term: "Z-spread", def: "Constant spread over every spot rate that reprices the bond; whole-curve credit+liquidity+option compensation." },
      { term: "Option-adjusted spread (OAS)", def: "Z-spread minus option cost, computed in a volatility-calibrated tree; the option-free compensation. Callable: OAS < Z." },
      { term: "Volatility–OAS link", def: "Higher assumed volatility → bigger option cost → lower OAS for callables; OAS is only as good as its volatility input." },
      { term: "Negative convexity", def: "Callable price compression at low yields as the call cap binds; putables floor out at the put when rates rise." },
      { term: "Expected loss", def: "PD × LGD (LGD = 1 − recovery). First-order driver of the fair credit spread." },
      { term: "Structural (Merton) model", def: "Equity = call on firm assets; default when assets fall below debt. Insightful, but needs unobservable asset values." },
      { term: "Reduced-form model", def: "Default as a statistically modeled surprise with intensity fit to market data; better fit, less economics." },
      { term: "Credit cycle", def: "Spreads tightest late-expansion, widest in recession; high-yield amplifies every move investment-grade makes." },
    ],
    takeaways: [
      "Each cash flow discounts at its own spot rate; the forward pricing model converts any curve into any other.",
      "f(1,1) from z₁=4%, z₂=5% is 6.01% — own this two-line computation; some version of it appears every exam.",
      "Options need trees: backward induction with min() at calls and max() at puts; volatility up → callable value down, putable value up.",
      "OAS = Z-spread − option cost: compare option-embedded bonds on OAS only, and remember it inherits the volatility assumption.",
      "Spread ≈ PD × LGD plus premia; default is issuer-level, severity is issue-level — seniority changes LGD, not PD.",
      "Structural models explain default economically (leverage, asset volatility); reduced-form models fit it statistically.",
    ],
  },

  {
    id: "cfa2-quant",
    examSlug: "cfa-l2",
    topicId: "quant",
    topicName: "Quantitative Methods",
    title: "Quantitative Methods: Multiple Regression and Time Series",
    readingMinutes: 16,
    summary: "Reading regression output the way the vignettes test it — coefficients, the three assumption violations, and what makes a time series usable.",
    intro:
      "Level II Quant is almost entirely about multiple regression and time series, and the item sets rarely ask you to run a regression — they hand you the output and ask whether you can trust it. The whole game is interpretation: what a coefficient means, whether the model is statistically sound, and how to spot and fix the three violations that wreck a regression's standard errors. Master the diagnostics and this topic becomes free points.",
    sections: [
      {
        heading: "Reading a multiple regression",
        blocks: [
          { kind: "p", text: "A multiple regression estimates Y from several independent variables: Y = b0 + b1X1 + b2X2 + … + ε. Each slope coefficient is a partial effect — the change in Y for a one-unit change in that X, holding all other variables constant. That 'holding others constant' clause is the heart of every interpretation question." },
          { kind: "p", text: "Two significance tests appear constantly. A t-test on an individual coefficient (estimate ÷ standard error) asks whether that one variable matters; compare the t-stat to the critical value or check whether its confidence interval excludes zero. The F-test asks a joint question — are ALL the slopes simultaneously zero? A significant F with insignificant individual t-stats is the classic fingerprint of multicollinearity. Use adjusted R², not R², to compare models with different numbers of variables, because plain R² never falls when you add a regressor, even a useless one." },
          { kind: "callout", label: "R² vs adjusted R²", body: "Adjusted R² penalizes you for adding variables: adjusted R² = 1 − [(n − 1)/(n − k − 1)](1 − R²). It can fall when a weak variable is added, which is exactly why it's the honest tool for model comparison." },
        ],
      },
      {
        heading: "The three violations",
        blocks: [
          { kind: "p", text: "Almost every Quant vignette plants one of three assumption violations. Each leaves a signature, and each has a standard fix — memorize the table and you'll catch them on sight." },
          { kind: "table", table: { caption: "Table 1 — The three regression violations the exam tests.", headers: ["Violation", "Effect / signature", "Detect", "Fix"], rows: [["Heteroskedasticity (non-constant error variance)", "Biased standard errors → unreliable t-tests (often too many false 'significant' results)", "Breusch-Pagan test", "Robust (White) standard errors"], ["Serial correlation (errors correlated over time)", "Standard errors too small → t-stats inflated", "Durbin-Watson (≈2 = none)", "Newey-West (robust) standard errors"], ["Multicollinearity (X's highly correlated)", "High R²/significant F but insignificant t-stats; inflated SEs", "Correlations / VIF", "Drop a variable; get more data"]] } },
          { kind: "p", text: "Note what all three attack: the standard errors, not the coefficients themselves. That's why the coefficients can still look reasonable while the t-tests lie to you — and why 'use robust standard errors' is the right answer so often." },
        ],
      },
      {
        heading: "Time series essentials",
        blocks: [
          { kind: "p", text: "Time-series models predict a variable from its own past. A trend model fits a straight line (linear) or a constant growth rate (log-linear) to time. An autoregressive (AR) model regresses the variable on its own lagged values. The non-negotiable requirement for an AR model is covariance stationarity — a constant mean and variance over time. If the series has a unit root (a random walk, where the lag coefficient equals 1), it is not stationary and the regression is spurious." },
          { kind: "p", text: "The exam's logic chain: test for a unit root with the Dickey-Fuller test; if the series is non-stationary, first-difference it (model the change rather than the level) and re-test. Compare competing models with the root mean squared error (RMSE) on out-of-sample data — the lower RMSE forecasts better. Watch for seasonality, which shows up as a significant autocorrelation at the seasonal lag and is fixed by adding a seasonal lag term." },
        ],
      },
    ],
    keyTerms: [
      { term: "Partial slope coefficient", def: "The change in Y per unit change in one X, holding all other independent variables constant." },
      { term: "Adjusted R²", def: "R² penalized for the number of regressors; the honest measure for comparing models of different size." },
      { term: "Heteroskedasticity", def: "Non-constant error variance; biases standard errors and is fixed with robust (White) standard errors." },
      { term: "Serial correlation", def: "Correlated errors over time; inflates t-stats and is fixed with Newey-West standard errors." },
      { term: "Covariance stationarity", def: "Constant mean and variance over time — the prerequisite for a valid autoregressive model." },
    ],
    takeaways: [
      "Each slope is a partial effect; the F-test is joint, the t-test is individual — significant F with weak t's screams multicollinearity.",
      "All three violations corrupt the STANDARD ERRORS, not the coefficients — that's why robust SEs fix so much.",
      "Use adjusted R² (not R²) to compare models with different numbers of variables.",
      "AR models require covariance stationarity; test for a unit root (Dickey-Fuller), first-difference if needed, and pick models by out-of-sample RMSE.",
    ],
  },

  {
    id: "cfa2-econ",
    examSlug: "cfa-l2",
    topicId: "econ",
    topicName: "Economics",
    title: "Economics: Currency Exchange Rates and the Parity Conditions",
    readingMinutes: 15,
    summary: "Forward premiums, covered and uncovered interest rate parity, and the chain of parity conditions the exam builds vignettes around.",
    intro:
      "Level II Economics is dominated by currencies. The exam wants you to quote exchange rates correctly, compute a forward rate from interest rates, and reason through the parity conditions that link interest rates, inflation, spot rates, and forward rates. Get the quoting convention straight and the rest is arithmetic.",
    sections: [
      {
        heading: "Quotes and forward premiums",
        blocks: [
          { kind: "p", text: "An exchange rate is a price: in the convention price-currency/base-currency (e.g., USD/EUR = 1.10 means 1 euro costs 1.10 dollars), the base currency is the one being priced. Dealers quote a bid (the price they buy the base at) and a higher ask (the price they sell it at); the spread widens with volatility, longer maturities, and less liquidity." },
          { kind: "p", text: "A forward rate differs from spot by forward points. The currency with the LOWER interest rate trades at a forward premium; the higher-rate currency trades at a forward discount — a direct consequence of no-arbitrage. Intuitively, the market must take away in the forward market what you'd gain by holding the higher-yielding currency, or riskless profit would exist." },
        ],
      },
      {
        heading: "Covered vs uncovered interest rate parity",
        blocks: [
          { kind: "p", text: "Covered interest rate parity (CIRP) is an arbitrage relationship and therefore holds tightly: the forward rate is set so that hedged returns are identical across currencies. Quoting price/base, F = S × (1 + r_price)/(1 + r_base) for the period. Because it's enforced by arbitrage, CIRP is the one parity condition you can rely on to compute a forward rate." },
          { kind: "example", example: { title: "the covered-parity forward rate", prompt: "Spot USD/EUR = 1.10. One-year rates: USD 5%, EUR 3%. What is the no-arbitrage 1-year forward USD/EUR?", steps: ["Price currency is USD, base is EUR. F = S × (1 + r_USD)/(1 + r_EUR).", "F = 1.10 × (1.05 / 1.03) = 1.10 × 1.01942.", "F ≈ 1.1214 USD/EUR."], answer: "≈ 1.1214 — the higher-rate USD is at a forward discount (more USD per EUR forward), exactly offsetting its yield advantage." } },
          { kind: "p", text: "Uncovered interest rate parity (UIRP) is NOT an arbitrage condition — it's a theory about expectations: the higher-yielding currency is expected to depreciate by roughly the interest-rate differential, so expected returns are equalized unhedged. UIRP often fails in the short run (the basis for the carry trade), but anchors long-run thinking. Layer on the rest: purchasing power parity links exchange rates to inflation differentials, and the international Fisher effect links nominal rate differentials to expected inflation differentials." },
        ],
      },
      {
        heading: "Growth and its sources",
        blocks: [
          { kind: "p", text: "Beyond currencies, the exam tests the drivers of long-run growth. Output grows through more labor, more capital, and — most importantly for sustained per-capita gains — total factor productivity (TFP), the efficiency with which inputs are combined. Capital deepening (more capital per worker) raises output but faces diminishing returns; only technological progress (rising TFP) sustains growth indefinitely. Sound institutions, property rights, and openness to trade and technology are the conditions that let TFP rise." },
        ],
      },
    ],
    keyTerms: [
      { term: "Base vs price currency", def: "In price/base notation the base is the currency being priced; the rate is units of price currency per one base unit." },
      { term: "Forward premium/discount", def: "The lower-interest-rate currency trades at a forward premium; the higher-rate currency at a discount." },
      { term: "Covered interest rate parity", def: "An arbitrage condition that sets the forward rate so hedged returns are equal across currencies; it holds." },
      { term: "Uncovered interest rate parity", def: "A theory that the higher-yielding currency is expected to depreciate by the rate differential; often fails short-term." },
      { term: "Total factor productivity (TFP)", def: "The efficiency of combining labor and capital; rising TFP is what sustains long-run per-capita growth." },
    ],
    takeaways: [
      "Get the quote convention right first: price/base means units of price currency per one base-currency unit.",
      "The lower-rate currency is at a forward premium — no-arbitrage offsets any yield advantage.",
      "CIRP holds (arbitrage) and gives the forward rate; UIRP is an expectations theory that often breaks short-term.",
      "Long-run growth ultimately comes from rising total factor productivity, not just adding capital.",
    ],
  },

  {
    id: "cfa2-corp",
    examSlug: "cfa-l2",
    topicId: "corp",
    topicName: "Corporate Issuers",
    title: "Corporate Issuers: Capital Structure and Payout Policy",
    readingMinutes: 15,
    summary: "Modigliani-Miller with and without taxes, the trade-off theory's optimal leverage, and the real effect of dividends vs buybacks.",
    intro:
      "Level II Corporate Issuers sharpens two Level I ideas into testable models: how much debt a firm should use, and how it should return cash. The Modigliani-Miller propositions are the scaffolding for capital structure, and the dividend-versus-buyback analysis is a favorite because it rewards candidates who can do the EPS arithmetic and reason about signaling.",
    sections: [
      {
        heading: "Capital structure: from MM to the trade-off",
        blocks: [
          { kind: "p", text: "Start from the Modigliani-Miller world with no taxes: capital structure is irrelevant — the value of the firm is set by its assets, and adding debt just reshuffles risk between debt and equity holders (Proposition I). As leverage rises, the cost of equity rises exactly enough to keep the weighted average cost of capital (WACC) constant (Proposition II)." },
          { kind: "p", text: "Add corporate taxes and the picture tilts: because interest is tax-deductible, debt creates a tax shield, so firm value rises with leverage (VL = VU + tax rate × debt). Taken literally that implies 100% debt — which is absurd, so the static trade-off theory adds the costs of financial distress (bankruptcy risk, lost customers, fire-sale assets). The optimal capital structure is where the marginal tax benefit of one more dollar of debt equals the marginal expected cost of distress — the point that minimizes WACC and maximizes firm value." },
          { kind: "callout", label: "Pecking order & signaling", body: "Managers prefer internal funds first, then debt, then equity last (the pecking order), because issuing equity can signal that managers think the stock is overvalued. This is why an equity issuance often pushes the share price down." },
        ],
      },
      {
        heading: "Dividends vs buybacks",
        blocks: [
          { kind: "p", text: "A share repurchase and a cash dividend of equal size are economically equivalent in a tax-free, efficient market — both return the same cash. In the real world they differ in tax treatment, signaling, and flexibility (dividends imply a commitment; buybacks are discretionary). A buyback's effect on EPS is a common calculation: if the after-tax yield the company earns on its cash is LESS than its earnings yield (E/P), buying back shares increases EPS; if greater, it dilutes EPS." },
          { kind: "example", example: { title: "does a buyback lift EPS?", prompt: "A firm has $10M earnings and 5M shares (EPS = $2.00), with a stock price of $40. It uses $8M of cash (earning 3% after tax) to repurchase shares. Does EPS rise?", steps: ["Shares repurchased = $8M ÷ $40 = 200,000; new share count = 4,800,000.", "Lost after-tax income on cash = 3% × $8M = $240,000; new earnings = $9,760,000.", "New EPS = 9,760,000 ÷ 4,800,000 ≈ $2.033."], answer: "EPS rises to ≈$2.03, because the cash's 3% after-tax yield is below the 5% earnings yield (E/P = 2/40). When the earnings yield exceeds the cash yield, buybacks are accretive." } },
        ],
      },
      {
        heading: "Governance and stakeholders",
        blocks: [
          { kind: "p", text: "Corporate governance is the system of controls that aligns managers with the providers of capital and balances the claims of stakeholders — shareholders, creditors, employees, customers, regulators. Strong boards (independent, with real audit and compensation committees), aligned incentives, and transparency reduce agency costs. ESG factors are increasingly integrated as material risks: poor governance, environmental liabilities, or social missteps can impair cash flows and raise the cost of capital, which is why analysts fold them into valuation rather than treating them as a side issue." },
        ],
      },
    ],
    keyTerms: [
      { term: "MM Proposition I (no taxes)", def: "Capital structure is irrelevant to firm value when there are no taxes or frictions." },
      { term: "Debt tax shield", def: "The value added by deductible interest: VL = VU + (tax rate × debt) in the MM-with-taxes world." },
      { term: "Static trade-off theory", def: "Optimal leverage balances the marginal tax benefit of debt against the marginal cost of financial distress, minimizing WACC." },
      { term: "Pecking order", def: "Financing preference for internal funds, then debt, then equity last, due to signaling costs." },
      { term: "Buyback accretion rule", def: "A repurchase raises EPS when the after-tax yield on the cash used is below the earnings yield (E/P)." },
    ],
    takeaways: [
      "No taxes → capital structure is irrelevant; with taxes, debt adds a tax shield (VL = VU + t·D).",
      "The trade-off theory sets optimal leverage where the tax benefit equals the distress cost — minimizing WACC.",
      "Dividends and buybacks return the same cash; a buyback is accretive when E/P exceeds the cash's after-tax yield.",
      "Good governance lowers agency costs and the cost of capital; ESG enters as material valuation risk.",
    ],
  },

  {
    id: "cfa2-deriv",
    examSlug: "cfa-l2",
    topicId: "deriv",
    topicName: "Derivatives",
    title: "Derivatives: Forward Pricing, the Binomial Model, and Swaps",
    readingMinutes: 16,
    summary: "Carry-arbitrage forward pricing, valuing options with a one-period binomial tree, and seeing a swap as a pair of bonds.",
    intro:
      "Level II Derivatives is built on one idea repeated in three settings: no-arbitrage pricing. A forward, an option, and a swap are all priced by constructing a risk-free replicating position and forbidding free money. Once you see the carry-arbitrage logic, the formulas stop being arbitrary.",
    sections: [
      {
        heading: "Forwards and futures: carry arbitrage",
        blocks: [
          { kind: "p", text: "The forward price is whatever makes it impossible to profit from buying the asset today, carrying it, and delivering it later. With no carry costs or benefits, F0 = S0 × (1 + r)^T. Carry BENEFITS (dividends, coupons, convenience yield) lower the forward price; carry COSTS (storage) raise it. The value of a forward is zero at initiation and changes as the spot moves: to the long, it gains value when the spot rises above the locked-in forward price." },
          { kind: "p", text: "Futures price like forwards but settle daily (mark-to-market), so cash flows occur along the way; when interest rates are correlated with the futures price, futures and forward prices can diverge slightly. For the exam, the carry-arbitrage relationship — and the direction each carry adjustment pushes the price — is the reusable tool." },
        ],
      },
      {
        heading: "Option valuation: the binomial model",
        blocks: [
          { kind: "p", text: "A one-period binomial model assumes the underlying moves to one of two prices. You value the option by replication — or, equivalently, with risk-neutral probabilities. The up-move risk-neutral probability is π = (1 + r − d) / (u − d), where u and d are the up and down gross returns. The option value is the risk-neutral expected payoff discounted at the risk-free rate." },
          { kind: "example", example: { title: "a one-period binomial call", prompt: "Stock = $100; in one period it goes to $120 (u = 1.2) or $90 (d = 0.9). Risk-free rate = 4%. Value a call with strike $105.", steps: ["Payoffs: up = max(120 − 105, 0) = $15; down = max(90 − 105, 0) = $0.", "Risk-neutral prob π = (1 + r − d)/(u − d) = (1.04 − 0.9)/(1.2 − 0.9) = 0.14/0.30 = 0.4667.", "Expected payoff = 0.4667 × 15 + 0.5333 × 0 = $7.00.", "Discount: $7.00 / 1.04 ≈ $6.73."], answer: "≈ $6.73 — and notice the real-world probability of an up-move never entered the calculation; risk-neutral valuation is the point." } },
          { kind: "p", text: "Extend the tree for more periods, and in the limit it becomes the Black-Scholes-Merton model, whose assumptions — lognormally distributed prices, constant volatility and interest rate, no transaction costs, European exercise — are themselves tested. The key BSM driver to know qualitatively is that higher volatility raises both call and put values." },
        ],
      },
      {
        heading: "Swaps as a pair of bonds",
        blocks: [
          { kind: "p", text: "A plain-vanilla interest-rate swap — pay fixed, receive floating — is equivalent to being short a fixed-rate bond and long a floating-rate bond. At initiation the swap is worth zero, and the fixed 'swap rate' is set so the present value of the fixed leg equals the present value of the floating leg (which prices to par at reset). As rates move, the swap takes on value: to the pay-fixed party, the swap gains value when rates rise. Seeing the swap as a portfolio of bonds (or as a series of forward rate agreements) is what lets you value it at any later date." },
        ],
      },
    ],
    keyTerms: [
      { term: "Carry arbitrage", def: "Pricing a forward so buy-carry-deliver yields no riskless profit; F0 = S0(1+r)^T adjusted for carry costs/benefits." },
      { term: "Risk-neutral probability", def: "π = (1 + r − d)/(u − d); the probability used to value options by discounting expected payoffs at the risk-free rate." },
      { term: "Black-Scholes-Merton assumptions", def: "Lognormal prices, constant volatility and rate, frictionless markets, European exercise." },
      { term: "Plain-vanilla interest-rate swap", def: "Pay-fixed/receive-floating; equivalent to short a fixed bond and long a floating bond." },
      { term: "Swap value to pay-fixed party", def: "Rises when interest rates rise above the fixed swap rate." },
    ],
    takeaways: [
      "Everything prices by no-arbitrage: F0 = S0(1+r)^T, with carry benefits lowering and carry costs raising the forward.",
      "Binomial option value uses risk-neutral π = (1+r−d)/(u−d); the real probability never appears.",
      "More volatility raises BOTH call and put values; know the BSM assumptions.",
      "A pay-fixed swap = short a fixed bond + long a floating bond, and gains value when rates rise.",
    ],
  },

  {
    id: "cfa2-alts",
    examSlug: "cfa-l2",
    topicId: "alts",
    topicName: "Alternative Investments",
    title: "Alternative Investments: Real Estate, Private Equity, and Commodities",
    readingMinutes: 15,
    summary: "Valuing income real estate with the cap rate, how private equity creates value, and why the futures curve drives commodity returns.",
    intro:
      "Level II takes alternatives from description to valuation. You'll value an income property with a cap rate, reason about how a private-equity deal makes money, and explain why a commodity investor can lose money even when spot prices rise. The math is light but the mechanisms are precise.",
    sections: [
      {
        heading: "Income real estate",
        blocks: [
          { kind: "p", text: "Commercial real estate is valued three ways: the income approach, the cost approach, and sales comparison. The income approach dominates the exam. Start with net operating income (NOI) = rental and other income − operating expenses (excluding financing and taxes). The capitalization rate links NOI to value: value = NOI ÷ cap rate. A lower cap rate means a higher price for the same NOI (investors accept a lower yield for safer, prime property)." },
          { kind: "example", example: { title: "valuing a property by cap rate", prompt: "A building generates $900,000 of NOI, and comparable properties trade at a 6% cap rate. What is its estimated value?", steps: ["Value = NOI ÷ cap rate.", "Value = 900,000 ÷ 0.06 = $15,000,000."], answer: "$15,000,000 — and note that if the cap rate compressed to 5%, the same NOI would be worth $18,000,000, showing how sensitive value is to the cap rate." } },
        ],
      },
      {
        heading: "Private equity",
        blocks: [
          { kind: "p", text: "Private equity buys companies to improve and resell. The two main forms are leveraged buyouts (mature companies acquired with substantial debt, where returns come from paying down debt, improving operations, and selling at a higher multiple) and venture capital (early-stage companies with high failure rates but large potential payoffs). Value is created through operational improvement, financial leverage, and multiple expansion, and is harvested at exit — an IPO, a sale to a strategic buyer, or a secondary sale. Because cash flows are lumpy and manager-controlled, performance is judged by IRR and multiples like TVPI/DPI rather than time-weighted return." },
        ],
      },
      {
        heading: "Commodities and the futures curve",
        blocks: [
          { kind: "p", text: "Commodities pay no income, so a futures-based investor's return is the spot price change plus the roll yield plus the collateral yield. Roll yield is the exam's favorite: when the futures curve is in contango (futures price above spot), rolling expiring contracts into more expensive later ones produces a NEGATIVE roll yield that erodes returns; when the curve is in backwardation (futures below spot), rolling produces a POSITIVE roll yield. This is why a commodity fund can underperform even as spot prices rise — the shape of the curve, not just the spot move, drives the result." },
          { kind: "callout", label: "Contango vs backwardation", body: "Contango: futures > spot → negative roll yield (a drag). Backwardation: futures < spot → positive roll yield (a tailwind). Roll yield is often the dominant component of a commodity index's long-run return." },
        ],
      },
    ],
    keyTerms: [
      { term: "Net operating income (NOI)", def: "Property income minus operating expenses, before financing and taxes; the basis for income-approach valuation." },
      { term: "Capitalization rate", def: "NOI ÷ value; a lower cap rate implies a higher price for the same income." },
      { term: "Leveraged buyout", def: "Acquiring a mature company with significant debt, profiting from deleveraging, operational gains, and multiple expansion." },
      { term: "Roll yield", def: "The return from rolling futures contracts; negative in contango, positive in backwardation." },
      { term: "Contango vs backwardation", def: "Futures above spot (contango, a drag) vs futures below spot (backwardation, a tailwind) for commodity rolls." },
    ],
    takeaways: [
      "Income real estate: value = NOI ÷ cap rate; a lower cap rate means a higher price.",
      "Private equity creates value via operations, leverage, and multiple expansion, harvested at exit; judge it by IRR/multiples.",
      "Commodity return = spot change + roll yield + collateral yield; roll yield is negative in contango, positive in backwardation.",
      "The futures-curve shape can dominate commodity returns — spot can rise while the investment loses to negative roll.",
    ],
  },

  {
    id: "cfa2-pm",
    examSlug: "cfa-l2",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Portfolio Management: Multifactor Models and Active Risk",
    readingMinutes: 14,
    summary: "Moving beyond single-factor CAPM to multifactor models, and the language of active return, active risk, and the information ratio.",
    intro:
      "Level II portfolio management extends the single-factor CAPM into multifactor models and sharpens the vocabulary of active management. The exam wants you to read a factor model, understand what each factor sensitivity means, and use the active-return framework to judge a manager.",
    sections: [
      {
        heading: "From CAPM to multifactor models",
        blocks: [
          { kind: "p", text: "CAPM explains expected return with a single factor — the market — through beta. Multifactor models recognize that several systematic risks are priced. Arbitrage pricing theory (APT) expresses expected return as the risk-free rate plus the sum of each factor's sensitivity times its risk premium, resting on a no-arbitrage argument rather than CAPM's restrictive assumptions. Factor models come in three flavors: macroeconomic (factors are surprises in GDP, inflation, rates), fundamental (factors are characteristics like size, value, momentum), and statistical (factors extracted mathematically from returns)." },
          { kind: "p", text: "Each factor sensitivity is interpreted like a regression slope: the expected change in return for a one-unit change in that factor, holding the others constant. Multifactor models are used to estimate expected returns, to attribute performance to factor bets, and to control risk by managing factor exposures rather than individual securities." },
        ],
      },
      {
        heading: "Active return and active risk",
        blocks: [
          { kind: "p", text: "Active management is measured against a benchmark. Active return is the portfolio return minus the benchmark return; active risk (tracking error) is the standard deviation of that active return. The information ratio — active return ÷ active risk — is the key gauge of skill per unit of risk taken, and it lets you compare managers running very different amounts of risk. A manager's job is to maximize the information ratio within a tracking-error budget set by the client." },
          { kind: "callout", label: "The fundamental law", body: "Expected active return ≈ information coefficient × √breadth × active risk. Skill (IC) and the number of independent bets (breadth) both raise value-add — which is why a modestly skilled quant making thousands of small bets can rival a star stock-picker making a few." },
        ],
      },
    ],
    keyTerms: [
      { term: "Arbitrage pricing theory (APT)", def: "Expected return = risk-free rate + Σ(factor sensitivity × factor risk premium), based on no-arbitrage." },
      { term: "Factor sensitivity", def: "The expected return change per unit change in a factor, holding other factors constant." },
      { term: "Active return", def: "Portfolio return minus benchmark return." },
      { term: "Active risk (tracking error)", def: "The standard deviation of active return; the denominator of the information ratio." },
      { term: "Information ratio", def: "Active return ÷ active risk — active skill per unit of active risk taken." },
    ],
    takeaways: [
      "Multifactor models (APT) price several systematic risks; CAPM is the single-factor special case.",
      "Interpret factor sensitivities like regression slopes — effect per unit of factor, holding others constant.",
      "Active return vs the benchmark, scaled by active risk, gives the information ratio — the headline skill measure.",
      "Active value-add ≈ IC × √breadth × active risk: skill times the number of independent bets.",
    ],
  },

  {
    id: "cfa2-ethics",
    examSlug: "cfa-l2",
    topicId: "ethics",
    topicName: "Ethics",
    title: "Ethics: Applying the Standards and GIPS",
    readingMinutes: 14,
    summary: "The same Code and Standards from Level I, now tested in detailed, gray-area cases — plus what GIPS requires of a firm.",
    intro:
      "Ethics is the single highest-weighted topic at every level, and at Level II it's tested through dense, realistic cases. The Standards don't change — what changes is the subtlety. The winning approach is to know each Standard cold and apply it to the specific facts rather than reasoning from gut feel.",
    sections: [
      {
        heading: "The Standards in application",
        blocks: [
          { kind: "p", text: "The seven Standards of Professional Conduct cover Professionalism; Integrity of Capital Markets; Duties to Clients; Duties to Employers; Investment Analysis, Recommendations, and Actions; Conflicts of Interest; and Responsibilities as a Member or Candidate. The most frequently tested themes: place client interests above your own and your employer's; never use or convey material non-public information (Standard II); give every recommendation a reasonable and adequate basis with diligence (Standard V); deal fairly across all clients when disseminating recommendations; and fully disclose — and where required, obtain consent for — conflicts of interest (Standard VI)." },
          { kind: "callout", label: "The reliable tiebreaker", body: "When an employer's instruction, a local custom, or applicable law seems to conflict with the Code and Standards, follow the STRICTER requirement, and never knowingly participate in or conceal a violation. 'Everyone does it' and 'my boss told me to' are never defenses." },
        ],
      },
      {
        heading: "GIPS",
        blocks: [
          { kind: "p", text: "The Global Investment Performance Standards exist so investors can compare managers' track records fairly. GIPS is voluntary, but a firm that claims compliance must apply it firm-wide — it can't show GIPS numbers for one flattering product only. Compliance requires including all fee-paying, discretionary portfolios in composites (groups of portfolios with similar mandates), which prevents cherry-picking winners and 'survivorship' distortion. The purpose is consistency, fairness, full disclosure, and comparability of performance presentation — not a guarantee of good returns, but a guarantee that the reported returns are honestly constructed." },
        ],
      },
    ],
    keyTerms: [
      { term: "Material non-public information", def: "Information that would affect a security's price and isn't public; trading or tipping on it violates Standard II." },
      { term: "Reasonable basis (Standard V)", def: "The diligence and supporting research a recommendation must have before it's made." },
      { term: "Disclosure of conflicts (Standard VI)", def: "Conflicts must be fully and fairly disclosed (and sometimes consented to), not concealed." },
      { term: "Follow the stricter standard", def: "When law, employer policy, and the Code differ, comply with the most stringent." },
      { term: "GIPS composite", def: "A grouping of all similar fee-paying discretionary portfolios, required for compliant, non-cherry-picked reporting." },
    ],
    takeaways: [
      "Know all seven Standards and apply them to the facts — client first, no MNPI, reasonable basis, fair dealing, disclose conflicts.",
      "When rules conflict, follow the stricter standard and never conceal a violation.",
      "GIPS is voluntary but firm-wide, requiring all discretionary fee-paying portfolios in composites to prevent cherry-picking.",
      "Ethics is the highest-weighted topic — treat it as point-scoring, not filler.",
    ],
  },

  {
    id: "cfa2-quant-ml",
    examSlug: "cfa-l2",
    topicId: "quant-ml",
    topicName: "Regression & Machine Learning",
    title: "Multiple Regression, Model Misspecification, and Machine Learning",
    readingMinutes: 26,
    summary:
      "The Level II quant workhorse: reading multiple regression output, diagnosing the three classic violations, and the machine-learning vocabulary the exam now tests.",
    intro:
      "Level II quant is dominated by multiple regression — interpreting coefficients, testing them, and above all DIAGNOSING when the model is broken. The exam rarely asks you to estimate a regression by hand; it hands you the output and asks what's wrong with it. Layered on top is a newer machine-learning reading that tests vocabulary and intuition rather than computation. Master the three classic violations and the ML taxonomy and you own most of the topic's points.",
    sections: [
      {
        heading: "Reading multiple regression output",
        blocks: [
          { kind: "p", text: "A multiple regression explains a dependent variable with several independent variables. Each slope coefficient is a PARTIAL effect: the change in the dependent variable for a one-unit change in that independent variable, holding the others constant. Test a single coefficient with a t-test (coefficient ÷ standard error); test the whole model's joint significance with an F-test. R² always rises as you add variables, so use ADJUSTED R² — which penalizes extra regressors — to compare models of different size." },
          { kind: "formula", formula: { label: "t-statistic for a coefficient", expr: "t = (b̂ − 0) ÷ standard error of b̂", note: "Reject 'coefficient = 0' when |t| exceeds the critical value — the variable is statistically significant." } },
          { kind: "callout", label: "Tested nuance", body: "Adjusted R² can FALL when you add a variable that contributes little, which is exactly the signal you want. A high R² with insignificant coefficients is a classic multicollinearity red flag." },
        ],
      },
      {
        heading: "The three classic violations",
        blocks: [
          { kind: "p", text: "Level II drills three assumption violations. HETEROSKEDASTICITY: error variance is non-constant; it doesn't bias the coefficients but makes standard errors wrong, so t-tests mislead — detect with the Breusch-Pagan test, correct with robust standard errors. SERIAL CORRELATION: errors are correlated across observations (common in time series); again coefficients are unbiased but standard errors are understated — detect with the Durbin-Watson test, correct with robust standard errors. MULTICOLLINEARITY: independent variables are highly correlated with each other; the telltale sign is a significant F-test (model works overall) but insignificant individual t-tests, with inflated coefficient standard errors — fix by dropping a redundant variable." },
          { kind: "table", table: { caption: "Table 1 — The three regression violations.", headers: ["Violation", "Effect", "Detect / fix"], rows: [["Heteroskedasticity", "Wrong standard errors", "Breusch-Pagan / robust SE"], ["Serial correlation", "Understated standard errors", "Durbin-Watson / robust SE"], ["Multicollinearity", "Significant F, insignificant t's", "Drop a redundant variable"]] } },
        ],
      },
      {
        heading: "Machine learning vocabulary",
        blocks: [
          { kind: "p", text: "The ML reading tests concepts, not code. SUPERVISED learning uses labeled data to predict a target (regression for continuous outcomes, classification for categories); UNSUPERVISED learning finds structure in unlabeled data (clustering, dimension reduction). The central tension is OVERFITTING — a model that memorizes noise in the training set and fails out of sample. You manage it with a train/validation/test split and regularization (penalizing complexity, as in LASSO). Know the bias-variance tradeoff: too simple a model is biased (underfits); too complex a model has high variance (overfits)." },
          { kind: "callout", label: "Key distinction", body: "Supervised = labeled target to predict. Unsupervised = no labels, find patterns. Overfitting shows up as great in-sample fit and poor out-of-sample performance — the validation set exists to catch it." },
        ],
      },
    ],
    keyTerms: [
      { term: "Partial slope coefficient", def: "The effect of one variable holding the others constant." },
      { term: "t-test (coefficient)", def: "Coefficient ÷ standard error; tests whether a single coefficient differs from zero." },
      { term: "F-test", def: "Tests the joint significance of all the regression's independent variables." },
      { term: "Adjusted R²", def: "R² penalized for the number of regressors; use it to compare models." },
      { term: "Heteroskedasticity", def: "Non-constant error variance; biases standard errors, not coefficients." },
      { term: "Breusch-Pagan test", def: "A test for the presence of heteroskedasticity." },
      { term: "Serial correlation", def: "Correlation of errors across observations; common in time series." },
      { term: "Durbin-Watson test", def: "A test for first-order serial correlation." },
      { term: "Multicollinearity", def: "High correlation among independent variables; significant F but insignificant t's." },
      { term: "Supervised learning", def: "Learning from labeled data to predict a target." },
      { term: "Unsupervised learning", def: "Finding structure in unlabeled data (clustering, dimension reduction)." },
      { term: "Overfitting", def: "A model that fits training noise and generalizes poorly out of sample." },
      { term: "Bias-variance tradeoff", def: "Simple models underfit (bias); complex models overfit (variance)." },
      { term: "Regularization (LASSO)", def: "Penalizing model complexity to reduce overfitting." },
    ],
    takeaways: [
      "Slopes are partial effects; use t-tests for single coefficients, F for the model, adjusted R² to compare.",
      "Heteroskedasticity and serial correlation distort standard errors (not coefficients); multicollinearity gives a significant F with insignificant t's.",
      "Supervised learning predicts a labeled target; unsupervised finds structure in unlabeled data.",
      "Overfitting is the central ML risk — manage it with train/validation/test splits and regularization.",
    ],
  },

  {
    id: "cfa2-fra-combos",
    examSlug: "cfa-l2",
    topicId: "fra-combos",
    topicName: "Intercorporate Investments",
    title: "Intercorporate Investments and Business Combinations",
    readingMinutes: 28,
    summary:
      "How the accounting changes as ownership rises — from passive stakes to the equity method to full consolidation — and the acquisition-method mechanics the exam loves.",
    intro:
      "When one company invests in another, the accounting depends entirely on how much INFLUENCE the stake conveys. Level II tests the bright lines between passive investments, significant influence (equity method), and control (consolidation), and the very different financial statements each produces from identical economics. Get the influence ladder straight and the rest follows.",
    sections: [
      {
        heading: "The influence ladder",
        blocks: [
          { kind: "p", text: "Ownership percentage is a guideline for the level of influence, which drives the method. Below ~20% (no significant influence) the stake is a financial asset, marked to fair value with gains in profit or OCI. From ~20% to 50% (significant influence) you use the EQUITY METHOD: record the investment at cost, then increase it by your share of the investee's earnings and decrease it by dividends received — the investee is NOT consolidated, and only your proportional share of net income hits your income statement on one line. Above 50% (control) you CONSOLIDATE: combine 100% of the subsidiary's assets, liabilities, revenues, and expenses line by line, and show the portion you don't own as non-controlling interest." },
          { kind: "table", table: { caption: "Table 1 — Influence drives the method.", headers: ["Ownership", "Influence", "Method"], rows: [["< 20%", "None (passive)", "Fair value (financial asset)"], ["20–50%", "Significant", "Equity method (one-line)"], ["> 50%", "Control", "Consolidation (+ NCI)"]] } },
        ],
      },
      {
        heading: "The equity method in detail",
        blocks: [
          { kind: "p", text: "Under the equity method the carrying value of the investment moves with the investee. Buy 30% of a firm for $300; if the investee earns $100 you add 30% ($30) to the investment and to your income; if it pays $40 of dividends you reduce the investment by your 30% share ($12) because dividends are a return OF your investment, not new income. A key consequence: equity-method investors report HIGHER net income relative to revenue and assets than they would if the same stake were consolidated, because none of the investee's debt or revenue appears on their statements — a favorite exam comparison." },
          { kind: "example", example: { title: "equity-method carrying value", prompt: "An investor buys 25% of a company for $500. The investee earns $200 and pays $80 in total dividends this year. What is the year-end carrying value?", steps: ["Share of earnings: 25% × $200 = +$50.", "Share of dividends: 25% × $80 = −$20.", "Carrying value = $500 + $50 − $20."], answer: "$530. Earnings increase the investment account; dividends reduce it." } },
        ],
      },
      {
        heading: "Business combinations and the acquisition method",
        blocks: [
          { kind: "p", text: "A controlling acquisition uses the ACQUISITION METHOD: the acquirer records the target's identifiable assets and liabilities at FAIR value as of the acquisition date, and any excess of purchase price over the fair value of net identifiable assets becomes GOODWILL — an unamortized asset tested annually for impairment. When the parent owns less than 100%, the stake held by outside shareholders is non-controlling interest, reported in equity. Goodwill is never amortized under either IFRS or US GAAP; it sits on the balance sheet until an impairment test writes it down." },
          { kind: "callout", label: "Tested nuance", body: "Goodwill = purchase price − fair value of net identifiable assets acquired. It is NOT amortized; it is impairment-tested. Bargain purchases (price below fair value) produce a gain, not negative goodwill on the balance sheet." },
        ],
      },
    ],
    keyTerms: [
      { term: "Significant influence", def: "Typically 20–50% ownership; triggers the equity method." },
      { term: "Control", def: "Typically >50% ownership; triggers consolidation." },
      { term: "Equity method", def: "Investment recorded at cost, adjusted for share of earnings (up) and dividends (down)." },
      { term: "Consolidation", def: "Combining 100% of a controlled subsidiary line by line." },
      { term: "Non-controlling interest (NCI)", def: "The portion of a consolidated subsidiary not owned by the parent, shown in equity." },
      { term: "Acquisition method", def: "Recording an acquired firm's net assets at fair value at the acquisition date." },
      { term: "Goodwill", def: "Purchase price minus fair value of net identifiable assets; not amortized, only impairment-tested." },
      { term: "Goodwill impairment", def: "A write-down when goodwill's carrying value exceeds its recoverable amount." },
      { term: "Financial asset (passive stake)", def: "A sub-20% holding carried at fair value." },
      { term: "Carrying value (equity method)", def: "Cost + cumulative share of earnings − cumulative share of dividends." },
      { term: "One-line consolidation", def: "Nickname for the equity method — investee shows up on a single line." },
      { term: "Fair value at acquisition", def: "The basis for recording an acquired firm's identifiable assets and liabilities." },
      { term: "Bargain purchase", def: "An acquisition below fair value of net assets, recognized as a gain." },
      { term: "Identifiable net assets", def: "Acquired assets minus liabilities measured at fair value, excluding goodwill." },
    ],
    takeaways: [
      "Influence drives the method: <20% fair value, 20–50% equity method, >50% consolidation.",
      "Equity method: investment = cost + share of earnings − share of dividends; investee stays off the balance sheet.",
      "Consolidation combines 100% of a subsidiary and shows outside owners as non-controlling interest.",
      "Acquisition method records net assets at fair value; the excess is goodwill — never amortized, only impairment-tested.",
    ],
  },

  {
    id: "cfa2-fi-term",
    examSlug: "cfa-l2",
    topicId: "fi-term",
    topicName: "Term Structure & Bond Valuation",
    title: "Term Structure and Arbitrage-Free Bond Valuation",
    readingMinutes: 27,
    summary:
      "Spot and forward rates, why arbitrage-free valuation uses the spot curve, and how binomial interest-rate trees value bonds with embedded options via the OAS.",
    intro:
      "Level II fixed income moves past a single yield to the whole term structure. You discount each cash flow at its own spot rate, extract the forward rates the curve implies, and — for bonds whose cash flows depend on the path of rates — value them on a binomial interest-rate tree. The option-adjusted spread that falls out is the topic's signature number. Precision with the spot-versus-forward relationship is what the item sets reward.",
    sections: [
      {
        heading: "Spot rates and arbitrage-free valuation",
        blocks: [
          { kind: "p", text: "A spot rate is the yield on a single zero-coupon payment at a given maturity. Arbitrage-free valuation discounts EACH of a bond's cash flows at the spot rate matching its timing, rather than using one yield to maturity for all of them. If a bond's market price differs from this spot-rate value, an arbitrageur could strip or reconstitute it for a riskless profit — which is why the spot curve, not the YTM, gives the no-arbitrage price. The YTM is just a single complex average of the spot rates that happens to set price equal to value." },
          { kind: "formula", formula: { label: "Price from spot rates", expr: "Price = CF₁/(1+z₁)¹ + CF₂/(1+z₂)² + … + CFₙ/(1+zₙ)ⁿ", note: "Each cash flow is discounted at its own maturity-matched spot rate zₜ." } },
        ],
      },
      {
        heading: "Forward rates",
        blocks: [
          { kind: "p", text: "A forward rate is a rate agreed today for a loan that begins in the future, and it's implied by the spot curve through a no-arbitrage condition: rolling over short-term investments must earn the same as locking in a longer rate. The relationship between spot and forward is the engine of the topic. When the spot curve is upward-sloping, forward rates lie ABOVE spot rates; when it's downward-sloping, forwards lie below. The forward curve is the market's break-even path — not a forecast, but the set of future rates at which you'd be indifferent." },
          { kind: "example", example: { title: "a one-year forward rate", prompt: "The one-year spot rate is 3% and the two-year spot rate is 4%. What is the one-year forward rate one year from now (the 1y1y rate)?", steps: ["No-arbitrage: (1.03)(1 + f) = (1.04)².", "(1 + f) = 1.0816 ÷ 1.03 = 1.0501.", "f ≈ 5.01%."], answer: "About 5.0% — above both spot rates, as expected with an upward-sloping curve." } },
        ],
      },
      {
        heading: "Binomial trees and option-adjusted spread",
        blocks: [
          { kind: "p", text: "Bonds with embedded options (callable, putable) have cash flows that depend on the path of future rates, so a single discount curve won't do. A binomial interest-rate tree models rates moving up or down each period; you value the bond by working BACKWARD from maturity, at each node taking the exercise decision (a callable bond is called when it's advantageous to the issuer) and discounting expected values. The option-adjusted spread (OAS) is the constant spread added to every tree rate that makes the model value equal the market price — it's 'option-adjusted' because the tree already accounts for the embedded option, leaving the OAS to capture credit and liquidity. For a callable bond, OAS is LOWER than the nominal Z-spread because the call option's cost has been removed." },
          { kind: "callout", label: "Tested nuance", body: "Higher assumed interest-rate volatility raises the value of the embedded option. For a callable bond (option benefits the issuer) that LOWERS the bond's value; for a putable bond (option benefits the holder) it RAISES it. OAS lets you compare option-laden bonds on a clean, credit-and-liquidity basis." },
        ],
      },
    ],
    keyTerms: [
      { term: "Spot rate", def: "The yield on a single zero-coupon cash flow at a given maturity." },
      { term: "Arbitrage-free valuation", def: "Discounting each cash flow at its maturity-matched spot rate." },
      { term: "Yield to maturity", def: "The single rate that sets a bond's price equal to its discounted cash flows." },
      { term: "Forward rate", def: "A rate set today for a loan beginning in the future, implied by the spot curve." },
      { term: "No-arbitrage condition", def: "Rolling short rates must equal locking in a long rate, fixing forward rates." },
      { term: "Forward curve", def: "The market's break-even path of future rates, not a forecast." },
      { term: "Binomial interest-rate tree", def: "A model of rates moving up/down used to value path-dependent bonds." },
      { term: "Backward induction", def: "Valuing a bond on a tree by working from maturity to today." },
      { term: "Embedded option", def: "A call or put feature whose value depends on the rate path." },
      { term: "Option-adjusted spread (OAS)", def: "The constant spread over tree rates that equates model value to market price." },
      { term: "Z-spread", def: "The constant spread over spot rates ignoring optionality." },
      { term: "Callable bond", def: "Issuer can redeem early; the option lowers the bond's value to the holder." },
      { term: "Putable bond", def: "Holder can sell back early; the option raises the bond's value." },
      { term: "Interest-rate volatility", def: "Higher assumed volatility raises embedded-option value." },
    ],
    takeaways: [
      "Discount each cash flow at its own spot rate — that's the arbitrage-free price; YTM is just an average of spot rates.",
      "Forward rates are implied by the spot curve via no-arbitrage; with an upward curve, forwards exceed spots.",
      "Bonds with embedded options are valued on a binomial tree by backward induction.",
      "OAS is the spread over tree rates that matches market price; for callables it's below the Z-spread because the option cost is removed.",
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
  // ---- FSA ----
  {
    id: "cfa2-fra-q1",
    examSlug: "cfa-l2",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    difficulty: 2,
    stem: "An investor pays $300m for 30% of a firm whose net assets have a book value of $800m; $40m of the excess relates to equipment with a 10-year life, the rest to goodwill. The investee earns $100m and pays $40m in dividends. Year-1 equity income is closest to:",
    choices: ["$30m", "$26m", "$18m"],
    answerIndex: 1,
    explanation:
      "Equity income = share of net income − amortization of the excess assigned to identifiable assets = (0.30 × 100) − (40/10) = 30 − 4 = $26m. Goodwill is not amortized. Choice A ignores the excess amortization — the most common error. Choice C wrongly subtracts the $12m dividend share from income; under the equity method dividends reduce the INVESTMENT's carrying value, not income.",
  },
  {
    id: "cfa2-fra-q2",
    examSlug: "cfa-l2",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    difficulty: 3,
    stem: "Compared with the equity method, full consolidation of a 60%-owned profitable subsidiary will MOST likely show:",
    choices: [
      "Higher net income attributable to the parent.",
      "The same parent net income but lower net profit margin.",
      "Lower total assets.",
    ],
    answerIndex: 1,
    explanation:
      "Consolidation and the equity method report the SAME net income attributable to the parent — what changes is statement size: consolidation brings in 100% of the subsidiary's revenue, expenses, assets, and liabilities (with NCI absorbing the unowned share). Same profit on a bigger revenue base = lower margin; bigger asset base = lower ROA and higher apparent leverage. Choices A and C reverse those mechanics. This optics-vs-economics distinction is a perennial vignette question.",
  },
  {
    id: "cfa2-fra-q3",
    examSlug: "cfa-l2",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    difficulty: 2,
    stem: "Plan assets are $950m and the benefit obligation is $1,100m; the discount rate is 5% and current service cost is $40m. Under IFRS, reported pension expense in P&L is closest to:",
    choices: ["$40.0m", "$47.5m", "$95.0m"],
    answerIndex: 1,
    explanation:
      "IFRS P&L = service cost + NET interest on the funded status = 40 + 5% × (1,100 − 950) = 40 + 7.5 = $47.5m. Remeasurements (asset-return surprises, assumption changes) go to OCI and are never recycled. Choice A omits net interest. Choice C charges interest on the full obligation without crediting the asset return implicit in net interest — that separation is the US GAAP presentation, and even there an EXPECTED return assumption offsets interest cost.",
  },
  {
    id: "cfa2-fra-q4",
    examSlug: "cfa-l2",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    difficulty: 3,
    stem: "A subsidiary whose functional currency is the parent's currency holds net monetary liabilities. If the local currency depreciates during the period, the parent MOST likely reports:",
    choices: [
      "A negative cumulative translation adjustment in equity.",
      "A remeasurement gain in net income.",
      "No effect, because translation only affects equity.",
    ],
    answerIndex: 1,
    explanation:
      "Functional currency = parent's currency → TEMPORAL method, whose exposure is the net MONETARY position and whose remeasurement effect lands in NET INCOME. With net monetary LIABILITIES in a depreciating currency, those liabilities shrink in parent-currency terms — a gain. Choice A describes the CURRENT RATE method outcome (net asset exposure, CTA in equity), which applies when the functional currency is the local one. Choice C is wrong under either method.",
  },
  // ---- Fixed Income ----
  {
    id: "cfa2-fi-q1",
    examSlug: "cfa-l2",
    topicId: "fixed",
    topicName: "Fixed Income",
    difficulty: 2,
    stem: "The 1-year spot rate is 4.0% and the 2-year spot rate is 5.0%. The implied 1-year rate, one year forward, is closest to:",
    choices: ["5.0%", "6.0%", "4.5%"],
    answerIndex: 1,
    explanation:
      "(1.05)² = (1.04)(1 + f) → f = 1.1025/1.04 − 1 = 6.01%. An upward-sloping spot curve always implies forwards ABOVE current spots. Choice A confuses the forward with the 2-year spot; choice C averages the two spots, which is never the forward arithmetic. This two-line computation, in some costume, appears on virtually every sitting.",
  },
  {
    id: "cfa2-fi-q2",
    examSlug: "cfa-l2",
    topicId: "fixed",
    topicName: "Fixed Income",
    difficulty: 2,
    stem: "For a callable corporate bond, which relationship between OAS and Z-spread holds, and why?",
    choices: [
      "OAS > Z-spread, because the investor is paid extra for the call risk.",
      "OAS < Z-spread, because the Z-spread includes the cost of the option held against the investor.",
      "OAS = Z-spread, because spreads are option-independent.",
    ],
    answerIndex: 1,
    explanation:
      "Z-spread bundles all compensation: credit, liquidity, AND the embedded option. The OAS strips the option using a volatility-calibrated tree: OAS = Z-spread − option cost. A call benefits the ISSUER, so its cost is positive to the investor and OAS sits BELOW the Z-spread; for putables the inequality flips. Choice A confuses where the compensation shows up — the call compensation lives inside the Z-spread, which is exactly why OAS must remove it before comparing bonds.",
  },
  {
    id: "cfa2-fi-q3",
    examSlug: "cfa-l2",
    topicId: "fixed",
    topicName: "Fixed Income",
    difficulty: 3,
    stem: "An analyst raises her interest-rate volatility assumption when valuing a callable bond in a binomial tree. The computed OAS will MOST likely:",
    choices: ["Increase", "Decrease", "Stay unchanged, since OAS is model-independent"],
    answerIndex: 1,
    explanation:
      "Higher volatility makes the embedded call MORE valuable, raising the option cost. Since OAS = Z-spread − option cost and the market price (hence Z-spread) hasn't changed, the OAS must FALL. The chain — volatility → option value → OAS — is the precise mechanism this question pattern tests, and choice C states the opposite of the truth: OAS is conditional on the volatility input, which is its key limitation.",
  },
  {
    id: "cfa2-fi-q4",
    examSlug: "cfa-l2",
    topicId: "fixed",
    topicName: "Fixed Income",
    difficulty: 2,
    stem: "A bond has a 2% annual default probability and 40% expected recovery. The expected annual credit loss rate, and the approximate spread floor it implies, is closest to:",
    choices: ["0.8%", "1.2%", "2.0%"],
    answerIndex: 1,
    explanation:
      "Expected loss = PD × LGD = 2% × (1 − 0.40) = 2% × 60% = 1.2% — so a fair spread starts near 120 bps before adding premia for risk aversion and illiquidity. Choice A multiplies PD by the RECOVERY rate instead of the loss rate. Choice C ignores recovery entirely. Remember the structure: PD is an issuer property; LGD varies by ISSUE seniority — senior secured paper of the same issuer carries the same PD but a lower LGD and hence a tighter spread.",
  },

  // ---- Financial Statement Analysis ----
  {
    id: "cfa2-fra-q5", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Statement Analysis", difficulty: 3,
    stem: "A company owns 30% of an associate and has significant influence. Under the equity method, the investor:",
    choices: ["Consolidates 100% of the associate's assets and revenues", "Recognizes its proportionate share of the associate's net income (increasing the investment); dividends received reduce the carrying amount", "Reports the stake only at fair value through profit or loss"],
    answerIndex: 1,
    explanation: "With significant influence (typically 20–50%), the equity method records the investment at cost, then adds the investor's pro-rata share of the associate's earnings (and subtracts its share of losses); dividends received are a return OF investment that reduces the carrying value. Choice A is consolidation, used only with control (>50%). Choice C is the treatment for passive holdings without significant influence.",
  },
  {
    id: "cfa2-fra-q6", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Statement Analysis", difficulty: 3,
    stem: "A parent owns 80% of and controls a subsidiary. On the consolidated balance sheet, the parent reports:",
    choices: ["80% of the subsidiary's assets, matching its ownership", "100% of the subsidiary's assets, with a non-controlling interest in equity for the 20% it doesn't own", "Only its equity-method investment line"],
    answerIndex: 1,
    explanation: "Control requires full consolidation: 100% of the subsidiary's assets, liabilities, revenues, and expenses are combined, and a non-controlling (minority) interest is shown in equity to represent the 20% owned by outsiders. Choice A pro-rates the assets, which consolidation does not do. Choice C is the equity method, used for significant influence, not control.",
  },
  {
    id: "cfa2-fra-q7", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Statement Analysis", difficulty: 3,
    stem: "The funded status of a defined-benefit pension plan equals:",
    choices: ["Plan assets + the projected benefit obligation", "Fair value of plan assets − the projected benefit obligation (PBO)", "Service cost − interest cost"],
    answerIndex: 1,
    explanation: "Funded status = fair value of plan assets − PBO; a positive figure is an overfunded (asset) position and a negative figure is reported as a net pension liability on the balance sheet. Choice A adds the obligation instead of subtracting it. Choice C describes two components of periodic pension cost, not the balance-sheet funded status.",
  },
  {
    id: "cfa2-fra-q8", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Statement Analysis", difficulty: 3,
    stem: "When a foreign subsidiary's functional currency is its own local currency, the parent translates its statements using the:",
    choices: ["Temporal method, with the remeasurement gain/loss in net income", "Current rate method, with the translation adjustment in other comprehensive income (CTA)", "Historical rate for all accounts"],
    answerIndex: 1,
    explanation: "If the functional currency is the local currency, the current rate (translation) method applies: assets and liabilities at the current rate, and the resulting cumulative translation adjustment is reported in OCI rather than hitting net income. Choice A (temporal/remeasurement) applies when the functional currency is the parent's. Choice C misstates the mechanics of either method.",
  },
  {
    id: "cfa2-fra-q9", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Statement Analysis", difficulty: 2,
    stem: "A debt security the company intends to hold to collect contractual cash flows is generally measured at:",
    choices: ["Fair value through profit or loss", "Amortized cost", "Fair value through OCI with gains recycled daily"],
    answerIndex: 1,
    explanation: "Under the hold-to-collect business model, debt instruments with simple principal-and-interest cash flows are measured at amortized cost, so short-term price swings don't flow through earnings. Choice A applies to trading instruments or those that fail the cash-flow test. Choice C garbles the FVOCI category, which doesn't recycle gains 'daily.'",
  },

  // ---- Fixed Income ----
  {
    id: "cfa2-fi-q5", examSlug: "cfa-l2", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "For a bond with an embedded option, the appropriate interest-rate sensitivity measure is:",
    choices: ["Modified duration, because cash flows are fixed", "Effective duration, because cash flows change as yields change", "Macaulay duration in years"],
    answerIndex: 1,
    explanation: "Embedded options make a bond's cash flows depend on the level of rates, so effective duration — computed by shifting the benchmark yield curve up and down and observing repricing — is required. Choice A (modified duration) assumes fixed cash flows and understates the risk of option-embedded bonds. Choice C (Macaulay) is a weighted-average time measure, not the sensitivity needed here.",
  },
  {
    id: "cfa2-fi-q6", examSlug: "cfa-l2", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "The option-adjusted spread (OAS) is useful because it:",
    choices: ["Includes the cost of the embedded option in the spread", "Removes the value of the embedded option from the Z-spread, making spreads comparable across bonds with optionality", "Equals the nominal spread over Treasuries"],
    answerIndex: 1,
    explanation: "OAS strips out the option's value from the Z-spread, leaving the spread that compensates purely for credit and liquidity — so bonds with different embedded options can be compared on an apples-to-apples basis. Choice A is backwards (OAS removes, not includes, the option cost). Choice C describes the simple nominal spread, which ignores the term structure and the option.",
  },
  {
    id: "cfa2-fi-q7", examSlug: "cfa-l2", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "As market yields fall toward a callable bond's coupon rate, the bond tends to exhibit:",
    choices: ["Increasing positive convexity", "Negative convexity — price appreciation is capped ('price compression')", "No change in price"],
    answerIndex: 1,
    explanation: "When yields fall and a call becomes likely, the callable bond's upside is limited to near the call price, producing negative convexity and 'price compression.' Choice A is wrong — an option-free bond shows positive convexity, but the embedded call reverses that at low yields. Choice C ignores that the bond still reprices, just with limited upside.",
  },
  {
    id: "cfa2-fi-q8", examSlug: "cfa-l2", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "Arbitrage-free valuation of an option-free bond discounts each cash flow using:",
    choices: ["A single yield to maturity", "The corresponding spot (zero-coupon) rate for each cash flow's date", "The coupon rate"],
    answerIndex: 1,
    explanation: "Arbitrage-free valuation treats each cash flow as its own zero-coupon bond and discounts it at the matching spot rate, preventing riskless arbitrage; valuing with a single YTM can misprice bonds when the spot curve isn't flat. Choice A is the YTM shortcut that arbitrage-free pricing improves upon. Choice C (coupon rate) is not a discount rate at all.",
  },
  {
    id: "cfa2-fi-q9", examSlug: "cfa-l2", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "The value of a callable bond can be expressed as:",
    choices: ["Straight (option-free) bond value + value of the call option", "Straight (option-free) bond value − value of the call option", "Value of the call option only"],
    answerIndex: 1,
    explanation: "Because the call benefits the issuer (it can buy the bond back), the investor has effectively sold that option, so callable bond value = value of the otherwise-identical straight bond − value of the embedded call. Choice A adds the option, which would wrongly raise the bond's value to the investor. Choice C ignores the underlying bond entirely.",
  },

  // ---- Quantitative Methods ----
  {
    id: "cfa2-qm-q1", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "A regression shows a significant F-statistic and high R², but none of the individual coefficients is statistically significant. This is the classic signature of:",
    choices: ["Heteroskedasticity", "Multicollinearity", "A perfectly specified model"],
    answerIndex: 1,
    explanation: "When independent variables are highly correlated, the model explains the data well overall (significant F, high R²) but can't disentangle the individual effects, inflating standard errors and crushing the individual t-stats. Choice A (heteroskedasticity) biases standard errors but doesn't produce this specific 'significant F, insignificant t's' pattern. Choice C is wrong — this pattern is a red flag, not a sign of a good model.",
  },
  {
    id: "cfa2-qm-q2", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "The standard remedy for heteroskedasticity in a regression is to:",
    choices: ["Drop an independent variable", "Use robust (White) standard errors", "Add more lags"],
    answerIndex: 1,
    explanation: "Heteroskedasticity (non-constant error variance) biases the standard errors, so the fix is to compute robust (White) standard errors, which corrects the inference without changing the coefficients. Choice A addresses multicollinearity, not heteroskedasticity. Choice C relates to serial correlation in time series, a different problem.",
  },
  {
    id: "cfa2-qm-q3", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "Before estimating an autoregressive (AR) model, the series must be:",
    choices: ["Covariance stationary (constant mean and variance)", "Normally distributed", "Free of any trend forever"],
    answerIndex: 0,
    explanation: "An AR model requires covariance stationarity — a constant mean and variance over time — otherwise the regression is spurious. If a unit root is present (a random walk), the series is non-stationary and should be first-differenced. Choice B isn't the requirement. Choice C is too strong; a stationary series can still be modeled, and trends are handled by differencing.",
  },

  // ---- Economics ----
  {
    id: "cfa2-ec-q1", examSlug: "cfa-l2", topicId: "econ", topicName: "Economics", difficulty: 2,
    stem: "In a no-arbitrage world, the currency with the LOWER interest rate will trade at a:",
    choices: ["Forward discount", "Forward premium", "Rate equal to spot"],
    answerIndex: 1,
    explanation: "Covered interest rate parity forces the lower-yielding currency to trade at a forward premium, exactly offsetting the interest advantage of the higher-yielding currency so no riskless profit exists. Choice A reverses it (the higher-rate currency is at a discount). Choice C would only hold if the two interest rates were equal.",
  },
  {
    id: "cfa2-ec-q2", examSlug: "cfa-l2", topicId: "econ", topicName: "Economics", difficulty: 3,
    stem: "Which parity condition is an enforceable no-arbitrage relationship that reliably holds?",
    choices: ["Uncovered interest rate parity", "Covered interest rate parity", "Purchasing power parity in the short run"],
    answerIndex: 1,
    explanation: "Covered interest rate parity is enforced by arbitrage (the forward is fully hedged), so it holds tightly and is used to compute forward rates. Choice A (uncovered IRP) is an expectations theory that often fails short-term — the basis for the carry trade. Choice C (PPP) is a long-run tendency that does not hold in the short run.",
  },
  {
    id: "cfa2-ec-q3", examSlug: "cfa-l2", topicId: "econ", topicName: "Economics", difficulty: 2,
    stem: "Sustained growth in output PER CAPITA over the long run is driven primarily by:",
    choices: ["Adding more capital (capital deepening) alone", "Rising total factor productivity (technology/efficiency)", "Population growth"],
    answerIndex: 1,
    explanation: "Capital deepening faces diminishing returns, so only rising total factor productivity — better technology and efficiency in combining inputs — sustains per-capita growth indefinitely. Choice A raises output but eventually stalls per worker. Choice C grows total output but not output per person.",
  },

  // ---- Corporate Issuers ----
  {
    id: "cfa2-co-q1", examSlug: "cfa-l2", topicId: "corp", topicName: "Corporate Issuers", difficulty: 3,
    stem: "Under Modigliani-Miller WITH corporate taxes, the value of a levered firm equals the unlevered value:",
    choices: ["Minus the cost of equity", "Plus the debt tax shield (tax rate × debt)", "With no change, since structure is irrelevant"],
    answerIndex: 1,
    explanation: "With taxes, deductible interest creates a tax shield, so VL = VU + (tax rate × debt) — value rises with leverage. Choice C describes the no-tax MM world (irrelevance). Choice A is not the relationship; the cost of equity rises with leverage but value is increased by the tax shield, not reduced.",
  },
  {
    id: "cfa2-co-q2", examSlug: "cfa-l2", topicId: "corp", topicName: "Corporate Issuers", difficulty: 3,
    stem: "The static trade-off theory says the optimal capital structure is the point where:",
    choices: ["Debt is maximized to capture all tax benefits", "The marginal tax benefit of debt equals the marginal cost of financial distress", "The firm uses no debt at all"],
    answerIndex: 1,
    explanation: "Because the tax shield (which favors more debt) is offset by rising expected costs of financial distress, the optimal structure balances the two at the margin — minimizing WACC and maximizing firm value. Choice A ignores distress costs. Choice C ignores the valuable tax shield.",
  },
  {
    id: "cfa2-co-q3", examSlug: "cfa-l2", topicId: "corp", topicName: "Corporate Issuers", difficulty: 3,
    stem: "A share repurchase funded with cash is accretive to EPS when:",
    choices: ["The after-tax yield on the cash exceeds the earnings yield (E/P)", "The earnings yield (E/P) exceeds the after-tax yield on the cash used", "The stock trades above book value"],
    answerIndex: 1,
    explanation: "If the earnings yield (E/P) the shares carry is higher than the after-tax return the company earns on its cash, retiring shares raises EPS. Choice A reverses the comparison (that case dilutes EPS). Choice C relates to book value per share, not the EPS-accretion test.",
  },

  // ---- Derivatives ----
  {
    id: "cfa2-de-q1", examSlug: "cfa-l2", topicId: "deriv", topicName: "Derivatives", difficulty: 3,
    stem: "In a one-period binomial option model, the value of the option is found by discounting the expected payoff computed with:",
    choices: ["The real-world probability of an up move", "The risk-neutral probability π = (1 + r − d)/(u − d)", "A 50/50 probability always"],
    answerIndex: 1,
    explanation: "Risk-neutral valuation uses π = (1 + r − d)/(u − d) and discounts at the risk-free rate; the real-world probability never enters. Choice A is the common trap — the actual probability is irrelevant to the no-arbitrage price. Choice C is only true by coincidence for specific u, d, r.",
  },
  {
    id: "cfa2-de-q2", examSlug: "cfa-l2", topicId: "deriv", topicName: "Derivatives", difficulty: 2,
    stem: "Holding the underlying that pays income (a carry BENEFIT) before delivery causes the no-arbitrage forward price to be:",
    choices: ["Higher than with no carry", "Lower than with no carry", "Unaffected"],
    answerIndex: 1,
    explanation: "Carry benefits (dividends, coupons, convenience yield) reduce the net cost of carrying the asset, lowering the forward price relative to the no-carry case; carry costs (storage) raise it. Choice A reverses the effect of a benefit. Choice C ignores that carry adjustments move the forward.",
  },
  {
    id: "cfa2-de-q3", examSlug: "cfa-l2", topicId: "deriv", topicName: "Derivatives", difficulty: 2,
    stem: "A pay-fixed, receive-floating interest-rate swap gains value to the holder when interest rates:",
    choices: ["Fall", "Rise above the fixed swap rate", "Stay exactly constant"],
    answerIndex: 1,
    explanation: "Paying fixed and receiving floating is equivalent to being short a fixed-rate bond and long a floating-rate bond, so the position gains value when rates rise (the floating leg you receive grows). Choice A is the opposite — falling rates hurt the pay-fixed party. Choice C leaves the swap near its initial zero value.",
  },

  // ---- Alternative Investments ----
  {
    id: "cfa2-al-q1", examSlug: "cfa-l2", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "A property generates $600,000 of NOI and comparable properties trade at an 8% cap rate. Its estimated value is:",
    choices: ["$4,800,000", "$7,500,000", "$48,000,000"],
    answerIndex: 1,
    explanation: "Value = NOI ÷ cap rate = $600,000 ÷ 0.08 = $7,500,000. Choice A multiplies NOI by the cap rate instead of dividing. Choice C misplaces the decimal. Remember: a lower cap rate would imply an even higher value for the same NOI.",
  },
  {
    id: "cfa2-al-q2", examSlug: "cfa-l2", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "When the commodity futures curve is in contango, an investor rolling futures experiences:",
    choices: ["A positive roll yield (tailwind)", "A negative roll yield (drag)", "No roll effect"],
    answerIndex: 1,
    explanation: "Contango means futures prices are above spot, so rolling expiring contracts into more expensive later ones produces a negative roll yield that drags on returns. Choice A describes backwardation (futures below spot). Choice C ignores that the curve shape directly affects roll returns — often the dominant component.",
  },
  {
    id: "cfa2-al-q3", examSlug: "cfa-l2", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "Because a private-equity manager controls the timing of capital calls and distributions, performance is best measured with:",
    choices: ["Time-weighted return", "Internal rate of return (IRR) and multiples like TVPI/DPI", "Simple average annual return"],
    answerIndex: 1,
    explanation: "When the manager dictates cash-flow timing, the money-weighted IRR (and multiples such as TVPI/DPI) captures the actual investor experience. Choice A (time-weighted) is appropriate for liquid managers who don't control client cash flows. Choice C ignores timing and the time value of money entirely.",
  },

  // ---- Portfolio Management ----
  {
    id: "cfa2-pm-q1", examSlug: "cfa-l2", topicId: "pm", topicName: "Portfolio Management", difficulty: 3,
    stem: "Arbitrage pricing theory (APT) differs from CAPM mainly because it:",
    choices: ["Uses only the market factor", "Allows expected return to depend on multiple priced systematic factors", "Ignores risk entirely"],
    answerIndex: 1,
    explanation: "APT models expected return as the risk-free rate plus the sum of several factor sensitivities times their risk premia, based on no-arbitrage — generalizing CAPM's single market factor. Choice A describes CAPM, the single-factor special case. Choice C is false; APT is entirely about compensation for systematic risk.",
  },
  {
    id: "cfa2-pm-q2", examSlug: "cfa-l2", topicId: "pm", topicName: "Portfolio Management", difficulty: 2,
    stem: "The information ratio is calculated as:",
    choices: ["Total return ÷ standard deviation", "Active return ÷ active risk (tracking error)", "Beta ÷ alpha"],
    answerIndex: 1,
    explanation: "The information ratio is active return (portfolio minus benchmark) divided by active risk (the standard deviation of active return), measuring active skill per unit of active risk. Choice A is closer to the Sharpe ratio's structure. Choice C is not a defined performance measure.",
  },
  {
    id: "cfa2-pm-q3", examSlug: "cfa-l2", topicId: "pm", topicName: "Portfolio Management", difficulty: 2,
    stem: "In a multifactor model, a factor sensitivity (factor beta) is interpreted as:",
    choices: ["The total return of the portfolio", "The expected change in return per unit change in that factor, holding other factors constant", "The probability the factor is positive"],
    answerIndex: 1,
    explanation: "A factor sensitivity is read like a regression slope: the expected return change for a one-unit move in that factor, with the other factors held constant. Choice A confuses a sensitivity with total return. Choice C misinterprets a sensitivity as a probability.",
  },

  // ---- Ethics ----
  {
    id: "cfa2-et-q1", examSlug: "cfa-l2", topicId: "ethics", topicName: "Ethics", difficulty: 2,
    stem: "When applicable local law is LESS strict than the CFA Code and Standards, a member must:",
    choices: ["Follow the local law, since it governs", "Adhere to the stricter Code and Standards", "Choose whichever is more convenient"],
    answerIndex: 1,
    explanation: "Members must always meet the higher standard: when law and the Code differ, follow the stricter of the two. Choice A is wrong — complying with looser law doesn't excuse violating the Code. Choice C ignores the duty to uphold the most stringent requirement.",
  },
  {
    id: "cfa2-et-q2", examSlug: "cfa-l2", topicId: "ethics", topicName: "Ethics", difficulty: 3,
    stem: "A firm claiming GIPS compliance must:",
    choices: ["Show GIPS results only for its best-performing composite", "Apply GIPS on a firm-wide basis and include all fee-paying discretionary portfolios in composites", "Guarantee a minimum return"],
    answerIndex: 1,
    explanation: "GIPS compliance is firm-wide and requires grouping all fee-paying discretionary portfolios into composites, which prevents cherry-picking and survivorship distortion. Choice A is exactly the abuse GIPS forbids. Choice C is false — GIPS governs how performance is presented, not the returns themselves.",
  },
  {
    id: "cfa2-et-q3", examSlug: "cfa-l2", topicId: "ethics", topicName: "Ethics", difficulty: 2,
    stem: "An analyst learns material, non-public information about a pending merger. Under the Standards they must:",
    choices: ["Trade on it quickly before it becomes public", "Not trade or cause others to trade on it until it is public", "Share it only with their best clients"],
    answerIndex: 1,
    explanation: "Standard II (Integrity of Capital Markets) prohibits acting or causing others to act on material non-public information until it is publicly disseminated. Choice A is illegal insider trading. Choice C (selective disclosure to favored clients) also violates the Standard and the duty of fair dealing.",
  },

  // Regression & Machine Learning
  {
    id: "cfa2-ml-q1", examSlug: "cfa-l2", topicId: "quant-ml", topicName: "Regression & Machine Learning", difficulty: 2,
    stem: "A regression has a highly significant F-statistic but none of its individual coefficients are significant. This pattern indicates:",
    choices: ["Heteroskedasticity", "Serial correlation", "Multicollinearity"],
    answerIndex: 2,
    explanation: "The classic signature of multicollinearity is a model that works overall (significant F) while individual t-tests are insignificant because correlated regressors inflate the coefficient standard errors. Heteroskedasticity (A) and serial correlation (B) distort standard errors but don't produce this specific F-versus-t contradiction. The fix is to drop a redundant variable.",
  },
  {
    id: "cfa2-ml-q2", examSlug: "cfa-l2", topicId: "quant-ml", topicName: "Regression & Machine Learning", difficulty: 2,
    stem: "Which test is used to detect heteroskedasticity in a regression?",
    choices: ["Durbin-Watson test", "Breusch-Pagan test", "Dickey-Fuller test"],
    answerIndex: 1,
    explanation: "The Breusch-Pagan test detects heteroskedasticity (non-constant error variance). Durbin-Watson (A) tests for serial correlation. Dickey-Fuller (C) tests for a unit root (non-stationarity) in time series. Heteroskedasticity leaves coefficients unbiased but makes standard errors unreliable, so it's corrected with robust standard errors.",
  },
  {
    id: "cfa2-ml-q3", examSlug: "cfa-l2", topicId: "quant-ml", topicName: "Regression & Machine Learning", difficulty: 1,
    stem: "Why should adjusted R² rather than R² be used to compare regressions with different numbers of independent variables?",
    choices: ["R² always increases when variables are added", "Adjusted R² is always higher", "R² ignores the intercept"],
    answerIndex: 0,
    explanation: "R² never decreases as you add regressors, so it rewards complexity for its own sake. Adjusted R² penalizes additional variables and can fall when a new variable adds little, making it the fair basis for comparison. Choice B is false — adjusted R² is always ≤ R². Choice C is unrelated to the issue.",
  },
  {
    id: "cfa2-ml-q4", examSlug: "cfa-l2", topicId: "quant-ml", topicName: "Regression & Machine Learning", difficulty: 2,
    stem: "A machine-learning model fits the training data almost perfectly but performs poorly on new data. This is:",
    choices: ["Underfitting", "Overfitting", "Regularization"],
    answerIndex: 1,
    explanation: "Overfitting is great in-sample fit with poor out-of-sample performance — the model has learned noise rather than signal. Underfitting (A) is the opposite: a too-simple model that fits poorly everywhere. Regularization (C) is a TECHNIQUE (e.g., LASSO) used to REDUCE overfitting, not the problem itself. A validation set is used to detect overfitting.",
  },
  {
    id: "cfa2-ml-q5", examSlug: "cfa-l2", topicId: "quant-ml", topicName: "Regression & Machine Learning", difficulty: 1,
    stem: "Clustering unlabeled data into groups based on similarity is an example of:",
    choices: ["Supervised learning", "Unsupervised learning", "Reinforcement learning"],
    answerIndex: 1,
    explanation: "Clustering finds structure in data that has no labeled target, which defines unsupervised learning. Supervised learning (A) requires labeled outcomes to predict. Reinforcement learning (C) trains an agent through rewards from interacting with an environment — not relevant to grouping static unlabeled data.",
  },

  // Intercorporate Investments
  {
    id: "cfa2-ic-q1", examSlug: "cfa-l2", topicId: "fra-combos", topicName: "Intercorporate Investments", difficulty: 2,
    stem: "An investor owns 30% of a company and exercises significant influence. Which accounting method applies?",
    choices: ["Fair value through profit or loss", "The equity method", "Full consolidation"],
    answerIndex: 1,
    explanation: "Ownership of roughly 20–50% with significant influence triggers the equity method: the investment is carried at cost and adjusted for the investor's share of earnings and dividends. Fair value (A) applies to passive stakes below significant influence. Consolidation (C) applies only with control, typically above 50% ownership.",
  },
  {
    id: "cfa2-ic-q2", examSlug: "cfa-l2", topicId: "fra-combos", topicName: "Intercorporate Investments", difficulty: 2,
    stem: "Under the equity method, an investor buys 25% of a firm for $400. The investee earns $120 and pays $40 in dividends. What is the carrying value at year-end?",
    choices: ["$410", "$420", "$430"],
    answerIndex: 1,
    explanation: "Share of earnings: 25% × $120 = +$30. Share of dividends: 25% × $40 = −$10. Carrying value = $400 + $30 − $10 = $420. Earnings raise the investment account; dividends reduce it as a return of investment. Choice C ($430) forgets to subtract the dividends; choice A ($410) mis-scales the earnings share.",
  },
  {
    id: "cfa2-ic-q3", examSlug: "cfa-l2", topicId: "fra-combos", topicName: "Intercorporate Investments", difficulty: 1,
    stem: "When a parent consolidates a 70%-owned subsidiary, the 30% held by outside shareholders is reported as:",
    choices: ["Goodwill", "Non-controlling interest", "An equity-method investment"],
    answerIndex: 1,
    explanation: "Consolidation combines 100% of the subsidiary's assets and liabilities; the portion not owned by the parent (30% here) is shown as non-controlling interest within equity. Goodwill (A) is the excess of purchase price over fair value of net identifiable assets. An equity-method investment (C) would apply only to a non-controlled significant-influence stake, not a consolidated subsidiary.",
  },
  {
    id: "cfa2-ic-q4", examSlug: "cfa-l2", topicId: "fra-combos", topicName: "Intercorporate Investments", difficulty: 2,
    stem: "An acquirer pays $900 for a company whose net identifiable assets have a fair value of $700. How much goodwill is recognized?",
    choices: ["$0", "$200", "$700"],
    answerIndex: 1,
    explanation: "Goodwill = purchase price − fair value of net identifiable assets = $900 − $700 = $200. This goodwill is not amortized; it remains on the balance sheet subject to annual impairment testing. Choice A would apply only if price equaled fair value; choice C confuses goodwill with the net identifiable assets themselves.",
  },
  {
    id: "cfa2-ic-q5", examSlug: "cfa-l2", topicId: "fra-combos", topicName: "Intercorporate Investments", difficulty: 3,
    stem: "Compared with consolidating the same subsidiary, an equity-method investor will report:",
    choices: ["Higher total assets and revenue", "The same net income but lower revenue and assets", "Lower net income"],
    answerIndex: 1,
    explanation: "Both methods produce the same net income (the equity method captures the investor's share of earnings on one line), but the equity method keeps the investee's revenue, assets, and debt OFF the investor's statements. So revenue and assets are lower than under consolidation while net income matches — a frequent exam comparison that boosts equity-method margin and return ratios.",
  },

  // Term Structure & Bond Valuation
  {
    id: "cfa2-ts-q1", examSlug: "cfa-l2", topicId: "fi-term", topicName: "Term Structure & Bond Valuation", difficulty: 2,
    stem: "Arbitrage-free valuation of a bond requires discounting each cash flow at:",
    choices: ["The bond's yield to maturity", "Its maturity-matched spot rate", "The current short-term rate"],
    answerIndex: 1,
    explanation: "Arbitrage-free valuation discounts each cash flow at the spot rate corresponding to its timing, preventing strip/reconstitution arbitrage. Using a single yield to maturity (A) for all cash flows is an approximation that can differ from the no-arbitrage price. The current short rate (C) applies only to the nearest cash flow, not all of them.",
  },
  {
    id: "cfa2-ts-q2", examSlug: "cfa-l2", topicId: "fi-term", topicName: "Term Structure & Bond Valuation", difficulty: 3,
    stem: "The one-year spot rate is 2% and the two-year spot rate is 3%. The implied one-year forward rate one year from now is closest to:",
    choices: ["1.0%", "4.0%", "5.0%"],
    answerIndex: 1,
    explanation: "No-arbitrage: (1.02)(1 + f) = (1.03)² = 1.0609, so 1 + f = 1.0609 ÷ 1.02 ≈ 1.0401, giving f ≈ 4.0%. With an upward-sloping spot curve the forward rate lies above both spot rates. Choice A is below the spot rates (inconsistent with an upward curve); choice C overshoots.",
  },
  {
    id: "cfa2-ts-q3", examSlug: "cfa-l2", topicId: "fi-term", topicName: "Term Structure & Bond Valuation", difficulty: 2,
    stem: "Why are bonds with embedded options valued using a binomial interest-rate tree rather than a single spot curve?",
    choices: ["Their cash flows depend on the path of future rates", "They have no coupons", "Spot rates do not apply to corporates"],
    answerIndex: 0,
    explanation: "A call or put feature means the bond's future cash flows depend on whether rates make exercise advantageous, so valuation must model the path of rates — a binomial tree does this via backward induction. The bonds do have coupons (B is false), and spot rates apply to all issuers (C is false); the issue is path dependence from optionality.",
  },
  {
    id: "cfa2-ts-q4", examSlug: "cfa-l2", topicId: "fi-term", topicName: "Term Structure & Bond Valuation", difficulty: 3,
    stem: "For a callable bond, the option-adjusted spread (OAS) is generally:",
    choices: ["Higher than its Z-spread", "Lower than its Z-spread", "Equal to its Z-spread"],
    answerIndex: 1,
    explanation: "The Z-spread ignores optionality, while the OAS removes the value of the embedded call (which benefits the issuer and costs the holder). Stripping out that option cost leaves a smaller spread, so a callable bond's OAS is below its Z-spread. For an option-free bond the two are equal; for a putable bond the OAS exceeds the Z-spread.",
  },
  {
    id: "cfa2-ts-q5", examSlug: "cfa-l2", topicId: "fi-term", topicName: "Term Structure & Bond Valuation", difficulty: 2,
    stem: "An increase in assumed interest-rate volatility has what effect on the value of a callable bond?",
    choices: ["Increases it", "Decreases it", "No effect"],
    answerIndex: 1,
    explanation: "Higher volatility raises the value of the embedded option. Because a call benefits the ISSUER, a more valuable call reduces the bond's value to the holder. (For a putable bond, higher volatility would RAISE the value because the put benefits the holder.) The bond's value equals the option-free value minus the call value.",
  },
];

export const cfaL2Content: ExamContent = {
  examSlug: "cfa-l2",
  chapters,
  questions,
};
