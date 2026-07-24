import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/", origin = "http://localhost") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`${origin}${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Work Changed homepage and core funnel", async () => {
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
  assert.match(contentSecurityPolicy, /object-src 'none'/);
  assert.equal(response.headers.get("strict-transport-security"), null);

  const html = await response.text();
  assert.match(
    html,
    /<title>Work Changed — Know what AI means for your job(?: \| Work Changed)?<\/title>/i,
  );
  assert.match(html, /AI is changing your job\./);
  assert.match(html, /Know what to do next\./);
  assert.match(html, /The Daily Shift/);
  assert.match(html, /Choose your role/);
  assert.match(html, /Build your Work Change Map/);
  assert.match(html, /How we know/);
  assert.match(html, /The Work Shift/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/i);
});

test("adds transport security on HTTPS responses", async () => {
  const response = await render("/", "https://workchanged.com");
  assert.equal(response.status, 200);
  assert.equal(
    response.headers.get("strict-transport-security"),
    "max-age=31536000; includeSubDomains",
  );
});

test("server-renders the editorial, role, tool and standards routes", async () => {
  const routes = [
    [
      "/today/gemini-alpha-is-now-beta",
      /The programme grew up; the contract did not move/,
    ],
    ["/roles/marketing-content", /Marketing &amp; content/],
    ["/tools/microsoft-365-copilot", /Microsoft 365 Copilot/],
    [
      "/signals/ai-exposure-is-not-job-loss",
      /Exposure measures task overlap, not an employer decision/,
    ],
    ["/standards", /Trust should be inspectable/],
  ];

  for (const [path, expected] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), expected, path);
  }
});
