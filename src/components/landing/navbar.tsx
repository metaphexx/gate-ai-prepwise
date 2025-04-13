
import React, { useState, useEffect } from 'react';
import CTAButton from '../ui-custom/cta-button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className={`font-bold text-2xl ${isScrolled ? 'text-everest-purple' : 'text-white'}`}>
              Everest GATE
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <ul className="flex space-x-8">
                <li>
                  <button 
                    onClick={() => scrollToElement('how-it-works')}
                    className="hover:opacity-80 transition-opacity font-medium"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToElement('pricing')}
                    className="hover:opacity-80 transition-opacity font-medium"
                  >
                    Pricing
                  </button>
                </li>
              </ul>
            </nav>
            <CTAButton 
              size="default" 
              onClick={() => scrollToElement('pricing')}
            >
              Start Free Trial
            </CTAButton>
          </div>
          
          <button 
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} /> : 
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <nav className="container mx-auto px-4">
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToElement('how-it-works')}
                  className="text-gray-800 font-medium block w-full text-left py-2"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToElement('pricing')}
                  className="text-gray-800 font-medium block w-full text-left py-2"
                >
                  Pricing
                </button>
              </li>
              <li className="pt-2">
                <CTAButton 
                  size="default" 
                  className="w-full"
                  onClick={() => scrollToElement('pricing')}
                >
                  Start Free Trial
                </CTAButton>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
