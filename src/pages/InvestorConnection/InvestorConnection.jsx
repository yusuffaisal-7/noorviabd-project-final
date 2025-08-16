import React from 'react';
import { TrendingUp, Users, Target, CheckCircle, ArrowRight, DollarSign, Network, Handshake } from 'lucide-react';

const InvestorConnection = () => {
  return (
    <div className="">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-700 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="https://res.cloudinary.com/duh7c5x99/image/upload/v1754661040/white-Photoroom-2_we43d0.png" 
            alt="NoorVia BD Logo" 
            className="h-20 w-auto mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investor Connection</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Bridging the gap between investors and entrepreneurs for mutual growth and success
          </p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Purpose</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                NoorVia BD serves as a strategic bridge connecting visionary investors with innovative entrepreneurs. We understand that successful businesses are built on strong partnerships and adequate funding support.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our investor connection platform facilitates meaningful relationships between capital providers and business innovators, creating an ecosystem where both parties can thrive and achieve their respective goals.
              </p>
              <div className="space-y-4">
                {[
                  'Connecting qualified investors with vetted entrepreneurs',
                  'Facilitating due diligence and investment processes',
                  'Providing ongoing support and guidance',
                  'Creating sustainable business partnerships'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 p-6 rounded-xl text-center">
                  <DollarSign className="h-8 w-8 text-green-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-green-900 mb-2">$50M+</h3>
                  <p className="text-sm text-green-700">Investment Facilitated</p>
                </div>
                <div className="bg-teal-100 p-6 rounded-xl text-center">
                  <Users className="h-8 w-8 text-teal-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-teal-900 mb-2">200+</h3>
                  <p className="text-sm text-teal-700">Successful Connections</p>
                </div>
                <div className="bg-blue-100 p-6 rounded-xl text-center">
                  <Network className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-blue-900 mb-2">150+</h3>
                  <p className="text-sm text-blue-700">Active Investors</p>
                </div>
                <div className="bg-orange-100 p-6 rounded-xl text-center">
                  <Target className="h-8 w-8 text-orange-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-orange-900 mb-2">85%</h3>
                  <p className="text-sm text-orange-700">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process Flow</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to connecting investors with entrepreneurs through our proven methodology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Assessment',
                description: 'Comprehensive evaluation of entrepreneur profiles and business plans',
                icon: Target,
                color: 'blue'
              },
              {
                step: '02',
                title: 'Investor Matching',
                description: 'Strategic matching based on industry, stage, and investment criteria',
                icon: Users,
                color: 'teal'
              },
              {
                step: '03',
                title: 'Introduction & Due Diligence',
                description: 'Facilitated introductions and support during due diligence process',
                icon: Handshake,
                color: 'green'
              },
              {
                step: '04',
                title: 'Investment & Support',
                description: 'Ongoing support throughout investment lifecycle and growth phases',
                icon: TrendingUp,
                color: 'orange'
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`inline-flex p-3 rounded-lg bg-${process.color}-100 text-${process.color}-700 mb-4`}>
                    <process.icon className="h-6 w-6" />
                  </div>
                  <div className={`text-2xl font-bold text-${process.color}-600 mb-2`}>
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mutual Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creating value for both investors and entrepreneurs through strategic partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Investors */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <DollarSign className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900">For Investors</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Access to pre-screened, high-potential startups',
                  'Diversified investment opportunities across industries',
                  'Reduced due diligence time through our vetting process',
                  'Ongoing portfolio support and monitoring',
                  'Network expansion with fellow investors',
                  'Strategic insights and market intelligence'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-800">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Entrepreneurs */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-8 w-8 text-green-700 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">For Entrepreneurs</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Access to qualified, interested investors',
                  'Professional presentation support and coaching',
                  'Streamlined fundraising process',
                  'Strategic mentorship and guidance',
                  'Network access to industry experts',
                  'Post-investment business development support'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-green-800">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Network Expansion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Network className="h-12 w-12 text-teal-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Network Expansion & Support System</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building lasting relationships and comprehensive support systems for sustainable growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Community Building',
                description: 'Foster connections between investors, entrepreneurs, and industry experts through regular networking events and forums.',
                icon: Users
              },
              {
                title: 'Knowledge Sharing',
                description: 'Facilitate knowledge transfer through workshops, seminars, and mentorship programs.',
                icon: Target
              },
              {
                title: 'Continuous Support',
                description: 'Provide ongoing support throughout the investment lifecycle with regular check-ins and advisory services.',
                icon: Handshake
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="inline-flex p-3 rounded-lg bg-teal-100 text-teal-700 mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Connect?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you're an investor seeking opportunities or an entrepreneur looking for funding, we're here to facilitate meaningful connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join as Investor
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Apply for Funding
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorConnection;