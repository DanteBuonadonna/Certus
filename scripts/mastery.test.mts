// Behavioural test for the mastery module. Runs the real code with a fake
// localStorage — the trend maths is the kind of thing that looks right and
// is off by one window.
const store: Record<string,string> = {};
(globalThis as any).window = {};
(globalThis as any).localStorage = {
  getItem: (k: string) => store[k] ?? null,
  setItem: (k: string, v: string) => { store[k] = v; },
};

const m = await import("../src/lib/mastery.ts");

const q = (id: string, topicId: string) => ({
  id, examSlug: "cfa", topicId, topicName: topicId.toUpperCase(),
  difficulty: 2, stem: "s", choices: ["a","b"], answerIndex: 0, explanation: "e",
} as any);

let pass = 0, fail = 0;
const ok = (name: string, cond: boolean, extra = "") => {
  if (cond) { pass++; console.log("  ok   " + name); }
  else { fail++; console.log("  FAIL " + name + (extra ? "  -> " + extra : "")); }
};

// 1. A wrong answer schedules the question for same-day review.
m.recordAnswers("cfa", [{ question: q("q1","quant"), correct: false }]);
let s = m.loadMastery();
ok("wrong answer lands in box 1", s.q["q1"].b === 1, JSON.stringify(s.q["q1"]));
ok("wrong answer is due today", m.isDue("q1", s));
ok("wrong answer counted", s.q["q1"].w === 1);

// 2. Correct answers walk it up the boxes and push the due date out.
for (let i = 0; i < 4; i++) m.recordAnswers("cfa", [{ question: q("q1","quant"), correct: true }]);
s = m.loadMastery();
ok("four corrects reach box 5", s.q["q1"].b === 5, "box=" + s.q["q1"].b);
ok("box 5 is NOT due today", !m.isDue("q1", s), "due=" + s.q["q1"].d);
ok("mastered counts it", m.masteredCount([q("q1","quant")], s) === 1);

// 3. Unseen questions never enter the REVIEW queue.
const pool = [q("q1","quant"), q("q99","quant")];
ok("unseen question excluded from review", m.dueForReview("cfa", pool, s).every((x: any) => x.id !== "q99"));

// 4. Review ordering is worst-first.
m.recordAnswers("cfa", [{ question: q("qA","eq"), correct: false }]);
for (let i = 0; i < 3; i++) m.recordAnswers("cfa", [{ question: q("qB","eq"), correct: false }]);
s = m.loadMastery();
const order = m.dueForReview("cfa", [q("qA","eq"), q("qB","eq")], s).map((x: any) => x.id);
ok("most-missed sorts first", order[0] === "qB", order.join(","));

// 5. Trend stays silent below the sample threshold.
const thin = m.topicTrends("cfa", s).find((t: any) => t.topicId === "eq");
ok("thin data reports unknown", thin.direction === "unknown", thin.direction);
ok("weakestTopics hides thin topics", m.weakestTopics("cfa", s).every((t: any) => t.topicId !== "eq"));

// 6. Trend detects a real decline across two windows.
const st = m.loadMastery();
st.t["cfa:fi"] = { name: "Fixed Income", days: [
  { d: "2026-08-01", c: 9, t: 10 },
  { d: "2026-08-02", c: 9, t: 10 },
  { d: "2026-08-20", c: 4, t: 10 },
  { d: "2026-08-21", c: 4, t: 10 },
]};
m.saveMastery(st);
const fi = m.topicTrends("cfa", m.loadMastery()).find((t: any) => t.topicId === "fi");
ok("decline is detected", fi.direction === "falling", fi.direction + " delta=" + fi.delta.toFixed(2));
ok("recent window accuracy is 40%", Math.round(fi.accuracy * 100) === 40, String(fi.accuracy));
ok("prior window accuracy is 90%", Math.round(fi.prior * 100) === 90, String(fi.prior));
ok("label reads honestly", m.trendLabel(fi) === "40% · falling 50 pts", m.trendLabel(fi));

// 7. Same-day answers roll into ONE bucket, not one per answer.
m.recordAnswers("cfa", [
  { question: q("z1","alt"), correct: true },
  { question: q("z2","alt"), correct: false },
]);
const alt = m.loadMastery().t["cfa:alt"];
ok("same-day answers share a bucket", alt.days.length === 1 && alt.days[0].t === 2, JSON.stringify(alt.days));

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
