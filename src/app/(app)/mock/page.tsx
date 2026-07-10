import { Suspense } from "react";
import MockClient from "./MockClient";

export const metadata = {
  title: "CFA Mock Exams (Levels I, II & III) — Certus",
  description:
    "Faithful replicas of the real CFA exams: Level I MCQs, Level II vignette item sets, Level III essays — timed, free, with an honest data-based estimate of your odds of passing.",
};

export default function MockPage() {
  return (
    <Suspense fallback={<div className="p-10" style={{ color: "var(--text-muted)" }}>Loading…</div>}>
      <MockClient />
    </Suspense>
  );
}
