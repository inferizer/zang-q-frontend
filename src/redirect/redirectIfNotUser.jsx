import {Navigate} from "react-router-dom"
import { useAuth } from "../hook/useAuthContext";
import {getAccessToken} from "../utils/localStorage"
import { USER } from "../constant/role";
export default function RedirectIfNotUser({children}){
    
if(getAccessToken()){
    const {authUser:{role}} = useAuth()
    if( role == USER) return children
}

return < Navigate  to="/login/user"/>
    

}