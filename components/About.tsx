import { Reveal } from "@/components/Reveal";
import { IconPin, IconRadio, IconBrain, IconAward } from "@/components/icons";

const facts = [
  { icon: IconPin, label: "Based in", value: "Hyderabad, India" },
  { icon: IconRadio, label: "Research focus", value: "AI for Wireless Communications" },
  { icon: IconBrain, label: "Currently", value: "Research Intern, IIIT Naya Raipur" },
  { icon: IconAward, label: "Seeking", value: "Fully funded PhD positions" },
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
              I&apos;m interested in solving real-world problems at the intersection of
              Artificial Intelligence, Machine Learning, Blockchain, Extended Reality,
              and Intelligent Wireless Communication. As a Research Intern at IIIT
              Naya Raipur, I work on a NMICPS-funded project applying AI/ML to network
              management and signal processing for 5G and beyond — building graph
              neural network and reinforcement learning models for intelligent
              resource allocation in next-generation wireless systems.
            </p>
            <p>
              Alongside research, I bring hands-on software engineering experience:
              as a Software Developer Intern at Cypwng I built backend systems for a
              fintech lending platform in Django, FastAPI, and PostgreSQL, with secure
              OTP authentication and role-based access control. I&apos;ve also built
              EduChain, a blockchain-based credential verification platform on
              Ethereum, and ArchViz-XR, an AI-powered XR framework that turns research
              diagrams into interactive 3D scientific visualisations.
            </p>
            <p>
              My work has contributed to research manuscripts under review at
              international journals and conferences, spanning blockchain systems and
              graph-learning-based wireless resource allocation. I&apos;m now looking to
              extend this research trajectory through a PhD focused on AI-driven
              wireless communications and trustworthy intelligent systems.
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
