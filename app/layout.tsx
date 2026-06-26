import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ray'sStream",
  description: "Ray'sStream",
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

