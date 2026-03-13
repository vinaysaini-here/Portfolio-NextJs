"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected builds with strong systems thinking and premium visual execution."
            description="Interactive product concepts that highlight frontend finesse, backend depth, and the ability to turn complexity into smooth user journeys."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -10, rotateX: -4, rotateY: index % 2 === 0 ? 4 : -4 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="group relative h-full rounded-[1.8rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px] shadow-card"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="glass-panel flex h-full flex-col rounded-[1.75rem] p-4">
                  <div className="relative overflow-hidden rounded-[1.3rem] border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-2 pt-6">
                    <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex gap-3">
                      <Link
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-accent"
                      >
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-accent/30 hover:bg-accent/10"
                      >
                        GitHub
                        <Github className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}