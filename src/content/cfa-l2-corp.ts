// ============================================================
// Certus — CFA Level II Corporate Issuers readings
//
// WHY THIS FILE EXISTS: a concept audit found the Level II corporate
// chapter covered the Modigliani-Miller propositions and a buyback EPS
// example, and little else. Board of directors structure returned ZERO
// matches. So did residual dividend policy. ESG, dividend policy and
// stakeholder analysis each had two passing mentions; share repurchases
// had three.
//
// The Level II corporate issuers target is 128. Two chapters follow:
// one completing capital structure and payout policy, one covering
// corporate governance, stakeholder analysis and ESG integration.
//
// Every number in every worked example was computed in Python first.
// The MM Proposition II check is the one that matters: levering the
// cost of equity to 15% and reweighting gives a WACC of exactly 11%,
// equal to the unlevered cost — which is the proposition itself.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const corpChaptersL2: Chapter[] = [
  // ----------------------------------------------------------
  {
    id: "cfa-l2-corp-capital-payout",
    examSlug: "cfa-l2",
    topicId: "corp",
    topicName: "Corporate Issuers",
    title: "Capital Structure and Payout Policy",
    readingMinutes: 21,
    summary:
      "The Modigliani-Miller propositions with and without taxes, what the real-world frictions add back, and how dividends and buybacks actually differ.",
    intro:
      "Modigliani and Miller proved that under a specific and unrealistic set of assumptions, capital structure does not matter. That result is useful precisely because it is wrong — it tells you that any argument for an optimal capital structure must identify which assumption it breaks. This reading works through the propositions, the frictions that make leverage matter, and then payout policy, where the same logic applies.",
    sections: [
      {
        heading: "MM without taxes",
        blocks: [
          {
            kind: "p",
            text: "The MM assumptions are homogeneous expectations, no taxes, no bankruptcy costs, no agency costs, no asymmetric information, and borrowing at the same rate for investors and firms. Under those conditions, Proposition I states that firm value is independent of capital structure. The intuition is that an investor can lever or unlever their own position, so paying a premium for the firm to do it makes no sense.",
          },
          {
            kind: "formula",
            formula: {
              label: "MM Proposition II without taxes",
              expr: "r_e = r₀ + ( r₀ − r_d ) × D/E",
              note: "The cost of equity rises linearly with leverage. r₀ is the unlevered cost of capital, which under these assumptions equals the WACC at every leverage level.",
            },
          },
          {
            kind: "example",
            example: {
              title: "Why the WACC does not move",
              prompt:
                "A firm has an unlevered cost of capital of 11%, a cost of debt of 6%, and a debt-to-equity ratio of 0.8. Find the cost of equity and verify the WACC.",
              steps: [
                "Cost of equity: 0.11 + (0.11 − 0.06) × 0.8 = 0.11 + 0.04 = 0.15, or 15%.",
                "Weights: D/V = 0.8 ÷ 1.8 = 0.4444, E/V = 1.0 ÷ 1.8 = 0.5556.",
                "WACC = 0.5556 × 0.15 + 0.4444 × 0.06 = 0.0833 + 0.0267 = 0.11.",
              ],
              answer:
                "The WACC is exactly 11%, equal to the unlevered cost of capital. Adding cheap debt raised the cost of equity by precisely enough to offset the benefit — which is Proposition II stated as arithmetic.",
            },
          },
          {
            kind: "callout",
            label: "The point of an unrealistic model",
            body: "MM is not a description of the world. It is a checklist: if capital structure matters, name the assumption being violated. Every real theory of optimal leverage — taxes, distress costs, agency, signalling — is an answer to that question.",
          },
        ],
      },
      {
        heading: "MM with taxes",
        blocks: [
          {
            kind: "p",
            text: "Interest is tax deductible and dividends are not, so debt creates a tax shield worth the tax rate times the debt outstanding. Relax only the no-tax assumption and firm value rises with leverage.",
          },
          {
            kind: "formula",
            formula: {
              label: "MM with corporate taxes",
              expr: "V_levered = V_unlevered + ( t × D )     and     WACC = r₀ × ( 1 − t × D/V )",
              note: "With an unlevered value of 1,600, debt of 400 and a 25% tax rate, the levered value is 1,700. With r₀ = 11%, t = 25% and D/V = 0.4444, the WACC falls to 9.78%.",
            },
          },
          {
            kind: "p",
            text: "Taken literally, this implies the optimal capital structure is 100% debt — which no firm adopts. The model is again useful for what it forces you to explain: something must offset the tax shield, and that something is the cost of financial distress.",
          },
        ],
      },
      {
        heading: "The static trade-off theory",
        blocks: [
          {
            kind: "p",
            text: "The static trade-off theory balances the tax shield against the expected costs of financial distress. Direct costs are legal and administrative fees in bankruptcy. Indirect costs are usually larger and arrive earlier: customers defect, suppliers tighten terms, key employees leave, and management is diverted from operating the business.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "Firm value under the static trade-off theory. The tax shield lifts value until expected distress costs overtake it.",
              alt: "A curve rising then falling with leverage, with a dashed line showing the MM-with-taxes prediction rising indefinitely.",
              svg: `<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="50" y1="155" x2="420" y2="155" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="50" y1="18" x2="50" y2="155" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="50" y1="120" x2="410" y2="34" stroke="var(--text-muted)" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M50 120 C 130 78, 190 56, 240 54 C 310 52, 370 96, 415 140" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
  <line x1="240" y1="54" x2="240" y2="155" stroke="var(--ats-green)" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="204" y="172" font-size="10" fill="var(--ats-green)">optimum</text>
  <text x="300" y="34" font-size="10" fill="var(--text-muted)">MM with taxes</text>
  <text x="96" y="66" font-size="10" fill="var(--primary)">actual firm value</text>
  <text x="330" y="172" font-size="10" fill="var(--text-muted)">leverage</text>
  <text x="8" y="90" font-size="10" fill="var(--text-muted)">value</text>
</svg>`,
            },
          },
          {
            kind: "p",
            text: "The optimum sits where the marginal tax benefit equals the marginal expected distress cost. That point differs by firm: businesses with stable cash flows and tangible, redeployable assets can carry more debt than businesses whose value is intangible and whose customers care about survival. A software company and a utility should not have the same capital structure, and the theory explains why.",
          },
        ],
      },
      {
        heading: "Agency costs, asymmetric information, and pecking order",
        blocks: [
          {
            kind: "p",
            text: "Agency costs of equity arise when managers spend shareholders' money on empire building, excessive perquisites or unprofitable expansion. Debt reduces this by committing the firm to fixed payments — free cash flow that would otherwise be discretionary must instead service the debt. This is the free cash flow hypothesis, and it is an argument for leverage independent of taxes.",
          },
          {
            kind: "p",
            text: "Debt introduces its own agency conflicts. Once a firm is highly levered, shareholders capture the upside of risky projects while creditors bear much of the downside, creating an incentive for asset substitution. Debt overhang is the mirror problem: shareholders may decline a positive-NPV project because the gains would accrue mostly to existing creditors. Covenants exist to constrain both.",
          },
          {
            kind: "p",
            text: "Asymmetric information produces the pecking order. Managers know more about the firm's prospects than outside investors, and issuing equity signals that managers consider the shares fairly valued or expensive. Investors discount the shares on announcement, which makes equity the most costly source. Firms therefore prefer internal funds first, then debt, then equity last.",
          },
          {
            kind: "callout",
            label: "Pecking order versus trade-off",
            body: "The trade-off theory predicts firms move toward a target leverage ratio. The pecking order predicts leverage is simply the residual of past financing needs, with no target at all. Profitable firms that borrow little are evidence for the pecking order, since the trade-off theory would have them lever up to capture the tax shield.",
          },
          {
            kind: "p",
            text: "Signalling extends the same logic. Increasing leverage can signal management's confidence in future cash flows, since a firm expecting trouble would not take on fixed obligations. That is why a debt-financed buyback is often read more positively than an equity issue, whatever the underlying economics.",
          },
        ],
      },
      {
        heading: "Payout policy: the same debate again",
        blocks: [
          {
            kind: "p",
            text: "MM's dividend irrelevance argument runs parallel to the capital structure one. In a frictionless world an investor indifferent to receiving a dividend can manufacture one by selling shares, and an investor who does not want one can reinvest it. Value comes from investment decisions, not from how returns are packaged.",
          },
          {
            kind: "p",
            text: "The frictions that break irrelevance are taxes, signalling, agency costs and the clientele effect. Where dividends are taxed more heavily than capital gains, investors in high brackets prefer buybacks. Dividends signal confidence because managers cut them only reluctantly. And regular dividends impose discipline by removing cash management might otherwise waste.",
          },
          {
            kind: "table",
            table: {
              caption: "Three dividend policies",
              headers: ["Policy", "Mechanism", "Consequence"],
              rows: [
                ["Stable dividend", "Smooth payments, adjusted slowly toward a target", "Predictable; most common in practice"],
                ["Constant payout ratio", "Fixed percentage of each year's earnings", "Dividend as volatile as earnings; rare"],
                ["Residual dividend", "Pay out whatever remains after funding capex", "Highly variable; maximises retained funding"],
              ],
            },
          },
          {
            kind: "example",
            example: {
              title: "Residual dividend policy",
              prompt:
                "A firm earns $240 million and plans capital spending of $300 million, funded to a 60% equity target. Under a strict residual policy, what dividend is paid?",
              steps: [
                "Equity required for the capital budget: $300m × 0.60 = $180m.",
                "Residual available: $240m − $180m = $60m.",
                "Payout ratio: $60m ÷ $240m = 25%.",
              ],
              answer:
                "The dividend is $60 million, a 25% payout. Note the volatility this creates — with earnings of $180m and a $250m budget at 40% equity, the dividend would be $80m and the payout 44.4%. Firms therefore rarely apply the residual approach strictly.",
            },
          },
          {
            kind: "p",
            text: "The target payout adjustment model is what firms actually do: move gradually toward a target payout ratio rather than reset the dividend each year. Managers report that they would sooner cut investment or raise debt than cut a dividend, because the market treats a cut as an admission about the future.",
          },
        ],
      },
      {
        heading: "Share repurchases",
        blocks: [
          {
            kind: "p",
            text: "A repurchase is economically equivalent to a cash dividend of the same size when taxes are ignored and the shares are bought at fair value. The differences that matter are tax treatment, flexibility, and the signal sent.",
          },
          {
            kind: "example",
            example: {
              title: "Is the buyback accretive?",
              prompt:
                "A firm earns $96 million on 40 million shares. It borrows $240 million at 5% pre-tax, tax rate 25%, to repurchase 4 million shares at $60. Is EPS accretive?",
              steps: [
                "Current EPS: $96m ÷ 40m = $2.40.",
                "After-tax interest cost: $240m × 5% × (1 − 0.25) = $9.0m.",
                "New net income: $96m − $9.0m = $87.0m; new share count 36 million.",
                "New EPS: $87.0m ÷ 36m = $2.4167.",
              ],
              answer:
                "EPS rises from $2.40 to $2.4167, so the buyback is accretive. The reason is visible in the rates: the earnings yield of $2.40 ÷ $60 = 4.0% exceeds the after-tax cost of debt of 3.75%. Whenever the earnings yield exceeds the after-tax borrowing cost, a debt-funded buyback is accretive — arithmetic, not evidence of value creation.",
            },
          },
          {
            kind: "p",
            text: "That final point is the one exam questions probe. EPS accretion says nothing about whether the repurchase was wise. A buyback at a price above intrinsic value transfers wealth from continuing shareholders to selling ones, and it will still show as accretive if the rate condition holds.",
          },
          {
            kind: "p",
            text: "Book value per share moves in the opposite direction from the purchase price relative to book. Buying back shares below book value per share raises BVPS; buying above lowers it. With book equity of $1,200 million and 40 million shares, BVPS is $30. Repurchasing 4 million shares at $25 raises BVPS to $30.56; at $40 it falls to $28.89.",
          },
          {
            kind: "bullets",
            items: [
              "Tax: where capital gains are taxed more lightly or later, buybacks are more efficient than dividends.",
              "Flexibility: a repurchase programme can be paused without the signalling damage of a dividend cut.",
              "Signal: management may be indicating the shares are undervalued — or managing EPS toward a compensation target.",
              "Offsetting dilution: many buybacks merely absorb shares issued under employee option plans rather than returning capital.",
              "Ownership: non-participating shareholders see their proportional stake rise.",
            ],
          },
          {
            kind: "callout",
            label: "The analyst's question",
            body: "Ask what the buyback was funded from and what price was paid relative to value. A repurchase funded by debt at a stretched multiple, timed to hit an EPS target, is a different event from one funded by surplus cash at a depressed price — even though both report as accretive.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "MM Proposition I", def: "Firm value is independent of capital structure under the MM assumptions." },
      { term: "MM Proposition II", def: "The cost of equity rises linearly with leverage, leaving the WACC unchanged absent taxes." },
      { term: "Interest tax shield", def: "The value created by interest deductibility, worth the tax rate times debt outstanding." },
      { term: "Static trade-off theory", def: "Optimal leverage balances the tax shield against expected costs of financial distress." },
      { term: "Free cash flow hypothesis", def: "Debt reduces agency costs of equity by committing discretionary cash to fixed payments." },
      { term: "Debt overhang", def: "Shareholders declining a positive-NPV project because gains would accrue to existing creditors." },
      { term: "Pecking order theory", def: "Firms prefer internal funds, then debt, then equity, because of asymmetric information." },
      { term: "Residual dividend policy", def: "Paying out whatever remains after funding the equity share of the capital budget." },
      { term: "Target payout adjustment", def: "Moving gradually toward a target payout ratio rather than resetting annually." },
      { term: "EPS accretion", def: "A rise in earnings per share; occurs whenever the earnings yield exceeds the after-tax cost of debt." },
    ],
    takeaways: [
      "MM is a checklist, not a description: if capital structure matters, name the assumption being violated.",
      "Without taxes, levering raises the cost of equity by exactly enough to leave the WACC unchanged.",
      "The tax shield is worth t × D, but taken alone it absurdly implies 100% debt.",
      "The static trade-off optimum differs by firm — stable cash flows and tangible assets support more leverage.",
      "Pecking order predicts no target leverage at all, and profitable firms that borrow little support it.",
      "A residual dividend policy maximises internal funding at the cost of extreme dividend volatility.",
      "A debt-funded buyback is accretive whenever the earnings yield exceeds the after-tax cost of debt — arithmetic, not value creation.",
      "Buying back shares below book raises BVPS; above book lowers it.",
    ],
  },

  // ----------------------------------------------------------
  {
    id: "cfa-l2-corp-governance-esg",
    examSlug: "cfa-l2",
    topicId: "corp",
    topicName: "Corporate Issuers",
    title: "Corporate Governance, Stakeholders, and ESG Integration",
    readingMinutes: 19,
    summary:
      "Where the conflicts actually sit, what a board is supposed to do, the ownership structures that change the analysis, and how ESG factors enter a valuation rather than a values statement.",
    intro:
      "Governance analysis is the study of who can extract value from a company and what stops them. That framing is more useful than a checklist of best practices, because it directs attention to the specific conflict present in the specific company — which varies enormously between a widely held firm with a weak board and a founder-controlled firm with dual-class shares.",
    sections: [
      {
        heading: "Stakeholders and the conflicts between them",
        blocks: [
          {
            kind: "p",
            text: "Stakeholder groups include shareholders, creditors, managers, employees, customers, suppliers, governments and the wider community. Each has a claim, and the claims conflict in predictable ways.",
          },
          {
            kind: "table",
            table: {
              caption: "The principal conflicts",
              headers: ["Conflict", "Nature", "Typical control"],
              rows: [
                ["Shareholders vs managers", "Managers pursue growth, perquisites, job security", "Board oversight, equity-linked pay, takeover threat"],
                ["Shareholders vs creditors", "Shareholders favour risk; creditors bear the downside", "Covenants, collateral, seniority"],
                ["Controlling vs minority shareholders", "Related-party transactions, tunnelling", "Independent directors, minority protections"],
                ["Company vs community", "Externalities not borne by the firm", "Regulation, litigation, reputation"],
              ],
            },
          },
          {
            kind: "p",
            text: "The shareholder-versus-manager conflict is the classic principal-agent problem and dominates in widely held firms with dispersed ownership. But in most of the world the more common conflict is between a controlling family or state and minority holders — where the board and management may be perfectly aligned with the controller, and the risk is value extraction from everyone else.",
          },
          {
            kind: "callout",
            label: "The question to ask of any governance vignette",
            body: "Which conflict is present here? A dispersed-ownership company needs strong board independence to control management. A controlled company needs minority protections to control the controller. Applying the wrong remedy to the wrong structure is the error the questions test.",
          },
        ],
      },
      {
        heading: "The board of directors",
        blocks: [
          {
            kind: "p",
            text: "The board hires and fires the chief executive, sets strategy and risk appetite, approves major transactions, oversees financial reporting and internal controls, and sets executive compensation. Its independence from management is what makes those functions meaningful.",
          },
          {
            kind: "bullets",
            items: [
              "Independent directors: a majority is generally regarded as necessary for effective oversight.",
              "Separation of chair and chief executive: combining them concentrates power in the person being monitored.",
              "Lead independent director: the usual compromise where the roles are combined.",
              "Audit committee: entirely independent, with at least one financial expert; hires and oversees the external auditor.",
              "Remuneration committee: independent, to prevent management from setting its own pay.",
              "Nominating committee: independent, or the chief executive selects his own monitors.",
            ],
          },
          {
            kind: "p",
            text: "Board structure varies. A one-tier board combines executive and non-executive directors in a single body, the Anglo-American norm. A two-tier board separates a supervisory board from a management board, common in Germany and often including employee representation. Neither is inherently superior, and the exam tests whether you can identify which is described rather than rank them.",
          },
          {
            kind: "p",
            text: "A staggered or classified board elects only a fraction of directors each year. It insulates directors from removal and entrenches management, which is why it is generally regarded as poor practice — though it can also protect a long-term strategy from short-term pressure. Annual election of the full board is the shareholder-friendly alternative.",
          },
          {
            kind: "p",
            text: "Other structural features that matter: board size, since very large boards deliberate poorly; overboarding, where directors sit on too many boards to discharge any properly; tenure, since long service erodes independence; and diversity of background, which affects the range of challenge management actually faces.",
          },
        ],
      },
      {
        heading: "Ownership structures and shareholder rights",
        blocks: [
          {
            kind: "p",
            text: "Dual-class share structures give founders voting control disproportionate to their economic stake. A founder holding 12% of the cash flow rights may control 60% of the votes. That insulates long-term strategy from market pressure, and it also removes the mechanism by which shareholders discipline poor management. Both effects are real, and which dominates is a judgement about the specific company.",
          },
          {
            kind: "p",
            text: "Cumulative voting allows a shareholder to concentrate all votes on one candidate, which helps minorities elect a representative. Statutory voting gives one vote per share per director and favours the majority. Proxy voting allows shareholders to vote without attending, and proxy access allows them to place nominees on the company's own ballot — a materially stronger right than merely voting on management's slate.",
          },
          {
            kind: "p",
            text: "Anti-takeover provisions include poison pills, which dilute an acquirer crossing an ownership threshold; golden parachutes, which make executive removal expensive; and supermajority requirements. Each protects incumbents, and each reduces the value of the takeover threat as a disciplining device.",
          },
          {
            kind: "p",
            text: "Say-on-pay votes, whether binding or advisory, give shareholders influence over compensation. Related-party transaction approval requirements are among the most important protections in controlled companies, since that is the main channel through which value is extracted.",
          },
        ],
      },
      {
        heading: "Executive compensation",
        blocks: [
          {
            kind: "p",
            text: "Compensation is the primary tool for aligning managers with shareholders, and a primary source of misalignment when designed badly. Equity-linked pay ties management's outcome to the share price, but the specific structure determines what behaviour it actually rewards.",
          },
          {
            kind: "bullets",
            items: [
              "Options reward upside and impose no downside, which encourages risk-taking — sometimes appropriately, sometimes not.",
              "Restricted shares carry both upside and downside and better mimic ownership.",
              "Short vesting periods reward short-horizon decisions and share price management.",
              "EPS-based targets can be met through buybacks rather than operating improvement.",
              "Relative performance metrics separate skill from a general market move; absolute metrics do not.",
            ],
          },
          {
            kind: "p",
            text: "An analyst should read the compensation structure as a forecast of behaviour. A chief executive paid on three-year EPS growth with a large option grant has a specific set of incentives, and the buyback programme announced shortly before a vesting date is not a coincidence worth ignoring.",
          },
        ],
      },
      {
        heading: "ESG integration",
        blocks: [
          {
            kind: "p",
            text: "ESG integration means incorporating environmental, social and governance factors into financial analysis where they are financially material. That qualifier does the work: the analytical case is not that these factors are virtuous but that some of them affect cash flows, discount rates or the risk of a large loss.",
          },
          {
            kind: "table",
            table: {
              caption: "How ESG factors reach a valuation",
              headers: ["Factor", "Channel", "Example"],
              rows: [
                ["Carbon exposure", "Future costs and stranded assets", "Carbon pricing raising operating costs"],
                ["Water scarcity", "Operating continuity", "A plant unable to run in drought"],
                ["Labour practices", "Cost, litigation, brand", "Supply chain scandal hitting sales"],
                ["Product safety", "Litigation and recall costs", "A large one-off liability"],
                ["Governance quality", "Discount rate and tail risk", "Fraud risk in a controlled company"],
              ],
            },
          },
          {
            kind: "p",
            text: "Materiality is sector-specific. Water use is central for a beverage producer and largely irrelevant for a software firm. Data privacy runs the other way. An ESG analysis that applies the same factor weights to every industry is not analysis.",
          },
          {
            kind: "p",
            text: "Approaches differ and are frequently confused. Negative screening excludes sectors. Positive screening or best-in-class selects leaders within each sector. Thematic investing targets a specific issue such as clean energy. Impact investing seeks measurable outcomes alongside return. ESG integration, strictly speaking, is none of these — it is the incorporation of material factors into ordinary financial analysis, and it need not exclude anything.",
          },
          {
            kind: "callout",
            label: "The disclosure obligation",
            body: "A manager describing a fund as ESG must be accurate about what the strategy actually does. Marketing a fund as sustainable while integrating ESG only nominally is a misrepresentation under Standard I(C), and the gap between label and practice is now a live regulatory concern in multiple jurisdictions.",
          },
          {
            kind: "p",
            text: "The practical difficulties are real and should be acknowledged rather than glossed. ESG ratings from different providers correlate poorly with each other, because they measure different things with different weights — unlike credit ratings, which broadly agree. Disclosure is inconsistent and largely self-reported. And a company's rating often reflects the quality of its reporting rather than the quality of its conduct, which favours large firms with resources to produce disclosure.",
          },
        ],
      },
      {
        heading: "Governance as a valuation input",
        blocks: [
          {
            kind: "p",
            text: "Weak governance shows up in valuation through two channels. It raises the required return, because investors demand compensation for the risk of expropriation or of value-destroying decisions. And it lowers expected cash flows to minority shareholders, because some of the cash is extracted before it reaches them.",
          },
          {
            kind: "p",
            text: "That is why companies with poor minority protections trade at persistent discounts, and why the same assets are worth different amounts under different governance regimes. A governance improvement is a genuine catalyst, which is the analytical basis for shareholder activism.",
          },
          {
            kind: "p",
            text: "The limits of governance analysis deserve a mention. Good governance reduces the probability of a specific class of failure; it does not make a bad business good, and a company can have exemplary board structure and a hopeless strategy. Treating a governance score as a proxy for investment quality is an error in the opposite direction from ignoring governance entirely.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Principal-agent problem", def: "The conflict arising when managers act as agents for shareholders with different interests." },
      { term: "Tunnelling", def: "A controlling shareholder extracting value through related-party transactions at minorities' expense." },
      { term: "Independent director", def: "A director with no material relationship to the company beyond the board seat." },
      { term: "Two-tier board", def: "A structure separating a supervisory board from a management board, common in Germany." },
      { term: "Staggered board", def: "Electing only a fraction of directors each year, which entrenches incumbents." },
      { term: "Dual-class shares", def: "Share classes with unequal voting rights, giving founders control beyond their economic stake." },
      { term: "Proxy access", def: "The right for shareholders to place their own nominees on the company's ballot." },
      { term: "Poison pill", def: "A provision diluting an acquirer that crosses an ownership threshold." },
      { term: "Say on pay", def: "A shareholder vote on executive compensation, binding or advisory." },
      { term: "ESG integration", def: "Incorporating financially material ESG factors into ordinary financial analysis." },
      { term: "Negative screening", def: "Excluding sectors or companies on non-financial criteria; distinct from integration." },
      { term: "Materiality", def: "Whether a factor plausibly affects cash flows or risk — and it is sector-specific." },
    ],
    takeaways: [
      "Governance analysis asks who can extract value and what stops them — identify the conflict before prescribing a remedy.",
      "Dispersed ownership creates a manager-shareholder conflict; concentrated ownership creates a controller-minority conflict.",
      "Board independence, split chair and chief executive roles, and independent audit, remuneration and nominating committees are the structural core.",
      "A staggered board entrenches incumbents; annual election of the whole board is the shareholder-friendly alternative.",
      "Read compensation structure as a forecast of behaviour, including which metrics can be met by financial engineering.",
      "ESG integration is about financial materiality, and materiality is sector-specific.",
      "ESG ratings correlate poorly across providers, unlike credit ratings — they measure different things.",
      "Weak governance raises the required return and lowers cash flows reaching minorities, which is why it shows up as a valuation discount.",
    ],
  },
];

// Questions live in cfa-l2-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const corpQuestionsL2: Question[] = [];
