
import React from 'react';
import { Play, Video } from 'lucide-react';

const SeeItInAction = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Content */}
            <div className="lg:w-1/2">
              <div className="mb-6">
                <span className="bg-everest-blue/10 text-everest-blue px-4 py-1 rounded-full text-sm font-medium flex items-center w-fit">
                  <Video className="h-4 w-4 mr-1.5" />
                  Watch It Happen Before Your Eyes
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">See It In Action!</h2>
              <p className="text-lg text-gray-600 mb-8">Watch how our Writing AI Tool marks your writing, corrects your errors, rewrites your text for you & gives you an exemplar answer!</p>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 md:mr-4 font-semibold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">Written Text Submitted</h3>
                      <p className="text-gray-600 text-sm">Writing Analysed & Marked </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 md:mr-4 font-semibold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">AI Feedback</h3>
                      <p className="text-gray-600 text-sm">Mistakes & Improvements identified</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 md:mr-4 font-semibold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">AI Rewritten Text & Exemplar Text</h3>
                      <p className="text-gray-600 text-sm">View your own text rewritten & how an expert writes a response!</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-amber-50 p-4 rounded-lg border border-amber-100">
                <div className="flex items-start">
                  <Play className="text-amber-500 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-amber-800 text-sm">
                    <span className="font-medium">Created by our team of expert writers and educators.</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - Video placeholder with rainbow border */}
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <div className="video-container">
                <div className="video-rainbow-border"></div>
                <div className="video-content">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900"></div>
                  <div className="relative z-20 flex flex-col items-center justify-center">
                    <div className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <p className="text-white font-medium text-lg">Watch Demo Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default SeeItInAction;
