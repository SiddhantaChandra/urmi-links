import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://links.urmichakraborty.com"),
  title: "Urmi Chakraborty (@uwummie) | Official Links & Media Kit",
  description: "Official links, media kit, writing, and social channels for Urmi Chakraborty (@uwummie). Anime reviews, manga recommendations, and Japanese pop culture.",
  alternates: { canonical: "/" },
  authors: [{ name: "Urmi Chakraborty", url: "https://www.urmichakraborty.com" }],
  creator: "Urmi Chakraborty",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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

export const viewport: Viewport = {
  themeColor: "#f8f5ee",
  colorScheme: "light",
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
