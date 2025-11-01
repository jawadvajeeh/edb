import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';

const customLinkVariants = cva(
  `text-text-default inline-block py-2 px-8 rounded-full text-base transition-colors hover:text-text-strong`,
  {
    variants: {
      variant: {
        filled: `bg-link-primary text-text-primary hover:bg-link-primary-hover`,
        ghost: `bg-transparent `,
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  }
);

type VariantPropsOfCustomLink = VariantProps<typeof customLinkVariants>;

type CustomLinkProps = LinkProps &
  VariantPropsOfCustomLink & {
    children: React.ReactNode;
    className?: string;
  };

function CustomLink({ children, className, variant, href, ...props }: CustomLinkProps) {
  return (
    <Link className={cn(customLinkVariants({ variant }), className)} href={href} {...props}>
      {children}
    </Link>
  );
}

export { CustomLink };
