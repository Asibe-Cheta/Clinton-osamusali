import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sali Clinton | Official Website",
  description:
    "Official website of Sali Clinton — Recording Artist, Songwriter, and Bassist. Afrobeats, R&B, Pop, and contemporary African music.",
  keywords: ["Sali Clinton", "Clinton Osamusali", "Nigerian musician", "Afrobeats", "R&B", "UK artist"],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/brand/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/brand/favicon.png",
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sali Clinton | Official Website",
    description:
      "Recording artist, songwriter, and bassist whose music blends Afrobeats, R&B, Pop, and contemporary African influences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
