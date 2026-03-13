import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800',
          'disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-forest-800 text-white hover:bg-forest-700 active:bg-forest-900':
              variant === 'primary',
            'bg-moss-600 text-white hover:bg-moss-700 active:bg-moss-800':
              variant === 'secondary',
            'border-2 border-forest-800 text-forest-800 hover:bg-forest-50':
              variant === 'outline',
            'text-forest-800 hover:bg-forest-50': variant === 'ghost',
          },
          {
            'h-8 px-3 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
