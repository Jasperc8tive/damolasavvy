import { cn } from "@/lib/cn";

/**
 * Giant outline/line-art typography (Trionn footer). Text is filled with
 * repeating horizontal lines via the `.line-art` utility.
 */
export function LineArtText({ children, className }: { children: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "line-art block select-none font-display font-semibold leading-[0.8] tracking-tighter text-paper",
        className
      )}
    >
      {children}
    </span>
  );
}
