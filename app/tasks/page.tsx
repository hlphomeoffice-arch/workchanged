import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceBadge } from "@/components/evidence-badge";
import { PageHero } from "@/components/page-hero";
import { roles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tasks",
  description:
    "Task-level guidance for using AI safely and usefully in real professional work.",
  alternates: { canonical: "/tasks" },
  openGraph: {
    type: "website",
    title: "The WorkChanged task library",
    description:
      "Task-level guidance for using AI safely and usefully in real professional work.",
    url: "/tasks",
    images: ["/og-work-changed.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The WorkChanged task library",
    description:
      "Task-level guidance for using AI safely and usefully in real professional work.",
    images: ["/og-work-changed.jpg"],
  },
};

export default function TasksPage() {
  const tasks = roles.flatMap((role) =>
    role.tasks.map((task) => ({ ...task, role: role.title, roleSlug: role.slug })),
  );

  return (
    <main id="main">
      <PageHero
        kicker="The Task Library"
        title="Jobs change one task at a time"
        text="Find the piece of work you repeat. See what AI can do now, where it fails and the human review the workflow still needs."
        meta={`${tasks.length} launch tasks · 6 role clusters`}
      />
      <section className="section section--paper">
        <div className="shell">
          <div className="task-directory">
            {tasks.map((task, index) => (
              <article className="task-directory__item" key={`${task.role}-${task.name}`}>
                <span className="task-directory__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="task-directory__role">{task.role}</span>
                  <h2>{task.name}</h2>
                </div>
                <div>
                  <span>Current change</span>
                  <p>{task.change}</p>
                </div>
                <EvidenceBadge evidence={task.evidence} />
                <div>
                  <span>Human review</span>
                  <p>{task.human}</p>
                </div>
                <Link href={`/roles/${task.roleSlug}`}>
                  Open in role map →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
