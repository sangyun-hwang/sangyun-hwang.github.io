interface PostTitleProps {
  title: string;
}

export const PostTitle = ({ title }: PostTitleProps) => {
  return (
    <h1 className="text-5xl leading-16 font-semibold w-full text-gray-600">
      {title}
    </h1>
  );
};
