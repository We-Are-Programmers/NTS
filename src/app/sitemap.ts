import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nexttechsoul.com",
      lastModified: new Date(),
    },
    {
      url: "https://nexttechsoul.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://nexttechsoul.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://nexttechsoul.com/contact",
      lastModified: new Date(),
    },
  ];
}
