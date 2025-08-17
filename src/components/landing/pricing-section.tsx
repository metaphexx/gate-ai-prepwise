import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import CTAButton from '../ui-custom/cta-button';
import { Card, CardContent } from '../ui/card';

const PricingSection = () => {
  const navigate = useNavigate();
  
  return (
    <section id="pricing" className="py-20 bg-[#009dff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Start Free. Upgrade Anytime.
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Choose the plan that works best for your preparation needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan Card */}
          <Card className="border-0 shadow-lg overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
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
                    <span>15 QR, AR & Reading Questions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>1 AI-Marked Writing Task</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Full Length Timed Mock Exams</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">All AI-Powered Skill Trainer Modules</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Access to Newly Released Questions</span>
                  </li>
                </ul>
              </div>
              
              <CTAButton className="w-full" onClick={() => navigate('/signup')}>Start Free</CTAButton>
            </div>
          </Card>
          
          {/* Premium Plan Card */}
          <div className="p-[4px] rounded-2xl relative transform transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-rainbow rounded-2xl animate-rainbow-border"></div>
            <Card className="border-0 shadow-lg overflow-hidden rounded-2xl bg-white relative h-full">
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 text-xs font-semibold uppercase rounded-bl-lg">
                  RECOMMENDED
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">Premium Plan</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold">$9.69</span>
                  <span className="ml-2 text-gray-600">per week, billed monthly</span>
                </div>
                <p className="text-gray-600 mb-6">Everything you need for GATE success.</p>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <p className="font-medium text-gray-800 mb-4">What's included:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>2000+ GATE Questions (QR, AR & Reading)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Unlimited Writing Prompts with AI Marking</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Full Length Timed Mock Exams</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>All AI-Powered Skill Trainer Modules</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Access to Newly Released Questions</span>
                    </li>
                  </ul>
                </div>
                
                <CTAButton 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  variant="primary"
                  rainbowBorder={false}
                  onClick={() => navigate('/signup?plan=premium')}
                >
                  Go Premium
                </CTAButton>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
