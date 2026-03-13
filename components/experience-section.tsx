import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { journey } from "@/data/content";

export function ExperienceSection() {
  return (
    <section id="journey" className="section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="A progression shaped by curiosity, craft, and product-minded engineering."
            description="A concise timeline of how the work evolved from foundational frontend exploration into complete, modern digital product delivery."
          />
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-white/15 to-transparent sm:block" />

          <div className="space-y-8">
            {journey.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08}>
                <div className="grid gap-4 sm:grid-cols-[80px_1fr] sm:gap-8">
                  <div className="relative flex items-start">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-semibold text-accent shadow-glow">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="glass-panel rounded-[1.5rem] p-6 shadow-card">
                    <span className="text-sm uppercase tracking-[0.3em] text-accent">{item.year}</span>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}