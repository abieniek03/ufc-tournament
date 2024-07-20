import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

import { IChildren as Props } from "./_types/types";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Providers from "./_hoc/Providers";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
          colorBackground: "#06061b",
          colorInputBackground: "#0b0b1d",
          colorPrimary: "#0066ff",
          colorTextOnPrimaryBackground: "#ffffff",
        },
      }}
    >
      <html lang="en" className="scroll-smooth">
        <body className={`${font.className} bg-background text-content`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
