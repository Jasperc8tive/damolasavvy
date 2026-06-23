"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";

/**
 * Trionn-style custom cursor: a small dot + a lagging ring that grows over
 * interactive elements. Desktop + motion only; otherwise native cursor stays.
 */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const [hovering, setHovering] = useState(false);
  const enabled = !reduced && isDesktop;

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("cursor-hidden");

    const xDot = gsap.quickTo(dot.current, "x", { duration: 0.08, ease: "power2.out" });
    const yDot = gsap.quickTo(dot.current, "y", { duration: 0.08, ease: "power2.out" });
    const xRing = gsap.quickTo(ring.current, "x", { duration: 0.4, ease: "power3.out" });
    const yRing = gsap.quickTo(ring.current, "y", { duration: 0.4, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor='hover']"));
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-hidden");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    // mix-blend-difference auto-inverts the cursor against the background:
    // it reads light-grey over black sections and near-black over the grey panels.
    <div className="pointer-events-none fixed inset-0 z-[120] mix-blend-difference" aria-hidden>
      <div
        ref={ring}
        className={cn(
          "absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c8c8c8] transition-all duration-300",
          hovering ? "h-14 w-14 opacity-100" : "h-[30px] w-[30px] opacity-60"
        )}
      />
      <div
        ref={dot}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8c8c8]"
      />
    </div>
  );
}
