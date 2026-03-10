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
  title: "Ketan Ayatti | DevOps Engineer",
  description:
    "DevOps Engineer building scalable infrastructure, automated deployment systems, and resilient cloud platforms. Specializing in CI/CD, Docker, AWS, and cloud-native architecture.",
  keywords: [
    "DevOps Engineer",
    "Cloud Engineer",
    "CI/CD",
    "Docker",
    "AWS",
    "Infrastructure",
    "Ketan Ayatti",
  ],
  authors: [{ name: "Ketan Ayatti" }],
  openGraph: {
    title: "Ketan Ayatti | DevOps Engineer",
    description:
      "DevOps Engineer building scalable infrastructure and automated deployment systems.",
    type: "website",
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
