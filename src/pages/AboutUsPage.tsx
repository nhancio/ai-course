import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, Target, BookOpen, Globe } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About NhancioLearning
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering the next generation of AI professionals through world-class education, 
            led by IIT Kanpur alumni and industry experts.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Story: From IIT Kanpur to Global Impact
              </h2>
              <p className="text-blue-100 text-lg max-w-4xl mx-auto leading-relaxed">
                Born from the hallowed halls of IIT Kanpur, our journey began with a simple yet powerful vision: 
                to upskill India and give our professionals the confidence to compete on a global scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">The IIT Foundation</h3>
                <p className="text-blue-100 text-sm">
                  Founded by IIT Kanpur alumni who experienced firsthand the gap between academic excellence 
                  and industry readiness, we understand what it takes to succeed globally.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Upskilling India</h3>
                <p className="text-blue-100 text-sm">
                  Our mission is to democratize world-class AI education, making it accessible to every 
                  Indian professional who dreams of making a global impact.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Global Confidence</h3>
                <p className="text-blue-100 text-sm">
                  We don't just teach AI; we build confidence. Our graduates work with the same 
                  competence and assurance as professionals from the world's top institutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To upskill India's workforce with cutting-edge AI education, bridging the gap between 
              academic excellence and industry requirements. We empower professionals to compete 
              confidently on the global stage, armed with practical skills and real-world experience.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To become India's most trusted platform for AI education, creating a generation of 
              professionals who not only excel in their careers but also drive innovation and 
              technological advancement on a global scale.
            </p>
          </div>
        </motion.div>

        {/* IIT Kanpur Alumni Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                The IIT Kanpur Advantage
              </h2>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                As IIT Kanpur alumni, we bring the same rigor, excellence, and global perspective 
                that made us successful in the international tech industry back to India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Global Perspective</h3>
                <p className="text-blue-100 text-sm">
                  Having worked with top global companies, we understand what the world expects 
                  from Indian professionals
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Startup Mentality</h3>
                <p className="text-blue-100 text-sm">
                  We're not just educators; we're entrepreneurs who understand the challenges 
                  of building successful careers
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Practical Approach</h3>
                <p className="text-blue-100 text-sm">
                  We focus on real-world applications, not just theory, preparing you for 
                  immediate industry impact
                </p>
              </div>
            </div>
          </div>
        </motion.div>



        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose NhancioLearning?
            </h2>
            <p className="text-xl text-gray-400">
              The advantages of learning from IIT Kanpur alumni and industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">IIT Foundation</h3>
              <p className="text-gray-300 text-sm">
                Curriculum designed by IIT Kanpur alumni with rigorous academic standards
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Industry Mentors</h3>
              <p className="text-gray-300 text-sm">
                Learn from professionals working at top tech companies worldwide
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Practical Focus</h3>
              <p className="text-gray-300 text-sm">
                Real-world projects and hands-on experience with industry tools
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Network</h3>
              <p className="text-gray-300 text-sm">
                Connect with a community of AI professionals and alumni worldwide
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Compete on the Global Stage?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the movement to upskill India. Learn from IIT Kanpur alumni who've succeeded 
              globally and are now empowering the next generation of Indian professionals.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center space-x-2">
              <span>Start Your Global Journey</span>
              <GraduationCap className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;
