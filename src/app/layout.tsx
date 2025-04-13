import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafiul Refat",
  description: "MERN Stack Developer",
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
