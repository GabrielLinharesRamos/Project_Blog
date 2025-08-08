import { posts } from '@/app/data/posts';

export default function Page2() {
  const post = posts.find((p) => p.href === 'page2');

  if (!post) return <div className="mx-125 flex flex-col items-center justify-center">Post não encontrado</div>;

  return (
    <div className="bg-gray-100">
      <div className="mx-125 flex flex-col items-center justify-center">
        <h1 className="my-17 text-3xl font-bold text-black">{post.title}</h1>
        <p className="mb-17 text-xl text-gray-800 text-center">{post.content}</p>
      </div>
    </div>
  );
}