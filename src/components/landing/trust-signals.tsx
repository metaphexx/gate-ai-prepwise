
import React from 'react';
import { Building, Lightbulb, Lock, Star } from 'lucide-react';

const trustItems = [
  {
    icon: Building,
    text: 'Used by students from Perth Modern School, Rossmoyne, Willetton, and more.'
  },
  {
    icon: Lightbulb,
    text: 'Built by medical students & former GATE top scorers.'
  },
  {
    icon: Lock,
    text: 'Secure and compliant platform (100% student data privacy).'
  },
  {
    icon: Star,
    text: '500+ students currently using the platform.'
  }
];

const TrustSignals = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-everest-blue/10 p-3 rounded-full mr-4">
                <item.icon className="h-6 w-6 text-everest-blue" />
              </div>
              <p className="text-gray-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
