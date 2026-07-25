import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { RoleCard } from "@/components/role-card";
import { roles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Profession trackers",
  description:
    "Living briefings on how tasks, tools, skills and hiring are changing across professional roles.",
  alternates: {
    canonical: "/roles",
  },
  openGraph: {
    type: "website",
    title: "WorkChanged profession trackers",
    description:
      "Living briefings on how tasks, tools, skills and hiring are changing across professional roles.",
    url: "/roles",
    images: ["/og-work-changed.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkChanged profession trackers",
    description:
      "Living briefings on how tasks, tools, skills and hiring are changing across professional roles.",
    images: ["/og-work-changed.jpg"],
  },
};

export default function RolesPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Profession Trackers"
        title="Follow the changes that reach your role"
        text="Each profession hub maps changing tasks, current tools, human judgement, risks and a practical next move."
        meta="6 profession clusters · Reviewed 25 July 2026"
      />
      <section className="section section--cloud">
        <div className="shell">
          <div className="directory-intro">
            <div>
              <p className="kicker">Choose a role</p>
              <h2>One title contains many different tasks</h2>
            </div>
            <p>
              These hubs are starting points, not replacement scores. Open the
              closest role, then use its task map to decide what is genuinely
              relevant.
            </p>
          </div>
          <div className="role-grid">
            {roles.map((role, index) => (
              <RoleCard role={role} index={index} key={role.slug} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
