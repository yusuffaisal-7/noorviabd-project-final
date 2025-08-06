

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
  FaBars,
  FaUser,
  FaTasks,
  FaHome,
  FaBook,
  FaSignOutAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";

import useAdmin from "../hooks/useAdmin";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../Providers/AuthProvider";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [isAdmin, isAdminLoading] = useAdmin();

  // 🔧 Temporary mock for testing
const isAdmin = true;
const isAdminLoading = false;

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
        });
      });
  };

  const renderNavLink = (to, icon, label) => (
    <NavLink
      to={to}
      onClick={closeSidebar}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow"
            : "text-white hover:bg-white/10 hover:shadow"
        }`
      }
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </NavLink>
  );

  if (isAdminLoading) return <Loading />;

  return (
    <div className="fixed inset-0 flex w-full h-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-white shadow z-50 flex items-center justify-between px-4">
        <button
          onClick={toggleSidebar}
          className="text-rose-500 text-2xl"
          aria-label="Toggle Sidebar"
        >
          <FaBars />
        </button>
        <h2 className="text-lg font-bold text-rose-500 tracking-wide">Dashboard</h2>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static h-full w-64 bg-gradient-to-b from-rose-500 to-pink-400 shadow-lg transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="p-6">
            <h2 className="text-2xl font-extrabold text-white mb-8 tracking-wide">Menu</h2>
            <nav className="space-y-2">
              {renderNavLink("/", <FaHome className="text-xl" />, "Home")}
              {user && isAdmin === false && (
                <>
                  {renderNavLink("/dashboard/studentProfile", <FaUser className="text-xl" />, "Profile")}
                </>
              )}
              {user && isAdmin && (
                <>
                  {renderNavLink("/dashboard/manage-users", <FaTasks className="text-xl" />, "Manage Users")}
                  
                </>
              )}
            </nav>
          </div>
          {/* User Section */}
          <div className="border-t border-white/20 pt-6 pb-6 px-6 bg-white/10">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={profileImage}
                alt={user?.displayName || "User"}
                className="w-12 h-12 rounded-full border-4 border-white shadow"
                onError={(e) => (e.target.src = "/default-profile.png")}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base text-white truncate">{user?.displayName || "User"}</h3>
                <p className="text-xs text-gray-100 truncate">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full bg-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/30 transition-all flex items-center justify-center gap-2 font-semibold"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative w-full h-full bg-transparent">
        <div className="absolute inset-0 overflow-auto md:pt-0 pt-14">
          <div className="min-h-full w-full p-4 md:p-8">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 md:hidden" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default Dashboard;