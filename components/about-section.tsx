import Image from "next/image";
import { developer } from "@/data/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Engineering thoughtful products with speed, scale, and polish."
            description="A modern full stack approach grounded in clean systems, strong UX instincts, and maintainable architecture."
          />
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.1}>
            <div className="glass-panel overflow-hidden rounded-[1.75rem] p-4 shadow-card">
              <div className="overflow-hidden rounded-[1.25rem] border border-white/10">
                <Image
                  src={developer.image}
                  alt="Portrait of Vinay Saini in a modern workspace"
                  width={800}
                  height={920}
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass-panel rounded-[1.75rem] p-8 shadow-card sm:p-10">
              <p className="text-lg leading-8 text-slate-300">{developer.about}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-white">4+</p>
                  <p className="mt-2 text-sm text-slate-400">Years building for the web</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-white">12+</p>
                  <p className="mt-2 text-sm text-slate-400">Modern apps and systems delivered</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-white">100%</p>
                  <p className="mt-2 text-sm text-slate-400">Focus on performance and UX quality</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}