import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const base = 'text-indigo-900 rounded-md disabled:opacity-70 disabled:cursor-not-allowed';

export const buttonVariants = cva(base, {
  variants: {
    variant: {
      primary: 'bg-indigo-100',
    },
    size: {
      base: 'text-base p-2',
      small: 'text-sm px-2 py-1',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'base',
  },
});

type VariantPropsOfButton = VariantProps<typeof buttonVariants>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantPropsOfButton;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, disabled, ...rest }, ref) => {
    const isDisabled = disabled;
    return (
      <button
        aria-disabled={isDisabled ? true : undefined}
        ref={ref}
        disabled={isDisabled}
        className={cn(buttonVariants({ variant, size }), className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
