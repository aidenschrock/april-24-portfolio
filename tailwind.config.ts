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
        oxygenLight: ["var(--font-oxygen-light)"],
        oxygen: ["var(--font-oxygen)"],
        oxygenBold: ["var(--font-oxygen-bold)"],
      },
    },
  },
  plugins: [],
};
export default config;
