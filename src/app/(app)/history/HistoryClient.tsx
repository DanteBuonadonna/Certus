"use client";

import { useState } from "react";
import { OptimizationHistory, getATSColor, getATSLevel } from "@/types";

interface Props {
  history: OptimizationHistory[];
  totalOptimizations: number;
  creditsLeft: number;
  avgAtsScore: number;
}

export default function HistoryClient({
  history,
  totalOptimizations,
  creditsLeft,
  avgAtsScore,
}: Props) {
  const [selected, setSelected] = useState<OptimizationHistory | null>(null);
  const [activeTab, setActiveTab] = useState<"bullets" | "cover">("bullets");

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          History
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          All your past optimizations.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard label="Optimizations run" value={totalOptimizations} />
        <StatCard label="Credits left" value={creditsLeft} />
        <StatCard label="Avg ATS score after" value={avgAtsScore} suffix="/100" />
      </div>

      {/* List */}
      {history.length === 0 ? (
        <div
          className="card p-12 text-center"
        >
          <div className="text-4xl mb-3">📄</div>
          <p className="font-medium mb-1" style={{ color: "var(--text-primary)" }}>
            No optimizations yet
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Head to the Optimizer tab to run your first one.
          </p>
        </div>
      ) : (
        <div className="card overflow-hidden">
          {history.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelected(item);
                setActiveTab("bullets");
              }}
              className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-opacity-50"
              style={{
                borderBottom: idx < history.length - 1 ? "0.5px solid var(--border)" : "none",
                background: selected?.id === item.id ? "var(--primary-light)" : "transparent",
              }}
            >
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {item.role_title || "Untitled role"}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {item.company_name} · {formatDate(item.created_at)}
                </p>
              </div>
              <ATSBadge score={item.ats_score_after} />
            </button>
          ))}
        </div>
      )}

      {/* Detail panel */}
      {selected && (
        <div className="mt-6 card overflow-hidden animate-in">
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{ borderBottom: "0.5px solid var(--border)" }}
          >
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                {selected.role_title} — {selected.company_name}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                ATS: {selected.ats_score_before} → {selected.ats_score_after}
              </p>
            </div>
            <div className="flex gap-1">
              <TabBtn
                active={activeTab === "bullets"}
                onClick={() => setActiveTab("bullets")}
                label="Bullets"
              />
              <TabBtn
                active={activeTab === "cover"}
                onClick={() => setActiveTab("cover")}
                label="Cover letter"
              />
            </div>
          </div>

          <div className="p-5">
            {activeTab === "bullets" && (
              <div className="space-y-3">
                {parseBullets(selected.optimized_bullets).map((bullet, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }}>•</span>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "cover" && (
              <div className="text-sm leading-relaxed space-y-4" style={{ color: "var(--text-primary)" }}>
                {selected.optimized_cover_letter.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, suffix }: { label: string; value: number; suffix?: string }) {
  return (
    <div className="card p-5">
      <p className="text-2xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
        {value}{suffix}
      </p>
      <p className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
    </div>
  );
}

function ATSBadge({ score }: { score: number }) {
  const color = getATSColor(score);
  const level = getATSLevel(score);
  const bg =
    level === "green"
      ? "var(--ats-green-bg)"
      : level === "amber"
      ? "var(--ats-amber-bg)"
      : "var(--ats-red-bg)";

  return (
    <span
      className="text-xs font-medium px-2.5 py-1 rounded-full"
      style={{ background: bg, color }}
    >
      {score}
    </span>
  );
}

function TabBtn({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className="text-sm px-3 py-1.5 rounded-md transition-colors"
      style={{
        background: active ? "var(--primary-light)" : "transparent",
        color: active ? "var(--primary)" : "var(--text-secondary)",
        fontWeight: active ? 500 : 400,
      }}
    >
      {label}
    </button>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function parseBullets(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
  } catch {
    // fallback to splitting by newlines
  }
  return raw.split("\n").filter(Boolean);
}
