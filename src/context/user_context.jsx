import axios from "../config/axios";
import { useEffect,useState,createContext } from "react";
export const UserContext = createContext()


export default function UserContextProvider({children}){

    useEffect(()=>{
        axios.get('/user/shop').then(console.log)
    },[])
    return <UserContext.Provider value={{}}>
        {children}
    </UserContext.Provider>
}