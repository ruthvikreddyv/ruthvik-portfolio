import { Reveal } from "@/components/Reveal";
import { IconRadio, IconBrain, IconNetwork, IconGoggles, IconChain, IconTarget } from "@/components/icons";

const interests = [
  { icon: IconRadio, label: "5G/6G Wireless Communications" },
  { icon: IconBrain, label: "Machine Learning for Wireless Networks" },
  { icon: IconBrain, label: "Artificial Intelligence" },
  { icon: IconNetwork, label: "Graph Neural Networks" },
  { icon: IconTarget, label: "Deep Reinforcement Learning" },
  { icon: IconNetwork, label: "Internet of Things" },
  { icon: IconRadio, label: "Physical Layer Security" },
  { icon: IconTarget, label: "Wireless Resource Allocation" },
  { icon: IconNetwork, label: "Intelligent Network Management" },
  { icon: IconBrain, label: "Computer Vision" },
  { icon: IconBrain, label: "Natural Language Processing" },
  { icon: IconGoggles, label: "Extended Reality" },
  { icon: IconChain, label: "Blockchain Systems" },
  { icon: IconNetwork, label: "Edge Intelligence" },
];

export function ResearchInterests() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line">
      <Reveal>
        <p className="eyebrow mb-3">research_interests.list()</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Research Interests
        </h2>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((item, i) => (
          <Reveal key={item.label} delay={80 + i * 40}>
            <div className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3.5 hover:border-teal/40 transition-colors">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-teal-tint text-teal">
                <item.icon className="w-4 h-4" />
              </span>
              <span className="text-sm font-medium text-ink">{item.label}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="corner-frame mt-8 rounded-2xl border border-teal/30 bg-teal-tint p-7">
          <p className="text-ink font-medium leading-relaxed">
            I am actively seeking fully funded PhD opportunities in Artificial
            Intelligence and Wireless Communications, with research interests in 5G/6G
            wireless communication systems, machine learning for wireless networks,
            IoT and intelligent edge computing, physical layer security, and wireless
            resource allocation using graph neural networks and reinforcement
            learning.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
