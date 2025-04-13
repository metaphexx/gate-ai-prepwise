
import React from 'react';
import CTAButton from '../ui-custom/cta-button';
import { ArrowRight, Brain } from 'lucide-react';

const HeroSection = () => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white text-gray-800 py-20 md:py-28">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 animate-fade-in">
            <span className="text-[#009dff]">WA's Most Powerful</span> <span className="rainbow-text" data-text="GATE AI Question Bank">GATE AI Question Bank</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Access over 1,000 expertly designed GATE-style questions with instant AI marking and feedback – built by Perth's top educators for high achievers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => scrollToElement('pricing')}
            >
              Start Free Trial
              <span className="block text-xs mt-1 opacity-80">No credit card required</span>
            </CTAButton>
            <CTAButton 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => scrollToElement('how-it-works')}
            >
              <span className="flex items-center justify-center">
                See How It Works <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </CTAButton>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12 flex justify-center">
          <div className="w-full max-w-md relative">
            <div className="dashboard-screenshot rounded-xl shadow-2xl overflow-hidden relative z-10">
              <img 
                src="/lovable-uploads/3bedcc62-2c03-4635-afca-b38b0f220736.png" 
                alt="Everest Tutoring Dashboard" 
                className="w-full h-auto"
              />
              <div className="rainbow-border"></div>
            </div>
            <div className="absolute inset-0 bg-everest-purple/20 rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-screenshot {
          position: relative;
          width: 110%;
          transform: scale(1);
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        
        .dashboard-screenshot:hover {
          transform: scale(1.05);
        }
        
        .rainbow-border {
          position: absolute;
          inset: 0;
          border: 4px solid transparent;
          border-radius: 0.75rem;
          background: linear-gradient(90deg, #8B5CF6, #D946EF, #F97316, #0EA5E9, #33C3F0, #8B5CF6) border-box;
          -webkit-mask: 
            linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          background-size: 400% 100%;
          animation: rainbow-animation 6s linear infinite;
          pointer-events: none;
        }
        
        @keyframes rainbow-animation {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 400% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
