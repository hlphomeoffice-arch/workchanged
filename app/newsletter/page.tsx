import type { Metadata } from "next";
import Image from "next/image";
import { NewsletterForm } from "@/components/newsletter-form";

export const metadata: Metadata = {
  title: "WorkChanged News Letter",
  description:
    "Join the WorkChanged News Letter for a focused weekly briefing on AI, job security, skills, rights and changed work.",
  alternates: { canonical: "/newsletter" },
  openGraph: {
    type: "website",
    title: "WorkChanged News Letter",
    description:
      "Join the WorkChanged News Letter for evidence, country context and practical next steps.",
    url: "/newsletter",
    images: ["/og-work-changed.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkChanged News Letter",
    description:
      "Join the WorkChanged News Letter for evidence, country context and practical next steps.",
    images: ["/og-work-changed.jpg"],
  },
};

export default function NewsletterPage() {
  return (
    <main id="main" className="newsletter-page">
      <section className="newsletter-page__hero">
        <div className="shell newsletter-page__grid">
          <div>
            <p className="kicker kicker--lime">WorkChanged News Letter</p>
            <h1>The News Letter worth your attention this week.</h1>
            <p>
              A calm weekly briefing for experienced professionals who need
              evidence, country context and a practical next step.
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
              <span>News Letter format</span>
            </div>
            <p className="kicker">Inside each issue</p>
            <ol>
              <li>
                <span>01</span>
                <strong>The most important change</strong>
              </li>
              <li>
                <span>02</span>
                <strong>Who it affects by role</strong>
              </li>
              <li>
                <span>03</span>
                <strong>One evidence check</strong>
              </li>
              <li>
                <span>04</span>
                <strong>A practical action or checklist</strong>
              </li>
              <li>
                <span>05</span>
                <strong>What was reviewed or updated</strong>
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
            <p>Use profession links to move directly into relevant changes.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Source-linked</h2>
            <p>Follow consequential claims back to evidence.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Finite</h2>
            <p>One edition a week. Five changes. A clear stopping point.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
