'use client';

import "./globals.css";

import { Montserrat } from 'next/font/google';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { usePathname } from "next/navigation";
import { useEffect } from 'react';
import Head from 'next/head';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noHeaderPaths = ['/contatos'];
  const shouldShowHeader = !noHeaderPaths.includes(pathname);

  useEffect(() => {
    // Configurar GTranslate apenas no lado do cliente
    if (typeof window !== 'undefined') {
      window.gtranslateSettings = {
        "default_language": "en",
        'native_language_names':true,
        "languages": ["en", "pt"],
        "wrapper_selector": ".gtranslate_wrapper",
        "alt_flags": { "pt": "brazil" }
      };

      // Carregar o script do GTranslate
      const script = document.createElement('script');
      script.src = "/js/float.js";
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Project Blog</title>
      </Head>
      <body
        className={`${montserrat.variable} antialiased text-gray-100 bg-gray-900 flex flex-col min-h-screen`}
      >
        <div className="gtranslate_wrapper"></div>
        {shouldShowHeader && <Header />}
        <main className="flex-grow">{children}</main>
        {shouldShowHeader && <Footer />}
      </body>
    </html>
  );
}
