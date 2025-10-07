// lib/cases.ts
import type { CaseModule } from "@/types/case";

export const registry = {
  runbuddy: () => import("@/content/projects/runbuddy/case"),
  classcollab: () => import("@/content/projects/classcollab/case"),
  iowa: () => import("@/content/projects/iowa/case"),
} satisfies Record<string, () => Promise<CaseModule>>;

export type ProjectSlug = keyof typeof registry;

export const slugs = Object.keys(registry) as ProjectSlug[];
