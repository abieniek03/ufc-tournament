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
				background: "#1F1F23",
				content: "#FFFFFF",
				primary: "#FFFFFF",
				"primary-content": "#1F1F23",
			},
		},
	},
	plugins: [],
};
export default config;
