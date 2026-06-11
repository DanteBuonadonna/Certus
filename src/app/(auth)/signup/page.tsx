"use client";

import { useState, useEffect, Suspense } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { BRAND } from "@/lib/brand";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  // Store referral code from URL into cookie
  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref) {
      document.cookie = `referral_code=${ref}; path=/; max-age=${60 * 60 * 24 * 30}`;
    }
  }, [searchParams]);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  }

  async function handleGoogle() {
    // Store ref code before redirect
    const ref = searchParams.get("ref");
    if (ref) {
      document.cookie = `referral_code=${ref}; path=/; max-age=${60 * 60 * 24 * 30}`;
    }
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "var(--bg)" }}>
        <div className="w-full max-w-sm text-center">
          <div className="card p-8">
            <div className="text-4xl mb-4">📧</div>
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
          {/* Google OAuth */}
          <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-colors mb-4"
            style={{
              border: "0.5px solid var(--border-strong)",
              color: "var(--text-primary)",
              background: "var(--bg-card)",
            }}
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          </div>

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
              By signing up, you agree to our Terms & Privacy Policy
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

function LogoMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#534AB7" />
      <path d="M5 17l4.5-8 3 5 2-3.5L19 17H5z" fill="white" />
      <circle cx="16.5" cy="7.5" r="1.6" fill="rgba(255,255,255,0.85)" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}
