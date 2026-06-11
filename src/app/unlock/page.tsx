"use client";

import { useEffect } from "react";
import { setPro } from "@/lib/access";

// Secret owner URL: /unlock — grants full Pro access for free testing.
export default function UnlockPage() {
  useEffect(() => {
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
