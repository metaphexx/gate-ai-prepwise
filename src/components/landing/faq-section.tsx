
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'Is this aligned with the real GATE exam?',
    answer: 'Yes – our question bank is modeled after actual GATE and ASET formats used in WA.'
  },
  {
    question: 'How is the AI feedback different from other tools?',
    answer: 'Our AI provides specific, written explanations – not just right/wrong answers. It analyzes your response patterns and offers targeted improvement suggestions.'
  },
  {
    question: 'Do I need to enter payment details for the free trial?',
    answer: 'No. Get started without entering any credit card information. We believe in our product enough to let you try it risk-free.'
  },
  {
    question: 'Can I cancel or switch plans anytime?',
    answer: 'Yes – you're in full control. Cancel or upgrade at any time through your account settings with no hidden fees or commitments.'
  },
  {
    question: 'How often is new content added?',
    answer: 'We regularly update our question bank with new content and improve our AI engine based on educational research and user feedback.'
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our platform
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
