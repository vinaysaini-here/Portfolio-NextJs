"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { developer, navItems } from "@/data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-4">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className={`glass-panel flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
            scrolled ? "border-white/15 bg-slate-950/70 shadow-glow" : "bg-white/5"
          }`}
        >
          <Link href="#home" className="font-display text-lg font-semibold tracking-[0.2em] text-white">
            {developer.name}
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent/20"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex rounded-full border border-white/10 p-2 text-slate-200 md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="glass-panel mt-3 rounded-3xl p-5 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}