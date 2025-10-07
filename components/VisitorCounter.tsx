"use client";

import { useEffect, useState } from "react";

/**
 * Lightweight visitor counter using CountAPI.
 * - No backend required
 * - Increments once per page load
 * - Gracefully falls back if the service is blocked
 *
 * Tip: change `ns` to a unique string (e.g., your domain or repo name)
 * so your counter is yours alone.
 */
export default function VisitorCounter({
  ns = "haruto-portfolio",
  keyName = "root",
  className = "",
}: {
  ns?: string;
  keyName?: string;
  className?: string;
}) {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function hit() {
      // Try both CountAPI domains for robustness.
      const urls = [
        `https://api.countapi.xyz/hit/${encodeURIComponent(ns)}/${encodeURIComponent(keyName)}`,
        `https://countapi.xyz/hit/${encodeURIComponent(ns)}/${encodeURIComponent(keyName)}`,
      ];

      for (const u of urls) {
        try {
          const res = await fetch(u, { cache: "no-store" });
          if (!res.ok) continue;
          const data = await res.json();
          if (!cancelled && typeof data.value === "number") {
            setValue(data.value);
            return;
          }
        } catch {
          // keep trying next URL
        }
      }
    }

    hit();
    return () => {
      cancelled = true;
    };
  }, [ns, keyName]);

  function ordinalSuffix(n: number) {
    const v = n % 100;
    if (v > 10 && v < 20) return "TH";
    const last = n % 10;
    if (last === 1) return "ST";
    if (last === 2) return "ND";
    if (last === 3) return "RD";
    return "TH";
  }

  return (
    <span
      aria-live="polite"
      className={[
        // Chip styling — subtle, airy vibe
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5",
        "bg-surface/60 border border-border/80",
        "text-[12px] font-mono tracking-[0.28em] text-foreground/70",
        "tabular-nums", // monospaced numerals if your Tailwind build supports it
        className,
      ].join(" ")}
      title={value ? `${value}${ordinalSuffix(value)} visitor` : "Visitor"}
    >
      {value ? (
        <>
          <span className="tabular-nums">{value}</span>
          <span>{ordinalSuffix(value)}</span>
          <span className="tracking-[0.32em]">VISITOR</span>
          <span className="tracking-normal">:)</span>
        </>
      ) : (
        <>
          <span className="opacity-60">VISITOR</span>
          <span className="tracking-normal">:)</span>
        </>
      )}
    </span>
  );
}
