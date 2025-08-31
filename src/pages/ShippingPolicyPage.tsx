import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Download, Clock, Wifi } from 'lucide-react';

const ShippingPolicyPage: React.FC = () => {
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
            <Truck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shipping & Delivery Policy
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Digital Product Delivery</h2>
            <div className="space-y-4 text-gray-300">
              <p>Since we offer digital courses and educational content, our delivery process is instant and digital:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Instant Access:</strong> Course access is granted immediately upon successful payment</li>
                <li><strong>No Physical Shipping:</strong> All our products are digital and delivered online</li>
                <li><strong>Email Confirmation:</strong> You'll receive immediate confirmation with access details</li>
                <li><strong>Platform Access:</strong> Access through our secure learning platform</li>
                <li><strong>24/7 Availability:</strong> Course materials available anytime, anywhere</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">2. Delivery Timeline</h2>
            <div className="space-y-4 text-gray-300">
              <p>Our delivery process is designed for maximum convenience:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Immediate Access:</strong> Within 5 minutes of payment confirmation</li>
                <li><strong>Email Delivery:</strong> Welcome email with login credentials sent instantly</li>
                <li><strong>Platform Setup:</strong> Account activation within 10 minutes</li>
                <li><strong>Support Response:</strong> Technical support available within 2 hours</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">3. Access Requirements</h2>
            <div className="space-y-4 text-gray-300">
              <p>To access your digital course, you'll need:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Internet Connection:</strong> Stable broadband or mobile data</li>
                <li><strong>Device Compatibility:</strong> Computer, tablet, or smartphone</li>
                <li><strong>Browser Support:</strong> Chrome, Firefox, Safari, or Edge (latest versions)</li>
                <li><strong>Email Access:</strong> Valid email address for communications</li>
                <li><strong>Account Creation:</strong> Simple registration process</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">4. Certificate Delivery</h2>
            <div className="space-y-4 text-gray-300">
              <p>Upon course completion, certificates are delivered digitally:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Digital Certificate:</strong> PDF format available for download</li>
                <li><strong>Verification:</strong> Unique certificate ID for verification</li>
                <li><strong>Print Option:</strong> High-quality print-ready format</li>
                <li><strong>Lifetime Access:</strong> Certificate available in your account forever</li>
                <li><strong>Email Delivery:</strong> Certificate sent to your registered email</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">5. Technical Support</h2>
            <div className="space-y-4 text-gray-300">
              <p>We provide comprehensive support for delivery issues:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access Issues:</strong> Immediate support for login problems</li>
                <li><strong>Email Delivery:</strong> Resend access emails if needed</li>
                <li><strong>Technical Problems:</strong> 24/7 technical support</li>
                <li><strong>Account Setup:</strong> Guided account creation assistance</li>
                <li><strong>Platform Navigation:</strong> Help with course platform usage</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">6. Delivery Confirmation</h2>
            <div className="space-y-4 text-gray-300">
              <p>You'll receive multiple confirmations of your delivery:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Payment Confirmation:</strong> Immediate payment receipt</li>
                <li><strong>Welcome Email:</strong> Course access details and instructions</li>
                <li><strong>Platform Notification:</strong> In-app notification of course availability</li>
                <li><strong>Support Contact:</strong> Direct line to our support team</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>For delivery-related inquiries, please contact us:</p>
              <div className="bg-slate-700 p-4 rounded-lg">
                <p><strong>Email:</strong> support@nhancio.ai</p>
                <p><strong>Support Hours:</strong> 24/7 for urgent access issues</p>
                <p><strong>Response Time:</strong> Within 2 hours for delivery problems</p>
                <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-500/10 border border-blue-500/30 p-6 rounded-lg">
            <div className="flex items-start space-x-3">
              <Wifi className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Instant Digital Delivery</h3>
                <p className="text-gray-300">
                  Our digital delivery system ensures you get immediate access to your course content. 
                  No waiting, no shipping delays - just instant access to world-class education.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShippingPolicyPage;
