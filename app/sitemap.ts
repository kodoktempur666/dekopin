import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://dekopinwiljateng.id",
      lastModified: "2025-07-09T13:30:00Z",
      changeFrequency: "hourly", // sebelumnya "minutely"
      priority: 1,
    },
    {
      url: "https://dekopinwiljateng.id/about",
      lastModified: "2025-07-09T13:30:00Z",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://dekopinwiljateng.id/e-learning",
      lastModified: "2025-07-09T13:30:00Z",
      changeFrequency: "hourly", // sebelumnya "minutely"
      priority: 0.7,
    },
    {
      url: "https://dekopinwiljateng.id/membership",
      lastModified: "2025-07-09T13:30:00Z",
      changeFrequency: "hourly", // sebelumnya "minutely"
      priority: 0.7,
    },
    {
      url: "https://dekopinwiljateng.id/temu-bisnis",
      lastModified: "2025-07-09T13:30:00Z",
      changeFrequency: "hourly", // sebelumnya "minutely"
      priority: 0.7,
    },
    {
      url: "https://dekopinwiljateng.id/news",
      lastModified: "2025-07-09T13:30:00Z",
      changeFrequency: "hourly", // sebelumnya "minutely"
      priority: 0.7,
    },
    {
      url: "https://dekopinwiljateng.id/products",
      lastModified: "2025-07-09T13:30:00Z",
      changeFrequency: "hourly", // sebelumnya "minutely"
      priority: 0.7,
    },
    {
      url: "https://dekopinwiljateng.id/program-kerja",
      lastModified: "2025-07-09T13:30:00Z",
      changeFrequency: "hourly", // sebelumnya "minutely"
      priority: 0.7,
    },
  ];
}
