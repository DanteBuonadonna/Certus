// ============================================================
// CFA Level I — textbook-depth readings.
// Full college-textbook treatment: intuition first, derivations,
// many worked examples at increasing difficulty, tables, figures,
// edge cases, and exam traps. Built to rival paid prep texts.
// Each chapter here REPLACES/augments the lighter overview chapters
// and is appended into cfaContent in cfa.ts.
// ============================================================

import { Chapter, Question } from "./types";

export const deepChapters: Chapter[] = [
  {
    id: "cfa-l1-tvm",
    examSlug: "cfa",
    topicId: "quant",
    topicName: "Quantitative Methods",
    title: "Time Value of Money: The Mathematics of Investing",
    readingMinutes: 78,
    summary:
      "The single most important toolkit in finance — why money has time value, and every formula for moving cash across time: compounding, discounting, annuities, perpetuities, amortization, and rate conversions, each derived and worked.",
    intro:
      "Almost every valuation in finance — a bond, a stock, a project, a pension, a mortgage — reduces to one idea: a dollar today is not the same as a dollar tomorrow, and to compare cash flows that arrive at different times you must move them to a common date. That movement is the time value of money (TVM). This chapter builds the entire apparatus from first principles. We start with why money has time value at all, derive compounding and discounting, then construct the annuity and perpetuity formulas as natural extensions, and finish with the real-world machinery — loan amortization, solving for unknown rates and horizons, and the difference between stated, effective, and real rates. Work every example with a calculator in hand. At Level I, TVM is not something you read about; it is something you compute until it is reflex, because it underlies fixed income, equity, corporate finance, and portfolio management in turn.",
    sections: [
      {
        heading: "1. Why money has time value",
        blocks: [
          { kind: "p", text: "Offer almost anyone $1,000 today or $1,000 in a year and they take it today — and they are being rational, not impatient. Three forces make present money genuinely worth more than the identical sum in the future. First, OPPORTUNITY COST: money in hand can be invested to earn a return, so $1,000 today can become more than $1,000 by next year; giving up today's dollar means giving up that growth. Second, INFLATION: if prices rise, the same nominal dollar buys fewer real goods later, so future dollars are weaker in purchasing power. Third, RISK and UNCERTAINTY: a promised future dollar might not arrive — the payer could default, circumstances could change — while a dollar in hand is certain. Together these mean that to persuade someone to part with money now, you must promise them more later. The rate at which 'more later' compensates for 'less now' is the interest rate." },
          { kind: "p", text: "It helps to see the interest rate as the PRICE OF TIME — the rent paid for the use of money. Like any price it is set by supply and demand for funds, and it can be decomposed. The interest rate a lender requires is built up from a real risk-free rate (the pure reward for delaying consumption when there is no inflation and no risk) plus a series of premiums that compensate for specific risks the lender bears." },
          { kind: "formula", formula: { label: "The required rate of return, decomposed", expr: "r = real risk-free rate + inflation premium + default risk premium + liquidity premium + maturity premium", note: "The nominal risk-free rate (e.g., a short T-bill yield) ≈ real risk-free rate + inflation premium. Riskier or longer or less-liquid claims stack additional premiums on top." } },
          { kind: "p", text: "This decomposition is worth committing to memory because it recurs across the curriculum: it explains why a 10-year corporate bond yields more than a 3-month Treasury bill (it adds maturity, default, and liquidity premiums), and why required returns rise when inflation expectations rise. For the mechanics of TVM we usually take the rate r as given and focus on moving cash flows through time with it." },
          { kind: "callout", label: "Vocabulary you must keep straight", body: "PRESENT VALUE (PV) is the value of a cash flow expressed at time 0 (today). FUTURE VALUE (FV) is its value at some later date. Moving forward in time (PV → FV) is COMPOUNDING; moving backward (FV → PV) is DISCOUNTING. The interest rate r is the per-period rate, and n is the number of periods. Everything in this chapter is a rearrangement of one relationship between these five quantities: PV, FV, r, n, and (for streams) the payment PMT." },
        ],
      },
      {
        heading: "2. Simple interest versus compound interest",
        blocks: [
          { kind: "p", text: "There are two ways interest can accrue. SIMPLE INTEREST is paid only on the original principal: each period you earn r × principal, and that interest does not itself earn interest. COMPOUND INTEREST is paid on principal AND on all previously accumulated interest — interest earns interest. Real-world investing is almost entirely compound, and the gap between the two is the engine of long-run wealth." },
          { kind: "formula", formula: { label: "Simple interest", expr: "FV = PV × (1 + r × n)", note: "Interest each period = r × PV, never more. Growth is linear in n." } },
          { kind: "formula", formula: { label: "Compound interest", expr: "FV = PV × (1 + r)ⁿ", note: "Each period's interest joins the base. Growth is exponential in n — this is the formula that matters." } },
          { kind: "p", text: "To see why compounding wins, trace $100 at 10% for three years. Under simple interest you earn $10 each year: $110, $120, $130 — a straight line. Under compounding, year one earns $10 (→ $110), year two earns 10% of $110 = $11 (→ $121), year three earns 10% of $121 = $12.10 (→ $133.10). The extra $3.10 is interest-on-interest. Over three years the gap is small; over thirty years it is enormous, because the exponential term (1 + r)ⁿ pulls away from the linear term ever faster." },
          { kind: "example", example: { title: "Simple vs compound over a long horizon", prompt: "You invest $10,000 at 8% for 40 years. How much do you have under simple interest versus annual compounding?", steps: ["Simple: FV = 10,000 × (1 + 0.08 × 40) = 10,000 × (1 + 3.2) = 10,000 × 4.2.", "Compound: FV = 10,000 × (1.08)⁴⁰. Compute (1.08)⁴⁰ ≈ 21.7245.", "Simple → $42,000. Compound → 10,000 × 21.7245 ≈ $217,245."], answer: "Simple interest yields $42,000; compounding yields about $217,245 — over five times as much from the identical rate, purely because interest compounds. The difference (~$175,000) is interest earned on prior interest." } },
          { kind: "figure", figure: { caption: "Figure 1 — Compound growth (curved) pulls away from simple interest (straight) as the horizon lengthens. Same principal, same rate; the gap is interest-on-interest.", svg: '<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg"><line x1="46" y1="200" x2="440" y2="200" stroke="var(--border)" stroke-width="1"/><line x1="46" y1="20" x2="46" y2="200" stroke="var(--border)" stroke-width="1"/><text x="44" y="214" fill="var(--text-muted)" font-size="10" text-anchor="middle">0</text><text x="440" y="214" fill="var(--text-muted)" font-size="10" text-anchor="middle">time (n) →</text><text x="30" y="28" fill="var(--text-muted)" font-size="10" text-anchor="middle">FV</text><line x1="46" y1="200" x2="440" y2="120" stroke="var(--text-muted)" stroke-width="2" stroke-dasharray="4 3"/><text x="360" y="138" fill="var(--text-muted)" font-size="10">simple</text><path d="M46 200 C 200 188, 320 150, 440 36" fill="none" stroke="var(--primary)" stroke-width="2.5"/><text x="356" y="56" fill="var(--primary)" font-size="10" font-weight="600">compound</text></svg>' } },
          { kind: "callout", label: "The Rule of 72 (a fast doubling estimate)", body: "The time for money to DOUBLE under compounding is approximately 72 ÷ (interest rate in percent). At 8%, doubling takes ≈ 72 / 8 = 9 years; at 12%, ≈ 6 years. It works because the exact doubling time is ln(2)/ln(1+r), and ln(2) ≈ 0.693; 72 is a convenient round numerator that tracks the exact value well for rates roughly 4–15%." },
        ],
      },
      {
        heading: "3. Future value of a single sum",
        blocks: [
          { kind: "p", text: "The future value of a single amount invested today is the cleanest application of compounding: take the present amount and grow it forward at r for n periods. The term (1 + r)ⁿ is the FUTURE VALUE FACTOR — the number of dollars you end with per dollar invested. Two levers drive it, and both matter: a higher rate r and a longer horizon n each increase FV, but because n sits in the exponent, time is an especially powerful lever — this is the mathematical case for starting to invest early." },
          { kind: "formula", formula: { label: "Future value of a single sum", expr: "FVₙ = PV × (1 + r)ⁿ", note: "(1 + r)ⁿ is the future value factor. Always express r and n in the same time unit." } },
          { kind: "example", example: { title: "The cost of waiting", prompt: "Two savers each invest $5,000 once at 7%. Anika leaves it for 40 years; Ben leaves it for 30 years (he started 10 years later). How much does each have, and what did the 10-year head start cost Ben?", steps: ["Anika: 5,000 × (1.07)⁴⁰. (1.07)⁴⁰ ≈ 14.974 → ≈ $74,872.", "Ben: 5,000 × (1.07)³⁰. (1.07)³⁰ ≈ 7.6123 → ≈ $38,061.", "Difference ≈ $74,872 − $38,061 = $36,811."], answer: "Anika ends with ≈ $74,872 and Ben with ≈ $38,061. The same $5,000, invested just 10 years earlier, nearly doubles the outcome — the extra decade of compounding is worth about $36,800. Time in the market dominates." } },
          { kind: "p", text: "Notice the sensitivity to the rate as well. If Anika had earned 9% instead of 7% over her 40 years, her $5,000 would grow by (1.09)⁴⁰ ≈ 31.41 to about $157,000 — more than double the 7% outcome. Small differences in annual return, compounded over decades, produce vast differences in terminal wealth, which is why fees and expense ratios (which subtract directly from r) matter so much over a lifetime." },
        ],
      },
      {
        heading: "4. Present value of a single sum",
        blocks: [
          { kind: "p", text: "Discounting is compounding run in reverse. If $1 grows to (1 + r)ⁿ in the future, then $1 received in the future is worth 1 ÷ (1 + r)ⁿ today. To find the present value of a future amount, divide it by the future value factor — equivalently, multiply by the DISCOUNT FACTOR 1 ÷ (1 + r)ⁿ. Present value is the foundation of all valuation: an asset is worth the present value of the cash it will produce, so every bond price, stock value, and project NPV is ultimately a discounting exercise." },
          { kind: "formula", formula: { label: "Present value of a single sum", expr: "PV = FVₙ ÷ (1 + r)ⁿ = FVₙ × (1 + r)⁻ⁿ", note: "1 ÷ (1 + r)ⁿ is the discount factor. PV falls as either r or n rises." } },
          { kind: "p", text: "Two relationships are worth internalizing because exam questions probe them directly. First, PV moves INVERSELY with the discount rate: a higher required return makes a future dollar worth less today (the same reason a bond's price falls when yields rise). Second, PV falls as the cash flow moves FURTHER into the future: a dollar in 30 years is worth far less today than a dollar in 3 years, because it is divided by a much larger factor." },
          { kind: "example", example: { title: "What a future goal is worth today", prompt: "You will need $50,000 for a down payment in 6 years and can earn 5% annually. How much must you invest today as a single lump sum?", steps: ["PV = FV ÷ (1 + r)ⁿ = 50,000 ÷ (1.05)⁶.", "(1.05)⁶ ≈ 1.340096.", "PV = 50,000 ÷ 1.340096 ≈ $37,311."], answer: "About $37,311 invested today grows to $50,000 in 6 years at 5%. Equivalently, the right to receive $50,000 in six years is worth only ≈ $37,311 to you today, given a 5% opportunity cost." } },
          { kind: "callout", label: "Discount rate as a lever", body: "If you discounted that same $50,000 at 8% instead of 5%, the PV would fall to 50,000 ÷ (1.08)⁶ ≈ 50,000 ÷ 1.5869 ≈ $31,507. Raising the discount rate by three points cut nearly $5,800 from today's value. The higher the rate used, the more aggressively future cash flows are 'shrunk' — central to why riskier assets (which use higher discount rates) command lower prices for the same expected cash flows." },
        ],
      },
      {
        heading: "5. Compounding frequency, effective rates, and continuous compounding",
        blocks: [
          { kind: "p", text: "So far we compounded once per year. In practice interest is often added more frequently — semiannually, quarterly, monthly, daily. When a STATED ANNUAL RATE (also called the nominal rate or annual percentage rate) is compounded m times per year, you split the rate into m smaller pieces and apply them m times. More frequent compounding means interest starts earning interest sooner, so the same stated rate produces a higher actual return." },
          { kind: "formula", formula: { label: "Future value with m compounding periods per year", expr: "FV = PV × (1 + r/m)^(m × n)", note: "r is the stated annual rate, m the periods per year, n the number of years. Match the rate (r/m) and the exponent (m·n) to the compounding frequency." } },
          { kind: "p", text: "Because the same stated rate gives different results at different frequencies, you cannot compare two quoted rates with different compounding directly. The fix is the EFFECTIVE ANNUAL RATE (EAR) — the rate that, compounded once a year, produces the same growth. EAR is the honest, comparable number, and it is always ≥ the stated rate (equal only when compounding is annual)." },
          { kind: "formula", formula: { label: "Effective annual rate", expr: "EAR = (1 + r/m)^m − 1", note: "Converts a stated rate compounded m times/year into its true annual yield. Use EAR to compare offers with different compounding." } },
          { kind: "p", text: "Push m toward infinity — compounding every instant — and the formula approaches a limit involving the constant e ≈ 2.71828. This is CONTINUOUS COMPOUNDING, the theoretical ceiling on how much frequency can add, and it appears later in derivatives pricing (the Black–Scholes model uses continuous rates)." },
          { kind: "formula", formula: { label: "Continuous compounding", expr: "FV = PV × e^(r × n)     and     EAR = e^r − 1", note: "e is the base of natural logarithms. Continuous compounding gives the highest FV for a given stated rate." } },
          { kind: "table", table: { caption: "Table 1 — $1,000 invested for one year at a 12% stated rate, by compounding frequency. Notice the EAR rising toward the continuous limit, with diminishing gains.", headers: ["Frequency", "m", "Future value", "EAR"], rows: [["Annual", "1", "$1,120.00", "12.000%"], ["Semiannual", "2", "$1,123.60", "12.360%"], ["Quarterly", "4", "$1,125.51", "12.551%"], ["Monthly", "12", "$1,126.83", "12.683%"], ["Daily", "365", "$1,127.47", "12.747%"], ["Continuous", "∞", "$1,127.50", "12.750%"]] } },
          { kind: "p", text: "The table teaches two lessons. First, frequency genuinely matters: moving from annual to monthly compounding lifted the effective yield from 12.00% to 12.68%. Second, the benefit has DIMINISHING returns — the jump from daily to continuous compounding adds essentially nothing (12.747% to 12.750%). Beyond monthly, extra frequency buys very little." },
          { kind: "example", example: { title: "Comparing two loan quotes", prompt: "Bank A offers a loan at 11.9% compounded monthly. Bank B offers 12.0% compounded annually. Which is cheaper for the borrower?", steps: ["Bank B's EAR is simply 12.0% (annual compounding).", "Bank A's EAR = (1 + 0.119/12)¹² − 1 = (1.0099167)¹² − 1.", "(1.0099167)¹² ≈ 1.12566 → EAR ≈ 12.566%."], answer: "Bank A's effective rate (≈12.57%) is HIGHER than Bank B's (12.00%), so despite the lower stated rate, Bank A's loan is more expensive. Always convert to EAR before comparing — the stated rate alone is misleading whenever compounding differs." } },
        ],
      },
      {
        heading: "6. Annuities: valuing a stream of equal payments",
        blocks: [
          { kind: "p", text: "An ANNUITY is a series of equal cash flows occurring at regular intervals — a car payment, a bond's coupons, a pension, a stream of rent. Rather than discount or compound each payment one at a time, we use closed-form formulas. Crucially, timing matters: an ORDINARY ANNUITY pays at the END of each period (the standard case — most loans and bonds), while an ANNUITY DUE pays at the BEGINNING of each period (rents, leases, many savings deposits). Because each payment in an annuity due sits one period earlier, it earns one extra period of interest, so an annuity due is always worth (1 + r) times the corresponding ordinary annuity." },
          { kind: "formula", formula: { label: "Future value of an ordinary annuity", expr: "FV = PMT × [ ((1 + r)ⁿ − 1) ÷ r ]", note: "The bracket is the FV annuity factor — the future value of $1 paid at the end of each period for n periods." } },
          { kind: "formula", formula: { label: "Present value of an ordinary annuity", expr: "PV = PMT × [ (1 − (1 + r)⁻ⁿ) ÷ r ]", note: "The bracket is the PV annuity factor. This is the workhorse formula behind loan and bond pricing." } },
          { kind: "p", text: "These are not arbitrary — they are the sum of a geometric series. The present value of an annuity is PMT/(1+r) + PMT/(1+r)² + … + PMT/(1+r)ⁿ; summing that geometric series gives exactly the bracketed factor above. You do not need to reproduce the derivation on the exam, but knowing the formula IS just 'add up the discounted payments' keeps you from misapplying it." },
          { kind: "example", example: { title: "Saving for retirement (FV of an ordinary annuity)", prompt: "You invest $5,000 at the end of every year for 30 years and earn 8% annually. How much will you have at the end?", steps: ["FV = 5,000 × [((1.08)³⁰ − 1) ÷ 0.08].", "(1.08)³⁰ ≈ 10.0627, so the factor = (10.0627 − 1) ÷ 0.08 = 9.0627 ÷ 0.08 = 113.283.", "FV = 5,000 × 113.283 ≈ $566,416."], answer: "About $566,416. You contributed only $150,000 (30 × $5,000); the other ≈ $416,000 is compound growth. This is the core argument for steady, automatic retirement contributions." } },
          { kind: "example", example: { title: "Valuing a payment stream (PV of an ordinary annuity)", prompt: "An investment will pay you $2,000 at the end of each year for 20 years. If your required return is 6%, what is the stream worth today?", steps: ["PV = 2,000 × [(1 − (1.06)⁻²⁰) ÷ 0.06].", "(1.06)²⁰ ≈ 3.20714, so (1.06)⁻²⁰ ≈ 0.31180.", "Factor = (1 − 0.31180) ÷ 0.06 = 0.68820 ÷ 0.06 = 11.4699.", "PV = 2,000 × 11.4699 ≈ $22,940."], answer: "About $22,940. If this stream were offered for less than $22,940 it would be a positive-NPV buy at a 6% required return; for more, it would destroy value." } },
          { kind: "example", example: { title: "Annuity due adjustment", prompt: "Using the previous stream, suppose the $2,000 payments arrive at the BEGINNING of each year instead. What is it worth now?", steps: ["An annuity due = ordinary annuity × (1 + r).", "PV(due) = 22,940 × 1.06."], answer: "≈ $24,316. Each payment lands a year sooner, so it is discounted one period less — multiplying by (1 + r) captures exactly that. On a financial calculator this is the difference between END and BGN mode; forgetting to switch modes is one of the most common exam errors." } },
        ],
      },
      {
        heading: "7. Perpetuities and growing perpetuities",
        blocks: [
          { kind: "p", text: "A PERPETUITY is an annuity that never ends — a constant payment forever. It sounds exotic but it models real instruments: traditional preferred stock pays a fixed dividend indefinitely, and the British government once issued 'consols' that paid forever. As the number of periods in the annuity PV factor goes to infinity, the term (1 + r)⁻ⁿ goes to zero, and the whole factor collapses to a strikingly simple result." },
          { kind: "formula", formula: { label: "Present value of a perpetuity", expr: "PV = PMT ÷ r", note: "A constant payment forever is worth just the payment divided by the discount rate. The first payment is assumed to arrive one period from now." } },
          { kind: "p", text: "The intuition is clean: if you have a pile of money P earning rate r, it throws off P × r each period forever without touching principal. Run that backwards — to generate a payment PMT forever you need a pile of PMT ÷ r. Many perpetual streams actually GROW over time (like dividends rising with the economy). A constant growth rate g gives the GROWING PERPETUITY, the engine behind the Gordon dividend discount model used in equity valuation." },
          { kind: "formula", formula: { label: "Present value of a growing perpetuity (Gordon form)", expr: "PV = PMT₁ ÷ (r − g)", note: "PMT₁ is next period's payment; g is the constant growth rate, and the formula only works when r > g. As g approaches r, value explodes toward infinity." } },
          { kind: "example", example: { title: "Pricing preferred stock and a growing stream", prompt: "(a) A preferred share pays a fixed $6 dividend forever; investors require 8%. (b) A common share is expected to pay a $3 dividend next year, growing 4% per year forever, with a required return of 9%. Value each.", steps: ["(a) Perpetuity: PV = 6 ÷ 0.08 = $75.", "(b) Growing perpetuity: PV = 3 ÷ (0.09 − 0.04) = 3 ÷ 0.05 = $60."], answer: "The preferred share is worth $75; the growing-dividend share is worth $60. Note how sensitive (b) is to the spread (r − g): if growth rose to 5%, the value would jump to 3 ÷ 0.04 = $75 — a one-point change in g moved value 25%. This sensitivity is why the Gordon model is powerful but fragile." } },
        ],
      },
      {
        heading: "8. Uneven cash flows, NPV, and the internal rate of return",
        blocks: [
          { kind: "p", text: "Annuity and perpetuity formulas require EQUAL payments. Most real investments produce uneven cash flows — a project might lose money early, then earn rising amounts later. There is no shortcut here: you discount each cash flow individually at the appropriate rate and add them up. The sum of the present values of all future cash flows, minus the initial cost, is the NET PRESENT VALUE (NPV) — the single most important decision metric in corporate finance." },
          { kind: "formula", formula: { label: "Net present value", expr: "NPV = −CF₀ + CF₁/(1+r) + CF₂/(1+r)² + … + CFₙ/(1+r)ⁿ", note: "CF₀ is the initial outlay (negative). Accept a project if NPV > 0 — it adds value at the required rate r." } },
          { kind: "example", example: { title: "NPV of an uneven project", prompt: "A project costs $1,000 today and returns $300, $500, and $700 at the end of years 1, 2, and 3. At a 10% required return, what is its NPV?", steps: ["PV of $300 = 300 ÷ 1.10 = 272.73.", "PV of $500 = 500 ÷ (1.10)² = 500 ÷ 1.21 = 413.22.", "PV of $700 = 700 ÷ (1.10)³ = 700 ÷ 1.331 = 525.92.", "Sum of inflows = 272.73 + 413.22 + 525.92 = 1,211.87. NPV = −1,000 + 1,211.87."], answer: "NPV ≈ +$211.87. Because NPV is positive at the 10% required return, the project creates value and should be accepted. If the discount rate were high enough, those same cash flows would eventually produce a negative NPV." } },
          { kind: "p", text: "The INTERNAL RATE OF RETURN (IRR) is the flip side of NPV: it is the discount rate that makes NPV exactly zero — effectively the investment's own compound annual return. A project is attractive when its IRR exceeds the required return (the 'hurdle rate'). IRR cannot generally be solved by hand for uneven cash flows (it requires trial-and-error or a calculator's IRR function), but you must understand the relationship: at the IRR, the present value of inflows exactly equals the cost." },
          { kind: "callout", label: "NPV vs IRR — the exam's favorite contrast", body: "NPV and IRR usually agree on accept/reject for a single standalone project. They can DISAGREE when ranking mutually exclusive projects (different sizes or cash-flow timing) or when cash flows change sign more than once (which can give multiple IRRs). When they conflict, NPV is the theoretically superior rule because it measures value added in dollars and assumes reinvestment at the required rate, not at the (possibly unrealistic) IRR." },
        ],
      },
      {
        heading: "9. Solving for the unknown: rate, time, and payment",
        blocks: [
          { kind: "p", text: "Every TVM relationship ties together five variables — PV, FV, r, n, and PMT. Given any four, you can solve for the fifth. So far we solved for PV and FV; the exam equally tests solving for the RATE, the NUMBER OF PERIODS, and the PAYMENT, each of which just rearranges the same equation." },
          { kind: "p", text: "Solving for the RATE of a single sum uses a root: if PV grows to FV over n periods, then r = (FV ÷ PV)^(1/n) − 1. This is also how you compute a compound annual growth rate (CAGR) from a beginning and ending value." },
          { kind: "example", example: { title: "Implied rate of return (CAGR)", prompt: "An investment grew from $1,000 to $2,000 over 6 years with no deposits or withdrawals. What compound annual return did it earn?", steps: ["r = (FV ÷ PV)^(1/n) − 1 = (2,000 ÷ 1,000)^(1/6) − 1 = 2^(1/6) − 1.", "2^(1/6) ≈ 1.12246.", "r ≈ 0.12246."], answer: "≈ 12.25% per year. Note this is the geometric (compound) growth rate — the rate that actually links the two endpoints — not a simple average of annual returns." } },
          { kind: "p", text: "Solving for the NUMBER OF PERIODS uses logarithms: from FV = PV(1 + r)ⁿ, taking logs gives n = ln(FV ÷ PV) ÷ ln(1 + r). This answers 'how long until my money reaches a goal?' and is the exact version of the Rule of 72." },
          { kind: "example", example: { title: "How long to reach a goal", prompt: "How many years will it take $1,000 to grow to $2,000 at 8% compounded annually?", steps: ["n = ln(2,000 ÷ 1,000) ÷ ln(1.08) = ln(2) ÷ ln(1.08).", "= 0.69315 ÷ 0.076961.", "≈ 9.01 years."], answer: "About 9 years — matching the Rule of 72 estimate (72 ÷ 8 = 9). The log formula gives the exact answer; the Rule of 72 is the mental shortcut." } },
          { kind: "p", text: "Solving for the PAYMENT rearranges the annuity PV formula and is exactly how a loan payment is computed: PMT = PV ÷ [annuity PV factor]. This is the bridge to amortization, next." },
        ],
      },
      {
        heading: "10. Loan amortization: where the formulas earn their keep",
        blocks: [
          { kind: "p", text: "A fully amortizing loan (a mortgage, an auto loan, most student loans) is an annuity viewed from the lender's side: the borrower receives the loan principal today (a PV) and repays it with a stream of equal payments. The payment is found by solving the annuity PV formula for PMT. What makes amortization conceptually rich is how each payment SPLITS: early payments are mostly interest (because the balance — and thus the interest charged on it — is large), while later payments are mostly principal. The split shifts steadily over the life of the loan even though the total payment never changes." },
          { kind: "formula", formula: { label: "The level loan payment", expr: "PMT = PV × [ r ÷ (1 − (1 + r)⁻ⁿ) ]", note: "PV is the loan amount; r and n are the periodic rate and number of payments. This is the annuity PV formula solved for PMT." } },
          { kind: "example", example: { title: "A 30-year mortgage payment", prompt: "You borrow $200,000 at a 6% annual rate (0.5% per month) repaid monthly over 30 years (360 payments). What is the monthly payment?", steps: ["Periodic rate r = 0.06 ÷ 12 = 0.005; n = 30 × 12 = 360.", "(1.005)⁻³⁶⁰ ≈ 0.166042, so denominator = 1 − 0.166042 = 0.833958.", "PMT = 200,000 × (0.005 ÷ 0.833958) = 200,000 × 0.0059955.", "≈ $1,199.10 per month."], answer: "About $1,199.10 per month. Over 360 payments you pay ≈ $431,676 total — meaning ≈ $231,676 of interest on a $200,000 loan. That interest total is why the rate and term matter so much on a mortgage." } },
          { kind: "table", table: { caption: "Table 2 — First three months of the $200,000 mortgage. Interest = 0.5% × prior balance; principal = payment − interest. Watch the interest portion fall and the principal portion rise.", headers: ["Month", "Payment", "Interest", "Principal", "Ending balance"], rows: [["1", "$1,199.10", "$1,000.00", "$199.10", "$199,800.90"], ["2", "$1,199.10", "$999.00", "$200.10", "$199,600.80"], ["3", "$1,199.10", "$998.00", "$201.10", "$199,399.70"]] } },
          { kind: "p", text: "In month one, $1,000 of the $1,199.10 payment is just interest (0.5% of $200,000); only $199.10 reduces principal. As the balance inches down, the interest charged next month is slightly smaller, so slightly more of the fixed payment attacks principal — a self-reinforcing acceleration that is gentle at first and dramatic near the end. This is also why making extra principal payments early saves disproportionate interest: every dollar of principal retired early avoids years of compounding interest on it." },
        ],
      },
      {
        heading: "11. Stated, effective, and real rates",
        blocks: [
          { kind: "p", text: "Three distinctions about interest rates trip up candidates, and the exam exploits all of them. We have met two already. The STATED (nominal) annual rate is the quoted figure that ignores intra-year compounding. The EFFECTIVE annual rate (EAR) bakes in compounding frequency and is the comparable, true annual yield. The third distinction is between NOMINAL and REAL rates — whether or not we have stripped out inflation." },
          { kind: "p", text: "A nominal return tells you how many more dollars you have; a REAL return tells you how much more you can actually buy after inflation. The precise relationship is multiplicative, captured by the Fisher equation; a common approximation simply subtracts inflation, which is close enough for small rates but drifts at higher ones." },
          { kind: "formula", formula: { label: "The Fisher relationship (exact and approximate)", expr: "(1 + nominal) = (1 + real) × (1 + inflation)     ⟹     real ≈ nominal − inflation", note: "Solve for the real rate exactly as real = (1 + nominal)/(1 + inflation) − 1. The subtraction shortcut understates the gap slightly." } },
          { kind: "example", example: { title: "Nominal versus real return", prompt: "Your portfolio returned 8% over a year in which inflation was 3%. What was your real (purchasing-power) return, exactly and approximately?", steps: ["Approximate: 8% − 3% = 5%.", "Exact: real = (1.08 ÷ 1.03) − 1 = 1.048544 − 1.", "= 0.048544."], answer: "Approximately 5%, but exactly ≈ 4.85%. The approximation overstates the real return by about 0.15 points here; the gap widens as rates rise, so use the exact Fisher form when precision matters or rates are high." } },
          { kind: "callout", label: "Don't conflate the three", body: "Stated vs effective is about COMPOUNDING FREQUENCY within a year. Nominal vs real is about INFLATION. A rate can be, say, a stated nominal 6% compounded monthly — which has an effective nominal yield of ≈6.17% and, at 2% inflation, an effective real yield of roughly 4.1%. Always ask: has compounding been accounted for, and has inflation been removed?" },
        ],
      },
      {
        heading: "12. Pulling it together: process and common traps",
        blocks: [
          { kind: "p", text: "Every TVM problem yields to the same disciplined process. (1) Draw a timeline and mark every cash flow at its date. (2) Identify what you have and what you are solving for among PV, FV, r, n, PMT. (3) Match the rate and number of periods to the compounding/payment frequency — if payments are monthly, r must be a monthly rate and n a count of months. (4) Choose the right tool: single sum, annuity (ordinary or due), perpetuity, or discount-each-flow for uneven streams. (5) Solve, then sanity-check the magnitude and direction." },
          { kind: "bullets", items: [
            "Frequency mismatch: using an annual rate with a monthly number of periods (or vice versa). Convert first — this is the single most common error.",
            "Ordinary annuity vs annuity due: forgetting to switch the calculator to BGN mode for beginning-of-period payments (rents, leases, savings deposits). An annuity due is worth (1 + r) times the ordinary version.",
            "Sign conventions on a financial calculator: outflows and inflows must have opposite signs, or the calculator returns an error or a nonsensical rate.",
            "Stated vs effective: comparing two rates with different compounding without first converting both to EAR.",
            "Nominal vs real: subtracting inflation when the exact Fisher form is needed, or forgetting inflation entirely in a 'purchasing power' question.",
            "Growing perpetuity with g ≥ r: the formula breaks down (and gives a negative or infinite value) — it only holds when r > g.",
          ] },
          { kind: "p", text: "Master this chapter and the rest of the curriculum becomes a series of applications: a bond's price is the PV of its coupons (an annuity) plus the PV of its face value (a single sum); a stock's value is the PV of its future dividends (often a growing perpetuity); a project's worth is the NPV of its cash flows; a retirement plan is an annuity FV problem. TVM is not one topic among many — it is the grammar in which the others are written." },
        ],
      },
    ],
    keyTerms: [
      { term: "Time value of money", def: "The principle that a dollar today is worth more than a dollar in the future due to opportunity cost, inflation, and risk." },
      { term: "Required rate of return", def: "Real risk-free rate + inflation premium + default + liquidity + maturity premiums." },
      { term: "Present value (PV)", def: "The value today of a future cash flow, found by discounting." },
      { term: "Future value (FV)", def: "The value at a later date of an amount invested today, found by compounding." },
      { term: "Compounding vs discounting", def: "Moving cash forward in time (PV→FV) vs backward (FV→PV)." },
      { term: "Simple interest", def: "Interest paid only on principal; FV = PV(1 + r·n); grows linearly." },
      { term: "Compound interest", def: "Interest paid on principal and accumulated interest; FV = PV(1 + r)ⁿ; grows exponentially." },
      { term: "Future/Present value factor", def: "(1 + r)ⁿ and its reciprocal 1/(1 + r)ⁿ — dollars-per-dollar multipliers." },
      { term: "Rule of 72", def: "Doubling time ≈ 72 ÷ rate(%); approximates ln(2)/ln(1+r)." },
      { term: "Stated (nominal) annual rate", def: "The quoted annual rate, ignoring intra-year compounding." },
      { term: "Effective annual rate (EAR)", def: "(1 + r/m)^m − 1; the true comparable annual yield after compounding." },
      { term: "Continuous compounding", def: "FV = PV·e^(r·n); the limit of ever-more-frequent compounding." },
      { term: "Ordinary annuity", def: "Equal payments at the END of each period (loans, bonds)." },
      { term: "Annuity due", def: "Equal payments at the BEGINNING of each period; worth (1 + r) × ordinary." },
      { term: "Perpetuity", def: "A constant payment forever; PV = PMT ÷ r." },
      { term: "Growing perpetuity", def: "PV = PMT₁ ÷ (r − g); the Gordon model basis; requires r > g." },
      { term: "Net present value (NPV)", def: "PV of all cash flows minus cost; accept if positive." },
      { term: "Internal rate of return (IRR)", def: "The discount rate that sets NPV to zero; the investment's compound return." },
      { term: "Amortization", def: "Repaying a loan with equal payments split between interest and principal." },
      { term: "Fisher relationship", def: "(1 + nominal) = (1 + real)(1 + inflation); real ≈ nominal − inflation." },
    ],
    takeaways: [
      "Money has time value because of opportunity cost, inflation, and risk; the interest rate is the price of time and decomposes into a real rate plus premiums.",
      "Compounding (FV = PV(1+r)ⁿ) grows exponentially and dominates simple interest over long horizons; discounting is its inverse, PV = FV/(1+r)ⁿ.",
      "Match the rate and periods to the compounding frequency; convert to EAR before comparing rates, and use the Fisher form to get real returns.",
      "Annuities value equal streams (ordinary = end, due = beginning, ×(1+r)); a perpetuity is PMT/r and a growing perpetuity PMT₁/(r−g).",
      "Any four of PV, FV, r, n, PMT solve for the fifth — including CAGR via a root and time via logs.",
      "Loan payments solve the annuity PV formula for PMT; early payments are mostly interest, shifting to principal over time.",
    ],
  },
];

export const deepQuestions: Question[] = [
  {
    id: "cfa-tvm-d1", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 1,
    stem: "Which best explains why a dollar received today is worth more than a dollar received in one year?",
    choices: ["Only because of inflation", "Opportunity cost, inflation, and risk together", "Only because of investment risk", "Because banks require it"],
    answerIndex: 1,
    explanation: "Three forces drive the time value of money: opportunity cost (today's dollar can be invested to earn a return), inflation (future dollars buy less), and risk (a promised future dollar may not arrive). Choices A and C each name only one of the three. The interest rate compensates for all of them combined.",
  },
  {
    id: "cfa-tvm-d2", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "$2,000 is invested for 5 years at an 8% stated annual rate compounded quarterly. The future value is closest to:",
    choices: ["$2,938", "$2,939", "$2,972", "$3,200"],
    answerIndex: 2,
    explanation: "Use FV = PV(1 + r/m)^(m·n) = 2,000(1 + 0.08/4)^(4·5) = 2,000(1.02)^20. (1.02)^20 ≈ 1.48595, so FV ≈ $2,971.89. Choice D wrongly applies simple interest; the others use annual or semiannual compounding. Matching r/m and m·n to the quarterly frequency is the key step.",
  },
  {
    id: "cfa-tvm-d3", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "A loan is quoted at 9.8% compounded monthly. Its effective annual rate (EAR) is closest to:",
    choices: ["9.80%", "9.40%", "10.25%", "11.00%"],
    answerIndex: 2,
    explanation: "EAR = (1 + r/m)^m − 1 = (1 + 0.098/12)^12 − 1 = (1.0081667)^12 − 1 ≈ 1.10252 − 1 ≈ 10.25%. The EAR exceeds the 9.80% stated rate because monthly compounding adds interest-on-interest; choice A ignores compounding entirely, and a true EAR can never be below the stated rate (ruling out choice B).",
  },
  {
    id: "cfa-tvm-d4", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "You will receive $1,000 at the end of each year for 15 years. At a 7% required return, the present value is closest to:",
    choices: ["$9,108", "$10,000", "$15,000", "$25,129"],
    answerIndex: 0,
    explanation: "This is an ordinary annuity: PV = PMT × [(1 − (1+r)⁻ⁿ)/r] = 1,000 × [(1 − 1.07⁻¹⁵)/0.07]. (1.07)¹⁵ ≈ 2.759, so 1.07⁻¹⁵ ≈ 0.36245; factor = (1 − 0.36245)/0.07 ≈ 9.108. PV ≈ $9,108. Choice C is the undiscounted sum of payments; choice D is closer to the future value of the annuity, not its present value.",
  },
  {
    id: "cfa-tvm-d5", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "The same $1,000-for-15-years stream instead pays at the BEGINNING of each year. Its present value at 7% is closest to:",
    choices: ["$9,108", "$9,746", "$8,512", "$10,815"],
    answerIndex: 1,
    explanation: "An annuity due equals the ordinary annuity value times (1 + r): 9,108 × 1.07 ≈ $9,746. Each payment arrives one period sooner, so it is discounted one period less. Choice A is the ordinary-annuity value (forgetting the BGN adjustment), a classic trap.",
  },
  {
    id: "cfa-tvm-d6", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "A preferred stock pays a fixed $5 dividend in perpetuity. If investors require 10%, the stock's value is:",
    choices: ["$50", "$5.50", "$500", "$45"],
    answerIndex: 0,
    explanation: "A perpetuity is valued as PV = PMT ÷ r = $5 ÷ 0.10 = $50. The constant dividend forever, divided by the required return, gives the price. Choice C divides by the rate incorrectly (multiplying); a higher required return would lower the value, not raise it.",
  },
  {
    id: "cfa-tvm-d7", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "An investment grows from $4,000 to $6,000 over 4 years with no cash added or withdrawn. Its compound annual growth rate is closest to:",
    choices: ["12.5%", "10.67%", "8.0%", "15.0%"],
    answerIndex: 1,
    explanation: "Solve for the rate: r = (FV/PV)^(1/n) − 1 = (6,000/4,000)^(1/4) − 1 = 1.5^0.25 − 1 ≈ 1.1067 − 1 ≈ 10.67%. Choice A (12.5%) is the simple-interest average (50% total ÷ 4 years), which overstates the compound rate. CAGR is the geometric link between the endpoints.",
  },
  {
    id: "cfa-tvm-d8", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "A portfolio earned a 9% nominal return in a year when inflation was 4%. Using the exact Fisher relationship, the real return is closest to:",
    choices: ["5.00%", "4.81%", "13.0%", "4.50%"],
    answerIndex: 1,
    explanation: "Exact real return = (1 + nominal)/(1 + inflation) − 1 = 1.09/1.04 − 1 ≈ 1.04808 − 1 ≈ 4.81%. The approximation (nominal − inflation = 5%) slightly overstates it; choice A is that approximation. The exact Fisher form divides rather than subtracts, and the gap grows with the size of the rates.",
  },
  {
    id: "cfa-tvm-d9", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "On a $150,000 loan at 0.5% per month for 360 months, the first payment is $899.33. How much of that first payment is principal?",
    choices: ["$750.00", "$149.33", "$899.33", "$0"],
    answerIndex: 1,
    explanation: "Month-1 interest = 0.5% × $150,000 = $750.00. Principal = payment − interest = $899.33 − $750.00 = $149.33. Early in an amortizing loan, interest dominates and little principal is retired; the principal portion grows each month as the balance falls. Choice A is the interest portion, not the principal.",
  },
  {
    id: "cfa-tvm-d10", examSlug: "cfa", topicId: "quant", topicName: "Quantitative Methods", difficulty: 1,
    stem: "Using the Rule of 72, approximately how long does money take to double at a 6% annual rate?",
    choices: ["6 years", "12 years", "9 years", "16 years"],
    answerIndex: 1,
    explanation: "The Rule of 72 estimates doubling time as 72 ÷ rate(%) = 72 ÷ 6 = 12 years. The exact answer, ln(2)/ln(1.06) ≈ 11.9 years, confirms it. The rule works well for rates roughly between 4% and 15%.",
  },
];
