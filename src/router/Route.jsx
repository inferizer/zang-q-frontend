import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/user/HomePage";
import CategoryPage from "../pages/user/CategoryPage";
import UserLogin from "../pages/login/userLogin";
import VendorLogin from "../pages/login/vendorLogin";
import UserRegister from "../pages/register/userRegister";
import VendorRegistor from "../pages/register/vendorRegister";

import RedirectIfAuth from "../redirect/redirectIfAuth";
import VendorApplication from "../pages/vendor/VendorApplication";
import RedirectIfNotVendor from "../redirect/redirectIfNotVendor";
import VendorContextProvider from "../context/vendor_context";
import VendorScreenMornitorHome from "../pages/vendor/VendorScreenMornitorHome";
import AdminLogin from "../pages/login/AdminLogin";
import UserLookMap from "../pages/user/UserLookMap";
import UserProfile from "../pages/user/UserProfile";
import UserBookPage from "../pages/user/UserBookPage";
import UserHadQPage from "../pages/user/UserHadQPage";

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
      { path: "/login/admin", element: <AdminLogin /> },
    ],
  },
  {
    path: "/register",
    element: <Layout />,
    children: [
      { path: "/register/user", element: <UserRegister /> },
      { path: "/register/vendor", element: <VendorRegistor /> },
    ],
  },
  {
    path: "/user",
    element: <Layout />,
    children: [
      { path: "/user/profile", element: <UserProfile /> },
      { path: "/user/map", element: <UserLookMap /> },
      { path: "/user/book", element: <UserBookPage /> },
      { path: "/user/q", element: <UserHadQPage /> },
    ],
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
      { path: "/vendor/application", element: <VendorApplication /> },
      {
        path: "/vendor/SMH",
        element: <VendorScreenMornitorHome />,
      },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}

// /vendor/application
// /vendor/Test
// /vendor/SMH
