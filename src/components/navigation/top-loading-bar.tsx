"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const START_PROGRESS = 8;
const MAX_PROGRESS_BEFORE_COMPLETE = 88;

function isPlainLeftClick(event: MouseEvent) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}

function shouldStartForLink(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) return false;
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasAttribute("download")) return false;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return false;

  const current = window.location;
  const samePath = url.pathname === current.pathname;
  const sameSearch = url.search === current.search;
  const sameHash = url.hash === current.hash;
  if (samePath && sameSearch && sameHash) return false; // exact same URL — nothing to load
  const hashOnly = samePath && sameSearch && !sameHash;
  return !hashOnly;
}

/**
 * Thin top progress indicator for in-site navigation. It starts on internal
 * link clicks, inches forward while the next route is loading, and completes
 * when the App Router reports a new pathname.
 */
export function TopLoadingBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const loadingRef = useRef(false);

  useEffect(() => {
    const stopTimers = () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      timeoutRef.current = null;
      intervalRef.current = null;
    };

    const start = () => {
      stopTimers();
      loadingRef.current = true;
      setVisible(true);
      setProgress(START_PROGRESS);

      intervalRef.current = window.setInterval(() => {
        setProgress((current) => {
          if (current >= MAX_PROGRESS_BEFORE_COMPLETE) return current;
          const remaining = MAX_PROGRESS_BEFORE_COMPLETE - current;
          return current + Math.max(1, remaining * 0.12);
        });
      }, 220);
    };

    const onClick = (event: MouseEvent) => {
      if (!isPlainLeftClick(event) || event.defaultPrevented) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (!shouldStartForLink(anchor)) return;

      start();
    };

    document.addEventListener("click", onClick, { capture: true });

    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      stopTimers();
    };
  }, []);

  useEffect(() => {
    if (!loadingRef.current) return;

    loadingRef.current = false;
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = null;

    setProgress(100);
    timeoutRef.current = window.setTimeout(() => {
      setVisible(false);
      setProgress(0);
      timeoutRef.current = null;
    }, 260);
  }, [pathname]);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-px bg-transparent"
      aria-hidden
    >
      <div
        className={[
          "h-full origin-left bg-accent shadow-[0_0_18px_rgba(80,160,230,0.9)]",
          visible ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{
          width: `${progress}%`,
          transition:
            progress === 100
              ? "width 220ms ease-out, opacity 180ms ease-out"
              : "width 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 120ms ease-out",
        }}
      />
    </div>
  );
}
