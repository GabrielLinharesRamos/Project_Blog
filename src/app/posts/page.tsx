// app/blog/page.tsx
import Blog from "../../components/Posts";

import { posts } from '@/app/data/posts';

export default async function BlogPage() {
  return (
    <Blog posts={posts} />
  );
}
