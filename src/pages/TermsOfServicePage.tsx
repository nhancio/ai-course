import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, AlertTriangle } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
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
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>By accessing and using NhancioLearning ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              <p>These Terms of Service ("Terms") govern your use of our website and services operated by NhancioLearning ("we," "us," or "our").</p>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <div className="space-y-4 text-gray-300">
              <p>Permission is granted to temporarily access the materials on NhancioLearning's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <div className="space-y-4 text-gray-300">
              <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.</p>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use another user's account without permission</li>
                <li>Create false or misleading information</li>
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Violate any laws in your jurisdiction</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">4. Course Enrollment and Payment</h2>
            <div className="space-y-4 text-gray-300">
              <p>By enrolling in our courses, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pay the full course fee as specified</li>
                <li>Complete the course within the specified timeframe</li>
                <li>Follow all course guidelines and requirements</li>
                <li>Not share course materials with unauthorized users</li>
                <li>Respect intellectual property rights</li>
              </ul>
              <p><strong>Important:</strong> All course purchases are final and non-refundable. Please refer to our Refund Policy for more details.</p>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
            <div className="space-y-4 text-gray-300">
              <p>The content on this website, including but not limited to text, graphics, images, videos, and course materials, is the property of NhancioLearning and is protected by copyright laws.</p>
              <p>You may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reproduce, distribute, or transmit any content without permission</li>
                <li>Create derivative works based on our content</li>
                <li>Use our content for commercial purposes</li>
                <li>Remove or alter any copyright notices</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">6. Prohibited Uses</h2>
            <div className="space-y-4 text-gray-300">
              <p>You may not use our service to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the service</li>
                <li>Engage in any form of harassment or discrimination</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
            <div className="space-y-4 text-gray-300">
              <p>We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including breach of these Terms.</p>
              <p>Upon termination, your right to use the service will cease immediately. If you wish to terminate your account, you may simply discontinue using the service.</p>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-300">
              <p>In no event shall NhancioLearning, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your use or inability to use the service</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from the service</li>
                <li>Any bugs, viruses, or other harmful code that may be transmitted</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
              <p>Your continued use of the service after any changes constitutes acceptance of the new Terms.</p>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="bg-slate-700 p-4 rounded-lg">
                <p><strong>Email:</strong> legal@nhancio.ai</p>
                <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
                <p><strong>Website:</strong> learn.nhancio.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
