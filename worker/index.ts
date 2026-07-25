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
    const response = await handler.fetch(request, env, ctx);
    return securityHeaders(request, response);
  },
};

export default worker;
