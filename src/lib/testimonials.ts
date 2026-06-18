// ============================================================
// Certus — testimonials
//
// ⚠️ IMPORTANT: REPLACE THESE WITH REAL STUDENT QUOTES.
// The entries below are PLACEHOLDERS so the section renders. Displaying
// fabricated testimonials as if they were real customers is deceptive
// (and an FTC issue), so swap in genuine quotes from your early users /
// Reddit feedback as soon as you have them. Keep the `placeholder: true`
// flag until a quote is real — the UI shows a subtle "sample" treatment
// so nothing fake is presented as a verified customer review.
//
// To go live with a real one: set `placeholder: false`, use the person's
// real (first name + initial is fine) attribution and exam.
// ============================================================

export interface Testimonial {
  quote: string;
  name: string;
  exam: string;
  placeholder?: boolean;
}

// Real quotes from early users (Reddit). Verbatim apart from light
// punctuation. Keep attributions accurate.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The readings have the same if not more than the textbooks I've bought for $500+, so no complaints from me.",
    name: "Rburin91",
    exam: "via Reddit",
  },
  {
    quote:
      "I actually just studied for 2 hours without feeling bored — the game system is a cool idea.",
    name: "EitherJuggernaut3450",
    exam: "via Reddit",
  },
  {
    quote: "Wow, thanks a lot for the information! I really appreciate this.",
    name: "MountainIcy8084",
    exam: "via Reddit",
  },
];

// Only the real (non-placeholder) testimonials — use this in production
// once you have them. Falls back to all entries while everything is a
// placeholder so the section isn't empty during setup.
export function liveTestimonials(): Testimonial[] {
  const real = TESTIMONIALS.filter((t) => !t.placeholder);
  return real.length > 0 ? real : TESTIMONIALS;
}

export function hasRealTestimonials(): boolean {
  return TESTIMONIALS.some((t) => !t.placeholder);
}
