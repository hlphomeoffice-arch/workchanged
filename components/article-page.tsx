import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { FollowControl } from "@/components/follow-control";
import { NewsletterForm } from "@/components/newsletter-form";
import { ReadingProgress } from "@/components/reading-progress";
import { ReviewUpdateNotice } from "@/components/review-update-notice";
import { TaskRiskAssessment } from "@/components/task-risk-assessment";
import { formatEditorialDate } from "@/lib/editorial/dates";
import { getPillar } from "@/lib/editorial/pillars";
import type { Article } from "@/lib/editorial/types";

function serialiseSchema(schema: unknown) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

function isoDate(value: string) {
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp)
    ? value
    : new Date(timestamp).toISOString().slice(0, 10);
}

const professionRoute = {
  accounting: {
    href: "/roles/finance-accounting",
    label: "Finance and accounting",
  },
  "finance-accounting": {
    href: "/roles/finance-accounting",
    label: "Finance and accounting",
  },
  marketing: {
    href: "/roles/marketing-content",
    label: "Marketing and content",
  },
  "marketing-content": {
    href: "/roles/marketing-content",
    label: "Marketing and content",
  },
  "project-management": {
    href: "/roles/operations-projects",
    label: "Operations and projects",
  },
  "operations-projects": {
    href: "/roles/operations-projects",
    label: "Operations and projects",
  },
  sales: {
    href: "/roles/sales-success",
    label: "Sales and customer success",
  },
  "sales-success": {
    href: "/roles/sales-success",
    label: "Sales and customer success",
  },
  hr: {
    href: "/roles/hr-recruiting",
    label: "HR and recruiting",
  },
  "hr-recruiting": {
    href: "/roles/hr-recruiting",
    label: "HR and recruiting",
  },
  legal: {
    href: "/roles/legal-compliance",
    label: "Legal and compliance",
  },
  "legal-compliance": {
    href: "/roles/legal-compliance",
    label: "Legal and compliance",
  },
} as const;

export function ArticlePage({
  article,
  related,
}: {
  article: Article;
  related: Article[];
}) {
  const pillar = getPillar(article.pillar);
  const imageBase = `/images/articles/${article.slug}`;
  const canonicalUrl = `https://workchanged.com/guides/${article.slug}`;
  const professionLinks = article.professionSlugs
    .map((slug) => professionRoute[slug as keyof typeof professionRoute])
    .filter(
      (
        item,
      ): item is (typeof professionRoute)[keyof typeof professionRoute] =>
        Boolean(item),
    )
    .filter(
      (item, index, items) =>
        items.findIndex((candidate) => candidate.href === item.href) === index,
    );
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    image: `https://workchanged.com${imageBase}.jpg`,
    datePublished: isoDate(article.published),
    dateModified: isoDate(article.reviewed),
    inLanguage: "en-GB",
    isAccessibleForFree: true,
    mainEntityOfPage: canonicalUrl,
    articleSection: pillar?.name,
    about: article.keyTakeaways,
    author: {
      "@type": "Organization",
      name: "WorkChanged editorial desk",
      url: "https://workchanged.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "WorkChanged",
      url: "https://workchanged.com",
      logo: {
        "@type": "ImageObject",
        url: "https://workchanged.com/brand/mark.svg",
      },
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://workchanged.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pillar?.name,
        item: `https://workchanged.com/topics/${article.pillar}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main id="main">
      <ReadingProgress />
      <ReviewUpdateNotice
        articleKey={article.slug}
        reviewed={article.reviewed}
      />
      <meta name="workchanged:reviewed" content={article.reviewed} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serialiseSchema([articleSchema, breadcrumbSchema]),
        }}
      />

      <article className="guide-article">
        <header className="guide-article__header">
          <div className="shell guide-article__header-inner">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href={`/topics/${article.pillar}`}>{pillar?.name}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{article.shortTitle}</span>
            </nav>
            <div className="guide-article__labels">
              <span className={`topic-label topic-label--${pillar?.color}`}>
                {pillar?.name}
              </span>
              <span>{article.format}</span>
              <span>{article.jurisdiction}</span>
            </div>
            <h1>{article.title}</h1>
            <p className="guide-article__dek">{article.dek}</p>
            <div className="guide-article__publication">
              <div>
                <strong>WorkChanged editorial desk</strong>
                <span>Source-led research and synthesis</span>
              </div>
              <dl>
                <div>
                  <dt>Published</dt>
                  <dd>{formatEditorialDate(article.published)}</dd>
                </div>
                <div>
                  <dt>Reviewed</dt>
                  <dd>{formatEditorialDate(article.reviewed)}</dd>
                </div>
                <div>
                  <dt>Next review</dt>
                  <dd>{formatEditorialDate(article.nextReview)}</dd>
                </div>
                <div>
                  <dt>Reading time</dt>
                  <dd>{article.readingMinutes} minutes</dd>
                </div>
              </dl>
            </div>
          </div>
        </header>

        <div className="shell guide-article__hero">
          <picture>
            <source
              srcSet={`${imageBase}-768.webp 768w, ${imageBase}.webp 1536w`}
              sizes="(max-width: 680px) 100vw, (max-width: 1328px) calc(100vw - 48px), 1280px"
              type="image/webp"
            />
            <img
              src={`${imageBase}.jpg`}
              srcSet={`${imageBase}-768.jpg 768w, ${imageBase}.jpg 1536w`}
              sizes="(max-width: 680px) 100vw, (max-width: 1328px) calc(100vw - 48px), 1280px"
              alt={article.imageAlt}
              width={1536}
              height={1024}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        <details className="shell guide-toc-mobile">
          <summary>On this page</summary>
          <nav aria-label="On this page">
            <a href="#answer-first">Answer first</a>
            <a href="#who-this-affects">Who this affects</a>
            <a href="#evidence">Evidence strength</a>
            {article.sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.heading}
              </a>
            ))}
            <a href="#what-to-do-next">What to do next</a>
            <a href="#sources">Sources</a>
            <a href="#change-log">Change log</a>
          </nav>
        </details>

        <div className="shell guide-layout">
          <aside className="guide-sidebar">
            <nav className="guide-toc" aria-label="On this page">
              <p className="kicker">On this page</p>
              <a href="#answer-first">Answer first</a>
              <a href="#who-this-affects">Who this affects</a>
              <a href="#evidence">Evidence strength</a>
              {article.sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.heading}
                </a>
              ))}
              <a href="#what-to-do-next">What to do next</a>
              <a href="#sources">Sources</a>
              <a href="#change-log">Change log</a>
            </nav>
            <div className="jurisdiction-card">
              <span>Country or jurisdiction</span>
              <strong>{article.jurisdiction}</strong>
              <p>
                Rules, pay and hiring practice vary. Use the country label before
                applying guidance to your situation.
              </p>
              {(article.jurisdiction === "United Kingdom" ||
                article.jurisdiction ===
                  "United Kingdom and United States" ||
                article.jurisdiction === "Jurisdiction varies") && (
                <Link href="/country/uk">Browse UK guidance →</Link>
              )}
              {(article.jurisdiction === "United States" ||
                article.jurisdiction ===
                  "United Kingdom and United States" ||
                article.jurisdiction === "Jurisdiction varies") && (
                <Link href="/country/us">Browse US guidance →</Link>
              )}
            </div>
          </aside>

          <div className="guide-content">
            <section className="answer-first" id="answer-first">
              <p className="kicker">Answer First</p>
              <h2>The practical answer</h2>
              <p>{article.answerFirst}</p>
            </section>

            <section className="who-affects" id="who-this-affects">
              <div>
                <p className="kicker">Who This Affects</p>
                <h2>Use this guide if any of these describe you</h2>
              </div>
              <ul>
                {article.affects.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="evidence-panel" id="evidence">
              <div>
                <p className="kicker">Evidence Strength</p>
                <strong>{article.evidenceStrength}</strong>
              </div>
              <div>
                <p className="kicker">Editorial format</p>
                <strong>{article.format}</strong>
              </div>
              <div>
                <p className="kicker">Portfolio role</p>
                <strong>{article.portfolio}</strong>
              </div>
            </section>

            <section className="takeaways-panel">
              <p className="kicker">Key takeaways</p>
              <ul>
                {article.keyTakeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </section>

            {article.number === 1 && <TaskRiskAssessment />}

            {article.sections.map((section) => (
              <section className="guide-section" id={section.id} key={section.id}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph, index) => (
                  <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((item, index) => (
                      <li key={`${section.id}-bullet-${index}`}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.note && <p className="editorial-note">{section.note}</p>}
              </section>
            ))}

            <section className="next-actions" id="what-to-do-next">
              <p className="kicker">What To Do Next</p>
              <h2>A practical sequence for the next seven days</h2>
              <ol>
                {article.actions.map((action, index) => (
                  <li key={`action-${index}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{action}</p>
                  </li>
                ))}
              </ol>
            </section>

            {(article.pillar === "workplace-rules-and-rights" ||
              article.slug === "salary-transparency-what-is-changing") && (
              <aside className="legal-note">
                <strong>Information only</strong>
                <p>
                  This guide provides general workplace information, not legal
                  advice. Check the linked official guidance and obtain advice
                  about your circumstances before taking consequential action.
                </p>
              </aside>
            )}

            {professionLinks.length > 0 && (
              <section className="profession-guidance">
                <p className="kicker">Related profession guidance</p>
                <h2>See how this reaches the work you do</h2>
                <div>
                  {professionLinks.map((profession) => (
                    <Link
                      href={profession.href}
                      key={profession.href}
                      data-track="profession_guidance_click"
                      data-track-meta={profession.href}
                    >
                      {profession.label}
                      <span aria-hidden="true"> →</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="source-list" id="sources">
              <p className="kicker">Sources</p>
              <h2>Read the evidence behind this guide</h2>
              <ol>
                {article.sources.map((source) => (
                  <li key={source.url}>
                    <div>
                      <span>{source.type}</span>
                      <span>{source.published}</span>
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {source.publisher}: {source.title}
                    </a>
                    {source.note && <p>{source.note}</p>}
                  </li>
                ))}
              </ol>
            </section>

            <section className="change-log" id="change-log">
              <p className="kicker">Reviewed and updated</p>
              <h2>Change log</h2>
              <ol>
                {article.changeLog.map((entry) => (
                  <li key={`${entry.date}-${entry.note}`}>
                    <time dateTime={isoDate(entry.date)}>
                      {formatEditorialDate(entry.date)}
                    </time>
                    <p>{entry.note}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="follow-panel">
              <div>
                <p className="kicker">Follow changes affecting your role</p>
                <h2>Keep this topic in your saved list</h2>
                <p>
                  WorkChanged uses a local preference until a verified alert
                  service is connected.
                </p>
              </div>
              <FollowControl
                followKey={`topic:${article.pillar}`}
                label={pillar?.shortName.toLowerCase() || "this topic"}
              />
            </section>

            <section className="article-topic-briefing">
              <p className="kicker">A focused return path</p>
              <NewsletterForm
                compact
                topic={pillar?.shortName.toLowerCase() || "this topic"}
              />
            </section>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section related-guides">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="kicker">Read this next</p>
                <h2>A useful next step, chosen for this decision</h2>
                <p>
                  These pages extend the same question into evidence, action or
                  a profession-specific view.
                </p>
              </div>
            </div>
            <div className="article-grid">
              {related.slice(0, 3).map((item) => (
                <ArticleCard article={item} key={item.slug} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
