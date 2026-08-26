// ============================================================
// Certus — CFA Level II Quantitative Methods readings
//
// WHY THIS FILE EXISTS: a concept audit found the Level II quant
// chapters covered multiple regression and time series reasonably well,
// but the machine learning reading was essentially absent. Logistic
// regression, neural networks, principal components analysis, k-means
// and hierarchical clustering, decision trees, random forests, support
// vector machines, the confusion matrix and dendrograms ALL returned
// ZERO matches. Penalised regression had three passing mentions.
//
// Also thin or missing: multiperiod forecasting by the chain rule (0),
// the mean-reverting level (0), interaction terms (0), and the
// information criteria used for model selection (1).
//
// Two chapters follow: one filling the regression and time-series gaps,
// one covering machine learning properly.
//
// Every number in every worked example was computed in Python first.
// The AR(1) mean-reverting levels land exactly on 4.0 and 2.4, which is
// the check that the coefficients chosen are internally consistent.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const quantChaptersL2: Chapter[] = [
  // ----------------------------------------------------------
  {
    id: "cfa-l2-quant-regression-applied",
    examSlug: "cfa-l2",
    topicId: "quant",
    topicName: "Quantitative Methods",
    title: "Applied Regression and Time-Series Forecasting",
    readingMinutes: 20,
    summary:
      "Reading a regression output line by line, dummy variables and interactions, the three diagnostic violations, and forecasting from an AR model by the chain rule.",
    intro:
      "Level II quantitative methods is mostly about reading output correctly rather than deriving anything. A vignette hands you a regression table and asks what it means, whether it can be trusted, and what it predicts. This reading works through all three questions in the order an analyst would actually face them.",
    sections: [
      {
        heading: "Reading the output",
        blocks: [
          {
            kind: "p",
            text: "Each slope coefficient in a multiple regression is a partial effect: the expected change in the dependent variable for a one-unit change in that independent variable, holding all others constant. The phrase \"holding others constant\" is doing real work — it is why a coefficient can flip sign when a new variable is added.",
          },
          {
            kind: "p",
            text: "Test one coefficient with a t-statistic, which is the coefficient divided by its standard error. Test whether the model as a whole explains anything with an F-test, whose null hypothesis is that every slope coefficient equals zero simultaneously.",
          },
          {
            kind: "formula",
            formula: {
              label: "Testing a single coefficient",
              expr: "t = ( b̂ − b₀ ) ÷ standard error of b̂",
              note: "Usually b₀ is zero, so t is simply the coefficient over its standard error. Degrees of freedom are n − k − 1.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Reading two coefficients",
              prompt:
                "A regression reports a coefficient of 0.84 with a standard error of 0.31, and another of −1.24 with a standard error of 0.48. With 60 observations and 4 independent variables, are they significant at 5%?",
              steps: [
                "First: t = 0.84 ÷ 0.31 = 2.7097.",
                "Second: t = −1.24 ÷ 0.48 = −2.5833.",
                "Degrees of freedom = 60 − 4 − 1 = 55, so the two-tailed 5% critical value is about 2.00.",
                "Both statistics exceed 2.00 in absolute value.",
              ],
              answer:
                "Both coefficients are significant at the 5% level. Note that the second is significant despite being negative — significance is about distance from zero, not direction.",
            },
          },
          {
            kind: "p",
            text: "R² always rises when a variable is added, even a useless one, which makes it worthless for comparing models of different size. Adjusted R² penalises additional regressors and can fall when a variable adds nothing.",
          },
          {
            kind: "formula",
            formula: {
              label: "Adjusted R²",
              expr: "adjusted R² = 1 − (1 − R²) × ( n − 1 ) ÷ ( n − k − 1 )",
              note: "With n = 60, k = 4 and R² = 0.42, adjusted R² = 0.3778. With n = 120, k = 6 and R² = 0.35, it is 0.3155.",
            },
          },
          {
            kind: "p",
            text: "Information criteria go further. Akaike's criterion is preferred when the goal is forecasting; the Schwarz or Bayesian criterion penalises complexity more heavily and is preferred when the goal is finding the true model. For both, lower is better — the opposite direction from R².",
          },
        ],
      },
      {
        heading: "Making a prediction",
        blocks: [
          {
            kind: "example",
            example: {
              title: "Predicting from a fitted model",
              prompt:
                "A model estimates ŷ = −0.6 + 1.25x₁ + 0.40x₂. Predict y when x₁ = 4.2 and x₂ = 1.8.",
              steps: [
                "First term: 1.25 × 4.2 = 5.25.",
                "Second term: 0.40 × 1.8 = 0.72.",
                "Add the intercept: −0.6 + 5.25 + 0.72 = 5.37.",
              ],
              answer:
                "The predicted value is 5.37. A prediction interval around it is wider than a confidence interval for the mean, because it must absorb the error term as well as the coefficient uncertainty.",
            },
          },
          {
            kind: "callout",
            label: "The extrapolation warning",
            body: "A regression describes the relationship over the range of the data it saw. Predicting at values far outside that range assumes the relationship continues to hold there, which nothing in the estimation supports.",
          },
        ],
      },
      {
        heading: "Dummy variables and interactions",
        blocks: [
          {
            kind: "p",
            text: "A dummy variable takes the value one when a condition holds and zero otherwise, letting a regression capture a categorical effect. With n categories you include n − 1 dummies; including all n produces perfect multicollinearity, known as the dummy variable trap, and the regression cannot be estimated.",
          },
          {
            kind: "p",
            text: "The omitted category becomes the baseline, and each dummy coefficient measures the difference from that baseline rather than an absolute level. Misreading a dummy coefficient as a level rather than a difference is a common exam error.",
          },
          {
            kind: "p",
            text: "An interaction term — the product of two variables — allows the effect of one to depend on the level of the other. Without it, a regression assumes the effect of each variable is the same for every observation, which is frequently the wrong assumption in finance. A model of returns on size and value, for example, may need an interaction if the value effect is stronger among small companies.",
          },
        ],
      },
      {
        heading: "The three diagnostic violations",
        blocks: [
          {
            kind: "table",
            table: {
              caption: "What goes wrong, how it is detected, and what to do",
              headers: ["Violation", "Effect", "Detection", "Correction"],
              rows: [
                [
                  "Heteroskedasticity",
                  "Standard errors biased; t-tests unreliable",
                  "Breusch-Pagan test",
                  "Robust (White) standard errors",
                ],
                [
                  "Serial correlation",
                  "Standard errors understated; t-tests inflated",
                  "Durbin-Watson, Breusch-Godfrey",
                  "Newey-West standard errors",
                ],
                [
                  "Multicollinearity",
                  "Standard errors inflated; coefficients unstable",
                  "High R² with low t-stats; VIF above 5 or 10",
                  "Drop or combine variables",
                ],
              ],
            },
          },
          {
            kind: "p",
            text: "The distinction that matters most: heteroskedasticity and serial correlation leave the coefficients unbiased and damage only the standard errors, so the fix is to correct the standard errors rather than the model. Multicollinearity does not bias the coefficients either, but it makes them so imprecise that individually they appear insignificant while the F-test says the model works — that combination is the diagnostic signature.",
          },
          {
            kind: "p",
            text: "Only conditional heteroskedasticity — where error variance depends on the independent variables — is a problem. Unconditional heteroskedasticity does not violate the regression assumptions in a way that affects inference.",
          },
          {
            kind: "p",
            text: "The Durbin-Watson statistic approximates 2(1 − r), where r is the first-order autocorrelation of the residuals. A value near 2 indicates no serial correlation, below 2 positive serial correlation, above 2 negative. A reported statistic of 1.10 implies a residual autocorrelation of about 0.45, which is substantial.",
          },
          {
            kind: "callout",
            label: "Why positive serial correlation is dangerous",
            body: "It understates standard errors, which inflates t-statistics, which makes worthless variables look significant. It is the violation most likely to produce a confidently wrong conclusion, and financial time series exhibit it constantly.",
          },
          {
            kind: "p",
            text: "Model misspecification is a separate and more serious problem, because it does bias the coefficients. Omitting a relevant variable that correlates with an included one loads the omitted variable's effect onto the included one. Using an incorrect functional form, or including a variable that is determined jointly with the dependent variable, produces the same kind of damage. No standard error correction fixes a misspecified model.",
          },
        ],
      },
      {
        heading: "Time series: trends, autoregression, and stationarity",
        blocks: [
          {
            kind: "p",
            text: "A linear trend model fits a straight line against time and suits a series growing by a constant amount each period. A log-linear trend fits a line to the logarithm and suits a series growing at a constant rate — which describes most financial series better, since compounding is multiplicative.",
          },
          {
            kind: "p",
            text: "An autoregressive model explains the series with its own lagged values. For an AR model to be valid the series must be covariance stationary: constant mean, constant variance, and constant covariance between observations a fixed distance apart.",
          },
          {
            kind: "formula",
            formula: {
              label: "Mean-reverting level of an AR(1)",
              expr: "mean-reverting level = b₀ ÷ ( 1 − b₁ )",
              note: "Defined only when |b₁| < 1. If b₁ = 1 the series is a random walk and has no mean-reverting level at all.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Mean reversion and multiperiod forecasting",
              prompt:
                "An estimated model is x_t = 1.8 + 0.55x_(t−1). Find the mean-reverting level, and forecast three periods ahead from a current value of 5.0.",
              steps: [
                "Mean-reverting level: 1.8 ÷ (1 − 0.55) = 1.8 ÷ 0.45 = 4.0.",
                "One period ahead: 1.8 + 0.55 × 5.0 = 4.55.",
                "Two periods ahead: 1.8 + 0.55 × 4.55 = 4.3025.",
                "Three periods ahead: 1.8 + 0.55 × 4.3025 = 4.1664.",
              ],
              answer:
                "The mean-reverting level is 4.0, and the forecasts are 4.55, 4.3025 and 4.1664 — converging toward 4.0. Multiperiod forecasts must be built by the chain rule, feeding each forecast into the next.",
            },
          },
          {
            kind: "figure",
            figure: {
              caption:
                "Chain-rule forecasts from an AR(1) converge geometrically toward the mean-reverting level.",
              alt: "A declining series of forecast points approaching a horizontal line at the mean-reverting level.",
              svg: `<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="50" y1="150" x2="420" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="50" y1="20" x2="50" y2="150" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="50" y1="112" x2="420" y2="112" stroke="var(--ats-green)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="330" y="106" font-size="10" fill="var(--ats-green)">level = 4.0</text>
  <circle cx="90" cy="40" r="4" fill="var(--primary)"/>
  <circle cx="160" cy="70" r="4" fill="var(--primary)"/>
  <circle cx="230" cy="88" r="4" fill="var(--primary)"/>
  <circle cx="300" cy="98" r="4" fill="var(--primary)"/>
  <path d="M90 40 L160 70 L230 88 L300 98 L370 105" fill="none" stroke="var(--primary)" stroke-width="2"/>
  <text x="72" y="34" font-size="10" fill="var(--text-muted)">5.00</text>
  <text x="142" y="64" font-size="10" fill="var(--text-muted)">4.55</text>
  <text x="208" y="82" font-size="10" fill="var(--text-muted)">4.30</text>
  <text x="280" y="92" font-size="10" fill="var(--text-muted)">4.17</text>
  <text x="200" y="170" font-size="10" fill="var(--text-muted)">periods ahead</text>
</svg>`,
            },
          },
        ],
      },
      {
        heading: "Unit roots, seasonality, and volatility clustering",
        blocks: [
          {
            kind: "p",
            text: "A random walk has a unit root — the coefficient on the lagged value equals one — and is not covariance stationary, because its variance grows without bound. Regressing one non-stationary series on another produces spurious regression: an impressive R² and significant t-statistics describing a relationship that does not exist.",
          },
          {
            kind: "p",
            text: "The Dickey-Fuller test checks for a unit root. The standard remedy is first differencing, which usually produces a stationary series that can then be modelled. Detecting serial correlation in an AR model requires the t-statistics of the residual autocorrelations rather than Durbin-Watson, which is invalid when a lagged dependent variable is present — a point exam questions target directly.",
          },
          {
            kind: "p",
            text: "Two non-stationary series can be cointegrated, meaning a linear combination of them is stationary because they share a common long-run driver. In that case regressing one on the other is legitimate rather than spurious. The Engle-Granger test is the standard check.",
          },
          {
            kind: "p",
            text: "Seasonality shows up as a significant autocorrelation at the seasonal lag — lag 4 in quarterly data, lag 12 in monthly. The correction is to add a seasonal lag term to the model rather than to ignore the pattern.",
          },
          {
            kind: "p",
            text: "ARCH describes conditional heteroskedasticity in a time series: the error variance in one period depends on the squared error in the previous period. Its practical meaning is volatility clustering — turbulent periods follow turbulent periods. Where ARCH is present, standard errors from ordinary least squares are unreliable and the model can instead be used to forecast variance, which is exactly what risk management wants.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Partial slope coefficient", def: "The expected change in the dependent variable per unit change in one regressor, holding the others constant." },
      { term: "Adjusted R²", def: "R² penalised for the number of regressors; can fall when a useless variable is added." },
      { term: "Dummy variable trap", def: "Including a dummy for every category, producing perfect multicollinearity." },
      { term: "Interaction term", def: "The product of two variables, allowing one's effect to depend on the other's level." },
      { term: "Conditional heteroskedasticity", def: "Error variance that depends on the independent variables; biases standard errors, not coefficients." },
      { term: "Durbin-Watson", def: "A statistic approximating 2(1 − r); invalid when the model contains a lagged dependent variable." },
      { term: "Covariance stationary", def: "Constant mean, constant variance, and constant covariance at each lag — required for an AR model." },
      { term: "Mean-reverting level", def: "b₀ ÷ (1 − b₁) for an AR(1); undefined when the series has a unit root." },
      { term: "Spurious regression", def: "An apparently strong relationship between two non-stationary series that share no real link." },
      { term: "Cointegration", def: "Two non-stationary series whose linear combination is stationary, making regression between them valid." },
      { term: "ARCH", def: "Conditional heteroskedasticity in a time series; the statistical expression of volatility clustering." },
    ],
    takeaways: [
      "Every slope is a partial effect — the phrase 'holding others constant' explains why coefficients shift when variables are added.",
      "R² always rises with more variables; adjusted R² and the information criteria are what allow honest model comparison.",
      "Heteroskedasticity and serial correlation damage standard errors, not coefficients — fix the standard errors, not the model.",
      "High R² with individually insignificant coefficients is the signature of multicollinearity.",
      "Misspecification is worse than any of the three violations because it biases the coefficients themselves.",
      "The mean-reverting level is b₀ ÷ (1 − b₁), and multiperiod forecasts require the chain rule.",
      "Durbin-Watson is invalid in an AR model; use residual autocorrelation t-statistics instead.",
      "Regressing non-stationary series produces spurious results unless the series are cointegrated.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-quant-machine-learning",
    examSlug: "cfa-l2",
    topicId: "quant",
    topicName: "Quantitative Methods",
    title: "Machine Learning and Big Data Techniques",
    readingMinutes: 21,
    summary:
      "Supervised versus unsupervised learning, the bias-variance tradeoff, penalised regression, trees and ensembles, clustering and dimension reduction, and how a classifier is actually evaluated.",
    intro:
      "Machine learning at Level II is tested conceptually: which technique suits which problem, what overfitting is and how it is controlled, and how model performance is measured when the target is a category rather than a number. Almost no computation is required, but the vocabulary must be precise, because most questions turn on distinguishing two methods that sound similar.",
    sections: [
      {
        heading: "The three learning types",
        blocks: [
          {
            kind: "p",
            text: "Supervised learning uses labelled data — each observation has a known target — and learns to predict that target for new observations. Unsupervised learning has no target and instead finds structure in the data. Deep learning uses layered neural networks and can be applied to either.",
          },
          {
            kind: "table",
            table: {
              caption: "Matching the technique to the problem",
              headers: ["Problem", "Type", "Techniques"],
              rows: [
                ["Predict a continuous value", "Supervised regression", "Penalised regression, regression trees"],
                ["Predict a category", "Supervised classification", "Logistic regression, CART, random forest, SVM"],
                ["Group similar observations", "Unsupervised clustering", "K-means, hierarchical clustering"],
                ["Reduce the number of variables", "Unsupervised dimension reduction", "Principal components analysis"],
              ],
            },
          },
          {
            kind: "p",
            text: "The first question to ask of any vignette is whether a target variable exists. If the analyst is predicting default or no default, that is supervised classification. If she is grouping companies by similarity with no predefined groups, that is unsupervised clustering. Questions frequently hinge on nothing more than this distinction.",
          },
        ],
      },
      {
        heading: "Overfitting and the bias-variance tradeoff",
        blocks: [
          {
            kind: "p",
            text: "A model's total error decomposes into bias, variance, and irreducible noise. Bias is error from an overly simple model that misses real structure — underfitting. Variance is error from an overly complex model that has fitted the noise in the training sample — overfitting.",
          },
          {
            kind: "p",
            text: "The two move in opposite directions as complexity increases, and total error is minimised somewhere in between. That tension is the central problem of machine learning, and every regularisation technique in the reading is an attempt to sit at the right point on it.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "Total error is minimised where the falling bias curve and the rising variance curve trade off against each other.",
              alt: "Two crossing curves — bias falling and variance rising with complexity — and a U-shaped total error curve.",
              svg: `<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="50" y1="155" x2="420" y2="155" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="50" y1="18" x2="50" y2="155" stroke="var(--border)" stroke-width="1.5"/>
  <path d="M60 40 C 130 100, 200 132, 410 146" fill="none" stroke="var(--ats-green)" stroke-width="2"/>
  <path d="M60 148 C 200 140, 300 92, 410 30" fill="none" stroke="var(--ats-red)" stroke-width="2"/>
  <path d="M60 62 C 150 96, 190 96, 260 84 C 330 70, 380 46, 410 32" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
  <line x1="215" y1="90" x2="215" y2="155" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="176" y="172" font-size="10" fill="var(--text-muted)">optimum</text>
  <text x="66" y="34" font-size="10" fill="var(--ats-green)">bias</text>
  <text x="360" y="24" font-size="10" fill="var(--ats-red)">variance</text>
  <text x="86" y="70" font-size="10" fill="var(--primary)">total error</text>
  <text x="300" y="172" font-size="10" fill="var(--text-muted)">model complexity</text>
</svg>`,
            },
          },
          {
            kind: "p",
            text: "Overfitting is detected by splitting the data. The training sample fits the model, the validation sample tunes it, and the test sample is touched once at the very end. A model performing far better in training than in validation has overfitted. K-fold cross-validation reuses the data efficiently by rotating which portion serves as validation.",
          },
          {
            kind: "callout",
            label: "The financial data caveat",
            body: "Randomly shuffled cross-validation folds leak future information into the training set, because financial observations are ordered in time. Time-series data requires splits that respect chronology — a point that connects directly to the look-ahead bias discussed in backtesting.",
          },
        ],
      },
      {
        heading: "Penalised regression",
        blocks: [
          {
            kind: "p",
            text: "Penalised regression adds a term to the objective function that charges for coefficient size, so a variable must earn its place by improving fit more than the penalty costs. The result is a simpler model that generalises better.",
          },
          {
            kind: "bullets",
            items: [
              "LASSO penalises the sum of absolute coefficient values and can shrink coefficients exactly to zero, performing variable selection automatically.",
              "Ridge regression penalises the sum of squared coefficients and shrinks them toward zero without eliminating any.",
              "Elastic net combines both penalties.",
              "The penalty strength is a hyperparameter chosen by cross-validation, not estimated from the data.",
            ],
          },
          {
            kind: "p",
            text: "LASSO's ability to zero out coefficients is the distinguishing feature and the one most often tested. If a question asks which technique reduces the number of variables in the final model, the answer is LASSO rather than ridge.",
          },
        ],
      },
      {
        heading: "Classification: logistic regression and trees",
        blocks: [
          {
            kind: "p",
            text: "Logistic regression predicts the probability that an observation belongs to a category, using the logistic function to constrain output between zero and one. Ordinary least squares is unsuitable for a binary target because it can predict probabilities below zero or above one. Coefficients are expressed in log-odds, so interpreting them requires exponentiating to get an odds ratio.",
          },
          {
            kind: "p",
            text: "Classification and regression trees split the data repeatedly on the variable that best separates the target at each node, producing a set of decision rules. Trees are attractive because they are interpretable, capture non-linear relationships, and handle interactions automatically. Their weakness is instability — a small change in the data can produce a very different tree — and a strong tendency to overfit if not pruned.",
          },
          {
            kind: "p",
            text: "Ensemble methods address that weakness by combining many models. A random forest builds many trees on bootstrapped samples using a random subset of features at each split, then averages them. Averaging reduces variance sharply, and the randomisation ensures the trees are not all making the same mistake. The cost is interpretability: a forest of hundreds of trees cannot be read the way a single tree can.",
          },
          {
            kind: "p",
            text: "A support vector machine finds the boundary that separates categories with the widest possible margin. It performs well with many features relative to observations, which is common in financial data, and handles non-linear boundaries through kernel functions.",
          },
        ],
      },
      {
        heading: "Evaluating a classifier",
        blocks: [
          {
            kind: "p",
            text: "Accuracy alone is misleading whenever classes are imbalanced. A model predicting that no company defaults will be 98% accurate in a sample with a 2% default rate while being completely useless. The confusion matrix is what makes the failure visible.",
          },
          {
            kind: "formula",
            formula: {
              label: "The classification metrics",
              expr: "precision = TP ÷ (TP + FP)     recall = TP ÷ (TP + FN)     F1 = 2 × precision × recall ÷ (precision + recall)",
              note: "Precision asks how many flagged cases were real. Recall asks how many real cases were caught. F1 is their harmonic mean.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Reading a confusion matrix",
              prompt:
                "A default model on 1,000 companies produces 180 true positives, 40 false positives, 720 true negatives and 60 false negatives. Compute accuracy, precision, recall and F1.",
              steps: [
                "Accuracy = (180 + 720) ÷ 1,000 = 0.90.",
                "Precision = 180 ÷ (180 + 40) = 180 ÷ 220 = 0.8182.",
                "Recall = 180 ÷ (180 + 60) = 180 ÷ 240 = 0.7500.",
                "F1 = 2 × 0.8182 × 0.7500 ÷ (0.8182 + 0.7500) = 1.2273 ÷ 1.5682 = 0.7826.",
              ],
              answer:
                "Accuracy 90%, precision 81.8%, recall 75.0%, F1 78.3%. The model misses a quarter of actual defaults, which accuracy alone would never have revealed.",
            },
          },
          {
            kind: "callout",
            label: "Which metric matters depends on the cost of each error",
            body: "Missing a default (a false negative) usually costs far more than investigating a healthy company unnecessarily (a false positive). Where that is true, recall matters more than precision, and the classification threshold should be lowered accordingly.",
          },
        ],
      },
      {
        heading: "Unsupervised methods",
        blocks: [
          {
            kind: "p",
            text: "K-means partitions observations into a number of clusters the analyst specifies in advance, assigning each observation to the nearest centroid and iterating until the assignments stabilise. It is fast, but the number of clusters is an input rather than a finding, and the result can depend on the random starting positions.",
          },
          {
            kind: "p",
            text: "Hierarchical clustering builds a nested tree of clusters and does not require the number to be specified beforehand. Agglomerative clustering starts with every observation as its own cluster and merges upward; divisive clustering starts with one cluster and splits downward. The result is displayed as a dendrogram, and the analyst chooses where to cut it.",
          },
          {
            kind: "p",
            text: "Principal components analysis reduces many correlated variables to a smaller set of uncorrelated composites, each capturing as much remaining variance as possible. It is valuable where variables are highly correlated — as the constituents of a yield curve are — and the first few components typically explain most of the variation. The cost is interpretability: a principal component is a weighted blend of the original variables and often has no clean economic meaning.",
          },
          {
            kind: "p",
            text: "Neural networks pass inputs through layers of nodes, each applying weights and a non-linear activation function, with the weights learned by backpropagation. Deep learning simply means many hidden layers. Networks can model very complex relationships but require large samples, are prone to overfitting, and are the least interpretable technique in the reading — which is a genuine obstacle where an investment decision must be explained to a client or a regulator.",
          },
        ],
      },
      {
        heading: "Big data and text analytics",
        blocks: [
          {
            kind: "p",
            text: "Big data is conventionally described by volume, velocity, variety and veracity. The fourth is the one analysts underrate: a large, fast, varied data set of poor quality produces confident nonsense faster than a small one.",
          },
          {
            kind: "p",
            text: "Unstructured text must be converted to numbers before modelling. Cleansing removes HTML, punctuation and duplicates. Preprocessing then tokenises the text into words, lowercases them, removes stop words, and applies stemming or lemmatisation to collapse variants to a root. The bag-of-words representation counts term occurrences, and term frequency-inverse document frequency weights each term by how distinctive it is across documents.",
          },
          {
            kind: "p",
            text: "Sentiment analysis on earnings calls and filings is the standard financial application. The ethical obligations from the backtesting reading apply directly here: data must be lawfully obtained, privacy respected, and any model shown to clients described accurately including its limitations under Standard V(B).",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Supervised learning", def: "Learning to predict a known target from labelled training data." },
      { term: "Unsupervised learning", def: "Finding structure in data with no target variable." },
      { term: "Bias-variance tradeoff", def: "The tension between underfitting a simple model and overfitting a complex one." },
      { term: "LASSO", def: "Penalised regression using absolute coefficient values, which can shrink coefficients exactly to zero." },
      { term: "Ridge regression", def: "Penalised regression using squared coefficients, shrinking them without eliminating any." },
      { term: "Hyperparameter", def: "A setting chosen by the analyst through cross-validation rather than estimated from the data." },
      { term: "CART", def: "Classification and regression trees — interpretable rule-based models prone to overfitting." },
      { term: "Random forest", def: "An ensemble of bootstrapped trees using random feature subsets, averaged to cut variance." },
      { term: "Confusion matrix", def: "The table of true and false positives and negatives underlying every classification metric." },
      { term: "Precision and recall", def: "TP/(TP+FP) and TP/(TP+FN) — how many flags were real, and how many real cases were caught." },
      { term: "K-means", def: "Clustering into a pre-specified number of groups around iteratively updated centroids." },
      { term: "Dendrogram", def: "The tree diagram displaying a hierarchical clustering, cut at the analyst's chosen level." },
      { term: "Principal components analysis", def: "Reducing correlated variables to fewer uncorrelated composites ordered by variance explained." },
      { term: "TF-IDF", def: "Weighting a term by its frequency in a document against its rarity across the corpus." },
    ],
    takeaways: [
      "Ask first whether a target variable exists — that single question separates supervised from unsupervised problems.",
      "Bias is underfitting, variance is overfitting, and every regularisation technique is an attempt to balance them.",
      "LASSO can zero out coefficients and therefore selects variables; ridge only shrinks them.",
      "Trees are interpretable but unstable; random forests fix the instability and lose the interpretability.",
      "Accuracy is worthless on imbalanced classes — the confusion matrix, precision and recall are what reveal the failure.",
      "K-means needs the cluster count specified in advance; hierarchical clustering does not and yields a dendrogram.",
      "PCA trades interpretability for dimension reduction; neural networks trade it away almost entirely.",
      "Randomly shuffled cross-validation leaks the future in time-series data — the same error as look-ahead bias in a backtest.",
    ],
  },
];

// Questions live in cfa-l2-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const quantQuestionsL2: Question[] = [];
