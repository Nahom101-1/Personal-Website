import "./globals.css";
import { ReactNode } from "react"; // Importing types for better type safety

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
    </html>
  );
}

