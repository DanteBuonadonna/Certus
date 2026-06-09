"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PLANS, PLAN_FEATURES, Plan } from "@/lib/plans";
import { BRAND } from "@/lib/brand";

export default function BillingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setMessage({ type: "success", text: "You're subscribed! Full access is unlocked." });
    } else if (searchParams.get("canceled") === "true") {
      setMessage({ type: "error", text: "Checkout canceled. No charges were made." });
    }
  }, [searchParams]);

  async function handleSubscribe(plan: string) {
    setLoading(plan);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setMessage({ type: "error", text: data.error || "Something went wrong." });
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-xl font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          {BRAND.name} membership
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          One subscription unlocks every exam, all reading, and the full question bank.
        </p>
      </div>

      {message && (
        <div
          className="mb-6 px-4 py-3 rounded-lg text-sm"
          style={{
            background: message.type === "success" ? "var(--ats-green-bg)" : "var(--ats-red-bg)",
            color: message.type === "success" ? "var(--ats-green)" : "var(--ats-red)",
          }}
        >
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-2 gap-5 mb-6">
        {PLANS.map((p) => (
          <PlanCard key={p.id} plan={p} onSubscribe={handleSubscribe} loading={loading === p.id} />
        ))}
      </div>

      <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
        Payments via Stripe. Cancel anytime.{" "}
        <Link href="/referral" style={{ color: "var(--primary)" }}>
          Earn free time by referring friends →
        </Link>
      </p>
    </div>
  );
}

function PlanCard({ plan, onSubscribe, loading }: { plan: Plan; onSubscribe: (id: string) => void; loading: boolean }) {
  return (
    <div className="card p-6 relative" style={{ border: plan.popular ? "1.5px solid var(--primary)" : "0.5px solid var(--border)" }}>
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full" style={{ background: "var(--primary)", color: "#fff" }}>
          Most popular
        </span>
      )}
      {plan.highlight && !plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full" style={{ background: "var(--ats-green)", color: "#fff" }}>
          {plan.highlight}
        </span>
      )}

      <div className="mb-4">
        <div className="text-sm font-medium mb-1" style={{ color: "var(--text-secondary)" }}>{plan.name}</div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-medium" style={{ color: "var(--text-primary)" }}>{plan.price}</span>
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>{plan.cadence}</span>
        </div>
        <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{plan.sub}</div>
      </div>

      <ul className="space-y-2 mb-5">
        {PLAN_FEATURES.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <span style={{ color: "var(--ats-green)" }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button className={plan.popular ? "btn-primary w-full" : "btn-secondary w-full"} onClick={() => onSubscribe(plan.id)} disabled={loading}>
        {loading ? "Redirecting…" : `Choose ${plan.name}`}
      </button>
    </div>
  );
}
