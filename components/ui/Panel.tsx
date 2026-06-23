import { type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { CrosshairFrame } from "./Crosshair";

type Props = {
  id?: string;
  tone?: "dark" | "light";
  label?: string;
  children: ReactNode;
  className?: string;
  crosshairs?: boolean;
  full?: boolean;
};

/**
 * Section wrapper that drives Trionn's dark↔light inversion. Light panels flip
 * text colour via the `.panel-light` rules in globals.css.
 */
export function Panel({
  id,
  tone = "dark",
  label,
  children,
  className,
  crosshairs = false,
  full = false,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        tone === "light" ? "panel-light" : "bg-ink text-paper",
        full ? "" : "py-section",
        className
      )}
    >
      {crosshairs && <CrosshairFrame />}
      {label && (
        <div className="container mb-12 flex items-center gap-4">
          <span className="eyebrow">{label}</span>
          <span className={cn("h-px flex-1", tone === "light" ? "bg-line-dark" : "bg-line")} />
        </div>
      )}
      {children}
    </section>
  );
}
