import type { Evidence } from "@/lib/content";

export function EvidenceBadge({ evidence }: { evidence: Evidence }) {
  return (
    <span
      className={`evidence evidence--${evidence.toLowerCase()}`}
      title={`Evidence level: ${evidence}`}
    >
      <span className="evidence__dot" aria-hidden="true" />
      {evidence}
    </span>
  );
}
