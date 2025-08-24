import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: 199,
    originalPrice: 299,
    popular: false,
    description: "Perfect for beginners starting their AI career journey",
    features: [
      "Access to core AI tools training",
      "30+ video lessons",
      "Basic career templates",
      "Community forum access",
      "Email support",
      "Certificate of completion"
    ],
    limitations: [
      "No live sessions",
      "No 1-on-1 career coaching"
    ]
  },
  {
    name: "Pro",
    price: 399,
    originalPrice: 599,
    popular: true,
    description: "Most popular choice for serious career advancement",
    features: [
      "Everything in Basic",
      "Live weekly group sessions",
      "Advanced AI career templates",
      "Priority community support",
      "Bonus: AI Career Masterclass",
      "30-day money-back guarantee",
      "LinkedIn certificate",
      "Career advancement guide"
    ],
    limitations: []
  },
  {
    name: "Premium",
    price: 699,
    originalPrice: 999,
    popular: false,
    description: "Ultimate package with personal career coaching",
    features: [
      "Everything in Pro",
      "3 x 1-on-1 career coaching sessions",
      "Custom AI career strategy consultation",
      "Private Slack channel access",
      "Job placement assistance",
      "Lifetime course updates",
      "Guest expert sessions",
      "Personal AI career audit"
    ],
    limitations: []
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Career Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Invest in your future with our comprehensive AI career advancement program
          </p>
          
          {/* Limited time offer */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            <Zap className="w-4 h-4" />
            Limited Time: Save up to 30% - Offer ends January 31st
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full ${
                plan.popular 
                  ? 'border-2 border-blue-500 ring-4 ring-blue-100' 
                  : 'border border-gray-200'
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${plan.originalPrice}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      One-time payment
                    </div>
                  </div>
                  
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    plan.popular
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    Save ${plan.originalPrice - plan.price}
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start gap-3 text-sm text-gray-400">
                            <span className="w-5 h-5 flex-shrink-0 mt-0.5">•</span>
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <button className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Enroll Now
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  30-day money-back guarantee
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a free 15-minute consultation with our AI career specialists
            </p>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Book Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;