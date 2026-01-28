import type { TocItem } from "@/entities/post/lib/utils/toc.util";
import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { MdxRemote } from "@/entities/post/ui/mdx/mdx-remote";
import { PostTitle } from "@/entities/post/ui/post/post-title";
import { Breadcrumb } from "@/shared/common-ui/breadcrumb";
import { SideToc } from "@/shared/common-ui/side-toc";
import { cn } from "@/shared/utils/cn";

type PostPageProps = {
  post: PostWithFrontmatterType;
  toc: TocItem[];
};

export default function PostDetailPage({ post, toc }: PostPageProps) {
  return (
    <section className={cn("md:max-w-3xl")}>
      <Breadcrumb postTitle={post.title} />
      <PostTitle title={post.title} />
      <br />
      <div className="relative">
        <SideToc toc={toc} />
        <MdxRemote source={post.content} />
      </div>
    </section>
  );
}
