import Link from "next/link";
import type { TrendloomArticle } from "@/lib/editorial/trendloom";

function serialiseSchema(schema: unknown) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

function formattedDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function TrendloomArticlePage({
  article,
}: {
  article: TrendloomArticle;
}) {
  const canonicalUrl = `https://workchanged.com/trending/${article.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    datePublished: article.published_at,
    dateModified: article.updated_at,
    inLanguage: "en-GB",
    isAccessibleForFree: true,
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Organization",
      name: "WorkChanged editorial desk",
      url: "https://workchanged.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "WorkChanged",
      url: "https://workchanged.com",
    },
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialiseSchema(schema) }}
      />
      <article className="trendloom-story">
        <header className="trendloom-story__header">
          <div className="shell trendloom-story__header-inner">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/trending">Trending now</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{article.title}</span>
            </nav>
            <p className="kicker">Trending now · Evidence checked</p>
            <h1>{article.title}</h1>
            <p className="trendloom-story__dek">{article.dek}</p>
            <div className="trendloom-story__meta">
              <span>{formattedDate(article.published_at)}</span>
              <span>{article.reading_minutes} minute read</span>
              <span>Search opportunity {article.opportunity_score}/100</span>
              <span>Confidence {article.confidence_score}/100</span>
            </div>
          </div>
        </header>

        <div className="shell trendloom-story__layout">
          <div
            className="trendloom-story__body"
            dangerouslySetInnerHTML={{ __html: article.body_html }}
          />
          <aside className="trendloom-story__evidence">
            <p className="kicker">Editorial evidence</p>
            <h2>Sources behind this article</h2>
            <p>
              Prepared by Campaign Producers Trendloom for the WorkChanged
              editorial desk. Every article must pass the source, claim,
              relevance, and no-em-dash checks before publication.
            </p>
            <ol>
              {article.citations.map((citation) => (
                <li key={citation.url}>
                  <a href={citation.url} target="_blank" rel="noreferrer">
                    <strong>{citation.publisher}</strong>
                    <span>{citation.title}</span>
                  </a>
                  <small>{citation.supports}</small>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </article>
    </main>
  );
}
