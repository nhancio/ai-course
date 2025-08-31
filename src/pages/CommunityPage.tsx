import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Users, MessageCircle, Heart, Share2 } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/nhancio',
      icon: 'linkedin',
      color: 'from-blue-600 to-blue-700',
      followers: '1,146'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nhancio.ai/',
      icon: 'instagram',
      color: 'from-pink-500 to-purple-600',
      followers: '2.5K'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@nhancioai',
      icon: 'youtube',
      color: 'from-red-500 to-red-600',
      followers: '5.2K'
    }
  ];

                const communityPhotos = [
                {
                  id: 1,
                  title: 'AI Hackathon Winners',
                  description: 'Our team celebrating victory at the AI4TG Hackathon by Telangana AI Mission',
                  image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=500&fit=crop',
                  likes: 156,
                  comments: 23,
                  category: 'Hackathon'
                },
                {
                  id: 2,
                  title: 'Podcast Recording Session',
                  description: 'Recording the first-ever Telugu podcast on AI and technology',
                  image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop',
                  likes: 89,
                  comments: 12,
                  category: 'Media'
                },
                {
                  id: 3,
                  title: 'Community Meetup',
                  description: 'Bringing the Telugu tech community together for knowledge sharing',
                  image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=500&fit=crop',
                  likes: 234,
                  comments: 45,
                  category: 'Networking'
                },
                {
                  id: 4,
                  title: 'Workshop Session',
                  description: 'Hands-on AI workshop with students and professionals',
                  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
                  likes: 178,
                  comments: 31,
                  category: 'Workshop'
                },
                {
                  id: 5,
                  title: 'Team Building',
                  description: 'Our amazing team working on innovative AI solutions',
                  image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop',
                  likes: 203,
                  comments: 28,
                  category: 'Team'
                },
                {
                  id: 6,
                  title: 'AI Conference',
                  description: 'Presenting our latest AI innovations at tech conferences',
                  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
                  likes: 312,
                  comments: 67,
                  category: 'Conference'
                }
              ];

  const communityStats = [
    { label: 'Community Members', value: '10,000+', icon: Users },
    { label: 'Events Hosted', value: '50+', icon: MessageCircle },
    { label: 'Countries Reached', value: '25+', icon: Share2 },
    { label: 'Success Stories', value: '500+', icon: Heart }
  ];

                const nextPhoto = () => {
                setCurrentPhotoIndex((prev) => (prev + 1) % communityPhotos.length);
              };

              const prevPhoto = () => {
                setCurrentPhotoIndex((prev) => (prev - 1 + communityPhotos.length) % communityPhotos.length);
              };

              // Auto-rotate carousel
              useEffect(() => {
                const interval = setInterval(() => {
                  setCurrentPhotoIndex((prev) => (prev + 1) % communityPhotos.length);
                }, 5000); // Change every 5 seconds

                return () => clearInterval(interval);
              }, [communityPhotos.length]);

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
            Join Our Community
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with fellow AI enthusiasts, share knowledge, and stay updated with the latest in technology
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {communityStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Follow Us on Social Media
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className={`bg-gradient-to-r ${social.color} p-6 rounded-lg text-center hover:scale-105 transition-all duration-300`}>
                  <div className="text-4xl mb-4">
                    {social.icon === 'linkedin' && (
                      <svg className="w-12 h-12 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="w-12 h-12 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                      </svg>
                    )}
                    {social.icon === 'youtube' && (
                      <svg className="w-12 h-12 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                  </div>
                  <div className="text-white font-bold text-xl mb-2">{social.name}</div>
                  <div className="text-white/80 mb-2">{social.followers} followers</div>
                  <div className="flex items-center justify-center space-x-2 text-white/60 group-hover:text-white transition-colors">
                    <span>Follow us</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

                            {/* Community Photos Carousel */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="mb-16"
                    >
                      <h2 className="text-3xl font-bold text-white text-center mb-8">
                        Community Highlights
                      </h2>
                      
                      <div className="relative">
                        {/* Carousel Container */}
                        <div className="relative overflow-hidden rounded-lg shadow-2xl">
                          <div 
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentPhotoIndex * 100}%)` }}
                          >
                            {communityPhotos.map((photo) => (
                              <div key={photo.id} className="w-full flex-shrink-0">
                                <div className="relative">
                                  <img 
                                    src={photo.image} 
                                    alt={photo.title}
                                    className="w-full h-96 object-cover"
                                  />
                                  
                                  {/* Category Badge */}
                                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {photo.category}
                                  </div>
                                  
                                  {/* Photo Info Overlay */}
                                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                                    <div className="flex items-center justify-between">
                                      <div className="flex-1">
                                        <h3 className="text-white font-semibold text-xl mb-2">{photo.title}</h3>
                                        <p className="text-gray-200 text-sm leading-relaxed">{photo.description}</p>
                                      </div>
                                      <div className="flex items-center space-x-4 text-white ml-4">
                                        <div className="flex items-center space-x-1 bg-black/30 px-3 py-1 rounded-full">
                                          <Heart className="w-4 h-4" />
                                          <span className="text-sm font-medium">{photo.likes}</span>
                                        </div>
                                        <div className="flex items-center space-x-1 bg-black/30 px-3 py-1 rounded-full">
                                          <MessageCircle className="w-4 h-4" />
                                          <span className="text-sm font-medium">{photo.comments}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                          onClick={prevPhoto}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:scale-110"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextPhoto}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:scale-110"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-6 space-x-3">
                          {communityPhotos.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentPhotoIndex(index)}
                              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                index === currentPhotoIndex 
                                  ? 'bg-blue-500 scale-125' 
                                  : 'bg-gray-400 hover:bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>

        {/* Join Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Connect with like-minded professionals, share your experiences, and stay updated with the latest AI trends and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/company/nhancio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Join on LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/nhancio.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Follow on Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityPage;
