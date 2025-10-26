// src/app/layout.tsx
import React from "react";

export const metadata = {
  title: 'ClickShift - Investor Deck',
  description: 'The Bloomberg Terminal for DeFi - Building the Prediction Intelligence Protocol',
};

// Layout must accept `children` prop
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
