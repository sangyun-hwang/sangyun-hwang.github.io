import dayjs from "dayjs";
import Link from "next/link";
import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { cn } from "@/shared/utils/cn";

interface PostCardProps {
  post: PostWithFrontmatterType;
}

export const PostCard = ({ post }: PostCardProps) => {
  const postLink = `/posts/${post.filePath.join()}`;
  const dateTime = new Date(post.releaseDate);

  return (
    <li className="flex h-full flex-col gap-3">
      <Link href={postLink} title={post.title} className="h-full">
        <article className="flex flex-col h-full rounded-sm hover:bg-gray-100 active:bg-gray-200">
          <header className="shrink-0">
            <h3 className="px-4 pt-5 text-2xl font-semibold line-clamp-4 text-blue-400">
              {post.title}
            </h3>
          </header>
          <div
            className={cn(
              "grow h-28 px-4 py-3 text-1422 sm:text-1622 md:text-1422",
            )}
          >
            <p className="h-16 line-clamp-4">{post.description}</p>
            <time
              dateTime={post.releaseDate}
              className="h-full text-gray-400 text-lg font-[550]"
            >
              {dayjs(post.releaseDate).format("YYYY년 M월 D일")}
            </time>
          </div>
        </article>
      </Link>
    </li>
  );
};
