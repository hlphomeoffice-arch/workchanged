import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Work Changed exists, who it serves and how it approaches AI and work.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        kicker="About Work Changed"
        title="On the side of the person doing the work"
        text="Work Changed translates AI developments into practical, role-specific action for working people."
        meta="Independent editorial preview · Founded 2026"
      />
      <section className="section section--paper">
        <div className="shell about-grid">
          <div className="about-lead">
            <p className="editorial-quote">
              “People know AI is changing work. What they do not have is a
              reliable way to decide what changes in their week.”
            </p>
          </div>
          <div className="about-copy">
            <span className="kicker">The problem we own</span>
            <h2>Noise is easy. Translation is the work.</h2>
            <p>
              Product launches, forecasts and workplace anecdotes arrive faster
              than professionals can evaluate them. Work Changed closes the
              translation, credibility and action gaps between an AI development
              and a real role.
            </p>
            <p>
              We organise coverage around roles and tasks, show the evidence and
              uncertainty, test tools in defined workflows and end useful pages
              with a concrete next move.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--cloud" id="people">
        <div className="shell">
          <div className="directory-intro">
            <div>
              <p className="kicker">Accountability</p>
              <h2>Named people, not a generic content machine</h2>
            </div>
            <p>
              The preview uses representative editorial profiles. Final
              biographies and credentials will be verified before publication.
            </p>
          </div>
          <div className="people-grid">
            <article>
              <div className="person-mark">HC</div>
              <h3>Hannah Cole</h3>
              <span>Workplace technology editor</span>
              <p>Tools, operations, workplace systems and daily verification.</p>
            </article>
            <article>
              <div className="person-mark">AM</div>
              <h3>Alex Morgan</h3>
              <span>Workforce evidence editor</span>
              <p>Labour markets, task exposure, research methods and policy.</p>
            </article>
            <article>
              <div className="person-mark">WC</div>
              <h3>Work Changed Tool Lab</h3>
              <span>Testing desk</span>
              <p>Reproducible workflow testing with version and failure logs.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section about-contact" id="contact">
        <div className="shell about-contact__inner">
          <div>
            <p className="kicker kicker--light">Contact and corrections</p>
            <h2>See something we should check?</h2>
            <p>
              The live publication will provide dedicated editorial, correction
              and secure-tip channels.
            </p>
          </div>
          <Link className="button button--lime" href="/standards#corrections">
            Read the correction policy
          </Link>
        </div>
      </section>
    </main>
  );
}
