
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '../ui-custom/cta-button';

const FinalCta = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-[#009dff] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get Started with Everest's GATE AI Question Bank – Free
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
          Join hundreds of WA students preparing smarter and scoring higher with Everest's cutting-edge GATE prep platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton 
            size="lg" 
            className="mx-auto !bg-slate-800 hover:!bg-slate-700"
            onClick={() => navigate('/signup')}
          >
            Start For Free
          </CTAButton>
          <CTAButton 
            variant="secondary" 
            size="lg" 
            className="mx-auto bg-white"
            onClick={() => navigate('/signup')}
          >
            View Premium Plans
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
