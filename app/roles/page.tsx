import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { RoleCard } from "@/components/role-card";
import { roles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Roles",
  description:
    "Living briefings on how AI is changing tasks, tools and skills across professional roles.",
};

export default function RolesPage() {
  return (
    <main id="main">
      <PageHero
        kicker="The Role Library"
        title="Start with the work you actually do"
        text="Each role hub maps changing tasks, current tools, human judgment, risks and a practical 30-day move."
        meta="6 launch role clusters · Updated continuously"
      />
      <section className="section section--cloud">
        <div className="shell">
          <div className="directory-intro">
            <div>
              <p className="kicker">Choose a role</p>
              <h2>One title contains many different tasks.</h2>
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
