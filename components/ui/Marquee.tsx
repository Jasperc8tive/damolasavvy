"use client";

import { cn } from "@/lib/cn";

type Props = {
  items: string[];
  className?: string;
  separator?: string;
  reverse?: boolean;
};

/** Infinite CSS marquee (duplicated track). Pure CSS — cheap and always-on. */
export function Marquee({ items, className, separator = "✦", reverse = false }: Props) {
  const track = (
    <div
      className={cn(
        "flex shrink-0 items-center gap-8 pr-8",
        reverse ? "animate-[marquee_30s_linear_infinite_reverse]" : "animate-marquee"
      )}
      aria-hidden
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8 whitespace-nowrap">
          {item}
          <span className="opacity-40">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("flex w-full overflow-hidden", className)}>
      {track}
      {track}
    </div>
  );
}
