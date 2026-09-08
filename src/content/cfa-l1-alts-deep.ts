// ============================================================
// Certus — CFA Level I Alternative Investments, in depth
//
// WHY THIS FILE EXISTS
// Alts is 6-9% of Level I (CFA Institute's current published table; it was
// 7-10% under the older one). Our coverage was 22 minutes across two survey
// chapters, which is enough to define "hedge fund" and nowhere near enough
// to answer the questions the exam actually asks — which are about FEE
// ARITHMETIC, PERFORMANCE METRICS, and WHY REPORTED RETURNS FLATTER REALITY.
//
// Alts is also the best points-per-hour block on the exam. There is very
// little math, the math there is is arithmetic rather than theory, and the
// concepts are definitional. A candidate who is short on time should not be
// punting this topic; they should be farming it. That's the pitch this
// content has to earn.
//
// STRUCTURE
// Built on CFA Institute's 2027 Level I Alternative Investments topic
// outline, which runs: features/methods/structures -> performance and
// returns -> private capital (equity and debt) -> real estate and
// infrastructure -> natural resources -> hedge funds -> digital assets.
// Five chapters mapped onto those seven modules.
//
// readingMinutes here were set by scripts/reading-time.mjs, not by hand:
// 9 / 11 / 6 / 12 / 7 = 45 honest minutes. They are NOT yet at the
// gold-standard 18-22 min/chapter bar in CLAUDE.md — reaching it means
// roughly tripling the prose (these run ~900-1,500 words; the bar wants
// ~3,500). The structure, figures, worked examples and question bank are
// in place; what is missing is depth of exposition, chapter by chapter.
// Private capital (6 min) and hedge funds/digital (7 min) are thinnest.
//
// STYLE RULES FOR THIS FILE
// · Every worked example's arithmetic was verified numerically before
//   being written down. If a number here is wrong, the example is wrong,
//   not rounded.
// · Fee examples state their conventions explicitly (fee base, hurdle type,
//   order of operations). Most candidate errors are convention errors, not
//   arithmetic errors, and a worked example that hides its conventions
//   teaches the wrong lesson.
// · Figures use CSS variables so they theme in light and dark.
// · No invented industry statistics. Where a number isn't verifiable from
//   a primary source it is described qualitatively instead.
// ============================================================

import { Chapter, Question } from "./types";

export const altsDeepChapters: Chapter[] = [
  // ==========================================================
  // 1. FEATURES, METHODS, AND STRUCTURES
  // ==========================================================
  {
    id: "cfa-l1-alts-structures",
    examSlug: "cfa",
    topicId: "alts",
    topicName: "Alternative Investments",
    title: "Features, Investment Methods, and Fund Structures",
    readingMinutes: 9,
    summary:
      "What actually makes an investment 'alternative' — and the GP/LP structure, capital-call mechanics, and fee terms that follow from it.",
    intro:
      "The mistake candidates make with this topic is treating 'alternative' as a list of asset classes to memorize. It isn't a list; it's a STRUCTURE. A warehouse owned through a private fund and a warehouse owned through a listed REIT are the same building — but one is an alternative investment and one behaves like a stock, because what differs is the ownership wrapper, the liquidity, the fee terms, and how the value gets marked. Get the structure right and the categories take care of themselves. This chapter builds that frame: the shared features, the three ways to get exposure, and the general-partner / limited-partner machinery that produces the J-curve, the capital call, and the '2 and 20' you'll be asked to compute.",
    sections: [
      {
        heading: "1. What the category actually has in common",
        blocks: [
          {
            kind: "p",
            text: "Alternative investments are usually defined by exclusion — everything outside publicly traded stocks, bonds, and cash. That definition is true but useless for the exam. The useful definition is a cluster of SHARED STRUCTURAL FEATURES that show up again and again regardless of the underlying asset.",
          },
          {
            kind: "bullets",
            items: [
              "ILLIQUIDITY. Capital is often locked up for years. You cannot sell a private equity stake the way you sell a share of Apple, and the exam will punish any answer that assumes you can.",
              "LOW TRANSPARENCY and light regulation. These are typically private offerings restricted to institutional or accredited investors, with limited disclosure. That is precisely why DUE DILIGENCE is emphasized so heavily.",
              "VALUATION DIFFICULTY. Positions are private, thinly traded, or appraised rather than priced. Reported values are estimates, and estimates behave differently from market prices — a fact that drives the whole of Chapter 2.",
              "LEVERAGE and derivatives use, often substantial.",
              "SPECIALIZED FEE STRUCTURES — a management fee plus a share of profits, rather than a single flat expense ratio.",
              "CONCENTRATION and reliance on manager skill. Dispersion between top-quartile and bottom-quartile managers is far wider than in public equity funds, so manager selection matters more here than anywhere else.",
            ],
          },
          {
            kind: "callout",
            label: "The trap in the definition",
            body: "A listed REIT, a commodity ETF, and a publicly traded private-equity firm's own shares all give exposure to 'alternative' assets through a LIQUID, TRANSPARENT, DAILY-PRICED wrapper. They therefore behave much more like equities — including correlating with equities in a selloff, exactly when you wanted the diversification. If a question contrasts a listed vehicle with a private fund, the answer almost always turns on liquidity and correlation, not on the underlying asset.",
          },
          {
            kind: "p",
            text: "Why hold any of this? Two reasons, and the exam wants both. First, RETURN POTENTIAL — access to return streams and illiquidity premia not available in public markets. Second, and more defensible, DIVERSIFICATION: returns that are imperfectly correlated with stocks and bonds can lower total portfolio risk even when the alternative is volatile on its own. That is the portfolio-theory logic from the Quant material applied here, and it is the reason a low-correlation, high-volatility asset can still improve a portfolio.",
          },
        ],
      },
      {
        heading: "2. Three ways to get exposure",
        blocks: [
          {
            kind: "p",
            text: "CFA Institute asks you to compare three investment METHODS. They differ in control, cost, and how much expertise the investor needs to supply themselves.",
          },
          {
            kind: "table",
            table: {
              caption: "Investment methods compared",
              headers: ["Method", "What it is", "Control", "Fees", "Demands on the investor"],
              rows: [
                ["Fund investment", "Commit capital to a manager's pooled vehicle; the manager sources and manages deals", "Lowest — you own a claim on a portfolio you did not pick", "Highest — full management + performance fees", "Lowest; suits investors without in-house expertise"],
                ["Co-investment", "Invest in the fund AND put additional capital directly into specific deals alongside the manager", "Middle — you choose which deals to add to", "Reduced or waived on the co-invest portion", "Moderate; you must be able to evaluate a single deal quickly"],
                ["Direct investment", "Buy the asset or company yourself, no intermediary fund", "Highest", "No external fees, but full internal cost", "Highest; requires real in-house capability"],
              ],
            },
          },
          {
            kind: "p",
            text: "Co-investment is the one candidates under-learn, and it is the one most likely to appear. The pitch is that it lets an investor lower blended fees and tilt toward deals they like, while still relying on the manager's sourcing. The catch is ADVERSE SELECTION: the investor should ask why the manager is offering this particular deal rather than funding it inside the main fund. Co-investment also demands the capability to underwrite a deal on the manager's timetable, which many investors do not have.",
          },
        ],
      },
      {
        heading: "3. The GP/LP structure and how capital actually moves",
        blocks: [
          {
            kind: "p",
            text: "Most private alternative funds are limited partnerships. The GENERAL PARTNER (GP) is the manager: it sources deals, makes decisions, and bears unlimited liability. The LIMITED PARTNERS (LPs) supply the capital and have liability limited to what they committed. The terms live in a limited partnership agreement (LPA), and a side letter may give particular LPs different terms.",
          },
          {
            kind: "p",
            text: "The mechanic that surprises people: an LP does not hand over the money up front. It makes a COMMITMENT. The GP then issues CAPITAL CALLS (drawdowns) over an investment period as deals are found. Uncalled commitment is 'dry powder' the LP must keep available — which is itself a liquidity constraint, because a capital call can arrive at an inconvenient moment. Proceeds flow back as DISTRIBUTIONS when investments are exited, not on a schedule.",
          },
          {
            kind: "figure",
            figure: {
              caption: "The J-curve: early fees and write-downs push returns negative before exits arrive.",
              alt: "A curve starting at zero, dipping below the axis in early years, then rising steeply above it in later years.",
              svg: `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="40" y1="150" x2="430" y2="150" stroke="var(--border)" stroke-width="1.5"/><line x1="40" y1="20" x2="40" y2="200" stroke="var(--border)" stroke-width="1.5"/><text x="8" y="40" font-size="10" fill="var(--text-muted)">+</text><text x="8" y="195" font-size="10" fill="var(--text-muted)">−</text><text x="330" y="168" font-size="10" fill="var(--text-muted)">Fund life →</text><path d="M40 150 C 90 178, 130 192, 170 190 C 230 186, 300 120, 430 45" fill="none" stroke="var(--primary)" stroke-width="2.5"/><circle cx="170" cy="190" r="3.5" fill="var(--ats-red)"/><text x="120" y="209" font-size="9.5" fill="var(--ats-red)">trough (yrs 2–4)</text><text x="52" y="140" font-size="9.5" fill="var(--text-muted)">fees + write-downs</text><text x="300" y="95" font-size="9.5" fill="var(--ats-green)">exits / distributions</text><text x="47" y="17" font-size="9.5" fill="var(--text-muted)">Cumulative net return to LP</text></svg>`,
            },
          },
          {
            kind: "p",
            text: "That shape is the J-CURVE, and its cause is worth stating precisely because the exam tests the cause rather than the picture. Early in a fund's life, management fees are being charged on committed capital while almost nothing has been exited; underperforming holdings get written down promptly while winners are held at cost until a financing event justifies marking them up. Fees and write-downs are recognized early, gains late. The negative early return is therefore a REPORTING artifact of conservative marks and front-loaded fees, not evidence that the fund is failing.",
          },
          {
            kind: "callout",
            label: "Why this matters for judging a fund",
            body: "A young fund's IRR is close to meaningless, and a GP quoting a spectacular IRR two years in is quoting the arithmetic of a small early exit, not skill. Interim private-fund performance is only interpretable alongside how much capital has actually been called and returned — the metrics built in the next chapter.",
          },
        ],
      },
      {
        heading: "4. Fee terms: the vocabulary you must have exact",
        blocks: [
          {
            kind: "p",
            text: "Fee questions are the most reliably computable questions in this topic, and they are lost on definitions rather than on arithmetic. Learn these precisely.",
          },
          {
            kind: "bullets",
            items: [
              "MANAGEMENT FEE — an annual percentage (classically ~2%). The BASE matters enormously: private funds often charge on COMMITTED capital during the investment period and on invested capital afterward, while hedge funds charge on assets under management. A question that specifies the base is testing whether you noticed.",
              "INCENTIVE / PERFORMANCE FEE — a share of profits (classically ~20%). In private equity this share is called CARRIED INTEREST.",
              "HURDLE RATE — a minimum return before any incentive fee is earned. A SOFT hurdle, once cleared, pays the manager on ALL profit; a HARD hurdle pays only on profit ABOVE the hurdle. Same hurdle number, different fee.",
              "HIGH-WATER MARK — the fund must exceed its previous peak value before charging incentive fees again, so an investor never pays twice for recovering the same ground.",
              "CATCH-UP CLAUSE — after a hard hurdle is met, the GP takes an outsized share of the next tranche of profit until it has received its full carry percentage of total profit.",
              "CLAWBACK — obliges the GP to return carry already received if later losses mean it was overpaid across the fund's life.",
              "WATERFALL — the order of distribution. DEAL-BY-DEAL (American) pays carry as each deal exits and favors the GP; WHOLE-OF-FUND (European) returns all LP capital first and favors the LP.",
            ],
          },
          {
            kind: "callout",
            label: "Soft vs hard hurdle — the single highest-yield distinction here",
            body: "With a 5% hurdle and $18M of profit on $100M, a SOFT hurdle charges 20% on the full $18M ($3.6M). A HARD hurdle charges 20% on $13M ($2.6M). The hurdle rate is identical; the fee differs by 38%. If a question gives you a hurdle and does not say which type, the word 'soft' or 'hard' is in the stem somewhere — find it.",
          },
          {
            kind: "p",
            text: "FUND OF FUNDS deserve their own line. They diversify across managers and provide access and due diligence for smaller investors, but they add a SECOND fee layer on top of the underlying funds' fees. The exam's point is nearly always that this double layer is a material drag, and that the diversification bought may not justify it.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "General partner (GP)", def: "The manager of a private fund; sources and manages investments and bears unlimited liability." },
      { term: "Limited partner (LP)", def: "An investor supplying capital, with liability limited to the amount committed." },
      { term: "Commitment", def: "Capital an LP pledges, drawn down over time by capital calls rather than paid up front." },
      { term: "Capital call", def: "A GP's demand that LPs transfer a portion of committed capital to fund an investment." },
      { term: "J-curve", def: "The early-negative, later-positive path of a private fund's return, caused by front-loaded fees and conservative early marks." },
      { term: "Co-investment", def: "Investing directly in a specific deal alongside a fund in which one is already an LP, usually at reduced fees." },
      { term: "Soft hurdle", def: "A hurdle that, once cleared, allows the incentive fee to be charged on all profit." },
      { term: "Hard hurdle", def: "A hurdle that allows the incentive fee to be charged only on profit above the hurdle." },
      { term: "High-water mark", def: "The prior peak value that must be exceeded before incentive fees can be charged again." },
      { term: "Clawback", def: "A provision requiring the GP to return previously received carried interest if later results show it was overpaid." },
    ],
    takeaways: [
      "'Alternative' describes a structure — illiquid, opaque, leveraged, appraisal-valued, performance-fee'd — not a fixed list of assets.",
      "A listed REIT or commodity ETF holds alternative assets in a liquid wrapper, so it behaves like equity and diversifies less than the private version.",
      "Fund, co-investment, and direct investment trade fees against control and required in-house expertise.",
      "LPs commit capital; GPs call it over time. Uncalled commitments are a real liquidity constraint.",
      "The J-curve comes from front-loaded fees plus prompt write-downs and delayed write-ups — it is a reporting artifact, not a verdict.",
      "Soft vs hard hurdle changes the fee on the same hurdle rate; a high-water mark prevents paying twice for the same recovery.",
    ],
  },

  // ==========================================================
  // 2. PERFORMANCE AND RETURNS
  // ==========================================================
  {
    id: "cfa-l1-alts-performance",
    examSlug: "cfa",
    topicId: "alts",
    topicName: "Alternative Investments",
    title: "Performance Appraisal, Fee Arithmetic, and Why Reported Returns Flatter",
    readingMinutes: 11,
    summary:
      "Computing net-of-fee returns under real fee terms, reading MOIC / DPI / RVPI / TVPI, and the biases that make alternative returns look better and smoother than they were.",
    intro:
      "This is the chapter that earns its reading time. Almost every computational Alternatives question on Level I is a fee calculation or a multiple calculation, and almost every conceptual one is about why an alternative's reported track record overstates its true performance. Both are learnable in an afternoon. We'll do the fee arithmetic under explicit conventions, build the private-capital multiples from first principles so you never have to memorize them, and then take apart the four biases — smoothing, survivorship, backfill, and the IRR-versus-TWR problem — that the exam returns to year after year.",
    sections: [
      {
        heading: "1. Fee arithmetic, done carefully",
        blocks: [
          {
            kind: "p",
            text: "The only hard part of a fee question is ORDER OF OPERATIONS. Establish it once and the arithmetic is trivial. The standard convention, unless the stem says otherwise: compute the gross ending value, subtract the management fee, then compute the incentive fee on the profit that remains.",
          },
          {
            kind: "formula",
            formula: {
              label: "Net return to the investor",
              expr: "Net = (Gross ending value − Management fee − Incentive fee) / Beginning value − 1",
              note: "Management fee base is usually beginning-of-period AUM for hedge funds; check the stem. The incentive fee is charged on profit AFTER the management fee unless stated otherwise.",
            },
          },
          {
            kind: "example",
            example: {
              title: "2 and 20 with a 5% hurdle — soft versus hard",
              prompt:
                "A fund begins the year with $100M and earns a 20% gross return. It charges a 2% management fee on beginning-of-year AUM and a 20% incentive fee on profits net of the management fee, subject to a 5% hurdle. Compute the investor's net return under (a) a soft hurdle and (b) a hard hurdle.",
              steps: [
                "Gross ending value = $100M × 1.20 = $120M.",
                "Management fee = 2% × $100M = $2M.",
                "Profit net of the management fee = $120M − $100M − $2M = $18M.",
                "Hurdle amount = 5% × $100M = $5M. Profit of $18M clears it, so an incentive fee is owed under either type.",
                "(a) SOFT hurdle — once cleared, the fee applies to ALL profit: 20% × $18M = $3.6M. Total fees $5.6M. Ending value to the investor = $120M − $5.6M = $114.4M.",
                "(b) HARD hurdle — the fee applies only ABOVE the hurdle: 20% × ($18M − $5M) = 20% × $13M = $2.6M. Total fees $4.6M. Ending value = $120M − $4.6M = $115.4M.",
              ],
              answer:
                "Soft hurdle: net return 14.4%. Hard hurdle: net return 15.4%. A 20% gross return became 14.4% net — 5.6 percentage points of fee drag — and the soft/hard distinction alone is worth a full percentage point.",
            },
          },
          {
            kind: "example",
            example: {
              title: "How a high-water mark actually protects you",
              prompt:
                "An investor puts $100M into a fund charging 2% of beginning-of-year AUM and 20% incentive with a high-water mark. Year 1 gross return is −10%. Year 2 gross return is +25%. What is the investor's cumulative two-year return, and what did the high-water mark save?",
              steps: [
                "Year 1: gross value = $100M × 0.90 = $90M. Management fee = 2% × $100M = $2M. Ending value = $88M. The fund lost money, so no incentive fee. The high-water mark remains $100M.",
                "Year 2: gross value = $88M × 1.25 = $110M. Management fee = 2% × $88M = $1.76M. Value after the management fee = $108.24M.",
                "Incentive fee applies only to value above the $100M high-water mark: $108.24M − $100M = $8.24M of qualifying profit. Fee = 20% × $8.24M = $1.648M.",
                "Ending value = $108.24M − $1.648M = $106.592M.",
                "Without the high-water mark, the incentive fee would have been charged on the year's full gain: 20% × ($108.24M − $88M) = 20% × $20.24M = $4.048M, leaving $104.192M.",
              ],
              answer:
                "Cumulative two-year return is 6.59%. The high-water mark saved the investor $2.4M — the fee they would otherwise have paid a second time on ground the fund had merely recovered.",
            },
          },
        ],
      },
      {
        heading: "2. Private capital multiples: build them, don't memorize them",
        blocks: [
          {
            kind: "p",
            text: "Four ratios cover private-fund reporting, and all four share the same denominator — PAID-IN CAPITAL, meaning the capital actually called and contributed, not the amount committed. Once you hold the denominator fixed, the numerators are obvious.",
          },
          {
            kind: "table",
            table: {
              caption: "Private capital performance multiples",
              headers: ["Metric", "Numerator", "Reads as", "What it tells you"],
              rows: [
                ["DPI — distributions to paid-in", "Cash actually distributed", "Realized multiple", "How much real money has come back. Cannot be argued with."],
                ["RVPI — residual value to paid-in", "Remaining NAV of unexited holdings", "Unrealized multiple", "Paper value still at risk, based on the GP's own marks."],
                ["TVPI — total value to paid-in", "Distributions + residual NAV", "Total multiple (DPI + RVPI)", "Headline number. Only as trustworthy as its RVPI component."],
                ["MOIC — multiple on invested capital", "Total value of investments", "Gross deal multiple", "Often quoted before fees and at the deal rather than fund level."],
              ],
            },
          },
          {
            kind: "example",
            example: {
              title: "Reading a fund's interim report",
              prompt:
                "An LP committed $100M to a fund. To date, $80M has been called. The fund has distributed $60M and reports a residual NAV of $70M. Compute DPI, RVPI, and TVPI, and say what the LP should conclude.",
              steps: [
                "Paid-in capital is the called amount, $80M — not the $100M commitment. This is the step candidates get wrong.",
                "DPI = $60M / $80M = 0.75×.",
                "RVPI = $70M / $80M = 0.875×.",
                "TVPI = DPI + RVPI = 0.75 + 0.875 = 1.625×. (Check: ($60M + $70M) / $80M = 1.625×.)",
              ],
              answer:
                "TVPI of 1.625× looks strong, but DPI of 0.75× means the LP has not yet received back even the capital it contributed — 54% of the reported total value is still the GP's own estimate of unexited holdings. The LP also still owes $20M of uncalled commitment. A headline multiple above 1.5× with a DPI below 1.0× is a paper result, not a realized one.",
            },
          },
        ],
      },
      {
        heading: "3. Why alternative track records overstate reality",
        blocks: [
          {
            kind: "p",
            text: "This is the most reliably tested conceptual material in the topic. Four distinct effects, each with a distinct mechanism — and the exam rewards naming the mechanism, not just the bias.",
          },
          {
            kind: "bullets",
            items: [
              "SMOOTHING (stale pricing). Illiquid assets are appraised periodically rather than priced continuously, and appraisals anchor on the prior appraisal. Reported returns are therefore artificially smooth, which UNDERSTATES volatility, UNDERSTATES correlation with public markets, and so OVERSTATES the Sharpe ratio and the apparent diversification benefit. Note the direction carefully: smoothing does not much change average return; it flatters every risk measure computed from it.",
              "SURVIVORSHIP BIAS. Funds that fail stop reporting and drop out of the index. What remains is the survivors, so index returns exceed the return an investor would actually have earned choosing blind at the start.",
              "BACKFILL BIAS. A fund joins a database and its prior track record is added retroactively. Managers with bad early histories don't volunteer to join, so the backfilled history is favorably selected.",
              "IRR vs TIME-WEIGHTED RETURN. Private funds report IRR, a money-weighted measure. Because the GP controls the TIMING of calls and distributions, the GP partially controls its own reported IRR — early exits and subscription-line financing that delays capital calls both inflate it. IRR is therefore not comparable with the time-weighted returns quoted by public funds.",
            ],
          },
          {
            kind: "callout",
            label: "The one-sentence version the exam wants",
            body: "Reported alternative returns are smoother, more selectively sampled, and measured on a different clock than public-market returns — so any direct comparison of an alternative's Sharpe ratio or correlation against a public index is biased in the alternative's favor.",
          },
          {
            kind: "p",
            text: "One more measurement caution. Standard risk-adjusted measures assume returns are roughly normally distributed. Many alternative strategies deliberately produce NON-NORMAL returns — frequent small gains punctuated by rare large losses (negative skew, fat tails). A Sharpe ratio computed on such a series looks excellent right up until the tail event, because the metric simply does not see the risk being taken. This is why the curriculum stresses examining the full return distribution and drawdowns rather than a single ratio.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Paid-in capital", def: "Capital actually called and contributed by LPs; the denominator of DPI, RVPI, and TVPI." },
      { term: "DPI", def: "Distributions to paid-in capital — the realized, cash-returned multiple." },
      { term: "RVPI", def: "Residual value to paid-in capital — the unrealized multiple based on the GP's marks." },
      { term: "TVPI", def: "Total value to paid-in capital; DPI + RVPI." },
      { term: "MOIC", def: "Multiple on invested capital — total value divided by capital invested, often quoted gross of fees." },
      { term: "Smoothing (stale pricing)", def: "Appraisal-based valuation that anchors on prior marks, understating volatility and correlation." },
      { term: "Survivorship bias", def: "Upward bias in index returns caused by failed funds ceasing to report." },
      { term: "Backfill bias", def: "Upward bias from adding a fund's favorable prior history when it joins a database." },
      { term: "Negative skew", def: "A return distribution of frequent small gains and rare large losses, which flatters the Sharpe ratio." },
    ],
    takeaways: [
      "Fee questions are order-of-operations questions: gross value, less management fee, then incentive on the remaining profit.",
      "A soft hurdle charges on all profit once cleared; a hard hurdle charges only on the excess. Same rate, materially different fee.",
      "A high-water mark stops the investor paying an incentive fee twice for recovering the same losses.",
      "DPI, RVPI, and TVPI all divide by PAID-IN capital, not committed capital.",
      "A high TVPI with a low DPI is a paper result — most of the value is still the GP's own estimate.",
      "Smoothing understates volatility and correlation, which overstates Sharpe ratios and apparent diversification.",
      "IRR is money-weighted and its timing is partly under GP control, so it is not comparable to public funds' time-weighted returns.",
    ],
  },

  // ==========================================================
  // 3. PRIVATE CAPITAL
  // ==========================================================
  {
    id: "cfa-l1-alts-private-capital",
    examSlug: "cfa",
    topicId: "alts",
    topicName: "Alternative Investments",
    title: "Private Capital: Private Equity and Private Debt",
    readingMinutes: 6,
    summary:
      "Venture, growth, and buyout strategies across the company life cycle; how an LBO actually creates value; and the private debt spectrum from direct lending to distressed.",
    intro:
      "Private capital splits cleanly in two: private EQUITY buys ownership, private DEBT lends. Both are lending or investing outside public markets, and both earn a premium partly for illiquidity and partly for doing work public investors cannot. The Level I bar here is to place each strategy on the company life cycle, explain where a buyout's returns actually come from, and know the private-debt menu well enough to distinguish direct lending from mezzanine from distressed. The valuation mechanics belong to Level II; the structural logic belongs here.",
    sections: [
      {
        heading: "1. Private equity across the life cycle",
        blocks: [
          {
            kind: "p",
            text: "The organizing idea is company maturity. Early-stage companies have no earnings and no assets to borrow against, so they are funded with equity and diversified across many bets. Mature companies have stable cash flows, so they can support debt — which is why leverage appears at the mature end of the spectrum and never at the early end.",
          },
          {
            kind: "table",
            table: {
              caption: "Private equity strategies by company stage",
              headers: ["Stage", "Target company", "Typical structure", "Return driver", "Failure pattern"],
              rows: [
                ["Venture capital", "Pre-revenue to early revenue", "Minority stakes, staged financing rounds, no leverage", "A small number of very large winners", "Most investments return little or nothing; the portfolio depends on outliers"],
                ["Growth equity", "Proven model, scaling, often founder-run", "Minority stake, little or no leverage", "Revenue growth without a change of control", "Growth stalls; limited control to force a fix"],
                ["Buyout (LBO)", "Mature, stable cash flows", "Control stake funded substantially with debt", "Deleveraging, operational improvement, multiple expansion", "Cash flows disappoint and fixed debt service becomes unsustainable"],
              ],
            },
          },
          {
            kind: "p",
            text: "Venture capital's structure follows from its economics. Because most start-ups fail, VCs invest in STAGES — seed, early, later — releasing more capital only as milestones are met. Staging is a risk-control device: it caps loss on failures and preserves capital for the companies that are working. It also explains the extreme return dispersion, since a fund's result is typically driven by one or two positions.",
          },
        ],
      },
      {
        heading: "2. Where buyout returns actually come from",
        blocks: [
          {
            kind: "p",
            text: "A leveraged buyout acquires a company using a large proportion of debt, secured against the target's own assets and serviced by its own cash flows. The sponsor contributes equity, then works to increase the value of that equity over a holding period of roughly three to seven years. Three levers do the work, and the exam wants all three distinguished.",
          },
          {
            kind: "bullets",
            items: [
              "DELEVERAGING. The company's cash flow pays down acquisition debt. Even with enterprise value flat, every dollar of debt repaid transfers a dollar to the equity holder. This is the most mechanical of the three.",
              "OPERATIONAL IMPROVEMENT. Raising revenue, margins, or capital efficiency increases EBITDA, so the same valuation multiple produces a higher enterprise value. This is the lever sponsors claim and the one that survives scrutiny best.",
              "MULTIPLE EXPANSION. Exiting at a higher EV/EBITDA multiple than was paid on entry. Partly skill — selling to a strategic buyer, professionalizing the business — and partly the market being kinder on exit than on entry. It is the least reliable lever and the most dependent on luck.",
            ],
          },
          {
            kind: "callout",
            label: "Leverage cuts both ways, and that is the exam's point",
            body: "Leverage amplifies equity returns when the business performs and destroys them when it does not, because debt service is FIXED while cash flows are not. It also raises the tax shield on interest and imposes discipline on management, both cited as benefits. But an LBO's risk is concentrated precisely in a mature business's cash flows proving less stable than underwritten — which is why LBO targets are chosen for stability rather than growth.",
          },
          {
            kind: "p",
            text: "Exit routes matter because they determine when and at what price value is realized: TRADE SALE to a strategic buyer (often the highest price, since a strategic can pay for synergies), SECONDARY SALE to another financial sponsor, IPO (high-profile, but market-dependent and usually staged over time), and RECAPITALIZATION, where new debt funds a distribution to the sponsor without a change of ownership — realizing cash without a true exit.",
          },
        ],
      },
      {
        heading: "3. Private debt",
        blocks: [
          {
            kind: "p",
            text: "Private debt is lending outside public bond markets. It grew as post-crisis regulation pushed banks out of leveraged lending, leaving a gap that funds filled. Lenders earn a spread over public credit for illiquidity, for bespoke underwriting, and for the ability to negotiate covenants directly with a borrower who has few alternatives.",
          },
          {
            kind: "table",
            table: {
              caption: "The private debt spectrum",
              headers: ["Type", "What it is", "Position in the capital structure", "Risk / return"],
              rows: [
                ["Direct lending", "Senior secured loans, often floating rate, to mid-market companies", "Most senior", "Lowest risk in the category; income-oriented"],
                ["Mezzanine debt", "Subordinated debt, frequently with warrants or conversion rights", "Below senior, above equity", "Higher yield plus equity upside; hybrid in character"],
                ["Venture debt", "Loans to start-ups that are not yet profitable", "Senior but weakly asset-backed", "Underwritten on sponsor backing and cash runway, not on earnings"],
                ["Distressed debt", "Buying the debt of companies in or near default", "Varies; often bought to convert into control", "Highest risk; returns depend on restructuring or bankruptcy outcomes"],
                ["Unitranche", "A single blended facility replacing separate senior and subordinated tranches", "Blended", "One rate between senior and mezzanine; simpler for the borrower"],
              ],
            },
          },
          {
            kind: "p",
            text: "Distressed debt is the one to understand rather than memorize. The investor buys claims at a deep discount, expecting either a restructuring that pays more than the purchase price or a conversion of debt into equity that hands them ownership of the reorganized business. It is closer to control investing than to lending, and its returns depend on legal process and seniority — which is why the priority-of-claims material from Fixed Income is the prerequisite.",
          },
          {
            kind: "p",
            text: "For a portfolio, private capital offers a return premium and imperfect correlation with public markets, but the diversification is partly illusory: the smoothing discussed in Chapter 2 makes measured correlation lower than economic correlation. Private companies are still exposed to the same economy. In a genuine downturn, private marks fall too — they just fall later and more gently on paper.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Venture capital", def: "Equity investment in early-stage companies, deployed in stages and dependent on a few outsized winners." },
      { term: "Growth equity", def: "Minority investment in an established, scaling company, typically without leverage or a change of control." },
      { term: "Leveraged buyout (LBO)", def: "Acquisition of a controlling stake funded largely with debt serviced by the target's own cash flows." },
      { term: "Deleveraging", def: "Paying down acquisition debt from operating cash flow, transferring value to the equity holder." },
      { term: "Multiple expansion", def: "Exiting at a higher valuation multiple than was paid at entry." },
      { term: "Recapitalization", def: "Raising new debt to fund a distribution to owners without selling the business." },
      { term: "Direct lending", def: "Senior secured private loans, usually floating rate, to middle-market borrowers." },
      { term: "Mezzanine debt", def: "Subordinated debt with equity-like features such as warrants, ranking between senior debt and equity." },
      { term: "Unitranche", def: "A single blended debt facility replacing separate senior and subordinated tranches." },
    ],
    takeaways: [
      "Private equity strategies map onto company maturity; leverage appears only at the mature end, because only stable cash flows can service it.",
      "Venture capital stages its financing to cap losses on failures and concentrate capital in the companies that work.",
      "Buyout returns come from deleveraging, operational improvement, and multiple expansion — the last being the least reliable.",
      "Leverage amplifies equity returns in both directions because debt service is fixed while cash flows are not.",
      "Private debt runs from senior direct lending through mezzanine to distressed, with risk rising as seniority falls.",
      "Distressed investing is control investing in disguise; outcomes hinge on restructuring and priority of claims.",
    ],
  },

  // ==========================================================
  // 4. REAL ESTATE, INFRASTRUCTURE, NATURAL RESOURCES
  // ==========================================================
  {
    id: "cfa-l1-alts-real-assets",
    examSlug: "cfa",
    topicId: "alts",
    topicName: "Alternative Investments",
    title: "Real Assets: Real Estate, Infrastructure, and Natural Resources",
    readingMinutes: 12,
    summary:
      "NOI and cap-rate valuation, the four quadrants of real estate, infrastructure by life-cycle stage, and why commodity futures returns are not commodity price returns.",
    intro:
      "Real assets are the part of this topic with actual arithmetic, and the arithmetic is worth having cold because it is quick marks. Real estate valuation reduces to one ratio; commodity returns reduce to one decomposition. Both are routinely tested and both are routinely fumbled — the cap rate because candidates invert it, and commodities because candidates assume that buying commodity futures earns the commodity's price return. It does not, and understanding why is the single most valuable thing in this chapter.",
    sections: [
      {
        heading: "1. Real estate: forms of ownership",
        blocks: [
          {
            kind: "p",
            text: "Real estate exposure is usually organized into FOUR QUADRANTS, formed by crossing two distinctions: debt versus equity, and private versus public. The framework is worth internalizing because it makes clear that 'real estate' can mean four very different risk profiles.",
          },
          {
            kind: "table",
            table: {
              caption: "The four quadrants of real estate investment",
              headers: ["", "Equity (ownership)", "Debt (lending)"],
              rows: [
                ["Private", "Direct ownership; private equity real estate funds", "Commercial mortgages; mezzanine real estate loans"],
                ["Public", "Listed REITs; real estate operating companies", "Mortgage-backed securities; mortgage REITs"],
              ],
            },
          },
          {
            kind: "p",
            text: "REITs deserve care. A REIT holds property but trades on an exchange, so it is liquid, transparently priced, and — critically — correlates substantially with the broader equity market, especially over short horizons. REITs are generally required to distribute the large majority of taxable income to shareholders, which is why they are income vehicles and why they must return to markets to raise capital for growth. If a question contrasts direct property with a REIT, liquidity and equity-market correlation are almost always the intended distinction.",
          },
          {
            kind: "p",
            text: "Property strategies run along a risk spectrum: CORE (stabilized, well-let, low leverage, income-driven), CORE-PLUS, VALUE-ADD (needs repositioning, refurbishment, or re-letting; returns come from fixing something), and OPPORTUNISTIC (development, distressed assets, major repositioning; highest leverage and risk). Return shifts from income toward capital appreciation as you move down that list.",
          },
        ],
      },
      {
        heading: "2. NOI and the capitalization rate",
        blocks: [
          {
            kind: "p",
            text: "The direct capitalization method values an income property by dividing a single year's net operating income by a capitalization rate observed from comparable transactions. Build NOI carefully — it is defined BEFORE financing costs and before taxes and depreciation, because the property's value should not depend on how a particular buyer financed it.",
          },
          {
            kind: "formula",
            formula: {
              label: "Net operating income",
              expr: "NOI = Gross potential rent − Vacancy & collection loss + Other income − Operating expenses",
              note: "NOI excludes mortgage interest, income taxes, and depreciation. Including debt service is the single most common NOI error.",
            },
          },
          {
            kind: "formula",
            formula: {
              label: "Direct capitalization",
              expr: "Value = NOI ÷ Capitalization rate",
              note: "Equivalently, cap rate = NOI ÷ Value. The cap rate behaves like a yield: HIGHER cap rate means LOWER value for the same NOI.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Valuing an office property, then repricing it",
              prompt:
                "A property has gross potential rent of $1,200,000, vacancy and collection losses of 8%, and operating expenses of $430,000. Comparable properties transact at a 6.5% cap rate. Value the property. Then value it again if cap rates rise to 7.25% with NOI unchanged.",
              steps: [
                "Effective gross income = $1,200,000 × (1 − 0.08) = $1,104,000.",
                "NOI = $1,104,000 − $430,000 = $674,000. (No mortgage interest appears here — financing is not an operating expense.)",
                "Value at a 6.5% cap rate = $674,000 ÷ 0.065 = $10,369,231.",
                "Value at a 7.25% cap rate = $674,000 ÷ 0.0725 = $9,296,552.",
                "Change = $9,296,552 ÷ $10,369,231 − 1 = −10.3%.",
              ],
              answer:
                "About $10.37M at a 6.5% cap rate, falling to roughly $9.30M — a 10.3% decline — if cap rates expand to 7.25%. The building did not change and its income did not change; only the rate at which the market capitalized that income did. This is why rising interest rates transmit so directly into property values.",
            },
          },
          {
            kind: "callout",
            label: "The inversion trap",
            body: "Cap rate is NOI divided by value, so value is NOI divided by cap rate. Candidates under time pressure multiply instead. A quick sanity check: a cap rate is a yield in the 4–10% range, so dividing by it should produce a value roughly 10 to 25 times NOI. If your answer is smaller than NOI, you inverted it.",
          },
        ],
      },
      {
        heading: "3. Infrastructure",
        blocks: [
          {
            kind: "p",
            text: "Infrastructure means long-lived physical assets providing essential public services — toll roads, airports, water and electricity networks, hospitals, telecommunications towers. The investment characteristics follow from that description: very long lives, high up-front capital, quasi-monopoly positions, regulated or contracted revenues, and cash flows that are frequently inflation-linked because tariffs are indexed. That inflation linkage is the most-cited portfolio rationale.",
          },
          {
            kind: "bullets",
            items: [
              "BROWNFIELD — existing assets, already operating, with an established revenue history. Lower risk, more income-like, lower expected return.",
              "GREENFIELD — assets to be constructed. Construction, permitting, and demand risk before any revenue arrives. Higher risk, more appreciation-like.",
              "The other axis is contracted or regulated revenue versus DEMAND-BASED (merchant) revenue. A toll road paid by actual traffic is materially riskier than one with an availability payment from a government regardless of traffic.",
            ],
          },
          {
            kind: "p",
            text: "The distinctive risk is REGULATORY and political. Because these assets are often natural monopolies serving the public, their returns are set or constrained by a regulator, and that regulator can change the rules. An investor holding a 30-year concession is exposed to three decades of political decisions — a risk with no real analogue in public equities.",
          },
        ],
      },
      {
        heading: "4. Natural resources and the commodity return decomposition",
        blocks: [
          {
            kind: "p",
            text: "Natural resources cover raw land, TIMBERLAND, FARMLAND, and COMMODITIES. Timberland is distinctive: it produces a harvestable crop whose harvest TIMING is discretionary, so an owner facing weak prices can simply let the trees keep growing — a built-in option that few assets possess. Farmland generates more regular income from crop yields but offers less timing flexibility, since crops must be harvested on nature's schedule.",
          },
          {
            kind: "p",
            text: "Commodities are where candidates lose marks. Almost no investor takes physical delivery of crude oil; exposure comes through FUTURES. And the return on a rolling futures position is not the return on the commodity's spot price. It decomposes into three parts.",
          },
          {
            kind: "formula",
            formula: {
              label: "Total return on a collateralized commodity futures position",
              expr: "Total return = Spot (price) return + Roll return + Collateral return",
              note: "Collateral return is the interest earned on cash posted as margin. Roll return arises from replacing expiring contracts with later-dated ones.",
            },
          },
          {
            kind: "figure",
            figure: {
              caption: "Contango slopes upward and costs the long roller; backwardation slopes downward and pays them.",
              alt: "Two futures curves plotted against maturity: one rising above spot (contango) and one falling below spot (backwardation).",
              svg: `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="45" y1="160" x2="430" y2="160" stroke="var(--border)" stroke-width="1.5"/><line x1="45" y1="15" x2="45" y2="160" stroke="var(--border)" stroke-width="1.5"/><text x="330" y="178" font-size="10" fill="var(--text-muted)">Time to maturity →</text><text x="52" y="13" font-size="9.5" fill="var(--text-muted)">Futures price</text><circle cx="45" cy="95" r="4" fill="var(--text-muted)"/><text x="12" y="99" font-size="10" fill="var(--text-muted)">spot</text><line x1="45" y1="95" x2="430" y2="95" stroke="var(--border)" stroke-width="1" stroke-dasharray="4 4"/><path d="M45 95 C 160 72, 290 56, 425 44" fill="none" stroke="var(--ats-red)" stroke-width="2.5"/><text x="300" y="38" font-size="10" fill="var(--ats-red)">contango (roll loss)</text><path d="M45 95 C 160 118, 290 134, 425 146" fill="none" stroke="var(--ats-green)" stroke-width="2.5"/><text x="272" y="140" font-size="10" fill="var(--ats-green)">backwardation (roll gain)</text></svg>`,
            },
          },
          {
            kind: "example",
            example: {
              title: "What contango costs a long investor",
              prompt:
                "Crude oil trades at a spot price of $80. The three-month futures contract trades at $83. An investor holds a long futures position and must roll it at expiry. If the spot price is still $80 at expiry, what is the roll return? What if instead the three-month future had traded at $77?",
              steps: [
                "At expiry, a futures price must converge to the spot price — otherwise a riskless arbitrage exists.",
                "CONTANGO case: the investor paid $83 for exposure that converges to $80. Loss = $80 − $83 = −$3 per barrel on a $83 position.",
                "Roll return = −$3 ÷ $83 = −3.6% for the quarter, despite the commodity's price being completely unchanged.",
                "BACKWARDATION case: the investor paid $77 for exposure that converges to $80. Gain = $3 ÷ $77 = +3.9% for the quarter, again with an unchanged spot price.",
              ],
              answer:
                "Contango produces a roll return of about −3.6%; backwardation produces about +3.9%. The commodity's price did not move in either case. A long investor in a persistently contangoed market bleeds value on every roll, which is why long-run commodity index returns can diverge sharply from headline commodity price charts.",
            },
          },
          {
            kind: "callout",
            label: "Remembering which is which",
            body: "CONTANGO: futures ABOVE spot, curve slopes UP, the long roller repeatedly sells low and buys high — negative roll return. BACKWARDATION: futures BELOW spot, curve slopes DOWN, positive roll return. Backwardation is associated with a CONVENIENCE YIELD — a benefit to holding the physical commodity, such as keeping a refinery supplied — which makes holders unwilling to sell the spot cheaply.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Net operating income (NOI)", def: "Property income after vacancy and operating expenses but before financing costs, taxes, and depreciation." },
      { term: "Capitalization rate", def: "NOI divided by property value; a yield, so a higher cap rate implies a lower value." },
      { term: "Four quadrants", def: "Real estate exposure classified as private/public and equity/debt." },
      { term: "Core vs opportunistic", def: "The risk spectrum of property strategies, running from stabilized income to development and distress." },
      { term: "Brownfield", def: "Existing, operating infrastructure with a revenue history; lower risk than greenfield." },
      { term: "Greenfield", def: "Infrastructure yet to be built, carrying construction and demand risk before revenue begins." },
      { term: "Roll return", def: "The return from replacing an expiring futures contract with a later-dated one." },
      { term: "Contango", def: "Futures priced above spot; an upward-sloping curve producing negative roll return for a long position." },
      { term: "Backwardation", def: "Futures priced below spot; a downward-sloping curve producing positive roll return for a long position." },
      { term: "Convenience yield", def: "The non-monetary benefit of holding a physical commodity, associated with backwardation." },
    ],
    takeaways: [
      "Real estate exposure comes in four quadrants; a listed REIT behaves far more like equity than direct property does.",
      "NOI excludes financing costs, income taxes, and depreciation — including mortgage interest is the classic error.",
      "Value = NOI ÷ cap rate. Cap rate expansion lowers value even when income is unchanged.",
      "Infrastructure's appeal is long-lived, often inflation-linked cash flows; its distinctive risk is regulatory and political.",
      "Timberland is unusual because harvest timing is discretionary, giving the owner a real option on price.",
      "Commodity futures return = spot return + roll return + collateral return. Contango produces a persistent roll loss for long positions.",
    ],
  },

  // ==========================================================
  // 5. HEDGE FUNDS AND DIGITAL ASSETS
  // ==========================================================
  {
    id: "cfa-l1-alts-hedge-digital",
    examSlug: "cfa",
    topicId: "alts",
    topicName: "Alternative Investments",
    title: "Hedge Fund Strategies and Digital Assets",
    readingMinutes: 7,
    summary:
      "The four hedge fund strategy families and what actually distinguishes them, fund-of-funds fee layering, and a clear-eyed treatment of distributed ledger technology and digital assets.",
    intro:
      "Hedge funds are defined by freedom rather than by strategy: they can go long and short, use leverage and derivatives, and concentrate, because they are privately offered to investors presumed able to evaluate the risk. The name is a historical accident — many hedge funds hedge very little. Level I asks you to sort strategies into families, understand the terms that govern investor liquidity, and reason about the fee drag. Digital assets are newer to the curriculum and are tested conceptually: what the technology is, what forms of exposure exist, and what the risks are — treated as an asset class to analyze, not one to advocate for.",
    sections: [
      {
        heading: "1. The four strategy families",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "Hedge fund strategy families",
              headers: ["Family", "Core idea", "Representative strategies", "Principal risk"],
              rows: [
                ["Equity hedge", "Security selection in equities, long and short", "Long/short equity, market neutral, short bias", "Both legs can move against you; short positions have unbounded loss"],
                ["Event-driven", "Profit from corporate events resolving", "Merger arbitrage, distressed, activist, special situations", "The event fails — a deal breaks and the spread blows out"],
                ["Macro", "Directional bets on rates, currencies, and economies", "Global macro, managed futures / CTAs", "Directional and often heavily leveraged; timing risk"],
                ["Relative value", "Exploit pricing discrepancies between related securities", "Convertible arbitrage, fixed-income arbitrage, volatility arbitrage", "Small spreads require heavy leverage; spreads can widen before converging"],
              ],
            },
          },
          {
            kind: "p",
            text: "EQUITY MARKET NEUTRAL is worth isolating because it is frequently tested. The manager balances long and short exposure so that net market exposure — beta — is approximately zero. The return therefore comes almost entirely from the SPREAD between the longs and the shorts, meaning from stock selection rather than market direction. Because that spread is small, the strategy typically uses substantial leverage, which is exactly why a selection error is costly.",
          },
          {
            kind: "p",
            text: "MERGER ARBITRAGE is the classic event-driven trade: after a deal is announced, the target trades below the offer price because the deal might not close. The manager buys the target (and, in a stock deal, shorts the acquirer) to capture that spread. The return profile is deliberately asymmetric — many small gains as deals close, occasional large losses when one breaks. That is textbook NEGATIVE SKEW, and it connects directly to the warning in Chapter 2 about Sharpe ratios on non-normal returns.",
          },
          {
            kind: "callout",
            label: "Relative value needs leverage by construction",
            body: "If a strategy earns a few dozen basis points per trade from a pricing discrepancy, the only route to an attractive return is size. Leverage is therefore structural, not optional — and it is why relative-value strategies are vulnerable when funding tightens and positions must be unwound into a market that is moving against them.",
          },
        ],
      },
      {
        heading: "2. Terms that govern investor liquidity",
        blocks: [
          {
            kind: "p",
            text: "Because a hedge fund's positions may not be quickly saleable, its investor terms exist to prevent redemptions forcing sales at bad prices. These terms are testable vocabulary.",
          },
          {
            kind: "bullets",
            items: [
              "LOCKUP PERIOD — the minimum time before an investor may redeem at all.",
              "NOTICE PERIOD — advance warning required before a redemption, giving the manager time to raise cash.",
              "REDEMPTION FREQUENCY — how often redemptions are permitted (monthly, quarterly, annually).",
              "GATE — a cap on the proportion of fund assets that may be redeemed in one period, preventing a run.",
              "SIDE POCKET — segregating hard-to-value or illiquid positions so that redeeming investors do not receive cash at a valuation the manager cannot verify.",
            ],
          },
          {
            kind: "p",
            text: "The general principle: the LESS LIQUID the strategy, the MORE restrictive the terms must be. A manager running an illiquid credit book with monthly liquidity has an asset-liability mismatch, and that mismatch is itself a risk factor an investor should price. Where a question presents a liquidity mismatch, the mismatch is the answer.",
          },
          {
            kind: "p",
            text: "FUNDS OF FUNDS allocate across multiple hedge funds. The case for them is genuine — diversification across managers and strategies, professional due diligence, and access to funds that are closed to new direct investors, all at a lower minimum investment. The case against is arithmetic: fees are charged at BOTH layers, so the underlying managers must outperform by the full amount of the extra layer merely to break even against investing directly. The exam's expected conclusion is that the second fee layer is a serious drag that diversification does not automatically justify.",
          },
        ],
      },
      {
        heading: "3. Distributed ledger technology and digital assets",
        blocks: [
          {
            kind: "p",
            text: "A DISTRIBUTED LEDGER is a database replicated across many participants, updated by consensus rather than by a central administrator. A BLOCKCHAIN is the common implementation: transactions are grouped into blocks, each cryptographically linked to its predecessor, making retrospective alteration computationally impractical. The financial relevance is that it permits transfer of value between parties who do not trust each other WITHOUT a trusted intermediary — which is why the technology attracts interest independently of any particular token's price.",
          },
          {
            kind: "bullets",
            items: [
              "PERMISSIONLESS ledgers are open to anyone, with no central authority and no ability to edit history. Maximum openness, minimum control.",
              "PERMISSIONED ledgers restrict who may participate and what each participant may do. Most institutional applications are of this kind.",
              "SMART CONTRACTS are programs that execute automatically when specified conditions are met, removing the need for a party to enforce performance.",
              "TOKENIZATION represents ownership of an asset — a bond, a building, a fund interest — as a digital token, potentially improving settlement speed and enabling fractional ownership of otherwise indivisible assets.",
            ],
          },
          {
            kind: "p",
            text: "Digital assets themselves divide usefully. CRYPTOCURRENCIES are intended as a medium of exchange or store of value; they generate no cash flows, which means traditional discounted-cash-flow valuation has nothing to work with and value rests entirely on what another buyer will pay. STABLECOINS aim to hold a fixed value, typically by reference to a fiat currency, and their credibility depends on the quality of whatever reserves or mechanism backs them. TOKENIZED ASSETS derive their value from an underlying real asset. CENTRAL BANK DIGITAL CURRENCIES are state-issued and are not investments.",
          },
          {
            kind: "p",
            text: "Exposure can be direct — holding tokens, which raises the custody and key-management problem, since losing a private key means irrecoverable loss — or indirect through funds, futures, exchange-traded vehicles, or equity in companies operating in the sector. Indirect routes shift the custody burden to a regulated intermediary but may track the underlying imperfectly.",
          },
          {
            kind: "callout",
            label: "The risks the curriculum expects you to name",
            body: "Extreme price volatility; an uneven and rapidly changing regulatory picture across jurisdictions; custody and operational risk including exchange failure and key loss; limited or unreliable historical data on which to base correlation and risk estimates; and a diversification case that is asserted more often than it is demonstrated — measured correlations with equities have been unstable, and have tended to RISE during market stress, precisely when diversification is wanted.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Equity market neutral", def: "A strategy balancing long and short equity exposure to hold net market beta near zero, isolating selection skill." },
      { term: "Merger arbitrage", def: "Capturing the spread between an announced deal price and the target's trading price, risking deal failure." },
      { term: "Relative value", def: "Strategies exploiting pricing discrepancies between related securities, typically requiring substantial leverage." },
      { term: "Lockup period", def: "The minimum period before an investor may redeem from a fund." },
      { term: "Gate", def: "A limit on the proportion of fund assets redeemable in a single period." },
      { term: "Side pocket", def: "Segregation of illiquid or hard-to-value holdings so redemptions are not paid at unverifiable valuations." },
      { term: "Distributed ledger", def: "A database replicated across participants and updated by consensus rather than a central administrator." },
      { term: "Smart contract", def: "Self-executing code that performs automatically when defined conditions are satisfied." },
      { term: "Tokenization", def: "Representing ownership of an asset as a digital token, enabling fractional ownership and faster settlement." },
      { term: "Stablecoin", def: "A digital asset designed to maintain a fixed value, usually against a fiat currency, backed by reserves or a mechanism." },
    ],
    takeaways: [
      "Hedge fund strategies sort into equity hedge, event-driven, macro, and relative value.",
      "Equity market neutral targets zero net beta, so its return is the long/short spread — and it needs leverage because that spread is small.",
      "Merger arbitrage earns many small gains and occasional large losses: negative skew, which flatters the Sharpe ratio.",
      "Lockups, notice periods, gates, and side pockets exist to match investor liquidity to strategy liquidity; a mismatch is itself a risk.",
      "Funds of funds add diversification and access but charge a second fee layer that must be overcome before the investor gains.",
      "Cryptocurrencies produce no cash flows, so DCF valuation does not apply and value depends on what the next buyer will pay.",
      "Digital asset correlations with equities are unstable and have tended to rise in stress, weakening the diversification argument.",
    ],
  },
];

export const altsDeepQuestions: Question[] = [
  {
    id: "cfa-l1-altsd-q1", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "Compared with direct ownership of a commercial property, an investment in a publicly listed REIT is most likely to:",
    choices: [
      "Exhibit higher correlation with broad equity markets",
      "Exhibit lower short-term price volatility",
      "Provide greater control over property-level decisions",
    ],
    answerIndex: 0,
    explanation: "A REIT trades on an exchange, so its price is set by equity market participants and moves with equity sentiment — correlation with broad equities is materially higher than for directly held property. Lower volatility is backwards: direct property appears less volatile only because appraisal-based valuation smooths reported returns, not because the underlying asset is genuinely more stable. Control is also backwards — a direct owner makes property-level decisions, while a REIT shareholder owns a passive claim on a managed portfolio.",
  },
  {
    id: "cfa-l1-altsd-q2", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "The J-curve observed in private equity fund returns is best explained by:",
    choices: [
      "The tendency of private equity managers to invest in cyclical industries",
      "Management fees and early write-downs preceding the realization of gains",
      "Limited partners delaying capital contributions until the fund performs",
    ],
    answerIndex: 1,
    explanation: "Early in a fund's life, fees are charged while few investments have been exited, and underperformers are written down promptly while winners are held at cost until a financing event justifies a markup. Costs are recognized early and gains late, producing the characteristic dip. Industry cyclicality is unrelated — the J-curve appears across sectors and is a reporting pattern, not an economic one. LPs cannot delay contributions at will; capital calls are contractual obligations, and failing to meet one carries severe penalties.",
  },
  {
    id: "cfa-l1-altsd-q3", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "A fund earns a 20% gross return on beginning assets of $100 million. It charges 2% of beginning assets and a 20% incentive fee on profits net of the management fee, subject to a 5% SOFT hurdle. The investor's net return is closest to:",
    choices: ["14.4%", "15.4%", "16.4%"],
    answerIndex: 0,
    explanation: "Gross ending value is $120M and the management fee is $2M, leaving profit of $18M. Because the hurdle is SOFT, clearing 5% means the incentive fee applies to the entire $18M: 20% × $18M = $3.6M. Total fees are $5.6M, so the investor holds $114.4M for a 14.4% net return. The 15.4% choice results from treating the hurdle as HARD and charging only on the $13M above it — the distinction the question is testing. The 16.4% choice omits the management fee from the incentive fee base.",
  },
  {
    id: "cfa-l1-altsd-q4", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "A high-water mark provision most directly ensures that a hedge fund manager:",
    choices: [
      "Charges an incentive fee only on cumulative gains above the fund's prior peak value",
      "Waives the management fee in any year the fund records a loss",
      "Earns an incentive fee only after exceeding a stated minimum rate of return",
    ],
    answerIndex: 0,
    explanation: "The high-water mark records the fund's previous peak; incentive fees resume only once value exceeds it, so an investor never pays twice for recovering the same losses. It has no bearing on the management fee, which is charged on assets regardless of performance — that describes no standard provision. The third choice defines a HURDLE RATE, which is a different protection: a hurdle sets a minimum return threshold, while a high-water mark sets a minimum value threshold based on the fund's own history.",
  },
  {
    id: "cfa-l1-altsd-q5", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "A fund has called $80 million of a $100 million commitment, distributed $60 million, and reports residual NAV of $70 million. Its TVPI is closest to:",
    choices: ["0.75×", "1.30×", "1.63×"],
    answerIndex: 2,
    explanation: "TVPI divides total value — distributions plus residual NAV — by PAID-IN capital, meaning the amount actually called: ($60M + $70M) ÷ $80M = 1.625×, or about 1.63×. The 1.30× figure uses the $100M commitment as the denominator, which is the most common error; the denominator is always capital contributed, not pledged. The 0.75× figure is DPI, which measures only the cash actually returned and ignores the unrealized residual value.",
  },
  {
    id: "cfa-l1-altsd-q6", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "The practice of valuing illiquid holdings by periodic appraisal rather than market transaction most likely causes reported returns to show:",
    choices: [
      "Overstated volatility and understated correlation with equities",
      "Understated average returns and overstated correlation with equities",
      "Understated volatility and overstated risk-adjusted performance",
    ],
    answerIndex: 2,
    explanation: "Appraisals anchor on prior appraisals, so reported values move less than underlying economic values. That smoothing lowers measured standard deviation and lowers measured correlation with public markets, which inflates the Sharpe ratio and exaggerates the diversification benefit. Volatility is understated, not overstated. Average returns are largely unaffected — smoothing redistributes returns across periods rather than changing their sum, so the distortion is to the risk measures, not to the mean.",
  },
  {
    id: "cfa-l1-altsd-q7", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "Which source of leveraged buyout returns is least dependent on the sponsor's own actions?",
    choices: ["Deleveraging", "Multiple expansion", "Operational improvement"],
    answerIndex: 1,
    explanation: "Multiple expansion means exiting at a higher EV/EBITDA multiple than was paid, which depends substantially on market conditions at exit rather than on anything the sponsor did — it is widely regarded as the least reliable of the three levers. Deleveraging follows mechanically from the sponsor's capital structure decisions and the company's cash generation. Operational improvement is the most directly attributable to sponsor action, since it reflects deliberate changes to revenue, margins, or capital efficiency.",
  },
  {
    id: "cfa-l1-altsd-q8", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "A property generates effective gross income of $1,104,000 and incurs operating expenses of $430,000 and mortgage interest of $210,000. Its net operating income is:",
    choices: ["$464,000", "$674,000", "$884,000"],
    answerIndex: 1,
    explanation: "NOI is calculated before financing costs, so mortgage interest is excluded: $1,104,000 − $430,000 = $674,000. Subtracting the $210,000 of interest to reach $464,000 is the classic error — including debt service would make a property's value depend on how a particular buyer financed it, which defeats the purpose of the measure. Adding rather than subtracting operating expenses produces $884,000 and reverses the calculation entirely.",
  },
  {
    id: "cfa-l1-altsd-q9", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "A property with net operating income of $674,000 is valued using a capitalization rate that rises from 6.5% to 7.25%, with NOI unchanged. The property's value will:",
    choices: [
      "Decline by approximately 10%",
      "Rise by approximately 12%",
      "Remain unchanged, because NOI did not change",
    ],
    answerIndex: 0,
    explanation: "Value equals NOI divided by the cap rate, so value falls from $674,000 ÷ 0.065 = $10.37M to $674,000 ÷ 0.0725 = $9.30M — a decline of approximately 10% (10.3% precisely). A rising cap rate means the market demands a higher yield, which necessarily implies a lower price for the same income stream — value cannot rise. The third choice misunderstands the mechanism: the cap rate is the discount applied to income, so changing it changes value even with income held constant.",
  },
  {
    id: "cfa-l1-altsd-q10", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "Crude oil has a spot price of $80 and a three-month futures price of $83. An investor holding a long futures position that must be rolled will most likely experience:",
    choices: [
      "A negative roll return, because the market is in contango",
      "A positive roll return, because the market is in backwardation",
      "No roll return, because futures converge to spot at expiry",
    ],
    answerIndex: 0,
    explanation: "Futures above spot defines contango. The investor holds exposure purchased at $83 that must converge toward the spot price by expiry, producing a loss on the roll even if the commodity's price never moves — roughly −3.6% here. Backwardation is the opposite configuration, with futures BELOW spot, and would produce a gain. The third choice states a true fact and draws the wrong conclusion: convergence is precisely the mechanism that CREATES the roll return, since it forces the elevated futures price down toward spot.",
  },
  {
    id: "cfa-l1-altsd-q11", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "An equity market neutral strategy generates returns primarily from:",
    choices: [
      "Leveraged directional exposure to broad equity market movements",
      "The spread between long and short positions, with minimal net market exposure",
      "Capturing announced merger spreads across a diversified deal portfolio",
    ],
    answerIndex: 1,
    explanation: "Market neutral balances long and short exposure so net beta is approximately zero, meaning market direction is largely neutralized and the return comes from the manager's selection of which securities to hold long versus short. Leveraged directional exposure describes a macro or long-biased strategy, and is the opposite of neutral by definition. Merger spread capture describes merger arbitrage, an event-driven strategy — although both use short positions, market neutral bets on relative security performance rather than on corporate events resolving.",
  },
  {
    id: "cfa-l1-altsd-q12", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "Relative to investing directly in a single hedge fund, a fund of funds most likely offers:",
    choices: [
      "Greater manager diversification, offset by an additional layer of fees",
      "Lower total fees achieved through negotiated institutional pricing",
      "Higher expected returns arising from concentrated manager selection",
    ],
    answerIndex: 0,
    explanation: "A fund of funds spreads capital across managers and strategies and supplies due diligence and access, but it charges its own management and incentive fees on top of those levied by the underlying funds. Total fees are therefore higher, not lower — the second choice inverts the central trade-off. Concentration is also backwards: a fund of funds diversifies by construction, and that diversification tends to dampen returns toward a category average rather than raise expected returns.",
  },
  {
    id: "cfa-l1-altsd-q13", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "Timberland is distinctive among natural resource investments primarily because:",
    choices: [
      "It generates contractually fixed income streams that are indexed to inflation",
      "Its returns are uncorrelated with all other asset classes by construction",
      "The timing of harvest is discretionary, allowing owners to defer sales when prices are weak",
    ],
    answerIndex: 2,
    explanation: "Standing timber continues to grow in volume and value while unharvested, so an owner facing weak prices can simply postpone harvesting — an embedded real option that most physical assets lack. Contractually fixed, inflation-indexed income describes infrastructure with regulated or availability-based revenues, not timberland, whose revenue depends on harvest decisions and commodity prices. No asset is uncorrelated with all others by construction; that claim overstates the diversification case in a way the curriculum specifically cautions against.",
  },
  {
    id: "cfa-l1-altsd-q14", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "A gate provision in a hedge fund's terms is designed to:",
    choices: [
      "Prevent new investors from subscribing once capacity is reached",
      "Limit the proportion of fund assets that may be redeemed in a single period",
      "Segregate illiquid holdings from the fund's main portfolio",
    ],
    answerIndex: 1,
    explanation: "A gate caps aggregate redemptions in any one period, protecting remaining investors from a manager being forced to liquidate positions at distressed prices to meet a wave of withdrawals. Restricting new subscriptions is a capacity or soft-close decision, unrelated to redemption mechanics. Segregating illiquid holdings describes a SIDE POCKET — a related but distinct tool that isolates hard-to-value assets rather than limiting the volume of redemptions.",
  },
  {
    id: "cfa-l1-altsd-q15", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "Merger arbitrage return distributions are typically characterized by:",
    choices: [
      "Negative skew, which causes the Sharpe ratio to overstate risk-adjusted performance",
      "Positive skew, which causes the Sharpe ratio to understate risk-adjusted performance",
      "Approximately normal returns, making the Sharpe ratio an appropriate measure",
    ],
    answerIndex: 0,
    explanation: "Most announced deals close, producing many small gains, while occasional deal failures produce large losses — frequent small positives and rare large negatives is the definition of negative skew. Because the Sharpe ratio uses standard deviation, which treats upside and downside symmetrically and assumes approximate normality, it fails to capture the tail risk and therefore flatters the strategy. Positive skew describes the opposite pattern, and assuming normality is precisely the error the curriculum warns against for this strategy.",
  },
  {
    id: "cfa-l1-altsd-q16", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "Compared with a greenfield infrastructure investment, a brownfield investment most likely offers:",
    choices: [
      "Higher risk and a higher proportion of return from capital appreciation",
      "Equivalent risk, since both ultimately provide essential public services",
      "Lower risk and a higher proportion of return from current income",
    ],
    answerIndex: 2,
    explanation: "Brownfield assets are already built and operating with an established revenue history, so construction, permitting, and initial demand risks have been resolved and cash flows begin immediately — the return is income-weighted and the risk is lower. Greenfield assets must still be constructed and carry exactly those risks before generating revenue, so their return skews toward appreciation. The essential-service character of both does not equalize their risk; the difference lies in development stage, not in end use.",
  },
  {
    id: "cfa-l1-altsd-q17", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "Which characteristic distinguishes mezzanine debt from senior direct lending?",
    choices: [
      "It is secured by a first claim on the borrower's assets",
      "It is subordinated and frequently carries warrants or conversion rights",
      "It is issued exclusively to companies already in bankruptcy proceedings",
    ],
    answerIndex: 1,
    explanation: "Mezzanine sits between senior debt and equity in the capital structure and typically compensates for that subordination with a higher coupon plus equity participation through warrants or conversion features, giving it a hybrid character. A first claim on assets describes senior secured lending, which is the opposite end of the spectrum. Lending to companies in bankruptcy describes distressed debt investing, a different strategy entirely — mezzanine is provided to solvent borrowers, commonly to help finance an acquisition.",
  },
  {
    id: "cfa-l1-altsd-q18", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "Survivorship bias in a hedge fund index causes reported index returns to be:",
    choices: [
      "Lower than actual returns, because successful funds often close to new investment",
      "Unaffected in level but overstated in volatility",
      "Higher than the return an investor selecting funds at the outset would have earned",
    ],
    answerIndex: 2,
    explanation: "Funds that perform poorly tend to close and cease reporting, so the index at any point reflects only those that survived. An investor choosing funds at the start of the period would have held some of the failures, earning less than the index suggests, so the index is biased upward. Closure of successful funds to new capital is an access constraint, not a reporting bias, and does not remove their returns from the index. The bias affects the level of returns directly, and if anything reduces measured volatility by removing the worst outcomes.",
  },
  {
    id: "cfa-l1-altsd-q19", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "A limited partner's uncalled capital commitment is best described as:",
    choices: [
      "A contingent asset recognized at the fund's current net asset value",
      "An obligation that lapses if the general partner does not call it within one year",
      "A liquidity constraint requiring the investor to maintain accessible reserves",
    ],
    answerIndex: 2,
    explanation: "Uncalled commitments must be honored on demand when the GP issues a capital call, so the LP has to hold assets that can be liquidated on short notice — a genuine and often underappreciated constraint on the rest of the portfolio. It is an obligation, not an asset, so it is not recognized at NAV. Commitments also do not lapse on an annual schedule; they persist through the fund's defined investment period, and failure to meet a call triggers substantial contractual penalties.",
  },
  {
    id: "cfa-l1-altsd-q20", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 2,
    stem: "A principal limitation of applying discounted cash flow valuation to cryptocurrencies is that they:",
    choices: [
      "Trade on exchanges that do not publish reliable prices",
      "Do not generate cash flows to discount",
      "Are legally prohibited from being held by institutional investors",
    ],
    answerIndex: 1,
    explanation: "DCF derives value from expected future cash flows, and a cryptocurrency intended as a medium of exchange or store of value produces none — so the model has no input and value rests on what a subsequent buyer will pay. Price transparency is not the obstacle; major digital assets trade continuously with widely published prices, and price data availability would not fix a missing cash flow stream. Institutional holding is permitted in many jurisdictions subject to regulation, and legality is a separate issue from valuation methodology.",
  },
  {
    id: "cfa-l1-altsd-q21", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "An investor is comparing a co-investment opportunity with additional commitment to the sponsor's main fund. The most significant risk specific to the co-investment is:",
    choices: [
      "Higher blended fees, since co-investments carry a second layer of carried interest",
      "Loss of limited liability, since co-investors become general partners of the deal",
      "Adverse selection, if the sponsor offers deals it prefers not to fund internally",
    ],
    answerIndex: 2,
    explanation: "The investor should ask why this particular deal is being offered rather than funded within the main fund — the sponsor has better information, and the deals it most wants to share may be the ones it is least confident about. Fees run the other way: co-investments are typically offered at reduced or zero fees, which is a large part of their appeal. Limited liability is unaffected, since co-investors participate as passive investors in the deal vehicle rather than assuming the general partner's role.",
  },
  {
    id: "cfa-l1-altsd-q22", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "Reported internal rates of return for private equity funds are difficult to compare with public fund returns primarily because IRR:",
    choices: [
      "Is money-weighted, and the general partner controls the timing of cash flows",
      "Assumes all distributions are reinvested at the risk-free rate",
      "Excludes management fees and carried interest from its calculation",
    ],
    answerIndex: 0,
    explanation: "IRR is a money-weighted measure sensitive to when capital is called and returned, and because the GP decides that timing — accelerating an early exit, or using credit facilities to defer capital calls — it exerts partial influence over its own reported figure. Public funds report time-weighted returns, which strip out cash flow timing, so the two are not directly comparable. IRR's implicit reinvestment assumption is at the IRR itself, not the risk-free rate. Funds routinely report IRR both gross and net of fees, so fee treatment is a disclosure question rather than the source of the incomparability.",
  },
];
