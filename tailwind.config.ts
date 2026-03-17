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
        background: "#1A1007",
        foreground: "#F5F0E8",
        secondary: "#A89880",
        accent: "#C8901E",
        "accent-light": "#3A2A0E",
        divider: "#2E2318",
        "hero-dark": "#1A1007",
        "hero-text": "#F5F0E8",
        "hero-muted": "#A89880",
      },
      fontFamily: {
        sans: [
          "var(--font-geist)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "720px",
      },
    },
  },
  plugins: [],
};

export default config;
