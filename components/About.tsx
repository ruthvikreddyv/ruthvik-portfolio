import { Reveal } from "@/components/Reveal";
import { IconPin, IconSparkle, IconBrain, IconAward } from "@/components/icons";

const facts = [
  { icon: IconPin, label: "Based in", value: "Hyderabad, India" },
  { icon: IconBrain, label: "Focus areas", value: "AI/ML · Blockchain · Full-Stack · XR" },
  { icon: IconSparkle, label: "Currently", value: "Research Intern, IIIT Naya Raipur" },
  { icon: IconAward, label: "Languages", value: "English, Telugu, Hindi" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line">
      <Reveal>
        <p className="eyebrow mb-3">about.md</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          About Me
        </h2>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={100}>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              I&apos;m a Computer Science (Data Science) undergraduate at Chhattisgarh
              Swami Vivekanand Technical University, and an aspiring researcher working
              toward a PhD in Artificial Intelligence. My interests sit at the
              intersection of multimodal AI, knowledge representation, trustworthy
              intelligent systems, and immersive human-computer interaction — building
              computational frameworks that bridge perception, reasoning, and
              interaction.
            </p>
            <p>
              Most recently, I worked as a Software Developer Intern at Cypwng, where I
              architected loan-lifecycle modules, delivered OTP-based two-factor
              authentication, and designed a versioned REST API layer for the LendFundz
              fintech platform in Django and PostgreSQL. I&apos;m currently a Research
              Intern at IIIT Naya Raipur, building end-to-end ML pipelines whose
              findings have contributed to two manuscripts under review at indexed
              international venues.
            </p>
            <p>
              Beyond fintech and applied ML, I build in blockchain — EduChain&apos;s
              on-chain credential verification — and XR — ArchViz-XR&apos;s
              semantic-to-spatial visualisation pipeline. I hold certifications from
              IBM, Microsoft, Walmart, Wells Fargo, Accenture, and Deloitte, and outside
              of work you&apos;ll find me playing cricket, riding, or in the middle of a
              hackathon.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="corner-frame rounded-2xl border border-line bg-surface p-6">
            <p className="eyebrow mb-5">quick_facts</p>
            <dl className="space-y-5">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-md bg-teal-tint text-teal">
                    <Icon className="w-4 h-4" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ink-faint">{label}</dt>
                    <dd className="text-sm font-medium text-ink">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
