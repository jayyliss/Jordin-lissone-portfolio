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
        background: "#FAFAF9",
        foreground: "#111827",
        secondary: "#6B7280",
        accent: "#1E3A5F",
        divider: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "768px",
      },
    },
  },
  plugins: [],
};

export default config;
