import Link from "next/link";

export function UpgradeCard({
  title = "Pro feature",
  reason = "Upgrade to unlock all exams and every boss battle.",
}: {
  title?: string;
  reason?: string;
}) {
  return (
    <div className="card p-8 text-center max-w-md mx-auto mt-6">
      <div className="text-4xl mb-3">🔒</div>
      <h2 className="text-lg font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
        {title}
      </h2>
      <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
        {reason}
      </p>
      <Link href="/billing" className="btn-primary inline-block">
        See plans →
      </Link>
      <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
        Free includes the full CFA track. Pro unlocks everything else.
      </p>
    </div>
  );
}

// Small lock chip to append to locked exam buttons.
export function LockChip() {
  return <span style={{ marginLeft: 4 }}>🔒</span>;
}
