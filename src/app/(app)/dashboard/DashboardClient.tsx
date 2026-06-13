"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { Profile, loadProfile } from "@/lib/profile";
import { Avatar } from "@/components/avatar";
import { getItem } from "@/lib/economy";
import QuickStart from "@/components/QuickStart";
import Tour, { TourStep } from "@/components/Tour";
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
import { computeReadiness } from "@/lib/readiness";
import {
  AnimatedNumber,
  ProgressBar,
  ReadinessGauge,
  Sparkline,
  ActivityCalendar,
  LevelUpOverlay,
} from "@/components/ui";
import {
  FlameIcon,
  BoltIcon,
  ClockIcon,
  TargetIcon,
  CalendarCheckIcon,
  TrendUpIcon,
  BadgeGlyph,
  CheckIcon,
} from "@/components/icons";

const STORAGE_KEY = GAME_KEY;
const TOUR_KEY = "certus_tour_v1";

const TOUR_STEPS: TourStep[] = [
  {
    title: "Welcome to the firm",
    body: "Certus is exam prep built like a career. Read, drill, and test your way from Intern to Partner — here's the 30-second lay of the land.",
  },
  {
    target: "[data-tour='stats']",
    title: "Your vitals",
    body: "Streak, XP, and total hours. Study any amount today to keep the streak alive — XP also mints Comp ($) you can spend later.",
  },
  {
    target: "[data-tour='plan']",
    title: "Your track",
    body: "Pick your exam and test date here. Certus builds a daily plan, paces you to exam day, and this is where you log study sessions.",
  },
  {
    target: "[data-tour='readiness']",
    title: "The number that matters",
    body: "Your Readiness Rating (0–100, graded like a bond: CCC to AAA). It moves when you finish chapters, master flashcards, and clear mock exams. Get it to AAA and you're exam-ready.",
  },
  {
    target: "[data-tour='challenges']",
    title: "Daily challenges",
    body: "Quick hits that pay bonus XP every day. Stack them with your streak to level up faster.",
  },
  {
    target: "[data-tour='nav-train']",
    title: "Where the work happens",
    body: "Reading is the textbook (in-depth chapters). Practice drills real questions. Flashcards lock in key terms. The Final is the full timed mock — clear it to prove you're ready.",
  },
  {
    target: "[data-tour='nav-career']",
    title: "The game layer",
    body: "Your Profile (character + trophies), The Ladder (quests that pay Comp at every rank), and the Perks Desk (spend Comp on gear for your character).",
  },
  {
    title: "That's it — set your date",
    body: "Pick your exam, set the test date, and read your first chapter today. The streak starts now.",
  },
];

export default function DashboardClient() {
  const [state, setState] = useState<GameState>(EMPTY_STATE);
  const [loaded, setLoaded] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [levelUp, setLevelUp] = useState<{ level: number; rank: string } | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [showQuickStart, setShowQuickStart] = useState(false);
  const [showTour, setShowTour] = useState(false);

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...EMPTY_STATE, ...JSON.parse(raw) });
    } catch {}
    const p = loadProfile();
    setProfile(p);
    setLoaded(true);
    // First-open flow: quick character creation, then the guided tour.
    try {
      const tourDone = localStorage.getItem(TOUR_KEY) === "1";
      if (!p) setShowQuickStart(true);
      else if (!tourDone) setShowTour(true);
    } catch {}
  }, []);

  function finishTour() {
    try {
      localStorage.setItem(TOUR_KEY, "1");
    } catch {}
    setShowTour(false);
  }

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

  const readiness = useMemo(
    () => (loaded && activePlan ? computeReadiness(activePlan.examSlug, state) : null),
    [loaded, activePlan, state]
  );

  // Last 30 days of study minutes for the sparkline.
  const sparkData = useMemo(() => heatmap(state, 30).map((d) => d.minutes), [state]);
  const calendarData = useMemo(() => heatmap(state, 126), [state]);

  function handleLog(minutes: number) {
    const goalMet = progress ? progress.todayHours * 60 + minutes >= dailyGoalMin : false;
    const result = logSession(state, activePlan?.examSlug ?? "general", minutes, { dailyGoalMet: goalMet });
    setState(result.state);
    if (result.leveledUp) {
      const newLevel = levelProgress(result.state.xp).level;
      setLevelUp({ level: newLevel, rank: rankTitle(newLevel) });
    } else if (result.newBadges.length) {
      showToast(`Badge unlocked: ${result.newBadges[0].name}`);
    } else {
      showToast(`+${result.xpEarned} XP · ${minutes} min logged`);
    }
  }

  function createPlan(plan: StudyPlan) {
    setState((s) => ({ ...s, plans: [plan, ...s.plans.filter((p) => p.examSlug !== plan.examSlug)] }));
    showToast("Your track is set. Let's get to work.");
  }

  if (!loaded) {
    return (
      <div className="px-4 py-6 md:px-8 md:py-8 max-w-5xl mx-auto">
        <div className="skeleton" style={{ height: 36, width: 280, marginBottom: 18 }} />
        <div className="skeleton" style={{ height: 90, marginBottom: 18 }} />
        <div className="skeleton" style={{ height: 260 }} />
      </div>
    );
  }

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-5xl mx-auto">
      {/* First-open: 20-second character creation, then the guided tour */}
      {showQuickStart && (
        <QuickStart
          onDone={(p) => {
            setProfile(p);
            setShowQuickStart(false);
            setShowTour(true);
          }}
          onSkip={() => {
            setShowQuickStart(false);
            setShowTour(true);
          }}
        />
      )}
      {showTour && !showQuickStart && <Tour steps={TOUR_STEPS} onDone={finishTour} />}

      {/* New-hire onboarding nudge */}
      {!profile && !showQuickStart && (
        <div className="card p-4 mb-6 flex items-center justify-between rise-in" style={{ borderColor: "var(--gold-border)", boxShadow: "var(--glow-gold)" }}>
          <div>
            <div className="pill-gold mb-1.5">NEW HIRE</div>
            <div className="text-sm" style={{ color: "var(--text-primary)" }}>
              You haven&apos;t onboarded yet. Build your professional identity — portrait, archetype, the works.
            </div>
          </div>
          <Link href="/profile" className="btn-primary text-sm px-4 py-2 flex-shrink-0">Start onboarding →</Link>
        </div>
      )}

      {/* Top stats bar */}
      <div className="flex items-center justify-between mb-6 rise-in">
        <div className="flex items-center gap-3.5">
          {profile && (
            <Link href="/profile" title="Your profile" className="flex-shrink-0">
              <Avatar config={profile.avatar} size={52} rounded={12} />
            </Link>
          )}
          <div>
          <h1 className="font-display text-3xl" style={{ color: "var(--text-primary)" }}>
            {greeting()}{profile ? `, ${profile.name.split(" ")[0]}` : ""}
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
            <span style={{ color: "var(--gold)", fontWeight: 600 }}>{rankTitle(lp.level)}</span> · Level {lp.level}
            {profile?.title && (
              <span style={{ color: "var(--text-muted)" }}> · &ldquo;{titleName(profile.title)}&rdquo;</span>
            )}
          </p>
          </div>
        </div>
        <div className="flex items-center gap-3" data-tour="stats">
          <StatChip
            icon={<FlameIcon size={17} />}
            label="Streak"
            value={state.currentStreak}
            sub="days"
            color="#E2691A"
            risk={state.currentStreak > 0 && !todayStudied(state)}
          />
          <StatChip icon={<BoltIcon size={17} />} label="XP" value={state.xp} sub="total" color="var(--primary)" />
          <StatChip
            icon={<ClockIcon size={17} />}
            label="Studied"
            value={Math.round(totalMinutes(state) / 60)}
            sub="hrs"
            color="var(--ats-green)"
          />
        </div>
      </div>

      {/* Level progress bar */}
      <div className="card p-4 mb-6 rise-in" style={{ animationDelay: "0.05s" }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
            Level {lp.level} · {rankTitle(lp.level)}
          </span>
          <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            {lp.xpIntoLevel} / {lp.xpForNext} XP → L{lp.level + 1}
          </span>
        </div>
        <ProgressBar pct={lp.pct} color="linear-gradient(90deg, var(--primary), var(--gold-bright))" />
      </div>

      {!activePlan ? (
        <PlanSetup onCreate={createPlan} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6 rise-in" style={{ animationDelay: "0.1s" }}>
          {/* Plan + quick log */}
          <div className="lg:col-span-3" data-tour="plan">
            <PlanDashboard
              plan={activePlan}
              progress={progress!}
              onLog={handleLog}
              onReset={() => setState((s) => ({ ...s, plans: s.plans.slice(1) }))}
            />
          </div>

          {/* Readiness rating */}
          <div className="lg:col-span-2 card p-5 flex flex-col" data-tour="readiness">
            <div className="flex items-center gap-2 mb-1">
              <span style={{ color: "var(--text-muted)" }}><TrendUpIcon size={14} /></span>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                Readiness rating
              </span>
            </div>
            {readiness && (
              <>
                <ReadinessGauge score={readiness.score} size={185} />
                <div className="mt-4 space-y-2.5">
                  {readiness.components.map((c) => (
                    <div key={c.id}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px]" style={{ color: "var(--text-secondary)" }}>{c.label}</span>
                        <span className="text-[11px] font-mono" title={c.detail} style={{ color: "var(--text-muted)" }}>
                          {c.pct}%
                        </span>
                      </div>
                      <ProgressBar pct={c.pct} height={4} sheen={false} color={c.pct >= 70 ? "var(--ats-green)" : c.pct >= 40 ? "var(--ats-amber)" : "var(--primary)"} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* 30-day momentum */}
      {state.sessions.length > 0 && (
        <div className="card p-4 mb-6 flex items-center justify-between rise-in" style={{ animationDelay: "0.15s" }}>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
              30-day momentum
            </div>
            <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)" }}>
                <AnimatedNumber value={sparkData.reduce((a, b) => a + b, 0)} />
              </strong>{" "}
              minutes in the last 30 days
            </div>
          </div>
          <Sparkline data={sparkData} width={300} height={54} />
        </div>
      )}

      {/* Daily challenges */}
      <h2 className="text-sm font-semibold mt-8 mb-3 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
        <span style={{ color: "var(--primary)" }}><TargetIcon size={15} /></span>
        Today&apos;s challenges
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 stagger" data-tour="challenges">
        {challenges.map((c) => (
          <div key={c.id} className="card-i p-4">
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-sm flex items-center gap-1.5"
                style={{ color: c.done ? "var(--text-muted)" : "var(--text-primary)", textDecoration: c.done ? "line-through" : "none" }}
              >
                {c.done && <span style={{ color: "var(--ats-green)" }}><CheckIcon size={13} /></span>}
                {c.title}
              </span>
              <span className="text-xs font-semibold font-mono" style={{ color: c.done ? "var(--ats-green)" : "var(--primary)" }}>
                +{c.xpReward} XP
              </span>
            </div>
            <ProgressBar pct={Math.round((c.progress / c.goal) * 100)} height={6} sheen={!c.done} color={c.done ? "var(--ats-green)" : "var(--primary)"} />
            <p className="text-[11px] mt-1.5 font-mono" style={{ color: "var(--text-muted)" }}>
              {c.progress} / {c.goal} {c.unit}
            </p>
          </div>
        ))}
      </div>

      {/* Activity calendar */}
      <h2 className="text-sm font-semibold mt-8 mb-3 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
        <span style={{ color: "var(--primary)" }}><CalendarCheckIcon size={15} /></span>
        Activity ledger
      </h2>
      <div className="card p-4 mb-6">
        <ActivityCalendar data={calendarData} />
      </div>

      {/* Badges */}
      <h2 className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
        Honors · {state.unlockedBadges.length}/{BADGES.length}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10 stagger">
        {BADGES.map((b) => {
          const unlocked = state.unlockedBadges.includes(b.id);
          return (
            <div key={b.id} className={unlocked ? "card-i p-3 text-center" : "card p-3 text-center"} style={{ opacity: unlocked ? 1 : 0.45 }} title={b.desc}>
              <div
                className="mx-auto mb-2 flex items-center justify-center rounded-full"
                style={{
                  width: 40,
                  height: 40,
                  background: unlocked ? "var(--gold-bg)" : "var(--bg)",
                  border: unlocked ? "1px solid var(--gold-border)" : "1px solid var(--border)",
                  color: unlocked ? "var(--gold)" : "var(--text-muted)",
                  boxShadow: unlocked ? "var(--glow-gold)" : "none",
                }}
              >
                <BadgeGlyph id={b.id} size={20} />
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
          style={{ background: "var(--primary)", color: "#fff", boxShadow: "var(--shadow-lg)" }}
        >
          {toast}
        </div>
      )}

      {/* Level-up */}
      {levelUp && <LevelUpOverlay level={levelUp.level} rank={levelUp.rank} onDone={() => setLevelUp(null)} />}
    </div>
  );
}

function todayStudied(state: GameState): boolean {
  const t = today();
  return state.sessions.some((s) => s.date === t);
}

function titleName(id: string): string {
  return getItem(id)?.name ?? "";
}

// ---- Plan setup ----------------------------------------------------------
function PlanSetup({ onCreate }: { onCreate: (p: StudyPlan) => void }) {
  const [slug, setSlug] = useState("cfa");
  const [levelId, setLevelId] = useState("l1");
  const [date, setDate] = useState("");
  const exam = getExam(slug)!;
  const level = exam.levels.find((l) => l.id === levelId) ?? exam.levels[0];

  return (
    <div className="card p-6 rise-in">
      <div className="flex items-center gap-2 mb-1">
        <span style={{ color: "var(--primary)" }}><CalendarCheckIcon size={20} /></span>
        <h2 className="font-display text-xl" style={{ color: "var(--text-primary)" }}>
          Set your track
        </h2>
      </div>
      <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
        Pick your exam and test date. {BRAND.name} builds a daily plan and keeps you on pace.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
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
    <div className="card p-6 h-full">
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
              <p className="text-xs font-medium" style={{ color: pace.color }}>{pace.label}</p>
            </div>
          </div>
        </div>
        <button onClick={onReset} className="text-xs hover:underline" style={{ color: "var(--text-muted)" }}>
          Change plan
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center">
        <Ring pct={progress.percentComplete} accent={plan.accent} />
        <div className="sm:col-span-2 grid grid-cols-2 gap-4">
          <Metric label="Days to exam" value={progress.daysRemaining} />
          <Metric label="Today's goal" value={Math.round(progress.dailyTargetHours * 60)} suffix=" min" accent={progress.todayMet ? "var(--ats-green)" : undefined} />
          <Metric label="Hours logged" value={progress.hoursLogged} />
          <Metric label="Hours to go" value={progress.hoursRemaining} />
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
          <p className="text-xs mt-3 flex items-center gap-1.5" style={{ color: "var(--ats-green)" }}>
            <CheckIcon size={12} /> You hit today&apos;s goal — momentum secured. Keep the streak alive.
          </p>
        )}
      </div>
    </div>
  );
}

// ---- Small UI bits -------------------------------------------------------
function StatChip({
  icon,
  label,
  value,
  sub,
  color,
  risk,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  sub: string;
  color: string;
  risk?: boolean;
}) {
  return (
    <div className={`card px-4 py-2.5 flex items-center gap-2.5 ${risk ? "pulse-risk" : ""}`} title={risk ? "Study today to keep your streak" : undefined}>
      <span style={{ color }}>{icon}</span>
      <div>
        <div className="text-base font-semibold leading-none font-mono" style={{ color }}>
          <AnimatedNumber value={value} />
        </div>
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

function Metric({ label, value, suffix = "", accent }: { label: string; value: number; suffix?: string; accent?: string }) {
  return (
    <div>
      <div className="text-xl font-semibold font-mono" style={{ color: accent ?? "var(--text-primary)" }}>
        <AnimatedNumber value={value} />{suffix}
      </div>
      <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>{label}</div>
    </div>
  );
}

function Ring({ pct, accent }: { pct: number; accent: string }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setShown(pct), 80);
    return () => clearTimeout(t);
  }, [pct]);
  const off = c - (Math.min(100, shown) / 100) * c;
  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={r} fill="none" stroke="var(--bg)" strokeWidth="10" />
        <circle
          cx="60" cy="60" r={r} fill="none" stroke={accent} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={off} transform="rotate(-90 60 60)"
          style={{ transition: "stroke-dashoffset 1s cubic-bezier(0.22,1,0.36,1)" }}
        />
        <text x="60" y="58" textAnchor="middle" fontSize="22" fontWeight="600" fill="var(--text-primary)">{pct}%</text>
        <text x="60" y="76" textAnchor="middle" fontSize="10" fill="var(--text-muted)">to exam day</text>
      </svg>
    </div>
  );
}

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}
