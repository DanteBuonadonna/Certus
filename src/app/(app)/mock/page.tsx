import { Suspense } from "react";
import MockClient from "./MockClient";

export const metadata = {
  title: "CFA Level I Mock Exam — Certus",
  description:
    "A faithful replica of the real CFA Level I exam: 180 questions, two timed sessions, and an honest, data-based estimate of your odds of passing.",
};

export default function MockPage() {
  return (
    <Suspense fallback={<div className="p-10" style={{ color: "var(--text-muted)" }}>Loading…</div>}>
      <MockClient />
    </Suspense>
  );
}
