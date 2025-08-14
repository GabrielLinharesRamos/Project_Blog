'use client';

import { useState, useEffect } from 'react';
import { FadeUpOnScroll } from '../../../components/FadeUpOnScroll';
import LivePersonDetection from '../../../components/LivePersonDetection';
import InstallInstructions from '../../../components/Cmd';
import { FolderOpen, ThumbsUp, Share2, Bookmark, ChevronUp } from "lucide-react";
import { TypeWriting } from '../../../components/TypeWriting';

export default function PostPage() {

  const [likes, setLikes] = useState(42);
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

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="relative">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center">
            <FadeUpOnScroll>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Real-Time People Detection with YOLO</h1>
              <div className="mb-6 md:mb-8">
                <TypeWriting words={['This post describes the development of an application for real-time person recognition, using the Python language together with the YOLO and OpenCV libraries.']} />
              </div>
            </FadeUpOnScroll>
            
            <FadeUpOnScroll>
              <div className="flex items-center justify-center space-x-4 mb-6 md:mb-8">
                <div className="flex items-center space-x-2 text-gray-400">
                  <FolderOpen size={16} />
                  <span>Programing</span>
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
                  YOLO is the acronym for "You Only Look Once". This means that it is very fast:
                  instead of analyzing the image bit by bit, it looks at everything at once and
                  immediately understands what is there.
                </p>
              </FadeUpOnScroll>
            </div>

          <FadeUpOnScroll>
            <div className="relative group overflow-hidden rounded-xl mb-12 transform transition-transform hover:scale-[1.01]">
              <img
                src="/yolo.jpeg"
                alt="YOLO Example"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <p className="p-4 text-white text-sm">Example of object detection with YOLO</p>
              </div>
            </div>
          </FadeUpOnScroll>

            <FadeUpOnScroll>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-300">Installation</h2>
              <div className="w-20 h-1 bg-gray-500 mb-8"></div>
            </FadeUpOnScroll>

            <FadeUpOnScroll>
              <p className="mb-6 text-lg">First we need to do some installations in our project:</p>
              <div className="transform hover:scale-[1.01] transition-transform">
                <InstallInstructions code={
                  `pip install opencv-python\npip install ultralytics\npip install torch torchvision torchaudio`
                }/>
              </div>
            </FadeUpOnScroll>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <FadeUpOnScroll>
                <div className="bg-gray-800/70 p-6 rounded-xl h-full border-l-4 border-gray-500 hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-2 text-xl mb-4 text-gray-300">
                    <FolderOpen />
                    <span>opencv-python</span>
                  </div>
                  <p className="text-gray-300">
                    This library is used to access the device's camera, capture frames in real time, and display the detection results on screen. 
                    OpenCV functions are utilized to set the capture resolution, continuously read frames, and draw rectangles around detected people.
                  </p>
                </div>
              </FadeUpOnScroll>

              <FadeUpOnScroll>
                <div className="bg-gray-800/70 p-6 rounded-xl h-full border-l-4 border-gray-500 hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-2 text-xl mb-4 text-gray-300">
                    <FolderOpen />
                    <span>ultralytics</span>
                  </div>
                  <p className="text-gray-300">
                    The Ultralytics library handles loading the pretrained YOLO model and performing object detection inference on the captured frames. 
                    It processes each camera frame to identify people (class 0) and returns bounding box coordinates that are then used to highlight the detected objects.
                  </p>
                </div>
              </FadeUpOnScroll>

              <FadeUpOnScroll>
                <div className="bg-gray-800/70 p-6 rounded-xl h-full border-l-4 border-gray-500 hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-2 text-xl mb-4 text-gray-300">
                    <FolderOpen />
                    <span>torch & vision</span>
                  </div>
                  <p className="text-gray-300">
                    These libraries provide the deep learning framework for running the YOLO model.
                    PyTorch (torch) handles the model inference, while torchvision and torchaudio offer utilities for image and audio processing.
                  </p>
                </div>
              </FadeUpOnScroll>
            </div>

            <FadeUpOnScroll>
              <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-300">Example</h2>
              <div className="w-20 h-1 bg-gray-500 mb-8"></div>
            </FadeUpOnScroll>

            <FadeUpOnScroll>
              <div className="bg-gray-800/50 p-4 rounded-xl mb-12 transform hover:scale-[1.01] transition-transform">
                <LivePersonDetection />
                <p className="text-center mt-4 text-gray-400 text-sm">Interact with the camera to see real-time detection</p>
              </div>
            </FadeUpOnScroll>
            
          </article>
        </div>
        
        {/* Botão de voltar ao topo */}
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
