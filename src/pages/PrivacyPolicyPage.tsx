import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-400">
            Last updated: January 2024
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-gray-300">
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Create an account or register for our services</li>
                <li>Enroll in courses or workshops</li>
                <li>Contact us for support</li>
                <li>Participate in our community forums</li>
                <li>Subscribe to our newsletters</li>
              </ul>
              <p>This information may include your name, email address, phone number, and payment information.</p>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our educational services</li>
                <li>Process your enrollments and payments</li>
                <li>Send you important updates about your courses</li>
                <li>Respond to your questions and provide support</li>
                <li>Improve our platform and develop new features</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
            <div className="space-y-4 text-gray-300">
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers who assist us in operating our platform</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <div className="space-y-4 text-gray-300">
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Secure payment processing</li>
                <li>Access controls and authentication</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <div className="space-y-4 text-gray-300">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
            <div className="space-y-4 text-gray-300">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences</li>
                <li>Analyze website traffic</li>
                <li>Improve user experience</li>
                <li>Provide personalized content</li>
              </ul>
              <p>You can control cookie settings through your browser preferences.</p>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <div className="space-y-4 text-gray-300">
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="bg-slate-700 p-4 rounded-lg">
                <p><strong>Email:</strong> privacy@nhancio.ai</p>
                <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
