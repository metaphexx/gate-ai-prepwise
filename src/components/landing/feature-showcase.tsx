
import React from 'react';
import { Check, Brain, Target } from 'lucide-react';

const FeatureShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Right side - Screenshot */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src="/lovable-uploads/379d2202-22a4-4679-a5e9-a22a4956687b.png" 
                  alt="Everest Tutoring Question Bank Interface" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-everest-purple/10 to-everest-blue/10 rounded-xl -z-10 transform translate-x-4 translate-y-4"></div>
            </div>
          </div>

          {/* Left side - Content */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="bg-everest-blue/10 text-everest-blue px-4 py-1 rounded-full text-sm font-medium flex items-center w-fit">
                <Brain className="h-4 w-4 mr-1.5" />
                AI-Powered Practice That Accelerates Growth
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Smart Practice, Real Results
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Access our advanced GATE-style question bank — enhanced with instant AI feedback, curated by 99+ ATAR WA graduates. Practice smarter with real-time marking and explanations.
            </p>

            <ul className="space-y-3">
              {[
                '2,000+ GATE-Ready Practice Questions',
                'AI Marking & Feedback in Writing',
                'AI Rewrite your text + AI Exemplar for Writing',
                'Auto-Tracking of Strengths, Weaknesses, & Progress',
                'Questions assorted by Topics'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-everest-blue" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 bg-amber-50 p-4 rounded-lg border border-amber-100">
              <div className="flex items-start">
                <Target className="text-amber-500 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-amber-800 text-sm">
                  <span className="font-medium">Bonus:</span> Our AI gives feedback like a tutor — in seconds, not days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
