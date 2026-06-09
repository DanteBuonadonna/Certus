"use client";

import { useState } from "react";
import { OptimizeResult, getATSColor } from "@/types";

type Tab = "bullets" | "cover";

export default function OptimizerPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState("");
  const [includeResumeBullets, setIncludeResumeBullets] = useState(true);
  const [includeCoverLetter, setIncludeCoverLetter] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<OptimizeResult | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("bullets");
  const [copied, setCopied] = useState(false);

  async function handleAnalyze() {
    if (!jobDescription.trim() || !resume.trim()) {
      setError("Please paste both a job description and your resume.");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobDescription,
          resume,
          includeResumeBullets,
          includeCoverLetter,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setResult(data);
        setActiveTab("bullets");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function getTabContent(): string {
    if (!result) return "";
    if (activeTab === "bullets") {
      return result.optimized_bullets.join("\n\n");
    }
    return result.optimized_cover_letter;
  }

  async function handleCopy() {
    const text = getTabContent();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          AI Optimizer
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Paste a job description and your resume — we&apos;ll score, analyze, and rewrite everything.
        </p>
      </div>

      {/* Input area */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
            Job description
          </label>
          <textarea
            className="input-field textarea-field w-full"
            placeholder="Paste the full job description here…"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
            Your resume
          </label>
          <textarea
            className="input-field textarea-field w-full"
            placeholder="Paste your resume text here…"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />
        </div>
      </div>

      {/* Toggles */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>Include:</span>
        <Toggle
          label="Resume bullets"
          enabled={includeResumeBullets}
          onChange={setIncludeResumeBullets}
        />
        <Toggle
          label="Cover letter"
          enabled={includeCoverLetter}
          onChange={setIncludeCoverLetter}
        />
      </div>

      {/* Error */}
      {error && (
        <div
          className="mb-4 px-4 py-3 rounded-lg text-sm"
          style={{ background: "var(--ats-red-bg)", color: "var(--ats-red)" }}
        >
          {error}
        </div>
      )}

      {/* CTA button */}
      <button
        className="btn-primary flex items-center gap-2 mb-8"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="spinner" />
            Analyzing & optimizing…
          </>
        ) : (
          <>
            <SparkIcon />
            Analyze &amp; optimize — uses 1 credit
          </>
        )}
      </button>

      {/* Result */}
      {result && (
        <div className="animate-in space-y-5">
          {/* ATS Score + Keywords */}
          <div className="card p-6">
            <div className="flex items-start gap-8 flex-wrap">
              {/* Score circle */}
              <div className="flex flex-col items-center gap-2">
                <ATSCircle before={result.ats_score} after={result.ats_score_after} />
              </div>

              {/* Keywords */}
              <div className="flex-1 min-w-0">
                <div className="mb-3">
                  <p className="text-xs font-medium mb-2" style={{ color: "var(--text-muted)" }}>
                    MISSING KEYWORDS
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {result.missing_keywords.length === 0 ? (
                      <span className="text-sm" style={{ color: "var(--text-muted)" }}>None — great match!</span>
                    ) : (
                      result.missing_keywords.map((kw) => (
                        <span key={kw} className="pill-missing">{kw}</span>
                      ))
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium mb-2" style={{ color: "var(--text-muted)" }}>
                    FOUND KEYWORDS
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {result.found_keywords.map((kw) => (
                      <span key={kw} className="pill-found">{kw}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Output card */}
          <div className="card overflow-hidden">
            {/* Tabs + copy */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: "0.5px solid var(--border)" }}
            >
              <div className="flex gap-1">
                {includeResumeBullets && (
                  <TabBtn
                    active={activeTab === "bullets"}
                    onClick={() => setActiveTab("bullets")}
                    label="Resume bullets"
                  />
                )}
                {includeCoverLetter && (
                  <TabBtn
                    active={activeTab === "cover"}
                    onClick={() => setActiveTab("cover")}
                    label="Cover letter"
                  />
                )}
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md transition-colors"
                style={{
                  background: copied ? "var(--ats-green-bg)" : "var(--bg)",
                  color: copied ? "var(--ats-green)" : "var(--text-secondary)",
                  border: "0.5px solid var(--border-strong)",
                }}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <div className="p-5">
              {activeTab === "bullets" && includeResumeBullets && (
                <div className="space-y-3">
                  {result.optimized_bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }}>•</span>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "cover" && includeCoverLetter && (
                <div className="text-sm leading-relaxed space-y-4" style={{ color: "var(--text-primary)" }}>
                  {result.optimized_cover_letter.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ----- Sub-components -----

function Toggle({
  label,
  enabled,
  onChange,
}: {
  label: string;
  enabled: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-colors"
      style={{
        background: enabled ? "var(--primary-light)" : "var(--bg-card)",
        color: enabled ? "var(--primary)" : "var(--text-muted)",
        border: `0.5px solid ${enabled ? "rgba(83,74,183,0.3)" : "var(--border-strong)"}`,
        fontWeight: enabled ? 500 : 400,
      }}
    >
      {enabled && <CheckIcon size={10} />}
      {label}
    </button>
  );
}

function ATSCircle({ before, after }: { before: number; after: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const beforeColor = getATSColor(before);
  const afterColor = getATSColor(after);

  function Circle({ score, color, label }: { score: number; color: string; label: string }) {
    const offset = circumference - (score / 100) * circumference;
    return (
      <div className="flex flex-col items-center gap-1">
        <div style={{ position: "relative", width: 100, height: 100 }}>
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--border)" strokeWidth="8" />
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
              style={{ transition: "stroke-dashoffset 0.8s ease" }}
            />
          </svg>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span className="text-xl font-medium" style={{ color, lineHeight: 1 }}>
              {score}
            </span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>/100</span>
          </div>
        </div>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Circle score={before} color={beforeColor} label="Before" />
      <div style={{ color: "var(--text-muted)" }}>→</div>
      <Circle score={after} color={afterColor} label="After" />
    </div>
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

function SparkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
    </svg>
  );
}

function CheckIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
