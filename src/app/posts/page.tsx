// app/blog/page.tsx

import { getPosts } from "../../lib/notion";
import Blog from "../../components/Posts";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <Blog posts={posts} />
  );
}
