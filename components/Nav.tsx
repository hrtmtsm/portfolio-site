// components/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "WORK" },
    { href: "/fun", label: "FUN" },
    { href: "/about", label: "ABOUT" },
    { href: "/Haruto_Matsushima_Resume.pdf", label: "RESUME", external: true },
  ];

  // Only mark WORK active on the home page ("/")
  // If you want WORK active on project pages too, change to:
  // const isActive = (href: string) =>
  //   href === "/" ? pathname === "/" || pathname.startsWith("/projects") : pathname.startsWith(href);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-nav sticky top-0 z-50 bg-transparent transition-transform">
      <div className="container-edge h-14 flex items-center justify-between">
        {/* Left: Name + Tagline */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="tracking-[0.22em] text-[11px] font-semibold text-foreground/80"
          >
            HARUTO
          </Link>
          <span className="hidden sm:inline text-[11px] tracking-[0.18em] text-foreground/50">
            PRODUCT DESIGNER + ENGINEER
          </span>

          {/* Primary nav */}
          <nav
            aria-label="Primary"
            className="flex items-center gap-7 text-xs tracking-wide ml-8"
          >
            {links.map((l) =>
              l.external ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={
                    isActive(l.href)
                      ? "text-accent font-medium"
                      : "text-foreground/60 hover:text-foreground transition-colors"
                  }
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
