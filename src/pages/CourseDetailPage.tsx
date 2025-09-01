import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, CheckCircle, Play, Download, Share2 } from 'lucide-react';

const CourseDetailPage: React.FC = () => {
  const course = {
    id: 1,
    title: 'AI upskill Workshop',
    description: 'Master the fundamentals of AI and build real-world applications that will transform your career. This comprehensive workshop covers everything from basic concepts to advanced implementations.',
    duration: '7 Days',
    price: '₹499',
    rating: 4.9,
    students: 10000,
    level: 'All Levels',
    instructor: 'Chaitanya',
    instructorTitle: 'Senior AI Engineer at Google',
    features: [
      'Hands-on Projects with Real Data',
      'Expert Mentorship from Industry Leaders',
      'Professional Certificate upon Completion',
      'Lifetime Access to Course Materials',
      'Active Community Support',
      'Job Placement Assistance'
    ],
    curriculum: [
      {
        week: 1,
        title: 'Introduction to AI',
        topics: ['AI Fundamentals', 'Machine Learning Overview', 'Setting up Development Environment']
      },
      {
        week: 2,
        title: 'Deep Learning & Neural Networks',
        topics: ['Neural Network Architecture', 'Training Models', 'Optimization Techniques']
      },
      {
        week: 3,
        title: 'Natural Language Processing',
        topics: ['Text Processing', 'Language Models', 'Chatbot Development']
      },
      {
        week: 4,
        title: 'Computer Vision',
        topics: ['Image Processing', 'Object Detection', 'Image Classification']
      },
      {
        week: 5,
        title: 'Real-world Applications',
        topics: ['Project Development', 'Deployment Strategies', 'Performance Optimization']
      }
    ],
    reviews: [
      {
        id: 1,
        name: 'Michael Chen',
        rating: 5,
        comment: 'This workshop completely transformed my understanding of AI. The hands-on projects were invaluable.',
        date: '2 weeks ago'
      },
      {
        id: 2,
        name: 'Emily Rodriguez',
        rating: 5,
        comment: 'Excellent content and amazing support from the instructors. Highly recommended!',
        date: '1 month ago'
      },
      {
        id: 3,
        name: 'David Kim',
        rating: 5,
        comment: 'The practical approach and real-world projects made all the difference. Worth every penny!',
        date: '3 weeks ago'
      }
    ]
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {course.description}
              </p>
              
              {/* Course Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-medium">{course.rating}</span>
                  <span className="text-gray-400">({course.students} students)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{course.students.toLocaleString()} enrolled</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{course.instructor}</div>
                  <div className="text-gray-400">{course.instructorTitle}</div>
                </div>
              </div>
            </div>

            {/* Course Card */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800 rounded-lg p-6 border border-blue-500/20 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">{course.price}</div>
                  <div className="text-gray-400">One-time payment</div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 mb-4 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Join Now</span>
                </button>

                <button className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-200 mb-4 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Syllabus</span>
                </button>

                <button className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Share2 className="w-5 h-5" />
                  <span>Share Course</span>
                </button>

                <div className="mt-6 pt-6 border-t border-blue-500/20">
                  <h4 className="text-white font-semibold mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Course Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Workshop Curriculum</h2>
          <div className="space-y-4">
            {course.curriculum.map((week, index) => (
              <div key={week.week} className="bg-slate-800 rounded-lg p-6 border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    Week {week.week}: {week.title}
                  </h3>
                  <span className="text-blue-400 font-medium">4 hours</span>
                </div>
                <ul className="space-y-2">
                  {week.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Student Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {course.reviews.map((review) => (
              <div key={review.id} className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{review.name}</div>
                      <div className="text-gray-400 text-sm">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have already upgraded their skills with our AI upskill workshop.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Join Now - ₹499</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
