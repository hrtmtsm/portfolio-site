// app/projects/_cases.tsx
// import { ReactNode } from "react";
// import { CaseLayout, Section, Figure } from "@/components/case/CaseStudyLayout";

// export type CaseDef = {
//   slug: string;
//   title: string;
//   subtitle?: string;
//   date?: string;
//   hero?: ReactNode;
//   stats?: Array<{ label: string; value: string }>;
//   toc?: Array<{ id: string; label: string }>;
//   body: ReactNode; // JSX for sections
// };

// export const cases: Record<string, CaseDef> = {
//   "runbuddy": {
//     slug: "runbuddy",
//     title: "RunBuddy",
//     subtitle: "OPENAI × HARDWARE • CONCEPT 2025",
//     date: "PROJECT • 2025",
//     hero: <img src="/images/runbuddy-cover.png" alt="RunBuddy hero" />,
//     stats: [
//       { label: "ROLE", value: "Product Design + Eng" },
//       { label: "TIMELINE", value: "4 weeks" },
//       { label: "SCOPE", value: "Prototype" },
//       { label: "STACK", value: "LLM, ESP32" },
//     ],
//     toc: [
//       { id: "overview", label: "Overview" },
//       { id: "research", label: "Research" },
//       { id: "solution", label: "Solution" },
//       { id: "learnings", label: "Learnings" },
//     ],
//     body: (
//       <div className="space-y-12">
//         <Section id="overview" heading="Exploring LLMs with physical computing.">
//           <p>
//             Hypothesis: on-device prompts tied to simple sensors/actuators can unlock
//             delightful micro-interactions for runners without screens.
//           </p>
//           <Figure src="/images/runbuddy-cover.png" alt="RunBuddy cover" caption="Early proof of concept." />
//         </Section>

//         <Section id="research" heading="Signals we heard from runners">
//           <ul className="list-disc pl-5">
//             <li>Minimal screens while running; audio or haptic preferred</li>
//             <li>Quick capture of thoughts or splits without breaking flow</li>
//             <li>‘Coach’ tone matters more than precision</li>
//           </ul>
//         </Section>

//         <Section id="solution" heading="A wearable that talks just enough">
//           <p>
//             Tap to log splits, long-press to dictate notes; LLM summarizes post-run and
//             suggests next workout.
//           </p>
//           <Figure src="/images/linkedin/flow.png" alt="Flow" />
//         </Section>

//         <Section id="learnings" heading="What I learned">
//           <p>Voice latency and tone tuning beat raw accuracy for perceived usefulness.</p>
//         </Section>
//       </div>
//     ),
//   },

//   "classcollab": {
//     slug: "classcollab",
//     title: "ClassCollab",
//     subtitle: "POKERGPT • SHIPPED 2023",
//     date: "PRODUCT • 2023",
//     hero: <img src="/images/classcollab-cover.png" alt="ClassCollab hero" />,
//     stats: [
//       { label: "ROLE", value: "Product Design" },
//       { label: "RESULT", value: "Shipped" },
//       { label: "TEAM", value: "2 Eng, 1 PM" },
//       { label: "IMPACT", value: "↑ retention" },
//     ],
//     toc: [
//       { id: "problem", label: "Problem" },
//       { id: "approach", label: "Approach" },
//       { id: "solution", label: "Solution" },
//       { id: "impact", label: "Impact" },
//     ],
//     body: (
//       <div className="space-y-12">
//         <Section id="problem" heading="Students struggle to bridge theory and practice.">
//           <p>GTO concepts are hard to internalize without quick feedback loops.</p>
//         </Section>
//         <Section id="approach" heading="Conversational coaching">
//           <p>We used LLM prompts to turn hands into teachable moments.</p>
//         </Section>
//         <Section id="solution" heading="Inline coach + review board" />
//         <Section id="impact" heading="What changed" />
//       </div>
//     ),
//   },

//   "1password-passkeys": {
//     slug: "1password-passkeys",
//     title: "1Password for macOS — Passkeys",
//     subtitle: "1PASSWORD • SHIPPED 2025",
//     date: "PRODUCT • 2025",
//     hero: <img src="/images/iowa-cover.png" alt="1Password passkeys hero" />,
//     stats: [
//       { label: "ROLE", value: "Product Design" },
//       { label: "SCOPE", value: "macOS feature" },
//       { label: "FOCUS", value: "Auth flows" },
//       { label: "RESULT", value: "Shipped" },
//     ],
//     toc: [
//       { id: "context", label: "Context" },
//       { id: "flows", label: "Flows" },
//       { id: "edge", label: "Edge cases" },
//       { id: "results", label: "Results" },
//     ],
//     body: (
//       <div className="space-y-12">
//         <Section id="context" heading="Designing for a passwordless future" />
//         <Section id="flows" heading="Key flows" />
//         <Section id="edge" heading="Edge cases" />
//         <Section id="results" heading="Outcomes" />
//       </div>
//     ),
//   },
// };
