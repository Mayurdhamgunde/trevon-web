import React from 'react';
import { cn } from '../utils/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('max-w-[1440px] mx-auto px-6 md:px-12 w-full', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
