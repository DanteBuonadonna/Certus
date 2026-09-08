// ============================================================
// Certus — Series 66 in depth: registration, fiduciary duty, suitability
//
// WHY THIS FILE EXISTS
// Series 66 had the second-worst reading-to-question ratio in the
// portfolio: 1,116 questions against 150 minutes of reading (13.4 minutes
// per 100 questions). Laws and Regulations alone is 45% of the exam — 45
// of 100 scored questions — and it is where candidates who study by
// interest rather than by blueprint consistently underprepare.
//
// EVERY NUMBER COMPUTED IN PYTHON FIRST. The registration thresholds and
// the retirement-gap arithmetic were both worked before writing.
// ============================================================

import { Chapter, Question } from "./types";

export const s66Deep2Chapters: Chapter[] = [
  {
    id: "s66-registration-deep",
    examSlug: "series-66",
    topicId: "laws",
    topicName: "Laws, Regulations, and Guidelines",
    title: "Who Registers Where: Advisers, Representatives, and the Exclusions",
    readingMinutes: 24,
    summary:
      "The definition that decides everything, the AUM thresholds that split state from federal registration, the exclusions and exemptions, and why the distinction between them matters.",
    intro:
      "Laws and Regulations is 45 of the 100 scored questions — nearly half the exam. Most of those turn on a single question asked in different costumes: is this person an investment adviser, and if so, who registers them?",
    sections: [
      {
        heading: "The three-part test",
        blocks: [
          {
            kind: "p",
            text: "A person is an INVESTMENT ADVISER if they meet all three prongs: they provide ADVICE about securities, they are in the BUSINESS of doing so, and they receive COMPENSATION for it. Fail any one prong and the definition does not attach.",
          },
          {
            kind: "bullets",
            items: [
              "ADVICE about securities — general economic commentary is not advice about securities; a recommendation to buy a particular fund is.",
              "BUSINESS — it need not be the primary business, only a regular part of it. Occasional and incidental is different from regular.",
              "COMPENSATION — need not be a separate fee. A commission, a bundled charge, or any economic benefit counts.",
            ],
          },
          {
            kind: "callout",
            label: "Exclusion and exemption are not the same word",
            body: "An EXCLUSION means the person is not an investment adviser at all — the definition never applied. An EXEMPTION means they ARE an adviser but do not have to register. The exam uses both terms deliberately, and an answer that says \"exempt\" where the correct concept is \"excluded\" is wrong even when the practical outcome looks similar.",
          },
          {
            kind: "table",
            table: {
              caption: "The main exclusions — LATE plus three",
              headers: ["Excluded", "Condition"],
              rows: [
                ["Lawyers, Accountants, Teachers, Engineers", "Advice must be incidental AND no separate compensation for it"],
                ["Broker-dealers and their representatives", "Advice incidental to brokerage AND no special compensation"],
                ["Banks and bank holding companies", "Excluded at federal level; state treatment varies"],
                ["Publishers", "Bona fide, regular circulation, general and impersonal content"],
                ["Government securities advisers", "Advice limited to US government securities"],
              ],
            },
          },
          {
            kind: "p",
            text: "The LATE exclusion turns on TWO conditions, and candidates routinely remember only the first. An accountant who advises on securities incidentally to preparing tax returns is excluded — but the moment she charges a separate advisory fee, the second condition fails and she becomes an investment adviser regardless of her profession.",
          },
        ],
      },
      {
        heading: "State or SEC: the AUM thresholds",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Where an adviser registers",
              headers: ["Assets under management", "Registration"],
              rows: [
                ["Under $100 million", "STATE"],
                ["$100M to $110M", "Optional — the buffer, either is permitted"],
                ["$110 million or more", "SEC"],
                ["Already SEC-registered, AUM falls", "May remain SEC-registered until below $90M"],
              ],
            },
          },
          {
            kind: "p",
            text: "The buffer exists so an adviser hovering near the line does not have to switch back and forth as markets move. Note the asymmetry: you become required to register with the SEC at $110M, but you are not forced back to the state until you drop below $90M. That hysteresis is deliberate and it is examinable.",
          },
          {
            kind: "bullets",
            items: [
              "Advisers to registered investment companies must register with the SEC regardless of AUM.",
              "An adviser with no place of business in a state and fewer than SIX non-institutional clients there in twelve months is exempt from that state's registration — the DE MINIMIS exemption.",
              "Investment adviser REPRESENTATIVES register with the STATE, even when their firm is SEC-registered. This split trips up more candidates than the AUM thresholds do.",
              "Notice filing: an SEC-registered adviser still files notice and pays fees in states where it has clients.",
            ],
          },
          {
            kind: "callout",
            label: "The split that is always tested",
            body: "The FIRM registers federally once it crosses the threshold; its individual REPRESENTATIVES still register in each state where they have a place of business or clients. Federal registration of the firm does not federalise its people. Expect at least one question that depends entirely on knowing this.",
          },
        ],
      },
      {
        heading: "Fiduciary duty in practice",
        blocks: [
          {
            kind: "p",
            text: "An investment adviser owes a fiduciary duty — the highest standard in the securities laws — comprising a duty of LOYALTY and a duty of CARE. It is a broader obligation than the suitability standard applied to broker-dealer recommendations, and it runs continuously rather than attaching only at the moment of a recommendation.",
          },
          {
            kind: "bullets",
            items: [
              "Disclose all material conflicts fully and fairly, so consent is informed rather than nominal.",
              "Seek best execution — which means best overall terms, not merely the lowest commission.",
              "Advice must be suitable AND in the client's best interest, not merely defensible.",
              "Custody triggers additional requirements including surprise examinations and, in most cases, a qualified custodian.",
              "Performance-based fees are permitted only with qualified clients meeting net worth or AUM tests.",
            ],
          },
          {
            kind: "p",
            text: "The brochure — Form ADV Part 2 — must be delivered at or before entering the advisory agreement, with an annual delivery or summary of material changes thereafter. The annual updating amendment to Form ADV is due within 90 days of fiscal year end, and certain material changes require a prompt amendment sooner rather than waiting for the annual cycle.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Three-part test", def: "Advice about securities, in the business, for compensation. All three." },
      { term: "Exclusion vs exemption", def: "Not an adviser at all, versus an adviser who need not register." },
      { term: "LATE exclusion", def: "Requires incidental advice AND no separate compensation. Both." },
      { term: "$110M / $90M", def: "SEC registration required at $110M; may stay until below $90M." },
      { term: "De minimis", def: "No place of business plus fewer than six clients in a state." },
      { term: "IAR registration", def: "Representatives register with the STATE even when the firm is SEC-registered." },
    ],
    takeaways: [
      "All three prongs must be met — advice, business, compensation.",
      "Exclusion means never an adviser; exemption means an adviser who needn't register.",
      "The LATE exclusion fails the moment a separate advisory fee is charged.",
      "SEC registration is required at $110M but retained until below $90M — the hysteresis is deliberate.",
      "The firm registers federally; its representatives still register state by state.",
      "Fiduciary duty is continuous and broader than suitability.",
    ],
  },

  {
    id: "s66-recommendations-deep",
    examSlug: "series-66",
    topicId: "recommendations",
    topicName: "Client Recommendations and Strategies",
    title: "Building a Recommendation: Objectives, Constraints, and the Gap Analysis",
    readingMinutes: 22,
    summary:
      "Turning a client's stated goal into a required return, the constraints that bound it, and the tax and account-type decisions that change the answer.",
    intro:
      "Client Recommendations is 30% of the Series 66. The questions are rarely about products in isolation — they give a client situation and ask what follows from it, which is a reasoning task rather than a recall one.",
    sections: [
      {
        heading: "From a goal to a number",
        blocks: [
          {
            kind: "example",
            example: {
              title: "The retirement gap, and what it demands of the portfolio",
              prompt:
                "A client needs $80,000 a year in retirement. Social Security will provide $28,000 and a pension $14,000. What must the portfolio produce, and how large must it be at a 4% withdrawal rate versus 5%?",
              steps: [
                "Gap = $80,000 − $28,000 − $14,000 = $38,000 per year.",
                "At 4%: $38,000 / 0.04 = $950,000.",
                "At 5%: $38,000 / 0.05 = $760,000.",
              ],
              answer:
                "The portfolio must generate $38,000 a year, requiring $950,000 at a 4% withdrawal rate or $760,000 at 5%. That $190,000 difference is the entire argument about sustainable withdrawal rates made concrete: a single percentage point changes the required nest egg by 25%. A higher assumed rate makes the plan look achievable and raises the probability of running out.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Return objective: derived from the goal, stated after inflation and after fees.",
              "Risk objective: what the client can absorb (ability) and will tolerate (willingness) — the LOWER governs.",
              "Time horizon: frequently multi-stage — accumulation, then distribution.",
              "Liquidity: near-term cash needs that cannot be exposed to market risk.",
              "Taxes, legal constraints and unique circumstances complete the picture.",
            ],
          },
        ],
      },
      {
        heading: "Account type changes the answer",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Where to hold what",
              headers: ["Account", "Tax treatment", "Best holds"],
              rows: [
                ["Traditional IRA / 401(k)", "Deductible in, ordinary income out", "Tax-inefficient assets — bonds, REITs, high turnover"],
                ["Roth", "After-tax in, qualified withdrawals tax-free", "Highest expected growth assets"],
                ["Taxable", "Dividends and gains taxed as realised", "Tax-efficient equity; assets that benefit from a step-up"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The placements that are always wrong",
            body: "Municipal bonds in any tax-deferred account waste the exemption entirely. Annuities inside an IRA duplicate a tax deferral the account already provides. Both appear regularly and both are wrong regardless of the product's own merits — the error is the location, not the security.",
          },
          {
            kind: "example",
            example: {
              title: "Capital loss ordering",
              prompt:
                "A client realises $12,000 of capital gains and $20,000 of capital losses in one year. What is deductible now, and what happens to the rest?",
              steps: [
                "Losses first offset gains: $20,000 − $12,000 = $8,000 net loss.",
                "Net capital losses are deductible against ordinary income up to $3,000 per year.",
                "The remaining $8,000 − $3,000 = $5,000 carries forward.",
              ],
              answer:
                "$3,000 is deductible this year against ordinary income and $5,000 carries forward indefinitely. The ordering matters and is examinable: losses offset GAINS first, and only the net excess reaches the $3,000 annual limit against ordinary income.",
            },
          },
        ],
      },
      {
        heading: "Strategies and their trade-offs",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Strategic allocation sets long-term weights; tactical deviates within bands; both need the bands defined in advance.",
              "Rebalancing is contrarian by construction — it sells what rose — which is why clients resist it exactly when it matters most.",
              "Dollar-cost averaging reduces timing regret and lowers expected return relative to lump-sum investing, because markets rise more often than they fall. Both facts are true and the exam may test either.",
              "Tax-loss harvesting realises losses to offset gains; the wash sale rule disallows the loss if a substantially identical security is bought within 30 days either side.",
              "Concentration in a single stock is the most common real-world risk in a private client portfolio, and unwinding it usually has a tax cost that must be planned rather than avoided.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Required return", def: "Derived from the spending gap, after inflation and fees." },
      { term: "Ability vs willingness", def: "The lower of the two governs the risk objective." },
      { term: "Asset location", def: "Which account holds which asset — separate from allocation." },
      { term: "Capital loss ordering", def: "Offset gains first; $3,000 of the net against ordinary income; rest carries forward." },
      { term: "Wash sale", def: "Loss disallowed if substantially identical security bought within 30 days either side." },
    ],
    takeaways: [
      "A one-point change in the withdrawal rate moved the required portfolio by 25%.",
      "Where ability and willingness conflict, the lower governs.",
      "Asset location is a separate decision from asset allocation and can be worth as much.",
      "Municipals in a tax-deferred account are always wrong — the error is location, not product.",
      "Losses offset gains first; only the net reaches the $3,000 ordinary-income limit.",
      "Rebalancing sells what rose, which is why clients resist it when it matters most.",
    ],
  },
];

export const s66Deep2Questions: Question[] = [];
