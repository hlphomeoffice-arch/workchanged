import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { EvidenceBadge } from "@/components/evidence-badge";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/lib/editorial/articles";
import { signalStats, stories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Evidence checks and work signals",
  description:
    "Evidence on AI adoption, jobs, productivity, policy and how work is actually changing.",
  alternates: { canonical: "/signals" },
  openGraph: {
    type: "website",
    title: "Evidence checks and work signals",
    description:
      "Evidence on AI adoption, jobs, productivity, policy and how work is actually changing.",
    url: "/signals",
    images: ["/og-work-changed.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evidence checks and work signals",
    description:
      "Evidence on AI adoption, jobs, productivity, policy and how work is actually changing.",
    images: ["/og-work-changed.jpg"],
  },
};

export default function SignalsPage() {
  const evidenceChecks = articles.filter(
    (article) => article.format === "Evidence Check",
  );

  return (
    <main id="main">
      <PageHero
        kicker="Evidence Checks"
        title="Evidence before prediction"
        text="Hiring, adoption, productivity, policy and worker experience, with the measurement limits shown."
        meta="ILO · OECD · Stanford HAI · Primary datasets"
      />
      <section className="section signals-directory">
        <div className="shell">
          <div className="signal-stat-grid">
            {signalStats.map((stat) => (
              <article className="signal-stat" key={stat.value + stat.label}>
                <strong>{stat.value}</strong>
                <h2>{stat.label}</h2>
                <p>{stat.note}</p>
                <span>{stat.source}</span>
              </article>
            ))}
          </div>
          {evidenceChecks.length > 0 && (
            <section className="signals-guide-library">
              <SectionHeading
                kicker="Complete evidence checks"
                title="Read the method, limits and practical meaning"
                text="These guides distinguish measured change from forecasts and confident claims."
                href="/topics/how-work-actually-works"
                linkLabel="Open the evidence pillar"
              />
              <div className="article-grid">
                {evidenceChecks.map((article) => (
                  <ArticleCard article={article} key={article.slug} />
                ))}
              </div>
            </section>
          )}
          <div className="signal-list">
            {stories
              .filter((story) => story.type === "Work signal")
              .map((story) => (
                <article id={story.slug} key={story.slug}>
                  <div>
                    <EvidenceBadge evidence={story.evidence} />
                    <span>{story.date}</span>
                  </div>
                  <h2>
                    <Link href={story.href}>{story.title}</Link>
                  </h2>
                  <p>{story.summary}</p>
                  <Link href={story.href}>Read the evidence note →</Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
