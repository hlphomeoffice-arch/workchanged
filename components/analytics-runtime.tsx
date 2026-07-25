"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type EventProperties = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const queueKey = "workchanged:analytics-queue:v1";
const pageKey = "workchanged:session-pages:v1";

function record(name: string, properties: EventProperties = {}) {
  const event = {
    event: `workchanged_${name}`,
    path: window.location.pathname,
    at: new Date().toISOString(),
    ...properties,
  };

  try {
    const queue = JSON.parse(
      window.sessionStorage.getItem(queueKey) || "[]",
    ) as Array<Record<string, unknown>>;
    window.sessionStorage.setItem(
      queueKey,
      JSON.stringify([...queue.slice(-99), event]),
    );
  } catch {
    // Storage can be disabled. Event dispatch still gives a future consented
    // analytics adapter a stable integration point.
  }

  window.dataLayer?.push(event);
  window.dispatchEvent(
    new CustomEvent("workchanged:analytics", { detail: event }),
  );
}

function isSearchReferrer(referrer: string) {
  return /(^|\.)google\.|(^|\.)bing\.|(^|\.)duckduckgo\./i.test(referrer);
}

function hasSessionPages() {
  try {
    return Boolean(window.sessionStorage.getItem(pageKey));
  } catch {
    return false;
  }
}

export function AnalyticsRuntime({ reviewed }: { reviewed?: string }) {
  const pathname = usePathname();

  useEffect(() => {
    const path = pathname;
    const referrer = document.referrer;
    const landing = !hasSessionPages();
    const organicSearch = isSearchReferrer(referrer);
    record("page_view", {
      landing,
      organic_search: organicSearch,
    });
    if (landing && organicSearch) {
      record("organic_landing", {
        query_classification: "unavailable_client_side",
      });
    }
    if (
      path === "/roles" ||
      path.startsWith("/roles/") ||
      path === "/topics/profession-trackers"
    ) {
      record("profession_hub_visit", {
        profession:
          path === "/roles" || path === "/topics/profession-trackers"
            ? "directory"
            : path.replace("/roles/", ""),
      });
    }

    try {
      const pages = JSON.parse(
        window.sessionStorage.getItem(pageKey) || "[]",
      ) as string[];
      const distinctPages = [...new Set([...pages, path])];
      window.sessionStorage.setItem(pageKey, JSON.stringify(distinctPages));
      if (distinctPages.length === 2 && !pages.includes(path)) {
        record("second_page_visit");
      }
    } catch {
      // Session measurement is optional when browser storage is unavailable.
    }

    const reviewedDate =
      reviewed ||
      document
        .querySelector<HTMLMetaElement>('meta[name="workchanged:reviewed"]')
        ?.getAttribute("content") ||
      undefined;

    if (reviewedDate) {
      try {
        const reviewKey = `workchanged:last-review:${path}`;
        const previousReview = window.localStorage.getItem(reviewKey);
        if (previousReview && previousReview !== reviewedDate) {
          record("updated_page_return", {
            previous_review: previousReview,
            current_review: reviewedDate,
          });
        }
        window.localStorage.setItem(reviewKey, reviewedDate);
      } catch {
        // No cross-visit measurement without local storage.
      }
    }

    const thresholds = [25, 50, 75, 90];
    const sent = new Set<number>();
    let activeSeconds = 0;
    let engagedSent = false;
    let completionSent = false;

    function onScroll() {
      const distance =
        document.documentElement.scrollHeight - window.innerHeight;
      const depth =
        distance > 0 ? Math.round((window.scrollY / distance) * 100) : 100;

      for (const threshold of thresholds) {
        if (depth >= threshold && !sent.has(threshold)) {
          sent.add(threshold);
          record("scroll_depth", { percent: threshold });
        }
      }

      const isArticle =
        path.startsWith("/guides/") || path.startsWith("/today/");
      const article = isArticle
        ? document.querySelector<HTMLElement>(
            "article.guide-article, article.article-page",
          )
        : null;
      const reachedArticleEnd =
        article !== null &&
        article.getBoundingClientRect().bottom <= window.innerHeight;

      if (reachedArticleEnd && !completionSent) {
        completionSent = true;
        record("article_completion");
      }
    }

    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const tracked = target?.closest<HTMLElement>("[data-track]");
      if (tracked) {
        record(tracked.dataset.track || "interaction", {
          target: tracked.dataset.trackMeta,
        });
        return;
      }

      const anchor = target?.closest<HTMLAnchorElement>("main a[href]");
      if (!anchor) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      record("contextual_internal_link", {
        target: `${destination.pathname}${destination.search}${destination.hash}`,
      });
    }

    function onFollow(event: Event) {
      const detail = (event as CustomEvent<EventProperties>).detail;
      record("role_or_topic_follow", detail);
    }

    function onNewsletterSignup(event: Event) {
      const detail = (event as CustomEvent<EventProperties>).detail;
      record("newsletter_conversion", detail);
    }

    const timer = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      activeSeconds += 5;
      if (activeSeconds >= 30 && !engagedSent) {
        engagedSent = true;
        record("engaged_reading", { active_seconds: activeSeconds });
      }
    }, 5000);

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    window.addEventListener("workchanged:follow", onFollow);
    window.addEventListener(
      "workchanged:newsletter-signup",
      onNewsletterSignup,
    );
    onScroll();

    return () => {
      window.clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      window.removeEventListener("workchanged:follow", onFollow);
      window.removeEventListener(
        "workchanged:newsletter-signup",
        onNewsletterSignup,
      );
    };
  }, [pathname, reviewed]);

  return null;
}
