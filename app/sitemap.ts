import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified rather than report a new content date on every build.
  return [{ url: "https://links.urmichakraborty.com/" }];
}
