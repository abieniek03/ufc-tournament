import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Children as Props } from "./_types/types";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const font = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: {
    template: "%s | UFC Game Tournament",
    default: "UFC Game Tournament",
  },
  description: "Application for following tournaments in UFC game.",
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: "#010918",
          colorInputBackground: "#090F1B",
        },
      }}
    >
      <html lang="en">
        <body className={`${font.className} bg-background text-content`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
