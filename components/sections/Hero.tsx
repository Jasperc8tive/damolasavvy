"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
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
      {/* WebGL monolith (desktop-only, gated for performance) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Lazy3D scene="hero" />
      </div>
      {/* faint contour lines */}
      <div className="contour-lines pointer-events-none absolute inset-0 z-[1] opacity-[0.10]" />
      {/* warm gold glow anchoring the lower-left where the headline sits */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 z-[1] h-[42rem] w-[42rem] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(198,161,91,0.10), transparent 65%)" }}
      />

      <div data-hero-inner className="container relative z-10 mt-auto">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduced ? 0 : 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-8"
        >
          {SITE.roles[0]} — {SITE.roles[1]}
        </motion.p>

        <h1 className="font-display text-giant font-semibold leading-[0.86]">
          <BlurText as="span" type="chars" immediate stagger={0.035} delay={0.2} className="block">
            Designed to
          </BlurText>
          <BlurText
            as="span"
            type="chars"
            immediate
            stagger={0.04}
            delay={0.5}
            className="serif-accent block text-gold-shimmer"
          >
            perform.
          </BlurText>
        </h1>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <a
            href={`mailto:${SITE.email}`}
            className="group inline-flex items-center gap-3 font-mono text-label uppercase transition-colors duration-300 hover:text-accent-bright"
          >
            <span className="relative">
              Start a project
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-accent transition-transform duration-500 group-hover:scale-x-0" />
            </span>
            <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduced ? 0 : 1.2, duration: 1 }}
            className="max-w-sm text-right text-body-lg leading-snug text-muted"
          >
            Websites that don&rsquo;t just exist&nbsp;&mdash;{" "}
            <span className="serif-accent text-paper">they grow businesses.</span>
          </motion.p>
        </div>
      </div>

      {/* bottom meta row */}
      <div className="container relative z-10 mt-10">
        <div className="rule-gold mb-5" />
        <div className="flex items-end justify-between">
          <div className="font-mono text-label uppercase text-muted">
            <span className="text-paper">EST. {SITE.est}</span> — {SITE.location}
          </div>
          <p className="hidden max-w-sm text-sm text-muted sm:block">{SITE.intro}</p>
        </div>
      </div>
    </section>
  );
}
