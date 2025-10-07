// lib/cases.ts
export const registry: Record<string, () => Promise<{ default: any }>> = {
  runbuddy: () => import("@/content/projects/runbuddy/case"),
  classcollab: () => import("@/content/projects/classcollab/case"),
  iowa: () => import("@/content/projects/iowa/case"),
};

// Used by generateStaticParams
export const slugs = Object.keys(registry);
