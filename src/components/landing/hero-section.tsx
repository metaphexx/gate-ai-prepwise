
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
            Master the GATE Exam with AI-Powered Feedback.
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
            <div className="bg-white rounded-xl shadow-2xl p-6 relative z-10">
              <div className="bg-everest-light-blue/20 p-5 rounded-lg mb-4 flex items-center">
                <Brain className="w-12 h-12 text-everest-blue mr-4" />
                <div>
                  <h3 className="text-gray-800 font-semibold">
                    <span className="rainbow-text" data-text="AI-Powered Feedback">AI-Powered Feedback</span>
                  </h3>
                  <p className="text-gray-600 text-sm">Get instant expert guidance on your answers</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <p className="text-gray-800 text-sm font-medium mb-2">Sample Question:</p>
                <p className="text-gray-700">Explain the relationship between temperature and the rate of a chemical reaction.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-gray-800 text-sm font-medium">AI Feedback:</p>
                <p className="text-gray-700 text-sm">Good answer! You've correctly explained the Arrhenius equation relationship. Consider adding how catalysts affect this relationship for a more complete response.</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-everest-purple/20 rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
