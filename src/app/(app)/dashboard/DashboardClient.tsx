"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { BRAND } from "@/lib/brand";
import { Profile, loadProfile } from "@/lib/profile";
import { Avatar } from "@/components/avatar";
import { getItem } from "@/lib/economy";
import QuickStart from "@/components/QuickStart";
import { DailyBonusModal } from "@/components/Rewards";
import { dailyBonusInfo } from "@/lib/rewards";
import StreakFlame from "@/components/StreakFlame";
import { useSignedIn } from "@/lib/AccessContext";
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
import { CHECK_MINUTES } from "@/lib/check";
import { loadDiagnostic } from "@/lib/diagnostic";
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

export default function DashboardClient() {
  const [state, setState] = useState<GameState>(EMPTY_STATE);
  const [loaded, setLoaded] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [levelUp, setLevelUp] = useState<{ level: number; rank: string } | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  // The dashboard used to fire ~12 blocks at once — on mobile that's a wall.
  // Now: streak, ONE next action, and your odds. Everything else lives behind this.
  const [showMore, setShowMore] = useState(false);
  const [showQuickStart, setShowQuickStart] = useState(false);
  const [showDaily, setShowDaily] = useState(false);
  const [dailyChecked, setDailyChecked] = useState(false);
  const signedIn = useSignedIn();

  // Hydrate from localStorage on mount.
  useEffect(() => {
    let xp = 0;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) { const parsed = JSON.parse(raw); setState({ ...EMPTY_STATE, ...parsed }); xp = parsed.xp ?? 0; }
    } catch {}
    const p = loadProfile();
    setProfile(p);
    setLoaded(true);
    // Character creation is a reward AFTER the first lesson (once they've earned
    // some XP) — never a gate on first entry, and no guided tour.
    if (!p && xp > 0) setShowQuickStart(true);
  }, []);

  // Persist on change.
  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, loaded]);

  // A brand-new user has done NOTHING yet. Until they have, this dashboard must
  // not scold them, congratulate them, or interrupt them. All three were
  // happening on first load. One flag, used everywhere below.
  const isColdStart = loaded && state.xp === 0 && (state.sessions?.length ?? 0) === 0;

  // Offer the daily Market Open bonus once onboarding/tour are out of the way.
  useEffect(() => {
    if (!loaded || dailyChecked || showQuickStart) return;
    // NOT on a cold start. This modal opened on first load, on top of — and
    // covering — the START A LESSON button, handing out a currency that means
    // nothing to someone who arrived 4 seconds ago. It reads as "what is this
    // popup", not "I earned something". It fires after the first lesson now,
    // when +25 Comp is a reward instead of an interruption.
    if (isColdStart) return;
    if (dailyBonusInfo().available) setShowDaily(true);
    setDailyChecked(true);
  }, [loaded, dailyChecked, showQuickStart, isColdStart]);

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

  // Their /check result, so the dashboard remembers what they just did.
  const diagnostic = useMemo(
    () => (loaded && activePlan ? loadDiagnostic(activePlan.examSlug) : null),
    [loaded, activePlan]
  );
  const diagWorst = diagnostic?.weakTopics.find((t) => t.pct < 100) ?? null;

  // Last 30 days of study minutes for the sparkline.
  const sparkData = useMemo(() => heatmap(state, 30).map((d) => d.minutes), [state]);
  const calendarData = useMemo(() => heatmap(state, 126), [state]);

  function handleLog(minutes: number) {
    // Logged minutes keep your streak and pacing alive but DON'T mint XP/Comp —
    // coins are earned by answering questions correctly, not by logging time.
    const result = logSession(state, activePlan?.examSlug ?? "general", minutes, { xpOverride: 0 });
    setState(result.state);
    if (result.newBadges.length) {
      showToast(`Badge unlocked: ${result.newBadges[0].name}`);
    } else {
      showToast(`${minutes} min logged · streak safe — earn XP in Practice`);
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
      {/* Character creation — offered as a reward after the first lesson */}
      {showQuickStart && (
        <QuickStart
          onDone={(p) => {
            setProfile(p);
            setShowQuickStart(false);
          }}
          onSkip={() => setShowQuickStart(false)}
        />
      )}

      {/* Guest → account nudge: progress is local until they make an account */}
      {!signedIn && (
        <div
          className="mb-6 rise-in flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4"
          style={{ borderRadius: 16, border: "2px solid var(--primary)", borderBottom: "5px solid var(--primary-hover)", background: "var(--primary-light)" }}
        >
          <div className="flex items-center gap-3">
            <span style={{ color: "var(--primary)", flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
                <path d="M17 21v-8H7v8M7 3v5h8" />
              </svg>
            </span>
            <div>
              <div className="text-sm font-extrabold" style={{ color: "var(--text-primary)" }}>You&apos;re playing as a guest</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Make a free account to save your streak, XP, and progress — and sync across devices.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link href="/signup" className="btn-duo" style={{ padding: "0.55rem 1.1rem", fontSize: "0.78rem" }}>Save my progress</Link>
            <Link href="/login" className="text-xs font-semibold px-2" style={{ color: "var(--primary)" }}>Sign in</Link>
          </div>
        </div>
      )}

      {/* Avatar nudge — only if signed in, so we never stack two banners on first
          load, and never on a cold start.
          Copy was: "You haven't onboarded yet. Build your professional identity."
          Shown right after someone finished the welcome quiz — so it told a user
          who HAD just onboarded that they hadn't. That reads as a bug, and a bug
          on first load costs you the benefit of the doubt on everything else.
          It's an avatar. Call it an avatar. */}
      {signedIn && !profile && !showQuickStart && !isColdStart && (
        <div className="card p-4 mb-6 flex items-center justify-between rise-in" style={{ borderColor: "var(--gold-border)", boxShadow: "var(--glow-gold)" }}>
          <div>
            <div className="pill-gold mb-1.5">NEW HIRE</div>
            <div className="text-sm" style={{ color: "var(--text-primary)" }}>
              Create your avatar — portrait, archetype, the works. Takes a minute.
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
          {/* XP + hours are vanity metrics — they don't tell you what to do next.
              Streak stays (it's the habit hook); these hide on mobile. */}
          <div className="hidden sm:flex items-center gap-3">
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
      </div>

      {/* Duolingo-style daily hero: goal ring + streak fire + big CTA */}
      <DuoHero state={state} dailyGoalMin={dailyGoalMin} examSlug={activePlan?.examSlug ?? "cfa"} />

      {/* No plan yet? Then that IS the next action. Nothing else matters. */}
      {!activePlan && (
        <div className="mb-6">
          <PlanSetup onCreate={createPlan} />
        </div>
      )}

      {/* Odds of passing — one line, real numbers. The full gauge is under "Show more".
          On a cold start there IS no signal, so "0% odds of passing" isn't a
          measurement — it's a division by zero shown to a human. It reads as
          broken AND as an insult. Ask for the signal instead; it's 3 minutes and
          it's the best thing we give away. */}
      {/* They just took the check — show them what they earned, and ONE next move.
          Arriving from /check into a dashboard that has forgotten the last 3
          minutes is the fastest way to make the whole thing feel pointless. */}
      {activePlan && isColdStart && diagnostic && (
        <div
          className="card p-5 mb-6 rise-in"
          style={{ animationDelay: "0.05s", borderColor: "var(--primary)", borderWidth: 2 }}
        >
          <div className="flex items-baseline justify-between gap-3 mb-3">
            <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
              Your check · {diagnostic.correct} of {diagnostic.total}
            </div>
            <Link href={`/check?exam=${activePlan.examSlug}`} className="text-xs font-semibold" style={{ color: "var(--primary)" }}>
              Retake
            </Link>
          </div>
          {diagWorst && (
            <>
              <div className="text-base font-extrabold mb-1" style={{ color: "var(--text-primary)" }}>
                {diagWorst.topicName} is where you bled points.
              </div>
              <div className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                You got {diagWorst.correct} of {diagWorst.total} there. Five questions, about two minutes —
                that&apos;s the highest-value thing you can do right now.
              </div>
              <Link
                href={`/practice?exam=${activePlan.examSlug}&topic=${encodeURIComponent(diagWorst.topicId)}&start=1&first=1`}
                className="btn-duo w-full text-center block"
                onClick={() => posthog.capture("improve_cta_clicked", { exam: activePlan.examSlug, topic: diagWorst.topicId })}
              >
                Fix {diagWorst.topicName} — 5 questions →
              </Link>
            </>
          )}
        </div>
      )}

      {/* No check yet, no activity — ask for the signal instead of inventing one. */}
      {activePlan && isColdStart && !diagnostic && (
        <Link
          href={`/check?exam=${activePlan.examSlug}`}
          className="w-full card p-4 mb-6 flex items-center justify-between gap-3 text-left rise-in"
          style={{ animationDelay: "0.05s", borderColor: "var(--primary)", borderWidth: 1 }}
        >
          <div className="min-w-0">
            <div className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>
              Your odds of passing
            </div>
            <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Take the {CHECK_MINUTES}-minute check and we&apos;ll tell you where you actually stand.
            </div>
          </div>
          <span className="text-xs font-semibold flex-shrink-0" style={{ color: "var(--primary)" }}>Start →</span>
        </Link>
      )}
      {activePlan && readiness && progress && !isColdStart && (
        <button
          onClick={() => setShowMore(true)}
          className="w-full card p-4 mb-6 flex items-center justify-between gap-3 text-left rise-in"
          style={{ animationDelay: "0.05s" }}
        >
          <div className="min-w-0">
            <div className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: "var(--text-muted)" }}>
              If you sat the exam today
            </div>
            <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
              <strong style={{ color: "var(--text-primary)", fontSize: 21 }}>{readiness.score}%</strong>
              <span> odds of passing · </span>
              <strong style={{ color: "var(--text-primary)" }}>{progress.daysRemaining}</strong>
              <span> days out</span>
            </div>
          </div>
          <span className="text-xs font-semibold flex-shrink-0" style={{ color: "var(--primary)" }}>Details →</span>
        </button>
      )}

      {/* If the remaining work can't fit in the remaining days, SAY SO. The app used
          to just print "0 / 1998 min today" and hope nobody did the arithmetic. */}
      {/* NEVER on a cold start. This is a great message on day 10 to someone who
          has drifted. On day 0 it tells a person who has done literally nothing
          wrong yet that they're already failing — and it fires purely because
          the plan arithmetic says 300 hours won't fit in 90 days, which is true
          of every new user by construction. That's not tough love, it's a slap
          at hello, and it was landing on people 30 seconds after they arrived. */}
      {activePlan && progress?.paceImpossible && !isColdStart && (
        <div
          className="card p-4 mb-6 rise-in"
          style={{ border: "1px solid var(--ats-amber)", background: "var(--ats-amber-bg, var(--bg-card))" }}
        >
          <div className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
            You&apos;re behind, and I&apos;m not going to pretend otherwise.
          </div>
          <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Finishing the full {activePlan.targetHours}-hour plan in {progress.daysRemaining} day
            {progress.daysRemaining === 1 ? "" : "s"} would take <strong>{progress.requiredDailyHours} hrs/day</strong>.
            That&apos;s not happening. Your goal is capped at a real pace — so stop trying to cover
            everything and go straight at Ethics and FRA. They&apos;re ~35% of the exam and the
            highest points-per-hour left on the table.
          </div>
        </div>
      )}

      {/* Today's challenges — the daily loop. Three, max. */}
      <h2 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
        <span style={{ color: "var(--primary)" }}><TargetIcon size={15} /></span>
        Today&apos;s challenges
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 stagger" data-tour="challenges">
        {challenges.slice(0, 3).map((c) => (
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

      {/* Everything below is opt-in. First load should ask you to do ONE thing. */}
      <button
        onClick={() => setShowMore((v) => !v)}
        className="w-full card p-3 mb-6 text-sm font-semibold"
        style={{ color: "var(--primary)" }}
      >
        {showMore ? "Show less ▴" : "Progress, plan & honors ▾"}
      </button>

      {showMore && (
      <>
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
        <ProgressBar pct={lp.pct} color="var(--primary)" />
      </div>

      {/* Challenges promo — show off the fast XP modes */}
      <Link
        href={`/challenges?exam=${activePlan?.examSlug ?? "cfa"}`}
        data-tour="challenges-promo"
        className="block mb-6 rise-in"
        style={{ animationDelay: "0.07s", textDecoration: "none" }}
      >
        <div
          className="p-4 flex items-center gap-4 card-i"
          style={{ borderRadius: 18, border: "2px solid var(--primary)", borderBottom: "5px solid var(--primary-hover)", background: "var(--bg-card)" }}
        >
          <span style={{ color: "var(--primary)", flexShrink: 0 }}>
            <BoltIcon size={30} />
          </span>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--primary)" }}>New · Challenges</div>
            <div className="text-base font-extrabold" style={{ color: "var(--text-primary)" }}>Race the clock, take the daily Open, or wager Comp</div>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
              Fast XP modes that climb your Division — Lightning Round, The Open, and Wager.
            </p>
          </div>
          <span className="btn-duo flex-shrink-0" style={{ padding: "0.6rem 1.1rem", fontSize: "0.8rem" }}>Play</span>
        </div>
      </Link>

      {activePlan && (
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
      </>
      )}

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
      {levelUp && <LevelUpOverlay level={levelUp.level} rank={levelUp.rank} avatar={profile?.avatar} onDone={() => setLevelUp(null)} />}

      {/* Daily Market Open bonus */}
      {showDaily && (
        <DailyBonusModal
          onClaim={(amt) => showToast(`+${amt} Comp — Market Open bonus`)}
          onClose={() => setShowDaily(false)}
        />
      )}
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

// ---- Duolingo-style daily hero -------------------------------------------
function DuoHero({ state, dailyGoalMin, examSlug }: { state: GameState; dailyGoalMin: number; examSlug: string }) {
  const t = today();
  const todayMin = state.sessions.filter((s) => s.date === t).reduce((a, x) => a + x.minutes, 0);
  const goalPct = Math.min(100, Math.round((todayMin / dailyGoalMin) * 100));
  const goalMet = todayMin >= dailyGoalMin;
  const streak = state.currentStreak;

  return (
    <div
      className="mb-6 rise-in flex flex-col sm:flex-row items-center gap-5 p-5"
      style={{
        background: "var(--bg-card)",
        border: "2px solid var(--primary)",
        borderBottom: "5px solid var(--primary-hover)",
        borderRadius: 20,
      }}
    >
      <GoalRing pct={goalPct} met={goalMet} />

      <div className="flex-1 text-center sm:text-left">
        <div className="text-lg font-extrabold mb-0.5" style={{ color: "var(--text-primary)" }}>
          {goalMet ? "Daily goal complete! 🎉" : `${todayMin} / ${dailyGoalMin} min today`}
        </div>
        <p className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
          {goalMet
            ? "You showed up today. That's how streaks are built."
            : streak > 0
            ? `Keep your ${streak}-day streak alive — finish today's goal.`
            : "Do a quick lesson to start your streak."}
        </p>
      </div>

      {/* Streak fire */}
      <div className="flex items-center gap-2 px-3">
        <StreakFlame streak={streak} size={38} />
        <div className="leading-none">
          <div className="text-2xl font-extrabold" style={{ color: "var(--duo-orange)" }}>{streak}</div>
          <div className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>day streak</div>
        </div>
      </div>

      <Link href={`/practice?exam=${examSlug}`} className="btn-duo w-full sm:w-auto flex-shrink-0">
        {goalMet ? "Keep going" : "Start a lesson"}
      </Link>
    </div>
  );
}

function GoalRing({ pct, met }: { pct: number; met: boolean }) {
  const r = 32;
  const c = 2 * Math.PI * r;
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setShown(pct), 120);
    return () => clearTimeout(t);
  }, [pct]);
  const off = c - (Math.min(100, shown) / 100) * c;
  return (
    <svg width="84" height="84" viewBox="0 0 84 84" className="flex-shrink-0">
      <circle cx="42" cy="42" r={r} fill="none" stroke="var(--border)" strokeWidth="9" />
      <circle
        cx="42" cy="42" r={r} fill="none" stroke="var(--primary)" strokeWidth="9" strokeLinecap="round"
        strokeDasharray={c} strokeDashoffset={off} transform="rotate(-90 42 42)"
        style={{ transition: "stroke-dashoffset 1s cubic-bezier(0.22,1,0.36,1)" }}
      />
      {met ? (
        <text x="42" y="50" textAnchor="middle" fontSize="26" fill="var(--primary)">✓</text>
      ) : (
        <text x="42" y="48" textAnchor="middle" fontSize="17" fontWeight="800" fill="var(--text-primary)">{pct}%</text>
      )}
    </svg>
  );
}
