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

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/" || pathname.startsWith("/projects")
      : pathname.startsWith(href);

  return (
    <header
      className="site-nav bg-transparent z-50 transition-transform"
      style={{
        position: "static",   // ⬅️ forces non-sticky even if CSS says sticky
        top: "auto",
        transform: "none",    // ⬅️ neutralize any hide-on-scroll transform
      }}
    >
      <div className="container-edge h-14 flex items-center justify-start">
        <nav
          aria-label="Primary"
          className="flex items-center gap-8 text-[13px] tracking-wide font-hairline"
        >
          {links.map((l) =>
            l.external ? (
                <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
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
                    ? "text-accent-ink font-medium"
                    : "text-muted hover:text-foreground transition-colors"
                }
              >
                {l.label}
              </Link>
              
            )
          )}
        </nav>
      </div>
    </header>
  );
}
