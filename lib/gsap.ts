"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins exactly once (guard against Fast Refresh double-registration).
if (typeof window !== "undefined" && !(gsap.core as unknown as { _ddRegistered?: boolean })._ddRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  (gsap.core as unknown as { _ddRegistered?: boolean })._ddRegistered = true;
}

export { gsap, ScrollTrigger };
