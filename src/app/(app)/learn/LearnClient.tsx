"use client";

import { useState } from "react";
import Link from "next/link";
import { EXAMS } from "@/lib/exams";
import { examsWithContent, getChapters, getChapter } from "@/content";
import { Chapter, Block } from "@/content/types";
import { useAccess } from "@/lib/useAccess";
import { UpgradeCard } from "@/components/UpgradeGate";

export default function LearnClient() {
  const available = examsWithContent();
  const access = useAccess();
  const [exam, setExam] = useState(available[0] ?? "cfa");
  const [chapterId, setChapterId] = useState<string | null>(null);
  const locked = access.ready && !access.canExam(exam);

  const chapters = getChapters(exam);
  const chapter = chapterId ? getChapter(exam, chapterId) : null;

  if (chapter) {
    return <Reader chapter={chapter} onBack={() => setChapterId(null)} />;
  }

  return (
    <div className="px-8 py-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
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
              {e.name}{!has ? " · soon" : access.ready && !access.canExam(e.slug) ? " 🔒" : ""}
            </button>
          );
        })}
      </div>

      {locked ? (
        <UpgradeCard title="This exam is Pro" reason="Free includes the full CFA track. Upgrade to read every other exam." />
      ) : chapters.length === 0 ? (
        <div className="card p-8 text-center" style={{ color: "var(--text-muted)" }}>
          Chapters for this exam are being written. Check back soon.
        </div>
      ) : (
        <div className="space-y-3">
          {chapters.map((c) => (
            <button key={c.id} onClick={() => setChapterId(c.id)} className="card p-5 w-full text-left block hover:opacity-90 transition-opacity">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-medium uppercase tracking-wide" style={{ color: "var(--primary)" }}>
                  {c.topicName}
                </span>
                <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                  {c.readingMinutes} min read
                </span>
              </div>
              <h3 className="text-base font-medium mb-1" style={{ color: "var(--text-primary)" }}>{c.title}</h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{c.summary}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Reader({ chapter, onBack }: { chapter: Chapter; onBack: () => void }) {
  return (
    <div className="px-8 py-8 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
      <button onClick={onBack} className="text-sm mb-6 flex items-center gap-1" style={{ color: "var(--text-secondary)" }}>
        ← All chapters
      </button>

      <span className="text-[11px] font-medium uppercase tracking-wide" style={{ color: "var(--primary)" }}>
        {chapter.topicName} · {chapter.readingMinutes} min read
      </span>
      <h1 className="text-3xl font-medium mt-2 mb-5" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
        {chapter.title}
      </h1>
      <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>{chapter.intro}</p>

      {chapter.sections.map((s, i) => (
        <section key={i} className="mb-8">
          <h2 className="text-xl font-medium mb-3" style={{ color: "var(--text-primary)" }}>{s.heading}</h2>
          {(s.paragraphs ?? []).map((p, j) => (
            <p key={j} className="mb-4" style={{ color: "var(--text-primary)", opacity: 0.92 }}>{p}</p>
          ))}
          {s.bullets && (
            <ul className="mb-4 space-y-1.5" style={{ listStyle: "disc", paddingLeft: "1.25rem" }}>
              {s.bullets.map((b, j) => (
                <li key={j} style={{ color: "var(--text-primary)", opacity: 0.92 }}>{b}</li>
              ))}
            </ul>
          )}
          {s.callout && <Callout label={s.callout.label} body={s.callout.body} />}
          {(s.blocks ?? []).map((b, j) => (
            <BlockView key={j} block={b} />
          ))}
        </section>
      ))}

      {/* Key terms */}
      <h2 className="text-xl font-medium mb-3 mt-10" style={{ color: "var(--text-primary)" }}>Key terms</h2>
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
              <span style={{ color: "var(--primary)" }}>✓</span> {t}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/practice?exam=${chapter.examSlug}&topic=${chapter.topicId}`}
        className="btn-primary inline-block"
      >
        Practice {chapter.topicName} →
      </Link>
    </div>
  );
}

function Callout({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-lg p-4 my-4" style={{ background: "var(--primary-light)", border: "0.5px solid rgba(83,74,183,0.2)" }}>
      <div className="text-xs font-semibold mb-1" style={{ color: "var(--primary)" }}>{label}</div>
      <div className="text-sm" style={{ color: "var(--text-primary)" }}>{body}</div>
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "p":
      return <p className="mb-4" style={{ color: "var(--text-primary)", opacity: 0.92 }}>{block.text}</p>;
    case "bullets":
      return (
        <ul className="mb-4 space-y-1.5" style={{ listStyle: "disc", paddingLeft: "1.25rem" }}>
          {block.items.map((b, j) => (
            <li key={j} style={{ color: "var(--text-primary)", opacity: 0.92 }}>{b}</li>
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
          <figcaption className="text-xs mt-2 text-center" style={{ color: "var(--text-muted)" }}>
            {block.figure.caption}
          </figcaption>
        </figure>
      );
    case "formula":
      return (
        <div className="rounded-lg p-4 my-4 text-center" style={{ background: "var(--bg-card)", border: "0.5px solid var(--border-strong)" }}>
          {block.formula.label && (
            <div className="text-[11px] font-medium mb-1.5 uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>{block.formula.label}</div>
          )}
          <div style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: "1.02rem", color: "var(--text-primary)" }}>
            {block.formula.expr}
          </div>
          {block.formula.note && (
            <div className="text-xs mt-1.5" style={{ color: "var(--text-secondary)" }}>{block.formula.note}</div>
          )}
        </div>
      );
    case "table":
      return (
        <div className="my-5">
          <div className="card" style={{ overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
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
            <div className="text-xs mt-2 text-center" style={{ color: "var(--text-muted)" }}>{block.table.caption}</div>
          )}
        </div>
      );
    case "example":
      return (
        <div className="rounded-lg p-4 my-5" style={{ background: "var(--bg-card)", border: "0.5px solid var(--border)" }}>
          <div className="text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "var(--primary)" }}>
            Worked example · {block.example.title}
          </div>
          <p className="text-sm mb-2" style={{ color: "var(--text-primary)", opacity: 0.92 }}>{block.example.prompt}</p>
          <ol className="space-y-1 mb-2" style={{ listStyle: "decimal", paddingLeft: "1.25rem" }}>
            {block.example.steps.map((st, j) => (
              <li key={j} className="text-sm" style={{ color: "var(--text-secondary)" }}>{st}</li>
            ))}
          </ol>
          <div className="text-sm font-medium" style={{ color: "var(--ats-green)" }}>Answer: {block.example.answer}</div>
        </div>
      );
  }
}
