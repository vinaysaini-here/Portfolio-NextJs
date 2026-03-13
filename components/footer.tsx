import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { developer } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8">
      <div className="container-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-400">Â© {developer.name}</p>
        <div className="flex items-center gap-3 text-slate-400">
          <Link href="https://github.com/vinaysaini-here" aria-label="GitHub" className="rounded-full border border-white/10 p-3 transition hover:border-accent/30 hover:text-accent">
            <Github className="h-4 w-4" />
          </Link>
          <Link href="https://www.linkedin.com/in/vinay-saini-aa85942b1/" aria-label="LinkedIn" className="rounded-full border border-white/10 p-3 transition hover:border-accent/30 hover:text-accent">
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link href="https://x.com/ViNaYSaiNi01" aria-label="Twitter" className="rounded-full border border-white/10 p-3 transition hover:border-accent/30 hover:text-accent">
            <Twitter className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}