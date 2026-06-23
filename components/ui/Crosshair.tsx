import { cn } from "@/lib/cn";

/** The recurring Trionn "+" mark. Position via className (absolute coords). */
export function Crosshair({ className }: { className?: string }) {
  return <span aria-hidden className={cn("crosshair", className)} />;
}

/** Four crosshairs at the corners of a relatively-positioned container. */
export function CrosshairFrame() {
  return (
    <>
      <Crosshair className="left-6 top-6" />
      <Crosshair className="right-6 top-6" />
      <Crosshair className="left-6 bottom-6" />
      <Crosshair className="right-6 bottom-6" />
    </>
  );
}
