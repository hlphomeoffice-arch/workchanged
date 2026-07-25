import Link from "next/link";
import { formatEditorialDate } from "@/lib/editorial/dates";
import { getPillar } from "@/lib/editorial/pillars";
import type { Article } from "@/lib/editorial/types";

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  const pillar = getPillar(article.pillar);
  const imageBase = `/images/articles/${article.slug}`;
  const sizes = featured
    ? "(max-width: 960px) calc(100vw - 32px), 52vw"
    : "(max-width: 680px) calc(100vw - 32px), (max-width: 960px) 50vw, 33vw";

  return (
    <article
      className={`article-card ${featured ? "article-card--featured" : ""}`}
    >
      <Link
        className="article-card__image"
        href={`/guides/${article.slug}`}
        aria-label={`Read ${article.title}`}
        data-track="contextual_internal_link"
        data-track-meta={article.slug}
      >
        <picture>
          <source
            srcSet={`${imageBase}-768.webp 768w, ${imageBase}.webp 1536w`}
            sizes={sizes}
            type="image/webp"
          />
          <img
            src={`${imageBase}.jpg`}
            srcSet={`${imageBase}-768.jpg 768w, ${imageBase}.jpg 1536w`}
            sizes={sizes}
            alt={article.imageAlt}
            width={1536}
            height={1024}
            loading={featured ? "eager" : "lazy"}
            fetchPriority={featured ? "high" : "auto"}
            decoding="async"
          />
        </picture>
      </Link>
      <div className="article-card__body">
        <div className="article-card__meta">
          <span className={`topic-dot topic-dot--${pillar?.color}`} />
          <span>{pillar?.name}</span>
          <span>{article.format}</span>
        </div>
        <h3>
          <Link
            href={`/guides/${article.slug}`}
            data-track="contextual_internal_link"
            data-track-meta={article.slug}
          >
            {article.title}
          </Link>
        </h3>
        <p>{article.dek}</p>
        <div className="article-card__footer">
          <span>{article.jurisdiction}</span>
          <span>{article.readingMinutes} min read</span>
          <span>Reviewed {formatEditorialDate(article.reviewed)}</span>
        </div>
      </div>
    </article>
  );
}
