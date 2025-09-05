

// import { useState, useContext, useEffect } from "react";
// import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
// import {
//   FaBars,
//   FaTimes,
//   FaUser,
//   FaTasks,
//   FaHome,
//   FaUserPlus,
//   FaBook,
//   FaPlusCircle,
//   FaSignOutAlt,
//   FaHistory,
// } from "react-icons/fa";
// import Swal from "sweetalert2";
// import { AuthContext } from "../providers/AuthProvider";
// import useAdmin from "../hooks/useAdmin";
// import Loading from "../components/Loading/Loading"; 

// const Dashboard = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [isAdmin, isAdminLoading] = useAdmin(); 
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Use user.photoURL directly since students array is empty
//   const profileImage = user?.photoURL || "/default-profile.png";

//   // Redirect based on user role when accessing /dashboard
//   useEffect(() => {
//     if (location.pathname === "/dashboard" && !isAdminLoading) {
//       if (isAdmin) {
//         navigate("/dashboard/manage-users");
//       } else {
//         navigate("/dashboard/studentProfile");
//       }
//     }
//   }, [isAdmin, isAdminLoading, navigate, location.pathname]);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const closeSidebar = () => setSidebarOpen(false);

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           title: "Logged Out",
//           text: "You have successfully logged out.",
//           showConfirmButton: false,
//           timer: 2000,
//         });
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("Logout error:", error);
//         Swal.fire({
//           icon: "error",
//           title: "Logout Failed",
//           text: "Something went wrong while logging out.",
//           confirmButtonText: "Try Again",
//         });
//       });
//   };

//   const renderNavLink = (to, icon, label) => (
//     <NavLink
//       to={to}
//       onClick={closeSidebar}
//       className={({ isActive }) =>
//         `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
//           isActive ? "bg-[var(--color-cta)] text-white" : "text-white hover:bg-white/10"
//         }`
//       }
//     >
//       {icon}
//       <span className="text-sm font-medium">{label}</span>
//     </NavLink>
//   );

//   // Show loading state while checking admin status
//   if (isAdminLoading) return <Loading />;

//   return (
//     <div className="fixed inset-0 flex w-full h-full overflow-hidden">
//       {/* Mobile Navbar */}
//       <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-white shadow-md z-50 flex items-center justify-between px-4">
//         <button
//           onClick={toggleSidebar}
//           className="text-[var(--color-text-dark)] text-2xl"
//           aria-label="Toggle Sidebar"
//         >
//           <FaBars />
//         </button>
//         <h2 className="text-lg font-medium text-[var(--color-text-dark)]">Dashboard</h2>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static h-full w-64 bg-[var(--color-text-dark)] transition-transform duration-300 z-40 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0`}
//       >
//         <div className="h-full overflow-y-auto">
//           <div className="p-5">
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-white mb-6">Menu</h2>
//               <nav className="space-y-2">
//                 {renderNavLink("/", <FaHome className="text-xl" />, "Home")}
//                 {user && isAdmin === false && (
//                   <>
//                     {renderNavLink("/dashboard/studentProfile", <FaUser className="text-xl" />, "Profile")}
                    
//                   </>
//                 )}
//                 {user && isAdmin && (
//                   <>
//                     {renderNavLink("/dashboard/manage-users", <FaTasks className="text-xl" />, "Manage Users")}
//                     {renderNavLink("/dashboard/message", <FaBook className="text-xl" />, "Messages")}
//                     {renderNavLink("/dashboard/addBlog", <FaBook className="text-xl" />, "Add Blog")}
//                     {renderNavLink("/dashboard/editBlog", <FaBook className="text-xl" />, "Edit Blog")}
//                   </>
//                 )}
//               </nav>
//             </div>

//             {/* User Section */}
//             <div className="border-t border-white/10 pt-4 mt-auto">
//               <div className="flex items-center gap-3 mb-4">
//                 <img
//                   src={profileImage}
//                   alt={user?.displayName || "User"}
//                   className="w-10 h-10 rounded-full border-2 border-white"
//                   onError={(e) => (e.target.src = "/default-profile.png")}
//                 />
//                 <div className="flex-1 min-w-0">
//                   <h3 className="font-medium text-sm text-white truncate">{user?.displayName || "User"}</h3>
//                   <p className="text-xs text-gray-300 truncate">{user?.email}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="w-full bg-[var(--color-cta)] text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
//               >
//                 <FaSignOutAlt />
//                 <span>Logout</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 relative w-full h-full bg-[var(--color-background)]">
//         <div className="absolute inset-0 overflow-auto md:pt-0 pt-14">
//           <div className="min-h-full w-full p-4 md:p-6">
//             <Outlet />
//           </div>
//         </div>
//       </main>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={toggleSidebar}></div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;



import { useState, useContext, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  User,
  Users,
  Home,
  LogOut,
  Shield,
  UserPlus,
  Eye,
  Crown,
  MessageSquare,
  Settings
} from "lucide-react";
import Swal from "sweetalert2";

import useAdmin from "../hooks/useAdmin";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../Providers/AuthProvider";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();

  // 🔧 Temporary mock for testing
// const isAdmin = true;
// const isAdminLoading = false;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const profileImage = user?.photoURL || "/default-profile.png";

  // useEffect(() => {
  //   console.log('Dashboard redirect effect:', {
  //     pathname: location.pathname,
  //     isAdmin,
  //     isAdminLoading,
  //     user: !!user
  //   });
    
  //   if (location.pathname === "/dashboard" && !isAdminLoading) {
  //     if (isAdmin) {
  //       console.log('Redirecting to manage-users');
  //       navigate("/dashboard/manage-users");
  //     } else {
  //       console.log('Redirecting to studentProfile');
  //       navigate("/dashboard/studentProfile");
  //     }
  //   }
  // }, [isAdmin, isAdminLoading, navigate, location.pathname]);

  // Additional effect to handle the case when user is not loading but role is still being determined


  // useEffect(() => {
  //   if (location.pathname === "/dashboard" && !isAdminLoading && user) {
  //     // Small delay to ensure all state is properly set
  //     const timer = setTimeout(() => {
  //       if (isAdmin) {
  //         console.log('Delayed redirect to manage-users');
  //         navigate("/dashboard/manage-users");
  //       } else {
  //         console.log('Delayed redirect to studentProfile');
  //         navigate("/dashboard/studentProfile");
  //       }
  //     }, 100);
      
  //     return () => clearTimeout(timer);
  //   }
  // }, [isAdmin, isAdminLoading, user, navigate, location.pathname]);


  useEffect(() => {
  if (location.pathname === "/dashboard" && !isAdminLoading && user) {
    const redirectPath = isAdmin ? "/dashboard/manage-users" : "/dashboard/studentProfile";
    navigate(redirectPath);
  }
}, [isAdmin, isAdminLoading, user, navigate, location.pathname]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have successfully logged out.",
          showConfirmButton: false,
          timer: 2000,
          background: "#FBF8F3",
          customClass: {
            title: "text-[#0A3D91] text-xl",
            content: "text-[#6B7280]",
          }
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: "Something went wrong while logging out.",
          confirmButtonText: "Try Again",
          background: "#FBF8F3",
          customClass: {
            title: "text-[#0A3D91] text-xl",
            content: "text-[#6B7280]",
          }
        });
      });
  };

  const renderNavLink = (to, icon, label) => (
    <NavLink
      to={to}
      onClick={closeSidebar}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white shadow-lg"
            : "text-[#FDF6E9] hover:bg-[#0A3D91]/20 hover:text-white hover:shadow-md"
        }`
      }
    >
      {icon}
      <span className="text-sm font-semibold">{label}</span>
    </NavLink>
  );

  if (isAdminLoading) return <Loading />;

  return (
    <div className="fixed inset-0 flex w-full h-full overflow-hidden bg-[#FDF6E9]">
      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#FBF8F3] shadow-lg z-50 flex items-center justify-between px-4 sm:px-6 border-b border-[#E5E0D5]">
        <button
          onClick={toggleSidebar}
          className="text-[#0A3D91] text-2xl p-2 rounded-lg hover:bg-[#0A3D91]/10 transition-colors"
          aria-label="Toggle Sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-[#0A3D91] to-[#08306B] rounded-lg flex items-center justify-center">
            <Crown className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-base sm:text-lg font-bold text-[#0A3D91] tracking-wide">Dashboard</h2>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static h-full w-64 sm:w-72 lg:w-80 bg-gradient-to-b from-[#0A3D91] to-[#08306B] shadow-2xl transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D0A96A] rounded-2xl flex items-center justify-center">
                <Crown className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wide">Admin Panel</h2>
                <p className="text-[#D0A96A] text-xs sm:text-sm font-medium">NoorVia BD</p>
              </div>
            </div>
            <nav className="space-y-2 sm:space-y-3">
              {renderNavLink("/", <Home className="h-4 w-4 sm:h-5 sm:w-5" />, "Home")}
              {user && isAdmin === false && (
                <>
                  {renderNavLink("/dashboard/studentProfile", <User className="h-4 w-4 sm:h-5 sm:w-5" />, "Profile")}
                </>
              )}
              {user && isAdmin && (
                <>
                  {renderNavLink("/dashboard/manage-users", <Users className="h-4 w-4 sm:h-5 sm:w-5" />, "Manage Users")}
                  {renderNavLink("/dashboard/AddTeam", <UserPlus className="h-4 w-4 sm:h-5 sm:w-5" />, "Add Team Members")}
                  {renderNavLink("/dashboard/showTeamMembers", <Eye className="h-4 w-4 sm:h-5 sm:w-5" />, "Show All Members")}
                  {renderNavLink("/dashboard/showPerformersClub", <Crown className="h-4 w-4 sm:h-5 sm:w-5" />, "Show PerformersClub")}
                  {renderNavLink("/dashboard/showContact", <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />, "Show Contact Data")}
                </>
              )}
            </nav>
          </div>
          {/* User Section */}
          <div className="border-t border-[#D0A96A]/30 pt-4 pb-4 sm:pt-6 sm:pb-6 px-4 sm:px-6 lg:px-8 bg-[#0A3D91]/20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="relative">
                <img
                  src={profileImage}
                  alt={user?.displayName || "User"}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-3 border-[#D0A96A] shadow-lg"
                  onError={(e) => (e.target.src = "/default-profile.png")}
                />
                {isAdmin && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#D0A96A] rounded-full flex items-center justify-center">
                    <Shield className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg text-white truncate">{user?.displayName || "User"}</h3>
                <p className="text-xs sm:text-sm text-[#D0A96A] truncate font-medium">{user?.email}</p>
                {isAdmin && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#D0A96A] text-white text-xs font-semibold rounded-lg mt-1">
                    <Crown className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    Admin
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full bg-gradient-to-r from-[#B91C1C] to-[#991B1B] text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl hover:from-[#991B1B] hover:to-[#B91C1C] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative w-full h-full bg-transparent">
        <div className="absolute inset-0 overflow-auto lg:pt-0 pt-16">
          <div className="min-h-full w-full p-3 sm:p-4 lg:p-6 xl:p-8">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-[#0A3D91]/20 backdrop-blur-sm z-30 lg:hidden" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default Dashboard;