import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#060816",
        panel: "#0c1224",
        line: "rgba(148, 163, 184, 0.14)",
        accent: "#4df6c3",
        accentSoft: "#7c5cff",
        text: "#f8fafc",
        muted: "#94a3b8"
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        display: ["var(--font-sora)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(77, 246, 195, 0.24), 0 18px 60px rgba(77, 246, 195, 0.16)",
        card: "0 24px 70px rgba(2, 6, 23, 0.45)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at top, rgba(124, 92, 255, 0.18), transparent 34%), radial-gradient(circle at bottom right, rgba(77, 246, 195, 0.12), transparent 28%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
        marquee: "marquee 18s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;