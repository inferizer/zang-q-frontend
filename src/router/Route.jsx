import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/user/HomePage";
import CategoryPage from "../pages/user/CategoryPage";
import UserLogin from "../pages/login/userLogin";
import VendorLogin from "../pages/login/vendorLogin";
import UserRegister from "../pages/register/userRegister";
import VendorRegistor from "../pages/register/vendorRegister";

import RedirectIfAuth from "../redirect/redirectIfAuth";

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
    ],
  },
  {
    path: "/register",
    element: (
    
        <Layout />
     
    ),
    children: [
      { path: "/register/user", element: <UserRegister /> },
      { path: "/register/vendor", element: <VendorRegistor /> },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
