import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceBadge } from "@/components/evidence-badge";

export const metadata: Metadata = {
  title: "AI exposure is not a job-loss forecast",
  description:
    "What the ILO's refined global GenAI exposure index measures, what it does not, and what workers should do with it.",
};

export default function ExposureSignalPage() {
  return (
    <main id="main">
      <article className="article-page">
        <header className="article-header article-header--signal">
          <div className="shell article-header__inner">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/signals">Signals</Link>
              <span>/</span>
              <span>GenAI exposure</span>
            </nav>
            <div className="meta-row">
              <EvidenceBadge evidence="Observed" />
              <span>Workforce evidence</span>
              <span>All roles · Leaders</span>
            </div>
            <h1>
              One in four jobs has some GenAI exposure. That is not the same as
              one in four jobs disappearing.
            </h1>
            <p className="article-standfirst">
              The ILO&apos;s refined index measures task exposure. It identifies
              where work may change; it does not predict that every exposed job
              will be automated.
            </p>
            <div className="byline-row">
              <div className="avatar" aria-hidden="true">
                AM
              </div>
              <div>
                <strong>Alex Morgan</strong>
                <span>Workforce evidence editor</span>
              </div>
              <div className="byline-row__dates">
                <span>Published 22 Jul 2026</span>
                <span>7 minute read</span>
              </div>
            </div>
          </div>
        </header>
        <div className="shell article-layout article-layout--two">
          <aside className="article-context">
            <div className="sticky-card">
              <span className="kicker">Evidence card</span>
              <dl>
                <div>
                  <dt>Dataset</dt>
                  <dd>29,753 tasks</dd>
                </div>
                <div>
                  <dt>Survey points</dt>
                  <dd>52,558</dd>
                </div>
                <div>
                  <dt>Publication</dt>
                  <dd>ILO WP 140</dd>
                </div>
                <div>
                  <dt>Published</dt>
                  <dd>20 May 2025</dd>
                </div>
              </dl>
            </div>
          </aside>
          <div className="article-body">
            <p className="direct-answer">
              <strong>The direct answer:</strong> the ILO estimates that one in
              four workers is in an occupation with some generative-AI exposure,
              while 3.3% of global employment sits in its highest exposure
              category. The report says transformation is the more likely
              outcome than full replacement.
            </p>
            <div className="data-hero-card">
              <div>
                <strong>1 in 4</strong>
                <span>some exposure</span>
              </div>
              <div>
                <strong>3.3%</strong>
                <span>highest exposure band</span>
              </div>
              <div>
                <strong>Clerical</strong>
                <span>highest occupational exposure</span>
              </div>
            </div>
            <h2>Exposure measures task overlap, not an employer decision</h2>
            <p>
              A task can be technically exposed while remaining human-led for
              reasons including quality, trust, law, customer expectations,
              cost, system integration and accountability. Exposure is a map of
              possible change, not a timetable.
            </p>
            <h2>The useful unit is the task inside the job</h2>
            <p>
              The same job can contain highly exposed drafting and
              classification tasks alongside low-exposure negotiation, physical
              work, exception handling and accountable decisions. This is why
              Work Changed organises role briefings around task maps.
            </p>
            <div className="key-change">
              <span className="kicker">What workers should do</span>
              <ul>
                <li>List the repeated tasks inside your actual week.</li>
                <li>Separate preparation from accountable decisions.</li>
                <li>Test one low-risk workflow against a baseline.</li>
                <li>Track quality and correction burden, not speed alone.</li>
              </ul>
            </div>
            <div className="sources-box">
              <span className="kicker">Primary evidence</span>
              <h2>Read the ILO methodology</h2>
              <a
                href="https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure"
                target="_blank"
                rel="noreferrer noopener"
              >
                Generative AI and Jobs: A Refined Global Index of Occupational
                Exposure ↗
              </a>
              <p>
                Work Changed uses the report&apos;s own language and does not
                convert exposure bands into a probability of job loss.
              </p>
            </div>
            <div className="article-next">
              <span className="kicker">Use the evidence</span>
              <h2>See what changes inside your role</h2>
              <div>
                <Link href="/roles">Open the Role Library →</Link>
                <Link href="/tasks">Browse the Task Library →</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
