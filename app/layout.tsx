import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/providers";
import PlausibleProvider from "next-plausible";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mado | Application de rencontre sérieuse",
  description:
    "Mado est une application de rencontre sérieuse pour les personnes qui cherchent un partenaire de vie. Elle est conçue pour les personnes qui cherchent une relation stable et durable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <PlausibleProvider
          domain="madoapp.fr"
          scriptProps={{
            src: "https://plausible.io/js/pa-QmRiRQCKN0IxmXOkO4IHd.js",
          }}
        />
      </head>
      <body
        className={cn("antialiased", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
