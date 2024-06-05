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
        background: "#0e0e11",
        input: "#18181b",
        primary: {
          "50": "#fbffe7",
          "100": "#f3ffc1",
          "200": "#ebff86",
          "300": "#e8ff41",
          "400": "#edff0d",
          "500": "#faff00",
          "600": "#fcff33",
          "700": "#a68e02",
          "800": "#896e0a",
          "900": "#745a0f",
          "950": "#443104",
          content: "#000000",
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
