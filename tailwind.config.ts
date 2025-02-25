import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dirty: ["var(--font-dirty)"],
        zodiak: ["var(--font-zodiak)"],
        zodiakItalic: ["var(--font-zodiak-italic)"],
        oxygenLight: ["var(--font-oxygen-light)"],
        oxygen: ["var(--font-oxygen)"],
        oxygenBold: ["var(--font-oxygen-bold)"],
      },
      colors: {
        primary: "#b32950",
      },
    },
  },
  plugins: [],
};
export default config;
