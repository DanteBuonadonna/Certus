// ============================================================
// Certus — CFA Level I Ethics, in depth
//
// WHY THIS FILE EXISTS
// Ethics is 17.1% of Level I — the single heaviest topic — and it is what
// decides borderline candidates, because CFA Institute applies the ethics
// adjustment to scores near the pass line. Our coverage was 51 minutes
// against a weight that justifies ~205. One 38-minute chapter was
// compressing twenty-two sub-standards into thirteen sections, which is
// enough to recognise a Standard by name and nowhere near enough to apply
// one to a fact pattern.
//
// And applying it to a fact pattern is the whole exam. Level I ethics
// questions are almost never "what does Standard III(B) say"; they are
// "here is what someone did — is it a violation, and of what". That skill
// comes from worked cases, so every Standard here gets its rule, the
// specific way candidates get it wrong, and cases with the reasoning shown.
//
// STYLE RULES FOR THIS FILE
// · Standards are cited with their FULL official titles. "Standard III(B)"
//   alone is how a candidate half-learns it; "Standard III(B) Fair Dealing"
//   is what the exam prints.
// · Every case states the answer AND why the tempting wrong answer is
//   tempting. That's where the learning is.
// · No invented enforcement statistics. Where a number isn't verifiable it
//   isn't stated.
// ============================================================

import { Chapter, Question } from "./types";

export const ethicsDeepChapters: Chapter[] = [
  // ==========================================================
  // STANDARD III — DUTIES TO CLIENTS
  // The largest Standard, the most tested, and the source of most errors.
  // ==========================================================
  {
    id: "cfa-l1-ethics-std3",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethical and Professional Standards",
    title: "Standard III: Duties to Clients",
    readingMinutes: 21,
    summary:
      "Loyalty, fair dealing, suitability, performance presentation and confidentiality — the five duties owed to the client, and the fact patterns that separate a violation from a judgement call.",
    intro:
      "Standard III is the heart of the Code. Every other Standard protects the profession or the market; this one protects the person whose money it is. It is also the most heavily examined Standard at Level I, and the one where candidates most often pick a defensible-sounding answer that is nonetheless wrong.",
    sections: [
      {
        heading: "The five duties at a glance",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Standard III — Duties to Clients",
              headers: ["Sub-standard", "The duty", "The classic violation"],
              rows: [
                ["III(A) Loyalty, Prudence, and Care", "Put the client first; act with the care of a prudent professional", "Directing trades to a broker who rewards the manager"],
                ["III(B) Fair Dealing", "Treat all clients fairly in recommendations and actions", "Calling the biggest client first with a downgrade"],
                ["III(C) Suitability", "Match the recommendation to the client's situation and IPS", "A sound investment that is wrong for this client"],
                ["III(D) Performance Presentation", "Fair, accurate, complete performance", "Showing a composite's best years"],
                ["III(E) Preservation of Confidentiality", "Keep client information confidential", "Discussing a client's holdings with a prospect"],
              ],
            },
          },
          {
            kind: "callout",
            label: "\"Fairly\" does not mean \"equally\"",
            body: "Standard III(B) Fair Dealing requires fair treatment, not identical treatment. Clients who pay for a premium service level may legitimately receive more contact and deeper analysis. What they may NOT receive is earlier access to a recommendation or a better fill on the same trade. Differentiate on service; never on the information itself or on execution priority.",
          },
        ],
      },
      {
        heading: "III(A) Loyalty, Prudence, and Care — who is the client?",
        blocks: [
          {
            kind: "p",
            text: "The Standard requires a member to place the client's interest above their own and their employer's. The first question in almost every III(A) fact pattern is not what the member did — it is who the client actually is, because the answer is frequently not the person in the room.",
          },
          {
            kind: "bullets",
            items: [
              "For a pension plan, the client is the plan BENEFICIARIES — not the company that sponsors it and not the trustees who hired you.",
              "For a mutual fund, the client is the fund and its shareholders collectively, not any individual investor who calls.",
              "For a trust, the client is the trust and its beneficiaries, not the person who created it.",
              "For a corporate account, the client is the corporation, not the executive who signs the paperwork.",
            ],
          },
          {
            kind: "example",
            example: {
              title: "Who is the client when the sponsor gives the instruction?",
              prompt:
                "A manager runs a corporate pension plan. The CFO, who selected the manager, asks him to shift the portfolio into the company's own stock to help support the share price. The CFO is the manager's day-to-day contact and controls the mandate. What should the manager do?",
              steps: [
                "Identify the client. The plan's beneficiaries — the employees and retirees — are the client, not the CFO and not the sponsor.",
                "Test the instruction against the beneficiaries' interest. Concentrating plan assets in the sponsor's own stock means the plan and the employees' jobs fail together, which is the opposite of diversification.",
                "The CFO's authority over the mandate is a conflict pressure, not a source of instruction that overrides the duty.",
              ],
              answer:
                "Refuse. Following the instruction would violate Standard III(A) Loyalty, Prudence, and Care. The manager should decline, document the request and the refusal, and escalate through the firm's compliance channel. That the CFO can fire him is precisely the pressure the Standard exists to withstand.",
            },
          },
          {
            kind: "p",
            text: "Soft dollars sit under this Standard too. Brokerage commissions are the CLIENT's asset, not the manager's. Directing trades to a broker in exchange for research is permissible only where the research benefits the client whose commissions paid for it; directing them in exchange for anything that benefits the manager — office equipment, client referrals, personal travel — is a violation regardless of whether execution quality was adequate.",
          },
          {
            kind: "p",
            text: "Proxy voting is also a client asset. Votes must be cast in the beneficiaries' economic interest, and a cost-benefit analysis may justify not voting routine proxies where the cost of research exceeds the expected benefit — but a blanket policy of voting with management to preserve corporate access is subordinating the client's interest to the manager's.",
          },
        ],
      },
      {
        heading: "III(B) Fair Dealing — the dissemination problem",
        blocks: [
          {
            kind: "p",
            text: "Fair Dealing governs the moment a recommendation changes. The violation is almost always about TIMING: some clients learn before others and trade on the gap. The remedy is a dissemination process designed before the recommendation exists, not a judgement made in the minutes after it does.",
          },
          {
            kind: "bullets",
            items: [
              "Shorten the time between decision and dissemination — the gap is where the unfairness lives.",
              "Notify all clients simultaneously where possible; publish to the whole eligible list at once.",
              "Where simultaneous notice is impossible, use a documented order that is not based on client size or profitability.",
              "Limit who knows a recommendation is changing before it goes out.",
              "For oversubscribed IPOs and block trades, pro-rate by order size — never by relationship.",
            ],
          },
          {
            kind: "example",
            example: {
              title: "A twenty-minute head start",
              prompt:
                "An analyst downgrades a widely held stock from Buy to Sell. Her firm's largest client, who holds a substantial position, calls on an unrelated matter twenty minutes before the note is published. He asks in passing how she feels about the stock. What may she say?",
              steps: [
                "The recommendation has changed but has not been disseminated.",
                "Answering honestly gives this client a twenty-minute head start that no other client has — the definition of unfair dealing.",
                "Lying to a client would violate Standard I(C) Misrepresentation, so evasion is not an option either.",
              ],
              answer:
                "She should tell him that a research note on the stock is being published shortly and that she is not able to discuss its contents before it is released. That is truthful, discloses no advantage, and preserves fair dealing. The tempting wrong answer is that she may answer because he asked first and she did not solicit the conversation — the Standard turns on the advantage conveyed, not on who raised the subject.",
            },
          },
        ],
      },
      {
        heading: "III(C) Suitability — sound is not the same as suitable",
        blocks: [
          {
            kind: "p",
            text: "The central insight of Standard III(C) Suitability is that an investment can be excellent on its own merits and still be a violation to recommend. Suitability is a relationship between the investment and THIS client's objectives, constraints and circumstances — captured in an investment policy statement that must be written before advice is given and updated at least annually.",
          },
          {
            kind: "p",
            text: "Suitability is judged in the context of the TOTAL portfolio, not security by security. A volatile holding that reduces overall portfolio risk through low correlation can be entirely suitable for a conservative client. Judging each security in isolation is the most common analytical error on these questions.",
          },
          {
            kind: "table",
            table: {
              caption: "Where the suitability duty attaches",
              headers: ["Relationship", "Suitability measured against"],
              rows: [
                ["Advisory client", "That client's IPS — objectives, constraints, circumstances"],
                ["Fund or index manager", "The stated mandate and strategy, NOT individual holders' situations"],
                ["Unsolicited trade outside the IPS", "Execute, but explain the mismatch and document it"],
                ["New client with existing holdings", "Assess and rebalance within a reasonable period"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The mandate limit",
            body: "A manager running a stated strategy — a small-cap value fund, an index tracker — owes suitability to the MANDATE, not to each investor's personal situation. A retiree who buys an aggressive growth fund has made a suitability error; the fund manager who continues running the stated strategy has not. The manager's obligation is to stay faithful to what was advertised.",
          },
          {
            kind: "example",
            example: {
              title: "An unsolicited trade outside the IPS",
              prompt:
                "A client with a documented conservative IPS calls and instructs his adviser to buy a speculative biotech stock with money he insists is 'play money'. The adviser believes the trade is unwise. Must she refuse?",
              steps: [
                "This is an unsolicited trade the client initiated, not a recommendation the adviser made.",
                "Standard III(C) Suitability does not give an adviser veto power over a competent client's own instructions.",
                "But it does require her to address the mismatch rather than execute silently.",
              ],
              answer:
                "She may execute, but she must first explain how the trade conflicts with his IPS and document that conversation. If unsolicited trades of this kind become a pattern, she must either update the IPS to reflect his actual risk tolerance or reconsider the relationship. Refusing outright is the tempting wrong answer — it overstates the duty.",
            },
          },
        ],
      },
      {
        heading: "III(D) Performance Presentation and III(E) Confidentiality",
        blocks: [
          {
            kind: "p",
            text: "Standard III(D) Performance Presentation requires performance information to be fair, accurate and complete. The violations are rarely fabricated numbers; they are selective ones — showing only accounts that survived, only the strategy's best period, or a model portfolio's returns without saying it was a model rather than money actually managed.",
          },
          {
            kind: "bullets",
            items: [
              "Simulated or back-tested results must be labelled as such, prominently.",
              "Terminated accounts belong in the composite for the period they were managed — excluding them is survivorship bias.",
              "A brief presentation may summarise, provided the detailed figures are offered and available.",
              "Performance from a previous employer may only be claimed with that employer's permission and with the record clearly attributed.",
            ],
          },
          {
            kind: "p",
            text: "Standard III(E) Preservation of Confidentiality survives the end of the relationship — a former client's information stays confidential indefinitely. It yields in three situations: where the information concerns illegal activities, where disclosure is required by law, or where the client permits it.",
          },
          {
            kind: "callout",
            label: "The one exception that is always tested",
            body: "A member must cooperate with a CFA Institute Professional Conduct Program investigation, and doing so does not violate Standard III(E) Preservation of Confidentiality. Candidates routinely choose 'refuse, citing confidentiality' — it sounds principled and it is wrong.",
          },
        ],
      },
      {
        heading: "Reading a Standard III fact pattern",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Identify the client first. Half of III(A) questions turn on this alone.",
              "Ask what advantage moved and to whom. If information or execution priority moved unevenly, look at III(B) Fair Dealing.",
              "Ask whether the recommendation matched THIS client's IPS — not whether it was a good investment. That's III(C).",
              "Check whether performance figures were selective rather than false. Selection is the III(D) violation.",
              "Remember confidentiality yields to a Professional Conduct Program investigation.",
              "Where two Standards seem to apply, name the one the facts turn on — the exam rewards the specific breach, not the general one.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Standard III(A) Loyalty, Prudence, and Care", def: "Place the client's interest above your own and your employer's; identify who the client actually is." },
      { term: "Standard III(B) Fair Dealing", def: "Treat all clients fairly when disseminating recommendations and taking action. Fairly, not identically." },
      { term: "Standard III(C) Suitability", def: "Match the recommendation to this client's IPS; judge in total-portfolio context." },
      { term: "Standard III(D) Performance Presentation", def: "Fair, accurate and complete — the usual violation is selective, not false." },
      { term: "Standard III(E) Preservation of Confidentiality", def: "Survives the relationship; yields to illegality, legal requirement, client permission, and PCP investigations." },
      { term: "Soft dollars", def: "Commissions are the client's asset; research bought with them must benefit the client who paid." },
      { term: "Investment policy statement", def: "The written record of objectives and constraints against which suitability is measured." },
      { term: "Survivorship bias", def: "Excluding terminated accounts from a composite, inflating the record." },
    ],
    takeaways: [
      "Identify the client before anything else — for a pension it's the beneficiaries, not the sponsor.",
      "Commissions and proxy votes are client assets, not the manager's to spend.",
      "Fair Dealing is about timing: differentiate on service level, never on information or execution priority.",
      "An investment can be sound and still unsuitable; suitability is measured against the IPS, in total-portfolio context.",
      "A fund manager owes suitability to the stated mandate, not to each holder's personal situation.",
      "An unsolicited trade outside the IPS may be executed — but explained and documented.",
      "Performance violations are usually selective disclosure rather than false numbers.",
      "Confidentiality never blocks cooperation with a CFA Institute Professional Conduct Program investigation.",
    ],
  },

  // ==========================================================
  // STANDARD II — INTEGRITY OF CAPITAL MARKETS
  // ==========================================================
  {
    id: "cfa-l1-ethics-std2",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethical and Professional Standards",
    title: "Standard II: Material Nonpublic Information and Market Manipulation",
    readingMinutes: 19,
    summary:
      "What makes information material, what makes it nonpublic, why the mosaic theory protects good analysis, and the line between legitimate trading strategy and manipulation.",
    intro:
      "Standard II protects the market itself rather than any individual client. It is short — two sub-standards — and disproportionately examined, because the fact patterns are genuinely hard: the same research conversation can be diligent analysis or an insider-trading violation depending on facts a candidate has to weigh rather than recall.",
    sections: [
      {
        heading: "The two-part test",
        blocks: [
          {
            kind: "p",
            text: "Standard II(A) Material Nonpublic Information prohibits acting or causing others to act on information that is BOTH material and nonpublic. Both conditions must hold. Information that is material but public is the raw material of analysis; information that is nonpublic but immaterial carries no prohibition.",
          },
          {
            kind: "table",
            table: {
              caption: "The two conditions",
              headers: ["Test", "Satisfied when", "Not satisfied when"],
              rows: [
                ["Material", "A reasonable investor would want it; it would move the price", "Trivial detail; already reflected in the price"],
                ["Nonpublic", "Not yet disseminated to the marketplace generally", "Released broadly — even if few have noticed yet"],
              ],
            },
          },
          {
            kind: "p",
            text: "Materiality is a matter of degree, and ambiguity itself is informative: if you are unsure whether information is material, that uncertainty suggests it may be. Earnings ahead of a release, a pending merger, an imminent change of auditor or CEO, a major litigation outcome and a coming dividend change are all reliably material. So is knowledge of a large impending order from a client — trading ahead of it is front-running.",
          },
          {
            kind: "callout",
            label: "Public means disseminated, not understood",
            body: "Information is public once it has been made generally available — filed, released, published — even if the market has not yet reacted and almost nobody has read it. An analyst who reads a newly filed document carefully and acts before slower readers is doing exactly what analysts are supposed to do. Being first is not the violation; having access others could not obtain is.",
          },
        ],
      },
      {
        heading: "The mosaic theory",
        blocks: [
          {
            kind: "p",
            text: "The mosaic theory is the reason the profession exists. An analyst may combine public information with nonpublic information that is NOT material — the individually insignificant details gathered from suppliers, customers, competitors, site visits and management conversations — and reach a conclusion that is itself material. That conclusion may be acted upon, even though no single input could have been.",
          },
          {
            kind: "p",
            text: "The distinction is between assembling immaterial pieces into a material picture, which is skill, and receiving one material piece from someone who was not entitled to give it, which is a violation. A candidate who cannot separate these will either flag every research call as insider trading or miss the real ones.",
          },
          {
            kind: "example",
            example: {
              title: "The mosaic: assembling a material conclusion",
              prompt:
                "An analyst visits a company's largest supplier and learns that component orders are running well below the prior year. She combines this with public filings, a competitor's disclosed inventory build and satellite imagery of the company's car parks, and concludes earnings will miss badly. She publishes a Sell. Violation?",
              steps: [
                "Is any single input material and nonpublic? The supplier's order volumes are nonpublic but, standing alone, are one data point about one relationship.",
                "The other inputs — filings, competitor disclosures, purchased imagery — are public or independently obtained.",
                "The material conclusion was produced by her synthesis, not handed to her.",
              ],
              answer:
                "No violation. This is the mosaic theory operating exactly as intended. The conclusion is material, but it is HERS. She should document her research trail, which is both good practice and her defence if the call is later questioned.",
            },
          },
          {
            kind: "example",
            example: {
              title: "The same analyst, handed the answer",
              prompt:
                "Same analyst. Over dinner, the company's CFO mentions that the quarter will miss consensus badly and asks her to keep it quiet. She sells the position the next morning. Violation?",
              steps: [
                "The information is material — a large earnings miss moves the price.",
                "It is nonpublic — it has not been disseminated, and the CFO's request confirms he knows that.",
                "She did not assemble it; she received it from someone breaching his own duty.",
              ],
              answer:
                "Violation of Standard II(A) Material Nonpublic Information. She must not trade and must not pass it on. The correct action is to inform her firm's compliance department, which should place the issuer on a restricted list, and to encourage the company to disclose publicly. Note that she cannot cure this by trading 'because someone else would have found out anyway'.",
            },
          },
        ],
      },
      {
        heading: "What to do when you receive it",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Do not trade in the security, for clients, for the firm or for yourself.",
              "Do not pass it on — causing others to act is expressly covered.",
              "Report it to compliance; the firm places the issuer on a restricted or watch list.",
              "Encourage the issuer to make the information public.",
              "Continue publishing research on other aspects, but do not change a recommendation on the strength of the MNPI.",
            ],
          },
          {
            kind: "p",
            text: "Firms manage this structurally through information barriers — the historical term is a Chinese wall — separating investment banking, which routinely holds MNPI, from research and trading, which must not act on it. Effective barriers require physical and systems separation, restricted lists, monitored personal trading, and a documented review of any information crossing the wall. Merely instructing staff not to discuss deals is not a barrier.",
          },
        ],
      },
      {
        heading: "II(B) Market Manipulation",
        blocks: [
          {
            kind: "p",
            text: "Standard II(B) Market Manipulation covers two distinct behaviours: transaction-based manipulation, which distorts prices or volumes to mislead, and information-based manipulation, which spreads false or misleading information to move a price.",
          },
          {
            kind: "table",
            table: {
              caption: "Manipulation and its lawful neighbours",
              headers: ["Violation", "Not a violation"],
              rows: [
                ["Wash trades and matched orders to fake volume", "Genuine trading that happens to move the price"],
                ["Marking the close to inflate a valuation", "Legitimate end-of-day rebalancing"],
                ["Spreading a rumour to move a position", "Publishing a well-supported contrarian opinion"],
                ["Cornering a market to distort pricing", "Taking a large position on genuine conviction"],
                ["Talking a book with information known to be false", "Disclosing a position and then arguing the thesis"],
              ],
            },
          },
          {
            kind: "p",
            text: "The dividing line is INTENT TO MISLEAD. An activist investor who takes a stake, announces it and argues loudly for change is not manipulating the market — the position is disclosed and the argument is offered on its merits. The same investor circulating a claim he knows to be untrue is manipulating it, whatever the size of the position.",
          },
          {
            kind: "callout",
            label: "Exploiting a rule is not the same as breaking one",
            body: "A strategy that legitimately exploits a market inefficiency or a structural quirk is not manipulation, even where it is unpopular or the counterparty feels badly used. Standard II(B) Market Manipulation requires deception, not merely advantage. Candidates over-apply this Standard to any aggressive strategy; look for a lie or a fake transaction before selecting it.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Standard II(A) Material Nonpublic Information", def: "Do not act or cause others to act on information that is both material and nonpublic." },
      { term: "Material", def: "A reasonable investor would want it; it would likely move the price. Ambiguity suggests materiality." },
      { term: "Nonpublic", def: "Not yet disseminated to the marketplace generally — regardless of whether anyone has reacted." },
      { term: "Mosaic theory", def: "Combining public and NON-material nonpublic information into a material conclusion. Permitted." },
      { term: "Front-running", def: "Trading ahead of a known client order. A Standard II(A) violation." },
      { term: "Information barrier", def: "Structural separation of functions holding MNPI from those that trade; needs systems and review, not just instructions." },
      { term: "Standard II(B) Market Manipulation", def: "Transaction-based or information-based distortion; requires intent to mislead." },
      { term: "Marking the close", def: "Trading late in the session to distort a closing price or valuation." },
    ],
    takeaways: [
      "Both conditions must hold — material AND nonpublic. Either alone carries no prohibition.",
      "Public means disseminated, not understood; being the fastest careful reader is legitimate.",
      "The mosaic theory protects the analyst who assembles immaterial pieces into a material conclusion.",
      "Receiving one material piece from someone breaching a duty is a violation regardless of how it arrived.",
      "On receipt: don't trade, don't tell, report to compliance, encourage public disclosure.",
      "Front-running a client's order is a Standard II(A) violation, not merely poor practice.",
      "Manipulation requires intent to mislead — an aggressive but honest strategy is not a violation.",
      "If unsure whether information is material, treat the uncertainty itself as a signal that it may be.",
    ],
  },

  // ==========================================================
  // STANDARD I — PROFESSIONALISM
  // The entry point. I(B) Independence and Objectivity is the most
  // frequently examined sub-standard in the whole Code.
  // ==========================================================
  {
    id: "cfa-l1-ethics-std1",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethical and Professional Standards",
    title: "Standard I: Professionalism",
    readingMinutes: 20,
    summary:
      "Knowledge of the law and the stricter-rule test, the gifts and pressure that erode independence, and the line between a mistake and misrepresentation.",
    intro:
      "Standard I governs how a member behaves as a professional before any client relationship exists. Its second sub-standard, Independence and Objectivity, is the most heavily examined provision in the entire Code, because the fact patterns are subtle: almost nothing in them is obviously corrupt.",
    sections: [
      {
        heading: "I(A) Knowledge of the Law — the stricter rule wins",
        blocks: [
          {
            kind: "p",
            text: "Members must know and comply with all applicable laws, rules and regulations of any government, regulatory body, licensing agency or professional association governing their activities — including the Code and Standards. Where these conflict, the member must comply with the STRICTER provision. That single rule answers most I(A) questions.",
          },
          {
            kind: "table",
            table: {
              caption: "Applying the stricter-rule test",
              headers: ["Situation", "Which governs"],
              rows: [
                ["Local law is less strict than the Code", "The Code — it is stricter"],
                ["Local law is more strict than the Code", "The law — it is stricter"],
                ["No applicable local law", "The Code"],
                ["Working abroad, home law is stricter and applies extraterritorially", "The home law"],
                ["Working abroad, host law is stricter", "The host law"],
              ],
            },
          },
          {
            kind: "p",
            text: "Members must not knowingly participate in or assist a violation, and must dissociate from it. Dissociation means removing yourself: stop participating, ask to be reassigned, decline to sign off, and — where the activity continues — consider resigning. It does NOT require whistleblowing to a regulator, which is permitted but not mandated by the Standard.",
          },
          {
            kind: "callout",
            label: "There is no duty to report a colleague to a regulator",
            body: "The Standard requires you to dissociate from a violation and to urge your firm to correct it through compliance. Candidates frequently choose “report to the regulator” because it feels most virtuous. Reporting is permitted, and may be required by law in some jurisdictions, but the Code's own requirement is dissociation plus internal escalation. Pick the answer the Standard actually mandates.",
          },
        ],
      },
      {
        heading: "I(B) Independence and Objectivity — the most-tested provision",
        blocks: [
          {
            kind: "p",
            text: "Members must use reasonable care and judgement to maintain independence and objectivity, and must not offer, solicit or accept any gift, benefit, compensation or consideration that could reasonably be expected to compromise their own or another's independence.",
          },
          {
            kind: "p",
            text: "The test is REASONABLE EXPECTATION OF COMPROMISE, not whether the member actually felt influenced. “It wouldn't have changed my view” is never a defence, because the Standard protects the appearance of independence as well as its substance.",
          },
          {
            kind: "table",
            table: {
              caption: "Where the line falls",
              headers: ["Generally acceptable", "Generally a violation"],
              rows: [
                ["A modest token of nominal value", "Lavish gifts, or anything contingent on a conclusion"],
                ["Travel arranged and paid by your own firm", "A company's private jet to its own site visit"],
                ["A client gift disclosed to your employer in advance", "The same gift accepted without disclosure"],
                ["Attending a company-hosted presentation", "Accepting a paid holiday from that company"],
                ["Flat fees agreed in advance for research", "Fees contingent on the rating you publish"],
              ],
            },
          },
          {
            kind: "p",
            text: "The travel rule is worth memorising precisely: where practical, use commercial transport and pay your own way. Accepting an issuer's chartered aircraft to visit a remote facility is the standard exam trap — it is acceptable only where commercial travel genuinely is not available, and even then it should be disclosed.",
          },
          {
            kind: "p",
            text: "Pressure counts as much as payment. An investment-banking colleague leaning on an analyst to soften a rating, an issuer threatening to withdraw access, and a firm compensation scheme that rewards favourable coverage all compromise independence without any gift changing hands.",
          },
          {
            kind: "example",
            example: {
              title: "The site visit you cannot reach commercially",
              prompt:
                "An analyst is invited to tour a mining operation eight hours by road from the nearest commercial airport. The issuer offers a seat on its own aircraft. There is no practical commercial alternative. May she accept?",
              steps: [
                "The default is to arrange and pay for her own travel.",
                "The exception is genuine impracticality — not inconvenience, and not cost.",
                "Accepting does not neutralise the appearance problem; it only makes it defensible.",
              ],
              answer:
                "She may accept, because commercial travel is genuinely impractical. She must disclose the arrangement to her employer and in any resulting research, and must accept nothing beyond the transport itself — no accommodation upgrade, entertainment or gift. The tempting wrong answer is a flat refusal; the Standard accommodates real-world constraints, provided they are real and disclosed.",
            },
          },
        ],
      },
      {
        heading: "I(C) Misrepresentation and I(D) Misconduct",
        blocks: [
          {
            kind: "p",
            text: "Standard I(C) Misrepresentation prohibits any untrue statement or omission that makes a communication misleading, covering qualifications, services, performance and the authorship of work. Plagiarism sits here: using another's work — a report, a model, a chart, a phrase — without attribution is a violation even where the work is accurate and even where no one is harmed.",
          },
          {
            kind: "bullets",
            items: [
              "Attribute quoted or paraphrased material to its author.",
              "Recognised statistical bodies and factual public data may be used without attribution.",
              "You may use your own firm's research without naming the departed analyst who wrote it — the firm owns it.",
              "Guaranteeing a specific return on a risky investment is misrepresentation.",
              "An honest mistake corrected promptly is not misrepresentation; leaving it uncorrected becomes one.",
            ],
          },
          {
            kind: "p",
            text: "Standard I(D) Misconduct covers dishonesty, fraud or deceit, and any act reflecting adversely on professional reputation, integrity or competence. It reaches conduct outside work only where it bears on those qualities: a conviction for fraud engages the Standard, a parking offence does not, and personal behaviour that is merely unpopular is not misconduct.",
          },
          {
            kind: "callout",
            label: "Competence is part of integrity",
            body: "Standard I(D) Misconduct catches habitual carelessness as well as dishonesty. An analyst who repeatedly publishes work riddled with errors is not merely bad at the job — the pattern reflects adversely on professional competence, which the Standard covers explicitly.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Standard I(A) Knowledge of the Law", def: "Know and follow applicable law and the Code; where they conflict, obey the STRICTER." },
      { term: "Dissociation", def: "Removing yourself from a violation — stop participating, decline sign-off, escalate internally. Not the same as reporting to a regulator." },
      { term: "Standard I(B) Independence and Objectivity", def: "Accept nothing that could REASONABLY BE EXPECTED to compromise independence; appearance counts." },
      { term: "Standard I(C) Misrepresentation", def: "No untrue statements or misleading omissions, including plagiarism and performance guarantees." },
      { term: "Standard I(D) Misconduct", def: "Dishonesty, fraud, deceit, or conduct reflecting adversely on reputation, integrity or COMPETENCE." },
      { term: "Issuer-paid research", def: "Permitted with a flat fee agreed in advance and full disclosure; never with fees contingent on the conclusion." },
    ],
    takeaways: [
      "Where law and Code conflict, follow whichever is stricter — that resolves most I(A) questions.",
      "The Code requires dissociation and internal escalation, not reporting to a regulator.",
      "I(B) turns on reasonable expectation of compromise, so “it didn't influence me” is never a defence.",
      "Use commercial travel and pay your own way unless it is genuinely impractical — then disclose.",
      "Pressure from colleagues or compensation schemes compromises independence without any gift.",
      "Plagiarism violates I(C) even where the borrowed work is accurate and nobody is harmed.",
      "Misconduct reaches personal conduct only where it bears on honesty, integrity or competence.",
    ],
  },

  // ==========================================================
  // STANDARDS IV AND V — EMPLOYERS, AND THE WORK ITSELF
  // ==========================================================
  {
    id: "cfa-l1-ethics-std45",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethical and Professional Standards",
    title: "Standards IV and V: Duties to Employers, and Investment Analysis",
    readingMinutes: 21,
    summary:
      "Leaving a firm without stealing from it, what a supervisor is responsible for, and the diligence, communication and record-keeping that must stand behind every recommendation.",
    intro:
      "Standard IV governs the employment relationship and Standard V governs the work product. They pair naturally because both are about process: what you owe the firm that pays you, and what has to sit behind a recommendation before a client sees it.",
    sections: [
      {
        heading: "IV(A) Loyalty — the departing-employee problem",
        blocks: [
          {
            kind: "p",
            text: "Members must act for the benefit of their employer and must not deprive it of the advantage of their skills, divulge confidential information, or otherwise cause harm. The examined scenario is almost always someone leaving to start a competing firm, and the rule is more permissive than candidates expect.",
          },
          {
            kind: "table",
            table: {
              caption: "Before you resign",
              headers: ["Permitted", "Violation"],
              rows: [
                ["Planning and preparing to compete", "Soliciting clients while still employed"],
                ["Registering an entity on your own time", "Using employer time, staff or systems to do it"],
                ["Remembering client relationships", "Taking client lists, models or records"],
                ["Contacting clients AFTER you leave, from public sources", "Copying the firm's contact database first"],
                ["Recreating a model from scratch later", "Emailing yourself the firm's model"],
              ],
            },
          },
          {
            kind: "p",
            text: "The line is misappropriation of PROPERTY, not competition itself. Nothing tangible or intangible belonging to the employer may leave with you — records, models, research, client data. Your own knowledge and professional relationships are yours. Absent a non-compete agreement, contacting former clients after departure using publicly available information is permitted.",
          },
          {
            kind: "p",
            text: "Independent practice is a related trap. Undertaking work that competes with your employer requires written consent from both the employer and the outside party, obtained in advance. A hobby that does not compete needs no consent; the moment it generates income in the same line of business, it does.",
          },
        ],
      },
      {
        heading: "IV(B) Additional Compensation and IV(C) Supervisors",
        blocks: [
          {
            kind: "p",
            text: "Standard IV(B) Additional Compensation Arrangements prohibits accepting any benefit that competes with, or might conflict with, the employer's interest, unless WRITTEN CONSENT is obtained from all parties involved. A grateful client's offer of a performance bonus or the use of a holiday home is the standard fact pattern — the answer is not refusal, it is written consent from everyone before accepting.",
          },
          {
            kind: "p",
            text: "Standard IV(C) Responsibilities of Supervisors requires anyone with supervisory authority to make reasonable efforts to prevent and detect violations by those they supervise. Liability attaches for FAILING TO SUPERVISE, independently of whether the supervisor knew.",
          },
          {
            kind: "bullets",
            items: [
              "A supervisor who detects a violation must investigate promptly and act — not merely accept an assurance it will not recur.",
              "Placing limits on the individual's activities during an investigation is expected.",
              "A supervisor asked to enforce a compliance system they know to be inadequate must decline supervisory responsibility in writing until it is fixed.",
              "Delegating a task never delegates the supervisory responsibility for it.",
            ],
          },
          {
            kind: "example",
            example: {
              title: "The client who offers a bonus",
              prompt:
                "A portfolio manager's client, delighted with two strong years, offers her the use of his beach house for a month each summer if performance stays above benchmark. She is not sure whether to accept. What does the Code require?",
              steps: [
                "This is compensation from someone other than her employer, contingent on investment performance.",
                "It could reasonably create an incentive to favour this client's portfolio over others — a conflict with the employer's interest and with Standard III(B) Fair Dealing.",
                "Standard IV(B) does not prohibit it outright; it conditions it.",
              ],
              answer:
                "She must obtain written consent from all parties — her employer and the client — before accepting. Absent that consent she must decline. The tempting wrong answer is that a personal gift from a client is a private matter; performance-contingent compensation from a client is precisely what IV(B) exists to capture.",
            },
          },
        ],
      },
      {
        heading: "V(A) Diligence and V(B) Communication",
        blocks: [
          {
            kind: "p",
            text: "Standard V(A) Diligence and Reasonable Basis requires diligence, independence and thoroughness, and a reasonable and adequate basis supported by appropriate research for any analysis, recommendation or action. The depth required scales with the situation — a routine rebalancing needs less than an initiation of coverage on an illiquid issuer.",
          },
          {
            kind: "p",
            text: "Relying on third-party research is permitted, but the reliance must itself be reasonable. A member must make a good-faith effort to assess the provider's process: its assumptions, its rigour, its independence, and whether its conclusions follow from its evidence. Blind reliance on a well-known name is not a reasonable basis.",
          },
          {
            kind: "p",
            text: "Standard V(B) Communication with Clients and Prospective Clients requires disclosure of the basic format and general principles of the investment process, prompt disclosure of any material change to that process, and — the most examined element — clear distinction between FACT and OPINION.",
          },
          {
            kind: "callout",
            label: "The fact-and-opinion line",
            body: "“Revenue grew 14% last year” is fact. “Revenue will grow 14% next year” is opinion, and presenting it in the same register as the first statement violates Standard V(B) Communication with Clients and Prospective Clients. Every projection, valuation and target price is an opinion resting on assumptions, and the assumptions and their limitations belong in the communication.",
          },
          {
            kind: "p",
            text: "Standard V(C) Record Retention requires records supporting analysis, recommendations and actions to be developed and maintained. In the absence of a stricter regulatory requirement, CFA Institute recommends retaining them for SEVEN YEARS. Records created in the course of employment are the employer's property and do not travel with a departing member.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Standard IV(A) Loyalty", def: "Act for the employer's benefit; you may PREPARE to compete but not solicit or misappropriate while employed." },
      { term: "Misappropriation", def: "Taking employer property — records, models, client lists. The line IV(A) actually draws." },
      { term: "Standard IV(B) Additional Compensation Arrangements", def: "Outside compensation that could conflict with the employer's interest requires WRITTEN consent from all parties." },
      { term: "Standard IV(C) Responsibilities of Supervisors", def: "Reasonable efforts to prevent and detect violations; liability attaches for failure to supervise." },
      { term: "Standard V(A) Diligence and Reasonable Basis", def: "Adequate research behind every recommendation; third-party reliance must itself be reasonable." },
      { term: "Standard V(B) Communication with Clients and Prospective Clients", def: "Disclose the process, flag material changes, and separate fact from opinion." },
      { term: "Standard V(C) Record Retention", def: "Keep supporting records; seven years recommended absent a stricter rule. Records belong to the employer." },
    ],
    takeaways: [
      "You may plan and prepare to compete — what you may not do is solicit clients or take property.",
      "Client lists, models and records are the employer's; your knowledge and relationships are yours.",
      "Independent practice that competes needs written consent from both sides, in advance.",
      "Performance-contingent compensation from a client needs written consent from all parties — not refusal.",
      "Supervisors are liable for failing to supervise, whether or not they knew.",
      "Reliance on outside research requires assessing the provider's process, not just its reputation.",
      "Separate fact from opinion — every projection is an opinion and its assumptions belong with it.",
      "Seven years is the recommended record-retention period absent a stricter regulatory requirement.",
    ],
  },

  // ==========================================================
  // STANDARDS VI AND VII, AND GIPS
  // ==========================================================
  {
    id: "cfa-l1-ethics-std67",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethical and Professional Standards",
    title: "Standards VI and VII, and the GIPS Standards",
    readingMinutes: 20,
    summary:
      "Disclosing conflicts, the order in which transactions must be executed, referral fees, how the designation may be used, and what GIPS compliance actually requires.",
    intro:
      "Standard VI handles conflicts that cannot be eliminated and must therefore be disclosed and managed. Standard VII governs conduct toward CFA Institute itself — including the exam a candidate is currently taking. GIPS closes the loop on performance reporting.",
    sections: [
      {
        heading: "VI(A) Disclosure of Conflicts",
        blocks: [
          {
            kind: "p",
            text: "Members must make full and fair disclosure of all matters that could reasonably be expected to impair their independence or interfere with their duties. Disclosure must be prominent, in plain language, and delivered so that clients actually receive it — a conflict buried in a footnote is not disclosed in any meaningful sense.",
          },
          {
            kind: "bullets",
            items: [
              "Beneficial ownership of a security you recommend.",
              "Your firm's investment-banking or market-making relationship with an issuer you cover.",
              "A directorship or any other relationship with a company under coverage.",
              "Compensation arrangements that could bias a recommendation.",
              "Referral arrangements that pay you for sending business.",
            ],
          },
          {
            kind: "p",
            text: "The requirement is disclosure, not abstinence. Owning a stock you cover is not itself a violation; failing to disclose it is. Candidates over-select “the analyst must sell the position” — the Standard asks for transparency and for the client's interest to come first, not for the conflict to be eliminated.",
          },
        ],
      },
      {
        heading: "VI(B) Priority of Transactions and VI(C) Referral Fees",
        blocks: [
          {
            kind: "p",
            text: "Standard VI(B) Priority of Transactions sets a strict order: client transactions come before employer transactions, and both come before transactions in which the member has a beneficial interest. The point is that a member's personal trading must never disadvantage a client or front-run a client order.",
          },
          {
            kind: "table",
            table: {
              caption: "Priority of transactions",
              headers: ["Order", "Whose transaction"],
              rows: [
                ["First", "Clients"],
                ["Second", "The employer"],
                ["Third", "The member personally, or anyone in whom they hold a beneficial interest"],
              ],
            },
          },
          {
            kind: "p",
            text: "Personal trading is not prohibited, and a member may participate in the same securities as clients, provided clients are not disadvantaged and the firm's blackout and pre-clearance procedures are observed. A family member's account managed for a fee is a CLIENT account and receives client priority — treating it worse to avoid the appearance of favouritism is itself a Standard III(B) Fair Dealing violation.",
          },
          {
            kind: "p",
            text: "Standard VI(C) Referral Fees requires disclosure to the employer, clients and prospects of any consideration paid or received for the recommendation of products or services. Disclosure must come BEFORE the client engages, so it can inform their decision, and must cover the nature and value of the arrangement.",
          },
        ],
      },
      {
        heading: "VII(A) and VII(B) — conduct toward CFA Institute",
        blocks: [
          {
            kind: "p",
            text: "Standard VII(A) Conduct as Participants in CFA Institute Programs prohibits conduct compromising the reputation or integrity of CFA Institute, the CFA designation or the examination process. That includes disclosing what appeared on an exam, which is a live obligation for anyone reading this.",
          },
          {
            kind: "p",
            text: "Standard VII(B) Reference to CFA Institute, the CFA Designation, and the CFA Program prohibits misrepresenting the meaning of membership, the designation or candidacy in the programme.",
          },
          {
            kind: "table",
            table: {
              caption: "Using the marks correctly",
              headers: ["Correct", "Violation"],
              rows: [
                ["“CFA” as an adjective after the full name", "“CFA” as a noun — “she is a CFA”"],
                ["“Candidate in the CFA Program”", "“CFA Level II” after your name"],
                ["Stating you passed all three levels, if true", "Implying the charter is held before it is awarded"],
                ["Charterholder status once awarded and dues are current", "Continuing to use the marks while membership lapses"],
                ["“CFA®” with the registered mark where required", "Claiming the designation predicts performance"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The most commonly failed detail",
            body: "There is no partial designation. Passing Level II makes you a candidate in the CFA Program, not a “CFA Level II”. You may state factually that you have passed Levels I and II; you may not construct a title out of it. And the charter requires both passing all three exams AND the qualified work experience — exams alone do not confer it.",
          },
        ],
      },
      {
        heading: "The GIPS Standards",
        blocks: [
          {
            kind: "p",
            text: "The Global Investment Performance Standards are VOLUNTARY ethical principles for calculating and presenting investment performance. Their purpose is comparability across firms and geographies, and their central mechanism is the composite.",
          },
          {
            kind: "bullets",
            items: [
              "Compliance is FIRM-WIDE — a firm cannot claim compliance for one product or one composite.",
              "A composite groups all portfolios managed to a similar strategy or objective.",
              "ALL fee-paying discretionary portfolios must appear in at least one composite — this is what defeats cherry-picking.",
              "Terminated portfolios stay in the composite for the periods they were managed, which defeats survivorship bias.",
              "A firm must initially present at least five years of compliant history, then add a year annually until ten are shown.",
              "Verification by an independent third party is recommended but not required, and applies firm-wide rather than to one composite.",
            ],
          },
          {
            kind: "p",
            text: "The compliance claim itself is a prescribed statement, and partial claims are prohibited. “This composite is GIPS compliant” is not a permitted statement, because compliance is a property of the firm rather than of any individual composite.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Standard VI(A) Disclosure of Conflicts", def: "Disclose prominently and in plain language; the duty is transparency, not elimination." },
      { term: "Standard VI(B) Priority of Transactions", def: "Clients first, employer second, the member last." },
      { term: "Standard VI(C) Referral Fees", def: "Disclose consideration paid or received BEFORE the client engages." },
      { term: "Standard VII(A) Conduct as Participants in CFA Institute Programs", def: "Do not compromise the exam's integrity — including disclosing its content." },
      { term: "Standard VII(B) Reference to CFA Institute, the CFA Designation, and the CFA Program", def: "No misrepresenting what membership, the charter or candidacy means." },
      { term: "Composite", def: "All portfolios managed to a similar strategy, grouped for GIPS reporting." },
      { term: "GIPS firm-wide compliance", def: "Compliance belongs to the firm; no composite-level or partial claim is permitted." },
      { term: "GIPS verification", def: "Independent, firm-wide, recommended but not required." },
    ],
    takeaways: [
      "VI(A) requires disclosure, not divestment — owning what you cover is fine if disclosed.",
      "Priority runs clients, then employer, then the member.",
      "A fee-paying family account is a client account and gets full client priority.",
      "Referral fees must be disclosed before the client engages, not afterwards.",
      "There is no “CFA Level II” — you are a candidate in the CFA Program.",
      "CFA is an adjective, never a noun, and the charter needs work experience as well as exams.",
      "GIPS compliance is voluntary and firm-wide; a composite cannot be compliant on its own.",
      "Every fee-paying discretionary portfolio must sit in a composite — that is what stops cherry-picking.",
    ],
  },

  // ==========================================================
  // APPLICATION — the skill the exam actually tests
  // ==========================================================
  {
    id: "cfa-l1-ethics-cases",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethical and Professional Standards",
    title: "Applying the Code: Fact Patterns and the Traps in Them",
    readingMinutes: 22,
    summary:
      "A decision procedure for ethics questions, then ten worked fact patterns — each with the answer, the reasoning, and the wrong answer that was designed to catch you.",
    intro:
      "Knowing the Standards and answering ethics questions are different skills. The exam almost never asks what a Standard says; it describes conduct and asks whether it violates one. This reading is the second skill: a repeatable procedure, then the patterns that recur.",
    sections: [
      {
        heading: "A procedure that works under time pressure",
        blocks: [
          {
            kind: "bullets",
            items: [
              "1. Identify the ACTOR and their role. Analyst, portfolio manager, supervisor and candidate carry different duties.",
              "2. Identify the CLIENT. For a pension it is the beneficiaries; for a fund, the fund. Half of Standard III questions turn on this alone.",
              "3. Ask what MOVED and to whom — information, money, an advantage, priority. Follow it.",
              "4. Name the specific sub-standard, not the family. “Standard III” is not an answer; “Standard III(B) Fair Dealing” is.",
              "5. Ask whether disclosure or consent would cure it. Many conflicts are permitted once disclosed; a few are prohibited outright.",
              "6. Choose the LEAST extreme action that satisfies the Standard.",
            ],
          },
          {
            kind: "callout",
            label: "The single most useful heuristic",
            body: "The Code very rarely requires the dramatic option. It requires disclosure, documentation, written consent, dissociation, or escalation to compliance. When one answer says “resign immediately” or “report to the regulator” and another says “disclose and document”, the second is usually right. The exam writes the dramatic option specifically because it feels virtuous.",
          },
        ],
      },
      {
        heading: "Patterns that recur",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Fact pattern to Standard",
              headers: ["What you see in the vignette", "Where to look first"],
              rows: [
                ["A gift, meal, trip or bonus from anyone but the employer", "I(B) Independence, or IV(B) Additional Compensation"],
                ["Someone learns something before the market does", "II(A) Material Nonpublic Information"],
                ["One client is told before others", "III(B) Fair Dealing"],
                ["A good investment, wrong client", "III(C) Suitability"],
                ["Selected or unlabelled performance figures", "III(D) Performance Presentation"],
                ["An employee leaving to compete", "IV(A) Loyalty"],
                ["A subordinate misbehaves", "IV(C) Responsibilities of Supervisors"],
                ["A recommendation with thin research behind it", "V(A) Diligence and Reasonable Basis"],
                ["A projection stated as though it were fact", "V(B) Communication with Clients"],
                ["Personal trading alongside client trading", "VI(B) Priority of Transactions"],
                ["Anything about the designation or the exam", "VII(A) or VII(B)"],
              ],
            },
          },
        ],
      },
      {
        heading: "Worked patterns",
        blocks: [
          {
            kind: "example",
            example: {
              title: "The colleague who overhears",
              prompt:
                "An analyst discusses a pending acquisition with the deal team in an open-plan office. A portfolio manager at the next desk overhears, and buys the target for client accounts. Who violated what?",
              steps: [
                "The information is material and nonpublic.",
                "The portfolio manager acted on it, regardless of how it reached him — Standard II(A) does not require that the information be given deliberately.",
                "The analyst failed to protect it; the firm's information barrier failed structurally.",
              ],
              answer:
                "The portfolio manager violated Standard II(A) Material Nonpublic Information by trading. The analyst violated it too, by failing to safeguard the information — the Standard covers causing others to act. The tempting wrong answer is that overhearing is innocent, so only the analyst is at fault; the act of trading is what the Standard prohibits.",
            },
          },
          {
            kind: "example",
            example: {
              title: "The research report you did not write",
              prompt:
                "An analyst leaves a firm. Six months later his former colleague reissues the analyst's model under her own name, updating the numbers. The model is the firm's property. Violation?",
              steps: [
                "Work produced in the course of employment belongs to the employer.",
                "The firm may continue to use and reissue it.",
                "Standard I(C) Misrepresentation concerns claiming authorship of ANOTHER'S work, not the firm's use of its own.",
              ],
              answer:
                "No violation. A firm may use research produced by departed employees without naming them, because the work is the firm's. The trap is that plagiarism feels like the obvious answer — it applies to taking someone else's work, not to a firm using its own.",
            },
          },
          {
            kind: "example",
            example: {
              title: "The trade allocated after the fact",
              prompt:
                "A manager places one large block order across several client accounts and fills at a range of prices through the day. At the close she allocates the best fills to the accounts that had the weakest year-to-date returns, to even out performance. Violation?",
              steps: [
                "Every client participated in the same order.",
                "Allocation was decided AFTER the outcomes were known, and on a basis unrelated to order size.",
                "Some clients received a worse price than the average solely because of that discretion.",
              ],
              answer:
                "Violation of Standard III(B) Fair Dealing. Block trades must be allocated pro-rata at the average price under a policy set in advance. Her motive was sympathetic — evening out returns — which is exactly why it is a good exam question. Intent does not rescue an allocation that advantaged some clients over others.",
            },
          },
          {
            kind: "example",
            example: {
              title: "The supervisor who was told it was handled",
              prompt:
                "A branch manager learns that a broker under his supervision has been recommending unsuitable products. The broker apologises and promises to stop. The manager takes no further action. Two months later it recurs. What did the manager do wrong, and when?",
              steps: [
                "His duty under Standard IV(C) arose the moment he had reason to believe a violation had occurred.",
                "Accepting an assurance is not an investigation.",
                "He also failed to limit the broker's activities while any investigation was pending.",
              ],
              answer:
                "He violated Standard IV(C) Responsibilities of Supervisors at the FIRST incident, not the second. The requirement was to investigate promptly, act on the findings, and restrict the broker's activities in the meantime. The tempting wrong answer places the violation at the recurrence; the failure to supervise was already complete.",
            },
          },
          {
            kind: "example",
            example: {
              title: "The candidate who mentions the exam",
              prompt:
                "A Level II candidate posts after the exam that derivatives was far heavier than expected and that candidates should not neglect swaps. She names no specific question. Violation?",
              steps: [
                "Standard VII(A) covers conduct compromising the integrity of the examination process.",
                "Disclosing the relative weighting she observed is disclosing exam content, even without quoting a question.",
                "Whether it helps or harms future candidates is not the test.",
              ],
              answer:
                "Violation of Standard VII(A) Conduct as Participants in CFA Institute Programs. Candidates may discuss preparation and published topic weights freely, but not what they saw on the paper. The trap is that no question was quoted, which feels like the line — the Standard covers the content of the exam, not just verbatim questions.",
            },
          },
        ],
      },
      {
        heading: "Answering efficiently",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Where two Standards both apply, pick the one the FACTS turn on — the specific breach, not the general principle.",
              "“No violation” is a real answer and is correct more often than nervous candidates expect.",
              "Watch for answers that are true statements about the Code but do not address the conduct described.",
              "Disclosure cures most conflicts; it never cures acting on material nonpublic information.",
              "When an answer requires the member to do something no reasonable professional would do, it is usually the distractor.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Identify the client", def: "The first move in any Standard III fact pattern; frequently not the person giving instructions." },
      { term: "Least-extreme action", def: "The Code usually requires disclosure, documentation or escalation — not resignation." },
      { term: "Pro-rata allocation", def: "Block fills allocated by order size at the average price, under a policy set in advance." },
      { term: "Failure to supervise", def: "The violation attaches at the first incident, not the recurrence." },
      { term: "Exam content", def: "Covered by VII(A) whether or not a specific question is quoted." },
    ],
    takeaways: [
      "Run the same procedure every time: actor, client, what moved, specific sub-standard, cure, least-extreme action.",
      "The dramatic option is usually the distractor — the Code asks for disclosure and documentation.",
      "Trading on MNPI violates II(A) however innocently the information arrived.",
      "A firm may reuse a departed employee's work; that is not plagiarism.",
      "Block allocation must be pro-rata at the average price, decided before the fills are known.",
      "A supervisor's violation attaches at the first incident, not when it happens again.",
      "Disclosure cures most conflicts but never cures acting on material nonpublic information.",
      "\"No violation\" is correct more often than candidates expect.",
    ],
  },
];

export const ethicsDeepQuestions: Question[] = [];
