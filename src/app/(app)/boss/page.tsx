import { Suspense } from "react";
import BossClient from "./BossClient";

export default function BossPage() {
  return (
    <Suspense fallback={<div className="p-10" style={{ color: "var(--text-muted)" }}>Loading…</div>}>
      <BossClient />
    </Suspense>
  );
}
