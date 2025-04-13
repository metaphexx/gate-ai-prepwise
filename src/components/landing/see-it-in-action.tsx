import React from 'react';
import { Play } from 'lucide-react';
const SeeItInAction = () => {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">See It In Action!</h2>
              <p className="text-lg text-gray-600 mb-8">Watch how our Writing AI Tool marks your writing, corrects your errors, rewrites your text for you & gives you an exemplar answer!</p>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Written Text Submitted</h3>
                      <p className="text-gray-600">Writing Analysed & Marked </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">AI Feedback</h3>
                      <p className="text-gray-600">Mistakes & Improvements identified</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">AI Rewritten Text & Exemplar Text</h3>
                      <p className="text-gray-600">View your own text rewritten & how an expert writes a response!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Video placeholder */}
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900 z-10"></div>
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
    </section>;
};
export default SeeItInAction;