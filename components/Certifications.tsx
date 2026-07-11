import { Reveal } from "@/components/Reveal";
import { IconAward } from "@/components/icons";

const certifications = [
  { name: "Machine Learning with Python", issuer: "IBM" },
  { name: "AI & Azure AI Fundamentals", issuer: "Microsoft" },
  { name: "Generative AI Essentials", issuer: "LinkedIn & Microsoft" },
  { name: "Advanced Software Engineering", issuer: "Walmart" },
  { name: "Data Analytics Simulation", issuer: "Accenture & Deloitte" },
  { name: "Software Engineering Simulation", issuer: "Wells Fargo" },
];

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line">
      <Reveal>
        <p className="eyebrow mb-3">certifications.yaml</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Certifications
        </h2>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={100 + i * 60}>
            <div className="flex items-start gap-3 rounded-xl border border-line bg-surface p-5 hover:border-teal/40 hover:-translate-y-0.5 transition-all">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-teal-tint text-teal">
                <IconAward className="w-4 h-4" />
              </span>
              <div>
                <p className="font-medium text-ink leading-snug">{cert.name}</p>
                <p className="text-sm text-ink-faint mt-0.5">{cert.issuer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
