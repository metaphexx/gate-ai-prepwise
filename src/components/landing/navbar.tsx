import React, { useState, useEffect } from 'react';
import CTAButton from '../ui-custom/cta-button';
import { Menu, X, LogIn, UserRound } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

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

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogoLoad = () => {
    setLogoLoaded(true);
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
            <a href="/" className="flex items-center">
              <img 
                src="lovable-uploads/821f8613-4281-44ea-a659-b16ba212c4b4.png" 
                alt="Everest Tutoring Logo" 
                className={`h-14 w-auto object-contain transition-opacity duration-300 ${
                  logoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleLogoLoad}
                onError={(e) => {
                  console.error('Logo image failed to load');
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="text-gray-700">
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
            
            {!isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  className="font-medium text-gray-700 hover:text-primary"
                  onClick={handleLogin}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Log in
                </Button>
                <CTAButton 
                  size="default" 
                  onClick={() => scrollToElement('pricing')}
                >
                  Start For Free
                </CTAButton>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative rounded-full w-10 h-10 p-0">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary">
                      <UserRound className="h-5 w-5" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium">My Account</p>
                    <p className="text-xs text-muted-foreground mt-1">user@example.com</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">Dashboard</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          
          <button 
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <X className="h-6 w-6 text-gray-800" /> : 
              <Menu className="h-6 w-6 text-gray-800" />
            }
          </button>
        </div>
      </div>
      
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
              {!isLoggedIn ? (
                <>
                  <li>
                    <Button 
                      variant="ghost" 
                      className="font-medium text-gray-700 w-full justify-start py-2"
                      onClick={handleLogin}
                    >
                      <LogIn className="mr-2 h-4 w-4" />
                      Log in
                    </Button>
                  </li>
                  <li className="pt-2">
                    <CTAButton 
                      size="default" 
                      className="w-full"
                      onClick={() => scrollToElement('pricing')}
                    >
                      Start For Free
                    </CTAButton>
                  </li>
                </>
              ) : (
                <>
                  <li className="border-t border-gray-100 pt-2">
                    <p className="text-sm font-medium px-2 pt-2">My Account</p>
                    <p className="text-xs text-muted-foreground px-2">user@example.com</p>
                  </li>
                  <li>
                    <button className="text-gray-800 font-medium block w-full text-left py-2">
                      Dashboard
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-800 font-medium block w-full text-left py-2">
                      Profile
                    </button>
                  </li>
                  <li>
                    <button className="text-gray-800 font-medium block w-full text-left py-2">
                      Settings
                    </button>
                  </li>
                  <li>
                    <button 
                      className="text-gray-800 font-medium block w-full text-left py-2"
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
