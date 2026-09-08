// ============================================================
// Certus — Series 7 Function 3, in depth
//
// WHY THIS FILE EXISTS
// Series 7 has the worst reading-to-question ratio in the portfolio:
// 1,631 questions against 200 minutes of reading — 12.3 minutes per 100
// questions, where CFA Level I sits at 47.5. Those 200 minutes are also
// spread across 29 short chapters averaging under 7 minutes, with options
// covered three separate times and margin, municipals, DPPs, suitability
// and government securities each covered twice.
//
// The answer is not more short chapters. It is DEPTH on Function 3 —
// "Provides Information, Makes Recommendations, Records" — which is 91 of
// the 125 scored questions, 73% of the exam. This file covers the four
// areas inside F3 that actually decide the result.
//
// EVERY NUMBER COMPUTED IN PYTHON FIRST, and both margin call prices were
// CHECKED by recomputing the equity percentage at the call price. If that
// check does not return exactly the maintenance requirement, the formula
// was applied wrongly.
// ============================================================

import { Chapter, Question } from "./types";

export const s7F3Chapters: Chapter[] = [
  // ==========================================================
  // OPTIONS — SPREADS AND COMBINATIONS
  // ==========================================================
  {
    id: "s7-f3-option-spreads",
    examSlug: "series-7",
    topicId: "f3-recommend",
    topicName: "Provides Information, Makes Recommendations, Records",
    title: "Option Spreads and Combinations: Reading Any Position in Four Steps",
    readingMinutes: 24,
    summary:
      "A repeatable procedure for finding maximum gain, maximum loss and breakeven on any spread or straddle, worked on debit spreads, credit spreads and straddles.",
    intro:
      "Options are the largest single source of Series 7 marks and the largest source of lost ones. The exam rarely asks what a spread is; it gives you one and asks for maximum gain, maximum loss or breakeven. That is a procedure, and once you have it the questions become mechanical.",
    sections: [
      {
        heading: "The four-step procedure",
        blocks: [
          {
            kind: "bullets",
            items: [
              "1. Is it a DEBIT or a CREDIT? Compare the premium paid with the premium received. This single answer determines the shape of everything else.",
              "2. DEBIT spreads want the position to WIDEN to the full strike difference. CREDIT spreads want both options to expire worthless.",
              "3. Maximum gain and maximum loss always sum to the strike difference on a vertical spread.",
              "4. Breakeven: for a call spread, lower strike + net debit (or − net credit). For a put spread, higher strike − net credit (or + net debit).",
            ],
          },
          {
            kind: "callout",
            label: "Debit means \"I paid, so I need movement\"",
            body: "Every debit position needs the underlying to move in your direction to profit, because you started in the hole by the premium. Every credit position profits from nothing happening, because you were paid up front and keep it if the options expire worthless. Deciding debit or credit first tells you which direction the position wants and what the worst case looks like — and it takes two seconds.",
          },
        ],
      },
      {
        heading: "The debit call spread",
        blocks: [
          {
            kind: "example",
            example: {
              title: "Bull call spread, worked end to end",
              prompt:
                "Buy 1 XYZ 50 call at 6, sell 1 XYZ 60 call at 2. Find the net position, maximum gain, maximum loss and breakeven, then the profit at 48, 56 and 64.",
              steps: [
                "Paid 6, received 2 → net DEBIT of $4 ($400 per contract). Bullish.",
                "Maximum loss = the debit = $4, which occurs anywhere at or below 50 where both expire worthless.",
                "Maximum gain = strike difference − debit = (60 − 50) − 4 = $6, reached at or above 60.",
                "Breakeven = lower strike + net debit = 50 + 4 = $54.",
              ],
              answer:
                "Max gain $6, max loss $4, breakeven $54 — and note $6 + $4 = $10, the strike difference, exactly as the rule says. At 48 both expire worthless and you lose the $4 debit. At 56 the long call is worth $6 and the short is worthless, so profit is $6 − $4 = $2. At 64 the spread is fully widened to $10 and profit is the maximum $6. Multiply everything by 100 for the per-contract dollar figures.",
            },
          },
        ],
      },
      {
        heading: "The credit put spread",
        blocks: [
          {
            kind: "example",
            example: {
              title: "Bull put spread — same view, opposite construction",
              prompt:
                "Sell 1 ABC 50 put at 4, buy 1 ABC 45 put at 1.50. Find the net position, maximum gain, maximum loss and breakeven.",
              steps: [
                "Received 4, paid 1.50 → net CREDIT of $2.50. Also bullish.",
                "Maximum gain = the credit = $2.50, kept when both expire worthless at or above 50.",
                "Maximum loss = strike difference − credit = (50 − 45) − 2.50 = $2.50, at or below 45.",
                "Breakeven = higher strike − net credit = 50 − 2.50 = $47.50.",
              ],
              answer:
                "Max gain $2.50, max loss $2.50, breakeven $47.50. Both this and the previous example are BULLISH positions, which is the thing worth internalising: you can express the same view with a debit call spread or a credit put spread. The credit version profits if the stock simply does not fall, while the debit version needs an actual rise — which is why the exam so often pairs them.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "The four verticals",
              headers: ["Position", "Debit or credit", "View", "Wants"],
              rows: [
                ["Buy low call, sell high call", "Debit", "Bullish", "The stock to rise"],
                ["Sell low call, buy high call", "Credit", "Bearish", "The stock not to rise"],
                ["Buy high put, sell low put", "Debit", "Bearish", "The stock to fall"],
                ["Sell high put, buy low put", "Credit", "Bullish", "The stock not to fall"],
              ],
            },
          },
        ],
      },
      {
        heading: "Straddles: a view on movement, not direction",
        blocks: [
          {
            kind: "example",
            example: {
              title: "Long straddle",
              prompt:
                "Buy 1 QRS 100 call at 6 and 1 QRS 100 put at 4. Find the breakevens and the maximum loss.",
              steps: [
                "Total premium = 6 + 4 = $10, a debit.",
                "Upper breakeven = strike + total premium = 100 + 10 = $110.",
                "Lower breakeven = strike − total premium = 100 − 10 = $90.",
              ],
              answer:
                "Breakevens at $90 and $110, with the maximum loss of $10 occurring at exactly $100 — where BOTH options expire worthless. The buyer needs a move of more than 10% in either direction just to break even, which is why straddles are bought before events and why the seller's edge is that large moves are rarer than they feel.",
            },
          },
          {
            kind: "bullets",
            items: [
              "A long straddle profits from volatility; a short straddle profits from stillness and carries unlimited upside risk.",
              "A strangle uses different strikes — cheaper to buy, but needs a bigger move.",
              "Protective put: long stock plus long put. Insurance; breakeven is stock cost plus premium.",
              "Covered call: long stock plus short call. Income, capped upside; breakeven is stock cost minus premium.",
              "For any position, maximum loss on a long option is always the premium, and never more.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Debit spread", def: "Net premium paid; needs movement in your direction to profit." },
      { term: "Credit spread", def: "Net premium received; profits if nothing happens." },
      { term: "Vertical spread rule", def: "Max gain + max loss = the strike difference." },
      { term: "Call spread breakeven", def: "Lower strike + net debit, or lower strike − net credit." },
      { term: "Put spread breakeven", def: "Higher strike − net credit, or higher strike + net debit." },
      { term: "Long straddle", def: "Same strike call and put; breakevens at strike ± total premium." },
    ],
    takeaways: [
      "Decide debit or credit first — it determines everything else in two seconds.",
      "Debit needs movement; credit needs stillness.",
      "Max gain plus max loss equals the strike difference on every vertical.",
      "A bull call spread and a bull put spread express the SAME view differently.",
      "A straddle's max loss sits exactly at the strike, where both legs expire worthless.",
      "Multiply by 100 for per-contract dollars — a step candidates forget under time pressure.",
    ],
  },

  // ==========================================================
  // MARGIN
  // ==========================================================
  {
    id: "s7-f3-margin-deep",
    examSlug: "series-7",
    topicId: "f3-recommend",
    topicName: "Provides Information, Makes Recommendations, Records",
    title: "Margin Accounts: Long, Short, and Where the Call Comes",
    readingMinutes: 24,
    summary:
      "Regulation T, the equity formulas for long and short accounts, and the two maintenance-call prices computed and then verified.",
    intro:
      "Margin questions are pure arithmetic, which makes them free marks once the formulas are secure. The short side is where candidates lose them, because the equity formula inverts and most revision material treats it as an afterthought.",
    sections: [
      {
        heading: "The long account",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Long margin account",
              expr: "equity = market value − debit balance          maintenance call price = debit / (1 − maintenance %)",
              note: "Regulation T initial margin is 50%. FINRA long maintenance is 25%. The DEBIT NEVER CHANGES.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Long: where does the call come, and check it",
              prompt:
                "A customer buys $40,000 of stock in a margin account at 50% Reg T. Find the equity, the debit, and the market value at which a maintenance call is triggered at 25%.",
              steps: [
                "Equity = 50% × $40,000 = $20,000. Debit = $40,000 − $20,000 = $20,000.",
                "Call price = debit / (1 − 0.25) = $20,000 / 0.75 = $26,666.67.",
                "CHECK: at that market value, equity = $26,666.67 − $20,000 = $6,666.67, and $6,666.67 / $26,666.67 = 25.0%.",
              ],
              answer:
                "The call comes when the position falls to $26,666.67 — a 33% decline. That check at the end is not decoration: recomputing the equity percentage at the call price is the fastest way to catch a misapplied formula, and it takes one division.",
            },
          },
        ],
      },
      {
        heading: "The short account, where the formula inverts",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Short margin account",
              expr: "credit balance = short sale proceeds + Reg T margin deposited          equity = credit balance − market value",
              note: "Short maintenance is 30% of market value. The CREDIT BALANCE never changes; the market value does.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Short: the mirror image",
              prompt:
                "A customer sells short $30,000 of stock at 50% Reg T. Find the credit balance and the market value at which a 30% maintenance call is triggered.",
              steps: [
                "Credit balance = $30,000 proceeds + $15,000 margin = $45,000.",
                "Call price = credit balance / (1 + 0.30) = $45,000 / 1.30 = $34,615.38.",
                "CHECK: equity = $45,000 − $34,615.38 = $10,384.62, and $10,384.62 / $34,615.38 = 30.0%.",
              ],
              answer:
                "The call comes when the stock RISES to $34,615.38 — a 15% adverse move, against 33% on the long side. Two things to hold: the short formula DIVIDES BY (1 + maintenance) where the long divides by (1 − maintenance), and a short position is called far sooner because the maintenance requirement is higher and the loss is unbounded.",
            },
          },
          {
            kind: "callout",
            label: "Why short accounts get called faster",
            body: "A long position can fall 33% before a call; the equivalent short is called after a 15% rise. That is deliberate: a long position's loss is capped at the investment while a short's is theoretically unlimited, so the rules force the account to be topped up much earlier. If a question compares the two, the short is always called sooner.",
          },
          {
            kind: "bullets",
            items: [
              "SMA is a line of credit created when equity exceeds the Reg T requirement; it does not disappear when the market falls.",
              "Excess equity above Reg T generates SMA at 50% of the gain.",
              "A restricted account has equity below Reg T but above maintenance — no call, but withdrawals are limited.",
              "Marginable securities are exchange-listed and Nasdaq issues; options, most new issues in the first 30 days, and mutual funds cannot be purchased on margin.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Regulation T", def: "50% initial margin, set by the Federal Reserve Board." },
      { term: "Debit balance", def: "The loan in a long account. It never changes as prices move." },
      { term: "Credit balance", def: "Short proceeds plus margin. It never changes as prices move." },
      { term: "Long call price", def: "debit / (1 − 0.25)." },
      { term: "Short call price", def: "credit balance / (1 + 0.30)." },
      { term: "SMA", def: "A line of credit from excess equity; it does not evaporate in a decline." },
      { term: "Restricted account", def: "Below Reg T but above maintenance — no call, limited withdrawals." },
    ],
    takeaways: [
      "The debit (long) and credit balance (short) are fixed; only market value moves.",
      "Long: divide by (1 − 0.25). Short: divide by (1 + 0.30). The sign inverts.",
      "Always verify by recomputing the equity percentage at the call price.",
      "A long is called after a 33% fall; the equivalent short after a 15% rise.",
      "Shorts are called sooner because the loss is unbounded — that asymmetry is the design.",
      "SMA persists once created; it does not vanish when the market falls.",
    ],
  },

  // ==========================================================
  // MUNICIPAL SECURITIES
  // ==========================================================
  {
    id: "s7-f3-municipals",
    examSlug: "series-7",
    topicId: "f3-recommend",
    topicName: "Provides Information, Makes Recommendations, Records",
    title: "Municipal Securities: The Tax Math and Who They Suit",
    readingMinutes: 22,
    summary:
      "General obligation versus revenue bonds, the tax-equivalent yield computation that decides suitability, and the recommendations that are wrong regardless of the yield.",
    intro:
      "Municipal bonds are examined as a SUITABILITY question dressed as a yield question. The arithmetic is one formula; the marks are in knowing which customer the answer applies to, and which customers it never applies to.",
    sections: [
      {
        heading: "The two families",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "General obligation against revenue bonds",
              headers: ["", "General obligation", "Revenue"],
              rows: [
                ["Backed by", "Full faith, credit and TAXING POWER", "Revenue from one specific project"],
                ["Voter approval", "Usually required", "Usually not"],
                ["Debt limits", "Subject to statutory limits", "Not subject to them"],
                ["Typical safety", "Higher", "Lower — depends on one revenue stream"],
                ["Key analysis", "Tax base, demographics, debt per capita", "Feasibility study, coverage ratio, flow of funds"],
              ],
            },
          },
          {
            kind: "p",
            text: "The distinction to hold is what stands behind the promise. A GO bond is backed by the issuer's power to tax, so its analysis is about the wealth and stability of the tax base. A revenue bond is backed by one project's receipts, so its analysis is about whether that project will generate enough — which is why the feasibility study and the debt service coverage ratio carry the weight.",
          },
        ],
      },
      {
        heading: "Tax-equivalent yield: the whole point",
        blocks: [
          {
            kind: "formula",
            formula: {
              label: "Tax-equivalent yield",
              expr: "TEY = municipal yield / (1 − marginal tax rate)",
              note: "DIVIDE by (1 − rate). Multiplying is the standard error and produces a number below the muni yield, which should be an obvious red flag.",
            },
          },
          {
            kind: "example",
            example: {
              title: "The same bond, two customers",
              prompt:
                "A municipal bond yields 3.50%. Compute the tax-equivalent yield for a customer in the 24% bracket and one in the 35% bracket. A corporate bond yields 5.20% — at what bracket do the two break even?",
              steps: [
                "24% bracket: 3.50% / (1 − 0.24) = 3.50% / 0.76 = 4.61%.",
                "35% bracket: 3.50% / (1 − 0.35) = 3.50% / 0.65 = 5.38%.",
                "Breakeven bracket: solve 3.50% / (1 − t) = 5.20% → t = 1 − 3.50/5.20 = 32.7%.",
              ],
              answer:
                "4.61% and 5.38%. The 5.20% corporate beats the muni for the 24% customer and LOSES to it for the 35% customer — the same two bonds, opposite recommendations, decided entirely by the bracket. The breakeven is a 32.7% marginal rate. This is why a municipal recommendation without knowing the customer's bracket is not a recommendation at all.",
            },
          },
          {
            kind: "callout",
            label: "The recommendations that are always wrong",
            body: "Municipal bonds in an IRA or 401(k) waste the entire tax advantage, because the account is already tax-deferred — you are accepting a lower yield for a benefit you cannot use. Municipals for a low-bracket customer fail the same test. Both appear constantly on the exam, and both are wrong regardless of how attractive the yield looks in isolation.",
          },
          {
            kind: "bullets",
            items: [
              "Interest is exempt from federal tax; a bond bought in the investor's own state is usually exempt from state tax too — the \"double exemption\", and triple in some cities.",
              "CAPITAL GAINS on a municipal bond are fully taxable. Only the interest is exempt.",
              "Private activity bonds may be subject to the alternative minimum tax.",
              "Municipal securities are exempt from the 1933 Act registration and are regulated by the MSRB, whose rules FINRA enforces.",
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: "General obligation bond", def: "Backed by taxing power; analysis is about the tax base." },
      { term: "Revenue bond", def: "Backed by one project's receipts; analysis is feasibility and coverage." },
      { term: "Tax-equivalent yield", def: "muni yield / (1 − marginal rate). Divide, never multiply." },
      { term: "Double exemption", def: "Federal and state exemption on an in-state bond." },
      { term: "Private activity bond", def: "May trigger alternative minimum tax." },
      { term: "MSRB", def: "Writes municipal rules; FINRA enforces them." },
    ],
    takeaways: [
      "GO bonds rest on taxing power; revenue bonds rest on one project.",
      "TEY divides by (1 − rate) — a result below the muni yield means you multiplied.",
      "The same two bonds produce opposite recommendations at 24% versus 35%.",
      "Municipals in an IRA waste the exemption entirely and are always wrong.",
      "Capital gains on municipals are fully taxable; only the interest is exempt.",
    ],
  },

  // ==========================================================
  // SUITABILITY AND REGULATION BEST INTEREST
  // ==========================================================
  {
    id: "s7-f3-suitability-regbi",
    examSlug: "series-7",
    topicId: "f3-recommend",
    topicName: "Provides Information, Makes Recommendations, Records",
    title: "Suitability, Regulation Best Interest, and Prohibited Practices",
    readingMinutes: 22,
    summary:
      "What Regulation Best Interest requires beyond suitability, the four obligations it imposes, the customer profile that supports a recommendation, and the practices that end careers.",
    intro:
      "Regulation Best Interest raised the standard for recommendations to retail customers, and the exam tests the difference between the old suitability rule and what Reg BI now demands. The distinction is narrow, real, and heavily examined.",
    sections: [
      {
        heading: "What Reg BI added",
        blocks: [
          {
            kind: "p",
            text: "Under the old standard a recommendation had to be SUITABLE. Under Regulation Best Interest it must be in the customer's BEST INTEREST, and the firm may not place its own interest ahead of the customer's. In practice that means where two suitable products exist, recommending the one that pays the representative more — without a reason grounded in the customer's interest — is now a violation where previously it may not have been.",
          },
          {
            kind: "table",
            table: {
              caption: "The four Reg BI obligations",
              headers: ["Obligation", "What it requires"],
              rows: [
                ["Disclosure", "Material facts about the relationship, scope, fees and conflicts — in writing, before or at the recommendation"],
                ["Care", "Reasonable diligence, care and skill; understand the product and its costs"],
                ["Conflict of interest", "Identify and at minimum disclose; eliminate or mitigate some conflicts, not merely disclose them"],
                ["Compliance", "Written policies and procedures reasonably designed to achieve compliance"],
              ],
            },
          },
          {
            kind: "callout",
            label: "The one that is not \"just disclose it\"",
            body: "The conflict of interest obligation goes further than disclosure. Sales contests, quotas and bonuses tied to a specific security or product type within a limited period must be ELIMINATED, not disclosed. Candidates default to \"disclose and proceed\" because three of the four obligations allow it. This one does not.",
          },
        ],
      },
      {
        heading: "The customer profile",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Age, and other investments held.",
              "Financial situation and needs, tax status.",
              "Investment objectives, experience, and time horizon.",
              "Liquidity needs and risk tolerance.",
              "Any other information the customer discloses.",
            ],
          },
          {
            kind: "p",
            text: "A recommendation must have a reasonable basis in that profile. Where a customer REFUSES to provide the information, a recommendation may still be made only if there is a reasonable basis without it — and the refusal must be documented. Refusal does not remove the obligation; it narrows what can be justified.",
          },
          {
            kind: "p",
            text: "Suitability operates at three levels the exam separates: REASONABLE-BASIS (the product is suitable for at least some investors, which requires understanding it), CUSTOMER-SPECIFIC (suitable for THIS customer), and QUANTITATIVE (a series of individually suitable trades can be unsuitable in aggregate — which is how churning is caught).",
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
                ["Churning", "Excessive trading for commission rather than the customer's benefit"],
                ["Front-running", "Trading ahead of a known customer block order"],
                ["Selling away", "Private securities transactions without the firm's written approval"],
                ["Sharing in accounts", "Without written approval and proportional to the rep's own contribution"],
                ["Guaranteeing against loss", "Prohibited outright — no exceptions"],
                ["Unauthorised trading", "Discretion exercised without written authorisation on file"],
                ["Commingling", "Mixing customer securities with firm assets"],
              ],
            },
          },
          {
            kind: "p",
            text: "Two details the exam relies on. TIME AND PRICE discretion — deciding only when or at what price to execute an order the customer has already specified as to security, amount and direction — does NOT require written authorisation and is good for that day only. Anything more requires signed discretionary authority on file before the first discretionary trade.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Regulation Best Interest", def: "Recommendations must be in the customer's best interest; the firm may not put itself first." },
      { term: "Conflict obligation", def: "Some conflicts — sales contests and quotas — must be ELIMINATED, not disclosed." },
      { term: "Reasonable-basis suitability", def: "Suitable for at least some investors; requires understanding the product." },
      { term: "Quantitative suitability", def: "Individually suitable trades that are unsuitable in aggregate — how churning is caught." },
      { term: "Time and price discretion", def: "Needs no written authorisation; good for that day only." },
      { term: "Selling away", def: "Private securities transactions without written firm approval." },
    ],
    takeaways: [
      "Reg BI raised the bar from suitable to best interest — the firm may not put itself first.",
      "Three obligations allow disclosure; the conflict obligation requires ELIMINATING sales contests and quotas.",
      "A customer's refusal to give information narrows what you can justify — it does not remove the duty.",
      "Quantitative suitability is how churning is caught: each trade fine, the pattern not.",
      "Time and price discretion needs no written authority and expires that day.",
      "Guaranteeing a customer against loss is prohibited outright, with no exception.",
    ],
  },
];

export const s7F3Questions: Question[] = [];
