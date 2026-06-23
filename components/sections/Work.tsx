"use client";

import { CrosshairFrame } from "@/components/ui/Crosshair";
import { CaseStudy } from "./CaseStudy";
import { PROJECTS } from "@/content/projects";

export function Work() {
  return (
    <section id="work" className="bg-ink">
      {/* WORK palate-cleanser */}
      <div className="relative flex h-[60svh] items-center justify-center">
        <CrosshairFrame />
        <span className="font-mono text-label uppercase text-muted">( Selected Work )</span>
        <h2 className="absolute font-display text-giant font-semibold opacity-[0.04]">WORK</h2>
      </div>

      {PROJECTS.map((project) => (
        <CaseStudy key={project.id} project={project} />
      ))}
    </section>
  );
}
