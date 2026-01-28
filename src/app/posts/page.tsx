import { getAllPosts } from "@/entities/post/model/post";
import PostPage from "@/page/posts.page";

export default async function Home() {
  const posts = await getAllPosts();

  return <PostPage posts={posts} />;
}
