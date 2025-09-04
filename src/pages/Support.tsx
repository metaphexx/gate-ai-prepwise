import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from '@/hooks/use-toast';

const supportFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  issueType: z.string().min(1, 'Please select an issue type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type SupportFormValues = z.infer<typeof supportFormSchema>;

const supportFAQs = [
  {
    question: 'How do I upgrade to premium?',
    answer: 'You can upgrade to premium by visiting your account settings and selecting the "Upgrade Plan" option. Choose your preferred payment method and complete the checkout process.'
  },
  {
    question: 'How do I reset my password?',
    answer: 'Click on "Forgot Password" on the login page and enter your email address. We\'ll send you a secure link to reset your password.'
  },
  {
    question: 'Can I use this on mobile devices?',
    answer: 'Yes! Our platform is fully responsive and works perfectly on smartphones and tablets. You can access all features through your mobile browser.'
  },
  {
    question: 'How do I get my progress report?',
    answer: 'Your progress report is available in your dashboard under the "Analytics" section. You can view detailed statistics and download PDF reports of your performance.'
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time through your account settings. Your access will continue until the end of your current billing period.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions.'
  }
];

const Support = () => {
  const { toast } = useToast();
  
  const form = useForm<SupportFormValues>({
    resolver: zodResolver(supportFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      issueType: '',
      message: '',
    },
  });

  const onSubmit = (data: SupportFormValues) => {
    console.log('Support form submitted:', data);
    toast({
      title: "Support request submitted",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Support Center
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Get the help you need to succeed with Everest GATE
          </p>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-primary-foreground">
            <h2 className="text-2xl font-semibold mb-2">Need immediate assistance?</h2>
            <p className="text-lg opacity-90">Contact our support team directly for urgent matters</p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our support team
                </p>
                <p className="text-lg font-medium text-primary">+61 8 1234 5678</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Mon-Fri 9AM-6PM AWST
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Send us a detailed message
                </p>
                <p className="text-lg font-medium text-primary">contact@everestgate.com.au</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Response within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Request Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Submit a Support Request
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <Card className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email address" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="issueType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Issue Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an issue type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="technical">Technical Issue</SelectItem>
                            <SelectItem value="billing">Billing Question</SelectItem>
                            <SelectItem value="account">Account Problem</SelectItem>
                            <SelectItem value="feature">Feature Request</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe your issue or question in detail..."
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Support Request
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find quick answers to common questions about our platform
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {supportFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;