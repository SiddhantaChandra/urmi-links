import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = localFont({
  src: [
    { path: "./fonts/serif-roman.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/serif-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  fallback: ["Georgia"],
});

const notoSerifJP = localFont({
  src: "./fonts/noto-serif-jp-subset.woff2",
  variable: "--font-noto-serif-jp",
  weight: "400",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

const sans = localFont({
  src: "./fonts/sans-roman.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
  fallback: ["Arial"],
});

export const metadata: Metadata = {
  title: "Urmi’s Links | Anime · Manga · Pop Culture",
  description: "Official link-in-bio for Urmi — Anime reviews, manga recommendations, and Japanese pop culture content.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${notoSerifJP.variable} ${sans.variable}`}
    >
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
