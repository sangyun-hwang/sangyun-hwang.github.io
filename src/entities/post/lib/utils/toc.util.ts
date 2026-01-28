export interface TocItem {
  text: string;
  id: string;
  indent: number;
}

export const parseToc = (content: string): TocItem[] => {
  const regex = /^(##|###) (.*)$/gm;
  const matches = [...content.matchAll(regex)];

  return matches.map((match) => {
    const headingMarks = match[1]; // ## or ###
    const rawText = match[2].trim();

    // 마크다운 링크 제거
    const text = rawText.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

    const id = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\p{L}\p{N}\s-]/gu, "");

    return {
      text,
      id,
      indent: headingMarks.length - 2, // ✅ 정확한 깊이
    };
  });
};

export const getScrollTop = () => {
  if (!document.body) return 0;
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  return scrollTop;
};
