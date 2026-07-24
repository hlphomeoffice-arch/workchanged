import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { EvidenceBadge } from "@/components/evidence-badge";
import { NewsletterForm } from "@/components/newsletter-form";
import { StoryCard } from "@/components/story-card";
import { getRole, getTool, roles, stories } from "@/lib/content";

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) return {};
  return {
    title: `How AI is changing ${role.title}`,
    description: role.short,
  };
}

export default async function RolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();
  const relatedTools = role.toolSlugs
    .map((toolSlug) => getTool(toolSlug))
    .filter(Boolean);

  const roleJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `How AI is changing ${role.title}`,
    description: role.short,
    url: `https://workchanged.com/roles/${role.slug}`,
    dateModified: "2026-07-24",
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roleJsonLd) }}
      />
      <section className="role-hero">
        <div className="shell">
          <nav className="breadcrumbs breadcrumbs--light" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/roles">Roles</Link>
            <span>/</span>
            <span>{role.title}</span>
          </nav>
          <div className="role-hero__grid">
            <div>
              <p className="kicker kicker--lime">Living role briefing</p>
              <h1>How AI is changing {role.title.toLowerCase()}</h1>
              <p>{role.short}</p>
              <div className="role-hero__meta">
                <span>Reviewed {role.reviewed}</span>
                <span>{role.taskCount} mapped tasks</span>
                <span>{role.workflows} workflows</span>
              </div>
            </div>
            <div className="role-route" aria-hidden="true">
              <span>Current work</span>
              <i />
              <b>Changed work</b>
              <em>Next move</em>
            </div>
          </div>
        </div>
      </section>

      <section className="role-signal-band">
        <div className="shell">
          <span className="kicker">Current signal</span>
          <p>{role.signal}</p>
          <Link href="/today">See the latest changes →</Link>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell role-page-grid">
          <aside className="role-page-nav">
            <div className="sticky-card">
              <span className="kicker">On this page</span>
              <a href="#task-map">Task map</a>
              <a href="#tools">Tools to watch</a>
              <a href="#skill">Skill move</a>
              <a href="#plan">30-day plan</a>
              <a href="#latest">Latest changes</a>
            </div>
          </aside>
          <div className="role-page-main">
            <div className="role-summary-card">
              <span className="kicker">The short version</span>
              <h2>The role is not moving as one block.</h2>
              <p>
                Repetitive preparation and synthesis are accelerating. Judgment,
                exception handling and accountability remain with the person
                doing the work. Use the task map to decide where to test and
                where to add a hard review gate.
              </p>
            </div>

            <section id="task-map" className="role-content-section">
              <span className="kicker">Task map</span>
              <h2>What changes — and what stays human</h2>
              <div className="task-map">
                {role.tasks.map((task, index) => (
                  <article className="task-map__row" key={task.name}>
                    <span className="task-map__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="task-map__title">
                      <h3>{task.name}</h3>
                      <EvidenceBadge evidence={task.evidence} />
                    </div>
                    <div>
                      <span>What changes</span>
                      <p>{task.change}</p>
                    </div>
                    <div>
                      <span>Human role</span>
                      <p>{task.human}</p>
                    </div>
                    <div className="task-map__action">
                      <span>Try next</span>
                      <strong>{task.action}</strong>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="tools" className="role-content-section">
              <span className="kicker">Tools to watch</span>
              <h2>Useful only when the workflow fits</h2>
              <div className="role-tool-grid">
                {relatedTools.map(
                  (tool) =>
                    tool && (
                      <article key={tool.slug}>
                        <div>
                          <span>{tool.category}</span>
                          <EvidenceBadge evidence={tool.evidence} />
                        </div>
                        <h3>{tool.name}</h3>
                        <p>{tool.summary}</p>
                        <strong>Watch: {tool.watch}</strong>
                        <Link href={`/tools/${tool.slug}`}>
                          Open tool page →
                        </Link>
                      </article>
                    ),
                )}
              </div>
            </section>

            <section id="skill" className="role-content-section skill-move-feature">
              <div>
                <span className="kicker">Skill move</span>
                <h2>{role.nextSkill}</h2>
                <p>
                  The goal is not to memorise one tool. It is to build the
                  durable capability that makes changing tools safer and more
                  useful.
                </p>
              </div>
              <Link className="button button--primary" href="/skills">
                Build this skill
              </Link>
            </section>

            <section id="plan" className="role-content-section">
              <span className="kicker">30-day role plan</span>
              <h2>One small experiment, properly measured</h2>
              <ol className="month-plan">
                <li>
                  <span>Week 1</span>
                  <strong>Choose one repeated, low-risk task.</strong>
                </li>
                <li>
                  <span>Week 2</span>
                  <strong>Record a human-only baseline.</strong>
                </li>
                <li>
                  <span>Week 3</span>
                  <strong>Run five AI-assisted cases and log failures.</strong>
                </li>
                <li>
                  <span>Week 4</span>
                  <strong>Keep, change or stop the workflow based on evidence.</strong>
                </li>
              </ol>
            </section>

            <section id="latest" className="role-content-section">
              <span className="kicker">Latest changes</span>
              <h2>What this role should read next</h2>
              <div className="role-latest-grid">
                {stories.slice(0, 2).map((story) => (
                  <StoryCard story={story} compact key={story.slug} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="article-newsletter">
        <div className="shell article-newsletter__grid">
          <div>
            <span className="kicker kicker--lime">Follow {role.title}</span>
            <h2>Get the changes that actually reach this role.</h2>
          </div>
          <NewsletterForm dark compact />
        </div>
      </section>
    </main>
  );
}
