import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { MdxRemote } from "@/entities/post/ui/mdx/mdx-remote";
import { PostTitle } from "@/entities/post/ui/post/post-title";
import { cn } from "@/shared/utils/cn";

type PostPageProps = {
  post: PostWithFrontmatterType;
};

export default function PostDetailPage({ post }: PostPageProps) {
  return (
    <section className={cn("md:max-w-3xl")}>
      <PostTitle>{post.title}</PostTitle>
      <MdxRemote source={post.content} />
    </section>
  );
}
