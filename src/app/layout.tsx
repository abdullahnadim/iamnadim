import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';
import { SmoothScroll } from "@/components/providers/SmoothScroll";

// LIGHTHOUSE FIX: Deferring heavy interactive overlays until after initial paint
const CommandTerminal = dynamic(() => import("@/components/ui/CommandTerminal").then(mod => mod.CommandTerminal), { ssr: false });
const CommsLink = dynamic(() => import("@/components/ui/CommsLink").then(mod => mod.CommsLink), { ssr: false });
const BackToTop = dynamic(() => import("@/components/ui/BackToTop").then(mod => mod.BackToTop), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah Nadim | Multi-Disciplinary Digital Professional",
  description: "Portfolio of a premium Website Developer, Digital Marketer, Graphic Designer, and Video Editor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        
        {/* Global Floating Modules - Now Lazy Loaded */}
        <CommandTerminal />
        <CommsLink />
        <BackToTop />
        
      </body>
    </html>
  );
}