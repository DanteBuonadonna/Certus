"use client";

import { useState, Suspense } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { BRAND } from "@/lib/brand";
import { LogoMark } from "@/components/Logo";
import posthog from "posthog-js";

export default function SignupPage() {
  return (
    <Suspense fallback={null}>
      <SignupForm />
    </Suspense>
  );
}

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const supabase = createClient();
  const router = useRouter();
  const params = useSearchParams();

  // Honour ?next= — this was IGNORED, and it was a live money leak.
  // Every "Create account to go Pro" link sends /signup?next=/billing, and every
  // one of them landed the user on /dashboard instead of checkout. Someone who
  // had decided to pay got dropped somewhere else and had to find their own way
  // back. Only allow relative paths so this can't be turned into an open
  // redirect by a crafted link.
  const rawNext = params.get("next") ?? "";
  const plan = params.get("plan");
  const next =
    rawNext.startsWith("/") && !rawNext.startsWith("//")
      ? rawNext + (plan && rawNext.startsWith("/billing") ? `?plan=${encodeURIComponent(plan)}` : "")
      : "/dashboard";

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (data.session) {
      // Email confirmation is disabled in Supabase — the user is already
      // signed in. Go straight to the dashboard instead of telling them
      // to check an email that will never come.
      posthog.identify(data.session.user.id, { email: email });
      posthog.capture("user_signed_up", { email, next });
      // Add them to the marketing list. Fire-and-forget — never block signup
      // on an email vendor.
      void fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }).catch(() => {});
      router.push(next);
      router.refresh();
    } else if (data.user && data.user.identities && data.user.identities.length === 0) {
      // Supabase quirk: an existing confirmed email returns a user with no
      // identities rather than an error. Tell them the truth.
      setError("An account with this email already exists. Try signing in instead.");
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "var(--bg)" }}>
        <div className="w-full max-w-sm text-center">
          <div className="card p-8">
            <div className="flex justify-center mb-4" style={{ color: "var(--primary)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
                <path d="M3 7l9 6.5L21 7" />
              </svg>
            </div>
            <h2 className="text-lg font-medium mb-2" style={{ color: "var(--text-primary)" }}>
              Check your email
            </h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              We sent a confirmation link to <strong>{email}</strong>. Click it to activate your account and start studying.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "var(--bg)" }}>
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <LogoMark />
            <span className="text-xl font-medium" style={{ color: "var(--text-primary)" }}>
              {BRAND.name}
            </span>
          </div>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Create your free account and start your first day
          </p>
        </div>

        <div className="card p-6">
          <form onSubmit={handleSignup} className="space-y-3">
            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-secondary)" }}>
                Email
              </label>
              <input
                type="email"
                className="input-field"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1" style={{ color: "var(--text-secondary)" }}>
                Password
              </label>
              <input
                type="password"
                className="input-field"
                placeholder="Min. 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>

            {error && (
              <p className="text-xs px-3 py-2 rounded-lg" style={{ background: "var(--ats-red-bg)", color: "var(--ats-red)" }}>
                {error}
              </p>
            )}

            <button type="submit" className="btn-primary w-full" disabled={loading}>
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="spinner" /> Creating account…
                </span>
              ) : (
                "Create free account"
              )}
            </button>

            <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
              By signing up, you agree to our{" "}
              <Link href="/terms" style={{ color: "var(--primary)" }}>Terms</Link> &{" "}
              <Link href="/privacy" style={{ color: "var(--primary)" }}>Privacy Policy</Link>
            </p>
          </form>
        </div>

        <p className="text-center text-sm mt-4" style={{ color: "var(--text-muted)" }}>
          Already have an account?{" "}
          <Link href="/login" className="font-medium" style={{ color: "var(--primary)" }}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

/* Logo lives in src/components/Logo.tsx — the Certus certification seal. */
