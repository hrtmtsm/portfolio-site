// content/projects/classcollab/case.tsx
import type { CaseDef } from "@/types/case";
import { Section, Figure, Overview } from "@/components/case/CaseStudyLayout";

const classcollab: CaseDef = {
  slug: "classcollab",
  title: "ClassCollab — Compatibility-Based Team Formation",
  subtitle: "ACADEMIC PROJECT • SPRING 2025",
  date: "PROJECT • 2025",
  hero: <img src="/images/classcollab-cover.png" alt="ClassCollab hero" />,
  // Note: we intentionally omit `stats` so the header cards don’t render.
  toc: [
    { id: "overview", label: "Overview" },
    { id: "business-problem", label: "Business Problem" },
    { id: "business-outcomes", label: "Business Outcomes" },
    { id: "solution", label: "Solution" },
    { id: "discover", label: "Discover" },
    { id: "define", label: "Define" },
    { id: "validation", label: "Validation Plan" },
    { id: "ideate", label: "Ideate" },
    { id: "prototyping", label: "Prototyping" },
    { id: "test", label: "Test" },
    { id: "results", label: "Results" },
    { id: "iterations", label: "Iterations" },
    { id: "reflection", label: "Reflection" },
  ],
  body: (
    <div className="space-y-12">
      {/* OVERVIEW (intro + facts, row-style facts on the right) */}
     {/* OVERVIEW (intro + right-side facts in ROW STYLE) */}
   {/* OVERVIEW — left narrative + right meta rows (no card) */}
<Section
  id="overview"
  label="PROJECT INTRO"
  heading="Forming compatible student teams for better outcomes"
>
  <div className="grid lg:grid-cols-2 gap-10">
    {/* Left: narrative */}
    <div>
      <p>
        <strong>Students often struggle with mismatched project teams</strong>, which leads to
        unclear goals, uneven workloads, and poor collaboration. This project tackled that by
        creating a <strong>smarter team formation process</strong> that matches students based on
        shared goals, working styles, and availability—while supporting stronger course outcomes
        for instructors and institutions.
      </p>
      <p className="mt-4">
        Using Lean UX, I ran secondary research, built rapid prototypes, and validated ideas with
        users over multiple iterations to maximize both <strong>user outcomes</strong> and{" "}
        <strong>business value</strong>.
      </p>
    </div>

    {/* Right: meta facts as rows with dividers */}
    <div className="lg:pl-6">
      <div className="border-t border-border/70 divide-y divide-border/70">
        <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-6 py-4">
          <div className="text-[11px] tracking-[0.16em] text-foreground/60 uppercase">Role</div>
          <div className="text-[15px] leading-7">UX Research, UX/UI Design</div>
        </div>
        <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-6 py-4">
          <div className="text-[11px] tracking-[0.16em] text-foreground/60 uppercase">Skills</div>
          <div className="text-[15px] leading-7">Secondary Research, Prototyping, Validation</div>
        </div>
        <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-6 py-4">
          <div className="text-[11px] tracking-[0.16em] text-foreground/60 uppercase">Context</div>
          <div className="text-[15px] leading-7">8 weeks • Solo</div>
        </div>
        <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-6 py-4">
          <div className="text-[11px] tracking-[0.16em] text-foreground/60 uppercase">Focus</div>
          <div className="text-[15px] leading-7">Team formation &amp; fit</div>
        </div>
      </div>
    </div>
  </div>
</Section>



      {/* BUSINESS PROBLEM */}
      <Section
        id="business-problem"
        label="BUSINESS PROBLEM"
        heading="Starting a team project can feel like a gamble"
      >
        <p>
          Teams are often assigned randomly or chosen by social ties. Instructors lack time and data to
          form balanced groups, and existing tools overlook <em>compatibility</em> in collaboration
          preferences and goals—producing friction, unclear expectations, and uneven work.
        </p>
      </Section>

      {/* BUSINESS OUTCOMES */}
      <Section
        id="business-outcomes"
        label="BUSINESS OUTCOMES"
        heading="Higher course satisfaction and improved academic outcomes"
      >
        <p>
          The goal is better collaboration and stronger project outcomes—raising course satisfaction,
          long-term program reputation, and retention. Success indicators include higher team
          satisfaction, balanced workload distribution, improved outcomes, and fewer team-change requests.
        </p>
      </Section>

      {/* SOLUTION */}
      <Section
        id="solution"
        label="SOLUTION"
        heading="A transparent process for compatibility-based team formation"
      >
        <p>
          The platform matches students by <strong>goals</strong>, <strong>skills</strong>,{" "}
          <strong>collaboration styles</strong>, and <strong>role preferences</strong>. It’s grounded in
          user needs and class context to improve fairness, clarity, and learning outcomes.
        </p>
        <div className="rounded-lg overflow-hidden bg-white shadow">
          <video
            src="/videos/classcollab-walkthrough-v2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>
      </Section>

      {/* DISCOVER */}
      <Section
        id="discover"
        label="DISCOVER"
        heading="Literature review: team formation overlooks compatibility and balance"
      >
        <p>
          Academic literature showed that compatibility—collaboration preferences, goals, and availability—drives
          satisfaction and outcomes. Early alignment on <em>mindset</em> (not just skills) informed the
          onboarding inputs.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <blockquote className="border-l-2 pl-4">
            Letting students <strong>freely choose teammates</strong> can cause <strong>poor matches</strong>. Balanced
            skills reduce friction and improve collaboration. <span className="text-muted">— Lopez et al., 2021</span>
          </blockquote>
          <blockquote className="border-l-2 pl-4">
            Current formation relies too much on chance; using goals, strengths, and availability can automate better
            matches. <span className="text-muted">— Lopez et al., 2021</span>
          </blockquote>
          <blockquote className="border-l-2 pl-4">
            Group strategies should consider <strong>skills, goals, and personality</strong>; availability and style
            influence cohesion. <span className="text-muted">— Odo et al., 2019</span>
          </blockquote>
        </div>
      </Section>

      {/* DEFINE */}
      <Section id="define" label="DEFINE" heading="Proto-personas & opportunity framing">
        <p>
          I created two proto-personas—<strong>Alex</strong> (CS undergrad) and <strong>Rachel</strong> (CogSci grad).
          Both experienced mismatched teams, unclear expectations, and uneven workloads. Alex wants strong portfolio
          projects; Rachel seeks meaningful research partnerships.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <Figure src="/images/classcollab-personas-rachel.png" alt="Persona: Rachel" />
          <Figure src="/images/classcollab-personas-alex.png" alt="Persona: Alex" />
        </div>

        <h4 className="font-semibold mt-8">Business Opportunity Statement</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-foreground/85">
          <div className="rounded border border-border p-4">
            <div className="text-[12px] uppercase tracking-wider text-foreground/60 mb-1">Current State</div>
            The status quo relies on instructor assignments or self-selection, rarely considering goals, styles,
            availability, or work preferences.
          </div>
          <div className="rounded border border-border p-4">
            <div className="text-[12px] uppercase tracking-wider text-foreground/60 mb-1">Gap</div>
            Products like CATME don’t provide a balanced, transparent process matching interpersonal fit and project goals.
          </div>
          <div className="rounded border border-border p-4">
            <div className="text-[12px] uppercase tracking-wider text-foreground/60 mb-1">Solution</div>
            Help students form better-matched teams with fair collaboration, clear roles, and stronger outcomes.
          </div>
          <div className="rounded border border-border p-4">
            <div className="text-[12px] uppercase tracking-wider text-foreground/60 mb-1">Focus</div>
            Higher-ed students in project-based courses.
          </div>
          <div className="rounded border border-border p-4">
            <div className="text-[12px] uppercase tracking-wider text-foreground/60 mb-1">Success</div>
            Better-matched teams, smoother teamwork, stronger results.
          </div>
        </div>

        <h4 className="font-semibold mt-8">User Outcomes & Benefits</h4>
        <ul className="list-disc pl-5">
          <li><strong>Align goals & interests</strong> to reduce conflict.</li>
          <li><strong>Combine strengths</strong> so everyone can contribute.</li>
          <li><strong>Match projects</strong> to personal/professional interests.</li>
          <li><strong>Set expectations</strong> upfront for clarity and fairness.</li>
          <li><strong>Save time & reduce stress</strong> by avoiding reshuffles.</li>
        </ul>
      </Section>

      {/* VALIDATION PLAN */}
      <Section
        id="validation"
        label="VALIDATION PLAN"
        heading="Pirate Metrics → Outcome-to-Impact"
      >
        <p>
          I first used <strong>Pirate Metrics</strong> to validate the MVP necessity (focusing on acquisition), then
          layered in <strong>Outcome-to-Impact Mapping</strong> after observing retention/usage to connect student
          outcomes to institutional value.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-[800px] w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-4">Stage</th>
                <th className="py-2 pr-4">What I’m Measuring</th>
                <th className="py-2 pr-4">What I’m Trying to Learn</th>
                <th className="py-2 pr-4">How I Might Measure</th>
                <th className="py-2">Success Criteria</th>
              </tr>
            </thead>
            <tbody className="text-foreground/85">
              <tr className="border-b">
                <td className="py-2 pr-4">🧲 Acquisition</td>
                <td className="py-2 pr-4">Interest & willingness to try</td>
                <td className="py-2 pr-4">Do students see value?</td>
                <td className="py-2 pr-4">Landing page with CTA</td>
                <td className="py-2">≥ 30% click CTA</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">✅ Activation</td>
                <td className="py-2 pr-4">Experienced value</td>
                <td className="py-2 pr-4">Are teams satisfying?</td>
                <td className="py-2 pr-4">Post-match survey</td>
                <td className="py-2">≥ 70% satisfied at week 1</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">🔒 Retention</td>
                <td className="py-2 pr-4">Stick with team & use system</td>
                <td className="py-2 pr-4">Is engagement sustained?</td>
                <td className="py-2 pr-4">Peer-review checkpoints</td>
                <td className="py-2">≥ 80% teams unchanged</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">💰 Revenue</td>
                <td className="py-2 pr-4">Higher course evaluations</td>
                <td className="py-2 pr-4">Do outcomes improve?</td>
                <td className="py-2 pr-4">Compare to past cohorts</td>
                <td className="py-2">Avg. score +10%</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">🔁 Referral</td>
                <td className="py-2 pr-4">Willingness to reuse</td>
                <td className="py-2 pr-4">Do students want it again?</td>
                <td className="py-2 pr-4">NPS / end-of-course survey</td>
                <td className="py-2">≥ 60% would reuse</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* IDEATE */}
      <Section id="ideate" label="IDEATE" heading="How might we help students find compatible teammates?">
        <p>
          I ran a design studio exercise (6-up) to quickly explore options, then mapped features to user and
          business outcomes to prioritize.
        </p>
        <Figure
          src="/images/classcollab-design-studio-exercise.png"
          alt="Design studio exercise"
          caption="Rapid exploration to widen the solution space."
        />

        <h4 className="font-semibold mt-6">Hypothesis Mapping</h4>
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-4">Business outcome</th>
                <th className="py-2 pr-4">Persona</th>
                <th className="py-2 pr-4">User outcome</th>
                <th className="py-2">Feature</th>
              </tr>
            </thead>
            <tbody className="text-foreground/85">
              <tr className="border-b">
                <td className="py-2 pr-4">Higher course evals & performance</td>
                <td className="py-2 pr-4">Alex & Rachel</td>
                <td className="py-2 pr-4">Join a group with shared goals</td>
                <td className="py-2">Onboarding survey + past projects</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">Improved institutional outcomes</td>
                <td className="py-2 pr-4">Alex & Rachel</td>
                <td className="py-2 pr-4">Enjoy group experience & learning</td>
                <td className="py-2">Prompt-based grouping</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">Higher placement rates</td>
                <td className="py-2 pr-4">Alex & Rachel</td>
                <td className="py-2 pr-4">Work aligned to strengths</td>
                <td className="py-2">Interest-based channels</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">Higher retention & experience</td>
                <td className="py-2 pr-4">Alex & Rachel</td>
                <td className="py-2 pr-4">Clear expectations up front</td>
                <td className="py-2">Course-embedded analysis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Figure
          src="/images/classcollab-hypothesis-prioritization.png"
          alt="Hypothesis prioritization canvas"
          caption="Prioritizing for value vs. risk to pick the MVP."
        />

        <h4 className="font-semibold mt-6">Hypothesis risks & criteria</h4>
        <div className="overflow-x-auto">
          <table className="min-w-[880px] w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-4">#</th>
                <th className="py-2 pr-4">Hypothesis</th>
                <th className="py-2 pr-4">Value</th>
                <th className="py-2 pr-4">Risk</th>
                <th className="py-2 pr-4">Rationale</th>
                <th className="py-2 pr-4">Risky assumption</th>
                <th className="py-2">Invalidated if…</th>
              </tr>
            </thead>
            <tbody className="text-foreground/85">
              <tr className="border-b">
                <td className="py-2 pr-4">1</td>
                <td className="py-2 pr-4">
                  Higher team satisfaction via onboarding + past project compatibility
                </td>
                <td className="py-2 pr-4">High</td>
                <td className="py-2 pr-4">Low</td>
                <td className="py-2 pr-4">Uses existing data sources to match effectively</td>
                <td className="py-2 pr-4">Inputs predict satisfaction & experience</td>
                <td className="py-2">Students rush/skip inputs; data doesn’t align to satisfaction</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">2</td>
                <td className="py-2 pr-4">Stronger performance via prompt-based grouping</td>
                <td className="py-2 pr-4">High</td>
                <td className="py-2 pr-4">High</td>
                <td className="py-2 pr-4">Needs evidence of academic lift</td>
                <td className="py-2 pr-4">Prompts capture team skills/styles</td>
                <td className="py-2">No measurable difference vs. random assignment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold mt-6">Prioritized hypothesis</h4>
        <p className="text-foreground/85">
          We believe we can achieve <strong>higher course evaluations</strong> and{" "}
          <strong>stronger program performance</strong> through well-formed teams if students join groups with{" "}
          <strong>shared goals</strong> and <strong>interests</strong>, supported by compatibility data from{" "}
          <strong>past projects</strong> and an <strong>onboarding survey</strong>.
        </p>

        <h4 className="font-semibold mt-6">Risky assumptions</h4>
        <ul className="list-disc pl-5">
          <li>Students care about being matched with compatible teammates.</li>
          <li>Students will complete onboarding.</li>
          <li>Compatibility (goals, projects, skills) drives satisfaction.</li>
          <li>Past performance predicts future team fit.</li>
          <li>Students trust the process.</li>
        </ul>
      </Section>

      {/* PROTOTYPING */}
      <Section id="prototyping" label="PROTOTYPING" heading="MVP development & walkthrough">
        <p>
          The landing page validated interest but didn’t communicate <em>how</em> it works. I built a clickable
          prototype to demonstrate onboarding and matching, and to validate the assumption that students would
          complete the flow.
        </p>

        <div className="rounded-lg overflow-hidden bg-white shadow my-4">
          <video
            src="/videos/classcollab-prototyping-walkthrough.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>

        <h4 className="font-semibold">Design rationale</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Onboarding content grounded in insights:</strong> questions about goals, collaboration style,
            and roles reflect literature + survey feedback.
          </li>
          <li>
            <strong>Clearer concept communication:</strong> participants needed more context—prototype made value tangible.
          </li>
          <li>
            <strong>No prior tool familiarity required:</strong> flow is simple and self-explanatory.
          </li>
        </ol>
      </Section>

      {/* TEST */}
      <Section id="test" label="TEST" heading="Unmoderated online testing">
        <h4 className="font-semibold">Participants</h4>
        <p>Seven graduate students with recent team-based coursework (CS/Product Design).</p>

        <h4 className="font-semibold mt-4">Objectives</h4>
        <p>
          Move beyond concept interest to assess whether users <strong>understand and engage</strong> with the value,
          flow, and functionality: complete onboarding, understand matching, and feel confident joining a group.
        </p>

        <h4 className="font-semibold mt-4">Risky assumption under test</h4>
        <p>Students are willing and able to complete onboarding.</p>

        <h4 className="font-semibold mt-4">Research questions</h4>
        <ul className="list-disc pl-5">
          <li>Do users understand the purpose/value of onboarding?</li>
          <li>Is joining a group clear and satisfying?</li>
          <li>Does the team overview reduce uncertainty?</li>
        </ul>

        <h4 className="font-semibold mt-4">Tasks</h4>
        <ol className="list-decimal pl-5">
          <li>Complete onboarding (goals, collaboration style, roles, availability).</li>
          <li>Choose a recommended group.</li>
          <li>Explore the team overview and reflect on readiness.</li>
        </ol>
      </Section>

      {/* RESULTS */}
      <Section id="results" label="RESULTS" heading="Results & next steps">
        <div className="rounded-lg overflow-hidden bg-white shadow">
          <video
            src="/videos/classcollab-lp.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-center my-6">
          <div>
            <div className="text-3xl font-semibold">13</div>
            <div className="text-muted">unique visitors</div>
          </div>
          <div>
            <div className="text-3xl font-semibold">8</div>
            <div className="text-muted">unique clicks</div>
          </div>
          <div>
            <div className="text-3xl font-semibold">60%</div>
            <div className="text-muted">CTR</div>
          </div>
        </div>

        <h4 className="font-semibold">Key takeaways</h4>
        <ol className="list-decimal pl-5 space-y-4">
          <li>
            <strong>All participants completed onboarding.</strong> SUS averaged 82.5 → flow is intuitive and
            supports the assumption that students will complete it.
          </li>
          <li>
            <strong>Students want insight into teammate working style & communication.</strong> Added scenario-based
            questions (SJT-inspired) to capture behavior/ethic without lengthening the form.
          </li>
          <li>
            <strong>Students want more context before joining.</strong> Added a team preview (goals, roles, availability)
            with privacy-safe details to support confident selection.
          </li>
        </ol>
      </Section>

      {/* ITERATIONS */}
      <Section id="iterations" label="ITERATIONS" heading="Two major iterations">
        <h4 className="font-semibold">Scenario-based questions → richer insights, fewer steps</h4>
        <p>
          Replaced two direct questions with one scenario prompt to capture work ethic, communication, and personality—
          informed by SJT research—to keep the flow lightweight.
        </p>
        <Figure src="/images/classcollab-iterations-01.png" alt="Iteration: scenario-based questions" />

        <h4 className="font-semibold mt-6">Show member details earlier → more confident selection</h4>
        <p>
          Surfacing teammate info (goals, roles, availability) prior to joining improved confidence and reduced
          uncertainty.
        </p>
        <Figure src="/images/classcollab-iterations-02.png" alt="Iteration: early member details" />
      </Section>

      {/* REFLECTION */}
      <Section id="reflection" label="REFLECTION" heading="Reflection & what I’d do next">
        <h4 className="font-semibold">Quick-and-dirty, then iterate</h4>
        <p>
          Small, testable steps (LP → prototype → unmoderated tests) let me validate assumptions early and shape the
          solution to what students actually need.
        </p>

        <h4 className="font-semibold mt-4">Business POV</h4>
        <p>
          I framed decisions to maximize both user value and institutional outcomes—so the work ties to satisfaction,
          retention, and performance.
        </p>

        <h4 className="font-semibold mt-4">Future work</h4>
        <p>
          Run another usability round on the changes, then validate the assumption that compatibility (goals, past
          projects, skills) <em>increases</em> satisfaction over time.
        </p>
      </Section>
    </div>
  ),
};

export default classcollab;
