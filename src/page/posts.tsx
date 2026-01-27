import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { PostCard } from "@/entities/post/ui/post/post-card";
import { PostTitle } from "@/entities/post/ui/post/post-title";
import { Breadcrumb } from "@/shared/common-ui/breadcrumb";
import { cn } from "@/shared/utils/cn";

type PostPageProps = {
  posts: PostWithFrontmatterType[];
};

const PostPage = ({ posts }: PostPageProps) => {
  return (
    <main className={cn("md:max-w-3xl md:mx-auto")}>
      <Breadcrumb />
      <PostTitle title="황상윤 블로그의 모든 글" />
      <br />
      <ul className={cn("list-none p-0")}>
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </ul>
    </main>
  );
};

export default PostPage;
