import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Zap, Play } from 'lucide-react';

const CoursesPage: React.FC = () => {
  const course = {
    id: 1,
    title: 'AI upskill Workshop',
    description: 'Master the fundamentals of AI and build real-world applications that will transform your career. This comprehensive workshop covers everything from basic concepts to advanced implementations.',
    duration: '7 Days',
    price: '₹499',
    rating: 4.9,
    students: 10000,
    level: 'All Levels',
    features: ['Hands-on Projects', 'Expert Mentorship', 'Certificate', 'Lifetime Access'],
    image: '/api/placeholder/400/250',
    category: 'AI & ML'
  };

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Course
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your career with our comprehensive AI upskill workshop
          </p>
        </motion.div>

        {/* Course Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 max-w-4xl w-full"
          >
            {/* Course Image */}
            <div className="h-80 bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center relative">
              <div className="text-center">
                <Zap className="w-24 h-24 text-blue-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">{course.description}</p>
              </div>
              <div className="absolute top-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {course.category}
              </div>
            </div>

            {/* Course Content */}
            <div className="p-8">
              {/* Course Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{course.rating}</div>
                  <div className="text-gray-400 text-sm">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{course.students.toLocaleString()}+</div>
                  <div className="text-gray-400 text-sm">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{course.duration}</div>
                  <div className="text-gray-400 text-sm">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{course.level}</div>
                  <div className="text-gray-400 text-sm">Level</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">What you'll get:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-slate-700 rounded-lg">
                <div className="text-center md:text-left">
                  <div className="text-4xl font-bold text-white mb-2">{course.price}</div>
                  <div className="text-gray-400">One-time payment</div>
                </div>
                <div className="w-full md:w-auto">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-lg flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Join Now</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Why Choose This Workshop?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert-Led</h3>
              <p className="text-gray-300">Learn from IIT alumni and industry experts with real-world experience</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-300">Join a community of 10,000+ learners and professionals</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Practical</h3>
              <p className="text-gray-300">Hands-on projects that you can immediately apply in your work</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesPage;
