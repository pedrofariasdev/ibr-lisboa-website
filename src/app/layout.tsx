import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getLiveData } from "@/lib/live";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IBR Lisboa",
    template: "%s | IBR Lisboa",
  },
  description:
    "Uma comunidade de fé, comunhão e transformação em Lisboa.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const live = await getLiveData();

  return (
    <html
      lang="pt-PT"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >
      <body
        className="
          flex
          min-h-full
          flex-col
          bg-black
        "
      >
        <Navbar live={live} />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}