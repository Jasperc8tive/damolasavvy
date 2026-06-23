"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  className?: string;
  poster?: string;
};

/**
 * Lazy, performance-first project video. Loads metadata only, then plays when
 * scrolled into view and pauses when out — keeping the ~30MB clips from all
 * loading at once.
 */
export function VideoReveal({ src, className, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Defer the heavy fetch until first reveal.
          if (video.preload !== "auto") video.preload = "auto";
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={cn("h-full w-full object-cover", className)}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      tabIndex={-1}
      aria-hidden
    />
  );
}
