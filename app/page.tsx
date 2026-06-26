import "./globals.css";

export const metadata = {
  title: "Ray'snote",
  description: "Ray'snote online publishing",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 
