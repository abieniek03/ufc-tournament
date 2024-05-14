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
        content: "#FFFFFF",
        primary: "#FFFFFF",
        "primary-content": "#1F1F23",
        lights: "#3065C1",
      },
    },
  },
  plugins: [],
};
export default config;
