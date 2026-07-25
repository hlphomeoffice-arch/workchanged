"use client";

import { useSyncExternalStore } from "react";

const storageKey = "workchanged:follows:v1";

function readFollows(): string[] {
  try {
    const stored = window.localStorage.getItem(storageKey);
    return stored ? (JSON.parse(stored) as string[]) : [];
  } catch {
    return [];
  }
}

export function FollowControl({
  followKey,
  label,
}: {
  followKey: string;
  label: string;
}) {
  const followed = useSyncExternalStore(
    (notify) => {
      window.addEventListener("storage", notify);
      window.addEventListener("workchanged:follows-changed", notify);
      return () => {
        window.removeEventListener("storage", notify);
        window.removeEventListener("workchanged:follows-changed", notify);
      };
    },
    () => readFollows().includes(followKey),
    () => false,
  );

  function toggle() {
    const follows = new Set(readFollows());
    const nextFollowed = !follows.has(followKey);

    if (nextFollowed) {
      follows.add(followKey);
    } else {
      follows.delete(followKey);
    }

    window.localStorage.setItem(storageKey, JSON.stringify([...follows]));
    window.dispatchEvent(new Event("workchanged:follows-changed"));
    window.dispatchEvent(
      new CustomEvent("workchanged:follow", {
        detail: { followKey, followed: nextFollowed },
      }),
    );
  }

  return (
    <div className="follow-control">
      <button
        className={`button ${followed ? "button--saved" : "button--primary"}`}
        type="button"
        aria-pressed={followed}
        onClick={toggle}
      >
        {followed ? "Following on this device" : `Follow ${label}`}
      </button>
      <p>
        {followed
          ? "Saved locally. Revisit this page to see reviewed guidance and change logs."
          : "Save this preference on this device. Email alerts are not connected yet."}
      </p>
    </div>
  );
}
