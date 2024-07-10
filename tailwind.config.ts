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
        background: "#06061b",
        input: "#17172c",
        primary: {
          "50": "#edf8ff",
          "100": "#d6efff",
          "200": "#b5e4ff",
          "300": "#48bcff",
          "400": "#067aff",
          "500": "#0066ff",
          "700": "#084ec5",
          "900": "#0d469b",
          "950": "#0e2b5d",
          content: "#ffffff",
        },
        border: {
          DEFAULT: "#ffffff1c",
          active: "#dddddd",
        },
        content: "#ffffff",
        error: "#ef4444",
        gold: "#d4af37",
      },
    },
  },
  plugins: [],
};
export default config;
