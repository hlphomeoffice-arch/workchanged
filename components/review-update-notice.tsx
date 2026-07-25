"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { formatEditorialDate } from "@/lib/editorial/dates";

export function ReviewUpdateNotice({
  articleKey,
  reviewed,
}: {
  articleKey: string;
  reviewed: string;
}) {
  const key = `workchanged:visible-review:${articleKey}`;
  const previous = useSyncExternalStore(
    () => () => undefined,
    () => {
      try {
        const prior = window.localStorage.getItem(key) || "";
        return prior && prior !== reviewed ? prior : "";
      } catch {
        return "";
      }
    },
    () => "",
  );
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, reviewed);
    } catch {
      // A visible cross-visit alert requires local storage.
    }
  }, [key, reviewed]);

  if (!previous || dismissed) return null;

  return (
    <aside className="review-update-notice" role="status">
      <div>
        <strong>Updated since your last visit</strong>
        <span>
          Previously reviewed {formatEditorialDate(previous)}. Now reviewed{" "}
          {formatEditorialDate(reviewed)}.
        </span>
      </div>
      <a href="#change-log">See what changed</a>
      <button type="button" onClick={() => setDismissed(true)}>
        Dismiss
      </button>
    </aside>
  );
}
