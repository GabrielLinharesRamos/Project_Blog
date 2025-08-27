import { MoveLeft, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        // Check initial screen size
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <header className="bg-gray-900 border-b border-gray-800 px-3 md:px-4 lg:px-6 py-3 md:py-4 shadow-md relative z-50">
            <div className="flex items-center justify-between mx-auto max-w-screen-xl">
                {/* Logo/Back button */}
                <a href="/contatos" className="flex items-center gap-1 md:gap-2 text-gray-100 hover:text-gray-300 transition-colors">
                    <MoveLeft size={18} className="md:size-5" />
                </a>
                
                {/* Menu para desktop */}
                {!isMobile && (
                    <nav>
                        <ul className="flex items-center space-x-6 xl:space-x-8">
                            <li>
                                <a href="/posts" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors">Posts</a>
                            </li>
                            <li>
                                <a href="/contatos" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors">Contact</a>
                            </li>
                            <li>
                                <a href="/create" className="text-sm md:text-base text-gray-300 hover:text-gray-100 transition-colors">Create</a>
                            </li>
                        </ul>
                    </nav>
                )}
                
                {/* Botão do menu mobile */}
                {isMobile && (
                    <button 
                        className="text-gray-100 hover:text-gray-300 transition-colors p-1"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                )}
            </div>
            
            {/* Menu mobile */}
            {mobileMenuOpen && isMobile && (
                <div className="absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 shadow-md z-50">
                    <ul className="flex flex-col py-2 px-4">
                        <li>
                            <a 
                                href="/posts" 
                                className="block py-3 text-gray-300 hover:text-gray-100 transition-colors border-b border-gray-800"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Posts
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/contatos" 
                                className="block py-3 text-gray-300 hover:text-gray-100 transition-colors border-b border-gray-800"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/create" 
                                className="block py-3 text-gray-300 hover:text-gray-100 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Create
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}