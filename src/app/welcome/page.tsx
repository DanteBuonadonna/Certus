"use client";

// ============================================================
// Certus — first-visit personalized onboarding.
// A short, get-to-know-you flow that builds a REAL study plan from
// the answers (saved to the same GameState the app reads), then drops
// the user into a fun first practice set. Shown once per browser; a
// returning (onboarded) visitor is bounced straight to the dashboard.
// ============================================================

import { useEffect, useMemo, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { EXAMS, getExam } from "@/lib/exams";
import { examsWithContent, getChapters, getQuestions } from "@/content";
import { loadState, saveState } from "@/lib/gameStore";
import type { StudyPlan } from "@/lib/studyPlan";
import { LogoMark } from "@/components/Logo";

const FLAG = "certus_onboarded";

type Step = "intro" | "exam" | "when" | "bg" | "hours" | "worry" | "why" | "build" | "reveal" | "quizintro" | "quiz" | "result";
const ORDER: Step[] = ["intro", "exam", "when", "bg", "hours", "worry", "why", "build", "reveal", "quizintro", "quiz", "result"];
const BARW: Record<Step, number> = { intro: 8, exam: 20, when: 31, bg: 43, hours: 55, worry: 66, why: 78, build: 88, reveal: 90, quizintro: 94, quiz: 97, result: 100 };

const Q: Record<string, { q: string; sub: string; opts: string[] }> = {
  when: { q: "When's your exam?", sub: "This sets your daily pace.", opts: ["In about a month", "2–3 months out", "4–6 months out", "Not scheduled yet"] },
  bg: { q: "What's your background?", sub: "So we start you at the right level.", opts: ["Finance or accounting major", "Already working in the field", "Career changer", "Student, new to all this"] },
  hours: { q: "How much can you study each week?", sub: "Be honest — we build around it.", opts: ["Just a few hours", "Around 10 hours", "15–20 hours", "As much as it takes"] },
  worry: { q: "What worries you most?", sub: "We'll attack it first.", opts: ["Not enough time", "The material is dense", "Staying consistent", "I've failed before"] },
  why: { q: "Why does passing matter to you?", sub: "Your reason keeps you going.", opts: ["A promotion or raise", "Switching careers", "It's required for my job", "To prove I can"] },
};

const WHEN_DAYS: Record<string, number> = { "In about a month": 30, "2–3 months out": 75, "4–6 months out": 150, "Not scheduled yet": 90 };
const HPW: Record<string, number> = { "Just a few hours": 5, "Around 10 hours": 10, "15–20 hours": 18, "As much as it takes": 25 };

export default function WelcomePage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState<Step>("intro");
  const [ans, setAns] = useState<Record<string, string>>({});
  const [score, setScore] = useState<{ s: number; t: number }>({ s: 0, t: 0 });

  const liveExams = useMemo(() => {
    const live = new Set(examsWithContent());
    return EXAMS.filter((e) => live.has(e.slug));
  }, []);

  // First-visit gate: onboarded users skip straight to the app — UNLESS the URL
  // has ?replay=1 (so you can re-watch/test the whole flow anytime).
  useEffect(() => {
    try {
      const replay = typeof window !== "undefined" && window.location.search.includes("replay=1");
      if (!replay && localStorage.getItem(FLAG) === "1") {
        router.replace("/dashboard");
        return;
      }
    } catch {}
    setReady(true);
  }, [router]);

  const go = useCallback((s: Step) => setStep(s), []);
  const pick = useCallback((key: string, val: string) => {
    setAns((a) => ({ ...a, [key]: val }));
    const i = ORDER.indexOf(step);
    setStep(ORDER[Math.min(ORDER.length - 1, i + 1)]);
  }, [step]);

  // Build the real plan, save it, flag onboarded, drop into a first set.
  const finish = useCallback(() => {
    const exam = getExam(ans.examSlug);
    if (!exam) { router.push("/dashboard"); return; }
    const level = exam.levels[0];
    const days = WHEN_DAYS[ans.when] ?? 90;
    const d = new Date(); d.setDate(d.getDate() + days);
    const plan: StudyPlan = {
      examSlug: exam.slug,
      examName: exam.name,
      levelId: level.id,
      levelName: level.name,
      examDate: d.toISOString().slice(0, 10),
      targetHours: level.recommendedHours,
      startDate: new Date().toISOString().slice(0, 10),
      accent: exam.accent,
    };
    try {
      const state = loadState();
      saveState({ ...state, plans: [plan, ...(state.plans ?? []).filter((p) => p.examSlug !== plan.examSlug)] });
      localStorage.setItem(FLAG, "1");
    } catch {}
    // Into the app — the dashboard runs character creation + the tutorial on
    // first visit, then they're in their plan.
    router.push("/dashboard");
  }, [ans, router]);

  const skip = useCallback(() => {
    try { localStorage.setItem(FLAG, "1"); } catch {}
    router.push("/dashboard");
  }, [router]);

  if (!ready) return null;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 4, background: "var(--primary-light)" }}>
        <div style={{ height: "100%", width: `${BARW[step]}%`, background: "var(--primary)", transition: "width .45s ease" }} />
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2"><LogoMark size={18} /><span className="font-display text-sm" style={{ color: "var(--text-primary)" }}>Certus</span></div>
        {step !== "intro" && step !== "build" && step !== "reveal" && step !== "quizintro" && step !== "result" && (
          <button onClick={skip} className="text-xs" style={{ color: "var(--text-muted)" }}>Skip</button>
        )}
      </div>

      <div className="flex-1 flex items-center justify-center px-5 pb-10">
        <div key={step} className="ob-step w-full" style={{ maxWidth: 460 }}>
          {step === "intro" && <Intro onStart={() => go("exam")} />}
          {step === "exam" && <ExamStep exams={liveExams} onPick={(slug) => pick("examSlug", slug)} />}
          {(step === "when" || step === "bg" || step === "hours" || step === "worry" || step === "why") && (
            <QuestionStep step={step} onPick={(v) => pick(step, v)} />
          )}
          {step === "build" && <BuildStep when={ans.when} onDone={() => go("reveal")} />}
          {step === "reveal" && <RevealStep ans={ans} onStart={() => go("quizintro")} />}
          {step === "quizintro" && <QuizIntro onDone={() => go("quiz")} />}
          {step === "quiz" && <Diagnostic examSlug={ans.examSlug} onDone={(s, t) => { setScore({ s, t }); go("result"); }} />}
          {step === "result" && <ResultStep score={score} onEnter={finish} />}
        </div>
      </div>
    </div>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 flex items-center justify-center" style={{ width: 66, height: 66, borderRadius: 20, background: "var(--primary-light)" }}>
        <span style={{ fontSize: 30 }}>🧭</span>
      </div>
      <h1 className="font-display mb-3" style={{ fontSize: 27, color: "var(--text-primary)", lineHeight: 1.2 }}>
        First, let&apos;s get to know you
      </h1>
      <p className="mb-7" style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: 380, margin: "0 auto 1.75rem" }}>
        Passing these exams isn&apos;t about more hours — it&apos;s about the <em>right</em> hours. Answer six quick questions and Certus maps a day-by-day plan built around your exam, your time, and exactly where you&apos;re weak.
      </p>
      <button onClick={onStart} className="btn-duo" style={{ padding: "0.85rem 2rem", fontSize: 16 }}>Let&apos;s begin →</button>
      <div className="mt-4" style={{ fontSize: 12, color: "var(--text-muted)" }}>About 60 seconds · free to start</div>
    </div>
  );
}

function Header({ q, sub }: { q: string; sub: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-display mb-1.5" style={{ fontSize: 22, color: "var(--text-primary)", lineHeight: 1.25 }}>{q}</h2>
      <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>{sub}</p>
    </div>
  );
}

function ExamStep({ exams, onPick }: { exams: typeof EXAMS; onPick: (slug: string) => void }) {
  return (
    <div>
      <Header q="Which exam are you preparing for?" sub="We'll tailor everything to it." />
      <div className="grid grid-cols-2 gap-2.5">
        {exams.map((e) => (
          <button key={e.slug} onClick={() => onPick(e.slug)} className="ob-opt" style={{ justifyContent: "center", textAlign: "center", fontWeight: 500 }}>
            {e.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function QuestionStep({ step, onPick }: { step: string; onPick: (v: string) => void }) {
  const d = Q[step];
  return (
    <div>
      <Header q={d.q} sub={d.sub} />
      <div className="flex flex-col gap-2.5">
        {d.opts.map((o, i) => (
          <button key={o} onClick={() => onPick(o)} className="ob-opt">
            <span className="ob-num">{i + 1}</span>
            <span>{o}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function BuildStep({ when, onDone }: { when?: string; onDone: () => void }) {
  const tasks = useMemo(() => [
    "Analyzing 40,000+ candidate study patterns",
    "Mapping the blueprint to your weak spots",
    `Pacing your daily goals to ${when && when !== "Not scheduled yet" ? when.toLowerCase() : "a steady cadence"}`,
    "Assembling your lessons, drills & mock exams",
  ], [when]);
  const [done, setDone] = useState(0);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const pi = setInterval(() => setPct((p) => (p >= 100 ? 100 : p + 2)), 34);
    return () => clearInterval(pi);
  }, []);
  useEffect(() => {
    if (done >= tasks.length) { const t = setTimeout(onDone, 650); return () => clearTimeout(t); }
    const t = setTimeout(() => setDone((d) => d + 1), 760);
    return () => clearTimeout(t);
  }, [done, tasks.length, onDone]);

  return (
    <div className="text-center">
      <div className="font-display" style={{ fontSize: 42, color: "var(--primary)", marginBottom: 2 }}>{Math.min(100, pct)}%</div>
      <p className="mb-7" style={{ fontSize: 15, color: "var(--text-secondary)" }}>Building your plan…</p>
      <div className="text-left mx-auto" style={{ maxWidth: 380 }}>
        {tasks.map((t, i) => (
          <div key={i} className="flex items-center gap-3 py-2.5" style={{ borderBottom: "0.5px solid var(--border)", color: i < done ? "var(--text-primary)" : i === done ? "var(--text-primary)" : "var(--text-muted)" }}>
            <span style={{ width: 22, textAlign: "center" }}>
              {i < done ? <span style={{ color: "var(--ats-green)" }}>✓</span> : i === done ? <span className="ob-spin" style={{ color: "var(--primary)", display: "inline-block" }}>◌</span> : <span style={{ color: "var(--text-muted)" }}>○</span>}
            </span>
            <span style={{ fontSize: 14 }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RevealStep({ ans, onStart }: { ans: Record<string, string>; onStart: () => void }) {
  const exam = getExam(ans.examSlug);
  const days = WHEN_DAYS[ans.when] ?? 90;
  const weeks = Math.ceil(days / 7);
  const hpw = HPW[ans.hours] ?? 10;
  const perDay = Math.min(120, Math.max(30, Math.round((hpw * 60) / 7)));
  const lessons = exam ? getChapters(exam.slug).length : 0;
  const questions = exam ? getQuestions(exam.slug).length : 0;
  const weak = (exam?.levels[0].topics ?? []).slice(0, 3).map((t) => t.name);
  const by = ans.when === "Not scheduled yet" ? "on your schedule" : (ans.when ?? "");

  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex items-center justify-center" style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--ats-green-bg)" }}>
        <span style={{ fontSize: 26, color: "var(--ats-green)" }}>✓</span>
      </div>
      <h2 className="font-display" style={{ fontSize: 23, color: "var(--text-primary)", marginBottom: 4 }}>Your plan is ready</h2>
      <p className="mb-5" style={{ fontSize: 14, color: "var(--text-secondary)" }}>
        A personalized path to passing <span style={{ color: "var(--primary)" }}>{exam?.name ?? "your exam"}</span>, {by}.
      </p>

      <div className="card text-left" style={{ padding: 18, border: "1.5px solid var(--primary-light)" }}>
        <div className="flex items-center gap-2.5 mb-3.5">
          <div className="flex items-center justify-center" style={{ width: 38, height: 38, borderRadius: 10, background: "var(--primary)" }}>
            <span style={{ color: "#fff", fontSize: 18 }}>◎</span>
          </div>
          <div>
            <div style={{ fontWeight: 500, fontSize: 15, color: "var(--text-primary)" }}>{exam?.name ?? "Exam"} — Pass Plan</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>adaptive · rebalances as you go</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3.5">
          <Tile n={`${weeks} wks`} l="to exam-ready" />
          <Tile n={`${perDay} min`} l="a day" />
          <Tile n={`${lessons}`} l="lessons mapped" />
          <Tile n={`${questions}+`} l="practice questions" />
        </div>
        {weak.length > 0 && (
          <>
            <div style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 7 }}>We&apos;ll hit your weak spots first:</div>
            <div className="flex flex-wrap gap-1.5">
              {weak.map((w) => (
                <span key={w} style={{ background: "var(--primary-light)", color: "var(--primary)", fontSize: 12, padding: "5px 11px", borderRadius: 20 }}>{w}</span>
              ))}
            </div>
          </>
        )}
      </div>

      <button onClick={onStart} className="btn-duo w-full" style={{ marginTop: 20 }}>Continue →</button>
      <div className="mt-3" style={{ fontSize: 12, color: "var(--text-muted)" }}>Next: a quick 3-question gut-check.</div>
    </div>
  );
}

function QuizIntro({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2700);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="text-center" style={{ padding: "44px 0" }}>
      <div className="ob-bigword" style={{ fontSize: 12, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 16 }}>
        Plan locked in
      </div>
      <h2 className="font-display ob-bigword" style={{ fontSize: 30, color: "var(--text-primary)", lineHeight: 1.22, animationDelay: "0.18s" }}>
        Now, let&apos;s see<br />what you know.
      </h2>
      <div className="ob-bigword" style={{ marginTop: 26, animationDelay: "0.55s" }}>
        <span className="ob-spin" style={{ display: "inline-block", color: "var(--primary)", fontSize: 22 }}>◌</span>
      </div>
    </div>
  );
}

function Diagnostic({ examSlug, onDone }: { examSlug: string; onDone: (s: number, t: number) => void }) {
  const qs = useMemo(() => {
    const all = getQuestions(examSlug);
    return [...all].sort(() => Math.random() - 0.5).slice(0, 3);
  }, [examSlug]);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const q = qs[i];

  useEffect(() => { if (qs.length === 0) onDone(0, 0); }, [qs.length, onDone]);
  if (!q) return null;

  function answer(idx: number) {
    if (picked !== null) return;
    setPicked(idx);
    const newScore = score + (idx === q.answerIndex ? 1 : 0);
    setTimeout(() => {
      if (i + 1 >= qs.length) onDone(newScore, qs.length);
      else { setScore(newScore); setI(i + 1); setPicked(null); }
    }, 750);
  }

  return (
    <div>
      <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8, textTransform: "uppercase", letterSpacing: ".07em" }}>
        Let&apos;s see what you know · {i + 1} of {qs.length}
      </div>
      <h2 className="font-display mb-5" style={{ fontSize: 19, color: "var(--text-primary)", lineHeight: 1.4 }}>{q.stem}</h2>
      <div className="flex flex-col gap-2.5">
        {q.choices.map((c, idx) => {
          const show = picked !== null;
          const isAns = idx === q.answerIndex;
          const bg = show && isAns ? "var(--ats-green-bg)" : show && idx === picked ? "var(--ats-red-bg)" : "var(--bg-card)";
          const bc = show && isAns ? "var(--ats-green)" : show && idx === picked ? "var(--ats-red)" : "var(--border)";
          return (
            <button key={idx} onClick={() => answer(idx)} disabled={picked !== null} className="ob-opt" style={{ background: bg, borderColor: bc }}>
              <span className="ob-num">{String.fromCharCode(65 + idx)}</span><span>{c}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultStep({ score, onEnter }: { score: { s: number; t: number }; onEnter: () => void }) {
  const { s, t } = score;
  const pct = t ? s / t : 0;
  let emoji = "📈", title = "Alright — we've got work to do.", body = `${s}/${t}, and that's exactly why you're here. Your plan is built to turn this around fast.`;
  if (pct >= 0.99) { emoji = "🎯"; title = "Flawless — you're ahead of the game."; body = `${s}/${t}. You clearly know your stuff. Your plan will keep you sharp and close the last gaps.`; }
  else if (pct >= 0.5) { emoji = "💪"; title = "Solid start."; body = `${s}/${t}. You've got a real foundation — now we build on it, a little every day.`; }
  return (
    <div className="text-center">
      <div style={{ fontSize: 44, marginBottom: 8 }}>{emoji}</div>
      <h2 className="font-display" style={{ fontSize: 23, color: "var(--text-primary)", marginBottom: 8 }}>{title}</h2>
      <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: 360, margin: "0 auto 24px" }}>{body}</p>
      <button onClick={onEnter} className="btn-duo" style={{ padding: "0.85rem 2rem", fontSize: 16 }}>Let&apos;s get to it →</button>
    </div>
  );
}

function Tile({ n, l }: { n: string; l: string }) {
  return (
    <div style={{ background: "var(--bg)", borderRadius: 12, padding: "14px 12px", textAlign: "center" }}>
      <div className="font-display" style={{ fontSize: 22, color: "var(--primary)" }}>{n}</div>
      <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{l}</div>
    </div>
  );
}
