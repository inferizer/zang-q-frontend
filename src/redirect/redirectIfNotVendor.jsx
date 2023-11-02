import {Navigate} from "react-router-dom"
import { useAuth } from "../hook/useAuthContext";
import { getAccessToken } from "../utils/localStorage";
export default function RedirectIfNotVendor({children}){
    const {authUser} = useAuth()

    if(getAccessToken()){
        if(authUser.role == "vendor"){
            return children
        }
    }
    return < Navigate  to="/"/>
    

}