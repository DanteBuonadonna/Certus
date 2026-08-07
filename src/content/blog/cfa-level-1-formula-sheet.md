---
title: "CFA Level 1 Formula Sheet: What to Actually Memorize"
description: "A CFA Level 1 formula sheet built around what's really tested — the formulas you must memorize, the ones your calculator handles for you, and how to drill them."
date: "2026-08-03"
author: "The Certus Team"
---

# CFA Level 1 Formula Sheet: What to Actually Memorize

You are not given a formula sheet at the CFA exam. Nothing is provided except an approved calculator you bring yourself, so every formula below has to be in your head on exam day — which is exactly why a good formula sheet is short, not a 40-page PDF you'll never read twice.

This is the working list, organized by topic. It skips derivations you'll never be asked to reproduce and flags where your calculator does the work for you.

## First: let your calculator carry the load

Only two calculator families are permitted on the CFA exam — the Texas Instruments BA II Plus (including the BA II Plus Professional) and the Hewlett-Packard 12C family. Whichever you use, learn its worksheets cold, because these things do **not** need to be memorized as formulas:

- **Time value of money.** Present value, future value, annuities, loan amortization, mortgage payments — all of it lives in the N / I/Y / PV / PMT / FV keys.
- **NPV and IRR.** Use the cash flow worksheet. Do not try to discount eight cash flows by hand.
- **Bond pricing and yield to maturity.** A plain-vanilla bond is a TVM problem: coupon is PMT, par is FV, periods are N.
- **Mean, standard deviation, and simple linear regression.** The statistics worksheet gives you these in seconds.

What you *do* have to know is the setup — which number goes in which register, and whether the answer you want is annual or periodic. That's a practice problem, not a memorization problem.

## Quantitative Methods

```
Holding period return   HPR = (P1 − P0 + Income) / P0
Effective annual rate   EAR = (1 + periodic rate)^m − 1
Continuous compounding  EAR = e^r − 1
Geometric mean return   = [(1+R1)(1+R2)...(1+Rn)]^(1/n) − 1
Coefficient of variation = standard deviation / mean
Covariance to correlation  ρ(A,B) = Cov(A,B) / (σA × σB)
Two-asset portfolio variance = w1²σ1² + w2²σ2² + 2·w1·w2·ρ·σ1·σ2
Test statistic (mean, unknown variance) = (x̄ − μ0) / (s / √n)
```

The two-asset variance formula is the single highest-yield formula in Quant, because it reappears in Portfolio Management. Learn it once, get paid twice.

One nuance candidates miss: the **harmonic mean** is what you use for average cost per share when you invest a fixed dollar amount each period. Arithmetic mean overstates it, and the exam loves that trap.

## Economics

```
Real GDP           = Nominal GDP / GDP deflator × 100
Money multiplier   = 1 / reserve requirement
Fiscal multiplier  = 1 / [1 − MPC(1 − t)]
Fisher (approx.)   Nominal rate ≈ Real rate + Expected inflation
Price elasticity   = %Δ quantity demanded / %Δ price
```

For currencies, the exam uses price/base notation (P/B), and covered interest rate parity is:

```
Forward(P/B) / Spot(P/B) = (1 + i_price) / (1 + i_base)
```

Read that as: the currency with the higher interest rate trades at a forward discount. If you remember the sentence, you can rebuild the formula.

## Financial Statement Analysis

FSA is 11–14% of the exam and is mostly ratio work. The DuPont decompositions are worth memorizing verbatim:

```
ROE (3-part) = Net profit margin × Asset turnover × Financial leverage
ROE (5-part) = Tax burden × Interest burden × EBIT margin × Asset turnover × Leverage
             = (NI/EBT) × (EBT/EBIT) × (EBIT/Revenue) × (Revenue/Assets) × (Assets/Equity)

COGS = Beginning inventory + Purchases − Ending inventory
Basic EPS = (Net income − Preferred dividends) / Weighted avg. shares outstanding
Double-declining balance depreciation = (2 / useful life) × Beginning book value
```

Note that double-declining balance ignores salvage value in the calculation — you just stop depreciating once book value reaches salvage. That single detail shows up constantly.

## Corporate Issuers

```
WACC = wd × rd × (1 − t) + wp × rp + we × re
Cash conversion cycle = DSO + Days of inventory on hand − Days payable outstanding
Degree of operating leverage (DOL) = Q(P − V) / [Q(P − V) − F]
Degree of financial leverage (DFL) = EBIT / (EBIT − Interest)
Operating breakeven quantity = F / (P − V)
```

The after-tax term applies to debt only. Preferred dividends are not tax-deductible, so there's no `(1 − t)` on preferred.

## Equity Investments

```
CAPM        Expected return = Rf + β(E(Rm) − Rf)
Gordon growth  V0 = D1 / (r − g)
Sustainable growth  g = b × ROE,  where b = retention rate = 1 − payout ratio
Justified leading P/E  = (1 − b) / (r − g)
Enterprise value = Market cap + Total debt − Cash and equivalents
```

Watch the `D1` in the Gordon model. If a question gives you the dividend *just paid* (`D0`), you multiply by `(1 + g)` first. That's the most common avoidable error in the whole Equity section.

## Fixed Income

```
Current yield = Annual coupon / Bond price

Approximate modified duration
  = (PV− − PV+) / (2 × Δy × PV0)

Price change estimate
  %ΔPV ≈ (−AnnModDur × Δy) + [½ × AnnConvexity × (Δy)²]

Money duration = Annual modified duration × Full price
Modified duration = Macaulay duration / (1 + periodic yield)
```

Two conventions to keep straight: duration and convexity effects use the *decimal* change in yield, and the convexity term is always positive for an option-free bond, which is why duration alone understates gains and overstates losses.

## Derivatives

```
Forward price (no cost/benefit)  F0(T) = S0 × (1 + r)^T
Put-call parity  c + X/(1 + r)^T = p + S0
Value of a long forward at time t = St − [F0(T) / (1 + r)^(T−t)]
```

Put-call parity is worth more than its share of questions suggests, because rearranging it answers synthetic-position questions almost automatically.

## Portfolio Management

```
Sharpe ratio = (Rp − Rf) / σp
Roy's safety-first ratio = (Rp − Threshold return) / σp
Security market line: E(Ri) = Rf + βi(E(Rm) − Rf)
Beta = Cov(i, market) / Variance of market
```

Sharpe uses total risk in the denominator; Treynor uses beta. If the question is about a fully diversified portfolio, beta-based measures are the ones being tested.

## And Ethics has zero formulas

Ethics carries the largest weight on Level 1 at 15–20% — roughly 27 to 36 of the 180 questions — and there is not one formula in it. If you're spending your last two weeks re-deriving convexity while your Ethics accuracy sits at 60%, you're optimizing the wrong thing. Our [Ethics guide](/blog/cfa-level-1-ethics-tips) covers where those points actually leak.

## How to actually memorize these

Copying a formula sheet does almost nothing. Two things work:

1. **Blank-page recall.** Once a week, write out every formula for one topic from memory, then check. The gaps you find are the only ones that matter.
2. **Formulas inside problems, not on flashcards alone.** You don't need to recall `DOL` in the abstract; you need to recognize the question that requires it. Practice questions build that trigger. Formula lists don't.

The honest test of whether your sheet is in your head is a full-length mock under time. If you're pausing to reconstruct a formula, it isn't memorized yet.

You can take a [full CFA mock exam free on Certus](/free-cfa-mock-exam) — no signup, no card. Use it to find out which of these you actually know, then drill the rest in the [Level 1 prep track](/cfa-level-1-prep). Certus is built as [the Duolingo-style way to pass the CFA](/): short daily reps instead of a 900-page reread, at a fraction of what the big courses charge. If you want the wider plan around it, start with our [complete CFA Level 1 study guide](/blog/cfa-level-1-study-guide).

---

*Sources: [2026 & 2027 Level 1 CFA exam topic weights, Soleadea](https://soleadea.org/cfa-level-1/topic-weights); [CFA exam calculator policy, Kaplan Schweser](https://www.schweser.com/cfa/blog/how-to-pass-the-cfa-exam/cfa-exam-calculator-policy).*
