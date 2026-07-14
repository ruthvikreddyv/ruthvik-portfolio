import { Reveal } from "@/components/Reveal";
import { IconGithub } from "@/components/icons";

const featured = {
  title: "ArchViz-XR",
  subtitle: "AI-Powered XR Framework for Scientific Knowledge Visualisation",
  tech: ["NLP", "Computer Vision", "Scene Graphs", "XR/AR", "Transformers"],
  bullets: [
    "Designed an automated semantic-to-spatial XR compilation pipeline that ingests research paper diagrams, extracts entity relationships via NLP and computer vision, constructs scene graphs, and renders interactive 3D AR experiences — eliminating manual AR content authoring.",
    "Prototyped Transformer architecture visualisation: scan a diagram and explore animated component flows, AI-generated explanations, voice interaction, and adaptive learning overlays in real time.",
  ],
};

const projects = [
  {
    title: "EduChain",
    subtitle: "Decentralised Academic Credential Verification Platform",
    supervisor: "Mrs. Divya Shukla",
    tech: ["Ethereum", "Solidity", "IPFS", "FastAPI", "Next.js", "Ethers.js"],
    bullets: [
      "Deployed permissioned Ethereum smart contracts for on-chain credential issuance and revocation; integrated IPFS with SHA-256 hashing, making tampering cryptographically detectable.",
      "Exposed a FastAPI verification service and wallet-authenticated Next.js interface via Ethers.js, enabling trustless verification without a centralised intermediary.",
    ],
    // badge: "Published in IJIT 2026 (under review)",
  },
  {
    title: "LendFundz",
    subtitle: "Financial Management & Loan Workflow Automation",
    supervisor: "Dr. Nachiket Tapas",
    tech: ["Django", "PostgreSQL", "REST API", "JWT"],
    bullets: [
      "Normalised PostgreSQL schema for loan applications, amortisation-accurate repayment schedules, and privilege-segregated access across borrower, reviewer, and admin roles.",
      "Automated EMI computation and repayment schedule generation, reducing manual processing errors.",
    ],
  },
  {
    title: "ParkEase",
    subtitle: "Real-Time Smart Parking Allocation System",
    supervisor: "Dr. Nachiket Tapas",
    tech: ["Python", "Concurrency Control", "Distributed Systems"],
    bullets: [
      "Built a backend locking strategy for concurrent slot reservations that eliminates double-booking under simultaneous request loads.",
      "Applied distributed-systems principles to support scalable smart-city transportation solutions.",
    ],
  },
  {
    title: "Mental Health Detector",
    subtitle: "Journal Sentiment Analysis Application",
    supervisor: "Mr. Ramakant Ganjeshwar",
    tech: ["NLP", "Machine Learning", "Matplotlib"],
    bullets: [
      "Built a supervised text classification pipeline over personal journal entries for emotional and behavioural pattern monitoring.",
      "Designed Matplotlib mood-trajectory dashboards to visualise longitudinal emotional trends.",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line">
      <Reveal>
        <p className="eyebrow mb-3">projects.list()</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Projects
        </h2>
      </Reveal>

      {/* Featured project */}
      <Reveal delay={100}>
        <div className="corner-frame group relative rounded-2xl border border-line bg-gradient-to-br from-surface to-surface-2 p-8 md:p-10 mb-6 hover:border-teal/40 transition-colors">
          <span className="eyebrow mb-4 inline-block">flagship_project</span>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-1">
            {featured.title}
          </h3>
          <p className="text-teal font-medium mb-5">{featured.subtitle}</p>
          <ul className="space-y-3 mb-6 max-w-3xl">
            {featured.bullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-ink-soft leading-relaxed">
                <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-teal" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {featured.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-surface px-3 py-1 font-mono text-xs text-ink-soft border border-line"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Rest of the grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={160 + i * 80}>
            <div className="group flex h-full flex-col rounded-xl border border-line bg-surface p-7 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink group-hover:text-teal transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-soft mt-1">{p.subtitle}</p>
                </div>
              </div>

              <ul className="space-y-2.5 mb-5 flex-1">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ink-faint" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {p.badge && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-tint px-3 py-1 font-mono text-xs font-medium text-gold">
                  {p.badge}
                </span>
              )}

              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-line">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-xs text-ink-faint">Supervisor: {p.supervisor}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/ruthvikreddyv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-sm font-semibold text-ink hover:border-teal hover:text-teal transition-colors"
          >
            <IconGithub className="w-4 h-4" />
            See more on GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
