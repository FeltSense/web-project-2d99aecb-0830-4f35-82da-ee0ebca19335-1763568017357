import React from 'react';
import { Scale, FileText, Home, Users, Globe, Lightbulb, Award, Briefcase } from 'lucide-react';

export default function Services() {
  const practiceAreas = [
    {
      icon: Briefcase,
      title: "Corporate Law",
      description: "Comprehensive business solutions including mergers, acquisitions, corporate governance, and regulatory compliance for enterprises of all sizes.",
      featured: true,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      icon: Scale,
      title: "Litigation & Dispute Resolution",
      description: "Expert representation in complex commercial litigation, arbitration, and alternative dispute resolution with proven courtroom success.",
      featured: false
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description: "Full-service real estate transactions, zoning, land use, commercial leases, and property development counsel.",
      featured: true,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Compassionate guidance through divorce, custody, prenuptial agreements, and estate planning with discretion.",
      featured: false
    },
    {
      icon: Globe,
      title: "Immigration Law",
      description: "Comprehensive immigration services including visas, green cards, citizenship, and corporate immigration solutions.",
      featured: false
    },
    {
      icon: Lightbulb,
      title: "Intellectual Property",
      description: "Protection and enforcement of patents, trademarks, copyrights, and trade secrets for innovators and creators.",
      featured: false
    }
  ];

  const attorneys = [
    {
      name: "Michael Harrison",
      title: "Senior Partner, Corporate Law",
      credentials: "J.D. Harvard Law School",
      barAdmissions: "NY, CA, Federal Courts",
      notableCase: "Led $2.4B merger for Fortune 500 tech company",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80"
    },
    {
      name: "Victoria Chen",
      title: "Partner, Litigation",
      credentials: "J.D. Yale Law School",
      barAdmissions: "NY, NJ, Supreme Court",
      notableCase: "Won landmark $45M commercial dispute verdict",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
    },
    {
      name: "Robert Lawson",
      title: "Partner, Real Estate",
      credentials: "J.D. Columbia Law School",
      barAdmissions: "NY, CT, Federal Courts",
      notableCase: "Negotiated $800M commercial property portfolio acquisition",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
    }
  ];

  const caseResults = [
    {
      category: "Corporate M&A",
      result: "$2.4B Merger Successfully Completed",
      description: "Navigated complex regulatory approvals and due diligence for technology sector consolidation.",
      outcome: "Client Confidential"
    },
    {
      category: "Commercial Litigation",
      result: "$45M Verdict for Plaintiff",
      description: "Secured substantial damages in breach of contract and fraud case after three-week trial.",
      outcome: "Confidential Settlement"
    },
    {
      category: "Real Estate Development",
      result: "Zoning Approval & $500M Project Launch",
      description: "Obtained municipal approvals for mixed-use development in competitive urban market.",
      outcome: "Major Development Firm"
    }
  ];

  const testimonials = [
    {
      quote: "Prestige Legal Partners provided exceptional guidance through our company's acquisition. Their attention to detail and strategic thinking was invaluable.",
      client: "CEO, Technology Company",
      case: "Corporate M&A"
    },
    {
      quote: "The litigation team's courtroom expertise and preparation led to an outcome that exceeded our expectations. True professionals.",
      client: "CFO, Manufacturing Firm",
      case: "Commercial Dispute"
    },
    {
      quote: "Their real estate team made our complex property transaction seamless. Highly responsive and knowledgeable throughout.",
      client: "Principal, Investment Fund",
      case: "Real Estate Transaction"
    }
  ];

  const blogPosts = [
    {
      title: "Navigating Corporate Compliance in 2024",
      category: "Corporate Law",
      date: "March 15, 2024",
      excerpt: "Key regulatory changes every business leader needs to understand for the coming fiscal year.",
      readTime: "5 min read"
    },
    {
      title: "Alternative Dispute Resolution: When to Choose Arbitration",
      category: "Litigation",
      date: "March 10, 2024",
      excerpt: "Understanding the strategic advantages and considerations of arbitration versus traditional litigation.",
      readTime: "7 min read"
    },
    {
      title: "Commercial Real Estate Trends in Urban Markets",
      category: "Real Estate",
      date: "March 5, 2024",
      excerpt: "Analysis of shifting dynamics in commercial property investment and development opportunities.",
      readTime: "6 min read"
    },
    {
      title: "Protecting Your Intellectual Property Portfolio",
      category: "IP Law",
      date: "February 28, 2024",
      excerpt: "Essential strategies for safeguarding patents, trademarks, and trade secrets in a competitive landscape.",
      readTime: "8 min read"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Practice Areas - Bento Grid Layout */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Practice Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal services delivered by experienced attorneys with proven results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            if (area.featured) {
              return (
                <div key={index} className="lg:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={area.image} 
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="bg-blue-600 p-3 rounded-lg mb-3 inline-block">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">{area.title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 text-lg leading-relaxed">{area.description}</p>
                  </div>
                </div>
              );
            }
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group">
                <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>

        {/* Attorney Profiles - Staggered Cards */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Attorneys
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced legal professionals with prestigious credentials and proven track records
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attorneys.map((attorney, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={attorney.image} 
                    alt={attorney.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                </div>
                <div className="p-6 -mt-20 relative z-10">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{attorney.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{attorney.title}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <Award className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                        <p className="text-sm text-gray-600">{attorney.credentials}</p>
                      </div>
                      <div className="flex items-start">
                        <Scale className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                        <p className="text-sm text-gray-600">{attorney.barAdmissions}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Notable Achievement:</p>
                      <p className="text-sm text-gray-600">{attorney.notableCase}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Results - Split Layout */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notable Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven success in high-stakes matters with confidentiality and discretion
            </p>
          </div>

          <div className="space-y-6">
            {caseResults.map((result, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col md:flex-row items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-lg flex-shrink-0">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{result.result}</h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full mt-2 md:mt-0 inline-block">
                      {result.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3 leading-relaxed">{result.description}</p>
                  <p className="text-sm text-gray-500 italic">Client: {result.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials - Masonry Style */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by executives and organizations nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Scale className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-blue-600">{testimonial.case}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="font-semibold text-gray-900">{testimonial.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Resources Blog - Grid Layout */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Legal Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional perspectives on current legal developments and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <span className="text-blue-600 font-semibold text-sm group-hover:underline">
                    Read Article →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}