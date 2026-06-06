import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajeshkumar S | Product Engineer | Scalable Web Solutions",
  description:
    "Product Engineer specializing in architecting high-performance web systems and AI-integrated applications that drive business value. Expert in React, Next.js, and Node.js.",
  keywords: [
    "Rajeshkumar S",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "AI Engineer",
    "SaaS Developer",
    "Web Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Rajeshkumar S" }],
  creator: "Rajeshkumar S",
  metadataBase: new URL("https://rajeshkumar.is-a.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajeshkumar.is-a.dev",
    title:
      "Rajeshkumar S | Full Stack Developer | React, Next.js & AI Engineer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, AI integrations, and scalable web applications.",
    siteName: "Rajeshkumar S Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajeshkumar S - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rajeshkumar S | Full Stack Developer | React, Next.js & AI Engineer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, AI integrations, and scalable web applications.",
    images: ["/og-image.png"],
    creator: "@rajeshkumar2002",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: { url: "/favicon.svg", type: "image/svg+xml" },
  },
};

export const viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
