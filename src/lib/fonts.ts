import { Cairo, Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const rootFontClassName = [
  geistSans.variable,
  geistMono.variable,
  cormorant.variable,
  cairo.variable,
].join(" ");
