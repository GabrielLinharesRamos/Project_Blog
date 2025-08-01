import { MoveLeft } from 'lucide-react';

export function Header() {
    return (
        
        <header>
            <nav style={{ backgroundColor: '#18181b' }} className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/contatos" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><MoveLeft className='sm'/></span>
                    </a>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="/posts" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Posts</a>
                            </li>
                            <li>
                                <a href="/contatos" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                            <li>
                                <a href="/create" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Create</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
    );
}