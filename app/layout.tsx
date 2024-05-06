import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { IChildren as Props } from "./_types/types";

const font = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "UFC Game Tournament",
	description: "Application for following tournaments in UFC game.",
};

export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html lang="en">
			<body className={`${font.className}`}>{children}</body>
		</html>
	);
}
