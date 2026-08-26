// ============================================================
// Certus — CFA Level III Behavioral Finance supplement
//
// WHY THIS FILE EXISTS: the existing L3 behavioural chapter covers the
// main biases well — loss aversion, overconfidence, anchoring, framing,
// mental accounting, availability, representativeness and the
// disposition effect all appear. But a concept audit found gaps:
// self-attribution bias, the endowment effect, narrow framing,
// behaviourally modified asset allocation and utility theory all
// returned ZERO matches. The four investor personality types had one
// mention; prospect theory had four and bounded rationality three.
//
// This chapter fills those gaps and adds the adviser-facing application
// layer — deciding whether to moderate or adapt to a client's bias,
// which is what Level III actually examines.
//
// FIGURES: inline SVG must use the app's CSS variables so it themes in
// light and dark. viewBox stays ~460 wide to match the renderer.
// ============================================================

import { Chapter, Question } from "./types";

export const behavioralChaptersL3: Chapter[] = [
  {
    id: "cfa-l3-behavioral-applied",
    examSlug: "cfa-l3",
    topicId: "behavioral",
    topicName: "Behavioral Finance",
    title: "Applied Behavioral Finance: Diagnosis, Personality, and Adviser Response",
    readingMinutes: 21,
    summary:
      "Classifying a bias correctly, the personality frameworks, when to moderate versus adapt, and how behavioural patterns show up at the market level.",
    intro:
      "Level III does not reward naming biases. It rewards deciding what an adviser should do about them — and that decision turns on one classification (cognitive or emotional) and one judgement (moderate or adapt). This chapter builds both, adds the biases the existing chapter omits, and covers the market-level consequences.",
    sections: [
      {
        heading: "The classification that drives everything",
        blocks: [
          {
            kind: "p",
            text: "Cognitive errors are faults in reasoning or information processing. They arise from incomplete information, faulty statistics, or a mind economising on effort. Because they are errors of thinking, they respond to better information, education and structured process.",
          },
          {
            kind: "p",
            text: "Emotional biases arise from feeling and impulse rather than from faulty reasoning. They are harder to correct because the client is not making a mistake they can be argued out of — they are responding to fear, attachment or regret. The practical consequence is that emotional biases usually call for adaptation rather than correction.",
          },
          {
            kind: "table",
            table: {
              caption: "Sorting the biases",
              headers: ["Cognitive errors", "Emotional biases"],
              rows: [
                ["Conservatism — under-updating on new evidence", "Loss aversion — losses hurt more than gains please"],
                ["Confirmation — seeking supporting evidence", "Overconfidence — overstating one's own judgement"],
                ["Representativeness — judging by stereotype", "Self-control — favouring the present over the future"],
                ["Illusion of control — overstating influence", "Status quo — doing nothing by default"],
                ["Hindsight — remembering foresight one lacked", "Endowment — valuing what one owns more highly"],
                ["Anchoring and adjustment — sticking near a reference", "Regret aversion — avoiding action to avoid blame"],
                ["Mental accounting — treating money as non-fungible", ""],
                ["Framing — answering differently by presentation", ""],
                ["Availability — judging by ease of recall", ""],
              ],
            },
          },
          {
            kind: "callout",
            label: "Overconfidence sits on the emotional side",
            body: "It looks like a reasoning error but the curriculum classifies it as emotional, because it stems from a desire to feel competent rather than from a processing fault. That classification is regularly tested, and getting it wrong changes the recommended adviser response.",
          },
        ],
      },
      {
        heading: "The biases the base chapter omits",
        blocks: [
          {
            kind: "p",
            text: "Self-attribution bias is the tendency to credit success to one's own skill and blame failure on external factors. It has two halves — self-enhancing and self-protecting — and together they prevent learning from experience, because no outcome ever contradicts the investor's view of their own ability. It feeds overconfidence directly and typically produces excessive trading.",
          },
          {
            kind: "p",
            text: "The endowment effect is the tendency to value an asset more highly simply because one owns it. It is why inherited holdings are so difficult to sell — the client's reservation price to sell exceeds what they would pay to buy the same position today. It is an emotional bias and frequently underlies a concentrated position that no rational analysis would justify holding.",
          },
          {
            kind: "p",
            text: "Narrow framing is evaluating each decision in isolation rather than in the context of the whole portfolio. An investor who rejects a position because it looks risky on its own, without considering that it diversifies everything else they hold, is framing narrowly. It is the behavioural counterpart to the suitability principle that a holding must be judged within the total portfolio.",
          },
          {
            kind: "p",
            text: "The halo effect leads investors to extend a favourable impression of a company — a good product, an admired chief executive — into a belief that its shares are a good investment. It is a form of representativeness, and it explains why widely admired companies frequently trade above what their fundamentals support.",
          },
          {
            kind: "p",
            text: "Home bias is the tendency to overweight domestic securities well beyond what portfolio theory would suggest. It is partly explained by information asymmetry and currency risk, but the magnitude observed in practice exceeds any rational justification and is best understood as familiarity operating as a bias.",
          },
        ],
      },
      {
        heading: "Prospect theory and its consequences",
        blocks: [
          {
            kind: "p",
            text: "Traditional utility theory assumes investors evaluate outcomes in terms of final wealth, are consistently risk-averse, and update beliefs rationally. Prospect theory describes what people actually do: they evaluate outcomes as gains and losses relative to a reference point, and the value function is steeper for losses than for gains.",
          },
          {
            kind: "figure",
            figure: {
              caption:
                "The prospect theory value function: concave in gains, convex in losses, and steeper below the reference point.",
              alt: "An S-shaped curve through the origin, flatter above and steeper below, showing asymmetric treatment of gains and losses.",
              svg: `<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img">
  <line x1="40" y1="100" x2="420" y2="100" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="230" y1="16" x2="230" y2="188" stroke="var(--border)" stroke-width="1.5"/>
  <path d="M230 100 C 280 74, 340 60, 415 52" fill="none" stroke="var(--ats-green)" stroke-width="2.5"/>
  <path d="M230 100 C 200 140, 160 168, 48 184" fill="none" stroke="var(--ats-red)" stroke-width="2.5"/>
  <text x="330" y="46" font-size="10" fill="var(--ats-green)">gains: concave</text>
  <text x="56" y="172" font-size="10" fill="var(--ats-red)">losses: convex and steeper</text>
  <text x="236" y="30" font-size="10" fill="var(--text-muted)">value</text>
  <text x="382" y="116" font-size="10" fill="var(--text-muted)">outcome</text>
  <text x="176" y="94" font-size="10" fill="var(--text-muted)">reference point</text>
</svg>`,
            },
          },
          {
            kind: "p",
            text: "Two consequences follow directly. Because the function is convex in losses, investors become risk-SEEKING when facing losses — they hold a losing position hoping to break even rather than crystallising the loss. Because it is concave in gains, they become risk-averse when ahead, selling winners too early. Together those produce the disposition effect: selling winners and holding losers, which is precisely backwards from a tax perspective.",
          },
          {
            kind: "p",
            text: "The reference point matters enormously and is manipulable. An investor anchored to a purchase price experiences a decline as a loss; the same investor anchored to a value from three years ago may experience the identical position as a gain. Reframing the reference point is one of the few genuinely effective interventions available to an adviser.",
          },
          {
            kind: "p",
            text: "Bounded rationality completes the picture. Rather than optimising across all alternatives, people satisfice — they search until they find an option that is good enough against their aspiration level, then stop. That is not irrationality; it is a rational response to the cost of gathering and processing information, and it explains why default options are so powerful.",
          },
        ],
      },
      {
        heading: "Investor personality types",
        blocks: [
          {
            kind: "p",
            text: "The behavioural investor type framework classifies clients along two dimensions — risk tolerance and the primary source of bias — producing four types that map to different advisory approaches.",
          },
          {
            kind: "table",
            table: {
              caption: "The four behavioural investor types",
              headers: ["Type", "Risk tolerance", "Dominant biases", "Adviser approach"],
              rows: [
                ["Passive preserver", "Low", "Emotional: loss aversion, status quo, endowment", "Adapt; emphasise security"],
                ["Friendly follower", "Low to moderate", "Cognitive: availability, hindsight, framing", "Moderate; educate and document"],
                ["Independent individualist", "Moderate to high", "Cognitive: confirmation, self-attribution", "Moderate; challenge with evidence"],
                ["Active accumulator", "High", "Emotional: overconfidence, illusion of control", "Adapt; set boundaries early"],
              ],
            },
          },
          {
            kind: "p",
            text: "The pattern worth noticing: the two types at the extremes of risk tolerance are emotionally driven and generally require adaptation, while the two in the middle are cognitively driven and can be moderated through education. That is not a coincidence — it follows from the cognitive-versus-emotional distinction rather than from anything about risk tolerance itself.",
          },
          {
            kind: "p",
            text: "An older framework classifies investors as cautious, methodical, spontaneous or individualistic, on axes of risk tolerance and decision-making style. The categories differ but the advisory implication is the same: identify the dominant bias, then decide whether to correct it or design around it.",
          },
        ],
      },
      {
        heading: "Moderate or adapt",
        blocks: [
          {
            kind: "p",
            text: "This is the decision Level III actually tests. Moderating means attempting to correct the bias — through education, evidence, or process. Adapting means accepting the bias and building a portfolio the client will actually hold.",
          },
          {
            kind: "bullets",
            items: [
              "Cognitive errors are generally moderated, because information and structure can fix a processing fault.",
              "Emotional biases are generally adapted to, because they resist argument.",
              "Higher wealth relative to needs supports adapting — the client can afford a suboptimal portfolio.",
              "Lower wealth relative to needs supports moderating — the client cannot afford the cost of the bias.",
              "A portfolio the client abandons in a drawdown is worse than a slightly suboptimal one they hold.",
            ],
          },
          {
            kind: "callout",
            label: "The wealth interaction",
            body: "Both dimensions matter together. An emotionally biased client with ample wealth is the clearest case for adapting. A cognitively biased client whose plan is already tight is the clearest case for moderating. Where they conflict — an emotional bias in a client who cannot afford it — the adviser moderates as much as the relationship permits and documents the residual risk.",
          },
          {
            kind: "p",
            text: "Behaviourally modified asset allocation is the formal expression of adapting. The adviser starts from the rational optimum and adjusts it toward what the client will tolerate, within limits that keep the plan viable. The adjustment should be documented in the IPS along with its rationale, so that both parties understand the allocation is a deliberate accommodation rather than an analytical error.",
          },
          {
            kind: "p",
            text: "Goals-based investing works with mental accounting rather than against it. Rather than fighting the client's tendency to treat money as non-fungible, the adviser assigns separate portfolios to separate goals — essential needs in a low-risk sleeve, aspirational goals in a higher-risk one. The total allocation may be similar to the rational optimum, but the client understands and sustains it, which is the point.",
          },
        ],
      },
      {
        heading: "Behavioural finance at the market level",
        blocks: [
          {
            kind: "p",
            text: "Individual biases can aggregate into market anomalies where they are correlated across investors rather than offsetting. Momentum is consistent with herding and self-attribution; value effects with representativeness and overreaction; bubbles with overconfidence, herding and the recency of available evidence.",
          },
          {
            kind: "p",
            text: "The limits to arbitrage argument explains why these persist. Correcting a mispricing requires capital, a horizon, and the ability to bear interim losses. A rational arbitrageur facing redemption risk may be unable to hold a correct position long enough to profit from it, which means mispricings can survive the presence of investors who recognise them.",
          },
          {
            kind: "p",
            text: "Two cautions belong here. Many documented anomalies weaken after publication, which suggests some were data snooping rather than genuine behavioural effects. And identifying a bias in the market does not by itself produce a strategy — a bias must be exploitable after costs and survivable through the period before it corrects.",
          },
          {
            kind: "p",
            text: "The adaptive markets hypothesis offers a reconciliation. Efficiency is not a fixed property but varies with conditions and participants, as strategies compete and adapt. It explains why a genuine anomaly can exist, be exploited, and then decay — which describes the actual history of factor investing considerably better than either strict efficiency or permanent inefficiency.",
          },
        ],
      },
    ],
    keyTerms: [
      { term: "Cognitive error", def: "A fault in reasoning or information processing, correctable through education and structure." },
      { term: "Emotional bias", def: "A bias arising from feeling or impulse, generally adapted to rather than corrected." },
      { term: "Self-attribution bias", def: "Crediting success to skill and blaming failure on circumstance, preventing learning." },
      { term: "Endowment effect", def: "Valuing an asset more highly because one owns it." },
      { term: "Narrow framing", def: "Evaluating a decision in isolation rather than within the whole portfolio." },
      { term: "Halo effect", def: "Extending a favourable impression of a company into a belief its shares are attractive." },
      { term: "Prospect theory", def: "Outcomes evaluated as gains and losses from a reference point, with losses weighted more heavily." },
      { term: "Disposition effect", def: "Selling winners and holding losers — the behavioural consequence of the value function's shape." },
      { term: "Bounded rationality", def: "Satisficing against an aspiration level rather than optimising across all alternatives." },
      { term: "Behaviourally modified asset allocation", def: "Adjusting the rational optimum toward what the client will actually hold." },
      { term: "Limits to arbitrage", def: "The constraints preventing rational investors from correcting a mispricing." },
      { term: "Adaptive markets hypothesis", def: "Efficiency varying with conditions and participants as strategies compete and decay." },
    ],
    takeaways: [
      "Classify first: cognitive errors are moderated, emotional biases are adapted to.",
      "Overconfidence is classified as EMOTIONAL despite looking like a reasoning fault.",
      "Prospect theory's convex loss region makes investors risk-seeking when losing — the disposition effect.",
      "The reference point is manipulable, and reframing it is among the few effective interventions.",
      "Passive preservers and active accumulators are emotional and adapted to; the middle two types are moderated.",
      "Wealth relative to needs interacts with bias type: ample wealth supports adapting, tight plans require moderating.",
      "Goals-based investing works with mental accounting rather than against it.",
      "A bias visible in the market is not a strategy — it must be exploitable after costs and survivable until it corrects.",
    ],
  },
];

// Questions live in cfa-l3-q.ts so the coverage and audit tooling sees
// one bank file per track.
export const behavioralQuestionsL3: Question[] = [];
