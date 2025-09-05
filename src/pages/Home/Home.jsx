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
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Globe, TrendingUp, CheckCircle, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [countedNumbers, setCountedNumbers] = useState({});
  const sectionRefs = useRef({});
  

  
  const slides = [
    {
      title: "Professional Business Platform",
      subtitle: "Connecting entrepreneurs with opportunities worldwide",
      description: "NoorVia BD serves as a comprehensive business platform that bridges the gap between entrepreneurs, investors, and professional networks.",
      cta1: "Connect with us",
      cta2: "Explore Services",
      bgGradient: "from-[#0A3D91] via-[#08306B] to-[#0A3D91]",
      image: "/src/assets/4.png"
    },
    {
      title: "Global Business Solutions",
      subtitle: "Your gateway to international markets",
      description: "We provide end-to-end solutions for business development, from initial consultation to global expansion with comprehensive support.",
      cta1: "Start Your Journey",
      cta2: "View Services",
      bgGradient: "from-[#0A3D91] via-[#08306B] to-[#0A3D91]",
      image: "/src/assets/2.png"
    },
    {
      title: "Investor Connection Hub",
      subtitle: "Bridging investors and entrepreneurs",
      description: "Our platform facilitates meaningful relationships between capital providers and business innovators for mutual growth and success.",
      cta1: "Join Network",
      cta2: "Learn More",
      bgGradient: "from-[#0A3D91] via-[#08306B] to-[#0A3D91]",
      image: "/src/assets/1.png"
    },
    {
      title: "Performer's Club",
      subtitle: "Elite professional network for achievers",
      description: "An exclusive community for high-achieving individuals, successful entrepreneurs, and industry experts committed to excellence.",
      cta1: "Apply Now",
      cta2: "Discover Benefits",
      bgGradient: "from-[#0A3D91] via-[#08306B] to-[#0A3D91]",
      image: "/src/assets/3.png"
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

  // Helper function to set refs
  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  // Counting animation function
  const animateCount = (target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      return Math.floor(current);
    }, 16);
    
    return timer;
  };

  // Enhanced intersection observer for counting animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            
            // Trigger counting animation for statistics section
            if (entry.target.id === 'statistics' && !countedNumbers.started) {
              setCountedNumbers(prev => ({ ...prev, started: true }));
              
              // Animate each statistic number
              const stats = [
                { key: 'businesses', target: 500, suffix: '+' },
                { key: 'countries', target: 50, suffix: '+' },
                { key: 'network', target: 1000, suffix: '+' },
                { key: 'success', target: 95, suffix: '%' }
              ];
              
              stats.forEach((stat, index) => {
                setTimeout(() => {
                  setCountedNumbers(prev => ({ 
                    ...prev, 
                    [stat.key]: { current: 0, target: stat.target, suffix: stat.suffix }
                  }));
                  
                  const timer = setInterval(() => {
                    setCountedNumbers(prev => {
                      const current = prev[stat.key].current;
                      const target = prev[stat.key].target;
                      
                      if (current >= target) {
                        clearInterval(timer);
                        return prev;
                      }
                      
                      return {
                        ...prev,
                        [stat.key]: { ...prev[stat.key], current: current + Math.ceil(target / 50) }
                      };
                    });
                  }, 50);
                }, index * 200);
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [countedNumbers.started]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden transition-all duration-1000 h-[85vh] flex items-center justify-center py-12 sm:py-16">
        
        {/* Background Image in Rounded Box */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-full mx-4 sm:mx-6 lg:mx-8 xl:mx-10 h-full my-4 sm:my-6 lg:my-8 xl:my-10 bg-cover bg-center transition-all duration-1000 rounded-3xl sm:rounded-4xl shadow-2xl relative"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`
            }}
          >
            {/* Black Grey Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-800/50 to-black/60 rounded-3xl sm:rounded-4xl"></div>
          </div>
        </div>
        
        {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 transition-all duration-300 hidden sm:block"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-1.5 sm:p-2 transition-all duration-300 hidden sm:block"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>

        <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="flex justify-center mb-4 sm:mb-6 animate-fade-in-up">
              <img 
                src="https://res.cloudinary.com/duh7c5x99/image/upload/v1756129371/logofalnnoor_v7rdzp.png" 
                alt="NoorVia BD Logo" 
                className="h-24 w-auto sm:h-32 md:h-40 animate-float"
              />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 text-white font-montserrat-semibold transition-all duration-1000 animate-fade-in-up animate-delay-200 px-2 drop-shadow-lg">
              {slides[currentSlide].title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-[#D0A96A] font-montserrat-semibold transition-all duration-1000 animate-fade-in-up animate-delay-400 px-4 drop-shadow-lg">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 text-white max-w-3xl mx-auto leading-relaxed font-montserrat-semibold transition-all duration-1000 animate-fade-in-up animate-delay-600 px-4 drop-shadow-lg">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animate-delay-800 px-4">
              <Link
                to="/contact"
                className="bg-[#D0A96A] hover:bg-[#B8945A] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-montserrat-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-in text-sm sm:text-base"
              >
                {slides[currentSlide].cta1}
              </Link>
              <Link
                to="/products-services"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0A3D91] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-montserrat-semibold transition-all duration-300 flex items-center justify-center group animate-bounce-in animate-delay-200 text-sm sm:text-base"
              >
                {slides[currentSlide].cta2}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-[#D0A96A]' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section 
        id="brand-showcase"
        ref={setRef('brand-showcase')}
        className="py-12 sm:py-16 md:py-20 bg-[#FAF3E0] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight transition-all duration-1000 ${
                  isVisible['brand-showcase'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}>
                  Empowering Business Growth Through
                  <span className="text-[#0A3D91] block">Innovation & Excellence</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[#6B7280] leading-relaxed">
                  We believe in creating opportunities that transform businesses and drive sustainable success in the global marketplace.
                </p>
              </div>
              
              {/* Feature Points */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#0A3D91]/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#0A3D91]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111827]">Global Network Access</h3>
                    <p className="text-sm sm:text-base text-[#6B7280]">Connect with professionals and businesses worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#D0A96A]/10 rounded-full flex items-center justify-center">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-[#D0A96A]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111827]">Strategic Solutions</h3>
                    <p className="text-sm sm:text-base text-[#6B7280]">Tailored business strategies for your unique needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111827]">Proven Results</h3>
                    <p className="text-sm sm:text-base text-[#6B7280]">Track record of successful business transformations</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-3 sm:pt-4">
                <Link
                  to="/company-profile"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#0A3D91] hover:bg-[#08306B] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base"
                >
                  Discover Our Story
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Right Image Placeholder */}
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10">
                {/* Main Image Container */}
                <div className={`bg-gradient-to-br from-[#0A3D91]/20 to-[#D0A96A]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#E5E7EB]/50 transition-all duration-1000 ${
                  isVisible['brand-showcase'] ? 'animate-fade-in-up animate-delay-200' : 'opacity-0 translate-y-10'
                }`}>
                  <div className="aspect-square bg-white/50 rounded-lg sm:rounded-xl overflow-hidden">
                    <img 
                      src="/src/assets/second.png" 
                      alt="Business Growth and Innovation" 
                      className={`w-full h-full object-cover rounded-lg sm:rounded-xl transition-all duration-3000 ${
                        isVisible['brand-showcase'] ? 'scale-100' : 'scale-125'
                      }`}
                    />
                  </div>
                </div>
                
                {/* Floating Elements - Hidden on mobile, visible on tablet+ */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#D0A96A]/20 rounded-full flex items-center justify-center hidden sm:flex">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#D0A96A]" />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#0A3D91]/20 rounded-full flex items-center justify-center hidden sm:flex">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#0A3D91]" />
                </div>
              </div>
              
              {/* Background Decorative Elements - Hidden on mobile */}
              <div className="absolute inset-0 -z-10 hidden sm:block">
                <div className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-[#D0A96A]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-[#0A3D91]/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section 
        id="statistics" 
        ref={setRef('statistics')}
        className={`py-12 sm:py-16 bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white transition-all duration-1000 relative overflow-hidden ${
          isVisible['statistics'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-10 left-10 w-20 h-20 bg-[#D0A96A]/10 rounded-full blur-xl transition-all duration-3000 ${
            isVisible['statistics'] ? 'animate-float' : ''
          }`} style={{ animationDelay: '0s' }}></div>
          <div className={`absolute top-20 right-20 w-16 h-16 bg-[#D0A96A]/15 rounded-full blur-lg transition-all duration-3000 ${
            isVisible['statistics'] ? 'animate-float' : ''
          }`} style={{ animationDelay: '1s' }}></div>
          <div className={`absolute bottom-20 left-20 w-24 h-24 bg-[#D0A96A]/10 rounded-full blur-xl transition-all duration-3000 ${
            isVisible['statistics'] ? 'animate-float' : ''
          }`} style={{ animationDelay: '2s' }}></div>
          <div className={`absolute bottom-10 right-10 w-12 h-12 bg-[#D0A96A]/15 rounded-full blur-lg transition-all duration-3000 ${
            isVisible['statistics'] ? 'animate-float' : ''
          }`} style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 relative z-10">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 transition-all duration-1000 ${
              isVisible['statistics'] ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '200ms' }}>
              Our Impact in Numbers
            </h2>
            <p className={`text-base sm:text-lg md:text-xl text-[#D0A96A] px-4 transition-all duration-1000 ${
              isVisible['statistics'] ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ animationDelay: '400ms' }}>
              Trusted by businesses worldwide for professional growth and success
            </p>
            
            {/* Decorative Line */}
            <div className={`w-24 h-1 bg-gradient-to-r from-transparent via-[#D0A96A] to-transparent mx-auto mt-4 transition-all duration-1000 ${
              isVisible['statistics'] ? 'animate-scale-in opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`} style={{ animationDelay: '600ms' }}></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { 
                key: 'businesses',
                label: 'Businesses Supported', 
                icon: Building2, 
                delay: 0,
                target: 500,
                suffix: '+'
              },
              { 
                key: 'countries',
                label: 'Countries Reached', 
                icon: Globe, 
                delay: 200,
                target: 50,
                suffix: '+'
              },
              { 
                key: 'network',
                label: 'Professional Network', 
                icon: Users, 
                delay: 400,
                target: 1000,
                suffix: '+'
              },
              { 
                key: 'success',
                label: 'Success Rate', 
                icon: TrendingUp, 
                delay: 600,
                target: 95,
                suffix: '%'
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-1000 transform hover:scale-105 ${
                  isVisible['statistics'] ? 'animate-fade-in-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  animationDelay: `${stat.delay}ms`,
                  transitionDelay: `${stat.delay}ms`
                }}
              >
                <div className={`inline-flex p-3 sm:p-4 rounded-full bg-[#D0A96A]/20 mb-4 sm:mb-6 transition-all duration-700 hover:scale-110 hover:bg-[#D0A96A]/30 hover:animate-pulse-glow hover:shadow-lg hover:shadow-[#D0A96A]/30 ${
                  isVisible['statistics'] ? 'animate-float' : ''
                }`}>
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] transition-all duration-500 hover:rotate-12 hover:animate-rotate-in" />
                </div>
                <div className={`text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 transition-all duration-1000 ${
                  isVisible['statistics'] ? 'animate-scale-in' : 'scale-75 opacity-0'
                }`}>
                  {countedNumbers[stat.key] ? 
                    `${countedNumbers[stat.key].current}${stat.suffix}` : 
                    `0${stat.suffix}`
                  }
                </div>
                <div className={`text-sm sm:text-base text-[#D0A96A] px-2 transition-all duration-700 ${
                  isVisible['statistics'] ? 'animate-slide-in-bottom' : 'translate-y-4 opacity-0'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 sm:py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Explore Our Platform</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto px-4">
              Navigate through our comprehensive business solutions and professional network
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: 'Company Profile',
                description: 'Learn about our mission, vision, and business approach',
                icon: Building2,
                href: '/company-profile',
                color: 'royal-blue'
              },
              {
                title: 'Products & Services',
                description: 'Explore our comprehensive business solutions',
                icon: Target,
                href: '/products-services',
                color: 'gold-sand'
              },
              {
                title: 'Investor Connect',
                description: 'Bridge between investors and entrepreneurs',
                icon: TrendingUp,
                href: '/investor-connect',
                color: 'royal-blue'
              },
              {
                title: 'Performers\' Club',
                description: 'Join our professional network community',
                icon: Users,
                href: '/performers-club',
                color: 'gold-sand'
              }
            ].map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E5E7EB]"
              >
                <div className={`inline-flex p-2 sm:p-3 rounded-lg ${
                  item.color === 'royal-blue' 
                    ? 'bg-[#0A3D91]/10 text-[#0A3D91]' 
                    : 'bg-[#D0A96A]/10 text-[#D0A96A]'
                } mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#0A3D91] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Layout Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0A3D91]/10 text-[#0A3D91] rounded-full text-xs sm:text-sm font-medium">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0A3D91] rounded-full mr-1.5 sm:mr-2"></span>
                  Featured Section
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
                  Transforming Business
                  <span className="text-[#0A3D91] block">Through Innovation</span>
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-[#6B7280] leading-relaxed">
                  We provide cutting-edge solutions that empower businesses to thrive in the digital age, connecting global opportunities with local expertise.
                </p>
              </div>
              
              {/* Feature List */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#D0A96A]/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#D0A96A]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111827] mb-1">Strategic Planning</h3>
                    <p className="text-sm sm:text-base text-[#6B7280]">Comprehensive business strategy development and implementation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#0A3D91]/20 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#0A3D91]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111827] mb-1">Global Networking</h3>
                    <p className="text-sm sm:text-base text-[#6B7280]">Access to international business networks and partnerships</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#2E7D32]/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-[#2E7D32]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111827] mb-1">Growth Acceleration</h3>
                    <p className="text-sm sm:text-base text-[#6B7280]">Proven methodologies to scale your business rapidly</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                <Link
                  to="/products-services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#0A3D91] hover:bg-[#08306B] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#0A3D91] text-[#0A3D91] hover:bg-[#0A3D91] hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Right Side - Visual Elements */}
            <div className="relative order-1 lg:order-2">
              {/* Main Content Area */}
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#FAF3E0] to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-[#E5E7EB] shadow-xl sm:shadow-2xl">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    {/* Top Left */}
                    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-[#E5E7EB]">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#0A3D91]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                        <Building2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#0A3D91]" />
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-[#111827] mb-1 sm:mb-2">Business Solutions</h4>
                      <p className="text-xs sm:text-sm text-[#6B7280]">Comprehensive services for growth</p>
                    </div>
                    
                    {/* Top Right */}
                    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-[#E5E7EB]">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#D0A96A]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                        <Globe className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#D0A96A]" />
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-[#111827] mb-1 sm:mb-2">Global Reach</h4>
                      <p className="text-xs sm:text-sm text-[#6B7280]">Worldwide business connections</p>
                    </div>
                    
                    {/* Bottom Left */}
                    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-[#E5E7EB]">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#2E7D32]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#2E7D32]" />
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-[#111827] mb-1 sm:mb-2">Network Access</h4>
                      <p className="text-xs sm:text-sm text-[#6B7280]">Professional community</p>
                    </div>
                    
                    {/* Bottom Right */}
                    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-[#E5E7EB]">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#0284C7]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                        <Target className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#0284C7]" />
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-[#111827] mb-1 sm:mb-2">Strategic Goals</h4>
                      <p className="text-xs sm:text-sm text-[#6B7280]">Focused business outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements - Hidden on mobile, visible on tablet+ */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#D0A96A]/20 rounded-full flex items-center justify-center hidden sm:flex">
                <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#D0A96A]" />
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#0A3D91]/20 rounded-full flex items-center justify-center hidden sm:flex">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#0A3D91]" />
              </div>
              
              {/* Background Decorative Elements - Hidden on mobile */}
              <div className="absolute inset-0 -z-10 hidden sm:block">
                <div className="absolute top-1/3 right-1/3 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#D0A96A]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#0A3D91]/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Core Services</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
              Comprehensive business solutions designed to accelerate your growth and success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <div key={index} className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-white">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="inline-flex p-1.5 sm:p-2 rounded-lg bg-[#0A3D91]/10 text-[#0A3D91] mr-2 sm:mr-3">
                      <service.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#111827]">{service.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Summary */}
      <section className="py-12 sm:py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 sm:gap-12 lg:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4 sm:mb-6">
                What NoorVia BD Does
              </h2>
              <p className="text-base sm:text-lg text-[#111827] mb-4 sm:mb-6 leading-relaxed">
                NoorVia BD is a comprehensive business platform that serves as a bridge between entrepreneurs, investors, and professional networks. We provide end-to-end solutions for business development, from initial consultation to global expansion.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  'Business Consultation & Network Support',
                  'Sourcing and Indenting Solutions',
                  'Legal Documentation Support',
                  'Global Import and Export Solutions',
                  'Strategic Business Consulting & Partnership'
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2 sm:space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#2E7D32] flex-shrink-0" />
                    <span className="text-sm sm:text-base text-[#111827]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 sm:mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#0A3D91]/10 p-4 sm:p-6 rounded-lg text-center">
                  <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-[#0A3D91] mx-auto mb-2" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A3D91]">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-[#0A3D91] mt-1">International partnerships</p>
                </div>
                <div className="bg-[#D0A96A]/10 p-4 sm:p-6 rounded-lg text-center">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] mx-auto mb-2" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#D0A96A]">Network</h3>
                  <p className="text-xs sm:text-sm text-[#D0A96A] mt-1">Professional connections</p>
                </div>
                <div className="bg-[#2E7D32]/10 p-4 sm:p-6 rounded-lg text-center">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-[#2E7D32] mx-auto mb-2" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#2E7D32]">Precision</h3>
                  <p className="text-xs sm:text-sm text-[#2E7D32] mt-1">Targeted solutions</p>
                </div>
                <div className="bg-[#D0A96A]/10 p-4 sm:p-6 rounded-lg text-center">
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] mx-auto mb-2" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#D0A96A]">Growth</h3>
                  <p className="text-xs sm:text-sm text-[#D0A96A] mt-1">Business expansion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-base sm:text-lg text-[#6B7280] px-4">
              Trusted by businesses and professionals worldwide
            </p>
          </div>
          
          {/* Auto-rolling Testimonials Container */}
          <div className="relative">
            <div className="flex gap-6 sm:gap-8 overflow-hidden">
              {/* First set of testimonials */}
              <div className="flex gap-6 sm:gap-8 animate-scroll-left">
                {[
                  {
                    name: 'Sarah Ahmed',
                    position: 'CEO, TechStart BD',
                    content: 'NoorVia BD helped us connect with international investors and expand our business globally. Their professional network is invaluable.',
                    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  },
                  {
                    name: 'Michael Chen',
                    position: 'Founder, Global Imports',
                    content: 'The sourcing and indenting services provided by NoorVia BD streamlined our supply chain and reduced costs significantly.',
                    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  },
                  {
                    name: 'Fatima Rahman',
                    position: 'Director, Export Solutions',
                    content: 'Their legal documentation support made our business registration process smooth and hassle-free. Highly recommended!',
                    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  },
                  {
                    name: 'Elijah Ramirez',
                    position: 'Director of Operations at EcoHome Solutions',
                    content: 'NoorVia BD\'s business solutions aren\'t just another service; it\'s like having a highly skilled partner that\'s learning and improving every day. Our business has grown significantly.',
                    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  },
                  {
                    name: 'Aisha Patel',
                    position: 'Marketing Director, Digital Dynamics',
                    content: 'The strategic consulting and network development services have transformed our approach to international markets. Exceptional results!',
                    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  },
                  {
                    name: 'David Thompson',
                    position: 'CEO, Global Trade Partners',
                    content: 'NoorVia BD\'s international expansion services are unmatched. They helped us establish operations in 15 new countries within 18 months. Their expertise is invaluable.',
                    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  },
                  {
                    name: 'Maria Rodriguez',
                    position: 'Operations Manager, Pharma Solutions',
                    content: 'The pharmaceutical sourcing and compliance support has been outstanding. NoorVia BD understands the industry complexities and delivers results that exceed expectations.',
                    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184365.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 min-w-[320px] sm:min-w-[380px] relative group">
                    {/* Quote Marks */}
                    <div className="absolute top-4 left-6 text-6xl text-gray-200 font-serif leading-none">"</div>
                    
                    {/* Star Rating */}
                    <div className="flex justify-end mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <svg key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Testimonial Content */}
                    <div className="mb-6">
                      <p className="text-sm sm:text-base text-[#111827] leading-relaxed pl-8">
                        {testimonial.content}
                      </p>
                    </div>
                    
                    {/* Author Info */}
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4 border-2 border-[#D0A96A]/20"
                      />
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-[#111827]">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-[#6B7280]">{testimonial.position}</p>
                      </div>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D91]/5 to-[#D0A96A]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-6 sm:gap-8 animate-scroll-left" style={{ animationDelay: '-20s' }}>
                {[
                  {
                    name: 'Sarah Ahmed',
                    position: 'CEO, TechStart BD',
                    content: 'NoorVia BD helped us connect with international investors and expand our business globally. Their professional network is invaluable.',
                    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  },
                  {
                    name: 'Michael Chen',
                    position: 'Founder, Global Imports',
                    content: 'The sourcing and indenting services provided by NoorVia BD streamlined our supply chain and reduced costs significantly.',
                    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  },
                  {
                    name: 'Fatima Rahman',
                    position: 'Director, Export Solutions',
                    content: 'Their legal documentation support made our business registration process smooth and hassle-free. Highly recommended!',
                    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  },
                  {
                    name: 'Elijah Ramirez',
                    position: 'Director of Operations at EcoHome Solutions',
                    content: 'NoorVia BD\'s business solutions aren\'t just another service; it\'s like having a highly skilled partner that\'s learning and improving every day. Our business has grown significantly.',
                    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  },
                  {
                    name: 'Aisha Patel',
                    position: 'Marketing Director, Digital Dynamics',
                    content: 'The strategic consulting and network development services have transformed our approach to international markets. Exceptional results!',
                    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  },
                  {
                    name: 'David Thompson',
                    position: 'CEO, Global Trade Partners',
                    content: 'NoorVia BD\'s international expansion services are unmatched. They helped us establish operations in 15 new countries within 18 months. Their expertise is invaluable.',
                    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  },
                  {
                    name: 'Maria Rodriguez',
                    position: 'Operations Manager, Pharma Solutions',
                    content: 'The pharmaceutical sourcing and compliance support has been outstanding. NoorVia BD understands the industry complexities and delivers results that exceed expectations.',
                    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184365.jpeg?auto=compress&cs=tinysrgb&w=150',
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <div key={`duplicate-${index}`} className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] shadow-lg hover:shadow-xl transition-all duration-300 min-w-[320px] sm:min-w-[380px] relative group">
                    {/* Quote Marks */}
                    <div className="absolute top-4 left-6 text-6xl text-gray-200 font-serif leading-none">"</div>
                    
                    {/* Star Rating */}
                    <div className="flex justify-end mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <svg key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Testimonial Content */}
                    <div className="mb-6">
                      <p className="text-sm sm:text-base text-[#111827] leading-relaxed pl-8">
                        {testimonial.content}
                      </p>
                    </div>
                    
                    {/* Author Info */}
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4 border-2 border-[#D0A96A]/20"
                      />
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-[#111827]">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-[#6B7280]">{testimonial.position}</p>
                      </div>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D91]/5 to-[#D0A96A]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient Overlays for Smooth Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAF3E0] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAF3E0] to-transparent z-10"></div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-12 sm:py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Industries We Serve</h2>
            <p className="text-base sm:text-lg text-[#6B7280] px-4">
              Specialized solutions across diverse industry sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
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
              <div key={index} className="bg-white p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow border border-[#E5E7EB]">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{industry.icon}</div>
                <p className="text-xs sm:text-sm font-medium text-[#111827]">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#0A3D91] to-[#08306B]">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#D0A96A] mb-6 sm:mb-8 px-4">
            Join thousands of professionals who trust NoorVia BD for their business growth and networking needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#FAF3E0] text-[#111827] border border-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] text-sm sm:text-base"
            >
              Get Started Today
            </Link>
            <Link
              to="/company-profile"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0A3D91] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group text-sm sm:text-base"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;