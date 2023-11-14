import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/user/HomePage";
import UserLogin from "../pages/login/userLogin";
import VendorLogin from "../pages/login/vendorLogin";
import AdminLogin from "../pages/login/AdminLogin";
import UserRegister from "../pages/register/userRegister";
import VendorRegister from "../pages/register/vendorRegister";
import RedirectIfAuth from "../redirect/redirectIfAuth";
import VendorAttatch from "../pages/vendor/VendorAttachfile";
import UploadIdUser from "../pages/register/UploadIdUser";
import UploadIdPeople from "../pages/register/UploadIdPeople";
import MapStore from "../pages/register/MapStore";
import VendorApplicationEnd from "../pages/vendor/VendorApplicationEnd";
import RegisterVender from "../pages/register/RegisterVender";
// import { element } from "prop-types";
import RestaurantDetailsForm from "../component/admin/RestaurantDetailsForm";
import AdminManagementVendorForm from "../component/admin/AdminManagementMain";
import AdminApprovedVendorFrom from "../component/admin/AdminApprovedVendorForm";
import VendorFooter from "../component/footers/VendorFooter";
import UserFooter from "../component/footers/UserFooter";
import Calender from "../component/Calender";
import LinePage from "../pages/login/lineLogin";
import CallbackPage from "../pages/user/CallbackPage";
import VendorApplication from "../pages/vendor/VendorApplication";
import RedirectIfNotVendor from "../redirect/redirectIfNotVendor";
import VendorContextProvider from "../context/vendor_context";
import VendorLanding from "../pages/vendor/VendorLanding";
import BookingPage from "../pages/user/BookingPage";
import VendorQueueManagement from "../pages/vendor/VendorQueueManagement";
import VendorManagement from "../pages/admin/VendorsManagement";
import RedirectIfNotAdmin from "../redirect/redirectIfNotAdmin";
import AdminContextProvider from "../context/admin_context";
import ApproveVendor from "../pages/admin/ApproveVendor";
import CategoryPage from "../pages/admin/categoryCRUD";
import RedirectIfNotUser from "../redirect/redirectIfNotUser";
import UserContextProvider from "../context/user_context";
import ShopList from "../pages/user/ShopList";
import UserBookPage from "../pages/user/UserBookPage";
import QueueContextProvider from "../context/queue_context";
import VendorHome from "../pages/vendor/VendorHome";
import UserTicketPage from "../pages/user/UserTicketPage";
import VendorOnsiteBook from "../pages/vendor/VendorOnsiteBook";
import AdminManagement from "../pages/admin/AdminManagement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "Category", element: <CategoryPage /> },
      { path: "test/book", element: <UserBookPage /> },
      { path: "user", element: <BookingPage /> },
      { path: "shop", element: <VendorQueueManagement /> },
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
      { path: "/login/admin", element: <AdminLogin /> },
    ],
  },
  {
    path: "/register",
    element: (
      <RedirectIfAuth>
        <Layout />
      </RedirectIfAuth>
    ),
    children: [
      { path: "/register/user", element: <UserRegister /> },
      { path: "/register/vendor", element: <VendorRegister /> },
    ],
  },
  {
    path: "/line-callback",
    element: <CallbackPage />,
  },
  {
    path: "/vendor",
    element: (
      <RedirectIfNotVendor>
        <QueueContextProvider>
          <VendorContextProvider>
            <Layout />
          </VendorContextProvider>
        </QueueContextProvider>
      </RedirectIfNotVendor>
    ),
    children: [
      { path: "/vendor", element: <VendorLanding /> },
      { path: "/vendor/application", element: <VendorApplication /> },
      { path: "/vendor/attatch", element: <VendorAttatch /> },
      {
        path: "/vendor/VendorApplicationEnd",
        element: <VendorApplicationEnd />,
      },
      { path: "/vendor/home", element: <VendorHome /> },
      { path: "/vendor/booking", element: <VendorOnsiteBook /> },
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
      { path: "/admin/vendor", element: <AdminManagement /> },
      { path: "/admin/pending", element: <ApproveVendor /> },
      { path: "/admin/category", element: <CategoryPage /> },
    ],
  },
  {
    path: "/user",
    element: (
      <RedirectIfNotUser>
        <QueueContextProvider>
          <UserContextProvider>
            <Layout />
          </UserContextProvider>
        </QueueContextProvider>
      </RedirectIfNotUser>
    ),
    children: [
      { path: "/user/shopList", element: <ShopList /> },
      { path: "/user/book", element: <UserBookPage /> },
      { path: "/user/ticket", element: <UserTicketPage /> },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
