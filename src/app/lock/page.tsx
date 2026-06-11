"use client";

import { useEffect } from "react";
import { setPro } from "@/lib/access";

// Secret owner URL: /lock — turns Pro off so you can see the real free experience.
export default function LockPage() {
  useEffect(() => {
    setPro(false);
    const t = setTimeout(() => {
      window.location.href = "/dashboard";
    }, 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: "var(--bg)" }}>
      <div className="card p-8 text-center">
        <div className="text-4xl mb-3">🔒</div>
        <h1 className="text-lg font-medium mb-1" style={{ color: "var(--text-primary)" }}>
          Back to free mode
        </h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Pro mode is off. You&apos;ll now see what a free user sees. Redirecting…
        </p>
      </div>
    </div>
  );
}
