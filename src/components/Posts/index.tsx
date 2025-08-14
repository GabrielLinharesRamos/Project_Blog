
'use client';

import { useRef, useState } from "react";
import { MoveRight, Search } from 'lucide-react';
import { SpotlightCard } from "../Spotlightcard";
import { TypeWriting } from "../TypeWriting";
import { FadeUpOnScroll } from "../FadeUpOnScroll";
import ParticlesBackground from "../ParticlesBackground";
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
  href?: string;
  date?: string;
  views?: string;
  tags?: string[];
};

export default function BlogClient({ posts }: { posts: Post[] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Extrair todas as tags únicas dos posts
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags || [])));
  
  // Filtrar posts com base na pesquisa e tag selecionada
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });


  return (
    <main className="p-4 text-gray-100 relative min-h-screen bg-gray-900">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-8 md:py-12 px-4">
        <FadeUpOnScroll>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">Project Blog</h1>
          <div className="flex justify-center mb-6 md:mb-8">
            <TypeWriting words={['Some posts talking about my life, and what i like to do on my free time.']} />
          </div>
        </FadeUpOnScroll>
        
        <FadeUpOnScroll>
          <div className="mb-8 md:mb-12 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Posts..."
                className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-2 md:py-3 px-4 pl-12 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            {allTags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  className={`btn ${selectedTag === null ? 'btn-primary' : 'btn-secondary'} btn-sm rounded-full`}
                  onClick={() => setSelectedTag(null)}
                >
                  Todos
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    className={`btn ${selectedTag === tag ? 'btn-primary' : 'btn-secondary'} btn-sm rounded-full`}
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </FadeUpOnScroll>
        
        <FadeUpOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <div key={post.id || index} className="transform transition-all duration-300 hover:scale-105">
                  <SpotlightCard>
                    <a href={`/posts/${post.href || post.slug}`}>
                      <Card className="h-full bg-gray-800/80 border-gray-700 transition-all flex flex-col">
                        <CardHeader className="flex flex-col flex-grow">
                          <p className="text-sm text-gray-400">{post.date || 'Sem data'}</p>
                          <CardTitle className="text-xl font-bold flex-grow">{post.title}</CardTitle>
                          <CardDescription className="text-gray-300 flex-grow">
                            {post.content.length > 150
                              ? post.content.slice(0, 100).trimEnd() + '...'
                              : post.content}
                          </CardDescription>
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {post.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-300">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <CardAction>{post.views || '0'} views</CardAction>
                        </CardHeader>
                        <CardContent className="mt-auto">
                          <p className='flex items-center gap-2 text-gray-400 group-hover:text-gray-300'>
                            Read More <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </p>
                        </CardContent>
                      </Card>
                    </a>
                  </SpotlightCard>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8 md:py-12">
                <p className="text-xl text-gray-400">Nenhum post encontrado para sua pesquisa.</p>
                <button 
                  className="btn btn-primary mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag(null);
                  }}
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </FadeUpOnScroll>
      </div>
    </main>
  );
}
