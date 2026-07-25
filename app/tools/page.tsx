import type { Metadata } from "next";
import Link from "next/link";
import { EditorialVisual } from "@/components/editorial-visual";
import { EvidenceBadge } from "@/components/evidence-badge";
import { PageHero } from "@/components/page-hero";
import { tools } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tool Lab",
  description:
    "Professional AI tool notes and transparent test methods grounded in real workflows.",
  alternates: { canonical: "/tools" },
  openGraph: {
    type: "website",
    title: "WorkChanged Tool Lab",
    description:
      "Professional tool notes and transparent test methods grounded in real workflows.",
    url: "/tools",
    images: ["/og-work-changed.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkChanged Tool Lab",
    description:
      "Professional tool notes and transparent test methods grounded in real workflows.",
    images: ["/og-work-changed.jpg"],
  },
};

export default function ToolsPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Tool Lab"
        title="Choose tools by the work, not the demo"
        text="Current capability, plan, workflow fit, privacy, failure modes and correction burden, all in one place."
        meta="6 tool pages · Transparent methods · Versioned updates"
      />
      <section className="section tool-method-banner">
        <div className="shell tool-method-banner__grid">
          <EditorialVisual variant="steps" label="Tool Lab test protocol" />
          <div>
            <EvidenceBadge evidence="Method" />
            <h2>Every real test starts with a baseline.</h2>
            <p>
              We record the task, source material, human-only baseline, plan,
              version, test date, scoring rubric, failures, privacy terms and
              correction time.
            </p>
            <Link className="button button--lime" href="/standards#tool-lab">
              Inspect the method
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--paper">
        <div className="shell">
          <div className="tool-directory-grid">
            {tools.map((tool, index) => (
              <article className="tool-directory-card" key={tool.slug}>
                <div className="tool-directory-card__head">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <EvidenceBadge evidence={tool.evidence} />
                </div>
                <span className="kicker">{tool.category}</span>
                <h2>
                  <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
                </h2>
                <p>{tool.summary}</p>
                <dl>
                  <div>
                    <dt>Best for</dt>
                    <dd>{tool.bestFor}</dd>
                  </div>
                  <div>
                    <dt>Watch</dt>
                    <dd>{tool.watch}</dd>
                  </div>
                </dl>
                <div className="tool-directory-card__foot">
                  <span>Reviewed {tool.reviewed}</span>
                  <Link href={`/tools/${tool.slug}`}>
                    Open tool page →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
