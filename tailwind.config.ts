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
        bg: "#0A0A08",
        "bg-surface": "#121210",
        "bg-elevated": "#161614",
        ink: "#0E0E0C",
        accent: {
          DEFAULT: "#C9501E",
          hover: "#E05C26",
          soft: "#2A1810"
        },
        muted: "#73726B",
        body: "#A6A59D"
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "Helvetica Neue", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
