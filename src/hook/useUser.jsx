import { useContext } from "react";
import { UserContext } from "../context/user_context";

export  function useUser(){
    return useContext(UserContext)
}