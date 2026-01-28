import { notFound } from "next/navigation";
import { parseToc } from "@/entities/post/lib/utils/toc.util";
import { getAllPosts, getPost } from "@/entities/post/model/post";
import PostDetailPage from "@/page/post.page";

type PostProps = {
  params: {
    slug: string[];
  };
};

export default async function Post({ params }: PostProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const toc = parseToc(post.content);

  return <PostDetailPage post={post} toc={toc} />;
}

export const generateStaticParams = async (): Promise<{ slug: string[] }[]> => {
  return (await getAllPosts()).map((post) => ({
    slug: post.filePath,
  }));
};
