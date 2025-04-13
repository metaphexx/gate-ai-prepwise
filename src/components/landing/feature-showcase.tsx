import React from 'react';
import { CheckCircle2, Brain, Target } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const FeatureShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
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
                    <CheckCircle2 className="h-5 w-5 text-everest-blue" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <Target className="text-blue-500 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-blue-800 text-sm">
                  <span className="font-medium">Bonus:</span> Get feedback within seconds — no manual marking required.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  src: "/lovable-uploads/29817a2b-e73b-4bdc-8fda-80a39e500329.png", 
                  alt: "Abstract Reasoning Question",
                  title: "Abstract Reasoning",
                  description: "Pattern recognition questions to test your logical thinking skills"
                },
                { 
                  src: "/lovable-uploads/e18084dc-f40e-426b-a44d-6ff487f2ea6e.png", 
                  alt: "Writing Test Interface",
                  title: "Writing Test",
                  description: "Essay prompts with AI-powered feedback and marking"
                },
                { 
                  src: "/lovable-uploads/39f0a993-6974-400e-af4e-d125bd10c335.png", 
                  alt: "Reading Comprehension Test",
                  title: "Reading Comprehension",
                  description: "Passages and questions to assess your understanding"
                },
                { 
                  src: "/lovable-uploads/409c5f51-d2c5-4a70-8931-068530c33435.png", 
                  alt: "Quantitative Reasoning Problem",
                  title: "Quantitative Reasoning",
                  description: "Math problems to evaluate your numerical skills"
                }
              ].map((screenshot, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="dashboard-screenshot rounded-xl shadow-md overflow-hidden relative z-10 cursor-pointer border border-gray-100">
                      <img 
                        src={screenshot.src} 
                        alt={screenshot.alt} 
                        className="w-full h-auto"
                      />
                      <div className="rainbow-border"></div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{screenshot.title}</h4>
                      <p className="text-sm text-gray-600">{screenshot.description}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
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
          -webkit-mask: 
            linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
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
      `}} />
    </section>
  );
};

export default FeatureShowcase;
