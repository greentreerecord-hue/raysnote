import "./globals.css";

export const metadata = {
  title: "Ray'snote",
  description: "Independent online publishing",
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
