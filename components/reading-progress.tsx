"use client";

import { useEffect, useRef } from "react";

export function ReadingProgress() {
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;

    function update() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const root = document.documentElement;
        const distance = root.scrollHeight - window.innerHeight;
        const progress = distance > 0 ? Math.min(window.scrollY / distance, 1) : 0;

        if (bar.current) {
          bar.current.style.transform = `scaleX(${progress})`;
        }
      });
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="reading-progress" aria-hidden="true">
      <span ref={bar} />
    </div>
  );
}
