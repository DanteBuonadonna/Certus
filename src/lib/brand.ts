// ============================================================
// Certus — brand config
// Name is a spin on "certified" (Latin "certus" = sure, certain —
// the root of the word certified). Change it here and it updates
// everywhere in the app.
// Theme: the certain path to certified. Daily progress = the climb.
// ============================================================

export const BRAND = {
  name: "Certus",
  tagline: "The certain path to certified.",
  subtitle:
    "Serious, original prep for finance's hardest exams. Read the material, drill real questions, learn from every miss, and stay on pace with an adaptive plan.",
  // The resume tool is kept but demoted to a small utility.
  legacyToolName: "Resume Optimizer",
  domain: "certus.app",
  year: new Date().getFullYear(),
} as const;

// Alternative spins on "certified" (swap into BRAND.name if you prefer):
// Certify, Certa, Certii, Certo, Certright, Certitude, Certwise.
