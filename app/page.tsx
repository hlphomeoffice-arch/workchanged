import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { RoleCard } from "@/components/role-card";
import { RoleFinder } from "@/components/role-finder";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/lib/editorial/articles";
import { pillars } from "@/lib/editorial/pillars";
import { roles, tools } from "@/lib/content";

export const metadata: Metadata = {
  title: "What changed at work and what to do next",
  description:
    "Clear, sourced guidance on AI, job security, skills, career moves, pay, rights and managing work through change.",
  alternates: { canonical: "/" },
};

function serialiseSchema(schema: unknown) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export default function Home() {
  const mostImportant =
    articles.find((article) => article.number === 1) || articles[0];
  const thisWeek = [24, 6, 36, 44]
    .map((number) => articles.find((article) => article.number === number))
    .filter((article) => article !== undefined);
  const evidenceChecks = articles
    .filter((article) => article.format === "Evidence Check")
    .slice(0, 3);
  const practicalGuides = [1, 13, 35]
    .map((number) => articles.find((article) => article.number === number))
    .filter((article) => article !== undefined);
  const roleTrackers = articles
    .filter((article) => article.pillar === "profession-trackers")
    .slice(0, 4);
  const heroImageBase = mostImportant
    ? `/images/articles/${mostImportant.slug}`
    : "/og-work-changed";

  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "WorkChanged",
      url: "https://workchanged.com",
      description:
        "Independent, evidence-led and practical guidance about changes in work.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://workchanged.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "WorkChanged",
      url: "https://workchanged.com",
      logo: "https://workchanged.com/brand/mark.svg",
      slogan: "What changed at work. Who it affects. What to do next.",
    },
  ];

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialiseSchema(homeJsonLd) }}
      />

      <section className="editorial-home-hero">
        <div className="shell editorial-home-hero__grid">
          <div className="editorial-home-hero__copy">
            <p className="kicker">Independent guidance for changed work</p>
            <h1>What changed at work. Who it affects. What to do next.</h1>
            <p className="editorial-home-hero__deck">
              Clear, sourced guidance on AI, job security, skills, career moves,
              pay, rights and managing work through change.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" href="#latest-change">
                See the most important change
              </Link>
              <Link className="button button--ghost-dark" href="#choose-role">
                Follow my profession
              </Link>
            </div>
            <dl className="editorial-home-hero__proof">
              <div>
                <dt>{articles.length}</dt>
                <dd>complete decision pages</dd>
              </div>
              <div>
                <dt>8</dt>
                <dd>editorial pillars</dd>
              </div>
              <div>
                <dt>UK + US</dt>
                <dd>country labels</dd>
              </div>
            </dl>
          </div>
          <picture className="editorial-home-hero__image">
            {mostImportant && (
              <source
                srcSet={`${heroImageBase}-768.webp 768w, ${heroImageBase}.webp 1536w`}
                sizes="(max-width: 900px) calc(100vw - 32px), 46vw"
                type="image/webp"
              />
            )}
            <img
              src={`${heroImageBase}.jpg`}
              srcSet={
                mostImportant
                  ? `${heroImageBase}-768.jpg 768w, ${heroImageBase}.jpg 1536w`
                  : undefined
              }
              sizes="(max-width: 900px) calc(100vw - 32px), 46vw"
              alt={
                mostImportant?.imageAlt ||
                "WorkChanged source notes and evidence cards on an editorial desk"
              }
              width={1536}
              height={1024}
              fetchPriority="high"
            />
          </picture>
        </div>
      </section>

      <section className="source-strip" aria-label="Evidence standards">
        <div className="shell source-strip__inner">
          <span>Evidence before opinion</span>
          <strong>Official guidance</strong>
          <strong>Official statistics</strong>
          <strong>Original research</strong>
          <strong>Visible review dates</strong>
          <Link href="/standards">
            Inspect our standards <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {mostImportant && (
        <section className="section section--paper" id="latest-change">
          <div className="shell">
            <SectionHeading
              kicker="Most important current change"
              title="Start with the decision that affects the most roles"
              text="The answer is near the top. The evidence, uncertainty and next actions stay visible."
            />
            <ArticleCard article={mostImportant} featured />
          </div>
        </section>
      )}

      <section className="section weekly-change-section">
        <div className="shell">
          <SectionHeading
            kicker="What Changed This Week"
            title="Changes worth understanding, without the news churn"
            text="Trackers and timely interpretation are selected for practical impact, not novelty."
            href="/today"
            linkLabel="Open the weekly briefing"
            light
          />
          <div className="weekly-change-grid">
            {thisWeek.map((article, index) => (
              <article key={article.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{article.format}</p>
                  <h3>
                    <Link
                      href={`/guides/${article.slug}`}
                      data-track="contextual_internal_link"
                      data-track-meta={article.slug}
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <strong>
                    Next review: {article.nextReview}
                    <span aria-hidden="true"> →</span>
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="shell">
          <SectionHeading
            kicker="Eight ways into the library"
            title="Start with the decision in front of you"
            text="Each pillar combines durable guidance, changing evidence and a clear route to the next useful page."
          />
          <div className="pillar-index-grid">
            {pillars.map((pillar, index) => {
              const count = articles.filter(
                (article) => article.pillar === pillar.slug,
              ).length;
              return (
                <Link
                  className={`pillar-index-card pillar-index-card--${pillar.color}`}
                  href={`/topics/${pillar.slug}`}
                  key={pillar.slug}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{pillar.name}</h3>
                  <p>{pillar.promise}</p>
                  <strong>
                    {count} complete guides
                    <span aria-hidden="true"> →</span>
                  </strong>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section evidence-home-section">
        <div className="shell">
          <SectionHeading
            kicker="Evidence Checks"
            title="Separate a useful signal from a confident claim"
            text="These pages show where the evidence is strong, mixed or still emerging."
            href="/signals"
            linkLabel="See how we check evidence"
          />
          <div className="article-grid">
            {evidenceChecks.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section profession-home-section" id="choose-role">
        <div className="shell profession-home-section__intro">
          <div>
            <p className="kicker kicker--light">Profession Trackers</p>
            <h2>Follow changes that reach your actual work</h2>
            <p>
              Start with a profession, then move from a broad signal to the
              tasks, skills and decisions it changes.
            </p>
          </div>
          <RoleFinder />
        </div>
        <div className="shell">
          <div className="role-grid role-grid--home">
            {roles.map((role, index) => (
              <RoleCard role={role} index={index} key={role.slug} />
            ))}
          </div>
          {roleTrackers.length > 0 && (
            <div className="profession-home-section__tracker">
              <div>
                <p className="kicker kicker--light">Monthly profession reads</p>
                <h3>What changed inside large occupational groups</h3>
              </div>
              <div>
                {roleTrackers.map((article) => (
                  <Link
                    href={`/guides/${article.slug}`}
                    key={article.slug}
                    data-track="contextual_internal_link"
                    data-track-meta={article.slug}
                  >
                    {article.shortTitle}
                    <span aria-hidden="true"> →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell">
          <SectionHeading
            kicker="Practical tools and checklists"
            title="Turn reading into one defensible next move"
            text="Use a decision framework, then inspect the tool or workflow against the work you actually do."
            href="/tools"
            linkLabel="Explore the tool library"
          />
          <div className="practical-home-grid">
            <div className="article-grid">
              {practicalGuides.map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ))}
            </div>
            <aside className="tool-shortlist">
              <p className="kicker">Tools under review</p>
              <h3>Capability is not the same as a good workflow</h3>
              {tools.slice(0, 4).map((tool) => (
                <Link href={`/tools/${tool.slug}`} key={tool.slug}>
                  <span>{tool.category}</span>
                  <strong>{tool.name}</strong>
                  <p>{tool.watch}</p>
                </Link>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section className="section country-home-section">
        <div className="shell">
          <SectionHeading
            kicker="Country-specific guidance"
            title="Use the rules and labour market that apply to you"
            text="Legal rights, pay, qualifications and policy are labelled. One country's rules are never presented as universal."
            light
          />
          <div className="country-home-grid">
            <Link href="/country/uk">
              <span>UK</span>
              <div>
                <h3>United Kingdom</h3>
                <p>
                  Employment rights, ONS labour evidence and UK qualification
                  routes.
                </p>
                <strong>
                  Open UK guidance <span aria-hidden="true">→</span>
                </strong>
              </div>
            </Link>
            <Link href="/country/us">
              <span>US</span>
              <div>
                <h3>United States</h3>
                <p>
                  Federal evidence, state variation and US education and hiring
                  signals.
                </p>
                <strong>
                  Open US guidance <span aria-hidden="true">→</span>
                </strong>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section briefing-home-section">
        <div className="shell briefing-home-section__grid">
          <div>
            <p className="kicker kicker--light">Weekly briefing</p>
            <h2>Follow what materially changed at work</h2>
            <p>
              One focused review of the changes, evidence and next actions worth
              carrying into the week.
            </p>
          </div>
          <NewsletterForm dark />
        </div>
      </section>
    </main>
  );
}
