// lib/cases.ts
import type { CaseDef } from "@/types/case";

export type ProjectSlug = "runbuddy" | "classcollab" | "iowa";
export type Loader = () => Promise<{ default: CaseDef }>;

export const registry: Record<ProjectSlug, Loader> = {
  runbuddy: () => import("@/content/projects/runbuddy/case"),
  classcollab: () => import("@/content/projects/classcollab/case"),
  iowa: () => import("@/content/projects/iowa/case"),
};

export const slugs: ProjectSlug[] = Object.keys(registry) as ProjectSlug[];
