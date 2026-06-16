"use client";

import { useEffect, useState } from "react";

// A small, dismissible tip shown only on phones held in portrait, suggesting
// landscape for the dense reading tables and figures. Once dismissed it stays
// gone (localStorage). Desktop never sees it.
const KEY = "certus_rotatehint";

export default function RotateHint() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(KEY) === "1";
    } catch {}
    if (dismissed) return;

    const mql = window.matchMedia("(max-width: 640px) and (orientation: portrait)");
    const check = () => setShow(mql.matches);
    check();
    mql.addEventListener?.("change", check);
    window.addEventListener("resize", check);
    return () => {
      mql.removeEventListener?.("change", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  if (!show) return null;

  function dismiss() {
    try {
      localStorage.setItem(KEY, "1");
    } catch {}
    setShow(false);
  }

  return (
    <div
      className="md:hidden"
      style={{
        position: "fixed",
        left: 12,
        right: 12,
        bottom: 12,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderRadius: 12,
        background: "var(--primary)",
        color: "#fff",
        boxShadow: "var(--shadow-lg)",
        fontSize: "0.8rem",
        fontWeight: 500,
      }}
    >
      <span style={{ fontSize: "1rem" }}>↻</span>
      <span style={{ flex: 1 }}>Rotate your phone to landscape for the best view of charts &amp; tables.</span>
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{ background: "transparent", border: "none", color: "#fff", fontSize: "1.1rem", lineHeight: 1, cursor: "pointer", opacity: 0.85 }}
      >
        ×
      </button>
    </div>
  );
}
