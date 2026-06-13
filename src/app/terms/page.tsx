import LegalShell, { H2 } from "@/components/LegalShell";
import { BRAND } from "@/lib/brand";

export const metadata = { title: `Terms of Service — ${BRAND.name}` };

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="June 2026">
      <p>
        These Terms govern your use of {BRAND.name} (the &quot;Service&quot;), available at {BRAND.domain}. By
        creating an account or using the Service, you agree to these Terms. If you do not agree, do not use
        the Service.
      </p>

      <H2>1. What {BRAND.name} is</H2>
      <p>
        {BRAND.name} is an independent study and exam-preparation platform for finance certification exams.
        It provides original educational content, practice questions, and study tools. It does not administer
        any exam or grant any certification.
      </p>

      <H2>2. Not affiliated with exam providers</H2>
      <p>
        {BRAND.name} is not affiliated with, endorsed by, or sponsored by CFA Institute, FINRA, the AICPA, the
        CFP Board, or any other certifying body. &quot;CFA&quot;, &quot;CPA&quot;, &quot;CFP&quot;, the Series
        exams, and other exam names are trademarks of their respective owners and are used here for
        identification and descriptive purposes only. Passing any exam is never guaranteed.
      </p>

      <H2>3. Accounts</H2>
      <p>
        You are responsible for the accuracy of your account information and for keeping your password secure.
        You must be at least 18 years old, or the age of majority in your jurisdiction, to create an account.
      </p>

      <H2>4. Subscriptions and billing</H2>
      <p>
        Paid plans are billed in advance on a recurring basis (monthly or annually) through our payment
        processor, Stripe. Your subscription renews automatically until you cancel. You can cancel at any time
        from the Billing page; cancellation stops future charges and your access continues until the end of the
        current billing period. Prices may change with notice; changes do not affect the current paid period.
      </p>

      <H2>5. Acceptable use</H2>
      <p>
        You agree not to copy, resell, redistribute, or share the Service&apos;s content or your account, and
        not to misuse, disrupt, or attempt to gain unauthorized access to the Service.
      </p>

      <H2>6. Intellectual property</H2>
      <p>
        The content and software of {BRAND.name} are owned by us and protected by law. Your subscription grants
        you a personal, non-transferable license to use the Service for your own study.
      </p>

      <H2>7. Disclaimers and limitation of liability</H2>
      <p>
        The Service is provided &quot;as is&quot; for educational purposes only and is not professional, legal,
        financial, or career advice. To the maximum extent permitted by law, {BRAND.name} is not liable for any
        indirect or consequential damages, and our total liability is limited to the amount you paid in the
        prior twelve months.
      </p>

      <H2>8. Changes and contact</H2>
      <p>
        We may update these Terms; material changes will be posted here. Questions about these Terms can be
        sent to {BRAND.supportEmail}.
      </p>
    </LegalShell>
  );
}
