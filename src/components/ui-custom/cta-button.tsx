
import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  children: React.ReactNode;
  rainbowBorder?: boolean;
}

const CTAButton = ({
  variant = 'primary',
  size = 'default',
  className,
  children,
  rainbowBorder = false,
  ...props
}: CTAButtonProps) => {
  return (
    <div className={cn(
      "relative inline-block w-full sm:w-auto", 
      rainbowBorder && "p-[3px] rounded-lg"
    )}>
      {rainbowBorder && (
        <div className="absolute inset-0 bg-gradient-rainbow rounded-lg animate-rainbow-border"></div>
      )}
      <button
        className={cn(
          'w-full rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 relative z-10',
          variant === 'primary' 
            ? 'bg-everest-blue text-white hover:bg-everest-blue/90' 
            : 'bg-white text-everest-blue border border-everest-blue hover:bg-gray-50',
          size === 'default' ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base',
          rainbowBorder && 'bg-everest-blue text-white',
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default CTAButton;
