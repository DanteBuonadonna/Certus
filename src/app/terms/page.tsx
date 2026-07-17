import LegalShell, { H2 } from "@/components/LegalShell";
import { BRAND } from "@/lib/brand";
import { TRIAL_DAYS, TRIAL_REMINDER_DAYS_BEFORE } from "@/lib/trial";
import { ANNUAL_TOTAL, MONTHLY_PRICE } from "@/lib/tier";

export const metadata = { title: `Terms of Service — ${BRAND.name}` };

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="July 2026">
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

      <H2>4. Free trial</H2>
      <p>
        New subscribers may start a {TRIAL_DAYS}-day free trial. We collect your payment details when the trial
        begins, but <strong>you are not charged during the trial</strong>.
      </p>
      <p>
        <strong>The trial converts to a paid subscription automatically.</strong> When your {TRIAL_DAYS}-day
        trial ends, the payment method you provided will be charged for the plan you selected — currently{" "}
        <strong>${ANNUAL_TOTAL} per year</strong> for the annual plan or{" "}
        <strong>${MONTHLY_PRICE} per month</strong> for the monthly plan — and will continue to be charged each
        billing period until you cancel.
      </p>
      <p>
        We will send you an email reminder approximately {TRIAL_REMINDER_DAYS_BEFORE} days before your trial
        ends and your first charge occurs.
      </p>
      <p>
        <strong>You can cancel at any time before the trial ends and you will not be charged anything.</strong>{" "}
        Cancel from the Billing page in your account — it takes one click and does not require you to call,
        email, or speak with anyone. If your payment method is missing or invalid when the trial ends, the
        subscription is cancelled rather than charged.
      </p>

      <H2>5. Subscriptions and billing</H2>
      <p>
        Paid plans are billed in advance on a recurring basis (monthly or annually) through our payment
        processor, Stripe. Your subscription renews automatically until you cancel. You can cancel at any time
        from the Billing page; cancellation stops future charges and your access continues until the end of the
        current billing period. Prices may change with notice; changes do not affect the current paid period.
      </p>

      <H2>6. Acceptable use</H2>
      <p>
        You agree not to copy, resell, redistribute, or share the Service&apos;s content or your account, and
        not to misuse, disrupt, or attempt to gain unauthorized access to the Service.
      </p>

      <H2>7. Intellectual property</H2>
      <p>
        The content and software of {BRAND.name} are owned by us and protected by law. Your subscription grants
        you a personal, non-transferable license to use the Service for your own study.
      </p>

      <H2>8. Educational use only — no guarantee of results</H2>
      <p>
        All content is provided strictly for general educational and informational purposes. It is not, and
        must not be relied on as, professional, legal, financial, accounting, investment, tax, or career
        advice. {BRAND.name} does not guarantee that using the Service will result in passing any exam,
        obtaining any certification, employment, or any particular outcome. Exam results depend on many factors
        outside our control, and you are solely responsible for your preparation and decisions. Always confirm
        material against the official curriculum and materials of the relevant certifying body.
      </p>

      <H2>9. Disclaimer of warranties</H2>
      <p>
        THE SERVICE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITH ALL
        FAULTS AND WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. To the fullest
        extent permitted by law, {BRAND.name} disclaims all warranties, including merchantability, fitness for a
        particular purpose, title, non-infringement, and any warranty regarding accuracy, completeness,
        reliability, or availability. You acknowledge that some content is generated or assisted by automated
        systems (including AI) and may contain errors, omissions, or outdated information, and that
        {" "}{BRAND.name} does not warrant that the Service will be uninterrupted, secure, or error-free.
      </p>

      <H2>10. Limitation of liability</H2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, {BRAND.name} AND ITS OWNERS, EMPLOYEES, AND SUPPLIERS WILL NOT
        BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR
        ANY LOSS OF PROFITS, DATA, GOODWILL, EXAM OR CAREER OPPORTUNITIES, OR OTHER INTANGIBLE LOSSES, ARISING
        OUT OF OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY
        OF SUCH DAMAGES, AND REGARDLESS OF THE LEGAL THEORY. IN NO EVENT WILL OUR TOTAL AGGREGATE LIABILITY FOR
        ALL CLAIMS EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID {BRAND.name} IN THE THREE MONTHS BEFORE THE
        EVENT GIVING RISE TO THE CLAIM, OR (B) USD $50. Some jurisdictions do not allow certain limitations, so
        parts of this section may not apply to you; in that case our liability is limited to the smallest amount
        permitted by law.
      </p>

      <H2>11. Assumption of risk and indemnification</H2>
      <p>
        You use the Service at your own risk. You agree to defend, indemnify, and hold harmless {BRAND.name} and
        its owners and personnel from and against any claims, damages, liabilities, losses, and expenses
        (including reasonable legal fees) arising out of your use of the Service, your violation of these
        Terms, or your violation of any law or the rights of a third party.
      </p>

      <H2>12. Governing law and disputes</H2>
      <p>
        These Terms are governed by the laws of the United States and the State of New Jersey, without regard
        to conflict-of-laws rules. You agree that any dispute will be resolved in the state or federal courts
        located in that state, and you consent to their jurisdiction. Any claim must be brought within one year
        after it arises.
      </p>

      <H2>13. Severability</H2>
      <p>
        If any provision of these Terms is held unenforceable, the remaining provisions stay in full effect,
        and the unenforceable provision will be enforced to the maximum extent permitted by law.
      </p>

      <H2>14. Changes and contact</H2>
      <p>
        We may update these Terms; material changes will be posted here, and continued use means you accept
        them. Questions about these Terms can be sent to {BRAND.supportEmail}.
      </p>
    </LegalShell>
  );
}
