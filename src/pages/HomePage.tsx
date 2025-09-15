import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredCourse = {
    id: 1,
    title: 'AI upskill Workshop',
    description: 'Master the fundamentals of AI and build real-world applications that will transform your career',
    duration: '7 Days',
          price: '₹0',
    originalPrice: '₹499',
    features: ['Hands-on Projects', 'Expert Mentorship', 'Certificate', 'Lifetime Access'],
    image: '/api/placeholder/400/250'
  };

  const testimonials = [
    {
      id: 1,
      name: 'Chaitanya',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'The AI upskill Workshop completely transformed how I approach product development. The hands-on projects were invaluable.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Nikhitha',
      role: 'Startup Founder',
      company: 'InnovateAI',
      content: 'AI upskill Workshop gave me the strategic insights I needed to scale my business. The peer network is incredible.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Lavanya',
      role: 'Data Scientist',
      company: 'DataFlow',
      content: 'AI upskill Workshop helped me automate 80% of my daily tasks. The productivity gains are remarkable.',
      rating: 5,
      image: '/api/placeholder/60/60'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Stay ahead in the{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                AI-First World
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build hands-on capabilities that translate directly into workplace advantage & tangible outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Link
              to="/courses"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2"
            >
              <span>Limited Slots Available</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>


        </div>
      </section>

      {/* How AI Transforms Careers */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How AI Transforms Your Career Future
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI isn't just changing industries—it's revolutionizing how we work, learn, and advance in our careers. 
              Here's how mastering AI can reshape your professional journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg"
            >
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-white font-semibold text-lg mb-3">Accelerated Career Growth</h3>
              <p className="text-blue-100 text-sm">
                AI skills can accelerate your career progression by 3-5 years. Professionals with AI expertise 
                are being promoted faster and earning 40-60% higher salaries than their peers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-lg"
            >
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-white font-semibold text-lg mb-3">Global Opportunities</h3>
              <p className="text-green-100 text-sm">
                AI skills are universally in demand. Whether you want to work remotely for international companies 
                or relocate to tech hubs worldwide, AI expertise opens doors globally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-lg"
            >
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-white font-semibold text-lg mb-3">Future-Proof Your Career</h3>
              <p className="text-purple-100 text-sm">
                While automation may replace some jobs, it creates new opportunities for those who understand AI. 
                You become the person who works with AI, not against it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-600 to-orange-800 p-6 rounded-lg"
            >
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-white font-semibold text-lg mb-3">Multiple Career Paths</h3>
              <p className="text-orange-100 text-sm">
                AI skills apply across industries—from healthcare and finance to marketing and education. 
                You can pivot between sectors while maintaining your competitive edge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-lg"
            >
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-white font-semibold text-lg mb-3">Enhanced Productivity</h3>
              <p className="text-red-100 text-sm">
                AI tools can make you 10x more productive, allowing you to focus on high-value strategic work 
                while AI handles routine tasks. This makes you indispensable to any organization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 rounded-lg"
            >
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-white font-semibold text-lg mb-3">Leadership Opportunities</h3>
              <p className="text-indigo-100 text-sm">
                As AI becomes central to business strategy, those with AI knowledge naturally rise to leadership 
                positions, driving digital transformation and innovation.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-lg border border-blue-500/20 max-w-4xl mx-auto">
              <h3 className="text-white font-semibold text-xl mb-4">The Choice is Yours</h3>
              <p className="text-gray-300 leading-relaxed">
                The future belongs to those who embrace AI. While others fear automation, you can be the one 
                who leverages it to build an extraordinary career. Every day you wait is a day your competitors 
                get ahead. Start your AI transformation journey today and secure your place in the future of work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Before you ask!
            </h2>
            <p className="text-xl text-gray-400">Yes! You will be certified for this program.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    {/* Certificate Preview */}
                        <div className="relative">
                          <img 
                            src="/certificates/certificate.jpg" 
                            alt="NhancioLearning Certificate Sample"
                            className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                          />
                        </div>

            {/* Certificate Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Industry-Recognized Certification
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Receive a professional certificate from NhancioLearning, an IITians-based startup, 
                  recognized by leading tech companies and startups worldwide.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">Verified by IIT alumni mentors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">LinkedIn-verified credentials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">Industry-standard certification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">Lifetime access to certificate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">Shareable on professional networks</span>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
                <h4 className="text-lg font-semibold text-white mb-2">Why Choose Our Certificates?</h4>
                <p className="text-gray-300 text-sm">
                  Founded by IIT alumni with deep industry experience, our certificates are designed 
                  to showcase your practical skills and real-world project experience, making you 
                  stand out in the competitive AI job market.
                </p>
              </div>

              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Course */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Course
            </h2>
            <p className="text-xl text-gray-400">
              Transform your career with AI
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 max-w-2xl w-full"
            >
              {/* Course Image */}
              <div className="h-64 bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center relative">
                <div className="text-center">
                  <Zap className="w-20 h-20 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white">{featuredCourse.title}</h3>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-8">
                <p className="text-gray-300 mb-6 text-lg">{featuredCourse.description}</p>
                
                {/* Course Price */}
                <div className="flex items-center justify-end mb-6">
                  <div className="text-right">
                    <div className="text-sm text-gray-400 line-through mb-1">{featuredCourse.originalPrice}</div>
                    <div className="text-2xl font-bold text-white">{featuredCourse.price}</div>
                    <div className="text-xs text-green-400">Limited Slots Available</div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {featuredCourse.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-blue-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-lg flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Join Now</span>
                  </button>
                  <Link
                    to={`/courses/${featuredCourse.id}`}
                    className="flex-1 bg-slate-700 text-white py-4 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-200 text-center text-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Community Images */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Student Community
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of learners from around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 h-80 rounded-lg overflow-hidden border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">AI Workshop Session</h3>
                  <p className="text-gray-300 text-sm">Students collaborating on real-world AI projects</p>
                </div>
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Live Session
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 h-80 rounded-lg overflow-hidden border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Certificate Ceremony</h3>
                  <p className="text-gray-300 text-sm">Celebrating student achievements and success</p>
                </div>
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Achievement
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 h-80 rounded-lg overflow-hidden border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Community Meetup</h3>
                  <p className="text-gray-300 text-sm">Networking and knowledge sharing events</p>
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Networking
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of successful learners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-lg border border-blue-500/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the AI revolution and stay ahead of the curve
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center space-x-2">
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
