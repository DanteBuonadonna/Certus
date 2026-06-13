"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { PLANS, PLAN_FEATURES, Plan } from "@/lib/plans";
import { BRAND } from "@/lib/brand";
import { addCredits } from "@/lib/credits";
import { useAccess } from "@/lib/useAccess";

export default function BillingPage() {
  return (
    <Suspense fallback={null}>
      <BillingInner />
    </Suspense>
  );
}

function BillingInner() {
  const [loading, setLoading] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { pro } = useAccess();

  async function handleManage() {
    setLoading("manage");
    try {
      const res = await fetch("/api/stripe/portal", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setMessage({ type: "error", text: data.error || "Could not open the billing portal." });
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(null);
    }
  }

  useEffect(() => {
    const credits = Number(searchParams.get("credits_added") ?? 0);
    if (credits > 0) {
      // Fulfill a tutor credit-pack purchase (browser-local credit balance).
      const balance = addCredits(credits);
      setMessage({
        type: "success",
        text: `${credits} Associate credits added — your balance is ${balance}. Ask away.`,
      });
    } else if (searchParams.get("success") === "true") {
      const sessionId = searchParams.get("session_id");
      setMessage({ type: "success", text: "Confirming your subscription…" });
      // Verify the payment server-side and flip the account to Pro in the
      // database (the browser can't grant itself Pro). Then refresh so the
      // server re-reads is_pro and the whole app unlocks.
      (async () => {
        try {
          const res = await fetch(`/api/stripe/confirm?session_id=${encodeURIComponent(sessionId ?? "")}`);
          const data = await res.json();
          if (data.pro) {
            setMessage({ type: "success", text: "You're subscribed! Full access is unlocked — every chapter, every exam, every Final." });
            router.refresh();
          } else {
            setMessage({ type: "success", text: "Payment received. Your access will activate momentarily — refresh if it doesn't appear." });
          }
        } catch {
          setMessage({ type: "success", text: "Payment received. Your access will activate momentarily — refresh if it doesn't appear." });
        }
      })();
    } else if (searchParams.get("canceled") === "true") {
      setMessage({ type: "error", text: "Checkout canceled. No charges were made." });
    }
  }, [searchParams, router]);

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

      {pro ? (
        <div className="card p-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ border: "1px solid var(--gold-border)", background: "var(--gold-bg)" }}>
          <div>
            <div className="text-sm font-semibold mb-0.5" style={{ color: "var(--gold)" }}>Pro — active</div>
            <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Full access to every exam, all reading, and unlimited Finals. Manage your plan or cancel anytime.
            </div>
          </div>
          <button className="btn-secondary whitespace-nowrap" onClick={handleManage} disabled={loading === "manage"}>
            {loading === "manage" ? "Opening…" : "Manage subscription"}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {PLANS.map((p) => (
            <PlanCard key={p.id} plan={p} onSubscribe={handleSubscribe} loading={loading === p.id} />
          ))}
        </div>
      )}

      <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
        Payments via Stripe. Cancel anytime. By subscribing you agree to our{" "}
        <Link href="/terms" style={{ color: "var(--primary)" }}>Terms</Link>,{" "}
        <Link href="/privacy" style={{ color: "var(--primary)" }}>Privacy Policy</Link>, and{" "}
        <Link href="/refund" style={{ color: "var(--primary)" }}>Refund Policy</Link>.
        <br />Questions? <a href={`mailto:${BRAND.supportEmail}`} style={{ color: "var(--primary)" }}>{BRAND.supportEmail}</a>
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
