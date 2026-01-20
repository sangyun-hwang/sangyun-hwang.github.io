import { cn } from "@/shared/utils/cn";

interface PostTitleProps {
  title: string;
}

export const PostTitle = ({ title }: PostTitleProps) => {
  return (
    <h1 className={cn("text-2640 font-semibold w-full text-seo-600")}>
      {title}
    </h1>
  );
};
