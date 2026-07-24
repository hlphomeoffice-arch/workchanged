import type { Metadata } from "next";
import Image from "next/image";
import { NewsletterForm } from "@/components/newsletter-form";

export const metadata: Metadata = {
  title: "The Work Shift newsletter",
  description:
    "Five AI-at-work changes, one tested workflow and no launch spam — every week.",
};

export default function NewsletterPage() {
  return (
    <main id="main" className="newsletter-page">
      <section className="newsletter-page__hero">
        <div className="shell newsletter-page__grid">
          <div>
            <p className="kicker kicker--lime">The Work Shift</p>
            <h1>The five AI-at-work changes worth your attention.</h1>
            <p>
              A calm weekly briefing for professionals who need decisions, not
              a firehose.
            </p>
            <NewsletterForm dark />
          </div>
          <div className="newsletter-issue">
            <div className="newsletter-issue__head">
              <Image
                src="/brand/mark.svg"
                alt=""
                width={36}
                height={36}
                unoptimized
              />
              <span>Issue 001 · Preview</span>
            </div>
            <p className="kicker">Inside each issue</p>
            <ol>
              <li>
                <span>01</span>
                <strong>Five changes worth knowing</strong>
              </li>
              <li>
                <span>02</span>
                <strong>One role-specific implication</strong>
              </li>
              <li>
                <span>03</span>
                <strong>One workflow or test method</strong>
              </li>
              <li>
                <span>04</span>
                <strong>One skill move</strong>
              </li>
              <li>
                <span>05</span>
                <strong>One claim that did not survive scrutiny</strong>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="section newsletter-values">
        <div className="shell newsletter-values__grid">
          <article>
            <span>01</span>
            <h2>Role-aware</h2>
            <p>Choose a role so the briefing can prioritise useful changes.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Source-linked</h2>
            <p>Follow consequential claims back to evidence.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Finite</h2>
            <p>One email a week. Five changes. A clear stopping point.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
