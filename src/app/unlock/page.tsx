"use client";

import { useEffect } from "react";
import { setPro } from "@/lib/access";

// Owner testing URL — now requires a key so the public can't find free Pro:
// /unlock?k=certus-owner-2026
// (Change the key here whenever you like. Without it, redirects home.)
const OWNER_KEY = "certus-owner-2026";

export default function UnlockPage() {
  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get("k");
    if (key !== OWNER_KEY) {
      window.location.href = "/";
      return;
    }
    setPro(true);
    const t = setTimeout(() => {
      window.location.href = "/dashboard";
    }, 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "var(--bg)" }}>
      <div className="card p-8 text-center">
        <div className="text-4xl mb-3">🔓</div>
        <h1 className="text-lg font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          Full access unlocked
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Pro mode is on for this browser. Taking you to the dashboard…
        </p>
      </div>
    </div>
  );
}
