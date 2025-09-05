import React, { useEffect, useState } from 'react';
import { Target, Eye, Building2, Users, Globe, Award, TrendingUp, Shield, Loader2, CheckCircle, MessageCircle, ArrowRight, X, Mail, Phone } from 'lucide-react';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const colorClasses = {
  royalBlue: 'bg-[#0A3D91]/10 text-[#0A3D91]',
  goldSand: 'bg-[#D0A96A]/10 text-[#D0A96A]',
  success: 'bg-[#2E7D32]/10 text-[#2E7D32]',
  info: 'bg-[#0284C7]/10 text-[#0284C7]',
};

const CompanyProfile = () => {
  const axiosPublic = useAxiosPublic();
  const [members, setMembers] = useState([]);
  const [teamLoading, setTeamLoading] = useState(true);
  const [teamError, setTeamError] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await axiosPublic.get('/team'); // expects array from backend
        if (mounted) setMembers(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Team loading error:', err);
        if (mounted) setTeamError(err?.response?.data?.message || 'Failed to load team');
      } finally {
        if (mounted) setTeamLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [axiosPublic]);

  const handleViewDetails = (member) => {
    setSelectedMember(member);
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedMember(null);
  };

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 sm:p-4 rounded-full bg-[#D0A96A]/20 text-[#D0A96A] mb-4 sm:mb-6">
            <Building2 className="h-16 w-16 sm:h-20 sm:w-20" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Company Profile</h1>
          <p className="text-base sm:text-lg md:text-xl text-[#D0A96A] max-w-3xl mx-auto px-4">
            Discover the story, mission, and vision that drives NoorVia BD&apos;s commitment to professional excellence
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 sm:gap-12 lg:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4 sm:mb-6">About Us</h2>
              <p className="text-base sm:text-lg text-[#111827] mb-4 sm:mb-6 leading-relaxed">
                NoorVia BD was established with a vision to create a comprehensive business platform that bridges the gap between entrepreneurs, investors, and professional networks. Our journey began with the understanding that successful businesses need more than just capital – they need guidance, connections, and strategic support.
              </p>
              <p className="text-base sm:text-lg text-[#111827] mb-4 sm:mb-6 leading-relaxed">
                Since our inception, we have been committed to providing professional business solutions that enable entrepreneurs to navigate the complex landscape of modern business. Our platform serves as a catalyst for growth, innovation, and sustainable business development.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-[#0A3D91]/10 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-[#0A3D91]">500+</div>
                  <div className="text-xs sm:text-sm text-[#0A3D91]">Businesses Supported</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-[#D0A96A]/10 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-[#D0A96A]">50+</div>
                  <div className="text-xs sm:text-sm text-[#D0A96A]">Countries Reached</div>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-[#0A3D91]/20 to-[#0A3D91]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#0A3D91]/20">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-[#0A3D91] mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A3D91] mb-1 sm:mb-2">Excellence</h3>
                  <p className="text-xs sm:text-sm text-[#0A3D91]">Committed to delivering exceptional business solutions</p>
                </div>
                <div className="bg-gradient-to-br from-[#D0A96A]/20 to-[#D0A96A]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#D0A96A]/20">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#D0A96A] mb-1 sm:mb-2">Trust</h3>
                  <p className="text-xs sm:text-sm text-[#D0A96A]">Building lasting relationships through integrity</p>
                </div>
                <div className="bg-gradient-to-br from-[#2E7D32]/20 to-[#2E7D32]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#2E7D32]/20">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#2E7D32] mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#2E7D32] mb-1 sm:mb-2">Collaboration</h3>
                  <p className="text-xs sm:text-sm text-[#2E7D32]">Fostering partnerships for mutual growth</p>
                </div>
                <div className="bg-gradient-to-br from-[#D0A96A]/20 to-[#D0A96A]/10 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#D0A96A]/20">
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#D0A96A] mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-semibold text-[#D0A96A] mb-1 sm:mb-2">Innovation</h3>
                  <p className="text-xs sm:text-sm text-[#D0A96A]">Embracing new ideas and technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <Target className="h-10 w-10 sm:h-12 sm:w-12 text-[#0A3D91] mx-auto mb-3 sm:mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Mission</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
              Empowering businesses through comprehensive solutions and strategic partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'Business Consultation & Network Support', description: 'Providing expert guidance and building strong professional networks for sustainable growth', icon: Users, color: 'royalBlue' },
              { title: 'Indenting', description: 'Facilitating seamless procurement processes and supplier connections for businesses', icon: Building2, color: 'goldSand' },
              { title: 'Sourcing', description: 'Connecting businesses with quality suppliers and resources globally', icon: Globe, color: 'success' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-[#E5E7EB]">
                <div className={`inline-flex p-2 sm:p-3 rounded-lg ${colorClasses[item.color]} mb-3 sm:mb-4`}>
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <Eye className="h-10 w-10 sm:h-12 sm:w-12 text-[#D0A96A] mx-auto mb-3 sm:mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Vision</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
              Building a future where every entrepreneur has access to the tools, networks, and support needed to succeed
            </p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {[
              { title: 'Provide Legal Platform for New Entrepreneurs', description: 'Creating secure, compliant pathways for new businesses to establish and operate within legal frameworks', icon: Shield },
              { title: 'Develop Business Network', description: 'Building comprehensive networks that connect businesses, investors, suppliers, and service providers', icon: Users },
              { title: 'Global Import and Export Solution', description: 'Facilitating international trade through comprehensive import and export support services', icon: Globe },
              { title: 'Connect Local Business with International Platform', description: 'Bridging local enterprises with global opportunities and international market access', icon: TrendingUp },
              { title: 'Legal Documentation Support', description: 'Providing comprehensive legal documentation assistance for business operations and compliance', icon: Building2 },
              { title: 'Strategic Business Consulting & Partnership', description: 'Offering strategic guidance and facilitating partnerships that drive long-term business success', icon: Target },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-[#F9FAFB] rounded-lg sm:rounded-xl hover:bg-[#F3F4F6] transition-colors border border-[#E5E7EB]">
                <div className="flex-shrink-0">
                  <div className="inline-flex p-2 sm:p-3 rounded-lg bg-[#D0A96A]/10 text-[#D0A96A]">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#111827] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section (Dynamic) */}
      <section className="py-12 sm:py-16 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Leadership Team</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto px-4">
              Meet the experienced professionals driving NoorVia BD&apos;s vision and growth
            </p>
          </div>

          {teamLoading ? (
            <div className="text-center py-12">
              <Loader2 className="h-8 w-8 mx-auto animate-spin text-[#0A3D91]" />
              <p className="text-[#6B7280] mt-3">Loading team…</p>
            </div>
          ) : teamError ? (
            <div className="text-center py-12">
              <p className="text-[#B91C1C] font-medium">{teamError}</p>
            </div>
          ) : members.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {members.map((member) => (
                <div key={member._id || member.name} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  {/* Profile Image Section - 60% of card height */}
                  <div className="w-full h-60 sm:h-72 bg-gray-100 p-3 flex items-center justify-center">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-white shadow-inner border border-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150';
                        }}
                      />
                    </div>
                  </div>

                  {/* Information Section */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    {/* Name with Verification Badge */}
                    <div className="flex items-center justify-center mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-[#111827] mr-2">{member.name}</h3>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#2E7D32] rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>

                    {/* Designation */}
                    <p className="text-sm sm:text-base text-[#6B7280] text-center mb-4">
                      {member.position}
                    </p>

                    {/* Bio */}
                    {member.bio && (
                      <p className="text-sm text-[#6B7280] text-center mb-4 leading-relaxed line-clamp-3">
                        {member.bio}
                      </p>
                    )}

                    {/* Statistics Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#111827]" />
                        <span className="text-sm sm:text-base text-[#111827] font-medium">15+</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#111827]" />
                        <span className="text-sm sm:text-base text-[#111827] font-medium">8</span>
                      </div>
                    </div>

                    {/* View Details Button - Positioned at bottom */}
                    <div className="mt-auto">
                      <button 
                        onClick={() => handleViewDetails(member)}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-[#111827] px-4 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#6B7280] font-medium">No team members available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg text-[#6B7280] px-4">
              The principles that guide our decisions and shape our culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical standards', icon: Shield, color: 'royalBlue' },
              { title: 'Excellence', description: 'We strive for the highest quality in everything we do', icon: Award, color: 'goldSand' },
              { title: 'Innovation', description: 'We embrace new ideas and technologies to better serve our clients', icon: TrendingUp, color: 'success' },
              { title: 'Partnership', description: 'We build lasting relationships based on mutual trust and respect', icon: Users, color: 'info' },
            ].map((value, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-[#E5E7EB]">
                <div className={`inline-flex p-2 sm:p-3 rounded-lg ${colorClasses[value.color]} mb-3 sm:mb-4`}>
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827] mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#0A3D91] to-[#08306B]">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Join Our Mission</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#D0A96A] mb-6 sm:mb-8 px-4">
            Be part of a platform that&apos;s transforming how businesses connect, grow, and succeed globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#FAF3E0] text-[#111827] border border-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] text-sm sm:text-base"
            >
              Partner With Us
            </a>
            <a
              href="/products-services"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0A3D91] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Member Details Modal */}
      {showDetailsModal && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-[#111827]">Team Member Details</h3>
              <button
                onClick={closeDetailsModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Profile Image and Basic Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150';
                    }}
                  />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <div className="flex items-center justify-center sm:justify-start mb-3">
                    <h2 className="text-2xl font-bold text-[#111827] mr-3">{selectedMember.name}</h2>
                    <div className="w-6 h-6 bg-[#2E7D32] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-lg text-[#0A3D91] font-semibold mb-2">{selectedMember.position}</p>
                  {selectedMember.bio && (
                    <p className="text-[#6B7280] leading-relaxed">{selectedMember.bio}</p>
                  )}
                </div>
              </div>

              {/* Expertise Section */}
              {Array.isArray(selectedMember.expertise) && selectedMember.expertise.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#111827] mb-3">Areas of Expertise</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedMember.expertise.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#2E7D32] flex-shrink-0" />
                        <span className="text-[#111827]">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="bg-[#FAF3E0] p-4 rounded-lg border border-[#D0A96A]/20">
                <h4 className="text-lg font-semibold text-[#111827] mb-3">Contact Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#0A3D91]" />
                    <span className="text-[#111827]">contact@noorviabd.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#0A3D91]" />
                    <span className="text-[#111827]">+880 1849 995 274</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={closeDetailsModal}
                className="px-6 py-2 text-[#6B7280] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-2 bg-[#0A3D91] text-white rounded-lg hover:bg-[#08306B] transition-colors">
                Contact Member
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyProfile;
