"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { EXAMS, getExam } from "@/lib/exams";
import { examsWithContent, getChapters, getQuestions } from "@/content";
import { buildDeck, loadStore, masteredCount, FlashStore } from "@/lib/flashcards";
import { useAccess } from "@/lib/useAccess";
import { UpgradeCard } from "@/components/UpgradeGate";

interface Node {
  topicId: string;
  topicName: string;
  hasReading: boolean;
  questionCount: number;
  pct: number; // mastery 0..100 from flashcards
  state: "locked" | "start" | "progress" | "mastered";
}

export default function SkillTreeClient() {
  const available = examsWithContent();
  const access = useAccess();
  const [exam, setExam] = useState(available[0] ?? "cfa");
  const [store, setStore] = useState<FlashStore>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setStore(loadStore()); setLoaded(true); }, []);

  const nodes = useMemo<Node[]>(() => {
    const chapters = getChapters(exam);
    return chapters.map((ch) => {
      const deck = buildDeck(exam, ch.topicId);
      const mastered = masteredCount(deck, store);
      const pct = deck.length ? Math.round((mastered / deck.length) * 100) : 0;
      const qCount = getQuestions(exam, ch.topicId).length;
      let state: Node["state"] = "start";
      if (pct >= 100) state = "mastered";
      else if (pct > 0) state = "progress";
      return { topicId: ch.topicId, topicName: ch.topicName, hasReading: true, questionCount: qCount, pct, state };
    });
  }, [exam, store]);

  const examName = getExam(exam)?.name ?? exam;
  const overall = nodes.length ? Math.round(nodes.reduce((s, n) => s + n.pct, 0) / nodes.length) : 0;

  if (!loaded) return <div className="p-10" style={{ color: "var(--text-muted)" }}>Loading…</div>;

  return (
    <div className="px-8 py-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>Skill tree</h1>
      <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
        Your route to the summit. Each topic fills in as you master its flashcards — reach 100% to plant your flag.
      </p>

      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {EXAMS.map((e) => {
          const has = available.includes(e.slug);
          const active = e.slug === exam;
          return (
            <button key={e.slug} disabled={!has} onClick={() => setExam(e.slug)}
              className="text-xs px-3 py-1.5 rounded-lg"
              style={{
                background: active ? "var(--primary)" : "var(--bg-card)",
                color: active ? "#fff" : has ? "var(--text-secondary)" : "var(--text-muted)",
                border: "0.5px solid var(--border)", opacity: has ? 1 : 0.5, cursor: has ? "pointer" : "not-allowed",
              }}>
              {e.name}{!has ? " · soon" : access.ready && !access.canExam(e.slug) ? " 🔒" : ""}
            </button>
          );
        })}
      </div>

      {access.ready && !access.canExam(exam) ? (
        <UpgradeCard title="This route is Pro" reason="Free includes the full CFA skill tree. Upgrade to unlock every other exam's route." />
      ) : (
      <>
      {/* Summit banner */}
      <div className="card p-4 mb-6 flex items-center justify-between" style={{ background: "var(--primary-light)", border: "0.5px solid rgba(83,74,183,0.2)" }}>
        <div className="flex items-center gap-2">
          <span className="text-xl">🏔️</span>
          <div>
            <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{examName} summit</div>
            <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{overall}% of the route mastered</div>
          </div>
        </div>
        <div className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>{overall}%</div>
      </div>

      {/* The route */}
      <div className="relative">
        {nodes.map((n, i) => {
          const left = i % 2 === 0;
          return (
            <div key={n.topicId} className="flex items-center mb-3" style={{ flexDirection: left ? "row" : "row-reverse" }}>
              {/* Node */}
              <NodeBadge n={n} />
              {/* Connector + card */}
              <div className="flex-1 mx-3">
                <div className="card p-4" style={{ borderColor: n.state === "mastered" ? "var(--ats-green)" : "var(--border)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{n.topicName}</span>
                    <span className="text-xs font-medium" style={{ color: n.state === "mastered" ? "var(--ats-green)" : "var(--primary)" }}>
                      {n.pct}%
                    </span>
                  </div>
                  <div style={{ height: 6, borderRadius: 100, background: "var(--bg)", overflow: "hidden", marginBottom: 10 }}>
                    <div style={{ width: `${n.pct}%`, height: "100%", background: n.state === "mastered" ? "var(--ats-green)" : "var(--primary)", borderRadius: 100, transition: "width 0.4s" }} />
                  </div>
                  <div className="flex items-center gap-3">
                    <Link href={`/learn`} className="text-xs font-medium" style={{ color: "var(--primary)" }}>Read</Link>
                    <Link href={`/flashcards`} className="text-xs font-medium" style={{ color: "var(--primary)" }}>Flashcards</Link>
                    {n.questionCount > 0 && (
                      <Link href={`/practice?exam=${exam}&topic=${n.topicId}`} className="text-xs font-medium" style={{ color: "var(--primary)" }}>
                        Practice ({n.questionCount})
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Summit flag */}
        <div className="flex items-center justify-center mt-2">
          <div className="card px-5 py-3 text-center" style={{ background: overall >= 100 ? "var(--ats-green-bg)" : "var(--bg-card)" }}>
            <div className="text-2xl">{overall >= 100 ? "🚩" : "⛰️"}</div>
            <div className="text-xs font-medium mt-1" style={{ color: overall >= 100 ? "var(--ats-green)" : "var(--text-muted)" }}>
              {overall >= 100 ? "Summit reached — exam-ready!" : "Summit"}
            </div>
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  );
}

function NodeBadge({ n }: { n: Node }) {
  const bg = n.state === "mastered" ? "var(--ats-green)" : n.state === "progress" ? "var(--primary)" : "var(--bg-card)";
  const color = n.state === "start" ? "var(--text-muted)" : "#fff";
  const border = n.state === "start" ? "1.5px solid var(--border-strong)" : "none";
  return (
    <div className="flex-shrink-0 rounded-full flex items-center justify-center font-semibold"
      style={{ width: 44, height: 44, background: bg, color, border, fontSize: 13 }}>
      {n.state === "mastered" ? "✓" : n.topicName.slice(0, 2)}
    </div>
  );
}
