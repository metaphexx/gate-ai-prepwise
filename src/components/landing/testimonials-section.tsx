
import React from 'react';
import { Star } from 'lucide-react';
import CTAButton from '../ui-custom/cta-button';

const testimonials = [
  {
    name: "Neethu",
    role: "Parent (Yr 6 Student)",
    comment: "The AI feedback helped my daughter improve her written responses so quickly. This is a game-changer!",
    stars: 5
  },
  {
    name: "Zihan",
    role: "Year 5 Student",
    comment: "The instant marking was so helpful – I knew what to fix straight away. I ended up ranking in the top 10% for my school!",
    stars: 5
  },
  {
    name: "Michael",
    role: "Parent (Yr 4 Student)",
    comment: "My son enjoys the instant feedback. He's motivated to keep improving because he can see his progress right away.",
    stars: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Students & Parents Love Everest Tutoring
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what our community has to say about their experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-everest-blue/20 rounded-full flex items-center justify-center text-everest-blue font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-14">
          <CTAButton 
            className="mx-auto"
            onClick={() => {
              const element = document.getElementById('pricing');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Join Our Growing Community
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
