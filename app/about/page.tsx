import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why WorkChanged exists, who it serves and how it turns workplace change into practical guidance.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    title: "About WorkChanged",
    description:
      "Why WorkChanged exists, who it serves and how its editorial desk works.",
    url: "/about",
    images: ["/og-work-changed.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About WorkChanged",
    description:
      "Why WorkChanged exists, who it serves and how its editorial desk works.",
    images: ["/og-work-changed.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        kicker="About WorkChanged"
        title="On the side of the person doing the work"
        text="WorkChanged helps mid-career professionals interpret AI, job security, skills, career moves, pay, rights and changed work."
        meta="Independent editorial publication · Founded 2026"
      />
      <section className="section section--paper">
        <div className="shell about-grid">
          <div className="about-lead">
            <p className="editorial-quote">
              What changed at work, who it affects, and what to do next.
            </p>
          </div>
          <div className="about-copy">
            <span className="kicker">The problem we own</span>
            <h2>Noise is easy. Translation is the work.</h2>
            <p>
              Product launches, forecasts and workplace anecdotes arrive faster
              than professionals can evaluate them. WorkChanged closes the
              translation, credibility and action gaps between a workplace
              change and a real decision.
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
              <h2>No invented authors, reviewers or credentials</h2>
            </div>
            <p>
              Pages are attributed to the WorkChanged editorial desk until a
              real contributor has agreed to a verified public biography.
            </p>
          </div>
          <div className="people-grid">
            <article>
              <div className="person-mark">WC</div>
              <h3>WorkChanged editorial desk</h3>
              <span>Research and synthesis</span>
              <p>
                Opens the cited sources, distinguishes evidence from
                interpretation and records material updates.
              </p>
            </article>
            <article>
              <div className="person-mark">01</div>
              <h3>Primary evidence first</h3>
              <span>Source policy</span>
              <p>
                Official guidance, statistics and original research are linked
                beside the decisions they support.
              </p>
            </article>
            <article>
              <div className="person-mark">WC</div>
              <h3>WorkChanged Tool Lab</h3>
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
              A verified editorial contact will be published before external
              submissions open. The correction standard is available now.
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
