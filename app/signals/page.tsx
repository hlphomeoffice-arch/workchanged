import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceBadge } from "@/components/evidence-badge";
import { PageHero } from "@/components/page-hero";
import { signalStats, stories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work Signals",
  description:
    "Evidence on AI adoption, jobs, productivity, policy and how work is actually changing.",
};

export default function SignalsPage() {
  return (
    <main id="main">
      <PageHero
        kicker="Work Signals"
        title="Evidence before prediction"
        text="Hiring, adoption, productivity, policy and worker experience — with the measurement limits shown."
        meta="ILO · OECD · Stanford HAI · Primary datasets"
      />
      <section className="section signals-directory">
        <div className="shell">
          <div className="signal-stat-grid">
            {signalStats.map((stat) => (
              <article className="signal-stat" key={stat.value + stat.label}>
                <strong>{stat.value}</strong>
                <h2>{stat.label}</h2>
                <p>{stat.note}</p>
                <span>{stat.source}</span>
              </article>
            ))}
          </div>
          <div className="signal-list">
            {stories
              .filter((story) => story.type === "Work signal")
              .map((story) => (
                <article id={story.slug} key={story.slug}>
                  <div>
                    <EvidenceBadge evidence={story.evidence} />
                    <span>{story.date}</span>
                  </div>
                  <h2>
                    <Link href={story.href}>{story.title}</Link>
                  </h2>
                  <p>{story.summary}</p>
                  <Link href={story.href}>Read the evidence note →</Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
