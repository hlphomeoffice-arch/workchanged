import type { Article, ArticleSource } from "./types";

const PUBLISHED = "2026-07-25";

type ArticleDraft = Omit<Article, "published" | "reviewed" | "changeLog">;

function completeArticle(draft: ArticleDraft): Article {
  return {
    published: PUBLISHED,
    reviewed: PUBLISHED,
    changeLog: [
      {
        date: PUBLISHED,
        note: "First publication, checked against the listed primary and official sources.",
      },
    ],
    ...draft,
  };
}

const source = {
  iloExposure: {
    publisher: "International Labour Organization",
    title: "Generative AI and Jobs: A Refined Global Index of Occupational Exposure",
    url: "https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure",
    published: "20 May 2025",
    type: "Original research",
    note: "Task-level exposure index covering occupations and countries. Exposure is not a forecast of job loss.",
  },
  iloIndicators: {
    publisher: "International Labour Organization",
    title: "Workers’ exposure to AI: What indicators tell us – and what they don’t",
    url: "https://www.ilo.org/publications/workers%E2%80%99-exposure-ai-what-indicators-tell-us-%E2%80%93-and-what-they-don%E2%80%99t",
    published: "17 April 2026",
    type: "Original research",
    note: "Explains why capability-based exposure measures cannot predict displacement, wages or realised adoption.",
  },
  oecdEmployment: {
    publisher: "Organisation for Economic Co-operation and Development",
    title: "OECD Employment Outlook 2023: Artificial Intelligence and the Labour Market",
    url: "https://www.oecd.org/en/publications/oecd-employment-outlook-2023_08785bba-en.html",
    published: "11 July 2023",
    type: "Primary report",
    note: "Cross-country evidence on AI exposure, employment, job quality, training and social dialogue.",
  },
  wefJobs: {
    publisher: "World Economic Forum",
    title: "The Future of Jobs Report 2025",
    url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
    published: "7 January 2025",
    type: "Primary report",
    note: "Global employer survey and scenario to 2030. Employer expectations are not outcomes for an individual worker.",
  },
  onet: {
    publisher: "O*NET Resource Center, U.S. Department of Labor",
    title: "O*NET 30.3 Database",
    url: "https://www.onetcenter.org/database.html",
    published: "Current database, accessed 25 July 2026",
    type: "Official statistics",
    note: "Quarterly updated U.S. occupational data covering tasks, activities, skills and employer-posting technology signals.",
  },
  blsProjections: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Occupational projections and worker characteristics",
    url: "https://www.bls.gov/emp/tables/occupational-projections-and-characteristics.htm",
    published: "28 August 2025",
    type: "Official statistics",
    note: "U.S. projections, openings, pay and typical entry requirements. Projections are scenarios, not promises.",
  },
  blsAi: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Artificial intelligence, information technology, and employment, 2024–34",
    url: "https://www.bls.gov/opub/ted/2026/artificial-intelligence-information-technology-and-employment-2024-34.htm",
    published: "16 July 2026",
    type: "Official statistics",
    note: "Official U.S. interpretation of where AI may support growth or dampen labour demand.",
  },
  blsDeclining: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Fastest declining occupations",
    url: "https://www.bls.gov/emp/tables/fastest-declining-occupations.htm",
    published: "28 August 2025",
    type: "Official statistics",
  },
  nistRmf: {
    publisher: "National Institute of Standards and Technology",
    title: "Artificial Intelligence Risk Management Framework (AI RMF 1.0)",
    url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10",
    published: "26 January 2023",
    type: "Primary report",
    note: "Voluntary cross-sector framework organised around governing, mapping, measuring and managing AI risk.",
  },
  nistGenAi: {
    publisher: "National Institute of Standards and Technology",
    title: "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile",
    url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
    published: "26 July 2024",
    type: "Primary report",
    note: "Cross-sector profile covering generative AI risks and suggested risk-management actions.",
  },
  nistAgents: {
    publisher: "National Institute of Standards and Technology",
    title:
      "Summary Analysis of Responses to the Request for Information Regarding Security Considerations for AI Agents",
    url: "https://www.nist.gov/publications/summary-analysis-responses-request-information-regarding-security-considerations-ai",
    published: "18 May 2026",
    type: "Primary report",
    note: "A synthesis of consultation responses, not settled evidence of agent performance or workplace adoption.",
  },
  ncscSecureAi: {
    publisher: "UK National Cyber Security Centre",
    title: "Guidelines for secure AI system development",
    url: "https://www.ncsc.gov.uk/collection/guidelines-secure-ai-system-development/guidelines",
    published: "27 November 2023",
    type: "Official guidance",
  },
  icoAi: {
    publisher: "Information Commissioner's Office",
    title: "Guidance on AI and data protection",
    url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/about-this-guidance/",
    published: "Current regulator guidance, accessed 25 July 2026",
    type: "Regulator guidance",
    note: "UK data-protection guidance for organisations using AI to process personal data.",
  },
  govAiPlaybook: {
    publisher: "Government Digital Service",
    title: "AI Playbook for the UK Government",
    url: "https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government",
    published: "10 February 2025",
    type: "Official guidance",
    note: "Public-sector guidance with practical principles for safe, effective and secure AI use.",
  },
  dsitSkills: {
    publisher: "UK Department for Science, Innovation and Technology",
    title: "AI Labour Market Survey 2025 report",
    url: "https://www.gov.uk/government/publications/ai-labour-market-survey-2025-report",
    published: "28 January 2026",
    type: "Primary report",
    note: "Survey and interviews about the specialist UK AI labour market. It does not represent every employer or office role.",
  },
  dsitCapabilities: {
    publisher: "UK Department for Science, Innovation and Technology and AI Security Institute",
    title: "Assessment of AI capabilities and the impact on the UK labour market",
    url: "https://www.gov.uk/government/publications/assessment-of-ai-capabilities-and-the-impact-on-the-uk-labour-market",
    published: "28 January 2026",
    type: "Primary report",
    note: "High-level evidence assessment that makes uncertainty about capability and labour effects explicit.",
  },
  skillsEngland: {
    publisher: "Skills England",
    title: "Skills England annual skills report 2026",
    url: "https://www.gov.uk/government/publications/skills-england-annual-skills-report-and-sectoral-skills-needs-assessments-2026/skills-england-annual-skills-report-2026",
    published: "1 June 2026, updated 6 July 2026",
    type: "Primary report",
    note: "England-specific assessment of demand, priority occupations and training pathways.",
  },
  employerSkills: {
    publisher: "Department for Education and Skills England",
    title: "Employer skills survey 2024: UK findings",
    url: "https://www.gov.uk/government/publications/employer-skills-survey-2024-uk-findings",
    published: "27 November 2025, updated 18 June 2026",
    type: "Original research",
    note: "Evidence from more than 72,000 UK employer establishments on skills needs and training.",
  },
  ofqualRegister: {
    publisher: "GOV.UK and Ofqual",
    title: "Find a regulated qualification",
    url: "https://www.gov.uk/find-a-regulated-qualification",
    published: "Current service, accessed 25 July 2026",
    type: "Regulator guidance",
    note: "Official register for regulated qualifications in England and Northern Ireland, with links for Wales and Scotland.",
  },
  blsEducation: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Education pays, 2024",
    url: "https://www.bls.gov/careeroutlook/2025/data-on-display/education-pays.htm",
    published: "May 2025",
    type: "Official statistics",
    note: "Population-level U.S. earnings and unemployment by attainment. It does not estimate the return from a particular course.",
  },
  oecdEducation: {
    publisher: "Organisation for Economic Co-operation and Development",
    title: "Education at a Glance 2025",
    url: "https://www.oecd.org/en/publications/education-at-a-glance-2025_1c0d9c79-en.html",
    published: "9 September 2025",
    type: "Primary report",
    note: "Cross-country indicators on education, adult learning and labour-market outcomes.",
  },
  nberWork: {
    publisher: "National Bureau of Economic Research",
    title: "Still Waters, Rapid Currents: Early Labor Market Transformation under Generative AI",
    url: "https://www.nber.org/papers/w33777",
    published: "May 2025, revised March 2026",
    type: "Original research",
    note: "Administrative and survey evidence from Denmark. Results should not be generalised to every country or occupation.",
  },
  stanfordWork: {
    publisher: "Stanford Graduate School of Business",
    title: "Generative AI at Work",
    url: "https://www.gsb.stanford.edu/faculty-research/publications/generative-ai-work",
    published: "May 2025",
    type: "Original research",
    note: "Study of 5,172 customer-support agents at one company, published in the Quarterly Journal of Economics.",
  },
} satisfies Record<string, ArticleSource>;

export const aiAndSkillsArticles: Article[] = [
  completeArticle({
    number: 1,
    slug: "will-ai-replace-my-job",
    title: "Will AI Replace My Job? A Task-by-Task Risk Test",
    shortTitle: "Will AI replace my job?",
    pillar: "ai-and-your-job",
    portfolio: "Evergreen decision page",
    format: "Decision Framework",
    searchIntent: "Assess personal job risk by examining the tasks that make up a current role.",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    readingMinutes: 11,
    dek: "A calm diagnostic for separating exposed tasks from the judgement, relationships and accountability that still make a role valuable.",
    answerFirst:
      "AI is more likely to change a bundle of tasks than erase your whole job at once. Treat risk as higher when much of your week is spent producing standard digital outputs from predictable inputs, and lower when the work depends on accountable judgement, difficult relationships, physical context or exception handling. The useful response is to map your real week, test tools safely and strengthen the tasks that remain valuable around the technology.",
    affects: [
      "Mid-career professionals whose work is mainly carried out through documents, systems or messages",
      "People in clerical, administrative, analytical, technical and creative roles with high generative-AI exposure",
      "Managers deciding how to redesign work without assuming that exposure equals redundancy",
    ],
    keyTakeaways: [
      "Occupation-level scores are a starting point; your actual task mix, employer and sector determine practical risk.",
      "Technical capability, reliable deployment and a business decision to remove labour are three different tests.",
      "The strongest plan combines safe experimentation, evidence of outcomes and deeper ownership of judgement or relationships.",
    ],
    sections: [
      {
        id: "what-changed",
        heading: "What changed: AI now reaches parts of many professional roles",
        body: [
          "The ILO's refined index finds some generative-AI exposure across a large share of employment, with clerical work most exposed and exposure also rising in highly digitised professional roles. That describes technical overlap with tasks, not a timetable for dismissal.",
          "The better question is therefore not whether a job title is safe. It is which recurring tasks can be completed to an acceptable standard, at acceptable risk and cost, with less human time.",
        ],
      },
      {
        id: "risk-test",
        heading: "Run the five-part task test",
        body: [
          "List ten to fifteen activities from a normal month and score each from zero to two on the five tests below. Use real outputs such as a reconciled account, campaign brief or project decision, not vague labels such as administration.",
        ],
        bullets: [
          "Digital input: the information already arrives in machine-readable form.",
          "Repeatability: a reasonably stable set of steps covers most cases.",
          "Verifiability: a knowledgeable person can check quality quickly and cheaply.",
          "Consequence: an error is reversible and does not create serious legal, safety or financial harm.",
          "Human dependence: success does not require trust, negotiation, physical presence or accountable professional judgement.",
        ],
        note: "A high score indicates a good candidate for controlled testing, not permission to automate it.",
      },
      {
        id: "read-result",
        heading: "Read the result at role level",
        body: [
          "A role is more exposed when high-scoring tasks occupy a large share of paid time and the remaining work can be consolidated into fewer jobs. It is more resilient when automation removes preparation but increases demand for review, client interpretation, exception handling or implementation.",
          "Also examine organisational friction. Fragmented data, unclear ownership, regulation, procurement and poor process design can slow adoption. Conversely, a firm with clean data, strong controls and a clear cost case may change work faster than an occupational average suggests.",
        ],
      },
      {
        id: "uncertainty",
        heading: "What the test cannot predict",
        body: [
          "Exposure indices hold tasks relatively still while tools, prices, demand and job design move. The ILO cautions that they cannot predict adoption, displacement, wages or reskilling needs. OECD evidence likewise describes both displacement and new-task effects.",
          "Use the score as an early-warning and development tool. Do not make a costly career decision from one forecast, one demonstration or one employer announcement.",
        ],
      },
    ],
    actions: [
      "Keep a two-week task diary with time spent, inputs, outputs and the cost of an error.",
      "Score each task against the five tests and ask a trusted colleague to challenge your ratings.",
      "Run one approved, low-consequence pilot and compare time, quality and rework with the current method.",
      "Document work that depends on judgement, stakeholder trust, domain context or accountable sign-off.",
      "Choose one adjacent capability that helps you supervise, verify or redesign AI-assisted work.",
      "Review the map quarterly and follow the tracker for your profession rather than relying on general headlines.",
    ],
    sources: [source.iloExposure, source.iloIndicators, source.oecdEmployment, source.onet],
    relatedSlugs: [
      "which-parts-job-can-be-automated",
      "jobs-ai-change-most-2030",
      "choose-skill-that-matters-in-five-years",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced professionals around a table sorting printed work tasks into assist, review and keep-human groups",
  }),
  completeArticle({
    number: 2,
    slug: "jobs-ai-change-most-2030",
    title: "Which Jobs Will AI Change Most by 2030?",
    shortTitle: "Jobs AI may change most",
    pillar: "ai-and-your-job",
    portfolio: "Change tracker",
    format: "Change Tracker",
    searchIntent: "Compare occupational exposure to AI while understanding the limits of 2030 forecasts.",
    jurisdiction: "Global",
    evidenceStrength: "Mixed",
    nextReview: "2026-10-25",
    readingMinutes: 10,
    dek: "The clearest exposure is in clerical and highly digitised knowledge work, but exposure, transformation and job loss are not interchangeable.",
    answerFirst:
      "By 2030, generative AI is most likely to change roles with large amounts of text, data, software or standardised decision support. Clerical occupations remain the clearest high-exposure group in the ILO evidence, while financial, technical, legal, media and other digitised professional roles also contain exposed tasks. Jobs with physical, interpersonal and accountable elements can still change substantially through scheduling, documentation and analysis even when their core service remains human.",
    affects: [
      "Workers comparing the resilience of occupations before a move or training decision",
      "People in administrative and highly digitised professional roles",
      "Managers and workforce planners interpreting employer forecasts to 2030",
    ],
    keyTakeaways: [
      "Clerical work has the highest measured generative-AI exposure, but many professional roles also contain exposed tasks.",
      "A 2030 list mixes capability studies, employer expectations and economic projections that answer different questions.",
      "Track task redesign, hiring and entry routes together; no single ranking can show the net outcome.",
    ],
    sections: [
      {
        id: "latest-evidence",
        heading: "What the latest exposure evidence shows",
        body: [
          "The ILO's 2025 index combines detailed task descriptions, worker input and expert validation. It reports that one in four workers globally is in an occupation with some generative-AI exposure, while only a much smaller share is in the highest exposure gradient. Clerical occupations remain most exposed.",
          "Highly digitised professional and technical roles have also moved up the exposure scale as models handle more specialised text and code. This is a measure of possible task transformation, not realised employment loss.",
        ],
      },
      {
        id: "role-groups",
        heading: "Role groups to watch closely",
        body: [
          "Administrative support, data entry, bookkeeping support, routine customer communication and document production have both high digital content and repeatable outputs. Analysts, developers, marketing specialists and some legal or financial professionals may see research, drafting and first-pass analysis compressed.",
          "Healthcare, education, skilled trades, operations and management can be less exposed at the occupation level while still changing through records, planning and coordination. The relevant unit remains the task and the workflow around it.",
        ],
      },
      {
        id: "forecast-method",
        heading: "Why the 2030 rankings disagree",
        body: [
          "The ILO estimates technical exposure. The WEF asks employers what they expect to create, displace and change. National projections such as BLS incorporate technology alongside demographics, demand and industry change. Their rankings should not be combined as though they were one probability.",
          "Forecasts are also sensitive to prices, regulation, customer acceptance and complementary investment. A capable model may not be economical or trustworthy in a particular workflow, while a modest tool can spread quickly if it fits existing systems.",
        ],
      },
      {
        id: "tracker",
        heading: "Signals this tracker will review",
        body: [
          "Each quarterly review will compare new capability evidence, official occupational projections, task databases and documented changes to hiring or entry routes. A claim moves from exposure to observed change only when evidence shows actual adoption or labour-market effects.",
        ],
        bullets: [
          "Material changes in occupational task or technology data",
          "Official revisions to job growth, openings or entry requirements",
          "Credible field evidence on staffing, hours, wages or task allocation",
          "New controls or regulation that alter the feasible use of AI",
        ],
      },
    ],
    actions: [
      "Find your occupation in O*NET or a national occupational profile and review its detailed tasks.",
      "Separate tasks that AI can assist from tasks an employer could reliably remove.",
      "Compare exposure with official openings and growth projections for your country.",
      "Look for changes in junior hiring, spans of control and required evidence of AI use in your sector.",
      "Build one complementary skill linked to judgement, verification, implementation or stakeholder work.",
      "Revisit this tracker quarterly before making a high-cost training or career decision.",
    ],
    sources: [source.iloExposure, source.iloIndicators, source.wefJobs, source.blsProjections],
    relatedSlugs: [
      "will-ai-replace-my-job",
      "work-tasks-declining-fastest",
      "jobs-expected-to-grow-by-2030",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Mid-career workers from administration, finance, design and field operations comparing task maps on a wall",
  }),
  completeArticle({
    number: 3,
    slug: "which-parts-job-can-be-automated",
    title: "How to Tell Which Parts of Your Job Can Be Automated",
    shortTitle: "Audit tasks for automation",
    pillar: "ai-and-your-job",
    portfolio: "Evergreen decision page",
    format: "Checklist",
    searchIntent: "Audit current work to identify safe automation candidates and tasks that need human control.",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    readingMinutes: 10,
    dek: "A practical workflow audit that tests value, reliability and consequence before asking whether a tool can perform a task.",
    answerFirst:
      "A task is a plausible automation candidate when it is frequent, rule-bounded, supplied with usable digital inputs, easy to verify and low in consequence when something goes wrong. Start with a narrow workflow, keep a human owner and measure rework as well as speed. Do not automate a vague job label or a broken process.",
    affects: [
      "Professionals asked to find efficiencies in their own role",
      "Team leaders reviewing repetitive knowledge-work processes",
      "Workers who want to shape automation before a tool is imposed",
    ],
    keyTakeaways: [
      "Automatability depends on the full workflow, including data, exceptions, review and accountability.",
      "A useful pilot measures quality, rework, escalation and risk, not only minutes saved.",
      "Tasks involving sensitive data, irreversible decisions or unclear ownership need stronger controls or should remain human.",
    ],
    sections: [
      {
        id: "map-work",
        heading: "Map work at the right level",
        body: [
          "Write each task as an input, action, output and recipient. 'Prepare the weekly variance commentary from approved ledger data for the finance lead' can be tested. 'Do finance' cannot.",
          "Include hidden work such as chasing information, resolving exceptions, explaining results and taking responsibility. Demonstrations often omit these costly edges.",
        ],
      },
      {
        id: "screen",
        heading: "Screen for fit before choosing a tool",
        body: [
          "Prioritise high-volume, stable work with clear acceptance criteria. Pause when source data is fragmented, policy changes frequently, permissions are uncertain or quality relies on tacit context.",
        ],
        bullets: [
          "Frequency and time: enough repetition exists to repay design, control and maintenance.",
          "Input quality: the tool can lawfully access complete, current and well-structured information.",
          "Rule stability: common cases follow a documented process and exceptions can be routed.",
          "Verification: a reviewer can detect an error without repeating the whole task.",
          "Consequence: failures can be reversed before they affect a customer, right, safety outcome or material decision.",
        ],
      },
      {
        id: "pilot",
        heading: "Design a controlled pilot",
        body: [
          "Run the current and proposed methods on a representative sample. Predefine acceptable quality, the person who can stop the pilot and the cases that must escalate. Keep an audit trail of inputs, versions, outputs and corrections.",
          "Measure elapsed time, human attention, error severity, rework and downstream satisfaction. An output that appears quickly but requires anxious checking may not improve the work.",
        ],
      },
      {
        id: "decision",
        heading: "Decide to automate, assist or keep human",
        body: [
          "Full automation is appropriate only when the process and controls can handle normal variation. Assistance is usually the better first state for drafting, classification and analysis because a named person retains the decision.",
          "Keep work human when legitimacy, empathy, negotiation, professional duty or responsibility is central. Revisit the choice as tools and the process change.",
        ],
      },
    ],
    actions: [
      "Select one recurring output and document its inputs, steps, exceptions and recipient.",
      "Confirm data permissions and tool approval before entering any real information.",
      "Create a small test set containing easy, typical and difficult cases.",
      "Record baseline time, quality, rework and escalation before testing automation.",
      "Assign a human owner, stopping rule and route for exceptions.",
      "Share the measured result with affected colleagues and record the final work-design decision.",
    ],
    sources: [source.onet, source.nistRmf, source.nistGenAi, source.iloIndicators],
    relatedSlugs: [
      "will-ai-replace-my-job",
      "use-ai-at-work-confidential-information",
      "automate-delegate-or-keep-human",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Operations lead marking a real office workflow with green assist points and amber human-review gates",
  }),
  completeArticle({
    number: 4,
    slug: "ai-skills-employers-ask-for-2026",
    title: "The AI Skills Employers Actually Ask For in 2026",
    shortTitle: "AI skills employers want",
    pillar: "skills-that-are-changing",
    portfolio: "Change tracker",
    format: "Change Tracker",
    searchIntent: "Choose practical AI skills to learn using current employer and occupational evidence.",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    readingMinutes: 11,
    dek: "For most experienced professionals, useful AI capability means applying, checking and governing tools in a domain, not becoming a model engineer.",
    answerFirst:
      "In 2026, the most portable AI skill for a non-specialist is not prompt cleverness. It is the ability to frame a work problem, use an approved tool with suitable data, test the output, recognise failure and show a measurable result. Technical AI roles still require deeper data, software and model knowledge. Read job adverts for your target profession because a general trend cannot tell you which stack, standard or credential one employer values.",
    affects: [
      "Mid-career professionals deciding whether to learn AI tools, data skills or governance",
      "Career switchers comparing technical and applied AI pathways",
      "Managers specifying credible development goals instead of generic AI literacy",
    ],
    keyTakeaways: [
      "Applied workflow judgement and verification are relevant across more roles than model-building skills.",
      "Demand differs sharply between specialist AI jobs and existing professions that are adding AI-enabled tasks.",
      "A small portfolio showing a safe, measured work improvement is stronger evidence than a course title alone.",
    ],
    sections: [
      {
        id: "employer-evidence",
        heading: "What current employer evidence can and cannot show",
        body: [
          "The UK AI Labour Market Survey reports persistent technical and non-technical gaps among surveyed AI-sector organisations, including understanding AI concepts and applying skills in practice. Its respondents are not a census of all UK employers, so it should guide specialist pathways rather than define every office role.",
          "O*NET adds occupation-linked technology signals from U.S. employer postings, while the WEF records broad employer expectations. Together they support a role-specific reading, not a universal top-ten list.",
        ],
      },
      {
        id: "skill-stack",
        heading: "The five-part applied AI skill stack",
        body: [
          "For a professional user, capability is a chain. Weakness at any point can erase the apparent productivity gain.",
        ],
        bullets: [
          "Problem framing: define the decision, audience, constraints and acceptable evidence.",
          "Data judgement: recognise personal, confidential, licensed and poor-quality inputs.",
          "Tool operation: select approved features, structure instructions and preserve traceability.",
          "Evaluation: test accuracy, bias, completeness and failure cases against a reference.",
          "Work redesign: place human review, escalation and accountability where consequences require them.",
        ],
      },
      {
        id: "technical-path",
        heading: "When deeper technical skills are justified",
        body: [
          "Roles building or integrating systems may require programming, data engineering, machine learning, evaluation, security and deployment. The precise combination depends on the product and organisation. Do not infer that every role mentioning AI requires model training.",
          "If changing into a technical path, compare the target occupation's tasks, typical entry route and software demand. Build foundations that transfer across vendors before paying for product-specific certification.",
        ],
      },
      {
        id: "proof",
        heading: "How to prove the skill",
        body: [
          "Use a redacted or synthetic version of a real workflow. State the baseline, risk controls, test set, result, failure cases and what remained human. This shows judgement as well as tool fluency.",
          "Keep evidence specific to your profession. A project manager might show risk triage with documented review; an accountant might show reconciled extraction; a marketer might show source-grounded content quality checks.",
        ],
      },
    ],
    actions: [
      "Collect 20 recent adverts for one target role and record repeated tasks, tools and evidence requirements.",
      "Separate specialist engineering requirements from applied user, manager and governance requirements.",
      "Choose one recurring work problem and establish a baseline for time and quality.",
      "Learn the relevant data, evaluation and security controls alongside tool operation.",
      "Build one documented case study with synthetic or approved data and explicit limitations.",
      "Review this tracker quarterly because product names change faster than durable capabilities.",
    ],
    sources: [source.dsitSkills, source.onet, source.wefJobs, source.nistGenAi],
    relatedSlugs: [
      "choose-skill-that-matters-in-five-years",
      "fastest-growing-skills-by-profession",
      "professional-certificates-employers-value",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced analyst presenting an AI workflow portfolio with evaluation notes to two hiring managers",
  }),
  completeArticle({
    number: 5,
    slug: "use-ai-at-work-confidential-information",
    title: "How to Use AI at Work Without Exposing Confidential Information",
    shortTitle: "Use AI without exposing data",
    pillar: "ai-and-your-job",
    portfolio: "Evergreen decision page",
    format: "Guide",
    searchIntent: "Use workplace AI tools safely without disclosing confidential or personal information.",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Strong",
    nextReview: "2026-10-25",
    readingMinutes: 10,
    dek: "A safe-use rule for deciding what can enter an AI system, what must stay out and what to do after a mistake.",
    answerFirst:
      "Do not paste personal data, client material, unpublished financial information, source code, credentials or other confidential content into an AI tool unless your organisation has approved that exact tool and use, the data is permitted, and the necessary contract, access, retention and security controls are in place. Redaction can reduce risk but is not a substitute for approval because context may still identify a person or reveal a secret.",
    affects: [
      "Employees using public or employer-provided generative AI services",
      "Managers introducing AI into workflows containing client, worker or commercial data",
      "Professionals subject to confidentiality, privacy, security or record-keeping duties",
    ],
    keyTakeaways: [
      "A paid account or private-looking interface does not prove that a use is approved or confidential.",
      "Classify the information, tool and purpose before entering content, and use synthetic data for learning where possible.",
      "If sensitive material is entered by mistake, stop, preserve the facts and report it through the normal incident route promptly.",
    ],
    sections: [
      {
        id: "what-changed",
        heading: "Why ordinary copy and paste now creates a disclosure route",
        body: [
          "Generative AI services can receive prompts, uploaded files, connected application data and feedback. The handling of that material depends on the service, account, configuration, contract and region. Consumer and enterprise versions should not be treated as interchangeable.",
          "The risk is wider than model training. Access controls, logs, retention, third-party processing, connectors and generated output can all expose or reproduce information.",
        ],
      },
      {
        id: "classify",
        heading: "Classify before you prompt",
        body: [
          "Ask who owns the information, who it identifies, what duty applies and whether the exact system is authorised. The ICO requires organisations processing personal data through AI to meet data-protection principles, while NIST and the NCSC emphasise governance and security across the system lifecycle.",
        ],
        bullets: [
          "Public: already lawfully published and safe to reuse for this purpose.",
          "Internal: not public, but approved policy may permit use in a controlled enterprise system.",
          "Confidential: client, commercial, legal, source-code or security material that needs explicit controls.",
          "Personal or sensitive: information about identifiable people, with additional legal and ethical duties.",
          "Restricted: credentials, secrets, regulated records or high-consequence information that must not enter the tool.",
        ],
      },
      {
        id: "safe-pattern",
        heading: "Use the minimum-data pattern",
        body: [
          "Start with a blank or synthetic example. If real data is necessary and permitted, remove fields that the task does not need, replace identifiers consistently and work inside the approved environment. Check that generated output does not reveal source material to a broader audience.",
          "For recurring use, ask the system owner for a documented data-flow view covering provider access, retention, deletion, locations, logging, connectors and incident response.",
        ],
      },
      {
        id: "incident",
        heading: "What to do if information was entered by mistake",
        body: [
          "Do not hide the event or compound it by repeatedly testing whether the material can be recovered. Record the service, account, time, content category, recipients and action taken without copying the sensitive material into another unsafe channel.",
          "Report promptly to the security, privacy or legal route named by your employer. The responsible team can assess deletion options, credential rotation, contractual notification and any regulatory duties. This article is general information, not legal advice.",
        ],
      },
    ],
    actions: [
      "Read your employer's current AI, data-classification and acceptable-use rules.",
      "Confirm that the exact tool, account and connector are approved for the intended data category.",
      "Use public, synthetic or properly minimised inputs for exploration and training.",
      "Remove secrets, identifiers and unnecessary context before an approved use.",
      "Check outputs for retained confidential detail before saving or sharing them.",
      "Report accidental disclosure immediately through the normal security or privacy incident route.",
    ],
    sources: [source.icoAi, source.nistGenAi, source.ncscSecureAi, source.govAiPlaybook],
    relatedSlugs: [
      "what-to-do-when-employer-introduces-ai",
      "which-parts-job-can-be-automated",
      "introducing-ai-without-losing-trust",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Professional reviewing a confidential-data checklist before moving a client document toward an approved AI workspace",
  }),
  completeArticle({
    number: 6,
    slug: "agentic-ai-everyday-office-jobs",
    title: "What Agentic AI Means for Everyday Office Jobs",
    shortTitle: "Agentic AI and office work",
    pillar: "ai-and-your-job",
    portfolio: "Timely interpretation",
    format: "Role Impact",
    searchIntent: "Understand how AI agents may change everyday office workflows and responsibilities.",
    jurisdiction: "Global",
    evidenceStrength: "Emerging",
    nextReview: "2026-08-25",
    readingMinutes: 10,
    dek: "Agents can take multi-step actions through software, which shifts the practical question from drafting speed to authority, supervision and recovery.",
    answerFirst:
      "Agentic AI is likely to affect office work first by coordinating bounded sequences such as gathering information, updating systems and preparing a draft for review. The important difference from a chatbot is action: an agent may use tools and change records, not only produce text. That can reduce hand-offs, but it also makes permissions, audit logs, stopping rules and human approval more important.",
    affects: [
      "Professionals whose work moves information between email, documents, calendars and business systems",
      "Managers evaluating vendor claims about autonomous workflows",
      "Operations, project, finance and customer teams responsible for approvals and exceptions",
    ],
    keyTakeaways: [
      "Agentic describes a system that can plan or take actions through tools; it does not mean reliable general autonomy.",
      "Early office uses should be narrow, reversible and observable, with least-privilege access.",
      "Roles may shift towards setting goals, handling exceptions, validating outcomes and owning consequences.",
    ],
    sections: [
      {
        id: "definition",
        heading: "What changed beyond the chatbot",
        body: [
          "A chatbot waits for a prompt and returns content. An agentic system can decompose a goal, call software tools, use retrieved information and continue through several steps. Products use the term loosely, so ask what actions the system can actually take.",
          "A useful office example is preparing a meeting pack from approved records, identifying missing inputs and creating a draft task list. Sending messages, changing financial records or making employment decisions introduces much higher consequence.",
        ],
      },
      {
        id: "workflow-impact",
        heading: "Where office work may change first",
        body: [
          "Structured coordination work is a plausible early target: routine research, status consolidation, scheduling, record updates and first-pass triage. The gain depends on clean systems, stable rules and permission to connect them.",
          "Exception handling does not disappear. Someone must decide what the agent may do, recognise when context is missing, resolve conflicts and explain the outcome to affected people.",
        ],
      },
      {
        id: "risk",
        heading: "Why authority changes the risk",
        body: [
          "NIST's 2026 consultation synthesis reports broad concern about novel agent security threats, while established cyber principles still apply. Tool access can allow a misleading instruction or compromised source to produce a real-world action.",
          "Use the least privilege needed, separate preparation from approval, require confirmation for consequential steps and retain logs that a human can interpret. A polished demonstration is not evidence that recovery works.",
        ],
      },
      {
        id: "career-response",
        heading: "What to learn before adoption is mature",
        body: [
          "Build skill in process mapping, access boundaries, evaluation and exception design. These capabilities transfer across vendors and make an experienced worker more useful when a workflow is redesigned.",
          "Evidence remains emerging. Adoption surveys measure intention, security reports describe risks and laboratory benchmarks do not show dependable performance in every live office environment.",
        ],
      },
    ],
    actions: [
      "Ask vendors or internal teams to demonstrate the exact tools, records and permissions an agent can use.",
      "Map one bounded workflow and mark every step that changes data or communicates externally.",
      "Keep preparation and consequential approval as separate permissions.",
      "Create test cases for missing data, conflicting instructions and an unavailable system.",
      "Define a human owner, audit record, stop control and recovery procedure before live use.",
      "Record changes to workload and exceptions, not only the number of completed steps.",
    ],
    sources: [source.nistAgents, source.nistGenAi, source.dsitSkills, source.dsitCapabilities],
    relatedSlugs: [
      "which-parts-job-can-be-automated",
      "what-to-do-when-employer-introduces-ai",
      "new-manager-skills-ai-era",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Office operations manager supervising an AI workflow map with clear permission gates between email, calendar and records",
  }),
  completeArticle({
    number: 7,
    slug: "what-to-do-when-employer-introduces-ai",
    title: "What to Do When Your Employer Introduces AI",
    shortTitle: "When your employer introduces AI",
    pillar: "ai-and-your-job",
    portfolio: "Evergreen decision page",
    format: "Guide",
    searchIntent: "Respond constructively when an employer introduces AI into a role or team.",
    jurisdiction: "Jurisdiction varies",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    readingMinutes: 11,
    dek: "A worker-first plan for understanding the purpose, protecting standards and influencing how the work is redesigned.",
    answerFirst:
      "Ask what problem the AI is meant to solve, which tasks and data it will touch, how performance will be measured, who remains accountable and what happens when it fails. Take part in training and controlled trials, but keep a written record of changed expectations, workload and concerns. If monitoring, significant automated decisions or employment changes are involved, seek country-specific advice through the appropriate worker, union, privacy or employment channel.",
    affects: [
      "Employees told to adopt an AI assistant or AI-enabled business system",
      "Workers whose tasks, targets or quality controls are being redesigned",
      "People concerned about monitoring, data use, deskilling or future staffing",
    ],
    keyTakeaways: [
      "Clarify the work problem and decision rights before treating adoption as a training issue.",
      "Participation is a chance to surface exceptions, hidden work and safety requirements that a vendor demonstration misses.",
      "Document material changes and use jurisdiction-specific routes when data rights or employment terms are at stake.",
    ],
    sections: [
      {
        id: "first-conversation",
        heading: "Start with purpose and scope",
        body: [
          "Request a practical explanation of the intended outcome: faster drafting, lower error rates, new customer capacity or reduced cost. Ask which tasks are in scope now and which decisions remain with people.",
          "A clear scope protects both the worker and the project. It allows training, testing and workload to be discussed against a defined change rather than a broad instruction to use AI.",
        ],
      },
      {
        id: "worker-questions",
        heading: "Questions an experienced worker should ask",
        body: [
          "Use calm, operational questions. They reveal whether governance exists without assuming either that the tool is harmless or that jobs have already been decided.",
        ],
        bullets: [
          "Which information may enter the system, and which tool or account is approved?",
          "Who checks output, signs decisions and handles complaints or incidents?",
          "How will quality, rework, workload and time saved be measured?",
          "Will prompts, activity, output or performance data be used to monitor individuals?",
          "What training, adjustment period and route for raising concerns will be provided?",
        ],
      },
      {
        id: "take-part",
        heading: "Use a pilot to make hidden work visible",
        body: [
          "Bring real exceptions and downstream consequences into testing. Track the checking effort and the work created by correcting, documenting or explaining an output.",
          "Suggest a joint review point where the team can decide which tasks to assist, automate or leave unchanged. NIST's framework supports a cycle of governing, mapping, measuring and managing rather than one approval at launch.",
        ],
      },
      {
        id: "boundaries",
        heading: "Know when to use a formal route",
        body: [
          "Concerns about personal data, monitoring, discrimination, accessibility, professional duties or contract changes may engage specific national law or workplace procedure. The applicable rights differ by country, sector and employment status.",
          "Keep dates, written instructions, policies and examples. Speak to a union representative, employee forum, data-protection contact, professional body or qualified adviser where appropriate. This article is general information, not legal advice.",
        ],
      },
    ],
    actions: [
      "Ask for the business purpose, in-scope tasks, approved tool and named accountable owner.",
      "Read the AI, data, monitoring and acceptable-use policies before using live information.",
      "Request training that covers failure cases, security and escalation as well as features.",
      "Track baseline quality, workload and turnaround time before the change.",
      "Record exceptions, rework and any changed performance expectation during the pilot.",
      "Use an appropriate country-specific or professional route if significant rights, safety or employment concerns remain.",
    ],
    sources: [source.nistRmf, source.oecdEmployment, source.icoAi, source.govAiPlaybook],
    relatedSlugs: [
      "use-ai-at-work-confidential-information",
      "introducing-ai-without-losing-trust",
      "will-ai-replace-my-job",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Mid-career employee and manager reviewing an AI pilot charter with data, quality and accountability questions",
  }),
  completeArticle({
    number: 8,
    slug: "ai-job-loss-predictions-evidence",
    title: "AI Job-Loss Predictions: What the Evidence Actually Says",
    shortTitle: "AI job-loss predictions",
    pillar: "ai-and-your-job",
    portfolio: "Timely interpretation",
    format: "Evidence Check",
    searchIntent: "Evaluate alarming AI job-loss claims against current labour and task evidence.",
    jurisdiction: "Global",
    evidenceStrength: "Mixed",
    nextReview: "2026-08-25",
    readingMinutes: 12,
    dek: "Large numbers usually describe exposed tasks, employer expectations or gross job movement, not a verified count of people who will lose work because of AI.",
    answerFirst:
      "There is credible evidence that AI can change many tasks and that some occupations face weaker demand. There is not a credible basis for converting one exposure percentage into a precise global job-loss count. The net result depends on adoption, demand, new tasks, prices, policy and how employers share productivity gains. Use predictions as scenarios and look for observed changes in hours, hiring, wages and task allocation.",
    affects: [
      "Workers reacting to headlines about large numbers of jobs at risk",
      "Career changers comparing allegedly safe and unsafe fields",
      "Managers and communicators responsible for explaining workforce forecasts",
    ],
    keyTakeaways: [
      "Exposure, automation potential, gross displacement and net employment are different measures.",
      "Current field evidence shows rapid task reorganisation in some settings without a matching economy-wide employment shock.",
      "The most defensible response is preparation and tracking, not certainty about collapse or immunity.",
    ],
    sections: [
      {
        id: "claim-check",
        heading: "First ask what the number counts",
        body: [
          "An exposure study asks whether AI capability overlaps with tasks. An employer survey records expectations. An occupational projection combines technology with demand and demographics. A field study observes a particular population after adoption.",
          "A headline can become misleading when it labels all four as jobs lost. Check the unit, geography, baseline, time horizon and whether creation as well as displacement is included.",
        ],
      },
      {
        id: "strong-evidence",
        heading: "What the stronger evidence supports",
        body: [
          "The ILO finds widespread potential exposure but says transformation is more likely than full automation for most occupations. OECD analysis explains that AI can displace tasks, increase demand through productivity and create new work.",
          "U.S. BLS projections already incorporate AI-related pressure on some administrative and sales roles while projecting growth in several technology and analytical occupations. These are conditional national projections, not proof that AI caused each change.",
        ],
      },
      {
        id: "early-outcomes",
        heading: "What early outcome studies show",
        body: [
          "The NBER study linking Danish adoption surveys with administrative records found widespread new AI-related tasks and task reorganisation, but no meaningful average effect on earnings or recorded hours during its early observation period. Its setting and horizon limit generalisation.",
          "The Stanford customer-support study found average productivity gains with larger benefits for less experienced workers. It is evidence that adoption can complement labour in one workflow, not proof that every employer will retain staffing.",
        ],
      },
      {
        id: "uncertainty",
        heading: "Where uncertainty remains largest",
        body: [
          "Capabilities, prices and adoption can change faster than labour statistics. Organisations may alter junior hiring before total employment, or use attrition rather than redundancies. Increased output can support demand, while cost pressure can still reduce headcount.",
          "A responsible forecast states these mechanisms and updates when observed evidence changes. Treat a precise long-range number without a transparent method and range as a claim to investigate, not a fact.",
        ],
      },
    ],
    actions: [
      "Trace any alarming number to the original study rather than a secondary headline.",
      "Label it as exposure, employer expectation, projection or observed outcome.",
      "Check its geography, occupations, time horizon, baseline and uncertainty range.",
      "Compare the claim with official hiring, hours, wage and occupational data.",
      "Translate the evidence into a task map for your role instead of a binary safe-or-gone label.",
      "Review the claim again when field evidence or official projections are updated.",
    ],
    sources: [
      source.iloExposure,
      source.iloIndicators,
      source.oecdEmployment,
      source.nberWork,
      source.stanfordWork,
    ],
    relatedSlugs: [
      "jobs-ai-change-most-2030",
      "are-there-ai-proof-careers",
      "jobs-expected-to-grow-by-2030",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Two experienced workers comparing a dramatic job-loss headline with original research charts and methodology notes",
  }),
  completeArticle({
    number: 9,
    slug: "are-there-ai-proof-careers",
    title: "Are There Really AI-Proof Careers?",
    shortTitle: "Are any careers AI-proof?",
    pillar: "ai-and-your-job",
    portfolio: "Evergreen decision page",
    format: "Evidence Check",
    searchIntent: "Choose a more resilient career without relying on claims that a job is immune to AI.",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    readingMinutes: 10,
    dek: "No credible occupation is guaranteed immunity, but some work has a stronger mix of demand, human responsibility and difficult-to-automate context.",
    answerFirst:
      "There are no reliably AI-proof careers. A more useful target is resilient work: occupations with durable demand, varied physical or social context, accountable judgement, licensing or trust, and tasks that technology complements more easily than it removes. Even these careers can change in documentation, scheduling, analysis and entry routes.",
    affects: [
      "Mid-career workers considering a move mainly because of AI anxiety",
      "Parents, graduates and career advisers comparing supposedly safe occupations",
      "Professionals deciding whether to deepen expertise or retrain",
    ],
    keyTakeaways: [
      "Low AI exposure is not the same as strong job demand, pay, fit or working conditions.",
      "Resilience comes from a bundle of demand, task variety, human responsibility and the ability to adapt.",
      "Compare a realistic transition path and country-specific outlook before paying for retraining.",
    ],
    sections: [
      {
        id: "myth",
        heading: "Why the AI-proof label fails",
        body: [
          "Occupations are bundles of tasks and change as tools, regulation and customer expectations move. A role may retain its core human service while automating records and preparation, or remain technically difficult to automate while shrinking for unrelated economic reasons.",
          "The label also hides local variation. Employers can redesign the same occupation differently depending on process quality, labour costs, liability and demand.",
        ],
      },
      {
        id: "resilience-test",
        heading: "Use a resilience test instead",
        body: [
          "Score a target path across several independent dimensions. A convincing case should not depend on one protection such as physical work or a current licence.",
        ],
        bullets: [
          "Demand: official projections and replacement openings support continuing need.",
          "Context: work occurs in variable physical, social or organisational settings.",
          "Responsibility: a person must be accountable for judgement, safety or legitimacy.",
          "Relationships: trust, persuasion, care or negotiation materially affects the result.",
          "Adaptability: the occupation has adjacent tasks and learning routes as tools change.",
        ],
      },
      {
        id: "tradeoffs",
        heading: "Compare the whole career, not only exposure",
        body: [
          "Some lower-exposure roles involve physical risk, irregular hours, licensing costs or lower pay. Some exposed professional roles retain strong projected demand because AI also increases output or creates complementary work.",
          "Use BLS or the relevant national service to compare openings, entry requirements and pay. Then interview people doing the work about workload, autonomy and how technology is actually being adopted.",
        ],
      },
      {
        id: "decision",
        heading: "When staying and adapting is the better move",
        body: [
          "A career change is expensive. If your present field has continuing demand and your experience covers relationships, implementation or accountable decisions, adding AI evaluation and workflow skill may preserve more value than starting again.",
          "Move when the new path fits your capabilities and constraints on its own merits, not because someone has promised immunity through 2030.",
        ],
      },
    ],
    actions: [
      "Remove the words safe and proof from your shortlist and write the actual reasons each role may be resilient.",
      "Check official demand, openings, pay and entry requirements in your country.",
      "Map which tasks AI may change inside each target role.",
      "Speak with at least three practitioners about technology, workload and entry routes.",
      "Estimate the time, cost and income effect of becoming employable in the target role.",
      "Choose one reversible experiment, such as a short project or shadowing, before committing to retraining.",
    ],
    sources: [source.iloExposure, source.iloIndicators, source.blsProjections, source.skillsEngland],
    relatedSlugs: [
      "ai-job-loss-predictions-evidence",
      "choose-skill-that-matters-in-five-years",
      "jobs-expected-to-grow-by-2030",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Mid-career professional comparing healthcare, technical, field and office career paths on a resilience scorecard",
  }),
  completeArticle({
    number: 10,
    slug: "ai-changing-entry-level-work",
    title: "How AI Is Changing Entry-Level Work",
    shortTitle: "AI and entry-level work",
    pillar: "ai-and-your-job",
    portfolio: "Timely interpretation",
    format: "Role Impact",
    searchIntent: "Understand how AI may change junior tasks, hiring and early-career development.",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Mixed",
    nextReview: "2026-10-25",
    readingMinutes: 11,
    dek: "AI can compress routine starter tasks and help novices learn, creating a genuine tension between productivity and the experience ladder.",
    answerFirst:
      "AI is changing entry-level work by assisting with first drafts, research, basic analysis and customer responses, which are also tasks through which people have traditionally learned. Evidence does not support a universal collapse in junior jobs. It does support watching whether employers redesign training and supervision when routine practice is reduced.",
    affects: [
      "Graduates and early-career workers entering digitally intensive occupations",
      "Mid-career parents, mentors and career changers assessing new entry routes",
      "Managers responsible for apprenticeships, junior hiring and skill development",
    ],
    keyTakeaways: [
      "AI can raise a novice's output in some workflows while reducing the volume of routine practice available.",
      "Changes in junior hiring may appear before clear effects on total occupational employment.",
      "Employers need deliberate learning tasks, feedback and progressive responsibility rather than assuming tool use creates expertise.",
    ],
    sections: [
      {
        id: "tasks",
        heading: "The junior tasks most likely to change",
        body: [
          "First-pass research, drafting, summarising, coding, classification and routine customer communication are prominent candidates because their inputs and outputs are digital. The effect differs by occupation and by the quality standard required.",
          "Automation may remove some volume, while assistance may let a junior worker attempt more complex work sooner. Both can happen in the same team.",
        ],
      },
      {
        id: "mixed-evidence",
        heading: "The evidence points in more than one direction",
        body: [
          "The Stanford customer-support study found larger productivity and quality gains for less experienced workers in one company, consistent with AI transmitting patterns from stronger performers. It does not show what happens to hiring when the same output needs fewer hours.",
          "The NBER Denmark study found new AI tasks and work reorganisation without a significant average effect on earnings or hours in its early period. Official projections still show both growth and decline among AI-affected occupations.",
        ],
      },
      {
        id: "learning-ladder",
        heading: "Protect the learning ladder",
        body: [
          "Expert judgement is built through examples, corrections and gradually harder responsibility. If a tool completes all simple work invisibly, a junior worker can produce polished output without learning why it is right.",
          "Good design asks the worker to predict, review and explain. Supervisors should expose failure cases, require source checks and retain tasks that build domain understanding even when this is not the fastest short-term route.",
        ],
      },
      {
        id: "entry-strategy",
        heading: "How entrants can show more than tool fluency",
        body: [
          "Employers still need evidence of reasoning, reliability and collaboration. Build work samples that show the question, sources, checks, revisions and final judgement. Be ready to complete a small task without the tool as well as to use it responsibly.",
          "For mid-career switchers, prior client, sector or operational experience can compensate for a new technical entry point. Translate that context explicitly.",
        ],
      },
    ],
    actions: [
      "Study the detailed tasks and entry requirements for the target occupation, not only its title.",
      "Practise producing and checking core work both with and without an AI assistant.",
      "Keep a portfolio that shows sources, reasoning, corrections and limitations.",
      "Ask prospective employers how junior training and feedback have changed with AI.",
      "Seek projects that provide real stakeholder contact and accountable outcomes.",
      "Review official openings and entry-route data alongside reports about AI exposure.",
    ],
    sources: [source.stanfordWork, source.nberWork, source.blsAi, source.iloExposure],
    relatedSlugs: [
      "ai-skills-employers-ask-for-2026",
      "degree-certificate-short-course-career-switch",
      "jobs-ai-change-most-2030",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced mentor and junior colleague checking an AI-assisted work sample together against original evidence",
  }),
  completeArticle({
    number: 15,
    slug: "reskill-while-working-full-time",
    title: "How to Reskill While Working Full Time",
    shortTitle: "Reskill while working full time",
    pillar: "skills-that-are-changing",
    portfolio: "Evergreen decision page",
    format: "Guide",
    searchIntent: "Build job-relevant skills around a full-time role without wasting time or money.",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    readingMinutes: 11,
    dek: "A sustainable plan that starts with a target task, protects weekly capacity and produces evidence employers can assess.",
    answerFirst:
      "Reskill around a specific target role or work problem, not a broad subject. Reserve three to five repeatable hours a week, learn the smallest useful concept, apply it to a realistic project and collect feedback. A course is useful when it supplies structure or a recognised requirement. The outcome you need is credible evidence that you can perform relevant work.",
    affects: [
      "Mid-career professionals balancing learning with a full-time job and caring responsibilities",
      "Workers preparing for an internal move or a more resilient version of their current role",
      "Career changers who need to test a direction before accepting a large income or tuition cost",
    ],
    keyTakeaways: [
      "Narrow role and task targets reduce wasted learning and make progress easier to prove.",
      "A sustainable weekly system is more valuable than an intense plan that collapses after a month.",
      "Projects, feedback and workplace application turn knowledge into employable evidence.",
    ],
    sections: [
      {
        id: "target",
        heading: "Choose a work outcome before a syllabus",
        body: [
          "Collect current role profiles and job adverts, then identify three tasks that distinguish the target from your present work. Check these against O*NET or a national occupational source.",
          "Write a twelve-week outcome such as 'build and explain a reliable dashboard from a messy operational dataset'. This is easier to plan and assess than 'learn data'.",
        ],
      },
      {
        id: "schedule",
        heading: "Design for the week you actually have",
        body: [
          "Use two short study blocks and one application block, with one protected recovery week each month. Decide in advance what you will stop doing. Sleep and family time are not spare capacity.",
          "A minimum session of twenty minutes keeps continuity during difficult weeks. Track completed practice and outputs, not hours of video watched.",
        ],
      },
      {
        id: "learn-apply",
        heading: "Use the learn, apply, explain cycle",
        body: [
          "Learn one concept, apply it to a realistic task and explain the trade-offs to a practitioner. Retrieval, feedback and varied practice expose gaps that passive course completion hides.",
          "Where policy permits, an internal project can supply context and a stakeholder. Otherwise use public, synthetic or volunteer data and make its limitations clear.",
        ],
      },
      {
        id: "decision-gates",
        heading: "Set gates before spending more",
        body: [
          "After four weeks, check whether you still want the work rather than only the subject. After eight, ask a practitioner to judge your output. After twelve, compare the remaining gap with the cost of a certificate, short course or degree.",
          "Adult-learning evidence is population-level and cannot guarantee a return. Training pays when it removes a real entry barrier or enables work that the target market values.",
        ],
      },
    ],
    actions: [
      "Define one target role and three tasks that would make you credible for it.",
      "Block three to five sustainable hours in the same places each week.",
      "Choose one structured resource and avoid running several courses in parallel.",
      "Build a realistic project from approved, public or synthetic material.",
      "Arrange feedback from a practitioner at weeks four, eight and twelve.",
      "Decide whether to continue, narrow, pause or buy a credential using evidence from the project.",
    ],
    sources: [source.onet, source.employerSkills, source.oecdEducation, source.skillsEngland],
    relatedSlugs: [
      "degree-certificate-short-course-career-switch",
      "professional-certificates-employers-value",
      "choose-skill-that-matters-in-five-years",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Working professional at a kitchen table following a modest weekly learning plan beside a completed practical project",
  }),
  completeArticle({
    number: 16,
    slug: "professional-certificates-employers-value",
    title: "Which Professional Certificates Do Employers Value?",
    shortTitle: "Certificates employers value",
    pillar: "skills-that-are-changing",
    portfolio: "Evergreen decision page",
    format: "Decision Framework",
    searchIntent: "Choose a professional certificate that employers value for a specific role and country.",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Mixed",
    nextReview: "2027-01-25",
    readingMinutes: 12,
    dek: "The useful certificate is the one that removes a named hiring barrier, carries credible assessment and connects to real work.",
    answerFirst:
      "Employers do not value certificates in the abstract. A certificate is worth considering when current adverts for your target role repeatedly request it, a regulator or professional pathway requires it, or its assessment produces trusted evidence of competence. Check the issuing body, level, assessment, renewal, total cost and local recognition. Avoid rankings that ignore occupation and country.",
    affects: [
      "Mid-career professionals comparing vendor, professional and regulated credentials",
      "Career switchers looking for a credible signal without committing to a degree",
      "Workers considering employer-funded training for an internal move",
    ],
    keyTakeaways: [
      "Role demand and jurisdiction matter more than a certificate's general popularity.",
      "Regulation confirms a qualification meets a framework; it does not guarantee employer demand or a pay rise.",
      "A credential becomes stronger when paired with a project, current experience and a clear target occupation.",
    ],
    sections: [
      {
        id: "value-test",
        heading: "Use four tests of certificate value",
        body: [
          "First, demand: does the certificate appear across representative current adverts? Second, gate: is it required by law, a professional body, procurement or promotion policy? Third, assessment: must candidates demonstrate relevant skill under credible conditions? Fourth, transfer: is it recognised across employers and still maintained?",
          "A provider's salary claim is not enough. Ask for methodology, comparison group, completion rate and whether results include people who already had relevant experience.",
        ],
      },
      {
        id: "country",
        heading: "Check recognition in the country where you will work",
        body: [
          "In England and Northern Ireland, the official regulated-qualification service lets you verify an awarding organisation, level and qualification details, with separate links for Wales and Scotland. Regulation gives confidence about the qualification framework, not a guarantee that a particular employer wants it.",
          "In the United States, use BLS occupational profiles to identify typical entry requirements and employer-posting evidence for specific tools. Requirements can also vary by state and regulated profession.",
        ],
      },
      {
        id: "cost",
        heading: "Calculate the full investment",
        body: [
          "Include examination attempts, membership, study materials, renewal, continuing education and time away from paid or family work. Then identify the exact opportunities the credential could open.",
          "A lower-cost certificate with a real project and employer recognition can outperform a famous but irrelevant badge. Equally, a longer established credential may be justified when it is a genuine gate.",
        ],
      },
      {
        id: "red-flags",
        heading: "Watch for weak signals",
        body: [
          "Be cautious when the provider controls the ranking evidence, assessment is only attendance, no verifiable syllabus or pass standard is published, or the credential expires as soon as a product version changes.",
          "Ask two hiring managers and two recent candidates how the certificate was actually used in screening. Treat anecdotes as context and compare them with the advert sample.",
        ],
      },
    ],
    actions: [
      "Collect 30 current adverts across several employers for one target role and location.",
      "Count required, preferred and merely mentioned credentials separately.",
      "Verify the issuer, regulatory status, level, assessment and renewal terms.",
      "Calculate fees, study time, lost income and continuing costs.",
      "Ask practitioners whether the credential changes screening, pay or permitted work.",
      "Pair any chosen certificate with a work sample that demonstrates the underlying capability.",
    ],
    sources: [source.ofqualRegister, source.blsProjections, source.onet, source.oecdEducation],
    relatedSlugs: [
      "degree-certificate-short-course-career-switch",
      "reskill-while-working-full-time",
      "ai-skills-employers-ask-for-2026",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced career switcher comparing a regulated certificate, job adverts, assessment details and total cost",
  }),
  completeArticle({
    number: 17,
    slug: "degree-certificate-short-course-career-switch",
    title: "Degree, Certificate or Short Course: Which Is Worth It for a Career Switch?",
    shortTitle: "Degree, certificate or short course?",
    pillar: "skills-that-are-changing",
    portfolio: "Evergreen decision page",
    format: "Decision Framework",
    searchIntent: "Compare education options for a career switch using entry barriers, cost and evidence.",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    readingMinutes: 12,
    dek: "Choose the smallest credible route that removes the real barrier to entry, while preserving an option to build further.",
    answerFirst:
      "Choose a degree when the target profession requires one, employers consistently use it as a gate, or the depth and placement route justify the cost. Choose a recognised certificate when it maps to a specific occupational requirement. Choose a short course to test a direction or close a narrow skill gap. Do not buy any option until you have checked current adverts, official entry requirements, total cost and the evidence you will produce.",
    affects: [
      "Mid-career professionals comparing formal study with faster retraining routes",
      "Career switchers who need to protect income and avoid starting from zero",
      "Workers deciding whether an employer's education benefit supports a real move",
    ],
    keyTakeaways: [
      "The right route is set by the target occupation's gate, not by the prestige of the provider.",
      "Population-level education returns do not predict the return from one programme for one experienced person.",
      "A staged route can test fit cheaply before committing to a larger qualification.",
    ],
    sections: [
      {
        id: "gate",
        heading: "Start with the entry gate",
        body: [
          "Use official occupational profiles, regulator information and a sample of current adverts to identify what is required, preferred and learned on the job. Requirements differ between countries and can differ within regulated U.S. professions by state.",
          "If most credible routes require a degree or licence, a short course cannot replace it. If employers mainly ask for a capability and portfolio, a new degree may be an expensive detour.",
        ],
      },
      {
        id: "compare",
        heading: "Compare what each route is good at",
        body: [
          "A degree can provide broad foundations, structured progression, networks and access to regulated or graduate routes. A professional certificate can signal a narrower standard. A short course can quickly test motivation and build one applied capability.",
          "The label alone says little about teaching, assessment or outcomes. Compare supervised practice, feedback, work placement, completion support and how learning is assessed.",
        ],
      },
      {
        id: "economics",
        heading: "Model the switch economics",
        body: [
          "Include tuition, examinations, travel, equipment, interest, study time and any reduction in working hours. Estimate a conservative time to the first relevant role and a range for initial pay.",
          "BLS data show average earnings and unemployment vary with education, but these are associations across large groups. Field, prior experience, location and selection all matter. Do not treat the average as the return from your programme.",
        ],
      },
      {
        id: "staged",
        heading: "Use a staged commitment",
        body: [
          "Begin with conversations and a small realistic project. Then take a short assessed module that can stack into a larger route where possible. Commit to the full credential only when evidence shows that you want the work and the qualification removes a real barrier.",
          "Ask the provider for completion, progression and employment methodology, not only selected success stories.",
        ],
      },
    ],
    actions: [
      "Define one target occupation, location and acceptable entry salary.",
      "Classify requirements in 30 current adverts as required, preferred or absent.",
      "Check official education, licence and qualification information for the jurisdiction.",
      "Compare total cost, duration, assessment, placement and stackability across three routes.",
      "Complete a low-cost realistic project and seek practitioner feedback.",
      "Choose the smallest route that removes the verified entry barrier and set a stop-review date.",
    ],
    sources: [source.blsEducation, source.blsProjections, source.ofqualRegister, source.oecdEducation],
    relatedSlugs: [
      "professional-certificates-employers-value",
      "reskill-while-working-full-time",
      "choose-skill-that-matters-in-five-years",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Mid-career professional comparing three education paths using entry requirements, time, cost and assessed work",
  }),
  completeArticle({
    number: 18,
    slug: "choose-skill-that-matters-in-five-years",
    title: "How to Choose a Skill That Will Still Matter in Five Years",
    shortTitle: "Choose a durable skill",
    pillar: "skills-that-are-changing",
    portfolio: "Evergreen decision page",
    format: "Decision Framework",
    searchIntent: "Choose a durable skill and reduce the risk of investing in short-lived training.",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    readingMinutes: 10,
    dek: "Select capabilities tied to recurring work problems, then add current tools around that durable core.",
    answerFirst:
      "No skill is guaranteed to stay valuable for five years. Reduce the risk by choosing a capability used across several roles, connected to a recurring business or public need, difficult to perform without context, and supported by current demand. Learn tool-specific operation as a layer, not the whole foundation.",
    affects: [
      "Experienced professionals deciding where to put limited learning time",
      "Career changers comparing fashionable tools with durable foundations",
      "Managers planning development against uncertain technology forecasts",
    ],
    keyTakeaways: [
      "Durable skills solve recurring problems across tools and employers.",
      "Demand evidence should combine current postings, occupational data and a plausible future mechanism.",
      "A barbell plan pairs one deep domain capability with enough technical fluency to use changing tools.",
    ],
    sections: [
      {
        id: "durability",
        heading: "Define durability properly",
        body: [
          "A durable skill does not stay unchanged. It remains useful while its methods and tools evolve. Evidence evaluation, stakeholder negotiation, data reasoning and process design can transfer, but each still requires practice in a real domain.",
          "Avoid calling a broad trait future-proof without identifying the work it improves and how an employer can observe it.",
        ],
      },
      {
        id: "four-tests",
        heading: "Apply four tests before committing",
        body: [
          "A good candidate passes more than a current-demand test. It has a reason to persist and a route from learning to evidence.",
        ],
        bullets: [
          "Recurrence: the underlying problem appears repeatedly across organisations.",
          "Transfer: several occupations or sectors use the capability.",
          "Complementarity: new tools increase the value of people who can frame, verify or implement the work.",
          "Proof: you can demonstrate the capability in a project, assessment or accountable outcome.",
        ],
      },
      {
        id: "triangulate",
        heading: "Triangulate demand rather than following a list",
        body: [
          "WEF employer expectations can identify broad direction, O*NET links skills and technologies to U.S. occupations, and Skills England provides national sector and pathway evidence. These sources use different methods and should agree on a mechanism, not necessarily a ranking.",
          "Add a local advert sample and practitioner interviews. If a skill appears only in sponsored trend content, treat it as an experiment.",
        ],
      },
      {
        id: "portfolio",
        heading: "Build a barbell learning portfolio",
        body: [
          "Place most effort into one domain-linked capability that compounds with your experience. Use a smaller share to explore a current tool or emerging method through short experiments.",
          "Review every six months. Continue when evidence of use, demand and fit strengthens; stop when the learning is mainly maintaining a badge or chasing product changes.",
        ],
      },
    ],
    actions: [
      "Write three recurring problems you want to become better at solving.",
      "Find each problem in occupational tasks, current adverts and conversations with practitioners.",
      "Score candidate skills for recurrence, transfer, complementarity and provability.",
      "Choose one durable core and one small tool-specific experiment.",
      "Build an applied project with a clear outcome and external feedback.",
      "Review demand, enjoyment and evidence after six months before investing further.",
    ],
    sources: [source.wefJobs, source.onet, source.skillsEngland, source.employerSkills],
    relatedSlugs: [
      "fastest-growing-skills-by-profession",
      "work-tasks-declining-fastest",
      "reskill-while-working-full-time",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced professional balancing durable domain skills and changing software tools on a five-year learning map",
  }),
  completeArticle({
    number: 19,
    slug: "work-tasks-declining-fastest",
    title: "Work Tasks Declining Fastest, and What to Learn Instead",
    shortTitle: "Declining tasks and alternatives",
    pillar: "skills-that-are-changing",
    portfolio: "Change tracker",
    format: "Change Tracker",
    searchIntent: "Identify declining work tasks and choose adjacent capabilities rather than abandoning a whole occupation.",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    readingMinutes: 11,
    dek: "Routine document, data-entry and transaction tasks face pressure, but the useful move is from production alone towards verification, exceptions and decisions.",
    answerFirst:
      "The clearest decline is in routine tasks that transfer information, produce standard documents or process predictable transactions. U.S. projections show pronounced declines in several data-entry, typing and operator occupations, while employer forecasts also expect some clerical tasks to reduce. Learn the adjacent work that remains: data quality, exception handling, customer judgement, controls, analysis and process improvement.",
    affects: [
      "Administrative, operations and support workers whose workload includes repeatable digital processing",
      "Professionals seeing drafting, reporting or first-pass analysis become faster",
      "Managers deciding how to retrain people when task demand changes",
    ],
    keyTakeaways: [
      "A declining occupation does not mean every task or opening disappears, and a growing occupation can still lose routine tasks.",
      "Move one step along the workflow towards quality, exceptions, decisions or implementation.",
      "Verify the adjacent capability against local demand before buying training.",
    ],
    sections: [
      {
        id: "signals",
        heading: "What the current decline signals show",
        body: [
          "BLS projects steep percentage declines for several small operator occupations and material declines for word-processing and data-entry roles through 2034. Its office-support outlook still includes many replacement openings, so decline is not the same as no hiring.",
          "The WEF reports employer expectations of reduced importance for some clerical and manual capabilities. The ILO separately finds high generative-AI exposure in clerical occupations. These signals align on pressure, but not on a precise personal timetable.",
        ],
      },
      {
        id: "task-families",
        heading: "Task families under the clearest pressure",
        body: [
          "Watch repeated transcription, data transfer, standard scheduling, basic classification, template drafting and routine reconciliation. The decisive features are stable rules, digital inputs and inexpensive verification.",
          "Do not label all administration or analysis obsolete. Stakeholder coordination, incomplete cases, controls and accountable explanation often sit beside the declining task.",
        ],
      },
      {
        id: "adjacent",
        heading: "What to learn instead",
        body: [
          "Move from entering data to assuring its quality and explaining anomalies; from producing a standard report to deciding what matters; from forwarding requests to resolving difficult cases; from manual coordination to designing the workflow and controls.",
          "The best adjacent skill uses your existing domain knowledge. It should be visible in target adverts and practised on the same information or customers you already understand.",
        ],
      },
      {
        id: "tracker-method",
        heading: "How this tracker will distinguish signal from fashion",
        body: [
          "Quarterly reviews will compare official occupational projections, O*NET task and technology updates, employer surveys and evidence of actual adoption. A task will not be marked as rapidly declining from a product demonstration alone.",
          "UK and U.S. findings will remain labelled because occupation structures, demand and training routes differ.",
        ],
      },
    ],
    actions: [
      "Track which five tasks are shrinking, speeding up or moving to self-service in your role.",
      "Identify the downstream exception, control or decision that follows each task.",
      "Check official projections and current adverts for the adjacent occupation or responsibility.",
      "Ask to own one quality, exception or process-improvement outcome at work.",
      "Build evidence of the result, including errors prevented or decisions improved.",
      "Review this tracker quarterly and revise the learning choice if local demand changes.",
    ],
    sources: [source.blsDeclining, source.blsAi, source.iloExposure, source.wefJobs],
    relatedSlugs: [
      "fastest-growing-skills-by-profession",
      "choose-skill-that-matters-in-five-years",
      "jobs-ai-change-most-2030",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Operations professional tracing a path from repetitive data-entry tasks to quality checks, exceptions and decisions",
  }),
  completeArticle({
    number: 20,
    slug: "fastest-growing-skills-by-profession",
    title: "The Fastest-Growing Skills, Explained by Profession",
    shortTitle: "Growing skills by profession",
    pillar: "skills-that-are-changing",
    portfolio: "Change tracker",
    format: "Change Tracker",
    searchIntent: "Prioritise growing skills within a specific profession rather than following a generic ranking.",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    readingMinutes: 12,
    dek: "Technology literacy matters broadly, but its useful form differs for accountants, marketers and project professionals.",
    answerFirst:
      "There is no single fastest-growing skill that every professional should learn. Across employer evidence, AI and data literacy, cybersecurity awareness, analytical thinking and adaptability are prominent. Their value comes from application: an accountant needs traceable analysis and controls, a marketer needs evidence-led audience and experiment work, and a project professional needs risk, dependency and change judgement.",
    affects: [
      "Experienced professionals choosing development priorities for the next review cycle",
      "Career changers translating broad skills trends into a target occupation",
      "Managers building role-specific learning plans rather than one generic AI course",
    ],
    keyTakeaways: [
      "Broad skill trends become useful only when tied to a profession's tasks and standards.",
      "Combine one technical or data capability with judgement, communication and implementation.",
      "Use current occupational and advert evidence, then prove the skill in a work outcome.",
    ],
    sections: [
      {
        id: "common-direction",
        heading: "The common direction across professions",
        body: [
          "The WEF employer survey places AI and big data, networks and cybersecurity, and technological literacy among fast-rising areas, alongside analytical thinking, resilience and leadership. It records expectations across a large global employer sample rather than observed demand in every local role.",
          "O*NET provides a stronger occupational bridge by linking tasks, essential skills and employer-posting technology signals. Skills England adds UK sector and pathway evidence.",
        ],
      },
      {
        id: "profession-view",
        heading: "How the same trend changes by profession",
        body: [
          "Accounting: prioritise data quality, systems controls, anomaly investigation, scenario explanation and accountable use of automation. Marketing: combine audience evidence, experimentation, content evaluation, measurement and privacy-aware tool use.",
          "Project management: strengthen dependency analysis, benefits, risk, stakeholder negotiation and adoption measurement. In each case, basic AI use supports rather than replaces domain standards.",
        ],
      },
      {
        id: "choose",
        heading: "Choose a skill at the task boundary",
        body: [
          "Find a task where expectations are rising, current performance is weak and practice is available. A skill is a better priority when several employers ask for it and it solves a recurring problem in your role.",
          "Avoid choosing from course catalogues first. Providers organise around products; careers organise around work and evidence.",
        ],
      },
      {
        id: "tracker-method",
        heading: "What the quarterly tracker will update",
        body: [
          "Updates will compare O*NET releases, official UK skills assessments, employer surveys and representative job-advert checks for accounting, marketing and project management. Vendor names will be separated from transferable capabilities.",
          "A skill will move up only when the evidence of demand and role relevance strengthens. Forecasts and current posting signals will remain clearly labelled.",
        ],
      },
    ],
    actions: [
      "Open the profession tracker nearest to your work and select one changing task.",
      "Compare its required skills in O*NET, UK skills evidence and 20 current local adverts.",
      "Choose one technical capability and one complementary judgement or communication capability.",
      "Practise both in a project with an observable work outcome.",
      "Ask a practitioner to review the output against current professional standards.",
      "Revisit the ranking quarterly and keep evidence of outcomes in a role-specific portfolio.",
    ],
    sources: [source.wefJobs, source.onet, source.skillsEngland, source.employerSkills],
    relatedSlugs: [
      "ai-skills-employers-ask-for-2026",
      "work-tasks-declining-fastest",
      "choose-skill-that-matters-in-five-years",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Accountant, marketer and project manager annotating different skill paths from one shared evidence board",
  }),
];
