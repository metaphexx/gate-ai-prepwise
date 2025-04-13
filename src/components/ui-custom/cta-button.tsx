
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

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
          'w-full sm:w-auto rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 relative z-10 flex items-center justify-center',
          variant === 'primary' 
            ? 'bg-[#009dff] text-white hover:bg-[#009dff]/90' 
            : 'bg-white text-[#009dff] border border-[#009dff] hover:bg-gray-50',
          size === 'default' ? 'px-6 py-2 text-sm h-12' : 'px-8 py-2 text-base h-12',
          rainbowBorder && 'bg-[#009dff] text-white',
          className
        )}
        {...props}
      >
        {children}
        {variant === 'secondary' && <ArrowRight className="ml-2 h-4 w-4" />}
      </button>
    </div>
  );
};

export default CTAButton;

