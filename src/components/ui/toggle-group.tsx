'use client';

import * as React from 'react';

type ToggleGroupRootCtxt = {
  value: string | null | undefined;
  onValueChange?: (value: string | null) => void;
};

const ToggleGroupRootCtxt = React.createContext<ToggleGroupRootCtxt | undefined>(undefined);

const useToggleGroup = () => {
  const context = React.useContext(ToggleGroupRootCtxt);
  if (!context) {
    throw new Error('useToggleGroup must be used within a ToggleGroupRoot');
  }
  return context;
};

type ToggleGroupRootProps = {
  children: React.ReactNode;
  value: string | null | undefined;
  onValueChange?: (value: string | null) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export function ToggleGroupRoot({
  children,
  value,
  onValueChange = () => {},
  ...props
}: ToggleGroupRootProps) {
  return (
    <ToggleGroupRootCtxt.Provider value={{ value, onValueChange }}>
      <div {...props}>{children}</div>
    </ToggleGroupRootCtxt.Provider>
  );
}

type ToggleGroupItemProps = {
  children: React.ReactNode;
  value: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ToggleGroupItem({ children, value, ...props }: ToggleGroupItemProps) {
  const ctxt = useToggleGroup();

  const isToggleOn = ctxt.value === value;

  function handleToggleItem() {
    if (ctxt.onValueChange) {
      ctxt.onValueChange(value);
    }
  }

  return (
    <button onClick={handleToggleItem} {...props} data-state={isToggleOn ? 'on' : 'off'}>
      {children}
    </button>
  );
}
