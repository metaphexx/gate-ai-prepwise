
import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  children: React.ReactNode;
}

const CTAButton = ({
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...props
}: CTAButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1',
        variant === 'primary' 
          ? 'bg-everest-blue text-white hover:bg-everest-blue/90' 
          : 'bg-white text-everest-blue border border-everest-blue hover:bg-gray-50',
        size === 'default' ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CTAButton;
