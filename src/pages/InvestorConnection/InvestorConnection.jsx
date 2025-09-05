import React from 'react';
import { TrendingUp, Users, Globe, Building2, Target, CheckCircle, ArrowRight, DollarSign, Handshake, Shield, Award, FileText } from 'lucide-react';

const InvestorConnection = () => {
  const investmentAreas = [
    {
      title: 'Technology Startups',
      description: 'Innovative tech solutions and digital transformation companies',
      icon: Target,
      potential: 'High Growth',
      sectors: ['AI/ML', 'Fintech', 'SaaS', 'IoT']
    },
    {
      title: 'Manufacturing',
      description: 'Industrial manufacturing and production facilities',
      icon: Building2,
      potential: 'Stable Returns',
      sectors: ['Automotive', 'Electronics', 'Textiles', 'Food Processing']
    },
    {
      title: 'Healthcare & Pharma',
      description: 'Medical devices, pharmaceuticals, and healthcare services',
      icon: Shield,
      potential: 'Long-term Growth',
      sectors: ['Medical Devices', 'Biotech', 'Digital Health', 'Telemedicine']
    },
    {
      title: 'Renewable Energy',
      description: 'Sustainable energy solutions and green technology',
      icon: Globe,
      potential: 'Future-focused',
      sectors: ['Solar', 'Wind', 'Battery Storage', 'Smart Grid']
    },
    {
      title: 'E-commerce & Retail',
      description: 'Digital commerce platforms and retail innovations',
      icon: TrendingUp,
      potential: 'Scalable Growth',
      sectors: ['Online Retail', 'Marketplace', 'Logistics', 'Digital Marketing']
    },
    {
      title: 'Agriculture & Food',
      description: 'Agricultural technology and food processing solutions',
      icon: Award,
      potential: 'Essential Sector',
      sectors: ['AgTech', 'Food Processing', 'Supply Chain', 'Organic Products']
    }
  ];

  const services = [
    {
      title: 'Investment Matching',
      description: 'Connect with pre-vetted investment opportunities that match your criteria',
      icon: Handshake,
      features: ['Risk Assessment', 'Due Diligence', 'Portfolio Matching', 'Investment Analysis']
    },
    {
      title: 'Due Diligence Support',
      description: 'Comprehensive analysis and verification of investment opportunities',
      icon: FileText,
      features: ['Financial Analysis', 'Market Research', 'Legal Review', 'Risk Evaluation']
    },
    {
      title: 'Network Access',
      description: 'Access to our extensive network of entrepreneurs and business leaders',
      icon: Users,
      features: ['Direct Connections', 'Industry Events', 'Networking Sessions', 'Partnership Opportunities']
    },
    {
      title: 'Portfolio Management',
      description: 'Ongoing support and monitoring of your investment portfolio',
      icon: TrendingUp,
      features: ['Performance Tracking', 'Strategic Guidance', 'Exit Planning', 'Risk Management']
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="h-20 w-20 mx-auto mb-6 text-[#D0A96A]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investor Connection</h1>
          <p className="text-xl text-[#D0A96A] max-w-3xl mx-auto">
            Bridging investors and entrepreneurs for mutual growth and success
          </p>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Investment Opportunities</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
              Discover high-potential investment opportunities across diverse sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-[#E5E7EB] overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-[#0A3D91]/10 text-[#0A3D91] mr-3">
                      <area.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#111827]">{area.title}</h3>
                      <span className="inline-block px-2 py-1 bg-[#D0A96A]/10 text-[#D0A96A] text-xs rounded-full">
                        {area.potential}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#6B7280] leading-relaxed mb-4">{area.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-[#111827] mb-2">Key Sectors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.sectors.map((sector, sectorIndex) => (
                        <span key={sectorIndex} className="px-2 py-1 bg-[#F9FAFB] text-[#6B7280] text-xs rounded-full border border-[#E5E7EB]">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Our Services</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
              Comprehensive support throughout your investment journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#FAF3E0] p-6 rounded-xl border border-[#E5E7EB] hover:border-[#D0A96A] transition-colors">
                <div className="flex items-center mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-[#0A3D91]/10 text-[#0A3D91] mr-3">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111827]">{service.title}</h3>
                </div>
                <p className="text-[#6B7280] leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#2E7D32] flex-shrink-0" />
                      <span className="text-sm text-[#111827]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Investment Process</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
              Our streamlined process ensures efficient and successful investment connections
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Registration', description: 'Complete your investor profile and preferences', icon: Users },
              { step: '02', title: 'Matching', description: 'We identify opportunities that match your criteria', icon: Target },
              { step: '03', title: 'Due Diligence', description: 'Comprehensive analysis and verification process', icon: FileText },
              { step: '04', title: 'Investment', description: 'Facilitate the investment and ongoing support', icon: DollarSign }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0A3D91] text-white text-xl font-bold mb-4">
                  {item.step}
                </div>
                <div className="inline-flex p-3 rounded-lg bg-[#D0A96A]/10 text-[#D0A96A] mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-2">{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Success Stories</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
              Real results from our investor-entrepreneur connections
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: 'TechStart BD',
                industry: 'Technology',
                investment: '$2.5M',
                result: 'Successfully expanded to 3 new markets',
                description: 'Connected with international investors leading to rapid growth and market expansion.'
              },
              {
                company: 'Green Energy Solutions',
                industry: 'Renewable Energy',
                investment: '$1.8M',
                result: 'Increased production capacity by 300%',
                description: 'Strategic investment enabled scaling of solar panel manufacturing operations.'
              },
              {
                company: 'HealthTech Innovations',
                industry: 'Healthcare',
                investment: '$3.2M',
                result: 'Launched 2 new medical devices',
                description: 'Investment supported R&D and successful product launches in the healthcare sector.'
              }
            ].map((story, index) => (
              <div key={index} className="bg-[#FAF3E0] p-6 rounded-xl border border-[#E5E7EB]">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#111827] mb-1">{story.company}</h3>
                  <p className="text-[#0A3D91] font-semibold">{story.industry}</p>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#D0A96A] mb-1">{story.investment}</div>
                  <p className="text-[#2E7D32] font-medium">{story.result}</p>
                </div>
                <p className="text-[#6B7280] leading-relaxed">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#0A3D91] to-[#08306B]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Investing?
          </h2>
          <p className="text-xl text-[#D0A96A] mb-8">
            Join our network of successful investors and discover high-potential opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#D0A96A] text-[#111827] hover:bg-[#B8945A] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Connect With Us
            </a>
            <a
              href="/performers-club"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0A3D91] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
            >
              Join Performers Club
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorConnection;