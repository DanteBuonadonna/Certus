"use client";

import { useState } from "react";

interface ReferralItem {
  id: string;
  referred_id: string;
  credits_awarded: boolean;
  created_at: string;
  referred?: { email: string; created_at: string };
}

interface Props {
  referralCode: string;
  referrals: ReferralItem[];
  totalReferred: number;
  creditsEarned: number;
  pendingCount: number;
}

export default function ReferralClient({
  referralCode,
  referrals,
  totalReferred,
  creditsEarned,
  pendingCount,
}: Props) {
  const appUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_APP_URL || "https://rezbuild.com";

  const referralUrl = `${appUrl}/ref/${referralCode}`;
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          Refer &amp; earn
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Share your link. Get 3 credits for every friend who signs up.
        </p>
      </div>

      {/* Referral link hero */}
      <div
        className="card p-6 mb-6"
        style={{ border: "1.5px solid rgba(83,74,183,0.25)", background: "var(--primary-light)" }}
      >
        <p className="text-xs font-medium mb-3" style={{ color: "var(--primary)" }}>
          YOUR REFERRAL LINK
        </p>
        <div className="flex items-center gap-2">
          <div
            className="flex-1 px-3 py-2 rounded-lg text-sm font-mono truncate"
            style={{
              background: "var(--bg-card)",
              border: "0.5px solid var(--border-strong)",
              color: "var(--text-primary)",
            }}
          >
            {referralUrl}
          </div>
          <button
            onClick={handleCopy}
            className="btn-primary flex items-center gap-1.5 whitespace-nowrap"
            style={{ padding: "0.5rem 1rem" }}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Friends referred" value={totalReferred} />
        <StatCard label="Credits earned" value={creditsEarned} />
        <StatCard label="Pending signups" value={pendingCount} />
      </div>

      {/* How it works */}
      <div className="card p-5 mb-6">
        <p className="text-xs font-medium mb-4" style={{ color: "var(--text-muted)" }}>
          HOW IT WORKS
        </p>
        <div className="flex items-start gap-4">
          {[
            { step: "1", title: "Share your link", desc: "Send your unique link to friends job hunting." },
            { step: "2", title: "They sign up", desc: "They create a free account through your link." },
            { step: "3", title: "You both get credits", desc: "You get +3 credits, they get +1 bonus credit." },
          ].map((s) => (
            <div key={s.step} className="flex-1">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium mb-2"
                style={{ background: "var(--primary)", color: "#fff" }}
              >
                {s.step}
              </div>
              <p className="text-sm font-medium mb-0.5" style={{ color: "var(--text-primary)" }}>
                {s.title}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Activity table */}
      <div>
        <p className="text-xs font-medium mb-3" style={{ color: "var(--text-muted)" }}>
          REFERRAL ACTIVITY
        </p>
        {referrals.length === 0 ? (
          <div className="card p-8 text-center">
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              No referrals yet — share your link to get started!
            </p>
          </div>
        ) : (
          <div className="card overflow-hidden">
            {referrals.map((ref, idx) => (
              <div
                key={ref.id}
                className="flex items-center justify-between px-5 py-3.5"
                style={{
                  borderBottom: idx < referrals.length - 1 ? "0.5px solid var(--border)" : "none",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium"
                    style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                  >
                    {(ref.referred?.email ?? "?").charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                      {ref.referred?.email ?? "—"}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {formatDate(ref.created_at)}
                    </p>
                  </div>
                </div>
                <StatusBadge awarded={ref.credits_awarded} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="card p-5">
      <p className="text-2xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
        {value}
      </p>
      <p className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
    </div>
  );
}

function StatusBadge({ awarded }: { awarded: boolean }) {
  return (
    <span
      className="text-xs font-medium px-2.5 py-1 rounded-full"
      style={{
        background: awarded ? "var(--ats-green-bg)" : "var(--ats-amber-bg)",
        color: awarded ? "var(--ats-green)" : "var(--ats-amber)",
      }}
    >
      {awarded ? "Earned" : "Pending"}
    </span>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
