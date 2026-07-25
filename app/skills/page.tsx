import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/lib/editorial/articles";
import { skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Skill Moves",
  description:
    "Practical skills for professionals working with changing AI tools and workflows.",
  alternates: { canonical: "/skills" },
  openGraph: {
    type: "website",
    title: "Skills That Are Changing",
    description:
      "Practical learning decisions for experienced professionals working through change.",
    url: "/skills",
    images: ["/og-work-changed.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills That Are Changing",
    description:
      "Practical learning decisions for experienced professionals working through change.",
    images: ["/og-work-changed.jpg"],
  },
};

export default function SkillsPage() {
  const skillGuides = articles
    .filter((article) => article.pillar === "skills-that-are-changing")
    .slice(0, 6);

  return (
    <main id="main">
      <PageHero
        kicker="Skill Moves"
        title="Build the capability that outlasts the tool"
        text="Short, practical learning moves for using AI with more judgment, evidence and control."
        meta="6 launch skills · Designed for real work"
      />
      <section className="section section--cloud">
        <div className="shell">
          <div className="skills-directory">
            {skills.map((skill, index) => (
              <article className="skill-directory-card" key={skill.title}>
                <div>
                  <span className="skill-directory-card__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="kicker">{skill.level}</span>
                </div>
                <h2>{skill.title}</h2>
                <p>{skill.text}</p>
                <div className="skill-directory-card__action">
                  <span>30-minute move</span>
                  <strong>{skill.action}</strong>
                </div>
                <Link href="/newsletter">
                  Get the next skill move →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      {skillGuides.length > 0 && (
        <section className="section section--paper">
          <div className="shell">
            <SectionHeading
              kicker="Skills That Are Changing"
              title="Choose learning with a real work outcome"
              text="Compare rising skills, credible credentials and practical learning routes before committing time or money."
              href="/topics/skills-that-are-changing"
              linkLabel="Open the complete skills pillar"
            />
            <div className="article-grid">
              {skillGuides.map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
