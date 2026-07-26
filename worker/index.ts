/** Cloudflare Worker entry point for WorkChanged. */
import handler from "vinext/server/app-router-entry";

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

interface WorkerAssetEnv {
  ASSETS?: {
    fetch(request: Request): Promise<Response> | Response;
  };
  NEWSLETTER_FETCH?: typeof fetch;
}

const NEWSLETTER_BODY_LIMIT = 4_096;
const NEWSLETTER_TIMEOUT_MS = 8_000;
const NEWSLETTER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSevqneZIj5ckUWGceVtkSw5oSJCRyigRHGsaTpFTsxNiZbz8w/formResponse";
const NEWSLETTER_FORM_CONSENT =
  "I agree to receive the WorkChanged News Letter and understand that I can unsubscribe at any time.";
const NEWSLETTER_CONFIRMATION =
  "You’re on the WorkChanged News Letter list.";
const NEWSLETTER_NAME_MAX_LENGTH = 80;
const NEWSLETTER_CONTROL_CHARACTER_PATTERN =
  /[\u0000-\u001f\u007f-\u009f\u2028\u2029]/u;
const NEWSLETTER_EMAIL_PATTERN =
  /^[^\s@]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

function newsletterResponse(
  body: { ok: boolean; error?: string },
  status: number,
): Response {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function normalizeNewsletterName(value: unknown): string | null {
  if (
    typeof value !== "string" ||
    NEWSLETTER_CONTROL_CHARACTER_PATTERN.test(value)
  ) {
    return null;
  }

  const normalized = value.trim().replace(/\s+/gu, " ");
  if (
    normalized.length === 0 ||
    normalized.length > NEWSLETTER_NAME_MAX_LENGTH
  ) {
    return null;
  }

  return normalized;
}

async function readRequestBody(
  request: Request,
  byteLimit: number,
): Promise<string | null> {
  if (!request.body) return "";

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let bytesRead = 0;
  let text = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    bytesRead += value.byteLength;
    if (bytesRead > byteLimit) {
      await reader.cancel();
      return null;
    }
    text += decoder.decode(value, { stream: true });
  }

  return text + decoder.decode();
}

async function handleNewsletterRequest(
  request: Request,
  env: WorkerAssetEnv,
): Promise<Response> {
  if (request.method !== "POST") {
    return newsletterResponse(
      { ok: false, error: "Method not allowed." },
      405,
    );
  }

  const requestUrl = new URL(request.url);
  if (request.headers.get("origin") !== requestUrl.origin) {
    return newsletterResponse(
      { ok: false, error: "This request was not accepted." },
      403,
    );
  }

  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.startsWith("application/json")) {
    return newsletterResponse(
      { ok: false, error: "Expected a JSON request." },
      415,
    );
  }

  const declaredLength = Number(request.headers.get("content-length") || "0");
  if (
    !Number.isFinite(declaredLength) ||
    declaredLength < 0 ||
    declaredLength > NEWSLETTER_BODY_LIMIT
  ) {
    return newsletterResponse(
      { ok: false, error: "The request was too large." },
      413,
    );
  }

  const rawBody = await readRequestBody(request, NEWSLETTER_BODY_LIMIT);
  if (rawBody === null) {
    return newsletterResponse(
      { ok: false, error: "The request was too large." },
      413,
    );
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(rawBody) as Record<string, unknown>;
  } catch {
    return newsletterResponse(
      { ok: false, error: "The request was not valid JSON." },
      400,
    );
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return newsletterResponse({ ok: true }, 200);
  }

  const firstName = normalizeNewsletterName(body.firstName);
  if (!firstName) {
    return newsletterResponse(
      { ok: false, error: "Enter your name." },
      400,
    );
  }

  const surname = normalizeNewsletterName(body.surname);
  if (!surname) {
    return newsletterResponse(
      { ok: false, error: "Enter your surname." },
      400,
    );
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const localPart = email.split("@", 1)[0] ?? "";
  if (
    email.length === 0 ||
    email.length > 254 ||
    localPart.length > 64 ||
    !NEWSLETTER_EMAIL_PATTERN.test(email)
  ) {
    return newsletterResponse(
      { ok: false, error: "Enter a valid email address." },
      400,
    );
  }

  if (body.consent !== true) {
    return newsletterResponse(
      { ok: false, error: "Consent is required." },
      400,
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), NEWSLETTER_TIMEOUT_MS);

  try {
    const upstreamBody = new URLSearchParams({
      "entry.1253484146": firstName,
      "entry.1063711954": surname,
      emailAddress: email,
      "entry.31323867": NEWSLETTER_FORM_CONSENT,
      fvv: "1",
      pageHistory: "0",
    });
    const upstreamFetch = env.NEWSLETTER_FETCH ?? fetch;
    const upstreamResponse = await upstreamFetch(NEWSLETTER_FORM_URL, {
      method: "POST",
      headers: {
        Accept: "text/html",
        "Accept-Language": "en-GB,en;q=0.9",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: upstreamBody,
      redirect: "follow",
      signal: controller.signal,
    });

    if (!upstreamResponse.ok) {
      return newsletterResponse(
        { ok: false, error: "News Letter sign-up could not be confirmed." },
        502,
      );
    }

    const upstreamHtml = await upstreamResponse.text();
    if (!upstreamHtml.includes(NEWSLETTER_CONFIRMATION)) {
      return newsletterResponse(
        { ok: false, error: "News Letter sign-up could not be confirmed." },
        502,
      );
    }

    return newsletterResponse({ ok: true }, 200);
  } catch {
    return newsletterResponse(
      { ok: false, error: "News Letter sign-up could not be confirmed." },
      502,
    );
  } finally {
    clearTimeout(timeout);
  }
}

function securityHeaders(request: Request, response: Response): Response {
  const url = new URL(request.url);
  const headers = new Headers(response.headers);
  const isDevelopment =
    url.hostname === "localhost" || url.hostname === "127.0.0.1";
  const contentType = headers.get("content-type") ?? "";

  headers.delete("x-powered-by");
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Cross-Origin-Resource-Policy", "same-origin");
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  );
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");

  if (url.protocol === "https:") {
    headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
    );
  }

  if (contentType.includes("text/html")) {
    const scriptPolicy = isDevelopment
      ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
      : "script-src 'self' 'unsafe-inline'";
    const connectPolicy = isDevelopment
      ? "connect-src 'self' ws: wss:"
      : "connect-src 'self'";

    headers.set(
      "Content-Security-Policy",
      [
        "default-src 'self'",
        "base-uri 'self'",
        connectPolicy,
        "font-src 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "frame-src 'none'",
        "img-src 'self' data:",
        "manifest-src 'self'",
        "media-src 'self'",
        "object-src 'none'",
        scriptPolicy,
        "style-src 'self' 'unsafe-inline'",
        "worker-src 'self' blob:",
      ].join("; "),
    );
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

const worker = {
  async fetch(
    request: Request,
    env: WorkerAssetEnv,
    ctx: ExecutionContext,
  ): Promise<Response> {
    if (new URL(request.url).pathname === "/api/newsletter") {
      return securityHeaders(
        request,
        await handleNewsletterRequest(request, env),
      );
    }

    const response = await handler.fetch(request, env, ctx);
    return securityHeaders(request, response);
  },
};

export default worker;
