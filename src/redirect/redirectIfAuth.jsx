import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuthContext";
import { ADMIN, USER, VENDOR } from "../constant/role"
import { getAccessToken } from "../utils/localStorage";

export default function RedirectIfAuth({ children }) {
    const { authUser } = useAuth()
    if (getAccessToken()) {
        if (authUser.role === ADMIN) return < Navigate to="/admin/pending" />
        if (authUser.role === USER) return < Navigate to="/user/shopList" />
        if (authUser.role === VENDOR) return < Navigate to="/vendor" />
    }
    return children
}
