import LegalShell, { H2 } from "@/components/LegalShell";
import { BRAND } from "@/lib/brand";

export const metadata = { title: `Refund Policy — ${BRAND.name}` };

export default function RefundPage() {
  return (
    <LegalShell title="Refund &amp; Cancellation Policy" updated="June 2026">
      <p>
        We want {BRAND.name} to be worth it. This page explains how cancellations and refunds work.
      </p>

      <H2>Cancel anytime</H2>
      <p>
        You can cancel your subscription at any time from the Billing page (&quot;Manage subscription&quot;).
        When you cancel, you keep access until the end of the period you&apos;ve already paid for, and you
        won&apos;t be charged again.
      </p>

      <H2>Refunds</H2>
      <p>
        If you&apos;re not satisfied, email {BRAND.supportEmail} within 7 days of your initial subscription
        charge and we&apos;ll refund that payment. Renewal charges are generally non-refundable once the new
        period begins, but reach out — if something went wrong, we&apos;ll make it right.
      </p>

      <H2>Tutor credit packs</H2>
      <p>
        One-time purchases of Associate tutor credits are non-refundable once the credits have been added to
        your account, except where required by law.
      </p>

      <H2>How to reach us</H2>
      <p>
        For any billing question or refund request, email {BRAND.supportEmail} from the address on your
        account and we&apos;ll respond promptly.
      </p>
    </LegalShell>
  );
}
