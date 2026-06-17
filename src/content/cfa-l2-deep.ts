// ============================================================
// CFA Level II — textbook-depth readings.
// L2 is the valuation level: applying L1's tools at depth, with
// heavier math and item-set-style application. Same quality bar
// as the L1 deep set — derivations, worked examples, traps.
// Appended into cfaL2Content in cfa-l2.ts.
// ============================================================

import { Chapter, Question } from "./types";

export const deepChaptersL2: Chapter[] = [
  {
    id: "cfa-l2-regression",
    examSlug: "cfa-l2",
    topicId: "quant",
    topicName: "Quantitative Methods",
    title: "Multiple Regression: Inference, Diagnostics, and Misspecification",
    readingMinutes: 90,
    summary:
      "The Level II quant workhorse — building and reading a multiple regression, testing coefficients (t and F) and reading the ANOVA table, and above all diagnosing the three classic violations and the specification errors that make a model lie.",
    intro:
      "Level II quant moves from describing one variable to explaining one variable with several. Multiple regression is the engine, and the exam tests it less as estimation (the computer estimates it) than as INTERPRETATION and DIAGNOSIS: read the output, test what's significant, and — most importantly — recognize when the model is broken. This chapter builds the model and its assumptions, the inference machinery (t-tests, the F-test, the ANOVA table, R² vs adjusted R²), then the three violations of the regression assumptions (heteroskedasticity, serial correlation, multicollinearity) and the specification errors that bias the results. The item sets reward one skill above all: spotting which assumption a vignette has quietly violated.",
    sections: [
      {
        heading: "1. From simple to multiple regression",
        blocks: [
          { kind: "p", text: "Simple regression explains a dependent variable Y with one independent variable X. MULTIPLE regression generalizes to k independent variables: Y = b₀ + b₁X₁ + b₂X₂ + … + bₖXₖ + ε. Each SLOPE coefficient is a PARTIAL effect — the change in Y for a one-unit change in that X, HOLDING THE OTHER INDEPENDENT VARIABLES CONSTANT. That 'holding others constant' is the whole point of going multivariate: it isolates each variable's contribution from the others'. The intercept b₀ is the expected Y when all X's are zero (often not economically meaningful, just an anchor)." },
          { kind: "formula", formula: { label: "The multiple regression model", expr: "Yᵢ = b₀ + b₁X₁ᵢ + b₂X₂ᵢ + … + bₖXₖᵢ + εᵢ", note: "Each bⱼ is the partial slope: the effect of Xⱼ on Y holding all other independent variables fixed. ε is the error (residual) term." } },
          { kind: "example", example: { title: "Interpreting and predicting", prompt: "A model estimates a stock's monthly return: Return = 0.5 + 1.2(Market) − 0.3(Size), in percent. Interpret the coefficients and predict the return if the market returns 4% and the size factor is 2%.", steps: ["b₁ = 1.2: each 1% market move adds 1.2% to the stock's return, holding size constant.", "b₂ = −0.3: each 1% in the size factor subtracts 0.3%, holding the market constant.", "Predicted = 0.5 + 1.2(4) − 0.3(2) = 0.5 + 4.8 − 0.6 = 4.7%."], answer: "Predicted return ≈ 4.7%. The partial slopes let you attribute the return to each factor separately — the market contributes +4.8%, size −0.6%, on top of the 0.5% intercept." } },
        ],
      },
      {
        heading: "2. Assumptions of the linear regression model",
        blocks: [
          { kind: "p", text: "The inference (t-tests, F-tests, confidence intervals) is only valid if the classical assumptions roughly hold. Memorize them, because every violation in this chapter is a breach of one. (1) The relationship is LINEAR in the coefficients. (2) The independent variables are not random and there is NO EXACT linear relationship among them (no perfect multicollinearity). (3) The error term has an expected value of ZERO. (4) The error variance is CONSTANT across observations (HOMOSKEDASTICITY). (5) The errors are UNCORRELATED across observations (no serial correlation). (6) The errors are NORMALLY distributed." },
          { kind: "p", text: "When these hold, ordinary least squares (OLS) gives the 'best linear unbiased estimators.' When assumptions 4 or 5 fail, the coefficient estimates remain unbiased but the STANDARD ERRORS are wrong — so the t-statistics and significance tests mislead. That distinction (coefficients fine, standard errors broken) is the key to the whole diagnostics section." },
        ],
      },
      {
        heading: "3. Testing coefficients and the ANOVA table",
        blocks: [
          { kind: "p", text: "Each coefficient is tested for significance with a t-TEST: the estimated coefficient divided by its standard error, compared to a critical t (degrees of freedom = n − k − 1). A large |t| (small p-value) means the variable significantly explains Y. To test whether the model AS A WHOLE has explanatory power — whether ALL slopes are jointly zero — use the F-TEST." },
          { kind: "formula", formula: { label: "t-statistic and F-statistic", expr: "t = b̂ⱼ ÷ s(b̂ⱼ)      F = MSR ÷ MSE = (SSR/k) ÷ (SSE/(n−k−1))", note: "The t-test judges one coefficient; the F-test judges all slopes jointly. Reject the null (coefficient or all slopes = 0) when the statistic exceeds the critical value / p < α." } },
          { kind: "p", text: "The ANOVA (analysis of variance) table decomposes the variation. Total variation SST = explained (SSR, regression sum of squares) + unexplained (SSE, sum of squared errors/residuals). The COEFFICIENT OF DETERMINATION R² = SSR ÷ SST is the fraction of Y's variation the model explains. But R² ALWAYS rises when you add a variable, even a useless one — so to compare models with different numbers of regressors use ADJUSTED R², which penalizes extra variables and can fall when a new one contributes little. The STANDARD ERROR OF THE ESTIMATE (SEE) = √MSE measures the typical size of the residuals." },
          { kind: "callout", label: "R² vs adjusted R² — the comparison rule", body: "Use R² to describe a single model's fit; use ADJUSTED R² to choose between models of different size. Adding a variable that raises adjusted R² is worth keeping; one that lowers it is noise. A model can have a high R² yet insignificant individual coefficients — a red flag for multicollinearity (below)." },
        ],
      },
      {
        heading: "4. Heteroskedasticity",
        blocks: [
          { kind: "p", text: "HETEROSKEDASTICITY means the error variance is NOT constant across observations — assumption 4 fails. The benign form, UNCONDITIONAL heteroskedasticity (variance unrelated to the independent variables), causes few problems. The dangerous form is CONDITIONAL heteroskedasticity, where the error variance changes WITH the level of an independent variable (common in cross-sectional financial data — larger firms have larger error variance). It does NOT bias the coefficients, but it makes the standard errors wrong — typically too SMALL — so t-statistics are inflated and you find spurious significance." },
          { kind: "p", text: "DETECT it with the BREUSCH–PAGAN test (regress the squared residuals on the independent variables; a significant relationship signals conditional heteroskedasticity). CORRECT it by using ROBUST (heteroskedasticity-consistent / White) standard errors, or generalized least squares. The exam tell: a vignette mentioning error variance that 'increases with firm size' or a Breusch–Pagan result — the consequence to state is unreliable t-tests (often overstating significance)." },
        ],
      },
      {
        heading: "5. Serial correlation (autocorrelation)",
        blocks: [
          { kind: "p", text: "SERIAL CORRELATION means the errors are correlated across observations — assumption 5 fails, and it is most common in TIME-SERIES data. POSITIVE serial correlation (a positive error tends to follow a positive error) is the usual case. Like heteroskedasticity, it leaves the coefficient estimates unbiased (in the typical case) but corrupts the standard errors: positive serial correlation makes them too SMALL, inflating t-statistics and F, so you again over-find significance." },
          { kind: "formula", formula: { label: "The Durbin–Watson statistic", expr: "DW ≈ 2 × (1 − r)", note: "r is the correlation of adjacent residuals. DW ≈ 2 → no serial correlation; DW → 0 → strong positive serial correlation; DW → 4 → negative. Compare to critical values for an inconclusive region." } },
          { kind: "p", text: "DETECT it with the DURBIN–WATSON test (for first-order serial correlation; note DW is invalid if the regression includes a lagged dependent variable — then use a different test). CORRECT it with robust standard errors (e.g., Newey–West, which fix both serial correlation and heteroskedasticity) or by adjusting the model. The practical upshot mirrors heteroskedasticity: significance tests can't be trusted until the standard errors are fixed." },
        ],
      },
      {
        heading: "6. Multicollinearity",
        blocks: [
          { kind: "p", text: "MULTICOLLINEARITY arises when two or more independent variables are highly correlated WITH EACH OTHER (assumption 2 nearly fails). Unlike the other two violations, it does not break a specific error assumption, but it inflates the coefficient standard errors, making individual t-tests insignificant even when the variables jointly matter. Its unmistakable SIGNATURE: a HIGH R² and a significant F-statistic (the model explains a lot overall) but INSIGNIFICANT individual t-statistics (no single variable looks important) — because the correlated variables are stealing each other's explanatory credit." },
          { kind: "p", text: "DETECT it via that F-significant-but-t-insignificant pattern, or high pairwise correlations / variance inflation factors. CORRECT it by dropping one of the redundant variables (or combining them). The coefficients aren't biased, but they're imprecise and unstable, so you can't interpret them individually. This is the most frequently tested of the three — the 'significant F, insignificant t' tell is the giveaway." },
          { kind: "table", table: { caption: "Table 1 — The three violations at a glance.", headers: ["Violation", "What fails", "Effect", "Detect / fix"], rows: [["Heteroskedasticity", "Constant error variance", "Wrong (often small) SEs → inflated t", "Breusch–Pagan / robust SEs"], ["Serial correlation", "Uncorrelated errors", "Wrong (often small) SEs → inflated t/F", "Durbin–Watson / Newey–West SEs"], ["Multicollinearity", "Independent X's uncorrelated", "Inflated SEs → significant F, insignificant t", "Drop a redundant variable"]] } },
        ],
      },
      {
        heading: "7. Model specification and qualitative variables",
        blocks: [
          { kind: "p", text: "Beyond the three violations, a model can be MISSPECIFIED — built wrong. Common errors: OMITTING a relevant variable (biases the included coefficients if the omitted one is correlated with them); using the wrong FUNCTIONAL FORM (e.g., a linear model when the relationship is nonlinear, or failing to take logs); including variables measured with error; and POOLING data that shouldn't be pooled. Specification errors are more serious than the three violations because they can BIAS the coefficients, not just the standard errors — and no robust-SE fix repairs a biased model." },
          { kind: "p", text: "Two modeling tools recur. DUMMY (indicator) VARIABLES capture qualitative conditions (0/1 for, say, 'recession' or an industry); with n categories you use n − 1 dummies to avoid perfect multicollinearity (the 'dummy variable trap'), and each dummy's coefficient is the difference from the omitted base category. When the DEPENDENT variable is qualitative (e.g., default / no-default), ordinary regression is inappropriate; use a LOGIT or PROBIT model, which estimates a probability bounded between 0 and 1. Know what these are for, not their estimation math, at this level." },
          { kind: "callout", label: "How the exam plays this", body: "An item set hands you regression output and a scenario. Your job: interpret the partial slopes, judge significance (t and F), compare models (adjusted R²), and — the high-value move — detect a violation from clues ('variance rises with size' → heteroskedasticity; time-series with DW near 0 → serial correlation; high R² but no significant t's → multicollinearity) and state the correct consequence and fix." },
        ],
      },
    ],
    keyTerms: [
      { term: "Multiple regression", def: "Y = b₀ + b₁X₁ + … + bₖXₖ + ε; explains Y with several variables." },
      { term: "Partial slope coefficient", def: "Effect of one X on Y holding the other independent variables constant." },
      { term: "Regression assumptions", def: "Linearity, no perfect multicollinearity, zero-mean errors, homoskedasticity, no serial correlation, normal errors." },
      { term: "t-test (coefficient)", def: "b̂ ÷ s(b̂); tests whether one coefficient differs from zero (df = n − k − 1)." },
      { term: "F-test", def: "MSR ÷ MSE; tests whether all slope coefficients are jointly zero." },
      { term: "ANOVA decomposition", def: "SST = SSR + SSE; R² = SSR ÷ SST." },
      { term: "R² vs adjusted R²", def: "Fit measure that always rises with variables vs one penalized for extra variables (use to compare models)." },
      { term: "Standard error of the estimate (SEE)", def: "√MSE; the typical size of the residuals." },
      { term: "Heteroskedasticity", def: "Non-constant error variance; conditional form inflates t-stats; biases SEs, not coefficients." },
      { term: "Breusch–Pagan test", def: "Tests for conditional heteroskedasticity by regressing squared residuals on the X's." },
      { term: "Serial correlation", def: "Correlated errors (common in time series); positive form inflates t/F via too-small SEs." },
      { term: "Durbin–Watson", def: "DW ≈ 2(1−r); ≈2 no autocorrelation, →0 positive, →4 negative; invalid with a lagged dependent variable." },
      { term: "Multicollinearity", def: "Highly correlated independent variables; signature is significant F but insignificant t's." },
      { term: "Robust standard errors", def: "Heteroskedasticity/serial-correlation-consistent SEs (White, Newey–West) that fix inference." },
      { term: "Specification error", def: "Wrong model (omitted variable, wrong form) — can BIAS coefficients, not just SEs." },
      { term: "Dummy variable", def: "0/1 indicator for a qualitative condition; use n−1 for n categories." },
      { term: "Logit/probit", def: "Models for a qualitative (binary) dependent variable, estimating a bounded probability." },
    ],
    takeaways: [
      "Each slope is a partial effect (holding other X's constant); the intercept anchors at all-X's-zero.",
      "Test one coefficient with t, all slopes jointly with F; ANOVA gives R², and adjusted R² is what compares models of different size.",
      "Heteroskedasticity and serial correlation leave coefficients unbiased but corrupt standard errors (usually too small → inflated t); fix with robust SEs.",
      "Heteroskedasticity → Breusch–Pagan; serial correlation → Durbin–Watson (DW≈2(1−r), ≈2 is clean); both detectable from vignette clues.",
      "Multicollinearity's signature is high R²/significant F with insignificant individual t's; fix by dropping a redundant variable.",
      "Specification errors (omitted variables, wrong form) can BIAS coefficients — more serious than the three violations and not fixed by robust SEs.",
    ],
  },
  {
    id: "cfa-l2-timeseries",
    examSlug: "cfa-l2",
    topicId: "quant",
    topicName: "Quantitative Methods",
    title: "Time-Series Analysis: Trends, Autoregression, and Unit Roots",
    readingMinutes: 82,
    summary:
      "Modeling a variable against its own past — linear and log-linear trends, autoregressive models and covariance stationarity, mean reversion, the random walk and unit-root problem (and the first-difference fix), seasonality, and ARCH.",
    intro:
      "Time-series analysis models a variable using its OWN history — last quarter's sales to forecast this quarter's. It is distinct from cross-sectional regression because observations are ordered in time and typically dependent, which breaks the independence assumptions and introduces problems unique to time series: trends that must be modeled, the requirement of covariance stationarity, and the treacherous unit-root (random walk) case that makes naive regression spurious. This chapter builds trend models, autoregressive models and the stationarity they require, mean reversion, the random walk and its first-difference cure, seasonality, and ARCH (changing volatility). The exam rewards knowing which model fits the data and how to test that the model is valid.",
    sections: [
      {
        heading: "1. Trend models",
        blocks: [
          { kind: "p", text: "The simplest time-series model fits a TREND. A LINEAR trend model regresses the variable on time (y = b₀ + b₁t + ε), appropriate when the variable grows by a roughly CONSTANT AMOUNT each period. A LOG-LINEAR trend model regresses the natural log of the variable on time (ln y = b₀ + b₁t + ε), appropriate when the variable grows at a roughly constant RATE (exponential growth) — the slope is then the continuously compounded growth rate. Financial series that compound (prices, GDP) usually fit the log-linear form better; a giveaway is that a linear model's residuals show persistent runs (serial correlation), signaling the wrong functional form." },
          { kind: "p", text: "The fatal flaw of trend models is that they assume the residuals are independent. When residuals are serially correlated (which the Durbin–Watson test detects), the trend model is misspecified and you should move to an autoregressive model. So the first diagnostic in any time series is: does a trend fit, and are its residuals clean?" },
        ],
      },
      {
        heading: "2. Autoregressive (AR) models and covariance stationarity",
        blocks: [
          { kind: "p", text: "An AUTOREGRESSIVE model predicts a variable from its own LAGGED values. An AR(1) model is xₜ = b₀ + b₁xₜ₋₁ + εₜ; an AR(p) uses p lags. AR models can only be validly estimated if the series is COVARIANCE STATIONARY — its mean and variance are constant over time and its covariance with lagged values depends only on the lag, not on time. If a series isn't stationary, the regression statistics are unreliable (the spurious-regression problem). Most price levels are NOT stationary; returns and differences usually are." },
          { kind: "p", text: "To validate an AR model, check that the RESIDUALS show no serial correlation: test whether the autocorrelations of the residuals are significantly different from zero (using a t-test on each autocorrelation, df-based). If a residual autocorrelation is significant, the model is misspecified — add the corresponding lag. A correctly specified AR model has white-noise residuals." },
          { kind: "formula", formula: { label: "AR(1) mean reversion level", expr: "Mean-reverting level = b₀ ÷ (1 − b₁)", note: "A covariance-stationary AR(1) reverts to this level: if xₜ is above it the model predicts a fall, if below, a rise. Requires |b₁| < 1." } },
          { kind: "example", example: { title: "Finding the mean-reverting level", prompt: "An AR(1) model estimates xₜ = 0.6 + 0.75·xₜ₋₁. What is the mean-reverting level, and what does the model predict if the current value is 3.0?", steps: ["Mean-reverting level = b₀ ÷ (1 − b₁) = 0.6 ÷ (1 − 0.75) = 0.6 ÷ 0.25 = 2.4.", "Current value 3.0 is ABOVE 2.4, so the model predicts the next value falls toward 2.4.", "Next value = 0.6 + 0.75(3.0) = 0.6 + 2.25 = 2.85."], answer: "The mean-reverting level is 2.4. Since 3.0 exceeds it, the forecast (2.85) is lower — pulling back toward the long-run mean. Mean reversion is the defining behavior of a stationary AR(1) with |b₁| < 1." } },
        ],
      },
      {
        heading: "3. Random walks and unit roots",
        blocks: [
          { kind: "p", text: "A RANDOM WALK is an AR(1) with b₁ = 1 (and b₀ = 0): xₜ = xₜ₋₁ + εₜ — the best forecast of tomorrow is today, plus unpredictable noise. A random walk with a constant b₀ added is a random walk WITH DRIFT. The critical problem: a random walk is NOT covariance stationary (its variance grows without bound over time), so the mean-reverting formula blows up (b₁ = 1 makes the denominator zero) and OLS estimates are unreliable. A series with b₁ = 1 is said to have a UNIT ROOT." },
          { kind: "p", text: "You cannot reliably detect a unit root by estimating the AR(1) and seeing if b₁ ≈ 1 (the t-test is invalid under a unit root). The proper test is the DICKEY–FULLER test. The CURE for a unit root is FIRST-DIFFERENCING: model the change (yₜ = xₜ − xₜ₋₁) instead of the level. The first difference of a random walk is stationary (it's just the white-noise εₜ), so you can model it. Prices have unit roots; returns (their differences) are typically stationary — which is exactly why analysis is done on returns, not price levels." },
          { kind: "callout", label: "The spurious-regression danger", body: "Regressing one nonstationary (unit-root) series on another can produce a high R² and 'significant' coefficients that are entirely spurious — a statistical mirage. This is why testing for stationarity FIRST is non-negotiable in time series. If both series have unit roots, check for COINTEGRATION (a stable long-run relationship); if they are cointegrated, the regression is meaningful, otherwise first-difference both." },
        ],
      },
      {
        heading: "4. Seasonality and ARCH",
        blocks: [
          { kind: "p", text: "SEASONALITY shows up when a series has a regular periodic pattern (retail sales spike each Q4). The tell is a significant autocorrelation of the residuals at the SEASONAL lag (lag 4 for quarterly data, lag 12 for monthly). The fix is to add a SEASONAL LAG term to the model (e.g., include xₜ₋₄ in a quarterly model). Ignoring seasonality leaves serially correlated residuals and a misspecified model." },
          { kind: "p", text: "ARCH (autoregressive conditional heteroskedasticity) addresses the common finance fact that VOLATILITY clusters — large changes follow large changes. If a series exhibits ARCH, the error variance in one period depends on the squared error in the prior period, so the variance is predictable even if the level isn't. You test for ARCH by regressing squared residuals on their own lag; if that lag is significant, ARCH is present, and you can MODEL the changing variance (useful for forecasting risk/volatility, as in value-at-risk). ARCH is about the predictability of VARIANCE, distinct from the level forecasting of AR models." },
        ],
      },
      {
        heading: "5. Choosing and validating a model",
        blocks: [
          { kind: "p", text: "With several candidate models, compare their forecasting accuracy with the ROOT MEAN SQUARED ERROR (RMSE) of their forecast errors — the lower the RMSE, the better the predictions. Crucially, judge models on OUT-OF-SAMPLE performance (data not used to fit them), because in-sample fit can be inflated by overfitting. A model can fit history beautifully and forecast poorly." },
          { kind: "p", text: "The workflow ties the chapter together: plot the data and decide if a trend fits; if residuals are serially correlated, move to an AR model; confirm the series is covariance stationary (test for a unit root with Dickey–Fuller, and first-difference if needed); check residual autocorrelations to validate the AR model and add seasonal lags if a seasonal autocorrelation is significant; test for ARCH if volatility seems to cluster; and compare finalists by out-of-sample RMSE. The recurring exam theme is validity — a model's forecasts are only as trustworthy as the stationarity and clean-residual conditions behind it." },
        ],
      },
    ],
    keyTerms: [
      { term: "Linear vs log-linear trend", def: "Constant amount of growth per period vs constant rate (exponential); log-linear slope is the growth rate." },
      { term: "Autoregressive (AR) model", def: "Predicts a variable from its own lagged values: xₜ = b₀ + b₁xₜ₋₁ + …" },
      { term: "Covariance stationarity", def: "Constant mean and variance, and covariance depending only on lag; required for valid AR estimation." },
      { term: "Residual autocorrelation test", def: "Check that residual autocorrelations are insignificant; a significant one means add that lag." },
      { term: "Mean reversion (AR(1))", def: "Reverts to b₀/(1−b₁); above it predicts a fall, below it a rise (needs |b₁|<1)." },
      { term: "Random walk", def: "AR(1) with b₁ = 1; best forecast is the last value; not stationary." },
      { term: "Random walk with drift", def: "Random walk plus a constant; trends while remaining nonstationary." },
      { term: "Unit root", def: "b₁ = 1; makes the series nonstationary and OLS unreliable." },
      { term: "Dickey–Fuller test", def: "The valid test for a unit root (the ordinary t-test is invalid under one)." },
      { term: "First-differencing", def: "Modeling the change (xₜ − xₜ₋₁) to make a unit-root series stationary." },
      { term: "Spurious regression", def: "High R² between unrelated nonstationary series; why stationarity must be checked first." },
      { term: "Cointegration", def: "A stable long-run relationship between unit-root series that makes their regression meaningful." },
      { term: "Seasonality", def: "Periodic pattern shown by a significant autocorrelation at the seasonal lag; fixed with a seasonal lag term." },
      { term: "ARCH", def: "Conditional heteroskedasticity — error variance depends on the prior squared error; models volatility clustering." },
      { term: "RMSE / out-of-sample", def: "Root mean squared forecast error for comparing models; judge on data not used to fit." },
    ],
    takeaways: [
      "Use a linear trend for constant-amount growth, log-linear for constant-rate (exponential) growth; serially correlated residuals mean the trend model is wrong.",
      "AR models regress a variable on its own lags and require covariance stationarity; validate by confirming residual autocorrelations are insignificant.",
      "A stationary AR(1) reverts to b₀/(1−b₁); a random walk (b₁=1, a unit root) is nonstationary and breaks the math.",
      "Detect a unit root with Dickey–Fuller (not a plain t-test) and cure it by first-differencing — which is why returns, not price levels, are modeled.",
      "Add a seasonal lag when a seasonal-lag residual autocorrelation is significant; test for ARCH when volatility clusters (variance predictability).",
      "Compare models by out-of-sample RMSE — great in-sample fit can mask poor forecasting from overfitting.",
    ],
  },

  {
    id: "cfa-l2-equityval",
    examSlug: "cfa-l2",
    topicId: "equity",
    topicName: "Equity Valuation",
    title: "Equity Valuation: Dividend Discount, Free Cash Flow, Residual Income, and Multiples",
    readingMinutes: 94,
    summary:
      "The heaviest Level II block — every valuation engine and when each is the right tool: the required return, the DDM family, FCFF/FCFE models, residual income, and price/enterprise multiples, with the conversion formulas and selection logic the item sets demand.",
    intro:
      "Level II is where the program stops asking what things are and starts asking what they're WORTH, and equity valuation is consistently the most heavily weighted topic. The item sets are merciless about one thing: you must know not just how to run each model but WHICH model a vignette is steering you toward and why. This chapter builds the full toolkit — the required return on equity, the dividend discount models, free cash flow to the firm and to equity (with every conversion the exam loves), residual income, and the multiples used for relative valuation — and, just as importantly, the selection logic that maps a company's facts to the right engine. Work each formula until it's reflex; at Level II, valuation is computed, not just read.",
    sections: [
      {
        heading: "1. Intrinsic value and the required return",
        blocks: [
          { kind: "p", text: "All intrinsic valuation rests on one idea: an asset is worth the present value of its expected future cash flows, discounted at a rate reflecting their risk. The models differ only in WHICH cash flow they discount (dividends, free cash flow, or residual income) and how they handle growth. Before any of them runs you need the discount rate — the REQUIRED RETURN ON EQUITY." },
          { kind: "p", text: "Three routes to that required return appear in the item sets. The CAPM (r = rf + β × equity risk premium) dominates. MULTIFACTOR models (e.g., Fama–French, adding size and value premia to the market factor) refine it. For private or thinly traded firms, the BUILD-UP method adds premia (size, company-specific) to a base rate without using beta, since there's no reliable price series to estimate beta from. The EQUITY RISK PREMIUM itself can be estimated historically (average realized excess returns — vulnerable to the period chosen) or forward-looking (the Gordon-growth estimate: index dividend yield + expected long-term growth − the long-term government bond yield)." },
          { kind: "callout", label: "Required vs expected return — the alpha gap", body: "Distinguish the REQUIRED return (what the risk justifies) from the EXPECTED return given today's price (the IRR the current price implies). A stock priced below intrinsic value has an expected return ABOVE its required return — that gap is the analyst's alpha thesis, and it closes as price converges to value." },
        ],
      },
      {
        heading: "2. The dividend discount model family",
        blocks: [
          { kind: "p", text: "The DDM discounts expected DIVIDENDS, and it fits companies that pay meaningful, stable dividends tied to earnings (mature firms, utilities, large banks), valued from a minority shareholder's perspective (who can't redirect the firm's cash). The simplest case — a dividend growing at a constant rate forever — is the GORDON GROWTH MODEL." },
          { kind: "formula", formula: { label: "Gordon growth model", expr: "V₀ = D₁ ÷ (r − g) = D₀(1 + g) ÷ (r − g)", note: "Requires r > g and a perpetual constant growth rate. Hypersensitive to the spread (r − g) — best for stable, mature payers." } },
          { kind: "p", text: "Few firms grow at one constant rate forever, so MULTISTAGE models chain phases: discount the dividends of an explicit high-growth period individually, then apply the Gordon model to a TERMINAL VALUE capturing the mature phase, and discount that terminal value back. The H-MODEL is a shortcut for growth that declines LINEARLY from a high initial rate to a stable long-run rate over a period; H equals half that transition period." },
          { kind: "formula", formula: { label: "Two-stage terminal value and the H-model", expr: "Terminal value at year n = Dₙ₊₁ ÷ (r − g_L)      H-model: V₀ = [D₀(1+g_L) + D₀·H·(g_S − g_L)] ÷ (r − g_L)", note: "g_S is the initial (short-run) growth rate, g_L the long-run rate, H = half the high-growth-to-stable transition period in years." } },
          { kind: "example", example: { title: "Two-stage DDM", prompt: "A firm just paid a $2.00 dividend (D₀). Dividends grow 15% for two years, then 5% forever. Required return is 10%. Value the stock.", steps: ["D₁ = 2.00(1.15) = 2.30; D₂ = 2.30(1.15) = 2.645; D₃ = 2.645(1.05) = 2.777.", "Terminal value at end of year 2 = D₃ ÷ (r − g_L) = 2.777 ÷ (0.10 − 0.05) = 55.54.", "Discount: PV = 2.30/1.10 + 2.645/1.10² + 55.54/1.10² = 2.091 + 2.186 + 45.90.", "= 50.18."], answer: "About $50.18. Notice the terminal value (~$45.90 of present value) dominates — typical of multistage models, which is why the long-run growth assumption matters enormously and small changes in g_L swing the answer." } },
        ],
      },
      {
        heading: "3. Free cash flow models (FCFF and FCFE)",
        blocks: [
          { kind: "p", text: "Many firms pay no dividends, or pay dividends unrelated to their capacity to pay — so analysts value the cash flow the firm actually GENERATES and could distribute. FREE CASH FLOW TO THE FIRM (FCFF) is the cash available to ALL capital providers (debt and equity) after operating expenses, taxes, and reinvestment. FREE CASH FLOW TO EQUITY (FCFE) is what's left for EQUITY holders after also paying debt holders. FCF models suit non-dividend payers, firms with FCF that tracks profitability, and an investor taking a CONTROL perspective (who could change the payout)." },
          { kind: "formula", formula: { label: "FCFF, FCFE, and their link", expr: "FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv      FCFE = FCFF − Int(1 − t) + Net Borrowing", note: "NCC = non-cash charges (depreciation); FCInv = fixed-capital investment (capex); WCInv = working-capital investment. FCFE adds back the after-tax interest the firm subtracted (because equity doesn't pay it) and adds net new borrowing." } },
          { kind: "p", text: "The discounting must MATCH the cash flow. Discount FCFF at the WACC (the blended cost of all capital) to get the value of the whole FIRM — then subtract debt to reach equity value. Discount FCFE at the required return on EQUITY to get equity value directly. Mixing them (e.g., discounting FCFE at WACC) is a classic error. FCFF can also be built from EBIT or CFO; know that CFO already includes after-tax interest treatment, so the add-backs differ by starting point." },
          { kind: "example", example: { title: "From FCFF to FCFE", prompt: "A firm's FCFF is $500M. Interest expense is $80M, the tax rate is 25%, and net new borrowing is $30M. What is FCFE?", steps: ["After-tax interest = 80 × (1 − 0.25) = $60M.", "FCFE = FCFF − after-tax interest + net borrowing = 500 − 60 + 30.", "= $470M."], answer: "FCFE = $470M. We subtract the after-tax interest (it belongs to debt holders, not equity) and add the net borrowing (cash equity holders received from new debt). FCFE is the cash genuinely available to shareholders." } },
        ],
      },
      {
        heading: "4. The residual income model",
        blocks: [
          { kind: "p", text: "RESIDUAL INCOME (RI) recognizes that equity capital isn't free: a firm only creates value when it earns MORE than the required return on its equity. RI for a period is net income minus an EQUITY CHARGE (the book value of equity times the required return on equity). The model values a stock as its current BOOK VALUE plus the present value of all future residual income." },
          { kind: "formula", formula: { label: "Residual income and value", expr: "RIₜ = Net incomeₜ − (r × Book valueₜ₋₁)      V₀ = Book value₀ + Σ [ RIₜ ÷ (1 + r)ᵗ ]", note: "If a firm earns exactly its required return, RI = 0 and the stock is worth book value; positive RI adds value above book." } },
          { kind: "p", text: "RI is powerful where DDM and FCF struggle: firms that pay no dividends and have negative near-term free cash flow (growth firms). Its big advantage is that it recognizes value EARLIER — most of the value sits in the current book value and near-term RI rather than a distant terminal value, making it less sensitive to terminal-value guesswork. Its key assumption is CLEAN SURPLUS accounting (all changes in equity except transactions with owners flow through the income statement); violations distort it. RI ties valuation directly to economic value added — earning above the cost of equity." },
          { kind: "example", example: { title: "Residual income for one year", prompt: "A firm has beginning book value of equity of $800M, net income of $120M, and a required return on equity of 12%. What is its residual income?", steps: ["Equity charge = r × book value = 0.12 × 800 = $96M.", "RI = net income − equity charge = 120 − 96.", "= $24M."], answer: "RI = $24M. The firm earned $120M on $800M of equity (a 15% ROE) when only 12% was required, so it created $24M of value above the cost of its equity. A firm earning exactly 12% would have zero RI and be worth its book value." } },
        ],
      },
      {
        heading: "5. Market-based valuation: multiples",
        blocks: [
          { kind: "p", text: "RELATIVE valuation prices a stock against a fundamental rather than discounting cash flows. The most common is the PRICE-TO-EARNINGS (P/E) ratio. There are two ways to use a multiple: the METHOD OF COMPARABLES (is this P/E high or low versus peers, the industry, or its own history?) and the JUSTIFIED multiple derived from fundamentals. The justified leading P/E falls straight out of the Gordon model, linking multiples back to discounted value." },
          { kind: "formula", formula: { label: "Justified leading P/E (from the Gordon model)", expr: "Leading P/E = Payout ratio ÷ (r − g)", note: "Divide the Gordon model by next year's earnings. Higher payout and higher growth raise the justified P/E; higher required return lowers it." } },
          { kind: "example", example: { title: "Justified P/E", prompt: "A mature firm pays out 40% of earnings, grows 4% per year, and has a required return of 10%. What leading P/E is justified by its fundamentals?", steps: ["Justified leading P/E = payout ÷ (r − g) = 0.40 ÷ (0.10 − 0.04).", "= 0.40 ÷ 0.06.", "≈ 6.7×."], answer: "About 6.7×. If the stock actually trades at 10× forward earnings, it may be overvalued relative to these fundamentals (or the market expects higher growth than 4%). The justified P/E turns 'is this multiple reasonable?' into a disciplined calculation." } },
          { kind: "p", text: "Other multiples suit other situations: PRICE-TO-BOOK (P/B) for financials and asset-heavy firms (and where earnings are volatile); PRICE-TO-SALES (P/S) for firms with no earnings yet (sales are harder to manipulate); PRICE-TO-CASH-FLOW; and ENTERPRISE-VALUE multiples like EV/EBITDA, which value the whole firm (equity + debt − cash) against operating earnings and so compare firms with DIFFERENT capital structures fairly. The PEG ratio (P/E ÷ growth) adjusts P/E for growth. Multiples are fast and market-based but carry pitfalls: trailing P/E is distorted by transitory or cyclical earnings (a cyclical at peak earnings looks 'cheap'), negative earnings make P/E meaningless, and a whole comparable set can be mispriced together." },
        ],
      },
      {
        heading: "6. Choosing the right model",
        blocks: [
          { kind: "bullets", items: [
            "DDM: mature, stable dividend payer whose dividends track earnings; minority-shareholder perspective.",
            "FCFE/FCFF: no dividends or dividends ≠ capacity to pay; FCF tracks profitability; control perspective. Discount FCFF at WACC (then subtract debt), FCFE at the cost of equity.",
            "Residual income: no dividends and negative near-term FCF (growth firms); clean-surplus accounting holds; want value recognized early, less terminal-value dependence.",
            "Multiples: quick relative checks, peer comparison, or sanity-checking a DCF — but watch cyclical/negative earnings and mispriced comparables.",
          ] },
          { kind: "p", text: "The unifying logic: every model is the present value of a cash stream at a risk-appropriate rate, and they should agree if applied consistently with the same assumptions — the choice is about which stream is most reliably estimable for THIS company. The item sets reward matching the model to the firm (a dividend-less, cash-burning growth company screams residual income, not DDM), running the conversion formulas cleanly (FCFF↔FCFE, justified P/E), and interpreting the output against the market price to form a buy/sell view. Equity valuation is the synthesis of everything else in the program — the cost of capital from corporate issuers, the growth from industry analysis, the statements from FRA — into a single number to compare against price." },
        ],
      },
    ],
    keyTerms: [
      { term: "Required return on equity", def: "The discount rate for equity cash flows: CAPM, multifactor, or build-up (private firms)." },
      { term: "Equity risk premium", def: "Excess of equity over risk-free return; estimated historically or forward (Gordon)." },
      { term: "Required vs expected return", def: "What risk justifies vs the IRR today's price implies; their gap is alpha." },
      { term: "Dividend discount model (DDM)", def: "Value = PV of expected dividends; fits stable dividend payers." },
      { term: "Gordon growth model", def: "V₀ = D₁/(r − g); constant perpetual growth; very sensitive to (r − g)." },
      { term: "Multistage DDM / terminal value", def: "Explicit high-growth dividends plus a Gordon terminal value discounted back." },
      { term: "H-model", def: "V₀ = [D₀(1+g_L) + D₀·H·(g_S − g_L)]/(r − g_L); linearly declining growth, H = half the transition." },
      { term: "FCFF", def: "Cash to all capital providers: NI + NCC + Int(1−t) − FCInv − WCInv; discount at WACC for firm value." },
      { term: "FCFE", def: "Cash to equity: FCFF − Int(1−t) + net borrowing; discount at the cost of equity for equity value." },
      { term: "FCF model fit", def: "No/irregular dividends, FCF tracks profitability, control perspective." },
      { term: "Residual income", def: "NI − (r × beginning book equity); value created above the cost of equity." },
      { term: "Residual income value", def: "V₀ = book value + PV of future RI; recognizes value early, less terminal-value reliant." },
      { term: "Clean surplus", def: "All equity changes (except owner transactions) flow through income; required for RI." },
      { term: "Method of comparables vs justified", def: "Multiple vs peers/history vs a multiple derived from fundamentals." },
      { term: "Justified leading P/E", def: "Payout ÷ (r − g); the P/E fundamentals support." },
      { term: "Price multiples", def: "P/E, P/B, P/S, P/CF, PEG — equity-value-based relative measures." },
      { term: "EV/EBITDA", def: "Enterprise value to operating earnings; compares firms across capital structures." },
      { term: "Multiples pitfalls", def: "Cyclical/transitory earnings, negative earnings (P/E meaningless), mispriced comparable sets." },
    ],
    takeaways: [
      "Every model discounts a cash stream at a risk-appropriate required return (CAPM/multifactor/build-up); pick the stream most reliably estimable for the firm.",
      "DDM fits stable payers; Gordon V₀ = D₁/(r−g); multistage models lean heavily on the terminal value and long-run growth.",
      "FCFF (to all capital, discount at WACC, subtract debt) vs FCFE (to equity, discount at cost of equity); FCFE = FCFF − Int(1−t) + net borrowing — never mix the rate with the flow.",
      "Residual income (NI − equity charge; value = book + PV of RI) shines for non-dividend, negative-FCF growth firms and recognizes value early.",
      "Justified leading P/E = payout/(r−g) ties multiples to the DDM; use P/B, P/S, EV/EBITDA where earnings are volatile, absent, or capital structures differ.",
      "Match the model to the company, run the conversions cleanly, and read the result against market price to form the buy/sell view.",
    ],
  },

  {
    id: "cfa-l2-intercorp",
    examSlug: "cfa-l2",
    topicId: "fra",
    topicName: "Financial Reporting & Analysis",
    title: "Intercorporate Investments and Business Combinations",
    readingMinutes: 86,
    summary:
      "How the accounting changes as ownership rises — passive financial assets, the equity method for significant influence, and full consolidation under the acquisition method — plus the goodwill and analytical effects that make two identical economics report very different statements.",
    intro:
      "When one company invests in another, the accounting is driven entirely by how much INFLUENCE the stake conveys, and Level II tests the bright lines and their consequences relentlessly. The same underlying economics can produce wildly different reported revenue, assets, leverage, and margins depending on whether the holding is a passive financial asset, an equity-method associate, or a consolidated subsidiary. This chapter builds the influence ladder, the mechanics of each method (with the equity-method and acquisition-method math), goodwill, and — the part the item sets love — the analytical differences between the equity method and consolidation. Master the comparison: same net income, very different ratios.",
    sections: [
      {
        heading: "1. The influence ladder",
        blocks: [
          { kind: "p", text: "Ownership percentage is a guideline for the level of INFLUENCE, and influence dictates the method. Below ~20% (no significant influence): a FINANCIAL ASSET. From ~20% to 50% (significant influence): the EQUITY METHOD. Above 50% (control): CONSOLIDATION via the acquisition method. Joint ventures (joint control) use the equity method under IFRS. The thresholds are presumptions — actual influence (board seats, technology dependence) can override the percentage." },
          { kind: "p", text: "FINANCIAL ASSETS (passive stakes) are themselves classified by how they're measured. Under IFRS 9, debt held to collect contractual cash flows is at AMORTIZED COST; equity or debt held for trading is at FAIR VALUE THROUGH PROFIT OR LOSS (FVPL, with unrealized gains/losses in net income); and certain equity investments can be elected at FAIR VALUE THROUGH OCI (FVOCI, with unrealized gains/losses in other comprehensive income, not recycled to income). Dividends and interest hit income regardless. The classification changes WHERE the volatility shows up — net income vs OCI — a frequent analytical point." },
          { kind: "table", table: { caption: "Table 1 — Influence drives the method.", headers: ["Ownership", "Influence", "Method"], rows: [["< 20%", "None (passive)", "Financial asset (fair value or amortized cost)"], ["20–50%", "Significant", "Equity method (one-line)"], ["> 50%", "Control", "Consolidation (acquisition method) + NCI"]] } },
        ],
      },
      {
        heading: "2. The equity method",
        blocks: [
          { kind: "p", text: "Under the EQUITY METHOD, the investment is recorded at cost and then moves with the investee: INCREASED by the investor's proportional share of the investee's net income and DECREASED by its share of dividends received (a return OF investment, not income) and by amortization of any excess purchase price assigned to finite-life assets. The investee is NOT consolidated — only the investor's share of net income appears, on a single line ('one-line consolidation'). The investment is reported as one line on the balance sheet, and the share of income as one line on the income statement." },
          { kind: "formula", formula: { label: "Equity-method carrying value", expr: "Carrying value = Cost + Σ(share of investee net income) − Σ(share of dividends) − Σ(excess-price amortization)", note: "Excess of purchase price over the investor's share of the fair value of net assets that relates to finite-life assets (e.g., a building) is amortized, reducing reported equity income; any portion that is goodwill is not amortized." } },
          { kind: "example", example: { title: "Equity-method carrying value", prompt: "An investor buys 30% of a company for $500. In the year the investee earns $200 and pays $60 in total dividends. Ignore any excess-price amortization. What is the year-end carrying value and the equity income reported?", steps: ["Share of earnings: 30% × $200 = +$60 (this is the equity income on the income statement).", "Share of dividends: 30% × $60 = −$18.", "Carrying value = 500 + 60 − 18 = $542."], answer: "Carrying value $542; equity income $60. Note the investor reports $60 of income but received only $18 of cash — and none of the investee's revenue, assets, or debt appears on the investor's statements. That gap is what makes the equity method flatter margins and lower leverage than consolidation." } },
          { kind: "callout", label: "Impairment & losses", body: "Equity-method goodwill is NOT separately tested; the whole investment is tested for impairment as one unit. If the investee's losses reduce the carrying value to zero, the investor normally stops recognizing further losses (the investment can't go negative) unless it has guaranteed obligations." },
        ],
      },
      {
        heading: "3. Business combinations: the acquisition method",
        blocks: [
          { kind: "p", text: "When the investor obtains CONTROL (typically >50%), it CONSOLIDATES using the ACQUISITION METHOD: it combines 100% of the subsidiary's assets, liabilities, revenues, and expenses with its own, line by line, after restating the acquiree's identifiable assets and liabilities to FAIR VALUE at the acquisition date. The portion of the subsidiary the parent does NOT own is reported as NON-CONTROLLING INTEREST (NCI) within equity, and the subsidiary's net income is split between the parent and NCI. Intercompany transactions (sales, receivables/payables between parent and sub) are ELIMINATED so the group isn't double-counted." },
          { kind: "p", text: "GOODWILL arises when the price paid exceeds the fair value of the identifiable net assets acquired — it captures unidentifiable value (assembled workforce, synergies, reputation). There are two measurement bases: FULL goodwill (IFRS option and US GAAP standard for public) measures goodwill on 100% of the entity including the NCI's share; PARTIAL goodwill (an IFRS option) measures only the parent's share. Goodwill is never amortized — it sits on the balance sheet and is tested annually for IMPAIRMENT, with a write-down hitting income when its value falls. A bargain purchase (price below fair value of net assets) produces a gain, not negative goodwill on the balance sheet." },
          { kind: "formula", formula: { label: "Goodwill (full vs partial)", expr: "Full goodwill = Fair value of entire entity − FV of net identifiable assets      Partial goodwill = Purchase price − (% acquired × FV of net identifiable assets)", note: "Goodwill = excess of consideration over the fair value of identifiable net assets; not amortized, only impairment-tested." } },
          { kind: "example", example: { title: "Goodwill in an acquisition", prompt: "A parent buys 100% of a target for $900M. The target's identifiable assets have a fair value of $1,000M and its liabilities $300M. How much goodwill is recognized?", steps: ["Fair value of net identifiable assets = 1,000 − 300 = $700M.", "Goodwill = purchase price − FV of net identifiable assets = 900 − 700.", "= $200M."], answer: "$200M of goodwill, recorded as an unamortized asset subject to annual impairment testing. If the parent had bought only 80%, the remaining 20% would appear as non-controlling interest in equity, and goodwill would depend on the full vs partial choice." } },
        ],
      },
      {
        heading: "4. The analytical payoff: equity method vs consolidation",
        blocks: [
          { kind: "p", text: "Here is the most tested idea in the topic. The equity method and consolidation report the SAME NET INCOME and the SAME equity (the parent's economic interest is identical) — but everything else differs. Consolidation grosses up the statements: it adds 100% of the subsidiary's REVENUE, ASSETS, and LIABILITIES, while the equity method keeps them off the parent's books entirely (just one net line each)." },
          { kind: "p", text: "The ratio consequences are systematic. Because consolidation inflates revenue and assets without changing net income or equity proportionally, the equity-method investor shows HIGHER net profit margin (less revenue for the same income), HIGHER asset turnover relative to... actually LOWER total assets, so different turnover, and crucially LOWER leverage and debt ratios (the subsidiary's debt isn't on its books). A company can therefore make its leverage look better by holding a stake at 49% (equity method) rather than 51% (consolidation), even with identical economics — which is exactly why analysts scrutinize the method and sometimes adjust. Net income and ROE numerator are the same; it's the denominators and the top line that move." },
          { kind: "callout", label: "The one-liner to remember", body: "Equity method = same net income and equity as consolidation, but the investee's revenue, assets, and debt are OFF the balance sheet. Result: equity method shows higher margins and lower leverage. Consolidation grosses everything up and adds NCI. When comparing companies, check which method each uses before trusting margin and leverage ratios." },
        ],
      },
    ],
    keyTerms: [
      { term: "Influence ladder", def: "<20% financial asset, 20–50% equity method, >50% consolidation." },
      { term: "Financial asset classification", def: "Amortized cost, FVPL (gains in income), or FVOCI (gains in OCI, not recycled)." },
      { term: "Equity method", def: "Investment at cost + share of income − dividends − excess-price amortization; one-line." },
      { term: "Equity-method carrying value", def: "Cost + cumulative share of earnings − share of dividends − amortization." },
      { term: "One-line consolidation", def: "Nickname for the equity method — investee shows as a single line each on the IS and BS." },
      { term: "Consolidation / acquisition method", def: "Combine 100% of a controlled subsidiary at fair value, line by line." },
      { term: "Non-controlling interest (NCI)", def: "The share of a consolidated subsidiary the parent doesn't own; reported in equity." },
      { term: "Intercompany elimination", def: "Removing parent–subsidiary transactions so the group isn't double-counted." },
      { term: "Goodwill", def: "Price paid minus fair value of identifiable net assets; unamortized, impairment-tested." },
      { term: "Full vs partial goodwill", def: "Goodwill on 100% of the entity (incl. NCI) vs only the parent's share (IFRS option)." },
      { term: "Bargain purchase", def: "Price below fair value of net assets; recognized as a gain." },
      { term: "Equity vs consolidation analytics", def: "Same net income/equity, but consolidation grosses up revenue/assets/debt → equity method shows higher margins, lower leverage." },
    ],
    takeaways: [
      "Influence sets the method: <20% financial asset (FVPL/FVOCI/amortized cost), 20–50% equity method, >50% consolidation.",
      "Equity method: carrying value = cost + share of earnings − share of dividends − excess-price amortization; only a net line appears.",
      "Acquisition method consolidates 100% at fair value, recognizes goodwill (full or partial) and NCI, and eliminates intercompany transactions.",
      "Goodwill is never amortized — only impairment-tested; a bargain purchase yields a gain.",
      "Equity method and consolidation report the SAME net income and equity, but the equity method keeps the investee's revenue/assets/debt off the books — so it shows higher margins and lower leverage.",
      "Always check which method a company uses before trusting its margin and leverage ratios.",
    ],
  },

  {
    id: "cfa-l2-pensions",
    examSlug: "cfa-l2",
    topicId: "fra",
    topicName: "Financial Reporting & Analysis",
    title: "Employee Compensation: Pensions and Share-Based Pay",
    readingMinutes: 82,
    summary:
      "How post-employment promises hit the statements — DB vs DC plans, the funded status on the balance sheet, the components of periodic pension cost and the IFRS/US GAAP split between income and OCI, the assumptions that flatter the numbers, and share-based compensation.",
    intro:
      "Promises to pay employees later — pensions and stock-based pay — create some of the most complex and judgment-laden numbers in financial reporting, and Level II tests them closely. A defined-benefit pension forces a company to estimate decades of future payments and the return on assets set aside to fund them, and small changes in those estimates swing both the balance sheet and earnings. This chapter builds the pension framework (DB vs DC, the funded status, the cost components and where IFRS and US GAAP put them), the assumptions analysts must scrutinize, the adjustments to make the numbers comparable, and share-based compensation.",
    sections: [
      {
        heading: "1. Defined contribution vs defined benefit",
        blocks: [
          { kind: "p", text: "In a DEFINED-CONTRIBUTION (DC) plan, the employer contributes a set amount (e.g., a 401(k) match) and bears NO further obligation — the employee bears all investment risk. The accounting is trivial: pension expense equals the contribution, and there's no plan asset or obligation on the employer's balance sheet. In a DEFINED-BENEFIT (DB) plan, the employer PROMISES a specified future benefit (e.g., 2% of final salary per year of service), so it bears the investment and actuarial risk — and the accounting is complex because it must estimate the obligation and the assets funding it. The analytical action is all in DB plans." },
          { kind: "p", text: "A DB plan has two sides. The OBLIGATION — the present value of promised future benefits, called the projected benefit obligation (PBO) under US GAAP or the present value of the defined benefit obligation under IFRS — is estimated using a DISCOUNT RATE and assumptions about salary growth and longevity. The PLAN ASSETS are the investments set aside to pay it. The FUNDED STATUS = plan assets − obligation: a positive number is an overfunded plan (a net asset), a negative number underfunded (a net liability). Modern standards put this net funded status directly on the balance sheet." },
        ],
      },
      {
        heading: "2. Components of periodic pension cost",
        blocks: [
          { kind: "p", text: "The annual cost of a DB plan has several pieces, and the exam's challenge is knowing which go to the income statement (P&L) versus other comprehensive income (OCI), which differs by standard. The economic pieces: SERVICE COST (the present value of benefits earned by employees this year — the core operating cost); INTEREST COST (the obligation grows as it gets one year closer to payment, at the discount rate); the RETURN ON PLAN ASSETS (offsets cost); PAST (prior) SERVICE COST from plan amendments; and ACTUARIAL GAINS/LOSSES from changes in assumptions (e.g., a new discount rate) or experience differing from expectations." },
          { kind: "p", text: "The TOTAL PERIODIC PENSION COST (TPPC) — the true economic cost — is the same under both standards: it equals employer contributions minus the change in the funded status over the period (equivalently, all the components using the ACTUAL return on assets). What differs is the SPLIT between P&L and OCI, which affects reported operating income." },
          { kind: "formula", formula: { label: "Total periodic pension cost (the economic measure)", expr: "TPPC = Employer contributions − (Ending funded status − Beginning funded status)", note: "Independent of the accounting standard. Equivalently: current service cost + interest cost − actual return on assets + past service cost + actuarial losses." } },
        ],
      },
      {
        heading: "3. IFRS vs US GAAP: where the components land",
        blocks: [
          { kind: "p", text: "Under IFRS, the periodic cost splits into two buckets. P&L gets SERVICE COST (current and past) plus NET INTEREST — interest on the NET pension liability/asset computed at the discount rate (so the same rate applies to both the obligation and the assets). OCI gets the REMEASUREMENTS — actuarial gains/losses and the difference between the actual return on assets and the return already counted in net interest — and these are NOT later recycled to income." },
          { kind: "p", text: "Under US GAAP, P&L pension expense includes service cost, interest cost (on the obligation), MINUS the EXPECTED return on plan assets (not the actual), plus amortization of past service cost and amortization of actuarial gains/losses (often via the 'corridor' method). The differences between actual and expected returns, and current-period actuarial gains/losses, go to OCI and are amortized into P&L over time. The use of an EXPECTED return — an assumption management chooses — is the key US GAAP wrinkle: a higher assumed return lowers reported pension expense, flattering operating income, which is why analysts often substitute the actual return." },
          { kind: "table", table: { caption: "Table 1 — Where DB pension components are reported.", headers: ["Component", "IFRS", "US GAAP"], rows: [["Service cost", "P&L", "P&L"], ["Interest / net interest", "P&L (net interest at discount rate)", "P&L (interest cost on obligation)"], ["Return on assets", "Net interest uses discount rate; rest to OCI", "Expected return reduces P&L; actual−expected to OCI"], ["Actuarial gains/losses", "OCI (not recycled)", "OCI, then amortized to P&L (corridor)"]] } },
        ],
      },
      {
        heading: "4. Assumptions and analytical adjustments",
        blocks: [
          { kind: "p", text: "Three assumptions drive DB numbers, and each is a lever management can pull. The DISCOUNT RATE: a HIGHER rate lowers the present value of the obligation (smaller PBO) and changes the interest cost — and can flatter the funded status. The EXPECTED RETURN on assets (US GAAP only): a HIGHER assumption lowers reported pension expense without changing economics — a classic earnings-quality red flag. The COMPENSATION GROWTH rate: a higher rate raises the obligation. Watch for assumptions drifting in convenient directions versus peers and bond yields." },
          { kind: "p", text: "Analysts therefore ADJUST the reported numbers to compare companies and reveal economics: (1) treat the net pension obligation as DEBT (it's a real claim) when assessing leverage; (2) reclassify the pension cost components — service cost is operating, interest cost is financing, the asset return is investing — rather than lumping them in operating expense; and (3) use the ACTUAL return on assets and the TPPC for the true economic cost, neutralizing the expected-return assumption. These adjustments can materially change operating margins and leverage for pension-heavy firms (legacy manufacturers, airlines)." },
        ],
      },
      {
        heading: "5. Share-based compensation",
        blocks: [
          { kind: "p", text: "SHARE-BASED compensation (stock options, restricted stock units) aligns employees with shareholders but is a real expense. The fair value of the award at the GRANT DATE is measured (options via a model like Black–Scholes) and expensed over the VESTING period. It's non-cash but dilutive, and it doesn't require a future cash outflow the way pensions do. Two analytical points: it reduces reported earnings while it's expensed, and outstanding options/RSUs increase the diluted share count (lowering diluted EPS). Stock options also create incentives (and accounting-choice pressures) that analysts weigh. Compared with pensions, share-based comp is simpler but its dilution and its treatment in cash-flow statements (often added back as a non-cash expense, inflating operating cash flow) deserve scrutiny." },
          { kind: "p", text: "Pulling the topic together: post-employment and equity compensation are where management estimates most directly shape reported profit and leverage. The analyst's job is to find the economic truth beneath the presentation — use the TPPC and actual returns, treat the net pension liability as debt, reclassify components by their nature, and account for option dilution and the non-cash add-back. These adjustments are exactly what L2 item sets ask you to perform." },
        ],
      },
    ],
    keyTerms: [
      { term: "Defined contribution (DC) plan", def: "Employer contributes a set amount, no further obligation; expense = contribution." },
      { term: "Defined benefit (DB) plan", def: "Employer promises a future benefit and bears investment/actuarial risk." },
      { term: "PBO / defined benefit obligation", def: "Present value of promised future benefits, using a discount rate and salary/longevity assumptions." },
      { term: "Plan assets", def: "Investments set aside to fund the obligation." },
      { term: "Funded status", def: "Plan assets − obligation; net asset (overfunded) or liability (underfunded) on the balance sheet." },
      { term: "Service cost", def: "PV of benefits earned this year; the core operating component (in P&L)." },
      { term: "Interest cost / net interest", def: "Obligation grows at the discount rate; IFRS uses net interest on the net liability." },
      { term: "Actuarial gains/losses", def: "From changed assumptions or experience; go to OCI (recycled under US GAAP)." },
      { term: "Total periodic pension cost (TPPC)", def: "Contributions − change in funded status; the standard-independent economic cost." },
      { term: "Expected vs actual return (US GAAP)", def: "US GAAP P&L uses expected return; a higher assumption lowers reported expense (quality flag)." },
      { term: "Discount rate effect", def: "A higher discount rate lowers the obligation; key sensitivity and lever." },
      { term: "Pension analytical adjustments", def: "Treat net obligation as debt; reclassify components (operating/financing/investing); use actual return/TPPC." },
      { term: "Share-based compensation", def: "Grant-date fair value expensed over vesting; non-cash but dilutive." },
    ],
    takeaways: [
      "DC plans expense the contribution and carry no obligation; DB plans put the funded status (assets − obligation) on the balance sheet and require complex cost accounting.",
      "Total periodic pension cost = contributions − change in funded status, the same under both standards; only the P&L-vs-OCI split differs.",
      "IFRS: service cost + net interest (at the discount rate) in P&L, remeasurements in OCI (not recycled). US GAAP: service + interest − EXPECTED return + amortizations in P&L, the rest in OCI.",
      "A higher US GAAP expected-return assumption lowers reported pension expense without changing economics — a red flag; analysts substitute the actual return.",
      "Adjust the statements: treat the net pension obligation as debt, reclassify components by nature, and use the TPPC for the true cost.",
      "Share-based comp is a real (non-cash) expense recognized over vesting and is dilutive to EPS; watch the operating-cash-flow add-back.",
    ],
  },

  {
    id: "cfa-l2-fixedincome",
    examSlug: "cfa-l2",
    topicId: "fixed",
    topicName: "Fixed Income",
    title: "Term Structure and Arbitrage-Free Valuation",
    readingMinutes: 90,
    summary:
      "Valuing bonds the way the market does — spot and forward rates, arbitrage-free valuation, the binomial interest-rate tree for bonds with embedded options, the option-adjusted spread, and effective duration/convexity when cash flows depend on the rate path.",
    intro:
      "Level II fixed income moves past a single yield to maturity to the whole term structure and to bonds whose cash flows depend on the path of interest rates. The unifying principle is NO-ARBITRAGE: a bond must be worth the sum of its cash flows discounted at the appropriate spot rates, or someone can strip it and profit. From there we build forward rates, the binomial interest-rate tree that values callable and putable bonds, the option-adjusted spread that cleans optionality out of a yield, and the effective duration and convexity used when a bond's cash flows shift as rates move. The math is exact and the item sets reward precision, especially on the spot-versus-forward relationship and the direction of the OAS.",
    sections: [
      {
        heading: "1. Spot rates and arbitrage-free valuation",
        blocks: [
          { kind: "p", text: "A SPOT RATE is the yield on a single zero-coupon payment of a given maturity. ARBITRAGE-FREE VALUATION discounts EACH of a bond's cash flows at the spot rate matching its timing, rather than using one yield to maturity for all of them. If a bond's market price differs from this spot-rate value, an arbitrageur can STRIP it (sell the coupons and principal as separate zeros) or RECONSTITUTE it for a riskless profit — which forces the price to the arbitrage-free value. The YTM is just a single complex average of the spot rates that happens to reprice the bond." },
          { kind: "formula", formula: { label: "Arbitrage-free price from spot rates", expr: "Price = CF₁/(1+z₁)¹ + CF₂/(1+z₂)² + … + CFₙ/(1+zₙ)ⁿ", note: "Each cash flow discounted at its own maturity-matched spot rate zₜ — the no-arbitrage value." } },
        ],
      },
      {
        heading: "2. Forward rates",
        blocks: [
          { kind: "p", text: "A FORWARD RATE is a rate agreed today for a loan that begins in the future, and it's IMPLIED by the spot curve through no-arbitrage: rolling over short investments must earn the same as locking in a longer rate, or there's free money. The spot–forward relationship is the engine of the topic. With an upward-sloping spot curve, forward rates lie ABOVE spot rates; with a downward curve, below. The forward curve is the market's break-even path of future rates — not a forecast, but the set of rates at which you'd be indifferent." },
          { kind: "formula", formula: { label: "Forward rate from spot rates", expr: "(1 + z₂)² = (1 + z₁) × (1 + f₁,₁)   ⟹   f = (1 + z₂)² ÷ (1 + z₁) − 1", note: "f₁,₁ is the one-year rate, one year forward. Generalizes: a long spot compounds to the same value as the short spot rolled into the forward." } },
          { kind: "example", example: { title: "Extracting a forward rate", prompt: "The one-year spot rate is 2% and the two-year spot rate is 3%. What is the one-year forward rate one year from now?", steps: ["No-arbitrage: (1.03)² = (1.02)(1 + f).", "(1 + f) = 1.0609 ÷ 1.02 = 1.04010.", "f ≈ 4.01%."], answer: "About 4.0% — above both spot rates, as expected with an upward-sloping curve. If you believe future one-year rates will be LOWER than this break-even 4%, the longer bond is attractive ('riding the curve')." } },
        ],
      },
      {
        heading: "3. The binomial interest-rate tree",
        blocks: [
          { kind: "p", text: "Bonds with EMBEDDED OPTIONS (callable, putable) have cash flows that depend on the FUTURE PATH of rates — a callable bond is redeemed early only if rates fall enough — so a single discount curve can't value them. The BINOMIAL INTEREST-RATE TREE models rates moving up or down each period (with an assumed volatility), CALIBRATED so that it reprices the benchmark bonds exactly (it's arbitrage-free). You value a bond by BACKWARD INDUCTION: start at maturity, and at each earlier node take the expected value of the two future values, discount one period at that node's rate, and apply the option (call the bond when it's advantageous to the issuer, put it when advantageous to the holder)." },
          { kind: "p", text: "Valuing an OPTION-FREE bond on the tree gives the same answer as the spot-curve method (a useful check). The value of an option-embedded bond then decomposes cleanly: a CALLABLE bond is worth the straight bond MINUS the value of the call (the issuer's option hurts the holder); a PUTABLE bond is the straight bond PLUS the value of the put (the holder's option helps). Higher assumed VOLATILITY raises the value of either embedded option — which LOWERS a callable bond's value and RAISES a putable bond's value." },
          { kind: "formula", formula: { label: "Decomposing option-embedded bonds", expr: "Callable = Straight bond − Call value      Putable = Straight bond + Put value", note: "Higher interest-rate volatility increases option value: callable value falls, putable value rises." } },
        ],
      },
      {
        heading: "4. The option-adjusted spread (OAS)",
        blocks: [
          { kind: "p", text: "How do you compare the relative value of bonds with different embedded options? The OPTION-ADJUSTED SPREAD is the constant spread added to EVERY rate in the binomial tree that makes the model value equal the bond's market price. It's 'option-adjusted' because the tree already accounts for the embedded option, so the OAS captures only the bond's CREDIT and LIQUIDITY risk — a clean, comparable spread. The Z-spread, by contrast, ignores optionality." },
          { kind: "p", text: "The direction matters and is tested. For a CALLABLE bond, the OAS is LOWER than the Z-spread — the call option benefits the issuer, so removing its (positive) cost from the spread leaves a smaller spread. For a PUTABLE bond, the OAS is HIGHER than the Z-spread. A higher assumed volatility widens the gap. To pick relative value, compare a bond's OAS to those of similar-risk bonds: a wider OAS for the same credit/liquidity means cheaper (more compensation) — though OAS depends on the volatility assumption, so an apples-to-apples comparison uses the same model and vol." },
          { kind: "callout", label: "Spreads, ranked", body: "For an option-FREE bond, the Z-spread and OAS are equal. Add a CALL (helps the issuer): OAS < Z-spread. Add a PUT (helps the holder): OAS > Z-spread. The OAS strips out the option so you're left comparing pure credit/liquidity compensation." },
        ],
      },
      {
        heading: "5. Effective duration and convexity",
        blocks: [
          { kind: "p", text: "For a straight bond, modified duration works. But for a bond with embedded options, the cash flows CHANGE as rates move (a callable bond gets called when rates fall), so we need EFFECTIVE DURATION and EFFECTIVE CONVEXITY, which measure price sensitivity by RE-VALUING the bond on the tree after shifting the whole yield curve up and down by a small amount." },
          { kind: "formula", formula: { label: "Effective duration", expr: "Effective duration = (V₋ − V₊) ÷ (2 × V₀ × Δy)", note: "V₋ and V₊ are the bond's values after the curve falls and rises by Δy; V₀ is the current value. Effective convexity uses (V₋ + V₊ − 2V₀)." } },
          { kind: "example", example: { title: "Computing effective duration", prompt: "A bond is valued at 100.0. If the yield curve falls 25 bp it's worth 101.2; if it rises 25 bp it's worth 99.0. What is its effective duration?", steps: ["Δy = 0.0025; V₋ = 101.2; V₊ = 99.0; V₀ = 100.0.", "Effective duration = (101.2 − 99.0) ÷ (2 × 100.0 × 0.0025) = 2.2 ÷ 0.5.", "= 4.4."], answer: "Effective duration ≈ 4.4 — a 1% rate move changes the price about 4.4%. For a callable bond, effective duration is LOWER than a comparable straight bond's (the call caps price appreciation as rates fall), and callables can show NEGATIVE convexity in the region where the call is likely — price gains compress as rates drop." } },
          { kind: "p", text: "The callable bond's negative convexity is a key insight: as rates fall, an ordinary bond's price rises at an increasing rate (positive convexity), but a callable bond's price is capped near the call price because the market anticipates redemption — so it gains LESS on the way down than it loses on the way up. Putable bonds, conversely, have a price floor and favorable convexity. Analysts also use KEY RATE DURATIONS to measure sensitivity to individual points on the yield curve, capturing non-parallel shifts that a single duration misses." },
        ],
      },
      {
        heading: "6. Term-structure theories and synthesis",
        blocks: [
          { kind: "p", text: "Several theories explain the yield curve's shape. PURE (unbiased) EXPECTATIONS: forward rates equal expected future short rates (so the curve reflects rate expectations). LIQUIDITY PREFERENCE: investors demand a premium for the greater risk of longer bonds, biasing the curve upward, so an upward slope can coexist with flat expected rates. MARKET SEGMENTATION: separate maturity 'habitats' have their own supply and demand. PREFERRED HABITAT: investors will leave their habitat for sufficient extra yield. These shape how you read the curve and the forward rates extracted from it." },
          { kind: "p", text: "The chapter's logic chains together: spot rates give the arbitrage-free value; forward rates fall out of them by no-arbitrage; the binomial tree extends valuation to path-dependent (option-embedded) bonds; the OAS turns a price into a clean, comparable spread; and effective duration/convexity measure risk when cash flows shift. These tools recur directly in portfolio management (managing rate exposure) and structured products (MBS, where prepayment is an embedded option). The two ideas to over-learn: the spot↔forward no-arbitrage relationship, and the OAS direction (callable below, putable above the Z-spread)." },
        ],
      },
    ],
    keyTerms: [
      { term: "Spot rate", def: "Yield on a single zero-coupon payment of a given maturity." },
      { term: "Arbitrage-free valuation", def: "Discounting each cash flow at its maturity-matched spot rate; enforced by strip/reconstitution arbitrage." },
      { term: "Forward rate", def: "A future-starting rate implied by the spot curve via no-arbitrage." },
      { term: "Spot–forward relationship", def: "(1+z₂)² = (1+z₁)(1+f); upward spot curve → forwards above spots." },
      { term: "Binomial interest-rate tree", def: "Rates moving up/down each period, calibrated arbitrage-free, to value path-dependent bonds." },
      { term: "Backward induction", def: "Valuing a bond from maturity back to today, applying option exercise at each node." },
      { term: "Callable = straight − call", def: "The call benefits the issuer, lowering the bond's value to the holder." },
      { term: "Putable = straight + put", def: "The put benefits the holder, raising the bond's value." },
      { term: "Volatility effect", def: "Higher rate volatility raises option value: callable value falls, putable rises." },
      { term: "Option-adjusted spread (OAS)", def: "Constant spread over tree rates equating model value to price; pure credit/liquidity spread." },
      { term: "OAS direction", def: "Callable OAS < Z-spread; putable OAS > Z-spread; option-free OAS = Z-spread." },
      { term: "Effective duration", def: "(V₋ − V₊)/(2·V₀·Δy); rate sensitivity when cash flows can change." },
      { term: "Effective convexity", def: "Curvature when cash flows shift; callables can show negative convexity." },
      { term: "Key rate durations", def: "Sensitivities to individual points on the curve; capture non-parallel shifts." },
      { term: "Term-structure theories", def: "Pure expectations, liquidity preference, market segmentation, preferred habitat." },
    ],
    takeaways: [
      "Arbitrage-free value discounts each cash flow at its own spot rate; strip/reconstitution arbitrage enforces it, and YTM is just an average of spot rates.",
      "Forward rates are implied by the spot curve via no-arbitrage; with an upward curve, forwards exceed spots.",
      "Bonds with embedded options are valued on a calibrated binomial tree by backward induction; callable = straight − call, putable = straight + put.",
      "Higher rate volatility raises option value — lowering callable values and raising putable values.",
      "OAS is the spread over tree rates that matches market price (pure credit/liquidity): callable OAS < Z-spread, putable OAS > Z-spread.",
      "Use effective duration (V₋ − V₊)/(2V₀Δy) and effective convexity for option-embedded bonds; callables exhibit negative convexity near the call.",
    ],
  },

  {
    id: "cfa-l2-derivpricing",
    examSlug: "cfa-l2",
    topicId: "deriv",
    topicName: "Derivatives",
    title: "Pricing and Valuation: Forwards, Swaps, and Option Models",
    readingMinutes: 92,
    summary:
      "How derivatives are priced and revalued through their lives — forward/futures pricing and value, swaps as packets of bonds/forwards, and the two option-pricing engines: the binomial model with risk-neutral probabilities and the Black–Scholes–Merton model with its inputs and Greeks.",
    intro:
      "Level II derivatives is about PRICING (setting the fair price at initiation) and VALUATION (marking the contract to value during its life), all built on no-arbitrage and replication. This chapter develops forward and futures pricing and how their value accrues as the underlying moves, swaps viewed as portfolios of bonds or forwards, and the heart of the topic — option pricing via the binomial model (with the pivotal idea of risk-neutral probabilities) and the Black–Scholes–Merton model (its inputs, assumptions, and the Greeks). The single most important concept is RISK-NEUTRAL VALUATION: we price options as if investors were risk-neutral, discounting expected payoffs at the risk-free rate, because the replicating portfolio makes real-world probabilities irrelevant.",
    sections: [
      {
        heading: "1. No-arbitrage pricing and the carry model",
        blocks: [
          { kind: "p", text: "Every derivative price rests on the LAW OF ONE PRICE: two positions with identical future payoffs must cost the same today, or a riskless profit exists. To price a forward you REPLICATE its payoff with the underlying plus risk-free borrowing/lending, and the forward price must equal the cost of that replication — the COST OF CARRY. You finance the spot purchase (add interest), pay any carrying costs, and subtract any benefits of holding the asset (dividends, coupons, convenience yield)." },
          { kind: "formula", formula: { label: "Forward price (carry) and value during the contract", expr: "F₀ = S₀(1 + r)^T − (PV of benefits)(1+r)^T + (carry costs)      Value to long at t ≈ S_t − F₀/(1+r)^(T−t)", note: "At initiation the forward's value is zero (F₀ is set to make it so). As the spot moves, value accrues to one side: the long gains when the spot rises above the present value of the locked-in forward price." } },
          { kind: "p", text: "FUTURES are exchange-traded forwards marked to market daily; the daily settlement makes their cash flows differ from forwards, and when interest rates correlate with the futures price the two prices diverge slightly (a convexity effect), but for the exam they're priced by the same carry logic. A FORWARD RATE AGREEMENT (FRA) is a forward on an interest rate; its value is the present value of the difference between the contract rate and the realized reference rate on the notional." },
        ],
      },
      {
        heading: "2. Swaps as portfolios",
        blocks: [
          { kind: "p", text: "A plain-vanilla INTEREST RATE SWAP exchanges fixed for floating payments, and there are two equivalent ways to see it. As a PAIR OF BONDS: the fixed-rate payer is effectively SHORT a fixed-rate bond and LONG a floating-rate bond — so the swap's value to them is the value of the floating bond minus the fixed bond. As a STRIP OF FORWARDS: each payment date is a forward contract on the reference rate, so the swap is a packet of forward rate agreements priced together." },
          { kind: "p", text: "At initiation the SWAP RATE (the fixed rate) is set so the swap's value is ZERO — the present value of the fixed leg equals the present value of the expected floating leg. The swap rate turns out to be the rate that makes a par bond, computed from the discount factors implied by the current spot curve. As rates move after initiation, the swap takes on positive value to one party and negative to the other (equal and opposite), and you value it by repricing the two bond legs (or the remaining forwards). A receive-fixed swap GAINS value when rates fall (its fixed leg is now above market); a pay-fixed swap gains when rates rise." },
        ],
      },
      {
        heading: "3. The binomial option-pricing model",
        blocks: [
          { kind: "p", text: "Options are priced by the same replication logic, but the payoff is asymmetric, so we model the underlying moving to one of two prices each period (up by factor u or down by factor d) and replicate the option with a position in the underlying plus borrowing. Solving the replication leads to a profound simplification: the option value equals its expected payoff under RISK-NEUTRAL probabilities, discounted at the RISK-FREE rate. The real-world probability of an up-move never enters — because the replicating portfolio hedges it away." },
          { kind: "formula", formula: { label: "Risk-neutral probability and one-period option value", expr: "π = (1 + r − d) ÷ (u − d)      Value = [π · c₊ + (1 − π) · c₋] ÷ (1 + r)", note: "u and d are the up/down price factors; c₊ and c₋ the option payoffs in each state. π is the risk-neutral (not real-world) probability of an up-move." } },
          { kind: "example", example: { title: "One-period binomial call", prompt: "A stock is $50. In one period it moves to $60 (u = 1.2) or $40 (d = 0.8). A call has a $50 strike; the risk-free rate is 5%. What is the call worth?", steps: ["Payoffs: c₊ = max(60 − 50, 0) = 10; c₋ = max(40 − 50, 0) = 0.", "Risk-neutral π = (1.05 − 0.8) ÷ (1.2 − 0.8) = 0.25 ÷ 0.40 = 0.625.", "Value = [0.625(10) + 0.375(0)] ÷ 1.05 = 6.25 ÷ 1.05.", "≈ $5.95."], answer: "About $5.95. Note we never used the stock's real expected return or the true probability of an up-move — risk-neutral valuation makes them irrelevant. Multi-period trees extend this by backward induction, and American options check early exercise at each node." } },
        ],
      },
      {
        heading: "4. The Black–Scholes–Merton model",
        blocks: [
          { kind: "p", text: "As the binomial tree's periods shrink toward continuous time, it converges to the BLACK–SCHOLES–MERTON (BSM) model — a closed-form price for European options. You don't compute the formula by hand at this level, but you must know its INPUTS and how each moves the price: the underlying price (S), the strike (X), the time to expiration (T), the risk-free rate (r), and the VOLATILITY (σ) — plus any yield/carry on the underlying. Five of these are observable; VOLATILITY is the only one that must be estimated, which is why it dominates option analysis." },
          { kind: "p", text: "BSM rests on assumptions: the underlying price is LOGNORMALLY distributed with constant volatility, the risk-free rate is constant, there are no transaction costs or taxes, continuous trading and hedging are possible, and the options are European (no early exercise). Violations matter — constant volatility is famously false (the 'volatility smile/skew' shows implied vol varies by strike), and dividends/early exercise require adjustments. Higher VOLATILITY raises both calls and puts; higher time to expiration generally raises both; a higher underlying price raises calls and lowers puts; a higher rate raises calls and lowers puts." },
          { kind: "callout", label: "Implied volatility", body: "Because volatility is the only unobservable input, you can invert BSM: plug in the option's MARKET price and solve for the σ that produces it — the IMPLIED VOLATILITY, the market's forward-looking view of risk. Option traders quote and trade in implied vol; a high implied vol means options are expensive." },
        ],
      },
      {
        heading: "5. The Greeks and delta hedging",
        blocks: [
          { kind: "p", text: "The GREEKS measure an option's sensitivity to each input — the practical output of BSM. DELTA (∂value/∂underlying price) is the most important: it's the hedge ratio, ranging 0 to 1 for calls and −1 to 0 for puts, and it tells you how many units of the underlying replicate the option. GAMMA measures how delta itself changes as the underlying moves (highest near the money). VEGA measures sensitivity to volatility. THETA measures time decay (options lose value as expiration nears). RHO measures sensitivity to the interest rate. A DELTA-HEDGED position (option offset by delta units of the underlying) is insulated from small price moves, but must be REBALANCED as delta changes (gamma) — the continuous-hedging idea at the core of BSM." },
          { kind: "p", text: "PUT–CALL PARITY (S₀ + p = c + PV(X) for European options) still ties the instruments together and lets you create synthetic positions or check for arbitrage. Pulling the topic together: forwards/futures/swaps are priced by carry and replication and valued by repricing as the underlying moves; options are priced by risk-neutral replication — exactly in the binomial model, continuously in BSM — and managed through the Greeks. The master idea across all of it is no-arbitrage: build the replicating portfolio, and the derivative's price (and its hedge) follows. This feeds directly into risk management and the structured products you meet later." },
        ],
      },
    ],
    keyTerms: [
      { term: "Law of one price / replication", def: "Identical payoffs must cost the same; price a derivative by the cost of replicating it." },
      { term: "Cost of carry (forward price)", def: "F₀ = S₀(1+r)^T − PV(benefits)·(1+r)^T + carry costs." },
      { term: "Forward value during life", def: "Accrues as the spot diverges from the PV of the locked-in forward price; zero at initiation." },
      { term: "Futures vs forwards", def: "Daily mark-to-market; small convexity divergence when rates correlate with the price." },
      { term: "Forward rate agreement (FRA)", def: "A forward on an interest rate; value = PV of the rate difference on the notional." },
      { term: "Swap as two bonds", def: "Pay-fixed = short a fixed bond + long a floating bond; value = difference in the legs." },
      { term: "Swap rate", def: "The fixed rate set so the swap's value is zero at initiation (a par-bond rate)." },
      { term: "Swap value after initiation", def: "Reprice the legs; receive-fixed gains when rates fall, pay-fixed when rates rise." },
      { term: "Binomial model", def: "Underlying moves up/down each period; option replicated with underlying + borrowing." },
      { term: "Risk-neutral probability", def: "π = (1 + r − d)/(u − d); the probability used to value options (not the real-world one)." },
      { term: "Risk-neutral valuation", def: "Option value = expected payoff under π, discounted at the risk-free rate." },
      { term: "Black–Scholes–Merton", def: "Continuous-time closed-form European option price; inputs S, X, T, r, σ (+ yield)." },
      { term: "BSM assumptions", def: "Lognormal prices, constant volatility & rate, no costs, continuous hedging, European." },
      { term: "Implied volatility", def: "The σ that makes BSM match the market price; volatility is the only unobservable input." },
      { term: "Delta / gamma / vega / theta / rho", def: "Sensitivities to underlying price / delta's change / volatility / time / rate." },
      { term: "Delta hedging", def: "Offset an option with delta units of the underlying; rebalance as delta changes (gamma)." },
      { term: "Put–call parity", def: "S₀ + p = c + PV(X); links options, the underlying, and a risk-free bond." },
    ],
    takeaways: [
      "Derivatives are priced by no-arbitrage replication: forwards by cost of carry (F₀ = S₀(1+r)^T − PV benefits), valued by repricing as the spot moves; futures add daily mark-to-market.",
      "A swap is short-a-fixed-bond + long-a-floating-bond (or a strip of forwards); the swap rate sets initial value to zero, and value accrues as rates move.",
      "The binomial model replicates an option and values it as the risk-neutral expected payoff discounted at the risk-free rate — π = (1+r−d)/(u−d); real-world probabilities are irrelevant.",
      "Black–Scholes–Merton is the continuous-time limit; its inputs are S, X, T, r, and σ, of which volatility is the only unobservable (hence implied volatility).",
      "The Greeks measure sensitivities — delta is the hedge ratio; delta hedging is insulated from small moves but must be rebalanced (gamma).",
      "Higher volatility raises both calls and puts; put–call parity (S₀ + p = c + PV(X)) ties the instruments together and checks for arbitrage.",
    ],
  },
];

export const deepQuestionsL2: Question[] = [
  {
    id: "cfa-l2reg-d1", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "In a multiple regression, a slope coefficient of 1.4 on X₁ means that a one-unit increase in X₁ is associated with a 1.4-unit increase in Y:",
    choices: ["Ignoring all other variables", "Holding the other independent variables constant", "Only if X₁ is significant", "Only at the mean of Y"],
    answerIndex: 1,
    explanation: "A partial slope coefficient gives the effect of that variable holding the OTHER independent variables constant — that 'holding others fixed' is the whole purpose of multiple regression. It isn't an unconditional effect (choice A), and the interpretation holds regardless of significance or where on Y you are.",
  },
  {
    id: "cfa-l2reg-d2", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "To compare two regression models that use different numbers of independent variables, you should use:",
    choices: ["R², because higher is always better", "Adjusted R², which penalizes added variables", "The F-statistic only", "The intercept"],
    answerIndex: 1,
    explanation: "R² mechanically rises whenever you add a variable, even a useless one, so it can't fairly compare models of different size. Adjusted R² penalizes extra regressors and can fall when a new variable adds little, making it the correct basis for model comparison.",
  },
  {
    id: "cfa-l2reg-d3", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "A regression shows a high R² and a significant F-statistic, but none of the individual t-statistics are significant. This indicates:",
    choices: ["Heteroskedasticity", "Serial correlation", "Multicollinearity", "A perfect model"],
    answerIndex: 2,
    explanation: "The signature of multicollinearity is exactly this: the model explains a lot overall (high R², significant F) but no single coefficient looks significant, because highly correlated independent variables inflate each other's standard errors. The fix is to drop a redundant variable.",
  },
  {
    id: "cfa-l2reg-d4", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "Conditional heteroskedasticity in a regression most directly causes:",
    choices: ["Biased slope coefficients", "Standard errors that are wrong (often too small), so t-tests mislead", "A higher R²", "A unit root"],
    answerIndex: 1,
    explanation: "Heteroskedasticity does NOT bias the coefficients; it corrupts the standard errors — typically making them too small, so t-statistics are inflated and you find spurious significance. Detect with Breusch–Pagan and fix with robust (White) standard errors.",
  },
  {
    id: "cfa-l2reg-d5", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "A Durbin–Watson statistic close to 2.0 indicates:",
    choices: ["Strong positive serial correlation", "No first-order serial correlation", "Strong negative serial correlation", "Heteroskedasticity"],
    answerIndex: 1,
    explanation: "Since DW ≈ 2(1 − r), a value near 2 implies r ≈ 0 — no first-order serial correlation. DW near 0 signals strong positive serial correlation; near 4, negative. DW is for serial correlation, not heteroskedasticity, and is invalid if a lagged dependent variable is included.",
  },
  {
    id: "cfa-l2reg-d6", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "Which problem can actually BIAS the estimated coefficients (not merely the standard errors)?",
    choices: ["Conditional heteroskedasticity", "Positive serial correlation", "Omitting a relevant correlated variable (specification error)", "Multicollinearity"],
    answerIndex: 2,
    explanation: "Omitting a relevant variable that is correlated with the included ones biases the included coefficients — a specification error, and the most serious problem because robust standard errors can't fix a biased model. The other three distort standard errors or precision but leave the coefficients unbiased.",
  },
  {
    id: "cfa-l2ts-d1", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "A financial series that grows at a roughly constant RATE is best fit by:",
    choices: ["A linear trend model", "A log-linear trend model", "A random walk", "A seasonal model"],
    answerIndex: 1,
    explanation: "Constant-rate (exponential) growth is best captured by a log-linear trend (regressing ln y on time), whose slope is the continuously compounded growth rate. A linear trend fits constant-AMOUNT growth; using it on exponential data leaves serially correlated residuals.",
  },
  {
    id: "cfa-l2ts-d2", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "An AR(1) model is estimated as xₜ = 0.4 + 0.8·xₜ₋₁. Its mean-reverting level is:",
    choices: ["0.5", "2.0", "0.32", "Undefined"],
    answerIndex: 1,
    explanation: "Mean-reverting level = b₀ ÷ (1 − b₁) = 0.4 ÷ (1 − 0.8) = 0.4 ÷ 0.2 = 2.0. Above 2.0 the model predicts a decline, below it a rise. The level is defined because |b₁| < 1 (stationary); if b₁ were 1 it would be a random walk and undefined.",
  },
  {
    id: "cfa-l2ts-d3", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "A time series follows a random walk. This means it:",
    choices: ["Is covariance stationary", "Has a unit root and is NOT covariance stationary", "Reverts strongly to its mean", "Has constant variance over time"],
    answerIndex: 1,
    explanation: "A random walk (b₁ = 1) has a unit root; its variance grows without bound, so it is not covariance stationary and the mean-reversion formula breaks (denominator zero). It does not mean-revert. The cure is first-differencing, which yields a stationary series.",
  },
  {
    id: "cfa-l2ts-d4", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "The appropriate way to test whether a time series has a unit root is the:",
    choices: ["Durbin–Watson test", "Breusch–Pagan test", "Dickey–Fuller test", "Ordinary t-test on b₁", ],
    answerIndex: 2,
    explanation: "The Dickey–Fuller test is the valid test for a unit root; the ordinary t-test on the AR(1) slope is INVALID when a unit root is present. Durbin–Watson tests serial correlation and Breusch–Pagan tests heteroskedasticity — different problems.",
  },
  {
    id: "cfa-l2ts-d5", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 3,
    stem: "Regressing one nonstationary (unit-root) series on another unrelated nonstationary series tends to produce:",
    choices: ["A spurious but high R² and 'significant' coefficients", "No relationship at all", "A guaranteed unit root in the residuals", "Heteroskedastic but unbiased results"],
    answerIndex: 0,
    explanation: "This is the spurious-regression problem: two unrelated unit-root series can show a high R² and significant-looking coefficients that are meaningless. It's why stationarity must be tested first; if both series have unit roots, check for cointegration, otherwise first-difference them.",
  },
  {
    id: "cfa-l2ts-d6", examSlug: "cfa-l2", topicId: "quant", topicName: "Quantitative Methods", difficulty: 2,
    stem: "Competing forecasting models are best compared using:",
    choices: ["In-sample R²", "Out-of-sample root mean squared error (RMSE)", "The number of variables", "The Durbin–Watson statistic"],
    answerIndex: 1,
    explanation: "Models should be judged on out-of-sample forecasting accuracy, measured by RMSE (lower is better), because in-sample fit can be inflated by overfitting. A model can fit history well yet forecast poorly, so the test is performance on data not used to estimate it.",
  },

  {
    id: "cfa-l2eq-d1", examSlug: "cfa-l2", topicId: "equity", topicName: "Equity Valuation", difficulty: 2,
    stem: "A firm pays out 50% of earnings, grows 4% forever, and has a required return of 9%. Its justified LEADING P/E is closest to:",
    choices: ["5.6×", "10.0×", "12.5×", "8.0×"],
    answerIndex: 1,
    explanation: "Justified leading P/E = payout ÷ (r − g) = 0.50 ÷ (0.09 − 0.04) = 0.50 ÷ 0.05 = 10.0×. It rises with payout and growth and falls with the required return. This formula falls directly out of the Gordon model divided by next year's earnings.",
  },
  {
    id: "cfa-l2eq-d2", examSlug: "cfa-l2", topicId: "equity", topicName: "Equity Valuation", difficulty: 3,
    stem: "FCFF is $400M, interest expense $50M, tax rate 20%, and net new borrowing $25M. FCFE is:",
    choices: ["$385M", "$375M", "$465M", "$340M"],
    answerIndex: 0,
    explanation: "FCFE = FCFF − Int(1 − t) + net borrowing = 400 − 50(0.80) + 25 = 400 − 40 + 25 = $385M. After-tax interest belongs to debt holders (subtract it); net new borrowing is cash equity received (add it). FCFE is the cash available to shareholders.",
  },
  {
    id: "cfa-l2eq-d3", examSlug: "cfa-l2", topicId: "equity", topicName: "Equity Valuation", difficulty: 2,
    stem: "FCFF should be discounted at the ___, and FCFE at the ___.",
    choices: ["cost of equity; WACC", "WACC; cost of equity", "WACC; WACC", "risk-free rate; cost of equity"],
    answerIndex: 1,
    explanation: "FCFF is cash to ALL capital providers, so discount it at the WACC to get firm value (then subtract debt for equity value). FCFE is cash to equity only, so discount it at the required return on equity for equity value directly. Mixing the rate with the flow (e.g., FCFE at WACC) is a classic error.",
  },
  {
    id: "cfa-l2eq-d4", examSlug: "cfa-l2", topicId: "equity", topicName: "Equity Valuation", difficulty: 3,
    stem: "A firm has beginning book equity of $500M, net income of $70M, and a 12% required return on equity. Its residual income is:",
    choices: ["$70M", "$10M", "$60M", "−$10M"],
    answerIndex: 1,
    explanation: "Equity charge = 0.12 × 500 = $60M. Residual income = net income − equity charge = 70 − 60 = $10M. The firm earned a 14% ROE against a 12% required return, creating $10M of value above the cost of its equity. A firm earning exactly 12% would have RI = 0 and be worth book value.",
  },
  {
    id: "cfa-l2eq-d5", examSlug: "cfa-l2", topicId: "equity", topicName: "Equity Valuation", difficulty: 2,
    stem: "Which valuation model is generally MOST appropriate for a growth firm that pays no dividends and has negative near-term free cash flow?",
    choices: ["Gordon growth DDM", "FCFE model", "Residual income model", "Dividend yield"],
    answerIndex: 2,
    explanation: "Residual income suits non-dividend, negative-FCF growth firms: it anchors most value in current book value and near-term RI rather than a distant terminal value, so it's less reliant on hard-to-estimate later cash flows. DDM needs dividends; FCFE struggles when near-term FCF is negative. (RI assumes clean-surplus accounting.)",
  },
  {
    id: "cfa-l2eq-d6", examSlug: "cfa-l2", topicId: "equity", topicName: "Equity Valuation", difficulty: 2,
    stem: "EV/EBITDA is often preferred over P/E for comparing companies because it:",
    choices: ["Ignores debt entirely", "Is unaffected by differences in capital structure", "Always gives a higher value", "Uses net income"],
    answerIndex: 1,
    explanation: "Enterprise value (equity + debt − cash) over EBITDA (a pre-interest, pre-tax operating measure) lets you compare firms with DIFFERENT capital structures on a like basis, since both numerator and denominator are before financing effects. P/E, by contrast, is distorted by leverage and tax differences. EV/EBITDA explicitly includes debt (so choice A is wrong).",
  },
  {
    id: "cfa-l2eq-d7", examSlug: "cfa-l2", topicId: "equity", topicName: "Equity Valuation", difficulty: 3,
    stem: "A trailing P/E can make a cyclical company look deceptively CHEAP when:",
    choices: ["Earnings are at a cyclical trough", "Earnings are at a cyclical peak", "The firm pays no dividend", "Growth is negative"],
    answerIndex: 1,
    explanation: "At a cyclical PEAK, trailing earnings are temporarily inflated, so the P/E (price ÷ those high earnings) looks low — deceptively 'cheap' just before earnings fall. At a trough, the opposite makes it look expensive. This transitory-earnings distortion is a core pitfall of trailing multiples for cyclicals (normalized earnings address it).",
  },
  {
    id: "cfa-l2eq-d8", examSlug: "cfa-l2", topicId: "equity", topicName: "Equity Valuation", difficulty: 2,
    stem: "In a two-stage DDM, the terminal value typically:",
    choices: ["Is negligible relative to the explicit dividends", "Makes up a large share of the total present value", "Equals the current book value", "Is discounted at the growth rate"],
    answerIndex: 1,
    explanation: "In most multistage DDMs the terminal (continuing) value accounts for a large share of total value, so the long-run growth assumption used in it drives the answer heavily — a small change in g_L swings the valuation. The terminal value is discounted at the required return, not the growth rate.",
  },

  {
    id: "cfa-l2ic-d1", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Reporting & Analysis", difficulty: 2,
    stem: "An investor owns 35% of a company and exercises significant influence. The investment is accounted for using:",
    choices: ["Fair value through profit or loss", "The equity method", "Full consolidation", "Amortized cost"],
    answerIndex: 1,
    explanation: "Ownership of roughly 20–50% with significant influence triggers the equity method (one-line consolidation): the investment is carried at cost and adjusted for the investor's share of earnings and dividends. Fair value/amortized cost apply to passive sub-20% stakes; consolidation applies only with control (>50%).",
  },
  {
    id: "cfa-l2ic-d2", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Reporting & Analysis", difficulty: 2,
    stem: "Compared with consolidating a subsidiary, accounting for the same stake under the equity method results in:",
    choices: ["Higher reported revenue and total assets", "The same net income but lower reported revenue, assets, and leverage", "Lower net income", "Higher non-controlling interest"],
    answerIndex: 1,
    explanation: "The equity method and consolidation report the SAME net income and equity, but the equity method keeps the investee's revenue, assets, and liabilities OFF the investor's statements (just a net line each). So revenue and assets are lower and leverage looks better — while net income matches. This is the most-tested analytical point in the topic.",
  },
  {
    id: "cfa-l2ic-d3", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Reporting & Analysis", difficulty: 2,
    stem: "An acquirer pays $1,200M for 100% of a target whose identifiable assets have a fair value of $1,500M and liabilities of $500M. Goodwill recognized is:",
    choices: ["$200M", "$300M", "$700M", "$0"],
    answerIndex: 0,
    explanation: "Fair value of net identifiable assets = 1,500 − 500 = $1,000M. Goodwill = purchase price − FV of net identifiable assets = 1,200 − 1,000 = $200M. Goodwill is not amortized; it is tested annually for impairment.",
  },
  {
    id: "cfa-l2ic-d4", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Reporting & Analysis", difficulty: 2,
    stem: "An equity investment elected at fair value through OCI (FVOCI) records its unrealized gains and losses in:",
    choices: ["Net income", "Other comprehensive income", "Retained earnings directly", "The cash flow statement"],
    answerIndex: 1,
    explanation: "FVOCI records unrealized gains/losses in other comprehensive income (and, for the equity election, they are not later recycled to net income). FVPL would put them in net income. Dividends and interest still flow through income under either classification.",
  },
  {
    id: "cfa-l2pen-d1", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Reporting & Analysis", difficulty: 1,
    stem: "In a defined-CONTRIBUTION plan, the employer's pension expense for the period equals:",
    choices: ["The change in the projected benefit obligation", "The contribution made", "Service cost plus interest cost", "The funded status"],
    answerIndex: 1,
    explanation: "A DC plan creates no further obligation, so the expense is simply the contribution, and there's no plan asset or obligation on the balance sheet. The obligation-, service-, and funded-status concepts apply to defined-BENEFIT plans, where the employer bears the investment and actuarial risk.",
  },
  {
    id: "cfa-l2pen-d2", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Reporting & Analysis", difficulty: 2,
    stem: "A defined-benefit plan's funded status reported on the balance sheet is:",
    choices: ["Plan assets minus the benefit obligation", "The benefit obligation only", "Service cost plus interest cost", "Employer contributions for the year"],
    answerIndex: 0,
    explanation: "Funded status = fair value of plan assets − the benefit obligation. A positive figure is an overfunded plan (net asset); negative is underfunded (net liability). Modern standards report this net amount directly on the balance sheet.",
  },
  {
    id: "cfa-l2pen-d3", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Reporting & Analysis", difficulty: 3,
    stem: "Under US GAAP, increasing the assumed EXPECTED return on plan assets (all else equal) will:",
    choices: ["Increase reported pension expense", "Decrease reported pension expense and flatter operating income", "Have no effect on the income statement", "Increase the benefit obligation"],
    answerIndex: 1,
    explanation: "US GAAP P&L pension expense subtracts the EXPECTED return on plan assets, so a higher assumed return lowers reported expense and flatters operating income — without changing the underlying economics. That's why it's an earnings-quality red flag and why analysts substitute the actual return (and use total periodic pension cost).",
  },
  {
    id: "cfa-l2pen-d4", examSlug: "cfa-l2", topicId: "fra", topicName: "Financial Reporting & Analysis", difficulty: 3,
    stem: "The total periodic pension cost (the true economic cost) can be computed as:",
    choices: ["Service cost only", "Employer contributions minus the change in funded status", "Interest cost minus expected return", "The amount reported in P&L under US GAAP"],
    answerIndex: 1,
    explanation: "Total periodic pension cost = employer contributions − (ending funded status − beginning funded status). It's the same under IFRS and US GAAP regardless of how the components are split between P&L and OCI; only that split differs by standard. It uses the ACTUAL return on assets, neutralizing the expected-return assumption.",
  },
];
