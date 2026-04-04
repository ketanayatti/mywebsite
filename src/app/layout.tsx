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
  title: "Ketan Ayatti — DevOps Engineer | AWS · Docker · Kubernetes",
  description:
    "DevOps Engineer building self-healing infrastructure, CI/CD pipelines, and cloud-native systems on AWS. Open to full-time Full-Stack / DevOps / Cloud roles. Based in Bengaluru.",
  keywords: [
    "DevOps Engineer",
    "SRE",
    "Cloud Engineer",
    "Infrastructure Engineer",
    "CI/CD",
    "Docker",
    "AWS",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "Linux",
    "Bengaluru",
    "India",
  ],
  authors: [{ name: "Ketan Ayatti" }],
  openGraph: {
    title: "Ketan Ayatti — DevOps Engineer",
    description:
      "I built a deployment platform that fixes itself. Then ran an LLM on AWS for $0/month.",
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
