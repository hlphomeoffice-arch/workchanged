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
  nationalCareersSkills: {
    publisher: "National Careers Service",
    title: "Discover your skills and careers",
    url: "https://nationalcareers.service.gov.uk/discover-your-skills-and-careers/",
    published: "Current official service, accessed 25 July 2026",
    type: "Official guidance",
    note: "A free England-based assessment for exploring motivations, skills and possible careers.",
  },
  nationalCareersAdvice: {
    publisher: "National Careers Service",
    title: "Careers advice",
    url: "https://nationalcareers.service.gov.uk/careers-advice",
    published: "Current official guidance, accessed 25 July 2026",
    type: "Official guidance",
  },
  nationalCareersApplications: {
    publisher: "National Careers Service",
    title: "Application form advice",
    url: "https://nationalcareers.service.gov.uk/careers-advice/application-forms",
    published: "Current official guidance, accessed 25 July 2026",
    type: "Official guidance",
  },
  careerOneStopChange: {
    publisher: "CareerOneStop, U.S. Department of Labor",
    title: "CareerOneStop Paths: Change your occupation or industry",
    url: "https://cloudfront.careeronestop.org/TridionMultimedia/tcm24-50399_PDF_changeoccupationuserguideACC.pdf",
    published: "Current user guide, accessed 25 July 2026",
    type: "Official guidance",
    note: "A structured occupation-change path covering assessments, research, informational interviews and applications.",
  },
  onetTransferable: {
    publisher: "O*NET OnLine, U.S. Department of Labor",
    title: "Browse by Transferable Skills",
    url: "https://www.onetonline.org/find/descriptor/browse/2.B/2.A/",
    published: "Current occupational data, accessed 25 July 2026",
    type: "Official statistics",
  },
  onetOverview: {
    publisher: "O*NET OnLine, U.S. Department of Labor",
    title: "O*NET Overview",
    url: "https://www.onetonline.org/help/onet/",
    published: "Current occupational data, accessed 25 July 2026",
    type: "Official statistics",
    note: "Explains the task, skill, ability and work-context evidence behind O*NET occupation profiles.",
  },
  oecdCareerGuidance: {
    publisher: "Organisation for Economic Co-operation and Development",
    title: "Career Guidance for Adults in a Changing World of Work",
    url: "https://www.oecd.org/en/publications/career-guidance-for-adults-in-a-changing-world-of-work_9a94bfad-en.html",
    published: "26 January 2021",
    type: "Primary report",
  },
  oecdMobility2025: {
    publisher: "Organisation for Economic Co-operation and Development",
    title: "Reviving growth in a time of workforce ageing: The role of job mobility",
    url: "https://www.oecd.org/en/publications/oecd-employment-outlook-2025_194a947b-en/full-report/reviving-growth-in-a-time-of-workforce-ageing-the-role-of-job-mobility_6fdecf3a.html",
    published: "9 July 2025",
    type: "Primary report",
    note: "Cross-country evidence about job-to-job mobility, mid-career barriers and involuntary displacement.",
  },
  oecdCareerMobility: {
    publisher: "Organisation for Economic Co-operation and Development",
    title: "Promoting Better Career Choices for Longer Working Lives: Stepping Up Not Stepping Out",
    url: "https://www.oecd.org/en/publications/promoting-better-career-choices-for-longer-working-lives_1ef9a0d0-en.html",
    published: "11 March 2024",
    type: "Primary report",
  },
  onsEarnings: {
    publisher: "Office for National Statistics",
    title: "Employee earnings in the UK: 2025",
    url: "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/bulletins/annualsurveyofhoursandearnings/latest",
    published: "23 October 2025",
    type: "Official statistics",
    note: "Occupation, industry, age and location estimates from the Annual Survey of Hours and Earnings.",
  },
  blsWages: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Occupational Employment and Wages, May 2025",
    url: "https://www.bls.gov/news.release/ocwage.nr0.htm",
    published: "15 May 2026",
    type: "Official statistics",
  },
  govRedundancy: {
    publisher: "GOV.UK",
    title: "Redundancy: your rights",
    url: "https://www.gov.uk/redundancy-your-rights",
    published: "Current guidance, accessed 25 July 2026",
    type: "Official guidance",
    note: "Applies to Great Britain. Northern Ireland has separate employment law and guidance.",
  },
  acasRedundancy: {
    publisher: "Acas",
    title: "When redundancy can happen: Your rights during redundancy",
    url: "https://www.acas.org.uk/your-rights-during-redundancy",
    published: "Updated 7 April 2026",
    type: "Official guidance",
    note: "Guidance for England, Scotland and Wales.",
  },
  dolWarn: {
    publisher: "U.S. Department of Labor",
    title: "Worker's Guide to Advance Notice of Closings and Layoffs",
    url: "https://www.dol.gov/sites/dolgov/files/ETA/layoff/pdfs/WorkerWARN2003.pdf",
    published: "Official WARN Act guide, accessed 25 July 2026",
    type: "Official guidance",
    note: "Federal WARN coverage is limited. State notice laws can differ or go further.",
  },
  dolUnemployment: {
    publisher: "U.S. Department of Labor",
    title: "How Do I File for Unemployment Insurance?",
    url: "https://www.dol.gov/general/topic/unemployment-insurance",
    published: "Current official guidance, accessed 25 July 2026",
    type: "Official guidance",
  },
  onsLabour: {
    publisher: "Office for National Statistics",
    title: "Labour market overview, UK: July 2026",
    url: "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/uklabourmarket/july2026",
    published: "21 July 2026",
    type: "Official statistics",
    note: "ONS advises caution with short-term Labour Force Survey movements because of data quality and volatility.",
  },
  onsVacancies: {
    publisher: "Office for National Statistics",
    title: "Vacancies and jobs in the UK: July 2026",
    url: "https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/jobsandvacanciesintheuk/july2026",
    published: "21 July 2026",
    type: "Official statistics",
  },
  blsEmployment: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "The Employment Situation, June 2026",
    url: "https://www.bls.gov/news.release/archives/empsit_07022026.pdf",
    published: "2 July 2026",
    type: "Official statistics",
  },
  blsJolts: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Job Openings and Labor Turnover, May 2026",
    url: "https://www.bls.gov/news.release/archives/jolts_06302026.htm",
    published: "30 June 2026",
    type: "Official statistics",
  },
  blsDuration: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Unemployed people by age and duration of unemployment, June 2026",
    url: "https://www.bls.gov/web/empsit/cpseea36.htm",
    published: "2 July 2026",
    type: "Official statistics",
    note: "A snapshot of people still unemployed, not a measure of completed job searches.",
  },
  onsDuration: {
    publisher: "Office for National Statistics",
    title: "Unemployment by age and duration, seasonally adjusted",
    url: "https://www.ons.gov.uk/employmentandlabourmarket/peoplenotinwork/unemployment/datasets/unemploymentbyageanddurationseasonallyadjustedunem01sa",
    published: "21 July 2026",
    type: "Official statistics",
    note: "Official statistics in development sourced from the UK Labour Force Survey.",
  },
  blsTenure: {
    publisher: "U.S. Bureau of Labor Statistics",
    title: "Employee Tenure in 2024",
    url: "https://www.bls.gov/news.release/tenure.htm",
    published: "26 September 2024",
    type: "Official statistics",
  },
  atlantaWages: {
    publisher: "Federal Reserve Bank of Atlanta",
    title: "Wage Growth Tracker",
    url: "https://www.atlantafed.org/research-and-data/data/wage-growth-tracker",
    published: "Updated 9 July 2026",
    type: "Official statistics",
    note: "A CPS-based tracker of median nominal wage growth for continuously employed people, including job switchers and stayers.",
  },
  fedJobQuality: {
    publisher: "Board of Governors of the Federal Reserve System",
    title: "Local Labor Market Tightness and Job Quality: Evidence from Job Changers",
    url: "https://www.federalreserve.gov/econres/feds/local-labor-market-tightness-and-job-quality-evidence-from-job-changers.htm",
    published: "22 June 2026",
    type: "Original research",
  },
  nyPayTransparency: {
    publisher: "New York State Department of Labor",
    title: "Pay Transparency",
    url: "https://dol.ny.gov/pay-transparency",
    published: "Current guidance, accessed 25 July 2026",
    type: "Official guidance",
  },
  ukGenderPay: {
    publisher: "GOV.UK",
    title: "Gender pay gap reporting and creating an action plan: guidance for employers",
    url: "https://www.gov.uk/government/collections/gender-pay-gap-reporting-and-creating-an-action-plan-guidance-for-employers",
    published: "7 April 2026",
    type: "Official guidance",
    note: "Reporting is not the same as requiring salary ranges in individual job adverts.",
  },
  euPayTransparency: {
    publisher: "Official Journal of the European Union",
    title:
      "Directive (EU) 2023/970 to strengthen the application of the principle of equal pay for equal work or work of equal value between men and women through pay transparency and enforcement mechanisms",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023L0970",
    published: "17 May 2023",
    type: "Regulator guidance",
    note: "Member states must transpose the directive. National implementation determines the applicable route and timing.",
  },
  eeocEqualPay: {
    publisher: "U.S. Equal Employment Opportunity Commission",
    title: "What You Should Know: Questions and Answers About the Equal Pay Act",
    url: "https://www.eeoc.gov/laws/guidance/what-you-should-know-questions-and-answers-about-equal-pay-act",
    published: "10 June 2013; current guidance accessed 25 July 2026",
    type: "Regulator guidance",
  },
  whoBurnout: {
    publisher: "World Health Organization",
    title: "Burn-out an occupational phenomenon",
    url: "https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon",
    published: "Current ICD-11 explanation, accessed 25 July 2026",
    type: "Official guidance",
  },
  nhsStress: {
    publisher: "NHS",
    title: "Get help with stress",
    url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/stress/",
    published: "Current clinical guidance, accessed 25 July 2026",
    type: "Official guidance",
  },
  hseStress: {
    publisher: "Health and Safety Executive",
    title: "Management Standards",
    url: "https://www.hse.gov.uk/stress/standards/",
    published: "Updated 13 January 2025",
    type: "Regulator guidance",
    note: "HSE framework for assessing and managing work-related stress risks.",
  },
  plateauReview: {
    publisher: "Journal of Vocational Behavior",
    title: "Career plateau: A review of 40 years of research",
    url: "https://doi.org/10.1016/j.jvb.2018.11.005",
    published: "February 2019",
    type: "Original research",
    note: "A review of 72 empirical studies distinguishing hierarchical and job-content plateaus.",
  },
} satisfies Record<string, ArticleSource>;

export const careerAndSecurityArticles: Article[] = [
  completeArticle({
    number: 11,
    slug: "change-careers-at-40-without-starting-from-zero",
    title: "How to Change Careers at 40 Without Starting From Zero",
    shortTitle: "Change careers at 40",
    pillar: "career-moves",
    portfolio: "Evergreen decision page",
    format: "Guide",
    searchIntent: "Plan a mid-life career change that preserves valuable experience",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    readingMinutes: 10,
    dek: "A good mid-career move transfers evidence, relationships and judgement into a new setting instead of pretending the last twenty years did not happen.",
    answerFirst:
      "Changing career at 40 rarely means returning to the beginning. The lower-risk route is to move one dimension at a time: into a new function in a familiar sector, a familiar function in a new sector, or a neighbouring role that values the same problems you already solve. Begin with tasks and proof, test two or three realistic destinations, and make the smallest move that creates the future you want.",
    affects: [
      "Professionals in their late thirties, forties and early fifties considering a substantial move",
      "People whose role is narrowing because of technology or restructuring",
      "Workers who cannot afford a long period without income",
      "People with deep experience that is described too narrowly by their current title",
    ],
    keyTakeaways: [
      "Your strongest bridge is proven work, not a claim that you are a fast learner.",
      "Adjacent moves usually preserve more pay, status and confidence than a simultaneous change of role, sector and working pattern.",
      "Test the daily work and hiring route before paying for a qualification.",
    ],
    sections: [
      {
        id: "what-changed",
        heading: "What changes at 40",
        body: [
          "The decision carries more constraints than an early-career experiment. Mortgage or rent, caring, pension contributions, location and accumulated benefits can all matter. Those constraints are design inputs, not evidence that you have missed your chance.",
          "The advantage is a bank of examples: decisions made under pressure, stakeholders handled, systems improved, revenue protected, risks reduced and colleagues developed. Employers may not translate that evidence for you. Your task is to express it in the language of the destination role.",
        ],
      },
      {
        id: "choose-bridge",
        heading: "Choose a bridge, not a leap",
        body: [
          "Write three destination hypotheses. One keeps your sector and changes function, one keeps your function and changes sector, and one is a genuinely new occupation. Compare the task overlap, entry requirements, local demand, likely pay range and time to credible evidence.",
          "O*NET and official career services are useful starting points because they describe tasks and skills. They do not tell you whether a particular employer will value your history, so add conversations with people doing the work.",
        ],
        bullets: [
          "Same problems, new setting",
          "Same stakeholders, broader responsibility",
          "Same tools, different commercial outcome",
          "New occupation with a paid or reversible trial",
        ],
      },
      {
        id: "translate-experience",
        heading: "Translate experience into destination evidence",
        body: [
          "Replace a title-led CV with six to ten proof statements. Each should name the problem, what you did, the scale or constraint, and the result. Then map each statement to a task in genuine vacancies. Gaps that appear repeatedly are learning priorities; gaps mentioned once may be employer-specific.",
          "Do not erase seniority to look flexible. Show that your experience shortens risk for the new employer while being clear about what you still need to learn.",
        ],
      },
      {
        id: "test-before-commit",
        heading: "Test the move before committing",
        body: [
          "Run a small real-world test: shadow someone, complete a scoped project, volunteer for an internal assignment, produce a portfolio example or take a short course with assessed work. A test should reveal whether you like the ordinary tasks, not only the subject.",
          "Set stop rules before spending. If ten informed conversations reveal a mandatory licence, build it into the plan. If employers care more about work samples than certificates, create the sample first.",
        ],
      },
    ],
    actions: [
      "List ten pieces of work you can prove, including outcomes and constraints.",
      "Compare three destination hypotheses by task overlap, pay, demand and entry cost.",
      "Speak with at least five people doing each serious destination role.",
      "Run one low-cost work test before enrolling in a long programme.",
      "Write a bridge statement that connects your past evidence to the destination employer's problem.",
    ],
    sources: [
      source.oecdCareerGuidance,
      source.oecdCareerMobility,
      source.nationalCareersSkills,
      source.careerOneStopChange,
    ],
    relatedSlugs: [
      "change-careers-without-large-pay-cut",
      "transferable-skills-find-yours",
      "90-day-career-change-plan",
      "career-plateau-signs-causes-next-move",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced professional mapping proven achievements to three adjacent career paths on a quiet studio wall",
  }),
  completeArticle({
    number: 12,
    slug: "change-careers-without-large-pay-cut",
    title: "How to Change Careers Without Taking a Large Pay Cut",
    shortTitle: "Change career and protect pay",
    pillar: "career-moves",
    portfolio: "Evergreen decision page",
    format: "Decision Framework",
    searchIntent: "Assess the financial trade-offs of a career transition",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    readingMinutes: 10,
    dek: "Protect income by changing fewer variables at once, pricing the full package and proving value before you cross the bridge.",
    answerFirst:
      "You cannot guarantee no pay cut, but you can reduce the risk. Target roles with substantial task overlap, use official occupation and location pay data, compare total compensation rather than salary alone, and build destination evidence while still employed. A temporary reduction can be rational only when it is affordable, time-limited and linked to a credible route back up.",
    affects: [
      "Mid-career professionals supporting a household",
      "People moving from a declining role into an adjacent occupation",
      "Workers comparing an internal move with a new employer",
      "Career changers considering expensive training or a junior title",
    ],
    keyTakeaways: [
      "Changing sector or function is usually cheaper than changing both at the same time.",
      "Published pay figures are reference points, not offers, and must be matched by occupation, location and level.",
      "A lower starting salary is only a plan when the recovery route, deadline and downside are explicit.",
    ],
    sections: [
      {
        id: "calculate-floor",
        heading: "Calculate your real floor",
        body: [
          "Start with the minimum monthly household cash requirement, not your current headline salary. Add pension or retirement contributions, insurance, leave, bonus reliability, commuting, childcare, training costs and the value of flexibility.",
          "Create three figures: the lowest sustainable package, the target package and the walk-away point. A role that pays less but removes a large commute may be financially closer than it looks. A higher salary with weak benefits can be the reverse.",
        ],
      },
      {
        id: "price-market",
        heading: "Price the destination carefully",
        body: [
          "Use ONS occupation-level earnings for the UK and BLS occupational wage data for the US. Compare the right geography and level. Median pay does not describe a guaranteed starting rate, and averages can conceal a wide spread by industry.",
          "Read twenty to thirty current vacancies and record advertised ranges where available. Ask people in the field how employers credit adjacent experience. Treat recruiter estimates as one input, not an independent fact.",
        ],
      },
      {
        id: "preserve-value",
        heading: "Choose moves that preserve value",
        body: [
          "The most defensible salary story is continuity of outcome: the new role needs the same client judgement, regulatory knowledge, programme delivery, financial control or commercial decision-making in a different context.",
          "Internal secondments, cross-functional projects, supplier work and portfolio assignments can create proof without resetting tenure. If a new credential is required, ask whether your employer will fund it or whether a shorter assessed route is accepted.",
        ],
      },
      {
        id: "model-recovery",
        heading: "Model a temporary pay reduction",
        body: [
          "Write a twelve, twenty-four and thirty-six month scenario. Include likely progression, probability, additional training, missed pension contributions and the cost if the role does not work out. Do not use the top of a future salary range as the base case.",
          "OECD evidence shows that voluntary mobility can improve pay and job quality, while involuntary displacement can be costly, particularly in mid-career. That is a population pattern, not a promise about your move.",
        ],
      },
    ],
    actions: [
      "Calculate a total-compensation floor and a separate preferred target.",
      "Collect current pay evidence for the exact occupation, level and location.",
      "Identify the two destination tasks where your existing evidence is strongest.",
      "Negotiate level, review timing, pension, leave, flexibility and development together.",
      "Reject any pay-recovery story that lacks a role, evidence threshold and date.",
    ],
    sources: [
      source.onsEarnings,
      source.blsWages,
      source.oecdMobility2025,
      source.careerOneStopChange,
    ],
    relatedSlugs: [
      "change-careers-at-40-without-starting-from-zero",
      "internal-move-or-new-employer",
      "salary-transparency-what-is-changing",
      "salary-negotiation-slower-job-market",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Mid-career professional comparing salary, pension, flexibility and training across two realistic job offers",
  }),
  completeArticle({
    number: 13,
    slug: "transferable-skills-find-yours",
    title: "Transferable Skills: A Practical Way to Find Yours",
    shortTitle: "Find your transferable skills",
    pillar: "career-moves",
    portfolio: "Evergreen decision page",
    format: "Guide",
    searchIntent: "Identify and evidence skills that transfer between roles",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Strong",
    nextReview: "2027-01-25",
    dek: "Find transferable skills in the work you can demonstrate, then translate them into the task language of a specific destination.",
    answerFirst:
      "A transferable skill is not a flattering adjective. It is a developed capacity you have used in one setting and can plausibly apply in another. Find yours by collecting concrete work episodes, naming the actions you performed, checking them against destination tasks, and attaching evidence of level and outcome.",
    affects: [
      "People struggling to describe experience outside their current title",
      "Career changers moving between sectors or functions",
      "Workers returning after a break",
      "Professionals preparing an internal move or redundancy plan",
    ],
    keyTakeaways: [
      "Start with episodes and tasks, not a generic list of strengths.",
      "Transferability depends on context, level and evidence, not the skill label alone.",
      "The employer-facing version should connect a skill to a destination problem and result.",
    ],
    sections: [
      {
        id: "collect-evidence",
        heading: "Collect five evidence-rich episodes",
        body: [
          "Choose pieces of work where something was difficult, uncertain or consequential. Note the situation, your decisions, tools, stakeholders, constraints and result. Include ordinary work that became reliable because of you, not only award-winning projects.",
          "Underline the verbs. Diagnosed, reconciled, negotiated, sequenced, coached, tested and simplified are more useful than strategic, dynamic or experienced.",
        ],
      },
      {
        id: "name-skill",
        heading: "Name the underlying skill",
        body: [
          "Group similar actions under a portable capability such as complex problem solving, stakeholder communication, financial resource management, quality control or learning strategy. O*NET provides a common vocabulary and shows that the importance and level of a skill vary by occupation.",
          "Separate knowledge from skill. Knowing UK payroll rules is knowledge; investigating discrepancies and explaining decisions are skills that may travel further.",
        ],
      },
      {
        id: "test-transfer",
        heading: "Test transfer against a real destination",
        body: [
          "Take five genuine vacancies and mark each required task as direct evidence, adjacent evidence or a real gap. A transferable skill becomes credible when the destination uses it at a comparable level and under understandable conditions.",
          "Ask someone in the role what a good result looks like. A project manager and a clinician may both coordinate people, but the risk, authority, vocabulary and proof required differ.",
        ],
      },
      {
        id: "write-proof",
        heading: "Turn the skill into proof",
        body: [
          "Use a compact structure: capability, context, action, outcome and relevance. For example, do not write 'strong stakeholder management'. Explain that you aligned finance, operations and a supplier around a delayed launch, agreed trade-offs and restored the delivery date.",
          "Keep an evidence bank with fuller notes. It can supply CV bullets, interview examples, portfolio cases and development gaps without inventing a new story for every application.",
        ],
      },
    ],
    actions: [
      "Write five work episodes with actions, constraints and outcomes.",
      "Underline the verbs and group repeated actions into capabilities.",
      "Compare those capabilities with tasks in five destination vacancies.",
      "Ask one destination professional where context changes the skill.",
      "Create three proof statements and one honest gap statement.",
    ],
    sources: [
      source.onetTransferable,
      source.onetOverview,
      source.nationalCareersSkills,
      source.careerOneStopChange,
    ],
    relatedSlugs: [
      "change-careers-at-40-without-starting-from-zero",
      "90-day-career-change-plan",
      "internal-move-or-new-employer",
      "career-plateau-signs-causes-next-move",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced worker sorting project evidence into transferable skills and destination job tasks",
  }),
  completeArticle({
    number: 14,
    slug: "90-day-career-change-plan",
    title: "A 90-Day Career-Change Plan for Busy Professionals",
    shortTitle: "A 90-day career-change plan",
    pillar: "career-moves",
    portfolio: "Evergreen decision page",
    format: "Checklist",
    searchIntent: "Take structured career-change action alongside full-time work",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    readingMinutes: 10,
    dek: "Use ninety days to reduce uncertainty, build destination proof and make a decision, not to force an arbitrary resignation date.",
    answerFirst:
      "A useful ninety-day plan has three phases: diagnose and narrow in days 1 to 30, test and build evidence in days 31 to 60, then enter the market and decide in days 61 to 90. Protect two focused sessions a week, set small deliverables, and keep your current job unless your circumstances or health require a different choice.",
    affects: [
      "Full-time professionals with limited time for a career change",
      "People with several possible directions and no decision rule",
      "Workers who need evidence before paying for retraining",
      "Professionals preparing quietly for organisational change",
    ],
    keyTakeaways: [
      "Ninety days is enough to test a direction, not necessarily to complete a transition.",
      "Each phase should produce evidence that changes a decision.",
      "A weekly rhythm is more reliable than an ambitious burst followed by silence.",
    ],
    sections: [
      {
        id: "days-1-30",
        heading: "Days 1 to 30: diagnose and narrow",
        body: [
          "Define what must change and what should stay. Separate dissatisfaction with workload, manager, employer, occupation, pay and values. Then create no more than three destination hypotheses.",
          "Map evidence and gaps for each hypothesis, inspect official occupation information and hold six short conversations. End day 30 with one primary path, one backup and a written reason for pausing the rest.",
        ],
        bullets: [
          "Week 1: constraints and success criteria",
          "Week 2: evidence inventory",
          "Week 3: occupation and pay research",
          "Week 4: conversations and decision",
        ],
      },
      {
        id: "days-31-60",
        heading: "Days 31 to 60: test and build proof",
        body: [
          "Choose the smallest credible work test: a scoped internal project, short assessed assignment, volunteer brief, shadowing session or portfolio case. The output should resemble destination work and be discussable without exposing confidential information.",
          "Close only the gaps employers repeatedly treat as essential. A course is useful when it produces assessed evidence or unlocks a regulated route. It is less useful when it delays contact with the market.",
        ],
      },
      {
        id: "days-61-90",
        heading: "Days 61 to 90: enter the market",
        body: [
          "Rewrite your CV and profile around destination outcomes. Ask contacts for specific information or introductions, apply selectively, and record response by role type, level and message.",
          "Use interviews as evidence. If employers consistently question the same gap, address it. If the work itself no longer appeals after testing, stop without calling the ninety days a failure.",
        ],
      },
      {
        id: "weekly-system",
        heading: "Use a schedule that survives real life",
        body: [
          "Reserve two ninety-minute blocks and one short administrative block each week. Define the next physical action before closing a session. Keep a decision log so that new advice does not reset the plan every few days.",
          "At day 90 choose among continue, adjust, pause or commit. A valid outcome is a well-evidenced decision to stay and redesign your current role.",
        ],
      },
    ],
    actions: [
      "Put twenty-four focused sessions in the calendar before beginning.",
      "Define one primary destination and one backup by day 30.",
      "Complete one destination-like work sample by day 60.",
      "Run a measured set of conversations and applications by day 90.",
      "Record a continue, adjust, pause or commit decision with evidence.",
    ],
    sources: [
      source.oecdCareerGuidance,
      source.careerOneStopChange,
      source.nationalCareersAdvice,
      source.nationalCareersSkills,
    ],
    relatedSlugs: [
      "change-careers-at-40-without-starting-from-zero",
      "transferable-skills-find-yours",
      "change-careers-without-large-pay-cut",
      "career-plateau-signs-causes-next-move",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Busy professional planning three clear thirty-day career-change phases in a paper diary",
  }),
  completeArticle({
    number: 21,
    slug: "warning-signs-role-risk-redundancy",
    title: "Warning Signs Your Role May Be at Risk of Redundancy",
    shortTitle: "Redundancy warning signs",
    pillar: "job-security-and-hiring",
    portfolio: "Evergreen decision page",
    format: "Guide",
    searchIntent: "Assess whether workplace changes indicate redundancy risk",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    readingMinutes: 10,
    dek: "Patterns in budgets, work and organisational design can justify preparation, but no unofficial sign proves that your role will go.",
    answerFirst:
      "A hiring freeze, cancelled investment, duplicated teams, falling demand or work moving elsewhere can increase redundancy risk, especially when several appear together. None is proof. Prepare quietly, preserve documents you are entitled to keep, and wait for formal information before treating a possibility as a decision.",
    affects: [
      "Employees in organisations cutting costs or restructuring",
      "People whose work is being consolidated, outsourced or automated",
      "UK employees who may enter a redundancy consultation",
      "US workers who may be covered by federal or state advance-notice rules",
    ],
    keyTakeaways: [
      "Clusters and direction matter more than a single rumour or cancelled meeting.",
      "Business warning signs do not replace a formal redundancy or layoff process.",
      "Early preparation should protect options without damaging current work or breaching confidentiality.",
    ],
    sections: [
      {
        id: "business-signals",
        heading: "Read the business signals",
        body: [
          "Watch for sustained changes in demand, cash, budgets and strategy: repeated forecast misses, investment withdrawal, a broad hiring freeze, facility closure, merger integration or public commitments to reduce cost. One signal can have many explanations.",
          "Ask whether the pressure reaches your business unit and type of work. A profitable group can still be redesigned, while a difficult quarter does not automatically mean roles will disappear.",
        ],
      },
      {
        id: "role-signals",
        heading: "Read the work-design signals",
        body: [
          "Risk can rise when several teams perform the same work, your recurring tasks are removed without replacement, a supplier takes over the function, or leaders define a future structure that omits your capability. New documentation requests can also be ordinary governance.",
          "Distinguish the role from the person. In Great Britain redundancy concerns the need for a role, although selection within a pool can consider fair criteria. Performance management is a different process.",
        ],
      },
      {
        id: "formal-boundary",
        heading: "Know when the process becomes formal",
        body: [
          "In England, Scotland and Wales, Acas says affected employees should be told when redundancies are being considered and given information about consultation and options. In the US, the federal WARN Act covers only qualifying employers and events, while state rules may differ.",
          "Do not assume a legal entitlement from an article about signals. Status, service, numbers affected, contract, union coverage and location all matter.",
        ],
        note: "Information only. It is not legal advice and no legal or expert review is claimed.",
      },
      {
        id: "respond-proportionately",
        heading: "Respond proportionately",
        body: [
          "Move from routine monitoring to active preparation when evidence becomes repeated, specific and close to your work. Continue performing, avoid spreading unverified claims and do not remove confidential files.",
          "If you receive an at-risk notice, switch from prediction to process: record dates, read the proposal, ask how the pool and criteria were chosen, and get country-specific advice promptly.",
        ],
      },
    ],
    actions: [
      "Write down observable signals separately from rumours and interpretations.",
      "Check whether the signals affect your unit, tasks and location.",
      "Update your evidence bank, CV, contacts and household contingency plan.",
      "Keep personal copies only of documents you are lawfully entitled to retain.",
      "Seek Acas, union or qualified local advice when a formal process begins.",
    ],
    sources: [source.acasRedundancy, source.govRedundancy, source.dolWarn, source.onsLabour],
    relatedSlugs: [
      "prepare-for-redundancy-before-it-happens",
      "30-day-plan-after-losing-job",
      "job-market-2026-explained",
      "internal-move-or-new-employer",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced employee calmly reviewing a restructuring chart, budget notes and a personal contingency checklist",
  }),
  completeArticle({
    number: 22,
    slug: "prepare-for-redundancy-before-it-happens",
    title: "How to Prepare for Redundancy Before It Happens",
    shortTitle: "Prepare for redundancy",
    pillar: "job-security-and-hiring",
    portfolio: "Evergreen decision page",
    format: "Checklist",
    searchIntent: "Create a practical contingency plan before possible redundancy",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Strong",
    nextReview: "2026-10-25",
    readingMinutes: 10,
    dek: "Prepare the information, money and job-search foundations you would need, while respecting your employer's confidentiality and continuing to work well.",
    answerFirst:
      "Prepare in four areas: documents and entitlements, household cash, evidence and contacts, and a first-week action list. Do not wait for certainty, but do not copy confidential information, resign impulsively or assume UK and US rights are the same.",
    affects: [
      "Employees who have credible concerns about restructuring",
      "Workers with long tenure or employer-linked benefits",
      "People with limited emergency savings",
      "Managers who may be affected while supporting a team",
    ],
    keyTakeaways: [
      "A contingency plan is useful even when redundancy never happens.",
      "Save personal employment records lawfully, not company data or client material.",
      "Rights, notice and benefits depend on jurisdiction, status, service and the facts of the event.",
    ],
    sections: [
      {
        id: "documents",
        heading: "Build a lawful document pack",
        body: [
          "Gather your contract, permitted payslips, pension and benefit summaries, leave balance, performance records, job description and written changes to terms. Record personal contact details for HR, payroll, your union and benefits providers.",
          "Create a separate achievement log without client data, source code, trade secrets or internal documents. If in doubt, write a high-level result from memory rather than forwarding company material.",
        ],
      },
      {
        id: "money",
        heading: "Model the cash runway",
        body: [
          "List essential monthly costs, accessible savings, notice assumptions, unused leave, insurance and the dates employer benefits might end. Use conservative scenarios and verify tax treatment with official guidance or a qualified adviser.",
          "In Great Britain statutory redundancy pay depends on factors including employee status and service. In the US unemployment insurance is state-administered, and federal WARN does not cover every layoff.",
        ],
      },
      {
        id: "market",
        heading: "Prepare the market before you need it",
        body: [
          "Update your CV, evidence bank and professional profile. Contact trusted people without broadcasting an unconfirmed event. Identify adjacent roles and ten target employers so that the first search week is not spent deciding where to begin.",
          "Use official occupation and wage information to calibrate role level and pay. A rushed search often narrows options unnecessarily.",
        ],
      },
      {
        id: "process",
        heading: "Prepare questions for a formal process",
        body: [
          "If notified, ask for the business rationale, proposed pool, selection method, timetable, vacancies, notice and appeal route in writing. UK consultation is intended to be meaningful, not merely notification after every decision is fixed.",
          "Deadlines and remedies are fact-specific. Use Acas, a union, a state workforce agency or a qualified adviser for your location.",
        ],
        note: "Information only. It is not legal, tax or financial advice and no expert review is claimed.",
      },
    ],
    actions: [
      "Create a lawful personal document and contact pack.",
      "Calculate an essential-cost runway under conservative assumptions.",
      "Update six evidence-based CV bullets and three interview examples.",
      "Identify ten target employers and five trusted contacts.",
      "Write the questions you would ask on the first day of a formal process.",
    ],
    sources: [source.govRedundancy, source.acasRedundancy, source.dolWarn, source.dolUnemployment],
    relatedSlugs: [
      "warning-signs-role-risk-redundancy",
      "30-day-plan-after-losing-job",
      "how-long-job-search-really-takes",
      "transferable-skills-find-yours",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Professional organising employment records, a household runway and a discreet job-search contact list",
  }),
  completeArticle({
    number: 23,
    slug: "30-day-plan-after-losing-job",
    title: "A Calm 30-Day Plan After Losing Your Job",
    shortTitle: "Thirty days after job loss",
    pillar: "job-security-and-hiring",
    portfolio: "Evergreen decision page",
    format: "Checklist",
    searchIntent: "Take practical action during the first month after job loss",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Strong",
    nextReview: "2026-10-25",
    readingMinutes: 11,
    dek: "Protect immediate rights and income first, then build a measured search that leaves room for recovery and good decisions.",
    answerFirst:
      "In the first 48 hours, secure documents, verify final pay and benefits, note deadlines, and apply promptly for any support for which you may qualify. In week one, stabilise the household plan and tell a small trusted network. Use weeks two to four to test a focused search, review evidence and adjust without treating every silent application as a verdict.",
    affects: [
      "People recently made redundant, laid off or dismissed",
      "Households facing an unexpected loss of income",
      "Mid-career professionals whose search materials are out of date",
      "Workers deciding whether to seek a similar role or a career change",
    ],
    keyTakeaways: [
      "Time-sensitive pay, benefit and legal questions come before perfecting a CV.",
      "A focused search needs recovery time and a review rhythm, not constant activity.",
      "Eligibility and deadlines differ across UK nations and US states.",
    ],
    sections: [
      {
        id: "first-48-hours",
        heading: "First 48 hours: protect the basics",
        body: [
          "Ask for the termination or redundancy letter, final pay explanation, benefits end dates, pension or retirement information, property-return instructions and a contact for questions. Write down dates while they are fresh.",
          "In the US, contact the unemployment insurance programme for the state where you worked promptly. In Great Britain, check official redundancy and benefits guidance. Do not sign away rights you do not understand under pressure.",
        ],
      },
      {
        id: "days-3-7",
        heading: "Days 3 to 7: stabilise",
        body: [
          "Build a thirteen-week cash view using essential costs and confirmed income only. Pause avoidable commitments, but do not make irreversible financial decisions solely from panic. Use an authorised debt or benefits service if bills are at risk.",
          "Tell the people who need to know. Give your wider network a concise, factual message about the roles and problems you are targeting, not a detailed account of the departure.",
        ],
      },
      {
        id: "days-8-21",
        heading: "Days 8 to 21: run a focused search",
        body: [
          "Choose one main role family and one adjacent option. Translate six achievements, refresh the profile recruiters will see, and build a list of employers. Aim for a sustainable mix of conversations, targeted applications and direct research.",
          "Use current vacancies as evidence about demand and requirements. Do not use a national unemployment rate to predict your individual timeline.",
        ],
      },
      {
        id: "days-22-30",
        heading: "Days 22 to 30: review the evidence",
        body: [
          "Measure response by application type, level and message. If relevant conversations lead nowhere, clarify the destination. If conversations work but applications do not, improve translation. If interviews stall, review examples and role fit.",
          "Make space for sleep, movement, relationships and medical help where needed. Job loss is a major event, and relentless searching can reduce the quality of decisions.",
        ],
        note: "Information only. This is not legal, benefits, financial or medical advice.",
      },
    ],
    actions: [
      "Record pay, benefit, property-return and advice deadlines immediately.",
      "Apply promptly through the official benefit route for your location if eligible.",
      "Create a thirteen-week essential cash view.",
      "Define one primary role family and one adjacent alternative.",
      "Review search evidence on day 30 and change one variable at a time.",
    ],
    sources: [source.dolUnemployment, source.govRedundancy, source.acasRedundancy, source.onsDuration],
    relatedSlugs: [
      "prepare-for-redundancy-before-it-happens",
      "how-long-job-search-really-takes",
      "why-not-hearing-back-job-applications",
      "job-market-2026-explained",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Recently displaced professional following a calm first-month plan with documents, budget and focused weekly actions",
  }),
  completeArticle({
    number: 24,
    slug: "job-market-2026-explained",
    title: "The 2026 Job Market, Explained Without the Headlines",
    shortTitle: "The 2026 job market",
    pillar: "job-security-and-hiring",
    portfolio: "Change tracker",
    format: "Change Tracker",
    searchIntent: "Understand current UK and US hiring conditions",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2026-08-25",
    readingMinutes: 10,
    dek: "Hiring is neither frozen nor easy everywhere. The useful picture comes from vacancies, hires, unemployment, pay and occupation-level evidence read together.",
    answerFirst:
      "The July 2026 evidence describes a selective, slower-moving market rather than a universal collapse. UK vacancies were lower than a year earlier and ONS urged caution about short-term labour-force movements. In the US, May job openings and hires were broadly unchanged in JOLTS. Your occupation, region and seniority can differ sharply from these national aggregates.",
    affects: [
      "UK and US professionals considering a move in 2026",
      "People searching after redundancy or a contract ending",
      "Employees deciding whether to negotiate or wait",
      "Managers interpreting national hiring headlines",
    ],
    keyTakeaways: [
      "Vacancies, hires and unemployment answer different questions.",
      "National data set context but do not reveal the market for one role in one place.",
      "Revisions and survey limitations make one-month stories especially fragile.",
    ],
    sections: [
      {
        id: "what-changed",
        heading: "What changed this month",
        body: [
          "ONS estimated 712,000 UK vacancies for April to June 2026, down modestly on the quarter and year. The ratio of unemployed people to each vacancy was higher than in the tightest post-pandemic period. ONS also identified uncertainty in some Labour Force Survey comparisons.",
          "US JOLTS reported 7.6 million job openings and 5.2 million hires in May, both broadly unchanged. Openings are a stock on a reference date; hires measure completed movements during the month.",
        ],
      },
      {
        id: "read-dashboard",
        heading: "Read a five-part dashboard",
        body: [
          "Use employment and unemployment for overall conditions, vacancies for employer demand, hires for actual movement, quits for worker confidence and earnings for pay pressure. No single number is the job market.",
          "Then narrow by occupation, industry and geography. A stable national total can include expanding health services and weak hiring in parts of professional services, or the reverse in a local area.",
        ],
      },
      {
        id: "what-it-means",
        heading: "What it means for a mid-career move",
        body: [
          "Allow more time for approvals and selection, keep more than one route active, and ask when the position was authorised. Employers may still hire for scarce or business-critical work while reducing backfills elsewhere.",
          "Do not automatically step down a level because the aggregate market feels slower. First test whether your role definition, evidence, location or pay target is the limiting factor.",
        ],
      },
      {
        id: "uncertainty",
        heading: "What the data cannot tell you",
        body: [
          "Vacancy surveys do not measure every informal opportunity, and postings can be duplicated or remain open. Unemployment measures people under specific definitions and does not show the experience of every job seeker.",
          "This tracker will be reviewed monthly. Revisions, data-quality notes and longer trends will be reported rather than silently replacing an earlier interpretation.",
        ],
      },
    ],
    actions: [
      "Build a small dashboard for your occupation, sector and region.",
      "Track applications, conversations and interviews separately.",
      "Ask recruiters about approval status, team need and decision timing.",
      "Keep an internal, adjacent and external route active where practical.",
      "Return after the next ONS, BLS and JOLTS releases rather than reacting to a single headline.",
    ],
    sources: [source.onsLabour, source.onsVacancies, source.blsEmployment, source.blsJolts],
    relatedSlugs: [
      "how-long-job-search-really-takes",
      "salary-negotiation-slower-job-market",
      "remote-jobs-still-hiring",
      "warning-signs-role-risk-redundancy",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Editorial labour-market dashboard showing vacancies, hires, unemployment and pay beside a professional's job search notes",
  }),
  completeArticle({
    number: 25,
    slug: "why-not-hearing-back-job-applications",
    title: "Why You Are Not Hearing Back From Job Applications",
    shortTitle: "Why applications go quiet",
    pillar: "job-security-and-hiring",
    portfolio: "Timely interpretation",
    format: "Guide",
    searchIntent: "Diagnose a job search that is producing few employer responses",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Mixed",
    nextReview: "2027-01-25",
    readingMinutes: 10,
    dek: "Silence does not identify the cause. Use a controlled review of fit, evidence, route and market conditions before rewriting everything.",
    answerFirst:
      "You may not hear back because the role changed, the shortlist was strong, your level or location did not fit, or your application did not make the required evidence easy to find. No public dataset can diagnose an individual employer's silence. Review a sample against the exact tasks, test a warmer route and change one variable at a time.",
    affects: [
      "Experienced applicants receiving few first interviews",
      "Career changers applying with a title mismatch",
      "People applying mainly through large job boards",
      "Workers unsure whether the problem is the market or their materials",
    ],
    keyTakeaways: [
      "A rejection rate alone cannot tell you what is wrong.",
      "Task and level fit are more diagnostic than keyword density.",
      "A small, measured test produces better evidence than a total rewrite after every silence.",
    ],
    sections: [
      {
        id: "possible-causes",
        heading: "Separate four possible causes",
        body: [
          "Test market availability, target fit, evidence quality and application route separately. A low-response market needs wider timing and employer coverage. A target problem needs a different role or level. An evidence problem needs clearer proof. A route problem may need conversations or direct employer research.",
          "Do not assume software rejected you. Employers use different systems and processes, and silence does not reveal which stage failed.",
        ],
      },
      {
        id: "fit-audit",
        heading: "Run a ten-application fit audit",
        body: [
          "For each application, mark every essential requirement as direct evidence, adjacent evidence, unsupported or unclear. Compare tasks using O*NET or the relevant UK occupation profile, not only job titles.",
          "Check location, work authorisation, salary, seniority and qualification requirements. If several roles require a regulated credential you do not hold, better wording will not solve the gap.",
        ],
      },
      {
        id: "evidence-audit",
        heading: "Make evidence easy to verify",
        body: [
          "Lead with outcomes relevant to the vacancy. Name scale, constraints and decisions without disclosing confidential information. Replace responsibility lists with a smaller number of well-supported examples.",
          "Use the employer's ordinary vocabulary when it accurately describes your work. Do not copy blocks of wording or add skills you cannot defend in an interview.",
        ],
      },
      {
        id: "experiment",
        heading: "Run a controlled two-week experiment",
        body: [
          "Choose one role family and comparable level. Submit a small set of carefully matched applications, add several informed conversations and record responses. Keep the core CV stable so that the result is interpretable.",
          "If no route produces interest, ask a credible person in the field to assess role fit and evidence. If conversations work but applications do not, the translation or channel deserves attention.",
        ],
      },
    ],
    actions: [
      "Audit ten applications against essential tasks, level and location.",
      "Rewrite the top third of the CV around destination outcomes.",
      "Remove unsupported claims and make two pieces of evidence more specific.",
      "Add five informed conversations to the next application batch.",
      "Review the results after two weeks before changing another variable.",
    ],
    sources: [
      source.nationalCareersApplications,
      source.nationalCareersAdvice,
      source.onetOverview,
      source.onsVacancies,
    ],
    relatedSlugs: [
      "how-long-job-search-really-takes",
      "hidden-job-market-strategy-or-myth",
      "job-market-2026-explained",
      "transferable-skills-find-yours",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Mid-career applicant comparing a vacancy's actual tasks with concise evidence from recent projects",
  }),
  completeArticle({
    number: 26,
    slug: "how-long-job-search-really-takes",
    title: "How Long Does a Job Search Really Take?",
    shortTitle: "How long a job search takes",
    pillar: "job-security-and-hiring",
    portfolio: "Change tracker",
    format: "Evidence Check",
    searchIntent: "Set a realistic job-search timeline using current evidence",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    readingMinutes: 10,
    dek: "There is no honest universal duration. Official unemployment data describe incomplete spells, while your search depends on role, region, route and constraints.",
    answerFirst:
      "Plan in months, review in weeks and avoid treating a national average as a deadline. BLS and ONS publish duration distributions, but these measure people who are still unemployed under official definitions. They do not include every employed job seeker or reveal how long completed searches took.",
    affects: [
      "People budgeting after redundancy or layoff",
      "Employed professionals planning a move",
      "Mid-career applicants targeting senior or specialist roles",
      "Career changers who need time to build destination evidence",
    ],
    keyTakeaways: [
      "Median unemployment duration is not the median time to get a job.",
      "Seniority, occupation, geography, pay floor and work pattern can lengthen or shorten a search.",
      "A good plan uses runway scenarios and leading indicators rather than a promised finish date.",
    ],
    sections: [
      {
        id: "measurement",
        heading: "What official duration data measure",
        body: [
          "BLS duration figures count continuous weeks that people currently classified as unemployed have been looking for work, including the present survey week. The mean and median describe unfinished spells. ONS also publishes unemployment by age and duration from the Labour Force Survey.",
          "Neither series captures every employed person searching discreetly. A person can also leave the measure by finding work, stopping active search or leaving the labour force, which are different outcomes.",
        ],
      },
      {
        id: "drivers",
        heading: "What changes an individual timeline",
        body: [
          "The number of credible openings matters, but so do seniority, specialism, location, salary floor, security clearance, work authorisation and flexibility requirements. Senior roles often have fewer openings and more interview stages.",
          "A career change adds translation and evidence-building time. An internal move may be faster to explore but can depend on planning cycles and manager support.",
        ],
      },
      {
        id: "plan",
        heading: "Plan three runway scenarios",
        body: [
          "Create short, central and long scenarios without pretending to know the outcome. Link each to household decisions, search breadth and review points. Use confirmed income and conservative assumptions.",
          "Do not respond to a longer scenario by applying indiscriminately. Broaden one dimension at a time, such as sector, location, contract type or level, and observe what changes.",
        ],
      },
      {
        id: "leading-indicators",
        heading: "Track leading indicators",
        body: [
          "Conversations, referrals, recruiter screens, first interviews, later stages and offers reveal where movement stops. Application count alone rewards activity even when the target is wrong.",
          "Review every two weeks and the runway monthly. If mental health, housing or debt is at risk, use appropriate professional support rather than waiting for a search metric to improve.",
        ],
      },
    ],
    actions: [
      "Build short, central and long search-runway scenarios.",
      "Track conversations, screens, interviews and offers separately.",
      "Compare your occupation and region with national vacancy data.",
      "Change only one targeting variable at each review.",
      "Recheck the official duration and labour-market releases each quarter.",
    ],
    sources: [source.blsDuration, source.onsDuration, source.blsJolts, source.onsVacancies],
    relatedSlugs: [
      "job-market-2026-explained",
      "why-not-hearing-back-job-applications",
      "30-day-plan-after-losing-job",
      "hidden-job-market-strategy-or-myth",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Professional reviewing a realistic job-search runway with interview stages and monthly decision points",
  }),
  completeArticle({
    number: 27,
    slug: "hidden-job-market-strategy-or-myth",
    title: "The Hidden Job Market: Useful Strategy or Misleading Myth?",
    shortTitle: "The hidden job market",
    pillar: "job-security-and-hiring",
    portfolio: "Evergreen decision page",
    format: "Evidence Check",
    searchIntent: "Evaluate claims about unadvertised jobs and networking",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Mixed",
    nextReview: "2027-01-25",
    readingMinutes: 9,
    dek: "Some opportunities are filled before or without a public advert, but dramatic percentages are usually unsupported and can distract from a balanced search.",
    answerFirst:
      "The useful idea is that hiring begins before every vacancy is visible: employers plan, seek referrals, move internal candidates and search directly. The misleading part is any universal claim that a fixed large percentage of jobs is hidden. Official vacancy and hire data do not support that simple number. Use relationships for information and timing, while continuing to pursue suitable advertised roles.",
    affects: [
      "Job seekers told that online applications are pointless",
      "Mid-career professionals with a developed network",
      "Career changers who need inside knowledge about a new field",
      "People uncomfortable with transactional networking",
    ],
    keyTakeaways: [
      "Unadvertised hiring exists, but no credible universal hidden-share figure describes every market.",
      "Networking is most useful for information, fit and timing, not asking strangers for jobs.",
      "A balanced search combines public vacancies, target employers, recruiters and relationships.",
    ],
    sections: [
      {
        id: "what-is-real",
        heading: "What is real",
        body: [
          "Internal moves, succession, referrals, direct sourcing and early workforce planning can all create access before a public advert. Smaller organisations may recruit informally, while regulated or public employers may use formal advertising.",
          "A conversation can reveal the problems a team expects to solve, whether a role is approved and which evidence matters. That is valuable even when the eventual vacancy is advertised.",
        ],
      },
      {
        id: "what-is-myth",
        heading: "What is misleading",
        body: [
          "Claims that most jobs are hidden often lack a current, representative definition and denominator. JOLTS measures job openings and hires, while ONS measures vacancies, but neither converts neatly into a fixed share of jobs filled through relationships.",
          "The myth becomes harmful when it blames job seekers for not knowing the right people or encourages them to ignore transparent routes.",
        ],
      },
      {
        id: "use-network",
        heading: "Use relationships with respect",
        body: [
          "Ask for twenty minutes to understand priorities, team structure and entry routes. Research first, ask specific questions and make it easy to decline. Do not lead with a request for a referral from someone who cannot assess your work.",
          "After the conversation, apply through the required process and mention the useful context only when appropriate. A relationship does not remove the need for evidence.",
        ],
      },
      {
        id: "balanced-portfolio",
        heading: "Build a balanced search portfolio",
        body: [
          "Divide effort across well-matched adverts, target-employer research, specialist recruiters where relevant and conversations. Review which route produces qualified movement rather than counting messages sent.",
          "People with smaller networks can build relevant ties through professional groups, former colleagues, suppliers, clients where permitted, and carefully chosen learning or volunteer work.",
        ],
      },
    ],
    actions: [
      "Stop repeating any hidden-job percentage without a traceable method.",
      "List twenty target teams or employers, not only job-board searches.",
      "Ask ten people for specific market information rather than a job.",
      "Continue applying through transparent formal routes.",
      "Compare qualified responses by route after four weeks.",
    ],
    sources: [source.blsJolts, source.onsVacancies, source.careerOneStopChange, source.nationalCareersAdvice],
    relatedSlugs: [
      "why-not-hearing-back-job-applications",
      "how-long-job-search-really-takes",
      "internal-move-or-new-employer",
      "job-market-2026-explained",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced professional having an informational conversation while keeping a balanced list of public vacancies and target employers",
  }),
  completeArticle({
    number: 28,
    slug: "internal-move-or-new-employer",
    title: "Internal Move or New Employer: Which Is the Better Career Bet?",
    shortTitle: "Internal move or new employer?",
    pillar: "career-moves",
    portfolio: "Evergreen decision page",
    format: "Decision Framework",
    searchIntent: "Compare an internal transfer with changing employer",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    readingMinutes: 10,
    dek: "Compare the actual roles, sponsors, pay, learning and downside, not a comforting internal label against an idealised external offer.",
    answerFirst:
      "An internal move is often better when it gives real scope, a credible sponsor and destination evidence without sacrificing too much pay. A new employer is often better when the current organisation cannot offer the work, level, reward or future you need. Run both routes until one becomes concrete, then compare written terms and twelve-month outcomes.",
    affects: [
      "Professionals offered an internal transfer or secondment",
      "People whose progression has slowed",
      "Career changers seeking a lower-risk bridge",
      "Employees weighing accumulated benefits against external growth",
    ],
    keyTakeaways: [
      "Internal familiarity reduces some risks but can preserve old perceptions and pay anchors.",
      "External moves can improve pay or fit, but market conditions and loss of tenure-linked benefits matter.",
      "Compare two real opportunities using the same criteria and time horizon.",
    ],
    sections: [
      {
        id: "internal-case",
        heading: "When the internal route is stronger",
        body: [
          "Internal knowledge, relationships and benefits can make a transition faster. A secondment or cross-functional move can supply destination evidence while preserving income and organisational context.",
          "Test whether the role has a budget, manager, decision rights and written objectives. A vague promise of exposure is not a move, and your old title or reputation can follow you.",
        ],
      },
      {
        id: "external-case",
        heading: "When a new employer is stronger",
        body: [
          "External employers may price your capability differently, offer a clearer structure or provide work that does not exist internally. OECD evidence links voluntary job-to-job mobility with movement towards higher-paying and more productive firms, but the benefit is not universal.",
          "A new employer also resets tenure, relationships and some benefits. Culture, manager quality and actual role scope are harder to verify from selection conversations.",
        ],
      },
      {
        id: "scorecard",
        heading: "Use one scorecard",
        body: [
          "Score both routes on work content, decision authority, manager, learning, pay, pension or retirement, flexibility, commute, security and exit options. Weight the criteria before knowing which route wins.",
          "Compare the position after twelve months, not only day one. Ask what evidence you will be able to show and what next move each option unlocks.",
        ],
      },
      {
        id: "run-both",
        heading: "Run both routes without bluffing",
        body: [
          "Explore internal possibilities while researching the external market. You do not need to threaten resignation. Share only what is necessary and respect conflict and confidentiality obligations.",
          "Use written offers, not optimism. Check restrictions, bonus treatment and benefit dates for your jurisdiction with an appropriate adviser where they matter.",
        ],
      },
    ],
    actions: [
      "Define and weight ten decision criteria before comparing routes.",
      "Ask the internal sponsor for scope, authority, timing and success measures in writing.",
      "Test your external value with informed conversations and suitable applications.",
      "Compare total compensation and tenure-linked benefits.",
      "Write what each route makes possible after twelve months.",
    ],
    sources: [source.oecdMobility2025, source.blsTenure, source.atlantaWages, source.fedJobQuality],
    relatedSlugs: [
      "career-plateau-signs-causes-next-move",
      "change-careers-without-large-pay-cut",
      "salary-negotiation-slower-job-market",
      "transferable-skills-find-yours",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Mid-career professional using the same scorecard to compare an internal role and an external offer",
  }),
  completeArticle({
    number: 36,
    slug: "salary-transparency-what-is-changing",
    title: "Salary Transparency: What Is Changing and What It Means for You",
    shortTitle: "Salary transparency changes",
    pillar: "job-security-and-hiring",
    portfolio: "Change tracker",
    format: "Change Tracker",
    searchIntent: "Understand salary transparency rules and their practical effect",
    jurisdiction: "Jurisdiction varies",
    evidenceStrength: "Strong",
    nextReview: "2026-10-25",
    readingMinutes: 11,
    dek: "Pay-range duties are expanding unevenly. A visible range improves information, but it is not a promise, a complete pay comparison or a universal legal right.",
    answerFirst:
      "Salary transparency now depends heavily on location. New York State requires covered employers to include pay ranges in covered job, promotion and transfer advertisements. EU member states are implementing Directive 2023/970. The UK requires gender pay gap reporting for larger employers but does not have a general nationwide requirement for every job advert to show a range. Check the rule where the work and employer are covered.",
    affects: [
      "Applicants comparing roles across countries or US states",
      "Employees considering a promotion or internal transfer",
      "Remote workers whose role touches more than one jurisdiction",
      "People using published ranges in a pay conversation",
    ],
    keyTakeaways: [
      "Pay-posting, pay-history, employee-information and gender-gap rules are different forms of transparency.",
      "Coverage can depend on employer size, work location, reporting line and the type of opportunity.",
      "A range is useful evidence but does not establish the lawful or fair pay for an individual.",
    ],
    sections: [
      {
        id: "what-changed",
        heading: "What has changed",
        body: [
          "US salary-transparency law has developed mainly through states and cities. New York State, for example, covers qualifying advertised jobs, promotions and transfers and provides an official complaint route. Other states use different thresholds and definitions.",
          "The EU directive establishes pay-transparency and enforcement measures but requires national transposition. Readers must check the implementing law. UK gender pay gap reporting concerns organisation-level data, not a required range on every vacancy.",
        ],
      },
      {
        id: "read-range",
        heading: "Read an advertised range carefully",
        body: [
          "Ask whether the range is base salary or total cash, whether location changes it, and how level is determined. A very wide range may cover several experience points, geographies or internal grades.",
          "Compare pension or retirement, bonus, equity, leave, insurance and flexibility. A visible base range is not the whole offer.",
        ],
      },
      {
        id: "use-information",
        heading: "Use transparency without overclaiming",
        body: [
          "For applicants, ask what evidence places someone at the lower, middle or upper part of the range. For employees, compare responsibilities and objective criteria, not only job titles.",
          "Pay discrimination law is separate and fact-specific. In the US, EEOC guidance explains federal equal-pay protections; state law may add rights. Get qualified advice for a suspected breach.",
        ],
      },
      {
        id: "tracker-boundary",
        heading: "Tracker boundary and next review",
        body: [
          "This page records selected UK, US and EU developments and cannot summarise every state or national implementation. Remote-work coverage is especially fact-sensitive.",
          "We will review official state, UK and EU implementation sources quarterly and record material changes rather than implying that one rule applies everywhere.",
        ],
        note: "Information only. It is not legal advice and no legal or expert review is claimed.",
      },
    ],
    actions: [
      "Identify the exact work location and employer entity before relying on a rule.",
      "Open the current official guidance for that jurisdiction.",
      "Ask what the range includes and how placement is decided.",
      "Compare total compensation and role scope, not base salary alone.",
      "Keep the advert and written offer, and seek local advice for a suspected breach.",
    ],
    sources: [
      source.nyPayTransparency,
      source.euPayTransparency,
      source.ukGenderPay,
      source.eeocEqualPay,
    ],
    relatedSlugs: [
      "salary-negotiation-slower-job-market",
      "change-careers-without-large-pay-cut",
      "internal-move-or-new-employer",
      "job-market-2026-explained",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Professional comparing salary ranges and total-reward details across UK, US state and EU job adverts",
  }),
  completeArticle({
    number: 37,
    slug: "salary-negotiation-slower-job-market",
    title: "How to Negotiate Salary in a Slower Job Market",
    shortTitle: "Negotiate in a slower market",
    pillar: "job-security-and-hiring",
    portfolio: "Timely interpretation",
    format: "Guide",
    searchIntent: "Prepare a salary negotiation when hiring demand is less intense",
    jurisdiction: "United Kingdom and United States",
    evidenceStrength: "Moderate",
    nextReview: "2026-10-25",
    readingMinutes: 10,
    dek: "A slower market changes leverage, not the need for a clear, evidence-based conversation about level, scope and the whole package.",
    answerFirst:
      "Negotiate after you understand the role and preferably have a written offer. Use current occupation and location pay evidence, connect your request to the level and problems you will own, and prepare two or three package alternatives. In a slower market, avoid empty ultimatums, but do not assume the first figure is automatically final.",
    affects: [
      "Applicants receiving an offer in a selective market",
      "People moving after redundancy",
      "Internal candidates whose pay is anchored to a current salary",
      "Professionals with valuable flexibility or benefit requirements",
    ],
    keyTakeaways: [
      "Market data creates a range for discussion, not a personal entitlement.",
      "Scope, level and scarce evidence are stronger arguments than household need.",
      "Alternatives across salary, review timing, bonus, leave and flexibility can unlock agreement.",
    ],
    sections: [
      {
        id: "calibrate",
        heading: "Calibrate the market, then the role",
        body: [
          "Use ONS earnings for UK occupation and location context and BLS OEWS for US occupation and area data. Add disclosed employer ranges and comparable current roles. Note definitions and dates.",
          "National vacancy and JOLTS figures help describe conditions but do not set a fair rate for one role. The more specific evidence is the job's scope, grade, location and total reward.",
        ],
      },
      {
        id: "build-case",
        heading: "Build a level and value case",
        body: [
          "Identify the decisions, risks, revenue, costs, people or systems you will own. Match two or three pieces of evidence showing you can operate at that level. Keep the case short enough to say calmly.",
          "Do not claim another offer or current pay you cannot substantiate. Your private minimum is a decision rule, not necessarily the opening argument.",
        ],
      },
      {
        id: "conversation",
        heading: "Use a clear conversation",
        body: [
          "Express interest, summarise your understanding of the role, state the evidence-based adjustment and pause. If base salary is constrained, ask which component or approval is constrained rather than negotiating against yourself.",
          "Offer alternatives: a higher base, a sign-on payment where appropriate, a defined salary review, additional leave, flexibility, development funding or adjusted scope. Confirm any agreement in writing.",
        ],
      },
      {
        id: "tradeoffs",
        heading: "Know when to accept or walk away",
        body: [
          "A slower market can increase the value of certainty, but accepting below your sustainable floor creates a different risk. Compare the full package, manager, work and future evidence with your alternatives.",
          "Federal Reserve evidence indicates that tighter local markets can improve the chance that job changers move to better work. That relationship does not predict a specific negotiation, and conditions vary by place and occupation.",
        ],
      },
    ],
    actions: [
      "Collect three current pay reference points for the exact role and location.",
      "Write a two-sentence case linking evidence to role scope.",
      "Set a target, sustainable floor and walk-away point privately.",
      "Prepare three acceptable package alternatives.",
      "Ask for the final package and any review commitment in writing.",
    ],
    sources: [source.onsEarnings, source.blsWages, source.blsJolts, source.fedJobQuality],
    relatedSlugs: [
      "salary-transparency-what-is-changing",
      "job-market-2026-explained",
      "change-careers-without-large-pay-cut",
      "internal-move-or-new-employer",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced candidate preparing a calm salary conversation with role scope, market ranges and package options",
  }),
  completeArticle({
    number: 45,
    slug: "burnout-or-wrong-job",
    title: "Burnout or the Wrong Job? How to Tell the Difference",
    shortTitle: "Burnout or the wrong job?",
    pillar: "career-moves",
    portfolio: "Evergreen decision page",
    format: "Decision Framework",
    searchIntent: "Distinguish work-related exhaustion from a poor career fit",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    readingMinutes: 11,
    dek: "Do not make a career diagnosis from exhaustion alone. Stabilise health, inspect the work conditions and test what changes before making an irreversible move.",
    answerFirst:
      "Burnout and a poor job fit can overlap. WHO defines burnout as an occupational phenomenon linked to chronic workplace stress, not a medical condition. Exhaustion, cynicism and reduced professional efficacy may point towards burnout; persistent dislike of the core work even under reasonable conditions may point towards fit. Neither is a self-diagnosis, and symptoms can also reflect a health condition that deserves clinical help.",
    affects: [
      "Professionals who feel exhausted, detached or ineffective at work",
      "People considering resignation or a career change while depleted",
      "Workers in demanding roles with low control or unclear expectations",
      "Managers trying to understand whether changing jobs will solve the problem",
    ],
    keyTakeaways: [
      "Burnout is specifically work-related in WHO's definition and is not itself classified as a medical condition.",
      "The same symptoms can have other causes, so career guidance must not replace healthcare.",
      "Test workload, control, support and recovery before concluding that the occupation is wrong.",
    ],
    sections: [
      {
        id: "boundary",
        heading: "Start with the health boundary",
        body: [
          "If you are struggling to cope, symptoms persist outside work, or sleep, concentration, mood or physical health are affected, seek appropriate healthcare. NHS guidance explains when to contact a GP, urgent service or emergency help in the UK. Use the equivalent service where you live.",
          "Do not wait for a perfect label before asking for help. This article cannot distinguish burnout, depression, anxiety, a physical condition or another cause.",
        ],
        note: "Information only. It is not medical advice, diagnosis or treatment, and no clinical review is claimed.",
      },
      {
        id: "inspect-pattern",
        heading: "Inspect the pattern, not one bad week",
        body: [
          "Ask when the problem began, whether it eases away from work, and which conditions predict it. WHO's burnout description centres on exhaustion, mental distance or cynicism, and reduced professional efficacy arising from chronic workplace stress.",
          "A poor-fit hypothesis becomes stronger when the core tasks or values remain unacceptable after realistic workload, manager and recovery changes. It becomes weaker when the same work feels worthwhile under healthier conditions.",
        ],
      },
      {
        id: "work-conditions",
        heading: "Audit the work conditions",
        body: [
          "The HSE Management Standards organise work-related stress around demands, control, support, relationships, role and change. Score each condition with recent examples and identify what the employer can change.",
          "Do not turn a system problem into a personal resilience project. Equally, a new employer cannot guarantee that a disliked core occupation will become satisfying.",
        ],
      },
      {
        id: "test-options",
        heading: "Test reversible options first",
        body: [
          "Where safe and practical, discuss workload, priorities, hours, role clarity, support or leave. Keep the proposal specific and time-limited. At the same time, research adjacent roles and speak with people doing them.",
          "Delay a costly qualification or abrupt resignation until the most depleted period has passed where possible. If the workplace is unsafe or your health is deteriorating, professional advice may support a faster exit.",
        ],
      },
    ],
    actions: [
      "Seek medical help when symptoms are persistent, severe or hard to manage.",
      "Record two weeks of energy, symptoms, tasks and working conditions.",
      "Score demands, control, support, relationships, role and change.",
      "Request one specific, measurable work adjustment where appropriate.",
      "Test two adjacent roles before declaring the entire career wrong.",
    ],
    sources: [source.whoBurnout, source.nhsStress, source.hseStress, source.oecdCareerGuidance],
    relatedSlugs: [
      "career-plateau-signs-causes-next-move",
      "change-careers-at-40-without-starting-from-zero",
      "90-day-career-change-plan",
      "internal-move-or-new-employer",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Tired mid-career professional separating health, workload and job-fit evidence into three clear columns",
  }),
  completeArticle({
    number: 46,
    slug: "career-plateau-signs-causes-next-move",
    title: "Career Plateau: Signs, Causes and Your Next Move",
    shortTitle: "Career plateau",
    pillar: "career-moves",
    portfolio: "Evergreen decision page",
    format: "Guide",
    searchIntent: "Diagnose career stagnation and choose a practical next move",
    jurisdiction: "Global",
    evidenceStrength: "Moderate",
    nextReview: "2027-01-25",
    readingMinutes: 10,
    dek: "A plateau can be about promotion, learning, pay or meaning. Identify which one has stopped before deciding that leaving is the answer.",
    answerFirst:
      "A career plateau is not simply spending several years in one job. Research distinguishes a hierarchical plateau, where promotion prospects feel limited, from a job-content plateau, where challenge and learning have narrowed. Diagnose the type, check whether it is temporary or structural, and run an internal and external test before choosing your next move.",
    affects: [
      "Experienced professionals whose progression has slowed",
      "Specialists with limited management roles above them",
      "People who are well paid but no longer learning",
      "Workers unsure whether to deepen, broaden, lead or leave",
    ],
    keyTakeaways: [
      "Long tenure is not automatically a plateau, and promotion is not the only form of progress.",
      "Content, hierarchy, pay and values can stall for different reasons and need different responses.",
      "A useful next move should create new evidence, not merely a new title.",
    ],
    sections: [
      {
        id: "identify-type",
        heading: "Identify what has plateaued",
        body: [
          "A hierarchical plateau concerns the likelihood of moving upward. A job-content plateau concerns repetitive work, limited challenge or few new responsibilities. You may also face a pay plateau, a values mismatch or a temporary organisational pause.",
          "Write the evidence for each. No promotion in twelve months means little if the normal cycle is longer. Repeatedly being given the same scope despite strong performance is more informative.",
        ],
      },
      {
        id: "find-cause",
        heading: "Separate personal, role and system causes",
        body: [
          "Possible causes include a flat structure, budget limits, a skill gap, unclear sponsorship, limited visibility, a shrinking function, a preference not to manage or an employer that cannot offer the next kind of work.",
          "Ask your manager what evidence and opportunity would be required for broader scope. Seek a second view from someone who understands the system but does not control the decision.",
        ],
      },
      {
        id: "choose-move",
        heading: "Choose among deepen, broaden, lead or leave",
        body: [
          "Deepen through scarce expertise, broaden into adjacent responsibilities, lead through people or standards, or leave for a setting with better scope. None is inherently more senior. The right move fits your desired work and constraints.",
          "OECD evidence suggests career mobility can support better matches and longer working lives, while mobility declines with age and carries real costs. Treat population evidence as context, not an instruction to resign.",
        ],
      },
      {
        id: "run-tests",
        heading: "Run two ninety-day tests",
        body: [
          "Create one internal test, such as owning a new problem or formalising a development route, and one external test, such as market conversations or carefully matched applications. Define what evidence would count as movement.",
          "At the end, compare actual sponsorship, work content, pay, learning and future options. If neither test moves, revisit whether the target or constraint needs to change.",
        ],
      },
    ],
    actions: [
      "Name whether hierarchy, content, pay or values have plateaued.",
      "Collect evidence across at least two review cycles where available.",
      "Ask what specific proof and opportunity would unlock broader scope.",
      "Run one internal and one external ninety-day test.",
      "Choose the option that improves work content and future evidence, not title alone.",
    ],
    sources: [
      source.plateauReview,
      source.oecdCareerMobility,
      source.oecdMobility2025,
      source.onetTransferable,
    ],
    relatedSlugs: [
      "internal-move-or-new-employer",
      "burnout-or-wrong-job",
      "transferable-skills-find-yours",
      "90-day-career-change-plan",
    ],
    professionSlugs: ["accounting", "marketing", "project-management"],
    imageAlt:
      "Experienced professional comparing four paths from a career plateau: deepen, broaden, lead or leave",
  }),
];
