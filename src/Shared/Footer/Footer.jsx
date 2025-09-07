import React from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { href: '#', label: 'LinkedIn', icon: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
  )},
  { href: '#', label: 'Twitter', icon: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
  )},
  { href: '#', label: 'Facebook', icon: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.325 0-.65.156-.856.431-1.235 1.637-2.469 3.274-3.691 4.911-.171.234-.443.378-.732.378h-.045c-.289 0-.56-.144-.732-.378-1.222-1.637-2.456-3.274-3.691-4.911-.206-.275-.53-.431-.856-.431h-1.35c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h1.35c.325 0 .65-.156.856-.431 1.235-1.637 2.469-3.274 3.691-4.911.171-.234.443-.378.732-.378h.045c.289 0 .56.144.732.378 1.222 1.637 2.456 3.274 3.691 4.911.206.275.53.431.856.431h1.35c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" /></svg>
  )},
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Company Profile', href: '/company-profile' },
  { name: 'Contact', href: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white w-full">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://res.cloudinary.com/duh7c5x99/image/upload/v1756129371/logofalnnoor_v7rdzp.png" 
                alt="NoorVia BD Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-[#6B7280] mb-4">
              A professional business platform for professionals, connecting entrepreneurs with opportunities and networks worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.href} aria-label={link.label} className="text-[#6B7280] hover:text-[#D0A96A] transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D0A96A]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[#6B7280] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D0A96A]">Services</h3>
            <ul className="space-y-2 text-[#6B7280]">
              <li>Business Consultation</li>
              <li>Sourcing & Indenting</li>
              <li>Legal Documentation</li>
              <li>Network Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D0A96A]">Contact Info</h3>
            <ul className="space-y-2 text-[#6B7280]">
              <li>Email: info@noorvia.bd</li>
              <li>Phone: +880 1763-714299</li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#374151] mt-8 pt-8 text-center">
          <p className="text-[#6B7280]">
            © 2025 NoorVia BD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
