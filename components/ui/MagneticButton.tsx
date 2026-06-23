"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  ariaLabel?: string;
};

/** Cursor-following magnetic button. Degrades to a normal button on touch / reduced motion. */
export function MagneticButton({ children, href, onClick, className, strength = 0.4, ariaLabel }: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();
  const magnetic = !reduced && isDesktop;

  const handleMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    gsap.to(ref.current, { x, y, duration: 0.6, ease: "power3.out" });
  };

  const handleLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] transition-colors will-transform",
    className
  );

  const inner = (
    <span className="relative z-10 flex items-center gap-3">{children}</span>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        aria-label={ariaLabel}
        className={classes}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={classes}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {inner}
    </button>
  );
}
