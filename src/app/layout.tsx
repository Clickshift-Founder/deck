// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// --- UPDATED METADATA ---
export const metadata: Metadata = {
  // 1. Standard SEO (Tab Title and Search Snippet)
  title: "ClickShift - Investor Deck: The Prediction Intelligence Protocol",
  description: "A comprehensive pitch deck for ClickShift: Building the Bloomberg Terminal for Decentralized Finance (DeFi).",

  // 2. Favicon (for the browser tab icon)
  icons: {
    icon: '/favicon.ico', // Assumes favicon.ico is in your public folder
  },

  // 3. Open Graph (for link sharing on platforms like Twitter, Facebook, LinkedIn)
  openGraph: {
    title: "ClickShift Investor Deck",
    description: "The Bloomberg Terminal for DeFi - See our Vision for the Prediction Intelligence Protocol.",
    url: 'https://deck.clickshift.io',
    siteName: 'ClickShift',
    images: [
      {
        url: '/logo.png', // Assumes logo.png is in your public folder
        width: 1200,
        height: 630,
        alt: 'ClickShift Pitch Deck Preview Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 4. Twitter Card (for sharing on Twitter/X)
  twitter: {
    card: 'summary_large_image', // Best for sharing with an image
    title: "ClickShift Investor Deck",
    description: "The Bloomberg Terminal for DeFi - See our Vision.",
    creator: '@YourTwitterHandle', // Optional: Your company's Twitter handle
    images: ['/logo.png'], // Assumes logo.png is in your public folder
  },
};
// --- END UPDATED METADATA ---


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}