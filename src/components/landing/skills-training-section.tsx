import React from 'react';
import { LineChart, Brain, CheckCircle2, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const SkillsTrainingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <div className="dashboard-screenshot rounded-xl shadow-md overflow-hidden relative z-10 cursor-pointer">
                  <img 
                    src="/lovable-uploads/468bf987-2aec-49af-93ce-48f54b742500.png" 
                    alt="Skills Training Interface" 
                    className="w-full h-auto"
                  />
                  <div className="rainbow-border"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="bg-everest-blue/10 text-everest-blue px-4 py-1 rounded-full text-sm font-medium flex items-center w-fit">
                <LineChart className="h-4 w-4 mr-1.5" />
                Sharpen the Skills That Matter Most
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Performance Enhancement
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Target the core abilities tested in GATE exams — memory, reasoning, focus, speed. Our skill-building mini modules are designed to help students build accuracy under pressure, one drill at a time.
            </p>

            <ul className="space-y-3">
              {[
                'Time-Bound Critical Thinking Challenges',
                'Personalized Training Based on Past Attempts',
                'Custom Focus Areas: Verbal, Quant, Logic',
                'AI Coaching to Strengthen Weak Points'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-everest-blue" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 bg-amber-50 p-4 rounded-lg border border-amber-100">
              <div className="flex items-start">
                <Brain className="text-amber-500 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-amber-800 text-sm">
                  <span className="font-medium">Developed by GATE top scorers and WA educators.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-screenshot {
          position: relative;
          transform: scale(1);
          transition: transform 0.3s ease;
        }
        
        .dashboard-screenshot:hover {
          transform: scale(1.05);
        }
        
        .rainbow-border {
          position: absolute;
          inset: 0;
          border: 5px solid transparent;
          border-radius: 0.75rem;
          background: linear-gradient(90deg, #8B5CF6, #D946EF, #F97316, #0EA5E9, #33C3F0, #8B5CF6) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          background-size: 400% 100%;
          animation: rainbow-animation 6s linear infinite;
          pointer-events: none;
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
    </section>
  );
};

export default SkillsTrainingSection;
