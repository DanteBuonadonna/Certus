// ============================================================
// Certus — CFA Level I Financial Statement Analysis, in depth
//
// WHY THIS FILE EXISTS
// FRA is 12.2% of Level I (a top-band topic on CFA Institute's current
// published table) and had 37 minutes of reading against a target of 146
// — the largest single gap remaining.
//
// EVERY NUMBER WAS COMPUTED IN PYTHON FIRST, and the DuPont decomposition
// is CROSS-CHECKED against ROE computed directly. If those two disagree
// the arithmetic is wrong, so the check is printed in the chapter itself.
// ============================================================

import { Chapter, Question } from "./types";

export const fraDeepChapters: Chapter[] = [
  {
    id: "cfa-l1-fra-statements",
    examSlug: "cfa",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    title: "The Statements, and What Each One Cannot Tell You",
    readingMinutes: 21,
    summary:
      "What the three statements measure, why accrual accounting makes profit and cash diverge, how the indirect cash flow statement is built, and the limits of an audit opinion.",
    intro:
      "Financial statement analysis begins with a discipline that is easy to state and hard to keep: read what the statement measures before reading the number. Most analytical errors at Level I are category errors — treating profit as cash, or book value as worth.",
    sections: [
      {
        heading: "Three statements, three questions",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "What each statement answers",
              headers: ["Statement", "Question it answers", "What it cannot tell you"],
              rows: [
                ["Balance sheet", "What is owned and owed at ONE INSTANT", "Anything about the period, or about market value"],
                ["Income statement", "What was earned OVER A PERIOD", "Whether the cash arrived"],
                ["Cash flow statement", "Where cash actually moved", "Whether the business was profitable"],
                ["Statement of changes in equity", "Why the owners' claim changed", "The operating story behind it"],
              ],
            },
          },
          {
            kind: "formula",
            formula: {
              label: "The accounting equation",
              expr: "assets = liabilities + owners' equity",
              note: "Every transaction preserves this. Owners' equity is the residual claim, which is why equity holders are paid last.",
            },
          },
          {
            kind: "p",
            text: "The single most important distinction in the whole topic is ACCRUAL versus CASH. Revenue is recognised when it is earned, not when cash is received; expenses are recognised when incurred, not when paid. That is what makes the income statement more informative than a cash tally — and it is also what makes profit manipulable, because recognition timing is a judgement.",
          },
          {
            kind: "callout",
            label: "Profitable companies fail",
            body: "A business can report growing profits every quarter and still run out of money, because a sale on credit is revenue immediately but cash only later. If receivables and inventory grow faster than sales, profit is being converted into working capital rather than cash. That is exactly what the cash flow statement exists to reveal, and why it is the statement to read first when something looks too good.",
          },
        ],
      },
      {
        heading: "Building the cash flow statement",
        blocks: [
          {
            kind: "bullets",
            items: [
              "OPERATING — cash from the core business. The quality signal: it should broadly track net income over time.",
              "INVESTING — buying and selling long-term assets. Persistently positive investing cash flow can mean a company is selling itself off.",
              "FINANCING — raising and repaying capital, and paying dividends.",
            ],
          },
          {
            kind: "p",
            text: "The indirect method starts from net income and reverses everything in it that was not cash. The logic is mechanical once the direction is clear: add back non-cash charges, and adjust for working capital changes in the direction that reflects where the cash went.",
          },
          {
            kind: "formula",
            formula: {
              label: "Indirect method",
              expr: "CFO = net income + non-cash charges − gains + losses − increases in working capital assets + increases in working capital liabilities",
              note: "An asset increase CONSUMES cash; a liability increase PROVIDES it. That one rule settles every sign.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Why the signs go the way they do",
              prompt:
                "Net income is $120. Depreciation is $40. Receivables rose $25, inventory fell $10, and payables rose $15. Compute cash flow from operations.",
              steps: [
                "Depreciation is a non-cash charge: add back $40.",
                "Receivables ROSE $25 — sales were recorded but the cash has not arrived. Subtract $25.",
                "Inventory FELL $10 — goods were sold without buying replacements. Add $10.",
                "Payables ROSE $15 — expenses recorded but not yet paid. Add $15.",
              ],
              answer:
                "CFO = 120 + 40 − 25 + 10 + 15 = $160. The company generated more cash than profit this period, largely because it ran down inventory and stretched its payables — neither of which is repeatable. Sustainable CFO above net income is a good sign; CFO above net income because payables are stretching is a warning.",
            },
          },
        ],
      },
      {
        heading: "The audit, and what it does not cover",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Audit opinions",
              headers: ["Opinion", "Meaning"],
              rows: [
                ["Unqualified (unmodified)", "Statements are fairly presented in accordance with the standards. The clean one."],
                ["Qualified", "Fairly presented EXCEPT for a specified issue"],
                ["Adverse", "NOT fairly presented — a serious finding"],
                ["Disclaimer", "The auditor could not form an opinion at all"],
              ],
            },
          },
          {
            kind: "p",
            text: "An unqualified opinion says the statements comply with the accounting standards. It does NOT say the business is sound, the accounting is conservative, the numbers are free of fraud, or the shares are worth buying. A company can be audited clean, comply fully, and still be presenting an optimistic picture through choices the standards permit.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Accrual accounting", def: "Revenue when earned, expenses when incurred — not when cash moves." },
      { term: "CFO", def: "Cash from operations; should broadly track net income over time." },
      { term: "Indirect method", def: "Starts from net income and reverses the non-cash items." },
      { term: "Working capital rule", def: "An asset increase consumes cash; a liability increase provides it." },
      { term: "Unqualified opinion", def: "Compliant with standards. Not a statement that the business is sound." },
    ],
    takeaways: [
      "Balance sheet is an instant; income statement and cash flow statement are periods.",
      "Accrual accounting is what makes profit informative and also what makes it manipulable.",
      "A profitable company can fail; read the cash flow statement first when results look too good.",
      "Asset up consumes cash, liability up provides it — that settles every indirect-method sign.",
      "CFO above net income is good if it is sustainable, and a warning if it is stretched payables.",
      "An unqualified audit opinion means compliant, not sound and not conservative.",
    ],
  },

  {
    id: "cfa-l1-fra-inventory-assets",
    examSlug: "cfa",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    title: "Inventory, Long-Lived Assets, and the Choices That Move Earnings",
    readingMinutes: 21,
    summary:
      "How cost-flow assumptions change reported profit, how depreciation method shifts income between years, and why an analyst must adjust before comparing two companies.",
    intro:
      "Two identical companies can report materially different earnings by making different permitted accounting choices. Level I tests whether you can predict the DIRECTION of those differences, which is a more useful skill than memorising the rules.",
    sections: [
      {
        heading: "Inventory cost-flow assumptions",
        blocks: [
          {
            kind: "p",
            text: "When identical units are bought at different prices, the accounts need a rule for which cost leaves with a sale. The rule changes reported profit without changing a single real transaction.",
          },
          {
            kind: "example",
            example: {
              title: "The same sales, two profits",
              prompt:
                "A company buys 100 units at $10, then 100 at $12, then 100 at $14. It sells 150 units at $20 each. Compute COGS, ending inventory and gross profit under FIFO and weighted average.",
              steps: [
                "Available: 300 units costing $3,600. Revenue = 150 × $20 = $3,000.",
                "FIFO: the first costs leave first. COGS = (100 × $10) + (50 × $12) = $1,600. Ending inventory = $3,600 − $1,600 = $2,000.",
                "Weighted average: unit cost = $3,600 / 300 = $12.00. COGS = 150 × $12.00 = $1,800. Ending inventory = $1,800.",
              ],
              answer:
                "FIFO gross profit $1,400; weighted average $1,200. Identical business, $200 difference. With costs RISING, FIFO charges the oldest and cheapest costs to COGS, so it reports LOWER COGS, HIGHER profit and a HIGHER, more current ending inventory. Reverse every one of those if costs are falling.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "Rising costs — direction of effect",
              headers: ["Measure", "FIFO", "Weighted average"],
              rows: [
                ["COGS", "Lower", "Higher"],
                ["Gross profit and net income", "Higher", "Lower"],
                ["Ending inventory on the balance sheet", "Higher, and closer to current cost", "Lower"],
                ["Income tax paid", "Higher", "Lower"],
              ],
            },
          },
          {
            kind: "callout",
            label: "A reporting-standard difference worth knowing",
            body: "IFRS does NOT permit LIFO; US GAAP does. That single divergence makes US filers using LIFO non-comparable with IFRS peers without adjustment, which is why US companies disclose a LIFO reserve — it is the bridge back to FIFO. Inventory is carried at the lower of cost and net realisable value under IFRS; US GAAP uses lower of cost or market for LIFO and retail, and lower of cost and net realisable value otherwise.",
          },
        ],
      },
      {
        heading: "Depreciation shifts income between years",
        blocks: [
          {
            kind: "p",
            text: "Depreciation allocates the cost of a long-lived asset across the periods it serves. The total charged over the asset's life is the same under every method; only the TIMING differs. That is worth saying twice, because it is the insight the exam tests.",
          },
          {
            kind: "example",
            example: {
              title: "Straight-line against double declining balance",
              prompt:
                "An asset costs $50,000, has a $5,000 salvage value and a five-year life. Compare straight-line with double declining balance for the first three years.",
              steps: [
                "Straight-line = ($50,000 − $5,000) / 5 = $9,000 every year.",
                "DDB rate = 2 / 5 = 40%, applied to BOOK VALUE and ignoring salvage until the floor is reached.",
                "Year 1: $50,000 × 40% = $20,000, book value $30,000. Year 2: $30,000 × 40% = $12,000, book value $18,000. Year 3: $18,000 × 40% = $7,200, book value $10,800.",
              ],
              answer:
                "DDB charges $20,000 in year one against straight-line's $9,000 — more than double. Early net income is therefore LOWER under DDB and later net income HIGHER, with identical totals across the life. A company switching to a slower method, or extending useful lives, raises current earnings without any change in the business, which is why those disclosures deserve attention.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Capitalising a cost puts it on the balance sheet and spreads it through depreciation; expensing takes it all now.",
              "Capitalising therefore raises current profit, raises assets, and raises reported CFO — because the outflow lands in investing rather than operating.",
              "Impairment writes an asset down when its carrying amount exceeds its recoverable amount; IFRS permits reversal of impairments (except goodwill), US GAAP generally does not.",
              "Under IFRS, property, plant and equipment may be carried at cost or under a revaluation model; US GAAP permits only historical cost.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "FIFO", def: "Oldest costs leave first. With rising costs: lower COGS, higher income, higher inventory." },
      { term: "Weighted average cost", def: "Total cost divided by total units; sits between FIFO and LIFO." },
      { term: "LIFO reserve", def: "The disclosed bridge from LIFO back to FIFO, needed for comparability." },
      { term: "Double declining balance", def: "2/life applied to book value; accelerates depreciation into early years." },
      { term: "Capitalising", def: "Recording a cost as an asset — raises current profit, assets and reported CFO." },
      { term: "Impairment", def: "Writing an asset down to recoverable amount; reversible under IFRS, generally not under US GAAP." },
    ],
    takeaways: [
      "Cost-flow assumptions change reported profit without changing any real transaction.",
      "Rising costs + FIFO = lower COGS, higher income, higher and more current inventory. Reverse if costs fall.",
      "IFRS prohibits LIFO; the LIFO reserve is what makes a US filer comparable.",
      "Depreciation method changes the TIMING of expense, never the total.",
      "DDB front-loads expense, lowering early income and raising later income.",
      "Capitalising rather than expensing raises profit, assets and reported operating cash flow at once.",
    ],
  },

  {
    id: "cfa-l1-fra-ratios",
    examSlug: "cfa",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    title: "Ratio Analysis and the DuPont Decomposition",
    readingMinutes: 21,
    summary:
      "The four ratio families, how DuPont separates a return on equity into margin, efficiency and leverage, and how earnings manipulation shows up in the numbers.",
    intro:
      "A ratio is a comparison, and a comparison is only as good as what it is compared against. The analytical value is never in the single number — it is in the trend, the peer group, and the decomposition that says WHY the number is what it is.",
    sections: [
      {
        heading: "The four families",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "What each family measures",
              headers: ["Family", "Question", "Examples"],
              rows: [
                ["Liquidity", "Can it pay its bills this year?", "Current, quick, cash ratios"],
                ["Solvency", "Can it survive its debt long term?", "Debt-to-equity, interest coverage"],
                ["Profitability", "Does it earn well on what it uses?", "Margins, ROA, ROE"],
                ["Activity", "How hard do the assets work?", "Inventory, receivables and asset turnover"],
              ],
            },
          },
          {
            kind: "example",
            example: {
              title: "Liquidity: current versus quick",
              prompt:
                "Current assets are $600, of which inventory is $200. Current liabilities are $300. Compute the current and quick ratios and say what the gap means.",
              steps: [
                "Current ratio = $600 / $300 = 2.00.",
                "Quick ratio = ($600 − $200) / $300 = $400 / $300 = 1.33.",
              ],
              answer:
                "2.00 and 1.33. The quick ratio strips out inventory because inventory must be SOLD before it becomes cash, and in a crisis it sells at a discount if at all. A wide gap between the two ratios means the company's apparent liquidity depends heavily on shifting stock — which is precisely what becomes hard exactly when liquidity is needed.",
            },
          },
        ],
      },
      {
        heading: "DuPont: why is ROE what it is?",
        blocks: [
          {
            kind: "p",
            text: "Return on equity alone tells you the level and nothing about the cause. Two companies can post identical ROE, one through fat margins and one through heavy borrowing, and they are not remotely the same investment. DuPont separates them.",
          },
          {
            kind: "formula",
            formula: {
              label: "Three-part DuPont",
              expr: "ROE = (net income / revenue) × (revenue / assets) × (assets / equity)",
              note: "Net profit margin × asset turnover × financial leverage. The middle terms cancel, which is the proof it is an identity.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Decomposing a 30% ROE",
              prompt:
                "Net income $120, revenue $1,500, assets $900, equity $400. Decompose the ROE and check the result.",
              steps: [
                "Net profit margin = 120 / 1,500 = 8.00%.",
                "Asset turnover = 1,500 / 900 = 1.6667.",
                "Financial leverage = 900 / 400 = 2.2500.",
                "Product: 0.0800 × 1.6667 × 2.2500 = 30.00%.",
                "Direct check: ROE = 120 / 400 = 30.00%.",
              ],
              answer:
                "30%, and the two routes agree — they must, because DuPont is an identity, so a mismatch means an arithmetic error. The composition matters more than the level: leverage of 2.25 is doing real work here. Strip it out and the return on ASSETS is 120/900 = 13.3%. An investor should ask whether the extra 16.7 points of ROE is worth the risk that leverage brings.",
            },
          },
          {
            kind: "callout",
            label: "Leverage flatters ROE until it doesn't",
            body: "Financial leverage raises ROE whenever the return on assets exceeds the after-tax cost of debt — and magnifies losses on exactly the same principle when it does not. A high ROE built on leverage is not a quality signal; it is a risk statement. Always look at ROA alongside it.",
          },
        ],
      },
      {
        heading: "Reading for manipulation",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Receivables growing much faster than revenue — sales may be recognised early or made to weak customers.",
              "Inventory growing faster than sales — demand may be softening ahead of a write-down.",
              "Net income rising while CFO stagnates or falls — the classic accrual-quality warning.",
              "Margins that are stable to the decimal point across volatile years — real businesses are noisier.",
              "Frequent one-off charges — a recurring exceptional item is not exceptional.",
              "A change of useful lives, depreciation method or revenue recognition policy in a weak year.",
            ],
          },
          {
            kind: "p",
            text: "Common-size analysis makes these visible. Expressing every income statement line as a percentage of revenue, and every balance sheet line as a percentage of assets, strips out size and lets both trends and peers be compared directly. It is the cheapest analytical technique in the syllabus and among the most revealing.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Quick ratio", def: "(Current assets − inventory) / current liabilities; excludes what must be sold first." },
      { term: "DuPont decomposition", def: "ROE = margin × asset turnover × leverage. An identity, so it must reconcile." },
      { term: "Return on assets", def: "Net income / assets — the leverage-free view of profitability." },
      { term: "Financial leverage ratio", def: "Assets / equity. Raises ROE when ROA exceeds the after-tax cost of debt." },
      { term: "Common-size analysis", def: "Income statement as a % of revenue; balance sheet as a % of assets." },
      { term: "Accrual quality warning", def: "Net income rising while CFO stagnates." },
    ],
    takeaways: [
      "A ratio means nothing without a trend or a peer group to compare against.",
      "The quick ratio strips inventory because inventory must be sold first — and sells worst in a crisis.",
      "DuPont is an identity: if the decomposition doesn't reconcile with direct ROE, the arithmetic is wrong.",
      "Identical ROE can come from margin, efficiency or leverage — and those are different investments.",
      "Always read ROA next to ROE; leverage magnifies losses on the same principle it magnifies gains.",
      "Net income rising while CFO stagnates is the single most reliable manipulation signal.",
      "Common-size analysis is the cheapest technique in the syllabus and among the most revealing.",
    ],
  },
];

export const fraDeepQuestions: Question[] = [];
