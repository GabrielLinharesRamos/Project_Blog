'use client';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-4 md:py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center my-2">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300 text-xs md:text-sm">&copy; {new Date().getFullYear()} Project Blog. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors text-xs md:text-sm">
              Terms of Use
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors text-xs md:text-sm">
              Privacy Policy
            </a>
            <a href="/contatos" className="text-gray-400 hover:text-gray-200 transition-colors text-xs md:text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );}
