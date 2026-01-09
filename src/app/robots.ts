import type { MetadataRoute } from "next";
import { BASE_URL } from "@/shared/config/constant";

const BASE_URL = "https://sangyun-hwang.github.io/";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}