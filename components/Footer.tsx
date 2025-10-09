// components/Footer.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Heart } from "@/components/Heart";

const links = [
  { href: 'https://www.linkedin.com/', label: 'LINKEDIN' },
  { href: '/Haruto_Matsushima_Resume.pdf', label: 'RESUME' },
  { href: 'mailto:you@email.com', label: 'EMAIL' },
];

function ordinal(n: number) {
  const s = ['th', 'st', 'nd', 'rd'], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default function Footer() {
  const [visit, setVisit] = useState<number | null>(null);

  useEffect(() => {
    try {
      const key = 'haruto:visitCount';
      const next = (parseInt(localStorage.getItem(key) || '0', 10) || 0) + 1;
      localStorage.setItem(key, String(next));
      setVisit(next);
    } catch {/* no-op */}
  }, []);

  return (
    <footer className="border-t border-border/80 bg-transparent isolate">
      {/* isolate => new stacking context (prevents backdrop/mix-blend bleed) */}
      <div className="relative container-edge py-10 sm:py-12">
        <div className="grid items-end gap-6 sm:grid-cols-[1fr_260px]">
          {/* Left — thanks */}
          <p className="justify-self-start text-[12px] tracking-[0.18em] text-foreground/70 select-none">
            THANKS&nbsp;FOR&nbsp;VISITING!
          </p>

          {/* Right — links + credit */}
          <div className="min-h-[84px] flex flex-col items-end">
            <nav
              className={[
                // kill any rendering artifacts
                "flex flex-col items-end gap-1 text-[12px] tracking-[0.18em]",
                "bg-transparent shadow-none mix-blend-normal backdrop-blur-0",
                "transform-gpu [will-change:transform] antialiased",
                "[filter:none] [text-shadow:none]"
              ].join(" ")}
            >
              {links.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block px-0 py-0 text-foreground/60 hover:text-foreground transition-colors
                             bg-transparent shadow-none outline-none focus-visible:ring-1 focus-visible:ring-border/60"
                >
                  {l.label} <span className="opacity-50">[{i + 1}]</span>
                </Link>
              ))}
            </nav>

            <p className="mt-6 sm:mt-8 text-[12px] tracking-[0.22em] text-muted whitespace-nowrap
                          bg-transparent [filter:none]">
              DESIGNED AND CODED BY <span className="text-foreground">HARUTO</span>
              <span className="inline-block align-[-0.12em] ml-2">
                <Heart className="h-[0.9em] w-[0.9em] text-accent" />
              </span>
            </p>
          </div>
        </div>

        {/* Visitor counter */}
        <p className="absolute left-1/2 -translate-x-1/2 bottom-10 sm:bottom-12 text-[12px] tracking-[0.18em] text-foreground/70 select-none">
          {visit ? `${ordinal(visit)} VISITOR :)` : 'VISITOR :)'}
        </p>
      </div>
    </footer>
  );
}
