import posthog from "posthog-js";

// Public PostHog project token (NEXT_PUBLIC — exposed client-side anyway).
// Hardcoded as a fallback so analytics fire even if the Vercel env var is unset.
const POSTHOG_TOKEN = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN || "phc_A5yoewyFErBgBt8y9xrqpoPkKDdrD5Yitdh9MkGaXCmd";

posthog.init(POSTHOG_TOKEN, {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  defaults: "2026-01-30",
  capture_exceptions: true,
  debug: process.env.NODE_ENV === "development",
});
