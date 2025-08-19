'use client';


import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import { TypeWriting } from "../../components/TypeWriting";
import ParticlesBackground from '@/components/ParticlesBackground';

export default function PostsPage() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div className="w-full md:w-1/2 bg-gray-300">
                <Image
                    width={6000}
                    height={6000}
                    src="https://images.pexels.com/photos/30214682/pexels-photo-30214682.jpeg"
                    alt="Imagem de fundo da home"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative w-full md:w-1/2 flex items-center justify-center p-8" style={{ backgroundColor: '#18181b' }}>
                <div className="absolute inset-0">
                    <ParticlesBackground/>
                </div>

                <div className="text-center z-10">
                    <p className="text-7xl font-bold mb-3 text-center">Project <span className='text-7xl font-bold mb-3 text-center text-blue-400'>BLOG</span></p>
                    <br />
                    <div className="text-gray-400">
                        <TypeWriting words={['project where I talk about things that i like and do in my daily life.']} />
                    </div>
                    <br />
                    <a
                    href="/posts"
                    className="mt-5 inline-flex items-center gap-2 px-6 py-2 border border-gray-500 bg-blue-500 text-white font-semibold rounded-lg shadow-md"
                    >
                    Get to know me <MoveRight />
                    </a>
                </div>
            </div>
        </div>
    );
}
