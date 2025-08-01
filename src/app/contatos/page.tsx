import Image from 'next/image';
import { MoveRight } from 'lucide-react';
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
                    <p className="text-7xl mb-8 text-white">Project Blog</p>
                    <br />
                    <span className="text-gray-400">
                        project where I talk about things that i like and do in my daily life
                    </span>
                    <br />
                    <a
                        href="/posts"
                        className="gap-2 inline-flex mt-10 px-6 py-2 border border-gray-400 hover:bg-white hover:text-black text-white font-semibold rounded-lg shadow-md transition duration-300"
                    >
                        Get to know me <MoveRight />
                    </a>
                </div>
            </div>
        </div>
    );
}
