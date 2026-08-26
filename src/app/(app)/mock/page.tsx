import { Suspense } from "react";
import MockClient from "./MockClient";

export const metadata = {
  title: "Free Mock Exams — CFA I–III, SIE, Series 7 & 66 · Certus",
  description:
    "Faithful replicas of the real exams: CFA Level I MCQs, Level II vignette item sets, Level III essays, plus full timed SIE, Series 7 and Series 66 mocks — free, with an honest data-based estimate of your odds of passing.",
};

export default function MockPage() {
  return (
    <Suspense fallback={<div className="p-10" style={{ color: "var(--text-muted)" }}>Loading…</div>}>
      <MockClient />
    </Suspense>
  );
}
