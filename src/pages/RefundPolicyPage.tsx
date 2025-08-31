import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, Info } from 'lucide-react';

const RefundPolicyPage: React.FC = () => {
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
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Refund Policy
          </h1>
          <p className="text-xl text-gray-400">
            Last updated: January 2024
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg">
            <div className="flex items-start space-x-3">
              <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">Important Notice</h3>
                <p className="text-gray-300">
                  <strong>No refunds are provided for digital courses and workshops.</strong> Once you purchase and access our digital content, the transaction is final and non-refundable.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">1. Digital Course Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>Due to the digital nature of our courses and workshops, we have a strict no-refund policy. This includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI upskill Workshop and all digital content</li>
                <li>Course materials and resources</li>
                <li>Certificate access</li>
                <li>Community access</li>
                <li>Lifetime access to course content</li>
              </ul>
              <p>Once you complete the purchase and gain access to the course materials, no refunds will be provided under any circumstances.</p>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">2. Why No Refunds?</h2>
            <div className="space-y-4 text-gray-300">
              <p>We implement a no-refund policy for the following reasons:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Immediate Access:</strong> You gain instant access to all course materials upon purchase</li>
                <li><strong>Digital Content:</strong> Our courses are digital products that cannot be "returned"</li>
                <li><strong>Intellectual Property:</strong> Course content is our intellectual property</li>
                <li><strong>Resource Allocation:</strong> We allocate resources based on enrollment numbers</li>
                <li><strong>Fair Pricing:</strong> Our pricing reflects the value and is already competitive</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">3. Before You Purchase</h2>
            <div className="space-y-4 text-gray-300">
              <p>To ensure you make an informed decision, we encourage you to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Read the course description thoroughly</li>
                <li>Review the curriculum and learning objectives</li>
                <li>Check the course requirements and prerequisites</li>
                <li>Read student testimonials and reviews</li>
                <li>Contact us with any questions before purchasing</li>
              </ul>
              <p>By making a purchase, you acknowledge that you have read and understood this refund policy.</p>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">4. Technical Issues</h2>
            <div className="space-y-4 text-gray-300">
              <p>If you experience technical difficulties accessing the course:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact our support team immediately</li>
                <li>We will work to resolve any technical issues</li>
                <li>We may extend your access period if needed</li>
                <li>Technical issues do not qualify for refunds</li>
              </ul>
              <p>We are committed to ensuring you have a smooth learning experience.</p>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">5. Course Quality Guarantee</h2>
            <div className="space-y-4 text-gray-300">
              <p>While we don't offer refunds, we do guarantee:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>High-quality, professionally developed content</li>
                <li>Expert-led instruction from industry professionals</li>
                <li>Comprehensive support throughout your learning journey</li>
                <li>Regular updates and improvements to course content</li>
                <li>Lifetime access to course materials</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
            <div className="space-y-4 text-gray-300">
              <p>If you have any questions about this refund policy, please contact us:</p>
              <div className="bg-slate-700 p-4 rounded-lg">
                <p><strong>Email:</strong> support@nhancio.ai</p>
                <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
                <p><strong>Response Time:</strong> Within 24-48 hours</p>
              </div>
            </div>
          </div>

          {/* Final Notice */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-lg">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Final Notice</h3>
                <p className="text-gray-300">
                  By purchasing any of our digital courses, you explicitly agree to this no-refund policy. 
                  Please ensure you are fully committed to the course before making your purchase.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
