import { getAllPosts } from "@/entities/post/model/post";
import HomePage from "@/page/home-page";

export default async function Home() {
  const posts = await getAllPosts();

  return <HomePage posts={posts} />;
}
