import React from 'react';
import { BookOpen, Brain, LineChart, Target } from 'lucide-react';

const steps = [{
  icon: Target,
  title: 'Choose Question Type',
  description: 'Maths (QR), Reading, Writing & Abstract Reasoning - all aligned with GATE/ASET Standards'
}, {
  icon: BookOpen,
  title: 'Attempt Real GATE-style Questions',
  description: 'Practice from over 2,000 curated questions, designed by WA 99+ ATAR Tutors'
}, {
  icon: Brain,
  title: 'Get Instant Feedback from AI',
  description: 'Writing responses are marked in real time with personalized suggestions for improvement. Ask our Smart Tutor for help with reading.'
}, {
  icon: LineChart,
  title: 'Track Your Progress',
  description: 'See detailed analytics showing strengths, weaknesses, and improvement over time.'
}];

const HowItWorks = () => {
  return <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How Our GATE/ASET AI Question Bank Transforms Your Preparation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our step-by-step approach helps you systematically improve your GATE performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
          const IconComponent = step.icon;
          return <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
                <div className="rainbow-border absolute inset-0 rounded-xl pointer-events-none"></div>
                
                <div className="flex items-center mb-4 relative z-10">
                  <div className="w-10 h-10 bg-everest-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <div className="w-16 h-16 bg-everest-blue/10 rounded-full flex items-center justify-center">
                    <IconComponent className="text-everest-blue" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base relative z-10">
                  {step.description}
                </p>
              </div>;
        })}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="bg-everest-blue/5 border border-everest-blue/20 rounded-lg p-6 max-w-2xl text-center">
            <p className="text-everest-blue font-medium">Our AI-powered platform is designed for serious students who want to maximize their preparation time with immediate, personalised feedback and strategic improvement suggestions.</p>
          </div>
        </div>
      </div>
      
      <style>{`
        .rainbow-border {
          border: 5px solid transparent;
          background: linear-gradient(90deg, #8B5CF6, #D946EF, #F97316, #0EA5E9, #33C3F0, #8B5CF6) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          background-size: 400% 100%;
          animation: rainbow-animation 6s linear infinite;
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
    </section>;
};

export default HowItWorks;
