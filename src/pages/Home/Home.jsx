// import React from 'react';

// const Home = () => {
//     return (
//         <div>
//             <h1>this is Home</h1>
//         </div>
//     );
// };

// export default Home;


import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Globe, TrendingUp, CheckCircle, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Professional Business Platform",
      subtitle: "Connecting entrepreneurs with opportunities worldwide",
      description: "NoorVia BD serves as a comprehensive business platform that bridges the gap between entrepreneurs, investors, and professional networks.",
      cta1: "Connect with us",
      cta2: "Explore Services",
      bgGradient: "from-blue-900 via-blue-800 to-teal-800",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Global Business Solutions",
      subtitle: "Your gateway to international markets",
      description: "We provide end-to-end solutions for business development, from initial consultation to global expansion with comprehensive support.",
      cta1: "Start Your Journey",
      cta2: "View Services",
      bgGradient: "from-teal-900 via-teal-800 to-blue-800",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Investor Connection Hub",
      subtitle: "Bridging investors and entrepreneurs",
      description: "Our platform facilitates meaningful relationships between capital providers and business innovators for mutual growth and success.",
      cta1: "Join Network",
      cta2: "Learn More",
      bgGradient: "from-green-900 via-green-800 to-teal-800",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Performers' Club",
      subtitle: "Elite professional network for achievers",
      description: "An exclusive community for high-achieving individuals, successful entrepreneurs, and industry experts committed to excellence.",
      cta1: "Apply Now",
      cta2: "Discover Benefits",
      bgGradient: "from-purple-900 via-purple-800 to-blue-800",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${slides[currentSlide].bgGradient} text-white overflow-hidden transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            opacity: 0.15
          }}
        ></div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="https://res.cloudinary.com/duh7c5x99/image/upload/v1754661040/white-Photoroom-2_we43d0.png" 
                alt="NoorVia BD Logo" 
                className="h-40 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 transition-all duration-1000">
              NoorVia BD
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4 text-white font-semibold transition-all duration-1000">
              {slides[currentSlide].title}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light transition-all duration-1000">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto leading-relaxed transition-all duration-1000">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {slides[currentSlide].cta1}
              </Link>
              <Link
                to="/products-services"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
              >
                {slides[currentSlide].cta2}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100">
              Trusted by businesses worldwide for professional growth and success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Businesses Supported', icon: Building2 },
              { number: '50+', label: 'Countries Reached', icon: Globe },
              { number: '1000+', label: 'Professional Network', icon: Users },
              { number: '95%', label: 'Success Rate', icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Platform</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Navigate through our comprehensive business solutions and professional network
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Company Profile',
                description: 'Learn about our mission, vision, and business approach',
                icon: Building2,
                href: '/company-profile',
                color: 'blue'
              },
              {
                title: 'Products & Services',
                description: 'Explore our comprehensive business solutions',
                icon: Target,
                href: '/products-services',
                color: 'teal'
              },
              {
                title: 'Investor Connect',
                description: 'Bridge between investors and entrepreneurs',
                icon: TrendingUp,
                href: '/investor-connect',
                color: 'green'
              },
              {
                title: 'Performers\' Club',
                description: 'Join our professional network community',
                icon: Users,
                href: '/performers-club',
                color: 'orange'
              }
            ].map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-lg bg-${item.color}-100 text-${item.color}-700 mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive business solutions designed to accelerate your growth and success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Business Consultation',
                description: 'Expert guidance and strategic planning for sustainable business growth',
                icon: Users,
                image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Global Sourcing',
                description: 'Connect with quality suppliers and manufacturers worldwide',
                icon: Globe,
                image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Legal Documentation',
                description: 'Complete legal support for business registration and compliance',
                icon: CheckCircle,
                image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex p-2 rounded-lg bg-blue-100 text-blue-700 mr-3">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What NoorVia BD Does
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                NoorVia BD is a comprehensive business platform that serves as a bridge between entrepreneurs, investors, and professional networks. We provide end-to-end solutions for business development, from initial consultation to global expansion.
              </p>
              <div className="space-y-4">
                {[
                  'Business Consultation & Network Support',
                  'Sourcing and Indenting Solutions',
                  'Legal Documentation Support',
                  'Global Import and Export Solutions',
                  'Strategic Business Consulting & Partnership'
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 p-6 rounded-lg text-center">
                  <Globe className="h-8 w-8 text-blue-700 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900">Global Reach</h3>
                  <p className="text-sm text-blue-700 mt-1">International partnerships</p>
                </div>
                <div className="bg-teal-100 p-6 rounded-lg text-center">
                  <Users className="h-8 w-8 text-teal-700 mx-auto mb-2" />
                  <h3 className="font-semibold text-teal-900">Network</h3>
                  <p className="text-sm text-teal-700 mt-1">Professional connections</p>
                </div>
                <div className="bg-green-100 p-6 rounded-lg text-center">
                  <Target className="h-8 w-8 text-green-700 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-900">Precision</h3>
                  <p className="text-sm text-green-700 mt-1">Targeted solutions</p>
                </div>
                <div className="bg-orange-100 p-6 rounded-lg text-center">
                  <TrendingUp className="h-8 w-8 text-orange-700 mx-auto mb-2" />
                  <h3 className="font-semibold text-orange-900">Growth</h3>
                  <p className="text-sm text-orange-700 mt-1">Business expansion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Trusted by businesses and professionals worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Ahmed',
                position: 'CEO, TechStart BD',
                content: 'NoorVia BD helped us connect with international investors and expand our business globally. Their professional network is invaluable.',
                image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150'
              },
              {
                name: 'Michael Chen',
                position: 'Founder, Global Imports',
                content: 'The sourcing and indenting services provided by NoorVia BD streamlined our supply chain and reduced costs significantly.',
                image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150'
              },
              {
                name: 'Fatima Rahman',
                position: 'Director, Export Solutions',
                content: 'Their legal documentation support made our business registration process smooth and hassle-free. Highly recommended!',
                image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">
              Specialized solutions across diverse industry sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Pharmaceuticals', icon: '💊' },
              { name: 'Manufacturing', icon: '🏭' },
              { name: 'Technology', icon: '💻' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Agriculture', icon: '🌾' },
              { name: 'Textiles', icon: '🧵' },
              { name: 'Food & Beverage', icon: '🍽️' },
              { name: 'Automotive', icon: '🚗' },
              { name: 'Construction', icon: '🏗️' },
              { name: 'Energy', icon: '⚡' },
              { name: 'Finance', icon: '💰' },
              { name: 'Logistics', icon: '🚚' }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{industry.icon}</div>
                <p className="text-sm font-medium text-gray-900">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who trust NoorVia BD for their business growth and networking needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              to="/company-profile"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;