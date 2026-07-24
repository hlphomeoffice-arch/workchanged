import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { EditorialVisual } from "@/components/editorial-visual";
import { EvidenceBadge } from "@/components/evidence-badge";
import { getTool, tools } from "@/lib/content";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return { title: tool.name, description: tool.summary };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  return (
    <main id="main">
      <section className="tool-page-hero">
        <div className="shell">
          <nav className="breadcrumbs breadcrumbs--light" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/tools">Tools</Link>
            <span>/</span>
            <span>{tool.name}</span>
          </nav>
          <div className="tool-page-hero__grid">
            <div>
              <div className="meta-row meta-row--light">
                <EvidenceBadge evidence={tool.evidence} />
                <span>{tool.category}</span>
                <span>Reviewed {tool.reviewed}</span>
              </div>
              <h1>{tool.name}</h1>
              <p>{tool.summary}</p>
            </div>
            <EditorialVisual variant="blocks" label={`${tool.name} tool map`} />
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell tool-page-layout">
          <aside>
            <div className="sticky-card">
              <span className="kicker">Tool record</span>
              <dl>
                <div>
                  <dt>Company</dt>
                  <dd>{tool.company}</dd>
                </div>
                <div>
                  <dt>Category</dt>
                  <dd>{tool.category}</dd>
                </div>
                <div>
                  <dt>Evidence</dt>
                  <dd>{tool.evidence}</dd>
                </div>
                <div>
                  <dt>Reviewed</dt>
                  <dd>{tool.reviewed}</dd>
                </div>
              </dl>
            </div>
          </aside>
          <div className="tool-page-main">
            <div className="tool-verdict">
              <span className="kicker">Current read</span>
              <h2>{tool.bestFor}</h2>
              <p>{tool.summary}</p>
              <div className="tool-verdict__watch">
                <span>Watch before adopting</span>
                <strong>{tool.watch}</strong>
              </div>
            </div>

            <section>
              <span className="kicker">Decision frame</span>
              <h2>Three questions before the trial</h2>
              <div className="decision-question-grid">
                <article>
                  <span>01</span>
                  <h3>Does it reach the right context?</h3>
                  <p>
                    Useful access can improve output and increase privacy,
                    permission and stale-source risk at the same time.
                  </p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Can you verify the answer?</h3>
                  <p>
                    Source links, change tracking and audit logs matter more
                    than a persuasive paragraph.
                  </p>
                </article>
                <article>
                  <span>03</span>
                  <h3>What is the correction burden?</h3>
                  <p>
                    Time saved before review is not value if the failure is
                    expensive to find.
                  </p>
                </article>
              </div>
            </section>

            <section className="source-record">
              <span className="kicker">Primary product source</span>
              <h2>Verify the current capability</h2>
              <a href={tool.sourceUrl} target="_blank" rel="noreferrer noopener">
                {tool.sourceLabel} <span aria-hidden="true">↗</span>
              </a>
              <p>
                Product behaviour and terms change. Work Changed records the
                review date and links to the current first-party source.
              </p>
            </section>

            <section>
              <span className="kicker">Related paths</span>
              <h2>Continue with the work</h2>
              <div className="related-paths">
                <Link href="/roles">Find this tool inside a role →</Link>
                <Link href="/tasks">Choose a task to test →</Link>
                <Link href="/standards#tool-lab">Inspect our Tool Lab method →</Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
