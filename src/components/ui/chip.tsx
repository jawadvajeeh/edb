import { ReactNode } from 'react';

type ChipProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Chip({ children }: ChipProps) {
  return (
    <div className="border-chip-border-outline bg-chip-background-outline text-chip-text-outline inline-block rounded-full border px-1 text-sm font-medium transition-colors md:text-base">
      {children}
    </div>
  );
}

export { Chip };
