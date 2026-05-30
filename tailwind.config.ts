import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0f",
        accent: {
          cyan: "#00d4ff",
          purple: "#7c3aed",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-mesh":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 212, 255, 0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(124, 58, 237, 0.12), transparent), radial-gradient(ellipse 50% 30% at 20% 80%, rgba(0, 212, 255, 0.08), transparent)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 212, 255, 0.15)",
        "glow-purple": "0 0 30px rgba(124, 58, 237, 0.15)",
        "glow-hover":
          "0 0 40px rgba(0, 212, 255, 0.25), 0 0 60px rgba(124, 58, 237, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
