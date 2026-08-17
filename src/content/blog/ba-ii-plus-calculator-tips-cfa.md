---
title: "BA II Plus Tips for the CFA Exam: Settings & Keystrokes"
description: "BA II Plus calculator tips for the CFA exam: the three settings to change out of the box, the keystrokes worth drilling, and the mistakes that cost points."
date: "2026-08-17"
author: "The Certus Team"
---

# BA II Plus Tips for the CFA Exam: Settings & Keystrokes

Out of the box, the TI BA II Plus is set up wrong for the CFA exam — it displays two decimal places and assumes twelve payments per year, both of which will quietly wreck your bond and equity answers. Fix those two settings first, then drill five keystroke sequences until they're muscle memory, and you'll claw back real minutes on exam day.

CFA Institute allows exactly two calculators: the Texas Instruments BA II Plus (including the Professional) and the HP 12C (including the Platinum, anniversary, and Prestige editions). Anything else gets your results voided. Your calculator is inspected before the exam starts, and proctors failing to catch an unauthorized model doesn't get you off the hook. Covers, keystroke cards, and loose batteries are allowed in the room; instruction manuals are not. You can also bring a small screwdriver for a BA II Plus battery swap.

This guide is for the BA II Plus, since that's what the large majority of candidates use.

## The three settings to change before you do anything else

**1. Decimals: go to floating.** Press `2nd` `FORMAT` (above the decimal point key). You'll see `DEC = 2.00`. Type `9` and press `ENTER`, then `2nd` `QUIT`. Nine is the max, and on the BA II Plus that gives you a floating display — you see the full precision the calculator is actually carrying. This matters more than it sounds. CFA answer choices are often deliberately close together, and a value rounded to two decimals mid-chain can push you into the wrong bucket. CFA Institute's own calculator guide suggests four places; nine works too and removes the decision entirely. Either way, don't leave it at two.

**2. P/Y: change 12 to 1.** Press `2nd` `P/Y` (above `I/Y`). The factory default is `12`, which assumes monthly compounding and silently divides your interest rate by twelve. Type `1` and press `ENTER`, then arrow down to confirm `C/Y = 1`, then `2nd` `QUIT`. Almost everything in the Level I curriculum — bond pricing, dividend discount models, project NPVs — is stated in periods, not months, and you handle the compounding yourself by adjusting N and I/Y. Leaving P/Y at 12 is the single most common source of "my answer isn't one of the choices" panic.

**3. Chn vs. AOS: pick one and know which.** By default the BA II Plus calculates in chain mode (`Chn`), meaning it works strictly left to right — `2 + 3 × 4` returns 20, not 14. AOS mode respects order of operations. To switch, press `2nd` `FORMAT`, arrow down four times to the `Chn` line, and press `2nd` `SET` to toggle. There's no universally right answer here. AOS matches how you write formulas on paper; Chn is fine if you're disciplined about parentheses. What's dangerous is not knowing which mode you're in.

One warning that ties all three together: `2nd` `RESET` (above `+/-`) wipes memory *and* restores factory defaults, which means P/Y snaps back to 12 and DEC back to 2. If you reset your calculator the night before the exam to clear it out — a reasonable instinct — you have to redo these settings. Check them again after any reset.

## The keystrokes worth drilling

The Level I exam is 180 multiple-choice questions across two 135-minute sessions, which works out to roughly 90 seconds per question. That budget is the whole argument for calculator fluency: a sequence you have to think about costs you fifteen seconds, and fifteen seconds times forty quantitative questions is ten minutes you didn't have.

**Time value of money.** `N`, `I/Y`, `PV`, `PMT`, `FV`, then `CPT` on the unknown. Two habits: clear with `2nd` `CLR TVM` (above `FV`) between problems, and get the sign convention right — cash out is negative, cash in is positive. A mismatched sign is the second-most-common wrong answer after the P/Y issue. Also know where `2nd` `BGN` lives (above `PMT`) and how to toggle END/BGN with `2nd` `SET`, for annuities due.

**Uneven cash flows.** `CF` opens the cash flow worksheet: enter `CF0`, then `C01`/`F01`, `C02`/`F02` and so on, where F is the frequency of that cash flow. Then `NPV`, enter the discount rate at `I`, arrow down, and `CPT`. Or press `IRR` then `CPT`. The frequency field is underused — if a project throws off the same $200 for five years, that's `C01 = 200`, `F01 = 5`, not five separate entries. Clear with `2nd` `CLR WORK` inside the worksheet.

**Interest rate conversion.** `2nd` `ICONV` (above `2`) converts between nominal and effective annual rates. Enter `NOM`, arrow to `C/Y` for compounding periods, arrow to `EFF` and `CPT`. It works in reverse too. This shows up constantly in fixed income and quant, and doing it by hand is a waste of the time you saved elsewhere.

**Statistics and regression.** `2nd` `DATA` (above `7`) to enter your X and Y values, `2nd` `STAT` (above `8`) to scroll through mean, sample and population standard deviation, and — if you set the stat method to `LIN` — the regression intercept, slope, and correlation coefficient. Worth twenty minutes of practice.

**Bonds, depreciation, amortization.** `2nd` `BOND` (above `9`) handles clean price and yield with settlement and maturity dates. `2nd` `DEPR` (above `4`) does straight-line, declining balance, and sum-of-years-digits. `2nd` `AMORT` (above `PV`) produces amortization schedules after a TVM setup. These are lower-frequency, but knowing they exist beats grinding them out manually.

## Standard or Professional?

The Professional adds net future value, modified IRR, payback and discounted payback, modified duration, and a ten-digit display. None of that is required — the standard BA II Plus covers everything the Level I curriculum asks for. If you already own the standard model, keep it. If you're buying fresh, the Professional's extras are a mild convenience for corporate issuers and fixed income questions.

Two practical notes for exam day. You're permitted to bring both approved models, so a backup calculator is cheap insurance against a dead battery or a stuck key. And clear your memory before the exam begins, since stored values from your last practice session are exactly the kind of thing that produces a confidently wrong answer.

## Practice with it, not around it

The reason candidates lose time to their calculator isn't that the sequences are hard — it's that they learn concepts on paper and only pick up the calculator on mock exam day. Use it for every practice question, including the ones you could do in your head. CFA Institute's own Level I tips list "know your calculator" alongside the actual content advice, and that's not filler.

If you want a place to drill under real conditions, [Certus](/) is built as the Duolingo-style way to pass the CFA — short daily reps instead of marathon sessions, at a fraction of what the big prep courses charge. See [how it compares on price](/cheapest-cfa-prep), or start with [Level I prep](/cfa-level-1-prep). And if you want to find out fast whether your calculator work is actually costing you, [take the free full-length mock exam](/free-cfa-mock-exam) — no signup, no card — and pay attention to which questions ate your clock.

Related reading: [CFA Level 1 formula sheet: what to actually memorize](/blog/cfa-level-1-formula-sheet) and [CFA exam day: what to expect](/blog/cfa-exam-day-what-to-expect).
