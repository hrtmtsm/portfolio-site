// content/projects/runbuddy/case.tsx
import type { CaseDef } from "@/types/case";
import { Section, Figure } from "@/components/case/CaseStudyLayout";

const runbuddy: CaseDef = {
  slug: "runbuddy",
  title: "RunBuddy",
  subtitle: "OPENAI × HARDWARE • CONCEPT 2025",
  date: "PROJECT • 2025",
  hero: <img src="/images/runbuddy-cover.png" alt="RunBuddy hero" />,

  // No top stat cards — we’re moving this info into the INTRO section
  // stats: undefined,

  toc: [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "discover", label: "Discover" },
    { id: "user-research", label: "User Research" },
    { id: "synthesis", label: "Synthesis" },
    { id: "ideate", label: "Ideate" },
    { id: "prototyping", label: "Prototyping" },
    { id: "test", label: "Test" },
    { id: "iterations", label: "Iterations" },
    { id: "reflection", label: "Reflection" },
  ],

  body: (
    <div className="space-y-16">
{/* OVERVIEW — left narrative + right meta rows (no card) */}
<Section
  id="overview"
  label="PROJECT INTRO"
  heading="More Than Miles: Run with people who match your vibe"
>
  <div className="grid lg:grid-cols-2 gap-10">
    {/* Left: narrative */}
    <div>
      <p>
        Many runners <strong>struggle to find compatible running buddies or groups.</strong>{" "}
        RunBuddy is a community-based app that helps people connect with others who match their
        pace, schedule, and running style. It <strong>focuses on compatibility and connection</strong>,
        making it easier to build consistent, supportive routines through shared runs.
      </p>
      <p className="mt-4">
        I contributed by shaping interview questions,
        consolidating research insights, leading design decisions on usability and logistics, and
        building key prototypes following Apple’s Human Interface Guidelines.
      </p>
    </div>

    {/* Right: facts in rows with dividers */}
    <div className="lg:pl-6">
      <div className="border-t border-border/70 divide-y divide-border/70">
        <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-6 py-4">
          <div className="text-[11px] tracking-[0.16em] text-foreground/60 uppercase">Role</div>
          <div className="text-[15px] leading-7">UX Research, UX/UI Design</div>
        </div>
        <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-6 py-4">
          <div className="text-[11px] tracking-[0.16em] text-foreground/60 uppercase">Timeline</div>
          <div className="text-[15px] leading-7">8 weeks (Spring 2025)</div>
        </div>
        <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-6 py-4">
          <div className="text-[11px] tracking-[0.16em] text-foreground/60 uppercase">Type</div>
          <div className="text-[15px] leading-7">Academic project</div>
        </div>
        <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-6 py-4">
          <div className="text-[11px] tracking-[0.16em] text-foreground/60 uppercase">With</div>
          <div className="text-[15px] leading-7">
            D. Untivero, J. Gallarate, J. Lin, M. Manzanarez
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Optional: impact highlights under the intro */}
  <div className="mt-8 grid md:grid-cols-2 gap-4">
    <div className="rounded-xl border border-border/70 bg-white p-5">
      <div className="text-2xl leading-none mb-2">🟧</div>
      <h4 className="font-semibold">Clearer compatibility boosts confidence</h4>
      <p className="text-foreground/80 mt-1">
        Transparent pace, vibe, and expectations helped hesitant runners feel comfortable joining groups.
      </p>
    </div>
    <div className="rounded-xl border border-border/70 bg-white p-5">
      <div className="text-2xl leading-none mb-2">⚡️</div>
      <h4 className="font-semibold">Streamlined onboarding reduces friction</h4>
      <p className="text-foreground/80 mt-1">
        Cutting non-essential questions made the flow feel faster without sacrificing match quality.
      </p>
    </div>
  </div>
</Section>


      {/* PROBLEM */}
      <Section
        id="problem"
        label="PROBLEM"
        heading="Unclear expectations keep runners from joining running groups"
      >
        <p>
          When runners aren’t sure if a group matches their pace, social vibe, or goals, they hesitate
          to join. Past experiences with cliquey groups, feelings of comparison, or fear of holding
          others back made them feel discouraged. This uncertainty often stems from a lack of upfront
          information, leading runners to avoid joining entirely.
        </p>
      </Section>

      {/* SOLUTION */}
      <Section
        id="solution"
        label="SOLUTION"
        heading="Help users identify compatibility cues"
      >
        <p>
          Our research highlighted the importance of setting clear expectations—<strong>not only pace
          but also group vibe, social dynamics, and emotional safety</strong>. Many participants preferred
          joining through friends because they felt more confident about fitting in. Others were drawn to
          larger groups, which they believed offered more diversity in pace and personality. Compatibility
          cues like shared values, flexibility, and social tone reduce hesitation and encourage participation.
        </p>

        {/* Feature blocks */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="font-semibold mb-2">Feature 1 — Onboarding Questionnaire</h4>
            <p className="text-foreground/80">
              New users answer a few questions about their pace, preferences, and goals to help match
              them with compatible groups.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden bg-white shadow">
            <video
              src="/videos/runbuddy-feature-01.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <div className="rounded-lg overflow-hidden bg-white shadow order-2 lg:order-1">
            <video
              src="/videos/runbuddy-feature-02.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h4 className="font-semibold mb-2">Feature 2 — Group Exploration</h4>
            <p className="text-foreground/80">
              Browse local running groups with tags like “beginner-friendly,” “social,” or “goal-focused”
              to quickly find one that fits your style.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="font-semibold mb-2">Feature 3 — Drop a Review</h4>
            <p className="text-foreground/80">
              Leave quick feedback after a run using emojis, tags, and optional comments. This keeps it
              easy and helps others gauge group compatibility.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden bg-white shadow">
            <video
              src="/videos/runbuddy-feature-03.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </Section>

      {/* DISCOVER */}
      <Section
        id="discover"
        label="DISCOVER"
        heading="Literature review: clarity and connection make the difference"
      >
        <p>
          We conducted a literature review to understand the challenges people face when joining running
          groups. We found that <strong>clear structure</strong> and a <strong>welcoming environment</strong> encourage
          people to join and continue participating, while <strong>uncertainty</strong> can discourage new runners.
          Building <strong>social connections</strong> was also identified as key to helping people stick with the habit.
        </p>

        <div className="space-y-3 text-foreground/80">
          <blockquote className="border-l-2 pl-4">
            “Building social connections helps people keep running. When runners form friendships and feel
            supported, they are more likely to stay motivated and stick with the habit.”
            <span className="text-muted"> — Bogina, n.d.</span>
          </blockquote>
          <blockquote className="border-l-2 pl-4">
            “Clear structure and a welcoming group encourage people to join and stay. Scheduled runs, clear expectations,
            and emotional safety make runners feel more comfortable and committed.”
            <span className="text-muted"> — Bogina, n.d. &amp; Yang et&nbsp;al., 2022</span>
          </blockquote>
          <blockquote className="border-l-2 pl-4">
            “Too much uncertainty can stop new runners from joining. When people don’t know what to expect or worry
            about fitting in, they are less likely to join.”
            <span className="text-muted"> — Bogina, n.d.</span>
          </blockquote>
        </div>

        {/* Competitive table */}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-[640px] w-full border-collapse">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 pr-4">Feature</th>
                <th className="py-2 pr-4">Nike Run Club</th>
                <th className="py-2 pr-4">Strava</th>
                <th className="py-2 pr-0">Meetup</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              {[
                ["Compatibility Matching", "❌", "❌", "❌"],
                ["Find Compatible Group", "❌", "❌", "✅"],
                ["Clear Expectations About Group", "❌", "❌", "✅"],
                ["Social Connection", "❌", "✅", "✅"],
                ["Group Running Support", "✅", "✅", "✅"],
                ["Beginner-Friendly", "✅", "❌", "✅"],
                ["Performance Tracking", "✅", "✅", "❌"],
                ["Event Coordination", "✅", "✅", "✅"],
                ["Scheduling Flexibility", "✅", "✅", "✅"],
                ["Local Discovery", "✅", "✅", "✅"],
              ].map((row) => (
                <tr key={row[0]} className="border-b last:border-b-0">
                  <td className="py-2 pr-4">{row[0]}</td>
                  <td className="py-2 pr-4">{row[1]}</td>
                  <td className="py-2 pr-4">{row[2]}</td>
                  <td className="py-2 pr-0">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* USER RESEARCH */}
      <Section
        id="user-research"
        label="USER RESEARCH"
        heading="Interviews (n=10): barriers to joining group runs"
      >
        <p>
          We conducted semi-structured interviews to explore how novice to intermediate runners discover and
          join group runs. We focused on social dynamics, motivation, emotional safety, and uncertainty.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mt-4">
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-semibold mb-2">Demographics</h4>
            <ul className="list-disc pl-5 text-foreground/80">
              <li>10 participants, ages 23–38</li>
              <li>Casual to intermediate; included club pacers</li>
              <li>Solo vs. group preferences mixed</li>
              <li>Mixed use of apps and wearables</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-semibold mb-2">Methodology</h4>
            <ul className="list-disc pl-5 text-foreground/80">
              <li>Semi-structured interviews</li>
              <li>Focused on discovery, joining, and retention</li>
              <li>Qualitative, exploratory approach</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h4 className="font-semibold mb-2">Research focus</h4>
            <ul className="list-disc pl-5 text-foreground/80">
              <li>Running habits &amp; group compatibility</li>
              <li>Technology use &amp; emotional safety</li>
              <li>Uncertainty in decision-making</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* SYNTHESIS */}
      <Section
        id="synthesis"
        label="SYNTHESIS"
        heading="Descriptive coding, affinity mapping, and pain points"
      >
        <h4 className="font-semibold">Descriptive coding</h4>
        <p>
          We used inductive, descriptive coding to let themes emerge from raw data. This helped us reflect
          participants’ voices, gain grounded insights, and mitigate bias.
        </p>
        <Figure
          src="/images/runbuddy-coding.png"
          alt="Descriptive coding"
          caption="Coding the interviews to surface themes."
        />

        <h4 className="font-semibold mt-8">Affinity mapping</h4>
        <p>
          Clustering the labels surfaced these themes:
          <br />– <strong>Social Fit &amp; Vibes</strong> as a primary motivator
          <br />– <strong>Emotional Safety &amp; Psychological Comfort</strong>
          <br />– <strong>Reducing Uncertainty</strong> about groups
        </p>
        <Figure
          src="/images/runbuddy-affinity-mapping.png"
          alt="Affinity mapping"
          caption="Grouping observations to spot patterns."
        />

        <h4 className="font-semibold mt-8">Pain points</h4>
        <p>
          We mapped pain points across pre-run, during-run, and post-run. The MVP focuses on the{" "}
          <strong>pre-run phase</strong> to reduce uncertainty and social anxiety—key barriers that prevent
          runners from joining (and ultimately affect the rest of the journey).
        </p>
      </Section>

      {/* IDEATE */}
      <Section
        id="ideate"
        label="IDEATE"
        heading="How might we support runners in choosing a group where they truly belong?"
      >
        <p>
          We explored a wide range of ideas (emotion-based search, past runner reviews, first-time badges,
          MBTI-style matching). We selected an <strong>onboarding questionnaire</strong> as our MVP, plus{" "}
          <strong>past reviews</strong> as a supporting feature. This direction lets us collect meaningful user
          data early and <strong>reduce uncertainty</strong>—essential for building trust, especially for first-timers.
        </p>
        <Figure
          src="/images/runbuddy-design-charlette.png"
          alt="Design charrette"
          caption="Diverge widely, then converge on MVP scope."
        />
      </Section>

      {/* PROTOTYPING */}
      <Section
        id="prototyping"
        label="PROTOTYPING"
        heading="Low-fi wireframes"
      >
        <p>
          The solution tailors content based on social compatibility and logistics while improving through lightweight feedback.
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Onboarding questionnaire</strong> — captures pace, goals, and preferences.</li>
          <li><strong>Group exploration</strong> — browse and find compatible groups.</li>
          <li><strong>Drop a review</strong> — quick post-run feedback to improve recommendations.</li>
        </ul>
        <Figure src="/images/runbuddy-low-fi.png" alt="Low-fi wireframes" />
      </Section>

      {/* TEST */}
      <Section
        id="test"
        label="TEST"
        heading="Unmoderated usability testing"
      >
        <p>
          We ran three rounds (including a pilot) to iterate on content, navigation, and interactions. Participants
          (18–50, beginner to intermediate) completed find-this and navigate-there tasks with short post-task questions,
          then a SUS for overall clarity and usability.
        </p>
        <Figure src="/images/runbuddy-test.png" alt="Usability test flows and notes" />
      </Section>

      {/* ITERATIONS */}
      <Section
        id="iterations"
        label="ITERATIONS"
        heading="Two major improvements"
      >
        <h4 className="font-semibold">Clear compatibility cues</h4>
        <p>
          The group section felt dense, but compatibility details were helpful. We added a{" "}
          <strong>compatibility badge</strong> and adjusted hierarchy for better <strong>scannability</strong>,
          helping users feel more confident joining.
        </p>
        <Figure src="/images/runbuddy-tweak-01.png" alt="Compatibility badge iteration" />

        <h4 className="font-semibold mt-6">Fewer steps, more accuracy</h4>
        <p>
          We removed questions unrelated to matching to reduce friction. Some users felt the flow was long, so we kept
          only questions that map to <strong>tags reflecting group vibe</strong>. This improved efficiency without
          sacrificing match quality.
        </p>
        <Figure src="/images/runbuddy-tweak-02.png" alt="Onboarding flow iteration" />
      </Section>

      {/* REFLECTION */}
      <Section
        id="reflection"
        label="REFLECTION"
        heading="Reflection & if we had more time"
      >
        <h4 className="font-semibold">Secondary research narrowed scope</h4>
        <p>
          Literature reviews helped identify the problem space, define the MVP, and back design decisions.
          Combined with interview data, it kept us focused on what matters.
        </p>

        <h4 className="font-semibold mt-4">Expert reviews + usability testing</h4>
        <p>
          Peer reviews surfaced early usability issues; doing this before formal testing let us iterate quickly
          and avoid obvious friction.
        </p>

        <h4 className="font-semibold mt-4">Design system accelerated iteration</h4>
        <p>
          A shared system enabled faster tweaks and updates. Component naming/structure could be improved for better
          team alignment and UI consistency.
        </p>

        <h4 className="font-semibold mt-4">Future: long-term observation</h4>
        <p>
          With more time, we’d test with real users over a longer period to see if it effectively supports joining
          compatible groups and forming meaningful connections.
        </p>
      </Section>
    </div>
  ),
};

export default runbuddy;
