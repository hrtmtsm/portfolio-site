// content/projects/iowa/case.tsx
import type { CaseDef } from "@/types/case";
import { Section, Figure } from "@/components/case/CaseStudyLayout";

const iowa: CaseDef = {
  slug: "iowa",
  title: "Iowa Cubs Website — Expert Reviews & Usability Testing",
  subtitle: "USABILITY • SUMMER 2024",
  date: "PROJECT • 2024",
  hero: <img src="/images/iowa-cover.png" alt="Iowa Cubs website hero" />,
  // NOTE: no `stats` here on purpose (we moved those details into the Overview rows)
  toc: [
    { id: "overview", label: "Overview" },
    { id: "process", label: "Process" },
    { id: "discover", label: "Discover" },
    { id: "walkthrough", label: "Walkthrough" },
    { id: "test", label: "Test" },
    { id: "takeaways", label: "Takeaways" },
    { id: "solutions", label: "Solutions" },
    { id: "reflection", label: "Reflection" },
  ],
  body: (
    <div className="space-y-12">
      {/* OVERVIEW — left narrative + right meta rows (no card) */}
      <Section
        id="overview"
        label="PROJECT INTRO"
        heading="Measured usability via expert reviews & user testing"
      >
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: narrative */}
          <div>
            <p className="mt-1">
              I evaluated and improved the usability of the Iowa Cubs website, where users were{" "}
              <strong>struggling to complete core tasks due to unclear labels, hidden steps, and weak feedback.</strong>{" "}
              We ran expert reviews (heuristics) then usability testing to validate findings and uncover deeper insights.
              The result was actionable design recommendations that improved navigation clarity and overall UX.
            </p>
            <p className="mt-4">
              I <span className="underline-subtle">contributed by</span> defining data to collect during testing and
              redesigning key interaction flows based on results.
            </p>
          </div>

          {/* Right: meta facts as rows with dividers */}
          <div className="lg:pl-6">
            <div className="border-t border-border/70 divide-y divide-border/70">
              <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-6 py-4">
                <div className="text-[11px] tracking-[0.16em] text-foreground/60 uppercase">Role</div>
                <div className="text-[15px] leading-7">UX Research, UX Design</div>
              </div>
              <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-6 py-4">
                <div className="text-[11px] tracking-[0.16em] text-foreground/60 uppercase">Skills</div>
                <div className="text-[15px] leading-7">Heuristics, Cog. Walkthrough, Testing, Wireframes</div>
              </div>
              <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-6 py-4">
                <div className="text-[11px] tracking-[0.16em] text-foreground/60 uppercase">Context</div>
                <div className="text-[15px] leading-7">8 weeks • Academic</div>
              </div>
              <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-6 py-4">
                <div className="text-[11px] tracking-[0.16em] text-foreground/60 uppercase">Team</div>
                <div className="text-[15px] leading-7">Ashley Delarm, Karly Greenfield, Clarissa Hyun</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        id="process"
        label="PROCESS"
        heading="Design process"
      >
        <Figure
          src="/images/iowa-process.png"
          alt="Design process diagram"
          caption="Heuristics → Walkthrough → Testing → Recommendations"
        />
      </Section>

      {/* DISCOVER — HEURISTICS */}
      <Section
        id="discover"
        label="HEURISTICS"
        heading="Heuristic evaluation: uncovering issues"
      >
        <p>
          We used Nielsen Norman Group’s Ten Usability Heuristics and a 0–4 severity scale.{" "}
          <strong>46% of issues (23) were severity 3 — Major problems — and 18% (9) were severity 4 — Catastrophes.</strong>
        </p>
        <ul className="list-disc pl-5">
          <li><strong>0</strong> — Not a usability problem</li>
          <li><strong>1</strong> — Cosmetic problem only</li>
          <li><strong>2</strong> — Minor usability problem</li>
          <li><strong>3</strong> — Major usability problem (high priority)</li>
          <li><strong>4</strong> — Usability catastrophe (must fix)</li>
        </ul>

        <h4 className="mt-6 font-semibold">Most violated heuristics</h4>
        <p>
          <strong>Visibility of System Status, Aesthetic & Minimalist Design, and Error Prevention</strong>{" "}
          accounted for 46% of all issues, suggesting visual clutter, weak wayfinding, and preventable errors.
        </p>
        <Figure
          src="/images/iowa-heuristic-grouping.png"
          alt="Heuristic evaluation groupings"
          caption="Top violated heuristics across the site."
        />
      </Section>

      {/* COGNITIVE WALKTHROUGH */}
      <Section
        id="walkthrough"
        label="COGNITIVE WALKTHROUGH"
        heading="Learnability of core tasks"
      >
        <p>
          We inspected three primary tasks (tickets, merchandise, player stats) using four questions:
        </p>
        <ul className="list-disc pl-5">
          <li><strong>User intent:</strong> Will users want this action?</li>
          <li><strong>Control visibility:</strong> Will they see the right control?</li>
          <li><strong>Understandability:</strong> Will they recognize its effect?</li>
          <li><strong>Feedback:</strong> Do they understand system feedback?</li>
        </ul>

        <div className="space-y-6 mt-4">
          <div>
            <h5 className="font-semibold">Task 1 — Buy a game ticket</h5>
            <p><strong>Label ambiguity:</strong> “Individual Tickets” doesn’t clearly indicate where to purchase.</p>
            <Figure src="/images/cw-task-1.png" alt="Ticket label issue" />
          </div>

          <div>
            <h5 className="font-semibold">Task 2 — Purchase a men’s jersey</h5>
            <p><strong>Obscured step:</strong> “Shop” is hidden under an overflow menu, hard to discover.</p>
            <Figure src="/images/iowa-cw-task-2.png" alt="Hidden Shop navigation" />
          </div>

          <div>
            <h5 className="font-semibold">Task 3 — View a player’s stats</h5>
            <p><strong>No visual affordance:</strong> Player names don’t appear clickable until hover.</p>
            <Figure src="/images/iowa-cw-task-3.png" alt="Player stats affordance issue" />
          </div>
        </div>
      </Section>

      {/* USABILITY TESTING */}
      <Section
        id="test"
        label="USABILITY TESTING"
        heading="Methods & participants"
      >
        <p>
          We ran moderated sessions (Meet) with screener, pre-/post-task surveys, and a final questionnaire
          to observe real behavior and decision-making.
        </p>

        <h4 className="font-semibold mt-4">Participants</h4>
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-4 text-left">#</th>
                <th className="py-2 pr-4 text-left">Age</th>
                <th className="py-2 pr-4 text-left">Occupation</th>
                <th className="py-2 pr-4 text-left">Follows Sports?</th>
                <th className="py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="text-foreground/85">
              <tr className="border-b"><td className="py-2 pr-4">1</td><td className="py-2 pr-4">20</td><td className="py-2 pr-4">Graduate Student</td><td className="py-2 pr-4">Yes</td><td className="py-2">8/1/2024</td></tr>
              <tr className="border-b"><td className="py-2 pr-4">2</td><td className="py-2 pr-4">25</td><td className="py-2 pr-4">Graduate Student</td><td className="py-2 pr-4">Yes</td><td className="py-2">8/1/2024</td></tr>
              <tr className="border-b"><td className="py-2 pr-4">3</td><td className="py-2 pr-4">58</td><td className="py-2 pr-4">Software Engineer</td><td className="py-2 pr-4">Yes</td><td className="py-2">8/1/2024</td></tr>
              <tr className="border-b"><td className="py-2 pr-4">4</td><td className="py-2 pr-4">25</td><td className="py-2 pr-4">GNC Engineer</td><td className="py-2 pr-4">Yes</td><td className="py-2">8/2/2024</td></tr>
              <tr><td className="py-2 pr-4">5</td><td className="py-2 pr-4">26</td><td className="py-2 pr-4">Teacher</td><td className="py-2 pr-4">Yes</td><td className="py-2">8/3/2024</td></tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold mt-6">Tasks evaluated</h4>
        <ul className="list-disc pl-5">
          <li>Purchase a game ticket</li>
          <li>Purchase a men’s team jersey</li>
          <li>Check a player’s current-season statistics</li>
        </ul>

        <h4 className="font-semibold mt-6">Data collected</h4>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h5 className="font-medium">Behavioral</h5>
            <ul className="list-disc pl-5">
              <li>Click path, success rate, errors</li>
              <li>Completion time</li>
              <li>Verbal reactions</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium">Attitudinal</h5>
            <ul className="list-disc pl-5">
              <li>Baseline familiarity & expectations</li>
              <li>Real-time feedback during tasks</li>
              <li>System Usability Scale (SUS), NPS</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* TAKEAWAYS */}
      <Section
        id="takeaways"
        label="KEY TAKEAWAYS"
        heading="What we learned"
      >
        <div className="space-y-8">
          <div>
            <h5 className="font-semibold">Task 2 — Merchandise purchase</h5>
            <p>
              Most participants struggled to find <strong>Shop</strong>—it wasn’t where they expected and lacked
              prominence. Some detoured to “Fan Zone” or unrelated pages; one landed on another team’s store.
            </p>
            <Figure src="/images/iowa-results-01.png" alt="Results for merchandise task" />
          </div>

          <div>
            <h5 className="font-semibold">Task 3 — Player statistics</h5>
            <p>
              Lowest success rate (2/5). <strong>Game Logs</strong> was obscured; one user left the site by mistake;
              another spent 315s exploring stats pages without success.
            </p>
            <Figure src="/images/iowa-results-02.png" alt="Results for stats task" />
          </div>

          <div>
            <h5 className="font-semibold">SUS & NPS</h5>
            <p>
              SUS averaged <strong>79.9</strong> (good usability). NPS averaged <strong>8.4</strong>. Scores were pulled
              down by navigation difficulties—especially merchandise and stats.
            </p>
            <Figure src="/images/iowa-score.png" alt="SUS and NPS scores" />
          </div>
        </div>
      </Section>

      {/* SOLUTIONS */}
      <Section
        id="solutions"
        label="SOLUTIONS"
        heading="Design recommendations"
      >
        <div className="space-y-8">
          <div>
            <h5 className="font-semibold">1) Move “Shop” or increase prominence</h5>
            <p>
              Click paths show people hovered “<strong>Fan Zone</strong>,” expecting to find Shop there—mismatch with
              users’ mental model (Match between system and real world). We relocated/elevated Shop for faster access.
            </p>
            <Figure src="/images/iowa-solutions-01.png" alt="Shop placement recommendation" />
          </div>

          <div>
            <h5 className="font-semibold">2) Replace hidden “Game Logs” with a clear tab bar</h5>
            <p>
              The stats page felt cluttered; excessive dividers hurt scannability. We introduced a simplified tab bar
              and aligned filters to improve hierarchy and make the next step obvious.
            </p>
            <Figure src="/images/iowa-solutions-02.png" alt="Game Logs tab bar recommendation" />
          </div>
        </div>
      </Section>

      {/* REFLECTION */}
      <Section
        id="reflection"
        label="REFLECTION"
        heading="If we had more time"
      >
        <h4 className="font-semibold">Effective discovery</h4>
        <p>
          Heuristics + cognitive walkthrough quickly exposed issues and likely failure points. Usability testing then
          validated and deepened findings beyond our expert lens.
        </p>

        <h4 className="font-semibold mt-4">Next research</h4>
        <p>
          Run <strong>card sorts</strong> and <strong>tree tests</strong> to refine IA, followed by another test round
          to verify the revised design’s impact.
        </p>
      </Section>
    </div>
  ),
};

export default iowa;
