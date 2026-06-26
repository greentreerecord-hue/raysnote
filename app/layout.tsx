import "./globals.css";

export const metadata = {
  title: "Ray'snote",
  description: "Ray'snote online publishing",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
} 
