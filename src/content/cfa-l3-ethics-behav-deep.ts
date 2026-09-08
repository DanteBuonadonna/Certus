// ============================================================
// Certus — CFA Level III: applied ethics, GIPS, and behavioural finance
//
// WHY THIS FILE EXISTS
// L3 ethics had 21 minutes and behavioural 30, against topics that each
// carry real exam weight. At Level III both are examined as APPLICATION —
// a fact pattern and a decision — rather than as definitions.
//
// THE CALCULATION WORTH THE FILE: time-weighted and money-weighted return
// computed on the SAME account, giving +3.13% and 0.00%. That gap is the
// entire reason GIPS mandates time-weighted returns, and it is invisible
// until you compute both. The IRR was solved by bisection and verified by
// confirming NPV at that rate is zero.
// ============================================================

import { Chapter, Question } from "./types";

export const l3EthicsBehavChapters: Chapter[] = [
  {
    id: "cfa-l3-gips-performance",
    examSlug: "cfa-l3",
    topicId: "pm-perf",
    topicName: "Performance Evaluation",
    title: "GIPS and the Two Return Measures That Disagree",
    readingMinutes: 24,
    summary:
      "Why time-weighted and money-weighted returns give different answers on the same account, which one GIPS requires and why, and what composite construction is actually defending against.",
    intro:
      "Performance reporting looks like arithmetic and is really about accountability: which results should a manager be held responsible for. Answer that and the choice between the two return measures — and the whole architecture of GIPS — follows.",
    sections: [
      {
        heading: "The same account, two answers",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "The two measures",
              expr: "TWR = (1 + r₁)(1 + r₂)…(1 + rₙ) − 1          MWR = the IRR of the account's cash flows",
              note: "TWR chain-links sub-period returns and is unaffected by the SIZE and TIMING of client flows. MWR is not.",
            },
          },
          {
            kind: "example",
            example: {
              title: "A 3.13% gap created entirely by a client's deposit",
              prompt:
                "An account starts at $100 and grows to $110 in period one. The client then contributes $50, taking it to $160. In period two it falls to $150. Compute both the time-weighted and money-weighted return.",
              steps: [
                "Period one return: (110 − 100) / 100 = +10.00%.",
                "Period two return: (150 − 160) / 160 = −6.25%.",
                "TWR = (1.10)(0.9375) − 1 = +3.13%.",
                "MWR: solve for the rate where −100 − 50/(1+r) + 150/(1+r)² = 0. That rate is 0.00%.",
              ],
              answer:
                "The manager returned +3.13% time-weighted and the client experienced 0.00% money-weighted. Neither figure is wrong. The difference is entirely that the client's $50 arrived just before the losing period, so more money was exposed to the loss than to the gain — a decision the CLIENT made. TWR removes that; MWR includes it.",
            },
          },
          {
            kind: "callout",
            label: "Which one, and when",
            body: "GIPS requires TIME-WEIGHTED returns for composites, because a manager should be judged on the decisions they controlled and not on when a client happened to deposit. MWR is the right measure when the manager DOES control the flows — private equity capital calls, for instance — or when reporting to a client what their own money actually earned. Both belong in a client report; only one belongs in a composite.",
          },
        ],
      },
      {
        heading: "What composites are defending against",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Every fee-paying discretionary portfolio must be in at least one composite — this is what defeats cherry-picking.",
              "Terminated portfolios stay in for the periods they were managed — this defeats survivorship bias.",
              "Composites group by strategy or objective, defined in advance rather than after the results are known.",
              "New portfolios are added on a timely and consistent basis, per a stated policy.",
              "Compliance is FIRM-WIDE; there is no such thing as a compliant composite inside a non-compliant firm.",
              "At least five years of history initially, building to ten.",
            ],
          },
          {
            kind: "p",
            text: "Read that list as a set of answers to specific frauds. Every requirement exists because someone once did the opposite: showed only the accounts that did well, quietly dropped the ones that failed, defined the composite after seeing the numbers, or claimed compliance for one product while the rest of the firm reported however it liked.",
          },
          {
            kind: "bullets",
            items: [
              "Verification is by an independent third party, is FIRM-WIDE, and is recommended rather than required.",
              "A firm may not claim partial compliance, and the compliance statement is prescribed wording.",
              "Fees: composites must present gross-of-fees or net-of-fees returns with the basis disclosed; both are permitted, ambiguity is not.",
              "Actual fees rather than model fees are required in most cases when presenting net returns.",
            ],
          },
        ],
      },
      {
        heading: "Ethics applied at portfolio level",
        blocks: [
          {
            kind: "p",
            text: "Level III tests the Standards inside portfolio decisions rather than as isolated scenarios. The recurring patterns are worth naming because they repeat across fact patterns.",
          },
          {
            kind: "table",
            table: {
              caption: "The Level III patterns",
              headers: ["Fact pattern", "Standard engaged"],
              rows: [
                ["Manager allocates a hot IPO unevenly across clients", "III(B) Fair Dealing"],
                ["Recommendation fits the mandate but not this client's IPS", "III(C) Suitability"],
                ["Composite excludes a poor-performing account", "III(D) Performance Presentation"],
                ["Directing trades to a broker who supplies client referrals", "III(A) Loyalty, Prudence, and Care"],
                ["Adopting a strategy the committee cannot monitor", "V(A) Diligence and Reasonable Basis"],
                ["Backtested results presented without labelling", "I(C) Misrepresentation"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The governance-capacity test",
            body: "A recurring Level III answer is that a strategy should be REJECTED because the institution cannot oversee it — regardless of expected return. Diligence under Standard V(A) requires understanding what you recommend, and an investment committee that cannot monitor a strategy has not met that bar by delegating it. Complexity the client cannot govern is a reason to decline, not a reason to add a disclosure.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Time-weighted return", def: "Chain-linked sub-period returns; immune to client flow timing. Required by GIPS." },
      { term: "Money-weighted return", def: "The IRR of actual cash flows; what the client's money earned." },
      { term: "Composite", def: "All portfolios in a strategy, defined in advance." },
      { term: "Firm-wide compliance", def: "No partial or composite-level GIPS claim is permitted." },
      { term: "Verification", def: "Independent, firm-wide, recommended not required." },
      { term: "Governance capacity", def: "Inability to oversee a strategy is a reason to decline it." },
    ],
    takeaways: [
      "The same account returned +3.13% time-weighted and 0.00% money-weighted.",
      "The gap was created entirely by when the CLIENT deposited — which is why GIPS uses TWR.",
      "MWR is right where the manager controls the flows, as in private capital.",
      "Every GIPS rule is an answer to a specific past fraud — read it that way.",
      "Compliance is firm-wide; a compliant composite inside a non-compliant firm does not exist.",
      "A strategy the committee cannot monitor should be declined, not disclosed.",
    ],
  },

  {
    id: "cfa-l3-behavioral-applied",
    examSlug: "cfa-l3",
    topicId: "behavioral",
    topicName: "Behavioral Finance",
    title: "Behavioural Finance Applied: Diagnosing the Client and Adapting the Plan",
    readingMinutes: 22,
    summary:
      "Separating cognitive errors from emotional biases, why that determines whether to correct or accommodate, the cost of the biases in basis points, and how to build a plan a client will actually keep.",
    intro:
      "Behavioural finance at Level III is not a catalogue of biases. It is a decision procedure: identify what kind of bias you are facing, decide whether to moderate or adapt to it, and construct a portfolio the client will still hold after a 25% drawdown.",
    sections: [
      {
        heading: "Cognitive or emotional decides the response",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "The split that determines the advice",
              headers: ["Type", "Source", "Response", "Examples"],
              rows: [
                ["Cognitive error", "Faulty reasoning or information processing", "MODERATE — educate, add structure, show data", "Anchoring, availability, conservatism, framing, mental accounting"],
                ["Emotional bias", "Feeling and impulse", "ADAPT — build the plan around it", "Loss aversion, overconfidence, regret aversion, endowment, status quo"],
              ],
            },
          },
          {
            kind: "p",
            text: "The reason the split matters is practical rather than academic. A cognitive error yields to better information — show a client the historical data and anchoring loosens. An emotional bias does not: telling a loss-averse client that their fear is statistically unfounded does not remove the fear, and a portfolio that ignores it will be abandoned at the worst moment.",
          },
          {
            kind: "callout",
            label: "When to adapt rather than correct",
            body: "Adapt where the client's wealth is large relative to their needs, where the bias is emotional, and where the cost of the deviation is modest. Correct where the standard of living is at risk, where the bias is cognitive, and where the deviation is expensive. The judgement is a cost-benefit one: a slightly suboptimal portfolio the client holds through a crash beats an optimal one they sell at the bottom.",
          },
        ],
      },
      {
        heading: "What the biases actually cost",
        blocks: [
          {
            kind: "example",
            example: {
              title: "Overconfidence, priced",
              prompt:
                "An overconfident investor turns the portfolio over 180% a year with round-trip transaction costs of 0.60%. What does that cost against an 8% gross return?",
              steps: [
                "Annual drag = 180% × 0.60% = 1.08%.",
                "As a share of the gross return = 1.08% / 8.00%.",
              ],
              answer:
                "1.08 percentage points a year — 14% of the gross return, before any tax consequence. Add the accelerated capital gains from that turnover and the figure roughly doubles for a taxable investor. Overconfidence is not an abstract failing; it has a price, and putting the number in front of a client is more persuasive than describing the bias.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Loss aversion: losses are felt roughly twice as heavily as equivalent gains, so a fair coin flip needs about a 2:1 payoff to feel acceptable.",
              "The disposition effect follows: sell winners, hold losers — wrong for tax and wrong for momentum.",
              "Availability makes recent and vivid events feel more probable, which is why allocations shift after crashes rather than before them.",
              "Regret aversion produces herding and inaction, and it is why committees prefer defensible decisions to good ones.",
              "Home bias is mental accounting plus familiarity, and it is one of the most expensive biases in a global portfolio.",
            ],
          },
        ],
      },
      {
        heading: "Building a plan the client keeps",
        blocks: [
          {
            kind: "bullets",
            items: [
              "GOALS-BASED sub-portfolios use mental accounting productively — essential needs funded conservatively, aspirational goals funded with risk.",
              "Write the rebalancing policy in advance, when nobody is frightened, and make it mechanical.",
              "Pre-commitment beats willpower: an IPS signed in calm conditions is a defence against decisions made in panic.",
              "Report against the client's OWN goals rather than a market index, which removes the comparison that drives regret.",
              "Frame outcomes in terms of goal achievement rather than relative performance.",
            ],
          },
          {
            kind: "p",
            text: "Behavioural biases also operate on the ADVISER. Overconfidence in forecasts, confirmation in research, and the availability of recent client conversations all affect professional judgement. A process with written criteria, pre-mortems and documented rationale is a defence against the adviser's own biases as much as the client's — and the exam expects that point to be made rather than assumed.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Cognitive error", def: "A reasoning fault; MODERATE it with education and structure." },
      { term: "Emotional bias", def: "Feeling-driven; ADAPT the plan around it." },
      { term: "Adapt vs moderate", def: "Adapt when wealth is ample and the bias emotional; correct when standard of living is at risk." },
      { term: "Disposition effect", def: "Selling winners and holding losers." },
      { term: "Goals-based sub-portfolios", def: "Mental accounting used productively." },
      { term: "Pre-commitment", def: "A policy written in calm conditions, defending against panic decisions." },
    ],
    takeaways: [
      "Cognitive errors respond to information; emotional biases do not.",
      "Adapt where wealth is ample and the bias emotional; correct where the standard of living is at risk.",
      "180% turnover at 0.60% costs 1.08% a year — 14% of an 8% gross return, before tax.",
      "Losses weigh about twice gains, which is why a fair bet needs 2:1 to feel fair.",
      "A slightly suboptimal portfolio a client holds beats an optimal one they abandon.",
      "Report against the client's goals, not an index — that removes the regret trigger.",
      "The adviser has biases too; process is the defence against both.",
    ],
  },
];

export const l3EthicsBehavQuestions: Question[] = [];
