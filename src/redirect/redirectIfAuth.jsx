import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuthContext";

export default function RedirectIfAuth({ children }) {
  const { authUser } = useAuth();
  console.log(authUser);
  if (authUser) {
    if (authUser.role !== "vendor" && authUser.role !== "admin") {
      return <Navigate to='/' />;
    } else if (authUser.role === "vendor") {
      return <Navigate to='/vendor/home' />;
    }
    return <Navigate to='/admin/pending' />;
  }
  return children;
}
