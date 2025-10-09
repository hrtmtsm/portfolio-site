// app/page.tsx
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "RunBuddy",
    subtitle: "ACADEMIC • CONCEPT 2025",
    description:
      "Helping runners find their people by surfacing compatibility, because long-term motivation comes from connection.",
    href: "/projects/runbuddy",
    media: {
      type: "video",
      src: "/videos/openai-demo.mp4",
      poster: "/images/runbuddy-cover.png",
    },
  },
  {
    title: "ClassCollab",
    subtitle: "ACADEMIC • CONCEPT 2025",
    description:
      "Solving the problem of team mismatch in academic group projects through research-backed design, behavior-driven validation, and iterative prototyping.",
    href: "/projects/classcollab",
    media: { type: "image", src: "/images/classcollab-cover.png" },
  },
  {
    title: "Iowa Cubs Website Redesign",
    subtitle: "ACADEMIC • CONCEPT",
    description:
      "Enhanced the fan experience through heuristic evaluations and real-user testing to uncover and solve key usability issues.",
    href: "/projects/iowa",
    media: { type: "image", src: "/images/iowa-cover.png" },
  },
];

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-18">
      {/* HERO */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-[42rem] lg:max-w-[60%]">
       <h1 className="font-sans text-[30px] sm:text-[32px] lg:text-[34px] leading-[1.35] tracking-tight text-foreground">
  Haruto is a human-centered designer who brings clarity to complex
  systems through empathy and structure, with a background in
  Human-Computer Interaction from DePaul.
</h1>

          {/* CURRENT ROLE */}
          <p className="mt-8 text-[16px] sm:text-[17px] text-muted leading-snug">
            Currently a Product Design Intern at{" "}
            <a
              href="https://moneyforward.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-foreground opacity-75 hover:opacity-100 underline decoration-dotted underline-offset-[3px] decoration-[0.75px] transition-opacity"
            >
              MoneyForward
            </a>
            .
          </p>

          {/* PREVIOUS ROLE */}
          <p className="mt-2 text-[16px] sm:text-[17px] text-muted leading-snug">
            Previously UX Research & Design Intern at{" "}
            <a
              href="https://www.markteqdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-foreground opacity-75 hover:opacity-100 underline decoration-dotted underline-offset-[3px] decoration-[0.75px] transition-opacity"
            >
              Markteq Digital
            </a>
            .
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-24">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group block space-y-4"
          >
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
                <p className="font-hairline uppercase tracking-wider text-[12px]">
                  {project.subtitle}
                </p>
              </div>
              <p className="text-[14px] text-muted leading-relaxed">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
