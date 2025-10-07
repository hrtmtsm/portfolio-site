// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { CaseLayout } from "@/components/case/CaseStudyLayout";
import { registry, slugs, type ProjectSlug } from "@/lib/cases";

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

// NOTE: params is a Promise in Next 15 in some cases.
type Props = { params: Promise<{ slug: ProjectSlug }> };

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;            // ← await it

  const load = registry[slug];
  if (!load) return notFound();

  const mod = await load();
  const item = mod.default;

  return (
    <CaseLayout
      title={item.title}
      subtitle={item.subtitle}
      date={item.date}
      hero={item.hero}
      stats={item.stats}
      toc={item.toc}
    >
      {item.body}
    </CaseLayout>
  );
}
