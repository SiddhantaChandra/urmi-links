import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Urmi Chakraborty | Official Links",
    short_name: "Urmi’s Links",
    description: "Official links, media kit, writing, and social channels for Urmi Chakraborty (@uwummie).",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f8f5ee",
    theme_color: "#f8f5ee",
    icons: [
      { src: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
