// src/app/layout.tsx
import React from "react";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: 'ClickShift - Investor Deck',
  description: 'The Bloomberg Terminal for DeFi - Building the Prediction Intelligence Protocol',
};

// Import fonts here
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
