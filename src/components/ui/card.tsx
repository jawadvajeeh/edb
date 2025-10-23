import { cn } from '@/lib/utils';

type CardProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
// className="border-border100 flex w-full flex-col gap-4 rounded-lg border bg-white p-4 shadow-md md:p-8"

const base = 'flex flex-col p-4 md:p-8 bg-cool-grey-50 rounded-xl gap-4';

function Card({ children, className, ...props }: CardProps) {
  return (
    <div {...props} className={cn(base, className)}>
      {children}
    </div>
  );
}

export { Card };
