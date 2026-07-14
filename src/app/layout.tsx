import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { BRAND } from "@/lib/brand";
import { Analytics } from "@vercel/analytics/next";

// PromoteKit affiliate tracking ID (public — it's exposed in the page anyway).
const PROMOTEKIT_ID = "e6d2ffa2-d50b-4906-a83c-30192b9bcd85";

// Google Ads conversion tag. Without this, Google is bidding blind — it can't
// tell you which keyword produced a paying customer, only which produced a
// click. Cost-per-click is a vanity number; cost-per-customer is the only one
// that decides whether the channel lives.
const GOOGLE_ADS_ID = "AW-18273063884";

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

        {/* Google Ads (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
