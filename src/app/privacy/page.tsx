import LegalShell, { H2 } from "@/components/LegalShell";
import { BRAND } from "@/lib/brand";

export const metadata = { title: `Privacy Policy — ${BRAND.name}` };

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="June 2026">
      <p>
        This Policy explains what {BRAND.name} collects, why, and your choices. We aim to collect only what we
        need to run the Service.
      </p>

      <H2>Information we collect</H2>
      <p>
        <strong>Account data:</strong> your email address and authentication details, handled by our auth
        provider (Supabase). <strong>Payment data:</strong> when you subscribe, payments are processed by
        Stripe; we receive a customer identifier and subscription status, but we never see or store your full
        card number. <strong>Usage data:</strong> study progress, streaks, and similar app state, much of which
        is stored locally in your browser. <strong>Tutor prompts:</strong> if you use the AI tutor (&quot;The
        Associate&quot;), your questions are sent to our model provider (Anthropic) to generate answers.
      </p>

      <H2>How we use it</H2>
      <p>
        To provide and secure the Service, process subscriptions, respond to support requests, and improve the
        product. We do not sell your personal information.
      </p>

      <H2>Service providers</H2>
      <p>
        We share data only with providers that help us operate: Supabase (accounts/database), Stripe
        (payments), Anthropic (AI tutor), and Vercel (hosting). Each processes data on our behalf.
      </p>

      <H2>Cookies and local storage</H2>
      <p>
        We use essential cookies for authentication and your browser&apos;s local storage to keep your study
        progress on your device. We do not use advertising trackers.
      </p>

      <H2>Data retention and your rights</H2>
      <p>
        We keep account data while your account is active. You may request access to, correction of, or
        deletion of your personal data by emailing {BRAND.supportEmail}. Deleting your account removes your
        associated personal data, subject to records we must keep for legal or accounting reasons.
      </p>

      <H2>Contact</H2>
      <p>For any privacy question or request, contact {BRAND.supportEmail}.</p>
    </LegalShell>
  );
}
