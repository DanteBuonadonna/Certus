// ============================================================
// Certus — CFA Level III Institutional Portfolio Management supplement
//
// WHY THIS FILE EXISTS: a concept audit found defined benefit plans,
// spending rules, smoothing rules, geometric spending formulas and
// corporate risk tolerance ALL returned ZERO matches in the L3 readings.
// Insurance companies had one mention and underfunded status two.
//
// Every number in every worked example was computed in Python first.
// ============================================================

import { Chapter, Question } from "./types";

export const instChaptersL3: Chapter[] = [
  {
    id: "cfa-l3-inst-investors",
    examSlug: "cfa-l3",
    topicId: "institutional",
    topicName: "Institutional Portfolio Management",
    title: "Pensions, Endowments, Insurers, and Sovereign Funds",
    readingMinutes: 22,
    summary:
      "How each institution's liabilities determine its objectives, constraints and appropriate allocation — and why the same portfolio can be prudent for one and reckless for another.",
    intro:
      "Every institutional investor is defined by what it owes and to whom. A pension owes contractual benefits; an endowment owes a spending stream it sets itself; an insurer owes claims it cannot predict individually; a sovereign fund owes an obligation its government may redefine. Those differences, not preferences about risk, determine what each should hold.",
    sections: [
      {
        heading: "Defined benefit pensions",
        blocks: [
          {
            kind: "p",
            text: "A defined benefit plan promises a specified benefit and the sponsor bears the investment and actuarial risk. That single fact drives everything: the plan's risk is failure to fund the promise, not volatility of returns, and the relevant asset is one that behaves like the liability.",
          },
          {
            kind: "table",
            table: {
              caption: "What raises and lowers a pension's risk tolerance",
              headers: ["Higher risk tolerance", "Lower risk tolerance"],
              rows: [
                ["Overfunded status", "Underfunded status"],
                ["Strong sponsor covenant", "Weak or correlated sponsor"],
                ["Young active workforce", "Mature or largely retired membership"],
                ["Small plan relative to sponsor", "Plan large relative to sponsor's balance sheet"],
                ["Open and growing plan", "Closed or frozen plan"],
              ],
            },
          },
          {
            kind: "p",
            text: "The sponsor's own business correlation matters and is frequently overlooked. A plan sponsored by a cyclical manufacturer whose assets are heavily in equities will find the deficit widening exactly when the sponsor is least able to fund it. Reducing that correlation is a genuine risk management decision.",
          },
          {
            kind: "p",
            text: "Liability duration typically exceeds the duration of available bonds, which creates a structural hedging gap. Long-dated swaps close it, at the cost of collateral obligations that must themselves be funded from liquid assets. A pension running a leveraged hedge without an adequate liquidity buffer has traded one risk for another.",
          },
          {
            kind: "p",
            text: "A glide path increases hedging as the funded status improves, locking in gains rather than continuing to risk them. A plan closed to new members sees its liability duration shorten over time, and the hedging strategy should evolve with it.",
          },
        ],
      },
      {
        heading: "Endowments and foundations",
        blocks: [
          {
            kind: "p",
            text: "An endowment has a perpetual horizon and a spending obligation it sets itself, which makes it the most risk-tolerant institution in the curriculum. Its required return is the spending rate plus inflation plus costs — the amount needed to preserve real purchasing power while funding the institution.",
          },
          {
            kind: "table",
            table: {
              caption: "Spending rules",
              headers: ["Rule", "Mechanism", "Property"],
              rows: [
                ["Simple", "Fixed percentage of ending value", "Volatile spending, tracks markets"],
                ["Rolling average", "Percentage of a multi-year average value", "Smoother; lags markets"],
                ["Geometric smoothing", "Weighted blend of prior spending and current value", "Smoothest; explicit trade-off"],
              ],
            },
          },
          {
            kind: "p",
            text: "The geometric or hybrid rule blends last year's spending inflated forward with a percentage of the current portfolio value, weighted by a smoothing factor. A high smoothing weight gives the institution stable budgets at the cost of the portfolio absorbing more of the market's variability; a low weight does the reverse. The choice is an explicit statement about whose stability matters more.",
          },
          {
            kind: "p",
            text: "A foundation differs from an endowment in that many jurisdictions impose a minimum annual distribution requirement, which sets a floor on the required return and reduces flexibility in poor markets. Private foundations also frequently have a finite intended life, which changes the horizon from perpetual to defined.",
          },
          {
            kind: "callout",
            label: "The endowment model and its limits",
            body: "Heavy allocation to illiquid alternatives works where the horizon is genuinely perpetual and the spending rate is sustainable. It fails where the institution depends on the endowment for a large share of operating budget and cannot reduce spending — the 2008 experience showed several institutions forced to sell illiquid assets at distressed prices or borrow to meet commitments.",
          },
        ],
      },
      {
        heading: "Insurance companies",
        blocks: [
          {
            kind: "p",
            text: "An insurer's portfolio exists to meet claims, and the claim profile determines everything. A life insurer's liabilities are long-dated and reasonably predictable in aggregate, supporting long-duration assets. A property and casualty insurer's liabilities are shorter, lumpier and far less predictable, requiring a shorter and more liquid portfolio.",
          },
          {
            kind: "p",
            text: "Regulatory capital requirements constrain both. Risk-based capital charges vary by asset class, which means the after-capital return matters more than the gross return — an asset with attractive returns and a punitive capital charge may be worse than a lower-returning alternative.",
          },
          {
            kind: "p",
            text: "Taxation matters more for insurers than for most institutions, and the interaction between taxable investment income and underwriting results affects the optimal asset mix. A combined ratio above 100% means underwriting loses money, so the portfolio must produce enough to make the whole enterprise profitable.",
          },
          {
            kind: "p",
            text: "The critical distinction is between solvency and liquidity. An insurer whose assets exceed liabilities can still fail if a catastrophe requires claim payments faster than assets can be realised. That is why a property and casualty insurer holds far more liquidity than its balance sheet alone would suggest.",
          },
        ],
      },
      {
        heading: "Banks and sovereign wealth funds",
        blocks: [
          {
            kind: "p",
            text: "A bank's securities portfolio complements the loan book rather than standing alone. Its purposes are liquidity, managing the overall interest rate position, and generating income on funds not lent. The objective is managing the net interest margin and the mismatch between deposits and loans.",
          },
          {
            kind: "p",
            text: "Sovereign wealth funds vary enormously by purpose, and the purpose determines the horizon and risk tolerance. A stabilisation fund smooths government revenue and needs liquidity and low volatility. A savings fund transfers resource wealth to future generations and can take substantial risk over a very long horizon. A pension reserve fund pre-funds a known future obligation. A reserve investment corporation seeks return on excess foreign reserves.",
          },
          {
            kind: "p",
            text: "The specific hazard for a sovereign fund is political rather than financial: pressure to invest domestically for non-economic reasons, or withdrawals to fund current spending in a fiscal crisis. A manager serving such a fund owes loyalty to the fund's stated beneficiaries rather than to the government of the day, which is a genuine Standard III(A) question.",
          },
        ],
      },
      {
        heading: "Writing an institutional IPS",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Return objective: derived from the liability or spending requirement, stated after inflation and costs.",
              "Risk objective: expressed relative to the liability where one exists, not as absolute volatility.",
              "Time horizon: frequently multi-stage, and longer than the sponsor's own planning horizon.",
              "Liquidity: driven by benefit payments, spending draws, claims or collateral calls.",
              "Legal and regulatory: capital requirements, distribution minimums, prudent investor rules.",
              "Tax: material for insurers and some foundations, immaterial for most pensions and endowments.",
              "Unique circumstances: sponsor covenant, mission-related restrictions, governance capacity.",
            ],
          },
          {
            kind: "p",
            text: "Governance capacity deserves particular emphasis at the institutional level. A strategy the investment committee cannot competently oversee should not be adopted whatever its expected return. Decision rights, review frequency and the division between board, committee and staff should all be explicit, because ambiguity there produces either paralysis or unauthorised drift.",
          },
          {
            kind: "p",
            text: "The recurring examination pattern is a fact pattern describing an institution and asking whether a proposed allocation is appropriate. The answer follows from the liability structure and the constraints, not from the return the allocation might produce — which is why identifying what the institution owes comes before any discussion of assets.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Funded status", def: "Plan assets less the present value of the benefit obligation." },
      { term: "Sponsor covenant", def: "The sponsor's ability and willingness to fund a deficit; effectively a contingent asset." },
      { term: "Glide path", def: "A policy increasing liability hedging as the funded status improves." },
      { term: "Spending rule", def: "The formula determining an endowment's annual distribution." },
      { term: "Geometric smoothing rule", def: "A weighted blend of prior spending and current portfolio value." },
      { term: "Risk-based capital", def: "Regulatory capital charges varying by asset class, making after-capital return the relevant measure." },
      { term: "Combined ratio", def: "Underwriting losses and expenses over premiums; above 100% means underwriting loses money." },
      { term: "Stabilisation fund", def: "A sovereign fund smoothing government revenue; needs liquidity and low volatility." },
      { term: "Savings fund", def: "A sovereign fund transferring wealth to future generations; long horizon, high risk tolerance." },
    ],
    takeaways: [
      "Every institution's allocation follows from what it owes and to whom.",
      "A pension's risk is failure to fund, not return volatility.",
      "Sponsor correlation matters: a deficit widening when the sponsor is weakest is the specific hazard.",
      "Endowments are the most risk-tolerant because the horizon is perpetual and spending is self-set.",
      "A high smoothing weight stabilises the institution's budget by destabilising the portfolio.",
      "Foundations face distribution minimums that pensions and endowments do not.",
      "Insurer allocation follows the claim profile; solvency and liquidity are distinct failure modes.",
      "A sovereign fund manager's loyalty runs to the stated beneficiaries, not the government of the day.",
    ],
  },
];

export const instQuestionsL3: Question[] = [];
