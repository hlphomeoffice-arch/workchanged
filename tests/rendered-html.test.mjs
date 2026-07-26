import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
let workerPromise;
const testExecutionContext = {
  waitUntil() {},
  passThroughOnException() {},
};

function testEnvironment(overrides = {}) {
  return {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
    ...overrides,
  };
}

async function getWorker() {
  workerPromise ||= import(
    new URL(
      `../dist/server/index.js?test-suite=${process.pid}-${Date.now()}`,
      import.meta.url,
    ).href
  ).then((module) => module.default);
  return workerPromise;
}

async function render(
  requestPath = "/",
  origin = "http://localhost",
  accept = "text/html",
) {
  const worker = await getWorker();
  return worker.fetch(
    new Request(`${origin}${requestPath}`, {
      headers: { accept },
    }),
    testEnvironment(),
    testExecutionContext,
  );
}

async function submitNewsletter(
  payload,
  {
    origin = "https://workchanged.com",
    upstreamFetch = async () =>
      new Response(
        "<main>You’re on the WorkChanged News Letter list.</main>",
        { status: 200 },
      ),
  } = {},
) {
  const worker = await getWorker();
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
  };
  if (origin !== null) headers.origin = origin;

  return worker.fetch(
    new Request("https://workchanged.com/api/newsletter", {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    }),
    testEnvironment({ NEWSLETTER_FETCH: upstreamFetch }),
    testExecutionContext,
  );
}

test("server-renders the audience-led homepage and preserved security shell", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(
    response.headers.get("referrer-policy"),
    "strict-origin-when-cross-origin",
  );
  assert.equal(
    response.headers.get("cross-origin-opener-policy"),
    "same-origin",
  );
  assert.match(
    response.headers.get("permissions-policy") ?? "",
    /camera=\(\), microphone=\(\), geolocation=\(\)/,
  );
  const contentSecurityPolicy =
    response.headers.get("content-security-policy") ?? "";
  assert.match(contentSecurityPolicy, /default-src 'self'/);
  assert.match(contentSecurityPolicy, /frame-ancestors 'none'/);
  assert.match(contentSecurityPolicy, /frame-src 'none'/);
  assert.match(contentSecurityPolicy, /form-action 'self'/);
  assert.doesNotMatch(contentSecurityPolicy, /connect-src[^;]*google/i);
  assert.match(contentSecurityPolicy, /object-src 'none'/);
  assert.equal(response.headers.get("strict-transport-security"), null);

  const html = await response.text();
  assert.match(
    html,
    /<title>What changed at work and what to do next \| WorkChanged<\/title>/i,
  );
  assert.match(
    html,
    /What changed at work\. Who it affects\. What to do next\./,
  );
  assert.match(html, />50<.*complete decision pages/is);
  for (const pillar of [
    "AI and Your Job",
    "Skills That Are Changing",
    "Career Moves",
    "Job Security and Hiring",
    "Workplace Rules and Rights",
    "Managing Changed Work",
    "How Work Actually Works",
    "Profession Trackers",
  ]) {
    assert.match(html, new RegExp(pillar, "i"), pillar);
  }
  assert.match(html, /What Changed This Week/);
  assert.match(html, /Country-specific guidance/);
  assert.match(html, /Evidence Checks/);
  assert.match(html, /Practical tools and checklists/);
  assert.match(html, /WorkChanged News Letter/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /rel="canonical" href="https:\/\/workchanged\.com\/"/);
  assert.doesNotMatch(
    html,
    /Your site is taking shape|codex-preview|subscription confirmed|thanks for subscribing/i,
  );
});

test("publishes an active, accessible WorkChanged News Letter sign-up", async () => {
  const response = await render("/newsletter");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>WorkChanged News Letter \| WorkChanged<\/title>/);
  assert.match(html, /The News Letter worth your attention this week\./);
  assert.match(
    html,
    /<form[^>]+class="newsletter-form newsletter-form--notice newsletter-form--dark/,
  );
  const firstNameInput = html.match(
    /<input[^>]*name="firstName"[^>]*>/i,
  )?.[0];
  assert.ok(firstNameInput);
  assert.match(firstNameInput, /type="text"/i);
  assert.match(firstNameInput, /autocomplete="given-name"/i);
  assert.match(firstNameInput, /maxlength="80"/i);
  assert.match(firstNameInput, /required/i);
  const surnameInput = html.match(
    /<input[^>]*name="surname"[^>]*>/i,
  )?.[0];
  assert.ok(surnameInput);
  assert.match(surnameInput, /type="text"/i);
  assert.match(surnameInput, /autocomplete="family-name"/i);
  assert.match(surnameInput, /maxlength="80"/i);
  assert.match(surnameInput, /required/i);
  const emailInput = html.match(/<input[^>]*name="email"[^>]*>/i)?.[0];
  assert.ok(emailInput);
  assert.match(emailInput, /type="email"/i);
  assert.match(emailInput, /autocomplete="email"/i);
  assert.match(emailInput, /maxlength="254"/i);
  assert.match(emailInput, /required/i);
  const consentInput = html.match(
    /<input[^>]*name="consent"[^>]*>/i,
  )?.[0];
  assert.ok(consentInput);
  assert.match(consentInput, /type="checkbox"/i);
  assert.match(consentInput, /required/i);
  assert.match(html, /Join the News Letter/);
  assert.match(html, /I agree to receive the WorkChanged News Letter/);
  assert.match(html, /private WorkChanged mailing-list file in Google Drive/);
  assert.match(html, /Prefer RSS\? Follow the feed/);
  assert.doesNotMatch(html, /<iframe|docs\.google\.com\/forms/i);
  assert.doesNotMatch(html, /henk@nuclius\.ai|Switch accounts/i);
  assert.doesNotMatch(
    html,
    /email service is not connected|no email address is collected/i,
  );
});

test("stores a valid News Letter signup only after Google confirms it", async () => {
  let upstreamRequest;
  const response = await submitNewsletter(
    {
      firstName: "  Amélie   Anne  ",
      surname: "  O’Connor-Smith  ",
      email: "Reader.Example@example.com",
      consent: true,
      website: "",
      topic: "AI and Your Job",
      sourcePath: "/guides/ai-job-loss-predictions-evidence",
    },
    {
      upstreamFetch: async (input, init) => {
        upstreamRequest = { input: String(input), init };
        return new Response(
          "<main>You’re on the WorkChanged News Letter list.</main>",
          { status: 200 },
        );
      },
    },
  );

  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(
    upstreamRequest.input,
    "https://docs.google.com/forms/d/e/1FAIpQLSevqneZIj5ckUWGceVtkSw5oSJCRyigRHGsaTpFTsxNiZbz8w/formResponse",
  );
  assert.equal(upstreamRequest.init.method, "POST");
  assert.match(
    upstreamRequest.init.headers["Content-Type"],
    /^application\/x-www-form-urlencoded/,
  );
  const upstreamBody = new URLSearchParams(
    upstreamRequest.init.body.toString(),
  );
  assert.equal(upstreamBody.get("entry.1253484146"), "Amélie Anne");
  assert.equal(
    upstreamBody.get("entry.1063711954"),
    "O’Connor-Smith",
  );
  assert.equal(
    upstreamBody.get("emailAddress"),
    "reader.example@example.com",
  );
  assert.equal(
    upstreamBody.get("entry.31323867"),
    "I agree to receive the WorkChanged News Letter and understand that I can unsubscribe at any time.",
  );
  assert.equal(upstreamBody.get("fvv"), "1");
  assert.equal(upstreamBody.get("pageHistory"), "0");
});

test("rejects unsafe News Letter requests before they reach Google", async () => {
  let upstreamCalls = 0;
  const upstreamFetch = async () => {
    upstreamCalls += 1;
    return new Response(
      "<main>You’re on the WorkChanged News Letter list.</main>",
      { status: 200 },
    );
  };

  const invalidEmail = await submitNewsletter(
    {
      firstName: "Alex",
      surname: "Morgan",
      email: "not-an-email",
      consent: true,
      website: "",
    },
    { upstreamFetch },
  );
  assert.equal(invalidEmail.status, 400);

  const missingFirstName = await submitNewsletter(
    {
      firstName: " ",
      surname: "Morgan",
      email: "reader@example.com",
      consent: true,
      website: "",
    },
    { upstreamFetch },
  );
  assert.equal(missingFirstName.status, 400);

  const missingSurname = await submitNewsletter(
    {
      firstName: "Alex",
      surname: "",
      email: "reader@example.com",
      consent: true,
      website: "",
    },
    { upstreamFetch },
  );
  assert.equal(missingSurname.status, 400);

  const overlongName = await submitNewsletter(
    {
      firstName: "A".repeat(81),
      surname: "Morgan",
      email: "reader@example.com",
      consent: true,
      website: "",
    },
    { upstreamFetch },
  );
  assert.equal(overlongName.status, 400);

  const controlCharacterName = await submitNewsletter(
    {
      firstName: "Alex\nAdmin",
      surname: "Morgan",
      email: "reader@example.com",
      consent: true,
      website: "",
    },
    { upstreamFetch },
  );
  assert.equal(controlCharacterName.status, 400);

  const missingConsent = await submitNewsletter(
    {
      firstName: "Alex",
      surname: "Morgan",
      email: "reader@example.com",
      consent: false,
      website: "",
    },
    { upstreamFetch },
  );
  assert.equal(missingConsent.status, 400);

  const crossOrigin = await submitNewsletter(
    {
      firstName: "Alex",
      surname: "Morgan",
      email: "reader@example.com",
      consent: true,
      website: "",
    },
    { origin: "https://example.net", upstreamFetch },
  );
  assert.equal(crossOrigin.status, 403);

  const botTrap = await submitNewsletter(
    {
      email: "reader@example.com",
      consent: true,
      website: "filled-by-a-bot",
    },
    { upstreamFetch },
  );
  assert.equal(botTrap.status, 200);
  assert.deepEqual(await botTrap.json(), { ok: true });
  assert.equal(upstreamCalls, 0);
});

test("does not claim a signup when Google fails or omits confirmation", async () => {
  const upstreamFailure = await submitNewsletter(
    {
      firstName: "Alex",
      surname: "Morgan",
      email: "reader@example.com",
      consent: true,
      website: "",
    },
    {
      upstreamFetch: async () =>
        new Response("Service unavailable", { status: 503 }),
    },
  );
  assert.equal(upstreamFailure.status, 502);
  assert.deepEqual(await upstreamFailure.json(), {
    ok: false,
    error: "News Letter sign-up could not be confirmed.",
  });

  const missingConfirmation = await submitNewsletter(
    {
      firstName: "Alex",
      surname: "Morgan",
      email: "reader@example.com",
      consent: true,
      website: "",
    },
    {
      upstreamFetch: async () =>
        new Response("<main>Please correct the form.</main>", {
          status: 200,
        }),
    },
  );
  assert.equal(missingConfirmation.status, 502);
});

test("adds transport security on HTTPS responses", async () => {
  const response = await render("/", "https://workchanged.com");
  assert.equal(response.status, 200);
  assert.equal(
    response.headers.get("strict-transport-security"),
    "max-age=31536000; includeSubDomains",
  );
});

test("publishes eight complete pillar hubs and both country branches", async () => {
  const routes = [
    "/topics/ai-and-your-job",
    "/topics/skills-that-are-changing",
    "/topics/career-moves",
    "/topics/job-security-and-hiring",
    "/topics/workplace-rules-and-rights",
    "/topics/managing-changed-work",
    "/topics/how-work-actually-works",
    "/topics/profession-trackers",
    "/country/uk",
    "/country/us",
  ];

  for (const route of routes) {
    const response = await render(route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, /rel="canonical"/, route);
    assert.match(html, /"@type":"CollectionPage"/, route);
    assert.match(html, /"@type":"BreadcrumbList"/, route);
    assert.doesNotMatch(html, /coming soon|placeholder article/i, route);
  }
});

test("sitemap, RSS and every guide route expose the complete 50-page library", async () => {
  const sitemapResponse = await render(
    "/sitemap.xml",
    "https://workchanged.com",
    "application/xml",
  );
  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  const guideUrls = [
    ...sitemap.matchAll(
      /<loc>https:\/\/workchanged\.com\/guides\/([^<]+)<\/loc>/g,
    ),
  ];
  assert.equal(guideUrls.length, 50);
  assert.equal(new Set(guideUrls.map((match) => match[1])).size, 50);
  assert.equal(
    [...sitemap.matchAll(/<loc>https:\/\/workchanged\.com\/topics\//g)].length,
    8,
  );

  const rssResponse = await render(
    "/rss.xml",
    "https://workchanged.com",
    "application/rss+xml",
  );
  assert.equal(rssResponse.status, 200);
  assert.match(
    rssResponse.headers.get("content-type") ?? "",
    /application\/rss\+xml/,
  );
  const rss = await rssResponse.text();
  assert.equal((rss.match(/<item>/g) || []).length, 50);
  assert.match(rss, /rel="self"/);

  for (const [, slug] of guideUrls) {
    const response = await render(`/guides/${slug}`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /Answer First/, slug);
    assert.match(html, /Who This Affects/, slug);
    assert.match(html, /Evidence Strength/, slug);
    assert.match(html, /What To Do Next/, slug);
    assert.match(html, /Next review/, slug);
    assert.match(html, /Read the evidence behind this guide/, slug);
    assert.match(html, /Change log/, slug);
    assert.match(html, /"@type":"Article"/, slug);
    const guideSectionIds = [
      ...html.matchAll(/class="guide-section" id="([^"]+)"/g),
    ].map((match) => match[1]);
    assert.ok(guideSectionIds.length >= 4, slug);
    assert.equal(new Set(guideSectionIds).size, guideSectionIds.length, slug);
    for (const reservedId of [
      "answer-first",
      "who-this-affects",
      "evidence",
      "what-to-do-next",
      "sources",
      "change-log",
    ]) {
      assert.equal(guideSectionIds.includes(reservedId), false, slug);
    }
    const sourceBlock = html.match(
      /<section class="source-list"[^>]*>([\s\S]*?)<\/section>/,
    );
    assert.ok(sourceBlock, slug);
    assert.ok((sourceBlock[1].match(/<a /g) || []).length >= 3, slug);
    assert.match(
      html,
      new RegExp(`/images/articles/${slug}\\.webp`),
      slug,
    );
    assert.match(
      html,
      new RegExp(
        `rel="canonical" href="https://workchanged\\.com/guides/${slug}"`,
      ),
      slug,
    );

    for (const filename of [
      `${slug}.jpg`,
      `${slug}.webp`,
      `${slug}-768.jpg`,
      `${slug}-768.webp`,
    ]) {
      const imagePath = path.join(
        projectRoot,
        "public",
        "images",
        "articles",
        filename,
      );
      assert.equal(existsSync(imagePath), true, imagePath);
      assert.ok(statSync(imagePath).size > 10_000, imagePath);
    }
  }
});

test("server-renders retained role, tool, current-change and standards routes", async () => {
  const routes = [
    [
      "/today/gemini-alpha-is-now-beta",
      /The programme grew up; the contract did not move/,
    ],
    ["/roles/marketing-content", /Marketing &amp; content/],
    ["/tools/microsoft-365-copilot", /Microsoft 365 Copilot/],
    ["/standards", /Trust should be inspectable/],
    ["/search?q=redundancy", /Search WorkChanged/],
  ];

  for (const [requestPath, expected] of routes) {
    const response = await render(requestPath);
    assert.equal(response.status, 200, requestPath);
    const html = await response.text();
    assert.match(html, expected, requestPath);
    if (
      requestPath.startsWith("/roles/") ||
      requestPath.startsWith("/tools/") ||
      requestPath.startsWith("/today/")
    ) {
      assert.match(html, /"@type":"BreadcrumbList"/, requestPath);
    }
    if (requestPath.startsWith("/tools/")) {
      assert.match(html, /"@type":"WebPage"/, requestPath);
    }
  }
});

test("every sitemap page and internal reading path resolves", async () => {
  const sitemapResponse = await render(
    "/sitemap.xml",
    "https://workchanged.com",
    "application/xml",
  );
  const sitemap = await sitemapResponse.text();
  const sitemapPaths = [
    ...sitemap.matchAll(/<loc>https:\/\/workchanged\.com([^<]*)<\/loc>/g),
  ].map((match) => match[1] || "/");
  const internalLinks = new Map();
  const publicAssets = new Map();

  for (const requestPath of sitemapPaths) {
    const response = await render(requestPath);
    assert.equal(response.status, 200, requestPath);
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.startsWith("text/html")) continue;

    const html = await response.text();
    for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
      const href = match[1].replaceAll("&amp;", "&");
      if (
        href.startsWith("/_next/") ||
        href.startsWith("/assets/") ||
        href.startsWith("/images/") ||
        href.startsWith("/brand/") ||
        href.startsWith("/fonts/") ||
        href === "/favicon.svg" ||
        href.startsWith("/og-work-changed.")
      ) {
        continue;
      }
      internalLinks.set(href, requestPath);
    }

    for (const match of html.matchAll(/(?:src|srcset)="(\/[^"]*)"/gi)) {
      for (const candidate of match[1].split(",")) {
        const assetUrl = candidate.trim().split(/\s+/)[0];
        if (
          !assetUrl ||
          assetUrl.startsWith("/_next/") ||
          assetUrl.startsWith("/assets/")
        ) {
          continue;
        }
        publicAssets.set(assetUrl, requestPath);
      }
    }
  }

  for (const [href, sourcePath] of internalLinks) {
    const url = new URL(href, "https://workchanged.com");
    const targetPath = `${url.pathname}${url.search}`;
    const response = await render(targetPath);
    assert.ok(
      response.status >= 200 && response.status < 400,
      `${sourcePath} links to ${href}, which returned ${response.status}`,
    );

    if (url.hash && response.headers.get("content-type")?.startsWith("text/html")) {
      const html = await response.text();
      const fragment = decodeURIComponent(url.hash.slice(1));
      assert.match(
        html,
        new RegExp(`id=["']${fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`),
        `${sourcePath} links to missing fragment ${href}`,
      );
    }
  }

  for (const [assetUrl, sourcePath] of publicAssets) {
    const pathname = decodeURIComponent(
      new URL(assetUrl, "https://workchanged.com").pathname,
    );
    const assetPath = path.join(projectRoot, "public", pathname);
    assert.equal(
      existsSync(assetPath),
      true,
      `${sourcePath} references missing public asset ${pathname}`,
    );
    assert.ok(statSync(assetPath).size > 0, pathname);
  }
});

test("preserves the earlier AI exposure URL with a permanent redirect", async () => {
  const response = await render("/signals/ai-exposure-is-not-job-loss");
  assert.equal(response.status, 308);
  assert.equal(
    new URL(response.headers.get("location"), "http://localhost").pathname,
    "/guides/ai-job-loss-predictions-evidence",
  );
});

test("website copy contains no em dashes or placeholder publishing language", () => {
  const roots = ["app", "components", "lib"];
  const sourceFiles = [];

  function visit(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(target);
      else if (/\.(?:ts|tsx)$/.test(entry.name)) sourceFiles.push(target);
    }
  }

  for (const root of roots) visit(path.join(projectRoot, root));

  for (const file of sourceFiles) {
    const source = readFileSync(file, "utf8");
    assert.equal(source.includes("—"), false, file);
    assert.doesNotMatch(
      source,
      /placeholder article|coming soon|subscription confirmed/i,
      file,
    );
  }
});
