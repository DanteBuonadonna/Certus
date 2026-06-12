import { redirect } from "next/navigation";

// The referral program requires real accounts, which are currently
// disabled. The page is retired; revisit when auth returns.
// (ReferralClient.tsx and /api/referral can be deleted from the repo.)
export default function ReferralPage() {
  redirect("/dashboard");
}
