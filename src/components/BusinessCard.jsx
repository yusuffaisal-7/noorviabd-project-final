import React from 'react';
import { Phone, Mail, Building2, User, Award } from 'lucide-react';

const BusinessCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      {/* Header with Company Branding */}
      <div className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] p-6 text-white text-center">
        <div className="flex items-center justify-center mb-4">
          <Building2 className="h-8 w-8 text-[#D0A96A] mr-3" />
          <h2 className="text-xl font-bold">NoorVia BD</h2>
        </div>
        <p className="text-[#D0A96A] text-sm font-medium">
          A Professional Business Platform for Professionals
        </p>
      </div>

      {/* Personal Information */}
      <div className="p-6">
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-[#0A3D91]/20 to-[#D0A96A]/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#0A3D91]/30">
            <User className="h-12 w-12 text-[#0A3D91]" />
          </div>
          <h3 className="text-2xl font-bold text-[#111827] mb-2">Muhammad Rakib</h3>
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Award className="h-5 w-5 text-[#D0A96A]" />
            <p className="text-lg font-semibold text-[#0A3D91]">
              Director, Demand Planning & Trade Operations
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-[#FAF3E0] rounded-lg border border-[#D0A96A]/20">
            <div className="bg-[#0A3D91] p-2 rounded-full">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-[#6B7280] uppercase font-semibold tracking-wide">Cell</p>
              <p className="text-[#111827] font-medium">+880 1849 995 274</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-[#FAF3E0] rounded-lg border border-[#D0A96A]/20">
            <div className="bg-[#0A3D91] p-2 rounded-full">
              <Mail className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-[#6B7280] uppercase font-semibold tracking-wide">Email</p>
              <p className="text-[#111827] font-medium">m.rakib@noorviabd.com</p>
            </div>
          </div>
        </div>

        {/* Company Services Preview */}
        <div className="mt-6 p-4 bg-gradient-to-br from-[#0A3D91]/5 to-[#D0A96A]/5 rounded-lg border border-[#0A3D91]/10">
          <h4 className="text-sm font-semibold text-[#0A3D91] mb-2 text-center">
            Our Services Include:
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-[#6B7280]">
            <span>• Indenting & Sourcing</span>
            <span>• Global Trade Solutions</span>
            <span>• Business Consultation</span>
            <span>• Legal Support</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-[#6B7280]">
            Ready to grow your business? Let's connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
