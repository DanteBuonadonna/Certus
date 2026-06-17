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
];
