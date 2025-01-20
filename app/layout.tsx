import "./globals.css";
import { ReactNode } from "react"; 
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Nahom | Personal Site",
  description: "Nahom. Personal site. Portfolio. Resume. Projects.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}

