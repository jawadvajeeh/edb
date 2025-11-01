'use client';

import { ThemeProvider } from 'next-themes';

const ThemeContainer = function ({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      storageKey="ed-theme"
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};

export { ThemeContainer };
