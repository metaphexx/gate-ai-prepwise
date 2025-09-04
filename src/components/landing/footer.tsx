import React from 'react';
const Footer = () => {
  return <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Everest GATE</h3>
            <p className="mb-4 text-sm">The AI-powered GATE exam preparation platform built by 99+ ATAR WA Tutors</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              
              <li><a href="#" className="hover:text-everest-blue transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-everest-blue transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>3/723 Ranford Road, Harrisdale, WA 6155, Australia</li>
              <li>info@everesttutoring.com.au</li>
              <li>+61 404 604 673</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Everest Tutoring. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-everest-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-everest-blue transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;