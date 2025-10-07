// app/page.tsx (or wherever your Home component lives)
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

const workHistory = [
  { year: "2025", company: "Bloomberg", role: "Software Engineering Intern" },
  { year: "2025", company: "1Password", role: "Product Design Intern" },
  { year: "2024", company: "Royal Bank of Canada", role: "Software Engineering Intern" },
  { year: "2023", company: "Onova", role: "Product Design + Engineering Intern" },
];

const projects = [
  {
    title: "RunBuddy",
    subtitle: "OPENAI X HARDWARE • CONCEPT 2025",
    description:
      "Exploring how large language models can interact with physical computing and embedded interfaces.",
    href: "/projects/runbuddy",
    media: {
      type: "video",
      src: "/videos/openai-demo.mp4",
      poster: "/images/runbuddy-cover.png",
    },
  },
  {
    title: "ClassCollab",
    subtitle: "POKERGPT • SHIPPED 2023",
    description:
      "Teaching GTO and exploitative strategies through conversational coaching powered by AI.",
    href: "/projects/classcollab",
    media: { type: "image", src: "/images/classcollab-cover.png" },
  },
  {
    title: "Iowa Cubs Website Redesign",            // ← rename to match slug
    subtitle: "WEB • 2023",
    description:
      "A modernized site structure and component system for tickets, schedule, and promos.",
    href: "/projects/iowa",                         // ← slug exists in your registry
    media: { type: "image", src: "/images/iowa-cover.png" },
  },
];

export default function Home() {
  return (
    <div className="space-y-16 lg:space-y-20">
      {/* HERO */}
      <section className="relative pt-16 sm:pt-20 lg:pt-28 grid grid-cols-1 lg:grid-cols-[48%_52%] gap-10 lg:gap-12 items-start">
        <div className="flex flex-col justify-between min-h-[300px] lg:min-h-[360px]">
          <h1 className="font-[var(--font-display)] text-[46px] lg:text-[48px] leading-none tracking-tight text-foreground">
            I&apos;m Haruto, a product designer who{" "}
            <i className="italic font-[var(--font-display)] text-foreground/90">engineers.</i>
          </h1>
          <p className="mt-4 text-[15px] text-muted leading-relaxed">
            I design bilingual experiences bridging Japan and the U.S.
          </p>
        </div>

        <aside className="self-stretch grid grid-cols-[56px_1fr_1fr] gap-x-6 gap-y-[12px] content-start">
          {workHistory.map((item) => (
            <Fragment key={`${item.year}-${item.company}`}>
              <div className="text-muted text-[13px]">{item.year}</div>
              <div className="text-[15px] font-semibold text-foreground">{item.company}</div>
              <div className="text-[15px] text-muted">{item.role}</div>
            </Fragment>
          ))}
        </aside>
      </section>

      {/* PROJECT GRID */}
      <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-24">
        {projects.map((project) => (
          <Link key={project.title} href={project.href} className="group block space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden">
              {project.media.type === "video" ? (
                <video
                  src={project.media.src}
                  poster={project.media.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <Image
                  src={project.media.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              )}
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <p className="text-foreground font-medium">{project.title}</p>
                <p className="text-muted uppercase tracking-wider text-[12px]">
                  {project.subtitle}
                </p>
              </div>
              <p className="text-[14px] text-muted leading-relaxed">{project.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
