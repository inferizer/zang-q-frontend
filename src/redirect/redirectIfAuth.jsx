import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuthContext";
import { ADMIN, USER, VENDOR } from "../constant/role"
import { getAccessToken } from "../utils/localStorage";

export default function RedirectIfAuth({ children }) {
    const { authUser } = useAuth()
    console.log(authUser, '------------------')
    if (getAccessToken()) {
        if (authUser.role === ADMIN) return < Navigate to="/admin/pending" />
        if (authUser.role === USER) return < Navigate to="/user/shopList" />
        if (authUser.role === VENDOR) {
            if(!authUser.Shops || authUser.Shops.length <= 0)return < Navigate to="/vendor/attatch" />
            return < Navigate to="/vendor/home" />

        }
    }
    return children
}
