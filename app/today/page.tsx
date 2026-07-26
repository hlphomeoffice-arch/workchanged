import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { FollowControl } from "@/components/follow-control";
import { NewsletterForm } from "@/components/newsletter-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/lib/editorial/articles";
import { formatEditorialDate } from "@/lib/editorial/dates";
import { stories } from "@/lib/content";

export const metadata: Metadata = {
  title: "What Changed This Week",
  description:
    "A weekly, source-linked briefing on the workplace changes that affect real decisions.",
  alternates: {
    canonical: "/today",
  },
  openGraph: {
    type: "website",
    title: "What Changed This Week",
    description:
      "Changes that alter real work, with evidence, affected roles and practical next steps.",
    url: "/today",
    images: ["/og-work-changed.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Changed This Week",
    description:
      "Changes that alter real work, with evidence, affected roles and practical next steps.",
    images: ["/og-work-changed.jpg"],
  },
};

export default function TodayPage() {
  const changes = articles
    .filter((article) => article.portfolio !== "Evergreen decision page")
    .slice(0, 8);
  const lead = changes[0] || articles[0];
  const productSignals = stories.filter((story) =>
    story.href.startsWith("/today#"),
  );

  return (
    <main id="main">
      <PageHero
        kicker="What Changed This Week"
        title="The changes worth your attention"
        text="A calm, verified briefing on developments that alter real work, with the noise left out."
        meta="Week ending 25 July 2026 · Reviewed 25 July 2026"
      />

      {lead && (
        <section className="section section--paper">
          <div className="shell">
            <SectionHeading
              kicker="Lead change"
              title="Start with the question most likely to change a decision"
              text="Read the answer first, then inspect the evidence and next action."
            />
            <div id={`change-${lead.number}`}>
              <ArticleCard article={lead} featured />
            </div>
          </div>
        </section>
      )}

      <section className="section section--warm">
        <div className="shell weekly-briefing-layout">
          <aside className="weekly-briefing-index">
            <p className="kicker">This week&apos;s index</p>
            <strong>{String(changes.length).padStart(2, "0")}</strong>
            <nav aria-label="This week's changes">
              {changes.map((article, index) => (
                <a href={`#change-${article.number}`} key={article.slug}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {article.shortTitle}
                </a>
              ))}
            </nav>
          </aside>
          <div className="weekly-briefing-list">
            {changes.slice(1).map((article, index) => (
              <article id={`change-${article.number}`} key={article.slug}>
                <span>{String(index + 2).padStart(2, "0")}</span>
                <div>
                  <p>
                    {article.format} · {article.jurisdiction}
                  </p>
                  <h2>
                    <Link
                      href={`/guides/${article.slug}`}
                      data-track="contextual_internal_link"
                      data-track-meta={article.slug}
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p>{article.answerFirst}</p>
                  <dl>
                    <div>
                      <dt>Evidence</dt>
                      <dd>{article.evidenceStrength}</dd>
                    </div>
                    <div>
                      <dt>Next review</dt>
                      <dd>{formatEditorialDate(article.nextReview)}</dd>
                    </div>
                  </dl>
                  <Link
                    className="text-link"
                    href={`/guides/${article.slug}`}
                    data-track="contextual_internal_link"
                    data-track-meta={article.slug}
                  >
                    Read what changed and what to do next
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section verified-product-change">
        <div className="shell verified-product-change__grid">
          <div>
            <p className="kicker kicker--light">Verified product change</p>
            <h2>A label changed. The contract did not.</h2>
            <p>
              Google renamed Gemini Alpha to Beta. Workspace administrators do
              not need a migration project, new opt-in or contract change.
            </p>
            <Link
              className="button button--lime"
              href="/today/gemini-alpha-is-now-beta"
            >
              Read the source-backed note
            </Link>
          </div>
          <div>
            <FollowControl
              followKey="topic:weekly-changes"
              label="weekly workplace changes"
            />
          </div>
        </div>
      </section>

      {productSignals.length > 0 && (
        <section className="section section--paper">
          <div className="shell">
            <SectionHeading
              kicker="Other verified product signals"
              title="Small changes that still need a policy decision"
              text="These first-party product updates matter only when they reach a real workflow."
            />
            <div className="product-signal-list">
              {productSignals.map((story) => (
                <article id={story.slug} key={story.slug}>
                  <div>
                    <span>{story.evidence}</span>
                    <span>{story.date}</span>
                  </div>
                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>
                  {story.sourceUrl && (
                    <a
                      href={story.sourceUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {story.sourceLabel || "Open the first-party source"}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section briefing-home-section">
        <div className="shell briefing-home-section__grid">
          <div>
            <p className="kicker kicker--light">WorkChanged News Letter</p>
            <h2>Get the next briefing by email</h2>
            <p>
              Join the private mailing list below. Google stores your name,
              surname and email address for the WorkChanged News Letter, while
              RSS remains available.
            </p>
          </div>
          <NewsletterForm dark />
        </div>
      </section>
    </main>
  );
}
