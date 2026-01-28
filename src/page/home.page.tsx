import Link from "next/link";
import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { PostCard } from "@/entities/post/ui/post/post-card";
import { PostTitle } from "@/entities/post/ui/post/post-title";
import { cn } from "@/shared/utils/cn";

type PostPageProps = {
  posts: PostWithFrontmatterType[];
};

const HomePage = ({ posts }: PostPageProps) => {
  return (
    <main className={cn("md:max-w-3xl md:mx-auto")}>
      <PostTitle title="개발자 황상윤의 블로그입니다." />
      <br />
      <div className="w-full flex justify-end">
        <Link
          href="/posts"
          className="-tracking-widest text-gray-400 hover:text-gray-600 hover:font-semibold"
        >
          모든 글 보기
        </Link>
      </div>
      <ul className={cn("list-none p-0")}>
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
