import { Navigate } from "react-router-dom"
import { useAuth } from "../hook/useAuthContext";
import { getAccessToken } from "../utils/localStorage"
import { ADMIN, USER } from "../constant/role";
export default function RedirectIfNotAdmin({ children }) {

    if (getAccessToken()) {
        const { authUser: { role } } = useAuth()
        if (role == ADMIN) return children
        if (role == USER) return <Navigate to="/user/shopList" />
    }

    return < Navigate to="/" />


}