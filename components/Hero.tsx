import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { IconArrowUpRight, IconDownload, IconMail } from "@/components/icons";

const chips = ["Python · Django · FastAPI", "Machine Learning", "Graph Neural Networks", "Wireless Systems", "Blockchain"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden grid-texture border-b border-line"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 grid gap-14 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <Reveal>
            <p className="eyebrow mb-5">engineer.init()</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.2rem] font-semibold tracking-tight leading-[1.08] text-ink">
              Ruthvik Reddy
              <br />
              <span className="text-teal">Veerannagari</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 font-mono text-sm text-ink-soft">
              Software Engineer <span className="text-ink-faint">·</span> AI/ML Engineer{" "}
              <span className="text-ink-faint">·</span> Computer Science Researcher
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Computer Science (Data Science) graduate with a strong foundation in
              software engineering, backend development, and applied AI/ML — from
              building production fintech and blockchain systems to researching
              computer vision, graph neural networks, and reinforcement learning,
              including applications in wireless communications. Backed by research
              manuscripts under review.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/Ruthvik_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-teal-strong transition-colors shadow-sm"
              >
                <IconDownload className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#research"
                className="inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-sm font-semibold text-ink hover:border-teal hover:text-teal transition-colors"
              >
                View Research
                <IconArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-sm font-semibold text-ink hover:border-teal hover:text-teal transition-colors"
              >
                <IconMail className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-ink-soft"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mx-auto w-full max-w-xs md:max-w-sm">
            <div className="corner-frame relative rounded-2xl bg-surface p-3 shadow-xl shadow-black/5 border border-line">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src="/profile.png"
                  alt="Portrait of Ruthvik Reddy Veerannagari"
                  fill
                  sizes="(min-width: 768px) 320px, 320px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-3 flex items-center justify-between px-1 pb-1">
                <span className="font-mono text-xs text-ink-faint">based_in: Hyderabad, IN</span>
                <span className="flex h-2 w-2 rounded-full bg-teal" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
