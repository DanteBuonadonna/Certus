"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getExam } from "@/lib/exams";
import {
  Flashcard,
  FlashStore,
  buildDeck,
  deckTopics,
  examsWithDecks,
  loadStore,
  saveStore,
  grade,
  isDue,
  dueCount,
  masteredCount,
} from "@/lib/flashcards";
import { recordFlashcards } from "@/lib/gameStore";
import { preferredExam } from "@/lib/preferredExam";
import ExamPicker from "@/components/ExamPicker";

export default function FlashcardsClient() {
  const available = examsWithDecks();
  const params = useSearchParams();

  // Honor ?exam= and ?topic= so links from the skill tree open the right deck.
  const paramExam = params.get("exam");
  const initialExam = preferredExam(available, paramExam);
  const paramTopic = params.get("topic");
  const initialTopic = paramTopic && deckTopics(initialExam).some((t) => t.topicId === paramTopic) ? paramTopic : "all";

  const [exam, setExam] = useState(initialExam);
  const [topic, setTopic] = useState<string>(initialTopic);
  const [store, setStore] = useState<FlashStore>({});
  const [loaded, setLoaded] = useState(false);
  const [studying, setStudying] = useState(false);

  useEffect(() => { setStore(loadStore()); setLoaded(true); }, []);
  useEffect(() => { if (loaded) saveStore(store); }, [store, loaded]);

  const deck = useMemo(() => buildDeck(exam, topic === "all" ? undefined : topic), [exam, topic]);
  const topics = deckTopics(exam);

  if (!loaded) return <div className="p-10" style={{ color: "var(--text-muted)" }}>Loading…</div>;

  if (studying) {
    return (
      <StudySession
        deck={deck}
        store={store}
        onGrade={(id, known) => setStore((s) => grade(s, id, known))}
        onDone={(reviewed, known) => {
          if (reviewed > 0) recordFlashcards(exam, known, reviewed);
          setStudying(false);
        }}
      />
    );
  }

  const due = dueCount(deck, store);
  const mastered = masteredCount(deck, store);

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>Flashcards</h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        Spaced repetition — cards you know come back less often, cards you miss come back soon. Built from every chapter&apos;s key terms.
      </p>

      <div className="mb-6">
        <ExamPicker
          value={exam}
          available={available}
          onChange={(slug) => { setExam(slug); setTopic("all"); }}
          label="Deck for"
        />
      </div>

      {/* Dead gate removed. canExam() returns true for everyone — no exam has
          been Pro-only since previewing opened up — so this branch could never
          render, but it still told users "free includes the full CFA decks,
          upgrade for other exams", which is a third contradicting story about
          what's paid. Breadth is free; depth is gated. See src/lib/tier.ts. */}
      {(
      <>
      <p className="text-xs font-medium mb-2" style={{ color: "var(--text-secondary)" }}>Deck</p>
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Chip label={`All topics (${buildDeck(exam).length})`} active={topic === "all"} onClick={() => setTopic("all")} />
        {topics.map((t) => (
          <Chip key={t.topicId} label={`${t.topicName} (${t.count})`} active={topic === t.topicId} onClick={() => setTopic(t.topicId)} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat label="Cards" value={`${deck.length}`} />
        <Stat label="Due now" value={`${due}`} accent={due > 0 ? "#BA7517" : "#1D9E75"} />
        <Stat label="Mastered" value={`${mastered}`} accent="#1D9E75" />
      </div>

      <button className="btn-primary w-full" disabled={deck.length === 0} onClick={() => setStudying(true)}>
        {due > 0 ? `Review ${due} due card${due !== 1 ? "s" : ""} →` : "Study all cards →"}
      </button>
      </>
      )}
    </div>
  );
}

function StudySession({
  deck, store, onGrade, onDone,
}: {
  deck: Flashcard[];
  store: FlashStore;
  onGrade: (id: string, known: boolean) => void;
  onDone: (reviewed: number, known: number) => void;
}) {
  // Prefer due cards; if none due, study the whole deck.
  const queue = useMemo(() => {
    const dueCards = deck.filter((c) => isDue(c, store));
    return (dueCards.length ? dueCards : deck).slice();
  }, []); // freeze the queue for this session

  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const card = queue[idx];

  function answer(known: boolean) {
    onGrade(card.id, known);
    const newKnown = knownCount + (known ? 1 : 0);
    setKnownCount(newKnown);
    if (idx + 1 >= queue.length) onDone(queue.length, newKnown);
    else { setIdx(idx + 1); setFlipped(false); }
  }

  if (!card) {
    return (
      <div className="px-4 py-8 md:px-8 md:py-10 max-w-2xl mx-auto text-center">
        <div className="text-4xl mb-3">🎉</div>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>No cards to review. Come back later.</p>
        <button className="btn-secondary mt-4" onClick={() => onDone(0, 0)}>Back</button>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>Card {idx + 1} of {queue.length}</span>
        <span className="text-xs font-medium" style={{ color: "var(--primary)" }}>{card.topicName}</span>
      </div>

      <button
        onClick={() => setFlipped((f) => !f)}
        className="card w-full text-center px-6 py-16 mb-5 transition-colors"
        style={{ minHeight: 220, cursor: "pointer" }}
      >
        {!flipped ? (
          <>
            <div className="text-xl font-medium" style={{ color: "var(--text-primary)" }}>{card.front}</div>
            <div className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>Tap to reveal</div>
          </>
        ) : (
          <div className="text-base animate-in" style={{ color: "var(--text-primary)", lineHeight: 1.6 }}>{card.back}</div>
        )}
      </button>

      {!flipped ? (
        <button className="btn-secondary w-full" onClick={() => setFlipped(true)}>Show answer</button>
      ) : (
        <div className="flex items-center gap-3">
          <button className="btn-secondary flex-1" style={{ borderColor: "var(--ats-red)", color: "var(--ats-red)" }} onClick={() => answer(false)}>
            Again
          </button>
          <button className="btn-primary flex-1" onClick={() => answer(true)}>Got it</button>
        </div>
      )}
    </div>
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="text-xs px-3 py-1.5 rounded-lg"
      style={{
        background: active ? "var(--primary-light)" : "var(--bg-card)",
        color: active ? "var(--primary)" : "var(--text-secondary)",
        border: `0.5px solid ${active ? "rgba(83,74,183,0.3)" : "var(--border)"}`, fontWeight: active ? 500 : 400,
      }}>
      {label}
    </button>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="card p-3 text-center">
      <div className="text-xl font-semibold" style={{ color: accent ?? "var(--text-primary)" }}>{value}</div>
      <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>{label}</div>
    </div>
  );
}
