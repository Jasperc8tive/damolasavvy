"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Lazy3D } from "@/components/three/Lazy3D";
import { BlurText } from "@/components/ui/BlurText";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SITE } from "@/lib/constants";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(() => {
    if (reduced || !ref.current) return;
    gsap.to("[data-hero-inner]", {
      yPercent: -12,
      opacity: 0,
      ease: "none",
      scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
    });
  }, [reduced]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink pt-28 pb-10"
    >
      {/* WebGL monolith */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Lazy3D scene="hero" />
      </div>
      {/* faint contour lines */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 80px, rgba(255,255,255,0.4) 80px 81px)",
        }}
      />

      <div data-hero-inner className="container relative z-10 mt-auto">
        <BlurText
          as="h1"
          type="chars"
          immediate
          stagger={0.035}
          delay={0.2}
          className="font-display text-giant font-semibold"
        >
          Designed to perform
        </BlurText>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <a
            href={`mailto:${SITE.email}`}
            className="group inline-flex items-center gap-3 font-mono text-label uppercase"
          >
            <span className="relative">
              Start a project
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-current transition-transform duration-500 group-hover:scale-x-0" />
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduced ? 0 : 1.2, duration: 1 }}
            className="max-w-xs text-right font-mono text-xs leading-relaxed text-muted"
          >
            {SITE.roles.join(" · ")}
          </motion.p>
        </div>
      </div>

      {/* bottom meta row */}
      <div className="container relative z-10 mt-10 flex items-end justify-between border-t border-line pt-5">
        <div className="font-mono text-label uppercase text-muted">
          <span className="text-paper">EST. {SITE.est}</span> — {SITE.location}
        </div>
        <p className="hidden max-w-sm text-sm text-muted sm:block">{SITE.intro}</p>
      </div>
    </section>
  );
}
