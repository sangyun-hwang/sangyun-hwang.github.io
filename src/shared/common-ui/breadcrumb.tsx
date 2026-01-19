"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { Fragment } from "react";
import { BASE_URL } from "@/shared/config/constant";

interface BreadcrumbItem {
  label: string;
  url: string;
  isLast: boolean;
}

interface BreadcrumbProps {
  postTitle?: string;
}

const generateBreadcrumbs = (
  postTitle: string | undefined,
): BreadcrumbItem[] => {
  const pathname = usePathname();
  const segments = pathname?.split("/").filter((segment) => segment !== "");

  const breadcrumbs =
    segments?.map((segment, index) => {
      const url = `/${segments.slice(0, index + 1).join("/")}`;
      const isLast = index === segments.length - 1;
      return {
        label: postTitle && isLast ? postTitle : segment,
        url,
        isLast: isLast,
      };
    }) || [];

  return [
    {
      label: "home",
      url: "",
      isLast: breadcrumbs.length === 0,
    },
    ...breadcrumbs,
  ];
};

const generateBreadcrumbJsonLd = (breadcrumbs: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.label,
      item: BASE_URL + breadcrumb.url,
    })),
  };
};

export const Breadcrumb = ({ postTitle }: BreadcrumbProps) => {
  const breadcrumbs: BreadcrumbItem[] = generateBreadcrumbs(postTitle);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(breadcrumbs);

  return (
    <>
      <Script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="flex space-x-1 text-seo-500 text-1618 my-4">
        {breadcrumbs.map(({ label, url, isLast }) => (
          <Fragment key={url}>
            {isLast ? (
              <p className="font-semibold text-seo-600 truncate" title={label}>
                {label}
              </p>
            ) : (
              <Link
                href={url}
                className="hover:underline hover:underline-offset-4"
                title={label}
              >
                {label}
              </Link>
            )}
            {!isLast && <span>/</span>}
          </Fragment>
        ))}
      </div>
    </>
  );
};
