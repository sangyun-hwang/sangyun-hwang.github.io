import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/entities/post/model/post";
import PostDetailPage from "@/page/post-detail";

type PostProps = {
  params: {
    slug: string[];
  };
};

export default async function Post({ params }: PostProps) {
  const { slug } = await params;
  console.log("slug:", slug);
  const post = await getPost(slug);
  if (!post) notFound();

  return <PostDetailPage post={post} />;
}

export const generateStaticParams = async (): Promise<{ slug: string[] }[]> => {
  return (await getAllPosts()).map((post) => ({
    slug: post.filePath,
  }));
};
