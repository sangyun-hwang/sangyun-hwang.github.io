import type { MDXComponents as mdxComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  HTMLProps,
  ReactNode,
} from "react";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
// type HeadingProps = HTMLAttributes<HTMLHeadingElement>;
// type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;
// type ElementProps = HTMLAttributes<HTMLElement>;

export const MDXComponents: mdxComponents = {
  img: (props: HTMLProps<HTMLImageElement>) => {
    return (
      <span className="my-[16px] items-center relative w-full h-256 md:h-512">
        <Image
          src={props.src ?? ""}
          alt={props.alt ?? ""}
          title={props.alt}
          aria-label={props.alt || ""}
          crossOrigin="anonymous"
          fill={true}
          objectFit="contain"
          className=" transition-all duration-200 rounded-md hover:opacity-70"
        />
      </span>
    );
  },
  a: ({ className, href, ...props }: AnchorProps) => {
    if (!href) return null;

    const isAnchorLink = href.startsWith("#");

    if (isAnchorLink) {
      return (
        <a
          aria-label={props["aria-label"]}
          title={href.replace("#", "")}
          href={href}
          {...props}
        />
      );
    }
    return (
      <Link
        className={
          "underline underline-offset-4 text-blue-500 hover:rounded-sm duration-200 transition-colors hover:text-blue-700 hover:bg-blue-300"
        }
        target={"_blank"}
        href={href ?? ""}
        {...props}
      />
    );
  },
};
