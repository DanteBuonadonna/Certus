// ============================================================
// Certus — CFA Level I final gaps: Securitisation, Governance, Tools
//
// WHY THIS FILE EXISTS
// The last three L1 topics still materially short: Fixed Income needed
// securitisation (structured products had no coverage), Corporate Finance
// needed governance and stakeholder analysis, and Portfolio Construction
// needed the tooling readings — technical analysis and fintech.
//
// THE WATERFALL EXAMPLE was run at three different pool losses to show
// that the SAME loss lands completely differently on each tranche. That
// asymmetry is the whole idea of structuring, and it is invisible if you
// only work one number.
// ============================================================

import { Chapter, Question } from "./types";

export const finalChapters: Chapter[] = [
  // ==========================================================
  // FIXED INCOME — SECURITISATION
  // ==========================================================
  {
    id: "cfa-l1-fi-securitisation",
    examSlug: "cfa",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "Securitisation: Tranches, Waterfalls, and Prepayment Risk",
    readingMinutes: 22,
    summary:
      "Why assets are moved into a special purpose entity, how the same pool of loans becomes securities of very different risk, and why a mortgage security's biggest problem is that borrowers repay early.",
    intro:
      "Securitisation takes a pool of illiquid loans and turns it into tradeable securities of differing seniority. The mechanism is worth understanding precisely, because it explains both why the technique is genuinely useful and how it failed so spectacularly in 2008.",
    sections: [
      {
        heading: "The structure and why the SPE matters",
        blocks: [
          {
            kind: "p",
            text: "An originator sells a pool of loans to a SPECIAL PURPOSE ENTITY, which issues securities backed by the pool's cash flows. The sale is the point: once the assets are legally separated, the securities depend on the POOL's performance rather than the originator's, so a strong pool can be financed even by a weak originator.",
          },
          {
            kind: "bullets",
            items: [
              "The originator gets funding, removes assets from its balance sheet, and frees regulatory capital.",
              "Investors get access to asset classes they could not originate, at a chosen seniority.",
              "Borrowers get more credit at lower cost, because the funding pool is wider.",
              "The bankruptcy-remote structure is what makes the credit analysis about the pool, not the seller.",
            ],
          },
          {
            kind: "callout",
            label: "The incentive problem the structure creates",
            body: "An originator that sells every loan it writes no longer bears the consequence of writing a bad one. That misalignment — originate to distribute — is the structural flaw 2008 exposed, and it is why risk-retention rules now require originators to keep a slice. The technique is sound; it needs the originator to have something at stake.",
          },
        ],
      },
      {
        heading: "Tranching: the same pool, different securities",
        blocks: [
          {
            kind: "p",
            text: "Losses are absorbed from the BOTTOM of the capital structure upward, and cash flows are paid from the TOP down. That ordering — the waterfall — is what lets one pool of identical loans produce a senior security that is genuinely safe and a junior one that is genuinely risky.",
          },
          {
            kind: "example",
            example: {
              title: "One pool, three losses, three very different outcomes",
              prompt:
                "A $100M pool is financed with $80M senior (A), $15M mezzanine (B) and $5M equity (C). Trace how pool losses of 3%, 10% and 22% are allocated.",
              steps: [
                "3% loss = $3M: absorbed entirely by C, which loses 60% of its $5M. B and A untouched.",
                "10% loss = $10M: C is wiped out ($5M, 100%), and B absorbs the remaining $5M — 33.3% of its $15M. A untouched.",
                "22% loss = $22M: C and B are both wiped out ($20M), and A absorbs $2M — just 2.5% of its $80M.",
              ],
              answer:
                "The identical pool produces wildly different experiences. A 3% pool loss destroys 60% of the equity tranche and nothing else. A is untouched until losses exceed 20%, which is its attachment point — and even a catastrophic 22% pool loss costs A only 2.5%. That is not financial alchemy: the risk was not removed, it was CONCENTRATED into the junior tranches, which is why they are priced to yield far more.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "Credit enhancement",
              headers: ["Form", "How it protects"],
              rows: [
                ["Subordination", "Junior tranches absorb losses first — the main mechanism"],
                ["Overcollateralisation", "Pool face value exceeds securities issued"],
                ["Excess spread", "Pool interest exceeds what is owed to investors"],
                ["Reserve fund", "Cash set aside at issuance"],
                ["Third-party guarantee", "External insurance; only as good as the guarantor"],
              ],
            },
          },
        ],
      },
      {
        heading: "Prepayment: the risk unique to mortgages",
        blocks: [
          {
            kind: "p",
            text: "A residential mortgage borrower can usually repay early without penalty, and that option belongs to the borrower. It behaves exactly like an embedded call written by the investor, which is why mortgage-backed securities exhibit NEGATIVE CONVEXITY.",
          },
          {
            kind: "bullets",
            items: [
              "Rates FALL → borrowers refinance → principal returns early → the investor reinvests at the new LOW rate. This is contraction risk.",
              "Rates RISE → borrowers stay put → principal returns slowly → the investor is stuck at the old LOW rate. This is extension risk.",
              "Both outcomes hurt, which is the definition of negative convexity — and why MBS yield more than comparable Treasuries.",
              "A collateralised mortgage obligation redistributes prepayment risk across tranches without removing it, letting investors choose their exposure.",
            ],
          },
          {
            kind: "p",
            text: "Agency mortgage-backed securities in the US carry government or government-sponsored credit support, so the analysis is almost entirely about prepayment. Non-agency securities carry credit risk as well, which is why they require the tranching and enhancement described above.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Special purpose entity", def: "Bankruptcy-remote issuer holding the pool; makes credit about the pool, not the seller." },
      { term: "Waterfall", def: "Cash flows paid top-down; losses absorbed bottom-up." },
      { term: "Attachment point", def: "The pool loss level at which a tranche first takes a loss." },
      { term: "Subordination", def: "The principal credit enhancement — junior tranches absorb first." },
      { term: "Contraction risk", def: "Rates fall, prepayments accelerate, principal must be reinvested lower." },
      { term: "Extension risk", def: "Rates rise, prepayments slow, capital stays locked at the old lower rate." },
    ],
    takeaways: [
      "The SPE sale is what makes the credit analysis about the pool rather than the originator.",
      "Originate-to-distribute removes the originator's stake — the structural flaw behind 2008.",
      "Losses flow bottom-up, cash flows top-down; that ordering is the whole technique.",
      "A 3% pool loss cost the equity tranche 60% and the senior tranche nothing.",
      "Tranching concentrates risk rather than removing it — junior yields compensate for that.",
      "Prepayment is a borrower's option, so MBS are negatively convex and both rate directions hurt.",
    ],
  },

  // ==========================================================
  // CORPORATE FINANCE — GOVERNANCE
  // ==========================================================
  {
    id: "cfa-l1-corp-governance",
    examSlug: "cfa",
    topicId: "corp",
    topicName: "Corporate Issuers",
    title: "Corporate Governance, Stakeholders, and ESG",
    readingMinutes: 21,
    summary:
      "Whose interests a company serves, the conflicts that arise between them, the mechanisms that manage those conflicts, and how ESG factors enter an investment analysis.",
    intro:
      "Governance is the system by which a company is directed and controlled, and it exists because the people running a company are not the people who own it. Every mechanism in this reading is an answer to a conflict created by that separation.",
    sections: [
      {
        heading: "Stakeholders and the conflicts between them",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Who has a claim, and what they want",
              headers: ["Stakeholder", "Primary interest"],
              rows: [
                ["Shareholders", "Value of the residual claim; growth"],
                ["Creditors", "Being repaid; they do NOT share the upside"],
                ["Managers and employees", "Compensation, security, career"],
                ["Board", "Oversight on the shareholders' behalf"],
                ["Customers, suppliers, regulators, communities", "Continuity, fair dealing, compliance"],
              ],
            },
          },
          {
            kind: "p",
            text: "The PRINCIPAL-AGENT problem is the root conflict: managers are agents acting for shareholder principals, but they have their own interests, better information, and daily control. That asymmetry lets a manager pursue empire-building, excessive perquisites or risk-avoidance that protects a job at the shareholders' expense.",
          },
          {
            kind: "callout",
            label: "The conflict candidates most often miss",
            body: "Shareholders and CREDITORS conflict directly over risk. Shareholders hold a residual claim with unlimited upside, so extra risk can benefit them; creditors receive a fixed payment and share none of the upside, so extra risk is pure downside. That is exactly why creditors demand covenants restricting additional debt, asset sales and dividends — they are buying protection against the shareholders' incentive.",
          },
        ],
      },
      {
        heading: "The mechanisms",
        blocks: [
          {
            kind: "bullets",
            items: [
              "An independent board with a majority of non-executive directors, and a chair separate from the chief executive.",
              "Audit, remuneration and nomination committees staffed by independent directors.",
              "Compensation aligned to long-term value — equity that vests over years, with clawback provisions.",
              "Shareholder rights: voting, the ability to nominate directors, protection against dilution.",
              "External discipline: auditors, regulators, the market for corporate control, and short sellers.",
            ],
          },
          {
            kind: "p",
            text: "Concentrated ownership changes the problem rather than solving it. A controlling shareholder can discipline management effectively, which is a real benefit — but the conflict shifts to one between the controlling and MINORITY shareholders, who can be expropriated through related-party transactions, transfer pricing or dual-class share structures.",
          },
          {
            kind: "p",
            text: "Weak governance shows up as a valuation discount, higher borrowing costs, and greater tail risk. Strong governance is not a guarantee of performance — it is a reduction in the probability of the specific failures that destroy value suddenly.",
          },
        ],
      },
      {
        heading: "ESG in investment analysis",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Approaches to ESG integration",
              headers: ["Approach", "What it does"],
              rows: [
                ["Negative screening", "Excludes sectors or issuers — the oldest and bluntest method"],
                ["Positive screening / best-in-class", "Selects leaders within each sector"],
                ["ESG integration", "Folds material ESG factors into ordinary financial analysis"],
                ["Thematic investing", "Targets a theme such as clean energy or water"],
                ["Engagement and stewardship", "Uses ownership rights to press for change"],
                ["Impact investing", "Seeks measurable outcomes alongside financial return"],
              ],
            },
          },
          {
            kind: "p",
            text: "The analytically defensible version is MATERIALITY: an ESG factor belongs in a valuation when it plausibly affects cash flows or the discount rate. A carbon-intensive business facing a carbon price has a cash flow problem; a company with chronic safety failures has a liability and a reputational problem. Factors that do not touch either are ethical preferences rather than analysis, and both are legitimate provided the distinction is stated.",
          },
          {
            kind: "bullets",
            items: [
              "ESG data is inconsistent — rating providers disagree substantially on the same company.",
              "Disclosure is voluntary in many jurisdictions and self-reported almost everywhere.",
              "Greenwashing is a live risk, which is why claims should be tested against verifiable actions.",
              "Restricting the investable universe reduces diversification, which has a real cost that should be acknowledged rather than assumed away.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Principal-agent problem", def: "Managers act for shareholders but have their own interests and better information." },
      { term: "Shareholder-creditor conflict", def: "Shareholders benefit from risk; creditors bear it without upside." },
      { term: "Controlling shareholder conflict", def: "Concentrated ownership shifts the problem to minority expropriation." },
      { term: "Clawback", def: "Recovery of paid compensation when results are later restated." },
      { term: "Materiality", def: "The test for whether an ESG factor belongs in a valuation — does it affect cash flows or the discount rate." },
      { term: "Greenwashing", def: "Claims of ESG credentials unsupported by verifiable action." },
    ],
    takeaways: [
      "Governance exists because the people running a company are not the people who own it.",
      "Shareholders and creditors conflict over RISK — that's what covenants are buying.",
      "Concentrated ownership shifts the conflict to minority shareholders rather than removing it.",
      "Weak governance shows up as a valuation discount and greater tail risk.",
      "The defensible ESG test is materiality: does it move cash flows or the discount rate?",
      "ESG ratings disagree substantially, and screening costs diversification — say so rather than assume it away.",
    ],
  },

  // ==========================================================
  // PORTFOLIO CONSTRUCTION — THE TOOLING
  // ==========================================================
  {
    id: "cfa-l1-pm-tools",
    examSlug: "cfa",
    topicId: "pm",
    topicName: "Portfolio Management",
    title: "Technical Analysis, Fintech, and the Tools of the Trade",
    readingMinutes: 21,
    summary:
      "What technical analysis assumes and where it conflicts with market efficiency, plus how machine learning, big data and distributed ledgers are actually used in investment management.",
    intro:
      "Two readings that sit slightly apart from the rest of the syllabus. Technical analysis is examined on what it claims rather than whether it works, and the fintech material is examined on vocabulary and application. Both reward precision over opinion.",
    sections: [
      {
        heading: "Technical analysis: assumptions first",
        blocks: [
          {
            kind: "p",
            text: "Technical analysis studies price and volume to forecast prices. Its three assumptions are that the market discounts everything, that prices move in trends, and that history repeats because human behaviour does. Note immediately that the first assumption sits awkwardly with the third — if prices already reflect everything, past prices should carry no forecasting power.",
          },
          {
            kind: "table",
            table: {
              caption: "Technical against fundamental",
              headers: ["", "Technical", "Fundamental"],
              rows: [
                ["Data used", "Price and volume only", "Financial statements, industry, economy"],
                ["Question asked", "What is the market doing?", "What is this worth?"],
                ["Time frame", "Usually shorter", "Usually longer"],
                ["Data quality", "Observable and reliable", "Reported, and subject to judgement"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The honest position on whether it works",
            body: "Technical analysis directly contradicts WEAK-FORM market efficiency, which holds that past prices carry no exploitable information. The empirical evidence broadly supports weak-form efficiency in developed markets. That said, momentum is a documented and persistent anomaly, and technicals are genuinely useful for EXECUTION — sizing, timing an entry, identifying liquidity — even where they are weak for forecasting. State both halves; the exam rewards the distinction rather than a verdict.",
          },
          {
            kind: "bullets",
            items: [
              "Support and resistance are price levels where buying or selling has repeatedly emerged.",
              "Trend lines connect successive highs or lows; a break is treated as significant.",
              "Moving averages smooth noise; a short average crossing a long one is a common signal.",
              "Relative strength compares one security's performance with another or with an index.",
              "Volume is used to confirm — a move on thin volume is treated as less reliable.",
              "Sentiment indicators such as put-call ratios are used as CONTRARIAN signals at extremes.",
            ],
          },
        ],
      },
      {
        heading: "Fintech in investment management",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "The vocabulary the exam expects",
              headers: ["Term", "Meaning"],
              rows: [
                ["Big data", "Volume, velocity, variety — and veracity, which is the one that bites"],
                ["Machine learning", "Algorithms that learn patterns from data rather than following coded rules"],
                ["Supervised learning", "Trained on labelled inputs and outputs"],
                ["Unsupervised learning", "Finds structure in unlabelled data — clustering, dimension reduction"],
                ["Overfitting", "Modelling noise as though it were signal; the central danger"],
                ["Natural language processing", "Extracting meaning from text — filings, transcripts, news"],
                ["Robo-adviser", "Algorithmic allocation and rebalancing at low cost"],
                ["Distributed ledger", "A shared, cryptographically linked record; no single controlling copy"],
              ],
            },
          },
          {
            kind: "p",
            text: "Overfitting is the concept most worth understanding, because it is the failure mode that looks like success. A model tuned until it explains historical data almost perfectly has usually learned that data's noise, and noise does not repeat. The defence is holding out data the model never saw and testing on that — and being suspicious of any backtest that looks too good.",
          },
          {
            kind: "bullets",
            items: [
              "Alternative data — satellite imagery, card transactions, web traffic — can front-run reported figures, but raises real privacy and material-nonpublic-information questions.",
              "Distributed ledgers offer settlement without a central intermediary; the constraints are throughput, energy use and regulatory treatment.",
              "Smart contracts execute automatically when conditions are met, removing settlement discretion.",
              "Algorithmic trading lowers cost and improves execution, and contributes to flash events when many algorithms withdraw at once.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Technical analysis assumptions", def: "Market discounts everything; prices trend; history repeats." },
      { term: "Support and resistance", def: "Levels where buying or selling has repeatedly appeared." },
      { term: "Contrarian sentiment indicator", def: "Read against the crowd at extremes." },
      { term: "Overfitting", def: "Learning noise as signal — the failure mode that looks like success." },
      { term: "Supervised vs unsupervised", def: "Labelled outputs vs finding structure in unlabelled data." },
      { term: "Alternative data", def: "Non-traditional sources; raises privacy and MNPI questions." },
    ],
    takeaways: [
      "Technical analysis's first and third assumptions sit awkwardly together.",
      "It contradicts weak-form efficiency, which the evidence broadly supports.",
      "It remains genuinely useful for execution even where it is weak for forecasting — state both halves.",
      "Sentiment extremes are read contrarily, not as confirmation.",
      "Overfitting is the central machine-learning danger because it looks like success.",
      "Hold out data the model never saw; distrust a backtest that looks too good.",
      "Alternative data can front-run reported figures and raises MNPI questions under Standard II(A).",
    ],
  },
];

export const finalQuestions: Question[] = [];
