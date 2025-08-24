import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Zap, BookOpen } from 'lucide-react';

const articles = [
  {
    title: "How AI Skills Are Reshaping Job Markets in 2024",
    excerpt: "Discover which AI skills are most in demand and how to position yourself for career advancement in the AI era.",
    date: "Jan 10, 2024",
    category: "Career Trends",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
    readTime: "5 min read"
  },
  {
    title: "ChatGPT vs Claude: Which AI Assistant Wins for Job Applications?",
    excerpt: "A comprehensive comparison of the top AI assistants and which one delivers the best results for career advancement.",
    date: "Jan 8, 2024",
    category: "Tool Reviews",
    image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
    readTime: "7 min read"
  },
  {
    title: "10 AI Career Hacks Every Professional Should Know",
    excerpt: "Practical tips and strategies to leverage AI for career advancement and landing your dream job.",
    date: "Jan 5, 2024",
    category: "Career Tips",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
    readTime: "4 min read"
  }
];

const Newsletter: React.FC = () => {
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
            Stay Ahead with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Career Weekly
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the latest AI career insights, job market trends, and career advancement tips delivered to your inbox
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Career Weekly</h3>
                  <p className="text-gray-600">Your weekly dose of career insights</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Latest Career Trends</div>
                    <div className="text-sm text-gray-600">Stay updated with job market developments</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">AI Tool Reviews & Tutorials</div>
                    <div className="text-sm text-gray-600">In-depth analysis of career-boosting AI tools</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Career Advancement Tips</div>
                    <div className="text-sm text-gray-600">Actionable strategies to boost your career</div>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Subscribe for Free
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                Join 25,000+ professionals. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>

          {/* Recent Articles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h3>
            
            <div className="space-y-6">
              {articles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                        {article.title}
                      </h4>
                      
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            
            <div className="mt-8">
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                View All Articles
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;