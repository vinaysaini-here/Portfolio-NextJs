"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { developer } from "@/data/content";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  width: 4 + ((index * 7) % 10),
  height: 4 + ((index * 5) % 12),
  left: `${(index * 13) % 100}%`,
  top: `${(index * 17) % 100}%`,
  duration: 8 + (index % 5)
}));

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-radial-grid" />

      <motion.div
        className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accentSoft/20 blur-[110px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 -z-10 h-56 w-56 rounded-full bg-accent/10 blur-[90px]"
        animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.15, 0.6, 0.15]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.2
          }}
        />
      ))}

      <div className="container-shell">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              Premium web products with modern engineering
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-8 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              <span className="block">Vinay Saini</span>
              <span className="gradient-text mt-3 block">Full Stack Web Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              {developer.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-accent"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-accent/10"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-10 flex items-center gap-4 text-slate-400"
            >
              <Link href="#" className="rounded-full border border-white/10 p-3 transition hover:border-accent/40 hover:text-accent">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="rounded-full border border-white/10 p-3 transition hover:border-accent/40 hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto max-w-xl"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-accent/30 via-accentSoft/20 to-transparent blur-3xl" />
            <motion.div
              whileHover={{ rotateX: -4, rotateY: 5, y: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="glass-panel relative overflow-hidden rounded-[2rem] border-white/15 p-4 shadow-card"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-x-6 top-5 flex items-center justify-between text-xs text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                  Available for ambitious builds
                </span>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-300">
                  Online
                </span>
              </div>
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 pt-14">
                <Image
                  src={developer.image}
                  alt="Vinay Saini working on a laptop in a modern workspace"
                  width={900}
                  height={1100}
                  priority
                  className="h-[560px] w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-6">
                  <p className="font-display text-2xl font-semibold text-white">{developer.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{developer.title}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}