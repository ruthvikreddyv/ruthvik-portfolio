import { Reveal } from "@/components/Reveal";
import { IconDownload, IconEye } from "@/components/icons";

const documents = [
  {
    label: "Curriculum Vitae",
    description: "Full academic CV — research objective, education record, and project supervisors.",
    file: "/Ruthvik_CV.pdf",
    primary: true,
  },
  {
    label: "Résumé",
    description: "One-page summary tailored for software and data roles.",
    file: "/Ruthvik_Resume.pdf",
    primary: false,
  },
];

export function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line">
      <Reveal>
        <p className="eyebrow mb-3 text-center">resume.pdf</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-center">
          Resume &amp; CV
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="text-ink-soft text-center max-w-xl mx-auto mb-12">
          Get the complete picture — detailed experience, research, education, and
          skills — as a CV or a one-page résumé.
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
        {documents.map((doc, i) => (
          <Reveal key={doc.file} delay={150 + i * 100}>
            <div
              className={`corner-frame h-full rounded-2xl border p-7 flex flex-col ${
                doc.primary
                  ? "border-teal/40 bg-teal-tint"
                  : "border-line bg-surface"
              }`}
            >
              <h3 className="font-display text-xl font-semibold text-ink mb-2">{doc.label}</h3>
              <p className="text-sm text-ink-soft mb-6 flex-1">{doc.description}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line-strong px-4 py-2.5 text-sm font-semibold text-ink hover:border-teal hover:text-teal transition-colors"
                >
                  <IconEye className="w-4 h-4" />
                  View
                </a>
                <a
                  href={doc.file}
                  download
                  className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                    doc.primary
                      ? "bg-teal text-white hover:bg-teal-strong"
                      : "bg-ink text-paper hover:bg-teal"
                  }`}
                >
                  <IconDownload className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
