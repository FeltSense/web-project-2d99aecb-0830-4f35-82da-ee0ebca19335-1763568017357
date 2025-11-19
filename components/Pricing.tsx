'use client';

import { Check, Shield, Crown, Zap, Star, Award } from 'lucide-react';

export default function Pricing() {
  const features = [
    { icon: Shield, text: 'Comprehensive Legal Consultation' },
    { icon: Crown, text: 'Expert Attorney Review' },
    { icon: Zap, text: '24-Hour Response Time' },
    { icon: Award, text: 'Personalized Legal Strategy' },
    { icon: Star, text: 'Document Preparation & Filing' },
    { icon: Check, text: 'Ongoing Case Support' },
  ];

  const comparisons = [
    { feature: 'Initial Consultation', prestige: true, others: true },
    { feature: 'Expert Attorney Review', prestige: true, others: false },
    { feature: '24-Hour Response', prestige: true, others: false },
    { feature: 'Document Preparation', prestige: true, others: false },
    { feature: 'Personalized Strategy', prestige: true, others: false },
    { feature: 'Ongoing Support', prestige: true, others: false },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            <span>EXCEPTIONAL VALUE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium legal services at an unbeatable rate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* LEFT: Main Pricing Card */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl transform rotate-1"></div>
            
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-12 border-2 border-gray-900">
              {/* Best Value Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  BEST VALUE
                </div>
              </div>

              {/* Price Display */}
              <div className="text-center mb-10 pt-4">
                <div className="flex items-start justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900 mt-4">$</span>
                  <span className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                    29
                  </span>
                </div>
                <p className="text-xl text-gray-600 font-medium">Per Consultation</p>
                <p className="text-sm text-gray-500 mt-2">No hidden fees • No surprises</p>
              </div>

              {/* Feature List */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-gray-900 font-medium">{feature.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-8 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group">
                Get Started Now
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Secure payment • Instant confirmation
              </p>
            </div>
          </div>

          {/* RIGHT: Comparison Table */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-200">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Why Choose Prestige?
              </h3>
              <p className="text-gray-600">
                Compare what you get with our service versus typical legal consultations
              </p>
            </div>

            <div className="space-y-1">
              {/* Header Row */}
              <div className="grid grid-cols-3 gap-4 pb-4 border-b-2 border-gray-200">
                <div className="col-span-1"></div>
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-sm">Prestige Legal</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-500 text-sm">Others</div>
                </div>
              </div>

              {/* Comparison Rows */}
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors rounded-lg px-2"
                >
                  <div className="col-span-1 flex items-center">
                    <span className="text-gray-900 font-medium text-sm">{item.feature}</span>
                  </div>
                  <div className="flex justify-center items-center">
                    {item.prestige ? (
                      <div className="w-7 h-7 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-400 text-lg">×</span>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    {item.others ? (
                      <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-gray-600" strokeWidth={2} />
                      </div>
                    ) : (
                      <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-400 text-lg">×</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-600 mt-1">Cases Won</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-600 mt-1">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-600 mt-1">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-lg px-8 py-4 border border-gray-200">
            <Shield className="w-6 h-6 text-gray-900" />
            <div className="text-left">
              <div className="font-bold text-gray-900">Money-Back Guarantee</div>
              <div className="text-sm text-gray-600">100% satisfaction or full refund within 30 days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
