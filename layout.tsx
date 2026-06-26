import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ray'snote",
  description: "Independent online publishing by Ray'snote",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 
