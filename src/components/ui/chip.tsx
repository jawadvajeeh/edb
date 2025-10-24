import { ReactNode } from 'react';

type ChipProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Chip({ children }: ChipProps) {
  return (
    <div className="inline-block rounded-full border border-indigo-900 bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-900 transition-colors md:px-4 md:text-base">
      {children}
    </div>
  );
}

export { Chip };
