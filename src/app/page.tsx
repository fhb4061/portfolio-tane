import type { Metadata } from "next";

import { portfolioContent } from "@/app/portfolio-data";

export const metadata: Metadata = {
  title: "Jonathan Lopeti | Senior Full-Stack Engineer",
  description:
    "Portfolio of Jonathan Lopeti, a Senior Full-Stack Engineer and full-stack developer building reliable web software.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-10 border-b border-border/60 bg-background/90 backdrop-blur">
        <nav aria-label="Section navigation" className="mx-auto w-full max-w-3xl overflow-x-auto px-5 sm:px-8">
          <ul className="flex min-w-max items-center gap-2 py-3 text-sm">
            {portfolioContent.navItems.map((item) => (
              <li key={item.id}>
                <a
                  className="rounded-full border border-border/70 px-3 py-1.5 text-muted-foreground transition hover:text-foreground"
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-14 px-5 py-14 sm:px-8 sm:py-20">
        <section id="hero" className="space-y-5 scroll-mt-20">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">{portfolioContent.name}</p>
          <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">{portfolioContent.headline}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {portfolioContent.heroSummary}
          </p>
        </section>

        <section id="about" className="space-y-3 scroll-mt-20">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-base leading-relaxed text-muted-foreground">{portfolioContent.about}</p>
        </section>

        <section id="skills" className="space-y-3 scroll-mt-20">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="grid gap-2 text-muted-foreground sm:grid-cols-2">
            {portfolioContent.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="experience" className="space-y-3 scroll-mt-20">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p className="text-base leading-relaxed text-muted-foreground">{portfolioContent.experienceSummary}</p>
        </section>

        <section id="certs-awards" className="space-y-3 scroll-mt-20">
          <h2 className="text-2xl font-semibold">Certs & Awards</h2>
          <p className="text-base leading-relaxed text-muted-foreground">{portfolioContent.certificationsSummary}</p>
        </section>

        <section id="contact" className="space-y-3 pb-6 scroll-mt-20">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-base leading-relaxed text-muted-foreground">Recruiter-friendly contact methods:</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              Email:{" "}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href={`mailto:${portfolioContent.contact.email}`}
              >
                {portfolioContent.contact.email}
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href={portfolioContent.contact.linkedinUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {portfolioContent.contact.linkedinLabel}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
