import { redirect } from "next/navigation";
import { getAllPosts, getPost } from "@/entities/post/model/post";
import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import PostDetailPage from "@/page/post-detail";

type PostProps = {
  params: {
    slug: string[];
  };
};

import type { ReactElement } from "react";

export default async function Post({
  params,
}: PostProps): Promise<ReactElement> {
  const { slug } = await params;
  const post: PostWithFrontmatterType | null = await getPost(slug);
  console.log(slug);
  if (!post) return redirect("/");

  return <PostDetailPage post={post} />;
}

export const generateStaticParams = async (): Promise<{ slug: string[] }[]> => {
  return (await getAllPosts()).map((post) => ({
    slug: post.filePath,
  }));
};
