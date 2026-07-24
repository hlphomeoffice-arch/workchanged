# Work Changed

Work Changed is an evidence-led editorial publication about how AI is changing
work. It translates product releases, labour-market research and real workflow
tests into practical guidance for specific roles, tasks, tools and skills.

This repository contains the private GitHub review build. The website has not
been deployed.

## Editorial products

- **The Daily Shift** — the changes worth attention today
- **Role Library** — living briefings for six launch role clusters
- **Task Library** — task-level change maps and next actions
- **Tool Lab** — verdict-led tool pages and test methods
- **Skill Moves** — practical capabilities workers can build now
- **Work Signals** — evidence-led labour and adoption analysis
- **The Work Shift** — the weekly newsletter funnel

## Information architecture

The primary navigation is:

`Today → Roles → Tasks → Tools → Skills → Signals`

Every consequential item is designed to show an evidence label, a time horizon
and a practical next action. Editorial and commercial standards are documented
at `/standards`.

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
pnpm run build
node --test tests/rendered-html.test.mjs
```

The rendered-route tests cover the homepage funnel, a long-form article, a role
hub, a tool page, a signal page and the editorial standards.

## Project map

- `app/` — routes, metadata, sitemap and robots rules
- `components/` — shared editorial, navigation and conversion components
- `lib/content.ts` — structured launch content for roles, tools and stories
- `public/brand/` — approved Work Changed identity and hero assets
- `public/fonts/` — self-hosted Inter and Newsreader
- `public/og-work-changed.png` — branded social-share image
- `tests/` — server-rendered route checks
- `worker/index.ts` — application entry point and enforced security headers

## Security posture

- strict content, framing, referrer, permissions and transport-security headers
- no analytics, advertising scripts, cookies or third-party embeds
- no server-side newsletter collection in the review build
- no database, authentication or image-proxy surface until those capabilities
  are explicitly required
- weekly Dependabot review for the JavaScript dependency chain

## Launch connections still required

- replace the newsletter preview confirmation with the chosen email platform
- connect analytics and consent tooling
- confirm the production domain and canonical URLs
- complete legal review for privacy and terms
- merge the reviewed pull request into `main`
- deploy only after production approval

## Platform

The site uses Next.js-compatible app routing through vinext and the Cloudflare
runtime. `.openai/hosting.json` is intentionally present for a future Sites
deployment, but no production project has been created.
