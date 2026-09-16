import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usman Ahmed — Project Team Lead",
  description:
    "Personal portfolio of Usman Ahmed, Project Team Lead specialising in digital project delivery, Agile coordination and stakeholder management.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Usman Ahmed — Project Team Lead",
    description: "Project management, digital delivery and selected work.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}