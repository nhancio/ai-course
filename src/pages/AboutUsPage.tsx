import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, BookOpen, Award, TrendingUp, Users, Globe } from 'lucide-react';

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
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A Dream by IITians to Build the Future with AI
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Founded by passionate IITians, Nhancio is democratizing AI education and making cutting-edge technology 
            accessible to professionals worldwide, empowering them to transform their careers and secure their future in the digital age.
          </p>
        </motion.div>

        {/* Our Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-400">
              Recognition and milestones that showcase our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mathhack 2.0 Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Won Mathhack 2.0</h3>
                <p className="text-gray-600">
                  Winners of Mathhack 2.0 by Govt of Telangana
                </p>
              </div>
            </motion.div>

            {/* T-Hub Incubation Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Incubated by T-Hub</h3>
                <p className="text-gray-600">
                  Recognized and incubated by T-Hub Hyderabad
                </p>
              </div>
            </motion.div>

            {/* Fastest Growing Startup Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Fastest growing startup in Hyderabad</h3>
                <p className="text-gray-600">
                  Working on innovative solutions for the future
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To democratize AI education and make cutting-edge technology accessible to professionals of all backgrounds, 
              empowering them to transform their careers and secure their future in the digital age.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To be the leading AI education platform that transforms how professionals build their careers, making 
              AI skills and intelligent automation the foundation of future success.
            </p>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
                Innovation, integrity, and impact drive everything we do. We believe in building 
                long-term career partnerships and delivering education that creates lasting professional value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-blue-100 text-sm">
                  We constantly push the boundaries of what's possible with AI, staying at the 
                  forefront of technological advancement.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Integrity</h3>
                <p className="text-blue-100 text-sm">
                  We maintain the highest ethical standards in all our interactions, building 
                  trust through transparency and honesty.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Impact</h3>
                <p className="text-blue-100 text-sm">
                  We measure our success by the positive career impact we create for our students and 
                  the broader professional community.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2024 by a group of passionate IITians, Nhancio emerged from a shared vision 
                  to bridge the gap between cutting-edge AI research and practical career applications.
                </p>
                
                <p>
                  What started as late-night discussions in our hostel rooms about the potential of AI 
                  to transform careers has evolved into a thriving education platform that serves professionals across the globe.
                </p>
                
                <p>
                  Today, we're proud to be at the forefront of AI education, helping professionals transform 
                  their careers and unlock new opportunities through intelligent technology and practical skills.
                </p>
                
                <p>
                  Our journey from idea to impact continues as we push the boundaries of what's possible 
                  with AI education, always staying true to our roots of academic excellence and practical career innovation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Nhancio for Your Career Transformation?
            </h2>
            <p className="text-xl text-gray-400">
              The advantages of learning from IITians who understand both technology and career development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">IITian Expertise</h3>
              <p className="text-gray-300 text-sm">
                Founded and led by IITians with deep technical knowledge and industry experience
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Career-Focused Learning</h3>
              <p className="text-gray-300 text-sm">
                We focus on real-world applications that deliver measurable career advancement results
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Proven Track Record</h3>
              <p className="text-gray-300 text-sm">
                Award-winning team with recognition from government and industry leaders
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Rapid Growth</h3>
              <p className="text-gray-300 text-sm">
                Fastest growing AI startup in Hyderabad with expanding global presence
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Career with AI?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the professionals who are already leveraging AI to accelerate their careers and secure their future. 
              Let our IITian team help you unlock the full potential of artificial intelligence for your career growth.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center space-x-2">
              <span>Start Your Career Transformation</span>
              <Users className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;