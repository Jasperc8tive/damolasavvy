"use client";

import { useEffect, useState } from "react";

/** SSR-safe media query hook. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/** True on coarse-pointer / small screens — used to gate WebGL & heavy motion. */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px) and (pointer: fine)");
}
