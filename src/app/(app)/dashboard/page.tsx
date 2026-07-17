import { Suspense } from "react";
import DashboardClient from "./DashboardClient";

// DashboardClient reads useSearchParams (for ?plan=1, the deep-link from
// /exams into the plan editor). Next requires that be wrapped in a Suspense
// boundary — without one the production build fails at prerender with
// "useSearchParams() should be wrapped in a suspense boundary".
export default function DashboardPage() {
  return (
    <Suspense fallback={null}>
      <DashboardClient />
    </Suspense>
  );
}
