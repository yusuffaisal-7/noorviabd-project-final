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
import CompanyProfile from "../pages/CompanyProfile/CompanyProfile";
import Contact from "../pages/Contact/Contact";
import InvestorConnection from "../pages/InvestorConnection/InvestorConnection";
import ProductsServices from "../pages/ProductsServices/ProductsServices";
import PerformersClub from "../pages/PerformersClub/PerformersClub";
import AddTeam from "../pages/Dashboard/AddTeam";
import ShowTeamMembers from "../pages/Dashboard/ShowTeamMembers";
import ShowPerformersClub from "../pages/Dashboard/ShowPerformersClub";
import ShowContactData from "../pages/Dashboard/ShowContactData";


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
      {
        path: "/company-profile",
        element: <CompanyProfile></CompanyProfile>,
      },

      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/investor-connect",
        element: <InvestorConnection></InvestorConnection>,
      },

       {
        path: "/products-services",
        element: <ProductsServices></ProductsServices>,
      },
       {
        path: "/performers-club",
        element: <PerformersClub></PerformersClub>,
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
         <AdminRoute>
               <ManageUsers />
          </AdminRoute>
           
          
        ),
      },
     {
        path: "AddTeam",
        element: (
         <AdminRoute>
              <AddTeam></AddTeam>
          </AdminRoute>
           
          
        ),
      },
       {
        path: "showTeamMembers",
        element: (
         <AdminRoute>
              <ShowTeamMembers></ShowTeamMembers>
          </AdminRoute>
           
          
        ),
      },
      {
        path: "showPerformersClub",
        element: (
         <AdminRoute>
             <ShowPerformersClub></ShowPerformersClub>
          </AdminRoute>
           
          
        ),
      },
      {
        path: "showContact",
        element: (
         <AdminRoute>
            <ShowContactData></ShowContactData>
        </AdminRoute>
           
          
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