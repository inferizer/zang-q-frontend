import { useContext } from "react";
import { AuthContext } from "../context/auth_context";

export  function useAuth(){
    return useContext(AuthContext)
}