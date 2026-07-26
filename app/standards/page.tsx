import type { Metadata } from "next";
import { EvidenceBadge } from "@/components/evidence-badge";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Editorial standards",
  description:
    "The evidence, testing, correction, AI-use and commercial standards behind WorkChanged.",
  alternates: { canonical: "/standards" },
  openGraph: {
    type: "website",
    title: "WorkChanged editorial standards",
    description:
      "How WorkChanged sources claims, labels evidence, uses AI and corrects mistakes.",
    url: "/standards",
    images: ["/og-work-changed.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkChanged editorial standards",
    description:
      "How WorkChanged sources claims, labels evidence, uses AI and corrects mistakes.",
    images: ["/og-work-changed.jpg"],
  },
};

export default function StandardsPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Editorial standards"
        title="Trust should be inspectable"
        text="How WorkChanged sources claims, tests tools, uses AI, handles commercial relationships and corrects mistakes."
        meta="Version 1.1 · 25 July 2026"
      />
      <section className="section section--paper">
        <div className="shell standards-layout">
          <aside>
            <div className="sticky-card">
              <span className="kicker">On this page</span>
              <a href="#evidence">Evidence labels</a>
              <a href="#sources">Source hierarchy</a>
              <a href="#tool-lab">Tool Lab method</a>
              <a href="#ai-use">How we use AI</a>
              <a href="#commercial">Commercial policy</a>
              <a href="#corrections">Corrections</a>
              <a href="#privacy">Privacy and measurement</a>
              <a href="#terms">Information boundary</a>
              <a href="#accessibility">Accessibility</a>
            </div>
          </aside>
          <div className="standards-main">
            <section id="evidence">
              <span className="kicker">Evidence labels</span>
              <h2>We do not flatten different kinds of knowledge</h2>
              <div className="evidence-guide">
                {[
                  ["Observed", "Visible in a primary source, measured data or a live product."],
                  ["Tested", "Reproduced by WorkChanged in a defined workflow."],
                  ["Emerging", "Credible early signal with limited or uneven adoption."],
                  ["Forecast", "A projection with assumptions and a time horizon."],
                  ["Claim", "A statement we have not independently verified."],
                ].map(([label, text]) => (
                  <article key={label}>
                    <EvidenceBadge evidence={label as "Observed" | "Tested" | "Emerging" | "Forecast" | "Claim"} />
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </section>
            <section id="sources">
              <span className="kicker">Source hierarchy</span>
              <h2>Primary evidence comes first</h2>
              <ol className="source-tier-list">
                <li><span>Tier 1</span><strong>Official documentation, regulators, filings, statistics, datasets and peer-reviewed research</strong></li>
                <li><span>Tier 2</span><strong>Independent research institutions such as ILO, OECD and Stanford HAI</strong></li>
                <li><span>Tier 3</span><strong>High-quality reporting and named expert context</strong></li>
                <li><span>Tier 4</span><strong>Disclosed practitioner observations and case studies</strong></li>
                <li><span>Tier 5</span><strong>Social posts and demos: discovery leads, never proof</strong></li>
              </ol>
            </section>
            <section id="tool-lab">
              <span className="kicker">Tool Lab method</span>
              <h2>A result without a method is marketing</h2>
              <p>
                Every full Tool Lab test records the product and plan, model or
                version, region, date, task, input, human-only baseline, number
                of runs, scoring rubric, failures, privacy terms and correction
                burden.
              </p>
              <div className="method-grid">
                <article><span>01</span><strong>Define the real task</strong><p>No toy prompts.</p></article>
                <article><span>02</span><strong>Record a baseline</strong><p>Human-only time and quality.</p></article>
                <article><span>03</span><strong>Run matched cases</strong><p>Same inputs and rubric.</p></article>
                <article><span>04</span><strong>Publish failures</strong><p>Not only the best output.</p></article>
              </div>
            </section>
            <section id="ai-use">
              <span className="kicker">How we use AI</span>
              <h2>AI can assist the process. It cannot own the fact.</h2>
              <p>
                AI may help with transcription, document comparison, source
                discovery, drafting, formatting and chart code. Material claims
                must still be tied to sources a reader can open. WorkChanged
                does not claim human expert or legal review unless that review
                has genuinely taken place and is named.
              </p>
            </section>
            <section id="commercial">
              <span className="kicker">Commercial policy</span>
              <h2>Money cannot buy the evidence layer</h2>
              <p>
                Sponsors are labelled at the top. Affiliates are disclosed
                before the first commercial link. Sponsors cannot buy an
                independent verdict, placement in a ranking or removal of a
                material limitation.
              </p>
            </section>
            <section id="corrections">
              <span className="kicker">Corrections</span>
              <h2>Material errors get a visible trail</h2>
              <p>
                A correction records the original error, the corrected
                statement, the date and editor, and whether the headline,
                News Letter or social copy also changed. Typographic fixes can
                remain silent; factual changes cannot.
              </p>
            </section>
            <section id="privacy">
              <span className="kicker">Privacy and measurement</span>
              <h2>Useful measurement without a second tracking platform</h2>
              <p>
                The current build uses no advertising tracker, third-party
                analytics script or cookie identifier.
                Anonymous interaction events are structured in the browser and
                retained only in session storage so the site is ready for a
                future consented first-party analytics connection.
              </p>
              <p>
                Saved topic and profession preferences remain in local storage
                on the reader&apos;s device. The WorkChanged News Letter form
                sends submitted names, surnames and email addresses through a
                secure, server-side WorkChanged connection to the existing
                Google Forms destination and private Google Sheet named
                WorkChanged Website News Letter List. No Google account
                interface is embedded on WorkChanged. Google provides the
                storage service. WorkChanged uses those details only for the
                News Letter, and analytics does not receive them.
              </p>
              <p>
                Sign-up collection is active. Campaign delivery is a separate
                service, so joining the list does not promise a particular send
                date or frequency beyond the publication&apos;s stated weekly
                intention.
              </p>
            </section>
            <section id="terms">
              <span className="kicker">Information boundary</span>
              <h2>Guidance is not individual professional advice</h2>
              <p>
                WorkChanged provides general workplace information and
                decision frameworks. It is not legal, medical, financial or
                employment advice. Rights pages state their jurisdiction and
                link to official guidance. Readers should obtain appropriate
                advice before a consequential decision.
              </p>
            </section>
            <section id="accessibility">
              <span className="kicker">Accessibility</span>
              <h2>Designed for long, comfortable reading</h2>
              <p>
                The site targets WCAG AA contrast, keyboard access, visible
                focus, semantic landmarks, reduced-motion preferences,
                descriptive image alternatives and a bounded reading width.
                Accessibility checks are part of the release test suite and
                known limitations are recorded rather than hidden.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
