

// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, User, MessageSquare, Building2, Clock, Handshake } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setFormData({ name: '', email: '', subject: '', message: '' });
//     alert('Thank you for your message! We will get back to you soon.');
//   };

//   const quickCards = [
//     {
//       title: 'General Inquiries',
//       description: 'Questions about our services, pricing, or how we can help your business.',
//       contact: 'info@noorvia.bd',
//       icon: Mail,
//       bg: 'bg-blue-100',
//       text: 'text-blue-700',
//       contactColor: 'text-blue-600'
//     },
//     {
//       title: 'Partnership Opportunities',
//       description: 'Interested in partnerships, collaborations, or joining our network.',
//       contact: '+880 1234-567890',
//       icon: Handshake,
//       bg: 'bg-teal-100',
//       text: 'text-teal-700',
//       contactColor: 'text-teal-600'
//     },
//     {
//       title: 'Technical Support',
//       description: 'Need help with our platform, services, or technical assistance.',
//       contact: 'support@noorvia.bd',
//       icon: Building2,
//       bg: 'bg-green-100',
//       text: 'text-green-700',
//       contactColor: 'text-green-600'
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
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             Ready to start your business journey with us? Get in touch and let's discuss how we can help you succeed.
//           </p>
//         </div>
//       </section>

//       {/* Contact Info and Form Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:grid lg:grid-cols-3 lg:gap-12">
//             {/* Contact Information */}
//             <div className="lg:col-span-1">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
//               <p className="text-gray-600 mb-8 leading-relaxed">
//                 We're here to help you navigate your business journey. Reach out to us through any of the channels below, and our team will respond promptly.
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-700">
//                       <Mail className="h-6 w-6" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Email</h3>
//                     <p className="text-gray-600">info@noorvia.bd</p>
//                     <p className="text-gray-600">support@noorvia.bd</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="inline-flex p-3 rounded-lg bg-teal-100 text-teal-700">
//                       <Phone className="h-6 w-6" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
//                     <p className="text-gray-600">+880 1234-567890</p>
//                     <p className="text-gray-600">+880 9876-543210</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="inline-flex p-3 rounded-lg bg-green-100 text-green-700">
//                       <MapPin className="h-6 w-6" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Address</h3>
//                     <p className="text-gray-600">
//                       123 Business District<br />
//                       Gulshan-2, Dhaka 1212<br />
//                       Bangladesh
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="inline-flex p-3 rounded-lg bg-orange-100 text-orange-700">
//                       <Clock className="h-6 w-6" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
//                     <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
//                     <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
//                     <p className="text-gray-600">Sunday: Closed</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="mt-12 lg:mt-0 lg:col-span-2">
//               <div className="bg-gray-50 p-8 rounded-xl">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                         Your Name *
//                       </label>
//                       <div className="relative">
//                         <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                           placeholder="Enter your full name"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                         Email Address *
//                       </label>
//                       <div className="relative">
//                         <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                           placeholder="Enter your email address"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                       Subject *
//                     </label>
//                     <div className="relative">
//                       <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                       <input
//                         type="text"
//                         id="subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                         placeholder="What is this regarding?"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                       Message *
//                     </label>
//                     <div className="relative">
//                       <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         required
//                         rows={6}
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
//                         placeholder="Tell us more about your inquiry or requirements..."
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
//                   >
//                     Send Message
//                     <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
//             <p className="text-lg text-gray-600">
//               Located in the heart of Dhaka's business district
//             </p>
//           </div>
//           <div className="bg-white p-4 rounded-xl shadow-lg">
//             <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
//               <div className="text-center">
//                 <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
//                 <p className="text-gray-600 font-medium">Interactive Map Coming Soon</p>
//                 <p className="text-sm text-gray-500 mt-2">
//                   123 Business District, Gulshan-2, Dhaka 1212, Bangladesh
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Contact Cards */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
//             <p className="text-lg text-gray-600">
//               Choose the best way to reach us based on your needs
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {quickCards.map((card, index) => (
//               <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
//                 <div className={`inline-flex p-3 rounded-lg ${card.bg} ${card.text} mb-4`}>
//                   <card.icon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
//                 <p className="text-gray-600 mb-4 leading-relaxed">{card.description}</p>
//                 <p className={`font-medium ${card.contactColor}`}>{card.contact}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;



// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, User, MessageSquare, Building2, Clock, Handshake } from 'lucide-react';
// import useAxiosSecure from '../../hooks/useAxiosSecure';


// const Contact = () => {
//   const axiosSecure = useAxiosSecure();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setIsLoading(true);

//     // Client-side validation
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       setError('Please enter a valid email address');
//       setIsLoading(false);
//       return;
//     }
//     if (formData.message.length < 10) {
//       setError('Message must be at least 10 characters long');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await axiosSecure.post('/contacts', formData);
//       console.log('Submission response:', response.data);
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       alert('Thank you for your message! We will get back to you soon.');
//     } catch (error) {
//       setError(error.response?.data?.message || 'Failed to submit the form.');
//       console.error('Submission error:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const quickCards = [
//     {
//       title: 'General Inquiries',
//       description: 'Questions about our services, pricing, or how we can help your business.',
//       contact: 'info@noorvia.bd',
//       icon: Mail,
//       bg: 'bg-blue-100',
//       text: 'text-blue-700',
//       contactColor: 'text-blue-600',
//     },
//     {
//       title: 'Partnership Opportunities',
//       description: 'Interested in partnerships, collaborations, or joining our network.',
//       contact: '+880 1234-567890',
//       icon: Handshake,
//       bg: 'bg-teal-100',
//       text: 'text-teal-700',
//       contactColor: 'text-teal-600',
//     },
//     {
//       title: 'Technical Support',
//       description: 'Need help with our platform, services, or technical assistance.',
//       contact: 'support@noorvia.bd',
//       icon: Building2,
//       bg: 'bg-green-100',
//       text: 'text-green-700',
//       contactColor: 'text-green-600',
//     },
//   ];

//   return (
//     <div>
//       {/* Header Section */}
//       <section className="bg-gradient-to-r from-blue-700 to-teal-700 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <img
//             src="https://res.cloudinary.com/duh7c5x99/image/upload/v1754661040/white-Photoroom-2_we43d0.png"
//             alt="NoorVia BD Logo"
//             className="h-20 w-auto mx-auto mb-6"
//           />
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             Ready to start your business journey with us? Get in touch and let's discuss how we can help you succeed.
//           </p>
//         </div>
//       </section>

//       {/* Contact Info and Form Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:grid lg:grid-cols-3 lg:gap-12">
//             {/* Contact Information */}
//             <div className="lg:col-span-1">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
//               <p className="text-gray-600 mb-8 leading-relaxed">
//                 We're here to help you navigate your business journey. Reach out to us through any of the channels below, and our team will respond promptly.
//               </p>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="inline-flex p-3 rounded-lg bg-blue-100 text-blue-700">
//                       <Mail className="h-6 w-6" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Email</h3>
//                     <p className="text-gray-600">info@noorvia.bd</p>
//                     <p className="text-gray-600">support@noorvia.bd</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="inline-flex p-3 rounded-lg bg-teal-100 text-teal-700">
//                       <Phone className="h-6 w-6" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
//                     <p className="text-gray-600">+880 1234-567890</p>
//                     <p className="text-gray-600">+880 9876-543210</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="inline-flex p-3 rounded-lg bg-green-100 text-green-700">
//                       <MapPin className="h-6 w-6" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Address</h3>
//                     <p className="text-gray-600">
//                       123 Business District<br />
//                       Gulshan-2, Dhaka 1212<br />
//                       Bangladesh
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="inline-flex p-3 rounded-lg bg-orange-100 text-orange-700">
//                       <Clock className="h-6 w-6" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
//                     <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
//                     <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
//                     <p className="text-gray-600">Sunday: Closed</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="mt-12 lg:mt-0 lg:col-span-2">
//               <div className="bg-gray-50 p-8 rounded-xl">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
//                 {error && (
//                   <div className="text-red-600 text-sm mb-4" role="alert">
//                     {error}
//                   </div>
//                 )}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                         Your Name *
//                       </label>
//                       <div className="relative">
//                         <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                           placeholder="Enter your full name"
//                           aria-label="Your full name"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                         Email Address *
//                       </label>
//                       <div className="relative">
//                         <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                           placeholder="Enter your email address"
//                           aria-label="Your email address"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                       Subject *
//                     </label>
//                     <div className="relative">
//                       <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                       <input
//                         type="text"
//                         id="subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                         placeholder="What is this regarding?"
//                         aria-label="Subject of your message"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                       Message *
//                     </label>
//                     <div className="relative">
//                       <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         required
//                         rows={6}
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
//                         placeholder="Tell us more about your inquiry or requirements..."
//                         aria-label="Your message"
//                       />
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className={`w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                   >
//                     {isLoading ? 'Sending...' : 'Send Message'}
//                     {!isLoading && <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
//             <p className="text-lg text-gray-600">
//               Located in the heart of Dhaka's business district
//             </p>
//           </div>
//           <div className="bg-white p-4 rounded-xl shadow-lg">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.748!2d90.407143!3d23.794093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b1b8b8b8bb%3A0x1234567890abcdef!2sGulshan-2%2C%20Dhaka%201212%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1634567890123!5m2!1sen!2sbd"
//               className="w-full h-96 rounded-lg"
//               allowFullScreen=""
//               loading="lazy"
//               title="NoorVia Office Location"
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       {/* Quick Contact Cards */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
//             <p className="text-lg text-gray-600">
//               Choose the best way to reach us based on your needs
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {quickCards.map((card, index) => (
//               <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
//                 <div className={`inline-flex p-3 rounded-lg ${card.bg} ${card.text} mb-4`}>
//                   <card.icon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
//                 <p className="text-gray-600 mb-4 leading-relaxed">{card.description}</p>
//                 <p className={`font-medium ${card.contactColor}`}>{card.contact}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;




import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Building2, Clock, Handshake, MessageCircle } from 'lucide-react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Contact = () => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Helper function to set refs
  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Client-side validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }
    if (formData.message.length < 10) {
      setError('Message must be at least 10 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axiosSecure.post('/contacts', formData);
      console.log('Submission response:', response.data);
      setFormData({ name: '', email: '', subject: '', message: '' });
      Swal.fire({
        title: 'Success!',
        text: 'Thank you for your message! We will get back to you soon.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#0A3D91',
      });
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to submit the form.');
      console.error('Submission error:', error);
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Failed to submit the form.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#B91C1C',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const quickCards = [
    {
      title: 'General Inquiries',
      description: 'Questions about our services, pricing, or how we can help your business.',
      contact: 'info@noorvia.bd',
      icon: Mail,
      bg: 'bg-[#0A3D91]/10',
      text: 'text-[#0A3D91]',
      contactColor: 'text-[#0A3D91]',
    },
    {
      title: 'Partnership Opportunities',
      description: 'Interested in partnerships, collaborations, or joining our network.',
      contact: '+880 1234-567890',
      icon: Handshake,
      bg: 'bg-[#D0A96A]/10',
      text: 'text-[#D0A96A]',
      contactColor: 'text-[#D0A96A]',
    },
    {
      title: 'Technical Support',
      description: 'Need help with our platform, services, or technical assistance.',
      contact: 'support@noorvia.bd',
      icon: Building2,
      bg: 'bg-[#2E7D32]/10',
      text: 'text-[#2E7D32]',
      contactColor: 'text-[#2E7D32]',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section 
        id="header"
        ref={setRef('header')}
        className={`bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white py-12 sm:py-16 transition-all duration-1000 ${
          isVisible['header'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <div className={`inline-flex p-3 sm:p-4 rounded-full bg-[#D0A96A]/20 text-[#D0A96A] mb-4 sm:mb-6 transition-all duration-700 ${
            isVisible['header'] ? 'animate-fade-in-up animate-delay-200' : 'opacity-0 translate-y-10'
          }`}>
            <MessageCircle className="h-16 w-16 sm:h-20 sm:w-20 animate-bounce" />
          </div>
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 transition-all duration-700 ${
            isVisible['header'] ? 'animate-fade-in-up animate-delay-400' : 'opacity-0 translate-y-10'
          }`}>Contact Us</h1>
          <p className={`text-base sm:text-lg md:text-xl text-[#D0A96A] max-w-3xl mx-auto transition-all duration-700 px-4 ${
            isVisible['header'] ? 'animate-fade-in-up animate-delay-600' : 'opacity-0 translate-y-10'
          }`}>
            Ready to start your business journey with us? Get in touch and let's discuss how we can help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4 sm:mb-6">Get in Touch</h2>
              <p className="text-sm sm:text-base text-[#6B7280] mb-6 sm:mb-8 leading-relaxed">
                We're here to help you navigate your business journey. Reach out to us through any of the channels below, and our team will respond promptly.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-2 sm:p-3 rounded-lg bg-[#0A3D91]/10 text-[#0A3D91]">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111827]">Email</h3>
                    <p className="text-xs sm:text-sm text-[#6B7280]">info@noorvia.bd</p>
                    <p className="text-xs sm:text-sm text-[#6B7280]">support@noorvia.bd</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-2 sm:p-3 rounded-lg bg-[#D0A96A]/10 text-[#D0A96A]">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111827]">Phone</h3>
                    <p className="text-xs sm:text-sm text-[#6B7280]">+880 1234-567890</p>
                    <p className="text-xs sm:text-sm text-[#6B7280]">+880 9876-543210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-2 sm:p-3 rounded-lg bg-[#2E7D32]/10 text-[#2E7D32]">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111827]">Address</h3>
                    <p className="text-xs sm:text-sm text-[#6B7280]">
                      123 Business District<br />
                      Gulshan-2, Dhaka 1212<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-2 sm:p-3 rounded-lg bg-[#D0A96A]/10 text-[#D0A96A]">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#111827]">Business Hours</h3>
                    <p className="text-xs sm:text-sm text-[#6B7280]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-xs sm:text-sm text-[#6B7280]">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-xs sm:text-sm text-[#6B7280]">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-8 sm:mt-12 lg:mt-0 lg:col-span-2">
              <div className="bg-[#FAF3E0] p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-[#E5E7EB]">
                <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4 sm:mb-6">Send us a Message</h2>
                {error && (
                  <div className="text-[#B91C1C] text-sm mb-4" role="alert">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#111827] mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#6B7280]" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] transition-colors bg-white text-sm sm:text-base"
                          placeholder="Enter your full name"
                          aria-label="Your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#111827] mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#6B7280]" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] transition-colors bg-white text-sm sm:text-base"
                          placeholder="Enter your email address"
                          aria-label="Your email address"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#111827] mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-[#6B7280]" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] transition-colors bg-white text-sm sm:text-base"
                        placeholder="What is this regarding?"
                        aria-label="Subject of your message"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#111827] mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 sm:top-4 h-4 w-4 sm:h-5 sm:w-5 text-[#6B7280]" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] transition-colors resize-vertical bg-white text-sm sm:text-base"
                        placeholder="Tell us more about your inquiry or requirements..."
                        aria-label="Your message"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-[#0A3D91] hover:bg-[#08306B] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group text-sm sm:text-base ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                    {!isLoading && <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Visit Our Office</h2>
            <p className="text-base sm:text-lg text-[#6B7280] px-4">
              Located in the heart of Dhaka's business district
            </p>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-[#E5E7EB]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.748!2d90.407143!3d23.794093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b1b8b8b8bb%3A0x1234567890abcdef!2sGulshan-2%2C%20Dhaka%201212%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1634567890123!5m2!1sen!2sbd"
              className="w-full h-64 sm:h-80 md:h-96 rounded-lg"
              allowFullScreen=""
              loading="lazy"
              title="NoorVia Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Need Immediate Assistance?</h2>
            <p className="text-base sm:text-lg text-[#6B7280] px-4">
              Choose the best way to reach us based on your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {quickCards.map((card, index) => (
              <div key={index} className="bg-[#FAF3E0] p-4 sm:p-6 rounded-lg sm:rounded-xl hover:shadow-lg transition-shadow border border-[#E5E7EB]">
                <div className={`inline-flex p-2 sm:p-3 rounded-lg ${card.bg} ${card.text} mb-3 sm:mb-4`}>
                  <card.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2">{card.title}</h3>
                <p className="text-sm sm:text-base text-[#6B7280] mb-3 sm:mb-4 leading-relaxed">{card.description}</p>
                <p className={`font-medium ${card.contactColor} text-sm sm:text-base`}>{card.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;