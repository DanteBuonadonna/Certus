// ============================================================
// Certus — CPA FAR (Financial Accounting & Reporting) textbook-depth content
// Deep, exam-focused readings + aligned questions for the FAR core section.
// Wired into cpaFarContent (cpa-far track) ahead of the lighter chapters.
// ============================================================

import { Chapter, Question } from "./types";

export const farDeepChapters: Chapter[] = [
  {
    id: "cpa-far-framework",
    examSlug: "cpa-far",
    topicId: "far",
    topicName: "Financial Accounting & Reporting",
    title: "The Conceptual Framework and the Four Financial Statements",
    readingMinutes: 60,
    summary:
      "The foundation of FAR — the objective and qualitative characteristics of financial reporting, accrual accounting and the accounting equation, adjusting entries, and how the income statement, balance sheet, statement of equity, and statement of cash flows fit together.",
    intro:
      "FAR is the largest and lowest-pass-rate CPA section, and almost everything in it rests on the CONCEPTUAL FRAMEWORK and the mechanics of the FOUR FINANCIAL STATEMENTS. This reading builds that foundation: why financial reporting exists and what makes information useful, the accrual basis and the accounting equation that keep the books in balance, the adjusting entries that align revenue and expense with the period they belong to, and how the four statements articulate with one another. Get this machinery automatic and the rest of FAR — revenue, leases, bonds, deferred taxes — becomes the application of these same rules.",
    sections: [
      {
        heading: "1. The conceptual framework",
        blocks: [
          { kind: "p", text: "The OBJECTIVE of general-purpose financial reporting is to provide information useful to investors, lenders, and creditors in making DECISIONS about providing resources to the entity. To be useful, information must have two FUNDAMENTAL qualitative characteristics: RELEVANCE (it can make a difference to a decision — having predictive value, confirmatory value, and materiality) and FAITHFUL REPRESENTATION (it is complete, neutral, and free from error). Four ENHANCING characteristics then improve usefulness: COMPARABILITY, VERIFIABILITY, TIMELINESS, and UNDERSTANDABILITY. The framework also defines the ELEMENTS of the statements — assets, liabilities, equity, revenues, expenses, gains, and losses — and the assumptions (economic entity, going concern, monetary unit, periodicity) underlying them." },
          { kind: "callout", label: "Fundamental vs enhancing", body: "FUNDAMENTAL characteristics (relevance, faithful representation) determine whether information is useful at all. ENHANCING characteristics (comparability, verifiability, timeliness, understandability) make useful information MORE useful — but can't rescue irrelevant or unfaithful information." },
        ],
      },
      {
        heading: "2. Accrual accounting and the accounting equation",
        blocks: [
          { kind: "p", text: "Financial statements use the ACCRUAL BASIS: revenue is recognized when EARNED and expenses when INCURRED, regardless of when cash changes hands (contrast the cash basis, which records only cash receipts and payments). The structural backbone is the ACCOUNTING EQUATION, which must always balance, and every transaction keeps it in balance through double-entry bookkeeping (equal debits and credits). Revenues increase equity; expenses decrease it; the difference, net income, flows into retained earnings." },
          { kind: "formula", formula: { label: "The accounting equation", expr: "Assets = Liabilities + Equity", note: "Every transaction affects at least two accounts and leaves the equation balanced. Equity = contributed capital + retained earnings (which grows with net income, shrinks with dividends)." } },
        ],
      },
      {
        heading: "3. Adjusting entries",
        blocks: [
          { kind: "p", text: "At period end, ADJUSTING ENTRIES align the records with the accrual basis before statements are prepared. There are two broad types. ACCRUALS record revenue earned or expense incurred that has NOT yet been recorded (e.g., interest earned but not received, wages owed but not paid). DEFERRALS adjust amounts already recorded as cash changed hands but not yet earned or used (e.g., recognizing the used portion of prepaid insurance, or the earned portion of unearned revenue). Every adjusting entry touches one income-statement account and one balance-sheet account, and never cash." },
          { kind: "example", example: { title: "An accrued-revenue adjusting entry", prompt: "On December 31, a firm has earned $4,000 of interest revenue that won't be collected in cash until January. What adjusting entry is required, and what is the effect?", steps: ["The revenue is EARNED in December, so accrual accounting recognizes it now — not when cash arrives.", "Debit Interest Receivable $4,000 (a new asset — cash owed to the firm).", "Credit Interest Revenue $4,000 (recognized in December's income).", "Effect: assets +$4,000 and equity (via revenue) +$4,000 — the equation stays balanced."], answer: "Dr Interest Receivable 4,000 / Cr Interest Revenue 4,000. The revenue is matched to the period it was earned, and cash is untouched until collection in January." } },
        ],
      },
      {
        heading: "4. The four financial statements",
        blocks: [
          { kind: "p", text: "Four statements present the results. The INCOME STATEMENT reports revenues minus expenses to arrive at net income for a period; a multi-step format separates gross profit, operating income, and non-operating items. The BALANCE SHEET (statement of financial position) presents assets, liabilities, and equity at a point in time, classified into current and non-current. The STATEMENT OF CHANGES IN EQUITY reconciles beginning to ending equity (net income in, dividends out, plus other comprehensive income and capital transactions). The STATEMENT OF CASH FLOWS explains the change in cash. The statements ARTICULATE: net income flows from the income statement into retained earnings on the balance sheet and is the starting point of the cash flow statement." },
          { kind: "table", table: { caption: "The four statements at a glance", headers: ["Statement", "Reports", "Period or point"], rows: [["Income statement", "Revenues − expenses = net income", "Period"], ["Balance sheet", "Assets = liabilities + equity", "Point in time"], ["Statement of equity", "Beginning → ending equity", "Period"], ["Statement of cash flows", "Change in cash (op/inv/fin)", "Period"]] } },
        ],
      },
      {
        heading: "5. The statement of cash flows",
        blocks: [
          { kind: "p", text: "The STATEMENT OF CASH FLOWS classifies cash movements into three activities. OPERATING covers the cash effects of the core business (selling goods/services, paying suppliers and employees). INVESTING covers buying and selling long-term assets and investments. FINANCING covers transactions with owners and lenders (issuing stock or debt, paying dividends, repaying loans). Operating cash flow can be presented two ways: the DIRECT method lists actual cash receipts and payments, while the INDIRECT method (far more common) starts with NET INCOME and adjusts for non-cash items (add back depreciation) and changes in working capital (an increase in receivables is subtracted, an increase in payables is added)." },
          { kind: "example", example: { title: "Indirect-method operating cash flow", prompt: "Net income is $50,000. Depreciation is $8,000. Accounts receivable rose $5,000 and accounts payable rose $3,000. What is operating cash flow?", steps: ["Start with net income: $50,000.", "Add back depreciation (non-cash expense): +$8,000.", "Subtract the increase in receivables (revenue not yet collected in cash): −$5,000.", "Add the increase in payables (expenses not yet paid in cash): +$3,000.", "Operating cash flow = 50,000 + 8,000 − 5,000 + 3,000 = $56,000."], answer: "$56,000. The indirect method converts accrual net income to cash by reversing non-cash items and working-capital timing differences." } },
          { kind: "p", text: "The chapter's throughline: financial reporting exists to produce decision-useful information (relevant and faithfully represented); the accrual basis and the always-balancing accounting equation govern how transactions are recorded; adjusting entries put revenue and expense in the right period; and the four statements articulate into a coherent picture, with the indirect-method cash flow statement bridging accrual net income back to cash. Over-learn the accounting equation, the accrual/deferral adjusting entries, and the indirect-method adjustments — they recur throughout FAR." },
        ],
      },
    ],
    keyTerms: [
      { term: "Objective of financial reporting", def: "Provide decision-useful information to investors, lenders, and creditors." },
      { term: "Relevance", def: "Fundamental characteristic: predictive value, confirmatory value, materiality." },
      { term: "Faithful representation", def: "Fundamental characteristic: complete, neutral, free from error." },
      { term: "Enhancing characteristics", def: "Comparability, verifiability, timeliness, understandability." },
      { term: "Accrual basis", def: "Recognize revenue when earned and expenses when incurred, regardless of cash timing." },
      { term: "Accounting equation", def: "Assets = Liabilities + Equity; kept in balance by double-entry bookkeeping." },
      { term: "Adjusting entries", def: "Period-end entries (accruals and deferrals) that align records to accrual accounting; never touch cash." },
      { term: "Income statement", def: "Revenues − expenses = net income for a period (multi-step separates operating items)." },
      { term: "Balance sheet", def: "Assets, liabilities, and equity at a point in time, classified current vs non-current." },
      { term: "Statement of cash flows", def: "Change in cash split into operating, investing, and financing activities." },
      { term: "Indirect method", def: "Operating cash flow = net income + non-cash items ± working-capital changes." },
      { term: "Articulation", def: "Net income flows to retained equity and starts the cash flow statement; the statements interlock." },
    ],
    takeaways: [
      "Financial reporting aims to provide decision-useful information; usefulness requires relevance and faithful representation, enhanced by comparability, verifiability, timeliness, and understandability.",
      "Accrual accounting recognizes revenue when earned and expenses when incurred; the accounting equation (Assets = Liabilities + Equity) always balances via double-entry.",
      "Adjusting entries (accruals and deferrals) align revenue and expense to the correct period and always pair one income-statement with one balance-sheet account — never cash.",
      "The four statements articulate: net income flows into retained earnings and starts the cash flow statement.",
      "The cash flow statement splits into operating, investing, and financing; the indirect method converts net income to operating cash by adding back non-cash items and adjusting working capital.",
      "An increase in receivables is subtracted and an increase in payables is added when computing indirect operating cash flow.",
    ],
  },

  {
    id: "cpa-far-rev-leases",
    examSlug: "cpa-far",
    topicId: "revenue-leases",
    topicName: "Financial Accounting & Reporting",
    title: "Revenue Recognition (ASC 606) and Leases (ASC 842)",
    readingMinutes: 58,
    summary:
      "Two of FAR's most-tested standards — the five-step revenue model of ASC 606 (from identifying the contract to recognizing revenue) and the lease accounting of ASC 842, including the lessee's right-of-use asset and lease liability and the finance-vs-operating distinction.",
    intro:
      "Revenue recognition and leases are two of the most heavily tested and recently overhauled areas of FAR. ASC 606 replaced dozens of industry rules with a single FIVE-STEP MODEL applied to every contract with a customer, and ASC 842 brought nearly all leases onto the lessee's balance sheet. Both reward a precise, sequential understanding: the five steps in order, and the lease classification criteria with their different expense patterns. This reading works through each with examples you can reproduce on the exam.",
    sections: [
      {
        heading: "1. The ASC 606 five-step model",
        blocks: [
          { kind: "p", text: "ASC 606 recognizes revenue to depict the transfer of goods or services in the amount the entity expects to be entitled to, through FIVE STEPS. (1) IDENTIFY THE CONTRACT with a customer (approved, with rights and payment terms identifiable and collection probable). (2) IDENTIFY THE PERFORMANCE OBLIGATIONS — the distinct goods or services promised. (3) DETERMINE THE TRANSACTION PRICE, including variable consideration and significant financing components. (4) ALLOCATE THE TRANSACTION PRICE to the performance obligations based on their relative STANDALONE SELLING PRICES. (5) RECOGNIZE REVENUE when (or as) each performance obligation is SATISFIED — at a POINT IN TIME (when control transfers) or OVER TIME (if the customer consumes the benefit as performed, the entity creates an asset the customer controls, or the asset has no alternative use and there's a right to payment)." },
          { kind: "formula", formula: { label: "The five steps", expr: "1) Contract → 2) Performance obligations → 3) Transaction price → 4) Allocate → 5) Recognize", note: "Allocation (step 4) uses relative standalone selling prices; recognition (step 5) is at a point in time or over time." } },
          { kind: "example", example: { title: "Allocating the transaction price", prompt: "A company sells a product bundled with two years of support for $1,000. Standalone prices are $900 (product) and $300 (support). How much revenue is allocated to the product, and when is it recognized?", steps: ["Total standalone value = $900 + $300 = $1,200.", "Product's relative share = $900 ÷ $1,200 = 75%.", "Allocation to product = 75% × $1,000 = $750; to support = $250.", "The $750 product revenue is recognized at the POINT IN TIME the product is delivered; the $250 support is recognized OVER the two-year service period."], answer: "$750 to the product (recognized on delivery) and $250 to support (recognized over two years), based on relative standalone selling prices — exactly steps 4 and 5 of the model." } },
        ],
      },
      {
        heading: "2. Lessee accounting under ASC 842",
        blocks: [
          { kind: "p", text: "ASC 842 requires a lessee to record almost EVERY lease on the balance sheet: a RIGHT-OF-USE (ROU) ASSET and a corresponding LEASE LIABILITY, both initially measured at the present value of the lease payments. The lease is then CLASSIFIED as finance or operating, which determines the expense PATTERN (not whether it's on the balance sheet — both are). A lease is a FINANCE lease if it meets ANY of five criteria: (1) ownership transfers at the end; (2) a purchase option the lessee is reasonably certain to exercise; (3) the lease term is a MAJOR PART of the asset's remaining economic life; (4) the present value of payments is SUBSTANTIALLY ALL of the asset's fair value; or (5) the asset is so SPECIALIZED it has no alternative use to the lessor. If none are met, it's an OPERATING lease." },
          { kind: "table", table: { caption: "Finance vs operating lease (lessee)", headers: ["Aspect", "Finance lease", "Operating lease"], rows: [["On balance sheet?", "Yes (ROU asset + liability)", "Yes (ROU asset + liability)"], ["Income statement", "Amortization + interest (separate)", "Single straight-line lease expense"], ["Expense pattern", "Front-loaded (more early)", "Even (straight-line)"], ["Cash flow classification", "Interest in operating, principal in financing", "Operating"]] } },
        ],
      },
      {
        heading: "3. Expense patterns and lessor accounting",
        blocks: [
          { kind: "p", text: "The classification matters because of the EXPENSE PATTERN. A FINANCE lease is treated like a financed purchase: the ROU asset is AMORTIZED (usually straight-line) and INTEREST accrues on the lease liability, so total expense is FRONT-LOADED (higher in early years when the liability balance is larger). An OPERATING lease produces a single, STRAIGHT-LINE lease expense each period, even though the underlying asset and liability still amortize on the balance sheet. On the LESSOR side, leases are classified as SALES-TYPE (control transfers — recognize a selling profit and a receivable), DIRECT FINANCING (similar, but profit is deferred), or OPERATING (the lessor keeps the asset, records it, depreciates it, and recognizes lease income over time)." },
          { kind: "example", example: { title: "Initial lessee measurement", prompt: "A company signs a 5-year lease with payments whose present value (at the appropriate discount rate) is $80,000. The lease term is a major part of the asset's life. How is it recorded at inception, and is it finance or operating?", steps: ["Because the lease term is a major part of the asset's economic life, criterion (3) is met → it's a FINANCE lease.", "At inception, record an ROU asset of $80,000 and a lease liability of $80,000 (the PV of payments).", "Over the lease, amortize the ROU asset and accrue interest on the liability — a front-loaded total expense."], answer: "Dr Right-of-Use Asset 80,000 / Cr Lease Liability 80,000, classified as a finance lease (term is a major part of the asset's life). Both finance and operating leases would book the ROU asset and liability; only the expense pattern differs." } },
          { kind: "p", text: "The chapter's core: ASC 606 recognizes revenue through five ordered steps — contract, performance obligations, transaction price, allocate by relative standalone price, recognize at a point in time or over time. ASC 842 puts essentially all leases on the lessee's balance sheet as an ROU asset and lease liability at the present value of payments, with finance leases (meeting any of the five criteria) producing front-loaded amortization-plus-interest expense and operating leases producing straight-line expense. Over-learn the five revenue steps and the five lease-classification criteria." },
        ],
      },
    ],
    keyTerms: [
      { term: "ASC 606 five-step model", def: "Contract → performance obligations → transaction price → allocate → recognize." },
      { term: "Performance obligation", def: "A distinct promised good or service in the contract." },
      { term: "Transaction price", def: "Consideration expected, including variable amounts and financing components." },
      { term: "Standalone selling price", def: "Basis for allocating the transaction price across obligations." },
      { term: "Point in time vs over time", def: "Recognize when control transfers, or as the obligation is satisfied over time." },
      { term: "Right-of-use (ROU) asset", def: "Lessee asset for the right to use the leased item; PV of lease payments at inception." },
      { term: "Lease liability", def: "Lessee obligation to make lease payments; PV of payments at inception." },
      { term: "Finance lease criteria", def: "Ownership transfer, purchase option, major part of life, PV ≥ substantially all FV, specialized asset (any one)." },
      { term: "Operating lease (lessee)", def: "On balance sheet, but a single straight-line lease expense." },
      { term: "Finance lease expense pattern", def: "Amortization + interest = front-loaded total expense." },
      { term: "Lessor classifications", def: "Sales-type, direct financing, or operating." },
    ],
    takeaways: [
      "ASC 606 recognizes revenue in five ordered steps: identify the contract, identify performance obligations, determine the transaction price, allocate by relative standalone selling price, and recognize when/as obligations are satisfied.",
      "Revenue is recognized at a point in time (when control transfers) or over time (when the customer consumes the benefit, the entity creates a customer-controlled asset, or the asset has no alternative use with a right to payment).",
      "Allocate the transaction price across obligations in proportion to their standalone selling prices.",
      "ASC 842 puts nearly all leases on the lessee's balance sheet as a right-of-use asset and lease liability at the present value of payments.",
      "A lease is a finance lease if it meets ANY of five criteria (ownership transfer, purchase option, major part of life, PV ≥ substantially all FV, specialized asset); otherwise it's operating.",
      "Finance leases produce front-loaded amortization-plus-interest expense; operating leases produce a single straight-line expense (both still on the balance sheet).",
    ],
  },

  {
    id: "cpa-far-liabilities-deep",
    examSlug: "cpa-far",
    topicId: "liabilities",
    topicName: "Financial Accounting & Reporting",
    title: "Liabilities: Bonds, Deferred Taxes, and Contingencies",
    readingMinutes: 60,
    summary:
      "The accounting for long-term obligations — bonds issued at a discount or premium and the effective-interest method, the temporary differences that create deferred tax assets and liabilities, and when a loss contingency must be accrued versus merely disclosed.",
    intro:
      "Liabilities are a deep, calculation-heavy slice of FAR. Three areas dominate: BONDS PAYABLE (and the discount/premium amortization that trips up candidates), DEFERRED TAXES (the temporary differences between book and tax accounting), and CONTINGENCIES (the probable/reasonably-possible/remote framework). Each rewards a clear rule plus the ability to run a quick calculation. This reading works through the effective-interest method, the direction of deferred tax assets versus liabilities, and the accrual threshold for contingent losses.",
    sections: [
      {
        heading: "1. Bonds payable: discount and premium",
        blocks: [
          { kind: "p", text: "A bond's STATED (coupon) rate is fixed, but it is priced to yield the MARKET rate at issuance. If the stated rate is BELOW the market rate, investors pay less than face — the bond is issued at a DISCOUNT. If the stated rate is ABOVE the market rate, investors pay more than face — a PREMIUM. The issuance proceeds equal the present value of the principal plus the present value of the interest payments, discounted at the MARKET rate. The discount or premium is then amortized over the bond's life so that, at maturity, the carrying value equals face value." },
          { kind: "formula", formula: { label: "Effective-interest method (each period)", expr: "Interest expense = Carrying value × Market rate     Cash paid = Face × Stated rate     Amortization = the difference", note: "For a discount, expense > cash, so the discount amortizes and carrying value RISES toward face. For a premium, expense < cash, so carrying value FALLS toward face." } },
          { kind: "example", example: { title: "Amortizing a bond discount", prompt: "A $100,000 bond with a 5% stated rate is issued to yield 6% market, for proceeds of $96,000. Using the effective-interest method, what is the first-period interest expense and the new carrying value? (annual interest)", steps: ["Interest expense = carrying value × market rate = $96,000 × 6% = $5,760.", "Cash paid = face × stated rate = $100,000 × 5% = $5,000.", "Discount amortized = $5,760 − $5,000 = $760.", "New carrying value = $96,000 + $760 = $96,760."], answer: "Interest expense $5,760; carrying value rises to $96,760. With a discount, expense exceeds the cash coupon and the carrying value climbs toward face value each period." } },
        ],
      },
      {
        heading: "2. Deferred taxes",
        blocks: [
          { kind: "p", text: "Book income (GAAP) and taxable income (the tax return) differ. TEMPORARY differences reverse over time and create DEFERRED taxes; PERMANENT differences (municipal bond interest, fines and penalties, certain meals) never reverse and create NO deferred taxes. A DEFERRED TAX LIABILITY (DTL) arises when book income exceeds taxable income now but will be taxed later — classically from using accelerated depreciation on the tax return (more tax depreciation now, less later). A DEFERRED TAX ASSET (DTA) arises when taxable income exceeds book income now, so taxes are prepaid and will benefit later — from accrued warranty expense, unearned revenue taxed when received, or net operating loss carryforwards. A DTA is reduced by a VALUATION ALLOWANCE if it is more likely than not that some won't be realized." },
          { kind: "example", example: { title: "A deferred tax liability from depreciation", prompt: "A firm records $10,000 of book depreciation but deducts $15,000 on its tax return this year. At a 21% tax rate, what deferred tax item arises?", steps: ["Tax depreciation ($15,000) exceeds book ($10,000) by $5,000, so taxable income is $5,000 LOWER than book income now.", "This difference reverses later (less tax depreciation in future years), so more tax will be owed then.", "Deferred tax LIABILITY = $5,000 × 21% = $1,050."], answer: "A $1,050 deferred tax liability. Taking more depreciation now defers tax to later periods, creating a DTL — the most common temporary difference tested." } },
        ],
      },
      {
        heading: "3. Contingencies",
        blocks: [
          { kind: "p", text: "A LOSS CONTINGENCY (pending litigation, warranty claims, guarantees) is accounted for by its likelihood. If a loss is PROBABLE and the amount is REASONABLY ESTIMABLE, the company ACCRUES it — recording a liability and an expense (if a range is estimable with no best estimate, accrue the low end under US GAAP). If the loss is only REASONABLY POSSIBLE, it is DISCLOSED in the notes but not accrued. If REMOTE, it is generally ignored. GAIN contingencies are NOT recognized until realized (conservatism) — they may be disclosed but never accrued as income." },
          { kind: "table", table: { caption: "Loss contingency treatment (US GAAP)", headers: ["Likelihood", "Estimable?", "Treatment"], rows: [["Probable", "Yes", "Accrue (liability + expense)"], ["Probable", "No", "Disclose only"], ["Reasonably possible", "—", "Disclose only"], ["Remote", "—", "Ignore (generally)"]] } },
          { kind: "p", text: "The chapter's core: bonds are issued at the present value of their cash flows at the market rate, with discounts/premiums amortized by the effective-interest method (expense = carrying value × market rate); temporary book-tax differences create deferred tax liabilities (book > taxable now, e.g., accelerated tax depreciation) or assets (taxable > book now, e.g., warranties, NOLs), while permanent differences create none; and loss contingencies are accrued only when probable and estimable, disclosed when reasonably possible, with gain contingencies never accrued. Over-learn the effective-interest formula and the DTA/DTL direction." },
        ],
      },
    ],
    keyTerms: [
      { term: "Stated vs market rate", def: "Coupon rate is fixed; the bond is priced to yield the market rate at issuance." },
      { term: "Bond discount", def: "Issued below face because the stated rate is below the market rate." },
      { term: "Bond premium", def: "Issued above face because the stated rate is above the market rate." },
      { term: "Effective-interest method", def: "Interest expense = carrying value × market rate; cash = face × stated; difference amortizes." },
      { term: "Discount amortization effect", def: "Expense > cash, so carrying value rises toward face over time." },
      { term: "Temporary difference", def: "Book-tax difference that reverses over time; creates deferred taxes." },
      { term: "Permanent difference", def: "Never reverses (muni interest, fines); creates no deferred taxes." },
      { term: "Deferred tax liability (DTL)", def: "Book income > taxable now (e.g., accelerated tax depreciation); tax owed later." },
      { term: "Deferred tax asset (DTA)", def: "Taxable income > book now (warranties, unearned revenue, NOLs); future benefit." },
      { term: "Valuation allowance", def: "Reduces a DTA if it's more likely than not part won't be realized." },
      { term: "Loss contingency", def: "Accrue if probable and estimable; disclose if reasonably possible; ignore if remote." },
      { term: "Gain contingency", def: "Not recognized until realized (conservatism); may be disclosed." },
    ],
    takeaways: [
      "Bonds are issued at the present value of their cash flows discounted at the market rate: below the stated rate → premium, above → discount.",
      "The effective-interest method sets interest expense = carrying value × market rate; the difference from the cash coupon amortizes the discount/premium.",
      "A discount amortizes upward (carrying value rises toward face); a premium amortizes downward.",
      "Temporary book-tax differences create deferred taxes; permanent differences (muni interest, fines) do not.",
      "A deferred tax liability arises when book income exceeds taxable income now (e.g., accelerated tax depreciation); a deferred tax asset when taxable exceeds book (warranties, unearned revenue, NOLs).",
      "Accrue a loss contingency only if probable AND estimable; disclose if reasonably possible; gain contingencies are never accrued until realized.",
    ],
  },

  {
    id: "cpa-far-govnfp-deep",
    examSlug: "cpa-far",
    topicId: "gov-nfp",
    topicName: "Financial Accounting & Reporting",
    title: "Governmental and Not-for-Profit Accounting",
    readingMinutes: 56,
    summary:
      "The specialized accounting FAR tests beyond for-profit GAAP — governmental fund accounting with its modified-accrual measurement and fund types, the dual government-wide statements, and not-for-profit reporting with its two net-asset classes and contribution rules.",
    intro:
      "FAR includes two specialized reporting frameworks that follow different rules from corporate GAAP: GOVERNMENTAL accounting (set by the GASB) and NOT-FOR-PROFIT accounting (set by the FASB). Governments use FUND accounting and a unique 'modified accrual' basis for their day-to-day funds, plus government-wide statements on the full accrual basis. Not-for-profits use full accrual but classify net assets and contributions by donor restriction. These topics have their own vocabulary, and the exam tests the measurement focus and the classification rules precisely.",
    sections: [
      {
        heading: "1. Governmental fund accounting",
        blocks: [
          { kind: "p", text: "Governments account through FUNDS — separate fiscal and accounting entities for specific activities. There are three categories. GOVERNMENTAL funds (general, special revenue, capital projects, debt service, permanent) account for tax-supported activities. PROPRIETARY funds (enterprise funds serving the public for a fee, and internal service funds serving other departments) operate like businesses. FIDUCIARY funds hold resources for others (pensions, custodial). The governmental funds use a distinctive MEASUREMENT FOCUS and basis of accounting that differs from the rest." },
          { kind: "callout", label: "Measurement focus", body: "GOVERNMENTAL funds: current financial resources + MODIFIED ACCRUAL (revenue when measurable AND available; expenditures when incurred). PROPRIETARY and FIDUCIARY funds: economic resources + FULL ACCRUAL, like a business." },
        ],
      },
      {
        heading: "2. Modified accrual and the dual statements",
        blocks: [
          { kind: "p", text: "Under MODIFIED ACCRUAL, governmental-fund revenue is recognized when it is both MEASURABLE and AVAILABLE — 'available' meaning collectible within the current period or soon enough after year-end (commonly within 60 days) to pay current liabilities. EXPENDITURES (not expenses) are recorded when the related liability is incurred. Governments also use BUDGETARY accounting and ENCUMBRANCES (reserving appropriations for purchase commitments). Crucially, government financial reports present TWO perspectives: the FUND financial statements (governmental funds on modified accrual) AND the GOVERNMENT-WIDE statements, which restate everything on the FULL ACCRUAL, economic-resources basis (capitalizing assets, recording long-term debt). Reconciliations bridge the two." },
        ],
      },
      {
        heading: "3. Not-for-profit accounting",
        blocks: [
          { kind: "p", text: "NOT-FOR-PROFIT organizations (charities, hospitals, universities) report under FASB standards on the full accrual basis, but they classify NET ASSETS into two categories: WITHOUT DONOR RESTRICTIONS and WITH DONOR RESTRICTIONS. Their financial statements are the statement of financial position, the statement of ACTIVITIES (changes in net assets), and the statement of cash flows (plus, for some, functional-expense reporting). CONTRIBUTIONS are recognized as revenue when received if UNCONDITIONAL — restricted contributions increase 'with donor restrictions' net assets and are released when the restriction is met. CONDITIONAL contributions (depending on a future event the donor can require return for) are NOT recognized until the condition is substantially met. Contributed services are recognized only if they create/enhance a non-financial asset or require specialized skills that would otherwise be purchased." },
          { kind: "example", example: { title: "Classifying a restricted gift", prompt: "A donor gives a university $1,000,000 that must be used to build a new lab. How is it recorded when received?", steps: ["The gift is unconditional (no future event could require return) but carries a purpose restriction.", "Recognize $1,000,000 of contribution revenue increasing NET ASSETS WITH DONOR RESTRICTIONS.", "When the funds are spent on the lab, the restriction is satisfied and the amount is RELEASED to net assets without donor restrictions."], answer: "Record $1,000,000 of revenue in net assets WITH donor restrictions, released to without-donor-restrictions as the lab is built. A conditional gift, by contrast, would not be recognized until the condition was met." } },
          { kind: "p", text: "The chapter's core: governments use fund accounting, with governmental funds on modified accrual (revenue when measurable and available; expenditures when incurred) and proprietary/fiduciary funds plus the government-wide statements on full accrual; not-for-profits use full accrual but split net assets into with- and without-donor-restrictions and recognize unconditional contributions as revenue when received. Over-learn the modified-accrual 'measurable and available' rule and the NFP net-asset classification." },
        ],
      },
    ],
    keyTerms: [
      { term: "Fund accounting", def: "Separate fiscal/accounting entities for specific government activities." },
      { term: "Governmental funds", def: "General, special revenue, capital projects, debt service, permanent; modified accrual." },
      { term: "Proprietary funds", def: "Enterprise and internal service funds; full accrual, business-like." },
      { term: "Fiduciary funds", def: "Resources held for others (pension, custodial); full accrual." },
      { term: "Modified accrual", def: "Revenue when measurable AND available; expenditures when incurred." },
      { term: "Available (60-day rule)", def: "Collectible within the period or soon enough after year-end to pay current liabilities." },
      { term: "Government-wide statements", def: "Full-accrual, economic-resources restatement of all activities." },
      { term: "Encumbrances", def: "Reserving appropriations for outstanding purchase commitments." },
      { term: "Net assets without/with donor restrictions", def: "The two NFP net-asset classes under FASB standards." },
      { term: "Unconditional contribution", def: "Recognized as revenue when received; restricted gifts increase 'with restrictions.'" },
      { term: "Conditional contribution", def: "Not recognized until the condition is substantially met." },
    ],
    takeaways: [
      "Governments use fund accounting: governmental, proprietary, and fiduciary fund categories.",
      "Governmental funds use modified accrual — revenue when measurable AND available (often within ~60 days), expenditures when incurred — while proprietary/fiduciary funds use full accrual.",
      "Government reports present dual perspectives: fund statements (modified accrual) and government-wide statements (full accrual), bridged by reconciliations.",
      "Not-for-profits report on full accrual and classify net assets as without donor restrictions or with donor restrictions.",
      "Unconditional contributions are recognized as revenue when received; restricted gifts increase 'with donor restrictions' net assets and are released when the restriction is met.",
      "Conditional contributions are not recognized until the condition is substantially met; contributed services are recognized only in limited cases.",
    ],
  },

  {
    id: "cpa-far-consol-deep",
    examSlug: "cpa-far",
    topicId: "consolidations",
    topicName: "Financial Accounting & Reporting",
    title: "Business Combinations and Consolidations",
    readingMinutes: 58,
    summary:
      "How one company absorbs another in the financial statements — the acquisition method, measuring goodwill and noncontrolling interest, the equity-method-versus-consolidation decision, and the intercompany eliminations that produce consolidated statements.",
    intro:
      "When one company gains control of another, FAR requires the ACQUISITION METHOD and CONSOLIDATED financial statements that present the combined entity as if it were one company. The most-tested mechanics are the GOODWILL calculation, the treatment of NONCONTROLLING INTEREST, the threshold that decides between the equity method and full consolidation, and the intercompany ELIMINATIONS. Each is rule-driven and quantitative — exactly what the exam rewards.",
    sections: [
      {
        heading: "1. The acquisition method and goodwill",
        blocks: [
          { kind: "p", text: "Under the ACQUISITION METHOD, the acquirer records the acquiree's identifiable assets and liabilities at their FAIR VALUES on the acquisition date (not book values). GOODWILL is the residual — the excess of the consideration transferred (plus any noncontrolling interest, measured at fair value) over the fair value of the net identifiable assets acquired. Goodwill is NOT amortized; it is tested for impairment at least annually. If the price is below the fair value of net identifiable assets (a BARGAIN PURCHASE), the difference is recognized immediately as a GAIN." },
          { kind: "formula", formula: { label: "Goodwill", expr: "Goodwill = Consideration transferred + Fair value of NCI − Fair value of net identifiable assets acquired", note: "Net identifiable assets = identifiable assets at fair value − liabilities at fair value. A negative result is a bargain-purchase gain." } },
          { kind: "example", example: { title: "Goodwill with a noncontrolling interest", prompt: "An acquirer pays $900,000 for 80% of a target. The fair value of the 20% noncontrolling interest is $225,000, and the fair value of the target's net identifiable assets is $1,000,000. What is goodwill?", steps: ["Total fair value of the acquiree = consideration + NCI fair value = $900,000 + $225,000 = $1,125,000.", "Goodwill = $1,125,000 − $1,000,000 (net identifiable assets at fair value).", "= $125,000."], answer: "Goodwill = $125,000. The full goodwill method includes the NCI at fair value; goodwill is the excess of the total acquiree fair value over its net identifiable assets." } },
        ],
      },
      {
        heading: "2. Influence vs control: equity method vs consolidation",
        blocks: [
          { kind: "p", text: "The level of ownership/influence drives the accounting. With NO significant influence (generally under 20%), the investment is carried at FAIR VALUE. With SIGNIFICANT INFLUENCE (generally 20–50%), the EQUITY METHOD applies: the investment starts at cost, INCREASES by the investor's share of the investee's net income (and decreases for the share of losses), and DECREASES by dividends received. With CONTROL (generally more than 50% of voting interest), the investor CONSOLIDATES — combining 100% of the subsidiary's assets, liabilities, revenues, and expenses, then showing the noncontrolling interest's share of equity and income separately." },
          { kind: "table", table: { caption: "Investment accounting by influence level", headers: ["Ownership", "Influence", "Method"], rows: [["< 20%", "None", "Fair value"], ["20–50%", "Significant", "Equity method"], ["> 50%", "Control", "Consolidation"]] } },
        ],
      },
      {
        heading: "3. Consolidation and intercompany eliminations",
        blocks: [
          { kind: "p", text: "Consolidated statements present the parent and subsidiary as a single economic entity, so all INTERCOMPANY transactions must be ELIMINATED to avoid double counting. The parent's INVESTMENT account is eliminated against the subsidiary's EQUITY. Intercompany SALES and the related cost of goods sold are removed, along with any UNREALIZED PROFIT still sitting in ending inventory that hasn't been sold to outsiders. Intercompany RECEIVABLES and PAYABLES, and intercompany dividends, are eliminated. What remains is the combined entity's transactions with the outside world, plus a noncontrolling-interest line for the portion of the subsidiary the parent doesn't own." },
          { kind: "p", text: "The chapter's core: a controlling acquisition uses the acquisition method (identifiable assets/liabilities at fair value), with goodwill = consideration + NCI fair value − net identifiable assets (a bargain purchase is a gain); ownership level dictates fair value (<20%), equity method (20–50%), or consolidation (>50%); and consolidation combines 100% of the subsidiary while eliminating intercompany investment, sales, profit in inventory, and receivables/payables. Over-learn the goodwill formula and the influence thresholds." },
        ],
      },
    ],
    keyTerms: [
      { term: "Acquisition method", def: "Record the acquiree's identifiable assets and liabilities at fair value on the acquisition date." },
      { term: "Goodwill", def: "Consideration + NCI fair value − fair value of net identifiable assets; not amortized, tested for impairment." },
      { term: "Bargain purchase", def: "Price below fair value of net identifiable assets; the difference is an immediate gain." },
      { term: "Noncontrolling interest (NCI)", def: "The portion of a subsidiary not owned by the parent, measured at fair value." },
      { term: "Fair value method (<20%)", def: "Passive investments carried at fair value." },
      { term: "Equity method (20–50%)", def: "Investment at cost, + share of income, − dividends received." },
      { term: "Consolidation (>50%)", def: "Combine 100% of the subsidiary; show NCI separately." },
      { term: "Intercompany eliminations", def: "Remove the investment vs equity, intercompany sales/COGS, unrealized profit, and receivables/payables." },
      { term: "Unrealized intercompany profit", def: "Profit on intercompany sales still in ending inventory; eliminated until sold to outsiders." },
    ],
    takeaways: [
      "A controlling acquisition uses the acquisition method: the acquiree's identifiable assets and liabilities are recorded at fair value.",
      "Goodwill = consideration transferred + fair value of NCI − fair value of net identifiable assets; it is not amortized but tested for impairment. A bargain purchase produces a gain.",
      "Ownership level sets the method: fair value (<20%), equity method (20–50% significant influence), or consolidation (>50% control).",
      "The equity method records the investment at cost, adds the investor's share of income, and subtracts dividends received.",
      "Consolidation combines 100% of the subsidiary and shows noncontrolling interest separately.",
      "Intercompany items must be eliminated: investment vs subsidiary equity, intercompany sales/COGS, unrealized profit in inventory, and intercompany receivables/payables.",
    ],
  },

  {
    id: "cpa-far-assets-deep",
    examSlug: "cpa-far",
    topicId: "assets",
    topicName: "Financial Accounting & Reporting",
    title: "Inventory and Long-Lived Assets",
    readingMinutes: 56,
    summary:
      "Measuring a company's productive assets — inventory cost-flow assumptions (FIFO, LIFO, weighted average) and their effect on income, the lower-of-cost-or-market/NRV rule, capitalizing property, plant and equipment, depreciation methods, and impairment.",
    intro:
      "Inventory and long-lived assets are core FAR balance-sheet topics with predictable calculations. For INVENTORY, the cost-flow assumption (FIFO, LIFO, or weighted average) drives both the balance sheet and the income statement, especially when prices change. For PROPERTY, PLANT AND EQUIPMENT, the questions are what to capitalize, how to depreciate, and when to impair. This reading works through each with the comparisons the exam loves — particularly FIFO versus LIFO in a period of rising prices.",
    sections: [
      {
        heading: "1. Inventory cost-flow assumptions",
        blocks: [
          { kind: "p", text: "When identical units are bought at different costs, a COST-FLOW ASSUMPTION determines which costs go to cost of goods sold and which remain in ending inventory. FIFO (first-in, first-out) assigns the OLDEST costs to COGS, leaving the most RECENT costs in ending inventory. LIFO (last-in, first-out) assigns the most RECENT costs to COGS, leaving older costs in inventory (LIFO is permitted under US GAAP but NOT under IFRS). WEIGHTED AVERAGE uses the average cost of all units. The choice is most consequential when prices are changing." },
          { kind: "table", table: { caption: "FIFO vs LIFO in a period of RISING prices", headers: ["Measure", "FIFO", "LIFO"], rows: [["Cost of goods sold", "Lower (old, cheaper costs)", "Higher (recent, costlier)"], ["Ending inventory", "Higher (recent costs)", "Lower (old costs)"], ["Net income & taxes", "Higher", "Lower"]] } },
          { kind: "example", example: { title: "FIFO vs LIFO with rising prices", prompt: "A firm buys 100 units at $10, then 100 at $12, and sells 100 units. Under FIFO and LIFO, what is cost of goods sold and ending inventory?", steps: ["FIFO: COGS uses the oldest 100 units at $10 = $1,000; ending inventory = 100 × $12 = $1,200.", "LIFO: COGS uses the newest 100 units at $12 = $1,200; ending inventory = 100 × $10 = $1,000.", "With rising prices, LIFO gives higher COGS (lower income/taxes) and lower ending inventory."], answer: "FIFO: COGS $1,000, ending inventory $1,200. LIFO: COGS $1,200, ending inventory $1,000. LIFO's higher COGS lowers taxable income when prices rise — its main appeal." } },
        ],
      },
      {
        heading: "2. Inventory valuation: lower of cost or market/NRV",
        blocks: [
          { kind: "p", text: "Inventory is written down when its value has fallen below cost. The rule depends on the method: inventory measured under FIFO or weighted average uses LOWER OF COST OR NET REALIZABLE VALUE (NRV = estimated selling price − costs to complete and sell). Inventory measured under LIFO or the retail method uses LOWER OF COST OR MARKET, where 'market' is replacement cost bounded by a ceiling (NRV) and floor (NRV − normal profit margin). Either way, a decline below cost is recognized as a loss; recoveries are generally not reversed under US GAAP." },
        ],
      },
      {
        heading: "3. Property, plant and equipment",
        blocks: [
          { kind: "p", text: "PP&E is CAPITALIZED at all costs necessary to acquire the asset and prepare it for its intended use — purchase price, freight, installation, testing, and (for self-constructed assets) capitalized interest during construction. Routine repairs are expensed; improvements that extend life or capacity are capitalized. The cost is then allocated to expense over the asset's useful life through DEPRECIATION. Common methods: STRAIGHT-LINE (equal expense each year = (cost − salvage) ÷ useful life), UNITS-OF-PRODUCTION (expense tied to usage), and DOUBLE-DECLINING BALANCE (an accelerated method applying twice the straight-line rate to the declining book value, ignoring salvage until the end)." },
          { kind: "example", example: { title: "Straight-line vs double-declining depreciation", prompt: "An asset costs $50,000 with a $5,000 salvage value and a 5-year life. What is year-1 depreciation under straight-line and under double-declining balance?", steps: ["Straight-line = (cost − salvage) ÷ life = ($50,000 − $5,000) ÷ 5 = $9,000.", "Double-declining rate = 2 × (1/5) = 40%.", "DDB year 1 = 40% × book value $50,000 = $20,000 (salvage ignored until the end)."], answer: "Straight-line $9,000; double-declining $20,000 in year 1. DDB front-loads depreciation, lowering early-year income relative to straight-line." } },
        ],
      },
      {
        heading: "4. Impairment and synthesis",
        blocks: [
          { kind: "p", text: "A long-lived asset HELD AND USED is tested for IMPAIRMENT when events suggest its carrying value may not be recoverable. The US GAAP test is two steps: first, RECOVERABILITY — if the asset's UNDISCOUNTED expected future cash flows are LESS than its carrying value, it is impaired; second, MEASUREMENT — write the asset down to its FAIR VALUE, recognizing the difference as an impairment loss. Once written down, the asset cannot be written back up under US GAAP (held-for-use). The chapter's core: the inventory cost-flow assumption (FIFO/LIFO/weighted average) drives COGS, ending inventory, and income — with LIFO giving higher COGS and lower income when prices rise; inventory is carried at the lower of cost or NRV/market; PP&E is capitalized at all costs to ready it for use and depreciated (straight-line, units-of-production, or accelerated DDB); and impairment writes a held-and-used asset down to fair value once undiscounted cash flows fall below carrying value. Over-learn the FIFO/LIFO comparison and the two-step impairment test." },
        ],
      },
    ],
    keyTerms: [
      { term: "FIFO", def: "Oldest costs to COGS, recent costs in ending inventory; higher income when prices rise." },
      { term: "LIFO", def: "Recent costs to COGS, old costs in inventory; lower income/taxes when prices rise (US GAAP only)." },
      { term: "Weighted average", def: "Uses the average cost of all units available." },
      { term: "Lower of cost or NRV", def: "Valuation rule for FIFO/weighted-average inventory (NRV = selling price − completion/selling costs)." },
      { term: "Lower of cost or market", def: "Valuation for LIFO/retail; market = replacement cost within an NRV ceiling and floor." },
      { term: "Capitalize (PP&E)", def: "Record all costs to acquire and ready an asset for use; expense routine repairs." },
      { term: "Straight-line depreciation", def: "(Cost − salvage) ÷ useful life; equal expense each period." },
      { term: "Double-declining balance", def: "Accelerated: 2 × straight-line rate × declining book value, ignoring salvage until the end." },
      { term: "Impairment recoverability test", def: "Impaired if undiscounted future cash flows < carrying value." },
      { term: "Impairment measurement", def: "Write down to fair value; no write-up later for held-and-used assets (US GAAP)." },
    ],
    takeaways: [
      "The inventory cost-flow assumption (FIFO, LIFO, weighted average) drives cost of goods sold, ending inventory, and income.",
      "In a period of rising prices, FIFO yields lower COGS, higher inventory, and higher income; LIFO yields the opposite (its tax advantage). LIFO is US GAAP only.",
      "Inventory is carried at lower of cost or NRV (FIFO/average) or lower of cost or market (LIFO/retail); declines are losses, not reversed under US GAAP.",
      "PP&E is capitalized at all costs to acquire and ready it for use; routine repairs are expensed and improvements capitalized.",
      "Depreciation methods include straight-line, units-of-production, and double-declining balance (accelerated, front-loaded, ignoring salvage until the end).",
      "A held-and-used asset is impaired when undiscounted future cash flows fall below carrying value, then written down to fair value with no later write-up.",
    ],
  },
];

export const farDeepQuestions: Question[] = [
  {
    id: "cpa-far-fw-d1", examSlug: "cpa-far", topicId: "far", topicName: "Financial Accounting & Reporting", difficulty: 1,
    stem: "The two FUNDAMENTAL qualitative characteristics of useful financial information are:",
    choices: ["Comparability and timeliness", "Relevance and faithful representation", "Verifiability and understandability", "Materiality and consistency"],
    answerIndex: 1,
    explanation: "Relevance and faithful representation are the two fundamental characteristics that make information useful. Comparability, verifiability, timeliness, and understandability are ENHANCING characteristics that improve already-useful information.",
  },
  {
    id: "cpa-far-fw-d2", examSlug: "cpa-far", topicId: "far", topicName: "Financial Accounting & Reporting", difficulty: 1,
    stem: "Under the accrual basis of accounting, revenue is recognized when:",
    choices: ["Cash is received", "It is earned, regardless of when cash is received", "The invoice is mailed", "The period closes"],
    answerIndex: 1,
    explanation: "Accrual accounting recognizes revenue when it is earned and expenses when incurred, independent of cash timing. The cash basis, by contrast, records only when cash is received or paid.",
  },
  {
    id: "cpa-far-fw-d3", examSlug: "cpa-far", topicId: "far", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "A firm earned $4,000 of interest revenue in December that will be collected in January. The December 31 adjusting entry is:",
    choices: ["Dr Cash 4,000 / Cr Interest Revenue 4,000", "Dr Interest Receivable 4,000 / Cr Interest Revenue 4,000", "Dr Interest Revenue 4,000 / Cr Interest Receivable 4,000", "No entry until cash is received"],
    answerIndex: 1,
    explanation: "The revenue is earned in December, so it is accrued: debit Interest Receivable (asset) and credit Interest Revenue. Cash is not touched until collection in January. Assets and equity both rise $4,000, keeping the equation balanced.",
  },
  {
    id: "cpa-far-fw-d4", examSlug: "cpa-far", topicId: "far", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "Net income is $50,000, depreciation is $8,000, accounts receivable rose $5,000, and accounts payable rose $3,000. Operating cash flow (indirect method) is:",
    choices: ["$50,000", "$56,000", "$44,000", "$66,000"],
    answerIndex: 1,
    explanation: "Start with net income $50,000; add back depreciation +$8,000; subtract the increase in receivables −$5,000; add the increase in payables +$3,000 = $56,000. Increases in receivables reduce cash; increases in payables raise it.",
  },
  {
    id: "cpa-far-fw-d5", examSlug: "cpa-far", topicId: "far", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "Repaying the principal of a bank loan is classified on the statement of cash flows as a(n):",
    choices: ["Operating activity", "Investing activity", "Financing activity", "Non-cash activity"],
    answerIndex: 2,
    explanation: "Repaying debt principal is a financing activity (a transaction with a lender). Buying/selling long-term assets is investing; the cash effects of core operations are operating. (Interest paid is generally operating under US GAAP.)",
  },
  {
    id: "cpa-far-fw-d6", examSlug: "cpa-far", topicId: "far", topicName: "Financial Accounting & Reporting", difficulty: 1,
    stem: "The accounting equation is:",
    choices: ["Assets = Liabilities − Equity", "Assets + Liabilities = Equity", "Assets = Liabilities + Equity", "Revenue − Expenses = Assets"],
    answerIndex: 2,
    explanation: "Assets = Liabilities + Equity. Every transaction keeps this in balance via double-entry bookkeeping; equity rises with revenues and contributed capital and falls with expenses and dividends.",
  },

  {
    id: "cpa-far-rl-d1", examSlug: "cpa-far", topicId: "revenue-leases", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "The five steps of ASC 606 revenue recognition, in order, are:",
    choices: ["Recognize, allocate, price, obligations, contract", "Contract, performance obligations, transaction price, allocate, recognize", "Price, contract, recognize, allocate, obligations", "Contract, price, recognize, obligations, allocate"],
    answerIndex: 1,
    explanation: "ASC 606: (1) identify the contract, (2) identify performance obligations, (3) determine the transaction price, (4) allocate it by relative standalone selling prices, (5) recognize revenue when/as obligations are satisfied.",
  },
  {
    id: "cpa-far-rl-d2", examSlug: "cpa-far", topicId: "revenue-leases", topicName: "Financial Accounting & Reporting", difficulty: 3,
    stem: "A product and two years of support sell together for $1,000; standalone prices are $900 (product) and $300 (support). How much is allocated to the product?",
    choices: ["$700", "$750", "$900", "$1,000"],
    answerIndex: 1,
    explanation: "Allocate by relative standalone selling prices: product share = $900 ÷ ($900 + $300) = 75%; 75% × $1,000 = $750 (and $250 to support). The product revenue is recognized on delivery; the support over two years.",
  },
  {
    id: "cpa-far-rl-d3", examSlug: "cpa-far", topicId: "revenue-leases", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "Under ASC 842, a lessee's right-of-use asset and lease liability are initially measured at:",
    choices: ["The total of all undiscounted lease payments", "The present value of the lease payments", "The fair value of the asset", "Zero — operating leases are off balance sheet"],
    answerIndex: 1,
    explanation: "Both the ROU asset and the lease liability are initially recorded at the present value of the lease payments. Under ASC 842, essentially all leases (finance and operating) appear on the lessee's balance sheet.",
  },
  {
    id: "cpa-far-rl-d4", examSlug: "cpa-far", topicId: "revenue-leases", topicName: "Financial Accounting & Reporting", difficulty: 3,
    stem: "Which of the following would cause a lessee to classify a lease as a FINANCE lease?",
    choices: ["The lease term is a minor part of the asset's life", "The present value of payments equals substantially all of the asset's fair value", "There is no purchase option", "The asset has many alternative uses"],
    answerIndex: 1,
    explanation: "Any one of five criteria triggers finance classification, including the PV of payments being substantially all of the asset's fair value. Others: ownership transfer, a reasonably-certain purchase option, lease term a major part of the asset's life, or a specialized asset. None met = operating lease.",
  },
  {
    id: "cpa-far-rl-d5", examSlug: "cpa-far", topicId: "revenue-leases", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "Compared with an operating lease, a finance lease produces a total expense pattern that is:",
    choices: ["Straight-line (even each period)", "Front-loaded (higher in early years)", "Back-loaded (higher in later years)", "Recognized only at lease end"],
    answerIndex: 1,
    explanation: "A finance lease records amortization of the ROU asset plus interest on the liability; because interest is higher when the liability balance is larger early on, total expense is front-loaded. An operating lease records a single straight-line expense.",
  },
  {
    id: "cpa-far-rl-d6", examSlug: "cpa-far", topicId: "revenue-leases", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "Under ASC 606, revenue is recognized 'over time' when:",
    choices: ["Cash is collected in installments", "The customer simultaneously receives and consumes the benefits as the entity performs", "The contract spans more than one year", "Management chooses to defer it"],
    answerIndex: 1,
    explanation: "Over-time recognition applies when the customer consumes the benefit as the entity performs, the entity creates/enhances an asset the customer controls, or the asset has no alternative use and the entity has a right to payment for work done. Otherwise revenue is recognized at the point in time control transfers.",
  },

  {
    id: "cpa-far-lia-d1", examSlug: "cpa-far", topicId: "liabilities", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "A bond is issued at a discount when its stated (coupon) rate is:",
    choices: ["Above the market rate", "Below the market rate", "Equal to the market rate", "Zero"],
    answerIndex: 1,
    explanation: "When the stated rate is below the market rate, investors pay less than face value (a discount) to achieve the higher market yield. A stated rate above market produces a premium.",
  },
  {
    id: "cpa-far-lia-d2", examSlug: "cpa-far", topicId: "liabilities", topicName: "Financial Accounting & Reporting", difficulty: 3,
    stem: "A $100,000, 5% bond is issued for $96,000 to yield 6%. Using the effective-interest method, first-year interest expense is:",
    choices: ["$5,000", "$5,760", "$6,000", "$4,800"],
    answerIndex: 1,
    explanation: "Interest expense = carrying value × market rate = $96,000 × 6% = $5,760. Cash paid = $100,000 × 5% = $5,000, so $760 of discount amortizes and carrying value rises to $96,760.",
  },
  {
    id: "cpa-far-lia-d3", examSlug: "cpa-far", topicId: "liabilities", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "Using accelerated depreciation on the tax return but straight-line for books most directly creates a:",
    choices: ["Deferred tax asset", "Deferred tax liability", "Permanent difference", "Valuation allowance"],
    answerIndex: 1,
    explanation: "More tax depreciation now lowers taxable income relative to book income, deferring tax to later periods — a deferred tax liability. A DTA arises when taxable income exceeds book income now (e.g., warranty accruals, NOLs).",
  },
  {
    id: "cpa-far-lia-d4", examSlug: "cpa-far", topicId: "liabilities", topicName: "Financial Accounting & Reporting", difficulty: 1,
    stem: "Which item creates a PERMANENT difference (no deferred tax)?",
    choices: ["Warranty expense accrual", "Municipal bond interest", "Unearned revenue", "Accelerated tax depreciation"],
    answerIndex: 1,
    explanation: "Municipal bond interest is permanently excluded from taxable income, so it never reverses and creates no deferred tax. The others are temporary differences that reverse over time and create deferred tax assets or liabilities.",
  },
  {
    id: "cpa-far-lia-d5", examSlug: "cpa-far", topicId: "liabilities", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "A loss contingency should be ACCRUED (liability and expense recorded) when it is:",
    choices: ["Reasonably possible and estimable", "Probable and reasonably estimable", "Remote but estimable", "Disclosed by the auditor"],
    answerIndex: 1,
    explanation: "US GAAP requires accrual only when a loss is both probable AND reasonably estimable. A reasonably possible loss is disclosed but not accrued; a remote loss is generally ignored. Gain contingencies are never accrued until realized.",
  },
  {
    id: "cpa-far-lia-d6", examSlug: "cpa-far", topicId: "liabilities", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "Over its life, a bond issued at a discount will have a carrying value that:",
    choices: ["Decreases toward face value", "Increases toward face value", "Stays constant", "Equals the premium"],
    answerIndex: 1,
    explanation: "With a discount, effective interest expense exceeds the cash coupon, so the unamortized discount shrinks and the carrying value rises each period until it reaches face value at maturity. A premium amortizes the carrying value downward.",
  },

  {
    id: "cpa-far-gov-d1", examSlug: "cpa-far", topicId: "gov-nfp", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "Governmental funds use which basis of accounting?",
    choices: ["Full accrual", "Modified accrual", "Cash basis only", "Tax basis"],
    answerIndex: 1,
    explanation: "Governmental funds use modified accrual — revenue is recognized when measurable and available, and expenditures when incurred. Proprietary and fiduciary funds (and the government-wide statements) use full accrual.",
  },
  {
    id: "cpa-far-gov-d2", examSlug: "cpa-far", topicId: "gov-nfp", topicName: "Financial Accounting & Reporting", difficulty: 3,
    stem: "Under modified accrual, 'available' generally means revenue is collectible:",
    choices: ["At any point in the future", "Within the period or soon enough after year-end (commonly 60 days) to pay current liabilities", "Only when cash is in hand", "Within five years"],
    answerIndex: 1,
    explanation: "'Available' means collectible within the current period or soon enough afterward (commonly within 60 days) to pay current-period liabilities. Combined with 'measurable,' this is the modified-accrual revenue recognition test.",
  },
  {
    id: "cpa-far-gov-d3", examSlug: "cpa-far", topicId: "gov-nfp", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "A government's enterprise fund (e.g., a municipal water utility) uses:",
    choices: ["Modified accrual, like governmental funds", "Full accrual, like a business", "Cash basis", "No formal accounting"],
    answerIndex: 1,
    explanation: "Enterprise funds are proprietary funds that operate like businesses, so they use the full accrual basis and the economic-resources measurement focus — unlike governmental funds, which use modified accrual.",
  },
  {
    id: "cpa-far-gov-d4", examSlug: "cpa-far", topicId: "gov-nfp", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "Under current FASB standards, a not-for-profit classifies its net assets into how many categories?",
    choices: ["One", "Two (with and without donor restrictions)", "Three", "Four"],
    answerIndex: 1,
    explanation: "Not-for-profits report two net-asset classes: without donor restrictions and with donor restrictions. (The earlier three-category model — unrestricted, temporarily restricted, permanently restricted — was replaced.)",
  },
  {
    id: "cpa-far-gov-d5", examSlug: "cpa-far", topicId: "gov-nfp", topicName: "Financial Accounting & Reporting", difficulty: 3,
    stem: "A donor gives a charity $1,000,000 that must be used to build a clinic. When received, it is recognized as:",
    choices: ["A liability until spent", "Revenue increasing net assets WITH donor restrictions", "Revenue without donor restrictions immediately", "Not recognized until the clinic is finished"],
    answerIndex: 1,
    explanation: "An unconditional but purpose-restricted gift is recognized immediately as contribution revenue in net assets WITH donor restrictions, then released to without-donor-restrictions as the clinic is built. A conditional gift would not be recognized until the condition is met.",
  },
  {
    id: "cpa-far-gov-d6", examSlug: "cpa-far", topicId: "gov-nfp", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "Government financial reporting presents the government-wide statements using:",
    choices: ["Modified accrual", "The full accrual, economic-resources basis", "Budgetary basis only", "Cash basis"],
    answerIndex: 1,
    explanation: "The government-wide statements restate all activities on the full accrual, economic-resources basis (capitalizing assets and recording long-term debt), in contrast to the modified-accrual fund statements; reconciliations bridge the two perspectives.",
  },

  {
    id: "cpa-far-con-d1", examSlug: "cpa-far", topicId: "consolidations", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "Under the acquisition method, the acquiree's identifiable assets and liabilities are recorded at:",
    choices: ["Their book values", "Their fair values on the acquisition date", "The acquirer's cost", "Historical cost less depreciation"],
    answerIndex: 1,
    explanation: "The acquisition method records identifiable assets and liabilities at fair value on the acquisition date. Goodwill is the residual excess of consideration (plus NCI at fair value) over the fair value of net identifiable assets.",
  },
  {
    id: "cpa-far-con-d2", examSlug: "cpa-far", topicId: "consolidations", topicName: "Financial Accounting & Reporting", difficulty: 3,
    stem: "An acquirer pays $900,000 for 80% of a target; the 20% NCI fair value is $225,000 and net identifiable assets' fair value is $1,000,000. Goodwill is:",
    choices: ["$0", "$100,000", "$125,000", "$225,000"],
    answerIndex: 2,
    explanation: "Goodwill = consideration + NCI fair value − fair value of net identifiable assets = ($900,000 + $225,000) − $1,000,000 = $125,000.",
  },
  {
    id: "cpa-far-con-d3", examSlug: "cpa-far", topicId: "consolidations", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "An investor owning 30% of a company with significant influence should generally use the:",
    choices: ["Fair value method", "Equity method", "Full consolidation", "Cost method with no adjustments"],
    answerIndex: 1,
    explanation: "Ownership of 20–50% with significant influence uses the equity method: the investment starts at cost, increases by the investor's share of income, and decreases by dividends received. Over 50% (control) requires consolidation; under 20% uses fair value.",
  },
  {
    id: "cpa-far-con-d4", examSlug: "cpa-far", topicId: "consolidations", topicName: "Financial Accounting & Reporting", difficulty: 1,
    stem: "Goodwill arising from a business combination is:",
    choices: ["Amortized over 40 years", "Amortized over 15 years", "Not amortized, but tested for impairment", "Expensed immediately"],
    answerIndex: 2,
    explanation: "Goodwill is not amortized; it is tested for impairment at least annually. (A bargain purchase — price below fair value of net identifiable assets — is recognized as an immediate gain.)",
  },
  {
    id: "cpa-far-con-d5", examSlug: "cpa-far", topicId: "consolidations", topicName: "Financial Accounting & Reporting", difficulty: 3,
    stem: "In preparing consolidated statements, intercompany sales and unrealized profit in ending inventory are:",
    choices: ["Reported as consolidated revenue", "Eliminated", "Recorded as noncontrolling interest", "Added to goodwill"],
    answerIndex: 1,
    explanation: "Intercompany transactions are eliminated so the consolidated statements show only dealings with outsiders. Unrealized profit in inventory not yet sold to third parties is eliminated until it is realized through an external sale.",
  },
  {
    id: "cpa-far-con-d6", examSlug: "cpa-far", topicId: "consolidations", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "A parent owning 70% of a subsidiary consolidates by combining:",
    choices: ["70% of the subsidiary's assets and income", "100% of the subsidiary's assets and income, with NCI shown separately", "Only the dividends received", "Only the investment account"],
    answerIndex: 1,
    explanation: "Consolidation combines 100% of the subsidiary's assets, liabilities, revenues, and expenses, then shows the 30% noncontrolling interest's share of equity and income on separate lines.",
  },

  {
    id: "cpa-far-ass-d1", examSlug: "cpa-far", topicId: "assets", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "In a period of RISING prices, compared with FIFO, LIFO produces:",
    choices: ["Higher ending inventory and higher net income", "Higher cost of goods sold and lower net income", "Lower cost of goods sold and higher net income", "Identical results"],
    answerIndex: 1,
    explanation: "When prices rise, LIFO charges the newest (higher) costs to COGS, producing higher cost of goods sold, lower net income, and lower taxes — plus lower ending inventory (older, cheaper costs). FIFO gives the opposite.",
  },
  {
    id: "cpa-far-ass-d2", examSlug: "cpa-far", topicId: "assets", topicName: "Financial Accounting & Reporting", difficulty: 3,
    stem: "A firm buys 100 units at $10 then 100 at $12 and sells 100. Under LIFO, cost of goods sold is:",
    choices: ["$1,000", "$1,100", "$1,200", "$2,200"],
    answerIndex: 2,
    explanation: "LIFO assigns the most recent costs to COGS: the 100 units sold are costed at the latest $12 = $1,200. Ending inventory holds the older 100 units at $10 = $1,000.",
  },
  {
    id: "cpa-far-ass-d3", examSlug: "cpa-far", topicId: "assets", topicName: "Financial Accounting & Reporting", difficulty: 1,
    stem: "Which inventory method is permitted under US GAAP but NOT under IFRS?",
    choices: ["FIFO", "LIFO", "Weighted average", "Specific identification"],
    answerIndex: 1,
    explanation: "LIFO is allowed under US GAAP but prohibited under IFRS. FIFO, weighted average, and specific identification are permitted under both frameworks.",
  },
  {
    id: "cpa-far-ass-d4", examSlug: "cpa-far", topicId: "assets", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "An asset costs $50,000 with $5,000 salvage and a 5-year life. Year-1 straight-line depreciation is:",
    choices: ["$10,000", "$9,000", "$20,000", "$5,000"],
    answerIndex: 1,
    explanation: "Straight-line = (cost − salvage) ÷ useful life = ($50,000 − $5,000) ÷ 5 = $9,000 per year. (Double-declining balance would give 40% × $50,000 = $20,000 in year 1.)",
  },
  {
    id: "cpa-far-ass-d5", examSlug: "cpa-far", topicId: "assets", topicName: "Financial Accounting & Reporting", difficulty: 3,
    stem: "Under US GAAP, a held-and-used long-lived asset is impaired when:",
    choices: ["Its fair value is below carrying value", "Its undiscounted expected future cash flows are below carrying value", "It is fully depreciated", "Market interest rates rise"],
    answerIndex: 1,
    explanation: "The US GAAP recoverability test: an asset is impaired when its UNDISCOUNTED future cash flows are less than carrying value. The loss is then measured as carrying value minus FAIR value, and no write-up is allowed later for held-and-used assets.",
  },
  {
    id: "cpa-far-ass-d6", examSlug: "cpa-far", topicId: "assets", topicName: "Financial Accounting & Reporting", difficulty: 2,
    stem: "Which cost should be CAPITALIZED as part of equipment rather than expensed?",
    choices: ["Routine maintenance", "Freight and installation to ready it for use", "Annual insurance", "Operator wages"],
    answerIndex: 1,
    explanation: "Costs necessary to acquire the asset and prepare it for its intended use — purchase price, freight, installation, testing — are capitalized. Routine maintenance, insurance, and operating wages are period expenses.",
  },
];
