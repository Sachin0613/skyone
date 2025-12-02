import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <div className="min-h-screen pt-16 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="neon-card">
            <h1 className="text-4xl font-gaming font-bold text-center mb-8 neon-text">
              Terms & Conditions
            </h1>
            
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using SkyOne eSports platform, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">2. Tournament Participation</h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong className="text-white">2.1 Eligibility:</strong> Players must be at least 13 years old to participate in tournaments. 
                    Players under 18 require parental consent.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">2.2 Registration:</strong> All tournament registrations are final. Entry fees are non-refundable 
                    unless the tournament is cancelled by SkyOne eSports.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">2.3 Fair Play:</strong> Any form of cheating, hacking, or unsportsmanlike conduct will result 
                    in immediate disqualification and potential permanent ban from the platform.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">3. Account Responsibilities</h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong className="text-white">3.1 Account Security:</strong> You are responsible for maintaining the confidentiality of your 
                    account credentials and for all activities that occur under your account.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">3.2 Accurate Information:</strong> You must provide accurate and complete information when 
                    creating your account and participating in tournaments.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">3.3 One Account Policy:</strong> Each player is allowed only one account. Multiple accounts 
                    will result in suspension of all associated accounts.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">4. Prize Distribution</h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong className="text-white">4.1 Prize Eligibility:</strong> Prizes will be distributed only to verified winners who have 
                    completed all required verification processes.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">4.2 Tax Responsibilities:</strong> Winners are responsible for any applicable taxes on prizes. 
                    SkyOne eSports will provide necessary documentation for tax purposes.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">4.3 Distribution Timeline:</strong> Prizes will be distributed within 7-14 business days 
                    after tournament completion and verification.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">5. Code of Conduct</h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong className="text-white">5.1 Respectful Behavior:</strong> All users must treat others with respect. Harassment, 
                    discrimination, or abusive behavior will not be tolerated.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">5.2 Communication:</strong> Use of offensive language, hate speech, or inappropriate content 
                    in any form of communication is prohibited.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">5.3 Gaming Integrity:</strong> Players must compete fairly and honestly. Any attempt to 
                    manipulate match outcomes or engage in match-fixing is strictly prohibited.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">6. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content on the SkyOne eSports platform, including but not limited to text, graphics, logos, and software, 
                  is the property of SkyOne eSports and is protected by copyright and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">7. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  SkyOne eSports shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">8. Modifications</h2>
                <p className="leading-relaxed">
                  SkyOne eSports reserves the right to modify these terms at any time. Users will be notified of significant changes, 
                  and continued use of the platform constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">9. Contact Information</h2>
                <p className="leading-relaxed">
                  For questions about these Terms & Conditions, please contact us at:
                  <br />
                  Email: skyoneesp@gmail.com
                  <br />
                  Phone: NA
                </p>
              </section>

              <div className="text-center pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  Last updated: December 02, 2025
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
