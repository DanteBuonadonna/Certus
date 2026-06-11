"use client";

import { useEffect, useMemo, useState } from "react";
import { BRAND } from "@/lib/brand";
import { EXAMS, getExam } from "@/lib/exams";
import {
  EMPTY_STATE,
  GameState,
  StudyPlan,
  logSession,
  levelProgress,
  rankTitle,
  planProgress,
  paceLabel,
  dailyChallenges,
  BADGES,
  heatmap,
  totalMinutes,
  today,
} from "@/lib/studyPlan";

import { GAME_KEY } from "@/lib/gameStore";

const STORAGE_KEY = GAME_KEY;

export default function DashboardClient() {
  const [state, setState] = useState<GameState>(EMPTY_STATE);
  const [loaded, setLoaded] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...EMPTY_STATE, ...JSON.parse(raw) });
    } catch {}
    setLoaded(true);
  }, []);

  // Persist on change.
  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, loaded]);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 2600);
  }

  const activePlan = state.plans[0];
  const lp = levelProgress(state.xp);
  const progress = activePlan ? planProgress(activePlan, state.sessions) : null;
  const dailyGoalMin = progress ? Math.max(15, Math.round(progress.dailyTargetHours * 60)) : 30;
  const challenges = useMemo(() => dailyChallenges(state, dailyGoalMin), [state, dailyGoalMin]);

  function handleLog(minutes: number) {
    const goalMet = progress ? progress.todayHours * 60 + minutes >= dailyGoalMin : false;
    const result = logSession(state, activePlan?.examSlug ?? "general", minutes, { dailyGoalMet: goalMet });
    setState(result.state);
    let msg = `+${result.xpEarned} XP · ${minutes} min logged`;
    if (result.leveledUp) msg = `Level up! You're now level ${levelProgress(result.state.xp).level} 🎉`;
    else if (result.newBadges.length) msg = `Badge unlocked: ${result.newBadges[0].name} ${result.newBadges[0].icon}`;
    showToast(msg);
  }

  function createPlan(plan: StudyPlan) {
    setState((s) => ({ ...s, plans: [plan, ...s.plans.filter((p) => p.examSlug !== plan.examSlug)] }));
    showToast("Your track is set. Let's get to work. 💼");
  }

  if (!loaded) return <div className="p-10" style={{ color: "var(--text-muted)" }}>Loading…</div>;

  return (
    <div className="px-8 py-8 max-w-5xl mx-auto">
      {/* Top stats bar */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-medium" style={{ color: "var(--text-primary)" }}>
            {greeting()}
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {rankTitle(lp.level)} · Level {lp.level}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <StatChip icon="🔥" label="Streak" value={`${state.currentStreak}`} sub="days" color="#E2691A" />
          <StatChip icon="⚡" label="XP" value={`${state.xp}`} sub="total" color="#534AB7" />
          <StatChip icon="⏱️" label="Studied" value={`${Math.round(totalMinutes(state) / 60)}`} sub="hrs" color="#1D9E75" />
        </div>
      </div>

      {/* Level progress bar */}
      <div className="card p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
            Level {lp.level} · {rankTitle(lp.level)}
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {lp.xpIntoLevel} / {lp.xpForNext} XP to level {lp.level + 1}
          </span>
        </div>
        <Bar pct={lp.pct} color="#534AB7" />
      </div>

      {!activePlan ? (
        <PlanSetup onCreate={createPlan} />
      ) : (
        <PlanDashboard
          plan={activePlan}
          progress={progress!}
          onLog={handleLog}
          onReset={() => setState((s) => ({ ...s, plans: s.plans.slice(1) }))}
        />
      )}

      {/* Daily challenges */}
      <h2 className="text-sm font-medium mt-8 mb-3" style={{ color: "var(--text-primary)" }}>
        Today&apos;s challenges
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {challenges.map((c) => (
          <div key={c.id} className="card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm" style={{ color: "var(--text-primary)", textDecoration: c.done ? "line-through" : "none" }}>
                {c.title}
              </span>
              <span className="text-xs font-medium" style={{ color: c.done ? "#1D9E75" : "#534AB7" }}>
                {c.done ? "✓ +" + c.xpReward : "+" + c.xpReward + " XP"}
              </span>
            </div>
            <Bar pct={Math.round((c.progress / c.goal) * 100)} color={c.done ? "#1D9E75" : "#534AB7"} />
            <p className="text-[11px] mt-1.5" style={{ color: "var(--text-muted)" }}>
              {c.progress} / {c.goal} {c.unit}
            </p>
          </div>
        ))}
      </div>

      {/* Activity heatmap */}
      <h2 className="text-sm font-medium mt-8 mb-3" style={{ color: "var(--text-primary)" }}>
        Your activity log
      </h2>
      <div className="card p-4 mb-6">
        <Heatmap state={state} />
      </div>

      {/* Badges */}
      <h2 className="text-sm font-medium mb-3" style={{ color: "var(--text-primary)" }}>
        Badges · {state.unlockedBadges.length}/{BADGES.length}
      </h2>
      <div className="grid grid-cols-5 gap-3 mb-10">
        {BADGES.map((b) => {
          const unlocked = state.unlockedBadges.includes(b.id);
          return (
            <div
              key={b.id}
              className="card p-3 text-center"
              style={{ opacity: unlocked ? 1 : 0.4 }}
              title={b.desc}
            >
              <div className="text-2xl mb-1" style={{ filter: unlocked ? "none" : "grayscale(1)" }}>
                {b.icon}
              </div>
              <p className="text-[11px] font-medium" style={{ color: "var(--text-primary)" }}>{b.name}</p>
              <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>{b.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Toast */}
      {toast && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-xl text-sm font-medium animate-in z-50"
          style={{ background: "var(--primary)", color: "#fff", boxShadow: "0 8px 30px rgba(0,0,0,0.25)" }}
        >
          {toast}
        </div>
      )}
    </div>
  );
}

// ---- Plan setup ----------------------------------------------------------
function PlanSetup({ onCreate }: { onCreate: (p: StudyPlan) => void }) {
  const [slug, setSlug] = useState("cfa");
  const [levelId, setLevelId] = useState("l1");
  const [date, setDate] = useState("");
  const exam = getExam(slug)!;
  const level = exam.levels.find((l) => l.id === levelId) ?? exam.levels[0];

  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xl">🗓️</span>
        <h2 className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>
          Set your track
        </h2>
      </div>
      <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
        Pick your exam and test date. {BRAND.name} builds a daily plan and keeps you on pace.
      </p>

      <div className="grid grid-cols-3 gap-4 mb-5">
        <Field label="Exam">
          <select
            className="input-field"
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setLevelId(getExam(e.target.value)!.levels[0].id);
            }}
          >
            {EXAMS.map((e) => (
              <option key={e.slug} value={e.slug}>{e.name}</option>
            ))}
          </select>
        </Field>
        <Field label="Level / Section">
          <select className="input-field" value={levelId} onChange={(e) => setLevelId(e.target.value)}>
            {exam.levels.map((l) => (
              <option key={l.id} value={l.id}>{l.name}</option>
            ))}
          </select>
        </Field>
        <Field label="Exam date">
          <input type="date" className="input-field" value={date} min={today()} onChange={(e) => setDate(e.target.value)} />
        </Field>
      </div>

      <div className="flex items-center justify-between rounded-lg p-4 mb-5" style={{ background: "var(--primary-light)" }}>
        <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Recommended prep for <strong style={{ color: "var(--text-primary)" }}>{exam.name} {level.name}</strong>
        </div>
        <div className="text-sm font-medium" style={{ color: "var(--primary)" }}>
          ~{level.recommendedHours} hours · {level.passRate}% pass rate
        </div>
      </div>

      <button
        className="btn-primary w-full"
        disabled={!date}
        onClick={() =>
          onCreate({
            examSlug: slug,
            examName: exam.name,
            levelId: level.id,
            levelName: level.name,
            examDate: date,
            targetHours: level.recommendedHours,
            startDate: today(),
            accent: exam.accent,
          })
        }
      >
        {date ? "Start my track →" : "Pick an exam date to begin"}
      </button>
    </div>
  );
}

// ---- Plan dashboard ------------------------------------------------------
function PlanDashboard({
  plan,
  progress,
  onLog,
  onReset,
}: {
  plan: StudyPlan;
  progress: ReturnType<typeof planProgress>;
  onLog: (m: number) => void;
  onReset: () => void;
}) {
  const [custom, setCustom] = useState(30);
  const pace = paceLabel(progress.pace);

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-semibold" style={{ background: plan.accent + "1a", color: plan.accent }}>
              {plan.examName.slice(0, 2)}
            </span>
            <div>
              <h2 className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                {plan.examName} · {plan.levelName}
              </h2>
              <p className="text-xs" style={{ color: pace.color }}>{pace.label}</p>
            </div>
          </div>
        </div>
        <button onClick={onReset} className="text-xs" style={{ color: "var(--text-muted)" }}>
          Change plan
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5 items-center">
        <Ring pct={progress.percentComplete} accent={plan.accent} />
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <Metric label="Days to exam" value={`${progress.daysRemaining}`} />
          <Metric label="Today's goal" value={`${Math.round(progress.dailyTargetHours * 60)} min`} accent={progress.todayMet ? "#1D9E75" : undefined} />
          <Metric label="Hours logged" value={`${progress.hoursLogged}`} />
          <Metric label="Hours to go" value={`${progress.hoursRemaining}`} />
        </div>
      </div>

      {/* Quick-log */}
      <div className="mt-6 pt-5" style={{ borderTop: "0.5px solid var(--border)" }}>
        <p className="text-xs font-medium mb-2.5" style={{ color: "var(--text-secondary)" }}>
          Log a study session
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {[15, 25, 45, 60].map((m) => (
            <button key={m} onClick={() => onLog(m)} className="btn-secondary text-sm px-4 py-2">
              {m} min
            </button>
          ))}
          <div className="flex items-center gap-2 ml-auto">
            <input
              type="number"
              min={1}
              value={custom}
              onChange={(e) => setCustom(Math.max(1, Number(e.target.value)))}
              className="input-field"
              style={{ width: 80, padding: "0.45rem 0.6rem" }}
            />
            <button onClick={() => onLog(custom)} className="btn-primary text-sm px-4 py-2">
              Log {custom} min
            </button>
          </div>
        </div>
        {progress.todayMet && (
          <p className="text-xs mt-3" style={{ color: "#1D9E75" }}>
            ✓ You hit today&apos;s goal — momentum secured. Keep the streak alive.
          </p>
        )}
      </div>
    </div>
  );
}

// ---- Small UI bits -------------------------------------------------------
function StatChip({ icon, label, value, sub, color }: { icon: string; label: string; value: string; sub: string; color: string }) {
  return (
    <div className="card px-4 py-2.5 flex items-center gap-2.5">
      <span className="text-lg">{icon}</span>
      <div>
        <div className="text-base font-semibold leading-none" style={{ color }}>{value}</div>
        <div className="text-[10px] mt-0.5" style={{ color: "var(--text-muted)" }}>{label} · {sub}</div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium block mb-1.5" style={{ color: "var(--text-secondary)" }}>{label}</span>
      {children}
    </label>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div>
      <div className="text-xl font-semibold" style={{ color: accent ?? "var(--text-primary)" }}>{value}</div>
      <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>{label}</div>
    </div>
  );
}

function Bar({ pct, color }: { pct: number; color: string }) {
  return (
    <div style={{ height: 8, borderRadius: 100, background: "var(--bg)", overflow: "hidden" }}>
      <div style={{ width: `${Math.min(100, Math.max(0, pct))}%`, height: "100%", background: color, borderRadius: 100, transition: "width 0.4s ease" }} />
    </div>
  );
}

function Ring({ pct, accent }: { pct: number; accent: string }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  const off = c - (Math.min(100, pct) / 100) * c;
  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={r} fill="none" stroke="var(--bg)" strokeWidth="10" />
        <circle
          cx="60" cy="60" r={r} fill="none" stroke={accent} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={off} transform="rotate(-90 60 60)"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
        <text x="60" y="58" textAnchor="middle" fontSize="22" fontWeight="600" fill="var(--text-primary)">{pct}%</text>
        <text x="60" y="76" textAnchor="middle" fontSize="10" fill="var(--text-muted)">to exam day</text>
      </svg>
    </div>
  );
}

function Heatmap({ state }: { state: GameState }) {
  const data = heatmap(state, 70);
  function shade(min: number) {
    if (min === 0) return "var(--bg)";
    if (min < 20) return "#cdc9ef";
    if (min < 45) return "#9a92dd";
    if (min < 90) return "#6d62c7";
    return "#534AB7";
  }
  return (
    <div className="flex flex-wrap gap-1">
      {data.map((d) => (
        <div
          key={d.date}
          title={`${d.date}: ${d.minutes} min`}
          style={{ width: 14, height: 14, borderRadius: 3, background: shade(d.minutes), border: "0.5px solid var(--border)" }}
        />
      ))}
    </div>
  );
}

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}
