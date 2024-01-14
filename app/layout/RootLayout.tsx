import Head from 'next/head';
import React from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function RootLayout({
                                     children,
                                     title = 'Sell domain',
                                     description = 'Secure your digital future with this premium domain, ideal for enhancing brand presence and SEO effectiveness.',
                                   }: RootLayoutProps) {
  return (
      <html lang="en">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <body className={inter.className}>{children}</body>
      </html>
  );
}

