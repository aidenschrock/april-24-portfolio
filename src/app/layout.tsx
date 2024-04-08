import type { Metadata } from "next";
import { Overpass_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const overpass = Overpass_Mono({
  subsets: ["latin"],
  variable: "--font-overpass",
});

const dirty = localFont({
  src: "./dirtyline.ttf",
  display: "swap",
  variable: "--font-dirty",
});

export const metadata: Metadata = {
  title: "Aiden Schrock",
  description:
    "Creative developer based in Austin, TX | Animations, Web Development, 3D Models",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overpass.variable} ${dirty.variable}`}>
        {children}
      </body>
    </html>
  );
}
