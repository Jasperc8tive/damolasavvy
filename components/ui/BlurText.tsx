"use client";

import { createElement, ElementType, useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";
import SplitType from "split-type";

type Props = {
  children: string;
  as?: ElementType;
  className?: string;
  type?: "words" | "chars" | "lines";
  delay?: number;
  stagger?: number;
  start?: string;
  /** play immediately on mount instead of on scroll (hero) */
  immediate?: boolean;
};

/**
 * Trionn-style blur-resolve text: each unit starts blurred + slightly displaced
 * and snaps into focus. Falls back to plain static text under reduced motion.
 */
export function BlurText({
  children,
  as = "div",
  className,
  type = "words",
  delay = 0,
  stagger = 0.05,
  start = "top 85%",
  immediate = false,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useGSAP(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const splitTypes =
      type === "lines" ? "lines" : type === "words" ? "words" : "words,chars";
    const split = new SplitType(el, { types: splitTypes as never, tagName: "span" });
    const targets =
      type === "lines" ? split.lines : type === "words" ? split.words : split.chars;
    if (!targets) return;

    // Keep words intact (inline-block) so char-splitting never breaks mid-word.
    split.words?.forEach((w) => {
      w.style.display = "inline-block";
    });
    targets.forEach((t) => {
      t.style.display = "inline-block";
      t.style.willChange = "transform, filter, opacity";
    });

    gsap.set(el, { autoAlpha: 1 });
    const tween = gsap.from(targets, {
      filter: "blur(14px)",
      opacity: 0,
      yPercent: 60,
      duration: 1,
      ease: "power3.out",
      stagger,
      delay,
      ...(immediate
        ? {}
        : { scrollTrigger: { trigger: el, start } }),
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      split.revert();
    };
  }, [reduced, children]);

  return createElement(
    as,
    {
      ref,
      className: cn(reduced ? "" : "pre-reveal", className),
    },
    children
  );
}
