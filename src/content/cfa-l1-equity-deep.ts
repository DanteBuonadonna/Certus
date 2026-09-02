// ============================================================
// Certus — CFA Level I Equity Investments, in depth
//
// WHY THIS FILE EXISTS
// Equity is 12.2% of Level I and had 28 minutes of reading against a
// target of 146 — the largest remaining gap after Ethics. A concept audit
// also found depository receipts and asset-based valuation at effectively
// zero coverage, and index weighting methods barely touched, despite all
// three being reliably examined.
//
// EVERY NUMBER IN EVERY WORKED EXAMPLE WAS COMPUTED IN PYTHON FIRST.
// The margin-call price, the three index returns, the Gordon and two-stage
// valuations, the justified multiples and the EV calculation were all run
// and checked before being written down. A valuation chapter with an
// arithmetic error is worse than no chapter.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const equityDeepChapters: Chapter[] = [
  // ==========================================================
  // 1. MARKETS, POSITIONS, INDEXES, EFFICIENCY
  // ==========================================================
  {
    id: "cfa-l1-equity-markets",
    examSlug: "cfa",
    topicId: "equity",
    topicName: "Equity Investments",
    title: "Markets, Leveraged Positions, Indexes, and Efficiency",
    readingMinutes: 22,
    summary:
      "How markets are organised, the arithmetic of buying on margin and selling short, why three index weighting methods give three different answers, and what market efficiency does and does not claim.",
    intro:
      "This reading covers the plumbing. It is the least conceptually difficult part of the equity syllabus and among the most reliably examined, because the questions are computational — a margin call price, an index return — and computational questions are easy to write and impossible to fudge.",
    sections: [
      {
        heading: "Positions and the arithmetic of leverage",
        blocks: [
          {
            kind: "p",
            text: "A long position profits when the price rises; a short position profits when it falls. The asymmetry between them is the thing to internalise: a long position can lose at most what was invested, while a short position's loss is theoretically unbounded, because there is no ceiling on a price.",
          },
          {
            kind: "p",
            text: "Buying on margin borrows part of the purchase price from the broker. The initial margin requirement sets the minimum equity fraction at purchase; the maintenance margin sets the level below which equity may not fall before a margin call.",
          },
          {
            kind: "formula",
            formula: {
              label: "Margin call price (long position)",
              expr: "P_call = loan / (shares × (1 − maintenance margin))",
              note: "Equivalently: the price at which equity/value falls back to the maintenance requirement.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Where does the margin call come?",
              prompt:
                "An investor buys 100 shares at $50 with an initial margin requirement of 50%. The maintenance margin is 25%. At what price does she receive a margin call, and what is her return if the price instead rises to $65?",
              steps: [
                "Position value = 100 × $50 = $5,000. Equity = 50% × $5,000 = $2,500. Loan = $2,500.",
                "The loan is fixed. At price P, equity = 100P − $2,500 and value = 100P.",
                "Set equity/value = 25%: (100P − 2,500) / 100P = 0.25 → 75P = 2,500 → P = $33.33.",
                "At $65: equity = 100(65) − 2,500 = $4,000. Return = (4,000 − 2,500)/2,500 = 60%.",
              ],
              answer:
                "The margin call comes at $33.33. At $65 her return is 60%, against a 30% return on the stock itself — leverage of exactly 2×, which is what a 50% initial margin buys. Note the symmetry: the same 2× applies on the way down, which is why the call arrives after only a 33% price fall.",
            },
          },
          {
            kind: "callout",
            label: "The loan does not move",
            body: "Every margin question is easier once you notice the loan amount is fixed. Equity absorbs the entire price change, in both directions. That single fact produces the leverage ratio, the margin call price and the return, so there is nothing else to memorise.",
          },
          {
            kind: "bullets",
            items: [
              "Market order — executes immediately at the best available price; certainty of execution, not of price.",
              "Limit order — executes only at a stated price or better; certainty of price, not of execution.",
              "Stop order — becomes a market order once a trigger price trades; used to limit a loss, and gives no price guarantee.",
              "Stop-limit order — becomes a limit order at the trigger; can fail to execute in a fast market.",
            ],
          },
        ],
      },
      {
        heading: "Index construction — three methods, three answers",
        blocks: [
          {
            kind: "p",
            text: "An index is a set of choices, and the weighting choice dominates the result. The same securities over the same period produce materially different returns depending on how they are weighted, which is why comparing a portfolio to the wrong index tells you nothing.",
          },
          {
            kind: "table",
            table: {
              caption: "Weighting methods",
              headers: ["Method", "Weight determined by", "Built-in bias"],
              rows: [
                ["Price-weighted", "Share price", "Toward high-priced shares; distorted by splits"],
                ["Market-cap-weighted", "Price × shares outstanding", "Toward large companies; toward whatever has risen"],
                ["Float-adjusted cap", "Price × shares available to the public", "Same, but matches investable supply"],
                ["Equal-weighted", "Identical weight to each", "Toward small companies; needs regular rebalancing"],
                ["Fundamental", "Accounting measures — sales, book value", "Toward value; contrarian by construction"],
              ],
            },
          },
          {
            kind: "example",
            example: {
              title: "One move, three index returns",
              prompt:
                "An index holds three stocks. A: $100, 1M shares. B: $20, 10M shares. C: $50, 4M shares. B rises 20% to $24; A and C are unchanged. What is the index return under price, market-cap and equal weighting?",
              steps: [
                "Price-weighted: (100 + 20 + 50)/3 = 56.67 before; (100 + 24 + 50)/3 = 58.00 after. Return = 58.00/56.67 − 1 = 2.35%.",
                "Cap-weighted: caps are $100M, $200M, $200M = $500M before. After, B is $240M, so $540M. Return = 540/500 − 1 = 8.00%.",
                "Equal-weighted: the average of the three returns, (0% + 20% + 0%)/3 = 6.67%.",
              ],
              answer:
                "2.35%, 8.00% and 6.67% — from identical price action. B is the cheapest share but 40% of the market-cap index and only 12% of the price-weighted one, which is why the cap-weighted index captures nearly all of the move and the price-weighted index barely notices it.",
            },
          },
          {
            kind: "p",
            text: "Rebalancing restores the intended weights; reconstitution changes which securities are in the index at all. Equal-weighted indexes require frequent rebalancing and therefore carry real turnover costs, while a cap-weighted index rebalances itself automatically as prices move — one of the strongest practical arguments for cap weighting.",
          },
        ],
      },
      {
        heading: "Market efficiency",
        blocks: [
          {
            kind: "p",
            text: "An efficient market is one in which prices reflect available information fully and quickly. The three forms differ only in what counts as available.",
          },
          {
            kind: "table",
            table: {
              caption: "The three forms",
              headers: ["Form", "Prices reflect", "If it holds, this stops working"],
              rows: [
                ["Weak", "All past price and volume data", "Technical analysis"],
                ["Semi-strong", "All PUBLIC information", "Fundamental analysis on public data"],
                ["Strong", "All information, public and private", "Even insider trading"],
              ],
            },
          },
          {
            kind: "figure",
            figure: {
              caption: "The forms nest: strong contains semi-strong contains weak.",
              alt: "Three nested rectangles labelled weak, semi-strong and strong form efficiency.",
              svg: `<svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img">
  <rect x="20" y="14" width="420" height="120" rx="8" fill="none" stroke="var(--primary)" stroke-width="1.5"/>
  <text x="30" y="32" font-size="11" fill="var(--primary)">Strong — all information</text>
  <rect x="40" y="42" width="330" height="80" rx="7" fill="none" stroke="var(--ats-green)" stroke-width="1.5"/>
  <text x="50" y="60" font-size="11" fill="var(--ats-green)">Semi-strong — all public information</text>
  <rect x="60" y="70" width="200" height="42" rx="6" fill="none" stroke="var(--text-muted)" stroke-width="1.5"/>
  <text x="70" y="95" font-size="11" fill="var(--text-muted)">Weak — past prices</text>
</svg>`,
            },
          },
          {
            kind: "p",
            text: "Empirically, developed markets look broadly weak-form and largely semi-strong-form efficient; strong form is rejected, which is exactly why insider trading is profitable and therefore illegal. Note the direction of that argument — the law exists because the market is NOT strong-form efficient.",
          },
          {
            kind: "bullets",
            items: [
              "Anomalies that persist in the data include size, value, momentum and the post-earnings-announcement drift.",
              "Many published anomalies weaken or vanish after publication, which is itself evidence of efficiency at work.",
              "Behavioural explanations — overconfidence, loss aversion, herding, anchoring — describe why prices might deviate, without guaranteeing a tradable profit.",
              "Efficiency is about information, not about prices being RIGHT. A market can be efficient and still be wrong, because information can be.",
            ],
          },
          {
            kind: "callout",
            label: "The paradox worth understanding",
            body: "Markets become efficient only because analysts spend money trying to beat them. If everyone indexed, nobody would gather information and prices would stop reflecting it. Efficiency is a product of active effort, so a perfectly efficient market could not remain so — an equilibrium in which analysis earns just enough to cover its cost.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Initial margin", def: "The minimum equity fraction required at purchase." },
      { term: "Maintenance margin", def: "The equity fraction below which a margin call is triggered." },
      { term: "Margin call price", def: "loan / (shares × (1 − maintenance margin))." },
      { term: "Price-weighted index", def: "Weighted by share price; distorted by splits, biased to expensive shares." },
      { term: "Float adjustment", def: "Excluding shares unavailable to public investors, matching investable supply." },
      { term: "Rebalancing vs reconstitution", def: "Restoring weights vs changing which securities are members." },
      { term: "Weak-form efficiency", def: "Prices reflect past price and volume — technical analysis cannot add value." },
      { term: "Semi-strong-form efficiency", def: "Prices reflect all public information — fundamental analysis on public data cannot." },
      { term: "Strong-form efficiency", def: "Prices reflect private information too. Empirically rejected." },
    ],
    takeaways: [
      "The margin loan is fixed; equity absorbs the entire price move, which drives every margin calculation.",
      "50% initial margin is exactly 2× leverage — in both directions.",
      "Identical price action produces different index returns under different weighting; the method dominates.",
      "Cap-weighted indexes rebalance themselves; equal-weighted ones generate real turnover cost.",
      "The three efficiency forms nest, and each rules out a different kind of analysis.",
      "Strong form is empirically rejected — which is why insider trading is both profitable and illegal.",
      "Efficiency concerns information, not correctness: an efficient market can still be wrong.",
    ],
  },

  // ==========================================================
  // 2. EQUITY SECURITIES — TYPES, RIGHTS, GLOBAL ACCESS
  // ==========================================================
  {
    id: "cfa-l1-equity-securities",
    examSlug: "cfa",
    topicId: "equity",
    topicName: "Equity Investments",
    title: "Equity Securities: Types, Rights, and Global Access",
    readingMinutes: 20,
    summary:
      "Common and preferred shares and their variants, private versus public equity, how depository receipts give access to foreign companies, and why book ROE and the cost of equity are different numbers.",
    intro:
      "This reading is definitional and heavily examined precisely because it is definitional — the questions test whether you know which security carries which right. Depository receipts and the ROE-versus-required-return distinction are the two places candidates most often lose easy marks.",
    sections: [
      {
        heading: "Common and preferred shares",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Common and preferred compared",
              headers: ["Feature", "Common shares", "Preferred shares"],
              rows: [
                ["Dividend", "Discretionary, variable", "Fixed, and paid before common"],
                ["Voting", "Normally yes", "Normally no"],
                ["Claim in liquidation", "Last", "Ahead of common, behind all debt"],
                ["Upside participation", "Full", "Limited, unless convertible"],
                ["Maturity", "Perpetual", "Usually perpetual; can be callable"],
              ],
            },
          },
          {
            kind: "bullets",
            items: [
              "Cumulative preferred — unpaid dividends accumulate and must be cleared before any common dividend.",
              "Non-cumulative preferred — a missed dividend is simply gone.",
              "Participating preferred — receives the fixed dividend AND shares in additional distributions.",
              "Convertible preferred — exchangeable into common on stated terms; the equity upside with a dividend floor.",
              "Callable or putable preferred — the issuer may redeem, or the holder may force redemption.",
            ],
          },
          {
            kind: "p",
            text: "Statutory voting gives one vote per share per board seat. Cumulative voting lets a holder concentrate all of their votes on a single candidate, which is what allows a minority holder to win a seat — a small but reliably examined distinction.",
          },
        ],
      },
      {
        heading: "Private versus public equity",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Private equity characteristics",
              headers: ["Dimension", "Private", "Public"],
              rows: [
                ["Pricing", "Negotiated, infrequent", "Continuous and observable"],
                ["Liquidity", "Low; exit needs an event", "High"],
                ["Disclosure", "Limited, by agreement", "Extensive and mandated"],
                ["Investor base", "Restricted to qualified investors", "Open"],
                ["Management focus", "Long-term; no quarterly cycle", "Subject to quarterly scrutiny"],
              ],
            },
          },
          {
            kind: "bullets",
            items: [
              "Venture capital — early-stage, high failure rate, returns concentrated in a few holdings.",
              "Leveraged buyout — mature cash-generative businesses acquired with substantial debt.",
              "Private investment in public equity (PIPE) — a public company raising capital privately, often at a discount, when public issuance is unattractive.",
            ],
          },
        ],
      },
      {
        heading: "Investing across borders: depository receipts",
        blocks: [
          {
            kind: "p",
            text: "Direct investment in a foreign market means foreign currency, foreign settlement conventions, foreign disclosure standards and sometimes foreign ownership limits. Depository receipts exist to remove most of that friction: a bank holds the underlying foreign shares and issues a receipt that trades in the domestic market, in domestic currency.",
          },
          {
            kind: "table",
            table: {
              caption: "The main forms",
              headers: ["Instrument", "What it is"],
              rows: [
                ["Global depository receipt (GDR)", "Issued outside the issuer's home market and outside the US; usually trades in London or Luxembourg"],
                ["American depository receipt (ADR)", "A US-listed, dollar-denominated receipt; the underlying is an American depository SHARE"],
                ["Sponsored ADR", "Issued with the company's involvement; holders get voting rights and better disclosure"],
                ["Unsponsored ADR", "Issued without the company's involvement; the depository bank retains the voting rights"],
                ["Global registered share", "The same share trading in multiple markets in multiple currencies"],
                ["Basket of listed depository receipts", "An exchange-traded basket of DRs"],
              ],
            },
          },
          {
            kind: "callout",
            label: "Sponsored versus unsponsored is the tested distinction",
            body: "The exam wants one thing here: in a SPONSORED programme the company participates and the holder receives voting rights; in an UNSPONSORED programme the depository bank keeps them. Sponsored receipts also carry fuller disclosure, which is why they dominate. Currency risk does NOT disappear because the receipt trades in dollars — the receipt's price still tracks the foreign share's value in its own currency.",
          },
          {
            kind: "p",
            text: "ADRs are categorised by level. Level I trades over the counter with minimal reporting; Level II is exchange-listed with fuller reporting; Level III is exchange-listed and permits raising new capital. The pattern is that each level increases both disclosure obligations and access to capital.",
          },
        ],
      },
      {
        heading: "Book value, ROE, and the cost of equity",
        blocks: [
          {
            kind: "p",
            text: "Book value of equity is an accounting measure — assets less liabilities — and it accumulates through retained earnings. Market value reflects expected future cash flows. The two diverge for good reasons, and a company earning more than its cost of equity should trade above book.",
          },
          {
            kind: "formula",
            formula: {
              label: "Return on equity",
              expr: "ROE = net income / average shareholders' equity",
              note: "Beginning-of-period equity is also used; be consistent, and say which you used.",
            },
          },
          {
            kind: "p",
            text: "The critical distinction — and the one candidates lose marks on — is that ROE is a HISTORICAL ACCOUNTING result while the cost of equity is a FORWARD-LOOKING REQUIRED RETURN set by investors given the risk they bear. They are computed differently, mean different things, and are equal only by coincidence.",
          },
          {
            kind: "callout",
            label: "Value creation, stated precisely",
            body: "A company creates value when its return on equity exceeds its cost of equity, because it is earning more on shareholders' capital than shareholders require for the risk. Persistently earning less destroys value even while reporting a positive net income — profitability and value creation are not the same test.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Cumulative preferred", def: "Unpaid dividends accrue and must be cleared before any common dividend." },
      { term: "Participating preferred", def: "Fixed dividend PLUS a share in additional distributions." },
      { term: "Cumulative voting", def: "Votes may be concentrated on one candidate, letting a minority holder win a seat." },
      { term: "Depository receipt", def: "A domestically traded receipt over foreign shares held by a depository bank." },
      { term: "Sponsored ADR", def: "Company participates; the HOLDER gets voting rights and fuller disclosure." },
      { term: "Unsponsored ADR", def: "Company does not participate; the depository BANK retains voting rights." },
      { term: "PIPE", def: "Private investment in public equity — a public company raising capital privately." },
      { term: "Cost of equity", def: "The forward-looking return investors require. Not ROE." },
    ],
    takeaways: [
      "Preferred ranks ahead of common and behind all debt, with a fixed dividend and usually no vote.",
      "Cumulative voting is what lets a minority holder win a board seat.",
      "In a sponsored DR programme the holder votes; in an unsponsored one the depository bank does.",
      "A dollar-denominated ADR does NOT remove currency risk.",
      "ADR levels I to III trade increasing disclosure for increasing capital access.",
      "ROE is a historical accounting result; the cost of equity is a forward-looking required return.",
      "Value is created only when ROE exceeds the cost of equity — positive net income is not enough.",
    ],
  },

  // ==========================================================
  // 3. VALUATION
  // ==========================================================
  {
    id: "cfa-l1-equity-valuation",
    examSlug: "cfa",
    topicId: "equity",
    topicName: "Equity Investments",
    title: "Equity Valuation: Dividend Models, Multiples, and Asset-Based Approaches",
    readingMinutes: 22,
    summary:
      "The Gordon growth model and its sensitivity, multistage models, justified multiples derived rather than memorised, enterprise-value multiples, and when an asset-based valuation is the right tool.",
    intro:
      "Three families of model, each answering the same question differently: what a share is worth. Present-value models discount cash to holders, multiples compare against peers, and asset-based approaches value what the company owns. The examinable skill is computing them correctly and knowing which one the fact pattern calls for.",
    sections: [
      {
        heading: "The dividend discount model",
        blocks: [
          {
            kind: "p",
            text: "A share's value is the present value of the cash its holder will receive. For a going concern that means dividends, discounted at the required return on equity.",
          },
          {
            kind: "formula",
            formula: {
              label: "Gordon (constant) growth model",
              expr: "V0 = D1 / (r − g)   where D1 = D0 × (1 + g)",
              note: "Requires g < r and a growth rate that can plausibly persist forever. Sensitive to both inputs.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Gordon growth, and how fragile it is",
              prompt:
                "A company just paid a dividend of $2.00. Dividends are expected to grow at 4% indefinitely and the required return is 9%. Value the share, then revalue it if growth is 5% instead.",
              steps: [
                "D1 = $2.00 × 1.04 = $2.08. Use next year's dividend, not this year's — the single most common error here.",
                "V0 = $2.08 / (0.09 − 0.04) = $2.08 / 0.05 = $41.60.",
                "At g = 5%: D1 = $2.00 × 1.05 = $2.10, and V0 = $2.10 / 0.04 = $52.50.",
              ],
              answer:
                "$41.60, rising to $52.50 — a 26% increase in value from a one-percentage-point change in an assumed perpetual growth rate. That sensitivity is the model's most important property: the denominator is a small difference between two uncertain numbers, so small input errors produce large valuation errors.",
            },
          },
          {
            kind: "p",
            text: "Where growth is currently high and cannot persist, a multistage model discounts the explicit high-growth dividends individually and then applies Gordon growth to a sustainable rate from the end of that period, producing a terminal value that must itself be discounted back.",
          },
          {
            kind: "example",
            example: {
              title: "Two-stage: high growth, then reality",
              prompt:
                "D0 = $1.50. Dividends grow 20% for three years, then 5% forever. Required return 10%. Value the share.",
              steps: [
                "D1 = $1.80, D2 = $2.16, D3 = $2.592.",
                "PV of those three: 1.80/1.10 = $1.6364; 2.16/1.10² = $1.7851; 2.592/1.10³ = $1.9474. Sum = $5.37.",
                "D4 = $2.592 × 1.05 = $2.7216. Terminal value at t=3: TV3 = 2.7216 / (0.10 − 0.05) = $54.43.",
                "Discount it: $54.43 / 1.10³ = $40.90.",
              ],
              answer:
                "V0 = $5.37 + $40.90 = $46.26. Note that 88% of the value sits in the terminal value — normal for a two-stage model, and the reason the terminal growth assumption deserves more scrutiny than the explicit forecast.",
            },
          },
          {
            kind: "p",
            text: "Free cash flow to equity is the alternative when a company pays no dividend or pays one unrelated to its capacity. FCFE is the cash available to shareholders after operating expenses, interest, taxes, working capital and capital expenditure, plus net borrowing — discounted at the same required return.",
          },
        ],
      },
      {
        heading: "Multiples, derived rather than memorised",
        blocks: [
          {
            kind: "p",
            text: "A justified multiple is not a separate formula to learn. Divide the Gordon growth model by earnings and the price-to-earnings ratio falls out, which is why the drivers of P/E are exactly the drivers of value: payout, required return and growth.",
          },
          {
            kind: "formula",
            formula: {
              label: "Justified P/E",
              expr: "leading P/E = payout / (r − g);   trailing P/E = payout × (1 + g) / (r − g)",
              note: "Leading uses next year's earnings, trailing uses the last twelve months'.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Justified P/E and sustainable growth",
              prompt:
                "A company pays out 40% of earnings, has a required return of 9% and grows at 4%. What are its justified leading and trailing P/E ratios? If ROE is 12%, is the 4% growth assumption consistent?",
              steps: [
                "Leading P/E = 0.40 / (0.09 − 0.04) = 8.00×.",
                "Trailing P/E = 0.40 × 1.04 / 0.05 = 8.32×.",
                "Sustainable growth = ROE × retention ratio = 12% × (1 − 0.40) = 12% × 0.60 = 7.2%.",
              ],
              answer:
                "8.00× leading and 8.32× trailing. But the 4% growth assumption is INCONSISTENT with the fundamentals: retaining 60% of earnings at a 12% ROE supports 7.2% growth, not 4%. Either the company is reinvesting at lower returns than its reported ROE, or the growth forecast is too conservative. Checking g against ROE × b is how you catch an internally contradictory valuation.",
            },
          },
          {
            kind: "table",
            table: {
              caption: "Choosing a multiple",
              headers: ["Multiple", "Use when", "Breaks down when"],
              rows: [
                ["P/E", "Earnings are positive and reasonably stable", "Earnings are negative or highly cyclical"],
                ["P/B", "Assets are marked near fair value — banks, insurers", "Intangibles dominate; book value is stale"],
                ["P/S", "Earnings are negative but the business is real", "Margins differ wildly across the peer set"],
                ["P/CF", "Accruals are suspect and cash is cleaner", "Capital intensity differs across peers"],
                ["EV/EBITDA", "Capital structures differ across the peer set", "Capital intensity differs — EBITDA ignores capex"],
              ],
            },
          },
          {
            kind: "p",
            text: "Enterprise value multiples exist because equity multiples are contaminated by leverage. EV is market capitalisation plus debt less cash — what it would cost to buy the whole business — so EV/EBITDA compares operating performance across companies financed differently.",
          },
          {
            kind: "example",
            example: {
              title: "Enterprise value",
              prompt:
                "Market capitalisation is $800M, total debt $300M, cash $50M and EBITDA $140M. Compute enterprise value and EV/EBITDA.",
              steps: [
                "EV = market cap + debt − cash = 800 + 300 − 50 = $1,050M.",
                "EV/EBITDA = 1,050 / 140 = 7.50×.",
              ],
              answer:
                "EV is $1,050M and EV/EBITDA is 7.50×. Cash is subtracted because an acquirer effectively receives it back — you are buying the operating business, not the bank balance.",
            },
          },
        ],
      },
      {
        heading: "Asset-based valuation, and choosing an approach",
        blocks: [
          {
            kind: "p",
            text: "An asset-based valuation values the equity as the market value of assets less the market value of liabilities. It suits companies whose value genuinely resides in identifiable assets, and it provides a floor — a liquidation value — for a company in distress.",
          },
          {
            kind: "bullets",
            items: [
              "Works for natural resource companies, property holdings, financial firms and closed-end funds.",
              "Fails where value is intangible — brand, software, research pipeline, workforce — because those rarely sit on the balance sheet at anything like their worth.",
              "Fails for a going concern whose assets are worth more in combination than separately.",
              "Most useful as a floor rather than as a central estimate.",
            ],
          },
          {
            kind: "table",
            table: {
              caption: "Which approach the fact pattern is asking for",
              headers: ["Situation", "Approach"],
              rows: [
                ["Stable dividend payer, mature", "Gordon growth DDM"],
                ["High growth now, moderating later", "Multistage DDM"],
                ["No dividend, positive free cash flow", "FCFE"],
                ["Comparable listed peers exist", "Price or EV multiples"],
                ["Peers differ in leverage", "EV/EBITDA rather than P/E"],
                ["Asset-heavy, or distressed", "Asset-based"],
              ],
            },
          },
          {
            kind: "callout",
            label: "Use more than one",
            body: "No single model is right. Present-value models are theoretically sound and hostage to their assumptions; multiples are grounded in observable prices and inherit whatever mispricing exists in the peer set; asset-based approaches are concrete and ignore earning power. Convergence across approaches is evidence; divergence tells you which assumption to examine.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Gordon growth model", def: "V0 = D1/(r − g). Requires g < r and perpetual sustainability." },
      { term: "Multistage DDM", def: "Explicit high-growth dividends plus a discounted terminal value." },
      { term: "Terminal value", def: "The Gordon value at the end of the explicit forecast; usually most of the total." },
      { term: "FCFE", def: "Cash available to shareholders after expenses, interest, tax, working capital and capex, plus net borrowing." },
      { term: "Justified P/E", def: "payout/(r − g) leading; payout(1 + g)/(r − g) trailing. Derived from Gordon growth." },
      { term: "Sustainable growth rate", def: "ROE × retention ratio — the internal consistency check on any growth assumption." },
      { term: "Enterprise value", def: "Market cap + debt − cash. The cost of the whole operating business." },
      { term: "Asset-based valuation", def: "Market value of assets less liabilities; a floor, not usually a central estimate." },
    ],
    takeaways: [
      "Gordon growth uses NEXT year's dividend — D1, not D0.",
      "One percentage point on perpetual growth moved this valuation 26%; the model is fragile by construction.",
      "In a two-stage model most of the value is terminal, so scrutinise the terminal assumption hardest.",
      "Justified multiples are Gordon growth divided by earnings — derive them, don't memorise them.",
      "Check g against ROE × retention; a mismatch means the valuation contradicts itself.",
      "EV = market cap + debt − cash; cash is subtracted because the acquirer gets it back.",
      "Use EV multiples when peers differ in leverage, since P/E is contaminated by capital structure.",
      "Asset-based valuation is a floor and fails wherever value is intangible.",
    ],
  },
];

export const equityDeepQuestions: Question[] = [];
