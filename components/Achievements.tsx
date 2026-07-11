import { Reveal } from "@/components/Reveal";
import { IconBook } from "@/components/icons";

const publications = [
  {
    title:
      "EduChain: A Blockchain-Based Framework for Decentralised Academic Credential Verification",
    venue: "International Journal of Information Technology (IJIT)",
    year: "2026",
    status: "Under review",
  },
  {
    title: "Manuscript on ML pipeline generalisation and hyperparameter optimisation",
    venue: "IEEE International Conference on Advanced Networks and Telecommunications Systems (ANTS)",
    year: "2026",
    status: "Under review",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line">
      <Reveal>
        <p className="eyebrow mb-3">publications.bib</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Publications &amp; Achievements
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="text-ink-soft mb-12 max-w-2xl">
          Research findings from my work at IIIT Naya Raipur and on EduChain have
          contributed to the following manuscripts, currently under review at indexed
          international venues.
        </p>
      </Reveal>

      <div className="space-y-4">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={140 + i * 100}>
            <div className="flex flex-col gap-4 rounded-xl border border-line bg-surface p-6 sm:flex-row sm:items-start hover:border-gold/40 transition-colors">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gold-tint text-gold">
                <IconBook className="w-5 h-5" />
              </span>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-ink leading-snug">
                  {pub.title}
                </h3>
                <p className="text-sm text-ink-soft mt-1.5">
                  {pub.venue} &middot; {pub.year}
                </p>
              </div>
              <span className="flex-none rounded-full bg-gold-tint px-3 py-1 font-mono text-xs font-medium text-gold h-fit">
                {pub.status}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
