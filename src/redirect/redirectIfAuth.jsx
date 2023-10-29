import {Navigate} from "react-router-dom"
import { useAuth } from "../hook/useAuthContext";

export default function RedirectIfAuth({children}){
    const {authUser} = useAuth()
    console.log('redirect',authUser)
    if(authUser){
        return < Navigate  to="/"/>
    }
    return children

}