import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { FollowControl } from "@/components/follow-control";
import { formatEditorialDate } from "@/lib/editorial/dates";
import type { Article, Pillar } from "@/lib/editorial/types";

export function PillarPage({
  pillar,
  articles,
}: {
  pillar: Pillar;
  articles: Article[];
}) {
  const featured = articles[0];
  const trackers = articles.filter(
    (article) => article.portfolio === "Change tracker",
  );
  const ukGuidance = articles.filter(
    (article) =>
      article.jurisdiction === "United Kingdom" ||
      article.jurisdiction === "United Kingdom and United States",
  );
  const usGuidance = articles.filter(
    (article) =>
      article.jurisdiction === "United States" ||
      article.jurisdiction === "United Kingdom and United States",
  );

  return (
    <main id="main">
      <section className={`pillar-hero pillar-hero--${pillar.color}`}>
        <div className="shell pillar-hero__grid">
          <div>
            <nav className="breadcrumbs breadcrumbs--light" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{pillar.name}</span>
            </nav>
            <p className="kicker kicker--light">Editorial pillar</p>
            <h1>{pillar.name}</h1>
            <p className="pillar-hero__promise">{pillar.promise}</p>
            <p>{pillar.description}</p>
          </div>
          <div className="pillar-hero__follow">
            <strong>{articles.length} complete guides</strong>
            <span>{trackers.length} living trackers</span>
            <FollowControl
              followKey={`topic:${pillar.slug}`}
              label={pillar.shortName.toLowerCase()}
            />
          </div>
        </div>
      </section>

      {featured && (
        <section className="section section--paper">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="kicker">Start here</p>
                <h2>The most useful first decision</h2>
              </div>
            </div>
            <ArticleCard article={featured} featured />
          </div>
        </section>
      )}

      <section className="section section--warm">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">Complete library</p>
              <h2>Guides, evidence checks and decision tools</h2>
              <p>
                Every page gives the answer near the top, names uncertainty and
                ends with a useful next step.
              </p>
            </div>
          </div>
          <div className="article-grid">
            {articles.slice(featured ? 1 : 0).map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>

      {trackers.length > 0 && (
        <section className="section tracker-strip">
          <div className="shell tracker-strip__grid">
            <div>
              <p className="kicker kicker--light">Change trackers</p>
              <h2>Return when the evidence moves</h2>
              <p>
                Trackers carry a visible review schedule and change log, so you
                can see what changed since your last visit.
              </p>
            </div>
            <div>
              {trackers.slice(0, 4).map((article) => (
                <Link
                  href={`/guides/${article.slug}`}
                  key={article.slug}
                  data-track="contextual_internal_link"
                  data-track-meta={article.slug}
                >
                  <span>{formatEditorialDate(article.nextReview)}</span>
                  <strong>{article.shortTitle}</strong>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {(ukGuidance.length > 0 || usGuidance.length > 0) && (
        <section className="section country-branches">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="kicker">Country-specific guidance</p>
                <h2>Choose the rules and labour market that apply to you</h2>
              </div>
            </div>
            <div className="country-branches__grid">
              <article>
                <span>UK</span>
                <h3>United Kingdom</h3>
                <p>
                  Employment rights, official labour data and qualifications
                  are labelled for the UK.
                </p>
                <Link href="/country/uk">
                  {ukGuidance.length} relevant guides
                  <span aria-hidden="true"> →</span>
                </Link>
              </article>
              <article>
                <span>US</span>
                <h3>United States</h3>
                <p>
                  Federal data and state-level variation are separated from UK
                  rules.
                </p>
                <Link href="/country/us">
                  {usGuidance.length} relevant guides
                  <span aria-hidden="true"> →</span>
                </Link>
              </article>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
