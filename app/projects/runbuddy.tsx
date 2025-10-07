// app/projects/linkedin-tracking/page.tsx
// import { CaseLayout, Section, Figure } from "@/components/case/CaseStudyLayout";

// export default function Page() {
//   return (
//     <CaseLayout
//       title="Application tracking on LinkedIn"
//       subtitle="A lightweight, in-platform tracker to reduce context switching and help candidates stay organized."
//       date="PROJECT • SUMMER 2024"
//       hero={
//         <img src="/images/linkedin/hero.png" alt="LinkedIn tracking hero mock" />
//       }
//       stats={[
//         { label: "ROLE", value: "Product Design" },
//         { label: "TIMELINE", value: "10 weeks" },
//         { label: "TEAM", value: "1 PM, 1 Eng, me" },
//         { label: "RESULT", value: "Demo Day feature" },
//       ]}
//       toc={[
//         { id: "problem", label: "Problem" },
//         { id: "opportunity", label: "Opportunity" },
//         { id: "research", label: "Research" },
//         { id: "solution", label: "Solution" },
//         { id: "flows", label: "Key Flows" },
//         { id: "learnings", label: "What I learned" },
//       ]}
//     >
//       <div className="space-y-12">
//         <Section id="problem" heading="Job searching is draining, tedious, and time-consuming.">
//           <p>
//             Candidates juggle dozens of tabs and spreadsheets just to remember where they applied.
//             Every system is slightly different, which increases friction and drop-off.
//           </p>
//           <Figure
//             src="/images/linkedin/problem-slide.png"
//             alt="Problem framing slide"
//             caption="Fragmented tracking increases context switching and cognitive load."
//           />
//         </Section>

//         <Section id="opportunity" heading="In-platform tracking can meet users where they already are.">
//           <p>
//             Instead of pushing users to spreadsheets, we embed a simple tracker directly into
//             the LinkedIn application flow. The bar for usefulness: capture, review, and follow-up in under 10 seconds.
//           </p>
//           <ul className="list-disc pl-5">
//             <li>Zero-setup, inline with Apply flow</li>
//             <li>One source of truth for status + notes</li>
//             <li>Light reminders to re-engage</li>
//           </ul>
//         </Section>

//         <Section id="research" heading="There are many stages in the job-searching journey.">
//           <p>
//             I mapped the journey across Awareness → Apply → Follow-up → Offer, then validated with interviews (n=8)
//             and a quick survey (n=92). The key drop-off happens post-apply due to low recall and no prompts.
//           </p>
//           <Figure
//             src="/images/linkedin/journey.png"
//             alt="Journey map"
//             caption="Drop-off spikes after submit; nudges and visibility bring people back."
//           />
//         </Section>

//         <Section id="solution" heading="The solution started with a value proposition.">
//           <p>
//             <strong>“By introducing an in-flow tracker that remembers context, users can save time and return to the job-searching process ready to act.”</strong>
//           </p>
//           <Figure src="/images/linkedin/value-prop.png" alt="Value proposition" />
//           <p>
//             We shipped three surfaces: an inline save on Apply, a compact board on the profile,
//             and a detail view for follow-ups.
//           </p>
//           <div className="grid sm:grid-cols-2 gap-6">
//             <Figure src="/images/linkedin/inline.png" alt="Inline save" caption="Inline save on Apply" />
//             <Figure src="/images/linkedin/board.png" alt="Board view" caption="Compact board view" />
//           </div>
//         </Section>

//         <Section id="flows" heading="Key flows that matter">
//           <ol className="list-decimal pl-5">
//             <li>Capture: 1-click add after submitting an application</li>
//             <li>Review: quick glance at status + notes from profile</li>
//             <li>Follow-up: smart reminders 3/7/14 days after apply</li>
//           </ol>
//           <Figure src="/images/linkedin/flow.png" alt="Key flows" />
//         </Section>

//         <Section id="learnings" heading="What I learned">
//           <p>
//             Big impact often comes from the smallest seams: putting the tracker where motivation peaks
//             (right after apply) beat separate tools. Also, reminders must be respectful—users prefer
//             lightweight nudges over inbox floods.
//           </p>
//         </Section>
//       </div>
//     </CaseLayout>
//   );
// }
