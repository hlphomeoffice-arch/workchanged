import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Skill Moves",
  description:
    "Practical skills for professionals working with changing AI tools and workflows.",
};

export default function SkillsPage() {
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
    </main>
  );
}
