// ============================================================
// Certus — SIE in depth: packaged products, options, and the prohibited
// practices that carry the regulatory section
//
// WHY THIS FILE EXISTS
// SIE had 160 minutes of reading against 752 questions — 21.3 minutes per
// 100, third worst in the portfolio. Products is 44% of the SIE (33 of 75
// scored questions), the single heaviest section, and the mutual fund
// pricing arithmetic inside it is where the computational marks live.
//
// EVERY NUMBER COMPUTED IN PYTHON FIRST. The public offering price example
// deliberately shows BOTH the correct division and the wrong
// multiplication, because the gap between them is exactly the error the
// exam is testing for.
// ============================================================

import { Chapter, Question } from "./types";

export const sieDeep2Chapters: Chapter[] = [
  {
    id: "sie-packaged-deep",
    examSlug: "sie",
    topicId: "products",
    topicName: "Understanding Products and Their Risks",
    title: "Packaged Products: Fund Pricing, Share Classes, and Breakpoints",
    readingMinutes: 24,
    summary:
      "How a mutual fund's public offering price is actually computed, why share classes differ in cost over time, how breakpoints work, and the sales practices that are prohibited.",
    intro:
      "Products is 44% of the SIE, the heaviest section by a wide margin, and packaged products carry most of the computation in it. The public offering price formula is worth getting exactly right, because the wrong version produces an answer close enough to look plausible.",
    sections: [
      {
        heading: "Net asset value and the public offering price",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "NAV and POP",
              expr: "NAV = (assets − liabilities) / shares outstanding          POP = NAV / (1 − sales charge %)",
              note: "DIVIDE by (1 − load). The load is a percentage OF THE POP, not of the NAV.",
            },
          },
          {
            kind: "example",
            example: {
              title: "The division that candidates turn into a multiplication",
              prompt:
                "A fund's NAV is $18.50 and the maximum sales charge is 5.75%. Compute the public offering price, then show what the common error produces.",
              steps: [
                "Correct: POP = $18.50 / (1 − 0.0575) = $18.50 / 0.9425 = $19.63.",
                "Sales charge in dollars = $19.63 − $18.50 = $1.13.",
                "Check: $1.13 / $19.63 = 5.75% of the POP ✓",
                "The error: $18.50 × 1.0575 = $19.56.",
              ],
              answer:
                "$19.63 is correct; the multiplication gives $19.56. Only six cents apart, which is precisely what makes it dangerous — the wrong answer looks right and will usually be one of the choices. The load is defined as a percentage of the offering price, so you must divide. Verifying that the dollar charge is 5.75% OF THE POP is the check that catches it.",
            },
          },
          {
            kind: "bullets",
            items: [
              "Forward pricing: orders execute at the NEXT computed NAV, not the last one. This is what prevents late trading.",
              "NAV is computed at least once daily, normally at the close.",
              "Open-end funds continuously issue and redeem at NAV; closed-end funds have a fixed share count and trade at a premium or discount.",
              "An ETF trades intraday and stays near NAV through the creation and redemption mechanism, which is arbitrage rather than a promise.",
            ],
          },
        ],
      },
      {
        heading: "Breakpoints and the practices around them",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "A typical breakpoint schedule",
              headers: ["Investment", "Sales charge"],
              rows: [
                ["$10,000 or more", "5.75%"],
                ["$50,000 or more", "4.50%"],
                ["$100,000 or more", "3.50%"],
                ["$250,000 or more", "2.50%"],
              ],
            },
          },
          {
            kind: "bullets",
            items: [
              "A LETTER OF INTENT commits to reaching a breakpoint within 13 months and applies the lower charge retroactively; it may also be backdated up to 90 days.",
              "RIGHTS OF ACCUMULATION let existing holdings count toward the next breakpoint on new purchases.",
              "Breakpoints combine across a family of funds and across accounts of an immediate family, which is why the question is who else is in the household.",
            ],
          },
          {
            kind: "callout",
            label: "Breakpoint selling is a prohibited practice",
            body: "Recommending $49,000 when $50,000 would reach a lower sales charge — because the higher charge pays the representative more — is BREAKPOINT SELLING and it is prohibited. So is failing to tell a customer that a slightly larger investment would qualify. The obligation is affirmative: you must inform, not merely refrain from lying.",
          },
        ],
      },
      {
        heading: "Share classes: the same fund, different costs",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Where each class costs the most",
              headers: ["Class", "Charge structure", "Suits"],
              rows: [
                ["A shares", "Front-end load, lower ongoing 12b-1", "Large investments, long horizons"],
                ["B shares", "Contingent deferred load declining over years, higher 12b-1", "Rarely optimal; often converts to A eventually"],
                ["C shares", "Little or no front load, high ongoing 12b-1 indefinitely", "Short horizons only"],
              ],
            },
          },
          {
            kind: "p",
            text: "The horizon decides the answer. A shares cost most up front and least thereafter, so they win over long periods and especially at breakpoint sizes. C shares are cheap to enter and expensive to hold, so they lose over long horizons as the ongoing fee compounds. Recommending C shares to a long-horizon investor with enough to reach a breakpoint is the classic unsuitable recommendation, and it appears on the exam repeatedly.",
          },
          {
            kind: "bullets",
            items: [
              "A 12b-1 fee is an ongoing annual charge for distribution and service, deducted from fund assets.",
              "A fund may not describe itself as \"no-load\" if its 12b-1 fee exceeds 0.25%.",
              "The expense ratio includes management, administrative and 12b-1 fees; it does NOT include sales loads or portfolio transaction costs.",
              "Variable annuities add mortality and expense charges plus surrender periods on top of fund-level costs.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "POP", def: "NAV / (1 − sales charge). Divide — the load is a percentage of the POP." },
      { term: "Forward pricing", def: "Orders fill at the NEXT computed NAV; prevents late trading." },
      { term: "Letter of intent", def: "13 months to reach a breakpoint; retroactive, backdatable 90 days." },
      { term: "Rights of accumulation", def: "Existing holdings count toward breakpoints on new purchases." },
      { term: "Breakpoint selling", def: "Keeping a purchase just below a breakpoint. Prohibited." },
      { term: "12b-1 fee", def: "Ongoing distribution charge; above 0.25% the fund cannot say \"no-load\"." },
    ],
    takeaways: [
      "POP divides by (1 − load); multiplying gives a plausible wrong answer six cents away.",
      "Check by confirming the dollar charge is the stated percentage OF THE POP.",
      "Forward pricing is what stops late trading.",
      "Breakpoints combine across the fund family and across an immediate family's accounts.",
      "You must AFFIRMATIVELY tell a customer a larger investment would qualify.",
      "Horizon picks the share class: A for long, C for short, and C to a long-horizon investor is the classic violation.",
    ],
  },

  {
    id: "sie-regulatory-deep",
    examSlug: "sie",
    topicId: "regulation",
    topicName: "Overview of the Regulatory Framework",
    title: "The Regulatory Framework and Prohibited Practices",
    readingMinutes: 22,
    summary:
      "Who regulates whom, what registration does and does not mean, the practices that end careers, and the reporting obligations that catch people out.",
    intro:
      "The regulatory section is only 9% of the SIE, but it is where the questions are most reliably answerable — the rules are bright-line rather than judgemental, so the marks are there for anyone who has actually read them.",
    sections: [
      {
        heading: "Who does what",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "The regulatory layers",
              headers: ["Body", "Role"],
              rows: [
                ["SEC", "Federal regulator; oversees the SROs and enforces the securities acts"],
                ["FINRA", "Self-regulatory organisation for broker-dealers; writes and enforces conduct rules"],
                ["MSRB", "Writes municipal securities rules; does NOT enforce them"],
                ["State regulators", "Register firms and individuals; enforce state law under the Uniform Securities Act"],
                ["SIPC", "Insures customer assets if a broker-dealer fails — NOT against market losses"],
              ],
            },
          },
          {
            kind: "callout",
            label: "Two things registration and SIPC do not mean",
            body: "SEC registration means required disclosures have been filed. It is NOT approval, and it is NOT a judgement that the security is sound — implying otherwise is itself a violation. SIPC protects against the failure of the BROKERAGE FIRM, up to $500,000 including a $250,000 cash limit. It does not protect against a security losing value, which is the most common misconception on the exam.",
          },
        ],
      },
      {
        heading: "Registration and reporting for individuals",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Form U4 registers an individual; Form U5 terminates registration and must be filed within 30 days.",
              "The firm must amend a U4 within 30 days of learning of a reportable event.",
              "Statutory disqualification can follow felonies, certain misdemeanours involving money or securities, and specified regulatory actions — generally within a ten-year lookback.",
              "Continuing education has a Regulatory Element on an annual cycle and a Firm Element the firm designs.",
              "Outside business activities require prior written notice to the firm; private securities transactions require prior written approval. Notice and approval are different bars.",
            ],
          },
          {
            kind: "p",
            text: "The distinction between NOTICE and APPROVAL is examinable in exactly that form. An outside job unrelated to securities requires the firm to be told. Selling securities outside the firm — selling away — requires the firm to say yes first, and doing it without approval is among the most serious violations an individual can commit.",
          },
        ],
      },
      {
        heading: "Prohibited practices",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "What ends a career",
              headers: ["Practice", "What it is"],
              rows: [
                ["Churning", "Excessive trading for commissions"],
                ["Front-running", "Trading ahead of a known customer order"],
                ["Selling away", "Securities transactions outside the firm without approval"],
                ["Painting the tape", "Trades among colluding parties to fake activity"],
                ["Marking the close", "Late trades to distort the closing price"],
                ["Free-riding", "Selling before paying, in a cash account"],
                ["Commingling", "Mixing customer and firm assets"],
                ["Guaranteeing against loss", "Prohibited outright, with no exception"],
              ],
            },
          },
          {
            kind: "bullets",
            items: [
              "Anti-money-laundering: a Currency Transaction Report is required above $10,000 in cash; a Suspicious Activity Report is filed on suspicious conduct and the customer must NOT be told.",
              "Structuring — breaking a transaction into pieces to stay under the reporting threshold — is itself a federal crime.",
              "The Customer Identification Program requires verifying identity before an account opens.",
              "Regulation S-P requires an initial and annual privacy notice with an opt-out for information sharing.",
              "Insider trading liability reaches tippers and tippees, not only the person who traded.",
            ],
          },
          {
            kind: "p",
            text: "The detail most often missed: a Suspicious Activity Report is CONFIDENTIAL, and informing the customer that one has been filed — tipping off — is a separate offence. Candidates reason that a good adviser would be transparent with a client, and here that instinct is exactly wrong.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Registration", def: "Disclosure filed — not approval, and not a judgement of merit." },
      { term: "SIPC", def: "$500,000 including $250,000 cash, against FIRM failure — not market loss." },
      { term: "Form U5", def: "Terminates registration; filed within 30 days." },
      { term: "Notice vs approval", def: "Outside business needs notice; selling away needs prior written approval." },
      { term: "CTR / SAR", def: "$10,000 cash triggers a CTR; a SAR is confidential and the customer is never told." },
      { term: "Structuring", def: "Splitting transactions to dodge reporting. A federal crime in itself." },
    ],
    takeaways: [
      "The MSRB writes municipal rules; FINRA enforces them.",
      "Registration is disclosure, never approval — saying otherwise is a violation.",
      "SIPC covers firm failure, not market losses. This is the most common misconception.",
      "Outside business needs notice; selling away needs prior written approval.",
      "A SAR is confidential — telling the customer is a separate offence.",
      "Structuring to stay under $10,000 is itself a crime, whatever the underlying funds.",
    ],
  },
];

export const sieDeep2Questions: Question[] = [];
