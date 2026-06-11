// ============================================================
// Certus — Series 7 content, wave 3
// Regulations & Trading Practices, US Government & Agency Securities.
// Brings Series 7 to 8 core topics.
// ============================================================

import { Chapter, Question } from "./types";

export const s7Wave3Chapters: Chapter[] = [
  // REGULATIONS & TRADING PRACTICES
  {
    id: "s7-regs",
    examSlug: "series-7",
    topicId: "regulations",
    topicName: "Regulations & Trading Practices",
    title: "Regulations & Prohibited Trading Practices",
    readingMinutes: 18,
    summary: "The regulatory framework, settlement, communications rules, and the practices that get reps barred.",
    intro:
      "A registered representative operates inside a dense regulatory framework designed to protect investors and keep markets fair. The Series 7 tests who regulates what, the rules governing communications and settlement, and — most importantly — the prohibited practices that lead to fines, suspension, or being barred from the industry. Knowing what you may not do is as important as knowing what you may.",
    sections: [
      {
        heading: "Who regulates the markets",
        paragraphs: [
          "The Securities and Exchange Commission (SEC) is the federal government agency with ultimate authority over the securities markets, created by the Securities Exchange Act of 1934. FINRA (the Financial Industry Regulatory Authority) is the self-regulatory organization that oversees broker-dealers and their representatives, writes conduct rules, administers exams like the Series 7, and enforces compliance. The Securities Act of 1933 governs the issuance of new securities (the 'paper act' — registration and prospectus delivery), while the 1934 Act governs the secondary trading markets and created the SEC.",
        ],
      },
      {
        heading: "Communications with the public",
        paragraphs: [
          "FINRA classifies communications into categories with different supervisory requirements. Retail communications (distributed to more than 25 retail investors in 30 days — advertisements, websites, sales literature) generally require principal approval and may need to be filed with FINRA. Correspondence (to 25 or fewer retail investors) is subject to supervision and review but lighter pre-approval. Institutional communications go only to institutional investors. Across all categories, communications must be fair and balanced, may not be misleading, may not promise specific results, and may not omit material facts.",
        ],
        callout: {
          label: "Communication categories",
          body: "Retail communication = to >25 retail investors in 30 days (often needs principal approval/filing). Correspondence = to ≤25 retail investors. All must be fair, balanced, and not misleading.",
        },
      },
      {
        heading: "Settlement and key dates",
        paragraphs: [
          "Most securities transactions settle on a 'T+1' basis — one business day after the trade date — meaning that is when ownership and payment are exchanged. The trade date is when the order is executed; the settlement date is when it must be paid for. Understanding the timeline matters for dividends too: the ex-dividend date is the cutoff determining who receives a declared dividend, and an investor must own shares before that date to be entitled to the payment.",
        ],
      },
      {
        heading: "Prohibited practices",
        paragraphs: [
          "Several practices are strictly prohibited and heavily tested. Front-running is trading ahead of a known large customer order to profit from the price move it will cause. Market manipulation includes painting the tape (creating fake trading activity) and matched orders to give a false impression of volume. Trading on material nonpublic information (insider trading) is illegal under the 1934 Act. Churning — excessive trading to generate commissions — and unauthorized trading are violations of duties to the customer. Selling away (private securities transactions outside the firm without approval) and guaranteeing customers against loss are likewise prohibited.",
          "The common thread is that these practices put the representative's or firm's interest ahead of the customer's, or distort the integrity of the market. The exam frequently presents a scenario and asks you to identify which prohibited practice it describes — so learn to recognize the pattern, not just the term.",
        ],
      },
      {
        heading: "Communications and settlement at a glance",
        blocks: [
          { kind: "table", table: { caption: "Table 1 — FINRA communication categories and their supervision.", headers: ["Category", "Audience", "Supervision"], rows: [["Retail communication", ">25 retail investors in 30 days", "Principal approval; may need FINRA filing"], ["Correspondence", "≤25 retail investors in 30 days", "Supervised/reviewed, lighter pre-approval"], ["Institutional communication", "Institutional investors only", "Internal procedures"]] } },
          { kind: "callout", label: "Settlement & key dates", body: "Most securities settle T+1 (one business day after the trade). To receive a declared dividend, an investor must own the shares before the ex-dividend date." },
        ],
      },
    ],
    keyTerms: [
      { term: "FINRA", def: "The self-regulatory organization overseeing broker-dealers and registered representatives." },
      { term: "Securities Act of 1933", def: "Governs new securities issuance — registration and prospectus delivery (the 'paper act')." },
      { term: "Securities Exchange Act of 1934", def: "Governs secondary-market trading and created the SEC." },
      { term: "Front-running", def: "Trading ahead of a known large customer order to profit from its price impact; prohibited." },
      { term: "Selling away", def: "Engaging in securities transactions outside the firm without its approval; prohibited." },
    ],
    takeaways: [
      "The 1933 Act covers new issues; the 1934 Act covers secondary trading and created the SEC.",
      "Retail communications (>25 retail investors) generally need principal approval; all must be fair and not misleading.",
      "Most trades settle T+1; you must own shares before the ex-dividend date to receive a dividend.",
      "Front-running, churning, market manipulation, insider trading, and selling away are all prohibited.",
    ],
  },

  // US GOVERNMENT & AGENCY SECURITIES
  {
    id: "s7-govt",
    examSlug: "series-7",
    topicId: "govt",
    topicName: "US Government & Agency Securities",
    title: "US Government & Agency Securities",
    readingMinutes: 16,
    summary: "Treasury bills, notes, bonds, TIPS, and the agency/mortgage-backed market.",
    intro:
      "U.S. government securities are the bedrock of the fixed-income market — considered free of credit risk because they're backed by the federal government — and they set the benchmark against which all other bonds are priced. The Series 7 tests the different Treasury instruments, their tax treatment, and the distinction between true government backing and the agency securities that only look as safe.",
    sections: [
      {
        heading: "Treasury securities",
        paragraphs: [
          "The Treasury issues several instruments by maturity. Treasury bills (T-bills) are short-term (one year or less), pay no coupon, and are sold at a discount — the investor's return is the difference between the discounted purchase price and the face value at maturity. Treasury notes (T-notes) have maturities of 2 to 10 years and pay semiannual interest. Treasury bonds (T-bonds) run beyond 10 years (up to 30) and also pay semiannual interest. All are backed by the full faith and credit of the U.S. government, making them the definition of a risk-free credit.",
          "Two specialized forms matter. Treasury Inflation-Protected Securities (TIPS) adjust their principal with inflation (measured by CPI), protecting purchasing power — when inflation rises, the principal and thus the interest payments increase. STRIPS are zero-coupon Treasuries created by separating a bond's coupons and principal into individually traded pieces.",
        ],
        callout: {
          label: "Treasury tax treatment",
          body: "Interest on U.S. Treasury securities is subject to FEDERAL income tax but EXEMPT from state and local tax — the mirror image of municipals (federal-exempt, sometimes state-taxable).",
        },
      },
      {
        heading: "Agency and mortgage-backed securities",
        paragraphs: [
          "Agency securities are issued by government agencies and government-sponsored enterprises (GSEs) to support areas like housing. The crucial distinction is the backing. GNMA (Ginnie Mae) is a true government agency, and its securities carry the full faith and credit of the U.S. government — as safe as Treasuries. FNMA (Fannie Mae) and FHLMC (Freddie Mac) are GSEs whose securities are NOT explicitly backed by the government's full faith and credit, so they carry slightly more credit risk and a modestly higher yield.",
          "Many agency securities are mortgage-backed: pools of home loans whose payments pass through to investors. These carry prepayment risk — when interest rates fall, homeowners refinance and pay off their mortgages early, returning principal to investors at exactly the time it must be reinvested at lower rates. That prepayment behavior makes mortgage-backed securities behave differently from a standard bond, a nuance the exam likes to probe.",
        ],
      },
      {
        heading: "Treasuries and agencies at a glance",
        blocks: [
          { kind: "table", table: { caption: "Table 1 — The Treasury instruments by maturity, plus the inflation-protected and agency variants.", headers: ["Instrument", "Maturity", "Pays"], rows: [["Treasury bill", "≤ 1 year", "Sold at a discount; no coupon"], ["Treasury note", "2–10 years", "Semiannual coupon"], ["Treasury bond", "10–30 years", "Semiannual coupon"], ["TIPS", "Various", "Coupon on inflation-adjusted principal"]] } },
          { kind: "callout", label: "Full faith and credit vs GSE", body: "GNMA (Ginnie Mae) is a true federal agency — its securities carry the full faith and credit of the U.S. government. Fannie Mae and Freddie Mac are GSEs whose securities are NOT explicitly government-backed, so they yield slightly more. Mortgage-backed agency securities also carry prepayment risk when rates fall." },
        ],
      },
    ],
    keyTerms: [
      { term: "Treasury bill", def: "Short-term (≤1 yr) government debt sold at a discount with no coupon; return is the discount." },
      { term: "TIPS", def: "Treasury securities whose principal adjusts with inflation, protecting purchasing power." },
      { term: "GNMA (Ginnie Mae)", def: "A true federal agency; its securities carry full faith and credit of the U.S. government." },
      { term: "GSE (Fannie/Freddie)", def: "Government-sponsored enterprises whose securities are NOT explicitly government-backed." },
      { term: "Prepayment risk", def: "The risk that falling rates cause mortgages to be paid off early, returning principal at a bad time." },
    ],
    takeaways: [
      "T-bills are discount instruments; notes and bonds pay semiannual coupons; TIPS adjust for inflation.",
      "Treasury interest is federally taxable but state-exempt — the opposite of municipals.",
      "Ginnie Mae carries full faith and credit; Fannie and Freddie (GSEs) do not.",
      "Mortgage-backed securities carry prepayment risk when rates fall.",
    ],
  },
];

export const s7Wave3Questions: Question[] = [
  // Regulations
  {
    id: "s7-reg-q1", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 2,
    stem: "The federal law that governs the issuance of NEW securities, requiring registration and prospectus delivery, is the:",
    choices: ["Securities Exchange Act of 1934", "Securities Act of 1933", "Investment Company Act of 1940"],
    answerIndex: 1,
    explanation: "The Securities Act of 1933 — the 'paper act' — governs new issues, requiring registration and delivery of a prospectus to buyers. Choice A (1934 Act) governs the SECONDARY trading markets and created the SEC. Choice C (1940 Act) regulates investment companies like mutual funds, not the general issuance of new securities.",
  },
  {
    id: "s7-reg-q2", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 3,
    stem: "A representative learns a large institutional client is about to place a huge buy order, and quickly buys the stock for their own account first. This is:",
    choices: ["Permissible, since the rep took the risk", "Front-running, a prohibited practice", "Simply good market timing"],
    answerIndex: 1,
    explanation: "Trading ahead of a known large customer order to profit from the price impact it will cause is front-running — a prohibited practice that puts the rep's interest ahead of the customer's and abuses confidential order information. Choices A and C try to rationalize it, but no framing makes front-running acceptable; it's a serious violation regardless of outcome.",
  },
  {
    id: "s7-reg-q3", examSlug: "series-7", topicId: "regulations", topicName: "Regulations", difficulty: 2,
    stem: "A piece of sales literature is distributed to 200 retail investors within a 30-day period. Under FINRA rules this is classified as:",
    choices: ["Correspondence", "A retail communication", "An institutional communication"],
    answerIndex: 1,
    explanation: "A communication distributed to more than 25 retail investors within 30 days is a retail communication, which generally requires principal approval and may need filing with FINRA. Choice A (correspondence) applies to 25 or FEWER retail investors. Choice C (institutional) applies only to institutional investors, not the 200 retail investors here.",
  },
  // Government securities
  {
    id: "s7-gov-q1", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 2,
    stem: "Interest earned on U.S. Treasury securities is:",
    choices: ["Exempt from federal tax but subject to state tax", "Subject to federal tax but exempt from state and local tax", "Completely tax-free"],
    answerIndex: 1,
    explanation: "Treasury interest is taxable at the FEDERAL level but exempt from STATE and local taxes — the mirror image of municipal bonds (which are federally exempt). Choice A reverses the treatment. Choice C is wrong because Treasuries are not fully tax-free; only the state/local portion is exempt.",
  },
  {
    id: "s7-gov-q2", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 3,
    stem: "Which security carries the full faith and credit of the U.S. government?",
    choices: ["FNMA (Fannie Mae)", "FHLMC (Freddie Mac)", "GNMA (Ginnie Mae)"],
    answerIndex: 2,
    explanation: "Ginnie Mae (GNMA) is a true federal agency, and its securities carry the full faith and credit of the U.S. government — as safe as Treasuries. Fannie Mae and Freddie Mac are government-sponsored enterprises (GSEs) whose securities are NOT explicitly backed by the government's full faith and credit, so they carry slightly more credit risk and a marginally higher yield.",
  },
  {
    id: "s7-gov-q3", examSlug: "series-7", topicId: "govt", topicName: "US Government Securities", difficulty: 2,
    stem: "An investor worried about inflation eroding their fixed-income returns would most appropriately buy:",
    choices: ["Treasury bills", "TIPS (Treasury Inflation-Protected Securities)", "Zero-coupon STRIPS"],
    answerIndex: 1,
    explanation: "TIPS adjust their principal with inflation (via CPI), so as prices rise, both principal and interest payments increase — directly protecting purchasing power. Choice A (T-bills) offers safety and liquidity but no inflation protection. Choice C (STRIPS) are zero-coupon bonds whose fixed payout is actually MORE exposed to inflation erosion, not less.",
  },
];
