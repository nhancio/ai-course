import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Play, Calendar, Users, Clock } from 'lucide-react';

const modules = [
  {
    week: "Week 1-2",
    title: "AI Fundamentals & Career Setup",
    topics: ["Introduction to AI & Machine Learning", "Setting up AI tools ecosystem", "Understanding prompting techniques", "Career assessment & goal setting"]
  },
  {
    week: "Week 2-3",
    title: "AI Skills for Job Market",
    topics: ["Writing with ChatGPT & Claude", "Image generation with Midjourney", "Video creation with AI tools", "Portfolio building with AI"]
  },
  {
    week: "Week 3-4",
    title: "Job Application & Interview Prep",
    topics: ["AI-powered resume optimization", "Interview preparation with AI", "LinkedIn profile enhancement", "Networking strategies with AI"]
  },
  {
    week: "Week 4",
    title: "Career Launch & Growth",
    topics: ["Job search automation", "Salary negotiation with AI insights", "Career advancement planning", "Continuous learning strategies"]
  }
];

const ProgramDetails: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What You'll Learn to Get Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dream Job in 30 Days
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive roadmap to AI career success with hands-on projects and job preparation strategies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Learning Path */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Career Roadmap</h3>
            
            <div className="space-y-8">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline line */}
                  {index < modules.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  )}
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {module.week}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {module.title}
                      </h4>
                      
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video & Course Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sticky top-8"
          >
            {/* Video Placeholder */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden mb-8 shadow-2xl">
              <div className="aspect-video flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800&h=450')] bg-cover bg-center opacity-30"></div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full p-6 hover:bg-white/30 transition-all duration-300"
                >
                  <Play className="w-12 h-12 text-white fill-current" />
                </motion.button>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">Course Preview</h4>
                <p className="text-gray-300">Get a sneak peek of what you'll learn in this comprehensive AI career program</p>
              </div>
            </div>

            {/* Course Details Card */}
            <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Duration</div>
                    <div className="text-gray-600">30 days intensive program</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Time Commitment</div>
                    <div className="text-gray-600">2-3 hours per day</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Format</div>
                    <div className="text-gray-600">Live sessions + Self-paced</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Download Curriculum
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;