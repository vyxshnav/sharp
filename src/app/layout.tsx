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
  metadataBase: new URL("https://frontend-omega-ten-69.vercel.app"),
  title: "Sharp Polymers | AI-Optimized Polymer Manufacturing",
  description: "Sharp Polymers delivers AI-optimized OEM polymer manufacturing, injection moulding, and contract manufacturing from Bangalore.",
  openGraph: {
    title: "Sharp Polymers | AI-Optimized Polymer Manufacturing",
    description: "Sharp Polymers delivers AI-optimized OEM polymer manufacturing, injection moulding, and contract manufacturing from Bangalore.",
    siteName: "Sharp Polymers",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/sharporgbanner.jpg",
        width: 1200,
        height: 630,
        alt: "Sharp Polymers AI driven manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharp Polymers | AI-Optimized Polymer Manufacturing",
    description: "AI-optimized OEM polymer manufacturing and injection moulding solutions from Bangalore.",
    images: ["/sharporgbanner.jpg"],
  },
  keywords: [
    "Sharp Polymers",
    "polymer manufacturing",
    "injection moulding",
    "contract manufacturing",
    "AI manufacturing",
    "OEM solutions",
    "medical device manufacturing",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/sharpLogo (1).png",
    apple: "/sharpLogo (1).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
