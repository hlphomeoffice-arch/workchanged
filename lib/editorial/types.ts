export type PillarSlug =
  | "ai-and-your-job"
  | "skills-that-are-changing"
  | "career-moves"
  | "job-security-and-hiring"
  | "workplace-rules-and-rights"
  | "managing-changed-work"
  | "how-work-actually-works"
  | "profession-trackers";

export type Jurisdiction =
  | "Global"
  | "United Kingdom"
  | "United States"
  | "United Kingdom and United States"
  | "Jurisdiction varies";

export type PortfolioType =
  | "Evergreen decision page"
  | "Change tracker"
  | "Timely interpretation";

export type EditorialFormat =
  | "Guide"
  | "Evidence Check"
  | "Role Impact"
  | "Checklist"
  | "Decision Framework"
  | "Change Tracker";

export type EvidenceStrength = "Strong" | "Moderate" | "Mixed" | "Emerging";

export type ArticleSource = {
  publisher: string;
  title: string;
  url: string;
  published: string;
  type:
    | "Official guidance"
    | "Official statistics"
    | "Original research"
    | "Primary report"
    | "Regulator guidance";
  note?: string;
};

export type ArticleSection = {
  id: string;
  heading: string;
  body: string[];
  bullets?: string[];
  note?: string;
};

export type ChangeLogEntry = {
  date: string;
  note: string;
};

export type Article = {
  number: number;
  slug: string;
  title: string;
  shortTitle: string;
  pillar: PillarSlug;
  portfolio: PortfolioType;
  format: EditorialFormat;
  searchIntent: string;
  jurisdiction: Jurisdiction;
  evidenceStrength: EvidenceStrength;
  published: string;
  reviewed: string;
  nextReview: string;
  readingMinutes: number;
  dek: string;
  answerFirst: string;
  affects: string[];
  keyTakeaways: string[];
  sections: ArticleSection[];
  actions: string[];
  sources: ArticleSource[];
  changeLog: ChangeLogEntry[];
  relatedSlugs: string[];
  professionSlugs: string[];
  imageAlt: string;
};

export type Pillar = {
  slug: PillarSlug;
  name: string;
  shortName: string;
  promise: string;
  description: string;
  color: string;
};
