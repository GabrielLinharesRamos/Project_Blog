'use client';

import "./globals.css";

import { Montserrat } from 'next/font/google';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { usePathname } from "next/navigation";

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

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased text-gray-100 bg-gray-900 flex flex-col min-h-screen`}
      >
        {shouldShowHeader && <Header />}
        <main className="flex-grow">{children}</main>
        {shouldShowHeader && <Footer />}
      </body>
    </html>
  );
}
