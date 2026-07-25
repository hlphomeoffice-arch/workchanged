import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceBadge } from "@/components/evidence-badge";
import { NewsletterForm } from "@/components/newsletter-form";
import { ReadingProgress } from "@/components/reading-progress";
import { ReviewUpdateNotice } from "@/components/review-update-notice";
import { stories } from "@/lib/content";

const story = stories[0];

export const metadata: Metadata = {
  title: "Google renamed Gemini Alpha to Beta: what changes",
  description:
    "The Gemini Alpha-to-Beta change does not alter Workspace controls, privacy constraints or pricing. Here is what admins need to know.",
  alternates: {
    canonical: "/today/gemini-alpha-is-now-beta",
  },
  openGraph: {
    type: "article",
    title: "Google renamed Gemini Alpha to Beta: what changes",
    description:
      "What Workspace administrators need to record, and what does not require action.",
    url: "/today/gemini-alpha-is-now-beta",
    publishedTime: "2026-07-24T08:40:00+01:00",
    modifiedTime: "2026-07-25T12:00:00+01:00",
    images: [
      {
        url: "/images/editorial/gemini-alpha-beta-rename.jpg",
        width: 1536,
        height: 1024,
        alt: "Two workplace technology leads compare a renamed release stage while the underlying route and contract stay unchanged.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google renamed Gemini Alpha to Beta: what changes",
    description:
      "What Workspace administrators need to record, and what does not require action.",
    images: ["/images/editorial/gemini-alpha-beta-rename.jpg"],
  },
};

export default function GeminiBetaStory() {
  const articleJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: story.title,
      datePublished: "2026-07-24T08:40:00+01:00",
      dateModified: "2026-07-25T12:00:00+01:00",
      image:
        "https://workchanged.com/images/editorial/gemini-alpha-beta-rename.jpg",
      author: {
        "@type": "Organization",
        name: "WorkChanged editorial desk",
        url: "https://workchanged.com/about",
      },
      publisher: {
        "@type": "Organization",
        name: "WorkChanged",
        url: "https://workchanged.com",
      },
      mainEntityOfPage:
        "https://workchanged.com/today/gemini-alpha-is-now-beta",
    },
    {
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
          name: "What Changed This Week",
          item: "https://workchanged.com/today",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: story.title,
          item: "https://workchanged.com/today/gemini-alpha-is-now-beta",
        },
      ],
    },
  ];

  return (
    <main id="main">
      <ReadingProgress />
      <ReviewUpdateNotice
        articleKey="gemini-alpha-is-now-beta"
        reviewed="2026-07-25"
      />
      <meta name="workchanged:reviewed" content="2026-07-25" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article className="article-page">
        <header className="article-header">
          <div className="shell article-header__inner">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/today">Today</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Gemini Beta</span>
            </nav>
            <div className="meta-row">
              <EvidenceBadge evidence="Observed" />
              <span>Daily signal</span>
              <span>Operations · IT & AI leads</span>
            </div>
            <h1>{story.title}</h1>
            <p className="article-standfirst">{story.summary}</p>
            <div className="byline-row">
              <div className="avatar" aria-hidden="true">
                WC
              </div>
              <div>
                <strong>WorkChanged editorial desk</strong>
                <span>Source-led research and synthesis</span>
              </div>
              <div className="byline-row__dates">
                <span>Published 24 Jul 2026, 08:40 BST</span>
                <span>3 minute read</span>
              </div>
            </div>
          </div>
        </header>

        <div className="shell article-hero-visual">
          <picture>
            <source
              srcSet="/images/editorial/gemini-alpha-beta-rename-768.webp 768w, /images/editorial/gemini-alpha-beta-rename.webp 1536w"
              sizes="(max-width: 680px) 100vw, (max-width: 1328px) calc(100vw - 48px), 1280px"
              type="image/webp"
            />
            <img
              src="/images/editorial/gemini-alpha-beta-rename.jpg"
              srcSet="/images/editorial/gemini-alpha-beta-rename-768.jpg 768w, /images/editorial/gemini-alpha-beta-rename.jpg 1536w"
              sizes="(max-width: 680px) 100vw, (max-width: 1328px) calc(100vw - 48px), 1280px"
              alt="Two workplace technology leads compare a renamed release stage while the underlying route and contract stay unchanged."
              width={1536}
              height={1024}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <p>
            Original WorkChanged editorial image. The reported change is
            verified against Google&apos;s official Workspace update.
          </p>
        </div>

        <div className="shell article-layout">
          <aside className="article-context">
            <div className="sticky-card">
              <span className="kicker">Article context</span>
              <dl>
                <div>
                  <dt>Evidence</dt>
                  <dd>Official release</dd>
                </div>
                <div>
                  <dt>Horizon</dt>
                  <dd>Now · 0–6 months</dd>
                </div>
                <div>
                  <dt>Action</dt>
                  <dd>No migration</dd>
                </div>
                <div>
                  <dt>Reviewed</dt>
                  <dd>25 Jul 2026</dd>
                </div>
                <div>
                  <dt>Next review</dt>
                  <dd>1 Aug 2026</dd>
                </div>
              </dl>
              <a href="#sources">Jump to sources ↓</a>
            </div>
          </aside>

          <div className="article-body">
            <p className="direct-answer">
              <strong>The direct answer:</strong> Google changed the name of its
              Gemini Alpha programme to Gemini Beta on 22 July. The company says
              the change does not alter customer configuration, privacy
              constraints, pricing, opt-ins or terms. Workspace customers do not
              need to migrate or re-sign anything.
            </p>

            <div className="key-change">
              <span className="kicker">Key change</span>
              <ul>
                <li>The programme name changed from Gemini Alpha to Gemini Beta.</li>
                <li>Existing admin controls and customer opt-ins remain in place.</li>
                <li>Pricing tiers and privacy constraints did not change.</li>
                <li>No new terms need to be signed.</li>
              </ul>
            </div>

            <details className="mobile-toc">
              <summary>On this page</summary>
              <a href="#what-changed">What changed</a>
              <a href="#why-it-matters">Why it matters</a>
              <a href="#what-to-do">What to do</a>
              <a href="#sources">Sources</a>
            </details>

            <h2 id="what-changed">The programme grew up; the contract did not move</h2>
            <p>
              Google says “Beta” better reflects the scale and quality of
              features entering this launch stage. That is the entire
              operational change disclosed in the announcement.
            </p>
            <p>
              The practical mistake would be treating a new label as a new
              governance event. Admin teams should document the naming change,
              but they should not create a migration project or ask users to
              re-consent on the strength of this announcement alone.
            </p>

            <div className="evidence-table" role="region" aria-label="What changed comparison">
              <table>
                <thead>
                  <tr>
                    <th>Area</th>
                    <th>Before</th>
                    <th>After</th>
                    <th>Admin action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Programme name</td>
                    <td>Gemini Alpha</td>
                    <td>Gemini Beta</td>
                    <td>Update internal references</td>
                  </tr>
                  <tr>
                    <td>Configuration</td>
                    <td>Existing controls</td>
                    <td>Existing controls</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>Privacy and pricing</td>
                    <td>Current terms</td>
                    <td>Current terms</td>
                    <td>None from this change</td>
                  </tr>
                  <tr>
                    <td>Customer opt-in</td>
                    <td>Preserved</td>
                    <td>Preserved</td>
                    <td>None</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="why-it-matters">
              Why this still matters for operations and AI leads
            </h2>
            <p>
              Programme names appear in policy pages, enablement material,
              procurement notes and support documentation. Those references
              should be corrected gradually so employees do not assume Alpha and
              Beta are two different environments.
            </p>
            <blockquote>
              Do not let a naming change consume the attention that belongs on
              feature access, data boundaries and user-facing rollout.
            </blockquote>
            <p>
              The more important Workspace changes this month concern how Gemini
              features appear in Docs, Sheets and Meet. Those changes can affect
              real workflows and deserve separate review. This announcement does
              not bundle them into a new programme.
            </p>

            <h2 id="what-to-do">The 15-minute admin response</h2>
            <ol className="action-steps">
              <li>
                <span>01</span>
                <div>
                  <strong>Record the rename</strong>
                  <p>Add a note to the AI service register and link the official announcement.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Update user-facing language when touched</strong>
                  <p>Do not launch a mass documentation project for a label alone.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Keep the current controls</strong>
                  <p>No opt-in, privacy or pricing reset is required by this notice.</p>
                </div>
              </li>
            </ol>

            <div className="sources-box" id="sources">
              <span className="kicker">Primary source</span>
              <h2>Read the evidence</h2>
              <a
                href={story.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Google Workspace Updates: Gemini Alpha is now Gemini Beta
                <span aria-hidden="true"> ↗</span>
              </a>
              <p>
                Accessed 24 July 2026. This article relies on Google&apos;s
                first-party announcement for the operational facts and does not
                infer any additional contract or product change.
              </p>
            </div>

            <div className="article-next">
              <span className="kicker">What to read next</span>
              <h2>Make the change relevant to your work</h2>
              <div>
                <Link href="/roles/operations-projects">
                  Operations & projects role briefing →
                </Link>
                <Link href="/tools/gemini-workspace">
                  Gemini for Workspace tool page →
                </Link>
                <Link href="/standards">How WorkChanged verifies daily signals →</Link>
              </div>
            </div>

            <section
              className="change-log"
              id="change-log"
              aria-labelledby="article-change-log"
            >
              <span className="kicker">Reviewed and updated</span>
              <h2 id="article-change-log">Change log</h2>
              <ol>
                <li>
                  <time dateTime="2026-07-25">25 July 2026</time>
                  <p>
                    Rechecked the first-party announcement and added the next
                    scheduled review date.
                  </p>
                </li>
                <li>
                  <time dateTime="2026-07-24">24 July 2026</time>
                  <p>First publication.</p>
                </li>
              </ol>
            </section>
          </div>

          <aside className="article-action">
            <div className="sticky-card sticky-card--action">
              <span className="kicker">Your next move</span>
              <h3>No migration. Fix the language, then move on.</h3>
              <p>
                Follow Operations to get changes that actually alter the
                workflow.
              </p>
              <Link className="button button--primary" href="/roles/operations-projects">
                Follow this role
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="article-newsletter">
        <div className="shell article-newsletter__grid">
          <div>
            <span className="kicker kicker--lime">What Changed at Work</span>
            <h2>Five changes worth your attention. One focused briefing.</h2>
          </div>
          <NewsletterForm dark compact topic="AI and workplace tools" />
        </div>
      </section>
    </main>
  );
}
