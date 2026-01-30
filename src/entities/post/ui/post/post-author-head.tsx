import dayjs from "dayjs";
import "dayjs/locale/ko";

export const PostAuthorHead = ({ releaseDate }: { releaseDate: string }) => {
  dayjs.locale("ko");
  const date = dayjs(releaseDate);

  return (
    <div className="flex h-10 gap-2.5 mt-5 mb-3 border-b border-gray-300">
      <div className="flex gap-0.5 w-full py-0.5">
        <span className="text-md font-bold text-blue-400 mx-1">황상윤</span>
        <time className="text-md text-gray-500">
          {date.format("YYYY.MM.DD")}
        </time>
      </div>
    </div>
  );
};
