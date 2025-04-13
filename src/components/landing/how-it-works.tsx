import React from 'react';
import { BookOpen, Brain, LineChart, Target } from 'lucide-react';
const steps = [{
  icon: Target,
  title: 'Choose The Question Type',
  // Updated title here
  description: 'Maths, Reading, Abstract Reasoning, and more – all aligned with GATE & ASET standards.'
}, {
  icon: BookOpen,
  title: 'Attempt Real GATE-style Questions',
  description: 'Practice from over 1,000 curated questions, designed by WA high performers.'
}, {
  icon: Brain,
  title: 'Get Instant Feedback from AI',
  description: 'Your responses are marked in real time with personalized suggestions for improvement.'
}, {
  icon: LineChart,
  title: 'Track Your Progress',
  description: 'See detailed analytics showing strengths, weaknesses, and improvement over time.'
}];
const HowItWorks = () => {
  return <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            How Our AI Question Bank Transforms Your Preparation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our step-by-step approach helps you systematically improve your GATE performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
          const IconComponent = step.icon;
          return <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-everest-blue rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <div className="w-16 h-16 bg-everest-blue/10 rounded-full flex items-center justify-center">
                    <IconComponent className="text-everest-blue" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {step.description}
                </p>
              </div>;
        })}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="bg-everest-blue/5 border border-everest-blue/20 rounded-lg p-6 max-w-2xl text-center">
            <p className="text-everest-blue font-medium">
              Our AI-powered platform is designed for serious students who want to maximize their preparation time with immediate, personalized feedback and strategic improvement suggestions.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;