

// import React, { useState, useContext, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Providers/AuthProvider';

// const navLinks = [
 
//   { name: 'Company Profile', path: '/company-profile' },
//   { name: 'Products & Services', path: '/products-services' },
//   { name: 'Investor Connect', path: '/investor-connect' },
//   { name: 'Performers\' Club', path: '/performers-club' },
//   { name: 'Contact', path: '/contact' },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { user, logOut } = useContext(AuthContext);
//   const [userData, setUserData] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       setUserData({
//         displayName: user.displayName || 'User',
//         email: user.email || '',
//         photoURL: user.photoURL || '',
//       });
//     }
//   }, [user]);

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         navigate('/');
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleMenuToggle = () => setMenuOpen(!menuOpen);
//   const handleLinkClick = () => setMenuOpen(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur shadow-md">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Branding */}
//           <NavLink to="/" className="text-2xl font-bold text-blue-900 tracking-tight hover:text-blue-700 transition-colors">
//             NoorVia BD
//           </NavLink>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex space-x-8 items-center">
//             {navLinks.map(link => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 end={link.path === '/'}
//                 className={({ isActive }) =>
//                   `relative font-medium px-2 py-1 transition-colors duration-200 rounded hover:bg-blue-100 hover:text-blue-900 ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-700'}`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             ))}

//             {/* Authenticated User */}
//             {user ? (
//               <>
//                 <NavLink
//                   to="/dashboard"
//                   className="relative font-medium px-2 py-1 text-blue-700 hover:text-blue-900"
//                 >
//                   Dashboard
//                 </NavLink>
//                 <button
//                   onClick={handleLogout}
//                   className="px-4 py-1 rounded bg-[#DA3A60] text-white hover:bg-[#DA3A60]/90 transition"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink
//                   to="/login"
//                   className="px-4 py-1 rounded text-blue-700 hover:text-blue-900 transition"
//                 >
//                   Login
//                 </NavLink>
//                 <NavLink
//                   to="/signup"
//                   className="px-4 py-1 rounded bg-[#DA3A60] text-white hover:bg-[#DA3A60]/90 transition"
//                 >
//                   Sign Up
//                 </NavLink>
//               </>
//             )}
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden flex items-center p-2 rounded text-blue-900 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             onClick={handleMenuToggle}
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
//           >
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               {menuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden mt-2 bg-white rounded-lg shadow-lg py-2 animate-fade-in">
//             {navLinks.map(link => (
//               <NavLink
//                 key={link.name}
//                 to={link.path}
//                 end={link.path === '/'}
//                 className={({ isActive }) =>
//                   `block px-4 py-2 font-medium rounded hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-700'}`
//                 }
//                 onClick={handleLinkClick}
//               >
//                 {link.name}
//               </NavLink>
//             ))}

//             {/* Auth Buttons */}
//             {user ? (
//               <>
//                 <NavLink
//                   to="/dashboard"
//                   className="block px-4 py-2 text-blue-700 hover:text-blue-900"
//                   onClick={handleLinkClick}
//                 >
//                   Dashboard
//                 </NavLink>
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     handleLinkClick();
//                   }}
//                   className="block w-full text-left px-4 py-2 text-red-600 hover:text-red-800"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink
//                   to="/login"
//                   className="block px-4 py-2 text-blue-700 hover:text-blue-900"
//                   onClick={handleLinkClick}
//                 >
//                   Login
//                 </NavLink>
//                 <NavLink
//                   to="/signup"
//                   className="block px-4 py-2 text-white bg-[#DA3A60] hover:bg-[#DA3A60]/90 rounded mt-2 mx-4"
//                   onClick={handleLinkClick}
//                 >
//                   Sign Up
//                 </NavLink>
//               </>
//             )}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;



import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { MessageCircle, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Company Profile', path: '/company-profile' },
  { name: 'Products & Services', path: '/products-services' },
  { name: 'Investor Connect', path: '/investor-connect' },
  { name: 'Performer\'s Club', path: '/performers-club' },
  { name: 'Get in Touch', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      setUserData({
        displayName: user.displayName || 'User',
        email: user.email || '',
        photoURL: user.photoURL || '',
      });
    }
  }, [user]);

  const handleLogout = () => {
    logOut()
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  };

  const isActive = (path) => location.pathname === path;

  return (
        <header className="bg-transparent sticky top-0 z-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="bg-gray-800/80 backdrop-blur-xl rounded-3xl sm:rounded-4xl shadow-2xl border border-gray-600/30 my-4">
          <nav className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="flex justify-between items-center h-20 w-full">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <img 
              src="https://res.cloudinary.com/duh7c5x99/image/upload/v1756129371/logofalnnoor_v7rdzp.png" 
              alt="NoorVia BD Logo" 
              className="h-14 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={`px-2 py-2 text-sm font-medium transition-all duration-300 relative hover:scale-105 ${
                  isActive(item.path)
                    ? 'text-[#D0A96A] font-semibold'
                    : 'text-white hover:text-[#D0A96A]'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D0A96A] rounded-full" />
                )}
              </NavLink>
            ))}

            {/* Auth Buttons */}
            {user ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="px-3 py-2 text-sm font-medium text-[#D0A96A] hover:text-[#B8945A] transition-all duration-300 hover:bg-gray-700/50 rounded-md"
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="bg-[#FAF3E0] text-[#111827] border border-[#111827] px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)]"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  className="bg-[#FAF3E0] text-[#111827] border border-[#111827] px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)]"
                >
                  Sign Up
                </NavLink>
              </>
            )}

            {/* Contact Button */}
            <a
              href="https://wa.me/8801763714299?text=Hello%20NoorVia%20BD,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-110 hover:bg-gray-800 hover:shadow-2xl hover:shadow-black/50 border-2 border-black hover:border-gray-700"
            >
              CONTACT US
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-[#111827] hover:text-[#0A3D91] hover:bg-[#F9FAFB] transition-all duration-300"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden py-4 bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-3xl sm:rounded-4xl border border-gray-600/30 mt-2 mx-4 sm:mx-6 lg:mx-8 xl:mx-10">
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-[#D0A96A] bg-gray-700/50 font-semibold'
                      : 'text-white hover:text-[#D0A96A] hover:bg-gray-700/50'
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}

              {user ? (
                <>
                  <NavLink
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-[#D0A96A] hover:text-[#B8945A] hover:bg-gray-700/50 rounded-md"
                  >
                    Dashboard
                  </NavLink>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="px-4 py-3 text-sm font-medium text-[#B91C1C] hover:text-[#991B1B] hover:bg-[#FEF2F2] rounded-md text-left w-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="px-6 py-3 text-sm font-medium bg-[#FAF3E0] text-[#111827] border border-[#111827] rounded-full mx-4 mt-2 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)]"
                  >
                    Sign Up
                  </NavLink>
                </>
              )}

              {/* Contact Button (Mobile) - Special Styling */}
              <a
                href="https://wa.me/8801763714299?text=Hello%20NoorVia%20BD,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="relative mx-4 mt-4 group"
              >
                {/* Animated Background Ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                {/* Main Button */}
                <div className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 border-2 border-green-400 hover:border-green-300 flex items-center justify-center space-x-3 shadow-lg">
                  {/* WhatsApp Icon */}
                  <svg 
                    className="w-6 h-6 animate-bounce" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  
                  {/* Button Text */}
                  <span className="text-lg font-extrabold tracking-wide">
                    CONTACT US
                  </span>
                  
                  {/* Phone Icon */}
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                
                {/* Floating Animation Dots */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping animation-delay-300"></div>
              </a>
            </div>
          </div>
        )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

