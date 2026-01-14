import Link from "next/link";
import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { cn } from "@/shared/utils/cn";

interface PostCardProps {
  post: PostWithFrontmatterType;
}

export const PostCard = ({ post }: PostCardProps) => {
  const postLink = `/posts${post.filePath.join("/")}`;

  return (
    <li className={cn("flex h-full flex-col gap-3")}>
      <Link href={postLink} title={post.title} className="h-full">
        <article
          className={cn(
            "flex flex-col h-full rounded-sm hover:bg-gray-100 active:bg-gray-200",
          )}
        >
          <header className={cn("shrink-0")}>
            <h3
              className={cn(
                "px-4 pt-5 text-2xl font-semibold line-clamp-4 text-blue-400",
              )}
            >
              {post.title}
            </h3>
          </header>
          <section
            className={cn(
              "grow h-28 px-4 py-3 text-1422 sm:text-1622 md:text-1422",
            )}
          >
            <p className={cn("h-full line-clamp-4")}>{post.description}</p>
          </section>
        </article>
      </Link>
    </li>
  );
};
