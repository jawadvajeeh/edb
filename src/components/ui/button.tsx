import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(' ');
}

const base = '';

export const buttonVariants = cva(base, {
  variants: {},
  defaultVariants: {},
});

type VariantPropsOfButton = VariantProps<typeof buttonVariants>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantPropsOfButton;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({}), className)} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
