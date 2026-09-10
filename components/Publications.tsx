import { Reveal } from "@/components/Reveal";
import { IconBook } from "@/components/icons";

const publications = [
  {
    title:
      "Scalable Resource Allocation Using Graph Learning in 6G for Hyper-Reliable V2X Communication",
    venue: "IEEE Network Letters",
    year: "2026",
    status: "Submitted",
  },
  {
    title:
      "Graph Neural Network-Based Deep Reinforcement Learning for Resource Allocation in V2X Communication",
    venue: "IEEE Communications Letters",
    year: "2026",
    status: "Submitted",
  },
  {
    title:
      "EduChain: A Blockchain-Based Framework for Decentralised Academic Credential Verification",
    venue: "Journal of Java & Information Technology (JJCIT)",
    year: "2026",
    status: "Submitted",
  },
  {
    title:
      "ArchViz-XR: AI-Powered Extended Reality Framework for Scientific Knowledge Visualization",
    venue: "ITcon — Journal of Information Technology in Construction",
    year: "2026",
    status: "Submitted",
  },
];

const statusStyles: Record<string, string> = {
  Submitted: "bg-gold-tint text-gold",
  "Under Review": "bg-gold-tint text-gold",
  Accepted: "bg-teal-tint text-teal",
  Draft: "bg-violet-tint text-violet",
};

export function Publications() {
  return (
    <section
      id="publications"
      className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line"
    >
      <Reveal>
        <p className="eyebrow mb-3">publications.bib</p>
      </Reveal>

      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Publications
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <p className="text-ink-soft mb-12 max-w-2xl">
          Research spanning graph learning and deep reinforcement learning for
          next-generation V2X communication, blockchain-based academic
          verification, and AI-powered extended reality for scientific
          visualization.
        </p>
      </Reveal>

      <div className="relative">
        <div
          className="absolute left-[19px] top-2 bottom-2 w-px bg-line"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={140 + i * 100}>
              <div className="relative flex gap-6">
                <div className="relative z-10 flex-none">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-line-strong bg-surface">
                    <IconBook className="w-4 h-4 text-teal" />
                  </span>
                </div>

                <div className="flex-1 rounded-xl border border-line bg-surface p-6 hover:border-teal/40 transition-colors">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display font-semibold text-ink leading-snug">
                        {pub.title}
                      </h3>

                      <p className="text-sm text-ink-soft mt-1.5">
                        {pub.venue} &middot; {pub.year}
                      </p>
                    </div>

                    <span
                      className={`flex-none w-fit rounded-full px-3 py-1 font-mono text-xs font-medium ${
                        statusStyles[pub.status]
                      }`}
                    >
                      {pub.status}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
