import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ray'snote",
  description: "Independent online publishing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 
