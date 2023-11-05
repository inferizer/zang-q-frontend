import { createContext } from "react";
import { useEffect,useState } from "react";
import axios from "../config/axios";
export const AdminContext = createContext()
export default function AdminContextProvider({children}){
    const [pendingVendor,setPendingVendor] = useState(null)
    const [singlePendingVendor,setSinglePendingVendor] = useState([])
    useEffect(()=>{
        axios.get('/admin/pending').then( res => {
            setPendingVendor(res.data.result)
        })
    },[])

    const hdl_view_pending_detail = (input) => {
        const singlePendingApplication = pendingVendor.filter(el => el.shopAccountId == input)
        setSinglePendingVendor(singlePendingApplication)
    }

    return <AdminContext.Provider value={{pendingVendor,hdl_view_pending_detail,singlePendingVendor}}>
        {children}
    </AdminContext.Provider>
}