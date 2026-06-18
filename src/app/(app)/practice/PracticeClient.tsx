"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { EXAMS, getExam } from "@/lib/exams";
import { examsWithContent, getQuestions } from "@/content";
import { Question } from "@/content/types";
import { recordQuiz, loadState } from "@/lib/gameStore";
import { levelProgress, rankTitle, XP_PER_CORRECT } from "@/lib/studyPlan";
import { grantBonus } from "@/lib/economy";
import { loadProfile, AvatarConfig } from "@/lib/profile";
import { LevelUpOverlay } from "@/components/ui";
import { useSignedIn } from "@/lib/AccessContext";
import { trackActivated } from "@/lib/analytics";
import { buildRun, RUN_SIZE } from "@/lib/practiceRotation";
import { useAccess } from "@/lib/useAccess";
import { UpgradeCard } from "@/components/UpgradeGate";
import Tutor from "@/components/Tutor";
import Confetti from "@/components/Confetti";
import { ChestModal } from "@/components/Rewards";
import { rollChest, ChestDrop } from "@/lib/rewards";
import { Coin } from "@/components/Coin";
import { playCorrect, playWrong, playCombo, playComplete, isMuted, toggleMuted, hapticCorrect, hapticWrong } from "@/lib/sound";
import StreakFlame from "@/components/StreakFlame";

type Phase = "setup" | "quiz" | "results";

export default function PracticeClient() {
  const params = useSearchParams();
  const available = examsWithContent();
  const access = useAccess();
  const paramExam = params.get("exam");
  const initialExam = paramExam && available.includes(paramExam) ? paramExam : available[0] ?? "cfa";

  const [exam, setExam] = useState(initialExam);
  const [topic, setTopic] = useState(params.get("topic") ?? "all");
  const [phase, setPhase] = useState<Phase>("setup");

  // The frozen question set + answers for the active run.
  const [session, setSession] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [maxCombo, setMaxCombo] = useState(0);
  const [earnedXp, setEarnedXp] = useState(0);
  const [levelUpInfo, setLevelUpInfo] = useState<{ level: number; rank: string } | null>(null);

  const topics = useMemo(() => {
    const qs = getQuestions(exam);
    const map = new Map<string, string>();
    qs.forEach((q) => map.set(q.topicId, q.topicName));
    return Array.from(map.entries());
  }, [exam]);

  const poolCount = getQuestions(exam, topic === "all" ? undefined : topic).length;

  function start() {
    // Rotating run: serves the least-recently-seen questions first, so a
    // retake gives a fresh set (and keeps getting fresher as the bank grows).
    const qs = buildRun(getQuestions(exam, topic === "all" ? undefined : topic), RUN_SIZE);
    setSession(qs);
    setAnswers([]);
    setPhase("quiz");
  }

  function finish(finalAnswers: (number | null)[], combo: number) {
    const correct = finalAnswers.filter((a, i) => a === session[i]?.answerIndex).length;
    const result = recordQuiz(exam, correct, session.length, topic === "all" ? undefined : topic, { combo });
    setEarnedXp(result.xpEarned);
    if (result.leveledUp) {
      const nl = levelProgress(result.state.xp).level;
      grantBonus(nl * 50); // promotion Comp raise
      setLevelUpInfo({ level: nl, rank: rankTitle(nl) });
    }
    const accuracy = session.length > 0 ? Math.round((correct / session.length) * 100) : 0;
    posthog.capture("practice_session_completed", {
      exam,
      topic: topic === "all" ? "all" : topic,
      question_count: session.length,
      correct_count: correct,
      accuracy_pct: accuracy,
      xp_earned: result.xpEarned,
      best_combo: combo,
      leveled_up: result.leveledUp,
    });
    trackActivated("practice", { exam });
    setAnswers(finalAnswers);
    setMaxCombo(combo);
    setPhase("results");
  }

  if (phase === "quiz") {
    return <Quiz questions={session} onFinish={finish} />;
  }

  if (phase === "results") {
    return <Results exam={exam} questions={session} answers={answers} maxCombo={maxCombo} earnedXp={earnedXp} levelUpInfo={levelUpInfo} onRetry={() => setPhase("setup")} />;
  }

  // ---- setup ----
  const examName = getExam(exam)?.name ?? exam;
  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>Practice</h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        Every question comes with a full explanation — including why the wrong answers are wrong. That&apos;s where the learning happens.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {EXAMS.map((e) => {
          const has = available.includes(e.slug);
          const active = e.slug === exam;
          return (
            <button
              key={e.slug}
              disabled={!has}
              onClick={() => { setExam(e.slug); setTopic("all"); }}
              className="text-xs px-3 py-1.5 rounded-lg"
              style={{
                background: active ? "var(--primary)" : "var(--bg-card)",
                color: active ? "#fff" : has ? "var(--text-secondary)" : "var(--text-muted)",
                border: "0.5px solid var(--border)",
                opacity: has ? 1 : 0.5,
                cursor: has ? "pointer" : "not-allowed",
              }}
            >
              {e.name}{!has ? " · soon" : ""}
            </button>
          );
        })}
      </div>

      {access.ready && !access.canExam(exam) ? (
        <UpgradeCard title="This exam is Pro" reason="Free includes the full CFA question bank. Upgrade to practice every other exam." />
      ) : (
        <>
          <p className="text-xs font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Topic</p>
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <TopicChip label="All topics" active={topic === "all"} onClick={() => setTopic("all")} />
            {topics.map(([id, name]) => (
              <TopicChip key={id} label={name} active={topic === id} onClick={() => setTopic(id)} />
            ))}
          </div>

          <div className="card p-4 mb-5">
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {poolCount} question{poolCount !== 1 ? "s" : ""} · {examName} · {topic === "all" ? "all topics" : topics.find((t) => t[0] === topic)?.[1] ?? topic}
            </span>
          </div>

          <button className="btn-primary w-full" disabled={poolCount === 0} onClick={start}>
            {poolCount === 0 ? "No questions yet for this topic" : "Start practice →"}
          </button>
        </>
      )}
    </div>
  );
}

function Quiz({ questions, onFinish }: { questions: Question[]; onFinish: (answers: (number | null)[], maxCombo: number) => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [shakeKey, setShakeKey] = useState(0);
  const [muted, setMutedState] = useState(false);
  const [floatKey, setFloatKey] = useState(0);

  useEffect(() => setMutedState(isMuted()), []);

  const q = questions[idx];
  const isLast = idx === questions.length - 1;
  const correct = checked && selected === q.answerIndex;

  function check() {
    if (selected === null || checked) return;
    const isRight = selected === q.answerIndex;
    setChecked(true);
    if (isRight) {
      const nc = combo + 1;
      setCombo(nc);
      setMaxCombo((m) => Math.max(m, nc));
      setFloatKey((k) => k + 1);
      playCorrect();
      hapticCorrect();
      if (nc >= 2) playCombo(nc);
    } else {
      setCombo(0);
      playWrong();
      hapticWrong();
      setShakeKey((k) => k + 1);
    }
  }

  function next() {
    const updated = [...answers, selected];
    setAnswers(updated);
    if (isLast) onFinish(updated, maxCombo);
    else { setIdx(idx + 1); setSelected(null); setChecked(false); }
  }

  const progressPct = Math.round(((idx + (checked ? 1 : 0)) / questions.length) * 100);

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto" style={{ position: "relative", paddingBottom: 180 }}>
      {/* Floating +XP on a correct answer */}
      {floatKey > 0 && (
        <span
          key={floatKey}
          className="anim-xp"
          style={{ position: "absolute", top: 44, left: "50%", transform: "translateX(-50%)", fontWeight: 900, fontSize: 22, color: "var(--duo-green)", pointerEvents: "none", zIndex: 30 }}
        >
          +{XP_PER_CORRECT} XP
        </span>
      )}
      {/* Top bar: fat progress + combo + mute */}
      <div className="flex items-center gap-3 mb-5">
        <div className="duo-bar flex-1">
          <i style={{ width: `${progressPct}%` }} />
        </div>
        {combo >= 2 && (
          <span key={combo} className="anim-combo flex items-center gap-1 text-sm font-extrabold" style={{ color: "var(--duo-orange)" }}>
            🔥 {combo}
          </span>
        )}
        <button
          onClick={() => setMutedState(toggleMuted())}
          aria-label={muted ? "Unmute sounds" : "Mute sounds"}
          className="text-base leading-none"
          style={{ opacity: 0.6 }}
        >
          {muted ? "🔇" : "🔊"}
        </button>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Q{idx + 1} / {questions.length}</span>
        <span className="text-xs font-bold" style={{ color: "var(--duo-blue)" }}>{q.topicName}</span>
      </div>

      <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)", lineHeight: 1.45 }}>{q.stem}</h2>

      <div key={shakeKey} className={`space-y-3 mb-5 ${checked && !correct ? "anim-shake" : ""}`}>
        {q.choices.map((choice, i) => {
          const isAnswer = i === q.answerIndex;
          const isSelected = i === selected;
          let cls = "duo-option";
          if (checked) {
            cls += " locked";
            if (isAnswer) cls += " correct";
            else if (isSelected) cls += " wrong";
            else cls += " opacity-50";
          } else if (isSelected) {
            cls += " selected";
          }
          return (
            <button key={i} disabled={checked} onClick={() => setSelected(i)} className={cls}>
              <span className="duo-key">{String.fromCharCode(65 + i)}</span>
              <span className="flex-1">{choice}</span>
              {checked && isAnswer && <span className="text-lg">✓</span>}
              {checked && isSelected && !isAnswer && <span className="text-lg">✕</span>}
            </button>
          );
        })}
      </div>

      {/* Fixed bottom action / feedback sheet */}
      <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 40 }}>
        {checked ? (
          <div className={`duo-sheet ${correct ? "good" : "bad"}`} style={{ borderTop: `2px solid ${correct ? "var(--duo-green)" : "var(--duo-red)"}` }}>
            <div className="max-w-2xl mx-auto px-4 py-4 md:px-8">
              <div className="flex items-center gap-2 mb-1.5">
                <span className={correct ? "anim-bounce" : ""} style={{ fontSize: 22 }}>{correct ? "🎉" : "💡"}</span>
                <span className="text-lg font-extrabold" style={{ color: correct ? "var(--duo-green-shadow)" : "var(--duo-red-shadow)" }}>
                  {correct ? comboLabel(combo) : "Not quite"}
                </span>
              </div>
              {!correct && (
                <p className="text-sm font-bold mb-1" style={{ color: "var(--duo-red-shadow)" }}>
                  Answer: {String.fromCharCode(65 + q.answerIndex)}. {q.choices[q.answerIndex]}
                </p>
              )}
              <p className="text-sm mb-3" style={{ color: "var(--text-primary)", lineHeight: 1.55, opacity: 0.9 }}>{q.explanation}</p>
              <button className={`btn-duo w-full ${correct ? "" : "duo-red"}`} onClick={next}>
                {isLast ? "See results" : "Continue"}
              </button>
            </div>
          </div>
        ) : (
          <div style={{ background: "var(--bg)", borderTop: "0.5px solid var(--border)" }}>
            <div className="max-w-2xl mx-auto px-4 py-4 md:px-8">
              <button className="btn-duo w-full" disabled={selected === null} onClick={check}>
                Check
              </button>
            </div>
          </div>
        )}
      </div>

      {/* The Associate — sees the current question (and the explanation once answered) */}
      <Tutor
        context={`The student is doing practice questions (${q.topicName}).\nCurrent question: ${q.stem}\nChoices: ${q.choices.map((c, ci) => `${String.fromCharCode(65 + ci)}. ${c}`).join(" ")}${checked ? `\nCorrect answer: ${String.fromCharCode(65 + q.answerIndex)}. Explanation: ${q.explanation}\nThe student answered ${selected !== null ? String.fromCharCode(65 + selected) : "nothing"} (${correct ? "correct" : "incorrect"}).` : "\nThe student has NOT answered yet — do NOT reveal the answer; teach the underlying concept or how to approach it instead."}`}
        suggestions={
          checked
            ? ["Why is my answer wrong?", "Explain this concept from scratch", "Give me a similar question"]
            : ["Teach me the concept behind this", "How do I approach this question?", "Define the terms in this question"]
        }
        intro
      />
    </div>
  );
}

function comboLabel(combo: number): string {
  if (combo >= 5) return "Unstoppable!";
  if (combo >= 3) return `${combo} in a row!`;
  if (combo === 2) return "Nice streak!";
  return "Correct!";
}

function Results({ exam, questions, answers, maxCombo, earnedXp, levelUpInfo, onRetry }: { exam: string; questions: Question[]; answers: (number | null)[]; maxCombo: number; earnedXp: number; levelUpInfo: { level: number; rank: string } | null; onRetry: () => void }) {
  const correctCount = answers.filter((a, i) => a === questions[i]?.answerIndex).length;
  const pct = questions.length ? Math.round((correctCount / questions.length) * 100) : 0;
  const wrong = questions.map((q, i) => ({ q, a: answers[i] })).filter((x) => x.a !== x.q.answerIndex);

  const totalXp = earnedXp;
  const comboBonus = maxCombo >= 3 ? maxCombo * 5 : 0;

  const [shownXp, setShownXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [avatar, setAvatar] = useState<AvatarConfig | undefined>(undefined);
  const [showLevelUp, setShowLevelUp] = useState(true);
  const signedIn = useSignedIn();
  const access = useAccess();
  const perfect = pct === 100;
  // Peak-intent paywall: a signed-in free user who just had a strong run is
  // the highest-converting moment to pitch Pro. (Guests instead see the
  // "save progress" nudge — they need an account before they can subscribe.)
  const showUpgrade = access.ready && !access.pro && signedIn && pct >= 50;
  useEffect(() => {
    if (showUpgrade) posthog.capture("paywall_shown", { trigger: "post_practice", accuracy_pct: pct, exam });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showUpgrade]);

  // Roll for a loot chest once, based on this run's accuracy.
  const [chest] = useState<ChestDrop | null>(() => rollChest(pct));
  const [chestOpen, setChestOpen] = useState(false);
  const [chestDone, setChestDone] = useState(false);

  useEffect(() => {
    playComplete();
    setStreak(loadState().currentStreak);
    setAvatar(loadProfile()?.avatar);
    // Tick the XP up for a satisfying count.
    let cur = 0;
    const step = Math.max(1, Math.round(totalXp / 28));
    const iv = setInterval(() => {
      cur = Math.min(totalXp, cur + step);
      setShownXp(cur);
      if (cur >= totalXp) clearInterval(iv);
    }, 28);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headline = perfect ? "Flawless! 🏆" : pct >= 70 ? "Lesson complete! 🎉" : pct >= 50 ? "Nice work! 💪" : "Keep grinding! 📈";

  return (
    <div className="px-4 py-8 md:px-8 max-w-2xl mx-auto">
      {pct >= 50 && <Confetti count={perfect ? 120 : 80} />}

      {/* Celebration hero */}
      <div className="text-center mb-7 anim-pop">
        <div className="text-3xl font-extrabold mb-5" style={{ color: "var(--text-primary)" }}>{headline}</div>
        <ScoreRing pct={pct} />
      </div>

      {/* Stat tiles */}
      <div className="grid grid-cols-3 gap-3 mb-7">
        <StatTile label="XP earned" value={`+${shownXp}`} color="var(--duo-yellow)" emoji="⚡" />
        <StatTile label="Accuracy" value={`${pct}%`} color="var(--duo-green)" emoji="🎯" />
        <StatTile label="Best combo" value={`${maxCombo}`} color="var(--duo-orange)" emoji="🔥" />
      </div>

      {comboBonus > 0 && (
        <div className="text-center text-sm font-bold mb-6 anim-xp" style={{ color: "var(--duo-orange)" }}>
          🔥 Combo bonus: +{comboBonus} XP for {maxCombo} correct in a row!
        </div>
      )}

      {streak > 0 && (
        <div className="card-i p-4 mb-7 flex items-center justify-center gap-3" style={{ borderColor: "var(--duo-orange)" }}>
          <StreakFlame streak={streak} size={34} />
          <span className="text-base font-extrabold" style={{ color: "var(--duo-orange)" }}>
            {streak}-day streak alive!
          </span>
        </div>
      )}

      {/* Surprise loot chest */}
      {chest && !chestDone && (
        <button
          onClick={() => setChestOpen(true)}
          className="card-i w-full p-4 mb-7 flex items-center gap-3 wiggle"
          style={{ borderColor: "var(--gold)", borderWidth: 2 }}
        >
          <span style={{ fontSize: 30 }}>🎁</span>
          <div className="flex-1 text-left">
            <div className="text-sm font-extrabold" style={{ color: "var(--text-primary)" }}>A chest dropped!</div>
            <div className="text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>Tap to open your bonus Comp</div>
          </div>
          <Coin size={22} spin />
        </button>
      )}
      {chestOpen && chest && (
        <ChestModal drop={chest} onClose={() => { setChestOpen(false); setChestDone(true); }} />
      )}

      {wrong.length > 0 && (
        <>
          <h2 className="text-sm font-extrabold mb-3 uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>
            Review your misses ({wrong.length})
          </h2>
          <div className="space-y-3 mb-7">
            {wrong.map(({ q, a }) => (
              <div key={q.id} className="card p-4" style={{ borderLeft: "4px solid var(--duo-red)" }}>
                <p className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{q.stem}</p>
                <p className="text-xs mb-1 font-semibold" style={{ color: "var(--duo-red-shadow)" }}>
                  Your answer: {a !== null && a !== undefined ? `${String.fromCharCode(65 + a)}. ${q.choices[a]}` : "skipped"}
                </p>
                <p className="text-xs mb-2 font-semibold" style={{ color: "var(--duo-green-shadow)" }}>
                  Correct: {String.fromCharCode(65 + q.answerIndex)}. {q.choices[q.answerIndex]}
                </p>
                <p className="text-xs" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{q.explanation}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {!signedIn && (
        <div className="card-i p-4 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3" style={{ borderColor: "var(--primary)", borderWidth: 2 }}>
          <div className="flex items-center gap-2.5">
            <span style={{ fontSize: 24 }}>💾</span>
            <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
              Don&apos;t lose this — make a free account to save your XP, streak, and Division spot.
            </span>
          </div>
          <Link href="/signup" className="btn-duo flex-shrink-0" style={{ padding: "0.55rem 1.1rem", fontSize: "0.78rem" }}>Save progress</Link>
        </div>
      )}

      {showUpgrade && (
        <div className="mb-5">
          <UpgradeCard
            title="You're on a roll — unlock every exam"
            reason={`${pct}% on that set. Pro opens every chapter, every exam, and unlimited Finals so you can keep this pace across your whole prep.`}
          />
        </div>
      )}

      <div className="flex items-center gap-3">
        <button className="btn-duo flex-1" onClick={onRetry}>Practice again</button>
        <Link href={`/learn?exam=${exam}`} className="btn-duo duo-ghost flex-1 text-center">Back to reading</Link>
      </div>

      {levelUpInfo && showLevelUp && (
        <LevelUpOverlay level={levelUpInfo.level} rank={levelUpInfo.rank} avatar={avatar} onDone={() => setShowLevelUp(false)} />
      )}
    </div>
  );
}

function ScoreRing({ pct }: { pct: number }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setShown(pct), 150);
    return () => clearTimeout(t);
  }, [pct]);
  const off = c - (Math.min(100, shown) / 100) * c;
  const color = pct >= 70 ? "var(--duo-green)" : pct >= 50 ? "var(--duo-yellow)" : "var(--duo-red)";
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" className="mx-auto">
      <circle cx="75" cy="75" r={r} fill="none" stroke="var(--border)" strokeWidth="14" />
      <circle
        cx="75" cy="75" r={r} fill="none" stroke={color} strokeWidth="14" strokeLinecap="round"
        strokeDasharray={c} strokeDashoffset={off} transform="rotate(-90 75 75)"
        style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(0.22,1,0.36,1)" }}
      />
      <text x="75" y="82" textAnchor="middle" fontSize="34" fontWeight="800" fill="var(--text-primary)">{pct}%</text>
    </svg>
  );
}

function StatTile({ label, value, color, emoji }: { label: string; value: string; color: string; emoji: string }) {
  return (
    <div className="card p-3 text-center" style={{ borderBottom: `4px solid ${color}` }}>
      <div className="text-lg mb-0.5">{emoji}</div>
      <div className="text-xl font-extrabold" style={{ color }}>{value}</div>
      <div className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>{label}</div>
    </div>
  );
}

function TopicChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-xs px-3 py-1.5 rounded-lg"
      style={{
        background: active ? "var(--primary-light)" : "var(--bg-card)",
        color: active ? "var(--primary)" : "var(--text-secondary)",
        border: `0.5px solid ${active ? "rgba(83,74,183,0.3)" : "var(--border)"}`,
        fontWeight: active ? 500 : 400,
      }}
    >
      {label}
    </button>
  );
}
