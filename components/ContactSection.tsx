import { Reveal } from "@/components/Reveal";
import { IconMail, IconPhone, IconPin, IconGithub, IconLinkedin } from "@/components/icons";

const contactItems = [
  {
    icon: IconMail,
    label: "Email",
    value: "ruthvikreddyv@gmail.com",
    href: "mailto:ruthvikreddyv@gmail.com",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+91 90143 46193",
    href: "tel:+919014346193",
  },
  {
    icon: IconPin,
    label: "Location",
    value: "Hyderabad, India",
    href: undefined,
  },
];

const socials = [
  { icon: IconGithub, label: "GitHub", href: "https://github.com/ruthvikreddyv" },
  { icon: IconLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/ruthvik-reddy-v" },
];

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line">
      <Reveal>
        <p className="eyebrow mb-3 text-center">contact.send()</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-14 text-center">
          Get In Touch
        </h2>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16 max-w-4xl mx-auto items-start">
        <Reveal delay={100}>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink mb-2">
              Let&apos;s work together
            </h3>
            <p className="text-ink-soft mb-8 leading-relaxed">
              Open to software engineering, data science, and applied ML roles — and
              always happy to talk research, fintech, or blockchain systems.
            </p>
            <div className="space-y-4 mb-8">
              {contactItems.map((item) => {
                const Content = (
                  <div className="flex items-center gap-3 group">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-teal-tint text-teal">
                      <item.icon className="w-[18px] h-[18px]" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-ink-faint">
                        {item.label}
                      </p>
                      <p className="font-medium text-ink group-hover:text-teal transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {Content}
                  </a>
                ) : (
                  <div key={item.label}>{Content}</div>
                );
              })}
            </div>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink-soft hover:border-teal hover:text-teal transition-colors"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <form
            className="corner-frame rounded-2xl border border-line bg-surface p-7 space-y-4"
            action="mailto:ruthvikreddyv@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div>
              <label htmlFor="name" className="text-xs font-medium text-ink-soft mb-1.5 block">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-medium text-ink-soft mb-1.5 block">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-medium text-ink-soft mb-1.5 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me a bit about the opportunity or idea..."
                className="w-full resize-y rounded-lg border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-teal/40 focus:border-teal transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-white hover:bg-teal-strong transition-colors shadow-sm"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
