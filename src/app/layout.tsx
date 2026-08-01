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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://certus.website";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name} — Gamified CFA Prep with a Free Mock Exam`,
    template: `%s · ${BRAND.name}`,
  },
  description:
    `The Duolingo-style way to pass the CFA. Deep readings, exam-real practice, and an adaptive daily plan — from $9.58/mo billed yearly, a fraction of $500+ prep courses. Take a free full mock, no signup.`,
  keywords: [
    "cheap CFA prep", "free CFA mock exam", "CFA Level 1 practice questions",
    "gamified CFA prep", "Duolingo for CFA", "affordable CFA study material",
    "CFA prep alternative to Schweser", "CFA Level 1 2 3 prep",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: BRAND.name,
    title: `${BRAND.name} — Gamified CFA Prep with a Free Mock Exam`,
    description:
      "The Duolingo-style way to pass the CFA. Free full mock, no signup — a fraction of $500+ prep courses.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${BRAND.name} — gamified finance-exam prep` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — Gamified CFA Prep with a Free Mock Exam`,
    description: "The Duolingo-style way to pass the CFA. Free full mock, no signup.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

// Organization + WebSite schema. Gives Google an entity to attach the brand to
// (knowledge panel, sitelinks search box) and gives AI answer engines a clean,
// structured description of what Certus is and what it costs.
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND.name,
      url: SITE_URL,
      logo: `${SITE_URL}/og.png`,
      description:
        "Gamified prep for finance's hardest exams — CFA, CPA, and the Series exams — from $24.99, a low-cost alternative to $500+ prep courses.",
      sameAs: [] as string[],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND.name,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
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
