import { Outlet } from "react-router-dom";
import Header from "./Header";
import UserDetailModal from "../component/modals/userDetailModal";
import { useAuth } from "../hook/useAuthContext";
import AdminManagement from "../pages/admin/AdminManagement";

export default function Layout() {
  const { userDetailOpen } = useAuth();
  return (
    <div className=" relative">
      <Header />
      <Outlet />

      {userDetailOpen && <UserDetailModal />}
    </div>
  );
}
