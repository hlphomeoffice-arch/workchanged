import type { Pillar } from "./types";

export const pillars: Pillar[] = [
  {
    slug: "ai-and-your-job",
    name: "AI and Your Job",
    shortName: "AI and your job",
    promise: "See which tasks are changing before you change direction.",
    description:
      "Task-level effects, safe tool use, role redesign and evidence about job exposure without false certainty.",
    color: "rust",
  },
  {
    slug: "skills-that-are-changing",
    name: "Skills That Are Changing",
    shortName: "Skills",
    promise: "Choose learning that connects to work you can actually do.",
    description:
      "Rising capabilities, declining tasks, credible credentials and practical learning paths for working adults.",
    color: "moss",
  },
  {
    slug: "career-moves",
    name: "Career Moves",
    shortName: "Career moves",
    promise: "Make a move without discarding the experience you already earned.",
    description:
      "Career switches, internal moves, transferable skills, plateaus and the economics of changing direction.",
    color: "plum",
  },
  {
    slug: "job-security-and-hiring",
    name: "Job Security and Hiring",
    shortName: "Job security",
    promise: "Read the signals calmly and prepare before a decision is forced.",
    description:
      "Redundancy preparation, hiring conditions, job-search evidence, pay and practical contingency plans.",
    color: "ochre",
  },
  {
    slug: "workplace-rules-and-rights",
    name: "Workplace Rules and Rights",
    shortName: "Rules and rights",
    promise: "Know which rules apply where you work and what you can ask for.",
    description:
      "Country-specific guidance on flexibility, return-to-office changes, transparency and employment processes.",
    color: "navy",
  },
  {
    slug: "managing-changed-work",
    name: "Managing Changed Work",
    shortName: "Managing change",
    promise: "Change the work without losing trust, fairness or accountability.",
    description:
      "Practical guidance for team leaders on AI adoption, work design, performance, reskilling and communication.",
    color: "teal",
  },
  {
    slug: "how-work-actually-works",
    name: "How Work Actually Works",
    shortName: "What works",
    promise: "Separate workplace fashion from evidence about what helps.",
    description:
      "Evidence reviews on hybrid work, productivity, four-day weeks, surveillance, culture and new tools.",
    color: "blue",
  },
  {
    slug: "profession-trackers",
    name: "Profession Trackers",
    shortName: "Professions",
    promise: "Follow the changes that reach your role, month by month.",
    description:
      "Living briefings for accounting, marketing, project management and other large occupational groups.",
    color: "slate",
  },
];

export function getPillar(slug: string) {
  return pillars.find((pillar) => pillar.slug === slug);
}
