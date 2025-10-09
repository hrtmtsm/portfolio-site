// app/layout.tsx
import type { Metadata } from "next";

// ✅ self-hosted Geist: objects with .className and .variable
import { GeistSans, GeistMono } from "geist/font";

// Inter still comes from next/font/google (this one IS a function)
import { Inter } from "next/font/google";

import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// Inter for display
const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haruto — Product Designer + Engineer",
  description: "Designing bilingual experiences bridging Japan and the U.S.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      {/* ✅ Use the .variable strings from the Geist objects */}
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable} antialiased`}>
        <Nav />
        <main className="py-12 sm:py-16 lg:py-20">
          <div className="container-edge">{children}</div>
        </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
