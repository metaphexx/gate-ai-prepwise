
import React from 'react';
import { Check, X } from 'lucide-react';
import CTAButton from '../ui-custom/cta-button';
import { Card, CardContent } from '../ui/card';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Start Free. Upgrade Anytime.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for your preparation needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan Card */}
          <Card className="border shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-1">Free Plan</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold">$0</span>
                <span className="ml-2 text-gray-600">Forever</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for trying out our platform.</p>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <p className="font-medium text-gray-800 mb-4">What's included:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><span className="text-gray-500">(Limited)</span> GATE-Style Questions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Instant AI Feedback</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Writing Feedback</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Analytics Dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Timed Mock Exams</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Personalized Recommendations</span>
                  </li>
                </ul>
              </div>
              
              <CTAButton className="w-full">Start Free</CTAButton>
            </div>
          </Card>
          
          {/* Premium Plan Card */}
          <Card className="border shadow-md overflow-hidden bg-blue-50 relative">
            <div className="absolute top-0 right-0">
              <div className="bg-blue-500 text-white px-4 py-1 text-xs font-semibold uppercase rounded-bl-lg">
                RECOMMENDED
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-1">Premium Plan</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold">$14.99</span>
                <span className="ml-2 text-gray-600">per month</span>
              </div>
              <p className="text-gray-600 mb-6">Everything you need for GATE success.</p>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <p className="font-medium text-gray-800 mb-4">What's included:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>GATE-Style Questions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Instant AI Feedback</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Writing Feedback</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Analytics Dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Timed Mock Exams</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Personalized Recommendations</span>
                  </li>
                </ul>
              </div>
              
              <CTAButton className="w-full bg-blue-500 hover:bg-blue-600 text-white">Go Premium</CTAButton>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
