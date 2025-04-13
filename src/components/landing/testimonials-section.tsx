
import React from 'react';
import { Star } from 'lucide-react';
import CTAButton from '../ui-custom/cta-button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  },
  {
    name: "Sarah",
    role: "Year 6 Student",
    comment: "The practice exams are just like the real ones! I feel so much more confident about the actual test now.",
    stars: 5
  },
  {
    name: "Raj",
    role: "Parent (Yr 5 Student)",
    comment: "We tried many programs before, but Everest's AI feedback is on another level. My son's writing scores improved within weeks!",
    stars: 5
  },
  {
    name: "Emily",
    role: "Year 4 Student",
    comment: "I love how the system explains my mistakes. It's like having a tutor available whenever I need help!",
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
        
        <div className="max-w-6xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              duration: 40,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic h-24 overflow-hidden">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static left-0 right-auto mr-2 translate-y-0" />
              <CarouselNext className="relative static right-0 left-auto ml-2 translate-y-0" />
            </div>
          </Carousel>
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
      
      {/* Standard React style element without jsx prop */}
      <style>
        {`
          @keyframes autoScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialsSection;
