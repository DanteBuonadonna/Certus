"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getExam } from "@/lib/exams";
import { examsWithContent, getChapters, getQuestions } from "@/content";
import { buildDeck, loadStore, masteredCount, FlashStore } from "@/lib/flashcards";
import { ProgressBar } from "@/components/ui";
import { CheckIcon, FlagIcon, BuildingIcon, LaurelIcon } from "@/components/icons";
import { preferredExam } from "@/lib/preferredExam";
import ExamPicker from "@/components/ExamPicker";

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
  const [exam, setExam] = useState(() => preferredExam(available));
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
  const masteredThrough = (() => {
    let n = 0;
    for (const node of nodes) {
      if (node.state === "mastered") n++;
      else break;
    }
    return n;
  })();

  if (!loaded) {
    return (
      <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
        <div className="skeleton" style={{ height: 32, width: 220, marginBottom: 16 }} />
        <div className="skeleton" style={{ height: 72, marginBottom: 16 }} />
        <div className="skeleton" style={{ height: 320 }} />
      </div>
    );
  }

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      <h1 className="font-display text-3xl mb-1" style={{ color: "var(--text-primary)" }}>Skill tree</h1>
      <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
        Your path to the top floor. Each topic fills in as you master its flashcards — reach 100% to claim it.
      </p>

      <div className="mb-6">
        <ExamPicker
          value={exam}
          available={available}
          onChange={(slug) => setExam(slug)}
          label="Track"
        />
      </div>

      {/* Dead gate removed — same reason as flashcards: canExam() is always true,
          so this never rendered, but it claimed other exams' tracks were Pro.
          See src/lib/tier.ts for the one true free/Pro story. */}
      {(
      <>
      {/* Mastery banner */}
      <div className="card p-4 mb-8 flex items-center justify-between rise-in" style={{ background: "var(--primary-light)", border: "0.5px solid rgba(83,74,183,0.2)" }}>
        <div className="flex items-center gap-2.5">
          <span style={{ color: "var(--primary)" }}><BuildingIcon size={22} /></span>
          <div>
            <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{examName} mastery</div>
            <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{overall}% of the track mastered · {masteredThrough}/{nodes.length} modules</div>
          </div>
        </div>
        <div className="font-display text-2xl" style={{ color: overall >= 100 ? "var(--gold)" : "var(--primary)" }}>{overall}%</div>
      </div>

      {/* The route — connected node graph */}
      <div style={{ position: "relative" }}>
        {/* Spine */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 2,
            transform: "translateX(-50%)",
            background: "var(--border-strong)",
          }}
        />
        {/* Gold fill up the spine for fully-mastered prefix */}
        {nodes.length > 0 && masteredThrough > 0 && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              height: `${Math.min(100, (masteredThrough / nodes.length) * 100)}%`,
              width: 2,
              transform: "translateX(-50%)",
              background: "var(--gold)",
              boxShadow: "var(--glow-gold)",
              transition: "height 0.8s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
        )}

        <div className="stagger">
          {nodes.map((n, i) => {
            const left = i % 2 === 0;
            const gold = n.state === "mastered";
            return (
              <div
                key={n.topicId}
                className="grid items-center mb-5"
                style={{ gridTemplateColumns: "1fr 56px 1fr", position: "relative" }}
              >
                {/* Card — alternates sides */}
                <div style={{ gridColumn: left ? 1 : 3, gridRow: 1 }}>
                  <div
                    className="card-i p-4"
                    style={{
                      borderColor: gold ? "var(--gold-border)" : "var(--border)",
                      boxShadow: gold ? "var(--glow-gold)" : undefined,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{n.topicName}</span>
                      <span className="text-xs font-semibold font-mono" style={{ color: gold ? "var(--gold)" : "var(--primary)" }}>
                        {n.pct}%
                      </span>
                    </div>
                    <ProgressBar pct={n.pct} height={5} sheen={n.state === "progress"} color={gold ? "var(--gold)" : "var(--primary)"} />
                    <div className="flex items-center gap-3 mt-2.5">
                      <Link href={`/learn?exam=${exam}&topic=${n.topicId}`} className="text-xs font-medium hover:underline" style={{ color: "var(--primary)" }}>Read</Link>
                      <Link href={`/flashcards?exam=${exam}&topic=${n.topicId}`} className="text-xs font-medium hover:underline" style={{ color: "var(--primary)" }}>Flashcards</Link>
                      {n.questionCount > 0 && (
                        <Link href={`/practice?exam=${exam}&topic=${n.topicId}`} className="text-xs font-medium hover:underline" style={{ color: "var(--primary)" }}>
                          Practice ({n.questionCount})
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connector from node to card */}
                <div
                  style={{
                    gridColumn: 2,
                    gridRow: 1,
                    position: "absolute",
                    left: left ? "calc(50% - 28px)" : "50%",
                    width: 28,
                    height: 2,
                    top: "50%",
                    background: gold ? "var(--gold)" : "var(--border-strong)",
                  }}
                />

                {/* Node on the spine */}
                <div style={{ gridColumn: 2, gridRow: 1, display: "flex", justifyContent: "center" }}>
                  <NodeBadge n={n} index={i + 1} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Top-floor marker */}
        <div className="flex items-center justify-center pt-1 pb-2" style={{ position: "relative" }}>
          <div
            className="card px-6 py-4 text-center"
            style={{
              background: overall >= 100 ? "var(--gold-bg)" : "var(--bg-card)",
              border: overall >= 100 ? "1px solid var(--gold-border)" : "0.5px solid var(--border)",
              boxShadow: overall >= 100 ? "var(--glow-gold)" : undefined,
            }}
          >
            <div className="flex justify-center mb-1" style={{ color: overall >= 100 ? "var(--gold)" : "var(--text-muted)" }}>
              {overall >= 100 ? <LaurelIcon size={26} /> : <FlagIcon size={24} />}
            </div>
            <div className="text-xs font-semibold" style={{ color: overall >= 100 ? "var(--gold)" : "var(--text-muted)" }}>
              {overall >= 100 ? "Top floor — exam-ready" : "Top floor"}
            </div>
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  );
}

function NodeBadge({ n, index }: { n: Node; index: number }) {
  const gold = n.state === "mastered";
  const inProgress = n.state === "progress";
  return (
    <div
      className="flex-shrink-0 rounded-full flex items-center justify-center font-semibold"
      style={{
        width: 42,
        height: 42,
        background: gold ? "var(--gold)" : inProgress ? "var(--primary)" : "var(--bg-card)",
        color: gold || inProgress ? "#fff" : "var(--text-muted)",
        border: gold || inProgress ? "none" : "1.5px solid var(--border-strong)",
        fontSize: 13,
        boxShadow: gold ? "var(--glow-gold)" : inProgress ? "var(--glow-primary)" : "none",
        position: "relative",
        zIndex: 1,
        fontFamily: "var(--mono)",
        transition: "all 0.3s",
      }}
      title={`${n.topicName} · ${n.pct}% mastered`}
    >
      {gold ? <CheckIcon size={17} /> : index}
    </div>
  );
}
