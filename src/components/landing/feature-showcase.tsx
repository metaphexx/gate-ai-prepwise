
import React from 'react';
import { Check } from 'lucide-react';

const FeatureShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Screenshot */}
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

          {/* Right side - Content */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="bg-everest-blue/10 text-everest-blue px-4 py-1 rounded-full text-sm font-medium">
                Question Bank
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Extensive Practice Questions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Access our comprehensive database of ASET-style questions, carefully curated
              to cover all exam topics and difficulty levels. Practice at your own pace with
              detailed explanations and solutions.
            </p>

            <ul className="space-y-3">
              {[
                'Thousands of Practice Questions',
                'Detailed Solution Explanations',
                'Topic-wise Organization',
                'Difficulty-based Filtering'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-everest-blue" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
