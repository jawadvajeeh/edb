'use client';

import { MonitorCog, Moon, Sun } from 'lucide-react';
import { ToggleGroupItem, ToggleGroupRoot } from '../ui/toggle-group';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // use undefined before mount (uncontrolled) → no mismatch
  const currentValue = mounted ? (theme ?? 'system') : undefined;
  return (
    <ToggleGroupRoot
      value={currentValue}
      onValueChange={(v) => {
        if (v) setTheme(v);
      }}
      className="bg-surface flex items-center gap-2 rounded-full px-2 py-2 md:gap-4"
    >
      <ToggleGroupItem
        onClick={() => setTheme('light')}
        value="light"
        className="data-[state=on]:bg-secondary data-[state=on]:text-on-secondary rounded-full p-1"
      >
        <Sun className="text-text-neutral" size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="data-[state=on]:bg-secondary data-[state=on]:text-on-secondary rounded-full p-1"
        onClick={() => setTheme('dark')}
        value="dark"
      >
        <Moon className="text-text-neutral" size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="data-[state=on]:bg-secondary data-[state=on]:text-on-secondary rounded-full p-1"
        onClick={() => setTheme('system')}
        value="system"
      >
        <MonitorCog className="text-text-neutral" size={16} />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

export { ThemeChanger };
