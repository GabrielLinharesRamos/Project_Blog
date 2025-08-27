'use client';

import { posts } from '@/app/data/posts';
import InstallInstructions from '@/components/Cmd';
import { FadeUpOnScroll } from '@/components/FadeUpOnScroll';
import { TypeWriting } from '@/components/TypeWriting';
import { useState, useEffect } from 'react';
import { ThumbsUp, Share2, Bookmark, Binary, FolderOpen,Server,Cloud } from "lucide-react";

export default function Page3() {
  const post = posts.find((p) => p.href === 'page3');
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Função para lidar com likes
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  // Função para lidar com bookmark
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  // Função para scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Detectar scroll para mostrar botão de voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) return <div className="mx-125 flex flex-col items-center justify-center">Post não encontrado</div>;

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="relative">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center">
            <FadeUpOnScroll>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Building a Modern Web Application with Next.js</h1>
              <div className="mb-6 md:mb-8">
                <TypeWriting words={['This post explores the process of creating a modern web application using Next.js, React, and Tailwind CSS.']} />
              </div>
            </FadeUpOnScroll>
            
            <FadeUpOnScroll>
              <div className="flex items-center justify-center space-x-4 mb-6 md:mb-8">
                <div className="flex items-center space-x-2 text-gray-400">
                  <FolderOpen size={16} />
                  <span>Web Development</span>
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
                <p className="text-lg leading-relaxed text-gray-700">
                  To use Django and Next.js together in a project, the first step is to install and configure both frameworks separately, ensuring that each performs its own specific function.
                  Django will be responsible for the backend, handling business logic, data persistence, and API provisioning, while Next.js will be responsible for the frontend, offering a fast,
                  interactive, and SEO-optimized interface.
                </p>
            </FadeUpOnScroll>
            </div>
            <FadeUpOnScroll>
              <h2 className="mb-6 text-3xl font-bold text-gray-800">Django</h2>
              <hr className="mb-6" />

            <p className="mb-6 text-lg text-gray-700">
              Well, to install Django we will need three things:
            </p>
            <ul className='mb-6 ml-6 list-disc [&>li]:mt-2'>
              <li className="text-gray-200">
                <strong className="text-gray-100">Python</strong> – Programming language that will be used for backend development.
              </li>
              <li className="text-gray-200">
                <strong className="text-gray-100">Virtual Environment</strong> – Isolated environment where the project libraries will be installed.
              </li>
              <li className="text-gray-200">
                <strong className="text-gray-100">Django</strong> – Python-based backend framework that we will use to build the application.
              </li>
            </ul>
          </FadeUpOnScroll>

          <FadeUpOnScroll>
            <div className="my-8 flex items-center gap-3 rounded-lg bg-blue-50 p-4 text-2xl text-blue-800">
              <Binary className="h-8 w-8" />
              <span className="font-semibold">Python</span>
            </div>
            <p className="mb-6 text-lg text-gray-700">
              To install Python, first download the latest version from the official
              <a href="https://www.python.org/downloads/" className="text-blue-600 hover:underline"> Python website</a>.
              Run the installer, and during the installation process, make sure to check
              the option <strong className="text-gray-200">"Add Python to PATH"</strong> before completing the setup.
            </p>

            <p className="mb-6 text-lg text-gray-700">
              If you aren't sure if Python is installed, you can check by running the following command in your terminal:
            </p>

            
            <InstallInstructions code={`python --version`} />

            <div className="my-8 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-2xl text-green-800">
              {/* <LaptopMinimal className="h-8 w-8" /> */}
              <Server class='h-8 w-8'/>
              <span className="font-semibold">Virtual Environment</span>
            </div>

            <p className="mb-6 text-lg text-gray-700">
              In the folder where you want to create your project, run the command below in the terminal to create a virtual environment:
            </p>

            <div className="relative mb-8">
              <InstallInstructions code={`python -m venv your_venv_name_env`} />

            </div>

            <p className="mb-6 text-lg text-gray-700">
              To activate your venv, go to the folder where you created your venv and run the command below in the terminal:
            </p>

            <div className="relative mb-8">
              <InstallInstructions code={`venv\\Scripts\\activate`} />
            </div>

            <p className="mb-6 text-lg text-gray-700">
              After doing this, you will see some visual feedback indicating that the environment has been activated.
            </p>

            <div className="my-8 flex items-center gap-3 rounded-lg bg-purple-50 p-4 text-2xl text-purple-800">
              <Cloud className='h-8 w-8'/>
              <span className="font-semibold">Django Framework</span>
            </div>

            <p className="mb-6 text-lg text-gray-700">
              With the venv active, you can now install Django using pip, Python's package manager. Run the following command in the terminal:
            </p>

            <div className="relative mb-8">
              <InstallInstructions code={`pip install django`} />
            </div>

            <p className="mb-6 text-lg text-gray-700">
              Then you can create a new Django project by running:
            </p>

            <div className="relative mb-8">
              <InstallInstructions code={`django-admin startproject nome_do_projeto`} />
            </div>

            <h2 className="mb-6 mt-12 text-3xl font-bold text-gray-800">Next.js</h2>
            <hr className="mb-6" />
          </FadeUpOnScroll>

          <FadeUpOnScroll>
              <p className="text-lg leading-relaxed text-gray-800">
                Django and Next.js complement each other perfectly: while Django offers a solid, secure, and scalable backend, Next.js delivers fast, responsive, and SEO-optimized interfaces.
                This partnership is ideal for projects that require high performance and easy long-term maintenance.
              </p>

            <div className="my-8 flex items-center gap-3 rounded-lg bg-yellow-50 p-4 text-2xl text-yellow-800">
              <FolderOpen className="h-8 w-8" />
              <span className="font-semibold">Next.js Installation</span>
            </div>

            <p className="mb-6 text-lg text-gray-700">
              To start a new Next.js project, you need to have Node.js installed. Once Node.js is ready, run the command below to create a new Next.js application:
            </p>

            <div className="relative mb-8">
              <InstallInstructions code={`npx create-next-app@latest my-nextjs-app`} />
            </div>

            <p className="mb-6 text-lg text-gray-700">
              After the installation finishes, navigate to your project folder and start the development server:
            </p>

            <div className="relative mb-8">
              <InstallInstructions code={`npm run dev`} />
            </div>

            <p className="mb-6 text-lg text-gray-200">
              Once your development server is running, open your browser and go to{' '}
              <a 
                href="http://localhost:3000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                http://localhost:3000
              </a>{' '}
              to see your new Next.js application in action.
            </p>
          </FadeUpOnScroll>

          <FadeUpOnScroll>
            <h2 className="mb-6 mt-12 text-3xl font-bold text-gray-800">Integrating Next.js with Django</h2>
            <hr className="mb-6" />
            <p className="mb-6 text-lg text-gray-200">
              To integrate your Next.js frontend with a Django backend, you typically expose APIs from Django that your Next.js app can consume. 
              This approach allows you to keep a clean separation between the frontend and backend, while still leveraging the full power of both frameworks.
            </p>

            <div className="my-8 flex items-center gap-3 rounded-lg bg-indigo-50 p-4 text-2xl text-indigo-800">
              <FolderOpen className="h-8 w-8" />
              <span className="font-semibold">Django REST Framework (DRF)</span>
            </div>

            <p className="mb-6 text-lg text-gray-200">
              To connect your Next.js frontend with a Django backend, you need Django to expose APIs that your frontend can consume. The most common approach is using <strong className="text-gray-100">Django REST Framework (DRF)</strong> to create REST APIs.
            </p>

            <div className="relative mb-8">
              <InstallInstructions code={`pip install djangorestframework`} />
            </div>

            <p className="mb-6 text-lg text-gray-200">
              After installing DRF, add it to your <strong className="text-gray-100">INSTALLED_APPS</strong> in <code className="bg-gray-800 px-1 rounded">settings.py</code>:
            </p>

            <div className="relative mb-8">
              <InstallInstructions code={`INSTALLED_APPS = [\n    ...\n    'rest_framework',\n]`} />
            </div>

            <p className="mb-6 text-lg text-gray-200">
              Next, create your API endpoints in Django using serializers and viewsets. Once your API is running (usually at <strong className="text-gray-100">http://localhost:8000/api/</strong>), you can fetch data from your Next.js frontend.
            </p>

            <div className="relative mb-8">
              <InstallInstructions code={`// Example fetch in Next.js\nconst res = await fetch('http://localhost:8000/api/posts/');\nconst data = await res.json();\nconsole.log(data);`} />
            </div>

            <p className="mb-6 text-lg text-gray-200">
              This setup allows your Next.js application to render data dynamically from Django while benefiting from server-side rendering (SSR), static generation (SSG), and React's interactivity on the frontend.
            </p>

            <p className="mb-6 text-lg text-gray-200">
              Remember to handle CORS by installing <strong className="text-gray-100">django-cors-headers</strong> and configuring it in <code className="bg-gray-800 px-1 rounded">settings.py</code>:
            </p>

            <div className="relative mb-8">
              <InstallInstructions code={`pip install django-cors-headers`} />
              <br />
              <InstallInstructions code={`INSTALLED_APPS += ['corsheaders']\nMIDDLEWARE = ['corsheaders.middleware.CorsMiddleware', ...]\nCORS_ALLOW_ALL_ORIGINS = True`} />
            </div>

            <div className="mb-6 p-4 rounded-lg bg-gray-800/50 text-gray-100">
              <p className="text-lg font-medium">
                Key points before starting:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Django will handle the backend logic, database, and API endpoints.</li>
                <li>Next.js will be responsible for rendering the frontend and fetching data from Django APIs.</li>
                <li>Use Django REST Framework (DRF) to easily create RESTful APIs.</li>
                <li>Don't forget to configure CORS to allow Next.js to access Django endpoints.</li>
              </ul>
            </div>
          </FadeUpOnScroll>
            
            {showScrollTop && (
              <button 
                onClick={scrollToTop}
                className="btn btn-primary fixed bottom-6 right-6 p-2 rounded-full shadow-lg z-50"
                aria-label="Voltar ao topo"
              >
                {/* <ChevronUp size={20} /> */}
              </button>
            )}
          </article>
        </div>
      </div>
  );
}