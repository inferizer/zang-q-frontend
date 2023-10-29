import axios from "../config/axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext()

export default function AuthContextProvider({children}){
    useEffect(()=>{

    })


    const hdl_register_submit= (input) =>{
        axios.post('/auth/register/user',input).then(res=>{
            console.log(res)
        }).catch(error =>{
            console.log(error.response.data.message)
        })
    }
    return(<AuthContext.Provider value={{hdl_register_submit}}>
        {children}
    </AuthContext.Provider>)
}