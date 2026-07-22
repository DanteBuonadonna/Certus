"use client";

// ============================================================
// Inline signup, as a modal.
//
// Used at the moment someone clicks "Fix Ethics" off their check result. A
// MODAL rather than a redirect to /signup on purpose: their score stays visible
// behind it, so the reason they're being asked is still on screen. Bouncing
// them to a bare form loses the context that motivated the click.
//
// Trade-off, stated honestly: this puts a form between intent and payoff, and
// frictionless guest access is what produces the 36% activation rate. Some
// people who'd have done the lesson will bail here. That's the deal — we're
// buying email addresses with some fraction of first lessons.
// ============================================================

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { LogoMark } from "@/components/Logo";
import posthog from "posthog-js";

export default function SignupModal({
  open,
  onClose,
  onSuccess,
  title = "Save your progress",
  reason = "Make a free account and we'll keep your score, your plan, and your streak.",
  trigger,
}: {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  title?: string;
  reason?: string;
  trigger?: string;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const supabase = createClient();

  if (!open) return null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    if (data.session) {
      posthog.identify(data.session.user.id, { email });
      posthog.capture("user_signed_up", { email, trigger });
      void fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }).catch(() => {});
      // Instant welcome — same as the /signup page, so the modal path isn't a
      // black hole either. Fire-and-forget.
      void fetch("/api/welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, userId: data.session.user.id }),
      }).catch(() => {});
      onSuccess();
      return;
    }
    // Supabase quirk: an existing confirmed email comes back with no identities
    // rather than an error. Tell them the truth instead of hanging.
    if (data.user && data.user.identities && data.user.identities.length === 0) {
      setError("An account with this email already exists — try signing in.");
      setLoading(false);
      return;
    }
    // Email confirmation is on: they can't continue in this session.
    setError("Check your email to confirm your account, then come back.");
    setLoading(false);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-5"
      style={{ background: "rgba(15,15,25,0.55)", backdropFilter: "blur(3px)" }}
      onClick={onClose}
    >
      <div
        className="card p-6 w-full rise-in"
        style={{ maxWidth: 400 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 mb-4">
          <LogoMark size={20} />
          <span className="font-display text-sm" style={{ color: "var(--text-primary)" }}>certus</span>
        </div>

        <h2 className="font-display text-xl mb-1.5" style={{ color: "var(--text-primary)" }}>{title}</h2>
        <p className="text-sm mb-5" style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>{reason}</p>

        <form onSubmit={submit} className="flex flex-col gap-3">
          <input
            type="email"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="px-3 py-2.5 rounded-lg text-sm"
            style={{ border: "0.5px solid var(--border)", background: "var(--bg)", color: "var(--text-primary)" }}
          />
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (6+ characters)"
            className="px-3 py-2.5 rounded-lg text-sm"
            style={{ border: "0.5px solid var(--border)", background: "var(--bg)", color: "var(--text-primary)" }}
          />
          {error && (
            <div className="text-xs" style={{ color: "var(--ats-red)" }}>{error}</div>
          )}
          <button type="submit" disabled={loading} className="btn-duo w-full" style={{ padding: "0.8rem" }}>
            {loading ? "Creating…" : "Create my free account →"}
          </button>
        </form>

        {/* A real way out. Not a decoration — see the comment in the check page. */}
        <button
          onClick={onClose}
          className="w-full text-xs mt-3 py-2"
          style={{ color: "var(--text-muted)" }}
        >
          Not now
        </button>

        <p className="text-[11px] text-center mt-1" style={{ color: "var(--text-muted)" }}>
          Free forever. No card. We&apos;ll never sell your email.
        </p>
      </div>
    </div>
  );
}
