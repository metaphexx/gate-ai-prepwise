
import React, { useEffect } from 'react';
import Navbar from '../components/landing/navbar';
import HeroSection from '../components/landing/hero-section';
import HowItWorks from '../components/landing/how-it-works';
import FeatureShowcase from '../components/landing/feature-showcase';
import ExamSimulationSection from '../components/landing/exam-simulation-section';
import SkillsTrainingSection from '../components/landing/skills-training-section';
import FeaturesSection from '../components/landing/features-section';
import SeeItInAction from '../components/landing/see-it-in-action';
import PricingSection from '../components/landing/pricing-section';
import TestimonialsSection from '../components/landing/testimonials-section';
import TrustSignals from '../components/landing/trust-signals';
import FaqSection from '../components/landing/faq-section';
import FinalCta from '../components/landing/final-cta';
import Footer from '../components/landing/footer';

const Index = () => {
  useEffect(() => {
    // Simple animation on scroll effect
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate');
        }
      });
    };
    
    // Run once on load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SeeItInAction />
      <FeatureShowcase />
      <ExamSimulationSection />
      <SkillsTrainingSection />
      <FeaturesSection />
      <PricingSection />
      <TrustSignals />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
