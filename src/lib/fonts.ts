import { Bebas_Neue, Cairo, Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
});

export const rootFontClassName = [
  geistSans.variable,
  geistMono.variable,
  bebasNeue.variable,
  cairo.variable,
].join(" ");
