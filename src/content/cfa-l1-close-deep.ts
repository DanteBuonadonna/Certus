// ============================================================
// Certus — CFA Level I closing gaps: EPS, macro policy, repo, private co.
//
// WHY THIS FILE EXISTS
// The last four L1 topics still short by 24-32 minutes each. Each chapter
// targets what that syllabus area was still missing outright rather than
// padding what already exists.
//
// THE ANTIDILUTIVE CHECK in the EPS example is the reason to compute
// rather than assert: the convertible preferred RAISES diluted EPS from
// $2.2330 to $2.2624, so it must be EXCLUDED. Every number here was run
// in Python, and that one only reveals itself when you actually do it.
// ============================================================

import { Chapter, Question } from "./types";

export const closeChapters: Chapter[] = [
  // ==========================================================
  // FRA — REVENUE AND EPS
  // ==========================================================
  {
    id: "cfa-l1-fra-revenue-eps",
    examSlug: "cfa",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    title: "Revenue Recognition and Earnings Per Share",
    readingMinutes: 24,
    summary:
      "The five-step revenue model and where judgement enters it, then basic and diluted EPS computed properly — including the antidilution test that decides what to leave out.",
    intro:
      "Revenue is the top line and the most manipulated number in the accounts; EPS is the bottom line and the most quoted. Both are governed by rules precise enough to examine and loose enough to bend, which is exactly why they appear so often.",
    sections: [
      {
        heading: "The five-step revenue model",
        blocks: [
          {
            kind: "bullets",
            items: [
              "1. Identify the contract with the customer.",
              "2. Identify the separate performance obligations in it.",
              "3. Determine the transaction price.",
              "4. Allocate that price across the obligations, by relative standalone selling price.",
              "5. Recognise revenue as each obligation is SATISFIED — when control transfers.",
            ],
          },
          {
            kind: "p",
            text: "The governing idea is CONTROL, not delivery and not payment. Revenue is earned when the customer obtains control of the good or service, which may be at a point in time or progressively over a period. A subscription satisfies its obligation continuously; a machine sale satisfies it at handover; a machine sale bundled with three years of servicing has two obligations recognised on different schedules.",
          },
          {
            kind: "callout",
            label: "Where the judgement — and the manipulation — lives",
            body: "Steps 2 and 4 are where earnings are made. Splitting a bundle into more obligations, or allocating more of the price to the one satisfied earliest, pulls revenue forward without breaking any rule. Also examinable: reporting GROSS as a principal versus NET as an agent changes revenue enormously while leaving profit identical — which is why a platform's revenue figure needs that question asked before it means anything.",
          },
        ],
      },
      {
        heading: "Basic and diluted EPS",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Basic EPS",
              expr: "basic EPS = (net income − preferred dividends) / weighted average common shares",
              note: "Preferred dividends are subtracted because they are not available to common. Shares are WEIGHTED by the fraction of the year outstanding.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Diluted EPS, and the security you must exclude",
              prompt:
                "Net income $5,000,000, preferred dividends $400,000, weighted average shares 2,000,000. There are 300,000 options at a $20 strike with an average market price of $25, and the preferred is convertible into 150,000 shares. Compute basic and diluted EPS.",
              steps: [
                "Basic = ($5,000,000 − $400,000) / 2,000,000 = $2.3000.",
                "Treasury stock method: 300,000 × $20 = $6,000,000 of proceeds, which repurchases $6,000,000 / $25 = 240,000 shares. Incremental shares = 300,000 − 240,000 = 60,000.",
                "With options only: $4,600,000 / 2,060,000 = $2.2330.",
                "Now test the convertible preferred: add back the $400,000 dividend and 150,000 shares → $5,000,000 / 2,210,000 = $2.2624.",
              ],
              answer:
                "Basic $2.3000, diluted $2.2330. The convertible preferred is EXCLUDED, because including it RAISES EPS from $2.2330 to $2.2624 — it is antidilutive. Diluted EPS reports the worst case, so any security that would improve the figure is left out. That test is the entire difficulty of these questions, and it only shows up if you actually compute it rather than assuming every convertible dilutes.",
            },
          },
          {
            kind: "bullets",
            items: [
              "The treasury stock method assumes option proceeds are used to buy back shares at the AVERAGE market price.",
              "Options are dilutive only when the market price exceeds the strike — out-of-the-money options add nothing.",
              "The if-converted method is used for convertible bonds: add back after-tax interest, add the shares.",
              "Test each potentially dilutive security separately, and include only those that reduce EPS.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Control", def: "The trigger for revenue recognition — not delivery, not payment." },
      { term: "Performance obligation", def: "A distinct promise in a contract; the unit revenue is recognised against." },
      { term: "Principal vs agent", def: "Gross vs net revenue reporting; profit is identical, revenue is not." },
      { term: "Treasury stock method", def: "Option proceeds repurchase shares at the average market price." },
      { term: "Antidilutive", def: "A security that would RAISE diluted EPS; it must be excluded." },
      { term: "If-converted method", def: "For convertibles: add back after-tax interest and the shares." },
    ],
    takeaways: [
      "Revenue turns on control transferring, not on delivery or cash.",
      "Steps 2 and 4 are where judgement — and manipulation — live.",
      "Principal vs agent changes revenue enormously and profit not at all.",
      "Diluted EPS reports the worst case, so antidilutive securities are excluded.",
      "Test each security separately; a convertible does not automatically dilute.",
      "Out-of-the-money options add no incremental shares.",
    ],
  },

  // ==========================================================
  // ECONOMICS — AGGREGATE DEMAND AND POLICY
  // ==========================================================
  {
    id: "cfa-l1-econ-macro-policy",
    examSlug: "cfa",
    topicId: "econ",
    topicName: "Economics",
    title: "Aggregate Supply and Demand, and the Limits of Policy",
    readingMinutes: 24,
    summary:
      "What shifts aggregate demand and supply, why the spending and tax multipliers differ, how monetary transmission actually works, and where each policy lever stops being effective.",
    intro:
      "Macro policy questions at Level I are directional: which curve moves, which way, and what happens to output and prices. Getting the sign right is most of the mark, and the tax multiplier is where signs most often go wrong.",
    sections: [
      {
        heading: "The two curves",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "What shifts each curve",
              headers: ["Curve", "Shifts right when", "Shifts left when"],
              rows: [
                ["Aggregate demand", "Consumption, investment, government spending or net exports rise", "Any of those fall; taxes rise"],
                ["Short-run aggregate supply", "Input costs fall; productivity rises", "Input costs rise — an oil shock"],
                ["Long-run aggregate supply", "Labour, capital or technology grows", "Those shrink"],
              ],
            },
          },
          {
            kind: "p",
            text: "The distinction that carries the marks: a demand shift moves output and prices in the SAME direction, while a supply shift moves them in OPPOSITE directions. That is why a negative supply shock produces stagflation — falling output with rising prices — and why it is so awkward for policymakers. Any response that supports output worsens inflation, and any response that fights inflation deepens the contraction.",
          },
        ],
      },
      {
        heading: "The multipliers, and why they differ",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Spending and tax multipliers",
              expr: "spending multiplier = 1 / (1 − MPC)          tax multiplier = − MPC / (1 − MPC)",
              note: "The tax multiplier is SMALLER in absolute value, and negative.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Why a tax cut buys less than spending",
              prompt:
                "With an MPC of 0.80, compare $100 million of government spending against a $100 million tax cut.",
              steps: [
                "Spending multiplier = 1 / (1 − 0.80) = 5.00, so $100M × 5 = $500M.",
                "Tax multiplier = −0.80 / 0.20 = −4.00, so a $100M cut adds $100M × 4 = $400M.",
              ],
              answer:
                "$500M against $400M. The difference is one round of spending: government spending enters the economy in full immediately, whereas a tax cut first passes through households, who save 20% of it. The gap is exactly the amount saved on that first pass, and it is the reason spending programmes are more stimulative per dollar than tax cuts — while being slower to enact and harder to reverse.",
            },
          },
        ],
      },
      {
        heading: "Where each lever stops working",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Monetary transmission runs through interest rates, asset prices, credit availability and the exchange rate. Each channel can be blocked independently.",
              "At very low rates policy loses traction — cutting further does little when the constraint is willingness to borrow rather than the price of borrowing.",
              "Crowding out: government borrowing raises rates and displaces private investment, muting the fiscal multiplier.",
              "Ricardian equivalence argues households save a deficit-financed tax cut in anticipation of future taxes, muting it further. The empirical evidence is mixed rather than decisive.",
              "Both levers face LAGS — recognition, decision and impact — which is why policy can arrive procyclically and worsen the cycle it was meant to smooth.",
            ],
          },
          {
            kind: "callout",
            label: "The distinction the exam wants",
            body: "A budget deficit that grows in a recession is not automatically stimulative policy. Automatic stabilisers — unemployment benefits rising, tax receipts falling — widen the deficit with no decision taken. Only the STRUCTURAL (cyclically adjusted) deficit reflects a deliberate policy stance. Reading a headline deficit as intent is the standard error.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Demand shift", def: "Moves output and prices in the SAME direction." },
      { term: "Supply shift", def: "Moves output and prices in OPPOSITE directions — hence stagflation." },
      { term: "Tax multiplier", def: "−MPC/(1 − MPC); smaller in absolute value than the spending multiplier." },
      { term: "Crowding out", def: "Government borrowing raising rates and displacing private investment." },
      { term: "Automatic stabiliser", def: "Deficit widening in a downturn with no decision taken." },
      { term: "Structural deficit", def: "The cyclically adjusted balance — the actual policy stance." },
    ],
    takeaways: [
      "Demand shifts move output and prices together; supply shifts move them apart.",
      "Stagflation is awkward because every response worsens one half of it.",
      "$100M of spending beat a $100M tax cut by exactly the amount households saved on the first pass.",
      "Monetary policy loses traction when the constraint is willingness to borrow, not its price.",
      "Lags mean policy can arrive procyclically and amplify the cycle.",
      "Only the structural deficit reflects deliberate policy — the headline number includes stabilisers.",
    ],
  },

  // ==========================================================
  // FIXED INCOME — MONEY MARKETS AND REPO
  // ==========================================================
  {
    id: "cfa-l1-fi-money-markets",
    examSlug: "cfa",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "Money Markets, Repo, and Short-Term Funding",
    readingMinutes: 24,
    summary:
      "The instruments that fund the financial system day to day, how a repurchase agreement is priced and collateralised, and why short-term funding is where crises start.",
    intro:
      "The money market is where banks, dealers and corporates fund themselves overnight and out to a year. It is unglamorous and it is the plumbing — which is precisely why its failures propagate faster than anything in the long end.",
    sections: [
      {
        heading: "The instruments",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Short-term instruments",
              headers: ["Instrument", "Issuer", "Character"],
              rows: [
                ["Treasury bill", "Sovereign", "Discount instrument; the benchmark risk-free rate"],
                ["Commercial paper", "Corporate", "Unsecured; usually rolled, which is the risk"],
                ["Certificate of deposit", "Bank", "Negotiable; may be sold before maturity"],
                ["Banker's acceptance", "Bank-guaranteed", "Trade finance; the bank stands behind it"],
                ["Repurchase agreement", "Dealers, banks", "Collateralised borrowing"],
              ],
            },
          },
          {
            kind: "p",
            text: "Commercial paper carries a specific structural risk worth naming: it is almost always ROLLED rather than repaid, so an issuer depends on being able to reissue every few weeks. A borrower who is solvent but temporarily unable to roll can fail anyway, which is why CP programmes are backed by committed bank lines.",
          },
        ],
      },
      {
        heading: "Repo, worked",
        blocks: [
          {
            kind: "p",
            text: "A repurchase agreement is a collateralised loan dressed as a sale: securities are sold today with a binding agreement to repurchase them shortly at a higher price. The difference is interest, and the collateral is what makes the rate low.",
          },
          {
            kind: "example",
            example: {
              title: "Pricing a 30-day repo",
              prompt:
                "A dealer pledges $10,000,000 of collateral and receives $9,800,000 of cash for 30 days at a 4.5% repo rate. Find the haircut and the repurchase price.",
              steps: [
                "Haircut = ($10,000,000 − $9,800,000) / $10,000,000 = 2.0%.",
                "Interest = $9,800,000 × 4.5% × 30/360 = $36,750.",
                "Repurchase price = $9,800,000 + $36,750 = $9,836,750.",
              ],
              answer:
                "A 2% haircut and a repurchase price of $9,836,750. The haircut is the lender's protection: it can absorb a 2% fall in collateral value before being under-secured. Note the 360-day convention — money markets use it almost universally, and using 365 is a reliable way to get the answer slightly wrong.",
            },
          },
          {
            kind: "callout",
            label: "How a haircut becomes a crisis",
            body: "Repo rates and haircuts move with perceived collateral quality. When lenders doubt the collateral they raise the haircut, and a borrower financing $10,000,000 of assets at a 2% haircut needs $200,000 of its own capital — but at a 20% haircut needs $2,000,000. The borrower must either find ten times the capital overnight or sell assets, and forced selling depresses the collateral further. That feedback loop, not credit losses directly, is how 2008 moved as fast as it did.",
          },
          {
            kind: "bullets",
            items: [
              "Repo rates fall with higher collateral quality, shorter term, and greater collateral scarcity.",
              "A reverse repo is the same transaction seen from the lender's side.",
              "Central banks use repo and reverse repo as their primary tool for steering short-term rates.",
              "General collateral trades at a standard rate; a specific security in demand trades \"special\" at a lower rate.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Rollover risk", def: "Dependence on reissuing maturing short-term paper; solvency is not enough." },
      { term: "Haircut", def: "Collateral value above cash lent; the lender's buffer." },
      { term: "Repurchase price", def: "Cash borrowed plus repo interest on a 360-day convention." },
      { term: "Reverse repo", def: "The same trade from the cash lender's perspective." },
      { term: "On special", def: "A security in such demand that its repo rate falls below general collateral." },
    ],
    takeaways: [
      "Commercial paper is rolled, not repaid — solvency does not guarantee survival.",
      "Repo is a collateralised loan; the haircut is the lender's buffer.",
      "Money markets use a 360-day convention almost universally.",
      "A haircut rising from 2% to 20% multiplies the borrower's capital need tenfold overnight.",
      "That funding feedback loop, more than credit losses directly, is how 2008 moved so fast.",
    ],
  },

  // ==========================================================
  // EQUITY — PRIVATE COMPANY VALUATION
  // ==========================================================
  {
    id: "cfa-l1-equity-private",
    examSlug: "cfa",
    topicId: "equity",
    topicName: "Equity Investments",
    title: "Valuing a Private Company: Discounts, Control, and Marketability",
    readingMinutes: 24,
    summary:
      "Why a private company is worth less than an identical public one, how control and marketability discounts compound rather than add, and which valuation approach suits which situation.",
    intro:
      "A private company with identical cash flows to a listed peer is worth measurably less, and the reasons are specific rather than vague. Quantifying them is the examinable skill, and the arithmetic contains a trap worth meeting once.",
    sections: [
      {
        heading: "Why private is worth less",
        blocks: [
          {
            kind: "bullets",
            items: [
              "No ready market — selling takes months and may fail entirely.",
              "Less disclosure, so a buyer bears more uncertainty and prices for it.",
              "Concentrated ownership, so a minority holder may be unable to influence anything.",
              "Often key-person dependent, with the owner as the business's principal asset.",
              "Less liquid capital access, raising the cost of funding growth.",
            ],
          },
          {
            kind: "p",
            text: "Two adjustments capture most of it. A DISCOUNT FOR LACK OF CONTROL applies to a minority stake that cannot direct the business. A DISCOUNT FOR LACK OF MARKETABILITY applies because the interest cannot readily be sold. They address different problems, so both can apply to the same stake.",
          },
          {
            kind: "example",
            example: {
              title: "The discounts compound — they do not add",
              prompt:
                "A controlling, marketable interest is valued at $100. Apply a 15% discount for lack of control and a 20% discount for lack of marketability.",
              steps: [
                "After DLOC: $100 × (1 − 0.15) = $85.00.",
                "After DLOM: $85.00 × (1 − 0.20) = $68.00.",
              ],
              answer:
                "$68.00 — a total discount of 32%, NOT the 35% you get by adding 15% and 20%. The second discount applies to the already-reduced value, so they compound multiplicatively. Adding them is the standard error and it overstates the discount every time; the effect grows with the size of the discounts.",
            },
          },
          {
            kind: "callout",
            label: "Order does not matter, but the base does",
            body: "Applying DLOM first and DLOC second gives the same $68.00, because multiplication commutes. What matters is that each discount is applied to the running value rather than both to the original — and that you know which starting value you have. Discounts are only meaningful relative to a stated basis: controlling-marketable, minority-marketable, or minority-non-marketable.",
          },
        ],
      },
      {
        heading: "Choosing an approach",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Three approaches to a private company",
              headers: ["Approach", "Best suited to", "Main difficulty"],
              rows: [
                ["Income (discounted cash flow)", "A going concern with forecastable cash flows", "Estimating a discount rate with no observable beta"],
                ["Market (comparable transactions)", "Where similar private deals exist", "Finding truly comparable transactions"],
                ["Asset-based", "Holding companies and distressed situations", "Ignores earning power entirely"],
              ],
            },
          },
          {
            kind: "p",
            text: "The income approach hits a specific problem: a private company has no traded shares, so it has no observable beta. The standard workaround is to take a listed peer's beta, unlever it to strip out the peer's capital structure, then relever it to the private company's own — which imports the peer's business risk while adjusting for the different financing.",
          },
          {
            kind: "bullets",
            items: [
              "Private company earnings usually need NORMALISING: removing owner compensation above market, personal expenses, and one-off items.",
              "A build-up method adds a small-company premium and a company-specific premium to the risk-free rate where no usable peer exists.",
              "The purpose of the valuation changes the answer — a tax valuation, a divorce settlement and an acquisition price legitimately differ.",
              "Transaction comparables already embed a control premium, so applying DLOC on top double-counts.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "DLOC", def: "Discount for lack of control — applies to a minority stake." },
      { term: "DLOM", def: "Discount for lack of marketability — applies because it cannot readily be sold." },
      { term: "Compounding discounts", def: "15% and 20% give 32%, not 35%." },
      { term: "Normalising earnings", def: "Removing owner compensation, personal expenses and one-offs." },
      { term: "Unlever and relever beta", def: "Import a peer's business risk while adjusting for capital structure." },
      { term: "Build-up method", def: "Risk-free rate plus size and company-specific premiums." },
    ],
    takeaways: [
      "Private companies are worth less for specific, nameable reasons — not vaguely.",
      "DLOC and DLOM address different problems and can both apply.",
      "Discounts compound: 15% and 20% give 32%, not 35%. Adding them overstates every time.",
      "A discount means nothing without a stated basis for the starting value.",
      "No traded shares means no beta — unlever and relever a peer's.",
      "Normalise owner compensation before valuing private earnings.",
      "Transaction comparables already embed a control premium; applying DLOC again double-counts.",
    ],
  },
];

export const closeQuestions: Question[] = [];
