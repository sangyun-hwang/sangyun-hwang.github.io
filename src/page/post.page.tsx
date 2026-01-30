import type { TocItem } from "@/entities/post/lib/utils/toc.util";
import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { MdxRemote } from "@/entities/post/ui/mdx/mdx-remote";
import { PostAuthorHead } from "@/entities/post/ui/post/post-author-head";
import { PostTitle } from "@/entities/post/ui/post/post-title";
import { Breadcrumb } from "@/shared/common-ui/breadcrumb";
import { SideToc } from "@/shared/common-ui/side-toc";
import { TopToc } from "@/shared/common-ui/top-toc";
import { cn } from "@/shared/utils/cn";

type PostPageProps = {
  post: PostWithFrontmatterType;
  toc: TocItem[];
};

export default function PostDetailPage({ post, toc }: PostPageProps) {
  return (
    <section className="md:max-w-3xl">
      <Breadcrumb postTitle={post.title} />
      <PostTitle title={post.title} />
      <PostAuthorHead releaseDate={post.releaseDate} />
      <div className="relative">
        <TopToc toc={toc} />
        <SideToc toc={toc} />
        <MdxRemote source={post.content} />
      </div>
    </section>
  );
}
