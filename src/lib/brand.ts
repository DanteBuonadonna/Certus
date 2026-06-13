// ============================================================
// Certus — brand config
// Name is a spin on "certified" (Latin "certus" = sure, certain —
// the root of the word certified). Change it here and it updates
// everywhere in the app.
// Theme: corporate career — earn the title. Progress = moving up the
// career ladder (Intern → Analyst → Associate → VP → Director → MD → Partner).
// ============================================================

export const BRAND = {
  name: "Certus",
  tagline: "Earn the title.",
  subtitle:
    "Serious, original prep for finance's hardest exams — built like a career. Read the material, drill real questions, clear every assignment, and rise from Intern to Partner as you go.",
  // The resume tool is kept but demoted to a small utility.
  legacyToolName: "Resume Optimizer",
  domain: "certus.website",
  // Public support/contact address (used in legal pages). Set up this inbox
  // (or a forward) or swap in your own email.
  supportEmail: "support@certus.website",
  year: new Date().getFullYear(),
} as const;

// Alternative spins on "certified" (swap into BRAND.name if you prefer):
// Certify, Certa, Certii, Certo, Certright, Certitude, Certwise.
