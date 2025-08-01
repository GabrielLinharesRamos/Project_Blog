'use client';

import "./globals.css";

import { Montserrat } from 'next/font/google';
import { Header } from '../components/Header';
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
        style={{ backgroundColor: '#18181b' }}
        className={`${montserrat.variable} antialiased text-gray-100`}
      >
        {shouldShowHeader && <Header />} {/* Renderização condicional aqui */}
        {children}
      </body>
    </html>
  );
}
