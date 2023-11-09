import { useContext } from "react";
import { AdminContext } from "../context/admin_context";

export function useAdmin(){
    return useContext(AdminContext)
}