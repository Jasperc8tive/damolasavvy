"use client";

import { useEffect, type DependencyList } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Runs GSAP animations inside a scoped context that is automatically reverted
 * on unmount / dependency change. The callback may return its own cleanup fn.
 */
export function useGSAP(callback: () => void | (() => void), deps: DependencyList = []) {
  useEffect(() => {
    let cleanup: void | (() => void);
    const ctx = gsap.context(() => {
      cleanup = callback();
    });
    return () => {
      if (typeof cleanup === "function") cleanup();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
