import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceBadge } from "@/components/evidence-badge";
import { PageHero } from "@/components/page-hero";
import { StoryCard } from "@/components/story-card";
import { stories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Today",
  description:
    "The AI-at-work changes that matter today, verified and translated into role-specific action.",
};

export default function TodayPage() {
  const lead = stories[0];

  return (
    <main id="main">
      <PageHero
        kicker="The Daily Shift"
        title="What changed today"
        text="A calm, verified briefing on the AI developments that alter real work — and the launch noise you can safely ignore."
        meta="Friday 24 July 2026 · Updated 08:40 BST"
      />

      <section className="section section--paper">
        <div className="shell">
          <div className="daily-brief-header">
            <div>
              <span className="kicker">Lead change</span>
              <h2>{lead.title}</h2>
              <p>{lead.summary}</p>
            </div>
            <div className="daily-decision">
              <EvidenceBadge evidence={lead.evidence} />
              <div>
                <span>Who is affected</span>
                <strong>Workspace admins and AI leads</strong>
              </div>
              <div>
                <span>Do this now</span>
                <strong>No migration action. Keep existing controls.</strong>
              </div>
              <Link className="button button--primary" href={lead.href}>
                Read the source-backed note
              </Link>
            </div>
          </div>

          <div className="briefing-index">
            <div className="briefing-index__label">
              <span>Today&apos;s index</span>
              <strong>06</strong>
            </div>
            <div>
              {stories.map((story, index) => (
                <a className="briefing-line" href={`#${story.slug}`} key={story.slug}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{story.title}</strong>
                  <EvidenceBadge evidence={story.evidence} />
                </a>
              ))}
            </div>
          </div>

          <div className="today-list">
            {stories.map((story) => (
              <div id={story.slug} key={story.slug}>
                <StoryCard story={story} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section end-action">
        <div className="shell end-action__inner">
          <div>
            <p className="kicker kicker--light">Make it relevant</p>
            <h2>News becomes useful when it reaches your role.</h2>
          </div>
          <Link className="button button--lime" href="/roles">
            Choose your role
          </Link>
        </div>
      </section>
    </main>
  );
}
