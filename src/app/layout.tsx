import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Engineering Diary - A minimalist log that helps you grow beyond your code.',
  description:
    'Capture what you built, learned, and fixed. A minimalist log that helps you grow beyond your code.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-bg100 antialiased`}>{children}</body>
    </html>
  );
}
