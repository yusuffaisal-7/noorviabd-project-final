


// import React, { useState, useContext, useEffect } from 'react';

// import { NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Providers/AuthProvider';




// const navLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'About', path: '/about' },
//   { name: 'Experience', path: '/experience' },
//   { name: 'Research', path: '/research' },
//   { name: 'Blog', path: '/blog' },
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
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const navLinks = [
 
  { name: 'Company Profile', path: '/company-profile' },
  { name: 'Products & Services', path: '/products-services' },
  { name: 'Investor Connect', path: '/investor-connect' },
  { name: 'Performers\' Club', path: '/performers-club' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

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
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Branding */}
          <NavLink to="/" className="text-2xl font-bold text-blue-900 tracking-tight hover:text-blue-700 transition-colors">
            NoorVia BD
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative font-medium px-2 py-1 transition-colors duration-200 rounded hover:bg-blue-100 hover:text-blue-900 ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-700'}`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Authenticated User */}
            {user ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="relative font-medium px-2 py-1 text-blue-700 hover:text-blue-900"
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="px-4 py-1 rounded bg-[#DA3A60] text-white hover:bg-[#DA3A60]/90 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="px-4 py-1 rounded text-blue-700 hover:text-blue-900 transition"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="px-4 py-1 rounded bg-[#DA3A60] text-white hover:bg-[#DA3A60]/90 transition"
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center p-2 rounded text-blue-900 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-lg shadow-lg py-2 animate-fade-in">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `block px-4 py-2 font-medium rounded hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-700'}`
                }
                onClick={handleLinkClick}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Auth Buttons */}
            {user ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="block px-4 py-2 text-blue-700 hover:text-blue-900"
                  onClick={handleLinkClick}
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    handleLinkClick();
                  }}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:text-red-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="block px-4 py-2 text-blue-700 hover:text-blue-900"
                  onClick={handleLinkClick}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="block px-4 py-2 text-white bg-[#DA3A60] hover:bg-[#DA3A60]/90 rounded mt-2 mx-4"
                  onClick={handleLinkClick}
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;