// ============================================================
// Certus — CFA Level I content (original, written for Certus)
// Wave 1 topics: Ethics, Quantitative Methods,
// Financial Statement Analysis, Fixed Income.
// Remaining CFA topics + other exams are added in later waves.
// ============================================================

import { Chapter, Question, ExamContent } from "./types";
import { extraChapters, extraQuestions } from "./cfa-extra";
import { ethicsChapter, ethicsQuestions } from "./cfa-ethics";
import { deepChapters, deepQuestions } from "./cfa-l1-deep";

const chapters: Chapter[] = [
  // --------------------------------------------------------------------
  // 1. ETHICS
  // --------------------------------------------------------------------
  {
    id: "cfa-ethics",
    examSlug: "cfa",
    topicId: "ethics",
    topicName: "Ethical & Professional Standards",
    title: "Ethics & the CFA Standards of Professional Conduct",
    readingMinutes: 2,
    summary: "The Code of Ethics, the seven Standards, and how to actually answer ethics questions.",
    intro:
      "Ethics is roughly 15% of the Level I exam and, unlike most topics, it carries that weight at every level — the CFA Institute treats ethical conduct as the foundation of the entire designation. It is also the section that decides borderline candidates: when two people sit near the passing line, the one who scored well on ethics is given the benefit of the doubt. The good news is that ethics rewards understanding a framework rather than memorizing formulas. Master the Code, the seven Standards, and the disciplined way of reasoning through a scenario, and this becomes one of your most reliable sources of points.",
    sections: [
      {
        heading: "Why ethics is structured the way it is",
        paragraphs: [
          "Capital markets only function when investors trust the professionals who operate them. That trust is fragile: a single analyst trading on inside information or a manager quietly steering clients into high-fee products can damage confidence in an entire firm or market. The CFA Institute's Code of Ethics and Standards of Professional Conduct exist to make that trust enforceable. Membership is conditional on following them, and violations can cost someone the charter.",
          "The Code of Ethics is the short, aspirational statement — act with integrity, place client interests above your own, use reasonable care. The Standards of Professional Conduct are where the real exam content lives: seven numbered standards, each with sub-parts, that translate those principles into specific, testable rules.",
        ],
      },
      {
        heading: "The seven Standards at a glance",
        paragraphs: [
          "You should be able to recall all seven by number and recognize which one a scenario is testing. Almost every ethics question is really asking: 'which Standard is in play, and was it violated?'",
        ],
        bullets: [
          "I. Professionalism — knowledge of the law, independence and objectivity, no misrepresentation, no misconduct.",
          "II. Integrity of Capital Markets — no acting on material nonpublic information; no market manipulation.",
          "III. Duties to Clients — loyalty/prudence/care, fair dealing among clients, suitability, performance presentation, confidentiality.",
          "IV. Duties to Employers — loyalty, proper handling of additional compensation, responsibilities of supervisors.",
          "V. Investment Analysis, Recommendations, and Actions — diligence and reasonable basis, clear communication, record retention.",
          "VI. Conflicts of Interest — disclose conflicts, prioritize transactions for clients/employer over yourself, no improper referral fees.",
          "VII. Responsibilities as a CFA Member/Candidate — don't compromise the integrity of the CFA program; don't misrepresent the charter.",
        ],
      },
      {
        heading: "The standards candidates trip on most",
        paragraphs: [
          "Material nonpublic information (Standard II-A) is the single most tested idea. Information is 'material' if a reasonable investor would want it before trading, and 'nonpublic' until it has been disseminated to the marketplace. The mosaic theory is the crucial nuance: an analyst may combine public information with non-material nonpublic information to reach a conclusion — even a market-moving one — without violating the Standard. Piecing together public scraps is skill; trading on a leaked earnings number is a violation.",
          "Independence and objectivity (Standard I-B) shows up as gifts, lavish trips paid by companies an analyst covers, or pressure from investment-banking colleagues. Modest, customary business gifts are usually fine; anything that could reasonably be expected to compromise judgment is not. The safest answer almost always involves disclosure and declining benefits tied to a particular conclusion.",
          "Loyalty to employer (Standard IV-A) governs the classic 'leaving to start a competing firm' scenario. Before resignation you may make preparations, but you may not take client lists, records, or solicit clients, and you may not misappropriate the employer's property. Memory of routine client contacts is permitted; copying the CRM is not.",
        ],
        callout: {
          label: "Mosaic theory",
          body: "Combining public + non-material nonpublic information to form a conclusion is permitted, even if the conclusion itself would move the market. Trading on material nonpublic information is not.",
        },
      },
      {
        heading: "A repeatable method for ethics questions",
        paragraphs: [
          "Ethics questions are won by process, not gut feel. Read the scenario and first identify which Standard is implicated — that alone eliminates distractor answers about unrelated rules. Then ask whether the specific conduct meets or breaches that Standard, paying attention to qualifiers like 'reasonable,' 'material,' and 'disclosed.' Finally, choose the least-bad action: the CFA answer is rarely the most aggressive; it favors disclosure, declining, and documentation.",
          "Watch for answer choices that are true statements but don't address the violation, and for choices that over-correct (e.g., claiming something is a violation when disclosure made it permissible). The exam loves the gap between 'technically legal' and 'compliant with the Standards' — when local law is less strict than the Code, the Code governs; when local law is stricter, follow local law.",
        ],
      },
      {
        heading: "GIPS, briefly",
        paragraphs: [
          "The Global Investment Performance Standards (GIPS) are a voluntary set of standards for how firms calculate and present investment performance so that results are fair, comparable, and not cherry-picked. At Level I you need the concepts, not the computation: GIPS compliance is claimed by the firm (not a single composite or product), it requires showing a minimum span of history that grows over time, and it forbids presenting only your best accounts. The point is comparability — a prospective client should be able to trust that the track record is complete and consistently calculated.",
        ],
      },
    ],
    keyTerms: [
      { term: "Fiduciary duty", def: "A legal and ethical obligation to act in the best interest of the client, ahead of your own or your employer's interests." },
      { term: "Material nonpublic information", def: "Information not yet released to the market that a reasonable investor would want before trading; acting on it is prohibited." },
      { term: "Mosaic theory", def: "Reaching a conclusion by combining public and non-material nonpublic information — permitted under the Standards." },
      { term: "Fair dealing", def: "Treating all clients fairly when disseminating recommendations or taking investment action; not favoring some clients over others." },
      { term: "GIPS", def: "Global Investment Performance Standards — voluntary standards for fair, complete, and comparable performance presentation, claimed at the firm level." },
    ],
    takeaways: [
      "Know the seven Standards by number and learn to spot which one a scenario tests.",
      "Material nonpublic information and the mosaic theory are the highest-yield ideas — master the distinction.",
      "When the Code and local law differ, follow the stricter of the two.",
      "The correct action usually involves disclosure, declining, or documentation — not the most aggressive option.",
    ],
  },

  // --------------------------------------------------------------------
  // 2. QUANTITATIVE METHODS
  // --------------------------------------------------------------------
  {
    id: "cfa-quant",
    examSlug: "cfa",
    topicId: "quant",
    topicName: "Quantitative Methods",
    title: "Quantitative Methods: Time Value, Returns, and Inference",
    readingMinutes: 23,
    summary: "Discounting and compounding, the right way to average returns, distributions and z-scores, sampling, hypothesis testing, and regression — with the math worked through.",
    intro:
      "Quantitative Methods is the engine room of the CFA curriculum. Every valuation you will ever do — a bond, a stock, a project — is an application of discounting. Every performance figure you quote depends on choosing the correct average. And every empirical claim ('this manager has skill,' 'this factor predicts returns') rests on the logic of statistical inference. This chapter develops those tools properly: not as formulas to memorize, but as a connected way of thinking about money across time and about evidence under uncertainty. Work through the figures and the worked examples — the numbers are meant to be followed, not skimmed.",
    sections: [
      {
        heading: "The master idea: money has a time value",
        blocks: [
          { kind: "p", text: "A dollar today is worth more than a dollar a year from now, for two distinct reasons. First, a dollar today can be invested and earn a return, so it grows into more than a dollar. Second, a dollar promised in the future is uncertain — it may not arrive in full — so it must be discounted for risk. The interest rate, or discount rate, bundles both: it is the compensation an investor demands for waiting and for bearing risk. Almost everything else in finance is built on top of this single principle." },
          { kind: "p", text: "Compounding is the forward operation: it grows a present amount into a larger future amount by repeatedly earning a return on both the original principal and the accumulated interest. Discounting is the exact inverse: it shrinks a future amount back to its equivalent value today. Because interest earns interest, growth is not linear but exponential — and over long horizons the difference is enormous, which is why the rate you earn matters far more than intuition suggests." },
          { kind: "formula", formula: { label: "Future value and present value", expr: "FV = PV × (1 + r)ⁿ        PV = FV ÷ (1 + r)ⁿ", note: "r = periodic rate, n = number of compounding periods. The two equations are the same relationship read in opposite directions." } },
          { kind: "figure", figure: { caption: "Figure 1 — Growth of $1 over 30 years. Because returns compound, doubling the rate from 5% to 10% does far more than double the ending value: $4.32 vs $17.45. The curves bend upward because each year's interest itself earns interest in every later year.", alt: "Line chart comparing exponential growth of one dollar at 5% and 10% annual compounding over 30 years", svg: `<svg viewBox="0 0 460 280" width="100%" style="max-width:460px"><line x1="55" y1="25" x2="55" y2="245" stroke="var(--border-strong)" stroke-width="1"/><line x1="55" y1="245" x2="445" y2="245" stroke="var(--border-strong)" stroke-width="1"/><text x="55" y="262" text-anchor="middle" font-size="10" fill="var(--text-muted)">0</text><text x="183" y="262" text-anchor="middle" font-size="10" fill="var(--text-muted)">10</text><text x="311" y="262" text-anchor="middle" font-size="10" fill="var(--text-muted)">20</text><text x="440" y="262" text-anchor="middle" font-size="10" fill="var(--text-muted)">30</text><text x="250" y="277" text-anchor="middle" font-size="10" fill="var(--text-muted)">Years</text><text x="18" y="135" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 18 135)">Growth of $1</text><polyline fill="none" stroke="var(--ats-green)" stroke-width="2.5" points="55,233 119,229 183,225 247,220 311,213 376,204 440,192"/><polyline fill="none" stroke="var(--primary)" stroke-width="2.5" points="55,233 119,225 183,213 247,194 311,163 376,113 440,32"/><text x="436" y="30" text-anchor="end" font-size="11" fill="var(--primary)" font-weight="600">10% → $17.45</text><text x="436" y="186" text-anchor="end" font-size="11" fill="var(--ats-green)" font-weight="600">5% → $4.32</text></svg>` } },
          { kind: "p", text: "Compounding frequency is a subtle but heavily tested wrinkle. A 'stated' or nominal annual rate of 6% means something different depending on how often interest is credited. Compounded annually it adds 6%; compounded monthly it adds 0.5% twelve times, and because those monthly bits each start earning interest, the true annual growth exceeds 6%. The effective annual rate (EAR) translates any stated rate plus its compounding frequency into the single annual rate that actually applies." },
          { kind: "formula", formula: { label: "Effective annual rate", expr: "EAR = (1 + r/m)ᵐ − 1        (continuous: EAR = eʳ − 1)", note: "m = compounding periods per year. More frequent compounding always raises the EAR, approaching the continuous limit." } },
          { kind: "table", table: { caption: "Table 1 — A 6% stated rate produces a higher effective rate the more often it compounds, but with diminishing gains as frequency rises.", headers: ["Compounding", "EAR on a 6% stated rate"], rows: [["Annual (m = 1)", "6.000%"], ["Semiannual (m = 2)", "6.090%"], ["Quarterly (m = 4)", "6.136%"], ["Monthly (m = 12)", "6.168%"], ["Daily (m = 365)", "6.183%"], ["Continuous", "6.184%"]] } },
          { kind: "example", example: { title: "effective annual rate", prompt: "A bank quotes a 6% nominal annual rate compounded monthly. What rate does a depositor actually earn over a year?", steps: ["Monthly rate = 6% ÷ 12 = 0.5% = 0.005.", "Compound it across 12 months: (1 + 0.005)¹² = 1.061678.", "Subtract the original principal: 1.061678 − 1 = 0.061678."], answer: "EAR ≈ 6.17%, modestly above the 6% stated rate — the gap is interest earning interest within the year." } },
          { kind: "callout", label: "The #1 avoidable error", body: "On the calculator, keep N, I/Y, PV, PMT, and FV in consistent period units. Monthly cash flows need a monthly rate and a count of months — mixing annual and monthly inputs is the single most common mistake on time-value problems." },
        ],
      },
      {
        heading: "Measuring returns: which average tells the truth",
        blocks: [
          { kind: "p", text: "The holding period return (HPR) is the total return over a single period, capturing both income (dividends, coupons) and price change: HPR = (ending value + income − beginning value) ÷ beginning value. The complications begin when you summarize several periods into one number, because there are two different averages and they answer different questions." },
          { kind: "p", text: "The arithmetic mean simply adds the periodic returns and divides by the count. It is the right answer to 'what is the expected return in a single typical period?' But it systematically overstates the growth an investor actually realized over multiple periods, because it ignores compounding. The geometric mean return is the constant rate that, compounded over all the periods, reproduces the actual ending wealth. It is the honest measure of realized performance, and it is always less than or equal to the arithmetic mean — equal only when every period's return is identical. The gap between them widens as returns become more volatile; this 'volatility drag' is why a wild ride ends poorer than its average period would suggest." },
          { kind: "formula", formula: { label: "Geometric mean return", expr: "Rₘ = [(1 + R₁)(1 + R₂)…(1 + Rₙ)]^(1/n) − 1", note: "Chain the growth factors, take the n-th root, subtract 1. Always ≤ the arithmetic mean when returns vary." } },
          { kind: "example", example: { title: "why volatility costs you", prompt: "An investment returns +50% in year one and −50% in year two. What was the average annual return?", steps: ["Arithmetic mean = (+50% − 50%) ÷ 2 = 0%. It looks like a wash.", "But follow the money: $100 → $150 → $75. You actually lost 25%.", "Geometric mean = (1.50 × 0.50)^(1/2) − 1 = (0.75)^0.5 − 1 = 0.866 − 1 = −0.134."], answer: "−13.4% per year. The arithmetic mean (0%) is dangerously optimistic; the geometric mean tells the truth about realized wealth." } },
          { kind: "p", text: "A second pair of measures is even more often confused, and it concerns whose decisions you are evaluating. The time-weighted rate of return (TWRR) removes the effect of cash flows into and out of a portfolio. It breaks the period at every contribution or withdrawal, computes each sub-period's return, and chains them geometrically — so the result reflects only the manager's investment decisions, not the client's deposit timing. This is why the TWRR is the industry and GIPS standard for evaluating managers. The money-weighted rate of return (MWRR) is, by contrast, the internal rate of return on the actual cash flows: it is the single rate that sets the present value of all contributions and withdrawals equal to the ending value. It reflects the investor's own experience, including the luck or skill of when they added money." },
          { kind: "callout", label: "Manager vs investor", body: "If a client pours in cash right before a strong run, the money-weighted return flatters the result even though the manager did nothing differently. Judge the manager by the time-weighted return; judge the investor's timing by the money-weighted return." },
        ],
      },
      {
        heading: "Describing distributions: center, spread, and shape",
        blocks: [
          { kind: "p", text: "To reason about an uncertain return, we summarize its distribution. Central tendency locates the middle: the mean is the balance point, the median the 50th percentile (robust to outliers), and the mode the most frequent value. Dispersion measures how spread out outcomes are. Variance is the average squared deviation from the mean; standard deviation is its square root, expressed in the same units as the data, and it is the workhorse risk measure throughout the curriculum. Two return streams can share an identical mean yet differ wildly in standard deviation — and therefore in risk." },
          { kind: "p", text: "Two higher 'moments' describe shape and matter greatly for risk. Skewness measures asymmetry. A positively (right-) skewed distribution has a long right tail and a mean pulled above its median — frequent small losses with occasional large gains. A negatively (left-) skewed distribution is the mirror image, and it is the dangerous one for investors: frequent small gains punctuated by rare severe losses, the profile of many credit and option-selling strategies. Kurtosis measures tail fatness. A leptokurtic distribution (excess kurtosis greater than zero) has fatter tails than the normal distribution, meaning extreme outcomes — crashes and spikes — occur more often than a normal model predicts. Underestimating kurtosis is a recurring cause of financial blow-ups, because risk models calibrated to the normal distribution assign near-zero probability to events that, in reality, happen every decade or two." },
          { kind: "callout", label: "Why shape matters", body: "Standard deviation treats upside and downside symmetrically. Negative skew and fat tails (high kurtosis) warn that the real danger — the rare, large loss — is larger and more likely than standard deviation alone implies." },
        ],
      },
      {
        heading: "The normal distribution and the z-score",
        blocks: [
          { kind: "p", text: "The normal (Gaussian) distribution is the reference point for much of finance. It is completely described by just two numbers — its mean and its variance — and it is symmetric and bell-shaped. Its usefulness comes from a remarkably stable structure: a fixed fraction of the probability always falls within a given number of standard deviations of the mean, regardless of the particular mean and variance. Roughly 68% of outcomes lie within ±1 standard deviation, about 95% within ±2 (precisely ±1.96), and about 99% within ±2.58 (with 99.7% inside ±3)." },
          { kind: "figure", figure: { caption: "Figure 2 — The normal distribution and the 68–95–99.7 rule. The proportion of outcomes within a given number of standard deviations is fixed for every normal distribution, which is what makes the standard normal table universally applicable.", alt: "Bell curve showing 68 percent of area within one standard deviation, 95 percent within two, and 99.7 percent within three", svg: `<svg viewBox="0 0 460 250" width="100%" style="max-width:460px"><line x1="30" y1="210" x2="430" y2="210" stroke="var(--border-strong)" stroke-width="1"/><path d="M40,210 C130,210 175,48 230,48 C285,48 330,210 420,210" fill="rgba(83,74,183,0.10)" stroke="var(--primary)" stroke-width="2.5"/><line x1="170" y1="92" x2="170" y2="210" stroke="var(--border-strong)" stroke-dasharray="3 3"/><line x1="290" y1="92" x2="290" y2="210" stroke="var(--border-strong)" stroke-dasharray="3 3"/><line x1="110" y1="168" x2="110" y2="210" stroke="var(--border)" stroke-dasharray="3 3"/><line x1="350" y1="168" x2="350" y2="210" stroke="var(--border)" stroke-dasharray="3 3"/><text x="230" y="226" text-anchor="middle" font-size="10" fill="var(--text-muted)">μ</text><text x="170" y="226" text-anchor="middle" font-size="10" fill="var(--text-muted)">−1σ</text><text x="290" y="226" text-anchor="middle" font-size="10" fill="var(--text-muted)">+1σ</text><text x="110" y="226" text-anchor="middle" font-size="10" fill="var(--text-muted)">−2σ</text><text x="350" y="226" text-anchor="middle" font-size="10" fill="var(--text-muted)">+2σ</text><text x="230" y="120" text-anchor="middle" font-size="11" fill="var(--primary)" font-weight="600">68%</text><text x="230" y="158" text-anchor="middle" font-size="10" fill="var(--text-secondary)">95% within ±2σ</text><text x="230" y="194" text-anchor="middle" font-size="10" fill="var(--text-muted)">99.7% within ±3σ</text></svg>` } },
          { kind: "p", text: "To use these facts on any normal variable, we standardize it. The z-score expresses an observation as the number of standard deviations it sits above or below the mean, converting the variable to the standard normal distribution (mean 0, standard deviation 1). Once standardized, a single table of probabilities applies to every problem. This is the bridge between a specific real-world quantity — a return, a ratio, a test statistic — and the universal geometry of the bell curve." },
          { kind: "formula", formula: { label: "Standardizing to a z-score", expr: "z = (x − μ) ÷ σ", note: "x = the observation, μ = mean, σ = standard deviation. z is how many standard deviations x lies from the mean." } },
          { kind: "example", example: { title: "z-score", prompt: "A fund's annual returns are approximately normal with a mean of 8% and a standard deviation of 12%. How unusual is a −16% year?", steps: ["z = (x − μ) ÷ σ = (−16% − 8%) ÷ 12%.", "= −24% ÷ 12% = −2.0.", "A −16% return is exactly two standard deviations below the mean. From the 95% rule, about 2.5% of outcomes lie below −2σ."], answer: "z = −2.0; such a year (or worse) is expected roughly 1 time in 40 under the normal model — and more often if returns are fat-tailed." } },
        ],
      },
      {
        heading: "From sample to population: the central limit theorem",
        blocks: [
          { kind: "p", text: "We almost never observe an entire population — every possible return, every borrower. Instead we draw a sample and use it to estimate the population's parameters. The deep result that licenses this is the central limit theorem (CLT): as the sample size grows, the sampling distribution of the sample mean approaches a normal distribution, regardless of the shape of the underlying population. Even if individual returns are skewed or fat-tailed, the average of enough of them behaves normally. This is why the normal distribution shows up everywhere in inference even when the raw data are not normal." },
          { kind: "p", text: "The CLT comes with a precise statement about precision. The standard error of the mean — the standard deviation of the sample mean's sampling distribution — equals the population standard deviation divided by the square root of the sample size. Because of that square root, quadrupling the sample size only halves the standard error: precision improves, but with diminishing returns. This is the quantitative reason a larger sample yields a tighter, more trustworthy estimate." },
          { kind: "figure", figure: { caption: "Figure 3 — The central limit theorem in action. As sample size n rises, the sampling distribution of the mean concentrates around the true mean and its spread (the standard error) shrinks in proportion to 1/√n. The three curves share the same center but become taller and narrower.", alt: "Three bell curves with the same center; larger sample sizes produce taller, narrower curves", svg: `<svg viewBox="0 0 460 235" width="100%" style="max-width:460px"><line x1="30" y1="198" x2="430" y2="198" stroke="var(--border-strong)" stroke-width="1"/><line x1="230" y1="30" x2="230" y2="198" stroke="var(--border)" stroke-dasharray="3 3"/><text x="230" y="214" text-anchor="middle" font-size="10" fill="var(--text-muted)">true mean μ</text><path d="M55,198 C150,198 180,128 230,128 C280,128 310,198 405,198" fill="none" stroke="var(--text-muted)" stroke-width="2"/><path d="M110,198 C175,198 198,82 230,82 C262,82 285,198 350,198" fill="none" stroke="var(--ats-green)" stroke-width="2"/><path d="M160,198 C205,198 219,38 230,38 C241,38 255,198 300,198" fill="none" stroke="var(--primary)" stroke-width="2.5"/><text x="398" y="190" text-anchor="end" font-size="10" fill="var(--text-muted)">n = 10</text><text x="345" y="92" text-anchor="end" font-size="10" fill="var(--ats-green)">n = 30</text><text x="288" y="48" text-anchor="end" font-size="10" fill="var(--primary)" font-weight="600">n = 100</text></svg>` } },
          { kind: "formula", formula: { label: "Standard error of the mean", expr: "SE = σ ÷ √n", note: "σ = population (or sample) standard deviation, n = sample size. Quadruple n to halve the standard error." } },
        ],
      },
      {
        heading: "Hypothesis testing: is the result real or just noise?",
        blocks: [
          { kind: "p", text: "Suppose a manager beat their benchmark by 2% last year. Is that skill, or luck? Hypothesis testing is the disciplined procedure for answering such questions. You begin with a null hypothesis (H₀) — the default, usually 'no effect' or 'the true value equals zero' — and an alternative hypothesis that you would accept the evidence for. You then choose a significance level (α), commonly 5%, which is the probability of a false alarm you are willing to tolerate. You compute a test statistic that measures how far the observed result sits from what the null predicts, in standard-error units, and compare it to a critical value. If the statistic falls into the rejection region — beyond the critical value — you reject the null." },
          { kind: "figure", figure: { caption: "Figure 4 — A two-tailed test at the 5% level. Under the null hypothesis the test statistic follows the bell curve. The two red rejection regions beyond ±1.96 each contain 2.5% of the probability; a statistic landing there is too extreme to credit to chance, so the null is rejected.", alt: "Bell curve with rejection regions shaded in both tails beyond plus and minus 1.96", svg: `<svg viewBox="0 0 460 235" width="100%" style="max-width:460px"><line x1="30" y1="195" x2="430" y2="195" stroke="var(--border-strong)" stroke-width="1"/><path d="M40,195 C130,195 175,50 230,50 C285,50 330,195 420,195" fill="none" stroke="var(--primary)" stroke-width="2.5"/><path d="M40,195 C95,195 122,168 150,160 L150,195 Z" fill="rgba(226,75,74,0.30)" stroke="none"/><path d="M310,160 C338,168 365,195 420,195 L310,195 Z" fill="rgba(226,75,74,0.30)" stroke="none"/><line x1="150" y1="120" x2="150" y2="195" stroke="var(--ats-red)" stroke-dasharray="3 3"/><line x1="310" y1="120" x2="310" y2="195" stroke="var(--ats-red)" stroke-dasharray="3 3"/><text x="150" y="211" text-anchor="middle" font-size="10" fill="var(--ats-red)">−1.96</text><text x="310" y="211" text-anchor="middle" font-size="10" fill="var(--ats-red)">+1.96</text><text x="230" y="120" text-anchor="middle" font-size="10" fill="var(--text-secondary)">Fail to reject</text><text x="230" y="135" text-anchor="middle" font-size="10" fill="var(--text-muted)">(95%)</text><text x="92" y="188" text-anchor="middle" font-size="9" fill="var(--ats-red)">2.5%</text><text x="368" y="188" text-anchor="middle" font-size="9" fill="var(--ats-red)">2.5%</text></svg>` } },
          { kind: "p", text: "Because we are reasoning under uncertainty, two distinct errors are possible, and they trade off against each other. A Type I error is rejecting a null that is actually true — a false positive, such as declaring a lucky manager skilled. Its probability is exactly α, the significance level you chose. A Type II error is failing to reject a null that is actually false — a false negative, such as missing a genuinely skilled manager. Tightening α to reduce false positives makes the rejection region smaller and therefore raises the chance of a false negative. The power of a test, equal to one minus the probability of a Type II error, is its ability to detect a real effect; power rises with larger samples and larger true effects." },
          { kind: "p", text: "The p-value reframes the same logic in a continuous way: it is the probability, if the null were true, of observing a test statistic at least as extreme as the one you got. A small p-value means the data would be surprising under the null, so the null is doubted; the conventional rule rejects when the p-value is below α. Reporting the p-value is more informative than a bare reject/fail-to-reject verdict, because it conveys how strong the evidence is, not merely whether it cleared an arbitrary threshold." },
          { kind: "callout", label: "Type I vs Type II", body: "Type I = rejecting a true null (false positive); P(Type I) = α. Type II = failing to reject a false null (false negative). Power = 1 − P(Type II). You cannot drive both error rates to zero at once with a fixed sample — only a larger sample improves both." },
        ],
      },
      {
        heading: "Linear regression: fitting a line to data",
        blocks: [
          { kind: "p", text: "Regression quantifies how one variable moves with another. Simple linear regression fits a straight line — an intercept plus a slope times the independent variable — by ordinary least squares (OLS), which chooses the line that minimizes the sum of the squared vertical distances between the observed points and the line. Squaring the residuals penalizes large misses heavily and yields a unique, computable solution." },
          { kind: "figure", figure: { caption: "Figure 5 — Ordinary least squares fits the line that minimizes the total squared vertical distance from the points. The slope estimates the expected change in Y per one-unit change in X; here the upward slope and tight clustering (high R²) indicate a strong positive relationship.", alt: "Scatter plot of points with an upward-sloping fitted regression line", svg: `<svg viewBox="0 0 460 250" width="100%" style="max-width:460px"><line x1="52" y1="25" x2="52" y2="212" stroke="var(--border-strong)" stroke-width="1"/><line x1="52" y1="212" x2="432" y2="212" stroke="var(--border-strong)" stroke-width="1"/><text x="245" y="237" text-anchor="middle" font-size="10" fill="var(--text-muted)">Independent variable (X)</text><text x="20" y="120" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 20 120)">Dependent (Y)</text><line x1="62" y1="196" x2="420" y2="74" stroke="var(--primary)" stroke-width="2.5"/><circle cx="86" cy="188" r="3.5" fill="var(--ats-green)"/><circle cx="120" cy="178" r="3.5" fill="var(--ats-green)"/><circle cx="150" cy="186" r="3.5" fill="var(--ats-green)"/><circle cx="186" cy="162" r="3.5" fill="var(--ats-green)"/><circle cx="216" cy="150" r="3.5" fill="var(--ats-green)"/><circle cx="250" cy="142" r="3.5" fill="var(--ats-green)"/><circle cx="286" cy="120" r="3.5" fill="var(--ats-green)"/><circle cx="320" cy="128" r="3.5" fill="var(--ats-green)"/><circle cx="360" cy="100" r="3.5" fill="var(--ats-green)"/><circle cx="398" cy="86" r="3.5" fill="var(--ats-green)"/><text x="406" y="70" text-anchor="end" font-size="10" fill="var(--primary)" font-weight="600">ŷ = a + bX</text><text x="406" y="200" text-anchor="end" font-size="10" fill="var(--text-secondary)">R² = 0.86</text></svg>` } },
          { kind: "p", text: "Two outputs carry the interpretation. The slope coefficient is the expected change in the dependent variable for a one-unit increase in the independent variable; it is the economic content of the model — a beta, a sensitivity, an elasticity. R-squared (the coefficient of determination) is the fraction of the dependent variable's total variation that the model explains, ranging from 0 (the line explains nothing) to 1 (the line passes through every point). A high R² means the relationship is tight; a low R² means the independent variable, while perhaps still statistically significant, leaves most of the variation unexplained." },
          { kind: "p", text: "OLS is only trustworthy when its assumptions roughly hold: the true relationship is linear, the errors have constant variance (homoskedasticity) and are independent, and the errors are uncorrelated with the independent variable. At Level I the emphasis is on interpreting the slope and R² and recognizing when these assumptions are violated — not on deriving the estimators by hand. A model that fits the data well in-sample but rests on broken assumptions can still mislead, which is why diagnosing the assumptions is as important as reading the coefficients." },
        ],
      },
    ],
    keyTerms: [
      { term: "Effective annual rate (EAR)", def: "The true annual rate after accounting for intra-year compounding: (1 + r/m)^m − 1. Rises with compounding frequency toward the continuous limit e^r − 1." },
      { term: "Geometric mean return", def: "The constant compound rate reproducing actual ending wealth; always ≤ the arithmetic mean, with the gap widening as volatility rises." },
      { term: "Time-weighted return", def: "Strips out the effect of cash-flow timing; the GIPS standard for judging a manager's skill." },
      { term: "Money-weighted return", def: "The IRR on actual cash flows; reflects the investor's own contribution timing and experience." },
      { term: "Standard deviation", def: "Square root of variance, in the data's own units; the curriculum's primary measure of total risk." },
      { term: "Skewness / kurtosis", def: "Asymmetry and tail-fatness of a distribution. Negative skew and high kurtosis flag larger, more frequent extreme losses than the normal model implies." },
      { term: "z-score", def: "An observation expressed as standard deviations from the mean: z = (x − μ)/σ; standardizes any normal variable to the standard normal." },
      { term: "Central limit theorem", def: "The sampling distribution of the mean approaches normal as n grows, whatever the population's shape; standard error = σ/√n." },
      { term: "Type I / Type II error", def: "Rejecting a true null (false positive, probability α) versus failing to reject a false null (false negative). Power = 1 − P(Type II)." },
      { term: "R-squared", def: "Fraction of the dependent variable's variation explained by a regression, from 0 to 1." },
    ],
    takeaways: [
      "Compounding is exponential, so the rate dominates long-horizon outcomes — and EAR rises with compounding frequency. Keep all calculator inputs in consistent period units.",
      "Geometric mean ≤ arithmetic mean; use the geometric mean for realized multi-period growth. Volatility creates a real drag on compounded wealth.",
      "Time-weighted return judges the manager; money-weighted return judges the investor's timing.",
      "The 68–95–99.7 rule plus the z-score let one standard normal table answer any normal-distribution question; negative skew and fat tails make the real downside worse than σ suggests.",
      "The CLT makes the sample mean normal and gives SE = σ/√n, so precision improves only with the square root of sample size.",
      "Hypothesis testing trades Type I against Type II error; α sets the false-positive rate, power detects real effects, and the p-value measures the strength of the evidence.",
    ],
  },

  // --------------------------------------------------------------------
  // 3. FINANCIAL STATEMENT ANALYSIS
  // --------------------------------------------------------------------
  {
    id: "cfa-fra",
    examSlug: "cfa",
    topicId: "fra",
    topicName: "Financial Statement Analysis",
    title: "Financial Statement Analysis: Reading the Three Statements",
    readingMinutes: 11,
    summary: "How the income statement, balance sheet, and cash-flow statement articulate, why cash flow guards against manipulation, the FIFO/LIFO choice, and DuPont — diagrammed and worked through.",
    intro:
      "Financial statement analysis is the largest single topic at Level I, and for good reason: it is the language in which companies describe themselves, and it feeds directly into equity and credit valuation. The objective is not bookkeeping. It is to read three financial statements as one connected system, to see through the discretion that accounting rules grant management, and to judge whether reported earnings reflect genuine economic performance. An analyst who can do that can spot trouble — and opportunity — long before it appears in the headline numbers.",
    sections: [
      {
        heading: "Three statements, one connected system",
        blocks: [
          { kind: "p", text: "The income statement reports revenues and expenses over a period and ends in net income — profitability measured on an accrual basis. The balance sheet is a snapshot at a single instant of what the company owns (assets) and owes (liabilities), the difference being shareholders' equity. The cash-flow statement reconciles accrual profit back to actual cash and sorts it into operating, investing, and financing activities. Each answers a different question: how profitable, how solvent, how cash-generative." },
          { kind: "p", text: "Crucially, these are not three independent documents — they articulate, meaning numbers flow between them in fixed ways. Net income lands in two places at once: it accumulates into retained earnings within equity on the balance sheet, and it is the starting line of the cash-flow statement (under the indirect method). The ending cash balance on the cash-flow statement is the cash line on the balance sheet. Because everything ties together, an analyst can detect manipulation by tracing a figure across statements — most powerfully, by watching profits that rise while operating cash flow does not." },
          { kind: "figure", figure: { caption: "Figure 1 — How the three statements articulate. Net income simultaneously feeds retained earnings on the balance sheet and begins the cash-flow statement; the cash-flow statement's ending cash becomes the balance sheet's cash line. Following a number along these arrows is how analysts catch inconsistencies.", alt: "Diagram with income statement and cash flow statement boxes linking by arrows into a balance sheet box", svg: `<svg viewBox="0 0 460 250" width="100%" style="max-width:460px"><rect x="26" y="34" width="150" height="54" rx="8" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="1.5"/><text x="101" y="56" text-anchor="middle" font-size="11" font-weight="600" fill="var(--primary)">Income Statement</text><text x="101" y="74" text-anchor="middle" font-size="10" fill="var(--text-secondary)">ends in Net Income</text><rect x="26" y="158" width="150" height="54" rx="8" fill="var(--bg-card)" stroke="var(--border-strong)" stroke-width="1.5"/><text x="101" y="180" text-anchor="middle" font-size="11" font-weight="600" fill="var(--text-primary)">Cash-Flow Stmt</text><text x="101" y="198" text-anchor="middle" font-size="10" fill="var(--text-secondary)">starts at Net Income</text><rect x="266" y="48" width="168" height="156" rx="8" fill="var(--bg-card)" stroke="var(--border-strong)" stroke-width="1.5"/><text x="350" y="70" text-anchor="middle" font-size="11" font-weight="600" fill="var(--text-primary)">Balance Sheet</text><text x="350" y="86" text-anchor="middle" font-size="9" fill="var(--text-muted)">Assets = Liabilities + Equity</text><text x="350" y="120" text-anchor="middle" font-size="10" font-weight="600" fill="var(--ats-green)">Retained Earnings</text><text x="350" y="134" text-anchor="middle" font-size="9" fill="var(--text-secondary)">accumulates Net Income</text><text x="350" y="168" text-anchor="middle" font-size="10" font-weight="600" fill="var(--primary)">Cash</text><text x="350" y="182" text-anchor="middle" font-size="9" fill="var(--text-secondary)">= ending cash from CF</text><line x1="176" y1="55" x2="262" y2="112" stroke="var(--ats-green)" stroke-width="1.5"/><polygon points="262,112 252,106 254,116" fill="var(--ats-green)"/><line x1="101" y1="88" x2="101" y2="156" stroke="var(--text-muted)" stroke-width="1.5"/><polygon points="101,156 96,146 106,146" fill="var(--text-muted)"/><line x1="176" y1="188" x2="262" y2="166" stroke="var(--primary)" stroke-width="1.5"/><polygon points="262,166 252,164 254,174" fill="var(--primary)"/></svg>` } },
        ],
      },
      {
        heading: "Accrual accounting, and why analysts anchor on cash",
        blocks: [
          { kind: "p", text: "Accrual accounting records revenue when it is earned and expenses when they are incurred, regardless of when cash actually moves. This gives a truer picture of a period's economic performance than simple cash accounting — but it also requires estimates, and estimates invite discretion. Revenue can be recognized aggressively, expenses deferred, useful lives stretched, and reserves released to smooth a soft quarter. None of that need be fraud; it is the latitude the rules permit." },
          { kind: "p", text: "That latitude is exactly why seasoned analysts anchor on cash flow. Net income can be shaped by judgment; cash is far harder to fabricate. The portion of earnings that is not yet cash — the accruals — is where the risk concentrates. A persistent and widening gap in which net income outruns operating cash flow is one of the most reliable early warnings of deteriorating earnings quality, because it means reported profit is increasingly composed of accounting estimates rather than collected cash." },
          { kind: "callout", label: "Earnings-quality red flag", body: "When net income grows while operating cash flow stalls or falls, the gap is accruals. High and rising accruals frequently precede earnings disappointments and restatements — profit is outrunning the cash that should accompany it." },
        ],
      },
      {
        heading: "Inventory: the FIFO/LIFO choice",
        blocks: [
          { kind: "p", text: "When input costs change over time, the cost-flow assumption a company chooses materially changes its reported results — without any difference in the physical goods. Under FIFO (first-in, first-out), the oldest costs flow to cost of goods sold and the newest costs remain in ending inventory. Under LIFO (last-in, first-out — permitted under US GAAP but prohibited under IFRS), the newest costs flow to COGS while the oldest, often stale costs sit in ending inventory." },
          { kind: "p", text: "In a rising-price environment the consequences are systematic and testable. LIFO charges the newest, highest costs to COGS, so it reports lower gross profit, lower net income, and — importantly — lower taxes, while leaving inventory on the balance sheet understated at old costs. FIFO does the reverse: lower COGS, higher reported profit and taxes, and a balance-sheet inventory that better reflects current replacement cost. To compare a LIFO company against a FIFO peer, analysts use the disclosed LIFO reserve to convert LIFO figures to a FIFO basis." },
          { kind: "table", table: { caption: "Table 1 — Effects of LIFO vs FIFO when prices are RISING. The trade-off is a realistic income statement (LIFO COGS) versus a realistic balance sheet (FIFO inventory).", headers: ["Measure (rising prices)", "LIFO", "FIFO"], rows: [["Cost of goods sold", "Higher (current costs)", "Lower (old costs)"], ["Net income", "Lower", "Higher"], ["Income taxes paid", "Lower", "Higher"], ["Ending inventory (balance sheet)", "Understated (old costs)", "Current (realistic)"]] } },
          { kind: "p", text: "The deeper point is that LIFO's lower reported income is, in a sense, the more honest one for the income statement, because it matches current revenues against current costs — and the lower tax bill is a genuine cash benefit. FIFO, meanwhile, produces a more realistic balance sheet. There is no free lunch; the analyst's job is to know which distortion each method introduces and adjust for it before comparing firms." },
        ],
      },
      {
        heading: "Capitalize vs expense, and depreciation choices",
        blocks: [
          { kind: "p", text: "Whether a cost is capitalized (recorded as an asset and depreciated over time) or expensed immediately changes the timing of expense recognition and therefore the entire path of reported earnings, assets, and even where the cash outflow appears. Capitalizing boosts near-term net income and assets and parks the cash outflow in investing activities; immediate expensing depresses current income but leaves no asset to depreciate later. Two firms making the identical economic outlay can thus report very different profits purely from this choice." },
          { kind: "p", text: "Depreciation method compounds the effect. Straight-line spreads cost evenly and produces smoother, higher early earnings; accelerated methods front-load the expense, depressing early earnings but better matching assets that genuinely lose value quickly. None of these choices changes the total expense over the asset's life or the total cash spent — they only change the timing. Normalizing for these timing differences is precisely what an analyst must do before any cross-company comparison is meaningful." },
        ],
      },
      {
        heading: "From statements to judgment: ratios and DuPont",
        blocks: [
          { kind: "p", text: "Ratios turn raw figures into comparable measures. Liquidity ratios (current, quick) ask whether near-term obligations can be met; solvency ratios (debt-to-equity, interest coverage) ask whether long-term debt is bearable; profitability ratios (net margin, return on equity) measure how efficiently revenue and capital become profit; and activity ratios (inventory turnover, days sales outstanding) measure operational efficiency. A single ratio rarely tells a story — but a ratio compared to peers, to history, and to its own drivers does." },
          { kind: "p", text: "The most illuminating framework is the DuPont decomposition, which dissects return on equity into three multiplicative drivers. It answers not merely whether ROE is high, but WHY: is the company winning on profitability (margin), on efficient use of its assets (turnover), or simply on borrowing (leverage)? Two firms with identical ROE can be utterly different businesses — one a high-margin franchise, the other a thin-margin operation levered to the hilt — and DuPont is how you tell them apart. An ROE propped up by leverage is more fragile than one built on margins, because leverage amplifies losses just as readily as gains." },
          { kind: "figure", figure: { caption: "Figure 2 — The DuPont decomposition. Return on equity is the product of three drivers. Decomposing it reveals whether a company's returns come from profitability, asset efficiency, or financial leverage — distinctions that ROE alone conceals.", alt: "Tree diagram showing ROE equals net profit margin times asset turnover times financial leverage", svg: `<svg viewBox="0 0 460 215" width="100%" style="max-width:460px"><rect x="168" y="16" width="124" height="46" rx="8" fill="var(--primary)"/><text x="230" y="38" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">ROE</text><text x="230" y="53" text-anchor="middle" font-size="9" fill="rgba(255,255,255,0.85)">return on equity</text><line x1="190" y1="62" x2="80" y2="120" stroke="var(--border-strong)" stroke-width="1.2"/><line x1="230" y1="62" x2="230" y2="120" stroke="var(--border-strong)" stroke-width="1.2"/><line x1="270" y1="62" x2="380" y2="120" stroke="var(--border-strong)" stroke-width="1.2"/><rect x="18" y="122" width="124" height="68" rx="8" fill="var(--bg-card)" stroke="var(--border-strong)" stroke-width="1.5"/><text x="80" y="146" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--text-primary)">Net Profit Margin</text><text x="80" y="164" text-anchor="middle" font-size="9.5" fill="var(--text-secondary)">Net Income</text><text x="80" y="178" text-anchor="middle" font-size="9.5" fill="var(--text-secondary)">÷ Revenue</text><rect x="168" y="122" width="124" height="68" rx="8" fill="var(--bg-card)" stroke="var(--border-strong)" stroke-width="1.5"/><text x="230" y="146" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--text-primary)">Asset Turnover</text><text x="230" y="164" text-anchor="middle" font-size="9.5" fill="var(--text-secondary)">Revenue</text><text x="230" y="178" text-anchor="middle" font-size="9.5" fill="var(--text-secondary)">÷ Total Assets</text><rect x="318" y="122" width="124" height="68" rx="8" fill="var(--bg-card)" stroke="var(--border-strong)" stroke-width="1.5"/><text x="380" y="146" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--text-primary)">Financial Leverage</text><text x="380" y="164" text-anchor="middle" font-size="9.5" fill="var(--text-secondary)">Total Assets</text><text x="380" y="178" text-anchor="middle" font-size="9.5" fill="var(--text-secondary)">÷ Equity</text><text x="155" y="160" text-anchor="middle" font-size="16" font-weight="700" fill="var(--primary)">×</text><text x="305" y="160" text-anchor="middle" font-size="16" font-weight="700" fill="var(--primary)">×</text></svg>` } },
          { kind: "formula", formula: { label: "DuPont decomposition of ROE", expr: "ROE = (NI ÷ Revenue) × (Revenue ÷ Assets) × (Assets ÷ Equity)", note: "= Net Profit Margin × Asset Turnover × Financial Leverage. The revenue and asset terms cancel, confirming the identity reduces to NI ÷ Equity." } },
          { kind: "example", example: { title: "DuPont decomposition", prompt: "A firm has a 5% net margin, asset turnover of 1.5×, and financial leverage of 2.0×. What is its ROE, and where does it come from?", steps: ["ROE = margin × turnover × leverage.", "= 0.05 × 1.5 × 2.0.", "= 0.15."], answer: "ROE = 15%. Note that leverage of 2.0× doubles the underlying 7.5% return on assets — so half this ROE is borrowed. A peer reaching 15% on margins alone would be the sturdier business." } },
        ],
      },
    ],
    keyTerms: [
      { term: "Articulation", def: "The fixed linkages by which figures flow between the three statements — e.g. net income into retained earnings and into the cash-flow statement." },
      { term: "Accrual accounting", def: "Recognizing revenue when earned and expenses when incurred, regardless of cash timing; the source of management discretion." },
      { term: "Operating cash flow", def: "Cash generated by core operations; harder to manipulate than net income, so analysts compare the two." },
      { term: "LIFO reserve", def: "The disclosed difference between LIFO and FIFO inventory values; used to convert LIFO statements to a FIFO basis for comparison." },
      { term: "Capitalize vs expense", def: "Recording an outlay as a depreciable asset (boosts near-term income) versus expensing it at once (depresses it) — a timing choice." },
      { term: "DuPont analysis", def: "Decomposing ROE into net margin × asset turnover × financial leverage to locate the source of returns." },
    ],
    takeaways: [
      "Read the three statements as one articulated system — net income feeds both retained earnings and the cash-flow statement; trace numbers across them to catch inconsistencies.",
      "A widening gap between net income and operating cash flow (high accruals) is a leading red flag for earnings quality.",
      "In rising prices, LIFO gives lower income/taxes and a realistic COGS; FIFO gives higher income and a realistic balance-sheet inventory.",
      "Capitalizing vs expensing and the depreciation method change the timing — not the total — of expense; normalize before comparing firms.",
      "DuPont splits ROE into margin × turnover × leverage; an ROE built on leverage is more fragile than one built on margins.",
    ],
  },

  // --------------------------------------------------------------------
  // 4. FIXED INCOME
  // --------------------------------------------------------------------
  {
    id: "cfa-fixed",
    examSlug: "cfa",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "Fixed Income: Pricing, Yield, and Interest-Rate Risk",
    readingMinutes: 17,
    summary: "Bond pricing as discounted cash flow, the price-yield curve, the many meanings of yield, and how duration and convexity measure interest-rate risk — worked through with graphs.",
    intro:
      "Fixed income is where the time-value mathematics of the previous chapter becomes a market worth more than a hundred trillion dollars — larger than global equities. A bond is, at its core, a contract to deliver a known stream of cash flows, so its fair value is nothing more than the present value of those cash flows. Everything that follows — why prices move opposite to yields, what 'yield' actually means, and how much a portfolio will lose if rates rise — is a consequence of that one idea applied carefully. The payoff for mastering it is the ability to look at a bond and know not just what it is worth, but how that worth will change when the world does.",
    sections: [
      {
        heading: "The anatomy of a bond, and pricing as discounted cash flow",
        blocks: [
          { kind: "p", text: "A standard ('plain vanilla') bond promises two things: periodic coupon payments at a fixed rate, and the return of the par (face) value at maturity. Its defining features — coupon rate, payment frequency, maturity, seniority in the capital structure, and any embedded options such as a call — together determine its risk and therefore its price. The issuer may be a sovereign government, a municipality, or a corporation, and the issuer's credit quality drives the extra yield investors demand above a risk-free benchmark." },
          { kind: "p", text: "Pricing a bond is a direct application of present value: the price is the sum of every future cash flow discounted back to today at an appropriate rate. Discount each coupon and the final principal repayment, add them up, and you have the price. The single most important consequence of this is that when the discount rate (the market yield) exactly equals the bond's coupon rate, the bond prices precisely at par — the coupons just compensate for the time value of money and nothing more." },
          { kind: "formula", formula: { label: "Bond price = present value of cash flows", expr: "Price = Σ [ C ÷ (1 + y)ᵗ ] + Par ÷ (1 + y)ᴺ", note: "C = periodic coupon, y = required yield per period, t = period index, N = number of periods. A more precise valuation discounts each cash flow at the spot rate for its own maturity." } },
          { kind: "example", example: { title: "pricing a bond", prompt: "Price a 3-year bond with a 5% annual coupon and $1,000 par when the market requires a 6% yield.", steps: ["Coupons are $50 per year for 3 years; principal of $1,000 returns at year 3.", "PV of coupons = 50/1.06 + 50/1.06² + 50/1.06³ = 47.17 + 44.50 + 41.98 = 133.65.", "PV of principal = 1,000 ÷ 1.06³ = 1,000 ÷ 1.191 = 839.62.", "Price = 133.65 + 839.62 = 973.27."], answer: "$973.27 — below par, because the 5% coupon is less than the 6% the market demands, so the bond trades at a discount." } },
          { kind: "p", text: "One mechanical detail trips up many candidates: accrued interest. Between coupon dates the buyer owes the seller the portion of the next coupon that has already been 'earned' by the passage of time. The quoted or 'clean' price excludes this; the 'dirty' (full) price that actually changes hands adds the accrued interest back. The clean price is quoted precisely so that day-to-day quotes are not sawtoothed by the steady accrual of each coupon." },
        ],
      },
      {
        heading: "Why price and yield move in opposite directions",
        blocks: [
          { kind: "p", text: "A bond's coupon is fixed at issuance, but market yields are not. If rates rise after issuance, the bond's fixed coupon now looks stingy next to newly issued bonds, so no one will pay the old price — the price must fall until the bond's yield matches the market. If rates fall, the bond's now-generous coupon makes it more valuable and its price rises. Price and yield therefore always move in opposite directions. A bond whose price sits above par is a premium bond (its coupon exceeds the market yield); below par it is a discount bond." },
          { kind: "figure", figure: { caption: "Figure 1 — The price-yield relationship. As required yield rises, price falls — and the relationship is not a straight line but a convex curve that flattens at higher yields. Where the coupon equals the yield, the bond prices at par; above that point it is a discount bond, below it a premium bond.", alt: "Downward-sloping convex curve of bond price against yield, with premium, par, and discount regions marked", svg: `<svg viewBox="0 0 460 270" width="100%" style="max-width:460px"><line x1="62" y1="40" x2="62" y2="235" stroke="var(--border-strong)" stroke-width="1"/><line x1="62" y1="235" x2="435" y2="235" stroke="var(--border-strong)" stroke-width="1"/><line x1="62" y1="150" x2="435" y2="150" stroke="var(--border)" stroke-dasharray="4 3"/><path d="M82,58 C150,150 235,195 430,222" fill="none" stroke="var(--primary)" stroke-width="2.5"/><circle cx="206" cy="150" r="4" fill="var(--primary)"/><line x1="206" y1="150" x2="206" y2="235" stroke="var(--border)" stroke-dasharray="3 3"/><text x="430" y="146" text-anchor="end" font-size="10" fill="var(--text-muted)">Par</text><text x="206" y="250" text-anchor="middle" font-size="9" fill="var(--text-muted)">coupon = yield</text><text x="120" y="92" font-size="10" fill="var(--ats-green)" font-weight="600">Premium</text><text x="330" y="212" font-size="10" fill="var(--ats-red)" font-weight="600">Discount</text><text x="248" y="262" text-anchor="middle" font-size="10" fill="var(--text-muted)">Yield to maturity →</text><text x="20" y="135" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 20 135)">Price →</text></svg>` } },
          { kind: "p", text: "That the curve bends — rather than running straight — is not a detail to gloss over. The convexity of this curve is the source of two later results: it means duration (a straight-line measure) is only an approximation, and it means the approximation errs in the investor's favour. Hold the shape of this curve in mind; the rest of the chapter is, in effect, the study of its slope and its curvature." },
        ],
      },
      {
        heading: "What 'yield' actually means",
        blocks: [
          { kind: "p", text: "'Yield' is one of the most overloaded words in finance, and precision matters. The current yield is merely the annual coupon divided by the current price — quick, but crude, because it ignores any capital gain or loss to maturity and the time value of money. The yield to maturity (YTM) is the real workhorse: it is the single discount rate that makes the present value of all the bond's cash flows equal its price. Equivalently, it is the bond's internal rate of return, assuming the investor holds to maturity and can reinvest every coupon at that same YTM." },
          { kind: "p", text: "Those two assumptions — hold to maturity, and reinvest at the YTM — are exactly why the YTM is a promise rather than a guarantee. Sell early and your realized return depends on the price you get; reinvest coupons at a lower rate than the YTM (reinvestment risk) and you fall short of it. For bonds the issuer can redeem early, the yield to call and the yield to worst (the lowest yield across all possible call dates) become the relevant figures, because a rational issuer will call the bond precisely when doing so benefits them and hurts the investor." },
          { kind: "table", table: { caption: "Table 1 — The ordering of yield measures reveals instantly whether a bond trades at a premium, par, or discount. Memorize the direction of the inequalities.", headers: ["Bond trades at", "Coupon vs current yield vs YTM"], rows: [["Discount (price < par)", "Coupon < Current yield < YTM"], ["Par (price = par)", "Coupon = Current yield = YTM"], ["Premium (price > par)", "Coupon > Current yield > YTM"]] } },
          { kind: "callout", label: "Yield to maturity", body: "YTM is the discount rate equating a bond's price with the present value of its cash flows — its IRR, assuming hold-to-maturity and coupon reinvestment at the YTM. For callable bonds, yield to worst is the conservative figure to quote." },
        ],
      },
      {
        heading: "Duration: the slope of the price-yield curve",
        blocks: [
          { kind: "p", text: "Duration answers the question every bond investor cares about: if yields move, how much will my price move? Intuitively, modified duration is the approximate percentage change in a bond's price for a one-percentage-point change in yield. A bond with a modified duration of 7 will lose roughly 7% if yields rise by one point and gain roughly 7% if they fall by one. Geometrically, duration is the slope of the price-yield curve at the bond's current yield — the straight tangent line that best approximates the curve nearby." },
          { kind: "figure", figure: { caption: "Figure 2 — Duration is the slope of the tangent line to the price-yield curve at the current yield. It gives a fast linear estimate of how price responds to small yield changes: steeper tangent (higher duration) means more interest-rate risk.", alt: "Price-yield curve with a straight tangent line touching it at one point, illustrating duration as slope", svg: `<svg viewBox="0 0 460 270" width="100%" style="max-width:460px"><line x1="62" y1="40" x2="62" y2="235" stroke="var(--border-strong)" stroke-width="1"/><line x1="62" y1="235" x2="435" y2="235" stroke="var(--border-strong)" stroke-width="1"/><path d="M82,58 C150,150 235,195 430,222" fill="none" stroke="var(--primary)" stroke-width="2.5"/><line x1="140" y1="135" x2="335" y2="222" stroke="var(--ats-amber)" stroke-width="2" stroke-dasharray="5 3"/><circle cx="232" cy="176" r="4.5" fill="var(--ats-amber)"/><text x="338" y="218" font-size="10" fill="var(--ats-amber)" font-weight="600">tangent</text><text x="232" y="166" text-anchor="middle" font-size="9" fill="var(--text-muted)">current yield</text><text x="248" y="262" text-anchor="middle" font-size="10" fill="var(--text-muted)">Yield to maturity →</text><text x="20" y="135" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 20 135)">Price →</text></svg>` } },
          { kind: "formula", formula: { label: "Estimating a price change with duration", expr: "%ΔPrice ≈ − Modified Duration × ΔYield", note: "The minus sign encodes the inverse relationship. ΔYield is the change in yield in decimal form (e.g. 0.005 for 50 bps)." } },
          { kind: "example", example: { title: "duration-based price change", prompt: "A bond has a modified duration of 7. Yields rise by 50 basis points (0.50%). Estimate the price change.", steps: ["Apply the formula: %ΔPrice ≈ − Duration × ΔYield.", "= − 7 × 0.0050.", "= − 0.035."], answer: "About −3.5%. (For a +1.00% move it would be roughly −7%, and for a −0.50% move, about +3.5%.)" } },
          { kind: "p", text: "Three structural relationships determine how large a bond's duration is, and they are heavily tested. Longer maturity raises duration, because more value sits far in the future where a change in the discount rate has the greatest cumulative effect. A lower coupon raises duration, because a larger share of the bond's value is concentrated in the distant principal repayment rather than in near-term coupons that return cash sooner. And a higher market yield reduces duration, because heavier discounting shrinks the relative weight of the far-off cash flows. The most interest-rate-sensitive bond, then, is a long-maturity, low-coupon bond in a low-yield environment — the exact profile that suffered most when rates rose in 2022." },
          { kind: "callout", label: "What drives duration", body: "Duration rises with longer maturity and lower coupons, and falls as yields rise. A zero-coupon bond has the highest duration for its maturity, equal to its maturity, because all of its value is the single distant principal payment." },
        ],
      },
      {
        heading: "Convexity: why the straight line isn't enough",
        blocks: [
          { kind: "p", text: "Duration draws a straight tangent, but the true price-yield relationship is curved, so the tangent only matches the curve exactly at a single point. For small yield changes the gap is negligible; for large moves it grows, and duration alone misstates the true price change. Convexity is the measure of that curvature, and it refines the estimate." },
          { kind: "figure", figure: { caption: "Figure 3 — Positive convexity. The actual price (curve) lies ABOVE the duration estimate (straight tangent) on both sides. So when yields fall, the real gain exceeds what duration predicts; when yields rise, the real loss is smaller than duration predicts. The curvature works in the bondholder's favour.", alt: "Price-yield curve lying above its tangent line on both sides, illustrating positive convexity", svg: `<svg viewBox="0 0 460 270" width="100%" style="max-width:460px"><line x1="62" y1="40" x2="62" y2="235" stroke="var(--border-strong)" stroke-width="1"/><line x1="62" y1="235" x2="435" y2="235" stroke="var(--border-strong)" stroke-width="1"/><line x1="120" y1="118" x2="360" y2="225" stroke="var(--ats-amber)" stroke-width="2" stroke-dasharray="5 3"/><path d="M82,58 C150,150 235,195 430,222" fill="none" stroke="var(--primary)" stroke-width="2.5"/><circle cx="232" cy="176" r="4.5" fill="var(--ats-amber)"/><text x="96" y="104" font-size="9" fill="var(--ats-green)">yield ↓: gain &gt; estimate</text><text x="300" y="244" font-size="9" fill="var(--ats-green)">yield ↑: loss &lt; estimate</text><text x="366" y="222" font-size="10" fill="var(--ats-amber)" font-weight="600">duration</text><text x="120" y="68" font-size="10" fill="var(--primary)" font-weight="600">actual price</text></svg>` } },
          { kind: "formula", formula: { label: "Duration + convexity estimate", expr: "%ΔPrice ≈ (−MD × ΔY) + (½ × Convexity × ΔY²)", note: "The convexity term is always positive for an option-free bond (it depends on ΔY²), so it adds to gains and offsets losses — a favourable asymmetry." } },
          { kind: "p", text: "Because the convexity term depends on the square of the yield change, it is always positive for an option-free bond and grows quickly for large moves. This is the precise sense in which positive convexity is 'good': between two bonds of equal duration, the more convex one gains more when rates fall and loses less when they rise, so investors will pay a slightly higher price (accept a slightly lower yield) for it. Bonds with embedded short options — callable bonds and mortgage-backed securities — can exhibit negative convexity over some yield ranges, which is exactly why they compensate investors with higher yields." },
        ],
      },
      {
        heading: "The yield curve and credit risk",
        blocks: [
          { kind: "p", text: "So far we have used a single yield, but in reality the required yield depends on maturity. Plotting yield against maturity for bonds of equal credit quality traces the yield curve (term structure). Its shape is one of the most watched signals in markets. An upward-sloping ('normal') curve, where longer maturities yield more, reflects investors demanding extra compensation to lend for longer. A flat curve signals transition. An inverted curve — short rates above long rates — has historically been one of the most reliable harbingers of recession, because it implies the market expects rates (and growth) to fall." },
          { kind: "figure", figure: { caption: "Figure 4 — The three canonical yield-curve shapes. Normal (upward) is the usual state; flat signals transition; inverted — short rates above long rates — has preceded most modern recessions.", alt: "Three lines on yield versus maturity axes: an upward normal curve, a flat curve, and a downward inverted curve", svg: `<svg viewBox="0 0 460 235" width="100%" style="max-width:460px"><line x1="55" y1="30" x2="55" y2="195" stroke="var(--border-strong)" stroke-width="1"/><line x1="55" y1="195" x2="430" y2="195" stroke="var(--border-strong)" stroke-width="1"/><polyline fill="none" stroke="var(--primary)" stroke-width="2.5" points="65,165 160,120 260,92 360,74 420,66"/><polyline fill="none" stroke="var(--text-muted)" stroke-width="2" points="65,120 420,114"/><polyline fill="none" stroke="var(--ats-red)" stroke-width="2.5" points="65,78 160,98 260,118 360,138 420,150"/><text x="426" y="62" text-anchor="end" font-size="10" fill="var(--primary)" font-weight="600">Normal</text><text x="426" y="108" text-anchor="end" font-size="10" fill="var(--text-muted)">Flat</text><text x="426" y="164" text-anchor="end" font-size="10" fill="var(--ats-red)" font-weight="600">Inverted</text><text x="242" y="221" text-anchor="middle" font-size="10" fill="var(--text-muted)">Maturity →</text><text x="20" y="112" text-anchor="middle" font-size="10" fill="var(--text-muted)" transform="rotate(-90 20 112)">Yield →</text></svg>` } },
          { kind: "p", text: "On top of interest-rate risk sits credit risk — the chance the issuer fails to pay in full and on time. Investors are compensated for it through the credit spread, the extra yield a bond offers above a risk-free benchmark of the same maturity. A corporate bond's total yield is, in effect, the risk-free rate plus this spread. Spreads widen when the market perceives more default risk or simply demands more compensation for bearing it (a flight to quality), and because price moves inversely to yield, widening spreads push a bond's price down even when risk-free government rates have not moved at all." },
          { kind: "formula", formula: { label: "Corporate yield decomposition", expr: "Corporate yield = Risk-free rate + Credit spread", note: "Spreads move independently of the risk-free rate and often lead credit-rating changes, so analysts watch them as a real-time gauge of perceived default risk." } },
        ],
      },
    ],
    keyTerms: [
      { term: "Par value", def: "The face amount repaid at maturity. A bond trades at a premium above par when its coupon exceeds the market yield, and at a discount below par when it trails it." },
      { term: "Yield to maturity (YTM)", def: "The single discount rate equating a bond's price with the PV of its cash flows — its IRR, assuming hold-to-maturity and coupon reinvestment at the YTM." },
      { term: "Yield to worst", def: "The lowest yield achievable across all call/redemption scenarios; the conservative figure for callable bonds." },
      { term: "Modified duration", def: "Approximate percentage price change for a 1% change in yield; geometrically, the slope of the price-yield curve. Rises with longer maturity and lower coupons; falls as yields rise." },
      { term: "Convexity", def: "The curvature of the price-yield curve. Positive convexity makes the duration estimate err in the bondholder's favour — bigger gains, smaller losses than the straight line predicts." },
      { term: "Yield curve (term structure)", def: "Yield plotted against maturity for equal credit quality. Normal = upward; inverted (short > long) has historically signalled recession." },
      { term: "Credit spread", def: "Extra yield over a risk-free benchmark compensating for default risk; widening spreads lower prices independently of risk-free rates." },
    ],
    takeaways: [
      "A bond's price is the present value of its cash flows; price = par exactly when the market yield equals the coupon rate.",
      "Price and yield move inversely along a convex curve — premium bonds carry above-market coupons, discount bonds below.",
      "Discount bonds: coupon < current yield < YTM; premium bonds reverse the inequalities. YTM assumes hold-to-maturity and reinvestment at the YTM.",
      "Modified duration is the curve's slope: %ΔPrice ≈ −Duration × ΔYield. Duration rises with longer maturity and lower coupons, and falls as yields rise.",
      "Positive convexity adds the ½ × Convexity × ΔY² term — gains exceed and losses fall short of the duration estimate, a favourable asymmetry.",
      "Total corporate yield = risk-free rate + credit spread; widening spreads cut prices even when government rates are unchanged, and an inverted yield curve has historically warned of recession.",
    ],
  },
];

const questions: Question[] = [
  // ============================================================
  // ETHICS & PROFESSIONAL STANDARDS
  // Application scenarios — the Standards are tested by judgment,
  // not recitation. Distractors are the plausible wrong instinct.
  // ============================================================
  {
    id: "cfa-eth-q1", examSlug: "cfa", topicId: "ethics", topicName: "Ethics", difficulty: 3,
    stem: "An analyst attends a private dinner where a company's CFO mentions, in passing, that quarterly earnings will materially miss consensus. The information has not been released. The analyst's firm holds a large position. The analyst should most appropriately:",
    choices: ["Decline to act or trade on the information and notify firm compliance promptly", "Recommend the firm sell the position before the announcement becomes public", "Publish a research note so all clients receive the information simultaneously"],
    answerIndex: 0,
    explanation: "The earnings shortfall is both material and nonpublic, so the Standard on material nonpublic information prohibits acting or causing others to act on it, regardless of how innocently it was obtained. Selling ahead of the release is precisely the prohibited trading. Publishing it does not cure the problem either — disseminating information the analyst was not authorized to release compounds the breach rather than resolving it. Notifying compliance and refraining is the required response.",
  },
  {
    id: "cfa-eth-q2", examSlug: "cfa", topicId: "ethics", topicName: "Ethics", difficulty: 3,
    stem: "A portfolio manager allocates a heavily oversubscribed IPO first to accounts that generate the highest fees, then distributes any remainder to smaller accounts with the same mandate. This practice most likely violates the Standard concerning:",
    choices: ["Loyalty, prudence, and care, because the manager exercised poor judgment", "Fair dealing, because clients with the same mandate were treated unequally", "Suitability, because the IPO was unsuitable for the smaller client accounts"],
    answerIndex: 1,
    explanation: "Fair Dealing requires that members deal fairly and objectively with all clients when taking investment action, which includes allocating limited opportunities such as oversubscribed IPOs on a pro-rata or otherwise systematic basis. Fee level is not a permissible basis for priority. Loyalty, prudence, and care addresses the duty owed in managing assets generally, and suitability concerns whether an investment fits a client's objectives — neither captures the unequal treatment at issue here.",
  },
  {
    id: "cfa-eth-q3", examSlug: "cfa", topicId: "ethics", topicName: "Ethics", difficulty: 3,
    stem: "An analyst uses a detailed forecast model built by a former colleague at a prior employer, reproducing its structure and assumptions in a new report without attribution. This most likely violates the Standard on:",
    choices: ["Misconduct, because copying a model reflects dishonesty in professional life", "Record retention, because supporting documentation was not maintained", "Misrepresentation, which prohibits presenting others' work as one's own"],
    answerIndex: 2,
    explanation: "Misrepresentation expressly prohibits plagiarism, meaning the use of substantially similar analysis, models, or language without acknowledging the source. Misconduct addresses dishonesty, fraud, or deceit reflecting adversely on professional fitness more broadly, and record retention concerns keeping documentation supporting analysis. The specific act of presenting another's model as original work is plagiarism under misrepresentation.",
  },
  {
    id: "cfa-eth-q4", examSlug: "cfa", topicId: "ethics", topicName: "Ethics", difficulty: 3,
    stem: "A member is offered a paid consulting role advising a private company on capital structure. The member discloses the arrangement to clients but not to the employer. This treatment is most likely:",
    choices: ["A violation, because additional compensation arrangements require employer consent", "Acceptable, because client disclosure satisfies the member's obligations", "Acceptable, because outside consulting falls outside the employment relationship"],
    answerIndex: 0,
    explanation: "The Standard on additional compensation arrangements requires written consent from the employer before accepting compensation that competes with or creates a conflict with the employer's interest. Disclosure to clients addresses a different Standard on conflicts and does not substitute for employer consent. The arrangement's outside nature is precisely why consent is required, not a reason it is excused.",
  },
  {
    id: "cfa-eth-q5", examSlug: "cfa", topicId: "ethics", topicName: "Ethics", difficulty: 3,
    stem: "A firm claims compliance with GIPS standards. Which statement about that claim is most accurate?",
    choices: ["Compliance is mandatory for any firm managing institutional assets", "Compliance is voluntary and must be applied on a firm-wide basis", "Compliance may be claimed for selected composites the firm chooses"],
    answerIndex: 1,
    explanation: "The Global Investment Performance Standards are voluntary, but a firm electing to claim compliance must apply them on a firm-wide basis rather than cherry-picking favorable composites — that firm-wide requirement is what makes the claim meaningful to prospective clients. There is no regulatory mandate compelling adoption based on client type, and partial or composite-level claims are expressly prohibited.",
  },
  {
    id: "cfa-eth-q6", examSlug: "cfa", topicId: "ethics", topicName: "Ethics", difficulty: 3,
    stem: "An analyst covering a company accepts an all-expenses-paid trip from that company to tour a remote production facility, where no commercial flights operate. The most appropriate action is to:",
    choices: ["Decline the trip entirely, since accepting any issuer-paid travel creates bias", "Accept the travel without disclosure, since the tour serves a legitimate research purpose", "Accept the travel but disclose it, as reasonable when no practical alternative exists"],
    answerIndex: 2,
    explanation: "The Standard on independence and objectivity permits accepting modest arrangements where a genuine practical necessity exists, such as a remote site reachable only by company transport, provided the arrangement is disclosed so users can judge for themselves. A blanket refusal is stricter than the Standard requires. Accepting without disclosure fails the transparency the Standard is built around, since undisclosed issuer-funded benefits are exactly what erodes perceived independence.",
  },
  {
    id: "cfa-eth-q7", examSlug: "cfa", topicId: "ethics", topicName: "Ethics", difficulty: 3,
    stem: "A supervisor learns that a subordinate has been placing personal trades ahead of client orders. The supervisor reprimands the subordinate verbally but takes no further action. The supervisor has most likely:",
    choices: ["Violated responsibilities of supervisors by failing to act adequately on known misconduct", "Satisfied the duty, because the violation was addressed with the individual", "Violated the priority of transactions Standard through personal trading activity"],
    answerIndex: 0,
    explanation: "Responsibilities of Supervisors requires those with supervisory authority to take steps reasonably designed to detect and prevent violations, which upon discovering misconduct means initiating an investigation, escalating, and increasing supervision — not an informal reprimand. The subordinate breached priority of transactions, but that Standard describes the subordinate's conduct rather than the supervisor's separate failure.",
  },
  {
    id: "cfa-eth-q8", examSlug: "cfa", topicId: "ethics", topicName: "Ethics", difficulty: 3,
    stem: "A member's employer has no formal policy on personal trading. The member believes this creates compliance risk. The member's most appropriate first step is to:",
    choices: ["Resign from the position to avoid association with an inadequate compliance culture", "Bring the deficiency to the employer's attention and seek adoption of a policy", "Apply personal judgment case by case, since no written policy currently binds conduct"],
    answerIndex: 1,
    explanation: "When an employer lacks adequate policies, the member should attempt to have the deficiency remedied by bringing it to the employer's attention, since members are expected to promote compliance rather than exploit or ignore gaps. Resignation is a last resort reserved for situations where participation would require a violation. Relying on ad hoc judgment misses that the Code and Standards bind the member regardless of what the employer has written down.",
  },

  // ============================================================
  // QUANTITATIVE METHODS
  // ============================================================
  {
    id: "cfa-quant-q1", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "An investor deposits $8,000 today into an account paying 6% compounded quarterly. The value after three years is closest to:",
    choices: ["$9,528, applying annual compounding over three periods", "$9,440, applying simple interest over the three-year term", "$9,565, applying quarterly compounding over twelve periods"],
    answerIndex: 2,
    explanation: "Quarterly compounding divides the stated rate by four and multiplies periods by four: 8,000 × (1 + 0.06/4)^12 = 8,000 × (1.015)^12 ≈ 8,000 × 1.19562 ≈ $9,565. Compounding annually gives 8,000 × (1.06)³ ≈ $9,528, understating the result because interest compounds less frequently. Simple interest of 8,000 × (1 + 0.18) = $9,440 ignores compounding entirely, and the gap between these three figures is exactly what the compounding frequency controls.",
  },
  {
    id: "cfa-quant-q2", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "A project requires $50,000 today and returns $20,000 annually for three years. At a 10% required return, the NPV is closest to:",
    choices: ["Negative $263, indicating the project destroys value at this discount rate", "Positive $10,000, the undiscounted sum of cash flows less the initial outlay", "Positive $263, treating the outlay as recovered rather than as an expense"],
    answerIndex: 0,
    explanation: "Discounting each inflow gives 20,000 × 0.9091 + 20,000 × 0.8264 + 20,000 × 0.7513 ≈ 49,737, and subtracting the 50,000 outlay leaves approximately negative $263, so the project should be rejected. Summing the $60,000 of inflows without discounting ignores the time value of money and produces a misleading $10,000 surplus. Reversing the sign of the final subtraction is the other frequent slip, turning a marginal rejection into a false acceptance.",
  },
  {
    id: "cfa-quant-q3", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "A portfolio returns 12%, negative 5%, and 8% over three years. Its geometric mean return is closest to:",
    choices: ["5.00%, the arithmetic average of the three annual returns", "4.74%, the compound annual rate that reproduces the ending wealth", "8.00%, the median of the three observed annual returns"],
    answerIndex: 1,
    explanation: "The geometric mean is the compound rate linking beginning and ending wealth: [(1.12)(0.95)(1.08)]^(1/3) − 1 = (1.14912)^(1/3) − 1 ≈ 4.74%. The arithmetic mean of 5.00% always exceeds the geometric mean whenever returns vary, because losses require larger subsequent gains to recover. Taking a median discards the compounding relationship the measure is designed to capture.",
  },
  {
    id: "cfa-quant-q4", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "A researcher sets a significance level of 5% and rejects the null hypothesis. The probability of a Type I error in this test is:",
    choices: ["95%, equal to one minus the chosen significance level", "Dependent on the power, which equals one minus beta", "5%, equal to the chosen significance level of the test"],
    answerIndex: 2,
    explanation: "A Type I error rejects a null hypothesis that is actually true, a false positive, and its probability is exactly the significance level alpha the researcher selects — here 5%. One minus alpha is the confidence level, not an error rate. Power equals one minus the Type II error rate beta and describes the ability to detect a false null, which is a separate quantity governing a different error.",
  },
  {
    id: "cfa-quant-q5", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "An analyst compares two mutually exclusive projects and finds that NPV and IRR rank them differently. The analyst should most appropriately:",
    choices: ["Select the project with the higher NPV, given its reinvestment assumption", "Select the project with the higher IRR, since it reflects the realized return", "Recalculate both measures, since a conflict indicates a computational error"],
    answerIndex: 0,
    explanation: "When NPV and IRR conflict for mutually exclusive projects, NPV governs because it assumes reinvestment at the required rate of return, which is economically realistic, while IRR assumes reinvestment at the IRR itself, often an unattainable rate. Conflicts arise legitimately from differences in project scale or cash flow timing, so they signal a genuine ranking issue rather than an arithmetic mistake.",
  },

  // ============================================================
  // ECONOMICS
  // ============================================================
  {
    id: "cfa-econ-q1", examSlug: "cfa", topicId: "econ", topicName: "Economics", difficulty: 3,
    stem: "A good's price rises 10% and quantity demanded falls 4%. The demand for this good is best described as:",
    choices: ["Elastic, since consumers respond substantially to the price change", "Inelastic, since quantity responds proportionally less than price", "Unit elastic, since the response is proportional to the price change"],
    answerIndex: 1,
    explanation: "Price elasticity of demand is the percentage change in quantity divided by the percentage change in price: 4% divided by 10% gives 0.4 in absolute value, which is below one and therefore inelastic. Elastic demand requires an elasticity above one, meaning quantity responds proportionally more than price. Unit elasticity requires exactly one, where the two percentage changes match.",
  },
  {
    id: "cfa-econ-q2", examSlug: "cfa", topicId: "econ", topicName: "Economics", difficulty: 3,
    stem: "A central bank sells government securities in the open market while the government simultaneously increases spending. These actions represent:",
    choices: ["Expansionary monetary policy alongside contractionary fiscal policy", "Two contractionary policies that will compound their economic effect", "Contractionary monetary policy alongside expansionary fiscal policy"],
    answerIndex: 2,
    explanation: "Selling securities drains reserves from the banking system and pushes rates up, making it contractionary monetary policy conducted by the central bank. Increased government spending injects demand and is expansionary fiscal policy set by the fiscal authority. The two therefore work in opposition rather than compounding, which is the coordination problem the question is built around.",
  },
  {
    id: "cfa-econ-q3", examSlug: "cfa", topicId: "econ", topicName: "Economics", difficulty: 3,
    stem: "Country A has a one-year interest rate of 5% while Country B's is 2%. Under covered interest rate parity, Country A's currency should trade at a:",
    choices: ["Forward discount, offsetting the higher interest rate available domestically", "Forward premium, compensating investors for the lower domestic rate", "Forward rate equal to spot, since arbitrage eliminates any differential"],
    answerIndex: 0,
    explanation: "Covered interest rate parity requires that the forward rate offset the interest differential, so the currency of the higher-rate country trades at a forward discount — otherwise an arbitrageur could borrow in the low-rate currency, invest in the high-rate one, and hedge for a riskless profit. Assigning a premium to the higher-rate currency reverses the relationship. Equality of forward and spot would hold only if rates were identical.",
  },
  {
    id: "cfa-econ-q4", examSlug: "cfa", topicId: "econ", topicName: "Economics", difficulty: 3,
    stem: "A market has many firms selling slightly differentiated products, with low barriers to entry and some pricing power in the short run. This structure is best described as:",
    choices: ["Perfect competition, given the large number of participating firms", "Monopolistic competition, given differentiation with easy market entry", "Oligopoly, given that firms retain meaningful pricing discretion"],
    answerIndex: 1,
    explanation: "Monopolistic competition combines many firms and easy entry with product differentiation, which grants limited short-run pricing power that erodes as entrants imitate the differentiation. Perfect competition requires identical products and complete price-taking behavior. Oligopoly features few firms whose strategic interdependence drives pricing, which the described low barriers and large firm count rule out.",
  },
  {
    id: "cfa-econ-q5", examSlug: "cfa", topicId: "econ", topicName: "Economics", difficulty: 3,
    stem: "Under the expenditure approach, gross domestic product is measured as:",
    choices: ["Wages plus rent plus interest plus corporate profits before taxation", "The market value of intermediate and final goods produced domestically", "Consumption plus investment plus government spending plus net exports"],
    answerIndex: 2,
    explanation: "The expenditure approach sums the categories of final spending: consumption, investment, government purchases, and net exports. Summing factor payments such as wages, rent, interest, and profits describes the income approach, which arrives at the same total from the other direction. Including intermediate goods would double-count, since their value is already embedded in the final goods they become.",
  },

  // ============================================================
  // FINANCIAL STATEMENT ANALYSIS
  // ============================================================
  {
    id: "cfa-fra-q1", examSlug: "cfa", topicId: "fra", topicName: "Financial Statement Analysis", difficulty: 3,
    stem: "In a period of rising prices, a company using LIFO rather than FIFO will most likely report:",
    choices: ["Higher cost of goods sold, lower net income, and lower ending inventory", "Lower cost of goods sold, higher net income, and higher ending inventory", "Higher cost of goods sold, lower net income, and higher ending inventory"],
    answerIndex: 0,
    explanation: "LIFO charges the most recently purchased and therefore most expensive units to cost of goods sold when prices rise, which raises COGS, compresses net income, and leaves the older, cheaper costs sitting in ending inventory. FIFO produces the mirror image. The combination of higher COGS with higher ending inventory is internally inconsistent, because the same cost pool cannot be simultaneously expensed and retained.",
  },
  {
    id: "cfa-fra-q2", examSlug: "cfa", topicId: "fra", topicName: "Financial Statement Analysis", difficulty: 3,
    stem: "A company has net profit margin of 5%, asset turnover of 2.0, and financial leverage of 1.5. Its return on equity using DuPont decomposition is:",
    choices: ["8.5%, the sum of margin and turnover adjusted for leverage", "15.0%, the product of the three component ratios", "10.0%, the product of margin and turnover before leverage"],
    answerIndex: 1,
    explanation: "The three-part DuPont identity multiplies net profit margin by asset turnover by financial leverage: 0.05 × 2.0 × 1.5 = 0.15, or 15%. Multiplying only margin and turnover yields return on assets of 10%, stopping one step short of ROE. Summing the components has no economic meaning, since the decomposition is multiplicative by construction.",
  },
  {
    id: "cfa-fra-q3", examSlug: "cfa", topicId: "fra", topicName: "Financial Statement Analysis", difficulty: 3,
    stem: "A firm capitalizes a cost that a competitor expenses immediately. In the year of the expenditure, the capitalizing firm will most likely report:",
    choices: ["Higher net income and lower cash flow from operations than the competitor", "Lower net income and identical cash flow from operations to the competitor", "Higher net income and higher cash flow from operations than the competitor"],
    answerIndex: 2,
    explanation: "Capitalizing defers the cost to the balance sheet and spreads it through depreciation, so current-period expense is lower and net income higher than under immediate expensing. The classification also moves the outflow from operating to investing activities, which raises reported cash flow from operations even though total cash is unchanged. Total cash flow is identical across both treatments; only its classification and the earnings pattern differ.",
  },
  {
    id: "cfa-fra-q4", examSlug: "cfa", topicId: "fra", topicName: "Financial Statement Analysis", difficulty: 3,
    stem: "Under the indirect method, an increase in accounts receivable during the period is treated as:",
    choices: ["A subtraction from net income, since revenue was recorded without cash collected", "An addition to net income, since receivables represent earned revenue", "An investing outflow, since receivables represent a claim on future resources"],
    answerIndex: 0,
    explanation: "The indirect method starts from net income and removes non-cash effects, so growth in receivables must be subtracted because revenue was recognized without a corresponding cash inflow. Adding the increase would double-count income already embedded in net income. Receivables arise from ordinary trading activity and belong in the operating section rather than investing.",
  },
  {
    id: "cfa-fra-q5", examSlug: "cfa", topicId: "fra", topicName: "Financial Statement Analysis", difficulty: 3,
    stem: "A company's quick ratio is materially lower than its current ratio. The most likely explanation is that the company:",
    choices: ["Carries an unusually high balance of short-term marketable securities", "Holds a large proportion of its current assets as inventory", "Has significant long-term debt maturing beyond the coming year"],
    answerIndex: 1,
    explanation: "The quick ratio excludes inventory from current assets precisely because inventory is the least liquid current item, so a wide gap between the two ratios points to inventory-heavy holdings. Marketable securities are included in both ratios and would not create divergence. Long-term debt maturing beyond one year is excluded from current liabilities altogether and therefore affects neither ratio.",
  },
  {
    id: "cfa-fra-q6", examSlug: "cfa", topicId: "fra", topicName: "Financial Statement Analysis", difficulty: 3,
    stem: "Diluted earnings per share differs from basic earnings per share because diluted EPS:",
    choices: ["Excludes discontinued operations from the numerator of the calculation", "Uses ending shares outstanding rather than a weighted average figure", "Assumes conversion of dilutive securities into additional common shares"],
    answerIndex: 2,
    explanation: "Diluted EPS reflects the reduction in per-share earnings that would occur if convertible bonds, convertible preferred, options, and warrants were exercised or converted, capturing potential claims on earnings. Discontinued operations are presented separately in both measures. Both calculations use weighted average shares, adjusted in the diluted case for the assumed conversions.",
  },
  {
    id: "cfa-fra-q7", examSlug: "cfa", topicId: "fra", topicName: "Financial Statement Analysis", difficulty: 3,
    stem: "A deferred tax liability most commonly arises when a company:",
    choices: ["Uses accelerated depreciation for tax purposes and straight-line for reporting", "Recognizes a permanent difference between taxable and reported income", "Carries forward an operating loss to offset income in future periods"],
    answerIndex: 0,
    explanation: "Claiming larger depreciation deductions on the tax return than in the financial statements defers tax into later periods, creating a temporary difference that reverses over the asset's life and is recorded as a deferred tax liability. Permanent differences never reverse and therefore generate no deferred tax item. A loss carryforward reduces future taxes and gives rise to a deferred tax asset instead.",
  },

  // ============================================================
  // CORPORATE ISSUERS
  // ============================================================
  {
    id: "cfa-corp-q1", examSlug: "cfa", topicId: "corp", topicName: "Corporate Issuers", difficulty: 3,
    stem: "A firm finances with 40% debt at a 6% pretax cost and 60% equity at a 12% cost, facing a 25% tax rate. Its weighted average cost of capital is closest to:",
    choices: ["9.60%, weighting the pretax debt cost against the equity cost", "9.00%, applying the tax shield to the debt component only", "8.40%, applying the tax shield to both financing components"],
    answerIndex: 1,
    explanation: "Debt enters WACC on an after-tax basis because interest is deductible: 0.40 × 6% × (1 − 0.25) + 0.60 × 12% = 1.8% + 7.2% = 9.0%. Using the pretax debt cost overstates WACC by ignoring the tax shield entirely. Applying a tax adjustment to equity is incorrect, since dividends and retained earnings generate no deduction for the firm.",
  },
  {
    id: "cfa-corp-q2", examSlug: "cfa", topicId: "corp", topicName: "Corporate Issuers", difficulty: 3,
    stem: "When evaluating a capital project, a firm should most appropriately treat a $200,000 feasibility study already completed as:",
    choices: ["An initial outlay that is included in the project's year-zero investment", "An opportunity cost that is allocated across the project's useful life", "A sunk cost that is excluded from the incremental cash flow analysis"],
    answerIndex: 2,
    explanation: "The study has already been paid for and cannot be recovered regardless of whether the project proceeds, making it a sunk cost that is irrelevant to a forward-looking decision. Including it in the initial outlay would bias the analysis against a project that may still be economically sound. Opportunity cost captures forgone alternatives such as using land the firm already owns, which is a different concept entirely.",
  },
  {
    id: "cfa-corp-q3", examSlug: "cfa", topicId: "corp", topicName: "Corporate Issuers", difficulty: 3,
    stem: "A firm with high operating leverage will most likely experience:",
    choices: ["Greater variability in operating income as sales revenue fluctuates", "Reduced sensitivity of operating income to changes in unit sales volume", "Higher fixed financing costs relative to its total interest obligations"],
    answerIndex: 0,
    explanation: "Operating leverage measures the proportion of fixed operating costs in the cost structure, so a high-leverage firm sees operating income swing more sharply than sales in either direction. That amplification is the defining characteristic rather than a dampening effect. Fixed financing costs describe financial leverage, which magnifies net income relative to operating income and is a separate source of risk.",
  },
  {
    id: "cfa-corp-q4", examSlug: "cfa", topicId: "corp", topicName: "Corporate Issuers", difficulty: 3,
    stem: "Under Modigliani-Miller with corporate taxes but no bankruptcy costs, increasing financial leverage will most likely:",
    choices: ["Leave firm value unchanged, since capital structure is irrelevant", "Increase firm value through the tax deductibility of interest payments", "Decrease firm value as the required return on equity rises with risk"],
    answerIndex: 1,
    explanation: "Once corporate taxes enter the model, interest deductibility creates a tax shield that adds value as leverage rises, which is why the with-taxes proposition implies a theoretical optimum at maximum debt. Capital structure irrelevance holds only in the no-tax version of the propositions. The cost of equity does rise with leverage, but under these assumptions that increase exactly offsets the cheaper debt before the tax shield is considered.",
  },

  // ============================================================
  // EQUITY INVESTMENTS
  // ============================================================
  {
    id: "cfa-eq-q1", examSlug: "cfa", topicId: "equity", topicName: "Equity Investments", difficulty: 3,
    stem: "A stock is expected to pay a $2.40 dividend next year, growing at 4% indefinitely, with a required return of 10%. Its intrinsic value using the constant growth model is:",
    choices: ["$60.00, dividing the expected dividend by the growth rate alone", "$24.00, dividing the expected dividend by the required return alone", "$40.00, dividing the dividend by the spread between return and growth"],
    answerIndex: 2,
    explanation: "The constant growth model divides next year's dividend by the difference between the required return and the growth rate: 2.40 ÷ (0.10 − 0.04) = 2.40 ÷ 0.06 = $40.00. Dividing by the required return alone omits the growth adjustment and understates value. The model is acutely sensitive to that spread, which is why it suits only stable, mature firms whose growth is plausibly below the required return.",
  },
  {
    id: "cfa-eq-q2", examSlug: "cfa", topicId: "equity", topicName: "Equity Investments", difficulty: 3,
    stem: "Under the semi-strong form of market efficiency, which analysis is least likely to generate consistent abnormal returns?",
    choices: ["Fundamental analysis using publicly available financial statements", "Trading on material information not yet disclosed to the public", "Analysis combining private research with proprietary industry data"],
    answerIndex: 0,
    explanation: "Semi-strong efficiency holds that all publicly available information is already reflected in prices, so fundamental analysis of published financials cannot systematically produce abnormal returns. Nonpublic information retains value under this form, since only the strong form assumes private information is impounded in price. Genuinely proprietary research likewise falls outside what the semi-strong form claims is already priced.",
  },
  {
    id: "cfa-eq-q3", examSlug: "cfa", topicId: "equity", topicName: "Equity Investments", difficulty: 3,
    stem: "A company's justified price-to-earnings ratio will most likely increase if:",
    choices: ["The required rate of return on the company's equity rises", "The expected growth rate of the company's earnings rises", "The company's dividend payout ratio falls with growth unchanged"],
    answerIndex: 1,
    explanation: "The justified P/E equals the payout ratio divided by the difference between required return and growth, so a higher growth rate narrows the denominator and raises the multiple. A higher required return widens that denominator and compresses the multiple. Reducing the payout ratio lowers the numerator, so with growth held constant the multiple falls rather than rises.",
  },
  {
    id: "cfa-eq-q4", examSlug: "cfa", topicId: "equity", topicName: "Equity Investments", difficulty: 3,
    stem: "Porter's five forces framework is used primarily to assess:",
    choices: ["The intrinsic value of a company's equity relative to peers", "The macroeconomic conditions influencing aggregate market returns", "The competitive intensity and profit potential of an industry"],
    answerIndex: 2,
    explanation: "The framework examines rivalry, new entrants, substitutes, and the bargaining power of buyers and suppliers to gauge how much profit an industry can sustain over time. It is a structural tool applied at the industry level rather than a valuation model producing a per-share figure, and it addresses competitive dynamics rather than macroeconomic aggregates.",
  },
  {
    id: "cfa-eq-q5", examSlug: "cfa", topicId: "equity", topicName: "Equity Investments", difficulty: 3,
    stem: "An investor buys 200 shares on margin at $60 with an initial margin requirement of 50%. If the stock falls to $45, the investor's account equity is closest to:",
    choices: ["$3,000, representing market value less the outstanding loan balance", "$3,000, representing the original cash deposit unchanged", "$6,000, representing the current market value of the position"],
    answerIndex: 0,
    explanation: "The position costs $12,000, of which the investor deposits $6,000 and borrows $6,000. After the decline the shares are worth 200 × $45 = $9,000, and subtracting the unchanged $6,000 loan leaves $3,000 of equity — the investor absorbs the entire $3,000 loss. Market value alone ignores the borrowing, and treating equity as the untouched original deposit misses that leverage transmits losses directly to the equity holder.",
  },
  {
    id: "cfa-eq-q6", examSlug: "cfa", topicId: "equity", topicName: "Equity Investments", difficulty: 3,
    stem: "Compared with a price-weighted index, a market-capitalization-weighted index will most likely:",
    choices: ["Give greater influence to companies trading at higher share prices", "Give greater influence to companies with larger total market values", "Give equal influence to every constituent regardless of size or price"],
    answerIndex: 1,
    explanation: "Capitalization weighting assigns influence in proportion to total market value, so large companies dominate the index's movement regardless of their per-share price. Price weighting is what elevates high-priced shares, which is why a stock split changes a price-weighted index's composition effect. Equal influence describes an equal-weighted index, a third construction method requiring periodic rebalancing.",
  },

  // ============================================================
  // FIXED INCOME
  // ============================================================
  {
    id: "cfa-fi-q1", examSlug: "cfa", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "A bond with a modified duration of 7.2 is held when yields rise by 50 basis points. Ignoring convexity, the bond's price will most likely change by approximately:",
    choices: ["Negative 7.2%, the duration figure applied directly as a percentage", "Positive 3.6%, since rising yields increase the bond's coupon value", "Negative 3.6%, the product of duration and the yield change"],
    answerIndex: 2,
    explanation: "The approximate percentage price change equals negative modified duration multiplied by the yield change: −7.2 × 0.50% = −3.6%. Applying the duration figure directly assumes a full percentage point move rather than the 50 basis points given. Prices move inversely to yields, so a rate increase cannot raise the price — the coupon is fixed and does not respond to market yields.",
  },
  {
    id: "cfa-fi-q2", examSlug: "cfa", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "Positive convexity implies that for a given change in yield, a bond's:",
    choices: ["Price rises more when yields fall than it falls when yields rise", "Price change is symmetric whether yields rise or fall equally", "Duration remains constant across the entire range of possible yields"],
    answerIndex: 0,
    explanation: "Positive convexity means the price-yield curve bends away from the origin, so gains from falling yields exceed losses from an equal rise — a favorable asymmetry investors will pay for. Symmetric response would describe a straight line, which is precisely what duration alone assumes and convexity corrects. Duration itself changes as yields move, which is why the convexity adjustment exists.",
  },
  {
    id: "cfa-fi-q3", examSlug: "cfa", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "A callable bond's price appreciation is limited as interest rates fall because:",
    choices: ["The bond's coupon payments decline automatically with market rates", "The issuer will likely redeem the bond, capping its upside potential", "Investors demand a lower yield premium as the call date approaches"],
    answerIndex: 1,
    explanation: "Falling rates make refinancing attractive, so the issuer is increasingly likely to call the bond near the call price, which truncates price appreciation and produces negative convexity in that region. The coupon on a fixed-rate callable bond does not adjust with market rates. Investors demand a higher yield to accept call risk, not a lower one, precisely because the option belongs to the issuer.",
  },
  {
    id: "cfa-fi-q4", examSlug: "cfa", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "A bond trades at a premium to par. The relationship among its yield measures is best described as:",
    choices: ["Current yield exceeds nominal yield, which exceeds yield to maturity", "Yield to maturity exceeds current yield, which exceeds nominal yield", "Nominal yield exceeds current yield, which exceeds yield to maturity"],
    answerIndex: 2,
    explanation: "For a premium bond the ordering runs nominal, then current, then yield to maturity in descending sequence, because the investor paid above par and will absorb that premium as a loss by maturity, dragging total return below the coupon rate. The ascending ordering applies to a discount bond, where the pull toward par adds to return. Reversing current and nominal misstates the effect of dividing a fixed coupon by a price above par.",
  },
  {
    id: "cfa-fi-q5", examSlug: "cfa", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "An investor holding a zero-coupon bond to maturity faces the least exposure to which risk?",
    choices: ["Reinvestment risk arising from the redeployment of interim cash flows", "Interest rate risk affecting the bond's market price before maturity", "Inflation risk eroding the purchasing power of the maturity payment"],
    answerIndex: 0,
    explanation: "A zero-coupon bond makes no interim payments, so there is nothing to reinvest and reinvestment risk is eliminated for an investor holding to maturity. Interest rate risk remains and is in fact greatest for zeros, whose duration equals their full maturity. Inflation risk is likewise severe, since a single distant nominal payment is maximally exposed to erosion in purchasing power.",
  },
  {
    id: "cfa-fi-q6", examSlug: "cfa", topicId: "fixed", topicName: "Fixed Income", difficulty: 3,
    stem: "The one-year spot rate is 3% and the two-year spot rate is 4%. The implied one-year forward rate one year from now is closest to:",
    choices: ["3.50%, the arithmetic average of the two observed spot rates", "5.01%, the rate reconciling the one-year and two-year spot rates", "4.00%, equal to the prevailing two-year spot rate observed today"],
    answerIndex: 1,
    explanation: "No-arbitrage requires (1.03)(1 + f) = (1.04)² = 1.0816, so 1 + f = 1.0816 ÷ 1.03 ≈ 1.0501 and f ≈ 5.01%. Averaging the spot rates ignores compounding and understates the forward rate whenever the curve slopes upward. The forward rate must exceed both spot rates on an upward-sloping curve, since it represents the marginal rate for the later period.",
  },

  // ============================================================
  // DERIVATIVES
  // ============================================================
  {
    id: "cfa-deriv-q1", examSlug: "cfa", topicId: "deriv", topicName: "Derivatives", difficulty: 3,
    stem: "Put-call parity for European options on a non-dividend-paying stock is expressed as:",
    choices: ["Call plus underlying price equals put plus present value of exercise price", "Call minus put equals the present value of the exercise price less underlying", "Call plus present value of exercise price equals put plus underlying price"],
    answerIndex: 2,
    explanation: "Put-call parity states that a fiduciary call, consisting of a long call plus a risk-free bond maturing at the exercise price, has the same payoff as a protective put, consisting of a long put plus the underlying asset. Pairing the call with the underlying instead double-counts upside exposure. The final formulation reverses the sign relationship and would permit riskless arbitrage if it held.",
  },
  {
    id: "cfa-deriv-q2", examSlug: "cfa", topicId: "deriv", topicName: "Derivatives", difficulty: 3,
    stem: "An increase in the volatility of the underlying asset will most likely:",
    choices: ["Increase the value of both call options and put options simultaneously", "Increase the value of call options and decrease the value of puts", "Decrease the value of both call options and put options simultaneously"],
    answerIndex: 0,
    explanation: "Greater volatility widens the distribution of possible outcomes while the holder's loss stays capped at the premium, so the expanded upside raises the value of both calls and puts. That asymmetry between unlimited favorable outcomes and a fixed maximum loss is why volatility benefits option buyers on either side. Options are wasting assets with respect to time, but with respect to volatility their value moves in the same direction for both types.",
  },
  {
    id: "cfa-deriv-q3", examSlug: "cfa", topicId: "deriv", topicName: "Derivatives", difficulty: 3,
    stem: "The primary economic difference between a forward contract and a futures contract is that futures:",
    choices: ["Carry no counterparty credit risk because settlement is deferred", "Are marked to market daily and traded on organized exchanges", "Cannot be customized but eliminate the need for margin deposits"],
    answerIndex: 1,
    explanation: "Futures are exchange-traded, standardized, and settled daily through a clearinghouse, which converts a single large exposure at expiration into a series of small daily cash flows and sharply reduces credit risk. Credit risk is reduced rather than eliminated, since the clearinghouse itself remains a counterparty. Futures require margin precisely because of daily settlement, so standardization does not remove that obligation.",
  },

  // ============================================================
  // ALTERNATIVE INVESTMENTS
  // ============================================================
  {
    id: "cfa-alt-q1", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "A hedge fund charges a 2% management fee and 20% incentive fee with a high-water mark. The high-water mark provision ensures that the manager:",
    choices: ["Receives a guaranteed minimum fee regardless of the fund's performance", "Charges incentive fees on gross returns before management fees apply", "Earns incentive fees only on gains exceeding the prior peak value"],
    answerIndex: 2,
    explanation: "A high-water mark records the highest value the fund has previously reached, so after a loss the manager collects incentive fees only once investors have been made whole and that peak is surpassed. It prevents charging performance fees twice on the same recovered gains. It does not guarantee any minimum payment, and it governs when incentive fees apply rather than the base on which they are computed.",
  },
  {
    id: "cfa-alt-q2", examSlug: "cfa", topicId: "alts", topicName: "Alternative Investments", difficulty: 3,
    stem: "The J-curve effect observed in private equity investing describes the tendency for returns to be:",
    choices: ["Negative in early years before turning positive as investments mature", "Positive in early years before declining as the fund approaches its term", "Consistently flat until a single large distribution occurs at liquidation"],
    answerIndex: 0,
    explanation: "Early in a fund's life management fees and organizational costs are incurred while portfolio companies have not yet appreciated or been exited, producing negative reported returns that recover and turn positive as value is created and realized. The pattern traces a J shape over the fund's life. Neither early strength nor a flat line until a terminal event captures that characteristic early trough.",
  },

  // ============================================================
  // PORTFOLIO MANAGEMENT
  // ============================================================
  {
    id: "cfa-pm-q1", examSlug: "cfa", topicId: "pm", topicName: "Portfolio Management", difficulty: 3,
    stem: "A stock has a beta of 1.4 when the risk-free rate is 3% and the expected market return is 9%. Its required return under the CAPM is closest to:",
    choices: ["12.6%, multiplying the expected market return directly by the stock's beta", "11.4%, adding the beta-adjusted market risk premium to the risk-free rate", "8.4%, applying the beta to the market return without the risk-free component"],
    answerIndex: 1,
    explanation: "The CAPM computes required return as the risk-free rate plus beta times the market risk premium: 3% + 1.4 × (9% − 3%) = 3% + 8.4% = 11.4%. Multiplying the total market return by beta omits the risk-free anchor and overstates the requirement. Applying beta to the excess return alone produces the risk premium of 8.4% but forgets to add back the risk-free rate.",
  },
  {
    id: "cfa-pm-q2", examSlug: "cfa", topicId: "pm", topicName: "Portfolio Management", difficulty: 3,
    stem: "Adding a security with a correlation of negative 0.3 to an existing portfolio will most likely:",
    choices: ["Reduce portfolio standard deviation to zero through complete diversification", "Increase portfolio standard deviation because negative correlation adds volatility", "Reduce portfolio standard deviation more than a correlation of positive 0.3"],
    answerIndex: 2,
    explanation: "Diversification benefit increases as correlation falls, so a negatively correlated asset offsets more of the existing portfolio's fluctuations than a positively correlated one with the same volatility. Risk reaches zero only at perfect negative correlation of exactly negative one, which essentially never occurs among real assets. Negative correlation reduces rather than adds portfolio volatility, which is the entire reason such assets are sought.",
  },
  {
    id: "cfa-pm-q3", examSlug: "cfa", topicId: "pm", topicName: "Portfolio Management", difficulty: 3,
    stem: "Two portfolios have identical returns, but Portfolio X has a standard deviation of 14% and Portfolio Y has 9%. With a positive risk-free rate, Portfolio Y will have:",
    choices: ["A higher Sharpe ratio, since excess return is divided by total risk", "A lower Sharpe ratio, since lower volatility indicates weaker performance", "An identical Sharpe ratio, since the two portfolios returned the same amount"],
    answerIndex: 0,
    explanation: "The Sharpe ratio divides excess return over the risk-free rate by standard deviation, so with returns equal the portfolio carrying less total risk achieves the higher ratio. Lower volatility is rewarded rather than penalized by this measure. Identical returns alone do not produce identical ratios, since the denominator differs — that denominator is the entire point of a risk-adjusted measure.",
  },
  {
    id: "cfa-pm-q4", examSlug: "cfa", topicId: "pm", topicName: "Portfolio Management", difficulty: 3,
    stem: "In an investment policy statement, an investor's need to fund a home purchase in eighteen months is best classified as:",
    choices: ["A return objective driving the required rate of portfolio growth", "A liquidity constraint affecting the portfolio's asset allocation", "A risk tolerance measure determining acceptable portfolio volatility"],
    answerIndex: 1,
    explanation: "A known near-term cash requirement is a liquidity constraint, which restricts how much of the portfolio can be committed to illiquid or volatile holdings. Return objectives state what the portfolio must earn rather than when funds must be available. Risk tolerance describes willingness and ability to bear volatility, which the liquidity need influences but does not itself define.",
  },
];

export const cfaContent: ExamContent = {
  examSlug: "cfa",
  chapters: [ethicsChapter, ...deepChapters, ...chapters.filter((c) => c.id !== "cfa-ethics"), ...extraChapters],
  questions: [...deepQuestions, ...questions, ...ethicsQuestions, ...extraQuestions],
};
