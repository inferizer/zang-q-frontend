import axios from "../config/axios";
import { createContext } from "react";
import { useState } from "react";
export const ValidationContext = createContext()

export default function ValidationContextProvider({children}){
const [input,SetInput] = useState({})
    
    const hdl_input = (e) =>{
        SetInput({...input, [e.target.name]:e.target.value})
    }

    
    return(<ValidationContext.Provider value={{input,hdl_input}}>
        {children}
    </ValidationContext.Provider>)
}