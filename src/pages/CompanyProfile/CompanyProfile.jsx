// import React from 'react';
// import { Target, Eye, Building2, Users, Globe, Award, TrendingUp, Shield } from 'lucide-react';

// const CompanyProfile = () => {
//   return (
//     <div className="">
//       {/* Header Section */}
//       <section className="bg-gradient-to-r from-blue-700 to-teal-700 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <img 
//             src="https://res.cloudinary.com/duh7c5x99/image/upload/v1754661040/white-Photoroom-2_we43d0.png" 
//             alt="NoorVia BD Logo" 
//             className="h-20 w-auto mx-auto mb-6"
//           />
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Company Profile</h1>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             Discover the story, mission, and vision that drives NoorVia BD's commitment to professional excellence
//           </p>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
//               <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                 NoorVia BD was established with a vision to create a comprehensive business platform that bridges the gap between entrepreneurs, investors, and professional networks. Our journey began with the understanding that successful businesses need more than just capital – they need guidance, connections, and strategic support.
//               </p>
//               <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                 Since our inception, we have been committed to providing professional business solutions that enable entrepreneurs to navigate the complex landscape of modern business. Our platform serves as a catalyst for growth, innovation, and sustainable business development.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="text-center p-4 bg-blue-50 rounded-lg">
//                   <div className="text-2xl font-bold text-blue-700">500+</div>
//                   <div className="text-sm text-blue-600">Businesses Supported</div>
//                 </div>
//                 <div className="text-center p-4 bg-teal-50 rounded-lg">
//                   <div className="text-2xl font-bold text-teal-700">50+</div>
//                   <div className="text-sm text-teal-600">Countries Reached</div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-10 lg:mt-0">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl">
//                   <Award className="h-8 w-8 text-blue-700 mb-3" />
//                   <h3 className="font-semibold text-blue-900 mb-2">Excellence</h3>
//                   <p className="text-sm text-blue-700">Committed to delivering exceptional business solutions</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-6 rounded-xl">
//                   <Shield className="h-8 w-8 text-teal-700 mb-3" />
//                   <h3 className="font-semibold text-teal-900 mb-2">Trust</h3>
//                   <p className="text-sm text-teal-700">Building lasting relationships through integrity</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl">
//                   <Users className="h-8 w-8 text-green-700 mb-3" />
//                   <h3 className="font-semibold text-green-900 mb-2">Collaboration</h3>
//                   <p className="text-sm text-green-700">Fostering partnerships for mutual growth</p>
//                 </div>
//                 <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-xl">
//                   <TrendingUp className="h-8 w-8 text-orange-700 mb-3" />
//                   <h3 className="font-semibold text-orange-900 mb-2">Innovation</h3>
//                   <p className="text-sm text-orange-700">Embracing new ideas and technologies</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <Target className="h-12 w-12 text-blue-700 mx-auto mb-4" />
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Empowering businesses through comprehensive solutions and strategic partnerships
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Business Consultation & Network Support',
//                 description: 'Providing expert guidance and building strong professional networks for sustainable growth',
//                 icon: Users,
//                 color: 'blue'
//               },
//               {
//                 title: 'Indenting',
//                 description: 'Facilitating seamless procurement processes and supplier connections for businesses',
//                 icon: Building2,
//                 color: 'teal'
//               },
//               {
//                 title: 'Sourcing',
//                 description: 'Connecting businesses with quality suppliers and resources globally',
//                 icon: Globe,
//                 color: 'green'
//               }
//             ].map((item, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//                 <div className={`inline-flex p-3 rounded-lg bg-${item.color}-100 text-${item.color}-700 mb-4`}>
//                   <item.icon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <Eye className="h-12 w-12 text-teal-700 mx-auto mb-4" />
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Building a future where every entrepreneur has access to the tools, networks, and support needed to succeed
//             </p>
//           </div>
//           <div className="space-y-8">
//             {[
//               {
//                 title: 'Provide Legal Platform for New Entrepreneurs',
//                 description: 'Creating secure, compliant pathways for new businesses to establish and operate within legal frameworks',
//                 icon: Shield
//               },
//               {
//                 title: 'Develop Business Network',
//                 description: 'Building comprehensive networks that connect businesses, investors, suppliers, and service providers',
//                 icon: Users
//               },
//               {
//                 title: 'Global Import and Export Solution',
//                 description: 'Facilitating international trade through comprehensive import and export support services',
//                 icon: Globe
//               },
//               {
//                 title: 'Connect Local Business with International Platform',
//                 description: 'Bridging local enterprises with global opportunities and international market access',
//                 icon: TrendingUp
//               },
//               {
//                 title: 'Legal Documentation Support',
//                 description: 'Providing comprehensive legal documentation assistance for business operations and compliance',
//                 icon: Building2
//               },
//               {
//                 title: 'Strategic Business Consulting & Partnership',
//                 description: 'Offering strategic guidance and facilitating partnerships that drive long-term business success',
//                 icon: Target
//               }
//             ].map((item, index) => (
//               <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
//                 <div className="flex-shrink-0">
//                   <div className="inline-flex p-3 rounded-lg bg-teal-100 text-teal-700">
//                     <item.icon className="h-6 w-6" />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
//                   <p className="text-gray-700 leading-relaxed">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leadership Team Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Meet the experienced professionals driving NoorVia BD's vision and growth
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'Mohammad Rahman',
//                 position: 'Managing Director & CEO',
//                 image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
//                 bio: 'With over 15 years of experience in international business development, Mohammad leads NoorVia BD with a vision to connect global markets. He holds an MBA in International Business and has successfully facilitated over $50M in business transactions.',
//                 expertise: ['International Trade', 'Strategic Planning', 'Business Development', 'Market Expansion']
//               },
//               {
//                 name: 'Sarah Ahmed',
//                 position: 'Director of Operations',
//                 image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
//                 bio: 'Sarah brings 12 years of operational excellence to NoorVia BD. She specializes in streamlining business processes and ensuring quality service delivery. Her background in supply chain management has been instrumental in our sourcing operations.',
//                 expertise: ['Operations Management', 'Supply Chain', 'Quality Assurance', 'Process Optimization']
//               },
//               {
//                 name: 'Dr. Aminul Islam',
//                 position: 'Chief Technology Officer',
//                 image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
//                 bio: 'Dr. Islam leads our technology initiatives with a PhD in Computer Science and 10 years in fintech. He oversees our digital platform development and ensures we stay at the forefront of business technology solutions.',
//                 expertise: ['Technology Strategy', 'Digital Transformation', 'Platform Development', 'Data Analytics']
//               },
//               {
//                 name: 'Fatima Khan',
//                 position: 'Head of Legal Affairs',
//                 image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
//                 bio: 'Fatima is a seasoned legal professional with 14 years of experience in corporate law and international trade regulations. She ensures all our business operations comply with local and international legal requirements.',
//                 expertise: ['Corporate Law', 'International Trade Law', 'Compliance', 'Contract Negotiation']
//               },
//               {
//                 name: 'Michael Chen',
//                 position: 'Director of Business Development',
//                 image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
//                 bio: 'Michael specializes in identifying new business opportunities and building strategic partnerships. With 11 years in business development across Asia-Pacific markets, he has expanded our network to over 50 countries.',
//                 expertise: ['Partnership Development', 'Market Research', 'Client Relations', 'Strategic Alliances']
//               },
//               {
//                 name: 'Rashida Begum',
//                 position: 'Head of Finance',
//                 image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
//                 bio: 'Rashida manages our financial operations with expertise in international finance and investment analysis. She holds a CPA certification and has 13 years of experience in corporate finance and investment management.',
//                 expertise: ['Financial Management', 'Investment Analysis', 'Risk Assessment', 'Financial Planning']
//               }
//             ].map((member, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                 <div className="aspect-w-3 aspect-h-4">
//                   <img 
//                     src={member.image} 
//                     alt={member.name}
//                     className="w-full h-64 object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
//                   <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
//                   <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {member.expertise.map((skill, skillIndex) => (
//                         <span 
//                           key={skillIndex}
//                           className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Company Values Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
//             <p className="text-lg text-gray-600">
//               The principles that guide our decisions and shape our culture
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: 'Integrity',
//                 description: 'We conduct business with honesty, transparency, and ethical standards',
//                 icon: Shield,
//                 color: 'blue'
//               },
//               {
//                 title: 'Excellence',
//                 description: 'We strive for the highest quality in everything we do',
//                 icon: Award,
//                 color: 'teal'
//               },
//               {
//                 title: 'Innovation',
//                 description: 'We embrace new ideas and technologies to better serve our clients',
//                 icon: TrendingUp,
//                 color: 'green'
//               },
//               {
//                 title: 'Partnership',
//                 description: 'We build lasting relationships based on mutual trust and respect',
//                 icon: Users,
//                 color: 'orange'
//               }
//             ].map((value, index) => (
//               <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//                 <div className={`inline-flex p-3 rounded-lg bg-${value.color}-100 text-${value.color}-700 mb-4`}>
//                   <value.icon className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-gradient-to-r from-blue-700 to-teal-700">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Join Our Mission
//           </h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Be part of a platform that's transforming how businesses connect, grow, and succeed globally.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/contact"
//               className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Partner With Us
//             </a>
//             <a
//               href="/products-services"
//               className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
//             >
//               Explore Our Services
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CompanyProfile;


import React, { useEffect, useState } from 'react';
import { Target, Eye, Building2, Users, Globe, Award, TrendingUp, Shield, Loader2 } from 'lucide-react';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const colorClasses = {
  blue:   'bg-blue-100 text-blue-700',
  teal:   'bg-teal-100 text-teal-700',
  green:  'bg-green-100 text-green-700',
  orange: 'bg-orange-100 text-orange-700',
};

const CompanyProfile = () => {
  const axiosPublic = useAxiosPublic();
  const [members, setMembers] = useState([]);
  const [teamLoading, setTeamLoading] = useState(true);
  const [teamError, setTeamError] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await axiosPublic.get('/team'); // expects array from backend
        if (mounted) setMembers(Array.isArray(data) ? data : []);
      } catch (err) {
        if (mounted) setTeamError(err?.response?.data?.message || 'Failed to load team');
      } finally {
        if (mounted) setTeamLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [axiosPublic]);

  return (
    <div className="">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="https://res.cloudinary.com/duh7c5x99/image/upload/v1754661040/white-Photoroom-2_we43d0.png"
            alt="NoorVia BD Logo"
            className="h-20 w-auto mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Company Profile</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the story, mission, and vision that drives NoorVia BD&apos;s commitment to professional excellence
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                NoorVia BD was established with a vision to create a comprehensive business platform that bridges the gap between entrepreneurs, investors, and professional networks. Our journey began with the understanding that successful businesses need more than just capital – they need guidance, connections, and strategic support.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Since our inception, we have been committed to providing professional business solutions that enable entrepreneurs to navigate the complex landscape of modern business. Our platform serves as a catalyst for growth, innovation, and sustainable business development.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">500+</div>
                  <div className="text-sm text-blue-600">Businesses Supported</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-700">50+</div>
                  <div className="text-sm text-teal-600">Countries Reached</div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl">
                  <Award className="h-8 w-8 text-blue-700 mb-3" />
                  <h3 className="font-semibold text-blue-900 mb-2">Excellence</h3>
                  <p className="text-sm text-blue-700">Committed to delivering exceptional business solutions</p>
                </div>
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-6 rounded-xl">
                  <Shield className="h-8 w-8 text-teal-700 mb-3" />
                  <h3 className="font-semibold text-teal-900 mb-2">Trust</h3>
                  <p className="text-sm text-teal-700">Building lasting relationships through integrity</p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl">
                  <Users className="h-8 w-8 text-green-700 mb-3" />
                  <h3 className="font-semibold text-green-900 mb-2">Collaboration</h3>
                  <p className="text-sm text-green-700">Fostering partnerships for mutual growth</p>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-orange-700 mb-3" />
                  <h3 className="font-semibold text-orange-900 mb-2">Innovation</h3>
                  <p className="text-sm text-orange-700">Embracing new ideas and technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="h-12 w-12 text-blue-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empowering businesses through comprehensive solutions and strategic partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Business Consultation & Network Support', description: 'Providing expert guidance and building strong professional networks for sustainable growth', icon: Users, color: 'blue' },
              { title: 'Indenting', description: 'Facilitating seamless procurement processes and supplier connections for businesses', icon: Building2, color: 'teal' },
              { title: 'Sourcing', description: 'Connecting businesses with quality suppliers and resources globally', icon: Globe, color: 'green' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`inline-flex p-3 rounded-lg ${colorClasses[item.color]} mb-4`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Eye className="h-12 w-12 text-teal-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building a future where every entrepreneur has access to the tools, networks, and support needed to succeed
            </p>
          </div>
          <div className="space-y-8">
            {[
              { title: 'Provide Legal Platform for New Entrepreneurs', description: 'Creating secure, compliant pathways for new businesses to establish and operate within legal frameworks', icon: Shield },
              { title: 'Develop Business Network', description: 'Building comprehensive networks that connect businesses, investors, suppliers, and service providers', icon: Users },
              { title: 'Global Import and Export Solution', description: 'Facilitating international trade through comprehensive import and export support services', icon: Globe },
              { title: 'Connect Local Business with International Platform', description: 'Bridging local enterprises with global opportunities and international market access', icon: TrendingUp },
              { title: 'Legal Documentation Support', description: 'Providing comprehensive legal documentation assistance for business operations and compliance', icon: Building2 },
              { title: 'Strategic Business Consulting & Partnership', description: 'Offering strategic guidance and facilitating partnerships that drive long-term business success', icon: Target },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="inline-flex p-3 rounded-lg bg-teal-100 text-teal-700">
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section (Dynamic) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals driving NoorVia BD&apos;s vision and growth
            </p>
          </div>

          {teamLoading ? (
            <div className="text-center py-12">
              <Loader2 className="h-8 w-8 mx-auto animate-spin text-blue-600" />
              <p className="text-gray-600 mt-3">Loading team…</p>
            </div>
          ) : teamError ? (
            <div className="text-center py-12">
              <p className="text-red-600 font-medium">{teamError}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member) => (
                <div key={member._id || member.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                    {member.bio && <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>}
                    {Array.isArray(member.expertise) && member.expertise.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, i) => (
                            <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide our decisions and shape our culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical standards', icon: Shield, color: 'blue' },
              { title: 'Excellence', description: 'We strive for the highest quality in everything we do', icon: Award, color: 'teal' },
              { title: 'Innovation', description: 'We embrace new ideas and technologies to better serve our clients', icon: TrendingUp, color: 'green' },
              { title: 'Partnership', description: 'We build lasting relationships based on mutual trust and respect', icon: Users, color: 'orange' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`inline-flex p-3 rounded-lg ${colorClasses[value.color]} mb-4`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of a platform that&apos;s transforming how businesses connect, grow, and succeed globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Partner With Us
            </a>
            <a
              href="/products-services"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfile;
