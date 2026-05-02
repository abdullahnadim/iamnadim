import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

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
      </body>
    </html>
  );
}