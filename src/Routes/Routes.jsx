import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";

import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import useAdmin from "../hooks/useAdmin";
import Loading from "../components/Loading/Loading";
import Profile from "../pages/Dashboard/Profile";
import NotFound from "../pages/NotFoumd";


// Custom wrapper to restrict routes to admins
const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  if (isAdminLoading) return <div><Loading></Loading></div>;
  if (!isAdmin) return <div className="text-center py-10 text-red-500">Access Denied: Admins Only</div>;
  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    
      {
        path: "login",
        element: <Login></Login>,
      },
     {
        path: "signup",
        element: <SignUp></SignUp>,
      },
 
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // admin routes
      {
        path: "manage-users",
        element: (
        //  <AdminRoute>
               <ManageUsers />
        //  </AdminRoute>
           
          
        ),
      },
     
     
      // user routes
      {
        path: "studentProfile",
        element: (
          <Profile></Profile>
          
        ),
      },
     
  {
  path: "*",
  element: <NotFound />,
}

    ],
  },
]);