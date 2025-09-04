import React from 'react';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Privacy Policy</h1>
          <p className="text-xl mb-2 text-muted-foreground">Last updated: 04/09/2025</p>
        </div>
      </section>

      {/* Terms Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              This Privacy Policy explains how BSGBM Pty Ltd (ABN 39 601 405 047), trading as Everest Tutoring ("Everest Tutoring", "we", "our", or "us") collects, uses, discloses, and protects personal information when you use the GATE AI Online Question Bank and our related services ("Service").
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              When we say "you" or "your", we mean anyone who provides personal information to us, including students, parents, website visitors, and account holders.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              We respect your privacy and are committed to handling your personal information responsibly and transparently. If you have any questions, please contact us using the details at the end of this Policy.
            </p>
          </div>

          <div className="border-t border-border mb-8"></div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. What Information We Collect</h2>
            <p className="mb-4 text-muted-foreground">We collect personal information in several ways, depending on how you interact with us:</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-foreground">a. Information you give us</h3>
              <p className="mb-3 text-muted-foreground">When you register, subscribe, or contact us, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Full name, email address, phone number, and postal address.</li>
                <li>School, year level, and study interests.</li>
                <li>Payment and billing details (processed securely by our payment providers).</li>
                <li>Communication preferences.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-foreground">b. Information collected automatically</h3>
              <p className="mb-3 text-muted-foreground">When you use our Service, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Device details: model, operating system, browser type, language.</li>
                <li>Log data: IP address, pages viewed, search queries, crash reports, referral URLs, date and time of access.</li>
                <li>Usage data: frequency of logins, performance analytics, study history.</li>
                <li>Location data: when enabled on your device or inferred from IP address.</li>
                <li>Cookies and storage data: small files saved on your browser or device to keep you logged in, store preferences, and help us analyse usage.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-foreground">c. Information from other sources</h3>
              <p className="mb-3 text-muted-foreground">We may also collect personal information through:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Forms you complete, phone calls, or emails with us.</li>
                <li>Social media platforms when you interact with our pages.</li>
                <li>Referrals from parents, guardians, or friends.</li>
              </ul>
              <p className="mt-4 text-muted-foreground">If you provide us with someone else's details (for example, a parent providing a child's details), you confirm that they have agreed to this Policy.</p>
            </div>
          </section>

          <div className="border-t border-border mb-8"></div>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Personal Information</h2>
            <p className="mb-4 text-muted-foreground">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide and improve the Service.</li>
              <li>Process payments and manage subscriptions.</li>
              <li>Personalise study recommendations and resources.</li>
              <li>Communicate with you about updates, features, and changes.</li>
              <li>Send marketing communications (where permitted).</li>
              <li>Maintain platform security and prevent fraud.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <div className="border-t border-border mb-8"></div>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Direct Marketing</h2>
            <p className="mb-4 text-muted-foreground">We may send you information about our services, new features, or promotions. This may be by email, phone, or online advertising.</p>
            <p className="mb-4 text-muted-foreground">You can opt out at any time by:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Clicking the "unsubscribe" link in emails.</li>
              <li>Adjusting your account settings.</li>
              <li>Contacting us directly.</li>
            </ul>
            <p className="mt-4 text-muted-foreground">You may also adjust your browser settings to manage cookies used for advertising.</p>
          </section>

          <div className="border-t border-border mb-8"></div>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Accessing and Updating Your Information</h2>
            <p className="mb-4 text-muted-foreground">You can request access to the personal information we hold about you. If any details are incorrect, you may request corrections or deletion (subject to legal requirements).</p>
            <p className="mb-4 text-muted-foreground">In some cases, we may refuse access or correction if it:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Risks the privacy or safety of others.</li>
              <li>Is unlawful or frivolous.</li>
              <li>Requires disproportionate technical effort.</li>
            </ul>
            <p className="mt-4 text-muted-foreground">We may ask you to verify your identity before processing your request.</p>
          </section>

          <div className="border-t border-border mb-8"></div>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Sharing Information</h2>
            <p className="mb-4 text-muted-foreground">We do not sell your personal information. We may share it with:</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-foreground">a. Service providers</h3>
              <p className="mb-3 text-muted-foreground">Trusted third parties who help us run our business, such as:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>IT hosting and cloud storage providers.</li>
                <li>Payment processors.</li>
                <li>Messaging and email services.</li>
                <li>Customer support and CRM platforms.</li>
                <li>Security and analytics providers.</li>
              </ul>
              <p className="mt-4 text-muted-foreground">These providers are required to keep your information confidential and use it only for our purposes.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-foreground">b. Legal and compliance reasons</h3>
              <p className="text-muted-foreground">We may disclose information if required by law, to prevent fraud, or to protect our rights, property, or users.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-foreground">c. Business transactions</h3>
              <p className="text-muted-foreground">If BSGBM Pty Ltd (trading as Everest Tutoring) undergoes a merger, acquisition, or restructure, your personal information may be disclosed to relevant parties under confidentiality agreements.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3 text-foreground">d. Anonymised data</h3>
              <p className="text-muted-foreground">We may share aggregated, de-identified information for research, reporting, or statistical purposes.</p>
            </div>
          </section>

          <div className="border-t border-border mb-8"></div>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. International Transfers</h2>
            <p className="text-muted-foreground">Your personal information may be stored or processed in countries outside Australia, including the United States, Europe, and the Asia-Pacific region. By using our Service, you consent to these international transfers, noting that privacy laws may differ from those in Australia.</p>
          </section>

          <div className="border-t border-border mb-8"></div>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Data Retention</h2>
            <p className="mb-4 text-muted-foreground">We keep personal information for as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide the Service.</li>
              <li>Comply with legal, tax, or regulatory obligations.</li>
              <li>Resolve disputes or enforce agreements.</li>
            </ul>
            <p className="mt-4 text-muted-foreground">In some cases, we may retain limited information for longer (for example, to handle potential complaints or legal claims).</p>
          </section>

          <div className="border-t border-border mb-8"></div>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Security</h2>
            <p className="mb-4 text-muted-foreground">We take data security seriously and use reasonable safeguards to protect personal information, including encryption, access controls, and secure hosting.</p>
            <p className="text-muted-foreground">However, no system is completely secure. We cannot guarantee absolute protection of your information, especially during transmission over the internet.</p>
          </section>

          <div className="border-t border-border mb-8"></div>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Application of this Policy</h2>
            <p className="text-muted-foreground">This Policy applies only to Everest Tutoring's GATE AI Online Question Bank and related services. It does not apply to third-party websites or services that may be linked from our platform. Please review those services' privacy policies separately.</p>
          </section>

          <div className="border-t border-border mb-8"></div>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Children's Privacy</h2>
            <p className="text-muted-foreground">Our Service is designed for students preparing for exams. If you are under 13, you must not use the Service without parental consent. If we discover that we have collected personal information from a child under 13 without consent, we will delete it.</p>
          </section>

          <div className="border-t border-border mb-8"></div>

          {/* Section 11 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Enforcement and Complaints</h2>
            <p className="mb-4 text-muted-foreground">If you believe we have breached privacy laws or mishandled your data, you may contact us using the details below. We will respond within a reasonable time.</p>
            <p className="mb-4 text-muted-foreground">If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) or your local data protection authority.</p>
            <p className="text-muted-foreground">We also accept anonymous or pseudonym complaints where practical.</p>
          </section>

          <div className="border-t border-border mb-8"></div>

          {/* Section 12 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Changes to this Policy</h2>
            <p className="text-muted-foreground">We may update this Policy at any time. Updates will take effect when posted on this page. For major changes, we may notify you by email or display a notice on the platform. Please check this page regularly for the latest version.</p>
          </section>

          <div className="border-t border-border mb-8"></div>

          {/* Section 13 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Contact Us</h2>
            <p className="mb-4 text-muted-foreground">If you have questions, concerns, or requests about this Privacy Policy, please contact us:</p>
            <div className="space-y-2 text-muted-foreground">
              <p>BSGBM Pty Ltd (trading as Everest Tutoring)</p>
              <p>ABN: 39 601 405 047</p>
              <p>Email: info@everesttutoring.com.au</p>
            </div>
            <p className="mt-4 text-muted-foreground">If you need a copy of this Privacy Policy in a different format (for accessibility), let us know and we will provide one.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;