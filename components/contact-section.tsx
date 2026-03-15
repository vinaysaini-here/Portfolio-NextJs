"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-space pb-16">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something ambitious and beautifully engineered."
            description="Share a product idea, collaboration, or freelance brief and start the conversation through this polished contact form."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-3xl">
          <div className="glass-panel rounded-[2rem] p-6 shadow-card sm:p-8">
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-slate-300">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm text-slate-300">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
                    required
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm text-slate-300">
                Message
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project, goals, and timeline."
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/40 focus:bg-white/10"
                  required
                />
              </label>

              <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                <p className="text-sm text-slate-400">
                  {submitted ? "Message received. Thanks for reaching out." : "Typically replies within 24 hours."}
                </p>
                <motion.button
                  type="submit"
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}