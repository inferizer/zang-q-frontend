import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/user/HomePage";
import CategoryPage from "../pages/user/CategoryPage";
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
import LinePage from "../pages/login/lineLogin";
import CallbackPage from "../pages/user/CallbackPage";
import VendorApplication from "../pages/vendor/VendorApplication";
import RedirectIfNotVendor from "../redirect/redirectIfNotVendor";
import VendorContextProvider from "../context/vendor_context";
import VendorLanding from "../pages/vendor/VendorLanding";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "Category", element: <CategoryPage /> },
      
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
      { path: "/login/line",element: <LinePage/>}
      
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
        path: "/test/user/homepage",
        element: <HomePage/>
      }
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

]);
export default function Router() {
  return <RouterProvider router={router} />;
}
