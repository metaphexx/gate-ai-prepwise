import React, { useEffect, useRef } from 'react';
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
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="animate-on-scroll">
        <HeroSection />
      </div>
      <div className="animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
        <HowItWorks />
      </div>
      <div className="animate-on-scroll translate-y-4 opacity-0 transition-all duration-700 delay-100">
        <SeeItInAction />
      </div>
      <div className="animate-on-scroll translate-y-4 opacity-0 transition-all duration-700 delay-200">
        <FeatureShowcase />
      </div>
      <div className="animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
        <ExamSimulationSection />
      </div>
      <div className="animate-on-scroll translate-y-4 opacity-0 transition-all duration-700 delay-100">
        <SkillsTrainingSection />
      </div>
      <div className="animate-on-scroll translate-y-4 opacity-0 transition-all duration-700 delay-200">
        <FeaturesSection />
      </div>
      <div className="animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
        <PricingSection />
      </div>
      <div className="animate-on-scroll translate-y-4 opacity-0 transition-all duration-700 delay-100">
        <TrustSignals />
      </div>
      <div className="animate-on-scroll translate-y-4 opacity-0 transition-all duration-700 delay-200">
        <TestimonialsSection />
      </div>
      <div className="animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
        <FaqSection />
      </div>
      <div className="animate-on-scroll translate-y-4 opacity-0 transition-all duration-700">
        <FinalCta />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
