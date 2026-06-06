import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rajeshkumar.is-a.dev";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add more routes as you add pages like /blog, /projects-archive, etc.
  ];
}
