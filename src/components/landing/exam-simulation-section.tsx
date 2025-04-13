
import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ExamSimulationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Swapped: Screenshots now on the right */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="bg-everest-blue/10 text-everest-blue px-4 py-1 rounded-full text-sm font-medium flex items-center w-fit">
                <Target className="h-4 w-4 mr-1.5" />
                Train Like It's the Real Exam
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Realistic Exam Simulation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience the GATE exam environment with timed mock tests built to reflect real difficulty, structure, and pacing. After every attempt, receive detailed performance insights to guide your next step.
            </p>

            <ul className="space-y-3">
              {[
                'True-to-Exam Mock Papers',
                'Instant AI-Generated Performance Reports',
                'Strength & Weakness Breakdown',
                'Score Forecasts Based on Real Data'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-everest-blue" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <Target className="text-everest-blue h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-blue-800 text-sm">
                  <span className="font-medium">Bonus:</span> Get feedback within seconds — no manual marking required.
                </p>
              </div>
            </div>
          </div>

          {/* Swapped: Content now on the left */}
          <div className="lg:w-1/2">
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <div className="dashboard-screenshot rounded-xl shadow-md overflow-hidden relative z-10 cursor-pointer">
                  <img 
                    src="/lovable-uploads/37b08da1-4137-4671-8d91-f2ea486bd111.png" 
                    alt="Mock Exam Interface" 
                    className="w-full h-auto"
                  />
                  <div className="rainbow-border"></div>
                </div>
              </CardContent>
            </Card>
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
          border: 3px solid transparent;
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

export default ExamSimulationSection;
