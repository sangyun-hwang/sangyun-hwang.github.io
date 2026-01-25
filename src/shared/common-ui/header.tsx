"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();

  return (
    <header className="top-0 z-50 mx-auto lg:max-w-screen-xl h-12.5 sticky min-h-[]">
      <nav>
        <div
          className={`h-full p-2 border-b border-b-gray-300  bg-seo-100 flex justify-between items-center lg:justify-start lg:gap-3 transition-transform duration-300 ease-in-out`}
        >
          <Link
            href="/"
            title="황상윤블로그"
            className="inline-block w-full  text-2xl italic font-bold decoration-none text-[#3d3d3f]"
            onClick={(e) => {
              if (path === "/") {
                e.preventDefault();
              }
            }}
          >
            황상윤블로그
          </Link>
          <div></div>
        </div>
      </nav>
    </header>
  );
};
