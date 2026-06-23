"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";

/** Live local time in Lagos — a Trionn footer signature. */
export function LiveTime({ className }: { className?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: SITE.timezone,
        hour12: false,
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      WAT → {time || "--:--:--"}
    </span>
  );
}
