import { Suspense } from "react";
import PracticeClient from "./PracticeClient";

export default function PracticePage() {
  return (
    <Suspense fallback={<div className="p-10" style={{ color: "var(--text-muted)" }}>Loading…</div>}>
      <PracticeClient />
    </Suspense>
  );
}
