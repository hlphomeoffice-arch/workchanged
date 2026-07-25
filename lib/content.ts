export type Evidence =
  | "Observed"
  | "Tested"
  | "Emerging"
  | "Forecast"
  | "Claim"
  | "Method";

export type RoleTask = {
  name: string;
  change: string;
  evidence: Evidence;
  human: string;
  action: string;
};

export type Role = {
  slug: string;
  title: string;
  group: string;
  short: string;
  signal: string;
  reviewed: string;
  workflows: number;
  taskCount: number;
  nextSkill: string;
  tasks: RoleTask[];
  toolSlugs: string[];
};

export type Tool = {
  slug: string;
  name: string;
  company: string;
  category: string;
  evidence: Evidence;
  reviewed: string;
  summary: string;
  bestFor: string;
  watch: string;
  sourceUrl: string;
  sourceLabel: string;
};

export type Story = {
  slug: string;
  href: string;
  type: "Daily signal" | "Role brief" | "Tool note" | "Work signal" | "Method";
  evidence: Evidence;
  date: string;
  time?: string;
  title: string;
  summary: string;
  roles: string[];
  visual: "route" | "blocks" | "bars" | "rings" | "steps" | "document";
  sourceUrl?: string;
  sourceLabel?: string;
};

export const roles: Role[] = [
  {
    slug: "marketing-content",
    title: "Marketing & content",
    group: "Growth",
    short:
      "Drafting is getting cheaper. Distinctive judgment, evidence and distribution are becoming more valuable.",
    signal:
      "Google Docs can now match writing style and document format across more languages.",
    reviewed: "25 Jul 2026",
    workflows: 8,
    taskCount: 14,
    nextSkill: "Evidence-led editing",
    toolSlugs: ["gemini-workspace", "chatgpt-team", "claude"],
    tasks: [
      {
        name: "Build a campaign brief",
        change: "Faster synthesis from research, email and prior plans",
        evidence: "Observed",
        human: "Choose the real customer tension and commercial priority",
        action: "Compare an AI draft with one successful past brief",
      },
      {
        name: "Create first drafts",
        change: "Low-cost, on-brand starting points",
        evidence: "Observed",
        human: "Original reporting, taste and accountability",
        action: "Measure edit burden, not word count",
      },
      {
        name: "Repurpose content",
        change: "High-volume format adaptation",
        evidence: "Emerging",
        human: "Protect the argument from becoming generic",
        action: "Use a claim checklist before publishing",
      },
    ],
  },
  {
    slug: "sales-success",
    title: "Sales & customer success",
    group: "Revenue",
    short:
      "Account research and follow-up are accelerating. Trust, diagnosis and negotiation still decide the outcome.",
    signal:
      "AI can prepare a call faster, but unsupported company facts remain a costly failure mode.",
    reviewed: "25 Jul 2026",
    workflows: 7,
    taskCount: 12,
    nextSkill: "Commercial verification",
    toolSlugs: ["microsoft-365-copilot", "chatgpt-team", "claude"],
    tasks: [
      {
        name: "Research an account",
        change: "Faster public-source synthesis",
        evidence: "Emerging",
        human: "Separate useful signal from invented certainty",
        action: "Require a source beside every account claim",
      },
      {
        name: "Write a proposal",
        change: "Quicker structure and tailoring",
        evidence: "Observed",
        human: "Own the commercial promise and proof",
        action: "Lock factual fields before drafting prose",
      },
      {
        name: "Summarise a call",
        change: "Automatic decisions, risks and actions",
        evidence: "Observed",
        human: "Correct uncertainty and relationship nuance",
        action: "Check every owner and deadline against the recording",
      },
    ],
  },
  {
    slug: "operations-projects",
    title: "Operations & projects",
    group: "Delivery",
    short:
      "Coordination work is becoming queryable. Exception handling and clear ownership matter more, not less.",
    signal:
      "Copilot can work across meetings, mail and documents; the quality of access rules now shapes the answer.",
    reviewed: "25 Jul 2026",
    workflows: 10,
    taskCount: 16,
    nextSkill: "Workflow design",
    toolSlugs: ["microsoft-365-copilot", "gemini-workspace", "notion-ai"],
    tasks: [
      {
        name: "Create a status report",
        change: "Automatic synthesis across updates",
        evidence: "Observed",
        human: "Name the actual risk and force a decision",
        action: "Separate extracted facts from your recommendation",
      },
      {
        name: "Maintain an action register",
        change: "Meeting actions captured automatically",
        evidence: "Observed",
        human: "Resolve ambiguous owners and false commitments",
        action: "Confirm actions before they enter the plan",
      },
      {
        name: "Write an SOP",
        change: "Draft steps from notes and recordings",
        evidence: "Emerging",
        human: "Test edge cases and operating reality",
        action: "Run the SOP with someone new to the task",
      },
    ],
  },
  {
    slug: "hr-recruiting",
    title: "HR & recruiting",
    group: "People",
    short:
      "Administration can shrink. Fairness, consent, explanation and human judgment become the centre of the role.",
    signal:
      "Skill inference is reaching more Microsoft 365 users, raising new consent and profile-governance questions.",
    reviewed: "25 Jul 2026",
    workflows: 6,
    taskCount: 13,
    nextSkill: "Accountable decision design",
    toolSlugs: ["microsoft-365-copilot", "gemini-workspace", "chatgpt-team"],
    tasks: [
      {
        name: "Draft a job description",
        change: "Rapid first drafts from role context",
        evidence: "Observed",
        human: "Define the real requirements and remove exclusionary language",
        action: "Compare the draft with actual high-performing work",
      },
      {
        name: "Screen applications",
        change: "Classification at scale",
        evidence: "Emerging",
        human: "Own criteria, exceptions and adverse-impact checks",
        action: "Do not automate rejection without auditable review",
      },
      {
        name: "Summarise interviews",
        change: "Transcription and structured notes",
        evidence: "Observed",
        human: "Protect consent and preserve candidate uncertainty",
        action: "Check the summary against the source transcript",
      },
    ],
  },
  {
    slug: "finance-accounting",
    title: "Finance & accounting",
    group: "Control",
    short:
      "Narrative and anomaly detection are moving faster. Traceability and professional responsibility remain non-negotiable.",
    signal:
      "Spreadsheet AI can classify and explain at scale; generated cells still need a clear audit trail.",
    reviewed: "25 Jul 2026",
    workflows: 5,
    taskCount: 11,
    nextSkill: "AI audit trails",
    toolSlugs: ["microsoft-365-copilot", "gemini-workspace", "chatgpt-team"],
    tasks: [
      {
        name: "Explain a variance",
        change: "Faster narrative from structured data",
        evidence: "Emerging",
        human: "Validate drivers and materiality",
        action: "Tie every sentence back to a cell or source",
      },
      {
        name: "Reconcile transactions",
        change: "Better clustering and exception flags",
        evidence: "Emerging",
        human: "Resolve ambiguous exceptions and approve treatment",
        action: "Test against a known error set",
      },
      {
        name: "Prepare management reporting",
        change: "Automated first-pass commentary",
        evidence: "Observed",
        human: "Choose what leadership must decide",
        action: "Separate reporting from recommendation",
      },
    ],
  },
  {
    slug: "support-admin",
    title: "Support & administration",
    group: "Service",
    short:
      "Routine triage and drafting are automating quickly. Escalation judgment and emotional accuracy become differentiators.",
    signal:
      "AI assistance is strongest in structured service work, but quality falls when policy exceptions are hidden.",
    reviewed: "25 Jul 2026",
    workflows: 9,
    taskCount: 15,
    nextSkill: "Exception handling",
    toolSlugs: ["microsoft-365-copilot", "gemini-workspace", "notion-ai"],
    tasks: [
      {
        name: "Triage a ticket",
        change: "Intent and urgency classification",
        evidence: "Observed",
        human: "Catch vulnerable customers and unusual context",
        action: "Design an explicit human-escalation threshold",
      },
      {
        name: "Draft a reply",
        change: "Fast policy-grounded response",
        evidence: "Observed",
        human: "Make the tone honest and proportionate",
        action: "Measure reopen rate and correction burden",
      },
      {
        name: "Manage a calendar",
        change: "Natural-language search and preparation",
        evidence: "Observed",
        human: "Balance priorities, relationships and confidentiality",
        action: "Restrict delegated access before using assistants",
      },
    ],
  },
];

export const tools: Tool[] = [
  {
    slug: "microsoft-365-copilot",
    name: "Microsoft 365 Copilot",
    company: "Microsoft",
    category: "Work suite",
    evidence: "Observed",
    reviewed: "24 Jul 2026",
    summary:
      "Deep access to meetings, mail, files and people data makes it useful, and makes governance the first question.",
    bestFor: "Teams already working inside Microsoft 365",
    watch: "Permissions, source traceability and uneven feature rollout",
    sourceUrl:
      "https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes",
    sourceLabel: "Microsoft 365 Copilot release notes",
  },
  {
    slug: "gemini-workspace",
    name: "Gemini for Workspace",
    company: "Google",
    category: "Work suite",
    evidence: "Observed",
    reviewed: "24 Jul 2026",
    summary:
      "Increasingly embedded in Docs, Sheets, Drive and Meet, with admin controls that matter as much as the writing features.",
    bestFor: "Google Workspace organisations",
    watch: "Smart-feature settings, rollout windows and source fidelity",
    sourceUrl: "https://workspaceupdates.googleblog.com/2026/07/",
    sourceLabel: "Google Workspace Updates",
  },
  {
    slug: "chatgpt-team",
    name: "ChatGPT",
    company: "OpenAI",
    category: "General assistant",
    evidence: "Observed",
    reviewed: "21 Jul 2026",
    summary:
      "Flexible across research, drafting and analysis, but the workflow needs deliberate context and verification.",
    bestFor: "Cross-functional professionals who need a flexible workbench",
    watch: "Plan controls, sensitive data and unsupported factual claims",
    sourceUrl: "https://openai.com/business/",
    sourceLabel: "OpenAI business product information",
  },
  {
    slug: "claude",
    name: "Claude",
    company: "Anthropic",
    category: "General assistant",
    evidence: "Observed",
    reviewed: "24 Jul 2026",
    summary:
      "Strong for document-heavy and structured work; economic research is useful but represents Claude usage, not the whole economy.",
    bestFor: "Long-document analysis and structured knowledge work",
    watch: "Vendor-data generalisation and workflow-specific accuracy",
    sourceUrl:
      "https://www.anthropic.com/research/economic-index-june-2026-report",
    sourceLabel: "Anthropic Economic Index, June 2026",
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    company: "Notion",
    category: "Knowledge base",
    evidence: "Observed",
    reviewed: "18 Jul 2026",
    summary:
      "Most useful when the team's knowledge is already structured and current.",
    bestFor: "Teams with an established Notion workspace",
    watch: "Stale source pages and permission inheritance",
    sourceUrl: "https://www.notion.com/help/guides/category/ai",
    sourceLabel: "Notion AI guides",
  },
  {
    slug: "meeting-notes-method",
    name: "Meeting-note assistants",
    company: "Tool Lab method",
    category: "Meeting intelligence",
    evidence: "Method",
    reviewed: "24 Jul 2026",
    summary:
      "Our test protocol scores action ownership, uncertainty, omissions, consent and correction burden, not transcription alone.",
    bestFor: "Teams comparing Otter, Teams, Meet and similar tools",
    watch: "Consent, retention and confidently wrong action items",
    sourceUrl: "/standards#tool-lab",
    sourceLabel: "WorkChanged Tool Lab method",
  },
];

export const stories: Story[] = [
  {
    slug: "gemini-alpha-is-now-beta",
    href: "/today/gemini-alpha-is-now-beta",
    type: "Daily signal",
    evidence: "Observed",
    date: "24 Jul 2026",
    time: "08:40 BST",
    title:
      "Google renamed Gemini Alpha to Beta. Your controls, privacy terms and pricing did not change.",
    summary:
      "For Workspace admins, this is a naming change, not a migration. Keep the existing opt-ins and spend your attention on the rollout details that affect users.",
    roles: ["Operations", "IT & AI leads"],
    visual: "document",
    sourceUrl:
      "https://workspaceupdates.googleblog.com/2026/07/gemini-alpha-is-now-gemini-beta.html",
    sourceLabel: "Google Workspace Updates, 22 Jul 2026",
  },
  {
    slug: "copilot-ai-watermarks",
    href: "/today#copilot-ai-watermarks",
    type: "Daily signal",
    evidence: "Observed",
    date: "24 Jul 2026",
    title:
      "Microsoft 365 can watermark AI-generated video and audio. Comms teams need a policy before a crisis.",
    summary:
      "The setting improves transparency, but only when organisations decide what must be marked and who is accountable.",
    roles: ["Marketing", "Operations"],
    visual: "blocks",
    sourceUrl:
      "https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes",
    sourceLabel: "Microsoft 365 Copilot release notes, 1 Jul 2026",
  },
  {
    slug: "gemini-docs-language-expansion",
    href: "/today#gemini-docs-language-expansion",
    type: "Tool note",
    evidence: "Observed",
    date: "23 Jul 2026",
    title:
      "Gemini's writing and format tools reached 11 more languages. Local review is still the quality gate.",
    summary:
      "Translation breadth is not cultural accuracy. Global teams should test tone, terminology and source use before scaling.",
    roles: ["Marketing", "Support"],
    visual: "route",
    sourceUrl: "https://workspaceupdates.googleblog.com/2026/07/",
    sourceLabel: "Google Workspace Updates, 16 Jul 2026",
  },
  {
    slug: "ai-exposure-is-not-job-loss",
    href: "/guides/ai-job-loss-predictions-evidence",
    type: "Work signal",
    evidence: "Observed",
    date: "22 Jul 2026",
    title:
      "One in four jobs has some GenAI exposure. That is not the same as one in four jobs disappearing.",
    summary:
      "The ILO's task-level index points to transformation as the likelier outcome and shows why clerical work deserves immediate attention.",
    roles: ["All roles", "Leaders"],
    visual: "bars",
    sourceUrl:
      "https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure",
    sourceLabel: "ILO Working Paper 140",
  },
  {
    slug: "organisations-adopt-ai-jobs-uneven",
    href: "/signals#organisations-adopt-ai-jobs-uneven",
    type: "Work signal",
    evidence: "Observed",
    date: "21 Jul 2026",
    title:
      "AI adoption reached 88% of surveyed organisations. Broad job losses still do not show up in the aggregate data.",
    summary:
      "Adoption, useful deployment and workforce reduction are different measures. Treat them separately.",
    roles: ["All roles", "Leaders"],
    visual: "rings",
    sourceUrl:
      "https://hai.stanford.edu/ai-index/2026-ai-index-report/economy",
    sourceLabel: "Stanford HAI 2026 AI Index",
  },
  {
    slug: "meeting-note-test-method",
    href: "/tools/meeting-notes-method",
    type: "Method",
    evidence: "Method",
    date: "20 Jul 2026",
    title:
      "A transcript is not a useful meeting record. This is how Tool Lab will test the difference.",
    summary:
      "Our protocol checks missed uncertainty, incorrect owners, false commitments, consent and the time needed to fix the output.",
    roles: ["Operations", "Sales"],
    visual: "steps",
  },
];

export const skills = [
  {
    title: "Verification under pressure",
    level: "Core skill",
    text: "Check a consequential AI output quickly without pretending every sentence needs the same scrutiny.",
    action: "Use the seven-minute source check",
  },
  {
    title: "Human review gates",
    level: "Workflow skill",
    text: "Decide where a person must approve, where sampling is enough and where automation should stop.",
    action: "Map one decision boundary",
  },
  {
    title: "Safe context design",
    level: "Risk skill",
    text: "Give a tool enough context to be useful without leaking customer, employee or commercial data.",
    action: "Classify your inputs",
  },
  {
    title: "Baseline testing",
    level: "Tool skill",
    text: "Compare AI-assisted work with a human-only baseline using accuracy, time and edit burden.",
    action: "Run a five-case test",
  },
  {
    title: "Exception handling",
    level: "Human skill",
    text: "Recognise the unusual case that a confident workflow is likely to flatten or miss.",
    action: "Build an escalation rule",
  },
  {
    title: "Decision explanation",
    level: "Leadership skill",
    text: "Explain where AI contributed, what evidence was used and who remains accountable.",
    action: "Write the audit note",
  },
];

export const signalStats = [
  {
    value: "1 in 4",
    label: "jobs worldwide with some GenAI exposure",
    note: "Exposure is not displacement.",
    source: "ILO, 2025",
  },
  {
    value: "88%",
    label: "of surveyed organisations using AI",
    note: "Agent deployment remains early.",
    source: "Stanford AI Index, 2026",
  },
  {
    value: "3.3%",
    label: "of global employment in the ILO's highest exposure band",
    note: "Impacts differ sharply by gender and income.",
    source: "ILO, 2025",
  },
];

export const allSearchItems = [
  ...stories.map((story) => ({
    title: story.title,
    description: story.summary,
    href: story.href,
    kind: story.type,
  })),
  ...roles.map((role) => ({
    title: role.title,
    description: role.short,
    href: `/roles/${role.slug}`,
    kind: "Role hub",
  })),
  ...tools.map((tool) => ({
    title: tool.name,
    description: tool.summary,
    href: `/tools/${tool.slug}`,
    kind: "Tool page",
  })),
];

export function getRole(slug: string) {
  return roles.find((role) => role.slug === slug);
}

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
