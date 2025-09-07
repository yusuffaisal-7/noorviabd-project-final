// import React from 'react';
// import { Package, Wrench, Users, FileText, Handshake, Globe, Cpu, Beaker, Cog, ShoppingCart } from 'lucide-react';

// const ProductsServices = () => {
//   const services = [
//     {
//       title: 'Indenting',
//       description: 'Professional procurement and supply chain management services connecting you with reliable suppliers and manufacturers.',
//       icon: Package,
//       color: 'blue'
//     },
//     {
//       title: 'Sourcing',
//       description: 'Global sourcing solutions to find the best suppliers, materials, and products for your business needs.',
//       icon: Globe,
//       color: 'teal'
//     },
//     {
//       title: 'Outsourcing & Subcontracting',
//       description: 'Strategic outsourcing solutions to optimize your operations and reduce costs while maintaining quality.',
//       icon: Handshake,
//       color: 'green'
//     },
//     {
//       title: 'Business Consultation & Network Support',
//       description: 'Expert business consulting services with comprehensive network support for strategic growth.',
//       icon: Users,
//       color: 'purple'
//     },
//     {
//       title: 'Legal Documentation Support',
//       description: 'Complete legal documentation assistance for business registration, compliance, and regulatory requirements.',
//       icon: FileText,
//       color: 'orange'
//     },
//     {
//       title: 'Strategic Business Consulting & Partnership',
//       description: 'Strategic planning and partnership facilitation to accelerate your business growth and market expansion.',
//       icon: Wrench,
//       color: 'red'
//     }
//   ];

//   const products = [
//     {
//       title: 'API (Active Pharmaceutical Ingredients)',
//       description: 'High-quality pharmaceutical ingredients sourced from certified manufacturers worldwide.',
//       icon: Beaker,
//       color: 'blue'
//     },
//     {
//       title: 'Excipients',
//       description: 'Pharmaceutical excipients and inactive ingredients for drug formulation and manufacturing.',
//       icon: Cpu,
//       color: 'teal'
//     },
//     {
//       title: 'Industrial Materials',
//       description: 'Raw materials and components for industrial manufacturing and production processes.',
//       icon: Cog,
//       color: 'green'
//     },
//     {
//       title: 'FMCG Materials',
//       description: 'Fast-moving consumer goods materials and ingredients for manufacturing and packaging.',
//       icon: ShoppingCart,
//       color: 'orange'
//     },
//     {
//       title: 'Machineries',
//       description: 'Industrial machinery and equipment sourcing for manufacturing and production facilities.',
//       icon: Wrench,
//       color: 'purple'
//     }
//   ];

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
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Products & Services</h1>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             Comprehensive business solutions and quality products to support your growth and success
//           </p>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Professional services designed to streamline your business operations and accelerate growth
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
//               >
//                 <div className={`inline-flex p-4 rounded-lg bg-${service.color}-100 text-${service.color}-700 mb-6`}>
//                   <service.icon className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{service.description}</p>
//                 <div className="mt-6">
//                   <button className={`text-${service.color}-600 hover:text-${service.color}-800 font-medium transition-colors flex items-center group`}>
//                     Learn More
//                     <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Quality products sourced globally to meet your business and manufacturing needs
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((product, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 <div className={`inline-flex p-4 rounded-lg bg-${product.color}-100 text-${product.color}-700 mb-6`}>
//                   <product.icon className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">{product.title}</h3>
//                 <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
//                 <div className="flex items-center justify-between">
//                   <button className={`text-${product.color}-600 hover:text-${product.color}-800 font-medium transition-colors`}>
//                     View Details
//                   </button>
//                   <button className={`bg-${product.color}-600 hover:bg-${product.color}-700 text-white px-4 py-2 rounded-lg font-medium transition-colors`}>
//                     Get Quote
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose NoorVia BD?</h2>
//             <p className="text-lg text-gray-600">
//               Experience the difference with our comprehensive approach to business solutions
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: 'Global Network',
//                 description: 'Access to suppliers and partners worldwide',
//                 icon: Globe
//               },
//               {
//                 title: 'Quality Assurance',
//                 description: 'Rigorous quality control and verification processes',
//                 icon: Beaker
//               },
//               {
//                 title: 'Expert Support',
//                 description: '24/7 professional support and consultation',
//                 icon: Users
//               },
//               {
//                 title: 'Competitive Pricing',
//                 description: 'Best-in-market pricing with transparent costs',
//                 icon: Package
//               }
//             ].map((feature, index) => (
//               <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
//                 <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-700 mb-4">
//                   <feature.icon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-gray-600 text-sm">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-gradient-to-r from-blue-700 to-teal-700">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Ready to Get Started?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Contact us today to discuss your requirements and discover how we can support your business growth.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/contact"
//               className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Get Quote
//             </a>
//             <a
//               href="/contact"
//               className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
//             >
//               Schedule Consultation
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductsServices;



import React, { useState } from 'react';
import { Package, Wrench, Users, FileText, Handshake, Globe, Cpu, Beaker, Cog, ShoppingCart } from 'lucide-react';

const ProductsServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const services = [
    {
      title: 'Indenting',
      description: 'Professional procurement and supply chain management services.',
      icon: Package,
      color: 'blue',
      details: 'Our Indenting services provide a seamless bridge between suppliers and buyers. We manage the entire procurement cycle with efficiency and transparency.',
      categories: ['Procurement of industrial, pharmaceutical, and FMCG raw materials', 'Vendor evaluation and supplier relationship management', 'Supply chain optimization for cost savings', 'Assured quality with strict compliance to global standards']
    },
    {
      title: 'Sourcing',
      description: 'Global sourcing solutions to find the best suppliers and materials.',
      icon: Globe,
      color: 'teal',
      details: 'We help businesses identify, evaluate, and onboard the best global suppliers to strengthen competitiveness.',
      categories: ['Access to a wide international supplier network', 'Market research and price benchmarking', 'Supplier audits and risk assessments', 'Negotiation and contract management for long-term value']
    },
    {
      title: 'Outsourcing & Subcontracting',
      description: 'Strategic outsourcing solutions to optimize operations.',
      icon: Handshake,
      color: 'green',
      details: 'Our Outsourcing & Subcontracting services enable companies to streamline operations, reduce costs, and focus on their core strengths.',
      categories: ['Outsourcing of production, logistics, and packaging', 'Subcontracting specialized tasks to trusted partners', 'Flexible engagement models for short- and long-term projects', 'Proven track record in cost efficiency and timely delivery']
    },
    {
      title: 'Business Consultation & Network Support',
      description: 'Expert consulting and strategic network support.',
      icon: Users,
      color: 'purple',
      details: 'We provide business advisory and network-building services that connect organizations with the right partners.',
      categories: ['Business growth and expansion strategies', 'Access to professional networks, trade associations, and investors', 'Market entry consulting for new industries or regions', 'Tailored support for startups and established enterprises']
    },
    {
      title: 'Legal Documentation Support',
      description: 'Full support for legal and regulatory documentation.',
      icon: FileText,
      color: 'orange',
      details: 'Our team ensures complete compliance with legal and regulatory frameworks, supporting both local and international business activities.',
      categories: ['Drafting and reviewing contracts, MoUs, and agreements', 'Regulatory compliance documentation (import/export, trade licenses, certifications)', 'Intellectual property and trademark assistance', 'Legal risk assessments and advisory support']
    },
    {
      title: 'Strategic Business Consulting & Partnership',
      description: 'Planning and partnership for scaling your business.',
      icon: Wrench,
      color: 'red',
      details: 'We act as your strategic partner, guiding your business toward growth and sustainability.',
      categories: ['Business model optimization and market positioning', 'Long-term partnership opportunities for expansion', 'Investment and funding advisory', 'Tailored strategies for scaling operations in global markets']
    }
  ];

  const products = [
    {
      title: 'API (Active Pharmaceutical Ingredients)',
      description: 'High-quality ingredients from certified manufacturers.',
      icon: Beaker,
      color: 'blue',
      details: 'We provide a wide range of Active Pharmaceutical Ingredients (APIs) sourced from globally certified manufacturers. Each product complies with international standards such as USFDA, WHO-GMP, and ISO certifications to ensure quality, safety, and efficacy.',
      categories: ['Antibiotics', 'Cardiovascular', 'Anti-Diabetic', 'Analgesics', 'Antivirals'],
      applications: ['Drug formulation', 'Clinical trials', 'Pharmaceutical research'],
      value: ['Consistent quality', 'Competitive pricing', 'Reliable global supply chain']
    },
    {
      title: 'Excipients',
      description: 'Pharmaceutical excipients for formulation.',
      icon: Cpu,
      color: 'teal',
      details: 'Our portfolio of pharmaceutical excipients supports drug formulation across various dosage forms. We ensure pharma-grade quality for stable and effective product development.',
      types: ['Binders', 'Fillers', 'Lubricants', 'Coating Agents', 'Preservatives'],
      compliance: ['Meets pharmacopeia standards (USP, EP, JP)'],
      benefits: ['Enhances drug stability', 'Bioavailability', 'Patient compliance']
    },
    {
      title: 'Industrial Materials',
      description: 'Raw materials for industrial manufacturing.',
      icon: Cog,
      color: 'green',
      details: 'We deliver industrial-grade raw materials that power multiple manufacturing sectors. Our sourcing network ensures cost-effective and timely supply for diverse industries.',
      sectors: ['Construction', 'Textile', 'Chemicals', 'Plastics', 'Packaging', 'Automotive'],
      products: ['Resins', 'Polymers', 'Solvents', 'Additives', 'Specialty Chemicals'],
      promise: ['High durability', 'Compliance with international safety standards', 'Scalable supply']
    },
    {
      title: 'FMCG Materials',
      description: 'Ingredients for consumer goods manufacturing.',
      icon: ShoppingCart,
      color: 'orange',
      details: 'We source and supply ingredients and raw materials for FMCG companies, enabling brands to create safe, high-quality, and consumer-trusted products.',
      categories: ['Food & Beverages', 'Cosmetics', 'Household Products', 'Personal Care'],
      offerings: ['Flavors', 'Fragrances', 'Preservatives', 'Emulsifiers', 'Sweeteners'],
      benefits: ['Global sourcing', 'Quality consistency', 'Cost competitiveness']
    },
    {
      title: 'Machineries',
      description: 'Machinery and equipment sourcing.',
      icon: Wrench,
      color: 'purple',
      details: 'We provide industrial and pharmaceutical machinery solutions, from small-scale equipment to large-scale automated systems.',
      industries: ['Pharmaceuticals', 'FMCG', 'Food Processing', 'Packaging', 'Chemicals'],
      types: ['Tablet press machines', 'Blending & Mixing units', 'Packaging machines', 'Processing equipment'],
      service: ['Installation', 'After-sales support', 'Spare parts sourcing']
    },
    {
      title: 'Health & Hygiene RM',
      description: 'Raw materials for health and hygiene products.',
      icon: Package,
      color: 'pink',
      details: 'We supply comprehensive raw materials for health and hygiene product manufacturing, ensuring quality and compliance with international standards for personal care and medical applications.',
      materials: ['Fluff Pulp', 'SAP (Super Absorbent Polymer)', 'Top Sheet Non-woven', 'ADL (Acquisition Distribution Layer)', 'Back Sheet PE Film', 'Airlaid Paper', 'Hydrophilic Non-woven', 'Hydrophobic Nonwoven', 'Leg Cuff', 'Elastic Hook', 'Construction Glue', 'Spandex', 'Spunlace'],
      applications: ['Diapers & Adult Incontinence', 'Feminine Hygiene Products', 'Medical Dressings', 'Personal Care Items', 'Sanitary Products'],
      benefits: ['High absorbency', 'Skin-friendly materials', 'Durable construction', 'Cost-effective solutions', 'Global supply chain']
    }
  ];

  const colorClasses = (color) => ({
    bg: `bg-${color}-100`,
    text: `text-${color}-700`,
    button: `text-${color}-600 hover:text-${color}-800`,
    solidButton: `bg-${color}-600 hover:bg-${color}-700`
  });

  return (
    <div className="overflow-x-hidden" style={{ WebkitOverflowScrolling: 'touch' }}>
      {/* Modal for Service */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative max-w-xs sm:max-w-sm md:max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Glassmorphism Modal */}
            <div className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-transparent rounded-3xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D0A96A]/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0A3D91]/30 rounded-full blur-2xl"></div>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)} 
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-[#111827] hover:bg-white/30 hover:scale-110 transition-all duration-300 z-10 touch-manipulation"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A3D91]/20 backdrop-blur-sm border border-[#0A3D91]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <selectedService.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#0A3D91]" />
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">{selectedService.title}</h2>
                </div>
                <p className="text-white leading-relaxed text-xs sm:text-sm lg:text-base mb-4 sm:mb-6">{selectedService.details}</p>
                
                {/* Service Categories */}
                {selectedService.categories && (
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-[#0A3D96] font-semibold text-xs sm:text-sm mb-2 sm:mb-3">Key Features:</h3>
                    <div className="space-y-1.5 sm:space-y-2">
                      {selectedService.categories.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#D0A96A] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span className="text-white text-xs sm:text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button className="bg-[#0A3D91] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-[#08306B] transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base touch-manipulation">
                    Get Started
                  </button>
                  <button className="bg-black text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-sm sm:text-base touch-manipulation">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Product */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative max-w-xs sm:max-w-sm md:max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Glassmorphism Modal */}
            <div className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-transparent rounded-3xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D0A96A]/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0A3D91]/30 rounded-full blur-2xl"></div>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)} 
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-[#111827] hover:bg-white/30 hover:scale-110 transition-all duration-300 z-10 touch-manipulation"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A3D91]/20 backdrop-blur-sm border border-[#0A3D91]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <selectedProduct.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#0A3D91]" />
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">{selectedProduct.title}</h2>
                </div>
                
                {/* Main Description */}
                <p className="text-white leading-relaxed text-xs sm:text-sm lg:text-base mb-4 sm:mb-6">{selectedProduct.details}</p>
                
                {/* Detailed Information Sections */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {/* Categories/Types/Sectors */}
                  {selectedProduct.categories && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Categories:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.categories.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProduct.types && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Types:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.types.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProduct.sectors && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Sectors Served:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.sectors.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProduct.industries && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Industries Served:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.industries.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Applications/Compliance/Benefits */}
                  {selectedProduct.applications && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Applications:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.applications.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProduct.compliance && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Compliance:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.compliance.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProduct.benefits && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Benefits:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.benefits.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Products/Offerings/Types */}
                  {selectedProduct.products && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Products:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.products.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProduct.offerings && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Offerings:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.offerings.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProduct.types && selectedProduct.title === 'Machineries' && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Equipment Types:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.types.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Value/Promise/Service */}
                  {selectedProduct.value && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Value Proposition:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.value.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProduct.promise && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Our Promise:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.promise.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProduct.service && (
                    <div>
                      <h3 className="text-[#0A3D91] font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Services:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {selectedProduct.service.map((item, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 sm:px-3 py-1 rounded-full border border-white/30">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a 
                    href={`https://www.google.com/search?q=${encodeURIComponent(selectedProduct.title + ' industrial materials suppliers manufacturers')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A3D91] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-[#08306B] transition-all duration-300 hover:scale-105 shadow-lg text-center text-sm sm:text-base touch-manipulation"
                  >
                    Learn More
                  </a>
                  <a 
                    href="https://wa.me/8801763714299?text=Hello%20NoorVia%20BD,%20I%20would%20like%20to%20know%20more%20about%20your%20products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-green-600 transition-all duration-300 hover:scale-105 text-sm sm:text-base touch-manipulation flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <section className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white py-8 sm:py-12 lg:py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex p-2 sm:p-3 lg:p-4 rounded-full bg-[#D0A96A]/20 text-[#D0A96A] mb-3 sm:mb-4 lg:mb-6">
            <Package className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">Products & Services</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D0A96A] max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">Comprehensive business solutions and quality products to support your growth and success</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Services</h2>
            <p className="text-base sm:text-lg text-[#6B7280] px-4">Professional services designed to streamline your business operations and accelerate growth</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const cls = colorClasses(service.color);
              return (
                <div 
                  key={index} 
                  className="group relative bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg border border-[#E5E7EB] hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 sm:hover:-translate-y-3 lg:hover:-translate-y-4 hover:scale-[1.02] sm:hover:scale-105 transform-gpu h-full touch-manipulation flex flex-col"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  }}
                  onMouseMove={(e) => {
                    // Only apply 3D effects on larger screens
                    if (window.innerWidth >= 1024) {
                      const card = e.currentTarget;
                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateX = (y - centerY) / 20;
                      const rotateY = (centerX - x) / 20;
                      
                      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.02)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
                  }}
                >
                  {/* 3D Background Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Icon with 3D Effect */}
                  <div className={`relative inline-flex p-2 sm:p-3 md:p-4 rounded-lg ${cls.bg} ${cls.text} mb-3 sm:mb-4 md:mb-6 group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 sm:group-hover:rotate-12 transition-all duration-300 ease-out transform-gpu`}
                       style={{ transform: 'translateZ(30px)' }}>
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                    {/* Icon Glow Effect - Only on larger screens */}
                    <div className={`absolute inset-0 rounded-lg ${cls.bg} blur-xl opacity-0 lg:group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </div>
                  
                  {/* Content with 3D Depth */}
                  <div className="relative z-10 flex flex-col h-full" style={{ transform: 'translateZ(20px)' }}>
                    <div className="flex-1 min-h-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#111827] mb-2 sm:mb-3 md:mb-4 group-hover:text-[#0A3D91] transition-colors duration-300 leading-tight">{service.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-[#6B7280] mb-4 sm:mb-5 md:mb-6 leading-relaxed">{service.description}</p>
                    </div>
                    
                    {/* Button with Hover Effects - Inside Card */}
                    <div className="mt-auto pt-3 sm:pt-4 pb-0 flex-shrink-0">
                      <button 
                        onClick={() => setSelectedService(service)} 
                        className={`${cls.button} w-full inline-flex items-center justify-center font-medium transition-all duration-300 text-xs sm:text-sm md:text-base relative overflow-hidden group-hover:scale-105 transform-gpu py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg shadow-lg touch-manipulation`}
                        style={{ transform: 'translateZ(25px)' }}
                      >
                        <span className="relative z-10">Learn More</span>
                        <svg className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        {/* Button Background Animation - Only on larger screens */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full lg:group-hover:translate-x-full transition-transform duration-700"></div>
                      </button>
                    </div>
                  </div>
                  
                  {/* 3D Shadow Effect */}
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-black/5 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#D0A96A] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 particle"></div>
                  <div className="absolute bottom-4 left-3 w-1.5 h-1.5 bg-[#0A3D91] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 delay-100 particle"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Products</h2>
            <p className="text-base sm:text-lg text-[#6B7280] px-4">Quality products sourced globally to meet your business and manufacturing needs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product, index) => {
              const cls = colorClasses(product.color);
              return (
                <div 
                  key={index} 
                  className="group relative bg-[#FAF3E0] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg border border-[#E5E7EB] hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 sm:hover:-translate-y-3 lg:hover:-translate-y-4 hover:scale-[1.02] sm:hover:scale-105 transform-gpu h-full touch-manipulation flex flex-col"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  }}
                  onMouseMove={(e) => {
                    // Only apply 3D effects on larger screens
                    if (window.innerWidth >= 1024) {
                      const card = e.currentTarget;
                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateX = (y - centerY) / 20;
                      const rotateY = (centerX - x) / 20;
                      
                      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.02)`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
                  }}
                >
                  {/* 3D Background Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FAF3E0] via-[#F5E6C3] to-[#E8D4A3] rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Icon with 3D Effect */}
                  <div className={`relative inline-flex p-2 sm:p-3 md:p-4 rounded-lg ${cls.bg} ${cls.text} mb-3 sm:mb-4 md:mb-6 group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 sm:group-hover:rotate-12 transition-all duration-300 ease-out transform-gpu`}
                       style={{ transform: 'translateZ(30px)' }}>
                    <product.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                    {/* Icon Glow Effect - Only on larger screens */}
                    <div className={`absolute inset-0 rounded-lg ${cls.bg} blur-xl opacity-0 lg:group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </div>
                  
                  {/* Content with 3D Depth */}
                  <div className="relative z-10 flex flex-col h-full" style={{ transform: 'translateZ(20px)' }}>
                    <div className="flex-1 min-h-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#111827] mb-2 sm:mb-3 md:mb-4 group-hover:text-[#0A3D91] transition-colors duration-300 leading-tight">{product.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-[#6B7280] mb-4 sm:mb-5 md:mb-6 leading-relaxed">{product.description}</p>
                    </div>
                    
                    {/* Button with Hover Effects - Inside Card */}
                    <div className="mt-auto pt-3 sm:pt-4 pb-0 flex-shrink-0">
                      <button 
                        onClick={() => setSelectedProduct(product)} 
                        className={`${cls.button} w-full font-medium transition-all duration-300 text-xs sm:text-sm md:text-base relative overflow-hidden group-hover:scale-105 transform-gpu py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg flex items-center justify-center shadow-lg touch-manipulation`}
                        style={{ transform: 'translateZ(25px)' }}
                      >
                        <span className="relative z-10">View Details</span>
                        {/* Button Background Animation - Only on larger screens */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full lg:group-hover:translate-x-full transition-transform duration-700"></div>
                      </button>
                    </div>
                  </div>
                  
                  {/* 3D Shadow Effect */}
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-black/5 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#D0A96A] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 particle"></div>
                  <div className="absolute bottom-4 left-3 w-1.5 h-1.5 bg-[#0A3D91] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 delay-100 particle"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 sm:py-12 lg:py-16 bg-gradient-to-r from-[#0A3D91] to-[#08306B]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#D0A96A] mb-6 sm:mb-8 px-2 sm:px-4 leading-relaxed">
            Contact us today to discuss your requirements and discover how we can support your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <a
              href="/contact"
              className="bg-[#FAF3E0] text-[#111827] border border-[#111827] px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] text-sm sm:text-base touch-manipulation"
            >
              Get Quote
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0A3D91] text-white px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base touch-manipulation"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsServices;
