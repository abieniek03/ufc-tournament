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
        background: "#010918",
        hover: "#051021",
        content: "#FFFFFF",
        primary: "#FFFFFF",
        "primary-content": "#1F1F23",
        lights: "#3065C1",
        error: "#ef4444",
        gold: "#D4AF37",
      },
    },
  },
  plugins: [],
};
export default config;
