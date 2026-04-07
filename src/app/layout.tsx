import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ketan Ayatti — Full-Stack and DevOps Expertise",
  description:
    "Full-stack and DevOps expertise portfolio focused on product delivery and implementation work. Based in Bengaluru.",
  keywords: [
    "Full-Stack",
    "DevOps",
    "Expertise",
    "Product Delivery",
    "Implementation",
    "Portfolio",
    "Backend Engineer",
    "Software Developer",
    "REST APIs",
    "Docker",
    "Linux",
    "Bengaluru",
    "India",
  ],
  authors: [{ name: "Ketan Ayatti" }],
  openGraph: {
    title: "Ketan Ayatti — Full-Stack and DevOps Expertise",
    description:
      "Full-stack and DevOps expertise portfolio focused on product delivery and implementation work.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
