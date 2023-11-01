import { useEffect, useState } from "react";
import { createContext } from "react";
export const VendorContext = createContext();
export default function VendorContextProvider({ children }) {
    const [shopPictureFile,setShopPictureFile ] = useState(null)
    const [idCardFile,setIdCardFile] = useState(null)
    const [appInput,setAppInput] = useState({})
    const hdl_input = (e) =>{
        setAppInput({...appInput,[e.target.name]:e.target.value})
    }



  return <VendorContext.Provider value={{hdl_input}}>{children}</VendorContext.Provider>;
}
