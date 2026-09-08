// ============================================================
// Certus — Series 7 Functions 1, 2 and 4, in depth
//
// WHY THIS FILE EXISTS
// The previous Series 7 batch covered Function 3, which is 73% of the
// exam. Functions 1, 2 and 4 are the remaining 27% — 34 of 125 scored
// questions — and they were covered only in short scattered chapters.
//
// These functions are almost entirely RULES rather than reasoning, which
// makes them the cheapest marks on the exam for anyone who has actually
// read them. Every deadline and threshold below was checked against the
// FINRA rule it comes from before being written.
// ============================================================

import { Chapter, Question } from "./types";

export const s7F124Chapters: Chapter[] = [
  {
    id: "s7-f1-communications",
    examSlug: "series-7",
    topicId: "f1-business",
    topicName: "Seeks Business for the Broker-Dealer",
    title: "Communications, Advertising, and Prospecting Rules",
    readingMinutes: 22,
    summary:
      "The three communication categories and who must approve each, what may never be said, and the prospecting rules that govern cold calling and social media.",
    intro:
      "Function 1 is only 9 of 125 questions, but they are among the most answerable on the paper because the rules are bright lines. The whole function turns on one classification: which of three categories a communication falls into.",
    sections: [
      {
        heading: "The three categories",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "FINRA communication categories",
              headers: ["Category", "Audience", "Approval"],
              rows: [
                ["Retail communication", "More than 25 retail investors in 30 days", "Principal approval BEFORE first use, generally"],
                ["Correspondence", "25 or fewer retail investors in 30 days", "Post-use review under written procedures"],
                ["Institutional communication", "Institutional investors only", "Post-use review; may not be forwarded to retail"],
              ],
            },
          },
          {
            kind: "p",
            text: "The number 25 in 30 days is the whole classification test, and it is counted per THIRTY-DAY period rather than per message. A letter to 30 clients is a retail communication; the same letter to 20 is correspondence. Institutional material carries a further condition: the firm must have reason to believe it will not be forwarded to retail investors, and if it is likely to be, it is retail material regardless of who it was addressed to.",
          },
          {
            kind: "callout",
            label: "Social media, resolved by one question",
            body: "Static content — a profile, a firm page, a pinned post — is a RETAIL COMMUNICATION and needs prior principal approval. Interactive content, such as a real-time reply in a conversation, is treated as correspondence subject to supervision rather than pre-approval. And an unscripted personal post recommending a specific security is still a business communication that must be retained and supervised: posting from a personal account does not make it personal.",
          },
        ],
      },
      {
        heading: "What may never be said",
        blocks: [
          {
            kind: "bullets",
            items: [
              "No guarantees against loss, and no promises of specific results.",
              "No implication that SEC or FINRA registration is approval or endorsement of a security.",
              "No cherry-picked performance, and no projections of past performance forward as an expectation.",
              "Testimonials require disclosure of whether they were paid and that experience may not be typical.",
              "Any material presenting benefits must give a fair and balanced treatment of the corresponding risks.",
            ],
          },
          {
            kind: "p",
            text: "Options communications carry an additional bar. Any retail communication discussing options must be preceded or accompanied by the OCC's Options Disclosure Document, and must be approved by a Registered Options Principal — a firm's general principal is not sufficient.",
          },
        ],
      },
      {
        heading: "Prospecting",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Cold calling is restricted to 8am–9pm in the CALLED PARTY'S time zone, which is the detail the exam tests.",
              "The caller must give their name, the firm's name and address or telephone number, and the purpose of the call.",
              "Firm-specific and national do-not-call lists must be checked; a firm-specific request must be honoured for five years.",
              "An existing business relationship permits calls for eighteen months after the last transaction; an enquiry permits three months.",
              "Telemarketing records must be retained, and the firm must maintain written procedures covering the whole programme.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Retail communication", def: "More than 25 retail investors in 30 days; principal pre-approval." },
      { term: "Correspondence", def: "25 or fewer retail investors in 30 days; post-use review." },
      { term: "Static social content", def: "Treated as a retail communication — needs prior approval." },
      { term: "Options Disclosure Document", def: "Must precede or accompany any options communication; ROP approval required." },
      { term: "Cold calling window", def: "8am to 9pm in the CALLED party's time zone." },
    ],
    takeaways: [
      "The 25-in-30-days test decides the category, and the category decides the approval.",
      "Institutional material becomes retail material if it is likely to be forwarded.",
      "Static social content needs prior approval; interactive content is supervised instead.",
      "Options communications need the ODD and a Registered Options Principal specifically.",
      "The cold-calling window follows the CALLED party's clock, not yours.",
      "A firm-specific do-not-call request stands for five years.",
    ],
  },

  {
    id: "s7-f2-accounts",
    examSlug: "series-7",
    topicId: "f2-accounts",
    topicName: "Opens Accounts / Evaluates Financial Profile",
    title: "Opening Accounts: Registration Types, Documents, and Deadlines",
    readingMinutes: 22,
    summary:
      "Which account registration fits which situation, what must be signed and when, the options-account sequence, and the transfer and death procedures that carry marks.",
    intro:
      "Function 2 is 11 questions, and nearly all of them reduce to two questions: who owns this account, and what paperwork does that require. Both have precise answers.",
    sections: [
      {
        heading: "Registration types",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Who owns what",
              headers: ["Registration", "On death of one owner", "Notes"],
              rows: [
                ["Individual", "Passes by will or intestacy", "Simplest form"],
                ["Joint tenants with right of survivorship", "Passes to the survivor automatically", "Bypasses probate"],
                ["Tenants in common", "The deceased's share goes to their estate", "Shares need not be equal"],
                ["UGMA / UTMA custodial", "Belongs to the MINOR throughout", "Irrevocable gift; one custodian, one minor"],
                ["Trust", "Per the trust document", "The trust is the customer, not the trustee"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The custodial account rules that get tested",
            body: "A custodial account has ONE custodian and ONE minor — no joint custodians and no shared accounts. The gift is IRREVOCABLE, so the assets belong to the minor from the moment of transfer, and the account is registered under the minor's Social Security number. No margin, no short selling, and no speculative options. Control passes to the child at the age of majority whether or not the custodian thinks they are ready.",
          },
          {
            kind: "bullets",
            items: [
              "A new account form requires the customer's identity, occupation, financial situation and objectives — and it does NOT require the customer's signature.",
              "A MARGIN account does require signatures: the credit agreement and the hypothecation agreement. The loan consent agreement is optional.",
              "A principal must approve the account promptly; the customer must receive a copy of the account record within 30 days and every 36 months thereafter.",
              "Discretionary authority requires written authorisation on file BEFORE the first discretionary trade, plus principal approval.",
              "Death of a customer: cancel all open orders, freeze the account, and await court documents. Do not accept instructions from the family.",
            ],
          },
        ],
      },
      {
        heading: "Options accounts have their own sequence",
        blocks: [
          {
            kind: "bullets",
            items: [
              "1. The Options Disclosure Document is delivered at or before account approval.",
              "2. A Registered Options Principal approves the account BEFORE the first options trade.",
              "3. Trading may then begin.",
              "4. The signed options agreement must be returned within 15 DAYS of approval.",
            ],
          },
          {
            kind: "p",
            text: "The order is examinable and counterintuitive: trading may start once the ROP approves, and the signed agreement follows within fifteen days. Candidates commonly assume the signature must come first, which is true for margin but not for options.",
          },
        ],
      },
      {
        heading: "Transfers and retirement accounts",
        blocks: [
          {
            kind: "bullets",
            items: [
              "ACATS transfers: the receiving firm submits the request; the carrying firm has one business day to validate and three to complete.",
              "The carrying firm may not use a transfer request as an opportunity to solicit the customer to stay.",
              "A direct ROLLOVER moves retirement assets trustee-to-trustee with no withholding; an indirect rollover pays the customer, triggers 20% withholding, and must complete within 60 days.",
              "Required minimum distributions apply to traditional accounts; Roth IRAs have no RMD for the original owner.",
              "Contributions to an IRA may be made until the tax filing deadline for that year, without extensions.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "JTWROS vs tenants in common", def: "Survivor takes all, versus the estate taking the deceased's share." },
      { term: "UGMA/UTMA", def: "One custodian, one minor, irrevocable, minor's SSN, no margin." },
      { term: "New account form", def: "No customer signature required. Margin agreements are the exception." },
      { term: "Options 15-day rule", def: "Signed agreement returned within 15 days of ROP approval; trading may begin first." },
      { term: "ACATS", def: "One business day to validate, three to complete." },
      { term: "Indirect rollover", def: "20% withholding and a 60-day deadline. Direct is trustee-to-trustee." },
    ],
    takeaways: [
      "A custodial account is one custodian, one minor, and an irrevocable gift.",
      "The new account form needs no customer signature; margin agreements do.",
      "For options, ROP approval comes first and the signed agreement follows within 15 days.",
      "Discretionary authority must be in writing BEFORE the first discretionary trade.",
      "On a customer's death: cancel orders, freeze, wait for documents.",
      "An indirect rollover triggers 20% withholding and a 60-day clock.",
    ],
  },

  {
    id: "s7-f4-processing",
    examSlug: "series-7",
    topicId: "f4-process",
    topicName: "Processes Transactions",
    title: "Order Handling, Settlement, and Corporate Actions",
    readingMinutes: 22,
    summary:
      "Order types and their guarantees, the settlement and payment calendar under T+1, what happens when payment fails, and how corporate actions adjust open orders.",
    intro:
      "Function 4 is 14 questions of mechanics. There is no judgement in it — every answer is a rule, a date or an arithmetic adjustment — which makes it the most reliably scoreable function on the exam.",
    sections: [
      {
        heading: "Orders and what each guarantees",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Order types",
              headers: ["Order", "Guarantees", "Does not guarantee"],
              rows: [
                ["Market", "Execution", "Price"],
                ["Limit", "Price (or better)", "Execution"],
                ["Stop", "Becomes a market order at the trigger", "Any price at all once triggered"],
                ["Stop limit", "Becomes a limit order at the trigger", "Execution — it can be left behind"],
              ],
            },
          },
          {
            kind: "bullets",
            items: [
              "Buy limits and sell stops are placed BELOW the market; sell limits and buy stops ABOVE it.",
              "A buy stop protects a short position; a sell stop protects a long one.",
              "\"Not held\" gives the floor broker discretion over time and price for that day only.",
              "Good-til-cancelled orders survive; day orders expire at the close.",
              "All or none, fill or kill and immediate or cancel differ on whether partial fills and delay are permitted.",
            ],
          },
        ],
      },
      {
        heading: "The settlement calendar",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Dates that carry marks",
              headers: ["Event", "Timing"],
              rows: [
                ["Regular way settlement", "T+1 for stocks, corporate and municipal bonds, and government securities"],
                ["Options settlement", "T+1"],
                ["Regulation T payment deadline", "Two business days after settlement"],
                ["Ex-dividend date", "The record date under a T+1 cycle — buy before it to receive the dividend"],
                ["Failure to pay", "Sell out the position and freeze the account for 90 days"],
              ],
            },
          },
          {
            kind: "p",
            text: "The 90-day freeze means the customer must have cash in the account IN ADVANCE of any purchase for that period. An extension may be requested from FINRA before the deadline, but a firm that simply lets the deadline pass must sell out and freeze.",
          },
          {
            kind: "callout",
            label: "Cash accounts and free-riding",
            body: "Selling a security in a cash account before paying for it is FREE-RIDING and it triggers the same 90-day freeze even if the trade was profitable. The rule cares about the sequence, not the outcome — profit does not cure it, and this is exactly how the exam frames it.",
          },
        ],
      },
      {
        heading: "Corporate actions and open orders",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Open BUY LIMIT and SELL STOP orders are reduced on the ex-dividend date, because both sit below the market. Buy stops and sell limits are not.",
              "A customer may mark an order DNR — do not reduce — to prevent that adjustment.",
              "A forward split adjusts price down and share count up; on an uneven split the order is adjusted by the ratio.",
              "A reverse split cancels open orders rather than adjusting them.",
              "A tender offer requires the customer's own instruction; a firm may not tender shares on its own initiative.",
            ],
          },
          {
            kind: "p",
            text: "The reduction rule follows from one idea: orders below the market would otherwise be triggered by the mechanical price drop on the ex-date rather than by any real move. Reducing them preserves the customer's intent. Remembering WHY makes the four-way memorisation unnecessary — work out which side of the market the order sits on and the answer follows.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Market vs limit", def: "Execution without price, versus price without execution." },
      { term: "Reg T payment", def: "Two business days after settlement; failure means sell-out and a 90-day freeze." },
      { term: "Free-riding", def: "Selling before paying in a cash account. Profit does not cure it." },
      { term: "DNR", def: "Do not reduce — blocks the ex-date adjustment." },
      { term: "Reverse split", def: "CANCELS open orders rather than adjusting them." },
    ],
    takeaways: [
      "Market guarantees execution, limit guarantees price; neither guarantees both.",
      "Buy limits and sell stops sit below the market — which is exactly why they are reduced on the ex-date.",
      "T+1 settlement, with Reg T payment two business days after that.",
      "Free-riding freezes the account for 90 days whether or not the trade was profitable.",
      "A reverse split cancels open orders; a forward split adjusts them.",
      "Work out which side of the market an order sits on rather than memorising four rules.",
    ],
  },
];

export const s7F124Questions: Question[] = [];
