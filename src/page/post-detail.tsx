import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { MdxRemote } from "@/entities/post/ui/mdx/mdx-remote";
import { PostTitle } from "@/entities/post/ui/post/post-title";
import { Breadcrumb } from "@/shared/common-ui/breadcrumb";
import { cn } from "@/shared/utils/cn";

type PostPageProps = {
  post: PostWithFrontmatterType;
};

export default function PostDetailPage({ post }: PostPageProps) {
  return (
    <section className={cn("md:max-w-3xl")}>
      <Breadcrumb postTitle={post.title} />
      <PostTitle>{post.title}</PostTitle>
      <br />
      <MdxRemote source={post.content} />
    </section>
  );
}
