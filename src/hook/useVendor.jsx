import { useContext } from "react";
import { VendorContext } from "../context/vendor_context";


export  function useVendor(){
    return useContext(VendorContext)
}