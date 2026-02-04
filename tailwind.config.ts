import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        earth: {
          50: "#faf6f1",
          100: "#f0e6d8",
          200: "#e0ccb0",
          300: "#cdab80",
          400: "#bd8d5a",
          500: "#b0794a",
          600: "#9a633f",
          700: "#7f4d36",
          800: "#6a4032",
          900: "#59372c",
          950: "#311b16",
        },
      },
    },
  },
  plugins: [],
};

export default config;
