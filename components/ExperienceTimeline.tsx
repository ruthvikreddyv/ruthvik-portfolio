import { Reveal } from "@/components/Reveal";

const timeline = [
  {
    title: "Research Intern",
    subtitle: "IIIT Naya Raipur",
    date: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Constructing end-to-end ML pipelines covering ingestion, preprocessing, feature engineering, and cross-validated model training on structured research datasets under faculty supervision.",
      "Driving systematic hyperparameter optimisation cycles with measurable generalisation gains; findings have contributed to two manuscripts under review at indexed international venues.",
      "Contributing to literature review, research methodology design, reproducibility analysis, and scientific manuscript preparation.",
    ],
  },
  {
    title: "Software Developer Intern",
    subtitle: "Cypwng — LendFundz Fintech Platform, Hyderabad",
    date: "Jan 2025 – Jun 2025",
    current: false,
    bullets: [
      "Architected loan lifecycle modules covering intake, underwriting transitions, and status tracking in Django/PostgreSQL, reducing manual operations overhead across the credit team.",
      "Delivered OTP-based two-factor authentication and role-scoped session management, satisfying fintech security and audit requirements for production deployment.",
      "Designed a versioned REST API layer for the Next.js frontend using contract-first development, enabling fully parallel frontend and backend delivery cycles.",
      "Rebuilt EMI computation as an isolated, parameterised utility library, improving numerical fidelity and reducing regression risk across variable tenures and rate structures.",
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line">
      <Reveal>
        <p className="eyebrow mb-3">experience.log</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-14">
          Experience
        </h2>
      </Reveal>

      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <Reveal key={item.title + item.date} delay={100 + index * 120}>
              <div className="relative flex gap-6">
                <div className="relative z-10 flex-none">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                      item.current
                        ? "border-teal bg-teal-tint"
                        : "border-line-strong bg-surface"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${item.current ? "bg-teal" : "bg-ink-faint"}`}
                    />
                  </span>
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                    <span className="font-mono text-xs text-ink-faint">{item.date}</span>
                  </div>
                  <p className="text-sm font-medium text-teal mb-4">{item.subtitle}</p>
                  <ul className="space-y-2.5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-ink-soft leading-relaxed">
                        <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-ink-faint" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
