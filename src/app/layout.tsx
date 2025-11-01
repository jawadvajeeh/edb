import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeContainer } from '@/components/layout/theme-provider';

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
    <html suppressHydrationWarning lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeContainer>{children}</ThemeContainer>
      </body>
    </html>
  );
}
