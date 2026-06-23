"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsDesktop } from "@/hooks/useMediaQuery";

const MetalObject = dynamic(() => import("./MetalObject"), { ssr: false });
const ExpertiseRing = dynamic(() => import("./ExpertiseRing"), { ssr: false });

/**
 * Gatekeeper for all WebGL. Renders nothing on touch / small screens / reduced
 * motion, so the heavy three.js bundle is never even requested there.
 */
export function Lazy3D({ scene }: { scene: "hero" | "expertise" }) {
  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();

  if (reduced || !isDesktop) return null;

  return scene === "hero" ? <MetalObject /> : <ExpertiseRing />;
}
