import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const oxygenLight = Oxygen({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-oxygen-light",
});

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-oxygen",
});

const oxygenBold = Oxygen({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-oxygen-bold",
});

const dirty = localFont({
  src: "./dirtyline.ttf",
  display: "swap",
  variable: "--font-dirty",
});

const zodiak = localFont({
  src: "./zodiak-variable.ttf",
  display: "swap",
  variable: "--font-zodiak",
});
const zodiakItalic = localFont({
  src: "./zodiak-variable-italic.ttf",
  display: "swap",
  variable: "--font-zodiak-italic",
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
      <body
        className={`${oxygenLight.variable} ${oxygen.variable} ${oxygenBold.variable} ${dirty.variable} ${zodiak.variable} ${zodiakItalic.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
