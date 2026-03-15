import {
  Blocks,
  BriefcaseBusiness,
  Database,
  Box,
  Figma,
  FileCode2,
  GitBranch,
  Globe,
  MonitorSmartphone,
  ServerCog,
  TerminalSquare
} from "lucide-react";

export const developer = {
  name: "Vinay Saini",
  title: "Full Stack Web Developer",
  tagline:
    "I build scalable, high-performance, and modern web applications with clean architecture and smooth user experiences.",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  about:
    "I am a passionate Full Stack Web Developer who enjoys crafting modern web applications, scalable systems, and elegant user interfaces. I blend strong engineering fundamentals with a product mindset to create fast, reliable, and delightful digital experiences."
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" }
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: MonitorSmartphone },
      { name: "Next.js", icon: Globe },
      { name: "JavaScript", icon: FileCode2 },
      { name: "TypeScript", icon: Blocks },
      { name: "Tailwind CSS", icon: Figma }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: ServerCog },
      { name: "Express.js", icon: TerminalSquare },
      { name: "REST APIs", icon: BriefcaseBusiness }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Box },
      { name: "VS Code", icon: FileCode2 }
    ]
  }
];

export const projects = [
  {
    title: "Velocity Commerce",
    description:
      "A composable storefront experience with blazing-fast product discovery, advanced filtering, and a conversion-first checkout flow.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/vinaysaini-here"
  },
  {
    title: "OpsPulse Dashboard",
    description:
      "A real-time observability dashboard that helps distributed teams monitor deployments, incidents, and key system metrics in one place.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "WebSockets", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/vinaysaini-here"
  },
  {
    title: "StudioFlow CMS",
    description:
      "A collaborative content platform designed for creative teams with structured publishing workflows and rich media management.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Tailwind", "Express", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com/vinaysaini-here"
  }
];

export const journey = [
  {
    year: "2023",
    title: "Started the Development Journey",
    description:
      "Began building web interfaces and experimenting with frontend fundamentals, UI systems, and interactive experiences."
  },
  {
    year: "2024",
    title: "Expanded Into Full Stack Engineering",
    description:
      "Moved into backend development, APIs, and databases while shipping end-to-end applications with stronger architecture."
  },
  {
    year: "2025",
    title: "Focused on Scalable Product Development",
    description:
      "Delivered production-ready apps with clean codebases, reusable systems, and performance-first engineering decisions."
  },
  {
    year: "2026",
    title: "Building Premium Digital Experiences",
    description:
      "Combining modern frameworks, motion design, and platform thinking to craft memorable, high-end web products."
  }
];
