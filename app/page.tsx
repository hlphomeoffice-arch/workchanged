import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EditorialVisual } from "@/components/editorial-visual";
import { EvidenceBadge } from "@/components/evidence-badge";
import { NewsletterForm } from "@/components/newsletter-form";
import { RoleCard } from "@/components/role-card";
import { RoleFinder } from "@/components/role-finder";
import { SectionHeading } from "@/components/section-heading";
import { StoryCard } from "@/components/story-card";
import { roles, signalStats, skills, stories, tools } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work Changed — Know what AI means for your job",
  description:
    "Clear, tested guidance on which AI tools, tasks and skills matter for your role — without the hype.",
};

export default function Home() {
  const lead = stories[0];
  const secondary = stories.slice(1, 4);

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Work Changed",
    url: "https://workchanged.com",
    description:
      "Practical, role-specific intelligence about how AI is changing work.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://workchanged.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      <section className="home-hero">
        <Image
          className="home-hero__image"
          src="/brand/editorial-hero.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
        />
        <div className="home-hero__overlay" />
        <div className="shell home-hero__inner">
          <div className="home-hero__copy">
            <p className="kicker kicker--lime">
              Practical intelligence for AI and work
            </p>
            <h1>AI is changing your job. Know what to do next.</h1>
            <p className="home-hero__deck">
              Clear, tested guidance on which tasks, tools and skills matter for
              your role — without the hype.
            </p>
            <div className="hero-actions">
              <Link className="button button--lime" href="#choose-role">
                See what changes in my role
              </Link>
              <Link className="button button--ghost-light" href="/today">
                Read today&apos;s briefing
              </Link>
            </div>
            <div className="hero-trust">
              <span>Every consequential story shows</span>
              <div>
                <span>Evidence</span>
                <span>Time horizon</span>
                <span>Next action</span>
              </div>
            </div>
          </div>

          <div className="change-map-preview">
            <div className="change-map-preview__header">
              <span className="kicker">My Work Change Map</span>
              <span className="preview-chip">Free beta</span>
            </div>
            <h2>Operations manager</h2>
            <p>Three task shifts worth your attention now.</p>
            <div className="task-shift">
              <span className="task-shift__index">01</span>
              <div>
                <strong>Status reporting</strong>
                <span>Drafting accelerates</span>
              </div>
              <EvidenceBadge evidence="Observed" />
            </div>
            <div className="task-shift">
              <span className="task-shift__index">02</span>
              <div>
                <strong>Action registers</strong>
                <span>Verification becomes the work</span>
              </div>
              <EvidenceBadge evidence="Observed" />
            </div>
            <div className="task-shift">
              <span className="task-shift__index">03</span>
              <div>
                <strong>Exception handling</strong>
                <span>Human value increases</span>
              </div>
              <EvidenceBadge evidence="Emerging" />
            </div>
            <div className="map-next">
              <span>Recommended next move</span>
              <strong>Test one meeting-to-actions workflow</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="source-strip" aria-label="Source standards">
        <div className="shell source-strip__inner">
          <span>Built on primary evidence from</span>
          <strong>ILO</strong>
          <strong>OECD</strong>
          <strong>Stanford HAI</strong>
          <strong>Official release notes</strong>
          <Link href="/standards">See our source rules →</Link>
        </div>
      </section>

      <section className="section section--paper today-section">
        <div className="shell">
          <SectionHeading
            kicker="The Daily Shift · 24 July 2026"
            title="What changed — and what deserves your attention"
            text="We separate operational changes from launch noise, then map them to the people and tasks affected."
            href="/today"
            linkLabel="See the full briefing"
          />
          <div className="today-grid">
            <article className="lead-story">
              <Link className="lead-story__visual" href={lead.href}>
                <EditorialVisual
                  variant={lead.visual}
                  label="Google Workspace change"
                />
              </Link>
              <div className="lead-story__body">
                <div className="meta-row">
                  <EvidenceBadge evidence={lead.evidence} />
                  <span>{lead.time}</span>
                  <span>{lead.roles.join(" · ")}</span>
                </div>
                <h2>
                  <Link href={lead.href}>{lead.title}</Link>
                </h2>
                <p>{lead.summary}</p>
                <div className="decision-row">
                  <div>
                    <span>Who is affected</span>
                    <strong>Workspace admins and AI leads</strong>
                  </div>
                  <div>
                    <span>What to do</span>
                    <strong>No migration action. Keep the existing controls.</strong>
                  </div>
                </div>
                <Link className="button button--primary" href={lead.href}>
                  Read the verified change <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
            <div className="brief-stack">
              {secondary.map((story, index) => (
                <article className="brief-item" key={story.slug}>
                  <span className="brief-item__number">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="meta-row">
                      <EvidenceBadge evidence={story.evidence} />
                      <span>{story.type}</span>
                    </div>
                    <h3>
                      <Link href={story.href}>{story.title}</Link>
                    </h3>
                    <p>{story.summary}</p>
                    <Link href={story.href}>
                      What it means <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section choose-role" id="choose-role">
        <div className="shell choose-role__grid">
          <div className="choose-role__copy">
            <p className="kicker">Start with your work</p>
            <h2>Generic AI news ends here.</h2>
            <p>
              Choose your role. We&apos;ll show the changing tasks, useful
              workflows, risks and skills — all in one living briefing.
            </p>
            <ul className="check-list">
              <li>Task-level changes, not job-title theatre</li>
              <li>Evidence and time horizon on every major claim</li>
              <li>A practical move for the next 30 days</li>
            </ul>
          </div>
          <RoleFinder />
        </div>
      </section>

      <section className="section section--cloud roles-section">
        <div className="shell">
          <SectionHeading
            kicker="The Role Library"
            title="Follow the work that is actually changing"
            text="Six launch role clusters. Each hub is updated as tools, evidence and working practice move."
            href="/roles"
            linkLabel="Explore every role"
          />
          <div className="role-grid">
            {roles.map((role, index) => (
              <RoleCard role={role} index={index} key={role.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section change-map-section">
        <div className="shell change-map-section__grid">
          <div className="map-art" aria-hidden="true">
            <div className="map-art__route" />
            <span className="map-art__node map-art__node--1">Task</span>
            <span className="map-art__node map-art__node--2">Tool</span>
            <span className="map-art__node map-art__node--3">Risk</span>
            <span className="map-art__node map-art__node--4">Skill</span>
            <span className="map-art__endpoint">Next</span>
          </div>
          <div>
            <p className="kicker kicker--lime">Flagship utility</p>
            <h2>Build your Work Change Map</h2>
            <p className="section-deck">
              Choose the tasks you actually perform. Get a sourced map of what
              to test, what to protect and what to learn next.
            </p>
            <div className="map-principles">
              <div>
                <strong>Free useful preview</strong>
                <span>Value before an email address.</span>
              </div>
              <div>
                <strong>No fake precision</strong>
                <span>No job-loss probability or “AI-proof” score.</span>
              </div>
              <div>
                <strong>Sources attached</strong>
                <span>Evidence and confidence beside each recommendation.</span>
              </div>
            </div>
            <Link className="button button--lime" href="/roles">
              Start with my role <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--paper tool-lab-section">
        <div className="shell">
          <SectionHeading
            kicker="Tool Lab"
            title="We look past the demo"
            text="Version, workflow, inputs, failures, privacy and correction burden. That is what a professional tool decision needs."
            href="/tools"
            linkLabel="Enter Tool Lab"
          />
          <div className="tool-feature-grid">
            <article className="tool-feature tool-feature--main">
              <div className="tool-feature__art">
                <EditorialVisual
                  variant="steps"
                  label="Meeting assistant testing method"
                />
              </div>
              <div>
                <div className="meta-row">
                  <EvidenceBadge evidence="Method" />
                  <span>Meeting intelligence</span>
                </div>
                <h3>
                  <Link href="/tools/meeting-notes-method">
                    A transcript is not a useful meeting record. This is how
                    Tool Lab tests the difference.
                  </Link>
                </h3>
                <p>
                  We score incorrect owners, missed uncertainty, false
                  commitments, consent and the time needed to repair the
                  output.
                </p>
                <Link className="card-link" href="/tools/meeting-notes-method">
                  See the full test protocol <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
            <div className="tool-list">
              {tools.slice(0, 4).map((tool, index) => (
                <Link
                  className="tool-row"
                  href={`/tools/${tool.slug}`}
                  key={tool.slug}
                >
                  <span className="tool-row__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="tool-row__copy">
                    <small>{tool.category}</small>
                    <strong>{tool.name}</strong>
                    <span>{tool.bestFor}</span>
                  </span>
                  <EvidenceBadge evidence={tool.evidence} />
                  <span className="tool-row__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section signals-section">
        <div className="shell">
          <SectionHeading
            kicker="Work Signals"
            title="The numbers need context"
            text="Adoption is not value. Exposure is not displacement. A forecast is not an observed outcome."
            href="/signals"
            linkLabel="Read the evidence"
            light
          />
          <div className="signal-stat-grid">
            {signalStats.map((stat) => (
              <article className="signal-stat" key={stat.value + stat.label}>
                <strong>{stat.value}</strong>
                <h3>{stat.label}</h3>
                <p>{stat.note}</p>
                <span>{stat.source}</span>
              </article>
            ))}
          </div>
          <div className="signal-article">
            <div>
              <EvidenceBadge evidence="Observed" />
              <span>Workforce evidence</span>
            </div>
            <h3>
              One in four jobs has some GenAI exposure. That is not the same as
              one in four jobs disappearing.
            </h3>
            <p>
              The ILO&apos;s task-level index points to transformation as the
              likelier outcome and shows why clerical work deserves immediate
              attention.
            </p>
            <Link href="/signals/ai-exposure-is-not-job-loss">
              Read the evidence note <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--cloud skills-section">
        <div className="shell">
          <SectionHeading
            kicker="Skill Moves"
            title="Build the capability that survives the tool cycle"
            text="Small, practical learning moves for professionals who do not have time for another vague AI course."
            href="/skills"
            linkLabel="See all skill moves"
          />
          <div className="skill-grid">
            {skills.slice(0, 3).map((skill, index) => (
              <article className="skill-card" key={skill.title}>
                <span className="skill-card__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="kicker">{skill.level}</span>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
                <Link href="/skills">
                  {skill.action} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section standards-teaser">
        <div className="shell standards-teaser__grid">
          <div>
            <p className="kicker">How we know</p>
            <h2>Trust should be inspectable.</h2>
            <p>
              Named authors. Primary sources. Reproducible tool tests. Visible
              uncertainty. A public correction trail.
            </p>
            <Link className="button button--outline" href="/standards">
              Read our editorial standards
            </Link>
          </div>
          <div className="standard-cards">
            <article>
              <span>01</span>
              <strong>Named evidence</strong>
              <p>Source links live beside the claims they support.</p>
            </article>
            <article>
              <span>02</span>
              <strong>Hands-on methods</strong>
              <p>Plan, version, inputs, baseline and failures are recorded.</p>
            </article>
            <article>
              <span>03</span>
              <strong>Uncertainty shown</strong>
              <p>Observed, Tested, Emerging, Forecast or Claim.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section newsletter-band">
        <div className="shell newsletter-band__grid">
          <div>
            <p className="kicker">The Work Shift</p>
            <h2>The five AI-at-work changes worth your attention.</h2>
            <p>
              One useful email each week: role implications, tool evidence and
              the claims that did not survive scrutiny.
            </p>
            <div className="newsletter-proof">
              <span>5 changes</span>
              <span>1 tested workflow</span>
              <span>0 launch spam</span>
            </div>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <section className="section section--paper latest-section">
        <div className="shell">
          <SectionHeading
            kicker="Keep exploring"
            title="Useful next reads"
            href="/today"
            linkLabel="Browse all"
          />
          <div className="story-grid">
            {stories.slice(3).map((story) => (
              <StoryCard story={story} key={story.slug} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
