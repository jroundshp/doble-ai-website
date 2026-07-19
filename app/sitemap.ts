import { MetadataRoute } from "next";
import { posts } from "./lib/posts";
import { townPages } from "./lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = posts.map((post) => ({
    url: `https://dobleai.com/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationPages = townPages.map((t) => ({
    url: `https://dobleai.com/locations/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://dobleai.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://dobleai.com/es",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://dobleai.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://dobleai.com/translation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://dobleai.com/locations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...locationPages,
    ...blogPosts,
  ];
}
