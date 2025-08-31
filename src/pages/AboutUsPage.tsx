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

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To democratize AI education by providing accessible, high-quality learning experiences 
              that bridge the gap between academic knowledge and industry requirements. We believe 
              that everyone deserves access to world-class AI education, regardless of their background.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-blue-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To become the leading platform for AI education in India and globally, creating a 
              community of skilled professionals who drive innovation and technological advancement 
              across industries.
            </p>
          </div>
        </motion.div>

        {/* IIT Kanpur Alumni Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Founded by IIT Kanpur Alumni
              </h2>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                Our journey began with a vision to transform AI education, backed by the rigorous 
                academic foundation and industry experience of IIT Kanpur graduates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Academic Excellence</h3>
                <p className="text-blue-100 text-sm">
                  Rooted in IIT Kanpur's world-class education standards and research methodology
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Industry Experience</h3>
                <p className="text-blue-100 text-sm">
                  Decades of combined experience in leading tech companies and startups
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Innovation Focus</h3>
                <p className="text-blue-100 text-sm">
                  Cutting-edge curriculum designed for the future of AI and technology
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expert Faculty */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Expert Faculty & Mentors
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Learn from industry leaders, researchers, and professionals who have shaped the AI landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">AK</span>
              </div>
              <h3 className="text-white font-semibold text-lg text-center mb-2">Dr. Amit Kumar</h3>
              <p className="text-blue-400 text-sm text-center mb-3">IIT Kanpur Alumni</p>
              <p className="text-gray-300 text-sm text-center">
                Senior AI Engineer at Google, specializing in machine learning and neural networks. 
                PhD in Computer Science from IIT Kanpur.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">SP</span>
              </div>
              <h3 className="text-white font-semibold text-lg text-center mb-2">Prof. Sarah Patel</h3>
              <p className="text-purple-400 text-sm text-center mb-3">Research Lead</p>
              <p className="text-gray-300 text-sm text-center">
                Former Research Scientist at Microsoft, with expertise in natural language processing 
                and computer vision. Published 50+ research papers.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">RJ</span>
              </div>
              <h3 className="text-white font-semibold text-lg text-center mb-2">Rajesh Jain</h3>
              <p className="text-green-400 text-sm text-center mb-3">IIT Kanpur Alumni</p>
              <p className="text-gray-300 text-sm text-center">
                AI Product Manager at Amazon, with 15+ years of experience in building scalable 
                AI solutions for enterprise clients.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">MK</span>
              </div>
              <h3 className="text-white font-semibold text-lg text-center mb-2">Dr. Meera Krishnan</h3>
              <p className="text-red-400 text-sm text-center mb-3">Industry Expert</p>
              <p className="text-gray-300 text-sm text-center">
                Chief Data Scientist at a leading fintech startup, specializing in deep learning 
                and predictive analytics. IIT Kanpur graduate.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">VP</span>
              </div>
              <h3 className="text-white font-semibold text-lg text-center mb-2">Vikram Prasad</h3>
              <p className="text-yellow-400 text-sm text-center mb-3">IIT Kanpur Alumni</p>
              <p className="text-gray-300 text-sm text-center">
                Senior ML Engineer at Netflix, with expertise in recommendation systems and 
                large-scale machine learning infrastructure.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">AS</span>
              </div>
              <h3 className="text-white font-semibold text-lg text-center mb-2">Anjali Sharma</h3>
              <p className="text-indigo-400 text-sm text-center mb-3">AI Researcher</p>
              <p className="text-gray-300 text-sm text-center">
                Research Scientist at OpenAI, focusing on generative AI and large language models. 
                PhD from IIT Kanpur in AI/ML.
              </p>
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
              Ready to Learn from the Best?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our 
              IIT Kanpur alumni-led AI education programs.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center space-x-2">
              <span>Start Learning Today</span>
              <GraduationCap className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;
