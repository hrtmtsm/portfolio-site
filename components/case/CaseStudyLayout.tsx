// components/case/CaseStudyLayout.tsx
"use client";

import { useRouter } from "next/navigation";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

/** spacing knobs */
const GAP_BELOW_NAV = 14;     // rail/content gap under the nav at very top
const PINNED_TOP_GAP = 20;    // rail gap from viewport top when pinned
const BACK_ICON_OUTDENT = 18; // how far the arrow sits LEFT of the text start (px)

/** Exported so other files can share the type */
export type TocItem = { id: string; label: string };

/* ---------------- Icons ---------------- */
function ArrowLeft({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M12.5 4.5 7 10l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------- Small building blocks (exported) ------------- */

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-surface p-4 border border-border/70">
      <div className="font-hairline text-[11px] tracking-[0.16em] text-foreground/60 uppercase">
        {label}
      </div>
      <div className="mt-1 text-[20px] leading-none">{value}</div>
    </div>
  );
}

export function Figure({
  src,
  alt,
  caption,
  aspect = "auto",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "auto" | "16/9" | "4/3" | "1/1";
}) {
  return (
    <figure className="my-6 overflow-guard">
      <div
        className={`rounded-lg overflow-hidden bg-white shadow-[0_1px_2px_rgba(0,0,0,.06)] ${
          aspect !== "auto" ? "aspect-" + aspect.replace("/", "\\/") : ""
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
      {caption && (
        <figcaption className="mt-2 font-hairline text-[12px] tracking-[0.02em] text-foreground/60">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Overview block: left rich intro, right facts table, optional impact cards below. */
export function Overview({
  intro,
  facts,
  impacts,
}: {
  intro: ReactNode;
  facts: Array<{ label: string; value: ReactNode }>;
  impacts?: Array<{ icon?: string; title: string; body?: string }>;
}) {
  return (
    <div className="space-y-10">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-8 lg:gap-12">
        {/* left: narrative intro */}
        <div className="text-[16px] leading-8 min-w-0">{intro}</div>

        {/* right: key facts table */}
        <dl className="h-fit rounded-xl border border-border/70 bg-surface divide-y divide-border/60">
          {facts.map((f, i) => (
            <div key={i} className="grid grid-cols-[120px_1fr] gap-4 p-4">
              <dt className="font-hairline text-[12px] tracking-[0.18em] text-foreground/60 uppercase">
                {f.label}
              </dt>
              <dd className="text-[15px]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {impacts?.length ? (
        <div className="grid sm:grid-cols-2 gap-6">
          {impacts.map((c, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/70 bg-surface p-5"
            >
              <div className="flex items-center gap-2 text-[15px] font-medium">
                {c.icon && <span className="text-xl" aria-hidden>{c.icon}</span>}
                {c.title}
              </div>
              {c.body && (
                <p className="mt-2 text-[14px] text-foreground/70">{c.body}</p>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/* ---------------- Section (exported) ---------------- */

export function Section({
  id,
  heading,
  label,
  children,
  headingClassName,
}: {
  id: string;
  heading: string;
  label?: string;
  children?: ReactNode;
  headingClassName?: string;
}) {
  return (
    <section id={id} className="mt-28 pt-8 border-t border-border/70 scroll-mt-[120px]">
      {label && (
        <div className="mb-3">
          <span className="inline-block font-hairline text-[12px] tracking-[0.18em] text-accent">
            {label}
          </span>
        </div>
      )}

      <h2
        className={
          headingClassName ??
          "font-sans font-semibold text-[22px] sm:text-[26px] lg:text-[30px] leading-snug text-foreground"
        }
      >
        {heading}
      </h2>

      {children && (
        <div className="mt-4 space-y-5 text-[15px] leading-7 text-foreground/85">
          {children}
        </div>
      )}
    </section>
  );
}

/* ------------- Scroll-spy (exported) ------------- */
// Smooth, stable scroll-spy (rAF + midpoints). No intersection flicker.
// Smooth, stable scroll-spy (rAF + midpoints). No intersection flicker.
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const offset = 88; // header + breathing room

  // Stable key (still useful) — but we’ll also list `ids` in deps.
  const idsKey = useMemo(() => ids.join("|"), [ids]);

  useEffect(() => {
    if (!ids.length) return;

    let raf = 0;
    let tops: number[] = [];
    let orderedIds = [...ids]; // keep a local ordered copy
    const cleanupImgListeners: Array<() => void> = []; // const fixes prefer-const

    const buildTops = () => {
      const els = orderedIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];
      tops = els.map((el) =>
        Math.round(el.getBoundingClientRect().top + window.scrollY)
      );
      orderedIds = els.map((el) => el.id); // only found sections, in order
    };

    const pickIndex = (y: number) => {
      const n = tops.length;
      if (!n) return -1;
      if (n === 1) return 0;

      // midpoint boundaries
      let lo = 0,
        hi = n - 2;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        const m = (tops[mid] + tops[mid + 1]) / 2 - offset;
        if (y >= m) lo = mid + 1;
        else hi = mid - 1;
      }
      return Math.max(0, Math.min(n - 1, lo));
    };

    const measure = () => {
      const y = window.scrollY + offset;
      const idx = pickIndex(y);
      const next = idx >= 0 ? orderedIds[idx] ?? null : null;
      setActive((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    const onResize = () => {
      buildTops();
      measure();
    };

    buildTops();
    measure();

    // Recompute when images load (layout shifts)
    document.querySelectorAll("img").forEach((img) => {
      const handler = () => {
        buildTops();
        measure();
      };
      if (!img.complete) {
        img.addEventListener("load", handler, { once: true });
        cleanupImgListeners.push(() =>
          img.removeEventListener("load", handler)
        );
      }
    });

    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        buildTops();
        measure();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      mo.disconnect();
      cleanupImgListeners.forEach((fn) => fn());
      cancelAnimationFrame(raf);
    };
  }, [ids, idsKey]); // ✅ include ids so ESLint is happy

  return active;
}


/* ------------- Compact left-rail nav (exported) ------------- */

export function CaseSpyNav({
  toc,
  activeId,
}: {
  toc: TocItem[];
  activeId: string | null;
}) {
  return (
    <nav aria-label="On this page" className="mt-6 ml-[-18px]">
      <ul className="space-y-2 list-none m-0 p-0">
        {toc.map((t) => {
          const active = activeId === t.id;
          return (
            <li key={t.id}>
              <a
                href={`#${t.id}`}
                onClick={(e) => {
                  const href = e.currentTarget.getAttribute("href") || "";
                  if (!href.startsWith("#")) return;
                  e.preventDefault();

                  const el = document.getElementById(t.id);
                  if (!el) return;

                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  history.pushState({}, "", href);
                  window.scrollTo({ top, behavior: "smooth" });

                  // ⬇️ remove focus so it doesn't look “active” just because it’s focused
                  (e.currentTarget as HTMLAnchorElement).blur();
                }}
                aria-current={active ? "true" : undefined}
                className={`block font-sans text-[15px] tracking-[0.02em]
                  ${active ? "text-accent-ink" : "text-muted hover:text-foreground/70"}
                  focus:outline-none focus-visible:outline-none active:outline-none
                `}
                style={{ paddingLeft: 0, WebkitTapHighlightColor: "transparent" }}
              >
                {t.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/* ---------------- Main page layout (exported) ---------------- */

type CaseLayoutProps = {
  title: string;
  subtitle?: string;
  date?: string;
  hero?: ReactNode;
  stats?: Array<{ label: string; value: string }>;
  toc?: TocItem[];
  children?: ReactNode;  // optional
  backHref?: string;
};

export function CaseLayout({
  title,
  subtitle,
  date,
  hero,
  stats,
  toc: tocProp,
  children,
  backHref = "/",
}: CaseLayoutProps) {
  const router = useRouter();
  const tocItems = useMemo(() => tocProp ?? [], [tocProp]);

  // read live nav height so alignment always matches your header
  const [navHeight, setNavHeight] = useState<number>(56);
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".site-nav");
    if (!el) return;
    const update = () =>
      setNavHeight(Math.round(el.getBoundingClientRect().height));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const [pinned, setPinned] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const topSentinelRef = useRef<HTMLDivElement | null>(null);

  const railOffset = pinned ? PINNED_TOP_GAP : navHeight + GAP_BELOW_NAV;
  const contentTopPad = navHeight + GAP_BELOW_NAV;

  // pin/unpin + hide/show nav
  useEffect(() => {
    const sentinel = topSentinelRef.current;
    if (!sentinel) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const atTop = entry.isIntersecting && entry.intersectionRatio > 0;
        setPinned(!atTop);
        const html = document.documentElement;
        if (!atTop) html.setAttribute("data-hide-nav", "1");
        else html.removeAttribute("data-hide-nav");
      },
      { rootMargin: "-1px 0px 0px 0px", threshold: [0, 0.01] }
    );
    io.observe(sentinel);
    return () => {
      io.disconnect();
      document.documentElement.removeAttribute("data-hide-nav");
    };
  }, []);

  // scroll-spy aligned to the rail top (uses IntersectionObserver for header rail state)
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best?.target?.id) setActiveId(best.target.id);
      },
      { rootMargin: `-${railOffset + 8}px 0px -55% 0px`, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [railOffset]);

  const goHome = () => router.push(backHref || "/");

  return (
    <main className="container-edge px-5 sm:px-8 overflow-guard">
      {/* sits directly under the nav */}
      <div ref={topSentinelRef} aria-hidden="true" className="h-px w-px" />

      <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-8 lg:gap-12">
        {/* LEFT rail */}
        <aside className="hidden lg:block min-w-0">
          <div className="sticky" style={{ top: railOffset }}>
            {/* Back — Geist Sans */}
            <button
              type="button"
              onClick={goHome}
              className="relative inline-flex items-center font-sans text-[13px] tracking-[0.02em] text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Go back"
              style={{ paddingLeft: 0 }}
            >
              <span
                aria-hidden="true"
                className="absolute -translate-y-1/2"
                style={{ left: -BACK_ICON_OUTDENT, top: "50%" }}
              >
                <ArrowLeft className="h-4 w-4" />
              </span>
              BACK
            </button>

            {tocItems.length > 0 && (
              <nav aria-label="On this page" className="mt-6">
                <CaseSpyNav toc={tocItems} activeId={activeId} />
              </nav>
            )}
          </div>
        </aside>

        {/* RIGHT content */}
        <div style={{ paddingTop: contentTopPad }} className="min-w-0">
          <header className="max-w-[760px] xl:max-w-[820px] 2xl:max-w-[880px]">
            {date && (
              <p className="font-hairline text-[12px] tracking-[0.18em] text-foreground/55">
                {date}
              </p>
            )}
            {/* H1 in Geist Sans */}
            <h1 className="mt-2 font-sans text-[34px] leading-[1.15] sm:text-[40px] lg:text-[48px] font-medium">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-[15px] sm:text-[16px] text-foreground/70">
                {subtitle}
              </p>
            )}
            {hero && (
              <div className="mt-8 rounded-xl overflow-hidden bg-white shadow-[0_1px_2px_rgba(0,0,0,.06)]">
                {hero}
              </div>
            )}
            {stats?.length ? (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <Stat key={s.label} label={s.label} value={s.value} />
                ))}
              </div>
            ) : null}
          </header>

          {/* main article */}
          <article className="prose-case mt-10 lg:mt-12 max-w-[760px] xl:max-w-[820px] 2xl:max-w-[880px]">
            {children}
          </article>

          <div className="h-12" />
        </div>
      </div>

      {/* Mobile back — sticks just below nav */}
      <div className="lg:hidden sticky top-2 z-30 mt-2">
        <button
          type="button"
          onClick={goHome}
          className="inline-flex items-center gap-2 font-sans text-[13px] tracking-[0.02em] text-foreground/70 hover:text-foreground transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="h-4 w-4" />
          BACK
        </button>
      </div>
    </main>
  );
}
