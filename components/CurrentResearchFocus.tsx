import { Reveal } from "@/components/Reveal";
import { IconRadio, IconNetwork, IconTarget, IconGoggles, IconChain } from "@/components/icons";

const focus = [
  {
    icon: IconRadio,
    title: "AI for 5G/6G Networks",
    body: "Applying AI/ML to network management and signal processing under a NMICPS-funded research project at IIIT Naya Raipur, targeting intelligent, adaptive 5G-and-beyond systems.",
  },
  {
    icon: IconNetwork,
    title: "Graph Learning",
    body: "Modelling wireless networks as graphs to capture topology and interference structure for more robust resource-allocation policies.",
  },
  {
    icon: IconTarget,
    title: "Wireless Resource Allocation",
    body: "Combining graph neural networks with deep reinforcement learning (GNN-DRL, GNN-SPN) for dynamic spectrum and radio resource allocation in high-mobility V2X networks.",
  },
  {
    icon: IconRadio,
    title: "Intelligent Communication Systems",
    body: "Investigating trustworthy, physical-layer-aware communication systems that stay reliable and secure as networks scale.",
  },
  {
    icon: IconGoggles,
    title: "Extended Reality for Scientific Learning",
    body: "Building ArchViz-XR, an AI-powered XR pipeline that transforms research diagrams into interactive, explorable 3D scientific visualisations.",
  },
  {
    icon: IconChain,
    title: "Blockchain-based Trust Systems",
    body: "Designing decentralised, tamper-evident verification systems — like EduChain's credential verification — using Ethereum smart contracts and IPFS.",
  },
];

export function CurrentResearchFocus() {
  return (
    <section
      id="research-focus"
      className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line"
    >
      <Reveal>
        <p className="eyebrow mb-3">current_focus.status()</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Current Research Focus
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="text-ink-soft mb-12 max-w-2xl">
          What I&apos;m actively working on right now, as part of my research at IIIT
          Naya Raipur and independent project work.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {focus.map((item, i) => (
          <Reveal key={item.title} delay={140 + i * 60}>
            <div className="h-full rounded-xl border border-line bg-surface p-6 hover:border-teal/40 hover:shadow-md transition-all">
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-teal-tint text-teal">
                <item.icon className="w-4 h-4" />
              </span>
              <h3 className="font-display font-semibold text-ink mb-2">{item.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={260}>
        <div className="corner-frame mt-8 rounded-2xl border border-line bg-surface p-7">
          <p className="text-ink-soft leading-relaxed">
            <span className="font-display font-semibold text-ink">
              I am actively seeking fully funded PhD opportunities
            </span>{" "}
            in Artificial Intelligence, Machine Learning, Wireless Communications, and
            Intelligent Network Systems, with interests in developing next-generation
            AI-driven communication technologies and trustworthy intelligent systems.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
