import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajeshkumar S | Software Engineer Portfolio",
  description:
    "Portfolio of Rajeshkumar S - Passionate Software Engineer crafting innovative digital solutions with modern technologies. Explore my projects, skills, and experience.",
  keywords: [
    "Rajeshkumar S",
    "Software Engineer",
    "Portfolio",
    "Web Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "TamilNadu",
    "India",
  ],
  authors: [{ name: "Rajeshkumar S" }],
  creator: "Rajeshkumar S",
  metadataBase: new URL("https://rajeshkumar.is-a.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajeshkumar.is-a.dev",
    title: "Rajeshkumar S | Software Engineer Portfolio",
    description:
      "Portfolio of Rajeshkumar S - Passionate Software Engineer crafting innovative digital solutions with modern technologies.",
    siteName: "Rajeshkumar S Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajeshkumar S | Software Engineer Portfolio",
    description:
      "Portfolio of Rajeshkumar S - Passionate Software Engineer crafting innovative digital solutions with modern technologies.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: { url: "/favicon.svg", type: "image/svg+xml" },
  },
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
        {children}
      </body>
    </html>
  );
}
