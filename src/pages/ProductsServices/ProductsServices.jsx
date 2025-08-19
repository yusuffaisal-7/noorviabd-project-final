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
      details: 'We offer robust indenting services, facilitating seamless communication and transaction between buyers and manufacturers. Our expertise ensures the best sourcing practices with full compliance.'
    },
    {
      title: 'Sourcing',
      description: 'Global sourcing solutions to find the best suppliers and materials.',
      icon: Globe,
      color: 'teal',
      details: 'Our sourcing services span multiple industries, ensuring quality materials, cost-efficiency, and strategic supplier alignment with your business goals.'
    },
    {
      title: 'Outsourcing & Subcontracting',
      description: 'Strategic outsourcing solutions to optimize operations.',
      icon: Handshake,
      color: 'green',
      details: 'Let us manage your operational tasks by outsourcing to our network of trusted subcontractors, helping you focus on your core business.'
    },
    {
      title: 'Business Consultation & Network Support',
      description: 'Expert consulting and strategic network support.',
      icon: Users,
      color: 'purple',
      details: 'We provide consultation backed by real-time market data and network resources to improve efficiency, structure, and expansion capability.'
    },
    {
      title: 'Legal Documentation Support',
      description: 'Full support for legal and regulatory documentation.',
      icon: FileText,
      color: 'orange',
      details: 'Ensure legal safety with our support in preparing and filing essential documents, contracts, and certifications.'
    },
    {
      title: 'Strategic Business Consulting & Partnership',
      description: 'Planning and partnership for scaling your business.',
      icon: Wrench,
      color: 'red',
      details: 'We connect you with potential partners and advise on go-to-market strategies, diversification, and global scalability.'
    }
  ];

  const products = [
    {
      title: 'API (Active Pharmaceutical Ingredients)',
      description: 'High-quality ingredients from certified manufacturers.',
      icon: Beaker,
      color: 'blue',
      details: 'Our APIs are sourced globally under strict regulatory compliance, ensuring purity and traceability for pharma applications.'
    },
    {
      title: 'Excipients',
      description: 'Pharmaceutical excipients for formulation.',
      icon: Cpu,
      color: 'teal',
      details: 'We supply excipients with verified quality standards, supporting R&D and large-scale pharma production.'
    },
    {
      title: 'Industrial Materials',
      description: 'Raw materials for industrial manufacturing.',
      icon: Cog,
      color: 'green',
      details: 'Our industrial materials range from metals to polymers, aiding machinery, construction, and automotive industries.'
    },
    {
      title: 'FMCG Materials',
      description: 'Ingredients for consumer goods manufacturing.',
      icon: ShoppingCart,
      color: 'orange',
      details: 'We deliver consistent FMCG supplies ensuring shelf-ready products and streamlined logistics support.'
    },
    {
      title: 'Machineries',
      description: 'Machinery and equipment sourcing.',
      icon: Wrench,
      color: 'purple',
      details: 'We provide end-to-end machinery sourcing for small to large-scale production environments, with installation and warranty support.'
    }
  ];

  const colorClasses = (color) => ({
    bg: `bg-${color}-100`,
    text: `text-${color}-700`,
    button: `text-${color}-600 hover:text-${color}-800`,
    solidButton: `bg-${color}-600 hover:bg-${color}-700`
  });

  return (
    <div>
      {/* Modal for Service */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-lg shadow-xl relative">
            <button onClick={() => setSelectedService(null)} className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
            <p className="text-gray-700">{selectedService.details}</p>
          </div>
        </div>
      )}

      {/* Modal for Product */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-lg shadow-xl relative">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
            <p className="text-gray-700">{selectedProduct.details}</p>
          </div>
        </div>
      )}

      {/* HEADER */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-700 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <img src="https://res.cloudinary.com/duh7c5x99/image/upload/v1754661040/white-Photoroom-2_we43d0.png" alt="NoorVia BD" className="h-20 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Products & Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Comprehensive business solutions and quality products to support your growth and success</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="text-lg text-gray-600">Professional services designed to streamline your business operations and accelerate growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const cls = colorClasses(service.color);
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-transform hover:-translate-y-1">
                  <div className={`inline-flex p-4 rounded-lg ${cls.bg} ${cls.text} mb-6`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button onClick={() => setSelectedService(service)} className={`${cls.button} mt-4 inline-flex items-center font-medium`}>
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
            <p className="text-lg text-gray-600">Quality products sourced globally to meet your business and manufacturing needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const cls = colorClasses(product.color);
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1">
                  <div className={`inline-flex p-4 rounded-lg ${cls.bg} ${cls.text} mb-6`}>
                    <product.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <button onClick={() => setSelectedProduct(product)} className={`${cls.button} font-medium`}>
                      View Details
                    </button>
                    {/* <button className={`${cls.solidButton} text-white px-4 py-2 rounded-lg font-medium`}>
                      Get Quote
                    </button> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsServices;
