import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/user/HomePage";
import UserLogin from "../pages/login/userLogin";
import VendorLogin from "../pages/login/vendorLogin";
import UserRegister from "../pages/register/userRegister";
import VendorRegister from "../pages/register/vendorRegister";
import RedirectIfAuth from "../redirect/redirectIfAuth";
import File from "../pages/register/Attachfile";
import UploadIdUser from "../pages/register/UploadIdUser";
import RegisterUserReal from "../pages/register/registerUserReal";
import UploadIdPeople from "../pages/register/UploadIdPeople";
import AddStore from "../pages/register/AddStore";
import MapStore from "../pages/register/MapStore";
import ResearchStore from "../pages/register/ResearchStore";
import RegisterVender from "../pages/register/RegisterVender";
// import { element } from "prop-types";
import RestaurantDetailsForm from "../component/admin/RestaurantDetailsForm";
import UserManagementForm from "../component/admin/UserManagementForm";
import ApproveUserFrom from "../component/admin/ApproveUserForm";
import VendorFooter from "../component/footers/VendorFooter";
import UserFooter from "../component/footers/UserFooter";
import Calender from "../component/Calender";
import LinePage from "../pages/login/lineLogin";
import CallbackPage from "../pages/user/CallbackPage";
import VendorApplication from "../pages/vendor/VendorApplication";
import RedirectIfNotVendor from "../redirect/redirectIfNotVendor";
import VendorContextProvider from "../context/vendor_context";
import VendorLanding from "../pages/vendor/VendorLanding";
import VendorManagement from "../pages/admin/VendorsManagement"
import RedirectIfNotAdmin from "../redirect/redirectIfNotAdmin";
import AdminContextProvider from "../context/admin_context";
import ApproveVendor from "../pages/admin/ApproveVendor";
import CategoryPage from "../pages/admin/category";
import AdminLogin from "../pages/login/adminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
  

    ],
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuth>
        <Layout />
      </RedirectIfAuth>
    ),
    children: [
      { path: "/login/user", element: <UserLogin /> },
      { path: "/login/vendor", element: <VendorLogin /> },
      { path: "/login/line", element: <LinePage /> },
      {path: "/login/admin",element: <AdminLogin/>}

    ],
  },
  {
    path: "/register",
    element: <Layout />,
    children: [
      { path: "/register/user", element: <UserRegister /> },
      { path: "/register/vendor", element: <VendorRegister /> },
    ],
  },
  {
    path: "/test",
    element: <Layout />,
    children: [
      { path: "/test", element: <RegisterUserReal /> },
      { path: "/test/file", element: <File /> },
      { path: "/test/file/iduser", element: <UploadIdUser /> },
      { path: "/test/file/iduser/idpeople", element: <UploadIdPeople /> },
      { path: "/test/file/iduser/idpeople/addstore", element: <AddStore /> },
      {
        path: "/test/file/iduser/idpeople/addstore/mapstore",
        element: <MapStore />,
      },
      {
        path: "/test/file/iduser/idpeople/addstore/mapstore/researchstore",
        element: <ResearchStore />,
      },
      {
        path: "/test/file/iduser/idpeople/addstore/mapstore/researchstore/registervender",
        element: <RegisterVender />,
      },
      {
        path: "/test/admin/restaurant-datails",
        element: <RestaurantDetailsForm />,
      },
      {
        path: "/test/user/management",
        element: <UserManagementForm />,
      },
      {
        path: "/test/user/approve",
        element: <ApproveUserFrom />,
      },
      {
        path: "/test/vendor/footer",
        element: <VendorFooter />,
      },
      {
        path: "/test/user/footer",
        element: <UserFooter />,
      },
      {
        path: "/test/user/calender",
        element: <Calender />,
      },
    ],
  },
  {
    path: '/line-callback',
    element: <CallbackPage />
  },
  {
    path: "/vendor",
    element: (
      <RedirectIfNotVendor>
        <VendorContextProvider>
          <Layout />
        </VendorContextProvider>
      </RedirectIfNotVendor>
    ),
    children: [
      { path: "/vendor", element: <VendorLanding /> },
      { path: "/vendor/application", element: <VendorApplication /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <RedirectIfNotAdmin>
        <AdminContextProvider>
          <Layout />
        </AdminContextProvider>
      </RedirectIfNotAdmin>
    ),
    children: [
      {path: "/admin/vendor", element: < VendorManagement /> },
      {path: "/admin/pending",element: < ApproveVendor />,},
      {path: "/admin/category",element:<CategoryPage />},
    ]
  },

]);
export default function Router() {
  return <RouterProvider router={router} />;
}
