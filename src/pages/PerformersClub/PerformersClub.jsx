import React from 'react';
import { useState } from 'react';
import { Users, Star, Calendar, Handshake, Award, Network, CheckCircle, ArrowRight, User, Mail, Phone, MapPin, Building2, FileText, Plus, Trash2 } from 'lucide-react';

const PerformersClub = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    motherName: '',
    nidNumber: '',
    designation: '',
    company: '',
    cellPhone: '',
    whatsappNumber: '',
    email: '',
    presentAddress: '',
    permanentAddress: '',
    companyAddress: '',
    membershipCategory: [],
    productServiceTypes: ['', '', ''],
    networkCompanies: [
      { name: '', contactPerson: '', designation: '', contactNumber: '' },
      { name: '', contactPerson: '', designation: '', contactNumber: '' },
      { name: '', contactPerson: '', designation: '', contactNumber: '' }
    ]
  });

  const membershipCategories = [
    'Mediator',
    'Market Provider',
    'Source Provider',
    'Network Builder',
    'Investor'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (category) => {
    setFormData(prev => ({
      ...prev,
      membershipCategory: prev.membershipCategory.includes(category)
        ? prev.membershipCategory.filter(c => c !== category)
        : [...prev.membershipCategory, category]
    }));
  };

  const handleProductServiceChange = (index, value) => {
    setFormData(prev => ({
      ...prev,
      productServiceTypes: prev.productServiceTypes.map((item, i) => i === index ? value : item)
    }));
  };

  const addProductService = () => {
    setFormData(prev => ({
      ...prev,
      productServiceTypes: [...prev.productServiceTypes, '']
    }));
  };

  const removeProductService = (index) => {
    setFormData(prev => ({
      ...prev,
      productServiceTypes: prev.productServiceTypes.filter((_, i) => i !== index)
    }));
  };

  const handleNetworkCompanyChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      networkCompanies: prev.networkCompanies.map((company, i) => 
        i === index ? { ...company, [field]: value } : company
      )
    }));
  };

  const addNetworkCompany = () => {
    setFormData(prev => ({
      ...prev,
      networkCompanies: [...prev.networkCompanies, { name: '', contactPerson: '', designation: '', contactNumber: '' }]
    }));
  };

  const removeNetworkCompany = (index) => {
    setFormData(prev => ({
      ...prev,
      networkCompanies: prev.networkCompanies.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you soon.');
  };

  return (
    <div className="">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="https://res.cloudinary.com/duh7c5x99/image/upload/v1754661040/white-Photoroom-2_we43d0.png" 
            alt="NoorVia BD Logo" 
            className="h-20 w-auto mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Performers' Club</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            An exclusive professional network for high-achieving individuals and innovative businesses
          </p>
        </div>
      </section>

      {/* Membership Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Application Form</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join the NoorVia BD Professional Club by filling out this comprehensive membership form
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
              <h3 className="text-2xl font-bold text-white text-center">
                NoorVia BD Membership Form of Professional Club
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Membership ID */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-blue-900">Membership ID Number:</span>
                  <span className="text-blue-700 font-semibold">To be given by coordinator</span>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 border-b-2 border-purple-200 pb-2">
                  Personal Information
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Father's Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Enter father's name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mother's Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Enter mother's name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      NID Number *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="nidNumber"
                        value={formData.nidNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Enter NID number"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 border-b-2 border-purple-200 pb-2">
                  Professional Information
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Designation *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Enter your designation"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 border-b-2 border-purple-200 pb-2">
                  Contact Information
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cell Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="cellPhone"
                        value={formData.cellPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Enter cell phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Enter WhatsApp number"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 border-b-2 border-purple-200 pb-2">
                  Address Information
                </h4>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Present Address *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      <textarea
                        name="presentAddress"
                        value={formData.presentAddress}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-vertical"
                        placeholder="Enter present address"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Permanent Address *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      <textarea
                        name="permanentAddress"
                        value={formData.permanentAddress}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-vertical"
                        placeholder="Enter permanent address"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Address *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      <textarea
                        name="companyAddress"
                        value={formData.companyAddress}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-vertical"
                        placeholder="Enter company address"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Membership Category */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 border-b-2 border-purple-200 pb-2">
                  Membership Category
                </h4>
                <p className="text-sm text-gray-600">Select all categories that apply to you:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {membershipCategories.map((category) => (
                    <label key={category} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.membershipCategory.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <span className="text-sm font-medium text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Product/Service Type */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 border-b-2 border-purple-200 pb-2">
                  Product/Service Type
                </h4>
                
                <div className="space-y-4">
                  {formData.productServiceTypes.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-gray-700 w-8">{index + 1}.</span>
                      <input
                        type="text"
                        value={service}
                        onChange={(e) => handleProductServiceChange(index, e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder={`Product/Service ${index + 1}`}
                      />
                      {formData.productServiceTypes.length > 3 && (
                        <button
                          type="button"
                          onClick={() => removeProductService(index)}
                          className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  
                  <button
                    type="button"
                    onClick={addProductService}
                    className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 font-medium transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add new product/service</span>
                  </button>
                </div>
              </div>

              {/* Companies Within My Top 3 Network */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 border-b-2 border-purple-200 pb-2">
                  Companies Within My Top 3 Network
                </h4>
                
                <div className="space-y-6">
                  {formData.networkCompanies.map((company, index) => (
                    <div key={index} className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-lg font-medium text-gray-900">Company {index + 1}</h5>
                        {formData.networkCompanies.length > 3 && (
                          <button
                            type="button"
                            onClick={() => removeNetworkCompany(index)}
                            className="p-2 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-lg transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            value={company.name}
                            onChange={(e) => handleNetworkCompanyChange(index, 'name', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                            placeholder="Enter company name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Person
                          </label>
                          <input
                            type="text"
                            value={company.contactPerson}
                            onChange={(e) => handleNetworkCompanyChange(index, 'contactPerson', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                            placeholder="Enter contact person name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Designation
                          </label>
                          <input
                            type="text"
                            value={company.designation}
                            onChange={(e) => handleNetworkCompanyChange(index, 'designation', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                            placeholder="Enter designation"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Number
                          </label>
                          <input
                            type="tel"
                            value={company.contactNumber}
                            onChange={(e) => handleNetworkCompanyChange(index, 'contactNumber', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                            placeholder="Enter contact number"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <button
                    type="button"
                    onClick={addNetworkCompany}
                    className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 font-medium transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add new company</span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Award className="h-5 w-5" />
                  <span>Submit Membership Application</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What it is Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Performers' Club?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Performers' Club is an exclusive professional network designed for high-achieving individuals, successful entrepreneurs, industry experts, and innovative startups who are committed to excellence and continuous growth.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This elite community serves as a platform for knowledge sharing, strategic collaborations, and meaningful professional relationships that drive both personal and business success.
              </p>
              <div className="space-y-4">
                {[
                  'Exclusive access to industry leaders and experts',
                  'Strategic networking opportunities',
                  'Knowledge sharing and best practices',
                  'Collaborative business development',
                  'Mentorship and guidance programs'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-100 p-6 rounded-xl text-center">
                  <Award className="h-8 w-8 text-purple-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-purple-900 mb-2">Excellence</h3>
                  <p className="text-sm text-purple-700">Commitment to professional excellence</p>
                </div>
                <div className="bg-pink-100 p-6 rounded-xl text-center">
                  <Network className="h-8 w-8 text-pink-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-pink-900 mb-2">Network</h3>
                  <p className="text-sm text-pink-700">High-value professional connections</p>
                </div>
                <div className="bg-blue-100 p-6 rounded-xl text-center">
                  <Users className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-blue-900 mb-2">Community</h3>
                  <p className="text-sm text-blue-700">Supportive professional community</p>
                </div>
                <div className="bg-green-100 p-6 rounded-xl text-center">
                  <Star className="h-8 w-8 text-green-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-green-900 mb-2">Growth</h3>
                  <p className="text-sm text-green-700">Continuous learning and development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Can Join?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Performers' Club is open to accomplished professionals, successful entrepreneurs, and innovative startups who meet our membership criteria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Professionals',
                description: 'Senior executives, industry leaders, consultants, and specialists with proven track records in their respective fields.',
                icon: Users,
                color: 'blue',
                criteria: [
                  'Minimum 5 years industry experience',
                  'Leadership or senior management roles',
                  'Recognized expertise in their field',
                  'Professional references'
                ]
              },
              {
                title: 'Startups',
                description: 'Innovative startups with scalable business models, strong founding teams, and clear growth trajectories.',
                icon: Star,
                color: 'purple',
                criteria: [
                  'Innovative business model',
                  'Proven market traction',
                  'Strong founding team',
                  'Growth potential'
                ]
              },
              {
                title: 'Experts',
                description: 'Industry experts, thought leaders, consultants, and advisors who contribute valuable insights and expertise.',
                icon: Award,
                color: 'green',
                criteria: [
                  'Recognized industry expertise',
                  'Published work or speaking experience',
                  'Advisory or consulting experience',
                  'Thought leadership contributions'
                ]
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className={`inline-flex p-3 rounded-lg bg-${member.color}-100 text-${member.color}-700 mb-6`}>
                  <member.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{member.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Membership Criteria:</h4>
                  <ul className="space-y-1">
                    {member.criteria.map((criterion, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 text-${member.color}-600 flex-shrink-0`} />
                        <span className="text-sm text-gray-600">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Exclusive benefits and opportunities available to Performers' Club members
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Exclusive Events',
                description: 'Regular networking events, industry conferences, workshops, and seminars featuring renowned speakers and thought leaders.',
                icon: Calendar,
                color: 'blue',
                features: [
                  'Monthly networking meetups',
                  'Quarterly industry conferences',
                  'Annual awards ceremony',
                  'Executive roundtable discussions'
                ]
              },
              {
                title: 'Mentorship Programs',
                description: 'Structured mentorship programs connecting experienced professionals with emerging talents and growing businesses.',
                icon: Handshake,
                color: 'green',
                features: [
                  'One-on-one mentorship matching',
                  'Group mentoring sessions',
                  'Reverse mentoring opportunities',
                  'Cross-industry guidance'
                ]
              },
              {
                title: 'Business Collaborations',
                description: 'Opportunities for strategic partnerships, joint ventures, and collaborative projects among club members.',
                icon: Network,
                color: 'purple',
                features: [
                  'Partnership matching platform',
                  'Collaborative project opportunities',
                  'Joint venture facilitation',
                  'Resource sharing network'
                ]
              }
            ].map((feature, index) => (
              <div key={index} className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex p-3 rounded-lg bg-${feature.color}-100 text-${feature.color}-700 mb-4`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{feature.description}</p>
                  <button className={`text-${feature.color}-600 hover:text-${feature.color}-800 font-medium transition-colors flex items-center group`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className={`mt-10 lg:mt-0 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${feature.color}-600 flex-shrink-0`} />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Benefits</h2>
            <p className="text-lg text-gray-600">
              Unlock exclusive opportunities and resources as a Performers' Club member
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Priority Access',
                description: 'First access to investment opportunities, partnerships, and exclusive events',
                icon: Star
              },
              {
                title: 'Expert Advisors',
                description: 'Access to industry experts and successful entrepreneurs for guidance',
                icon: Award
              },
              {
                title: 'Resource Library',
                description: 'Exclusive content, research reports, and business development resources',
                icon: Users
              },
              {
                title: 'Global Network',
                description: 'Connect with international members and expand your global reach',
                icon: Network
              },
              {
                title: 'Special Programs',
                description: 'Invitation-only programs, masterclasses, and executive education',
                icon: Calendar
              },
              {
                title: 'Direct Support',
                description: 'Personalized support from NoorVia BD team for business development',
                icon: Handshake
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex p-3 rounded-lg bg-purple-100 text-purple-700 mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-pink-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join the Elite?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Apply for membership in the Performers' Club and unlock exclusive opportunities for growth and networking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply for Membership
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformersClub;
