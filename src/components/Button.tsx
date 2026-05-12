import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'full';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-full';
    
    const variants = {
      primary: 'bg-linear-to-r from-brand-coral to-brand-orange text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:shadow-brand-coral/30',
      secondary: 'bg-white dark:bg-white/5 text-brand-navy dark:text-white border border-grey-200 dark:border-white/10 shadow-sm hover:border-grey-300 dark:hover:border-white/20 hover:bg-grey-50 dark:hover:bg-white/10 hover:-translate-y-0.5',
      outline: 'bg-transparent text-brand-navy dark:text-white border border-brand-navy dark:border-white/20 hover:bg-brand-navy dark:hover:bg-white/10 hover:text-white',
      ghost: 'bg-transparent text-brand-navy dark:text-white hover:bg-grey-100 dark:hover:bg-white/5',
    };

    const sizes = {
      sm: 'text-sm px-4 py-2',
      md: 'text-base px-6 py-3',
      lg: 'text-lg px-8 py-4',
      full: 'text-base w-full py-3',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
