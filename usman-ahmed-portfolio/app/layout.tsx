import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usman Ahmed — Project Manager & Team Lead | Agile Delivery Specialist",
  description:
    "Portfolio of Usman Ahmed, Project Manager and Team Lead with 2+ years of experience delivering 60+ web, e-commerce, and enterprise software projects across the UAE, Saudi Arabia, the UK, and Pakistan.",
  metadataBase: new URL("https://usmanahmed.dev"),
  keywords: [
    "Usman Ahmed",
    "Project Manager",
    "Project Team Lead",
    "Agile Delivery",
    "Scrum Master",
    "Digital Graphiks",
    "Software Delivery",
    "UAT Management",
    "Karachi",
    "Pakistan"
  ],
  authors: [{ name: "Usman Ahmed" }],
  openGraph: {
    title: "Usman Ahmed — Project Manager & Team Lead",
    description:
      "Delivered 60+ web, e-commerce, and enterprise software projects with an 80% on-time delivery rate across UAE, Saudi Arabia, UK, and Pakistan.",
    type: "website",
    locale: "en_US"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
