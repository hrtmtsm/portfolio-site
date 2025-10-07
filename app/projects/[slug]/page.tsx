// app/projects/[slug]/page.tsx
// import { notFound } from "next/navigation";
// import { cases } from "../_cases";
// import { CaseLayout } from "@/components/case/CaseStudyLayout";

// export default function CasePage({ params }: { params: { slug: string } }) {
//   const item = cases[params.slug];
//   if (!item) return notFound();

//   return (
//     <CaseLayout
//       title={item.title}
//       subtitle={item.subtitle}
//       date={item.date}
//       hero={item.hero}
//       stats={item.stats}
//       toc={item.toc}
//     >
//       {item.body}
//     </CaseLayout>
//   );
// }

// (optional) SSG
// export async function generateStaticParams() {
//   return Object.keys(cases).map((slug) => ({ slug }));
// }


// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { CaseLayout } from "@/components/case/CaseStudyLayout";
import { registry, slugs } from "@/lib/cases";

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const load = registry[params.slug];
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
