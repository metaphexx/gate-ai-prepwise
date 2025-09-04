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
    name: "Raj",
    role: "Parent (Yr 5 Student)",
    comment: "We tried many programs before, but Everest's AI feedback is on another level. My son's writing scores improved within weeks!",
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
    name: "Zihan",
    role: "Year 5 Student",
    comment: "The instant marking was so helpful, I knew what to fix straight away!",
    stars: 5
  },
  {
    name: "Emily",
    role: "Year 4 Student",
    comment: "I love how the system explains my mistakes. It's like having a tutor available whenever I need help!",
    stars: 5
  },
  {
    name: "David",
    role: "Parent (Yr 5 Student)",
    comment: "The personalized learning path keeps my daughter engaged. She's developing critical thinking skills I didn't expect!",
    stars: 5
  },
  {
    name: "Ling",
    role: "Year 6 Student",
    comment: "I improved my reading comprehension score by 35% in just two months using Everest's structured approach.",
    stars: 5
  },
  {
    name: "Amir",
    role: "Parent (Yr 4 Student)",
    comment: "The adaptive question selection is brilliant - it always challenges my son at just the right level.",
    stars: 5
  },
  {
    name: "Jessica",
    role: "Parent (Yr 6 Student)",
    comment: "My daughter went from struggling with reading comprehension to scoring in the top 10% of her class in just 3 months!",
    stars: 5
  },
  {
    name: "Connor",
    role: "Year 5 Student",
    comment: "The mock exams showed me exactly what the real test would be like. I wasn't nervous at all on test day!",
    stars: 5
  },
  {
    name: "Priya",
    role: "Parent (Yr 4 Student)",
    comment: "The progress tracking feature helps me see exactly where my son is improving. It's so detailed and helpful!",
    stars: 5
  },
  {
    name: "Lucas",
    role: "Year 6 Student",
    comment: "I love that I can practice anytime I want. The AI teacher never gets tired and always explains things clearly!",
    stars: 5
  },
  {
    name: "Mei",
    role: "Parent (Yr 5 Student)",
    comment: "Worth every penny! My daughter's confidence has soared, and her test scores prove the system works.",
    stars: 5
  },
  {
    name: "Oliver",
    role: "Year 4 Student",
    comment: "The questions get harder as I get better, which keeps me challenged. It's like a video game but for learning!",
    stars: 5
  },
  {
    name: "Fatima",
    role: "Parent (Yr 6 Student)",
    comment: "The detailed performance reports help me understand my child's strengths and areas for improvement.",
    stars: 5
  },
  {
    name: "Jack",
    role: "Year 5 Student",
    comment: "I improved my numerical reasoning score by 40 points in just 6 weeks. The step-by-step explanations are amazing!",
    stars: 5
  },
  {
    name: "Anita",
    role: "Parent (Yr 4 Student)",
    comment: "My son actually looks forward to his practice sessions now. The gamification elements really work!",
    stars: 5
  },
  {
    name: "Ethan",
    role: "Year 6 Student",
    comment: "The writing feedback helped me structure my essays better. I can see the improvement in every practice test.",
    stars: 5
  },
  {
    name: "Kavitha",
    role: "Parent (Yr 5 Student)",
    comment: "The AI identifies learning gaps I never noticed. It's like having a personal tutor available 24/7.",
    stars: 5
  }
];

const TestimonialsSection = () => {
  // Create duplicated testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

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
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left hover:pause-animation py-6">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 mx-3 bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-sm leading-relaxed min-h-20">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-everest-blue/20 rounded-full flex items-center justify-center text-everest-blue font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
