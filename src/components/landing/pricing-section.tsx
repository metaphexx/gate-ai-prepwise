import React from 'react';
import { Check, X } from 'lucide-react';
import CTAButton from '../ui-custom/cta-button';

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
        
        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-everest-blue text-white">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-center">Free Plan</th>
                <th className="py-4 px-6 text-center bg-everest-blue">Premium Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="py-4 px-6 border-b border-gray-200 font-medium">Access to Question Bank</td>
                <td className="py-4 px-6 border-b border-gray-200 text-center">
                  <div className="flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="ml-2 text-sm text-gray-500">Limited Access</span>
                  </div>
                </td>
                <td className="py-4 px-6 border-b border-gray-200 text-center bg-blue-50">
                  <div className="flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="ml-2 text-sm text-gray-500">Full Access</span>
                  </div>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-4 px-6 border-b border-gray-200 font-medium">AI Feedback</td>
                <td className="py-4 px-6 border-b border-gray-200 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b border-gray-200 text-center bg-blue-50">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-4 px-6 border-b border-gray-200 font-medium">Performance Analytics</td>
                <td className="py-4 px-6 border-b border-gray-200 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b border-gray-200 text-center bg-blue-50">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-4 px-6 border-b border-gray-200 font-medium">Timed Practice Mode</td>
                <td className="py-4 px-6 border-b border-gray-200 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b border-gray-200 text-center bg-blue-50">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-4 px-6 border-b border-gray-200 font-medium">Personalized Study Recommendations</td>
                <td className="py-4 px-6 border-b border-gray-200 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b border-gray-200 text-center bg-blue-50">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-4 px-6 border-b border-gray-200 font-medium">Priority Support</td>
                <td className="py-4 px-6 border-b border-gray-200 text-center">
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                </td>
                <td className="py-4 px-6 border-b border-gray-200 text-center bg-blue-50">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6 text-center">
                  <p className="text-gray-800 font-bold text-xl mb-1">Free</p>
                  <p className="text-gray-500 text-sm mb-4">Limited access</p>
                  <CTAButton>Start For Free</CTAButton>
                </td>
                <td className="py-4 px-6 text-center bg-blue-50">
                  <p className="text-gray-800 font-bold text-xl mb-1">$19.99/month</p>
                  <p className="text-gray-500 text-sm mb-4">Unlock all features</p>
                  <CTAButton>Upgrade to Premium</CTAButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
