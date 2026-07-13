"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { EXAMS } from "@/lib/exams";
import { examsWithContent, getChapters, getChapter } from "@/content";
import { Chapter, Block } from "@/content/types";
import { useAccess } from "@/lib/useAccess";
import { UpgradeCard } from "@/components/UpgradeGate";
import { loadReading, markChapterRead, isChapterRead, ReadingStore } from "@/lib/readingProgress";
import { recordReadingXp } from "@/lib/gameStore";
import { trackActivated } from "@/lib/analytics";
import { GoldBurst } from "@/components/ui";
import { ArrowLeftIcon, BookIcon, CheckCircleIcon, CheckIcon, ListIcon } from "@/components/icons";
import Tutor from "@/components/Tutor";

/** Flatten a section's content into plain text for the tutor's context. */
function sectionPlainText(chapter: Chapter, idx: number): string {
  const s = chapter.sections[idx];
  if (!s) return "";
  const parts: string[] = [s.heading];
  (s.paragraphs ?? []).forEach((p) => parts.push(p));
  (s.bullets ?? []).forEach((b) => parts.push("• " + b));
  if (s.callout) parts.push(`${s.callout.label}: ${s.callout.body}`);
  (s.blocks ?? []).forEach((b) => {
    if (b.kind === "p") parts.push(b.text);
    else if (b.kind === "bullets") b.items.forEach((i) => parts.push("• " + i));
    else if (b.kind === "callout") parts.push(`${b.label}: ${b.body}`);
    else if (b.kind === "formula") parts.push(`Formula${b.formula.label ? ` (${b.formula.label})` : ""}: ${b.formula.expr}${b.formula.note ? ` — ${b.formula.note}` : ""}`);
    else if (b.kind === "example") parts.push(`Worked example (${b.example.title}): ${b.example.prompt} Steps: ${b.example.steps.join(" ")} Answer: ${b.example.answer}`);
    else if (b.kind === "table") parts.push(`Table: ${b.table.headers.join(" | ")}. ${b.table.rows.map((r) => r.join(" | ")).join(". ")}`);
  });
  return parts.join("\n").slice(0, 5200);
}

export default function LearnClient() {
  const available = examsWithContent();
  const access = useAccess();
  const params = useSearchParams();

  // Honor ?exam= and ?topic=/?chapter= so links from the skill tree, dashboard,
  // etc. open the RIGHT exam and chapter (not the default first exam).
  const paramExam = params.get("exam");
  const initialExam = paramExam && available.includes(paramExam) ? paramExam : available[0] ?? "cfa";
  const initialChapterId = (() => {
    const ch = params.get("chapter");
    if (ch) return ch;
    const topic = params.get("topic");
    if (topic) {
      const match = getChapters(initialExam).find((c) => c.topicId === topic);
      if (match) return match.id;
    }
    return null;
  })();

  const [exam, setExam] = useState(initialExam);
  const [chapterId, setChapterId] = useState<string | null>(initialChapterId);
  const [reading, setReading] = useState<ReadingStore>({});
  const locked = access.ready && !access.canExam(exam);

  useEffect(() => {
    setReading(loadReading());
  }, [chapterId]);

  const chapters = getChapters(exam);
  const chapter = chapterId ? getChapter(exam, chapterId) : null;
  const chapterIndex = chapter ? chapters.findIndex((c) => c.id === chapter.id) : -1;

  if (chapter) {
    if (access.ready && !access.canChapter(chapterIndex, chapters.length)) {
      return (
        <div className="px-4 py-6 md:px-8 md:py-8 max-w-2xl mx-auto">
          <button onClick={() => setChapterId(null)} className="text-sm mb-6 flex items-center gap-1" style={{ color: "var(--text-secondary)" }}>
            ← All chapters
          </button>
          <UpgradeCard
            title="Unlock the second half"
            reason={`The first ${access.freeChapters(chapters.length)} of ${chapters.length} chapters are free — that's half the curriculum. Pro unlocks the rest, plus unlimited practice questions.`}
          />
        </div>
      );
    }
    return <Reader chapter={chapter} onBack={() => setChapterId(null)} />;
  }

  const readCount = chapters.filter((c) => isChapterRead(exam, c.id, reading)).length;

  return (
    <div className="px-4 py-6 md:px-8 md:py-8 max-w-3xl mx-auto">
      <h1 className="font-display text-3xl mb-1" style={{ color: "var(--text-primary)" }}>
        Reading
      </h1>
      <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
        Original, in-depth chapters on each major topic. Read first, then drill it in Practice.
      </p>

      {/* Exam selector */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {EXAMS.map((e) => {
          const has = available.includes(e.slug);
          const active = e.slug === exam;
          return (
            <button
              key={e.slug}
              disabled={!has}
              onClick={() => { setExam(e.slug); setChapterId(null); }}
              className="text-xs px-3 py-1.5 rounded-lg transition-colors"
              style={{
                background: active ? "var(--primary)" : "var(--bg-card)",
                color: active ? "#fff" : has ? "var(--text-secondary)" : "var(--text-muted)",
                border: "0.5px solid var(--border)",
                opacity: has ? 1 : 0.5,
                cursor: has ? "pointer" : "not-allowed",
              }}
              title={has ? "" : "Content coming soon"}
            >
              {e.name}{!has ? " · soon" : access.ready && !access.canExam(e.slug) ? " · Pro" : ""}
            </button>
          );
        })}
      </div>

      {/* Course progress */}
      {!locked && chapters.length > 0 && (
        <div className="card p-4 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span style={{ color: "var(--primary)" }}><BookIcon size={18} /></span>
            <div>
              <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                {readCount} of {chapters.length} chapters completed
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                Finish a chapter to earn its reading-time XP.
              </div>
            </div>
          </div>
          <span className="font-mono text-sm font-semibold" style={{ color: readCount === chapters.length && readCount > 0 ? "var(--gold)" : "var(--primary)" }}>
            {chapters.length ? Math.round((readCount / chapters.length) * 100) : 0}%
          </span>
        </div>
      )}

      {locked ? (
        <UpgradeCard title="This exam is Pro" reason="Free includes the full CFA track. Upgrade to read every other exam." />
      ) : chapters.length === 0 ? (
        <div className="card p-8 text-center" style={{ color: "var(--text-muted)" }}>
          Chapters for this exam are being written. Check back soon.
        </div>
      ) : (
        <div className="space-y-3 stagger">
          {chapters.map((c, i) => {
            const done = isChapterRead(exam, c.id, reading);
            const chLocked = access.ready && !access.canChapter(i, chapters.length);
            return (
              <button key={c.id} onClick={() => { setChapterId(c.id); if (!chLocked) posthog.capture("chapter_started", { exam, chapter_id: c.id, chapter_title: c.title, topic: c.topicId, topic_name: c.topicName }); }} className="card-i p-5 w-full text-left block" style={{ opacity: chLocked ? 0.9 : 1 }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-medium uppercase tracking-wide" style={{ color: "var(--primary)" }}>
                    {c.topicName}
                  </span>
                  <span className="text-[11px] flex items-center gap-1.5" style={{ color: done && !chLocked ? "var(--ats-green)" : "var(--text-muted)" }}>
                    {chLocked ? (
                      "Pro"
                    ) : done ? (
                      <><CheckCircleIcon size={13} /> Completed</>
                    ) : (
                      `${c.readingMinutes} min read`
                    )}
                  </span>
                </div>
                <h3 className="font-display text-lg mb-1" style={{ color: "var(--text-primary)" }}>{c.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{c.summary}</p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Reader — premium e-reader treatment: scroll progress, section
// nav, serif body, completion XP.
// ============================================================

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function Reader({ chapter, onBack }: { chapter: Chapter; onBack: () => void }) {
  const [scrollPct, setScrollPct] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [completed, setCompleted] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCompleted(isChapterRead(chapter.examSlug, chapter.id));
    window.scrollTo({ top: 0 });
  }, [chapter]);

  // Scroll progress + active section tracking.
  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setScrollPct(total > 0 ? Math.min(100, (el.scrollTop / total) * 100) : 0);

      const headers = articleRef.current?.querySelectorAll("section[data-idx]");
      if (headers) {
        let current = 0;
        headers.forEach((h) => {
          if (h.getBoundingClientRect().top < 140) current = Number((h as HTMLElement).dataset.idx);
        });
        setActiveSection(current);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const minutesLeft = Math.max(0, Math.ceil(chapter.readingMinutes * (1 - scrollPct / 100)));

  function complete() {
    if (completed) return;
    markChapterRead(chapter.examSlug, chapter.id);
    recordReadingXp(chapter.examSlug, chapter.readingMinutes, chapter.topicId); // streak/pacing only — no XP
    posthog.capture("chapter_completed", {
      exam: chapter.examSlug,
      chapter_id: chapter.id,
      chapter_title: chapter.title,
      topic: chapter.topicId,
      topic_name: chapter.topicName,
      reading_minutes: chapter.readingMinutes,
    });
    trackActivated("reading", { exam: chapter.examSlug });
    setCompleted(true);
  }

  function jumpTo(i: number) {
    const el = document.getElementById(`sec-${i}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      {/* Scroll progress */}
      <div className="read-progress">
        <div style={{ width: `${scrollPct}%` }} />
      </div>

      <div className="max-w-2xl mx-auto" style={{ position: "relative" }}>
        {/* Section nav — floats right of the column on wide screens */}
        <nav
          className="hidden xl:block"
          style={{
            position: "fixed",
            top: 110,
            right: "max(24px, calc((100vw - var(--sidebar-width) - 672px) / 2 - 230px))",
            width: 200,
          }}
        >
          <div className="flex items-center gap-1.5 mb-2.5" style={{ color: "var(--text-muted)" }}>
            <ListIcon size={12} />
            <span className="text-[10px] font-semibold uppercase tracking-wider">In this chapter</span>
          </div>
          <div className="space-y-0.5" style={{ borderLeft: "1px solid var(--border)" }}>
            {chapter.sections.map((s, i) => (
              <button
                key={i}
                onClick={() => jumpTo(i)}
                className="block w-full text-left text-[11px] py-1 pl-3 transition-colors"
                style={{
                  color: activeSection === i ? "var(--primary)" : "var(--text-muted)",
                  borderLeft: activeSection === i ? "2px solid var(--primary)" : "2px solid transparent",
                  marginLeft: -1.5,
                  fontWeight: activeSection === i ? 600 : 400,
                  lineHeight: 1.35,
                }}
              >
                {s.heading}
              </button>
            ))}
          </div>
          <div className="text-[10px] mt-3 font-mono" style={{ color: "var(--text-muted)" }}>
            {minutesLeft > 0 ? `~${minutesLeft} min left` : "Finished — mark it complete ↓"}
          </div>
        </nav>

        <button onClick={onBack} className="text-sm mb-6 flex items-center gap-1.5 hover:underline" style={{ color: "var(--text-secondary)" }}>
          <ArrowLeftIcon size={14} /> All chapters
        </button>

        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium uppercase tracking-wide" style={{ color: "var(--primary)" }}>
            {chapter.topicName} · {chapter.readingMinutes} min read
          </span>
          {completed && (
            <span className="pill-gold text-[11px]"><CheckIcon size={11} /> Completed</span>
          )}
        </div>
        <h1 className="font-display mt-2 mb-5" style={{ color: "var(--text-primary)", fontSize: "2.3rem", lineHeight: 1.15 }}>
          {chapter.title}
        </h1>
        <p className="prose-read mb-8" style={{ color: "var(--text-secondary)", fontSize: "1.15rem", lineHeight: 1.6 }}>
          {chapter.intro}
        </p>

        <div ref={articleRef}>
          {chapter.sections.map((s, i) => (
            <section key={i} id={`sec-${i}`} data-idx={i} className="mb-9" style={{ scrollMarginTop: 90 }}>
              <div className="flex items-baseline gap-2.5 mb-3">
                <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl" style={{ color: "var(--text-primary)" }}>{s.heading}</h2>
              </div>
              <div className="prose-read" style={{ color: "var(--text-primary)" }}>
                {(s.paragraphs ?? []).map((p, j) => (
                  <p key={j} style={{ opacity: 0.92 }}>{p}</p>
                ))}
                {s.bullets && (
                  <ul className="mb-4 space-y-1.5" style={{ listStyle: "disc", paddingLeft: "1.25rem" }}>
                    {s.bullets.map((b, j) => (
                      <li key={j} style={{ opacity: 0.92 }}>{b}</li>
                    ))}
                  </ul>
                )}
                {s.callout && <Callout label={s.callout.label} body={s.callout.body} />}
                {(s.blocks ?? []).map((b, j) => (
                  <BlockView key={j} block={b} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Key terms */}
        <h2 className="font-display text-2xl mb-3 mt-10" style={{ color: "var(--text-primary)" }}>Key terms</h2>
        <div className="space-y-2 mb-8">
          {chapter.keyTerms.map((t) => (
            <div key={t.term} className="card p-3">
              <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.term}</span>
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}> — {t.def}</span>
            </div>
          ))}
        </div>

        {/* Takeaways */}
        <div className="rounded-lg p-5 mb-8" style={{ background: "var(--bg-card)", border: "0.5px solid var(--border)" }}>
          <h2 className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Key takeaways</h2>
          <ul className="space-y-1.5">
            {chapter.takeaways.map((t, i) => (
              <li key={i} className="text-sm flex gap-2" style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }}><CheckIcon size={13} /></span> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Completion */}
        <div
          className="rounded-xl p-6 mb-8 text-center"
          style={{
            position: "relative",
            background: completed ? "var(--gold-bg)" : "var(--bg-card)",
            border: completed ? "1px solid var(--gold-border)" : "0.5px solid var(--border)",
            boxShadow: completed ? "var(--glow-gold)" : "none",
            transition: "all 0.4s ease",
          }}
        >
          {completed && <GoldBurst count={20} />}
          {completed ? (
            <>
              <div className="flex items-center justify-center gap-2 mb-1" style={{ color: "var(--gold)" }}>
                <CheckCircleIcon size={20} />
                <span className="font-display text-lg">Chapter complete</span>
              </div>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Logged toward your readiness rating. Now make it stick — drill this topic to earn XP.
              </p>
            </>
          ) : (
            <>
              <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                Done reading? Mark it complete to log it toward your readiness rating. (XP is earned in Practice — by getting questions right.)
              </p>
              <button className="btn-primary" onClick={complete}>
                Mark chapter complete
              </button>
            </>
          )}
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Link href={`/practice?exam=${chapter.examSlug}&topic=${chapter.topicId}`} className="btn-primary inline-block">
            Practice {chapter.topicName} →
          </Link>
          <Link href={`/flashcards?exam=${chapter.examSlug}&topic=${chapter.topicId}`} className="btn-secondary inline-block">
            Flashcards
          </Link>
        </div>
      </div>

      {/* The Associate — knows exactly which section you're reading */}
      <Tutor
        context={`Exam: ${chapter.examSlug.toUpperCase()} · Chapter: "${chapter.title}" (${chapter.topicName}).\nThe student is currently reading the section below:\n\n${sectionPlainText(chapter, activeSection)}`}
        suggestions={[
          "Explain this section simply",
          "Give me another worked example",
          "Quiz me on this section",
        ]}
      />
    </div>
  );
}

function Callout({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-lg p-4 my-4" style={{ background: "var(--primary-light)", border: "0.5px solid rgba(83,74,183,0.2)", borderLeft: "3px solid var(--primary)" }}>
      <div className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: "var(--primary)", fontFamily: "var(--sans)" }}>{label}</div>
      <div className="text-sm" style={{ color: "var(--text-primary)", fontFamily: "var(--sans)", lineHeight: 1.6 }}>{body}</div>
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "p":
      return <p style={{ opacity: 0.92 }}>{block.text}</p>;
    case "bullets":
      return (
        <ul className="mb-4 space-y-1.5" style={{ listStyle: "disc", paddingLeft: "1.25rem" }}>
          {block.items.map((b, j) => (
            <li key={j} style={{ opacity: 0.92 }}>{b}</li>
          ))}
        </ul>
      );
    case "callout":
      return <Callout label={block.label} body={block.body} />;
    case "figure":
      return (
        <figure className="my-6">
          <div
            className="card p-4 flex justify-center"
            style={{ overflowX: "auto" }}
            role="img"
            aria-label={block.figure.alt ?? block.figure.caption}
            dangerouslySetInnerHTML={{ __html: block.figure.svg }}
          />
          <figcaption className="text-xs mt-2 text-center" style={{ color: "var(--text-muted)", fontFamily: "var(--sans)" }}>
            {block.figure.caption}
          </figcaption>
        </figure>
      );
    case "formula":
      return (
        <div className="rounded-lg p-4 my-4 text-center" style={{ background: "var(--bg-card)", border: "0.5px solid var(--border-strong)" }}>
          {block.formula.label && (
            <div className="text-[11px] font-medium mb-1.5 uppercase tracking-wide" style={{ color: "var(--text-muted)", fontFamily: "var(--sans)" }}>{block.formula.label}</div>
          )}
          <div style={{ fontFamily: "var(--mono)", fontSize: "1.02rem", color: "var(--text-primary)" }}>
            {block.formula.expr}
          </div>
          {block.formula.note && (
            <div className="text-xs mt-1.5" style={{ color: "var(--text-secondary)", fontFamily: "var(--sans)" }}>{block.formula.note}</div>
          )}
        </div>
      );
    case "table":
      return (
        <div className="my-5">
          <div className="card" style={{ overflowX: "auto", maxWidth: "100%" }}>
            <table className="reading-table" style={{ width: "100%", minWidth: 300, borderCollapse: "collapse", fontSize: "0.85rem", fontFamily: "var(--sans)" }}>
              <thead>
                <tr style={{ background: "var(--bg)" }}>
                  {block.table.headers.map((h, k) => (
                    <th key={k} style={{ textAlign: "left", padding: "8px 12px", color: "var(--text-secondary)", fontWeight: 600, borderBottom: "0.5px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.table.rows.map((row, r) => (
                  <tr key={r}>
                    {row.map((cell, c) => (
                      <td key={c} style={{ padding: "8px 12px", color: "var(--text-primary)", borderBottom: "0.5px solid var(--border)", opacity: 0.92 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.table.caption && (
            <div className="text-xs mt-2 text-center" style={{ color: "var(--text-muted)", fontFamily: "var(--sans)" }}>{block.table.caption}</div>
          )}
        </div>
      );
    case "example":
      return (
        <div className="rounded-lg p-4 my-5" style={{ background: "var(--bg-card)", border: "0.5px solid var(--border)", borderLeft: "3px solid var(--ats-green)", fontFamily: "var(--sans)" }}>
          <div className="text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "var(--ats-green)" }}>
            Worked example · {block.example.title}
          </div>
          <p className="text-sm mb-2" style={{ color: "var(--text-primary)", opacity: 0.92, lineHeight: 1.6 }}>{block.example.prompt}</p>
          <ol className="space-y-1 mb-2" style={{ listStyle: "decimal", paddingLeft: "1.25rem" }}>
            {block.example.steps.map((st, j) => (
              <li key={j} className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.55 }}>{st}</li>
            ))}
          </ol>
          <div className="text-sm font-medium" style={{ color: "var(--ats-green)" }}>Answer: {block.example.answer}</div>
        </div>
      );
  }
}
