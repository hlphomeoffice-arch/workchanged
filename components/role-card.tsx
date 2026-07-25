import Link from "next/link";
import type { Role } from "@/lib/content";

export function RoleCard({ role, index }: { role: Role; index: number }) {
  return (
    <article className="role-card">
      <div className="role-card__top">
        <span className="role-number">{String(index + 1).padStart(2, "0")}</span>
        <span>{role.group}</span>
      </div>
      <h3>
        <Link href={`/roles/${role.slug}`}>{role.title}</Link>
      </h3>
      <p>{role.short}</p>
      <div className="role-card__signal">
        <span>Current signal</span>
        <p>{role.signal}</p>
      </div>
      <div className="role-card__meta">
        <span>{role.tasks.length} mapped tasks</span>
        <span>Updated {role.reviewed}</span>
      </div>
      <Link className="card-link" href={`/roles/${role.slug}`}>
        Open profession tracker <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
