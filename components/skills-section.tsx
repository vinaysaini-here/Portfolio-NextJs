"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/content";

export function SkillsSection() {
  return (
    <section id="skills" className="section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A stack designed for speed, maintainability, and modern product delivery."
            description="From immersive frontend experiences to resilient backend systems, each tool is chosen to support scalable execution."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.08}>
              <div className="glass-panel rounded-[1.75rem] p-6 shadow-card sm:p-7">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold text-white">{group.title}</h3>
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-accent">
                    {group.skills.length} tools
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                        className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-accent/30 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-3 text-accent shadow-glow transition group-hover:border-accent/30">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-white">{skill.name}</p>
                            <p className="text-sm text-slate-400">Modern production workflow</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}