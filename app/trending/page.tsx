import type { Metadata } from "next";
import Link from "next/link";
import { getTrendloomIndex } from "@/lib/editorial/trendloom";

export const metadata: Metadata = {
  title: "Trending now at work",
  description:
    "Fresh, source-checked analysis of the search trends changing work, careers and workplace decisions.",
  alternates: { canonical: "/trending" },
};

function formattedDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default async function TrendingPage() {
  const articles = await getTrendloomIndex();

  return (
    <main id="main" className="trendloom-hub">
      <header className="trendloom-hub__header">
        <div className="shell">
          <p className="kicker">Google search momentum, carefully interpreted</p>
          <h1>What people are searching for now</h1>
          <p>
            Timely WorkChanged analysis, researched against primary and trusted
            sources before it reaches this page.
          </p>
        </div>
      </header>
      <section className="shell trendloom-hub__grid" aria-label="Trending articles">
        {articles.length ? (
          articles.map((article) => (
            <article className="trendloom-card" key={article.slug}>
              <div className="trendloom-card__signal">
                <span>Trending</span>
                <strong>{article.opportunity_score}</strong>
              </div>
              <div>
                <p className="kicker">{formattedDate(article.published_at)}</p>
                <h2>
                  <Link href={`/trending/${article.slug}`}>{article.title}</Link>
                </h2>
                <p>{article.dek}</p>
                <div className="trendloom-card__meta">
                  <span>{article.reading_minutes} min read</span>
                  <span>{article.confidence_score}/100 confidence</span>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="trendloom-hub__empty">
            <h2>The next evidence-checked trend briefing is being prepared.</h2>
            <p>
              New articles appear here only after the topic, sources, claims and
              audience value have passed every editorial gate.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
