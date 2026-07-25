# WorkChanged

WorkChanged is an independent, evidence-led guide to changes in work for
experienced working professionals. Its editorial promise is:

> What changed at work. Who it affects. What to do next.

The site covers AI, job security, changing skills, career moves, workplace
rights, management, work-design evidence and profession-specific change. The
existing Next.js-compatible application, Cloudflare Worker and deployment
configuration are preserved. This repository is linked to the live
[WorkChanged](https://work-changed.home-office-hlp.chatgpt.site/) Sites project.

## Editorial library

The 50-guide opportunity library is organised into eight pillars:

1. AI and Your Job
2. Skills That Are Changing
3. Career Moves
4. Job Security and Hiring
5. Workplace Rules and Rights
6. Managing Changed Work
7. How Work Actually Works
8. Profession Trackers

The portfolio contains 30 evergreen decision pages, 13 change trackers and 7
timely interpretations, closely matching the audience report's 60/25/15 model.

Each guide includes an answer near the top, affected readers, evidence strength,
country or jurisdiction, practical actions, direct sources, review dates, a
change log, profession paths and specific next reading. UK and US guidance is
separated where law, policy, pay, qualifications or labour evidence differs.

The existing role, task and tool libraries remain available and now connect
into this broader editorial system.

## Reader utility

- topic and profession hubs
- contextual next-reading paths
- desktop and mobile tables of contents
- reading progress and article-completion measurement
- device-local topic and role follows
- visible update notices on return visits
- weekly change briefing and monthly profession trackers
- RSS feed at `/rss.xml`
- honest newsletter states while email delivery is unconnected
- privacy-conscious events that can feed an existing `dataLayer`, with no new
  external analytics platform

## Run locally

Requires Node.js `>=22.13.0` and pnpm.

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify

```bash
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
node --test tests/rendered-html.test.mjs
pnpm audit --audit-level high
```

The rendered tests verify the security shell, homepage positioning, eight
pillar hubs, UK and US branches, sitemap, RSS, every one of the 50 guide routes,
article components, image pairs, retained role and tool routes, and prohibited
placeholder language.

Responsive visual checks target approximately 375px, 768px and 1440px.

## Project map

- `app/`: existing routes plus guide, topic, country and RSS routes
- `components/`: reusable editorial, retention, navigation and tool components
- `lib/editorial/`: the 50-guide library, pillar model and helpers
- `lib/content.ts`: preserved role, task, tool and current-change records
- `public/images/articles/`: unique 1536 by 1024 article images plus responsive
  768 by 512 JPG and WebP candidates
- `public/images/editorial/`: retained current-change artwork
- `public/brand/`: WorkChanged identity assets
- `public/fonts/`: self-hosted Inter and Newsreader
- `tests/`: server-rendered route and publication-quality checks
- `worker/index.ts`: preserved application entry point and security headers

## Security and privacy posture

- strict content, framing, referrer, permissions and transport-security headers
- no advertising scripts, third-party embeds or new external analytics service
- session-only event queue for reading and navigation events
- device-local follow preferences and update comparisons
- no server-side newsletter collection
- no database or authentication surface

## External connections still required

- email delivery provider and working newsletter backend
- consented analytics collection endpoint and Search Console reporting
- verified editorial contact route
- human legal or specialist review where the publication wants to claim it
- final domain and release monitoring through the existing Sites project

## Platform

The site uses Next.js-compatible App Router conventions through vinext and the
Cloudflare runtime. `.openai/hosting.json`, Wrangler configuration and the
current hosting path remain unchanged.
