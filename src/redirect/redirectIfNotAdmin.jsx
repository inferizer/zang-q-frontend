import {Navigate} from "react-router-dom"
import { useAuth } from "../hook/useAuthContext";
import {getAccessToken} from "../utils/localStorage"
import { ADMIN } from "../constant/role";
export default function RedirectIfNotAdmin({children}){
    
if(getAccessToken()){
    const {authUser:{role}} = useAuth()
    if( role == ADMIN) return children
}

return < Navigate  to="/"/>
    

}