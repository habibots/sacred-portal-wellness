import { cn } from '@/lib/utils/cn';
import { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-md border bg-white px-4 py-2 text-base dark:bg-charcoal-800 dark:text-cream-500',
          'focus-visible:outline-none focus-visible:ring-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error
            ? 'border-error-500 focus-visible:ring-error-500'
            : 'border-charcoal-200 focus-visible:ring-forest-800 dark:border-charcoal-600',
          className
        )}
        aria-invalid={error || undefined}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
