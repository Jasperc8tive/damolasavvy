"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { VideoReveal } from "@/components/ui/VideoReveal";
import { BlurText } from "@/components/ui/BlurText";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const STEPS = [
  { key: "problem", label: "Problem" },
  { key: "strategy", label: "Strategy" },
  { key: "solution", label: "Solution" },
  { key: "outcome", label: "Outcome" },
] as const;

export function CaseStudy({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(() => {
    if (reduced || !ref.current) return;
    const frame = ref.current.querySelector("[data-frame]");
    const media = ref.current.querySelector("[data-media]");
    if (frame && media) {
      gsap.fromTo(
        frame,
        { clipPath: "inset(14% 8% 14% 8% round 18px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 18px)",
          ease: "none",
          scrollTrigger: { trigger: frame, start: "top 90%", end: "top 35%", scrub: true },
        }
      );
      gsap.fromTo(
        media,
        { scale: 1.3 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: frame, start: "top bottom", end: "center center", scrub: true },
        }
      );
    }
  }, [reduced]);

  return (
    <article ref={ref} className="group/case border-t border-line py-[8vh]">
      <div className="container">
        {/* Header row */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="font-mono text-label text-accent">({project.index})</span>
            <span className="relative h-11 w-11 overflow-hidden rounded-lg bg-white ring-1 ring-line-accent">
              <Image src={project.logo} alt={`${project.name} logo`} fill className="object-cover" sizes="44px" />
            </span>
            <BlurText as="h3" type="chars" stagger={0.03} className="font-display text-display-md">
              {project.name}
            </BlurText>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 font-mono text-label uppercase transition-colors duration-300 hover:text-accent-bright"
          >
            Explore project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:rotate-45" />
          </a>
        </div>

        {/* Video frame */}
        <div
          data-frame
          className="will-clip relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface-2 transition-colors duration-500 group-hover/case:border-line-accent"
        >
          <div data-media className="absolute inset-0 will-transform">
            <VideoReveal src={project.video} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {/* gold edge-glow on hover */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-accent/30 transition-opacity duration-500 group-hover/case:opacity-100"
          />
          <p className="absolute bottom-5 left-6 max-w-md font-mono text-xs uppercase tracking-wider text-white/70">
            <span className="text-accent-bright">{project.industry}</span> · {project.status}
          </p>
        </div>

        {/* Tagline + case study */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <p className="max-w-md font-display text-display-sm leading-tight">{project.tagline}</p>
          <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {STEPS.map((s) => (
              <div key={s.key}>
                <dt className="eyebrow mb-2">{s.label}</dt>
                <dd className="text-body-lg leading-snug text-paper/80">{project[s.key]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}
