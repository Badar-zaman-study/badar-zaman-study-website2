import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.northstarabroad.com";

  return [
    "",
    "/about",
    "/scholarships",
    "/study-abroad-guide",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-07-20"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
