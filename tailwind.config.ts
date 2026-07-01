import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        butter: "#FAF3E4",
        sand: "#F2E7C9",
        ink: "#2A2430",
        plum: "#6B3550",
        mustard: "#D19A3E",
        warmgray: "#8A7F6E",
        body: "#4A4238",
        hairline: "#E4D8B8",
        placeholder: "#E4D8B8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        sans: ["var(--font-inter)"],
        mono: ["var(--font-plex-mono)"],
      },
      maxWidth: {
        page: "760px",
      },
    },
  },
  plugins: [],
};

export default config;
