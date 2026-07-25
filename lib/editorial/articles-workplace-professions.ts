import type { Article, ArticleSource } from "./types";

const PUBLISHED = "2026-07-25";

type ArticleDraft = Omit<
  Article,
  "published" | "reviewed" | "changeLog" | "readingMinutes"
> & {
  readingMinutes?: number;
};

function completeArticle(draft: ArticleDraft): Article {
  return {
    published: PUBLISHED,
    reviewed: PUBLISHED,
    readingMinutes: 9,
    changeLog: [
      {
        date: PUBLISHED,
        note: "First publication, checked against the listed primary sources.",
      },
    ],
    ...draft,
  };
}

const source = {
  onsHybrid: {
    publisher: "Office for National Statistics",
    title: "Who has access to hybrid work in Great Britain?",
    url: "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/articles/whohasaccesstohybridworkingreatbritain/latest",
    published: "11 June 2025",
    type: "Official statistics",
    note: "Great Britain survey evidence, including occupation, age and income differences.",
  },
  govFlexible: {
    publisher: "GOV.UK",
    title: "Flexible working: Overview",
    url: "https://www.gov.uk/flexible-working",
    published: "Current guidance, accessed 25 July 2026",
    type: "Official guidance",
    note: "Applies to England, Scotland and Wales. Northern Ireland has different rules.",
  },
  govFlexibleForm: {
    publisher: "Department for Business and Trade",
    title: "Request flexible working: application form template",
    url: "https://www.gov.uk/government/publications/the-right-to-request-flexible-working-form",
    published: "Updated 6 April 2024",
    type: "Official guidance",
  },
  acasHybrid: {
    publisher: "Acas",
    title: "Requesting home or hybrid working",
    url: "https://www.acas.org.uk/requests-for-home-and-hybrid-working",
    published: "Updated 19 December 2024",
    type: "Official guidance",
  },
  acasContract: {
    publisher: "Acas",
    title: "Changes to employment contracts",
    url: "https://www.acas.org.uk/changes-to-employment-contracts",
    published: "Current guidance, accessed 25 July 2026",
    type: "Official guidance",
  },
  acasCode: {
    publisher: "Acas",
    title: "Acas Code of Practice on requests for flexible working (HTML version)",
    url: "https://www.gov.uk/government/publications/revised-acas-code-of-practice-on-requests-for-flexible-working/acas-code-of-practice-on-requests-for-flexible-working-html-version",
    published: "11 January 2024",
    type: "Official guidance",
  },
  govAdjustments: {
    publisher: "GOV.UK",
    title: "Reasonable adjustments for workers with disabilities or health conditions",
    url: "https://www.gov.uk/reasonable-adjustments-for-disabled-workers",
    published: "Current guidance, accessed 25 July 2026",
    type: "Official guidance",
  },
  eeocTelework: {
    publisher: "U.S. Equal Employment Opportunity Commission",
    title: "Work at Home or Telework as a Reasonable Accommodation",
    url: "https://www.eeoc.gov/laws/guidance/work-hometelework-reasonable-accommodation",
    published: "Official guidance, accessed 25 July 2026",
    type: "Official guidance",
  },
  natureHybrid: {
    publisher: "Nature",
    title: "Hybrid working from home improves retention without damaging performance",
    url: "https://www.nature.com/articles/s41586-024-07500-2",
    published: "12 June 2024",
    type: "Original research",
    note: "A six-month randomised controlled trial of 1,612 employees at one Chinese technology company.",
  },
  nberOfficeDay: {
    publisher: "National Bureau of Economic Research",
    title: "The Value of One Office Day a Month",
    url: "https://www.nber.org/papers/w35331",
    published: "June 2026",
    type: "Original research",
    note: "A working paper reporting a randomised trial of 248 customer-service employees.",
  },
  nberRemoteProductivity: {
    publisher: "National Bureau of Economic Research",
    title: "Working from Home, Worker Sorting and Development",
    url: "https://www.nber.org/papers/w31515",
    published: "July 2023",
    type: "Original research",
    note: "A randomised study of data-entry workers; its setting should not be generalised to every occupation.",
  },
  natureFourDay: {
    publisher: "Nature Human Behaviour",
    title: "Work time reduction via a 4-day workweek finds improvements in workers' well-being",
    url: "https://www.nature.com/articles/s41562-025-02259-6",
    published: "21 July 2025",
    type: "Original research",
    note: "Pre- and post-trial evidence from 2,896 employees in 141 organisations, with 12 control organisations.",
  },
  ukFourDay: {
    publisher: "Autonomy and 4 Day Week Global",
    title: "The results are in: The UK's four-day week pilot",
    url: "https://autonomy.work/portfolio/uk4dwpilotresults/",
    published: "February 2023",
    type: "Primary report",
    note: "Pilot report. Participating employers self-selected, which limits causal claims.",
  },
  icelandFourDay: {
    publisher: "Autonomy and Alda",
    title: "Going Public: Iceland's journey to a shorter working week",
    url: "https://autonomy.work/portfolio/icelandsww/",
    published: "July 2021",
    type: "Primary report",
  },
  blsFastest: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Fastest Growing Occupations",
    url: "https://www.bls.gov/ooh/fastest-growing.htm",
    published: "2024 to 2034 projections, released 28 August 2025",
    type: "Official statistics",
  },
  blsJolts: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Job Openings and Labor Turnover Survey",
    url: "https://www.bls.gov/jlt/",
    published: "Current release series, accessed 25 July 2026",
    type: "Official statistics",
  },
  onsVacancies: {
    publisher: "Office for National Statistics",
    title: "Vacancies and jobs in the UK: July 2026",
    url: "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/jobsandvacanciesintheuk/latest",
    published: "21 July 2026",
    type: "Official statistics",
  },
  nistRmf: {
    publisher: "National Institute of Standards and Technology",
    title: "Artificial Intelligence Risk Management Framework (AI RMF 1.0)",
    url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10",
    published: "26 January 2023",
    type: "Primary report",
  },
  nistGenAi: {
    publisher: "National Institute of Standards and Technology",
    title: "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile",
    url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
    published: "26 July 2024",
    type: "Primary report",
  },
  iloExposure: {
    publisher: "International Labour Organization",
    title: "Generative AI and Jobs: A Refined Global Index of Occupational Exposure",
    url: "https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure",
    published: "20 May 2025",
    type: "Original research",
  },
  wefJobs: {
    publisher: "World Economic Forum",
    title: "The Future of Jobs Report 2025",
    url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
    published: "7 January 2025",
    type: "Primary report",
    note: "A global employer survey and forecast, not a guarantee about an individual job.",
  },
  oecdEmployment: {
    publisher: "Organisation for Economic Co-operation and Development",
    title: "OECD Employment Outlook 2023: Artificial Intelligence and the Labour Market",
    url: "https://www.oecd.org/en/publications/oecd-employment-outlook-2023_08785bba-en.html",
    published: "11 July 2023",
    type: "Primary report",
  },
  oecdSkills: {
    publisher: "Organisation for Economic Co-operation and Development",
    title: "OECD Skills Outlook 2023: Skills for a Resilient Green and Digital Transition",
    url: "https://www.oecd.org/en/publications/oecd-skills-outlook-2023_27452f29-en.html",
    published: "6 November 2023",
    type: "Primary report",
  },
  icoAi: {
    publisher: "Information Commissioner's Office",
    title: "Guidance on AI and data protection",
    url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/",
    published: "Current regulator guidance, accessed 25 July 2026",
    type: "Regulator guidance",
  },
  icoMonitoring: {
    publisher: "Information Commissioner's Office",
    title: "Data protection and monitoring workers",
    url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/monitoring-workers/data-protection-and-monitoring-workers/",
    published: "Current regulator guidance, accessed 25 July 2026",
    type: "Regulator guidance",
    note: "The ICO states that this guidance is under review following the Data (Use and Access) Act.",
  },
  eeocAi: {
    publisher: "U.S. Equal Employment Opportunity Commission",
    title: "Artificial Intelligence and the ADA",
    url: "https://www.eeoc.gov/eeoc-disability-related-resources/artificial-intelligence-and-ada",
    published: "Current regulator resources, accessed 25 July 2026",
    type: "Regulator guidance",
  },
  dolGoodJobs: {
    publisher: "U.S. Department of Labor",
    title: "Good Jobs Principles",
    url: "https://www.dol.gov/general/good-jobs/principles",
    published: "Official guidance, accessed 25 July 2026",
    type: "Official guidance",
  },
  blsAccountants: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Accountants and Auditors",
    url: "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm",
    published: "Updated 28 August 2025",
    type: "Official statistics",
  },
  onetAccountants: {
    publisher: "O*NET OnLine, U.S. Department of Labor",
    title: "Accountants and Auditors, 13-2011.00",
    url: "https://www.onetonline.org/link/summary/13-2011.00",
    published: "Current occupational data, accessed 25 July 2026",
    type: "Official statistics",
  },
  blsMarketing: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Market Research Analysts",
    url: "https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm",
    published: "Updated 28 August 2025",
    type: "Official statistics",
  },
  onetMarketing: {
    publisher: "O*NET OnLine, U.S. Department of Labor",
    title: "Market Research Analysts and Marketing Specialists, 13-1161.00",
    url: "https://www.onetonline.org/link/summary/13-1161.00",
    published: "Current occupational data, accessed 25 July 2026",
    type: "Official statistics",
  },
  blsProject: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Project Management Specialists",
    url: "https://www.bls.gov/ooh/business-and-financial/project-management-specialists.htm",
    published: "Updated 28 August 2025",
    type: "Official statistics",
  },
  onetProject: {
    publisher: "O*NET OnLine, U.S. Department of Labor",
    title: "Project Management Specialists, 13-1082.00",
    url: "https://www.onetonline.org/link/summary/13-1082.00",
    published: "Current occupational data, accessed 25 July 2026",
    type: "Official statistics",
  },
} satisfies Record<string, ArticleSource>;

export const workplaceAndProfessionArticles: Article[] = [
  completeArticle({
    number: 29,
    slug: "is-remote-work-ending",
    title: "Is Remote Work Ending? What the Data Shows",
    shortTitle: "Is remote work ending?",
    pillar: "how-work-actually-works",
    portfolio: "Change tracker",
    format: "Change Tracker",
    searchIntent: "Understand whether remote and hybrid work are shrinking",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    dek: "Office mandates are more visible, but the evidence points to a durable hybrid pattern rather than a simple return to 2019.",
    answerFirst:
      "Remote work is not ending. Fully remote vacancies are narrower and individual employers continue to change attendance rules, but hybrid work remains established in many professional roles. In Great Britain, 28% of working adults hybrid worked between January and March 2025, and the share had risen since 2022. Treat any headline about a single employer as a company decision, not a labour-market verdict.",
    affects: [
      "People considering a remote or hybrid job",
      "Employees facing a change in office attendance",
      "Managers setting team location norms",
      "Professional workers whose tasks can be done in more than one place",
    ],
    keyTakeaways: [
      "Hybrid work and fully remote work are different markets and should be measured separately.",
      "Occupation, seniority, income and employer policy explain more than a broad national headline.",
      "The strongest evidence supports purposeful hybrid design, not a universal number of office days.",
    ],
    sections: [
      {
        id: "what-changed",
        heading: "What changed",
        body: [
          "Large employers have announced more office attendance, making retreat feel universal. Official population data tell a less dramatic story. The ONS found hybrid work had gradually increased in Great Britain through early 2025, while home-only work was broadly stable.",
          "The practical change is a tighter, more selective market. Employers are differentiating between fully remote, hybrid and office-led roles, and some are coordinating attendance more deliberately.",
        ],
      },
      {
        id: "who-can-still-work-remotely",
        heading: "Who can still work remotely",
        body: [
          "Access remains concentrated in managerial, professional, associate professional, administrative and digitally enabled roles. It is also unequal. ONS data show substantial differences by qualifications, income, disability and occupation.",
          "Your useful comparison is therefore your occupation and employer type, not the workforce average. A software, finance or consulting role can follow a different pattern from retail, construction, care or hospitality.",
        ],
      },
      {
        id: "remote-work-evidence",
        heading: "What the evidence can and cannot say",
        body: [
          "A large randomised trial at Trip.com found that two home days a week reduced quitting without damaging measured performance. A smaller 2026 trial found benefits from one coordinated office day a month for fully remote customer-service teams. These studies support deliberate design, but neither proves the right schedule for every role.",
          "Survey snapshots describe where people worked, not whether every arrangement will survive. Company announcements describe policy, not compliance or actual weekly behaviour.",
        ],
      },
      {
        id: "what-to-watch",
        heading: "What to watch next quarter",
        body: [
          "Track actual work-location data, the remote share of suitable vacancies, and whether employers retain exceptions. Also watch whether attendance is coordinated around collaboration or imposed as a blanket presence measure.",
        ],
        bullets: [
          "Changes in your own written policy and contract",
          "Remote availability among comparable employers",
          "Hiring and pay differences by work location",
          "Evidence on retention, performance and promotion",
        ],
      },
    ],
    actions: [
      "Separate your preference into fully remote, hybrid frequency and schedule flexibility.",
      "Compare at least 20 current roles in your occupation before judging the market.",
      "Save the written location terms for any role you accept.",
      "Ask how often the team actually attends, not only what the policy says.",
      "Review your position against the country-specific rights guidance before challenging a mandate.",
    ],
    sources: [source.onsHybrid, source.natureHybrid, source.nberOfficeDay],
    relatedSlugs: [
      "return-to-office-rights-uk",
      "return-to-office-mandate-options",
      "remote-work-productivity-evidence",
      "remote-jobs-still-hiring",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Mid-career colleagues splitting a working week between a shared office table and a quiet home workspace",
  }),
  completeArticle({
    number: 30,
    slug: "return-to-office-rights-uk",
    title: "Return-to-Office Rights in the UK: What Employees Can Ask For",
    shortTitle: "UK return-to-office rights",
    pillar: "workplace-rules-and-rights",
    portfolio: "Evergreen decision page",
    format: "Guide",
    searchIntent: "Understand UK options when office attendance changes",
    jurisdiction: "United Kingdom",
    evidenceStrength: "Strong",
    nextReview: "2026-09-25",
    dek: "A request is not an automatic right to work remotely, but your contract, flexible-working rights, disability law and consultation duties may all matter.",
    answerFirst:
      "In England, Scotland and Wales, employees can request a change to where they work from their first day, but employers can refuse a statutory flexible-working request for specified business reasons. A return instruction may also depend on your contract and how an employer changes established terms. Disabled employees can have a separate right to reasonable adjustments. Northern Ireland has different flexible-working rules. This is general information, not legal advice.",
    affects: [
      "Employees in England, Scotland and Wales asked to attend more often",
      "Disabled employees for whom location creates a disadvantage",
      "People whose contract names home or another work location",
      "Employees with caring or travel constraints",
    ],
    keyTakeaways: [
      "There is a legal right to request flexible working, not a general right to demand remote work.",
      "Contract wording, collective agreements and previous written variations can change the analysis.",
      "A disability-related reasonable-adjustment request is distinct from an ordinary preference request.",
    ],
    sections: [
      {
        id: "check-contract",
        heading: "Start with the documents, not the debate",
        body: [
          "Read the workplace clause, mobility clause, remote-work agreement, staff handbook and any letter that changed your location. Identify whether homeworking was expressly contractual, a temporary concession or an informal practice.",
          "A broad mobility clause does not answer every question by itself. Acas advises employers to consult when proposing contract changes and to treat workers fairly. A union or employee representative may also have relevant collective information.",
        ],
      },
      {
        id: "flexible-working",
        heading: "The statutory request route",
        body: [
          "Employees in England, Scotland and Wales can make a statutory request from their first day. The request can cover hours, days, start and finish times, or place of work. Employers must handle it reasonably and decide within the statutory period unless an extension is agreed.",
          "The process gives you a structured hearing, not guaranteed approval. Make the operational case: identify the pattern, start date, team impact and a workable trial or review point.",
        ],
      },
      {
        id: "other-rights",
        heading: "When other rights may be relevant",
        body: [
          "If a disability puts you at a substantial disadvantage, ask specifically for a reasonable adjustment and explain the work-related barrier. Equality law is fact-specific. Caring responsibilities are not an automatic remote-work right, but a policy applied in a discriminatory way may raise a separate issue.",
          "Health and safety duties, pregnancy, whistleblowing, union activity and contractual rights can matter in particular cases. Get individual advice before relying on them.",
        ],
      },
      {
        id: "boundary",
        heading: "Jurisdiction and information boundary",
        body: [
          "This article describes the position in England, Scotland and Wales as at 25 July 2026. Flexible-working rules differ in Northern Ireland. It does not assess your contract, disability status, limitation dates or prospects in a tribunal.",
          "If dismissal, disciplinary action, discrimination or a deadline is involved, contact Acas, your union or a qualified employment adviser promptly.",
        ],
        note: "Information only. It is not legal advice and no legal or expert review is claimed.",
      },
    ],
    actions: [
      "Collect your contract, policy, remote-work letters and relevant emails.",
      "Write down the exact attendance change, start date and stated reason.",
      "Decide whether to use an informal proposal, a statutory flexible-working request or a reasonable-adjustment request.",
      "Offer a measurable trial and practical arrangements for collaboration and availability.",
      "Keep a dated written record and seek individual advice promptly if formal action is threatened.",
    ],
    sources: [source.govFlexible, source.acasContract, source.govAdjustments, source.acasHybrid],
    relatedSlugs: [
      "return-to-office-mandate-options",
      "flexible-working-request-uk",
      "is-remote-work-ending",
    ],
    professionSlugs: [],
    imageAlt:
      "UK employee reviewing a work-location clause and preparing questions for a calm meeting with a manager",
  }),
  completeArticle({
    number: 31,
    slug: "return-to-office-mandate-options",
    title: "What Can You Do About a Return-to-Office Mandate?",
    shortTitle: "Responding to an office mandate",
    pillar: "workplace-rules-and-rights",
    portfolio: "Evergreen decision page",
    format: "Decision Framework",
    searchIntent: "Choose a proportionate response to an office mandate",
    jurisdiction: "Jurisdiction varies",
    evidenceStrength: "Strong",
    nextReview: "2026-09-25",
    dek: "Clarify the instruction, check what governs your location, then choose between compliance, a negotiated pattern, a formal request and individual advice.",
    answerFirst:
      "Do not assume that an office mandate is automatically lawful or automatically optional. Ask for the policy in writing, compare it with your contract and local law, and identify whether you need flexibility because of disability or another protected reason. In Britain, a statutory flexible-working request may help. In the United States, federal law does not create a general right to remote work, although disability accommodation, collective bargaining, state law and contracts can apply. This is information, not legal advice.",
    affects: [
      "Employees receiving a new attendance instruction",
      "People with a contractual home or hybrid location",
      "Disabled workers who may need accommodation",
      "Union-represented employees and teams covered by collective terms",
    ],
    keyTakeaways: [
      "A clear written instruction and the governing document come before any response.",
      "Preference, contractual entitlement and disability accommodation are different arguments.",
      "A specific, testable alternative is easier to evaluate than a general objection.",
    ],
    sections: [
      {
        id: "triage",
        heading: "Triage the situation",
        body: [
          "Confirm who issued the rule, which workers it covers, the required days, start date, exceptions and consequence of non-compliance. Distinguish a proposal under consultation from a final instruction.",
          "Then identify the governing country and state, nation or province. Remote-work rights are not portable across borders, even inside the same multinational employer.",
        ],
      },
      {
        id: "four-routes",
        heading: "Choose the right route",
        body: [
          "Compliance may be sensible while you gather facts. Negotiation suits a preference or operational issue. A formal flexible-working or accommodation process is better where legislation provides one. A grievance, union route or legal advice may be appropriate where contract change, discrimination or retaliation is alleged.",
        ],
        bullets: [
          "Comply while recording the impact",
          "Propose a different pattern or trial",
          "Use a statutory or policy request",
          "Seek representation or individual advice",
        ],
      },
      {
        id: "make-case",
        heading: "Build a work-based alternative",
        body: [
          "State the outcome you want and address coverage, collaboration, security, customer access and performance. Use evidence from your own work rather than claiming that home or office is always more productive.",
          "If disability is relevant, describe the barrier and possible accommodation. You do not need to frame a medical need as a lifestyle preference.",
        ],
      },
      {
        id: "country-branches",
        heading: "Country branches and limits",
        body: [
          "In England, Scotland and Wales, eligible employees have a day-one right to request flexible working. In the United States, EEOC guidance explains when telework may be a reasonable accommodation under federal disability law, but the answer remains fact-specific.",
          "Collective agreements, state laws and individual contracts may give additional rights. Time limits for challenging decisions can be short.",
        ],
        note: "Information only. Check official guidance for your location and obtain advice for your circumstances.",
      },
    ],
    actions: [
      "Ask for the full rule, reason, timetable and exceptions in writing.",
      "Mark the workplace clauses in your contract and any later agreement.",
      "Choose the route that matches your reason rather than mixing every possible claim.",
      "Submit a concrete pattern with a trial period and review measures.",
      "Contact your union, Acas or a qualified local adviser before missing a formal deadline.",
    ],
    sources: [source.acasContract, source.govFlexible, source.eeocTelework],
    relatedSlugs: [
      "return-to-office-rights-uk",
      "flexible-working-request-uk",
      "remote-work-productivity-evidence",
    ],
    professionSlugs: [],
    imageAlt:
      "Professional comparing an office attendance notice with a contract and a written hybrid-work proposal",
  }),
  completeArticle({
    number: 32,
    slug: "remote-work-productivity-evidence",
    title: "Are People More Productive at Home? An Evidence Review",
    shortTitle: "Remote-work productivity",
    pillar: "how-work-actually-works",
    portfolio: "Evergreen decision page",
    format: "Evidence Check",
    searchIntent: "Evaluate claims about home-working productivity",
    jurisdiction: "Global",
    evidenceStrength: "Mixed",
    nextReview: "2026-10-25",
    dek: "There is no universal home-productivity effect. Results vary with the job, schedule, coordination, measurement and employee choice.",
    answerFirst:
      "Some people and tasks are more productive at home, some are not, and well-designed hybrid arrangements often perform differently from fully remote arrangements. A 2024 randomised trial found no performance penalty from two home days a week and lower attrition. Other experimental work in fully remote, closely measured tasks has found lower output. The right question is which tasks, people and coordination pattern produce the required outcomes.",
    affects: [
      "Employees choosing where to do focused and collaborative work",
      "Managers setting hybrid schedules",
      "Leaders interpreting productivity studies",
      "Teams replacing presence with output measures",
    ],
    keyTakeaways: [
      "Hybrid evidence should not be used as proof about fully remote work, or the reverse.",
      "Output, quality, innovation, retention and wellbeing are different outcomes.",
      "A small local trial with agreed measures is often more useful than another general debate.",
    ],
    sections: [
      {
        id: "why-conflict",
        heading: "Why the studies appear to conflict",
        body: [
          "Studies examine different jobs, countries and arrangements. A call-centre task, data-entry task and product team do not face the same coordination costs. Voluntary homeworking also differs from abrupt assignment.",
          "Researchers measure lines of code, calls, performance ratings, errors, innovation, hours or self-reported productivity. Those measures are not interchangeable.",
        ],
      },
      {
        id: "strongest-evidence",
        heading: "What stronger causal evidence says",
        body: [
          "The Trip.com randomised trial assigned 1,612 graduate employees to office-only or two home days. It found no damage to performance grades or promotions, while quit rates fell. A separate randomised data-entry study found lower productivity for workers assigned to home, showing why task and setting matter.",
          "A 2026 working paper found that one coordinated office day a month improved communication and measured output in a fully remote customer-service setting. It is useful new evidence, but it remains one study and a working paper.",
        ],
      },
      {
        id: "measurement",
        heading: "Measure the work, not the keyboard",
        body: [
          "Use a balanced set: useful output, quality or rework, delivery reliability, customer outcomes, learning and retention. Hours online, messages sent or keystrokes can reward visible activity while missing value.",
          "Compare like with like over enough time. Account for demand, staffing, seasonality and who chose each arrangement.",
        ],
      },
      {
        id: "decision",
        heading: "A fair team-level test",
        body: [
          "Set a defined pattern for six to twelve weeks, coordinate any in-person days around work that benefits from presence, and publish the measures before the test. Review different employee groups, not only the average.",
          "Keep safety, disability, caregiving, security and customer requirements visible. Productivity evidence does not cancel legal duties or individual constraints.",
        ],
      },
    ],
    actions: [
      "List the team's focus, collaboration, learning and customer-facing tasks.",
      "Choose one outcome and one quality measure for each task group.",
      "Run a time-limited arrangement with a comparison baseline.",
      "Ask employees about friction and access without treating self-report as the only evidence.",
      "Review results by role and experience level before setting a permanent rule.",
    ],
    sources: [source.natureHybrid, source.nberRemoteProductivity, source.nberOfficeDay],
    relatedSlugs: [
      "is-remote-work-ending",
      "four-day-week-evidence",
      "productivity-without-surveillance",
    ],
    professionSlugs: ["project-management"],
    imageAlt:
      "Balanced editorial scene comparing focused home work with collaborative office work using outcome cards",
  }),
  completeArticle({
    number: 33,
    slug: "remote-jobs-still-hiring",
    title: "Which Remote Jobs Are Still Hiring?",
    shortTitle: "Remote jobs still hiring",
    pillar: "job-security-and-hiring",
    portfolio: "Change tracker",
    format: "Change Tracker",
    searchIntent: "Identify occupations with both hiring demand and remote potential",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    dek: "Remote opportunity is strongest where current demand overlaps with work that can genuinely be delivered and supervised at a distance.",
    answerFirst:
      "Remote hiring remains most plausible in software and data, market research, digital marketing, project and programme work, finance and accounting, design, writing, customer support and selected advisory roles. That is not a live vacancy ranking. Official statistics measure occupation demand but rarely label jobs as remote, while job adverts measure employer wording. Use both before investing in a move.",
    affects: [
      "Experienced professionals seeking a remote role",
      "Career changers assessing remote-compatible occupations",
      "People comparing UK and US hiring conditions",
      "Workers who need remote work rather than merely prefer it",
    ],
    keyTakeaways: [
      "Remote suitability and hiring demand are separate tests.",
      "Official projections describe occupations, not today's remote vacancy count.",
      "Specialist evidence and a credible remote-work record beat adding remote to a generic search.",
    ],
    sections: [
      {
        id: "current-shortlist",
        heading: "The practical shortlist",
        body: [
          "Roles built around digital artefacts, scheduled analysis, documentation and online customer contact are the most durable candidates. Examples include software development, data analysis, cyber security, market research, digital marketing, accounting, project management, design and some customer operations.",
          "Remote availability within each field varies by employer, seniority, security requirement and country. Entry-level workers may face more office requirements because training and supervision are harder to redesign.",
        ],
      },
      {
        id: "read-data",
        heading: "Read three different signals",
        body: [
          "Use BLS or ONS data for overall labour demand, current adverts for the remote share, and employer career pages for location terms. Do not treat a ten-year projection as this month's hiring market.",
          "For the United States, JOLTS gives broad openings and turnover by industry, not occupation-level remote vacancies. UK vacancy statistics have the same limitation. That gap is why precise remote-job rankings need transparent advert data.",
        ],
      },
      {
        id: "search-smarter",
        heading: "Search by work, not only by label",
        body: [
          "Combine your specialism, sector and evidence of outcomes with remote, distributed or location-flexible terms. Read the location field and contract language. Some roles advertised as remote still require residence in a named country, payroll region or travel radius.",
          "Look for evidence of remote operating practice: asynchronous documentation, clear time-zone overlap, equipment support and published meeting norms.",
        ],
      },
      {
        id: "avoid-false-promises",
        heading: "Avoid false precision and scams",
        body: [
          "A remote role with unusually high pay, an interview conducted only by text or a request to buy equipment through an unknown supplier deserves verification. Use the employer's own domain and never pay to apply.",
          "A broad list cannot tell you whether a job is viable for your location, tax status, accessibility need or profession. Confirm each condition before resigning or relocating.",
        ],
      },
    ],
    actions: [
      "Choose three occupations where your evidence already matches the work.",
      "Sample at least 20 recent adverts in each occupation and record location restrictions.",
      "Check the occupation outlook separately from the remote share.",
      "Rewrite one achievement to show independent delivery, documentation and online collaboration.",
      "Verify every role on the employer's own website before sharing personal data.",
    ],
    sources: [source.blsFastest, source.blsJolts, source.onsVacancies, source.onsHybrid],
    relatedSlugs: [
      "is-remote-work-ending",
      "ai-changing-accounting-jobs",
      "ai-changing-marketing-jobs",
      "ai-changing-project-management",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced professional comparing verified remote-friendly occupations on a paper decision grid",
  }),
  completeArticle({
    number: 34,
    slug: "four-day-week-evidence",
    title: "Does the Four-Day Week Work? What Trials Really Found",
    shortTitle: "Four-day week evidence",
    pillar: "how-work-actually-works",
    portfolio: "Evergreen decision page",
    format: "Evidence Check",
    searchIntent: "Assess whether four-day-week trials support adoption",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    dek: "Trials show promising wellbeing and retention results, but success usually follows work redesign and the evidence is not a universal productivity guarantee.",
    answerFirst:
      "Four-day-week trials generally report better wellbeing and strong retention, with many participating employers continuing the arrangement. The strongest recent multi-country study found improvements in burnout, job satisfaction and health after reduced-hours trials. However, many organisations volunteered, outcomes often rely on self-report, and a four-day week can mean reduced hours or merely compressed hours. The model works best as work redesign, not as five days of demand squeezed into four.",
    affects: [
      "Employees considering a shorter-hours employer",
      "Managers planning a pilot",
      "Leaders evaluating productivity and staffing risk",
      "Teams in customer-facing or continuous-coverage work",
    ],
    keyTakeaways: [
      "A true reduced-hours model is different from four longer compressed days.",
      "The evidence for wellbeing is stronger than the evidence for universal productivity gains.",
      "Removing low-value work and protecting coverage are central to a credible pilot.",
    ],
    sections: [
      {
        id: "models",
        heading: "First define the four-day week",
        body: [
          "A 100:80:100 model aims for 100% pay, roughly 80% of previous hours and maintained output. Compressed hours keep total hours but fit them into four days. A staggered model gives different people different days off.",
          "These models create different fatigue, cost and customer effects. Any claim about success should name the model actually tested.",
        ],
      },
      {
        id: "findings",
        heading: "What the trials found",
        body: [
          "The 2025 Nature Human Behaviour study analysed 2,896 employees across 141 organisations and compared results with 12 control organisations. It reported improved burnout, job satisfaction, mental health and physical health after reduced-hours trials.",
          "The UK and Iceland reports also describe maintained services or revenue alongside shorter hours in many participating workplaces. They add useful implementation detail, but selection and before-and-after designs limit causal certainty.",
        ],
      },
      {
        id: "limitations",
        heading: "Where confidence should stop",
        body: [
          "Volunteer organisations may be more committed and better prepared than average. Short trials can miss later workload creep, promotion effects and staffing costs. Self-reported productivity is not the same as audited output.",
          "The evidence is thinner for emergency services, schools, retail, hospitality, manufacturing and other settings that need continuous physical coverage.",
        ],
      },
      {
        id: "pilot",
        heading: "What a credible pilot looks like",
        body: [
          "Define hours, pay, eligibility, customer coverage and measures before launch. Remove low-value meetings and hand-offs rather than relying on faster individual effort. Track output, quality, absence, overtime, wellbeing and customer outcomes.",
          "Set stop, adapt and continue rules. Review effects by role and caring status so the average does not conceal an unfair workload transfer.",
        ],
      },
    ],
    actions: [
      "Write down whether the proposal reduces hours or compresses them.",
      "Map essential coverage and identify where work would move.",
      "Remove or redesign low-value work before reducing the week.",
      "Run a six-month pilot with baseline and control measures where practical.",
      "Publish the review decision and safeguards against hidden overtime.",
    ],
    sources: [source.natureFourDay, source.ukFourDay, source.icelandFourDay],
    relatedSlugs: [
      "remote-work-productivity-evidence",
      "productivity-without-surveillance",
      "lead-team-when-roles-change",
    ],
    professionSlugs: ["project-management"],
    imageAlt:
      "Four clearly marked workday blocks beside a team reviewing workload, coverage and wellbeing measures",
  }),
  completeArticle({
    number: 35,
    slug: "flexible-working-request-uk",
    title: "How to Make a Flexible-Working Request in the UK",
    shortTitle: "Make a UK flexible-working request",
    pillar: "workplace-rules-and-rights",
    portfolio: "Evergreen decision page",
    format: "Checklist",
    searchIntent: "Prepare a valid and persuasive UK flexible-working request",
    jurisdiction: "United Kingdom",
    evidenceStrength: "Strong",
    nextReview: "2026-09-25",
    dek: "A practical route through the statutory process in England, Scotland and Wales, with a clear boundary for Northern Ireland.",
    answerFirst:
      "In England, Scotland and Wales, an employee can make a statutory flexible-working request from the first day of employment. Put it in writing, say that it is a statutory request, describe the change and start date, and state whether and when you made a previous request. An employer must handle it reasonably, but can refuse for a permitted business reason. Northern Ireland has different rules. This is general information, not legal advice.",
    affects: [
      "Employees seeking different hours, days or work location",
      "Parents and carers who want a sustainable pattern",
      "Disabled employees deciding between a flexible request and reasonable adjustment",
      "People preparing a hybrid-work proposal",
    ],
    keyTakeaways: [
      "Use the statutory wording and include every required item.",
      "A practical impact plan strengthens the request even where it is not a legal requirement.",
      "A disability-related adjustment may need a separate process and should not be reduced to preference.",
    ],
    sections: [
      {
        id: "scope",
        heading: "Check the route and jurisdiction",
        body: [
          "The statutory right covered here applies to employees in England, Scotland and Wales. It can cover hours, times, days and place of work. Northern Ireland has a different regime, so use nidirect and the Labour Relations Agency for current rules there.",
          "Check your employer's policy because it may be more generous. If the request is connected with disability, consider stating that it is also a reasonable-adjustment request.",
        ],
      },
      {
        id: "required-content",
        heading: "Include the required content",
        body: [
          "Date the request, state that it is a statutory flexible-working request, describe the exact proposed change and give the requested start date. State whether and when you have made an earlier statutory request.",
          "Use a concrete weekly pattern. For example, name working days, core availability, office days and any proposed review point.",
        ],
      },
      {
        id: "business-case",
        heading: "Make it workable",
        body: [
          "Explain how customer cover, handovers, meetings, security and performance would work. Offer alternatives such as a trial, different office days or a phased start without weakening the request into ambiguity.",
          "The employer should consult before refusing and handle the process reasonably. Keep notes of meetings and ask for the decision in writing.",
        ],
      },
      {
        id: "decision",
        heading: "If the answer is no",
        body: [
          "Read the stated business reason and compare it with what was discussed. Ask whether an alternative or appeal is available. A refusal is not automatically unlawful, but process failures, discrimination or failure to make reasonable adjustments may need separate advice.",
          "Tribunal time limits can be short. Contact Acas, a union or a qualified adviser rather than relying on a general template.",
        ],
        note: "Information only for England, Scotland and Wales as at 25 July 2026. No legal review is claimed.",
      },
    ],
    actions: [
      "Confirm you are using the correct jurisdiction and employer policy.",
      "Write the exact hours, days, location and proposed start date.",
      "Add the statutory statement and details of previous requests.",
      "Explain coverage, collaboration and a possible trial or review.",
      "Save the request, acknowledgement, meeting notes and written decision.",
    ],
    sources: [source.govFlexible, source.govFlexibleForm, source.acasCode, source.acasHybrid],
    relatedSlugs: [
      "return-to-office-rights-uk",
      "return-to-office-mandate-options",
      "is-remote-work-ending",
    ],
    professionSlugs: [],
    imageAlt:
      "Employee drafting a clear flexible-working request beside a calendar and official UK guidance",
  }),
  completeArticle({
    number: 38,
    slug: "introducing-ai-without-losing-trust",
    title: "A Manager's Guide to Introducing AI Without Losing Trust",
    shortTitle: "Introduce AI without losing trust",
    pillar: "managing-changed-work",
    portfolio: "Evergreen decision page",
    format: "Guide",
    searchIntent: "Introduce workplace AI responsibly and retain employee trust",
    jurisdiction: "Jurisdiction varies",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    dek: "Start with a real work problem, involve the people who do the work, set boundaries before use and make human accountability visible.",
    answerFirst:
      "Trust is most likely to survive when employees know what problem AI is meant to solve, what data it can use, how its output will be checked and what will not be automated. Start with a bounded pilot, include affected staff in design, and keep an accountable person in every consequential decision. Do not promise that roles will be unaffected if you do not know.",
    affects: [
      "Managers introducing generative AI or automated decision support",
      "Employees whose work or data will enter an AI system",
      "HR, privacy, security and technology teams",
      "Leaders accountable for customer or worker outcomes",
    ],
    keyTakeaways: [
      "A tool demonstration is not a business case or a risk assessment.",
      "Involvement, candour and a route to challenge matter as much as model accuracy.",
      "Human review must have authority, time and information, not merely a label.",
    ],
    sections: [
      {
        id: "begin-with-work",
        heading: "Begin with the work, not the tool",
        body: [
          "Describe the task, current failure mode, people affected and outcome you want. Separate assistance, such as drafting or search, from decisions about hiring, pay, discipline, customers or access to services.",
          "The ILO's task-level research finds exposure does not equal replacement. That makes work redesign and worker involvement more useful than announcing a percentage of jobs to automate.",
        ],
      },
      {
        id: "trust-questions",
        heading: "Answer the trust questions before launch",
        body: [
          "Tell staff which inputs and outputs are stored, whether their work trains a system, who can see prompts, how errors are reported and who remains accountable. State what the pilot will not do.",
          "NIST organises AI risk work around govern, map, measure and manage. For a team, that means clear ownership, context-specific risks, tests before reliance and an active response when evidence changes.",
        ],
      },
      {
        id: "pilot",
        heading: "Run a reversible pilot",
        body: [
          "Use low-consequence work with representative cases, including difficult and minority cases. Compare quality, time, rework and harmful errors against the existing process. Record when people reject the output and why.",
          "A pilot should have a stop condition, named owner and end date. Employees need a safe way to surface problems without being treated as resistant to change.",
        ],
      },
      {
        id: "law-policy",
        heading: "Respect legal and policy boundaries",
        body: [
          "Data protection, discrimination, intellectual property, confidentiality and sector rules vary by country and use. In the UK, the ICO's guidance places responsibilities on the organisation deciding how personal data is processed.",
          "This guide is operational information, not legal advice. Obtain privacy, security, employment and sector-specific advice before consequential or high-risk use.",
        ],
      },
    ],
    actions: [
      "Write a one-sentence problem statement and a one-sentence non-goal.",
      "Map affected workers, customers, data and existing controls.",
      "Invite representative employees to test design and failure cases.",
      "Publish permitted uses, prohibited uses and an escalation route.",
      "Review pilot evidence with staff before expanding or buying at scale.",
    ],
    sources: [source.nistRmf, source.nistGenAi, source.iloExposure, source.icoAi],
    relatedSlugs: [
      "what-to-do-when-employer-introduces-ai",
      "talk-to-team-about-ai-anxiety",
      "automate-delegate-or-keep-human",
      "lead-team-when-roles-change",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Manager and experienced team members reviewing an AI pilot charter and risk questions together",
  }),
  completeArticle({
    number: 39,
    slug: "lead-team-when-roles-change",
    title: "How to Lead a Team When Roles Are Changing",
    shortTitle: "Lead when roles are changing",
    pillar: "managing-changed-work",
    portfolio: "Evergreen decision page",
    format: "Guide",
    searchIntent: "Lead a team through changing responsibilities and uncertainty",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    dek: "Replace vague reassurance with a clear change map, protected transition work and frequent decisions people can act on.",
    answerFirst:
      "When roles are changing, give the team three kinds of clarity: what is known, what is still being decided, and what each person should do during the next two weeks. Map tasks before rewriting job titles, protect time to learn, and explain how work and people decisions will be made. Do not ask employees to absorb a role redesign on top of an unchanged workload.",
    affects: [
      "Line managers leading technology or process change",
      "Teams with overlapping or disappearing tasks",
      "Employees learning new responsibilities",
      "Leaders planning restructuring or redeployment",
    ],
    keyTakeaways: [
      "Task change usually becomes visible before a whole occupation disappears.",
      "Short decision cycles reduce rumour without pretending uncertainty has gone.",
      "Learning requires time, practice and a destination role, not only course access.",
    ],
    sections: [
      {
        id: "change-map",
        heading: "Build a change map",
        body: [
          "List tasks that will stop, shrink, grow, move or remain. Name the evidence behind each judgement and the review date. The ILO's exposure research supports task-level analysis because occupations contain different mixes of automatable and human work.",
          "Show dependencies and workload transfers. A saved hour in one process is not a benefit if verification or exception handling consumes it elsewhere.",
        ],
      },
      {
        id: "communicate",
        heading: "Communicate what is knowable",
        body: [
          "Use a regular note with four headings: decided, testing, unresolved and next decision. Say who owns each decision and when the team will hear more.",
          "Avoid guarantees about job security or tool performance that you cannot support. Credible uncertainty is more respectful than reassurance that later has to be withdrawn.",
        ],
      },
      {
        id: "transition",
        heading: "Design the transition workload",
        body: [
          "Remove or pause work so people can learn, shadow, document and practise. Pair training with a real task and useful feedback. Define temporary responsibilities so important work does not fall between old and new roles.",
          "Check whether opportunity is distributed fairly. High-visibility early adopters should not receive every new assignment while quieter experts lose access to development.",
        ],
      },
      {
        id: "people-decisions",
        heading: "Keep people decisions evidence-led",
        body: [
          "Use skills and task evidence before labelling somebody resistant or obsolete. Where jobs may be removed, follow the consultation, selection and collective processes that apply locally.",
          "This article does not replace country-specific employment advice. Restructuring, redundancy and changes to contractual duties need local review.",
        ],
      },
    ],
    actions: [
      "Create a stop, shrink, grow, move and remain task map.",
      "Publish a two-week decision and communication rhythm.",
      "Remove enough existing work to create protected learning time.",
      "Match each learning activity to a real future task and feedback owner.",
      "Audit access to new work and seek local advice before formal role changes.",
    ],
    sources: [source.iloExposure, source.wefJobs, source.oecdSkills],
    relatedSlugs: [
      "introducing-ai-without-losing-trust",
      "retrain-staff-or-hire",
      "new-manager-skills-ai-era",
    ],
    professionSlugs: ["project-management"],
    imageAlt:
      "Team leader mapping tasks that will stop, change and grow with a mixed group of experienced colleagues",
  }),
  completeArticle({
    number: 40,
    slug: "talk-to-team-about-ai-anxiety",
    title: "How to Talk to Your Team About AI Anxiety",
    shortTitle: "Talk about AI anxiety",
    pillar: "managing-changed-work",
    portfolio: "Timely interpretation",
    format: "Guide",
    searchIntent: "Hold an honest manager conversation about AI-related concern",
    jurisdiction: "Global",
    evidenceStrength: "Emerging",
    nextReview: "2026-10-25",
    dek: "A useful conversation separates today's work changes from forecasts, acknowledges what management cannot promise and ends with specific next steps.",
    answerFirst:
      "Do not begin by telling people not to worry. Explain what technology is actually being considered, what decisions have and have not been made, and how staff will influence the work design. Invite questions without demanding personal disclosure, correct unsupported rumours, and commit to a dated next update. If someone is struggling with their mental health, use appropriate support rather than treating a group discussion as care.",
    affects: [
      "Managers hearing concern about job loss or deskilling",
      "Teams exposed to automation claims or AI pilots",
      "Employees unsure whether to disclose anxiety",
      "People leaders planning change communications",
    ],
    keyTakeaways: [
      "Anxiety is not evidence of resistance or lack of digital skill.",
      "Task-level facts are more useful than sweeping predictions about jobs.",
      "The conversation needs a decision, support or next update, not only empathy.",
    ],
    sections: [
      {
        id: "prepare",
        heading: "Prepare the facts and boundaries",
        body: [
          "List the tool, intended task, pilot stage, data involved, people affected and decisions still open. Separate external forecasts from your organisation's plan.",
          "The ILO estimates exposure by tasks and finds large differences within occupations. Use that evidence to avoid turning exposure into a claim that a named person or job will disappear.",
        ],
      },
      {
        id: "conversation",
        heading: "Use a calm opening",
        body: [
          "Try: We are assessing this tool for these tasks. No decision has been made about these areas. I want to hear which risks and opportunities you see, and I will update you on this date.",
          "Ask about work effects, not whether people are anxious in front of colleagues. Provide private channels and make clear that raising a risk will not damage someone's standing.",
        ],
      },
      {
        id: "respond",
        heading: "Respond without false reassurance",
        body: [
          "Where you know the answer, give it. Where you do not, name the owner and date. If roles could change, explain the process and what support is being designed rather than promising no jobs will be affected.",
          "Record recurring questions and answer them consistently. Correct both inflated capability claims and casual dismissal of genuine risk.",
        ],
      },
      {
        id: "support-boundary",
        heading: "Know the support boundary",
        body: [
          "A manager can improve work clarity and signpost employee assistance, occupational health, union or healthcare support. A team meeting is not therapy and managers should not diagnose individuals.",
          "If monitoring, selection or employment decisions are involved, include HR, privacy and legal expertise for the relevant jurisdiction.",
        ],
      },
    ],
    actions: [
      "Prepare a one-page fact, decision and unknowns brief.",
      "Open with the specific task under review rather than AI in general.",
      "Offer both group and private routes for questions.",
      "Assign every unanswered material question an owner and date.",
      "Follow up in writing with decisions, support routes and the next update.",
    ],
    sources: [source.iloExposure, source.nistRmf, source.oecdEmployment],
    relatedSlugs: [
      "introducing-ai-without-losing-trust",
      "lead-team-when-roles-change",
      "automate-delegate-or-keep-human",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Manager listening to a small team during an open, calm discussion about changing tasks and AI",
  }),
  completeArticle({
    number: 41,
    slug: "automate-delegate-or-keep-human",
    title: "Automate, Delegate or Keep Human? A Work-Design Checklist",
    shortTitle: "Automate, delegate or keep human",
    pillar: "managing-changed-work",
    portfolio: "Evergreen decision page",
    format: "Checklist",
    searchIntent: "Decide which work should be automated, delegated or retained by people",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    dek: "Classify a task by consequence, uncertainty, data sensitivity and need for human judgement before choosing a tool or owner.",
    answerFirst:
      "Automate work that is repeatable, testable, reversible and low consequence. Delegate work when another person can own it with the authority, context and development benefit to do it well. Keep a person directly responsible where judgement, empathy, contested values, legal accountability or unusual exceptions dominate. Many tasks need augmentation: AI prepares an option and an accountable person checks, decides and explains.",
    affects: [
      "Managers redesigning team workflows",
      "Operations and project leaders choosing AI use cases",
      "Employees asked to hand work to a tool",
      "Risk, privacy and HR teams reviewing consequences",
    ],
    keyTakeaways: [
      "Break a job into tasks before choosing automation.",
      "Human in the loop is meaningful only if the person can detect and reject errors.",
      "Include verification, exceptions and displaced work in the cost calculation.",
    ],
    sections: [
      {
        id: "classify",
        heading: "Classify the task",
        body: [
          "Score volume, variation, consequence of error, reversibility, data sensitivity, explanation need and dependence on tacit context. A frequent task is not automatically a safe task to automate.",
          "Mark where inputs are incomplete or contested. Those cases often need escalation or a human-led route even if routine cases use automation.",
        ],
      },
      {
        id: "four-options",
        heading: "Choose among four options",
        body: [
          "Automate a stable process, delegate ownership to a capable person, augment a person with tool support, or keep the task wholly human. State why the chosen option is better than the current method.",
        ],
        bullets: [
          "Automate: repeatable, testable and low-consequence",
          "Delegate: transferable ownership with context and authority",
          "Augment: machine speed plus informed human judgement",
          "Keep human: high-consequence, relational or norm-setting work",
        ],
      },
      {
        id: "test",
        heading: "Test the whole workflow",
        body: [
          "NIST recommends mapping context, measuring risk and managing it throughout use. Test representative inputs, rare cases, security, bias, explanations and failure recovery. Measure total process time, including review and rework.",
          "The ILO's research is about exposure potential, not an instruction to automate. Worker knowledge is needed to identify hidden exceptions and quality standards.",
        ],
      },
      {
        id: "accountability",
        heading: "Name the accountable person",
        body: [
          "Give the reviewer access to source material, enough time and the authority to reject output. Record the system version, decision and override where consequences justify it.",
          "Employment, privacy and sector rules vary. Consequential decisions about applicants, workers or customers need specialist review.",
        ],
      },
    ],
    actions: [
      "Write the task at a level small enough to test.",
      "Score consequence, uncertainty, reversibility and data sensitivity.",
      "Compare automate, delegate, augment and keep-human options.",
      "Pilot with ordinary, difficult and adversarial examples.",
      "Assign an owner, stop condition, review date and appeal route.",
    ],
    sources: [source.nistRmf, source.nistGenAi, source.iloExposure, source.eeocAi],
    relatedSlugs: [
      "introducing-ai-without-losing-trust",
      "retrain-staff-or-hire",
      "productivity-without-surveillance",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Work-design board sorting real tasks into automate, delegate, augment and keep-human columns",
  }),
  completeArticle({
    number: 42,
    slug: "productivity-without-surveillance",
    title: "How to Measure Productivity Without Employee Surveillance",
    shortTitle: "Measure productivity fairly",
    pillar: "managing-changed-work",
    portfolio: "Evergreen decision page",
    format: "Guide",
    searchIntent: "Measure team productivity without invasive worker monitoring",
    jurisdiction: "Jurisdiction varies",
    evidenceStrength: "Strong",
    nextReview: "2026-09-25",
    dek: "Use agreed outcomes, quality, flow and customer measures, while collecting the minimum worker data needed for a clear purpose.",
    answerFirst:
      "Measure whether useful work is completed well, reliably and sustainably. Start with team outcomes, quality, lead time, customer impact and capacity. Do not use keystrokes, screenshots, webcam checks, mouse movement or message counts as proxies for value. If worker data is necessary, define the purpose, minimise collection, assess impact, tell people clearly and review whether the measure improves decisions.",
    affects: [
      "Managers of remote, hybrid and office teams",
      "Organisations considering monitoring software",
      "Employees subject to individual productivity scores",
      "Privacy, HR and security teams",
    ],
    keyTakeaways: [
      "Activity is not output, and individual activity counts can distort behaviour.",
      "Team-level outcome and quality measures are usually more informative and less intrusive.",
      "In the UK, workplace monitoring must be lawful, fair and transparent under data-protection law.",
    ],
    sections: [
      {
        id: "measurement-stack",
        heading: "Build a balanced measurement stack",
        body: [
          "Choose a small number of measures across value delivered, quality, flow, customer outcome and sustainability. For example, a service team might combine resolved cases, repeat-contact rate, waiting time and avoidable overtime.",
          "Use individual measures only where attribution is fair and the measure helps the person improve. Avoid league tables for interdependent work.",
        ],
      },
      {
        id: "bad-proxies",
        heading: "Remove misleading proxies",
        body: [
          "Online time, messages, office presence and keyboard activity are easy to count but easy to game. They can penalise thinking, coaching, accessibility needs and efficient work.",
          "Before adding a metric, ask which decision it changes. If no responsible decision follows, do not collect it.",
        ],
      },
      {
        id: "privacy",
        heading: "Use a privacy and fairness test",
        body: [
          "ICO guidance says worker monitoring must be lawful and fair, with a clear purpose and transparent information. Excessive monitoring can intrude into private life and harm trust. The guidance is under review following UK legal change, so check the current regulator page.",
          "Other countries have different federal, state and sector rules. This is operational information, not legal advice.",
        ],
      },
      {
        id: "review",
        heading: "Review the system with the team",
        body: [
          "Show people the definitions, data source and limitations. Let them identify missing work, perverse incentives and unequal effects. Audit whether the measure predicts useful outcomes rather than only correlating with visibility.",
          "Retire measures that are unused, duplicative or harmful. A dashboard should be smaller after learning, not only larger.",
        ],
      },
    ],
    actions: [
      "Name the decision each proposed metric will support.",
      "Choose one value, quality, flow and sustainability measure at team level.",
      "Remove presence and device-activity proxies unless a separate lawful need is proven.",
      "Complete the relevant privacy and equality impact assessment.",
      "Review definitions and unintended effects with workers every quarter.",
    ],
    sources: [source.icoMonitoring, source.dolGoodJobs, source.nistRmf],
    relatedSlugs: [
      "remote-work-productivity-evidence",
      "automate-delegate-or-keep-human",
      "introducing-ai-without-losing-trust",
    ],
    professionSlugs: ["project-management"],
    imageAlt:
      "Manager reviewing team outcomes, quality and customer measures without screens showing employee surveillance",
  }),
  completeArticle({
    number: 43,
    slug: "retrain-staff-or-hire",
    title: "Retrain Existing Staff or Hire New Skills? A Decision Framework",
    shortTitle: "Retrain or hire?",
    pillar: "managing-changed-work",
    portfolio: "Evergreen decision page",
    format: "Decision Framework",
    searchIntent: "Choose between reskilling employees and external hiring",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    dek: "Compare the skill gap, time to competence, institutional knowledge, supply risk and fairness, then use a blended plan where the work demands it.",
    answerFirst:
      "Retrain when the new capability is learnable in the available time and existing staff bring valuable context, relationships or regulated knowledge. Hire when the capability is genuinely absent, urgent or requires deep experience that cannot safely be developed in time. Most transitions need both: a small number of experienced hires or partners who help existing employees build durable capability.",
    affects: [
      "Managers planning digital or AI capability",
      "HR and learning leaders allocating investment",
      "Employees whose roles are being redesigned",
      "Executives comparing workforce options",
    ],
    keyTakeaways: [
      "Compare time to competent performance, not course completion with recruitment date.",
      "Institutional knowledge and labour-market scarcity belong in the calculation.",
      "Training without protected practice, work access and feedback is not a reskilling plan.",
    ],
    sections: [
      {
        id: "define-gap",
        heading: "Define the capability gap",
        body: [
          "Describe observable tasks and quality standards, not a broad label such as AI skills. Separate foundational literacy, tool operation, domain judgement, data work and technical building.",
          "Use current workers to validate the task map. Forecasts such as WEF's show direction and employer expectations, not the exact gap in your organisation.",
        ],
      },
      {
        id: "compare",
        heading: "Compare five decision factors",
        body: [
          "Score scarcity, urgency, learning distance, value of organisational knowledge and consequence of error. Add realistic recruitment time, salary, onboarding, learning time and manager capacity.",
        ],
        bullets: [
          "Can competence be demonstrated within the decision window?",
          "How scarce is proven external experience?",
          "How much context would a new hire need to acquire?",
          "What is the cost of a weak first attempt?",
          "Who receives access to development and future work?",
        ],
      },
      {
        id: "blend",
        heading: "Design a blended option",
        body: [
          "A specialist hire can set standards, coach and handle the hardest cases while current staff learn on real work. A partner can provide temporary depth if knowledge transfer and exit criteria are explicit.",
          "Avoid permanent dependence on a vendor for a capability that must live inside the team. Equally, do not ask a short course to substitute for years of specialised practice.",
        ],
      },
      {
        id: "verify",
        heading: "Verify competence and fairness",
        body: [
          "Use work samples, supervised practice and outcome evidence. Track who was offered learning, who received stretch assignments and whether changed roles were recognised in pay and progression.",
          "Employment and consultation duties vary when roles or headcount change. Obtain local advice before using a skills assessment for dismissal or redundancy selection.",
        ],
      },
    ],
    actions: [
      "Write five to ten future tasks with observable standards.",
      "Estimate time to competent performance for build, buy and blended options.",
      "Price protected learning, supervision and onboarding, not only course or salary cost.",
      "Choose real work samples that demonstrate competence fairly.",
      "Set knowledge-transfer, review and workforce-consultation checkpoints.",
    ],
    sources: [source.wefJobs, source.oecdSkills, source.iloExposure],
    relatedSlugs: [
      "new-manager-skills-ai-era",
      "lead-team-when-roles-change",
      "automate-delegate-or-keep-human",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Manager comparing an internal learning pathway with an external hiring pathway on a decision canvas",
  }),
  completeArticle({
    number: 44,
    slug: "new-manager-skills-ai-era",
    title: "The New Manager Skills That Matter in the AI Era",
    shortTitle: "Manager skills for the AI era",
    pillar: "managing-changed-work",
    portfolio: "Timely interpretation",
    format: "Change Tracker",
    searchIntent: "Prioritise management skills as AI changes work",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    dek: "The durable edge is not prompt fluency alone. Managers need work design, evidence judgement, responsible adoption, coaching and clear decision rights.",
    answerFirst:
      "The manager skills rising in value are task and workflow design, evidence evaluation, AI risk judgement, clear communication under uncertainty, coaching for changing work, data and privacy literacy, and cross-functional decision-making. Prompting is useful, but it is a tool skill. Managers create more value by deciding where a system belongs, how quality will be checked and how people will learn and challenge it.",
    affects: [
      "New and experienced people managers",
      "Aspiring managers choosing development priorities",
      "Leadership and learning teams",
      "Managers in accounting, marketing and project work",
    ],
    keyTakeaways: [
      "Work design and evidence judgement are more durable than expertise in one tool interface.",
      "Responsible AI adoption is a management capability, not only a technical control.",
      "Coaching must connect learning to changed tasks and real opportunities.",
    ],
    sections: [
      {
        id: "skills",
        heading: "Seven capabilities to build",
        body: [
          "Prioritise work decomposition, problem framing, evidence evaluation, risk and data literacy, change communication, coaching, and decision-system design. Add domain-specific regulation and customer knowledge rather than replacing them.",
          "WEF employer forecasts identify analytical thinking, resilience, leadership and technology-related capabilities as important. They are directional survey evidence, not a universal curriculum.",
        ],
      },
      {
        id: "practice",
        heading: "Practise on real management decisions",
        body: [
          "Run a small workflow review, test a low-risk use case, explain an evidence limitation, coach someone through a changed task and write a clear escalation path. These artefacts demonstrate capability better than a badge alone.",
          "Use NIST's govern, map, measure and manage functions as a practical sequence for an AI-enabled process.",
        ],
      },
      {
        id: "human",
        heading: "Strengthen the human work around the system",
        body: [
          "Managers must notice when automation shifts hidden work, weakens learning or concentrates opportunity. They need to invite challenge and make it safe to report an error.",
          "The ILO's task-level findings reinforce that managers will often redesign jobs rather than simply remove them. That requires negotiation, workload judgement and fair access to development.",
        ],
      },
      {
        id: "annual-review",
        heading: "Review the skill set annually",
        body: [
          "Tool features change faster than fundamental management work. Review which decisions, risks and coordination problems have changed, then update practice and policy.",
          "Track evidence from official occupational data, regulators and original research. Do not build a development plan from vendor predictions alone.",
        ],
      },
    ],
    actions: [
      "Rate yourself against the seven capabilities using recent evidence.",
      "Choose one workflow to map and improve this month.",
      "Write a quality, risk and escalation plan for one AI-assisted task.",
      "Coach one person through a real changed responsibility.",
      "Keep a quarterly evidence log and refresh your development plan annually.",
    ],
    sources: [source.wefJobs, source.nistRmf, source.iloExposure, source.oecdSkills],
    relatedSlugs: [
      "introducing-ai-without-losing-trust",
      "lead-team-when-roles-change",
      "retrain-staff-or-hire",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced manager practising work design, evidence review and coaching with a diverse team",
  }),
  completeArticle({
    number: 47,
    slug: "jobs-expected-to-grow-by-2030",
    title: "Jobs Expected to Grow by 2030, With the Forecasts Explained",
    shortTitle: "Jobs expected to grow by 2030",
    pillar: "profession-trackers",
    portfolio: "Change tracker",
    format: "Change Tracker",
    searchIntent: "Identify growing occupations and understand forecast uncertainty",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    dek: "Health, care, technology, data, security, green-energy and selected management roles appear repeatedly, but the forecasts answer different questions.",
    answerFirst:
      "Occupations linked to health and care demand, data and software, cyber security, renewable energy and infrastructure, and selected professional and management services are expected to grow in major forecasts. Do not read that as a guaranteed route into a good job. WEF forecasts global net changes to 2030, while the current US BLS projections cover 2024 to 2034. Growth rate, number of openings, pay, entry requirements and local demand can point in different directions.",
    affects: [
      "Mid-career professionals considering a resilient direction",
      "Career changers comparing training options",
      "Workers evaluating forecasts about their occupation",
      "Managers planning capability and recruitment",
    ],
    keyTakeaways: [
      "A fast growth percentage can start from a small employment base.",
      "Replacement openings can matter more than net growth for actual opportunity.",
      "Use the forecast for your country, occupation code and time horizon before acting.",
    ],
    sections: [
      {
        id: "repeated-growth",
        heading: "Where growth signals repeat",
        body: [
          "Current BLS projections show fast percentage growth in roles including wind turbine service, solar installation, nurse practitioners, data science and information security. Its largest-new-jobs list also includes care, software, nursing and general operations roles.",
          "WEF's employer survey points to growth in technology, care, education, green-transition and delivery-related roles through 2030. Agreement on a broad theme raises confidence, but country demand and occupational definitions still differ.",
        ],
      },
      {
        id: "four-numbers",
        heading: "Read four numbers, not one ranking",
        body: [
          "Check percentage growth, net new jobs, annual openings and current employment base. Then add pay distribution, qualification route and geography. A large occupation growing steadily may create more openings than a tiny occupation with a dramatic percentage.",
          "Replacement openings arise when people retire or change occupations. They can create opportunity even when total employment barely grows.",
        ],
      },
      {
        id: "forecast-limits",
        heading: "Understand the forecast limits",
        body: [
          "BLS projections assume a model of the US economy and explicitly do not predict business cycles or every technology shock. WEF is a survey of employers across countries and industries. ILO exposure estimates describe tasks that generative AI could affect, not a headcount forecast.",
          "For 2030, avoid splicing a 2034 percentage into a precise 2030 claim. Use direction and revisit each annual release.",
        ],
      },
      {
        id: "personal-decision",
        heading: "Turn a forecast into a career test",
        body: [
          "Shortlist occupations that use your existing domain knowledge, then inspect actual tasks, local adverts and entry requirements. Speak with people doing the work and test a representative task before paying for long training.",
          "Resilience is not only occupation growth. Employment concentration, physical demands, licensing, schedule, automation exposure and job quality all matter.",
        ],
      },
    ],
    actions: [
      "Choose the official forecast for your country and note its horizon.",
      "Record percentage growth, net change, annual openings and employment base.",
      "Compare occupational tasks with your current evidence and transferable skills.",
      "Sample local adverts for pay, location and qualification reality.",
      "Set a quarterly reminder to check releases and update your decision.",
    ],
    sources: [source.blsFastest, source.wefJobs, source.iloExposure, source.oecdEmployment],
    relatedSlugs: [
      "ai-changing-accounting-jobs",
      "ai-changing-marketing-jobs",
      "ai-changing-project-management",
      "retrain-staff-or-hire",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Mid-career professional comparing occupation growth, openings and training requirements across several sectors",
  }),
  completeArticle({
    number: 48,
    slug: "ai-changing-accounting-jobs",
    title: "How AI Is Changing Accounting Jobs",
    shortTitle: "AI and accounting jobs",
    pillar: "profession-trackers",
    portfolio: "Change tracker",
    format: "Role Impact",
    searchIntent: "Assess how AI changes accounting work and career resilience",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2026-08-25",
    dek: "Routine preparation is becoming easier to automate, while assurance, controls, interpretation and accountable judgement become more important.",
    answerFirst:
      "AI is changing accounting tasks faster than it is eliminating the profession. Transaction coding, document extraction, reconciliations, variance explanations and first-draft reporting can be assisted or partly automated. Accountants remain responsible for evidence, controls, exceptions, professional judgement and communication. Current US BLS projections still show accountants and auditors growing from 2024 to 2034, although job growth does not guarantee that today's task mix will remain.",
    affects: [
      "Management and financial accountants",
      "Auditors and assurance professionals",
      "Finance operations and accounts teams",
      "Mid-career accountants choosing development priorities",
    ],
    keyTakeaways: [
      "Routine information processing is more exposed than accountable assurance and judgement.",
      "Employment outlook and task change can both be positive at the same time.",
      "The strongest near-term skills combine accounting depth, controls, data fluency and clear explanation.",
    ],
    sections: [
      {
        id: "changing-tasks",
        heading: "Tasks changing first",
        body: [
          "Tools can extract invoice fields, suggest coding, match transactions, draft commentary and query large ledgers. These uses can shorten preparation, but they also create review work around completeness, provenance, access and unusual cases.",
          "O*NET's occupation data show that accountants analyse records, prepare statements, advise and evaluate work. AI affects pieces of that workflow rather than replacing one uniform job.",
        ],
      },
      {
        id: "durable-work",
        heading: "Work that becomes more valuable",
        body: [
          "Control design, audit evidence, materiality judgement, investigation, tax and regulatory interpretation, scenario advice and communication with decision-makers remain consequential. A fluent explanation of why a number is reliable matters more when generating a plausible number is easy.",
          "Domain knowledge also helps detect outputs that are internally coherent but inconsistent with the business or reporting framework.",
        ],
      },
      {
        id: "outlook",
        heading: "What the employment evidence says",
        body: [
          "BLS projects 5% US employment growth for accountants and auditors between 2024 and 2034, with substantial annual openings that include replacement needs. That is a national projection, not a forecast for a particular firm, specialism or country.",
          "The ILO finds that generative AI exposure is often higher in digitised and clerical task mixes. Exposure signals redesign potential, not automatic job loss.",
        ],
      },
      {
        id: "tracker",
        heading: "What to track each month",
        body: [
          "Watch which tasks employers place inside approved systems, where human sign-off remains, whether junior learning work is disappearing and which controls regulators or professional bodies expect.",
          "Separate vendor claims from observed workflow results. Record time saved alongside errors, rework and control exceptions.",
        ],
      },
    ],
    actions: [
      "Map your monthly tasks by preparation, review, judgement and communication.",
      "Choose one low-risk repetitive task and document its control points.",
      "Practise validating provenance, assumptions and exceptions in AI-assisted output.",
      "Build one portfolio example that connects data analysis to an accounting decision.",
      "Review your regulator, employer and professional body's current AI rules before using client or company data.",
    ],
    sources: [source.blsAccountants, source.onetAccountants, source.iloExposure, source.nistGenAi],
    relatedSlugs: [
      "automate-delegate-or-keep-human",
      "jobs-expected-to-grow-by-2030",
      "introducing-ai-without-losing-trust",
    ],
    professionSlugs: ["accounting"],
    imageAlt:
      "Experienced accountant examining source records, control checks and an AI-assisted draft financial analysis",
  }),
  completeArticle({
    number: 49,
    slug: "ai-changing-marketing-jobs",
    title: "How AI Is Changing Marketing Jobs",
    shortTitle: "AI and marketing jobs",
    pillar: "profession-trackers",
    portfolio: "Change tracker",
    format: "Role Impact",
    searchIntent: "Assess how AI changes marketing tasks, skills and hiring",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2026-08-25",
    dek: "Content production is getting cheaper, while evidence, differentiation, customer understanding, experimentation and responsible data use become more valuable.",
    answerFirst:
      "AI is compressing first drafts, variants, research summaries, tagging and routine campaign operations. It is not removing the need to understand customers, choose a position, design valid tests, protect brand and data, or decide what evidence deserves action. Current US BLS projections show growth for market research analysts and marketing specialists through 2034, but roles built mainly around undifferentiated production face more pressure.",
    affects: [
      "Brand, content, performance and product marketers",
      "Market researchers and customer-insight specialists",
      "Marketing managers redesigning teams",
      "Freelancers whose work includes routine production",
    ],
    keyTakeaways: [
      "The value shift is from producing more assets to making better evidence-led choices.",
      "Original customer insight and trustworthy measurement are harder to commoditise than generic copy.",
      "Marketers need provenance, privacy and claim-checking skills alongside tool fluency.",
    ],
    sections: [
      {
        id: "changing-tasks",
        heading: "Tasks changing first",
        body: [
          "Drafting variants, resizing concepts, summarising interviews, classifying feedback and building initial reports can become faster. The risk is a larger volume of similar work with weak source grounding and more review overhead.",
          "O*NET describes market research work as collecting, analysing and presenting information about customers and markets. Generative tools can assist each stage, but the validity of the underlying sample and inference remains a human responsibility.",
        ],
      },
      {
        id: "skills",
        heading: "Skills gaining value",
        body: [
          "Problem framing, research design, positioning, experimentation, causal reasoning, first-party data stewardship, creative direction and commercial judgement become more important. So does the ability to show where a claim came from.",
          "A useful marketer can connect an output to a customer decision and a business result, then explain uncertainty without hiding it.",
        ],
      },
      {
        id: "outlook",
        heading: "What the employment evidence says",
        body: [
          "BLS projects 7% US growth for market research analysts and marketing specialists between 2024 and 2034. The projection cites increasing use of data and market research. It does not predict the future of every content, agency or marketing-manager role.",
          "ILO exposure research suggests strongly digitised professional tasks are increasingly within generative AI's reach. That supports a task redesign interpretation, not a claim that marketing as a profession disappears.",
        ],
      },
      {
        id: "tracker",
        heading: "What to track each month",
        body: [
          "Monitor changes in approved tools, search and platform distribution, privacy rules, content provenance requirements, entry-level work and employer demand for research, analytics and experimentation.",
          "Measure whether AI-assisted work improves conversion, retention or understanding after accounting for media spend and review time. Asset volume alone is not success.",
        ],
      },
    ],
    actions: [
      "Audit your role into insight, choice, production, distribution and measurement tasks.",
      "Build one original customer-evidence asset rather than another generic content sample.",
      "Document sources, permissions and review for every AI-assisted campaign.",
      "Strengthen one measurement skill, such as experiment design or incrementality.",
      "Track role adverts monthly for changes in tasks and evidence requirements.",
    ],
    sources: [source.blsMarketing, source.onetMarketing, source.iloExposure, source.icoAi],
    relatedSlugs: [
      "jobs-expected-to-grow-by-2030",
      "ai-changing-accounting-jobs",
      "ai-changing-project-management",
      "automate-delegate-or-keep-human",
    ],
    professionSlugs: ["marketing"],
    imageAlt:
      "Mid-career marketer combining original customer research, campaign evidence and carefully reviewed AI-assisted concepts",
  }),
  completeArticle({
    number: 50,
    slug: "ai-changing-project-management",
    title: "How AI Is Changing Project Management",
    shortTitle: "AI and project management",
    pillar: "profession-trackers",
    portfolio: "Change tracker",
    format: "Role Impact",
    searchIntent: "Assess how AI changes project-management tasks and career value",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2026-08-25",
    dek: "Administration can shrink, but accountable planning, negotiation, risk judgement and organisational delivery remain the centre of the role.",
    answerFirst:
      "AI can draft plans, meeting notes, status summaries, risk prompts, estimates and stakeholder updates. It cannot own a commitment, resolve a contested priority or be accountable for delivery. Project managers who spend most of their time moving information may see the greatest task change. Those who frame decisions, surface risk, align people and test whether the plan matches reality become more valuable. Current US BLS projections still show growth for project management specialists through 2034.",
    affects: [
      "Project, programme and delivery managers",
      "PMO and project-control professionals",
      "Team leads who manage cross-functional change",
      "Aspiring project managers choosing skills",
    ],
    keyTakeaways: [
      "Administrative coordination is more exposed than accountable delivery judgement.",
      "Generated plans are hypotheses that need owners, evidence and constraints.",
      "Project managers need data, governance and facilitation skills as routine reporting changes.",
    ],
    sections: [
      {
        id: "changing-tasks",
        heading: "Tasks changing first",
        body: [
          "Transcription, action extraction, first-draft schedules, report assembly and risk brainstorming are increasingly assistive use cases. Integration with project systems can reduce duplicate entry, but stale or incomplete source data can make polished output misleading.",
          "O*NET and BLS describe the role around requirements, schedules, resources, costs, milestones and stakeholder communication. AI changes how information is prepared, not who must secure agreement and act on it.",
        ],
      },
      {
        id: "durable-work",
        heading: "Work that becomes more valuable",
        body: [
          "Trade-off facilitation, dependency judgement, escalation, commercial awareness, change control, benefits reasoning and psychological safety remain relational and accountable. Knowing when the plan is false is a high-value capability.",
          "Managers also need to design where AI output enters governance, who validates it and how a stakeholder can challenge a recommendation.",
        ],
      },
      {
        id: "outlook",
        heading: "What the employment evidence says",
        body: [
          "BLS projects 6% US growth for project management specialists from 2024 to 2034, with 78,200 openings a year on average, many from replacement. It expects demand from organisations managing operations and complex technology projects.",
          "That projection is not evidence that every PMO task will persist. ILO exposure data indicate that digitised professional tasks can change substantially even when occupation-level demand remains.",
        ],
      },
      {
        id: "tracker",
        heading: "What to track each month",
        body: [
          "Watch whether approved tools connect to source systems, which artefacts are generated, how review is recorded, whether junior coordination work is shrinking and what employers ask candidates to demonstrate.",
          "Track outcome quality and decision latency, not only hours saved producing status documents. A faster inaccurate report is negative productivity.",
        ],
      },
    ],
    actions: [
      "Map your work into administration, analysis, facilitation, judgement and accountability.",
      "Pilot one low-risk drafting task with a named source of truth and reviewer.",
      "Practise turning uncertainty into a decision, owner, threshold and review date.",
      "Build evidence of resolving a cross-functional dependency or trade-off.",
      "Review role adverts and official occupation data every month.",
    ],
    sources: [source.blsProject, source.onetProject, source.iloExposure, source.nistRmf],
    relatedSlugs: [
      "jobs-expected-to-grow-by-2030",
      "new-manager-skills-ai-era",
      "automate-delegate-or-keep-human",
      "ai-changing-marketing-jobs",
    ],
    professionSlugs: ["project-management"],
    imageAlt:
      "Experienced project manager facilitating a delivery decision while an AI tool prepares a draft status summary",
  }),
];
