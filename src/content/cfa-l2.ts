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
];

export const cfaL2Content: ExamContent = {
  examSlug: "cfa-l2",
  chapters,
  questions,
};
