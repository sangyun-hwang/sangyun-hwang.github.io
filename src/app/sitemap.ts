import type { MetadataRoute } from "next";
import { getAllPosts } from "@/entities/post/model/post";
import { BASE_URL } from "@/shared/config/constant";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = BASE_URL;

  const posts = await getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.filePath.join("/")}`,
    lastModified: post.releaseDate,
  }));
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
