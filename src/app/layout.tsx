import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { BRAND } from "@/lib/brand";
import { Analytics } from "@vercel/analytics/next";

// PromoteKit affiliate tracking ID (public — it's exposed in the page anyway).
const PROMOTEKIT_ID = "e6d2ffa2-d50b-4906-a83c-30192b9bcd85";

export const metadata: Metadata = {
  title: `${BRAND.name} — Prep for finance's hardest exams`,
  description:
    `${BRAND.name} turns the CFA, CPA, Series exams and more into a career you level up — deep readings, exam-realistic practice, and an adaptive daily plan. Read, drill, and rise from Intern to Partner.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <Script
          src="https://cdn.promotekit.com/pk.js"
          data-promotekit={PROMOTEKIT_ID}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
