import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Richardson",
      role: "CEO, Richardson Industries",
      image: "https://i.pravatar.cc/150?img=12",
      quote: "Prestige Legal Partners handled our multi-million dollar acquisition with exceptional precision and strategic insight. Their corporate law expertise is unmatched in the industry.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Founder, TechVenture Capital",
      image: "https://i.pravatar.cc/150?img=45",
      quote: "When facing complex intellectual property litigation, their team delivered results beyond our expectations. Professional, responsive, and incredibly knowledgeable.",
      rating: 5
    },
    {
      id: 3,
      name: "David Martinez",
      role: "Executive Director, Global Investments",
      image: "https://i.pravatar.cc/150?img=33",
      quote: "The level of dedication and expertise they brought to our international merger was outstanding. They navigated complex regulations seamlessly and protected our interests at every turn.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders and Fortune 500 companies for exceptional legal representation
          </p>
        </div>

        {/* Carousel-Style Layout with Center Featured Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 lg:mt-12">
            <div className="flex flex-col items-center text-center mb-6">
              <Image
                src={testimonials[0].image}
                alt={testimonials[0].name}
                width={80}
                height={80}
                className="rounded-full mb-4 ring-4 ring-gray-100"
              />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
            </div>
            <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">
              "{testimonials[0].quote}"
            </p>
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-bold text-gray-900 text-xl mb-1">
                {testimonials[0].name}
              </h4>
              <p className="text-gray-600 text-sm">
                {testimonials[0].role}
              </p>
            </div>
          </div>

          {/* Center Featured Card - LARGER */}
          <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300 lg:scale-105 border-2 border-gray-900">
            <div className="flex flex-col items-center text-center mb-8">
              <Image
                src={testimonials[1].image}
                alt={testimonials[1].name}
                width={100}
                height={100}
                className="rounded-full mb-5 ring-4 ring-gray-900"
              />
              <div className="flex gap-1 mb-5">
                {[...Array(testimonials[1].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-3xl">⭐</span>
                ))}
              </div>
            </div>
            <p className="text-gray-700 italic text-xl mb-8 leading-relaxed">
              "{testimonials[1].quote}"
            </p>
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-bold text-gray-900 text-2xl mb-2">
                {testimonials[1].name}
              </h4>
              <p className="text-gray-600">
                {testimonials[1].role}
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 lg:mt-12">
            <div className="flex flex-col items-center text-center mb-6">
              <Image
                src={testimonials[2].image}
                alt={testimonials[2].name}
                width={80}
                height={80}
                className="rounded-full mb-4 ring-4 ring-gray-100"
              />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[2].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
            </div>
            <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">
              "{testimonials[2].quote}"
            </p>
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-bold text-gray-900 text-xl mb-1">
                {testimonials[2].name}
              </h4>
              <p className="text-gray-600 text-sm">
                {testimonials[2].role}
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">500+</p>
              <p className="text-gray-600">Cases Won</p>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">$2.5B+</p>
              <p className="text-gray-600">Client Savings</p>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">98%</p>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">25+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
