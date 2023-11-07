import { useContext } from "react";
import { UserContext } from "../context/user_context";

export  function useAuth(){
    return useContext(UserContext)
}