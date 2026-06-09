import Link from "next/link";
import { EXAMS, WEALTH_TRACK, getExam, difficultyLabel, totalHours } from "@/lib/exams";

export default function ExamsPage() {
  return (
    <div className="px-8 py-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
        Exam catalog
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
        The hardest finance certifications, each broken into a daily climb. Pick one to set up your plan.
      </p>

      {/* Wealth Management track */}
      <div className="card p-5 mb-8" style={{ background: "var(--primary-light)", border: "0.5px solid rgba(83,74,183,0.2)" }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">💼</span>
          <h2 className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            Wealth Management Track
          </h2>
        </div>
        <p className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
          The full advisor path, sequenced in the order most people take it.
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {WEALTH_TRACK.map((slug, i) => {
            const e = getExam(slug)!;
            return (
              <span key={slug} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: "var(--bg-card)", color: e.accent, border: "0.5px solid var(--border)" }}>
                  {e.name}
                </span>
                {i < WEALTH_TRACK.length - 1 && <span style={{ color: "var(--text-muted)" }}>→</span>}
              </span>
            );
          })}
        </div>
      </div>

      {/* All exams */}
      <div className="grid grid-cols-2 gap-4">
        {EXAMS.map((e) => (
          <div key={e.slug} className="card p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-sm font-semibold" style={{ background: e.accent + "1a", color: e.accent }}>
                  {e.name.slice(0, 2)}
                </span>
                <div>
                  <h3 className="text-sm font-medium flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                    {e.name}
                    {e.flagship && <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--primary)", color: "#fff" }}>Flagship</span>}
                  </h3>
                  <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>{e.fullName}</p>
                </div>
              </div>
              <span className="text-[11px] font-medium whitespace-nowrap" style={{ color: e.accent }}>
                {difficultyLabel(e.difficulty)}
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
              {e.blurb}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                {e.levels.length} {e.levels.length === 1 ? "exam" : "levels"} · ~{totalHours(e)} hrs
              </span>
              <Link href="/dashboard" className="text-xs font-medium" style={{ color: "var(--primary)" }}>
                Set up plan →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
