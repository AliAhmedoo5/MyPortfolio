import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Ahmed — High-Velocity Software Engineer",
  description:
    "Building production-ready mobile and web applications with modern AI-driven development methodologies. Flutter, React, Kotlin — architected for scale, shipped at velocity.",
  keywords: [
    "Ali Ahmed",
    "Software Engineer",
    "Flutter Developer",
    "React Developer",
    "Kotlin Developer",
    "Mobile App Development",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ali Ahmed" }],
  openGraph: {
    title: "Ali Ahmed — High-Velocity Software Engineer",
    description:
      "Building production-ready mobile and web applications with modern AI-driven development methodologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Ahmed — High-Velocity Software Engineer",
    description:
      "Building production-ready mobile and web applications with modern AI-driven development methodologies.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${outfit.variable} ${firaCode.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
