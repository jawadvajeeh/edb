import { ReactNode } from 'react';

type ChipProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Chip({ children }: ChipProps) {
  return (
    <div className="inline-block w-auto rounded-full border px-4 py-1 text-xs md:text-base">
      {children}
    </div>
  );
}

export { Chip };
