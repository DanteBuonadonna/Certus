// ============================================================
// Certus — CFA Level II Financial Statement Analysis readings
//
// WHY THIS FILE EXISTS: a concept audit found the Level II FRA chapters
// covered the equity method, acquisition accounting, pensions and the
// current-rate/temporal distinction — but three areas returned ZERO
// matches: variable interest entities and special purpose entities,
// financial institution analysis (CAMELS), and quality of earnings.
// Joint ventures had two mentions and defined benefit plans five.
//
// FRA is the last of the ten Level II topics to reach its 236 target.
//
// Every number in every worked example was computed in Python first.
// The goodwill example is the internal check: full goodwill of $5.0m
// less partial goodwill of $4.0m equals $1.0m, which is exactly the
// non-controlling interest's 20% share of the $5.0m total — the two
// methods differ by precisely the NCI's claim on it and nothing else.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const fraChaptersL2: Chapter[] = [
  // ----------------------------------------------------------
  {
    id: "cfa-l2-fra-intercorporate",
    examSlug: "cfa-l2",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    title: "Intercorporate Investments, Consolidation, and Special Purpose Entities",
    readingMinutes: 22,
    summary:
      "Choosing the accounting method from the degree of influence, the two goodwill approaches, and the structures designed to keep debt off the balance sheet.",
    intro:
      "How a company accounts for an investment in another company depends on how much influence it has, and the same economic position can produce dramatically different financial statements under different classifications. This reading works through the thresholds, the mechanics of each method, and then the structures built specifically to avoid consolidation — which is where the analytical work actually lies.",
    sections: [
      {
        heading: "Influence determines method",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "The classification thresholds",
              headers: ["Influence", "Typical ownership", "Method"],
              rows: [
                ["No significant influence", "Under 20%", "Fair value through profit or loss or OCI"],
                ["Significant influence", "20% to 50%", "Equity method"],
                ["Control", "Over 50%", "Consolidation"],
                ["Joint control", "Shared by agreement", "Equity method for a joint venture"],
              ],
            },
          },
          {
            kind: "p",
            text: "The percentages are presumptions, not rules. A 15% holder with a board seat and a technology-sharing agreement may have significant influence; a 30% holder in a company controlled by a family bloc may have none. Substance governs, and an exam vignette describing board representation or contractual rights is signalling that the presumption should be overridden.",
          },
          {
            kind: "callout",
            label: "Why the classification matters so much",
            body: "Consolidation brings 100% of the subsidiary's revenue, assets and DEBT onto the parent's statements. The equity method reports the same economic interest as a single line. Net income is nearly identical under both; leverage ratios, margins and asset turnover are not. A company near the control threshold has a real incentive to stay below it.",
          },
        ],
      },
      {
        heading: "The equity method",
        blocks: [
          {
            kind: "p",
            text: "Under the equity method the investment is recorded at cost, then increased by the investor's share of the investee's net income and decreased by its share of dividends received. Dividends are a return of the investment, not income — recognising them as income would double-count.",
          },
          {
            kind: "example",
            example: {
              title: "Carrying value under the equity method",
              prompt:
                "An investor buys 30% of a company for $21,000,000. The investee earns $8,400,000 and pays $2,000,000 in dividends. What is the year-end carrying value?",
              steps: [
                "Share of income: 30% × $8,400,000 = $2,520,000.",
                "Share of dividends: 30% × $2,000,000 = $600,000.",
                "Carrying value: $21,000,000 + $2,520,000 − $600,000 = $22,920,000.",
              ],
              answer:
                "The carrying value is $22,920,000. Income raises it, dividends reduce it, and the difference between the two is the investee's retained earnings on the investor's behalf.",
            },
          },
          {
            kind: "p",
            text: "When the purchase price exceeds the investor's share of the investee's book value, that excess must be allocated. Any portion attributable to undervalued depreciable assets is amortised against equity income; the remainder is treated as goodwill and is not amortised.",
          },
          {
            kind: "example",
            example: {
              title: "Allocating the excess purchase price",
              prompt:
                "Continuing the example: the investee's net book value is $58,000,000, and $6,000,000 of the excess relates to PPE undervalued on the investee's books with a 12-year remaining life. Compute goodwill and the adjusted equity income.",
              steps: [
                "Share of book value: 30% × $58,000,000 = $17,400,000.",
                "Excess purchase price: $21,000,000 − $17,400,000 = $3,600,000.",
                "Attributable to PPE: 30% × $6,000,000 = $1,800,000.",
                "Goodwill: $3,600,000 − $1,800,000 = $1,800,000.",
                "Annual amortisation: $1,800,000 ÷ 12 = $150,000.",
                "Adjusted equity income: $2,520,000 − $150,000 = $2,370,000.",
              ],
              answer:
                "Goodwill is $1,800,000 and adjusted equity income $2,370,000. The amortisation reduces reported income every year for twelve years, which is why an analyst comparing two investors with identical stakes must check whether the excess was allocated.",
            },
          },
          {
            kind: "p",
            text: "The equity method carries a genuine analytical hazard: the investee's debt never appears on the investor's balance sheet. A company with substantial equity-method investees can look far less levered than its economic position warrants, and adjusting for the proportionate share of investee debt is a standard analyst correction.",
          },
        ],
      },
      {
        heading: "Consolidation and the two goodwill methods",
        blocks: [
          {
            kind: "p",
            text: "The acquisition method requires the acquirer to record the acquired assets and liabilities at fair value, recognise any non-controlling interest, and record goodwill as the residual. Two approaches to measuring goodwill exist, and they differ only in how the NCI is valued.",
          },
          {
            kind: "formula",
            formula: {
              label: "Full and partial goodwill",
              expr: "full goodwill = fair value of the whole entity − fair value of net identifiable assets;  partial goodwill = consideration paid − acquirer's share of net identifiable assets",
              note: "IFRS permits both; US GAAP requires full goodwill. The difference is exactly the NCI's share of goodwill.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Full versus partial goodwill",
              prompt:
                "An acquirer buys 80% of a subsidiary for $76,000,000. The fair value of the subsidiary's net identifiable assets is $90,000,000. Compute goodwill and NCI under both methods.",
              steps: [
                "Implied total fair value: $76,000,000 ÷ 0.80 = $95,000,000.",
                "Full goodwill: $95,000,000 − $90,000,000 = $5,000,000; NCI = 20% × $95,000,000 = $19,000,000.",
                "Partial goodwill: $76,000,000 − (80% × $90,000,000) = $76,000,000 − $72,000,000 = $4,000,000.",
                "Partial NCI: 20% × $90,000,000 = $18,000,000.",
              ],
              answer:
                "Full goodwill is $5,000,000 with NCI of $19,000,000; partial goodwill is $4,000,000 with NCI of $18,000,000. The $1,000,000 difference in each is the NCI's 20% share of the $5,000,000 total goodwill — the two methods differ by exactly that and nothing else.",
            },
          },
          {
            kind: "p",
            text: "Full goodwill produces higher total assets and higher equity, so it lowers return on assets and return on equity relative to partial goodwill. Net income is unaffected. That combination — same income, different denominators — is the point most often tested.",
          },
          {
            kind: "p",
            text: "Goodwill is not amortised but is tested for impairment. An impairment charge is non-cash, but it is a real signal: it records that the price paid exceeded what the acquired business proved to be worth. A pattern of repeated impairments is evidence about management's acquisition discipline rather than an accounting artefact to be added back.",
          },
        ],
      },
      {
        heading: "Comparing the methods",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "The same economic interest, three presentations",
              headers: ["", "Equity method", "Consolidation"],
              rows: [
                ["Revenue", "Not included", "100% included"],
                ["Assets", "One line", "100% included"],
                ["Debt", "Not shown", "100% included"],
                ["Net income", "Share, one line", "100% less NCI share"],
                ["Net profit margin", "Higher", "Lower"],
                ["Leverage ratios", "Lower", "Higher"],
                ["Return on equity", "Broadly similar", "Broadly similar"],
              ],
            },
          },
          {
            kind: "p",
            text: "Net income and equity attributable to the parent are broadly the same either way, which is why ROE is not much affected. Everything built on revenue, assets or debt changes substantially. An analyst comparing two companies where one consolidates and the other uses the equity method is comparing incomparable ratios unless an adjustment is made.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "The same 40% economic interest presented two ways. Only consolidation brings the investee's debt onto the balance sheet.",
              alt: "Two stacked bars comparing balance sheet presentation under the equity method and consolidation.",
              svg: `<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img">
  <text x="40" y="24" font-size="11" fill="var(--text-muted)">Equity method</text>
  <rect x="40" y="34" width="130" height="30" rx="4" fill="var(--primary)" opacity="0.8"/>
  <text x="52" y="54" font-size="10" fill="var(--bg-card)">one line asset</text>
  <text x="250" y="24" font-size="11" fill="var(--text-muted)">Consolidation</text>
  <rect x="250" y="34" width="170" height="30" rx="4" fill="var(--primary)" opacity="0.8"/>
  <text x="262" y="54" font-size="10" fill="var(--bg-card)">100% of assets</text>
  <rect x="250" y="72" width="120" height="26" rx="4" fill="var(--ats-red)" opacity="0.7"/>
  <text x="262" y="90" font-size="10" fill="var(--bg-card)">100% of debt</text>
  <rect x="250" y="106" width="60" height="24" rx="4" fill="var(--text-muted)" opacity="0.5"/>
  <text x="258" y="122" font-size="10" fill="var(--bg-card)">NCI</text>
  <text x="40" y="90" font-size="10" fill="var(--ats-red)">investee debt invisible</text>
  <text x="40" y="150" font-size="10" fill="var(--text-muted)">same economic interest, very different leverage ratios</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Special purpose and variable interest entities",
        blocks: [
          {
            kind: "p",
            text: "A special purpose entity is a legal structure created for a narrow purpose — securitising receivables, holding a leased asset, financing a project. Many are entirely legitimate. The analytical concern is the subset created specifically so that assets and debt sit outside the sponsor's consolidated statements while the sponsor retains the economic risk.",
          },
          {
            kind: "p",
            text: "Historically, consolidation turned on voting control, so an entity could be kept off balance sheet by ensuring a nominal third party held the votes while the sponsor held the risk. Enron used exactly this. Accounting standards responded by shifting the test away from votes.",
          },
          {
            kind: "p",
            text: "Under US GAAP, the primary beneficiary of a variable interest entity must consolidate it. The primary beneficiary is the party with the power to direct the activities that most significantly affect economic performance AND the obligation to absorb losses or right to receive benefits that could be significant. IFRS reaches a similar result through a single control model based on power, exposure to variable returns, and the ability to use that power to affect them.",
          },
          {
            kind: "bullets",
            items: [
              "Look for guarantees, liquidity facilities or credit support the sponsor has provided to the entity.",
              "Check whether the sponsor absorbs first losses through a retained residual interest.",
              "Ask who makes the decisions that matter, regardless of who holds the equity votes.",
              "Read the commitments and contingencies note, where these arrangements are usually disclosed.",
              "Treat off-balance-sheet debt the sponsor is economically responsible for as if it were on balance sheet.",
            ],
          },
          {
            kind: "callout",
            label: "The analyst's adjustment",
            body: "Where the sponsor bears the risk, add the entity's debt back to the sponsor's balance sheet and recompute leverage. If a securitisation is genuinely a sale with no recourse, leave it out. The question is always whether risk was actually transferred or merely relocated on paper.",
          },
        ],
      },
      {
        heading: "Joint ventures and other structures",
        blocks: [
          {
            kind: "p",
            text: "A joint venture involves joint control by agreement and is accounted for under the equity method. Joint operations, where parties have direct rights to assets and obligations for liabilities, are instead accounted for by recognising the party's share of each item. Distinguishing the two turns on whether the arrangement is structured through a separate vehicle and what rights the parties hold.",
          },
          {
            kind: "p",
            text: "Proportionate consolidation — including the investor's percentage share of each line — is no longer permitted for joint ventures under either IFRS or US GAAP, though analysts frequently perform it informally as an adjustment because it gives a more faithful picture of the economics for a company operating substantially through joint ventures.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Significant influence", def: "The ability to participate in policy decisions, presumed at 20% to 50% ownership." },
      { term: "Equity method", def: "Cost adjusted for the share of investee income and dividends, reported as one line." },
      { term: "Excess purchase price", def: "Consideration above the share of book value, allocated to assets and then goodwill." },
      { term: "Full goodwill", def: "Total entity fair value less net identifiable assets; required under US GAAP." },
      { term: "Partial goodwill", def: "Consideration less the acquirer's share of net identifiable assets; permitted under IFRS." },
      { term: "Non-controlling interest", def: "The portion of a consolidated subsidiary not owned by the parent." },
      { term: "Variable interest entity", def: "An entity consolidated by its primary beneficiary rather than by a voting majority." },
      { term: "Primary beneficiary", def: "The party with power over key activities and significant exposure to losses or benefits." },
      { term: "Joint venture", def: "An arrangement under joint control, accounted for by the equity method." },
    ],
    takeaways: [
      "Ownership percentages are presumptions; substance and contractual rights override them.",
      "Consolidation brings 100% of the subsidiary's debt onto the balance sheet; the equity method hides it.",
      "Net income is broadly the same under both methods — margins, turnover and leverage are not.",
      "Full and partial goodwill differ by exactly the NCI's share of goodwill.",
      "Full goodwill raises assets and equity, so it lowers ROA and ROE while leaving income unchanged.",
      "The VIE test turns on power and exposure to losses, not on who holds the votes.",
      "Add back off-balance-sheet debt the sponsor is economically responsible for and recompute leverage.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-fra-pensions-fx-quality",
    examSlug: "cfa-l2",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    title: "Pensions, Currency Translation, and Earnings Quality",
    readingMinutes: 23,
    summary:
      "Funded status and where pension cost is reported, the two translation methods and their exposure, analysing a financial institution, and detecting earnings that will not repeat.",
    intro:
      "Three areas where reported numbers diverge most from economic reality, plus the framework for spotting it. Pension accounting spreads a volatile obligation across two statements; currency translation can produce gains from a falling currency; and earnings quality analysis is what connects the mechanics to the investment conclusion.",
    sections: [
      {
        heading: "Defined benefit obligations and funded status",
        blocks: [
          {
            kind: "p",
            text: "A defined contribution plan creates no ongoing obligation — the employer pays a contribution and the expense equals that contribution. A defined benefit plan promises a future benefit, and the employer bears investment and actuarial risk. Everything difficult in pension accounting follows from that.",
          },
          {
            kind: "formula",
            formula: {
              label: "Funded status",
              expr: "funded status = fair value of plan assets − present value of the defined benefit obligation",
              note: "A negative figure is a net pension liability on the balance sheet; a positive figure is an asset, subject to a ceiling test.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Rolling forward the obligation and the assets",
              prompt:
                "A plan opens with a $640m obligation and $580m of assets. Service cost is $52m, the discount rate 4.5%, actual return on assets $46m, contributions $60m and benefits paid $38m. Find the closing funded status.",
              steps: [
                "Interest cost: $640m × 4.5% = $28.8m.",
                "Closing obligation: $640m + $52m + $28.8m − $38m = $682.8m.",
                "Closing assets: $580m + $46m + $60m − $38m = $648m.",
                "Funded status: $648m − $682.8m = −$34.8m.",
              ],
              answer:
                "The plan closes $34.8m underfunded, reported as a net pension liability. Note that benefits paid reduce both sides equally and therefore do not change the funded status at all.",
            },
          },
          {
            kind: "p",
            text: "Under IFRS, periodic pension cost in profit or loss is service cost plus net interest on the net pension liability, where net interest uses the discount rate. Remeasurements — actuarial gains and losses and the difference between actual and discount-rate return on assets — go to OCI and are never recycled to profit or loss.",
          },
          {
            kind: "example",
            example: {
              title: "Splitting the cost between P&L and OCI",
              prompt:
                "Using the same figures, compute the IFRS profit-and-loss expense and the remeasurement to OCI.",
              steps: [
                "Net interest: 4.5% × opening funded status of ($580m − $640m) = 4.5% × −$60m = −$2.7m.",
                "P&L expense: $52m service cost − $2.7m = $49.3m.",
                "Return implied by the discount rate: $580m × 4.5% = $26.1m.",
                "Remeasurement to OCI: actual return $46m − $26.1m = $19.9m gain.",
              ],
              answer:
                "The profit and loss expense is $49.3m and a $19.9m gain goes to OCI. Reported operating earnings therefore reflect only part of the year's pension experience.",
            },
          },
          {
            kind: "p",
            text: "US GAAP differs: it retains an expected return on plan assets rather than using the discount rate, and it permits amortisation of actuarial gains and losses into profit or loss through the corridor approach. That gives management two levers IFRS does not — the expected return assumption and the timing of recognition — both of which flatter reported income when set aggressively.",
          },
          {
            kind: "callout",
            label: "The assumptions to interrogate",
            body: "A HIGHER discount rate lowers the obligation and lowers service cost, flattering both the balance sheet and income. A higher expected return on assets lowers US GAAP pension expense directly. A lower assumed compensation growth rate lowers the obligation. All three are management estimates within a permitted range, and comparing them across peers is a standard earnings-quality check.",
          },
        ],
      },
      {
        heading: "Currency translation: two methods, two exposures",
        blocks: [
          {
            kind: "p",
            text: "The choice of method follows from the functional currency — the currency of the primary economic environment in which the subsidiary operates. If the functional currency is the local currency, use the current rate method and translate. If it is the parent's currency, use the temporal method and remeasure.",
          },
          {
            kind: "table",
            table: {
              caption: "How each method translates",
              headers: ["Item", "Current rate", "Temporal"],
              rows: [
                ["Monetary assets and liabilities", "Current rate", "Current rate"],
                ["Non-monetary at cost", "Current rate", "Historical rate"],
                ["Equity", "Historical rate", "Historical rate"],
                ["Revenue and most expenses", "Average rate", "Average rate"],
                ["Cost of sales and depreciation", "Average rate", "Historical rate"],
                ["Gain or loss goes to", "OCI as a translation adjustment", "Net income"],
              ],
            },
          },
          {
            kind: "p",
            text: "The exposure differs fundamentally between the two, and this is the point exam questions target. Under the current rate method the exposure is the subsidiary's NET ASSET position. Under the temporal method it is the NET MONETARY position — and most subsidiaries hold net monetary LIABILITIES.",
          },
          {
            kind: "example",
            example: {
              title: "Opposite signs from the same currency move",
              prompt:
                "A subsidiary has net assets of 240m local currency and net monetary liabilities of 90m local. The local currency falls from 1.15 to 1.08 against the parent's currency. What happens under each method?",
              steps: [
                "Current rate method: 240m × (1.08 − 1.15) = −$16.8m, a negative translation adjustment in OCI.",
                "Temporal method: net monetary liabilities of 90m become cheaper to settle: 90m × (1.15 − 1.08) = +$6.3m, a remeasurement GAIN in net income.",
              ],
              answer:
                "The same depreciation produces a $16.8m negative adjustment to equity under the current rate method and a $6.3m gain in net income under the temporal method. A depreciating local currency commonly produces a temporal-method gain, which surprises candidates expecting a loss.",
            },
          },
          {
            kind: "p",
            text: "Ratio effects follow mechanically. Pure balance sheet ratios such as the current ratio are preserved under the current rate method, because both numerator and denominator are translated at the same rate. The temporal method distorts them, because different lines use different rates. That preservation property is worth remembering — questions frequently ask which ratios survive translation unchanged.",
          },
          {
            kind: "p",
            text: "Hyperinflation is handled differently by the two regimes. IFRS restates the local statements for inflation first and then translates at the current rate. US GAAP simply requires the temporal method, with no restatement. A cumulative inflation rate approaching 100% over three years is the standard threshold.",
          },
        ],
      },
      {
        heading: "Analysing a financial institution",
        blocks: [
          {
            kind: "p",
            text: "Conventional ratio analysis does not work on a bank. Leverage is intrinsic to the business model rather than a choice; inventory turnover is meaningless; and the largest asset is a loan book whose value depends on judgements about future losses. The CAMELS framework is the standard alternative.",
          },
          {
            kind: "bullets",
            items: [
              "Capital adequacy: common equity tier 1 relative to risk-weighted assets, the primary loss-absorbing buffer.",
              "Asset quality: non-performing loans, provisioning coverage, and concentration by sector and borrower.",
              "Management: governance quality, risk appetite, and the track record of prior credit decisions.",
              "Earnings: net interest margin, fee income mix, and the sustainability of the sources.",
              "Liquidity: the liquidity coverage ratio, the net stable funding ratio, and deposit stability.",
              "Sensitivity to market risk: exposure of both the banking and trading books to rate and price moves.",
            ],
          },
          {
            kind: "p",
            text: "The loan loss provision deserves specific attention because it is where discretion concentrates. Under-provisioning raises current reported income and defers the loss; over-provisioning creates a reserve to release in a weaker year. The expected credit loss models introduced under IFRS 9 and CECL require forward-looking provisioning, which brings losses forward relative to the old incurred-loss approach and makes provisions considerably more sensitive to the economic outlook.",
          },
          {
            kind: "p",
            text: "Solvency and liquidity are distinct failure modes and must be assessed separately. A bank whose assets exceed its liabilities can still fail if depositors withdraw faster than assets can be sold — which is why funding composition matters as much as capital ratios. Insurers require a different frame again, centred on reserve adequacy, underwriting discipline measured by the combined ratio, and the matching of asset duration to claim liabilities.",
          },
        ],
      },
      {
        heading: "Earnings quality",
        blocks: [
          {
            kind: "p",
            text: "High-quality earnings are sustainable and adequately backed by cash. Low-quality earnings may be entirely legal and still be a poor basis for forecasting, which is the distinction that matters for valuation. The point is not to detect fraud but to identify what will not repeat.",
          },
          {
            kind: "formula",
            formula: {
              label: "The accruals check",
              expr: "accruals = net income − cash flow from operations",
              note: "Large and growing positive accruals indicate income recognised ahead of cash. High-accrual firms have historically underperformed — the accruals anomaly.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Net income rising while operating cash flow falls — check receivables and revenue recognition.",
              "Receivables or inventory growing materially faster than revenue.",
              "Revenue recognised earlier through changed terms, bill-and-hold arrangements or channel stuffing.",
              "Capitalising costs that peers expense, which shifts expense out of the current period.",
              "Extending depreciable lives or raising salvage values to reduce annual depreciation.",
              "Repeated 'non-recurring' charges appearing every year.",
              "Gains from asset sales or pension assumption changes propping up operating results.",
              "One-off tax benefits presented without distinction from operating performance.",
            ],
          },
          {
            kind: "p",
            text: "Several accounting choices produce non-comparability without any intent to mislead. LIFO versus FIFO changes inventory and cost of sales. Capitalised development costs under IFRS versus expensing under US GAAP changes earnings, assets and both multiples built on them. Different depreciation methods change the timing of expense. Each requires restatement before a cross-border comparison means anything.",
          },
          {
            kind: "callout",
            label: "The behavioural warning signs",
            body: "Beyond the numbers: management compensation tied heavily to short-term EPS, an auditor change without clear explanation, unusually complex structures with no business purpose, a chief financial officer departing abruptly, and results that meet consensus by exactly one cent quarter after quarter. None proves anything on its own; together they justify a much closer look.",
          },
          {
            kind: "p",
            text: "The analyst's obligation here is more than diligence. Presenting a valuation built on earnings the analyst has reason to doubt, without disclosing that doubt, falls short of Standard V(A)'s reasonable basis requirement and Standard V(B)'s requirement to identify the limitations of the analysis.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Funded status", def: "Plan assets less the defined benefit obligation; negative means a net pension liability." },
      { term: "Service cost", def: "The present value of benefits earned by employees in the current period." },
      { term: "Net interest", def: "Under IFRS, the discount rate applied to the opening net pension liability or asset." },
      { term: "Remeasurement", def: "Actuarial gains and losses and asset return variance, taken to OCI under IFRS and not recycled." },
      { term: "Corridor approach", def: "The US GAAP method of amortising actuarial gains and losses into profit or loss over time." },
      { term: "Functional currency", def: "The currency of the primary economic environment, which determines the translation method." },
      { term: "Current rate method", def: "Translation with exposure equal to the subsidiary's net asset position; adjustment to OCI." },
      { term: "Temporal method", def: "Remeasurement with exposure equal to net monetary position; gain or loss to net income." },
      { term: "CAMELS", def: "Capital, asset quality, management, earnings, liquidity and sensitivity — the bank analysis framework." },
      { term: "Expected credit loss", def: "Forward-looking provisioning under IFRS 9 and CECL, replacing the incurred-loss model." },
      { term: "Accruals", def: "Net income less operating cash flow; large positive accruals signal lower earnings quality." },
    ],
    takeaways: [
      "Benefits paid reduce both plan assets and the obligation, leaving funded status unchanged.",
      "IFRS P&L pension cost is service cost plus net interest at the discount rate; remeasurements go to OCI permanently.",
      "A higher discount rate lowers the obligation and service cost — flattering both statements at once.",
      "Current rate exposure is net assets; temporal exposure is net monetary position, usually a net liability.",
      "A depreciating local currency commonly produces a temporal-method GAIN in net income.",
      "The current ratio survives current-rate translation unchanged; the temporal method distorts it.",
      "Banks require CAMELS, and the loan loss provision is where discretion concentrates.",
      "Accruals — net income less operating cash flow — are the single most useful earnings quality screen.",
    ],
  },
];

// Questions live in cfa-l2-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const fraQuestionsL2: Question[] = [];
