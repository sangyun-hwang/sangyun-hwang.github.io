import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";

type PostPageProps = {
  posts: PostWithFrontmatterType[];
};

const PostPage = ({ posts }: PostPageProps) => {
  return (
    <main>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default PostPage;
