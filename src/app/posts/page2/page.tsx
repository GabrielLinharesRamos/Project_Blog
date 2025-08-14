'use client';

import { useState, useEffect } from 'react';
import { posts } from '@/app/data/posts';
import { FadeUpOnScroll } from '../../../components/FadeUpOnScroll';
import { TypeWriting } from '../../../components/TypeWriting';
import { ThumbsUp, Share2, Bookmark, ChevronUp, FolderOpen } from "lucide-react";

export default function Page2() {
  const post = posts.find((p) => p.href === 'page2');
  const [likes, setLikes] = useState(87);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Detectar scroll para mostrar botão de voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!post) return <div className="mx-125 flex flex-col items-center justify-center">Post não encontrado</div>;

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="relative">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center">
            <FadeUpOnScroll>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">{post.title}</h1>
              <div className="mb-6 md:mb-8">
                <TypeWriting words={[post.content]} />
              </div>
            </FadeUpOnScroll>
            
            <FadeUpOnScroll>
              <div className="flex items-center justify-center space-x-4 mb-6 md:mb-8">
                <div className="flex items-center space-x-2 text-gray-400">
                  <FolderOpen size={16} />
                  <span>Artificial Intelligence</span>
                </div>
              </div>
            </FadeUpOnScroll>
          </div>
        </div>
      </div>
      
      <div className="sticky mt-8 top-4 z-40 bg-gray-800/80 backdrop-blur-sm rounded-lg p-2 md:p-3 mb-6 md:mb-8 mx-auto max-w-6xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 md:gap-4">
            <button 
              onClick={handleLike} 
              className="btn btn-secondary flex items-center gap-1 text-sm md:text-base"
            >
              <ThumbsUp size={16} className={isLiked ? 'fill-current' : ''} />
              <span>{likes}</span>
            </button>

            <button className="btn btn-secondary flex items-center gap-1 text-sm md:text-base">
              <Share2 size={16} />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
          
          <button 
            className="btn btn-secondary"
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <Bookmark size={16} className={isBookmarked ? 'fill-current' : ''} />
          </button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6 md:py-8">
        <article className="prose prose-sm md:prose-lg prose-invert max-w-none">
            <div className="bg-gray-800/50 p-4 md:p-6 rounded-xl mb-6 md:mb-8">
              <FadeUpOnScroll>
                <p className="text-lg md:text-xl leading-relaxed">
                  Artificial Intelligence is transforming healthcare by enabling faster diagnoses, 
                  personalized treatment plans, and improved patient outcomes. From radiology to 
                  drug discovery, AI applications are expanding rapidly across medical fields.
                </p>
              </FadeUpOnScroll>
            </div>
            
            <FadeUpOnScroll>
              <div className="relative group overflow-hidden rounded-xl mb-12 transform transition-transform hover:scale-[1.01]">
                <img
                  src="/gamesir.jpg"
                  alt="GameSir G8 Galileo"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="p-4 text-white text-sm">GameSir G8 Galileo - Controle para jogos mobile</p>
                </div>
              </div>
            </FadeUpOnScroll>

            <FadeUpOnScroll>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-300">Características Principais</h2>
              <div className="w-20 h-1 bg-gray-500 mb-8"></div>
            </FadeUpOnScroll>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <FadeUpOnScroll>
                <div className="bg-gray-800/70 p-6 rounded-xl h-full border-l-4 border-gray-500 hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-gray-300">Design Ergonômico</h3>
                  <p className="text-gray-300">
                    Projetado para sessões de jogo prolongadas, o G8 Galileo possui empunhaduras texturizadas e layout de botões que se adapta perfeitamente às mãos, reduzindo a fadiga durante o gameplay.
                  </p>
                </div>
              </FadeUpOnScroll>

              <FadeUpOnScroll>
                <div className="bg-gray-800/70 p-6 rounded-xl h-full border-l-4 border-gray-500 hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-gray-300">Botões Personalizáveis</h3>
                  <p className="text-gray-300">
                    Com botões traseiros programáveis e gatilhos com sensibilidade ajustável, o controle permite personalização completa para diferentes estilos de jogo e gêneros.
                  </p>
                </div>
              </FadeUpOnScroll>

              <FadeUpOnScroll>
                <div className="bg-gray-800/70 p-6 rounded-xl h-full border-l-4 border-gray-500 hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-gray-300">Conexão de Baixa Latência</h3>
                  <p className="text-gray-300">
                    A conexão USB-C direta e tecnologia de resposta rápida garantem input lag mínimo, essencial para jogos competitivos onde cada milissegundo conta.
                  </p>
                </div>
              </FadeUpOnScroll>

              <FadeUpOnScroll>
                <div className="bg-gray-800/70 p-6 rounded-xl h-full border-l-4 border-gray-500 hover:bg-gray-800 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-gray-300">Compatibilidade Universal</h3>
                  <p className="text-gray-300">
                    Compatível com a maioria dos smartphones Android e iOS, além de suportar centenas de jogos populares, incluindo títulos de emuladores e serviços de streaming como Xbox Game Pass.
                  </p>
                </div>
              </FadeUpOnScroll>
            </div>

            <FadeUpOnScroll>
              <div className="bg-gray-800/50 p-6 rounded-xl mb-12">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/70 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Prós</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      <li>Excelente ergonomia</li>
                      <li>Botões de alta qualidade</li>
                      <li>Baixa latência</li>
                      <li>Suporte ajustável para diferentes tamanhos de smartphone</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800/70 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Contras</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      <li>Preço um pouco elevado</li>
                      <li>Aplicativo complementar poderia ser mais intuitivo</li>
                      <li>Bateria não removível</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUpOnScroll>
          </article>
        </div>
        
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="btn btn-primary fixed bottom-6 right-6 p-2 rounded-full shadow-lg z-50"
            aria-label="Voltar ao topo"
          >
            <ChevronUp size={20} />
          </button>
        )}
      </div>
  );
}