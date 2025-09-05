import React from 'react';
import { Users, Award, Target, TrendingUp, CheckCircle, ArrowRight, Star, Crown, Shield, Globe, Building2, Handshake, FileText } from 'lucide-react';

const PerformersClub = () => {
  const membershipTiers = [
    {
      tier: 'Silver',
      description: 'Entry-level membership for emerging professionals',
      icon: Star,
      benefits: [
        'Access to basic networking events',
        'Monthly newsletter and updates',
        'Basic profile listing',
        'Community forum access'
      ],
      requirements: 'Professional experience: 2+ years',
      color: 'silver'
    },
    {
      tier: 'Gold',
      description: 'Mid-level membership for established professionals',
      icon: Award,
      benefits: [
        'All Silver benefits',
        'Priority event invitations',
        'Mentorship opportunities',
        'Exclusive workshops',
        'Direct messaging with members'
      ],
      requirements: 'Professional experience: 5+ years',
      color: 'gold'
    },
    {
      tier: 'Platinum',
      description: 'Premium membership for industry leaders',
      icon: Crown,
      benefits: [
        'All Gold benefits',
        'VIP event access',
        'Speaking opportunities',
        'Board advisory roles',
        'Investment opportunities',
        'Personal concierge service'
      ],
      requirements: 'Professional experience: 10+ years',
      color: 'platinum'
    }
  ];

  const exclusiveBenefits = [
    {
      title: 'Elite Networking',
      description: 'Connect with top-tier professionals and industry leaders',
      icon: Users,
      features: ['VIP Events', 'Private Dinners', 'Industry Summits', 'Exclusive Clubs']
    },
    {
      title: 'Professional Development',
      description: 'Access to cutting-edge knowledge and skill development',
      icon: Target,
      features: ['Masterclasses', 'Certification Programs', 'Skill Workshops', 'Leadership Training']
    },
    {
      title: 'Business Opportunities',
      description: 'Discover new partnerships and business ventures',
      icon: Handshake,
      features: ['Partnership Matching', 'Joint Ventures', 'Investment Access', 'Market Expansion']
    },
    {
      title: 'Global Recognition',
      description: 'Build your personal brand and industry reputation',
      icon: Globe,
      features: ['Award Nominations', 'Media Features', 'Speaking Engagements', 'Industry Recognition']
    }
  ];

  const successStories = [
    {
      name: 'Dr. Sarah Ahmed',
      position: 'CEO, TechInnovate',
      tier: 'Platinum',
                      story: 'Through Performer\'s Club, I connected with investors who helped scale my startup from $1M to $50M in revenue.',
      achievement: 'Company valued at $200M+',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      position: 'Managing Director, Global Solutions',
      tier: 'Gold',
      story: 'The mentorship program helped me develop leadership skills that transformed my career trajectory.',
      achievement: 'Promoted to C-Suite in 2 years',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Fatima Rahman',
      position: 'Founder, EcoTech',
      tier: 'Platinum',
      story: 'Access to the exclusive network opened doors to international partnerships and market expansion.',
      achievement: 'Expanded to 15 countries',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <Crown className="h-16 w-16 sm:h-20 sm:w-20 mx-auto mb-4 sm:mb-6 text-[#D0A96A]" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Performer's Club</h1>
          <p className="text-base sm:text-lg md:text-xl text-[#D0A96A] max-w-3xl mx-auto px-4">
            An exclusive community for high-achieving individuals committed to excellence
          </p>
        </div>
      </section>

      {/* About Performers Club */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 sm:gap-12 lg:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4 sm:mb-6">What is Performer's Club?</h2>
              <p className="text-base sm:text-lg text-[#111827] mb-4 sm:mb-6 leading-relaxed">
                Performer's Club is an exclusive community designed for high-achieving professionals, successful entrepreneurs, and industry experts who are committed to excellence and continuous growth.
              </p>
              <p className="text-base sm:text-lg text-[#111827] mb-4 sm:mb-6 leading-relaxed">
                Our members represent the top 5% of professionals in their respective fields, creating a powerful network of thought leaders, innovators, and change-makers who drive industry transformation.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-[#0A3D91]/10 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-[#0A3D91]">500+</div>
                  <div className="text-xs sm:text-sm text-[#0A3D91]">Elite Members</div>
          </div>
                <div className="text-center p-3 sm:p-4 bg-[#D0A96A]/10 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-[#D0A96A]">95%</div>
                  <div className="text-xs sm:text-sm text-[#D0A96A]">Success Rate</div>
            </div>
                </div>
              </div>
            <div className="mt-8 sm:mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-[#0A3D91]/20 to-[#0A3D91]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#0A3D91]/20">
                  <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-[#0A3D91] mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A3D91] mb-1 sm:mb-2">Exclusivity</h3>
                  <p className="text-xs sm:text-sm text-[#0A3D91]">Limited membership for quality connections</p>
                      </div>
                <div className="bg-gradient-to-br from-[#D0A96A]/20 to-[#D0A96A]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#D0A96A]/20">
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#D0A96A] mb-1 sm:mb-2">Growth</h3>
                  <p className="text-xs sm:text-sm text-[#D0A96A]">Continuous professional development</p>
                    </div>
                <div className="bg-gradient-to-br from-[#0A3D91]/20 to-[#0A3D91]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#0A3D91]/20">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#0A3D91] mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A3D91] mb-1 sm:mb-2">Network</h3>
                  <p className="text-xs sm:text-sm text-[#0A3D91]">Access to industry leaders</p>
                </div>
                <div className="bg-gradient-to-br from-[#D0A96A]/20 to-[#D0A96A]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#D0A96A]/20">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] mb-2 sm:mb-3" />
                  <h3 className="text-xs sm:text-sm text-[#D0A96A] mb-1 sm:mb-2">Trust</h3>
                  <p className="text-xs sm:text-sm text-[#D0A96A]">Verified member credentials</p>
              </div>
                      </div>
                    </div>
                </div>
              </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Membership Tiers</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
              Choose the membership level that best fits your professional goals and experience
            </p>
                      </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {membershipTiers.map((tier, index) => (
              <div key={index} className={`bg-[#FAF3E0] rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border-2 ${
                tier.color === 'silver' ? 'border-gray-300' :
                tier.color === 'gold' ? 'border-[#D0A96A]' :
                'border-[#0A3D91]'
              } overflow-hidden flex flex-col`}>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className={`inline-flex p-2 sm:p-3 rounded-lg ${
                      tier.color === 'silver' ? 'bg-gray-100 text-gray-600' :
                      tier.color === 'gold' ? 'bg-[#D0A96A]/10 text-[#D0A96A]' :
                      'bg-[#0A3D91]/10 text-[#0A3D91]'
                    } mb-3 sm:mb-4`}>
                      <tier.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">{tier.tier}</h3>
                    <p className="text-sm sm:text-base text-[#6B7280]">{tier.description}</p>
              </div>

                  <div className="mb-4 sm:mb-6 flex-1">
                    <h4 className="text-sm sm:text-base font-semibold text-[#111827] mb-2 sm:mb-3">Benefits:</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-[#2E7D32] flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-[#111827]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
              </div>

                  <div className="text-center mt-auto">
                    <p className="text-xs sm:text-sm text-[#6B7280] mb-3 sm:mb-4">{tier.requirements}</p>
                    <button className={`w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                      tier.color === 'silver' ? 'bg-gray-600 text-white hover:bg-gray-700' :
                      tier.color === 'gold' ? 'bg-[#D0A96A] text-[#111827] hover:bg-[#B8945A]' :
                      'bg-[#0A3D91] text-white hover:bg-[#08306B]'
                    }`}>
                      Apply for {tier.tier}
                        </button>
                    </div>
                </div>
                          </div>
                        ))}
          </div>
        </div>
      </section>

      {/* Exclusive Benefits */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Exclusive Benefits</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
              Unlock premium advantages that accelerate your professional success
            </p>
                  </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {exclusiveBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-[#E5E7EB]">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="inline-flex p-2 sm:p-3 rounded-lg bg-[#0A3D91]/10 text-[#0A3D91] mr-2 sm:mr-3">
                    <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#111827]">{benefit.title}</h3>
            </div>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-3 sm:mb-4">{benefit.description}</p>
                <div className="grid grid-cols-2 gap-1 sm:gap-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-1 sm:space-x-2">
                      <CheckCircle className="h-3 w-3 text-[#2E7D32] flex-shrink-0" />
                      <span className="text-xs text-[#111827]">{feature}</span>
                </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Member Success Stories</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
              Real achievements from our Performer's Club members
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-[#FAF3E0] rounded-lg sm:rounded-xl border border-[#E5E7EB] overflow-hidden">
                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                    />
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-[#111827]">{story.name}</h4>
                      <p className="text-xs sm:text-sm text-[#0A3D91]">{story.position}</p>
                      <span className={`inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-full ${
                        story.tier === 'Silver' ? 'bg-gray-100 text-gray-600' :
                        story.tier === 'Gold' ? 'bg-[#D0A96A]/10 text-[#D0A96A]' :
                        'bg-[#0A3D91]/10 text-[#0A3D91]'
                      }`}>
                        {story.tier} Member
                      </span>
                  </div>
                </div>
                  <p className="text-sm sm:text-base text-[#111827] italic mb-3 sm:mb-4">"{story.story}"</p>
                  <div className="bg-white p-2 sm:p-3 rounded-lg border border-[#E5E7EB]">
                    <p className="text-xs sm:text-sm font-semibold text-[#2E7D32]">{story.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">How to Join</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
              Our streamlined application process ensures quality membership
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Application', description: 'Submit your professional profile and achievements', icon: FileText },
              { step: '02', title: 'Review', description: 'Our committee evaluates your application', icon: Target },
              { step: '03', title: 'Interview', description: 'Personal interview with club representatives', icon: Users },
                              { step: '04', title: 'Approval', description: 'Welcome to the Performer\'s Club community', icon: Crown }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0A3D91] text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  {item.step}
                </div>
                <div className="inline-flex p-2 sm:p-3 rounded-lg bg-[#D0A96A]/10 text-[#D0A96A] mb-3 sm:mb-4">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#0A3D91] to-[#08306B]">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Join the Elite?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#D0A96A] mb-6 sm:mb-8 px-4">
            Take your professional journey to the next level with exclusive access to industry leaders and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#FAF3E0] text-[#111827] border border-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] text-sm sm:text-base"
            >
              Apply Now
            </a>
            <a
              href="/investor-connect"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0A3D91] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group text-sm sm:text-base"
            >
              Explore Investment Opportunities
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformersClub;
