import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/InterDisplay-Regular.ttf",
  variable: "--font-inter",
  weight: "400",
});
const monument = localFont({
  src: "./fonts/MonumentExtended-Regular.otf",
  variable: "--font-monument",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${monument.variable}`}>
        {children}
      </body>
    </html>
  );
}
