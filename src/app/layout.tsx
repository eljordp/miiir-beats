import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://miiir-beats.vercel.app"),
  title: { default: "Miiir | Bay Area Producer", template: "%s | Miiir" },
  description:
    "Browse and license beats from Miiir — Bay Area producer with 107M+ streams. Monthly deals: $70 leases, $60 each for two or more, and $400 custom exclusives.",
  openGraph: {
    title: "Miiir Beats",
    description: "Beats and custom production from Miiir. Monthly lease and custom-exclusive deals.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
