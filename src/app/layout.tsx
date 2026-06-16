import type { Metadata } from "next";
import "./globals.css";
import { BRAND } from "@/lib/brand";

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
      <body>{children}</body>
    </html>
  );
}
