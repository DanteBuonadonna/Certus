import type { Metadata } from "next";
import "./globals.css";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: `${BRAND.name} — Gamified prep for finance's hardest exams`,
  description:
    `${BRAND.name} turns CFA, CPA, Series 7 and more into a game. Set your exam date, get an adaptive daily study plan, and keep your streak alive with XP, levels, and challenges.`,
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
