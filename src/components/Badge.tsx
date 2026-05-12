import React from 'react';
import { cn } from '../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'subtle' | 'outline';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, children, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-coral text-white',
      subtle: 'bg-brand-coral/10 text-brand-coral border border-brand-coral/20',
      outline: 'bg-transparent text-brand-navy dark:text-white border border-brand-navy/20 dark:border-white/20',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
