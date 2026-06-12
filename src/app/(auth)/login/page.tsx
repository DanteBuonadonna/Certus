"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BRAND } from "@/lib/brand";
import { LogoMark } from "@/components/Logo";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClient();

  // Surface failures from the email-confirmation callback (?error=auth_failed)
  // without requiring a Suspense boundary for useSearchParams.
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("error=auth_failed")) {
      setError(
        "That confirmation link didn't work — it may have expired or been opened in a different browser. Try signing in; if that fails, sign up again to get a fresh link."
      );
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
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
            Sign in to your account
          </p>
        </div>

        <div className="card p-6">
          <form onSubmit={handleLogin} className="space-y-3">
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
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <p className="text-xs px-3 py-2 rounded-lg" style={{ background: "var(--ats-red-bg)", color: "var(--ats-red)" }}>
                {error}
              </p>
            )}

            <button type="submit" className="btn-primary w-full" disabled={loading}>
              {loading ? <span className="flex items-center justify-center gap-2"><span className="spinner" /> Signing in…</span> : "Sign in"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm mt-4" style={{ color: "var(--text-muted)" }}>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium" style={{ color: "var(--primary)" }}>
            Sign up free
          </Link>
        </p>
      </div>
    </div>
  );
}

/* Logo lives in src/components/Logo.tsx — the Certus certification seal. */
