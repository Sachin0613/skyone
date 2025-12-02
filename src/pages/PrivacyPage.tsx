import { motion } from 'framer-motion';

const PrivacyPage = () => {
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
              Privacy Policy
            </h1>
            
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">1. Information We Collect</h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong className="text-white">1.1 Personal Information:</strong> We collect information you provide directly to us, 
                    such as when you create an account, participate in tournaments, or contact us for support.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">1.2 Gaming Data:</strong> We collect information about your gaming activities, 
                    including match statistics, tournament participation, and performance metrics.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">1.3 Technical Information:</strong> We automatically collect certain technical information 
                    about your device and how you interact with our platform.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">2. How We Use Your Information</h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong className="text-white">2.1 Platform Operation:</strong> To provide, maintain, and improve our gaming platform 
                    and tournament services.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">2.2 Communication:</strong> To send you important updates about tournaments, 
                    matches, and platform changes.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">2.3 Security:</strong> To detect, prevent, and address technical issues and 
                    maintain platform security.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">2.4 Analytics:</strong> To understand how users interact with our platform 
                    and improve user experience.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">3. Information Sharing</h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong className="text-white">3.1 Public Information:</strong> Your username, tournament statistics, and 
                    leaderboard rankings may be publicly visible on our platform.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">3.2 Service Providers:</strong> We may share information with trusted third-party 
                    service providers who assist us in operating our platform.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">3.3 Legal Requirements:</strong> We may disclose information if required by law 
                    or to protect our rights and the safety of our users.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">4. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                  internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">5. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes 
                  outlined in this privacy policy, unless a longer retention period is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">6. Your Rights</h2>
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    <strong className="text-white">6.1 Access:</strong> You have the right to access and receive a copy of 
                    your personal information.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">6.2 Correction:</strong> You can request correction of inaccurate or 
                    incomplete personal information.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">6.3 Deletion:</strong> You can request deletion of your personal information, 
                    subject to certain legal limitations.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">6.4 Portability:</strong> You can request a copy of your data in a 
                    structured, machine-readable format.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">7. Cookies and Tracking</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our platform. 
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">8. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our platform is not intended for children under 13. We do not knowingly collect personal information 
                  from children under 13. If you are a parent and believe your child has provided us with personal 
                  information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">9. International Data Transfers</h2>
                <p className="leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your information during such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">10. Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any material changes 
                  by posting the new policy on our platform and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-blue mb-4">11. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: skyoneesp@gmail.com
                  <br />
                  Phone: NA
                  <br />
                  Address: SkyOne eSports, Banglore, India
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

export default PrivacyPage;
