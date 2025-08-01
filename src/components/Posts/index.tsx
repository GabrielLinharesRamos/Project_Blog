'use client';

import { useRef } from "react";
import { MoveRight } from 'lucide-react';
import { SpotlightCard } from "../Spotlightcard";
import { TypeWriting } from "../TypeWriting";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
};

export default function BlogClient({ posts }: { posts: Post[] }) {
  const cardRef = useRef<HTMLDivElement>(null);


  return (
    <main className="p-4 text-gray-100 m-80 my-8">
      <p className="text-2xl font-bold mb-3 text-3xl">Posts</p>
      <TypeWriting words={['Some posts talking about my life, and what i like to do on my free time.']} />
      <hr className="my-20 border-gray-800"/>
      <div className="grid grid-cols-2 gap-6 col-start-2" ref={cardRef}>
        <div className="col-start-1 row-span-2">
          <SpotlightCard>
            <a>
            <Card>
              <CardHeader>
                <p className="text-sm">27, july</p>
                <CardTitle>titulo 1</CardTitle>
                <CardDescription>conteudo 1</CardDescription>
                <CardAction>1.8k</CardAction>
              </CardHeader>
              <CardContent>
                <p className='flex flex-nowrap gap-2'>Read More<MoveRight className='sm'/></p>
              </CardContent>
            </Card>
            </a>
          </SpotlightCard>
        </div>

        <div className="col-start-2">
        <SpotlightCard>
          <a href="">
          <Card>
            <CardHeader>
              <p className="text-sm">18, july</p>
              <CardTitle>titulo 2</CardTitle>
              <CardDescription>conteudo 2</CardDescription>
              <CardAction>2.5k</CardAction>
            </CardHeader>
            <CardContent>
              <p className='flex flex-nowrap gap-2'>Read More<MoveRight className='sm'/></p>
            </CardContent>
          </Card>
          </a>
        </SpotlightCard>
        </div>

        <div className="col-start-2">
          <SpotlightCard>
            <a href="">
            <Card>
              <CardHeader>
                <p className="text-sm">03, july</p>
                <CardTitle>titulo 3</CardTitle>
                <CardDescription>conteudo 3</CardDescription>
                <CardAction>12k</CardAction>
              </CardHeader>
              <CardContent>
                <p className='flex flex-nowrap gap-2'>Read More<MoveRight className='sm'/></p>
              </CardContent>
            </Card>
            </a>
          </SpotlightCard>
        </div>
      </div>
      <hr className="my-20 border-gray-800"/>
      

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8" ref={cardRef}>
      {posts.map((post) => (
        <SpotlightCard key={post.id}>
            <a href={`posts/${post.id}`}>
        <Card>
          <CardHeader>
            <p className="text-sm">
              {new Date(post.date).getDate().toString().padStart(2, '0')},{' '}
              {new Date(post.date).toLocaleString('en-US', { month: 'short' }).toLowerCase()}
            </p>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>
              {post.content.length > 150
                ? post.content.slice(0, 100).trimEnd() + '...'
                : post.content}
            </CardDescription>
            <CardAction>{post.views}</CardAction>
          </CardHeader>
          <CardContent>
            <p className='flex flex-nowrap gap-2'>
            Read More <MoveRight className="sm" />
            </p>
          </CardContent>
        </Card>
        </a>
        </SpotlightCard>
      ))}
    </div>
    </main>
  );
}
