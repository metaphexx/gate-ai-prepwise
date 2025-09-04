import React from 'react';
import Navbar from '../components/landing/navbar';
import Footer from '../components/landing/footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Last updated: 04/09/2025
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Welcome to the GATE AI Online Question Bank (the "Service"), operated by Everest Tutoring ("we", "our", or "us"). 
            By accessing or using the Service, you agree to be bound by these Terms of Service (the "Terms"). 
            Please read them carefully. If you do not agree, you may not use the Service.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">1. Eligibility</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              You must be at least 13 years old to create an account. If you are under 18, you confirm that you have parental or guardian consent to use the Service. By registering, you represent that all information provided is accurate and up to date.
            </p>

            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">2. Accounts and Security</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              To access the Service, you must create an account with a valid email address and password. You are responsible for:
            </p>
            <ul className="text-muted-foreground mb-8 leading-relaxed space-y-2 ml-6">
              <li>• Maintaining the confidentiality of your login details.</li>
              <li>• All activity under your account.</li>
              <li>• Not sharing your account with others.</li>
            </ul>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              If we believe your account is compromised or misused, we may suspend or terminate access without notice.
            </p>

            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">3. Use of the Service</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The Service is for personal, non-commercial study use only. You must not:
            </p>
            <ul className="text-muted-foreground mb-4 leading-relaxed space-y-2 ml-6">
              <li>• Copy, share, or distribute content outside the platform.</li>
              <li>• Circumvent, disable, or interfere with security features.</li>
              <li>• Use automated tools (bots, scrapers, crawlers) to access the Service.</li>
              <li>• Resell or transfer access to others.</li>
            </ul>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Any violation may result in immediate suspension or termination.
            </p>

            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">4. Intellectual Property</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              All content on the Service, including practice questions, explanations, study guides, videos, text, graphics, and software, is owned by Everest Tutoring or licensed to us. You are granted a limited, non-exclusive, non-transferable licence to use the Service for your own educational purposes. You must not reproduce, distribute, or create derivative works without written permission.
            </p>

            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">5. Payments and Billing</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Access to the Service requires payment through our accepted payment methods. By providing payment details, you authorise us to charge you for the chosen subscription or product.
            </p>
            <ul className="text-muted-foreground mb-4 leading-relaxed space-y-2 ml-6">
              <li>• <strong>Subscriptions:</strong> Fees are charged at the start of each billing period.</li>
              <li>• <strong>Automatic Renewals:</strong> Some subscriptions may renew automatically unless cancelled before the renewal date.</li>
              <li>• <strong>Currency:</strong> All payments are processed in Australian dollars unless otherwise stated.</li>
            </ul>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              You are responsible for any taxes, fees, or charges imposed by payment providers.
            </p>

            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">6. Refund and Cancellation Policy</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              All sales are final. We do not provide refunds for subscriptions or one-time purchases except in exceptional circumstances, at our sole discretion.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              If we approve a refund, the following apply:
            </p>
            <ul className="text-muted-foreground mb-4 leading-relaxed space-y-2 ml-6">
              <li>• A 20% administrative fee will be deducted from the refund amount.</li>
              <li>• Refunds are processed only to the original payment method.</li>
              <li>• Refunds are not guaranteed and are strictly case by case.</li>
            </ul>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Examples of situations where a refund request will not be granted include (but are not limited to):
            </p>
            <ul className="text-muted-foreground mb-8 leading-relaxed space-y-2 ml-6">
              <li>• Change of mind.</li>
              <li>• Lack of usage or failure to use the Service.</li>
              <li>• Dissatisfaction with study outcomes or exam performance.</li>
            </ul>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We reserve the right to refuse refund requests that do not meet our criteria.
            </p>

            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">7. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The Service is provided "as is" and "as available". We make no guarantees that:
            </p>
            <ul className="text-muted-foreground mb-4 leading-relaxed space-y-2 ml-6">
              <li>• The content will be free from errors or interruptions.</li>
              <li>• The Service will meet your expectations or lead to specific outcomes (such as admission success).</li>
            </ul>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              To the fullest extent permitted by law, we disclaim all warranties, express or implied.
            </p>

            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">8. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              To the maximum extent permitted by law:
            </p>
            <ul className="text-muted-foreground mb-4 leading-relaxed space-y-2 ml-6">
              <li>• We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Service.</li>
              <li>• Our total liability under these Terms will not exceed the amount you paid for access to the Service in the past 12 months.</li>
            </ul>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Some jurisdictions do not allow certain exclusions, so parts of this limitation may not apply to you.
            </p>

            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">9. Termination</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We may suspend or terminate your account at any time, without notice, if you breach these Terms or misuse the Service. Upon termination, your right to access the Service immediately ceases. No refunds will be provided.
            </p>

            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">10. Changes to the Service</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We may modify, suspend, or discontinue the Service (or any part of it) at any time. We are not liable to you or any third party for such changes.
            </p>

            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">11. Amendments to Terms</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We may update these Terms from time to time. Updates will be effective when posted on this page. Continued use of the Service after changes means you accept the updated Terms.
            </p>

            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">12. Governing Law</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              These Terms are governed by the laws of Western Australia, Australia. Any disputes will be resolved in the courts of Western Australia.
            </p>

            <div className="border-t border-muted mb-12"></div>

            <h2 className="text-2xl font-bold text-foreground mb-6">13. Contact Information</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              For questions about these Terms, please contact us at:<br />
              Email: info@everesttutoring.com.au
            </p>

          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;