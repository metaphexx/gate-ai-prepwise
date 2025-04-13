
import React from 'react';
import { Brain, CheckCircle2, Database, LineChart, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Marking Engine',
    description: 'Receive instant feedback just like having a tutor by your side, 24/7.'
  },
  {
    icon: Database,
    title: 'Expertly Crafted Question Bank',
    description: 'All questions are designed by former GATE students and top academic achievers.'
  },
  {
    icon: CheckCircle2,
    title: 'Unlimited Practice',
    description: 'Train as much as you like. Our free tier lets you try it, and our premium plans unlock full access.'
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description: 'Visual dashboards show your strengths and highlight areas for improvement.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly',
    description: 'Study anytime, anywhere – compatible with phones, tablets, and laptops.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Built for Students Who Want an Edge
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform is designed with features that make a real difference in your GATE preparation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.slice(0, 3).map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 bg-everest-blue/10 p-3 rounded-full">
                  <feature.icon className="w-6 h-6 text-everest-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            {features.slice(3).map((feature, index) => (
              <div 
                key={index + 3} 
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4 bg-everest-blue/10 p-3 rounded-full">
                    <feature.icon className="w-6 h-6 text-everest-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

