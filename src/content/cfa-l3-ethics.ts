// ============================================================
// Certus — CFA Level III Ethics readings
//
// WHY THIS FILE EXISTS: the Level III track had ZERO ethics questions
// (0/150) and no ethics chapter at all. A grep of the L3 readings found
// no mention of any individual Standard, and no mention of the Asset
// Manager Code. GIPS appeared eight times in passing.
//
// Level III ethics is the same Code and Standards as Levels I and II,
// but examined through applied cases involving portfolio managers and
// adviser-client relationships, and it adds two bodies of material the
// earlier levels do not cover in depth: the Asset Manager Code of
// Professional Conduct and the Global Investment Performance Standards.
//
// This chapter concentrates on the application layer and on those two
// additions, since the Standards themselves are taught in the Level I
// and Level II ethics chapters.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const ethicsChaptersL3: Chapter[] = [
  // ----------------------------------------------------------
  {
    id: "cfa-l3-ethics-applied",
    examSlug: "cfa-l3",
    topicId: "ethics",
    topicName: "Ethical and Professional Standards",
    title: "Applied Ethics: The Standards in Portfolio Management",
    readingMinutes: 21,
    summary:
      "The Standards as they arise in managing money for clients — suitability across a whole portfolio, fair dealing in allocation, the duty owed to a fund versus a person, and the conflicts specific to an adviser.",
    intro:
      "At Level III the ethics material stops being about identifying which Standard a fact pattern violates and becomes about applying the Standards to the decisions a portfolio manager actually makes. The cases are longer, the parties more numerous, and the correct answer frequently requires deciding whose interest is being served before deciding what rule applies.",
    sections: [
      {
        heading: "The ordering that resolves most cases",
        blocks: [
          {
            kind: "p",
            text: "Client before employer before self. That hierarchy resolves a surprising proportion of Level III ethics questions, and it is worth applying deliberately before reaching for a specific Standard. When a fact pattern presents a conflict, the first question is which party's interest each available action serves.",
          },
          {
            kind: "p",
            text: "The second question is harder and more distinctively Level III: who is the client? For a private wealth adviser it is usually the individual, but not always — a trustee owes duties to beneficiaries rather than to the settlor who appointed her. For a pension manager the client is the plan participants and beneficiaries, not the sponsoring company that pays the fee. For a fund manager the client is the fund itself, and suitability is assessed against the fund's stated mandate rather than against any individual investor's circumstances.",
          },
          {
            kind: "callout",
            label: "The fee payer is not necessarily the client",
            body: "A pension sponsor selects and pays the manager, and a family patriarch may pay for advice given to a trust. In neither case does the payer's interest govern. Identifying this gap is the single most common structure in Level III ethics vignettes.",
          },
        ],
      },
      {
        heading: "Suitability at the portfolio level",
        blocks: [
          {
            kind: "p",
            text: "Standard III(C) requires that suitability be judged in the context of the client's total portfolio, not security by security. A holding that would be reckless in isolation can be entirely appropriate as a small position within a diversified portfolio, and a conservative-looking security can be unsuitable if it duplicates an exposure the client already carries in size.",
          },
          {
            kind: "p",
            text: "That framing has a direct consequence for the investment policy statement. The IPS records objectives, constraints, time horizon, liquidity needs, tax position and legal circumstances, and it is the reference against which suitability is measured. It must be reviewed at least annually and whenever circumstances change materially — a retirement, an inheritance, a divorce, a business sale.",
          },
          {
            kind: "p",
            text: "Where a client instructs a trade outside the IPS, the manager should discuss it, document the discussion and the client's instruction, and treat the trade as unsolicited. A repeated pattern of such instructions is evidence that the IPS no longer describes the client and should be revisited rather than repeatedly overridden.",
          },
          {
            kind: "p",
            text: "For a fund rather than a person, the analysis changes. The manager's obligation is to the stated strategy, and investors self-selected into it. Style drift — a small-cap value fund quietly filling with large growth names — is the violation, because investors relied on the stated strategy when constructing their own overall allocation.",
          },
        ],
      },
      {
        heading: "Fair dealing, allocation, and the trading desk",
        blocks: [
          {
            kind: "p",
            text: "Standard III(B) requires fair dealing in both recommendations and investment actions. Fair does not mean equal: differing levels of service are permitted provided they are disclosed and do not disadvantage any client unfairly. What is prohibited is undisclosed and arbitrary discrimination.",
          },
          {
            kind: "bullets",
            items: [
              "Allocation policy must be written, disclosed in advance, and applied consistently.",
              "Partial fills on a block order are typically allocated pro rata by order size.",
              "Allocation determined after outcomes are known — cherry picking — is a clear violation.",
              "Hot issues and capacity-constrained strategies deserve particular care, since that is where the incentive to favour is strongest.",
              "Clients known to hold a security warrant particular attention when a recommendation changes.",
            ],
          },
          {
            kind: "p",
            text: "Best execution is an obligation running to the client whose assets are traded. It is judged on process and on outcomes across many trades rather than on any single fill, and it requires consideration of price, speed, likelihood of execution and cost together. A manager who never reviews execution quality has not discharged the duty of prudence, whatever the individual results.",
          },
          {
            kind: "p",
            text: "Soft dollar arrangements use client commissions to purchase research. Because commissions are a client asset, the research must benefit the client whose commissions paid for it. Using them to buy the firm's overheads — office equipment, marketing, general administration — is a breach of Standard III(A). Directed brokerage, where a client instructs the manager to route trades to a particular broker, must be disclosed along with any effect on execution quality.",
          },
        ],
      },
      {
        heading: "Conflicts specific to the adviser",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Recurring Level III conflict patterns",
              headers: ["Situation", "Standard engaged", "Required response"],
              rows: [
                ["Proprietary product recommended over a cheaper equivalent", "VI(A) and III(C)", "Disclose the firm's interest; ensure suitability"],
                ["Performance fee on a discretionary account", "VI(A)", "Disclose; monitor for excess risk-taking"],
                ["Referral fee received from a third party", "VI(C)", "Disclose to the client before engaging"],
                ["Personal holding in a recommended security", "VI(A) and VI(B)", "Disclose; client trades take priority"],
                ["Manager sits on an investee's board", "IV(A) and VI(A)", "Disclose to employer and clients"],
                ["Allocation to an affiliated fund", "VI(A)", "Disclose the affiliation and any layered fees"],
              ],
            },
          },
          {
            kind: "p",
            text: "The pattern across all of these is that disclosure is necessary but rarely sufficient. Standard VI(A) requires conflicts be disclosed prominently and in plain language; Standard III(A) separately requires that the client's interest actually come first. A conflict that has been disclosed and then acted upon against the client's interest is still a violation.",
          },
          {
            kind: "p",
            text: "Compensation arrangements deserve particular attention because they predict behaviour. A manager paid on assets gathered has an incentive to retain unsuitable clients. A manager paid on performance has an incentive to take risk the client did not agree to. Neither is prohibited, and both must be disclosed and monitored.",
          },
        ],
      },
      {
        heading: "Communication, records, and mistakes",
        blocks: [
          {
            kind: "p",
            text: "Standard V(B) requires distinguishing fact from opinion, disclosing the basic principles of the investment process, and identifying the important limitations of any analysis. At Level III this bites hardest in periods of poor performance, when the temptation to explain less is strongest. The duty does not relax when results disappoint.",
          },
          {
            kind: "p",
            text: "Material changes to the process must be disclosed promptly. A manager who alters the strategy, changes the benchmark, or shifts the risk profile without telling clients has removed their ability to assess whether the arrangement still suits them.",
          },
          {
            kind: "p",
            text: "Records supporting recommendations and actions belong to the employer and must be retained — seven years is the recommended minimum absent a stricter local requirement. A manager moving firms may take her knowledge and skill but not files, models or client lists, and must recreate the basis for any recommendation she intends to repeat.",
          },
          {
            kind: "callout",
            label: "Errors and the duty to correct",
            body: "On discovering a valuation error, a misallocation, or a performance figure that overstates results, the manager must correct it and inform affected clients. Leaving a client with a figure known to be wrong is a Standard III(D) violation regardless of whether anyone would have noticed.",
          },
        ],
      },
      {
        heading: "The Asset Manager Code",
        blocks: [
          {
            kind: "p",
            text: "The Asset Manager Code of Professional Conduct applies to firms rather than to individuals, and adoption is voluntary. A firm claiming compliance must comply with the Code in its entirety — partial adoption cannot be claimed, exactly as partial GIPS compliance cannot.",
          },
          {
            kind: "bullets",
            items: [
              "Loyalty to clients: place client interests first, maintain confidentiality, and refuse to accept gifts that compromise independence.",
              "Investment process and actions: use reasonable care, have a reasonable basis, deal fairly, and disclose the process.",
              "Trading: seek best execution, use client commissions only for client benefit, and give client trades priority.",
              "Risk management, compliance and support: appoint a compliance officer, maintain policies and records, and ensure adequate resources.",
              "Performance and valuation: present performance fairly and value assets consistently using independent third-party sources where possible.",
              "Disclosures: communicate accurately, disclose conflicts, fees, and the investment process.",
            ],
          },
          {
            kind: "p",
            text: "The Code overlaps substantially with the Standards, which is deliberate. What it adds is a firm-level obligation to build the systems that make individual compliance possible: designating a compliance officer, keeping records, providing adequate resources, and establishing a business continuity plan. An individual can comply with the Standards in a firm whose systems make compliance difficult; the Code addresses that gap.",
          },
        ],
      },
      {
        heading: "GIPS at the firm level",
        blocks: [
          {
            kind: "p",
            text: "The Global Investment Performance Standards exist so investors can compare managers' records fairly. Compliance is voluntary, but a firm claiming it must apply the Standards firm-wide. Showing GIPS-compliant figures for one flattering product while excluding others is not permitted and is the most frequently tested GIPS point.",
          },
          {
            kind: "p",
            text: "The firm must be defined as a distinct business entity, and all fee-paying discretionary portfolios must be included in at least one composite. A composite groups portfolios managed to a similar strategy, and that requirement is what prevents cherry-picking winners and eliminates survivorship distortion — terminated portfolios must remain in the composite for the periods they were managed.",
          },
          {
            kind: "table",
            table: {
              caption: "What GIPS does and does not do",
              headers: ["GIPS does", "GIPS does not"],
              rows: [
                ["Require firm-wide compliance", "Guarantee good returns"],
                ["Require all discretionary fee-paying portfolios in composites", "Certify the manager's skill"],
                ["Prevent survivorship bias in the record", "Audit the underlying accounting"],
                ["Require disclosure of fee basis and currency", "Apply to individuals rather than firms"],
                ["Mandate a minimum period of presented history", "Prohibit any particular strategy"],
              ],
            },
          },
          {
            kind: "p",
            text: "Verification is performed by an independent third party and applies to the firm, not to a single composite. It is recommended rather than required, and a firm may not claim verification of one composite in isolation. A firm claiming compliance that has not been verified must say so if it makes any reference to verification at all.",
          },
          {
            kind: "p",
            text: "The most consequential ethical point is simple: a member who knows the firm's GIPS claim is false must dissociate. Knowing participation in a misrepresentation is itself a violation of Standard I(A), and a performance claim is precisely the kind of representation on which investors rely.",
          },
        ],
      },
      {
        heading: "Working a Level III ethics case",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Identify the client — the party to whom the duty of loyalty runs, which may not be the fee payer.",
              "Establish what the client was told and what they reasonably relied upon.",
              "Apply the ordering: client first, then employer, then self.",
              "Ask whether disclosure alone cures the conflict, or whether the action itself must change.",
              "Check whether the required response is disclosure, consent, escalation, or dissociation.",
              "Confirm the answer would survive being made public — the standing test across the whole Code.",
            ],
          },
          {
            kind: "p",
            text: "Level III cases frequently offer an answer that is technically permissible and an answer that is right. Where the two diverge, the Code's aspiration to place the integrity of the profession above personal interest resolves it. That common practice is widespread has never been a defence under the Standards.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Investment policy statement", def: "The document recording objectives and constraints against which suitability is judged." },
      { term: "Style drift", def: "Departing from a stated mandate, breaching suitability at the fund level." },
      { term: "Cherry picking", def: "Allocating trades after outcomes are known; a fair dealing violation." },
      { term: "Soft dollars", def: "Client commissions used to buy research, which must benefit the paying client." },
      { term: "Directed brokerage", def: "A client instructing that trades be routed to a specified broker; requires disclosure." },
      { term: "Asset Manager Code", def: "A voluntary firm-level code requiring compliance in its entirety." },
      { term: "GIPS composite", def: "A group of portfolios managed to a similar strategy, including terminated accounts." },
      { term: "GIPS verification", def: "Independent firm-level assurance; recommended, and never claimable for one composite." },
    ],
    takeaways: [
      "Client before employer before self resolves most Level III ethics cases.",
      "The fee payer is frequently not the client — pension sponsors and trust settlors are the standard examples.",
      "Suitability is assessed across the whole portfolio for a person, and against the mandate for a fund.",
      "Fair dealing permits different service levels if disclosed; it prohibits undisclosed discrimination.",
      "Soft dollars must buy research benefiting the client whose commissions paid.",
      "Disclosure is necessary but rarely sufficient — the client's interest must actually come first.",
      "The Asset Manager Code applies to firms, is voluntary, and cannot be partially adopted.",
      "GIPS compliance is firm-wide, and a member who knows the claim is false must dissociate.",
    ],
  },
];

// Questions live in cfa-l3-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const ethicsQuestionsL3: Question[] = [];
